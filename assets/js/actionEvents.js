(function($) {

    var actionEvents;

    actionEvents = {
        clickEvents : function() {
            $(document).on("click",".prev-btn", function(){
                callTo.loadPrevious();
            });
            $(document).on("click",".next-btn", function(){
                callTo.loadNext();
            });
            $(document).on("keyup", ".card__input-content input", function(){
                callTo.fillCardData();
            });
            $(document).on("click","#print", function(){
               //activate.printCard();
            });
            $(document).on("keydown", function(e){
               if(e.keyCode == 39 || e.keyCode == 38) {
                   callTo.loadNext();
                   return false;
               }
               else if(e.keyCode == 37 || e.keyCode == 40){
                   callTo.loadPrevious();
                   return false;
               }
            });
        },
        printCard : function(){
            html2canvas($("#card_preview"), {
                onrendered: function (canvas) {
                    $(".printImage").append(canvas);
                }
            });
            //this.generateImage();
        },
        generateImage : function() {
            html2canvas($("#card_preview"), {
                onrendered: function (canvas) {
                    var imageData = canvas.toDataURL("image/png");
                    var imageDataURL = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
                    $("#download").attr("download", "mycard.png").attr("href", imageDataURL);
                }
            });
        }
    };

    window.activate = actionEvents;

})(this.jQuery);