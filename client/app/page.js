// client/app/page.js
"use client"; // This is a client component

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { signInWithGoogle } from '../store/authSlice';

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize the router
  const { user, status, error } = useSelector((state) => state.auth);

  const handleSignIn = () => {
    dispatch(signInWithGoogle());
  };

  // Navigate to the dashboard if the user is authenticated
  useEffect(() => {
    if (user) {
      router.push('/dashboard'); // Redirect to the dashboard
    }
  }, [user, router]);

  return (
    <>
      <h1>Welcome to Cover Letter Generator</h1>
      
      {/* Show loading status */}
      {status === 'loading' && <p>Loading...</p>}

      {/* Show error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the login button if the user is not logged in */}
      {!user ? (
        <button onClick={handleSignIn}>Sign in with Google</button>
      ) : (
        <p>Redirecting to dashboard...</p> // Show this message while redirecting
      )}
    </>
  );
};

export default Page;
