// server/routes/auth.js
import express from 'express';
import admin from '../config/firebaseAdmin.js'; // Firebase Admin SDK
import { User } from '../models/user.js';

const router = express.Router();

// Register or Login User
router.post('/login', async (req, res) => {
  const { token } = req.body;

  try {
    // Verify the ID token with Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Extract user details from the token
    const { email, name, uid: firebaseUid } = decodedToken;

    // Ensure firebaseUid is not null
    if (!firebaseUid) {
      throw new Error('Firebase UID is missing from the token.');
    }

    // Split name into first and last names (if applicable)
    const [first, ...lastParts] = (name || '').split(' '); // Handle cases where name might be missing
    const last = lastParts.join(' ');

    // Ensure first and last names are set
    const userFirstName = first || 'Unknown';
    const userLastName = last || '';

    // Find the user by firebaseUid or email and update or insert (upsert)
    const user = await User.findOneAndUpdate(
      { firebaseUid },
      { $set: { first: userFirstName, last: userLastName, email } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    // Respond with user data
    res.json({ user });

  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
});

// Export the auth routes as a named export
export const authRoutes = router;
