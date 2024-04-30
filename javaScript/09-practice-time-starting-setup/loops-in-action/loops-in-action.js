// First Example : Sum numbers

// 클릭시 동작 Event -> 합산 함수 if -> 출력
// 필요한 이름 : 버튼이름, 입력된 숫자, 출력할 숫자. 합산 함수

const firstbutton = document.getElementById('first-button');

function sumNumberResult() {
  const enteredNumber = document.getElementById('user-number');
  const incomeNumber = enteredNumber.value;

  let outcomeNumber = 0;

  for (let i = 0; i <= incomeNumber; i++) {
    outcomeNumber = outcomeNumber + i;
  }

  const outputResultElement = document.getElementById('calculated-sum');

  outputResultElement.textContent = outcomeNumber;
  outputResultElement.style.display = 'block';
}

firstbutton.addEventListener('click', sumNumberResult);


// Highlight link exercise

const secondButton = document.querySelector('#highlight-links button'); // 이 방법도 !! 

function hightlightEffect () {
    const changeHighlighta = document.querySelectorAll('#highlight-links a'); // 요거 !!!! 

    for ( let anchorElement of changeHighlighta) {
        anchorElement.classList.add('highlight'); // 요거 !!! 
    }
}

secondButton.addEventListener('click', hightlightEffect);


// Display user data

const dummyUserData = { 
    firstName: 'Eunjin',
    lastName: 'Shin',
    age: 29
};


const thirdButton = document.querySelector('#user-data button');

function showTheData () {
       const displayUl = document.getElementById('output-user-data');

       for(let key in dummyUserData) {
        const resultDataList = document.createElement('li');
        const outputText = key.toUpperCase() + ': '+ dummyUserData[key];
        resultDataList.textContent = outputText;
        displayUl.append(resultDataList);   // append 
       }

       
}

thirdButton.addEventListener('click', showTheData);


// Statistics / Roll the Dice  이건 다음에 다시 .. 정말 모르겠다 ㅠㅠ 


const lastButton = document.querySelector('#statistics button');

function rollDice( ) {


}

function NumberOfDiceRolls () {
    const targetNumber = document.getElementById('user-target-number');
    const diceRollsLists = document.getElementById('dice-rolls');


    const enteredNumber = targetNumber.value;
    diceRollsLists.innerHTML = '';

    let hasRolledTargetNumber = false;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice( ) ;
        if (rolledNumber == enteredNumber);
    }

}

lastButton.addEventListener('click', NumberOfDiceRolls);