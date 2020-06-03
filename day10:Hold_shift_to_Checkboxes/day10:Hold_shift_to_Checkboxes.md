# Day10: Hold Shift to Check Multiple Checkboxes

### 문제 설명

Hold Shift to Check Multiple Checkboxes
(shift 키를 사용하면 클릭한 체크박스 사이의 체크박스들도 선택되도록 이벤트 생성)

---

- input type="checkbox"

  ```javascript
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  ```

this.checked = true OR false

- [Flag(Boolean) variable](http://www.javascriptkit.com/javatutors/valid2.shtml)

  - 조건이 true가 될 때까지 하나의 값을 갖도록 정의하는 변수로, 조건이 true가 되면 변수 값을 변경합니다.
  - 함수 또는 명령문의 흐름을 제어하는 ​​데 사용할 수 있는 변수이므로 함수가 진행되는 동안 특정 조건을 확인할 수 있습니다.

    ```javascript
    // errors is the flag variable
    var errors = false;
    for (var i = 0; i < 10; i++) {
      if (i == 7) {
        // your error condition
        errors = true;
      }
      if (errors) {
        // is the flag "up"? (i.e. true)
        alert("There was a problem!");
      }
    }
    ```

---

※ Reference

[What is a flag variable](https://stackoverflow.com/questions/17402125/what-is-a-flag-variable)

```

```
