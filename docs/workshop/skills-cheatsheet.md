# Skills & plugins — jukselapp

**Skills** = gjenbrukbare instrukser Claude laster inn for en bestemt oppgave
(planlegging, design, debugging, testing). **Plugins** = pakker med skills.
`superpowers` er en slik plugin.

## Installer (én gang)
Den offisielle markedsplassen `claude-plugins-official` er som regel allerede registrert.
Installer pluginene:
```
/plugin install superpowers@claude-plugins-official
/plugin install frontend-design@claude-plugins-official
```
Mangler markedsplassen (sjelden)? Åpne `/plugin` → Marketplaces og legg til den offisielle.
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

## Hvor skills bor
- **Personlig:** `~/.claude/skills/` — følger deg på tvers av alle prosjekter.
- **Prosjekt:** `.claude/skills/` — deles via repoet (commites med koden).
- **Plugin:** kommer fra installerte plugins, namespacet `/plugin:skill`.
