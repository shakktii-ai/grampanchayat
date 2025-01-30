import mongoose from 'mongoose';

const BirthCertificateSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String },
  birthBabyFullName: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  timeOfBirth: { type: String, required: true },
  placeOfBirth: { type: String, required: true },
  nameOfHospital: { type: String, required: true },
  addressOfHospital: { type: String, required: true },
  cityOfHospital: { type: String, required: true },
  talOfHospital: { type: String, required: true },
  distOfHospital: { type: String, required: true },
  genderOfBaby: { type: String, required: true },
  birthRegNo: { type: String },
  additionalInfo: { type: String },
  hospitalCertificate: { type: String },
    parentId: { type: String },
    addressProof: { type: String },
    other: { type: String },
    signature: { type: String },    
  status: { type: String, default: 'सुरू केलेले नाही'},
  requestType: { type: String, default: 'जन्म प्रमाणपत्र' },
  grampanchayantUploadDocument:{type:String}
}, { timestamps: true });

export default mongoose.models.BirthCertificate || mongoose.model('BirthCertificate', BirthCertificateSchema);
