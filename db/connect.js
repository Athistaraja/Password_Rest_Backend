const mongoose = require ('mongoose');

const mongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connection Established");
    }catch (error) {
        console.log("Error while connecting DB:", error);
    };
};

module.exports = mongodb;