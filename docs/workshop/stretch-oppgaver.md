# Stretch-oppgaver

Ta én av disse etter at flaggskipet ("Om meg"-siden) er i mål. Hver er ~30–60 min med AI.
Bruk alltid `/superpowers:brainstorming` → `/superpowers:writing-plans` → implementer →
`/superpowers:verification-before-completion`.

> Mangler du backend fra uka? Hent fasit: `git checkout fasit -- backend/`.

---

## FE-2: "Finn folk med ferdigheter" (søkeside)
**Krever:** Oppgave 4 (`POST /users/skills`) ferdig — ellers returnerer endepunktet tomt.
Når Oppgave 4 er på plass, tar `POST /users/skills` `{ "wantedSkills": ["React", "Go"] }`
og returnerer brukere som matcher — men **ingen frontend bruker det**. Bygg UI-et.

- Ny side + route i `App.tsx`, og en ny tab i `main-header.tsx`.
- Ny `searchUsersBySkills(skills)` i `api.ts` (POST).
- Skjema der man velger/skriver ferdigheter (chips), og en resultatliste.

**Done:** Du kan søke på én eller flere ferdigheter og se brukere som matcher, med laste-/tom-tilstand.

---

## BE-2: Opprett erfaring (`POST /experiences`)
**Krever:** Oppgave 2 (`GET /experiences` + `ExperienceMapper`) ferdig.
Første skrive-endepunkt — gjør appen interaktiv.

- `POST /experiences` i `ExperienceEndpoints.cs`, ny `ExperienceRequest`-record.
- Validering (påkrevde felt, datoer), returner `201 Created` ved suksess, `400` ved feil.
- `AddExperienceAsync` i `CvService`/`ICvService` (`context.Experiences.Add` + `SaveChanges`).

**Done:** Du kan opprette en erfaring via Scalar-UI; den dukker opp i `GET /experiences`.
**Bruk `/superpowers:test-driven-development`** — perfekt oppgave for det.

---

## Reserve-oppgaver

### Dark mode + fargesystem (FE)
I dag finnes flere konkurrerende blåtoner og ingen dark mode.
- Lag `tokens.css` med CSS-variabler (`--brand`, `--surface`, `--text`, `--muted`, spacing).
- Samle blåtonene til én merkevarefarge: overskrifter `#2563eb` (`index.css`),
  header-gradient `#0087C3`/`#00253E` (`main-header-background.tsx`), kort-bakgrunn
  `#ecf7ff` (`Home.module.css`). Refaktorer hardkodede hex til tokens.
- Legg til `@media (prefers-color-scheme: dark)` + evt. en toggle i headeren.

### Experience-detalj (modal)
**Krever:** Erfaringer-siden rendrer kort (Oppgave 2/3).
- Gjør `ExperienceCard` klikkbar → åpner dialog med full beskrivelse/rolle/datoer.
- Ingen ny fetch nødvendig (dataen ligger på kortet). Lokal UI-state.

### Slå på API-key-auth (BE + FE)
- Sett `AppSettings:FrontendApiKey` i user-secrets **først** — uten den krasjer backend ved
  oppstart når middleware skrus på.
- Avkommenter `ApiKeyMiddleware` i `Program.cs`. Dokumenter 401-kontrakten.
- Send samme nøkkel som header `X-Frontend-Api-Key` fra `api.ts` — ellers får din egen
  frontend 401. (Lokalt snakker din frontend kun med din egen backend.)

### `type` → enum (BE)
**Krever:** Oppgave 2/3 (erfaringer rendres) for å se effekten.
- Gjør `experience.type` (fritekst) om til en C#-enum med EF value-conversion.
- Oppdater seed + lag migrering. Lær hele schema-endrings-løpet.

### Klient-søk + delbar filter-URL (FE)
**Krever:** Erfaringer-siden med type-filter (Oppgave 3/5).
- Fritekstsøk på tittel + lagre valgt type-filter i URL-en via `useSearchParams`
  (overlever refresh / kan deles).
