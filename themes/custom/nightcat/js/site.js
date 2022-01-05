jQuery(document).ready(function() {
    jQuery('<li class="br"></li>').insertAfter('.menu-315');

    jQuery('.region-content .node .content').bxSlider({
        auto: true,
        speed: 300,
        nextText: '&raquo;',
        prevText: '&laquo;',
        pager: false,
        onSliderLoad: function($currentIndex) {
            var alt = jQuery('.region-content .node .content .slide').eq(1).find('img').attr('alt');
            jQuery('#caption').html('<p>' + urlToLink(alt) + '</p>');
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            var alt = $slideElement.find('img').attr('alt');
            jQuery('#caption').html('<p>' + urlToLink(alt) + '</p>');
        }
    });
});

function urlToLink(text) {
    return text.replace(/\[url=([^\]]+)\]\s*(.*?)\s*\[\/url\]/ig, '<a href="$1" target="_blank">$2</a>');
}
