const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

// config
const PORT = process.env.PORT || 5150;
require('./models/User'); // load model before running passport service
require('./services/passport');

mongoose.connect(keys.mongoURI);

// init app
const app = express();

// middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routing
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

app.listen(PORT, () => {
  console.log(`listening on PORT:${PORT}`);
});
