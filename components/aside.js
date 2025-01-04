import Link from 'next/link';
import React, { useState } from 'react';

function Aside() {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (<>
    <div className="relative ml-7 flex float-left">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform fixed top-0 left-0 bottom-0 bg-gray-100  w-64 sm:w-64 sm:relative sm:translate-x-0 z-10`}
        >
        {/* Logo Section */}
        <div className="p-6">
          <h1 className="text-xl text-blue-500 font-bold">ग्रामपंचायत</h1>
          <p className="text-sm text-gray-400">आपल्या गावाची समृद्धी आणि विकास</p>
        </div>

        {/* Menu Items */}
        <nav className="flex-grow">
          <ul className="space-y-4">
            <Link href="/admin/">
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
                <span>📋</span>
                <span className="ml-3">संपूर्ण माहिती फलक</span>
              </li>
            </Link>
            <Link href="/admin/newRequest">
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
                <span>📝</span>
                <span className="ml-3">नवीन विनंती</span>
              </li>
            </Link>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
              <span>✔️</span>
              <span className="ml-3">अनुमती</span>
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
              <span>✅</span>
              <span className="ml-3">पूर्ण झाले</span>
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
              <span>🔔</span>
              <span className="ml-3">सूचना संदेश</span>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800">
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <span>❓</span>
            <span>मदत</span>
          </button>
          <button className="flex items-center space-x-2 mt-3 text-gray-400 hover:text-white">
            <span>🔓</span>
            <span>सत्र समाप्त करा</span>
          </button>
        </div>
      </aside>

      {/* Hamburger Menu Button (Mobile) */}
      <div
        className="lg:hidden absolute top-4 left-4 z-20 cursor-pointer"
        onClick={toggleSidebar}
        >
        <div className="space-y-2">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
        </>
  );
}

export default Aside;
