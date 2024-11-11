import React, { useState, useRef, useEffect } from 'react';
import { FilterDropdownProps } from './types';
import Image from 'next/image';

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  value,
  onChange
}) => {
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

  const selectedOption = value || 'All';

  return (
    <div ref={dropdownRef} className="flex-1">
      {/* Clickable Area */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 w-full"
      >
        <span className="text-[15px] max-w-40 truncate whitespace-nowrap">{label}: {selectedOption}</span>
        <Image
          src="/images/arrow_down.svg"
          alt="dropdownfilter"
          width={32}
          height={32}
          className="w-4 h-4 shrink-0"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 z-50 mt-2 w-60 rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden">
          {/* All Option */}
          <button
            className={`w-full text-left px-4 py-3 text-[15px] transition-colors ${
              !value ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => {
              onChange('');
              setIsOpen(false);
            }}
          >
            All
          </button>

          {/* Other Options */}
          {options.map((option) => (
            <button
              key={option}
              className={`w-full text-left px-4 py-3 text-[15px] transition-colors ${
                value === option ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;