function solution(x, n) {
    let answer = [x];
    for (let i = 0; i < n - 1; i++) {
        answer.push(answer[i] + x)
    }
    return answer;
}

// ES6
// function solution(x, n) {
//     return [...Array(n).keys()].map(v => (v + 1) * x);
// }
