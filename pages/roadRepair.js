import React from 'react'
import { useState ,useEffect} from 'react'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RoadRepair() {
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
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [roadNameOrPlaceName, setRoadNameOrPlaceName] = useState('');
  const [area, setArea] = useState('');
  const [problemOfRoad, setProblemOfRoad] = useState('');
  const [sizeOfProblem, setSizeOfProblem] = useState('');
  const [locationMap, setLocationMap] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [problemExisted, setProblemExisted] = useState('');
  const [timeOfProblem, setTimeOfProblem] = useState('');
  const [problemImage, setProblemImage] = useState(null);
  const [status,setStatus ]=useState('सुरू केलेले नाही')
  const [requestType,setRequestType]=useState('रस्त्यांची तात्पुरती दुरुस्ती')
  
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          setLocationMap(`https://maps.google.com/?q=${latitude},${longitude}`); // You can set this URL to show on Google Maps
        },  
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleInputChange = (e) => {
    

    
    if (e.target.name === "fullName") {
      setFullName(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "mobileNumber") {
      setMobileNumber(e.target.value);
    } else if (e.target.name == "email") {  
      setEmail(e.target.value);
    } else if (e.target.name == "roadNameOrPlaceName") {
      setRoadNameOrPlaceName(e.target.value);
    } else if (e.target.name == "area") {
      setArea(e.target.value);
    } else if (e.target.name == "problemOfRoad") {
      setProblemOfRoad(e.target.value);
    } else if (e.target.name == "sizeOfProblem") {
      setSizeOfProblem(e.target.value);
    } else if (e.target.name == "problemExisted") {
      setProblemExisted(e.target.value);
    } else if (e.target.name == "timeOfProblem") {
      setTimeOfProblem(e.target.value);
    } else if (e.target.name == "problemImage") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProblemImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
     
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      address,
      mobileNumber,
      email,
      roadNameOrPlaceName,
      area,
      problemOfRoad,
      sizeOfProblem,
      locationMap,  
      problemExisted,
      timeOfProblem,
      problemImage,
      status,
      requestType
    };
    // console.log(formData);
    const response = await fetch('/api/roadRepair-certificate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setAddress("")
    setMobileNumber("")
    setEmail("")
    setRoadNameOrPlaceName("")
    setArea("")
    setProblemOfRoad("")
    setSizeOfProblem("")
    setLocationMap("")
    setProblemExisted("")
    setTimeOfProblem("")
    setProblemImage(null)
    

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
     <h1 className='text-2xl text-center m-auto mb-5 text-white font-bold'>रस्त्यांची तात्पुरती दुरुस्ती सेवा फॉर्म(Temporary Road Repair. Application Form)</h1>
    <h1 className='text-xl text-center m-auto mb-5 text-white font-bold'>अर्जदाराची माहिती</h1>
<form className="max-w-2xl m-auto " onSubmit={handleSubmit} >
<div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="fullName" id="fullName" value={fullName} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required readOnly/>
      <label htmlFor="fullName" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">अर्जदाराचे पूर्ण नाव:</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
      <input type="text" name="address" id="address" value={address} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required  />
      <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">अर्जदाराचा पत्ता:</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
      <input type="tel" name="mobileNumber" id="mobileNumber" value={mobileNumber} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required readOnly />
      <label htmlFor="mobileNumber" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">मोबाइल नंबर:</label>
  </div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
        <input type="email" name="email" id="email" value={email} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " readOnly />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ईमेल आयडी (असल्यास):</label>
    </div>
    <h1 className='text-xl text-center m-auto mb-5 text-white font-bold'>रस्त्याबाबतची माहिती</h1>

  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="roadNameOrPlaceName" id="roadNameOrPlaceName" value={roadNameOrPlaceName} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="roadNameOrPlaceName" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">रस्त्याचे नाव किंवा ठिकाण:</label>
  </div>
  <div className="relative z-0 mx-10  md:w-full mb-5 group">
      <input type="text" name="area" id="area" value={area} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
      <label htmlFor="area" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">क्षेत्र:</label>
  </div>

  <div className="relative z-0 mx-10 md:w-full mb-5 group">
    <select
        name="problemOfRoad"
        id="problemOfRoad"
        value={problemOfRoad}
        onChange={handleInputChange}
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
        required
    >
        <option value="" disabled selected>
        तुटलेला रस्ता / खड्डा / समस्या:
        </option>
        <option className='text-black bg-' value="खड्डा">खड्डा</option>
        <option className='text-black' value="तडा गेलेला रस्ता">तडा गेलेला रस्ता</option>
        <option className='text-black' value="पाणी साचलेला भाग">पाणी साचलेला भाग</option>
        <option className='text-black' value="इतर">इतर</option>
    </select>
    <label
        htmlFor="problemOfRoad"
        className="peer-focus:font-medium absolute text-sm  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      तुटलेला रस्ता / खड्डा / समस्या:
    </label>
</div>
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
    <select
        name="sizeOfProblem"
        id="sizeOfProblem"
        value={sizeOfProblem}
        onChange={handleInputChange}
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
        required
    >
        <option value="" disabled selected>
        समस्येचा अंदाजे आकार:
        </option>
        <option className='text-black bg-' value="लहान">लहान</option>
        <option className='text-black' value="मध्यम">मध्यम</option>
        <option className='text-black' value="मोठा">मोठा</option>
    </select>
    <label
        htmlFor="sizeOfProblem"
        className="peer-focus:font-medium absolute text-sm  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      तुटलेला रस्ता / खड्डा / समस्या:
    </label>
</div>

  
<div className="relative z-0 mx-10 md:w-full mb-5 group">
      <input
        type="text"
        name="locationMap"
        id="locationMap"
        value={locationMap}
        onChange={handleInputChange}
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
        placeholder=" "
        required
      />
      <label
        htmlFor="locationMap"
        className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        तपासणीसाठी नकाशावरील स्थान: (Google Maps लिंक किंवा पिन ड्रॉप करा)
      </label>

      {/* Button to get current location */}
      <button
        type="button"
        onClick={getCurrentLocation}
        className="mt-4 py-2 px-4 bg-green-700 text-white rounded-md"
      >
        Get Current Location
      </button>

      {/* Show map preview (optional) */}
      {currentLocation && (
        <div className="mt-4">
          <p>Your location: {`Latitude: ${currentLocation.latitude}, Longitude: ${currentLocation.longitude}`}</p>
          <a
            href={locationMap}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View on Google Maps
          </a>
        </div>
      )}
    </div>
    
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
    <select
        name="problemExisted"
        id="problemExisted"
        value={problemExisted}
        onChange={handleInputChange}
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
        required
    >
        <option value="" disabled selected>
        समस्या कधीपासून आहे?:
        </option>
        <option className='text-black bg-' value="दिवस">दिवस</option>
        <option className='text-black' value="महिना">महिना</option>
        <option className='text-black' value="वर्ष">वर्ष</option>
    </select>
    <label
        htmlFor="problemExisted"
        className="peer-focus:font-medium absolute text-sm  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      दिवस / महिना / वर्ष:
    </label>
</div>



  <div className="relative z-0 mx-10 md:w-full mb-5 group">
    <select
        name="timeOfProblem"
        id="timeOfProblem"
        value={timeOfProblem}
        onChange={handleInputChange}
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
        required
    >
        <option value="" disabled selected>
        तात्पुरत्या दुरुस्तीची तातडी:
        </option>
        <option className='text-black bg-' value="अत्यंत तातडीचे (24 तासांमध्ये)">अत्यंत तातडीचे (24 तासांमध्ये)</option>
        <option className='text-black' value="तातडीचे (48 तासांमध्ये)">तातडीचे (48 तासांमध्ये)</option>
        <option className='text-black' value="नियमित (7 दिवसांत)">नियमित (7 दिवसांत)</option>
    </select>
    <label
        htmlFor="timeOfProblem"
        className="peer-focus:font-medium absolute text-sm  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
     तातडीचे स्वरूप निवडा:
    </label>
</div>

  
  

    
    
  
  
  <div className="grid md:grid-cols-2 md:gap-6">
  
  <div className="relative z-0 mx-10 md:w-full mb-5 group">
  <label class="block mb-2 text-sm font-medium text-white dark:text-gray-300" htmlFor="file_input">फोटो अपलोड करा:(समस्येच्या ठिकाणाचे फोटो JPG/PNG स्वरूपात अपलोड करा)
</label>
<input name='problemImage' accept="image/*" onChange={handleInputChange} class="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
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

export default RoadRepair