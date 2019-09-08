console.log('07-spread-operator');
// http://es6-features.org/#SpreadOperator

var originObj = {
  name: 'milkmidi',
  age: 18
}

var cloneObj = {};
for(var a  in originObj){
  cloneObj[a] = originObj[a];
}

console.log('originObj', originObj);
console.log('cloneObj', cloneObj);

var cloneObj2 = {
  ...originObj
}
console.log('cloneObj2', cloneObj2);