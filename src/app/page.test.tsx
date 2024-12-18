function sum(a: number, b: number) {
  return a + b;
}

test('adds 1 + 2 to equal 3', async () => {
  expect(sum(1, 2)).toBe(3);
});

describe('Home Profile Page', () => {
  it('Should return the home page', () => {
    const e = 3;
    expect(e).toBe(3);
  });
});
