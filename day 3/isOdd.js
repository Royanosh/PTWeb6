function isOdd(num) {
    if (num % 2 == 0) {
        return false;
    } else {
        return true;
    }
}
function print_odd_number(n) {
    for (var i = 0; i <= n; i++) {
        if (isOdd(i)) {
            console.log(i);
        }
    }
}
print_odd_number(4);
print_odd_number(5);