import Link from 'next/link'
import React from 'react'

function SEVA() {
  return (
  <>
    <h1 className='font-extrabold text-white text-5xl m-10 text-center'>सेवा</h1>

    
    {/* <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      
      <div class="flex flex-wrap">
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">मृत्यु प्रमाणपत्र</h2>
          <p class="leading-relaxed text-white mb-4">मृत्यूप्रमाणपत्र (Death Certificate) म्हणजे मृत व्यक्तीच्या मृत्यूची अधिकृत नोंद. हे प्रमाणपत्र स्थानिक नगरपालिका, ग्राम पंचायत किंवा इतर संबंधित प्रशासनिक विभागाकडून दिले जाते. मृत्यूप्रमाणपत्रातील माहिती मृत व्यक्तीच्या मृत्यूची तारीख, वेळ, स्थान, मृत्यूचे कारण, आणि मृत व्यक्तीचे ओळख (नाव, पत्ता इत्यादी) यावर आधारित असते</p>
          <a class="text-white bg-blue-700 p-3 rounded-md inline-flex items-center" href='/form'>अर्ज करा
      
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
  
        
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">विवाह प्रमाणपत्र</h2>
          <p class="leading-relaxed text-white mb-4">विवाह प्रमाणपत्र (Marriage Certificate) म्हणजेच विवाहाची अधिकृत नोंद करणारे एक दस्तऐवज. विवाह प्रमाणपत्र हे दोन व्यक्तींच्या विवाहाची कायदेशीर प्रमाणीकृत नोंद असते आणि हे दस्तऐवज संबंधित स्थानिक नोंदणी कार्यालयाने (जसे की नगरपालिका किंवा ग्रामपंचायत) जारी केले जाते. विवाह प्रमाणपत्र प्राप्त केल्यावर, ते विवाहाच्या कायदेशीर दर्जासाठी, विविध सामाजिक, आर्थिक आणि प्रशासकीय कारणांसाठी आवश्यक असते</p>
          <a class="text-white bg-blue-700 p-3 rounded-md inline-flex items-center">अर्ज करा
      
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
  
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">घरे व इमारत बांधणी</h2>
          <p class="leading-relaxed text-white mb-4">अर्ज करणाऱ्याचा स्थायिक पत्ता, म्हणजेच कसा आणि कोणत्या ठिकाणी घर बांधायचं आहे.जन्मतारीख / वय अर्ज करणाऱ्याचे वय किंवा जन्मतारीख (आवश्यक असल्यास).वैवाहिक स्थिती अर्ज करणाऱ्याचा वैवाहिक स्थिती (विवाहित, अविवाहित, विधवा/विधुर).मालकीचे पुरावे
  </p>
  <a class="text-white bg-blue-700 p-3 rounded-md inline-flex items-center">अर्ज करा
      
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
        </div>
  
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">शालेय व शिक्षण सेवासाठी अर्ज</h2>
          <p class="leading-relaxed text-white mb-4">शालेय व शिक्षण सेवासाठी अर्ज करताना, अर्ज करणाऱ्याला किंवा विद्यार्थ्याला खालील माहिती आणि कागदपत्रांची आवश्यकता असू शकते</p>
          <a class="text-white bg-blue-700 p-3 rounded-md inline-flex items-center">अर्ज करा
      
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
  
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">पेंशन योजना</h2>
          <p class="leading-relaxed text-white mb-4">पेंशन योजना आणि सरकारी योजनासाठी अर्ज करताना, अर्ज करणाऱ्याला खालील माहिती आणि कागदपत्रांची आवश्यकता असू शकते</p>
          <a class="text-white bg-blue-700 p-3 rounded-md inline-flex items-center">अर्ज करा
      
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
  
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">रस्ते व पायवाटा बांधणीसाठी अर्ज</h2>
          <p class="leading-relaxed text-white mb-4">रस्ते व पायवाटा बांधणीसाठी अर्ज करताना संबंधित व्यक्तीकडून खालील माहिती आणि कागदपत्रांची आवश्यकता असू शकते</p>
          <a class="text-white bg-blue-700 p-3 rounded-md inline-flex items-center">अर्ज करा
      
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
       
      </div>
    </div>
  </section> */}
  
  
   
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Birth Certificate */}
          <div className="bg-white bg-opacity-70 shadow-md rounded-lg p-6 border m-3  border-gray-200">
            <h2 className="text-xl font-bold text-black mb-4  ">1. जन्म प्रमाणपत्र</h2>
            <ul className="text-sm text-black list-disc pl-5 space-y-2">
              <li>
                जन्माचा पुरावा: <br />
                हॉस्पिटल किंवा प्रसूतीगृहाने दिलेला जन्माचा अहवाल (Delivery Report).
              </li>
              <li>
                नोंदणी अधिकाऱ्याकडून प्राप्त झालेल्या जन्माचे तारखेचे प्रमाणपत्र.
              </li>
              <li>
                पालकांचे ओळखपत्र:
                <ul className="list-disc pl-5">
                  <li>आधार कार्ड, पॅन कार्ड, किंवा ड्रायव्हिंग लायसन्स.</li>
                  <li>पालकांचे पत्त्याचे प्रमाणपत्र (उदा. वीज बिल, रेशन कार्ड).</li>
                </ul>
              </li>
            </ul>
            <Link href={'/birth'}> 
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              नोंदणी प्रक्रियेसाठी
            </button>
            </Link>
          </div>

          

          {/* Death Certificate */}
          <div className="bg-white shadow-md rounded-lg p-6 border m-3 bg-opacity-70  border-gray-200">
            <h2 className="text-xl font-bold text-black mb-4">2. राहिवासाचा प्रमाणपत्र</h2>
            <ul className="text-sm text-black list-disc pl-5 space-y-2">
              <li>
              अर्जदाराचे ओळखपत्र:
                <br />
                आधार कार्ड, पॅन कार्ड, मतदार ओळखपत्र, किंवा ड्रायव्हिंग लायसन्स. 

              </li>
              <li>
              पत्त्याचा पुरावा:रेशन कार्ड, वीज बिल, पाणी बिल, टेलिफोन बिल, किंवा घराचा भाडेकरार (Rent Agreement).
              </li>
              <li>
              जन्मतारीख पुरावा:जन्म प्रमाणपत्र, शाळा सोडल्याचा दाखला, किंवा पॅन कार्ड.....  
              </li>
              
            </ul>
            <Link href={'/residence'}>
            <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
              नोंदणी प्रक्रियेसाठी
            </button>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 bg-opacity-70 border m-3 border-gray-200">
            <h2 className="text-xl font-bold text-black mb-4">3. विवाह प्रमाणपत्र </h2>
            <ul className="text-sm text-black list-disc pl-5 space-y-2">
              <li>
              नोंदणीसाठी अर्ज सादर करणे: <br />
              <ul className="list-disc pl-5">
                <li>संबंधित तलाठी कार्यालय किंवा महानगरपालिका कार्यालयात विवाह नोंदणीसाठी अर्ज करावा लागतो.</li>
                <li>आवश्यक कागदपत्रांसह अर्ज सादर करा, आणि शुल्क भरावे लागते.</li>
                </ul>
              </li>
              
              <li>
              कागदपत्रांची पडताळणी :
                <ul className="list-disc pl-5">
                  <li>नोंदणी अर्ज दाखल केल्यानंतर, संबंधित अधिकारी कागदपत्रांची तपासणी करतात.....</li>
                </ul>
              </li>
            </ul>
            <Link href={'/marriage'}>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              नोंदणी प्रक्रियेसाठी
            </button>
            </Link>
          </div>



          {/* Death Certificate */}
          <div className="bg-white shadow-md rounded-lg bg-opacity-70 p-6 border m-3   border-gray-200">
            <h2 className="text-xl font-bold text-black mb-4">4. मृत्यू प्रमाणपत्र</h2>
            <ul className="text-sm text-black list-disc pl-5 space-y-2">
              <li>
                मृत्यूचा पुरावा:
                <br />
                हॉस्पिटल/प्राधिकृत वैद्यकीय अधिकारी दिलेला मृत्यू अहवाल (Death Report).
              </li>
              <li>
                नातेवाईकांचे ओळखपत्र (आधार कार्ड, पॅन कार्ड, रेशन कार्ड इ.).
              </li>
              <li>
                नोंदणीसाठी वैद्यकीय अधिकारी/नातेवाईक यांचे साक्षीपत्र.
              </li>
            </ul>
            <Link href={'/death'}>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
              नोंदणी प्रक्रियेसाठी
            </button>
            </Link>
          </div>                          

 {/* Property Registration */}
 <div className="bg-white shadow-md rounded-lg p-6 bg-opacity-70 border m-3 border-gray-200">
            <h2 className="text-xl font-bold text-black mb-4">5. रस्त्यांची तात्पुरती दुरुस्ती</h2>
            <ul className="text-sm text-black list-disc pl-5 space-y-2">
              <li>वाहतुकीच्या अडथळ्यांना कमी करणे.
              </li>
              <li>
              अपघात टाळण्यासाठी रस्त्यांना सुरक्षित बनवणे.
              सार्वजनिक सेवांसाठी रस्त्यांचा सुचारू वापर सुनिश्चित करणे.

              </li>
              <li>
              तात्पुरत्या दुरुस्तीचे सामान्य प्रकार:
              <br/>
खड्डे भरून काढणे.
तडे गेलेल्या रस्त्यांचे डागडुजी.
पाणी साचलेल्या भागाचे निचरा करणे.
मोडलेल्या किनारी दुरुस्ती करणे.
              </li>
            </ul>
            <Link href={'/roadRepair'}>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-green-600">
              नोंदणी प्रक्रियेसाठी
            </button>
            </Link>
          </div>


          <div className="bg-white shadow-md rounded-lg p-6 bg-opacity-70 border m-3   border-gray-200">
            <h2 className="text-xl font-bold text-black mb-4">6.घरपट्टी व पाणीपट्टी दाखला अर्ज फॉर्म
            (House Tax and Water Tax Certificate Application Form)</h2>
            <ul className="text-sm text-black list-disc pl-5 space-y-2">
              <li>
                स्थानिक स्वराज्य संस्थांना पायाभूत सुविधा जसे की रस्ते, गटारे, स्ट्रीट लाइट्स आणि पाणीपुरवठा व्यवस्थापनासाठी निधी प्रदान करणे.

              </li>
              {/* <li>
              शासकीय नोंदणीत घर मालकाचे अधिकार कायम ठेवणे.
              </li> */}
              
            </ul>
            <Link href={'/houseAndWaterTax'}>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
              नोंदणी प्रक्रियेसाठी
            </button>
            </Link>
          </div>                          
         
        </div>
      </div>
    
  

  </>
  )
}

export default SEVA