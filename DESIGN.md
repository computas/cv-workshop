# Designoppgave — redesign CV-appen med Claude Design

Denne mappa er CV-appen slik den ser ut i dag (ferdig, stylet versjon — samme app og samme
features som utviklerne har bygget gjennom uka). Du skal redesigne den med **Claude Design**
(https://claude.ai/design) og presentere resultatet. Du trenger ikke kode.

## Hva du skal lage
Et forbedret, **helhetlig** design for appen — ett designsystem som henger sammen på tvers av
begge skjermer:
1. **Forsiden / "Om meg"** (hovedfokus) — gjør den om til en ekte personlig profilside.
2. **Erfaringer-siden** — samme visuelle språk på kort, chips og filter.

Pluss et samlet **fargesystem** (lys + mørk variant). Lever et mockup + en kort presentasjon
(3–5 min): hva var problemet, hva endret du, hvorfor.

## Appen i dag — skjermer og features (alt skal med i redesignet)
- **Header:** tittel + to faner — "Om meg" og "Erfaring". Dekorativ blå bølge bak.
- **Forside / "Om meg" (`/`):** viser i dag en generisk liste over *alle* brukere (bilde,
  navn, universitet, beskrivelse, ferdigheter). Ingen personlig profil.
- **Erfaringer (`/experiences`):**
  - Kort per erfaring: bilde, **fargekodet type-chip** (jobb / utdanning / frivillig /
    hobbyprosjekt / annet), dato-spenn, sted, selskap (eller "Selvstendig arbeid" når tomt),
    tittel.
  - **Type-filter** (nedtrekk) + **sortering** nyeste først.
  - Laste-, feil- og tom-tilstand.
- **404-side** for ukjente ruter.

Behold disse funksjonene i designet — du forbedrer *uttrykket*, ikke funksjonaliteten.

## Slik kommer du i gang (Claude Design)
Claude Design lager design ut fra det du gir den: tekst, bilder/dokumenter, eller en
**kodebase** (da leser den farger/typografi/komponenter og bygger et designsystem).

1. Åpne https://claude.ai/design.
2. Gi den denne appen som kontekst — velg **én** måte:
   - **Pek på koden:** last opp `frontend/`-mappa herfra (ikke hele repoet — store mapper
     gir timeout). Da trekker Claude ut dagens farger/typografi automatisk.
   - **Eller skjermbilder:** lim inn skjermbilder av forsiden OG Erfaringer-siden.
3. **Verifiser** at fargene/tokenene Claude trakk ut stemmer med lista nederst før du
   itererer videre (feil-ekstraksjon sløser bort forsøk).
4. Lim inn startpromptene under. Iterer: be om flere varianter, be Claude begrunne valg,
   bruk inline-kommentarer / justeringskontrollene til du er fornøyd.

## Startprompter (kopier, juster fritt)

**1) Forside / "Om meg":**
> En personlig CV-/portfolioside ("Om meg") for en nyutdannet utvikler som søker jobb.
> Innhold: hero med profilbilde, navn og en kort tagline; en "Om meg"-tekst; en
> ferdighets-seksjon (chips); en tidslinje med erfaring (jobb, utdanning, frivillig,
> hobbyprosjekt); kontakt + LinkedIn-lenke.
> Visuell stil: rolig, profesjonell, moderne; **én** tydelig merkevarefarge (erstatt de tre
> konkurrerende blåtonene appen har i dag); god luft, tydelig hierarki.
> Constraints: lys + mørk variant; responsiv mobil → desktop (iPhone + desktop); konsistent
> chip-/kort-stil; norsk tekst.

**2) Erfaringer-siden (samme designsystem):**
> Bruk samme designsystem til en "Erfaringer"-side: et responsivt rutenett av erfaringskort
> (bilde, fargekodet type-chip, dato-spenn, sted, selskap), et type-filter (nedtrekk) og
> sortering. Redesign kortet med **fleksibel høyde** (ikke fast 350px/65px), tydeligere
> dato/selskap-hierarki, og en hover/aktiv-tilstand. Behold filter + sortering.

## Nåværende design-tokens (dagens app — utgangspunkt)
- **Blåtoner (tre konkurrerende — samle til én merkevarefarge):** `#2563eb` (overskrifter),
  `#0087C3 → #00253E` (header-gradient), `#29cff5` (aktiv tab).
- **Flater/nøytraler:** kort-bakgrunn `#ecf7ff`, kantlinje `#e5e7eb`, tekst `#333`/`#111827`,
  grå `#6b7280` / `#4b5563`, hvit `#ffffff`.
- **Semantisk:** feil `#dc2626`.
- **Type-chip-farger:** blå / lilla / grønn / rød / gul (én per erfaringstype).
- **Typografi/spacing:** ingen tydelig type-skala; bredde låst til `950px`; tittel `24px`.
- **Faste høyder (problem):** kort `350px`, korttittel `65px` (klipper innhold),
  header-bølge `370px`.

## Design-problemer å løse
- **Forsiden viser en generisk liste over alle brukere** — ikke en personlig profil. Største
  mulighet: gjør den til en ekte "Om meg"-side.
- **Tre konkurrerende blåfarger** → bestem én merkevarefarge + nøytraler + semantiske farger.
- **Ingen dark mode** noe sted.
- **Ingen responsiv tilpasning** (null `@media`); innhold låst til 950px mens header-bølgen
  er full bredde (100vw) og "lekker" på brede skjermer.
- **Faste pikselhøyder** på kortene klipper langt innhold / gir dødplass.
- **Tilgjengelighet:** dekorativ header-SVG mangler `aria-hidden`; filter-nedtrekket har et
  `<label>` uten synlig tekst.

## Når du er ferdig
- Eksporter mockupet (Claude Design kan eksportere til HTML/PDF/PPTX).
- **Overlevering til utviklerne:** del fargesystemet ditt som konkrete verdier (hex /
  CSS-variabler). Da kan en utvikler implementere det direkte. Claude Design kan også lage
  en handoff-pakke til Claude Code.
