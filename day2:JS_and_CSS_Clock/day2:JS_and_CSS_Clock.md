# Day2: JS and CSS Clock

### 문제 설명

JS 코드로부터 현재시각을 받아서, CSS로 시침,분침,초침이 움직이는 시계를 만드는 문제

---

- [`transform` 속성](https://developer.mozilla.org/ko/docs/Web/CSS/transform): 요소에 **회전** , 크기 조절, 기울이기, 이동 효과를 부여

  - transform: rotate(#deg)

    ```html
    <!--시계침 12시 방향으로 향하도록 각도조절-->
    <div class="hand second-hand" style="transform:rotate(90deg);"></div>
    ```

  - [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin): 100%

    - 기본값은 50%
    - origin을 100%로 변경해야 시계 중심을 기준으로 회전

      ```html
      <style>
        .hand {
          width: 50%;
          height: 6px;
          background: black;
          position: absolute;
          top: 50%;
          transform-origin: 100%;
        }
      </style>
      ```

  - [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function): transition 효과의 영향을 받는 요소의 **움직임** 기능을 정의

    - cubic-bezier(n,n,n,n): 베지어 곡선값을 만들어서 속도를 설정

    ```html
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
    ```

- [setInterval(func | code, delay, arg1,...argN)](https://ko.javascript.info/settimeout-setinterval): 일정 시간 간격을 두고 함수를 실행

  - func | code: 실행하고자 하는 코드; 함수 또는 문자열 형태
  - delay: 대기 시간(단위는 밀리초(millisecond, 1000밀리초 = 1초), 기본값은 0)
  - argN: 함수에 전달할 인수

  (cf) [setTimeout](https://ko.javascript.info/settimeout-setinterval): 일정 시간이 지난 후에 함수를 실행

- Q. JS 시, 분, 초 숫자를 어떻게 시침, 분침, 초침의 각도로 바꿀 수 있을까?

  ```javascript
  const secondsDegrees = (seconds / 60) * 360;

  // 기본값 90도(transform: rotate(90deg)) => +90
  const secondsDegrees = (seconds / 60) * 360 + 90;
  ```

---

※ Reference

[transform | 생활코딩](https://opentutorials.org/course/2418/13684)

[transition-timing-function](https://coderap.tistory.com/288)
