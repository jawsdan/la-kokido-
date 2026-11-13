/* ------------------------------------------------------------------
   La Kokido – site settings. Edit these two blocks to update the site.
------------------------------------------------------------------- */

// The address operator enquiries are sent to.
const CONTACT_EMAIL = "operator@example.com"; // TODO: replace with your Gmail address

// Restaurants. Add, remove or edit a line to update the location finder.
//   order: optional link to online ordering.
const LOCATIONS = [
  { name: "Campino La Kokido", street: "Pindsleveien 11", city: "Sandefjord", country: "Norway", map: "https://maps.app.goo.gl/hGhmecGaHLoZLDZF6", order: "https://campinopizza.agiorder.no/" },
  { name: "Amigos La Kokido Fredrikstad", street: "Hollendergata 2", city: "1607 Fredrikstad", country: "Norway", map: "https://maps.app.goo.gl/7BS56gHSAH2Eeyf37", order: "https://amigoskebab.no/" },
  { name: "Amigos La Kokido Rygge", street: "Ryggeraet 49", city: "1580 Rygge", country: "Norway", map: "https://maps.app.goo.gl/YoYBwwg3MNhXcWaH6", order: "https://www.foodbooking.com/" },
  { name: "Kronstad La Kokido", street: "Bjørnsons gate 5", city: "Bergen", country: "Norway", map: "https://maps.app.goo.gl/XXcqxjcdTrpKXDJ89" },
  { name: "La Kokido Prime Chicken & Grill", street: "Prinsens gate 6D", city: "1530 Moss", country: "Norway", map: "https://maps.app.goo.gl/8FHRqegZroCJVCTj6" },
  { name: "Livorno La Kokido", street: "Frederik Stangs gate 1", city: "3160 Stokke", country: "Norway", map: "https://maps.app.goo.gl/oET7gAyPneJo5BYJ7" },
  { name: "Caylos Drammen", street: "Griffenfelds gate 3", city: "3045 Drammen", country: "Norway", map: "https://maps.app.goo.gl/EBDrzLb5TpcpNmtw5" },
  { name: "Caylos Tønsberg", street: "Rambergveien 45", city: "3115 Tønsberg", country: "Norway", map: "https://maps.app.goo.gl/UXUjkyzERZVqmHB16" },
  { name: "La Kokido Haugesund", street: "Skjoldavegen 68", city: "5519 Haugesund", country: "Norway", map: "https://share.google/6sfuYmQJ18Uolrnjy" },
  { name: "Kuku Chicken 2 Mars", street: "36 Rue de Rome", city: "Casablanca 20250", country: "Morocco", map: "https://share.google/hb6we7k6vnLeOYKi7" },
  { name: "Kuku Chicken Bouskoura", street: "", city: "Bouskoura", country: "Morocco", map: "https://share.google/8SvF1T4cqgLxA0S5j" },
  { name: "Kuku Chicken Gauthier", street: "Gauthier", city: "Casablanca", country: "Morocco", map: "https://share.google/mSmHHFBPL7WcYu5HZ" },
  { name: "Kuku Chicken Oulfa", street: "Oulfa", city: "Casablanca", country: "Morocco", map: "https://www.google.com/maps/search/?api=1&query=Kuku+Chicken+Oulfa+Casablanca" },
];

/* ------------------------------------------------------------------ */

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
// Lets "tonsberg" match "Tønsberg" and "floro" match "Florø".
const fold = (s) => s.toLowerCase().replace(/ø/g, "o").replace(/æ/g, "ae").replace(/å/g, "a")
  .normalize("NFD").replace(/[̀-ͯ]/g, "");

/* ---- Email links ---- */
$$("[data-email-link]").forEach((a) => {
  a.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("La Kokido operator enquiry")}`;
});
$$("[data-email-text]").forEach((el) => (el.textContent = CONTACT_EMAIL));

/* ---- Location finder ---- */
const countries = [...new Set(LOCATIONS.map((l) => l.country))];
let activeCountry = "All";

$$('[data-count="total"]').forEach((el) => (el.textContent = LOCATIONS.length));
$$('[data-count="countries"]').forEach((el) => (el.textContent = countries.length));

const filters = $("#loc-filters");
["All", ...countries].forEach((c) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "chip";
  b.textContent = c === "All" ? "All" : c;
  b.setAttribute("aria-pressed", c === activeCountry);
  b.addEventListener("click", () => {
    activeCountry = c;
    $$(".chip", filters).forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderLocations();
  });
  filters.append(b);
});

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

function renderLocations() {
  const q = fold($("#loc-search").value.trim());
  const shown = LOCATIONS.filter(
    (l) =>
      (activeCountry === "All" || l.country === activeCountry) &&
      (!q || fold(`${l.name} ${l.street} ${l.city} ${l.country}`).includes(q))
  );
  const list = $("#loc-list");
  list.replaceChildren(
    ...shown.map((l) => {
      const li = el("li", "loc");
      const body = el("div", "loc-body");
      body.append(
        el("h3", "", l.name),
        el("p", "", [l.street, l.city, l.country].filter(Boolean).join(", "))
      );
      const actions = el("div", "loc-actions");
      actions.append(link(l.map, "btn btn-outline-dark btn-sm", "Directions"));
      if (l.order) actions.append(link(l.order, "btn btn-red btn-sm", "Order here"));
      li.append(body, actions);
      return li;
    })
  );
  $("#loc-empty").hidden = shown.length > 0;
  $("#loc-count").textContent = `${shown.length} ${shown.length === 1 ? "restaurant" : "restaurants"}`;
}
$("#loc-search").addEventListener("input", renderLocations);
renderLocations();

/* ---- Operator form: opens the visitor's email app with the message filled in ---- */
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
    "Hi La Kokido,",
    "",
    "I'm interested in becoming a La Kokido operator.",
    "",
    `Name: ${d.name}`,
    `Restaurant / company: ${d.restaurant}`,
    `City & country: ${d.city}`,
    d.phone.trim() ? `Phone: ${d.phone}` : null,
    "",
    d.message.trim() || null,
  ].filter((line) => line !== null).join("\n");
  const subject = `Operator enquiry – ${d.restaurant}, ${d.city}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  $("#form-done").hidden = false;
});

/* ---- Mobile menu ---- */
const burger = $("#burger");
const nav = $("#nav");
function setMenu(open) {
  nav.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));

$("#year").textContent = new Date().getFullYear();
