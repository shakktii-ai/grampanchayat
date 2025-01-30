import mongoose from 'mongoose';

const DeathCertificateSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    deathFullName: { type: String, required: true },
    deathDateOfBirth: { type: String, required: true },
    deathDateOfDeath: { type: String, required: true },
    deathGender: { type: String, required: true },
    placeOfDeath: { type: String, required: true },
    deathRegistrationNumber: { type: String, required: true },
    deathAadhaarCard: { type: String, required: true },
    addressProof: { type: String, required: true },
    other: { type: String, required: true }, 
    status: { type: String, default: 'सुरू केलेले नाही'},
    requestType: { type: String, default: 'मृत्यू प्रमाणपत्र' },
    grampanchayantUploadDocument:{type:String}
}, { timestamps: true });

export default mongoose.models.DeathCertificate || mongoose.model('DeathCertificate', DeathCertificateSchema);
