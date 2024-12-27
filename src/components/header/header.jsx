

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-gray-800">YourLogo</span>
        </div>

        {/* Menu Section */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-500">
            About
          </a>
          <a href="#services" className="text-gray-600 hover:text-blue-500">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
