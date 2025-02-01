// import React ,{useState} from 'react'
// import Link from 'next/link'

// function header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md rounded-md relative  mx-7">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center py-4">
//           {/* Desktop Menu */}<Link href="/" ><label className="block text-center text-black font-bold text-2xl hover:text-gray-700 mb-2">ग्रामपंचायत</label></Link>
         

//           {/* Search Bar (Desktop) */}
//           <div className="hidden md:flex mr-0  items-center border rounded-full px-4 py-2">
//             <input
//               type="text"
//               placeholder="शोधा..."
//               className="outline-none flex-grow bg-transparent"
//             />
//             <button className="text-black hover:text-gray-700">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-black focus:outline-none"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <>
//           {/* Background Overlay */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-25 z-40"
//             onClick={() => setIsOpen(false)}
//           ></div>
//           {/* Dropdown Menu */}
//           <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md p-4 z-50">
//             <Link href="/" className="block text-black hover:text-gray-700 mb-2">मुख्य पृष्ठ</Link>
//             <Link href="/seva" className="block text-black hover:text-gray-700 mb-2">सेवा</Link>
//             <Link href="#" className="block text-black hover:text-gray-700 mb-2">रोजगार आणि मदत</Link>
//             <Link href="#" className="block text-black hover:text-gray-700 mb-4">सामाजिक कल्याण</Link>

//             {/* Mobile Search Bar */}
//             <div className="flex items-center border rounded-full px-4 py-2">
//               <input
//                 type="text"
//                 placeholder="शोधा..."
//                 className="outline-none flex-grow bg-transparent"
//               />
//               <button className="text-black hover:text-gray-700">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

          
//         </>
//       )}
//     </nav>
//   )
// }

// export default header


// import React, { useState } from 'react';
// import Link from 'next/link';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // for mobile menu dropdown
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // for sidebar

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   return (
//     <nav className="bg-white shadow-md rounded-md relative mx-7">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center py-4">
//           {/* Desktop Menu */}
//           <Link href="/">
//             <label className="block text-center text-black font-bold text-2xl hover:text-gray-700 mb-2">
//               ग्रामपंचायत
//             </label>
//           </Link>

//           {/* Search Bar (Desktop) */}
//           <div className="hidden md:flex mr-0 items-center border rounded-full px-4 py-2">
//             <input
//               type="text"
//               placeholder="शोधा..."
//               className="outline-none flex-grow bg-transparent"
//             />
//             <button className="text-black hover:text-gray-700">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <>
//           {/* Background Overlay */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-25 z-40"
//             onClick={() => setIsOpen(false)}
//           ></div>
//           {/* Dropdown Menu */}
//           <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md p-4 z-50">
//             <Link href="/" className="block text-black hover:text-gray-700 mb-2">
//               मुख्य पृष्ठ
//             </Link>
//             <Link href="/seva" className="block text-black hover:text-gray-700 mb-2">
//               सेवा
//             </Link>
//             <Link href="#" className="block text-black hover:text-gray-700 mb-2">
//               रोजगार आणि मदत
//             </Link>
//             <Link href="#" className="block text-black hover:text-gray-700 mb-4">
//               सामाजिक कल्याण
//             </Link>

//             {/* Mobile Search Bar */}
//             <div className="flex items-center border rounded-full px-4 py-2">
//               <input
//                 type="text"
//                 placeholder="शोधा..."
//                 className="outline-none flex-grow bg-transparent"
//               />
//               <button className="text-black hover:text-gray-700">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`lg:float-left ${isSidebarOpen ? '-translate-x-full' : 'translate-x-0'} transition-transform  bg-gray-100  sm:w-64 z-10`}
//       >
//         {/* Sidebar Content */}
//         <aside>
//           <div className="p-6">
//             <h1 className="text-xl text-blue-500 font-bold">ग्रामपंचायत</h1>
//             <p className="text-sm text-gray-400">आपल्या गावाची समृद्धी आणि विकास</p>
//           </div>
//           <nav className="flex-grow">
//             <ul className="space-y-4">
//               <Link href="/admin/">
//                 <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
//                   <span>📋</span>
//                   <span className="ml-3">संपूर्ण माहिती फलक</span>
//                 </li>
//               </Link>
//               <Link href="/admin/newRequest">
//                 <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
//                   <span>📝</span>
//                   <span className="ml-3">नवीन विनंती</span>
//                 </li>
//               </Link>
//               <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
//                 <span>✔️</span>
//                 <span className="ml-3">अनुमती</span>
//               </li>
//               <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
//                 <span>✅</span>
//                 <span className="ml-3">पूर्ण झाले</span>
//               </li>
//               <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
//                 <span>🔔</span>
//                 <span className="ml-3">सूचना संदेश</span>
//               </li>
//             </ul>
//           </nav>

//           {/* Footer */}
//           <div className="p-6 border-t border-gray-800">
//             <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
//               <span>❓</span>
//               <span>मदत</span>
//             </button>
//             <button className="flex items-center space-x-2 mt-3 text-gray-400 hover:text-white">
//               <span>🔓</span>
//               <span>सत्र समाप्त करा</span>
//             </button>
//           </div>
//         </aside>
//       </div>

//       {/* Sidebar Toggle Button (Mobile) */}
//       <div
//         className="lg:hidden absolute top-4 left-4 z-20 cursor-pointer"
//         onClick={toggleSidebar}
//       >
//         <div className="space-y-2">
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;


// import React, { useState } from 'react';
// import Link from 'next/link';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // for mobile menu dropdown
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // for sidebar

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state

//   return (
//     <nav className="bg-white shadow-md rounded-md relative mx-7">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center py-4">
//           {/* Desktop Menu */}
//           <Link href="/">
//             <label className="block text-center text-black font-bold text-2xl hover:text-gray-700 mb-2">
//               ग्रामपंचायत
//             </label>
//           </Link>

//           {/* Search Bar (Desktop) */}
//           <div className="hidden md:flex mr-0 items-center border rounded-full px-4 py-2">
//             <input
//               type="text"
//               placeholder="शोधा..."
//               className="outline-none flex-grow bg-transparent"
//             />
//             <button className="text-black hover:text-gray-700">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <>
//           {/* Background Overlay */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-25 z-40"
//             onClick={() => setIsOpen(false)}
//           ></div>
//           {/* Dropdown Menu */}
//           <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md p-4 z-50">
//             <Link href="/" className="block text-black hover:text-gray-700 mb-2">
//               मुख्य पृष्ठ
//             </Link>
//             <Link href="/seva" className="block text-black hover:text-gray-700 mb-2">
//               सेवा
//             </Link>
//             <Link href="#" className="block text-black hover:text-gray-700 mb-2">
//               रोजगार आणि मदत
//             </Link>
//             <Link href="#" className="block text-black hover:text-gray-700 mb-4">
//               सामाजिक कल्याण
//             </Link>

//             {/* Mobile Search Bar */}
//             <div className="flex items-center border rounded-full px-4 py-2">
//               <input
//                 type="text"
//                 placeholder="शोधा..."
//                 className="outline-none flex-grow bg-transparent"
//               />
//               <button className="text-black hover:text-gray-700">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`${
//           isSidebarOpen ? '-translate-x-full' : 'translate-x-0'
//         } transition-transform   bg-gray-100 w-64 sm:w-64 z-10 lg:float-left `}
//       >
//         {/* Sidebar Content */}
//         <aside>
//           <div className="p-6">
//             <h1 className="text-xl text-blue-500 font-bold">ग्रामपंचायत</h1>
//             <p className="text-sm text-gray-400">आपल्या गावाची समृद्धी आणि विकास</p>
//           </div>
//           <nav className="flex-grow">
//             <ul className="space-y-4">
//               <Link href="/admin/">
//                 <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
//                   <span>📋</span>
//                   <span className="ml-3">संपूर्ण माहिती फलक</span>
//                 </li>
//               </Link>
//               <Link href="/admin/newRequest">
//                 <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
//                   <span>📝</span>
//                   <span className="ml-3">नवीन विनंती</span>
//                 </li>
//               </Link>
//               <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
//                 <span>✔️</span>
//                 <span className="ml-3">अनुमती</span>
//               </li>
//               <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
//                 <span>✅</span>
//                 <span className="ml-3">पूर्ण झाले</span>
//               </li>
//               <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
//                 <span>🔔</span>
//                 <span className="ml-3">सूचना संदेश</span>
//               </li>
//             </ul>
//           </nav>

//           {/* Footer */}
//           <div className="p-6 border-t border-gray-800">
//             <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
//               <span>❓</span>
//               <span>मदत</span>
//             </button>
//             <button className="flex items-center space-x-2 mt-3 text-gray-400 hover:text-white">
//               <span>🔓</span>
//               <span>सत्र समाप्त करा</span>
//             </button>
//           </div>
//         </aside>
//       </div>

//       {/* Sidebar Toggle Button (Mobile) */}
//       <div
//         className="lg:hidden absolute top-4 left-4 z-20 cursor-pointer"
//         onClick={toggleSidebar}
//       >
//         <div className="space-y-2">
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;




import React, { useState } from 'react';
import Link from 'next/link';


function Header() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu dropdown
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For sidebar toggle
  const [isDropdown1Open, setIsDropdown1Open] = useState(false); // For Namuna 1 dropdown
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);


  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown1 = () => setIsDropdown1Open(!isDropdown1Open); // Toggle Namuna 1 dropdown
  const toggleDropdown2 = () => setIsDropdown2Open(!isDropdown2Open); // Toggle sidebar state

  return (
    <nav className=" bg-white shadow-md rounded-md rounded-bl-none relative mx-7 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          {/* Desktop Menu */}
          <img src='/S_AI_png.png' className='h-10 m-auto' />
            <h1 className="  text-black text-center mx-20 lg:mx-36  font-bold text-2xl hover:text-gray-700 mb-2">
            <Link href="/admin"> ग्रामपंचायत</Link>
            </h1>
          

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex mr-0 items-center border rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="शोधा..."
              className="outline-none flex-grow bg-transparent"
            />
            <button className="text-black hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
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
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0  bg-black bg-opacity-25 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          {/* Dropdown Menu */}
          <div className="absolute top-full  w-full bg-white shadow-md rounded-md p-4 z-50">
           

            {/* Mobile Search Bar */}
            <div className="flex items-center border rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="शोधा..."
                className="outline-none flex-grow bg-transparent"
              />
              <button className="text-black hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      
      <div
  className={`${
    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
  } transition-transform fixed inset-0 z-10 lg:mr-14  bg-gray-100 w-64 sm:w-64 lg:float-left lg:translate-x-0 lg:static`}
>
        {/* Sidebar Content */}
        <aside className="h-full max-h-[70vh] overflow-y-auto">
         
          <nav className="flex-grow mt-28 lg:mt-auto ">
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
              <Link href="/admin/verifyRequest">
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
                  <span>📝</span>
                  <span className="ml-3"> प्रमाणपत्र अपलोड करा</span>
                </li>
              </Link>
              <Link href="/admin/completeRequest">
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
                  <span>📝</span>
                  <span className="ml-3"> विनंती पूर्ण झालेले बघा </span>
                </li>
              </Link>
              <Link href="/admin/complaint">
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
                  <span>📝</span>
                  <span className="ml-3"> तक्रार यादी </span>
                </li>
              </Link>
              <Link href="/admin/tharavPost">
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
                  <span>📝</span>
                  <span className="ml-3">ठराव पोस्ट </span>
                </li>
              </Link>
              <Link href="/admin/developmentwork">
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
                  <span>📝</span>
                  <span className="ml-3">विकास काम</span>
                </li>
              </Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown1}
                  className="w-full px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center justify-between bg-gray-100 text-black"
                >
                  <span>📋 नमुना क्र. 1</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>
                {isDropdown1Open && (
                  <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <Link href="/admin/budgetInformation">
                      <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">अंदाजपत्रक माहिती</li>
                    </Link>
                    <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">वार्षिक अंदाजपत्रक अहवाल</li>
                  </ul>
                )}
              </div>
              {/* Another dropdown for Namuna 2 */}
              <div className="relative">
                <button
                  onClick={toggleDropdown2}
                  className="w-full px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center justify-between bg-gray-100 text-black"
                >
                  <span>📋 नमुना क्र. 2</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>
                {isDropdown2Open && (
                  <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <Link href="/admin/budgetInformation">
                      <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">पूर्वनियोजन अंदाजपत्रक</li>
                    </Link>
                    <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">वार्षिक अहवाल ↓ पूर्वनियोजन अंदाजपत्र</li>
                  </ul>
                )}
              </div>


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
      </div>

      {/* Sidebar Toggle Button (Mobile) */}
      <div
        className="lg:hidden absolute top-4 left-4 z-20 cursor-pointer"
        onClick={toggleSidebar}
      >
        <div className="space-y-2 mt-2">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
