# Korea Now

방한 외국인을 위한 안내. **지금 어디가 한산한지, 입장료가 얼마인지, 오늘 문을 여는지.**

<https://korea-now.com>

설치도 가입도 필요 없다. 휴대폰 홈 화면에 추가하면 앱처럼 쓰이고, 인터넷이 끊겨도
기본 정보는 보인다.

## 무엇을 하는가

전국 관광지 55곳에 대해 네 가지를 답한다.

| 질문 | 쓰는 데이터 | 시간 단위 |
|---|---|---|
| 지금 갈까 말까 | 서울시 실시간 도시데이터 (핫스팟 121곳) | 분 |
| 이번 주 어느 날 | 한국관광공사 관광지 집중률 예측 | 일 (30일) |
| 어느 요일에 넣을까 | 한국관광 데이터랩 외국인 방문자수 | 요일 (12주 평균) |
| 얼마고 언제 여는가 | 직접 확인해 정리 (2026-09 기준) | — |

세 번째가 이 앱의 특징이다. 종로구는 화요일이 가장 한산하지만 경복궁은 화요일이
휴관이다. 방문자 데이터만 보고 가면 헛걸음한다. 그래서 휴관일을 걸러낸 뒤 가장
한산한 날을 고르고, 더 한산하지만 문을 닫는 날이 있으면 그 사실을 따로 알린다.

## 만드는 법

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 빌드 + 관광지 55곳 정적 페이지 + 사이트맵
```

배포 주소는 `site.config.mjs` 한 곳에서만 정한다. 코드 어디에도 경로를 직접 적지 않는다.

```bash
# 다른 주소로 빌드할 때
# Windows (PowerShell)
$env:SITE_ORIGIN='https://example.com'; $env:SITE_BASE=''; npm run build
# macOS / Linux
SITE_ORIGIN=https://example.com SITE_BASE='' npm run build
```

### 데이터랩 요일 데이터 갱신 (한 달에 한 번)

```bash
# Windows (PowerShell)
$env:DATA_GO_KR_KEY='발급받은키'; node scripts/fetch-visitors.mjs 20260518 20260809
# macOS / Linux
DATA_GO_KR_KEY='발급받은키' node scripts/fetch-visitors.mjs 20260518 20260809

node scripts/gen-rhythm.mjs
```

데이터랩 방문자수는 약 한 달 늦게 올라온다. 끝 날짜를 오늘로 잡으면 빈 응답이 온다.

## 열쇠는 어디 있나

브라우저에 API 키를 두지 않는다. 공공 API 호출은 전부 Supabase 엣지 함수가 대신 하고,
키는 서버에만 있다. `.env.production` 에 있는 값은 브라우저에 드러나도 되는 것뿐이다
(RLS 로 보호되는 공개 키).

자세한 내용은 `docs/` 를 볼 것.

| 문서 | 내용 |
|---|---|
| `korea-now-api.md` | 쓰는 공공 API 전부 — 엔드포인트, 파라미터, 실측 결과, 함정 |
| `korea-now-setup.md` | 키 발급과 배포, 도메인 이전 절차 |
| `korea-now-report.md` | 외국인이 한국에서 뭘 하고 먹고 사는지 (출처 71건) |
