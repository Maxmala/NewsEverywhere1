function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Collapse=function(o){var t="collapse",n="4.0.0",g="bs.collapse",e="."+g,i=".data-api",r=o.fn[t],h=600,s={toggle:!0,parent:""},a={toggle:"boolean",parent:"(string|element)"},_={SHOW:"show"+e,SHOWN:"shown"+e,HIDE:"hide"+e,HIDDEN:"hidden"+e,CLICK_DATA_API:"click"+e+i},f={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},c={WIDTH:"width",HEIGHT:"height"},d={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},l=function(){function l(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=o.makeArray(o('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=o(d.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],s=Util.getSelectorFromElement(r);null!==s&&0<o(s).filter(e).length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=l.prototype;return e.toggle=function(){o(this._element).hasClass(f.SHOW)?this.hide():this.show()},e.show=function(){var e,t,n=this;if(!this._isTransitioning&&!o(this._element).hasClass(f.SHOW)&&(this._parent&&0===(e=o.makeArray(o(this._parent).find(d.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(t=o(e).not(this._selector).data(g))&&t._isTransitioning))){var i=o.Event(_.SHOW);if(o(this._element).trigger(i),!i.isDefaultPrevented()){e&&(l._jQueryInterface.call(o(e).not(this._selector),"hide"),t||o(e).data(g,null));var r=this._getDimension();o(this._element).removeClass(f.COLLAPSE).addClass(f.COLLAPSING),(this._element.style[r]=0)<this._triggerArray.length&&o(this._triggerArray).removeClass(f.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var s=function(){o(n._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).addClass(f.SHOW),n._element.style[r]="",n.setTransitioning(!1),o(n._element).trigger(_.SHOWN)};if(Util.supportsTransitionEnd()){var a="scroll"+(r[0].toUpperCase()+r.slice(1));o(this._element).one(Util.TRANSITION_END,s).emulateTransitionEnd(h),this._element.style[r]=this._element[a]+"px"}else s()}}},e.hide=function(){var e=this;if(!this._isTransitioning&&o(this._element).hasClass(f.SHOW)){var t=o.Event(_.HIDE);if(o(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Util.reflow(this._element),o(this._element).addClass(f.COLLAPSING).removeClass(f.COLLAPSE).removeClass(f.SHOW),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],s=Util.getSelectorFromElement(r);if(null!==s)o(s).hasClass(f.SHOW)||o(r).addClass(f.COLLAPSED).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),o(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).trigger(_.HIDDEN)};this._element.style[n]="",Util.supportsTransitionEnd()?o(this._element).one(Util.TRANSITION_END,a).emulateTransitionEnd(h):a()}}},e.setTransitioning=function(e){this._isTransitioning=e},e.dispose=function(){o.removeData(this._element,g),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(e){return(e=_extends({},s,e)).toggle=Boolean(e.toggle),Util.typeCheckConfig(t,e,a),e},e._getDimension=function(){return o(this._element).hasClass(c.WIDTH)?c.WIDTH:c.HEIGHT},e._getParent=function(){var n=this,e=null;Util.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=o(this._config.parent)[0];var t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return o(e).find(t).each(function(e,t){n._addAriaAndCollapsedClass(l._getTargetFromElement(t),[t])}),e},e._addAriaAndCollapsedClass=function(e,t){if(e){var n=o(e).hasClass(f.SHOW);0<t.length&&o(t).toggleClass(f.COLLAPSED,!n).attr("aria-expanded",n)}},l._getTargetFromElement=function(e){var t=Util.getSelectorFromElement(e);return t?o(t)[0]:null},l._jQueryInterface=function(i){return this.each(function(){var e=o(this),t=e.data(g),n=_extends({},s,e.data(),"object"==typeof i&&i);if(!t&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),t||(t=new l(this,n),e.data(g,t)),"string"==typeof i){if("undefined"==typeof t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},_createClass(l,null,[{key:"VERSION",get:function(){return n}},{key:"Default",get:function(){return s}}]),l}();return o(document).on(_.CLICK_DATA_API,d.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=o(this),t=Util.getSelectorFromElement(this);o(t).each(function(){var e=o(this),t=e.data(g)?"toggle":n.data();l._jQueryInterface.call(e,t)})}),o.fn[t]=l._jQueryInterface,o.fn[t].Constructor=l,o.fn[t].noConflict=function(){return o.fn[t]=r,l._jQueryInterface},l}($);