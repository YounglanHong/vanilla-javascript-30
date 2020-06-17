# Day22: Follow along Link Highlighter

### 문제 설명

[Stripe navigation dropdown](https://stripe.com/) 구현

---

💛 HTML DOM의 `body`에 새로운 요소 추가하는 방법

1. Document.createElement() 메서드로 요소 생성: 지정한 tagName의 HTML 요소를 만들어 반환
2. [Element.classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)를 통해 요소의 클래스 목록에 접근하고, `add( /* string */ )` 메소드를 사용해 지정한 클래스 값 추가
3. [ParentNode.append()](https://developer.mozilla.org/ko/docs/Web/API/ParentNode/append)를 통해 parentNode `body`의 마지막 자식 뒤에 `Node` 객체 또는 `**DOMString**` 객체 삽입

```javascript
const highlight = document.createElement("span"); // 1. span 요소 생성
highlight.classList.add("highlight"); // 2. highlight 클래스 추가
document.body.append(highlight); // 3. body 끝에 highlight 삽입
```

- [Element.getBoundingClientRect](https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect) 메소드
  : 요소의 **크기** 와 뷰포트에 **상대적인 위치** 를 반환

```javascript
function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
// > DOMRect {x: 128.390625, y: 100, width: 62.203125, height: 48, top: 100, …}
```

- [window.scroll()](https://developer.mozilla.org/ko/docs/Web/API/Window/scroll)
  : 문서의 특정 위치로 창을 스크롤
  - window.scrollX: [읽기 전용 속성] 문서가 **수평**으로 얼마나 스크롤됐는지 픽셀 단위로 반환
  - window.scrollY: [읽기 전용 속성] 문서가 **수직**으로 얼마나 스크롤됐는지 픽셀 단위로 반환
