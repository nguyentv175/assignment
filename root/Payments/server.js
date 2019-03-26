import authentication from './middleware/authentication';
import PaymentController from './controller/paymentController';

const express = require('express');

const app = express();
const port = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(authentication);

app.post('/payment', (req, res) => {
  const result = new PaymentController().payment(req.body);
  res.send(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
