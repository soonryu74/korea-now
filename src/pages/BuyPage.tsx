// 무엇을 사갈까 — 서울시 공식 기념품점과 품목.
import { useMemo } from 'react'
import { POPULAR_BUYS, SEOUL_GOODS, SHOPS, TAX_REFUND, type BuyItem } from '../data/buy'
import { useApp } from '../lib/state'
import { distanceKm, formatDistance } from '../lib/geo'
import NearbyMap, { type MapPin } from '../components/NearbyMap'

const won = (n: number) => `₩${n.toLocaleString()}`

function ItemCard({ it }: { it: BuyItem }) {
  return (
    <div className="card buy-item">
      <div className="buy-head">
        <span className="buy-ic" aria-hidden="true">{it.icon}</span>
        <div>
          <div className="name">{it.en} <span className="ko">{it.ko}</span></div>
          {it.won && <div className="buy-won">{won(it.won[0])} – {won(it.won[1])}</div>}
        </div>
      </div>
      <p className="buy-what">{it.what}</p>
      <div className="buy-where"><b>Where</b> {it.where}</div>
    </div>
  )
}

export default function BuyPage() {
  const { me } = useApp()

  const shops = useMemo(
    () =>
      SHOPS.map((s) => ({ s, km: me ? distanceKm(me.lat, me.lng, s.lat, s.lng) : null }))
        .sort((a, b) => (a.km ?? 99999) - (b.km ?? 99999)),
    [me],
  )

  const pins: MapPin[] = SHOPS.map((s) => ({ id: s.id, lat: s.lat, lng: s.lng, icon: '🎁', label: s.name }))
  const centre = me ?? { lat: 37.5665, lng: 126.985 }

  return (
    <div className="page">
      <div className="section-title" style={{ marginTop: 4 }}>What to take home</div>

      <div className="card tax-card">
        <div className="label">Get the tax back</div>
        <p>
          Spend <b>{won(TAX_REFUND.min)}</b> or more in one shop showing a <b>Tax Free</b> sign and you can
          claim the 10% VAT back. Bring your passport to the counter.
        </p>
        <p className="small">
          Instant refund at the till is capped at {won(TAX_REFUND.instantPerPurchase)} per purchase
          and {won(TAX_REFUND.instantTotal)} in total. Above that, claim at the airport kiosks before check-in.
        </p>
      </div>

      <div className="section-title">Official Seoul goods shops</div>
      <p className="lede-sm">
        Run by the city, so the prices are fixed and nothing is fake. This is the safest place to buy
        something that actually says Seoul.
      </p>

      <NearbyMap me={centre} radius={5000} pins={pins} />

      {shops.map(({ s, km }) => (
        <div key={s.id} className="card shop-card">
          <div className="name">🎁 {s.name}</div>
          <div className="meta">
            {s.hours}
            {km !== null && <> · <b>{formatDistance(km)}</b></>}
          </div>
          {s.note && <p className="shop-note">{s.note}</p>}
          <div className="shop-addr">
            <div>{s.addr}</div>
            {/* 택시 기사에게 보여 줄 한글 주소 */}
            <div className="ko">{s.addrKo}</div>
          </div>
          <div className="nearby-links">
            <a href={`https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lng}`} target="_blank" rel="noreferrer">Google Maps</a>
            <a href={`https://map.naver.com/p/search/${encodeURIComponent(s.nameKo)}`} target="_blank" rel="noreferrer">Naver Map</a>
          </div>
        </div>
      ))}

      <div className="section-title">What they sell</div>
      {SEOUL_GOODS.map((it) => <ItemCard key={it.ko} it={it} />)}

      <div className="section-title">What visitors actually buy most</div>
      <p className="lede-sm">
        Not souvenirs — the everyday things people fill a second suitcase with.
      </p>
      {POPULAR_BUYS.map((it) => <ItemCard key={it.ko} it={it} />)}

      <p className="disclaimer">
        Shops and opening hours from the City of Seoul (visitseoul.net, Seoul Media Hub), checked September 2026.
        Most branches are inside a building or underground — use the Korean address if you take a taxi.
        Prices are guides, not quotes.
      </p>
    </div>
  )
}
