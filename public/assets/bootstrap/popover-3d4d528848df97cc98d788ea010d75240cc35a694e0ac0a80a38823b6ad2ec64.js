function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var Popover=function(r){var n="popover",i="4.0.0",s="bs.popover",a="."+s,t=r.fn[n],u="bs-popover",c=new RegExp("(^|\\s)"+u+"\\S+","g"),p=_extends({},Tooltip.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),f=_extends({},Tooltip.DefaultType,{content:"(string|element|function)"}),l={FADE:"fade",SHOW:"show"},h={TITLE:".popover-header",CONTENT:".popover-body"},d={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,INSERTED:"inserted"+a,CLICK:"click"+a,FOCUSIN:"focusin"+a,FOCUSOUT:"focusout"+a,MOUSEENTER:"mouseenter"+a,MOUSELEAVE:"mouseleave"+a},e=function(t){function o(){return t.apply(this,arguments)||this}_inheritsLoose(o,t);var e=o.prototype;return e.isWithContent=function(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function(t){r(this.getTipElement()).addClass(u+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||r(this.config.template)[0],this.tip},e.setContent=function(){var t=r(this.getTipElement());this.setElementContent(t.find(h.TITLE),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(h.CONTENT),e),t.removeClass(l.FADE+" "+l.SHOW)},e._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function(){var t=r(this.getTipElement()),e=t.attr("class").match(c);null!==e&&0<e.length&&t.removeClass(e.join(""))},o._jQueryInterface=function(n){return this.each(function(){var t=r(this).data(s),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new o(this,e),r(this).data(s,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},_createClass(o,null,[{key:"VERSION",get:function(){return i}},{key:"Default",get:function(){return p}},{key:"NAME",get:function(){return n}},{key:"DATA_KEY",get:function(){return s}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return a}},{key:"DefaultType",get:function(){return f}}]),o}(Tooltip);return r.fn[n]=e._jQueryInterface,r.fn[n].Constructor=e,r.fn[n].noConflict=function(){return r.fn[n]=t,e._jQueryInterface},e}($);