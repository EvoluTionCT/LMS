export type FilterDropdownProps = {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
  };
  
  export type FiltersProps = {
    instructors: string[];
    levels: string[];
    statuses: string[];
    selectedInstructor: string;
    selectedLevel: string;
    selectedStatus: string;
    selectedSort: string;
    onFilterChange: (key: string, value: string) => void;
  };
  