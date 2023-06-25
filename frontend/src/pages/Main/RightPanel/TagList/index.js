import Tag from 'components/tag';

const TagList = ({ allCategories, selectedCategory, handleCategoryFilter }) => {
  return (
    <>
      {allCategories.map((category) => (
        <Tag key={category} category={category} selectedCategory={selectedCategory} handleCategoryFilter={handleCategoryFilter} />
      ))}
    </>
  );
};

export default TagList;
