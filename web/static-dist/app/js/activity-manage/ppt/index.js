webpackJsonp(["app/js/activity-manage/ppt/index"],[function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_fileChoose=__webpack_require__("eca7a2561fa47d3f75f6"),_fileChoose2=_interopRequireDefault(_fileChoose),_chooserUi=__webpack_require__("f324dbdea53170d5000f"),PPT=function(){function PPT(){_classCallCheck(this,PPT),this.$mediaId=$('[name="mediaId"]'),this.validator3=null,this.init()}return _createClass(PPT,[{key:"init",value:function(){(0,_chooserUi.showChooserType)(this.$mediaId),this.initStep2Form(),this.initSelect(),this.initFileChooser()}},{key:"initStep2Form",value:function(){var $step2_form=$("#step2-form"),validator=$step2_form.data("validator");validator=$step2_form.validate({rules:{title:{required:!0,maxlength:50,trim:!0},mediaId:"required"},messages:{mediaId:{required:"请上传或选择%display%"}}})}},{key:"initStep3Form",value:function(){var $step3_form=$("#step3-form");this.validator3=$step3_form.validate({rules:{finishDetail:{required:function(){return"time"===$("#condition-select").children("option:selected").val()},positive_integer:!0,max:300}},messages:{finishDetail:{required:"请输入至少观看多少分钟"}}}),$step3_form.data("validator",this.validator3)}},{key:"initFileChooser",value:function(){var _this=this,fileChooser=new _fileChoose2["default"];fileChooser.on("select",function(file){(0,_chooserUi.chooserUiClose)(),_this.$mediaId.val(file.id)})}},{key:"initSelect",value:function(){var _this2=this,$select=$("#condition-select");"time"===$select.children("option:selected").val()&&this.initStep3Form(),$select.on("change",function(event){var conditionsType=$(event.currentTarget).children("option:selected").val(),$conditionsDetail=$("#condition-group");return"time"!==conditionsType?void $conditionsDetail.addClass("hidden"):($conditionsDetail.removeClass("hidden"),void(_this2.validator3||_this2.initStep3Form()))})}}]),PPT}();new PPT}]);