import dbConnect from '../../middleware/dbConnect';  // Helper function to connect to MongoDB
import BirthCertificate from '../../models/BirthCertificate';
import DeathCertificate from '../../models/DeathCertificate';
import MarriageCertificate from '../../models/MarriageCertificate';
import ResidenceCertificate from '../../models/ResidenceCertificate';

export default async function handler(req, res) {
  const { type } = req.query; // Get the certificate type from the query

  // Check if the certificate type is provided and valid
  if (!type || !['birth', 'death', 'marriage', 'residence'].includes(type)) {
    return res.status(400).json({ message: 'Invalid certificate type' });
  }

  try {
    // Connect to the database
    await dbConnect();

    // Handle POST request for creating a new certificate
    if (req.method === 'POST') {
      let CertificateModel;

      switch (type) {
        case 'birth':
          CertificateModel = BirthCertificate;
          break;
        case 'death':
          CertificateModel = DeathCertificate;
          break;
        case 'marriage':
          CertificateModel = MarriageCertificate;
          break;
        case 'residence':
          CertificateModel = ResidenceCertificate;
          break;
      }

      const certificate = new CertificateModel(req.body); // Create a new certificate from the request body
      await certificate.save(); // Save the certificate to the database

      res.status(201).json({ message: 'Form submitted successfully', data: certificate });

    // Handle GET request for fetching certificates
    } else if (req.method === 'GET') {
      let CertificateModel;

      switch (type) {
        case 'birth':
          CertificateModel = BirthCertificate;
          break;
        case 'death':
          CertificateModel = DeathCertificate;
          break;
        case 'marriage':
          CertificateModel = MarriageCertificate;
          break;
        case 'residence':
          CertificateModel = ResidenceCertificate;
          break;
      }

      const certificates = await CertificateModel.find(); // Fetch all certificates from the selected model

      res.status(200).json({ message: `${type} certificates fetched successfully`, data: certificates });

    // Handle PUT request for updating the status of a specific certificate
    } else if (req.method === 'PUT') {
      const { id, status } = req.body; // Extract the id and status from the body
      let CertificateModel;

      switch (type) {
        case 'birth':
          CertificateModel = BirthCertificate;
          break;
        case 'death':
          CertificateModel = DeathCertificate;
          break;
        case 'marriage':
          CertificateModel = MarriageCertificate;
          break;
        case 'residence':
          CertificateModel = ResidenceCertificate;
          break;
      }

      const updatedCertificate = await CertificateModel.findByIdAndUpdate(
        id,
        { status },
        { new: true }  // Return the updated document
      );

      if (!updatedCertificate) {
        return res.status(404).json({ message: 'Certificate not found' });
      }

      res.status(200).json({ message: 'Status updated successfully', data: updatedCertificate });

    // Handle unsupported HTTP methods
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
