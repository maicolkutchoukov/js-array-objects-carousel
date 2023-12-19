/*
-----------------------------------------------------------
Consegna:
Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, 
l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. 
Ovvero se la slide attiva è la prima e l'utente clicca la freccia verso destra, 
la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide 
se l'utente clicca la freccia verso sinistra.
-----------------------------------------------------------
*/
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const carousel = document.querySelector('.carousel-container');
const slider = document.querySelector(".slide");
console.log(images)
console.log(carousel)
for (let i = 0; i < images.length; i++) {
    console.log(images[i].url, images[i].title, images.length) 
    const items = document.createElement('div');
    items.classList.add('items');
    items.innerHTML = `
                        <img src=${images[i].url} class="img-fluid"> 
                        <div class="items-body text-end pe-4 text-white">
                        <h2 class="">${images[i].title}</h2>
                        <p>${images[i].description}</p>
                        </div>
                    `
    const sliderImage = document.createElement('img');
    sliderImage.src = images[i].url
    slider.append(sliderImage);

    if (images[i] == images[0]){
       items.classList.add('active');
       sliderImage.classList.add('border-slide')
    }
    carousel.append(items);
}

const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');
const itemsArray = document.querySelectorAll(".items")
const imgSlide = document.querySelectorAll('.slide>img');
let contatore = 0

// Creazione bottone scorrimento 'Foto successiva'

buttonNext.addEventListener('click', myFunctionNext)

// Creazione bottone scorrimento 'Foto Precedente'

buttonPrev.addEventListener('click', myFunctionPrev)

// Timing function

let clock = setInterval(myFunctionNext, 3000);

// Functions Next and Prev

function myFunctionNext(){
    itemsArray[contatore].classList.remove('active');
    imgSlide[contatore].classList.remove('border-slide');

    
    if (contatore < 4){
        contatore++;            
    } else{
        contatore = 0;      
    }   
    itemsArray[contatore].classList.add('active');
    imgSlide[contatore].classList.add('border-slide');

}

function myFunctionPrev(){
    itemsArray[contatore].classList.remove('active');      
    imgSlide[contatore].classList.remove('border-slide');
    if (contatore > 0){    
        contatore--;              
    }  else {   
        contatore = 4;
    }   
    itemsArray[contatore].classList.add('active');
    imgSlide[contatore].classList.add('border-slide');
}

// Bottone stop/start autoplay

const stopButton = document.querySelector('.stop');
stopButton.addEventListener ('click', function(){
    if (clock != null) {
        clearInterval(clock);
        stopButton.innerHTML = "Riavvia L'autoplay"

        clock = null
    } else {
        clock = setInterval(myFunctionNext, 3000);
        stopButton.innerHTML = "Ferma L'autoplay"
    }
    }
)