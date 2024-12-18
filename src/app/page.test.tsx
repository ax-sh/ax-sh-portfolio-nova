import { render, screen } from '@testing-library/react';

import Home from './page';

function sum(a: number, b: number) {
  return a + b;
}

test('adds 1 + 2 to equal 3', async () => {
  expect(sum(1, 2)).toBe(3);
});

describe('Home Profile Page', () => {
  it('Should test the home page header', () => {
    render(<Home />);
    const header = screen.getByRole('heading', {
      name: /axmin shrestha/i,
    });
    expect(header).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
    // screen.debug();
    // expect(e).tobeInThe(3);
  });
});
