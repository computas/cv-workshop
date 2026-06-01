# Forutsetninger

### Nødvendige verktøy

#### Windows

- Installer [Windows Subsystem for Linux](https://docs.docker.com/desktop/features/wsl).

- Installer [Git](https://git-scm.com/downloads) og [Terraform](https://developer.hashicorp.com/terraform/install) i WSL.

#### macOS

- Installer [Terraform](https://developer.hashicorp.com/terraform/install).

### Fork repoet

Fork dette repoet til din egen GitHub-konto (samme hvilken).
Eventuelt opprett en GitHub-konto hvis du ikke har en fra før.

### Lag en UpCloud-konto

Registrer deg for en gratis UpCloud-konto [her](https://signup.upcloud.com).

### Autentiser deg mot UpCloud via Terraform

Legg inn brukernavn/passord til UpCloud kontoen din i en fil som heter `terraform.tfvars` i `infrastructure`-mappen, med følgende innhold:

```hcl
upcloud_username = "ditt brukernavn her"
upcloud_password = "ditt passord her"
```

# Del 1: UpCloud og Terraform

Når man setter opp skyinfrastruktur er det sterkt anbefalt å bruke et verktøy som Terraform for å
definere infrastrukturen som kode. Dette gjør det enklere å versjonskontrollere og gjenbruke konfigurasjonen.
Hvis vi istedenfor bruker nettsiden til UpCloud til å sette opp infrastruktur, kan det fort bli vanskelig å holde oversikt over hva som er satt opp og hvordan.
Dette kalles "Click-Ops", og er dårlig praksis i alt annet enn små eller uviktige prosjekter.

## 🔨 Oppgave 1.1

💡 _TIPS:_

<details>
  <summary>✨ Se fasit</summary>

</details>

## 🔨 Oppgave 1.2

<details>
  <summary>✨ Se fasit</summary>

</details>

# Del 2: GitHub Actions

GitHub Actions er et verktøy for å automatisere arbeidsflyter i GitHub.

## 🔨 Oppgave 2.1

## 🔨 Oppgave 2.2

## 🔨 Oppgave 2.3

# Videre
