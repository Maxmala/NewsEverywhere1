window.Modernizr=function(t,e,i){function n(t){p.cssText=t}function s(t,e){return typeof t===e}function r(t,e){return!!~(""+t).indexOf(e)}var o,a,u="2.8.3",h={},l=e.documentElement,c="modernizr",f=e.createElement(c),p=f.style,d=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),g={},b=[],_=b.slice,v={}.hasOwnProperty;for(var m in a=s(v,"undefined")||s(v.call,"undefined")?function(t,e){return e in t&&s(t.constructor.prototype[e],"undefined")}:function(t,e){return v.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(i){var n=this;if("function"!=typeof n)throw new TypeError;var r=_.call(arguments,1),o=function(){if(this instanceof o){var t=function(){};t.prototype=n.prototype;var e=new t,s=n.apply(e,r.concat(_.call(arguments)));return Object(s)===s?s:e}return n.apply(i,r.concat(_.call(arguments)))};return o}),g.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",s="linear-gradient(left top,#9f9, white);";return n((t+"-webkit- ".split(" ").join(e+t)+d.join(s+t)).slice(0,-t.length)),r(p.backgroundImage,"gradient")},g)a(g,m)&&(o=m.toLowerCase(),h[o]=g[m](),b.push((h[o]?"":"no-")+o));return h.addTest=function(t,e){if("object"==typeof t)for(var s in t)a(t,s)&&h.addTest(s,t[s]);else{if(t=t.toLowerCase(),h[t]!==i)return h;e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(l.className+=" "+(e?"":"no-")+t),h[t]=e}return h},n(""),f=null,h._version=u,h._prefixes=d,h}(0,this.document),function(n){function e(t,e){this.element=t,this.settings=n.extend({},i,e),this._defaults=i,this._name=s,this.init()}var s="gradientify",i={angle:"0deg",fps:60,gradients:{},transition_time:8};n.extend(e.prototype,{init:function(){Modernizr.cssgradients&&(this.currentIndex=0,this.nextIndex=1,this.steps_count=0,this.steps_total=Math.round(this.settings.transition_time*this.settings.fps),this.rgb_steps={start:[0,0,0],stop:[0,0,0]},this.rgb_values={start:[0,0,0],stop:[0,0,0]},this.prefixes=["-webkit-","-moz-","-o-","-ms-",""],this.color1=null,this.color2=null,this.calculateSteps(),setInterval(function(){this.updateGradient.apply(this)}.bind(this),Math.round(1e3/this.settings.fps)))},setNext:function(t){return t+1<this.settings.gradients.length?t+1:0},calculateStepSize:function(t,e){return(t-e)/this.steps_total},calculateSteps:function(){for(var t in this.rgb_values)if(this.rgb_values.hasOwnProperty(t))for(var e=0;e<3;e++)this.rgb_values[t][e]=this.settings.gradients[this.currentIndex][t][e],this.rgb_steps[t][e]=this.calculateStepSize(this.settings.gradients[this.nextIndex][t][e],this.rgb_values[t][e])},updateGradient:function(){var t;for(var e in this.rgb_values)if(this.rgb_values.hasOwnProperty(e))for(t=0;t<3;t++)this.rgb_values[e][t]+=this.rgb_steps[e][t];var s="rgb("+(0|this.rgb_values.start[0])+","+(0|this.rgb_values.start[1])+","+(0|this.rgb_values.start[2])+")",i="rgb("+(0|this.rgb_values.stop[0])+","+(0|this.rgb_values.stop[1])+","+(0|this.rgb_values.stop[2])+")";if(s!=this.color1||i!=this.color2)for(this.color1=s,this.color2=i,n(this.element).css("background-image","-webkit-gradient(linear, left bottom, right top, from("+this.color1+"), to("+this.color2+"))"),t=0;t<4;t++)n(this.element).css("background-image",this.prefixes[t]+"linear-gradient("+this.settings.angle+", "+this.color1+", "+this.color2+")");this.steps_count++,this.steps_count>this.steps_total&&(this.steps_count=0,this.currentIndex=this.setNext(this.currentIndex),this.nextIndex=this.setNext(this.nextIndex),this.calculateSteps())}}),n.fn[s]=function(t){return this.each(function(){n.data(this,"plugin_"+s)||n.data(this,"plugin_"+s,new e(this,t))})}}(jQuery,window,document);