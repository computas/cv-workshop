# CLAUDE.md — CV-prosjekt (AI-workshop)

Instrukser for Claude Code når du jobber i dette prosjektet. Følg dem.

## Hva dette er
Din egen CV-app: frontend (React) + backend (.NET) + Postgres. Du har bygget
grunnlaget tidligere i uka (oppgave 1–6). Nå skal du utvide den med **nye
features** ved hjelp av AI.

## Stack
- **Frontend** (`frontend/`): React 19 + TypeScript, Vite 6, react-router-dom 7,
  TanStack React Query 5. UI fra **Computas designsystem** (`@computas/designsystem`):
  `cx-*`-klasser, `Cx*`-komponenter, CSS-variabler (`--cx-spacing-*`, `--cx-color-*`).
  Styling = CSS-moduler per komponent (`*.module.css`) + global `index.css`.
- **Backend** (`backend/`): ASP.NET Core Minimal API på **.NET 10**, C# records.
  EF Core 10 + Npgsql mot PostgreSQL (Supabase). API-dok via Scalar.
- Ingen tester i repoet (ennå).

## Kjøre lokalt
**Backend** — må kjøre på port **5007** (frontend forventer det):
```
cd backend
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "<din-supabase-connection-string>"
dotnet run
```
Migreringer kjøres automatisk ved oppstart. API-dok (Scalar): http://localhost:5007/scalar

**Frontend** — port 5173:
```
cd frontend
npm install
npm run dev
```

## Kommandoer
- Frontend: `npm run dev` (kjør) · `npm run build` · `npm run lint`
- Backend: `dotnet run` (kjør) · `dotnet build`
- Migrering: `dotnet ef migrations add <Navn>` (kjøres automatisk ved oppstart;
  `database update` trengs ikke lokalt).

## Viktige fallgruver (les før du koder)
- **`frontend/src/api.ts` hardkoder** `http://localhost:5007` og ignorerer
  `VITE_BACKEND_API_URL` fra `.env`. Endre i `api.ts` hvis backend kjører et annet sted.
- **API-key er skrudd av**: `ApiKeyMiddleware` er kommentert ut i `backend/Program.cs`.
  API-et er åpent lokalt. Skrur du på auth, må `api.ts` sende header `X-Frontend-Api-Key`.
- **Stub-endepunkt returnerer `200` med tom body** (ikke feil). Sjekk responskroppen,
  ikke bare statuskoden, når du verifiserer.
- **Seed-data:** alle erfaringer tilhører bruker #1 (`11111111-…-111111111111`).
  Bruker #2 og #3 har null erfaringer — det er ikke en bug.
- **EF-snapshot** står på 9.0.5 mens pakkene er 10.x. Første nye migrering gir en
  stor/støyende diff — det er normalt.
- `backend/backend.http` er utdatert (peker på `/weatherforecast` som ikke finnes).
  Bruk Scalar-UI for å teste endepunkt.
- `frontend/src/components/loader.tsx` er en tom fil (0 bytes).

## Konvensjoner
- **Frontend:** én CSS-modul per komponent. Gjenbruk designsystem-tokens og
  `cx-*`-klasser fremfor hardkodede hex/px. Nye ikoner må registreres i
  `frontend/src/main.tsx` via `addIcons(...)`, ellers vises de ikke. Brukervendt
  tekst på **norsk**.
- **Backend:** endepunkt → `ICvService`/`CvService` → `AppDbContext`. Returner
  alltid **DTO-er** (ikke EF-entiteter) via mappers i `backend/Data/Mappers/`.
  Bruk records + primary constructors som resten av koden.
- Hold endringer små. Les eksisterende mønster i nabo-filer før du skriver.

## Ikke gjør
- Aldri commit hemmeligheter — connection string ligger i `dotnet user-secrets`, ikke i `appsettings.json`.
- Ikke rediger eksisterende migreringer for hånd — lag en ny.
- Ikke returner EF-entiteter direkte fra endepunkt — bruk DTO.
- Ikke hardkod farger/px når designsystem-tokens finnes.

## Arbeidsflyt med Claude Code (bruk skills!)
1. **`brainstorming`** før du begynner — avklar hva du faktisk skal bygge.
2. **`writing-plans`** — lag en plan før du rører kode.
3. **`test-driven-development`** der det gir mening (særlig backend-logikk).
4. **`frontend-design`** + design-skills (`critique`, `colorize`, `polish`) for UI.
5. **`systematic-debugging`** når noe ikke virker — ikke gjett.
6. **`verification-before-completion`** før du sier deg ferdig — kjør appen, se at det funker.
7. **`requesting-code-review`** til slutt.

## Oppgaver
Se `docs/workshop/`:
- `oppgave-om-meg.md` — **flaggskip** (alle gjør denne først)
- `stretch-oppgaver.md` — videre når flaggskip er i mål
- `claude-md-guide.md` — slik skriver du en god CLAUDE.md (ta med til andre prosjekter)
