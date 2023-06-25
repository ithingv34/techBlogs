import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

const SearchBar = () => (
  <div className="relative flex items-center mb-8">
    <SearchOutlined className="absolute left-3 text-gray-500 cursor-auto" />
    <input
      type="text"
      placeholder="Search for keyword"
      className="py-2 pl-10 pr-8 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
    />
    <CloseOutlined className="absolute right-3 text-gray-500 cursor-pointer" />
  </div>
);
export default SearchBar;
