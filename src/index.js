import "./styles.css";
import {loadHome} from "./tabs/home";
import { loadMenu } from "./tabs/menu.js";

const tabs = document.querySelectorAll('button');

loadHome();
tabs[0].addEventListener("click",()=>loadHome());
tabs[1].addEventListener("click",()=>loadMenu());
