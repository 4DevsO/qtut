const UserCloudFunctions = require('./user-cloud-functions');

Parse.Cloud.define('hello', (request, response) => {
    response.success('Hello world!');
});