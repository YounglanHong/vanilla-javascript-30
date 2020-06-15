# Day20: Native Speech Recognition

### 문제 설명

브라우저의 전역 변수인 Speech Recognition 사용

---

- window.webkitSpeechRecognition

  - [Using the Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)

  - [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/SpeechRecognition)

    - [interimresults](https://wicg.github.io/speech-api/#dom-speechrecognition-interimresults)
      > Controls whether interim results are returned. When set to true, interim results should be returned. When set to false, interim results must not be returned. The default value must be false. Note, this attribute setting does not affect final results.

  - Node.appendChild(): 한 노드를 특정 부모 노드의 자식 노드 리스트 중 **마지막 자식**으로 추가
    ```javascript
    let p = document.createElement("p");
    const words = document.querySelector(".words");
    words.appendChild(p);
    ```
