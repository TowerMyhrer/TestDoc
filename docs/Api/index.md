# General Ledger Entry API

## Overview

Api to retrieve general ledger entries.

## API Details

- **API Group**: aprilabank
- **API Publisher**: bdo
- **API Version**: v1.0
- **Entity Name**: bdoGeneralLedgerEntry
- **Entity Set Name**: bdoGeneralLedgerEntries
- **Page Type**: API
- **Source Table**: "G/L Entry"
- **Extensible**: false
- **OData Key Fields**: SystemId


| Field Name             | Source Field           | Caption                |
|------------------------|------------------------|------------------------|
| id                     | SystemId               | Id                     |
| entryNumber            | "Entry No."            | Entry No.              |
| postingDate            | "Posting Date"         | Posting Date           |
| documentNumber         | "Document No."         | Document No.           |
| documentType           | "Document Type"        | Document Type          |
| accountId              | "Account Id"           | Account Id             |
| accountNumber          | "G/L Account No."      | Account No.            |
| description            | Description            | Description            |
| debitAmount            | "Debit Amount"         | Debit Amount           |
| creditAmount           | "Credit Amount"        | Credit Amount          |
| additionalCurrencyDebitAmount | "Add.-Currency Debit Amount" | Additional Currency Debit Amount|
| additionalCurrencyCreditAmount | "Add.-Currency Credit Amount" | Additional Currency Credit Amount|
| sourceType             | "Source Type"          | Source Type            |
| sourceNo               | "Source No."           | Source No.             |
| sourceId               | Related Table          | Source Id              |
| balanceAccountType     | Bal. Account Type      | Bal. Account Type      |
| balanceAccountNumber   | Bal. Account No.       | Bal. Account No.       |
| externalDocumentNumber | External Document No.  | External Document No.  |
| lastModifiedDateTime   | SystemModifiedAt       | Last Modified Date     |

> **Important Note**
> The vendor ledger entry is a read only table so it only allows GET calls.

## Example Response for GET Request

### Request

<https://api.businesscentral.dynamics.com/v2.0/{{Enviroment}}/api/bdo/aprilabank/v1.0/companies({{Company}})/bdoGeneralLedgerEntries>

### Response

```json
{
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/Ver26No/api/bdo/aprilabank/v1.0/$metadata#companies(a6344dd4-5408-f011-9af6-6045bdc8c1dd)/bdoGeneralLedgerEntries",
    "value": [
                {
            "@odata.etag": "W/\"JzIwOzExNjE2MzkyMTA1OTYyMDA1ODUyMTswMDsn\"",
            "id": "bef2d42c-5508-f011-9af6-6045bdc8c1dd",
            "entryNumber": 2,
            "postingDate": "2025-01-16",
            "documentNumber": "BANK1",
            "documentType": "Payment",
            "accountId": "7290c708-5508-f011-9af6-6045bdc8c1dd",
            "accountNumber": "2920",
            "description": "Overfør, januar 2025",
            "debitAmount": 1780.49,
            "creditAmount": 0,
            "additionalCurrencyDebitAmount": 0,
            "additionalCurrencyCreditAmount": 0,
            "sourceType": "Bank_x0020_Account",
            "sourceNo": "SJEKK",
            "sourceId": "b9b8cb0e-5508-f011-9af6-6045bdc8c1dd",
            "lastModifiedDateTime": "2025-03-24T02:10:44.753Z",
            "balanceAccountType": "Bank_x0020_Account",
            "balanceAccountNumber": "SPAREKONTO",
            "externalDocumentNumber": ""
        },
        {
            "@odata.etag": "W/\"JzIwOzExMTY2MTYyOTM2MTg3NjczMDcwMTswMDsn\"",
            "id": "c4f2d42c-5508-f011-9af6-6045bdc8c1dd",
            "entryNumber": 3,
            "postingDate": "2025-01-16",
            "documentNumber": "BANK2",
            "documentType": "Payment",
            "accountId": "3090c708-5508-f011-9af6-6045bdc8c1dd",
            "accountNumber": "2940",
            "description": "Overføring av midler til våren 2025",
            "debitAmount": 0,
            "creditAmount": 2670.73,
            "additionalCurrencyDebitAmount": 0,
            "additionalCurrencyCreditAmount": 0,
            "sourceType": "Bank_x0020_Account",
            "sourceNo": "SPAREKONTO",
            "sourceId": "bcb8cb0e-5508-f011-9af6-6045bdc8c1dd",
            "lastModifiedDateTime": "2025-03-24T02:10:44.88Z",
            "balanceAccountType": "Bank_x0020_Account",
            "balanceAccountNumber": "SJEKK",
            "externalDocumentNumber": ""
        }
    ]
}
```
