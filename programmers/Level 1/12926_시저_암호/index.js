function solution(s, n) {
    var s_arr = s.split(''); // 문자열의 각 문자를 분리하여 배열에 추가
    var res_arr = []; // 암호화된 문자열을 저장할 배열
    
    s_arr.forEach((item, index) => {
        let code = s.charCodeAt(index);
        // a~z
        if (code >= 65 && code <= 90) {
            code += n;
            if (code > 90) {
                let temp = code - 90;
                code = 64 + temp;
            }
        }
        
        // A~Z
        if (code >= 97 && code <= 122) {
            code += n;
            if (code > 122) {
                let temp = code - 122;
                code = 96 + temp;
            }
        }
        
        res_arr.push(String.fromCharCode(code));
    });
    
    return res_arr.join('');
}
