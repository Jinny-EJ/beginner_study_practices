// 변수 선언 ?????
let age = 32; 
let username = 'Jinny';
let hobbies = ['Sports', 'Cooking', 'Reading'];

// 변수를 객체 안에 넣는 것. 
let job = {
    title: 'Developer',
    place: 'New York',
    salary: 50000,
};


// 함수를 객체 안에 넣는 것. 
let persons = { 
    name: 'Jinny', //Property
    greet() {  // Method , technically this is function. 
    alert('Hello!');
    }
};

console.log ();
// console 은 변수 variable , log 는 메서드, 
// () 안에 void 를 선택한다면, 매서드가 아무런 값도 반환하지 않음을 뜻함. 

let person = {
    name: 'Jinny',
    greet() {
        console.log('Hello!');
    }
};

person.greet();  // 매개 변수가 필요하다면 () 안에 매개변수 지정가능


// 강의 한번만 더 다시듣자. 

// 일단, alert 는 계속해서 확인창을 처리해줘야 하기 때문에 번거로워서 
// console.log() 라는 객체와 메서드를 사용해서 콘솔에 메시지를 출력하는 방식을 많이 사용할 것임. 
