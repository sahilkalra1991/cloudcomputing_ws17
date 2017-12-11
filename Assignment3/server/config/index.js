module.exports = {
    'server': {
        'port': '8080',
        'host': 'localhost'
    },
    'helloWorld_service': {
        'port': '9001',
        'host': 'hello-world-service'
    },
    'product_descp_service': {
        'port': '9002',
        'host': 'product-descp-service'
    },
    'product_price_service': {
        'port': '9003',
        'host': 'product-price-service'
    }
};

// UnComment this section to test on local
// You have to run 4 separate servers: 1 main server, 3 services
//module.exports = {
//    'server': {
//        'port': '8080',
//        'host': 'localhost'
//    },
//    'helloWorld_service': {
//        'port': '9001',
//        'host': 'localhost'
//    },
//    'product_descp_service': {
//        'port': '9002',
//        'host': 'localhost'
//    },
//    'product_price_service': {
//        'port': '9003',
//        'host': 'localhost'
//    }
//};