import mongoose from 'mongoose';

const HouseAndWaterTaxSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    fatherOrWifeFullName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    propertyAddress: { type: String, required: true },
    propertyType: { type: String, required: true },
    addressProof: { type: String, required: true },
    status: { type: String, default: 'सुरू केलेले नाही'},
    requestType: { type: String, default: 'रहिवासी प्रमाणपत्र' },
    grampanchayantUploadDocument:{type:String}
}, { timestamps: true });

export default mongoose.models.HouseAndWaterTax || mongoose.model('HouseAndWaterTax', HouseAndWaterTaxSchema);
