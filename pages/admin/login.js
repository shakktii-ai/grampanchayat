import { useState } from 'react';
import { useRouter } from 'next/router';
// import styles from '@/styles/login.module.css';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin@gmail.com' && password === 'admin') {
      // Authentication successful, set the flag in session storage
      sessionStorage.setItem('isLoggedIn', 'true');
      router.push('/AdminY/'); // Navigate to the Dashboard page
    } else {
      setError('Invalid username or password');
    }
  };

  return (<>
  {/* <style jsx>{`
 
    `}</style> */}
  {/* <div className={styles.mainform}>
    <h1 className={styles.h1}>Admin Login</h1>
    <div className={styles.container}>
      
      <form onSubmit={handleLogin}>
        <div>
          <div>
          {error && <p className={styles.p}>{error}</p>}</div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
            </div> */}
    
            <section class="bg-gray-50 dark:bg-gray-900"  onSubmit={handleLogin} >
            {error && <p className={styles.p}>{error}</p>}
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" value={username}
            onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password}
            onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  
                  <button type="submit" class="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                 
              </form>
          </div>
      </div>
  </div>
  
</section>
    </>
  );
};

export default Login;