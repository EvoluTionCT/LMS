import React from 'react';
import FilterDropdown from './FilterDropdown';
import SortDropdown from './SortDropdown';
import { FiltersProps } from './types';

const Filters: React.FC<FiltersProps> = ({
  instructors,
  levels,
  statuses,
  selectedInstructor,
  selectedLevel,
  selectedStatus,
  selectedSort,
  onFilterChange,
}) => {
  return (
    <div className="container mx-auto px-4">
      {/* Mobile Layout */}
      <div className="flex flex-col space-y-4 lg:hidden">
        <div className="flex items-center gap-4">
          <div className="flex-grow">
            <FilterDropdown
              label="Instructor"
              options={instructors}
              value={selectedInstructor}
              onChange={(value) => onFilterChange('instructor', value)}
            />
          </div>

          <div className="flex-shrink-0">
            <SortDropdown
              value={selectedSort}
              onChange={(value) => onFilterChange('sort', value)}
            />
          </div>
        </div>

        {/* Level and Status Filters in a Column */}
        <div className="flex flex-col gap-4">
          {/* Level Filter */}
          <div className="flex-grow">
            <FilterDropdown
              label="Level"
              options={levels}
              value={selectedLevel}
              onChange={(value) => onFilterChange('level', value)}
            />
          </div>

          {/* Status Filter */}
          <div className="flex-grow">
            <FilterDropdown
              label="Status"
              options={statuses}
              value={selectedStatus}
              onChange={(value) => onFilterChange('status', value)}
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row lg:justify-between lg:space-y-0">
        <div className="flex lg:flex-row gap-6 lg:gap-12">
          {/* Instructor Filter */}
          <div className="relative">
            <FilterDropdown
              label="Instructor"
              options={instructors}
              value={selectedInstructor}
              onChange={(value) => onFilterChange('instructor', value)}
            />
          </div>

          {/* Level Filter */}
          <div className="relative">
            <FilterDropdown
              label="Level"
              options={levels}
              value={selectedLevel}
              onChange={(value) => onFilterChange('level', value)}
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <FilterDropdown
              label="Status"
              options={statuses}
              value={selectedStatus}
              onChange={(value) => onFilterChange('status', value)}
            />
          </div>
        </div>

        {/* Sort Filter */}
        <div className="ml-4">
          <SortDropdown
            value={selectedSort}
            onChange={(value) => onFilterChange('sort', value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
