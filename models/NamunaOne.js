import mongoose from 'mongoose';

const NamunaOneSchema = new mongoose.Schema({
    collection: { type: String, required: true },
    expense: { type: String, required: true },
          financialYear: { type: String, required: true },
          fundName: { type: String, required: true },
          accountGroup: { type: String, required: true },
          accountName: { type: String, required: true },
          actualAmountReceivedDuringYear: { type: String, required: true },
          actualAmountReceivedYear: { type: String, required: true },
          estimatedAmountSanctionedYear: { type: String, required: true },
          estimatedReceiptsPanchayatYear: { type: String, required: true },
          openingBalanceYear: { type: String, required: true },
          totalEstimatedDeposit: { type: String, required: true },
          totalEstimatedCost: { type: String, required: true },
          aVBackwardClasses15: { type: String, required: true },
          dVDFSubscription025: { type: String, required: true },
          disabilityWelfareFund5: { type: String, required: true },
          mChildWelfare10: { type: String, required: true },     
}, { timestamps: true });

export default mongoose.models.NamunaOne || mongoose.model('NamunaOne', NamunaOneSchema);
