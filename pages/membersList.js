import React from 'react'

function MembersList() {
    const members = [
        "श्री. शिवनाथ दिगंबर जांभुळकर",
        "श्री. शिवनाथ दिगंबर जांभुळकर",
        "श्री. शिवनाथ दिगंबर जांभुळकर",
        "श्री. शिवनाथ दिगंबर जांभुळकर",
        "श्री. शिवनाथ दिगंबर जांभुळकर",
        "श्री. शिवनाथ दिगंबर जांभुळकर",
        "श्री. शिवनाथ दिगंबर जांभुळकर",
        "श्री. शिवनाथ दिगंबर जांभुळकर",
        "श्री. शिवनाथ दिगंबर जांभुळकर",
        "श्री. शिवनाथ दिगंबर जांभुळकर",
      ];
  return (
    <>
    <div className='m-10'>
      <div className="bg-gradient-to-t m-6 from-green-600 to-green-400 py-4 text-center">
        <h1 className="text-white text-lg font-semibold">सदस्य कार्यकारणी / Executive Member</h1>
      </div>

      <div className="flex justify-center m-5 mt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-96 pl-4 pr-16 py-2 border rounded-full shadow-md focus:outline-none"
          />
          <button className="absolute right-0 top-0 mt-2 mr-4 bg-gray-200 px-4 py-1 rounded-full">
            Search
          </button>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="w-full max-w-6xl mx-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="border border-gray-300 px-4 py-2">अ.क्र.</th>
              <th className="border border-gray-300 px-4 py-2">सदस्य नाव</th>
              <th className="border border-gray-300 px-4 py-2">पद</th>
              <th className="border border-gray-300 px-4 py-2">मोबाइल नंबर</th>
              <th className="border border-gray-300 px-4 py-2">ई-मेल</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="bg-orange-100 text-gray-800">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{member}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                <td className="border border-gray-300 px-4 py-2 text-center">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default MembersList