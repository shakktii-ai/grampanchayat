// pages/api/tharavpost.js

import { dbConnect } from '../../models/Complaint';
import { TharavPost } from '../../models/Complaint';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    // Handle creating a new TharavPost
    try {
      const {
        fullName,
        email,
        mobileNo,
        complaint,
        complaintImprove,
        grampanchyatName
      } = req.body;
console.log(req.body);

      const newTharavPost = new TharavPost({
        fullName,
        email,
        mobileNo,
        complaint,
        complaintImprove,
        grampanchyatName,
      });

      await newTharavPost.save();

      return res.status(201).json({ message: 'TharavPost created successfully', data: newTharavPost });
    } catch (error) {
      console.error('Error creating TharavPost:', error);
      return res.status(500).json({ error: 'Failed to create TharavPost' });
    }
  }

  if (req.method === 'GET') {
    // Handle fetching all TharavPosts
    try {
      const tharavPosts = await TharavPost.find();
      return res.status(200).json(tharavPosts);
    } catch (error) {
      console.error('Error fetching TharavPosts:', error);
      return res.status(500).json({ error: 'Failed to fetch TharavPosts' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
