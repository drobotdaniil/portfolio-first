$(document).ready(function(){

    var audio = $("#audio__track")[0];

    $playBtn = $('#audio-play');
    $pauseBtn = $('#audio-pause');
    $audioController = $('[data-type="audio-controller"]');


    workAudio();

    function workAudio(){
        $playBtn.parent().show();
        audio.loop = true;

        $audioController.click(function(){
            if(audio.paused){
                audio.play();
                $playBtn.parent().hide();
                $pauseBtn.parent().show();
            }
            else{
                audio.pause();
                $pauseBtn.parent().hide();
                $playBtn.parent().show();
            }
        });
    }

   // audio.play();
});