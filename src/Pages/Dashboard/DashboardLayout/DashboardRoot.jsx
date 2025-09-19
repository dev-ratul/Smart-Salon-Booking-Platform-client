import React, { useState } from 'react';
import { Outlet } from 'react-router';

import { Sidebar, Topbar } from "../../../Components/Dashboard/DashboardLayout"

const DashboardRoot = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex">
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      
      <main
        className={`
          flex-1 min-h-screen
          transition-all duration-300
          ${collapsed ? 'ml-16' : 'ml-64'}
          p-6
        `}
      >
        <h2 className="text-2xl font-semibold mb-4">Hello Tailwind Sidebar 👋</h2>
        <p>Add your routes / content here…</p>
      </main>
    </div>

  );
}

export default DashboardRoot