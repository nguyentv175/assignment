import Db from '../db';

class Base {

    constructor({ name = '' }) {
        this.db = new Db({ model: name });

        this.create = this.create.bind(this);
    }

    create(obj, requestId) {
        //log start
        return this.db.insert(obj)
            .then(result => {
                //log end
                return result;
            })
            .catch(err => {
                //log err
                return {
                    ...err,
                    requestId
                }
            });
    }

    update(obj, requestId) {
         //log start
        return this.db.update(obj)
            .then(result => {
                //log end
                return result;
            })
            .catch(err => {
                //log err
                return {
                    ...err,
                    requestId
                }
            });
    }

    find(id, requestId) {
        //log start
       return this.db.find(id)
           .then(result => {
               //log end
               return result;
           })
           .catch(err => {
               //log err
               return {
                   ...err,
                   requestId
               }
           });
   }
}

export default Base;
