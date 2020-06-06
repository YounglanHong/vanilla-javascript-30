# Day11: Custom Video Player

### 문제 설명

---

- [삼항 연산자(Ternary operator)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

  - JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자
  - 보통 if 명령문의 단축 형태로 사용

    ```javascript
    // solution #1
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    // solution #2
    const method = video.paused ? "play" : "pause";
    video[method]();

    // solution #3
    video[video.paused ? "play" : "pause"]();
    ```

* [Node.textContent](https://developer.mozilla.org/ko/docs/Web/API/Node/textContent) 속성

  - 노드와 그 자손의 `텍스트 콘텐츠`를 표현

    ※ **Node.textContent 🆚 HTMLElement.innerText**

        1. `textContent`는 <script>와 <style> 요소를 포함한 모든 요소의 콘텐츠를 가져옵니다. 반면 `innerText`는 "사람이 읽을 수 있는" 요소만 처리합니다.

        2. `textContent`는 노드의 모든 요소를 반환합니다. 그에 비해 `innerText`는 스타일링을 고려하며, "숨겨진" 요소의 텍스트는 반환하지 않습니다.

    ※ **Node.textContent 🆚 Element.innerHTML**

        1. `innerHTML`은  HTML을 반환합니다. HTML로 분석할 필요가 없다는 점에서 `textContent`의 성능이 더 좋습니다.

        2. `textContent`는 XSS 공격의 위험이 없습니다.

* parseFloat: 문자열을 **숫자(실수)** 로 반환

* [Animation.currentTime](https://developer.mozilla.org/ko/docs/Web/API/Animation/currentTime)

* [HTMLElement.style 속성](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/style)

  - 요소의 인라인 스타일에 접근하거나 설정할 때 사용
  - 요소의 인라인 style 속성이 포함한 CSS 선언을 담은 CSSStyleDeclaration 객체를 반환

  ```html
  progressBar.style.flexBasis
  ```

  - [flex-basis](https://developer.mozilla.org/ko/docs/Web/CSS/flex-basis): flex-basis CSS 속성은 플렉스 아이템의 **초기 크기** 를 지정

* [timeupdate](https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement/timeupdate_event) 이벤트
  : currentTime 속성으로 표시된 **시간이 업데이트** 되면 timeupdate 이벤트가 시작

  (cf) [progress](https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement/progress_event) 이벤트
  : 브라우저가 **리소스를 로드** 하면 주기적으로 발생

* 논리 AND (`&&`): `expr1 && expr2` => expr1을 true로 변환할 수 있는 경우 expr2을 반환하고, 그렇지 않으면 expr1을 반환

  ```javascript
  progress.addEventListener("mousemove", (e) => {
    mousedown && scrub(e);
  });
  ```

* [전체 화면 열기(Using fullscreen mode)](https://developer.mozilla.org/ko/docs/Web/Guide/DOM/Using_full_screen_mode)

  - `requestFullscreen()`: 전체화면 모드로 전환
  - `exitFullscreen()`: 전체화면에서 창 모드로 전환
  - `fullscreenElement`: 현재 전체화면 모드인지 알려주는 속성

  ```javascript
  const fullScreen = player.querySelector(".full_screen");

  function fullscreen() {
    if (!video.fullscreenElement) {
      // console.log(video);
      video.requestFullscreen();
    } else {
      if (video.exitFullscreen) {
        video.exitFullscreen();
      }
    }
  }

  fullScreen.addEventListener("click", fullscreen);
  ```
