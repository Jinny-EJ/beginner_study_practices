let editedPlayer = 0;

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
// 여기서 중요한 점은 openPlayerConfig 와 같이 함수를 playerConfigOverlayElement.js 에 정의하고 여기서 사용하려고 할때 () 을 넣어줄 필요가 없다는 것! 



cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);