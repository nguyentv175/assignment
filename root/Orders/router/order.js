import OrderController from '../controller/orderController';

const orderController = new OrderController();

export default function (app) {
  app.post('/order/create', (req, res) => {
    orderController.create(req.body)
      .then(result => res.send(result))
      .catch(err => res.send(err));
  });

  app.get('/order/list', (req, res) => {
    orderController.list()
      .then(result => res.send(result))
      .catch(err => res.send(err));
  });
}
