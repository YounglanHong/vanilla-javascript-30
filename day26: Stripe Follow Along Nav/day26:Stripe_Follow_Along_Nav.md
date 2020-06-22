# Day26: Stripe Follow Along Nav

### 문제 설명

Stripe Follow Along Nav(Dropdown resize itself)

NavLink 중 하나로 마우스를 가져가면 실제 컨텐츠의 너비와 높이에 일치하도록 크기가 자체 조정되고, 마우스가 이동할 때마다 자연스럽게 전환하는 **Dropdown**

---

- CMS(Content Management System)
  [What is CMS](https://myseolabo.com/wordpress/what-is-cms/)
  [CMS vs HTML: Why Use a Content Management System?](https://www.coredna.com/blogs/cms-vs-html)

* <li> tags are things to **hover on** NOT <a> tags

* [Element.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) => Get **direct descendants**

  ```javascript
  const triggers = document.querySelectorAll(".cool > li");
  // cool class는 <li>의 직계 상위 요소
  ```

⭐️함수 안에 포함되면 this 값 변화 => `화살표(Arrow) 함수` 사용!

```javascript
console.log(this); // <li>
setTimeout(function () {
  console.log(this); // window(값 변화)
  this.classList.add("trigger-enter-active");
});

// 화살표 함수 사용
setTimeout(() => {
  console.log(this);
  this.classList.add("trigger-enter-active");
});
```

- [Opacity 속성](https://developer.mozilla.org/ko/docs/Web/CSS/opacity): 요소의 불투명도를 설정하는 속성

  ```css
  opacity: 0; /* 완전 투명 */
  opacity: 1; /* 완전 불투명 */
  ```

- [display 속성](https://aboooks.tistory.com/85): 요소의 종류를 선택하는 속성

  ```css
  display: none; /* 공간 차지 안함(박스 생성되지 않음) */
  display: block; /* block 요소(요소 앞뒤 줄바꿈)*/
  ```

⭐️Enter, Leave에 각각 두개의 클래스를 적용하고, CSS를 사용해 단계별 이동!

```javascript

this.classList.add("trigger-enter");
this.classList.add("trigger-enter-active");

.trigger-enter .dropdown {
  display: block;
}
/* after 150ms(setTimeout) */
.trigger-enter-active .dropdown {
  opacity: 1;
}
```

⭐️ If || **&&** 조건

```javascript
setTimeout(() => {
  // If 조건: 조건이 성립 할때만 classList.add 실행
  if (this.classList.contains("trigger-enter")) {
    this.classList.add("trigger-enter-active");
  }
}, 150);
```

```javascript
setTimeout(
  () =>
    // && 조건: && 이전이 true 반환할때만 classList.add 실행
    this.classList.contains("trigger-enter") &&
    this.classList.add("trigger-enter-active"),
  150
);
```

---

※ Reference

[Getting direct descendant elements by selector with vanilla JS](https://gomakethings.com/getting-direct-descendant-elements-by-selector-with-vanilla-js/)
