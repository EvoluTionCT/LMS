import React from 'react';

interface PaginationProps {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, current, onPageChange }) => {
  const createPaginationArray = () => {
    const pages = new Set<number | string>();

    pages.add(1);
    if (total > 1) pages.add(2);

    if (current > 3) pages.add("dots-before");

    if (current > 2 && current < total - 1) {
      pages.add(current - 1);
      pages.add(current);
      pages.add(current + 1);
    }

    if (current < total - 2) pages.add("dots-after");

    if (total > 1) pages.add(total - 1);
    if (total > 2) pages.add(total);

    return Array.from(pages);
  };

  const pages = createPaginationArray();

  return (
    <div className="flex justify-center space-x-2 mt-6">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
        className={`px-3 py-2 rounded-full ${current === 1 ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'}`}
      >
        &lt;
      </button>

      {/* Page numbers */}
      {pages.map((page, index) =>
        page === "dots-before" || page === "dots-after" ? (
          <span key={index} className="px-3 py-2">...</span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page as number)}
            className={`px-3 py-2 rounded-full ${
              current === page ? 'bg-blue-100 text-blue-600 border border-blue-400' : 'bg-white'
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next button */}
      <button
        onClick={() => onPageChange(current + 1)}
        disabled={current === total}
        className={`px-3 py-2 rounded-full ${current === total ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'}`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
