import Base from './baseController';

class paymentController extends Base {

    constructor() {
        super();
    }

    payment(data) { 
        if(data.id % 2 === 0) { 
            return true;
        }
        return false;
    }

}

export default paymentController;
