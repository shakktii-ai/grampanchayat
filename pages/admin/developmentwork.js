
// import React, { useState } from 'react'

// function Developmentwork() {
//     const [status, setStatus] = useState('');  // Default status

//     const handleStatusChange = (e) => {
//         setStatus(e.target.value);
//     };
//     return (
//         <>
//             <div className="min-h-screen flex items-center justify-center">
//                 <div className="bg-orange-200 shadow-lg rounded-lg p-8 w-11/12 max-w-4xl">
//                     <h1 className="text-center text-xl font-bold text-orange-900">
//                         भूतकाळातील आणि चालू असलेली विकास कामे
//                     </h1>
//                     <h2 className="text-center text-lg font-semibold text-orange-800 mt-2">
//                         मागील विकास कार्य प्रदर्शन फॉर्म
//                     </h2>

//                     <div className="mt-6">
//                         <form className="space-y-6">
//                             {/* Section 1 */}
//                             <div>
//                                 <h3 className="text-orange-900 font-bold">१.कामाचा तपशील :</h3>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//                                     <div>
//                                         <label className="block text-sm text-orange-800">कामाचे नाव:</label>
//                                         <input
//                                             type="text"
//                                             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-orange-800">कामाचा प्रकार: (उदा. रस्ते, पाणीपुरवठा, आरोग्य)</label>
//                                         <input
//                                             type="text"
//                                             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-orange-800">स्थान:</label>
//                                         <input
//                                             type="text"
//                                             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-orange-800">सुरवातीची व पूर्ण होण्याची तारीख:</label>
//                                         <input
//                                             type="text"
//                                             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-orange-800">अंदाजित व प्रत्यक्ष खर्च:</label>
//                                         <input
//                                             type="text"
//                                             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-orange-800">कामाचा स्रोत: (केंद्रीय/राज्य योजना, निधी)</label>
//                                         <input
//                                             type="text"
//                                             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>



//                             <div>
//                                 <h3 className="text-orange-900 font-bold">2.कामाची स्थिती:</h3>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

//                                     <div>
//                                         <label className="block text-sm font-medium text-orange-800">स्थिती:</label>
//                                         <select
//                                             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
//                                             value={status}
//                                             onChange={handleStatusChange}
//                                         >
//                                             <option value="">निवडा </option>
//                                             <option value="पूर्ण झालेले">पूर्ण झालेले</option>
//                                             <option value="चालू">चालू</option>
//                                         </select>
//                                     </div>

//                                     <div className="">
//                                         <div className="">
//                                             <label htmlFor="start-date-input" className="block text-sm font-medium text-orange-800">चालू केल्याची दि .</label>
//                                             <input
//                                                 id="start-date-input"
//                                                 type="date"
//                                                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
//                                             />
//                                         </div>

//                                         {status === 'चालू' && (
//                                             <div className="mb-4">
//                                                 <label htmlFor="end-date-input" className="block text-sm font-medium text-orange-800">पूर्ण होण्याचा अंदाजे कालावधी</label>
//                                                 <input
//                                                     id="end-date-input"
//                                                     type="text"
//                                                     placeholder="e.g. 3 months"
//                                                     className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
//                                                 />
//                                             </div>
//                                         )}

//                                         {status === 'पूर्ण झालेले' && (
//                                             <div className="mb-4">
//                                                 <label htmlFor="completion-date-input" className="block text-sm font-medium text-orange-800">पूर्ण केल्याची दि .</label>
//                                                 <input
//                                                     id="completion-date-input"
//                                                     type="date"
//                                                     className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
//                                                 />
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <button className="w-full border rounded px-3 py-2 focus:outline-none bg-red-950 text-white focus:ring focus:ring-orange-600"
//                                     >submit</button>
//                                 </div>
//                             </div>

//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Developmentwork

 

import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Developmentwork() {
    // State variables for each form field
    const [workName, setWorkName] = useState('');
    const [workType, setWorkType] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [estimatedCost, setEstimatedCost] = useState('');
    const [actualCost, setActualCost] = useState('');
    const [workSource, setWorkSource] = useState('');
    const [status, setStatus] = useState('');
    const [startDateActive, setStartDateActive] = useState('');
    const [completionDate, setCompletionDate] = useState('');
    const [estimatedDuration, setEstimatedDuration] = useState('');

    // Handle change for input fields
    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    


const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
       workName,
       workType,
       location,
       startDate,
       endDate,
       estimatedCost,
       actualCost,
       workSource,
       status,
       startDateActive,
       completionDate,
       estimatedDuration,
    };
    console.log('Form submitted:', formData);
 
    try {
        const response = await fetch('/api/developmentwork', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
 
        const data = await response.json();
        console.log('Response:', data);
 
        if (response.ok) {
          toast.success("Your Request Send Successfull", {
            position: "bottom-left",
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
          alert('Error submitting form:', data.error);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}; 

    return (<>
        <ToastContainer
        position="bottom-left"
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
        <div className=" min-h-screen -mt-10 flex items-center justify-center">
            <div className="bg-orange-200 shadow-lg rounded-lg p-8 w-11/12 max-w-4xl">
                <h1 className="text-center text-xl font-bold text-orange-900">
                    भूतकाळातील आणि चालू असलेली विकास कामे
                </h1>
                <h2 className="text-center text-lg font-semibold text-orange-800 mt-2">
                    मागील विकास कार्य प्रदर्शन फॉर्म
                </h2>

                <div className="mt-6">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Section 1 */}
                        <div>
                            <h3 className="text-orange-900 font-bold">१.कामाचा तपशील :</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <div>
                                    <label className="block text-sm text-orange-800">कामाचे नाव:</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                        value={workName}
                                        onChange={handleChange(setWorkName)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-orange-800">कामाचा प्रकार: (उदा. रस्ते, पाणीपुरवठा, आरोग्य)</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                        value={workType}
                                        onChange={handleChange(setWorkType)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-orange-800">स्थान:</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                        value={location}
                                        onChange={handleChange(setLocation)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-orange-800">सुरवातीची व पूर्ण होण्याची तारीख:</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                        value={startDate}
                                        onChange={handleChange(setStartDate)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-orange-800">अंदाजित खर्च:</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                        value={estimatedCost}
                                        onChange={handleChange(setEstimatedCost)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-orange-800">प्रत्यक्ष खर्च:</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                        value={actualCost}
                                        onChange={handleChange(setActualCost)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-orange-800">कामाचा स्रोत: (केंद्रीय/राज्य योजना, निधी)</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                        value={workSource}
                                        onChange={handleChange(setWorkSource)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-orange-900 font-bold">2.कामाची स्थिती:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <div>
                                    <label className="block text-sm font-medium text-orange-800">स्थिती:</label>
                                    <select
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                        value={status}
                                        onChange={handleChange(setStatus)}
                                        required
                                    >
                                        <option value="">निवडा </option>
                                        <option value="पूर्ण झालेले">पूर्ण झालेले</option>
                                        <option value="चालू">चालू</option>
                                    </select>
                                </div>

                                <div className="">
                                    <div className="">
                                        <label htmlFor="start-date-input" className="block text-sm font-medium text-orange-800">चालू केल्याची दि .</label>
                                        <input
                                            id="start-date-input"
                                            type="date"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                            value={startDateActive}
                                            onChange={handleChange(setStartDateActive)}
                                            required
                                        />
                                    </div>

                                    {status === 'चालू' && (
                                        <div className="mb-4">
                                            <label htmlFor="end-date-input" className="block text-sm font-medium text-orange-800">पूर्ण होण्याचा अंदाजे कालावधी</label>
                                            <input
                                                id="end-date-input"
                                                type="text"
                                                placeholder="e.g. 3 months"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                                value={estimatedDuration}
                                                onChange={handleChange(setEstimatedDuration)}
                                            />
                                        </div>
                                    )}

                                    {status === 'पूर्ण झालेले' && (
                                        <div className="mb-4">
                                            <label htmlFor="completion-date-input" className="block text-sm font-medium text-orange-800">पूर्ण केल्याची दि .</label>
                                            <input
                                                id="completion-date-input"
                                                type="date"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-400"
                                                value={completionDate}
                                                onChange={handleChange(setCompletionDate)}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="w-full border rounded px-3 py-2 focus:outline-none bg-red-950 text-white focus:ring focus:ring-orange-600">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            <div className='mt-10  h-8'></div>
        </>
    );
}

export default Developmentwork;
