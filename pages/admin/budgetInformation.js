import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BudgetInformation() {
  const [collection, setCollection] = useState('')
  const [expense, setExpense] = useState('')
  const [financialYear, setFinancialYear] = useState('')
  const [fundName, setFundName] = useState('')
  const [accountGroup, setAccountGroup] = useState('')
  const [accountName, setAccountName] = useState('')
  const [actualAmountReceivedDuringYear, setActualAmountReceivedDuringYear] = useState('')
  const [actualAmountReceivedYear, setActualAmountReceivedYear] = useState('')
  const [estimatedAmountSanctionedYear, setEstimatedAmountSanctionedYear] = useState('')
  const [estimatedReceiptsPanchayatYear, setEstimatedReceiptsPanchayatYear] = useState('')
  const [openingBalanceYear, setOpeningBalanceYear] = useState('')
  const [totalEstimatedDeposit, setTotalEstimatedDeposit] = useState('')
  const [totalEstimatedCost, setTotalEstimatedCost] = useState('')
  const [aVBackwardClasses15, setAVBackwardClasses15] = useState('')
  const [dVDFSubscription025, setDVDFSubscription025] = useState('')
  const [disabilityWelfareFund5, setDisabilityWelfareFund5] = useState('')
  const [mChildWelfare10, setMChildWelfare10] = useState('')

  const [tableData, setTableData] = useState([]);

  const accountOptionsForCollection = {
    'एक (अ) कर': [
      'मालमत्ता कर, जमिनी व इमारती यावरील कर',
      'दिवाबत्ती कर',
      'स्वच्छता कर',
      'दुकाने, लघु उद्योग व हॉटेल चालविणे यावरील कर',
      'यात्रा कर',
      'जत्रा, उत्सव व इतर मनोरंजन कर',
      'सायकल व इतर वाहनावरील कर',
      'टोल टॅक्स',
      'उतारू व मालावरील कर',
      'वन विकास कर',
      'सेवा कर',
      'व्यापारी किंवा आजिवीका यावरील कर (शेतीव्यतिरिक्त)',
      'गुरांच्या बाजारातील दलालीचा व्यवसाय व आजिवीकेवरील कर',
      'इतर कर',
    ],
    'एक (ब) करेत्तर उत्पन्न': [
      'बाजार फी',
      'टांगा स्टॅण्ड फी',
      'कार स्टॅण्ड फी',
      'पाणी पट्टी',
      'स्वच्छता फी',
      'गाय चरण फी',
      'डीव्हीडीएफ व्याज २.५%',
      'जमीन भाडेपट्टी',
      'व्याज जमा',
      'जागा भाडे',
      'कोंडवाडा जमा',
      'देणगी',
      'इतर जमा',
    ],
    'एक (क)अभिहस्तांकित रक्कमा': [
      'मुद्रांक शुल्क',
      'उपकर',
      'जमीन महसूल',
      'जमीन समानीकरण',
      'गौण खनिजे',
      'पथ दिवाबत्ती देयकाचा भरणा करण्यासाठी अनुदान.',
      'नळपाणी पुरवठ्यातील देयकासाठी ५०% अनुदाने.',
      'मागास व आदिवासी क्षेत्रासाठी सहाय्य.',
      'यात्राकराऐवजी अनुदाने',
      'जकात नुकसानभरपाई अनुदाने',
      'इतर अनुदाने',
    ],
    '(दोन) (अ) राज्य शासन सहाय्यक अनुदाने जमा': [
      'शौचालय',
      'दलित वस्ती सुधार',
      'पाणीपुरवठा/टी.सी.एल.',
      'बांधकाम',
      'शिक्षण शाळा',
      'मानधन, किमान वेतन व बैठक भत्ता.',
      'आरोग्य',
      'इतर',
    ],
  };

  const accountOptionsForExpense = {
    'खर्च गट १': ['खर्च १', 'खर्च २'],
    'खर्च गट २': ['खर्च ३', 'खर्च ४'],
  };

  // const fetchTableData = async () => {
  //   try {
  //     const response = await axios.get('/api/namunaOne'); // Replace with actual API URL
  //     // Ensure the response data is an array
  //     if (Array.isArray(response.data)) {
  //       setTableData(response.data);
  //     } else {
  //       console.error('API response is not an array');
  //       setTableData([]);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching table data:', error);
  //     setTableData([]);  // Set an empty array in case of an error
  //   }
  // };

  const fetchTableData = async () => {
    try {
      const response = await axios.get('/api/namunaOne');
      console.log('API Response:', response.data);  // Log the entire response
  
      // Check if response.data contains the 'data' property and if it is an array
      if (response.data && Array.isArray(response.data.data)) {
        setTableData(response.data.data);  // Extract the 'data' array from the response
      } else {
        console.error('API response does not contain an array in the "data" property');
        setTableData([]);  // Set table data to an empty array if the "data" property is not an array
      }
    } catch (error) {
      console.error('Error fetching table data:', error);
      setTableData([]);  // Handle the error gracefully by setting table data to empty
    }
  };
  
  
  useEffect(() => {
    fetchTableData(); // Fetch data when the component mounts
  }, []);




  const accountOptions = collection === 'जमा' ? accountOptionsForCollection : accountOptionsForExpense;
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'collection') {
      setCollection(value);
      setExpense(''); // Reset expense when collection is selected
      setAccountGroup(''); // Reset account group when changing category
      setAccountName(''); // Reset account name when changing category
    } else if (name === 'expense') {
      setExpense(value);
      setCollection(''); // Reset collection when expense is selected
      setAccountGroup(''); // Reset account group when changing category
      setAccountName('');
    } else if (e.target.name == "financialYear") {
      setFinancialYear(e.target.value);
    } else if (e.target.name == "fundName") {
      setFundName(e.target.value);
    } else if (e.target.name == "accountGroup") {
      setAccountGroup(e.target.value);
      setAccountName('');
    } else if (e.target.name == "accountName") {
      setAccountName(e.target.value);
    } else if (e.target.name == "actualAmountReceivedDuringYear") {
      setActualAmountReceivedDuringYear(e.target.value);
    } else if (e.target.name == "actualAmountReceivedYear") {
      setActualAmountReceivedYear(e.target.value);
    } else if (e.target.name == "estimatedAmountSanctionedYear") {
      setEstimatedAmountSanctionedYear(e.target.value);
    } else if (e.target.name == "estimatedReceiptsPanchayatYear") {
      setEstimatedReceiptsPanchayatYear(e.target.value);
    } else if (e.target.name == "openingBalanceYear") {
      setOpeningBalanceYear(e.target.value);
    } else if (e.target.name == "totalEstimatedDeposit") {
      setTotalEstimatedDeposit(e.target.value);
    } else if (e.target.name == "totalEstimatedCost") {
      setTotalEstimatedCost(e.target.value);
    } else if (e.target.name == "aVBackwardClasses15") {
      setAVBackwardClasses15(e.target.value);
    } else if (e.target.name == "dVDFSubscription025") {
      setDVDFSubscription025(e.target.value);
    } else if (e.target.name == "disabilityWelfareFund5") {
      setDisabilityWelfareFund5(e.target.value);
    } else if (e.target.name == "mChildWelfare10") {
      setMChildWelfare10(e.target.value);
    }

  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      collection,
      expense,
      financialYear,
      fundName,
      accountGroup,
      accountName,
      actualAmountReceivedDuringYear,
      actualAmountReceivedYear,
      estimatedAmountSanctionedYear,
      estimatedReceiptsPanchayatYear,
      openingBalanceYear,
      totalEstimatedDeposit,
      totalEstimatedCost,
      aVBackwardClasses15,
      dVDFSubscription025,
      disabilityWelfareFund5,
      mChildWelfare10,
    };
    console.log("formData ", formData);
    const response = await fetch('/api/namunaOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
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
      alert('Form submitted successfully');
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
      <div className="min-h-screen bg-transparent flex items-center lg:-m-11 justify-center lg:mr-3">
        <div className="w-full max-w-6xl bg-transparent shadow-lg rounded-lg p-8 ">
          <h2 className="text-lg font-bold text-white mb-6">अंदाजपत्रक माहिती</h2>

          {/* Form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="  flex items-center space-x-4">
             

              <div className="w-full border border-gray-300 rounded-md p-2 mt-6 flex gap-7 justify-center bg-white">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="collection"
                    value="जमा"
                    name="collection"
                    checked={collection === 'जमा'}
                    onChange={handleInputChange}
                    className="focus:ring-green-500 focus:border-green-500"
                  />
                  <label htmlFor="collection" className="text-sm font-medium">जमा</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="expense"
                    value="खर्च"
                    name="expense"
                    checked={expense === 'खर्च'}
                    onChange={handleInputChange}
                    className="focus:ring-green-500 focus:border-green-500"
                  />
                  <label htmlFor="kharch" className="text-sm font-medium">खर्च</label>
                </div>
              </div>
            </div>


            <div>
              <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>आर्थिक वर्ष </label>
              <select name='financialYear' onChange={handleInputChange} value={financialYear} className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500">
                <option>निवडा</option>
                <option value={'२०२२ - २०२३'}>२०२२ - २०२३</option>
                <option value={'२०२१ - २०२२'}>२०२१ - २०२२</option>
                <option value={'२०२० - २०२१'}>२०२० - २०२१</option>
                <option value={'२०१९ - २०२०'}>२०१९ - २०२०</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>फंडाचे नाव</label>
              <select name='fundName' onChange={handleInputChange} value={fundName} className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500">
                <option>निवडा</option>
                <option value={'ग्रामपंचायत फंड'}>ग्रामपंचायत फंड</option>
                <option value={'ग्रामपंचायत पाणी पुरवठा फंड'}>ग्रामपंचायत पाणी पुरवठा फंड</option>
              </select>
            </div>

            {/* Row 2 */}

            
            
              {/* Account Group */}
          <div>
            <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>खाते गट</label>
            <select name="accountGroup" onChange={handleInputChange} value={accountGroup} className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500">
              <option>निवडा</option>
              {Object.keys(accountOptions).map((group, index) => (
                <option key={index} value={group}>{group}</option>
              ))}
            </select>
          </div>

          {/* Account Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>खाते नाव</label>
            <select name="accountName" onChange={handleInputChange} value={accountName} className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500">
              <option>निवडा</option>
              {accountGroup && accountOptions[accountGroup]?.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>


            {/* Row 3 */}
            <div>
              <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>वर्षात मिळालेली प्रत्यक्ष रक्कम</label>
              <input
                type="number"
                name='actualAmountReceivedDuringYear'
                onChange={handleInputChange}
                value={actualAmountReceivedDuringYear}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>वर्षी मिळालेली प्रत्यक्ष रक्कम</label>
              <input
                type="number"
                name='actualAmountReceivedYear'
                onChange={handleInputChange}
                value={actualAmountReceivedYear}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>वर्षासाठी पंचायतीची अंदाजित प्राप्ती </label>
              <input
                name='estimatedReceiptsPanchayatYear'
                onChange={handleInputChange}
                value={estimatedReceiptsPanchayatYear}
                type="number"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1"><label className='text-red-500'>*</label>वर्षासाठी मंजूर केलेली अंदाजित रक्क्म</label>
              <input
                type="number"
                name='estimatedAmountSanctionedYear'
                onChange={handleInputChange}
                value={estimatedAmountSanctionedYear}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">वर्षाची सुरुवातीची शिल्लक</label>
              <input
                type="number"
                name='openingBalanceYear'
                onChange={handleInputChange}
                value={openingBalanceYear}
                className="w-full border bg-gray-300 border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">एकूण अंदाजीत जमा</label>
              <input
                type="number"
                name='totalEstimatedDeposit'
                onChange={handleInputChange}
                value={totalEstimatedDeposit}
                className="w-full border bg-gray-300 border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">एकूण अंदाजीत खर्च</label>
              <input
                type="number"
                name='totalEstimatedCost'
                onChange={handleInputChange}
                value={totalEstimatedCost}
                className="w-full border bg-gray-300 border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">( आ.व. मागासवर्ग) (१५%)</label>
              <input
                type="number"
                name='aVBackwardClasses15'
                onChange={handleInputChange}
                value={aVBackwardClasses15}
                className="w-full border bg-gray-300 border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">डी. व्ही.डी.एफ. वर्गणी ( ०.२५%)</label>
              <input
                type="number"
                name='dVDFSubscription025'
                onChange={handleInputChange}
                value={dVDFSubscription025}
                className="w-full border bg-gray-300 border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">अपंग कल्याण निधी(५%)
              </label>
              <input
                type="number"
                name='disabilityWelfareFund5'
                onChange={handleInputChange}
                value={disabilityWelfareFund5}
                className="w-full border bg-gray-300 border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">म.व बालकल्याण(१०%)</label>
              <input
                type="number"
                name='mChildWelfare10'
                onChange={handleInputChange}
                value={mChildWelfare10}
                className="w-full border bg-gray-300 border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
            <div className="flex justify-end space-x-4 mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
            >
              साठवा
            </button>
            </div>
          </form>

          <div className="overflow-x-auto  mt-5">
        <table className="w-full border-collapse border border-gray-300 ">
          <thead className="bg-blue-400 text-white">
            <tr>
        <th className="border text-sm">अ. क्र.</th>
        <th className="border text-sm">फंडाचे नाव</th>
        <th className="border w-20 text-sm">खाते गट</th>
        <th className="border w-20  text-sm">खाते नाव</th>
        <th className="border text-sm">जमा/खर्च</th>
        <th className="border w-20 text-sm">आर्थिक वर्ष</th>
        <th className="border text-sm">गतपूर्व वर्षात मिळालेली प्रत्यक्ष रक्कम</th>
        <th className="border text-sm">मागील वर्षी मिळालेली प्रत्यक्ष रक्कम</th>
        <th className="border text-sm">चालू वर्षासाठी मंजुरकेलेली अंदाजित रक्कम</th>
        <th className="border text-sm">चालू वर्षासाठी पंचायतीची अंदाजित रक्कम</th>
      </tr>
    </thead>
    {/* Table Body */}
    <tbody>
      {tableData.map((row, index) => (
        <tr key={index}>
          <td className="border text-white  text-sm">{index + 1}</td>
          <td className="border text-white  text-sm">{row.fundName}</td>
          <td className="border text-white  text-sm">{row.accountGroup}</td>
          <td className="border text-white  text-sm">{row.accountName}</td>
          <td className="border text-white  text-sm">{row.collection || row.expense}</td>
          <td className="border text-white  text-sm">{row.financialYear}</td>
          <td className="border text-white  text-sm">{row.previousYearActualAmount}</td>
          <td className="border text-white  text-sm">{row.lastYearAmount}</td>
          <td className="border text-white  text-sm">{row.estimatedAmountCurrentYear}</td>
          <td className="border text-white  text-sm">{row.estimatedPanchayatAmount}</td>
        </tr>
      ))}
    </tbody>
  </table>
{/* </div> */}
</div>
         
        </div>
      </div>
    </>
  );
}

export default BudgetInformation;





