import { render } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  it('renders correctly with minimal pages', () => {
    const { getByText, queryByText } = render(
      <Pagination total={3} current={1} onPageChange={mockOnPageChange} />
    );

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(queryByText('...')).not.toBeInTheDocument();
  });

  it('renders correctly with many pages', () => {
    const { getByText, getAllByText } = render(
      <Pagination total={10} current={5} onPageChange={mockOnPageChange} />
    );

    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('6')).toBeInTheDocument();

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('9')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();

    const dots = getAllByText('...');
    expect(dots).toHaveLength(2);
  });

  it('handles edge case with current page near start', () => {
    const { getByText } = render(
      <Pagination total={10} current={2} onPageChange={mockOnPageChange} />
    );

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('...')).toBeInTheDocument();
  });

  it('applies correct styling to current page', () => {
    const { getByText } = render(
      <Pagination total={5} current={3} onPageChange={mockOnPageChange} />
    );

    const currentPageButton = getByText('3');
    expect(currentPageButton).toHaveClass('bg-blue-100');
    expect(currentPageButton).toHaveClass('text-blue-600');
    expect(currentPageButton).toHaveClass('border');
    expect(currentPageButton).toHaveClass('border-blue-400');
  });
});