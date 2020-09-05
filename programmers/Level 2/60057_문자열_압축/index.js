function makeChunkString(s, size) {
    let arr = [];
    for (let i = 0; i < s.length; i += size) {
        arr.push(s.slice(i, i + size));
    }
    return arr;
}

function solution(s) {
    if (s.length <= 1) return 1;
    let answer = 999;
    let splited;

    for (let i = 1; i < s.length - 1; i++) {
        let temp = 1;
        let compressedString = '';

        splited = makeChunkString(s, i);
        splited.forEach((v, i) => {
            if (v === splited[i+1]) {
                temp++;   
            } else if (temp == 1) {
                compressedString += v;
            } else {
                compressedString += temp + v;
                temp = 1;
            }
        });

        if (compressedString.length < answer) {
            answer = compressedString.length;
        }
    }

    return answer;
}
