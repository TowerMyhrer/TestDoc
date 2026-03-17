# Name of API

## Overview

Api for retrieving item information.

## API Details

- **Page Type**: API
- **API Publisher**: tower
- **API Group**: feed
- **API Version**: v1.0
- **Entity Name**: feedItem
- **Entity Set Name**: feedItems
- **Source Table**: Item


| Field Name                | Source Field                          | Datatype
|------------------------   |------------------------               |-------------  |
|id                         | SystemId                              | Guid          |
|itemNumber                 | "No."                                 | Code 10       |
|description                | "Description"                         | Text 100      |
|itemCategoryCode           | "Item Category Code!                  | Code 20       |
|marketingText              | Procedure GetMarketingText            | Text          |
|unitOfMeasure              | "Base Unit Of Measure"                | Code 10       |
|vendor                     | "Vendor No."                          | Code 20       |
|vendorName                 | Vendor.Name                           | Text 100      |
|vendorItemNumber           | "Vendor Item No."                     | Text 50       |
|currencyCode               | "Price List Line"."Currency Code"     | Code 10       |
|costPrice                  | "Price List Line"."Direct Unit Cost"  | Decimal (2)   |
|manufacturerCode           | "Manufacturer Code"                   | Code 10       |
|manufacturerItemNumber     | Procedure                             | Text 50       |
|baseItem                   | "BDN Base Item"                       | Boolean       |
|lastModifiedDateTime       | SystemModifiedAt                       | DateTime      |


## Example Response for GET Request

### Request

<https://api.businesscentral.dynamics.com/v2.0/{{Enviroment}}/api/tower/feed/v1.0/companies({{Company}})/feedItems>

### Response

```json
        {
            "@odata.etag": "W/\"JzE5OzU1NzMyOTY0Njk2NzM4MTY1NjkxOzAwOyc=\"",
            "id": "d15dc89c-7cd0-f011-8bce-7ced8dadf311",
            "itemNumber": "1896-S",
            "description": "ATHENS skrivebord",
            "itemCategoryCode": "PULT",
            "marketingText": "<div>fdofasdjgoiasjigkjaksdfgjka</div>",
            "unitOfMeasure": "STK",
            "vendor": "30000",
            "vendorName": "Vendor Name",
            "vendorItemNumber": "553344222",
            "currencyCode": "EUR",
            "costPrice": "59.00",
            "manufacturerCode": "20000",
            "manufacturerItemNumber": "123321",
            "baseItem": true,
            "lastModifiedDateTime": "2025-12-17T09:17:38.297Z"
        }
```

