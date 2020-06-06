# Day12: Key Sequence Dectection(KONAMI CODE)

### 문제 설명

특정 문자열이 입력되면 반응하는 이스터에그(KONAMI CODE) 생성

- 연속된 문자열 키 검사해서 배열에 담고,
- 배열에 담긴 단어가 secretCode와 동일할 때
- 원하는 출력값 반환

  ※ 주의

  처음에 잘못 눌렀더라도 최종적으로 누른 문자열이 secretCode와 일치할 경우 반응해야 하기 때문에 pressed 배열에 새 요소가 추가되고 나면 secreteCode의 길이만큼 _뒤에서부터_ 잘라내야 한다.

---

- [splice 메소드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

  ※ 첫번째 파라미터가 **음수** 이면, _뒤에서부터_ 카운팅을 시작합니다.

  ```javascript
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode);
  ```

  - 첫번째 파라미터(변경을 시작할 인덱스): -secreteCode.length -1 => secretCode의 길이

  - 두번째 파라미터(제거할 요소의 수): pressed.length -secreteCode.length => 두 배열 pressed와 secretCode의 차이

- [cornify_add()](https://www.cornify.com/extras)
