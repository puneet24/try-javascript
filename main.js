// Write a simple JavaScript program/function to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output : 
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"


// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data : 
// console.log(first([7, 9, 0, -2])); 
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3)); 
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output : 
// 7
// [] 
// [7, 9, 0] 
// [7, 9, 0, -2] 
// []

//console.log(first([7, 9, 0, -2],6));
function fun3(arr, n) { 
    if(n == null) {
        return arr[0];
    }
    if(arr.length == 0) {
        return arr;
    }
    if(n < 0) {
        return [];
    }

    if(n > arr.length) {
        return arr;
    }

    var arr2 = [];
    for(var i=0;i < n;i++) {
        arr2.push(arr[i]);
    }

    return arr2;

    // var arr2 = [];

    // for(var i=0;i<n;i++) {

    // }

    return arr.slice(0, n);


    // dry run
    return arr2;
}

function fun(arr) {
    for(var i=0;i<arr.length;i++) {
        console.log(arr[i]);
    }
}

function fun2(arr) {
    var str = "";
    for(var i=0;i<arr.length;i++) {
        str = str + arr[i] + ",";
        // if(arr.length-1 != i) {
        //     str = str + ","
        // }
        if(arr.length-1 == i) {
            str = str.substring(0, str.length - 1);
        }
    }
    console.log(str);
    return str;
}



fun2(["Red", "Green", "White", "Black"]);

