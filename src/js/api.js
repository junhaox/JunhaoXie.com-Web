function myMap() {
    var myCenter = new google.maps.LatLng(32.8632119,-117.2127723);
    var mapProp = {center:myCenter, zoom:12, scrollwheel:true, draggable:true, mapTypeId:google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}