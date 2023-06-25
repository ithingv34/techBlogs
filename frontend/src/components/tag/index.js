import { Chip } from '@material-tailwind/react';

const Tag = ({ category, selectedCategory, handleCategoryFilter }) => {
  return (
    <Chip
      value={category}
      className={`rounded-full px-3 py-2 mt-2 w-auto font-normal ${
        selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'
      }`}
      onClick={(e) => {
        e.preventDefault();
        handleCategoryFilter(category);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCategoryFilter(category);
        }
      }}
    >
      {category}
    </Chip>
  );
};

export default Tag;
