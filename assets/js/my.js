$(document).ready(function(){
// Map

   $(".map").mouseenter(function () { 
       let id=$(this).attr("id");
       $("."+id).css("color","orange");
   });

   $(".map").mouseout(function () { 
    let id=$(this).attr("id");
    $("."+id).css("color","#322d30");
});



});