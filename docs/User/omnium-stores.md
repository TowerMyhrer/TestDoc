# Omnium Stores

> A list of all physical and web stores connected to Omnium, with the configuration that controls how Business Central handles orders and deliveries for each store.

---

## What does this do?

The **Omnium Stores** page holds the master list of every store that exists in your Omnium platform — retail shops, web warehouses, franchises, and external partners. This list is imported automatically from Omnium using the **Import Stores** action on the **Omnium Setup** page, and then enriched with Business Central-specific configuration.

Each store record tells Business Central two important things: whether the store is an internal location (one of your own warehouses or shops) or an external party (a franchise or independent retailer), and which Business Central customer or vendor account is associated with that store.

These settings directly affect how deliveries and stock movements are processed. When Omnium sends a delivery notification, Business Central looks at the stores involved to decide whether to create a Transfer Order (for internal-to-internal stock movements), a Sales Order (for deliveries going to an external store), or a Purchase Order (for deliveries coming from an external store).

---

## Setup

Before stores can be configured, they must first be imported from Omnium. An administrator does this from the **Omnium Setup** page using the **Import Stores** action. After import, each store may need to be updated with the fields described below.

Additionally, two other areas of Business Central must be linked to stores for the integration to work correctly:

- **Location Cards** — Each Business Central inventory location that corresponds to an Omnium warehouse must have its **Omnium Warehouse Id** field set to the matching store code. This is what allows Business Central to identify which store a delivery is going to or coming from.
- **Dimension Values** — If your organisation uses Global Dimension 1 to track stores (for example, for reporting by store), each relevant dimension value can have its **Omnium Store Id** field linked to the corresponding store code. This allows the system to stamp the correct dimension on documents created from Omnium data.

**Permissions required:** Administrator access is required to edit store records and location settings.

---

## How to use it

### Reviewing and configuring stores after import

1. Use the Business Central search bar and type **Omnium Stores**.
2. Select **Omnium Stores** from the results. The full list of imported stores is displayed.
3. For each store that represents an external partner (franchise, retailer), set the **Store Relation** field to **External**.
4. For external stores that you sell goods to, fill in the **Customer No.** field with the relevant Business Central customer account.
5. For external stores that you buy goods from, fill in the **Vendor No.** field with the relevant Business Central vendor account.
6. Confirm the **Shortcut Dimension 1 Code** field is set if your reporting requires a dimension value to be stamped on orders for this store.

### Linking a Business Central location to a store

1. Use the search bar and open **Locations**.
2. Open the Location Card for the location you want to link.
3. Find the **Omnium Warehouse Id** field and select the store code from **Omnium Stores** that this location corresponds to.
4. Save the change.

### Linking a dimension value to a store

1. Use the search bar and open **Dimension Values**.
2. Filter for your Global Dimension 1 values.
3. Open the dimension value that represents a store.
4. Fill in the **Omnium Store Id** field with the corresponding store code from **Omnium Stores**.
5. Save the change.

---

## Fields

| Field | What it means |
|-------|---------------|
| Code | The unique identifier for this store as it is known in Omnium. This code must match the **Omnium Warehouse Id** on the linked Business Central location. |
| Store Name | The display name of the store. |
| Shortcut Dimension 1 Code | The Global Dimension 1 value linked to this store. When documents are created for this store, this dimension value is applied automatically. |
| Store Relation | Whether this store is **Internal** (one of your own warehouses or locations) or **External** (an independent partner such as a franchise or retailer). This setting determines whether deliveries involving this store create Transfer Orders, Sales Orders, or Purchase Orders. |
| Primary Store | Marks this store as the primary retail store. Used by the integration for certain routing logic. |
| Primary Warehouse | Marks this store as the primary warehouse. |
| Warehouse | Indicates this store operates as a warehouse. |
| Web Warehouse | Indicates this store handles web shop stock. |
| Customer No. | The Business Central customer account for this store. Required for external stores that are delivery destinations — a Sales Order will be created using this customer when stock is sent to this store from an internal location. |
| Vendor No. | The Business Central vendor account for this store. Required for external stores that are delivery sources — a Purchase Order will be created using this vendor when stock originates from this store. |

---

## Messages

| Message | What it means | What to do |
|---------|--------------|------------|
| "Customer No. is blank on Omnium Store [store code]. Sales Order not created." | A delivery was received for an external destination store, but that store has no Customer No. set up. | Open **Omnium Stores**, find the store, and fill in the **Customer No.** field. Then re-process the delivery from the **Omnium Log**. |
| "Vendor No. is blank on Omnium Store [store code]. Purchase Order not created." | A delivery was received from an external source store, but that store has no Vendor No. set up. | Open **Omnium Stores**, find the store, and fill in the **Vendor No.** field. Then re-process the delivery from the **Omnium Log**. |

---

## Frequently Asked Questions

**When should I set Store Relation to External?**
Set a store to External when it represents a business that is not part of your own operations — for example, a franchise partner or an independent retailer. These stores appear as customers or vendors in Business Central rather than as inventory locations.

**What happens if I do not set the Omnium Warehouse Id on the Location Card?**
Business Central will not be able to identify which store a delivery is going to or coming from. Deliveries for that location will follow the default (Transfer Order) path, even if the store is marked as External.

**Can a store be both a customer and a vendor?**
Yes. You can fill in both **Customer No.** and **Vendor No.** on the same store record. Which one is used depends on whether the store is the destination or the source of a given delivery.

**What does the Omnium Store Id on a dimension value do?**
It tells the integration which Omnium store a dimension value corresponds to. When orders are created from Omnium data, the system uses this link to stamp the correct dimension on the document automatically.

---

## Related features

- [Omnium Setup](omnium-setup.md) — The Import Stores action on the setup page is how stores are first brought into Business Central.
- [Omnium Deliveries](omnium-deliveries.md) — The Store Relation setting directly controls whether deliveries create Transfer Orders, Sales Orders, or Purchase Orders.
- [Omnium Log](omnium-log.md) — Configuration errors (such as missing Customer No.) are recorded here.
