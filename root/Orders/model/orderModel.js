import Base from './base';

export const Status = {
  Created: 'Created',
  Confirmed: 'Confirmed',
  Cancelled: 'Cancelled',
  Delivered: 'Delivered',
};

class OrderModel extends Base {

  constructor() {
    super({ name: 'order' });

    this.updateStatus = this.updateStatus.bind(this);
    this.list = this.list.bind(this);
  }

  updateStatus(obj, status) {
    return this.db.find(obj.id)
      .then(result => this.db.update({ ...result, status }));
  }
}

export default OrderModel;
