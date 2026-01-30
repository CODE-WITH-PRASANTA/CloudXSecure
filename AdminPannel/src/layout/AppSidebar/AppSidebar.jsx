import {
  FiHome,
  FiGrid,
  FiLayers,
  FiBox,
  FiImage,
  FiFileText,
  FiTable,
  FiClock,
  FiBarChart2,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

const AppSidebar = ({
  sidebarOpen,
  mobileOpen,
  setMobileOpen,
}) => {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:static z-40 h-screen
          bg-[#2f3e4e] text-white
          transition-all duration-300
          ${sidebarOpen ? "lg:w-64" : "lg:w-20"}
          ${mobileOpen ? "translate-x-0 w-64" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >

        {/* Mobile close */}
        <div className="lg:hidden flex justify-end p-4">
          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setMobileOpen(false)}
          />
        </div>

        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-6 border-b border-white/10">
          <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center font-bold">
            E
          </div>
          {sidebarOpen && <span className="font-bold">ENDLESS</span>}
        </div>

        {/* User */}
        <div className="flex flex-col items-center py-6 border-b border-white/10">
          <img
            src="https://i.pravatar.cc/80"
            className="w-14 h-14 rounded-full mb-2"
          />
          {sidebarOpen && (
            <>
              <h4 className="font-semibold">ELANA</h4>
              <p className="text-xs text-slate-300">GENERAL MANAGER</p>
            </>
          )}
        </div>

        {/* Menu */}
        <nav className="px-3 py-4 space-y-1 text-sm">
          <Item icon={<FiHome />} label="Dashboard" show={sidebarOpen} />
          <Item icon={<FiGrid />} label="Widgets" show={sidebarOpen} />
          <Item icon={<FiLayers />} label="Base" show={sidebarOpen} />
          <Item icon={<FiBox />} label="Advance" show={sidebarOpen} />
          <Item icon={<FiImage />} label="Gallery" show={sidebarOpen} />
          <Item icon={<FiFileText />} label="Forms" show={sidebarOpen} />
          <Item icon={<FiTable />} label="Tables" show={sidebarOpen} />
          <Item icon={<FiClock />} label="Timeline" show={sidebarOpen} />
          <Item icon={<FiBarChart2 />} label="Charts" show={sidebarOpen} />
        </nav>
      </aside>
    </>
  );
};

const Item = ({ icon, label, show }) => (
  <div className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-white/10">
    <div className="flex items-center gap-3">
      {icon}
      {show && <span>{label}</span>}
    </div>
    {show && <FiChevronRight className="text-xs opacity-50" />}
  </div>
);

export default AppSidebar;
