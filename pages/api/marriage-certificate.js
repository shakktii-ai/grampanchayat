// import dbConnect from '../../middleware/dbConnect';  // Helper function to connect to MongoDB
// import BirthCertificate from '../../models/BirthCertificate';

// export default async function handler(req, res) {
//     console.log(req.body);
    
//   if (req.method === 'POST') {
//     try {
//       // Connect to the MongoDB database
//       await dbConnect();

//       // Create a new birth certificate record
//       const birthCertificate = new BirthCertificate(req.body);

//       // Save the record to the database
//       await birthCertificate.save();

//       // Send a response back
//       res.status(201).json({ message: 'Form submitted successfully', data: birthCertificate });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   } else {
//     // Handle unsupported HTTP methods
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

// import dbConnect from '../../middleware/dbConnect';  // Helper function to connect to MongoDB
// import BirthCertificate from '../../models/BirthCertificate';

// export default async function handler(req, res) {
// //   console.log(req.body);
  
//   if (req.method === 'POST') {
//     try {
//       // Connect to the MongoDB database
//       await dbConnect();

//       // Create a new birth certificate record
//       const birthCertificate = new BirthCertificate(req.body);

//       // Save the record to the database
//       await birthCertificate.save();

//       // Send a response back
//       res.status(201).json({ message: 'Form submitted successfully', data: birthCertificate });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   } else if (req.method === 'GET') {
//     try {
//       // Connect to the MongoDB database
//       await dbConnect();

//       // Fetch all birth certificates from the database
//       const birthCertificates = await BirthCertificate.find();

//       // Send the data in the response
//       res.status(200).json({ message: 'Birth certificates fetched successfully', data: birthCertificates });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   } else {
//     // Handle unsupported HTTP methods
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }


import dbConnect from '../../middleware/dbConnect';  // Helper function to connect to MongoDB
import MarriageCertificate from '../../models/MarriageCertificate';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to the MongoDB database
      await dbConnect();

      // Create a new birth certificate record
      const marriageCertificate = new MarriageCertificate(req.body);

      // Save the record to the database
      await marriageCertificate.save();

      // Send a response back
      res.status(201).json({ message: 'Form submitted successfully', data: marriageCertificate });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    try {
      // Connect to the MongoDB database
      await dbConnect();

      // Fetch all birth certificates from the database
      const marriageCertificate = await MarriageCertificate.find();

      // Send the data in the response
      res.status(200).json({ message: 'marriage certificates fetched successfully', data: marriageCertificate });
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
      const updatedCertificate = await MarriageCertificate.findByIdAndUpdate(
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
