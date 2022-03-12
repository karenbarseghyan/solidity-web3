const firstInstanceNonRepeat = (str) => {
    let result = '_';
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
        count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count+= 1;
            }
        }
        if (count === 1) {
            result = str[i];
            break;
        }
    }
    return result;
}

console.log("test1:", firstInstanceNonRepeat("abacabad"));         /// c
console.log("test2:", firstInstanceNonRepeat("abacabaabacaba"));   /// _