function calculate (number) {
        console.log((number * 10 / 2 % 3 ).toString());
}
calculate(4);

// 여기서 값을 입력 받는 것 number 은 parameter 라고 하고 
// 실제로 입려 받는 값 4 는 argument 라고 함. 


console.log('----------');


// return 받기 

function multiply (x,y){
    return x*y ; 
}
const result1 = multiply (2,4);
console.log (result1);


// Arrow 함수 받기 

const multiply2 = (x,y) => {
        return x*y ;
}
console.log (multiply2(3,4));

console.log('----------');

const multiply3 = (x,y) => x*y ; 
console.log(multiply3(4,5));

const multiply4 = x => x*2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x:${x} y:${y} z:${z}`;
console.log (multiply5 (2) (5) (7));



console.log('----------');

// 이렇게 argument 사용시 입력된 argument 의 값까지 출력 가능
const multiplyThree = function (x,y,z){
    console.log (arguments);
    return x * y * z ; 
}

console.log (multiplyThree(4,5,6));

console.log('----------');

// 무한하게 parameter 받기 

const multiplyAll = function (...arguments){
    return Object.values (arguments).reduce ((a,b) => a*b,1);
}
console.log(multiplyAll (3,4,5,6,7,8,9,10));


console.log('----------');

// function 에 이름을 정해주지 않거ㅗ, 바로 실행하는 법 immediately  invoked function. 

(function (x,y) { 
    console.log(x*y);
})(4,5)

console.log(typeof multiply);
console.log(multiply instanceof Object);

// 여기서 instanceof 는 multiply 가 object 인가? 를 묻는 것.) 