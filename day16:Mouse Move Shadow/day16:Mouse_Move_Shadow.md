# Day16: CSS Text Shadow Mouse Move Effect

### 문제 설명

마우스가 이동할 때, 따라다니는 그림자 효과 생성

---

- ES6 Destructuring

```javascript
const width = hero.offsetWidth;
const height = hero.offsetHeight;

let x = e.offsetX;
let y = e.offsetY;

// ES6
const { offsetWidth: width, offsetHeight: height } = hero;

let { offsetX: x, offsetY: y } = e;
```

- offsetX, offsetY: 마우스 커서의 위치를 반환
  - 이벤트가 걸려 있는 DOM객체를 기준으로 좌표를 출력
    - offsetX : 이벤트 대상 객체에서의 상대적 마우스 x좌표 위치를 반환
    - offsetY : 이벤트 대상 객체에서의 상대적 마우스 y좌표 위치를 반환

3. pageX, pageY

- [contenteditable](https://developer.mozilla.org/ko/docs/Web/Guide/HTML/Content_Editable)

  - HTML5 에서는 어떤 엘러먼트도 수정(edit)이 가능
  - HTML element 에서 `contentEditable` 속성을 **true** 로 설정하면 사용 가능

    ```
    <blockquote contenteditable="true">
        <p>Edit this content to add your own quote</p>
    </blockquote>
    <cite contenteditable="true">-- Write your own name here</cite>
    ```

---

※ Reference

http://megaton111.cafe24.com/2016/11/29/clientx-offsetx-pagex-screenx%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90/
