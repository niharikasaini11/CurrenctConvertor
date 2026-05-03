import Conversion from "../modals/Conversion.js";

// get all data
export const getHistory = async (req, res) => {
    try{
        const data = await Conversion.find().sort({ date: -1 });
        res.json(data);
    }catch(e){
        res.status(500).json({ message: "Error fetching History", e });
    }
}

// post data
export const postData = async (req, res) => {
    try{
        const newData = new Conversion(req.body);
        await newData.save();
        res.json({ message: "Saved Successfully" });
    }catch(err){
        res.status(500).json({ message: "Error Posting Data", err });
    }
}