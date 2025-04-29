import { render, screen } from '@testing-library/react';

import Home from './page';

describe('home Profile Page', () => {
  it('should test the home page header', () => {
    render(<Home />);
    const header = screen.getByRole('heading', {
      name: /axmin shrestha/i,
    });
    expect(header).toBeInTheDocument();
    // screen.logTestingPlaygroundURL();
    // screen.debug();
  });
});
