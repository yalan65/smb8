// Using leaflet.js to pan and zoom a big image.
// See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html
// Marker Pin: https://codepen.io/zachdunn/pen/wapEam
// create the slippy map
var map = L.map('image-map', {
  minZoom: 1,
  maxZoom: 4,
  center: [-60, 80],
  zoom: 3,
  crs: L.CRS.Simple,
  attributionControl: false
});
//.addAttribution('SembMarine Confidentiall').addTo(map);
L.control.attribution({
  prefix: false
}).addAttribution('SembMarine Confidential').addTo(map);

// House: https://i.imgur.com/cenqiCf.jpg
// Palace SVG (1280 x 806): https://dl.dropbox.com/s/yhrpnftsuis15z6/Topkapi_Palace_plan.svg
// dimensions of the image
var w = 6297 * 0.5,
    h = 2167 * 0.5,
    url = 'images/map_shopfloor1.jpg';

// calculate the edges of the image, in coordinate space
var southWest = map.unproject([0, h], map.getMaxZoom()-1);
var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
var bounds = new L.LatLngBounds(southWest, northEast);

// add the image overlay, 
// so that it covers the entire map
L.imageOverlay(url, bounds).addTo(map);

// tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds);

// pixel coords
var m = {
x: 3148.5, 
y: 1083.5

}

var k = {
ao: 1000,
bo: 1000
}
//Add marker
var newMarkerGroup = new L.LayerGroup();

var marker3 = new L.Marker([k.ao, k.bo]);
map.addLayer(marker3); 

marker3.bindPopup("<b>Initial</b><br>Dot");


map.on('click', addMarker);
var addedOne = false,
    customPin = L.divIcon({
    className: 'location-pin',
    //html: '<img src="https://static.robinpowered.com/roadshow/robin-avatar.png"><div class="pin"></div><div class="pulse"></div>',
    html: '<img src="images/orange.png"><div class="pin"></div><div class="pulse"></div>',
    iconSize: [30, 30],
    iconAnchor: [0, 0]
  });
function addMarker(e){
// Add marker to map at click location; add popup window
  if (addedOne) {
    return;
  }
 
  addedOne = true;
}

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
// Lookup neighbors https://github.com/mapbox/leaflet-knn
/*
var marker = L.marker(map.unproject([m.x, m.y], map.getMaxZoom()), {
    icon: customPin
  }).addTo(map);
//window.alert(m.x);
//window.alert(m.y)
*/

var marker3 = L.marker(map.unproject([2000.5, 1000.5], map.getMaxZoom()),{
    icon: customPin
  }).addTo(map);

// Add pop up for click

marker3.bindPopup("<b>PART ID:</b><br>PC261-3156-121-11<br>Location: H55<br>DATE: 23/1/2019</b>");

marker3.on('mouseover', function (e) {
            this.openPopup();
});
marker3.on('mouseout', function (e) {
            this.closePopup();
});

/*lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);*/