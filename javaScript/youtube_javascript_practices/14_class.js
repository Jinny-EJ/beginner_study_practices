// 클래스는 객체지향 프로그래밍에서 특정 객체 (인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀이다. 


// class kPopStar {
//     name = '민윤기';
//     year = 1993;
// }

// const sugar = new kPopStar ();
// console.log(sugar);



// 틀을 찍어놔서 빵을 계속 만들 수 있는 방법 

class kPopStar {
    name;
    year;

    constructor (name,year) {
        this.name = name;
        this.year = year;
    };

    sayName () {
        return `안녕하세요. 저는 ${this.name}입니다.`;
    };
};
const sugar = new kPopStar('민윤기',1993);
console.log(sugar.sayName());


const rm = new kPopStar('김남준',1994);
const hoseok = new kPopStar('정호석',1994);
const jin = new kPopStar('김석진',1992);
const jimin = new kPopStar('박지민',1995);
const v = new kPopStar('김태형',1995);
const jungkuk = new kPopStar('전정국',1996);


console.log(jin.sayName());


// Getter and Setter 
class billionaire {
    name;
    year;

    constructor (name,year){
        this.name = name;
        this.year = year;
    }

    get nameAndYear () {
        return `${this.name}, ${this.year}`;
    }

    set name(name){
        this.name = name;
    }
}

const eunjin = new billionaire ('신은진', 1995);
console.log (eunjin);
console.log (eunjin.nameAndYear);

eunjin.name = '신은진';
console.log(eunjin);


// private 값 예시. private 값은 외부에서 access 불가 

class billionaire2 {
    #name;
    year;

    constructor(name,year){
        this.#name=name;
        this.year=year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const eunjin2 = new billionaire2 ('신은진', 1995);
console.log(eunjin2.name);

// 변경도 가능

eunjin2.name = '코드팩토리';
console.log(eunjin2.name);

 // Static keyword 
 // 지금까지 정의했던 모든 property 들은 객체에 직접적으로 귀속이 되었었는데 Static keyword 를 쓰게 되면 class 에 귀속되도록 할 수 있음. 

 class billionaire3 {
    name;
    year;
    static country = 'south korea';
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
 }
//  const eunjin3 = new billionaire3 ('신은진', 1995);
//  console.log(eunjin);

console.log (billionaire3.country);

// inheritance 상속 

class billionaire4 {
    name;
    year;

    constructor (name,year) {
        this.name = name;
        this.year = year;
    }
}

