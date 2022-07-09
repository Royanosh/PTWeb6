function lower(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var temp = "";
        for (var j = 0; j < arr[i].length; j++) {
            temp += char_toLowerCase(arr[i][j]);
        }
        arr[i] = temp;
    }
    return arr;
}
function char_toLowerCase(ch) {
    if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
        return String.fromCharCode(ch.charCodeAt() + 32);
    }
    return ch;
}
var arr = ["MA", "SA", "I", "SCH", "OOL"];
console.log(lower(arr));