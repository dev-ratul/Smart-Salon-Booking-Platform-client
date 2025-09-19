import React, { useState } from 'react';
import { Outlet } from 'react-router';

import { Sidebar } from "../../../Components/Dashboard/DashboardLayout";

const DashboardRoot = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex items-center">
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      
      <main
        className={`
          flex-1 min-h-screen
          transition-all duration-300
          ${collapsed ? 'ml-16' : 'ml-64'}
          p-6
        `}
      >
        <Outlet></Outlet>
      </main>
    </div>

  );
}

export default DashboardRoot