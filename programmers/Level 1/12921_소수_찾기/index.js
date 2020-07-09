function solution(n) {
    let arr = [...Array(n + 1).keys()];
    let end = Math.ceil(Math.sqrt(n));
    
    for (let i = 2; i <= end; i++) {
        if (arr[i]) {
            for (let j = i + i; j <= n; j += i) {
                arr[j] = undefined;
            }
        }
    }
    
    return arr.slice(2).filter(val => val !== undefined).length;
}
