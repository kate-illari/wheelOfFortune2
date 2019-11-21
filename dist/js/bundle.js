!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";i.r(e);const n={x:50,y:10};const s={x:100,y:10};class o{static initStorage(){window.localStorage.setItem("itemsList",JSON.stringify([{name:"SYM8",count:50},{name:"SYM8",count:50},{name:"SYM1",count:40},{name:"SYM8",count:50},{name:"SYM8",count:50},{name:"SYM2",count:40},{name:"SYM8",count:50},{name:"SYM8",count:50},{name:"SYM3",count:40},{name:"SYM8",count:50},{name:"SYM8",count:50},{name:"SYM8",count:50}]))}static randomInt(t,e){return Math.floor(Math.random()*(e-t+1))+t}static getSectorItemsList(){var t=[];return JSON.parse(window.localStorage.getItem("itemsList")).forEach(function(e){t.push(e.name)}),t}static addItems(t,e){var i=JSON.parse(window.localStorage.getItem("itemsList")).map(function(i){return t===i.name&&(i.count+=e),i});window.localStorage.setItem("itemsList",JSON.stringify(i))}static removeItems(t,e){var i=JSON.parse(window.localStorage.getItem("itemsList")).map(function(i){return t===i.name&&(i.count-e>0?i.count-=e:i.count=0),i});window.localStorage.setItem("itemsList",JSON.stringify(i))}static addItem(t,e){var i=JSON.parse(window.localStorage.getItem("itemsList")).map(function(i,n){return t===n&&(i.count+=e),i});window.localStorage.setItem("itemsList",JSON.stringify(i))}static removeItem(t,e){var i=JSON.parse(window.localStorage.getItem("itemsList")).map(function(i,n){return t===n&&(i.count-e>0?i.count-=e:i.count=0),i});window.localStorage.setItem("itemsList",JSON.stringify(i))}static setItemCount(t,e){var i=JSON.parse(window.localStorage.getItem("itemsList")).map(function(i,n){return t===n&&(i.count=e),i});window.localStorage.setItem("itemsList",JSON.stringify(i))}static countItemsProbabilities(t,e){var i=[];return t.forEach(function(t){i.push(Math.floor(100*t.count/e))}),i}static countTotalItemsSum(t){var e=0;return t.forEach(function(t){e+=t.count}),e}static getRandomItemAccordingToProbability(){var t,e=JSON.parse(window.localStorage.getItem("itemsList")),i=this.countTotalItemsSum(e),n=this.countItemsProbabilities(e,i),s=[];return console.warn({itemsProbabilities:n}),e.forEach(function(t,e){for(var i=0;i<n[e];i++)s.push(e)}),console.error({probabilityArray:s}),t=this.randomInt(0,s.length-1),console.log({random:t}),s.sort(()=>Math.random()-.5)[t]}static isNoMoreItems(){return JSON.parse(window.localStorage.getItem("itemsList")).every(t=>0===t.count)}static findSectorToStopOn(){var t=this.getRandomItemAccordingToProbability(),e=JSON.parse(window.localStorage.getItem("itemsList")),i=e[t];return i.count>0?(i.count--,window.localStorage.setItem("itemsList",JSON.stringify(e)),t):(console.warn("no more ",i.name),this.findSectorToStopOn())}}class a extends PIXI.Sprite{constructor(t){super(t.texture),t.parent.addChild(this),this.anchor.set(.5),this.scale.set(t.scale),this.updatePositionAndRotation(t.totalSectorsNum,t.sectorIndex,t.centerOffset)}updatePositionAndRotation(t,e,i){var n=2*Math.PI/t*e,s=-i*Math.cos(n),o=-i*Math.sin(n);this.position.set(o,s),this.rotation=-n}hide(){this.visible=!1}show(){this.visible=!0}}class r{constructor(t){var e=this,i={id:void 0,target:void 0,prop:void 0,animation:{keyFrames:[],step:0,complete:!1},running:!1,playbackSpeed:void 0,loop:!1,readyToLoop:!1,onStart:void 0,onEnd:void 0,onUpdate:void 0,children:[],parent:void 0,localTime:0,delay:0,startTimeOffset:void 0,addToAnimationLoop:!1};t=Sys.applyProperties(i,t),t=e.parseConfig(t),e=Sys.applyProperties(e,t),t.addToAnimationLoop&&S.push(e)}parseConfig(t){var e,i={animation:{keyFrames:[],step:0,complete:!1}},n=function(t,e){return t.time-e.time};if(Sys.iterate(t,function(s,o){"animate"===s?("animate"!==s&&console.warn("You are trying to use a "+s+" operation on a Animation.Holder, for now only 'animate' is supported"),Sys.isObj(o)?(Sys.iterate(o,function(n,s){e={time:parseInt(n,10)},Sys.isObj(s)?Sys.isDefined(s.value)?e=Sys.applyProperties(e,s):e.value=s:(e.value=s,!Sys.isDefined(t.prop)&&t.length>1&&console.warn("If we only specify a number value the property 'prop' must exist")),i.animation.keyFrames.push(e)}),i.animation.keyFrames.sort(n)):Sys.isArray(o)?i.animation.keyFrames=o:console.warn("Operation is in wrong format")):i[s]=o}),!Sys.isDefined(i.target)&&Sys.isDefined(i.parent)&&Sys.isDefined(i.parent.target)&&(i.target=i.parent.target),Sys.isDefined(i.target)&&!Sys.isObj(i.target)&&console.warn("The target of a Animation.Holder must be a Object"),!Sys.isDefined(i.id)&&Sys.isDefined(i.target)&&Sys.isDefined(i.target.id)){var s=Sys.isDefined(i.prop)?i.prop:"";i.id=i.target.id+":"+s+"Animation"}if(Sys.isDefined(i.children)&&i.children.length>0){var o=[],a=this;i.children.forEach(function(e){var i;Sys.isDefined(e.localTime)?i=e:(e.parent={target:t.target},i=new r(e)),i.parent=a,o.push(i)}),i.children=o}return i}run(t){var e=this,i=t.timeStep;0===e.localTime&&Sys.isDefined(e.startTimeOffset)&&(i+=e.startTimeOffset),Sys.isDefined(e.playbackSpeed)&&(i*=e.playbackSpeed),e.localTime+=i,e.localTime>=e.delay&&(e.doAnimation(i),e.children.forEach(function(n){n.running&&(n.run({timeStep:i,time:t.time}),n.running&&(e.running=!0,n.loop||n.readyToLoop||(e.readyToLoop=!1)))}),Sys.isDefined(e.onUpdate)&&e.onUpdate(i)),e.loop&&e.readyToLoop?e.restoreOnLoop():e.running||(Sys.isDefined(e.onEnd)&&e.onEnd(),e.restore())}doAnimation(t){var e=this;if(e.animation.keyFrames.length<2||!Sys.isDefined(e.target))return e.readyToLoop=!0,void(e.running=!1);e.performAction(t)||(e.running=!1,e.readyToLoop=!0)}play(t,e){var i=this,n=!Sys.isDefined(e)||e;i.running=!0,i.handleItems("play",t),0===i.localTime&&Sys.isDefined(i.onStart)&&i.onStart(),n&&i.runParent()}runParent(){Sys.isDefined(this.parent)&&(this.parent.running=!0,this.parent.runParent())}pause(t){this.running=!1,this.handleItems("pause",t)}stop(t,e){var i=!Sys.isDefined(e)||e;this.running=!1,this.handleItems("stop",t),i&&this.restore(t,!0)}restore(t,e){var i=this,n=!Sys.isDefined(e)||e;i.localTime=0,i.readyToLoop=!1,i.restoreAnimation(),i.handleItems("restore",t),i.running&&n&&i.play(t,!0)}restoreOnLoop(t,e){var i=this;!(!Sys.isDefined(e)||e)&&i.loop||(i.running=!0,i.readyToLoop=!1,i.restoreAnimation(),i.handleItems("restoreOnLoop"))}restoreAnimation(){this.animation.time=0,this.animation.step=0,this.animation.keyFrames.forEach(function(t){Sys.isDefined(t.callback)&&(t.callbackCompleted=!1)})}updateOperation(t){var e={};e.animate=t,e=this.parseConfig(e),this.animation=e.animation,this.restore()}handleItems(t,e){(Sys.isDefined(e)&&Sys.isArray(e)?e:this.children).forEach(function(e){e[t](!0,!1)})}setParent(t){this.parent=t,t.children.push(this),Sys.isDefined(this.target)||(this.target=t.target)}addChild(t){var e=this;Sys.isArray(t)?t.forEach(function(t){t.setParent(e)}):Sys.isObj(t)&&t.setParent(e)}findChild(t,e){var i=Sys.isDefined(e)?e:"id",n=!1,s=function(e){var n=!1,o=!1;return e.forEach(function(e){Sys.isDefined(e[i])&&e[i]===t&&(n=e),Sys.isDefined(e.children)&&(o=s(e.children),Sys.isObj(o)&&(n=o))}),n};return this[i]===t?this:(Sys.isDefined(this.children)&&(n=s(this.children)),n)}performAction(t){var e=this,i=e.animation,n=i.keyFrames,s=n.length,o=e.increaseAnimationTime(t),a=n[i.step],r=n[i.step+1],l=!0;return s<2?(console.warn("The Holder "+item+" have an animation with less than two keyFrames, the operation needs a minimum of two keyFrames to be able to animate."),0):(e.handleCallback(a),r.time<=o&&(e.progressKeyFrame(),a=n[i.step],i.step===s-1?(r=a,l=!1):r=n[i.step+1]),e.calculate(i.time,a,r),l)}progressKeyFrame(t){var e,i=this,n=i.animation,s=n.keyFrames;n.step=Sys.isDefined(t)?t:n.step+1,e=s[n.step],i.handleCallback(e),Sys.isDefined(e.goTo)&&i.doGoTo(e),n.step!==s.length-1?n.time>=s[n.step+1].time&&i.progressKeyFrame():i.loop&&(n.time-=s[n.step].time,i.progressKeyFrame(0))}doGoTo(t){this.animation.time=this.animation.keyFrames[t.goTo].time,this.animation.step=t.goTo,console.warn("Warning: goTo functionality not completed, use at own risk.")}calculate(t,e,i){var n=this,s=n.calculateTime(t,e,i),o=e.value,a=i.value;Sys.isObj(o)?Sys.iterate(o,function(t,i){(Sys.isDefined(n.prop)?n.target[n.prop]:n.target)[t]=Animation.utils.getInterpolationValue(i,a[t],s,e.ease,t)}):n.target[n.prop]=Animation.utils.getInterpolationValue(o,a,s,e.ease)}handleCallback(t){var e=t.callback;Sys.isDefined(e)&&!t.callbackCompleted&&(e.fireImmediately?Sys.isString(e.func)?e.scope.fireEvent(e.func,e.args):Sys.isFunc(e.func)&&e.func.apply(e.scope,e.args):Game.stage.view.animationManager.callbackContainer.push(e),t.callbackCompleted=!0)}calculateTime(t,e,i){var n=t-e.time,s=i.time-e.time;return 0!==s?n/s:1}increaseAnimationTime(t){return Sys.isDefined(this.animation.time)?this.animation.time+=t:this.animation.time=t,this.animation.time}animate(t,e){this.updateOperation(t),e&&this.play()}}const l=360,c=270,h={maxSpeed:-.5,timeFraction:.002},u=520,d={width:220,height:220},m={portrait:{x:0,y:430},landscape:{x:380,y:310}};const p={x:10,y:10};const g=10,f=80;i.d(e,"animationBuffer",function(){return S});const S=[];var I=new PIXI.Application(window.innerWidth,window.innerHeight,{backgroundColor:0});document.body.appendChild(I.view);const w=new class extends PIXI.Sprite{constructor(){super(),this.position.set(n.x,n.y),this.interactive=!0,this.buttonMode=!0,this.on("pointerdown",this.onButtonClick.bind(this)),this.ambientSound=new Audio("assets/sounds/ambience.mp3"),this.ambientSound.loop=!0,this.currentState="off",this.setOffTexture()}onButtonClick(){"off"===this.currentState?(this.currentState="on",this.setOnTexture(),this.soundOn()):"on"===this.currentState?(this.currentState="off",this.setOffTexture(),this.soundOff()):console.error("Check for error, current state is ",this.currentState)}soundOn(){this.ambientSound.play()}soundOff(){this.ambientSound.pause()}setOffTexture(){this.texture=new PIXI.Texture.from("assets/images/buttons/soundOff.png")}setOnTexture(){this.texture=new PIXI.Texture.from("assets/images/buttons/soundOn.png")}};var y=document.documentElement,v=y.requestFullscreen||y.webkitRequestFullscreen||y.mozRequestFullScreen||y.msRequestFullscreen,b=y.exitFullscreen||y.webkitExitFullscreen||y.mozExitFullScreen||y.msExitFullscreen;const C=new class extends PIXI.Sprite{constructor(t){super(),this.texture=new PIXI.Texture.from("assets/images/buttons/fullscreen.png"),this.position.set(s.x,s.y),this.interactive=!0,this.buttonMode=!0,this.on("pointerdown",this.onButtonClick.bind(this)),this.enterFullscreenMode=t.enterFullscreenMode,this.exitFullscreenMode=t.exitFullscreenMode,this.currentState="off"}onButtonClick(){"off"===this.currentState?(this.currentState="on",this.enterFullscreenMode()):"on"===this.currentState?(this.currentState="off",this.exitFullscreenMode()):console.error("Check for error, current state is ",this.currentState)}}({enterFullscreenMode:function(){v()},exitFullscreenMode:function(){b()}});var T=new class extends PIXI.Container{constructor(t,e,i,n,s){super(),this.po=new PIXI.Container,this.scrollContainer=new PIXI.Container,this.po.addChild(this.scrollContainer),this.items=[],this.x=t,this.y=e,this.scrollContainer.x=t,this.scrollContainer.y=e,this.height=n,this.itemHeight=s,this.mask=new PIXI.Graphics,this.mask.beginFill(16777215).drawRect(t,e,i,n).endFill(),this.po.addChild(this.mask),this.scrollContainer.mask=this.mask,this.mousedown=!1,this.lastPos=null,this.lastDiff=null,this.scrollTween=null,this.po.interactive=!0,this.po.mousemove=t=>this.onmousemove(t),this.po.mousedown=t=>this.onmousedown(t),this.po.mouseup=t=>this.onmouseup(t),this.po.mouseupoutside=t=>this.onmouseup(t),this.po.touchmove=t=>this.onmousemove(t),this.po.touchstart=t=>this.onmousedown(t),this.po.touchend=t=>this.onmouseup(t),this.po.touchendoutside=t=>this.onmouseup(t)}onmousemove(t){const{originalEvent:e}=t.data;var i=e.touches?e.touches[0].clientY:e.clientY;this.mousedown&&(this.lastDiff=i-this.lastPos.y,this.lastPos.y=i,-this.scrollContainer.y<0?this.scrollContainer.y+=this.lastDiff/2:this.scrollContainer.y+=this.lastDiff)}onmousedown(t){const{originalEvent:e}=t.data,i=e.touches?e.touches[0].clientY:e.clientY;this.mousedown=!0,this.scrollTween&&this.scrollTween.kill(),this.lastPos={y:i}}onmouseup(){if(this.lastDiff){let t=this.scrollContainer.y+10*this.lastDiff,e=Quad.easeOut,i=Math.abs(this.lastDiff/150);t<-this.items.length*this.itemHeight+this.height+this.y&&(t=-this.items.length*this.itemHeight+this.height+this.y,e=Back.easeOut,i=.1+Math.abs(this.lastDiff/150)),t>this.y&&(t=this.y,e=Back.easeOut,i=.1+Math.abs(this.lastDiff/150)),this.scrollContainer.y>0&&(i=1+this.scrollContainer.y/500,e=Elastic.easeOut),this.scrollContainer.y<-this.items.length*this.itemHeight+this.height&&(i=1+(this.items.length*this.itemHeight+this.height+this.scrollContainer.y)/500,e=Elastic.easeOut),this.scrollTween=TweenMax.to(this.scrollContainer,i,{y:t,ease:e})}this.mousedown=!1,this.lastPos=null,this.lastDiff=null}hideOffscreenElements(){const t=Math.floor(-(this.scrollContainer.y-this.y)/this.itemHeight),e=Math.floor(t+this.height/this.itemHeight);for(let i=0;i<this.items.length;i++){const n=this.items[i];n.visible=!1,i>=t&&i<=e+1&&(n.visible=!0)}}addItem(t){this.scrollContainer.addChild(t),this.items.push(t),t.y=(this.items.length-1)*this.itemHeight}}(0,0,500,1e3,1500),k=[function(){S.forEach(function(t){t.running&&t.run({timeStep:P,time:A})})}],x=0,P=0,A=0;x=function(){var t=Date.now(),e=t-x;e>250&&(e=1e3/60);return A+=P=0|e,t}(),window.localStorage.getItem("itemsList")||o.initStorage();var D=new class extends PIXI.Container{constructor(t,e,i){super();var n=this;n.sectorItemsList=t.sectorItemsList,n.background=n._initBackground(),n._initBgSpine(n,"glow",i),n.background.anchor.set(.5,.5),n.maxSpeed=t.maxSpeed,n.minSpeed=t.minSpeed,n.wheelBgDisk=n.initWheelBackground(),n.sprite=n._initWheelSprite(),n.spinButton=n.initSpinButton(),n.wheelItems=n._initWheelItems(n.sprite),n.highlightSprite=void 0!==t.image?n._initSprite(t.image,PIXI.BLEND_MODES.ADD):n._initEmptySprite(),n.sectorsAngles=n._mapSectorsAgles(t.sectors),n.animations=n._initAnimations(t),n.onStartBounceCompleteCallback=e,n.config=t,n.pick=n._initPickSprite(),n.gift=n._initGiftSprite(n,"SYM8"),n.logo=n.initLogo(),n.reset(),n.refresh()}_initBackground(){return this.addChild(new PIXI.Sprite.fromImage("assets/images/background.png"))}initWheelBackground(){var t=new PIXI.Sprite.fromImage("assets/images/disk.png");return t.anchor.set(.5,.5),t.scale.set(.5),this.addChild(t)}_initBgSpine(t,e,i){var n,s=this;PIXI.loader.add("glow","assets/spine/glow.json").load(function(t,e){(n=new PIXI.spine.Spine(e.glow.spineData)).skeleton.setToSetupPose(),n.update(0),n.autoUpdate=!1,s.background.addChild(n),n.state.setAnimation(0,"spin",!0),i.ticker.add(function(){n.update(.02)}),n.visible=!1,s.bgAnimation=n})}_initWheelSprite(){var t=new PIXI.Sprite.fromImage("assets/images/sectors.png");return t.anchor.set(.5,.5),t.scale.set(.5),this.addChild(t)}initSpinButton(){var t=new PIXI.Sprite.fromImage("assets/images/stop_idle.png");return t.interactive=!0,t.anchor.set(.5,.5),t.scale.set(.5),this.addChild(t),this.initSpinButtonActions(t),t}initSpinButtonActions(t){var e="desktop"===deviceAPI.deviceType?"mousedown":"touchstart",i="desktop"===deviceAPI.deviceType?"mouseup":"touchend";t.on(e,function(){t.texture=PIXI.Texture.fromImage("assets/images/stop_click.png")}),t.on("mouseupoutside",function(){t.texture=PIXI.Texture.fromImage("assets/images/stop_idle.png")}),t.on("touchendoutside",function(){t.texture=PIXI.Texture.fromImage("assets/images/stop_idle.png")}),t.on(i,function(){t.texture=PIXI.Texture.fromImage("assets/images/stop_idle.png");var e,i=!o.isNoMoreItems(),n=JSON.parse(window.localStorage.getItem("itemsList")),s=new Audio("assets/sounds/spinStart.mp3"),a=new Audio("assets/sounds/win.mp3");i?(t.interactive=!1,s.play(),e=o.findSectorToStopOn(),console.warn("stopping at: ",e),wheel.start(),wheel.setStoppingAngle(e),wheel.startStopping().then(function(){"SYM8"===n[e].name?t.interactive=!0:(wheel.playGiftAnimation(n[e].name,function(){t.interactive=!0}),a.play())})):console.error("no more items at all")})}_initWheelItems(t){var e,i,n=this,s=[];return n.sectorItemsList.forEach(function(o,r){e=new PIXI.Container,(i=new a({parent:e,texture:new PIXI.Texture.fromImage("assets/images/prizes/"+o+".png"),sectorIndex:r,centerOffset:u,totalSectorsNum:n.sectorItemsList.length})).width=d.width,i.height=d.height,t.addChild(e),s.push(i)}),s}_initPickSprite(){var t=new PIXI.Sprite.fromImage("assets/images/arrow.png");return t.anchor.set(.5,.5),t.scale.set(.5),this.addChild(t),t.position.y=-350,t}_initGiftSprite(t,e){var i=this._initSprite(e,PIXI.BLEND_MODES.NORMAL);return t.addChild(i),i.width=120,i.height=120,i.position.y=-u/2,i.visible=!1,i.animation=new r({addToAnimationLoop:!0,target:i,children:[{prop:"position",animate:{200:{y:-u/2},1500:{y:0},5000:{y:0},5500:{y:-u/2}}},{prop:"width",animate:{200:120,1500:3*d.width,5000:3*d.width,5500:120}},{prop:"height",animate:{200:120,1500:3*d.height,5000:3*d.height,5500:120}}]}),i}_onWinAnimationComplete(t){t.visible=!1,this.wheelItems.forEach(function(t){t.show()}),this.bgAnimation.visible=!1}_initSprite(t,e){var i=new PIXI.Sprite.fromImage("assets/images/prizes/"+t+".png");return i.anchor.set(.5,.5),i.blendMode=e,i}_initEmptySprite(){return new PIXI.Sprite(PIXI.Texture.EMPTY)}_mapSectorsAgles(t){var e=t.length,i=l/e,n={};return t.forEach(function(t,e){n[t]||(n[t]=[]),n[t].push(i*e)}),n}_initAnimations(t){return{accelerationTicker:this._initAccelerationTicker(t.accelerationDuration),uniformRotationTicker:this._initUnformRotationTicker(),decelerationTicker:this._initDecelerationTicker()}}_initAccelerationTicker(t){var e=this;return new r({target:e,prop:"currentSpeed",onUpdate:e._updateSpriteAngle.bind(e),onEnd:e.startUniformRotation.bind(e),animate:[{time:0,value:0,ease:Animation.utils.powerTwoOut},{time:t*h.timeFraction,value:h.maxSpeed,ease:Animation.utils.powerTwoIn},{time:t,value:e.maxSpeed}],addToAnimationLoop:!0})}_initUnformRotationTicker(){return new r({onUpdate:this._updateSpriteAngle.bind(this),addToAnimationLoop:!0,loop:!0})}_initDecelerationTicker(){return new r({addToAnimationLoop:!0,onUpdate:this.decelerateRotation.bind(this),loop:!0})}startUniformRotation(){var t=this;t.onWheelStartCallback&&t.onWheelStartCallback(),t.currentSpeed=t.maxSpeed,t.animations.uniformRotationTicker.play()}decelerateRotation(){var t=this,e=t.sprite.rotation*PIXI.RAD_TO_DEG,i=1-(t.finalAngle-e)/t.stoppingDistance;t.currentSpeed=Animation.utils.powerTwoIn(t.maxSpeed,0,i),t.currentSpeed<t.minSpeed&&(t.currentSpeed=t.minSpeed),t._updateSpriteAngle()}_updateSpriteAngle(){var t,e=this,i=e.sprite.rotation*PIXI.RAD_TO_DEG,n=e.getTimeScale(),s=i+e.currentSpeed*n;e.prevFrameSpeed<0&&e.currentSpeed>0&&e.onStartBounceCompleteCallback(e.config.name),s>=e.finalAngle?(t=e.finalAngle,e.currentSpeed=0,e.animations.decelerationTicker.stop(),e.onWheelStopped()):t=s,e.sprite.rotation=t*PIXI.DEG_TO_RAD,e.highlightSprite.rotation=e.sprite.rotation,e.prevFrameSpeed=e.currentSpeed}getTimeScale(){var t=Date.now(),e=this.lastTick?this.lastTick:t-1e3/60;return this.lastTick=t,1.5*(t-e)/(1e3/60)}start(t){this.onWheelStartCallback=t,this.animations.accelerationTicker.play()}startDeceleration(t,e){this.onWheelStopped=e,this.animations.uniformRotationTicker.stop(),this._updateStoppingDistance(t),this.animations.decelerationTicker.play(),this.bgAnimation.visible=!0,this.bgAnimation.state.setAnimation(0,"spin",!0)}_updateStoppingDistance(t){var e=this,i=e.sprite.rotation*PIXI.RAD_TO_DEG,n=l-i%l+e.getStoppingAngle(),s=e.getRevolutionsBeforeStop(n,t);e.stoppingDistance=n+s*l,e.finalAngle=i+e.stoppingDistance}getRevolutionsBeforeStop(t,e){for(var i=0,n=e+c,s=t;s<n;)s=t+l*++i;return i=Math.max(i,this.config.minimumSpinsBeforeStop)}setStoppingAngle(t){var e=this.sectorsAngles[t],i=e.length,n=Math.floor(Math.random()*i);this.stopAngle=e[n]}getStoppingAngle(){return this.stopAngle}getCurrentStoppingDistance(){return this.stoppingDistance}playGiftAnimation(t,e){var i=this,n=i.gift,s=i.sectorItemsList.length,o=Math.round(s/l*i.stopAngle),a=i.wheelItems[o];a.hide(),n.texture=a.texture,n.visible=!0,n.animation.onEnd=function(){i._onWinAnimationComplete(n),e()},n.animation.play(),i.bgAnimation.state.setAnimation(0,"win",!0)}initLogo(){var t=new PIXI.Sprite.fromImage("assets/images/logo.png");return t.anchor.set(.5,.5),t.scale.set(.5),this.addChild(t),t.position.y=-350,t}reset(){var t=this;t.stoppingDistance=1/0,t.finalAngle=1/0,t.sprite.rotation=0,t.currentSpeed=0,t.lastTick=0}startStopping(){var t=this;return new Promise(function(e){t.startDeceleration(0,function(){e()})})}changeTexture(t,e){this.wheelItems[t].texture=e}refresh(){this.spinButton.scale.set(.5),this.background.scale.set(.5),window.innerHeight>window.innerWidth?(this.background.rotation=Math.PI/2,this.logo.position.set(m.portrait.x,m.portrait.y)):(this.background.rotation=2*Math.PI,this.logo.position.set(m.landscape.x,m.landscape.y))}}({name:"freespins",spineSlot:"1st_back",highlightSlot:"1st_back2",sectors:[0,1,2,3,4,5,6,7,8,9,10,11],maxSpeed:16,minSpeed:.15,accelerationDuration:1800,minimumSpinsBeforeStop:3,sectorItemsList:o.getSectorItemsList(),image:"SYM8"},function(){M.onStorageUpdated()},I);window.wheel=D,D.position.set(I.screen.width/2,I.screen.height/2),window.addEventListener("resize",function(){I.renderer.resize(window.innerWidth,window.innerHeight),D.position.set(window.innerWidth/2,window.innerHeight/2)}),I.ticker.add(function(t){k.forEach(function(t){t()}),T.hideOffscreenElements()}),I.stage.addChild(D);var O=new class extends PIXI.Sprite{constructor(t){super(),this.position.set(p.x,p.y),this.interactive=!0,this.buttonMode=!0,this.on("pointerdown",this.onButtonClick.bind(this)),this.openCallback=t.openCallback,this.closeCallback=t.closeCallback,this.currentState="closed",this.setClosedTexture()}onButtonClick(){"closed"===this.currentState?(this.currentState="opened",this.setOpenedTexture(),this.openCallback()):"opened"===this.currentState?(this.currentState="closed",this.setClosedTexture(),this.closeCallback()):console.error("Check for error, current state is ",this.currentState)}setClosedTexture(){this.texture=new PIXI.Texture.from("assets/images/buttons/settings.png")}setOpenedTexture(){this.texture=new PIXI.Texture.from("assets/images/buttons/error.png")}onForseClosed(){this.currentState="closed",this.setClosedTexture(),this.closeCallback()}}({openCallback:function(){M.showMenu()},closeCallback:function(){M.hideMenu()}}),M=new class extends PIXI.Container{constructor(t){super(),this.onItemImgChange=t.onItemImgChange,this.onCountChange=t.onCountChange;const e=document.createElement("input");e.accept="image/*",e.id="inpt",e.type="file",e.onchange=this.updateImageLocally.bind(this),document.body.appendChild(e);const i=new PIXI.Container;i.position.y=f;const n=JSON.parse(window.localStorage.getItem("itemsList"));this.itemGroups=this.createItemsListInterface(n,i),this.addChild(i),this.hideMenu()}onStorageUpdated(){console.log("updating the storage");const t=JSON.parse(window.localStorage.getItem("itemsList"));this.itemGroups.forEach(function(e,i){e.countText.text=t[i].count})}showMenu(){this.visible=!0}hideMenu(){this.visible=!1}createItemsListInterface(t,e){var i,n=this,s=[];return PIXI.loader.load(t.forEach(function(t,o){i=n.createItemContainer(e,t,o),s[o]=i})),s}createItemContainer(t,e,i){const n=new PIXI.Container;let s={};return s.button=this.addButton(n,e.name,i),s.countText=this.addTxt(n,e.count),s.buttons=this.addPlusMinusButtons(n,i,e.count),n.position.set(g,g*i+i*n.height),this.addItemsListBg(n),t.addChild(n),s}addItemsListBg(t){var e=new PIXI.Graphics;e.beginFill(4021340),e.lineStyle(2,14561865,1),e.drawRect(0,0,t.width,t.height),e.endFill(),e.blendMode=2,t.addChildAt(e,0)}addButton(t,e,i){const n=new PIXI.Texture.from("assets/images/prizes/"+e+".png"),s=new PIXI.Sprite(n);s.height=50,s.width=50,s.interactive=!0,s.buttonMode=!0,s.on("pointerdown",this.onItemClick.bind(this,s,i)),t.addChild(s)}addTxt(t,e){const i=new PIXI.TextStyle({fill:"#d8df75",fontSize:15,fontFamily:"Arial"}),n=new PIXI.Text(e,i);return n.anchor.set(.5),n.position.set(100,t.width/2),t.addChild(n),n}addPlusMinusButtons(t,e){const i=this;let n={};return n.plusButton=i.initIncrementButton({x:160,y:0,width:20,height:20,texture:new PIXI.Texture.from("assets/images/buttons/plus.png"),callback:i.onPlusButtonClick.bind(i,e),parentContainer:t}),n.minusButton=i.initIncrementButton({x:160,y:30,width:20,height:20,texture:new PIXI.Texture.from("assets/images/buttons/minus.png"),callback:i.onMinusButtonClick.bind(i,e),parentContainer:t}),n}initIncrementButton(t){let e=new PIXI.Sprite(t.texture);return e.position.set(t.x,t.y),e.interactive=!0,e.buttonMode=!0,e.width=t.width,e.height=t.height,e.on("pointerdown",t.callback),t.parentContainer.addChild(e),e}onPlusButtonClick(t){let e=JSON.parse(window.localStorage.getItem("itemsList"))[t].count+1;this.onCountChange(t,e),this.updateCountText(t,e)}onMinusButtonClick(t){const e=JSON.parse(window.localStorage.getItem("itemsList"))[t].count;let i;i=e-1<=0?0:e-1,this.onCountChange(t,i),this.updateCountText(t,i)}updateCountText(t,e){this.itemGroups[t].countText.text=e||JSON.parse(window.localStorage.getItem("itemsList"))[t].count}onItemClick(t,e){document.getElementById("inpt").click(),this.targetSprite=t,this.itemIndex=e}updateImageLocally(){var t=this,e=document.getElementById("inpt").files[0],i=new FileReader;i.onload=function(){t.targetSprite.setTexture(new PIXI.Texture.from(i.result)),t.onItemImgChange(t.itemIndex,new PIXI.Texture.from(i.result))},e&&i.readAsDataURL(e)}}({onItemImgChange:function(t,e){D.changeTexture(t,e)},onCountChange:function(t,e){o.setItemCount(t,e)}});T.addChild(M),I.stage.addChild(T),I.stage.addChild(w),I.stage.addChild(C),I.stage.addChild(O),document.documentElement.webkitRequestFullscreen(),window.addEventListener("resize",function(){D.refresh()}),window.storageManager=o}]);
//# sourceMappingURL=bundle.js.map