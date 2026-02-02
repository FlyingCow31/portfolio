const pagecontainer = document.querySelector('.activepage');



async function loadPage(pageName) {
     try {
          const response = await fetch(`templates/${pageName}.html`); // Ask for the page 

          if (!response.ok) throw new Error("404 - Page not found"); // Error handling 

          const text = await response.text();

          pagecontainer.innerHTML = text;
          
          pagecontainer.scrollTop = 0;
     } catch (error) {
          pagecontainer.innerHTML = "<p>Error while loading the page</p>";
          console.error(error);
     };
};

//* Display of readme on page loading 
document.addEventListener('DOMContentLoaded', () => {
     loadPage('readme');
});

// * Buttons (instead of adding a onClick to each HTML button)

const aboutme = document.querySelector('.aboutmebtn');
const flyingbtn = document.querySelector('.FlyingToDoarb');
const epibtn = document.querySelector('.epistudiobtn');
const shadowbtn = document.querySelector('.projectshadowbtn');
const drivebtn = document.querySelector('.drivebtn');
const cvbtn = document.querySelector('.cvbtn');

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

//* Close all function



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
