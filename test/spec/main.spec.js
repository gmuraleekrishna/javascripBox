describe("The Index page", function(){
  beforeEach(function(){
    loadFixtures('index.html');
  });
  
  describe("Box", function() {
    beforeEach(function(){
      box = new Box('div#box');
    });
    it("should decrease the pos_y ", function(){
      box.pos_y = 100;
      box.moveUp();
      expect(box.pos_y).toEqual(90);
    });
    it("should increase the pos_y ", function(){
      box.moveDown();
      expect(box.pos_y).toEqual(10);
    });
    it("should decrease the pos_x ", function(){
      box.pos_x = 100;
      box.moveLeft();
      expect(box.pos_x).toEqual(90);
    });
    it("should increase the pos_x ", function(){
      box.moveRight();
      expect(box.pos_x).toEqual(10);
    });
    it("shouldnot increase the pos_x for val beyond width of screen", function(){
      box.pos_x = -100;
      box.moveLeft();
      expect(box.pos_x).toEqual(0);
    });
  });

  describe("Events", function(){
    beforeEach(function(){
      box1 = new Box();
    });
    it("should decrease posy if up pressed", function(){
      var e = jQuery.Event("keydown");
      e.which = 38; 
      box1.pos_y = 100;
      box1.move(e);
      expect(box1.pos_y).toEqual(90);
    });
    it("should increase posy if down pressed", function(){
      var e = jQuery.Event("keydown");
      e.which = 40; 
      box1.move(e);
      expect(box1.pos_y).toEqual(10);
    });
    
    it("should  decrease posx if left pressed", function(){
      var e = jQuery.Event("keydown");
      e.which = 37;
      box1.pos_x = 100;
      box1.move(e);
      expect(box1.pos_x).toEqual(90);
    });
    it("should increase posx if right  pressed", function(){
      var e = jQuery.Event("keydown");
      e.which = 39; 
      box1.move(e);
      expect(box1.pos_x).toEqual(10);
    });
  });
  describe("Trigger", function(){
    it("should increase posy if down pressed", function(){
      var e = jQuery.Event("keydown");
      e.which = 40;
      box1.pos_y = 100;
      $(document).trigger(e);
      expect(box1.pos_y).toEqual(110);
    });
    it("should decrease posy if up pressed", function(){
      var e = jQuery.Event("keydown");
      e.which = 38;
      box1.pos_y = 100;
      $(document).trigger(e);
      expect(box1.pos_y).toEqual(90);
    });
    it("should increase posx if right pressed", function(){
      var e = jQuery.Event("keydown");
      e.which = 39;
      box1.pos_x = 100;
      $(document).trigger(e);
      expect(box1.pos_x).toEqual(110);
    });
    it("should decrease posx left pressed", function(){
      var e = jQuery.Event("keydown");
      e.which = 37;
      box1.pos_x = 100;
      $(document).trigger(e);
      expect(box1.pos_x).toEqual(90);
    });
    it("should not change values if any other key pressed", function(){
      var e = jQuery.Event("keydown");
      e.which = 18;
      box1.pos_x = 100;
      box1.pos_y = 100;
      $(document).trigger(e);
      expect(box1.pos_x).toEqual(100);
      expect(box1.pos_y).toEqual(100);
    });
  });;
});
