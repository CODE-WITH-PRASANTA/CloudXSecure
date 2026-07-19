import { useEffect } from "react";
import { FiMenu, FiBell, FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AppHeader = ({ sidebarOpen, setSidebarOpen, setMobileOpen }) => {
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

    // ✅ No API call (since backend removed)
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("admin");

    navigate("/login");
    window.location.reload();
  };

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
      <div className="flex items-center gap-5">
        <FiBell className="text-xl text-slate-700 cursor-pointer" />
        <FiMessageSquare className="text-xl text-slate-700 cursor-pointer" />

        {/* OPTIONAL: Logout Button directly */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AppHeader;