"use client"; // This is a client component

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '../store/authSlice';
import { FcGoogle } from 'react-icons/fc'; // Import Google icon
import { motion } from 'framer-motion'; // Import framer-motion

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, status, error } = useSelector((state) => state.auth);

  const handleSignIn = () => {
    dispatch(signInWithGoogle());
  };

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex overflow-hidden font-sans bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      {/* Left side: Welcome Text */}
      <div className="flex-1 flex items-center justify-center text-white p-8 overflow-hidden">
        <motion.div
          className="max-w-lg"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        >
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Cover Letter Generator</h1>
          <p className="text-xl leading-relaxed">
            Create personalized cover letters effortlessly with our AI-powered generator. Sign in to get started.
          </p>
        </motion.div>
      </div>

      {/* Right side: Login Form */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="max-w-md w-full bg-gray-800 bg-opacity-80 rounded-lg shadow-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Sign In</h2>

          {status === 'loading' && <p className="text-center text-gray-300 mb-4">Loading...</p>}
          {error && <p className="text-center text-red-500 mb-4">{error}</p>}

          {!user ? (
            <>
              {/* Google Sign-In Button */}
              <motion.button
                onClick={handleSignIn}
                className="w-full flex items-center justify-center px-4 py-2 mb-4 text-white bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FcGoogle className="w-6 h-6 mr-2" /> {/* Google Icon */}
                Sign in with Google
              </motion.button>

              {/* Optional: Add email/password fields */}
              <div className="mt-4">
                <form>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300">Email</label>
                    <motion.input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 mt-1 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-gray-900 text-white"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-300">Password</label>
                    <motion.input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 mt-1 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-gray-900 text-white"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Login
                  </motion.button>
                </form>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-300">Redirecting to dashboard...</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
