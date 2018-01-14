//alert(2)
//alert(1);
//console.log(123);
//document.write(421);

//try{
//	null.call();
//}catch(e){
//	console.log('错误');
//	console.log(e.message);
//}finally{
//	console.log("finally");
//}


//var a = {};
//
//switch(a){
//	case 1: console.log(1);
//	break;
//	case "2": console.log(2);
//	break;
//	default: console.log(3);
//	
//}

//js 没有块作用域
//for(var i =1 ; i<10;i++){
//	console.log(i );
//}
//
//console.log(i);

//var a = [1,2,3,4,5];
//for (var i in )a {
//	console.log(a[i]);
//}

//var x = {
//	haha:1,
//	hehe:2
//}
//
//for(var i in x){
//	console.log(x[i]);
//	
//}
//var i =1 ;
//do{
//	console.log(i+1); 
//	i++;
//}while( i<10); 

//function addArray(a,b){
//	var arr = [];
//	arr[0] = a;
//	arr[1] = b;
//	return arr;
//}
//
//var arrout = addArray(1,2);
//
//function addone(a){
//	return a+1;
//}
//
//for (var i in arrout) {
//	arrout[i] = addone(arrout[i]);
//}

//function addArray(a,b,f){
//		var arr = [];
//		arr[0] = f(a);
//		arr[1] = f(b);
//		return arr;
//}
//var arrout = addArray(1,2,function(x){return x*x;});




//document.write(arrout);

//function defaultvalue(x,y){
//	x = x||0; //默认值写法
//	y = y||1;
//	return x+y;
//}
//console.log(defaultvalue(2,1,3,4,5))


//var a = function (){
//	
//	for (var i in arguments) {
//		console.log(arguments[i]);
//	}
//	
//}
//
//a(1,2,3,4,5);
//
//function haha(a,b){
//	console.log("hehe");
//}

//function hehe(){
//	console.log(1); 
//	return function (){console.log("2")};
//}
//hehe()();


var good= function (){
	console.log("你好");
	return function(){
		console.log("阿内哈赛有"); 
	}
}

good = good();
good();
good();

//function haha(x){
//	var hehe = function(y){
//		 console.log(y+1);
//	}
//	return hehe(x);
//	
//}
