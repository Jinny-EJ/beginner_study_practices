function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}
// 여기서 block 의 의미는 화면에 보여준다는 것.

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  // formElement.firstElementChild.classList.remove("error");
  // errorsOutputElement.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  // 이 preventDefault 메서드는 화면이 자동 reroad 되는 걸 막아줌.
  // 요청을 보내는 브라우저의 기본 동작을 방지함.
  // 이는 브라우저의 기본 동작을 방지하기 위한 장치인데, 기본 동작이란, 확인을 클릭할 경우
  // 브라우저는 HTTP 요청을 서버에게 보내려고 시도하고 이 경우에는 개발 서버로 보내고자 함.
  // 그리고 지금의 경우에는 서버에 요청을해도 서버가 뭘 해야 할지 몰라서 기본 화면을 다시 반환하게 됨.
  // 그 동작을 멈춰주는 것임. 우리는 브라우저 기반의 게임을 만드는 것이기 때문. preventDefault()

  const formData = new FormData(event.target);
  // 여기서 new FormData 는 객체 인스턴스화임.
  // FormData 는 기본적으로 특정 모양의 객체를 생성하는 방법을 알고 있는 함수임. 이건 기본 내정된 함수라는 것 같음.
  // 발생한 이벤트를 설명하는 이 이벤트 객체에는 이 이벤트를 담당한 HTML 요소를 가리키는 카겟 속성이 있음
  // event.target 을 FromData 로 전달해주면, 자바스크립트가 배후에서 이 양식을 html form 공간 에서 분석해서 자동으로 입력을 찾을 것임.
  // 그리고 아무값을 찾는게 아니라 name 필드가 있는 입력을 찾아냄.

  const enteredPlayername = formData.get("playername").trim(); // trim 이란 추가 공백제거 하는 것.
  // 여기서 get 을 사용하면 입력 중 하나의 값을 얻을 수 있음. 그리고 여기에 값을 얻으려는 입력 요소의 식별자가 있는 문자열을 전달함.
  // 가져온 문자열에는 trim() 이라는 (자바스크립트에 있는 모든 문자역에 사용할 수있는)내장된 메서드 를 사용할 수 있는데,
  //trim 은 초과 공백을 잘라냄. 문자 중간의 공백은 남겨둔채 앞뒤에 있는 공백을 삭제해줌.

  //유효성 검사를 기본정도의 수준으로는  html 에서 설정 할 수 있지만, (ex.required)
  //자바스크립트를 이용하면 좀 더 세부적인 내용으로 설정이 가능함.

  if (!enteredPlayername) {
    //enteredPlayername === '' 으로 확인해도 괜찮음.
    event.target.firstElementchild.classList.add('error');
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
}

//FormData 는 청사진을 의미.

// const updatedPlayerDataElement = document.getElementById('player-'+ editedPlayer + '-data');
// updatedPlayerDataElement.children[1].textContent = enteredPlayername;
