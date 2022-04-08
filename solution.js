function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(Y <= X) {
        return 0;
    }

    var result = 0;
    if(Y < D) {
        result = 1;
    }

    if(Y%D != 0 && Y%D > X) {
        result = Math.floor(Y/D) + 1;
    } else if(X >= D) {
        result = Y%D == 0 ? Math.floor(Y/D) - Math.floor(X/D) : Math.floor(Y/D) - Math.floor(X/D) +1;
    } else {
        result = Math.floor(Y/D);
    }
    return result;

}
