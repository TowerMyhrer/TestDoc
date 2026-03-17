# Omnium Setup

> The single configuration page where administrators connect Business Central to the Omnium platform and define the global settings that control how orders, deliveries, and payments are processed.

---

## What does this do?

The **Omnium Setup** page is the central control panel for the E-Wheels Omnium Integration. Before any data can flow between Business Central and Omnium — whether that is web shop orders arriving, purchase orders being sent, or inventory updates being exchanged — an administrator must fill in this page.

The setup is organised into five areas: general API connection details, order settings, Azure Service Bus messaging settings, POS payment journal settings, and inventory journal settings. Once saved, these settings are used automatically by all background processes that connect Business Central to Omnium.

You only need to configure this page once. After the initial setup, changes are only needed when credentials are rotated, a new journal batch is required, or the in-transit location changes.

---

## Setup

This page is for administrators only. Standard Business Central users do not need to open or change this page.

**Permissions required:** Administrator access to the Omnium permission set is required to open and edit this page.

---

## How to use it

### Opening Omnium Setup

1. Use the Business Central search bar (the magnifying glass icon) and type **Omnium Setup**.
2. Select **Omnium Setup** from the results. The page opens as a configuration card.
3. Fill in the fields as described in the Fields section below.
4. Changes are saved automatically when you leave each field.

### Importing stores after setup

Once the general connection settings are saved, you can import your store list from Omnium:

1. On the **Omnium Setup** page, choose the **Import Stores** action in the action bar.
2. Business Central connects to Omnium and downloads all store records into the **Omnium Stores** list.
3. After the import completes, open **Omnium Stores** to review the imported stores and configure store-specific settings.

> **Tip:** Run **Import Stores** again whenever new stores are added in Omnium to bring them into Business Central.

---

## Fields

### General

| Field | What it means |
|-------|---------------|
| Base Url | The root web address of the Omnium API. Provided by Omnium when the integration is set up. |
| Client Id | The client identifier used to authenticate with Omnium. Provided by Omnium. |
| Client Secret | The client secret (password) used to authenticate with Omnium. This field is masked for security. Provided by Omnium. |
| Market Id | The market identifier that tells Omnium which market this Business Central environment belongs to. Provided by Omnium. |

### Order

| Field | What it means |
|-------|---------------|
| B2C Customer | The Business Central customer account used for anonymous web shop (consumer) orders from Omnium. Orders placed by shoppers who are not registered business customers are created against this customer. |
| Order Payment Method | The default Omnium payment method applied to orders that are paid through Business Central rather than through Omnium's own payment processing. |

### Azure Service Bus

| Field | What it means |
|-------|---------------|
| Service Bus Namespace | The namespace of the Azure Service Bus used to receive messages from Omnium. Provided by your IT or integration team. |
| Queue Name | The name of the specific queue within the Service Bus namespace where Omnium messages arrive. |
| Access Policy Name | The name of the access policy (shared access key) that grants permission to read from the Service Bus queue. |
| Access Key | The secret key associated with the access policy above. |
| Access URI | The full URI used to obtain a Service Bus authentication token. |

### POS Payment

| Field | What it means |
|-------|---------------|
| POS Payment Journal Template | The general journal template used to post point-of-sale payments received from Omnium stores. |
| POS Payment Journal Batch | The specific batch within the journal template above where POS payment entries are written. |
| POS Payment Method | The payment method code applied to POS payment postings in Business Central. |

### Inventory

| Field | What it means |
|-------|---------------|
| Inventory Journal Template | The item journal template used for inventory adjustments triggered by Omnium (for example, reconciliation updates). |
| Inventory Journal Batch | The specific batch within the inventory journal template where Omnium-driven inventory entries are written. |
| Transfer Order - In-Transit Code | The Business Central location code used as the in-transit (intermediate) location when Transfer Orders are created from Omnium deliveries. |

---

## Frequently Asked Questions

**What happens if I leave a field blank?**
The integration will fail for the processes that depend on the missing value. For example, if **B2C Customer** is blank, incoming web shop orders from anonymous shoppers cannot be created. Check the **Omnium Log** if you see errors after setup changes.

**How do I rotate the Client Secret or Access Key?**
Open **Omnium Setup**, clear the relevant field, type the new value, and move to another field. The new value is saved immediately. No restart is required.

**Do I need to run Import Stores every time?**
Only when new stores are added in Omnium or if store codes have changed. For day-to-day operation, the store list remains static until you run the import again.

---

## Related features

- [Omnium Stores](omnium-stores.md) — The list of stores populated by the Import Stores action. Each store must be configured after import.
- [Omnium Log](omnium-log.md) — All background integration activity is recorded here. If setup is incorrect, errors will appear in this log.
- [Omnium Order Types](omnium-order-types.md) — Defines how specific Omnium order types map to Business Central payment methods.
