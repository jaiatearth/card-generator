(function($) {
    var dataLoader;

    dataLoader = {
        initiator : function(){
            $.getJSON('assets/cards/cards.json', function (data) {
                window.cardData = data;
                activate.clickEvents();
                callTo.loadAllCss(cardData.length);
                callTo.loadDataToHtml(cardIndex);
            });
        },
        loadAllCss : function(styles) {
            for(var i=0;i<styles;i++){
                $('head').append('<link rel="stylesheet" href="assets/cards/'+cardData[i].style+'/'+cardData[i].style+'.css" type="text/css" />');
            }
        },
        loadDataToHtml : function(i) {
            $('.card__display-content').load('assets/cards/'+cardData[i].style+'/'+cardData[i].style+'.html',function(){
                callTo.fillCardData();
            });
            activate.generateImage();
        },
        loadNext : function(){
            if(cardIndex+1 == cardData.length){
                return;
            }
            cardIndex++;
            callTo.loadDataToHtml(cardIndex);
            this.generateImage();
        },
        loadPrevious : function(){
            if(cardIndex==0){
                return;
            }
            cardIndex--;
            callTo.loadDataToHtml(cardIndex);
        },
        fillCardData : function(){
            $(".card-holder__name").text($(".card__input-name").val());
            $(".card-holder__designation").text($(".card__input-designation").val());
            $(".card-holder__company").text($(".card__input-company").val());

            //Check for valid input to email field..
            if ($(".card__input-email").is(':invalid')) {
                $(".card-holder__email").text('invalid data');
            } else {
                $(".card-holder__email").text($(".card__input-email").val());
            }
            //Check for valid input to telephone number field..
            if ($(".card__input-telephone").is(':invalid')) {
                $(".card-holder__telephone").text('invalid data');
            } else {
                $(".card-holder__telephone").text($(".card__input-telephone").val());
            }
        }
    };
    window.callTo = dataLoader;
})(this.jQuery);