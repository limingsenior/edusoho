webpackJsonp(["app/js/index/index"],[function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function showFollowBtn($btn){$btn.hide(),$btn.siblings(".follow-btn").show(),$actualCard=$("#user-card-"+$btn.closest(".js-card-content").data("userId")),$actualCard.find(".unfollow-btn").hide(),$actualCard.find(".follow-btn").show()}function showUnfollowBtn($btn){$btn.hide(),$btn.siblings(".unfollow-btn").show(),$actualCard=$("#user-card-"+$btn.closest(".js-card-content").data("userId")),$actualCard.find(".follow-btn").hide(),$actualCard.find(".unfollow-btn").show()}var _swiper=__webpack_require__("e0c4a4b637f5de9d8210"),_swiper2=_interopRequireDefault(_swiper);if(echo.init(),$(".es-poster .swiper-slide").length>1){new _swiper2["default"](".es-poster.swiper-container",{pagination:".swiper-pager",paginationClickable:!0,autoplay:5e3,autoplayDisableOnInteraction:!1,loop:!0,calculateHeight:!0,roundLengths:!0,onInit:function(swiper){$(".swiper-slide").removeClass("swiper-hidden")}})}$("body").on("click",".js-course-filter",function(){var $btn=$(this),courseType=$btn.data("type"),text=$(".course-filter .visible-xs .active a").text();$.get($btn.data("url"),function(html){$("#"+courseType+"-list-section").after(html).remove();var parent=$btn.parent();parent.hasClass("course-sort")||(text=$btn.find("a").text()),$(".course-filter .visible-xs .btn").html(text+' <span class="caret"></span>'),echo.init()})}),$(".recommend-teacher").on("click",".teacher-item .follow-btn",function(){var $btn=$(this),loggedin=$btn.data("loggedin");"1"==loggedin&&showUnfollowBtn($btn),$.post($btn.data("url"))}).on("click",".teacher-item .unfollow-btn",function(){var $btn=$(this);showFollowBtn($btn),$.post($btn.data("url"))})}]);