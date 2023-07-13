export const cards =[
    "../img/бараш.png",
   "../img/копатыч.png",
    "../img/ёжик.png",
   "../img/нюша.png",
   "../img/пин.png",
   "../img/крош.png",
   "../img/карыч.png",
   "../img/совунья.png",

]
 export const back=[
   "../img/фон-01.png",
   "../img/.9.jpg",
];


export class Card{
img;
back = cards [8];
status=false;
constructor(img){
   this.img=img;
  }

}
export const createCards= (lvl)=>{
   const array =[];
   for (let i = 0;i<lvl/2;i++){
      array.push(new Card(cards[i]));
      array.push(new Card(cards[i]));


   } 
   
   for(let i =0; i < lvl; i++){
    let a = array[i];
   let r = Math.floor(Math.random() * (lvl-1));
   array [i] = array[r]
   array[r] = a;
}
return array;
}
