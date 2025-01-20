// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import User from "@/models/User"
// import connectDb from "@/middleware/dbConnect"
// var CryptoJS = require("crypto-js");
// var jwt = require('jsonwebtoken');

// const handler = async (req, res) => {
//     if (req.method == 'POST') {
//         let user = await User.findOne({ "email": req.body.email })
//         const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123');
//         let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
//         if (user) {
//             if (req.body.email == user.email && req.body.password == decryptedPass) {
//                 var token = jwt.sign({email:user.email, name:user.name }, 'jwtsecret',{expiresIn:"1s"});
//                 res.status(200).json({success: true,token})
//             }else{

//                 res.status(200).json({ success: false, error:"Invaild Credentials" })
//             }
//         }
//         else{
//             res.status(200).json({ success: false, error:"No user found" })

//         }
//     }

//     else {
//         res.status(400).json({ error: "this method is not allowed" })
//     }


// }

// export default connectDb(handler)


import User from "@/models/User"
import connectDb from "@/middleware/dbConnect"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            let user = await User.findOne({ "email": req.body.email });

            // Ensure user is found before attempting to decrypt
            if (user) {
                // Decrypt the password only if user exists
                const bytes = CryptoJS.AES.decrypt(user.password, 'secret123');
                let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

                // Check if the password matches
                if (req.body.password === decryptedPass) {
                    var token = jwt.sign({ email: user.email, name: user.name }, 'jwtsecret', { expiresIn: "1h" });
                    return res.status(200).json({ success: true, token });
                } else {
                    return res.status(200).json({ success: false, error: "Invalid Credentials" });
                }
            } else {
                return res.status(200).json({ success: false, error: "No user found" });
            }

        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: "An error occurred" });
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" });
    }
};

export default connectDb(handler);
