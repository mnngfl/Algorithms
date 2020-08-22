function solution(skill, skill_trees) {
    let answer = 0;

    skill_trees.forEach(tree => {
        tree = tree.replace(new RegExp(`[^${skill}]`, 'g'), '');
        Array.from(tree).every((curr_skill, index) => {
            return curr_skill === skill[index];
        }) && answer++;
    });

    return answer;
}
