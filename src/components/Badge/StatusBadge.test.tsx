import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatusBadge from './StatusBadge';

describe('StatusBadge Component', () => {
  it('renders with green styling when status is "Open"', () => {
    render(<StatusBadge status="Open" />);
    const badge = screen.getByText('Open');
    
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('text-green-600');
    expect(badge).toHaveClass('bg-green-100');
  });

  it('renders with gray styling when status is not "Open"', () => {
    render(<StatusBadge status="Closed" />);
    const badge = screen.getByText('Closed');
    
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('text-gray-500');
    expect(badge).toHaveClass('bg-gray-100');
  });

  it('displays the correct status text', () => {
    const statusText = 'In Progress';
    render(<StatusBadge status={statusText} />);
    const badge = screen.getByText(statusText);

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent(statusText);
  });
});
