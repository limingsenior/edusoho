webpackJsonp(["app/js/courseset-manage/cover-crop/index"],[function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_esImageCrop=__webpack_require__("12695715cd021610570e"),_esImageCrop2=_interopRequireDefault(_esImageCrop),CoverCrop=function(){function CoverCrop(){_classCallCheck(this,CoverCrop),this.init()}return _createClass(CoverCrop,[{key:"init",value:function(){var imageCrop=new _esImageCrop2["default"]({element:"#courseset-picture-crop",cropedWidth:480,cropedHeight:270});imageCrop.afterCrop=function(response){var url=$("#upload-picture-btn").data("url");$.post(url,{images:JSON.stringify(response)},function(){document.location.href=$("#upload-picture-btn").data("gotoUrl")})},$("#upload-picture-btn").click(function(event){event.stopPropagation(),$(event.currentTarget).button("loading"),imageCrop.crop({imgs:{large:[480,270],middle:[304,171],small:[96,54]}})}),$(".go-back").click(function(){history.go(-1)})}}]),CoverCrop}();new CoverCrop}]);