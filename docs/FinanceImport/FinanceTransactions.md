# Finance Tranmsactions Import

To find the Finance Transactions who is imported search for **Finance Transactions List**

![Finance Transaction List](../media/Finance-transaction-list.png)

## Fields

This table is filled with the API and if needed the data can be corrected in this import view.

**Entry No.** - Auto incremented unique vale used as identification.
**Posting Date** - Date this record should be posted on.
**Account No** - A G/L account number. this is validated before it is imported to journal.
**Product** - The product information not totally sure how this will be treated.
**Amount*** - The amount on this transaction.
**Currency Code** - Currency of the transaction can use both blank and local currency.
**Description** - The description of the transaction - not sure how to handle yet.
**Status** - The status of the transaction. values New|Ready|Imported|Error. Status imported is moved to archive.

## Menu

There are two buttons in the menu that is promoted. **Import Transactions** and **Archived Transactions**.

**Import Transactions** - this will import the transactions that have status New. and revalidate lines with status Error then
                            Import the transaction to the Journal is this successful then it is moved to Archived transactions.
**Archived Transactions** - This open the transaction archive with the successfully imported transactions.
**View** - This open one record to show all information for one record in a card page.
