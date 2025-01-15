// // pages/index.js
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '../components/navbar';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Gram Panchayat</title>
//         <meta name="description" content="create Shakktii Ai" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

// <div className='grid grid-cols-3  '>
// <div className='h-10 w-auto'>
//   <img className=' m-3 -mt-5 h-56 w-full' src='/1.jpg' />
// </div>
//       <div className='mb-5'>
//       <h2 className="text-6xl font-bold text-center  text-white">ग्रामपंचायत</h2>
//       <h2 className="text-lg  text-center text-white">आपल्या गावाची समृद्धी आणि विकास</h2>
//       </div>
//       <div className='h-10 w-auto'>
//   <img className='  -mt-5 mr-6 h-56 w-full' src='/1.jpg' />
// </div>
//       </div>
//       <div className="relative top-4 max-w-40 mb-3 border-white border-2 m-auto   py-2 rounded-full shadow-md">
        
//         <h2 className="text-lg font-bold text-center text-white"><a href='/complaint'>ग्रामपंचायती रचना</a></h2>
//       </div>

//       {/* Members Section */}<div className='flex flex-col sm:flex-row lg:m-20 m-5 mt-0'>
//       <div className="bg-white  m-4 mt-2 rounded-lg shadow-md overflow-hidden text-center">
//   <div className="p-5 flex  items-center sm:items-start sm:text-left">
//     {/* Image Section */}
//     <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
//               <Image
//                 src="/1.jpg"
//                 alt="श्री. अविनाश पाटील"
//                 width={80}
//                 height={50}
//                 className="rounded-2xl m-auto" 
//               />
//             </div><div className="mt-4 sm:mt-0 sm:ml-4">
//             <h3 className="text-lg font-bold text-gray-800">श्री. अविनाश पाटील</h3>
//             <p className="text-sm text-gray-500">ना. ग्रामविकास अधिकारी</p>
//             <p className="text-sm text-gray-500 mt-2">मोबाईल नं. 9923495132</p>
          
//           </div></div>
//         </div>

//         {/* Member Card 2 */}
//         <div className="bg-white m-4 mt-2 rounded-lg shadow-md overflow-hidden text-center">
//   <div className="p-5 flex  items-center sm:items-start sm:text-left">
//     {/* Image Section */}
//     <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
//               <Image
//                 src="/2.jpg"
//                 alt="सौ. मृण्मयी सानप"
//                 width={80}
//                 height={50}
//                 className="rounded-2xl m-auto" 
//               />
//             </div><div className="mt-4 sm:mt-0 sm:ml-4">
//             <h3 className="text-lg font-bold text-gray-800">सौ. मृण्मयी सानप</h3>
//             <p className="text-sm text-gray-500">माननीय सरपंच</p>
//             <p className="text-sm text-gray-500 mt-2">मोबाईल नं. 9881730879</p>
//           </div></div>
//         </div>

//         {/* Member Card 3 */}
// <div className="bg-white m-4 mt-2 rounded-lg shadow-md overflow-hidden text-center">
//   <div className="p-5 flex  items-center sm:items-start sm:text-left">
//     {/* Image Section */}
//     <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
//       <Image
//         src="/3.jpg"
//         alt="श्री. दिनेश राऊत"
//         width={80}
//         height={50}
//         className="rounded-2xl"
//       />
//     </div>
//     {/* Content Section */}
//     <div className="mt-4 sm:mt-0 sm:ml-4">
//       <h3 className="text-lg font-bold text-gray-800">श्री. दिनेश राऊत</h3>
//       <p className="text-sm text-gray-500">माननीय उपसरपंच</p>
//       <p className="text-sm text-gray-500 mt-2">मोबाईल नं. 8805844646</p>
//     </div>
//   </div>
// </div>
// </div>

   
  

//     </>
//   );
// }



// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gram Panchayat</title>
        <meta name="description" content="Create Shakktii AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Grid Section */}
      <div className="m-5 grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Left Image */}
  <div className="h-56 w-full flex justify-center items-center mb-4 md:mb-0">
    <img className="object-cover w-full h-full rounded-lg" src="/1.jpg" alt="Image 1" />
  </div>

  {/* Main Title and Subheading */}
  <div className="flex flex-col justify-center items-center text-center space-y-2 px-4">
    <h2 className="text-3xl md:text-6xl font-bold text-white">
      ग्रामपंचायत
    </h2>
    <h2 className="text-sm md:text-lg text-white">
      आपल्या गावाची समृद्धी आणि विकास
    </h2>
  </div>

  {/* Right Image */}
  <div className="h-56 w-full flex justify-center items-center mb-4 md:mb-0">
    <img className="object-cover w-full h-full rounded-lg" src="/1.jpg" alt="Image 2" />
  </div>
</div>


      {/* Link Button */}
      <div className="relative top-4 max-w-xs mb-5 mx-auto py-2 rounded-full shadow-md border-2 border-white">
        <h2 className="text-lg font-bold text-center text-white">
          <a href="/complaint">ग्रामपंचायती रचना</a>
        </h2>
      </div>

      {/* <div className="flex flex-col mr-5 sm:flex-row justify-center items-center sm:space-x-4 mt-8">
        
        
        <div className="bg-white m-4 rounded-lg shadow-md overflow-hidden text-center w-full sm:w-72">
          <div className="p-5 flex justify-center items-center sm:items-start sm:text-left">
           
            <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
              <Image
                src="/1.jpg"
                alt="श्री. अविनाश पाटील"
                width={80}
                height={80}
                className="rounded-2xl"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4">
              <h3 className="text-lg font-bold text-gray-800">श्री. अविनाश पाटील</h3>
              <p className="text-sm text-gray-500">ना. ग्रामविकास अधिकारी</p>
              <p className="text-sm text-gray-500 ">मोबाईल नं. 9923495132</p>
            </div>
          </div>
        </div>

        
        <div className="bg-white m-4 rounded-lg shadow-md overflow-hidden text-center w-full sm:w-72">
          <div className="p-5 flex justify-center items-center sm:items-start sm:text-left">
            
            <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
              <Image
                src="/2.jpg"
                alt="सौ. मृण्मयी सानप"
                width={80}
                height={80}
                className="rounded-2xl"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4">
              <h3 className="text-lg font-bold text-gray-800">सौ. मृण्मयी सानप</h3>
              <p className="text-sm text-gray-500">माननीय सरपंच</p>
              <p className="text-sm text-gray-500 mt-2">मोबाईल नं. 9881730879</p>
            </div>
          </div>
        </div>

      
        <div className="bg-white m-4  rounded-lg shadow-md overflow-hidden text-center w-full sm:w-72">
          <div className="p-5 flex justify-center items-center sm:items-start sm:text-left">
            
            <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
              <Image
                src="/3.jpg"
                alt="श्री. दिनेश राऊत"
                width={80}
                height={80}
                className="rounded-2xl"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4">
              <h3 className="text-lg font-bold text-gray-800">श्री. दिनेश राऊत</h3>
              <p className="text-sm text-gray-500">माननीय उपसरपंच</p>
              <p className="text-sm text-gray-500 mt-2">मोबाईल नं. 8805844646</p>
            </div>
          </div>
        </div>

      </div> */}

<div className="flex flex-col m-5 sm:flex-row justify-center items-center sm:space-x-4 mt-8">

  {/* Member Card 1 */}
  <div className="bg-white m-4 rounded-lg shadow-md overflow-hidden text-center w-full sm:w-72 ">
    <div className="p-5 flex justify-center items-center sm:items-start sm:text-left h-full">
      {/* Image Section */}
      <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
        <Image
          src="/1.jpg"
          alt="श्री. अविनाश पाटील"
          width={80}
          height={80}
          className="rounded-2xl"
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-between h-full">
        <h3 className="text-lg font-bold text-gray-800">श्री. अविनाश पाटील</h3>
        <p className="text-sm text-gray-500">ना. ग्रामविकास अधिकारी</p>
        <p className="text-sm text-gray-500">मो. नं. 9923495132</p>
      </div>
    </div>
  </div>

  {/* Member Card 2 */}
  <div className="bg-white m-5 rounded-lg shadow-md overflow-hidden text-center w-full sm:w-72 ">
    <div className="p-5 flex justify-center items-center sm:items-start sm:text-left h-full">
      {/* Image Section */}
      <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
        <Image
          src="/2.jpg"
          alt="सौ. मृण्मयी सानप"
          width={80}
          height={80}
          className="rounded-2xl"
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-between h-full">
        <h3 className="text-lg font-bold text-gray-800">सौ. मृण्मयी सानप</h3>
        <p className="text-sm text-gray-500">माननीय सरपंच</p>
        <p className="text-sm text-gray-500 mt-2">मोबाईल नं. 9881730879</p>
      </div>
    </div>
  </div>

  {/* Member Card 3 */}
  <div className="bg-white m-4 rounded-lg shadow-md overflow-hidden text-center w-full sm:w-72 ">
    <div className="p-5 flex justify-center items-center sm:items-start sm:text-left h-full">
      {/* Image Section */}
      <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
        <Image
          src="/3.jpg"
          alt="श्री. दिनेश राऊत"
          width={80}
          height={80}
          className="rounded-2xl"
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-between h-full">
        <h3 className="text-lg font-bold text-gray-800">श्री. दिनेश राऊत</h3>
        <p className="text-sm text-gray-500">माननीय उपसरपंच</p>
        <p className="text-sm text-gray-500 mt-2">मोबाईल नं. 8805844646</p>
      </div>
    </div>
  </div>

</div>

      
    </>
  );
}
