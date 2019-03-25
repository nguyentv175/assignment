class BaseController {

    constructor() {
        this.handleError = this.handleError.bind(this)
    }

    //Some Base functions 
    handleError(err) {
        console.log(err)
        return {
            code: 500,
            ...err,
        };
    }

}

export default BaseController;
