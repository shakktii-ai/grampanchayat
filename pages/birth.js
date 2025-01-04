import React from 'react'
import { useState } from 'react';

function Birth() {

  const [fullName,setFullName]=useState('')
  const [address,setAddress]=useState('')
  const [mobileNumber,setMobileNumber]=useState('')
  const [email,setEmail]=useState('')
  const [birthBabyFullName,setBirthBabyFullName]=useState('')
  const [fatherName,setFatherName]=useState('')
  const [motherName,setMotherName]=useState('')
  const [dateOfBirth,setDateOfBirth]=useState('')
  const [timeOfBirth,setTimeOfBirth]=useState('')
  const [placeOfBirth,setPlaceOfBirth]=useState('')
  const [nameOfHospital,setNameOfHospital]=useState('')
  const [talOfHospital,setTalOfHospital]=useState('')
  const [addressOfHospital,setAddressOfHospital]=useState('')
  const [cityOfHospital,setCityOfHospital]=useState('')
  const [distOfHospital,setDistOfHospital]=useState('')
  const [genderOfBaby,setGenderOfBaby]=useState('')
  const [birthRegNo,setBirthRegNo]=useState('')
  const [additionalInfo,setAdditionalInfo]=useState('')
  const [hospitalCertificate,setHospitalCertificate]=useState(null)
  const [parentId,setParentId]=useState(null)
  const [addressProof,setAddressProof]=useState(null)
  const [other,setOther]=useState(null)
  const [signature,setSignature]=useState(null)
  const [status,setStatus ]=useState('सुरू केलेले नाही')
  const [requestType,setRequestType]=useState('जन्म प्रमाणपत्र')


  const handleInputChange = (e) => {
    

    
    if (e.target.name === "fullName") {
      setFullName(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "mobileNumber") {
      setMobileNumber(e.target.value);
    } else if (e.target.name == "email") {  
      setEmail(e.target.value);
    } else if (e.target.name == "birthBabyFullName") {
      setBirthBabyFullName(e.target.value);
    } else if (e.target.name == "fatherName") {
      setFatherName(e.target.value);
    } else if (e.target.name == "motherName") {
      setMotherName(e.target.value);
    } else if (e.target.name == "dateOfBirth") {
      setDateOfBirth(e.target.value);
    } else if (e.target.name == "timeOfBirth") {
      setTimeOfBirth(e.target.value);
    } else if (e.target.name == "placeOfBirth") {
      setPlaceOfBirth(e.target.value);
    } else if (e.target.name == "nameOfHospital") {
      setNameOfHospital(e.target.value);
    } else if (e.target.name == "talOfHospital") {
      setTalOfHospital(e.target.value);
    } else if (e.target.name == "addressOfHospital") {
      setAddressOfHospital(e.target.value);
    } else if (e.target.name == "cityOfHospital") {
      setCityOfHospital(e.target.value);
    } else if (e.target.name == "distOfHospital") {
      setDistOfHospital(e.target.value);
    } else if (e.target.name == "genderOfBaby") {
      setGenderOfBaby(e.target.value);
    } else if (e.target.name == "birthRegNo") {
      setBirthRegNo(e.target.value);
    } else if (e.target.name == "additionalInfo") {
      setAdditionalInfo(e.target.value);
    } else if (e.target.name == "hospitalCertificate") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setHospitalCertificate(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else if (e.target.name == "parentId") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setParentId(reader.result);
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
    } else if (e.target.name == "other") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setOther(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else if (e.target.name == "signature") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSignature(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
     
  };

const formData = {
  fullName,
  address,
  mobileNumber,
  email,
  birthBabyFullName,
  fatherName,
  motherName,
  dateOfBirth,
  timeOfBirth,
  placeOfBirth,
  nameOfHospital,
  talOfHospital,
  addressOfHospital,
  cityOfHospital,
  distOfHospital,
  genderOfBaby,
  birthRegNo,
  additionalInfo,
  hospitalCertificate,
  parentId,
  addressProof,
  other,
  signature,
  status,
  requestType
};
console.log(formData);


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/birthCertificate`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   // let response = await res.json();
  //   let result = await response.json();
  //   if (response.ok) {
  //     alert('Form submitted successfully');
  //   } else {
  //     alert('Error: ' + result.message);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(phone,age, name, email, massage)
    const data = { fullName,
      address,
      mobileNumber,
      email,
      birthBabyFullName,
      fatherName,
      motherName,
      dateOfBirth,
      timeOfBirth,
      placeOfBirth,
      nameOfHospital,
      talOfHospital,
      addressOfHospital,
      cityOfHospital,
      distOfHospital,
      genderOfBaby,
      birthRegNo,
      additionalInfo,
      hospitalCertificate,
      parentId,
      addressProof,
      other,
      signature,
      status,
      requestType };

    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/birthCertificate`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let response = await res.json();
    // console.log(response);

    // console.log("Success:", data);
    // setfullName("");
    // setage("");
    // setphoneNo("");
    // setemail("");
    // setaddress("");
    // setmassage("");
    // toast.success("Your Appointment Request Send Successfull", {
    //   position: "top-left",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
  };
  return (
    <>
    

<h1 className='text-2xl text-center m-auto mb-5 text-white font-bold'>जन्म प्रमाणपत्र अर्ज  (Birth Certificate Application Form)</h1>
<form className="max-w-2xl m-auto " onSubmit={handleSubmit} >
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="fullName" id="fullName" value={fullName} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="fullName" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">अर्जदाराचे पूर्ण नाव:</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
      <input type="text" name="address" id="address" value={address} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">अर्जदाराचा पत्ता:</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
      <input type="tel" name="mobileNumber" id="mobileNumber" value={mobileNumber} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="mobileNumber" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">मोबाइल नंबर:</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="email" name="email" id="email" value={email} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" "  />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ईमेल आयडी (असल्यास):</label>
    </div>

    <h1 className='text-2xl text-white m-auto mb-10 mt-10 text-center font-bold'>जन्माच्या माहितीचा तपशील</h1>
    
    
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="birthBabyFullName" id="birthBabyFullName" value={birthBabyFullName} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" "  />
        <label htmlFor="birthBabyFullName" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">जन्मलेल्या व्यक्तीचे पूर्ण नाव:</label>
    </div>
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="fatherName" id="fatherName" value={fatherName} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="fatherName" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">वडिलांचे नाव:</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="motherName" id="motherName" value={motherName} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="motherName" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">आईचे नाव:</label>
    </div>
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="dateOfBirth" id="dateOfBirth" value={dateOfBirth} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="dateOfBirth" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">जन्म दिनांक:</label>
    </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="timeOfBirth" id="timeOfBirth" value={timeOfBirth} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="timeOfBirth" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">जन्माचा वेळ:</label>
    </div>
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="placeOfBirth" id="placeOfBirth" value={placeOfBirth} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="placeOfBirth" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">जन्माचे ठिकाण:</label>
    </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="nameOfHospital" id="nameOfHospital" value={nameOfHospital} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="nameOfHospital" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">रुग्णालय/घर:</label>
    </div>
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="addressOfHospital" id="addressOfHospital" value={addressOfHospital} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="addressOfHospital" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">पत्ता:</label>
    </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="cityOfHospital" id="cityOfHospital" value={cityOfHospital} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="cityOfHospital" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">गाव/शहर:</label>
    </div>
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="talOfHospital" id="talOfHospital" value={talOfHospital} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="talOfHospital" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">तालुका:</label>
    </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="distOfHospital" id="distOfHospital" value={distOfHospital} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="distOfHospital" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">जिल्हा:</label>
    </div>
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
     </div>
  </div>

  
  <h1 className='text-2xl text-white m-auto mb-10 mt-10 text-center font-bold'>इतर माहिती</h1>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="genderOfBaby" id="genderOfBaby" value={genderOfBaby} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="genderOfBaby" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">लिंग: पुरुष/स्त्री/इतर</label>
    </div>
    <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="birthRegNo" id="birthRegNo" value={birthRegNo} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="birthRegNo" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">जन्म नोंदणी क्रमांक (असल्यास):</label>
    </div>
  </div>

  <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="text" name="additionalInfo" id="additionalInfo" value={additionalInfo} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="additionalInfo" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">इतर कोणतीही माहिती:</label>
    </div>

    
  <h1 className='text-2xl text-white m-auto mb-10 mt-10 text-center font-bold'>आवश्यक कागदपत्रे जोडली आहेत:</h1>

  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">रुग्णालयाचा दाखला:</label>
<input name='hospitalCertificate' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">पालकांचे ओळखपत्र:</label>
<input name='parentId' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>
</div>

  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">पत्ता पुरावा:</label>
<input name='addressProof' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input"> इतर: </label>
<input name='other' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>
</div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input"> अर्जदाराची सही:</label>
<input name='signature' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>

<input  type="text" name="status" id="status" value={additionalInfo} onChange={handleInputChange} className="hidden py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="dafult pending" required />
<input  type="text" name="requestType" id="requestType" value={requestType} onChange={setRequestType} className="hidden py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="dafult pending" required />

  <button type="submit" className="text-white m-auto flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </>
  ) 
}

export default Birth

