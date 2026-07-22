//==================================================
// PORTFOLIO SCRIPT
// Part 1
//==================================================

//=========================================
// TYPING EFFECT
//=========================================

const words = [

    "Full Stack Java Developer",

    "Backend Developer",

    "React Developer",

    "Machine Learning Enthusiast",

    "Problem Solver"

];

const typing = document.getElementById("typing");

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    }

    else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(

        typingEffect,

        deleting ? 60 : 110

    );

}

typingEffect();


//=========================================
// LOADER
//=========================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 600);

});


//=========================================
// THEME TOGGLE
//=========================================

const body = document.body;

const themeBtn = document.querySelector(".theme-btn");

const themeIcon = themeBtn.querySelector("i");

if (localStorage.getItem("theme") === "light") {

    body.classList.add("light");

    themeIcon.className = "fas fa-sun";

}

themeBtn.addEventListener("click", () => {

    body.classList.toggle("light");

    if (body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeIcon.className = "fas fa-sun";

    }

    else {

        localStorage.setItem("theme", "dark");

        themeIcon.className = "fas fa-moon";

    }

});


//=========================================
// STICKY HEADER
//=========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});


//=========================================
// MOBILE MENU
//=========================================

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

    menuBtn.querySelector("i").classList.toggle("fa-bars");

    menuBtn.querySelector("i").classList.toggle("fa-xmark");

});

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        menuBtn.querySelector("i").className = "fas fa-bars";

    });

});


//=========================================
// SMOOTH SCROLL
//=========================================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(

            this.getAttribute("href")

        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});
//==================================================
// PART 2
// Scroll Progress + Active Nav + Reveal + Counters
//==================================================



//=========================================
// SCROLL PROGRESS BAR
//=========================================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});



//=========================================
// ACTIVE NAVIGATION
//=========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.offsetHeight;

        if (

            pageYOffset >= sectionTop &&

            pageYOffset < sectionTop + sectionHeight

        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") === "#" + current

        ) {

            link.classList.add("active");

        }

    });

});



//=========================================
// SCROLL REVEAL
//=========================================

const revealElements = document.querySelectorAll(

`
.hero,
.about,
.skills,
.projects,
.education,
.experience,
.certifications,
.contact,
.footer-content,
.skill-card,
.project-card,
.about-card,
.timeline-item,
.certificate-card,
.info-card
`

);

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

revealElements.forEach(el=>{

el.classList.add("fade-up");

revealObserver.observe(el);

});



//=========================================
// HERO COUNTERS
//=========================================

const statNumbers =

document.querySelectorAll(".hero-stats h3");

const counterObserver =

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},

{

threshold:.6

}

);

statNumbers.forEach(counter=>{

counterObserver.observe(counter);

});

function animateCounter(counter){

    const original = counter.innerText;

    if(isNaN(parseInt(original))) return;

    const target = parseInt(original);

    let value = 0;

    const speed = 30;

    function update(){

        value++;

        counter.innerText = value + "+";

        if(value < target){

            setTimeout(update,speed);

        }

    }

    update();

}



//=========================================
// BACK TO TOP
//=========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



//=========================================
// BUTTON RIPPLE EFFECT
//=========================================

const buttons = document.querySelectorAll(

".primary-btn,.secondary-btn,.contact-form button"

);

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

const radius=diameter/2;

circle.style.width=

circle.style.height=

diameter+"px";

circle.style.left=

e.clientX-

this.getBoundingClientRect().left-

radius+"px";

circle.style.top=

e.clientY-

this.getBoundingClientRect().top-

radius+"px";

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});



//=========================================
// FOOTER YEAR
//=========================================

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=

`© ${new Date().getFullYear()} Chitesh Rajapu. All Rights Reserved.`;

}
//==================================================
// PART 3
// Premium Particles + Mouse Glow + Tilt Effect
//==================================================


//=========================================
// PARTICLE BACKGROUND
//=========================================

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle{

    constructor(){

        this.x=Math.random()*canvas.width;

        this.y=Math.random()*canvas.height;

        this.radius=Math.random()*3+1;

        this.dx=(Math.random()-.5)*0.6;

        this.dy=(Math.random()-.5)*0.6;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(

            this.x,

            this.y,

            this.radius,

            0,

            Math.PI*2

        );

        ctx.fillStyle="#00d9ff";

        ctx.fill();

    }

    update(){

        this.x+=this.dx;

        this.y+=this.dy;

        if(this.x<0 || this.x>canvas.width)

            this.dx*=-1;

        if(this.y<0 || this.y>canvas.height)

            this.dy*=-1;

        this.draw();

    }

}

function initParticles(){

    particles=[];

    for(let i=0;i<100;i++){

        particles.push(

            new Particle()

        );

    }

}

function connectParticles(){

    for(let a=0;a<particles.length;a++){

        for(let b=a;b<particles.length;b++){

            let dx=

            particles[a].x-particles[b].x;

            let dy=

            particles[a].y-particles[b].y;

            let distance=

            dx*dx+dy*dy;

            if(distance<8500){

                ctx.beginPath();

                ctx.strokeStyle=

                "rgba(0,217,255,.12)";

                ctx.lineWidth=1;

                ctx.moveTo(

                    particles[a].x,

                    particles[a].y

                );

                ctx.lineTo(

                    particles[b].x,

                    particles[b].y

                );

                ctx.stroke();

            }

        }

    }

}

function animateParticles(){

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    particles.forEach(p=>p.update());

    connectParticles();

    requestAnimationFrame(

        animateParticles

    );

}

initParticles();

animateParticles();

window.addEventListener("resize",()=>{

    canvas.width=

    window.innerWidth;

    canvas.height=

    window.innerHeight;

    initParticles();

});



//=========================================
// CURSOR GLOW
//=========================================

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});



//=========================================
// PROFILE TILT
//=========================================

const profile=

document.querySelector(".profile-circle");

if(profile){

profile.addEventListener("mousemove",e=>{

const rect=

profile.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=

(y-rect.height/2)/18;

const rotateY=

(rect.width/2-x)/18;

profile.style.transform=

`rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.03)`;

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform=

"rotateX(0deg) rotateY(0deg)";

});

}



//=========================================
// FLOATING TECH ICONS
//=========================================

const techIcons=

document.querySelectorAll(".tech");

techIcons.forEach((icon,index)=>{

icon.animate(

[

{

transform:"translateY(0px)"

},

{

transform:"translateY(-12px)"

},

{

transform:"translateY(0px)"

}

],

{

duration:2500+index*300,

iterations:Infinity,

easing:"ease-in-out"

}

);

});



//=========================================
// IMAGE PRELOAD
//=========================================

const img=new Image();

img.src="images/profile.png";



//=========================================
// PERFORMANCE
//=========================================

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

cancelAnimationFrame(

animateParticles

);

}

}

);



//=========================================
// CONSOLE MESSAGE
//=========================================

console.log(

"%cWelcome to Chitesh Rajapu's Portfolio 🚀",

"color:#00d9ff;font-size:18px;font-weight:bold;"

);
//==================================================
// PART 4
// Final Interactions
//==================================================



//=========================================
// ACTIVE SECTION ANIMATION
//=========================================

const cards = document.querySelectorAll(

".skill-card,.project-card,.about-card,.certificate-card,.timeline-content,.experience-card,.info-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});



//=========================================
// CONTACT FORM
//=========================================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(

"Thank you for contacting me! I'll get back to you soon."

);

form.reset();

});

}



//=========================================
// COPY EMAIL
//=========================================

const emailLink=document.querySelector(

'a[href^="mailto:"]'

);

if(emailLink){

emailLink.addEventListener("click",()=>{

navigator.clipboard.writeText(

"chiteshrajapu09@gmail.com"

);

});

}


//=========================================
// IMAGE LAZY LOADING
//=========================================

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});



//=========================================
// DISABLE RIGHT CLICK (OPTIONAL)
//=========================================

// Uncomment if needed

/*
document.addEventListener(

"contextmenu",

e=>e.preventDefault()

);
*/



//=========================================
// PREVENT DRAGGING IMAGES
//=========================================

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});



//=========================================
// PRELOAD LINKS
//=========================================

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transition=".25s";

});

});



//=========================================
// PAGE TITLE CHANGE
//=========================================

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

document.title="Come Back 👋";

}

else{

document.title=

"Chitesh Rajapu | Full Stack Java Developer";

}

});



//=========================================
// CONSOLE MESSAGE
//=========================================

console.log(

"%cThanks for visiting my Portfolio 🚀",

"color:#00d9ff;font-size:18px;font-weight:bold;"

);

console.log(

"%cDeveloped by Chitesh Rajapu",

"color:#4cc9f0;font-size:14px;"

);


//=========================================
// PROJECT MODALS
//=========================================

const viewDetailsBtns = document.querySelectorAll(".view-details-btn");

const projectModals = document.querySelectorAll(".project-modal");

function openModal(id) {

    const modal = document.getElementById(id);

    if (!modal) return;

    modal.classList.add("open");

    document.body.style.overflow = "hidden";

}

function closeAllModals() {

    projectModals.forEach(m => m.classList.remove("open"));

    document.body.style.overflow = "";

}

viewDetailsBtns.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        openModal(this.dataset.modal);

    });

});

projectModals.forEach(modal => {

    modal.querySelector(".modal-overlay").addEventListener("click", closeAllModals);

    modal.querySelector(".modal-close").addEventListener("click", closeAllModals);

});

document.addEventListener("keydown", e => {

    if (e.key === "Escape") closeAllModals();

});
