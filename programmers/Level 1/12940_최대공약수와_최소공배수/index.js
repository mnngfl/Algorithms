function solution(n, m) {
    let gcd = 0;
    let lcm = n * m;

    if (n < m) {
        [n, m] = [m, n];
    }

    while (m != 0) {
        let r = n % m;
        n = m;
        m = r;
    }
    gcd = n;
    lcm = lcm / gcd;

    return [gcd, lcm]
}
