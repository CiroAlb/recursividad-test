function fibonacci(n){
    let sum = 0;
    let a = []
    if(n === 0){
        return [0]
    }
    if(n === 1){
        return [0,1]
    }
    if(n>1){a.push(0);a.push(1)}
    for(let i = 2; i <= n; i++){
        a.push(a[i-1] + a[i-2]);
    }
    return a
}
console.log(fibonacci(0));

console.log(fibonacci(1));

console.log(fibonacci(10));

function fibonacciRecursive(n, array = []) {
    
    if (n < 2) {
        return [1];   
    }
    if (n < 3) {
        return [1,1];
    }

    var a = fibonacciRecursive(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a;
}
  

console.log(fibonacciRecursive(0));

console.log(fibonacciRecursive(1));

console.log(fibonacciRecursive(8));

const array = [5,1,2,6,3,4];

function mergeSort(arr){
    if(arr.length === 1){
        return arr
    }

    let arr1 = arr.slice(0, Math.floor(arr.length/2));
    let arr2 = arr.slice(Math.floor(arr.length/2), arr.length);

    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);
    
    return merge(arr1,arr2);
}

function merge(arr1 , arr2){
    let arr3 = [];

    while(arr1.length > 0 && arr2.length > 0){
        if(arr1[0] > arr2[0]){
            arr3.push(arr2[0]);
            arr2.shift();
        }else{
            arr3.push(arr1[0]);
            arr1.shift();
        }
    }

    while(arr1.length > 0){
        arr3.push(arr1[0]);
        arr1.shift();
    }


    while(arr2.length > 0){
        arr3.push(arr2[0]);
        arr2.shift();
    }

    return arr3;
}

console.log(mergeSort(array));