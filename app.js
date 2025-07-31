// FAQS
const questions = document.querySelectorAll('.faq_question')

questions.forEach(question => { 
    question.addEventListener('click', () => { 
        const answer = question.nextElementSibling
        question.classList.toggle('active')
        answer.classList.toggle('open')
    })
})


// TO SHOW SROLLP 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
                                                                                          // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// TO SHOW MENU
const navMenu = document.getElementById('nav-menu')
let navToggle = document.getElementById('nav-toggle')
let navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// TO REMOVE MENU WHEN EACH NAV LINK IS CLICKED
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
                                                                                                    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* TO CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header')
                                                                                          // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
