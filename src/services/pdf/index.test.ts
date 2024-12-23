import { generatePdf } from '@/services/pdf/index';

describe('Portfolio Pdf', () => {
  it('should Generate pdf with playwright', async () => {
    const pdf = await generatePdf();
    expect(pdf).toBeDefined();
  });
});
