webpackJsonp(["app/js/activity/ppt/index"],{f3c7e4fbf91afda92bf3:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_esEventEmitter=__webpack_require__("63fff8fb24f3bd1f61cd"),_esEventEmitter2=_interopRequireDefault(_esEventEmitter),_screenfull=__webpack_require__("0a1b429a831fa294e1c7"),_screenfull2=_interopRequireDefault(_screenfull),PPT=function(_Emitter){function PPT(_ref){var element=_ref.element,slides=_ref.slides,watermark=_ref.watermark;_classCallCheck(this,PPT);var _this=_possibleConstructorReturn(this,(PPT.__proto__||Object.getPrototypeOf(PPT)).call(this));return _this.element=$(element),_this.slides=slides||[],_this.watermark=watermark||"",_this._KEY_ACTION_MAP={37:_this._onPrev,39:_this._onNext,38:_this._onLast,40:_this._onFirst},_this.total=_this.slides.length,_this._page=0,_this.placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",_this._init(),_this}return _inherits(PPT,_Emitter),_createClass(PPT,[{key:"_render",value:function(){var html='\n      <div class="slide-player">\n        <div class="slide-player-body loading-background"></div>\n        <div class="slide-notice">\n          <div class="header">{{ \'已经到最后一张图片了哦\'|trans }}\n            <button type="button" class="close">×</button>\n          </div>\n        </div>\n      \n        <div class="slide-player-control clearfix">\n          <a href="javascript:" class="goto-first">\n            <span class="glyphicon glyphicon-step-backward"></span>\n          </a>\n          <a href="javascript:" class="goto-prev">\n            <span class="glyphicon glyphicon-chevron-left"></span>\n          </a>\n          <a href="javascript:" class="goto-next">\n            <span class="glyphicon glyphicon-chevron-right"></span>\n          </a>\n          <a href="javascript:" class="goto-last">\n            <span class="glyphicon glyphicon-step-forward"></span>\n          </a>\n          <a href="javascript:" class="fullscreen">\n            <span class="glyphicon glyphicon-fullscreen"></span>\n          </a>\n          <div class="goto-page-input">\n            <input type="text" class="goto-page form-control input-sm" value="1">&nbsp;/&nbsp;\n              <span class="total"></span>\n          </div>\n        </div>\n      </div>';this.element.html(html),this.element.find(".total").text(this.total);var slidesHTML=this.slides.reduce(function(html,src,index){return html+='<img data-src="'+src+'" class="slide" data-page="'+(index+1)+'">'},"");this.element.find(".slide-player-body").html(slidesHTML),this.watermark&&this.element.append('<div class="slide-player-watermark">'+this.watermark+"</div>")}},{key:"_init",value:function(){this._render(),this._bindEvents(),this._onFirst()}},{key:"_lazyLoad",value:function(page){for(var currentPage=page;currentPage<page+4&&!(currentPage>this.total);currentPage++){var $slide=this._getSlide(currentPage);$slide.attr("src")||$slide.attr("src",$slide.data("src"))}}},{key:"_getSlide",value:function(page){return this.element.find(".slide-player-body .slide").eq(page-1)}},{key:"_bindEvents",value:function(){var _this2=this;$(document).on("keydown",function(event){_this2._KEY_ACTION_MAP[event.keyCode]&&_this2._KEY_ACTION_MAP[event.keyCode].call(_this2)}),this.element.on("click",".goto-next",function(event){return _this2._onNext(event)}),this.element.on("click",".goto-prev",function(event){return _this2._onPrev(event)}),this.element.on("click",".goto-first",function(event){return _this2._onFirst(event)}),this.element.on("click",".goto-last",function(event){return _this2._onLast(event)}),this.element.on("click",".fullscreen",function(event){return _this2._onFullScreen(event)}),this.element.on("change",".goto-page",function(event){return _this2._onChangePage(event)});var self=this;this.on("change",function(_ref2){var current=_ref2.current;_ref2.before;current==self.total&&self.emit("end",{page:_this2.total})})}},{key:"_onNext",value:function(){return this.page===this.total?void this.emit("end",{page:this.total}):void this.page++}},{key:"_onPrev",value:function(){1!=this.page&&this.page--}},{key:"_onFirst",value:function(){this.page=1}},{key:"_onLast",value:function(){this.page=this.total}},{key:"_onFullScreen",value:function(){_screenfull2["default"].enabled&&(_screenfull2["default"].isFullscreen?_screenfull2["default"].toggle():_screenfull2["default"].request())}},{key:"_onChangePage",value:function(e){this.page=$(e.target).val()}},{key:"page",get:function(){return this._page},set:function(newPage){var _this3=this,beforePage=this.page,currentPage=newPage;currentPage>this.total&&(this.element.find(".goto-page").val(currentPage),this._page=currentPage),currentPage<1&&(this.element.find(".goto-page").val(beforePage),this._page=beforePage),beforePage&&this.element.find(".slide-player-body .slide").eq(beforePage-1).removeClass("active");var $currentSlide=this._getSlide(currentPage);$currentSlide.attr("src")?$currentSlide.addClass("active"):($currentSlide.load(function(){_this3._page==$currentSlide.data("page")&&$currentSlide.addClass("active")}),$currentSlide.attr("src",$currentSlide.data("src"))),this._lazyLoad(currentPage),this.element.find(".goto-page").val(currentPage),this._page=currentPage,this.emit("change",{current:currentPage,before:beforePage})}}]),PPT}(_esEventEmitter2["default"]);exports["default"]=PPT},0:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _pptPlayer=__webpack_require__("f3c7e4fbf91afda92bf3"),_pptPlayer2=_interopRequireDefault(_pptPlayer),_activityEmitter=__webpack_require__("da32dea28c2b82c7aab1"),_activityEmitter2=_interopRequireDefault(_activityEmitter),emitter=new _activityEmitter2["default"],$content=$("#activity-ppt-content"),watermarkUrl=$content.data("watermarkUrl"),createPPT=function(watermark){var ppt=new _pptPlayer2["default"]({element:"#activity-ppt-content",slides:$content.data("slides").split(","),watermark:watermark});return"end"===$content.data("finishType")&&ppt.once("end",function(data){emitter.emit("finish",data)}),ppt};if(void 0===watermarkUrl){createPPT()}else $.get(watermarkUrl).then(function(watermark){createPPT(watermark)}).fail(function(error){console.error(error)})},"0a1b429a831fa294e1c7":function(module,exports){!function(){"use strict";var isCommonjs="undefined"!=typeof module&&module.exports,keyboardAllowed="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,fn=function(){for(var val,valLength,fnMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,l=fnMap.length,ret={};i<l;i++)if(val=fnMap[i],val&&val[1]in document){for(i=0,valLength=val.length;i<valLength;i++)ret[fnMap[0][i]]=val[i];return ret}return!1}(),screenfull={request:function(elem){var request=fn.requestFullscreen;elem=elem||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?elem[request]():elem[request](keyboardAllowed&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[fn.exitFullscreen]()},toggle:function(elem){this.isFullscreen?this.exit():this.request(elem)},raw:fn};return fn?(Object.defineProperties(screenfull,{isFullscreen:{get:function(){return Boolean(document[fn.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[fn.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(document[fn.fullscreenEnabled])}}}),void(isCommonjs?module.exports=screenfull:window.screenfull=screenfull)):void(isCommonjs?module.exports=!1:window.screenfull=!1)}()}});