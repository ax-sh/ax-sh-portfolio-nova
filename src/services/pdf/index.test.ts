import { generatePdf } from '@/services/pdf/index';

describe.todo('portfolio Pdf', () => {
  it('should Generate pdf with playwright', async () => {
    const pdf = await generatePdf();
    expect(pdf).toBeDefined();
  });
});
