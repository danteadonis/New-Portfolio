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