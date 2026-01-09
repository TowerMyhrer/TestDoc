# Name of API

## Overview

A brief description here

## API Details

- **API Group**: aprilabank
- **API Publisher**: bdo
- **API Version**: v1.0
- **Entity Name**: financeTransaction
- **Entity Set Name**: financeTransactions
- **Page Type**: API
- **Source Table**: "BDN Financial Transaction Imp"
- **OData Key Fields**: SystemId

| Field Name             | Source Field           | Caption                |
|------------------------|------------------------|------------------------|
| postingDate            | "Posting Date"         | Posting Date           |
| accountNumber          | "Account No."          | Account No.            |
| product                | Product                | Product                |
| amount                 | Amount                 | Amount                 |
| currencyCode           | "Currency Code"        | Currency Code          |
| description            | Description            | Description            |
| id                     | SystemId               | ID                     |
| lastModifiedDateTime   | SystemModifiedAt       | Last Modified At       |

## Example Response for GET Request

### Request

<https://api.businesscentral.dynamics.com/v2.0/{{Enviroment}}/api/bdo/aprilabank/v1.0/companies({{Company}})/financeTransactions>

### Response

```json
{
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0//Ver26No/api/bdo/aprilabank/v1.0/$metadata#companies(a6344dd4-5408-f011-9af6-6045bdc8c1dd)/financeTransactions",
    "value": [
        {
            "@odata.etag": "W/\"JzE5Ozc0MzgyMDI3NTExMDMwMzU2MDIxOzAwOyc=\"",
            "id": "b033a3d1-495e-f011-8eed-002248dd007b",
            "postingDate": "2025-07-10",
            "accountNumber": "2940",
            "product": "Dette er produkt teksten fra postman",
            "amount": 11,
            "currencyCode": "NOK",
            "description": "dett er beskrivelsen fra postman",
            "lastModifiedDateTime": "2025-07-11T11:26:00.153Z"
        }
    ]
}
```

## Example Response for POST Request

### Request

<https://api.businesscentral.dynamics.com/v2.0/{{Enviroment}}/api/bdo/aprilabank/v1.0/companies({{Company}})/financeTransactions>

### Payload

```json
{
    "postingDate": "2025-07-10",
    "accountNumber": "2940",
    "product": "Dette er produkt teksten fra postman",
    "amount": 11,
    "currencyCode": "NOK",
    "description": "dett er beskrivelsen fra postman"
}
```

### Response

```json
{
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0//Ver26No/api/bdo/aprilabank/v1.0/$metadata#companies(a6344dd4-5408-f011-9af6-6045bdc8c1dd)/financeTransactions/$entity",
    "@odata.etag": "W/\"JzE5Ozc0MzgyMDI3NTExMDMwMzU2MDIxOzAwOyc=\"",
    "id": "b033a3d1-495e-f011-8eed-002248dd007b",
    "postingDate": "2025-07-10",
    "accountNumber": "2940",
    "product": "Dette er produkt teksten fra postman",
    "amount": 11,
    "currencyCode": "NOK",
    "description": "dett er beskrivelsen fra postman",
    "lastModifiedDateTime": "2025-07-11T11:26:00.153Z"
}
```
