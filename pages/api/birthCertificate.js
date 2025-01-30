import mongoose from 'mongoose';
import BirthCertificatee from '@/models/BirthCertificate'; // Adjust the path

const handler = async (req, res) => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  } // Ensure DB is connected

  if (req.method === 'POST') {
    try {
      const {
        fullName,
        address,
        mobileNumber,
        email,
        birthBabyFullName,
        fatherName,
        motherName,
        dateOfBirth,
        timeOfBirth,
        placeOfBirth,
        nameOfHospital,
        talOfHospital,
        addressOfHospital,
        cityOfHospital,
        distOfHospital,
        genderOfBaby,
        birthRegNo,
        additionalInfo,
        hospitalCertificate,
        parentId,
        addressProof,
        other,
        signature,
        status,
        requestType,
        grampanchayantUploadDocument,
      } = req.body;

      // Create a new birth certificate instance with the received data
      const birthCertificate = new BirthCertificatee({
        fullName,
        address,
        mobileNumber,
        email,
        birthBabyFullName,
        fatherName,
        motherName,
        dateOfBirth,
        timeOfBirth,
        placeOfBirth,
        nameOfHospital,
        talOfHospital,
        addressOfHospital,
        cityOfHospital,
        distOfHospital,
        genderOfBaby,
        birthRegNo,
        additionalInfo,
        hospitalCertificate,
        parentId,
        addressProof,
        other,
        signature,
        status,
        requestType,
        grampanchayantUploadDocument,
      });

      // Save the birth certificate to the database
      await birthCertificate.save();

      // Send a success response
      res.status(200).json({ success: "Birth Certificate successfully created!" });
    } catch (error) {
      console.error("Error creating birth certificate:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === 'GET') {
    try {
      // Pagination variables
      const page = parseInt(req.query.page) || 1;  // Default to page 1 if not provided
      const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page if not provided
      const skip = (page - 1) * limit;

      // Fetch birth certificates with pagination
      const birthCertificates = await BirthCertificatee.find()
        

      // Get total count of documents
      const totalCount = await BirthCertificatee.countDocuments();

      // Calculate total pages
      const totalPages = Math.ceil(totalCount / limit);

      res.status(200).json({
        message: 'Birth certificates fetched successfully',
        data: birthCertificates,
        totalCount,
        totalPages,
        currentPage: page,
        limit,
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { id } = req.query; // Extract the ID from the query parameters (from the URL)
      const { status } = req.body; // Extract the new status from the request body
  
      // Update the status of the birth certificate using the ID
      const updatedCertificate = await BirthCertificatee.findByIdAndUpdate(
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
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default handler;
