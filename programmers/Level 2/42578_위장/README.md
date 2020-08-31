## 문제
#### 문제 설명
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

|종류	|이름|
|:-|:-|
|얼굴	|동그란 안경, 검정 선글라스|
|상의	|파란색 티셔츠|
|하의	|청바지|
|겉옷	|긴 코트|

스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

#### 제한사항
- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
- 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
- 같은 이름을 가진 의상은 존재하지 않습니다.
- clothes의 모든 원소는 문자열로 이루어져 있습니다.
- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
- 스파이는 하루에 최소 한 개의 의상은 입습니다.

#### 입출력 예
|clothes	|return|
|:-|:-|
|[[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]	|5|
|[[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]	|3|

#### 입출력 예 설명
예제 #1<br>
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.

```
1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses
```

예제 #2<br>
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.

```
1. crow_mask
2. blue_sunglasses
3. smoky_makeup
```

## 풀이
가장 먼저 의상의 종류 별로 몇 개의 의상이 존재하는 지 객체 변수에 담도록 하였다. `예제 #1`을 예시로 들면, `{ headgear: 2, eyewear: 1 }`과 같은 형태이다.

그 다음에는 경우의 수를 계산하도록 한다. 주어진 조건에 따르면, 전체 의상 중에서 최소 한 개 이상부터 입을 수 있으므로 핵심은 '해당 의상을 선택하느냐 하지 않느냐'에 대한 경우의 수를 모두 곱하면 된다.

예를 들어 `headgear` 분류에서 선택할 수 있는 모든 경우의 수는 3가지이다. (yellow_hat, green_turban, 입지 않음)

또 `eyewear` 분류에서 선택할 수 있는 모든 경우의 수는 2가지이다. (blue_sunglasses, 입지 않음)

이러한 선택은 동시에 일어날 수 있는 경우이므로, 이 각각의 경우의 수를 곱해주도록 한다. (`3 × 2`)

마지막으로 조건에 따라 최소 한 가지의 의상은 입어야 하므로 모든 분류에서 '입지 않음'을 선택한 경우에 해당하는 값인 1을 전체 경우의 곱에서 빼주면 구하는 값을 얻을 수 있다. (`3 × 2 - 1`)


## 출처
https://programmers.co.kr/learn/courses/30/lessons/42578
