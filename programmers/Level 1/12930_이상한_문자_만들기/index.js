function solution(s) {
    let answer = '';
    let words = [...s];
    let word_idx = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (!words[i].match(/[A-Za-z]/)) {
            word_idx = 0;
            answer += ' ';
            continue;
        };

        if (word_idx % 2 === 0) {
            answer += words[i].toUpperCase();
        } else {
            answer += words[i].toLowerCase();
        };
        
        word_idx++;
    }
    
    return answer;
}
