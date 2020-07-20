function solution(n) {
    let sqrtN = parseInt(Math.sqrt(n)); // parseInt 안하면 실패
    return (n == sqrtN * sqrtN) ? (Math.pow(sqrtN + 1, 2)) : -1;
}
