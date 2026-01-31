import { useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import AppSidebar from "../AppSidebar/AppSidebar";

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // desktop
  const [mobileOpen, setMobileOpen] = useState(false); // mobile

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">

      <AppSidebar
        sidebarOpen={sidebarOpen}
        mobileOpen={mobileOpen}
        setSidebarOpen={setSidebarOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex flex-col flex-1 transition-all duration-300">
        <AppHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setMobileOpen={setMobileOpen}
        />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
