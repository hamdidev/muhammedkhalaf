// Show Menu
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.add('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// Remove Menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// Change Background of the header
function scrollHeader(){
    const nav = document.getElementById('myheader')

    if(this.scrollY >= 200 ) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')

}

window.addEventListener('scroll', scrollHeader)

// scroll Top

function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", scrollTop);

//   Dark Light Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// // localStorage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme= ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon= ()=> themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// ScrollReveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

// Filterable Projects
const filterContainer = document.querySelector('.portfolio__nav'),
galleryItems = document.querySelectorAll('.services__content');

filterContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('portfolio__item')){
    //    Deactivate existing active 'filter-item'
        filterContainer.querySelector('.active').classList.remove('active');
        // Activate a new 'filter-item
        e.target.classList.add('active');
        const fiterValue = e.target.getAttribute('data-filter');
        
        galleryItems.forEach((item)=>{
            if(item.classList.contains(fiterValue) || fiterValue === 'all'){
                item.classList.remove('hide');
                item.classList.add('show');
            }else {
                item.classList.remove('show');
                item.classList.add('hide');

            }
        })
    }
    
})

// Text Animation

const myheader = new AutoTyping({
    id: "header",
    typeText: ["Frontend Developer", "Web Designer", "Freelancer"],
    textColor: "#ccd6f6",
    typeSpeed: 200,
    typeDelay: 200,
    typeRandom: false,
    deleteSpeed: 150,
    deleteDelay: 1500,
    typeInfinity: true,
    cursor: "|",
    cursorColor: "#ccd6f6",
    cursorSpeed: 400,
  });
  myheader.init();






