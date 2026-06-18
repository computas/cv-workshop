# Skills & plugins — jukselapp

**Skills** = gjenbrukbare instrukser Claude laster inn for en bestemt oppgave
(planlegging, design, debugging, testing). **Plugins** = pakker med skills.
`superpowers` er en slik plugin.

## Installer (én gang)
Den offisielle markedsplassen `claude-plugins-official` er allerede registrert, så
du installerer rett fra den:
```
/plugin install superpowers@claude-plugins-official
/plugin install frontend-design@claude-plugins-official
```
Nyttig ellers: `/plugin` (interaktiv meny), `/plugin list`, `/reload-plugins`.

## Slik trigger du en skill
- **Automatisk:** beskriv oppgaven naturlig — Claude laster relevant skill selv.
- **Manuelt:** skriv `/plugin-navn:skill-navn`, f.eks. `/superpowers:brainstorming`.

## Hvilken skill når (i dag)
| Når | Skill |
|-----|-------|
| Før du bygger noe — avklar hva | `/superpowers:brainstorming` |
| Lag en plan før kode | `/superpowers:writing-plans` |
| Skriv test først (backend-logikk) | `/superpowers:test-driven-development` |
| Noe funker ikke — feilsøk metodisk | `/superpowers:systematic-debugging` |
| Bygg/poler UI | `/frontend-design:frontend-design` |
| Før du sier deg ferdig | `/superpowers:verification-before-completion` |
| Be om kodegjennomgang | `/superpowers:requesting-code-review` |

## Design-skills (kun hvis installert)
Skills som `critique`, `colorize`, `polish`, `audit` gir UI-tilbakemelding og
forbedring. De er **ikke** del av de to pluginene over — de kan være forhåndsinstallert
i workshop-oppsettet. Finner du ikke `/critique`, spør fasilitator (eller hopp over dem
og bruk `frontend-design`).

## Hvor skills bor
- **Personlig:** `~/.claude/skills/` — følger deg på tvers av alle prosjekter.
- **Prosjekt:** `.claude/skills/` — deles via repoet (commites med koden).
- **Plugin:** kommer fra installerte plugins, namespacet `/plugin:skill`.
