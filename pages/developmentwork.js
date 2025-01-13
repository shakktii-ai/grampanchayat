// import React,{useState,useEffect} from 'react'

// function Developmentwork() {
//     const [developmentwork, setDevelopmentwork] = useState([]); // Initialize as an empty array
//         const [loading, setLoading] = useState(true); // To manage the loading state
//         const [error, setError] = useState(null); // To manage the error state

//         useEffect(() => {
//             const fetchTharavData = async () => {
//                 try {
//                     const response = await fetch('/api/developmentwork'); // Adjust the API endpoint
//                     if (!response.ok) {
//                         throw new Error('Failed to fetch data');
//                     }
//                     const data = await response.json();
//                     console.log('Fetched Data:', data); // Log the full API response

//                     setDevelopmentwork(data); // Set the fetched data directly since it is already an array
//                 } catch (err) {
//                     setError(err.message);
//                 } finally {
//                     setLoading(false);
//                 }
//             };

//             fetchTharavData();
//         }, []);
//   return (
//     <>
//      <h1 className='text-center text-3xl text-white font-bold'>Development Work</h1>



//     </>
//   )
// }

// export default Developmentwork


// import React, { useState, useEffect } from 'react';

// function Developmentwork() {
//     const [developmentwork, setDevelopmentwork] = useState([]); // Initialize as an empty array
//     const [loading, setLoading] = useState(true); // To manage the loading state
//     const [error, setError] = useState(null); // To manage the error state

//     useEffect(() => {
//         const fetchDevelopmentData = async () => {
//             try {
//                 const response = await fetch('/api/developmentwork'); // Adjust the API endpoint
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                 console.log('Fetched Data:', data); // Log the full API response

//                 // Set the state with the data inside 'data' key
//                 setDevelopmentwork(data.data); // Access the array inside 'data'
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDevelopmentData();
//     }, []);

//     return (
//         <>
//             <h1 className='text-center text-3xl text-white font-bold'>Development Work</h1>

//             {/* Show loading text while data is being fetched */}
//             {loading && <p className="text-center text-white">Loading...</p>}

//             {/* Show error message if there's an error */}
//             {error && <p className="text-center text-white">Error: {error}</p>}

//             {/* Render the list of development work if data is available */}
//             {!loading && !error && developmentwork.length > 0 && (
//                 <div className="development-list">
//                     {developmentwork.map((work, index) => (
//                         <div key={index} className="development-item bg-gray-800 p-4 rounded-lg mb-4">
//                             <h2 className="text-xl text-white font-semibold">{work.workName}</h2>
//                             <p className="text-white">Type: {work.workType}</p>
//                             <p className="text-white">Location: {work.location}</p>
//                             <p className="text-white">Start Date: {work.startDate}</p>
//                             <p className="text-white">Completion Date: {work.completionDate}</p>
//                             <p className="text-white">Estimated Duration: {work.estimatedDuration}</p>
//                             <p className="text-white">Status: {work.status}</p>
//                             <p className="text-white">Estimated Cost: {work.estimatedCost}</p>
//                             <p className="text-white">Actual Cost: {work.actualCost}</p>
//                             <p className="text-white">Work Source: {work.workSource}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* Message when there's no data */}
//             {!loading && !error && developmentwork.length === 0 && (
//                 <p className="text-center text-white">No development work data available.</p>
//             )}
//         </>
//     );
// }

// export default Developmentwork;


// import React, { useState, useEffect } from 'react';

// function Developmentwork() {
//     const [developmentwork, setDevelopmentwork] = useState([]); // Initialize as an empty array
//     const [loading, setLoading] = useState(true); // To manage the loading state
//     const [error, setError] = useState(null); // To manage the error state

//     useEffect(() => {
//         const fetchDevelopmentData = async () => {
//             try {
//                 const response = await fetch('/api/developmentwork'); // Adjust the API endpoint
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                 console.log('Fetched Data:', data); // Log the full API response

//                 // Set the state with the data inside 'data' key
//                 setDevelopmentwork(data.data); // Access the array inside 'data'
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDevelopmentData();
//     }, []);

//     return (
//         <>
//             <h1 className='text-center text-3xl text-white font-bold'>विकास कार्य</h1>

//             {/* Show loading text while data is being fetched */}
//             {loading && <p className="text-center text-white">Loading...</p>}

//             {/* Show error message if there's an error */}
//             {error && <p className="text-center text-white">Error: {error}</p>}

//             {/* Render the table if data is available */}
//             {!loading && !error && developmentwork.length > 0 && (
//                 <div className="development-list overflow-x-auto m-5 mb-20">
//                     <table className="min-w-full table-auto border-collapse bg-gray-700 text-white">
//                         <thead>
//                             <tr className='bg-orange-500'>
//                                 <th className="px-4 py-2 border border-gray-500">कामाचे नाव</th>
//                                 <th className="px-4 py-2 border border-gray-500">कामाचा प्रकार</th>
//                                 <th className="px-4 py-2 border border-gray-500">स्थान</th>
//                                 <th className="px-4 py-2 border border-gray-500">स्थिती</th>
//                                 <th className="px-4 py-2 border border-gray-500">कल्पित खर्च</th>
//                                 <th className="px-4 py-2 border border-gray-500">खरे खर्च</th>
//                                 <th className="px-4 py-2 border border-gray-500">कामाचे स्रोत</th>
//                                 <th className="px-4 py-2 border border-gray-500">सुरुवातीची तारीख</th>
//                                 <th className="px-4 py-2 border border-gray-500">पूर्णता तारीख</th>
//                                 <th className="px-4 py-2 border border-gray-500">कल्पित कालावधी</th>
//                             </tr>

//                         </thead>
//                         <tbody>
//                             {developmentwork.map((work, index) => (
//                                 <tr key={index} className='bg-orange-400 text-black' >
//                                     <td className="px-4 py-2 border border-gray-500">{work.workName}</td>
//                                     <td className="px-4 py-2 border border-gray-500">{work.workType}</td>
//                                     <td className="px-4 py-2 border border-gray-500">{work.location}</td>
//                                     <td className="px-4 py-2 border border-gray-500">{work.status}</td>
//                                     <td className="px-4 py-2 border border-gray-500">{work.estimatedCost}</td>
//                                     <td className="px-4 py-2 border border-gray-500">{work.actualCost}</td>
//                                     <td className="px-4 py-2 border border-gray-500">{work.workSource}</td>
//                                     <td className="px-4 py-2 border border-gray-500">{work.startDateActive}</td>
//                                     <td className="px-4 py-2 border border-gray-500">{work.estimatedDuration}</td>
//                                     <td className="px-4 py-2 border border-gray-500">{work.completionDate}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}

//             {/* Message when there's no data */}
//             {!loading && !error && developmentwork.length === 0 && (
//                 <p className="text-center text-white">No development work data available.</p>
//             )}
//         </>
//     );
// }

// export default Developmentwork;


import React, { useState, useEffect } from 'react';

function Developmentwork() {
    const [developmentwork, setDevelopmentwork] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
    const [selectedWork, setSelectedWork] = useState(null); // Store data of the selected work item

    useEffect(() => {
        const fetchDevelopmentData = async () => {
            try {
                const response = await fetch('/api/developmentwork');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log('Fetched Data:', data);
                setDevelopmentwork(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDevelopmentData();
    }, []);

    const openModal = (work) => {
        setSelectedWork(work);
        setModalVisible(true); // Show modal
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedWork(null); // Clear the selected work when modal is closed
    };

    return (
        <>
            <h1 className='text-center text-3xl text-white font-bold'>विकास कार्य</h1>

            {loading && <p className="text-center text-white">Loading...</p>}
            {error && <p className="text-center text-white">Error: {error}</p>}

            {!loading && !error && developmentwork.length > 0 && (
                <div className="development-list overflow-x-auto m-5 mb-40">
                    <table className="min-w-full table-auto border-collapse bg-gray-700 text-white">
                        <thead> 
                            <tr className='bg-orange-500'>
                                <th className="px-4 py-2 border border-gray-500">कामाचे नाव</th>
                                <th className="px-4 py-2 border border-gray-500">कामाचा प्रकार</th>
                                <th className="px-4 py-2 border border-gray-500">स्थान</th>
                                <th className="px-4 py-2 border border-gray-500">स्थिती</th>
                                <th className="px-4 py-2 border border-gray-500">कल्पित खर्च</th>
                                <th className="px-4 py-2 border border-gray-500">खरे खर्च</th>
                                <th className="px-4 py-2 border border-gray-500">कामाचे स्रोत</th>
                                <th className="px-4 py-2 border border-gray-500">सुरुवातीची तारीख</th>
                                <th className="px-4 py-2 border border-gray-500">पूर्णता तारीख</th>
                                <th className="px-4 py-2 border border-gray-500">कल्पित कालावधी</th>
                            </tr>
                        </thead>
                        <tbody>
                            {developmentwork.map((work, index) => (
                                <tr
                                    key={index}
                                    className='bg-orange-400 text-black cursor-pointer'
                                    onClick={() => openModal(work)} // Trigger modal on click
                                >
                                    <td className="px-4 py-2 border border-gray-500">{work.workName}</td>
                                    <td className="px-4 py-2 border border-gray-500">{work.workType}</td>
                                    <td className="px-4 py-2 border border-gray-500">{work.location}</td>
                                    <td className="px-4 py-2 border border-gray-500">{work.status}</td>
                                    <td className="px-4 py-2 border border-gray-500">{work.estimatedCost}</td>
                                    <td className="px-4 py-2 border border-gray-500">{work.actualCost}</td>
                                    <td className="px-4 py-2 border border-gray-500">{work.workSource}</td>
                                    <td className="px-4 py-2 border border-gray-500">{work.startDateActive}</td>
                                    <td className="px-4 py-2 border border-gray-500">{work.estimatedDuration}</td>
                                    <td className="px-4 py-2 border border-gray-500">{work.completionDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {!loading && !error && developmentwork.length === 0 && (
                <p className="text-center text-white">No development work data available.</p>
            )}

            {/* Modal for displaying work details */}
            {modalVisible && selectedWork && (
                <div className="fixed inset-0 flex items-center justify-center z-50 mt-20  bg-gray-900 bg-opacity-50 ">
                    <div className="bg-white w-3/4 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Development Work Details</h2>
                        <div className="space-y-2 grid lg:grid-cols-3 "> 
                            <p><strong>कामाचे नाव:</strong> {selectedWork.workName}</p>
                            <p><strong>कामाचा प्रकार:</strong> {selectedWork.workType}</p>
                            <p><strong>स्थान:</strong> {selectedWork.location}</p>
                            <p><strong>स्थिती:</strong> {selectedWork.status}</p>
                            <p><strong>कल्पित खर्च:</strong> {selectedWork.estimatedCost}</p>
                            <p><strong>खरे खर्च:</strong> {selectedWork.actualCost}</p>
                            <p><strong>कामाचे स्रोत:</strong> {selectedWork.workSource}</p>
                            <p><strong>सुरुवातीची तारीख:</strong> {selectedWork.startDateActive}</p>
                            <p><strong>पूर्णता तारीख:</strong> {selectedWork.completionDate}</p>
                            <p><strong>कल्पित कालावधी:</strong> {selectedWork.estimatedDuration}</p>
                        </div>
                        <button
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Developmentwork;
