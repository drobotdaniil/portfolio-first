$(document).ready(function(){

    // the slide show starts
    var slideIndex = 0;
    function showPhotos(){
        var slides = $('#instafeed a');
        for( var i = 0; i < slides.length; i++){
            $(slides[i]).hide();
        }
       
        slideIndex++;
        if(slideIndex>slides.length){
            slideIndex = 1;
        }
        
        $(slides[slideIndex-1]).show();
        /*if(slideIndex == 1){
            $('.worker__name')[0].innerHTML = "Sonya Sukhyna";
        }
        else{
            $('.worker__name')[0].innerHTML = "Daniil Drobot";
        }*/
        setTimeout(showPhotos, 1000);
    }

    
    showPhotos();

    // the end of the slide show

    //instafeed
    var userFeed = new Instafeed({
        get: 'user',
        userId: 1058017842,
        accessToken: '1058017842.1677ed0.f5a7e4a732c24d3d9567cb9b83bfdd27',
        resolution: 'standard_resolution',
        limit: '11'
    });
    userFeed.run();
    //the end of insta

    //mp3 
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
    // the end of mp3

    //anchors
    $("#nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
    // anchors' end

    
});