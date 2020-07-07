function makeMultiset(str) {
    let result = [];
    for (let i = 0; i < str.length - 1; i++) {
        let sliced = str.slice(i, i+2);
        if (!sliced.match(/([^A-Z])+/gi)) result.push(sliced.toLowerCase());
    }
    return result.sort();
}

function solution(str1, str2) {
    let answer = 1;
    let intersection = [], union = [];
    str1 = makeMultiset(str1);
    str2 = makeMultiset(str2);
    
    if (str1.length == 0 && str2.length == 0) return 65536;
    
    for (let i = 0; i < str2.length; i++) {
        let intersectionIdx = str1.indexOf(str2[i]);
        if (intersectionIdx > -1) {
            intersection.push(str1.splice(intersectionIdx, 1))
        }
        union.push(str2[i]);
    }
    
    for (let i = 0; i < str1.length; i++) {
        union.push(str1[i]);
    }
    
    return parseInt((intersection.length / union.length) * 65536);
}
