function solution(baseball) {
    let answer = 0;
    let strike = 0;
    let ball = 0;
    for (let i = 123; i <= 987; i++) {
        let flag = true;

        // 1~9까지의 서로 다른 3자리 숫자라는 조건을 만족하지 않으면 
        let num1 = i.toString();
        if (num1.indexOf('0') > -1) continue;
        else if (num1[0] == num1[1] || num1[0] == num1[2] || num1[1] == num1[2]) continue;

        for (let j = 0; j < baseball.length; j++) {
            let num2 = baseball[j][0].toString();
            strike = 0;
            ball = 0;

            for (let a = 0; a < 3; a++) {
                for (let b = 0; b < 3; b++) {
                    if (a == b && num1[a] == num2[b]) {
                        strike++;
                        continue;
                    }
                    if (a != b && num1[a] == num2[b]) {
                        ball++;
                        continue;
                    }
                }
            }
            if (baseball[j][1] != strike || baseball[j][2] != ball) flag = false;
        }

        if (flag == true) answer++;
    }

    return answer;
}
