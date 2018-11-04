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
    //     'name' : 'PCL',
    //     'price' : 4,
    //     'description' : 'famoso pao com linguiça',
    //     'pictures' : ['https://i.imgur.com/iVtRVWj.jpg'],
    //     'tags' : ['sanduiche', 'quentinho'],
    //     'creatorObjectId' : 'j7zw7z0OA2'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('productUpdate', {
    //     'product' : {
    //         'objectId' : 'i9cK5UgcEP',
    //         'price' : 3
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('productDelete', {
    //     'productObjectId' : 'i9cK5UgcEP'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('productGet', {
    //     'productObjectId' : 'i9cK5UgcEP'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });
    
    // Parse.Cloud.run('productGetByFilter', {
    //     'filter' : {
    //         'tags' : ['quentinho', 'salgadoce'],
    //         'userObjectId' : 'j7zw7z0OA2'
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });
}

//----------------- Cloud Code Tests for Sale Functions -----------------//
{
    // Parse.Cloud.run('saleCreate', {
    //     'fixed' : true,
    //     'products' : ['i9cK5UgcEP', 'NMh7ECSMIa'],
    //     'mainProductObjectId' : 'i9cK5UgcEP',
    //     'card' : true,
    //     'closeTime' : new Date(2018, 10, 5, 17, 30),
    //     'location' : new Parse.GeoPoint({latitude : -14.798976, longitude : -39.172180}),
    //     'locationDescription' : 'NBCGIB Sala 18',
    //     'creatorObjectId' : 'j7zw7z0OA2'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('saleUpdate', {
    //     'sale' : {
    //         'objectId' : 'BP3LANkljS',
    //         'fixed' : false
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('saleDelete', {
    //     'saleObjectId' : 'BP3LANkljS'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('saleGet', {
    //     'saleObjectId' : 'OwP3YRScv3'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('saleGetByFilter', {
    //     'filter' : {
    //         'fixed' : false
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });

    // Parse.Cloud.run('saleGetByLocationRadius', {
    //     'location' : {
    //         'latitude' : -14.794944,
    //         'longitude' : -39.175435 
    //     },
    //     'radius' : 0.6
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.error(err);
    // });
}