let onlineCourse = 'web-development';
let onlineCoursePrice = 30;
let onlineCourseMainGoal = ['build webPage','make business','get success'];

alert (onlineCourse);
alert (onlineCoursePrice);
alert (onlineCourseMainGoal);

let onlineCourseInformation = {
    name: 'web-development',
    price: '30\$',
    goals: ['build webPage','make business','get success']
};

alert(onlineCourseInformation.name);
alert(onlineCourseInformation.price);
alert(onlineCourseInformation.goals);

alert (onlineCourseMainGoal[1]);


function getListItem(array,arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
};
// 사실 잘 모르겠다.. 이제 조금...? ㅠㅠ 

let firstGoal = getListItem (onlineCourseInformation.goals, 0);
alert(firstGoal);