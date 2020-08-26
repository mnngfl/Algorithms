function solution(cacheSize, cities) {
    let answer = 0;
    let stack = [];
    let find;

    for (let i = 0; i < cities.length; i++) {
        find = stack.indexOf(cities[i].toLowerCase());
        if (find > -1) {
            stack.splice(find, 1);
            answer += 1;
        } else {
            answer += 5;
        }
        stack.push(cities[i].toLowerCase());
        if (stack.length > cacheSize) {
            stack.shift();
        }
    }
    return answer;
}
