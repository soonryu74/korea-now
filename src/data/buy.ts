// 무엇을 사서 돌아갈까.
//
// 가게 목록은 서울시 공식 굿즈샵(서울마이소울샵·DDP디자인스토어)만 싣는다.
// 시에서 운영하므로 자리가 잘 바뀌지 않고, 바가지나 가짜가 없다.
// 출처: visitseoul.net 서울 기념품 안내, 서울시 미디어허브 (2026-09 확인)
//
// 좌표는 건물 기준이다. 대부분 건물 안이나 지하에 있으므로 주소를 함께 보여 준다.
// 가격대는 어림값이다. 근거가 없는 값은 적지 않는다.

export interface Shop {
  id: string
  name: string
  nameKo: string
  /** 외국인이 택시 기사에게 보여줄 한글 주소 */
  addrKo: string
  addr: string
  hours: string
  lat: number
  lng: number
  note?: string
}

/** 서울시가 직접 운영하는 공식 기념품점 */
export const SHOPS: Shop[] = [
  {
    id: 'ddp-design-store',
    name: 'DDP Design Store',
    nameKo: 'DDP디자인스토어',
    addrKo: '서울 중구 을지로 281 어울림광장 지하 2층',
    addr: 'B2, Eoullim Square, 281 Euljiro, Jung-gu',
    hours: '10:00 – 20:00 daily',
    lat: 37.56707,
    lng: 127.0099,
    note: 'The largest selection, and the only place with the Haechi character goods.',
  },
  {
    id: 'mysoul-tourism-plaza',
    name: 'Seoul My Soul Shop · Tourism Plaza',
    nameKo: '서울마이소울샵 서울관광플라자점',
    addrKo: '서울 종로구 청계천로 85 1층',
    addr: '1F, 85 Cheonggyecheon-ro, Jongno-gu',
    hours: '09:00 – 18:00 daily',
    lat: 37.56858,
    lng: 126.98697,
    note: 'Beside Cheonggyecheon stream. A tourist information desk is in the same building.',
  },
  {
    id: 'mysoul-myeongdong',
    name: 'Seoul My Soul Shop · Myeongdong',
    nameKo: '서울마이소울샵 명동관광정보센터점',
    addrKo: '서울 중구 을지로 66 1층',
    addr: '1F, 66 Euljiro, Jung-gu',
    hours: '09:00 – 18:00 daily',
    lat: 37.56515,
    lng: 126.98502,
    note: 'Closest to the Myeongdong shopping streets.',
  },
  {
    id: 'mysoul-sejong',
    name: 'Seoul My Soul Shop · Sejong Center',
    nameKo: '서울마이소울샵 세종문화회관점',
    addrKo: '서울 종로구 세종대로 175 세종문화회관 1층',
    addr: '1F, Sejong Center, 175 Sejong-daero, Jongno-gu',
    hours: '11:00 – 20:00 daily',
    lat: 37.57261,
    lng: 126.9756,
    note: 'Open latest of the central branches. Next to Gwanghwamun Square.',
  },
  {
    id: 'mysoul-seoul-gallery',
    name: 'Seoul My Soul Shop · Seoul Gallery',
    nameKo: '서울마이소울샵 서울갤러리점',
    addrKo: '서울 중구 세종대로 110 서울시청 지하 1층',
    addr: 'B1, Seoul City Hall, 110 Sejong-daero, Jung-gu',
    hours: '09:00 – 21:00, closed Sundays',
    lat: 37.56679,
    lng: 126.97842,
    note: 'Inside City Hall, under the glass building. Closed on Sundays.',
  },
  {
    id: 'mysoul-gangnam',
    name: 'Seoul My Soul Shop · Gangnam Station',
    nameKo: '서울마이소울샵 강남역점',
    addrKo: '서울 강남구 강남대로 396 강남역 지하도상가 A-8호',
    addr: 'A-8, Gangnam Station underground mall, 396 Gangnam-daero',
    hours: '13:00 – 22:00 daily',
    lat: 37.49483,
    lng: 127.02919,
    note: 'Opens in the afternoon, stays open late. In the underground shopping arcade.',
  },
  {
    id: 'mysoul-yeouido',
    name: 'Seoul My Soul Shop · Yeouido Pier',
    nameKo: '서울마이소울샵 여의도선착장점',
    addrKo: '서울 영등포구 여의동로 338 한강버스 여의도 선착장 1층',
    addr: '1F, Yeouido Pier, 338 Yeouidong-ro, Yeongdeungpo-gu',
    hours: '10:00 – 20:00, until 21:00 on weekends',
    lat: 37.52567,
    lng: 126.93606,
    note: 'At the Han River boat pier. Worth combining with a river walk.',
  },
]

export interface BuyItem {
  en: string
  ko: string
  icon: string
  what: string
  where: string
  /** 근거가 있을 때만. [최소, 최대] 원 */
  won?: [number, number]
}

/** 서울시 공식 기념품 안내에 실린 것들 */
export const SEOUL_GOODS: BuyItem[] = [
  {
    en: 'Seoul Goods',
    ko: '서울굿즈',
    icon: '🎁',
    what: 'The city\'s own line — postcards, magnets, diffusers, scarves, accessories. Around 250 items.',
    where: 'Seoul My Soul Shop (any branch) · DDP Design Store',
  },
  {
    en: 'Haechi & Soul Friends',
    ko: '해치&소울프렌즈',
    icon: '🦁',
    what: "Seoul's official characters. Keyrings, mugs, tote bags.",
    where: 'DDP Design Store',
  },
  {
    en: 'Artist collaboration goods',
    ko: '아트콜라보 굿즈',
    icon: '🎨',
    what: 'T-shirts, tote bags, tumblers and scarves made with Korean artists. Changes each year.',
    where: 'Seoul My Soul Shop',
  },
  {
    en: 'Mother-of-pearl',
    ko: '자개',
    icon: '🐚',
    what: 'Bookmarks, hand mirrors, jewellery boxes. Shell inlay worked into black lacquer — a craft that is genuinely Korean.',
    where: 'Seoul My Soul Shop · Insa-dong Ssamziegil and craft shops · department stores',
    won: [10000, 50000],
  },
  {
    en: 'Spoon and chopstick set',
    ko: '수저 세트',
    icon: '🥄',
    what: 'Stainless steel for everyday use; bangjja bronze or silver as a gift. Flat chopsticks are a Korean thing.',
    where: 'Namdaemun Market · Gwangjang Market · Insa-dong · department stores',
    won: [10000, 100000],
  },
  {
    en: 'Flavoured almonds',
    ko: '바프 아몬드',
    icon: '🥜',
    what: 'Honey butter, wasabi, buldak, ginseng. A Seoul-only fried chicken flavour exists.',
    where: 'HBAF store Myeongdong · Seoul My Soul Shop and DDP (Seoul chicken flavour only)',
  },
  {
    en: 'Character goods',
    ko: '카카오·라인프렌즈',
    icon: '🧸',
    what: 'Ryan, Apeach, Brown, BT21. Korea\'s messaging-app characters, and enormous here.',
    where: 'Line Friends Myeongdong and Insa-dong · Kakao Friends Seoul Station',
  },
  {
    en: 'Seaweed',
    ko: '김',
    icon: '🍙',
    what: 'Salted and roasted, in sealed packs. Light, cheap, and survives the flight.',
    where: 'Any convenience store · supermarkets · airport',
    won: [5000, 30000],
  },
  {
    en: 'Instant coffee sticks',
    ko: '믹스커피',
    icon: '☕',
    what: 'Maxim Mocha Gold, Kanu. Sweet, strong, and what most Korean offices actually drink.',
    where: 'Any convenience store · supermarkets · duty free',
  },
  {
    en: 'Instant noodles',
    ko: '라면',
    icon: '🍜',
    what: 'Buldak is the one people carry home. Milder versions exist if you cannot take the heat.',
    where: 'Any convenience store · supermarkets',
  },
]

/** 서울시 목록 밖이지만 외국인이 실제로 가장 많이 사가는 것들 (근거: 외래관광객조사·카드 소비 분석) */
export const POPULAR_BUYS: BuyItem[] = [
  {
    en: 'Skincare',
    ko: '스킨케어',
    icon: '🧴',
    what: 'Sheet masks, toners, serums. Bought by roughly two in three visitors — the single most-purchased thing in Korea.',
    where: 'Olive Young (everywhere) · Myeongdong · Daiso for cheap versions',
  },
  {
    en: 'Sunscreen',
    ko: '선크림',
    icon: '☀️',
    what: 'Light Korean formulations. American visitors buy more of this than anything else.',
    where: 'Olive Young · Daiso',
  },
  {
    en: 'Daiso small goods',
    ko: '다이소 소품',
    icon: '🛒',
    what: 'Beauty, stationery, kitchen bits. Most items are ₩1,000–5,000 and the quality surprises people.',
    where: 'Daiso Myeongdong Station branch is the biggest',
    won: [1000, 5000],
  },
  {
    en: 'Stationery & gacha',
    ko: '문구·가챠',
    icon: '✏️',
    what: 'Capsule-toy shops and stationery are the fastest-growing thing foreign visitors spend on.',
    where: 'Hongdae · Myeongdong · Seongsu',
  },
  {
    en: 'Red ginseng',
    ko: '홍삼',
    icon: '🌿',
    what: 'Sold as extract, sticks or candy. The traditional gift to bring back for parents.',
    where: 'Pharmacies · department store food halls · airport',
  },
  {
    en: 'Pharmacy goods',
    ko: '약국 상품',
    icon: '💊',
    what: 'Hangover drinks, patches, ointments. Cheap and hard to find elsewhere.',
    where: 'Any pharmacy (약국) · convenience stores for hangover drinks',
  },
]

/** 부가세 환급 — 외국인이 가장 많이 놓치는 돈.
    기준: 1회 15,000원 이상. 즉시환급 한도 1회 100만원·총 500만원 (2026년 기준). */
export const TAX_REFUND = {
  min: 15000,
  instantPerPurchase: 1_000_000,
  instantTotal: 5_000_000,
}
