import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  first: {
    type: String,
    required: true,
    trim: true // Removes extra spaces
  },
  last: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures emails are unique in the database
    lowercase: true, // Stores emails in lowercase
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"] // Email validation
  },
  location: {
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true }
  },
  phone: {
    type: String,
    trim: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] // Example phone validation
  },
  about: {
    type: String,
    trim: true,
    maxlength: 500 // Limits the length of the about section
  },
  projects: [{
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    link: { type: String, trim: true } // Project link (e.g., GitHub URL)
  }],
  work: [{
    company: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }, // Can be null if currently employed
    description: { type: String, trim: true }
  }],
  skills: [{
    name: { type: String, trim: true },
    level: { type: String, trim: true, enum: ['Beginner', 'Intermediate', 'Advanced'] } // Skill proficiency
  }],
  education: [{
    institution: { type: String, required: true, trim: true },
    degree: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }, // Can be null if currently studying
    gpa: { type: Number, min: 0, max: 4.0 }
  }]
}, {
  timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

export const Profile = mongoose.model('Profile', ProfileSchema);
