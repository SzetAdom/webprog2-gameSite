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
function cardClicked(){


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
        return;
    }
}







