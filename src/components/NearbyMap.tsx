// 주변 지도 — 내 위치를 가운데 두고 거리를 동심원으로 그린다.
// 목록의 '724 m'라는 숫자만으로는 그게 걸어갈 만한 거리인지 감이 안 온다.
// 원 안에 들어와 있는지 눈으로 보면 바로 안다.
import { useEffect } from 'react'
import { Circle, MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'

const TILE_URL = (import.meta.env.VITE_TILE_URL as string | undefined) || 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

/** 반경 고리. 선택한 것만 진하게, 나머지는 옅은 점선. */
const RINGS = [500, 1000, 2000, 5000] as const

export interface MapPin {
  id: string
  lat: number
  lng: number
  icon: string
  label: string
  onClick?: () => void
}

interface Props {
  me: { lat: number; lng: number }
  radius: number
  pins: MapPin[]
}

const label = (m: number) => (m < 1000 ? `${m} m` : `${m / 1000} km`)

// 위도 1도는 어디서나 약 111.32 km. 고리 위쪽에 눈금을 달기 위한 어림값.
const METERS_PER_DEG_LAT = 111_320

// 눈금 아이콘은 반경이 바뀌어도 절대 바꾸지 않는다.
//
// 아이콘을 바꾸면 react-leaflet 이 marker.setIcon() 을 부르고, Leaflet 은 그 표식의
// DOM 을 통째로 갈아끼운다. 그 사이 React 가 같은 노드를 치우려 들면
// 'removeChild: 노드가 이 노드의 자식이 아님' 으로 앱 전체가 멈춘다.
// 그래서 아이콘은 반경마다 하나씩 고정해 두고, 어느 것을 강조할지는
// 지도 바깥의 data-radius 속성을 보고 CSS 가 정한다.
const ringIconCache = new Map<number, L.DivIcon>()
function ringLabelIcon(meters: number) {
  let icon = ringIconCache.get(meters)
  if (!icon) {
    icon = L.divIcon({
      className: '',
      html: `<span class="ring-label" data-r="${meters}">${label(meters)}</span>`,
      iconSize: [44, 16],
      iconAnchor: [22, 8],
    })
    ringIconCache.set(meters, icon)
  }
  return icon
}

const meIcon = L.divIcon({ className: '', html: '<div class="marker-me"><i></i></div>', iconSize: [20, 20], iconAnchor: [10, 10] })

const pinIconCache = new Map<string, L.DivIcon>()
function pinIcon(icon: string) {
  let made = pinIconCache.get(icon)
  if (!made) {
    made = L.divIcon({ className: '', html: `<div class="marker near">${icon}</div>`, iconSize: [22, 22], iconAnchor: [11, 11] })
    pinIconCache.set(icon, made)
  }
  return made
}

/** 반경을 바꾸면 그 원이 화면에 꽉 차도록 맞춘다 */
function FitToRadius({ me, radius }: { me: Props['me']; radius: number }) {
  const map = useMap()
  useEffect(() => {
    // toBounds 는 한 변이 주어진 길이인 정사각형을 만든다. 지름(2r)에 여백을 조금 더한다.
    map.fitBounds(L.latLng(me.lat, me.lng).toBounds(radius * 2.4), { animate: true, duration: 0.6 })
  }, [map, me.lat, me.lng, radius])
  return null
}

export default function NearbyMap({ me, radius, pins }: Props) {
  return (
    <div className="near-map" data-radius={radius}>
      <MapContainer center={[me.lat, me.lng]} zoom={15} zoomControl={false} attributionControl>
        <TileLayer url={TILE_URL} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' />
        <FitToRadius me={me} radius={radius} />

        {/* 네 고리를 언제나 다 그린다. 개수를 바꾸면 Leaflet 과 React 가 같은 DOM 을
            서로 치우려다 앱이 멈춘다. 고른 반경만 진하게, 나머지는 옅은 점선. */}
        {RINGS.map((r) => {
          const on = r === radius
          return (
            <Circle
              key={r}
              center={[me.lat, me.lng]}
              radius={r}
              pathOptions={{
                color: '#0f766e',
                weight: on ? 2 : 1,
                opacity: on ? 0.8 : 0.22,
                dashArray: on ? undefined : '4 5',
                fill: true,                       // 켜고 끄면 요소가 새로 그려진다. 투명도로만 조절한다.
                fillColor: '#0f766e',
                fillOpacity: on ? 0.07 : 0,
              }}
              interactive={false}
            />
          )
        })}

        {/* 고리마다 위쪽에 거리 눈금 */}
        {RINGS.map((r) => (
          <Marker
            key={`l${r}`}
            position={[me.lat + r / METERS_PER_DEG_LAT, me.lng]}
            icon={ringLabelIcon(r)}
            interactive={false}
          />
        ))}

        {pins.map((p) => (
          <Marker
            key={p.id}
            position={[p.lat, p.lng]}
            icon={pinIcon(p.icon)}
            title={p.label}
            eventHandlers={p.onClick ? { click: p.onClick } : undefined}
          />
        ))}

        <Marker position={[me.lat, me.lng]} icon={meIcon} interactive={false} zIndexOffset={1000} />
      </MapContainer>
    </div>
  )
}
