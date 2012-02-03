(function($) {

  $.fn.rtabs = function(options) {

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
      alert("respond");
      if (Response.band(settings.threshold)) {// Display is wider than threshold
        $(myself).find('.rtabsPanel').each(function(){
          $(myself).find('.rtabsNav').after($(this));
        });
        $(myself).removeClass('raccordeon');
      } else {
        $(myself).find('.rtabsNavItem').each(function(){
          var myid = $(this).find('a').attr('href');
          $(this).append($(myid));
        });
        $(myself).addClass('raccordeon');
      }
    }); 

    return this;
  };
})(jQuery);
