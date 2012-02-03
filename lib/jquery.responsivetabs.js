(function($) {

  $.fn.rtabs = function(options) {

    // Create defaults, extending them with any options that were provided
    var settings = $.extend({
      'threshold' : '481',
      'placehold' : 'top' //top, bottom, left, right
    }, options);

    this.find('.rtabsNavItem').click(function() {
      $(this).siblings('.active').removeClass('active');
      $(this).parent().parent().find('.rtabsPanel').removeClass('active');
      $(this).addClass('active');
      $($(this).find('a').attr('href')).addClass('active');
    });

    if (this.find('.rtabsNavItem.active').length <= 0) {
      this.find('.rtabsNavItem:first').click();
    } else {
      this.find('.rtabsNavItem.active').click();
    }
    
    var myself = this;
    
    Response.action( function () {
      if (Response.band(settings.threshold)) {// Display is under threshold
        $(myself).find('.rtabsPanel').each(function(){
          $(myself).find('.rtabsNav').after($(this));
        });
        $(myself).addClass('raccordeon');
      } else {
        $(myself).find('.rtabsNavItem').each(function(){
          var myid = $(this).find('a').attr('href');
          $(this).append($(myid));
        });
        $(myself).removeClass('raccordeon');
      }
    }); 

    return this;
  };
})(jQuery);
