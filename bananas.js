'use strict'
;(function(){
  var $body = $('body'),
    pathToBanana='', // UPDATE THIS
    screenHeight = screen.height+200,
    randLeft,
    rand;

  for (var i = 0; i<10; i++) {
    randLeft = Math.floor(Math.random() * screen.width);
    $body.prepend('<img class="banana" style="left:'+randLeft+'px" src="'+pathToBanana+'/>');
  }

  $('.bananas').on('click',function(){
    $('.banana').each(function(){
      rand = Math.floor((Math.random() * 1500) + 500);
      $(this).animate({
        top: '+='+screenHeight
      },rand, function(){
        randLeft = Math.floor(Math.random() * screen.width);
        $(this).css('top','-200px').css('left',randLeft);
      });
    });
  });
})();
