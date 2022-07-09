function avgArr(arr) {
    var n = arr.length;
    if (n == 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum / n; //if not floor value required
    // else return Math.floor(sum/n);
}
var arr = [1, 2, 3, 4];
var result = avgArr(arr);
console.log(result);
console.log("florr value ", Math.floor(result));