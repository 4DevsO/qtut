const Parse = require('parse/node');
const Keys = require('./configs/keys');

Parse.initialize(Keys.b4a_app_id, Keys.b4a_js_key, Keys.b4a_master_key);
Parse.serverURL = 'https://qtut.back4app.io';
//----------------- Cloud Code Tests for User Functions -----------------//
{
    // Parse.Cloud.run('userSignUp', {
    //     'username' : 'gabriel',
    //     'email' : 'gabriel@example.com',
    //     'password' : 'some_pass'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('userSignIn', {
    //     'username' : 'gabriel',
    //     'password' : 'some_pass'
    // }).then((result2) => {
    //     console.log(result2);
    // }).catch((err2) => {
    //     console.error(err2);
    // });

    // Parse.Cloud.run('userUpdate', {
    //     'user' : {
    //         'objectId' : 'id',
    //         'name' : 'novo nome'
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('userGet', {
    //     'userObjectId' : 'id'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('userResetPassword', {
    //     'email' : 'gabriel@example.com'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('userDelete', {
    //     'userObjectId' : 'id'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });
}

//----------------- Cloud Code Tests for Product Functions -----------------//
{
    // Parse.Cloud.run('productCreate', {
    //     'name' : 'quiches',
    //     'price' : 2.5,
    //     'description' : 'quiches quentinhos',
    //     'pictures' : ['https://i.imgur.com/COQWrQy.jpg', 'https://i.imgur.com/h9o3LpK.jpg'],
    //     'tags' : ['salgadoce', 'quentinho'],
    //     'creatorObjectId' : 'j7zw7z0OA2'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('productUpdate', {
    //     'product' : {
    //         'objectId' : 'id',
    //         'price' : 3
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('productDelete', {
    //     'productObjectId' : 'id',
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });
}