var mongoose=require('mongoose');
var studentSchema=mongoose.Schema({
		n1:{
			type:String,
			required:true
		},
		p1:{
			type:String,
			required:true
		},
		s1:{
			type:String,
			required:true
		},
		gender:{
				type:String,
		},
});
var Student=module.exports=mongoose.model('scollections',studentSchema);
module.exports.ccrud=function(student,callback){
Student.create(student,callback)};
module.exports.getsd=function(callback,limit){
	Student.find(callback).limit(limit);
}
module.exports.gets=function(name,callback){
	console.log(name);
	Student.find({n1:name},callback)};
module.exports.dele=function(name,callback){
	console.log(name);
	Student.remove({n1:name},callback)};
module.exports.update=function(conditions, update, options,callback){	
Student.findOneAndUpdate(conditions, update, options,callback);
}