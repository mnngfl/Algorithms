function solution(dartResult) {
    let result = [];
    let regex = /\d{1,2}\w[\*|\#]?/g;
    let rounds = dartResult.match(regex);
    
    rounds.forEach((round, index) => {
        let score = Number(round.match(/\d+/)[0]);
        let bonus = round.match(/[A-Z]/)[0];
        bonus = bonus === 'S' ? 1 : (bonus === 'D' ? 2 : 3);
        let pow_score = Math.pow(score, bonus);
        
        if (round[round.length - 1] === '*') {
            // 스타상
            pow_score *= 2;
            if (result[index-1]) result[index-1] *= 2;
        } else if (round[round.length - 1] === '#') {
            // 아차상
            pow_score *= -1;
        }
        result.push(pow_score);
    });
    return result.reduce((a, c) => a + c, 0);
}
