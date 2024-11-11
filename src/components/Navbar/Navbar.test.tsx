import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Navbar Component', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('renders logo correctly', () => {
      render(<Navbar />);
      
      // ใช้ selector ให้เหมาะสมกับโครงสร้างของโลโก้
      const logoElement = screen.getByRole('heading', { level: 1 });
      expect(logoElement).toHaveTextContent(/LMS/i);
    });
  
    it('renders the "Courses" link for desktop view', () => {
      render(<Navbar />);
      const desktopLink = screen.getByText(/Courses/i);
      expect(desktopLink).toBeInTheDocument();
      expect(desktopLink).toHaveAttribute('href', '/courses');
    });
  });
