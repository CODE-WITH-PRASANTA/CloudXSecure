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
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import API from "../../api/axios";

const AppHeader = ({ sidebarOpen, setSidebarOpen, setMobileOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (!result.isConfirmed) return;

    try {
      await API.post("/auth/logout");
    } catch (error) {}

    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("admin");

    navigate("/login");
    window.location.reload();
  };

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
    <header
      className="
      fixed top-0 left-0 right-0
      h-[72px]
      bg-[#c7a77c]
      flex items-center justify-between
      px-6
      z-40
      shadow-sm
    "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            if (window.innerWidth >= 1024) {
              setSidebarOpen(!sidebarOpen);
            } else {
              setMobileOpen(true);
            }
          }}
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/40 hover:bg-white/60 transition"
        >
          <FiMenu size={20} />
        </button>

        <h1 className="text-lg font-semibold text-slate-800">
          Admin Dashboard
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5" ref={profileRef}>
        <FiBell className="text-xl text-slate-700 cursor-pointer" />
        <FiMessageSquare className="text-xl text-slate-700 cursor-pointer" />

        <img
          src="https://i.pravatar.cc/150?img=12"
          className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
          onClick={() => setProfileOpen(!profileOpen)}
          alt=""
        />

        {profileOpen && (
          <div className="absolute right-6 top-16 w-56 bg-white rounded-xl shadow-lg border">
            <div className="p-4 border-b">
              <p className="font-semibold">Jone Copper</p>
              <p className="text-xs text-slate-500">Super Admin</p>
            </div>

            <div className="text-sm">
              <div className="p-3 hover:bg-slate-100 cursor-pointer flex gap-2 items-center">
                <FiUser /> Profile
              </div>

              <div className="p-3 hover:bg-slate-100 cursor-pointer flex gap-2 items-center">
                <FiSettings /> Settings
              </div>

              <div
                onClick={handleLogout}
                className="p-3 hover:bg-red-50 text-red-500 cursor-pointer flex gap-2 items-center"
              >
                <FiLogOut /> Logout
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;