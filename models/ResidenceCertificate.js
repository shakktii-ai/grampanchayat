import mongoose from 'mongoose';

const ResidenceCertificateSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    fatherOrWifeFullName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    currentAddress: { type: String, required: true },
    durationOfResidence: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    aadhaarCard: { type: String, required: true },
    schoolOrCollegeCertificate: { type: String, required: true },
    addressProof: { type: String, required: true }, 
    status: { type: String, default: 'सुरू केलेले नाही'},
    requestType: { type: String, default: 'रहिवासी प्रमाणपत्र' },
    grampanchayantUploadDocument:{type:String}
}, { timestamps: true });

export default mongoose.models.ResidenceCertificate || mongoose.model('ResidenceCertificate', ResidenceCertificateSchema);
