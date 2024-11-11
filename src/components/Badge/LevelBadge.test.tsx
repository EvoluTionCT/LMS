// LevelBadge.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LevelBadge from './LevelBadge';

describe('LevelBadge', () => {
  it('renders the correct style and text for Advanced level', () => {
    render(<LevelBadge level="Advanced" />);
    const badge = screen.getByText('Advanced');
    expect(badge).toHaveClass('bg-primary text-white');
    expect(badge).toBeInTheDocument();
  });

  it('renders the correct style and text for Intermediate level', () => {
    render(<LevelBadge level="Intermediate" />);
    const badge = screen.getByText('Intermediate');
    expect(badge).toHaveClass('bg-secondary text-primary');
    expect(badge).toBeInTheDocument();
  });

  it('renders the correct style and text for Beginner level', () => {
    render(<LevelBadge level="Beginner" />);
    const badge = screen.getByText('Beginner');
    expect(badge).toHaveClass('bg-gray-200 text-gray-700');
    expect(badge).toBeInTheDocument();
  });

  it('renders the correct style and text for an unknown level', () => {
    render(<LevelBadge level="Unknown" />);
    const badge = screen.getByText('Unknown');
    expect(badge).toHaveClass('bg-gray-100 text-gray-500');
    expect(badge).toBeInTheDocument();
  });
});
