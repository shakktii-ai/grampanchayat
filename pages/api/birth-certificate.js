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


import dbConnect from '@/middleware/dbConnect';  // Helper function to connect to MongoDB
import BirthCertificate from '@/models/BirthCertificate';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('Connecting to the database...');
      await dbConnect();

      console.log('Creating new birth certificate...');
      const birthCertificate = new BirthCertificate(req.body);

      console.log('Saving to the database...');
      await birthCertificate.save();

      res.status(201).json({ message: 'Form submitted successfully', data: birthCertificate });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    try {
      await dbConnect();
      const birthCertificates = await BirthCertificate.find();
      res.status(200).json({ message: 'Birth certificates fetched successfully', data: birthCertificates });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'PUT') {
    try {
      await dbConnect();
      const { id } = req.query;
      const { status } = req.body;
      const updatedCertificate = await BirthCertificate.findByIdAndUpdate(id, { status }, { new: true });
      if (!updatedCertificate) {
        return res.status(404).json({ message: 'Certificate not found' });
      }
      res.status(200).json({ message: 'Status updated successfully', data: updatedCertificate });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

