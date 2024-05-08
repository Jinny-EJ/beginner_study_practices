// loops 1) for   2) while 
// 반복작업에 중요함.

for (let i=0; i<10; i++){
    console.log(i);
}

console.log('------------');

for (let i=10; i>0; i--){
    console.log(i);
}

// 왜 0 은 출력이 안될까 ???

console.log('-------------');

for (let i=0; i<3; i++){
    for (let j=3; j>0; j--){
        console.log(i,j);
    }
}


console.log('-------------');


let square = '';
let side = 6;

for (let i=0; i<side; i++){
    for (let j=0; j<side; j++){
        square +='*';
    }
    square += '\n';
}
console.log(square);



console.log('-------------');

// object 에서의 key 값 추출 
const yuJin = {
        name:'안유진',
        year:2003,
        group:'아이브',
}

for (let key in yuJin){
    console.log(key);
}


console.log('-------------');

//array 에서의 key 값 추출 
const iveMembersArray = ['안유진','가을','레이','장원영','리즈','이서'];

for (let key in iveMembersArray){
    console.log(key);
}


console.log('-------------');


for(let key in iveMembersArray){
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
}

console.log('-------------');

// for ....of 
//loop 이 가능한 곳에서만 사용가능


for (let value of iveMembersArray){
    console.log(value);
}


console.log('-------------');


//while 

let number = 0;

while (number<10){
    number ++;
}
console.log(number);




console.log('-------------');

//do ... while 구분 - 하지만 절대 쓰지 말 것. 헷갈림. 

number = 0;
do {
    number ++;
} while (number <10);

console.log(number);



console.log('-------------');


//break : loop 을 깨뜨리는 역할. 

for (let i=0; i<10; i++){
     if( i === 5 ) {
        break;
    }
    console.log(i);
}
//i 가 5일때는 정지. 실행되지 않음. 여기서 주목해야 할 점은 break 가 들어간 if 절만 정지가 된게 아니라. 그 부모 {} 인 for 문이 정지.


console.log('-------------');

number=0;
while (number < 10){
    if (number ===5){
        break;
    }
    number ++;
    console.log(number);
}



console.log('-------------');

// continue 

for (let i=0; i<10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}


console.log('-------------');

number=0;

while (number <10){
    number ++;

    if(number === 5 ){
        continue;
    }
    console.log(number);
}