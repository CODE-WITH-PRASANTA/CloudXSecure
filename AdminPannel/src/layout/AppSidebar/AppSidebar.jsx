import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiTag,
  FiMail,
  FiStar,
  FiX,
  FiPhoneCall,
  FiChevronRight,
  FiEdit,
} from "react-icons/fi";

import logo from "../../Assets/Cloud X Secure.png";

const MENU = [
  { label: "Dashboard", icon: <FiHome />, path: "/dashboard" },

  {
    label: "Blog Management",
    icon: <FiEdit />,
    type: "dropdown",
    children: [
      { label: "Add Blog", path: "/blog/add" },
      { label: "Blog List", path: "/blog/list" },
    ],
  },

  { label: "Team Posting", icon: <FiUsers />, path: "/team" },
  { label: "Categories", icon: <FiTag />, path: "/categories" },
  { label: "Contact", icon: <FiMail />, path: "/admin-contact" },
  { label: "Cold Leads", icon: <FiPhoneCall />, path: "/cold-lead" },
  { label: "Testimonials", icon: <FiStar />, path: "/testimonials" },
];

const AppSidebar = ({ isOpen, mobileOpen, setMobileOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/blog")) {
      setOpenDropdown("Blog Management");
    }
  }, [location.pathname]);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
        fixed top-[72px] left-0
        h-[calc(100vh-72px)]
        bg-[#8b3a1a]
        text-white
        transition-all duration-300 ease-in-out
        z-50
        ${isOpen ? "w-[250px]" : "w-[70px]"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* LOGO */}
        <div className="flex items-center justify-center py-6 border-b border-white/20 relative">
          <img
            src={logo}
            alt="logo"
            className={`object-contain transition-all duration-300 ${
              isOpen ? "h-20" : "h-10"
            }`}
          />

          <button
            className="absolute right-3 top-4 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* MENU */}
        <nav className="p-3 space-y-2">
          {MENU.map((item, i) => {
            if (item.type === "dropdown") {
              const isOpenDropdown = openDropdown === item.label;

              return (
                <div key={i}>
                  {/* DROPDOWN HEADER */}
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`
                    w-full flex items-center justify-between
                    ${isOpen ? "px-4" : "justify-center"}
                    py-3 rounded-lg
                    transition-all duration-200
                    hover:bg-[#a8664c]
                  `}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[20px]">{item.icon}</span>
                      {isOpen && (
                        <span className="text-[15px] font-medium">
                          {item.label}
                        </span>
                      )}
                    </div>

                    {isOpen && (
                      <FiChevronRight
                        className={`transition-transform duration-300 ${
                          isOpenDropdown ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* DROPDOWN MENU */}
                  {isOpenDropdown && isOpen && (
                    <div className="sidebar-dropdown">
                      {item.children.map((sub, index) => (
                        <NavLink
                          key={index}
                          to={sub.path}
                          className={({ isActive }) =>
                            `sidebar-submenu ${
                              isActive ? "sidebar-submenu-active" : ""
                            }`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  `
                flex items-center
                ${isOpen ? "gap-4 px-4" : "justify-center"}
                py-3
                rounded-lg
                transition-all duration-200
                hover:bg-[#a8664c]
                ${isActive ? "bg-[#a8664c]" : ""}
              `
                }
              >
                <span className="text-[20px]">{item.icon}</span>

                {isOpen && (
                  <span className="text-[15px] font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* DROPDOWN CSS */}
        <style>
          {`
          .sidebar-dropdown{
              margin-left: 36px;
              margin-top: 6px;
              display:flex;
              flex-direction:column;
              gap:4px;
              animation: dropdownFade .2s ease;
          }

          .sidebar-submenu{
              padding:10px 12px;
              border-radius:8px;
              font-size:14px;
              color:#f1f5f9;
              transition:.2s;
          }

          .sidebar-submenu:hover{
              background:#a8664c;
          }

          .sidebar-submenu-active{
              background:#a8664c;
          }

          @keyframes dropdownFade{
            from{
              opacity:0;
              transform:translateY(-5px)
            }
            to{
              opacity:1;
              transform:translateY(0)
            }
          }
          `}
        </style>
      </aside>
    </>
  );
};

export default AppSidebar;