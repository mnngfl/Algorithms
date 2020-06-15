function solution(s) {
    let middleIndex = (s.length - 1) / 2;
    if (s.length % 2 === 0) {
        return s.slice(middleIndex, middleIndex + 2);
    }
    return s.slice(middleIndex, middleIndex + 1);
}
