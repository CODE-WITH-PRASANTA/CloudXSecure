import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
import logo from "../../Assets/logo.avif";

const AppSidebar = ({ isOpen, mobileOpen, setMobileOpen }) => {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? "" : key);
  };

  return (
    <>
      {/* ================= MOBILE OVERLAY ================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed lg:static z-50 h-screen
          bg-[#2b3a4a] text-slate-200
          transition-all duration-300
          ${isOpen ? "w-64" : "w-20"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
          <img src={logo} className="w-8 h-8" alt="logo" />
          {isOpen && (
            <span className="font-semibold tracking-wide">ENDLESS</span>
          )}

          <button
            className="ml-auto lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* ================= PROFILE ================= */}
        <div className="flex flex-col items-center py-6 border-b border-white/10">
          <img
            src="https://i.pravatar.cc/100"
            className="w-16 h-16 rounded-full mb-2"
            alt="profile"
          />
          {isOpen && (
            <>
              <p className="text-sm font-semibold">ELANA</p>
              <p className="text-xs text-slate-400">GENERAL MANAGER</p>
            </>
          )}
        </div>

        {/* ================= MENU ================= */}
        <nav className="px-3 py-4 text-sm">
          <ul className="space-y-1">

            {/* DASHBOARD */}
            <SidebarLink
              to="/dashboard"
              icon={<FiHome />}
              label="Dashboard"
              open={isOpen}
            />

            {/* BLOG MANAGEMENT */}
            <li>
              <button
                onClick={() => toggleMenu("blog")}
                className="sidebar-item w-full justify-between"
              >
                <div className="flex items-center gap-3">
                  <FiEdit />
                  {isOpen && <span>Blog Management</span>}
                </div>
                {isOpen && (
                  <FiChevronRight
                    className={`transition ${
                      openMenu === "blog" ? "rotate-90" : ""
                    }`}
                  />
                )}
              </button>

              {openMenu === "blog" && isOpen && (
                <div className="ml-9 mt-1 space-y-1">
                  <NavLink to="/blog/add" className="submenu">
                    Add Blog
                  </NavLink>
                  <NavLink to="/blog/list" className="submenu">
                    Blog List
                  </NavLink>
                </div>
              )}
            </li>

            {/* TEAM */}
            <SidebarLink
              to="/team"
              icon={<FiUsers />}
              label="Team Posting"
              open={isOpen}
            />

            {/* CATEGORIES */}
            <SidebarLink
              to="/categories"
              icon={<FiTag />}
              label="Categories"
              open={isOpen}
            />

            {/* ================= PLANS & PRICING (FIXED) ================= */}
            <li>
              <button
                onClick={() => toggleMenu("pricing")}
                className="sidebar-item w-full justify-between"
              >
                <div className="flex items-center gap-3">
                  <FiDollarSign />
                  {isOpen && <span>Plans & Pricing</span>}
                </div>

                {isOpen && (
                  <FiChevronRight
                    className={`transition ${
                      openMenu === "pricing" ? "rotate-90" : ""
                    }`}
                  />
                )}
              </button>

              {openMenu === "pricing" && isOpen && (
                <div className="ml-9 mt-1 space-y-1">
                  <NavLink to="/pricing/post" className="submenu">
                    Post Plan
                  </NavLink>
                  <NavLink to="/pricing/list" className="submenu">
                    View Plan
                  </NavLink>
                </div>
              )}
            </li>

            {/* CONTACT */}
            <SidebarLink
              to="/contacts"
              icon={<FiMail />}
              label="Contact Management"
              open={isOpen}
            />

            {/* TESTIMONIAL */}
            <SidebarLink
              to="/testimonials"
              icon={<FiStar />}
              label="Testimonials"
              open={isOpen}
            />

          </ul>
        </nav>
      </aside>

      {/* ================= LOCAL STYLES ================= */}
      <style>{`
        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .sidebar-item:hover {
          background: rgba(255,255,255,0.08);
        }
        .submenu {
          display: block;
          padding: 6px 10px;
          border-radius: 6px;
          color: #cbd5e1;
        }
        .submenu:hover {
          background: rgba(255,255,255,0.08);
          color: white;
        }
      `}</style>
    </>
  );
};

const SidebarLink = ({ to, icon, label, open }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `sidebar-item ${isActive ? "bg-white/10 text-white" : ""}`
    }
  >
    {icon}
    {open && <span>{label}</span>}
  </NavLink>
);

export default AppSidebar;
