$(function(){

  $('.burger').click(function(){
    $('.burger').toggleClass("is-active");
    $('.menu').toggleClass("is-active");

    $('a[href^="#"').on('click',function(){
      $('.burger').click();
    });
  });
  
});