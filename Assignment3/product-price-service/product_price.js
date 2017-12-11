module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:productPrice,cmd:Get', get_product_price);

    //Method to search for the right productId from mockData
    function get_product_object(productId) {
      for(var i = 0; i < mockData.length; ++i) {
        var data_obj = mockData[i];
        if(data_obj.product_id == productId){
            return data_obj
        }
      }
      return null;
    }

    //To DO: add the pattern functions and describe the logic inside the function
    function get_product_price(msg, respond) {
        if(msg.productId){
            var data_obj = get_product_object(msg.productId);
            if(data_obj) {
                respond(null, { result: data_obj.product_price });
            }
        }
        respond(null, { result: ''});
    }

}