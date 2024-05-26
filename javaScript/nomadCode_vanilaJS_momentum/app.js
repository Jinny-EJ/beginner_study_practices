const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array 
console.log(daysOfWeek[4]);

//Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

const player ={
    name: "nico",
    points: 10,
    fat: true,
}

console.log(player);
player.lastName = "potato";
console.log(player);
player.name = "niconico"; // const 는 변경이 불가능하다고 했지만, 내부의 요소를 변경하는 건 가능. 
console.log(player);


function sayHello(nameOfPerson,age) {
    console.log("Hello my name is" + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 14);
sayHello("lynn", 30);
