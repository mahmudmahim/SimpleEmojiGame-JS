const cards = document.querySelectorAll(".card");
console.log(cards);

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach( (card) => card.addEventListener("click",flip));

function flip () {
    this.classList.add("flip");
    if(!isFlipped){
        isFlipped = true;
        firstCard = this;
    }else{
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);

        checkIt();
    }
};
var point = 0;
//TODO
//Add points for matching;yeHooo dOne!!
//Show the points in html view;
function checkIt(){
    //console.log("Checking.....");
    if(firstCard.dataset.image === secondCard.dataset.image){
        point +=5;
        console.log(point);
        document.getElementById("head2").innerHTML = "Points: "+point;

        success();
    }else{
        if(point > 0){
            point -=5;
            console.log(point);
            document.getElementById("head2").innerHTML = "Points: "+point;
        }
        fail();
    }
};



function points (){


}

function success(){
    firstCard.removeEventListener("click",flip);
    secondCard.removeEventListener("click",flip);
    reset();
}
function fail(){
    
    setTimeout( () => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    },1000);
}

function reset(){
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}

function shuffle(){

    cards.forEach( (card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    })
}

//shuffle();

window.onload = shuffle();