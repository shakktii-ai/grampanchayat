// // pages/index.js
// import { useState } from 'react';

// export default function Home() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [name, setName] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const data = {
//       phone_number: phoneNumber,
//       name: name,
//       discount: discount,
//     };

//     try {
//       const res = await fetch('/api/sendWMessage', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await res.json();
//       setResponse(result);
//     } catch (error) {
//       console.error(error);
//       setResponse({ error: 'Error sending message' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//         <h1 className="text-3xl font-bold text-center mb-4">Send WhatsApp Message</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded mt-2"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700">Recipient's Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded mt-2"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="discount" className="block text-gray-700">Discount Value</label>
//             <input
//               type="text"
//               id="discount"
//               name="discount"
//               value={discount}
//               onChange={(e) => setDiscount(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded mt-2"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded mt-4"
//             disabled={loading}
//           >
//             {loading ? 'Sending...' : 'Send Message'}
//           </button>
//         </form>
//         {response && (
//           <div className="mt-4 text-center">
//             {response.error ? (
//               <p className="text-red-500">{response.error}</p>
//             ) : (
//               <pre className="text-green-500">{JSON.stringify(response, null, 2)}</pre>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [discount, setDiscount] = useState('');
  const [media, setMedia] = useState(null);
  const [messageType, setMessageType] = useState('text');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const sendMessage = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('messageType', messageType);
    formData.append('phone_number', phoneNumber);
    formData.append('message', message);
    formData.append('name', name);
    formData.append('discount', discount);
    if (media) formData.append('media', media);

    try {
      const res = await fetch('/api/sendMessage', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      setResponse(result);
    } catch (error) {
      setResponse({ error: 'Error sending message' });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMedia(file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Send WhatsApp Message</h1>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Phone Number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Message"
          />
        </div>

        {messageType === 'template' && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Template Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Template Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Discount</label>
              <input
                type="text"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Discount"
              />
            </div>
          </>
        )}

        {messageType === 'media' && (
          <div className="mb-4">
            <label className="block text-gray-700">Upload Image</label>
            <input type="file" onChange={handleFileChange} className="w-full mt-2" />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700">Message Type</label>
          <select
            value={messageType}
            onChange={(e) => setMessageType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          >
            <option value="text">Text</option>
            <option value="template">Template</option>
            <option value="media">Media</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2 w-1/2"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {response && (
          <div className="mt-4 text-center">
            {response.error ? (
              <p className="text-red-500">{response.error}</p>
            ) : (
              <pre>{JSON.stringify(response, null, 2)}</pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
