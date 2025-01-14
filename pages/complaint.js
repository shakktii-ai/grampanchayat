

import React ,{useState,useEffect}from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Complaint() {
   const router = useRouter();
    useEffect(() => {
      if (!localStorage.getItem("token")) {
        router.push("/login");
      }
    }, []);
  const [fullName,setFullName]=useState('')
  const [email,setEmail]=useState('')
  const [mobileNo,setMobileNo]=useState('')
  const [complaint,setComplaint]=useState('')
  const [complaintImprove,setComplaintImprove]=useState('')

  const handleChange = (e) => {
      const { name, value } = e.target;
  
      if (e.target.name == "fullName") {
        setFullName(e.target.value);
      } else if (e.target.name == "email") {
        setEmail(e.target.value);
      } else if (e.target.name == "mobileNo") {
        setMobileNo(e.target.value);
      } else if (e.target.name == "complaint") {
          setComplaint(e.target.value);
      } else if (e.target.name == "complaintImprove") {
          setComplaintImprove(e.target.value);
      } 
  }
    // Handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = {fullName,email,mobileNo,complaint,complaintImprove};
      console.log('Form submitted:', formData);
      try {
          const response = await fetch('/api/complaint', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
          setFullName('')
          setEmail('')
          setMobileNo('')
          setComplaint('')
          setComplaintImprove('')
  
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
      <div
        className="flex items-center justify-center min-h-screen px-4 sm:px-5 mx-2"
      >
        {/* Main Panel */}
        <div className="bg-lime-100 border-2 border-lime-400 shadow-lg p-6 rounded-lg w-full max-w-md lg:max-w-lg">
          {/* Header */}
          <h1 className="text-xl font-bold text-center text-gray-800 mb-2">
            तक्रार पॅनेल
          </h1>
          <p className="text-center text-gray-700 text-sm mb-4">
            तक्रार? आम्हाला कळवा.
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <label className="w-full sm:w-24 font-medium text-gray-800">
                नाव :
              </label>
              <input
                type="text"
                name='fullName'
                value={fullName}
                onChange={handleChange}
                placeholder="पूर्ण नाव"
                className="flex-1 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <label className="w-full sm:w-24 font-medium text-gray-800">
                इ-मेल :
              </label>
              <input
                type="email"
                name='email'
                value={email}
                onChange={handleChange}
                placeholder="example@example.com"
                className="flex-1 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            {/* Mobile Number Input */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <label className="w-full sm:w-24 font-medium text-gray-800">
                मोबाईल :
              </label>
              <input
                type="tel"
                name='mobileNo'
                value={mobileNo}
                onChange={handleChange}
                placeholder="0123456789"
                className="flex-1 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            {/* Description Field */}
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                काय झाले आहे?
              </label>
              <textarea
              name='complaint'
              value={complaint}
              onChange={handleChange}
                placeholder="कृपया आम्हाला शब्दरचना तपशीलांसह घटनाबद्दल सांगा"
                rows="3"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              ></textarea>
            </div>

            {/* Suggestion Field */}
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                आपण गोष्टी कशा सुधारू शकतो?
              </label>
              <textarea
              name='complaintImprove'
              value={complaintImprove}
              onChange={handleChange}
                placeholder="आपल्या सूचना येथे लिहा"
                rows="2"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-lime-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-lime-600 transition duration-300"
              >
                पाठवा
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Complaint;
