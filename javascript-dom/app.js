document.body.children[1].children[0].href = 'https://google.com'; //여기서의 새 값은 문자열이 아니어야 함. 왜냐하면 이 링크가 문자열이기 때문. 
 // 이렇게 작성시 코드가 에러가 뜨는 이유는 자바스크립트 코드가 너무 일찍 실행되기 때문. 

// console.dir(document);
// alert();
// window.alert();



// const newObject = {
//    someProperty: 'some value'
//};
// 이렇게 새로운 객체 생성 후 속성을 만들고 어떤 값을 할당 할때는 : 을 사용하지만, 
// 하지만 DOM 을 이용해서 . 을 이용해서 드릴링을 하게 될 때에는 = 을 사용. 
