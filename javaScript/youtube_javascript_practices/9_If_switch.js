let number = 5; 

if (number % 2 === 0){
    console.log ('number 변수는 짝수 입니다.');
}else {
    console.log('number 변수는 홀수 입니다.');
}


console.log('-------------');

// if 구문에서는 중간로직을 추가할 수 있음. 

if (number % 2 === 0){
    console.log('2의 배수입니다.');
} else if (number % 3 ===0) {
    console.log('3의 배수입니다.');
} else if (number % 4 === 0 ) {
    console.log ('4의 배수입니다.');
} else if (number % 5 === 0) {
    console.log ('5의 배수입니다.');
} else {
    console.log('2,3,4,5의 배수가 아닙니다.');
}


// Switch 구문 

