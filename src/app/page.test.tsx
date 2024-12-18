import { render } from '@testing-library/react';

import Home from './page';

function sum(a: number, b: number) {
  return a + b;
}

test('adds 1 + 2 to equal 3', async () => {
  expect(sum(1, 2)).toBe(3);
});

describe('Home Profile Page', () => {
  it('Should return the home page', () => {
    const ele = render(<Home />);
    expect(ele).toBeInTheDocument();
    // expect(e).tobeInThe(3);
  });
});