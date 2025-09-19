import React, { useState } from 'react';
import {
  Menu as MenuIcon,
  Home,
  User,
  Settings
} from 'lucide-react';

const menuItems = [
  { id: 1, label: 'Dashboard', icon: Home,     path: '/' },
  { id: 2, label: 'Save Post',   icon: User,     path: '/' },
  { id: 4, label: 'My Booking',  icon: Settings, path: '/' },
  { id: 5, label: 'User Transaction History',  icon: Settings, path: '/' },
  { id: 6, label: 'Customer Request',  icon: Settings, path: '/' },
  { id: 7, label: 'Saloon Transaction History',  icon: Settings, path: '/' },
  { id: 8, label: 'Admin Message',  icon: Settings, path: '/' },
  { id: 9, label: 'Salon Onboarding',  icon: Settings, path: '/' },
  { id: 10, label: 'Salon Management',  icon: Settings, path: '/' },
  { id: 11, label: 'User Management',  icon: Settings, path: '/' },
]

const Sidebar = ({ item = menuItems, collapsed: collapsedProp, onCollapse }) => {
 
  const [internal, setInternal] = useState(false);
  const collapsed = collapsedProp ?? internal;

  const toggle = () => {
    onCollapse ? onCollapse(!collapsed) : setInternal(!collapsed);
  };

  return (

    <aside
    className={`
      fixed inset-y-0 left-0
      flex flex-col
      bg-slate-800 text-slate-100
      transition-all duration-300
      ${collapsed ? 'w-16' : 'w-64'}
      z-50
    `}
    >

      <header className="flex items-center justify-between gap-2 p-4">
        {!collapsed && 
          <h1
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Smart<span className="text-white">Salon</span>
          </h1>
        }
        <MenuIcon
          size={22}
          className="cursor-pointer shrink-0"
          onClick={toggle}
        />
      </header>

      <hr className='border-0.1 border-solid border-purple-400' />

      <nav className="flex-1 mt-2 space-y-1 overflow-auto">
        {
          item.map((menu, index) => {
            const Icon = menu.icon;
            return (
              <a
              key={index}
              href={menu.path}
              className={`
                flex items-center gap-4
                px-4 py-2
                hover:bg-slate-700
                transition-colors
              `}
              >
                <Icon size={20} strokeWidth={1.8} />
                <span className={`${collapsed ? 'hidden' : 'inline'} whitespace-nowrap`}>
                  {menu.label}
                </span>
              </a>
            )

          })
        }
      </nav>

      <hr className='border-0.1 border-solid border-purple-400' />

      <footer className='bg-slate-800 px-4 py-2'>
        <div className={`
          fixed inset-x-0
          bottom-0
          flex flex-col
          bg-slate-800 text-slate-100
          transition-all duration-300
          ${collapsed ? 'w-16' : 'w-64'}
          z-50
        `}>

          <span className={`${collapsed ? 'hidden' : 'inline'} whitespace-nowrap`}>
            USER123
          </span>
        </div>
      </footer>
    </aside>

  );
};

export default Sidebar;