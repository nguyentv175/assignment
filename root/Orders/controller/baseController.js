/* eslint-disable class-methods-use-this */
class BaseController {
  // Some Base functions
  handleError(err) {
    console.log(err);
    return {
      code: 500,
      ...err,
    };
  }
}

export default BaseController;
