import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Marriage() {
    const [husbandFullName,setHusbandFullName]=useState('')
    const [wifeFullName,setWifeFullName]=useState('')
    const [husbandDateOfBirth,setHusbandDateOfBirth]=useState('')
    const [wifeDateOfBirth,setWifeDateOfBirth]=useState('')
    const [marriageDate,setMarriageDate]=useState('')
    const [marriagePlace,setMarriagePlace]=useState('')
    const [marriageType,setMarriageType]=useState('')
    const [husbandContactNumber,setHusbandContactNumber]=useState('')
    const [wifeContactNumber,setWifeContactNumber]=useState('')
    const [email,setEmail]=useState('')   
    const [husbandAadhaarCard,setHusbandAadhaarCard]=useState(null)
    const [wifeAadhaarCard,setWifeAadhaarCard]=useState(null)
    const [addressProof,setAddressProof]=useState(null)
    const [marriageProof,setMarriageProof]=useState(null)
    const [firstWitnessesProof,setFirstWitnessesProof]=useState(null)
    const [secondWitnessesProof,setSecondWitnessesProof]=useState(null)
    const [status,setStatus ]=useState('सुरू केलेले नाही')
    const [requestType,setRequestType]=useState('उत्पन्न प्रमाणपत्र')
  
  
    const handleInputChange = (e) => {
      if (e.target.name === "husbandFullName") {
        setHusbandFullName(e.target.value);
      } else if (e.target.name == "wifeFullName") {
        setWifeFullName(e.target.value);
      } else if (e.target.name == "husbandDateOfBirth") {
        setHusbandDateOfBirth(e.target.value);
      } else if (e.target.name == "wifeDateOfBirth") {  
        setWifeDateOfBirth(e.target.value);
      } else if (e.target.name == "marriageDate") {
        setMarriageDate(e.target.value);
      } else if (e.target.name == "marriagePlace") {
        setMarriagePlace(e.target.value);
      } else if (e.target.name == "marriageType") {
        setMarriageType(e.target.value);
      } else if (e.target.name == "husbandContactNumber") {
        setHusbandContactNumber(e.target.value);
      } else if (e.target.name == "wifeContactNumber") {
        setWifeContactNumber(e.target.value);
      } else if (e.target.name == "email") {
        setEmail(e.target.value);
      }else if (e.target.name == "husbandAadhaarCard") {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setHusbandAadhaarCard(reader.result);
          };
          reader.readAsDataURL(file);
        }
      } else if (e.target.name == "wifeAadhaarCard") {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setWifeAadhaarCard(reader.result);
          };
          reader.readAsDataURL(file);
        }
      } else if (e.target.name == "addressProof") {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setAddressProof(reader.result);
            
          };
          reader.readAsDataURL(file);
        }
      } else if (e.target.name == "marriageProof") {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setMarriageProof(reader.result);
          };
          reader.readAsDataURL(file);
        }
      } else if (e.target.name == "firstWitnessesProof") {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setFirstWitnessesProof(reader.result);
          };
          reader.readAsDataURL(file);
        }
      } else if (e.target.name == "secondWitnessesProof") {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setSecondWitnessesProof(reader.result);
          };
          reader.readAsDataURL(file);
        }
      }
       
    };
  
  
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {
        husbandFullName,
        wifeFullName,
        husbandDateOfBirth,
        wifeDateOfBirth,
        marriageDate,
        marriagePlace,
        marriageType,
        husbandContactNumber,
        wifeContactNumber,
        email,
        husbandAadhaarCard,
        wifeAadhaarCard,
        addressProof,
        marriageProof,
        firstWitnessesProof,
        secondWitnessesProof,  
        status,
        requestType
      };
      // console.log("formData in marriage",formData);
      const response = await fetch('/api/marriage-certificate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      setHusbandFullName("");
      setWifeFullName("");
      setHusbandDateOfBirth("");
      setWifeDateOfBirth("");
      setMarriageDate("");
      setMarriagePlace("");
      setMarriageType("");
      setHusbandContactNumber("");
      setWifeContactNumber("")
      setEmail("");
      setHusbandAadhaarCard(null)
      setWifeAadhaarCard(null)
      setAddressProof(null)
      setMarriageProof(null)
      setFirstWitnessesProof(null)
      setSecondWitnessesProof(null)


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
        // alert('Form submitted successfully');
      } else {
        alert('Error: ' + result.message);
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
    <h1 className='text-2xl text-center m-auto mb-5 text-white font-bold'>विवाह प्रमाणपत्र अर्ज फॉर्म (Marriage Certificate Application Form)</h1>
    <h1 className='text-xl text-center m-auto mb-5 text-white font-bold'>अर्जदाराची माहिती</h1>
<form className="max-w-2xl m-auto " onSubmit={handleSubmit} >
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="husbandFullName" id="husbandFullName" value={husbandFullName} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="husbandFullName" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">पतीचे पूर्ण नाव:</label>
  </div>
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="wifeFullName" id="wifeFullName" value={wifeFullName} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="wifeFullName" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">पत्नीचे पूर्ण नाव:</label>
  </div>
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="husbandDateOfBirth" id="husbandDateOfBirth" value={husbandDateOfBirth} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="husbandDateOfBirth" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">पतीचा जन्मतारीख:</label>
  </div>
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="wifeDateOfBirth" id="wifeDateOfBirth" value={wifeDateOfBirth} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="wifeDateOfBirth" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">पत्नीचा जन्मतारीख:</label>
  </div>
    <h1 className='text-xl text-center m-auto mb-5 text-white font-bold'>विवाहाची माहिती</h1>
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="marriageDate" id="marriageDate" value={marriageDate} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="marriageDate" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">विवाह दिनांक:</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
      <input type="text" name="marriagePlace" id="marriagePlace" value={marriagePlace} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="marriagePlace" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">विवाहाचे ठिकाण (पत्ता):</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
    <select
        name="marriageType"
        id="marriageType"
        value={marriageType}
        onChange={handleInputChange}
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
        required
    >
        <option value="" disabled selected>
        विवाह प्रकार 
        </option>
        <option className='text-black bg-' value="हिंदू">हिंदू</option>
        <option className='text-black' value="मुस्लिम">मुस्लिम</option>
        <option className='text-black' value="इतर">इतर</option>
    </select>
    <label
        htmlFor="marriageType"
        className="peer-focus:font-medium absolute text-sm  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
       विवाह प्रकार 
    </label>
</div>
    <h1 className='text-xl text-center m-auto mb-5 text-white font-bold'>संपर्क माहिती</h1>
 
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
      <input type="tel" name="husbandContactNumber" id="husbandContactNumber" value={husbandContactNumber} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="husbandContactNumber" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">पतीचा संपर्क क्रमांक:</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="tel" name="wifeContactNumber" id="wifeContactNumber" value={wifeContactNumber} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" "  />
        <label htmlFor="wifeContactNumber" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">पत्नीचा संपर्क क्रमांक:</label>
    </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="email" name="email" id="email" value={email} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" "  />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ई-मेल पत्ता:</label>
    </div>
    
  

    
    
  
  
  <h1 className='text-2xl text-white m-auto mb-10 mt-10 text-center font-bold'>कागदपत्रांची यादी (सॉफ्टकॉपी अपलोड करा):</h1>

  
  <div className="grid md:grid-cols-2 md:gap-6">
  
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">पतीचा आधार कार्ड / ओळखपत्र</label>
<input name='husbandAadhaarCard' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">पत्नीचे आधार कार्ड / ओळखपत्र</label>
<input name='wifeAadhaarCard' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>
{/* </div>

  <div className="grid md:grid-cols-2 md:gap-6"> */}
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">पत्त्याचा पुरावा (रेशन कार्ड, लाईट बिल इ.)</label>
<input name='addressProof' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>  
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">पत्त्याचा पुरावा (रेशन कार्ड, लाईट बिल इ.)</label>
<input name='marriageProof' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>  
  

  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">पहिल्या साक्षीदारांचे ओळखपत्र:</label>
<input name='firstWitnessesProof' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">दुसऱ्या साक्षीदारांचे ओळखपत्र:</label>
<input name='secondWitnessesProof' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>
</div>
<input  type="text" name="status" id="status" value={status} onChange={handleInputChange} className="hidden py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="dafult pending" required />
<input  type="text" name="requestType" id="requestType" value={requestType} onChange={setRequestType} className="hidden py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="dafult pending" required />

  <button type="submit" className="text-white m-auto flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>    
    </>
  )
}

export default Marriage