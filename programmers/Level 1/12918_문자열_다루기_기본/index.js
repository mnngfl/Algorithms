function solution(s) {
    var answer = true;
    var regexp = /^[0-9]*$/;
    answer = (s.length === 4 || s.length === 6) && regexp.test(s);
    return answer;
}
