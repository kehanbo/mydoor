// 自定义js
// 轮播图部分的js
$(function () {
//屏幕宽度函数
    function resize() {
        //屏幕宽度
        var windowWidth = $(window).width();
        var smallWidth = windowWidth <768;

       //屏幕自适应
        var $itemImage = $('#home_lunbotu .item-image');
        $itemImage.each(function (i,item) {
            var $item = $(item);
            var imgSrc = $item.data(smallWidth? 'image-small':'image-large');
            var imgAlt = $item.data('image-alt');
            $item.html('<img src="'+imgSrc+'" alt="'+imgAlt+'"/>');
            $item.css('backgroundImage','url('+imgSrc+')');
        });

    }

    $(window).on('resize', resize).trigger('resize');




});