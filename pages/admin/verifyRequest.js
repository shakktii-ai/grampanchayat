
import React, { useState } from 'react';
import mongoose from 'mongoose';

const verifyRequest = ({ 
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

  const[grampanchayantUploadDocument,setgrampanchayantUploadDocument] = useState('')
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
  const handleInputChange = (e) => {
    if (e.target.name === "grampanchayantUploadDocument") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setgrampanchayantUploadDocument(reader.result);
          console.log('Uploaded file data:', reader.result);  // Check what gets logged
        };
        reader.readAsDataURL(file);
      }
    }
  };
  
  const handleApprove = async () => {
    if (!selectedCertificate) return;
  
    try {
      const response = await fetch(`/api/certificatesComplete?type=${selectedType}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedCertificate._id,
          grampanchayantUploadDocument:grampanchayantUploadDocument,
          status: 'प्रक्रिया पूर्ण झाली',
          
        }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Failed to approve the certificate');
      }
  
      console.log('Updated certificate data:', data);
      // Handle the response from the server and update state
      const updatedCertificates = getUpdatedCertificates(selectedType, selectedCertificate, 'प्रक्रिया पूर्ण झाली');
      updateStateBasedOnType(updatedCertificates);
  
    //   closeModal();  // Ensure modal is closed
  
    } catch (error) {
      console.error('Error approving certificate:', error);
    }
  };
  
//  
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
  
  const filteredCertificates = (() => {
    const certificatesToFilter = selectedType === 'birth' ? birthCertificatesState :
      selectedType === 'death' ? deathCertificatesState :
      selectedType === 'marriage' ? marriageCertificatesState : residentCertificatesState;
  
    if (!certificatesToFilter || !Array.isArray(certificatesToFilter)) {
      return [];
    }
  
    // Only filter certificates with the status "प्रक्रिया सुरू आहे"
    return certificatesToFilter.filter(cert => cert.status === 'प्रक्रिया सुरू आहे');
  })();
  
  
  // Render error message if there's an error
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  
  
  return (
    <div className="container mx-auto mt-4 p-4">
      {/* Header Section */}
      <div className="text-center items-center mb-4">
        <h1 className="text-2xl font-bold text-white">कागदपत्र तपासणी पूर्ण </h1>
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
          <thead className="bg-green-400 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">अ.क्र.</th>
              <th className="border border-gray-300 px-4 py-2 text-left">नाव</th>
              <th className="border border-gray-300 px-4 py-2 text-left">विनंती प्रकार</th>
              <th className="border border-gray-300 px-4 py-2 text-left">फोन नंबर</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="border-none bg-transparent focus:outline-none">
                  <option className='bg-green-500' value="all">स्थिती</option>
                  <option className='bg-green-500' value="प्रक्रिया सुरू आहे">प्रक्रिया सुरू आहे</option>
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
            <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input"> तयार झालेले प्रमाणपत्र अपलोड करा </label>
<input name='grampanchayantUploadDocument' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>
        <button
          type="button"
          className="bg-gray-500 text-white px-6 py-2 rounded-md"
          onClick={closeModal}
        >
          बंद करा
        </button>
        
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          onClick={handleApprove}
        >
          सबमिट करा
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

  
  
  
  




export default verifyRequest;

