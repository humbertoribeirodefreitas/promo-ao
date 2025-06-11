import React from 'react';

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, active, onClick, count }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
        active
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
      }`}
    >
      <span>{label}</span>
      <span className={`text-xs px-2 py-1 rounded-full ${
        active ? 'bg-white/20' : 'bg-gray-100'
      }`}>
        {count}
      </span>
    </button>
  );
};

export default FilterButton;