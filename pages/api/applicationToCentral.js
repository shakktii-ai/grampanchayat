    
    import mongoose from 'mongoose';
    import ApplicationToCentral from '@/models/ApplicationToCentrall';

    const handler = async (req, res) => {
      if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);
      } // Ensure DB is connected
    
      if (req.method === 'POST') {
        try {
          const {
            status,
            requestType,
            virificationWork,
            grampanchyatName,
            senderDetails,
            recipientDetails,
            subject,
            date,
            document,
          } = req.body;
    
          // Create a new birth certificate instance with the received data
          const applicationToCentral = new ApplicationToCentral({
            status,
            requestType,
            virificationWork,
            grampanchyatName,
            senderDetails,
            recipientDetails,
            subject,
            date,
            document,
          });
    
          // Save the birth certificate to the database
          await applicationToCentral.save();
    
          // Send a success response
          res.status(200).json({ success: " successfully created!" });
        } catch (error) {
          console.error("Error creating:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      } else if (req.method === 'GET') {
        try {
          // Fetch birth certificates from the database
          const applicationToCentrals = await ApplicationToCentral.find();
          res.status(200).json({ message: ' fetched successfully', data: applicationToCentrals });
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      } else {
        res.status(400).json({ error: "This method is not allowed" });
      }
    };
    
    export default handler;
    