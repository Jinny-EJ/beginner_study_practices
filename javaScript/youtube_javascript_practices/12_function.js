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

// function 에 이름을 정해주지 않고, 바로 실행하는 법 immediately  invoked function. 

(function (x,y) { 
    console.log(x*y);
})(4,5)

console.log(typeof multiply);
console.log(multiply instanceof Object);

// 여기서 instanceof 는 multiply 가 object 인가? 를 묻는 것.) 


//--------------------------------------------------------

// 기본제공 함수 
// 1) Array 

let iveMembers = [
    '안유진', '가을', '레이', '장원영', '리즈', '이서'];

console.log(iveMembers);

// 2) Push : 직접변경, 해당 array  맽끝에 item 추가 

iveMembers. push ('코드팩토리');
console.log(iveMembers);

// 3) pop : 마지막 요소를 삭제, 그리고 그 삭제한 값을 반환 

console.log(iveMembers.pop());
console.log(iveMembers);


// 4) Shift : 첫째값을 삭제 및 반환 

console.log(iveMembers.shift());
console.log(iveMembers);

// 5) unshift : 값 추가 가능. 대신 첫번째에 

console.log ( iveMembers.unshift('안유진'));
console.log (iveMembers);

// 6) splice : 2개의 값을 넣어주는데, 첫번째 값은 어떤 인덱스 부터 삭제를 할지 두번째 값은 몇개를 삭제하고 싶은지. 기존 슬라이드 변경. 

console.log(iveMembers.splice(0,3)); // 이 말인 즉슨 0번 부터 3번의 전 번호 2번까지 삭제하고 싶고, 삭제하는 값은 출력해줌. 
console.log(iveMembers);


// 새로운 함수를 반환해주는 Method 

let btsMembers = ['RM', '석진', '슈가', '호석', '지민', '정국'];


// concat : 새로운 array 를 만들어서 붙여줌. 아예 다른 메모리 공간. 기존의 array 는 그대로 유지. 
console.log(btsMembers.concat('코드팩토리')); 
console.log(btsMembers);


// slice : 기존 array 를 변경하지 않는 것. slice 에서는 몇번 인덱스까지 삭제할지 지정가능. 
console.log (btsMembers.slice (0,3));
console.log (btsMembers);


// spread operator : ... 를 이용하여 구성, 기존 array 의 리스트들이 모두 펼쳐져서 새로운 array 에 저장이 됨. 

let btsMembers2 = [
    ... btsMembers,
]
console.log (btsMembers2);

// 펼쳐서 저장하지 않았을 경우에는 이렇게 [] 가 두번이 중첩되서 복사되게됨. 
let btsMembers3 = [
    btsMembers,
];
console.log(btsMembers3);

// 그냥 = 으로 지정시에도 펼친것과 같은 결과값. 
let btsMembers4 = btsMembers;
console.log(btsMembers4);

console.log (btsMembers4 === btsMembers);

// 여기서 부터 정말 많이 사용하는 함수
//join :  이 함수를 사용하면 , 을 기준으로 모든 값들을 합칠 수 있다. 
console.log(btsMembers.join());
console.log(btsMembers.join('/'));

// sort 오름차순 
btsMembers.sort();
console.log(btsMembers);

//reserve 반대 
console.log(btsMembers.reverse());

// sort 
let numbers = [1,9,7,5,3,];
console.log (numbers);

// numbers.sort ((a,b) =>{});이러한 형태. 
// ? = It's shorthand way of writing on if-else statement.

numbers.sort ((a,b) => {
    return a>b ? 1:-1;
});
console.log(numbers);

numbers.sort ((a,b) => a > b ? -1:1 );
console.log(numbers);

//map : array 에 있는 모든값들을 순회하면서 각각의 값들을 변형시킴. 

console.log(btsMembers.map((x)=>`BTS : ${x}`));

console.log (btsMembers.map((x) =>{
    if ( x ==='RM'){
        return `BTS Leader : ${x}`;
    } else {
        return `BTS Member : ${x}`;
    }
}));


//filter : 모든 값들을 보고 조건에 맞는것을 찾음. 
numbers = [1,8,7,6,3];

console.log(numbers.filter((x) => x % 2 ===0));

//find : 순서대로 보다가 해당되는 첫번때 값만 찾아냄. 
console.log(numbers.find((x) => x % 2 ===0));

//findIndex : 찾아낸 값의 인덱스 값을 반환 
console.log(numbers.findIndex((x) => x %2 === 0));

// reduce 
console.log (numbers.reduce ((p,n) => p+n,0));
