# Day8: Fun with HTML5 Canvas

### 문제 설명

HTML Canvas

---

- [Canvas](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Basic_usage): JavaScript와 HTML <canvas> 엘리먼트를 통해 그래픽을 그리기위한 도구 제공
  => 고정 크기의 드로잉 영역 생성

```html
<canvas id="canvas"></canvas>
```

```javascript
// canvas 요소 참조
const canvas = document.getElementById("canvas");
// 실제 출력할 렌더링 컨텍스 생성
const ctx = canvas.getContext("2d");
```

- Rendering Contexts(렌더링 컨텍스트)

  - 실제 출력할 컨텐츠
  - `CanvasRenderingContext2D` 인터페이스를 사용하여 수행(2D)

  ```html
  <!-- > CanvasRenderingContext2D -->
  const ctx = canvas.getContext("2d");
  ```

- [hsl](https://mothereffinghsl.com/)

  - Hue: 색도
  - Saturation: 채도
  - Lightness: 명도

- mouseup / mousedown event
  => 주로 drag & drop 구현시 사용
  - mousedown: 마우스 버튼을 눌렀을 경우 처리를 실행
  - mouseup: 이미 눌려 있던 버튼이 떨어질때 실행
