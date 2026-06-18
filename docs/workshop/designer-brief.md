# Designer-spor: Redesign av CV-appen med claude.ai/design

Mens utviklerne koder, redesigner du CV-appen med AI — og presenterer resultatet.
Verktøy: **claude.ai/design** (https://claude.ai/design). Du trenger ikke kode.

## Mål
Lag et forbedret design for CV-appen — med hovedvekt på **forsiden / "Om meg"** — og
presenter det til slutt (3–5 min). Du leverer et design/mockup, ikke kode.

## Slik kommer du i gang
1. Du får tilsendt **appen som en mappe** (branchen `workshop/designer` — den ferdige,
   stylede versjonen). Last mappen opp i https://claude.ai/design.
2. Gi den kontekst: dette er en personlig CV-/portfolioside. Pek på design-problemene under.
3. Be om et redesign. Iterer: be om flere varianter, be Claude begrunne valgene, juster
   farger/typografi/layout til du er fornøyd.

## Design-problemer å løse (fra en gjennomgang av appen)
- **Forsiden viser en generisk liste over alle brukere** — ikke en personlig profil. Den
  viktigste skjermen er den minst gjennomtenkte. Største mulighet: gjør den til en ekte
  "Om meg"-side (hero med bilde + navn + tagline, intro, ferdigheter, kontakt/LinkedIn).
- **Tre konkurrerende blåfarger**: `#2563eb` (overskrifter), `#0087C3→#00253E`
  (header-gradient), `#29cff5` (aktiv tab). Bestem **én** merkevarefarge + nøytraler +
  semantiske farger (suksess/feil).
- **Ingen dark mode** noe sted.
- **Ingen responsiv tilpasning via media queries**: null `@media`-spørringer. Innholdet er
  låst til 950px bredde mens header-bølgen flyter i full bredde (100vw) — bølgen "lekker"
  på brede skjermer.
- **Faste pikselhøyder** på erfaringskortene (kort 350px, tittel 65px) → klipper langt
  innhold, gir dødplass ved kort innhold.
- **Tilgjengelighet**: dekorativ header-SVG mangler `aria-hidden`; filter-nedtrekket har et
  `<label>`-element uten synlig ledetekst; sjekk kontrast på de nøytrale gråtonene
  (`#6b7280`/`#4b5563`).

## Leveranse
- Et redesign av minst **forsiden/"Om meg"** (hero, intro, ferdigheter, kontakt/LinkedIn).
- Et **fargesystem**: én merkevarefarge + nøytraler + lys/mørk variant.
- Kort presentasjon: hva var problemet, hva endret du, hvorfor.

## Bonus
- Mock også erfaringskortet med fleksibel høyde + hover/aktiv-tilstand.
- Vis responsiv oppførsel: mobil → desktop, og hvordan header-bølgen oppfører seg.
- **Overlevering til utviklerne:** del fargesystemet ditt som konkrete verdier
  (hex/CSS-variabler) — da kan dev-sporet implementere det direkte (se "Dark mode +
  fargesystem" i `stretch-oppgaver.md`).
