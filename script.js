document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');
    
    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('active');
        navUl.classList.toggle('active');
    });
});

