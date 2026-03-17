# Item Feed

> Items marked as Base Items in Business Central are exposed to the Omnium web shop through a data feed, allowing Omnium to display and sell your product catalogue online.

---

## What does this do?

The E-Wheels Omnium Integration includes an item data feed that makes your Business Central item catalogue available to Omnium and other connected systems. This feed is used by Omnium to keep the web shop product catalogue in sync with the items you manage in Business Central.

A key concept in this feed is the **Base Item** flag. In a product catalogue that uses variants (for example, a bicycle model that comes in multiple sizes or colours), you typically have one parent product and several variant items beneath it. The **Base Item** field lets you mark the top-level parent product so that connected systems like Omnium understand the hierarchy.

Items marked as **Base Item = Yes** are intended as the parent or template product. The variants (child items) do not carry this flag. Omnium uses this distinction to structure the web shop correctly, showing the base product as the main listing with its variants as selectable options.

---

## How to use it

### Marking an item as a Base Item

1. Use the Business Central search bar and open **Items**.
2. Find the item you want to mark as a base item and open its **Item Card**.
3. Scroll to the bottom of the **Item** tab on the card.
4. Tick the **Base Item** checkbox.
5. Save the change by navigating away or closing the card.

The item will now be included in the item feed as a base product when the feed is read by Omnium or another connected system.

### Identifying Base Items from the Item List

You can also see and filter by the **Base Item** field directly from the **Item List**:

1. Open **Items**.
2. The **Base Item** column is visible in the list. Ticked items are base products.
3. Use the standard Business Central filter to show only items where **Base Item** is ticked, giving you a quick overview of all parent products in your catalogue.

---

## Fields

| Field | What it means |
|-------|---------------|
| Base Item | When ticked, this item is treated as a base (parent) product in the item feed. Omnium uses this flag to identify top-level products that act as the parent for variants. Leave unticked for variant items or standard items that are not part of a product hierarchy. |

This field appears on both the **Item Card** and the **Item List**.

---

## Frequently Asked Questions

**Does ticking Base Item affect anything in Business Central itself?**
No. The **Base Item** flag is used only by the item data feed for external systems like Omnium. It has no effect on how items are priced, purchased, sold, or inventoried within Business Central.

**Do I need to mark every item as a Base Item?**
No. Only mark items that are the top-level parent in a product family. If you sell individual items with no variants, you do not need to use this field at all unless your Omnium configuration requires it. Check with your Omnium administrator to understand how your product catalogue is structured in the web shop.

**What happens if I untick Base Item on an item that is currently listed as a base product in Omnium?**
The item feed will no longer present that item as a base product. The effect in Omnium depends on how often the feed is synchronised and how Omnium handles the change. Consult your Omnium administrator before changing this flag on items that are actively displayed in the web shop.

**Where is the feed itself — can I see what is being sent to Omnium?**
The item feed is an API endpoint used by Omnium to pull item data. It is not visible as a page in Business Central. If you need to verify what data Omnium is reading, contact your system administrator or check with your Omnium integration support team.

---

## Related features

- [Omnium Setup](omnium-setup.md) — General connection settings for the integration, including the API credentials used to authenticate with Omnium.
- [Omnium Stores](omnium-stores.md) — Store configuration that controls how orders placed through the web shop are processed in Business Central.
