function solution(heights) {
    let answer = [];
    
    for (let i = heights.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (heights[j] > heights[i]) {
                answer.push(j+1);
                break;
            }
            if (j === 0) {
                answer.push(0);
            }
        }
    }
    answer.push(0);
    return answer.reverse();
}
