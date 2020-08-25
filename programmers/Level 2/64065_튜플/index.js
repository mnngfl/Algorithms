function solution(s) {
    let answer = new Set();
    s = s.slice(1, -1).match(/\{[\d]([\,]?[\d]?)*\}/g).sort((a, b) => a.length - b.length);
    s.forEach(subset => {
        subset.slice(1, -1).split(',').forEach(item => {
            answer.add(Number(item));
        });
    });
    return Array.from(answer);
}
