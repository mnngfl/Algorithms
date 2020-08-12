function solution(n, arr1, arr2) {
    let answer = [];

    for (let i = 0; i < n; i++) {
        let code = (arr1[i] | arr2[i]).toString(2);
        if (code.length < n) {
            code = '0'.repeat(n - code.length) + code;
        }
        code = code.replace(/[1]/g, '#').replace(/[0]/g, ' ');
        answer.push(code);
    }

    return answer;
}
