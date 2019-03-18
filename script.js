$(document).ready(function(){
  $("#NarutoDisplay").hide();
});

$("#HinataButton").click(function(){
  var vheight=parseFloat($("#height").val());
  var vgender=$("#gender").val();
  
  if( vheight>=5.9 && vgender==="male") {
      $("p").text("Naruto");
      $("#img").attr("src","https://tse3.mm.bing.net/th?id=OIP.oYM3i5DBGqjna1j3OAcspQHaKF&pid=15.1&P=0&w=300&h=300");
       }
 else if( vheight>=5.9 && vgender==="female") {
        $("p").text("Sakura");
         $("#img").attr("src","http://3.bp.blogspot.com/-fxX9tz6Jzz0/VNNSk3DDQHI/AAAAAAAAAD0/wlwD5WFbtFo/w1200-h630-p-nu/Sakura+Haruno.jpg");
              }
 else if( vheight<=5.8 && vgender==="male") {
      $("p").text("Sasuke"); 
      $("#img").attr("src","http://img09.deviantart.net/e5d3/i/2016/016/e/e/sasuke_boruto_the_movie___smile_by_minatobijuu-d9o40hg.jpg");
       }
 else if( vheight<=5.8 && vgender==="female") {
        $("p").text("Hinata");
         $("#img").attr("src","https://i.pinimg.com/736x/84/9c/49/849c49ec4597e56a71fa789987718767.jpg"); 
       }
       
       $("#NarutoDisplay").show();
       
    
 
});
 