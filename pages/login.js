// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/router';

// function Login() {

//     const router = useRouter()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
    
//     useEffect(()=>{
//         if(localStorage.getItem('token')){
//             router.push('/')
//         }
        
//     },[])

//     const handleChange = (e) => {
//         if (e.target.name == 'email') {
//             setEmail(e.target.value)
//         }
//         else if (e.target.name == 'password') {
//             setPassword(e.target.value)
//         }
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const data = { email, password }
//         let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
//             method: 'Post',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         let response = await res.json()
//         console.log(response)
//         setEmail('')
//         setPassword('')
//         if (response.success) {
//             localStorage.setItem('token', response.token)
//             toast.success('You are successfully logged in!', {
//                 position: "top-left",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//             setTimeout(() => {
//                 router.push(process.env.NEXT_PUBLIC_HOST)

//             }, 1000);
//         } else {
//             toast.error(response.error, {
//                 position: "middle-left",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
                
//             });

//         }
//     }
//   return (
//     <>
//     <ToastContainer
//         position="middle-left"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//         toastContainerClassName="!top-1/2 !left-4 !translate-y-[-50%] z-[20] fixed"
//     />
//     <section className="">
// 	<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
// 		<div className="w-full bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
// 			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
// 				<h1 className="text-xl font-bold leading-tight tracking-tight text-slate-100 md:text-2xl ">
// 					Sign in to your account
// 				</h1>
// 				<form className="space-y-4 md:space-y-6"  onSubmit={handleSubmit}>
// 					<div>
// 						<label for="email" className="block mb-2 text-sm font-medium text-slate-100">
// 							Your email
// 						</label>
// 						<input value={email} onChange={handleChange}  type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="name@company.com" />
// 					</div>
// 					<div>
// 						<label for="password" className="block mb-2 text-sm font-medium text-slate-100">
// 							Password
// 						</label>
// 						<input value={password} onChange={handleChange}  type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" />
// 					</div>
// 					<div className="flex items-center justify-between">
// 						<div className="flex items-start">
// 							<div className="flex items-center h-5">
// 								<input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
// 							</div>
// 							<div className="ml-3 text-sm">
// 								<label for="remember" className="text-slate-100">
// 									Remember me
// 								</label>
// 							</div>
// 						</div>
// 						<Link href="#" className="text-sm font-medium text-blue-600 hover:underline">
// 							Forgot password?
// 						</Link>
// 					</div>
// 					<button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">
// 						Sign in
// 					</button>
// 					<p className="text-sm font-light text-slate-100">
// 						Don’t have an account yet?
// 						<Link href="/signup" className="font-medium text-blue-600 hover:underline">
// 							Sign up
// 						</Link>
// 					</p>
// 				</form>
// 			</div>
// 		</div>
// 	</div>
// </section></>
//   )
// }

// export default Login


// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/router';

// function Login() {

//     const router = useRouter()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
    
//     useEffect(() => {
//         if(localStorage.getItem('token')){
//             router.push('/')
//         }
//     }, [])

//     const handleChange = (e) => {
//         if (e.target.name == 'email') {
//             setEmail(e.target.value)
//         }
//         else if (e.target.name == 'password') {
//             setPassword(e.target.value)
//         }
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const data = { email, password }
//         let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         let response = await res.json()
//         console.log(response)
//         setEmail('')
//         setPassword('')

//         if (response.success) {
//             // Store token and mobileNo in localStorage
//             localStorage.setItem('token', response.token)
//             localStorage.setItem('mobileNo', response.mobileNo) // Assuming response contains user.mobileNo

//             toast.success('You are successfully logged in!', {
//                 position: "top-left",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });

//             setTimeout(() => {
//                 router.push('/'); // Redirect to the homepage
//             }, 1000);
//         } else {
//             toast.error(response.error, {
//                 position: "middle-left",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//         }
//     }

//     return (
//         <>
//         <ToastContainer
//             position="middle-left"
//             autoClose={3000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//             toastContainerClassName="!top-1/2 !left-4 !translate-y-[-50%] z-[20] fixed"
//         />
//         <section>
//             <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
//                 <div className="w-full bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
//                     <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                         <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-100 md:text-2xl">
//                             Sign in to your account
//                         </h1>
//                         <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-100">
//                                     Your email
//                                 </label>
//                                 <input 
//                                     value={email} 
//                                     onChange={handleChange} 
//                                     type="email" 
//                                     name="email" 
//                                     id="email" 
//                                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
//                                     placeholder="name@company.com" 
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-100">
//                                     Password
//                                 </label>
//                                 <input 
//                                     value={password} 
//                                     onChange={handleChange} 
//                                     type="password" 
//                                     name="password" 
//                                     id="password" 
//                                     placeholder="••••••••" 
//                                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
//                                 />
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-start">
//                                     <div className="flex items-center h-5">
//                                         <input 
//                                             id="remember" 
//                                             aria-describedby="remember" 
//                                             type="checkbox" 
//                                             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" 
//                                         />
//                                     </div>
//                                     <div className="ml-3 text-sm">
//                                         <label htmlFor="remember" className="text-slate-100">
//                                             Remember me
//                                         </label>
//                                     </div>
//                                 </div>
//                                 <Link href="#" className="text-sm font-medium text-blue-600 hover:underline">
//                                     Forgot password?
//                                 </Link>
//                             </div>
//                             <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
//                                 Sign in
//                             </button>
//                             <p className="text-sm font-light text-slate-100">
//                                 Don’t have an account yet?
//                                 <Link href="/signup" className="font-medium text-blue-600 hover:underline">
//                                     Sign up
//                                 </Link>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </>
//     )
// }

// export default Login;


import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // To track loading state
    const [error, setError] = useState(''); // To handle errors

    useEffect(() => {
        // Redirect if a token exists in localStorage
        if (localStorage.getItem('token')) {
            router.push('/');
        }
    }, [router]);

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Clear any previous error

        const data = { email, password };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const response = await res.json();
            // console.log("that is the response",response.user);

            setEmail('');
            setPassword('');

            if (response.success) {
                // Store token and mobileNo in localStorage
                localStorage.setItem('token', response.token);

    localStorage.setItem('user', JSON.stringify(response.user));
                // localStorage.setItem('mobileNo', response.mobileNo);

                toast.success('You are successfully logged in!', {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setTimeout(() => {
                    router.push({
                      pathname: '/', 
                      query: {user : response.user }, 
                    });
                  }, 1000);
            } else {
                setError(response.error); // Set error message
                toast.error(response.error, {
                    position: "middle-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred, please try again.');
            toast.error('An error occurred, please try again.', {
                position: "middle-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } finally {
            setLoading(false); // Stop loading after submission
        }
    };

    return (
        <>
            <ToastContainer
                position="middle-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                toastContainerClassName="!top-1/2 !left-4 !translate-y-[-50%] z-[20] fixed"
            />
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <div className="w-full bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-100 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-100">
                                        Your email
                                    </label>
                                    <input 
                                        value={email} 
                                        onChange={handleChange} 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
                                        placeholder="name@company.com" 
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-100">
                                        Password
                                    </label>
                                    <input 
                                        value={password} 
                                        onChange={handleChange} 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="••••••••" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
                                        required
                                    />
                                </div>
                                {error && <p className="text-sm text-red-500">{error}</p>} {/* Display error message */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input 
                                                id="remember" 
                                                aria-describedby="remember" 
                                                type="checkbox" 
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" 
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-slate-100">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <Link href="#" className="text-sm font-medium text-blue-600 hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                    disabled={loading} // Disable button while loading
                                >
                                    {loading ? 'Logging in...' : 'Sign in'}
                                </button>
                                <p className="text-sm font-light text-slate-100">
                                    Don’t have an account yet?
                                    <Link href="/signup" className="font-medium text-blue-600 hover:underline">
                                        Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </> 
    );
}

export default Login;
