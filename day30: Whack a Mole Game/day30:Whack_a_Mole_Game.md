# Day30: Whack a Mole Game

### 문제 설명

Whack a Mole Game(random popup)

---

- [Event.isTrusted](https://developer.mozilla.org/ko/docs/Web/API/Event/isTrusted)

  - 이벤트가 사용자 행위(클릭 이벤트 등)에 의하여 발생되었으면 true
  - 이벤트가 스크립트로 인해 생성 또는 수정되었거나 dispatchEvent를 통해 보내졌으면 false

  ```javascript
  // mole clicked => score up
  function bonk(e) {
    if (!e.isTrusted) return; // cheater!
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
  }
  moles.forEach((mole) => mole.addEventListener("click", bonk));
  ```

- `Moles to pops up`

  1. Write a function that add class `up`
  2. Write a function that remove class `up` inside `setTimeout`
  3. Create a mole pop up animation using `top` & `transition`

```javascript
// Moles to pop up
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  // console.log(time, hole);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}
```

```css
.mole {
  background: url("mole.svg") bottom center no-repeat;
  background-size: 60%;
  position: absolute;
  top: 100%; /* hide inside */
  width: 100%;
  height: 100%;
  transition: all 0.4s;
}

.hole.up .mole {
  top: 0; /* pop up */
}
```
