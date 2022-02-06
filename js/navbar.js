"use strict";

const updateNavBar = () => {
 console.log("Doin' Nothin'...")
};

(function ($) {
  jQuery(document).ready(function () {

    // Creates a click handler to collapse the navigation when
    // anchors in the mobile nav pop up are clicked
    var navMain = $(".navbar-collapse");
    if (navMain) {
      navMain.on("click", "a", null, function (e) {
        $('.navbar-collapse').collapse('hide');
      });
    }

  });

})(jQuery);
