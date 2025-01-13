// import mongoose from 'mongoose';

// const DevelopmentworkSchema = new mongoose.Schema({
//     collection: { type: String, require:true },
//     workName: { type: String, require:true },
//     workType: { type: String, require:true },
//     location: { type: String, require:true },
//     startDate: { type: String, require:true },
//     endDate: { type: String, require:true },
//     estimatedCost: { type: String, require:true },
//     actualCost: { type: String, require:true },
//     workSource: { type: String, require:true },
//     status: { type: String, require:true },
//     startDateActive: { type: String, require:true },
//     completionDate: { type: String },
//     estimatedDuration: { type: String },
// }, { timestamps: true });

// export default mongoose.models.Developmentwork || mongoose.model('Developmentwork', DevelopmentworkSchema);



import mongoose from 'mongoose';

const DevelopmentworkSchema = new mongoose.Schema({
    collectionName: { type: String, required: true },  // Renamed field
    workName: { type: String, required: true },
    workType: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    estimatedCost: { type: String, required: true },
    actualCost: { type: String, required: true },
    workSource: { type: String, required: true },
    status: { type: String, required: true },
    startDateActive: { type: String, required: true },
    completionDate: { type: String },
    estimatedDuration: { type: String },
}, { timestamps: true });

export default mongoose.models.Developmentwork || mongoose.model('Developmentwork', DevelopmentworkSchema);
