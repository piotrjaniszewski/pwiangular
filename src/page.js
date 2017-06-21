//page
$(document).ready(function(){
  $(function() {
    $("li").click(function() {
      $("li").removeClass("active");
      $(this).addClass("active");
    });

      $('.navbar-collapse .guzikHide').click(function(){
      $(".navbar-collapse").collapse('hide');
    });
  });
});


