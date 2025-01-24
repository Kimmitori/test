const db = require('./db.services.js');
exports.findAll = function () {
    return new Promise((resolve, reject) =>{
        db.execute('SELECT * FROM users')
        .then(([rows,fields]) =>{
            resolve(rows);
        }).catch(err => {
            console.log(err);
            reject(err);
        });
    });
};