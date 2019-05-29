$(document).ready(function(){
    $(".reset").click(function(){
    $(".item1").hide();
    $(".item2").hide();
    $(".item3").hide();
    $(".item4").hide();
    $(".item5").hide();
    $(".item6").hide();
    $(".text2").hide();
    $(".item7").hide();
    $(".item8").hide();
    $(".item9").hide();
    $(".item10").hide();
    $(".item11").hide();
    $(".item12").hide();
    $(".item13").hide();
  });

 $(".expand").click(function(){
    $(".item1").show();
    $(".item2").show();
    $(".item3").show();
    $(".item4").show();
    $(".item5").show();
    $(".item6").show();
    $(".text2").show();
    $(".item7").show();
    $(".item8").show();
    $(".item9").show();
    $(".item10").show();
    $(".item11").show();
    $(".item12").show();
       $(".item13").show();
  });

//  $("img[src='./images/expand.svg']").click(function () {
//      $(this).attr("src","./images/expanded.svg");
//      $("img[src='./images/reseted.svg").attr("src","./images/reset.svg");
//  })
// $("img[src='./images/expanded.svg']").click(function () {
//      $(this).attr("src","./images/expand.svg");
//      $("img[src='./images/reseted.svg").attr("src","./images/reset.svg");
//  })
// $("img[src='./images/reset.svg']").click(function () {
//      $(this).attr("src","./images/reseted.svg");
//      $("img[src='./images/expand.svg").attr("src","./images/expanded.svg");
//  })
// $("img[src='./images/reseted.svg']").click(function () {
//      $(this).attr("src","./images/reset.svg");
//      $("img[src='./images/expanded.svg").attr("src","./images/expand.svg")
//  })

 $(".artist").click(function(){
    $(".item1").show();
    $(".item2").show();
    $(".item3").show();
    $(".item7").show();
    $(".item8").show();
    $(".item9").show();
    $(".item1").css("border-color", "deepskyblue");
    $(".item2").css("border-color", "deepskyblue");
    $(".item3").css("border-color", "deepskyblue");
    $(".item7").css("border-color", "deepskyblue");
    $(".item8").css("border-color", "deepskyblue");
    $(".item9").css("border-color", "deepskyblue");
  });

$(".designer").click(function(){
    $(".item4").show();
    $(".item5").show();
    $(".item6").show();
    $(".item10").show();
    $(".item11").show();
    $(".item12").show();
    $(".item4").css("border-color", "white");
    $(".item5").css("border-color", "white");
    $(".item6").css("border-color", "white");
    $(".item10").css("border-color", "white");
    $(".item11").css("border-color", "white");
    $(".item12").css("border-color", "white");
  });

  $(".video").click(function(){
    $(".item1").show();
    $(".item2").show();
    $(".item3").show();
    $(".item2").css("border-color", "magenta");
    $(".item1").css("border-color", "magenta");
    $(".item3").css("border-color", "magenta");
  });

  $(".writing").click(function(){
    $(".item13").show();
    $(".item14").show();
    $(".item15").show();
  });

$(".netart").click(function(){
    $(".item7").show();
    $(".item8").show();
    $(".item9").show();
    $(".item10").show();
    $(".item11").show();
    $(".item12").show();
    $(".item7").css("border-color", "chartreuse");
    $(".item8").css("border-color", "chartreuse");
    $(".item9").css("border-color", "chartreuse");
    $(".item10").css("border-color", "chartreuse");
    $(".item11").css("border-color", "chartreuse");
    $(".item12").css("border-color", "chartreuse");
  });

$(".drag").click(function(){
    $(".item7").show();
    $(".item7").css("border-color", "yellow");
  });

// $(".collage").click(function(){
//     $(".item4").show();
//     $(".item5").show();
//   });

$(".trauma").click(function(){
    $(".item1").show();
    $(".item3").show();
    $(".item12").show();
    $(".item1").css("border-color", "red");
    $(".item3").css("border-color", "red");
    $(".item11").css("border-color", "red");
  });

$(".family").click(function(){
    $(".item1").show();
    $(".item3").show();
    $(".item1").css("border-color", "purple");
    $(".item3").css("border-color", "purple");
  });

$(".gender").click(function(){
    $(".item2").show();
    $(".item3").show();
    $(".item7").show();
    $(".item2").css("border-color", "pink");
    $(".item3").css("border-color", "pink");
    $(".item7").css("border-color", "pink");
  });

$(".baroque").click(function(){
    $(".baroquetext").toggle();
  });


$(".secondstory").click(function(){
    $(".secondtext").toggle();
  });

$(".thirdstory").click(function(){
    $(".thirdtext").toggle();
  });
  //  $(".text2").click(function(){
  //   $(".item7").show();
  //   $(".item8").show();
  //   $(".item9").show();
  //   $(".item10").show();
  //   $(".item11").show();
  //   $(".item12").show();
  //   $(".text3").show();
  //   $(".text4").show();
  });
