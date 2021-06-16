document.addEventListener('DOMContentLoaded', () =>{

    let inputDir = {x: 0, y: 0}; 
    let lastPaintTime = 0;
    let speed = 16;
    let score = 0;

    let snakeArr = [
        {x: 13, y: 15}
    ]; 

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
        snakeArr = [{x: 13, y: 15}];            
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

        if(snakeArr[0].x >= 18 || snakeArr[0].x <=0 || snakeArr[0].y >= 18 || snakeArr[0].y <=0){
            gameOver();
        }
        
        snakeArr[0].x += inputDir.x;
        snakeArr[0].y += inputDir.y;

        board.innerHTML = "";
        snakeArr.forEach((e)=>{
            snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = e.y;
            snakeElement.style.gridColumnStart = e.x;
            snakeElement.classList.add('head');            
            board.appendChild(snakeElement);
        });

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

        if(snakeArr[0].y === red.y && snakeArr[0].x ===red.x){                
            gameOver();
        }

        if(snakeArr[0].y === orange.y && snakeArr[0].x ===orange.x){
            score -= 1;            
            scoreBox.innerHTML = "Score: " + score;
            rnd();            
        }

        if(snakeArr[0].y === green.y && snakeArr[0].x ===green.x){
            score += 1;            
            scoreBox.innerHTML = "Score: " + score;            
            rnd(); 
        }

        if(snakeArr[0].y === blue.y && snakeArr[0].x ===blue.x){
            score += 2;            
            scoreBox.innerHTML = "Score: " + score;            
            rnd(); 
        }

        if(snakeArr[0].y === pink.y && snakeArr[0].x ===pink.x){

            if(speed >= 5){speed -= 5; }                   
            rnd(); 
        }

        if(snakeArr[0].y === purple.y && snakeArr[0].x ===purple.x){            
            speed += 5;
            rnd(); 
        }
        
    }

    window.requestAnimationFrame(main);
    window.addEventListener('keydown', e =>{
        inputDir = {x: 0, y: 1} // Start the game
        switch (e.key) {
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
