const reviews = [
    {   id: 1,
        name: 'Dipankar Roy REACT',
        job : 'React Front-End Developer',
        img: 'https://res.cloudinary.com/roy-technology/image/upload/v1619445305/person-4_pydzng.jpg',
        text: 'Dipankar Roy Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste laborum eum maiores eaque quasi pariatur consequuntur rem, qui animi?',
    },
    {   id: 2,
        name: 'Sara Jhon',
        job : 'Web Designer',
        img: 'https://res.cloudinary.com/roy-technology/image/upload/v1619445305/person-1_h0rkqb.jpg',
        text: 'Everything is Possible if you Think that it will possible Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste laborum eum maiores eaque quasi pariatur consequuntur rem, qui animi?',
    },
    {   id: 3,
        name: 'Jhon Doe',
        job : 'React Developer',
        img: 'https://res.cloudinary.com/roy-technology/image/upload/v1619445305/person-3_f8rbfb.jpg',
        text: 'Nothing to say what will be happen. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste laborum eum maiores eaque quasi pariatur consequuntur rem, qui animi?',
    },
    {   id: 4,
        name: 'Sojib Wayazed Joy',
        job : 'Prime Minister Adviser',
        img: 'https://res.cloudinary.com/roy-technology/image/upload/v1619445305/person-2_bzsoze.jpg',
        text: 'If you think that what do you do, so it is bad for your. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste laborum eum maiores eaque quasi pariatur consequuntur rem, qui animi?',
    },
]

// Select Item 
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set started item 
let currentItem  = 0;

// Load Initial item 
window.addEventListener("DOMContentLoaded", function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

    // console.log(item);
});

// Show person base on Item 
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


// Show Next Person 
nextBtn.addEventListener('click', function (){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// Show prev Person 
prevBtn.addEventListener('click', function (){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// Show Random Person 
randomBtn.addEventListener('click', function (){
    console.log('Hello');

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});