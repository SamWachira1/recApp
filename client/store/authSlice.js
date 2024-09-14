// client/store/authSlice.js
"use client";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, googleProvider } from '../firebase'; // Import Firebase auth
import { signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';

// Async thunk for Google Sign-In
export const signInWithGoogle = createAsyncThunk('auth/signInWithGoogle', async (_, { rejectWithValue }) => {
  try {
    // Sign in with Google
    const result = await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken(); // Get Firebase ID token

    // Send the token to the backend for verification and storing user info
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error('Failed to authenticate');
    }

    const data = await response.json();
    return data.user; // Return the user data from the server

  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Async thunk for signing out
export const signOut = createAsyncThunk('auth/signOut', async (_, { rejectWithValue }) => {
  try {
    // Sign out from Firebase
    await firebaseSignOut(auth);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Initial state
const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
        state.status = 'idle';
      });
  },
});

// Export actions and reducer
export default authSlice.reducer;
