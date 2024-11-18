import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders "The Top Gastropubs" when the page loads', () => {
  render(<App />);
  const title = screen.getByText(/The Top Gastropubs/i);
  expect(title).toBeInTheDocument();
});
