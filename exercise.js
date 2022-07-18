//     let body = document.querySelector("body"); 
//     body.style.margin = "0" ; 
//     let container = document.createElement("div"); 
//     container.style.width = "100%" 
//     container.style.height = "100vh"; 
//     container.style.position = "relative"
//    body.appendChild(container);
// // create black 
//    let black = document.createElement("div");
//    black.style.position = "absolute" ; 
//    black.style.backgroundColor = "black"
//    black.style.width = "100%" ; 
//    black.style.height = "33.3%";
//    black.style.top = "0"; 
//     container.appendChild(black);
// //  create green 
// let green = document.createElement("div");
// green.style.position = "absolute" ; 
// green.style.backgroundColor = "green"
// green.style.height = "33.3%";
// green.style.width = "100%" ; 
// green.style.bottom = "0";
//  container.appendChild(green);

// // red 
// let red = document.createElement("div");
// red.style.position=  "absolute" ; 
// red.style.borderStyle = "solid" ; 
// red.style.borderColor =  "transparent  transparent transparent red" ;
// red.style.borderWidth = "50vh" ; 
// container.appendChild(red) ; 

// //////

const grassname = "grass"
const countgrass = 40 ; 
const ballname = "pokeball"
const countbball = 10 ; 
let player = document.querySelector(".player");
let playerpos = {
    x:0 ,  
    y:0 , 
}
const audioo = new Audio("coin.mp3");
const constspeed = 5 ; 
let playervol = {
    x:0,  
    y: 0 , 
}
// let start_palyer_width = {
//  x: (window.innerWidth / 2) , 
//  y : (window.innerWidth / 2) ,
// }
function start(){
    generaterandomelement(grassname  , countgrass)
    generaterandomelement(ballname  , countbball)

    // playervol = start_palyer_width; 
};
function undate(){
    playerpos.x += playervol.x ;  
    playerpos.y += playervol.y ; 
    player.style.left = playerpos.x + "px"
    player.style.top = playerpos.y + "px"
    checkcollesion() ;
    requestAnimationFrame(undate);
}
// move the element for user 
window.addEventListener("keydown", (e)=>{
  if (e.key == "ArrowUp"){  
    playervol.y = -1 * constspeed ;
    player.style.backgroundImage = "url('player_front.png')";
   
  } if (e.key == "ArrowDown"){
    playervol.y = 1 * constspeed ;
    player.style.backgroundImage = "url('player_back.png')";

  }if (e.key == "ArrowLeft"){   
    playervol.x = -1 * constspeed ;
    player.style.backgroundImage = "url('player_left.png')";

  } if (e.key == "ArrowRight"){
    playervol.x = 1 * constspeed ;
    player.style.backgroundImage = "url('player_right.png')";
  }
   player.classList.add("walk")
})
window.addEventListener("keyup" , (e)=>{
  playervol.x = 0 ;
  playervol.y = 0 ;
  player.classList.remove("walk")
})

// create grasss random 
function generaterandomelement(classname , count){
    for (let i = 0; i < count; i++) {
        let element = document.createElement("div") ; 
        element.classList.add(classname) ; 
        element.style.left = Math.random()  * 100 + '%';
        element.style.top = Math.random()  * 100  + '%';
        document.body.appendChild(element)
    }
   
}
function checkcollesion(){
    let balls = document.querySelectorAll(".pokeball"); 
    balls.forEach(ball =>{
        if (collestion(ball ,player ) ){
            ball.style.left = Math.random()  * 100 + '%';
            ball.style.top = Math.random()  * 100  + '%';
            audioo.play();
        }
    })
}
function collestion($div1 , $div2){
    var x1 = $div1.getBoundingClientRect().left // know size ball x 
    var y1 = $div1.getBoundingClientRect().top // know size ball y 
    var h1 = $div1.clientHeight;
    var w1 = $div1.clientWidth; 
    var b1 = y1 + h1;
    var r1 = w1 + x1 

    var x2 = $div2.getBoundingClientRect().left // know size ball x 
    var y2 = $div2.getBoundingClientRect().top // know size ball y 
    var h2 = $div2.clientHeight;
    var w2 = $div2.clientWidth; 
    var b2 = y2+ h2;
    var r2 = w2 + x2  

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2 ) return false ;
       return true ;    
}



start();
undate();


