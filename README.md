# CV-Workshop

## Før du begyner

1. Last ned .net 10.0 SDK fra [hjemmesiden](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)
2. Last ned npm fra [hjemmesiden](https://nodejs.org/en/download/)
3. Last ned [Docker Desktop](https://www.docker.com/products/docker-desktop/) (brukes til å kjøre databasen lokalt)

## Oppsett av lokal database

Vi kjører PostgreSQL lokalt via Docker Compose. Det er ikke noe oppsett utover å starte tjenesten.

Fra rotmappen i prosjektet:

```bash
docker compose up -d database
```

Sjekk at den er oppe og kjører (`STATUS` skal være `healthy`):

```bash
docker compose ps
```

Databasen kjører nå på `localhost:5432` med følgende verdier:

- **User:** `postgres`
- **Password:** `postgres`
- **Database:** `postgres`

Disse verdiene brukes videre i [backend-oppsettet](./backend/README.md).

## Backendoppgaver og oppsett

Se [README.md](https://github.com/cxberk/cv-workshop/blob/main/backend/README.md) filen i /backend

## Frontendoppgaver

Se [README.md](https://github.com/cxberk/cv-workshop/blob/main/frontend/README.md) filen i /frontend

## Infrastruktur

[README.md](https://github.com/computas/cv-workshop/tree/main/infrastructure)
