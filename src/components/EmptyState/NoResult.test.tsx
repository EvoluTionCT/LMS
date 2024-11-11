import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoResult from './NoResult';

describe('NoResult Component', () => {
  it('renders the icon image correctly', () => {
    render(<NoResult />);
    const iconImage = screen.getByAltText('NoResult');
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute('src', '/images/file-search.svg');
    expect(iconImage).toHaveClass('w-24 h-24 shrink-0');
  });

  it('renders the "No result" message', () => {
    render(<NoResult />);
    const messageHeading = screen.getByRole('heading', { level: 2 });
    expect(messageHeading).toBeInTheDocument();
    expect(messageHeading).toHaveTextContent('No result');
  });

  it('renders the suggestion text', () => {
    render(<NoResult />);
    const suggestionText = screen.getByText('Try to remove filters and sorting');
    expect(suggestionText).toBeInTheDocument();
    expect(suggestionText).toHaveClass('text-gray-500');
  });

  it('has correct container styles', () => {
    render(<NoResult />);
    const containerDiv = screen.getByRole('img', { hidden: true }).parentElement;
    expect(containerDiv).toHaveClass('flex flex-col items-center justify-center text-center py-20 text-gray-600');
  });
});
