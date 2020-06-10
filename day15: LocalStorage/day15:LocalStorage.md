# Day15: Local Storage & Event Delegation

### 문제 설명

- Local Storage

- Event Delegation

---

- preventDefault: 리로드(새로고침) 방지

  (cf) default: 새로고침 or 서버로 데이터 전달

- name 속성 가져오기

  ```javascript
  const text = this.querySelector("[name=item]").value;
  ```

- [HTMLFormElement.reset()](https://developer.mozilla.org/ko/docs/Web/API/HTMLFormElement/reset): 폼 리셋

- [Element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches): 요소가 해당 selector인지 여부 체크
  ```javascript
    if (!e.target.matches("input")) return; //* skip unless it is input
  ```

⭐️ React, Angular와 같은 프레임워크 필요한 이유

- populateList 함수를 호출할 때마다(item 증가할 때마다) 매번 새롭게 전체 리스트가 생성(re-render)됩니다.

  => 리스트의 한 item만 업데이트하려면 React, Angular와 같은 프레임워크를 이용하여 _최소한의 HTML 변화_ 를 가져올 수 있습니다.


    ```javascript
    function addItem(e) {
        e.preventDefault();
        // console.log(this);
        const text = this.querySelector("[name=item]").value;
        const item = {
          text, // text: text in ES6
          done: false,
        };
        items.push(item);
        populateList(items, itemsList);
        localStorage.setItem("items", JSON.stringify(items));
        this.reset();
      }

    function populateList(plates = [], platesList) {
        platesList.innerHTML = plates
          .map((plate, i) => {
            return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
              plate.done ? "checked" : ""
            } />
            <label for="item${i}">${plate.text}</label>
          </li>
          `;
          })
          .join("");
      }
    ```

- CSS: checkbox icon customize

  ```css
  .plates input {
    display: none;
  }
  .plates input + label:before {
    content: "⬜️";
    margin-right: 10px;
  }
  .plates input:checked + label:before {
    content: "🌮";
  }
  ```

- [LocalStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage): 브라우저 저장소

  - 특정 도메인에 따라 저장된 정보가 다릅니다.
  - 브라우저에 데이터를 저장할 수 있어, 새로고침 후에도 데이터가 손실되는 것을 방지합니다.

  - Chrome console - application - Local Storage에서 확인 가능
  - key-value 페어로 구성되고, **string** 타입으로 저장해야 합니다.
    => JSON.stringify 이용하여 localStorage에 저장하고, 사용할 때는 JSON.parse를 통해 원본 객체로 변환합니다.

    ![LocalStorage](./localStorage.png)



- Event Delegation

  1. where we listen for a click on something higher,
  2. and then inside of it we check if it's the actual thing that we want because it could trigger on a few different things

  ```javascript
  itemsList.addEventListener("click", toggleDone);

  function toggleDone(e) {
    if (e.target.matches("input")) return; //* skip unless it is input
    console.log(e.target);
  }
  ```

---

※ Reference

[JS localStorage](https://www.tiny.cloud/blog/javascript-localstorage/)

[localStorage 통한 목록관리](https://medium.com/@benjaminwoojang/localstorage%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%AA%A9%EB%A1%9D-%EA%B4%80%EB%A6%AC-ed7c7aa9970b)

[이벤트 위임](https://ko.javascript.info/event-delegation)

[왜 이벤트 위임을 해야하는가?](https://ui.toast.com/weekly-pick/ko_20160826/)
