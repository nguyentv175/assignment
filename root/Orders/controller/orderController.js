import Base from './baseController';
import OrderModel, { Status } from '../model/orderModel';
import PaymentService from '../services/paymentService';

class OrderController extends Base {

    constructor() {
        super();
        this.orderModel = new OrderModel();
        this.paymentService = new PaymentService();

        this.create = this.create.bind(this);
        this.triggerPayment = this.triggerPayment.bind(this);
    }

    create(order, requestId) {
        //log: start insert with requestId
        return this.orderModel
            .create({
                ...order,
                status: Status.Created
            })
            .then(result => {
                //log: end insert with requestId
                //trigger payment after amount of time
                return this.triggerPayment(result, requestId);
            })
            .catch(this.handleError) // from BaseController
    }

    triggerPayment(order, requestId) {
        return this.paymentService.paymentOrder(order, requestId)
            .then(result => {
                if (result) {
                    return this.orderModel.updateStatus(order, Status.Confirmed)
                        .then(updatedStatusResult => {
                            setTimeout(() => {
                                this.orderModel.updateStatus(order, Status.Delivered);
                            }, 10 * 1000);
                            return updatedStatusResult;
                        });
                } else {
                    return this.orderModel.updateStatus(order, Status.Cancelled);
                }
            })
            .catch(err => {
                return this.orderModel.updateStatus(order, Status.Cancelled);
            });
    }

    list(requestId) {
        //log: start insert with requestId
        return this.orderModel.list(requestId)
            .then(result => {
                //log: end insert with requestId
                //trigger payment after amount of time
                return result;
            })
            .catch(this.handleError)
    }

}

export default OrderController;
