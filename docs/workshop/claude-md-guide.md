# Guide: Skriv en god CLAUDE.md

Ta denne med deg til andre prosjekter. En `CLAUDE.md` er Claude Codes **vedvarende
minne** for et prosjekt — den lastes inn i konteksten hver gang. Derfor: **kort og
høy signal**. Alt som ikke betaler for seg, koster bare tokens og fortynner resten.

> Se `CLAUDE.md` i rota av dette prosjektet som et konkret eksempel på alt under.

## Hvor filene ligger
Claude Code laster minne fra flere steder (mer spesifikt overstyrer mer generelt):
- **`./CLAUDE.md`** i prosjektrota — delt med teamet (commit den). Den viktigste.
- **Foreldremapper** — Claude går oppover i treet og tar med det den finner.
- **Undermapper** (`frontend/CLAUDE.md`) — lastes når Claude jobber med filer der.
- **`~/.claude/CLAUDE.md`** — globalt for alle dine prosjekter.
- **`CLAUDE.local.md`** — personlige notater som ikke deles (legg den i `.gitignore`).

Du kan også **importere** andre filer med `@sti/til/fil` (relativt til fila som
importerer, maks 4 ledd). Første gang spør Claude om godkjenning.

## Lag et utkast raskt
Kjør **`/init`** i prosjektet — Claude leser kodebasen og genererer et førsteutkast.
Rediger det ned etterpå; auto-genererte filer blir ofte for lange.

## Hva som bør være med
1. **Hva prosjektet er** — 1–2 setninger.
2. **Kommandoer** — bygg, kjør, test, lint. Det du faktisk skriver ofte.
3. **Stack/arkitektur** — kort. Hvor ting bor, hvordan data flyter.
4. **Konvensjoner** — kodestil, mønstre, navngiving. "Gjør slik."
5. **Fallgruver** — ikke-åpenbare ting som får AI (og folk) til å snuble.
6. **Ikke gjør** — harde grenser ("aldri commit hemmeligheter").

## Hva som IKKE bør være med
- Det koden allerede viser tydelig (ikke gjenfortell strukturen linje for linje).
- Standard språk-/rammeverk-konvensjoner Claude allerede kan.
- Lange forklaringer eller API-dok — **lenk** til `docs/` i stedet.
- Hemmeligheter, nøkler, tokens.
- Ting som endrer seg ofte og blir utdatert.

## Skriv den slik at den virker
- **Imperativ og konkret:** "Returner alltid DTO-er" og "Bruk `cx-*`-tokens" slår
  "skriv ryddig kode".
- **Hold den kort** — sikt mot under ~200 linjer. Blir den lang, flytt detaljer til
  `docs/` og lenk dit. Lange filer følges dårligere.
- **Markdown med overskrifter og punktlister** — lett å skanne for både folk og AI.
- **Oppdater når du retter AI to ganger på det samme** — gjentatt korrigering er et
  signal om en manglende instruks. Bruk `/memory` for å redigere, eller bare be Claude
  "legg dette i CLAUDE.md".

## Hvorfor det funker
Claude leser CLAUDE.md før den rører koden. Gode instrukser her = færre runder med
"nei, gjør det slik" senere. Det er den billigste investeringen i god AI-output.

---
*Kilder: code.claude.com/docs — Memory og Best Practices.*
