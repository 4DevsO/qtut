const UserCloudFunctions = require('./user-cloud-functions');
const ProductCloudFunctions = require('./product-cloud-functions');

Parse.Cloud.define('hello', (request, response) => {
    response.success('Hello world!');
});