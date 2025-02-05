
import Link from 'next/link';
import { useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';

const SuperNavbar = ({ Logout, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md rounded-md relative  mx-7">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Desktop Menu */}<Link href="/admin" className="block text-black font-bold text-xl hover:text-gray-700 mb-2">सेंट्रल ग्रामपंचायत डॅशबोर्ड  </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/superAdmin" className="text-black font-bold hover:text-red-700 cursor-pointer">मुख्य पृष्ठ</Link>
            <Link href="/superAdmin/complaint" className="text-black hover:text-gray-700">तक्रार</Link>
            <Link href="/superAdmin/tharavPost" className="text-black hover:text-gray-700">ठराव</Link>
            <Link href="/superAdmin/developmentwork" className="text-black hover:text-gray-700">विकास कार्य</Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="relative">
        {user?.value && (
          <div onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="relative">
            <MdAccountCircle className="text-2xl md:text-3xl mx-2  cursor-pointer" />
            {dropdown && (
              <div className="absolute right-0 bg-white shadow-2xl top-10 rounded-md w-32 border-2 border-solid">
                <ul>
                  <li href='/' className="hover:text-red-700 text-sm font-bold  p-2 cursor-pointer   m-3 ">Profile</li>
                </ul>
                <ul>
                  <li onClick={Logout} className="hover:text-red-700 text-sm font-bold  p-2 cursor-pointer   m-3 ">Logout</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right side Login button (for guests) */}
      {!user?.value && (
        <Link href="/login">
          <div className="ml-4">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Login</button>
          </div>
        </Link>
      )}
    </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md p-4 z-50">
            <Link href="/superAdmin" className="block text-black hover:text-gray-700 mb-2">मुख्य पृष्ठ</Link>
            {/* <Link href="/superAdmin/complaint" className="block text-black hover:text-gray-700 mb-2">तक्रार</Link> */}
            {/* <Link href="/superAdmin/tharavPost" className="block text-black hover:text-gray-700 mb-2">ठराव</Link> */}
            {/* <Link href="/superAdmin/developmentwork" className="block text-black hover:text-gray-700 mb-2">विकास कार्य</Link> */}

            {/* Mobile Search Bar */}
            <div className="relative">
        {user?.value && (
          <div onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="relative">
            <MdAccountCircle className="text-2xl md:text-3xl mx-2 cursor-pointer" />
            {dropdown && (
              <div className="absolute right-0 bg-white shadow-2xl top-10 rounded-md w-32 border-2 border-solid">
                <ul>
                  <li onClick={Logout} className="hover:text-red-700 text-sm font-bold  p-2 cursor-pointer border-2 border-solid m-3 border-red-700">Logout</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right side Login button (for guests) */}
      {!user?.value && (
        <Link href="/login">
          <div className="ml-4">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Login</button>
          </div>
        </Link>
      )}
    </div>
          
        </>
      )}
    </nav>
  );
};

export default SuperNavbar;
