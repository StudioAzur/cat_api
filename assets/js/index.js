// On va chercher nos éléments dans le DOM
let card = document.querySelector("#card");
let generateCat = document.getElementById("generate_cat");
let url = "https://api.thecatapi.com/v1/images/search";
const music = document.querySelector("audio");

let data = async () => (await fetch(url)).json();

// Fonction qui permet de générer une image de chat différent récupéré avec fetch
const getRandomCat = () => {
  music.play();
  if(card.firstChild){
    card.removeChild(card.childNodes[0]);
  }
  data()
    .then((result) => {
      let image = document.createElement("img");
      image.src = result[0].url;
      card.prepend(image);
    })
    .catch((error) => {
      console.log(error);
    });
};

generateCat.addEventListener("click", getRandomCat);


let axeX = document.querySelector("#position_x");
let axeY = document.querySelector("#position_y");

const displayPosition = (event) =>{
   axeX.innerText = event.clientX;
   axeY.innerText = event.clientY;
}



document.addEventListener("mousemove", displayPosition);