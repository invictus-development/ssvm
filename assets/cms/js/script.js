$( document ).ready(function() {
	$(".navIcon").click(function() {
	  $("body").toggleClass("openNav");
	});
  $(".searchBtn").click(function() {
    $("body").toggleClass("searchOpen");
  });
  $(".closeSearch").click(function() {
    $("body").removeClass("searchOpen");
  });
  $("a#back_to_top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

(function($) {
	$.fn.visible = function(partial) {
    	var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	};
})(jQuery);

$(document).ready(function() {

   /* activate the carousel */
   $("#modal-carousel").carousel({interval:false});

   /* change modal title when slide changes */
   $("#modal-carousel").on("slid.bs.carousel",       function () {
        $(".modal-title")
        .html($(this)
        .find(".active img")
        .attr("title"));
   });

   /* when clicking a thumbnail */
   $(".gallery figure").click(function(){
    var content = $(".carousel-inner");
    var title = $(".modal-title");

    content.empty();
    title.empty();

    var id = $(this).data('item');
     var repo = $("#img-repo .item");
     var repoCopy = repo.filter("." + id).clone();
     var active = repoCopy.first();

    active.addClass("active");
    title.html(active.find("img").attr("title"));
    content.append(repoCopy);

    // show the modal
    $("#modal-gallery").modal("show");
  });

});











$(window).scroll(function(event) {
  $(".module").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
  var x = $(this).scrollTop();
  //var calc = 1 - x;
  $(".imageBg").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      //el.css({"transform": "translate3d(0px, " + parseInt(x / 2) + "px, 0px)"});
      //el.css({'background-position':'0px '+ -parseInt(x / 2)+'px'});
    }
  });
  $(".single-slider .text, .single-slider .boldText").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
    var dif=1-x/300;
     //el.css({"padding-top": parseInt(x / 2)});
     el.css({"opacity": dif});
    }
  });
});

$(window).scroll(function() {
	$("body").removeClass("searchOpen");
    var scroll = $(window).scrollTop();
	   var page1h = $(window).innerHeight();
	if (scroll >= 180) {
       $("body").addClass("fixedtop");
       $("#back_to_top").addClass("on")
    }
	else{
		$("body").removeClass("fixedtop");
		$("#back_to_top").removeClass("on")
	}

});
