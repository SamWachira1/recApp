// server/routes/profiles.js
import express from 'express';
import { Profile } from '../models/profile.js';
import { checkAuth } from '../middleware/checkAuth.js';

const router = express.Router();

// Public route: Get all profiles
router.get('/', async (_, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(404).json({ error: 'Profiles not found' });
  }
});

// Protected route: Update a profile
router.patch('/:profileId', checkAuth, async (req, res) => {
  const { profileId } = req.params;
  const updateData = req.body;

  try {
    const updatedProfile = await Profile.findByIdAndUpdate(profileId, updateData, { new: true });
    if (!updatedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(updatedProfile);
  } catch (error) {
    res.status(400).json({ error: 'Unable to update profile' });
  }
});

// Protected route: Create a new profile
router.post('/', checkAuth, async (req, res) => {
  const profileData = req.body;

  try {
    const newProfile = await Profile.create(profileData);
    res.json(newProfile);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create profile' });
  }
});

// Protected route: Delete a profile
router.delete('/:profileId', checkAuth, async (req, res) => {
  const { profileId } = req.params;

  try {
    const deletedProfile = await Profile.findByIdAndDelete(profileId);
    if (!deletedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json({ message: `Profile ${profileId} was deleted` });
  } catch (error) {
    res.status(400).json({ error: 'Unable to delete profile' });
  }
});

// Export the router as 'profileRoutes'
export const profileRoutes = router;
