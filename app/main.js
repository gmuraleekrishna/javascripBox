function Box(selector) {
  this.pos_x = 0;
  this.pos_y = 0;
  _this = this;
  _this.thisDiv = selector;
  this.windowCenterY = (($(window).height() - $(_this.thisDiv).outerHeight()) / 2 );
  this.windowCenterX = (($(window).width() - $(_this.thisDiv).outerWidth() ) / 2 );
  
  this.moveUp = function(){
    _this.pos_y = Math.max(0, _this.pos_y - 10);
  };

  this.moveLeft = function() {
    _this.pos_x = Math.max(0, _this.pos_x - 10);
  };

  this.moveRight = function() {
    _this.pos_x = Math.min(_this.pos_x + 10, ($(window).width() - $(_this.thisDiv).outerWidth()));
  };

  this.moveDown = function() {
    _this.pos_y = Math.min(_this.pos_y + 10, ($(window).height() - $(_this.thisDiv).outerHeight()));
  };

  this.updatePosition = function() {
    $(_this.thisDiv).css("top",  _this.pos_y  + "px");
    $(_this.thisDiv).css("left", _this.pos_x + "px");
  };
  
  this.centerify = function(){
    $(_this.thisDiv).css("position","absolute");
    _this.pos_y = (($(window).height() - $(_this.thisDiv).outerHeight()) / 2  );
    _this.pos_x = (($(window).width() - $(_this.thisDiv).outerWidth() ) / 2  );
    _this.updatePosition();
  };
  
  this.directions = { 37  : this.moveLeft,  38  : this.moveUp,  39  : this.moveRight,  40  : this.moveDown };

  this.move = function(e) {
    try{
      this.directions[e.which]();
      this.updatePosition();
    }catch(err){
      console.log("err");
    }
  };
};

$(document).ready(function(){
  var boxDiv = "<div id=box style='height: 100px; width: 100px; border: 1px solid black;'></div>";
  var box  = new Box("div#box");
  $('.container').append(boxDiv);
  box.centerify();
  $(document).keydown(function (e) { box.move(e); } );
  $(window).on("resize", box.centerify);
});
