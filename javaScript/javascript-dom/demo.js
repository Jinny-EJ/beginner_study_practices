const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

// console.dir(prodectNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enterdTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enterdTextLength;

  remainingCharsElement.textContent = remainingCharacters;

  if (remainingCharacters === 0 ) { // 왜 === 를 쓰나 했더니 그냥 모범사례라서 이렇게 해야한다고함... [;;]
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
  } else {
    remainingCharsElement.classList.remove("error", "warning");
    productNameInputElement.classList.remove("error", "warning");
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
