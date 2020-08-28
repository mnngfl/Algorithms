function solution(a, b) {
    let answer = 0;
    if (a > b) [a, b] = [b, a];
    
    do {
        answer += a++;
    } while (a <= b);
    
    return answer;
}
