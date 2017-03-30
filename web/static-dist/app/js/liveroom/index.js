webpackJsonp(["app/js/liveroom/index"],[function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Live=function(){function Live(){_classCallCheck(this,Live),this.init()}return _createClass(Live,[{key:"init",value:function(){var self=this;this.isLiveRoomOpened=!1;var intervalId=0,tryCount=1;intervalId=setInterval(function(){if(tryCount>10){clearInterval(intervalId);var html=Translator.trans("进入直播教室错误，请联系管理员，")+"<a href='javascript:document.location.reload()'>"+Translator.trans("重试")+"</a>"+Translator.trans("或")+"<a href='javascript:window.close();'>"+Translator.trans("关闭")+"</a>";return void $("#entry").html(html)}$.ajax({url:$("#entry").data("url"),success:function(data){if(data.error){clearInterval(intervalId);var _html=data.error+Translator.trans("，")+"<a href='javascript:document.location.reload()'>"+Translator.trans("重试")+"</a>或<a href='javascript:window.close();'>"+Translator.trans("关闭")+"</a>";return void $("#entry").html(_html)}if(data.roomUrl){clearInterval(intervalId),self.isLiveRoomOpened=!0;var _html2='<iframe name="classroom" src="'+data.roomUrl+'" style="position:absolute; left:0; top:0; height:100%; width:100%; border:0px;" scrolling="no"></iframe>';$("body").html(_html2)}tryCount++},error:function(){var html="进入直播教室错误，请联系管理员，<a href='javascript:document.location.reload()'>重试</a>或<a href='javascript:window.close();'>关闭</a>";$("#entry").html(html)}})},3e3),this.triggerLiveEvent()}},{key:"triggerLiveEvent",value:function(){var self=this,eventName=null,eventTrigger=setInterval(function(){self.isLiveRoomOpened&&0!=$('meta[name="trigger_url"]').length&&(eventName=eventName?"doing":"start",$.ajax({url:$('meta[name="trigger_url"]').attr("content"),type:"GET",data:{eventName:eventName},success:function(response){response.live_end&&clearInterval(eventTrigger)}}))},6e4)}}]),Live}();new Live}]);