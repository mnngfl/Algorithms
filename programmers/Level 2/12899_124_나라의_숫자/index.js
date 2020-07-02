function solution(n) {
    let answer = '';
    let quot = n;

    while (quot > 0) {
        if (quot % 3 === 0) {
            answer = '4' + answer;
            quot = Math.floor(quot / 3) - 1;
        } else {
            answer = Number(quot % 3).toString() + answer;
            quot = Math.floor(quot / 3);
        }
    }
    
    return answer;
}
