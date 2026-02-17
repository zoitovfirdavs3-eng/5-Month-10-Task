const { default: mongoose } = require("mongoose");
const { ClientError } = require("shokhijakhon-error-handler");

async function dbConnection() {
    try{
        await mongoose.connect(process.env.dbUri);
        console.log(`DB successfully connected !`);
    }catch(err){
    console.log(`DB connection error: ${err.message}`);
    throw new ClientError(`DB connection error: ${err.message}`);
    };
};

module.exports = dbConnection;