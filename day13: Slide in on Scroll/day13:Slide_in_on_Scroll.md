# Day13: Slide in on Scroll

### 문제 설명

스크롤이 내려가면서 이미지가 등장하는 이벤트 생성

---

- Scroll 이벤트

- Debounce

  - 'Debounce'는 여러 개의 순차적 호출을 하나의 그룹으로 "그룹화"
  - 이벤트를 여러번 호출을 해도 요청 기능이 일정 시간 이후에 한번만 실행 되는 것
    => scroll 함수 구현할 때 사용(`debounce(scroll)`)

  ```javascript
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  ```

※ Reference

[Throttle 와 Debounce 개념 정리하기](https://medium.com/@pks2974/throttle-%EC%99%80-debounce-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-2335a9c426ff)

[Debounce란 뭘까요?](https://medium.com/@feanar/debounce%EB%9E%80-%EB%AD%98%EA%B9%8C%EC%9A%94-82204c8b953f)
