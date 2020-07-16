function solution(x) {
    let str = Array.from(x.toString());
    return x % str.reduce((acc, curr) => acc += parseInt(curr), 0) === 0;
}
