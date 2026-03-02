import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiEdit,
  FiUsers,
  FiTag,
  FiDollarSign,
  FiMail,
  FiStar,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import logo from "../../assets/cloud.png";

const AppSidebar = ({ isOpen, mobileOpen, setMobileOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  // Auto open parent menu when route matches
  useEffect(() => {
    if (location.pathname.startsWith("/blog")) {
      // setOpenMenu("blog");
    } else if (location.pathname.startsWith("/pricing")) {
      // setOpenMenu("pricing");
    } else {
      // setOpenMenu(null);
    }
  }, [location.pathname]);

  const toggleMenu = (key) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static z-50 h-screen
        bg-gradient-to-b from-[#0f172a] to-[#1e293b]
        text-slate-200 shadow-2xl
        transition-all duration-500 ease-in-out
        ${isOpen ? "w-64" : "w-20"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/5">
          <img src={logo} className="w-15 h-15 rounded-md" alt="logo" />
          {isOpen && (
            <span className="text-lg font-semibold tracking-wide text-white">
              ENDLESS
            </span>
          )}
          <button
            className="ml-auto lg:hidden text-white"
            onClick={() => setMobileOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center py-6 border-b border-white/5">
          <img
            src="https://i.pravatar.cc/100"
            className="w-16 h-16 rounded-full mb-3 ring-2 ring-indigo-500/70"
            alt="profile"
          />
          {isOpen && (
            <>
              <p className="text-sm font-semibold text-white tracking-wide">
                ELANA
              </p>
              <p className="text-xs text-slate-400">GENERAL MANAGER</p>
            </>
          )}
        </div>

        {/* Menu */}
        <nav className="px-3 py-6 text-sm">
          <ul className="space-y-2">

            <SidebarLink
              to="/dashboard"
              icon={<FiHome size={18} />}
              label="Dashboard"
              open={isOpen}
            />

            <DropdownMenu
              label="Blog Management"
              icon={<FiEdit size={18} />}
              open={isOpen}
              active={openMenu === "blog"}
              toggle={() => toggleMenu("blog")}
            >
              <NavLink to="/blog/add" className="submenu">Add Blog</NavLink>
              <NavLink to="/blog/list" className="submenu">Blog List</NavLink>
            </DropdownMenu>

            <SidebarLink
              to="/team"
              icon={<FiUsers size={18} />}
              label="Team Posting"
              open={isOpen}
            />

            <SidebarLink
              to="/categories"
              icon={<FiTag size={18} />}
              label="Categories"
              open={isOpen}
            />

            <DropdownMenu
              label="Plans & Pricing"
              icon={<FiDollarSign size={18} />}
              open={isOpen}
              active={openMenu === "pricing"}
              toggle={() => toggleMenu("pricing")}
            >
              <NavLink to="/pricing/post" className="submenu">Post Plan</NavLink>
              <NavLink to="/pricing/list" className="submenu">View Plan</NavLink>
            </DropdownMenu>

            <SidebarLink
              to="/contacts"
              icon={<FiMail size={18} />}
              label="Contact Management"
              open={isOpen}
            />

            <SidebarLink
              to="/testimonials"
              icon={<FiStar size={18} />}
              label="Testimonials"
              open={isOpen}
            />

          </ul>
        </nav>
      </aside>

      {/* Styling */}
      <style>{`
        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 11px 14px;
          border-radius: 12px;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .sidebar-item:hover {
          background: rgba(255,255,255,0.06);
          transform: translateX(4px);
        }

        .sidebar-item.active {
          background: linear-gradient(90deg, #6366f1, #4f46e5);
          color: white;
          box-shadow: 0 6px 18px rgba(99,102,241,0.35);
        }

        .submenu {
          display: block;
          padding: 8px 12px;
          margin-left: 38px;
          border-radius: 8px;
          color: #94a3b8;
          font-size: 13px;
          transition: all 0.3s ease;
        }

        .submenu:hover {
          background: rgba(255,255,255,0.08);
          color: white;
          transform: translateX(4px);
        }

        .dropdown {
          overflow: hidden;
          transition: all 0.4s ease;
        }
      `}</style>
    </>
  );
};

const SidebarLink = ({ to, icon, label, open }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `sidebar-item ${isActive ? "active" : ""}`
    }
  >
    {icon}
    {open && <span>{label}</span>}
  </NavLink>
);

const DropdownMenu = ({ label, icon, open, active, toggle, children }) => (
  <li>
    <button
      onClick={toggle}
      className={`sidebar-item w-full justify-between ${
        active ? "active" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        {open && <span>{label}</span>}
      </div>

      {open && (
        <FiChevronRight
          className={`transition-transform duration-300 ${
            active ? "rotate-90 text-indigo-300" : ""
          }`}
        />
      )}
    </button>

    <div
      className="dropdown"
      style={{
        maxHeight: active && open ? "300px" : "0px",
        opacity: active && open ? 1 : 0,
      }}
    >
      {children}
    </div>
  </li>
);

export default AppSidebar;