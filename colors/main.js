document.addEventListener('DOMContentLoaded', () =>{

    let inputDir = {x: 0, y: 0}; 
    let lastPaintTime = 0;
    let speed = 16;
    let score = 0;

    let player = {x: 13, y: 15}; 

    rnd(); 

    function main(ctime) {
        window.requestAnimationFrame(main);
        // console.log(ctime)
        if((ctime - lastPaintTime)/1000 < 1/speed){
            return;
        }
        lastPaintTime = ctime;
        gameEngine();
    }

    function gameOver(){
        inputDir =  {x: 0, y: 0}; 
        alert("Game Over");
        player = {x: 13, y: 15};            
        speed = 16;
        score = 0;
        scoreBox.innerHTML = "Score: " + score; 
    }

    function rnd(){
        let a = 2;
        let b = 16;
        red = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())};
        orange = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())};
        green = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())};
        blue = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}; 
        pink = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}; 
        purple = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}; 
        
    }
    
    function gameEngine(){

        if(player.x >= 18 || player.x <=0 || player.y >= 18 || player.y <=0){
            gameOver();
        }
        
        player.x += inputDir.x;
        player.y += inputDir.y;

        board.innerHTML = "";
        
        playerElement = document.createElement('div');
        playerElement.style.gridRowStart = player.y;
        playerElement.style.gridColumnStart = player.x;
        playerElement.classList.add('head');            
        board.appendChild(playerElement);
       

        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = red.y;
        foodElement.style.gridColumnStart = red.x;
        foodElement.classList.add('basic')
        foodElement.classList.add('red')
        board.appendChild(foodElement);

        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = orange.y;
        foodElement.style.gridColumnStart = orange.x;
        foodElement.classList.add('basic')
        foodElement.classList.add('orange')
        board.appendChild(foodElement);

        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = green.y;
        foodElement.style.gridColumnStart = green.x;
        foodElement.classList.add('basic')
        foodElement.classList.add('green')
        board.appendChild(foodElement);

        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = blue.y;
        foodElement.style.gridColumnStart = blue.x;
        foodElement.classList.add('basic')
        foodElement.classList.add('blue')
        board.appendChild(foodElement);

        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = pink.y;
        foodElement.style.gridColumnStart = pink.x;
        foodElement.classList.add('basic')
        foodElement.classList.add('pink')
        board.appendChild(foodElement);

        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = purple.y;
        foodElement.style.gridColumnStart = purple.x;
        foodElement.classList.add('basic')
        foodElement.classList.add('purple')
        board.appendChild(foodElement);

        if(player.y === red.y && player.x ===red.x){                
            gameOver();
        }

        if(player.y === orange.y && player.x ===orange.x){
            score -= 1;            
            scoreBox.innerHTML = "Score: " + score;
            rnd();            
        }

        if(player.y === green.y && player.x ===green.x){
            score += 1;            
            scoreBox.innerHTML = "Score: " + score;            
            rnd(); 
        }

        if(player.y === blue.y && player.x ===blue.x){
            score += 2;            
            scoreBox.innerHTML = "Score: " + score;            
            rnd(); 
        }

        if(player.y === pink.y && player.x ===pink.x){
            if(speed >= 5){speed -= 5; }                   
            rnd(); 
        }

        if(player.y === purple.y && player.x ===purple.x){            
            speed += 5;
            rnd(); 
        }        
    }

    window.requestAnimationFrame(main);
    window.addEventListener('keydown', k =>{
        inputDir = {x: 0, y: 1} 
        switch (k.key) {
            case "ArrowUp":
                console.log("ArrowUp");
                inputDir.x = 0;
                inputDir.y = -1;
                break;

            case "ArrowDown":
                console.log("ArrowDown");
                inputDir.x = 0;
                inputDir.y = 1;
                break;

            case "ArrowLeft":
                console.log("ArrowLeft");
                inputDir.x = -1;
                inputDir.y = 0;
                break;

            case "ArrowRight":
                console.log("ArrowRight");
                inputDir.x = 1;
                inputDir.y = 0;
                break;
            default:
                break;
        }

    });
})
