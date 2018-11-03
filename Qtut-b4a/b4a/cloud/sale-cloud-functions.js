const Sale = Parse.Object.extend('Sale');
const Product = Parse.Object.extend('Product');
//----------------- Cloud Code for Sale Functions -----------------//

/**
 * @name saleCreate
 * @description create a new sale
 * @param {boolean} fixed
 * @param {array<string>} products
 * @param {string} mainProductObjectId
 * @param {boolean} card
 * @param {date} closeTime
 * @param {geopoint} location
 * @param {string} locationDescription
 * @param {string} creatorObjectId
 */
Parse.Cloud.define('saleCreate', (request, response) => {
    const fixed = request.params.fixed;
    const products = request.params.products;
    const mainProductObjectId = request.params.mainProductObjectId;
    const card = request.params.card;
    const closeTime = request.params.closeTime;
    const location = request.params.location;
    const locationDescription = request.params.locationDescription;
    const creatorObjectId = request.params.creatorObjectId;

    const userQuery = new Parse.Query(Parse.User);
    userQuery.equalTo('objectId', creatorObjectId);
    userQuery.first({ useMasterKey : true })
        .then((creator) => {
            if (creator != undefined) {
                const productQuery = new Parse.Query(Product);
                productQuery.containedIn('objectId', products);
                productQuery.find({ useMasterKey : true })
                    .then((fetchedProducts) => {
                        if (fetchedProducts.length > 0) {
                            const mainProductQuery = new Parse.Query(Product);
                            mainProductQuery.equalTo('objectId', mainProductObjectId);
                            mainProductQuery.first({ useMasterKey : true })
                                .then((mainProduct) => {
                                    if (mainProduct != undefined) {
                                        const sale = new Sale();
                                        sale.set('fixed', fixed);
                                        sale.set('products', fetchedProducts);
                                        sale.set('mainProductObjectId', mainProductObjectId);
                                        sale.set('mainProduct', mainProduct);
                                        sale.set('card', card);
                                        sale.set('closeTime', closeTime);
                                        sale.set('location', location);
                                        sale.set('locationDescription', locationDescription);
                                        sale.set('userObjectId', creatorObjectId);
                                        sale.set('user', creator);
                                        sale.set('active', true);
                                        sale.save(null, { useMasterKey : true })
                                            .then((newSale) => {
                                                response.success(newSale);
                                            }).catch((err) => {
                                                response.error(err.code, err.message);
                                            });
                                    }
                                    else {
                                        response.error(404, `Main product not found for objectId ${mainProductObjectId}`);
                                    }
                                }).catch((err) => {
                                    response.error(err.code, err.message);
                                });
                        }
                        else {
                            response.error(404, `No products were found for ObjectsIds ${products}`);
                        }
                    }).catch((err) => {
                        response.error(err.code, err.message);
                    });
            }
            else {
                response.error(404, `User not found for ${userObjectId}`);
            }
        }).catch((err) => {
            response.error(err.code, err.message);
        });
});