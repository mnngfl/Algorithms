function solution(clothes) {
    let num_cases = {};
    clothes.forEach(v => num_cases[`${v[1]}`] = num_cases[`${v[1]}`] + 1 || 1);
    return Object.values(num_cases).reduce((a, c) => a *= c + 1, 1) - 1;
}
