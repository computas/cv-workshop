# Fasilitator-plan: AI-workshop (CV-prosjekt)

For deg som holder workshopen. Studentene bygger videre på sitt eget CV-prosjekt med
Claude Code + skills. Designerne kjører et parallelt spor med claude.ai/design.

## Mål
- Studentene opplever hele AI-loopen: `brainstorming → writing-plans → implementere → verifisere`.
- Alle leverer en synlig ny feature (flaggskip: "Om meg"-siden), med stretch for de raske.
- Designerne lager et redesign og presenterer.

## Før workshopen (sjekkliste)
- [ ] Studentene har sitt CV-prosjekt på ~fasit-nivå og får det til å kjøre lokalt
      (backend på 5007, frontend på 5173). Ikke ferdig fra uka? Fallback:
      `git checkout fasit -- backend/ frontend/`.
- [ ] `dotnet --version` er 10.x og `dotnet-ef` er 10.x (`dotnet tool update -g dotnet-ef`).
- [ ] Claude Code installert og innlogget. Plugins installert: `superpowers` +
      `frontend-design` (se `../workshop/skills-cheatsheet.md`). Verifiser med `/plugin list`.
- [ ] Hver student har lagt `CLAUDE.md` + `docs/workshop/` inn i sitt eget prosjekt.
- [ ] Supabase connection string satt via `dotnet user-secrets` (backend kjører).
- [ ] `npm install` kjørt i frontend.
- [ ] Designerne: send dem appen som mappe fra branchen `workshop/designer` (ferdig stylet
      app) + `../workshop/designer-brief.md`. De laster mappen opp i claude.ai/design — ingen koding.

## Tidsplan (~90 min)
| Tid | Bolk | Innhold |
|-----|------|---------|
| 0–10 | Intro | Hva er skills, hvordan invoke. Vis ett kjapt eksempel live (`/superpowers:brainstorming`). |
| 10–20 | Oppsett | Verifiser plugins (`/plugin list`), at appen kjører på fasit-nivå, og at `CLAUDE.md`/briefer er på plass. |
| 20–65 | **Flaggskip** | Alle bygger "Om meg"-siden (`../workshop/oppgave-om-meg.md`). Du sirkulerer. |
| 65–80 | **Stretch** | De raske velger fra `../workshop/stretch-oppgaver.md`. |
| 80–90 | Show & tell | 2–3 utviklere + designerne viser hva de fikk til. |

Juster fritt — kjernen er flaggskip + show & tell.

## Fasiliterings-tips
- Push dem til å **bruke skills**, ikke bare prompte fritt. Spør "har du kjørt
  brainstorming/writing-plans?" når noen står fast.
- Oppmuntre til å la AI lese eksisterende kode først (mønster i nabo-filer).
- "Done" først, så stretch — unngå at noen bygger seg fast i scope-creep.
- Be dem verifisere ved å **kjøre appen**, ikke stole på at AI sier det funker.

## Vanlige feil → fiks
| Symptom | Årsak | Fiks |
|---------|-------|------|
| Frontend får ikke kontakt med backend | api.ts hardkoder `localhost:5007` | Start backend på 5007, eller endre `api.ts`. |
| Tom Erfaringer-side / manglende endepunkt | Uke-oppgaver ikke fullført (stubs) | `git checkout fasit -- backend/ frontend/`. |
| Backend krasjer ved oppstart etter auth-på | `AppSettings:FrontendApiKey` mangler | Sett nøkkelen i user-secrets før middleware skrus på. |
| 401 fra egen backend | Auth på, men `api.ts` sender ikke header | Send `X-Frontend-Api-Key` med samme nøkkel, eller hold auth av. |
| Tom liste for bruker #2/#3 | Seed: alle erfaringer ligger på bruker #1 | Test mot bruker #1. Ikke en bug. |
| Ødelagt profilbilde | Seed-`imageUrl` peker på `example.com/alice.jpg` | Bruk `onError`/placeholder. Ikke en bug. |
| Stor/rar diff ved ny migrering | EF-snapshot er 9.0.5, pakker 10.x | Forventet. La migreringen regenerere snapshot. |
| Nytt ikon vises ikke | Ikke registrert i `main.tsx` | Legg til i `addIcons(...)`. |
| Backend starter ikke | Mangler connection string | `dotnet user-secrets set "ConnectionStrings:DefaultConnection" "…"`. |

## Designer-sporet (parallelt)
Se `../workshop/designer-brief.md`. Send designerne appen som mappe fra `workshop/designer`
(ferdig stylet versjon, basert på `fasitV2`). De laster den opp i claude.ai/design, redesigner
forsiden/"Om meg" + fargesystem, og presenterer i show & tell. Hvis tid: koble fargesystemet
deres til en utvikler som tar "Dark mode + fargesystem"-stretchen.

## Ta med videre
Tips studentene om `../workshop/claude-md-guide.md` — en kort, overførbar guide til å skrive
god `CLAUDE.md` på egne prosjekter senere. Fin å nevne i intro eller avslutning.

## Merk
- `feat/deploy`-branchen har Terraform-feil (bl.a. `secret_name`→`value` og typo
  `fontend-api-key`) — ikke bruk som referanse.
- `fasit` og `fasitV2` er løsnings-brancher; funksjonelt like (forskjell: data-fetching-stil
  + om NotFound beholdes). `workshop/designer` er basert på `fasitV2`.
