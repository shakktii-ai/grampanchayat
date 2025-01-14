// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// const withAuth = (WrappedComponent) => {
//   const Auth = (props) => {
//     const router = useRouter();

//     useEffect(() => {
//       const isLoggedIn = sessionStorage.getItem('isLoggedIn'); // Check if the user is logged in
//       if (!isLoggedIn) {
//         router.push('/AdminY/login');
//       }
//     }, []);

//     return <WrappedComponent {...props} />;
//   };

//   return Auth;
// };

// export default withAuth;

// components/withAuth.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
      console.log('Is logged in:', isLoggedIn); // Log the login state

      if (!isLoggedIn) {
        router.push('/AdminY/login'); // Redirect if not logged in
      } else {
        setIsLoading(false); // Set loading to false if logged in
      }
    }, [router]);

    // Optionally render a loading state
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;
