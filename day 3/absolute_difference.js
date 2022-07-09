function Diff(one, two) {
    var result = one - two;
    return result;
}
var ans = Diff(12, 14);
function absValue(ans) {
    if (ans >= 0) {
        return ans;
    } else {
        return -ans;
    }
}
console.log(absValue(ans));