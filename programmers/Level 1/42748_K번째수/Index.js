function solution(array, commands) {
    var answer = [];
    
    commands.forEach(item => {
        let sortedArray = array.slice(item[0]-1, item[1]);
        sortedArray.sort((a, b) => a - b);
        answer.push(sortedArray[item[2]-1]);
    });
    
    return answer;
}
