var arr = ['name'];
var obj = {};
obj.name = 'shubham';
obj[arr] = "you";
console.log(obj.name);
console.log(obj[[[['name']]]]);


Promise.resolve(3).then((res) => {
    console.log(res);
    setTimeout(() => {
      console.log(7);
    }, 100);
  
    setTimeout(() => {
      console.log(8);
    }, 0);
  });
  
  setTimeout(() => {
    console.log(4);
  }, 100);
  
  setTimeout(() => {
    console.log(9);
  }, 0);
  
  setTimeout(() => {
    console.log(5);
  }, -100);
  
  console.log(6);


  var fullName = "Sunil Gavaskar";
var obj = {
    fullName: 'Sachin Tendulkar',
    prop: {
        fullName: 'Rohit Sharma',
        getFullName: function() {
            return this.fullName;
        }
    },
    getMyName: function() {
        return this.fullName;
    },
    getFirstName: () => {
        return this.fullName.split(' ')[0];
    },
    getLastName: (function() {
        return this.fullName.split(' ')[1]
    })()
}
console.log(obj.prop.getFullName()) // Rohit Sharma
console.log(obj.getFirstName()) // Sunil
console.log(obj.getMyName()) // Sachin Tendulkar
console.log(obj.getLastName) // Gavaskar
