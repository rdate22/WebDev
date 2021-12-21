// const navTrans = () => {
//     const menu = document.querySelector('.hamburger');
//     // const nav = document.getElementsByClassName("links");
//     const nav = doument.querySelector('.links');
//     const navLinks = document.querySelectorAll('.links li');
//     //Toggles the Nav
//     menu.addEventListener('click', () => {

//         nav.classList.toggle('linksAppear');
        
//         //Animates the links
//         navLinks.forEach((link, index) => {
//             if(link.style.animation) {
//                 link.style.animation = ''
//             }else {
//                 link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 1.5 }s`;
//             }
//         });
//     });
//     //Menu lines animation
//     menu.classList.toggle('toggle');
    
    
// }


// navTrans();

myfunction(() => {
    nav.classList.toggle('linksAppear');
             //Animates the links
         navLinks.forEach((link, index) => {
            if(link.style.animation) {
                 link.style.animation = ''
             }else {
                 link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 1.5 }s`;
             }
         });


});
