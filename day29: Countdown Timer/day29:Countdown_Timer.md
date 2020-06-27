# Day29: Countdown Timer

### 문제 설명

Countdown Timer

---

※ 기본적인 `SetInterval`로 했을 때 문제점

1. 작동하지 않고 멈추는 경우가 있다.(ex)tap away
2. iOS에서 스크롤할 때, 일시정지 한다.

   ```javascript
   function timer(seconds) {
     setInterval(function () {
       seconds--;
     }, 1000);
   }
   ```

※ `setInterval` 사용해서 남은 시간 카운트다운

1. 전역변수 countdown 선언
2. countdown 변수에 setInterval 할당
3. 남은 시간(secondsLedt)가 0보다 작을 때, `clearInterval`

   ```javascript
   let countdown;
   function timer(seconds) {
     // 현재 시간
     const now = Date.now();
     // 목표 시간
     const then = now + seconds * 1000;
     console.log({ now, then });
     countdown = setInterval(() => {
       const secondsLeft = Math.round((then - Date.now()) / 1000);
       // check if we should stop it!
       if (secondsLeft < 0) {
         clearInterval(countdown);
         return;
       }
       // display it
       console.log(secondsLeft);
     }, 1000);
   }
   ```

   - document.title: 문서의 제목(탭 제목)에 접근. 제목 변경 가능

   - [Node.textContent](https://developer.mozilla.org/ko/docs/Web/API/Node/textContent)
     : 노드와 그 자손의 텍스트 콘텐츠를 표현

- [HTMLElement.dataset](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/dataset)
  : [읽기 전용] 요소의 사용자 지정 데이터 특성(`data-\*`)에 대한 읽기와 쓰기 접근 방법을 HTML과 DOM 양측에 제공

  ```javascript
  this.dataset.time;
  const buttons = document.querySelectorAll("[data-time]");
  ```

- document.`formName`.`inputName`
- HTMLFormElement.reset(): 요소의 기본값 복원

  ```javascript
  document.customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
  });
  ```

---

※ Reference

- [Document 객체](https://www.zerocho.com/category/JavaScript/post/573b3235a54b5e8427432947)
