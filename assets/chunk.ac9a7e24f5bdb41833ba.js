(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[5],{189:function(t,e,n){"use strict"
n.r(e),n(196)},196:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o,s,a,u,h,l,c,p,d,f,_,y=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,v=n(197),g=n(64),m=n(65),C=function(){function t(t){this.domStorage_=t,this.prefix_="firebase:"}return t.prototype.set=function(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),g.stringify(e))},t.prototype.get=function(t){var e=this.domStorage_.getItem(this.prefixedName_(t))
return null==e?null:g.jsonEval(e)},t.prototype.remove=function(t){this.domStorage_.removeItem(this.prefixedName_(t))},t.prototype.prefixedName_=function(t){return this.prefix_+t},t.prototype.toString=function(){return this.domStorage_.toString()},t}(),E=function(){function t(){this.cache_={},this.isInMemoryStorage=!0}return t.prototype.set=function(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e},t.prototype.get=function(t){return g.contains(this.cache_,t)?this.cache_[t]:null},t.prototype.remove=function(t){delete this.cache_[t]},t}(),w=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){var e=window[t]
return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new C(e)}}catch(t){}return new E},b=w("localStorage"),S=w("sessionStorage"),T=new m.Logger("@firebase/database"),I=(o=1,function(){return o++}),N=function(t){var e=g.stringToByteArray(t),n=new g.Sha1
n.update(e)
var r=n.digest()
return g.base64.encodeByteArray(r)},R=function t(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
for(var i="",o=0;o<e.length;o++)Array.isArray(e[o])||e[o]&&"object"===r(e[o])&&"number"==typeof e[o].length?i+=t.apply(null,e[o]):"object"===r(e[o])?i+=g.stringify(e[o]):i+=e[o],i+=" "
return i},P=null,D=!0,x=function(t,e){g.assert(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(T.logLevel=m.LogLevel.VERBOSE,P=T.log.bind(T),e&&S.set("logging_enabled",!0)):"function"==typeof t?P=t:(P=null,S.remove("logging_enabled"))},O=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
if(!0===D&&(D=!1,null===P&&!0===S.get("logging_enabled")&&x(!0)),P){var n=R.apply(null,t)
P(n)}},k=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
O.apply(void 0,[t].concat(e))}},F=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="FIREBASE INTERNAL ERROR: "+R.apply(void 0,t)
T.error(n)},A=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="FIREBASE FATAL ERROR: "+R.apply(void 0,t)
throw T.error(n),new Error(n)},L=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="FIREBASE WARNING: "+R.apply(void 0,t)
T.warn(n)},M=function(t){return"number"==typeof t&&(t!=t||t==Number.POSITIVE_INFINITY||t==Number.NEGATIVE_INFINITY)},W="[MIN_NAME]",q="[MAX_NAME]",Q=function(t,e){if(t===e)return 0
if(t===W||e===q)return-1
if(e===W||t===q)return 1
var n=z(t),r=z(e)
return null!==n?null!==r?n-r==0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1},U=function(t,e){return t===e?0:t<e?-1:1},V=function(t,e){if(e&&t in e)return e[t]
throw new Error("Missing required key ("+t+") in object: "+g.stringify(e))},H=function t(e){if("object"!==r(e)||null===e)return g.stringify(e)
var n=[]
for(var i in e)n.push(i)
n.sort()
for(var o="{",s=0;s<n.length;s++)0!==s&&(o+=","),o+=g.stringify(n[s]),o+=":",o+=t(e[n[s]])
return o+"}"},j=function(t,e){var n=t.length
if(n<=e)return[t]
for(var r=[],i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e))
return r},B=function(t,e){if(Array.isArray(t))for(var n=0;n<t.length;++n)e(n,t[n])
else g.forEach(t,function(t,n){return e(n,t)})},K=function(t){var e,n,r,i,o,s,a
for(g.assert(!M(t),"Invalid JSON number"),0===t?(n=0,r=0,e=1/t==-1/0?1:0):(e=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(t)/Math.LN2),1023))+1023,r=Math.round(t*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(t/Math.pow(2,-1074)))),s=[],o=52;o;o-=1)s.push(r%2?1:0),r=Math.floor(r/2)
for(o=11;o;o-=1)s.push(n%2?1:0),n=Math.floor(n/2)
s.push(e?1:0),s.reverse(),a=s.join("")
var u=""
for(o=0;o<64;o+=8){var h=parseInt(a.substr(o,8),2).toString(16)
1===h.length&&(h="0"+h),u+=h}return u.toLowerCase()},Y=new RegExp("^-?\\d{1,10}$"),z=function(t){if(Y.test(t)){var e=Number(t)
if(e>=-2147483648&&e<=2147483647)return e}return null},G=function(t){try{t()}catch(t){setTimeout(function(){var e=t.stack||""
throw L("Exception was thrown by user callback.",e),t},Math.floor(0))}},X=function(){return("object"===("undefined"==typeof window?"undefined":r(window))&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$=function(t,e){var n=setTimeout(t,e)
return"object"===r(n)&&n.unref&&n.unref(),n},J=function(){function t(t,e){if(void 0===e){this.pieces_=t.split("/")
for(var n=0,r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++)
this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}return Object.defineProperty(t,"Empty",{get:function(){return new t("")},enumerable:!0,configurable:!0}),t.prototype.getFront=function(){return this.pieceNum_>=this.pieces_.length?null:this.pieces_[this.pieceNum_]},t.prototype.getLength=function(){return this.pieces_.length-this.pieceNum_},t.prototype.popFront=function(){var e=this.pieceNum_
return e<this.pieces_.length&&e++,new t(this.pieces_,e)},t.prototype.getBack=function(){return this.pieceNum_<this.pieces_.length?this.pieces_[this.pieces_.length-1]:null},t.prototype.toString=function(){for(var t="",e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e])
return t||"/"},t.prototype.toUrlEncodedString=function(){for(var t="",e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+encodeURIComponent(String(this.pieces_[e])))
return t||"/"},t.prototype.slice=function(t){return void 0===t&&(t=0),this.pieces_.slice(this.pieceNum_+t)},t.prototype.parent=function(){if(this.pieceNum_>=this.pieces_.length)return null
for(var e=[],n=this.pieceNum_;n<this.pieces_.length-1;n++)e.push(this.pieces_[n])
return new t(e,0)},t.prototype.child=function(e){for(var n=[],r=this.pieceNum_;r<this.pieces_.length;r++)n.push(this.pieces_[r])
if(e instanceof t)for(r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r])
else{var i=e.split("/")
for(r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new t(n,0)},t.prototype.isEmpty=function(){return this.pieceNum_>=this.pieces_.length},t.relativePath=function(e,n){var r=e.getFront(),i=n.getFront()
if(null===r)return n
if(r===i)return t.relativePath(e.popFront(),n.popFront())
throw new Error("INTERNAL ERROR: innerPath ("+n+") is not within outerPath ("+e+")")},t.comparePaths=function(t,e){for(var n=t.slice(),r=e.slice(),i=0;i<n.length&&i<r.length;i++){var o=Q(n[i],r[i])
if(0!==o)return o}return n.length===r.length?0:n.length<r.length?-1:1},t.prototype.equals=function(t){if(this.getLength()!==t.getLength())return!1
for(var e=this.pieceNum_,n=t.pieceNum_;e<=this.pieces_.length;e++,n++)if(this.pieces_[e]!==t.pieces_[n])return!1
return!0},t.prototype.contains=function(t){var e=this.pieceNum_,n=t.pieceNum_
if(this.getLength()>t.getLength())return!1
for(;e<this.pieces_.length;){if(this.pieces_[e]!==t.pieces_[n])return!1;++e,++n}return!0},t}(),Z=function(){function t(t,e){this.errorPrefix_=e,this.parts_=t.slice(),this.byteLength_=Math.max(1,this.parts_.length)
for(var n=0;n<this.parts_.length;n++)this.byteLength_+=g.stringLength(this.parts_[n])
this.checkValid_()}return Object.defineProperty(t,"MAX_PATH_DEPTH",{get:function(){return 32},enumerable:!0,configurable:!0}),Object.defineProperty(t,"MAX_PATH_LENGTH_BYTES",{get:function(){return 768},enumerable:!0,configurable:!0}),t.prototype.push=function(t){this.parts_.length>0&&(this.byteLength_+=1),this.parts_.push(t),this.byteLength_+=g.stringLength(t),this.checkValid_()},t.prototype.pop=function(){var t=this.parts_.pop()
this.byteLength_-=g.stringLength(t),this.parts_.length>0&&(this.byteLength_-=1)},t.prototype.checkValid_=function(){if(this.byteLength_>t.MAX_PATH_LENGTH_BYTES)throw new Error(this.errorPrefix_+"has a key path longer than "+t.MAX_PATH_LENGTH_BYTES+" bytes ("+this.byteLength_+").")
if(this.parts_.length>t.MAX_PATH_DEPTH)throw new Error(this.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+t.MAX_PATH_DEPTH+") or object contains a cycle "+this.toErrorString())},t.prototype.toErrorString=function(){return 0==this.parts_.length?"":"in property '"+this.parts_.join(".")+"'"},t}(),tt="long_polling",et=function(){function t(t,e,n,r,i){void 0===i&&(i=""),this.secure=e,this.namespace=n,this.webSocketOnly=r,this.persistenceKey=i,this.host=t.toLowerCase(),this.domain=this.host.substr(this.host.indexOf(".")+1),this.internalHost=b.get("host:"+t)||this.host}return t.prototype.needsQueryParam=function(){return this.host!==this.internalHost||this.isCustomHost()},t.prototype.isCacheableHost=function(){return"s-"===this.internalHost.substr(0,2)},t.prototype.isDemoHost=function(){return"firebaseio-demo.com"===this.domain},t.prototype.isCustomHost=function(){return"firebaseio.com"!==this.domain&&"firebaseio-demo.com"!==this.domain},t.prototype.updateHost=function(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&b.set("host:"+this.host,this.internalHost))},t.prototype.connectionURL=function(t,e){var n
if(g.assert("string"==typeof t,"typeof type must == string"),g.assert("object"===r(e),"typeof params must == object"),"websocket"===t)n=(this.secure?"wss://":"ws://")+this.internalHost+"/.ws?"
else{if(t!==tt)throw new Error("Unknown connection type: "+t)
n=(this.secure?"https://":"http://")+this.internalHost+"/.lp?"}this.needsQueryParam()&&(e.ns=this.namespace)
var i=[]
return g.forEach(e,function(t,e){i.push(t+"="+e)}),n+i.join("&")},t.prototype.toString=function(){var t=this.toURLString()
return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t},t.prototype.toURLString=function(){return(this.secure?"https://":"http://")+this.host},t}(),nt=function(t){var e=rt(t),n=e.subdomain
"firebase"===e.domain&&A(e.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!=n||"localhost"===e.domain||A("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),e.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
var r="ws"===e.scheme||"wss"===e.scheme
return{repoInfo:new et(e.host,e.secure,n,r),path:new J(e.pathString)}},rt=function(t){var e="",n="",r="",i="",o=!0,s="https",a=443
if("string"==typeof t){var u=t.indexOf("//")
u>=0&&(s=t.substring(0,u-1),t=t.substring(u+2))
var h=t.indexOf("/");-1===h&&(h=t.length)
var l=t.indexOf("?");-1===l&&(l=t.length),e=t.substring(0,Math.min(h,l)),h<l&&(i=function(t){for(var e="",n=t.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r]
try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(h,l)))
var c=function(t){var e={}
"?"===t.charAt(0)&&(t=t.substring(1))
for(var n=0,r=t.split("&");n<r.length;n++){var i=r[n]
if(0!==i.length){var o=i.split("=")
2===o.length?e[decodeURIComponent(o[0])]=decodeURIComponent(o[1]):L("Invalid query segment '"+i+"' in query '"+t+"'")}}return e}(t.substring(Math.min(t.length,l)));(u=e.indexOf(":"))>=0?(o="https"===s||"wss"===s,a=parseInt(e.substring(u+1),10)):u=t.length
var p=e.split(".")
3===p.length?(n=p[1],r=p[0].toLowerCase()):2===p.length?n=p[0]:"localhost"===p[0].slice(0,u).toLowerCase()&&(n="localhost"),""===r&&"ns"in c&&(r=c.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:s,pathString:i}},it=/[\[\].#$\/\u0000-\u001F\u007F]/,ot=/[\[\].#$\u0000-\u001F\u007F]/,st=function(t){return"string"==typeof t&&0!==t.length&&!it.test(t)},at=function(t){return"string"==typeof t&&0!==t.length&&!ot.test(t)},ut=function(t){return null===t||"string"==typeof t||"number"==typeof t&&!M(t)||t&&"object"===r(t)&&g.contains(t,".sv")},ht=function(t,e,n,r,i){i&&void 0===n||lt(g.errorPrefix(t,e,i),n,r)},lt=function t(e,n,i){var o=i instanceof J?new Z(i,e):i
if(void 0===n)throw new Error(e+"contains undefined "+o.toErrorString())
if("function"==typeof n)throw new Error(e+"contains a function "+o.toErrorString()+" with contents = "+n.toString())
if(M(n))throw new Error(e+"contains "+n.toString()+" "+o.toErrorString())
if("string"==typeof n&&n.length>10485760/3&&g.stringLength(n)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+o.toErrorString()+" ('"+n.substring(0,50)+"...')")
if(n&&"object"===r(n)){var s=!1,a=!1
if(g.forEach(n,function(n,r){if(".value"===n)s=!0
else if(".priority"!==n&&".sv"!==n&&(a=!0,!st(n)))throw new Error(e+" contains an invalid key ("+n+") "+o.toErrorString()+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
o.push(n),t(e,r,o),o.pop()}),s&&a)throw new Error(e+' contains ".value" child '+o.toErrorString()+" in addition to actual children.")}},ct=function(t,e,n,i,o){if(!o||void 0!==n){var s=g.errorPrefix(t,e,o)
if(!n||"object"!==r(n)||Array.isArray(n))throw new Error(s+" must be an object containing the children to replace.")
var a=[]
g.forEach(n,function(t,e){var n=new J(t)
if(lt(s,e,i.child(n)),".priority"===n.getBack()&&!ut(e))throw new Error(s+"contains an invalid value for '"+n.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).")
a.push(n)}),function(t,e){var n,r
for(n=0;n<e.length;n++)for(var i=(r=e[n]).slice(),o=0;o<i.length;o++)if(".priority"===i[o]&&o===i.length-1);else if(!st(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
e.sort(J.comparePaths)
var s=null
for(n=0;n<e.length;n++){if(r=e[n],null!==s&&s.contains(r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString())
s=r}}(s,a)}},pt=function(t,e,n,r){if(!r||void 0!==n){if(M(n))throw new Error(g.errorPrefix(t,e,r)+"is "+n.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).")
if(!ut(n))throw new Error(g.errorPrefix(t,e,r)+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},dt=function(t,e,n,r){if(!r||void 0!==n)switch(n){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break
default:throw new Error(g.errorPrefix(t,e,r)+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},ft=function(t,e,n,r){if(!(r&&void 0===n||st(n)))throw new Error(g.errorPrefix(t,e,r)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},_t=function(t,e,n,r){if(!(r&&void 0===n||at(n)))throw new Error(g.errorPrefix(t,e,r)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},yt=function(t,e){if(".info"===e.getFront())throw new Error(t+" failed = Can't modify data under /.info/")},vt=function(t,e,n){var r=n.path.toString()
if("string"!=typeof n.repoInfo.host||0===n.repoInfo.host.length||!st(n.repoInfo.namespace)&&"localhost"!==n.repoInfo.host.split(":")[0]||0!==r.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),at(t)}(r))throw new Error(g.errorPrefix(t,e,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},gt=function(){function t(t,e){this.repo_=t,this.path_=e}return t.prototype.cancel=function(t){g.validateArgCount("OnDisconnect.cancel",0,1,arguments.length),g.validateCallback("OnDisconnect.cancel",1,t,!0)
var e=new g.Deferred
return this.repo_.onDisconnectCancel(this.path_,e.wrapCallback(t)),e.promise},t.prototype.remove=function(t){g.validateArgCount("OnDisconnect.remove",0,1,arguments.length),yt("OnDisconnect.remove",this.path_),g.validateCallback("OnDisconnect.remove",1,t,!0)
var e=new g.Deferred
return this.repo_.onDisconnectSet(this.path_,null,e.wrapCallback(t)),e.promise},t.prototype.set=function(t,e){g.validateArgCount("OnDisconnect.set",1,2,arguments.length),yt("OnDisconnect.set",this.path_),ht("OnDisconnect.set",1,t,this.path_,!1),g.validateCallback("OnDisconnect.set",2,e,!0)
var n=new g.Deferred
return this.repo_.onDisconnectSet(this.path_,t,n.wrapCallback(e)),n.promise},t.prototype.setWithPriority=function(t,e,n){g.validateArgCount("OnDisconnect.setWithPriority",2,3,arguments.length),yt("OnDisconnect.setWithPriority",this.path_),ht("OnDisconnect.setWithPriority",1,t,this.path_,!1),pt("OnDisconnect.setWithPriority",2,e,!1),g.validateCallback("OnDisconnect.setWithPriority",3,n,!0)
var r=new g.Deferred
return this.repo_.onDisconnectSetWithPriority(this.path_,t,e,r.wrapCallback(n)),r.promise},t.prototype.update=function(t,e){if(g.validateArgCount("OnDisconnect.update",1,2,arguments.length),yt("OnDisconnect.update",this.path_),Array.isArray(t)){for(var n={},r=0;r<t.length;++r)n[""+r]=t[r]
t=n,L("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ct("OnDisconnect.update",1,t,this.path_,!1),g.validateCallback("OnDisconnect.update",2,e,!0)
var i=new g.Deferred
return this.repo_.onDisconnectUpdate(this.path_,t,i.wrapCallback(e)),i.promise},t}(),mt=function(){function t(t,e){this.committed=t,this.snapshot=e}return t.prototype.toJSON=function(){return g.validateArgCount("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},t}(),Ct=(s="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",a=0,u=[],function(t){var e,n=t===a
a=t
var r=new Array(8)
for(e=7;e>=0;e--)r[e]=s.charAt(t%64),t=Math.floor(t/64)
g.assert(0===t,"Cannot push at time == 0")
var i=r.join("")
if(n){for(e=11;e>=0&&63===u[e];e--)u[e]=0
u[e]++}else for(e=0;e<12;e++)u[e]=Math.floor(64*Math.random())
for(e=0;e<12;e++)i+=s.charAt(u[e])
return g.assert(20===i.length,"nextPushId: Length should be 20."),i}),Et=function(){function t(t,e){this.name=t,this.node=e}return t.Wrap=function(e,n){return new t(e,n)},t}(),wt=function(){function t(){}return t.prototype.getCompare=function(){return this.compare.bind(this)},t.prototype.indexedValueChanged=function(t,e){var n=new Et(W,t),r=new Et(W,e)
return 0!==this.compare(n,r)},t.prototype.minPost=function(){return Et.MIN},t}(),bt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return v.__extends(e,t),Object.defineProperty(e,"__EMPTY_NODE",{get:function(){return h},set:function(t){h=t},enumerable:!0,configurable:!0}),e.prototype.compare=function(t,e){return Q(t.name,e.name)},e.prototype.isDefinedOn=function(t){throw g.assertionError("KeyIndex.isDefinedOn not expected to be called.")},e.prototype.indexedValueChanged=function(t,e){return!1},e.prototype.minPost=function(){return Et.MIN},e.prototype.maxPost=function(){return new Et(q,h)},e.prototype.makePost=function(t,e){return g.assert("string"==typeof t,"KeyIndex indexValue must always be a string."),new Et(t,h)},e.prototype.toString=function(){return".key"},e}(wt),St=new bt,Tt=function(t){return"number"==typeof t?"number:"+K(t):"string:"+t},It=function(t){if(t.isLeafNode()){var e=t.val()
g.assert("string"==typeof e||"number"==typeof e||"object"===r(e)&&g.contains(e,".sv"),"Priority must be a string or number.")}else g.assert(t===l||t.isEmpty(),"priority of unexpected type.")
g.assert(t===l||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},Nt=function(){function t(e,n){void 0===n&&(n=t.__childrenNodeConstructor.EMPTY_NODE),this.value_=e,this.priorityNode_=n,this.lazyHash_=null,g.assert(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),It(this.priorityNode_)}return Object.defineProperty(t,"__childrenNodeConstructor",{get:function(){return c},set:function(t){c=t},enumerable:!0,configurable:!0}),t.prototype.isLeafNode=function(){return!0},t.prototype.getPriority=function(){return this.priorityNode_},t.prototype.updatePriority=function(e){return new t(this.value_,e)},t.prototype.getImmediateChild=function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.getChild=function(e){return e.isEmpty()?this:".priority"===e.getFront()?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.hasChild=function(){return!1},t.prototype.getPredecessorChildName=function(t,e){return null},t.prototype.updateImmediateChild=function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)},t.prototype.updateChild=function(e,n){var r=e.getFront()
return null===r?n:n.isEmpty()&&".priority"!==r?this:(g.assert(".priority"!==r||1===e.getLength(),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(e.popFront(),n)))},t.prototype.isEmpty=function(){return!1},t.prototype.numChildren=function(){return 0},t.prototype.forEachChild=function(t,e){return!1},t.prototype.val=function(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},t.prototype.hash=function(){if(null===this.lazyHash_){var t=""
this.priorityNode_.isEmpty()||(t+="priority:"+Tt(this.priorityNode_.val())+":")
var e=r(this.value_)
t+=e+":",t+="number"===e?K(this.value_):this.value_,this.lazyHash_=N(t)}return this.lazyHash_},t.prototype.getValue=function(){return this.value_},t.prototype.compareTo=function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(g.assert(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))},t.prototype.compareToLeafNode_=function(e){var n=r(e.value_),i=r(this.value_),o=t.VALUE_TYPE_ORDER.indexOf(n),s=t.VALUE_TYPE_ORDER.indexOf(i)
return g.assert(o>=0,"Unknown leaf type: "+n),g.assert(s>=0,"Unknown leaf type: "+i),o===s?"object"===i?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-o},t.prototype.withIndex=function(){return this},t.prototype.isIndexed=function(){return!0},t.prototype.equals=function(t){if(t===this)return!0
if(t.isLeafNode()){var e=t
return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1},t.VALUE_TYPE_ORDER=["object","boolean","number","string"],t}(),Rt=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return v.__extends(e,t),e.prototype.compare=function(t,e){var n=t.node.getPriority(),r=e.node.getPriority(),i=n.compareTo(r)
return 0===i?Q(t.name,e.name):i},e.prototype.isDefinedOn=function(t){return!t.getPriority().isEmpty()},e.prototype.indexedValueChanged=function(t,e){return!t.getPriority().equals(e.getPriority())},e.prototype.minPost=function(){return Et.MIN},e.prototype.maxPost=function(){return new Et(q,new Nt("[PRIORITY-POST]",d))},e.prototype.makePost=function(t,e){var n=p(t)
return new Et(e,new Nt("[PRIORITY-POST]",n))},e.prototype.toString=function(){return".priority"},e}(wt)),Pt=function(){function t(t,e,n,r,i){void 0===i&&(i=null),this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[]
for(var o=1;!t.isEmpty();)if(t=t,o=e?n(t.key,e):1,r&&(o*=-1),o<0)t=this.isReverse_?t.left:t.right
else{if(0===o){this.nodeStack_.push(t)
break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}return t.prototype.getNext=function(){if(0===this.nodeStack_.length)return null
var t,e=this.nodeStack_.pop()
if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right
else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left
return t},t.prototype.hasNext=function(){return this.nodeStack_.length>0},t.prototype.peek=function(){if(0===this.nodeStack_.length)return null
var t=this.nodeStack_[this.nodeStack_.length-1]
return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}},t}(),Dt=function(){function t(e,n,r,i,o){this.key=e,this.value=n,this.color=null!=r?r:t.RED,this.left=null!=i?i:Ot.EMPTY_NODE,this.right=null!=o?o:Ot.EMPTY_NODE}return t.prototype.copy=function(e,n,r,i,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)},t.prototype.count=function(){return this.left.count()+1+this.right.count()},t.prototype.isEmpty=function(){return!1},t.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)},t.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},t.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},t.prototype.minKey=function(){return this.min_().key},t.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},t.prototype.insert=function(t,e,n){var r,i
return(i=(r=n(t,(i=this).key))<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n))).fixUp_()},t.prototype.removeMin_=function(){if(this.left.isEmpty())return Ot.EMPTY_NODE
var t=this
return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),(t=t.copy(null,null,null,t.left.removeMin_(),null)).fixUp_()},t.prototype.remove=function(t,e){var n,r
if(e(t,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null)
else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return Ot.EMPTY_NODE
r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()},t.prototype.isRed_=function(){return this.color},t.prototype.fixUp_=function(){var t=this
return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t},t.prototype.moveRedLeft_=function(){var t=this.colorFlip_()
return t.right.left.isRed_()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight_())).rotateLeft_()).colorFlip_()),t},t.prototype.moveRedRight_=function(){var t=this.colorFlip_()
return t.left.left.isRed_()&&(t=(t=t.rotateRight_()).colorFlip_()),t},t.prototype.rotateLeft_=function(){var e=this.copy(null,null,t.RED,null,this.right.left)
return this.right.copy(null,null,this.color,e,null)},t.prototype.rotateRight_=function(){var e=this.copy(null,null,t.RED,this.left.right,null)
return this.left.copy(null,null,this.color,null,e)},t.prototype.colorFlip_=function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null)
return this.copy(null,null,!this.color,t,e)},t.prototype.checkMaxDepth_=function(){var t=this.check_()
return Math.pow(2,t)<=this.count()+1},t.prototype.check_=function(){var t
if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")")
if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red")
if((t=this.left.check_())!==this.right.check_())throw new Error("Black depths differ")
return t+(this.isRed_()?0:1)},t.RED=!0,t.BLACK=!1,t}(),xt=function(){function t(){}return t.prototype.copy=function(t,e,n,r,i){return this},t.prototype.insert=function(t,e,n){return new Dt(t,e,null)},t.prototype.remove=function(t,e){return this},t.prototype.count=function(){return 0},t.prototype.isEmpty=function(){return!0},t.prototype.inorderTraversal=function(t){return!1},t.prototype.reverseTraversal=function(t){return!1},t.prototype.minKey=function(){return null},t.prototype.maxKey=function(){return null},t.prototype.check_=function(){return 0},t.prototype.isRed_=function(){return!1},t}(),Ot=function(){function t(e,n){void 0===n&&(n=t.EMPTY_NODE),this.comparator_=e,this.root_=n}return t.prototype.insert=function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Dt.BLACK,null,null))},t.prototype.remove=function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Dt.BLACK,null,null))},t.prototype.get=function(t){for(var e,n=this.root_;!n.isEmpty();){if(0===(e=this.comparator_(t,n.key)))return n.value
e<0?n=n.left:e>0&&(n=n.right)}return null},t.prototype.getPredecessorKey=function(t){for(var e,n=this.root_,r=null;!n.isEmpty();){if(0===(e=this.comparator_(t,n.key))){if(n.left.isEmpty())return r?r.key:null
for(n=n.left;!n.right.isEmpty();)n=n.right
return n.key}e<0?n=n.left:e>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},t.prototype.isEmpty=function(){return this.root_.isEmpty()},t.prototype.count=function(){return this.root_.count()},t.prototype.minKey=function(){return this.root_.minKey()},t.prototype.maxKey=function(){return this.root_.maxKey()},t.prototype.inorderTraversal=function(t){return this.root_.inorderTraversal(t)},t.prototype.reverseTraversal=function(t){return this.root_.reverseTraversal(t)},t.prototype.getIterator=function(t){return new Pt(this.root_,null,this.comparator_,!1,t)},t.prototype.getIteratorFrom=function(t,e){return new Pt(this.root_,t,this.comparator_,!1,e)},t.prototype.getReverseIteratorFrom=function(t,e){return new Pt(this.root_,t,this.comparator_,!0,e)},t.prototype.getReverseIterator=function(t){return new Pt(this.root_,null,this.comparator_,!0,t)},t.EMPTY_NODE=new xt,t}(),kt=Math.log(2),Ft=function(){function t(t){var e
this.count=(e=t+1,parseInt(Math.log(e)/kt,10)),this.current_=this.count-1
var n,r=(n=this.count,parseInt(Array(n+1).join("1"),2))
this.bits_=t+1&r}return t.prototype.nextBitIsOne=function(){var t=!(this.bits_&1<<this.current_)
return this.current_--,t},t}(),At=function(t,e,n,r){t.sort(e)
var i=function(e){for(var r=null,i=null,o=t.length,s=function(e,r){var i=o-e,s=o
o-=e
var u=function e(r,i){var o,s,a=i-r
if(0==a)return null
if(1==a)return o=t[r],s=n?n(o):o,new Dt(s,o.node,Dt.BLACK,null,null)
var u=parseInt(a/2,10)+r,h=e(r,u),l=e(u+1,i)
return o=t[u],s=n?n(o):o,new Dt(s,o.node,Dt.BLACK,h,l)}(i+1,s),h=t[i],l=n?n(h):h
a(new Dt(l,h.node,r,null,u))},a=function(t){r?(r.left=t,r=t):(i=t,r=t)},u=0;u<e.count;++u){var h=e.nextBitIsOne(),l=Math.pow(2,e.count-(u+1))
h?s(l,Dt.BLACK):(s(l,Dt.BLACK),s(l,Dt.RED))}return i}(new Ft(t.length))
return new Ot(r||e,i)},Lt={},Mt=function(){function t(t,e){this.indexes_=t,this.indexSet_=e}return Object.defineProperty(t,"Default",{get:function(){return g.assert(Lt&&Rt,"ChildrenNode.ts has not been loaded"),f=f||new t({".priority":Lt},{".priority":Rt})},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var e=g.safeGet(this.indexes_,t)
if(!e)throw new Error("No index defined for "+t)
return e===Lt?null:e},t.prototype.hasIndex=function(t){return g.contains(this.indexSet_,t.toString())},t.prototype.addIndex=function(e,n){g.assert(e!==St,"KeyIndex always exists and isn't meant to be added to the IndexMap.")
for(var r,i=[],o=!1,s=n.getIterator(Et.Wrap),a=s.getNext();a;)o=o||e.isDefinedOn(a.node),i.push(a),a=s.getNext()
r=o?At(i,e.getCompare()):Lt
var u=e.toString(),h=g.clone(this.indexSet_)
h[u]=e
var l=g.clone(this.indexes_)
return l[u]=r,new t(l,h)},t.prototype.addToIndexes=function(e,n){var r=this
return new t(g.map(this.indexes_,function(t,i){var o=g.safeGet(r.indexSet_,i)
if(g.assert(o,"Missing index implementation for "+i),t===Lt){if(o.isDefinedOn(e.node)){for(var s=[],a=n.getIterator(Et.Wrap),u=a.getNext();u;)u.name!=e.name&&s.push(u),u=a.getNext()
return s.push(e),At(s,o.getCompare())}return Lt}var h=n.get(e.name),l=t
return h&&(l=l.remove(new Et(e.name,h))),l.insert(e,e.node)}),this.indexSet_)},t.prototype.removeFromIndexes=function(e,n){return new t(g.map(this.indexes_,function(t){if(t===Lt)return t
var r=n.get(e.name)
return r?t.remove(new Et(e.name,r)):t}),this.indexSet_)},t}()
function Wt(t,e){return Q(t.name,e.name)}function qt(t,e){return Q(t,e)}var Qt=function(){function t(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&It(this.priorityNode_),this.children_.isEmpty()&&g.assert(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(t,"EMPTY_NODE",{get:function(){return _||(_=new t(new Ot(qt),null,Mt.Default))},enumerable:!0,configurable:!0}),t.prototype.isLeafNode=function(){return!1},t.prototype.getPriority=function(){return this.priorityNode_||_},t.prototype.updatePriority=function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)},t.prototype.getImmediateChild=function(t){if(".priority"===t)return this.getPriority()
var e=this.children_.get(t)
return null===e?_:e},t.prototype.getChild=function(t){var e=t.getFront()
return null===e?this:this.getImmediateChild(e).getChild(t.popFront())},t.prototype.hasChild=function(t){return null!==this.children_.get(t)},t.prototype.updateImmediateChild=function(e,n){if(g.assert(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n)
var r,i=new Et(e,n),o=void 0,s=void 0
return n.isEmpty()?(o=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_)),r=o.isEmpty()?_:this.priorityNode_,new t(o,r,s)},t.prototype.updateChild=function(t,e){var n=t.getFront()
if(null===n)return e
g.assert(".priority"!==t.getFront()||1===t.getLength(),".priority must be the last token in a path")
var r=this.getImmediateChild(n).updateChild(t.popFront(),e)
return this.updateImmediateChild(n,r)},t.prototype.isEmpty=function(){return this.children_.isEmpty()},t.prototype.numChildren=function(){return this.children_.count()},t.prototype.val=function(e){if(this.isEmpty())return null
var n={},r=0,i=0,o=!0
if(this.forEachChild(Rt,function(s,a){n[s]=a.val(e),r++,o&&t.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!e&&o&&i<2*r){var s=[]
for(var a in n)s[a]=n[a]
return s}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},t.prototype.hash=function(){if(null===this.lazyHash_){var t=""
this.getPriority().isEmpty()||(t+="priority:"+Tt(this.getPriority().val())+":"),this.forEachChild(Rt,function(e,n){var r=n.hash()
""!==r&&(t+=":"+e+":"+r)}),this.lazyHash_=""===t?"":N(t)}return this.lazyHash_},t.prototype.getPredecessorChildName=function(t,e,n){var r=this.resolveIndex_(n)
if(r){var i=r.getPredecessorKey(new Et(t,e))
return i?i.name:null}return this.children_.getPredecessorKey(t)},t.prototype.getFirstChildName=function(t){var e=this.resolveIndex_(t)
if(e){var n=e.minKey()
return n&&n.name}return this.children_.minKey()},t.prototype.getFirstChild=function(t){var e=this.getFirstChildName(t)
return e?new Et(e,this.children_.get(e)):null},t.prototype.getLastChildName=function(t){var e=this.resolveIndex_(t)
if(e){var n=e.maxKey()
return n&&n.name}return this.children_.maxKey()},t.prototype.getLastChild=function(t){var e=this.getLastChildName(t)
return e?new Et(e,this.children_.get(e)):null},t.prototype.forEachChild=function(t,e){var n=this.resolveIndex_(t)
return n?n.inorderTraversal(function(t){return e(t.name,t.node)}):this.children_.inorderTraversal(e)},t.prototype.getIterator=function(t){return this.getIteratorFrom(t.minPost(),t)},t.prototype.getIteratorFrom=function(t,e){var n=this.resolveIndex_(e)
if(n)return n.getIteratorFrom(t,function(t){return t})
for(var r=this.children_.getIteratorFrom(t.name,Et.Wrap),i=r.peek();null!=i&&e.compare(i,t)<0;)r.getNext(),i=r.peek()
return r},t.prototype.getReverseIterator=function(t){return this.getReverseIteratorFrom(t.maxPost(),t)},t.prototype.getReverseIteratorFrom=function(t,e){var n=this.resolveIndex_(e)
if(n)return n.getReverseIteratorFrom(t,function(t){return t})
for(var r=this.children_.getReverseIteratorFrom(t.name,Et.Wrap),i=r.peek();null!=i&&e.compare(i,t)>0;)r.getNext(),i=r.peek()
return r},t.prototype.compareTo=function(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Ut?-1:0},t.prototype.withIndex=function(e){if(e===St||this.indexMap_.hasIndex(e))return this
var n=this.indexMap_.addIndex(e,this.children_)
return new t(this.children_,this.priorityNode_,n)},t.prototype.isIndexed=function(t){return t===St||this.indexMap_.hasIndex(t)},t.prototype.equals=function(t){if(t===this)return!0
if(t.isLeafNode())return!1
var e=t
if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){for(var n=this.getIterator(Rt),r=e.getIterator(Rt),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1
i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1},t.prototype.resolveIndex_=function(t){return t===St?null:this.indexMap_.get(t.toString())},t.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,t}(),Ut=new(function(t){function e(){return t.call(this,new Ot(qt),Qt.EMPTY_NODE,Mt.Default)||this}return v.__extends(e,t),e.prototype.compareTo=function(t){return t===this?0:1},e.prototype.equals=function(t){return t===this},e.prototype.getPriority=function(){return this},e.prototype.getImmediateChild=function(t){return Qt.EMPTY_NODE},e.prototype.isEmpty=function(){return!1},e}(Qt))
Object.defineProperties(Et,{MIN:{value:new Et(W,Qt.EMPTY_NODE)},MAX:{value:new Et(q,Ut)}}),bt.__EMPTY_NODE=Qt.EMPTY_NODE,Nt.__childrenNodeConstructor=Qt,l=Ut,d=Ut
var Vt=!0
function Ht(t,e){if(void 0===e&&(e=null),null===t)return Qt.EMPTY_NODE
if("object"===r(t)&&".priority"in t&&(e=t[".priority"]),g.assert(null===e||"string"==typeof e||"number"==typeof e||"object"===r(e)&&".sv"in e,"Invalid priority type found: "+r(e)),"object"===r(t)&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==r(t)||".sv"in t)return new Nt(t,Ht(e))
if(t instanceof Array||!Vt){var n=Qt.EMPTY_NODE,i=t
return g.forEach(i,function(t,e){if(g.contains(i,t)&&"."!==t.substring(0,1)){var r=Ht(e)
!r.isLeafNode()&&r.isEmpty()||(n=n.updateImmediateChild(t,r))}}),n.updatePriority(Ht(e))}var o=[],s=!1,a=t
if(g.forEach(a,function(t,e){if("string"!=typeof t||"."!==t.substring(0,1)){var n=Ht(a[t])
n.isEmpty()||(s=s||!n.getPriority().isEmpty(),o.push(new Et(t,n)))}}),0==o.length)return Qt.EMPTY_NODE
var u=At(o,Wt,function(t){return t.name},qt)
if(s){var h=At(o,Rt.getCompare())
return new Qt(u,Ht(e),new Mt({".priority":h},{".priority":Rt}))}return new Qt(u,Ht(e),Mt.Default)}p=Ht
var jt,Bt,Kt=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return v.__extends(e,t),e.prototype.compare=function(t,e){var n=t.node.compareTo(e.node)
return 0===n?Q(t.name,e.name):n},e.prototype.isDefinedOn=function(t){return!0},e.prototype.indexedValueChanged=function(t,e){return!t.equals(e)},e.prototype.minPost=function(){return Et.MIN},e.prototype.maxPost=function(){return Et.MAX},e.prototype.makePost=function(t,e){var n=Ht(t)
return new Et(e,n)},e.prototype.toString=function(){return".value"},e}(wt)),Yt=function(t){function e(e){var n=t.call(this)||this
return n.indexPath_=e,g.assert(!e.isEmpty()&&".priority"!==e.getFront(),"Can't create PathIndex with empty path or .priority key"),n}return v.__extends(e,t),e.prototype.extractChild=function(t){return t.getChild(this.indexPath_)},e.prototype.isDefinedOn=function(t){return!t.getChild(this.indexPath_).isEmpty()},e.prototype.compare=function(t,e){var n=this.extractChild(t.node),r=this.extractChild(e.node),i=n.compareTo(r)
return 0===i?Q(t.name,e.name):i},e.prototype.makePost=function(t,e){var n=Ht(t),r=Qt.EMPTY_NODE.updateChild(this.indexPath_,n)
return new Et(e,r)},e.prototype.maxPost=function(){var t=Qt.EMPTY_NODE.updateChild(this.indexPath_,Ut)
return new Et(q,t)},e.prototype.toString=function(){return this.indexPath_.slice().join("/")},e}(wt),zt=function(){function t(t,e,n){this.node_=t,this.ref_=e,this.index_=n}return t.prototype.val=function(){return g.validateArgCount("DataSnapshot.val",0,0,arguments.length),this.node_.val()},t.prototype.exportVal=function(){return g.validateArgCount("DataSnapshot.exportVal",0,0,arguments.length),this.node_.val(!0)},t.prototype.toJSON=function(){return g.validateArgCount("DataSnapshot.toJSON",0,1,arguments.length),this.exportVal()},t.prototype.exists=function(){return g.validateArgCount("DataSnapshot.exists",0,0,arguments.length),!this.node_.isEmpty()},t.prototype.child=function(e){g.validateArgCount("DataSnapshot.child",0,1,arguments.length),e=String(e),_t("DataSnapshot.child",1,e,!1)
var n=new J(e),r=this.ref_.child(n)
return new t(this.node_.getChild(n),r,Rt)},t.prototype.hasChild=function(t){g.validateArgCount("DataSnapshot.hasChild",1,1,arguments.length),_t("DataSnapshot.hasChild",1,t,!1)
var e=new J(t)
return!this.node_.getChild(e).isEmpty()},t.prototype.getPriority=function(){return g.validateArgCount("DataSnapshot.getPriority",0,0,arguments.length),this.node_.getPriority().val()},t.prototype.forEach=function(e){var n=this
return g.validateArgCount("DataSnapshot.forEach",1,1,arguments.length),g.validateCallback("DataSnapshot.forEach",1,e,!1),!this.node_.isLeafNode()&&!!this.node_.forEachChild(this.index_,function(r,i){return e(new t(i,n.ref_.child(r),Rt))})},t.prototype.hasChildren=function(){return g.validateArgCount("DataSnapshot.hasChildren",0,0,arguments.length),!this.node_.isLeafNode()&&!this.node_.isEmpty()},Object.defineProperty(t.prototype,"key",{get:function(){return this.ref_.getKey()},enumerable:!0,configurable:!0}),t.prototype.numChildren=function(){return g.validateArgCount("DataSnapshot.numChildren",0,0,arguments.length),this.node_.numChildren()},t.prototype.getRef=function(){return g.validateArgCount("DataSnapshot.ref",0,0,arguments.length),this.ref_},Object.defineProperty(t.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),t}(),Gt=function(){function t(t,e,n,r){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=r}return t.prototype.getPath=function(){var t=this.snapshot.getRef()
return"value"===this.eventType?t.path:t.getParent().path},t.prototype.getEventType=function(){return this.eventType},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+g.stringify(this.snapshot.exportVal())},t}(),Xt=function(){function t(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}return t.prototype.getPath=function(){return this.path},t.prototype.getEventType=function(){return"cancel"},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.path.toString()+":cancel"},t}(),$t=function(){function t(t,e,n){this.callback_=t,this.cancelCallback_=e,this.context_=n}return t.prototype.respondsTo=function(t){return"value"===t},t.prototype.createEvent=function(t,e){var n=e.getQueryParams().getIndex()
return new Gt("value",this,new zt(t.snapshotNode,e.getRef(),n))},t.prototype.getEventRunner=function(t){var e=this.context_
if("cancel"===t.getEventType()){g.assert(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback")
var n=this.cancelCallback_
return function(){n.call(e,t.error)}}var r=this.callback_
return function(){r.call(e,t.snapshot)}},t.prototype.createCancelEvent=function(t,e){return this.cancelCallback_?new Xt(this,t,e):null},t.prototype.matches=function(e){return e instanceof t&&(!e.callback_||!this.callback_||e.callback_===this.callback_&&e.context_===this.context_)},t.prototype.hasAnyCallback=function(){return null!==this.callback_},t}(),Jt=function(){function t(t,e,n){this.callbacks_=t,this.cancelCallback_=e,this.context_=n}return t.prototype.respondsTo=function(t){var e="children_added"===t?"child_added":t
return e="children_removed"===e?"child_removed":e,g.contains(this.callbacks_,e)},t.prototype.createCancelEvent=function(t,e){return this.cancelCallback_?new Xt(this,t,e):null},t.prototype.createEvent=function(t,e){g.assert(null!=t.childName,"Child events should have a childName.")
var n=e.getRef().child(t.childName),r=e.getQueryParams().getIndex()
return new Gt(t.type,this,new zt(t.snapshotNode,n,r),t.prevName)},t.prototype.getEventRunner=function(t){var e=this.context_
if("cancel"===t.getEventType()){g.assert(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback")
var n=this.cancelCallback_
return function(){n.call(e,t.error)}}var r=this.callbacks_[t.eventType]
return function(){r.call(e,t.snapshot,t.prevName)}},t.prototype.matches=function(e){if(e instanceof t){if(!this.callbacks_||!e.callbacks_)return!0
if(this.context_===e.context_){var n=g.getCount(e.callbacks_)
if(n===g.getCount(this.callbacks_)){if(1===n){var r=g.getAnyKey(e.callbacks_),i=g.getAnyKey(this.callbacks_)
return!(i!==r||e.callbacks_[r]&&this.callbacks_[i]&&e.callbacks_[r]!==this.callbacks_[i])}return g.every(this.callbacks_,function(t,n){return e.callbacks_[t]===n})}}}return!1},t.prototype.hasAnyCallback=function(){return null!==this.callbacks_},t}(),Zt=function(){function t(t,e,n,r){this.repo=t,this.path=e,this.queryParams_=n,this.orderByCalled_=r}return Object.defineProperty(t,"__referenceConstructor",{get:function(){return g.assert(jt,"Reference.ts has not been loaded"),jt},set:function(t){jt=t},enumerable:!0,configurable:!0}),t.validateQueryEndpoints_=function(t){var e=null,n=null
if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===St){var i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",o="Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string."
if(t.hasStart()){if(t.getIndexStartName()!=W)throw new Error(i)
if("string"!=typeof e)throw new Error(o)}if(t.hasEnd()){if(t.getIndexEndName()!=q)throw new Error(i)
if("string"!=typeof n)throw new Error(o)}}else if(t.getIndex()===Rt){if(null!=e&&!ut(e)||null!=n&&!ut(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(g.assert(t.getIndex()instanceof Yt||t.getIndex()===Kt,"unknown index type."),null!=e&&"object"===r(e)||null!=n&&"object"===r(n))throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")},t.validateLimit_=function(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")},t.prototype.validateNoPreviousOrderByCall_=function(t){if(!0===this.orderByCalled_)throw new Error(t+": You can't combine multiple orderBy calls.")},t.prototype.getQueryParams=function(){return this.queryParams_},t.prototype.getRef=function(){return g.validateArgCount("Query.ref",0,0,arguments.length),new t.__referenceConstructor(this.repo,this.path)},t.prototype.on=function(e,n,r,i){g.validateArgCount("Query.on",2,4,arguments.length),dt("Query.on",1,e,!1),g.validateCallback("Query.on",2,n,!1)
var o=t.getCancelAndContextArgs_("Query.on",r,i)
if("value"===e)this.onValueEvent(n,o.cancel,o.context)
else{var s={}
s[e]=n,this.onChildEvent(s,o.cancel,o.context)}return n},t.prototype.onValueEvent=function(t,e,n){var r=new $t(t,e||null,n||null)
this.repo.addEventCallbackForQuery(this,r)},t.prototype.onChildEvent=function(t,e,n){var r=new Jt(t,e,n)
this.repo.addEventCallbackForQuery(this,r)},t.prototype.off=function(t,e,n){g.validateArgCount("Query.off",0,3,arguments.length),dt("Query.off",1,t,!0),g.validateCallback("Query.off",2,e,!0),g.validateContextObject("Query.off",3,n,!0)
var r=null,i=null
"value"===t?r=new $t(e||null,null,n||null):t&&(e&&((i={})[t]=e),r=new Jt(i,null,n||null)),this.repo.removeEventCallbackForQuery(this,r)},t.prototype.once=function(e,n,r,i){var o=this
g.validateArgCount("Query.once",1,4,arguments.length),dt("Query.once",1,e,!1),g.validateCallback("Query.once",2,n,!0)
var s=t.getCancelAndContextArgs_("Query.once",r,i),a=!0,u=new g.Deferred
u.promise.catch(function(){})
var h=function t(r){a&&(a=!1,o.off(e,t),n&&n.bind(s.context)(r),u.resolve(r))}
return this.on(e,h,function(t){o.off(e,h),s.cancel&&s.cancel.bind(s.context)(t),u.reject(t)}),u.promise},t.prototype.limitToFirst=function(e){if(g.validateArgCount("Query.limitToFirst",1,1,arguments.length),"number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("Query.limitToFirst: First argument must be a positive integer.")
if(this.queryParams_.hasLimit())throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).")
return new t(this.repo,this.path,this.queryParams_.limitToFirst(e),this.orderByCalled_)},t.prototype.limitToLast=function(e){if(g.validateArgCount("Query.limitToLast",1,1,arguments.length),"number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("Query.limitToLast: First argument must be a positive integer.")
if(this.queryParams_.hasLimit())throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).")
return new t(this.repo,this.path,this.queryParams_.limitToLast(e),this.orderByCalled_)},t.prototype.orderByChild=function(e){if(g.validateArgCount("Query.orderByChild",1,1,arguments.length),"$key"===e)throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.')
if("$priority"===e)throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.')
if("$value"===e)throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.')
_t("Query.orderByChild",1,e,!1),this.validateNoPreviousOrderByCall_("Query.orderByChild")
var n=new J(e)
if(n.isEmpty())throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.")
var r=new Yt(n),i=this.queryParams_.orderBy(r)
return t.validateQueryEndpoints_(i),new t(this.repo,this.path,i,!0)},t.prototype.orderByKey=function(){g.validateArgCount("Query.orderByKey",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByKey")
var e=this.queryParams_.orderBy(St)
return t.validateQueryEndpoints_(e),new t(this.repo,this.path,e,!0)},t.prototype.orderByPriority=function(){g.validateArgCount("Query.orderByPriority",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByPriority")
var e=this.queryParams_.orderBy(Rt)
return t.validateQueryEndpoints_(e),new t(this.repo,this.path,e,!0)},t.prototype.orderByValue=function(){g.validateArgCount("Query.orderByValue",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByValue")
var e=this.queryParams_.orderBy(Kt)
return t.validateQueryEndpoints_(e),new t(this.repo,this.path,e,!0)},t.prototype.startAt=function(e,n){void 0===e&&(e=null),g.validateArgCount("Query.startAt",0,2,arguments.length),ht("Query.startAt",1,e,this.path,!0),ft("Query.startAt",2,n,!0)
var r=this.queryParams_.startAt(e,n)
if(t.validateLimit_(r),t.validateQueryEndpoints_(r),this.queryParams_.hasStart())throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).")
return void 0===e&&(e=null,n=null),new t(this.repo,this.path,r,this.orderByCalled_)},t.prototype.endAt=function(e,n){void 0===e&&(e=null),g.validateArgCount("Query.endAt",0,2,arguments.length),ht("Query.endAt",1,e,this.path,!0),ft("Query.endAt",2,n,!0)
var r=this.queryParams_.endAt(e,n)
if(t.validateLimit_(r),t.validateQueryEndpoints_(r),this.queryParams_.hasEnd())throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).")
return new t(this.repo,this.path,r,this.orderByCalled_)},t.prototype.equalTo=function(t,e){if(g.validateArgCount("Query.equalTo",1,2,arguments.length),ht("Query.equalTo",1,t,this.path,!1),ft("Query.equalTo",2,e,!0),this.queryParams_.hasStart())throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).")
if(this.queryParams_.hasEnd())throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).")
return this.startAt(t,e).endAt(t,e)},t.prototype.toString=function(){return g.validateArgCount("Query.toString",0,0,arguments.length),this.repo.toString()+this.path.toUrlEncodedString()},t.prototype.toJSON=function(){return g.validateArgCount("Query.toJSON",0,1,arguments.length),this.toString()},t.prototype.queryObject=function(){return this.queryParams_.getQueryObject()},t.prototype.queryIdentifier=function(){var t=this.queryObject(),e=H(t)
return"{}"===e?"default":e},t.prototype.isEqual=function(e){if(g.validateArgCount("Query.isEqual",1,1,arguments.length),!(e instanceof t))throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")
var n=this.repo===e.repo,r=this.path.equals(e.path),i=this.queryIdentifier()===e.queryIdentifier()
return n&&r&&i},t.getCancelAndContextArgs_=function(t,e,n){var i={cancel:null,context:null}
if(e&&n)i.cancel=e,g.validateCallback(t,3,i.cancel,!0),i.context=n,g.validateContextObject(t,4,i.context,!0)
else if(e)if("object"===r(e)&&null!==e)i.context=e
else{if("function"!=typeof e)throw new Error(g.errorPrefix(t,3,!0)+" must either be a cancel callback or a context object.")
i.cancel=e}return i},Object.defineProperty(t.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),t}(),te=function(){function t(){this.set={}}return t.prototype.add=function(t,e){this.set[t]=null===e||e},t.prototype.contains=function(t){return g.contains(this.set,t)},t.prototype.get=function(t){return this.contains(t)?this.set[t]:void 0},t.prototype.remove=function(t){delete this.set[t]},t.prototype.clear=function(){this.set={}},t.prototype.isEmpty=function(){return g.isEmpty(this.set)},t.prototype.count=function(){return g.getCount(this.set)},t.prototype.each=function(t){g.forEach(this.set,function(e,n){return t(e,n)})},t.prototype.keys=function(){var t=[]
return g.forEach(this.set,function(e){t.push(e)}),t},t}(),ee=function(){function t(){this.value_=null,this.children_=null}return t.prototype.find=function(t){if(null!=this.value_)return this.value_.getChild(t)
if(t.isEmpty()||null==this.children_)return null
var e=t.getFront()
return t=t.popFront(),this.children_.contains(e)?this.children_.get(e).find(t):null},t.prototype.remember=function(e,n){if(e.isEmpty())this.value_=n,this.children_=null
else if(null!==this.value_)this.value_=this.value_.updateChild(e,n)
else{null==this.children_&&(this.children_=new te)
var r=e.getFront()
this.children_.contains(r)||this.children_.add(r,new t)
var i=this.children_.get(r)
e=e.popFront(),i.remember(e,n)}},t.prototype.forget=function(t){if(t.isEmpty())return this.value_=null,this.children_=null,!0
if(null!==this.value_){if(this.value_.isLeafNode())return!1
var e=this.value_
this.value_=null
var n=this
return e.forEachChild(Rt,function(t,e){n.remember(new J(t),e)}),this.forget(t)}if(null!==this.children_){var r=t.getFront()
return t=t.popFront(),this.children_.contains(r)&&this.children_.get(r).forget(t)&&this.children_.remove(r),!!this.children_.isEmpty()&&(this.children_=null,!0)}return!0},t.prototype.forEachTree=function(t,e){null!==this.value_?e(t,this.value_):this.forEachChild(function(n,r){var i=new J(t.toString()+"/"+n)
r.forEachTree(i,e)})},t.prototype.forEachChild=function(t){null!==this.children_&&this.children_.each(function(e,n){t(e,n)})},t}(),ne=function(t,e){return t&&"object"===r(t)?(g.assert(".sv"in t,"Unexpected leaf node or priority contents"),e[t[".sv"]]):t},re=function t(e,n){var r,i=e.getPriority().val(),o=ne(i,n)
if(e.isLeafNode()){var s=e,a=ne(s.getValue(),n)
return a!==s.getValue()||o!==s.getPriority().val()?new Nt(a,Ht(o)):e}var u=e
return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new Nt(o))),u.forEachChild(Rt,function(e,i){var o=t(i,n)
o!==i&&(r=r.updateImmediateChild(e,o))}),r}
!function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Bt||(Bt={}))
var ie,oe,se=function(){function t(t,e,n,r){this.fromUser=t,this.fromServer=e,this.queryId=n,this.tagged=r,g.assert(!r||e,"Tagged queries must be from server.")}return t.User=new t(!0,!1,null,!1),t.Server=new t(!1,!0,null,!1),t.forServerTaggedQuery=function(e){return new t(!1,!0,e,!0)},t}(),ae=function(){function t(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Bt.ACK_USER_WRITE,this.source=se.User}return t.prototype.operationForChild=function(e){if(this.path.isEmpty()){if(null!=this.affectedTree.value)return g.assert(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this
var n=this.affectedTree.subtree(new J(e))
return new t(J.Empty,n,this.revert)}return g.assert(this.path.getFront()===e,"operationForChild called for unrelated child."),new t(this.path.popFront(),this.affectedTree,this.revert)},t}(),ue=function(){return ie||(ie=new Ot(U)),ie},he=function(){function t(t,e){void 0===e&&(e=ue()),this.value=t,this.children=e}return t.fromObject=function(e){var n=t.Empty
return g.forEach(e,function(t,e){n=n.set(new J(t),e)}),n},t.prototype.isEmpty=function(){return null===this.value&&this.children.isEmpty()},t.prototype.findRootMostMatchingPathAndValue=function(t,e){if(null!=this.value&&e(this.value))return{path:J.Empty,value:this.value}
if(t.isEmpty())return null
var n=t.getFront(),r=this.children.get(n)
if(null!==r){var i=r.findRootMostMatchingPathAndValue(t.popFront(),e)
return null!=i?{path:new J(n).child(i.path),value:i.value}:null}return null},t.prototype.findRootMostValueAndPath=function(t){return this.findRootMostMatchingPathAndValue(t,function(){return!0})},t.prototype.subtree=function(e){if(e.isEmpty())return this
var n=e.getFront(),r=this.children.get(n)
return null!==r?r.subtree(e.popFront()):t.Empty},t.prototype.set=function(e,n){if(e.isEmpty())return new t(n,this.children)
var r=e.getFront(),i=(this.children.get(r)||t.Empty).set(e.popFront(),n),o=this.children.insert(r,i)
return new t(this.value,o)},t.prototype.remove=function(e){if(e.isEmpty())return this.children.isEmpty()?t.Empty:new t(null,this.children)
var n=e.getFront(),r=this.children.get(n)
if(r){var i=r.remove(e.popFront()),o=void 0
return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),null===this.value&&o.isEmpty()?t.Empty:new t(this.value,o)}return this},t.prototype.get=function(t){if(t.isEmpty())return this.value
var e=t.getFront(),n=this.children.get(e)
return n?n.get(t.popFront()):null},t.prototype.setTree=function(e,n){if(e.isEmpty())return n
var r,i=e.getFront(),o=(this.children.get(i)||t.Empty).setTree(e.popFront(),n)
return r=o.isEmpty()?this.children.remove(i):this.children.insert(i,o),new t(this.value,r)},t.prototype.fold=function(t){return this.fold_(J.Empty,t)},t.prototype.fold_=function(t,e){var n={}
return this.children.inorderTraversal(function(r,i){n[r]=i.fold_(t.child(r),e)}),e(t,this.value,n)},t.prototype.findOnPath=function(t,e){return this.findOnPath_(t,J.Empty,e)},t.prototype.findOnPath_=function(t,e,n){var r=!!this.value&&n(e,this.value)
if(r)return r
if(t.isEmpty())return null
var i=t.getFront(),o=this.children.get(i)
return o?o.findOnPath_(t.popFront(),e.child(i),n):null},t.prototype.foreachOnPath=function(t,e){return this.foreachOnPath_(t,J.Empty,e)},t.prototype.foreachOnPath_=function(e,n,r){if(e.isEmpty())return this
this.value&&r(n,this.value)
var i=e.getFront(),o=this.children.get(i)
return o?o.foreachOnPath_(e.popFront(),n.child(i),r):t.Empty},t.prototype.foreach=function(t){this.foreach_(J.Empty,t)},t.prototype.foreach_=function(t,e){this.children.inorderTraversal(function(n,r){r.foreach_(t.child(n),e)}),this.value&&e(t,this.value)},t.prototype.foreachChild=function(t){this.children.inorderTraversal(function(e,n){n.value&&t(e,n.value)})},t.Empty=new t(null),t}(),le=function(){function t(t,e){this.source=t,this.path=e,this.type=Bt.LISTEN_COMPLETE}return t.prototype.operationForChild=function(e){return this.path.isEmpty()?new t(this.source,J.Empty):new t(this.source,this.path.popFront())},t}(),ce=function(){function t(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Bt.OVERWRITE}return t.prototype.operationForChild=function(e){return this.path.isEmpty()?new t(this.source,J.Empty,this.snap.getImmediateChild(e)):new t(this.source,this.path.popFront(),this.snap)},t}(),pe=function(){function t(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Bt.MERGE}return t.prototype.operationForChild=function(e){if(this.path.isEmpty()){var n=this.children.subtree(new J(e))
return n.isEmpty()?null:n.value?new ce(this.source,J.Empty,n.value):new t(this.source,J.Empty,n)}return g.assert(this.path.getFront()===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,this.path.popFront(),this.children)},t.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},t}(),de=function(){function t(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}return t.prototype.isFullyInitialized=function(){return this.fullyInitialized_},t.prototype.isFiltered=function(){return this.filtered_},t.prototype.isCompleteForPath=function(t){if(t.isEmpty())return this.isFullyInitialized()&&!this.filtered_
var e=t.getFront()
return this.isCompleteForChild(e)},t.prototype.isCompleteForChild=function(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)},t.prototype.getNode=function(){return this.node_},t}(),fe=function(){function t(t,e){this.eventCache_=t,this.serverCache_=e}return t.prototype.updateEventSnap=function(e,n,r){return new t(new de(e,n,r),this.serverCache_)},t.prototype.updateServerSnap=function(e,n,r){return new t(this.eventCache_,new de(e,n,r))},t.prototype.getEventCache=function(){return this.eventCache_},t.prototype.getCompleteEventSnap=function(){return this.eventCache_.isFullyInitialized()?this.eventCache_.getNode():null},t.prototype.getServerCache=function(){return this.serverCache_},t.prototype.getCompleteServerSnap=function(){return this.serverCache_.isFullyInitialized()?this.serverCache_.getNode():null},t.Empty=new t(new de(Qt.EMPTY_NODE,!1,!1),new de(Qt.EMPTY_NODE,!1,!1)),t}(),_e=function(){function t(t,e,n,r,i){this.type=t,this.snapshotNode=e,this.childName=n,this.oldSnap=r,this.prevName=i}return t.valueChange=function(e){return new t(t.VALUE,e)},t.childAddedChange=function(e,n){return new t(t.CHILD_ADDED,n,e)},t.childRemovedChange=function(e,n){return new t(t.CHILD_REMOVED,n,e)},t.childChangedChange=function(e,n,r){return new t(t.CHILD_CHANGED,n,e,r)},t.childMovedChange=function(e,n){return new t(t.CHILD_MOVED,n,e)},t.CHILD_ADDED="child_added",t.CHILD_REMOVED="child_removed",t.CHILD_CHANGED="child_changed",t.CHILD_MOVED="child_moved",t.VALUE="value",t}(),ye=function(){function t(t){this.index_=t}return t.prototype.updateChild=function(t,e,n,r,i,o){g.assert(t.isIndexed(this.index_),"A node must be indexed if only a child is updated")
var s=t.getImmediateChild(e)
return s.getChild(r).equals(n.getChild(r))&&s.isEmpty()==n.isEmpty()?t:(null!=o&&(n.isEmpty()?t.hasChild(e)?o.trackChildChange(_e.childRemovedChange(e,s)):g.assert(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(_e.childAddedChange(e,n)):o.trackChildChange(_e.childChangedChange(e,n,s))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))},t.prototype.updateFullNode=function(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(Rt,function(t,r){e.hasChild(t)||n.trackChildChange(_e.childRemovedChange(t,r))}),e.isLeafNode()||e.forEachChild(Rt,function(e,r){if(t.hasChild(e)){var i=t.getImmediateChild(e)
i.equals(r)||n.trackChildChange(_e.childChangedChange(e,r,i))}else n.trackChildChange(_e.childAddedChange(e,r))})),e.withIndex(this.index_)},t.prototype.updatePriority=function(t,e){return t.isEmpty()?Qt.EMPTY_NODE:t.updatePriority(e)},t.prototype.filtersNodes=function(){return!1},t.prototype.getIndexedFilter=function(){return this},t.prototype.getIndex=function(){return this.index_},t}(),ve=function(){function t(){this.changeMap_={}}return t.prototype.trackChildChange=function(t){var e=t.type,n=t.childName
g.assert(e==_e.CHILD_ADDED||e==_e.CHILD_CHANGED||e==_e.CHILD_REMOVED,"Only child changes supported for tracking"),g.assert(".priority"!==n,"Only non-priority child changes can be tracked.")
var r=g.safeGet(this.changeMap_,n)
if(r){var i=r.type
if(e==_e.CHILD_ADDED&&i==_e.CHILD_REMOVED)this.changeMap_[n]=_e.childChangedChange(n,t.snapshotNode,r.snapshotNode)
else if(e==_e.CHILD_REMOVED&&i==_e.CHILD_ADDED)delete this.changeMap_[n]
else if(e==_e.CHILD_REMOVED&&i==_e.CHILD_CHANGED)this.changeMap_[n]=_e.childRemovedChange(n,r.oldSnap)
else if(e==_e.CHILD_CHANGED&&i==_e.CHILD_ADDED)this.changeMap_[n]=_e.childAddedChange(n,t.snapshotNode)
else{if(e!=_e.CHILD_CHANGED||i!=_e.CHILD_CHANGED)throw g.assertionError("Illegal combination of changes: "+t+" occurred after "+r)
this.changeMap_[n]=_e.childChangedChange(n,t.snapshotNode,r.oldSnap)}}else this.changeMap_[n]=t},t.prototype.getChanges=function(){return g.getValues(this.changeMap_)},t}(),ge=new(function(){function t(){}return t.prototype.getCompleteChild=function(t){return null},t.prototype.getChildAfterChild=function(t,e,n){return null},t}()),me=function(){function t(t,e,n){void 0===n&&(n=null),this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}return t.prototype.getCompleteChild=function(t){var e=this.viewCache_.getEventCache()
if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t)
var n=null!=this.optCompleteServerCache_?new de(this.optCompleteServerCache_,!0,!1):this.viewCache_.getServerCache()
return this.writes_.calcCompleteChild(t,n)},t.prototype.getChildAfterChild=function(t,e,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:this.viewCache_.getCompleteServerSnap(),i=this.writes_.calcIndexedSlice(r,e,1,n,t)
return 0===i.length?null:i[0]},t}(),Ce=function(t,e){this.viewCache=t,this.changes=e},Ee=function(){function t(t){this.filter_=t}return t.prototype.assertIndexed=function(t){g.assert(t.getEventCache().getNode().isIndexed(this.filter_.getIndex()),"Event snap not indexed"),g.assert(t.getServerCache().getNode().isIndexed(this.filter_.getIndex()),"Server snap not indexed")},t.prototype.applyOperation=function(e,n,r,i){var o,s,a=new ve
if(n.type===Bt.OVERWRITE){var u=n
u.source.fromUser?o=this.applyUserOverwrite_(e,u.path,u.snap,r,i,a):(g.assert(u.source.fromServer,"Unknown source."),s=u.source.tagged||e.getServerCache().isFiltered()&&!u.path.isEmpty(),o=this.applyServerOverwrite_(e,u.path,u.snap,r,i,s,a))}else if(n.type===Bt.MERGE){var h=n
h.source.fromUser?o=this.applyUserMerge_(e,h.path,h.children,r,i,a):(g.assert(h.source.fromServer,"Unknown source."),s=h.source.tagged||e.getServerCache().isFiltered(),o=this.applyServerMerge_(e,h.path,h.children,r,i,s,a))}else if(n.type===Bt.ACK_USER_WRITE){var l=n
o=l.revert?this.revertUserWrite_(e,l.path,r,i,a):this.ackUserWrite_(e,l.path,l.affectedTree,r,i,a)}else{if(n.type!==Bt.LISTEN_COMPLETE)throw g.assertionError("Unknown operation type: "+n.type)
o=this.listenComplete_(e,n.path,r,a)}var c=a.getChanges()
return t.maybeAddValueEvent_(e,o,c),new Ce(o,c)},t.maybeAddValueEvent_=function(t,e,n){var r=e.getEventCache()
if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=t.getCompleteEventSnap();(n.length>0||!t.getEventCache().isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(_e.valueChange(e.getCompleteEventSnap()))}},t.prototype.generateEventCacheAfterServerEvent_=function(t,e,n,r,i){var o=t.getEventCache()
if(null!=n.shadowingWrite(e))return t
var s=void 0,a=void 0
if(e.isEmpty())if(g.assert(t.getServerCache().isFullyInitialized(),"If change path is empty, we must have complete server data"),t.getServerCache().isFiltered()){var u=t.getCompleteServerSnap(),h=u instanceof Qt?u:Qt.EMPTY_NODE,l=n.calcCompleteEventChildren(h)
s=this.filter_.updateFullNode(t.getEventCache().getNode(),l,i)}else{var c=n.calcCompleteEventCache(t.getCompleteServerSnap())
s=this.filter_.updateFullNode(t.getEventCache().getNode(),c,i)}else{var p=e.getFront()
if(".priority"==p){g.assert(1==e.getLength(),"Can't have a priority with additional path components")
var d=o.getNode()
a=t.getServerCache().getNode()
var f=n.calcEventCacheAfterServerOverwrite(e,d,a)
s=null!=f?this.filter_.updatePriority(d,f):o.getNode()}else{var _=e.popFront(),y=void 0
if(o.isCompleteForChild(p)){a=t.getServerCache().getNode()
var v=n.calcEventCacheAfterServerOverwrite(e,o.getNode(),a)
y=null!=v?o.getNode().getImmediateChild(p).updateChild(_,v):o.getNode().getImmediateChild(p)}else y=n.calcCompleteChild(p,t.getServerCache())
s=null!=y?this.filter_.updateChild(o.getNode(),p,y,_,r,i):o.getNode()}}return t.updateEventSnap(s,o.isFullyInitialized()||e.isEmpty(),this.filter_.filtersNodes())},t.prototype.applyServerOverwrite_=function(t,e,n,r,i,o,s){var a,u=t.getServerCache(),h=o?this.filter_:this.filter_.getIndexedFilter()
if(e.isEmpty())a=h.updateFullNode(u.getNode(),n,null)
else if(h.filtersNodes()&&!u.isFiltered()){var l=u.getNode().updateChild(e,n)
a=h.updateFullNode(u.getNode(),l,null)}else{var c=e.getFront()
if(!u.isCompleteForPath(e)&&e.getLength()>1)return t
var p=e.popFront(),d=u.getNode().getImmediateChild(c).updateChild(p,n)
a=".priority"==c?h.updatePriority(u.getNode(),d):h.updateChild(u.getNode(),c,d,p,ge,null)}var f=t.updateServerSnap(a,u.isFullyInitialized()||e.isEmpty(),h.filtersNodes()),_=new me(r,f,i)
return this.generateEventCacheAfterServerEvent_(f,e,r,_,s)},t.prototype.applyUserOverwrite_=function(t,e,n,r,i,o){var s,a,u=t.getEventCache(),h=new me(r,t,i)
if(e.isEmpty())a=this.filter_.updateFullNode(t.getEventCache().getNode(),n,o),s=t.updateEventSnap(a,!0,this.filter_.filtersNodes())
else{var l=e.getFront()
if(".priority"===l)a=this.filter_.updatePriority(t.getEventCache().getNode(),n),s=t.updateEventSnap(a,u.isFullyInitialized(),u.isFiltered())
else{var c=e.popFront(),p=u.getNode().getImmediateChild(l),d=void 0
if(c.isEmpty())d=n
else{var f=h.getCompleteChild(l)
d=null!=f?".priority"===c.getBack()&&f.getChild(c.parent()).isEmpty()?f:f.updateChild(c,n):Qt.EMPTY_NODE}if(p.equals(d))s=t
else{var _=this.filter_.updateChild(u.getNode(),l,d,c,h,o)
s=t.updateEventSnap(_,u.isFullyInitialized(),this.filter_.filtersNodes())}}}return s},t.cacheHasChild_=function(t,e){return t.getEventCache().isCompleteForChild(e)},t.prototype.applyUserMerge_=function(e,n,r,i,o,s){var a=this,u=e
return r.foreach(function(r,h){var l=n.child(r)
t.cacheHasChild_(e,l.getFront())&&(u=a.applyUserOverwrite_(u,l,h,i,o,s))}),r.foreach(function(r,h){var l=n.child(r)
t.cacheHasChild_(e,l.getFront())||(u=a.applyUserOverwrite_(u,l,h,i,o,s))}),u},t.prototype.applyMerge_=function(t,e){return e.foreach(function(e,n){t=t.updateChild(e,n)}),t},t.prototype.applyServerMerge_=function(t,e,n,r,i,o,s){var a=this
if(t.getServerCache().getNode().isEmpty()&&!t.getServerCache().isFullyInitialized())return t
var u,h=t
u=e.isEmpty()?n:he.Empty.setTree(e,n)
var l=t.getServerCache().getNode()
return u.children.inorderTraversal(function(e,n){if(l.hasChild(e)){var u=t.getServerCache().getNode().getImmediateChild(e),c=a.applyMerge_(u,n)
h=a.applyServerOverwrite_(h,new J(e),c,r,i,o,s)}}),u.children.inorderTraversal(function(e,n){var u=!t.getServerCache().isCompleteForChild(e)&&null==n.value
if(!l.hasChild(e)&&!u){var c=t.getServerCache().getNode().getImmediateChild(e),p=a.applyMerge_(c,n)
h=a.applyServerOverwrite_(h,new J(e),p,r,i,o,s)}}),h},t.prototype.ackUserWrite_=function(t,e,n,r,i,o){if(null!=r.shadowingWrite(e))return t
var s=t.getServerCache().isFiltered(),a=t.getServerCache()
if(null!=n.value){if(e.isEmpty()&&a.isFullyInitialized()||a.isCompleteForPath(e))return this.applyServerOverwrite_(t,e,a.getNode().getChild(e),r,i,s,o)
if(e.isEmpty()){var u=he.Empty
return a.getNode().forEachChild(St,function(t,e){u=u.set(new J(t),e)}),this.applyServerMerge_(t,e,u,r,i,s,o)}return t}var h=he.Empty
return n.foreach(function(t,n){var r=e.child(t)
a.isCompleteForPath(r)&&(h=h.set(t,a.getNode().getChild(r)))}),this.applyServerMerge_(t,e,h,r,i,s,o)},t.prototype.listenComplete_=function(t,e,n,r){var i=t.getServerCache(),o=t.updateServerSnap(i.getNode(),i.isFullyInitialized()||e.isEmpty(),i.isFiltered())
return this.generateEventCacheAfterServerEvent_(o,e,n,ge,r)},t.prototype.revertUserWrite_=function(t,e,n,r,i){var o
if(null!=n.shadowingWrite(e))return t
var s=new me(n,t,r),a=t.getEventCache().getNode(),u=void 0
if(e.isEmpty()||".priority"===e.getFront()){var h=void 0
if(t.getServerCache().isFullyInitialized())h=n.calcCompleteEventCache(t.getCompleteServerSnap())
else{var l=t.getServerCache().getNode()
g.assert(l instanceof Qt,"serverChildren would be complete if leaf node"),h=n.calcCompleteEventChildren(l)}h=h,u=this.filter_.updateFullNode(a,h,i)}else{var c=e.getFront(),p=n.calcCompleteChild(c,t.getServerCache())
null==p&&t.getServerCache().isCompleteForChild(c)&&(p=a.getImmediateChild(c)),(u=null!=p?this.filter_.updateChild(a,c,p,e.popFront(),s,i):t.getEventCache().getNode().hasChild(c)?this.filter_.updateChild(a,c,Qt.EMPTY_NODE,e.popFront(),s,i):a).isEmpty()&&t.getServerCache().isFullyInitialized()&&(o=n.calcCompleteEventCache(t.getCompleteServerSnap())).isLeafNode()&&(u=this.filter_.updateFullNode(u,o,i))}return o=t.getServerCache().isFullyInitialized()||null!=n.shadowingWrite(J.Empty),t.updateEventSnap(u,o,this.filter_.filtersNodes())},t}(),we=function(){function t(t){this.query_=t,this.index_=this.query_.getQueryParams().getIndex()}return t.prototype.generateEventsForChanges=function(t,e,n){var r=this,i=[],o=[]
return t.forEach(function(t){t.type===_e.CHILD_CHANGED&&r.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(_e.childMovedChange(t.childName,t.snapshotNode))}),this.generateEventsForType_(i,_e.CHILD_REMOVED,t,n,e),this.generateEventsForType_(i,_e.CHILD_ADDED,t,n,e),this.generateEventsForType_(i,_e.CHILD_MOVED,o,n,e),this.generateEventsForType_(i,_e.CHILD_CHANGED,t,n,e),this.generateEventsForType_(i,_e.VALUE,t,n,e),i},t.prototype.generateEventsForType_=function(t,e,n,r,i){var o=this,s=n.filter(function(t){return t.type===e})
s.sort(this.compareChanges_.bind(this)),s.forEach(function(e){var n=o.materializeSingleChange_(e,i)
r.forEach(function(r){r.respondsTo(e.type)&&t.push(r.createEvent(n,o.query_))})})},t.prototype.materializeSingleChange_=function(t,e){return"value"===t.type||"child_removed"===t.type?t:(t.prevName=e.getPredecessorChildName(t.childName,t.snapshotNode,this.index_),t)},t.prototype.compareChanges_=function(t,e){if(null==t.childName||null==e.childName)throw g.assertionError("Should only compare child_ events.")
var n=new Et(t.childName,t.snapshotNode),r=new Et(e.childName,e.snapshotNode)
return this.index_.compare(n,r)},t}(),be=function(){function t(t,e){this.query_=t,this.eventRegistrations_=[]
var n=this.query_.getQueryParams(),r=new ye(n.getIndex()),i=n.getNodeFilter()
this.processor_=new Ee(i)
var o=e.getServerCache(),s=e.getEventCache(),a=r.updateFullNode(Qt.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(Qt.EMPTY_NODE,s.getNode(),null),h=new de(a,o.isFullyInitialized(),r.filtersNodes()),l=new de(u,s.isFullyInitialized(),i.filtersNodes())
this.viewCache_=new fe(l,h),this.eventGenerator_=new we(this.query_)}return t.prototype.getQuery=function(){return this.query_},t.prototype.getServerCache=function(){return this.viewCache_.getServerCache().getNode()},t.prototype.getCompleteServerCache=function(t){var e=this.viewCache_.getCompleteServerSnap()
return e&&(this.query_.getQueryParams().loadsAllData()||!t.isEmpty()&&!e.getImmediateChild(t.getFront()).isEmpty())?e.getChild(t):null},t.prototype.isEmpty=function(){return 0===this.eventRegistrations_.length},t.prototype.addEventRegistration=function(t){this.eventRegistrations_.push(t)},t.prototype.removeEventRegistration=function(t,e){var n=[]
if(e){g.assert(null==t,"A cancel should cancel all event registrations.")
var r=this.query_.path
this.eventRegistrations_.forEach(function(t){e=e
var i=t.createCancelEvent(e,r)
i&&n.push(i)})}if(t){for(var i=[],o=0;o<this.eventRegistrations_.length;++o){var s=this.eventRegistrations_[o]
if(s.matches(t)){if(t.hasAnyCallback()){i=i.concat(this.eventRegistrations_.slice(o+1))
break}}else i.push(s)}this.eventRegistrations_=i}else this.eventRegistrations_=[]
return n},t.prototype.applyOperation=function(t,e,n){t.type===Bt.MERGE&&null!==t.source.queryId&&(g.assert(this.viewCache_.getCompleteServerSnap(),"We should always have a full cache before handling merges"),g.assert(this.viewCache_.getCompleteEventSnap(),"Missing event cache, even though we have a server cache"))
var r=this.viewCache_,i=this.processor_.applyOperation(r,t,e,n)
return this.processor_.assertIndexed(i.viewCache),g.assert(i.viewCache.getServerCache().isFullyInitialized()||!r.getServerCache().isFullyInitialized(),"Once a server snap is complete, it should never go back"),this.viewCache_=i.viewCache,this.generateEventsForChanges_(i.changes,i.viewCache.getEventCache().getNode(),null)},t.prototype.getInitialEvents=function(t){var e=this.viewCache_.getEventCache(),n=[]
return e.getNode().isLeafNode()||e.getNode().forEachChild(Rt,function(t,e){n.push(_e.childAddedChange(t,e))}),e.isFullyInitialized()&&n.push(_e.valueChange(e.getNode())),this.generateEventsForChanges_(n,e.getNode(),t)},t.prototype.generateEventsForChanges_=function(t,e,n){var r=n?[n]:this.eventRegistrations_
return this.eventGenerator_.generateEventsForChanges(t,e,r)},t}(),Se=function(){function t(){this.views_={}}return Object.defineProperty(t,"__referenceConstructor",{get:function(){return g.assert(oe,"Reference.ts has not been loaded"),oe},set:function(t){g.assert(!oe,"__referenceConstructor has already been defined"),oe=t},enumerable:!0,configurable:!0}),t.prototype.isEmpty=function(){return g.isEmpty(this.views_)},t.prototype.applyOperation=function(t,e,n){var r=t.source.queryId
if(null!==r){var i=g.safeGet(this.views_,r)
return g.assert(null!=i,"SyncTree gave us an op for an invalid query."),i.applyOperation(t,e,n)}var o=[]
return g.forEach(this.views_,function(r,i){o=o.concat(i.applyOperation(t,e,n))}),o},t.prototype.addEventRegistration=function(t,e,n,r,i){var o=t.queryIdentifier(),s=g.safeGet(this.views_,o)
if(!s){var a=n.calcCompleteEventCache(i?r:null),u=!1
a?u=!0:r instanceof Qt?(a=n.calcCompleteEventChildren(r),u=!1):(a=Qt.EMPTY_NODE,u=!1)
var h=new fe(new de(a,u,!1),new de(r,i,!1))
s=new be(t,h),this.views_[o]=s}return s.addEventRegistration(e),s.getInitialEvents(e)},t.prototype.removeEventRegistration=function(e,n,r){var i=e.queryIdentifier(),o=[],s=[],a=this.hasCompleteView()
if("default"===i){var u=this
g.forEach(this.views_,function(t,e){s=s.concat(e.removeEventRegistration(n,r)),e.isEmpty()&&(delete u.views_[t],e.getQuery().getQueryParams().loadsAllData()||o.push(e.getQuery()))})}else{var h=g.safeGet(this.views_,i)
h&&(s=s.concat(h.removeEventRegistration(n,r)),h.isEmpty()&&(delete this.views_[i],h.getQuery().getQueryParams().loadsAllData()||o.push(h.getQuery())))}return a&&!this.hasCompleteView()&&o.push(new t.__referenceConstructor(e.repo,e.path)),{removed:o,events:s}},t.prototype.getQueryViews=function(){var t=this
return Object.keys(this.views_).map(function(e){return t.views_[e]}).filter(function(t){return!t.getQuery().getQueryParams().loadsAllData()})},t.prototype.getCompleteServerCache=function(t){var e=null
return g.forEach(this.views_,function(n,r){e=e||r.getCompleteServerCache(t)}),e},t.prototype.viewForQuery=function(t){if(t.getQueryParams().loadsAllData())return this.getCompleteView()
var e=t.queryIdentifier()
return g.safeGet(this.views_,e)},t.prototype.viewExistsForQuery=function(t){return null!=this.viewForQuery(t)},t.prototype.hasCompleteView=function(){return null!=this.getCompleteView()},t.prototype.getCompleteView=function(){return g.findValue(this.views_,function(t){return t.getQuery().getQueryParams().loadsAllData()})||null},t}(),Te=function(){function t(t){this.writeTree_=t}return t.prototype.addWrite=function(e,n){if(e.isEmpty())return new t(new he(n))
var r=this.writeTree_.findRootMostValueAndPath(e)
if(null!=r){var i=r.path,o=r.value,s=J.relativePath(i,e)
return o=o.updateChild(s,n),new t(this.writeTree_.set(i,o))}var a=new he(n)
return new t(this.writeTree_.setTree(e,a))},t.prototype.addWrites=function(t,e){var n=this
return g.forEach(e,function(e,r){n=n.addWrite(t.child(e),r)}),n},t.prototype.removeWrite=function(e){return e.isEmpty()?t.Empty:new t(this.writeTree_.setTree(e,he.Empty))},t.prototype.hasCompleteWrite=function(t){return null!=this.getCompleteNode(t)},t.prototype.getCompleteNode=function(t){var e=this.writeTree_.findRootMostValueAndPath(t)
return null!=e?this.writeTree_.get(e.path).getChild(J.relativePath(e.path,t)):null},t.prototype.getCompleteChildren=function(){var t=[],e=this.writeTree_.value
return null!=e?e.isLeafNode()||e.forEachChild(Rt,function(e,n){t.push(new Et(e,n))}):this.writeTree_.children.inorderTraversal(function(e,n){null!=n.value&&t.push(new Et(e,n.value))}),t},t.prototype.childCompoundWrite=function(e){if(e.isEmpty())return this
var n=this.getCompleteNode(e)
return new t(null!=n?new he(n):this.writeTree_.subtree(e))},t.prototype.isEmpty=function(){return this.writeTree_.isEmpty()},t.prototype.apply=function(e){return t.applySubtreeWrite_(J.Empty,this.writeTree_,e)},t.Empty=new t(new he(null)),t.applySubtreeWrite_=function(e,n,r){if(null!=n.value)return r.updateChild(e,n.value)
var i=null
return n.children.inorderTraversal(function(n,o){".priority"===n?(g.assert(null!==o.value,"Priority writes must always be leaf nodes"),i=o.value):r=t.applySubtreeWrite_(e.child(n),o,r)}),r.getChild(e).isEmpty()||null===i||(r=r.updateChild(e.child(".priority"),i)),r},t}(),Ie=function(){function t(){this.visibleWrites_=Te.Empty,this.allWrites_=[],this.lastWriteId_=-1}return t.prototype.childWrites=function(t){return new Ne(t,this)},t.prototype.addOverwrite=function(t,e,n,r){g.assert(n>this.lastWriteId_,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),this.allWrites_.push({path:t,snap:e,writeId:n,visible:r}),r&&(this.visibleWrites_=this.visibleWrites_.addWrite(t,e)),this.lastWriteId_=n},t.prototype.addMerge=function(t,e,n){g.assert(n>this.lastWriteId_,"Stacking an older merge on top of newer ones"),this.allWrites_.push({path:t,children:e,writeId:n,visible:!0}),this.visibleWrites_=this.visibleWrites_.addWrites(t,e),this.lastWriteId_=n},t.prototype.getWrite=function(t){for(var e=0;e<this.allWrites_.length;e++){var n=this.allWrites_[e]
if(n.writeId===t)return n}return null},t.prototype.removeWrite=function(t){var e=this,n=this.allWrites_.findIndex(function(e){return e.writeId===t})
g.assert(n>=0,"removeWrite called with nonexistent writeId.")
var r=this.allWrites_[n]
this.allWrites_.splice(n,1)
for(var i=r.visible,o=!1,s=this.allWrites_.length-1;i&&s>=0;){var a=this.allWrites_[s]
a.visible&&(s>=n&&this.recordContainsPath_(a,r.path)?i=!1:r.path.contains(a.path)&&(o=!0)),s--}if(i){if(o)return this.resetTree_(),!0
if(r.snap)this.visibleWrites_=this.visibleWrites_.removeWrite(r.path)
else{var u=r.children
g.forEach(u,function(t){e.visibleWrites_=e.visibleWrites_.removeWrite(r.path.child(t))})}return!0}return!1},t.prototype.getCompleteWriteData=function(t){return this.visibleWrites_.getCompleteNode(t)},t.prototype.calcCompleteEventCache=function(e,n,r,i){if(r||i){var o=this.visibleWrites_.childCompoundWrite(e)
if(!i&&o.isEmpty())return n
if(i||null!=n||o.hasCompleteWrite(J.Empty)){var s=t.layerTree_(this.allWrites_,function(t){return(t.visible||i)&&(!r||!~r.indexOf(t.writeId))&&(t.path.contains(e)||e.contains(t.path))},e)
return h=n||Qt.EMPTY_NODE,s.apply(h)}return null}var a=this.visibleWrites_.getCompleteNode(e)
if(null!=a)return a
var u=this.visibleWrites_.childCompoundWrite(e)
if(u.isEmpty())return n
if(null!=n||u.hasCompleteWrite(J.Empty)){var h=n||Qt.EMPTY_NODE
return u.apply(h)}return null},t.prototype.calcCompleteEventChildren=function(t,e){var n=Qt.EMPTY_NODE,r=this.visibleWrites_.getCompleteNode(t)
if(r)return r.isLeafNode()||r.forEachChild(Rt,function(t,e){n=n.updateImmediateChild(t,e)}),n
if(e){var i=this.visibleWrites_.childCompoundWrite(t)
return e.forEachChild(Rt,function(t,e){var r=i.childCompoundWrite(new J(t)).apply(e)
n=n.updateImmediateChild(t,r)}),i.getCompleteChildren().forEach(function(t){n=n.updateImmediateChild(t.name,t.node)}),n}return this.visibleWrites_.childCompoundWrite(t).getCompleteChildren().forEach(function(t){n=n.updateImmediateChild(t.name,t.node)}),n},t.prototype.calcEventCacheAfterServerOverwrite=function(t,e,n,r){g.assert(n||r,"Either existingEventSnap or existingServerSnap must exist")
var i=t.child(e)
if(this.visibleWrites_.hasCompleteWrite(i))return null
var o=this.visibleWrites_.childCompoundWrite(i)
return o.isEmpty()?r.getChild(e):o.apply(r.getChild(e))},t.prototype.calcCompleteChild=function(t,e,n){var r=t.child(e),i=this.visibleWrites_.getCompleteNode(r)
return null!=i?i:n.isCompleteForChild(e)?this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(e)):null},t.prototype.shadowingWrite=function(t){return this.visibleWrites_.getCompleteNode(t)},t.prototype.calcIndexedSlice=function(t,e,n,r,i,o){var s,a=this.visibleWrites_.childCompoundWrite(t),u=a.getCompleteNode(J.Empty)
if(null!=u)s=u
else{if(null==e)return[]
s=a.apply(e)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[]
for(var h=[],l=o.getCompare(),c=i?s.getReverseIteratorFrom(n,o):s.getIteratorFrom(n,o),p=c.getNext();p&&h.length<r;)0!==l(p,n)&&h.push(p),p=c.getNext()
return h},t.prototype.recordContainsPath_=function(t,e){return t.snap?t.path.contains(e):!!g.findKey(t.children,function(n,r){return t.path.child(r).contains(e)})},t.prototype.resetTree_=function(){this.visibleWrites_=t.layerTree_(this.allWrites_,t.DefaultFilter_,J.Empty),this.allWrites_.length>0?this.lastWriteId_=this.allWrites_[this.allWrites_.length-1].writeId:this.lastWriteId_=-1},t.DefaultFilter_=function(t){return t.visible},t.layerTree_=function(t,e,n){for(var r=Te.Empty,i=0;i<t.length;++i){var o=t[i]
if(e(o)){var s=o.path,a=void 0
if(o.snap)n.contains(s)?(a=J.relativePath(n,s),r=r.addWrite(a,o.snap)):s.contains(n)&&(a=J.relativePath(s,n),r=r.addWrite(J.Empty,o.snap.getChild(a)))
else{if(!o.children)throw g.assertionError("WriteRecord should have .snap or .children")
if(n.contains(s))a=J.relativePath(n,s),r=r.addWrites(a,o.children)
else if(s.contains(n))if((a=J.relativePath(s,n)).isEmpty())r=r.addWrites(J.Empty,o.children)
else{var u=g.safeGet(o.children,a.getFront())
if(u){var h=u.getChild(a.popFront())
r=r.addWrite(J.Empty,h)}}}}}return r},t}(),Ne=function(){function t(t,e){this.treePath_=t,this.writeTree_=e}return t.prototype.calcCompleteEventCache=function(t,e,n){return this.writeTree_.calcCompleteEventCache(this.treePath_,t,e,n)},t.prototype.calcCompleteEventChildren=function(t){return this.writeTree_.calcCompleteEventChildren(this.treePath_,t)},t.prototype.calcEventCacheAfterServerOverwrite=function(t,e,n){return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_,t,e,n)},t.prototype.shadowingWrite=function(t){return this.writeTree_.shadowingWrite(this.treePath_.child(t))},t.prototype.calcIndexedSlice=function(t,e,n,r,i){return this.writeTree_.calcIndexedSlice(this.treePath_,t,e,n,r,i)},t.prototype.calcCompleteChild=function(t,e){return this.writeTree_.calcCompleteChild(this.treePath_,t,e)},t.prototype.child=function(e){return new t(this.treePath_.child(e),this.writeTree_)},t}(),Re=function(){function t(t){this.listenProvider_=t,this.syncPointTree_=he.Empty,this.pendingWriteTree_=new Ie,this.tagToQueryMap_={},this.queryToTagMap_={}}return t.prototype.applyUserOverwrite=function(t,e,n,r){return this.pendingWriteTree_.addOverwrite(t,e,n,r),r?this.applyOperationToSyncPoints_(new ce(se.User,t,e)):[]},t.prototype.applyUserMerge=function(t,e,n){this.pendingWriteTree_.addMerge(t,e,n)
var r=he.fromObject(e)
return this.applyOperationToSyncPoints_(new pe(se.User,t,r))},t.prototype.ackUserWrite=function(t,e){void 0===e&&(e=!1)
var n=this.pendingWriteTree_.getWrite(t)
if(this.pendingWriteTree_.removeWrite(t)){var r=he.Empty
return null!=n.snap?r=r.set(J.Empty,!0):g.forEach(n.children,function(t,e){r=r.set(new J(t),e)}),this.applyOperationToSyncPoints_(new ae(n.path,r,e))}return[]},t.prototype.applyServerOverwrite=function(t,e){return this.applyOperationToSyncPoints_(new ce(se.Server,t,e))},t.prototype.applyServerMerge=function(t,e){var n=he.fromObject(e)
return this.applyOperationToSyncPoints_(new pe(se.Server,t,n))},t.prototype.applyListenComplete=function(t){return this.applyOperationToSyncPoints_(new le(se.Server,t))},t.prototype.applyTaggedQueryOverwrite=function(e,n,r){var i=this.queryKeyForTag_(r)
if(null!=i){var o=t.parseQueryKey_(i),s=o.path,a=o.queryId,u=J.relativePath(s,e),h=new ce(se.forServerTaggedQuery(a),u,n)
return this.applyTaggedOperation_(s,h)}return[]},t.prototype.applyTaggedQueryMerge=function(e,n,r){var i=this.queryKeyForTag_(r)
if(i){var o=t.parseQueryKey_(i),s=o.path,a=o.queryId,u=J.relativePath(s,e),h=he.fromObject(n),l=new pe(se.forServerTaggedQuery(a),u,h)
return this.applyTaggedOperation_(s,l)}return[]},t.prototype.applyTaggedListenComplete=function(e,n){var r=this.queryKeyForTag_(n)
if(r){var i=t.parseQueryKey_(r),o=i.path,s=i.queryId,a=J.relativePath(o,e),u=new le(se.forServerTaggedQuery(s),a)
return this.applyTaggedOperation_(o,u)}return[]},t.prototype.addEventRegistration=function(e,n){var r=e.path,i=null,o=!1
this.syncPointTree_.foreachOnPath(r,function(t,e){var n=J.relativePath(t,r)
i=i||e.getCompleteServerCache(n),o=o||e.hasCompleteView()})
var s,a=this.syncPointTree_.get(r)
a?(o=o||a.hasCompleteView(),i=i||a.getCompleteServerCache(J.Empty)):(a=new Se,this.syncPointTree_=this.syncPointTree_.set(r,a)),null!=i?s=!0:(s=!1,i=Qt.EMPTY_NODE,this.syncPointTree_.subtree(r).foreachChild(function(t,e){var n=e.getCompleteServerCache(J.Empty)
n&&(i=i.updateImmediateChild(t,n))}))
var u=a.viewExistsForQuery(e)
if(!u&&!e.getQueryParams().loadsAllData()){var h=t.makeQueryKey_(e)
g.assert(!(h in this.queryToTagMap_),"View does not exist, but we have a tag")
var l=t.getNextQueryTag_()
this.queryToTagMap_[h]=l,this.tagToQueryMap_["_"+l]=h}var c=this.pendingWriteTree_.childWrites(r),p=a.addEventRegistration(e,n,c,i,s)
if(!u&&!o){var d=a.viewForQuery(e)
p=p.concat(this.setupListener_(e,d))}return p},t.prototype.removeEventRegistration=function(e,n,r){var i=this,o=e.path,s=this.syncPointTree_.get(o),a=[]
if(s&&("default"===e.queryIdentifier()||s.viewExistsForQuery(e))){var u=s.removeEventRegistration(e,n,r)
s.isEmpty()&&(this.syncPointTree_=this.syncPointTree_.remove(o))
var h=u.removed
a=u.events
var l=-1!==h.findIndex(function(t){return t.getQueryParams().loadsAllData()}),c=this.syncPointTree_.findOnPath(o,function(t,e){return e.hasCompleteView()})
if(l&&!c){var p=this.syncPointTree_.subtree(o)
if(!p.isEmpty())for(var d=this.collectDistinctViewsForSubTree_(p),f=0;f<d.length;++f){var _=d[f],y=_.getQuery(),v=this.createListenerForView_(_)
this.listenProvider_.startListening(t.queryForListening_(y),this.tagForQuery_(y),v.hashFn,v.onComplete)}}!c&&h.length>0&&!r&&(l?this.listenProvider_.stopListening(t.queryForListening_(e),null):h.forEach(function(e){var n=i.queryToTagMap_[t.makeQueryKey_(e)]
i.listenProvider_.stopListening(t.queryForListening_(e),n)})),this.removeTags_(h)}return a},t.prototype.calcCompleteEventCache=function(t,e){var n=this.pendingWriteTree_,r=this.syncPointTree_.findOnPath(t,function(e,n){var r=J.relativePath(e,t),i=n.getCompleteServerCache(r)
if(i)return i})
return n.calcCompleteEventCache(t,r,e,!0)},t.prototype.collectDistinctViewsForSubTree_=function(t){return t.fold(function(t,e,n){if(e&&e.hasCompleteView())return[e.getCompleteView()]
var r=[]
return e&&(r=e.getQueryViews()),g.forEach(n,function(t,e){r=r.concat(e)}),r})},t.prototype.removeTags_=function(e){for(var n=0;n<e.length;++n){var r=e[n]
if(!r.getQueryParams().loadsAllData()){var i=t.makeQueryKey_(r),o=this.queryToTagMap_[i]
delete this.queryToTagMap_[i],delete this.tagToQueryMap_["_"+o]}}},t.queryForListening_=function(t){return t.getQueryParams().loadsAllData()&&!t.getQueryParams().isDefault()?t.getRef():t},t.prototype.setupListener_=function(e,n){var r=e.path,i=this.tagForQuery_(e),o=this.createListenerForView_(n),s=this.listenProvider_.startListening(t.queryForListening_(e),i,o.hashFn,o.onComplete),a=this.syncPointTree_.subtree(r)
if(i)g.assert(!a.value.hasCompleteView(),"If we're adding a query, it shouldn't be shadowed")
else for(var u=a.fold(function(t,e,n){if(!t.isEmpty()&&e&&e.hasCompleteView())return[e.getCompleteView().getQuery()]
var r=[]
return e&&(r=r.concat(e.getQueryViews().map(function(t){return t.getQuery()}))),g.forEach(n,function(t,e){r=r.concat(e)}),r}),h=0;h<u.length;++h){var l=u[h]
this.listenProvider_.stopListening(t.queryForListening_(l),this.tagForQuery_(l))}return s},t.prototype.createListenerForView_=function(t){var e=this,n=t.getQuery(),r=this.tagForQuery_(n)
return{hashFn:function(){return(t.getServerCache()||Qt.EMPTY_NODE).hash()},onComplete:function(t){if("ok"===t)return r?e.applyTaggedListenComplete(n.path,r):e.applyListenComplete(n.path)
var i=function(t,e){var n="Unknown Error"
"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==t?n="Client doesn't have permission to access the desired data.":"unavailable"==t&&(n="The service is unavailable")
var r=new Error(t+" at "+e.path.toString()+": "+n)
return r.code=t.toUpperCase(),r}(t,n)
return e.removeEventRegistration(n,null,i)}}},t.makeQueryKey_=function(t){return t.path.toString()+"$"+t.queryIdentifier()},t.parseQueryKey_=function(t){var e=t.indexOf("$")
return g.assert(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new J(t.substr(0,e))}},t.prototype.queryKeyForTag_=function(t){return this.tagToQueryMap_["_"+t]},t.prototype.tagForQuery_=function(e){var n=t.makeQueryKey_(e)
return g.safeGet(this.queryToTagMap_,n)},t.getNextQueryTag_=function(){return t.nextQueryTag_++},t.prototype.applyTaggedOperation_=function(t,e){var n=this.syncPointTree_.get(t)
g.assert(n,"Missing sync point for query tag that we're tracking")
var r=this.pendingWriteTree_.childWrites(t)
return n.applyOperation(e,r,null)},t.prototype.applyOperationToSyncPoints_=function(t){return this.applyOperationHelper_(t,this.syncPointTree_,null,this.pendingWriteTree_.childWrites(J.Empty))},t.prototype.applyOperationHelper_=function(t,e,n,r){if(t.path.isEmpty())return this.applyOperationDescendantsHelper_(t,e,n,r)
var i=e.get(J.Empty)
null==n&&null!=i&&(n=i.getCompleteServerCache(J.Empty))
var o=[],s=t.path.getFront(),a=t.operationForChild(s),u=e.children.get(s)
if(u&&a){var h=n?n.getImmediateChild(s):null,l=r.child(s)
o=o.concat(this.applyOperationHelper_(a,u,h,l))}return i&&(o=o.concat(i.applyOperation(t,r,n))),o},t.prototype.applyOperationDescendantsHelper_=function(t,e,n,r){var i=this,o=e.get(J.Empty)
null==n&&null!=o&&(n=o.getCompleteServerCache(J.Empty))
var s=[]
return e.children.inorderTraversal(function(e,o){var a=n?n.getImmediateChild(e):null,u=r.child(e),h=t.operationForChild(e)
h&&(s=s.concat(i.applyOperationDescendantsHelper_(h,o,a,u)))}),o&&(s=s.concat(o.applyOperation(t,r,n))),s},t.nextQueryTag_=1,t}(),Pe=function(){function t(){this.rootNode_=Qt.EMPTY_NODE}return t.prototype.getNode=function(t){return this.rootNode_.getChild(t)},t.prototype.updateSnapshot=function(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)},t}(),De=function(){function t(t){this.app_=t}return t.prototype.getToken=function(t){return this.app_.INTERNAL.getToken(t).then(null,function(t){return t&&"auth/token-not-initialized"===t.code?(O("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)})},t.prototype.addTokenChangeListener=function(t){this.app_.INTERNAL.addAuthTokenListener(t)},t.prototype.removeTokenChangeListener=function(t){this.app_.INTERNAL.removeAuthTokenListener(t)},t.prototype.notifyForInvalidToken=function(){var t='Provided authentication credentials for the app named "'+this.app_.name+'" are invalid. This usually indicates your app was not initialized correctly. '
"credential"in this.app_.options?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.app_.options?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',L(t)},t}(),xe=function(){function t(){this.counters_={}}return t.prototype.incrementCounter=function(t,e){void 0===e&&(e=1),g.contains(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e},t.prototype.get=function(){return g.deepCopy(this.counters_)},t}(),Oe=function(){function t(){}return t.getCollection=function(t){var e=t.toString()
return this.collections_[e]||(this.collections_[e]=new xe),this.collections_[e]},t.getOrCreateReporter=function(t,e){var n=t.toString()
return this.reporters_[n]||(this.reporters_[n]=e()),this.reporters_[n]},t.collections_={},t.reporters_={},t}(),ke=function(){function t(t){this.collection_=t,this.last_=null}return t.prototype.get=function(){var t=this.collection_.get(),e=g.clone(t)
return this.last_&&g.forEach(this.last_,function(t,n){e[t]=e[t]-n}),this.last_=t,e},t}(),Fe=1e4,Ae=3e4,Le=function(){function t(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new ke(t)
var n=Fe+(Ae-Fe)*Math.random()
$(this.reportStats_.bind(this),Math.floor(n))}return t.prototype.includeStat=function(t){this.statsToReport_[t]=!0},t.prototype.reportStats_=function(){var t=this,e=this.statsListener_.get(),n={},r=!1
g.forEach(e,function(e,i){i>0&&g.contains(t.statsToReport_,e)&&(n[e]=i,r=!0)}),r&&this.server_.reportStats(n),$(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))},t}(),Me=function(){function t(){this.eventLists_=[],this.recursionDepth_=0}return t.prototype.queueEvents=function(t){for(var e=null,n=0;n<t.length;n++){var r=t[n],i=r.getPath()
null===e||i.equals(e.getPath())||(this.eventLists_.push(e),e=null),null===e&&(e=new We(i)),e.add(r)}e&&this.eventLists_.push(e)},t.prototype.raiseEventsAtPath=function(t,e){this.queueEvents(e),this.raiseQueuedEventsMatchingPredicate_(function(e){return e.equals(t)})},t.prototype.raiseEventsForChangedPath=function(t,e){this.queueEvents(e),this.raiseQueuedEventsMatchingPredicate_(function(e){return e.contains(t)||t.contains(e)})},t.prototype.raiseQueuedEventsMatchingPredicate_=function(t){this.recursionDepth_++
for(var e=!0,n=0;n<this.eventLists_.length;n++){var r=this.eventLists_[n]
r&&(t(r.getPath())?(this.eventLists_[n].raise(),this.eventLists_[n]=null):e=!1)}e&&(this.eventLists_=[]),this.recursionDepth_--},t}(),We=function(){function t(t){this.path_=t,this.events_=[]}return t.prototype.add=function(t){this.events_.push(t)},t.prototype.raise=function(){for(var t=0;t<this.events_.length;t++){var e=this.events_[t]
if(null!==e){this.events_[t]=null
var n=e.getEventRunner()
P&&O("event: "+e.toString()),G(n)}}},t.prototype.getPath=function(){return this.path_},t}(),qe=function(){function t(t){this.allowedEvents_=t,this.listeners_={},g.assert(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}return t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(Array.isArray(this.listeners_[t]))for(var r=this.listeners_[t].slice(),i=0;i<r.length;i++)r[i].callback.apply(r[i].context,e)},t.prototype.on=function(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n})
var r=this.getInitialEvent(t)
r&&e.apply(n,r)},t.prototype.off=function(t,e,n){this.validateEventType_(t)
for(var r=this.listeners_[t]||[],i=0;i<r.length;i++)if(r[i].callback===e&&(!n||n===r[i].context))return void r.splice(i,1)},t.prototype.validateEventType_=function(t){g.assert(this.allowedEvents_.find(function(e){return e===t}),"Unknown event: "+t)},t}(),Qe=function(t){function e(){var e,n,r=t.call(this,["visible"])||this
return"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(n="visibilitychange",e="hidden"):void 0!==document.mozHidden?(n="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(n="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(n="webkitvisibilitychange",e="webkitHidden")),r.visible_=!0,n&&document.addEventListener(n,function(){var t=!document[e]
t!==r.visible_&&(r.visible_=t,r.trigger("visible",t))},!1),r}return v.__extends(e,t),e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(t){return g.assert("visible"===t,"Unknown event type: "+t),[this.visible_]},e}(qe),Ue=function(t){function e(){var e=t.call(this,["online"])||this
return e.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||g.isMobileCordova()||(window.addEventListener("online",function(){e.online_||(e.online_=!0,e.trigger("online",!0))},!1),window.addEventListener("offline",function(){e.online_&&(e.online_=!1,e.trigger("online",!1))},!1)),e}return v.__extends(e,t),e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(t){return g.assert("online"===t,"Unknown event type: "+t),[this.online_]},e.prototype.currentlyOnline=function(){return this.online_},e}(qe),Ve=function(){function t(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return t.prototype.closeAfter=function(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},t.prototype.handleResponse=function(t,e){var n=this
this.pendingResponses[t]=e
for(var r=function(){var t=i.pendingResponses[i.currentResponseNum]
delete i.pendingResponses[i.currentResponseNum]
for(var e=function(e){t[e]&&G(function(){n.onMessage_(t[e])})},r=0;r<t.length;++r)e(r)
if(i.currentResponseNum===i.closeAfterResponse)return i.onClose&&(i.onClose(),i.onClose=null),"break"
i.currentResponseNum++},i=this;this.pendingResponses[this.currentResponseNum]&&"break"!==r(););},t}(),He="pLPCommand",je="pRTLPCB",Be=function(){function t(t,e,n,r){this.connId=t,this.repoInfo=e,this.transportSessionId=n,this.lastSessionId=r,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=k(t),this.stats_=Oe.getCollection(e),this.urlFn=function(t){return e.connectionURL(tt,t)}}return t.prototype.open=function(t,e){var n=this
this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new Ve(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){n.log_("Timed out trying to connect."),n.onClosed_(),n.connectTimeoutTimer_=null},Math.floor(3e4)),function(t){if(g.isNodeSdk()||"complete"===document.readyState)t()
else{var e=!1,n=function n(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))}
document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}}(function(){if(!n.isClosed_){n.scriptTagHolder=new Ke(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var r=t[0],i=t[1],o=t[2]
if(n.incrementIncomingBytes_(t),n.scriptTagHolder)if(n.connectTimeoutTimer_&&(clearTimeout(n.connectTimeoutTimer_),n.connectTimeoutTimer_=null),n.everConnected_=!0,"start"==r)n.id=i,n.password=o
else{if("close"!==r)throw new Error("Unrecognized command received: "+r)
i?(n.scriptTagHolder.sendNewPolls=!1,n.myPacketOrderer.closeAfter(i,function(){n.onClosed_()})):n.onClosed_()}},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var r=t[0],i=t[1]
n.incrementIncomingBytes_(t),n.myPacketOrderer.handleResponse(r,i)},function(){n.onClosed_()},n.urlFn)
var t={start:"t"}
t.ser=Math.floor(1e8*Math.random()),n.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=n.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",n.transportSessionId&&(t.s=n.transportSessionId),n.lastSessionId&&(t.ls=n.lastSessionId),!g.isNodeSdk()&&"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(t.r="f")
var e=n.urlFn(t)
n.log_("Connecting via long-poll to "+e),n.scriptTagHolder.addTag(e,function(){})}})},t.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},t.forceAllow=function(){t.forceAllow_=!0},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){return t.forceAllow_||!t.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"===("undefined"==typeof window?"undefined":r(window))&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===("undefined"==typeof Windows?"undefined":r(Windows))&&"object"===r(Windows.UI))&&!g.isNodeSdk()},t.prototype.markConnectionHealthy=function(){},t.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},t.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},t.prototype.send=function(t){var e=g.stringify(t)
this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length)
for(var n=g.base64Encode(e),r=j(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++},t.prototype.addDisconnectPingFrame=function(t,e){if(!g.isNodeSdk()){this.myDisconnFrame=document.createElement("iframe")
var n={dframe:"t"}
n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}},t.prototype.incrementIncomingBytes_=function(t){var e=g.stringify(t).length
this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)},t}(),Ke=function(){function t(e,n,r,i){if(this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new te,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,g.isNodeSdk())this.commandCB=e,this.onMessageCB=n
else{this.uniqueCallbackIdentifier=I(),window[He+this.uniqueCallbackIdentifier]=e,window[je+this.uniqueCallbackIdentifier]=n,this.myIFrame=t.createIFrame_()
var o=""
this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)&&(o='<script>document.domain="'+document.domain+'";<\/script>')
var s="<html><body>"+o+"</body></html>"
try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(t){O("frame writing exception"),t.stack&&O(t.stack),O(t)}}}return t.createIFrame_=function(){var t=document.createElement("iframe")
if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready."
document.body.appendChild(t)
try{t.contentWindow.document||O("No IE domain setting required")}catch(n){var e=document.domain
t.src="javascript:void((function(){document.open();document.domain='"+e+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t},t.prototype.close=function(){var e=this
if(this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)},Math.floor(0))),g.isNodeSdk()&&this.myID){var n={disconn:"t"}
n.id=this.myID,n.pw=this.myPW
var r=this.urlFn(n)
t.nodeRestRequest(r)}var i=this.onDisconnect
i&&(this.onDisconnect=null,i())},t.prototype.startLongPoll=function(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););},t.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.count()<(this.pendingSegs.length>0?2:1)){this.currentSerial++
var t={}
t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial
for(var e=this.urlFn(t),n="",r=0;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+30+n.length<=1870;){var i=this.pendingSegs.shift()
n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1},t.prototype.enqueueSegment=function(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()},t.prototype.addLongPollTag_=function(t,e){var n=this
this.outstandingRequests.add(e,1)
var r=function(){n.outstandingRequests.remove(e),n.newRequest_()},i=setTimeout(r,Math.floor(25e3))
this.addTag(t,function(){clearTimeout(i),r()})},t.prototype.addTag=function(t,e){var n=this
g.isNodeSdk()?this.doNodeLongPoll(t,e):setTimeout(function(){try{if(!n.sendNewPolls)return
var r=n.myIFrame.doc.createElement("script")
r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){var t=r.readyState
t&&"loaded"!==t&&"complete"!==t||(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),e())},r.onerror=function(){O("Long-poll script failed to load: "+t),n.sendNewPolls=!1,n.close()},n.myIFrame.doc.body.appendChild(r)}catch(t){}},Math.floor(1))},t}(),Ye=null
"undefined"!=typeof MozWebSocket?Ye=MozWebSocket:"undefined"!=typeof WebSocket&&(Ye=WebSocket)
var ze=function(){function t(e,n,r,i){this.connId=e,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=k(this.connId),this.stats_=Oe.getCollection(n),this.connURL=t.connectionURL_(n,r,i)}return t.connectionURL_=function(t,e,n){var r={v:"5"}
return!g.isNodeSdk()&&"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(r.r="f"),e&&(r.s=e),n&&(r.ls=n),t.connectionURL("websocket",r)},t.prototype.open=function(t,e){var n=this
this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,b.set("previous_websocket_failure",!0)
try{if(g.isNodeSdk()){var r=g.CONSTANTS.NODE_ADMIN?"AdminNode":"Node",i={headers:{"User-Agent":"Firebase/5/"+y.SDK_VERSION+"/"+process.platform+"/"+r}},o=process.env,s=0==this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy
s&&(i.proxy={origin:s}),this.mySock=new Ye(this.connURL,[],i)}else this.mySock=new Ye(this.connURL)}catch(t){this.log_("Error instantiating WebSocket.")
var a=t.message||t.data
return a&&this.log_(a),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(t){n.handleIncomingFrame(t)},this.mySock.onerror=function(t){n.log_("WebSocket error.  Closing connection.")
var e=t.message||t.data
e&&n.log_(e),n.onClosed_()}},t.prototype.start=function(){},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){var e=!1
if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/)
n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ye&&!t.forceDisallow_},t.previouslyFailed=function(){return b.isInMemoryStorage||!0===b.get("previous_websocket_failure")},t.prototype.markConnectionHealthy=function(){b.remove("previous_websocket_failure")},t.prototype.appendFrame_=function(t){if(this.frames.push(t),this.frames.length==this.totalFrames){var e=this.frames.join("")
this.frames=null
var n=g.jsonEval(e)
this.onMessage(n)}},t.prototype.handleNewFrameCount_=function(t){this.totalFrames=t,this.frames=[]},t.prototype.extractFrameCount_=function(t){if(g.assert(null===this.frames,"We already have a frame buffer"),t.length<=6){var e=Number(t)
if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t},t.prototype.handleIncomingFrame=function(t){if(null!==this.mySock){var e=t.data
if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e)
else{var n=this.extractFrameCount_(e)
null!==n&&this.appendFrame_(n)}}},t.prototype.send=function(t){this.resetKeepAlive()
var e=g.stringify(t)
this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length)
var n=j(e,16384)
n.length>1&&this.sendString_(String(n.length))
for(var r=0;r<n.length;r++)this.sendString_(n[r])},t.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},t.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},t.prototype.resetKeepAlive=function(){var t=this
clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){t.mySock&&t.sendString_("0"),t.resetKeepAlive()},Math.floor(45e3))},t.prototype.sendString_=function(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},t.responsesRequiredToBeHealthy=2,t.healthyTimeout=3e4,t}(),Ge=function(){function t(t){this.initTransports_(t)}return Object.defineProperty(t,"ALL_TRANSPORTS",{get:function(){return[Be,ze]},enumerable:!0,configurable:!0}),t.prototype.initTransports_=function(e){var n=ze&&ze.isAvailable(),r=n&&!ze.previouslyFailed()
if(e.webSocketOnly&&(n||L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ze]
else{var i=this.transports_=[]
B(t.ALL_TRANSPORTS,function(t,e){e&&e.isAvailable()&&i.push(e)})}},t.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0]
throw new Error("No transports available")},t.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},t}(),Xe=function(){function t(t,e,n,r,i,o,s){this.id=t,this.repoInfo_=e,this.onMessage_=n,this.onReady_=r,this.onDisconnect_=i,this.onKill_=o,this.lastSessionId=s,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=k("c:"+this.id+":"),this.transportManager_=new Ge(e),this.log_("Connection created"),this.start_()}return t.prototype.start_=function(){var t=this,e=this.transportManager_.initialTransport()
this.conn_=new e(this.nextTransportId_(),this.repoInfo_,void 0,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0
var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_)
this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){t.conn_&&t.conn_.open(n,r)},Math.floor(0))
var i=e.healthyTimeout||0
i>0&&(this.healthyTimeout_=$(function(){t.healthyTimeout_=null,t.isHealthy_||(t.conn_&&t.conn_.bytesReceived>102400?(t.log_("Connection exceeded healthy timeout but has received "+t.conn_.bytesReceived+" bytes.  Marking connection healthy."),t.isHealthy_=!0,t.conn_.markConnectionHealthy()):t.conn_&&t.conn_.bytesSent>10240?t.log_("Connection exceeded healthy timeout but has sent "+t.conn_.bytesSent+" bytes.  Leaving connection alive."):(t.log_("Closing unhealthy connection after timeout."),t.close()))},Math.floor(i)))},t.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},t.prototype.disconnReceiver_=function(t){var e=this
return function(n){t===e.conn_?e.onConnectionLost_(n):t===e.secondaryConn_?(e.log_("Secondary connection lost."),e.onSecondaryConnectionLost_()):e.log_("closing an old connection")}},t.prototype.connReceiver_=function(t){var e=this
return function(n){2!=e.state_&&(t===e.rx_?e.onPrimaryMessageReceived_(n):t===e.secondaryConn_?e.onSecondaryMessageReceived_(n):e.log_("message on old connection"))}},t.prototype.sendRequest=function(t){var e={t:"d",d:t}
this.sendData_(e)},t.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},t.prototype.onSecondaryControl_=function(t){if("t"in t){var e=t.t
"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},t.prototype.onSecondaryMessageReceived_=function(t){var e=V("t",t),n=V("d",t)
if("c"==e)this.onSecondaryControl_(n)
else{if("d"!=e)throw new Error("Unknown protocol layer: "+e)
this.pendingDataMessages.push(n)}},t.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))},t.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},t.prototype.onPrimaryMessageReceived_=function(t){var e=V("t",t),n=V("d",t)
"c"==e?this.onControl_(n):"d"==e&&this.onDataMessage_(n)},t.prototype.onDataMessage_=function(t){this.onPrimaryResponse_(),this.onMessage_(t)},t.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},t.prototype.onControl_=function(t){var e=V("t",t)
if("d"in t){var n=t.d
if("h"===e)this.onHandshake_(n)
else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_
for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r])
this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?F("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):F("Unknown control packet command: "+e)}},t.prototype.onHandshake_=function(t){var e=t.ts,n=t.v,r=t.h
this.sessionId=t.s,this.repoInfo_.updateHost(r),0==this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==n&&L("Protocol version mismatch detected"),this.tryStartUpgrade_())},t.prototype.tryStartUpgrade_=function(){var t=this.transportManager_.upgradeTransport()
t&&this.startUpgrade_(t)},t.prototype.startUpgrade_=function(t){var e=this
this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0
var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_)
this.secondaryConn_.open(n,r),$(function(){e.secondaryConn_&&(e.log_("Timed out trying to upgrade."),e.secondaryConn_.close())},Math.floor(6e4))},t.prototype.onReset_=function(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.updateHost(t),1===this.state_?this.close():(this.closeConnections_(),this.start_())},t.prototype.onConnectionEstablished_=function(t,e){var n=this
this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$(function(){n.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))},t.prototype.sendPingOnPrimaryIfNecessary_=function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))},t.prototype.onSecondaryConnectionLost_=function(){var t=this.secondaryConn_
this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()},t.prototype.onConnectionLost_=function(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(b.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()},t.prototype.onConnectionShutdown_=function(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()},t.prototype.sendData_=function(t){if(1!==this.state_)throw"Connection is not connected"
this.tx_.send(t)},t.prototype.close=function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},t.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},t}(),$e=function(){function t(){}return t.prototype.put=function(t,e,n,r){},t.prototype.merge=function(t,e,n,r){},t.prototype.refreshAuthToken=function(t){},t.prototype.onDisconnectPut=function(t,e,n){},t.prototype.onDisconnectMerge=function(t,e,n){},t.prototype.onDisconnectCancel=function(t,e){},t.prototype.reportStats=function(t){},t}(),Je=1e3,Ze=3e5,tn=function(t){function e(n,r,i,o,s,a){var u=t.call(this)||this
if(u.repoInfo_=n,u.onDataUpdate_=r,u.onConnectStatus_=i,u.onServerInfoUpdate_=o,u.authTokenProvider_=s,u.authOverride_=a,u.id=e.nextPersistentConnectionId_++,u.log_=k("p:"+u.id+":"),u.interruptReasons_={},u.listens_={},u.outstandingPuts_=[],u.outstandingPutCount_=0,u.onDisconnectRequestQueue_=[],u.connected_=!1,u.reconnectDelay_=Je,u.maxReconnectDelay_=Ze,u.securityDebugCallback_=null,u.lastSessionId=null,u.establishConnectionTimer_=null,u.visible_=!1,u.requestCBHash_={},u.requestNumber_=0,u.realtime_=null,u.authToken_=null,u.forceTokenRefresh_=!1,u.invalidAuthTokenCount_=0,u.firstConnection_=!0,u.lastConnectionAttemptTime_=null,u.lastConnectionEstablishedTime_=null,a&&!g.isNodeSdk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms")
return u.scheduleConnect_(0),Qe.getInstance().on("visible",u.onVisible_,u),-1===n.host.indexOf("fblocal")&&Ue.getInstance().on("online",u.onOnline_,u),u}return v.__extends(e,t),e.prototype.sendRequest=function(t,e,n){var r=++this.requestNumber_,i={r:r,a:t,b:e}
this.log_(g.stringify(i)),g.assert(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)},e.prototype.listen=function(t,e,n,r){var i=t.queryIdentifier(),o=t.path.toString()
this.log_("Listen called for "+o+" "+i),this.listens_[o]=this.listens_[o]||{},g.assert(t.getQueryParams().isDefault()||!t.getQueryParams().loadsAllData(),"listen() called for non-default but complete query"),g.assert(!this.listens_[o][i],"listen() called twice for same path/queryId.")
var s={onComplete:r,hashFn:e,query:t,tag:n}
this.listens_[o][i]=s,this.connected_&&this.sendListen_(s)},e.prototype.sendListen_=function(t){var n=this,r=t.query,i=r.path.toString(),o=r.queryIdentifier()
this.log_("Listen on "+i+" for "+o)
var s={p:i}
t.tag&&(s.q=r.queryObject(),s.t=t.tag),s.h=t.hashFn(),this.sendRequest("q",s,function(s){var a=s.d,u=s.s
e.warnOnListenWarnings_(a,r),(n.listens_[i]&&n.listens_[i][o])===t&&(n.log_("listen response",s),"ok"!==u&&n.removeListen_(i,o),t.onComplete&&t.onComplete(u,a))})},e.warnOnListenWarnings_=function(t,e){if(t&&"object"===r(t)&&g.contains(t,"w")){var n=g.safeGet(t,"w")
if(Array.isArray(n)&&~n.indexOf("no_index")){var i='".indexOn": "'+e.getQueryParams().getIndex().toString()+'"',o=e.path.toString()
L("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding "+i+" at "+o+" to your security rules for better performance.")}}},e.prototype.refreshAuthToken=function(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(t)},e.prototype.reduceReconnectDelayIfAdminCredential_=function(t){(t&&40===t.length||g.isAdmin(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)},e.prototype.tryAuth=function(){var t=this
if(this.connected_&&this.authToken_){var e=this.authToken_,n=g.isValidFormat(e)?"auth":"gauth",i={cred:e}
null===this.authOverride_?i.noauth=!0:"object"===r(this.authOverride_)&&(i.authvar=this.authOverride_),this.sendRequest(n,i,function(n){var r=n.s,i=n.d||"error"
t.authToken_===e&&("ok"===r?t.invalidAuthTokenCount_=0:t.onAuthRevoked_(r,i))})}},e.prototype.unlisten=function(t,e){var n=t.path.toString(),r=t.queryIdentifier()
this.log_("Unlisten called for "+n+" "+r),g.assert(t.getQueryParams().isDefault()||!t.getQueryParams().loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,t.queryObject(),e)},e.prototype.sendUnlisten_=function(t,e,n,r){this.log_("Unlisten on "+t+" for "+e)
var i={p:t}
r&&(i.q=n,i.t=r),this.sendRequest("n",i)},e.prototype.onDisconnectPut=function(t,e,n){this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})},e.prototype.onDisconnectMerge=function(t,e,n){this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})},e.prototype.onDisconnectCancel=function(t,e){this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})},e.prototype.sendOnDisconnect_=function(t,e,n,r){var i={p:e,d:n}
this.log_("onDisconnect "+t,i),this.sendRequest(t,i,function(t){r&&setTimeout(function(){r(t.s,t.d)},Math.floor(0))})},e.prototype.put=function(t,e,n,r){this.putInternal("p",t,e,n,r)},e.prototype.merge=function(t,e,n,r){this.putInternal("m",t,e,n,r)},e.prototype.putInternal=function(t,e,n,r,i){var o={p:e,d:n}
void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++
var s=this.outstandingPuts_.length-1
this.connected_?this.sendPut_(s):this.log_("Buffering put: "+e)},e.prototype.sendPut_=function(t){var e=this,n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete
this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,function(r){e.log_(n+" response",r),delete e.outstandingPuts_[t],e.outstandingPutCount_--,0===e.outstandingPutCount_&&(e.outstandingPuts_=[]),i&&i(r.s,r.d)})},e.prototype.reportStats=function(t){var e=this
if(this.connected_){var n={c:t}
this.log_("reportStats",n),this.sendRequest("s",n,function(t){if("ok"!==t.s){var n=t.d
e.log_("reportStats","Error sending stats: "+n)}})}},e.prototype.onDataMessage_=function(t){if("r"in t){this.log_("from server: "+g.stringify(t))
var e=t.r,n=this.requestCBHash_[e]
n&&(delete this.requestCBHash_[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error
"a"in t&&this.onDataPush_(t.a,t.b)}},e.prototype.onDataPush_=function(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):F("Unrecognized action received from server: "+g.stringify(t)+"\nAre you using the latest client?")},e.prototype.onReady_=function(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},e.prototype.scheduleConnect_=function(t){var e=this
g.assert(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){e.establishConnectionTimer_=null,e.establishConnection_()},Math.floor(t))},e.prototype.onVisible_=function(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0)),this.visible_=t},e.prototype.onOnline_=function(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},e.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&((new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Je),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime())
var t=(new Date).getTime()-this.lastConnectionAttemptTime_,e=Math.max(0,this.reconnectDelay_-t)
e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)},e.prototype.establishConnection_=function(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null
var t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+e.nextConnectionId_++,o=this,s=this.lastSessionId,a=!1,u=null,h=function(){u?u.close():(a=!0,r())}
this.realtime_={close:h,sendRequest:function(t){g.assert(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(t)}}
var l=this.forceTokenRefresh_
this.forceTokenRefresh_=!1,this.authTokenProvider_.getToken(l).then(function(e){a?O("getToken() completed but was canceled"):(O("getToken() completed. Creating connection."),o.authToken_=e&&e.accessToken,u=new Xe(i,o.repoInfo_,t,n,r,function(t){L(t+" ("+o.repoInfo_.toString()+")"),o.interrupt("server_kill")},s))}).then(null,function(t){o.log_("Failed to get token: "+t),a||(g.CONSTANTS.NODE_ADMIN&&L(t),h())})}},e.prototype.interrupt=function(t){O("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},e.prototype.resume=function(t){O("Resuming connection for reason: "+t),delete this.interruptReasons_[t],g.isEmpty(this.interruptReasons_)&&(this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0))},e.prototype.handleTimestamp_=function(t){var e=t-(new Date).getTime()
this.onServerInfoUpdate_({serverTimeOffset:e})},e.prototype.cancelSentTransactions_=function(){for(var t=0;t<this.outstandingPuts_.length;t++){var e=this.outstandingPuts_[t]
e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])},e.prototype.onListenRevoked_=function(t,e){var n
n=e?e.map(function(t){return H(t)}).join("$"):"default"
var r=this.removeListen_(t,n)
r&&r.onComplete&&r.onComplete("permission_denied")},e.prototype.removeListen_=function(t,e){var n,r=new J(t).toString()
return void 0!==this.listens_[r]?(n=this.listens_[r][e],delete this.listens_[r][e],0===g.getCount(this.listens_[r])&&delete this.listens_[r]):n=void 0,n},e.prototype.onAuthRevoked_=function(t,e){O("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))},e.prototype.onSecurityDebugPacket_=function(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))},e.prototype.restoreState_=function(){var t=this
this.tryAuth(),g.forEach(this.listens_,function(e,n){g.forEach(n,function(e,n){t.sendListen_(n)})})
for(var e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e)
for(;this.onDisconnectRequestQueue_.length;){var n=this.onDisconnectRequestQueue_.shift()
this.sendOnDisconnect_(n.action,n.pathString,n.data,n.onComplete)}},e.prototype.sendConnectStats_=function(){var t={},e="js"
g.CONSTANTS.NODE_ADMIN?e="admin_node":g.CONSTANTS.NODE_CLIENT&&(e="node"),t["sdk."+e+"."+y.SDK_VERSION.replace(/\./g,"-")]=1,g.isMobileCordova()?t["framework.cordova"]=1:g.isReactNative()&&(t["framework.reactnative"]=1),this.reportStats(t)},e.prototype.shouldReconnect_=function(){var t=Ue.getInstance().currentlyOnline()
return g.isEmpty(this.interruptReasons_)&&t},e.nextPersistentConnectionId_=0,e.nextConnectionId_=0,e}($e),en=function(t){function e(e,n,r){var i=t.call(this)||this
return i.repoInfo_=e,i.onDataUpdate_=n,i.authTokenProvider_=r,i.log_=k("p:rest:"),i.listens_={},i}return v.__extends(e,t),e.prototype.reportStats=function(t){throw new Error("Method not implemented.")},e.getListenId_=function(t,e){return void 0!==e?"tag$"+e:(g.assert(t.getQueryParams().isDefault(),"should have a tag if it's not a default query."),t.path.toString())},e.prototype.listen=function(t,n,r,i){var o=this,s=t.path.toString()
this.log_("Listen called for "+s+" "+t.queryIdentifier())
var a=e.getListenId_(t,r),u={}
this.listens_[a]=u
var h=t.getQueryParams().toRestQueryStringParameters()
this.restRequest_(s+".json",h,function(t,e){var n=e
404===t&&(n=null,t=null),null===t&&o.onDataUpdate_(s,n,!1,r),g.safeGet(o.listens_,a)===u&&i(t?401==t?"permission_denied":"rest_error:"+t:"ok",null)})},e.prototype.unlisten=function(t,n){var r=e.getListenId_(t,n)
delete this.listens_[r]},e.prototype.refreshAuthToken=function(t){},e.prototype.restRequest_=function(t,e,n){var r=this
void 0===e&&(e={}),e.format="export",this.authTokenProvider_.getToken(!1).then(function(i){var o=i&&i.accessToken
o&&(e.auth=o)
var s=(r.repoInfo_.secure?"https://":"http://")+r.repoInfo_.host+t+"?ns="+r.repoInfo_.namespace+g.querystring(e)
r.log_("Sending REST request for "+s)
var a=new XMLHttpRequest
a.onreadystatechange=function(){if(n&&4===a.readyState){r.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText)
var t=null
if(a.status>=200&&a.status<300){try{t=g.jsonEval(a.responseText)}catch(t){L("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&L("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status)
n=null}},a.open("GET",s,!0),a.send()})},e}($e),nn=function(){function t(t,e,n){var i=this
this.repoInfo_=t,this.app=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Me,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=new ee,this.persistentConnection_=null
var o=new De(n)
if(this.stats_=Oe.getCollection(t),e||X())this.server_=new en(this.repoInfo_,this.onDataUpdate_.bind(this),o),setTimeout(this.onConnectStatus_.bind(this,!0),0)
else{var s=n.options.databaseAuthVariableOverride
if(null!=s){if("object"!==r(s))throw new Error("Only objects are supported for option databaseAuthVariableOverride")
try{g.stringify(s)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}this.persistentConnection_=new tn(this.repoInfo_,this.onDataUpdate_.bind(this),this.onConnectStatus_.bind(this),this.onServerInfoUpdate_.bind(this),o,s),this.server_=this.persistentConnection_}o.addTokenChangeListener(function(t){i.server_.refreshAuthToken(t)}),this.statsReporter_=Oe.getOrCreateReporter(t,function(){return new Le(i.stats_,i.server_)}),this.transactions_init_(),this.infoData_=new Pe,this.infoSyncTree_=new Re({startListening:function(t,e,n,r){var o=[],s=i.infoData_.getNode(t.path)
return s.isEmpty()||(o=i.infoSyncTree_.applyServerOverwrite(t.path,s),setTimeout(function(){r("ok")},0)),o},stopListening:function(){}}),this.updateInfo_("connected",!1),this.serverSyncTree_=new Re({startListening:function(t,e,n,r){return i.server_.listen(t,n,e,function(e,n){var o=r(e,n)
i.eventQueue_.raiseEventsForChangedPath(t.path,o)}),[]},stopListening:function(t,e){i.server_.unlisten(t,e)}})}return t.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},t.prototype.name=function(){return this.repoInfo_.namespace},t.prototype.serverTime=function(){var t=this.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0
return(new Date).getTime()+t},t.prototype.generateServerValues=function(){return(t=(t={timestamp:this.serverTime()})||{}).timestamp=t.timestamp||(new Date).getTime(),t
var t},t.prototype.onDataUpdate_=function(t,e,n,r){this.dataUpdateCount++
var i=new J(t)
e=this.interceptServerDataCallback_?this.interceptServerDataCallback_(t,e):e
var o=[]
if(r)if(n){var s=g.map(e,function(t){return Ht(t)})
o=this.serverSyncTree_.applyTaggedQueryMerge(i,s,r)}else{var a=Ht(e)
o=this.serverSyncTree_.applyTaggedQueryOverwrite(i,a,r)}else if(n){var u=g.map(e,function(t){return Ht(t)})
o=this.serverSyncTree_.applyServerMerge(i,u)}else{var h=Ht(e)
o=this.serverSyncTree_.applyServerOverwrite(i,h)}var l=i
o.length>0&&(l=this.rerunTransactions_(i)),this.eventQueue_.raiseEventsForChangedPath(l,o)},t.prototype.interceptServerData_=function(t){this.interceptServerDataCallback_=t},t.prototype.onConnectStatus_=function(t){this.updateInfo_("connected",t),!1===t&&this.runOnDisconnectEvents_()},t.prototype.onServerInfoUpdate_=function(t){var e=this
B(t,function(t,n){e.updateInfo_(n,t)})},t.prototype.updateInfo_=function(t,e){var n=new J("/.info/"+t),r=Ht(e)
this.infoData_.updateSnapshot(n,r)
var i=this.infoSyncTree_.applyServerOverwrite(n,r)
this.eventQueue_.raiseEventsForChangedPath(n,i)},t.prototype.getNextWriteId_=function(){return this.nextWriteId_++},t.prototype.setWithPriority=function(t,e,n,r){var i=this
this.log_("set",{path:t.toString(),value:e,priority:n})
var o=this.generateServerValues(),s=Ht(e,n),a=re(s,o),u=this.getNextWriteId_(),h=this.serverSyncTree_.applyUserOverwrite(t,a,u,!0)
this.eventQueue_.queueEvents(h),this.server_.put(t.toString(),s.val(!0),function(e,n){var o="ok"===e
o||L("set at "+t+" failed: "+e)
var s=i.serverSyncTree_.ackUserWrite(u,!o)
i.eventQueue_.raiseEventsForChangedPath(t,s),i.callOnCompleteCallback(r,e,n)})
var l=this.abortTransactions_(t)
this.rerunTransactions_(l),this.eventQueue_.raiseEventsForChangedPath(l,[])},t.prototype.update=function(t,e,n){var r=this
this.log_("update",{path:t.toString(),value:e})
var i=!0,o=this.generateServerValues(),s={}
if(g.forEach(e,function(t,e){i=!1
var n=Ht(e)
s[t]=re(n,o)}),i)O("update() called with empty data.  Don't do anything."),this.callOnCompleteCallback(n,"ok")
else{var a=this.getNextWriteId_(),u=this.serverSyncTree_.applyUserMerge(t,s,a)
this.eventQueue_.queueEvents(u),this.server_.merge(t.toString(),e,function(e,i){var o="ok"===e
o||L("update at "+t+" failed: "+e)
var s=r.serverSyncTree_.ackUserWrite(a,!o),u=s.length>0?r.rerunTransactions_(t):t
r.eventQueue_.raiseEventsForChangedPath(u,s),r.callOnCompleteCallback(n,e,i)}),g.forEach(e,function(e){var n=r.abortTransactions_(t.child(e))
r.rerunTransactions_(n)}),this.eventQueue_.raiseEventsForChangedPath(t,[])}},t.prototype.runOnDisconnectEvents_=function(){var t=this
this.log_("onDisconnectEvents")
var e=this.generateServerValues(),n=function(t,e){var n=new ee
return t.forEachTree(new J(""),function(t,r){n.remember(t,re(r,e))}),n}(this.onDisconnect_,e),r=[]
n.forEachTree(J.Empty,function(e,n){r=r.concat(t.serverSyncTree_.applyServerOverwrite(e,n))
var i=t.abortTransactions_(e)
t.rerunTransactions_(i)}),this.onDisconnect_=new ee,this.eventQueue_.raiseEventsForChangedPath(J.Empty,r)},t.prototype.onDisconnectCancel=function(t,e){var n=this
this.server_.onDisconnectCancel(t.toString(),function(r,i){"ok"===r&&n.onDisconnect_.forget(t),n.callOnCompleteCallback(e,r,i)})},t.prototype.onDisconnectSet=function(t,e,n){var r=this,i=Ht(e)
this.server_.onDisconnectPut(t.toString(),i.val(!0),function(e,o){"ok"===e&&r.onDisconnect_.remember(t,i),r.callOnCompleteCallback(n,e,o)})},t.prototype.onDisconnectSetWithPriority=function(t,e,n,r){var i=this,o=Ht(e,n)
this.server_.onDisconnectPut(t.toString(),o.val(!0),function(e,n){"ok"===e&&i.onDisconnect_.remember(t,o),i.callOnCompleteCallback(r,e,n)})},t.prototype.onDisconnectUpdate=function(t,e,n){var r=this
if(g.isEmpty(e))return O("onDisconnect().update() called with empty data.  Don't do anything."),void this.callOnCompleteCallback(n,"ok")
this.server_.onDisconnectMerge(t.toString(),e,function(i,o){"ok"===i&&g.forEach(e,function(e,n){var i=Ht(n)
r.onDisconnect_.remember(t.child(e),i)}),r.callOnCompleteCallback(n,i,o)})},t.prototype.addEventCallbackForQuery=function(t,e){var n
n=".info"===t.path.getFront()?this.infoSyncTree_.addEventRegistration(t,e):this.serverSyncTree_.addEventRegistration(t,e),this.eventQueue_.raiseEventsAtPath(t.path,n)},t.prototype.removeEventCallbackForQuery=function(t,e){var n
n=".info"===t.path.getFront()?this.infoSyncTree_.removeEventRegistration(t,e):this.serverSyncTree_.removeEventRegistration(t,e),this.eventQueue_.raiseEventsAtPath(t.path,n)},t.prototype.interrupt=function(){this.persistentConnection_&&this.persistentConnection_.interrupt("repo_interrupt")},t.prototype.resume=function(){this.persistentConnection_&&this.persistentConnection_.resume("repo_interrupt")},t.prototype.stats=function(t){if(void 0===t&&(t=!1),"undefined"!=typeof console){var e
t?(this.statsListener_||(this.statsListener_=new ke(this.stats_)),e=this.statsListener_.get()):e=this.stats_.get()
var n=Object.keys(e).reduce(function(t,e){return Math.max(e.length,t)},0)
g.forEach(e,function(t,e){for(var r=t.length;r<n+2;r++)t+=" "
console.log(t+e)})}},t.prototype.statsIncrementCounter=function(t){this.stats_.incrementCounter(t),this.statsReporter_.includeStat(t)},t.prototype.log_=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n=""
this.persistentConnection_&&(n=this.persistentConnection_.id+":"),O.apply(void 0,[n].concat(t))},t.prototype.callOnCompleteCallback=function(t,e,n){t&&G(function(){if("ok"==e)t(null)
else{var r=(e||"error").toUpperCase(),i=r
n&&(i+=": "+n)
var o=new Error(i)
o.code=r,t(o)}})},Object.defineProperty(t.prototype,"database",{get:function(){return this.__database||(this.__database=new dn(this))},enumerable:!0,configurable:!0}),t}(),rn=function(){function t(e){this.indexedFilter_=new ye(e.getIndex()),this.index_=e.getIndex(),this.startPost_=t.getStartPost_(e),this.endPost_=t.getEndPost_(e)}return t.prototype.getStartPost=function(){return this.startPost_},t.prototype.getEndPost=function(){return this.endPost_},t.prototype.matches=function(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0},t.prototype.updateChild=function(t,e,n,r,i,o){return this.matches(new Et(e,n))||(n=Qt.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,i,o)},t.prototype.updateFullNode=function(t,e,n){e.isLeafNode()&&(e=Qt.EMPTY_NODE)
var r=e.withIndex(this.index_)
r=r.updatePriority(Qt.EMPTY_NODE)
var i=this
return e.forEachChild(Rt,function(t,e){i.matches(new Et(t,e))||(r=r.updateImmediateChild(t,Qt.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,r,n)},t.prototype.updatePriority=function(t,e){return t},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.indexedFilter_},t.prototype.getIndex=function(){return this.index_},t.getStartPost_=function(t){if(t.hasStart()){var e=t.getIndexStartName()
return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()},t.getEndPost_=function(t){if(t.hasEnd()){var e=t.getIndexEndName()
return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()},t}(),on=function(){function t(t){this.rangedFilter_=new rn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}return t.prototype.updateChild=function(t,e,n,r,i,o){return this.rangedFilter_.matches(new Et(e,n))||(n=Qt.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,i,o):this.fullLimitUpdateChild_(t,e,n,i,o)},t.prototype.updateFullNode=function(t,e,n){var r
if(e.isLeafNode()||e.isEmpty())r=Qt.EMPTY_NODE.withIndex(this.index_)
else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){r=Qt.EMPTY_NODE.withIndex(this.index_)
var i=void 0
i=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_)
for(var o=0;i.hasNext()&&o<this.limit_;){var s=i.getNext()
if(!(this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:this.index_.compare(s,this.rangedFilter_.getEndPost())<=0))break
r=r.updateImmediateChild(s.name,s.node),o++}}else{r=(r=e.withIndex(this.index_)).updatePriority(Qt.EMPTY_NODE)
var a=void 0,u=void 0,h=void 0
if(i=void 0,this.reverse_){i=r.getReverseIterator(this.index_),a=this.rangedFilter_.getEndPost(),u=this.rangedFilter_.getStartPost()
var l=this.index_.getCompare()
h=function(t,e){return l(e,t)}}else i=r.getIterator(this.index_),a=this.rangedFilter_.getStartPost(),u=this.rangedFilter_.getEndPost(),h=this.index_.getCompare()
o=0
for(var c=!1;i.hasNext();)s=i.getNext(),!c&&h(a,s)<=0&&(c=!0),c&&o<this.limit_&&h(s,u)<=0?o++:r=r.updateImmediateChild(s.name,Qt.EMPTY_NODE)}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)},t.prototype.updatePriority=function(t,e){return t},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},t.prototype.getIndex=function(){return this.index_},t.prototype.fullLimitUpdateChild_=function(t,e,n,r,i){var o
if(this.reverse_){var s=this.index_.getCompare()
o=function(t,e){return s(e,t)}}else o=this.index_.getCompare()
var a=t
g.assert(a.numChildren()==this.limit_,"")
var u=new Et(e,n),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(u)
if(a.hasChild(e)){for(var c=a.getImmediateChild(e),p=r.getChildAfterChild(this.index_,h,this.reverse_);null!=p&&(p.name==e||a.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_)
var d=null==p?1:o(p,u)
if(l&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(_e.childChangedChange(e,n,c)),a.updateImmediateChild(e,n)
null!=i&&i.trackChildChange(_e.childRemovedChange(e,c))
var f=a.updateImmediateChild(e,Qt.EMPTY_NODE)
return null!=p&&this.rangedFilter_.matches(p)?(null!=i&&i.trackChildChange(_e.childAddedChange(p.name,p.node)),f.updateImmediateChild(p.name,p.node)):f}return n.isEmpty()?t:l&&o(h,u)>=0?(null!=i&&(i.trackChildChange(_e.childRemovedChange(h.name,h.node)),i.trackChildChange(_e.childAddedChange(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(h.name,Qt.EMPTY_NODE)):t},t}(),sn=function(){function t(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Rt}return t.prototype.hasStart=function(){return this.startSet_},t.prototype.isViewFromLeft=function(){return""===this.viewFrom_?this.startSet_:this.viewFrom_===t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT},t.prototype.getIndexStartValue=function(){return g.assert(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},t.prototype.getIndexStartName=function(){return g.assert(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:W},t.prototype.hasEnd=function(){return this.endSet_},t.prototype.getIndexEndValue=function(){return g.assert(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},t.prototype.getIndexEndName=function(){return g.assert(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:q},t.prototype.hasLimit=function(){return this.limitSet_},t.prototype.hasAnchoredLimit=function(){return this.limitSet_&&""!==this.viewFrom_},t.prototype.getLimit=function(){return g.assert(this.limitSet_,"Only valid if limit has been set"),this.limit_},t.prototype.getIndex=function(){return this.index_},t.prototype.copy_=function(){var e=new t
return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e},t.prototype.limit=function(t){var e=this.copy_()
return e.limitSet_=!0,e.limit_=t,e.viewFrom_="",e},t.prototype.limitToFirst=function(e){var n=this.copy_()
return n.limitSet_=!0,n.limit_=e,n.viewFrom_=t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT,n},t.prototype.limitToLast=function(e){var n=this.copy_()
return n.limitSet_=!0,n.limit_=e,n.viewFrom_=t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT,n},t.prototype.startAt=function(t,e){var n=this.copy_()
return n.startSet_=!0,void 0===t&&(t=null),n.indexStartValue_=t,null!=e?(n.startNameSet_=!0,n.indexStartName_=e):(n.startNameSet_=!1,n.indexStartName_=""),n},t.prototype.endAt=function(t,e){var n=this.copy_()
return n.endSet_=!0,void 0===t&&(t=null),n.indexEndValue_=t,void 0!==e?(n.endNameSet_=!0,n.indexEndName_=e):(n.endNameSet_=!1,n.indexEndName_=""),n},t.prototype.orderBy=function(t){var e=this.copy_()
return e.index_=t,e},t.prototype.getQueryObject=function(){var e=t.WIRE_PROTOCOL_CONSTANTS_,n={}
if(this.startSet_&&(n[e.INDEX_START_VALUE]=this.indexStartValue_,this.startNameSet_&&(n[e.INDEX_START_NAME]=this.indexStartName_)),this.endSet_&&(n[e.INDEX_END_VALUE]=this.indexEndValue_,this.endNameSet_&&(n[e.INDEX_END_NAME]=this.indexEndName_)),this.limitSet_){n[e.LIMIT]=this.limit_
var r=this.viewFrom_
""===r&&(r=this.isViewFromLeft()?e.VIEW_FROM_LEFT:e.VIEW_FROM_RIGHT),n[e.VIEW_FROM]=r}return this.index_!==Rt&&(n[e.INDEX]=this.index_.toString()),n},t.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},t.prototype.isDefault=function(){return this.loadsAllData()&&this.index_==Rt},t.prototype.getNodeFilter=function(){return this.loadsAllData()?new ye(this.getIndex()):this.hasLimit()?new on(this):new rn(this)},t.prototype.toRestQueryStringParameters=function(){var e,n=t.REST_QUERY_CONSTANTS_,r={}
return this.isDefault()?r:(this.index_===Rt?e=n.PRIORITY_INDEX:this.index_===Kt?e=n.VALUE_INDEX:this.index_===St?e=n.KEY_INDEX:(g.assert(this.index_ instanceof Yt,"Unrecognized index type!"),e=this.index_.toString()),r[n.ORDER_BY]=g.stringify(e),this.startSet_&&(r[n.START_AT]=g.stringify(this.indexStartValue_),this.startNameSet_&&(r[n.START_AT]+=","+g.stringify(this.indexStartName_))),this.endSet_&&(r[n.END_AT]=g.stringify(this.indexEndValue_),this.endNameSet_&&(r[n.END_AT]+=","+g.stringify(this.indexEndName_))),this.limitSet_&&(this.isViewFromLeft()?r[n.LIMIT_TO_FIRST]=this.limit_:r[n.LIMIT_TO_LAST]=this.limit_),r)},t.WIRE_PROTOCOL_CONSTANTS_={INDEX_START_VALUE:"sp",INDEX_START_NAME:"sn",INDEX_END_VALUE:"ep",INDEX_END_NAME:"en",LIMIT:"l",VIEW_FROM:"vf",VIEW_FROM_LEFT:"l",VIEW_FROM_RIGHT:"r",INDEX:"i"},t.REST_QUERY_CONSTANTS_={ORDER_BY:"orderBy",PRIORITY_INDEX:"$priority",VALUE_INDEX:"$value",KEY_INDEX:"$key",START_AT:"startAt",END_AT:"endAt",LIMIT_TO_FIRST:"limitToFirst",LIMIT_TO_LAST:"limitToLast"},t.DEFAULT=new t,t}(),an=function(t){function e(e,n){if(!(e instanceof nn))throw new Error("new Reference() no longer supported - use app.database().")
return t.call(this,e,n,sn.DEFAULT,!1)||this}return v.__extends(e,t),e.prototype.getKey=function(){return g.validateArgCount("Reference.key",0,0,arguments.length),this.path.isEmpty()?null:this.path.getBack()},e.prototype.child=function(t){return g.validateArgCount("Reference.child",1,1,arguments.length),"number"==typeof t?t=String(t):t instanceof J||(null===this.path.getFront()?((n=t)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_t("Reference.child",1,n,!1)):_t("Reference.child",1,t,!1)),new e(this.repo,this.path.child(t))
var n},e.prototype.getParent=function(){g.validateArgCount("Reference.parent",0,0,arguments.length)
var t=this.path.parent()
return null===t?null:new e(this.repo,t)},e.prototype.getRoot=function(){g.validateArgCount("Reference.root",0,0,arguments.length)
for(var t=this;null!==t.getParent();)t=t.getParent()
return t},e.prototype.databaseProp=function(){return this.repo.database},e.prototype.set=function(t,e){g.validateArgCount("Reference.set",1,2,arguments.length),yt("Reference.set",this.path),ht("Reference.set",1,t,this.path,!1),g.validateCallback("Reference.set",2,e,!0)
var n=new g.Deferred
return this.repo.setWithPriority(this.path,t,null,n.wrapCallback(e)),n.promise},e.prototype.update=function(t,e){if(g.validateArgCount("Reference.update",1,2,arguments.length),yt("Reference.update",this.path),Array.isArray(t)){for(var n={},r=0;r<t.length;++r)n[""+r]=t[r]
t=n,L("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ct("Reference.update",1,t,this.path,!1),g.validateCallback("Reference.update",2,e,!0)
var i=new g.Deferred
return this.repo.update(this.path,t,i.wrapCallback(e)),i.promise},e.prototype.setWithPriority=function(t,e,n){if(g.validateArgCount("Reference.setWithPriority",2,3,arguments.length),yt("Reference.setWithPriority",this.path),ht("Reference.setWithPriority",1,t,this.path,!1),pt("Reference.setWithPriority",2,e,!1),g.validateCallback("Reference.setWithPriority",3,n,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.setWithPriority failed: "+this.getKey()+" is a read-only object."
var r=new g.Deferred
return this.repo.setWithPriority(this.path,t,e,r.wrapCallback(n)),r.promise},e.prototype.remove=function(t){return g.validateArgCount("Reference.remove",0,1,arguments.length),yt("Reference.remove",this.path),g.validateCallback("Reference.remove",1,t,!0),this.set(null,t)},e.prototype.transaction=function(t,e,n){if(g.validateArgCount("Reference.transaction",1,3,arguments.length),yt("Reference.transaction",this.path),g.validateCallback("Reference.transaction",1,t,!1),g.validateCallback("Reference.transaction",2,e,!0),function(t,e,n,r){if(void 0!==n&&"boolean"!=typeof n)throw new Error(g.errorPrefix("Reference.transaction",3,!0)+"must be a boolean.")}(0,0,n),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.transaction failed: "+this.getKey()+" is a read-only object."
void 0===n&&(n=!0)
var r=new g.Deferred
return"function"==typeof e&&r.promise.catch(function(){}),this.repo.startTransaction(this.path,t,function(t,n,i){t?r.reject(t):r.resolve(new mt(n,i)),"function"==typeof e&&e(t,n,i)},n),r.promise},e.prototype.setPriority=function(t,e){g.validateArgCount("Reference.setPriority",1,2,arguments.length),yt("Reference.setPriority",this.path),pt("Reference.setPriority",1,t,!1),g.validateCallback("Reference.setPriority",2,e,!0)
var n=new g.Deferred
return this.repo.setWithPriority(this.path.child(".priority"),t,null,n.wrapCallback(e)),n.promise},e.prototype.push=function(t,e){g.validateArgCount("Reference.push",0,2,arguments.length),yt("Reference.push",this.path),ht("Reference.push",1,t,this.path,!0),g.validateCallback("Reference.push",2,e,!0)
var n,r=this.repo.serverTime(),i=Ct(r),o=this.child(i),s=this.child(i)
return n=null!=t?o.set(t,e).then(function(){return s}):Promise.resolve(s),o.then=n.then.bind(n),o.catch=n.then.bind(n,void 0),"function"==typeof e&&n.catch(function(){}),o},e.prototype.onDisconnect=function(){return yt("Reference.onDisconnect",this.path),new gt(this.repo,this.path)},Object.defineProperty(e.prototype,"database",{get:function(){return this.databaseProp()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this.getKey()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this.getParent()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this.getRoot()},enumerable:!0,configurable:!0}),e}(Zt)
Zt.__referenceConstructor=an,Se.__referenceConstructor=an
var un,hn=function(){this.children={},this.childCount=0,this.value=null},ln=function(){function t(t,e,n){void 0===t&&(t=""),void 0===e&&(e=null),void 0===n&&(n=new hn),this.name_=t,this.parent_=e,this.node_=n}return t.prototype.subTree=function(e){for(var n,r=e instanceof J?e:new J(e),i=this;null!==(n=r.getFront());)i=new t(n,i,g.safeGet(i.node_.children,n)||new hn),r=r.popFront()
return i},t.prototype.getValue=function(){return this.node_.value},t.prototype.setValue=function(t){g.assert(void 0!==t,"Cannot set value to undefined"),this.node_.value=t,this.updateParents_()},t.prototype.clear=function(){this.node_.value=null,this.node_.children={},this.node_.childCount=0,this.updateParents_()},t.prototype.hasChildren=function(){return this.node_.childCount>0},t.prototype.isEmpty=function(){return null===this.getValue()&&!this.hasChildren()},t.prototype.forEachChild=function(e){var n=this
g.forEach(this.node_.children,function(r,i){e(new t(r,n,i))})},t.prototype.forEachDescendant=function(t,e,n){e&&!n&&t(this),this.forEachChild(function(e){e.forEachDescendant(t,!0,n)}),e&&n&&t(this)},t.prototype.forEachAncestor=function(t,e){for(var n=e?this:this.parent();null!==n;){if(t(n))return!0
n=n.parent()}return!1},t.prototype.forEachImmediateDescendantWithValue=function(t){this.forEachChild(function(e){null!==e.getValue()?t(e):e.forEachImmediateDescendantWithValue(t)})},t.prototype.path=function(){return new J(null===this.parent_?this.name_:this.parent_.path()+"/"+this.name_)},t.prototype.name=function(){return this.name_},t.prototype.parent=function(){return this.parent_},t.prototype.updateParents_=function(){null!==this.parent_&&this.parent_.updateChild_(this.name_,this)},t.prototype.updateChild_=function(t,e){var n=e.isEmpty(),r=g.contains(this.node_.children,t)
n&&r?(delete this.node_.children[t],this.node_.childCount--,this.updateParents_()):n||r||(this.node_.children[t]=e.node_,this.node_.childCount++,this.updateParents_())},t}()
!function(t){t[t.RUN=0]="RUN",t[t.SENT=1]="SENT",t[t.COMPLETED=2]="COMPLETED",t[t.SENT_NEEDS_ABORT=3]="SENT_NEEDS_ABORT",t[t.NEEDS_ABORT=4]="NEEDS_ABORT"}(un||(un={})),nn.MAX_TRANSACTION_RETRIES_=25,nn.prototype.transactions_init_=function(){this.transactionQueueTree_=new ln},nn.prototype.startTransaction=function(t,e,n,i){this.log_("transaction on "+t)
var o=function(){},s=new an(this,t)
s.on("value",o)
var a={path:t,update:e,onComplete:n,status:null,order:I(),applyLocally:i,retryCount:0,unwatcher:function(){s.off("value",o)},abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},u=this.getLatestState_(t)
a.currentInputSnapshot=u
var h=a.update(u.val())
if(void 0===h){if(a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete){var l=new zt(a.currentInputSnapshot,new an(this,a.path),Rt)
a.onComplete(null,!1,l)}}else{lt("transaction failed: Data returned ",h,a.path),a.status=un.RUN
var c=this.transactionQueueTree_.subTree(t),p=c.getValue()||[]
p.push(a),c.setValue(p)
var d=void 0
"object"===r(h)&&null!==h&&g.contains(h,".priority")?(d=g.safeGet(h,".priority"),g.assert(ut(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(this.serverSyncTree_.calcCompleteEventCache(t)||Qt.EMPTY_NODE).getPriority().val(),d=d
var f=this.generateServerValues(),_=Ht(h,d),y=re(_,f)
a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=y,a.currentWriteId=this.getNextWriteId_()
var v=this.serverSyncTree_.applyUserOverwrite(t,y,a.currentWriteId,a.applyLocally)
this.eventQueue_.raiseEventsForChangedPath(t,v),this.sendReadyTransactions_()}},nn.prototype.getLatestState_=function(t,e){return this.serverSyncTree_.calcCompleteEventCache(t,e)||Qt.EMPTY_NODE},nn.prototype.sendReadyTransactions_=function(t){var e=this
if(void 0===t&&(t=this.transactionQueueTree_),t||this.pruneCompletedTransactionsBelowNode_(t),null!==t.getValue()){var n=this.buildTransactionQueue_(t)
g.assert(n.length>0,"Sending zero length transaction queue"),n.every(function(t){return t.status===un.RUN})&&this.sendTransactionQueue_(t.path(),n)}else t.hasChildren()&&t.forEachChild(function(t){e.sendReadyTransactions_(t)})},nn.prototype.sendTransactionQueue_=function(t,e){for(var n=this,r=e.map(function(t){return t.currentWriteId}),i=this.getLatestState_(t,r),o=i,s=i.hash(),a=0;a<e.length;a++){var u=e[a]
g.assert(u.status===un.RUN,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=un.SENT,u.retryCount++
var h=J.relativePath(t,u.path)
o=o.updateChild(h,u.currentOutputSnapshotRaw)}var l=o.val(!0),c=t
this.server_.put(c.toString(),l,function(r){n.log_("transaction put response",{path:c.toString(),status:r})
var i=[]
if("ok"===r){for(var o=[],s=0;s<e.length;s++){if(e[s].status=un.COMPLETED,i=i.concat(n.serverSyncTree_.ackUserWrite(e[s].currentWriteId)),e[s].onComplete){var a=e[s].currentOutputSnapshotResolved,u=new an(n,e[s].path),h=new zt(a,u,Rt)
o.push(e[s].onComplete.bind(null,null,!0,h))}e[s].unwatcher()}for(n.pruneCompletedTransactionsBelowNode_(n.transactionQueueTree_.subTree(t)),n.sendReadyTransactions_(),n.eventQueue_.raiseEventsForChangedPath(t,i),s=0;s<o.length;s++)G(o[s])}else{if("datastale"===r)for(s=0;s<e.length;s++)e[s].status===un.SENT_NEEDS_ABORT?e[s].status=un.NEEDS_ABORT:e[s].status=un.RUN
else for(L("transaction at "+c.toString()+" failed: "+r),s=0;s<e.length;s++)e[s].status=un.NEEDS_ABORT,e[s].abortReason=r
n.rerunTransactions_(t)}},s)},nn.prototype.rerunTransactions_=function(t){var e=this.getAncestorTransactionNode_(t),n=e.path(),r=this.buildTransactionQueue_(e)
return this.rerunTransactionQueue_(r,n),n},nn.prototype.rerunTransactionQueue_=function(t,e){if(0!==t.length){for(var n,i=[],o=[],s=t.filter(function(t){return t.status===un.RUN}).map(function(t){return t.currentWriteId}),a=0;a<t.length;a++){var u=t[a],h=J.relativePath(e,u.path),l=!1,c=void 0
if(g.assert(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===un.NEEDS_ABORT)l=!0,c=u.abortReason,o=o.concat(this.serverSyncTree_.ackUserWrite(u.currentWriteId,!0))
else if(u.status===un.RUN)if(u.retryCount>=nn.MAX_TRANSACTION_RETRIES_)l=!0,c="maxretry",o=o.concat(this.serverSyncTree_.ackUserWrite(u.currentWriteId,!0))
else{var p=this.getLatestState_(u.path,s)
u.currentInputSnapshot=p
var d=t[a].update(p.val())
if(void 0!==d){lt("transaction failed: Data returned ",d,u.path)
var f=Ht(d)
"object"===r(d)&&null!=d&&g.contains(d,".priority")||(f=f.updatePriority(p.getPriority()))
var _=u.currentWriteId,y=this.generateServerValues(),v=re(f,y)
u.currentOutputSnapshotRaw=f,u.currentOutputSnapshotResolved=v,u.currentWriteId=this.getNextWriteId_(),s.splice(s.indexOf(_),1),o=(o=o.concat(this.serverSyncTree_.applyUserOverwrite(u.path,v,u.currentWriteId,u.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(_,!0))}else l=!0,c="nodata",o=o.concat(this.serverSyncTree_.ackUserWrite(u.currentWriteId,!0))}if(this.eventQueue_.raiseEventsForChangedPath(e,o),o=[],l&&(t[a].status=un.COMPLETED,n=t[a].unwatcher,setTimeout(n,Math.floor(0)),t[a].onComplete))if("nodata"===c){var m=new an(this,t[a].path),C=t[a].currentInputSnapshot,E=new zt(C,m,Rt)
i.push(t[a].onComplete.bind(null,null,!1,E))}else i.push(t[a].onComplete.bind(null,new Error(c),!1,null))}for(this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_),a=0;a<i.length;a++)G(i[a])
this.sendReadyTransactions_()}},nn.prototype.getAncestorTransactionNode_=function(t){for(var e,n=this.transactionQueueTree_;null!==(e=t.getFront())&&null===n.getValue();)n=n.subTree(e),t=t.popFront()
return n},nn.prototype.buildTransactionQueue_=function(t){var e=[]
return this.aggregateTransactionQueuesForNode_(t,e),e.sort(function(t,e){return t.order-e.order}),e},nn.prototype.aggregateTransactionQueuesForNode_=function(t,e){var n=this,r=t.getValue()
if(null!==r)for(var i=0;i<r.length;i++)e.push(r[i])
t.forEachChild(function(t){n.aggregateTransactionQueuesForNode_(t,e)})},nn.prototype.pruneCompletedTransactionsBelowNode_=function(t){var e=this,n=t.getValue()
if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==un.COMPLETED&&(n[r]=n[i],r++)
n.length=r,t.setValue(n.length>0?n:null)}t.forEachChild(function(t){e.pruneCompletedTransactionsBelowNode_(t)})},nn.prototype.abortTransactions_=function(t){var e=this,n=this.getAncestorTransactionNode_(t).path(),r=this.transactionQueueTree_.subTree(t)
return r.forEachAncestor(function(t){e.abortTransactionsOnNode_(t)}),this.abortTransactionsOnNode_(r),r.forEachDescendant(function(t){e.abortTransactionsOnNode_(t)}),n},nn.prototype.abortTransactionsOnNode_=function(t){var e=t.getValue()
if(null!==e){for(var n=[],r=[],i=-1,o=0;o<e.length;o++)e[o].status===un.SENT_NEEDS_ABORT||(e[o].status===un.SENT?(g.assert(i===o-1,"All SENT items should be at beginning of queue."),i=o,e[o].status=un.SENT_NEEDS_ABORT,e[o].abortReason="set"):(g.assert(e[o].status===un.RUN,"Unexpected transaction status in abort"),e[o].unwatcher(),r=r.concat(this.serverSyncTree_.ackUserWrite(e[o].currentWriteId,!0)),e[o].onComplete&&n.push(e[o].onComplete.bind(null,new Error("set"),!1,null))))
for(-1===i?t.setValue(null):e.length=i+1,this.eventQueue_.raiseEventsForChangedPath(t.path(),r),o=0;o<n.length;o++)G(n[o])}}
var cn,pn=function(){function t(){this.repos_={},this.useRestClient_=!1}return t.getInstance=function(){return cn||(cn=new t),cn},t.prototype.interrupt=function(){for(var t in this.repos_)for(var e in this.repos_[t])this.repos_[t][e].interrupt()},t.prototype.resume=function(){for(var t in this.repos_)for(var e in this.repos_[t])this.repos_[t][e].resume()},t.prototype.databaseFromApp=function(t,e){var n=e||t.options.databaseURL
void 0===n&&A("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp().")
var r=nt(n),i=r.repoInfo
return vt("Invalid Firebase Database URL",1,r),r.path.isEmpty()||A("Database URL must point to the root of a Firebase Database (not including a child path)."),this.createRepo(i,t).database},t.prototype.deleteRepo=function(t){var e=g.safeGet(this.repos_,t.app.name)
e&&g.safeGet(e,t.repoInfo_.toURLString())===t||A("Database "+t.app.name+"("+t.repoInfo_+") has already been deleted."),t.interrupt(),delete e[t.repoInfo_.toURLString()]},t.prototype.createRepo=function(t,e){var n=g.safeGet(this.repos_,e.name)
n||(n={},this.repos_[e.name]=n)
var r=g.safeGet(n,t.toURLString())
return r&&A("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new nn(t,this.useRestClient_,e),n[t.toURLString()]=r,r},t.prototype.forceRestClient=function(t){this.useRestClient_=t},t}(),dn=function(){function t(t){this.repo_=t,t instanceof nn||A("Don't call new Database() directly - please use firebase.database()."),this.root_=new an(t,J.Empty),this.INTERNAL=new fn(this)}return Object.defineProperty(t.prototype,"app",{get:function(){return this.repo_.app},enumerable:!0,configurable:!0}),t.prototype.ref=function(t){return this.checkDeleted_("ref"),g.validateArgCount("database.ref",0,1,arguments.length),t instanceof an?this.refFromURL(t.toString()):void 0!==t?this.root_.child(t):this.root_},t.prototype.refFromURL=function(t){var e="database.refFromURL"
this.checkDeleted_(e),g.validateArgCount(e,1,1,arguments.length)
var n=nt(t)
vt(e,1,n)
var r=n.repoInfo
return r.host!==this.repo_.repoInfo_.host&&A(e+": Host name does not match the current database: (found "+r.host+" but expected "+this.repo_.repoInfo_.host+")"),this.ref(n.path.toString())},t.prototype.checkDeleted_=function(t){null===this.repo_&&A("Cannot call "+t+" on a deleted database.")},t.prototype.goOffline=function(){g.validateArgCount("database.goOffline",0,0,arguments.length),this.checkDeleted_("goOffline"),this.repo_.interrupt()},t.prototype.goOnline=function(){g.validateArgCount("database.goOnline",0,0,arguments.length),this.checkDeleted_("goOnline"),this.repo_.resume()},t.ServerValue={TIMESTAMP:{".sv":"timestamp"}},t}(),fn=function(){function t(t){this.database=t}return t.prototype.delete=function(){return v.__awaiter(this,void 0,void 0,function(){return v.__generator(this,function(t){return this.database.checkDeleted_("delete"),pn.getInstance().deleteRepo(this.database.repo_),this.database.repo_=null,this.database.root_=null,this.database.INTERNAL=null,this.database=null,[2]})})},t}(),_n=Object.freeze({forceLongPolling:function(){ze.forceDisallow(),Be.forceAllow()},forceWebSockets:function(){Be.forceDisallow()},isWebSocketsAvailable:function(){return ze.isAvailable()},setSecurityDebugCallback:function(t,e){t.repo.persistentConnection_.securityDebugCallback_=e},stats:function(t,e){t.repo.stats(e)},statsIncrementCounter:function(t,e){t.repo.statsIncrementCounter(e)},dataUpdateCount:function(t){return t.repo.dataUpdateCount},interceptServerData:function(t,e){return t.repo.interceptServerData_(e)}}),yn=tn
tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)}
var vn=Xe,gn=et,mn=Object.freeze({DataConnection:yn,RealTimeConnection:vn,hijackHash:function(t){var e=tn.prototype.put
return tn.prototype.put=function(n,r,i,o){void 0!==o&&(o=t()),e.call(this,n,r,i,o)},function(){tn.prototype.put=e}},ConnectionTarget:gn,queryIdentifier:function(t){return t.queryIdentifier()},listens:function(t){return t.repo.persistentConnection_.listens_},forceRestClient:function(t){pn.getInstance().forceRestClient(t)}}),Cn=dn.ServerValue
function En(e){var n=e.INTERNAL.registerService("database",function(t,e,n){return pn.getInstance().databaseFromApp(t,n)},{Reference:an,Query:Zt,Database:dn,DataSnapshot:zt,enableLogging:x,INTERNAL:_n,ServerValue:Cn,TEST_ACCESS:mn},null,!0)
g.isNodeSdk()&&(t.exports=n)}En(y),e.DataSnapshot=zt,e.Database=dn,e.OnDisconnect=gt,e.Query=Zt,e.Reference=an,e.ServerValue=Cn,e.enableLogging=x,e.registerDatabase=En},197:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"__extends",function(){return o}),n.d(e,"__assign",function(){return s}),n.d(e,"__rest",function(){return a}),n.d(e,"__decorate",function(){return u}),n.d(e,"__param",function(){return h}),n.d(e,"__metadata",function(){return l}),n.d(e,"__awaiter",function(){return c}),n.d(e,"__generator",function(){return p}),n.d(e,"__exportStar",function(){return d}),n.d(e,"__values",function(){return f}),n.d(e,"__read",function(){return _}),n.d(e,"__spread",function(){return y}),n.d(e,"__await",function(){return v}),n.d(e,"__asyncGenerator",function(){return g}),n.d(e,"__asyncDelegator",function(){return m}),n.d(e,"__asyncValues",function(){return C}),n.d(e,"__makeTemplateObject",function(){return E}),n.d(e,"__importStar",function(){return w}),n.d(e,"__importDefault",function(){return b})
var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}
function o(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t}).apply(this,arguments)}
function a(t,e){var n={}
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r])
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n}function u(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i
if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i)
else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a)
return s>3&&a&&Object.defineProperty(e,n,a),a}function h(t,e){return function(n,r){e(n,r,t)}}function l(t,e){if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function c(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})}function p(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function d(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function f(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0
return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function _(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,i,o=n.call(t),s=[]
try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function y(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(_(arguments[e]))
return t}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(t,e||[]),o=[]
return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r
function s(t){i[t]&&(r[t]=function(e){return new Promise(function(n,r){o.push([t,e,n,r])>1||a(t,e)})})}function a(t,e){try{(n=i[t](e)).value instanceof v?Promise.resolve(n.value.v).then(u,h):l(o[0][2],n)}catch(t){l(o[0][3],t)}var n}function u(t){a("next",t)}function h(t){a("throw",t)}function l(t,e){t(e),o.shift(),o.length&&a(o[0][0],o[0][1])}}function m(t){var e,n
return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e
function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:v(t[r](e)),done:"return"===r}:i?i(e):e}:i}}function C(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var e,n=t[Symbol.asyncIterator]
return n?n.call(t):(t=f(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e)
function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,i){(function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)})(r,i,(e=t[n](e)).done,e.value)})}}}function E(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function w(t){if(t&&t.__esModule)return t
var e={}
if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e.default=t,e}function b(t){return t&&t.__esModule?t:{default:t}}}}])
