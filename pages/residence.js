import React from 'react'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Residence() {
   const router = useRouter();
    useEffect(() => {
      if (!localStorage.getItem("token")) {
        router.push("/login");
      }
    }, []);

 const [user, setUser] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    } else {
      const userFromStorage = JSON.parse(localStorage.getItem('user'));
      if (userFromStorage) {
        setUser(userFromStorage);
      }
    }
  }, []);
  // console.log(user);
  useEffect(() => {
    if (user) {
      setFullName(user.name || '');
      setMobileNumber(user.mobileNo || '');
      setEmail(user.email || '');
      
      // Set other initial states from user if necessary...
    }
  }, [user]);


  const [fullName,setFullName]=useState('')
      const [fatherOrWifeFullName,setFatherOrWifeFullName]=useState('')
      const [dateOfBirth,setDateOfBirth]=useState('')
      const [gender,setGender]=useState('')
      const [aadharNumber,setAadharNumber]=useState('')
      const [permanentAddress,setPermanentAddress]=useState('')
      const [currentAddress,setCurrentAddress]=useState('')
      const [durationOfResidence,setDurationOfResidence]=useState('')
      const [mobileNumber,setMobileNumber]=useState('')
      const [email,setEmail]=useState('')   
      const [aadhaarCard,setAadhaarCard]=useState(null)
      const [schoolOrCollegeCertificate,setSchoolOrCollegeCertificate]=useState(null)
      const [addressProof,setAddressProof]=useState(null)
      const [status,setStatus ]=useState('सुरू केलेले नाही')
      const [requestType,setRequestType]=useState('रहिवासी प्रमाणपत्र')
    
    
      const handleInputChange = (e) => {
        if (e.target.name === "fullName") {
          setFullName(e.target.value);
        } else if (e.target.name == "fatherOrWifeFullName") {
          setFatherOrWifeFullName(e.target.value);
      
        } else if (e.target.name == "dateOfBirth") {  
          setDateOfBirth(e.target.value);
        } else if (e.target.name == "gender") {
          setGender(e.target.value);
        } else if (e.target.name == "aadharNumber") {
          setAadharNumber(e.target.value);
        } else if (e.target.name == "permanentAddress") {
          setPermanentAddress(e.target.value);
        } else if (e.target.name == "currentAddress") {
          setCurrentAddress(e.target.value);
        } else if (e.target.name == "durationOfResidence") {
          setDurationOfResidence(e.target.value);
        } else if (e.target.name == "mobileNumber") {
          setMobileNumber(e.target.value);
        } else if (e.target.name == "email") {
          setEmail(e.target.value);
        }else if (e.target.name == "aadhaarCard") {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setAadhaarCard(reader.result);
            };
            reader.readAsDataURL(file);
          }
        } else if (e.target.name == "schoolOrCollegeCertificate") {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setSchoolOrCollegeCertificate(reader.result);
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
        }   
         
      };
    
    
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
          fullName,
          fatherOrWifeFullName,
          dateOfBirth,
          gender,
          aadharNumber,
          permanentAddress,
          currentAddress,
          durationOfResidence,
          mobileNumber,
          email,
          aadhaarCard,
          schoolOrCollegeCertificate,
          addressProof, 
          status,
          requestType
        };
        console.log("formData in marriage",formData);
        const response = await fetch('/api/residence-certificate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        const result = await response.json();
        setFullName("");
        setFatherOrWifeFullName("");
        setDateOfBirth("");
        setGender("");
        setAadharNumber("");
        setPermanentAddress("");
        setCurrentAddress("");
        setDurationOfResidence("");
        setMobileNumber("");
        setEmail("");
        setAadhaarCard(null);
        setSchoolOrCollegeCertificate(null);
        setAddressProof(null);
        

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
     <h1 className='text-2xl text-center m-auto mb-5 text-white font-bold'>रहिवासी दाखला अर्ज फॉर्म(Residential Certificate Application Form)</h1>
    <h1 className='text-xl text-center m-auto mb-5 text-white font-bold'>अर्जदाराची माहिती</h1>
<form className="max-w-2xl m-auto " onSubmit={handleSubmit} >
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="fullName" id="fullName" value={user?.name||fullName} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required readOnly/>
      <label htmlFor="fullName" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">पूर्ण नाव:</label>
  </div>
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="fatherOrWifeFullName" id="fatherOrWifeFullName" value={fatherOrWifeFullName} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="fatherOrWifeFullName" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">वडिलांचे/पतीचे नाव:</label>
  </div>
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="dateOfBirth" id="dateOfBirth" value={dateOfBirth} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="dateOfBirth" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">जन्मतारीख:</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
    <select
        name="gender"
        id="gender"
        value={gender}
        onChange={handleInputChange}
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
        required
    >
        <option value="" disabled selected>
        लिंग:
        </option>
        <option className='text-black bg-' value="पुरुष">पुरुष</option>
        <option className='text-black' value="महिला">महिला</option>
        <option className='text-black' value="इतर">इतर</option>
    </select>
    <label
        htmlFor="gender"
        className="peer-focus:font-medium absolute text-sm  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
       पुरुष /महिला /इतर
    </label>
</div>
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="aadharNumber" id="aadharNumber" value={aadharNumber} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="aadharNumber" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">आधार क्रमांक:</label>
  </div>
    <h1 className='text-xl text-center m-auto mb-5 text-white font-bold'>पत्ता माहिती</h1>
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="permanentAddress" id="permanentAddress" value={permanentAddress} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="permanentAddress" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">स्थायी पत्ता:</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
      <input type="text" name="currentAddress" id="currentAddress" value={currentAddress} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="currentAddress" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">विद्यमान पत्ता:</label>
  </div>

  <div className="relative z-0 mx-10 md:w-full mb-5 group">
    <select
        name="durationOfResidence"
        id="durationOfResidence"
        value={durationOfResidence}
        onChange={handleInputChange}
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
        required
    >
        <option value="" disabled selected>
        रहिवासी कालावधी:
        </option>
        <option className='text-black bg-' value="1 वर्ष">1 वर्ष</option>
        <option className='text-black' value="3 वर्षे">3 वर्षे</option>
        <option className='text-black' value="5 वर्षे">5 वर्षे</option>
        <option className='text-black' value="10 वर्षांपेक्षा अधिक">10 वर्षांपेक्षा अधिक</option>
    </select>
    <label
        htmlFor="gender"
        className="peer-focus:font-medium absolute text-sm  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
       कालावधी
    </label>
</div>

    <h1 className='text-xl text-center m-auto mb-5 text-white font-bold'>संपर्क माहिती</h1>
 
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
      <input type="tel" name="mobileNumber" id="mobileNumber" value={user?.mobileNo||mobileNumber} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required readOnly />
      <label htmlFor="mobileNumber" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">संपर्क क्रमांक:</label>
  </div>
 
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="email" name="email" id="email" value={user?.email||email} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " readOnly />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ई-मेल पत्ता:</label>
    </div>
    
  

    
    
  
  
  <h1 className='text-2xl text-white m-auto mb-10 mt-10 text-center font-bold'>कागदपत्रांची यादी (सॉफ्टकॉपी अपलोड करा):</h1>

  
  <div className="grid md:grid-cols-2 md:gap-6">
  
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">आधार कार्ड / ओळखपत्र</label>
<input name='aadhaarCard' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
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
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">शाळा किंवा महाविद्यालयाचा दाखला (जर लागला तर)</label>
<input name='schoolOrCollegeCertificate' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
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

export default Residence