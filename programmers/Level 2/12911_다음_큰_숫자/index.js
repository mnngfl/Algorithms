function solution(n) {
    let answer = n + 1;
    
    while (true) {
        if (count(n) === count(answer)) break;
        answer++;
    }
        
    return answer;
}

function count(n) {
    return (n.toString(2).match(/1/g) || []).length;
}
