function solution(n) {
    if (n < 2) return n;
    let [a, b] = [0, 1];
    let temp;

    for (let i = 0; i < n - 1; i++) {
        temp = a;
        a = b % 1234567;
        b = (a + temp) % 1234567;
    }

    return b;
}
