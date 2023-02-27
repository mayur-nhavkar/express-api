mongoose= require('mongoose');


const MONGO_URL = `mongodb://127.0.0.1:27017/data`;


class connect {

 connectMongoDB = () => {
  mongoose.connect(
    MONGO_URL,
    { useNewUrlParser: true }
  );

  mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB(${MONGO_URL}) Successfully on ${new Date()}`);
  });
  
  mongoose.connection.on('error', (error) => {
    console.log(`Error connecting to MongoDB(${MONGO_URL}) on ${new Date()}`, error);
  });
};

}
module.exports = new connect();
