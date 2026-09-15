// 어디서 뭘 먹나.
//
// 개별 식당은 넣지 않는다. 문을 닫거나 자리를 옮기면 외국인은 헛걸음하고,
// 우리는 그걸 제때 확인할 방법이 없다. 대신 수십 년째 자리를 지키는
// 시장과 먹자골목만 싣고, 그 안에서 무엇을 찾으면 되는지 적는다.
//
// 한글을 함께 적는 이유: 메뉴판이 한글뿐인 집이 많다. 화면을 그대로 보여주면 된다.
// 가격은 2026년 9월 기준 어림값이다. 환율과 물가에 따라 달라진다.

export interface Dish {
  en: string
  ko: string
  /** 한글 발음 그대로 읽는 법 */
  say: string
  /** 1인분 기준 어림값(원). [최소, 최대] */
  won: [number, number]
  note?: string
}

export interface FoodPlace {
  /** spots.ts 의 id — 좌표·휴무·혼잡도를 그대로 쓴다 */
  spotId: string
  /** 그 장소를 한 줄로 */
  why: string
  dishes: Dish[]
  tip?: string
}

export const FOOD_PLACES: FoodPlace[] = [
  {
    spotId: 'gwangjang',
    why: 'The oldest market food alley in Seoul, and still the busiest. Everything is cooked in front of you.',
    dishes: [
      { en: 'Mung bean pancake', ko: '빈대떡', say: 'bin-dae-tteok', won: [5000, 8000], note: 'The signature dish here. Fried to order.' },
      { en: 'Mini seaweed rolls', ko: '마약김밥', say: 'ma-yak-gim-bap', won: [3000, 5000], note: 'Dip in the mustard sauce.' },
      { en: 'Raw beef', ko: '육회', say: 'yuk-hoe', won: [15000, 25000], note: 'Served cold with pear and egg yolk.' },
      { en: 'Knife-cut noodles', ko: '칼국수', say: 'kal-guk-su', won: [6000, 9000] },
    ],
    tip: 'Sit at a counter stall rather than a restaurant — same food, half the price. Cash is still easier at some stalls.',
  },
  {
    spotId: 'namdaemun',
    why: 'Whole alleys given over to one dish each. Follow the smell.',
    dishes: [
      { en: 'Braised hairtail fish', ko: '갈치조림', say: 'gal-chi-jo-rim', won: [12000, 18000], note: 'There is an entire alley of this.' },
      { en: 'Knife-cut noodles', ko: '칼국수', say: 'kal-guk-su', won: [6000, 9000], note: 'Refills of noodles are often free — just ask.' },
      { en: 'Sweet filled pancake', ko: '호떡', say: 'ho-tteok', won: [1500, 3000], note: 'Molten sugar inside. Bite slowly.' },
      { en: 'Pork and rice soup', ko: '돼지국밥', say: 'dwae-ji-guk-bap', won: [9000, 12000] },
    ],
  },
  {
    spotId: 'myeongdong',
    why: 'Street-food carts line the main streets from late afternoon. Easiest place to try many things in one walk.',
    dishes: [
      { en: 'Tornado potato', ko: '회오리감자', say: 'hoe-o-ri-gam-ja', won: [4000, 5000] },
      { en: 'Grilled cheese lobster', ko: '치즈랍스터', say: 'chi-jeu-rap-seu-teo', won: [15000, 20000], note: 'The famous one. Expensive for street food.' },
      { en: 'Egg bread', ko: '계란빵', say: 'gye-ran-ppang', won: [2000, 3000] },
      { en: 'Hand-cut noodles & dumplings', ko: '칼국수 만두', say: 'kal-guk-su man-du', won: [11000, 14000], note: 'Myeongdong is known for one long-running noodle house.' },
    ],
    tip: 'Carts are cash-heavy and prices are posted — check before ordering. Most open around 16:00.',
  },
  {
    spotId: 'jagalchi',
    why: "Korea's largest seafood market. Pick your fish downstairs, they cook it upstairs.",
    dishes: [
      { en: 'Raw fish', ko: '회', say: 'hoe', won: [25000, 60000], note: 'Priced per fish, shared between people.' },
      { en: 'Grilled eel', ko: '곰장어', say: 'gom-jang-eo', won: [20000, 30000], note: 'A Busan specialty. Still moving when it hits the grill.' },
      { en: 'Steamed shellfish', ko: '조개구이', say: 'jo-gae-gu-i', won: [30000, 50000] },
    ],
    tip: 'Agree the price before they cut the fish. Upstairs cooking is charged separately per person.',
  },
  {
    spotId: 'kkangtong',
    why: 'A night market that only starts after dark. Small plates, low prices, no menus in English.',
    dishes: [
      { en: 'Seed-filled sweet pancake', ko: '씨앗호떡', say: 'ssi-at-ho-tteok', won: [2000, 3000], note: 'Busan invented this. Sunflower seeds inside.' },
      { en: 'Stuffed tofu pouch stew', ko: '유부전골', say: 'yu-bu-jeon-gol', won: [8000, 12000] },
      { en: 'Blood sausage', ko: '순대', say: 'sun-dae', won: [5000, 8000] },
    ],
    tip: 'Runs roughly 19:30–24:00. Come hungry and order small from several stalls.',
  },
  {
    spotId: 'dongmun',
    why: "Jeju's main market. Island ingredients you will not find on the mainland.",
    dishes: [
      { en: 'Black pork', ko: '흑돼지', say: 'heuk-dwae-ji', won: [18000, 30000], note: 'Jeju native breed. Fattier and sweeter.' },
      { en: 'Omegi rice cake', ko: '오메기떡', say: 'o-me-gi-tteok', won: [8000, 15000], note: 'Sold by the box. Keeps a day or two.' },
      { en: 'Tangerines', ko: '감귤', say: 'gam-gyul', won: [5000, 15000], note: 'Best from November to February.' },
      { en: 'Grilled hairtail', ko: '갈치구이', say: 'gal-chi-gu-i', won: [20000, 35000] },
    ],
  },
  {
    spotId: 'jeonju-hanok',
    why: 'Jeonju is where Korean food is taken most seriously. The village streets are lined with it.',
    dishes: [
      { en: 'Jeonju bibimbap', ko: '전주비빔밥', say: 'jeon-ju-bi-bim-bap', won: [12000, 18000], note: 'The original version of the dish.' },
      { en: 'Bean sprout rice soup', ko: '콩나물국밥', say: 'kong-na-mul-guk-bap', won: [8000, 11000], note: 'What locals eat for breakfast, or after drinking.' },
      { en: 'Choco pie', ko: '초코파이', say: 'cho-ko-pa-i', won: [2000, 3000], note: 'A local bakery version, not the supermarket one. Sold by the box.' },
      { en: 'Grilled skewers', ko: '꼬치', say: 'kko-chi', won: [3000, 6000] },
    ],
  },
  {
    spotId: 'sokcho-market',
    why: 'A fishing-port market. One dish here is famous across the whole country.',
    dishes: [
      { en: 'Sweet crispy chicken', ko: '닭강정', say: 'dak-gang-jeong', won: [12000, 20000], note: "Sokcho's most famous food. Expect a queue." },
      { en: 'Squid sausage', ko: '오징어순대', say: 'o-jing-eo-sun-dae', won: [10000, 15000] },
      { en: 'Abai sausage', ko: '아바이순대', say: 'a-ba-i-sun-dae', won: [10000, 15000], note: 'Brought here by refugees from the north.' },
    ],
  },
  {
    spotId: 'incheon-chinatown',
    why: 'Where Korean-Chinese food was invented. The black-bean noodle dish started on this street.',
    dishes: [
      { en: 'Black bean noodles', ko: '짜장면', say: 'jja-jang-myeon', won: [7000, 12000], note: 'Born here in the 1900s.' },
      { en: 'Hollow sweet bread', ko: '공갈빵', say: 'gong-gal-ppang', won: [2000, 4000], note: 'Big, crisp and almost empty inside.' },
      { en: 'Sweet and sour pork', ko: '탕수육', say: 'tang-su-yuk', won: [15000, 25000] },
    ],
  },
]

/** 시장 밖에서도 어디서나 먹을 수 있는 것들. 주문할 때 화면을 보여주면 된다. */
export const MUST_EAT: Dish[] = [
  { en: 'Fried chicken & beer', ko: '치킨 맥주', say: 'chi-kin maek-ju', won: [20000, 30000], note: 'The most-wanted Korean food among visitors. Ordered to share.' },
  { en: 'Grilled pork belly', ko: '삼겹살', say: 'sam-gyeop-sal', won: [15000, 22000], note: 'Per portion, and most places need two portions minimum.' },
  { en: 'Home-style set meal', ko: '백반', say: 'baek-ban', won: [8000, 12000], note: 'Rice, soup and many side dishes. Side dishes are refilled free.' },
  { en: 'Mixed rice bowl', ko: '비빔밥', say: 'bi-bim-bap', won: [9000, 14000] },
  { en: 'Kimchi stew', ko: '김치찌개', say: 'gim-chi-jji-gae', won: [8000, 12000] },
  { en: 'Marinated beef', ko: '불고기', say: 'bul-go-gi', won: [15000, 25000] },
  { en: 'Spicy rice cakes', ko: '떡볶이', say: 'tteok-bok-ki', won: [4000, 7000] },
  { en: 'Seaweed rice roll', ko: '김밥', say: 'gim-bap', won: [3500, 6000] },
  { en: 'Dumplings', ko: '만두', say: 'man-du', won: [6000, 10000] },
  { en: 'Pork bone stew', ko: '감자탕', say: 'gam-ja-tang', won: [10000, 15000] },
  { en: 'Glass noodles', ko: '잡채', say: 'jap-chae', won: [8000, 14000] },
  { en: 'Honey cookie', ko: '약과', say: 'yak-gwa', won: [1000, 3000], note: 'A very old sweet that became fashionable again.' },
]
