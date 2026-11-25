/* ------------------------------------------------------------------
   La Kokido – innhold som er lett å endre. Felles for alle sidene.
------------------------------------------------------------------- */

// Adressen operatør-henvendelser sendes til.
const CONTACT_EMAIL = "operator@example.com"; // TODO: bytt til Gmail-adressen deres

// Restauranter. Én linje per restaurant. order: valgfri lenke til nettbestilling.
const LOCATIONS = [
  { name: "Campino La Kokido", street: "Pindsleveien 11", city: "Sandefjord", country: "NO", map: "https://maps.app.goo.gl/hGhmecGaHLoZLDZF6", order: "https://campinopizza.agiorder.no/" },
  { name: "Amigos La Kokido Fredrikstad", street: "Hollendergata 2", city: "1607 Fredrikstad", country: "NO", map: "https://maps.app.goo.gl/7BS56gHSAH2Eeyf37", order: "https://amigoskebab.no/" },
  { name: "Amigos La Kokido Rygge", street: "Ryggeraet 49", city: "1580 Rygge", country: "NO", map: "https://maps.app.goo.gl/YoYBwwg3MNhXcWaH6", order: "https://www.foodbooking.com/" },
  { name: "Kronstad La Kokido", street: "Bjørnsons gate 5", city: "Bergen", country: "NO", map: "https://maps.app.goo.gl/XXcqxjcdTrpKXDJ89" },
  { name: "La Kokido Prime Chicken & Grill", street: "Prinsens gate 6D", city: "1530 Moss", country: "NO", map: "https://maps.app.goo.gl/8FHRqegZroCJVCTj6" },
  { name: "Livorno La Kokido", street: "Frederik Stangs gate 1", city: "3160 Stokke", country: "NO", map: "https://maps.app.goo.gl/oET7gAyPneJo5BYJ7" },
  { name: "Caylos Drammen", street: "Griffenfelds gate 3", city: "3045 Drammen", country: "NO", map: "https://maps.app.goo.gl/EBDrzLb5TpcpNmtw5" },
  { name: "Caylos Tønsberg", street: "Rambergveien 45", city: "3115 Tønsberg", country: "NO", map: "https://maps.app.goo.gl/UXUjkyzERZVqmHB16" },
  { name: "La Kokido Haugesund", street: "Skjoldavegen 68", city: "5519 Haugesund", country: "NO", map: "https://share.google/6sfuYmQJ18Uolrnjy" },
  { name: "Kuku Chicken 2 Mars", street: "36 Rue de Rome", city: "Casablanca 20250", country: "MA", map: "https://share.google/hb6we7k6vnLeOYKi7" },
  { name: "Kuku Chicken Bouskoura", street: "", city: "Bouskoura", country: "MA", map: "https://share.google/8SvF1T4cqgLxA0S5j" },
  { name: "Kuku Chicken Gauthier", street: "Gauthier", city: "Casablanca", country: "MA", map: "https://share.google/mSmHHFBPL7WcYu5HZ" },
  { name: "Kuku Chicken Oulfa", street: "Oulfa", city: "Casablanca", country: "MA", map: "https://www.google.com/maps/search/?api=1&query=Kuku+Chicken+Oulfa+Casablanca" },
];

// Menyen. img er filnavnet i assets/menu/ (uten .webp). Uten img vises logoen.
const MENU = [
  { id: "kylling", no: "Kylling", en: "Chicken", items: [
    { name: "Klubbe", en_name: "Drumstick", img: "klubbe", no: "Trykkfritert klubbe. Velg antall.", en: "Pressure-fried drumstick. Choose how many." },
    { name: "Overlår", en_name: "Thigh", img: "overlar", no: "Saftig overlår. Velg antall.", en: "Juicy thigh. Choose how many." },
    { name: "Wings", img: "wings", no: "Sterke vinger. Velg antall.", en: "Spicy wings. Choose how many." },
    { name: "Crispy Tenders", img: "crispy-tenders", no: "Sprø strimler av kyllingfilet.", en: "Crispy strips of chicken fillet." },
  ] },
  { id: "sandwich", no: "Sandwich", en: "Sandwiches", items: [
    { name: "Classic Bro", img: "classic-bro", no: "Hamburgerbrød, kyllingfilet, salat, tomat, ost og mayo.", en: "Burger bun, chicken fillet, lettuce, tomato, cheese and mayo." },
    { name: "Chicken BBQ", img: "chicken-bbq", no: "Hamburgerbrød, kyllingfilet, salat, sylteagurk, løkringer og bbq-saus.", en: "Burger bun, chicken fillet, lettuce, pickles, onion rings and BBQ sauce." },
    { name: "Salsa Bro", no: "Hamburgerbrød, kyllingfilet, salsa, salat, tomat og mayo.", en: "Burger bun, chicken fillet, salsa, lettuce, tomato and mayo." },
  ] },
  { id: "meals", no: "Meals", en: "Meals", items: [
    { name: "Little Bro", img: "little-bro", no: "1 klubbe, 1 overlår og pommes frites.", en: "1 drumstick, 1 thigh and fries." },
    { name: "Middle Bro", img: "middle-bro", no: "1 klubbe, 1 overlår, 2 vinger og pommes frites.", en: "1 drumstick, 1 thigh, 2 wings and fries." },
    { name: "Big Bro", img: "big-bro", no: "2 klubber, 1 overlår, 3 vinger, 2 tenders og pommes frites.", en: "2 drumsticks, 1 thigh, 3 wings, 2 tenders and fries." },
    { name: "Barnemeny", en_name: "Kids' meal", no: "3 tenders, pommes frites, saus og drikke.", en: "3 tenders, fries, sauce and a drink." },
  ] },
  { id: "dele", no: "Til å dele", en: "For sharing", items: [
    { name: "Duo Pack", img: "spread", no: "4 klubber, 2 overlår, 6 vinger, 4 tenders og 2 pommes frites.", en: "4 drumsticks, 2 thighs, 6 wings, 4 tenders and 2 fries." },
    { name: "Family Pack", img: "spread", no: "4 klubber, 4 overlår, 10 vinger, 6 tenders og 3 pommes frites.", en: "4 drumsticks, 4 thighs, 10 wings, 6 tenders and 3 fries." },
    { name: "Party Pack", img: "party-pack", no: "6 klubber, 6 overlår, 15 vinger, 10 tenders og 4 pommes frites.", en: "6 drumsticks, 6 thighs, 15 wings, 10 tenders and 4 fries." },
  ] },
  { id: "tilbehor", no: "Tilbehør", en: "Sides", items: [
    { name: "Pommes frites", en_name: "Fries", img: "pommes-frites" },
    { name: "Løkringer", en_name: "Onion rings" },
    { name: "Potetkuler", en_name: "Potato balls" },
    { name: "Mozzarella Sticks", img: "mozzarella-sticks" },
  ] },
  { id: "sauser", no: "Sauser", en: "Sauces", items: [
    { name: "Mayo", img: "mayo" },
    { name: "Honey Mustard", img: "honey-mustard" },
    { name: "BBQ", img: "bbq" },
    { name: "Chili Mayo", img: "chili-mayo" },
  ] },
  { id: "drikke", no: "Drikke", en: "Drinks", items: [
    { name: "Brus", en_name: "Soft drinks" },
    { name: "Vann", en_name: "Water" },
    { name: "Energidrikk", en_name: "Energy drinks" },
  ] },
];

// Engelske tekster. De norske står i HTML-filene og i malene lenger ned.
const EN = {
  "skip": "Skip to content",
  "nav.menu": "Menu", "nav.raw": "Our ingredients", "nav.operator": "Become an operator", "nav.restaurants": "Restaurants", "nav.find": "Find a restaurant", "nav.home": "Home",
  "hero.l1": "Crispy outside.", "hero.l2": "Juicy inside.",
  "home.menu": "The menu", "home.menu.cta": "See the full menu", "home.tag": "For sharing", "home.big": "Bucket, burger and chicken",
  "home.raw": "Our ingredients", "home.raw.lead": "We use only natural chicken and no artificial additives. You can taste it.", "home.raw.cta": "Read about the ingredients",
  "raw.f1": "Fresh chicken", "raw.f1t": "Fresh and full of flavour in every restaurant.",
  "raw.f2": "Natural ingredients", "raw.f2t": "Pure flavours, nothing artificial.",
  "raw.f3": "Our own seasonings", "raw.f3t": "The breadings, marinades and seasonings are our own.",
  "raw.f4": "Same quality everywhere", "raw.f4t": "Special pressure fryers give the same result every time.",
  "about.label": "Over 65 years of fried chicken",
  "about.lead": "La Kokido Fried Chicken builds on more than 65 years of experience with irresistible, pressure-fried chicken. We give our operators what they need to serve chicken guests come back for.",
  "about.s1": "years of experience with pressure-fried chicken.", "about.s2": "restaurants serve La Kokido today.", "about.s3": "countries: Norway and Morocco.",
  "op.w1": "Become an", "op.w2": "operator",
  "op.lead": "Run a restaurant? Put La Kokido Fried Chicken on your menu. You get a complete, proven concept.", "op.more": "How it works", "op.cta": "Contact us",
  "menu.title": "Menu", "menu.note": "The selection and prices vary from restaurant to restaurant. Ask your local La Kokido about allergens.",
  "rest.title": "Restaurants", "rest.lead": "Find your nearest La Kokido, get directions or order directly.",
  "rest.search": "Search by city or restaurant", "rest.empty": "No restaurants match that search yet. Want La Kokido in your town?", "rest.map": "See all on the map",
  "rawp.title": "Our ingredients", "rawp.lead": "Real chicken, our own seasonings and nothing artificial.",
  "rawp.h1": "Only natural chicken", "rawp.t1": "We use only natural chicken. Fresh and full of flavour, in every restaurant.",
  "rawp.h2": "Pressure-fried, not just fried", "rawp.t2": "Special pressure fryers seal the juices in. That is why the chicken is crispy outside and juicy inside.",
  "rawp.h3": "Our own breadings and marinades", "rawp.t3": "The breadings, marinades and seasonings are our own blends. That gives the same taste wherever you eat La Kokido.",
  "rawp.h4": "Nothing artificial", "rawp.t4": "We keep artificial ingredients out of our food. Pure flavours, honest food.",
  "rawp.cta": "See the menu",
  "opp.lead": "Run a restaurant? Put La Kokido Fried Chicken on your menu. You get a complete, proven concept, and your guests get chicken they come back for.",
  "get.title": "What you get",
  "get.m1": "Training", "get.h1": "Certified training", "get.t1": "We train you and your staff in preparation, service and routines, so quality is the same every day.",
  "get.m2": "Supplies", "get.h2": "Breadings, marinades and seasonings", "get.t2": "Our own blends, delivered to your restaurant.",
  "get.m3": "Equipment", "get.h3": "Quality equipment and technical help", "get.t3": "Pressure fryers and other equipment, with ongoing help for maintenance and troubleshooting.",
  "get.m4": "Brand", "get.h4": "A known name and branded packaging", "get.t4": "A brand guests recognise, with ready-made branded packaging.",
  "get.m5": "Operations", "get.h5": "Guidance and menu development", "get.t5": "Help with kitchen workflow and food safety, and a menu we develop together with you.",
  "get.m6": "Network", "get.h6": "A community of operators", "get.t6": "Operators who share experience and help each other.",
  "c.title": "Want to serve La Kokido?", "c.lead": "Send us an email and tell us a little about your restaurant.", "c.copy": "Copy",
  "c.name": "Name", "c.rest": "Restaurant", "c.city": "City and country", "c.phone": "Phone (optional)", "c.msg": "Message (optional)",
  "c.error": "Please fill in name, restaurant and city.", "c.send": "Write email",
  "c.done": "Your email app should now be open with the message ready. Nothing happened? Write to the address above.",
  "c.note": "The form opens your email app with the message filled in. Nothing is stored on this page.",
  "c.line": "Become an operator Become an operator Become an operator Become an operator Become an operator",
  "f.w1": "Chicken worth", "f.w2": "the trip.",
};

// Korte tekster som settes fra JavaScript.
const UI = {
  no: { all: "Alle", NO: "Norge", MA: "Marokko", map: "Kart", order: "Bestill", one: "restaurant", many: "restauranter", copied: "Kopiert", copy: "Kopier",
        subject: "Operatør-henvendelse", hi: "Hei La Kokido,", intro: "Jeg er interessert i å bli La Kokido-operatør.", name: "Navn", rest: "Restaurant", city: "By og land", phone: "Telefon" },
  en: { all: "All", NO: "Norway", MA: "Morocco", map: "Map", order: "Order", one: "restaurant", many: "restaurants", copied: "Copied", copy: "Copy",
        subject: "Operator enquiry", hi: "Hi La Kokido,", intro: "I'm interested in becoming a La Kokido operator.", name: "Name", rest: "Restaurant", city: "City and country", phone: "Phone" },
};

/* ------------------------------------------------------------------
   Felles topp, kontaktfelt og bunn. Settes inn på alle sidene.
------------------------------------------------------------------- */
const PIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-7.200 7-12a7 7 0 1 0-14 0c0 4.800 7 12 7 12Z"/><circle cx="12" cy="9" r="2.500"/></svg>';
const PAGES = [["meny.html", "nav.menu", "Meny"], ["ravarer.html", "nav.raw", "Råvarene"], ["operator.html", "nav.operator", "Bli operatør"], ["restauranter.html", "nav.restaurants", "Restauranter"]];
const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
const navLink = ([href, key, text], cls = "nav__link") =>
  `<a class="${cls}" href="${href}" data-i18n="${key}"${href === here ? ' aria-current="page"' : ""}>${text}</a>`;

const NAV_HTML = `
  <div class="nav__bar">
    <div class="nav__side">
      <button class="nav__round nav__burger" id="burger" aria-label="Meny" aria-expanded="false" aria-controls="sheet">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
      <div class="nav__langs" role="group" aria-label="Språk / Language">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.200 3 14.800 0 18M12 3c-3 3.200-3 14.800 0 18"/></svg>
        <button type="button" data-lang="no">NO</button>
        <button type="button" data-lang="en">EN</button>
      </div>
      <span class="nav__rule"></span>
      ${navLink(PAGES[0])}${navLink(PAGES[1])}
    </div>
    <a class="nav__logo" href="index.html" aria-label="La Kokido"><img src="assets/img/logo.webp" alt="La Kokido" width="500" height="195"></a>
    <div class="nav__side nav__side--right">
      ${navLink(PAGES[2])}
      <a class="pill pill--red nav__find" href="restauranter.html">${PIN}<span data-i18n="nav.find">Finn restaurant</span></a>
      <a class="nav__round nav__round--red nav__pin" href="restauranter.html" aria-label="Finn restaurant">${PIN}</a>
    </div>
  </div>
  <div class="sheet" id="sheet" hidden>
    <nav class="sheet__nav" aria-label="Meny">${PAGES.map((p) => navLink(p, "")).join("")}</nav>
    <div class="sheet__actions">
      <div class="lang-toggle"><button type="button" data-lang="no">Norsk</button><button type="button" data-lang="en">English</button></div>
      <a class="pill pill--red" href="restauranter.html" data-i18n="nav.find">Finn restaurant</a>
    </div>
  </div>`;

const LINE = '<span data-i18n="c.line">Bli operatør Bli operatør Bli operatør Bli operatør Bli operatør Bli operatør</span>';
const TAIL_HTML = `
<section class="prefooter" id="kontakt">
  <div class="container prefooter__grid">
    <div class="prefooter__body">
      <h2 class="t-display prefooter__title" data-i18n="c.title">Vil du servere La Kokido?</h2>
      <p class="prefooter__lead" data-i18n="c.lead">Send oss en e-post og fortell litt om restauranten din.</p>
      <p class="prefooter__mail"><a data-email-link href="#kontakt"><span data-email-text></span></a>
        <button type="button" class="copy" id="copy-email" data-i18n="c.copy">Kopier</button></p>
      <form class="signup" id="operator-form" novalidate>
        <div class="signup__row">
          <label class="sr-only" for="f-name" data-i18n="c.name">Navn</label>
          <input id="f-name" name="name" placeholder="Navn" data-i18n-ph="c.name" autocomplete="name" required>
          <label class="sr-only" for="f-rest" data-i18n="c.rest">Restaurant</label>
          <input id="f-rest" name="restaurant" placeholder="Restaurant" data-i18n-ph="c.rest" autocomplete="organization" required>
        </div>
        <div class="signup__row">
          <label class="sr-only" for="f-city" data-i18n="c.city">By og land</label>
          <input id="f-city" name="city" placeholder="By og land" data-i18n-ph="c.city" autocomplete="address-level2" required>
          <label class="sr-only" for="f-phone" data-i18n="c.phone">Telefon (valgfritt)</label>
          <input id="f-phone" name="phone" type="tel" placeholder="Telefon (valgfritt)" data-i18n-ph="c.phone" autocomplete="tel">
        </div>
        <label class="sr-only" for="f-msg" data-i18n="c.msg">Melding (valgfritt)</label>
        <textarea id="f-msg" name="message" rows="3" placeholder="Melding (valgfritt)" data-i18n-ph="c.msg"></textarea>
        <p class="signup__error" id="form-error" role="alert" hidden data-i18n="c.error">Fyll inn navn, restaurant og by.</p>
        <button class="pill pill--black" type="submit" data-i18n="c.send">Skriv e-post</button>
        <p class="signup__note" id="form-done" role="status" hidden data-i18n="c.done">E-postprogrammet ditt skal nå ha åpnet seg med meldingen klar. Skjedde det ingenting? Skriv til adressen over.</p>
        <p class="signup__note" data-i18n="c.note">Skjemaet åpner e-postprogrammet ditt med meldingen ferdig utfylt. Ingenting lagres på denne siden.</p>
      </form>
    </div>
  </div>
  <div class="prefooter__lines t-display" aria-hidden="true">${LINE}${LINE}${LINE}</div>
</section>
<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <img src="assets/img/logo.webp" alt="La Kokido" width="500" height="195" loading="lazy">
        <div class="lang-toggle"><button type="button" data-lang="no">Norsk</button><button type="button" data-lang="en">English</button></div>
      </div>
      <ul class="footer__col">
        <li><a href="meny.html" data-i18n="nav.menu">Meny</a></li>
        <li><a href="restauranter.html" data-i18n="nav.restaurants">Restauranter</a></li>
        <li><a href="ravarer.html" data-i18n="nav.raw">Råvarene</a></li>
      </ul>
      <ul class="footer__col">
        <li><a href="operator.html" data-i18n="nav.operator">Bli operatør</a></li>
        <li><a href="index.html" data-i18n="nav.home">Forside</a></li>
      </ul>
      <address>
        <strong>La Kokido Fried Chicken</strong>
        <a data-email-link href="#kontakt"><span data-email-text></span></a>
      </address>
    </div>
    <p class="t-display footer__word" aria-hidden="true"><span data-i18n="f.w1">Kylling som</span><br><span data-i18n="f.w2">frister.</span></p>
    <p class="footer__legal">© ${new Date().getFullYear()} La Kokido Fried Chicken</p>
  </div>
</footer>`;

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

$("#nav").innerHTML = NAV_HTML;
$("#tail").outerHTML = TAIL_HTML;

/* ------------------------------------------------------------------ */

// Lar «tonsberg» treffe «Tønsberg».
const fold = (s) => s.toLowerCase().replace(/ø/g, "o").replace(/æ/g, "ae").replace(/å/g, "a")
  .normalize("NFD").replace(/[̀-ͯ]/g, "");

let lang = "no";
let activeCountry = "all";
const t = (k) => UI[lang][k];

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text) n.textContent = text;
  return n;
}
function link(href, cls, text) {
  const a = el("a", cls, text);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  return a;
}

/* ---- Språk ---- */
const NO = {};
$$("[data-i18n]").forEach((n) => (NO[n.dataset.i18n] ??= n.textContent));
const TITLE_NO = document.title;

function setLang(next) {
  lang = next === "en" ? "en" : "no";
  document.documentElement.lang = lang;
  const dict = lang === "en" ? EN : NO;
  $$("[data-i18n]").forEach((n) => { if (dict[n.dataset.i18n]) n.textContent = dict[n.dataset.i18n]; });
  $$("[data-i18n-ph]").forEach((n) => { if (dict[n.dataset.i18nPh]) n.placeholder = dict[n.dataset.i18nPh]; });
  $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  document.title = (lang === "en" && document.body.dataset.titleEn) || TITLE_NO;
  try { localStorage.setItem("lk-lang", lang); } catch {}
  renderMenu();
  renderFilters();
  renderLocations();
}
$$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

/* ---- E-post ---- */
$$("[data-email-link]").forEach((a) => (a.href = `mailto:${CONTACT_EMAIL}`));
$$("[data-email-text]").forEach((n) => (n.textContent = CONTACT_EMAIL));
$("#copy-email").addEventListener("click", async (e) => {
  try {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    e.target.textContent = t("copied");
    setTimeout(() => (e.target.textContent = t("copy")), 2000);
  } catch {
    const range = document.createRange();
    range.selectNodeContents($(".prefooter__mail [data-email-text]"));
    getSelection().removeAllRanges();
    getSelection().addRange(range);
  }
});

/* ---- Tall på forsiden ---- */
const countries = [...new Set(LOCATIONS.map((l) => l.country))];
$$('[data-count="total"]').forEach((n) => (n.textContent = LOCATIONS.length));
$$('[data-count="countries"]').forEach((n) => (n.textContent = countries.length));

/* ---- Menysiden ---- */
function menuCard(item) {
  const li = el("li", "mcard");
  const photo = el("div", "mcard__photo" + (item.img ? "" : " mcard__photo--empty"));
  const img = el("img");
  img.src = item.img ? `assets/menu/${item.img}.webp` : "assets/img/icon-512.png";
  img.alt = "";
  img.loading = "lazy";
  img.width = item.img ? 960 : 512;
  img.height = item.img ? 540 : 512;
  photo.append(img);
  li.append(photo, el("h3", "", (lang === "en" && item.en_name) || item.name));
  if (item[lang]) li.append(el("p", "", item[lang]));
  return li;
}
function renderMenu() {
  const root = $("#menu-root");
  if (!root) return;
  $("#menu-chips").replaceChildren(
    ...MENU.map((c) => { const a = el("a", "chip chip--light", c[lang]); a.href = `#${c.id}`; return a; })
  );
  root.replaceChildren(
    ...MENU.map((c) => {
      const sec = el("section", "mcat");
      sec.id = c.id;
      const grid = el("ul", "mcat__grid");
      grid.append(...c.items.map(menuCard));
      sec.append(el("h2", "t-display t-label", c[lang]), grid);
      return sec;
    })
  );
}

/* ---- Restaurantsiden ---- */
function renderFilters() {
  const root = $("#loc-filters");
  if (!root) return;
  root.replaceChildren(
    ...["all", ...countries].map((c) => {
      const b = el("button", "chip", t(c));
      b.type = "button";
      b.setAttribute("aria-pressed", c === activeCountry);
      b.addEventListener("click", () => { activeCountry = c; renderFilters(); renderLocations(); });
      return b;
    })
  );
}
function renderLocations() {
  const list = $("#loc-list");
  if (!list) return;
  const q = fold($("#loc-search").value.trim());
  const shown = LOCATIONS.filter(
    (l) =>
      (activeCountry === "all" || l.country === activeCountry) &&
      (!q || fold(`${l.name} ${l.street} ${l.city} ${UI.no[l.country]} ${UI.en[l.country]}`).includes(q))
  );
  list.replaceChildren(
    ...shown.map((l) => {
      const li = el("li", "rest__item");
      const body = el("div");
      body.append(el("h3", "", l.name), el("p", "", [l.street, l.city, t(l.country)].filter(Boolean).join(", ")));
      const actions = el("div", "rest__actions");
      actions.append(link(l.map, "pill pill--dark pill--sm", t("map")));
      if (l.order) actions.append(link(l.order, "pill pill--red pill--sm", t("order")));
      li.append(body, actions);
      return li;
    })
  );
  $("#loc-empty").hidden = shown.length > 0;
  $("#loc-count").textContent = `${shown.length} ${shown.length === 1 ? t("one") : t("many")}`;
}
$("#loc-search")?.addEventListener("input", renderLocations);

/* ---- Operatør-skjema: åpner besøkerens e-postprogram med meldingen ferdig utfylt ---- */
const form = $("#operator-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const missing = ["name", "restaurant", "city"].filter((k) => !d[k].trim());
  $("#form-error").hidden = missing.length === 0;
  if (missing.length) {
    form.elements[missing[0]].focus();
    return;
  }
  const body = [
    t("hi"), "", t("intro"), "",
    `${t("name")}: ${d.name}`,
    `${t("rest")}: ${d.restaurant}`,
    `${t("city")}: ${d.city}`,
    d.phone.trim() ? `${t("phone")}: ${d.phone}` : null,
    d.message.trim() ? "" : null,
    d.message.trim() || null,
  ].filter((line) => line !== null).join("\n");
  const subject = `${t("subject")} – ${d.restaurant}, ${d.city}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  $("#form-done").hidden = false;
});

/* ---- Mobilmeny ---- */
const burger = $("#burger");
const sheet = $("#sheet");
burger.addEventListener("click", () => {
  sheet.hidden = !sheet.hidden;
  burger.setAttribute("aria-expanded", !sheet.hidden);
});

let saved = null;
try { saved = localStorage.getItem("lk-lang"); } catch {}
setLang(saved || "no");
