

import dbConnect from '../../middleware/dbConnect';  // Helper function to connect to MongoDB
import HouseAndWaterTax from '../../models/HouseAndWaterTax';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to the MongoDB database
      await dbConnect();

      // Create a new birth certificate record
      const houseAndWaterTax = new HouseAndWaterTax(req.body);

      // Save the record to the database
      await houseAndWaterTax.save();

      // Send a response back
      res.status(201).json({ message: 'Form submitted successfully', data: houseAndWaterTax });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    try {
      // Connect to the MongoDB database
      await dbConnect();

      // Fetch all birth certificates from the database
      const houseAndWaterTax = await HouseAndWaterTax.find();

      // Send the data in the response
      res.status(200).json({ message: 'marriage certificates fetched successfully', data: houseAndWaterTax });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'PUT') {
    try {
      // Connect to the MongoDB database
      await dbConnect();

      // Extract the ID from the URL and the new status from the request body
      const { id } = req.query;
      const { status } = req.body;

      // Update the status of the birth certificate
      const updatedCertificate = await HouseAndWaterTax.findByIdAndUpdate(
        id,
        { status },
        { new: true }  // This will return the updated document
      );

      if (!updatedCertificate) {
        return res.status(404).json({ message: 'Certificate not found' });
      }

      // Send a response with the updated certificate
      res.status(200).json({ message: 'Status updated successfully', data: updatedCertificate });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
