const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const dir = __dirname;

// Document order and titles
const docs = [
  { file: 'README.pdf',              title: 'User Guides' },
  { file: 'omnium-setup.pdf',        title: 'Omnium Setup' },
  { file: 'omnium-stores.pdf',       title: 'Omnium Stores' },
  { file: 'omnium-order-types.pdf',  title: 'Omnium Order Types and Payment Setup' },
  { file: 'item-feed.pdf',           title: 'Item Feed' },
  { file: 'sales-orders.pdf',        title: 'Sales Orders from Omnium' },
  { file: 'purchase-orders.pdf',     title: 'Purchase Orders' },
  { file: 'omnium-deliveries.pdf',   title: 'Omnium Deliveries' },
  { file: 'omnium-log.pdf',          title: 'Omnium Log' },
];

async function main() {
  // Load all PDFs and record page counts
  const loaded = [];
  let currentPage = 2; // page 1 = TOC

  for (const doc of docs) {
    const bytes = fs.readFileSync(path.join(dir, doc.file));
    const pdfDoc = await PDFDocument.load(bytes);
    loaded.push({ ...doc, pdfDoc, pageCount: pdfDoc.getPageCount(), startPage: currentPage });
    currentPage += pdfDoc.getPageCount();
  }

  // ── Build TOC page ──────────────────────────────────────────────────────────
  const tocDoc = await PDFDocument.create();
  const page = tocDoc.addPage([595.28, 841.89]); // A4
  const boldFont  = await tocDoc.embedFont(StandardFonts.HelveticaBold);
  const plainFont = await tocDoc.embedFont(StandardFonts.Helvetica);

  const { width, height } = page.getSize();
  const margin = 60;
  const lineColor = rgb(0.18, 0.18, 0.18);
  const mutedColor = rgb(0.55, 0.55, 0.55);

  // Title
  page.drawText('AL-E-Wheels', {
    x: margin, y: height - 65, size: 28, font: boldFont, color: rgb(0.08, 0.08, 0.08),
  });
  page.drawText('User Guide', {
    x: margin, y: height - 95, size: 16, font: plainFont, color: mutedColor,
  });

  // Divider
  page.drawLine({
    start: { x: margin, y: height - 112 },
    end:   { x: width - margin, y: height - 112 },
    thickness: 0.75,
    color: rgb(0.75, 0.75, 0.75),
  });

  page.drawText('Table of Contents', {
    x: margin, y: height - 138, size: 13, font: boldFont, color: lineColor,
  });

  // TOC entries
  let y = height - 168;
  for (const doc of loaded) {
    const pageNumStr = String(doc.startPage);
    const titleW    = plainFont.widthOfTextAtSize(doc.title, 11);
    const pageNumW  = plainFont.widthOfTextAtSize(pageNumStr, 11);
    const dotW      = plainFont.widthOfTextAtSize('.', 11);
    const available = width - margin * 2 - titleW - pageNumW - 12;
    const numDots   = Math.max(0, Math.floor(available / dotW));

    page.drawText(doc.title, { x: margin, y, size: 11, font: plainFont, color: lineColor });
    page.drawText('.'.repeat(numDots), {
      x: margin + titleW + 5, y, size: 11, font: plainFont, color: mutedColor,
    });
    page.drawText(pageNumStr, {
      x: width - margin - pageNumW, y, size: 11, font: plainFont, color: lineColor,
    });
    y -= 26;
  }

  // Footer
  page.drawText('Generated ' + new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }), {
    x: margin, y: 30, size: 8, font: plainFont, color: mutedColor,
  });

  const tocBytes = await tocDoc.save();

  // ── Merge everything ────────────────────────────────────────────────────────
  const merged = await PDFDocument.create();

  const tocPdf  = await PDFDocument.load(tocBytes);
  const tocPages = await merged.copyPages(tocPdf, tocPdf.getPageIndices());
  tocPages.forEach(p => merged.addPage(p));

  for (const doc of loaded) {
    const pages = await merged.copyPages(doc.pdfDoc, doc.pdfDoc.getPageIndices());
    pages.forEach(p => merged.addPage(p));
  }

  merged.setTitle('AL-E-Wheels User Guide');
  merged.setAuthor('AL-E-Wheels');

  const out = path.join(dir, 'AL-E-Wheels-User-Guide.pdf');
  fs.writeFileSync(out, await merged.save());
  console.log(`Done → ${out}  (${merged.getPageCount()} pages)`);
}

main().catch(err => { console.error(err); process.exit(1); });
