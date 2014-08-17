// Generated by CoffeeScript 1.6.3
var cleanIt, keyframe, pos;

pos = {};

cleanIt = function($junk) {
  $junk.html($junk.text().replace(/([\S])/g, '<span>$1</span>'));
  $junk.css("position", "relative");
  pos = $junk.offset();
  return $junk.find("span").css({
    position: "relative",
    top: function() {
      return Math.random() * $(this).height();
    },
    left: function() {
      return -$(this).offset().left + (Math.random() * pos.left);
    }
  });
};

keyframe = function(time, callback) {
  return setTimeout(function() {
    return callback();
  }, time * 1000);
};

$(document).ready(function() {
  $.ajax({
    url: "http://bitterbrown.com/grunt-css-cleaner/readme.php",
    method: "get",
    dataType: "html",
    success: function(content) {
      return $(".content .slide.slide2 .slide-content").html(content);
    }
  });
  keyframe(1, function() {
    return $(".content").css("opacity", 1).addClass("lightSpeedIn");
  });
  keyframe(1.1, function() {
    return cleanIt($(".intro pre"));
  });
  keyframe(3, function() {
    $(".content").removeClass("lightSpeedIn").addClass("flip");
    return $(".intro").css("left", "" + (-pos.left * 5) + "px");
  });
  keyframe(3.25, function() {
    $(".content .slide1").hide();
    return $(".content .slide2").show();
  });
  keyframe(3.4, function() {
    return $(".content").css({
      top: 10,
      margin: 0
    });
  });
  keyframe(4, function() {
    return $(".content .slide2 .slide-content").css("opacity", 1);
  });
  return keyframe(4.5, function() {
    return $("body").addClass("ready");
  });
});
