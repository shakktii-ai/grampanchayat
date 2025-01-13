// // pages/api/sendMessage.js
// import axios from 'axios';
// import fs from 'fs';
// import FormData from 'form-data';

// const sendTemplateMessage = async (req, res) => {
//   if (req.method === 'POST') {
//     try {
//       const response = await axios({
//         url: 'https://graph.facebook.com/v20.0/phone_number_id/messages',
//         method: 'post',
//         headers: {
//           'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//         data: JSON.stringify({
//           messaging_product: 'whatsapp',
//           to: req.body.phone_number, // dynamically passed
//           type: 'template',
//           template: {
//             name: 'discount',
//             language: {
//               code: 'en_US',
//             },
//             components: [
//               {
//                 type: 'header',
//                 parameters: [
//                   {
//                     type: 'text',
//                     text: req.body.name, // dynamically passed
//                   },
//                 ],
//               },
//               {
//                 type: 'body',
//                 parameters: [
//                   {
//                     type: 'text',
//                     text: req.body.discount, // dynamically passed
//                   },
//                 ],
//               },
//             ],
//           },
//         }),
//       });

//       res.status(200).json(response.data);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// };

// export default sendTemplateMessage;


// pages/api/sendMessage.js
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    const { messageType, phone_number, message, name, discount, media } = req.body;

    try {
      let response;

      if (messageType === 'text') {
        // Sending a text message
        response = await axios.post(
          'https://graph.facebook.com/v20.0/phone_number_id/messages',
          {
            messaging_product: 'whatsapp',
            to: phone_number,
            type: 'text',
            text: {
              body: message,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );
      } else if (messageType === 'template') {
        // Sending a template message
        response = await axios.post(
          'https://graph.facebook.com/v20.0/phone_number_id/messages',
          {
            messaging_product: 'whatsapp',
            to: phone_number,
            type: 'template',
            template: {
              name: 'discount',
              language: { code: 'en_US' },
              components: [
                {
                  type: 'header',
                  parameters: [{ type: 'text', text: name }],
                },
                {
                  type: 'body',
                  parameters: [{ type: 'text', text: discount }],
                },
              ],
            },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );
      } else if (messageType === 'media') {
        // Uploading and sending a media (image) message
        const formData = new FormData();
        formData.append('messaging_product', 'whatsapp');
        formData.append('file', fs.createReadStream(media), { contentType: 'image/png' });
        formData.append('type', 'image/png');

        // First, upload the media
        const mediaResponse = await axios.post(
          'https://graph.facebook.com/v20.0/phone_number_id/media',
          formData,
          {
            headers: {
              Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
              ...formData.getHeaders(),
            },
          }
        );

        // After media is uploaded, send the message with the media ID
        response = await axios.post(
          'https://graph.facebook.com/v20.0/phone_number_id/messages',
          {
            messaging_product: 'whatsapp',
            to: phone_number,
            type: 'image',
            image: {
              id: mediaResponse.data.id,
              caption: message,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );
      }

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
