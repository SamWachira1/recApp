// server/models/user.js
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firebaseUid: {
    type: String,
    required: true,
    unique: true, // Ensures each Firebase UID is unique in the database
  },
  first: {
    type: String,
    required: true,
    trim: true,
  },
  last: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures emails are unique in the database
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"], // Email validation
  },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

export const User = mongoose.model('User', UserSchema);
