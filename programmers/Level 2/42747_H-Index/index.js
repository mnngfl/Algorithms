function solution(citations) {
    let answer = 0;
    let i = 0;
    let n = citations.length;
    citations.sort((a, b) => a - b);
    
    while (i <= citations.length) {
        if (citations[i] <= n - i) {
            answer = citations[i];
        } else {
            if (n - i >= answer) {
                answer = n - i;
            } else {
                break;
            }
        }
        i++;
    }
    
    return answer;
}
