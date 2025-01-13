// import { useState, useEffect, useRef } from 'react';

// export default function Home() {
//   const [isFlowActive, setIsFlowActive] = useState(false);
//   const [responseText, setResponseText] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [totalScore, setTotalScore] = useState(0);
//   const [isListening, setIsListening] = useState(false);

//   const [userResponses, setUserResponses] = useState([]); // Store user responses

//   const recognitionRef = useRef(null);

//   // Store the random numbers generated for this session
//   const randomNumbers = generateUniqueRandomNumbers();

//   // Cleanup Speech Recognition instance on unmount
//   useEffect(() => {
//     recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current.lang = 'en-US';
//     recognitionRef.current.continuous = false;
//     recognitionRef.current.interimResults = true;

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, []);

//   // Start the conversation flow or stop it
//   const startButtonClick = async () => {
//     if (!isFlowActive) {
//       setIsFlowActive(true);
//       setResponseText('Starting conversation flow...');
//       setTotalScore(0); // Reset score
//       const nameOccupation = await getValidUserResponse(
//         "Hi, I'm your AI voice mentor. What's your name and occupation?"
//       );

//       setResponseText(`Great to meet you, ${nameOccupation}! Let's start with an easy scenario.`);
//       await runConversationFlow();

//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     } else {
//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     }
//   };

//   // Generate unique random numbers for the current session
//   function generateUniqueRandomNumbers() {
//     const numbers = [];
//     while (numbers.length < 10) {
//       const randomNum = Math.floor(Math.random() * 10) + 1;
//       if (!numbers.includes(randomNum)) {
//         numbers.push(randomNum);
//       }
//     }
//     return numbers;
//   }

//   // AI Speech response
//   const playAIResponse = (text, callback) => {
//     setResponseText('AI is speaking...');
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';

//     utterance.onend = () => {
//       setResponseText('');
//       if (callback) callback();
//     };

//     speechSynthesis.speak(utterance);
//   };

//   // Wait for user response via Speech Recognition
//   const waitForUserResponse = () => {
//     return new Promise((resolve) => {
//       recognitionRef.current.onstart = () => {
//         setIsListening(true);
//         setResponseText('Listening...');
//       };

//       recognitionRef.current.onresult = (event) => {
//         const text = event.results[event.results.length - 1][0].transcript.trim();
//         console.log('User said:', text);
//         setResponseText(`You said: "${text}"`);
//         resolve(text);
//       };

//       recognitionRef.current.onerror = (error) => {
//         console.error('Speech Recognition error:', error);
//         setResponseText('There was an issue with speech recognition.');
//         resolve(null);
//       };

//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//         if (responseText === 'Listening...') {
//           setResponseText('I couldn’t hear you, please try again.');
//         }
//       };

//       recognitionRef.current.start();
//     });
//   };

//   // Get a valid user response, retry if empty or unclear
//   const getValidUserResponse = async (promptText) => {
//     let userResponse = null;

//     while (!userResponse || userResponse.trim() === '') {
//       await new Promise((resolve) => {
//         playAIResponse(promptText, resolve);
//       });

//       userResponse = await waitForUserResponse();

//       if (!userResponse || userResponse.trim() === '') {
//         await new Promise((resolve) => {
//           playAIResponse('Please speak more clearly. Let\'s try again.', resolve);
//         });
//       }
//     }
//     return userResponse;
//   };

//   // Run the full conversation flow with scenarios
//   const runConversationFlow = async () => {
//     let currentScore = 0;

//     const scenarios = [
//       {
//         question: 'Imagine you have a deadline tomorrow, but your teammate is unavailable. How would you handle this situation?',
//         correctAnswer: 'Prioritize tasks and manage the workload while informing my manager.',
//       },
//       {
//         question: 'You are leading a team meeting, and one member consistently interrupts others. How would you address this behavior?',
//         correctAnswer: 'I would politely ask the team member to hold their thoughts until others have finished speaking.',
//       },
//       // Additional scenarios can be added here
//     ];

//     for (let i = 0; i < scenarios.length; i++) {
//       const randomGuess = randomNumbers[i];
//       const userResponse = await getValidUserResponse(scenarios[i].question);

//       // Store user's response in state
//       setUserResponses((prevResponses) => [
//         ...prevResponses,
//         {
//           question: scenarios[i].question,
//           userResponse,
//           correctAnswer: scenarios[i].correctAnswer,
//         },
//       ]);

//       const evaluation = {
//         score: userResponse.toLowerCase().includes(scenarios[i].correctAnswer.toLowerCase()) ? 5 : 0,
//         feedback: userResponse.toLowerCase().includes(scenarios[i].correctAnswer.toLowerCase())
//           ? 'Good job!'
//           : `Your answer needs improvement. The correct answer was: ${scenarios[i].correctAnswer}`,
//       };

//       console.log(`Scenario ${i + 1}:`, evaluation);
//       await new Promise((resolve) => {
//         playAIResponse(evaluation.feedback, resolve);
//       });

//       currentScore += evaluation.score;
//     }

//     setTotalScore(currentScore);
//     playAIResponse(`Thank you for participating! Your total score is ${currentScore}/50.`);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 text-white">
//       <h1 className="text-3xl font-bold mb-6">AI Voice Mentor</h1>
//       <p className="text-lg mb-6">{responseText}</p>
//       <p className="text-lg mb-6">Total Score: {totalScore}/50</p>
//       <button
//         onClick={startButtonClick}
//         className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//       >
//         {isFlowActive ? 'End' : 'Start'}
//       </button>
//       {isListening && <p className="mt-4 text-yellow-300">Listening...</p>}
//       {isLoading && <p className="mt-4">Loading...</p>}

//       {/* Display user responses after the conversation */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold">Your Responses</h2>
//         <ul className="mt-4">
//           {userResponses.map((response, index) => (
//             <li key={index} className="mb-4">
//               <p><strong>Question:</strong> {response.question}</p>
//               <p><strong>Your Response:</strong> {response.userResponse}</p>
//               <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect, useRef } from 'react';

// export default function Home() {
//   const [isFlowActive, setIsFlowActive] = useState(false);
//   const [responseText, setResponseText] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [totalScore, setTotalScore] = useState(0);
//   const [isListening, setIsListening] = useState(false);

//   const [userResponses, setUserResponses] = useState([]); // Store user responses

//   const recognitionRef = useRef(null);

//   // Store the random numbers generated for this session
//   const randomNumbers = generateUniqueRandomNumbers();

//   // Cleanup Speech Recognition instance on unmount
//   useEffect(() => {
//     recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current.lang = 'en-US';
//     recognitionRef.current.continuous = false;
//     recognitionRef.current.interimResults = true;

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, []);

//   // Start the conversation flow or stop it
//   const startButtonClick = async () => {
//     if (!isFlowActive) {
//       setIsFlowActive(true);
//       setResponseText('Starting conversation flow...');
//       setTotalScore(0); // Reset score
//       const nameOccupation = await getValidUserResponse(
//         "Hi, I'm your AI voice mentor. What's your name and occupation?"
//       );

//       setResponseText(`Great to meet you, ${nameOccupation}! Let's start with an easy scenario.`);
//       await runConversationFlow();

//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     } else {
//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     }
//   };

//   // Generate unique random numbers for the current session
//   function generateUniqueRandomNumbers() {
//     const numbers = [];
//     while (numbers.length < 10) {
//       const randomNum = Math.floor(Math.random() * 10) + 1;
//       if (!numbers.includes(randomNum)) {
//         numbers.push(randomNum);
//       }
//     }
//     return numbers;
//   }

//   // AI Speech response
//   const playAIResponse = (text, callback) => {
//     setResponseText('AI is speaking...');
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';

//     utterance.onend = () => {
//       setResponseText('');
//       if (callback) callback();
//     };

//     speechSynthesis.speak(utterance);
//   };

//   // Wait for user response via Speech Recognition
//   const waitForUserResponse = () => {
//     return new Promise((resolve) => {
//       recognitionRef.current.onstart = () => {
//         setIsListening(true);
//         setResponseText('Listening...');
//       };

//       recognitionRef.current.onresult = (event) => {
//         const text = event.results[event.results.length - 1][0].transcript.trim();
//         console.log('User said:', text);
//         setResponseText(`You said: "${text}"`);
//         resolve(text);
//       };

//       recognitionRef.current.onerror = (error) => {
//         console.error('Speech Recognition error:', error);
//         setResponseText('There was an issue with speech recognition.');
//         resolve(null);
//       };

//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//         if (responseText === 'Listening...') {
//           setResponseText('I couldn’t hear you, please try again.');
//         }
//       };

//       recognitionRef.current.start();
//     });
//   };

//   // Get a valid user response, retry if empty or unclear
//   const getValidUserResponse = async (promptText) => {
//     let userResponse = null;

//     while (!userResponse || userResponse.trim() === '') {
//       await new Promise((resolve) => {
//         playAIResponse(promptText, resolve);
//       });

//       userResponse = await waitForUserResponse();

//       if (!userResponse || userResponse.trim() === '') {
//         await new Promise((resolve) => {
//           playAIResponse('Please speak more clearly. Let\'s try again.', resolve);
//         });
//       }
//     }
//     return userResponse;
//   };

//   // Run the full conversation flow with scenarios
//   const runConversationFlow = async () => {
//     let currentScore = 0;

//     const scenarios = [
//       {
//         question: 'Imagine you have a deadline tomorrow, but your teammate is unavailable. How would you handle this situation?',
//         correctAnswer: 'Prioritize tasks and manage the workload while informing my manager.',
//       },
//       {
//         question: 'You are leading a team meeting, and one member consistently interrupts others. How would you address this behavior?',
//         correctAnswer: 'I would politely ask the team member to hold their thoughts until others have finished speaking.',
//       },
//       // Additional scenarios can be added here
//     ];

//     for (let i = 0; i < scenarios.length; i++) {
//       const randomGuess = randomNumbers[i];
//       const userResponse = await getValidUserResponse(scenarios[i].question);

//       // Store user's response in state
//       setUserResponses((prevResponses) => [
//         ...prevResponses,
//         {
//           question: scenarios[i].question,
//           userResponse,
//           correctAnswer: scenarios[i].correctAnswer,
//         },
//       ]);

//       // AI speaks user response
//       await new Promise((resolve) => {
//         playAIResponse(`You said: "${userResponse}"`, resolve);
//       });

//       const evaluation = {
//         score: userResponse.toLowerCase().includes(scenarios[i].correctAnswer.toLowerCase()) ? 5 : 0,
//         feedback: userResponse.toLowerCase().includes(scenarios[i].correctAnswer.toLowerCase())
//           ? 'Good job!'
//           : `Your answer needs improvement. The correct answer was: ${scenarios[i].correctAnswer}`,
//       };

//       console.log(`Scenario ${i + 1}:`, evaluation);
//       await new Promise((resolve) => {
//         playAIResponse(evaluation.feedback, resolve);
//       });

//       currentScore += evaluation.score;
//     }

//     setTotalScore(currentScore);
//     playAIResponse(`Thank you for participating! Your total score is ${currentScore}/50.`);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 text-white">
//       <h1 className="text-3xl font-bold mb-6">AI Voice Mentor</h1>
//       <p className="text-lg mb-6">{responseText}</p>
//       <p className="text-lg mb-6">Total Score: {totalScore}/50</p>
//       <button
//         onClick={startButtonClick}
//         className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//       >
//         {isFlowActive ? 'End' : 'Start'}
//       </button>
//       {isListening && <p className="mt-4 text-yellow-300">Listening...</p>}
//       {isLoading && <p className="mt-4">Loading...</p>}

//       {/* Display user responses after the conversation */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold">Your Responses</h2>
//         <ul className="mt-4">
//           {userResponses.map((response, index) => (
//             <li key={index} className="mb-4">
//               <p><strong>Question:</strong> {response.question}</p>
//               <p><strong>Your Response:</strong> {response.userResponse}</p>
//               <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect, useRef } from 'react';

// export default function Home() {
//   const [isFlowActive, setIsFlowActive] = useState(false);
//   const [responseText, setResponseText] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [totalScore, setTotalScore] = useState(0);
//   const [isListening, setIsListening] = useState(false);

//   const [userResponses, setUserResponses] = useState([]); // Store user responses
//   const [userName, setUserName] = useState(''); // Store user's name
//   const [userOccupation, setUserOccupation] = useState(''); // Store user's occupation

//   const recognitionRef = useRef(null);

//   // Store the random numbers generated for this session
//   const randomNumbers = generateUniqueRandomNumbers();

//   // Cleanup Speech Recognition instance on unmount
//   useEffect(() => {
//     recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current.lang = 'en-US';
//     recognitionRef.current.continuous = false;
//     recognitionRef.current.interimResults = true;

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, []);

//   // Start the conversation flow or stop it
//   const startButtonClick = async () => {
//     if (!isFlowActive) {
//       setIsFlowActive(true);
//       setResponseText('Starting conversation flow...');
//       setTotalScore(0); // Reset score
//       const nameOccupation = await getValidUserResponse(
//         "Hi, I'm your AI voice mentor. What's your name and occupation?"
//       );

//       // Parse the name and occupation from the response (simple split for this example)
//       const [name, occupation] = nameOccupation.split(' ').map(item => item.trim());
//       setUserName(name);
//       setUserOccupation(occupation);

//       // AI speaks the name and occupation
//       await playAIResponse(`Great to meet you, ${name} the ${occupation}. Let's start with an easy scenario.`);
//       await runConversationFlow();

//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     } else {
//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     }
//   };

//   // Generate unique random numbers for the current session
//   function generateUniqueRandomNumbers() {
//     const numbers = [];
//     while (numbers.length < 10) {
//       const randomNum = Math.floor(Math.random() * 10) + 1;
//       if (!numbers.includes(randomNum)) {
//         numbers.push(randomNum);
//       }
//     }
//     return numbers;
//   }

//   // AI Speech response
//   const playAIResponse = (text, callback) => {
//     setResponseText('AI is speaking...');
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';

//     utterance.onend = () => {
//       setResponseText('');
//       if (callback) callback();
//     };

//     speechSynthesis.speak(utterance);
//   };

//   // Wait for user response via Speech Recognition
//   const waitForUserResponse = () => {
//     return new Promise((resolve) => {
//       if (recognitionRef.current && recognitionRef.current.recognizing) {
//         recognitionRef.current.abort(); // Abort previous recognition if it is ongoing
//       }

//       recognitionRef.current.onstart = () => {
//         setIsListening(true);
//         setResponseText('Listening...');
//       };

//       recognitionRef.current.onresult = (event) => {
//         const text = event.results[event.results.length - 1][0].transcript.trim();
//         console.log('User said:', text);
//         setResponseText(`You said: "${text}"`);
//         resolve(text);
//       };

//       recognitionRef.current.onerror = (error) => {
//         console.error('Speech Recognition error:', error);
//         setResponseText('There was an issue with speech recognition.');
//         resolve(null);
//       };

//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//         if (responseText === 'Listening...') {
//           setResponseText('I couldn’t hear you, please try again.');
//         }
//       };

//       recognitionRef.current.start();
//     });
//   };

//   // Get a valid user response, retry if empty or unclear
//   const getValidUserResponse = async (promptText) => {
//     let userResponse = null;

//     while (!userResponse || userResponse.trim() === '') {
//       await new Promise((resolve) => {
//         playAIResponse(promptText, resolve);
//       });

//       userResponse = await waitForUserResponse();

//       if (!userResponse || userResponse.trim() === '') {
//         await new Promise((resolve) => {
//           playAIResponse('Please speak more clearly. Let\'s try again.', resolve);
//         });
//       }
//     }
//     return userResponse;
//   };

//   // Run the full conversation flow with scenarios
//   const runConversationFlow = async () => {
//     let currentScore = 0;

//     const scenarios = [
//       {
//         question: 'Imagine you have a deadline tomorrow, but your teammate is unavailable. How would you handle this situation?',
//         correctAnswer: 'Prioritize tasks and manage the workload while informing my manager.',
//       },
//       {
//         question: 'You are leading a team meeting, and one member consistently interrupts others. How would you address this behavior?',
//         correctAnswer: 'I would politely ask the team member to hold their thoughts until others have finished speaking.',
//       },
//       // Additional scenarios can be added here
//     ];

//     for (let i = 0; i < scenarios.length; i++) {
//       const randomGuess = randomNumbers[i];
//       const userResponse = await getValidUserResponse(scenarios[i].question);

//       // Store user's response in state
//       setUserResponses((prevResponses) => [
//         ...prevResponses,
//         {
//           question: scenarios[i].question,
//           userResponse,
//           correctAnswer: scenarios[i].correctAnswer,
//         },
//       ]);

//       // AI speaks user response
//       await new Promise((resolve) => {
//         playAIResponse(`You said: "${userResponse}"`, resolve);
//       });

//       const evaluation = {
//         score: userResponse.toLowerCase().includes(scenarios[i].correctAnswer.toLowerCase()) ? 5 : 0,
//         feedback: userResponse.toLowerCase().includes(scenarios[i].correctAnswer.toLowerCase())
//           ? 'Good job!'
//           : `Your answer needs improvement. The correct answer was: ${scenarios[i].correctAnswer}`,
//       };

//       console.log(`Scenario ${i + 1}:`, evaluation);
//       await new Promise((resolve) => {
//         playAIResponse(evaluation.feedback, resolve);
//       });

//       currentScore += evaluation.score;
//     }

//     setTotalScore(currentScore);
//     playAIResponse(`Thank you for participating! Your total score is ${currentScore}/50.`);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 text-white">
//       <h1 className="text-3xl font-bold mb-6">AI Voice Mentor</h1>
//       <p className="text-lg mb-6">{responseText}</p>
//       <p className="text-lg mb-6">Total Score: {totalScore}/50</p>
//       <button
//         onClick={startButtonClick}
//         className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//       >
//         {isFlowActive ? 'End' : 'Start'}
//       </button>
//       {isListening && <p className="mt-4 text-yellow-300">Listening...</p>}
//       {isLoading && <p className="mt-4">Loading...</p>}

//       {/* Display user responses after the conversation */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold">Your Responses</h2>
//         <ul className="mt-4">
//           {userResponses.map((response, index) => (
//             <li key={index} className="mb-4">
//               <p><strong>Question:</strong> {response.question}</p>
//               <p><strong>Your Response:</strong> {response.userResponse}</p>
//               <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from 'react';

// export default function Home() {
//   const [isFlowActive, setIsFlowActive] = useState(false);
//   const [responseText, setResponseText] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [totalScore, setTotalScore] = useState(0);
//   const [isListening, setIsListening] = useState(false);

//   const [userResponses, setUserResponses] = useState([]); // Store user responses
//   const [userName, setUserName] = useState(''); // Store user's name
//   const [userOccupation, setUserOccupation] = useState(''); // Store user's occupation

//   const recognitionRef = useRef(null);

//   // Store the random numbers generated for this session
//   const randomNumbers = generateUniqueRandomNumbers();

//   // Cleanup Speech Recognition instance on unmount
//   useEffect(() => {
//     recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current.lang = 'en-US';
//     recognitionRef.current.continuous = false;
//     recognitionRef.current.interimResults = true;

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, []);

//   // Start the conversation flow or stop it
//   const startButtonClick = async () => {
//     if (!isFlowActive) {
//       setIsFlowActive(true);
//       setResponseText('Starting conversation flow...');
//       setTotalScore(0); // Reset score
//       const nameOccupation = await getValidUserResponse(
//         "Hi, I'm your AI voice mentor. What's your name and occupation?"
//       );

//       // Parse the name and occupation from the response (simple split for this example)
//       const [name, occupation] = nameOccupation.split(' ').map(item => item.trim());
//       setUserName(name);
//       setUserOccupation(occupation);

//       // AI speaks the name and occupation
//       await playAIResponse(`Great to meet you, ${name} the ${occupation}. Let's start with an easy scenario.`);
//       await runConversationFlow();

//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     } else {
//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     }
//   };

//   // Generate unique random numbers for the current session
//   function generateUniqueRandomNumbers() {
//     const numbers = [];
//     while (numbers.length < 10) {
//       const randomNum = Math.floor(Math.random() * 10) + 1;
//       if (!numbers.includes(randomNum)) {
//         numbers.push(randomNum);
//       }
//     }
//     return numbers;
//   }

//   // AI Speech response
//   const playAIResponse = (text, callback) => {
//     setResponseText('AI is speaking...');
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';

//     utterance.onend = () => {
//       setResponseText('');
//       if (callback) callback();
//     };

//     speechSynthesis.speak(utterance);
//   };

//   // Wait for user response via Speech Recognition
//   const waitForUserResponse = () => {
//     return new Promise((resolve) => {
//       if (recognitionRef.current && recognitionRef.current.recognizing) {
//         recognitionRef.current.abort(); // Abort previous recognition if it is ongoing
//       }

//       recognitionRef.current.onstart = () => {
//         setIsListening(true);
//         setResponseText('Listening...');
//       };

//       recognitionRef.current.onresult = (event) => {
//         const text = event.results[event.results.length - 1][0].transcript.trim();
//         console.log('User said:', text);
//         setResponseText(`You said: "${text}"`);
//         resolve(text);
//       };

//       recognitionRef.current.onerror = (error) => {
//         console.error('Speech Recognition error:', error);
//         setResponseText('There was an issue with speech recognition.');
//         resolve(null);
//       };

//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//         if (responseText === 'Listening...') {
//           setResponseText('I couldn’t hear you, please try again.');
//         }
//       };

//       recognitionRef.current.start();
//     });
//   };

//   // Get a valid user response, retry if empty or unclear
//   const getValidUserResponse = async (promptText) => {
//     let userResponse = null;

//     while (!userResponse || userResponse.trim() === '') {
//       await new Promise((resolve) => {
//         playAIResponse(promptText, resolve);
//       });

//       userResponse = await waitForUserResponse();

//       if (!userResponse || userResponse.trim() === '') {
//         await new Promise((resolve) => {
//           playAIResponse('Please speak more clearly. Let\'s try again.', resolve);
//         });
//       }
//     }
//     return userResponse;
//   };

//   // Run the full conversation flow with scenarios
//   const runConversationFlow = async () => {
//     let currentScore = 0;

//     const scenarios = [
//       {
//         question: 'Imagine you have a deadline tomorrow, but your teammate is unavailable. How would you handle this situation?',
//         correctAnswer: 'Prioritize tasks and manage the workload while informing my manager.',
//       },
//       {
//         question: 'You are leading a team meeting, and one member consistently interrupts others. How would you address this behavior?',
//         correctAnswer: 'I would politely ask the team member to hold their thoughts until others have finished speaking.',
//       },
//       // Additional scenarios can be added here
//     ];

//     for (let i = 0; i < scenarios.length; i++) {
//       const randomGuess = randomNumbers[i];
//       const userResponse = await getValidUserResponse(scenarios[i].question);

//       // Store user's response in state
//       setUserResponses((prevResponses) => [
//         ...prevResponses,
//         {
//           question: scenarios[i].question,
//           userResponse,
//           correctAnswer: scenarios[i].correctAnswer,
//         },
//       ]);

//       // AI speaks user response
//       await new Promise((resolve) => {
//         playAIResponse(`You said: "${userResponse}"`, resolve);
//       });

//       const evaluation = {
//         score: userResponse.toLowerCase().includes(scenarios[i].correctAnswer.toLowerCase()) ? 5 : 0,
//         feedback: userResponse.toLowerCase().includes(scenarios[i].correctAnswer.toLowerCase())
//           ? 'Good job!'
//           : `Your answer needs improvement. The correct answer was: ${scenarios[i].correctAnswer}`,
//       };

//       console.log(`Scenario ${i + 1}:`, evaluation);
//       await new Promise((resolve) => {
//         playAIResponse(evaluation.feedback, resolve);
//       });

//       currentScore += evaluation.score;
//     }

//     setTotalScore(currentScore);
//     playAIResponse(`Thank you for participating! Your total score is ${currentScore}/50.`);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 text-white">
//       <h1 className="text-3xl font-bold mb-6">AI Voice Mentor</h1>
//       <p className="text-lg mb-6">{responseText}</p>
//       <p className="text-lg mb-6">Total Score: {totalScore}/50</p>
//       <button
//         onClick={startButtonClick}
//         className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//       >
//         {isFlowActive ? 'End' : 'Start'}
//       </button>
//       {isListening && <p className="mt-4 text-yellow-300">Listening...</p>}
//       {isLoading && <p className="mt-4">Loading...</p>}

//       {/* Display user responses after the conversation */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold">Your Responses</h2>
//         <ul className="mt-4">
//           {userResponses.map((response, index) => (
//             <li key={index} className="mb-4">
//               <p><strong>Question:</strong> {response.question}</p>
//               <p><strong>Your Response:</strong> {response.userResponse}</p>
//               <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect, useRef } from 'react';

// export default function Home() {
//   const [isFlowActive, setIsFlowActive] = useState(false);
//   const [responseText, setResponseText] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [totalScore, setTotalScore] = useState(0);
//   const [isListening, setIsListening] = useState(false);

//   const [userResponses, setUserResponses] = useState([]); // Store user responses
//   const [userName, setUserName] = useState(''); // Store user's name
//   const [userOccupation, setUserOccupation] = useState(''); // Store user's occupation

//   const recognitionRef = useRef(null);

//   // Store the random numbers generated for this session
//   const randomNumbers = generateUniqueRandomNumbers();

//   // Cleanup Speech Recognition instance on unmount
//   useEffect(() => {
//     recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current.lang = 'en-US';
//     recognitionRef.current.continuous = false;
//     recognitionRef.current.interimResults = true;

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, []);

//   // Start the conversation flow or stop it
//   const startButtonClick = async () => {
//     if (!isFlowActive) {
//       setIsFlowActive(true);
//       setResponseText('Starting conversation flow...');
//       setTotalScore(0); // Reset score
//       const nameOccupation = await getValidUserResponse(
//         "Hi, I'm your AI voice mentor. What's your full name and occupation?"
//       );

//       // Attempt to split the response into name and occupation using a heuristic.
//       // We'll assume that the occupation is the last word(s), and the rest is the name.
//       const splitResponse = nameOccupation.split(' ');
//       const occupation = splitResponse.pop(); // Occupation is the last word
//       const name = splitResponse.join(' '); // The rest is the name

//       setUserName(name);
//       setUserOccupation(occupation);

//       // AI speaks the name and occupation
//       await playAIResponse(`Great to meet you, ${name} the ${occupation}. Let's start with an easy scenario.`);
//       await runConversationFlow();

//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     } else {
//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     }
//   };

//   // Generate unique random numbers for the current session
//   function generateUniqueRandomNumbers() {
//     const numbers = [];
//     while (numbers.length < 10) {
//       const randomNum = Math.floor(Math.random() * 10) + 1;
//       if (!numbers.includes(randomNum)) {
//         numbers.push(randomNum);
//       }
//     }
//     return numbers;
//   }

//   // AI Speech response
//   const playAIResponse = (text, callback) => {
//     setResponseText('AI is speaking...');
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';

//     utterance.onend = () => {
//       setResponseText('');
//       if (callback) callback();
//     };

//     speechSynthesis.speak(utterance);
//   };

//   // Wait for user response via Speech Recognition
//   const waitForUserResponse = () => {
//     return new Promise((resolve) => {
//       if (recognitionRef.current && recognitionRef.current.recognizing) {
//         recognitionRef.current.abort(); // Abort previous recognition if it is ongoing
//       }

//       recognitionRef.current.onstart = () => {
//         setIsListening(true);
//         setResponseText('Listening...');
//       };

//       recognitionRef.current.onresult = (event) => {
//         const text = event.results[event.results.length - 1][0].transcript.trim();
//         console.log('User said:', text);
//         setResponseText(`You said: "${text}"`);
//         resolve(text);
//       };

//       recognitionRef.current.onerror = (error) => {
//         console.error('Speech Recognition error:', error);
//         setResponseText('There was an issue with speech recognition.');
//         resolve(null);
//       };

//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//         if (responseText === 'Listening...') {
//           setResponseText('I couldn’t hear you, please try again.');
//         }
//       };

//       recognitionRef.current.start();
//     });
//   };

//   // Get a valid user response, retry if empty or unclear
//   const getValidUserResponse = async (promptText) => {
//     let userResponse = null;

//     while (!userResponse || userResponse.trim() === '') {
//       await new Promise((resolve) => {
//         playAIResponse(promptText, resolve);
//       });

//       userResponse = await waitForUserResponse();

//       if (!userResponse || userResponse.trim() === '') {
//         await new Promise((resolve) => {
//           playAIResponse('Please speak more clearly. Let\'s try again.', resolve);
//         });
//       }
//     }
//     return userResponse;
//   };

//   // Run the full conversation flow with scenarios
//   const runConversationFlow = async () => {
//     let currentScore = 0;

//     const scenarios = [
//       {
//         question: 'Imagine you have a deadline tomorrow, but your teammate is unavailable. How would you handle this situation?',
//         correctAnswer: 'Prioritize tasks and manage the workload while informing my manager.',
//       },
//       {
//         question: 'You are leading a team meeting, and one member consistently interrupts others. How would you address this behavior?',
//         correctAnswer: 'I would politely ask the team member to hold their thoughts until others have finished speaking.',
//       },
//       // Additional scenarios can be added here
//     ];

//     for (let i = 0; i < scenarios.length; i++) {
//       const randomGuess = randomNumbers[i];
//       const userResponse = await getValidUserResponse(scenarios[i].question);

//       // Store user's response in state
//       setUserResponses((prevResponses) => [
//         ...prevResponses,
//         {
//           question: scenarios[i].question,
//           userResponse,
//           correctAnswer: scenarios[i].correctAnswer,
//         },
//       ]);

//       // AI speaks user response
//       await new Promise((resolve) => {
//         playAIResponse(`You said: "${userResponse}"`, resolve);
//       });

//       const evaluation = {
//         score: userResponse.toLowerCase().includes(scenarios[i].correctAnswer.toLowerCase()) ? 5 : 0,
//         feedback: userResponse.toLowerCase().includes(scenarios[i].correctAnswer.toLowerCase())
//           ? 'Good job!'
//           : `Your answer needs improvement. The correct answer was: ${scenarios[i].correctAnswer}`,
//       };

//       console.log(`Scenario ${i + 1}:`, evaluation);
//       await new Promise((resolve) => {
//         playAIResponse(evaluation.feedback, resolve);
//       });

//       currentScore += evaluation.score;
//     }

//     setTotalScore(currentScore);
//     playAIResponse(`Thank you for participating! Your total score is ${currentScore}/50.`);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 text-white">
//       <h1 className="text-3xl font-bold mb-6">AI Voice Mentor</h1>
//       <p className="text-lg mb-6">{responseText}</p>
//       <p className="text-lg mb-6">Total Score: {totalScore}/50</p>
//       <button
//         onClick={startButtonClick}
//         className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//       >
//         {isFlowActive ? 'End' : 'Start'}
//       </button>
//       {isListening && <p className="mt-4 text-yellow-300">Listening...</p>}
//       {isLoading && <p className="mt-4">Loading...</p>}

//       {/* Display user responses after the conversation */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold">Your Responses</h2>
//         <ul className="mt-4">
//           {userResponses.map((response, index) => (
//             <li key={index} className="mb-4">
//               <p><strong>Question:</strong> {response.question}</p>
//               <p><strong>Your Response:</strong> {response.userResponse}</p>
//               <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from 'react';

// export default function Home() {
//   const [isFlowActive, setIsFlowActive] = useState(false);
//   const [responseText, setResponseText] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [totalScore, setTotalScore] = useState(0);
//   const [isListening, setIsListening] = useState(false);

//   const [userResponses, setUserResponses] = useState([]); // Store user responses
//   const [userName, setUserName] = useState(''); // Store user's name
//   const [userOccupation, setUserOccupation] = useState(''); // Store user's occupation

//   const recognitionRef = useRef(null);

//   // Store the random numbers generated for this session
//   const randomNumbers = generateUniqueRandomNumbers();

//   // Cleanup Speech Recognition instance on unmount
//   useEffect(() => {
//     recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current.lang = 'en-US';
//     recognitionRef.current.continuous = false;
//     recognitionRef.current.interimResults = true;

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, []);

//   // Start the conversation flow or stop it
//   const startButtonClick = async () => {
//     if (!isFlowActive) {
//       setIsFlowActive(true);
//       setResponseText('Starting conversation flow...');
//       setTotalScore(0); // Reset score
//       const nameOccupation = await getValidUserResponse(
//         "Hi, I'm your AI voice mentor. What's your full name and occupation?"
//       );

//       // Here, we don't split by spaces, but rather expect the user to answer in full sentences
//       const [name, occupation] = extractNameAndOccupation(nameOccupation);

//       setUserName(name);
//       setUserOccupation(occupation);

//       // AI speaks the name and occupation
//       await playAIResponse(`Great to meet you, ${name} . Let's start with an easy scenario.`);
//       await runConversationFlow();

//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     } else {
//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     }
//   };

//   // Generate unique random numbers for the current session
//   function generateUniqueRandomNumbers() {
//     const numbers = [];
//     while (numbers.length < 10) {
//       const randomNum = Math.floor(Math.random() * 10) + 1;
//       if (!numbers.includes(randomNum)) {
//         numbers.push(randomNum);
//       }
//     }
//     return numbers;
//   }

//   // AI Speech response
//   const playAIResponse = (text, callback) => {
//     setResponseText('AI is speaking...');
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';

//     utterance.onend = () => {
//       setResponseText('');
//       if (callback) callback();
//     };

//     speechSynthesis.speak(utterance);
//   };

//   // Wait for user response via Speech Recognition
//   const waitForUserResponse = () => {
//     return new Promise((resolve) => {
//       if (recognitionRef.current && recognitionRef.current.recognizing) {
//         recognitionRef.current.abort(); // Abort previous recognition if it is ongoing
//       }

//       recognitionRef.current.onstart = () => {
//         setIsListening(true);
//         setResponseText('Listening...');
//       };

//       recognitionRef.current.onresult = (event) => {
//         const text = event.results[event.results.length - 1][0].transcript.trim();
//         console.log('User said:', text);
//         setResponseText(`You said: "${text}"`);
//         resolve(text);
//       };

//       recognitionRef.current.onerror = (error) => {
//         console.error('Speech Recognition error:', error);
//         setResponseText('There was an issue with speech recognition.');
//         resolve(null);
//       };

//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//         if (responseText === 'Listening...') {
//           setResponseText('I couldn’t hear you, please try again.');
//         }
//       };

//       recognitionRef.current.start();
//     });
//   };

//   // Get a valid user response, retry if empty or unclear
//   const getValidUserResponse = async (promptText) => {
//     let userResponse = null;
  
//     while (!userResponse || userResponse.trim() === '') {
//       await new Promise((resolve) => {
//         playAIResponse(promptText + " Please answer in a full sentence.", resolve);
//       });
  
//       userResponse = await waitForUserResponse();
  
//       if (!userResponse || userResponse.trim() === '') {
//         await new Promise((resolve) => {
//           playAIResponse('Please speak more clearly in a full sentence. Let\'s try again.', resolve);
//         });
//       }
//     }
//     return userResponse;
//   };
  

//   // Function to extract name and occupation from the user response
//   const extractNameAndOccupation = (response) => {
//     const lowerCaseResponse = response.toLowerCase();
//     const occupationKeywords = ['engineer', 'developer', 'manager', 'designer', 'teacher', 'doctor']; // A few examples

//     let occupation = '';
//     let name = '';

//     // Attempt to find an occupation keyword in the response
//     for (let keyword of occupationKeywords) {
//       if (lowerCaseResponse.includes(keyword)) {
//         occupation = response.split(keyword)[1].trim(); // Occupation is after the keyword
//         name = response.split(keyword)[0].trim(); // Name is before the keyword
//         break;
//       }
//     }

//     if (!occupation || !name) {
//       occupation = 'Unknown';
//       name = response; // If no occupation keyword found, treat the whole sentence as name
//     }

//     return [name, occupation];
//   };

//   // Run the full conversation flow with scenarios
//   const runConversationFlow = async () => {
//     let currentScore = 0;

//     const scenarios = [
//       {
//         question: 'Imagine you have a deadline tomorrow, but your teammate is unavailable. How would you handle this situation?',
//         correctAnswer: 'Prioritize tasks and manage the workload while informing my manager.',
//       },
//       {
//         question: 'You are leading a team meeting, and one member consistently interrupts others. How would you address this behavior?',
//         correctAnswer: 'I would politely ask the team member to hold their thoughts until others have finished speaking.',
//       },
//       // Additional scenarios can be added here
//     ];

//     for (let i = 0; i < scenarios.length; i++) {
//       const randomGuess = randomNumbers[i];
//       const userResponse = await getValidUserResponse(scenarios[i].question);

//       // Store user's response in state
//       setUserResponses((prevResponses) => [
//         ...prevResponses,
//         {
//           question: scenarios[i].question,
//           userResponse,
//           correctAnswer: scenarios[i].correctAnswer,
//         },
//       ]);

//       // AI speaks user response
//       await new Promise((resolve) => {
//         playAIResponse(`You said: "${userResponse}"`, resolve);
//       });

//       // Evaluate user response
//       const evaluation = evaluateUserResponse(userResponse, scenarios[i].correctAnswer);

//       console.log(`Scenario ${i + 1}:`, evaluation);
//       await new Promise((resolve) => {
//         playAIResponse(evaluation.feedback, resolve);
//       });

//       currentScore += evaluation.score;
//     }

//     setTotalScore(currentScore);
//     playAIResponse(`Thank you for participating! Your total score is ${currentScore}/50.`);
//   };

//   // Evaluate user response with full sentence
// //   const evaluateUserResponse = (userResponse, correctAnswer) => {
// //     // Basic evaluation: check if user's response contains key phrases or context from the correct answer
// //     const isCorrect = userResponse.toLowerCase().includes(correctAnswer.toLowerCase());

// //     return {
// //       score: isCorrect ? 5 : 0,
// //       feedback: isCorrect
// //         ? 'Good job!'
// //         : `Your answer needs improvement. The correct answer was: ${correctAnswer}`,
// //     };
// //   };

// // Evaluate user response with full sentence
// const evaluateUserResponse = (userResponse, correctAnswer) => {
//     // Normalize both user and correct answers to lowercase
//     const userNormalized = userResponse.toLowerCase().trim();
//     const correctNormalized = correctAnswer.toLowerCase().trim();
  
//     // Basic check: if user response fully matches or closely matches the correct answer
//     const isCorrect = userNormalized === correctNormalized || userNormalized.includes(correctNormalized);
  
//     return {
//       score: isCorrect ? 5 : 0, // 5 points if correct
//       feedback: isCorrect
//         ? 'Good job! Your response is accurate.'
//         : `Your answer needs improvement.your and is ${userResponse} The correct answer was: "${correctAnswer}"`,
//     };
//   };
  

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 text-white">
//       <h1 className="text-3xl font-bold mb-6">AI Voice Mentor</h1>
//       <p className="text-lg mb-6">{responseText}</p>
//       <p className="text-lg mb-6">Total Score: {totalScore}/50</p>
//       <button
//         onClick={startButtonClick}
//         className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//       >
//         {isFlowActive ? 'End' : 'Start'}
//       </button>
//       {isListening && <p className="mt-4 text-yellow-300">Listening...</p>}
//       {isLoading && <p className="mt-4">Loading...</p>}

//       {/* Display user responses after the conversation */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold">Your Responses</h2>
//         <ul className="mt-4">
//           {userResponses.map((response, index) => (
//             <li key={index} className="mb-4">
//               <p><strong>Question:</strong> {response.question}</p>
//               <p><strong>Your Response:</strong> {response.userResponse}</p>
//               <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from 'react';

// export default function Home() {
//   const [isFlowActive, setIsFlowActive] = useState(false);
//   const [responseText, setResponseText] = useState('');
//   const [totalScore, setTotalScore] = useState(0);
//   const [isListening, setIsListening] = useState(false);
//   const [userResponses, setUserResponses] = useState([]); // Store user responses
  
//   const recognitionRef = useRef(null);
//   const randomNumbers = generateUniqueRandomNumbers(); // For session-based randomness

//   // Initialize speech recognition
//   useEffect(() => {
//     recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current.lang = 'en-US';
//     recognitionRef.current.continuous = false;
//     recognitionRef.current.interimResults = true;

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, []);

//   // Start the conversation flow
//   const startButtonClick = async () => {
//     if (!isFlowActive) {
//       setIsFlowActive(true);
//       setResponseText('Starting conversation flow...');
//       setTotalScore(0); // Reset score
//       await runConversationFlow();
//     } else {
//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     }
//   };

//   // Generate random numbers for this session
//   function generateUniqueRandomNumbers() {
//     const numbers = [];
//     while (numbers.length < 10) {
//       const randomNum = Math.floor(Math.random() * 10) + 1;
//       if (!numbers.includes(randomNum)) {
//         numbers.push(randomNum);
//       }
//     }
//     return numbers;
//   }

//   // Make the AI speak a message
//   const playAIResponse = (text, callback) => {
//     setResponseText('AI is speaking...');
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';
    
//     utterance.onend = () => {
//       setResponseText('');
//       if (callback) callback();
//     };
    
//     speechSynthesis.speak(utterance);
//   };

//   // Listen to the user's response
//   const waitForUserResponse = () => {
//     return new Promise((resolve) => {
//       if (recognitionRef.current && recognitionRef.current.recognizing) {
//         recognitionRef.current.abort(); // Abort previous recognition if it is ongoing
//       }

//       recognitionRef.current.onstart = () => {
//         setIsListening(true);
//         setResponseText('Listening...');
//       };

//       recognitionRef.current.onresult = (event) => {
//         const text = event.results[event.results.length - 1][0].transcript.trim();
//         console.log('User said:', text);
//         setResponseText(`You said: "${text}"`);
//         resolve(text);
//       };

//       recognitionRef.current.onerror = (error) => {
//         console.error('Speech Recognition error:', error);
//         setResponseText('There was an issue with speech recognition.');
//         resolve(null);
//       };

//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//         if (responseText === 'Listening...') {
//           setResponseText('I couldn’t hear you, please try again.');
//         }
//       };

//       recognitionRef.current.start();
//     });
//   };

//   // Main conversation flow
//   const runConversationFlow = async () => {
//     let currentScore = 0;

//     const scenarios = [
//       {
//         question: 'Imagine you have a deadline tomorrow, but your teammate is unavailable. How would you handle this situation?',
//         correctAnswer: 'Prioritize tasks and manage the workload while informing my manager.',
//       },
//       {
//         question: 'You are leading a team meeting, and one member consistently interrupts others. How would you address this behavior?',
//         correctAnswer: 'I would politely ask the team member to hold their thoughts until others have finished speaking.',
//       },
//     ];

//     for (let i = 0; i < scenarios.length; i++) {
//       const userResponse = await getValidUserResponse(scenarios[i].question);

//       // Store the response
//       setUserResponses((prevResponses) => [
//         ...prevResponses,
//         {
//           question: scenarios[i].question,
//           userResponse,
//           correctAnswer: scenarios[i].correctAnswer,
//         },
//       ]);

//       // AI speaks the user response back to them
//       await new Promise((resolve) => {
//         playAIResponse(`You said: "${userResponse}"`, resolve);
//       });

//       // Evaluate the user response
//       const evaluation = evaluateUserResponse(userResponse, scenarios[i].correctAnswer);

//       console.log(`Scenario ${i + 1}:`, evaluation);
//       await new Promise((resolve) => {
//         playAIResponse(evaluation.feedback, resolve);
//       });

//       currentScore += evaluation.score;
//     }

//     setTotalScore(currentScore);
//     playAIResponse(`Thank you for participating! Your total score is ${currentScore}/50.`);
//   };

//   // Evaluate the user's response with more flexible matching
//   const evaluateUserResponse = (userResponse, correctAnswer) => {
//     const userNormalized = userResponse.toLowerCase().trim();
//     const correctNormalized = correctAnswer.toLowerCase().trim();

//     // Split both responses into words to compare individual concepts
//     const userWords = userNormalized.split(' ');
//     const correctWords = correctNormalized.split(' ');

//     // Check if any word in the user's response matches a word in the correct answer
//     const isCorrect = userWords.some((word) => correctWords.includes(word));

//     return {
//       score: isCorrect ? 5 : 0, // 5 points if there's at least one match
//       feedback: isCorrect
//         ? 'Good job! Your response is accurate.'
//         : `Your answer needs improvement. The correct answer was: "${correctAnswer}"`,
//     };
//   };

//   // Get valid user response
//   const getValidUserResponse = async (promptText) => {
//     let userResponse = null;

//     while (!userResponse || userResponse.trim() === '') {
//       await new Promise((resolve) => {
//         playAIResponse(promptText + " Please answer in a full sentence.", resolve);
//       });

//       userResponse = await waitForUserResponse();

//       if (!userResponse || userResponse.trim() === '') {
//         await new Promise((resolve) => {
//           playAIResponse('Please speak more clearly in a full sentence. Let\'s try again.', resolve);
//         });
//       }
//     }
//     return userResponse;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 text-white">
//       <h1 className="text-3xl font-bold mb-6">AI Voice Mentor</h1>
//       <p className="text-lg mb-6">{responseText}</p>
//       <p className="text-lg mb-6">Total Score: {totalScore}/50</p>
//       <button
//         onClick={startButtonClick}
//         className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//       >
//         {isFlowActive ? 'End' : 'Start'}
//       </button>
//       {isListening && <p className="mt-4 text-yellow-300">Listening...</p>}

//       {/* Display user responses after the conversation */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold">Your Responses</h2>
//         <ul className="mt-4">
//           {userResponses.map((response, index) => (
//             <li key={index} className="mb-4">
//               <p><strong>Question:</strong> {response.question}</p>
//               <p><strong>Your Response:</strong> {response.userResponse}</p>
//               <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from 'react';

// export default function Home() {
//   const [isFlowActive, setIsFlowActive] = useState(false);
//   const [responseText, setResponseText] = useState('');
//   const [totalScore, setTotalScore] = useState(0);
//   const [isListening, setIsListening] = useState(false);
//   const [userResponses, setUserResponses] = useState([]); // Store user responses
  
//   const recognitionRef = useRef(null);
//   const randomNumbers = generateUniqueRandomNumbers(); // For session-based randomness

//   // Initialize speech recognition
//   useEffect(() => {
//     recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current.lang = 'en-US';
//     recognitionRef.current.continuous = false;  // Ensure recognition stops after complete response
//     recognitionRef.current.interimResults = false; // Don't give partial results
//     recognitionRef.current.maxAlternatives = 1; // Limit alternatives to avoid confusion

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, []);

//   // Start the conversation flow
//   const startButtonClick = async () => {
//     if (!isFlowActive) {
//       setIsFlowActive(true);
//       setResponseText('Starting conversation flow...');
//       setTotalScore(0); // Reset score
//       await introduceAI();
//     } else {
//       setIsFlowActive(false);
//       setResponseText('Session ended. Click "Start" to begin again.');
//     }
//   };

//   // Generate random numbers for this session
//   function generateUniqueRandomNumbers() {
//     const numbers = [];
//     while (numbers.length < 10) {
//       const randomNum = Math.floor(Math.random() * 10) + 1;
//       if (!numbers.includes(randomNum)) {
//         numbers.push(randomNum);
//       }
//     }
//     return numbers;
//   }

//   // Make the AI speak a message
//   const playAIResponse = (text, callback) => {
//     setResponseText('AI is speaking...');
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';
    
//     utterance.onend = () => {
//       setResponseText('');
//       if (callback) callback();
//     };
    
//     speechSynthesis.speak(utterance);
//   };

//   // Listen to the user's response
//   const waitForUserResponse = () => {
//     return new Promise((resolve) => {
//       if (recognitionRef.current && recognitionRef.current.recognizing) {
//         recognitionRef.current.abort(); // Abort previous recognition if it is ongoing
//       }

//       recognitionRef.current.onstart = () => {
//         setIsListening(true);
//         setResponseText('Listening...');
//       };

//       recognitionRef.current.onresult = (event) => {
//         const text = event.results[event.results.length - 1][0].transcript.trim();
//         console.log('User said:', text);
//         setResponseText(`You said: "${text}"`);
//         resolve(text);
//       };

//       recognitionRef.current.onerror = (error) => {
//         console.error('Speech Recognition error:', error);
//         setResponseText('There was an issue with speech recognition.');
//         resolve(null);
//       };

//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//         if (responseText === 'Listening...') {
//           setResponseText('I couldn’t hear you, please try again.');
//         }
//       };

//       recognitionRef.current.start();
//     });
//   };

//   // AI Introduction
//   const introduceAI = async () => {
//     await playAIResponse('Hello! I am your AI voice mentor. Let\'s have a conversation. Please answer my questions by speaking clearly.', async () => {
//       await runConversationFlow();
//     });
//   };

//   // Main conversation flow
//   const runConversationFlow = async () => {
//     let currentScore = 0;

//     const scenarios = [
//       {
//         question: 'Imagine you have a deadline tomorrow, but your teammate is unavailable. How would you handle this situation?',
//         correctAnswer: 'Prioritize tasks and manage the workload while informing my manager.',
//       },
//       {
//         question: 'You are leading a team meeting, and one member consistently interrupts others. How would you address this behavior?',
//         correctAnswer: 'I would politely ask the team member to hold their thoughts until others have finished speaking.',
//       },
//     ];

//     for (let i = 0; i < scenarios.length; i++) {
//       const userResponse = await getValidUserResponse(scenarios[i].question);

//       // Store the response
//       setUserResponses((prevResponses) => [
//         ...prevResponses,
//         {
//           question: scenarios[i].question,
//           userResponse,
//           correctAnswer: scenarios[i].correctAnswer,
//         },
//       ]);

//       // AI speaks the user response back to them
//       await new Promise((resolve) => {
//         playAIResponse(`You said: "${userResponse}". Now, let me tell you the correct answer.`, resolve);
//       });

//       // AI provides the correct answer
//       await new Promise((resolve) => {
//         playAIResponse(`The correct answer is: "${scenarios[i].correctAnswer}".`, resolve);
//       });

//       // Evaluate the user response
//       const evaluation = evaluateUserResponse(userResponse, scenarios[i].correctAnswer);

//       console.log(`Scenario ${i + 1}:`, evaluation);
//       await new Promise((resolve) => {
//         playAIResponse(evaluation.feedback, resolve);
//       });

//       currentScore += evaluation.score;
//     }

//     setTotalScore(currentScore);
//     playAIResponse(`Thank you for participating! Your total score is ${currentScore}/50.`);
//   };

//   // Evaluate the user's response with more flexible matching
//   const evaluateUserResponse = (userResponse, correctAnswer) => {
//     const userNormalized = userResponse.toLowerCase().trim();
//     const correctNormalized = correctAnswer.toLowerCase().trim();

//     // Split both responses into words to compare individual concepts
//     const userWords = userNormalized.split(' ');
//     const correctWords = correctNormalized.split(' ');

//     // Check if any word in the user's response matches a word in the correct answer
//     const isCorrect = userWords.some((word) => correctWords.includes(word));

//     return {
//       score: isCorrect ? 5 : 0, // 5 points if there's at least one match
//       feedback: isCorrect
//         ? 'Good job! Your response is accurate.'
//         : `Your answer needs improvement. The correct answer was: "${correctAnswer}"`,
//     };
//   };

//   // Get valid user response
//   const getValidUserResponse = async (promptText) => {
//     let userResponse = null;

//     while (!userResponse || userResponse.trim() === '') {
//       await new Promise((resolve) => {
//         playAIResponse(promptText + " Please answer in a full sentence.", resolve);
//       });

//       userResponse = await waitForUserResponse();

//       if (!userResponse || userResponse.trim() === '') {
//         await new Promise((resolve) => {
//           playAIResponse('Please speak more clearly in a full sentence. Let\'s try again.', resolve);
//         });
//       }
//     }
//     return userResponse;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 text-white">
//       <h1 className="text-3xl font-bold mb-6">AI Voice Mentor</h1>
//       <p className="text-lg mb-6">{responseText}</p>
//       <p className="text-lg mb-6">Total Score: {totalScore}/50</p>
//       <button
//         onClick={startButtonClick}
//         className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//       >
//         {isFlowActive ? 'End' : 'Start'}
//       </button>
//       {isListening && <p className="mt-4 text-yellow-300">Listening...</p>}

//       {/* Display user responses after the conversation */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold">Your Responses</h2>
//         <ul className="mt-4">
//           {userResponses.map((response, index) => (
//             <li key={index} className="mb-4">
//               <p><strong>Question:</strong> {response.question}</p>
//               <p><strong>Your Response:</strong> {response.userResponse}</p>
//               <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isFlowActive, setIsFlowActive] = useState(false);
  const [responseText, setResponseText] = useState('');
  const [totalScore, setTotalScore] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [userResponses, setUserResponses] = useState([]); // Store user responses
  const [userName, setUserName] = useState(''); // Store user's name
  
  const recognitionRef = useRef(null);
  const randomNumbers = generateUniqueRandomNumbers(); // For session-based randomness

  // Initialize speech recognition
  useEffect(() => {
    recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionRef.current.lang = 'en-US';
    recognitionRef.current.continuous = false;  // Ensure recognition stops after complete response
    recognitionRef.current.interimResults = false; // Don't give partial results
    recognitionRef.current.maxAlternatives = 1; // Limit alternatives to avoid confusion

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  // Start the conversation flow
  const startButtonClick = async () => {
    if (!isFlowActive) {
      setIsFlowActive(true);
      setResponseText('Starting conversation flow...');
      setTotalScore(0); // Reset score
      await introduceAI();
    } else {
      setIsFlowActive(false);
      setResponseText('Session ended. Click "Start" to begin again.');
    }
  };

  // Generate random numbers for this session
  function generateUniqueRandomNumbers() {
    const numbers = [];
    while (numbers.length < 10) {
      const randomNum = Math.floor(Math.random() * 10) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  }

  // Make the AI speak a message
  const playAIResponse = (text, callback) => {
    setResponseText('AI is speaking...');
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    
    utterance.onend = () => {
      setResponseText('');
      if (callback) callback();
    };
    
    speechSynthesis.speak(utterance);
  };

  // Listen to the user's response
  const waitForUserResponse = () => {
    return new Promise((resolve) => {
      if (recognitionRef.current && recognitionRef.current.recognizing) {
        recognitionRef.current.abort(); // Abort previous recognition if it is ongoing
      }

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setResponseText('Listening...');
      };

      recognitionRef.current.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript.trim();
        console.log('User said:', text);
        setResponseText(`You said: "${text}"`);
        resolve(text);
      };

      recognitionRef.current.onerror = (error) => {
        console.error('Speech Recognition error:', error);
        setResponseText('There was an issue with speech recognition.');
        resolve(null);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        if (responseText === 'Listening...') {
          setResponseText('I couldn’t hear you, please try again.');
        }
      };

      recognitionRef.current.start();
    });
  };

  // AI Introduction with asking for the user's name
  const introduceAI = async () => {
    await playAIResponse('Hello! I am your AI voice mentor. May I know your name?', async () => {
      const name = await getValidUserResponse('Please tell me your name.');
      setUserName(name); // Save user's name
      await playAIResponse(`Nice to meet you, ${name}! Let’s have a conversation. Please answer my questions by speaking clearly.`, async () => {
        await runConversationFlow();
      });
    });
  };

  // Main conversation flow
  const runConversationFlow = async () => {
    let currentScore = 0;

    const scenarios = [
      {
        question: 'Imagine you have a deadline tomorrow, but your teammate is unavailable. How would you handle this situation?',
        correctAnswer: 'Prioritize tasks and manage the workload while informing my manager.',
      },
      {
        question: 'You are leading a team meeting, and one member consistently interrupts others. How would you address this behavior?',
        correctAnswer: 'I would politely ask the team member to hold their thoughts until others have finished speaking.',
      },
    ];

    for (let i = 0; i < scenarios.length; i++) {
      const userResponse = await getValidUserResponse(scenarios[i].question);

      // Store the response
      setUserResponses((prevResponses) => [
        ...prevResponses,
        {
          question: scenarios[i].question,
          userResponse,
          correctAnswer: scenarios[i].correctAnswer,
        },
      ]);

      // AI speaks the user response back to them
      await new Promise((resolve) => {
        playAIResponse(`You said: "${userResponse}". Now, let me tell you the correct answer.`, resolve);
      });

      // AI provides the correct answer
      await new Promise((resolve) => {
        playAIResponse(`The correct answer is: "${scenarios[i].correctAnswer}".`, resolve);
      });

      // Evaluate the user response
      const evaluation = evaluateUserResponse(userResponse, scenarios[i].correctAnswer);

      console.log(`Scenario ${i + 1}:`, evaluation);
      await new Promise((resolve) => {
        playAIResponse(evaluation.feedback, resolve);
      });

      currentScore += evaluation.score;
    }

    setTotalScore(currentScore);
    playAIResponse(`Thank you for participating, ${userName}! Your total score is ${currentScore}/50.`);
  };

  // Evaluate the user's response with more flexible matching
  const evaluateUserResponse = (userResponse, correctAnswer) => {
    const userNormalized = userResponse.toLowerCase().trim();
    const correctNormalized = correctAnswer.toLowerCase().trim();

    // Split both responses into words to compare individual concepts
    const userWords = userNormalized.split(' ');
    const correctWords = correctNormalized.split(' ');

    // Check if any word in the user's response matches a word in the correct answer
    const isCorrect = userWords.some((word) => correctWords.includes(word));

    return {
      score: isCorrect ? 5 : 0, // 5 points if there's at least one match
      feedback: isCorrect
        ? 'Good job! Your response is accurate.'
        : `Your answer needs improvement. The correct answer was: "${correctAnswer}"`,
    };
  };

  // Get valid user response
  const getValidUserResponse = async (promptText) => {
    let userResponse = null;

    while (!userResponse || userResponse.trim() === '') {
      await new Promise((resolve) => {
        playAIResponse(promptText + " Please answer in a full sentence.", resolve);
      });

      userResponse = await waitForUserResponse();

      if (!userResponse || userResponse.trim() === '') {
        await new Promise((resolve) => {
          playAIResponse('Please speak more clearly in a full sentence. Let\'s try again.', resolve);
        });
      }
    }
    return userResponse;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 text-white">
      <h1 className="text-3xl font-bold mb-6">AI Voice Mentor</h1>
      <p className="text-lg mb-6">{responseText}</p>
      <p className="text-lg mb-6">Total Score: {totalScore}/50</p>
      <button
        onClick={startButtonClick}
        className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        {isFlowActive ? 'End' : 'Start'}
      </button>
      {isListening && <p className="mt-4 text-yellow-300">Listening...</p>}

      {/* Display user responses after the conversation */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Your Responses</h2>
        <ul className="mt-4">
          {userResponses.map((response, index) => (
            <li key={index} className="mb-4">
              <p><strong>Question:</strong> {response.question}</p>
              <p><strong>Your Response:</strong> {response.userResponse}</p>
              <p><strong>Correct Answer:</strong> {response.correctAnswer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
