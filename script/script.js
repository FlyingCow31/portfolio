const pagecontainer = document.querySelector('.activepage');



async function loadPage(pageName) {
     try {
          const response = await fetch(`templates/${pageName}.html`); // Ask for the page 

          if (!response.ok) throw new Error("404 - Page not found"); // Error handling 

          const text = await response.text();

          pagecontainer.innerHTML = text;
          pagecontainer.scrollTop = 0;
          changeTabName(pageName);
          activePageInNav(pageName);

          if (pageName == "readme") {
               typingAnimation();
               setInterval(typingAnimation, 4000);
          };

     } catch (error) {
          pagecontainer.innerHTML = "<p>Error while loading the page</p>";
          console.error(error);
     };
};

//* Display of readme on page loading 
document.addEventListener('DOMContentLoaded', () => {
     loadPage('flyingtodo');
     activePageInNav('readme');
     filecontainer.classList.toggle('active');
     portfolio.innerText = "⌄ Portfolio";
     aboutsec.classList.toggle('active');
     publicbtn.innerText = "⌄ Public";
     projsec.classList.toggle('active');
     srcbtn.innerText = "⌄ src";
     imgsec.classList.toggle('active');
     imgbtn.innerText ="⌄ img";
});

// * Buttons (instead of adding a onClick to each HTML button)

const aboutme = document.querySelector('.divreadme');
const flyingbtn = document.querySelector('.divflying');
const epibtn = document.querySelector('.divepi');
const shadowbtn = document.querySelector('.divshadow');
const drivebtn = document.querySelector('.divdrive');
const cvbtn = document.querySelector('.divcv');

aboutme.addEventListener('click', () => {
     loadPage('readme');
     console.log("click readme!");
});
flyingbtn.addEventListener('click', () => {
     loadPage('flyingtodo');
     console.log("click flying!");

});
epibtn.addEventListener('click', () => {
     loadPage('epistudio');
     console.log("click epi!");
});
shadowbtn.addEventListener('click', () => {
     loadPage('projectshadow');
     console.log("click shadow!");
});
drivebtn.addEventListener('click', () => {
     loadPage('drive');
     console.log("click drive!");
});
cvbtn.addEventListener('click', () => {
     loadPage('cv');
     console.log("click cv!");
});


// * Animation handler 
function animationHandler() {
   const allElements = document.querySelectorAll('.scrollanim:not(.animated)');

     const trigger = pagecontainer.clientHeight * 1.15;

     allElements.forEach((element, index) => {

     const rect = element.getBoundingClientRect(); // Get the coordinate of element in DOM 

     if (rect.top < trigger) {
          element.style.animationDelay = `${index * 0.1}s`;
          element.classList.add('load-in');
          element.classList.add('animated');
     };
     });  
};


// * Timeout to prevent heavy load for animations 
let scrollTimeout; 

pagecontainer.addEventListener('scroll', () => {
     if(scrollTimeout) return;
     scrollTimeout = setTimeout(() => {
          console.log("Timer is up!")
          animationHandler();
          scrollTimeout = null;
     }, 50);
});


//* NavBar behavior
const portfolio = document.getElementById('portbtn');
const filecontainer = document.querySelector('.filecontainer');

portfolio.addEventListener('click', () => {
     filecontainer.classList.toggle('active');
     const isOpen = filecontainer.classList.contains('active');
     portfolio.innerText = isOpen ? "⌄ Portfolio" : "> Portfolio";
});

const publicbtn = document.querySelector('.publicbtn');
const aboutsec = document.getElementById('catabout');
publicbtn.addEventListener('click', () => {
     aboutsec.classList.toggle('active');
     const isOpen = aboutsec.classList.contains('active');
     publicbtn.innerText = isOpen ? "⌄ Public" : "> Public";
});

const srcbtn = document.querySelector('.srcbtn');
const projsec = document.getElementById('projsec');
srcbtn.addEventListener('click', () => {
     projsec.classList.toggle('active');
     const isOpen = projsec.classList.contains('active');
     srcbtn.innerText = isOpen ? "⌄ src" : "> src";
});


const imgbtn = document.querySelector('.imgcat');
const imgsec = document.getElementById('imgcsec');
imgbtn.addEventListener('click', () => {
     imgsec.classList.toggle('active');
     const isOpen = imgsec.classList.contains('active');
     imgbtn.innerText = isOpen ? "⌄ img" : "> img";
});


const listOfPages = {
     readme: ".divreadme",
     flyingtodo: ".divflying",
     epistudio: ".divepi",
     projectshadow: ".divshadow",
     drive: ".divdrive",
     cv: ".divcv",
};

function activePageInNav(pageName) {
     const selector = listOfPages[pageName];
     if (!selector) return;

     document.querySelectorAll('.nav-active').forEach(el => el.classList.remove('nav-active'));

     const target = document.querySelector(selector);
     target.classList.add('nav-active');
};



// * Actualise Tab

const tabname = document.querySelector('.tabname');

function changeTabName(pageName) {
     tabname.innerText = `${pageName}`;
};


//** Very-left nav animations && behavior
const navicon = document.querySelectorAll('.navicon');
const explorer = document.querySelector('.explorer');
const explorerel = document.querySelectorAll('.explorer > *');
navicon.forEach(icon => {

     icon.addEventListener('click', () => {
          
          if (icon.classList.contains('active')){
               icon.classList.remove('active');
               explorer.style.display = "none";

          } else {
               deleteAllBorders();
               icon.classList.add('active');
               explorer.style.display = "block";
          }
     });
});


function deleteAllBorders() {
     navicon.forEach(icon => {
          icon.classList.remove('active');
     });
}

// * Contact form scrolling to prevent it from being invisible
pagecontainer.addEventListener('click', (event) => {
     const contactbtn = event.target.closest('.contactmereadme');
     if (!contactbtn) return;

     const contactform = pagecontainer.querySelector('.contactmesection');
     if (!contactform) return;

     pagecontainer.scrollTo({
          top: contactform.offsetTop,
          behavior: 'smooth',
     });
     contactform.classList.add('animated');
});

// TODO Faire l'animation type de index 
// * Readme internship animation 
const texttoput = "Web development";

function typingAnimation() {
     const containermovingtext = document.querySelector('.moovingtext');

     
     containermovingtext.innerHTML = "";

     for(let i = 0; i < texttoput.length; i++) {
          setTimeout(() => {
               containermovingtext.innerHTML += texttoput[i];
          }, i * 50);
     };
};
