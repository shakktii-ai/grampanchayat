// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gram Panchayat</title>
        <meta name="description" content="create Shakktii Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='mb-5'>
      <h2 className="text-6xl font-bold text-center  text-white">ग्रामपंचायत</h2>
      <h2 className="text-lg  text-center text-white">आपल्या गावाची समृद्धी आणि विकास</h2>
      </div>
      <div className="relative top-4 max-w-40 mb-3 border-white border-2 m-auto   py-2 rounded-full shadow-md">
        
        <h2 className="text-lg font-bold text-center text-white">ग्रामपंचायती रचना</h2>
      </div>

      {/* Members Section */}<div className='flex flex-col sm:flex-row lg:m-20 m-5 mt-0'>
      <div className="bg-white  m-4 mt-2 rounded-lg shadow-md overflow-hidden text-center">
  <div className="p-5 flex  items-center sm:items-start sm:text-left">
    {/* Image Section */}
    <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
              <Image
                src="/1.jpg"
                alt="श्री. अविनाश पाटील"
                width={80}
                height={50}
                className="rounded-2xl m-auto" 
              />
            </div><div className="mt-4 sm:mt-0 sm:ml-4">
            <h3 className="text-lg font-bold text-gray-800">श्री. अविनाश पाटील</h3>
            <p className="text-sm text-gray-500">ना. ग्रामविकास अधिकारी</p>
            <p className="text-sm text-gray-500 mt-2">मोबाईल नं. 9923495132</p>
          
          </div></div>
        </div>

        {/* Member Card 2 */}
        <div className="bg-white m-4 mt-2 rounded-lg shadow-md overflow-hidden text-center">
  <div className="p-5 flex  items-center sm:items-start sm:text-left">
    {/* Image Section */}
    <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
              <Image
                src="/2.jpg"
                alt="सौ. मृण्मयी सानप"
                width={80}
                height={50}
                className="rounded-2xl m-auto" 
              />
            </div><div className="mt-4 sm:mt-0 sm:ml-4">
            <h3 className="text-lg font-bold text-gray-800">सौ. मृण्मयी सानप</h3>
            <p className="text-sm text-gray-500">माननीय सरपंच</p>
            <p className="text-sm text-gray-500 mt-2">मोबाईल नं. 9881730879</p>
          </div></div>
        </div>

        {/* Member Card 3 */}
<div className="bg-white m-4 mt-2 rounded-lg shadow-md overflow-hidden text-center">
  <div className="p-5 flex  items-center sm:items-start sm:text-left">
    {/* Image Section */}
    <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
      <Image
        src="/3.jpg"
        alt="श्री. दिनेश राऊत"
        width={80}
        height={50}
        className="rounded-2xl"
      />
    </div>
    {/* Content Section */}
    <div className="mt-4 sm:mt-0 sm:ml-4">
      <h3 className="text-lg font-bold text-gray-800">श्री. दिनेश राऊत</h3>
      <p className="text-sm text-gray-500">माननीय उपसरपंच</p>
      <p className="text-sm text-gray-500 mt-2">मोबाईल नं. 8805844646</p>
    </div>
  </div>
</div>
</div>

   
 <div className='m-10 h-5'></div>
   
  

    </>
  );
}