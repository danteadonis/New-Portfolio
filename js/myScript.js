// jQuery
$(document).ready(function(){
  $('#getInTouch').hide();
  $(window).scroll(function(){
    $('.slideanim').each(function(){
      var pos= $(this).offset().top;
      var windowTop= $(window).scrollTop();

      if(pos < windowTop + 400){
        $(this).addClass('slide');
        $('#getInTouch').show(1000);
      }
    });
    $('footer').each(function(){
      var position= $(this).offset().top;
      var winTop= $(window).scrollTop();

      if(position < winTop + 1100){
        $(this).addClass('slide');
      }
    })
  });

  $('.nav-link').click(function(){
    $(this).toggleClass('active');
  });
});
// end of jQuery
var myCenter= new google.maps.LatLng(41.878114, -87.629798);

function init(){
  var mapProp= {
    center:myCenter,
    zoom:12,
    scrollWheel:false,
    draggable:false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map= new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker= new google.maps.Marker({
    position:myCenter,
  });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, "load", init);

