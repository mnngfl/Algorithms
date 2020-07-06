function solution(brown, yellow) {
    let answer = [];
    // brown + yellow = 가로 * 세로
    let mulXY = brown + yellow;
    for (let x = mulXY; x >= 3; x--) {
        if (mulXY % x === 0) {
            let y = mulXY / x;
            
            if ((x - 2) * (y - 2) === yellow && x >= y) {
                answer.push(x);
                answer.push(y);
            }
        }
    }
    return answer;
}
