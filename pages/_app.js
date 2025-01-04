// import "@/styles/globals.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";

// import { useRouter } from "next/router";




// export default function App({ Component, pageProps }) {
  
//   const router = useRouter();
  
//   const isAdminPage = router.pathname.startsWith("/admin");
//   return (
//     <div className="relative min-h-screen w-full bg-gray-100">
//       {/* Background Image */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <img
//           src="home.png" // Replace with the correct image path
//           alt="Landscape"
//           className="w-full h-full object-cover"
//         />
//         {/* White Border Overlay */}
//         <div className="absolute inset-0 m-8 border-4 bg-black opacity-50 border-white rounded-lg pointer-events-none" />
//       </div>

//       {/* Navbar */}
//       <div className="relative z-50 top-12 mx-auto  max-w-6xl w-full px-4 sm:px-4 md:px-4 lg:px-5">
//         <Navbar />
//       </div>

//       {/* Content Section */}
//       <div className="relative z-10 pt-24 px-4 sm:px-6 md:px-8">
//         <Component {...pageProps} />
//       </div>
//       <div className="relative z-50 top-12  max-w-full w-full ">
//       <Footer />
//       </div>
//     </div>
//   );
// }


// import "@/styles/globals.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import { useRouter } from "next/router";
// import Aside from "@/components/aside";
// import Headers from "@/components/header";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();
  
//   // Check if the current route is '/admin'
//   const isAdminPage = router.pathname.startsWith("/admin");

//   return (
//     <div className={`relative min-h-screen w-full ${isAdminPage ? '' : 'bg-gray-100'}`}>
//       {/* Only render background image, border overlay, navbar, and footer if not on /admin page */}
      
//       {isAdminPage && (<div className="flex h-screen bg-gray-100">
//     {/* Sidebar */}
//     <Aside />

//     {/* Main Content */}
//     <main className="flex-grow bg-white">
//       {/* Header */}
//       <Headers />

//       {/* Page Content */}
//       <div className="p-6">
//         {/* Add your page content here */}
//       </div>
//     </main>
//   </div>)}
      
      
//       {!isAdminPage && (
//         <div className="absolute top-0 left-0 w-full h-full z-0">
//           <img
//             src="home.png" // Replace with the correct image path
//             alt="Landscape"
//             className="w-full h-full object-cover"
//           />
//           {/* White Border Overlay */}
//           <div className="absolute inset-0 m-8 border-4 bg-black opacity-50 border-white rounded-lg pointer-events-none" />
//         </div>
//       )}

//       {/* Navbar, only visible when not on /admin */}
//       {!isAdminPage && (
//         <div className="relative z-50 top-12 mx-auto max-w-6xl w-full px-4 sm:px-4 md:px-4 lg:px-5">
//           <Navbar />
//         </div>
//       )}

//       {/* Content Section */}
//       <div className="relative z-10 pt-24 px-4 sm:px-6 md:px-8">
//         <Component {...pageProps} />
//       </div>

//       {/* Footer, only visible when not on /admin */}
//       {!isAdminPage && (
//         <div className="relative z-50 top-12 max-w-full w-full">
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// }


// import "@/styles/globals.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import { useRouter } from "next/router";
// import Aside from "@/components/aside";
// import Headers from "@/components/header";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();
  
//   // Check if the current route is '/admin'
//   const isAdminPage = router.pathname.startsWith("/admin");

//   return (
//     <div className={`relative min-h-screen w-full ${isAdminPage ? '' : 'bg-gray-100'}`}>
//       {/* Only render the sidebar and admin layout if it's an admin page */}
//       {isAdminPage ? (
//         <div className="flex min-h-screen">
//           {/* Sidebar */}
//           <Aside />

//           {/* Main Content */}
//           <main className="flex-grow bg-white">
//             {/* Header */}
//             <Headers />

//             {/* Page Content */}
//             <div className="p-6">
//               <Component {...pageProps} />
//             </div>
//           </main>
//         </div>
//       ) : (
//         // Background and overlay for non-admin pages
//         <div className="absolute top-0 left-0 w-full h-full z-0">
//           <img
//             src="home.png" // Replace with the correct image path
//             alt="Landscape"
//             className="w-full h-full object-cover"
//           />
//           {/* White Border Overlay */}
//           <div className="absolute inset-0 m-8 border-4 bg-black opacity-50 border-white rounded-lg pointer-events-none" />
//         </div>
//       )}

//       {/* Navbar, only visible when not on /admin */}
//       {!isAdminPage && (
//         <div className="relative z-50 top-12 mx-auto max-w-6xl w-full px-4 sm:px-4 md:px-4 lg:px-5">
//           <Navbar />
//         </div>
//       )}

//       {/* Content Section */}
//       {!isAdminPage && (<div className="relative z-10 pt-24 px-4 sm:px-6 md:px-8">
//         <Component {...pageProps} />
//       </div>)}

//       {/* Footer, only visible when not on /admin */}
//       {!isAdminPage && (
//         <div className="relative z-50 top-12 max-w-full w-full">
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// }



// import "@/styles/globals.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";

// import { useRouter } from "next/router";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();
  
//   // Check if the current route is an admin page
//   const isAdminPage = router.pathname.startsWith("/admin");

//   return (
//     <div className={`relative min-h-screen w-full ${isAdminPage ? 'bg-white' : 'bg-gray-100'}`}>
//       {/* Background Image */}
//       {!isAdminPage && (
//         <div className="absolute top-0 left-0 w-full h-full z-0">
//           <img
//             src="home.png" // Replace with the correct image path
//             alt="Landscape"
//             className="w-full h-full object-cover"
//           />
//           {/* White Border Overlay */}
//           <div className="absolute inset-0 m-8 border-4 bg-black opacity-50 border-white rounded-lg pointer-events-none" />
//         </div>
//       )}

//       {/* Navbar */}
//       <div className="relative z-50 top-12 mx-auto max-w-6xl w-full px-4 sm:px-4 md:px-4 lg:px-5">
//         <Navbar />
//       </div>

//       {/* Content Section */}
//       <div className="relative z-10 pt-24 px-4 sm:px-6 md:px-8">
//         <Component {...pageProps} />
//       </div>

//       {/* Footer */}
//       <div className="relative z-50 top-12 max-w-full w-full">
//         <Footer />
//       </div>
//     </div>
//   );
// }


import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Aside from "@/components/aside";
import Headers from "@/components/header";
import { useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Check if the current route is an admin page
  const isAdminPage = router.pathname.startsWith("/admin");
  const isNewRequestPage = router.pathname === "/admin/newRequest?";
  const shouldHideHeader = (isNewRequestPage && isModalOpen) || isAdminPage;
  return (
    <div className={`relative min-h-screen w-full ${isAdminPage ? 'bg-white' : 'bg-gray-100'}`}>
      {/* Background Image */}
    
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/home.png" // Replace with the correct image path
            alt="Landscape"
            className="w-full h-full object-cover"
          />
          {/* White Border Overlay */}
          <div className="absolute inset-0 m-8 border-4 bg-black opacity-50 border-white rounded-lg pointer-events-none" />
        </div>
      

      {/* Navbar */}
      <div className="relative z-20 top-12 mx-auto max-w-6xl w-full px-4 sm:px-4 md:px-4 lg:px-5">
      { isAdminPage && <Headers />} {!isAdminPage && <Navbar />}
         {/* <Aside />  */}
      </div>

      {/* Content Section */}
      <div className="relative z-10 pt-24 px-4 sm:px-6 md:px-8">
        <Component {...pageProps} setIsModalOpen={setIsModalOpen} />
      </div>

      {/* Footer */}
      <div className="relative z-50 top-12 max-w-full w-full">
         <Footer />
      </div>
    </div>
  );
}
