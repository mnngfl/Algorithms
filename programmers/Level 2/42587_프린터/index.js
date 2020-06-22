function solution(priorities, location) {
    let result = location;
    let count = 0;
    
    while (priorities.length > 0) {
        let first = priorities[0];
        if (priorities.some(item => first < item)) {
            // 첫번째 문서 이외에 중요도 높은 문서가 존재
            priorities.push(priorities.shift());
            result === 0 ? result = priorities.length - 1 : result--;
        } else {
            // 첫번째 문서가 중요도 가장 높음
            if (result === 0) {
                count++;
                break;
            } else {
                priorities.shift();
                count++;
                result--;
            }           
        }
    }

    return count;
}
