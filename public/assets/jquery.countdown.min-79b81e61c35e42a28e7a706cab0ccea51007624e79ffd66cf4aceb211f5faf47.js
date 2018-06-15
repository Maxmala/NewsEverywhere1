!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(i){"use strict";function e(t){if(t instanceof Date)return t;if(String(t).match(n))return String(t).match(/^[0-9]*$/)&&(t=Number(t)),String(t).match(/\-/)&&(t=String(t).replace(/\-/g,"/")),new Date(t);throw new Error("Couldn't cast `"+t+"` to a date object.")}function c(t){var e=t.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(e)}function s(r){return function(t){var e=t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(e)for(var s=0,n=e.length;s<n;++s){var i=e[s].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),o=c(i[0]),a=i[1]||"",h=i[3]||"",l=null;i=i[2],u.hasOwnProperty(i)&&(l=u[i],l=Number(r[l])),null!==l&&("!"===a&&(l=f(h,l)),""===a&&l<10&&(l="0"+l.toString()),t=t.replace(o,l.toString()))}return t.replace(/%%/,"%")}}function f(t,e){var s="s",n="";return t&&(1===(t=t.replace(/(:|;|\s)/gi,"").split(/\,/)).length?s=t[0]:(n=t[0],s=t[1])),1<Math.abs(e)?s:n}var o=[],n=[],a={precision:100,elapse:!1,defer:!1};n.push(/^[0-9]*$/.source),n.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),n.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),n=new RegExp(n.join("|"));var u={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},h=function(t,e,s){this.el=t,this.$el=i(t),this.interval=null,this.offset={},this.options=i.extend({},a),this.instanceNumber=o.length,o.push(this),this.$el.data("countdown-instance",this.instanceNumber),s&&("function"==typeof s?(this.$el.on("update.countdown",s),this.$el.on("stoped.countdown",s),this.$el.on("finish.countdown",s)):this.options=i.extend({},a,s)),this.setFinalDate(e),!1===this.options.defer&&this.start()};i.extend(h.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var t=this;this.update(),this.interval=setInterval(function(){t.update.call(t)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),o[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(t){this.finalDate=e(t)},update:function(){if(0!==this.$el.closest("html").length){var t,e=void 0!==i._data(this.el,"events"),s=new Date;t=this.finalDate.getTime()-s.getTime(),t=Math.ceil(t/1e3),t=!this.options.elapse&&t<0?0:Math.abs(t),this.totalSecsLeft!==t&&e&&(this.totalSecsLeft=t,this.elapsed=s>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-s.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))}else this.remove()},dispatchEvent:function(t){var e=i.Event(t+".countdown");e.finalDate=this.finalDate,e.elapsed=this.elapsed,e.offset=i.extend({},this.offset),e.strftime=s(this.offset),this.$el.trigger(e)}}),i.fn.countdown=function(){var n=Array.prototype.slice.call(arguments,0);return this.each(function(){var t=i(this).data("countdown-instance");if(void 0!==t){var e=o[t],s=n[0];h.prototype.hasOwnProperty(s)?e[s].apply(e,n.slice(1)):null===String(s).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(e.setFinalDate.call(e,s),e.start()):i.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,s))}else new h(this,n[0],n[1])})}});