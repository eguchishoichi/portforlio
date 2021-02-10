
// メニューバー
$('#toggle').click(function() {
  $(this).toggleClass("active");
  $('#overlay').toggleClass("open");
  if ($("html div").not("#overlay").hasClass("blur")){
     $("html div").not("#overlay").not(".button_container").removeClass("blur")
  }else{
     $("html div").not("#overlay").not(".button_container").addClass("blur")
  }
});


// 特定の位置までスクロール
$('.menu_aboutme').click(function() {
  $("html,body").animate({scrollTop:$(".aboutme").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_skills').click(function() {
  $("html,body").animate({scrollTop:$(".skills").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_works').click(function() {
  $("html,body").animate({scrollTop:$(".works").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_contact').click(function() {
  $("html,body").animate({scrollTop:$(".contact").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});




//特定の位置までスクロール//
$('.about-me').click(function(){
  $("html,body").animate({scrollTop:$(".aboutme").offset().top});
});


$('.skills-bt').click(function(){
  $('html,body').animate({scrollTop:$(".skills").offset().top});
  });

$('.servicebt').click(function(){
  $('html,body').animate({scrollTop:$(".service").offset().top});
  });

$('.worksbt').click(function(){
$('html,body').animate({scrollTop:$(".works").offset().top});
});

$('.contactbt').click(function(){
$('html,body').animate({scrollTop:$(".contact").offset().top});
});


// animatedクラスの付いた要素にwaypointを登録
$('.animated').waypoint({
  handler(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素にfadeInUpクラスを付けることで
       * アニメーションを開始
       */
      $(this.element).addClass('fadeInUp');

      /**
       * waypointを削除することで、この要素に対しては
       * これ以降handlerが呼ばれなくなる
       */
      this.destroy();
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});
