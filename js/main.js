 $("#login-button").click(function(event){
	 event.preventDefault();
	 // mod_start_2020/06/26
	 //  $('.wrapper').addClass('form-success');
	 
	 $('.container h1')
		    .animate2({ transform: '-webkit-translateY(85px)'}) //中央に移動
		    .animate2({ transform: 'translateY(85px)'}) // 中央に移動
		;
	 // mod_end
	 
	 $('form').fadeOut(500);
});

// add_start_2020/06/26
// 画面上にボタンが表示されていないとき、フォーム上の任意の要素をクリックすると、ボタンが表示される機能を作成
 $(".wrapper").click(function(event){
	event.preventDefault();
	 
	 if ($('form').css('display') == 'none') {
		$('.wrapper').removeClass('form-success');
	 	
	 	$('.container h1')
		    .animate2({ transform: '-webkit-translateY(0)'}) //上に移動
		    .animate2({ transform: 'translateY(0)'}) // 上に移動
		;
	 	$('form').fadeIn(500);
	 }
});

// transform作成	参考：https://qiita.com/waterada/items/bb73f3850f05d854dc6e
$.fn.animate2 = function (properties, duration, ease) {
    ease = ease || 'ease';
    var $this = this;
    var cssOrig = { transition: $this.css('transition') };
    return $this.queue(next => {
        properties['transition'] = 'all ' + duration + 'ms ' + ease;
        $this.css(properties);
        setTimeout(function () {
            $this.css(cssOrig);
            next();
        }, duration);
    });
};
// add_end

/* add_start_2020/6/25 モーダル処理 */
$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});
/* add_end */
