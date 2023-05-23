const mongoose = require("mongoose");
const config = require("config");
// mongoURL
const connectDB = () => {
  mongoose
    .connect(config.get(" mongodb+srv://poru:poru@cluster0.pmozonm.mongodb.net/?retryWrites=true&w=majority"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err.message));
};

module.exports = connectDB;