
function log(variable) {
    console.log(variable);
}


$(function () {

    var emojis = $(".emoji");

    // element handle
    if (emojis && emojis.length > 0) {

        $.each(emojis, function (index, emoji) {
            var emoji_element = $(emoji);

            // get value
            var columns = parseInt(emoji_element.attr("columns"));
            var rows = parseInt(emoji_element.attr("rows"));
            var max = parseInt(emoji_element.attr("max"));
            var width = parseInt(emoji_element.attr("width"));
            var height = parseInt(emoji_element.attr("height"));
            var delay = parseInt(emoji_element.attr("delay"));
            var loopCount = parseInt(emoji_element.attr("loopCount"));
            var img = emoji_element.attr("img");

            var position_x = 0, position_y = 0;

            var item_width = columns * width;
            var item_height = rows * height;

            // set size
            emoji_element.css({
                width: width,
                height: height,
                "background-size": item_width + "px " + item_height + "px",
                "background-image": "url('" + img + "')",
                "background-position": position_x + "px " + position_y + "px"
            });

            function emoji_start() {
                if (emoji_element.hasClass("running")) {
                    return;
                }
                emoji_element.addClass("running");

                var start_x = 0, start_y = 0;
                var i = 0;
                var loop = 0;

                var emoji_timer = setInterval(function () {
                    if (i % columns == 0) {
                        start_x = 0;
                        if (i > 0) {
                            start_y -= height;
                        }
                    } else {
                        start_x -= width;
                    }

                    // loop emoji
                    if (i >= max) {
                        start_x = 0;
                        start_y = 0;
                        i = 0;
                        loop++;
                    }

                    emoji_element.css({
                        "background-position": start_x + "px " + start_y + "px"
                    });

                    i++;
                    
                    if (loop >= loopCount) {
                        clearInterval(emoji_timer);
                        emoji_element.removeClass("running");
                    }
                }, delay);
            }
            
            emoji_start();

            // hover handle
            emoji_element.hover(emoji_start);

        });

    }

});