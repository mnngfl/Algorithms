function solution(s) {
    let numbers = s.split(" ").map(Number);
    let min = Math.min.apply(null, numbers);
    let max = Math.max.apply(null, numbers);
    
    return `${min} ${max}`
}
