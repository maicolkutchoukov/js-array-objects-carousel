/*
-----------------------------------------------------------
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e 
inseriamo tutte le immagini dinamicamente
servendoci dell'array fornito e un semplice 
ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, 
che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo 
con lo stesso slider stilato nella milestone 1, 
ma costruito dinamicamente attraverso JavaScript.
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


// const img1 = document.createElement('img');
// img1.src = 'img/01.webp';
// img1.classList = 'active'
// const img2 = document.createElement('img');
// img2.src = 'img/02.webp';
// const img3 = document.createElement('img');
// img3.src = 'img/03.webp';
// const img4 = document.createElement('img');
// img4.src = 'img/04.webp';
// const img5 = document.createElement('img');
// img5.src = 'img/05.webp';

// const imgArray = [img1, img2, img3, img4, img5];
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
    // slider.innerHTML += `
    //                 <img src=${images[i].url} class="img-fluid active">
    // `
    const sliderImage = document.createElement('img');
    sliderImage.src = images[i].url
    slider.append(sliderImage);

    if (images[i] == images[0]){
       items.classList.add('active');
       sliderImage.classList.add('border-slide')
    }
    carousel.append(items);

}

/*
--------------------------------------------------------------------------------
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, 
che quindi verrà visualizzata al posto della precedente.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, 
ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.
Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, 
se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. 
Non dedichiamo però al ripasso più di una mezz'ora, 
così da non perdere di vista il focus dell'esercizio.
--------------------------------------------------------------------------------
*/

const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');
let contatore = 0

// Creazione bottone scorrimento 'Foto successiva'
const itemsArray = document.querySelectorAll(".items")
console.log(itemsArray);
const imgSlide = document.querySelectorAll('.slide>img');
console.log(imgSlide)
buttonNext.addEventListener('click', function(){
    myFunctionNext()             
})

// Creazione bottone scorrimento 'Foto Precedente'

buttonPrev.addEventListener('click', function(){
    itemsArray[contatore].classList.remove('active');      
    imgSlide[contatore].classList.remove('border-slide');
    if (contatore > 0){    
        contatore--;              
    }  else {   
        contatore = 4;
    }   
    itemsArray[contatore].classList.add('active');
    imgSlide[contatore].classList.add('border-slide');

})

// Timing function

// let clock = setInterval(myFunctionNext, 1000);

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

// const stopButton = document.querySelector('.stop');
// stopButton.addEventListener ('click', function(){
//     if (clock != null) {
//         clearInterval(clock);
//         stopButton.innerHTML = "Riavvia L'autoplay"

//         clock = null
//     } else {
//         clock = setInterval(myFunctionNext, 3000);
//         stopButton.innerHTML = "Ferma L'autoplay"

//     }
// }
// )