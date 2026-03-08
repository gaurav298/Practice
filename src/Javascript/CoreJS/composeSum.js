function add1(a,b,c) {
    
	return a + b + c + 1;
} 

function add2(b) {
  
	return b + 5;
} 

function add3(c) {
  
	return c + 3;
}

function compose() {
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    return function(...args) {
        let res = 0;
        while(arr.length) {
            let func = arr.pop();
            if (!res) {
                res = func(...args);
            } else {
                res = func(res);
            }
        }
        return res;
    }
}

console.log(add3(add2(add1(1,2,3)))) //15

console.log(compose(add3,add2,add1)(1,2,3))