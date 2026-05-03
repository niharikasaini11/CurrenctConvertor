import mongoose from 'mongoose';

const conversionSchema = new mongoose.Schema({
    from: String,
    to: String,
    amount: Number,
    result: Number,
    rate: Number,
    date:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Conversion", conversionSchema);