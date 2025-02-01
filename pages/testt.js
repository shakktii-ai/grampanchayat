// import { Stream } from 'form-data';
// import { useState } from 'react';

// export default function Home() {
//   const [jobRole, setJobRole] = useState('');
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Function to call the API
//   const fetchResponse = async (role) => {
//     setLoading(true);
//     try {
//       const res = await fetch('http://139.59.42.156:11434/api/generate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           model: 'gemma:2b',
//           prompt: `${role}`,
//           Stream:false
//         }),
//       });

//       // Use .text() to get the raw response as a string
//       const text = await res.text();
//       console.log("Raw Response:", text); // Log the raw response

//       // Manually parse the response to JSON
//       const data = JSON.parse(text);
//       console.log("Parsed Data:", data);

//       // Assuming the API returns a "message" field
//       setResponse(data.message);
//     } catch (error) {
//       setResponse('Error fetching data');
//       console.error('Error:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Ask for a Job-related Joke</h1>
//       <input
//         type="text"
//         value={jobRole}
//         onChange={(e) => setJobRole(e.target.value)}
//         placeholder="Enter your job role"
//         style={{ padding: '10px', marginBottom: '20px' }}
//       />
//       <button
//         onClick={() => fetchResponse(jobRole)}
//         style={{ padding: '10px', cursor: 'pointer', color: 'white' }}
//       >
//         Get Joke
//       </button>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         response && <div style={{ marginTop: '20px', color: 'white' }}><strong>Response:</strong> {response}</div>
//       )}
//     </div>
//   );
// }

import { useState } from 'react';

export default function Home() {
  const [jobRole, setJobRole] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to call the API
  const fetchResponse = async (role) => {
    setLoading(true);
    let fullResponse = '';  // Store the full response here
    try {
      const res = await fetch('http://139.59.42.156:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gemma:2b',
          prompt: `give mi 10 question in ${role} that job role`,

        }),
      });

      // Read the response as a stream
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let result = '';

      // Collect each chunk of the response
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        result += decoder.decode(value, { stream: true });

        // Try parsing each line of the response if it's a separate JSON object
        const lines = result.split('\n');
        result = lines.pop(); // Last part might not be a full JSON object yet
        for (const line of lines) {
          if (line.trim()) {
            try {
              const json = JSON.parse(line);  // Parse the chunk of JSON
              fullResponse += json.response; // Concatenate each response
            } catch (err) {
              console.error("Error parsing JSON:", err);
            }
          }
        }
      }

      // After collecting the full response, update the state
      setResponse(fullResponse);
    } catch (error) {
      setResponse('Error fetching data');
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ padding: '10px', cursor: 'pointer', color: 'white' }}>Ask any job i give u 10 question </h1>
      <input
        type="text"
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}
        placeholder="Enter your job role"
        style={{ padding: '10px', marginBottom: '20px' }}
      />
      <button
        onClick={() => fetchResponse(jobRole)}
        style={{ padding: '10px', cursor: 'pointer', color: 'white' }}
      >
        Get questions
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        response && <div style={{ marginTop: '20px', color: 'white' }}><strong>Response:</strong> {response}</div>
      )}
    </div>
  );
}
