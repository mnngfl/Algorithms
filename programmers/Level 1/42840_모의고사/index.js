function solution(answers) {
    let answer = [];
    let supo1 = [1, 2, 3, 4, 5];
    let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let score1 = scoring(supo1, answers);
    let score2 = scoring(supo2, answers);
    let score3 = scoring(supo3, answers);
    
    let max = Math.max(score1, score2, score3);
    if (score1 == max) answer.push(1);
    if (score2 == max) answer.push(2);
    if (score3 == max) answer.push(3);
    return answer;
}

function scoring(rule, answers) {
    return answers.filter((val, i) => val == rule[i % rule.length]).length;
}
