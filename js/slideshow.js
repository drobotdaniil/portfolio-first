$(document).ready(function(){
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
    
});