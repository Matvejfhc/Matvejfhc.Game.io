import { createField } from "./createlField.js";

export const createMenu=()=>{
const model = document.querySelector("model");
if (model) model.remove();





   const game = document.querySelector(".game");
   game.style.display="none";
   const menu = document.querySelector(".menu");
   menu.style.display="block";
   const btn = menu.querySelectorAll(".btn") ;
   btn.forEach (el =>{

      el.addEventListener("click",()=>{
         console.log(el.textContent);
         switch(el.textContent){
            case "Легкий":
               menu.style.display="none";
               createField(8);
               break;
            case"Средний":
            menu.style.display="none";

               createField(12);
               break;
            case "Сложный":
               menu.style.display="none";

               createField(16);
               break;
         }

      });
   });
   const main= document.querySelector("main");
   main.classList.remove("null");




}
   