/* eslint-disable prefer-promise-reject-errors */
// This object to store all data
const Data = {};

// this function just make a change to get an error
function makeAChangeToError() {
  // return false;
  return (Math.ceil(Math.random()) % 5) === 0;
}

class Db {
  constructor({ model }) {
    this.model = model;

    this.insert = this.insert.bind(this);
  }

  insert(obj) {
    return new Promise((resolve, reject) => {
      // just pretent db take some times to insert
      const data = Data[this.model] || [];
      setTimeout(() => {
        if (makeAChangeToError()) {
          return reject({
            message: 'error',
          });
        }
        const { length } = data;
        const insertObj = {
          ...obj,
          id: length ? (data[length - 1].id + 1) : 1,
        };
        data.push(insertObj);
        Data[this.model] = data;
        return resolve(insertObj);
      }, 300);
    });
  }

  find(id) {
    return new Promise((resolve, reject) => {
      // just pretent db take some times to find
      setTimeout(() => {
        const data = Data[this.model];
        if (!data) return reject({ message: 'not found', dbCode: 404 });
        const tmp = data.find(o => o.id === id);
        if (!tmp) return reject({ message: 'not found', dbCode: 404 });
        return resolve(tmp);
      }, 300);
    });
  }

  update(obj) {
    return new Promise((resolve, reject) => {
      // just pretent db take some times to update
      setTimeout(() => {
        if (makeAChangeToError()) {
          return reject({
            message: 'error',
            dbCode: 500,
          });
        }
        if (!Data[this.model]) return reject({ message: 'not found', dbCode: 404 });
        const tmp = Data[this.model].find(o => o.id === obj.id);
        if (!tmp) return reject({ message: 'not found', dbCode: 404 });
        // just update status only
        tmp.status = obj.status;
        return resolve(tmp);
      }, 300);
    });
  }

  list() {
    return new Promise((resolve, reject) => {
      // just pretent db take some times to insert
      setTimeout(() => {
        if (!Data[this.model]) reject({ message: 'not found', dbCode: 404 });
        resolve(Data[this.model]);
      }, 300);
    });
  }
}

export default Db;
