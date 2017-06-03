//page
$(document).ready(function(){
    $(function() {
        $("li").click(function() {
            $("li").removeClass("active");
            $(this).addClass("active");
        });

        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });
    });
});

//OX
var table=[["","",""],["","",""],["","",""]];
var gameEnd=false;
var player="X";

function move(elem, x, y) {
    if(table[x][y]===""&&!gameEnd){
        elem.innerHTML=player;
        table[x][y]=player;
        if(check()){
            win();
        }
        else{
            changePlayer();
        }
    }
}

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

function check() {
    for(var i = 0; i<=2;i++){
        if(table[i][0]===table[i][1] && table[i][1]===table[i][2] && table[i][1]!=="" ||
            table[0][i]===table[1][i] && table[1][i]===table[2][i] && table[1][i]!=="" )
            return true;
    }
    return (table[0][0]===table[1][1] && table[1][1]===table[2][2] && table[1][1]!=="" ||
    table[0][2]===table[1][1] && table[1][1]===table[2][0] && table[1][1]!=="" );
}

function win(){
    gameEnd=true;
    document.getElementById('wyswietlacz').innerHTML="Wygrywa gracz: " + player;
}

function changePlayer() {
    if (player==="X") player = "O";
    else player="X";
    document.getElementById('wyswietlacz').innerHTML="Gracz: " + player;
}

function newGame() {
    player="X";
    document.getElementById('wyswietlacz').innerHTML="Gracz: " + player;
    table=[["","",""],["","",""],["","",""]];
    gameEnd=false;
    for(var i=1;i<=9;i++){
        document.getElementById('t'+i).innerHTML="";
    }
}
