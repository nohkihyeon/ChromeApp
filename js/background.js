const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgIamge = document.createElement("img");

bgIamge.src = `img/${chosenImage}`;
document.body.appendChild(bgIamge);