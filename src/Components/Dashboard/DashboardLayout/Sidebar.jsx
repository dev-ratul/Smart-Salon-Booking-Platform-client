import React, { useState } from 'react';
import {
  Menu as MenuIcon,
  Home,
  User,
  Settings,
  NotebookTabs,
  BadgeDollarSign,
  GitPullRequest,
  Send,
} from 'lucide-react';

const menuItems = [
  { id: 1, label: 'Dashboard', icon: Home,     path: '/' },
  { id: 2, label: 'Save Post',   icon: User,     path: '/' },
  { id: 4, label: 'My Booking',  icon: NotebookTabs, path: '/' },
  { id: 5, label: 'User Transaction History',  icon: BadgeDollarSign, path: '/' },
  { id: 6, label: 'Customer Request',  icon: GitPullRequest, path: '/' },
  { id: 7, label: 'Saloon Transaction History',  icon: BadgeDollarSign, path: '/' },
  { id: 8, label: 'Admin Message',  icon: Send, path: '/' },
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
      fixed inset-y-0 top-1/2 left-1 -translate-y-1/2
      flex flex-col 
      bg-slate-800 text-slate-100
      transition-all duration-300
      ${collapsed ? 'w-12' : 'w-64'} h-[98%]
      z-50 overflow-hidden rounded-lg shadow-lg
    `}
    >

      <header className={`flex items-center ${collapsed ? "justify-center" : "justify-between" } gap-2 px-4 py-2 bg-slate-900`}>
        {!collapsed && 
          <h1
          className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent"
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

      <nav className="flex-1 mt-2 space-y-1 overflow-y-auto overflow-x-hidden">
        {
          item.map((menu, index) => {
            const Icon = menu.icon;
            return (
              <a
              key={index}
              href={menu.path}
              className={`
                flex items-center gap-4
                px-3 py-2
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

      <footer className='bg-slate-800 flex justify-start py-4'>
        <div 
        className={`relative bottom-0 px-4 flex hover:bg-slate-600 text-slate-100 transition-all duration-300 
        ${collapsed ? 'w-10 justify-center' : 'w-64'} z-50`}>

          <User 
          size={22}
          className="cursor-pointer shrink-0"
          onClick={toggle} 
          />          
          <span className={`${collapsed ? 'hidden' : 'inline'} whitespace-nowrap px-4`}>
            USER123
          </span>

        </div>
      </footer>
    </aside>

  );
};

export default Sidebar;