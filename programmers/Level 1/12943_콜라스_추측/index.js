function solution(num) {
    let cnt = 0;
    while (num !== 1) {
        cnt++;

        if (num % 2 === 0) {
            num /= 2;         
        } else {
            num = num * 3 + 1;
        }

        if (cnt === 500) {
            cnt = -1;
            break;
        }
    }
    return cnt;
}

// 재귀 풀이
//const solution = num => collatzConjecture(num, 0);

// const collatzConjecture = (num, cnt) => {
//     return (cnt > 500) ? -1 : (num == 1 ? cnt : collatzConjecture(processCollatz(num), cnt + 1));
// }

// const processCollatz = num => (num % 2 == 0) ? (num / 2) : (num * 3 + 1);
