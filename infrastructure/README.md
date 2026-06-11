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

For å kunne bruke Terraform mot UpCloud, må vi først autentisere oss mot deres API.
I Terraform gjør vi dette via `variables`.

Ta en titt i filen `variables.tf` og se hvilke variabler som er definert der.
Lag deretter en fil som heter `terraform.tfvars` og legg inn verdiene som trengs.

Formatet er slik:

```hcl
my_variable       = "my_value"
my_other_variable = "my_other_value"
```

<details>
  <summary>✨ Se fasit</summary>

```hcl
upcloud_username = "ditt brukernavn her"
upcloud_password = "ditt passord her"
name             = "olanordmann"
```

</details>

## 🔨 Oppgave 1.2

Nå kan vi bruke Terraform til å sette opp serveren vår.

Kjør kommandoen `terraform init` for å initialisere Terraform i dette prosjektet.
Deretter kan du kjøre `terraform plan` for å se hva Terraform har tenkt å gjøre.

<details>
  <summary>✨ Se fasit</summary>

```bash
terraform init
```

```bash
terraform plan
```

</details>

## 🔨 Oppgave 1.3

Nå kan vi faktisk gjøre det Terraform har planlagt.
Kjør kommandoen `terraform apply` for å sette opp serveren din på UpCloud.

<details>
  <summary>✨ Se fasit</summary>

```bash
terraform apply
```

</details>

# Del 2: GitHub Actions

GitHub Actions er et verktøy for å automatisere arbeidsflyter i GitHub.

## 🔨 Oppgave 2.1

For å faktisk deploye applikasjonen vår, må vi først bygge den.
Docker image som blir referert til i Terraform er et utdatert eksempel, og vi vil bygge vårt eget image.

Ta en titt på `.github/workflows/build.yaml` og endre den til å trigger på push til `main`.
Push så en commit til `main` (i din egen fork), og se at workflowen kjører.

<details>
  <summary>✨ Se fasit</summary>

```yaml
on:
  push:
    branches:
      - main
```

</details>

## 🔨 Oppgave 2.2

Nå som image bygger, vil vi endre Terraform til å bruke dette imaget.

Endre `FRONTEND_IMAGE` og `BACKEND_IMAGE` i `main.tf` til å referere til ditt eget image på GitHub Container Registry.

💡 _TIPS:_ Du kan se images publisert i ditt repo under https://github.com/<ditt-brukernavn-her>?tab=packages&repo_name=cv-workshop

<details>
  <summary>✨ Se fasit</summary>

```hcl
  env_content     = <<-EOF
    CADDY_HOST='${local.hostname}'
    DB_PASSWORD='${random_password.db-password.result}'
    FRONTEND_IMAGE='ghcr.io/<ditt-brukernavn-her>/cv-workshop/frontend:latest'
    BACKEND_IMAGE='ghcr.io/<ditt-brukernavn-her>/cv-workshop/backend:latest'
  EOF
```

</details>

# Videre
