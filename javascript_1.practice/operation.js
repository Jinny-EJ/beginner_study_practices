// Math operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(10 % 4); //modulus 나머지 연산 

console.log((10+3-5)*10);

let result = (10+3-5) *10;
result = 10 * 4;
result = result + 1; // JavaScript 에서는 이렇게 변수를 왼쪽 오른쪽에 모두 사용해도 괜찮음. 
// result++; // result = result + 1 
// result--; // result = result - 1 

result += 5; // result = result + 5
result -= 5; // result = result - 5
result /= 5; // result = result / 5
result *= 5; // result = result * 5

console.log('Jinny'+ ' '+ 'Shin'); // 띄어쓰기를 해주고 싶다면 중간에 빈칸을 만들어줘야함. - 는 안됨. 


// 문자열이 얼마나 입력되고 있는지 확인하는 기능 만들기 
// console.log(우리가 문자열을 알고 싶은 문자열이나 혹은 그 문자열을 담은 변수를 사용하면 됨  .  그리고 마치표 표기 후 length);
// 문자열을 객체가 아님. 그럼에도 문자열에 마침표 표기를 사용해 다양한 메서드에 접근할 수 있음. 
let userName = 'Jinny';
console.log(userName.length);
// 추가적으로 자바스크립트에 있는 다양한 메서드를 이용해 볼 수 있는데, 예를 들어 toUpperCase() 는 모든 문자를 대문자로 변경해줌. 
console.log(userName.toUpperCase()); 


// 또한 length method 의 독특한 점 중 하나는 배열에도 적용이 가능 하다는 것.
let hobbies = ['Sports', 'Cooking'];
console.log(hobbies.length); // 여기서의 결과값은 배열에 2가지의 변수가 있기 때문에, 2라는 숫자가 나오게 됨. 
