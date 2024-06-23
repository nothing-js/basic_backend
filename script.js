// fundamental of javasrcipt
// arrays and objects 
// function return
// async js coding 

//forech map filter find index of 
let array = [1,2,3,4,5,6];
array.forEach((x) => {
    x + 1;
})

console.log(array)

var arr =  array.map((val) => {
    return val + 1;
})

console.log(arr)

var arr2 = array.filter((x) => {
    return x == 3;
})

console.log(arr2);

var arr3  = array.find((val) => {
    if(val === 3 ) return true;
    else return;
})

console.log(arr3);