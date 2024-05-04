function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
}

// 이부분 다시 들어보자. 강의 315번 잊지말고 !
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim(); // trim 이란 추가 공백제거 하는 것.

  //유효성 검사를 기본정도의 수준으로는  html 에서 설정 할 수 있지만, (ex.required)
  //자바스크립트를 이용하면 좀 더 세부적인 내용으로 설정이 가능함.

  if (!enteredPlayername) {
    //enteredPlayername === '' 으로 확인해도 괜찮음.
    event.target.firstElementchild.classList.add('error');
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
}
// 이는 브라우저의 기본 동작을 방지하기 위한 장치인데, 기본 동작이란, 확인을 클릭할 경우
// 브라우저는 HTTP 요청을 서버에게 보내려고 시도하고 이 경우에는 개발 서버로 보내고자 함.
// 그리고 지금의 경우에는 서버에 요청을해도 서버가 뭘 해야 할지 몰라서 기본 화면을 다시 반환하게 됨.
// 그 동작을 멈춰주는 것임. 우리는 브라우저 기반의 게임을 만드는 것이기 때문. preventDefault()

//FormData 는 청사진을 의미.
