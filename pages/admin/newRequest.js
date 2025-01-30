// import React, { useEffect, useState } from 'react';

// function NewRequest() {
//   // State to hold the birth certificate data
//   const [birthCertificates, setBirthCertificates] = useState([]);
//   const [deathCertificates, setDeathCertificates] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
//   const [selectedCertificate, setSelectedCertificate] = useState(null); // Selected certificate for editing
//   const [isModalOpenImage, setIsModalOpenImage] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);




//   // Fetch birth certificates from the API when the component is mounted
//   useEffect(() => {
//     const fetchBirthCertificates = async () => {
//       try {
//         const response = await fetch('/api/birthCertificate'); // Adjust the API endpoint
//         if (!response.ok) {
//           throw new Error('Failed to fetch birth certificates');
//         }
//         const data = await response.json();
//         console.log(data);
//         setBirthCertificates(data.data); // Assuming the response structure has a `data` field
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBirthCertificates();

//   }, []);


//   // Open the modal and set the selected certificate data
//   const openModal = (certificate) => {
//     setSelectedCertificate(certificate);
//     setIsModalOpen(true);
//   };

//   // Close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCertificate(null);
//     setIsModalOpen(false);
//   };

//   const openImageModal = (imageUrl) => {
//     setSelectedImage(imageUrl);
//     setIsModalOpenImage(true); 
//   };

//   // Function to close the modal
//   const closeImageModal = () => {
//     setIsModalOpenImage(false);
//     setSelectedImage(null);
//   };
//   const handleApprove = async () => {
//     // Optimistically update the status locally before the server response
//     const updatedCertificates = birthCertificates.map((cert) =>
//       cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया सुरू आहे' } : cert
//     );
//     setBirthCertificates(updatedCertificates);

//     try {
//       const response = await fetch(`/api/birth-certificate/${selectedCertificate._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status: 'प्रक्रिया सुरू आहे' }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update the status');
//       }

//       const data = await response.json();
//       console.log(data);  // You can log or handle the updated certificate data if necessary
//     } catch (error) {
//       console.error('Error:', error);
//       // In case of error, revert the change (optional)
//       setBirthCertificates(birthCertificates); // Revert to the original state
//     }
//   };

//   const handleReject = async (certificate) => {
//     // Optimistically update the status locally before the server response
//     const updatedCertificates = birthCertificates.map((cert) =>
//         cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया रद्द आहे' } : cert
//       );
//       setBirthCertificates(updatedCertificates);

//       try {
//         const response = await fetch(`/api/birth-certificate/${selectedCertificate._id}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ status: 'प्रक्रिया रद्द आहे' }),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to update the status');
//         }

//         const data = await response.json();
//         console.log(data);  // You can log or handle the updated certificate data if necessary
//       } catch (error) {
//         console.error('Error:', error);
//         // In case of error, revert the change (optional)
//         setBirthCertificates(birthCertificates); // Revert to the original state
//       }

//     setBirthCertificates(updatedCertificates);

//   };



//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }


//   return (
//     <div className="container mx-auto mt-8 p-4 ">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-white -mt-28">कागदपत्र तपासणी</h1>
//         <div className="flex items-center gap-2">
//           <input
//             type="text"
//             placeholder="शोधा"
//             className="border -mt-28 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button className="bg-blue-600 -mt-28 text-white px-4 py-2 rounded-md">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-4.35-4.35m2.04-5.16a7.5 7.5 0 11-10.6 0 7.5 7.5 0 0110.6 0z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="overflow-x-auto -mt-12 ">
//         <table className="w-full border-collapse border border-gray-300 ">
//           <thead className="bg-blue-400 text-white">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2 text-left">अ.क्र.</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">नाव</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">विनंती प्रकार</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">फोन नंबर</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">स्थिती <a className=''>V</a></th>
//               <th className="border border-gray-300 px-4 py-2 text-left">क्रिया</th>
//             </tr>
//           </thead>
//           <tbody>
//             {birthCertificates.length > 0 ? (
//               birthCertificates.map((row, index) => (
//                 <tr key={row._id} className="text-white">
//                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.fullName}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.requestType}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.mobileNumber}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.status}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <div className="flex gap-2">
//                       <button 
//                         className="bg-orange-500 text-white px-3 py-1 rounded-md"
//                         onClick={() => openModal(row)}
//                       >
//                         तपशील पहा
//                       </button>
//                       {/* <button className="bg-red-500 text-white px-3 py-1 rounded-md"
//                       onClick={() => handleReject(row)}
//                       >
//                         हटवणे
//                       </button> */}
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center py-4 text-gray-500">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for editing certificate */}
//       {isModalOpen && (
//         // components/BirthCertificateForm.js

//     <div className=" fixed inset-0 mt-40 bg-white bg-opacity-100   p-8 border rounded-md shadow-lg lg:ml-80 grid grid-cols-1 gap-8">
//   <h1 className="text-3xl font-bold text-center text-gray-800 ">
//     जन्म प्रमाणपत्र अर्ज फॉर्म
//   </h1>
//   <h2 className="text-center text-gray-600 mb-6 -mt-5 text-xl">
//     (Birth Certificate Application Form)
//   </h2>

//   <form className="overflow-auto max-h-[80vh] border-2 p-2 grid grid-cols-1 gap-6">
//   {/* Applicant Information Section */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">1. अर्जदाराचे पूर्ण नाव:</label>
//       <p className="text-gray-800">{selectedCertificate?.fullName || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">2. अर्जदाराचा पत्ता:</label>
//       <p className="text-gray-800">{selectedCertificate?.address || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">3. मोबाइल नंबर:</label>
//       <p className="text-gray-800">{selectedCertificate?.mobileNumber || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">4. ईमेल आयडी (असल्यास):</label>
//       <p className="text-gray-800">{selectedCertificate?.email || ''}</p>
//     </div>
//   </div>

//   <h2 className="text-center font-bold text-xl mb-6">जन्माच्या माहितीचा तपशील</h2>

//   {/* Birth Information Section */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">5. जन्मलेल्या व्यक्तीचे पूर्ण नाव:</label>
//       <p className="text-gray-800">{selectedCertificate?.birthBabyFullName || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">6. वडिलांचे नाव:</label>
//       <p className="text-gray-800">{selectedCertificate?.fatherName || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">7. आईचे नाव:</label>
//       <p className="text-gray-800">{selectedCertificate?.motherName || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">8. जन्म दिनांक:</label>
//       <p className="text-gray-800">{selectedCertificate?.dateOfBirth || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">9. जन्माचा वेळ:</label>
//       <p className="text-gray-800">{selectedCertificate?.timeOfBirth || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">10. जन्माचे ठिकाण:</label>
//       <p className="text-gray-800">{selectedCertificate?.placeOfBirth || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">11. रुग्णालय/घर:</label>
//       <p className="text-gray-800">{selectedCertificate?.nameOfHospital || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">12. पत्ता:</label>
//       <p className="text-gray-800">{selectedCertificate?.addressOfHospital || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">13. गाव/शहर:</label>
//       <p className="text-gray-800">{selectedCertificate?.cityOfHospital || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">14. तालुका:</label>
//       <p className="text-gray-800">{selectedCertificate?.talOfHospital || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">15. जिल्हा:</label>
//       <p className="text-gray-800">{selectedCertificate?.distOfHospital || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">16. लिंग:</label>
//       <p className="text-gray-800">{selectedCertificate?.genderOfBaby || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">17. जन्म नोंदणी क्रमांक (असल्यास):</label>
//       <p className="text-gray-800">{selectedCertificate?.birthRegNo || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">18. इतर कोणतीही माहिती:</label>
//       <p className="text-gray-800">{selectedCertificate?.additionalInfo || ''}</p>
//     </div>
//   </div>

//   <h2 className="text-center font-bold text-xl mb-6">दस्तऐवज अपलोड</h2>

//   {/* Document Upload Section */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">19. रुग्णालयाचा दाखला:</label>
//       {selectedCertificate?.parentId && (
//         <img
//           src={selectedCertificate?.hospitalCertificate}
//           alt="Hospital Certificate"
//           className="h-32 w-auto object-contain mb-2"
//           onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
//         />
//       )}
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">20. पालकांचे ओळखपत्र:</label>
//       {selectedCertificate?.parentId && (
//         <img
//           src={selectedCertificate?.parentId}
//           alt="Parent ID"
//           className="h-32 w-auto object-contain mb-2"
//           onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
//         />
//       )}
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">21. पत्ता पुरावा:</label>
//       {selectedCertificate?.addressProof && (
//         <img
//           src={selectedCertificate?.addressProof}
//           alt="Address Proof"
//           className="h-32 w-auto object-contain mb-2"
//           onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
//         />
//       )}
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">22. इतर:</label>
//       {selectedCertificate?.other && (
//         <img
//           src={selectedCertificate?.other}
//           alt="Other Document"
//           className="h-32 w-auto object-contain mb-2"
//           onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
//         />
//       )}
//     </div>
//     <div className="flex flex-col border-b border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">23. अर्जदाराची सही:</label>
//       {selectedCertificate?.signature && (
//         <img
//           src={selectedCertificate?.signature}
//           alt="Signature"
//           className="h-32 w-auto object-contain mb-2"
//           onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
//         />
//       )}
//     </div>
//   </div>

//   {/* Action Buttons */}
//   <div className="flex justify-center gap-6 mt-8">
//     <button
//       type="button"
//       className="bg-gray-500 text-white px-6 py-2 rounded-md"
//       onClick={closeModal}
//     >
//       बंद करा
//     </button>
//     <button
//       className="bg-red-500 text-white px-3 py-1 rounded-md"
//       onClick={handleReject}
//     >
//       हटवणे
//     </button>
//     <button
//       type="submit"
//       className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
//       onClick={handleApprove}
//     >
//       अनुमती द्या
//     </button>
//   </div>
// </form>

// </div>

//       )}

// {isModalOpenImage && (


//         <div
//            className="fixed inset-0 bg-white bg-opacity-100 mx-auto p-8 border rounded-md shadow-lg z-50 "
//           onClick={closeImageModal}
//         >
//           <div className="bg-white  p-4 rounded-md">
//             <img
//               src={selectedImage}
//               alt="Selected"
//               className="max-w-[90vw] m-auto max-h-[90vh] object-contain"
//             />
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
//               onClick={closeImageModal}
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}


//     </div>

//   );
// }

// export default NewRequest;



// import React from 'react';
// import { useState } from 'react';

// // The page component itself
// const NewRequest = ({ birthCertificates, deathCertificates, error }) => {
//   const [selectedCertificate, setSelectedCertificate] = React.useState(null);
//   const [isModalOpen, setIsModalOpen] = React.useState(false);
//   const [isModalOpenImage, setIsModalOpenImage] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Open modal with selected certificate details
//   const openModal = (certificate) => {
//     setSelectedCertificate(certificate);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCertificate(null);
//   };

//     const openImageModal = (imageUrl) => {
//     setSelectedImage(imageUrl);
//     setIsModalOpenImage(true); 
//   };

//   // Function to close the modal
//   const closeImageModal = () => {
//     setIsModalOpenImage(false);
//     setSelectedImage(null);
//   };

//   const handleApprove = async () => {
//     if (!selectedCertificate) return;

//     try {
//       // Assuming you have an API that handles the approval of the certificate
//       const response = await fetch(`/api/birth-certificatee/${selectedCertificate._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           status: 'प्रक्रिया सुरू आहे',
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to approve the certificate');
//       }

//       // Update the local state after approval
//       const updatedCertificates = birthCertificates.map(cert => 
//         cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया सुरू आहे' } : cert
//       );

//       // Optionally, update the state of certificates
//       // setBirthCertificates(updatedCertificates);  // If you're using state for certificates
//       closeModal();  // Close the modal after the operation is complete
//     } catch (error) {
//       console.error('Error approving certificate:', error);
//     }
//   };

//   // Reject the certificate
//   const handleReject = async () => {
//     if (!selectedCertificate) return;

//     try {
//       // Assuming you have an API that handles the rejection of the certificate
//       const response = await fetch(`/api/birth-certificatee/${selectedCertificate._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           status: 'प्रक्रिया रद्द आहे',
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to reject the certificate');
//       }

//       // Update the local state after rejection
//       const updatedCertificates = birthCertificates.map(cert => 
//         cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया रद्द आहे' } : cert
//       );

//       // Optionally, update the state of certificates
//       // setBirthCertificates(updatedCertificates);  // If you're using state for certificates
//       closeModal();  // Close the modal after the operation is complete
//     } catch (error) {
//       console.error('Error rejecting certificate:', error);
//     }
//   };


//   // If there's an error fetching the data, display it
//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className="container mx-auto mt-4 p-4">
//       {/* Header Section */}
//       <div className="text-center  items-center mb-4">
//         <h1 className="text-2xl font-bold text-white">कागदपत्र तपासणी</h1>
//       </div>

//       {/* Table Section */}
//       <div className="overflow-x-auto p-10">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-blue-400 text-white">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2 text-left">अ.क्र.</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">नाव</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">विनंती प्रकार</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">फोन नंबर</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">स्थिती</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">क्रिया</th>
//             </tr>
//           </thead>
//           <tbody>
//             {birthCertificates.length > 0 ? (
//               birthCertificates.map((row, index) => (
//                 <tr key={row._id} className="text-white">
//                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.fullName}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.requestType}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.mobileNumber}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.status}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       className="bg-orange-500 text-white px-3 py-1 rounded-md"
//                       onClick={() => openModal(row)}
//                     >
//                       तपशील पहा
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center py-4 text-gray-500">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//       </div>

//       {/* Modal for editing certificate */}
//       {isModalOpen && (
// //         // components/BirthCertificateForm.js

//     <div className=" fixed inset-0 mt-32 mb-2 mr-10  bg-white bg-opacity-100 p-8 border rounded-md shadow-lg lg:ml-96 grid grid-cols-1 gap-8">
//   <h1 className="text-2xl -mt-5 font-bold text-center text-gray-800 ">
//     जन्म प्रमाणपत्र अर्ज फॉर्म
//   </h1>
//   <h2 className="text-center text-gray-600  -mt-10 text-xl">
//     (Birth Certificate Application Form)
//   </h2>

//   <form className="overflow-auto max-h-[80vh] border-2 p-2 grid grid-cols-1 gap-6">
//   {/* Applicant Information Section */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">1. अर्जदाराचे पूर्ण नाव:</label>
//       <p className="text-gray-800">{selectedCertificate?.fullName || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">2. अर्जदाराचा पत्ता:</label>
//       <p className="text-gray-800">{selectedCertificate?.address || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">3. मोबाइल नंबर:</label>
//       <p className="text-gray-800">{selectedCertificate?.mobileNumber || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">4. ईमेल आयडी (असल्यास):</label>
//       <p className="text-gray-800">{selectedCertificate?.email || ''}</p>
//     </div>
//   </div>

//   <h2 className="text-center font-bold text-xl mb-6">जन्माच्या माहितीचा तपशील</h2>

//   {/* Birth Information Section */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">5. जन्मलेल्या व्यक्तीचे पूर्ण नाव:</label>
//       <p className="text-gray-800">{selectedCertificate?.birthBabyFullName || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">6. वडिलांचे नाव:</label>
//       <p className="text-gray-800">{selectedCertificate?.fatherName || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">7. आईचे नाव:</label>
//       <p className="text-gray-800">{selectedCertificate?.motherName || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">8. जन्म दिनांक:</label>
//       <p className="text-gray-800">{selectedCertificate?.dateOfBirth || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">9. जन्माचा वेळ:</label>
//       <p className="text-gray-800">{selectedCertificate?.timeOfBirth || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">10. जन्माचे ठिकाण:</label>
//       <p className="text-gray-800">{selectedCertificate?.placeOfBirth || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">11. रुग्णालय/घर:</label>
//       <p className="text-gray-800">{selectedCertificate?.nameOfHospital || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">12. पत्ता:</label>
//       <p className="text-gray-800">{selectedCertificate?.addressOfHospital || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">13. गाव/शहर:</label>
//       <p className="text-gray-800">{selectedCertificate?.cityOfHospital || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">14. तालुका:</label>
//       <p className="text-gray-800">{selectedCertificate?.talOfHospital || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">15. जिल्हा:</label>
//       <p className="text-gray-800">{selectedCertificate?.distOfHospital || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">16. लिंग:</label>
//       <p className="text-gray-800">{selectedCertificate?.genderOfBaby || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">17. जन्म नोंदणी क्रमांक (असल्यास):</label>
//       <p className="text-gray-800">{selectedCertificate?.birthRegNo || ''}</p>
//     </div>
//     <div className="flex flex-col border-b border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">18. इतर कोणतीही माहिती:</label>
//       <p className="text-gray-800">{selectedCertificate?.additionalInfo || ''}</p>
//     </div>
//   </div>

//   <h2 className="text-center font-bold text-xl mb-6">दस्तऐवज अपलोड</h2>

//   {/* Document Upload Section */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">19. रुग्णालयाचा दाखला:</label>
//       {selectedCertificate?.parentId && (
//         <img
//           src={selectedCertificate?.hospitalCertificate}
//           alt="Hospital Certificate"
//           className="h-32 w-auto object-contain mb-2"
//           onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
//         />
//       )}
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">20. पालकांचे ओळखपत्र:</label>
//       {selectedCertificate?.parentId && (
//         <img
//           src={selectedCertificate?.parentId}
//           alt="Parent ID"
//           className="h-32 w-auto object-contain mb-2"
//           onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
//         />
//       )}
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">21. पत्ता पुरावा:</label>
//       {selectedCertificate?.addressProof && (
//         <img
//           src={selectedCertificate?.addressProof}
//           alt="Address Proof"
//           className="h-32 w-auto object-contain mb-2"
//           onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
//         />
//       )}
//     </div>
//     <div className="flex flex-col border-b border-r border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">22. इतर:</label>
//       {selectedCertificate?.other && (
//         <img
//           src={selectedCertificate?.other}
//           alt="Other Document"
//           className="h-32 w-auto object-contain mb-2"
//           onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
//         />
//       )}
//     </div>
//     <div className="flex flex-col border-b border-gray-300 p-2">
//       <label className="text-gray-700 font-semibold">23. अर्जदाराची सही:</label>
//       {selectedCertificate?.signature && (
//         <img
//           src={selectedCertificate?.signature}
//           alt="Signature"
//           className="h-32 w-auto object-contain mb-2"
//           onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
//         />
//       )}
//     </div>
//   </div>

//   {/* Action Buttons */}
//   <div className="flex justify-center gap-6 mt-8">
//     <button
//       type="button"
//       className="bg-gray-500 text-white px-6 py-2 rounded-md"
//       onClick={closeModal}
//     >
//       बंद करा
//     </button>
//     <button
//       className="bg-red-500 text-white px-3 py-1 rounded-md"
//       onClick={handleReject}
//     >
//       हटवणे
//     </button>
//     <button
//       type="submit"
//       className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
//       onClick={handleApprove}
//     >
//       अनुमती द्या
//     </button>
//   </div>
// </form>

// </div>

//       )}

// {isModalOpenImage && (


//         <div
//            className="fixed inset-0  ml-96 mt-24 mr-5  bg-transparent bg-opacity-100 mx-auto p-8 border rounded-md shadow-lg  "
//           onClick={closeImageModal}
//         >
//           <div className="bg-white  p-4 rounded-md">
//             <img
//               src={selectedImage}
//               alt="Selected"
//               className="max-w-[90vw] m-auto max-h-[90vh] object-contain"
//             />
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
//               onClick={closeImageModal}
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   try {
//     // Fetch birth certificate data
//     const birthRes = await fetch('${process.env.NEXT_PUBLIC_HOST}/api/birthCertificate');
//     if (!birthRes.ok) {
//       throw new Error(`Failed to fetch birth certificate data. Status: ${birthRes.status}`);
//     }
//     const birthContentType = birthRes.headers.get('Content-Type');
//     let birthCertificates = [];
//     if (birthContentType && birthContentType.includes('application/json')) {
//       const birthData = await birthRes.json();
//       birthCertificates = birthData.data || [];
//     } else {
//       throw new Error('Birth certificate response is not JSON');
//     }

//     // Fetch death certificate data
//     const deathRes = await fetch('${process.env.NEXT_PUBLIC_HOST}/api/deathCertificate');
//     let deathCertificates = [];
//     let deathError = null;

//     if (deathRes.ok) {
//       const deathContentType = deathRes.headers.get('Content-Type');
//       if (deathContentType && deathContentType.includes('application/json')) {
//         const deathData = await deathRes.json();
//         deathCertificates = deathData.data || [];
//       } else {
//         deathError = 'Death certificate response is not JSON';
//       }
//     } else {
//       deathError = `Failed to fetch death certificate data. Status: ${deathRes.status}`;
//     }

//     // Return the data along with error message (if any)
//     return {
//       props: {
//         birthCertificates,
//         deathCertificates,
//         deathError,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         birthCertificates: [],
//         deathCertificates: [],
//         error: error.message || 'Failed to load data',
//       },
//     };
//   }
// }



// export default NewRequest;



// import React, { useState } from 'react';
// import mongoose from 'mongoose';

// // The page component itself
// const NewRequest = ({ birthCertificates, deathCertificates, error }) => {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isModalOpenImage, setIsModalOpenImage] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedType, setSelectedType] = useState('birth');  // Default to birth certificates

//   // Open modal with selected certificate details
//   const openModal = (certificate) => {
//     setSelectedCertificate(certificate);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCertificate(null);
//   };

//   // Open image modal
//   const openImageModal = (imageUrl) => {
//     setSelectedImage(imageUrl);
//     setIsModalOpenImage(true);
//   };

//   // Close image modal
//   const closeImageModal = () => {
//     setIsModalOpenImage(false);
//     setSelectedImage(null);
//   };

//   // Approve the certificate
//   const handleApprove = async () => {
//     if (!selectedCertificate) return;

//     try {
//       const response = await fetch(`/api/birth-certificatee/${selectedCertificate._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           status: 'प्रक्रिया सुरू आहे',
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to approve the certificate');
//       }

//       const updatedCertificates = birthCertificates.map(cert => 
//         cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया सुरू आहे' } : cert
//       );

//       closeModal();
//     } catch (error) {
//       console.error('Error approving certificate:', error);
//     }
//   };

//   // Reject the certificate
//   const handleReject = async () => {
//     if (!selectedCertificate) return;

//     try {
//       const response = await fetch(`/api/birth-certificatee/${selectedCertificate._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           status: 'प्रक्रिया रद्द आहे',
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to reject the certificate');
//       }

//       const updatedCertificates = birthCertificates.map(cert => 
//         cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया रद्द आहे' } : cert
//       );

//       closeModal();
//     } catch (error) {
//       console.error('Error rejecting certificate:', error);
//     }
//   };

//   // If there's an error fetching the data, display it
//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   // Filtered list of certificates based on selected type
//   const filteredCertificates = selectedType === 'birth' ? birthCertificates : deathCertificates;

//   return (
//     <div className="container mx-auto mt-4 p-4">
//       {/* Header Section */}
//       <div className="text-center items-center mb-4">
//         <h1 className="text-2xl font-bold text-white">कागदपत्र तपासणी</h1>
//       </div>

//       {/* Certificate Type Dropdown */}
//       <div className="mb-4">
//         <label className="text-white">Select Certificate Type: </label>
//         <select 
//           value={selectedType} 
//           onChange={(e) => setSelectedType(e.target.value)} 
//           className="ml-2 p-2 rounded-md"
//         >
//           <option value="birth">Birth Certificates</option>
//           <option value="death">Death Certificates</option>
//         </select>
//       </div>

//       {/* Table Section */}
//       <div className="overflow-x-auto p-10">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-blue-400 text-white">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2 text-left">अ.क्र.</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">नाव</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">विनंती प्रकार</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">फोन नंबर</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">स्थिती</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">क्रिया</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCertificates.length > 0 ? (
//               filteredCertificates.map((row, index) => (
//                 <tr key={row._id} className="text-white">
//                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.fullName}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.requestType}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.mobileNumber}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.status}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       className="bg-orange-500 text-white px-3 py-1 rounded-md"
//                       onClick={() => openModal(row)}
//                     >
//                       तपशील पहा
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center py-4 text-gray-500">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for editing certificate */}


// {isModalOpen && (
//   <div className="fixed inset-0 mt-32 mb-2 mr-10 bg-white bg-opacity-100 p-8 border rounded-md shadow-lg lg:ml-96 grid grid-cols-1 gap-8">
//     <h1 className="text-2xl -mt-5 font-bold text-center text-gray-800 ">
//       {deathCertificate ? 'मृत्यू प्रमाणपत्र अर्ज फॉर्म' : 'जन्म प्रमाणपत्र अर्ज फॉर्म'}
//     </h1>
//     <h2 className="text-center text-gray-600 -mt-10 text-xl">
//       ({deathCertificate ? 'Death Certificate Application Form' : 'Birth Certificate Application Form'})
//     </h2>

//     <form className="overflow-auto max-h-[80vh] border-2 p-2 grid grid-cols-1 gap-6">
//       {/* Applicant Information Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//         <div className="flex flex-col border-b border-r border-gray-300 p-2">
//           <label className="text-gray-700 font-semibold">1. अर्जदाराचे पूर्ण नाव:</label>
//           <p className="text-gray-800">{selectedCertificate?.fullName || ''}</p>
//         </div>
//         <div className="flex flex-col border-b border-r border-gray-300 p-2">
//           <label className="text-gray-700 font-semibold">2. अर्जदाराचा पत्ता:</label>
//           <p className="text-gray-800">{selectedCertificate?.address || ''}</p>
//         </div>
//         <div className="flex flex-col border-b border-r border-gray-300 p-2">
//           <label className="text-gray-700 font-semibold">3. मोबाइल नंबर:</label>
//           <p className="text-gray-800">{selectedCertificate?.mobileNumber || ''}</p>
//         </div>
//         <div className="flex flex-col border-b border-gray-300 p-2">
//           <label className="text-gray-700 font-semibold">4. ईमेल आयडी (असल्यास):</label>
//           <p className="text-gray-800">{selectedCertificate?.email || ''}</p>
//         </div>
//       </div>

//       {/* Death Information Section */}
//       {deathCertificate && (
//         <div>
//           <h2 className="text-center font-bold text-xl mb-6">मृत्यूच्या माहितीचा तपशील</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//             <div className="flex flex-col border-b border-r border-gray-300 p-2">
//               <label className="text-gray-700 font-semibold">5. मृत्यू झालेल्या व्यक्तीचे पूर्ण नाव:</label>
//               <p className="text-gray-800">{selectedCertificate?.deathFullName || ''}</p>
//             </div>
//             <div className="flex flex-col border-b border-r border-gray-300 p-2">
//               <label className="text-gray-700 font-semibold">6. मृत्यू झालेल्या व्यक्तीचा जन्म दिनांक:</label>
//               <p className="text-gray-800">{selectedCertificate?.deathDateOfBirth || ''}</p>
//             </div>
//             <div className="flex flex-col border-b border-r border-gray-300 p-2">
//               <label className="text-gray-700 font-semibold">7. मृत्यू दिनांक:</label>
//               <p className="text-gray-800">{selectedCertificate?.deathDateOfDeath || ''}</p>
//             </div>
//             <div className="flex flex-col border-b border-r border-gray-300 p-2">
//               <label className="text-gray-700 font-semibold">8. मृत्यू झालेल्या व्यक्तीचे लिंग:</label>
//               <p className="text-gray-800">{selectedCertificate?.deathGender || ''}</p>
//             </div>
//             <div className="flex flex-col border-b border-r border-gray-300 p-2">
//               <label className="text-gray-700 font-semibold">9. मृत्यू ठिकाण:</label>
//               <p className="text-gray-800">{selectedCertificate?.placeOfDeath || ''}</p>
//             </div>
//             <div className="flex flex-col border-b border-r border-gray-300 p-2">
//               <label className="text-gray-700 font-semibold">10. मृत्यू नोंदणी क्रमांक (असल्यास):</label>
//               <p className="text-gray-800">{selectedCertificate?.deathRegistrationNumber || ''}</p>
//             </div>
//             <div className="flex flex-col border-b border-r border-gray-300 p-2">
//               <label className="text-gray-700 font-semibold">11. आधार कार्ड (असल्यास):</label>
//               <p className="text-gray-800">{selectedCertificate?.deathAadhaarCard || ''}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Document Upload Section */}
//       <h2 className="text-center font-bold text-xl mb-6">दस्तऐवज अपलोड</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//         <div className="flex flex-col border-b border-r border-gray-300 p-2">
//           <label className="text-gray-700 font-semibold">12. पत्ता पुरावा:</label>
//           {selectedCertificate?.addressProof && (
//             <img
//               src={selectedCertificate?.addressProof}
//               alt="Address Proof"
//               className="h-32 w-auto object-contain mb-2"
//               onClick={() => openImageModal(selectedCertificate?.addressProof)}
//             />
//           )}
//         </div>
//         <div className="flex flex-col border-b border-gray-300 p-2">
//           <label className="text-gray-700 font-semibold">13. इतर:</label>
//           {selectedCertificate?.other && (
//             <img
//               src={selectedCertificate?.other}
//               alt="Other Document"
//               className="h-32 w-auto object-contain mb-2"
//               onClick={() => openImageModal(selectedCertificate?.other)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-center gap-6 mt-8">
//         <button
//           type="button"
//           className="bg-gray-500 text-white px-6 py-2 rounded-md"
//           onClick={closeModal}
//         >
//           बंद करा
//         </button>
//         <button
//           className="bg-red-500 text-white px-3 py-1 rounded-md"
//           onClick={handleReject}
//         >
//           हटवणे
//         </button>
//         <button
//           type="submit"
//           className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
//           onClick={handleApprove}
//         >
//           अनुमती द्या
//         </button>
//       </div>
//     </form>
//   </div>
// )}


// {isModalOpenImage && (


//         <div
//            className="fixed inset-0  ml-96 mt-24 mr-5  bg-transparent bg-opacity-100 mx-auto p-8 border rounded-md shadow-lg  "
//           onClick={closeImageModal}
//         >
//           <div className="bg-white  p-4 rounded-md">
//             <img
//               src={selectedImage}
//               alt="Selected"
//               className="max-w-[90vw] m-auto max-h-[90vh] object-contain"
//             />
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
//               onClick={closeImageModal}
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }

//   try {
//     const birthRes = await fetch('${process.env.NEXT_PUBLIC_HOST}/api/birthCertificate');
//     if (!birthRes.ok) {
//       const errorText = await birthRes.text();  // Capture HTML error response
//       console.error('Error fetching birth certificate data:', errorText);
//       throw new Error(`Failed to fetch birth certificate data. Status: ${birthRes.status}`);
//     }
//     const birthData = await birthRes.json();
//     const birthCertificates = birthData.data || [];

//     const deathRes = await fetch('${process.env.NEXT_PUBLIC_HOST}/api/death-certificate');
//     if (!deathRes.ok) {
//       const errorText = await deathRes.text();
//       console.error('Error fetching death certificate data:', errorText);
//       throw new Error(`Failed to fetch death certificate data. Status: ${deathRes.status}`);
//     }
//     const deathData = await deathRes.json();
//     const deathCertificates = deathData.data || [];

//     return {
//       props: {
//         birthCertificates,
//         deathCertificates,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         birthCertificates: [],
//         deathCertificates: [],
//         error: error.message || 'Failed to load data',
//       },
//     };
//   }
// }

// export default NewRequest;



// import React, { useState } from 'react';
// import mongoose from 'mongoose';

// // The page component itself
// const NewRequest = ({ birthCertificates, deathCertificates, error }) => {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isModalOpenImage, setIsModalOpenImage] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedType, setSelectedType] = useState('birth');  // Default to birth certificates

//   // Open modal with selected certificate details
//   const openModal = (certificate) => {
//     setSelectedCertificate(certificate);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCertificate(null);
//   };

//   // Open image modal
//   const openImageModal = (imageUrl) => {
//     setSelectedImage(imageUrl);
//     setIsModalOpenImage(true);
//   };

//   // Close image modal
//   const closeImageModal = () => {
//     setIsModalOpenImage(false);
//     setSelectedImage(null);
//   };

//   // Approve the certificate
//   const handleApprove = async () => {
//     if (!selectedCertificate) return;

//     try {
//       const response = await fetch(`/api/birth-certificatee/${selectedCertificate._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           status: 'प्रक्रिया सुरू आहे',
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to approve the certificate');
//       }

//       const updatedCertificates = birthCertificates.map(cert => 
//         cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया सुरू आहे' } : cert
//       );

//       closeModal();
//     } catch (error) {
//       console.error('Error approving certificate:', error);
//     }
//   };

//   // Reject the certificate
//   const handleReject = async () => {
//     if (!selectedCertificate) return;

//     try {
//       const response = await fetch(`/api/birth-certificatee/${selectedCertificate._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           status: 'प्रक्रिया रद्द आहे',
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to reject the certificate');
//       }

//       const updatedCertificates = birthCertificates.map(cert => 
//         cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया रद्द आहे' } : cert
//       );

//       closeModal();
//     } catch (error) {
//       console.error('Error rejecting certificate:', error);
//     }
//   };

//   // If there's an error fetching the data, display it
//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   // Filtered list of certificates based on selected type
//   const filteredCertificates = selectedType === 'birth' ? birthCertificates : deathCertificates;

//   return (
//     <div className="container mx-auto mt-4 p-4">
//       {/* Header Section */}
//       <div className="text-center items-center mb-4">
//         <h1 className="text-2xl font-bold text-white">कागदपत्र तपासणी</h1>
//       </div>

//       {/* Certificate Type Dropdown */}
//       <div className="mb-4">
//         <label className="text-white">Select Certificate Type: </label>
//         <select 
//           value={selectedType} 
//           onChange={(e) => setSelectedType(e.target.value)} 
//           className="ml-2 p-2 rounded-md"
//         >
//           <option value="birth">Birth Certificates</option>
//           <option value="death">Death Certificates</option>
//         </select>
//       </div>

//       {/* Table Section */}
//       <div className="overflow-x-auto p-10">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-blue-400 text-white">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2 text-left">अ.क्र.</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">नाव</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">विनंती प्रकार</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">फोन नंबर</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">स्थिती</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">क्रिया</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCertificates.length > 0 ? (
//               filteredCertificates.map((row, index) => (
//                 <tr key={row._id} className="text-white">
//                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.fullName}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.requestType}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.mobileNumber}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.status}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       className="bg-orange-500 text-white px-3 py-1 rounded-md"
//                       onClick={() => openModal(row)}
//                     >
//                       तपशील पहा
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center py-4 text-gray-500">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for editing certificate */}
//       {isModalOpen && (
//         <div className="fixed inset-0 mt-32 mb-2 mr-10 bg-white bg-opacity-100 p-8 border rounded-md shadow-lg lg:ml-96 grid grid-cols-1 gap-8">
//           <h1 className="text-2xl -mt-5 font-bold text-center text-gray-800 ">
//             {selectedType === 'death' ? 'मृत्यू प्रमाणपत्र अर्ज फॉर्म' : 'जन्म प्रमाणपत्र अर्ज फॉर्म'}
//           </h1>
//           <h2 className="text-center text-gray-600 -mt-10 text-xl">
//             ({selectedType === 'death' ? 'Death Certificate Application Form' : 'Birth Certificate Application Form'})
//           </h2>

//           <form className="overflow-auto max-h-[80vh] border-2 p-2 grid grid-cols-1 gap-6">
//             {/* Applicant Information Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//               <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">1. अर्जदाराचे पूर्ण नाव:</label>
//                 <p className="text-gray-800">{selectedCertificate?.fullName || ''}</p>
//               </div>
//               <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">2. अर्जदाराचा पत्ता:</label>
//                 <p className="text-gray-800">{selectedCertificate?.address || ''}</p>
//               </div>
//               <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">3. मोबाइल नंबर:</label>
//                 <p className="text-gray-800">{selectedCertificate?.mobileNumber || ''}</p>
//               </div>
//               <div className="flex flex-col border-b border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">4. ईमेल आयडी (असल्यास):</label>
//                 <p className="text-gray-800">{selectedCertificate?.email || ''}</p>
//               </div>
//             </div>

//             {/* Death Information Section */}
//             {selectedType === 'death' && (
//               <div>
//                 <h2 className="text-center font-bold text-xl mb-6">मृत्यूच्या माहितीचा तपशील</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">5. मृत्यू झालेल्या व्यक्तीचे पूर्ण नाव:</label>
//                     <p className="text-gray-800">{selectedCertificate?.deathFullName || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">6. मृत्यू झालेल्या व्यक्तीचा जन्म दिनांक:</label>
//                     <p className="text-gray-800">{selectedCertificate?.deathDateOfBirth || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">7. मृत्यू दिनांक:</label>
//                     <p className="text-gray-800">{selectedCertificate?.deathDateOfDeath || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">8. मृत्यू झालेल्या व्यक्तीचे लिंग:</label>
//                     <p className="text-gray-800">{selectedCertificate?.deathGender || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">9. मृत्यू ठिकाण:</label>
//                     <p className="text-gray-800">{selectedCertificate?.placeOfDeath || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">10. मृत्यू नोंदणी क्रमांक (असल्यास):</label>
//                     <p className="text-gray-800">{selectedCertificate?.deathRegistrationNumber || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">11. आधार कार्ड (असल्यास):</label>
//                     <p className="text-gray-800">{selectedCertificate?.deathAadhaarCard || ''}</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Document Upload Section */}
//             <h2 className="text-center font-bold text-xl mb-6">दस्तऐवज अपलोड</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//               <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">12. पत्ता पुरावा:</label>
//                 {selectedCertificate?.addressProof && (
//                   <img
//                     src={selectedCertificate?.addressProof}
//                     alt="Address Proof"
//                     className="h-32 w-auto object-contain mb-2"
//                     onClick={() => openImageModal(selectedCertificate?.addressProof)}
//                   />
//                 )}
//               </div>
//               <div className="flex flex-col border-b border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">13. इतर:</label>
//                 {selectedCertificate?.other && (
//                   <img
//                     src={selectedCertificate?.other}
//                     alt="Other Document"
//                     className="h-32 w-auto object-contain mb-2"
//                     onClick={() => openImageModal(selectedCertificate?.other)}
//                   />
//                 )}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-center gap-6 mt-8">
//               <button
//                 type="button"
//                 className="bg-gray-500 text-white px-6 py-2 rounded-md"
//                 onClick={closeModal}
//               >
//                 बंद करा
//               </button>
//               <button
//                 className="bg-red-500 text-white px-3 py-1 rounded-md"
//                 onClick={handleReject}
//               >
//                 हटवणे
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
//                 onClick={handleApprove}
//               >
//                 अनुमती द्या
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Image Modal */}
//       {isModalOpenImage && (
//         <div
//           className="fixed inset-0  ml-96 mt-24 mr-5 bg-transparent bg-opacity-100 mx-auto p-8 border rounded-md shadow-lg"
//           onClick={closeImageModal}
//         >
//           <div className="bg-white p-4 rounded-md">
//             <img
//               src={selectedImage}
//               alt="Selected"
//               className="max-w-[90vw] m-auto max-h-[90vh] object-contain"
//             />
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
//               onClick={closeImageModal}
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }

//   try {
//     const birthRes = await fetch('${process.env.NEXT_PUBLIC_HOST}/api/birthCertificate');
//     if (!birthRes.ok) {
//       const errorText = await birthRes.text();  // Capture HTML error response
//       console.error('Error fetching birth certificate data:', errorText);
//       throw new Error(`Failed to fetch birth certificate data. Status: ${birthRes.status}`);
//     }
//     const birthData = await birthRes.json();
//     const birthCertificates = birthData.data || [];

//     const deathRes = await fetch('${process.env.NEXT_PUBLIC_HOST}/api/death-certificate');
//     if (!deathRes.ok) {
//       const errorText = await deathRes.text();
//       console.error('Error fetching death certificate data:', errorText);
//       throw new Error(`Failed to fetch death certificate data. Status: ${deathRes.status}`);
//     }
//     const deathData = await deathRes.json();
//     const deathCertificates = deathData.data || [];

//     return {
//       props: {
//         birthCertificates,
//         deathCertificates,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         birthCertificates: [],
//         deathCertificates: [],
//         error: error.message || 'Failed to load data',
//       },
//     };
//   }
// }

// export default NewRequest;



// import React, { useState } from 'react';
// import mongoose from 'mongoose';

// const NewRequest = ({ birthCertificates, deathCertificates, marriageCertificates, error }) => {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isModalOpenImage, setIsModalOpenImage] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedType, setSelectedType] = useState('birth');  // Default to birth certificates

//   const openModal = (certificate) => {
//     setSelectedCertificate(certificate);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCertificate(null);
//   };

//   const openImageModal = (imageUrl) => {
//     setSelectedImage(imageUrl);
//     setIsModalOpenImage(true);
//   };

//   const closeImageModal = () => {
//     setIsModalOpenImage(false);
//     setSelectedImage(null);
//   };

//   const handleApprove = async () => {
//     if (!selectedCertificate) return;

//     try {
//       const response = await fetch(`/api/birth-certificatee/${selectedCertificate._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           status: 'प्रक्रिया सुरू आहे',
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to approve the certificate');
//       }

//       const updatedCertificates = birthCertificates.map(cert => 
//         cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया सुरू आहे' } : cert
//       );

//       closeModal();
//     } catch (error) {
//       console.error('Error approving certificate:', error);
//     }
//   };

//   const handleReject = async () => {
//     if (!selectedCertificate) return;

//     try {
//       const response = await fetch(`/api/birth-certificatee/${selectedCertificate._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           status: 'प्रक्रिया रद्द आहे',
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to reject the certificate');
//       }

//       const updatedCertificates = birthCertificates.map(cert => 
//         cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया रद्द आहे' } : cert
//       );

//       closeModal();
//     } catch (error) {
//       console.error('Error rejecting certificate:', error);
//     }
//   };

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   const filteredCertificates = selectedType === 'birth' ? birthCertificates : deathCertificates;

//   return (
//     <div className="container mx-auto mt-4 p-4">
//       {/* Header Section */}
//       <div className="text-center items-center mb-4">
//         <h1 className="text-2xl font-bold text-white">कागदपत्र तपासणी</h1>
//       </div>

//       {/* Certificate Type Dropdown */}
//       <div className="mb-4">
//         <label className="text-white">Select Certificate Type: </label>
//         <select 
//           value={selectedType} 
//           onChange={(e) => setSelectedType(e.target.value)} 
//           className="ml-2 p-2 rounded-md"
//         >
//           <option value="birth">Birth Certificates</option>
//           <option value="death">Death Certificates</option>
//         </select>
//       </div>

//       {/* Table Section */}
//       <div className="overflow-x-auto p-10">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-blue-400 text-white">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2 text-left">अ.क्र.</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">नाव</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">विनंती प्रकार</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">फोन नंबर</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">स्थिती</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">क्रिया</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCertificates.length > 0 ? (
//               filteredCertificates.map((row, index) => (
//                 <tr key={row._id} className="text-white">
//                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.fullName}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.requestType}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.mobileNumber}</td>
//                   <td className="border border-gray-300 px-4 py-2">{row.status}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       className="bg-orange-500 text-white px-3 py-1 rounded-md"
//                       onClick={() => openModal(row)}
//                     >
//                       तपशील पहा
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center py-4 text-gray-500">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for editing certificate */}
//       {isModalOpen && (
//         <div className="fixed inset-0 mt-32 mb-2 mr-10 bg-white bg-opacity-100 p-8 border rounded-md shadow-lg lg:ml-96 grid grid-cols-1 gap-8">
//           <h1 className="text-2xl -mt-5 font-bold text-center text-gray-800 ">
//             {selectedType === 'death' ? 'मृत्यू प्रमाणपत्र अर्ज फॉर्म' : 'जन्म प्रमाणपत्र अर्ज फॉर्म'}
//           </h1>
//           <h2 className="text-center text-gray-600 -mt-10 text-xl">
//             ({selectedType === 'death' ? 'Death Certificate Application Form' : 'Birth Certificate Application Form'})
//           </h2>

//           <form className="overflow-auto max-h-[80vh] border-2 p-2 grid grid-cols-1 gap-6">
//             {/* Applicant Information Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//               <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">1. अर्जदाराचे पूर्ण नाव:</label>
//                 <p className="text-gray-800">{selectedCertificate?.fullName || ''}</p>
//               </div>
//               <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">2. अर्जदाराचा पत्ता:</label>
//                 <p className="text-gray-800">{selectedCertificate?.address || ''}</p>
//               </div>
//               <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">3. मोबाइल नंबर:</label>
//                 <p className="text-gray-800">{selectedCertificate?.mobileNumber || ''}</p>
//               </div>
//               <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">4. ईमेल आयडी (असल्यास):</label>
//                 <p className="text-gray-800">{selectedCertificate?.email || ''}</p>
//               </div>
//             </div>

//             {/* Birth Certificate Fields */}
//             {selectedType === 'birth' && (
//               <div>
//                 <h2 className="text-center font-bold text-xl mb-6">जन्म प्रमाणपत्र माहिती</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">5. बाळाचे पूर्ण नाव:</label>
//                     <p className="text-gray-800">{selectedCertificate?.birthBabyFullName || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">6. वडिलांचे नाव:</label>
//                     <p className="text-gray-800">{selectedCertificate?.fatherName || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">7. आईचे नाव:</label>
//                     <p className="text-gray-800">{selectedCertificate?.motherName || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">8. जन्म दिनांक:</label>
//                     <p className="text-gray-800">{selectedCertificate?.dateOfBirth || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">9. जन्म वेळ:</label>
//                     <p className="text-gray-800">{selectedCertificate?.timeOfBirth || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">10. जन्म स्थान:</label>
//                     <p className="text-gray-800">{selectedCertificate?.placeOfBirth || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">11. रुग्णालयाचे नाव:</label>
//                     <p className="text-gray-800">{selectedCertificate?.nameOfHospital || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">12. रुग्णालय तालुका:</label>
//                     <p className="text-gray-800">{selectedCertificate?.talOfHospital || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">13. रुग्णालय पत्ता:</label>
//                     <p className="text-gray-800">{selectedCertificate?.addressOfHospital || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">14. रुग्णालय शहर:</label>
//                     <p className="text-gray-800">{selectedCertificate?.cityOfHospital || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">15. रुग्णालय जिल्हा:</label>
//                     <p className="text-gray-800">{selectedCertificate?.distOfHospital || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">16. बाळाचे लिंग:</label>
//                     <p className="text-gray-800">{selectedCertificate?.genderOfBaby || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">17. जन्म नोंदणी क्रमांक:</label>
//                     <p className="text-gray-800">{selectedCertificate?.birthRegNo || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">18. अतिरिक्त माहिती:</label>
//                     <p className="text-gray-800">{selectedCertificate?.additionalInfo || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">19. रुग्णालय प्रमाणपत्र:</label>
//                     <p className="text-gray-800">{selectedCertificate?.hospitalCertificate || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">20. पालकांची ओळख:</label>
//                     <p className="text-gray-800">{selectedCertificate?.parentId || ''}</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Death Certificate Fields */}
//             {selectedType === 'death' && (
//               <div>
//                 <h2 className="text-center font-bold text-xl mb-6">मृत्यू प्रमाणपत्र माहिती</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">5. मृत्यू झालेल्या व्यक्तीचे पूर्ण नाव:</label>
//                     <p className="text-gray-800">{selectedCertificate?.deathFullName || ''}</p>
//                   </div>
//                   {/* More fields for Death Certificate */}
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">6. मृत्यू झालेल्या व्यक्तीचा जन्म दिनांक:</label>
//                     <p className="text-gray-800">{selectedCertificate?.deathDateOfBirth || ''}</p>
//                   </div>

//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">6. मृत्यू झालेल्या व्यक्तीचा जन्म दिनांक:</label>
//                     <p className="text-gray-800">{selectedCertificate?.deathGender || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">6. मृत्यू झालेल्या व्यक्तीचा जन्म दिनांक:</label>
//                     <p className="text-gray-800">{selectedCertificate?.placeOfDeath || ''}</p>
//                   </div>
//                   <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                     <label className="text-gray-700 font-semibold">6. मृत्यू झालेल्या व्यक्तीचा जन्म दिनांक:</label>
//                     <p className="text-gray-800">{selectedCertificate?.deathRegistrationNumber || ''}</p>
//                   </div>

//                 </div>
//               </div>
//             )}

//             {/* Document Upload Section */}
//             <h2 className="text-center font-bold text-xl mb-6">दस्तऐवज अपलोड</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
//               <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">21. पत्ता पुरावा:</label>
//                 {selectedCertificate?.addressProof && (
//                   <img
//                     src={selectedCertificate?.deathAadhaarCard}
//                     alt="deathAadhaarCard"
//                     className="h-32 w-auto object-contain mb-2"
//                     onClick={() => openImageModal(selectedCertificate?.deathAadhaarCard)}
//                   />
//                 )}
//               </div>
//               <div className="flex flex-col border-b border-r border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">21. पत्ता पुरावा:</label>
//                 {selectedCertificate?.addressProof && (
//                   <img
//                     src={selectedCertificate?.addressProof}
//                     alt="Address Proof"
//                     className="h-32 w-auto object-contain mb-2"
//                     onClick={() => openImageModal(selectedCertificate?.addressProof)}
//                   />
//                 )}
//               </div>
//               <div className="flex flex-col border-b border-gray-300 p-2">
//                 <label className="text-gray-700 font-semibold">22. इतर:</label>
//                 {selectedCertificate?.other && (
//                   <img
//                     src={selectedCertificate?.other}
//                     alt="Other Document"
//                     className="h-32 w-auto object-contain mb-2"
//                     onClick={() => openImageModal(selectedCertificate?.other)}
//                   />
//                 )}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-center gap-6 mt-8">
//               <button
//                 type="button"
//                 className="bg-gray-500 text-white px-6 py-2 rounded-md"
//                 onClick={closeModal}
//               >
//                 बंद करा
//               </button>
//               <button
//                 className="bg-red-500 text-white px-3 py-1 rounded-md"
//                 onClick={handleReject}
//               >
//                 हटवणे
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
//                 onClick={handleApprove}
//               >
//                 अनुमती द्या
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Image Modal */}
//       {isModalOpenImage && (
//         <div
//           className="fixed inset-0  ml-96 mt-24 mr-5 bg-transparent bg-opacity-100 mx-auto p-8 border rounded-md shadow-lg"
//           onClick={closeImageModal}
//         >
//           <div className="bg-white p-4 rounded-md">
//             <img
//               src={selectedImage}
//               alt="Selected"
//               className="max-w-[90vw] m-auto max-h-[90vh] object-contain"
//             />
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
//               onClick={closeImageModal}
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }

//   try {
//     const birthRes = await fetch('${process.env.NEXT_PUBLIC_HOST}/api/birthCertificate');
//     if (!birthRes.ok) {
//       const errorText = await birthRes.text();  // Capture HTML error response
//       console.error('Error fetching birth certificate data:', errorText);
//       throw new Error(`Failed to fetch birth certificate data. Status: ${birthRes.status}`);
//     }
//     const birthData = await birthRes.json();
//     const birthCertificates = birthData.data || [];

//     const deathRes = await fetch('${process.env.NEXT_PUBLIC_HOST}/api/death-certificate');
//     if (!deathRes.ok) {
//       const errorText = await deathRes.text();  // Capture HTML error response
//       console.error('Error fetching death certificate data:', errorText);
//       throw new Error(`Failed to fetch death certificate data. Status: ${deathRes.status}`);
//     }
//     const deathData = await deathRes.json();
//     const deathCertificates = deathData.data || [];

//     const marriageRes = await fetch('${process.env.NEXT_PUBLIC_HOST}/api/marriage-certificate');
//     // console.log(marriageRes);

//     if (!marriageRes.ok) {
//       const errorText = await marriageRes.text();  // Capture HTML error response
//       console.error('Error fetching marriage certificate data:', errorText);
//       throw new Error(`Failed to fetch marriage certificate data. Status: ${marriageRes.status}`);
//     }
//     const marriageData = await marriageRes.json();
//     // console.log(marriageData.data);

//     const marriageCertificates = marriageData.data || [];

//     return {

//       props: {
//         birthCertificates,
//         deathCertificates,
//         marriageCertificates,
//       },
//     };
//   } catch (error) {
//     console.error('Error in getServerSideProps:', error);
//     return {
//       props: {
//         error: 'Unable to load data at this time.',
//       },
//     };
//   }
// }

// export default NewRequest;




// import React, { useState } from 'react';
// import mongoose from 'mongoose';


// import React, { useState } from 'react';

// const NewRequest = ({ birthCertificates, deathCertificates, marriageCertificates, residentCertificates, error }) => {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isModalOpenImage, setIsModalOpenImage] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedType, setSelectedType] = useState('birth');  // Default to birth certificates
//   const [selectedStatus, setSelectedStatus] = useState('all');
  
//   // Local state for certificates
//   const [birthCertificatesState, setBirthCertificatesState] = useState(birthCertificates);
//   const [deathCertificatesState, setDeathCertificatesState] = useState(deathCertificates);
//   const [marriageCertificatesState, setMarriageCertificatesState] = useState(marriageCertificates);
//   const [residentCertificatesState, setResidentCertificatesState] = useState(residentCertificates);

//   const openModal = (certificate) => {
//     setSelectedCertificate(certificate);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCertificate(null);
//   };

//   const openImageModal = (imageUrl) => {
//     setSelectedImage(imageUrl);
//     setIsModalOpenImage(true);
//   };

//   const closeImageModal = () => {
//     setIsModalOpenImage(false);
//     setSelectedImage(null);
//   };

//   const handleApprove = async () => {
//     if (!selectedCertificate) return;
  
//     try {
//       const response = await fetch(`/api/certificate?type=${selectedType}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           status: 'प्रक्रिया सुरू आहे',
//           id: selectedCertificate._id,  // Send certificate ID with the request
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to approve the certificate');
//       }
  
//       // Update certificates locally based on selectedType
//       const updatedCertificates = getUpdatedCertificates(selectedType, selectedCertificate, 'प्रक्रिया सुरू आहे');
      
//       // Set the updated state
//       updateStateBasedOnType(updatedCertificates);
  
//       closeModal();  // Ensure modal is closed
//     } catch (error) {
//       console.error('Error approving certificate:', error);
//       // Optionally show an error message to the user
//     }
//   };
  
//   const handleReject = async () => {
//     if (!selectedCertificate) return;
  
//     try {
//       const response = await fetch(`/api/certificate?type=${selectedType}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           status: 'प्रक्रिया रद्द आहे',
//           id: selectedCertificate._id,  // Send certificate ID with the request
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to reject the certificate');
//       }
  
//       // Update certificates locally based on selectedType
//       const updatedCertificates = getUpdatedCertificates(selectedType, selectedCertificate, 'प्रक्रिया रद्द आहे');
      
//       // Set the updated state
//       updateStateBasedOnType(updatedCertificates);
  
//       closeModal();  // Ensure modal is closed
//     } catch (error) {
//       console.error('Error rejecting certificate:', error);
//       // Optionally show an error message to the user
//     }
//   };



import React, { useState } from 'react';
import mongoose from 'mongoose';

const NewRequest = ({ 
  birthCertificates, 
  deathCertificates, 
  marriageCertificates, 
  residentCertificates, 
  
  
}) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenImage, setIsModalOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedType, setSelectedType] = useState('birth');  // Default to birth certificates
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [error, setError] = useState(null);
  // Local state for certificates
  const [birthCertificatesState, setBirthCertificatesState] = useState(birthCertificates);
  const [deathCertificatesState, setDeathCertificatesState] = useState(deathCertificates);
  const [marriageCertificatesState, setMarriageCertificatesState] = useState(marriageCertificates);
  const [residentCertificatesState, setResidentCertificatesState] = useState(residentCertificates);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpenImage(true);
  };

  const closeImageModal = () => {
    setIsModalOpenImage(false);
    setSelectedImage(null);
  };

  const handleApprove = async () => {
    if (!selectedCertificate) return;
  
    try {
      const response = await fetch(`/api/certificates?type=${selectedType}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedCertificate._id,
          status: 'प्रक्रिया सुरू आहे',
        }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Failed to approve the certificate');
      }
  
      console.log('Updated certificate data:', data);
      // Handle the response from the server and update state
      const updatedCertificates = getUpdatedCertificates(selectedType, selectedCertificate, 'प्रक्रिया सुरू आहे');
      updateStateBasedOnType(updatedCertificates);
  
      closeModal();  // Ensure modal is closed
  
    } catch (error) {
      console.error('Error approving certificate:', error);
    }
  };
  
  const handleReject = async () => {
    if (!selectedCertificate) return;
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/certificates?type=${selectedType}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedCertificate._id,
          status: 'प्रक्रिया रद्द आहे',
        }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Failed to reject the certificate');
      }
  
      console.log('Updated certificate data:', data);
      // Handle the response from the server and update state
      const updatedCertificates = getUpdatedCertificates(selectedType, selectedCertificate, 'प्रक्रिया रद्द आहे');
      updateStateBasedOnType(updatedCertificates);
  
      closeModal();  // Ensure modal is closed
  
    } catch (error) {
      console.error('Error rejecting certificate:', error);
    }
  };
  
  // Helper function to update the certificate list based on type and new status
  const getUpdatedCertificates = (type, certificate, newStatus) => {
    let updatedCertificates;
    switch (type) {
      case 'birth':
        updatedCertificates = birthCertificatesState.map(cert =>
          cert._id === certificate._id ? { ...cert, status: newStatus } : cert
        );
        break;
      case 'death':
        updatedCertificates = deathCertificatesState.map(cert =>
          cert._id === certificate._id ? { ...cert, status: newStatus } : cert
        );
        break;
      case 'marriage':
        updatedCertificates = marriageCertificatesState.map(cert =>
          cert._id === certificate._id ? { ...cert, status: newStatus } : cert
        );
        break;
      case 'resident':
        updatedCertificates = residentCertificatesState.map(cert =>
          cert._id === certificate._id ? { ...cert, status: newStatus } : cert
        );
        break;
      default:
        updatedCertificates = [];
    }
    return updatedCertificates;
  };
  
  // Helper function to update the local state based on selected certificate type
  const updateStateBasedOnType = (updatedCertificates) => {
    if (selectedType === 'birth') setBirthCertificatesState(updatedCertificates);
    else if (selectedType === 'death') setDeathCertificatesState(updatedCertificates);
    else if (selectedType === 'marriage') setMarriageCertificatesState(updatedCertificates);
    else if (selectedType === 'resident') setResidentCertificatesState(updatedCertificates);
  };
  
  // Helper function to close the modal (you can modify this based on your modal closing logic)
  
  
  // Render error message if there's an error
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  
  const filteredCertificates = (selectedType === 'birth' ? birthCertificates :
    selectedType === 'death' ? deathCertificates :
      selectedType === 'marriage' ? marriageCertificates : residentCertificates)
    .filter(cert => 
      selectedStatus === 'all' || cert.status === selectedStatus
    );
  
  return (
    <div className="container mx-auto mt-4 p-4">
      {/* Header Section */}
      <div className="text-center items-center mb-4">
        <h1 className="text-2xl font-bold text-white">कागदपत्र तपासणी</h1>
      </div>

      {/* Certificate Type Dropdown */}
      <div className="mb-4">
        <label className="text-white">Select Certificate Type: </label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="ml-2 p-2 rounded-md"
        >
          <option value="birth">Birth Certificates</option>
          <option value="death">Death Certificates</option>
          <option value="marriage">Marriage Certificates</option>
          <option value="resident">Resident Certificates</option>
        </select>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto pb-10">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">अ.क्र.</th>
              <th className="border border-gray-300 px-4 py-2 text-left">नाव</th>
              <th className="border border-gray-300 px-4 py-2 text-left">विनंती प्रकार</th>
              <th className="border border-gray-300 px-4 py-2 text-left">फोन नंबर</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="border-none bg-transparent focus:outline-none">
                  <option className='bg-blue-500' value="all">स्थिती</option>
                  <option className='bg-blue-500' value="सुरू केलेले नाही">सुरू केलेले नाही</option>
                  <option className='bg-blue-500' value="प्रक्रिया सुरू आहे">प्रक्रिया सुरू आहे</option>
                  <option className='bg-blue-500' value="प्रक्रिया रद्द आहे">प्रक्रिया रद्द आहे</option>
                </select>
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">क्रिया</th>
            </tr>
          </thead>
          <tbody>
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((row, index) => (
                <tr key={row._id} className="text-white">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.fullName || row.husbandFullName}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.requestType}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.mobileNumber || row.husbandContactNumber}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.status}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-orange-500 text-white px-3 py-1 rounded-md"
                      onClick={() => openModal(row)}
                    >
                      तपशील पहा
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for editing certificate */}
      {isModalOpen && (
        <div className="fixed inset-0 mt-32 mb-2 mr-10 bg-white bg-opacity-100 p-8 border rounded-md shadow-lg lg:ml-[24rem] grid grid-cols-1 gap-8">
          <h1 className="text-2xl -mt-5 font-bold text-center text-gray-800">
            {selectedType === 'death' ? 'मृत्यू प्रमाणपत्र अर्ज फॉर्म' :
              selectedType === 'marriage' ? 'विवाह प्रमाणपत्र अर्ज फॉर्म' :
                selectedType === 'resident' ? 'निवासी प्रमाणपत्र अर्ज फॉर्म' :
                  'जन्म प्रमाणपत्र अर्ज फॉर्म'}
          </h1>

          <form className="overflow-auto max-h-[80vh] border-2 p-2 grid grid-cols-1 gap-6">
            {/* Applicant Information Section */}
            {(selectedType === 'death' || selectedType === 'birth' || selectedType === 'resident') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
                <div className="flex flex-col border-b border-r border-gray-300 p-2">
                  <label className="text-gray-700 font-semibold">1. अर्जदाराचे पूर्ण नाव:</label>
                  <p className="text-gray-800">{selectedCertificate?.fullName || ''}</p>
                </div>
                <div className="flex flex-col border-b border-r border-gray-300 p-2">
                  <label className="text-gray-700 font-semibold">2. अर्जदाराचा पत्ता:</label>
                  <p className="text-gray-800">{selectedCertificate?.address || ''}</p>
                </div>
                <div className="flex flex-col border-b border-r border-gray-300 p-2">
                  <label className="text-gray-700 font-semibold">3. मोबाइल नंबर:</label>
                  <p className="text-gray-800">{selectedCertificate?.mobileNumber || ''}</p>
                </div>
                <div className="flex flex-col border-b border-r border-gray-300 p-2">
                  <label className="text-gray-700 font-semibold">4. ईमेल आयडी (असल्यास):</label>
                  <p className="text-gray-800">{selectedCertificate?.email || ''}</p>
                </div>
              </div>
            )}


            {/* Dynamically render fields based on certificate type */}
            {selectedType === 'birth' && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">5. जन्म बालकाचे पूर्ण नाव:</label>
                    <p className="text-gray-800">{selectedCertificate?.birthBabyFullName || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">6. वडिलांचे नाव:</label>
                    <p className="text-gray-800">{selectedCertificate?.fatherName || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">7. आईचे नाव:</label>
                    <p className="text-gray-800">{selectedCertificate?.motherName || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">8. जन्म तारीख:</label>
                    <p className="text-gray-800">{selectedCertificate?.dateOfBirth || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">9. जन्म वेळ:</label>
                    <p className="text-gray-800">{selectedCertificate?.timeOfBirth || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">10. जन्मस्थान:</label>
                    <p className="text-gray-800">{selectedCertificate?.placeOfBirth || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">11. हॉस्पिटलचे नाव:</label>
                    <p className="text-gray-800">{selectedCertificate?.nameOfHospital || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">12. सिटी ऑफ हॉस्पिटल:</label>
                    <p className="text-gray-800">{selectedCertificate?.talOfHospital || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">13. डिस्टऑफ हॉस्पिटल:</label>
                    <p className="text-gray-800">{selectedCertificate?.distOfHospital || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">14. बाळाचे लिंग:</label>
                    <p className="text-gray-800">{selectedCertificate?.genderOfBaby || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">14. जन्म नोंदणी क्रमांक:</label>
                    <p className="text-gray-800">{selectedCertificate?.birthRegNo || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">14.  अतिरिक्त माहिती:</label>
                    <p className="text-gray-800">{selectedCertificate?.additionalInfo || ''}</p>
                  </div>
                </div>

                <h2 className="text-center font-bold text-xl mb-6">दस्तऐवज अपलोड</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">15.हॉस्पिटलचे प्रमाणपत्र:</label>
                    {selectedCertificate?.hospitalCertificate && (
                      <img
                        src={selectedCertificate?.hospitalCertificate}
                        alt="hospital Certificate"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
                      />
                    )}
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">15.पालक आयडी:</label>
                    {selectedCertificate?.parentId && (
                      <img
                        src={selectedCertificate?.parentId}
                        alt="parentId"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.parentId)}
                      />
                    )}
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">15.पत्ता पुरावा:</label>
                    {selectedCertificate?.addressProof && (
                      <img
                        src={selectedCertificate?.addressProof}
                        alt="addressProof"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.addressProof)}
                      />
                    )}
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">15.स्वाक्षरी:</label>
                    {selectedCertificate?.signature && (
                      <img
                        src={selectedCertificate?.signature}
                        alt="signature"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.signature)}
                      />
                    )}
                  </div>
                  <div className="flex flex-col border-b border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">13. इतर:</label>
                    {selectedCertificate?.other && (
                      <img
                        src={selectedCertificate?.other}
                        alt="Other Document"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.other)}
                      />
                    )}
                  </div>
                </div>


              </>
            )}

            {selectedType === 'death' && (
              <> <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
                <div className="flex flex-col border-b border-r border-gray-300 p-2">
                  <label className="text-gray-700 font-semibold">5.  मृत व्यक्ती पूर्ण नाव:</label>
                  <p className="text-gray-800">{selectedCertificate?.deathFullName || ''}</p>
                </div>
                <div className="flex flex-col border-b border-r border-gray-300 p-2">
                  <label className="text-gray-700 font-semibold">6. मृत्यूची तारीख:</label>
                  <p className="text-gray-800">{selectedCertificate?.deathDateOfDeath || ''}</p>
                </div>
                <div className="flex flex-col border-b border-r border-gray-300 p-2">
                  <label className="text-gray-700 font-semibold">7. मृत्यू स्थान:</label>
                  <p className="text-gray-800">{selectedCertificate?.placeOfDeath || ''}</p>
                </div>
                <div className="flex flex-col border-b border-r border-gray-300 p-2">
                  <label className="text-gray-700 font-semibold">8.मृत व्यक्ती लिंग:</label>
                  <p className="text-gray-800">{selectedCertificate?.deathGender || ''}</p>
                </div>
                <div className="flex flex-col border-b border-r border-gray-300 p-2">
                  <label className="text-gray-700 font-semibold">8.मृत्यू नोंदणी क्रमांक:</label>
                  <p className="text-gray-800">{selectedCertificate?.deathRegistrationNumber || ''}</p>
                </div>
              </div>
                <h2 className="text-center font-bold text-xl mb-6">दस्तऐवज अपलोड</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">9.मृत्यू व्यक्ती आधारकार्ड:</label>
                    {selectedCertificate?.deathAadhaarCard && (
                      <img
                        src={selectedCertificate?.deathAadhaarCard}
                        alt="death AadhaarCard"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.deathAadhaarCard)}
                      />
                    )}
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">10.पत्ता पुरावा:</label>
                    {selectedCertificate?.addressProof && (
                      <img
                        src={selectedCertificate?.addressProof}
                        alt="addressProof"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.addressProof)}
                      />
                    )}
                  </div>

                  <div className="flex flex-col border-b border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">11. इतर:</label>
                    {selectedCertificate?.other && (
                      <img
                        src={selectedCertificate?.other}
                        alt="Other Document"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.other)}
                      />
                    )}
                  </div>
                </div>
              </>
            )}

            {selectedType === 'marriage' && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">1. पतीचे पूर्ण नाव:</label>
                    <p className="text-gray-800">{selectedCertificate?.husbandFullName || ''}</p>
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">2. पत्नीचे पूर्ण नाव:</label>
                    <p className="text-gray-800">{selectedCertificate?.wifeFullName || ''}</p>
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">3. पतीची जन्मतारीख:</label>
                    <p className="text-gray-800">{selectedCertificate?.husbandDateOfBirth || ''}</p>
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">4. पत्नीच्या जन्माची तारीख:</label>
                    <p className="text-gray-800">{selectedCertificate?.wifeDateOfBirth || ''}</p>
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">5. लग्नाची तारीख:</label>
                    <p className="text-gray-800">{selectedCertificate?.marriageDate || ''}</p>
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">6. लग्नाचे ठिकाण:</label>
                    <p className="text-gray-800">{selectedCertificate?.marriagePlace || ''}</p>
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">6. लग्नाचा प्रकार:</label>
                    <p className="text-gray-800">{selectedCertificate?.marriageType || ''}</p>
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">7. पतीचा संपर्क क्रमांक:</label>
                    <p className="text-gray-800">{selectedCertificate?.husbandContactNumber || ''}</p>
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">7. पत्नी संपर्क क्रमांक:</label>
                    <p className="text-gray-800">{selectedCertificate?.wifeContactNumber || ''}</p>
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">8. ईमेल:</label>
                    <p className="text-gray-800">{selectedCertificate?.email || ''}</p>
                  </div>

                </div>

                <h2 className="text-center font-bold text-xl mb-6">दस्तऐवज अपलोड</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">9.पतीचे आधारकार्ड:</label>
                    {selectedCertificate?.husbandAadhaarCard && (
                      <img
                        src={selectedCertificate?.husbandAadhaarCard}
                        alt="husbandAadhaarCard"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.husbandAadhaarCard)}
                      />
                    )}
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">10.पत्नी आधारकार्ड:</label>
                    {selectedCertificate?.wifeAadhaarCard && (
                      <img
                        src={selectedCertificate?.wifeAadhaarCard}
                        alt="wifeAadhaarCard"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.wifeAadhaarCard)}
                      />
                    )}
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">11.पत्ता पुरावा:</label>
                    {selectedCertificate?.addressProof && (
                      <img
                        src={selectedCertificate?.addressProof}
                        alt="addressProof"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.addressProof)}
                      />
                    )}
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">12.लग्नाचा पुरावा:</label>
                    {selectedCertificate?.marriageProof && (
                      <img
                        src={selectedCertificate?.marriageProof}
                        alt="marriageProof"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.marriageProof)}
                      />
                    )}
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">13.पहिला साक्षीदार पुरावा:</label>
                    {selectedCertificate?.firstWitnessesProof && (
                      <img
                        src={selectedCertificate?.firstWitnessesProof}
                        alt="firstWitnessesProof"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.firstWitnessesProof)}
                      />
                    )}
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">13.दुसरा साक्षीदार पुरावा:</label>
                    {selectedCertificate?.secondWitnessesProof && (
                      <img
                        src={selectedCertificate?.secondWitnessesProof}
                        alt="secondWitnessesProof"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.secondWitnessesProof)}
                      />
                    )}
                  </div>

                </div>

              </>
            )}

            {selectedType === 'resident' && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">5. वडील किंवा पत्नी पूर्णनाव:</label>
                    <p className="text-gray-800">{selectedCertificate?.fatherOrWifeFullName || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">6. जन्मतारीख:</label>
                    <p className="text-gray-800">{selectedCertificate?.dateOfBirth || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">7. लिंग:</label>
                    <p className="text-gray-800">{selectedCertificate?.gender || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">8. आधार क्रमांक:</label>
                    <p className="text-gray-800">{selectedCertificate?.aadharNumber || ''}</p>
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">9. स्थायी पत्ता:</label>
                    <p className="text-gray-800">{selectedCertificate?.permanentAddress || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">10. वर्तमान पत्ता:</label>
                    <p className="text-gray-800">{selectedCertificate?.currentAddress || ''}</p>
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">11. राहण्याचा कालावधी:</label>
                    <p className="text-gray-800">{selectedCertificate?.durationOfResidence || ''}</p>
                  </div>
                </div>
                <h2 className="text-center font-bold text-xl mb-6">दस्तऐवज अपलोड</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">9.आधारकार्ड:</label>
                    {selectedCertificate?.aadhaarCard && (
                      <img
                        src={selectedCertificate?.aadhaarCard}
                        alt=" aadhaarCard"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.aadhaarCard)}
                      />
                    )}
                  </div>
                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">10.शाळा किंवा महाविद्यालय प्रमाणपत्र:</label>
                    {selectedCertificate?.schoolOrCollegeCertificate && (
                      <img
                        src={selectedCertificate?.schoolOrCollegeCertificate}
                        alt=" schoolOrCollegeCertificate"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.schoolOrCollegeCertificate)}
                      />
                    )}
                  </div>

                  <div className="flex flex-col border-b border-r border-gray-300 p-2">
                    <label className="text-gray-700 font-semibold">10.पत्ता पुरावा:</label>
                    {selectedCertificate?.addressProof && (
                      <img
                        src={selectedCertificate?.addressProof}
                        alt="addressProof"
                        className="h-32 w-auto object-contain mb-2"
                        onClick={() => openImageModal(selectedCertificate?.addressProof)}
                      />
                    )}
                  </div>

                </div>

              </>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center gap-6 mt-8">
        <button
          type="button"
          className="bg-gray-500 text-white px-6 py-2 rounded-md"
          onClick={closeModal}
        >
          बंद करा
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md"
          onClick={handleReject}
        >
          हटवणे
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          onClick={handleApprove}
        >
          अनुमती द्या
        </button>
      </div>
    </form>
  </div>
      )}

      {isModalOpenImage && (
        <div
          className="fixed inset-0  ml-96 mt-24 mr-5 bg-transparent bg-opacity-100 mx-auto p-8 border rounded-md shadow-lg"
          onClick={closeImageModal}
        >
          <div className="bg-white p-4 rounded-md">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] m-auto max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              onClick={closeImageModal}
            >
              ×
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  try {
    const birthRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/birthCertificate`);
    if (!birthRes.ok) {
      const errorText = await birthRes.text();  // Capture HTML error response
      console.error('Error fetching birth certificate data:', errorText);
      throw new Error(`Failed to fetch birth certificate data. Status: ${birthRes.status}. Error: ${errorText}`);
    }
    const birthData = await birthRes.json();
    const birthCertificates = birthData.data || [];

    const deathRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/death-certificate`);
    if (!deathRes.ok) {
      const errorText = await deathRes.text();
      console.error('Error fetching death certificate data:', errorText);
      throw new Error(`Failed to fetch death certificate data. Status: ${deathRes.status}. Error: ${errorText}`);
    }
    const deathData = await deathRes.json();
    const deathCertificates = deathData.data || [];

    const marriageRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/marriage-certificate`);
    if (!marriageRes.ok) {
      const errorText = await marriageRes.text();
      console.error('Error fetching marriage certificate data:', errorText);
      throw new Error(`Failed to fetch marriage certificate data. Status: ${marriageRes.status}. Error: ${errorText}`);
    }
    const marriageData = await marriageRes.json();
    const marriageCertificates = marriageData.data || [];

    const residentRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/residence-certificate`);
    if (!residentRes.ok) {
      const errorText = await residentRes.text();
      console.error('Error fetching resident certificate data:', errorText);
      throw new Error(`Failed to fetch resident certificate data. Status: ${residentRes.status}. Error: ${errorText}`);
    }
    const residentData = await residentRes.json();
    const residentCertificates = residentData.data || [];

    return {
      props: {
        birthCertificates,
        deathCertificates,
        marriageCertificates,
        residentCertificates,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        error: `Unable to load data at this time: ${error.message}`,
      },
    };
  }
}





export default NewRequest;

