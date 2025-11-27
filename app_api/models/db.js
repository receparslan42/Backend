var mongoose = require("mongoose");

// Database URI
//var dbURI = "mongodb://localhost/add_venue";
var dbURI = "mongodb+srv://test:test@addvenue.bh1dnqj.mongodb.net/?appName=AddVenue"
mongoose.connect(dbURI);

// When successfully connected
mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + dbURI);
});

// If the connection throws an error
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});

// Capture app termination / restart events
process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected through app termination");
    process.exit(0);
  });
});

require("./venue");
