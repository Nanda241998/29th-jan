let score = document.querySelector('.score');
let gameScreen = document.querySelector('.gameScreen');
let startScreen = document.querySelector('.startScreen');
const roadarea = document.querySelector('.road');

startScreen.addEventListener('click',startGame);
document.addEventListener('keydown',keyPressed);
document.addEventListener('keyup',keyReleased);

let controls = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = {
    speed: 5,
    score: 0,
    start: false
}

function init()
{
    let playercar = document.cre
}
function start(){

    let car = document.querySelector('.car');
    let road = gameScreen.getBoundingClientRect();
    console.log(road);

    let carRect = car.getBoundingClientRect();
    console. log(carRect)

    console.log(player.x, player.y, player.speed)

           if(controls.ArrowUp && player.y > road.top){
               player.y = player.y - player.speed;}

           if(controls.ArrowDown && player.y < road.bottom-(carRect.height+ carRect.height/2)){
               player.y = player.y + player.speed;}

            if(controls.ArrowLeft && player.x > road.left){
              player.x = player.x - player.speed;}

           if(controls.ArrowRight && player.x < road.right){
             player.x += player.x + player.speed;}
     

    if(player.start){
        console.log("After change", player.x, player.y)
        car.style.top = player.y+ "px";
        car.style.left = player.x +"px";
          requestAnimationFrame(start);
    }
}

function keyPressed(e){
    
    console.log("pressed", e.key);
    //controls.log(e.key , controls.e.key)
    if(controls["e.key"] == false){
    controls[e.key] = true;
   console.log(controls);
    }
}
function keyReleased(e){
    console.log("released", e.key);
    if(controls["e.key"] !== true){
     controls[e.key] = false;
    }
}

//startScreen.classList.add('hide');
function startGame(){
    
    player.start = true;
    startScreen.classList.add('hide');
    gameScreen.classList.remove('hide');

   
        let car = document.createElement('div');
        car.setAttribute('class','car');
       
        //car.innerText = "Car";
       // car.style.left = "10px";
         //car.style.top = "10px";

       // car.style.backgroundColor = "red";
        
        gameScreen.appendChild(car);
        player.x = car.offsetLeft;
        player.y = car.offsetTop;
        
        window.requestAnimationFrame(start) 
        for(x = 0; x < 5; x++)
        {
        let roadlines = document.createElement('div');
        roadlines.setAttribute('class','vl');
        roadlines.y = x * 150;
        roadlines.style.top = roadlines.y + 'px';
        gameArea.appendChild(roadlines);
        }  


}
