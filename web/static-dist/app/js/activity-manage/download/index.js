webpackJsonp(["app/js/activity-manage/download/index"],[function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _inItStep2form(){var $form=$("#step2-form"),validator=$form.validate({rules:{title:{required:!0,maxlength:50,trim:!0},link:"url",materials:"required"},messages:{link:"链接地址不正确",materials:"请上传或选择%display%"}});$form.data("validator",validator)}function addFile(addToList){if($(".js-success-redmine").hide(),isEmpty($("#media").val())&&$("#step2-form").data("validator")&&$("#step2-form").data("validator").valid()&&$("#link").val().length>0){addToList||$("#verifyLink").val($("#link").val());var data={source:"link",id:$("#verifyLink").val(),name:$("#verifyLink").val(),link:$("#verifyLink").val(),summary:$("#file-summary").val(),size:0};$(".js-current-file").text($("#verifyLink").val()),$("#media").val(JSON.stringify(data))}var media=isEmpty($("#media").val())?{}:JSON.parse($("#media").val()),items=isEmpty($("#materials").val())?{}:JSON.parse($("#materials").val());if(!isEmpty(items)&&items[media.id])return $(".js-danger-redmine").text(Translator.trans("该文件已添加，请重新选择")).show(),setTimeout(function(){$(".js-danger-redmine").slideUp()},3e3),$(".js-current-file").text(""),$("#media").val(null),void(media=null);if(addToList){if(addToList&&isEmpty(media))return $(".js-danger-redmine").text(Translator.trans("请上传或选择要添加的资料")).show(),$(".js-current-file").text(""),void setTimeout(function(){$(".js-danger-redmine").slideUp()},3e3);$(".js-current-file").text(""),media.summary=$("#file-summary").val(),items[media.id]=media,$("#materials").val(JSON.stringify(items)),$("#media").val(null),$("#link").val(null),$("#file-summary").val(null);var item_tpl="";item_tpl=media.link?'\n    <li class="download-item " data-id="'+media.link+'">\n        <a class="gray-primary" href="'+media.link+'" target="_blank">'+media.name+'</a>\n        <a class="gray-primary phm btn-delete  js-btn-delete"  href="javascript:;"  data-url="" data-toggle="tooltip" data-placement="top" title="{{ \'删除\'|trans }}"><i class="es-icon es-icon-delete"></i></a>\n        <span class="glyphicon glyphicon-new-window text-muted text-sm" title="'+Translator.trans("删除")+'"></span>\n    </li>\n  ':'\n    <li class="download-item " data-id="'+media.id+'">\n      <a class="gray-primary" href="/materiallib/'+media.id+'/download">'+media.name+'</a>\n      <a class="gray-primary phm  btn-delete js-btn-delete" href="javascript:;"  data-url="" data-toggle="tooltip" data-placement="top" title="'+Translator.trans("删除")+'"><i class="es-icon es-icon-delete"></i></a>\n    </li>\n  ',$("#material-list").append(item_tpl),$('[data-toggle="tooltip"]').tooltip(),$(".file-browser-item").removeClass("active"),$(".js-danger-redmine").hide(),$(".js-success-redmine").text(Translator.trans("添加成功，可继续选择资料添加或点击下一步！")).show(),setTimeout(function(){$(".js-success-redmine").slideUp()},3e3),$(".jq-validate-error:visible").length>0&&$("#step2-form").data("validator").form()}}function isEmpty(obj){return null==obj||""==obj||void 0==obj||0==Object.keys(obj).length}var _fileChoose=__webpack_require__("eca7a2561fa47d3f75f6"),_fileChoose2=_interopRequireDefault(_fileChoose),_notify=__webpack_require__("b334fd7e4c5a19234db2"),_chooserUi=(_interopRequireDefault(_notify),__webpack_require__("f324dbdea53170d5000f"));jQuery.validator.addMethod("url",function(value,element){return this.optional(element)||/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(value)},"URL的格式不正确"),_inItStep2form(),$("#step2-form").on("click",".js-btn-delete",function(){var $parent=$(this).parents("li"),mediaId=$parent.data("id"),items=isEmpty($("#materials").val())?{}:JSON.parse($("#materials").val());items&&items[mediaId]&&(delete items[mediaId],$("#materials").val(JSON.stringify(items))),$parent.siblings("li").length<=0&&$("#materials").val(null),$parent.remove()}),$("#step2-form").on("click",".js-video-import",function(){addFile(!1)}),$("#step2-form").on("click",".js-add-file-list",function(){addFile(!0)}),_inItStep2form();var fileSelect=function(file){$("input[name=media]").val(JSON.stringify(file)),(0,_chooserUi.chooserUiOpen)(),addFile(!1),$(".js-current-file").text(file.name)},fileChooser=new _fileChoose2["default"];fileChooser.on("select",fileSelect)}]);