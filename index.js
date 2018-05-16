const morgan = require('morgan');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5150;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(PORT, () => {
  console.log(`listening on PORT:${PORT}`);
});
