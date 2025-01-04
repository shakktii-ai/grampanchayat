import dbConnect from '/middleware/dbConnect'; // Helper function to connect to MongoDB
import BirthCertificate from '/models/BirthCertificate'; // Mongoose model for BirthCertificate

export default async function handler(req, res) {
  // Handle POST request for creating a new Birth Certificate
  if (req.method === 'POST') {
    try {
      await dbConnect(); // Connect to the MongoDB database

      const birthCertificate = new BirthCertificate(req.body); // Create a new document from the request body
      await birthCertificate.save(); // Save to the database

      // Respond with a success message and the saved certificate data
      res.status(201).json({ message: 'Form submitted successfully', data: birthCertificate });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  // Handle GET request for fetching a specific Birth Certificate by ID
  else if (req.method === 'GET') {
    try {
      const { id } = req.query; // Extract the ID from the query parameters (from the URL)

      await dbConnect(); // Connect to the database

      const birthCertificate = await BirthCertificate.findById(id); // Find the certificate by its ID

      if (!birthCertificate) {
        return res.status(404).json({ message: 'Certificate not found' });
      }

      // Send the found certificate as the response
      res.status(200).json({ message: 'Certificate fetched successfully', data: birthCertificate });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  // Handle PUT request for updating the status of a Birth Certificate
  else if (req.method === 'PUT') {
    try {
      const { id } = req.query; // Extract the ID from the query parameters (from the URL)
      const { status } = req.body; // Extract the new status from the request body

      // Connect to the database
      await dbConnect();

      // Update the status of the birth certificate using the ID
      const updatedCertificate = await BirthCertificate.findByIdAndUpdate(
        id,
        { status }, // Update the status field
        { new: true } // Return the updated document
      );

      if (!updatedCertificate) {
        return res.status(404).json({ message: 'Certificate not found' });
      }

      // Respond with the updated certificate data
      res.status(200).json({ message: 'Status updated successfully', data: updatedCertificate });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  // Handle unsupported HTTP methods
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
