import steakImage from "../images/medium-rare-steak.jpg";
import pizzaImage from "../images/pizza-italiya.jpg";
import seafoodPastaImage from "../images/seafood-pasta.jpg";
import macaroniImage from "../images/macaroni.jpg";
import {contentDiv} from "../util.js";

const menuPicDiv = document.createElement('div');
menuPicDiv.classList.add('menuPicDiv');
const menuTextDiv = document.createElement('div');
menuTextDiv.classList.add('menuTextDiv');


const menuImages = [steakImage, pizzaImage, seafoodPastaImage, macaroniImage];

function createImageElement(img,index){
    const image = document.createElement("img");
    image.src = img;
    image.classList.add(`image${index}`)
    menuPicDiv.append(image);
}

function createMenuElement(i){
    const menuContainer = document.createElement('div');
    menuContainer.classList.add(`menuContainer`);
    const menuTitle = docuement.createElement('div');
    menuTitle.classList.add('menuTitle');
    const menuText = document.createElement('div');
    menuText.classList.add('menuText');

    contentDiv.append(menuContainer);
    menuContainer.append(menuTitle, menuText);
}

export function loadMenu(){
    contentDiv.innerHTML = "";
    menuPicDiv.innerHTML = "";
    contentDiv.append(menuPicDiv,menuTextDiv);
    menuImages.forEach((each,index)=>createImageElement(each,index));
}