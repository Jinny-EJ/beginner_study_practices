const images = ["galaxy.jpg", "moon.jpg", "ocean.jpg", "turkey.jpg"];


const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // body 에 html 을 추가하는 것 = appendChild
