const Parse = require('parse/node');
const keys = require('./configs/keys');

//* Init Parse Conn *//
Parse.initialize(keys.b4a_app_id, keys.b4a_js_key, keys.b4a_master_key);
Parse.serverURL = 'https://qtut.back4app.io';

//* Parse Cloud Funcs *//

// Hello World!
module.exports.hello = () => {
    return new Promise((resolve, reject) => {
        Parse.Cloud.run('hello')
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};

// Set User ACL
module.exports.setUsersAcls = (user) => {
    return new Promise((resolve, reject) => {
        Parse.Cloud.run('setUsersAcls', {'user' : user})
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

// User SignUp
module.exports.signUp = (email, username, password) => {
    return new Promise((resolve, reject) => {
        const user = new Parse.User();
        user.setEmail(email);
        user.setUsername(username);
        user.setPassword(password);

        user.signUp(null)
            .then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
    });
};

// User logIn
module.exports.logIn = (username, password) => {
    return new Promise((resolve, reject) => {
        Parse.User.logIn(username, password)
            .then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
    });
};

// User Request Password Reset
module.exports.requestPasswordReset = (email) => {
    return new Promise((resolve, reject) => {
        Parse.User.requestPasswordReset(email)
            .then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
    });
};

// Get User
module.exports.getUser = (userId) => {
    return new Promise((resolve, reject) => {
        Parse.Cloud.run('getUser', { 'id' : userId })
            .then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
    });
};