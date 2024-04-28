// 오늘 해볼 작업은 click me 에 이벤트를 추가하는 작업 
// 일단 p 에 있는 click me 라는 text 에 접근을 해야함. 

// let paragraphElement = document.body.firstElementChild (이 방식으로도 접근할 수 있고, 아래에 있는 코드로 접근할 수도 있음)
let paragraphElement = document.querySelector('p');

// 이벤트리스너 적용해주기  여기서 addEventListener 은 method 임. 
// 아래 코드에서 () 안의 첫번째 요소는 click 이 발생했을때를 말해주는 것이고, 두번째 요소는 click 이 일어났을때 어떤 일이 일어나야 하는지 설명해줌. 
// 이때 실행할 코드를 정의해 줘야 하는데, 중요한 점 중 하나가 이 줄에 코드를 쓸 수 없음. 
// 그래서 여기에는 함수를 사용해야함. (함수는 사용자 지정 명령이자 주문형 코드임.)코드를 작성해서 함수에 넣어서, 필요할때마다 쓸 수 있음. 

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
}
// 사실 외부에서 사용하는 변수를 함수 내부에 사용하지 않는게 좋음 . 하지만 이번 코드에서는 이 함수를 코드 어디에서도 실행시키지 않을 것임. 
// 대신에 우리는 이 함수를 이벤트 시스너를 통해 브라우저에 전달해서 click 이 발생할 때 브라우저가 실행 할 수 있도록 함.
// 왜냐하면 우리는 언제 click 이 일어날 수 알 수 없음. 그래서 밑의 코드에서  changeParagraphText 뒤에 () 를 포함하지 않게 됨. 
// 만약 ()을 포함하게 되면 이 줄의 코드가 분석되고 실행되자 마자 실행시킬 것. 
// this is also called "a callback function" : A function that is passed as a parameter value to another function or method ("to be excuted in the future")
paragraphElement.addEventListener('click', changeParagraphText);


// -----------------

// 여기서 한번 클릭시 Clicked 로 바뀐 다음 다시는 함수가 작동이 안된다고 생각할 수 있지만, 
// 글씨가 더이상 바뀌지 않을뿐 계속해서 작동이 되고 있는 걸 
// function 안에 console.log('Paragraph clicked!'); 를 적용하면 console에서 작동하는 것을 확인 할 수 있음. 


let inputElement = document.querySelector('input');


function retrieveUserInput(event) { // 여기서 event 는 매개 변수이다. 
    let enteredText = inputElement.value; // 와   let enteredText = event.target.value; 는 같은 결괏값을 내보냄. 전체 문장 모두 출력 
    //let enteredText = event.data; // 새로 입력되는 문자만 출력됨. 
    console.log(enteredText);
   // console.log(event); // <- 이걸로 console 에서 새로 만든 함수의 내부ㅡ
}
// 입력 요소의 경우 삽입된 값을 가져오려면 value 를 사용해줘야함. 

inputElement.addEventListener('input', retrieveUserInput);
// input event 는 keyup event 에도 반응하지만, 값을 입력 필드에 끌어다 놓거나 입력 필드에 붙여넣는 것과 같은 것들을 할 수도 있음. 
// 그래서 입력 필드에 어떤 항목이 삽입될 때마다 이 입력 이벤트가 발생함. 따라서 input 이 일반적으로 리슨 하는 이벤트임. 


