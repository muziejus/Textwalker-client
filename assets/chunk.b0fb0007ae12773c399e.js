(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[7],{195:function(t,e,n){"use strict"
n.r(e)
var i=n(63),r=n.n(i)
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this
function i(t){var e=0
return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}function a(t){var e="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator]
return e?e.call(t):{next:i(t)}}!function(t,i){if(i){var r=n
t=t.split(".")
for(var o=0;o<t.length-1;o++){var a=t[o]
a in r||(r[a]={}),r=r[a]}(i=i(o=r[t=t[t.length-1]]))!=o&&null!=i&&e(r,t,{configurable:!0,writable:!0,value:i})}}("Promise",function(t){function e(t){this.b=0,this.c=void 0,this.a=[]
var e=this.f()
try{t(e.resolve,e.reject)}catch(t){e.reject(t)}}function i(){this.a=null}function r(t){return t instanceof e?t:new e(function(e){e(t)})}if(t)return t
i.prototype.b=function(t){if(null==this.a){this.a=[]
var e=this
this.c(function(){e.g()})}this.a.push(t)}
var s=n.setTimeout
i.prototype.c=function(t){s(t,0)},i.prototype.g=function(){for(;this.a&&this.a.length;){var t=this.a
this.a=[]
for(var e=0;e<t.length;++e){var n=t[e]
t[e]=null
try{n()}catch(t){this.f(t)}}}this.a=null},i.prototype.f=function(t){this.c(function(){throw t})},e.prototype.f=function(){function t(t){return function(i){n||(n=!0,t.call(e,i))}}var e=this,n=!1
return{resolve:t(this.o),reject:t(this.g)}},e.prototype.o=function(t){if(t===this)this.g(new TypeError("A Promise cannot resolve to itself"))
else if(t instanceof e)this.u(t)
else{t:switch(o(t)){case"object":var n=null!=t
break t
case"function":n=!0
break t
default:n=!1}n?this.l(t):this.h(t)}},e.prototype.l=function(t){var e=void 0
try{e=t.then}catch(t){return void this.g(t)}"function"==typeof e?this.v(e,t):this.h(t)},e.prototype.g=function(t){this.i(2,t)},e.prototype.h=function(t){this.i(1,t)},e.prototype.i=function(t,e){if(0!=this.b)throw Error("Cannot settle("+t+", "+e+"): Promise already settled in state"+this.b)
this.b=t,this.c=e,this.m()},e.prototype.m=function(){if(null!=this.a){for(var t=0;t<this.a.length;++t)u.b(this.a[t])
this.a=null}}
var u=new i
return e.prototype.u=function(t){var e=this.f()
t.Ja(e.resolve,e.reject)},e.prototype.v=function(t,e){var n=this.f()
try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},e.prototype.then=function(t,n){function i(t,e){return"function"==typeof t?function(e){try{r(t(e))}catch(t){o(t)}}:e}var r,o,a=new e(function(t,e){r=t,o=e})
return this.Ja(i(t,r),i(n,o)),a},e.prototype.catch=function(t){return this.then(void 0,t)},e.prototype.Ja=function(t,e){function n(){switch(i.b){case 1:t(i.c)
break
case 2:e(i.c)
break
default:throw Error("Unexpected state: "+i.b)}}var i=this
null==this.a?u.b(n):this.a.push(n)},e.resolve=r,e.reject=function(t){return new e(function(e,n){n(t)})},e.race=function(t){return new e(function(e,n){for(var i=a(t),o=i.next();!o.done;o=i.next())r(o.value).Ja(e,n)})},e.all=function(t){var n=a(t),i=n.next()
return i.done?r([]):new e(function(t,e){function o(e){return function(n){a[e]=n,0==--s&&t(a)}}var a=[],s=0
do{a.push(void 0),s++,r(i.value).Ja(o(a.length-1),e),i=n.next()}while(!i.done)})},e})
var s=s||{},u=this
function c(t){return"string"==typeof t}function h(t){return"boolean"==typeof t}var l=/^[\w+\/_-]+[=]{0,2}$/,f=null
function d(){}function p(t){var e=o(t)
if("object"==e){if(!t)return"null"
if(t instanceof Array)return"array"
if(t instanceof Object)return e
var n=Object.prototype.toString.call(t)
if("[object Window]"==n)return"object"
if("[object Array]"==n||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array"
if("[object Function]"==n||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object"
return e}function v(t){return null===t}function m(t){return"array"==p(t)}function g(t){var e=p(t)
return"array"==e||"object"==e&&"number"==typeof t.length}function b(t){return"function"==p(t)}function y(t){var e=o(t)
return"object"==e&&null!=t||"function"==e}var w="closure_uid_"+(1e9*Math.random()>>>0),I=0
function T(t,e,n){return t.call.apply(t.bind,arguments)}function k(t,e,n){if(!t)throw Error()
if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2)
return function(){var n=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return(E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?T:k).apply(null,arguments)}function S(t,e){var n=Array.prototype.slice.call(arguments,1)
return function(){var e=n.slice()
return e.push.apply(e,arguments),t.apply(this,e)}}var A=Date.now||function(){return+new Date}
function N(t,e){function n(){}n.prototype=e.prototype,t.qb=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.cd=function(t,n,i){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o]
return e.prototype[n].apply(t,r)}}function _(t){if(!t)return!1
try{return!!t.$goog_Thenable}catch(t){return!1}}function O(t){if(Error.captureStackTrace)Error.captureStackTrace(this,O)
else{var e=Error().stack
e&&(this.stack=e)}t&&(this.message=String(t))}function P(t,e){for(var n="",i=(t=t.split("%s")).length-1,r=0;r<i;r++)n+=t[r]+(r<e.length?e[r]:"%s")
O.call(this,n+t[i])}function C(t,e){throw new P("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}function R(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function D(t,e){t.f(e),100>t.b&&(t.b++,e.next=t.a,t.a=e)}function L(){this.b=this.a=null}N(O,Error),O.prototype.name="CustomError",N(P,O),P.prototype.name="AssertionError",R.prototype.get=function(){if(0<this.b){this.b--
var t=this.a
this.a=t.next,t.next=null}else t=this.c()
return t}
var x=new R(function(){return new j},function(t){t.reset()})
function M(){var t=yt,e=null
return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function j(){this.next=this.b=this.a=null}L.prototype.add=function(t,e){var n=x.get()
n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},j.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},j.prototype.reset=function(){this.next=this.b=this.a=null}
var U=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(c(t))return c(e)&&1==e.length?t.indexOf(e,0):-1
for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n
return-1},V=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var i=t.length,r=c(t)?t.split(""):t,o=0;o<i;o++)o in r&&e.call(n,r[o],o,t)},K=Array.prototype.map?function(t,e){return Array.prototype.map.call(t,e,void 0)}:function(t,e){for(var n=t.length,i=Array(n),r=c(t)?t.split(""):t,o=0;o<n;o++)o in r&&(i[o]=e.call(void 0,r[o],o,t))
return i},F=Array.prototype.some?function(t,e){return Array.prototype.some.call(t,e,void 0)}:function(t,e){for(var n=t.length,i=c(t)?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t))return!0
return!1}
function q(t,e){return 0<=U(t,e)}function H(t,e){var n
return(n=0<=(e=U(t,e)))&&Array.prototype.splice.call(t,e,1),n}function B(t,e){!function(t,e){for(var n=c(t)?t.split(""):t,i=t.length-1;0<=i;--i)i in n&&e.call(void 0,n[i],i,t)}(t,function(n,i){e.call(void 0,n,i,t)&&Array.prototype.splice.call(t,i,1).length})}function G(t){return Array.prototype.concat.apply([],arguments)}function W(t){var e=t.length
if(0<e){for(var n=Array(e),i=0;i<e;i++)n[i]=t[i]
return n}return[]}var X,J=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},z=/&/g,Y=/</g,$=/>/g,Z=/"/g,Q=/'/g,tt=/\x00/g,et=/[\x00&<>"']/
function nt(t,e){return-1!=t.indexOf(e)}function it(t,e){return t<e?-1:t>e?1:0}t:{var rt=u.navigator
if(rt){var ot=rt.userAgent
if(ot){X=ot
break t}}X=""}function at(t){return nt(X,t)}function st(t,e){for(var n in t)e.call(void 0,t[n],n,t)}function ut(t){for(var e in t)return!1
return!0}function ct(t){var e,n={}
for(e in t)n[e]=t[e]
return n}var ht,lt,ft="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function dt(t,e){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r])t[n]=i[n]
for(var o=0;o<ft.length;o++)n=ft[o],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function pt(t,e){for(var n=t.split("%s"),i="",r=Array.prototype.slice.call(arguments,1);r.length&&1<n.length;)i+=n.shift()+r.shift()
return i+n.join("%s")}function vt(t){return et.test(t)&&(-1!=t.indexOf("&")&&(t=t.replace(z,"&amp;")),-1!=t.indexOf("<")&&(t=t.replace(Y,"&lt;")),-1!=t.indexOf(">")&&(t=t.replace($,"&gt;")),-1!=t.indexOf('"')&&(t=t.replace(Z,"&quot;")),-1!=t.indexOf("'")&&(t=t.replace(Q,"&#39;")),-1!=t.indexOf("\0")&&(t=t.replace(tt,"&#0;"))),t}function mt(t){u.setTimeout(function(){throw t},0)}function gt(t,e){lt||function(){if(u.Promise&&u.Promise.resolve){var t=u.Promise.resolve(void 0)
lt=function(){t.then(wt)}}else lt=function(){var t=wt
!b(u.setImmediate)||u.Window&&u.Window.prototype&&!at("Edge")&&u.Window.prototype.setImmediate==u.setImmediate?(ht||(ht=function(){var t=u.MessageChannel
if(void 0===t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!at("Presto")&&(t=function(){var t=document.createElement("IFRAME")
t.style.display="none",t.src="",document.documentElement.appendChild(t)
var e=t.contentWindow;(t=e.document).open(),t.write(""),t.close()
var n="callImmediate"+Math.random(),i="file:"==e.location.protocol?"*":e.location.protocol+"//"+e.location.host
t=E(function(t){"*"!=i&&t.origin!=i||t.data!=n||this.port1.onmessage()},this),e.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(n,i)}}}),void 0!==t&&!at("Trident")&&!at("MSIE")){var e=new t,n={},i=n
return e.port1.onmessage=function(){if(void 0!==n.next){var t=(n=n.next).yb
n.yb=null,t()}},function(t){i.next={yb:t},i=i.next,e.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(t){var e=document.createElement("SCRIPT")
e.onreadystatechange=function(){e.onreadystatechange=null,e.parentNode.removeChild(e),e=null,t(),t=null},document.documentElement.appendChild(e)}:function(t){u.setTimeout(t,0)}}()),ht(t)):u.setImmediate(t)}}(),bt||(lt(),bt=!0),yt.add(t,e)}var bt=!1,yt=new L
function wt(){for(var t;t=M();){try{t.a.call(t.b)}catch(t){mt(t)}D(x,t)}bt=!1}function It(t,e){if(this.a=Tt,this.i=void 0,this.f=this.b=this.c=null,this.g=this.h=!1,t!=d)try{var n=this
t.call(e,function(t){Lt(n,kt,t)},function(t){if(!(t instanceof Ft))try{if(t instanceof Error)throw t
throw Error("Promise rejected.")}catch(t){}Lt(n,Et,t)})}catch(t){Lt(this,Et,t)}}var Tt=0,kt=2,Et=3
function St(){this.next=this.f=this.b=this.g=this.a=null,this.c=!1}St.prototype.reset=function(){this.f=this.b=this.g=this.a=null,this.c=!1}
var At=new R(function(){return new St},function(t){t.reset()})
function Nt(t,e,n){var i=At.get()
return i.g=t,i.b=e,i.f=n,i}function _t(t){if(t instanceof It)return t
var e=new It(d)
return Lt(e,kt,t),e}function Ot(t){return new It(function(e,n){n(t)})}function Pt(t,e,n){xt(t,e,n,null)||gt(S(e,t))}function Ct(t){return new It(function(e){var n=t.length,i=[]
if(n)for(var r=function(t,r,o){n--,i[t]=r?{Eb:!0,value:o}:{Eb:!1,reason:o},0==n&&e(i)},o=0;o<t.length;o++)Pt(t[o],S(r,o,!0),S(r,o,!1))
else e(i)})}function Rt(t,e){t.b||t.a!=kt&&t.a!=Et||Mt(t),t.f?t.f.next=e:t.b=e,t.f=e}function Dt(t,e,n,i){var r=Nt(null,null,null)
return r.a=new It(function(t,o){r.g=e?function(n){try{var r=e.call(i,n)
t(r)}catch(t){o(t)}}:t,r.b=n?function(e){try{var r=n.call(i,e)
void 0===r&&e instanceof Ft?o(e):t(r)}catch(t){o(t)}}:o}),r.a.c=t,Rt(t,r),r.a}function Lt(t,e,n){t.a==Tt&&(t===n&&(e=Et,n=new TypeError("Promise cannot resolve to itself")),t.a=1,xt(n,t.Lc,t.Mc,t)||(t.i=n,t.a=e,t.c=null,Mt(t),e!=Et||n instanceof Ft||function(t,e){t.g=!0,gt(function(){t.g&&Kt.call(null,e)})}(t,n)))}function xt(t,e,n,i){if(t instanceof It)return Rt(t,Nt(e||d,n||null,i)),!0
if(_(t))return t.then(e,n,i),!0
if(y(t))try{var r=t.then
if(b(r))return function(t,e,n,i,r){function o(t){a||(a=!0,i.call(r,t))}var a=!1
try{e.call(t,function(t){a||(a=!0,n.call(r,t))},o)}catch(t){o(t)}}(t,r,e,n,i),!0}catch(t){return n.call(i,t),!0}return!1}function Mt(t){t.h||(t.h=!0,gt(t.Wb,t))}function jt(t){var e=null
return t.b&&(e=t.b,t.b=e.next,e.next=null),t.b||(t.f=null),e}function Ut(t,e,n,i){if(n==Et&&e.b&&!e.c)for(;t&&t.g;t=t.c)t.g=!1
if(e.a)e.a.c=null,Vt(e,n,i)
else try{e.c?e.g.call(e.f):Vt(e,n,i)}catch(t){Kt.call(null,t)}D(At,e)}function Vt(t,e,n){e==kt?t.g.call(t.f,n):t.b&&t.b.call(t.f,n)}It.prototype.then=function(t,e,n){return Dt(this,b(t)?t:null,b(e)?e:null,n)},It.prototype.$goog_Thenable=!0,(t=It.prototype).ia=function(t,e){return(t=Nt(t,t,e)).c=!0,Rt(this,t),this},t.s=function(t,e){return Dt(this,null,t,e)},t.cancel=function(t){this.a==Tt&&gt(function(){!function t(e,n){if(e.a==Tt)if(e.c){var i=e.c
if(i.b){for(var r=0,o=null,a=null,s=i.b;s&&(s.c||(r++,s.a==e&&(o=s),!(o&&1<r)));s=s.next)o||(a=s)
o&&(i.a==Tt&&1==r?t(i,n):(a?((r=a).next==i.f&&(i.f=r),r.next=r.next.next):jt(i),Ut(i,o,Et,n)))}e.c=null}else Lt(e,Et,n)}(this,new Ft(t))},this)},t.Lc=function(t){this.a=Tt,Lt(this,kt,t)},t.Mc=function(t){this.a=Tt,Lt(this,Et,t)},t.Wb=function(){for(var t;t=jt(this);)Ut(this,t,this.a,this.i)
this.h=!1}
var Kt=mt
function Ft(t){O.call(this,t)}function qt(){0!=Ht&&(Bt[this[w]||(this[w]=++I)]=this),this.qa=this.qa,this.ja=this.ja}N(Ft,O),Ft.prototype.name="cancel"
var Ht=0,Bt={}
function Gt(t){if(!t.qa&&(t.qa=!0,t.va(),0!=Ht)){var e=t[w]||(t[w]=++I)
if(0!=Ht&&t.ja&&0<t.ja.length)throw Error(t+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.")
delete Bt[e]}}function Wt(t){return Wt[" "](t),t}qt.prototype.qa=!1,qt.prototype.va=function(){if(this.ja)for(;this.ja.length;)this.ja.shift()()},Wt[" "]=d
var Xt,Jt,zt=at("Opera"),Yt=at("Trident")||at("MSIE"),$t=at("Edge"),Zt=$t||Yt,Qt=at("Gecko")&&!(nt(X.toLowerCase(),"webkit")&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),te=nt(X.toLowerCase(),"webkit")&&!at("Edge")
function ee(){var t=u.document
return t?t.documentMode:void 0}t:{var ne="",ie=(Jt=X,Qt?/rv:([^\);]+)(\)|;)/.exec(Jt):$t?/Edge\/([\d\.]+)/.exec(Jt):Yt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Jt):te?/WebKit\/(\S+)/.exec(Jt):zt?/(?:Version)[ \/]?(\S+)/.exec(Jt):void 0)
if(ie&&(ne=ie?ie[1]:""),Yt){var re=ee()
if(null!=re&&re>parseFloat(ne)){Xt=String(re)
break t}}Xt=ne}var oe,ae={}
function se(t){return function(t,e){var n=ae
return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e()}(t,function(){for(var e=0,n=J(String(Xt)).split("."),i=J(String(t)).split("."),r=Math.max(n.length,i.length),o=0;0==e&&o<r;o++){var a=n[o]||"",s=i[o]||""
do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break
e=it(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||it(0==a[2].length,0==s[2].length)||it(a[2],s[2]),a=a[3],s=s[3]}while(0==e)}return 0<=e})}var ue=u.document
oe=ue&&Yt?ee()||("CSS1Compat"==ue.compatMode?parseInt(Xt,10):5):void 0
var ce=Object.freeze||function(t){return t},he=!Yt||9<=Number(oe),le=Yt&&!se("9"),fe=function(){if(!u.addEventListener||!Object.defineProperty)return!1
var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{u.addEventListener("test",d,e),u.removeEventListener("test",d,e)}catch(t){}return t}()
function de(t,e){this.type=t,this.b=this.target=e,this.Kb=!0}function pe(t,e){if(de.call(this,t?t.type:""),this.relatedTarget=this.b=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.b=e,e=t.relatedTarget){if(Qt){t:{try{Wt(e.nodeName)
var r=!0
break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)
this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=c(t.pointerType)?t.pointerType:ve[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}de.prototype.preventDefault=function(){this.Kb=!1},N(pe,de)
var ve=ce({2:"touch",3:"pen",4:"mouse"})
pe.prototype.preventDefault=function(){pe.qb.preventDefault.call(this)
var t=this.a
if(t.preventDefault)t.preventDefault()
else if(t.returnValue=!1,le)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}},pe.prototype.f=function(){return this.a}
var me="closure_listenable_"+(1e6*Math.random()|0),ge=0
function be(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.Na=r,this.key=++ge,this.oa=this.Ia=!1}function ye(t){t.oa=!0,t.listener=null,t.proxy=null,t.src=null,t.Na=null}function we(t){this.src=t,this.a={},this.b=0}function Ie(t,e){var n=e.type
n in t.a&&H(t.a[n],e)&&(ye(e),0==t.a[n].length&&(delete t.a[n],t.b--))}function Te(t,e,n,i){for(var r=0;r<t.length;++r){var o=t[r]
if(!o.oa&&o.listener==e&&o.capture==!!n&&o.Na==i)return r}return-1}we.prototype.add=function(t,e,n,i,r){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++)
var a=Te(t,e,i,r)
return-1<a?(e=t[a],n||(e.Ia=!1)):((e=new be(e,this.src,o,!!i,r)).Ia=n,t.push(e)),e}
var ke="closure_lm_"+(1e6*Math.random()|0),Ee={}
function Se(t,e,n,i,r){if(i&&i.once)Ne(t,e,n,i,r)
else if(m(e))for(var o=0;o<e.length;o++)Se(t,e[o],n,i,r)
else n=Me(n),t&&t[me]?Ue(t,e,n,y(i)?!!i.capture:!!i,r):Ae(t,e,n,!1,i,r)}function Ae(t,e,n,i,r,o){if(!e)throw Error("Invalid event type")
var a=y(r)?!!r.capture:!!r,s=Le(t)
if(s||(t[ke]=s=new we(t)),!(n=s.add(e,n,i,a,o)).proxy)if(i=function(){var t=De,e=he?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n}
return e}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)fe||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r)
else if(t.attachEvent)t.attachEvent(Pe(e.toString()),i)
else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
t.addListener(i)}}function Ne(t,e,n,i,r){if(m(e))for(var o=0;o<e.length;o++)Ne(t,e[o],n,i,r)
else n=Me(n),t&&t[me]?Ve(t,e,n,y(i)?!!i.capture:!!i,r):Ae(t,e,n,!0,i,r)}function _e(t,e,n,i,r){if(m(e))for(var o=0;o<e.length;o++)_e(t,e[o],n,i,r)
else i=y(i)?!!i.capture:!!i,n=Me(n),t&&t[me]?(t=t.m,(e=String(e).toString())in t.a&&-1<(n=Te(o=t.a[e],n,i,r))&&(ye(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.a[e],t.b--))):t&&(t=Le(t))&&(e=t.a[e.toString()],t=-1,e&&(t=Te(e,n,i,r)),(n=-1<t?e[t]:null)&&Oe(n))}function Oe(t){if("number"!=typeof t&&t&&!t.oa){var e=t.src
if(e&&e[me])Ie(e.m,t)
else{var n=t.type,i=t.proxy
e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Pe(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Le(e))?(Ie(n,t),0==n.b&&(n.src=null,e[ke]=null)):ye(t)}}}function Pe(t){return t in Ee?Ee[t]:Ee[t]="on"+t}function Ce(t,e,n,i){var r=!0
if((t=Le(t))&&(e=t.a[e.toString()]))for(e=e.concat(),t=0;t<e.length;t++){var o=e[t]
o&&o.capture==n&&!o.oa&&(o=Re(o,i),r=r&&!1!==o)}return r}function Re(t,e){var n=t.listener,i=t.Na||t.src
return t.Ia&&Oe(t),n.call(i,e)}function De(t,e){if(t.oa)return!0
if(!he){if(!e)t:{e=["window","event"]
for(var n=u,i=0;i<e.length;i++)if(null==(n=n[e[i]])){e=null
break t}e=n}if(e=new pe(i=e,this),n=!0,!(0>i.keyCode||null!=i.returnValue)){t:{var r=!1
if(0==i.keyCode)try{i.keyCode=-1
break t}catch(t){r=!0}(r||null==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=e.b;r;r=r.parentNode)i.push(r)
for(t=t.type,r=i.length-1;0<=r;r--){e.b=i[r]
var o=Ce(i[r],t,!0,e)
n=n&&o}for(r=0;r<i.length;r++)e.b=i[r],o=Ce(i[r],t,!1,e),n=n&&o}return n}return Re(t,new pe(e,this))}function Le(t){return(t=t[ke])instanceof we?t:null}var xe="__closure_events_fn_"+(1e9*Math.random()>>>0)
function Me(t){return b(t)?t:(t[xe]||(t[xe]=function(e){return t.handleEvent(e)}),t[xe])}function je(){qt.call(this),this.m=new we(this),this.Pb=this,this.Wa=null}function Ue(t,e,n,i,r){t.m.add(String(e),n,!1,i,r)}function Ve(t,e,n,i,r){t.m.add(String(e),n,!0,i,r)}function Ke(t,e,n,i){if(!(e=t.m.a[String(e)]))return!0
e=e.concat()
for(var r=!0,o=0;o<e.length;++o){var a=e[o]
if(a&&!a.oa&&a.capture==n){var s=a.listener,u=a.Na||a.src
a.Ia&&Ie(t.m,a),r=!1!==s.call(u,i)&&r}}return r&&0!=i.Kb}function Fe(t,e,n){if(b(t))n&&(t=E(t,n))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function qe(t){var e=null
return new It(function(n,i){-1==(e=Fe(function(){n(void 0)},t))&&i(Error("Failed to schedule timer."))}).s(function(t){throw u.clearTimeout(e),t})}function He(t){if(t.S&&"function"==typeof t.S)return t.S()
if(c(t))return t.split("")
if(g(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i])
return e}for(i in e=[],n=0,t)e[n++]=t[i]
return e}function Be(t){if(t.U&&"function"==typeof t.U)return t.U()
if(!t.S||"function"!=typeof t.S){if(g(t)||c(t)){var e=[]
t=t.length
for(var n=0;n<t;n++)e.push(n)
return e}for(var i in e=[],n=0,t)e[n++]=i
return e}}function Ge(t,e){this.b={},this.a=[],this.c=0
var n=arguments.length
if(1<n){if(n%2)throw Error("Uneven number of arguments")
for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Ge)for(n=t.U(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]))
else for(i in t)this.set(i,t[i])}function We(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var i=t.a[e]
Xe(t.b,i)&&(t.a[n++]=i),e++}t.a.length=n}if(t.c!=t.a.length){var r={}
for(n=e=0;e<t.a.length;)Xe(r,i=t.a[e])||(t.a[n++]=i,r[i]=1),e++
t.a.length=n}}function Xe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}N(je,qt),je.prototype[me]=!0,je.prototype.addEventListener=function(t,e,n,i){Se(this,t,e,n,i)},je.prototype.removeEventListener=function(t,e,n,i){_e(this,t,e,n,i)},je.prototype.dispatchEvent=function(t){var e,n=this.Wa
if(n)for(e=[];n;n=n.Wa)e.push(n)
n=this.Pb
var i=t.type||t
if(c(t))t=new de(t,n)
else if(t instanceof de)t.target=t.target||n
else{var r=t
dt(t=new de(i,n),r)}if(r=!0,e)for(var o=e.length-1;0<=o;o--){var a=t.b=e[o]
r=Ke(a,i,!0,t)&&r}if(r=Ke(a=t.b=n,i,!0,t)&&r,r=Ke(a,i,!1,t)&&r,e)for(o=0;o<e.length;o++)r=Ke(a=t.b=e[o],i,!1,t)&&r
return r},je.prototype.va=function(){if(je.qb.va.call(this),this.m){var t,e=this.m
for(t in e.a){for(var n=e.a[t],i=0;i<n.length;i++)ye(n[i])
delete e.a[t],e.b--}}this.Wa=null},(t=Ge.prototype).S=function(){We(this)
for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]])
return t},t.U=function(){return We(this),this.a.concat()},t.clear=function(){this.b={},this.c=this.a.length=0},t.get=function(t,e){return Xe(this.b,t)?this.b[t]:e},t.set=function(t,e){Xe(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},t.forEach=function(t,e){for(var n=this.U(),i=0;i<n.length;i++){var r=n[i],o=this.get(r)
t.call(e,o,r,this)}}
var Je=/^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function ze(t,e){var n
this.b=this.i=this.f="",this.m=null,this.g=this.c="",this.h=!1,t instanceof ze?(this.h=void 0!==e?e:t.h,Ye(this,t.f),this.i=t.i,this.b=t.b,$e(this,t.m),this.c=t.c,Ze(this,bn(t.a)),this.g=t.g):t&&(n=String(t).match(Je))?(this.h=!!e,Ye(this,n[1]||"",!0),this.i=rn(n[2]||""),this.b=rn(n[3]||"",!0),$e(this,n[4]),this.c=rn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.g=rn(n[7]||"")):(this.h=!!e,this.a=new fn(null,this.h))}function Ye(t,e,n){t.f=n?rn(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function $e(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e)
t.m=e}else t.m=null}function Ze(t,e,n){e instanceof fn?(t.a=e,function(t,e){e&&!t.f&&(dn(t),t.c=null,t.a.forEach(function(t,e){var n=e.toLowerCase()
e!=n&&(vn(this,e),gn(this,n,t))},t)),t.f=e}(t.a,t.h)):(n||(e=on(e,hn)),t.a=new fn(e,t.h))}function Qe(t,e,n){t.a.set(e,n)}function tn(t,e){return t.a.get(e)}function en(t){return t instanceof ze?new ze(t):new ze(t,void 0)}function nn(t,e){var n=new ze(null,void 0)
return Ye(n,"https"),t&&(n.b=t),e&&(n.c=e),n}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return c(t)?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ze.prototype.toString=function(){var t=[],e=this.f
e&&t.push(on(e,sn,!0),":")
var n=this.b
return(n||"file"==e)&&(t.push("//"),(e=this.i)&&t.push(on(e,sn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.c)&&(this.b&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?cn:un,!0))),(n=this.a.toString())&&t.push("?",n),(n=this.g)&&t.push("#",on(n,ln)),t.join("")},ze.prototype.resolve=function(t){var e=new ze(this),n=!!t.f
n?Ye(e,t.f):n=!!t.i,n?e.i=t.i:n=!!t.b,n?e.b=t.b:n=null!=t.m
var i=t.c
if(n)$e(e,t.m)
else if(n=!!t.c){if("/"!=i.charAt(0))if(this.b&&!this.c)i="/"+i
else{var r=e.c.lastIndexOf("/");-1!=r&&(i=e.c.substr(0,r+1)+i)}if(".."==(r=i)||"."==r)i=""
else if(nt(r,"./")||nt(r,"/.")){i=0==r.lastIndexOf("/",0),r=r.split("/")
for(var o=[],a=0;a<r.length;){var s=r[a++]
"."==s?i&&a==r.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&a==r.length&&o.push("")):(o.push(s),i=!0)}i=o.join("/")}else i=r}return n?e.c=i:n=""!==t.a.toString(),n?Ze(e,bn(t.a)):n=!!t.g,n&&(e.g=t.g),e}
var sn=/[#\/\?@]/g,un=/[#\?:]/g,cn=/[#\?]/g,hn=/[#\?@]/g,ln=/#/g
function fn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function dn(t){t.a||(t.a=new Ge,t.b=0,t.c&&function(t,e){if(t){t=t.split("&")
for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null
if(0<=i){var o=t[n].substring(0,i)
r=t[n].substring(i+1)}else o=t[n]
e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.c,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function pn(t){var e=Be(t)
if(void 0===e)throw Error("Keys are undefined")
var n=new fn(null,void 0)
t=He(t)
for(var i=0;i<e.length;i++){var r=e[i],o=t[i]
m(o)?gn(n,r,o):n.add(r,o)}return n}function vn(t,e){dn(t),e=yn(t,e),Xe(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,Xe((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&We(t)))}function mn(t,e){return dn(t),e=yn(t,e),Xe(t.a.b,e)}function gn(t,e,n){vn(t,e),0<n.length&&(t.c=null,t.a.set(yn(t,e),W(n)),t.b+=n.length)}function bn(t){var e=new fn
return e.c=t.c,t.a&&(e.a=new Ge(t.a),e.b=t.b),e}function yn(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}(t=fn.prototype).add=function(t,e){dn(this),this.c=null,t=yn(this,t)
var n=this.a.get(t)
return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},t.clear=function(){this.a=this.c=null,this.b=0},t.forEach=function(t,e){dn(this),this.a.forEach(function(n,i){V(n,function(n){t.call(e,n,i,this)},this)},this)},t.U=function(){dn(this)
for(var t=this.a.S(),e=this.a.U(),n=[],i=0;i<e.length;i++)for(var r=t[i],o=0;o<r.length;o++)n.push(e[i])
return n},t.S=function(t){dn(this)
var e=[]
if(c(t))mn(this,t)&&(e=G(e,this.a.get(yn(this,t))))
else{t=this.a.S()
for(var n=0;n<t.length;n++)e=G(e,t[n])}return e},t.set=function(t,e){return dn(this),this.c=null,mn(this,t=yn(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},t.get=function(t,e){return t&&0<(t=this.S(t)).length?String(t[0]):e},t.toString=function(){if(this.c)return this.c
if(!this.a)return""
for(var t=[],e=this.a.U(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i))
i=this.S(i)
for(var o=0;o<i.length;o++){var a=r
""!==i[o]&&(a+="="+encodeURIComponent(String(i[o]))),t.push(a)}}return this.c=t.join("&")}
var wn=!Yt||9<=Number(oe)
function In(t,e){this.a=t===En&&e||"",this.b=kn}function Tn(t){return t instanceof In&&t.constructor===In&&t.b===kn?t.a:(C("expected object of type Const, got '"+t+"'"),"type_error:Const")}In.prototype.na=!0,In.prototype.ma=function(){return this.a},In.prototype.toString=function(){return"Const{"+this.a+"}"}
var kn={},En={}
function Sn(){this.a="",this.b=Pn}function An(t){return t instanceof Sn&&t.constructor===Sn&&t.b===Pn?t.a:(C("expected object of type TrustedResourceUrl, got '"+t+"' of type "+p(t)),"type_error:TrustedResourceUrl")}function Nn(t,e){var n=Tn(t)
if(!On.test(n))throw Error("Invalid TrustedResourceUrl format: "+n)
return function(t){var e=new Sn
return e.a=t,e}(t=n.replace(_n,function(t,i){if(!Object.prototype.hasOwnProperty.call(e,i))throw Error('Found marker, "'+i+'", in format string, "'+n+'", but no valid label mapping found in args: '+JSON.stringify(e))
return(t=e[i])instanceof In?Tn(t):encodeURIComponent(String(t))}))}Sn.prototype.na=!0,Sn.prototype.ma=function(){return this.a.toString()},Sn.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"}
var _n=/%{(\w+)}/g,On=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^\/\\]|[^:\/\\%]+\/|[^:\/\\%]*[?#]|about:blank#)/i,Pn={}
function Cn(){this.a="",this.b=xn}function Rn(t){return t instanceof Cn&&t.constructor===Cn&&t.b===xn?t.a:(C("expected object of type SafeUrl, got '"+t+"' of type "+p(t)),"type_error:SafeUrl")}Cn.prototype.na=!0,Cn.prototype.ma=function(){return this.a.toString()},Cn.prototype.toString=function(){return"SafeUrl{"+this.a+"}"}
var Dn=/^(?:(?:https?|mailto|ftp):|[^:\/?#]*(?:[\/?#]|$))/i
function Ln(t){return t instanceof Cn?t:(t="object"==o(t)&&t.na?t.ma():String(t),Dn.test(t)||(t="about:invalid#zClosurez"),Mn(t))}var xn={}
function Mn(t){var e=new Cn
return e.a=t,e}function jn(){this.a="",this.b=Un}Mn("about:blank"),jn.prototype.na=!0,jn.prototype.ma=function(){return this.a.toString()},jn.prototype.toString=function(){return"SafeHtml{"+this.a+"}"}
var Un={}
function Vn(t){var e=new jn
return e.a=t,e}function Kn(t){var e=document
return c(t)?e.getElementById(t):t}function Fn(t,e){st(e,function(e,n){e&&"object"==o(e)&&e.na&&(e=e.ma()),"style"==n?t.style.cssText=e:"class"==n?t.className=e:"for"==n?t.htmlFor=e:qn.hasOwnProperty(n)?t.setAttribute(qn[n],e):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?t.setAttribute(n,e):t[n]=e})}Vn("<!DOCTYPE html>"),Vn(""),Vn("<br>")
var qn={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"}
function Hn(t){if(t&&"number"==typeof t.length){if(y(t))return"function"==typeof t.item||"string"==typeof t.item
if(b(t))return"function"==typeof t.item}return!1}function Bn(t){var e=[]
return function t(e,n,i){if(null==n)i.push("null")
else{if("object"==o(n)){if(m(n)){var r=n
n=r.length,i.push("[")
for(var a="",s=0;s<n;s++)i.push(a),t(e,r[s],i),a=","
return void i.push("]")}if(!(n instanceof String||n instanceof Number||n instanceof Boolean)){for(r in i.push("{"),a="",n)Object.prototype.hasOwnProperty.call(n,r)&&"function"!=typeof(s=n[r])&&(i.push(a),Jn(r,i),i.push(":"),t(e,s,i),a=",")
return void i.push("}")}n=n.valueOf()}switch(o(n)){case"string":Jn(n,i)
break
case"number":i.push(isFinite(n)&&!isNaN(n)?String(n):"null")
break
case"boolean":i.push(String(n))
break
case"function":i.push("null")
break
default:throw Error("Unknown type: "+o(n))}}}(new Gn,t,e),e.join("")}function Gn(){}var Wn={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Xn=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g
function Jn(t,e){e.push('"',t.replace(Xn,function(t){var e=Wn[t]
return e||(e="\\u"+(65536|t.charCodeAt(0)).toString(16).substr(1),Wn[t]=e),e}),'"')}function zn(){var t=pi()
return Yt&&!!oe&&11==oe||/Edge\/\d+/.test(t)}function Yn(){return u.window&&u.window.location.href||self&&self.location&&self.location.href||""}function $n(t,e){e=e||u.window
var n="about:blank"
t&&(n=Rn(Ln(t)).toString()),e.location.href=n}function Zn(t){return!!((t=(t||pi()).toLowerCase()).match(/android/)||t.match(/webos/)||t.match(/iphone|ipad|ipod/)||t.match(/blackberry/)||t.match(/windows phone/)||t.match(/iemobile/))}function Qn(t){t=t||u.window
try{t.close()}catch(t){}}function ti(t,e,n){var i=Math.floor(1e9*Math.random()).toString()
e=e||500,n=n||600
var r=(window.screen.availHeight-n)/2,a=(window.screen.availWidth-e)/2
for(s in e={width:e,height:n,top:0<r?r:0,left:0<a?a:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},n=pi().toLowerCase(),i&&(e.target=i,nt(n,"crios/")&&(e.target="_blank")),li(pi())==ci&&(t=t||"http://localhost",e.scrollbars=!0),n=t||"",(t=e)||(t={}),i=window,e=n instanceof Cn?n:Ln(void 0!==n.href?n.href:String(n)),n=t.target||n.target,r=[],t)switch(s){case"width":case"height":case"top":case"left":r.push(s+"="+t[s])
break
case"target":case"noopener":case"noreferrer":break
default:r.push(s+"="+(t[s]?1:0))}var s=r.join(",")
if((at("iPhone")&&!at("iPod")&&!at("iPad")||at("iPad")||at("iPod"))&&i.navigator&&i.navigator.standalone&&n&&"_self"!=n?(s=i.document.createElement("A"),e instanceof Cn||e instanceof Cn||(e="object"==o(e)&&e.na?e.ma():String(e),Dn.test(e)||(e="about:invalid#zClosurez"),e=Mn(e)),s.href=Rn(e),s.setAttribute("target",n),t.noreferrer&&s.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,i,1),s.dispatchEvent(t),s={}):t.noreferrer?(s=i.open("",n,s),t=Rn(e).toString(),s&&(Zt&&nt(t,";")&&(t="'"+t.replace(/'/g,"%27")+"'"),s.opener=null,t=Vn('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+vt(t)+'">'),s.document.write(function(t){return t instanceof jn&&t.constructor===jn&&t.b===Un?t.a:(C("expected object of type SafeHtml, got '"+t+"' of type "+p(t)),"type_error:SafeHtml")}(t)),s.document.close())):(s=i.open(Rn(e).toString(),n,s))&&t.noopener&&(s.opener=null),s)try{s.focus()}catch(t){}return s}var ei=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ni=/^[^@]+@[^@]+$/
function ii(){var t=null
return new It(function(e){"complete"==u.document.readyState?e():(t=function(){e()},Ne(window,"load",t))}).s(function(e){throw _e(window,"load",t),e})}function ri(t){return t=t||pi(),!("file:"!==yi()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function oi(){var t=u.window
try{return!(!t||t==t.top)}catch(t){return!1}}function ai(){return void 0!==u.WorkerGlobalScope&&"function"==typeof u.importScripts}function si(){return r.a.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":r.a.INTERNAL.hasOwnProperty("node")?"Node":ai()?"Worker":"Browser"}function ui(){var t=si()
return"ReactNative"===t||"Node"===t}var ci="Firefox",hi="Chrome"
function li(t){var e=t.toLowerCase()
return nt(e,"opera/")||nt(e,"opr/")||nt(e,"opios/")?"Opera":nt(e,"iemobile")?"IEMobile":nt(e,"msie")||nt(e,"trident/")?"IE":nt(e,"edge/")?"Edge":nt(e,"firefox/")?ci:nt(e,"silk/")?"Silk":nt(e,"blackberry")?"Blackberry":nt(e,"webos")?"Webos":!nt(e,"safari/")||nt(e,"chrome/")||nt(e,"crios/")||nt(e,"android")?!nt(e,"chrome/")&&!nt(e,"crios/")||nt(e,"edge/")?nt(e,"android")?"Android":(t=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==t.length?t[1]:"Other":hi:"Safari"}var fi={Sc:"FirebaseCore-web",Uc:"FirebaseUI-web"}
function di(t,e){e=e||[]
var n,i=[],r={}
for(n in fi)r[fi[n]]=!0
for(n=0;n<e.length;n++)void 0!==r[e[n]]&&(delete r[e[n]],i.push(e[n]))
return i.sort(),(e=i).length||(e=["FirebaseCore-web"]),"Browser"===(i=si())?i=li(r=pi()):"Worker"===i&&(i=li(r=pi())+"-"+i),i+"/JsCore/"+t+"/"+e.join(",")}function pi(){return u.navigator&&u.navigator.userAgent||""}function vi(t,e){t=t.split("."),e=e||u
for(var n=0;n<t.length&&"object"==o(e)&&null!=e;n++)e=e[t[n]]
return n!=t.length&&(e=void 0),e}function mi(){try{var t=u.localStorage,e=Ei()
if(t)return t.setItem(e,"1"),t.removeItem(e),!zn()||!!u.indexedDB}catch(t){return ai()&&!!u.indexedDB}return!1}function gi(){return(bi()||"chrome-extension:"===yi()||ri())&&!ui()&&mi()&&!ai()}function bi(){return"http:"===yi()||"https:"===yi()}function yi(){return u.location&&u.location.protocol||null}function wi(t){return!Zn(t=t||pi())&&li(t)!=ci}function Ii(t){return void 0===t?null:Bn(t)}function Ti(t){var e,n={}
for(e in t)t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e]&&(n[e]=t[e])
return n}function ki(t){if(null!==t)return JSON.parse(t)}function Ei(t){return t||Math.floor(1e9*Math.random()).toString()}function Si(t){return"Safari"!=li(t=t||pi())&&!t.toLowerCase().match(/iphone|ipad|ipod/)}function Ai(){var t=u.___jsl
if(t&&t.H)for(var e in t.H)if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=t.H[e].L.concat(),t.CP)for(var n=0;n<t.CP.length;n++)t.CP[n]=null}function Ni(t,e){if(t>e)throw Error("Short delay should be less than long delay!")
this.a=t,this.c=e,t=pi(),e=si(),this.b=Zn(t)||"ReactNative"===e}function _i(){var t=u.document
return!t||void 0===t.visibilityState||"visible"==t.visibilityState}function Oi(t){try{var e=new Date(parseInt(t,10))
if(!isNaN(e.getTime())&&!/[^0-9]/.test(t))return e.toUTCString()}catch(t){}return null}function Pi(){return!(!vi("fireauth.oauthhelper",u)&&!vi("fireauth.iframe",u))}Ni.prototype.get=function(){var t=u.navigator
return!t||"boolean"!=typeof t.onLine||!bi()&&"chrome-extension:"!==yi()&&void 0===t.connection||t.onLine?this.b?this.c:this.a:Math.min(5e3,this.a)}
var Ci,Ri={}
function Di(t){Ri[t]||(Ri[t]=!0,"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t))}try{var Li={}
Object.defineProperty(Li,"abcd",{configurable:!0,enumerable:!0,value:1}),Object.defineProperty(Li,"abcd",{configurable:!0,enumerable:!0,value:2}),Ci=2==Li.abcd}catch(Jt){Ci=!1}function xi(t,e,n){Ci?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:n}):t[e]=n}function Mi(t,e){if(e)for(var n in e)e.hasOwnProperty(n)&&xi(t,n,e[n])}function ji(t){var e={}
return Mi(e,t),e}function Ui(t){var e=t
if("object"==o(t)&&null!=t)for(var n in e="length"in t?[]:{},t)xi(e,n,Ui(t[n]))
return e}function Vi(t){var e={},n=t[Fi],i=t[qi]
if(!(t=t[Hi])||t!=Ki&&!n)throw Error("Invalid provider user info!")
e[Gi]=i||null,e[Bi]=n||null,xi(this,Xi,t),xi(this,Wi,Ui(e))}var Ki="EMAIL_SIGNIN",Fi="email",qi="newEmail",Hi="requestType",Bi="email",Gi="fromEmail",Wi="data",Xi="operation"
function Ji(t,e){this.code=Yi+t,this.message=e||$i[t]||""}function zi(t){var e=t&&t.code
return e?new Ji(e.substring(Yi.length),t.message):null}N(Ji,Error),Ji.prototype.w=function(){return{code:this.code,message:this.message}},Ji.prototype.toJSON=function(){return this.w()}
var Yi="auth/",$i={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The OIDC ID token requires a valid unhashed nonce.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."}
function Zi(t){var e=t[ir]
if(void 0===e)throw new Ji("missing-continue-uri")
if("string"!=typeof e||"string"==typeof e&&!e.length)throw new Ji("invalid-continue-uri")
this.h=e,this.b=this.a=null,this.g=!1
var n=t[Qi]
if(n&&"object"===o(n)){e=n[ar]
var i=n[rr]
if(n=n[or],"string"==typeof e&&e.length){if(this.a=e,void 0!==i&&"boolean"!=typeof i)throw new Ji("argument-error",rr+" property must be a boolean when specified.")
if(this.g=!!i,void 0!==n&&("string"!=typeof n||"string"==typeof n&&!n.length))throw new Ji("argument-error",or+" property must be a non empty string when specified.")
this.b=n||null}else{if(void 0!==e)throw new Ji("argument-error",ar+" property must be a non empty string when specified.")
if(void 0!==i||void 0!==n)throw new Ji("missing-android-pkg-name")}}else if(void 0!==n)throw new Ji("argument-error",Qi+" property must be a non null object when specified.")
if(this.f=null,(e=t[nr])&&"object"===o(e)){if("string"==typeof(e=e[sr])&&e.length)this.f=e
else if(void 0!==e)throw new Ji("argument-error",sr+" property must be a non empty string when specified.")}else if(void 0!==e)throw new Ji("argument-error",nr+" property must be a non null object when specified.")
if(void 0!==(e=t[er])&&"boolean"!=typeof e)throw new Ji("argument-error",er+" property must be a boolean when specified.")
if(this.c=!!e,void 0!==(t=t[tr])&&("string"!=typeof t||"string"==typeof t&&!t.length))throw new Ji("argument-error",tr+" property must be a non empty string when specified.")
this.i=t||null}var Qi="android",tr="dynamicLinkDomain",er="handleCodeInApp",nr="iOS",ir="url",rr="installApp",or="minimumVersion",ar="packageName",sr="bundleId"
function ur(t){var e={}
for(var n in e.continueUrl=t.h,e.canHandleCodeInApp=t.c,(e.androidPackageName=t.a)&&(e.androidMinimumVersion=t.b,e.androidInstallApp=t.g),e.iOSBundleId=t.f,e.dynamicLinkDomain=t.i,e)null===e[n]&&delete e[n]
return e}var cr=null,hr=null
function lr(t){this.c=t.sub,A(),this.a=t.provider_id||t.firebase&&t.firebase.sign_in_provider||null,this.b=!!t.is_anonymous||"anonymous"==this.a}function fr(t){return(t=dr(t))&&t.sub&&t.iss&&t.aud&&t.exp?new lr(t):null}function dr(t){if(!t)return null
if(3!=(t=t.split(".")).length)return null
for(var e=(4-(t=t[1]).length%4)%4,n=0;n<e;n++)t+="."
try{return JSON.parse(function(t){var e=""
return function(t,e){function n(e){for(;i<t.length;){var n=t.charAt(i++),r=hr[n]
if(null!=r)return r
if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n)}return e}!function(){if(!cr){cr={},hr={}
for(var t=0;65>t;t++)cr[t]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t),hr[cr[t]]=t,62<=t&&(hr["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)]=t)}}()
for(var i=0;;){var r=n(-1),o=n(0),a=n(64),s=n(64)
if(64===s&&-1===r)break
e(r<<2|o>>4),64!=a&&(e(o<<4&240|a>>2),64!=s&&e(a<<6&192|s))}}(t,function(t){e+=String.fromCharCode(t)}),e}(t))}catch(t){}return null}lr.prototype.f=function(){return this.b}
var pr,vr={Yc:{bb:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",jb:"https://securetoken.googleapis.com/v1/token",id:"p"},$c:{bb:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",jb:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},ad:{bb:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",jb:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}}
function mr(t){for(var e in vr)if(vr[e].id===t)return{firebaseEndpoint:(t=vr[e]).bb,secureTokenEndpoint:t.jb}
return null}pr=mr("__EID__")?"__EID__":void 0
var gr="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),br=["client_id","response_type","scope","redirect_uri","state"],yr={Tc:{Oa:"locale",Ba:500,Aa:600,Pa:"facebook.com",ib:br},Vc:{Oa:null,Ba:500,Aa:620,Pa:"github.com",ib:br},Wc:{Oa:"hl",Ba:515,Aa:680,Pa:"google.com",ib:br},bd:{Oa:"lang",Ba:485,Aa:705,Pa:"twitter.com",ib:gr}}
function wr(t){for(var e in yr)if(yr[e].Pa==t)return yr[e]
return null}function Ir(t){var e={}
e["facebook.com"]=Ar,e["google.com"]=_r,e["github.com"]=Nr,e["twitter.com"]=Or
var n=t&&t[kr]
try{if(n)return e[n]?new e[n](t):new Sr(t)
if(void 0!==t[Tr])return new Er(t)}catch(t){}return null}var Tr="idToken",kr="providerId"
function Er(t){var e=t[kr]
if(!e&&t[Tr]){var n=fr(t[Tr])
n&&n.a&&(e=n.a)}if(!e)throw Error("Invalid additional user info!")
"anonymous"!=e&&"custom"!=e||(e=null),n=!1,void 0!==t.isNewUser?n=!!t.isNewUser:"identitytoolkit#SignupNewUserResponse"===t.kind&&(n=!0),xi(this,"providerId",e),xi(this,"isNewUser",n)}function Sr(t){Er.call(this,t),xi(this,"profile",Ui((t=ki(t.rawUserInfo||"{}"))||{}))}function Ar(t){if(Sr.call(this,t),"facebook.com"!=this.providerId)throw Error("Invalid provider ID!")}function Nr(t){if(Sr.call(this,t),"github.com"!=this.providerId)throw Error("Invalid provider ID!")
xi(this,"username",this.profile&&this.profile.login||null)}function _r(t){if(Sr.call(this,t),"google.com"!=this.providerId)throw Error("Invalid provider ID!")}function Or(t){if(Sr.call(this,t),"twitter.com"!=this.providerId)throw Error("Invalid provider ID!")
xi(this,"username",t.screenName||null)}function Pr(t){this.a=en(t)}function Cr(t){var e=en(t),n=tn(e,"link"),i=tn(en(n),"link")
return e=tn(e,"deep_link_id"),tn(en(e),"link")||e||i||n||t}function Rr(){}function Dr(t,e){return t.then(function(t){if(t[wa]){var n=fr(t[wa])
if(!n||e!=n.c)throw new Ji("user-mismatch")
return t}throw new Ji("user-mismatch")}).s(function(t){throw t&&t.code&&t.code==Yi+"user-not-found"?new Ji("user-mismatch"):t})}function Lr(t,e){if(!e)throw new Ji("internal-error","failed to construct a credential")
this.a=e,xi(this,"providerId",t),xi(this,"signInMethod",t)}function xr(t){return{pendingToken:t.a,requestUri:"http://localhost"}}function Mr(t){if(t&&t.providerId&&t.signInMethod&&0==t.providerId.indexOf("saml.")&&t.pendingToken)try{return new Lr(t.providerId,t.pendingToken)}catch(t){}return null}function jr(t,e,n){if(this.a=null,e.idToken||e.accessToken)e.idToken&&xi(this,"idToken",e.idToken),e.accessToken&&xi(this,"accessToken",e.accessToken),e.nonce&&!e.pendingToken&&xi(this,"nonce",e.nonce),e.pendingToken&&(this.a=e.pendingToken)
else{if(!e.oauthToken||!e.oauthTokenSecret)throw new Ji("internal-error","failed to construct a credential")
xi(this,"accessToken",e.oauthToken),xi(this,"secret",e.oauthTokenSecret)}xi(this,"providerId",t),xi(this,"signInMethod",n)}function Ur(t){var e={}
return t.idToken&&(e.id_token=t.idToken),t.accessToken&&(e.access_token=t.accessToken),t.secret&&(e.oauth_token_secret=t.secret),e.providerId=t.providerId,t.nonce&&!t.a&&(e.nonce=t.nonce),e={postBody:pn(e).toString(),requestUri:"http://localhost"},t.a&&(delete e.postBody,e.pendingToken=t.a),e}function Vr(t){if(t&&t.providerId&&t.signInMethod){var e={idToken:t.oauthIdToken,accessToken:t.oauthTokenSecret?null:t.oauthAccessToken,oauthTokenSecret:t.oauthTokenSecret,oauthToken:t.oauthTokenSecret&&t.oauthAccessToken,nonce:t.nonce,pendingToken:t.pendingToken}
try{return new jr(t.providerId,e,t.signInMethod)}catch(t){}}return null}function Kr(t,e){this.Cc=e||[],Mi(this,{providerId:t,isOAuthProvider:!0}),this.zb={},this.eb=(wr(t)||{}).Oa||null,this.ab=null}function Fr(t){if("string"!=typeof t||0!=t.indexOf("saml."))throw new Ji("argument-error",'SAML provider IDs must be prefixed with "saml."')
Kr.call(this,t,[])}function qr(t){Kr.call(this,t,br),this.a=[]}function Hr(){qr.call(this,"facebook.com")}function Br(t){if(!t)throw new Ji("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var e=t
return y(t)&&(e=t.accessToken),(new Hr).credential({accessToken:e})}function Gr(){qr.call(this,"github.com")}function Wr(t){if(!t)throw new Ji("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var e=t
return y(t)&&(e=t.accessToken),(new Gr).credential({accessToken:e})}function Xr(){qr.call(this,"google.com"),this.ua("profile")}function Jr(t,e){var n=t
return y(t)&&(n=t.idToken,e=t.accessToken),(new Xr).credential({idToken:n,accessToken:e})}function zr(){Kr.call(this,"twitter.com",gr)}function Yr(t,e){var n=t
if(y(n)||(n={oauthToken:t,oauthTokenSecret:e}),!n.oauthToken||!n.oauthTokenSecret)throw new Ji("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).")
return new jr("twitter.com",n,"twitter.com")}function $r(t,e,n){this.a=t,this.c=e,xi(this,"providerId","password"),xi(this,"signInMethod",n===Qr.EMAIL_LINK_SIGN_IN_METHOD?Qr.EMAIL_LINK_SIGN_IN_METHOD:Qr.EMAIL_PASSWORD_SIGN_IN_METHOD)}function Zr(t){return t&&t.email&&t.password?new $r(t.email,t.password,t.signInMethod):null}function Qr(){Mi(this,{providerId:"password",isOAuthProvider:!1})}function to(t,e){if(!(e=eo(e)))throw new Ji("argument-error","Invalid email link!")
return new $r(t,e,Qr.EMAIL_LINK_SIGN_IN_METHOD)}function eo(t){var e=tn((t=new Pr(t=Cr(t))).a,"oobCode")||null
return"signIn"===(tn(t.a,"mode")||null)&&e?e:null}function no(t){if(!(t.Ua&&t.Ta||t.Fa&&t.$))throw new Ji("internal-error")
this.a=t,xi(this,"providerId","phone"),xi(this,"signInMethod","phone")}function io(t){if(t&&"phone"===t.providerId&&(t.verificationId&&t.verificationCode||t.temporaryProof&&t.phoneNumber)){var e={}
return V(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(n){t[n]&&(e[n]=t[n])}),new no(e)}return null}function ro(t){return t.a.Fa&&t.a.$?{temporaryProof:t.a.Fa,phoneNumber:t.a.$}:{sessionInfo:t.a.Ua,code:t.a.Ta}}function oo(t){try{this.a=t||r.a.auth()}catch(t){throw new Ji("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")}Mi(this,{providerId:"phone",isOAuthProvider:!1})}function ao(t,e){if(!t)throw new Ji("missing-verification-id")
if(!e)throw new Ji("missing-verification-code")
return new no({Ua:t,Ta:e})}function so(t){if(t.temporaryProof&&t.phoneNumber)return new no({Fa:t.temporaryProof,$:t.phoneNumber})
var e=t&&t.providerId
if(!e||"password"===e)return null
var n=t&&t.oauthAccessToken,i=t&&t.oauthTokenSecret,r=t&&t.nonce,o=t&&t.oauthIdToken,a=t&&t.pendingToken
try{switch(e){case"google.com":return Jr(o,n)
case"facebook.com":return Br(n)
case"github.com":return Wr(n)
case"twitter.com":return Yr(n,i)
default:return n||i||o||a?a?0==e.indexOf("saml.")?new Lr(e,a):new jr(e,{pendingToken:a,idToken:t.oauthIdToken,accessToken:t.oauthAccessToken},e):new qr(e).credential({idToken:o,accessToken:n,rawNonce:r}):null}}catch(t){return null}}function uo(t){if(!t.isOAuthProvider)throw new Ji("invalid-oauth-provider")}function co(t,e,n,i,r,o){if(this.c=t,this.b=e||null,this.g=n||null,this.f=i||null,this.h=o||null,this.a=r||null,!this.g&&!this.a)throw new Ji("invalid-auth-event")
if(this.g&&this.a)throw new Ji("invalid-auth-event")
if(this.g&&!this.f)throw new Ji("invalid-auth-event")}function ho(t){return(t=t||{}).type?new co(t.type,t.eventId,t.urlResponse,t.sessionId,t.error&&zi(t.error),t.postBody):null}function lo(){this.b=null,this.a=[]}N(Sr,Er),N(Ar,Sr),N(Nr,Sr),N(_r,Sr),N(Or,Sr),Lr.prototype.la=function(t){return Ua(t,xr(this))},Lr.prototype.b=function(t,e){var n=xr(this)
return n.idToken=e,Va(t,n)},Lr.prototype.f=function(t,e){return Dr(Ka(t,xr(this)),e)},Lr.prototype.w=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}},jr.prototype.la=function(t){return Ua(t,Ur(this))},jr.prototype.b=function(t,e){var n=Ur(this)
return n.idToken=e,Va(t,n)},jr.prototype.f=function(t,e){return Dr(Ka(t,Ur(this)),e)},jr.prototype.w=function(){var t={providerId:this.providerId,signInMethod:this.signInMethod}
return this.idToken&&(t.oauthIdToken=this.idToken),this.accessToken&&(t.oauthAccessToken=this.accessToken),this.secret&&(t.oauthTokenSecret=this.secret),this.nonce&&(t.nonce=this.nonce),this.a&&(t.pendingToken=this.a),t},Kr.prototype.Da=function(t){return this.zb=ct(t),this},N(Fr,Kr),N(qr,Kr),qr.prototype.ua=function(t){return q(this.a,t)||this.a.push(t),this},qr.prototype.Fb=function(){return W(this.a)},qr.prototype.credential=function(t,e){var n
if(!(n=y(t)?{idToken:t.idToken||null,accessToken:t.accessToken||null,nonce:t.rawNonce||null}:{idToken:t||null,accessToken:e||null}).idToken&&!n.accessToken)throw new Ji("argument-error","credential failed: must provide the ID token and/or the access token.")
return new jr(this.providerId,n,this.providerId)},N(Hr,qr),xi(Hr,"PROVIDER_ID","facebook.com"),xi(Hr,"FACEBOOK_SIGN_IN_METHOD","facebook.com"),N(Gr,qr),xi(Gr,"PROVIDER_ID","github.com"),xi(Gr,"GITHUB_SIGN_IN_METHOD","github.com"),N(Xr,qr),xi(Xr,"PROVIDER_ID","google.com"),xi(Xr,"GOOGLE_SIGN_IN_METHOD","google.com"),N(zr,Kr),xi(zr,"PROVIDER_ID","twitter.com"),xi(zr,"TWITTER_SIGN_IN_METHOD","twitter.com"),$r.prototype.la=function(t){return this.signInMethod==Qr.EMAIL_LINK_SIGN_IN_METHOD?vs(t,Ja,{email:this.a,oobCode:this.c}):vs(t,ls,{email:this.a,password:this.c})},$r.prototype.b=function(t,e){return this.signInMethod==Qr.EMAIL_LINK_SIGN_IN_METHOD?vs(t,za,{idToken:e,email:this.a,oobCode:this.c}):vs(t,os,{idToken:e,email:this.a,password:this.c})},$r.prototype.f=function(t,e){return Dr(this.la(t),e)},$r.prototype.w=function(){return{email:this.a,password:this.c,signInMethod:this.signInMethod}},Mi(Qr,{PROVIDER_ID:"password"}),Mi(Qr,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"}),Mi(Qr,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"}),no.prototype.la=function(t){return t.Va(ro(this))},no.prototype.b=function(t,e){var n=ro(this)
return n.idToken=e,vs(t,ds,n)},no.prototype.f=function(t,e){var n=ro(this)
return n.operation="REAUTH",Dr(t=vs(t,ps,n),e)},no.prototype.w=function(){var t={providerId:"phone"}
return this.a.Ua&&(t.verificationId=this.a.Ua),this.a.Ta&&(t.verificationCode=this.a.Ta),this.a.Fa&&(t.temporaryProof=this.a.Fa),this.a.$&&(t.phoneNumber=this.a.$),t},oo.prototype.Va=function(t,e){var n=this.a.c
return _t(e.verify()).then(function(i){if(!c(i))throw new Ji("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.")
switch(e.type){case"recaptcha":return function(t,e){return vs(n,is,e)}(0,{phoneNumber:t,recaptchaToken:i}).then(function(t){return"function"==typeof e.reset&&e.reset(),t},function(t){throw"function"==typeof e.reset&&e.reset(),t})
default:throw new Ji("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')}})},Mi(oo,{PROVIDER_ID:"phone"}),Mi(oo,{PHONE_SIGN_IN_METHOD:"phone"}),co.prototype.getUid=function(){var t=[]
return t.push(this.c),this.b&&t.push(this.b),this.f&&t.push(this.f),this.i&&t.push(this.i),t.join("-")},co.prototype.w=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.h,error:this.a&&this.a.w()}}
var fo,po=null
function vo(t){var e="unauthorized-domain",n=void 0,i=en(t)
t=i.b,"chrome-extension"==(i=i.f)?n=pt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):"http"==i||"https"==i?n=pt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):e="operation-not-supported-in-this-environment",Ji.call(this,e,n)}function mo(t,e,n){Ji.call(this,t,n),(t=e||{}).Ab&&xi(this,"email",t.Ab),t.$&&xi(this,"phoneNumber",t.$),t.credential&&xi(this,"credential",t.credential)}function go(t){if(t.code){var e=t.code||""
0==e.indexOf(Yi)&&(e=e.substring(Yi.length))
var n={credential:so(t)}
if(t.email)n.Ab=t.email
else if(t.phoneNumber)n.$=t.phoneNumber
else if(!n.credential)return new Ji(e,t.message||void 0)
return new mo(e,n,t.message)}return null}function bo(){}function yo(t){return t.c||(t.c=t.b())}function wo(){}function Io(t){if(!t.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],n=0;n<e.length;n++){var i=e[n]
try{return new ActiveXObject(i),t.f=i}catch(t){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")}return t.f}function To(){}function ko(){this.a=new XDomainRequest,this.readyState=0,this.onreadystatechange=null,this.responseType=this.responseText=this.response="",this.status=-1,this.statusText="",this.a.onload=E(this.cc,this),this.a.onerror=E(this.Gb,this),this.a.onprogress=E(this.dc,this),this.a.ontimeout=E(this.hc,this)}function Eo(t,e){t.readyState=e,t.onreadystatechange&&t.onreadystatechange()}function So(t,e,n){this.reset(t,e,n,void 0,void 0)}function Ao(t){this.f=t,this.b=this.c=this.a=null}function No(t,e){this.name=t,this.value=e}lo.prototype.subscribe=function(t){var e=this
this.a.push(t),this.b||(this.b=function(t){for(var n=0;n<e.a.length;n++)e.a[n](t)},"function"==typeof(t=vi("universalLinks.subscribe",u))&&t(null,this.b))},lo.prototype.unsubscribe=function(t){B(this.a,function(e){return e==t})},N(vo,Ji),N(mo,Ji),mo.prototype.w=function(){var t={code:this.code,message:this.message}
this.email&&(t.email=this.email),this.phoneNumber&&(t.phoneNumber=this.phoneNumber)
var e=this.credential&&this.credential.w()
return e&&dt(t,e),t},mo.prototype.toJSON=function(){return this.w()},bo.prototype.c=null,N(wo,bo),wo.prototype.a=function(){var t=Io(this)
return t?new ActiveXObject(t):new XMLHttpRequest},wo.prototype.b=function(){var t={}
return Io(this)&&(t[0]=!0,t[1]=!0),t},fo=new wo,N(To,bo),To.prototype.a=function(){var t=new XMLHttpRequest
if("withCredentials"in t)return t
if("undefined"!=typeof XDomainRequest)return new ko
throw Error("Unsupported browser")},To.prototype.b=function(){return{}},(t=ko.prototype).open=function(t,e,n){if(null!=n&&!n)throw Error("Only async requests are supported.")
this.a.open(t,e)},t.send=function(t){if(t){if("string"!=typeof t)throw Error("Only string data is supported")
this.a.send(t)}else this.a.send()},t.abort=function(){this.a.abort()},t.setRequestHeader=function(){},t.getResponseHeader=function(t){return"content-type"==t.toLowerCase()?this.a.contentType:""},t.cc=function(){this.status=200,this.response=this.responseText=this.a.responseText,Eo(this,4)},t.Gb=function(){this.status=500,this.response=this.responseText="",Eo(this,4)},t.hc=function(){this.Gb()},t.dc=function(){this.status=200,Eo(this,1)},t.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType},So.prototype.a=null,So.prototype.reset=function(t,e,n,i,r){i||A(),delete this.a},No.prototype.toString=function(){return this.name}
var _o=new No("SEVERE",1e3),Oo=new No("WARNING",900),Po=new No("CONFIG",700),Co=new No("FINE",500)
Ao.prototype.log=function(t,e,n){if(t.value>=function t(e){return e.c?e.c:e.a?t(e.a):(C("Root logger has no level set."),null)}(this).value)for(b(e)&&(e=e()),t=new So(t,String(e),this.f),n&&(t.a=n),n=this;n;)n=n.a}
var Ro={},Do=null
function Lo(t){var e
if(Do||(Do=new Ao(""),Ro[""]=Do,Do.c=Po),!(e=Ro[t])){e=new Ao(t)
var n=t.lastIndexOf("."),i=t.substr(n+1);(n=Lo(t.substr(0,n))).b||(n.b={}),n.b[i]=e,e.a=n,Ro[t]=e}return e}function xo(t,e){t&&t.log(Co,e,void 0)}function Mo(t){this.f=t}function jo(t){je.call(this),this.u=t,this.readyState=Uo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.i=new Headers,this.b=null,this.o="GET",this.g="",this.a=!1,this.h=Lo("goog.net.FetchXmlHttp"),this.l=this.c=this.f=null}N(Mo,bo),Mo.prototype.a=function(){return new jo(this.f)},Mo.prototype.b=function(t){return function(){return t}}({}),N(jo,je)
var Uo=0
function Vo(t){t.c.read().then(t.bc.bind(t)).catch(t.Ma.bind(t))}function Ko(t,e){e&&t.f&&(t.status=t.f.status,t.statusText=t.f.statusText),t.readyState=4,t.f=null,t.c=null,t.l=null,Fo(t)}function Fo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function qo(t){je.call(this),this.headers=new Ge,this.D=t||null,this.c=!1,this.A=this.a=null,this.h=this.N=this.l="",this.f=this.I=this.i=this.G=!1,this.g=0,this.u=null,this.o=Ho,this.v=this.O=!1}(t=jo.prototype).open=function(t,e){if(this.readyState!=Uo)throw this.abort(),Error("Error reopening a connection")
this.o=t,this.g=e,this.readyState=1,Fo(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ")
this.a=!0
var e={headers:this.i,method:this.o,credentials:void 0,cache:void 0}
t&&(e.body=t),this.u.fetch(new Request(this.g,e)).then(this.gc.bind(this),this.Ma.bind(this))},t.abort=function(){this.response=this.responseText="",this.i=new Headers,this.status=0,this.c&&this.c.cancel("Request was aborted."),1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Ko(this,!1)),this.readyState=Uo},t.gc=function(t){this.a&&(this.f=t,this.b||(this.b=t.headers,this.readyState=2,Fo(this)),this.a&&(this.readyState=3,Fo(this),this.a&&("arraybuffer"===this.responseType?t.arrayBuffer().then(this.ec.bind(this),this.Ma.bind(this)):void 0!==u.ReadableStream&&"body"in t?(this.response=this.responseText="",this.c=t.body.getReader(),this.l=new TextDecoder,Vo(this)):t.text().then(this.fc.bind(this),this.Ma.bind(this)))))},t.bc=function(t){if(this.a){var e=this.l.decode(t.value?t.value:new Uint8Array(0),{stream:!t.done})
e&&(this.response=this.responseText+=e),t.done?Ko(this,!0):Fo(this),3==this.readyState&&Vo(this)}},t.fc=function(t){this.a&&(this.response=this.responseText=t,Ko(this,!0))},t.ec=function(t){this.a&&(this.response=t,Ko(this,!0))},t.Ma=function(t){var e=this.h
e&&e.log(Oo,"Failed to fetch url "+this.g,t instanceof Error?t:Error(t)),this.a&&Ko(this,!0)},t.setRequestHeader=function(t,e){this.i.append(t,e)},t.getResponseHeader=function(t){return this.b?this.b.get(t.toLowerCase())||"":((t=this.h)&&t.log(Oo,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")},t.getAllResponseHeaders=function(){if(!this.b){var t=this.h
return t&&t.log(Oo,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0),""}t=[]
for(var e=this.b.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next()
return t.join("\r\n")},N(qo,je)
var Ho=""
qo.prototype.b=Lo("goog.net.XhrIo")
var Bo=/^https?$/i,Go=["POST","PUT"]
function Wo(t){return"content-type"==t.toLowerCase()}function Xo(t,e){t.c=!1,t.a&&(t.f=!0,t.a.abort(),t.f=!1),t.h=e,Jo(t),Yo(t)}function Jo(t){t.G||(t.G=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function zo(t){if(t.c&&void 0!==s)if(t.A[1]&&4==Zo(t)&&2==Qo(t))xo(t.b,ta(t,"Local request error detected and ignored"))
else if(t.i&&4==Zo(t))Fe(t.Jb,0,t)
else if(t.dispatchEvent("readystatechange"),4==Zo(t)){xo(t.b,ta(t,"Request complete")),t.c=!1
try{var e,n=Qo(t)
t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0
break t
default:i=!1}if(!(e=i)){var r
if(r=0===n){var o=String(t.l).match(Je)[1]||null
if(!o&&u.self&&u.self.location){var a=u.self.location.protocol
o=a.substr(0,a.length-1)}r=!Bo.test(o?o.toLowerCase():"")}e=r}if(e)t.dispatchEvent("complete"),t.dispatchEvent("success")
else{try{var c=2<Zo(t)?t.a.statusText:""}catch(e){xo(t.b,"Can not get status: "+e.message),c=""}t.h=c+" ["+Qo(t)+"]",Jo(t)}}finally{Yo(t)}}}function Yo(t,e){if(t.a){$o(t)
var n=t.a,i=t.A[0]?d:null
t.a=null,t.A=null,e||t.dispatchEvent("ready")
try{n.onreadystatechange=i}catch(e){(t=t.b)&&t.log(_o,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}function $o(t){t.a&&t.v&&(t.a.ontimeout=null),t.u&&(u.clearTimeout(t.u),t.u=null)}function Zo(t){return t.a?t.a.readyState:0}function Qo(t){try{return 2<Zo(t)?t.a.status:-1}catch(t){return-1}}function ta(t,e){return e+" ["+t.N+" "+t.l+" "+Qo(t)+"]"}function ea(t){var e=fa
this.g=[],this.v=e,this.u=t||null,this.f=this.a=!1,this.c=void 0,this.l=this.A=this.i=!1,this.h=0,this.b=null,this.m=0}function na(t,e,n){t.a=!0,t.c=n,t.f=!e,aa(t)}function ia(t){if(t.a){if(!t.l)throw new sa(t)
t.l=!1}}function ra(t,e,n,i){t.g.push([e,n,i]),t.a&&aa(t)}function oa(t){return F(t.g,function(t){return b(t[1])})}function aa(t){if(t.h&&t.a&&oa(t)){var e=t.h,n=ha[e]
n&&(u.clearTimeout(n.a),delete ha[e]),t.h=0}t.b&&(t.b.m--,delete t.b),e=t.c
for(var i=n=!1;t.g.length&&!t.i;){var r=t.g.shift(),o=r[0],a=r[1]
if(r=r[2],o=t.f?a:o)try{var s=o.call(r||t.u,e)
void 0!==s&&(t.f=t.f&&(s==e||s instanceof Error),t.c=e=s),(_(e)||"function"==typeof u.Promise&&e instanceof u.Promise)&&(i=!0,t.i=!0)}catch(i){e=i,t.f=!0,oa(t)||(n=!0)}}t.c=e,i&&(s=E(t.o,t,!0),i=E(t.o,t,!1),e instanceof ea?(ra(e,s,i),e.A=!0):e.then(s,i)),n&&(e=new ca(e),ha[e.a]=e,t.h=e.a)}function sa(){O.call(this)}function ua(){O.call(this)}function ca(t){this.a=u.setTimeout(E(this.c,this),0),this.b=t}(t=qo.prototype).Ga=function(){void 0!==s&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",xo(this.b,ta(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))},t.abort=function(){this.a&&this.c&&(xo(this.b,ta(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Yo(this))},t.va=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Yo(this,!0)),qo.qb.va.call(this)},t.Jb=function(){this.qa||(this.I||this.i||this.f?zo(this):this.vc())},t.vc=function(){zo(this)},t.getResponse=function(){try{if(!this.a)return null
if("response"in this.a)return this.a.response
switch(this.o){case Ho:case"text":return this.a.responseText
case"arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var t=this.b
return t&&t.log(_o,"Response type "+this.o+" is not supported on this browser",void 0),null}catch(t){return xo(this.b,"Can not get response: "+t.message),null}},ea.prototype.cancel=function(t){if(this.a)this.c instanceof ea&&this.c.cancel()
else{if(this.b){var e=this.b
delete this.b,t?e.cancel(t):(e.m--,0>=e.m&&e.cancel())}this.v?this.v.call(this.u,this):this.l=!0,this.a||(t=new ua(this),ia(this),na(this,!1,t))}},ea.prototype.o=function(t,e){this.i=!1,na(this,t,e)},ea.prototype.then=function(t,e,n){var i,r,o=new It(function(t,e){i=t,r=e})
return ra(this,i,function(t){t instanceof ua?o.cancel():r(t)}),o.then(t,e,n)},ea.prototype.$goog_Thenable=!0,N(sa,O),sa.prototype.message="Deferred has already fired",sa.prototype.name="AlreadyCalledError",N(ua,O),ua.prototype.message="Deferred was canceled",ua.prototype.name="CanceledError",ca.prototype.c=function(){throw delete ha[this.a],this.b}
var ha={}
function la(t){var e={},n=e.document||document,i=An(t).toString(),r=document.createElement("SCRIPT"),o={Lb:r,Ga:void 0},a=new ea(o),s=null,c=null!=e.timeout?e.timeout:5e3
return 0<c&&(s=window.setTimeout(function(){da(r,!0)
var t=new ma(va,"Timeout reached for loading script "+i)
ia(a),na(a,!1,t)},c),o.Ga=s),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(da(r,e.dd||!1,s),ia(a),na(a,!0,null))},r.onerror=function(){da(r,!0,s)
var t=new ma(pa,"Error while loading script "+i)
ia(a),na(a,!1,t)},dt(o=e.attributes||{},{type:"text/javascript",charset:"UTF-8"}),Fn(r,o),function(t,e){t.src=An(e),null===f&&(f=(e=(e=u.document).querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&l.test(e)?e:""),(e=f)&&t.setAttribute("nonce",e)}(r,t),function(t){var e
return(e=(t||document).getElementsByTagName("HEAD"))&&0!=e.length?e[0]:t.documentElement}(n).appendChild(r),a}function fa(){if(this&&this.Lb){var t=this.Lb
t&&"SCRIPT"==t.tagName&&da(t,!0,this.Ga)}}function da(t,e,n){null!=n&&u.clearTimeout(n),t.onload=d,t.onerror=d,t.onreadystatechange=d,e&&window.setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},0)}var pa=0,va=1
function ma(t,e){var n="Jsloader error (code #"+t+")"
e&&(n+=": "+e),O.call(this,n),this.code=t}function ga(t){this.f=t}function ba(t,e,n){if(this.b=t,t=e||{},this.i=t.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token",this.m=t.secureTokenTimeout||Ia,this.f=ct(t.secureTokenHeaders||Ta),this.g=t.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",this.h=t.firebaseTimeout||ka,this.a=ct(t.firebaseHeaders||Ea),n&&(this.a["X-Client-Version"]=n,this.f["X-Client-Version"]=n),n="Node"==si(),!(n=u.XMLHttpRequest||n&&r.a.INTERNAL.node&&r.a.INTERNAL.node.XMLHttpRequest)&&!ai())throw new Ji("internal-error","The XMLHttpRequest compatibility library was not found.")
this.c=void 0,ai()?this.c=new Mo(self):ui()?this.c=new ga(n):this.c=new To}N(ma,O),N(ga,bo),ga.prototype.a=function(){return new this.f},ga.prototype.b=function(){return{}}
var ya,wa="idToken",Ia=new Ni(3e4,6e4),Ta={"Content-Type":"application/x-www-form-urlencoded"},ka=new Ni(3e4,6e4),Ea={"Content-Type":"application/json"}
function Sa(t,e){e?t.a["X-Firebase-Locale"]=e:delete t.a["X-Firebase-Locale"]}function Aa(t,e){e?(t.a["X-Client-Version"]=e,t.f["X-Client-Version"]=e):(delete t.a["X-Client-Version"],delete t.f["X-Client-Version"])}function Na(t,e,n,i,r,o,a){(function(){var t=pi()
return!((t=li(t)!=hi?null:(t=t.match(/\sChrome\/(\d+)/i))&&2==t.length?parseInt(t[1],10):null)&&30>t||Yt&&oe&&!(9<oe))})()||ai()?t=E(t.o,t):(ya||(ya=new It(function(t,e){!function(t,e){if(((window.gapi||{}).client||{}).request)t()
else{u[Oa]=function(){((window.gapi||{}).client||{}).request?t():e(Error("CORS_UNSUPPORTED"))}
var n=Nn(_a,{onload:Oa})
!function(t,e){ra(la(n),null,e,void 0)}(0,function(){e(Error("CORS_UNSUPPORTED"))})}}(t,e)})),t=E(t.l,t)),t(e,n,i,r,o,a)}ba.prototype.o=function(t,e,n,i,r,o){if(ai()&&(void 0===u.fetch||void 0===u.Headers||void 0===u.Request))throw new Ji("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.")
var a=new qo(this.c)
if(o){a.g=Math.max(0,o)
var s=setTimeout(function(){a.dispatchEvent("timeout")},o)}Ue(a,"complete",function(){s&&clearTimeout(s)
var t=null
try{t=JSON.parse(function(t){try{return t.a?t.a.responseText:""}catch(e){return xo(t.b,"Can not get responseText: "+e.message),""}}(this))||null}catch(e){t=null}e&&e(t)}),Ve(a,"ready",function(){s&&clearTimeout(s),Gt(this)}),Ve(a,"timeout",function(){s&&clearTimeout(s),Gt(this),e&&e(null)}),function(t,e,n,i,r){if(t.a)throw Error("[goog.net.XhrIo] Object is active with another request="+t.l+"; newUri="+e)
n=n?n.toUpperCase():"GET",t.l=e,t.h="",t.N=n,t.G=!1,t.c=!0,t.a=t.D?t.D.a():fo.a(),t.A=t.D?yo(t.D):yo(fo),t.a.onreadystatechange=E(t.Jb,t)
try{xo(t.b,ta(t,"Opening Xhr")),t.I=!0,t.a.open(n,String(e),!0),t.I=!1}catch(e){return xo(t.b,ta(t,"Error opening Xhr: "+e.message)),void Xo(t,e)}e=i||""
var o=new Ge(t.headers)
r&&function(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0)
else if(g(t)||c(t))V(t,e,void 0)
else for(var n=Be(t),i=He(t),r=i.length,o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}(r,function(t,e){o.set(e,t)}),r=function(t){t:{for(var e=Wo,n=t.length,i=c(t)?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r
break t}e=-1}return 0>e?null:c(t)?t.charAt(e):t[e]}(o.U()),i=u.FormData&&e instanceof u.FormData,!q(Go,n)||r||i||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.forEach(function(t,e){this.a.setRequestHeader(e,t)},t),t.o&&(t.a.responseType=t.o),"withCredentials"in t.a&&t.a.withCredentials!==t.O&&(t.a.withCredentials=t.O)
try{$o(t),0<t.g&&(t.v=function(t){return Yt&&se(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(t.a),xo(t.b,ta(t,"Will abort after "+t.g+"ms if incomplete, xhr2 "+t.v)),t.v?(t.a.timeout=t.g,t.a.ontimeout=E(t.Ga,t)):t.u=Fe(t.Ga,t.g,t)),xo(t.b,ta(t,"Sending request")),t.i=!0,t.a.send(e),t.i=!1}catch(e){xo(t.b,ta(t,"Send error: "+e.message)),Xo(t,e)}}(a,t,n,i,r)}
var _a=new In(En,"https://apis.google.com/js/client.js?onload=%{onload}"),Oa="__fcb"+Math.floor(1e6*Math.random()).toString()
function Pa(t){if(!c(t=t.email)||!ni.test(t))throw new Ji("invalid-email")}function Ca(t){"email"in t&&Pa(t)}function Ra(t){if(!t[wa])throw new Ji("internal-error")}function Da(t){if(t.phoneNumber||t.temporaryProof){if(!t.phoneNumber||!t.temporaryProof)throw new Ji("internal-error")}else{if(!t.sessionInfo)throw new Ji("missing-verification-id")
if(!t.code)throw new Ji("missing-verification-code")}}ba.prototype.l=function(t,e,n,i,r){var o=this
ya.then(function(){window.gapi.client.setApiKey(o.b)
var a=window.gapi.auth.getToken()
window.gapi.auth.setToken(null),window.gapi.client.request({path:t,method:n,body:i,headers:r,authType:"none",callback:function(t){window.gapi.auth.setToken(a),e&&e(t)}})}).s(function(t){e&&e({error:{message:t&&t.message||"CORS_UNSUPPORTED"}})})},ba.prototype.ob=function(){return vs(this,as,{})},ba.prototype.rb=function(t,e){return vs(this,rs,{idToken:t,email:e})},ba.prototype.sb=function(t,e){return vs(this,os,{idToken:t,password:e})}
var La={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"}
function xa(t){if(!t.requestUri||!t.sessionId&&!t.postBody&&!t.pendingToken)throw new Ji("internal-error")}function Ma(t,e){return e.oauthIdToken&&e.providerId&&0==e.providerId.indexOf("oidc.")&&!e.pendingToken&&(t.sessionId?e.nonce=t.sessionId:t.postBody&&mn(t=new fn(t.postBody),"nonce")&&(e.nonce=t.get("nonce"))),e}function ja(t){var e=null
if(t.needConfirmation?(t.code="account-exists-with-different-credential",e=go(t)):"FEDERATED_USER_ID_ALREADY_LINKED"==t.errorMessage?(t.code="credential-already-in-use",e=go(t)):"EMAIL_EXISTS"==t.errorMessage?(t.code="email-already-in-use",e=go(t)):t.errorMessage&&(e=ms(t.errorMessage)),e)throw e
if(!t[wa])throw new Ji("internal-error")}function Ua(t,e){return e.returnIdpCredential=!0,vs(t,ss,e)}function Va(t,e){return e.returnIdpCredential=!0,vs(t,cs,e)}function Ka(t,e){return e.returnIdpCredential=!0,e.autoCreate=!1,vs(t,us,e)}function Fa(t){if(!t.oobCode)throw new Ji("invalid-action-code")}(t=ba.prototype).tb=function(t,e){var n={idToken:t},i=[]
return st(La,function(t,r){var o=e[r]
null===o?i.push(t):r in e&&(n[r]=o)}),i.length&&(n.deleteAttribute=i),vs(this,rs,n)},t.lb=function(t,e){return dt(t={requestType:"PASSWORD_RESET",email:t},e),vs(this,Qa,t)},t.mb=function(t,e){return dt(t={requestType:"EMAIL_SIGNIN",email:t},e),vs(this,$a,t)},t.kb=function(t,e){return dt(t={requestType:"VERIFY_EMAIL",idToken:t},e),vs(this,Za,t)},t.Va=function(t){return vs(this,fs,t)},t.$a=function(t,e){return vs(this,ns,{oobCode:t,newPassword:e})},t.Ka=function(t){return vs(this,Ha,{oobCode:t})},t.Xa=function(t){return vs(this,qa,{oobCode:t})}
var qa={endpoint:"setAccountInfo",C:Fa,da:"email"},Ha={endpoint:"resetPassword",C:Fa,J:function(t){var e=t.requestType
if(!e||!t.email&&"EMAIL_SIGNIN"!=e)throw new Ji("internal-error")}},Ba={endpoint:"signupNewUser",C:function(t){if(Pa(t),!t.password)throw new Ji("weak-password")},J:Ra,R:!0},Ga={endpoint:"createAuthUri"},Wa={endpoint:"deleteAccount",T:["idToken"]},Xa={endpoint:"setAccountInfo",T:["idToken","deleteProvider"],C:function(t){if(!m(t.deleteProvider))throw new Ji("internal-error")}},Ja={endpoint:"emailLinkSignin",T:["email","oobCode"],C:Pa,J:Ra,R:!0},za={endpoint:"emailLinkSignin",T:["idToken","email","oobCode"],C:Pa,J:Ra,R:!0},Ya={endpoint:"getAccountInfo"},$a={endpoint:"getOobConfirmationCode",T:["requestType"],C:function(t){if("EMAIL_SIGNIN"!=t.requestType)throw new Ji("internal-error")
Pa(t)},da:"email"},Za={endpoint:"getOobConfirmationCode",T:["idToken","requestType"],C:function(t){if("VERIFY_EMAIL"!=t.requestType)throw new Ji("internal-error")},da:"email"},Qa={endpoint:"getOobConfirmationCode",T:["requestType"],C:function(t){if("PASSWORD_RESET"!=t.requestType)throw new Ji("internal-error")
Pa(t)},da:"email"},ts={wb:!0,endpoint:"getProjectConfig",Ib:"GET"},es={wb:!0,endpoint:"getRecaptchaParam",Ib:"GET",J:function(t){if(!t.recaptchaSiteKey)throw new Ji("internal-error")}},ns={endpoint:"resetPassword",C:Fa,da:"email"},is={endpoint:"sendVerificationCode",T:["phoneNumber","recaptchaToken"],da:"sessionInfo"},rs={endpoint:"setAccountInfo",T:["idToken"],C:Ca,R:!0},os={endpoint:"setAccountInfo",T:["idToken"],C:function(t){if(Ca(t),!t.password)throw new Ji("weak-password")},J:Ra,R:!0},as={endpoint:"signupNewUser",J:Ra,R:!0},ss={endpoint:"verifyAssertion",C:xa,Qa:Ma,J:ja,R:!0},us={endpoint:"verifyAssertion",C:xa,Qa:Ma,J:function(t){if(t.errorMessage&&"USER_NOT_FOUND"==t.errorMessage)throw new Ji("user-not-found")
if(t.errorMessage)throw ms(t.errorMessage)
if(!t[wa])throw new Ji("internal-error")},R:!0},cs={endpoint:"verifyAssertion",C:function(t){if(xa(t),!t.idToken)throw new Ji("internal-error")},Qa:Ma,J:ja,R:!0},hs={endpoint:"verifyCustomToken",C:function(t){if(!t.token)throw new Ji("invalid-custom-token")},J:Ra,R:!0},ls={endpoint:"verifyPassword",C:function(t){if(Pa(t),!t.password)throw new Ji("wrong-password")},J:Ra,R:!0},fs={endpoint:"verifyPhoneNumber",C:Da,J:Ra},ds={endpoint:"verifyPhoneNumber",C:function(t){if(!t.idToken)throw new Ji("internal-error")
Da(t)},J:function(t){if(t.temporaryProof)throw t.code="credential-already-in-use",go(t)
Ra(t)}},ps={Vb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",C:Da,J:Ra}
function vs(t,e,n){if(!function(t,e){if(!e||!e.length)return!0
if(!t)return!1
for(var n=0;n<e.length;n++){var i=t[e[n]]
if(null==i||""===i)return!1}return!0}(n,e.T))return Ot(new Ji("internal-error"))
var i,r=e.Ib||"POST"
return _t(n).then(e.C).then(function(){return e.R&&(n.returnSecureToken=!0),function(t,e,n,i,r,o){var a=en(t.g+e)
Qe(a,"key",t.b),o&&Qe(a,"cb",A().toString())
var s="GET"==n
if(s)for(var u in i)i.hasOwnProperty(u)&&Qe(a,u,i[u])
return new It(function(e,o){Na(t,a.toString(),function(t){t?t.error?o(gs(t,r||{})):e(t):o(new Ji("network-request-failed"))},n,s?void 0:Bn(Ti(i)),t.a,t.h.get())})}(t,e.endpoint,r,n,e.Vb,e.wb||!1)}).then(function(t){return i=t,e.Qa?e.Qa(n,i):i}).then(e.J).then(function(){if(!e.da)return i
if(!(e.da in i))throw new Ji("internal-error")
return i[e.da]})}function ms(t){return gs({error:{errors:[{message:t}],code:400,message:t}})}function gs(t,e){var n=(t.error&&t.error.errors&&t.error.errors[0]||{}).reason||"",i={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"}
if(n=i[n]?new Ji(i[n]):null)return n
for(var r in n=t.error&&t.error.message||"",dt(i={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",ADMIN_ONLY_OPERATION:"admin-restricted-operation"},e||{}),e=(e=n.match(/^[^\s]+\s*:\s*(.*)$/))&&1<e.length?e[1]:void 0,i)if(0===n.indexOf(r))return new Ji(i[r],e)
return!e&&t&&(e=Ii(t)),new Ji("internal-error",e)}function bs(t){this.b=t,this.a=null,this.gb=function(t){return(Ts||(Ts=new It(function(t,e){function n(){Ai(),vi("gapi.load")("gapi.iframes",{callback:t,ontimeout:function(){Ai(),e(Error("Network Error"))},timeout:ws.get()})}if(vi("gapi.iframes.Iframe"))t()
else if(vi("gapi.load"))n()
else{var i="__iframefcb"+Math.floor(1e6*Math.random()).toString()
u[i]=function(){vi("gapi.load")?n():e(Error("Network Error"))},_t(la(i=Nn(ys,{onload:i}))).s(function(){e(Error("Network Error"))})}}).s(function(t){throw Ts=null,t}))).then(function(){return new It(function(e,n){vi("gapi.iframes.getContext")().open({where:document.body,url:t.b,messageHandlersFilter:vi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(i){function r(){clearTimeout(o),e()}t.a=i,t.a.restyle({setHideOnLeave:!1})
var o=setTimeout(function(){n(Error("Network Error"))},Is.get())
i.ping(r).then(r,function(){n(Error("Network Error"))})})})})}(this)}var ys=new In(En,"https://apis.google.com/js/api.js?onload=%{onload}"),ws=new Ni(3e4,6e4),Is=new Ni(5e3,15e3),Ts=null
function ks(t,e,n){this.i=t,this.g=e,this.h=n,this.f=null,this.a=nn(this.i,"/__/auth/iframe"),Qe(this.a,"apiKey",this.g),Qe(this.a,"appName",this.h),this.b=null,this.c=[]}function Es(t,e,n,i,r){this.o=t,this.l=e,this.c=n,this.m=i,this.h=this.g=this.i=null,this.a=r,this.f=null}function Ss(t){try{return r.a.app(t).auth().ya()}catch(t){return[]}}function As(t,e,n,i,r){this.l=t,this.f=e,this.b=n,this.c=i||null,this.h=r||null,this.o=this.u=this.v=null,this.g=[],this.m=this.a=null}function Ns(t){var e=Yn()
return function(t){return vs(t,ts,{}).then(function(t){return t.authorizedDomains||[]})}(t).then(function(t){t:{var n=en(e),i=n.f
n=n.b
for(var r=0;r<t.length;r++){var o=t[r],a=n,s=i
if(0==o.indexOf("chrome-extension://")?a=en(o).b==a&&"chrome-extension"==s:"http"!=s&&"https"!=s?a=!1:ei.test(o)?a=a==o:(o=o.split(".").join("\\."),a=new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)),a){t=!0
break t}}t=!1}if(!t)throw new vo(Yn())})}function _s(t){return t.m?t.m:(t.m=ii().then(function(){if(!t.u){var e=t.c,n=t.h,i=Ss(t.b),r=new ks(t.l,t.f,t.b)
r.f=e,r.b=n,r.c=W(i||[]),t.u=r.toString()}t.i=new bs(t.u),function(t){if(!t.i)throw Error("IfcHandler must be initialized!")
!function(t,e){t.gb.then(function(){t.a.register("authEvent",e,vi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}(t.i,function(e){var n={}
if(e&&e.authEvent){var i=!1
for(e=ho(e.authEvent),n=0;n<t.g.length;n++)i=t.g[n](e)||i
return(n={}).status=i?"ACK":"ERROR",_t(n)}return n.status="ERROR",_t(n)})}(t)}),t.m)}function Os(t){return t.o||(t.v=t.c?di(t.c,Ss(t.b)):null,t.o=new ba(t.f,mr(t.h),t.v)),t.o}function Ps(t,e,n,i,r,o,a,s,u,c){return(t=new Es(t,e,n,i,r)).i=o,t.g=a,t.h=s,t.b=ct(u||null),t.f=c,t.toString()}function Cs(t){if(this.a=t||r.a.INTERNAL.reactNative&&r.a.INTERNAL.reactNative.AsyncStorage,!this.a)throw new Ji("internal-error","The React Native compatibility library was not found.")
this.type="asyncStorage"}function Rs(t){this.b=t,this.a={},this.c=E(this.f,this)}ks.prototype.toString=function(){return this.f?Qe(this.a,"v",this.f):vn(this.a.a,"v"),this.b?Qe(this.a,"eid",this.b):vn(this.a.a,"eid"),this.c.length?Qe(this.a,"fw",this.c.join(",")):vn(this.a.a,"fw"),this.a.toString()},Es.prototype.toString=function(){var t=nn(this.o,"/__/auth/handler")
if(Qe(t,"apiKey",this.l),Qe(t,"appName",this.c),Qe(t,"authType",this.m),this.a.isOAuthProvider){var e=this.a
try{var n=r.a.app(this.c).auth().ea()}catch(t){n=null}for(var i in e.ab=n,Qe(t,"providerId",this.a.providerId),n=Ti((e=this.a).zb))n[i]=n[i].toString()
i=e.Cc,n=ct(n)
for(var o=0;o<i.length;o++){var a=i[o]
a in n&&delete n[a]}e.eb&&e.ab&&!n[e.eb]&&(n[e.eb]=e.ab),ut(n)||Qe(t,"customParameters",Ii(n))}if("function"==typeof this.a.Fb&&(e=this.a.Fb()).length&&Qe(t,"scopes",e.join(",")),this.i?Qe(t,"redirectUrl",this.i):vn(t.a,"redirectUrl"),this.g?Qe(t,"eventId",this.g):vn(t.a,"eventId"),this.h?Qe(t,"v",this.h):vn(t.a,"v"),this.b)for(var s in this.b)this.b.hasOwnProperty(s)&&!tn(t,s)&&Qe(t,s,this.b[s])
return this.f?Qe(t,"eid",this.f):vn(t.a,"eid"),(s=Ss(this.c)).length&&Qe(t,"fw",s.join(",")),t.toString()},(t=As.prototype).Ea=function(t,e,n){var i=new Ji("popup-closed-by-user"),r=new Ji("web-storage-unsupported"),o=this,a=!1
return this.ga().then(function(){(function(t){var e={type:"webStorageSupport"}
return _s(t).then(function(){return function(t,e){return t.gb.then(function(){return new It(function(n){t.a.send(e.type,e,n,vi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}(t.i,e)}).then(function(t){if(t&&t.length&&void 0!==t[0].webStorageSupport)return t[0].webStorageSupport
throw Error()})})(o).then(function(n){n||(t&&Qn(t),e(r),a=!0)})}).s(function(){}).then(function(){if(!a)return function(t){return new It(function(e){return function n(){qe(2e3).then(function(){if(t&&!t.closed)return n()
e()})}()})}(t)}).then(function(){if(!a)return qe(n).then(function(){e(i)})})},t.Mb=function(){var t=pi()
return!wi(t)&&!Si(t)},t.Hb=function(){return!1},t.Db=function(t,e,n,i,r,o,a){if(!t)return Ot(new Ji("popup-blocked"))
if(a&&!wi())return this.ga().s(function(e){Qn(t),r(e)}),i(),_t()
this.a||(this.a=Ns(Os(this)))
var s=this
return this.a.then(function(){var e=s.ga().s(function(e){throw Qn(t),r(e),e})
return i(),e}).then(function(){uo(n),a||$n(Ps(s.l,s.f,s.b,e,n,null,o,s.c,void 0,s.h),t)}).s(function(t){throw"auth/network-request-failed"==t.code&&(s.a=null),t})},t.Ca=function(t,e,n){this.a||(this.a=Ns(Os(this)))
var i=this
return this.a.then(function(){uo(e),$n(Ps(i.l,i.f,i.b,t,e,Yn(),n,i.c,void 0,i.h))}).s(function(t){throw"auth/network-request-failed"==t.code&&(i.a=null),t})},t.ga=function(){var t=this
return _s(this).then(function(){return t.i.gb}).s(function(){throw t.a=null,new Ji("network-request-failed")})},t.Ob=function(){return!0},t.wa=function(t){this.g.push(t)},t.La=function(t){B(this.g,function(e){return e==t})},(t=Cs.prototype).get=function(t){return _t(this.a.getItem(t)).then(function(t){return t&&ki(t)})},t.set=function(t,e){return _t(this.a.setItem(t,Ii(e)))},t.P=function(t){return _t(this.a.removeItem(t))},t.Y=function(){},t.ca=function(){}
var Ds,Ls=[]
function xs(t){this.a=t}function Ms(t){this.c=t,this.b=!1,this.a=[]}function js(t,e,n,i){var r,o,a,s,u=n||{},c=null
if(t.b)return Ot(Error("connection_unavailable"))
var h=i?800:50,l="undefined"!=typeof MessageChannel?new MessageChannel:null
return new It(function(n,i){l?(r=Math.floor(Math.random()*Math.pow(10,20)).toString(),l.port1.start(),a=setTimeout(function(){i(Error("unsupported_event"))},h),c={messageChannel:l,onMessage:o=function(t){t.data.eventId===r&&("ack"===t.data.status?(clearTimeout(a),s=setTimeout(function(){i(Error("timeout"))},3e3)):"done"===t.data.status?(clearTimeout(s),void 0!==t.data.response?n(t.data.response):i(Error("unknown_error"))):(clearTimeout(a),clearTimeout(s),i(Error("invalid_response"))))}},t.a.push(c),l.port1.addEventListener("message",o),t.c.postMessage({eventType:e,eventId:r,data:u},[l.port2])):i(Error("connection_unavailable"))}).then(function(e){return Us(t,c),e}).s(function(e){throw Us(t,c),e})}function Us(t,e){if(e){var n=e.messageChannel,i=e.onMessage
n&&(n.port1.removeEventListener("message",i),n.port1.close()),B(t.a,function(t){return t==e})}}function Vs(){if(!Fs())throw new Ji("web-storage-unsupported")
this.c={},this.a=[],this.b=0,this.l=u.indexedDB,this.type="indexedDB",this.g=this.m=this.f=this.i=null,this.u=!1,this.h=null
var t=this
ai()&&self?(this.m=function(){var t=ai()?self:null
if(V(Ls,function(n){n.b==t&&(e=n)}),!e){var e=new Rs(t)
Ls.push(e)}return e}(),this.m.subscribe("keyChanged",function(e,n){return Ws(t).then(function(e){return 0<e.length&&V(t.a,function(t){t(e)}),{keyProcessed:q(e,n.key)}})}),this.m.subscribe("ping",function(){return _t(["keyChanged"])})):function(){var t=u.navigator
return t&&t.serviceWorker?_t().then(function(){return t.serviceWorker.ready}).then(function(t){return t.active||null}).s(function(){return null}):_t(null)}().then(function(e){(t.h=e)&&(t.g=new Ms(new xs(e)),js(t.g,"ping",null,!0).then(function(e){e[0].fulfilled&&q(e[0].value,"keyChanged")&&(t.u=!0)}).s(function(){}))})}function Ks(t){return t.o||(t.o=function t(e){return new It(function(n,i){var r=e.l.open("firebaseLocalStorageDb",1)
r.onerror=function(t){try{t.preventDefault()}catch(t){}i(Error(t.target.error))},r.onupgradeneeded=function(t){t=t.target.result
try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){i(t)}},r.onsuccess=function(r){(r=r.target.result).objectStoreNames.contains("firebaseLocalStorage")?n(r):function(t){return new It(function(e,n){var i=t.l.deleteDatabase("firebaseLocalStorageDb")
i.onsuccess=function(){e()},i.onerror=function(t){n(Error(t.target.error))}})}(e).then(function(){return t(e)}).then(function(t){n(t)}).s(function(t){i(t)})}})}(t)),t.o}function Fs(){try{return!!u.indexedDB}catch(t){return!1}}function qs(t){return t.objectStore("firebaseLocalStorage")}function Hs(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly")}function Bs(t){return new It(function(e,n){t.onsuccess=function(t){t&&t.target?e(t.target.result):e()},t.onerror=function(t){n(t.target.error)}})}function Gs(t,e){return t.g&&t.h&&function(){var t=u.navigator
return t&&t.serviceWorker&&t.serviceWorker.controller||null}()===t.h?js(t.g,"keyChanged",{key:e},t.u).then(function(){}).s(function(){}):_t()}function Ws(t){return Ks(t).then(function(t){var e=qs(Hs(t,!1))
return e.getAll?Bs(e.getAll()):new It(function(t,n){var i=[],r=e.openCursor()
r.onsuccess=function(e){(e=e.target.result)?(i.push(e.value),e.continue()):t(i)},r.onerror=function(t){n(t.target.error)}})}).then(function(e){var n={},i=[]
if(0==t.b){for(i=0;i<e.length;i++)n[e[i].fbase_key]=e[i].value
i=function t(e,n){var i,r=[]
for(i in e)i in n?o(e[i])!=o(n[i])?r.push(i):"object"==o(e[i])&&null!=e[i]&&null!=n[i]?0<t(e[i],n[i]).length&&r.push(i):e[i]!==n[i]&&r.push(i):r.push(i)
for(i in n)i in e||r.push(i)
return r}(t.c,n),t.c=n}return i})}function Xs(t){t.i&&t.i.cancel("STOP_EVENT"),t.f&&(clearTimeout(t.f),t.f=null)}function Js(t){var e=this,n=null
this.a=[],this.type="indexedDB",this.c=t,this.b=_t().then(function(){if(Fs()){var t=Ei(),i="__sak"+t
return Ds||(Ds=new Vs),(n=Ds).set(i,t).then(function(){return n.get(i)}).then(function(e){if(e!==t)throw Error("indexedDB not supported!")
return n.P(i)}).then(function(){return n}).s(function(){return e.c})}return e.c}).then(function(t){return e.type=t.type,t.Y(function(t){V(e.a,function(e){e(t)})}),t})}function zs(){this.a={},this.type="inMemory"}function Ys(){if(!function(){var t="Node"==si()
if(!(t=$s()||t&&r.a.INTERNAL.node&&r.a.INTERNAL.node.localStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==si())throw new Ji("internal-error","The LocalStorage compatibility library was not found.")
throw new Ji("web-storage-unsupported")}this.a=$s()||r.a.INTERNAL.node.localStorage,this.type="localStorage"}function $s(){try{var t=u.localStorage,e=Ei()
return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function Zs(){this.type="nullStorage"}function Qs(){if(!function(){var t="Node"==si()
if(!(t=tu()||t&&r.a.INTERNAL.node&&r.a.INTERNAL.node.sessionStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==si())throw new Ji("internal-error","The SessionStorage compatibility library was not found.")
throw new Ji("web-storage-unsupported")}this.a=tu()||r.a.INTERNAL.node.sessionStorage,this.type="sessionStorage"}function tu(){try{var t=u.sessionStorage,e=Ei()
return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function eu(){var t={}
t.Browser=ru,t.Node=ou,t.ReactNative=au,t.Worker=su,this.a=t[si()]}Rs.prototype.f=function(t){var e=t.data.eventType,n=t.data.eventId,i=this.a[e]
if(i&&0<i.length){t.ports[0].postMessage({status:"ack",eventId:n,eventType:e,response:null})
var r=[]
V(i,function(e){r.push(_t().then(function(){return e(t.origin,t.data.data)}))}),Ct(r).then(function(i){var r=[]
V(i,function(t){r.push({fulfilled:t.Eb,value:t.value,reason:t.reason?t.reason.message:void 0})}),V(r,function(t){for(var e in t)void 0===t[e]&&delete t[e]}),t.ports[0].postMessage({status:"done",eventId:n,eventType:e,response:r})})}},Rs.prototype.subscribe=function(t,e){ut(this.a)&&this.b.addEventListener("message",this.c),void 0===this.a[t]&&(this.a[t]=[]),this.a[t].push(e)},Rs.prototype.unsubscribe=function(t,e){void 0!==this.a[t]&&e?(B(this.a[t],function(t){return t==e}),0==this.a[t].length&&delete this.a[t]):e||delete this.a[t],ut(this.a)&&this.b.removeEventListener("message",this.c)},xs.prototype.postMessage=function(t,e){this.a.postMessage(t,e)},Ms.prototype.close=function(){for(;0<this.a.length;)Us(this,this.a[0])
this.b=!0},(t=Vs.prototype).set=function(t,e){var n,i=!1,r=this
return Ks(this).then(function(e){return Bs((e=qs(Hs(n=e,!0))).get(t))}).then(function(o){var a=qs(Hs(n,!0))
return o?(o.value=e,Bs(a.put(o))):(r.b++,i=!0,(o={}).fbase_key=t,o.value=e,Bs(a.add(o)))}).then(function(){return r.c[t]=e,Gs(r,t)}).ia(function(){i&&r.b--})},t.get=function(t){return Ks(this).then(function(e){return Bs(qs(Hs(e,!1)).get(t))}).then(function(t){return t&&t.value})},t.P=function(t){var e=!1,n=this
return Ks(this).then(function(i){return e=!0,n.b++,Bs(qs(Hs(i,!0)).delete(t))}).then(function(){return delete n.c[t],Gs(n,t)}).ia(function(){e&&n.b--})},t.Y=function(t){0==this.a.length&&function(t){Xs(t),function e(){t.f=setTimeout(function(){t.i=Ws(t).then(function(e){0<e.length&&V(t.a,function(t){t(e)})}).then(function(){e()}).s(function(t){"STOP_EVENT"!=t.message&&e()})},800)}()}(this),this.a.push(t)},t.ca=function(t){B(this.a,function(e){return e==t}),0==this.a.length&&Xs(this)},(t=Js.prototype).get=function(t){return this.b.then(function(e){return e.get(t)})},t.set=function(t,e){return this.b.then(function(n){return n.set(t,e)})},t.P=function(t){return this.b.then(function(e){return e.P(t)})},t.Y=function(t){this.a.push(t)},t.ca=function(t){B(this.a,function(e){return e==t})},(t=zs.prototype).get=function(t){return _t(this.a[t])},t.set=function(t,e){return this.a[t]=e,_t()},t.P=function(t){return delete this.a[t],_t()},t.Y=function(){},t.ca=function(){},(t=Ys.prototype).get=function(t){var e=this
return _t().then(function(){return ki(e.a.getItem(t))})},t.set=function(t,e){var n=this
return _t().then(function(){var i=Ii(e)
null===i?n.P(t):n.a.setItem(t,i)})},t.P=function(t){var e=this
return _t().then(function(){e.a.removeItem(t)})},t.Y=function(t){u.window&&Se(u.window,"storage",t)},t.ca=function(t){u.window&&_e(u.window,"storage",t)},(t=Zs.prototype).get=function(){return _t(null)},t.set=function(){return _t()},t.P=function(){return _t()},t.Y=function(){},t.ca=function(){},(t=Qs.prototype).get=function(t){var e=this
return _t().then(function(){return ki(e.a.getItem(t))})},t.set=function(t,e){var n=this
return _t().then(function(){var i=Ii(e)
null===i?n.P(t):n.a.setItem(t,i)})},t.P=function(t){var e=this
return _t().then(function(){e.a.removeItem(t)})},t.Y=function(){},t.ca=function(){}
var nu,iu,ru={B:Ys,Sa:Qs},ou={B:Ys,Sa:Qs},au={B:Cs,Sa:Zs},su={B:Ys,Sa:Zs},uu={Xc:"local",NONE:"none",Zc:"session"}
function cu(){var t=!(Si(pi())||!oi()),e=wi(),n=mi()
this.o=t,this.h=e,this.m=n,this.a={},nu||(nu=new eu),t=nu
try{this.g=!zn()&&Pi()||!u.indexedDB?new t.a.B:new Js(ai()?new zs:new t.a.B)}catch(t){this.g=new zs,this.h=!0}try{this.i=new t.a.Sa}catch(t){this.i=new zs}this.l=new zs,this.f=E(this.Nb,this),this.b={}}function hu(){return iu||(iu=new cu),iu}function lu(t,e){switch(e){case"session":return t.i
case"none":return t.l
default:return t.g}}function fu(t,e){return"firebase:"+t.name+(e?":"+e:"")}function du(t,e,n){return n=fu(e,n),"local"==e.B&&(t.b[n]=null),lu(t,e.B).P(n)}function pu(t){t.c&&(clearInterval(t.c),t.c=null)}function vu(t){this.a=t,this.b=hu()}(t=cu.prototype).get=function(t,e){return lu(this,t.B).get(fu(t,e))},t.set=function(t,e,n){var i=fu(t,n),r=this,o=lu(this,t.B)
return o.set(i,e).then(function(){return o.get(i)}).then(function(e){"local"==t.B&&(r.b[i]=e)})},t.addListener=function(t,e,n){t=fu(t,e),this.m&&(this.b[t]=u.localStorage.getItem(t)),ut(this.a)&&(lu(this,"local").Y(this.f),this.h||(zn()||!Pi())&&u.indexedDB||!this.m||function(t){pu(t),t.c=setInterval(function(){for(var e in t.a){var n=u.localStorage.getItem(e),i=t.b[e]
n!=i&&(t.b[e]=n,n=new pe({type:"storage",key:e,target:window,oldValue:i,newValue:n,a:!0}),t.Nb(n))}},1e3)}(this)),this.a[t]||(this.a[t]=[]),this.a[t].push(n)},t.removeListener=function(t,e,n){t=fu(t,e),this.a[t]&&(B(this.a[t],function(t){return t==n}),0==this.a[t].length&&delete this.a[t]),ut(this.a)&&(lu(this,"local").ca(this.f),pu(this))},t.Nb=function(t){if(t&&t.f){var e=t.a.key
if(null==e)for(var n in this.a){var i=this.b[n]
void 0===i&&(i=null)
var r=u.localStorage.getItem(n)
r!==i&&(this.b[n]=r,this.Ya(n))}else if(0==e.indexOf("firebase:")&&this.a[e]){if(void 0!==t.a.a?lu(this,"local").ca(this.f):pu(this),this.o)if(n=u.localStorage.getItem(e),(i=t.a.newValue)!==n)null!==i?u.localStorage.setItem(e,i):u.localStorage.removeItem(e)
else if(this.b[e]===i&&void 0===t.a.a)return
var o=this
n=function(){void 0===t.a.a&&o.b[e]===u.localStorage.getItem(e)||(o.b[e]=u.localStorage.getItem(e),o.Ya(e))},Yt&&oe&&10==oe&&u.localStorage.getItem(e)!==t.a.newValue&&t.a.newValue!==t.a.oldValue?setTimeout(n,10):n()}}else V(t,E(this.Ya,this))},t.Ya=function(t){this.a[t]&&V(this.a[t],function(t){t()})}
var mu,gu={name:"authEvent",B:"local"}
function bu(){this.a=hu()}function yu(t,e){this.b=wu,this.f=u.Uint8Array?new Uint8Array(this.b):Array(this.b),this.g=this.c=0,this.a=[],this.i=t,this.h=e,this.m=u.Int32Array?new Int32Array(64):Array(64),void 0!==mu||(mu=u.Int32Array?new Int32Array(Nu):Nu),this.reset()}N(yu,function(){this.b=-1})
for(var wu=64,Iu=wu-1,Tu=[],ku=0;ku<Iu;ku++)Tu[ku]=0
var Eu=G(128,Tu)
function Su(t){for(var e=t.f,n=t.m,i=0,r=0;r<e.length;)n[i++]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r=4*i
for(e=16;64>e;e++){r=0|n[e-15],i=0|n[e-2]
var o=(0|n[e-16])+((r>>>7|r<<25)^(r>>>18|r<<14)^r>>>3)|0,a=(0|n[e-7])+((i>>>17|i<<15)^(i>>>19|i<<13)^i>>>10)|0
n[e]=o+a|0}i=0|t.a[0],r=0|t.a[1]
var s=0|t.a[2],u=0|t.a[3],c=0|t.a[4],h=0|t.a[5],l=0|t.a[6]
for(o=0|t.a[7],e=0;64>e;e++){var f=((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))+(i&r^i&s^r&s)|0
a=(o=o+((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))|0)+((a=(a=c&h^~c&l)+(0|mu[e])|0)+(0|n[e])|0)|0,o=l,l=h,h=c,c=u+a|0,u=s,s=r,r=i,i=a+f|0}t.a[0]=t.a[0]+i|0,t.a[1]=t.a[1]+r|0,t.a[2]=t.a[2]+s|0,t.a[3]=t.a[3]+u|0,t.a[4]=t.a[4]+c|0,t.a[5]=t.a[5]+h|0,t.a[6]=t.a[6]+l|0,t.a[7]=t.a[7]+o|0}function Au(t,e,n){void 0===n&&(n=e.length)
var i=0,r=t.c
if(c(e))for(;i<n;)t.f[r++]=e.charCodeAt(i++),r==t.b&&(Su(t),r=0)
else{if(!g(e))throw Error("message must be string or array")
for(;i<n;){var o=e[i++]
if(!("number"==typeof o&&0<=o&&255>=o&&o==(0|o)))throw Error("message must be a byte array")
t.f[r++]=o,r==t.b&&(Su(t),r=0)}}t.c=r,t.g+=n}yu.prototype.reset=function(){this.g=this.c=0,this.a=u.Int32Array?new Int32Array(this.h):W(this.h)}
var Nu=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
function _u(){yu.call(this,8,Ou)}N(_u,yu)
var Ou=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]
function Pu(t,e,n,i,r){this.l=t,this.i=e,this.m=n,this.o=i||null,this.u=r||null,this.h=e+":"+n,this.v=new bu,this.g=new vu(this.h),this.f=null,this.b=[],this.a=this.c=null}function Cu(t){return new Ji("invalid-cordova-configuration",t)}function Ru(t,e){for(var n=0;n<t.b.length;n++)try{t.b[n](e)}catch(t){}}function Du(t){return t.f||(t.f=t.ga().then(function(){return new It(function(e){t.wa(function n(i){return e(i),t.La(n),!1}),function(t){function e(e){i=!0,r&&r.cancel(),Lu(t).then(function(i){var r=n
if(i&&e&&e.url){var a=null;-1!=(r=Cr(e.url)).indexOf("/__/auth/callback")&&(a=(a="object"===o(a=ki(tn(a=en(r),"firebaseError")||null))?zi(a):null)?new co(i.c,i.b,null,null,a):new co(i.c,i.b,r,i.f)),r=a||n}Ru(t,r)})}var n=new co("unknown",null,null,null,new Ji("no-auth-event")),i=!1,r=qe(500).then(function(){return Lu(t).then(function(){i||Ru(t,n)})}),a=u.handleOpenURL
u.handleOpenURL=function(t){if(0==t.toLowerCase().indexOf(vi("BuildInfo.packageName",u).toLowerCase()+"://")&&e({url:t}),"function"==typeof a)try{a(t)}catch(t){console.error(t)}},po||(po=new lo),po.subscribe(e)}(t)})})),t.f}function Lu(t){var e=null
return function(t){return t.b.get(gu,t.a).then(function(t){return ho(t)})}(t.g).then(function(n){return e=n,du((n=t.g).b,gu,n.a)}).then(function(){return e})}function xu(t){this.a=t,this.b=hu()}(t=Pu.prototype).ga=function(){return this.za?this.za:this.za=(ri(void 0)?ii().then(function(){return new It(function(t,e){var n=u.document,i=setTimeout(function(){e(Error("Cordova framework is not ready."))},1e3)
n.addEventListener("deviceready",function(){clearTimeout(i),t()},!1)})}):Ot(Error("Cordova must run in an Android or iOS file scheme."))).then(function(){if("function"!=typeof vi("universalLinks.subscribe",u))throw Cu("cordova-universal-links-plugin-fix is not installed")
if(void 0===vi("BuildInfo.packageName",u))throw Cu("cordova-plugin-buildinfo is not installed")
if("function"!=typeof vi("cordova.plugins.browsertab.openUrl",u))throw Cu("cordova-plugin-browsertab is not installed")
if("function"!=typeof vi("cordova.InAppBrowser.open",u))throw Cu("cordova-plugin-inappbrowser is not installed")},function(){throw new Ji("cordova-not-ready")})},t.Ea=function(t,e){return e(new Ji("operation-not-supported-in-this-environment")),_t()},t.Db=function(){return Ot(new Ji("operation-not-supported-in-this-environment"))},t.Ob=function(){return!1},t.Mb=function(){return!0},t.Hb=function(){return!0},t.Ca=function(t,e,n){if(this.c)return Ot(new Ji("redirect-operation-pending"))
var i=this,r=u.document,o=null,a=null,s=null,c=null
return this.c=_t().then(function(){return uo(e),Du(i)}).then(function(){return function(t,e,n,i){var r=function(){for(var t=20,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return e.join("")}(),o=new co(e,i,null,r,new Ji("no-auth-event")),a=vi("BuildInfo.packageName",u)
if("string"!=typeof a)throw new Ji("invalid-cordova-configuration")
var s=vi("BuildInfo.displayName",u),c={}
if(pi().toLowerCase().match(/iphone|ipad|ipod/))c.ibi=a
else{if(!pi().toLowerCase().match(/android/))return Ot(new Ji("operation-not-supported-in-this-environment"))
c.apn=a}s&&(c.appDisplayName=s),r=function(t){var e=new _u
Au(e,t),t=[]
var n=8*e.g
56>e.c?Au(e,Eu,56-e.c):Au(e,Eu,e.b-(e.c-56))
for(var i=63;56<=i;i--)e.f[i]=255&n,n/=256
for(Su(e),i=n=0;i<e.i;i++)for(var r=24;0<=r;r-=8)t[n++]=e.a[i]>>r&255
return function(t){return K(t,function(t){return 1<(t=t.toString(16)).length?t:"0"+t}).join("")}(t)}(r),c.sessionId=r
var h=Ps(t.l,t.i,t.m,e,n,null,i,t.o,c,t.u)
return t.ga().then(function(){var e=t.h
return t.v.a.set(gu,o.w(),e)}).then(function(){var e=vi("cordova.plugins.browsertab.isAvailable",u)
if("function"!=typeof e)throw new Ji("invalid-cordova-configuration")
var n=null
e(function(e){if(e){if("function"!=typeof(n=vi("cordova.plugins.browsertab.openUrl",u)))throw new Ji("invalid-cordova-configuration")
n(h)}else{if("function"!=typeof(n=vi("cordova.InAppBrowser.open",u)))throw new Ji("invalid-cordova-configuration")
e=pi(),t.a=n(h,e.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||e.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?"_blank":"_system","location=yes")}})})}(i,t,e,n)}).then(function(){return new It(function(t,e){a=function(){var e=vi("cordova.plugins.browsertab.close",u)
return t(),"function"==typeof e&&e(),i.a&&"function"==typeof i.a.close&&(i.a.close(),i.a=null),!1},i.wa(a),s=function(){o||(o=qe(2e3).then(function(){e(new Ji("redirect-cancelled-by-user"))}))},c=function(){_i()&&s()},r.addEventListener("resume",s,!1),pi().toLowerCase().match(/android/)||r.addEventListener("visibilitychange",c,!1)}).s(function(t){return Lu(i).then(function(){throw t})})}).ia(function(){s&&r.removeEventListener("resume",s,!1),c&&r.removeEventListener("visibilitychange",c,!1),o&&o.cancel(),a&&i.La(a),i.c=null})},t.wa=function(t){this.b.push(t),Du(this).s(function(e){"auth/invalid-cordova-configuration"===e.code&&(e=new co("unknown",null,null,null,new Ji("no-auth-event")),t(e))})},t.La=function(t){B(this.b,function(e){return e==t})}
var Mu={name:"pendingRedirect",B:"session"}
function ju(t){return du(t.b,Mu,t.a)}function Uu(t,e,n){this.i={},this.u=0,this.A=t,this.l=e,this.o=n,this.h=[],this.f=!1,this.m=E(this.cb,this),this.b=new Ju,this.v=new Zu,this.g=new xu(this.l+":"+this.o),this.c={},this.c.unknown=this.b,this.c.signInViaRedirect=this.b,this.c.linkViaRedirect=this.b,this.c.reauthViaRedirect=this.b,this.c.signInViaPopup=this.v,this.c.linkViaPopup=this.v,this.c.reauthViaPopup=this.v,this.a=Vu(this.A,this.l,this.o,pr)}function Vu(t,e,n,i){var o=r.a.SDK_VERSION||null
return ri()?new Pu(t,e,n,o,i):new As(t,e,n,o,i)}function Ku(t){t.f||(t.f=!0,t.a.wa(t.m))
var e=t.a
return t.a.ga().s(function(n){throw t.a==e&&t.reset(),n})}function Fu(t){t.a.Mb()&&Ku(t).s(function(e){var n=new co("unknown",null,null,null,new Ji("operation-not-supported-in-this-environment"))
Gu(e)&&t.cb(n)}),t.a.Hb()||zu(t.b)}(t=Uu.prototype).reset=function(){this.f=!1,this.a.La(this.m),this.a=Vu(this.A,this.l,this.o),this.i={}},t.Za=function(){this.b.Za()},t.subscribe=function(t){if(q(this.h,t)||this.h.push(t),!this.f){var e=this;(function(t){return t.b.get(Mu,t.a).then(function(t){return"pending"==t})})(this.g).then(function(t){t?ju(e.g).then(function(){Ku(e).s(function(t){var n=new co("unknown",null,null,null,new Ji("operation-not-supported-in-this-environment"))
Gu(t)&&e.cb(n)})}):Fu(e)}).s(function(){Fu(e)})}},t.unsubscribe=function(t){B(this.h,function(e){return e==t})},t.cb=function(t){if(!t)throw new Ji("invalid-auth-event")
if(6e5<=A()-this.u&&(this.i={},this.u=0),t&&t.getUid()&&this.i.hasOwnProperty(t.getUid()))return!1
for(var e=!1,n=0;n<this.h.length;n++){var i=this.h[n]
if(i.xb(t.c,t.b)){(e=this.c[t.c])&&(e.h(t,i),t&&(t.f||t.b)&&(this.i[t.getUid()]=!0,this.u=A())),e=!0
break}}return zu(this.b),e}
var qu=new Ni(2e3,1e4),Hu=new Ni(3e4,6e4)
function Bu(t,e,n,i,r,o){return t.a.Db(e,n,i,function(){t.f||(t.f=!0,t.a.wa(t.m))},function(){t.reset()},r,o)}function Gu(t){return!(!t||"auth/cordova-not-ready"!=t.code)}Uu.prototype.fa=function(){return this.b.fa()},Uu.prototype.Ca=function(t,e,n){var i,r=this
return function(t){return t.b.set(Mu,"pending",t.a)}(this.g).then(function(){return r.a.Ca(t,e,n).s(function(t){if(Gu(t))throw new Ji("operation-not-supported-in-this-environment")
return i=t,ju(r.g).then(function(){throw i})}).then(function(){return r.a.Ob()?new It(function(){}):ju(r.g).then(function(){return r.fa()}).then(function(){}).s(function(){})})})},Uu.prototype.Ea=function(t,e,n,i){return this.a.Ea(n,function(n){t.ha(e,null,n,i)},qu.get())}
var Wu={}
function Xu(t,e,n){var i=e+":"+n
return Wu[i]||(Wu[i]=new Uu(t,e,n)),Wu[i]}function Ju(){this.b=null,this.f=[],this.c=[],this.a=null,this.i=this.g=!1}function zu(t){t.g||(t.g=!0,$u(t,!1,null,null))}function Yu(t,e){if(t.b=function(){return _t(e)},t.f.length)for(var n=0;n<t.f.length;n++)t.f[n](e)}function $u(t,e,n,i){e?i?function(t,e){if(t.b=function(){return Ot(e)},t.c.length)for(var n=0;n<t.c.length;n++)t.c[n](e)}(t,i):Yu(t,n):Yu(t,{user:null}),t.f=[],t.c=[]}function Zu(){}function Qu(){this.ub=!1,Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.ub},set:function(t){this.ub=t},enumerable:!1})}function tc(t,e){this.a=e,xi(this,"verificationId",t)}function ec(t,e,n,i){return new oo(t).Va(e,n).then(function(t){return new tc(t,i)})}function nc(t){var e=dr(t)
if(!(e&&e.exp&&e.auth_time&&e.iat))throw new Ji("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.")
Mi(this,{token:t,expirationTime:Oi(1e3*e.exp),authTime:Oi(1e3*e.auth_time),issuedAtTime:Oi(1e3*e.iat),signInProvider:e.firebase&&e.firebase.sign_in_provider?e.firebase.sign_in_provider:null,claims:e})}function ic(t,e,n){if(this.h=t,this.i=e,this.g=n,this.c=3e4,this.f=96e4,this.b=null,this.a=this.c,this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!")}function rc(t){this.f=t,this.b=this.a=null,this.c=0}function oc(t,e){var n=e[wa],i=e.refreshToken
e=ac(e.expiresIn),t.b=n,t.c=e,t.a=i}function ac(t){return A()+1e3*parseInt(t,10)}function sc(t,e){this.a=t||null,this.b=e||null,Mi(this,{lastSignInTime:Oi(e||null),creationTime:Oi(t||null)})}function uc(t,e,n,i,r,o){Mi(this,{uid:t,displayName:i||null,photoURL:r||null,email:n||null,phoneNumber:o||null,providerId:e})}function cc(t,e){for(var n in de.call(this,t),e)this[n]=e[n]}function hc(t,e,n){this.G=[],this.l=t.apiKey,this.o=t.appName,this.u=t.authDomain||null,t=r.a.SDK_VERSION?di(r.a.SDK_VERSION):null,this.c=new ba(this.l,mr(pr),t),this.h=new rc(this.c),gc(this,e[wa]),oc(this.h,e),xi(this,"refreshToken",this.h.a),wc(this,n||{}),je.call(this),this.I=!1,this.u&&gi()&&(this.a=Xu(this.u,this.l,this.o)),this.N=[],this.i=null,this.A=function(t){return new ic(function(){return t.F(!0)},function(t){return!(!t||"auth/network-request-failed"!=t.code)},function(){var e=t.h.c-A()-3e5
return 0<e?e:0})}(this),this.V=E(this.Ha,this)
var i=this
this.ka=null,this.ta=function(t){i.pa(t.g)},this.X=null,this.O=[],this.sa=function(t){fc(i,t.c)},this.W=null}function lc(t,e){t.X&&_e(t.X,"languageCodeChanged",t.ta),(t.X=e)&&Se(e,"languageCodeChanged",t.ta)}function fc(t,e){t.O=e,Aa(t.c,r.a.SDK_VERSION?di(r.a.SDK_VERSION,t.O):null)}function dc(t,e){t.W&&_e(t.W,"frameworkChanged",t.sa),(t.W=e)&&Se(e,"frameworkChanged",t.sa)}function pc(t){try{return r.a.app(t.o).auth()}catch(e){throw new Ji("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+t.o+"'!")}}function vc(t){t.D||t.A.b||(t.A.start(),_e(t,"tokenChanged",t.V),Se(t,"tokenChanged",t.V))}function mc(t){_e(t,"tokenChanged",t.V),t.A.stop()}function gc(t,e){t.ra=e,xi(t,"_lat",e)}function bc(t){for(var e=[],n=0;n<t.N.length;n++)e.push(t.N[n](t))
return Ct(e).then(function(){return t})}function yc(t){t.a&&!t.I&&(t.I=!0,t.a.subscribe(t))}function wc(t,e){Mi(t,{uid:e.uid,displayName:e.displayName||null,photoURL:e.photoURL||null,email:e.email||null,emailVerified:e.emailVerified||!1,phoneNumber:e.phoneNumber||null,isAnonymous:e.isAnonymous||!1,metadata:new sc(e.createdAt,e.lastLoginAt),providerData:[]})}function Ic(){}function Tc(t){return _t().then(function(){if(t.D)throw new Ji("app-deleted")})}function kc(t){return K(t.providerData,function(t){return t.providerId})}function Ec(t,e){e&&(Sc(t,e.providerId),t.providerData.push(e))}function Sc(t,e){B(t.providerData,function(t){return t.providerId==e})}function Ac(t,e,n){("uid"!=e||n)&&t.hasOwnProperty(e)&&xi(t,e,n)}function Nc(t,e){t!=e&&(Mi(t,{uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,email:e.email,emailVerified:e.emailVerified,phoneNumber:e.phoneNumber,isAnonymous:e.isAnonymous,providerData:[]}),e.metadata?xi(t,"metadata",function(t){return new sc(t.a,t.b)}(e.metadata)):xi(t,"metadata",new sc),V(e.providerData,function(e){Ec(t,e)}),function(t,e){t.b=e.b,t.a=e.a,t.c=e.c}(t.h,e.h),xi(t,"refreshToken",t.h.a))}function _c(t){return t.F().then(function(e){var n=t.isAnonymous
return function(t,e){return vs(t.c,Ya,{idToken:e}).then(E(t.wc,t))}(t,e).then(function(){return n||Ac(t,"isAnonymous",!1),e})})}function Oc(t,e){e[wa]&&t.ra!=e[wa]&&(oc(t.h,e),t.dispatchEvent(new cc("tokenChanged")),gc(t,e[wa]),Ac(t,"refreshToken",t.h.a))}function Pc(t,e){return _c(t).then(function(){if(q(kc(t),e))return bc(t).then(function(){throw new Ji("provider-already-linked")})})}function Cc(t,e,n){return ji({user:t,credential:so(e),additionalUserInfo:e=Ir(e),operationType:n})}function Rc(t,e){return Oc(t,e),t.reload().then(function(){return t})}function Dc(t,e,n,i,o){if(!gi())return Ot(new Ji("operation-not-supported-in-this-environment"))
if(t.i&&!o)return Ot(t.i)
var a=wr(n.providerId),s=Ei(t.uid+":::"),u=null;(!wi()||oi())&&t.u&&n.isOAuthProvider&&(u=Ps(t.u,t.l,t.o,e,n,null,s,r.a.SDK_VERSION||null))
var c=ti(u,a&&a.Ba,a&&a.Aa)
return i=i().then(function(){if(xc(t),!o)return t.F().then(function(){})}).then(function(){return Bu(t.a,c,e,n,s,!!u)}).then(function(){return new It(function(n,i){t.ha(e,null,new Ji("cancelled-popup-request"),t.g||null),t.f=n,t.v=i,t.g=s,t.b=t.a.Ea(t,e,c,s)})}).then(function(t){return c&&Qn(c),t?ji(t):null}).s(function(t){throw c&&Qn(c),t}),Mc(t,i,o)}function Lc(t,e,n,i,r){if(!gi())return Ot(new Ji("operation-not-supported-in-this-environment"))
if(t.i&&!r)return Ot(t.i)
var o=null,a=Ei(t.uid+":::")
return i=i().then(function(){if(xc(t),!r)return t.F().then(function(){})}).then(function(){return t.aa=a,bc(t)}).then(function(e){return t.ba&&(e=(e=t.ba).b.set(Vc,t.w(),e.a)),e}).then(function(){return t.a.Ca(e,n,a)}).s(function(e){if(o=e,t.ba)return Kc(t.ba)
throw o}).then(function(){if(o)throw o}),Mc(t,i,r)}function xc(t){if(!t.a||!t.I){if(t.a&&!t.I)throw new Ji("internal-error")
throw new Ji("auth-domain-config-required")}}function Mc(t,e,n){var i=function(t,e,n){return t.i&&!n?(e.cancel(),Ot(t.i)):e.s(function(e){throw!e||"auth/user-disabled"!=e.code&&"auth/user-token-expired"!=e.code||(t.i||t.dispatchEvent(new cc("userInvalidated")),t.i=e),e})}(t,e,n)
return t.G.push(i),i.ia(function(){H(t.G,i)}),i}function jc(t){if(!t.apiKey)return null
var e={apiKey:t.apiKey,authDomain:t.authDomain,appName:t.appName},n={}
if(!(t.stsTokenManager&&t.stsTokenManager.accessToken&&t.stsTokenManager.expirationTime))return null
n[wa]=t.stsTokenManager.accessToken,n.refreshToken=t.stsTokenManager.refreshToken||null,n.expiresIn=(t.stsTokenManager.expirationTime-A())/1e3
var i=new hc(e,n,t)
return t.providerData&&V(t.providerData,function(t){t&&Ec(i,ji(t))}),t.redirectEventId&&(i.aa=t.redirectEventId),i}function Uc(t){this.a=t,this.b=hu()}Ju.prototype.reset=function(){this.b=null,this.a&&(this.a.cancel(),this.a=null)},Ju.prototype.h=function(t,e){if(t){this.reset(),this.g=!0
var n=t.c,i=t.b,r=t.a&&"auth/web-storage-unsupported"==t.a.code,o=t.a&&"auth/operation-not-supported-in-this-environment"==t.a.code
this.i=!(!r&&!o),"unknown"!=n||r||o?t.a?($u(this,!0,null,t.a),_t()):e.xa(n,i)?function(t,e,n){n=n.xa(e.c,e.b)
var i=e.g,r=e.f,o=e.h,a=!!e.c.match(/Redirect$/)
n(i,r,o).then(function(e){$u(t,a,e,null)}).s(function(e){$u(t,a,null,e)})}(this,t,e):Ot(new Ji("invalid-auth-event")):($u(this,!1,null,null),_t())}else Ot(new Ji("invalid-auth-event"))},Ju.prototype.Za=function(){this.g&&!this.i&&$u(this,!1,null,null)},Ju.prototype.fa=function(){var t=this
return new It(function(e,n){t.b?t.b().then(e,n):(t.f.push(e),t.c.push(n),function(t){var e=new Ji("timeout")
t.a&&t.a.cancel(),t.a=qe(Hu.get()).then(function(){t.b||(t.g=!0,$u(t,!0,null,e))})}(t))})},Zu.prototype.h=function(t,e){if(t){var n=t.c,i=t.b
t.a?(e.ha(t.c,null,t.a,t.b),_t()):e.xa(n,i)?function(t,e){var n=t.b,i=t.c
e.xa(i,n)(t.g,t.f,t.h).then(function(t){e.ha(i,t,null,n)}).s(function(t){e.ha(i,null,t,n)})}(t,e):Ot(new Ji("invalid-auth-event"))}else Ot(new Ji("invalid-auth-event"))},tc.prototype.confirm=function(t){return t=ao(this.verificationId,t),this.a(t)},ic.prototype.start=function(){this.a=this.c,function t(e,n){e.stop(),e.b=qe(function(t,e){return e?(t.a=t.c,t.g()):(e=t.a,t.a*=2,t.a>t.f&&(t.a=t.f),e)}(e,n)).then(function(){return t=u.document,e=null,_i()||!t?_t():new It(function(n){e=function(){_i()&&(t.removeEventListener("visibilitychange",e,!1),n())},t.addEventListener("visibilitychange",e,!1)}).s(function(n){throw t.removeEventListener("visibilitychange",e,!1),n})
var t,e}).then(function(){return e.h()}).then(function(){t(e,!0)}).s(function(n){e.i(n)&&t(e,!1)})}(this,!0)},ic.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)},rc.prototype.w=function(){return{apiKey:this.f.b,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}},rc.prototype.getToken=function(t){return t=!!t,this.b&&!this.a?Ot(new Ji("user-token-expired")):t||!this.b||A()>this.c-3e4?this.a?function(t,e){return function(t,e){return new It(function(n,i){"refresh_token"==e.grant_type&&e.refresh_token||"authorization_code"==e.grant_type&&e.code?Na(t,t.i+"?key="+encodeURIComponent(t.b),function(t){t?t.error?i(gs(t)):t.access_token&&t.refresh_token?n(t):i(new Ji("internal-error")):i(new Ji("network-request-failed"))},"POST",pn(e).toString(),t.f,t.m.get()):i(new Ji("internal-error"))})}(t.f,e).then(function(e){return t.b=e.access_token,t.c=ac(e.expires_in),t.a=e.refresh_token,{accessToken:t.b,expirationTime:t.c,refreshToken:t.a}}).s(function(e){throw"auth/user-token-expired"==e.code&&(t.a=null),e})}(this,{grant_type:"refresh_token",refresh_token:this.a}):_t(null):_t({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})},sc.prototype.w=function(){return{lastLoginAt:this.b,createdAt:this.a}},N(cc,de),N(hc,je),hc.prototype.pa=function(t){this.ka=t,Sa(this.c,t)},hc.prototype.ea=function(){return this.ka},hc.prototype.ya=function(){return W(this.O)},hc.prototype.Ha=function(){this.A.b&&(this.A.stop(),this.A.start())},xi(hc.prototype,"providerId","firebase"),(t=hc.prototype).reload=function(){var t=this
return Mc(this,Tc(this).then(function(){return _c(t).then(function(){return bc(t)}).then(Ic)}))},t.ac=function(t){return this.F(t).then(function(t){return new nc(t)})},t.F=function(t){var e=this
return Mc(this,Tc(this).then(function(){return e.h.getToken(t)}).then(function(t){if(!t)throw new Ji("internal-error")
return t.accessToken!=e.ra&&(gc(e,t.accessToken),e.dispatchEvent(new cc("tokenChanged"))),Ac(e,"refreshToken",t.refreshToken),t.accessToken}))},t.wc=function(t){if(!(t=t.users)||!t.length)throw new Ji("internal-error")
wc(this,{uid:(t=t[0]).localId,displayName:t.displayName,photoURL:t.photoUrl,email:t.email,emailVerified:!!t.emailVerified,phoneNumber:t.phoneNumber,lastLoginAt:t.lastLoginAt,createdAt:t.createdAt})
for(var e=function(t){return(t=t.providerUserInfo)&&t.length?K(t,function(t){return new uc(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)}):[]}(t),n=0;n<e.length;n++)Ec(this,e[n])
Ac(this,"isAnonymous",!(this.email&&t.passwordHash||this.providerData&&this.providerData.length))},t.xc=function(t){return Di("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),this.hb(t)},t.hb=function(t){var e=this,n=null
return Mc(this,t.f(this.c,this.uid).then(function(t){return Oc(e,t),n=Cc(e,t,"reauthenticate"),e.i=null,e.reload()}).then(function(){return n}),!0)},t.oc=function(t){return Di("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),this.fb(t)},t.fb=function(t){var e=this,n=null
return Mc(this,Pc(this,t.providerId).then(function(){return e.F()}).then(function(n){return t.b(e.c,n)}).then(function(t){return n=Cc(e,t,"link"),Rc(e,t)}).then(function(){return n}))},t.pc=function(t,e){var n=this
return Mc(this,Pc(this,"phone").then(function(){return ec(pc(n),t,e,E(n.fb,n))}))},t.yc=function(t,e){var n=this
return Mc(this,_t().then(function(){return ec(pc(n),t,e,E(n.hb,n))}),!0)},t.rb=function(t){var e=this
return Mc(this,this.F().then(function(n){return e.c.rb(n,t)}).then(function(t){return Oc(e,t),e.reload()}))},t.Pc=function(t){var e=this
return Mc(this,this.F().then(function(n){return t.b(e.c,n)}).then(function(t){return Oc(e,t),e.reload()}))},t.sb=function(t){var e=this
return Mc(this,this.F().then(function(n){return e.c.sb(n,t)}).then(function(t){return Oc(e,t),e.reload()}))},t.tb=function(t){if(void 0===t.displayName&&void 0===t.photoURL)return Tc(this)
var e=this
return Mc(this,this.F().then(function(n){return e.c.tb(n,{displayName:t.displayName,photoUrl:t.photoURL})}).then(function(t){return Oc(e,t),Ac(e,"displayName",t.displayName||null),Ac(e,"photoURL",t.photoUrl||null),V(e.providerData,function(t){"password"===t.providerId&&(xi(t,"displayName",e.displayName),xi(t,"photoURL",e.photoURL))}),bc(e)}).then(Ic))},t.Nc=function(t){var e=this
return Mc(this,_c(this).then(function(n){return q(kc(e),t)?function(t,e,n){return vs(t,Xa,{idToken:e,deleteProvider:n})}(e.c,n,[t]).then(function(t){var n={}
return V(t.providerUserInfo||[],function(t){n[t.providerId]=!0}),V(kc(e),function(t){n[t]||Sc(e,t)}),n[oo.PROVIDER_ID]||xi(e,"phoneNumber",null),bc(e)}):bc(e).then(function(){throw new Ji("no-such-provider")})}))},t.delete=function(){var t=this
return Mc(this,this.F().then(function(e){return vs(t.c,Wa,{idToken:e})}).then(function(){t.dispatchEvent(new cc("userDeleted"))})).then(function(){for(var e=0;e<t.G.length;e++)t.G[e].cancel("app-deleted")
lc(t,null),dc(t,null),t.G=[],t.D=!0,mc(t),xi(t,"refreshToken",null),t.a&&t.a.unsubscribe(t)})},t.xb=function(t,e){return!!("linkViaPopup"==t&&(this.g||null)==e&&this.f||"reauthViaPopup"==t&&(this.g||null)==e&&this.f||"linkViaRedirect"==t&&(this.aa||null)==e||"reauthViaRedirect"==t&&(this.aa||null)==e)},t.ha=function(t,e,n,i){"linkViaPopup"!=t&&"reauthViaPopup"!=t||i!=(this.g||null)||(n&&this.v?this.v(n):e&&!n&&this.f&&this.f(e),this.b&&(this.b.cancel(),this.b=null),delete this.f,delete this.v)},t.xa=function(t,e){return"linkViaPopup"==t&&e==(this.g||null)?E(this.Bb,this):"reauthViaPopup"==t&&e==(this.g||null)?E(this.Cb,this):"linkViaRedirect"==t&&(this.aa||null)==e?E(this.Bb,this):"reauthViaRedirect"==t&&(this.aa||null)==e?E(this.Cb,this):null},t.qc=function(t){var e=this
return Dc(this,"linkViaPopup",t,function(){return Pc(e,t.providerId).then(function(){return bc(e)})},!1)},t.zc=function(t){return Dc(this,"reauthViaPopup",t,function(){return _t()},!0)},t.rc=function(t){var e=this
return Lc(this,"linkViaRedirect",t,function(){return Pc(e,t.providerId)},!1)},t.Ac=function(t){return Lc(this,"reauthViaRedirect",t,function(){return _t()},!0)},t.Bb=function(t,e,n){var i=this
this.b&&(this.b.cancel(),this.b=null)
var r=null
return Mc(this,this.F().then(function(r){return Va(i.c,{requestUri:t,postBody:n,sessionId:e,idToken:r})}).then(function(t){return r=Cc(i,t,"link"),Rc(i,t)}).then(function(){return r}))},t.Cb=function(t,e,n){var i=this
this.b&&(this.b.cancel(),this.b=null)
var r=null
return Mc(this,_t().then(function(){return Dr(Ka(i.c,{requestUri:t,sessionId:e,postBody:n}),i.uid)}).then(function(t){return r=Cc(i,t,"reauthenticate"),Oc(i,t),i.i=null,i.reload()}).then(function(){return r}),!0)},t.kb=function(t){var e=this,n=null
return Mc(this,this.F().then(function(e){return n=e,void 0===t||ut(t)?{}:ur(new Zi(t))}).then(function(t){return e.c.kb(n,t)}).then(function(t){if(e.email!=t)return e.reload()}).then(function(){}))},t.toJSON=function(){return this.w()},t.w=function(){var t={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.l,appName:this.o,authDomain:this.u,stsTokenManager:this.h.w(),redirectEventId:this.aa||null}
return this.metadata&&dt(t,this.metadata.w()),V(this.providerData,function(e){t.providerData.push(function(t){var e,n={}
for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e])
return n}(e))}),t}
var Vc={name:"redirectUser",B:"session"}
function Kc(t){return du(t.b,Vc,t.a)}function Fc(t){this.a=t,this.b=hu(),this.c=null,this.f=function(t){var e=Bc("local"),n=Bc("session"),i=Bc("none")
return function(t,e,n){var i=fu(e,n),r=lu(t,e.B)
return t.get(e,n).then(function(o){var a=null
try{a=ki(u.localStorage.getItem(i))}catch(t){}if(a&&!o)return u.localStorage.removeItem(i),t.set(e,a,n)
a&&o&&"localStorage"!=r.type&&u.localStorage.removeItem(i)})}(t.b,e,t.a).then(function(){return t.b.get(n,t.a)}).then(function(r){return r?n:t.b.get(i,t.a).then(function(n){return n?i:t.b.get(e,t.a).then(function(n){return n?e:t.b.get(Hc,t.a).then(function(t){return t?Bc(t):e})})})}).then(function(e){return t.c=e,qc(t,e.B)}).s(function(){t.c||(t.c=e)})}(this),this.b.addListener(Bc("local"),this.a,E(this.g,this))}function qc(t,e){var n,i=[]
for(n in uu)uu[n]!==e&&i.push(du(t.b,Bc(uu[n]),t.a))
return i.push(du(t.b,Hc,t.a)),function(t){return new It(function(e,n){var i=t.length,r=[]
if(i)for(var o=function(t,n){i--,r[t]=n,0==i&&e(r)},a=function(t){n(t)},s=0;s<t.length;s++)Pt(t[s],S(o,s),a)
else e(r)})}(i)}Fc.prototype.g=function(){var t=this,e=Bc("local")
Jc(this,function(){return _t().then(function(){return t.c&&"local"!=t.c.B?t.b.get(e,t.a):null}).then(function(n){if(n)return qc(t,"local").then(function(){t.c=e})})})}
var Hc={name:"persistence",B:"session"}
function Bc(t){return{name:"authUser",B:t}}function Gc(t,e){return Jc(t,function(){return t.b.set(t.c,e.w(),t.a)})}function Wc(t){return Jc(t,function(){return du(t.b,t.c,t.a)})}function Xc(t,e){return Jc(t,function(){return t.b.get(t.c,t.a).then(function(t){return t&&e&&(t.authDomain=e),jc(t||{})})})}function Jc(t,e){return t.f=t.f.then(e,e),t.f}function zc(t){if(this.l=!1,xi(this,"settings",new Qu),xi(this,"app",t),!nh(this).options||!nh(this).options.apiKey)throw new Ji("invalid-api-key")
t=r.a.SDK_VERSION?di(r.a.SDK_VERSION):null,this.c=new ba(nh(this).options&&nh(this).options.apiKey,mr(pr),t),this.N=[],this.o=[],this.I=[],this.Rb=r.a.INTERNAL.createSubscribe(E(this.kc,this)),this.O=void 0,this.Sb=r.a.INTERNAL.createSubscribe(E(this.mc,this)),th(this,null),this.h=new Fc(nh(this).options.apiKey+":"+nh(this).name),this.A=new Uc(nh(this).options.apiKey+":"+nh(this).name),this.V=ah(this,function(t){var e=nh(t).options.authDomain,n=function(t){var e=function(t,e){return t.b.get(Vc,t.a).then(function(t){return t&&e&&(t.authDomain=e),jc(t||{})})}(t.A,nh(t).options.authDomain).then(function(e){return(t.D=e)&&(e.ba=t.A),Kc(t.A)})
return ah(t,e)}(t).then(function(){return Xc(t.h,e)}).then(function(e){return e?(e.ba=t.A,t.D&&(t.D.aa||null)==(e.aa||null)?e:e.reload().then(function(){return Gc(t.h,e).then(function(){return e})}).s(function(n){return"auth/network-request-failed"==n.code?e:Wc(t.h)})):null}).then(function(e){th(t,e||null)})
return ah(t,n)}(this)),this.i=ah(this,function(t){return t.V.then(function(){return t.fa()}).s(function(){}).then(function(){if(!t.l)return t.ka()}).s(function(){}).then(function(){if(!t.l){t.X=!0
var e=t.h
e.b.addListener(Bc("local"),e.a,t.ka)}})}(this)),this.X=!1,this.ka=E(this.Kc,this),this.Ha=E(this.Z,this),this.ra=E(this.Zb,this),this.sa=E(this.ic,this),this.ta=E(this.jc,this),function(t){var e=nh(t).options.authDomain,n=nh(t).options.apiKey
e&&gi()&&(t.Qb=t.V.then(function(){if(!t.l){if(t.a=Xu(e,n,nh(t).name),t.a.subscribe(t),ih(t)&&yc(ih(t)),t.D){yc(t.D)
var i=t.D
i.pa(t.ea()),lc(i,t),fc(i=t.D,t.G),dc(i,t),t.D=null}return t.a}}))}(this),this.INTERNAL={},this.INTERNAL.delete=E(this.delete,this),this.INTERNAL.logFramework=E(this.sc,this),this.u=0,je.call(this),function(t){Object.defineProperty(t,"lc",{get:function(){return this.ea()},set:function(t){this.pa(t)},enumerable:!1}),t.W=null}(this),this.G=[]}function Yc(t){de.call(this,"languageCodeChanged"),this.g=t}function $c(t){de.call(this,"frameworkChanged"),this.c=t}function Zc(t){return t.Qb||Ot(new Ji("auth-domain-config-required"))}function Qc(t,e){var n={}
return n.apiKey=nh(t).options.apiKey,n.authDomain=nh(t).options.authDomain,n.appName=nh(t).name,t.V.then(function(){return function(t,e,n,i){var r=new hc(t,e)
return n&&(r.ba=n),i&&fc(r,i),r.reload().then(function(){return r})}(n,e,t.A,t.ya())}).then(function(e){return ih(t)&&e.uid==ih(t).uid?(Nc(ih(t),e),t.Z(e)):(th(t,e),yc(e),t.Z(e))}).then(function(){oh(t)})}function th(t,e){ih(t)&&(function(t,e){B(t.N,function(t){return t==e})}(ih(t),t.Ha),_e(ih(t),"tokenChanged",t.ra),_e(ih(t),"userDeleted",t.sa),_e(ih(t),"userInvalidated",t.ta),mc(ih(t))),e&&(e.N.push(t.Ha),Se(e,"tokenChanged",t.ra),Se(e,"userDeleted",t.sa),Se(e,"userInvalidated",t.ta),0<t.u&&vc(e)),xi(t,"currentUser",e),e&&(e.pa(t.ea()),lc(e,t),fc(e,t.G),dc(e,t))}function eh(t,e){var n=null,i=null
return ah(t,e.then(function(e){return n=so(e),i=Ir(e),Qc(t,e)}).then(function(){return ji({user:ih(t),credential:n,additionalUserInfo:i,operationType:"signIn"})}))}function nh(t){return t.app}function ih(t){return t.currentUser}function rh(t){return ih(t)&&ih(t)._lat||null}function oh(t){if(t.X){for(var e=0;e<t.o.length;e++)t.o[e]&&t.o[e](rh(t))
if(t.O!==t.getUid()&&t.I.length)for(t.O=t.getUid(),e=0;e<t.I.length;e++)t.I[e]&&t.I[e](rh(t))}}function ah(t,e){return t.N.push(e),e.ia(function(){H(t.N,e)}),e}function sh(){}function uh(){this.a={},this.b=1e12}Fc.prototype.nb=function(t){var e=null,n=this
return function(t){var e=new Ji("invalid-persistence-type"),n=new Ji("unsupported-persistence-type")
t:{for(i in uu)if(uu[i]==t){var i=!0
break t}i=!1}if(!i||"string"!=typeof t)throw e
switch(si()){case"ReactNative":if("session"===t)throw n
break
case"Node":if("none"!==t)throw n
break
default:if(!mi()&&"none"!==t)throw n}}(t),Jc(this,function(){return t!=n.c.B?n.b.get(n.c,n.a).then(function(i){return e=i,qc(n,t)}).then(function(){if(n.c=Bc(t),e)return n.b.set(n.c,e,n.a)}):_t()})},N(zc,je),N(Yc,de),N($c,de),(t=zc.prototype).nb=function(t){return ah(this,t=this.h.nb(t))},t.pa=function(t){this.W===t||this.l||(this.W=t,Sa(this.c,this.W),this.dispatchEvent(new Yc(this.ea())))},t.ea=function(){return this.W},t.Qc=function(){var t=u.navigator
this.pa(t&&(t.languages&&t.languages[0]||t.language||t.userLanguage)||null)},t.sc=function(t){this.G.push(t),Aa(this.c,r.a.SDK_VERSION?di(r.a.SDK_VERSION,this.G):null),this.dispatchEvent(new $c(this.G))},t.ya=function(){return W(this.G)},t.toJSON=function(){return{apiKey:nh(this).options.apiKey,authDomain:nh(this).options.authDomain,appName:nh(this).name,currentUser:ih(this)&&ih(this).w()}},t.xb=function(t,e){switch(t){case"unknown":case"signInViaRedirect":return!0
case"signInViaPopup":return this.g==e&&!!this.f
default:return!1}},t.ha=function(t,e,n,i){"signInViaPopup"==t&&this.g==i&&(n&&this.v?this.v(n):e&&!n&&this.f&&this.f(e),this.b&&(this.b.cancel(),this.b=null),delete this.f,delete this.v)},t.xa=function(t,e){return"signInViaRedirect"==t||"signInViaPopup"==t&&this.g==e&&this.f?E(this.Yb,this):null},t.Yb=function(t,e,n){var i=this
t={requestUri:t,postBody:n,sessionId:e},this.b&&(this.b.cancel(),this.b=null)
var r=null,o=null,a=Ua(i.c,t).then(function(t){return r=so(t),o=Ir(t),t})
return ah(this,t=i.V.then(function(){return a}).then(function(t){return Qc(i,t)}).then(function(){return ji({user:ih(i),credential:r,additionalUserInfo:o,operationType:"signIn"})}))},t.Ic=function(t){if(!gi())return Ot(new Ji("operation-not-supported-in-this-environment"))
var e=this,n=wr(t.providerId),i=Ei(),o=null;(!wi()||oi())&&nh(this).options.authDomain&&t.isOAuthProvider&&(o=Ps(nh(this).options.authDomain,nh(this).options.apiKey,nh(this).name,"signInViaPopup",t,null,i,r.a.SDK_VERSION||null))
var a=ti(o,n&&n.Ba,n&&n.Aa)
return ah(this,n=Zc(this).then(function(e){return Bu(e,a,"signInViaPopup",t,i,!!o)}).then(function(){return new It(function(t,n){e.ha("signInViaPopup",null,new Ji("cancelled-popup-request"),e.g),e.f=t,e.v=n,e.g=i,e.b=e.a.Ea(e,"signInViaPopup",a,i)})}).then(function(t){return a&&Qn(a),t?ji(t):null}).s(function(t){throw a&&Qn(a),t}))},t.Jc=function(t){if(!gi())return Ot(new Ji("operation-not-supported-in-this-environment"))
var e=this
return ah(this,Zc(this).then(function(){return Jc(t=e.h,function(){return t.b.set(Hc,t.c.B,t.a)})
var t}).then(function(){return e.a.Ca("signInViaRedirect",t)}))},t.fa=function(){if(!gi())return Ot(new Ji("operation-not-supported-in-this-environment"))
var t=this
return ah(this,Zc(this).then(function(){return t.a.fa()}).then(function(t){return t?ji(t):null}))},t.Oc=function(t){if(!t)return Ot(new Ji("null-user"))
var e=this,n={}
n.apiKey=nh(this).options.apiKey,n.authDomain=nh(this).options.authDomain,n.appName=nh(this).name
var i=function(t,e,n,i){e=e||{apiKey:t.l,authDomain:t.u,appName:t.o}
var r=t.h,o={}
return o[wa]=r.b,o.refreshToken=r.a,o.expiresIn=(r.c-A())/1e3,e=new hc(e,o),n&&(e.ba=n),i&&fc(e,i),Nc(e,t),e}(t,n,e.A,e.ya())
return ah(this,this.i.then(function(){if(nh(e).options.apiKey!=t.l)return i.reload()}).then(function(){return ih(e)&&t.uid==ih(e).uid?(Nc(ih(e),t),e.Z(t)):(th(e,i),yc(i),e.Z(i))}).then(function(){oh(e)}))},t.pb=function(){var t=this
return ah(this,this.i.then(function(){return ih(t)?(th(t,null),Wc(t.h).then(function(){oh(t)})):_t()}))},t.Kc=function(){var t=this
return Xc(this.h,nh(this).options.authDomain).then(function(e){if(!t.l){var n
if(n=ih(t)&&e){n=ih(t).uid
var i=e.uid
n=null!=n&&""!==n&&null!=i&&""!==i&&n==i}if(n)return Nc(ih(t),e),ih(t).F();(ih(t)||e)&&(th(t,e),e&&(yc(e),e.ba=t.A),t.a&&t.a.subscribe(t),oh(t))}})},t.Z=function(t){return Gc(this.h,t)},t.Zb=function(){oh(this),this.Z(ih(this))},t.ic=function(){this.pb()},t.jc=function(){this.pb()},t.kc=function(t){var e=this
this.addAuthTokenListener(function(){t.next(ih(e))})},t.mc=function(t){var e=this
!function(t,e){t.I.push(e),ah(t,t.i.then(function(){!t.l&&q(t.I,e)&&t.O!==t.getUid()&&(t.O=t.getUid(),e(rh(t)))}))}(this,function(){t.next(ih(e))})},t.uc=function(t,e,n){var i=this
return this.X&&Promise.resolve().then(function(){b(t)?t(ih(i)):b(t.next)&&t.next(ih(i))}),this.Rb(t,e,n)},t.tc=function(t,e,n){var i=this
return this.X&&Promise.resolve().then(function(){i.O=i.getUid(),b(t)?t(ih(i)):b(t.next)&&t.next(ih(i))}),this.Sb(t,e,n)},t.$b=function(t){var e=this
return ah(this,this.i.then(function(){return ih(e)?ih(e).F(t).then(function(t){return{accessToken:t}}):null}))},t.Ec=function(t){var e=this
return this.i.then(function(){return eh(e,vs(e.c,hs,{token:t}))}).then(function(t){var n=t.user
return Ac(n,"isAnonymous",!1),e.Z(n),t})},t.Fc=function(t,e){var n=this
return this.i.then(function(){return eh(n,vs(n.c,ls,{email:t,password:e}))})},t.Ub=function(t,e){var n=this
return this.i.then(function(){return eh(n,vs(n.c,Ba,{email:t,password:e}))})},t.Ra=function(t){var e=this
return this.i.then(function(){return eh(e,t.la(e.c))})},t.Dc=function(t){return Di("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),this.Ra(t)},t.ob=function(){var t=this
return this.i.then(function(){var e=ih(t)
if(e&&e.isAnonymous){var n=ji({providerId:null,isNewUser:!1})
return ji({user:e,credential:null,additionalUserInfo:n,operationType:"signIn"})}return eh(t,t.c.ob()).then(function(e){var n=e.user
return Ac(n,"isAnonymous",!0),t.Z(n),e})})},t.getUid=function(){return ih(this)&&ih(this).uid||null},t.Tb=function(t){this.addAuthTokenListener(t),this.u++,0<this.u&&ih(this)&&vc(ih(this))},t.Bc=function(t){var e=this
V(this.o,function(n){n==t&&e.u--}),0>this.u&&(this.u=0),0==this.u&&ih(this)&&mc(ih(this)),this.removeAuthTokenListener(t)},t.addAuthTokenListener=function(t){var e=this
this.o.push(t),ah(this,this.i.then(function(){e.l||q(e.o,t)&&t(rh(e))}))},t.removeAuthTokenListener=function(t){B(this.o,function(e){return e==t})},t.delete=function(){this.l=!0
for(var t=0;t<this.N.length;t++)this.N[t].cancel("app-deleted")
return this.N=[],this.h&&(t=this.h).b.removeListener(Bc("local"),t.a,this.ka),this.a&&(this.a.unsubscribe(this),this.a.Za()),Promise.resolve()},t.Xb=function(t){return ah(this,function(t,e){return vs(t,Ga,{identifier:e,continueUri:bi()?Yn():"http://localhost"}).then(function(t){return t.signinMethods||[]})}(this.c,t))},t.nc=function(t){return!!eo(t)},t.mb=function(t,e){var n=this
return ah(this,_t().then(function(){var t=new Zi(e)
if(!t.c)throw new Ji("argument-error",er+" must be true when sending sign in link to email")
return ur(t)}).then(function(e){return n.c.mb(t,e)}).then(function(){}))},t.Rc=function(t){return this.Ka(t).then(function(t){return t.data.email})},t.$a=function(t,e){return ah(this,this.c.$a(t,e).then(function(){}))},t.Ka=function(t){return ah(this,this.c.Ka(t).then(function(t){return new Vi(t)}))},t.Xa=function(t){return ah(this,this.c.Xa(t).then(function(){}))},t.lb=function(t,e){var n=this
return ah(this,_t().then(function(){return void 0===e||ut(e)?{}:ur(new Zi(e))}).then(function(e){return n.c.lb(t,e)}).then(function(){}))},t.Hc=function(t,e){return ah(this,ec(this,t,e,E(this.Ra,this)))},t.Gc=function(t,e){var n=this
return ah(this,_t().then(function(){var i=to(t,e||Yn())
return n.Ra(i)}))},sh.prototype.render=function(){},sh.prototype.reset=function(){},sh.prototype.getResponse=function(){},sh.prototype.execute=function(){}
var ch=null
function hh(t,e){return(e=lh(e))&&t.a[e]||null}function lh(t){return(t=void 0===t?1e12:t)?t.toString():null}function fh(t,e){this.g=!1,this.c=e,this.a=this.b=null,this.h="invisible"!==this.c.size,this.f=Kn(t)
var n=this
this.i=function(){n.execute()},this.h?this.execute():Se(this.f,"click",this.i)}function dh(t){if(t.g)throw Error("reCAPTCHA mock was already deleted!")}function ph(){}uh.prototype.render=function(t,e){return this.a[this.b.toString()]=new fh(t,e),this.b++},uh.prototype.reset=function(t){var e=hh(this,t)
t=lh(t),e&&t&&(e.delete(),delete this.a[t])},uh.prototype.getResponse=function(t){return(t=hh(this,t))?t.getResponse():null},uh.prototype.execute=function(t){(t=hh(this,t))&&t.execute()},fh.prototype.getResponse=function(){return dh(this),this.b},fh.prototype.execute=function(){dh(this)
var t=this
this.a||(this.a=setTimeout(function(){t.b=function(){for(var t=50,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return e.join("")}()
var e=t.c.callback,n=t.c["expired-callback"]
if(e)try{e(t.b)}catch(t){}t.a=setTimeout(function(){if(t.a=null,t.b=null,n)try{n()}catch(t){}t.h&&t.execute()},6e4)},500))},fh.prototype.delete=function(){dh(this),this.g=!0,clearTimeout(this.a),this.a=null,_e(this.f,"click",this.i)},ph.prototype.g=function(){return ch||(ch=new uh),_t(ch)},ph.prototype.c=function(){}
var vh=null
function mh(){this.b=u.grecaptcha?1/0:0,this.f=null,this.a="__rcb"+Math.floor(1e6*Math.random()).toString()}var gh=new In(En,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),bh=new Ni(3e4,6e4)
mh.prototype.g=function(t){var e=this
return new It(function(n,i){var r=setTimeout(function(){i(new Ji("network-request-failed"))},bh.get())
!u.grecaptcha||t!==e.f&&!e.b?(u[e.a]=function(){if(u.grecaptcha){e.f=t
var o=u.grecaptcha.render
u.grecaptcha.render=function(t,n){return t=o(t,n),e.b++,t},clearTimeout(r),n(u.grecaptcha)}else clearTimeout(r),i(new Ji("internal-error"))
delete u[e.a]},_t(la(Nn(gh,{onload:e.a,hl:t||""}))).s(function(){clearTimeout(r),i(new Ji("internal-error","Unable to load external reCAPTCHA dependencies!"))})):(clearTimeout(r),n(u.grecaptcha))})},mh.prototype.c=function(){this.b--}
var yh=null
function wh(t,e,n,i,r,o,a){if(xi(this,"type","recaptcha"),this.c=this.f=null,this.D=!1,this.l=e,this.g=null,a?(vh||(vh=new ph),a=vh):(yh||(yh=new mh),a=yh),this.o=a,this.a=n||{theme:"light",type:"image"},this.h=[],this.a[kh])throw new Ji("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.")
if(this.i="invisible"===this.a[Eh],!u.document)throw new Ji("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.")
if(!Kn(e)||!this.i&&Kn(e).hasChildNodes())throw new Ji("argument-error","reCAPTCHA container is either not found or already contains inner elements!")
this.u=new ba(t,o||null,r||null),this.v=i||function(){return null}
var s=this
this.m=[]
var c=this.a[Ih]
this.a[Ih]=function(t){if(Sh(s,t),"function"==typeof c)c(t)
else if("string"==typeof c){var e=vi(c,u)
"function"==typeof e&&e(t)}}
var h=this.a[Th]
this.a[Th]=function(){if(Sh(s,null),"function"==typeof h)h()
else if("string"==typeof h){var t=vi(h,u)
"function"==typeof t&&t()}}}var Ih="callback",Th="expired-callback",kh="sitekey",Eh="size"
function Sh(t,e){for(var n=0;n<t.m.length;n++)try{t.m[n](e)}catch(t){}}function Ah(t,e){return t.h.push(e),e.ia(function(){H(t.h,e)}),e}function Nh(t){if(t.D)throw new Ji("internal-error","RecaptchaVerifier instance has been destroyed.")}function _h(t,e,n){var i=!1
try{this.b=n||r.a.app()}catch(t){throw new Ji("argument-error","No firebase.app.App instance is currently initialized.")}if(!this.b.options||!this.b.options.apiKey)throw new Ji("invalid-api-key")
n=this.b.options.apiKey
var o=this,a=null
try{a=this.b.auth().ya()}catch(t){}try{i=this.b.auth().settings.appVerificationDisabledForTesting}catch(t){}a=r.a.SDK_VERSION?di(r.a.SDK_VERSION,a):null,wh.call(this,n,t,e,function(){try{var t=o.b.auth().ea()}catch(e){t=null}return t},a,mr(pr),i)}function Oh(t,e,n,i){t:{n=Array.prototype.slice.call(n)
for(var r=0,o=!1,a=0;a<e.length;a++)if(e[a].optional)o=!0
else{if(o)throw new Ji("internal-error","Argument validator encountered a required argument after an optional argument.")
r++}if(o=e.length,n.length<r||o<n.length)i="Expected "+(r==o?1==r?"1 argument":r+" arguments":r+"-"+o+" arguments")+" but got "+n.length+"."
else{for(r=0;r<n.length;r++)if(o=e[r].optional&&void 0===n[r],!e[r].M(n[r])&&!o){if(e=e[r],0>r||r>=Ph.length)throw new Ji("internal-error","Argument validator received an unsupported number of arguments.")
n=Ph[r],i=(i?"":n+" argument ")+(e.name?'"'+e.name+'" ':"")+"must be "+e.K+"."
break t}i=null}}if(i)throw new Ji("argument-error",t+" failed: "+i)}(t=wh.prototype).za=function(){var t=this
return this.f?this.f:this.f=Ah(this,_t().then(function(){if(bi()&&!ai())return ii()
throw new Ji("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")}).then(function(){return t.o.g(t.v())}).then(function(e){return t.g=e,vs(t.u,es,{})}).then(function(e){t.a[kh]=e.recaptchaSiteKey}).s(function(e){throw t.f=null,e}))},t.render=function(){Nh(this)
var t=this
return Ah(this,this.za().then(function(){if(null===t.c){var e=t.l
if(!t.i){var n=Kn(e)
e=function(t,e,n){var i=arguments,r=document,o=String(i[0]),a=i[1]
if(!wn&&a&&(a.name||a.type)){if(o=["<",o],a.name&&o.push(' name="',vt(a.name),'"'),a.type){o.push(' type="',vt(a.type),'"')
var s={}
dt(s,a),delete s.type,a=s}o.push(">"),o=o.join("")}return o=r.createElement(o),a&&(c(a)?o.className=a:m(a)?o.className=a.join(" "):Fn(o,a)),2<i.length&&function(t,e,n){function i(n){n&&e.appendChild(c(n)?t.createTextNode(n):n)}for(var r=2;r<n.length;r++){var o=n[r]
!g(o)||y(o)&&0<o.nodeType?i(o):V(Hn(o)?W(o):o,i)}}(r,o,i),o}("DIV"),n.appendChild(e)}t.c=t.g.render(e,t.a)}return t.c}))},t.verify=function(){Nh(this)
var t=this
return Ah(this,this.render().then(function(e){return new It(function(n){var i=t.g.getResponse(e)
i?n(i):(t.m.push(function e(i){i&&(function(t,e){B(t.m,function(t){return t==e})}(t,e),n(i))}),t.i&&t.g.execute(t.c))})}))},t.reset=function(){Nh(this),null!==this.c&&this.g.reset(this.c)},t.clear=function(){Nh(this),this.D=!0,this.o.c()
for(var t=0;t<this.h.length;t++)this.h[t].cancel("RecaptchaVerifier instance has been destroyed.")
if(!this.i){t=Kn(this.l)
for(var e;e=t.firstChild;)t.removeChild(e)}},N(_h,wh)
var Ph="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ")
function Ch(t,e){return{name:t||"",K:"a valid string",optional:!!e,M:c}}function Rh(t,e){return{name:t||"",K:"a boolean",optional:!!e,M:h}}function Dh(t,e){return{name:t||"",K:"a valid object",optional:!!e,M:y}}function Lh(t,e){return{name:t||"",K:"a function",optional:!!e,M:b}}function xh(t,e){return{name:t||"",K:"null",optional:!!e,M:v}}function Mh(t){return{name:t?t+"Credential":"credential",K:t?"a valid "+t+" credential":"a valid credential",optional:!1,M:function(e){if(!e)return!1
var n=!t||e.providerId===t
return!(!e.la||!n)}}}function jh(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(t){return!!(t&&c(t.type)&&b(t.verify))}}}function Uh(t,e,n,i){return{name:n||"",K:t.K+" or "+e.K,optional:!!i,M:function(n){return t.M(n)||e.M(n)}}}function Vh(t,e){for(var n in e){var i=e[n].name
t[i]=qh(i,t[n],e[n].j)}}function Kh(t,e){for(var n in e){var i=e[n].name
i!==n&&Object.defineProperty(t,i,{get:S(function(t){return this[t]},n),set:S(function(t,e,n,i){Oh(t,[n],[i],!0),this[e]=i},i,n,e[n].vb),enumerable:!0})}}function Fh(t,e,n,i){t[e]=qh(e,n,i)}function qh(t,e,n){function i(){var t=Array.prototype.slice.call(arguments)
return Oh(o,n,t),e.apply(this,t)}if(!n)return e
var r,o=function(t){return(t=t.split("."))[t.length-1]}(t)
for(r in e)i[r]=e[r]
for(r in e.prototype)i.prototype[r]=e.prototype[r]
return i}Vh(zc.prototype,{Xa:{name:"applyActionCode",j:[Ch("code")]},Ka:{name:"checkActionCode",j:[Ch("code")]},$a:{name:"confirmPasswordReset",j:[Ch("code"),Ch("newPassword")]},Ub:{name:"createUserWithEmailAndPassword",j:[Ch("email"),Ch("password")]},Xb:{name:"fetchSignInMethodsForEmail",j:[Ch("email")]},fa:{name:"getRedirectResult",j:[]},nc:{name:"isSignInWithEmailLink",j:[Ch("emailLink")]},tc:{name:"onAuthStateChanged",j:[Uh(Dh(),Lh(),"nextOrObserver"),Lh("opt_error",!0),Lh("opt_completed",!0)]},uc:{name:"onIdTokenChanged",j:[Uh(Dh(),Lh(),"nextOrObserver"),Lh("opt_error",!0),Lh("opt_completed",!0)]},lb:{name:"sendPasswordResetEmail",j:[Ch("email"),Uh(Dh("opt_actionCodeSettings",!0),xh(null,!0),"opt_actionCodeSettings",!0)]},mb:{name:"sendSignInLinkToEmail",j:[Ch("email"),Dh("actionCodeSettings")]},nb:{name:"setPersistence",j:[Ch("persistence")]},Dc:{name:"signInAndRetrieveDataWithCredential",j:[Mh()]},ob:{name:"signInAnonymously",j:[]},Ra:{name:"signInWithCredential",j:[Mh()]},Ec:{name:"signInWithCustomToken",j:[Ch("token")]},Fc:{name:"signInWithEmailAndPassword",j:[Ch("email"),Ch("password")]},Gc:{name:"signInWithEmailLink",j:[Ch("email"),Ch("emailLink",!0)]},Hc:{name:"signInWithPhoneNumber",j:[Ch("phoneNumber"),jh()]},Ic:{name:"signInWithPopup",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Jc:{name:"signInWithRedirect",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Oc:{name:"updateCurrentUser",j:[Uh({name:"user",K:"an instance of Firebase User",optional:!1,M:function(t){return!!(t&&t instanceof hc)}},xh(),"user")]},pb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[Ch(null,!0)]},Qc:{name:"useDeviceLanguage",j:[]},Rc:{name:"verifyPasswordResetCode",j:[Ch("code")]}}),Kh(zc.prototype,{lc:{name:"languageCode",vb:Uh(Ch(),xh(),"languageCode")}}),zc.Persistence=uu,zc.Persistence.LOCAL="local",zc.Persistence.SESSION="session",zc.Persistence.NONE="none",Vh(hc.prototype,{delete:{name:"delete",j:[]},ac:{name:"getIdTokenResult",j:[Rh("opt_forceRefresh",!0)]},F:{name:"getIdToken",j:[Rh("opt_forceRefresh",!0)]},oc:{name:"linkAndRetrieveDataWithCredential",j:[Mh()]},fb:{name:"linkWithCredential",j:[Mh()]},pc:{name:"linkWithPhoneNumber",j:[Ch("phoneNumber"),jh()]},qc:{name:"linkWithPopup",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},rc:{name:"linkWithRedirect",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},xc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Mh()]},hb:{name:"reauthenticateWithCredential",j:[Mh()]},yc:{name:"reauthenticateWithPhoneNumber",j:[Ch("phoneNumber"),jh()]},zc:{name:"reauthenticateWithPopup",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Ac:{name:"reauthenticateWithRedirect",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},reload:{name:"reload",j:[]},kb:{name:"sendEmailVerification",j:[Uh(Dh("opt_actionCodeSettings",!0),xh(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[Ch(null,!0)]},Nc:{name:"unlink",j:[Ch("provider")]},rb:{name:"updateEmail",j:[Ch("email")]},sb:{name:"updatePassword",j:[Ch("password")]},Pc:{name:"updatePhoneNumber",j:[Mh("phone")]},tb:{name:"updateProfile",j:[Dh("profile")]}}),Vh(uh.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Vh(sh.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Vh(It.prototype,{ia:{name:"finally"},s:{name:"catch"},then:{name:"then"}}),Kh(Qu.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",vb:Rh("appVerificationDisabledForTesting")}}),Vh(tc.prototype,{confirm:{name:"confirm",j:[Ch("verificationCode")]}}),Fh(Rr,"fromJSON",function(t){t=c(t)?JSON.parse(t):t
for(var e,n=[Vr,Zr,io,Mr],i=0;i<n.length;i++)if(e=n[i](t))return e
return null},[Uh(Ch(),Dh(),"json")]),Fh(Qr,"credential",function(t,e){return new $r(t,e)},[Ch("email"),Ch("password")]),Vh($r.prototype,{w:{name:"toJSON",j:[Ch(null,!0)]}}),Vh(Hr.prototype,{ua:{name:"addScope",j:[Ch("scope")]},Da:{name:"setCustomParameters",j:[Dh("customOAuthParameters")]}}),Fh(Hr,"credential",Br,[Uh(Ch(),Dh(),"token")]),Fh(Qr,"credentialWithLink",to,[Ch("email"),Ch("emailLink")]),Vh(Gr.prototype,{ua:{name:"addScope",j:[Ch("scope")]},Da:{name:"setCustomParameters",j:[Dh("customOAuthParameters")]}}),Fh(Gr,"credential",Wr,[Uh(Ch(),Dh(),"token")]),Vh(Xr.prototype,{ua:{name:"addScope",j:[Ch("scope")]},Da:{name:"setCustomParameters",j:[Dh("customOAuthParameters")]}}),Fh(Xr,"credential",Jr,[Uh(Ch(),Uh(Dh(),xh()),"idToken"),Uh(Ch(),xh(),"accessToken",!0)]),Vh(zr.prototype,{Da:{name:"setCustomParameters",j:[Dh("customOAuthParameters")]}}),Fh(zr,"credential",Yr,[Uh(Ch(),Dh(),"token"),Ch("secret",!0)]),Vh(qr.prototype,{ua:{name:"addScope",j:[Ch("scope")]},credential:{name:"credential",j:[Uh(Ch(),Uh(Dh(),xh()),"optionsOrIdToken"),Uh(Ch(),xh(),"accessToken",!0)]},Da:{name:"setCustomParameters",j:[Dh("customOAuthParameters")]}}),Vh(jr.prototype,{w:{name:"toJSON",j:[Ch(null,!0)]}}),Vh(Lr.prototype,{w:{name:"toJSON",j:[Ch(null,!0)]}}),Fh(oo,"credential",ao,[Ch("verificationId"),Ch("verificationCode")]),Vh(oo.prototype,{Va:{name:"verifyPhoneNumber",j:[Ch("phoneNumber"),jh()]}}),Vh(no.prototype,{w:{name:"toJSON",j:[Ch(null,!0)]}}),Vh(Ji.prototype,{toJSON:{name:"toJSON",j:[Ch(null,!0)]}}),Vh(mo.prototype,{toJSON:{name:"toJSON",j:[Ch(null,!0)]}}),Vh(vo.prototype,{toJSON:{name:"toJSON",j:[Ch(null,!0)]}}),Vh(_h.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}}),function(){if(void 0===r.a||!r.a.INTERNAL||!r.a.INTERNAL.registerService)throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.")
var t={Auth:zc,AuthCredential:Rr,Error:Ji}
Fh(t,"EmailAuthProvider",Qr,[]),Fh(t,"FacebookAuthProvider",Hr,[]),Fh(t,"GithubAuthProvider",Gr,[]),Fh(t,"GoogleAuthProvider",Xr,[]),Fh(t,"TwitterAuthProvider",zr,[]),Fh(t,"OAuthProvider",qr,[Ch("providerId")]),Fh(t,"SAMLAuthProvider",Fr,[Ch("providerId")]),Fh(t,"PhoneAuthProvider",oo,[{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(t){return!!(t&&t instanceof zc)}}]),Fh(t,"RecaptchaVerifier",_h,[Uh(Ch(),{name:"",K:"an HTML element",optional:!1,M:function(t){return!!(t&&t instanceof Element)}},"recaptchaContainer"),Dh("recaptchaParameters",!0),{name:"app",K:"an instance of Firebase App",optional:!0,M:function(t){return!!(t&&t instanceof r.a.app.App)}}]),r.a.INTERNAL.registerService("auth",function(t,e){return e({INTERNAL:{getUid:E((t=new zc(t)).getUid,t),getToken:E(t.$b,t),addAuthTokenListener:E(t.Tb,t),removeAuthTokenListener:E(t.Bc,t)}}),t},t,function(t,e){if("create"===t)try{e.auth()}catch(t){}}),r.a.INTERNAL.extendNamespace({User:hc})}()}).apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}}])
