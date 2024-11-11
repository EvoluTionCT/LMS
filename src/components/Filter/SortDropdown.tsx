import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type SortDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortOptions = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'title-asc', label: 'Course title (A-Z)' },
    { value: 'title-desc', label: 'Course title (Z-A)' },
    { value: 'enrollment-desc', label: 'Enrollment count (High to low)' },
    { value: 'enrollment-asc', label: 'Enrollment count (Low to high)' },
    { value: 'duration-desc', label: 'Course duration (High to low)' },
    { value: 'duration-asc', label: 'Course duration (Low to high)' },
  ];

  const currentOption = sortOptions.find(option => option.value === value);
  const buttonText = currentOption
    ? `Sort by: ${currentOption.label}`
    : 'Sort by';

  return (
    <div ref={dropdownRef} className="relative max-w-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 w-full max-w-40"
      >
        <Image
          src="/images/sort.svg"
          alt="Sort"
          width={32}
          height={32}
          className="w-4 h-4 shrink-0"
        />
        <span className="text-base truncate whitespace-nowrap">{buttonText}</span>
        <span className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-1 w-72 rounded-lg bg-white shadow-lg border border-gray-200">
          <div className="py-1">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className={`w-full text-left px-4 py-2 text-sm ${value === option.value
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-blue-50'
                  }`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
