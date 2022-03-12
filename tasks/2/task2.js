const reverseParanthes = (input) => {
    let arr1 = [];
    for(let i = 0; i < input.length; i++) {
        if(input[i] != ')') {
            arr1.push(input[i]);
        } else {
            let temp = reverseSelectedString(arr1);
            arr1 = arr1.splice(0, arr1.lastIndexOf("("));
            arr1 = arr1.concat(temp);
        }
    }
    return arr1.join('');
}

const reverseSelectedString = (arr1) => {
    let arr2 = [];
    for(let j = arr1.length; j >= 0; j--) {
        if(arr1[j] != '(') {
            arr2.push(arr1[j]);
        } else {
            break;
        }
    }
    return arr2;
}


let x = reverseParanthes("(bar)")  //// rab
console.log("test1:", x)
x = reverseParanthes("foo(bar)baz");   //// foorabbaz
console.log("test2:",x)
x = reverseParanthes("foo(bar)baz(blim)");   //// foorabbazmilb
console.log("test3:",x)
x = reverseParanthes("foo(bar(baz))blim")  //// foobazrabblim
console.log("test4:",x)
