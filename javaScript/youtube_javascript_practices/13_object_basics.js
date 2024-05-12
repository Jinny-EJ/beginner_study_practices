
let jimin = {
    name: '박지민',
    group: 'BTS',
    dance: function () {
        return '박지민이 춤을 춥니다.';
    }
};

console.log(jimin);
console.log(jimin.name);
console.log(jimin['name']);

const key = 'group';
console.log(jimin[key]);

console.log(jimin.dance());

// 'name'이라는 값을 넣고 싶은데, 우리가 이걸 변수로 들고 있다면 ? 어떻게 key 로 쓸 수 있을까 ?
const namekey = 'name';
const nameValue = '박지민';

const groupkey = 'group';
const groupvalue = 'BTS'; 

const jimin2 = {
    [namekey]: nameValue, 
    [groupkey]: groupvalue,
}
console.log(jimin2);

jimin['EnglishName'] = 'Park Ji Min';
console.log(jimin);

// 삭제. 
delete jimin['EnglishName'];
console.log(jimin);

// 모든 키값 가져오기 
console.log (Object.keys(jimin));

// 모든 value 값 가져오기 
console.log (Object.values(jimin));

// 빠르게 객체 선언하는법 
const name = '전정국';

const jungKuk = {
    name,
};

console.log(jungKuk);


console.log('---------');

// 'copy by value' vs 'copy by reference'
// 기본적으로 모든 primitive(원초의, 최초의) 값은 copy bu value 임. 
// 하지만 객체 object  는 copy by reference 임. 


//1. copy by value
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' bts입니다.';
console.log('------');
console.log(original);
console.log(clone);


//2. copy by reference 
let originalObj = {
    name: '정호석',
    group: 'BTS',
};
let cloneObj = originalObj; 

console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);


// +) spread Operator 는 Copy by value. 임. 

// try -- catch 
// 오류를 발생 시킬 때 = 던진다고 표현 (throw) // 명시적으로 인지할 때 = 잡는다고 함. (cath)

function runnner () {
    try { 
        console.log('Hello');
        throw new Error ('큰 문제가 생겼습니다.');
        console.log('code factory');
    } catch (e) {
        console.log('---catch---');
        console.log(e);
    } finally {
        console.log ('---finally---');
    }
}

runnner();


