/* ------------------------------------------------------------------
   La Kokido – innstillinger. Endre disse to blokkene for å oppdatere siden.
------------------------------------------------------------------- */

// Adressen operatør-henvendelser sendes til.
const CONTACT_EMAIL = "operator@example.com"; // TODO: bytt til Gmail-adressen deres

// Restauranter. Legg til, fjern eller endre en linje for å oppdatere listen.
//   order: valgfri lenke til nettbestilling.
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

/* ------------------------------------------------------------------
   Engelske tekster. De norske står i index.html.
------------------------------------------------------------------- */
const EN = {
  "skip": "Skip to content",
  "nav.restaurants": "Restaurants", "nav.chicken": "The chicken", "nav.about": "About us", "nav.operator": "Become an operator", "nav.find": "Find a restaurant",
  "hero.l1": "Crispy outside.", "hero.l2": "Juicy inside.",
  "hero.lead": "Natural chicken, our own marinades and breadings, pressure-fried until golden.",
  "chicken.label": "The chicken", "chicken.cta": "Find your La Kokido", "chicken.tag": "For sharing", "chicken.big": "Pressure-fried since day one",
  "chicken.c1": "Classic", "chicken.c1t": "Golden, crunchy breading and juicy meat. The timeless one.",
  "chicken.c2": "Spicy bone-in", "chicken.c2t": "Bold flavour with a proper kick, cooked on the bone.",
  "chicken.c3t": "Crispy strips of chicken fillet. Made for dipping and sharing.",
  "chicken.note": "Menus and prices vary from restaurant to restaurant.",
  "raw.label": "The ingredients", "raw.lead": "We use only natural chicken and no artificial additives. You can taste it.",
  "raw.f1": "Fresh chicken", "raw.f1t": "Fresh and full of flavour in every restaurant.",
  "raw.f2": "Natural ingredients", "raw.f2t": "Pure flavours, nothing artificial.",
  "raw.f3": "Our own seasonings", "raw.f3t": "The breadings, marinades and seasonings are our own.",
  "raw.f4": "Same quality everywhere", "raw.f4t": "Special pressure fryers give the same result every time.",
  "about.label": "Over 65 years of fried chicken",
  "about.lead": "La Kokido Fried Chicken builds on more than 65 years of experience with irresistible, pressure-fried chicken. We give our operators what they need to serve chicken guests come back for.",
  "about.s1": "years of experience with pressure-fried chicken.", "about.s2": "restaurants serve La Kokido today.", "about.s3": "countries: Norway and Morocco.",
  "rest.title": "Restaurants", "rest.lead": "Find your nearest La Kokido, get directions or order directly.",
  "rest.search": "Search by city or restaurant", "rest.empty": "No restaurants match that search yet. Want La Kokido in your town?", "rest.map": "See all on the map",
  "op.w1": "Become an", "op.w2": "operator",
  "op.lead": "Run a restaurant? Put La Kokido Fried Chicken on your menu. You get a complete, proven concept.", "op.cta": "Contact us",
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
  "f.contact": "Contact", "f.w1": "Chicken worth", "f.w2": "the trip.",
};

// Tekster som settes fra JavaScript, på begge språk.
const UI = {
  no: { all: "Alle", NO: "Norge", MA: "Marokko", map: "Kart", order: "Bestill", one: "restaurant", many: "restauranter", copied: "Kopiert", copy: "Kopier",
        subject: "Operatør-henvendelse", hi: "Hei La Kokido,", intro: "Jeg er interessert i å bli La Kokido-operatør.", name: "Navn", rest: "Restaurant", city: "By og land", phone: "Telefon" },
  en: { all: "All", NO: "Norway", MA: "Morocco", map: "Map", order: "Order", one: "restaurant", many: "restaurants", copied: "Copied", copy: "Copy",
        subject: "Operator enquiry", hi: "Hi La Kokido,", intro: "I'm interested in becoming a La Kokido operator.", name: "Name", rest: "Restaurant", city: "City and country", phone: "Phone" },
};

/* ------------------------------------------------------------------ */

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
// Lar «tonsberg» treffe «Tønsberg».
const fold = (s) => s.toLowerCase().replace(/ø/g, "o").replace(/æ/g, "ae").replace(/å/g, "a")
  .normalize("NFD").replace(/[̀-ͯ]/g, "");

let lang = "no";
let activeCountry = "all";
const t = (k) => UI[lang][k];

/* ---- Språk ---- */
const NO = {};
$$("[data-i18n]").forEach((el) => (NO[el.dataset.i18n] ??= el.textContent));

function setLang(next) {
  lang = next === "en" ? "en" : "no";
  document.documentElement.lang = lang;
  const dict = lang === "en" ? EN : NO;
  $$("[data-i18n]").forEach((el) => { if (dict[el.dataset.i18n]) el.textContent = dict[el.dataset.i18n]; });
  $$("[data-i18n-ph]").forEach((el) => { if (dict[el.dataset.i18nPh]) el.placeholder = dict[el.dataset.i18nPh]; });
  $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  try { localStorage.setItem("lk-lang", lang); } catch {}
  renderFilters();
  renderLocations();
}
$$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

/* ---- E-post ---- */
$$("[data-email-link]").forEach((a) => (a.href = `mailto:${CONTACT_EMAIL}`));
$$("[data-email-text]").forEach((el) => (el.textContent = CONTACT_EMAIL));
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

/* ---- Restauranter ---- */
const countries = [...new Set(LOCATIONS.map((l) => l.country))];
$$('[data-count="total"]').forEach((el) => (el.textContent = LOCATIONS.length));
$$('[data-count="countries"]').forEach((el) => (el.textContent = countries.length));

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

function renderFilters() {
  $("#loc-filters").replaceChildren(
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
  const q = fold($("#loc-search").value.trim());
  const shown = LOCATIONS.filter(
    (l) =>
      (activeCountry === "all" || l.country === activeCountry) &&
      (!q || fold(`${l.name} ${l.street} ${l.city} ${UI.no[l.country]} ${UI.en[l.country]}`).includes(q))
  );
  $("#loc-list").replaceChildren(
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
$("#loc-search").addEventListener("input", renderLocations);

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
function setMenu(open) {
  sheet.hidden = !open;
  burger.setAttribute("aria-expanded", open);
}
burger.addEventListener("click", () => setMenu(sheet.hidden));
sheet.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));

$("#year").textContent = new Date().getFullYear();

let saved = null;
try { saved = localStorage.getItem("lk-lang"); } catch {}
setLang(saved || "no");
