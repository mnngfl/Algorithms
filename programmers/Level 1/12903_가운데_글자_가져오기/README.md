## 문제
#### 문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

#### 제한사항
- s는 길이가 1 이상, 100이하인 스트링입니다.

#### 입출력 예
|s|return|
|"abcde"|c|
|"qwer"|we|

## 풀이
이 문제는 String.prototype의 `slice()` `substring()` 메서드 둘중 하나를 이용해서 풀 수 있다. 나는 `slice`를 이용해 풀었지만 `substring` 역시 사용되는 인수는 같으므로 메서드만 교체해 주어도 동일하게 작동한다. 

그렇다면 이 두 메서드의 차이는 무엇일까? 이들은 거의 대부분의 면에서 비슷하지만, 차이점은 **음수**가 인수로 주어졌을 때 드러나게 된다. 

아래 코드를 보면 각자 `indexStart`와 `indexEnd`라는 두 인수를 받는다. 이때 `substiring` 메서드는 만약 인수로 주어진 `indexStart`가 `indexEnd`보다 큰 수라면 이 둘을 알아서 swap 시킨다. 그러므로 `slice`를 사용했을 땐 아무런 반환값을 못 얻었지만 `substring`을 사용했을 땐 2번째 인덱스부터 5번째 이전 인덱스까지 반환받을 수 있었다. 

```
let text = 'Mozilla'
console.log(text.substring(5, 2)) // -> "zil"
console.log(text.slice(5,2)) // -> ""
```

또, 만약 `substring`은 인수에 음수나 `NaN`이 포함되어 있다면, 이들이 `0`인 것처럼 처리한다.

```
console.log(text.substring(-5, 2)) // -> "Mo"
console.log(text.slice(-5, -2)) // -> ""
```

`slice`도 인수 `NaN`은 0처럼 다루지만, 음수값이 주어지면 문자열 끝에서부터 인덱스를 검색한다는 특징이 있다. 이 때, 두 인수에 둘 다 음수가 주어 져야 문자열 뒤에서부터 검사가 되는 것 같다. 

``` 
console.log(text.slice(-5, 2)) // -> ""
console.log(text.slice(-5, -2)) // -> "zil"
```

## 출처
https://programmers.co.kr/learn/courses/30/lessons/12903
