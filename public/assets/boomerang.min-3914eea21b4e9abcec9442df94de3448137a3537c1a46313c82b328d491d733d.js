function notify(e,t,a){$.growl({icon:"",title:e,message:t,url:""},{element:"body",type:a,allow_dismiss:!0,placement:{from:"bottom",align:"left"},offset:{x:20,y:85},spacing:10,z_index:1031,delay:2500,timer:3e3,url_target:"_blank",mouse_over:!1,animate:{enter:"",exit:""},icon_type:"class",template:'<div data-growl="container" class="alert alert-dismissible" role="alert"><span data-growl="icon"></span><h4 class="heading-6 alert-heading strong-600" data-growl="title">Well done!</h4><p data-growl="message"></p><button type="button" class="close" data-growl="dismiss"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button></div>'})}$(window).on("load resize",function(){$(".background-image-holder").length&&$(".background-image-holder").each(function(){var e,t=$(this);if("fullscreen"==t.data("holder-type")){if(t.attr("data-holder-offset")){if(t.data("holder-offset")){var a=$("body").find(t.data("holder-offset")).height();e=$(window).height()-a}}else e=$(window).height();991<$(window).width()?$(".background-image-holder").css({height:e+"px"}):$(".background-image-holder").css({height:"auto"})}t.imagesLoaded().done(function(){t.find(".animated").each(function(){var e=$(this);if(!e.hasClass("animation-ended")){var t=e.data("animation-in"),a=(e.data("animation-out"),e.data("animation-delay"));setTimeout(function(){e.addClass("animation-ended "+t,100).on("webkitAnimationEnd animationend",function(){e.removeClass(t)})},a)}})})}),0<$(".same-height").length&&$(".same-height").each(function(){var t=$(this),a=t.data("same-height");setTimeout(function(){var e=$("body").find(a).height();991<$(window).width()?t.css({height:e+"px"}):t.css({height:"auto"})},300)}),0<$(".swiper-js-container").length&&$(".swiper-js-container").each(function(e,t){var a=$(t),n=(h=a.find(".swiper-container")).data("swiper-effect"),i=h.data("swiper-xs-items"),o=h.data("swiper-sm-items"),s=h.data("swiper-md-items"),d=h.data("swiper-items"),r=h.data("swiper-xs-space-between"),l=h.data("swiper-sm-space-between"),c=h.data("swiper-md-space-between"),p=h.data("swiper-space-between");i=i||d,o=o||d,s=s||d,d=d||1,r=r||0,l=l||0,c=c||0,p=p||0;var u="webkitAnimationEnd animationend",h=new Swiper(h,{pagination:a.find(".swiper-pagination"),nextButton:a.find(".swiper-button-next"),prevButton:a.find(".swiper-button-prev"),slidesPerView:d,spaceBetween:p,autoplay:h.data("swiper-autoplay"),autoHeight:h.data("swiper-autoheight"),effect:n,speed:800,paginationClickable:!0,direction:"horizontal",preventClicks:!0,preventClicksPropagation:!0,observer:!0,observeParents:!0,breakpoints:{460:{slidesPerView:i,spaceBetweenSlides:r},767:{slidesPerView:o,spaceBetweenSlides:l},991:{slidesPerView:s,spaceBetweenSlides:c},1100:{slidesPerView:d,spaceBetweenSlides:p}},onInit:function(e){$(e.slides[e.activeIndex]).find(".animated").each(function(){var e=$(this);if(!e.hasClass("animation-ended")){var t=e.data("animation-in"),a=(e.data("animation-out"),e.data("animation-delay"));setTimeout(function(){e.addClass("animation-ended "+t,100).on(u,function(){e.removeClass(t)})},a)}})},onSlideChangeStart:function(e){$(e.slides[e.activeIndex]).find(".animated").each(function(){var e=$(this);if(!e.hasClass("animation-ended")){var t=e.data("animation-in"),a=(e.data("animation-out"),e.data("animation-delay"));setTimeout(function(){e.addClass("animation-ended "+t,100).on(u,function(){e.removeClass(t)})},a)}})},onSlideChangeEnd:function(e){$(e.slides[e.previousIndex]).find(".animated").each(function(){var e=$(this),t=e.data("animation-onetime");t&&0!=t||e.removeClass("animation-ended")})}})}),0<$(window).width()&&0<$("[data-toggle='headroom']").length&&$("[data-toggle='headroom']").headroom({offset:0,tolerance:{up:40,down:5},classes:{initial:"headroom",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"fixed-top",bottom:"headroom--bottom"},onPin:function(){if(0<$(window).offset.top){var e=$("[data-toggle='headroom']").height();$("body").css({"padding-top":e+"px"})}else $("body").css({"padding-top":0})},onUnpin:function(){var e=$("[data-toggle='headroom']").height();$("body").css({"padding-top":e+"px"})},onTop:function(){$("body").css({"padding-top":0})},onBottom:function(){}})}),$(document).ready(function(){if($('.dropdown-menu .dropdown-submenu [data-toggle="dropdown"]').on("click",function(){$(this).next().hasClass("show")||$(this).parents(".dropdown-menu").first().find(".show").removeClass("show");var e=$(this).next(".dropdown-menu");return e.toggleClass("show"),e.parent().toggleClass("show"),$(this).parents(".nav-item.dropdown.show").on("hidden.bs.dropdown",function(){$(".dropdown-submenu .show").removeClass("show")}),!1}),$(".navbar .dropdown-menu").on("click",function(e){e.stopPropagation()}),$(".navbar-onepage .nav-link").on("click",function(e){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()}),$(".hamburger-js")[0]&&$(".hamburger-js").each(function(){var e=$(this);e.on("click",function(){e.toggleClass("is-active")})}),$("[data-footer-reveal]").length&&$("[data-footer-reveal]").footerReveal({shadow:!1,zIndex:-101}),$.adaptiveBackground.run({parent:".adaptive-background",normalizeTextColor:!0,exclude:["rgb(0,0,0)","rgba(255,255,255)"]}),$(".btn-number").click(function(e){e.preventDefault(),fieldName=$(this).attr("data-field"),type=$(this).attr("data-type");var t=$("input[name='"+fieldName+"']"),a=parseInt(t.val());isNaN(a)?t.val(0):"minus"==type?(a>t.attr("min")&&t.val(a-1).change(),parseInt(t.val())==t.attr("min")&&$(this).attr("disabled",!0)):"plus"==type&&(a<t.attr("max")&&t.val(a+1).change(),parseInt(t.val())==t.attr("max")&&$(this).attr("disabled",!0))}),$(".input-number").focusin(function(){$(this).data("oldValue",$(this).val())}),$(".input-number").change(function(){minValue=parseInt($(this).attr("min")),maxValue=parseInt($(this).attr("max")),valueCurrent=parseInt($(this).val()),name=$(this).attr("name"),valueCurrent>=minValue?$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr("disabled"):(alert("Sorry, the minimum value was reached"),$(this).val($(this).data("oldValue"))),valueCurrent<=maxValue?$(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr("disabled"):(alert("Sorry, the maximum value was reached"),$(this).val($(this).data("oldValue")))}),$(".input-number").keydown(function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,190])||65==e.keyCode&&!0===e.ctrlKey||35<=e.keyCode&&e.keyCode<=39||(e.shiftKey||e.keyCode<48||57<e.keyCode)&&(e.keyCode<96||105<e.keyCode)&&e.preventDefault()}),$(".textarea-autogrow")[0]&&autosize($(".textarea-autogrow")),$(".has-floating-label .form-control").on("focus blur",function(e){$(this).parents(".form-group").toggleClass("focused","focus"===e.type||0<this.value.length)}).trigger("blur"),$(".selectpicker").each(function(){$(".selectpicker").select2({})}),$(".datepicker")[0]&&$(".datepicker").each(function(){var e=$(this);e.flatpickr({noCalendar:!!e.data("datepicker-no-calendar")&&e.data("datepicker-no-calendar"),enableTime:!!e.data("datepicker-enable-time")&&e.data("datepicker-enable-time"),inline:!!e.data("datepicker-inline")&&e.data("datepicker-inline"),allowInput:!e.data("datepicker-allow-input")||e.data("datepicker-allow-input"),mode:e.data("datepicker-mode")?e.data("datepicker-mode"):"single","static":!0,inline:!!e.data("datepicker-inline")&&e.data("datepicker-inline"),nextArrow:'<i class="ion-ios-arrow-right" />',prevArrow:'<i class="ion-ios-arrow-left" />'})}),$(".custom-input-file").each(function(){var e=$(this),a=e.next("label"),n=a.html();e.on("change",function(e){var t="";this.files&&1<this.files.length?t=(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value&&(t=e.target.value.split("\\").pop()),t?a.find("span").html(t):a.html(n)}),e.on("focus",function(){e.addClass("has-focus")}).on("blur",function(){e.removeClass("has-focus")})}),$(".input-slider-container")[0]&&$(".input-slider-container").each(function(){var e=$(this).find(".input-slider"),t=e.attr("id"),a=e.data("range-value-min"),n=e.data("range-value-max"),i=$(this).find(".range-slider-value"),o=i.attr("id"),s=i.data("range-value-low"),d=document.getElementById(t),r=document.getElementById(o);noUiSlider.create(d,{start:[parseInt(s)],range:{min:[parseInt(a)],max:[parseInt(n)]}}),d.noUiSlider.on("update",function(e,t){r.textContent=e[t]})}),$("#input-slider-range")[0]){var e=document.getElementById("input-slider-range"),t=document.getElementById("input-slider-range-value-low"),a=document.getElementById("input-slider-range-value-high"),n=[t,a];noUiSlider.create(e,{start:[parseInt(t.getAttribute("data-range-value-low")),parseInt(a.getAttribute("data-range-value-high"))],connect:!0,range:{min:parseInt(e.getAttribute("data-range-value-min")),max:parseInt(e.getAttribute("data-range-value-max"))}}),e.noUiSlider.on("update",function(e,t){n[t].textContent=e[t]})}$(".card-flip")[0]&&$(".card-flip-container").imagesLoaded(function(){$(".card-flip").each(function(){$this=$(this),$this.flip({front:".card-front",back:".card-back",forceHeight:!0,trigger:$this.data("flip-trigger")?$this.data("flip-trigger"):"hover",reverse:!!$this.data("flip-reverse")&&$this.data("flip-reverse")})})}),$(".carousel").carousel({interval:5e3,pause:"hover"}),$(".scroll-me, [data-scroll-to]").on("click",function(e){var t=$(this).data("scroll-to"),a=$(this).data("scroll-to-offset")?$(this).data("scroll-to-offset"):0;$("html, body").stop(!0,!0).animate({scrollTop:$(t).offset().top-a},600),e.preventDefault()});var i=$(".back-to-top");$(window).scroll(function(){300<$(this).scrollTop()?i.addClass("back-to-top-is-visible"):i.removeClass("back-to-top-is-visible cd-fade-out"),1200<$(this).scrollTop()&&i.addClass("back-to-top-fade-out")}),i.on("click",function(e){e.preventDefault(),$("body, html").animate({scrollTop:0},700)}),0<$('[data-toggle="light-gallery"]').length&&$('[data-toggle="light-gallery"]').lightGallery({selector:"this"}),0<$(".light-gallery").length&&$(".light-gallery").each(function(){$(this).lightGallery({selector:".item",thumbnail:!0})}),$('[data-stick-in-parent="true"]').stick_in_parent(),$(".masonry-container").each(function(e,t){var a=$(t),n=a.find(".masonry").imagesLoaded(function(){var e=a.find(".masonry-filter-menu").find(".default"),t=e.data("filter");null!=t&&""!=t&&("*"!=t&&(t="."+t),e.addClass("active")),n.isotope({itemSelector:".masonry-item",filter:t})});a.find(".masonry-filter-menu").on("click","a",function(){var e=$(this).attr("data-filter");e="*"==e?"":"."+e,n.isotope({filter:e})})}),$(".masonry-filter-menu").each(function(e,t){var a=$(t);a.on("click","a",function(){a.find(".active").removeClass("active"),$(this).addClass("active")})}),0<$(".product-swiper-container").length&&$(".product-swiper-container").each(function(e){$(this).addClass("s-"+e),$(this).find(".swiper-pagination").addClass("sp-"+e),$(".s-"+e).swiper({speed:400,loop:!0,grabCursor:!0,pagination:".sp-"+e,paginationClickable:!0,centeredSlides:!1,preloadImages:!1,lazyLoading:!0,observer:!0,observerParents:!0})}),0<$(".swiper-container-centered").length&&$(".swiper-container-centered").each(function(){new Swiper(".swiper-container-centered",{pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,spaceBetween:30,initialSlide:1,breakpoints:{768:{slidesPerView:1,spaceBetweenSlides:0},991:{slidesPerView:2,spaceBetweenSlides:0}}})}),0<$(".swiper-container-coverflow").length&&$(".swiper-container-coverflow").each(function(){new Swiper($(this),{pagination:$(this).find(".swiper-pagination"),effect:"coverflow",grabCursor:!0,centeredSlides:!0,initialSlide:$(this).data("swiper-initial-slide"),slidesPerView:$(this).data("swiper-items"),coverflow:{rotate:0,stretch:0,depth:300,modifier:1,slideShadows:!0},breakpoints:{576:{slidesPerView:1,spaceBetweenSlides:0,initialSlide:0},768:{slidesPerView:2,spaceBetweenSlides:0},992:{slidesPerView:3,spaceBetweenSlides:0,initialSlide:2}}})}),0<$(".paraxify").length&&paraxify(".paraxify",{speed:1,boost:1}),$(".milestone-count").viewportChecker({callbackFunction:function(){setTimeout(function(){$(".milestone-count").countTo({formatter:function(e,t){return e.toFixed(t.decimals)},onUpdate:function(){console.debug(this)},onComplete:function(){console.debug(this)}})},500)}}),0<$(".type-this").length&&$(".type-this").each(function(){var e=$(this).attr("id"),t=$(this).data("type-this");t=t.split(","),new Typed("#"+e,{strings:t,typeSpeed:100,backSpeed:70,loop:!0})}),0<$(".countdown").length&&$(".countdown").each(function(){var e=$(this),t=e.data("countdown-date");e.countdown(t).on("update.countdown",function(e){$(this).html(e.strftime('<div class="countdown-item"><span class="countdown-digit">%-D</span><span class="countdown-label countdown-days">day%!d</span></div><div class="countdown-item"><span class="countdown-digit">%H</span><span class="countdown-separator">:</span><span class="countdown-label">hr</span></div><div class="countdown-item"><span class="countdown-digit">%M</span><span class="countdown-separator">:</span><span class="countdown-label">min</span></div><div class="countdown-item"><span class="countdown-digit">%S</span><span class="countdown-label">sec</span></div>'))})}),$("#btnToggleOptionalFilters").click(function(){return $(this).data("animate-in"),$(this).data("animate-out"),$(this).hasClass("opened")?($(".hidden-form-filters").addClass("hide"),$(this).removeClass("opened")):($(this).addClass("opened"),$(".hidden-form-filters").removeClass("hide")),!1});var o=$(".rating span.star");o.hover(function(){$(this).addClass("over"),$(this).prevAll().addClass("over")},function(){$(this).removeClass("over"),$(this).prevAll().removeClass("over")}),o.click(function(){$(this).parent().children(".star").removeClass("voted"),$(this).prevAll().addClass("voted"),$(this).addClass("voted")}),$('[data-toggle="tooltip"]').tooltip({placement:$(this).data("placement"),html:!0}),$('[data-toggle="popover"]').popover({placement:$(this).data("placement"),html:!0}),$('[data-toggle="global-search"]').click(function(){var e=$(".global-search"),t=0;e.hasClass("in")?(e.addClass("fadeOut"),e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass("animated fadeOut"),e.removeClass("in"),setTimeout(function(){$(".navbar").removeClass("global-search-active hide")},t)})):(e.hasClass("global-search-fullscreen")||e.hasClass("global-search-overlay")?e.hasClass("global-search-overlay")&&$(".navbar").addClass("hide"):($(".navbar").addClass("global-search-active"),t=200),setTimeout(function(){e.addClass("in")},t),setTimeout(function(){e.addClass("animated fadeIn"),e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass("fadeIn")})},2.5*t))}),0<$(".morphext").length&&$(".morphext").Morphext({animation:"fadeIn",separator:";",speed:"3000",complete:function(){}}),0<$(".animate-on-scroll").length&&(wow=new WOW({boxClass:"animate-on-scroll",animateClass:"animated",offset:100,mobile:!1,live:!0}),wow.init()),$(".accordion--style-1 .collapse, .accordion--style-2 .collapse").on("show.bs.collapse",function(){$(this).parent().find(".fa-chevron-right").removeClass("fa-chevron-right").addClass("fa-chevron-down")}).on("hide.bs.collapse",function(){$(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-right")}),$(".spinner .btn:first-of-type").on("click",function(){$(".spinner input").val(parseInt($(".spinner input").val(),10)+1)}),$(".spinner .btn:last-of-type").on("click",function(){$(".spinner input").val(parseInt($(".spinner input").val(),10)-1)}),$(".product").on("mouseenter",function(){if(0<$(this).find(".product-actions--a").length&&!$(this).find(".product-actions--a").hasClass("in")){var e=$(this).find(".product-actions--a"),t=e.data("animation-in");e.addClass("in animated "+t),e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass("animated "+t)})}}),$(".product").on("mouseleave",function(){if(0<$(this).find(".product-actions--a").length&&$(this).find(".product-actions--a").hasClass("in")){var e=$(this).find(".product-actions--a"),t=e.data("animation-out");e.addClass("animated "+t),e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass("in animated "+t)})}}),$("#btn_advanced_search_open").click(function(){return $(".advanced-search-hidden").hasClass("in")?$(".advanced-search-hidden").removeClass("in"):$(".advanced-search-hidden").addClass("in"),!1}),0<$(".instafeed").length&&$(".instafeed").each(function(){var e=$(this),t=e.attr("id"),a=e.data("user-id"),n=e.data("limit"),i=e.data("col"),o=e.data("classes")?e.data("classes"):"",s=e.data("lightbox")?" data-fancybox ":"";new Instafeed({target:t,clientId:"c81e735d834e4960ab5bfdc89fff7b7a",accessToken:"4168279954.c81e735.bd435dd21a344208ad569b028b372088",get:"user",userId:a,limit:n,resolution:"thumbnail",template:'<div class="col-sm-'+i+' col-6"><a href="{{link}}"'+s+'><img src="{{image}}" class="img-fluid '+o+'" /></a></div>'}).run()}),$('[data-toggle="validation"]')[0]&&$('[data-toggle="validation"]').each(function(){var e=$(this),t=document.getElementById(e.attr("id"));t.addEventListener("submit",function(e){!1===t.checkValidity()&&(e.preventDefault(),e.stopPropagation()),t.classList.add("was-validated")},!1)}),0<$("#form_contact").length&&$("#form_contact").on("submit",function(e){var a=$(this),n=a.find('button[type="submit"]').text();if(!e.isDefaultPrevented()){var t=a.serialize(),i=$.ajax({type:"POST",url:a.data("action"),data:t,dataType:"json"});return a.find('button[type="submit"]').text("Sending..."),i.done(function(e){var t=e.status;notify(e.notify_title,e.notify_message,e.notify_type),"success"==t&&(a.find(".btn-reset").trigger("click"),a.find(".glyphicon-ok").removeClass("glyphicon-ok"),grecaptcha.reset()),a.find('button[type="submit"]').text("Message sent!"),setTimeout(function(){a.find('button[type="submit"]').text(n)},3e3)}),i.fail(function(e){e.status,notify(e.notify_title,e.responseText,"danger"),a.find('button[type="submit"]').text("Error!"),setTimeout(function(){a.find('button[type="submit"]').text(n)},3e3)}),!1}}),$(".gradientify").length&&$(".gradientify").each(function(){$this.gradientify({gradients:[{start:[17,132,254],stop:[154,70,248]},{start:[154,70,248],stop:[17,132,254]}],angle:"0deg",fps:60,transition_time:10})}),$(".btn-clipboard")[0]&&new Clipboard(".btn-clipboard").on("success",function(e){e.trigger.innerHTML='<span class="text-sm">Copied</span>',e.clearSelection(),setTimeout(function(){e.trigger.innerHTML='<i class="fa fa-files-o"></i>'},3e3)})});