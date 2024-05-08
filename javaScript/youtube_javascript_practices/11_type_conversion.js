// 타입 변환은 명시적 방법과 암묵적 방법이 있는데, 간단하게 명시적 방법만 몇개 기록


// string 으로 변환 
console.log(typeof(99).toString(),(99).toString());

// 숫자 타입으로 변환 (정수)
console.log (typeof parseInt('0'),parseInt('0'));

// 숫자 타입으로 변환 (실수)
console.log (typeof parseFloat ('0.99'), parseFloat('0.99'))

// boolean 타입으로의 변환 

// 1) 아무글자도 없는 string 2) 값이 없는 경우 3) 0 => 모두 false 로 반환 

