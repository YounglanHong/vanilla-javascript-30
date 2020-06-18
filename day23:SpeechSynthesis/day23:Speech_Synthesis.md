# Day23: Speech Synthesis

### 문제 설명

Text to Voice in different languages

---

- [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)

  - language
  - pitch
  - volume
  - rate(speed)

- Flag Variable(가변수) => startOver

```javascript
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (starOver) {
    speechSynthesis.speak(msg);
  }
}
```
