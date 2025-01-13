// models/TharavPost.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TharavPostSchema = new Schema({
  documentCopyDate: { type: String, required: true },
  resolutionNumber: { type: String, required: true },
  time: { type: String, required: true },
  subject: { type: String, required: true },
  officeName: { type: String, required: true },
  sarpanchName: { type: String, required: true },
  significantName: { type: String, required: true },
  approvingName: { type: String, required: true },
  fields: [{
    fullName: { type: String, required: true },
    groupNumber: { type: String, required: true },
    fieldAccordingTo8a: { type: String, required: true },
    beneficiaryCategory: { type: String, required: true }
  }],
  members: [{
    memberName: { type: String, required: true }
  }],
  createdAt: { type: Date, default: Date.now }
});

// Connect to the MongoDB and export the model
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tharavDB', opts).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = { TharavPost: mongoose.models.TharavPost || mongoose.model('TharavPost', TharavPostSchema), dbConnect };
