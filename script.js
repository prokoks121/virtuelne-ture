device_width = $( window ).width();
      device_height = $( window ).height();
      logo_div_zoom = 1;
      if (device_width < 600) {
  logo_div_zoom = device_width / 600;
  $('.logo_div').css({"zoom":logo_div_zoom});
}
 if (device_width < 1080) {
  device_zoom_width = 550/device_width;
  device_height = device_zoom_width *device_height;
}
$('#panolens').css({"height":device_height});
$('.top_page').css({"height":device_height});







container = document.querySelector( '#panolens' );

      const panorama = new PANOLENS.ImagePanorama( 'https://l13.alamy.com/360/RRPMM4/full-seamless-panorama-360-degrees-angle-view-in-interior-fabric-salon-of-prestige-modern-car-in-equirectangular-equidistant-spherical-projection-sky-RRPMM4.jpg' );
      const viewer = new PANOLENS.Viewer( { container: container } );
      viewer.add( panorama );
$('span').css('background-image')
var stoprotate=false;    


viewer.addUpdateCallback(function() {      
if(!stoprotate){
viewer.panorama.rotation.y += 0.001;

} 


});
$('.isprobaj').on('click', function(){
stoprotate=true; 
$('.zatamljivanje360').hide();
$(".x-izlaz").css({"visibility":"visible"});
$(".x-izlaz").show();
$('.nav_bar').hide();
document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;

});
$('.x-izlaz').on('click', function(){
stoprotate=false; 
$('.x-izlaz').hide();
$('.zatamljivanje360').show();
$('.nav_bar').show();
});
$(window).scroll(function() {
  if ($('#visibility_1').visible(true)) {
    $(".bar_2_1").toggleClass('bar_2_1 bar_2_12');
  }else{
        $(".bar_2_12").toggleClass('bar_2_12 bar_2_1');

  }
});
$("#prelaz_11").on('click',function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#prelaz_1").offset().top
    }, 2000);
});