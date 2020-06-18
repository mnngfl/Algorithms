## 문제
#### 문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

#### 제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

#### 입출력 예
|participant|completion|return|
|:-|:-|:-|
|["leo", "kiki", "eden"]|["eden", "kiki"]|"leo"
|["marina", "josipa", "nikola", "vinko", "filipa"]|["josipa", "filipa", "marina", "nikola"]|"vinko"
|["mislav", "stanko", "mislav", "ana"]|["stanko", "ana", "mislav"]|"mislav"

#### 입출력 예 설명

예제 #1

leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.


예제 #2

vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.


예제 #3

mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

## 풀이
처음에는 단순히 2중 for문을 이용해 `completion`배열의 각 항목이 `participant`내에 있는지 검사하고, 있으면 해당 항목을 `slice()` 메서드로 지우는 방식을 사용하였다. 그렇게 하니 정확성은 맞게 나오는데 효율성 테스트는 하나도 통과하지 못하였다.

다시 생각해보니 처음 이용한 방법이 너무 시간이 오래 걸리고 비효율적이라는 사실을 깨달았다. 다음으로 생각해 낸 방법은 다음과 같다.

- 주어진 두 배열을 각각 오름차순으로 정렬한다.
- 정렬하면 두 배열은 각각 이런 식이 된다. (입출력 예제의 3번째를 예로 듦)
  ##### participant
  |[0]|[1]|[2]|[3]|
  |:-:|:-:|:-:|:-:|
  |"ana"|"mislav"|"mislav"|"stanko"|
  
  ##### completion
  |[0]|[1]|[2]|
  |:-:|:-:|:-:|
  |"ana"|"mislav"|"stanko"|
- `participant.length`만큼 for문을 반복한다. 만약 `participant[i] !== completion[i]`라면, 그때의 `participant[i]`가 바로 완주하지 못한 자가 된다.

이렇게 하면 for문을 1번만 사용하고도 문제 풀기가 가능하다.

## 출처
https://programmers.co.kr/learn/courses/30/lessons/42576
