function solution(arr, divisor) {
    arr = arr.filter(elem => elem % divisor === 0);
    return arr.length > 0 ? arr.sort((a, b) => a - b) : [-1];
}
