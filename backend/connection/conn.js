const mongoose = require('mongoose');

const con = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://prakash:prakash123@todocluster.eiz11i0.mongodb.net/")
            .then(() => {
                console.log('Connected to MongoDB');
            })
    }
    catch (err) {
        res.status(400).json({ message: "Not connected" });
    }
}
con();