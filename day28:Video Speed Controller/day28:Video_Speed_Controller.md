# Day28: Video Speed Controller

### 문제 설명

Collaborate mousemove event & HTML5 Video to build custom video speed controller

---

- Number.toFixed([digits]): 숫자를 고정 소수점 표기법으로 표기해 반환

- [HTMLMediaElement.playbackRate](https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement/playbackRate)

  : 미디어가 재생되는 속도를 설정

  - fast forward, slow motion 등에 대한 사용자 제어를 구현하는 데 사용
  - 정상 속도: 1.0

※ 코드 참고

```javascript
function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  // console.log(y); // -1 ~409
  const percent = y / this.offsetHeight;
  // console.log(percent); // heigth of 'speed' element
  /* Lower & Upper bound */
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  /* offset height */
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = `${playbackRate.toFixed(2)} x`;
  video.playbackRate = playbackRate;
}
```
