# Fasilitator-plan: AI-workshop (CV-prosjekt)

For deg som holder workshopen. Studentene bygger videre på sitt eget CV-prosjekt med
Claude Code + skills. Designerne kjører et parallelt spor med claude.ai/design.

## Mål
- Studentene opplever hele AI-loopen: `brainstorming → writing-plans → implementere → verifisere`.
- Alle leverer en synlig ny feature (flaggskip: "Om meg"-siden), med stretch for de raske.
- Designerne lager et redesign og presenterer.

## Før workshopen (sjekkliste)
- [ ] Studentene har sitt CV-prosjekt på ~fasit-nivå og får det til å kjøre lokalt
      (backend på 5007, frontend på 5173).
- [ ] Claude Code installert og innlogget. Plugins installert: `superpowers` + `frontend-design` (se `skills-cheatsheet.md`). Del evt. design-polish-skills (`critique`/`polish` o.l.) med studentene hvis du vil bruke dem.
- [ ] Hver student har lagt `CLAUDE.md` + `docs/workshop/` inn i sitt eget prosjekt.
- [ ] Supabase connection string satt via `dotnet user-secrets` (backend kjører).
- [ ] `npm install` kjørt i frontend.
- [ ] Designerne har tilgang til claude.ai/design og skjermbilder av dagens UI.

## Tidsplan (~90 min)
| Tid | Bolk | Innhold |
|-----|------|---------|
| 0–10 | Intro | Hva er skills, hvordan invoke. Vis ett kjapt eksempel live (f.eks. `brainstorming`). |
| 10–15 | Oppsett | Sjekk at alle kjører appen + har lagt inn `CLAUDE.md`/briefer. |
| 15–60 | **Flaggskip** | Alle bygger "Om meg"-siden (`oppgave-om-meg.md`). Du sirkulerer. |
| 60–80 | **Stretch** | De raske velger fra `stretch-oppgaver.md`. |
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
| 401 fra backend | Noen skrudde på `ApiKeyMiddleware` | Hold auth av, eller send `X-Frontend-Api-Key` fra `api.ts`. |
| Endepunkt "funker" men gir tom respons | Stub returnerer `200` + tom body | Sjekk responskroppen; implementer service-metoden. |
| Tom liste for bruker #2/#3 | Seed: alle erfaringer ligger på bruker #1 | Test mot bruker #1. Ikke en bug. |
| Stor/rar diff ved ny migrering | EF-snapshot er 9.0.5, pakker 10.x | Forventet. La migreringen regenerere snapshot. |
| Nytt ikon vises ikke | Ikke registrert i `main.tsx` | Legg til i `addIcons(...)`. |
| Backend starter ikke | Mangler connection string | `dotnet user-secrets set "ConnectionStrings:DefaultConnection" "…"`. |

## Designer-sporet (parallelt)
Se `designer-brief.md`. La dem jobbe selvstendig i claude.ai/design og presentere
i show & tell. Hvis tid: koble fargesystemet deres til en utvikler som tar
"Dark mode + fargesystem"-stretchen.

## Ta med videre
Tips studentene om `docs/workshop/claude-md-guide.md` — en kort, overførbar guide til
å skrive god `CLAUDE.md` på egne prosjekter senere. Fin å nevne i intro eller avslutning.

## Merk
- `feat/deploy`-branchen har **bevisst seedede bugs** i Terraform — ikke bruk som referanse.
- `fasit` og `fasitV2` er løsnings-brancher; de er funksjonelt like (forskjell:
  data-fetching-stil + om NotFound beholdes).
