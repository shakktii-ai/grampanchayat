import mongoose from 'mongoose';

const MarriageCertificateSchema = new mongoose.Schema({
    husbandFullName: { type: String, required: true },
    wifeFullName: { type: String, required: true },
    husbandDateOfBirth: { type: String, required: true },
    wifeDateOfBirth: { type: String, required: true },
    marriageDate: { type: String, required: true },
    marriagePlace: { type: String, required: true },
    marriageType: { type: String, required: true },
    husbandContactNumber: { type: String, required: true },
    wifeContactNumber: { type: String, required: true },
    email: { type: String, required: true },
    husbandAadhaarCard: { type: String, required: true },
    wifeAadhaarCard: { type: String, required: true },
    addressProof: { type: String,  },
    marriageProof: { type: String,  },
    firstWitnessesProof: { type: String,  },
    secondWitnessesProof: { type: String,  },  
    status: { type: String, default: 'सुरू केलेले नाही'},
    requestType: { type: String, default: 'विवाह प्रमाणपत्र' },
    grampanchayantUploadDocument:{type:String}
}, { timestamps: true });

export default mongoose.models.MarriageCertificate || mongoose.model('MarriageCertificate', MarriageCertificateSchema);
