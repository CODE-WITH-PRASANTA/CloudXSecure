import {
  FiMenu,
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiStar,
} from "react-icons/fi";

const AppHeader = ({ sidebarOpen, setSidebarOpen, setMobileOpen }) => {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-6 shadow-sm z-30">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* Hamburger (ALL screens now) */}
        <button
          onClick={() => {
            if (window.innerWidth >= 1024) {
              setSidebarOpen(!sidebarOpen); // desktop collapse
            } else {
              setMobileOpen(true); // mobile slide
            }
          }}
          className="text-2xl text-slate-700 sm:cursor-pointer"
        >
          <FiMenu />
        </button>

        <span className="hidden sm:block text-sm text-slate-500">
          Dashboard / Default
        </span>
      </div>

      {/* SEARCH (unchanged desktop) */}
      <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-5 py-2 w-[420px]">
        <FiSearch className="text-slate-400" />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none ml-3 w-full text-sm"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <span className="hidden md:block text-sm">EN</span>
        <FiBell className="text-xl text-slate-600" />
        <FiMessageSquare className="text-xl text-slate-600" />
        <FiStar className="text-xl text-orange-400" />
        <img
          src="https://i.pravatar.cc/40"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </header>
  );
};

export default AppHeader;
