# Stretch-oppgaver

Ta én av disse etter at flaggskipet ("Om meg"-siden) er i mål. Hver er ~30–60 min med AI.
Bruk alltid `brainstorming` → `writing-plans` → implementer → `verification-before-completion`.

---

## FE-2: "Finn folk med ferdigheter" (søkeside)
Backend har allerede `POST /users/skills` (tar `{ "wantedSkills": ["React", "Go"] }` og
returnerer brukere som matcher) — men **ingen frontend bruker det**. Bygg UI-et.

- Ny side + route i `App.tsx`, og en ny tab i `main-header.tsx`.
- Ny `searchUsersBySkills(skills)` i `api.ts` (POST).
- Skjema der man velger/skriver ferdigheter (chips), og en resultatliste.

**Done:** Du kan søke på én eller flere ferdigheter og se brukere som matcher, med laste-/tom-tilstand.

---

## BE-2: Opprett erfaring (`POST /experiences`)
Første skrive-endepunkt — gjør appen interaktiv.

- `POST /experiences` i `ExperienceEndpoints.cs`, ny `ExperienceRequest`-record.
- Validering (påkrevde felt, datoer), returner `201 Created` ved suksess, `400` ved feil.
- `AddExperienceAsync` i `CvService`/`ICvService` (`context.Experiences.Add` + `SaveChanges`).

**Done:** Du kan opprette en erfaring via Scalar-UI; den dukker opp i `GET /experiences`.
**Bruk `test-driven-development`** — perfekt oppgave for det.

---

## Reserve-oppgaver

### Dark mode + fargesystem (FE)
I dag finnes **tre konkurrerende blåfarger** (`#2563eb`, `#0087C3`, `#29cff5`), null
`@media`, ingen dark mode.
- Lag `tokens.css` med CSS-variabler (`--brand`, `--surface`, `--text`, `--muted`, spacing).
- Refaktorer hardkodede hex i `index.css`, `main-header`, `NotFound`, `Home` til tokens.
- Legg til `@media (prefers-color-scheme: dark)` + evt. en toggle i headeren.

### Experience-detalj (modal)
- Gjør `ExperienceCard` klikkbar → åpner dialog med full beskrivelse/rolle/datoer.
- Ingen ny fetch nødvendig (dataen ligger på kortet). Lokal UI-state.

### Slå på API-key-auth (BE + FE)
- Avkommenter `ApiKeyMiddleware` i `Program.cs`. Dokumenter 401-kontrakten.
- Send `X-Frontend-Api-Key` fra `api.ts`. Koordiner med de andre — ellers får de 401.

### `type` → enum (BE)
- Gjør `experience.type` (fritekst) om til en C#-enum med EF value-conversion.
- Oppdater seed + lag migrering. Lær hele schema-endrings-løpet.

### Klient-søk + delbar filter-URL (FE)
- Fritekstsøk på tittel på Erfaringer-siden + lagre valgt type-filter i URL-en
  via `useSearchParams` (overlever refresh / kan deles).
