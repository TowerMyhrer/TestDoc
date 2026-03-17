# Omnium Deliveries

> A list of all inbound delivery notifications received from Omnium, showing the status of each delivery and the Business Central document created to handle it.

---

## What does this do?

The **Omnium Delivery** page shows every delivery that Omnium has sent to Business Central. A delivery record is created automatically each time Omnium notifies Business Central that stock is on its way — whether that is an incoming purchase order delivery or a stock movement between stores.

Each delivery record shows where the stock is coming from, where it is going, the estimated arrival time, and the current status. When Business Central processes the delivery, it creates the appropriate document (a Transfer Order, Sales Order, or Purchase Order) and records the document number on the delivery record so you can navigate directly to it.

You can also see a summary of deliveries linked to a specific purchase order from the **Omnium Delivery** factbox on the **Purchase Order** page — without needing to open this list.

---

## How to use it

### Viewing all deliveries

1. Use the Business Central search bar and open **Omnium Delivery**.
2. The list shows all deliveries received from Omnium, with the most recently created at the top.
3. Review the **Status** column to see which deliveries are in progress and which are completed.
4. Check the **Document No.** column to see which Business Central document was created for each delivery.

### Finding deliveries linked to a specific Purchase Order

1. Open **Purchase Orders** and open the relevant purchase order.
2. On the right side of the page, find the **Omnium Delivery** factbox.
3. The factbox shows all deliveries linked to that purchase order, with delivery ID, creation date, location, estimated arrival, and status.

---

## Fields

| Field | What it means |
|-------|---------------|
| Delivery Id | The unique reference for this delivery as assigned by Omnium. |
| Created Date and Time | When this delivery record was first received and created in Business Central. |
| Location | The Business Central location where this delivery is arriving (the destination). |
| Estimated Time Of Arrival | The expected date and time for the delivery to arrive, as provided by Omnium. |
| Status | The current stage of the delivery. See the status values below. |
| Location (Supplier) | The Business Central location where this delivery originates from (the source). |
| Source Document Header | The type of document this delivery is associated with. For purchase order deliveries this shows **PURCHASEORDER**; for stock movements between stores this shows **INTERNALTRANSFER**. |
| Document No. | The Business Central document number (Transfer Order, Sales Order, or Purchase Order) that was created for this delivery. This is filled in automatically after processing. |

### Delivery status values

| Status | What it means |
|--------|---------------|
| Draft | The delivery has been recorded in Omnium but is not yet confirmed. |
| New | The delivery has been received by Business Central and is ready for processing. |
| Confirmed | The delivery has been confirmed in Omnium. |
| In Progress | The delivery is actively being fulfilled. |
| Completed | The delivery has been completed. |

---

## Internal Transfers and External Stores

### What are internal transfers?

When stock moves between two of your own stores or warehouses — rather than arriving from an external supplier — Omnium sends this as an **Internal Transfer** delivery. The **Source Document Header** column for these deliveries shows **INTERNALTRANSFER**.

Business Central processes internal transfer deliveries and creates the appropriate document depending on the stores involved.

### How Business Central decides what document to create

When an internal transfer delivery is processed, Business Central checks whether either end of the transfer involves an **External** store (a franchise or independent retailer set up as a customer or vendor in Business Central, rather than as one of your own inventory locations).

The decision logic is:

| Destination store | Source (supplier) store | Document created |
|-------------------|------------------------|-----------------|
| Internal | Internal | **Transfer Order** — standard stock movement between your own locations. |
| External | Internal | **Sales Order** — goods are being sold to the external destination store. The customer linked to that store in **Omnium Stores** is used. |
| Internal | External | **Purchase Order** — goods are being purchased from the external source store. The vendor linked to that store in **Omnium Stores** is used. |
| External | External | No document is created — this scenario is not currently supported. |

This all happens automatically when the delivery is processed from the **Omnium Log**. The resulting document number is recorded in the **Document No.** column on the delivery record.

### What to do after an automatic Sales or Purchase Order is created

When Business Central creates a Sales Order or Purchase Order from an internal transfer delivery:

1. The order is created in open (draft) status with the items and quantities from the delivery.
2. Open **Sales Orders** or **Purchase Orders** to find the new document.
3. Review the lines — each item and quantity comes directly from the Omnium delivery data.
4. Continue with your normal workflow: review, approve if required, and post when ready.

> **Tip:** Use the **Document No.** column on the **Omnium Delivery** list to quickly find the order that was created for a specific delivery.

### Setup required for external store deliveries

For the system to create the correct document, the following must be configured:

- Each external store must have its **Store Relation** set to **External** in **Omnium Stores**.
- External destination stores must have a **Customer No.** filled in on their store record.
- External source stores must have a **Vendor No.** filled in on their store record.
- Each Business Central location that corresponds to an Omnium warehouse must have its **Omnium Warehouse Id** field set to the matching store code.

If any of these are missing when a delivery is processed, an error is recorded in the **Omnium Log** and no document is created for that delivery. Correct the setup and re-process from the **Omnium Log**.

---

## Transfer Order Status Tracking

Transfer Orders created from Omnium internal transfer deliveries carry an additional **Omnium Status** field that tracks their lifecycle beyond the standard Business Central statuses.

### Omnium Status values on Transfer Orders

| Status | What it means |
|--------|---------------|
| New | The Transfer Order has been created from the Omnium delivery and is open. |
| Ready To Post Shipment | The shipment side of the transfer is ready to be posted. |
| Posted Shipment | The shipment has been posted — stock has left the source location. |
| Ready To Post Received | The receipt side of the transfer is ready to be posted. |
| Received | The receipt has been posted — stock has arrived at the destination location. |

The **Omnium Status** advances automatically as Transfer Orders are processed through the standard Business Central batch posting routines. You do not need to update this field manually.

---

## Messages

| Message | What it means | What to do |
|---------|--------------|------------|
| "Customer No. is blank on Omnium Store [store code]. Sales Order not created." | A delivery was received for an external destination store, but that store has no Customer No. configured. | Open **Omnium Stores**, find the store, fill in **Customer No.**, then re-process the delivery from **Omnium Log**. |
| "Vendor No. is blank on Omnium Store [store code]. Purchase Order not created." | A delivery was received from an external source store, but that store has no Vendor No. configured. | Open **Omnium Stores**, find the store, fill in **Vendor No.**, then re-process the delivery from **Omnium Log**. |

---

## Frequently Asked Questions

**A delivery has appeared but no document has been created. Why?**
Check the **Omnium Log** for errors related to that delivery. The most common causes are a missing Customer No. or Vendor No. on the store record. Correct the setup and re-process the entry using **Process Single** on the **Omnium Log** page.

**Why does the Omnium Delivery list show two columns both labelled "Location"?**
The first **Location** column shows the destination — where the stock is going. The second **Location** column (shown as **Supplier Location** in the underlying data) shows the source — where the stock is coming from. Both are displayed as "Location" on screen.

**What does Source Document Header = INTERNALTRANSFER mean?**
It means this delivery represents a stock movement between stores (not a purchase from an external supplier). These deliveries will create Transfer Orders, Sales Orders, or Purchase Orders depending on the Store Relation settings of the stores involved.

**Can I edit a delivery record?**
Delivery records are created and updated automatically by the integration. You should not need to edit them manually. If a delivery record contains incorrect data, the issue is likely in the source data from Omnium.

**What happens if the same delivery is processed twice?**
The system uses the Delivery Id as a unique key. Processing the same delivery ID a second time will not create a duplicate document. The existing delivery record will be found and no new document will be created.

**Both the source and destination of a delivery are external stores. What happens?**
This scenario is not currently supported. No document will be created. Contact your system administrator if this situation arises regularly in your operations.

---

## Related features

- [Omnium Stores](omnium-stores.md) — Store Relation, Customer No., and Vendor No. settings control how delivery documents are created.
- [Omnium Log](omnium-log.md) — Delivery processing events and errors are recorded here. Use this page to retry failed deliveries.
- [Purchase Orders](purchase-orders.md) — Purchase order deliveries appear in the Omnium Delivery factbox on the Purchase Order page.
- [Sales Orders from Omnium](sales-orders.md) — Sales Orders created from external store deliveries are processed through the normal sales workflow.
