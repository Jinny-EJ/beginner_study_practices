'use strict';

console.log('Hello World!');

let name = 'ellie';


// string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: '+ helloBob + 'type: '+ typeof helloBob);



// boolean 
// false: 0, null, undefined, NaN, '''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log('value: ${canRead}, type: ${typeof canRead}');
console.log('value: ${test}, type: ${typeof test}');

//null 값이 없음을 의미. 
let nothing = null;
console.log('value: ${nothing}, type: ${typeof nothing}');

// undefined 
// let x = undefined;
// let x;
console.undefined

// symbol, create unique identifiers for objects
// 정말 고유한 식별자를 만들고 싶을 때 사용하는 것. (우선순위)
// 간혹 식별자용 스트링을 사용하는 경우가 있는데, 하지만 스트링은 다른 파일에서 동일하게 사용시. 동일한 것으로 간주됨. 
const symbol1 = Symbol('id');
const symbol2 = symbol('id');
// 위의 두가지 심볼은 동일한 스트링을 작성했어도 다른 스트링으로 작성됨. 
console.log(symbol1 === symbol2); // 심볼 두개가 같은지 확인하는 코드 입력시 같지 않다고 나옴. false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = symbol.for('id'); // 의미, '주어진 스트링에 맞는 심볼을 만들어줘' 라는 의미가 됨. 
console.log(gSymbol1 === gSymbol2); // 이렇게 입력시에는 true 로 나옴. 



// 그리고 동시에 심볼을 출력하려고 했을때. 
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); 
// 에러가 발생하게 되기 때문에, 꼭 ' .description 을 이용해서 string 으로 변환해서 출력해야함. 
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);



// 5. Dynamic typing: dynamically typed language
// 자바스크립트는 dynamically typed language 라고 불림. 
// C 나 Java 는 statically typed language 인데, 이는 우리가 변수를 선언할때, 어떤 타입인지 결정해서 타입을 같이 선언했던 반면. 
// 자바스크립트는 선언할때 어떤 타입인지 선언하지 않고 프로그램이 동작할때, 할당된 값에 따라서 타입이 변경될 수 있음. 
// 이런 언어는 내가 빠른 아이디어를 프로토타입 하고 싶을 때 는 유용하지만, 규모가 있는 프로젝트를 진행할때는 좋지 않을 수 있음. 
let text = 'hello';
console.log(text.charAt(0)); // h 로 출력 , 여기엔 오류가 없음 
consol.log(`value: ${text}, type: ${typeof text}`); // 위의 let text = 'hello'; 의 타입을 확인하는 방법. 
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 위의 것은 type 이 string 으로 설정 되는 반면, 이 코드는 숫자로 인식됨. 
text = '7'+ 5;
console.log(`value: ${text}, type: ${typeof text}`); // 그런데 여기서 7은 string 으로 쓰여지고 5는 숫자로 쓰여졌는데, 에러가 나지 않고, 자동적으로 5를 string 으로 변환시켜서 합해줌. 
text = '8'/ '2';
console.log(`value: ${text}, type: ${typeof text}`); // 여기서는 / 를 보고는 string 을 string 으로 인식하지 않고, 숫자로 인식해서 계산해줌. 
console.log(text.charAt(0)); // 하지만 이 전에 type 이 변경되고 난 후 출력시에는 오류가 발생하게 됨. (이게 굉장히 큰 문제)





//  (매우 중요) object :  일상생활에서 보는 물건 물체를 대표할 수 있는 박스 형태. 그냥 변수 내 age 는 아무 설명이 되지 않지만, 
//  ellie 라는 object 를 만들면 추가적인 정보 제공 가능. const로 지정되어 있을때는 다시는 다른 오브젝트로 변경 불가. 
const ellie = {name: 'ellie', age: 20 };
ellie.age = 21; // 엘리 오브젝트 내부에는 name age 라는 변수가 존재하기 때문에, 변수에 다른 값을 할당할 순 있음. 


