(function($) {

  $.fn.rtabs = function(options) {

    var settings = $.extend({
      'threshold' : '481',
      'navItem': 'rtabsNavItem',
      'nav': 'rtabsNav',
      'panel': 'rtabsPanel',
      'active': 'active',
      'reducedversion' : 'raccordeon', // raccordeon, rselect
      'placehold' : 'top' // top, bottom, left, right
    }, options);

    this.find('.' + settings.navItem).click(function() {
      $(this).siblings('.' + settings.active).removeClass(settings.active);
      $(this).parent().parent().find('.' + settings.panel).removeClass(settings.active);
      $(this).addClass(settings.active);
      $($(this).find('a').attr('href')).addClass(settings.active);
    });

    if (this.find('.' + settings.navItem + '.' + settings.active).length <= 0) {
      this.find('.' + settings.navItem + ':first').click();
    } else {
      this.find('.' + settings.navItem + '.' + settings.active).click();
    }
    
    var myself = this;
    
    Response.action( function () {
      if (Response.band(settings.threshold)) {// Display is wider than threshold
        $(myself).find('.' + settings.panel).each(function(){
          $(myself).find('.' + settings.nav).after($(this));
        });
        $(myself).removeClass(settings.reducedversion);
      } else {
        $(myself).find('.' + settings.navItem).each(function(){
          var myid = $(this).find('a').attr('href');
          $(this).append($(myid));
        });
        $(myself).addClass(settings.reducedversion);
      }
    }); 

    return this;
  };
})(jQuery);

    return this;
  };
})(jQuery);
