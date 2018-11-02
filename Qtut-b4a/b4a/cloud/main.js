Parse.Cloud.define('hello', (request, response) => {
    response.success('Hello world!');
});

Parse.Cloud.define('setUsersAcls', (request, response) => {
    const currentUser = request.user;
    currentUser.setACL(new Parse.ACL(currentUser));
    currentUser.save(null, {
        useMasterKey: true,
        success: (object) => {
            response.success('Acls Updated');
        },
        error: (object, error) => {
            response.error('Got an error ' + error.code + ' : ' + error.description);
        }
    });
});

Parse.Cloud.define('getUser', (request, response) => {
    const userObjectId = request.params.id;
    const query = new Parse.Query(Parse.User);
    query.equalTo('objectId', userObjectId);
    query.limit(1);
    query.first({ useMasterKey: true })
        .then(user => {
            if (user != undefined) {
                response.success(user);
            } 
            else {
                response.error(`User not found for ${userObjectId}`);
            }
        })
        .catch (error => {
            response.error('- Error: ' + error.code + ' ' + error.message);
        });
});