const morgan = require('morgan');
const express = require('express');

const app = express();
require('./services/passport');
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5150;

app.use(morgan('combined'));

app.listen(PORT, () => {
  console.log(`listening on PORT:${PORT}`);
});
