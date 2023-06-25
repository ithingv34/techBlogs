import SearchBar from 'components/search-bar';
import TagList from './TagList';

const RightPanel = ({ allCategories, selectedCategory, handleCategoryFilter }) => {
  return (
    <>
      <SearchBar />
      <div className="flex flex-wrap items-center gap-x-2 text-xs sm:">
        <TagList allCategories={allCategories} selectedCategory={selectedCategory} handleCategoryFilter={handleCategoryFilter} />
      </div>
    </>
  );
};

export default RightPanel;
