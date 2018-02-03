

var controller  = require('./../controller/demo_redis')



var crud={

select: function(req,res,next) 
{

 var params = req.params;

 debugger;

 controller.select(params,function(err,res){
 	debugger;
 	if(err){
 		next(err);
 	} 
     
     console.log("response is ",res); 
 	//next(res);
 });

},

insert : function(req,res,next) {



},

delete : function(req,res, next){



}



}

module.exports = crud;
