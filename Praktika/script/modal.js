$('.model-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length ==0){
        $(this).fade0ut();
    }
})
$('.close').on('click', function(){
    $(this).parents('.model-overlay').fadeOut();
})

$('#modal-button').on('click', function(){
    $('.model-overlay').fadeIn()
})