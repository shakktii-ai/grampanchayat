// import React from 'react'

// function TharavPost() {
//   return (
//     <>
//      <div className="min-h-screen bg-transparent flex items-center  lg:-mt-26 justify-center lg:mr-3">
//         <div className="w-full max-w-6xl bg-transparent shadow-lg rounded-lg p-8 ">
//           <h2 className="text-lg font-bold text-center text-white mb-6">ठराव पोस्ट</h2>

//           {/* Form */}
//           <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
           
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>नक्कल उतारा दि.</label>
//               <input
//                 type="text"
//                 name='actualAmountReceivedDuringYear'
//                 // onChange={handleInputChange}
//                 // value={actualAmountReceivedDuringYear}
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
               
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>ठराव क्रमांक</label>
//               <input
//                 type="text"
//                 name=''
//                 // onChange={handleInputChange}
//                 // value={}
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>ग्रामपंचायत कार्यालय नाव</label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>पंचायत समिती नाव</label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>दिनांक</label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>ठिकाण </label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>वेळ</label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>श्री. सरपंच नाव </label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>सूचक -श्री.</label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>अनुमोदक -श्री.</label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>पूर्ण नाव</label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>गट क्रमांक </label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>८ अ नुसार क्षेत्र</label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>लाभार्थी वर्गवारी</label>
//               <input
//                 type="text"
//                 name=''
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             </form>
//             </div>
//           </div>

//     </>
//   )
// }

// export default TharavPost



// import React, { useState } from 'react';

// function TharavPost() {
//   const [fields, setFields] = useState([{}]); 
//     const handleAddClick = () => {
//     setFields([...fields, {}]); 
//   };
//   const handleRemoveClick = (index) => {
//     const updatedFields = fields.filter((_, idx) => idx !== index); // Remove the field at the specified index
//     setFields(updatedFields); // Update the state with the new list of fields
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-transparent flex items-center lg:-mt-26 justify-center lg:mr-3">
//         <div className="w-full max-w-6xl bg-transparent shadow-lg rounded-lg p-8 ">
//           <h2 className="text-lg font-bold text-center text-white mb-6">ठराव पोस्ट</h2>

//           {/* Form */}
//           <form >
//            <div className='grid grid-cols-2 sm:grid-cols-2 lg:sm:grid-cols-3 md:grid-cols-3 gap-2'>
            
//             <div>
//               <label className="block text-sm font-medium text-white mb-1">
//                 <label className="text-red-500">*</label> नक्कल उतारा दि.
//               </label>
//               <input
//                 type="text"
//                 name=""
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
           
//             <div>
//               <label className="block text-sm font-medium text-white mb-1">
//                 <label className="text-red-500">*</label> ठराव क्रमांक
//               </label>
//               <input
//                 type="text"
//                 name=""
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             {/* More static fields */}
//             <div>
//               <label className="block text-sm font-medium text-white mb-1">
//                 <label className="text-red-500">*</label> ग्रामपंचायत कार्यालय नाव
//               </label>
//               <input
//                 type="text"
//                 name=""
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//               />
//             </div>

//             {/* Repeatable fields */}
              
//                 <div>
//                   <label className="block text-sm font-medium text-white mb-1">
//                     <label className="text-red-500">*</label> श्री. सरपंच नाव
//                   </label>
//                   <input
//                     type="text"
//                     name=""
//                     className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-white mb-1">
//                     <label className="text-red-500">*</label> सूचक -श्री.
//                   </label>
//                   <input
//                     type="text"
//                     name=""
//                     className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-white mb-1">
//                     <label className="text-red-500">*</label> अनुमोदक -श्री.
//                   </label>
//                   <input
//                     type="text"
//                     name=""
//                     className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
//                 </div>
                
//                 {fields.map((_, index) => (
//                     <div key={index}>
//                 <div className="flex justify-between space-x-4">
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium text-white mb-1">
//                     <label className="text-red-500">*</label> पूर्ण नाव
//                   </label>
//                   <input
//                     type="text"
//                     name={`fullName-${index}`}
//                     className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium text-white mb-1">
//                     <label className="text-red-500">*</label> गट क्रमांक
//                   </label>
//                   <input
//                     type="text"
//                     name={`groupNumber-${index}`}
//                     className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium text-white mb-1">
//                     <label className="text-red-500">*</label> ८ अ नुसार क्षेत्र
//                   </label>
//                   <input
//                     type="text"
//                     name={`fieldAccordingTo8a-${index}`}
//                     className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium text-white mb-1">
//                     <label className="text-red-500">*</label> लाभार्थी वर्गवारी
//                   </label>
//                   <input
//                     type="text"
//                     name={`beneficiaryCategory-${index}`}
//                     className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => handleRemoveClick(index)}
//                 className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
//               >
//                 Remove
//               </button>
//             </div>

//           ))}

//           {/* Add New Fields Button */}
//           <button
//             type="button"
//             onClick={handleAddClick}
//             className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
//           >
//             Add
//           </button>

//           <h2 className='text-center font-bold text-white'>उपस्थित ग्रामपंचायत सदस्य </h2>

//           <div className="flex-1">
//                   <label className="block text-sm font-medium text-white mb-1">
//                     <label className="text-red-500">*</label> सदस्य  नाव
//                   </label>
//                   <input
//                     type="text"
//                     name=''
//                     className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
//         </form>
          
//         </div>
//       </div>
//     </>
//   );
// }

// export default TharavPost;


// import React, { useState } from 'react';

// function TharavPost() {
//   const [fields, setFields] = useState([{}]); // Fields for other dynamic data
//   const [members, setMembers] = useState([{}]); // Fields for "सदस्य नाव"

//   // Handle adding a new field for dynamic data
//   const handleAddClick = () => {
//     setFields([...fields, {}]);
//   };

//   // Handle removing a field for dynamic data
//   const handleRemoveClick = (index) => {
//     const updatedFields = fields.filter((_, idx) => idx !== index);
//     setFields(updatedFields);
//   };

//   // Handle adding a new member field
//   const handleAddMemberClick = () => {
//     setMembers([...members, {}]);
//   };

//   // Handle removing a member field
//   const handleRemoveMemberClick = (index) => {
//     const updatedMembers = members.filter((_, idx) => idx !== index);
//     setMembers(updatedMembers);
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-transparent flex items-center lg:-mt-26 justify-center lg:mr-3">
//         <div className="w-full max-w-6xl bg-transparent shadow-lg rounded-lg p-8">
//           <h2 className="text-lg font-bold text-center text-white mb-6">ठराव पोस्ट</h2>

//           {/* Form */}
//           <form>
//             <div className="grid grid-cols-2 sm:grid-cols-2 lg:sm:grid-cols-3 md:grid-cols-3 gap-2">
//               {/* Static Fields */}
//               <div>
//                 <label className="block text-sm font-medium text-white mb-1">
//                   <label className="text-red-500">*</label> नक्कल उतारा दि.
//                 </label>
//                 <input
//                   type="text"
//                   name=""
//                   className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-white mb-1">
//                   <label className="text-red-500">*</label> ठराव क्रमांक
//                 </label>
//                 <input
//                   type="text"
//                   name=""
//                   className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-white mb-1">
//                   <label className="text-red-500">*</label> ग्रामपंचायत कार्यालय नाव
//                 </label>
//                 <input
//                   type="text"
//                   name=""
//                   className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>

//               {/* Repeatable Fields for Dynamic Data */}
//               <div>
//                 <label className="block text-sm font-medium text-white mb-1">
//                   <label className="text-red-500">*</label> श्री. सरपंच नाव
//                 </label>
//                 <input
//                   type="text"
//                   name=""
//                   className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-white mb-1">
//                   <label className="text-red-500">*</label> सूचक -श्री.
//                 </label>
//                 <input
//                   type="text"
//                   name=""
//                   className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-white mb-1">
//                   <label className="text-red-500">*</label> अनुमोदक -श्री.
//                 </label>
//                 <input
//                   type="text"
//                   name=""
//                   className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//             </div>

//             {/* Repeatable Fields for "Full Name", "Group Number", etc. */}
//             {fields.map((_, index) => (
//               <div key={index}>
//                 <div className="flex justify-between space-x-4">
//                   <div className="flex-1">
//                     <label className="block text-sm font-medium text-white mb-1">
//                       <label className="text-red-500">*</label> पूर्ण नाव
//                     </label>
//                     <input
//                       type="text"
//                       name={`fullName-${index}`}
//                       className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <label className="block text-sm font-medium text-white mb-1">
//                       <label className="text-red-500">*</label> गट क्रमांक
//                     </label>
//                     <input
//                       type="text"
//                       name={`groupNumber-${index}`}
//                       className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <label className="block text-sm font-medium text-white mb-1">
//                       <label className="text-red-500">*</label> ८ अ नुसार क्षेत्र
//                     </label>
//                     <input
//                       type="text"
//                       name={`fieldAccordingTo8a-${index}`}
//                       className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <label className="block text-sm font-medium text-white mb-1">
//                       <label className="text-red-500">*</label> लाभार्थी वर्गवारी
//                     </label>
//                     <input
//                       type="text"
//                       name={`beneficiaryCategory-${index}`}
//                       className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                     />
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveClick(index)}
//                   className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             {/* Add New Fields Button */}
//             <button
//               type="button"
//               onClick={handleAddClick}
//               className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
//             >
//               Add
//             </button>

//             <h2 className='text-center font-bold text-white'>उपस्थित ग्रामपंचायत सदस्य </h2>

//             {/* Repeatable Fields for "सदस्य नाव" */}
//             {members.map((_, index) => (
//               <div key={index}>
//                 <div className="flex justify-between space-x-4">
//                   <div className="flex-1">
//                     <label className="block text-sm font-medium text-white mb-1">
//                       <label className="text-red-500">*</label> सदस्य  नाव
//                     </label>
//                     <input
//                       type="text"
//                       name={`memberName-${index}`}
//                       className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
//                     />
//                   </div>
                
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveMemberClick(index)}
//                   className="mt-5 px-4  bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
//                 >
//                   Remove
//                 </button></div>
//               </div>
//             ))}

//             {/* Add New Member Button */}
//             <button
//               type="button"
//               onClick={handleAddMemberClick}
//               className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
//             >
//               Add Member
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TharavPost;



import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TharavPost() {
    const [documentCopyDate,setDocumentCopyDate] =useState('')
    const [resolutionNumber,setResolutionNumber] =useState('')
    const [officeName,setOfficeName] =useState('')
    const [sarpanchName,setSarpanchName] =useState('')
    const [significantName,setSignificantName] =useState('')
    const [approvingName,setApprovingName] =useState('')
    const [time,setTime] =useState('')
    const [subject,setSubject] =useState('')

  // State for dynamic fields (like full name, group number, etc.)
  const [fields, setFields] = useState([{ fullName: '', groupNumber: '', fieldAccordingTo8a: '', beneficiaryCategory: '' }]);
  
  // State for members (सदस्य नाव)
  const [members, setMembers] = useState([{ memberName: '' }]);

  // Handle adding a new field for dynamic data
  const handleAddClick = () => {
    setFields([...fields, { fullName: '', groupNumber: '', fieldAccordingTo8a: '', beneficiaryCategory: '' }]);
  };

  // Handle removing a field for dynamic data
  const handleRemoveClick = (index) => {
    const updatedFields = fields.filter((_, idx) => idx !== index);
    setFields(updatedFields);
  };

  // Handle adding a new member field
  const handleAddMemberClick = () => {
    setMembers([...members, { memberName: '' }]);
  };

  // Handle removing a member field
  const handleRemoveMemberClick = (index) => {
    const updatedMembers = members.filter((_, idx) => idx !== index);
    setMembers(updatedMembers);
  };

  // Handle input changes for dynamic fields
  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFields = [...fields];
    updatedFields[index] = { ...updatedFields[index], [name]: value };
    setFields(updatedFields);
  };

  // Handle input changes for members
  const handleMemberChange = (index, event) => {
    const { name, value } = event.target;
    const updatedMembers = [...members];
    updatedMembers[index] = { ...updatedMembers[index], [name]: value };
    setMembers(updatedMembers);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.name == "documentCopyDate") {
        setDocumentCopyDate(e.target.value);
    } else if (e.target.name == "resolutionNumber") {
        setResolutionNumber(e.target.value);
    } else if (e.target.name == "officeName") {
        setOfficeName(e.target.value);
    } else if (e.target.name == "sarpanchName") {
        setSarpanchName(e.target.value);
    } else if (e.target.name == "significantName") {
        setSignificantName(e.target.value);
    } else if (e.target.name == "approvingName") {
        setApprovingName(e.target.value);
    } else if (e.target.name == "time") {
        setTime(e.target.value);
    } else if (e.target.name == "subject") {
        setSubject(e.target.value);
    }
}
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {documentCopyDate,time,subject,resolutionNumber,officeName,sarpanchName,significantName,approvingName, fields, members };
    console.log('Form submitted:', formData);
    try {
        const response = await fetch('/api/tharavpost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        setDocumentCopyDate('')
        setTime('')
        setSubject('')
        setResolutionNumber('')
        setOfficeName('')
        setSarpanchName('')
        setSignificantName('')
        setApprovingName('')
        setFields('')
        setMembers('')

        if (response.ok) {
          toast.success("Your Request Send Successfull", {
                     position: "top-left",
                     autoClose: 3000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "light",
                   });
          // console.log('Form submitted successfully:', data);
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
                position="top-left"
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
      <div className="min-h-screen bg-transparent flex items-center lg:-mt-26 justify-center lg:mr-3">
        <div className="w-full max-w-6xl bg-transparent shadow-lg rounded-lg p-8">
          <h2 className="text-lg font-bold text-center text-white mb-6">ठराव पोस्ट</h2>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:sm:grid-cols-3 md:grid-cols-3 gap-2">
              {/* Static Fields */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  <label className="text-red-500">*</label> नक्कल उतारा दि.
                </label>
                <input
                  type="text"
                  name="documentCopyDate"
                  value={documentCopyDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  <label className="text-red-500">*</label> ठराव क्रमांक
                </label>
                <input
                  type="text"
                  name="resolutionNumber"
                  value={resolutionNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  <label className="text-red-500">*</label> वेळ 
                </label>
                <input
                  type="text"
                  name="time"
                  value={time}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  <label className="text-red-500">*</label> विषय     
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                  
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  <label className="text-red-500">*</label> ग्रामपंचायत कार्यालय नाव
                </label>
                <input
                  type="text"
                  name="officeName"
                  value={officeName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

           
               {/* Repeatable Fields for Dynamic Data */}
               <div>
                 <label className="block text-sm font-medium text-white mb-1">
                   <label className="text-red-500">*</label> श्री. सरपंच नाव
                 </label>
                 <input
                   type="text"
                   name="sarpanchName"
                  value={sarpanchName}
                  onChange={handleChange}
                   className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-white mb-1">
                   <label className="text-red-500">*</label> सूचक -श्री.
                 </label>
                 <input
                   type="text"
                   name="significantName"
                  value={significantName}
                  onChange={handleChange}
                   className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-white mb-1">
                   <label className="text-red-500">*</label> अनुमोदक -श्री.
                 </label>
                 <input
                   type="text"
                   name="approvingName"
                  value={approvingName}
                  onChange={handleChange}
                   className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                 />
               </div>
            </div>

            {/* Repeatable Fields for Dynamic Data */}
            {fields.map((_, index) => (
              <div key={index}>
                <div className="flex justify-between space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-white mb-1">
                      <label className="text-red-500">*</label> पूर्ण नाव
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={fields[index]?.fullName || ''}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-white mb-1">
                      <label className="text-red-500">*</label> गट क्रमांक
                    </label>
                    <input
                      type="text"
                      name="groupNumber"
                      value={fields[index]?.groupNumber || ''}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-white mb-1">
                      <label className="text-red-500">*</label> ८ अ नुसार क्षेत्र
                    </label>
                    <input
                      type="text"
                      name="fieldAccordingTo8a"
                      value={fields[index]?.fieldAccordingTo8a || ''}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-white mb-1">
                      <label className="text-red-500">*</label> लाभार्थी वर्गवारी
                    </label>
                    <input
                      type="text"
                      name="beneficiaryCategory"
                      value={fields[index]?.beneficiaryCategory || ''}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveClick(index)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Add New Fields Button */}
            <button
              type="button"
              onClick={handleAddClick}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
            >
              Add
            </button>

            <h2 className="text-center font-bold text-white">उपस्थित ग्रामपंचायत सदस्य</h2>

            {/* Repeatable Fields for "सदस्य नाव" */}
            {members.map((_, index) => (
              <div key={index}>
                <div className="flex justify-between space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-white mb-1">
                      <label className="text-red-500">*</label> सदस्य नाव
                    </label>
                    <input
                      type="text"
                      name="memberName"
                      value={members[index]?.memberName || ''}
                      onChange={(e) => handleMemberChange(index, e)}
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveMemberClick(index)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Add New Member Button */}
            <button
              type="button"
              onClick={handleAddMemberClick}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
            >
              Add Member
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default TharavPost;
