import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import AppSidebar from "../AppSidebar/AppSidebar";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <AppSidebar
        isOpen={sidebarOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex flex-col flex-1">
        <AppHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setMobileOpen={setMobileOpen}
        />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
