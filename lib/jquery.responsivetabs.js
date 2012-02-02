(function( $ ){

  $.fn.rtabs = function( options ) {  

    // Create defaults, extending them with any options that were provided
    var settings = $.extend( {
      'threshold'   : '480',
      'orientation' : 'v'
    }, options);

    return this.find('.rtabsNavItem').each(function() {        

      $(this).click(function(){
        $(this).siblings('.active').removeClass('active');
        $(this).parent().parent().find('.rtabsPanel').removeClass('active');
        $(this).addClass('active');
        $($(this).find('a').attr('href')).addClass('active');
      });

    });

  };
})( jQuery );
