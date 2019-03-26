import authentication from './middleware/authentication';
import authorization from './middleware/authorization';
import route from './router';

const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(authentication);
app.use(authorization);

route(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
