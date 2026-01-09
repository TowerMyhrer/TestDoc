# Vendor Ledger Entries API

## Overview

Api to retrieve Vendor Ledger Entries

## API Details

- **API Group**: aprilabank
- **API Publisher**: bdo
- **API Version**: v2.0
- **Entity Name**: vendorLedgerEntry
- **Entity Set Name**: vendorLedgerEntries
- **Page Type**: API
- **Source Table**: "Vendor Ledger Entry"
- **OData Key Fields**: SystemId


| Field Name             | Source Field           | Caption                |
|------------------------|------------------------|------------------------|
| id                     | SystemId               | Id                     |
| postingDate            | "Posting Date"         | Posting Date           |
| documentNo             | "Document No."         | Document No.           |
| externalDocumentNo     | "External Document No." | External Document No.  |
| vendorNo               | "Vendor No."           | Vendor No.             |
| vendorName             | "Vendor Name"          | Vendor Name            |
| description            | Description            | Description            |
| purchaserCode          | "Purchaser Code"       | Purchaser Code         |
| globalDimension1Code   | "Global Dimension 1 Code" | Global Dimension 1 Code|
| globalDimension2Code   | "Global Dimension 2 Code" | Global Dimension 2 Code|
| currencyCode           | "Currency Code"        | Currency Code          |
| amount                 | Amount                 | Amount                 |
| amountLCY              | "Amount (LCY)"           | Amount (LCY)           |
| lastModifiedDateTime   | SystemModifiedAt       | Last Modified Date     |

> **Important Note**
> The vendor ledger entry is a read only table so it only allows GET calls.

## Example Response for GET Request

### Request

<https://api.businesscentral.dynamics.com/v2.0/{{Enviroment}}/api/bdo/aprilabank/v2.0/companies({{Company}})/vendorLedgerEntries>

### Response

```json
        {
            "@odata.etag": "W/\"JzE5OzUzNjE5Nzg3NjcyMjI5NDI2MjMxOzAwOyc=\"",
            "id": "6727abba-7cd0-f011-8bce-7ced8dadf311",
            "postingDate": "2023-01-01",
            "documentNo": "108003",
            "externalDocumentNo": "107003",
            "vendorNo": "50000",
            "vendorName": "Nod Publishers",
            "description": "Faktura 107003",
            "purchaserCode": "",
            "globalDimension1Code": "Department",
            "globalDimension2Code": "Project",
            "currencyCode": "",
            "amount": -3513.75,
            "amountLCY": -3513.75,
            "lastModifiedDateTime": "2025-12-03T19:17:47.25Z"
        }
```
