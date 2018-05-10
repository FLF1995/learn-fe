function test(num){
	var times = 2;
	var closure = function(){
		var tt = 1;
		return times * 2;
	}
	return closure();
}
console.log(test(10));
console.log(times);