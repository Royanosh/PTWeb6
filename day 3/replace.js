function replace_word_in_sentence(sentence, word, replace_with) {
    var n = sentence.length;
    var arr = [];
    var temp = "";
    for (var i = 0; i < n; i++) {
        if (sentence[i] === " ") {
            arr.push(temp);
            temp = "";
        } else {
            temp += sentence[i];
        }
    }
    arr.push(temp);
    temp = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].includes(word)) {
            var m = arr[i].length;
            var k = word.length;
            for (var j = 0; j <= m - k; j++) {
                if (arr[i].slice(j, k + j) === word) {
                    var new_temp = arr[i].slice(0, j) + replace_with + arr[i].slice(k + j);
                    arr[i] = new_temp;
                    break;
                }
            }
            break;
        }
    }
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            result += arr[i];
        } else {
            result += arr[i] + " ";
        }
    }
    return result;
}
var ans = replace_word_in_sentence("boy", "b", "bad");
console.log(ans);
ans = replace_word_in_sentence("I am a good bol", "bo", "gir");
console.log(ans);