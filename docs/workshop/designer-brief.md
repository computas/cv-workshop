# Designer-spor: Redesign av CV-appen med claude.ai/design

Mens utviklerne koder, redesigner du CV-appen med AI — og presenterer resultatet.
Verktøy: **claude.ai/design** (https://claude.ai/design).

## Mål
Lag et forbedret design for CV-appen — med hovedvekt på **"Om meg"-siden** — og
presenter det til slutt (3–5 min). Du trenger ikke kode; du leverer et design/mockup.

## Slik kommer du i gang
1. Last ned / se appen slik den ser ut i dag (fasit-branchen). Ta skjermbilder av
   forsiden, "Om meg" og "Erfaringer".
2. Gå til https://claude.ai/design.
3. Gi den konteksten: hva appen er (en personlig CV-/portfolioside), skjermbildene
   av dagens design, og design-problemene under.
4. Be om et redesign. Iterer: be om flere varianter, be Claude begrunne valgene,
   juster farger/typografi/layout til du er fornøyd.

## Design-problemer å løse (fra en gjennomgang av dagens UI)
- **"Om meg"-siden er tom / udesignet** på alle brancher — den viktigste skjermen
  er den minst gjennomtenkte. Dette er den største muligheten.
- **Tre konkurrerende blåfarger**: `#2563eb` (overskrifter), `#0087C3→#00253E`
  (header-gradient), `#29cff5` (aktiv tab). Bestem **én** merkevarefarge + nøytraler
  + semantiske farger (suksess/feil).
- **Ingen dark mode** noe sted.
- **Ingen responsivitet**: null `@media`-spørringer. Innholdet er låst til 950px bredde
  mens header-bølgen flyter i full bredde — bølgen "lekker" på brede skjermer.
- **Faste pikselhøyder** (kort 350px, tittel 65px, "Om meg"-boks 600px) → klipper
  langt innhold, gir dødplass ved kort innhold.
- **Tilgjengelighet**: dekorativ header-SVG mangler `aria-hidden`, blå overskrifter
  kan gi for lav kontrast, filter-select mangler synlig label.

## Leveranse
- Et redesign av minst **"Om meg"-siden** (hero med bilde + navn + tagline,
  intro-tekst, ferdigheter, kontakt/LinkedIn).
- Et **fargesystem**: én merkevarefarge + nøytraler + lys/mørk variant.
- Kort presentasjon: hva var problemet, hva endret du, hvorfor.

## Bonus
- Mock også Erfaringer-kortet med fleksibel høyde + hover/aktiv-tilstand.
- Vis responsiv oppførsel: mobil → desktop, og hvordan header-bølgen oppfører seg.
- **Overlevering til utviklerne:** del fargesystemet ditt som konkrete verdier
  (hex/CSS-variabler) — da kan dev-sporet implementere det direkte (se
  "Dark mode + fargesystem" i `stretch-oppgaver.md`).
