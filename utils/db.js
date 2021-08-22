import mongoose from "mongoose";

// we have this setup to save the server resources
// to check the resutls on every request...that's it,,,
const connection = {};
//  1.connect function
const connect = async () => {
  if (connection.isConnected) {
    console.log("Alread connected,No need to connect");
    return;
  }
  if (mongoose.connections[0].length > 0) {
    connection.icConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("Use prevoius connection");
      return; // return is necassary becuase it will return by a function
    } else if (connection.isConnected !== 1) {
      //if we'r not connected just kill the all states and make a new connection
      await mongoose.disconnect();
    }
  }
  //   make here a new connection
  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("New connection established");
  connection.isConnected = db.connections[0].readyState;
};
// 2.disconnect
const disconnect = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected as in development mode");
    }
  }
};
// convert into strings but it must be only the strings,number,boolean otherwise it will
// raise an error
export const DataToObj = (doc) => {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
};
const db = { connect, disconnect, DataToObj };
export default db;
