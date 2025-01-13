import React, { useEffect, useState } from 'react'


function TharavPost() {
    const [tharav, setTharav] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true); // To manage the loading state
    const [error, setError] = useState(null); // To manage the error state
    const [selectedRecord, setSelectedRecord] = useState(null); // To store the selected record

    useEffect(() => {
        const fetchTharavData = async () => {
            try {
                const response = await fetch('/api/tharavpost'); // Adjust the API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log('Fetched Data:', data); // Log the full API response

                setTharav(data); // Set the fetched data directly since it is already an array
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTharavData();
    }, []);

    const handleDateClick = (record) => {
        setSelectedRecord(record); // Set the clicked record as selected
    };

    const closeForm = () => {
        setSelectedRecord(null); // Close the form by resetting the selected record
    };

    console.log('State Tharav:', tharav); // Log the current state of `tharav`

    if (loading) {
        return <div className="text-center text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-white">Error: {error}</div>;
    }

    return (
        <>
            <h1 className='text-center text-3xl text-white font-bold'>ठराव यादी</h1>
            {Array.isArray(tharav) && tharav.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 m-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {tharav.map((row) => (
      <div key={row._id} className="text-white items-center  flex bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="font-semibold text-lg">ठराव दिनांक :-</div>
        <span
          onClick={() => handleDateClick(row)} // Set the selected record on click
          className="cursor-pointer text-blue-500 hover:text-blue-700 transition duration-200"
        >
          {row.documentCopyDate || 'N/A'}
        </span>
      </div>
    ))}
  </div>
) : (
  <div className="text-center text-white">No data available</div>
)}

            {selectedRecord && (
                
                <div className='bg-white    m-5 p-5 rounded-lg '>
                    <h1 className='text-center text-3xl  font-bold'>ठराव पत्रक</h1>
    <div  className='flex justify-between m-10 '>
<span className='mt-10 '>नक्कल उतारा दि.<span className='font-bold'>{selectedRecord.documentCopyDate}</span></span><span className='mt-10'>ठराव क्रमांक.{selectedRecord.resolutionNumber}</span>
    </div>
    <div className=' flex justify-center m-10'>
<span>ग्रामपंचायत कर्यालय <span className='font-bold'>{selectedRecord.officeName}</span>.पंचायत समिती <span className='font-bold'>{selectedRecord.officeName}</span>.  उपस्थित ग्रामपंचायत सदस्य
सभा अहवाल प्रोसीडींग बुकावरुन
</span>
    </div>
    <div className="overflow-x-auto m-20 ">
        <table className="w-full border-collapse border border-gray-300 ">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">अ.क्र.</th>
              <th className="border border-gray-300 px-4 py-2 text-left">नाव</th>
              
            </tr>
          </thead>
          <tbody>
          {selectedRecord.members && selectedRecord.members.length > 0 ? (
                  selectedRecord.members.map((member, index) => (
                <tr className="" key={index}>
                  <td className="border border-gray-300 px-4 py-2" >{index + 1}</td>
                  
                    <td className="border border-gray-300 px-4 py-2 font-bold" >{member.memberName || 'N/A'}</td>
                    </tr>))
                ) : (
                  <li>No members available</li>
                )}
                  
                 
                  
                    
              
            
          </tbody>
        </table>
      </div>
      <h2 className=' text-center font-bold'>कामकाजासा तपशिल</h2>
    <div className=' flex justify-center m-10'>
<span>दिनांक- <span className='font-bold'>{selectedRecord.documentCopyDate}</span><br/>
ग्रामपंचायत कर्यालय- {selectedRecord.officeName}<br/>
ठिकाण-<span className='font-bold'>{selectedRecord.officeName}</span>वेळ <span className='font-bold'>{selectedRecord.time}</span> वाजता<br/>
श्री. सरपंच-<span className='font-bold'>{selectedRecord.sarpanchName}</span><br/>
यांचे अध्यक्षेखाली ग्रामपंचायतीची साधारण / खास प्रामसभा घेण्यात आती.कोरम पुर्ण असल्यामुळे सभेस सुरुवात करण्यात आली.<br/>
सुचक श्री.<span className='font-bold'>{selectedRecord.significantName}</span>.<br/>
अनुमोदक- श्री.<span className='font-bold'>{selectedRecord.approvingName}</span><br/>

</span>
    </div>

      <h2 className=' text-center font-bold'>ठराव</h2>
    <div className=' flex justify-center m-10'>
<span>आज दिनांक…<span className='font-bold'>{selectedRecord.documentCopyDate}</span> रोजी पुर्वसुचने नुसार ग्रामपंचायत…<span className='font-bold'>{selectedRecord.officeName}</span>. ची साधारण / खास ग्रामसभा ग्रामपंचायत कार्यालयासमोर सकाळी/दुपारी.<span className='font-bold'>{selectedRecord.time}</span> वाजता सरपंच श्री./सौ... पांच्या अध्यक्षे खाली साधारण / खास ग्रामसभा घेण्यात आली. ग्रामसभेत खालील विषयावर सविस्तरचर्चा करण्यात आली. ठराव क्र.<span className='font-bold'>{selectedRecord.resolutionNumber}</span>.
विषय - <span className='font-bold'>{selectedRecord.subject}</span>. <br/>
सुचक श्री.<span className='font-bold'>{selectedRecord.significantName}</span>.<br/>
अनुमोदक-श्री.<span className='font-bold'>{selectedRecord.approvingName}</span>.


</span>
    </div>
    <div className=' mt-5 flex justify-center m-10'>
<span>उपरोक्त विषयास अनुसरुन सुचकाणे सुचवल्या प्रमाणे मग्रारोहयो अतर्गत रेशीम उद्योग विकासयोजना राबवण्या करीता ताभार्थ्यांची निवड करणे करीता महाराष्ट्र शासन, नियोजन विभाग, शा. नि.क्र. मग्रारो-2014/प्र.क्र.79/  रोहयो-5 दि. 31 मार्च 2016 व शा.नि.क्र. मग्रारो-2014/प्र.क्र.137/रोहयो-1 दि.04 मार्च 2014 या शां. नि. वाचन करण्यात आते. शासन निर्णयात नमुद केलेल्या निकषानुसार लाभार्थी निवडकरण्यासाठी सर्वप्रथम अ.जाती, अ.जमाती, भटक्याविमुक्त जमाती, दारिद्रय रेषेखालीत कुटुंबे, महिलाप्रधान कुटुंबे, अपंगत्व प्रधान असतेती कुटुंबे, भुसुधार योजेनेचे लाभार्थी, इंदिरा आवास योजनेचे लाभार्थी, अ. ज. व अन्यवन्यनिवासी वन अधिकारमान्यता) अधिनियम 2006 नुसार पात्र व्यक्ती. सदर प्रवर्गातील लाभार्थी निवड संपल्या नंतर कृषि कर्ज माफी योजना सन 2008 नुसार अल्प भुधारक (1हे. पेक्षा जास्त 2 हे. पर्यंत) व सिमांत (1 हेक्टरपेक्षा कमी क्षेत्र) असलेल्या लाभार्थ्यांची खतीत प्रमाणे निवड करण्यात आली व ठराव बहुमतानेपास करण्यात आता.


</span>
    </div>
    <div className="overflow-x-auto m-20 ">
    <table className="w-full border-collapse border border-gray-300">
  <thead className="bg-green-500 text-white">
    <tr>
      <th className="border border-gray-300 px-4 py-2 text-left">अ.क्र.</th>
      <th className="border border-gray-300 px-4 py-2 text-left">नाव</th>
      <th className="border border-gray-300 px-4 py-2 text-left">गट क्रमांक</th>
      <th className="border border-gray-300 px-4 py-2 text-left">8 अनुसार क्षेत्र</th>
      <th className="border border-gray-300 px-4 py-2 text-left">लाभार्थी वर्गवारी</th>
    </tr>
  </thead>
  <tbody>
    {selectedRecord.fields && selectedRecord.fields.length > 0 ? (
      selectedRecord.fields.map((fields, index) => (
        <tr key={index}>
          <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
          <td className="border border-gray-300 px-4 py-2 font-bold">{fields.fullName || 'N/A'}</td>
          <td className="border border-gray-300 px-4 py-2 font-bold">{fields.groupNumber || 'N/A'}</td>
          <td className="border border-gray-300 px-4 py-2 font-bold">{fields.fieldAccordingTo8a || 'N/A'}</td>
          <td className="border border-gray-300 px-4 py-2 font-bold">{fields.beneficiaryCategory || 'N/A'}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="5" className="border border-gray-300 px-4 py-2 text-center">
          No members available
        </td>
      </tr>
    )}
  </tbody>
</table>

      </div>
    <div className=' mt-5 flex justify-center m-10'>
<span>वरिल प्रमाणे ईच्छुक शेतकऱ्यांची निवड करण्यात आली व अंतीम चर्चा अंती सर्वानुमते ठराव मंजुर करण्यात आला.
</span>
</div>
    <div className=' mt-5 flex justify-center m-10'>
<span>सरपंच<br/>
ग्रामपंचायत. ………………….<br/>
ता………………………<br/> ……….जि.बीड

</span>
</div> 
</div>)}
    </>
    )
}

export default TharavPost