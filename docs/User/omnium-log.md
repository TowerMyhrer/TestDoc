# Omnium Log

> An audit trail of every message processed between Business Central and Omnium, used to monitor the integration and investigate and retry errors.

---

## What does this do?

The **Omnium Log** page is your window into everything happening between Business Central and the Omnium platform. Every time the background integration job runs — to retrieve new orders, process deliveries, send purchase orders, or synchronise inventory — it writes an entry to this log.

Each log entry records what type of integration ran, which store it involved, which Business Central document was created or updated, and whether the process succeeded or failed. When something goes wrong — for example, a web shop order could not be created, or a delivery could not be processed — the log entry is marked with an **Error** status, and the details of what went wrong are stored so you can investigate.

Most users will not need to check this page during normal operations. It becomes important when something unexpected happens, such as an order not appearing in Business Central when it should have, or a delivery not generating the expected Transfer Order or Sales Order.

---

## How to use it

### Monitoring the log

1. Use the Business Central search bar and type **Omnium Log**.
2. Select **Omnium Log** from the results. The list opens showing the most recent entries at the top.
3. Review the **Status** column. Entries with **Error** status require attention.
4. Check the **Omnium Integration** column to understand what type of process the entry relates to.
5. Check the **Document No.** column to see which Business Central document (if any) was created or affected.

### Investigating an error

1. On the **Omnium Log** page, select the log entry you want to investigate.
2. Choose the **Log Details** action from the action bar.
3. The **Omnium Log Details** page opens, showing a list of detail records for that log entry — one record for each step of processing (request sent, response received, error encountered, and so on).
4. Select a detail record and choose **View Detail Info** to see the full raw request or response payload. This is useful for diagnosing exactly what was sent to or received from Omnium.

### Reprocessing failed entries

After correcting the cause of an error (for example, adding a missing Customer No. to an Omnium Store), you can ask Business Central to retry:

- To retry a single entry: select it on the **Omnium Log** page and choose **Process Single**. Business Central will attempt to process that entry again immediately.
- To retry all pending and failed entries at once: choose **Process All**. Business Central will work through all entries that have not yet been successfully processed.

> **Tip:** The **Process Single** action will skip any entry that already has **Processed** status, so it is safe to run without worrying about duplicating work.

---

## Fields

| Field | What it means |
|-------|---------------|
| Entry No. | A sequential number assigned to each log entry. The list is sorted with the most recent entries at the top. |
| Omnium Integration | The type of integration process that created this entry — for example, retrieving orders, processing deliveries, or sending purchase orders. |
| Created At | The date and time when this log entry was created by the background job. |
| User Id | The user or service account that triggered this log entry. For background jobs, this will typically be the job queue service account. |
| Status | The current state of this log entry. See the Status values table below. |
| Document No. | The Business Central document number (Sales Order, Purchase Order, Transfer Order, or similar) that this log entry relates to, if one was created. |
| Store Id | The Omnium store code that this log entry is associated with. |

### Status values

| Status | What it means |
|--------|---------------|
| Created | The log entry has been created and is waiting to be processed. |
| Request | A request is being sent to Omnium. |
| Response | A response has been received from Omnium and is being processed. |
| Processed | The entry has been completed successfully. No further action is needed. |
| Error | Something went wrong during processing. Check the **Log Details** for this entry to find out what happened. |

---

## Messages

Errors are not shown as pop-up messages on screen. Instead, they are written to the log entry details. Open **Log Details** for the relevant entry and use **View Detail Info** to read the error text. Common errors include:

| Message | What it means | What to do |
|---------|--------------|------------|
| "Customer No. is blank on Omnium Store [store code]. Sales Order not created." | An incoming delivery for an external store could not create a Sales Order because the store has no customer configured. | Open **Omnium Stores**, find the store, fill in **Customer No.**, then re-process the entry using **Process Single**. |
| "Vendor No. is blank on Omnium Store [store code]. Purchase Order not created." | An incoming delivery from an external store could not create a Purchase Order because the store has no vendor configured. | Open **Omnium Stores**, find the store, fill in **Vendor No.**, then re-process the entry using **Process Single**. |

Other errors may relate to connectivity issues (Omnium being unavailable) or data issues in the incoming message. For connectivity errors, the background job will retry automatically on its next scheduled run. For data errors, check the detail payload and contact your system administrator if you cannot identify the cause.

---

## Frequently Asked Questions

**How often does the background job run?**
This is configured by your system administrator through the Business Central Job Queue. Your administrator can tell you the schedule. The log will show a new set of entries each time the job runs.

**An order I expected in Business Central is missing. Where do I start?**
Open **Omnium Log** and look for entries with **Error** status from around the time you expected the order to arrive. Select any error entry and choose **Log Details** to see what went wrong.

**Can I delete log entries?**
Yes, the page allows deletion. However, it is advisable to keep log entries for at least a short period for troubleshooting purposes. Check with your system administrator before deleting entries in bulk.

**What does No. Of Retries mean?**
This field (visible in the underlying data) counts how many times the system has attempted to process this entry. A high retry count on an Error entry suggests a persistent problem that requires manual intervention rather than just waiting for an automatic retry.

**I re-processed an entry, but it is still showing as Error. What now?**
Read the detail payload carefully using **View Detail Info**. If the error message refers to a missing setup value (like a customer or vendor number), correct that setup and try again. If the error message is not clear, contact your system administrator or the integration support team.

---

## Related features

- [Omnium Setup](omnium-setup.md) — Incorrect setup values are a common cause of log errors. Check setup first when investigating errors.
- [Omnium Stores](omnium-stores.md) — Missing Customer No. or Vendor No. on a store record is a frequent source of delivery processing errors.
- [Omnium Deliveries](omnium-deliveries.md) — Delivery processing errors appear in the log and can be retried from here.
- [Sales Orders from Omnium](sales-orders.md) — Order creation errors are visible in the log.
- [Purchase Orders](purchase-orders.md) — Purchase order send/receive errors are tracked in the log.
