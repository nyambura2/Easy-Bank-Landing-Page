const toggle_btn = document.querySelector('.dropdown-toggle');
const TopNavigationn = document.querySelector('header .TopNavigation');

toggle_btn.addEventListener('click',()=>{
    if(TopNavigation.classList.contains('active')){
        TopNavigation.classList.remove('active')
    } else {
        TopNavigation.classList.add('active')
    }
})


document.querySelector('.height').innerHTML = window.innerWidth

