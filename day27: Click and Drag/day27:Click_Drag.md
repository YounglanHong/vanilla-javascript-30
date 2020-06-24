# Day27: Click and Drag to Scroll

### 문제 설명

Horizontally scrolled div from web site [Hover states](https://www.hoverstat.es/)

---

- [MouseEvent.pageX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX)
  : 문서의 왼쪽 가장자리를 기준으로 마우스 위치의 X 좌표 값

- [HTMLElement.offsetLeft](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft)
  : 현재 요소의 왼쪽 상단 모서리가 offsetParent 노드 내의 왼쪽으로 오프셋되는 픽셀 수

- transform 속성: 웹 요소의 위치 이동, 크기 조절 및 회전 등 가능하게 하는 기능

  - transform: scale(): X 또는 Y축으로 확대/ 축소

    ```css
    .items.active {
      background: rgba(255, 255, 255, 0.3);
      cursor: grabbing;
      cursor: -webkit-grabbing;
      /* 끌기 작업 중에 "잡은 손(closed-hand) 커서를 적용*/
      /* transform: scale(0.98) when not active */
      transform: scale(1);
    }
    ```

- Tip!
  Object로 console에 key-value 값 나타내기

  ```
  console.log({ x, startX });
  // Object {x: 389, startX: 390}
  ```

---

※ Reference

[요소의 절대좌표, 상대좌표](https://mommoo.tistory.com/85)

[CSS3 Transform 속성](https://www.biew.co.kr/entry/CSS3-Transform-%EC%86%8D%EC%84%B1-scale-rotate-translate-skew-%EC%8B%A4%EB%AC%B4%EC%98%88%EC%A0%9C-%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC-%ED%8F%AC%ED%95%A8)
