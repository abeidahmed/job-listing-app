const mongoose = require("mongoose");
const connectionURI = process.env.MONGODB_URI;

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
