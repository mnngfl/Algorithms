## 문제
#### 문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

#### 제한사항
- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.

#### 입출력 예
|s|answer|
|:-|:-|
|"pPoooyY"|true|
|"Pyy"|false|

#### 입출력 예 설명
입출력 예 #1<br>
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2<br>
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

## 풀이
1. 가장 먼저 입력 받은 문자열을 소문자로 변환하고 'p', 'y' 두 종류의 문자만 남도록 만든다.<br>
`s.toLowerCase().replace(/[^p|y]/g, '')`
2. 그런 다음 각 문자열에서 'p', 'y'라는 패턴과 일치하는 배열을 `.match()` 메서드를 이용하여 구한 후 `.join()` 메서드로 문자열을 연결하여 각 문자열의 길이를 비교한다.\\
``` js
// 문자열이 "pyypyp" 라면
s.match(/p+/g) // ["p", "p", "p"]
s.match(/y+/g) // ["yy", "y"]

// 각각 .join()을 이용해 연결하면
// "ppp"
// "yyy"
```
3. 만약 'p' 혹은 'y'가 문자열 내에 존재하지 않을 경우, `.match()` 메서드 사용 시 `null`값이 반환되므로 이를 위한 예외처리를 해준다.\\
`s.match(/[p]+/g) || []`

## 출처
https://programmers.co.kr/learn/courses/30/lessons/12916
