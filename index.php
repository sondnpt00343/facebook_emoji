<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Emoji</title>
    </head>
    <body>

        <div 
            class="emoji"
            width="160"
            height="160"
            columns="3" 
            rows="3" 
            max="8" 
            img="./images/emoji_01.png"
            delay="80"
            loopCount="8"
            ></div>

        <div 
            class="emoji"
            width="160"
            height="160"
            columns="3" 
            rows="3" 
            max="8" 
            img="./images/emoji_02.png"
            delay="80"
            loopCount="8"
            ></div>
        
        <div 
            class="emoji"
            width="512"
            height="256"
            columns="4" 
            rows="2" 
            max="8" 
            img="./images/emoji_04.png"
            delay="120"
            loopCount="10"
            ></div>

    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./js/emoji.js?t=<?php echo filemtime("js/emoji.js") ?>"></script>
</html>
