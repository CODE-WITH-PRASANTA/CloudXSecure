import { useState, useRef, useEffect } from "react";
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiStar,
  FiSettings,
  FiLogOut,
  FiUser,
} from "react-icons/fi";

const AppHeader = ({ sidebarOpen, setSidebarOpen, setMobileOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white flex items-center justify-between px-6 shadow-sm z-30 relative">

      {/* ================= LEFT ================= */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            if (window.innerWidth >= 1024) {
              setSidebarOpen(!sidebarOpen);
            } else {
              setMobileOpen(true);
            }
          }}
          className="text-2xl text-slate-700"
        >
          <FiMenu />
        </button>

        <span className="hidden sm:block text-sm text-slate-500">
          Dashboard / Default
        </span>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-5 py-2 w-[420px]">
        <FiSearch className="text-slate-400" />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none ml-3 w-full text-sm"
        />
      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-4 relative" ref={profileRef}>
        <span className="hidden md:block text-sm">EN</span>

        <FiBell className="text-xl text-slate-600 cursor-pointer" />
        <FiMessageSquare className="text-xl text-slate-600 cursor-pointer" />
        <FiStar className="text-xl text-orange-400 cursor-pointer" />

        {/* PROFILE */}
        <img
          src="https://i.pravatar.cc/40"
          className="w-9 h-9 rounded-full cursor-pointer border"
          onClick={() => setProfileOpen(!profileOpen)}
          alt="profile"
        />

        {/* ================= DROPDOWN ================= */}
        {profileOpen && (
          <div className="absolute right-0 top-14 w-52 bg-white rounded-xl shadow-lg border overflow-hidden animate-fade">
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-semibold text-slate-700">
                Jone Copper
              </p>
              <p className="text-xs text-slate-400">Admin</p>
            </div>

            <ul className="text-sm">
              <li className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 cursor-pointer">
                <FiUser />
                Profile
              </li>
              <li className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 cursor-pointer">
                <FiSettings />
                Settings
              </li>
              <li className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 cursor-pointer">
                <FiLogOut />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
