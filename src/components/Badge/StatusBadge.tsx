import React from 'react';

type StatusBadgeProps = {
  status: string;
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span
      className={`text-xs font-medium rounded-full px-2 py-1 ${
        status === 'Open' ? 'text-green-600 bg-green-100' : 'text-gray-500 bg-gray-100'
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
