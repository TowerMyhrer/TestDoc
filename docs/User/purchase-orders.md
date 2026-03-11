# Purchase Orders

> When you release a Purchase Order in Business Central, it is automatically sent to Omnium for fulfilment. Incoming delivery updates from Omnium are tracked directly on the Purchase Order.

---

## What does this do?

The E-Wheels Omnium Integration extends the standard Business Central Purchase Order with an outbound flow: when you release a Purchase Order, Business Central automatically notifies Omnium so the supplier can begin fulfilling the order. You do not need to send the order manually — releasing it is the trigger.

After the order has been sent, the Purchase Order shows an updated status and is flagged as sent. As Omnium processes the order and schedules deliveries, delivery notifications flow back into Business Central and appear in the **Omnium Delivery** factbox directly on the Purchase Order page. This gives you a live view of what is on its way without having to navigate to a separate list.

---

## How to use it

### Sending a Purchase Order to Omnium

1. Open **Purchase Orders** and find or create the purchase order you want to send.
2. When the order is ready, choose the **Release** action (as you would for any Business Central purchase order).
3. Business Central automatically sends the order details to Omnium in the background. The **Omnium Status** field on the order updates to **Sent To Omnium** once the send is confirmed.
4. You do not need to take any further action to trigger the send.

### Checking the send status

1. Open the Purchase Order.
2. Scroll to the **Omnium** section on the order header.
3. Check the **Sent to Omnium** checkbox and the **Omnium Status** field to confirm the order has been received by Omnium.

### Viewing incoming deliveries for a Purchase Order

1. Open the Purchase Order.
2. Look at the **Omnium Delivery** factbox on the right-hand side of the page (or at the bottom, depending on your screen layout).
3. The factbox lists all delivery records that Omnium has linked to this purchase order, showing the delivery ID, creation date, destination location, estimated arrival, and current status.
4. For full details on a delivery, open the **Omnium Delivery** list page.

### Resending a Purchase Order to Omnium

If you need to send the same order to Omnium again (for example, after correcting a data issue), you can unmark the sent status:

1. Open the Purchase Order.
2. In the **Omnium** section, untick the **Sent to Omnium** checkbox.
3. Business Central will display a confirmation message: **"If you unmark the purchase order as sent to Omnium, you will be able to send the same order to Omnium again. Do you want to proceed?"**
4. Choose **Yes** to confirm. The order can now be sent again when released.

> **Note:** Resending an order may result in a duplicate order in Omnium. Only do this if you have confirmed with your Omnium administrator that a resend is needed.

---

## Fields

The following fields appear in the **Omnium** section on the **Purchase Order** page.

| Field | What it means |
|-------|---------------|
| Sent to Omnium | Ticked when the purchase order has been sent to Omnium. Unticking this (with confirmation) allows the order to be sent again. |
| Omnium Status | The current stage of the order within the Omnium workflow. See the status values below. |

### Omnium Status values

| Status | What it means |
|--------|---------------|
| New | The purchase order has not yet been sent to Omnium. |
| Sent To Omnium | The order has been transmitted to Omnium. Omnium has received the notification and the order is being processed. |
| Received by Omnium | Omnium has confirmed it has fully received and registered the order. |

### Omnium Delivery factbox

The factbox on the Purchase Order page shows a summary view of linked deliveries. The columns shown are:

| Column | What it means |
|--------|---------------|
| Delivery Id | The unique reference for this delivery in Omnium. |
| Created Date and Time | When this delivery record was created in Omnium. |
| Location | The Business Central location where this delivery is destined. |
| Estimated Time Of Arrival | The expected delivery date and time as reported by Omnium. |
| Status | The current status of the delivery (Draft, New, Confirmed, In Progress, or Completed). |

---

## Messages

| Message | What it means | What to do |
|---------|--------------|------------|
| "If you unmark the purchase order as sent to Omnium, you will be able to send the same order to Omnium again. Do you want to proceed?" | You are about to allow this purchase order to be sent to Omnium again. | Choose **Yes** only if you intend to resend. Choose **No** to cancel the change. |

---

## Frequently Asked Questions

**What information is sent to Omnium when I release a Purchase Order?**
Business Central sends the order number, vendor details, currency, amounts, and all item lines (item code, description, quantity, price, and discount information). Only lines of type Item are included.

**What if the send to Omnium fails?**
If the transmission fails, an error is recorded in the **Omnium Log**. The **Sent to Omnium** checkbox will not be ticked and the **Omnium Status** will remain **New**. Check the **Omnium Log** for details and retry from there, or simply re-release the order once the issue is resolved.

**The Omnium Delivery factbox is empty. Is that a problem?**
Not necessarily. The factbox will be empty until Omnium has created delivery records for this purchase order. Deliveries appear here as Omnium schedules and updates them. If you expected a delivery to appear and it has not, check the **Omnium Delivery** list and the **Omnium Log**.

**Can I edit the purchase order after it has been sent to Omnium?**
You can modify the purchase order in Business Central as normal. However, changes made after sending are not automatically transmitted to Omnium. If you need Omnium to reflect the changes, contact your Omnium administrator.

---

## Related features

- [Omnium Deliveries](omnium-deliveries.md) — Full list of all deliveries from Omnium, including those linked to purchase orders.
- [Omnium Log](omnium-log.md) — All purchase order send events and errors are recorded here.
- [Omnium Stores](omnium-stores.md) — The store dimension on the purchase order is used to identify the relevant Omnium store when sending the order.
