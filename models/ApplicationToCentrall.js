const mongoose = require('mongoose');

const ApplicationToCentralSchema = new mongoose.Schema({
    
    status: {type :String , required:true },
            requestType: {type :String , required:true },
            virificationWork: {type :String , required:true },
            grampanchyatName: {type :String , required:true },
            senderDetails: {type :String , required:true },
            recipientDetails: {type :String , required:true },
            subject: {type :String , required:true },
            date: {type :String , required:true },
            document: {type :String , required:true },
            
  },{timestamps:true});


  export default mongoose.models.ApplicationToCentral ||mongoose.model("ApplicationToCentral",ApplicationToCentralSchema);