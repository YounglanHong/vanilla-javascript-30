# Day3: CSS Variables

### 문제 설명

---

- [CSS Variable](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties): CSS 작성자가 정의하는 개체로, 문서 전반적으로 재사용할 임의의 값을 담습니다. 사용자 지정 속성 표기법`--main-color: black;`을 사용해 정의하고, **var()** 함수를 사용해 접근할 수 있습니다. `color: var(--main-color);`

  - CSS 변수(사용자 지정 속성)를 사용하면

    1. 한 영역에 반복되는 값을 **변수** 로 정의해놓고, 다른 여러 공간에서 **참조** 할 수 있습니다.
    2. **의미를 가진 식별자** 이기 때문에 이해하기 쉽습니다.`(--main-color: black;)`

    (cf) SASS는 컴파일이 되면 변경할 수 없습니다. 반면에 CSS 변수 값은 변경하면 모든 페이지의 참조된 변수의 값이 즉시 변화합니다.

  - CSS 변수 지정 방법

    `--변수명: 기본값(default)`

        ```html
        :root { --base: #ffc600; --space: 10px; --blur: 10px; }
        ```

  - CSS 변수 사용 방법

    `var(--변수명)`

        ```html
        img { padding: var(--spacing); background: var(--base); filter: var(--blur); }
        ```

* [`<input type="range">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color): 색상 선택표

  ```html
  <!-- 데이터 속성(Data Attributes): data-sizing -->
  <input
    id="spacing"
    type="range"
    name="spacing"
    min="10"
    max="200"
    value="10"
    data-sizing="px"
  />
  ```

* [`<input type="color">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range): 슬라이드 바

  ```html
  <input id="base" type="color" name="base" value="#ffc600" />
  ```

* 데이터 속성(Data Attributes): `data-sizing`

  `this.dataset`: 데이터 속성(`data-`)을 모두 포함하는 객체(DOMStringMap)

  ```
  > DOMStringMap {sizing: "px"}
  sizing: "px"
  > __proto__: DOMStringMap

  ```

- querySelectorAll 반환값 => Nodelist

  ```
  NodeList(3)
  > 0: input#spacing
  > 1: input#blur
  > 2: input#base
      length: 3
    > __proto__: NodeList
  ```

  - Q. NodeList vs. array?
    array은 map, reduce 등 함께 사용할 수 있는 메소드들이 많이 있습니다. 반면에 Nodelist는 entries, **forEach** , keys, values 등 한정된 메소드들만 사용할 수 있습니다.
