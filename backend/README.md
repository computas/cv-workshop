# Sett opp backend

### Oppsett av ConnectionString
1. Gå til Supabase-prosjektet ditt.
1. Klikk på **Connect** i menyen øverst på siden.
1. Velg **Type:** .NET
1. Bla ned til Session Poolers
1. Kopier det som står etter `"DefaultConnection":` (Skal ligne på dette `"User Id=postgres.vnaxvalknkajavkdnlskn;Password=[YOUR-PASSWORD];Server=aws-0-eu-north-1.pooler.supabase.com;Port=5432;Database=postgres"`)
1. Lim det inn i en teksteditor (Notepad eller TextEdit eller noe annet enkelt).
1. Bytt ut `[YOUR-PASSWORD]` (Husk å fjerne klammeparanteser) med databasepassordet du valgte i oppsettet av Supabase
1. I Terminalen, sørg for at du er i `cv-workshop\backend`
1. Kjør `dotnet user-secrets set "ConnectionStrings:DefaultConnection" "<Connection String fra Supabase>"`
   - Bytt ut `<Connection String fra Supabase>` med strengen du nå har satt sammen i teksteditoren din.
1. For å finne denne koden senere, kjør `dotnet user-secrets list`.

### Opprette API-nøkkel:
1. Lag en unik kode ved å kjøre kommandoen i terminalen din (Det spiller ingen rolle hvilken directory du er i):
   - Mac: `uuidgen`
   - Windows: `[guid]::NewGuid()`
1. Kopier koden og kjør `dotnet user-secrets set "AppSettings:FrontendApiKey" "<din unike kode>"`
1. For å finne denne koden senere, kjør `dotnet user-secrets list`.
1. Kjør `dotnet run`
Nå kjører backenden på port 5007.
1. Gå til `http://localhost:5007/` i nettleseren din, og sørg for at Swagger dukker opp.
1. Til senere: Når frontenden er satt opp og kjører, sørg for at AllowedCorsOrigins i appsettings.json inneholder de url-ene som skal få lov til å hente data fra backenden, samt porten der frontenden kjører lokalt (Dette skal være http://localhost:5173)

# Kontekst for backend
Vi ønsker å lage endepunkt og en tjeneste som gjør det lett å hente ut brukere (Users) og erfaringer (Experiences). Dette skal frontenden koble se på og visualisere. Poenget med denne seansen er å kunne gjøre det klart for frontenden, til å hekte seg på å konsumere endepunktene vi skriver. 

# Oppgaver
Her følger oppgavene til backenddelen av innfasingsuka. Dersom du står fast så kan du be en av veilederne om hjelp, evt. så er det opprettet en branch _fasit_ som inneholder fasiten på alle oppgavene. Prøv deg frem først, før du kikker på fasiten ;)

Merk at selv om oppgavene nevner en liste med punkter så kan det være behov for å gå litt frem og tilbake mellom kulepunktene for å fullføre oppgavene. 

## Oppgave 1
_Aktuelle filer: UserEndpoints.cs, ICVService.cs, CVService.cs_

Du har fått utdelt et endepunkt som henter alle brukere i Users-tabellen i databasen vår. Skriv et nytt endepunkt som henter ut _én_ spesifikk bruker, gitt en ID. Bruk GetAllUsers som inspirasjon, i routeren, samt servicen.

Utfør følgende oppgaver: 
1. Legg til et GET-endepunkt i UserEndpoints.cs. Ta inn id-en (type: GUID) som en Route parameter. 

   _HINT_ 💡: Sjekk [dokumentasjonen](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis?view=aspnetcore-9.0#routing) til Minimal API. 

Du vil etter hvert se behovet for å utvide CVService, du kan dermed gå til oppgave 2 før du fullfører 1 senere. 
2. Utvid CVService med en ny metode _GetUserByIdAsync_. Husk å oppdatere interfacet også. 

   _HINT_ 💡: metoden FindAsync() kan ta inn en id og finne et 
4. Dersom ingen bruker finnes med gitt id, returner en 404 Not Found med en beskrivende feilmelding. 
5. Test endepunktet i Swagger og sjekk at du får forventet respons - både med en eksisterende id og en ikke-eksisterende. 

## Oppgave 2
_Aktuelle filer: ExperienceEndpoints.cs, CVService.cs_

Opprett to endepunkt i ExperienceEndpoints; et for å hente alle Experiences, samt et for å hente ut en gitt Experience basert på id. Endepunktene kommer til å ligne en del på de du har skrevet tidligere i oppbyggingen. Men, du skal nå også skrive en mapper for Experiences der du mapper databasemodellen til en DTO. Hvorfor DTO-er? Sjekk denne [artikkelen](https://konstantinmb.medium.com/dtos-101-the-what-why-and-how-of-data-transfer-objects-304a03a71a2c)

1. Opprett en fil, ExperienceMapper i mappen Mappers. Denne skal bestå av en statisk klasse med en statisk metode _ToDto_ som returnerer en ExperienceDto.
2. Fullfør metodene _GetAllExperiencesAsync_ og _GetExperienceByIdAsync_ i CVService. 
3. Fullfør de to TODO-ene i ExperienceEndpoints.
4. Test endepunktene i Swagger og sjekk at metodene returner en ikke-tom liste med Experiences. 

## Oppgave 3
_Aktuelle filer: ExperienceEndpoints.cs, CVService.cs_

Fullfør endepunktet GetExperienceByType. Her tar vi inn en type erfaring (eks. work, education) og returnerer alle Experiences som er av denne typen. 
1. Skriv ferdig endepunktet i ExperiencesEndpoints.
2. Opprett en ny metode i CVService.cs

_Bonusoppgave for de ivrige_: Klarer du å omskrive _type_ fra å være en streng til en enum? Hvorfor er dette ønskelig? 

## Oppgave 4 (mer vrien)
_Aktuelle filer: UserEndpoints.cs, ICVService.cs, CVService.cs, UserDto.cs_

Som konsulenter er ferdigheter (eng: skills) og hvilkef teknologier man har vært borti, ganske relevant. Det er ikke utenkelig at en selger ønsker å sjekke i en CV-database for å finne alle CV-er som matcher en liste med teknologier som en kunde ønsker. Dette skal vi nå modellere. Merk at skills-feltet på en User er én streng som inneholder ulike teknologier skilt med semikolon (;). 

Utfør følgende oppgaver:

1. Opprett et endepunkt kalt GetUsersWithDesiredSkills. Dette er en POST-request som tar inn en SkillRequest (typen er opprettet for deg allerede).
2. Opprett en metode i CVService _GetUsersWithDesiredSkills_ som tar inn en IEnumerable<string> _desiredTechnologies_. Denne metoden skal utføre følgende:
    1. Hente alle brukere
    2. Gå gjennom alle brukere, parsere ferdighetene deres til en liste med Skills, og sjekke om en av ferdighetene finnes i lista som er sendt som argument.
    3. Returnere de filtrerte brukerne som har _minst_ en ønsket ferdighet.
    
    _HINT_: Bruk LINQ-uttrykk for å prosessere lista.

     For de spesielt interesserte: [artikkel om funksjonell programmering i C#](https://www.milanjovanovic.tech/blog/functional-programming-in-csharp-the-practical-parts), + [enda en artikkel](https://matrixtrak.com/an-introduction-to-functional-programming-with-c-a-dive-into-the-paradigm-shift/). 
4. _Bonusoppgave som kan og bør gjøres før steg 2_: Hva med testing? Hvordan vet vi at strengen parseres korrekt? Skriv enhetstester for _ParseUserSkills_. Eksempelvis skal input
   ``` "React;Kotlin;CSS;" ``` gi følgende output
   ```c#
   [Skill(Technology: "React"), Skill(Technology: "Kotlin"), Skill(Technology: "CSS")] // type: IEnumerable<Skill>
   ```

   Dette er en fin mulighet for å teste ut TDD (test-driven development) også. Spør gjerne en av veilederne for en lynintro, evt. sjekk dette [blogginnlegget](https://martinfowler.com/bliki/TestDrivenDevelopment.html) fra Martin Fowler for en kort introduksjon! TL;DR: test før implementasjon, sørg for at testen feiler, implementer metoden, testen består, refaktorer.

## Bonusoppgave: Oppgave 5

Du har kanskje sett at Experience inneholder en User-ID som kan benyttes til å koble opp en gitt bruker med et sett av erfaringer. Denne koblingen finnes ikke ennå, og det er din jobb å opprette denne. Denne oppgaven er mer åpen, og du står fritt frem til å velge tilnærming, basert på tidligere oppgaver. Det står derfor ingen TODO-s i koden som ber deg gjøre noe. Dette er en fin oppgave som kan egne seg til å prøve TDD. 

_HINT_: Her er et forslag til fremgangsmåte: 
1. Utvid UserEndpoints med et nytt GET-endepunkt på pathen "/users/{id}/experiences"
2. Utvid CV-service med en metode som enten henter riktig bruker og alle erfaringer, og mapper disse riktig mellom seg. Her er du nok nødt til å utvide UserDto-en samt oppdatere UserMapperen for å sørge for at erfaringene blir med.
3. Test i Swagger eller ved å utføre TDD.

## Mer bonus: Oppgave 6

Basert på innsikten fra designfasen ble det avdekket at hvilket _år_ man går er ganske viktig for en rekrutterer. Gitt dette, ønsker vi å utvide User-modellen vår med en enum-type _YearOfStudies_ som avgrenser tallverdier fra 1-9 (eks: 1 => førsteåret på bachelor, 4 => førsteåret master, osv...). Din oppgave er: 

1. Utvid User-modellen
2. Oppdatere mappere og UserDTO slik at yearOfStudies følger med hele veien
3. Oppdatere typen i frontend dersom dere har kommet så langt

MERK: du er nødt til å migrere databasen ettersom vi endrer modellen som benyttes i tabellen. Derfor må testdataen i _SeedData.cs_ oppdateres med et nytt felt. I tillegg må du kjøre en ny kommando for å migrere databasen. Se om du klarer å finne kommandoen selv. 

_HINT_: 

<details>
<summary>Se hint</summary>
   
```
dotnet ef migrations add <NAVN_PÅ_MIGRRASJON>
```
</details>

