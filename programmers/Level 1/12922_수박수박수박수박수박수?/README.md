## 문제
#### 문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

#### 제한 조건
n은 길이 10,000이하인 자연수입니다.

#### 입출력 예
|n|return|
|:-|:-|
|3|수박수|
|4|수박수박|

## 풀이
특정 문자열을 원하는 수만큼 반복하기 위해 `String.prototype.repeat()` 메서드를 이용하였다. n을 반복하려는 문자열의 길이로 나누면(여기서는 n/2) '수박'이라는 문자열을 잘림 없이 반복할 수 있고, 만약 n을 2로 나눴을 때 나머지가 존재한다면 잘린 문자를 추가로 덧붙여 출력하면 된다.

참고로 `repeat(0)`처럼 인수를 0으로 준다면, 이는 문자열을 반복하지 않는다는 의미이다.

#### 추가로 생각해 본 것
만약 반복해야할 문자열이 '수박' 처럼 길이가 짧은 문자열이 아니라 '자바스크립트'와 같이 긴 문자열이라면, 잘린 문자를 추가하는 부분을 해결하기 위해 어떻게 해야 할까?

'자바스크립트'라는 문자열 값을 변수로 따로 저장해 놓고, 나머지 연산을 이용해 얻은 값으로 이 문자열 변수의 인덱스에 접근하면 될 것 같다. (String 자료형이 iterable 하기 때문에 가능하다.)

``` js
// 예시
let str = '자바스크립트'
let result = str.repeat(n/str.length)
if (n % str.length !== 0) {
  result += str.slice(0, n % str.length)
}
```

## 출처
https://programmers.co.kr/learn/courses/30/lessons/12922
