 //------- MAGNIFICENT POPUP ---//

      $(document).ready(function() {

        "use strict";

          $('.image-modal').magnificPopup({

          type:'inline',
          fixedContentPos: false,
          removalDelay: 100,
          closeBtnInside: true,
          preloader: false,
          mainClass: 'mfp-fade'

          });

          $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
          });


        $('.image-popup-no-margins').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
          image: {
            verticalFit: true
          },
          zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          }
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });

      });




//------- SITE LOADER ---//

jQuery(window).load(function() { 
    jQuery("#loaderInner").fadeOut(); 
    jQuery("#loader").delay(400).fadeOut("slow"); 


});
//------- PORTOFOLIO GRID ---//
  $(function(){  
    "use strict";
    $('#worksGrid').mixItUp(); 
      });


//------- ACTIVE LINKS SCROLLSPY ---//

$('body').scrollspy({ offset: 200, target: '.navigation' });

