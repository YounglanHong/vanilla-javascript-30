# Day1: JavaScript Drum Kit

### 문제 설명

음계 키보드를 누르면

1. 해당 음계의 소리가 나고,
2. 버튼 크기가 커지는 애니메이션 & 노란색 테두리 생성

---

- `!` + tab 키: 기본 HTML 틀 생성

- 키보드 버튼의 keycode 찾아주는 사이트

  http://keycode.info/

- [`<link>` 태그의 `rel`](http://tcpschool.com/html-tag-attrs/link-rel) : 현재 문서와 외부 리소스 사이의 연관 관계 나타내는 속성(필수 속성)

  ```html
  <link rel="stylesheet" href="style.css" />
  ```

- 데이터 속성(Data Attributes):

  - HTML 문서에서 **개인화된 속성** 을 만들 때 사용
  - (`src`, `class` 처럼) 표준화 된 것은 아님
    => `data-`

* `keydown`: 키를 눌렀을 때 발생하는 이벤트(키 누르고 있을 때 한번만 실행)

  (cf) [키보드 이벤트](https://javascript.info/keyboard-events) 발생순서

  키보드 입력 -→ keydown -→ 글자 입력 -→ keypress -→ 키보드 뗌 -→ keyup

  `keypress`: 키를 눌렀을 때 발생하는 이벤트(키 누르고 있을 때 계속 실행)

  `keyup`: 키에서 손을 뗀 경우 한번 실행

- 특성 선택자(Attribute Selector): 주어진 특성의 존재 여부나 그 값에 따라 요소를 선택
  => CSS와 마찬가지로 JS에서도 특성 선택자 사용 가능

- [템플릿 문자열(ES6 template strings)](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-template-strings-2/): JS 값을 문자열 중간에 삽입하는 방법

  ```javascript
  // "${}" => 큰 따옴표 필요
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  ```

- [HTML `<audio>` 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio): 문서에 소리 콘텐츠를 포함할 때 사용

- [`transitionend` 이벤트](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/transitionend_event): CSS 전환이 완료되면 transitionend 이벤트가 시작됩니다.

* [`transition`](https://developer.mozilla.org/ko/docs/Web/CSS/transition) in CSS
  : 요소의 두 가지 상태 사이에 변화를 줄 수 있는 속성
  `transition: property timing-function(진행속도) duration(총 시간) delay(시작연기) | initial | inherit`

* [`transform scale`](https://www.codingfactory.net/10939) in CSS: transform의 scale로 요소를 확대 또는 축소할 수 있는 속성
  `transform: scale(가로 배수, 세로 배수)`

  ```css
  .key {
    border: 0.4rem solid black;
    border-radius: 0.5rem;
    margin: 1rem;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    transition: all 0.07s ease; /* with .playing */
    width: 10rem;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    text-shadow: 0 0 0.5rem black;
  }

  .playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }
  ```
