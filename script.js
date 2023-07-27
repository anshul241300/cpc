let manu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = documnet.querySelector('.header-2');

menu.addEventListener('click', ()=>{
    menu.classlist.toggle('fa-times');
    menu.classList.toggle('active');
});
 
window.onscroll = () =>{

    menubar.classList.remove('fa-time');
    navbar.classList.remove('active');


    if(window.scrollY > 150)
    {
        header.classList.add('active');
    }else
    {
        header.classList.remove`123-('active');
    }
}