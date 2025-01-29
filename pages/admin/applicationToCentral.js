// import React from "react";
// import { useState } from "react";

// function ApplicationToCentral() {
//     const [status, setStatus] = useState('सुरू केलेले नाही')
//     const [requestType, setRequestType] = useState('आवेदन पत्र')
//     const [grampanchyatName, setGrampanchyatName] = useState('फलटण')
//     const [additionalInfo, setAdditionalInfo] = useState('')


//     return (
//         <>
//             <div className=" pb-12 bg-transparent -mt-12  min-h-screen flex justify-start ">
//                 <form className="w-full max-w-xl bg-transparent shadow-md rounded p-6 space-y-4">
//                     <h2 className="text-xl text-white font-bold text-center mb-4">
//                         ग्रामपंचायत आवेदन पत्र
//                     </h2>

//                     {/* Sender Details */}
//                     <div>
//                         <label className="block text-sm font-medium text-white">
//                             प्रेषक (Sender Details)
//                         </label>
//                         <textarea
//                             rows="3"
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                             placeholder="ग्राम पंचायत कार्यालय कलंबर (बु)"
//                         />
//                     </div>

//                     {/* Recipient Details */}
//                     <div>
//                         <label className="block text-sm font-medium text-white">
//                             प्राप्तकर्ता (Recipient Details)
//                         </label>
//                         <textarea
//                             rows="3"
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                             placeholder="Recipient details here"
//                         />
//                     </div>

//                     {/* Subject */}
//                     <div>
//                         <label className="block text-sm font-medium text-white">
//                             विषय (Subject)
//                         </label>
//                         <input
//                             type="text"
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                             placeholder="निवेदन का विषय"
//                         />
//                     </div>

//                     {/* Body */}


//                     {/* Date */}
//                     <div>
//                         <label className="block text-sm font-medium text-white">
//                             दिनांक (Date)
//                         </label>
//                         <input
//                             type="date"
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                         />
//                     </div>



//                     <div>
//                         <label className="block text-sm font-medium text-white">
//                             आवेदन पत्र (Document)
//                         </label>
//                         <input
//                             type="file"
//                             className="mt-1 block w-full p-2 border text-white border-gray-300 rounded"
                            
//                         />
//                     </div>

//                     <input type="text" name="status" id="status" value={additionalInfo} className="hidden py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="dafult pending" required />
//                     <input type="text" name="requestType" id="requestType" value={requestType} onChange={setRequestType} className="hidden py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="dafult pending" required />


//                     {/* Submit Button */}
//                     <div className="flex justify-center">
//                         <button
//                             type="submit"
//                             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                         >
//                             सबमिट करें (Submit)
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </>

//     );
// }

// export default ApplicationToCentral;


import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ApplicationToCentral() {
    const [status, setStatus] = useState('सुरू केलेले नाही');
    const [requestType, setRequestType] = useState('आवेदन पत्र');
    const [grampanchyatName, setGrampanchyatName] = useState('फलटण');
    const [senderDetails, setSenderDetails] = useState('');
    const [recipientDetails, setRecipientDetails] = useState('');
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [virificationWork, setVerificationWork] = useState('not verified');
    const [document, setDocument] = useState(null);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'senderDetails') {
            setSenderDetails(value);
        } else if (name === 'recipientDetails') {
            setRecipientDetails(value);
        } else if (name === 'subject') {
            setSubject(value);
        } else if (name === 'date') {
            setDate(value);
        } else if (name === 'document') {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setDocument(reader.result);
              };
              reader.readAsDataURL(file);
            }
        }
    };

    // Handle form submission 
    const handleSubmit = async (event) => {
          event.preventDefault();
          const formData = {
            status,
            virificationWork,
            requestType,
            grampanchyatName,
            senderDetails,
            recipientDetails,
            subject,
            date,
            document,
        };
          console.log('Form submitted:', formData);
          try {
              const response = await fetch('/api/applicationToCentral', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });
        
              const data = await response.json();
              setSenderDetails('');
              setRecipientDetails('');
              setSubject('');
              setDate('');
              setDocument(null);
      
              if (response.ok) {
                toast.success("Your Request Send Successfull", {
                           position: "bottom-center",
                           autoClose: 3000,
                           hideProgressBar: false,
                           closeOnClick: true,
                           pauseOnHover: true,
                           draggable: true,
                           progress: undefined,
                           theme: "light",
                         });
                console.log('Form submitted successfully:', data);
              } else {
                console.error('Error submitting form:', data.error);
              }
            } catch (error) {
              console.error('Error:', error);
            }
          };

    return (
        <>
        <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
            <div className="pb-12 bg-transparent -mt-12 min-h-screen flex justify-start">
                <form onSubmit={handleSubmit} className="w-full max-w-xl bg-transparent shadow-md rounded p-6 space-y-4">
                    <h2 className="text-xl text-white font-bold text-center mb-4">
                        ग्रामपंचायत आवेदन पत्र
                    </h2>

                    {/* Sender Details */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            प्रेषक (Sender Details)
                        </label>
                        <textarea
                            name="senderDetails"
                            rows="3"
                            value={senderDetails}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            placeholder="ग्राम पंचायत कार्यालय कलंबर (बु)"
                        />
                    </div>

                    {/* Recipient Details */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            प्राप्तकर्ता (Recipient Details)
                        </label>
                        <textarea
                            name="recipientDetails"
                            rows="3"
                            value={recipientDetails}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            placeholder="Recipient details here"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            विषय (Subject)
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            placeholder="निवेदन का विषय"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            दिनांक (Date)
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={date}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    {/* Document */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            आवेदन पत्र (Document)
                        </label>
                        <input
                          aria-describedby="file_input_help" id="file_input" type="file"
                            name="document"
                            accept="image/*"
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border text-white border-gray-300 rounded"
                        />
                    </div>

                    {/* Hidden Inputs for Additional Info */}
                    <input
                        type="text"
                        name="status"
                        id="status"
                        value={status}
                        className="hidden py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                        placeholder="dafult pending"
                        required
                    />
                    <input
                        type="text"
                        name="requestType"
                        id="requestType"
                        value={requestType}
                        onChange={(e) => setRequestType(e.target.value)}
                        className="hidden py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                        placeholder="dafult pending"
                        required
                    />

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            सबमिट करें (Submit)
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ApplicationToCentral;
