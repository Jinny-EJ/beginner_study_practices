let age = 29;
let username = 'Jinny';
let hobbies = ['sports','Cooking','Reading'];
let job = {
    title: 'Developer', 
    place: 'New York', 
    salary: 50000 
};

let totalAdultYears;

function calculateAdultYears(userAge, anotherParameter) {
    let result;
    result = userAge -18;
    return result;
}
// 매개변수를 여러개 지정하고 싶을 때는 , 로 나누어서 입력 

totalAdultYears = calculateAdultYears(age);
alert(totaladultYears);

age = 45;
calculateAdultYears(age);

alert(adultYears);