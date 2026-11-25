# La Kokido

Nettside for La Kokido Fried Chicken. Norsk med engelsk språkvalg.

Sider: `index.html` (forside), `meny.html`, `restauranter.html`, `ravarer.html` og `operator.html`.

Ren HTML, CSS og JavaScript uten byggesteg. Legg mappen på en hvilken som helst statisk webserver.

## Endre innhold

Det du oftest vil endre står øverst i `site.js`:

- `CONTACT_EMAIL` – adressen operatør-henvendelser sendes til.
- `LOCATIONS` – én linje per restaurant (navn, adresse, land, kartlenke, valgfri bestillingslenke).
- `MENU` – kategorier og retter. Bildene ligger i `assets/menu/`.
- `EN` – de engelske tekstene. De norske står i HTML-filene.

Toppmeny, kontaktfelt og bunn er felles for alle sidene og ligger også i `site.js`.
