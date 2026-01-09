# Detailed Vendor Ledger Entries

## Overview

Api for retrieving detailed general ledger entries

## API Details

- **API Group**: aprilabank
- **API Publisher**: bdo
- **API Version**: v2.0
- **Entity Name**: bdoDetailedVendorLedgerEntry
- **Entity Set Name**: bdoDetailedVendorLedgerEntries
- **Page Type**: API
- **Source Table**: "Detailed Vendor Ledg. Entry"


| Field Name             | Source Field                 | 
|------------------------|------------------------      |
| entryNo                | "Entry No."                  | 
| vendorLedgerEntryNo    | "Vendor Ledger Entry No."    |
| entryType              | "Entry Type"                 |
| postingDate            | "Posting Date"               |
| documentType           | "Document Type"              |
| documentNo             | "Document No."               |
| amount                 | Amount                       |
| amountLCY              | "Amount (LCY                 |
| vendorNo               | "Vendor No."                 |
| currencyCode           | "Currency Code"              |
| userID                 | "User ID"                    |
| sourceCode             | "Source Code"                |
| transactionNo          | "Transaction No."            |
| journalBatchName       | "Journal Batch Name"         |
| reasonCode             | "Reason Code"                |
| debitAmount            | "Debit Amount"               |
| creditAmount           | "Credit Amount"              |
| debitAmountLCY         | "Debit Amount (LCY )         |
| creditAmountLCY        | "Credit Amount (LCY)         |
| initialEntryDueDate    | "Initial Entry Due Date"     |
| initialEntryGlobalDim1 | "Initial Entry Global Dim. 1"| 
| initialEntryGlobalDim2 | "Initial Entry Global Dim. 2"| 
| genBusPostingGroup     | "Gen. Bus. Posting Group"    |
| genProdPostingGroup    | "Gen. Prod. Posting Group"   |
| useTax                 | "Use Tax"                    |
| vatBusPostingGroup     | "VAT Bus. Posting Group"     |
| vatProdPostingGroup    | "VAT Prod. Posting Group"    |
| initialDocumentType    | "Initial Document Type"      |
| appliedVendLedgerEntryNo | "Applied Vend. Ledger Entry No." | 
| unapplied              | Unapplied                    |
| unappliedByEntryNo     | "Unapplied by Entry No."     |
| remainingPmtDiscPossible | "Remaining Pmt. Disc. Possible" | 
| maxPaymentTolerance    | "Max. Payment Tolerance"     |
| taxJurisdictionCode    | "Tax Jurisdiction Code"      |
| applicationNo          | "Application No."            |
| ledgerEntryAmount      | "Ledger Entry Amount"        |
| postingGroup           | "Posting Group"              |
| exchRateAdjmtRegNo     | "Exch. Rate Adjmt. Reg. No." |


## Example Response for GET Request

### Request

<https://api.businesscentral.dynamics.com/v2.0/{{Enviroment}}/api/bdo/aprilabank/v2.0/companies({{Company}})/bdoDetailedVendorLedgerEntries>

### Response

```json
        {
            "@odata.etag": "W/\"JzE5OzM3OTUyODA0OTk4NzA4OTU4MTQxOzAwOyc=\"",
            "entryNo": 74,
            "vendorLedgerEntryNo": 183,
            "entryType": "Initial_x0020_Entry",
            "postingDate": "2023-01-09",
            "documentType": "Payment",
            "documentNo": "108019",
            "amount": 8198.75,
            "amountLCY": 8198.75,
            "vendorNo": "30000",
            "currencyCode": "",
            "userID": "BCBUILD100V8398\\LOCALUSER",
            "sourceCode": "KJØP",
            "transactionNo": 64,
            "journalBatchName": "",
            "reasonCode": "",
            "debitAmount": 8198.75,
            "creditAmount": 0,
            "debitAmountLCY": 8198.75,
            "creditAmountLCY": 0,
            "initialEntryDueDate": "2023-01-09",
            "initialEntryGlobalDim1": "",
            "initialEntryGlobalDim2": "",
            "genBusPostingGroup": "",
            "genProdPostingGroup": "",
            "useTax": false,
            "vatBusPostingGroup": "",
            "vatProdPostingGroup": "",
            "initialDocumentType": "Payment",
            "appliedVendLedgerEntryNo": 0,
            "unapplied": false,
            "unappliedByEntryNo": 0,
            "remainingPmtDiscPossible": 0,
            "maxPaymentTolerance": 0,
            "taxJurisdictionCode": "",
            "applicationNo": 0,
            "ledgerEntryAmount": true,
            "postingGroup": "INNENLANDS",
            "exchRateAdjmtRegNo": 0
        }
```
