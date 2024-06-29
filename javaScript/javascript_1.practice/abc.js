// let yuJin = {
// 	name: '안유진',
// 	group: '아이브',
// 	dance: function () {
// 		return '안유진이 춤을 춥니다.';
// 	}
// };

// console.log (yuJin);
// console.log (yuJin.name);
// console.log (yuJin ['name']);

// const key = 'name';
// console.log (yuJin [key]);

// console.log (yuJin.dance( ) );

// const namekey = 'name';
// const nameValue = '안유진';

// const groupkey = 'group';
// const groupValue = '아이브';

// const yuJin2 = {
// 	[namekey] : nameValue,
// 	[groupkey] : groupValue,
// }

// console.log (yuJin2);

// yuJin2 ['group'] = '코드팩토리';
// console.log (yuJin2);

// yuJin2 ['englishName'] = 'An Yu Jin';
// console.log (yuJin2);

// delete yuJin2 ['englishName'];
// console.log (yuJin2);

// const name = '안유진';
// const yuJin3 = {
// 	name,
// 	};
// console.log (yuJin3);

// function runner ( ) {
// 	console.log ('Hello');
// 	console.log('Code Factory');
// }
// runner ();

// function runner ( ) {
// 	try {
// 		console.log ('Hello');
// // 		throw new Error ('큰 문제가 생겼습니다! ');

// // 	} catch (e) {
// // 		console.log ( '---catch---');
// // 		console.log (e);
// // 	} finally {
// // 		console.log ('--- finally---');
// // 	}
// // 	}
// // 	runner ();

// // class IdolModel {
// //   name = "안유진";
// //   year = 2003;
// // }

// // const yuJin = new IdolModel();
// // console.log(yuJin);

// class IdolModel {
//   name;
//   year;

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const yuJin = new IdolModel("안유진", 2003);
// console.log(yuJin);


//-----------------------------------------------------------------
// class idolModel {
// 	name;
// 	year;
	
// 	constructor (name, year) {
// 		this.name = name;
// 		this.year = year;
// 	}
// 	sayName ( ) {
// 		return `안녕하세요 저는 ${ this.name} 입니다.` ; 
// 	}
// }

// console.log (yuJin.sayName () );
// console.log (wonYoung.sayName () );

// console.log ( typeof IdolModel );
// console.log ( typeof yuJin);

// class IdolModel {
// 	name;
// 	year;
	
// 	constructor (name,year) {
// 		this.name = name;
// 		this.year = year;
// 	}
// 	get nameAndYear () {
// 		return `${this.name}, ${this.year}`;
// 	}
// 	set name (name) {
// 		this.name = name;
// 	}
// }

// const yuJin = new IdolModel ('안유진', 2003);
// console.log (yuJin);
// console.log (yuJin.nameAndYear);

// yuJin.name = '장원영';
// console.log (yuJin);



// class Person {
// 	constructor(name) {
// 		this._name = name;
// 	}
	
// 	set name(newName) {
// 		if (typeof newName === 'string' && newName.length > 0) {
// 			this._name = newName;
// 		} else {
// 			console.error('Invalid name');
// 		}
// 	}

// 	get name() {
// 		return this._name;
// 	}
// }

// const person = new Person('John');
// person.name = 'Jane';
// console.log(person.name); // 출력: Jane


class IdolModel {
	name;
	year;
	static groupName;
	constructor (name, year) {
		this.name = name;
		this.year = year;
	}
}

const yuJin = new IdolModel ('안유진', 2003);
console.log (yuJin);

console.log (IdolModel. groupName)