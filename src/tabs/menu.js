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

class menuElement{
    constructor(menuTitle,menuText){
        this.menuTitle = menuTitle;
        this.menuText = menuText;
    }
}
const steak = new menuElement("Medium-Rare Ribeye Steak:","A succulent, perfectly cooked ribeye steak, seared to lock in the natural juices, and served medium-rare to highlight its tenderness. The steak is seasoned with a blend of coarse sea salt and cracked black pepper, and garnished with fresh herbs, making it a hearty and flavorful main course.")
const pizza = new menuElement("Classic Italian Pizza:","A traditional Italian pizza topped with a variety of fresh ingredients, including ripe tomatoes, savory black olives, and earthy mushrooms. Finished with slices of pepperoni, ham, and fresh basil leaves, this pizza is baked to perfection with a golden, crispy crust and melted mozzarella cheese, offering a delicious, balanced flavor in every slice.")
const pasta = new menuElement("Seafood Marinara Pasta:","This dish features perfectly cooked al dente pasta, tossed in a rich, tomato-based marinara sauce infused with garlic and a hint of spice. The pasta is generously mixed with fresh mussels, squid, and juicy cherry tomatoes, delivering a delightful combination of seafood flavors with every bite.")
const macaroni = new menuElement("Classic Italian Macaroni:","Savor the timeless delight of our Classic Italian Macaroni, made from premium durum wheat semolina. These perfectly al dente, curved tubes of pasta are expertly crafted to capture rich, savory sauces. Tossed in a velvety cheese blend and baked to golden perfection, this dish offers a comforting, authentic Italian experience. Enjoy a sprinkle of fresh herbs and a touch of seasoning to enhance the flavors. Ideal for a satisfying meal that brings a taste of Italy to your table.")

function createImageElement(img,index){
    const image = document.createElement("img");
    image.src = img;
    image.classList.add(`image${index}`)
    contentDiv.append(image);
}
let menus = [steak, pizza, pasta, macaroni];

function createMenuElement(elementArr){
    elementArr.forEach((each,index)=>{
        const menuContainer = document.createElement('div');
        menuContainer.classList.add(`menuContainer`, `index${index}`);

        const menuTitle = document.createElement('div');
        menuTitle.classList.add('menuTitle');
        menuTitle.textContent = each.menuTitle;

        const menuText = document.createElement('div');
        menuText.classList.add('menuText');
        menuText.textContent = each.menuText;

        contentDiv.append(menuContainer);
        menuContainer.append(menuTitle, menuText);
    })
}

export function loadMenu(){
    contentDiv.innerHTML = "";
    menuPicDiv.innerHTML = "";
    contentDiv.id = "menuContent";
    menuImages.forEach((each,index)=>createImageElement(each,index));
    createMenuElement(menus);
}
