// const inputArray = ["aba", "bbb", "bab"];
const inputArray = ["ab", "bb", "aa"]

const sortedArray = inputArray.sort();
console.log(sortedArray)

const n = inputArray.length;
const m = inputArray[0].length;

const checkOneCharacterDiffering = (n,m) => {
    let count;
    for(let i=0; i<n-1; i++) {
        count = 0;
        for(let j=0; j<m; j++) {
            console.log(inputArray[i].charCodeAt(j));
            console.log(inputArray[i+1].charCodeAt(j));
            console.log("---------")
            if(inputArray[i].charCodeAt(j) !== inputArray[i+1].charCodeAt(j) ) {
                count++;
                console.log(count)
                if(count>1) {
                    return false;
                }
            }   
        }
    }
    return true
}

const result = checkOneCharacterDiffering(n,m);
console.log(result)
