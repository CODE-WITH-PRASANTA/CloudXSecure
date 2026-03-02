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
  FiPhoneCall,
} from "react-icons/fi";
import logo from "../../assets/cloud.png";

/* ================= MENU CONFIG ================= */

const MENU = [
  {
    type: "link",
    label: "Dashboard",
    icon: <FiHome size={18} />,
    path: "/dashboard",
  },
  {
    type: "submenu",
    key: "blog",
    label: "Blog Management",
    icon: <FiEdit size={18} />,
    children: [
      { label: "Add Blog", path: "/blog/add" },
      { label: "Blog List", path: "/blog/list" },
    ],
  },
  {
    type: "link",
    label: "Team Posting",
    icon: <FiUsers size={18} />,
    path: "/team",
  },
  {
    type: "link",
    label: "Categories",
    icon: <FiTag size={18} />,
    path: "/categories",
  },
  {
    type: "submenu",
    key: "pricing",
    label: "Plans & Pricing",
    icon: <FiDollarSign size={18} />,
    children: [
      { label: "Post Plan", path: "/pricing/post" },
      { label: "View Plan", path: "/pricing/list" },
    ],
  },
  {
    type: "link",
    label: "Contact Management",
    icon: <FiMail size={18} />,
    path: "/admin-contact",
  },
  {
    type: "link",
    label: "Cold Leads",
    icon: <FiPhoneCall size={18} />,
    path: "/cold-lead",
  },
  {
    type: "link",
    label: "Testimonials",
    icon: <FiStar size={18} />,
    path: "/testimonials",
  },
];

const AppSidebar = ({ isOpen, mobileOpen, setMobileOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  // Auto open submenu based on route
  useEffect(() => {
    if (location.pathname.startsWith("/blog")) {
      setOpenMenu("blog");
    } else if (location.pathname.startsWith("/pricing")) {
      setOpenMenu("pricing");
    } else {
      setOpenMenu(null);
    }
  }, [location.pathname]);

  const toggleMenu = (key) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed lg:static z-50 h-screen
        bg-gradient-to-b from-[#0f172a] to-[#1e293b]
        text-slate-200 shadow-2xl
        transition-all duration-500 ease-in-out
        ${isOpen ? "w-64" : "w-20"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
          <img src={logo} className="w-15 h-15" alt="logo" />
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

        {/* PROFILE */}
        <div className="flex flex-col items-center py-6 border-b border-white/10">
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
                          className={`transition-transform duration-300 ${
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

export default AppSidebar;