function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Dropdown=function(f){var t="dropdown",n="4.0.0",h="bs.dropdown",r="."+h,e=".data-api",o=f.fn[t],s=27,a=32,u=9,p=38,_=40,c=3,d=new RegExp(p+"|"+_+"|"+s),g={HIDE:"hide"+r,HIDDEN:"hidden"+r,SHOW:"show"+r,SHOWN:"shown"+r,CLICK:"click"+r,CLICK_DATA_API:"click"+r+e,KEYDOWN_DATA_API:"keydown"+r+e,KEYUP_DATA_API:"keyup"+r+e},m={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"},E={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"},i={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"},T={offset:0,flip:!0,boundary:"scrollParent"},D={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},l=function(){function l(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=l.prototype;return e.toggle=function(){if(!this._element.disabled&&!f(this._element).hasClass(m.DISABLED)){var e=l._getParentFromElement(this._element),t=f(this._menu).hasClass(m.SHOW);if(l._clearMenus(),!t){var n={relatedTarget:this._element},r=f.Event(g.SHOW,n);if(f(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof Popper)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;f(e).hasClass(m.DROPUP)&&(f(this._menu).hasClass(m.MENULEFT)||f(this._menu).hasClass(m.MENURIGHT))&&(o=e),"scrollParent"!==this._config.boundary&&f(e).addClass(m.POSITION_STATIC),this._popper=new Popper(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===f(e).closest(E.NAVBAR_NAV).length&&f("body").children().on("mouseover",null,f.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),f(this._menu).toggleClass(m.SHOW),f(e).toggleClass(m.SHOW).trigger(f.Event(g.SHOWN,n))}}}},e.dispose=function(){f.removeData(this._element,h),f(this._element).off(r),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;f(this._element).on(g.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(e){return e=_extends({},this.constructor.Default,f(this._element).data(),e),Util.typeCheckConfig(t,e,this.constructor.DefaultType),e},e._getMenuElement=function(){if(!this._menu){var e=l._getParentFromElement(this._element);this._menu=f(e).find(E.MENU)[0]}return this._menu},e._getPlacement=function(){var e=f(this._element).parent(),t=i.BOTTOM;return e.hasClass(m.DROPUP)?(t=i.TOP,f(this._menu).hasClass(m.MENURIGHT)&&(t=i.TOPEND)):e.hasClass(m.DROPRIGHT)?t=i.RIGHT:e.hasClass(m.DROPLEFT)?t=i.LEFT:f(this._menu).hasClass(m.MENURIGHT)&&(t=i.BOTTOMEND),t},e._detectNavbar=function(){return 0<f(this._element).closest(".navbar").length},e._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=_extends({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},l._jQueryInterface=function(t){return this.each(function(){var e=f(this).data(h);if(e||(e=new l(this,"object"==typeof t?t:null),f(this).data(h,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},l._clearMenus=function(e){if(!e||e.which!==c&&("keyup"!==e.type||e.which===u))for(var t=f.makeArray(f(E.DATA_TOGGLE)),n=0;n<t.length;n++){var r=l._getParentFromElement(t[n]),o=f(t[n]).data(h),i={relatedTarget:t[n]};if(o){var s=o._menu;if(f(r).hasClass(m.SHOW)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&e.which===u)&&f.contains(r,e.target))){var a=f.Event(g.HIDE,i);f(r).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&f("body").children().off("mouseover",null,f.noop),t[n].setAttribute("aria-expanded","false"),f(s).removeClass(m.SHOW),f(r).removeClass(m.SHOW).trigger(f.Event(g.HIDDEN,i)))}}}},l._getParentFromElement=function(e){var t,n=Util.getSelectorFromElement(e);return n&&(t=f(n)[0]),t||e.parentNode},l._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(e.which===a||e.which!==s&&(e.which!==_&&e.which!==p||f(e.target).closest(E.MENU).length)):d.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!f(this).hasClass(m.DISABLED))){var t=l._getParentFromElement(this),n=f(t).hasClass(m.SHOW);if((n||e.which===s&&e.which===a)&&(!n||e.which!==s&&e.which!==a)){var r=f(t).find(E.VISIBLE_ITEMS).get();if(0!==r.length){var o=r.indexOf(e.target);e.which===p&&0<o&&o--,e.which===_&&o<r.length-1&&o++,o<0&&(o=0),r[o].focus()}}else{if(e.which===s){var i=f(t).find(E.DATA_TOGGLE)[0];f(i).trigger("focus")}f(this).trigger("click")}}},_createClass(l,null,[{key:"VERSION",get:function(){return n}},{key:"Default",get:function(){return T}},{key:"DefaultType",get:function(){return D}}]),l}();return f(document).on(g.KEYDOWN_DATA_API,E.DATA_TOGGLE,l._dataApiKeydownHandler).on(g.KEYDOWN_DATA_API,E.MENU,l._dataApiKeydownHandler).on(g.CLICK_DATA_API+" "+g.KEYUP_DATA_API,l._clearMenus).on(g.CLICK_DATA_API,E.DATA_TOGGLE,function(e){e.preventDefault(),e.stopPropagation(),l._jQueryInterface.call(f(this),"toggle")}).on(g.CLICK_DATA_API,E.FORM_CHILD,function(e){e.stopPropagation()}),f.fn[t]=l._jQueryInterface,f.fn[t].Constructor=l,f.fn[t].noConflict=function(){return f.fn[t]=o,l._jQueryInterface},l}($,Popper);