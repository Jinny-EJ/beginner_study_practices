 console.log(window);


document.body.children[1].children[0].href = 'https://google.com'; //여기서의 새 값은 문자열이 아니어야 함. 왜냐하면 이 링크가 문자열이기 때문. 
 // 이렇게 작성시 코드가 에러가 뜨는 이유는 자바스크립트 코드가 너무 일찍 실행되기 때문. 

// console.dir(document);
// alert();
// window.alert();

// let newAnchorElement - document.getElementById('external-link');
// newAnchorElement.href = 'https://google.com';


// const newObject = {
//    someProperty: 'some value'
//};
// 이렇게 새로운 객체 생성 후 속성을 만들고 어떤 값을 할당 할때는 : 을 사용하지만, 
// 하지만 DOM 을 이용해서 . 을 이용해서 드릴링을 하게 될 때에는 = 을 사용. 




// ADD AN ELEMENT
// 1. Create the new element 

let newAnchorElement = document.createElement('a');

// 2. Get access to the parent element that should hold the new element 

let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google!'; 



// REMOVE ELEMENTS
// 1. Select the element that should be removed 

let firstH1Element = document.querySelector('h1');


// 2. Remove it ! 

// firstH1Element.remove(); //  오래된 브라우저에서는 작동하지 않음
firstH1Element.parentElement.removeChild(firstH1Element);  // 이 방식은 오래된 브라우저에서도 작동 됨. 


// move element 

firstParagraph.parentElement.append(firstParagraph);

