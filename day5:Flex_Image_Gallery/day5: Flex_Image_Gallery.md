# Day5: Flex Image Gallery

### 문제 설명

유연하게 크기가 조절되는 이미지 갤러리를 만드는 문제

---

- flexbox

  - flex-container
  - flex-item

- [transform](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms): 좌표공간을 변형함으로써 일반적인 문서 흐름을 방해하지 않고 콘텐츠의 형태와 위치 변경

  - [translate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate): translate () CSS 함수는 요소를 가로 및 / 또는 세로 방향으로 재배치합니다. 결과는 `<transform-function>` 데이터 유형입니다.

    ```html
    .panel > *:first-child { transform: translateY(-100%); }
    ```

- [classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)

  - HTML5부터 class 속성값을 간단히 다룰수 있도록 classList 속성 추가
  - classList 에 접근하면 length, item, contains, add, remove, toggle 등 메소드를 가진 문자열 목록(**DOMTokenList**)이 반환됩니다.

    - length: 목록에 포함된 문자열의 개수
    - item(index): 인덱스를 지정하여 문자열을 얻음
    - contains(string): 목록 안에 문자열이 있는지 확인
    - add(string): 목록에 문자열을 추가
    - remove(string): 목록으로 부터 문자열을 제거
    - toggle(string) 목록에 문자열이 있으면 제거하고 그렇지 않으면 추가함

    ```javascript
    function toggleActive(e) {
        // console.log(e.propertyName); => font-size & flex-grow
    flex-grow if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active"); } }
    ```

- [DOMTokenList](https://developer.mozilla.org/ko/docs/Web/API/DOMTokenList)

---

※ Reference

https://webdir.tistory.com/94
