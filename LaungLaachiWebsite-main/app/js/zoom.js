
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';
import PhotoSwipe from './photoswipe.esm.min.js';

(function ($) {
    "use strict";
    
    var lightbox = function () {

        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery-started',
            children: 'a',
            pswpModule: PhotoSwipe,
            bgOpacity: 1,
            secondaryZoomLevel: 2,
            maxZoomLevel: 3,
        });
        lightbox.init();

    }

  // Dom Ready
  $(function () {
    lightbox();
  });
})(jQuery);


