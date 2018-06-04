function test(num) {
		var times = 2;
		var closure = function () {
				var tt = 1;
				return times * 2;
		}
		return closure();
}
console.log(test(10));
console.log(times);
function doSomething() {
		console.log(this);
}
element.onclick = function () {
		console.log(this)
}

gsm = {
	name: 'flf',
	onclick(){
		console.log(this)
		doSomething()
	}
}

element.onclick = function () {
		doSomething()
}