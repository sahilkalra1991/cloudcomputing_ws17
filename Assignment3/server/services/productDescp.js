/**
 * import the seneca package
 */
const seneca = require('seneca')();
const Promise = require('bluebird');
const config = require('../config');
/**
 * Convert act to Promise
 */
const act = Promise.promisify(seneca.client({ host: config.product_descp_service.host, port: config.product_descp_service.port }).act, { context: seneca });

/**
 * To DO: Define Service Method
 */
 const GET_PRODUCT_URL = { role: 'productURL', cmd: 'Get' };
 const GET_PRODUCT_NAME = { role: 'productName', cmd: 'Get' };

/**
 * Call Service Method
 */
const getProductURL = (productId) => {
    /**
     * To DO: Write act Method
     */
    return act(Object.assign({}, GET_PRODUCT_URL, { productId }));
};
const getProductName = (productId) => {
    /**
     * To DO: Write act Method
     */
    return act(Object.assign({}, GET_PRODUCT_NAME, { productId }));
};
module.exports = {
    getProductURL,
    getProductName
};
