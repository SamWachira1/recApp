// server/middleware/checkAuth.js
import admin from '../config/firebaseAdmin.js'; // Use import instead of require

// Middleware to verify Firebase ID token
export const checkAuth = async (req, res, next) => {
  // Extract the ID token from the Authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized, token missing' });
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    // Verify the ID token using Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Attach the decoded token (user info) to the request object
    next(); // Move on to the next middleware/route handler
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized, invalid token' });
  }
};
