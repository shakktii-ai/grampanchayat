import mongoose from 'mongoose';

const RoadRepairCertificateSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    roadNameOrPlaceName: { type: String, required: true },
    area: { type: String, required: true },
    problemOfRoad: { type: String, required: true },
    sizeOfProblem: { type: String, required: true },
    locationMap: { type: String, required: true }, 
    problemExisted: { type: String, required: true },
    timeOfProblem: { type: String, required: true },
    problemImage: { type: String, required: true },
    status: { type: String, default: 'सुरू केलेले नाही'},
    requestType: { type: String, default: 'रस्त्यांची तात्पुरती दुरुस्ती' },
}, { timestamps: true });

export default mongoose.models.RoadRepairCertificate || mongoose.model('RoadRepairCertificate', RoadRepairCertificateSchema);
