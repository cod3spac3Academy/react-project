import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders CardInfoWrapper component', () => {
  render(<App />);
  const cardInfoWrapperComponents = screen.getAllByTestId('card-info-wrapper');
  expect(cardInfoWrapperComponents.length).toBe(3);
});
