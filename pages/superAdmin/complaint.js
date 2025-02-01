
// import React, { useEffect, useState } from 'react';

// function Complaint() {
//   const [complaient, setComplaient] = useState([]); // Initialize as an empty array
//   const [loading, setLoading] = useState(true); // To manage the loading state
//   const [error, setError] = useState(null); // To manage the error state
//   const [selectedRecord, setSelectedRecord] = useState(null); // To store the selected record

//   useEffect(() => {
//     const fetchTharavData = async () => {
//       try {
//         const response = await fetch('/api/complaint'); // Adjust the API endpoint
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         console.log('Fetched Data:', data); // Log the full API response

//         setComplaient(data); // Set the fetched data directly since it is already an array
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTharavData();
//   }, []);

//   const handleDateClick = (record) => {
//     setSelectedRecord(record); // Set the clicked record as selected
//   };

//   const closeForm = () => {
//     setSelectedRecord(null); // Close the form by resetting the selected record
//   };

//   console.log('State complaient:', complaient); // Log the current state of `complaient`

//   if (loading) {
//     return <div className="text-center text-white">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-white">Error: {error}</div>;
//   }

//   return (
//     <>
//       <h1 className="text-center text-3xl text-white font-bold">ठराव यादी</h1>
//       {Array.isArray(complaient) && complaient.length > 0 ? (
//         <div className='mb-96'>
//         <table className="table-auto  text-white mt-4">
//           <thead>
//             <tr className="border-b-2">
//               <th className="px-4 py-2">Full Name</th>
//               <th className="px-4 py-2">Email</th>
//               <th className="px-4 py-2">Mobile No</th>
//               <th className="px-4 py-2">Complaint Improve</th>
//               <th className="px-4 py-2">Complaint</th>
//             </tr>
//           </thead>
//           <tbody>
//             {complaient.map((row) => (
//               <tr key={row._id} className="border-b cursor-pointer hover:bg-gray-700">
//                 <td
//                   className="px-4 py-2"
//                   onClick={() => handleDateClick(row)} // Set the selected record on click
//                 >
//                   {row.fullName || 'N/A'}
//                 </td>
//                 <td className="px-4 py-2">{row.email || 'N/A'}</td>
//                 <td className="px-4 py-2">{row.mobileNo || 'N/A'}</td>
//                 <td className="px-4 py-2">{row.complaintImprove || 'N/A'}</td>
//                 <td className="px-4 py-2">{row.complaint || 'N/A'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </div>
//       ) : (
//         <div className="text-center text-white">No data available</div>
//       )}
//     </>
//   );
// }

// export default Complaint;


// import React, { useEffect, useState } from 'react';

// function Complaint() {
//   const [complaient, setComplaient] = useState([]); // Initialize as an empty array
//   const [loading, setLoading] = useState(true); // To manage the loading state
//   const [error, setError] = useState(null); // To manage the error state
//   const [selectedRecord, setSelectedRecord] = useState(null); // To store the selected record

//   useEffect(() => {
//     const fetchTharavData = async () => {
//       try {
//         const response = await fetch('/api/complaint'); // Adjust the API endpoint
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         console.log('Fetched Data:', data); // Log the full API response

//         setComplaient(data); // Set the fetched data directly since it is already an array
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTharavData();
//   }, []);

//   const handleDateClick = (record) => {
//     setSelectedRecord(record); // Set the clicked record as selected
//   };

//   const closeForm = () => {
//     setSelectedRecord(null); // Close the form by resetting the selected record
//   };

//   console.log('State complaient:', complaient); // Log the current state of `complaient`

//   if (loading) {
//     return <div className="text-center text-white">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-white">Error: {error}</div>;
//   }

//   return (
//     <>
//       <h1 className="text-center text-3xl text-white font-bold">तक्रार यादी</h1>
//       {Array.isArray(complaient) && complaient.length > 0 ? (
//         <div className='mb-96'>
//           <table className="table-auto  text-white mt-4 m-auto">
//             <thead>
//               <tr className=" bg-orange-400">
//                 <th className="px-4  py-2">पूर्ण नाव</th>
//                 <th className="px-4 py-2">ईमेल</th>
//                 <th className="px-4 py-2">मोबाईल क्र</th>
//                 <th className="px-4 py-2">तक्रार</th>
//                 <th className="px-4 py-2">तक्रार सुधारणे</th>
//               </tr>
//             </thead>
//             <tbody>
//               {complaient.map((row) => (
//                 <tr key={row._id} className=" cursor-pointer text-black bg-orange-200 hover:bg-gray-700">
//                   <td
//                     className="px-4 py-2 border-r border-black"
//                     onClick={() => handleDateClick(row)} // Set the selected record on click
//                   >
//                     {row.fullName || 'N/A'}
//                   </td>
//                   <td className="px-4 border-r border-black py-2">{row.email || 'N/A'}</td>
//                   <td className="px-4 border-r border-black py-2">{row.mobileNo || 'N/A'}</td>
                 
//                 <td
//   className="px-4 text-center border-r border-black py-2"
//   onClick={() => handleDateClick(row)} // Set the selected record on click
// >
//   {row.complaint ? row.complaint.slice(0, 20) : 'N/A'}
// </td>
// <td className="px-4 text-center py-2">
//   {row.complaintImprove ? row.complaintImprove.slice(0, 20) : 'N/A'}
// </td>
// </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="text-center text-white">No data available</div>
//       )}

//       {selectedRecord && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//   <div className="bg-white p-8 rounded-lg max-w-lg w-full">
//     <h2 className="text-2xl font-bold text-gray-800">Complaint Details</h2>
//     <div className="mt-4 max-h-96 overflow-y-auto">
//       <p><strong>Full Name:</strong> {selectedRecord.fullName || 'N/A'}</p>
//       <p><strong>Email:</strong> {selectedRecord.email || 'N/A'}</p>
//       <p><strong>Mobile No:</strong> {selectedRecord.mobileNo || 'N/A'}</p>
//       <p><strong>Complaint Improve:</strong> {selectedRecord.complaintImprove || 'N/A'}</p>
//       <p><strong>Complaint:</strong> {selectedRecord.complaint || 'N/A'}</p>
//     </div>
//     <div className="mt-4 text-right">
//       <button
//         onClick={closeForm}
//         className="px-4 py-2 bg-red-500 text-white rounded"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// </div>
// )}

//     </>
//   );
// }

// export default Complaint;


import React, { useEffect, useState } from 'react';

function Complaint() {
  const [complaient, setComplaient] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // To manage the loading state
  const [error, setError] = useState(null); // To manage the error state
  const [selectedRecord, setSelectedRecord] = useState(null); // To store the selected record
  
  // Filter states
  const [grampanchayatNameFilter, setGrampanchayatNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    const fetchTharavData = async () => {
      try {
        const response = await fetch('/api/complaint'); // Adjust the API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Fetched Data:', data); // Log the full API response

        setComplaient(data); // Set the fetched data directly since it is already an array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTharavData();
  }, []);

  const handleDateClick = (record) => {
    setSelectedRecord(record); // Set the clicked record as selected
  };

  const closeForm = () => {
    setSelectedRecord(null); // Close the form by resetting the selected record
  };

  // Apply filter logic
  const filteredComplaints = complaient.filter((row) => {
    const matchesGrampanchayat = grampanchayatNameFilter
      ? row.grampanchayatName && row.grampanchayatName.toLowerCase().includes(grampanchayatNameFilter.toLowerCase())
      : true;
  
    const matchesStatus = statusFilter
      ? row.status && row.status.toLowerCase().includes(statusFilter.toLowerCase())
      : true;
  
    const matchesSearch = searchFilter
      ? Object.values(row).some(value =>
          value && value.toString().toLowerCase().includes(searchFilter.toLowerCase())
        )
      : true;
  
    return matchesGrampanchayat && matchesStatus && matchesSearch;
  });
  

  console.log('State complaient:', complaient); // Log the current state of `complaient`

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-white">Error: {error}</div>;
  }

  return (
    <>
      <h1 className="text-center text-3xl text-white font-bold">तक्रार यादी</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
  <input
    type="text"
    placeholder="Search"
    value={searchFilter}
    onChange={(e) => setSearchFilter(e.target.value)}
    className="p-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 w-60"
  />
  <input
    type="text"
    placeholder="Grampanchayat Name"
    value={grampanchayatNameFilter}
    onChange={(e) => setGrampanchayatNameFilter(e.target.value)}
    className="p-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 w-60"
  />
  <input
    type="text"
    placeholder="Status"
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="p-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 w-60"
  />
</div>


      {filteredComplaints.length > 0 ? (
        <div className='mb-96'>
          <table className="table-auto text-white mt-4 m-auto">
            <thead>
              <tr className=" bg-orange-400">
                <th className="px-4  py-2">पूर्ण नाव</th>
                <th className="px-4 py-2">ईमेल</th>
                <th className="px-4 py-2">मोबाईल क्र</th>
                <th className="px-4 py-2">तक्रार</th>
                <th className="px-4 py-2">तक्रार सुधारणे</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((row) => (
                <tr key={row._id} className=" cursor-pointer text-black bg-orange-200 hover:bg-gray-700">
                  <td
                    className="px-4 py-2 border-r border-black"
                    onClick={() => handleDateClick(row)} // Set the selected record on click
                  >
                    {row.fullName || 'N/A'}
                  </td>
                  <td className="px-4 border-r border-black py-2">{row.email || 'N/A'}</td>
                  <td className="px-4 border-r border-black py-2">{row.mobileNo || 'N/A'}</td>
                 
                  <td
                    className="px-4 text-center border-r border-black py-2"
                    onClick={() => handleDateClick(row)} // Set the selected record on click
                  >
                    {row.complaint ? row.complaint.slice(0, 20) : 'N/A'}
                  </td>
                  <td className="px-4 text-center py-2">
                    {row.complaintImprove ? row.complaintImprove.slice(0, 20) : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-white">No data available</div>
      )}

      {selectedRecord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800">Complaint Details</h2>
            <div className="mt-4 max-h-96 overflow-y-auto">
              <p><strong>Full Name:</strong> {selectedRecord.fullName || 'N/A'}</p>
              <p><strong>Email:</strong> {selectedRecord.email || 'N/A'}</p>
              <p><strong>Mobile No:</strong> {selectedRecord.mobileNo || 'N/A'}</p>
              <p><strong>Complaint Improve:</strong> {selectedRecord.complaintImprove || 'N/A'}</p>
              <p><strong>Complaint:</strong> {selectedRecord.complaint || 'N/A'}</p>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={closeForm}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Complaint;
