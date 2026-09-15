// About · Privacy · Contact · Terms — 자바스크립트 없이 읽히는 정적 문서.
//
// 개인정보 처리방침은 코드를 읽고 쓴 것이다. 실제로 모으지 않는 것을 모은다고 쓰지 않고,
// 모으는 것을 빠뜨리지도 않는다. src/lib/track.ts, src/lib/api.ts, supabase/functions/* 기준.
// 수집 항목이 바뀌면 이 파일도 같이 고칠 것.

/** 문의 주소. 가비아에서 이 주소로 포워딩을 걸어 두어야 실제로 받는다. */
export const CONTACT = 'hello@korea-now.com'

const page = (o) => ({ slug: o.slug, title: o.title, desc: o.desc, h1: o.h1, lede: o.lede, body: o.body })

export const DOC_PAGES = [
  page({
    slug: 'about',
    title: 'About Korea Now',
    desc: 'Who makes Korea Now, where the crowd figures and admission prices come from, and what we will never do with them.',
    h1: 'About Korea Now',
    lede: 'A small, free tool that answers one question: is it a good time to go?',
    body: `
<h2>What this is</h2>
<p>Korea is not crowded everywhere, all the time. It is crowded in certain places, at certain hours,
on certain days. Most of that can be known in advance — it simply isn't written down anywhere a
visitor can read. Korea Now is that writing-down.</p>
<p>For 55 places across the country it shows what entry costs, when the doors are open, which day of
the week the site is closed, and how busy it is likely to be. No account, no app store, no payment.</p>

<h2>Where the numbers come from</h2>
<dl class="facts">
  <div class="row"><dt>Live crowd levels</dt><dd>Seoul Metropolitan Government real-time city data<small>121 hotspots, updated every few minutes. Seoul only.</small></dd></div>
  <div class="row"><dt>14-day forecast</dt><dd>Korea Tourism Organization congestion forecast<small>Modelled from mobile-carrier movement. Nationwide.</small></dd></div>
  <div class="row"><dt>Quietest day</dt><dd>Korea Tourism Data Lab visitor counts<small>Foreign visitors by district, averaged over 12 weeks.</small></dd></div>
  <div class="row"><dt>Places and photos</dt><dd>Korea Tourism Organization TourAPI</dd></div>
  <div class="row"><dt>Exchange rates</dt><dd>The Export-Import Bank of Korea<small>Official daily rate.</small></dd></div>
  <div class="row"><dt>Subway arrivals</dt><dd>Seoul Metro open data</dd></div>
  <div class="row"><dt>Maps</dt><dd>OpenStreetMap</dd></div>
  <div class="row"><dt>Prices and hours</dt><dd>Checked by hand, one place at a time<small>Each page shows the month it was last verified.</small></dd></div>
</dl>
<p>Every figure is public data or something we went and looked up. Where a number is an estimate
rather than a headcount, the page says so on the spot.</p>

<h2 id="no-paid-placement">What we will never do</h2>
<div class="tip">
<p><b>Nobody can pay to appear here, or to rank higher.</b> The places on this site were chosen because
they are worth knowing about. Crowd levels, admission prices and opening hours are not for sale, and
they never will be.</p>
</div>
<p>If this site ever carries advertising or earns a commission on a booking, it will be labelled, it will
sit beside the information rather than inside it, and it will not change which places we show or the
order we show them in. That is the whole promise, and it is the reason to trust anything else on the page.</p>

<h2>Who makes it</h2>
<p>One person, in Seoul. Korea Now is independent — not run by, funded by, or affiliated with the Korea
Tourism Organization, the Seoul Metropolitan Government, or any of the other bodies whose open data it uses.</p>
<p>Found a price that has changed, or a place we have wrong? Please write: <a href="mailto:${CONTACT}">${CONTACT}</a>.
Corrections are the most useful thing anyone sends.</p>
`,
  }),

  page({
    slug: 'privacy',
    title: 'Privacy',
    desc: 'Korea Now sets no cookies, asks for no account, and does not identify you. Exactly what is recorded, and what never leaves your phone.',
    h1: 'Privacy',
    lede: 'No cookies. No account. No profile of you. Here is precisely what happens.',
    body: `
<p class="upd">Last updated 15 September 2026</p>

<h2>What we record</h2>
<p>When you open a screen, four things are written to our database:</p>
<dl class="facts">
  <div class="row"><dt>Screen</dt><dd>Which page you opened<small>For example <code>/spot/gyeongbokgung</code></small></dd></div>
  <div class="row"><dt>Came from</dt><dd>The website that linked you here<small>The domain only — <code>google.com</code>, <code>reddit.com</code>. Never the full address you came from.</small></dd></div>
  <div class="row"><dt>Language</dt><dd>Your browser's language, two letters<small><code>en</code>, <code>ja</code>, <code>zh</code></small></dd></div>
  <div class="row"><dt>Device type</dt><dd>Either <code>mobile</code> or <code>desktop</code><small>Nothing more specific.</small></dd></div>
</dl>
<p>That is the entire record. There is no identifier in it — no cookie, no account, no advertising ID,
no fingerprint. Two visits by the same person cannot be connected to each other, by us or by anyone else.
We keep it to see whether anyone is finding the site at all.</p>
<p>If your browser sends the <b>Do Not Track</b> signal, nothing is recorded.</p>

<h2>Your location</h2>
<p>The map can show where you are. Your browser asks your permission first, and if you say no the rest of
the site works normally.</p>
<p><b>Your position stays in your phone</b> for the map and for the walking distances — with one exception.
If you use <b>Nearby</b> to search for places around you, your coordinates are sent to our server so it can
ask the tourism API what is there. The server rounds them to about 100 metres and keeps the rounded value
briefly as a cache, so the next person nearby gets an answer without another lookup. It is not stored
against you, because there is no "you" in our records to store it against.</p>

<h2>What stays on your phone</h2>
<p>Some things are saved in your browser's own storage and are never sent anywhere. They are yours, on
your device, and clearing your browser data deletes them:</p>
<ul>
  <li>Stamps you have collected</li>
  <li>Whether you have seen the opening screen and the introduction</li>
  <li>A short-lived copy of forecast data, to save re-fetching it</li>
</ul>

<h2>Who else sees anything</h2>
<dl class="facts">
  <div class="row"><dt>Supabase</dt><dd>Hosts our database and server functions<small>Processes the four fields above on our behalf.</small></dd></div>
  <div class="row"><dt>GitHub Pages</dt><dd>Serves this website<small>Sees your IP address, as any web server must.</small></dd></div>
  <div class="row"><dt>OpenStreetMap</dt><dd>Supplies the map tiles<small>Sees your IP address when a map loads.</small></dd></div>
</dl>
<p>Korean public data services — the city of Seoul, the Korea Tourism Organization, Seoul Metro, the
Export-Import Bank — are called by <i>our</i> server, not by your browser. They never see your IP address.</p>
<p>We do not use Google Analytics, Meta Pixel, or any advertising network. There are no third-party
trackers on this site.</p>

<h2>Your rights</h2>
<p>If you are in the United Kingdom, the European Economic Area or Korea, you have the right to see, correct
or delete personal data held about you. In our case there is nothing to show you: the records contain no
identifier, so we cannot find "your" rows even if you ask us to. That is by design, not an evasion.</p>
<p>Questions, or anything here that looks wrong: <a href="mailto:${CONTACT}">${CONTACT}</a>.</p>

<h2>Children</h2>
<p>This site is not directed at children and collects nothing that could identify anyone, of any age.</p>

<h2>Changes</h2>
<p>If what we collect ever changes, this page changes with it and the date at the top moves. We will not
quietly start collecting more.</p>
`,
  }),

  page({
    slug: 'contact',
    title: 'Contact',
    desc: 'How to report a price that has changed, a place we have wrong, or anything broken on Korea Now.',
    h1: 'Contact',
    lede: 'Corrections are welcome and genuinely useful.',
    body: `
<h2>Write to us</h2>
<p style="font-size:19px"><a href="mailto:${CONTACT}">${CONTACT}</a></p>
<p>One person reads this, so a reply may take a few days.</p>

<h2>What helps most</h2>
<div class="tip">
<p><b>A price or opening time that has changed.</b> Tell us the place and what you actually saw or paid,
and roughly when. Korea changes admission fees more often than you would think, and we cannot re-check
55 places every month on our own.</p>
</div>
<ul>
  <li><b>A place we have wrong</b> — closed days, the nearest station, whether cards are accepted</li>
  <li><b>Something broken</b> — a page that will not load, a map that will not move. Your phone and browser help.</li>
  <li><b>A place worth adding</b> — especially outside Seoul</li>
</ul>

<h2>What we cannot do</h2>
<p>We cannot book anything for you, arrange tickets, or answer questions about your trip. We are not a
travel agency and not a tourist information office.</p>
<p>For official help in English, the Korea Tourism Organization runs a 24-hour travel hotline:
dial <b>1330</b> inside Korea, or <b>+82-2-1330</b> from abroad.</p>

<h2>Paid placement</h2>
<p>If you are writing to ask about advertising, sponsorship, or getting a place listed or ranked higher:
the answer is no, and it will stay no. See <a href="../about/#no-paid-placement">About</a>.</p>
`,
  }),

  page({
    slug: 'terms',
    title: 'Terms of use',
    desc: 'Korea Now is free and provided as-is. What the information is, what it is not, and the licences behind the data.',
    h1: 'Terms of use',
    lede: 'Short version: it is free, we try hard to be accurate, and you should still check before you travel.',
    body: `
<p class="upd">Last updated 15 September 2026</p>

<h2>Use it freely</h2>
<p>Korea Now is free to use. There is no account, no payment, and nothing to agree to beyond this page.</p>

<h2>What the information is — and is not</h2>
<div class="tip">
<p><b>Check before you set out.</b> Admission prices, opening hours and closed days change, often at short
notice and sometimes without an English announcement. Each place shows the month we last verified it.
For anything that would ruin your day if it were wrong — a long trip, a timed ticket, the last day of your
holiday — confirm with the venue.</p>
</div>
<p>Crowd figures are estimates, not headcounts. Live levels come from mobile-network data for a whole
area, not a turnstile. Forecasts are models, and models are sometimes wrong. The quietest-day figures are
district-wide averages and do not measure the individual site. Where a number is an estimate, the page
says so beside it.</p>
<p>We provide this information as-is and cannot accept liability for a journey made on the strength of it.</p>

<h2>Where the data comes from</h2>
<p>Public data is used under the terms its publishers set:</p>
<ul>
  <li>Korea Tourism Organization (TourAPI, congestion forecast, Korea Tourism Data Lab)</li>
  <li>Seoul Metropolitan Government real-time city data, and Seoul Metro open data</li>
  <li>The Export-Import Bank of Korea, for exchange rates</li>
  <li>Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, under the Open Database Licence</li>
</ul>
<p>Korea Now is independent and is not endorsed by any of them.</p>

<h2>Our own writing</h2>
<p>The descriptions, tips and curation on this site are ours. Quote a line with credit if it helps someone —
that is what it is for. Please do not scrape the site wholesale or republish it as your own.</p>

<h2>Availability</h2>
<p>This is a small free service. It may be slow, briefly offline, or missing live data when a public API is
down. When live data cannot be reached the app says so rather than showing you an invented number.</p>

<h2>Contact</h2>
<p><a href="mailto:${CONTACT}">${CONTACT}</a></p>
`,
  }),
]
