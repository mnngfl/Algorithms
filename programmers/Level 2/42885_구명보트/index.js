function solution(people, limit) {
    let count = 0;
    people.sort((a, b) => a - b);
    let i = 0;
    let j = people.length - 1;
    
    while (i < j) {
        if (people[i] + people[j] <= limit) {
            // 구명보트에 i, j번째 사람을 같이 태울 수 있음
            i++;
            j--;
            count++;
        } else {
            // 구명보트에 j번째 사람만 태울 수 있음
            j--;
            count++;
        }
        
        // 태울 사람이 한 사람만 남음
        if (i === j) count++;
    }
    return count;
}
