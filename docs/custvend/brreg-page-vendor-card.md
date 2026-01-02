# Leverandørkortet

På leverandørkortet er det 3 større endringer. Samme som for kunde.
Det er lagt til et menypunkt og en ekstra fane og en faktaboks.

## Ny fane BRreg Info

![Brreg info](../media/custvend/brreg-info-cardpart.png)

Her er det hentet ut en del data fra Brønnøysundregisteret.  Dette er bare opplysningsfelter og kan ikke redigeres. Her finner du lett tilgang til hvilke registre enheten er koblet mot og kritiske data som for eksempel avvikling eller konkurs.

## Ny faktaboks BRREG Status

![BStatus Faktaboks](../custvend/media/brreg-status-factbox.png)

Her finner du nøkkelinformasjon om enheten. Bla om den er konkurs og registrert i MVA registeret.

## Nytt menypunkt BRREG

![Nytt menypunkt](../media/custvend/brreg-page-vendor-new-menu.png)

Under dette menypunktet finner du 4 nye menypunkter.

- Roller
- Åpne nettsiden
- Åpne Kunngjøringer
- Opprett underenheter
  
### Roller

Ved åpningen av menypunktet kommer denne siden opp:
![Roller](../media/custvend/brreg-show-roles.png)

Her på siden for roller kan du gå videre til de kontakter som er knyttet til denne enheten.

### Åpne nettsiden

Dette menypunktet er en link som tar deg til brønnøysundregistrene på brreg.no.

Menypunktet åpner siden for organisasjonsnummeret på kundekortet.

### Åpne Kunngjøringer

Dette menypunktet er en link som tar deg til brønnøysundregistrene på brreg.no.

Menypunktet åpner siden med kunngjøringer for  organisasjonsnummeret på kundekortet.

### Opprette Underenheter

Ved åpningen av menypunktet kommer denne siden opp:

Her populeres underenhetene til denne hovedenheten. Det er organisasjonsnummer som er nøkkel.

Her kan du lese mer om å opprette [underenheter](../subunits/index.md).

## Opprette Leverandør fra Leverandørkortet

![Opprette leverandør](../media/custvend/brreg-page-vendor-update-new-vendor.png)

Under fanen Fakturering i feltet Organisasjonsnummer
Legg inn den nye Leverandørens organisasjonsnummer og trykk Drilldown knappen (tre prikker).
Du vil få en melding om du ønsker å importere data fra BRREG.

![Import brreg data](../media/custvend/brreg-page-vendor-import-brregdata-msg.png)

Etter ja vil du få en melding om at kunden er opprettet og du har fått alle relevante data fra BRREG.

![Oppdatert leverandør](../media/custvend/brreg-page-vendor-updated-vendor-msg.png)

## Validering av organisasjonsnummeret

Hvis man trykker på de tre prikkene på feltet organisasjonsnr. så kan man validere organisasjonsnummeret mot
BRreg.no og det sjekkes:

- Organisajsonsnummer
- Adresse
- Postnummer
- Poststed
- Landkode

Les mer her: [Validering organisasjonsnummer](brreg-page-validate-orgno.md)