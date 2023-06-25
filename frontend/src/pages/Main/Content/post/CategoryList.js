import PropTypes from 'prop-types';
import { Chip } from '@material-tailwind/react';

const CategoryList = ({ categories }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <Chip key={index} value={category} className="rounded-full px-3 py-2 mt-2 w-auto font-normal bg-gray-100 text-gray-500">
            {category}
          </Chip>
        );
      })}
    </>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CategoryList;
