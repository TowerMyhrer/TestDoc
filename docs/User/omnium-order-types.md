# Omnium Order Types and Payment Setup

> Administrators configure Omnium Order Types to map Omnium's order classification codes to Business Central payment methods and prepayment settings. Payment Setup maps Omnium payment methods to the correct general ledger accounts per store.

---

## What does this do?

Omnium categorises every order with an order type code — for example, a code that distinguishes web shop orders from in-store purchases, or cash payments from card payments. The **Omnium Order Type** page is where you tell Business Central what each of those Omnium codes means in financial terms: which Business Central payment method should be applied to orders of that type, and whether any prepayment percentage applies.

When an order arrives from Omnium with a specific order type, Business Central uses this configuration to set the payment method and prepayment terms on the Sales Order automatically.

Each order type can also have a list of associated **Status Codes** — the order status values from Omnium that are valid for that type. These appear in a factbox on the right-hand side of the Omnium Order Type page.

The **Omnium Payment Setup** page goes one step further: it maps each Omnium payment method code to a specific general ledger account (or other account type) for a specific store. This controls where POS payment journal entries are posted when sales are made at a physical store location.

---

## Setup

Both pages are administrator-only configuration. Set them up once and update only when Omnium order types or payment methods change.

**Permissions required:** Administrator access to the Omnium permission set.

---

## How to use it

### Configuring Omnium Order Types

1. Use the Business Central search bar and open **Omnium Order Type**.
2. The list shows all order types currently configured. Each row represents one Omnium order type.
3. To add a new order type, click a blank row and fill in the fields.
4. For each order type, set the **Payment Method** to the Business Central payment method that matches how orders of this type are paid.
5. Set the **Prepayment Percent** if orders of this type require a deposit or advance payment.
6. The **Status Codes** factbox on the right shows the Omnium order status values associated with the selected order type. These are managed separately and are populated from Omnium data.

### Configuring Payment Setup

1. Use the search bar and open **Omnium Payment Setup**.
2. The list shows payment mappings per store and payment code.
3. To add a new mapping, click a blank row and fill in the store code, payment code, account type, and account number.
4. To import the current list of payment method codes from Omnium, choose the **Import Omnium Payment Methods** action. This synchronises the list of available payment codes so you can use them in the setup rows.

---

## Fields

### Omnium Order Type

| Field | What it means |
|-------|---------------|
| Code | The Omnium order type code exactly as it appears in the Omnium system. This must match what Omnium sends on incoming orders. |
| Description | A plain-language description of what this order type represents (for example, "Web shop card payment" or "In-store cash sale"). |
| Payment Method | The Business Central payment method applied to Sales Orders of this type. This controls how the order is settled in Business Central. |
| Prepayment Percent | The percentage of the order total that must be prepaid before the order is fulfilled. Enter 0 if no prepayment is required. |

### Omnium Order Status (factbox)

| Field | What it means |
|-------|---------------|
| Order Type | The order type code this status belongs to. |
| Order Status | A status code from Omnium that is valid for this order type. |

### Omnium Payment Setup

| Field | What it means |
|-------|---------------|
| Store Code | The Omnium store this payment mapping applies to. |
| Payment Code | The Omnium payment method code (imported from Omnium via the Import action). |
| Account Type | The type of account in Business Central where payments of this method are posted (for example, G/L Account, Bank Account, or Customer). |
| Account No. | The specific account number within Business Central where the payment is posted. The lookup for this field is filtered based on the Account Type selected. |

---

## Frequently Asked Questions

**What happens if an incoming Omnium order has an order type code that is not set up here?**
Business Central will not be able to apply a payment method or prepayment percentage automatically. The order will still be created, but you may need to set the payment terms manually. Check the **Omnium Log** for any warnings related to unrecognised order types.

**How do I find out which order type codes Omnium uses?**
Contact your Omnium administrator or review the orders in the **Omnium Log** details to see what codes appear in the incoming order data.

**Do I need to set up every store in the Payment Setup?**
Only stores that process POS payments through the payment journal integration need entries in the Payment Setup. Stores that only handle web shop orders (where payment is managed by Omnium) typically do not need entries here.

**What does Import Omnium Payment Methods do exactly?**
It reads the list of payment method codes that are configured in Omnium and adds any new ones to the list of available codes in Business Central. This means you can select them when filling in the Payment Code field in the Payment Setup. It does not create Payment Setup rows automatically — you still need to assign each payment code to an account manually.

---

## Related features

- [Sales Orders from Omnium](sales-orders.md) — The Omnium Order Type field on a Sales Order is matched against this configuration to set the payment method.
- [Omnium Setup](omnium-setup.md) — The global Order Payment Method and POS Payment Method settings provide fallback defaults when no order-type-specific mapping is found.
- [Omnium Stores](omnium-stores.md) — The Store Code in Payment Setup refers to the stores defined here.
