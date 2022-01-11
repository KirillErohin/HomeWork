$('.about-items > div').on('click', function(){
$(this).children('.about-icon').toggleClass('action');
$(this).parent('.about-items').toggleClass('toggleBg');
$(this).toggleClass('toggleColor');

$(this).next('p').slideToggle(300).toggleClass('toggleColor');
})
    

