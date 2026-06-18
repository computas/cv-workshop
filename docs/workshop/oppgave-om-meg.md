# Flaggskip: Bygg "Om meg"-siden

**Alle gjør denne først.** Estimert tid med AI: ~45–60 min. Stretch-mål når du er i mål.

## Bakgrunn
Headeren har en **"Om meg"**-tab som peker på `/`. Men siden (`frontend/src/pages/Home.tsx`)
er enten tom eller viser en liste over *alle* brukere — det finnes ingen ekte personlig
profilside. Den skal du bygge nå.

## Mål
Lag en personlig CV-/profilside for **én person** (bruk f.eks. bruker #1, som er den
som faktisk har erfaringer i seed-dataen). Siden skal være det første en arbeidsgiver ser.

## To veier inn (velg etter interesse)
Du trenger bare FE-veien for å være i mål. BE-veien er for deg som vil ha en
backend-utfordring og en rikere side.

### FE-vei (frontend)
Bygg profilsiden med data som allerede finnes.
- Hent bruker via `useUsers()` (hooken finnes i `frontend/src/hooks/useUsers.ts`)
  eller legg til `fetchUserById` i `api.ts` mot `GET /users/{id}`.
- Render en hero (bilde fra `imageUrl`, navn, universitet, kort tagline), en
  intro-paragraf (`description`), ferdigheter som chips, og en LinkedIn-lenke.
- Ferdigheter: gjenbruk chip-mønsteret. Se `ExperienceChip.tsx` / `cx-chip`-klassene.
- Erstatt den tomme `.container` i `Home.module.css` (den har hardkodet `height: 600px`).

### BE-vei (backend)
Gi profilsiden personens erfaringer.
- Lag endepunktet `GET /users/{id}/experiences`.
- I `CvService` bruk `Include(u => u.Experiences)` (eller hent `Experiences`
  der `UserId == id`). Returner **DTO-er**, ikke EF-entiteter.
- Lag/utvid en `ExperienceMapper.ToDto()` i `backend/Data/Mappers/` hvis den ikke finnes.
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
1. `brainstorming` — bestem layout og innhold før du koder.
2. `writing-plans` — skriv en kort plan.
3. `frontend-design` — for et distinkt, polert resultat (unngå generisk AI-utseende).
4. (BE-vei) `test-driven-development` for service-logikken.
5. `verification-before-completion` — kjør appen og se at det funker før du sier deg ferdig.

## Stretch (når Done er nådd)
- Gjør det til **din egen** CV: oppdater seed-dataen i `backend/Data/SeedData.cs`
  til deg selv (krever ny migrering — se `stretch-oppgaver.md`).
- Implementer `loader.tsx` (tom i dag) som en gjenbrukbar skeleton/spinner og bruk
  den her og på Erfaringer-siden.
- Legg til dark mode (se stretch-oppgavene).
- Animer hero/chips med `animate`- eller `delight`-skill.

## Fallgruver
- Bruker #2/#3 har ingen erfaringer — test BE-veien mot bruker #1.
- Nytt ikon? Registrer det i `frontend/src/main.tsx` (`addIcons`), ellers vises det ikke.
- `imageUrl` i seed kan være ugyldig — ha en fallback (se `ExperienceCard` sitt mønster).
