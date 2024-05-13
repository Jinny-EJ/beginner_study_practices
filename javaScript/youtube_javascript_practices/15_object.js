// 객체를 선언할 때 사용할 수 있는 방법들 
// 1) object 를 생성해서 객체 생성 
// 2) class  를 인스턴스화해서 생성 - class 와 OOP 
// 3) function 을 사용해서 객체 생성. 

// 1번 방법 

const eunJin = { 
    name: '신은진',
    year: 1995,
};
console.log(eunJin);

// 2번 방법 

class billionaire6 {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
console.log(new billionaire6('신은진',1995));

// 3번 방법 

function billionaire7 (name,year) {
    this.name = name; // 이렇게 this 키워드를 property에 할당해준 경우에만 new 키워드를 넣고 객체 생성가능 
    this.year = year;
}

const shinEunJin = new billionaire7 ('신은진', 1995);
console.log(shinEunJin);

//property - attribute 

console.log (Object.getOwnPropertyDescriptor(eunJin,'name'));
console.log (Object.getOwnPropertyDescriptors(eunJin));


console.log('-----------');

const eunJin8 =  {
    name:'신은진',
    year: 1995,
    get age () {
        return new Date().getFullYear() - this.year;
    }
}

console.log(eunJin8);

eunJin8.height = 158;


console.log(eunJin8);

console.log(Object.getOwnPropertyDescriptor(eunJin8,'height'));


//property attribute 를 재정의 하고 싶을때. 

Object.defineProperty (eunJin8,'height',{
    value: 165,
    writable: true,
    enumerable: true,
    configurable: true,
})
console.log(eunJin8);
console.log(Object.getOwnPropertyDescriptor(eunJin8,'height'));

// Emmutable  열거가능 여부 

console.log(Object.keys(eunJin8));
for (let key in eunJin8){
    console.log(key);
}


Object.defineProperty (eunJin8,'name', {
    enumerable:false,
});

console.log (Object.keys(eunJin8));
for (let key in eunJin8) {
    console.log(key);
}

console.log(eunJin8);

console.log (eunJin8.name);


// configurable 

console.log(eunJin8.height);



Object.defineProperty(eunJin8,'height', {
    configurable: false,
});


Object.defineProperty(eunJin8,'height', {
        value: 163,
});
console.log(eunJin8.height);


// extensible 확장이 가능한지 확인 하는 것. 

console.log (Object.isExtensible (eunJin8));

eunJin8['asset']='billion dollars';
console.log(eunJin8);''
Object.preventExtensions(eunJin8); // 확장이 불가능하게 막는 것. 
console.log (Object.isExtensible(eunJin8));

// 하지만 삭제는 가능. 

delete eunJin8['age'];
console.log(eunJin8);


// seal ! 

const billionaire10 = {
    name: '신은진',
    year: 1995,

    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear()-age;
    }
}

console.log(billionaire10);
console.log (Object.isSealed(billionaire10));

Object.seal (billionaire10); // Seal 적용 
console.log (Object.isSealed(billionaire10));


// seal 을 적용시키면 추가나 삭제가 아예 안됨. 

billionaire10 ['country']= 'South Korea';
console.log(billionaire10);

delete billionaire10 ['year'];
console.log(billionaire10);




// 기존에 함수로 object 만들기

// function IdolModel (name,year){
//     this.name = name;
//     this.year = year;

//     this.dance = function() {
//         return `${this.name} 이 춤을 춥니다.`;
//     }
// }

// const yuJin = new IdolModel ('안유진', 2003);
// console.log(yuJin);



// new 없이도 만드는 법

function IdolModel (name,year){
    if (!new.target){
        return new IdolModel(name,year);
    }
    this.name = name;
    this.year = year;

    this.dance = function (){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel ('안유진', 2003);
console.log(yuJin);

const yuJin2 = IdolModel ('안유진', 2003);
console.log(yuJin2);



// prototype 

const testObj = {};
console.log (testObj.__proto__);


// __proto__ 은 모든 객체에 존재하는 property 이다. 
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다. 


function IdolModel (name,year) {
    this.name = name;
    this.year = year;
}

console.log (IdolModel.prototype);

console.dir(IdolModel.prototype,{
    showHidden:true,
});

const yuJin4 = new IdolModel ('안유진', 2003);

console.log(yuJin4.__proto__ );
console.log(yuJin4.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype);




