let env = process.env.NODE_ENV || 'development'

let settings = require('./config/settings')[env]

const express = require('express');
const app = express();

require('./config/database')(settings)
require('./config/routes')(app)



const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
