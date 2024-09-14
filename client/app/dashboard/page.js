// client/app/dashboard/page.js
"use client"; // This is a client component

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { useRouter } from 'next/navigation';
import JobDescription from "./components/jobDescription";
import { signOut } from '../../store/authSlice'; // Import signOut action

const Dashboard = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  // Redirect to the homepage if not authenticated
  useEffect(() => {
    if (!user) {
      router.push('/'); // Redirect to the login page if not logged in
    }
  }, [user, router]);

  // Handle sign out
  const handleSignOut = () => {
    dispatch(signOut());
    router.push('/'); // Redirect to login after signing out
  };

  if (!user) {
    return <p>Loading...</p>; // Show loading while checking authentication
  }

  return (
    <>
      <h1>The Dashboard</h1>
      <button onClick={handleSignOut}>Log out</button> {/* Logout Button */}
      <JobDescription />
    </>
  );
};

export default Dashboard;
