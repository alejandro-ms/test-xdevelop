const $puzzleLink = document.querySelectorAll('.card__puzzle-container');
const $puzzleImg = document.querySelectorAll('.card__puzzle-icon');
const $cards = document.querySelectorAll('.card');

const p = document.createElement("p");

console.log($puzzleLink);
console.log(p);
$puzzleLink.forEach((listElements, i) => {
    listElements.addEventListener("mouseover", () => {
        if($puzzleLink[i]) {
            p.innerHTML = "Be the first one to recommend!";
            $cards[i].appendChild(p);
            $cards[i].style.boxShadow = "0px 15px 36px rgba(0, 0, 0, 0.25)";
            p.style.backgroundColor = '#fff';
            p.classList.add('card__p');
            $puzzleImg[i].style.backgroundColor = "#8E54E9";
            $puzzleLink[i].style.backgroundColor = "#8E54E9";
            $puzzleImg[i].style.backgroundImage =  'url(../assets/puzzle-icon-white.svg)';
        }
    })
    listElements.addEventListener("mouseout", () => {
        if($puzzleLink[i]) {
            p.innerHTML = "Be the first one to recommend!";
            $cards[i].removeChild(p);
            $cards[i].style.boxShadow = "";
            $puzzleLink[i].style.backgroundColor = '#fff';
            $puzzleImg[i].style.backgroundColor = '#fff';
            $puzzleImg[i].style.backgroundImage =  'url(../assets/puzzle-icon.svg)';
        }
    })
})