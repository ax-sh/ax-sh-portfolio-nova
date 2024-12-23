import type { Page } from 'playwright-core';
import type { ReactNode } from 'react';

/**
 * Tailwind
 */
// export const TAILWIND_CDN = 'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.17/base.min.css';
export const TAILWIND_CDN = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
// export const TAILWIND_CDN = 'https://cdn.tailwindcss.com';
async function makeBrowser(env: 'development' | 'production') {
  const cloud = (await import('@sparticuz/chromium')).default;

  const executablePath = await cloud.executablePath();
  switch (env) {
    case 'production': {
      const { chromium } = await import('playwright-core');
      return chromium.launch({
        args: cloud.args,
        executablePath,
        headless: true,
      });
    }
    case 'development': {
      const { chromium } = await import('playwright');
      return chromium.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: false,
      });
    }
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
}
export async function preparePdf(page: Page) {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.evaluate(() => {
    document.body.style.paddingRight = '1cm'; // only for pdf wo maintain typography
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  });
  const m = '0cm';

  const pdfBuffer: Buffer = await page.pdf({
    format: 'A4',
    // displayHeaderFooter:true,
    printBackground: true,
    margin: { top: m, right: m, bottom: m, left: m },
  }); // generate the PDF 🎉
  return pdfBuffer;
}

async function PdfTemplate(): Promise<ReactNode> {
  const { default: PortfolioCV } = await import('./portfolio-cv');
  return <PortfolioCV />;
}

async function buildPortfolioPdf() {
  const browser = await makeBrowser('development');
  try {
    const page = await browser.newPage();
    const ReactDOMServer = (await import('react-dom/server')).default;
    // Create the component instance
    const template = await PdfTemplate();
    // Read the HTML template from a React component
    const htmlTemplate = ReactDOMServer.renderToStaticMarkup(template);
    await page.setContent(htmlTemplate, { waitUntil: 'networkidle' });
    // Add Tailwind CSS
    await page.addStyleTag({
      url: TAILWIND_CDN,
    });

    const pdf = await preparePdf(page);
    // const screenshot = await page.screenshot();

    // const fs = await import('node:fs');
    // await fs.promises.writeFile('portfolio.png', screenshot);
    return pdf;
  } finally {
    await browser?.close();
  }
}

export async function generatePdf() {
  const pdf = await buildPortfolioPdf();
  // Create a Blob from the PDF data
  // const pdfBlob = new Blob([pdf], { type: 'application/pdf' });
  // console.log(pdfBlob);
  const fs = await import('node:fs');
  await fs.promises.writeFile('portfolio.pdf', pdf);
  return 'pdf';
}
