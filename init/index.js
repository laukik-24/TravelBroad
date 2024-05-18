const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const data = require("./data.js");


const MongoURL = "mongodb://127.0.0.1:27017/travelbroad";

main()
    .then(() => {
        console.log("successful connection to DB");
    })
    .catch((err) => {
        console.log(err);
    });                            
    async function main() {
        await mongoose.connect(MongoURL); 
}

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj , owner: "6644f2f837b719e48eb0bde1"}) );
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();