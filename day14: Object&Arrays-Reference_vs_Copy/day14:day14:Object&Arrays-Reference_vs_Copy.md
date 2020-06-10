# Day14: Object & Arrays - Reference_vs_Copy

### 문제 설명

javascript에서 배열과 객체의 참조 vs. 복사

---


### 1. **pass by value**: `Boolean`, `null`, `undefined`, `String`, `Number`(primitive types)

- 문자열, 숫자, boolean 등 primitive type은 선언한 변수에 포함됩니다.
- primitive type은 값을 할당하면 값을 _새 변수에 복사(copy)_ 하는 것과 같습니다.

```javascript
let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100
//* age 변수의 값이 변화해도 age2의 값은 변화하지 않습니다.
```

### 2. **pass by reference**: `Array`, `Function`, `Object` (non-primitive types)

- 배열, 함수, 객체 등 non-primitive type은 값을 할당하면 _새 변수에 값을 참조(reference)_ 합니다.

```javascript
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const team = players;

console.log(players, team); // both ["Wes", "Sarah", "Ryan", "Poppy"];

team[3] = "Lux"; // team의 3번째 인덱스 값을 재할당

console.log(players, team);
// ["Wes", "Sarah", "Ryan", "Poppy"];
// ["Wes", "Sarah", "Ryan", "Lux];
//* team 배열의 값 변화
```

### 배열을 복사(copy)하는 방법

1.  slice

    ```javascript
    const team2 = players.slice();
    console.log("team_slice", team2);
    ```

2.  concat

    ```javascript
    const team3 = [].concat(players);
    console.log("team_concat", team3);
    ```

3.  (ES6) Spread operator

    ```javascript
    const team4 = [...players];
    console.log("team_spread", team4);
    ```

4.  Array.from

    ```javascript
    const team5 = Array.from(players);
    console.log("team_from", team5);
    ```

### 객체를 복사(copy)하는 방법

1. Object.assign

   ```javascript
   const person = {
     name: "Wes Bos",
     age: 80,
   };

   const cap2 = Object.assign({}, person, { number: 99, age: 12 });
   console.log("cap_assign", cap2);
   // {name: "Wes Bos", age: 12, number: 99}
   console.log(person);
   // {name: "Wes Bos", age: 80}
   ```

2. Object spread

   ```javascript
   const cap3 = { ...person };
   console.log("cap_spread", cap3);
   ```

### shallow(1 level deep) vs. deep(clone deep; lodash)

- shallow(1 level deep): Object.assign

  ```javascript
  const wes = {
    name: "Wes",
    age: 100,
    social: {
      twitter: "@wesbos",
      facebook: "wesbos.developer",
    },
  };

  const dev = Object.assign({}, wes);
  // {name: "Wes", age: 100, social: {…}}

  //////////////////* 1 level deep change
  dev.name = "wesley";

  > dev;
  // {name: "wesley", age: 100, social: {…}}
  > wes;
  // {name: "Wes", age: 100, social: {…}}

  /////////* more then 1 level deep change
  dev.social.twitter = "@social";

  > dev
  /*
    {name: "wesley", age: 100, social: {…}}
    age: 100
    name: "wesley"
    social:
    facebook: "wesbos.developer"
    twitter: "@social"
  */

  > wes
  /*
  {name: "Wes", age: 100, social: {…}}
    age: 100
    name: "Wes"
    social:
    facebook: "wesbos.developer"
    twitter: "@social"
  */
  ```

  - deep(more than 1 level deep): clone deep
    OR **JSON.parse & JSON. stringify** 이용
    (※ 추천하는 방법은 아님)

    ⭐️ JSON.stringify()를 통해 객체를 문자열로 변환하고, JSON.parse를 통해 객체로 변환하면 객체의 모든 단계 전부 복사(copy)

    ```javascript
    const dev2 = JSON.parse(JSON.stringify(wes));

    dev2.social.twitter = "@json";

    > dev2.social.twitter
    // "@json"
    > dev.social.twitter
    // "@wesbos"
    ```

*** 

※ Reference

https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

