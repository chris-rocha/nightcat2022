(function ($, Drupal) {
  $(document).ready(function() {
    $('<li class="br"></li>').insertAfter('#nav .menu-item:nth-child(4)');

    $('#content .node--type-portfolio .node__content').bxSlider({
        auto: true,
        speed: 300,
        nextText: '&raquo;',
        prevText: '&laquo;',
        pager: false,
        onSliderLoad: function($currentIndex) {
            var alt = $('#content .node--type-portfolio .node__content .slide').eq(1).find('img').attr('alt');
            $('#caption').html('<p>' + urlToLink(alt) + '</p>');
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            var alt = $slideElement.find('img').attr('alt');
            $('#caption').html('<p>' + urlToLink(alt) + '</p>');
        }
    });
  }); // document ready
})(jQuery, Drupal);

function urlToLink(text) {
    return text.replace(/\[url=([^\]]+)\]\s*(.*?)\s*\[\/url\]/ig, '<a href="$1" target="_blank">$2</a>');
}
