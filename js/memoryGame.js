let cardList= [];
for (let i = 0; i < 8; i++)
{
    cardList.push(i);
    cardList.push(i);
}

for (let i = cardList.length - 1; i > 1; i--)
{
    let j = Math.floor(Math.random() * (i + 1));
    let value = cardList[j];
    cardList[j] = cardList[i];
    cardList[i] = value;
}
const pictures = ["media/memoryCards/rabbit.png", "media/memoryCards/lion.png", "media/memoryCards/horse.png",
    "media/memoryCards/rat.png", "media/memoryCards/fox.png", "media/memoryCards/cow.png",
    "media/memoryCards/crab.png", "media/memoryCards/wolf.png"];

let cards = [];
let x = 0;
cards = document.getElementsByClassName("card");
let firstSelected = null;
let secondSelected = null;
for(let i = 0; i<16; i++){
    let card = document.createElement("img");
    card.setAttribute("src", pictures[cardList[i]]);
    cards[i].appendChild(card);
    cards[i].children[0].setAttribute("class", "flipped");
    cards[i].addEventListener('click', cardClicked);
}
let firstClick = false;
function cardClicked(){
    if(!firstClick){
        firstClick = true;
        timer = window.setInterval(function() {
            countDown();
        }, 1000)
    }
    if(firstSelected != null && secondSelected != null)
    {
        return;
    }
    if(firstSelected == null)
    {
        firstSelected = this;
        let img = this.getElementsByTagName("img");
        img[0].removeAttribute("class");
        return;
    }
    if(this.getElementsByClassName("flipped").length === 0)
    {
        return;
    }
    secondSelected = this;
    let img = this.getElementsByTagName("img");
    img[0].removeAttribute("class");
    if(firstSelected.getElementsByTagName("img")[0].isEqualNode(secondSelected.getElementsByTagName("img")[0]))
    {
        firstSelected = null;
        secondSelected = null;
        moves--;
        found++;
        document.getElementById("moves").innerHTML = `<p>${moves} moves left</p>`;
        document.getElementById("found").innerHTML = `<p>${found} pairs found</p>`;
        checkForEnd();
        return;

    }
    else
    {

        setTimeout(function(){
            firstSelected.children[0].setAttribute("class", "flipped");
            secondSelected.children[0].setAttribute("class", "flipped");
            firstSelected = null;
            secondSelected = null;
        }, 750);
        moves--;
        document.getElementById("moves").innerHTML = `<p>${moves} moves left</p>`;
        checkForEnd();
        return;
    }
}
let time = 60;
let moves = 20;
let found = 0;

function countDown() {
    if (time > 0 ) { // so it doesn't go to -1
        document.getElementById("timer").innerHTML = `<p>${time} seconds left</p>`;
        time--;
    } else {

        clearInterval(timer);
        loseGame();
    }
}

function loseGame(){
    document.getElementById("game").innerHTML = `You lost!<br>${time} seconds left ${moves} moves left<br>Press enter to play again!`;
    document.getElementById("game").style.fontSize = "60px";
    document.getElementById("game").style.textAlign = "center";
    document.addEventListener('keyup', function(e){
        if(e.keyCode == 13)
            window.location.reload();
    })

}
function checkForEnd(){
    if(moves === 0){
        loseGame()
    }else if(found === 8){
        document.getElementById("game").innerHTML = `You won!<br>Press enter to play again!`;
        document.getElementById("game").style.fontSize = "60px";
        document.getElementById("game").style.textAlign = "center";
        document.addEventListener('keyup', function(e){
            if(e.keyCode === 13)
                window.location.reload();
        })
    }
}







