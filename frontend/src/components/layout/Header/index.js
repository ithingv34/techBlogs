import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
