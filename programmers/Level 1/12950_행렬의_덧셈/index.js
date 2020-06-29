function solution(arr1, arr2) {
    let answer = arr1;
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer[0].length; j++) {
            answer[i][j] += arr2[i][j];
        }
    }
    return answer;
}
