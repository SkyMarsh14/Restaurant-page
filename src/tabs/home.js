import image from "../images/restaurant-home-image.jpg";

const contentDiv = document.querySelector('#content');
const homeImage = document.createElement('img');
homeImage.src = image;
homeImage.classList.add('homeImage')
const welcomeMsg = document.createElement('div');
const titleDiv = document.createElement("div");
titleDiv.classList.add("titleDiv");
welcomeMsg.classList.add('mainText')
welcomeMsg.innerHTML = `
Welcome to Yuto's Restaurant!<br><br>

We take great pride in our local business, ensuring that every dish we serve is made with ingredients that are locally grown and harvested. This commitment to quality is why our dishes have a uniquely fresh taste. 

Come and enjoy a meal with us, where the finest local products meet a warm and welcoming atmosphere.
`
titleDiv.textContent = "Where Every Bit Tells a Story"

export function loadHome(){
    contentDiv.innerHTML = "";
    contentDiv.append(titleDiv,homeImage,welcomeMsg);
};