# Sales Orders from Omnium

> Business Central automatically creates Sales Orders when customers place orders through the Omnium web shop, and Sales Credit Memos when customers return those orders.

---

## What does this do?

When a customer places an order on your Omnium-powered web shop or through Omnium's retail system, Business Central automatically receives that order and creates a Sales Order. You do not need to manually enter the order — it arrives, is processed by the background job, and appears in your standard **Sales Orders** list ready for fulfilment.

The integration distinguishes between two types of orders:

- **B2C orders** (consumer orders from anonymous shoppers): these are created against a single default customer account configured in **Omnium Setup**. All anonymous web shop purchases are grouped under this one customer.
- **B2B orders** (orders from registered business customers): these are created against the specific business customer identified in the Omnium order data.

The order's location, salesperson, and dimension are set automatically based on the store that the order originated from in Omnium. A small **Omnium** section is added to the Sales Order page showing the key Omnium identifiers for that order.

When an order is posted, the same Omnium fields are carried over to the **Posted Sales Invoice**, so you can always trace a posted invoice back to its original Omnium order.

---

## How to use it

### Finding and reviewing incoming Omnium orders

1. Use the Business Central search bar and open **Sales Orders**.
2. Omnium orders appear in the list alongside any manually created orders. You can identify them by the **Omnium Order Id** field — orders with a value in this field came from Omnium.
3. Open an order to review its lines, customer details, and Omnium information in the **Omnium** section of the order header.
4. Continue with your normal sales order workflow: review, release, pick, ship, and invoice as usual.

### Tracing a posted invoice back to its Omnium order

1. Use the search bar and open **Posted Sales Invoices**.
2. Open the posted invoice you want to check.
3. Find the **Omnium** section on the invoice. The **Omnium Order Id** field shows the original order reference from Omnium.

---

## Fields

The following fields appear in the **Omnium** section on the **Sales Order** page and the **Posted Sales Invoice** page.

| Field | What it means |
|-------|---------------|
| Omnium Order Id | The unique order reference from Omnium. Use this to look up the order in Omnium if you need to cross-reference between the two systems. |
| Omnium B2B Order | Indicates whether this is a business-to-business order (ticked) or a consumer order (unticked). B2B orders are linked to a specific business customer; B2C orders use the default customer from Omnium Setup. |
| Omnium Order Type | The order type code from Omnium. This maps to a payment method and prepayment percentage as configured in **Omnium Order Types**. It determines how the order is financially treated in Business Central. |

---

## Frequently Asked Questions

**Why is a Sales Order created against a customer I do not recognise?**
Anonymous consumer orders (B2C) are always booked against the default customer set up in **Omnium Setup** under the **B2C Customer** field. If you do not recognise that customer, check the Omnium Setup with your administrator.

**How do I find all orders that came from Omnium?**
On the **Sales Orders** list, filter the list by the **Omnium Order Id** column: show only rows where this field is not blank. All rows with a value came from Omnium.

**Can I edit an Omnium order after it is created?**
Yes, Omnium-created Sales Orders behave exactly like any other Sales Order in Business Central. You can edit lines, change quantities, add items, and process them through your normal workflow.

**What is the Omnium Order Status field?**
This field tracks the status of the order as reported back from Omnium. It is read-only and updated automatically by the integration.

---

## Returns and Credit Memos

When a customer returns an Omnium order, Business Central automatically creates a **Sales Credit Memo** linked to the original order. You do not need to create the credit memo manually.

### What does this do?

The return process works in reverse of the original order flow. When Omnium notifies Business Central of a return, a Sales Credit Memo is created. The system links the credit memo back to the original posted Sales Invoice using the **Omnium Order Id**, so the financial reversal is correctly matched to the original sale.

### Finding and reviewing return credit memos

1. Use the search bar and open **Sales Credit Memos**.
2. Omnium return credit memos have an **Omnium Order Id** filled in. You can filter by this field to see only Omnium returns.
3. Review the credit memo lines and process it through your normal returns workflow.

### Fields on Sales Credit Memos

The same three Omnium fields appear on the **Sales Credit Memo** page:

| Field | What it means |
|-------|---------------|
| Omnium Order Id | The Omnium order reference for the original order being returned. This links the credit memo to the original sale. |
| Omnium B2B Order | Whether the original order was a B2B order. |
| Omnium Order Type | The order type from the original Omnium order, used to ensure the financial reversal uses the correct payment method and prepayment settings. |

### Frequently Asked Questions about returns

**Why did a credit memo appear without me doing anything?**
Business Central automatically creates credit memos when Omnium sends a return notification through the integration. This is expected behaviour — check the **Omnium Log** if you want to see the processing record for that return.

**Is the credit memo posted automatically?**
No. Like all documents created by the integration, credit memos are created in open (draft) status. You review them and post them using your normal process.

---

## Related features

- [Omnium Log](omnium-log.md) — All order and return processing events are recorded in the log. Check here if an expected order or credit memo has not appeared.
- [Omnium Order Types](omnium-order-types.md) — Defines how the Omnium Order Type field maps to payment methods and prepayment settings.
- [Omnium Setup](omnium-setup.md) — The B2C Customer setting controls which customer account is used for anonymous consumer orders.
