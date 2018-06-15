!function(t){if("function"==typeof define&&define.amd)define([],t);else if("object"==typeof exports){var n=require("fs");module.exports=t(),module.exports.css=function(){return n.readFileSync(__dirname+"/nouislider.min.css","utf8")}}else window.noUiSlider=t()}(function(){"use strict";function k(t){return t.filter(function(t){return!this[t]&&(this[t]=!0)},{})}function s(t,n){return Math.round(t/n)*n}function A(t){var n=t.getBoundingClientRect(),e=t.ownerDocument,r=e.defaultView||e.parentWindow,i=e.documentElement,o=r.pageXOffset;return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o=0),{top:n.top+r.pageYOffset-i.clientTop,left:n.left+o-i.clientLeft}}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function n(t){var n=Math.pow(10,7);return Number((Math.round(t*n)/n).toFixed(7))}function V(t,n,e){T(t,n),setTimeout(function(){z(t,n)},e)}function j(t){return Math.max(Math.min(t,100),0)}function F(t){return Array.isArray(t)?t:[t]}function C(t){var n=t.split(".");return 1<n.length?n[1].length:0}function T(t,n){t.classList?t.classList.add(n):t.className+=" "+n}function z(t,n){t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")}function q(t,n){t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className)}function c(t,n){return 100/(n-t)}function r(t,n){return 100*n/(t[1]-t[0])}function u(t,n){return r(t,t[0]<0?n+Math.abs(t[0]):n-t[0])}function o(t,n){return n*(t[1]-t[0])/100+t[0]}function l(t,n){for(var e=1;t>=n[e];)e+=1;return e}function e(t,n,e){if(e>=t.slice(-1)[0])return 100;var r,i,o,a,s=l(e,t);return r=t[s-1],i=t[s],o=n[s-1],a=n[s],o+u([r,i],e)/c(o,a)}function a(t,n,e){if(100<=e)return t.slice(-1)[0];var r,i=l(e,n);return o([t[i-1],t[i]],(e-(r=n[i-1]))*c(r,n[i]))}function f(t,n,e,r){if(100===r)return r;var i,o,a=l(r,t);return e?(i=t[a-1],((o=t[a])-i)/2<r-i?o:i):n[a-1]?t[a-1]+s(r-t[a-1],n[a-1]):r}function d(t,n,e){var r;if("number"==typeof n&&(n=[n]),"[object Array]"!==Object.prototype.toString.call(n))throw new Error("noUiSlider: 'range' contains invalid value.");if(!i(r="min"===t?0:"max"===t?100:parseFloat(t))||!i(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");e.xPct.push(r),e.xVal.push(n[0]),r?e.xSteps.push(!isNaN(n[1])&&n[1]):isNaN(n[1])||(e.xSteps[0]=n[1])}function p(t,n,e){return!n||void(e.xSteps[t]=r([e.xVal[t],e.xVal[t+1]],n)/c(e.xPct[t],e.xPct[t+1]))}function h(t,n,e,r){this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=n,this.direction=e;var i,o=[];for(i in t)t.hasOwnProperty(i)&&o.push([t[i],i]);for(o.sort(function(t,n){return t[0]-n[0]}),i=0;i<o.length;i++)d(o[i][1],o[i][0],this);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)p(i,this.xNumSteps[i],this)}function t(t,n){if(!i(n))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=n}function m(t,n){if("object"!=typeof n||Array.isArray(n))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===n.min||void 0===n.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new h(n,t.snap,t.dir,t.singleStep)}function g(t,n){if(n=F(n),!Array.isArray(n)||!n.length||2<n.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=n.length,t.start=n}function v(t,n){if("boolean"!=typeof(t.snap=n))throw new Error("noUiSlider: 'snap' option must be a boolean.")}function w(t,n){if("boolean"!=typeof(t.animate=n))throw new Error("noUiSlider: 'animate' option must be a boolean.")}function b(t,n){if("lower"===n&&1===t.handles)t.connect=1;else if("upper"===n&&1===t.handles)t.connect=2;else if(!0===n&&2===t.handles)t.connect=3;else{if(!1!==n)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");t.connect=0}}function x(t,n){switch(n){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function S(t,n){if(!i(n))throw new Error("noUiSlider: 'margin' option must be numeric.");if(t.margin=t.spectrum.getMargin(n),!t.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function y(t,n){if(!i(n))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(n),!t.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function E(t,n){switch(n){case"ltr":t.dir=0;break;case"rtl":t.dir=1,t.connect=[0,2,1,3][t.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function U(t,n){if("string"!=typeof n)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var e=0<=n.indexOf("tap"),r=0<=n.indexOf("drag"),i=0<=n.indexOf("fixed"),o=0<=n.indexOf("snap");t.events={tap:e||o,drag:r,fixed:i,snap:o}}function M(t,n){if("function"==typeof(t.format=n).to&&"function"==typeof n.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function N(e){var r,i={margin:0,limit:0,animate:!0,format:$},n={connect:!(r={step:{r:!1,t:t},start:{r:!0,t:g},connect:{r:!0,t:b},direction:{r:!0,t:E},snap:{r:!1,t:v},animate:{r:!1,t:w},range:{r:!0,t:m},orientation:{r:!1,t:x},margin:{r:!1,t:S},limit:{r:!1,t:y},behaviour:{r:!0,t:U},format:{r:!1,t:M}}),direction:"ltr",behaviour:"tap",orientation:"horizontal"};return Object.keys(n).forEach(function(t){void 0===e[t]&&(e[t]=n[t])}),Object.keys(r).forEach(function(t){var n=r[t];if(void 0===e[t]){if(n.r)throw new Error("noUiSlider: '"+t+"' is required.");return!0}n.t(i,e[t])}),i.pips=e.pips,i.style=i.ort?"top":"left",i}function H(t,n,e){var r=t+n[0],i=t+n[1];return e?(r<0&&(i+=Math.abs(r)),100<i&&(r-=i-100),[j(r),j(i)]):[r,i]}function X(t){t.preventDefault();var n,e,r=0===t.type.indexOf("touch"),i=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),a=t;return 0===t.type.indexOf("MSPointer")&&(o=!0),r&&(n=t.changedTouches[0].pageX,e=t.changedTouches[0].pageY),(i||o)&&(n=t.clientX+window.pageXOffset,e=t.clientY+window.pageYOffset),a.points=[n,e],a.cursor=i||o,a}function P(t,n){var e=document.createElement("div"),r=document.createElement("div"),i=["-lower","-upper"];return t&&i.reverse(),T(r,W[3]),T(r,W[3]+i[n]),T(e,W[2]),e.appendChild(r),e}function Y(t,n,e){switch(t){case 1:T(n,W[7]),T(e[0],W[6]);break;case 3:T(e[1],W[6]);case 2:T(e[0],W[7]);case 0:T(n,W[6])}}function B(t,n,e){var r,i=[];for(r=0;r<t;r+=1)i.push(e.appendChild(P(n,r)));return i}function D(t,n,e){T(e,W[0]),T(e,W[8+t]),T(e,W[4+n]);var r=document.createElement("div");return T(r,W[1]),e.appendChild(r),r}function O(t,u){function a(t,n,e){if("range"===t||"steps"===t)return P.xVal;if("count"===t){var r,i=100/(n-1),o=0;for(n=[];(r=o++*i)<=100;)n.push(r);t="positions"}return"positions"===t?n.map(function(t){return P.fromStepping(e?P.getStep(t):t)}):"values"===t?e?n.map(function(t){return P.fromStepping(P.getStep(P.toStepping(t)))}):n:void 0}function s(p,h,m){var t=P.direction,g={},n=P.xVal[0],e=P.xVal[P.xVal.length-1],v=!1,w=!1,b=0;return P.direction=0,(m=k(m.slice().sort(function(t,n){return t-n})))[0]!==n&&(m.unshift(n),v=!0),m[m.length-1]!==e&&(m.push(e),w=!0),m.forEach(function(t,n){var e,r,i,o,a,s,c,u,l,f=t,d=m[n+1];if("steps"===h&&(e=P.xNumSteps[n]),e||(e=d-f),!1!==f&&void 0!==d)for(r=f;r<=d;r+=e){for(c=(a=(o=P.toStepping(r))-b)/p,l=a/(u=Math.round(c)),i=1;i<=u;i+=1)g[(b+i*l).toFixed(5)]=["x",0];s=-1<m.indexOf(r)?1:"steps"===h?2:0,!n&&v&&(s=0),r===d&&w||(g[o.toFixed(5)]=[r,s]),b=o}}),P.direction=t,g}function c(n,e,r){function i(t){return["-normal","-large","-sub"][t]}function o(t,n,e){return'class="'+n+" "+n+"-"+s+" "+n+i(e[1])+'" style="'+u.style+": "+t+'%"'}function a(t,n){P.direction&&(t=100-t),n[1]=n[1]&&e?e(n[0],n[1]):n[1],c.innerHTML+="<div "+o(t,"noUi-marker",n)+"></div>",n[1]&&(c.innerHTML+="<div "+o(t,"noUi-value",n)+">"+r.to(n[0])+"</div>")}var s=["horizontal","vertical"][u.ort],c=document.createElement("div");return T(c,"noUi-pips"),T(c,"noUi-pips-"+s),Object.keys(n).forEach(function(t){a(t,n[t])}),c}function n(t){var n=t.mode,e=t.density||1,r=t.filter||!1,i=s(e,n,a(n,t.values||!1,t.stepped||!1)),o=t.format||{to:Math.round};return M.appendChild(c(i,r,o))}function l(){return E["offset"+["Width","Height"][u.ort]]}function f(e,r){void 0!==r&&(r=Math.abs(r-u.dir)),Object.keys(L).forEach(function(t){var n=t.split(".")[0];e===n&&L[t].forEach(function(t){t(F(w()),r,i(Array.prototype.slice.call(O)))})})}function i(t){return 1===t.length?t[0]:u.dir?t.reverse():t}function d(n,e,r,i){var o=function(t){return!M.hasAttribute("disabled")&&(!q(M,W[14])&&(t=X(t),!(n===R.start&&void 0!==t.buttons&&1<t.buttons)&&(t.calcPoint=t.points[u.ort],void r(t,i))))},a=[];return n.split(" ").forEach(function(t){e.addEventListener(t,o,!1),a.push([t,o])}),a}function p(t,n){var e,r,i=n.handles||U,o=!1,a=100*(t.calcPoint-n.start)/l(),s=i[0]===U[0]?0:1;if(e=H(a,n.positions,1<i.length),o=m(i[0],e[s],1===i.length),1<i.length){if(o=m(i[1],e[s?0:1],!1)||o)for(r=0;r<n.handles.length;r++)f("slide",r)}else o&&f("slide",s)}function h(t,n){var e=E.getElementsByClassName(W[15]),r=n.handles[0]===U[0]?0:1;e.length&&z(e[0],W[15]),t.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener));var i=document.documentElement;i.noUiListeners.forEach(function(t){i.removeEventListener(t[0],t[1])}),z(M,W[12]),f("set",r),f("change",r)}function o(t,n){var e=document.documentElement;if(1===n.handles.length&&(T(n.handles[0].children[0],W[15]),n.handles[0].hasAttribute("disabled")))return!1;t.stopPropagation();var r=d(R.move,e,p,{start:t.calcPoint,handles:n.handles,positions:[N[0],N[U.length-1]]}),i=d(R.end,e,h,{handles:n.handles});if(e.noUiListeners=r.concat(i),t.cursor){document.body.style.cursor=getComputedStyle(t.target).cursor,1<U.length&&T(M,W[12]);var o=function(){return!1};document.body.noUiListener=o,document.body.addEventListener("selectstart",o,!1)}}function r(t){var n,e,r=t.calcPoint,i=0;return t.stopPropagation(),U.forEach(function(t){i+=A(t)[u.style]}),n=r<i/2||1===U.length?0:1,e=100*(r-=A(E)[u.style])/l(),u.events.snap||V(M,W[14],300),!U[n].hasAttribute("disabled")&&(m(U[n],e),f("slide",n),f("set",n),f("change",n),void(u.events.snap&&o(t,{handles:[U[i]]})))}function e(t){var n,e;if(!t.fixed)for(n=0;n<U.length;n+=1)d(R.start,U[n].children[0],o,{handles:[U[n]]});t.tap&&d(R.start,E,r,{handles:U}),t.drag&&(T((e=[E.getElementsByClassName(W[7])[0]])[0],W[10]),t.fixed&&e.push(U[e[0]===U[0]?1:0].children[0]),e.forEach(function(t){d(R.start,t,o,{handles:U})}))}function m(t,n,e){var r=t!==U[0]?1:0,i=N[0]+u.margin,o=N[1]-u.margin,a=N[0]+u.limit,s=N[1]-u.limit;return 1<U.length&&(n=r?Math.max(n,i):Math.min(n,o)),!1!==e&&u.limit&&1<U.length&&(n=r?Math.min(n,a):Math.max(n,s)),n=P.getStep(n),(n=j(parseFloat(n.toFixed(7))))!==N[r]&&(t.style[u.style]=n+"%",t.previousSibling||(z(t,W[17]),50<n&&T(t,W[17])),N[r]=n,O[r]=P.fromStepping(n),f("update",r),!0)}function g(t,n){var e,r,i;for(u.limit&&(t+=1),e=0;e<t;e+=1)null!==(i=n[r=e%2])&&!1!==i&&("number"==typeof i&&(i=String(i)),(!1===(i=u.format.from(i))||isNaN(i)||!1===m(U[r],P.toStepping(i),e===3-u.dir))&&f("update",r))}function v(t){var n,e,r=F(t);for(u.dir&&1<u.handles&&r.reverse(),u.animate&&-1!==N[0]&&V(M,W[14],300),n=1<U.length?3:1,1===r.length&&(n=1),g(n,r),e=0;e<U.length;e++)f("set",e)}function w(){var t,n=[];for(t=0;t<u.handles;t+=1)n[t]=u.format.to(O[t]);return i(n)}function b(){W.forEach(function(t){t&&z(M,t)}),M.innerHTML="",delete M.noUiSlider}function x(){return i(N.map(function(t,n){var e=P.getApplicableStep(t),r=C(String(e[2])),i=O[n],o=100===t?null:e[2],a=Number((i-e[2]).toFixed(r));return[0===t?null:a>=e[1]?e[2]:e[0]||!1,o]}))}function S(t,n){L[t]=L[t]||[],L[t].push(n),"update"===t.split(".")[0]&&U.forEach(function(t,n){f("update",n)})}function y(t){var r=t.split(".")[0],i=t.substring(r.length);Object.keys(L).forEach(function(t){var n=t.split(".")[0],e=t.substring(n.length);r&&r!==n||i&&i!==e||delete L[t]})}var E,U,M=t,N=[-1,-1],P=u.spectrum,O=[],L={};if(M.noUiSlider)throw new Error("Slider was already initialized.");return E=D(u.dir,u.ort,M),U=B(u.handles,u.dir,E),Y(u.connect,M,U),e(u.events),u.pips&&n(u.pips),{destroy:b,steps:x,on:S,off:y,get:w,set:v}}function L(t,n){if(!t.nodeName)throw new Error("noUiSlider.create requires a single element.");var e=N(n,t),r=O(t,e);r.set(e.start),t.noUiSlider=r}var R=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},W=["noUi-target","noUi-base","noUi-origin","noUi-handle","noUi-horizontal","noUi-vertical","noUi-background","noUi-connect","noUi-ltr","noUi-rtl","noUi-dragable","","noUi-state-drag","","noUi-state-tap","noUi-active","","noUi-stacking"];h.prototype.getMargin=function(t){return 2===this.xPct.length&&r(this.xVal,t)},h.prototype.toStepping=function(t){return t=e(this.xVal,this.xPct,t),this.direction&&(t=100-t),t},h.prototype.fromStepping=function(t){return this.direction&&(t=100-t),n(a(this.xVal,this.xPct,t))},h.prototype.getStep=function(t){return this.direction&&(t=100-t),t=f(this.xPct,this.xSteps,this.snap,t),this.direction&&(t=100-t),t},h.prototype.getApplicableStep=function(t){var n=l(t,this.xPct),e=100===t?2:1;return[this.xNumSteps[n-2],this.xVal[n-e],this.xNumSteps[n-e]]},h.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var $={to:function(t){return t.toFixed(2)},from:Number};return{create:L}});