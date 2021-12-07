var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00e46d60-0468-4c14-80ff-ef7cec4baec2","41fb2270-4145-4ce8-bba4-76626683adec","d9adb0af-672d-4cb1-91d4-c2a258a4b4a5","ca758cbe-d5ac-49eb-922f-e965a725b9db","548785ac-f8db-46ba-b891-1bf162fa3109","abd59bbd-c70f-4dec-abf3-37bf0edfaf36","f3db0e0c-a17b-450b-b1a0-b0c05cfa7e7f"],"propsByKey":{"00e46d60-0468-4c14-80ff-ef7cec4baec2":{"name":"carrot","sourceUrl":null,"frameSize":{"x":17,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"rh1UVtkIj0zUg67GDQzNSvrbJp5RQDks","loadedFromSource":true,"saved":true,"sourceSize":{"x":17,"y":43},"rootRelativePath":"assets/00e46d60-0468-4c14-80ff-ef7cec4baec2.png"},"41fb2270-4145-4ce8-bba4-76626683adec":{"name":"brinjal","sourceUrl":null,"frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"g_8dW6Fpuy_K5HWwZaSgsGyi1DOPHanp","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/41fb2270-4145-4ce8-bba4-76626683adec.png"},"d9adb0af-672d-4cb1-91d4-c2a258a4b4a5":{"name":"capcisum","sourceUrl":null,"frameSize":{"x":27,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"DygWIyG3LPSfhelGRimehrDwZCY3W_ct","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":43},"rootRelativePath":"assets/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png"},"ca758cbe-d5ac-49eb-922f-e965a725b9db":{"name":"orange","sourceUrl":null,"frameSize":{"x":35,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"J8mBYOy4he2OjqgT_SrmUYk3TQyDaoHR","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":43},"rootRelativePath":"assets/ca758cbe-d5ac-49eb-922f-e965a725b9db.png"},"548785ac-f8db-46ba-b891-1bf162fa3109":{"name":"tomato","sourceUrl":null,"frameSize":{"x":39,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"yW2AesndrhQRt2rxxFqdsIhcucoXUuis","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":43},"rootRelativePath":"assets/548785ac-f8db-46ba-b891-1bf162fa3109.png"},"abd59bbd-c70f-4dec-abf3-37bf0edfaf36":{"name":"coiso","sourceUrl":null,"frameSize":{"x":25,"y":43},"frameCount":2,"looping":true,"frameDelay":12,"version":"GGM_iMVG4nGcDy0Im0ZL3wIivY21uVU_","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":43},"rootRelativePath":"assets/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png"},"f3db0e0c-a17b-450b-b1a0-b0c05cfa7e7f":{"name":"onion","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"QuVv7cnuPbx.egqlPbTfF4sw1HZP2mWl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f3db0e0c-a17b-450b-b1a0-b0c05cfa7e7f.png"}}};
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

 for (var i = 50; i < 400; i=i+50) 
 { var cerona = createSprite(i, 50, 20, 20);
 cerona.setAnimation("carrot");
}

for (var i = 50; i < 400; i=i+50) 
{
  var berinjas = createSprite(i, 125, 20, 20);
 berinjas.setAnimation("brinjal");
}

for (var i = 50; i < 400; i=i+50) 
{
  var rabatene = createSprite(i, 190, 20, 20);
 rabatene.setAnimation("capcisum");
}

for (var i = 50; i < 400; i=i+50) 
{
  var ceboulas = createSprite(i, 285, 20, 20);
 ceboulas.setAnimation("onion");
}

for (var i = 50; i < 400; i=i+50) 
{
  var tomeitos = createSprite(i, 350, 20, 20);
 tomeitos.setAnimation("tomato");
}

var coiso = createSprite(400,220,50,50);
coiso.setAnimation("coiso");
coiso.setVelocity(-2,0);

var coiso2 = createSprite(400,310,50,50);
coiso2.setAnimation("coiso");
coiso2.setVelocity(-3,0);

var coiso3 = createSprite(400,380,50,50);
coiso3.setAnimation("coiso");
coiso3.setVelocity(-5,0);

var coiso4 = createSprite(400,80,50,50);
coiso4.setAnimation("coiso");
coiso4.setVelocity(-4,0);

var coiso5 = createSprite(400,150,50,50);
coiso5.setAnimation("coiso");
coiso5.setVelocity(-2.3,0);

 playSound("assets/category_music/island_point_tally_1.mp3");
 
function draw() {
  background(rgb(139,69,19));
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
