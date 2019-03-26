/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import request from 'request';
import config from 'config';

class PaymentService {
  constructor() {
    this.callApi = this.callApi.bind(this);
    this.paymentOrder = this.paymentOrder.bind(this);
  }

  // we could make an new file 'api.js', just for calling api and config for other servers
  callApi(method = 'POST', url, data = {}, requestId) {
    const { payment } = config;
    return new Promise((resolve, reject) => {
      try {
        request({
          method,
          url: `${payment.host}/${url}`,
          headers: {
            Authorization: payment.token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }, (err, response, body) => {
          console.log(err, body)
          if (err) return reject(err);
          return resolve(body);
        });
      } catch (e) {
        reject({ ...e });
      }
    });
  }

  paymentOrder(order, requestId) {
    return this.callApi('POST', 'payment', order, requestId)
      .then(result => result === 'true');
  }
}

export default PaymentService;
