const Parse = require('parse/node');
const Keys = require('./configs/keys');

Parse.initialize(Keys.b4a_app_id, Keys.b4a_js_key, Keys.b4a_master_key);
Parse.serverURL = 'https://qtut.back4app.io';

// const createNewUser = (username, password, email) => {
//     return new Promise((resolve, reject) => {
//         const user = new Parse.User();
//         user.set('username', username);
//         user.set('password', password);
//         user.set('email', email);

//         user.signUp(null)
//             .then((user) => {
//                 resolve(user);
//             }).catch((user, err) => {
//                 reject(err);
//             });
//     });
// };

// createNewUser('gabriel', '32562033Ga', 'gabrielrsantoss@icloud.com')
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.error(err);
//     });

const userObjectId = "xtEKr8vCSD";
Parse.Cloud.run('getUser', {'id' : userObjectId})
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.error(err);
    });
