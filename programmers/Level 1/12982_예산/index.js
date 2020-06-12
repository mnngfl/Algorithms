function solution(d, budget) {
    let answer = 0;
    
    d.sort((a, b) => a - b).forEach(element => {
        if (budget >= element) {
            budget -= element;
            answer++;
        }
    });
    
    return answer;
}
