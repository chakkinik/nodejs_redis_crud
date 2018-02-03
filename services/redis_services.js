

var redis = require('redis');

var client = redis.createClient();


	
client.on('error',function(err){
	console.log("Error" +err);
});




function generate_key( id ){

  
  var key =  "key" + id

  return key

}





var redis_service = {
 
 select : function(id,cb){

 	//var key =generate_key(id);
     var val;
 	 client.get(id, function(err,res){
 		if(err){
 		return cb(err);
 		}
 		debugger;
 	 val =res;

 	  	console.log("the redis value",val)
 	   return cb(val);

 	});
  

 }




}

module.exports = redis_service;