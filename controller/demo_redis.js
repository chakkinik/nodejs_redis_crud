

var services  = require("../services/redis_services");

var demo_redis = {


select : function (params,cb){

var id = params.id
services.select(id,cb);

}

}


module.exports = demo_redis;