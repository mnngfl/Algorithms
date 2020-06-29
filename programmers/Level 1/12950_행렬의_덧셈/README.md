## 문제
#### 문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

#### 제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

#### 입출력 예
|arr1|arr2|return|
|:-|:-|:-|
|[[1,2],[2,3]]|[[3,4],[5,6]]|[[4,6],[7,9]]|
|[[1],[2]]|[[3],[4]]|[[4],[6]]|

## 풀이
`answer` 변수에 인자로 받은 arr1을 대입하고 arr1의 길이를 행으로, arr1[0]의 길이를 열로 구분하여 for문 내에서 arr2의 각 행, 열의 값을 arr1에 더해 주었다.

푸는데 헤메었던 부분은 주어진 행렬이 5x5, 3x3과 같이 행과 열의 크기가 같게 주어지는 것이라 착각하였다. 다시 잘 찾아보니 꼭 그럴 것이라는 말도 없었다. 결과적으로는 3x5 행렬과 같은 경우가 나올 수도 있다는 것이었다.

2차원 배열을 다루기 때문에, 만약 `let answer = arr1`로 주어진 값을 대입하는 게 아니라 빈 배열을 초기화하고 시작하고 싶다면, 다음과 같이 해 주어야 한다. 그렇지 않으면 오류가 발생한다.

``` js
let answer = Array(); // 초기화
for (let i = 0; i < arr1.length; i++) {
  answer[i] = Array(); // 초기화
  for (let j = 0; j < arr1[0].length; j++) {
    answer[i][j] = arr1[i][j] + arr2[i][j];
  }
}
```
#### ES6의 `.map()` 사용하기
`Array.prototype.map()`을 사용하면 코드를 더욱 간결하게 작성할 수 있다.

``` js
function solution(arr1, arr2) {
    let answer = Array();
    return answer = arr1.map((a, i) => {
        return a.map((b, j) => b += arr2[i][j]);
    });
}
```

## 출처
https://programmers.co.kr/learn/courses/30/lessons/12950#
