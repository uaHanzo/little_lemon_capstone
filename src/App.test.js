import { fireEvent, render, screen } from '@testing-library/react';
import Reserve_section from './components/Reserve_section';

test('Renders the BookingForm heading', () => {
  render(<Reserve_section />);
  const headingElement = screen.getByText("Reserve details");
  expect(headingElement).toBeInTheDocument();
})
