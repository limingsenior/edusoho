webpackJsonp(["app/js/activity-manage/doc/index"],[function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_fileChoose=__webpack_require__("eca7a2561fa47d3f75f6"),_fileChoose2=_interopRequireDefault(_fileChoose),_chooserUi=__webpack_require__("f324dbdea53170d5000f"),Document=function(){function Document(){_classCallCheck(this,Document),this.$mediaId=$('[name="mediaId"]'),this.init()}return _createClass(Document,[{key:"init",value:function(){(0,_chooserUi.showChooserType)(this.$mediaId),this.initStep2Form(),this.initStep3Form(),this.initFileChooser()}},{key:"initStep2Form",value:function(){var $step2_form=$("#step2-form"),validator=$step2_form.data("validator");validator=$step2_form.validate({rules:{title:{required:!0,maxlength:50,trim:!0},mediaId:"required"},messages:{mediaId:{required:"请上传或选择%display%"}}})}},{key:"initStep3Form",value:function(){var $step3_form=$("#step3-form"),validator=$step3_form.validate({onkeyup:!1,rules:{title:{required:!0,maxlength:50},finishDetail:{required:!0,digits:!0}},messages:{finishDetail:{required:"请输入完成条件",digits:"完成条件必须为数字"}}});$step3_form.data("validator",validator)}},{key:"initFileChooser",value:function(){var _this=this,fileChooser=new _fileChoose2["default"];fileChooser.on("select",function(file){(0,_chooserUi.chooserUiClose)(),_this.$mediaId.val(file.id)}),$("#condition-select").on("change",function(event){var conditionsType=$(event.currentTarget).children("option:selected").val(),$conditionsDetail=$("#condition-group");"time"!==conditionsType?$conditionsDetail.addClass("hidden"):onConditionTimeType()})}}]),Document}();new Document}]);