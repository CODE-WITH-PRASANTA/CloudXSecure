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
  FiPhoneCall,
} from "react-icons/fi";
import logo from "../../Assets/logo.avif";

/* ================= MENU CONFIG ================= */

const MENU = [
  {
    type: "link",
    label: "Dashboard",
    icon: <FiHome />,
    path: "/dashboard",
  },
  {
    type: "submenu",
    key: "blog",
    label: "Blog Management",
    icon: <FiEdit />,
    children: [
      { label: "Add Blog", path: "/blog/add" },
      { label: "Blog List", path: "/blog/list" },
    ],
  },
  {
    type: "link",
    label: "Team Posting",
    icon: <FiUsers />,
    path: "/team",
  },
  {
    type: "link",
    label: "Categories",
    icon: <FiTag />,
    path: "/categories",
  },
  {
    type: "submenu",
    key: "pricing",
    label: "Plans & Pricing",
    icon: <FiDollarSign />,
    children: [
      { label: "Post Plan", path: "price-plan/post" },
      { label: "View Plan", path: "/pricing/list" },
    ],
  },
  {
    type: "link",
    label: "Contact Management",
    icon: <FiMail />,
    path: "/admin-contact",
  },
  
  {
    type: "link",
    label: "Cold Leads",
    icon: <FiPhoneCall />,
    path: "/cold-lead",
  },
  {
    type: "link",
    label: "Testimonials",
    icon: <FiStar />,
    path: "/testimonials",
  },
];

const AppSidebar = ({ isOpen, mobileOpen, setMobileOpen }) => {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? "" : key);
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:static z-50 h-screen
          bg-[#2b3a4a] text-slate-200
          transition-all duration-300
          ${isOpen ? "w-64" : "w-20"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* LOGO */}
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

        {/* PROFILE */}
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

        {/* MENU */}
        <nav className="px-3 py-4 text-sm">
          <ul className="space-y-1">

            {MENU.map((item, index) => {
              if (item.type === "link") {
                return (
                  <SidebarLink
                    key={index}
                    to={item.path}
                    icon={item.icon}
                    label={item.label}
                    open={isOpen}
                  />
                );
              }

              if (item.type === "submenu") {
                return (
                  <li key={index}>
                    <button
                      onClick={() => toggleMenu(item.key)}
                      className="sidebar-item w-full justify-between"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        {isOpen && <span>{item.label}</span>}
                      </div>

                      {isOpen && (
                        <FiChevronRight
                          className={`transition ${
                            openMenu === item.key ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </button>

                    {openMenu === item.key && isOpen && (
                      <div className="ml-9 mt-1 space-y-1">
                        {item.children.map((sub, i) => (
                          <NavLink
                            key={i}
                            to={sub.path}
                            className="submenu"
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return null;
            })}

          </ul>
        </nav>
      </aside>

      {/* STYLES */}
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