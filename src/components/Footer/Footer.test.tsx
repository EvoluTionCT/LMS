import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders footer text correctly', () => {
    render(<Footer />);
    const footerText = screen.getByText(/Learning Management System ©2024/i);
    expect(footerText).toBeInTheDocument();
  });

  it('has correct footer styles', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('p-4');
    expect(footerElement).toHaveClass('bg-gray-100');
    expect(footerElement).toHaveClass('text-center');
    expect(footerElement).toHaveClass('text-gray-500');
  });
});
