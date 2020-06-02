# Day9: 14 Must Know Dev Tools Tricks

### 문제 설명

Dev Tools Tricks

---

- Attribute Modification
  console => element - breakon - attribute modification

- [함수 Performance 체크](https://leechwin.tistory.com/entry/Javascript-%ED%95%A8%EC%88%98-Performance-%EC%B2%B4%ED%81%AC)

  - [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

  ```javascript
  const t0 = performance.now();
  doSomething();
  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
  ```

  - [console.time()](https://developer.mozilla.org/en-US/docs/Web/API/Console/time)

  ```javascript
  console.time("performance");
  doSomething();
  console.timeEnd("performance");
  ```
