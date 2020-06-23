function solution(n, lost, reserve) {
    let filtered_reserve = reserve.filter(item => lost.indexOf(item) === -1);
    let filtered_lost = lost.filter(item => reserve.indexOf(item) === -1);
    let answer = n - filtered_lost.length;
    
    for(let i of filtered_reserve) {
        let prev_i = filtered_lost.indexOf(i-1);
        let next_i = filtered_lost.indexOf(i+1);
        
        if (prev_i > -1) {
            filtered_lost.splice(prev_i, 1);
            answer++; 
        } else if (next_i > -1) {
            filtered_lost.splice(next_i, 1);
            answer++;
        }        
    };
    
    return answer;
}
