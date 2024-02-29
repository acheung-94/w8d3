const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback){




}

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}?`, response => {
        if (response === "yes") {
            callback(true);
        }else{
            callback(false);
        }
    })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
            if (isGreaterThan){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                madeAnySwaps = true;
                i += 1;
                innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
            }else{
                i += 1;
                innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
            }
        })
    };

    if (i === (arr.length -1)) {
        outerBubbleSortLoop(madeAnySwaps);
    };
}