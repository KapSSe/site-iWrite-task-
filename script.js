$(document).ready(function(){
   /* Burger */
   $('.resp-menu').on('click',function(){
      $('.nav').toggleClass('resp-nav');
      $('.taskshead').toggleClass('resp-taskshead');
      $('.tasksbody').toggleClass('resp-tasksbody');
   });
   /* Profile */
   $('.dd').on('click',function(){
      $('.user__window').toggleClass('user__window--active');
      $('.header-wrap').toggleClass('header-wrap--active');
      $('.nav').toggleClass('nav--translate');
   });
})
