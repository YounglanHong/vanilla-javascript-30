# Day17: Sort without Articles

### 문제 설명

밴드이름을 조건에 따라(The, A(n) 제외) **정렬** 하는 프로그램 생성

---

- Array.sort(정렬)

  - 인자: 정렬 순서를 정의하는 함수

  ⭐️sort 함수 내부에서 strip 함수로 인자를 감싸주면,
  실제 데이터는 변화하지 않으면서 조건에 따라 정렬이 가능하다!

* trim(): 문자열 양 끝의 공백을 제거

* 정규표현식(regExp): **패턴** 을 사용한 텍스트 판별

  ```javascript
  // A, An, The로 시작하는 경우, 해당단어들을 공백으로 대체
  function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, "").trim();
  }
  ```

※ innerHTML에 문자열이 아닌 요소((ex) 배열) 할당하는 경우,

=> 배열을 문자화(toString)

    ```javascript
    array = [
    "Anywhere But Here",
    "The Bled",
    "Counterparts",
    "The Devil Wears Prada",
    "The Midway State",
    "Norma Jean",
    "Oh, Sleeper",
    "An Old Dog",
    "Pierce the Veil",
    "The Plot in You",
    "Say Anything",
    "A Skylit Drive",
    "We Came as Romans",
    ];

    array.toString();
    /* "Anywhere But Here,The Bled,Counterparts,The Devil Wears Prada,The Midway State,Norma Jean,Oh, Sleeper,An Old Dog,Pierce the Veil,The Plot in You,Say Anything,A Skylit Drive,We Came as Romans" */
    ```

=> ','(콤마)도 포함. 따라서 join('') 과정이 필요

    ```javascript
    document.querySelector("#bands").innerHTML = sortedBands
    .map((band) => `<li>${band}</li>`)
    .join("");
    ```
