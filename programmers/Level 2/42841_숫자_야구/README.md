## 문제
#### 문제 설명
숫자 야구 게임이란 2명이 서로가 생각한 숫자를 맞추는 게임입니다.

각자 서로 다른 1~9까지 3자리 임의의 숫자를 정한 뒤 서로에게 3자리의 숫자를 불러서 결과를 확인합니다. 그리고 그 결과를 토대로 상대가 정한 숫자를 예상한 뒤 맞힙니다.

```
* 숫자는 맞지만, 위치가 틀렸을 때는 볼
* 숫자와 위치가 모두 맞을 때는 스트라이크
* 숫자와 위치가 모두 틀렸을 때는 아웃
```

예를 들어, 아래의 경우가 있으면

```
A : 123
B : 1스트라이크 1볼.
A : 356
B : 1스트라이크 0볼.
A : 327
B : 2스트라이크 0볼.
A : 489
B : 0스트라이크 1볼.
```

이때 가능한 답은 324와 328 두 가지입니다.

질문한 세 자리의 수, 스트라이크의 수, 볼의 수를 담은 2차원 배열 baseball이 매개변수로 주어질 때, 가능한 답의 개수를 return 하도록 solution 함수를 작성해주세요.

#### 제한사항
- 질문의 수는 1 이상 100 이하의 자연수입니다.
- baseball의 각 행은 [세 자리의 수, 스트라이크의 수, 볼의 수] 를 담고 있습니다.

#### 입출력 예
|baseball|return|
|:-|:-|
|[[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]|2|

#### 입출력 예 설명
문제에 나온 예와 같습니다.

## 풀이
서로 다른 1부터 9까지의 3자리 숫자라는 조건에 의해, 반복문을 다음과 같이 작성한다. `for(let i = 123; i <= 987; i++) {...}` 또한 이대로 반복문을 실행하면 `144`, `900`과 같은 조건에 맞지 않는 수가 등장하기도 하므로 이 경우에는 `continue`를 통해 반복을 건너 뛰도록 한다.

이제 123부터 987까지 가능한 모든 경우 중에서 주어진 입출력 `baseball` 배열을 이용해 가능한 답의 경우를 찾아 보자.

우선 1번째 for문의 인덱스 i를 `num1`이라 한다. 또 가능한 답인지 여부를 체크하기 위해 `flag` 변수를 사용한다. 이는 초기값으로 `true`를 가지고 있다가 `baseball`의 각 행에서 주어지는 볼의 개수&스트라이크의 개수와 다르다면 그 값을 `false`로 변경한다.

``` 
- 예를 들어 num1 = 124와 num2 = 123을 비교했을 때
- num1의 strike = 2, ball = 0이 된다.
- 이는 baseball 배열에서 주어진 num2의 strike = 1, ball = 1라는 값과 다르다.
- 따라서 124는 가능한 답이 아니게 된다.
```

가장 바깥 for문의 인덱스 `num1`과 안쪽 `for`문에 있으면서 `baseball` 배열의 한 행의 세자리 수를 나타내는 `num2` 값은 각 자리를 비교하기 편리하도록 문자열로 변경하여 비교해 보았다.

#### 추가
코드를 다음과 같이 수정해 주었더니 실행시간이 상당히 줄어들게 되었다. 이는 불필요한 반복을 줄이도록 한다. (한 번 false이면 어차피 그 수는 정답이 아닌 수라는 뜻이므로 다른 경우는 비교할 필요 x)
``` js
if (baseball[j][1] != strike || baseball[j][2] != ball) flag = false;

// 아래와 같이 변경 
if (baseball[j][1] != strike || baseball[j][2] != ball) {
    flag = false;
    break;
}
```

## 출처
https://programmers.co.kr/learn/courses/30/lessons/42841
