// double equals does type coercion
//
console.log(2==2);
console.log(2=='2'); // convert the string '2' to nunber 2 and then compares. returns true.
console.log(1 == true);
console.log(0 == false);
console.log(true == '1');
console.log(false == '0');
console.log(null == undefined);
console.log(NaN == NaN);
console.log([5] == '5');
console.log({} == {});
console.log([] == []);
console.log('' == '');
console.log('0' == '0');
console.log([5].toLocaleString());