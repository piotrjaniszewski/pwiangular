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


function init() {
  // initialize and setup facebook js sdk
  FB.init({
    appId      : '791357664355674',
    xfbml      : true,
    version    : 'v2.9'
  });
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}
