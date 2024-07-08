const Header = () => {
  return (
    <div className="justify-center w-full mx-auto bg-gray-100">
      <div className="flex items-center justify-center h-12 text-white bg-gradient-to-t from-gray-800 via-gray-700 to-gray-500">
        <div className="flex items-center justify-center gap-4">
          <div className="text-xs font-medium">
            <span>Windstatic V2 is here with new designs</span>
          </div>
          <div className="hidden w-px h-6 sm:block bg-white/20"></div>
          <div>
            <a
              className="text-xs flex font-semibold items-center justify-center px-4 py-2 rounded-lg transition-all h-8 text-white bg-gradient-to-b from-white/[.105] hover:to-white/[.25] ring-1 ring-inset ring-white/20 to-white/[.15]"
              href="#_"
            >
              Learn more &nbsp; →
            </a>
          </div>
        </div>
      </div>
      <div
        x-data="{ open: false }"
        className="flex flex-col w-full px-8 py-2 mx-auto md:px-12 md:items-center md:justify-between md:flex-row lg:px-32 max-w-7xl"
      >
        <div className="flex flex-row items-center justify-between text-black">
          <a
            className="inline-flex items-center gap-3 text-xl font-bold tracking-tight text-black"
            href="/"
          >
            <span> ❖ </span>
            <span>Windstatic</span>
          </a>
          <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
            {/* <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path :className="{'hidden': open, 'inline-flex': !open }" className="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path :className="{'hidden': !open, 'inline-flex': open }" className="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg> */}
          </button>
        </div>
        <nav className="flex-col items-center flex-grow hidden gap-3 p-4 px-5 text-sm font-medium text-gray-500 md:px-0 md:pb-0 md:flex md:justify-start md:flex-row lg:p-0 md:mt-0">
          <a
            className="hover:text-black focus:outline-none focus:text-gray-500 md:ml-auto"
            href="#_"
          >
            Features
          </a>
          <a
            className="hover:text-black focus:outline-none focus:text-gray-500"
            href="#_"
          >
            About
          </a>
          <a
            className="inline-flex items-center justify-center w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
            href="#_"
            role="button"
          >
            Button
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
