// 어디서 뭘 먹나 — 시장·먹자골목 지도와 주문할 것들.
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FOOD_PLACES, MUST_EAT, type Dish } from '../data/eat'
import { SPOT_BY_ID } from '../data/spots'
import { useApp } from '../lib/state'
import { distanceKm, formatDistance } from '../lib/geo'
import NearbyMap, { type MapPin } from '../components/NearbyMap'

const wonRange = ([lo, hi]: [number, number]) =>
  `₩${lo.toLocaleString()}–${hi.toLocaleString()}`

/** 메뉴 한 줄. 한글은 크게 — 주문할 때 이 화면을 그대로 보여 주면 된다. */
function DishRow({ d }: { d: Dish }) {
  return (
    <li className="dish">
      <div className="dish-head">
        <span className="dish-en">{d.en}</span>
        <span className="dish-won">{wonRange(d.won)}</span>
      </div>
      <div className="dish-ko">
        <b>{d.ko}</b>
        <span className="dish-say">{d.say}</span>
      </div>
      {d.note && <div className="dish-note">{d.note}</div>}
    </li>
  )
}

export default function EatPage() {
  const { me } = useApp()
  const [openId, setOpenId] = useState<string | null>(null)

  // spots.ts 에 있는 곳만 남긴다. 좌표와 휴무일을 거기서 그대로 쓴다.
  const places = useMemo(
    () =>
      FOOD_PLACES.map((f) => ({ f, spot: SPOT_BY_ID[f.spotId] }))
        .filter((x) => x.spot)
        .map((x) => ({ ...x, km: me ? distanceKm(me.lat, me.lng, x.spot.lat, x.spot.lng) : null }))
        .sort((a, b) => (a.km ?? 99999) - (b.km ?? 99999)),
    [me],
  )

  const pins: MapPin[] = places.map(({ f, spot }) => ({
    id: f.spotId,
    lat: spot.lat,
    lng: spot.lng,
    icon: '🍜',
    label: spot.name,
    onClick: () => setOpenId((cur) => (cur === f.spotId ? null : f.spotId)),
  }))

  // 내 위치를 모르면 서울 한복판을 기준으로 보여 준다
  const centre = me ?? { lat: 37.5665, lng: 126.978 }

  return (
    <div className="page">
      <div className="section-title" style={{ marginTop: 4 }}>Where to eat</div>
      <p className="lede-sm">
        Markets and food alleys, not single restaurants — these have been in the same place for decades,
        so you will not arrive to find them gone.
      </p>

      <NearbyMap me={centre} radius={5000} pins={pins} />

      {places.map(({ f, spot, km }) => {
        const open = openId === f.spotId
        return (
          <div key={f.spotId} className={'card food-card' + (open ? ' open' : '')}>
            <button className="food-head" onClick={() => setOpenId(open ? null : f.spotId)} aria-expanded={open}>
              <div>
                <div className="name">🍜 {spot.name}</div>
                <div className="meta">
                  {spot.nameKo}
                  {km !== null && <> · <b>{formatDistance(km)}</b></>}
                </div>
              </div>
              <span className="chev">{open ? '▲' : '▼'}</span>
            </button>

            {open && (
              <>
                <p className="why">{f.why}</p>
                <ul className="dishes">
                  {f.dishes.map((d) => <DishRow key={d.ko} d={d} />)}
                </ul>
                {f.tip && <p className="food-tip">💡 {f.tip}</p>}
                <Link className="food-link" to={`/spot/${f.spotId}`}>
                  Opening hours, crowd level and directions →
                </Link>
              </>
            )}
          </div>
        )
      })}

      <div className="section-title">Order these anywhere</div>
      <p className="lede-sm">
        Show the Korean to the staff. Many places outside the tourist streets have no English menu.
      </p>
      <div className="card">
        <ul className="dishes">
          {MUST_EAT.map((d) => <DishRow key={d.ko} d={d} />)}
        </ul>
      </div>

      <Link className="big-link" to="/buy">
        <span className="ic" aria-hidden="true">🎁</span>
        <span>
          <b>And what to take home</b>
          <small>Markets sell souvenirs too — plus the official Seoul goods shops</small>
        </span>
        <span className="go">→</span>
      </Link>

      <p className="disclaimer">
        Prices are rough per-person figures checked in September 2026, and move with the market.
        Treat them as a guide to what is cheap and what is not.
      </p>
    </div>
  )
}
