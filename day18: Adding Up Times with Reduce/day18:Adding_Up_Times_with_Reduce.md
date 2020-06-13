# Day18: Adding Up Times with Reduce

### 문제 설명

reduce & map 메소드를 사용해 시간의 합 구하기

---

- data-time attribute => Youtube

```html
<!-- Youtube example -->
<li data-time="2:33"></li>
```

```javascript
const timeNodes = document.querySelectorAll("[data-time]");
```

※ ERROR!

```javascript
const seconds = timeNodes.map((node) => node.dataset.time);
// Uncaught TypeError: timeNodes.map is not a function
```

=> Convert nodelist into an array(nodelist를 배열로 변환)

    ```javascript
    const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
    // OR
    const timeNodes =[...document.querySelectorAll("[data-time]")];
    ```

- [HTMLElement.dataset](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/dataset)

  - 사용자 지정 데이터 특성(`data-\*`)에 대한 읽기와 쓰기 접근 방법을 HTML과 DOM 양측에 제공
  - 반환값: `DOMStringMap`으로, 각 데이터 특성마다 하나의 항목
  - [주의] `dataset` 속성 자체는 **읽기 전용**
    => 모든 쓰기 작업은 dataset 안의, 데이터 특성을 나타내는 각각의 속성에 수행

    ```javascript
    DOMStringMap {time: "5:43"}
    > time: "5:43"
    > __proto__: DOMStringMap
    ```

    => node.dataset.time 으로 접근

* [parseFloat](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseFloat): 문자열을 분석해 부동소수점 실수로 반환

* [reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

  - map: 인자로 배열을 받고, 결과값으로 **배열** 을 반환
  - reduce: 인자로 배열을 받고, 결과값으로 **숫자**, **문자열** , **객체** 등 누적 계산의 결과값을 반환
