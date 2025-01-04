



import React, { useEffect, useState } from 'react';

function NewRequest() {
  // State to hold the birth certificate data
  const [birthCertificates, setBirthCertificates] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedCertificate, setSelectedCertificate] = useState(null); // Selected certificate for editing
  const [isModalOpenImage, setIsModalOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  
   
  
  // Fetch birth certificates from the API when the component is mounted
  useEffect(() => {
    const fetchBirthCertificates = async () => {
      try {
        const response = await fetch('/api/birthCertificate'); // Adjust the API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch birth certificates');
        }
        const data = await response.json();
        setBirthCertificates(data.data); // Assuming the response structure has a `data` field
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBirthCertificates();
  }, []);

  // Open the modal and set the selected certificate data
  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
    setIsModalOpen(false);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpenImage(true); 
  };

  // Function to close the modal
  const closeImageModal = () => {
    setIsModalOpenImage(false);
    setSelectedImage(null);
  };
  const handleApprove = async () => {
    // Optimistically update the status locally before the server response
    const updatedCertificates = birthCertificates.map((cert) =>
      cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया सुरू आहे' } : cert
    );
    setBirthCertificates(updatedCertificates);
  
    try {
      const response = await fetch(`/api/birth-certificate/${selectedCertificate._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'प्रक्रिया सुरू आहे' }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update the status');
      }
  
      const data = await response.json();
      console.log(data);  // You can log or handle the updated certificate data if necessary
    } catch (error) {
      console.error('Error:', error);
      // In case of error, revert the change (optional)
      setBirthCertificates(birthCertificates); // Revert to the original state
    }
  };
  
  const handleReject = async (certificate) => {
    // Optimistically update the status locally before the server response
    const updatedCertificates = birthCertificates.map((cert) =>
        cert._id === selectedCertificate._id ? { ...cert, status: 'प्रक्रिया रद्द आहे' } : cert
      );
      setBirthCertificates(updatedCertificates);
    
      try {
        const response = await fetch(`/api/birth-certificate/${selectedCertificate._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'प्रक्रिया रद्द आहे' }),
        });
    
        if (!response.ok) {
          throw new Error('Failed to update the status');
        }
    
        const data = await response.json();
        console.log(data);  // You can log or handle the updated certificate data if necessary
      } catch (error) {
        console.error('Error:', error);
        // In case of error, revert the change (optional)
        setBirthCertificates(birthCertificates); // Revert to the original state
      }
    
    setBirthCertificates(updatedCertificates);
  
  };
  
  

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto mt-8 p-4 ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-white -mt-28">कागदपत्र तपासणी</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="शोधा"
            className="border -mt-28 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-600 -mt-28 text-white px-4 py-2 rounded-md">
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
                d="M21 21l-4.35-4.35m2.04-5.16a7.5 7.5 0 11-10.6 0 7.5 7.5 0 0110.6 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto -mt-12 ">
        <table className="w-full border-collapse border border-gray-300 ">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">अ.क्र.</th>
              <th className="border border-gray-300 px-4 py-2 text-left">नाव</th>
              <th className="border border-gray-300 px-4 py-2 text-left">विनंती प्रकार</th>
              <th className="border border-gray-300 px-4 py-2 text-left">फोन नंबर</th>
              <th className="border border-gray-300 px-4 py-2 text-left">स्थिती <a className=''>V</a></th>
              <th className="border border-gray-300 px-4 py-2 text-left">क्रिया</th>
            </tr>
          </thead>
          <tbody>
            {birthCertificates.length > 0 ? (
              birthCertificates.map((row, index) => (
                <tr key={row._id} className="text-white">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.fullName}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.requestType}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.mobileNumber}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.status}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex gap-2">
                      <button 
                        className="bg-orange-500 text-white px-3 py-1 rounded-md"
                        onClick={() => openModal(row)}
                      >
                        तपशील पहा
                      </button>
                      {/* <button className="bg-red-500 text-white px-3 py-1 rounded-md"
                      onClick={() => handleReject(row)}
                      >
                        हटवणे
                      </button> */}
                    </div>
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
        // components/BirthCertificateForm.js

    <div className="fixed inset-0 bg-white bg-opacity-100 mx-auto p-8 border rounded-md shadow-lg z-40 grid grid-cols-1 gap-8">
  <h1 className="text-3xl font-bold text-center text-gray-800 ">
    जन्म प्रमाणपत्र अर्ज फॉर्म
  </h1>
  <h2 className="text-center text-gray-600 mb-6 -mt-5 text-xl">
    (Birth Certificate Application Form)
  </h2>

  <form className="overflow-auto max-h-[80vh] border-2 p-2 grid grid-cols-1 gap-6">
  {/* Applicant Information Section */}
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
    <div className="flex flex-col border-b border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">4. ईमेल आयडी (असल्यास):</label>
      <p className="text-gray-800">{selectedCertificate?.email || ''}</p>
    </div>
  </div>

  <h2 className="text-center font-bold text-xl mb-6">जन्माच्या माहितीचा तपशील</h2>

  {/* Birth Information Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">5. जन्मलेल्या व्यक्तीचे पूर्ण नाव:</label>
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
      <label className="text-gray-700 font-semibold">8. जन्म दिनांक:</label>
      <p className="text-gray-800">{selectedCertificate?.dateOfBirth || ''}</p>
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">9. जन्माचा वेळ:</label>
      <p className="text-gray-800">{selectedCertificate?.timeOfBirth || ''}</p>
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">10. जन्माचे ठिकाण:</label>
      <p className="text-gray-800">{selectedCertificate?.placeOfBirth || ''}</p>
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">11. रुग्णालय/घर:</label>
      <p className="text-gray-800">{selectedCertificate?.nameOfHospital || ''}</p>
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">12. पत्ता:</label>
      <p className="text-gray-800">{selectedCertificate?.addressOfHospital || ''}</p>
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">13. गाव/शहर:</label>
      <p className="text-gray-800">{selectedCertificate?.cityOfHospital || ''}</p>
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">14. तालुका:</label>
      <p className="text-gray-800">{selectedCertificate?.talOfHospital || ''}</p>
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">15. जिल्हा:</label>
      <p className="text-gray-800">{selectedCertificate?.distOfHospital || ''}</p>
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">16. लिंग:</label>
      <p className="text-gray-800">{selectedCertificate?.genderOfBaby || ''}</p>
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">17. जन्म नोंदणी क्रमांक (असल्यास):</label>
      <p className="text-gray-800">{selectedCertificate?.birthRegNo || ''}</p>
    </div>
    <div className="flex flex-col border-b border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">18. इतर कोणतीही माहिती:</label>
      <p className="text-gray-800">{selectedCertificate?.additionalInfo || ''}</p>
    </div>
  </div>

  <h2 className="text-center font-bold text-xl mb-6">दस्तऐवज अपलोड</h2>

  {/* Document Upload Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-r border-gray-300 p-4">
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">19. रुग्णालयाचा दाखला:</label>
      {selectedCertificate?.parentId && (
        <img
          src={selectedCertificate?.hospitalCertificate}
          alt="Hospital Certificate"
          className="h-32 w-auto object-contain mb-2"
          onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
        />
      )}
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">20. पालकांचे ओळखपत्र:</label>
      {selectedCertificate?.parentId && (
        <img
          src={selectedCertificate?.parentId}
          alt="Parent ID"
          className="h-32 w-auto object-contain mb-2"
          onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
        />
      )}
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">21. पत्ता पुरावा:</label>
      {selectedCertificate?.addressProof && (
        <img
          src={selectedCertificate?.addressProof}
          alt="Address Proof"
          className="h-32 w-auto object-contain mb-2"
          onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
        />
      )}
    </div>
    <div className="flex flex-col border-b border-r border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">22. इतर:</label>
      {selectedCertificate?.other && (
        <img
          src={selectedCertificate?.other}
          alt="Other Document"
          className="h-32 w-auto object-contain mb-2"
          onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
        />
      )}
    </div>
    <div className="flex flex-col border-b border-gray-300 p-2">
      <label className="text-gray-700 font-semibold">23. अर्जदाराची सही:</label>
      {selectedCertificate?.signature && (
        <img
          src={selectedCertificate?.signature}
          alt="Signature"
          className="h-32 w-auto object-contain mb-2"
          onClick={() => openImageModal(selectedCertificate?.hospitalCertificate)}
        />
      )}
    </div>
  </div>

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
           className="fixed inset-0 bg-white bg-opacity-100 mx-auto p-8 border rounded-md shadow-lg z-50 "
          onClick={closeImageModal}
        >
          <div className="bg-white  p-4 rounded-md">
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
}

export default NewRequest;

