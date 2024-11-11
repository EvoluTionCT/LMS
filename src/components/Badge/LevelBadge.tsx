import React from 'react';

type LevelBadgeProps = {
  level: string;
};

const LevelBadge: React.FC<LevelBadgeProps> = ({ level }) => {
  const getBadgeStyles = () => {
    switch (level) {
      case 'Advanced':
        return 'bg-primary text-white';
      case 'Intermediate':
        return 'bg-secondary text-primary';
      case 'Beginner':
        return 'bg-gray-200 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };

  return (
    <span className={`text-xs font-medium rounded-full px-3 py-1 ${getBadgeStyles()}`}>
      {level}
    </span>
  );
};

export default LevelBadge;
