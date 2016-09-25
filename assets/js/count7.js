/*js file*/
$(function(){

  $(".container__btn").mouseover(
    function(){
      $(this).fadeTo(300,0.5);
    }
  );

  $(".container__btn").mouseout(
    function(){
      $(this).fadeTo(300,1);
    }
  );

  var count = 0;
  var maxCount = 10;
  var $inc = $(".increment");
  var $dec = $(".decrement");
  var $txt = $(".container__count-text");

  function countUp(){
    if( count < maxCount){
      count = count + 1;
     }
    countAction();
  }

  function countDown(){
    if( count > 0){
      count = count - 1;
    }
    countAction();
  }

function countAction(){
  $txt.text(count);
}

$inc.click(
  function(){
    countUp();
  })

$dec.click(
  function(){
    countDown();
  }
)

$inc.click(
  function(){
    $("p").show();
  }
);


})
//end function
