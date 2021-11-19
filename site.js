
$(window).scroll(function(){
    if ($ (window).scrollTop()){
        $('nav').addClass('sticky')
    } else {
        $('nav').removeClass('sticky')
    }
    
})

//Hamburger

// function ham() {
//     var x = document.getElementById('myLinks');
//     if(x.style.display === 'block'){
//         x.style.display = 'none';
//     } else {
//         x.style.display = 'block';

//     }
    
// }


// const header = document.querySelector('header')
// window.addEventListener('scroll', () => {
//     window.scrollY
// })

// console.log(header)

