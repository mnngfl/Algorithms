function solution(n) {
    var answer = 0;
    for (let i = 1; i <= parseInt(n/2); i++) {
        let sum = 0;
        let add = i;
        while (sum < n) {
            sum += add;
            add++;
        }
        if (sum == n) answer++;
    }
    return ++answer; // n 자기 자신을 더하는 경우
}
