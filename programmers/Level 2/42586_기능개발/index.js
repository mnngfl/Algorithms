function solution(progresses, speeds) {
    let answer = [];
    let stack = progresses.map((work, i) => Math.ceil((100 - work) / speeds[i]));
    let i = 0;
    let next = 1;

    while (i < stack.length) {
        if (stack[i] >= stack[i + next]) {
            next++;
        } else {
            answer.push(next);
            i += next;
            next = 1;
        }
    }

    return answer;
}
