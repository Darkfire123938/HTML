var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4bb88293-a2f9-4430-971e-8576609531c6","55de6ead-2d9f-4162-8e1d-0253f1b2c05c","f354fd01-3aa7-4766-b39a-e7ae7d91c140","20e42895-1468-4e8d-a0e5-fde48dd910c8","1b43c153-9f08-4026-b3f3-331b31e37ee3","7c17a6a7-3b0e-412a-add7-913b981c8138","82a0a8ff-13c7-49d9-a956-ef2725a05b47","05086055-031a-4f14-bf7a-bd4d266cab3a","09161c21-1478-4ea2-bcec-569455e3e1ce"],"propsByKey":{"4bb88293-a2f9-4430-971e-8576609531c6":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"FX0.VA6HfVdW9Ul0fIQKsIaBk_G5fyWl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4bb88293-a2f9-4430-971e-8576609531c6.png"},"55de6ead-2d9f-4162-8e1d-0253f1b2c05c":{"name":"player","sourceUrl":null,"frameSize":{"x":52,"y":96},"frameCount":6,"looping":true,"frameDelay":3,"version":"zJhIRNO7QevYO4D4McZEEnFDCCSX5j8p","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":156,"y":192},"rootRelativePath":"assets/55de6ead-2d9f-4162-8e1d-0253f1b2c05c.png"},"f354fd01-3aa7-4766-b39a-e7ae7d91c140":{"name":"running1-removebg-preview.png_1","sourceUrl":null,"frameSize":{"x":52,"y":96},"frameCount":6,"looping":true,"frameDelay":3,"version":"86LTEtnAoOFPu2BnDiBu00SkGenifrPp","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":156,"y":192},"rootRelativePath":"assets/f354fd01-3aa7-4766-b39a-e7ae7d91c140.png"},"20e42895-1468-4e8d-a0e5-fde48dd910c8":{"name":"jumping","sourceUrl":null,"frameSize":{"x":47,"y":113},"frameCount":9,"looping":true,"frameDelay":12,"version":"vAGisL4Pb842M2kNqrmtx8EmG7s_arBF","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":235,"y":226},"rootRelativePath":"assets/20e42895-1468-4e8d-a0e5-fde48dd910c8.png"},"1b43c153-9f08-4026-b3f3-331b31e37ee3":{"name":"jumping_copy_1","sourceUrl":null,"frameSize":{"x":47,"y":113},"frameCount":9,"looping":true,"frameDelay":12,"version":"9XeLYvIErwcYQvh0dVvONwa1lDAnAYn0","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":235,"y":226},"rootRelativePath":"assets/1b43c153-9f08-4026-b3f3-331b31e37ee3.png"},"7c17a6a7-3b0e-412a-add7-913b981c8138":{"name":"idle","sourceUrl":null,"frameSize":{"x":60,"y":88},"frameCount":5,"looping":true,"frameDelay":12,"version":"P4UMAR.9any04ifn94xQMbzX7.IGHkg2","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":176},"rootRelativePath":"assets/7c17a6a7-3b0e-412a-add7-913b981c8138.png"},"82a0a8ff-13c7-49d9-a956-ef2725a05b47":{"name":"idle_copy_1","sourceUrl":null,"frameSize":{"x":60,"y":88},"frameCount":5,"looping":true,"frameDelay":12,"version":"v4KPv0SsJtvweToqyJOadkVzFsekQeQm","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":176},"rootRelativePath":"assets/82a0a8ff-13c7-49d9-a956-ef2725a05b47.png"},"05086055-031a-4f14-bf7a-bd4d266cab3a":{"sourceSize":{"x":256,"y":256},"frameSize":{"x":256,"y":256},"frameCount":1,"frameDelay":4,"name":"craiyon_081617_a_dungeon_themed_background_for_game_panel.png_1","sourceUrl":"assets/v3/animations/J_UE9nLrc-wl0cnU_YU71j9qSHYPpwxjD2cfjIxUj-w/05086055-031a-4f14-bf7a-bd4d266cab3a.png","size":99066,"version":"FBUnWtIdBLwiXHMGnYi2NRijpYHHW2G4","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/J_UE9nLrc-wl0cnU_YU71j9qSHYPpwxjD2cfjIxUj-w/05086055-031a-4f14-bf7a-bd4d266cab3a.png"},"09161c21-1478-4ea2-bcec-569455e3e1ce":{"sourceSize":{"x":256,"y":256},"frameSize":{"x":256,"y":256},"frameCount":1,"frameDelay":12,"name":"floor","sourceUrl":null,"size":99066,"version":"bfA.6GioQd_xYXgSAbIU2.iTRhrOhK8W","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/09161c21-1478-4ea2-bcec-569455e3e1ce.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var back = createSprite(200, 200);
back.setAnimation("craiyon_081617_a_dungeon_themed_background_for_game_panel.png_1");
back.width = 400;
back.height = 400;
var plat1 = createSprite(200, 395);
plat1.setAnimation("floor");
plat1.width = 575;
plat1.setCollider("rectangle",0,0, 550, 5);
var player = createSprite(200, 1);
player.setAnimation("jumping");
player.setCollider("rectangle",0, 0, 50, 60);
var plat2 = createSprite(200, 310);
plat2.setAnimation("animation_1");
plat2.width = 200;
plat2.setCollider("rectangle",-1,0, 65, 5);
var plat3 = createSprite(200, 3000);
plat3.setAnimation("animation_1");
plat3.width = 200;
plat3.setCollider("rectangle",-1,0, 65, 5);
var plat = createGroup();
plat.add(plat1);
plat.add(plat2);
plat.add(plat3);
var downplats = createGroup();
downplats.add(plat2);
downplats.add(plat3);
var jumping = false;
var startroom = true;
var swarmroom = false;
var left= false;
var right = false;
var down = false;
var goBack = false;
function startRoom(){
  plat2.x = 200;
  plat2.y = 310;
  plat2.width = 200;
  plat2.setCollider("rectangle",-1,0, 65, 5);
  plat3.y = 3000;
  startroom = true;
}
function swarmRoom()
{
  plat2.x = 200;
  plat2.y = 305;
  plat2.width = 200;
  plat2.setCollider("rectangle",-1,0, 65, 5);
  plat3.x = 200;
  plat3.y = 215;
  plat3.width = 575;
  
}
function draw(){
  
  if(startroom == true && player.x >= 420 && player.y >= 300)
  {
    player.x = -20;
    swarmRoom();
    startroom = false;
    swarmroom = true;
  }
  
   if(swarmroom == true && player.x <= -25 && player.y >= 300)
  {
    player.x = 420;
    startRoom();
    startroom = true;
    swarmroom = false;
  }
  if(!keyDown("left") && !keyDown("right") && right == true && down == false)
  {
    player.setAnimation("idle");
  } else if (!keyDown("left") && !keyDown("right") && left == true && down == false)
  {
    player.setAnimation("idle_copy_1");
  }
  if(player.isTouching(plat1) && player.y >= plat1.y - 27
  ){
    player.velocityY = 0;
    jumping = false;
  }   else if (jumping == false)
  {
    player.velocityY = 10;
  }
   if(player.isTouching(plat2) && player.y <= plat2.y - 27){
    player.velocityY = 0;
    jumping = false;
   }
   if(player.isTouching(plat3) && player.y <= plat3.y - 27){
    player.velocityY = 0;
    jumping = false;
   }
  if(keyDown("left"))
  {
    player.x += -5;
    left = true;
    right = false;
  if(keyDown("left") && jumping == false)
  {
    player.setAnimation("running1-removebg-preview.png_1");
  }
    
  }
  
   if(keyDown("right"))
  {
    player.x += 5;
    right = true;
    left = false;
    if(keyDown("right") && jumping == false)
    {
    player.setAnimation("player");
    }
      
    }
  if(player.isTouching(plat)&& keyWentDown("up"))
  {
    player.velocityY = -10;
    
    jumping = true;
  }
  if(jumping == true){
    player.velocityY += 0.5;
    if(jumping == true && right == true)
    {
    player.setAnimation("jumping");
    }
    if(jumping == true && left == true )
    {
      player.setAnimation("jumping_copy_1");
    }
  }
  if(keyWentDown("down") && player.isTouching(downplats))
  {
    player.velocityY = 10;
    player.setAnimation("jumping");
    down = true;
  }
  if(player.isTouching(plat1))
  {
    down = false;
  }
  if( player.y >= plat3.y + 27 && player.y <= plat2.y + 27)
  {
    down = false;
  }
  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
