function solution(N, stages) {
    let failure_rates = [];
    let player_num = stages.length;
    let answer = [];
    
    for (let i = 1; i <= N; i++) {
        let failure_num = stages.filter(item => item == i).length;
        if (player_num != 0) {
            failure_rates[i - 1] = failure_num / player_num;
        } else {
            failure_rates[i - 1] = 0;
        }
        player_num -= failure_num;
    }
    
    while (answer.length < N) {
        let idx = failure_rates.indexOf(Math.max(...failure_rates));
        answer.push(idx + 1);
        failure_rates[idx] = -1;
    }
    
    return answer;
}
