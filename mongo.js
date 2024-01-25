const express = require("express");
const app = express();
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/contact";

async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  }
}

connectDB();

// Additional code for handling routes or other configurations can be added here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port8 ${PORT}`);
});

//Use model.find() to Search Your Database
  var query = Person.find( {name: personName})
      query.exec(function (err, data) {
       if(err) return done(err)
      return done(null,data);     
      }); 
//Use model.findOne() to Return a Single Matching Document from Your Database
        Person.find({personName:name},(err,data)=>{
          if(err) return done(err)
           done(null,data)
        }); 
      
   