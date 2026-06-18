# Flaggskip: Bygg "Om meg"-siden

**Alle gjør denne først.** Estimert tid med AI: ~45–60 min for FE-veien; BE-veien legger
til ~30–45 min. Stretch-mål når du er i mål.

## Bakgrunn
Headeren har en **"Om meg"**-tab som peker på `/`. Men siden (`frontend/src/pages/Home.tsx`)
viser i dag enten ingenting eller en generisk liste over *alle* brukere — det finnes ingen
ekte personlig profilside. Den skal du bygge nå.

> Mangler du uke-arbeidet? Hent løsningen inn først: `git checkout fasit -- backend/ frontend/`.

## Mål
Lag en personlig CV-/profilside for **én person**. Bruk seed-bruker #1 (den eneste med
erfaringer). Merk: den heter **Knut Vikler**, mens headeren er hardkodet til "Espen Askeladd
sin CV" (`main-header.tsx`) — oppdater gjerne headertittelen så den matcher.

## To veier inn (velg etter interesse)
Du trenger bare FE-veien for å være i mål. BE-veien er for deg som vil ha en backend-utfordring.

### FE-vei (frontend) — krever ingen backend-endringer
- Hent brukere via `useUsers()` (hooken finnes i `frontend/src/hooks/useUsers.ts`) og plukk
  bruker #1 i klienten. (Du *kan* lage `fetchUserById` mot `GET /users/{id}`, men det
  endepunktet er Oppgave 1 — finnes bare hvis du gjorde det / hentet fasit.)
- Render en hero (bilde fra `imageUrl`, navn, universitet, kort tagline), en intro-paragraf
  (`description`), ferdigheter som chips, og en LinkedIn-lenke.
- Ferdigheter: gjenbruk chip-mønsteret. Se `ExperienceChip.tsx` / `cx-chip`-klassene.
- Erstatt den tomme `.container` i `Home.module.css`.

### BE-vei (backend)
Gi profilsiden personens erfaringer.
- Lag endepunktet `GET /users/{id}/experiences`.
- I `CvService` bruk `Include(u => u.Experiences)` (eller hent `Experiences` der
  `UserId == id`). Returner **DTO-er**, ikke EF-entiteter. (Enklere alternativ: `GET
  /experiences` returnerer alle med `userId` — du kan filtrere i klienten i stedet.)
- Lag `ExperienceMapper.ToDto()` i `backend/Data/Mappers/` hvis den ikke finnes.
- Vis erfaringene som en tidslinje på "Om meg"-siden (gjenbruk `ExperienceCard`).

## Definition of Done
- [ ] "Om meg"-tabben viser en personlig profilside (ikke tom, ikke en liste over alle).
- [ ] Viser minst: navn, bilde, beskrivelse, universitet, ferdigheter som chips, LinkedIn-lenke.
- [ ] Håndterer laste- og feiltilstand (ikke bare blank skjerm mens data lastes).
- [ ] Bruker designsystem-tokens/`cx-*`-klasser, ikke en haug hardkodede hex/px.
- [ ] Ser ryddig ut på både mobil og desktop.
- [ ] (BE-vei) `GET /users/{id}/experiences` returnerer brukerens erfaringer som DTO-er,
      og siden viser en tidslinje.

## Bruk disse skills
1. `/superpowers:brainstorming` — bestem layout og innhold før du koder.
2. `/superpowers:writing-plans` — skriv en kort plan.
3. `/frontend-design:frontend-design` — for et distinkt, polert resultat.
4. (BE-vei) `/superpowers:test-driven-development` for service-logikken.
5. `/superpowers:verification-before-completion` — kjør appen og se at det funker.

(Se `skills-cheatsheet.md` for installasjon og hvordan du trigger skills.)

## Stretch (når Done er nådd)
- Gjør det til **din egen** CV: oppdater seed-dataen i `backend/Data/SeedData.cs` til deg
  selv. Krever ny migrering: `dotnet ef migrations add MinCv`, og restart backend (den
  migrerer automatisk ved oppstart).
- Implementer `loader.tsx` (tom i dag) som en gjenbrukbar skeleton/spinner og bruk den her
  og på Erfaringer-siden.
- Legg til dark mode (se `stretch-oppgaver.md`).

## Fallgruver
- Bruker #2/#3 har ingen erfaringer — test BE-veien mot bruker #1.
- **Seed-bildene er ødelagte** (alle peker på `example.com/alice.jpg`). `|| fallback` fanger
  bare `null`, ikke en ødelagt URL — bruk `onError` på `<img>` eller et placeholder-bilde.
- Nytt ikon? Registrer det i `frontend/src/main.tsx` (`addIcons`), ellers vises det ikke.
