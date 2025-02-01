// models/TharavPost.js

const { default: Complaint } = require('@/pages/complaint');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComplaintSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNo: { type: String, required: true },
  grampanchyatName: {type:String , required:true },
  complaint: { type: String, required: true },
  complaintImprove: { type: String, required: true },
  status: { type: String  },
  
  
});

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

module.exports = { TharavPost: mongoose.models.Complaint || mongoose.model('Complaint', ComplaintSchema), dbConnect };
