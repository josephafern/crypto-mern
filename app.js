const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const passport = require('passport');
const bodyParser = require('body-parser');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/prices", prices);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));