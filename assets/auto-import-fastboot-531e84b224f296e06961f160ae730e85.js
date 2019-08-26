(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[6],{187:function(t,e,n){"use strict"
n.r(e),n(195)},195:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,a=n(0),s={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},u=function(t){function e(n,r,i){var o=t.call(this,r)||this
return Object.setPrototypeOf(o,e.prototype),o.code=n,o.details=i,o}return a.__extends(e,t),e}(Error),c=function(){function t(t){this.app=t}return t.prototype.getAuthToken=function(){return a.__awaiter(this,void 0,void 0,function(){var t
return a.__generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.app.INTERNAL.getToken()]
case 1:return(t=e.sent())?[2,t.accessToken]:[2,void 0]
case 2:return e.sent(),[2,void 0]
case 3:return[2]}})})},t.prototype.getInstanceIdToken=function(){return a.__awaiter(this,void 0,void 0,function(){var t
return a.__generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),this.app.messaging?[4,this.app.messaging().getToken()]:[2,void 0]
case 1:return(t=e.sent())?[2,t]:[2,void 0]
case 2:return e.sent(),[2,void 0]
case 3:return[2]}})})},t.prototype.getContext=function(){return a.__awaiter(this,void 0,void 0,function(){var t,e
return a.__generator(this,function(n){switch(n.label){case 0:return[4,this.getAuthToken()]
case 1:return t=n.sent(),[4,this.getInstanceIdToken()]
case 2:return e=n.sent(),[2,{authToken:t,instanceIdToken:e}]}})})},t}()
function h(t,e){var n={}
for(var r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]))
return n}var l=function(){function t(){}return t.prototype.encode=function(t){var e=this
if(null==t)return null
if(t instanceof Number&&(t=t.valueOf()),"number"==typeof t&&isFinite(t))return t
if(!0===t||!1===t)return t
if("[object String]"===Object.prototype.toString.call(t))return t
if(Array.isArray(t))return t.map(function(t){return e.encode(t)})
if("function"==typeof t||"object"===r(t))return h(t,function(t){return e.encode(t)})
throw new Error("Data cannot be encoded in JSON: "+t)},t.prototype.decode=function(t){var e=this
if(null==t)return t
if(t["@type"])switch(t["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":var n=Number(t.value)
if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+t)
return n
default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(function(t){return e.decode(t)}):"function"==typeof t||"object"===r(t)?h(t,function(t){return e.decode(t)}):t},t}(),f=function(){function t(t,e){var n=this
void 0===e&&(e="us-central1"),this.app_=t,this.region_=e,this.serializer=new l,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return n.deleteService()}},this.contextProvider=new c(t),this.cancelAllRequests=new Promise(function(t){n.deleteService=function(){return t()}})}return Object.defineProperty(t.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),t.prototype._url=function(t){var e=this.app_.options.projectId,n=this.region_
return null!==this.emulatorOrigin?this.emulatorOrigin+"/"+e+"/"+n+"/"+t:"https://"+n+"-"+e+".cloudfunctions.net/"+t},t.prototype.useFunctionsEmulator=function(t){this.emulatorOrigin=t},t.prototype.httpsCallable=function(t,e){var n=this
return function(r){return n.call(t,r,e||{})}},t.prototype.postJSON=function(t,e,n){return a.__awaiter(this,void 0,void 0,function(){var r,i
return a.__generator(this,function(o){switch(o.label){case 0:n.append("Content-Type","application/json"),o.label=1
case 1:return o.trys.push([1,3,,4]),[4,fetch(t,{method:"POST",body:JSON.stringify(e),headers:n})]
case 2:return r=o.sent(),[3,4]
case 3:return o.sent(),[2,{status:0,json:null}]
case 4:i=null,o.label=5
case 5:return o.trys.push([5,7,,8]),[4,r.json()]
case 6:return i=o.sent(),[3,8]
case 7:return o.sent(),[3,8]
case 8:return[2,{status:r.status,json:i}]}})})},t.prototype.call=function(t,e,n){return a.__awaiter(this,void 0,void 0,function(){var r,i,o,c,h,l,f,p
return a.__generator(this,function(a){switch(a.label){case 0:return r=this._url(t),e=this.serializer.encode(e),i={data:e},o=new Headers,[4,this.contextProvider.getContext()]
case 1:return(c=a.sent()).authToken&&o.append("Authorization","Bearer "+c.authToken),c.instanceIdToken&&o.append("Firebase-Instance-ID-Token",c.instanceIdToken),h=n.timeout||7e4,[4,Promise.race([this.postJSON(r,i,o),(d=h,new Promise(function(t,e){setTimeout(function(){e(new u("deadline-exceeded","deadline-exceeded"))},d)})),this.cancelAllRequests])]
case 2:if(!(l=a.sent()))throw new u("cancelled","Firebase Functions instance was deleted.")
if(f=function(t,e,n){var r=function(t){if(t>=200&&t<300)return"ok"
switch(t){case 0:return"internal"
case 400:return"invalid-argument"
case 401:return"unauthenticated"
case 403:return"permission-denied"
case 404:return"not-found"
case 409:return"aborted"
case 429:return"resource-exhausted"
case 499:return"cancelled"
case 500:return"internal"
case 501:return"unimplemented"
case 503:return"unavailable"
case 504:return"deadline-exceeded"}return"unknown"}(t),i=r,o=void 0
try{var a=e&&e.error
if(a){var c=a.status
if("string"==typeof c){if(!s[c])return new u("internal","internal")
r=s[c],i=c}var h=a.message
"string"==typeof h&&(i=h),void 0!==(o=a.details)&&(o=n.decode(o))}}catch(t){}return"ok"===r?null:new u(r,i,o)}(l.status,l.json,this.serializer))throw f
if(!l.json)throw new u("internal","Response is not valid JSON object.")
if(void 0===(p=l.json.data)&&(p=l.json.result),void 0===p)throw new u("internal","Response is missing data field.")
return[2,{data:this.serializer.decode(p)}]}var d})})},t}(),p="functions"
function d(t,e,n){return new f(t,n)}function y(t){var e={Functions:f}
t.INTERNAL.registerService(p,d,e,void 0,!0)}y(o),e.registerFunctions=y}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[5],{185:function(t,e,n){"use strict"
n.r(e),n(192)},192:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o,a=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,s=n(0),u=n(64),c=n(65),h=function(){function t(t){this.domStorage_=t,this.prefix_="firebase:"}return t.prototype.set=function(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),u.stringify(e))},t.prototype.get=function(t){var e=this.domStorage_.getItem(this.prefixedName_(t))
return null==e?null:u.jsonEval(e)},t.prototype.remove=function(t){this.domStorage_.removeItem(this.prefixedName_(t))},t.prototype.prefixedName_=function(t){return this.prefix_+t},t.prototype.toString=function(){return this.domStorage_.toString()},t}(),l=function(){function t(){this.cache_={},this.isInMemoryStorage=!0}return t.prototype.set=function(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e},t.prototype.get=function(t){return u.contains(this.cache_,t)?this.cache_[t]:null},t.prototype.remove=function(t){delete this.cache_[t]},t}(),f=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){var e=window[t]
return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(t){}return new l},p=f("localStorage"),d=f("sessionStorage"),y=new c.Logger("@firebase/database"),m="FIREBASE_DATABASE_EMULATOR_HOST",g=(o=1,function(){return o++}),v=function(t){var e=u.stringToByteArray(t),n=new u.Sha1
n.update(e)
var r=n.digest()
return u.base64.encodeByteArray(r)},_=function t(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
for(var i="",o=0;o<e.length;o++)Array.isArray(e[o])||e[o]&&"object"===r(e[o])&&"number"==typeof e[o].length?i+=t.apply(null,e[o]):"object"===r(e[o])?i+=u.stringify(e[o]):i+=e[o],i+=" "
return i},b=null,w=!0,E=function(t,e){u.assert(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(y.logLevel=c.LogLevel.VERBOSE,b=y.log.bind(y),e&&d.set("logging_enabled",!0)):"function"==typeof t?b=t:(b=null,d.remove("logging_enabled"))},T=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
if(!0===w&&(w=!1,null===b&&!0===d.get("logging_enabled")&&E(!0)),b){var n=_.apply(null,t)
b(n)}},S=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
T.apply(void 0,s.__spread([t],e))}},I=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="FIREBASE INTERNAL ERROR: "+_.apply(void 0,s.__spread(t))
y.error(n)},C=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="FIREBASE FATAL ERROR: "+_.apply(void 0,s.__spread(t))
throw y.error(n),new Error(n)},N=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="FIREBASE WARNING: "+_.apply(void 0,s.__spread(t))
y.warn(n)},k=function(t){return"number"==typeof t&&(t!=t||t==Number.POSITIVE_INFINITY||t==Number.NEGATIVE_INFINITY)},A="[MIN_NAME]",D="[MAX_NAME]",R=function(t,e){if(t===e)return 0
if(t===A||e===D)return-1
if(e===A||t===D)return 1
var n=Y(t),r=Y(e)
return null!==n?null!==r?n-r==0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1},O=function(t,e){return t===e?0:t<e?-1:1},P=function(t,e){if(e&&t in e)return e[t]
throw new Error("Missing required key ("+t+") in object: "+u.stringify(e))},x=function t(e){if("object"!==r(e)||null===e)return u.stringify(e)
var n=[]
for(var i in e)n.push(i)
n.sort()
for(var o="{",a=0;a<n.length;a++)0!==a&&(o+=","),o+=u.stringify(n[a]),o+=":",o+=t(e[n[a]])
return o+"}"},M=function(t,e){var n=t.length
if(n<=e)return[t]
for(var r=[],i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e))
return r}
function L(t,e){for(var n in t)t.hasOwnProperty(n)&&e(n,t[n])}var F,U,q,V,B,j,W,Q,K,H,G=function(t){var e,n,r,i,o,a,s
for(u.assert(!k(t),"Invalid JSON number"),0===t?(n=0,r=0,e=1/t==-1/0?1:0):(e=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(t)/Math.LN2),1023))+1023,r=Math.round(t*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(t/Math.pow(2,-1074)))),a=[],o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2)
for(o=11;o;o-=1)a.push(n%2?1:0),n=Math.floor(n/2)
a.push(e?1:0),a.reverse(),s=a.join("")
var c=""
for(o=0;o<64;o+=8){var h=parseInt(s.substr(o,8),2).toString(16)
1===h.length&&(h="0"+h),c+=h}return c.toLowerCase()},z=new RegExp("^-?\\d{1,10}$"),Y=function(t){if(z.test(t)){var e=Number(t)
if(e>=-2147483648&&e<=2147483647)return e}return null},X=function(t){try{t()}catch(t){setTimeout(function(){var e=t.stack||""
throw N("Exception was thrown by user callback.",e),t},Math.floor(0))}},J=function(){return("object"===("undefined"==typeof window?"undefined":r(window))&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$=function(t,e){var n=setTimeout(t,e)
return"object"===r(n)&&n.unref&&n.unref(),n},Z=function(){function t(t,e){if(void 0===e){this.pieces_=t.split("/")
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
throw new Error("INTERNAL ERROR: innerPath ("+n+") is not within outerPath ("+e+")")},t.comparePaths=function(t,e){for(var n=t.slice(),r=e.slice(),i=0;i<n.length&&i<r.length;i++){var o=R(n[i],r[i])
if(0!==o)return o}return n.length===r.length?0:n.length<r.length?-1:1},t.prototype.equals=function(t){if(this.getLength()!==t.getLength())return!1
for(var e=this.pieceNum_,n=t.pieceNum_;e<=this.pieces_.length;e++,n++)if(this.pieces_[e]!==t.pieces_[n])return!1
return!0},t.prototype.contains=function(t){var e=this.pieceNum_,n=t.pieceNum_
if(this.getLength()>t.getLength())return!1
for(;e<this.pieces_.length;){if(this.pieces_[e]!==t.pieces_[n])return!1;++e,++n}return!0},t}(),tt=function(){function t(t,e){this.errorPrefix_=e,this.parts_=t.slice(),this.byteLength_=Math.max(1,this.parts_.length)
for(var n=0;n<this.parts_.length;n++)this.byteLength_+=u.stringLength(this.parts_[n])
this.checkValid_()}return Object.defineProperty(t,"MAX_PATH_DEPTH",{get:function(){return 32},enumerable:!0,configurable:!0}),Object.defineProperty(t,"MAX_PATH_LENGTH_BYTES",{get:function(){return 768},enumerable:!0,configurable:!0}),t.prototype.push=function(t){this.parts_.length>0&&(this.byteLength_+=1),this.parts_.push(t),this.byteLength_+=u.stringLength(t),this.checkValid_()},t.prototype.pop=function(){var t=this.parts_.pop()
this.byteLength_-=u.stringLength(t),this.parts_.length>0&&(this.byteLength_-=1)},t.prototype.checkValid_=function(){if(this.byteLength_>t.MAX_PATH_LENGTH_BYTES)throw new Error(this.errorPrefix_+"has a key path longer than "+t.MAX_PATH_LENGTH_BYTES+" bytes ("+this.byteLength_+").")
if(this.parts_.length>t.MAX_PATH_DEPTH)throw new Error(this.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+t.MAX_PATH_DEPTH+") or object contains a cycle "+this.toErrorString())},t.prototype.toErrorString=function(){return 0==this.parts_.length?"":"in property '"+this.parts_.join(".")+"'"},t}(),et="long_polling",nt=function(){function t(t,e,n,r,i,o){void 0===i&&(i=""),void 0===o&&(o=!1),this.secure=e,this.namespace=n,this.webSocketOnly=r,this.persistenceKey=i,this.includeNamespaceInQueryParams=o,this.host=t.toLowerCase(),this.domain=this.host.substr(this.host.indexOf(".")+1),this.internalHost=p.get("host:"+t)||this.host}return t.prototype.needsQueryParam=function(){return this.host!==this.internalHost||this.isCustomHost()||this.includeNamespaceInQueryParams},t.prototype.isCacheableHost=function(){return"s-"===this.internalHost.substr(0,2)},t.prototype.isDemoHost=function(){return"firebaseio-demo.com"===this.domain},t.prototype.isCustomHost=function(){return"firebaseio.com"!==this.domain&&"firebaseio-demo.com"!==this.domain},t.prototype.updateHost=function(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&p.set("host:"+this.host,this.internalHost))},t.prototype.connectionURL=function(t,e){var n
if(u.assert("string"==typeof t,"typeof type must == string"),u.assert("object"===r(e),"typeof params must == object"),"websocket"===t)n=(this.secure?"wss://":"ws://")+this.internalHost+"/.ws?"
else{if(t!==et)throw new Error("Unknown connection type: "+t)
n=(this.secure?"https://":"http://")+this.internalHost+"/.lp?"}this.needsQueryParam()&&(e.ns=this.namespace)
var i=[]
return L(e,function(t,e){i.push(t+"="+e)}),n+i.join("&")},t.prototype.toString=function(){var t=this.toURLString()
return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t},t.prototype.toURLString=function(){return(this.secure?"https://":"http://")+this.host},t}(),rt=function(t){var e=it(t),n=e.namespace
"firebase"===e.domain&&C(e.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!=n||"localhost"===e.domain||C("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),e.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&N("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
var r="ws"===e.scheme||"wss"===e.scheme
return{repoInfo:new nt(e.host,e.secure,n,r,"",n!=e.subdomain),path:new Z(e.pathString)}},it=function(t){var e="",n="",r="",i="",o="",a=!0,u="https",c=443
if("string"==typeof t){var h=t.indexOf("//")
h>=0&&(u=t.substring(0,h-1),t=t.substring(h+2))
var l=t.indexOf("/");-1===l&&(l=t.length)
var f=t.indexOf("?");-1===f&&(f=t.length),e=t.substring(0,Math.min(l,f)),l<f&&(i=function(t){for(var e="",n=t.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r]
try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(l,f)))
var p=function(t){var e,n,r={}
"?"===t.charAt(0)&&(t=t.substring(1))
try{for(var i=s.__values(t.split("&")),o=i.next();!o.done;o=i.next()){var a=o.value
if(0!==a.length){var u=a.split("=")
2===u.length?r[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):N("Invalid query segment '"+a+"' in query '"+t+"'")}}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}(t.substring(Math.min(t.length,f)));(h=e.indexOf(":"))>=0?(a="https"===u||"wss"===u,c=parseInt(e.substring(h+1),10)):h=t.length
var d=e.split(".")
3===d.length?(n=d[1],o=r=d[0].toLowerCase()):2===d.length?n=d[0]:"localhost"===d[0].slice(0,h).toLowerCase()&&(n="localhost"),"ns"in p&&(o=p.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:a,scheme:u,pathString:i,namespace:o}},ot=/[\[\].#$\/\u0000-\u001F\u007F]/,at=/[\[\].#$\u0000-\u001F\u007F]/,st=function(t){return"string"==typeof t&&0!==t.length&&!ot.test(t)},ut=function(t){return"string"==typeof t&&0!==t.length&&!at.test(t)},ct=function(t){return null===t||"string"==typeof t||"number"==typeof t&&!k(t)||t&&"object"===r(t)&&u.contains(t,".sv")},ht=function(t,e,n,r,i){i&&void 0===n||lt(u.errorPrefix(t,e,i),n,r)},lt=function t(e,n,i){var o=i instanceof Z?new tt(i,e):i
if(void 0===n)throw new Error(e+"contains undefined "+o.toErrorString())
if("function"==typeof n)throw new Error(e+"contains a function "+o.toErrorString()+" with contents = "+n.toString())
if(k(n))throw new Error(e+"contains "+n.toString()+" "+o.toErrorString())
if("string"==typeof n&&n.length>10485760/3&&u.stringLength(n)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+o.toErrorString()+" ('"+n.substring(0,50)+"...')")
if(n&&"object"===r(n)){var a=!1,s=!1
if(L(n,function(n,r){if(".value"===n)a=!0
else if(".priority"!==n&&".sv"!==n&&(s=!0,!st(n)))throw new Error(e+" contains an invalid key ("+n+") "+o.toErrorString()+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
o.push(n),t(e,r,o),o.pop()}),a&&s)throw new Error(e+' contains ".value" child '+o.toErrorString()+" in addition to actual children.")}},ft=function(t,e,n,i,o){if(!o||void 0!==n){var a=u.errorPrefix(t,e,o)
if(!n||"object"!==r(n)||Array.isArray(n))throw new Error(a+" must be an object containing the children to replace.")
var s=[]
L(n,function(t,e){var n=new Z(t)
if(lt(a,e,i.child(n)),".priority"===n.getBack()&&!ct(e))throw new Error(a+"contains an invalid value for '"+n.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).")
s.push(n)}),function(t,e){var n,r
for(n=0;n<e.length;n++)for(var i=(r=e[n]).slice(),o=0;o<i.length;o++)if(".priority"===i[o]&&o===i.length-1);else if(!st(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
e.sort(Z.comparePaths)
var a=null
for(n=0;n<e.length;n++){if(r=e[n],null!==a&&a.contains(r))throw new Error(t+"contains a path "+a.toString()+" that is ancestor of another path "+r.toString())
a=r}}(a,s)}},pt=function(t,e,n,r){if(!r||void 0!==n){if(k(n))throw new Error(u.errorPrefix(t,e,r)+"is "+n.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).")
if(!ct(n))throw new Error(u.errorPrefix(t,e,r)+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},dt=function(t,e,n,r){if(!r||void 0!==n)switch(n){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break
default:throw new Error(u.errorPrefix(t,e,r)+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},yt=function(t,e,n,r){if(!(r&&void 0===n||st(n)))throw new Error(u.errorPrefix(t,e,r)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},mt=function(t,e,n,r){if(!(r&&void 0===n||ut(n)))throw new Error(u.errorPrefix(t,e,r)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},gt=function(t,e){if(".info"===e.getFront())throw new Error(t+" failed = Can't modify data under /.info/")},vt=function(t,e,n){var r=n.path.toString()
if("string"!=typeof n.repoInfo.host||0===n.repoInfo.host.length||!st(n.repoInfo.namespace)&&"localhost"!==n.repoInfo.host.split(":")[0]||0!==r.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ut(t)}(r))throw new Error(u.errorPrefix(t,e,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},_t=function(){function t(t,e){this.repo_=t,this.path_=e}return t.prototype.cancel=function(t){u.validateArgCount("OnDisconnect.cancel",0,1,arguments.length),u.validateCallback("OnDisconnect.cancel",1,t,!0)
var e=new u.Deferred
return this.repo_.onDisconnectCancel(this.path_,e.wrapCallback(t)),e.promise},t.prototype.remove=function(t){u.validateArgCount("OnDisconnect.remove",0,1,arguments.length),gt("OnDisconnect.remove",this.path_),u.validateCallback("OnDisconnect.remove",1,t,!0)
var e=new u.Deferred
return this.repo_.onDisconnectSet(this.path_,null,e.wrapCallback(t)),e.promise},t.prototype.set=function(t,e){u.validateArgCount("OnDisconnect.set",1,2,arguments.length),gt("OnDisconnect.set",this.path_),ht("OnDisconnect.set",1,t,this.path_,!1),u.validateCallback("OnDisconnect.set",2,e,!0)
var n=new u.Deferred
return this.repo_.onDisconnectSet(this.path_,t,n.wrapCallback(e)),n.promise},t.prototype.setWithPriority=function(t,e,n){u.validateArgCount("OnDisconnect.setWithPriority",2,3,arguments.length),gt("OnDisconnect.setWithPriority",this.path_),ht("OnDisconnect.setWithPriority",1,t,this.path_,!1),pt("OnDisconnect.setWithPriority",2,e,!1),u.validateCallback("OnDisconnect.setWithPriority",3,n,!0)
var r=new u.Deferred
return this.repo_.onDisconnectSetWithPriority(this.path_,t,e,r.wrapCallback(n)),r.promise},t.prototype.update=function(t,e){if(u.validateArgCount("OnDisconnect.update",1,2,arguments.length),gt("OnDisconnect.update",this.path_),Array.isArray(t)){for(var n={},r=0;r<t.length;++r)n[""+r]=t[r]
t=n,N("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ft("OnDisconnect.update",1,t,this.path_,!1),u.validateCallback("OnDisconnect.update",2,e,!0)
var i=new u.Deferred
return this.repo_.onDisconnectUpdate(this.path_,t,i.wrapCallback(e)),i.promise},t}(),bt=function(){function t(t,e){this.committed=t,this.snapshot=e}return t.prototype.toJSON=function(){return u.validateArgCount("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},t}(),wt=(F="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",U=0,q=[],function(t){var e,n=t===U
U=t
var r=new Array(8)
for(e=7;e>=0;e--)r[e]=F.charAt(t%64),t=Math.floor(t/64)
u.assert(0===t,"Cannot push at time == 0")
var i=r.join("")
if(n){for(e=11;e>=0&&63===q[e];e--)q[e]=0
q[e]++}else for(e=0;e<12;e++)q[e]=Math.floor(64*Math.random())
for(e=0;e<12;e++)i+=F.charAt(q[e])
return u.assert(20===i.length,"nextPushId: Length should be 20."),i}),Et=function(){function t(t,e){this.name=t,this.node=e}return t.Wrap=function(e,n){return new t(e,n)},t}(),Tt=function(){function t(){}return t.prototype.getCompare=function(){return this.compare.bind(this)},t.prototype.indexedValueChanged=function(t,e){var n=new Et(A,t),r=new Et(A,e)
return 0!==this.compare(n,r)},t.prototype.minPost=function(){return Et.MIN},t}(),St=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),Object.defineProperty(e,"__EMPTY_NODE",{get:function(){return V},set:function(t){V=t},enumerable:!0,configurable:!0}),e.prototype.compare=function(t,e){return R(t.name,e.name)},e.prototype.isDefinedOn=function(t){throw u.assertionError("KeyIndex.isDefinedOn not expected to be called.")},e.prototype.indexedValueChanged=function(t,e){return!1},e.prototype.minPost=function(){return Et.MIN},e.prototype.maxPost=function(){return new Et(D,V)},e.prototype.makePost=function(t,e){return u.assert("string"==typeof t,"KeyIndex indexValue must always be a string."),new Et(t,V)},e.prototype.toString=function(){return".key"},e}(Tt),It=new St,Ct=function(t){return"number"==typeof t?"number:"+G(t):"string:"+t},Nt=function(t){if(t.isLeafNode()){var e=t.val()
u.assert("string"==typeof e||"number"==typeof e||"object"===r(e)&&u.contains(e,".sv"),"Priority must be a string or number.")}else u.assert(t===B||t.isEmpty(),"priority of unexpected type.")
u.assert(t===B||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},kt=function(){function t(e,n){void 0===n&&(n=t.__childrenNodeConstructor.EMPTY_NODE),this.value_=e,this.priorityNode_=n,this.lazyHash_=null,u.assert(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Nt(this.priorityNode_)}return Object.defineProperty(t,"__childrenNodeConstructor",{get:function(){return j},set:function(t){j=t},enumerable:!0,configurable:!0}),t.prototype.isLeafNode=function(){return!0},t.prototype.getPriority=function(){return this.priorityNode_},t.prototype.updatePriority=function(e){return new t(this.value_,e)},t.prototype.getImmediateChild=function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.getChild=function(e){return e.isEmpty()?this:".priority"===e.getFront()?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.hasChild=function(){return!1},t.prototype.getPredecessorChildName=function(t,e){return null},t.prototype.updateImmediateChild=function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)},t.prototype.updateChild=function(e,n){var r=e.getFront()
return null===r?n:n.isEmpty()&&".priority"!==r?this:(u.assert(".priority"!==r||1===e.getLength(),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(e.popFront(),n)))},t.prototype.isEmpty=function(){return!1},t.prototype.numChildren=function(){return 0},t.prototype.forEachChild=function(t,e){return!1},t.prototype.val=function(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},t.prototype.hash=function(){if(null===this.lazyHash_){var t=""
this.priorityNode_.isEmpty()||(t+="priority:"+Ct(this.priorityNode_.val())+":")
var e=r(this.value_)
t+=e+":",t+="number"===e?G(this.value_):this.value_,this.lazyHash_=v(t)}return this.lazyHash_},t.prototype.getValue=function(){return this.value_},t.prototype.compareTo=function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(u.assert(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))},t.prototype.compareToLeafNode_=function(e){var n=r(e.value_),i=r(this.value_),o=t.VALUE_TYPE_ORDER.indexOf(n),a=t.VALUE_TYPE_ORDER.indexOf(i)
return u.assert(o>=0,"Unknown leaf type: "+n),u.assert(a>=0,"Unknown leaf type: "+i),o===a?"object"===i?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o},t.prototype.withIndex=function(){return this},t.prototype.isIndexed=function(){return!0},t.prototype.equals=function(t){if(t===this)return!0
if(t.isLeafNode()){var e=t
return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1},t.VALUE_TYPE_ORDER=["object","boolean","number","string"],t}(),At=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.compare=function(t,e){var n=t.node.getPriority(),r=e.node.getPriority(),i=n.compareTo(r)
return 0===i?R(t.name,e.name):i},e.prototype.isDefinedOn=function(t){return!t.getPriority().isEmpty()},e.prototype.indexedValueChanged=function(t,e){return!t.getPriority().equals(e.getPriority())},e.prototype.minPost=function(){return Et.MIN},e.prototype.maxPost=function(){return new Et(D,new kt("[PRIORITY-POST]",Q))},e.prototype.makePost=function(t,e){var n=W(t)
return new Et(e,new kt("[PRIORITY-POST]",n))},e.prototype.toString=function(){return".priority"},e}(Tt)),Dt=function(){function t(t,e,n,r,i){void 0===i&&(i=null),this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[]
for(var o=1;!t.isEmpty();)if(t=t,o=e?n(t.key,e):1,r&&(o*=-1),o<0)t=this.isReverse_?t.left:t.right
else{if(0===o){this.nodeStack_.push(t)
break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}return t.prototype.getNext=function(){if(0===this.nodeStack_.length)return null
var t,e=this.nodeStack_.pop()
if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right
else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left
return t},t.prototype.hasNext=function(){return this.nodeStack_.length>0},t.prototype.peek=function(){if(0===this.nodeStack_.length)return null
var t=this.nodeStack_[this.nodeStack_.length-1]
return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}},t}(),Rt=function(){function t(e,n,r,i,o){this.key=e,this.value=n,this.color=null!=r?r:t.RED,this.left=null!=i?i:Pt.EMPTY_NODE,this.right=null!=o?o:Pt.EMPTY_NODE}return t.prototype.copy=function(e,n,r,i,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)},t.prototype.count=function(){return this.left.count()+1+this.right.count()},t.prototype.isEmpty=function(){return!1},t.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)},t.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},t.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},t.prototype.minKey=function(){return this.min_().key},t.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},t.prototype.insert=function(t,e,n){var r,i
return(i=(r=n(t,(i=this).key))<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n))).fixUp_()},t.prototype.removeMin_=function(){if(this.left.isEmpty())return Pt.EMPTY_NODE
var t=this
return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),(t=t.copy(null,null,null,t.left.removeMin_(),null)).fixUp_()},t.prototype.remove=function(t,e){var n,r
if(e(t,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null)
else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return Pt.EMPTY_NODE
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
return t+(this.isRed_()?0:1)},t.RED=!0,t.BLACK=!1,t}(),Ot=function(){function t(){}return t.prototype.copy=function(t,e,n,r,i){return this},t.prototype.insert=function(t,e,n){return new Rt(t,e,null)},t.prototype.remove=function(t,e){return this},t.prototype.count=function(){return 0},t.prototype.isEmpty=function(){return!0},t.prototype.inorderTraversal=function(t){return!1},t.prototype.reverseTraversal=function(t){return!1},t.prototype.minKey=function(){return null},t.prototype.maxKey=function(){return null},t.prototype.check_=function(){return 0},t.prototype.isRed_=function(){return!1},t}(),Pt=function(){function t(e,n){void 0===n&&(n=t.EMPTY_NODE),this.comparator_=e,this.root_=n}return t.prototype.insert=function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Rt.BLACK,null,null))},t.prototype.remove=function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Rt.BLACK,null,null))},t.prototype.get=function(t){for(var e,n=this.root_;!n.isEmpty();){if(0===(e=this.comparator_(t,n.key)))return n.value
e<0?n=n.left:e>0&&(n=n.right)}return null},t.prototype.getPredecessorKey=function(t){for(var e,n=this.root_,r=null;!n.isEmpty();){if(0===(e=this.comparator_(t,n.key))){if(n.left.isEmpty())return r?r.key:null
for(n=n.left;!n.right.isEmpty();)n=n.right
return n.key}e<0?n=n.left:e>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},t.prototype.isEmpty=function(){return this.root_.isEmpty()},t.prototype.count=function(){return this.root_.count()},t.prototype.minKey=function(){return this.root_.minKey()},t.prototype.maxKey=function(){return this.root_.maxKey()},t.prototype.inorderTraversal=function(t){return this.root_.inorderTraversal(t)},t.prototype.reverseTraversal=function(t){return this.root_.reverseTraversal(t)},t.prototype.getIterator=function(t){return new Dt(this.root_,null,this.comparator_,!1,t)},t.prototype.getIteratorFrom=function(t,e){return new Dt(this.root_,t,this.comparator_,!1,e)},t.prototype.getReverseIteratorFrom=function(t,e){return new Dt(this.root_,t,this.comparator_,!0,e)},t.prototype.getReverseIterator=function(t){return new Dt(this.root_,null,this.comparator_,!0,t)},t.EMPTY_NODE=new Ot,t}(),xt=Math.log(2),Mt=function(){function t(t){var e
this.count=(e=t+1,parseInt(Math.log(e)/xt,10)),this.current_=this.count-1
var n,r=(n=this.count,parseInt(Array(n+1).join("1"),2))
this.bits_=t+1&r}return t.prototype.nextBitIsOne=function(){var t=!(this.bits_&1<<this.current_)
return this.current_--,t},t}(),Lt=function(t,e,n,r){t.sort(e)
var i=function(e){for(var r=null,i=null,o=t.length,a=function(e,r){var i=o-e,a=o
o-=e
var u=function e(r,i){var o,a,s=i-r
if(0==s)return null
if(1==s)return o=t[r],a=n?n(o):o,new Rt(a,o.node,Rt.BLACK,null,null)
var u=parseInt(s/2,10)+r,c=e(r,u),h=e(u+1,i)
return o=t[u],a=n?n(o):o,new Rt(a,o.node,Rt.BLACK,c,h)}(i+1,a),c=t[i],h=n?n(c):c
s(new Rt(h,c.node,r,null,u))},s=function(t){r?(r.left=t,r=t):(i=t,r=t)},u=0;u<e.count;++u){var c=e.nextBitIsOne(),h=Math.pow(2,e.count-(u+1))
c?a(h,Rt.BLACK):(a(h,Rt.BLACK),a(h,Rt.RED))}return i}(new Mt(t.length))
return new Pt(r||e,i)},Ft={},Ut=function(){function t(t,e){this.indexes_=t,this.indexSet_=e}return Object.defineProperty(t,"Default",{get:function(){return u.assert(Ft&&At,"ChildrenNode.ts has not been loaded"),K=K||new t({".priority":Ft},{".priority":At})},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var e=u.safeGet(this.indexes_,t)
if(!e)throw new Error("No index defined for "+t)
return e instanceof Pt?e:null},t.prototype.hasIndex=function(t){return u.contains(this.indexSet_,t.toString())},t.prototype.addIndex=function(e,n){u.assert(e!==It,"KeyIndex always exists and isn't meant to be added to the IndexMap.")
for(var r,i=[],o=!1,a=n.getIterator(Et.Wrap),c=a.getNext();c;)o=o||e.isDefinedOn(c.node),i.push(c),c=a.getNext()
r=o?Lt(i,e.getCompare()):Ft
var h=e.toString(),l=s.__assign({},this.indexSet_)
l[h]=e
var f=s.__assign({},this.indexes_)
return f[h]=r,new t(f,l)},t.prototype.addToIndexes=function(e,n){var r=this
return new t(u.map(this.indexes_,function(t,i){var o=u.safeGet(r.indexSet_,i)
if(u.assert(o,"Missing index implementation for "+i),t===Ft){if(o.isDefinedOn(e.node)){for(var a=[],s=n.getIterator(Et.Wrap),c=s.getNext();c;)c.name!=e.name&&a.push(c),c=s.getNext()
return a.push(e),Lt(a,o.getCompare())}return Ft}var h=n.get(e.name),l=t
return h&&(l=l.remove(new Et(e.name,h))),l.insert(e,e.node)}),this.indexSet_)},t.prototype.removeFromIndexes=function(e,n){return new t(u.map(this.indexes_,function(t){if(t===Ft)return t
var r=n.get(e.name)
return r?t.remove(new Et(e.name,r)):t}),this.indexSet_)},t}()
function qt(t,e){return R(t.name,e.name)}function Vt(t,e){return R(t,e)}var Bt=function(){function t(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Nt(this.priorityNode_),this.children_.isEmpty()&&u.assert(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(t,"EMPTY_NODE",{get:function(){return H||(H=new t(new Pt(Vt),null,Ut.Default))},enumerable:!0,configurable:!0}),t.prototype.isLeafNode=function(){return!1},t.prototype.getPriority=function(){return this.priorityNode_||H},t.prototype.updatePriority=function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)},t.prototype.getImmediateChild=function(t){if(".priority"===t)return this.getPriority()
var e=this.children_.get(t)
return null===e?H:e},t.prototype.getChild=function(t){var e=t.getFront()
return null===e?this:this.getImmediateChild(e).getChild(t.popFront())},t.prototype.hasChild=function(t){return null!==this.children_.get(t)},t.prototype.updateImmediateChild=function(e,n){if(u.assert(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n)
var r,i=new Et(e,n),o=void 0,a=void 0
return n.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(i,this.children_)),r=o.isEmpty()?H:this.priorityNode_,new t(o,r,a)},t.prototype.updateChild=function(t,e){var n=t.getFront()
if(null===n)return e
u.assert(".priority"!==t.getFront()||1===t.getLength(),".priority must be the last token in a path")
var r=this.getImmediateChild(n).updateChild(t.popFront(),e)
return this.updateImmediateChild(n,r)},t.prototype.isEmpty=function(){return this.children_.isEmpty()},t.prototype.numChildren=function(){return this.children_.count()},t.prototype.val=function(e){if(this.isEmpty())return null
var n={},r=0,i=0,o=!0
if(this.forEachChild(At,function(a,s){n[a]=s.val(e),r++,o&&t.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):o=!1}),!e&&o&&i<2*r){var a=[]
for(var s in n)a[s]=n[s]
return a}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},t.prototype.hash=function(){if(null===this.lazyHash_){var t=""
this.getPriority().isEmpty()||(t+="priority:"+Ct(this.getPriority().val())+":"),this.forEachChild(At,function(e,n){var r=n.hash()
""!==r&&(t+=":"+e+":"+r)}),this.lazyHash_=""===t?"":v(t)}return this.lazyHash_},t.prototype.getPredecessorChildName=function(t,e,n){var r=this.resolveIndex_(n)
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
return r},t.prototype.compareTo=function(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===jt?-1:0},t.prototype.withIndex=function(e){if(e===It||this.indexMap_.hasIndex(e))return this
var n=this.indexMap_.addIndex(e,this.children_)
return new t(this.children_,this.priorityNode_,n)},t.prototype.isIndexed=function(t){return t===It||this.indexMap_.hasIndex(t)},t.prototype.equals=function(t){if(t===this)return!0
if(t.isLeafNode())return!1
var e=t
if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){for(var n=this.getIterator(At),r=e.getIterator(At),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1
i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1},t.prototype.resolveIndex_=function(t){return t===It?null:this.indexMap_.get(t.toString())},t.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,t}(),jt=new(function(t){function e(){return t.call(this,new Pt(Vt),Bt.EMPTY_NODE,Ut.Default)||this}return s.__extends(e,t),e.prototype.compareTo=function(t){return t===this?0:1},e.prototype.equals=function(t){return t===this},e.prototype.getPriority=function(){return this},e.prototype.getImmediateChild=function(t){return Bt.EMPTY_NODE},e.prototype.isEmpty=function(){return!1},e}(Bt))
Object.defineProperties(Et,{MIN:{value:new Et(A,Bt.EMPTY_NODE)},MAX:{value:new Et(D,jt)}}),St.__EMPTY_NODE=Bt.EMPTY_NODE,kt.__childrenNodeConstructor=Bt,B=jt,Q=jt
var Wt=!0
function Qt(t,e){if(void 0===e&&(e=null),null===t)return Bt.EMPTY_NODE
if("object"===r(t)&&".priority"in t&&(e=t[".priority"]),u.assert(null===e||"string"==typeof e||"number"==typeof e||"object"===r(e)&&".sv"in e,"Invalid priority type found: "+r(e)),"object"===r(t)&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==r(t)||".sv"in t)return new kt(t,Qt(e))
if(t instanceof Array||!Wt){var n=Bt.EMPTY_NODE
return L(t,function(e,r){if(u.contains(t,e)&&"."!==e.substring(0,1)){var i=Qt(r)
!i.isLeafNode()&&i.isEmpty()||(n=n.updateImmediateChild(e,i))}}),n.updatePriority(Qt(e))}var i=[],o=!1
if(L(t,function(t,e){if("."!==t.substring(0,1)){var n=Qt(e)
n.isEmpty()||(o=o||!n.getPriority().isEmpty(),i.push(new Et(t,n)))}}),0==i.length)return Bt.EMPTY_NODE
var a=Lt(i,qt,function(t){return t.name},Vt)
if(o){var s=Lt(i,At.getCompare())
return new Bt(a,Qt(e),new Ut({".priority":s},{".priority":At}))}return new Bt(a,Qt(e),Ut.Default)}W=Qt
var Kt,Ht,Gt=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.compare=function(t,e){var n=t.node.compareTo(e.node)
return 0===n?R(t.name,e.name):n},e.prototype.isDefinedOn=function(t){return!0},e.prototype.indexedValueChanged=function(t,e){return!t.equals(e)},e.prototype.minPost=function(){return Et.MIN},e.prototype.maxPost=function(){return Et.MAX},e.prototype.makePost=function(t,e){var n=Qt(t)
return new Et(e,n)},e.prototype.toString=function(){return".value"},e}(Tt)),zt=function(t){function e(e){var n=t.call(this)||this
return n.indexPath_=e,u.assert(!e.isEmpty()&&".priority"!==e.getFront(),"Can't create PathIndex with empty path or .priority key"),n}return s.__extends(e,t),e.prototype.extractChild=function(t){return t.getChild(this.indexPath_)},e.prototype.isDefinedOn=function(t){return!t.getChild(this.indexPath_).isEmpty()},e.prototype.compare=function(t,e){var n=this.extractChild(t.node),r=this.extractChild(e.node),i=n.compareTo(r)
return 0===i?R(t.name,e.name):i},e.prototype.makePost=function(t,e){var n=Qt(t),r=Bt.EMPTY_NODE.updateChild(this.indexPath_,n)
return new Et(e,r)},e.prototype.maxPost=function(){var t=Bt.EMPTY_NODE.updateChild(this.indexPath_,jt)
return new Et(D,t)},e.prototype.toString=function(){return this.indexPath_.slice().join("/")},e}(Tt),Yt=function(){function t(t,e,n){this.node_=t,this.ref_=e,this.index_=n}return t.prototype.val=function(){return u.validateArgCount("DataSnapshot.val",0,0,arguments.length),this.node_.val()},t.prototype.exportVal=function(){return u.validateArgCount("DataSnapshot.exportVal",0,0,arguments.length),this.node_.val(!0)},t.prototype.toJSON=function(){return u.validateArgCount("DataSnapshot.toJSON",0,1,arguments.length),this.exportVal()},t.prototype.exists=function(){return u.validateArgCount("DataSnapshot.exists",0,0,arguments.length),!this.node_.isEmpty()},t.prototype.child=function(e){u.validateArgCount("DataSnapshot.child",0,1,arguments.length),e=String(e),mt("DataSnapshot.child",1,e,!1)
var n=new Z(e),r=this.ref_.child(n)
return new t(this.node_.getChild(n),r,At)},t.prototype.hasChild=function(t){u.validateArgCount("DataSnapshot.hasChild",1,1,arguments.length),mt("DataSnapshot.hasChild",1,t,!1)
var e=new Z(t)
return!this.node_.getChild(e).isEmpty()},t.prototype.getPriority=function(){return u.validateArgCount("DataSnapshot.getPriority",0,0,arguments.length),this.node_.getPriority().val()},t.prototype.forEach=function(e){var n=this
return u.validateArgCount("DataSnapshot.forEach",1,1,arguments.length),u.validateCallback("DataSnapshot.forEach",1,e,!1),!this.node_.isLeafNode()&&!!this.node_.forEachChild(this.index_,function(r,i){return e(new t(i,n.ref_.child(r),At))})},t.prototype.hasChildren=function(){return u.validateArgCount("DataSnapshot.hasChildren",0,0,arguments.length),!this.node_.isLeafNode()&&!this.node_.isEmpty()},Object.defineProperty(t.prototype,"key",{get:function(){return this.ref_.getKey()},enumerable:!0,configurable:!0}),t.prototype.numChildren=function(){return u.validateArgCount("DataSnapshot.numChildren",0,0,arguments.length),this.node_.numChildren()},t.prototype.getRef=function(){return u.validateArgCount("DataSnapshot.ref",0,0,arguments.length),this.ref_},Object.defineProperty(t.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),t}(),Xt=function(){function t(t,e,n,r){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=r}return t.prototype.getPath=function(){var t=this.snapshot.getRef()
return"value"===this.eventType?t.path:t.getParent().path},t.prototype.getEventType=function(){return this.eventType},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+u.stringify(this.snapshot.exportVal())},t}(),Jt=function(){function t(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}return t.prototype.getPath=function(){return this.path},t.prototype.getEventType=function(){return"cancel"},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.path.toString()+":cancel"},t}(),$t=function(){function t(t,e,n){this.callback_=t,this.cancelCallback_=e,this.context_=n}return t.prototype.respondsTo=function(t){return"value"===t},t.prototype.createEvent=function(t,e){var n=e.getQueryParams().getIndex()
return new Xt("value",this,new Yt(t.snapshotNode,e.getRef(),n))},t.prototype.getEventRunner=function(t){var e=this.context_
if("cancel"===t.getEventType()){u.assert(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback")
var n=this.cancelCallback_
return function(){n.call(e,t.error)}}var r=this.callback_
return function(){r.call(e,t.snapshot)}},t.prototype.createCancelEvent=function(t,e){return this.cancelCallback_?new Jt(this,t,e):null},t.prototype.matches=function(e){return e instanceof t&&(!e.callback_||!this.callback_||e.callback_===this.callback_&&e.context_===this.context_)},t.prototype.hasAnyCallback=function(){return null!==this.callback_},t}(),Zt=function(){function t(t,e,n){this.callbacks_=t,this.cancelCallback_=e,this.context_=n}return t.prototype.respondsTo=function(t){var e="children_added"===t?"child_added":t
return e="children_removed"===e?"child_removed":e,u.contains(this.callbacks_,e)},t.prototype.createCancelEvent=function(t,e){return this.cancelCallback_?new Jt(this,t,e):null},t.prototype.createEvent=function(t,e){u.assert(null!=t.childName,"Child events should have a childName.")
var n=e.getRef().child(t.childName),r=e.getQueryParams().getIndex()
return new Xt(t.type,this,new Yt(t.snapshotNode,n,r),t.prevName)},t.prototype.getEventRunner=function(t){var e=this.context_
if("cancel"===t.getEventType()){u.assert(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback")
var n=this.cancelCallback_
return function(){n.call(e,t.error)}}var r=this.callbacks_[t.eventType]
return function(){r.call(e,t.snapshot,t.prevName)}},t.prototype.matches=function(e){var n=this
if(e instanceof t){if(!this.callbacks_||!e.callbacks_)return!0
if(this.context_===e.context_){var r=Object.keys(e.callbacks_),i=Object.keys(this.callbacks_),o=r.length
if(o===i.length){if(1===o){var a=r[0],s=i[0]
return!(s!==a||e.callbacks_[a]&&this.callbacks_[s]&&e.callbacks_[a]!==this.callbacks_[s])}return i.every(function(t){return e.callbacks_[t]===n.callbacks_[t]})}}}return!1},t.prototype.hasAnyCallback=function(){return null!==this.callbacks_},t}(),te=function(){function t(t,e,n,r){this.repo=t,this.path=e,this.queryParams_=n,this.orderByCalled_=r}return Object.defineProperty(t,"__referenceConstructor",{get:function(){return u.assert(Kt,"Reference.ts has not been loaded"),Kt},set:function(t){Kt=t},enumerable:!0,configurable:!0}),t.validateQueryEndpoints_=function(t){var e=null,n=null
if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===It){var i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",o="Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string."
if(t.hasStart()){if(t.getIndexStartName()!=A)throw new Error(i)
if("string"!=typeof e)throw new Error(o)}if(t.hasEnd()){if(t.getIndexEndName()!=D)throw new Error(i)
if("string"!=typeof n)throw new Error(o)}}else if(t.getIndex()===At){if(null!=e&&!ct(e)||null!=n&&!ct(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(u.assert(t.getIndex()instanceof zt||t.getIndex()===Gt,"unknown index type."),null!=e&&"object"===r(e)||null!=n&&"object"===r(n))throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")},t.validateLimit_=function(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")},t.prototype.validateNoPreviousOrderByCall_=function(t){if(!0===this.orderByCalled_)throw new Error(t+": You can't combine multiple orderBy calls.")},t.prototype.getQueryParams=function(){return this.queryParams_},t.prototype.getRef=function(){return u.validateArgCount("Query.ref",0,0,arguments.length),new t.__referenceConstructor(this.repo,this.path)},t.prototype.on=function(e,n,r,i){u.validateArgCount("Query.on",2,4,arguments.length),dt("Query.on",1,e,!1),u.validateCallback("Query.on",2,n,!1)
var o=t.getCancelAndContextArgs_("Query.on",r,i)
if("value"===e)this.onValueEvent(n,o.cancel,o.context)
else{var a={}
a[e]=n,this.onChildEvent(a,o.cancel,o.context)}return n},t.prototype.onValueEvent=function(t,e,n){var r=new $t(t,e||null,n||null)
this.repo.addEventCallbackForQuery(this,r)},t.prototype.onChildEvent=function(t,e,n){var r=new Zt(t,e,n)
this.repo.addEventCallbackForQuery(this,r)},t.prototype.off=function(t,e,n){u.validateArgCount("Query.off",0,3,arguments.length),dt("Query.off",1,t,!0),u.validateCallback("Query.off",2,e,!0),u.validateContextObject("Query.off",3,n,!0)
var r=null,i=null
"value"===t?r=new $t(e||null,null,n||null):t&&(e&&((i={})[t]=e),r=new Zt(i,null,n||null))
this.repo.removeEventCallbackForQuery(this,r)},t.prototype.once=function(e,n,r,i){var o=this
u.validateArgCount("Query.once",1,4,arguments.length),dt("Query.once",1,e,!1),u.validateCallback("Query.once",2,n,!0)
var a=t.getCancelAndContextArgs_("Query.once",r,i),s=!0,c=new u.Deferred
c.promise.catch(function(){})
var h=function t(r){s&&(s=!1,o.off(e,t),n&&n.bind(a.context)(r),c.resolve(r))}
return this.on(e,h,function(t){o.off(e,h),a.cancel&&a.cancel.bind(a.context)(t),c.reject(t)}),c.promise},t.prototype.limitToFirst=function(e){if(u.validateArgCount("Query.limitToFirst",1,1,arguments.length),"number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("Query.limitToFirst: First argument must be a positive integer.")
if(this.queryParams_.hasLimit())throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).")
return new t(this.repo,this.path,this.queryParams_.limitToFirst(e),this.orderByCalled_)},t.prototype.limitToLast=function(e){if(u.validateArgCount("Query.limitToLast",1,1,arguments.length),"number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("Query.limitToLast: First argument must be a positive integer.")
if(this.queryParams_.hasLimit())throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).")
return new t(this.repo,this.path,this.queryParams_.limitToLast(e),this.orderByCalled_)},t.prototype.orderByChild=function(e){if(u.validateArgCount("Query.orderByChild",1,1,arguments.length),"$key"===e)throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.')
if("$priority"===e)throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.')
if("$value"===e)throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.')
mt("Query.orderByChild",1,e,!1),this.validateNoPreviousOrderByCall_("Query.orderByChild")
var n=new Z(e)
if(n.isEmpty())throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.")
var r=new zt(n),i=this.queryParams_.orderBy(r)
return t.validateQueryEndpoints_(i),new t(this.repo,this.path,i,!0)},t.prototype.orderByKey=function(){u.validateArgCount("Query.orderByKey",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByKey")
var e=this.queryParams_.orderBy(It)
return t.validateQueryEndpoints_(e),new t(this.repo,this.path,e,!0)},t.prototype.orderByPriority=function(){u.validateArgCount("Query.orderByPriority",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByPriority")
var e=this.queryParams_.orderBy(At)
return t.validateQueryEndpoints_(e),new t(this.repo,this.path,e,!0)},t.prototype.orderByValue=function(){u.validateArgCount("Query.orderByValue",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByValue")
var e=this.queryParams_.orderBy(Gt)
return t.validateQueryEndpoints_(e),new t(this.repo,this.path,e,!0)},t.prototype.startAt=function(e,n){void 0===e&&(e=null),u.validateArgCount("Query.startAt",0,2,arguments.length),ht("Query.startAt",1,e,this.path,!0),yt("Query.startAt",2,n,!0)
var r=this.queryParams_.startAt(e,n)
if(t.validateLimit_(r),t.validateQueryEndpoints_(r),this.queryParams_.hasStart())throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).")
return void 0===e&&(e=null,n=null),new t(this.repo,this.path,r,this.orderByCalled_)},t.prototype.endAt=function(e,n){void 0===e&&(e=null),u.validateArgCount("Query.endAt",0,2,arguments.length),ht("Query.endAt",1,e,this.path,!0),yt("Query.endAt",2,n,!0)
var r=this.queryParams_.endAt(e,n)
if(t.validateLimit_(r),t.validateQueryEndpoints_(r),this.queryParams_.hasEnd())throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).")
return new t(this.repo,this.path,r,this.orderByCalled_)},t.prototype.equalTo=function(t,e){if(u.validateArgCount("Query.equalTo",1,2,arguments.length),ht("Query.equalTo",1,t,this.path,!1),yt("Query.equalTo",2,e,!0),this.queryParams_.hasStart())throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).")
if(this.queryParams_.hasEnd())throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).")
return this.startAt(t,e).endAt(t,e)},t.prototype.toString=function(){return u.validateArgCount("Query.toString",0,0,arguments.length),this.repo.toString()+this.path.toUrlEncodedString()},t.prototype.toJSON=function(){return u.validateArgCount("Query.toJSON",0,1,arguments.length),this.toString()},t.prototype.queryObject=function(){return this.queryParams_.getQueryObject()},t.prototype.queryIdentifier=function(){var t=this.queryObject(),e=x(t)
return"{}"===e?"default":e},t.prototype.isEqual=function(e){if(u.validateArgCount("Query.isEqual",1,1,arguments.length),!(e instanceof t)){throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")}var n=this.repo===e.repo,r=this.path.equals(e.path),i=this.queryIdentifier()===e.queryIdentifier()
return n&&r&&i},t.getCancelAndContextArgs_=function(t,e,n){var i={cancel:null,context:null}
if(e&&n)i.cancel=e,u.validateCallback(t,3,i.cancel,!0),i.context=n,u.validateContextObject(t,4,i.context,!0)
else if(e)if("object"===r(e)&&null!==e)i.context=e
else{if("function"!=typeof e)throw new Error(u.errorPrefix(t,3,!0)+" must either be a cancel callback or a context object.")
i.cancel=e}return i},Object.defineProperty(t.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),t}(),ee=function(){function t(){this.value=null,this.children=new Map}return t.prototype.find=function(t){if(null!=this.value)return this.value.getChild(t)
if(!t.isEmpty()&&this.children.size>0){var e=t.getFront()
return t=t.popFront(),this.children.has(e)?this.children.get(e).find(t):null}return null},t.prototype.remember=function(e,n){if(e.isEmpty())this.value=n,this.children.clear()
else if(null!==this.value)this.value=this.value.updateChild(e,n)
else{var r=e.getFront()
this.children.has(r)||this.children.set(r,new t)
var i=this.children.get(r)
e=e.popFront(),i.remember(e,n)}},t.prototype.forget=function(t){if(t.isEmpty())return this.value=null,this.children.clear(),!0
if(null!==this.value){if(this.value.isLeafNode())return!1
var e=this.value
this.value=null
var n=this
return e.forEachChild(At,function(t,e){n.remember(new Z(t),e)}),this.forget(t)}if(this.children.size>0){var r=t.getFront()
return t=t.popFront(),this.children.has(r)&&this.children.get(r).forget(t)&&this.children.delete(r),0===this.children.size}return!0},t.prototype.forEachTree=function(t,e){null!==this.value?e(t,this.value):this.forEachChild(function(n,r){var i=new Z(t.toString()+"/"+n)
r.forEachTree(i,e)})},t.prototype.forEachChild=function(t){this.children.forEach(function(e,n){t(n,e)})},t}(),ne=function(t,e){return t&&"object"===r(t)?(u.assert(".sv"in t,"Unexpected leaf node or priority contents"),e[t[".sv"]]):t},re=function t(e,n){var r,i=e.getPriority().val(),o=ne(i,n)
if(e.isLeafNode()){var a=e,s=ne(a.getValue(),n)
return s!==a.getValue()||o!==a.getPriority().val()?new kt(s,Qt(o)):e}var u=e
return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new kt(o))),u.forEachChild(At,function(e,i){var o=t(i,n)
o!==i&&(r=r.updateImmediateChild(e,o))}),r}
!function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Ht||(Ht={}))
var ie,oe,ae=function(){function t(t,e,n,r){this.fromUser=t,this.fromServer=e,this.queryId=n,this.tagged=r,u.assert(!r||e,"Tagged queries must be from server.")}return t.User=new t(!0,!1,null,!1),t.Server=new t(!1,!0,null,!1),t.forServerTaggedQuery=function(e){return new t(!1,!0,e,!0)},t}(),se=function(){function t(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Ht.ACK_USER_WRITE,this.source=ae.User}return t.prototype.operationForChild=function(e){if(this.path.isEmpty()){if(null!=this.affectedTree.value)return u.assert(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this
var n=this.affectedTree.subtree(new Z(e))
return new t(Z.Empty,n,this.revert)}return u.assert(this.path.getFront()===e,"operationForChild called for unrelated child."),new t(this.path.popFront(),this.affectedTree,this.revert)},t}(),ue=function(){return ie||(ie=new Pt(O)),ie},ce=function(){function t(t,e){void 0===e&&(e=ue()),this.value=t,this.children=e}return t.fromObject=function(e){var n=t.Empty
return L(e,function(t,e){n=n.set(new Z(t),e)}),n},t.prototype.isEmpty=function(){return null===this.value&&this.children.isEmpty()},t.prototype.findRootMostMatchingPathAndValue=function(t,e){if(null!=this.value&&e(this.value))return{path:Z.Empty,value:this.value}
if(t.isEmpty())return null
var n=t.getFront(),r=this.children.get(n)
if(null!==r){var i=r.findRootMostMatchingPathAndValue(t.popFront(),e)
return null!=i?{path:new Z(n).child(i.path),value:i.value}:null}return null},t.prototype.findRootMostValueAndPath=function(t){return this.findRootMostMatchingPathAndValue(t,function(){return!0})},t.prototype.subtree=function(e){if(e.isEmpty())return this
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
return r=o.isEmpty()?this.children.remove(i):this.children.insert(i,o),new t(this.value,r)},t.prototype.fold=function(t){return this.fold_(Z.Empty,t)},t.prototype.fold_=function(t,e){var n={}
return this.children.inorderTraversal(function(r,i){n[r]=i.fold_(t.child(r),e)}),e(t,this.value,n)},t.prototype.findOnPath=function(t,e){return this.findOnPath_(t,Z.Empty,e)},t.prototype.findOnPath_=function(t,e,n){var r=!!this.value&&n(e,this.value)
if(r)return r
if(t.isEmpty())return null
var i=t.getFront(),o=this.children.get(i)
return o?o.findOnPath_(t.popFront(),e.child(i),n):null},t.prototype.foreachOnPath=function(t,e){return this.foreachOnPath_(t,Z.Empty,e)},t.prototype.foreachOnPath_=function(e,n,r){if(e.isEmpty())return this
this.value&&r(n,this.value)
var i=e.getFront(),o=this.children.get(i)
return o?o.foreachOnPath_(e.popFront(),n.child(i),r):t.Empty},t.prototype.foreach=function(t){this.foreach_(Z.Empty,t)},t.prototype.foreach_=function(t,e){this.children.inorderTraversal(function(n,r){r.foreach_(t.child(n),e)}),this.value&&e(t,this.value)},t.prototype.foreachChild=function(t){this.children.inorderTraversal(function(e,n){n.value&&t(e,n.value)})},t.Empty=new t(null),t}(),he=function(){function t(t,e){this.source=t,this.path=e,this.type=Ht.LISTEN_COMPLETE}return t.prototype.operationForChild=function(e){return this.path.isEmpty()?new t(this.source,Z.Empty):new t(this.source,this.path.popFront())},t}(),le=function(){function t(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Ht.OVERWRITE}return t.prototype.operationForChild=function(e){return this.path.isEmpty()?new t(this.source,Z.Empty,this.snap.getImmediateChild(e)):new t(this.source,this.path.popFront(),this.snap)},t}(),fe=function(){function t(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Ht.MERGE}return t.prototype.operationForChild=function(e){if(this.path.isEmpty()){var n=this.children.subtree(new Z(e))
return n.isEmpty()?null:n.value?new le(this.source,Z.Empty,n.value):new t(this.source,Z.Empty,n)}return u.assert(this.path.getFront()===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,this.path.popFront(),this.children)},t.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},t}(),pe=function(){function t(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}return t.prototype.isFullyInitialized=function(){return this.fullyInitialized_},t.prototype.isFiltered=function(){return this.filtered_},t.prototype.isCompleteForPath=function(t){if(t.isEmpty())return this.isFullyInitialized()&&!this.filtered_
var e=t.getFront()
return this.isCompleteForChild(e)},t.prototype.isCompleteForChild=function(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)},t.prototype.getNode=function(){return this.node_},t}(),de=function(){function t(t,e){this.eventCache_=t,this.serverCache_=e}return t.prototype.updateEventSnap=function(e,n,r){return new t(new pe(e,n,r),this.serverCache_)},t.prototype.updateServerSnap=function(e,n,r){return new t(this.eventCache_,new pe(e,n,r))},t.prototype.getEventCache=function(){return this.eventCache_},t.prototype.getCompleteEventSnap=function(){return this.eventCache_.isFullyInitialized()?this.eventCache_.getNode():null},t.prototype.getServerCache=function(){return this.serverCache_},t.prototype.getCompleteServerSnap=function(){return this.serverCache_.isFullyInitialized()?this.serverCache_.getNode():null},t.Empty=new t(new pe(Bt.EMPTY_NODE,!1,!1),new pe(Bt.EMPTY_NODE,!1,!1)),t}(),ye=function(){function t(t,e,n,r,i){this.type=t,this.snapshotNode=e,this.childName=n,this.oldSnap=r,this.prevName=i}return t.valueChange=function(e){return new t(t.VALUE,e)},t.childAddedChange=function(e,n){return new t(t.CHILD_ADDED,n,e)},t.childRemovedChange=function(e,n){return new t(t.CHILD_REMOVED,n,e)},t.childChangedChange=function(e,n,r){return new t(t.CHILD_CHANGED,n,e,r)},t.childMovedChange=function(e,n){return new t(t.CHILD_MOVED,n,e)},t.CHILD_ADDED="child_added",t.CHILD_REMOVED="child_removed",t.CHILD_CHANGED="child_changed",t.CHILD_MOVED="child_moved",t.VALUE="value",t}(),me=function(){function t(t){this.index_=t}return t.prototype.updateChild=function(t,e,n,r,i,o){u.assert(t.isIndexed(this.index_),"A node must be indexed if only a child is updated")
var a=t.getImmediateChild(e)
return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()==n.isEmpty()?t:(null!=o&&(n.isEmpty()?t.hasChild(e)?o.trackChildChange(ye.childRemovedChange(e,a)):u.assert(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ye.childAddedChange(e,n)):o.trackChildChange(ye.childChangedChange(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))},t.prototype.updateFullNode=function(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(At,function(t,r){e.hasChild(t)||n.trackChildChange(ye.childRemovedChange(t,r))}),e.isLeafNode()||e.forEachChild(At,function(e,r){if(t.hasChild(e)){var i=t.getImmediateChild(e)
i.equals(r)||n.trackChildChange(ye.childChangedChange(e,r,i))}else n.trackChildChange(ye.childAddedChange(e,r))})),e.withIndex(this.index_)},t.prototype.updatePriority=function(t,e){return t.isEmpty()?Bt.EMPTY_NODE:t.updatePriority(e)},t.prototype.filtersNodes=function(){return!1},t.prototype.getIndexedFilter=function(){return this},t.prototype.getIndex=function(){return this.index_},t}(),ge=function(){function t(){this.changeMap=new Map}return t.prototype.trackChildChange=function(t){var e=t.type,n=t.childName
u.assert(e==ye.CHILD_ADDED||e==ye.CHILD_CHANGED||e==ye.CHILD_REMOVED,"Only child changes supported for tracking"),u.assert(".priority"!==n,"Only non-priority child changes can be tracked.")
var r=this.changeMap.get(n)
if(r){var i=r.type
if(e==ye.CHILD_ADDED&&i==ye.CHILD_REMOVED)this.changeMap.set(n,ye.childChangedChange(n,t.snapshotNode,r.snapshotNode))
else if(e==ye.CHILD_REMOVED&&i==ye.CHILD_ADDED)this.changeMap.delete(n)
else if(e==ye.CHILD_REMOVED&&i==ye.CHILD_CHANGED)this.changeMap.set(n,ye.childRemovedChange(n,r.oldSnap))
else if(e==ye.CHILD_CHANGED&&i==ye.CHILD_ADDED)this.changeMap.set(n,ye.childAddedChange(n,t.snapshotNode))
else{if(e!=ye.CHILD_CHANGED||i!=ye.CHILD_CHANGED)throw u.assertionError("Illegal combination of changes: "+t+" occurred after "+r)
this.changeMap.set(n,ye.childChangedChange(n,t.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,t)},t.prototype.getChanges=function(){return Array.from(this.changeMap.values())},t}(),ve=new(function(){function t(){}return t.prototype.getCompleteChild=function(t){return null},t.prototype.getChildAfterChild=function(t,e,n){return null},t}()),_e=function(){function t(t,e,n){void 0===n&&(n=null),this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}return t.prototype.getCompleteChild=function(t){var e=this.viewCache_.getEventCache()
if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t)
var n=null!=this.optCompleteServerCache_?new pe(this.optCompleteServerCache_,!0,!1):this.viewCache_.getServerCache()
return this.writes_.calcCompleteChild(t,n)},t.prototype.getChildAfterChild=function(t,e,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:this.viewCache_.getCompleteServerSnap(),i=this.writes_.calcIndexedSlice(r,e,1,n,t)
return 0===i.length?null:i[0]},t}(),be=function(t,e){this.viewCache=t,this.changes=e},we=function(){function t(t){this.filter_=t}return t.prototype.assertIndexed=function(t){u.assert(t.getEventCache().getNode().isIndexed(this.filter_.getIndex()),"Event snap not indexed"),u.assert(t.getServerCache().getNode().isIndexed(this.filter_.getIndex()),"Server snap not indexed")},t.prototype.applyOperation=function(e,n,r,i){var o,a,s=new ge
if(n.type===Ht.OVERWRITE){var c=n
c.source.fromUser?o=this.applyUserOverwrite_(e,c.path,c.snap,r,i,s):(u.assert(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.getServerCache().isFiltered()&&!c.path.isEmpty(),o=this.applyServerOverwrite_(e,c.path,c.snap,r,i,a,s))}else if(n.type===Ht.MERGE){var h=n
h.source.fromUser?o=this.applyUserMerge_(e,h.path,h.children,r,i,s):(u.assert(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.getServerCache().isFiltered(),o=this.applyServerMerge_(e,h.path,h.children,r,i,a,s))}else if(n.type===Ht.ACK_USER_WRITE){var l=n
o=l.revert?this.revertUserWrite_(e,l.path,r,i,s):this.ackUserWrite_(e,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Ht.LISTEN_COMPLETE)throw u.assertionError("Unknown operation type: "+n.type)
o=this.listenComplete_(e,n.path,r,s)}var f=s.getChanges()
return t.maybeAddValueEvent_(e,o,f),new be(o,f)},t.maybeAddValueEvent_=function(t,e,n){var r=e.getEventCache()
if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=t.getCompleteEventSnap();(n.length>0||!t.getEventCache().isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(ye.valueChange(e.getCompleteEventSnap()))}},t.prototype.generateEventCacheAfterServerEvent_=function(t,e,n,r,i){var o=t.getEventCache()
if(null!=n.shadowingWrite(e))return t
var a=void 0,s=void 0
if(e.isEmpty())if(u.assert(t.getServerCache().isFullyInitialized(),"If change path is empty, we must have complete server data"),t.getServerCache().isFiltered()){var c=t.getCompleteServerSnap(),h=c instanceof Bt?c:Bt.EMPTY_NODE,l=n.calcCompleteEventChildren(h)
a=this.filter_.updateFullNode(t.getEventCache().getNode(),l,i)}else{var f=n.calcCompleteEventCache(t.getCompleteServerSnap())
a=this.filter_.updateFullNode(t.getEventCache().getNode(),f,i)}else{var p=e.getFront()
if(".priority"==p){u.assert(1==e.getLength(),"Can't have a priority with additional path components")
var d=o.getNode()
s=t.getServerCache().getNode()
var y=n.calcEventCacheAfterServerOverwrite(e,d,s)
a=null!=y?this.filter_.updatePriority(d,y):o.getNode()}else{var m=e.popFront(),g=void 0
if(o.isCompleteForChild(p)){s=t.getServerCache().getNode()
var v=n.calcEventCacheAfterServerOverwrite(e,o.getNode(),s)
g=null!=v?o.getNode().getImmediateChild(p).updateChild(m,v):o.getNode().getImmediateChild(p)}else g=n.calcCompleteChild(p,t.getServerCache())
a=null!=g?this.filter_.updateChild(o.getNode(),p,g,m,r,i):o.getNode()}}return t.updateEventSnap(a,o.isFullyInitialized()||e.isEmpty(),this.filter_.filtersNodes())},t.prototype.applyServerOverwrite_=function(t,e,n,r,i,o,a){var s,u=t.getServerCache(),c=o?this.filter_:this.filter_.getIndexedFilter()
if(e.isEmpty())s=c.updateFullNode(u.getNode(),n,null)
else if(c.filtersNodes()&&!u.isFiltered()){var h=u.getNode().updateChild(e,n)
s=c.updateFullNode(u.getNode(),h,null)}else{var l=e.getFront()
if(!u.isCompleteForPath(e)&&e.getLength()>1)return t
var f=e.popFront(),p=u.getNode().getImmediateChild(l).updateChild(f,n)
s=".priority"==l?c.updatePriority(u.getNode(),p):c.updateChild(u.getNode(),l,p,f,ve,null)}var d=t.updateServerSnap(s,u.isFullyInitialized()||e.isEmpty(),c.filtersNodes()),y=new _e(r,d,i)
return this.generateEventCacheAfterServerEvent_(d,e,r,y,a)},t.prototype.applyUserOverwrite_=function(t,e,n,r,i,o){var a,s,u=t.getEventCache(),c=new _e(r,t,i)
if(e.isEmpty())s=this.filter_.updateFullNode(t.getEventCache().getNode(),n,o),a=t.updateEventSnap(s,!0,this.filter_.filtersNodes())
else{var h=e.getFront()
if(".priority"===h)s=this.filter_.updatePriority(t.getEventCache().getNode(),n),a=t.updateEventSnap(s,u.isFullyInitialized(),u.isFiltered())
else{var l=e.popFront(),f=u.getNode().getImmediateChild(h),p=void 0
if(l.isEmpty())p=n
else{var d=c.getCompleteChild(h)
p=null!=d?".priority"===l.getBack()&&d.getChild(l.parent()).isEmpty()?d:d.updateChild(l,n):Bt.EMPTY_NODE}if(f.equals(p))a=t
else{var y=this.filter_.updateChild(u.getNode(),h,p,l,c,o)
a=t.updateEventSnap(y,u.isFullyInitialized(),this.filter_.filtersNodes())}}}return a},t.cacheHasChild_=function(t,e){return t.getEventCache().isCompleteForChild(e)},t.prototype.applyUserMerge_=function(e,n,r,i,o,a){var s=this,u=e
return r.foreach(function(r,c){var h=n.child(r)
t.cacheHasChild_(e,h.getFront())&&(u=s.applyUserOverwrite_(u,h,c,i,o,a))}),r.foreach(function(r,c){var h=n.child(r)
t.cacheHasChild_(e,h.getFront())||(u=s.applyUserOverwrite_(u,h,c,i,o,a))}),u},t.prototype.applyMerge_=function(t,e){return e.foreach(function(e,n){t=t.updateChild(e,n)}),t},t.prototype.applyServerMerge_=function(t,e,n,r,i,o,a){var s=this
if(t.getServerCache().getNode().isEmpty()&&!t.getServerCache().isFullyInitialized())return t
var u,c=t
u=e.isEmpty()?n:ce.Empty.setTree(e,n)
var h=t.getServerCache().getNode()
return u.children.inorderTraversal(function(e,n){if(h.hasChild(e)){var u=t.getServerCache().getNode().getImmediateChild(e),l=s.applyMerge_(u,n)
c=s.applyServerOverwrite_(c,new Z(e),l,r,i,o,a)}}),u.children.inorderTraversal(function(e,n){var u=!t.getServerCache().isCompleteForChild(e)&&null==n.value
if(!h.hasChild(e)&&!u){var l=t.getServerCache().getNode().getImmediateChild(e),f=s.applyMerge_(l,n)
c=s.applyServerOverwrite_(c,new Z(e),f,r,i,o,a)}}),c},t.prototype.ackUserWrite_=function(t,e,n,r,i,o){if(null!=r.shadowingWrite(e))return t
var a=t.getServerCache().isFiltered(),s=t.getServerCache()
if(null!=n.value){if(e.isEmpty()&&s.isFullyInitialized()||s.isCompleteForPath(e))return this.applyServerOverwrite_(t,e,s.getNode().getChild(e),r,i,a,o)
if(e.isEmpty()){var u=ce.Empty
return s.getNode().forEachChild(It,function(t,e){u=u.set(new Z(t),e)}),this.applyServerMerge_(t,e,u,r,i,a,o)}return t}var c=ce.Empty
return n.foreach(function(t,n){var r=e.child(t)
s.isCompleteForPath(r)&&(c=c.set(t,s.getNode().getChild(r)))}),this.applyServerMerge_(t,e,c,r,i,a,o)},t.prototype.listenComplete_=function(t,e,n,r){var i=t.getServerCache(),o=t.updateServerSnap(i.getNode(),i.isFullyInitialized()||e.isEmpty(),i.isFiltered())
return this.generateEventCacheAfterServerEvent_(o,e,n,ve,r)},t.prototype.revertUserWrite_=function(t,e,n,r,i){var o
if(null!=n.shadowingWrite(e))return t
var a=new _e(n,t,r),s=t.getEventCache().getNode(),c=void 0
if(e.isEmpty()||".priority"===e.getFront()){var h=void 0
if(t.getServerCache().isFullyInitialized())h=n.calcCompleteEventCache(t.getCompleteServerSnap())
else{var l=t.getServerCache().getNode()
u.assert(l instanceof Bt,"serverChildren would be complete if leaf node"),h=n.calcCompleteEventChildren(l)}h=h,c=this.filter_.updateFullNode(s,h,i)}else{var f=e.getFront(),p=n.calcCompleteChild(f,t.getServerCache())
null==p&&t.getServerCache().isCompleteForChild(f)&&(p=s.getImmediateChild(f)),(c=null!=p?this.filter_.updateChild(s,f,p,e.popFront(),a,i):t.getEventCache().getNode().hasChild(f)?this.filter_.updateChild(s,f,Bt.EMPTY_NODE,e.popFront(),a,i):s).isEmpty()&&t.getServerCache().isFullyInitialized()&&(o=n.calcCompleteEventCache(t.getCompleteServerSnap())).isLeafNode()&&(c=this.filter_.updateFullNode(c,o,i))}return o=t.getServerCache().isFullyInitialized()||null!=n.shadowingWrite(Z.Empty),t.updateEventSnap(c,o,this.filter_.filtersNodes())},t}(),Ee=function(){function t(t){this.query_=t,this.index_=this.query_.getQueryParams().getIndex()}return t.prototype.generateEventsForChanges=function(t,e,n){var r=this,i=[],o=[]
return t.forEach(function(t){t.type===ye.CHILD_CHANGED&&r.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(ye.childMovedChange(t.childName,t.snapshotNode))}),this.generateEventsForType_(i,ye.CHILD_REMOVED,t,n,e),this.generateEventsForType_(i,ye.CHILD_ADDED,t,n,e),this.generateEventsForType_(i,ye.CHILD_MOVED,o,n,e),this.generateEventsForType_(i,ye.CHILD_CHANGED,t,n,e),this.generateEventsForType_(i,ye.VALUE,t,n,e),i},t.prototype.generateEventsForType_=function(t,e,n,r,i){var o=this,a=n.filter(function(t){return t.type===e})
a.sort(this.compareChanges_.bind(this)),a.forEach(function(e){var n=o.materializeSingleChange_(e,i)
r.forEach(function(r){r.respondsTo(e.type)&&t.push(r.createEvent(n,o.query_))})})},t.prototype.materializeSingleChange_=function(t,e){return"value"===t.type||"child_removed"===t.type?t:(t.prevName=e.getPredecessorChildName(t.childName,t.snapshotNode,this.index_),t)},t.prototype.compareChanges_=function(t,e){if(null==t.childName||null==e.childName)throw u.assertionError("Should only compare child_ events.")
var n=new Et(t.childName,t.snapshotNode),r=new Et(e.childName,e.snapshotNode)
return this.index_.compare(n,r)},t}(),Te=function(){function t(t,e){this.query_=t,this.eventRegistrations_=[]
var n=this.query_.getQueryParams(),r=new me(n.getIndex()),i=n.getNodeFilter()
this.processor_=new we(i)
var o=e.getServerCache(),a=e.getEventCache(),s=r.updateFullNode(Bt.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(Bt.EMPTY_NODE,a.getNode(),null),c=new pe(s,o.isFullyInitialized(),r.filtersNodes()),h=new pe(u,a.isFullyInitialized(),i.filtersNodes())
this.viewCache_=new de(h,c),this.eventGenerator_=new Ee(this.query_)}return t.prototype.getQuery=function(){return this.query_},t.prototype.getServerCache=function(){return this.viewCache_.getServerCache().getNode()},t.prototype.getCompleteServerCache=function(t){var e=this.viewCache_.getCompleteServerSnap()
return e&&(this.query_.getQueryParams().loadsAllData()||!t.isEmpty()&&!e.getImmediateChild(t.getFront()).isEmpty())?e.getChild(t):null},t.prototype.isEmpty=function(){return 0===this.eventRegistrations_.length},t.prototype.addEventRegistration=function(t){this.eventRegistrations_.push(t)},t.prototype.removeEventRegistration=function(t,e){var n=[]
if(e){u.assert(null==t,"A cancel should cancel all event registrations.")
var r=this.query_.path
this.eventRegistrations_.forEach(function(t){e=e
var i=t.createCancelEvent(e,r)
i&&n.push(i)})}if(t){for(var i=[],o=0;o<this.eventRegistrations_.length;++o){var a=this.eventRegistrations_[o]
if(a.matches(t)){if(t.hasAnyCallback()){i=i.concat(this.eventRegistrations_.slice(o+1))
break}}else i.push(a)}this.eventRegistrations_=i}else this.eventRegistrations_=[]
return n},t.prototype.applyOperation=function(t,e,n){t.type===Ht.MERGE&&null!==t.source.queryId&&(u.assert(this.viewCache_.getCompleteServerSnap(),"We should always have a full cache before handling merges"),u.assert(this.viewCache_.getCompleteEventSnap(),"Missing event cache, even though we have a server cache"))
var r=this.viewCache_,i=this.processor_.applyOperation(r,t,e,n)
return this.processor_.assertIndexed(i.viewCache),u.assert(i.viewCache.getServerCache().isFullyInitialized()||!r.getServerCache().isFullyInitialized(),"Once a server snap is complete, it should never go back"),this.viewCache_=i.viewCache,this.generateEventsForChanges_(i.changes,i.viewCache.getEventCache().getNode(),null)},t.prototype.getInitialEvents=function(t){var e=this.viewCache_.getEventCache(),n=[]
return e.getNode().isLeafNode()||e.getNode().forEachChild(At,function(t,e){n.push(ye.childAddedChange(t,e))}),e.isFullyInitialized()&&n.push(ye.valueChange(e.getNode())),this.generateEventsForChanges_(n,e.getNode(),t)},t.prototype.generateEventsForChanges_=function(t,e,n){var r=n?[n]:this.eventRegistrations_
return this.eventGenerator_.generateEventsForChanges(t,e,r)},t}(),Se=function(){function t(){this.views=new Map}return Object.defineProperty(t,"__referenceConstructor",{get:function(){return u.assert(oe,"Reference.ts has not been loaded"),oe},set:function(t){u.assert(!oe,"__referenceConstructor has already been defined"),oe=t},enumerable:!0,configurable:!0}),t.prototype.isEmpty=function(){return 0===this.views.size},t.prototype.applyOperation=function(t,e,n){var r,i,o=t.source.queryId
if(null!==o){var a=this.views.get(o)
return u.assert(null!=a,"SyncTree gave us an op for an invalid query."),a.applyOperation(t,e,n)}var c=[]
try{for(var h=s.__values(this.views.values()),l=h.next();!l.done;l=h.next())a=l.value,c=c.concat(a.applyOperation(t,e,n))}catch(t){r={error:t}}finally{try{l&&!l.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}return c},t.prototype.addEventRegistration=function(t,e,n,r,i){var o=t.queryIdentifier(),a=this.views.get(o)
if(!a){var s=n.calcCompleteEventCache(i?r:null),u=!1
s?u=!0:r instanceof Bt?(s=n.calcCompleteEventChildren(r),u=!1):(s=Bt.EMPTY_NODE,u=!1)
var c=new de(new pe(s,u,!1),new pe(r,i,!1))
a=new Te(t,c),this.views.set(o,a)}return a.addEventRegistration(e),a.getInitialEvents(e)},t.prototype.removeEventRegistration=function(e,n,r){var i,o,a=e.queryIdentifier(),u=[],c=[],h=this.hasCompleteView()
if("default"===a)try{for(var l=s.__values(this.views.entries()),f=l.next();!f.done;f=l.next()){var p=s.__read(f.value,2),d=p[0],y=p[1]
c=c.concat(y.removeEventRegistration(n,r)),y.isEmpty()&&(this.views.delete(d),y.getQuery().getQueryParams().loadsAllData()||u.push(y.getQuery()))}}catch(t){i={error:t}}finally{try{f&&!f.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}else(y=this.views.get(a))&&(c=c.concat(y.removeEventRegistration(n,r)),y.isEmpty()&&(this.views.delete(a),y.getQuery().getQueryParams().loadsAllData()||u.push(y.getQuery())))
return h&&!this.hasCompleteView()&&u.push(new t.__referenceConstructor(e.repo,e.path)),{removed:u,events:c}},t.prototype.getQueryViews=function(){var t,e,n=[]
try{for(var r=s.__values(this.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value
o.getQuery().getQueryParams().loadsAllData()||n.push(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}return n},t.prototype.getCompleteServerCache=function(t){var e,n,r=null
try{for(var i=s.__values(this.views.values()),o=i.next();!o.done;o=i.next()){var a=o.value
r=r||a.getCompleteServerCache(t)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r},t.prototype.viewForQuery=function(t){if(t.getQueryParams().loadsAllData())return this.getCompleteView()
var e=t.queryIdentifier()
return this.views.get(e)},t.prototype.viewExistsForQuery=function(t){return null!=this.viewForQuery(t)},t.prototype.hasCompleteView=function(){return null!=this.getCompleteView()},t.prototype.getCompleteView=function(){var t,e
try{for(var n=s.__values(this.views.values()),r=n.next();!r.done;r=n.next()){var i=r.value
if(i.getQuery().getQueryParams().loadsAllData())return i}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}return null},t}(),Ie=function(){function t(t){this.writeTree_=t}return t.prototype.addWrite=function(e,n){if(e.isEmpty())return new t(new ce(n))
var r=this.writeTree_.findRootMostValueAndPath(e)
if(null!=r){var i=r.path,o=r.value,a=Z.relativePath(i,e)
return o=o.updateChild(a,n),new t(this.writeTree_.set(i,o))}var s=new ce(n)
return new t(this.writeTree_.setTree(e,s))},t.prototype.addWrites=function(t,e){var n=this
return L(e,function(e,r){n=n.addWrite(t.child(e),r)}),n},t.prototype.removeWrite=function(e){return e.isEmpty()?t.Empty:new t(this.writeTree_.setTree(e,ce.Empty))},t.prototype.hasCompleteWrite=function(t){return null!=this.getCompleteNode(t)},t.prototype.getCompleteNode=function(t){var e=this.writeTree_.findRootMostValueAndPath(t)
return null!=e?this.writeTree_.get(e.path).getChild(Z.relativePath(e.path,t)):null},t.prototype.getCompleteChildren=function(){var t=[],e=this.writeTree_.value
return null!=e?e.isLeafNode()||e.forEachChild(At,function(e,n){t.push(new Et(e,n))}):this.writeTree_.children.inorderTraversal(function(e,n){null!=n.value&&t.push(new Et(e,n.value))}),t},t.prototype.childCompoundWrite=function(e){if(e.isEmpty())return this
var n=this.getCompleteNode(e)
return new t(null!=n?new ce(n):this.writeTree_.subtree(e))},t.prototype.isEmpty=function(){return this.writeTree_.isEmpty()},t.prototype.apply=function(t){return function t(e,n,r){if(null!=n.value)return r.updateChild(e,n.value)
var i=null
return n.children.inorderTraversal(function(n,o){".priority"===n?(u.assert(null!==o.value,"Priority writes must always be leaf nodes"),i=o.value):r=t(e.child(n),o,r)}),r.getChild(e).isEmpty()||null===i||(r=r.updateChild(e.child(".priority"),i)),r}(Z.Empty,this.writeTree_,t)},t.Empty=new t(new ce(null)),t}(),Ce=function(){function t(){this.visibleWrites_=Ie.Empty,this.allWrites_=[],this.lastWriteId_=-1}return t.prototype.childWrites=function(t){return new Ne(t,this)},t.prototype.addOverwrite=function(t,e,n,r){u.assert(n>this.lastWriteId_,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),this.allWrites_.push({path:t,snap:e,writeId:n,visible:r}),r&&(this.visibleWrites_=this.visibleWrites_.addWrite(t,e)),this.lastWriteId_=n},t.prototype.addMerge=function(t,e,n){u.assert(n>this.lastWriteId_,"Stacking an older merge on top of newer ones"),this.allWrites_.push({path:t,children:e,writeId:n,visible:!0}),this.visibleWrites_=this.visibleWrites_.addWrites(t,e),this.lastWriteId_=n},t.prototype.getWrite=function(t){for(var e=0;e<this.allWrites_.length;e++){var n=this.allWrites_[e]
if(n.writeId===t)return n}return null},t.prototype.removeWrite=function(t){var e=this,n=this.allWrites_.findIndex(function(e){return e.writeId===t})
u.assert(n>=0,"removeWrite called with nonexistent writeId.")
var r=this.allWrites_[n]
this.allWrites_.splice(n,1)
for(var i=r.visible,o=!1,a=this.allWrites_.length-1;i&&a>=0;){var s=this.allWrites_[a]
s.visible&&(a>=n&&this.recordContainsPath_(s,r.path)?i=!1:r.path.contains(s.path)&&(o=!0)),a--}return!!i&&(o?(this.resetTree_(),!0):(r.snap?this.visibleWrites_=this.visibleWrites_.removeWrite(r.path):L(r.children,function(t){e.visibleWrites_=e.visibleWrites_.removeWrite(r.path.child(t))}),!0))},t.prototype.getCompleteWriteData=function(t){return this.visibleWrites_.getCompleteNode(t)},t.prototype.calcCompleteEventCache=function(e,n,r,i){if(r||i){var o=this.visibleWrites_.childCompoundWrite(e)
if(!i&&o.isEmpty())return n
if(i||null!=n||o.hasCompleteWrite(Z.Empty)){var a=t.layerTree_(this.allWrites_,function(t){return(t.visible||i)&&(!r||!~r.indexOf(t.writeId))&&(t.path.contains(e)||e.contains(t.path))},e)
return c=n||Bt.EMPTY_NODE,a.apply(c)}return null}var s=this.visibleWrites_.getCompleteNode(e)
if(null!=s)return s
var u=this.visibleWrites_.childCompoundWrite(e)
if(u.isEmpty())return n
if(null!=n||u.hasCompleteWrite(Z.Empty)){var c=n||Bt.EMPTY_NODE
return u.apply(c)}return null},t.prototype.calcCompleteEventChildren=function(t,e){var n=Bt.EMPTY_NODE,r=this.visibleWrites_.getCompleteNode(t)
if(r)return r.isLeafNode()||r.forEachChild(At,function(t,e){n=n.updateImmediateChild(t,e)}),n
if(e){var i=this.visibleWrites_.childCompoundWrite(t)
return e.forEachChild(At,function(t,e){var r=i.childCompoundWrite(new Z(t)).apply(e)
n=n.updateImmediateChild(t,r)}),i.getCompleteChildren().forEach(function(t){n=n.updateImmediateChild(t.name,t.node)}),n}return this.visibleWrites_.childCompoundWrite(t).getCompleteChildren().forEach(function(t){n=n.updateImmediateChild(t.name,t.node)}),n},t.prototype.calcEventCacheAfterServerOverwrite=function(t,e,n,r){u.assert(n||r,"Either existingEventSnap or existingServerSnap must exist")
var i=t.child(e)
if(this.visibleWrites_.hasCompleteWrite(i))return null
var o=this.visibleWrites_.childCompoundWrite(i)
return o.isEmpty()?r.getChild(e):o.apply(r.getChild(e))},t.prototype.calcCompleteChild=function(t,e,n){var r=t.child(e),i=this.visibleWrites_.getCompleteNode(r)
return null!=i?i:n.isCompleteForChild(e)?this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(e)):null},t.prototype.shadowingWrite=function(t){return this.visibleWrites_.getCompleteNode(t)},t.prototype.calcIndexedSlice=function(t,e,n,r,i,o){var a,s=this.visibleWrites_.childCompoundWrite(t),u=s.getCompleteNode(Z.Empty)
if(null!=u)a=u
else{if(null==e)return[]
a=s.apply(e)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[]
for(var c=[],h=o.getCompare(),l=i?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o),f=l.getNext();f&&c.length<r;)0!==h(f,n)&&c.push(f),f=l.getNext()
return c},t.prototype.recordContainsPath_=function(t,e){if(t.snap)return t.path.contains(e)
for(var n in t.children)if(t.children.hasOwnProperty(n)&&t.path.child(n).contains(e))return!0
return!1},t.prototype.resetTree_=function(){this.visibleWrites_=t.layerTree_(this.allWrites_,t.DefaultFilter_,Z.Empty),this.allWrites_.length>0?this.lastWriteId_=this.allWrites_[this.allWrites_.length-1].writeId:this.lastWriteId_=-1},t.DefaultFilter_=function(t){return t.visible},t.layerTree_=function(t,e,n){for(var r=Ie.Empty,i=0;i<t.length;++i){var o=t[i]
if(e(o)){var a=o.path,s=void 0
if(o.snap)n.contains(a)?(s=Z.relativePath(n,a),r=r.addWrite(s,o.snap)):a.contains(n)&&(s=Z.relativePath(a,n),r=r.addWrite(Z.Empty,o.snap.getChild(s)))
else{if(!o.children)throw u.assertionError("WriteRecord should have .snap or .children")
if(n.contains(a))s=Z.relativePath(n,a),r=r.addWrites(s,o.children)
else if(a.contains(n))if((s=Z.relativePath(a,n)).isEmpty())r=r.addWrites(Z.Empty,o.children)
else{var c=u.safeGet(o.children,s.getFront())
if(c){var h=c.getChild(s.popFront())
r=r.addWrite(Z.Empty,h)}}}}}return r},t}(),Ne=function(){function t(t,e){this.treePath_=t,this.writeTree_=e}return t.prototype.calcCompleteEventCache=function(t,e,n){return this.writeTree_.calcCompleteEventCache(this.treePath_,t,e,n)},t.prototype.calcCompleteEventChildren=function(t){return this.writeTree_.calcCompleteEventChildren(this.treePath_,t)},t.prototype.calcEventCacheAfterServerOverwrite=function(t,e,n){return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_,t,e,n)},t.prototype.shadowingWrite=function(t){return this.writeTree_.shadowingWrite(this.treePath_.child(t))},t.prototype.calcIndexedSlice=function(t,e,n,r,i){return this.writeTree_.calcIndexedSlice(this.treePath_,t,e,n,r,i)},t.prototype.calcCompleteChild=function(t,e){return this.writeTree_.calcCompleteChild(this.treePath_,t,e)},t.prototype.child=function(e){return new t(this.treePath_.child(e),this.writeTree_)},t}(),ke=function(){function t(t){this.listenProvider_=t,this.syncPointTree_=ce.Empty,this.pendingWriteTree_=new Ce,this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return t.prototype.applyUserOverwrite=function(t,e,n,r){return this.pendingWriteTree_.addOverwrite(t,e,n,r),r?this.applyOperationToSyncPoints_(new le(ae.User,t,e)):[]},t.prototype.applyUserMerge=function(t,e,n){this.pendingWriteTree_.addMerge(t,e,n)
var r=ce.fromObject(e)
return this.applyOperationToSyncPoints_(new fe(ae.User,t,r))},t.prototype.ackUserWrite=function(t,e){void 0===e&&(e=!1)
var n=this.pendingWriteTree_.getWrite(t)
if(this.pendingWriteTree_.removeWrite(t)){var r=ce.Empty
return null!=n.snap?r=r.set(Z.Empty,!0):L(n.children,function(t,e){r=r.set(new Z(t),e)}),this.applyOperationToSyncPoints_(new se(n.path,r,e))}return[]},t.prototype.applyServerOverwrite=function(t,e){return this.applyOperationToSyncPoints_(new le(ae.Server,t,e))},t.prototype.applyServerMerge=function(t,e){var n=ce.fromObject(e)
return this.applyOperationToSyncPoints_(new fe(ae.Server,t,n))},t.prototype.applyListenComplete=function(t){return this.applyOperationToSyncPoints_(new he(ae.Server,t))},t.prototype.applyTaggedQueryOverwrite=function(e,n,r){var i=this.queryKeyForTag_(r)
if(null!=i){var o=t.parseQueryKey_(i),a=o.path,s=o.queryId,u=Z.relativePath(a,e),c=new le(ae.forServerTaggedQuery(s),u,n)
return this.applyTaggedOperation_(a,c)}return[]},t.prototype.applyTaggedQueryMerge=function(e,n,r){var i=this.queryKeyForTag_(r)
if(i){var o=t.parseQueryKey_(i),a=o.path,s=o.queryId,u=Z.relativePath(a,e),c=ce.fromObject(n),h=new fe(ae.forServerTaggedQuery(s),u,c)
return this.applyTaggedOperation_(a,h)}return[]},t.prototype.applyTaggedListenComplete=function(e,n){var r=this.queryKeyForTag_(n)
if(r){var i=t.parseQueryKey_(r),o=i.path,a=i.queryId,s=Z.relativePath(o,e),u=new he(ae.forServerTaggedQuery(a),s)
return this.applyTaggedOperation_(o,u)}return[]},t.prototype.addEventRegistration=function(e,n){var r=e.path,i=null,o=!1
this.syncPointTree_.foreachOnPath(r,function(t,e){var n=Z.relativePath(t,r)
i=i||e.getCompleteServerCache(n),o=o||e.hasCompleteView()})
var a,s=this.syncPointTree_.get(r)
s?(o=o||s.hasCompleteView(),i=i||s.getCompleteServerCache(Z.Empty)):(s=new Se,this.syncPointTree_=this.syncPointTree_.set(r,s)),null!=i?a=!0:(a=!1,i=Bt.EMPTY_NODE,this.syncPointTree_.subtree(r).foreachChild(function(t,e){var n=e.getCompleteServerCache(Z.Empty)
n&&(i=i.updateImmediateChild(t,n))}))
var c=s.viewExistsForQuery(e)
if(!c&&!e.getQueryParams().loadsAllData()){var h=t.makeQueryKey_(e)
u.assert(!this.queryToTagMap.has(h),"View does not exist, but we have a tag")
var l=t.getNextQueryTag_()
this.queryToTagMap.set(h,l),this.tagToQueryMap.set(l,h)}var f=this.pendingWriteTree_.childWrites(r),p=s.addEventRegistration(e,n,f,i,a)
if(!c&&!o){var d=s.viewForQuery(e)
p=p.concat(this.setupListener_(e,d))}return p},t.prototype.removeEventRegistration=function(e,n,r){var i=this,o=e.path,a=this.syncPointTree_.get(o),s=[]
if(a&&("default"===e.queryIdentifier()||a.viewExistsForQuery(e))){var u=a.removeEventRegistration(e,n,r)
a.isEmpty()&&(this.syncPointTree_=this.syncPointTree_.remove(o))
var c=u.removed
s=u.events
var h=-1!==c.findIndex(function(t){return t.getQueryParams().loadsAllData()}),l=this.syncPointTree_.findOnPath(o,function(t,e){return e.hasCompleteView()})
if(h&&!l){var f=this.syncPointTree_.subtree(o)
if(!f.isEmpty())for(var p=this.collectDistinctViewsForSubTree_(f),d=0;d<p.length;++d){var y=p[d],m=y.getQuery(),g=this.createListenerForView_(y)
this.listenProvider_.startListening(t.queryForListening_(m),this.tagForQuery_(m),g.hashFn,g.onComplete)}}!l&&c.length>0&&!r&&(h?this.listenProvider_.stopListening(t.queryForListening_(e),null):c.forEach(function(e){var n=i.queryToTagMap.get(t.makeQueryKey_(e))
i.listenProvider_.stopListening(t.queryForListening_(e),n)})),this.removeTags_(c)}return s},t.prototype.calcCompleteEventCache=function(t,e){var n=this.pendingWriteTree_,r=this.syncPointTree_.findOnPath(t,function(e,n){var r=Z.relativePath(e,t),i=n.getCompleteServerCache(r)
if(i)return i})
return n.calcCompleteEventCache(t,r,e,!0)},t.prototype.collectDistinctViewsForSubTree_=function(t){return t.fold(function(t,e,n){if(e&&e.hasCompleteView())return[e.getCompleteView()]
var r=[]
return e&&(r=e.getQueryViews()),L(n,function(t,e){r=r.concat(e)}),r})},t.prototype.removeTags_=function(e){for(var n=0;n<e.length;++n){var r=e[n]
if(!r.getQueryParams().loadsAllData()){var i=t.makeQueryKey_(r),o=this.queryToTagMap.get(i)
this.queryToTagMap.delete(i),this.tagToQueryMap.delete(o)}}},t.queryForListening_=function(t){return t.getQueryParams().loadsAllData()&&!t.getQueryParams().isDefault()?t.getRef():t},t.prototype.setupListener_=function(e,n){var r=e.path,i=this.tagForQuery_(e),o=this.createListenerForView_(n),a=this.listenProvider_.startListening(t.queryForListening_(e),i,o.hashFn,o.onComplete),s=this.syncPointTree_.subtree(r)
if(i)u.assert(!s.value.hasCompleteView(),"If we're adding a query, it shouldn't be shadowed")
else for(var c=s.fold(function(t,e,n){if(!t.isEmpty()&&e&&e.hasCompleteView())return[e.getCompleteView().getQuery()]
var r=[]
return e&&(r=r.concat(e.getQueryViews().map(function(t){return t.getQuery()}))),L(n,function(t,e){r=r.concat(e)}),r}),h=0;h<c.length;++h){var l=c[h]
this.listenProvider_.stopListening(t.queryForListening_(l),this.tagForQuery_(l))}return a},t.prototype.createListenerForView_=function(t){var e=this,n=t.getQuery(),r=this.tagForQuery_(n)
return{hashFn:function(){return(t.getServerCache()||Bt.EMPTY_NODE).hash()},onComplete:function(t){if("ok"===t)return r?e.applyTaggedListenComplete(n.path,r):e.applyListenComplete(n.path)
var i=function(t,e){var n="Unknown Error"
"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==t?n="Client doesn't have permission to access the desired data.":"unavailable"==t&&(n="The service is unavailable")
var r=new Error(t+" at "+e.path.toString()+": "+n)
return r.code=t.toUpperCase(),r}(t,n)
return e.removeEventRegistration(n,null,i)}}},t.makeQueryKey_=function(t){return t.path.toString()+"$"+t.queryIdentifier()},t.parseQueryKey_=function(t){var e=t.indexOf("$")
return u.assert(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}},t.prototype.queryKeyForTag_=function(t){return this.tagToQueryMap.get(t)},t.prototype.tagForQuery_=function(e){var n=t.makeQueryKey_(e)
return this.queryToTagMap.get(n)},t.getNextQueryTag_=function(){return t.nextQueryTag_++},t.prototype.applyTaggedOperation_=function(t,e){var n=this.syncPointTree_.get(t)
u.assert(n,"Missing sync point for query tag that we're tracking")
var r=this.pendingWriteTree_.childWrites(t)
return n.applyOperation(e,r,null)},t.prototype.applyOperationToSyncPoints_=function(t){return this.applyOperationHelper_(t,this.syncPointTree_,null,this.pendingWriteTree_.childWrites(Z.Empty))},t.prototype.applyOperationHelper_=function(t,e,n,r){if(t.path.isEmpty())return this.applyOperationDescendantsHelper_(t,e,n,r)
var i=e.get(Z.Empty)
null==n&&null!=i&&(n=i.getCompleteServerCache(Z.Empty))
var o=[],a=t.path.getFront(),s=t.operationForChild(a),u=e.children.get(a)
if(u&&s){var c=n?n.getImmediateChild(a):null,h=r.child(a)
o=o.concat(this.applyOperationHelper_(s,u,c,h))}return i&&(o=o.concat(i.applyOperation(t,r,n))),o},t.prototype.applyOperationDescendantsHelper_=function(t,e,n,r){var i=this,o=e.get(Z.Empty)
null==n&&null!=o&&(n=o.getCompleteServerCache(Z.Empty))
var a=[]
return e.children.inorderTraversal(function(e,o){var s=n?n.getImmediateChild(e):null,u=r.child(e),c=t.operationForChild(e)
c&&(a=a.concat(i.applyOperationDescendantsHelper_(c,o,s,u)))}),o&&(a=a.concat(o.applyOperation(t,r,n))),a},t.nextQueryTag_=1,t}(),Ae=function(){function t(){this.rootNode_=Bt.EMPTY_NODE}return t.prototype.getNode=function(t){return this.rootNode_.getChild(t)},t.prototype.updateSnapshot=function(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)},t}(),De=function(){function t(t){this.app_=t}return t.prototype.getToken=function(t){return this.app_.INTERNAL.getToken(t).then(null,function(t){return t&&"auth/token-not-initialized"===t.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)})},t.prototype.addTokenChangeListener=function(t){this.app_.INTERNAL.addAuthTokenListener(t)},t.prototype.removeTokenChangeListener=function(t){this.app_.INTERNAL.removeAuthTokenListener(t)},t.prototype.notifyForInvalidToken=function(){var t='Provided authentication credentials for the app named "'+this.app_.name+'" are invalid. This usually indicates your app was not initialized correctly. '
"credential"in this.app_.options?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.app_.options?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',N(t)},t}(),Re=function(t){this.accessToken=t},Oe=function(){function t(t){this.app_=t}return t.prototype.getToken=function(t){return Promise.resolve(new Re("owner"))},t.prototype.addTokenChangeListener=function(t){},t.prototype.removeTokenChangeListener=function(t){},t.prototype.notifyForInvalidToken=function(){N('Database emulator unexpectedly rejected fake "owner" credentials.')},t}(),Pe=function(){function t(){this.counters_={}}return t.prototype.incrementCounter=function(t,e){void 0===e&&(e=1),u.contains(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e},t.prototype.get=function(){return u.deepCopy(this.counters_)},t}(),xe=function(){function t(){}return t.getCollection=function(t){var e=t.toString()
return this.collections_[e]||(this.collections_[e]=new Pe),this.collections_[e]},t.getOrCreateReporter=function(t,e){var n=t.toString()
return this.reporters_[n]||(this.reporters_[n]=e()),this.reporters_[n]},t.collections_={},t.reporters_={},t}(),Me=function(){function t(t){this.collection_=t,this.last_=null}return t.prototype.get=function(){var t=this.collection_.get(),e=s.__assign({},t)
return this.last_&&L(this.last_,function(t,n){e[t]=e[t]-n}),this.last_=t,e},t}(),Le=1e4,Fe=3e4,Ue=function(){function t(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Me(t)
var n=Le+(Fe-Le)*Math.random()
$(this.reportStats_.bind(this),Math.floor(n))}return t.prototype.includeStat=function(t){this.statsToReport_[t]=!0},t.prototype.reportStats_=function(){var t=this,e=this.statsListener_.get(),n={},r=!1
L(e,function(e,i){i>0&&u.contains(t.statsToReport_,e)&&(n[e]=i,r=!0)}),r&&this.server_.reportStats(n),$(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))},t}(),qe=function(){function t(){this.eventLists_=[],this.recursionDepth_=0}return t.prototype.queueEvents=function(t){for(var e=null,n=0;n<t.length;n++){var r=t[n],i=r.getPath()
null===e||i.equals(e.getPath())||(this.eventLists_.push(e),e=null),null===e&&(e=new Ve(i)),e.add(r)}e&&this.eventLists_.push(e)},t.prototype.raiseEventsAtPath=function(t,e){this.queueEvents(e),this.raiseQueuedEventsMatchingPredicate_(function(e){return e.equals(t)})},t.prototype.raiseEventsForChangedPath=function(t,e){this.queueEvents(e),this.raiseQueuedEventsMatchingPredicate_(function(e){return e.contains(t)||t.contains(e)})},t.prototype.raiseQueuedEventsMatchingPredicate_=function(t){this.recursionDepth_++
for(var e=!0,n=0;n<this.eventLists_.length;n++){var r=this.eventLists_[n]
r&&(t(r.getPath())?(this.eventLists_[n].raise(),this.eventLists_[n]=null):e=!1)}e&&(this.eventLists_=[]),this.recursionDepth_--},t}(),Ve=function(){function t(t){this.path_=t,this.events_=[]}return t.prototype.add=function(t){this.events_.push(t)},t.prototype.raise=function(){for(var t=0;t<this.events_.length;t++){var e=this.events_[t]
if(null!==e){this.events_[t]=null
var n=e.getEventRunner()
b&&T("event: "+e.toString()),X(n)}}},t.prototype.getPath=function(){return this.path_},t}(),Be=function(){function t(t){this.allowedEvents_=t,this.listeners_={},u.assert(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}return t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(Array.isArray(this.listeners_[t]))for(var r=s.__spread(this.listeners_[t]),i=0;i<r.length;i++)r[i].callback.apply(r[i].context,e)},t.prototype.on=function(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n})
var r=this.getInitialEvent(t)
r&&e.apply(n,r)},t.prototype.off=function(t,e,n){this.validateEventType_(t)
for(var r=this.listeners_[t]||[],i=0;i<r.length;i++)if(r[i].callback===e&&(!n||n===r[i].context))return void r.splice(i,1)},t.prototype.validateEventType_=function(t){u.assert(this.allowedEvents_.find(function(e){return e===t}),"Unknown event: "+t)},t}(),je=function(t){function e(){var e,n,r=t.call(this,["visible"])||this
return"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(n="visibilitychange",e="hidden"):void 0!==document.mozHidden?(n="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(n="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(n="webkitvisibilitychange",e="webkitHidden")),r.visible_=!0,n&&document.addEventListener(n,function(){var t=!document[e]
t!==r.visible_&&(r.visible_=t,r.trigger("visible",t))},!1),r}return s.__extends(e,t),e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(t){return u.assert("visible"===t,"Unknown event type: "+t),[this.visible_]},e}(Be),We=function(t){function e(){var e=t.call(this,["online"])||this
return e.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||u.isMobileCordova()||(window.addEventListener("online",function(){e.online_||(e.online_=!0,e.trigger("online",!0))},!1),window.addEventListener("offline",function(){e.online_&&(e.online_=!1,e.trigger("online",!1))},!1)),e}return s.__extends(e,t),e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(t){return u.assert("online"===t,"Unknown event type: "+t),[this.online_]},e.prototype.currentlyOnline=function(){return this.online_},e}(Be),Qe=function(){function t(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return t.prototype.closeAfter=function(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},t.prototype.handleResponse=function(t,e){var n=this
this.pendingResponses[t]=e
for(var r=function(){var t=i.pendingResponses[i.currentResponseNum]
delete i.pendingResponses[i.currentResponseNum]
for(var e=function(e){t[e]&&X(function(){n.onMessage_(t[e])})},r=0;r<t.length;++r)e(r)
if(i.currentResponseNum===i.closeAfterResponse)return i.onClose&&(i.onClose(),i.onClose=null),"break"
i.currentResponseNum++},i=this;this.pendingResponses[this.currentResponseNum]&&"break"!==r(););},t}(),Ke="pLPCommand",He="pRTLPCB",Ge=function(){function t(t,e,n,r){this.connId=t,this.repoInfo=e,this.transportSessionId=n,this.lastSessionId=r,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=S(t),this.stats_=xe.getCollection(e),this.urlFn=function(t){return e.connectionURL(et,t)}}return t.prototype.open=function(t,e){var n=this
this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new Qe(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){n.log_("Timed out trying to connect."),n.onClosed_(),n.connectTimeoutTimer_=null},Math.floor(3e4)),function(t){if(u.isNodeSdk()||"complete"===document.readyState)t()
else{var e=!1,n=function n(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))}
document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}}(function(){if(!n.isClosed_){n.scriptTagHolder=new ze(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var r=s.__read(t,5),i=r[0],o=r[1],a=r[2]
if(r[3],r[4],n.incrementIncomingBytes_(t),n.scriptTagHolder)if(n.connectTimeoutTimer_&&(clearTimeout(n.connectTimeoutTimer_),n.connectTimeoutTimer_=null),n.everConnected_=!0,"start"==i)n.id=o,n.password=a
else{if("close"!==i)throw new Error("Unrecognized command received: "+i)
o?(n.scriptTagHolder.sendNewPolls=!1,n.myPacketOrderer.closeAfter(o,function(){n.onClosed_()})):n.onClosed_()}},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var r=s.__read(t,2),i=r[0],o=r[1]
n.incrementIncomingBytes_(t),n.myPacketOrderer.handleResponse(i,o)},function(){n.onClosed_()},n.urlFn)
var t={start:"t"}
t.ser=Math.floor(1e8*Math.random()),n.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=n.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",n.transportSessionId&&(t.s=n.transportSessionId),n.lastSessionId&&(t.ls=n.lastSessionId),!u.isNodeSdk()&&"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(t.r="f")
var e=n.urlFn(t)
n.log_("Connecting via long-poll to "+e),n.scriptTagHolder.addTag(e,function(){})}})},t.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},t.forceAllow=function(){t.forceAllow_=!0},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){return t.forceAllow_||!t.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"===("undefined"==typeof window?"undefined":r(window))&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===("undefined"==typeof Windows?"undefined":r(Windows))&&"object"===r(Windows.UI))&&!u.isNodeSdk()},t.prototype.markConnectionHealthy=function(){},t.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},t.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},t.prototype.send=function(t){var e=u.stringify(t)
this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length)
for(var n=u.base64Encode(e),r=M(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++},t.prototype.addDisconnectPingFrame=function(t,e){if(!u.isNodeSdk()){this.myDisconnFrame=document.createElement("iframe")
var n={dframe:"t"}
n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}},t.prototype.incrementIncomingBytes_=function(t){var e=u.stringify(t).length
this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)},t}(),ze=function(){function t(e,n,r,i){if(this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,u.isNodeSdk())this.commandCB=e,this.onMessageCB=n
else{this.uniqueCallbackIdentifier=g(),window[Ke+this.uniqueCallbackIdentifier]=e,window[He+this.uniqueCallbackIdentifier]=n,this.myIFrame=t.createIFrame_()
var o=""
this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)&&(o='<script>document.domain="'+document.domain+'";<\/script>')
var a="<html><body>"+o+"</body></html>"
try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(t){T("frame writing exception"),t.stack&&T(t.stack),T(t)}}}return t.createIFrame_=function(){var t=document.createElement("iframe")
if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready."
document.body.appendChild(t)
try{t.contentWindow.document||T("No IE domain setting required")}catch(n){var e=document.domain
t.src="javascript:void((function(){document.open();document.domain='"+e+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t},t.prototype.close=function(){var e=this
if(this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)},Math.floor(0))),u.isNodeSdk()&&this.myID){var n={disconn:"t"}
n.id=this.myID,n.pw=this.myPW
var r=this.urlFn(n)
t.nodeRestRequest(r)}var i=this.onDisconnect
i&&(this.onDisconnect=null,i())},t.prototype.startLongPoll=function(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););},t.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++
var t={}
t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial
for(var e=this.urlFn(t),n="",r=0;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+30+n.length<=1870;){var i=this.pendingSegs.shift()
n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1},t.prototype.enqueueSegment=function(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()},t.prototype.addLongPollTag_=function(t,e){var n=this
this.outstandingRequests.add(e)
var r=function(){n.outstandingRequests.delete(e),n.newRequest_()},i=setTimeout(r,Math.floor(25e3))
this.addTag(t,function(){clearTimeout(i),r()})},t.prototype.addTag=function(t,e){var n=this
u.isNodeSdk()?this.doNodeLongPoll(t,e):setTimeout(function(){try{if(!n.sendNewPolls)return
var r=n.myIFrame.doc.createElement("script")
r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){var t=r.readyState
t&&"loaded"!==t&&"complete"!==t||(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),e())},r.onerror=function(){T("Long-poll script failed to load: "+t),n.sendNewPolls=!1,n.close()},n.myIFrame.doc.body.appendChild(r)}catch(t){}},Math.floor(1))},t}(),Ye="",Xe=null
"undefined"!=typeof MozWebSocket?Xe=MozWebSocket:"undefined"!=typeof WebSocket&&(Xe=WebSocket)
var Je=function(){function t(e,n,r,i){this.connId=e,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=S(this.connId),this.stats_=xe.getCollection(n),this.connURL=t.connectionURL_(n,r,i)}return t.connectionURL_=function(t,e,n){var r={v:"5"}
return!u.isNodeSdk()&&"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(r.r="f"),e&&(r.s=e),n&&(r.ls=n),t.connectionURL("websocket",r)},t.prototype.open=function(t,e){var n=this
this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0)
try{if(u.isNodeSdk()){var r=u.CONSTANTS.NODE_ADMIN?"AdminNode":"Node",i={headers:{"User-Agent":"Firebase/5/"+Ye+"/"+process.platform+"/"+r}},o=process.env,a=0==this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy
a&&(i.proxy={origin:a}),this.mySock=new Xe(this.connURL,[],i)}else this.mySock=new Xe(this.connURL)}catch(t){this.log_("Error instantiating WebSocket.")
var s=t.message||t.data
return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(t){n.handleIncomingFrame(t)},this.mySock.onerror=function(t){n.log_("WebSocket error.  Closing connection.")
var e=t.message||t.data
e&&n.log_(e),n.onClosed_()}},t.prototype.start=function(){},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){var e=!1
if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/)
n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Xe&&!t.forceDisallow_},t.previouslyFailed=function(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")},t.prototype.markConnectionHealthy=function(){p.remove("previous_websocket_failure")},t.prototype.appendFrame_=function(t){if(this.frames.push(t),this.frames.length==this.totalFrames){var e=this.frames.join("")
this.frames=null
var n=u.jsonEval(e)
this.onMessage(n)}},t.prototype.handleNewFrameCount_=function(t){this.totalFrames=t,this.frames=[]},t.prototype.extractFrameCount_=function(t){if(u.assert(null===this.frames,"We already have a frame buffer"),t.length<=6){var e=Number(t)
if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t},t.prototype.handleIncomingFrame=function(t){if(null!==this.mySock){var e=t.data
if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e)
else{var n=this.extractFrameCount_(e)
null!==n&&this.appendFrame_(n)}}},t.prototype.send=function(t){this.resetKeepAlive()
var e=u.stringify(t)
this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length)
var n=M(e,16384)
n.length>1&&this.sendString_(String(n.length))
for(var r=0;r<n.length;r++)this.sendString_(n[r])},t.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},t.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},t.prototype.resetKeepAlive=function(){var t=this
clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){t.mySock&&t.sendString_("0"),t.resetKeepAlive()},Math.floor(45e3))},t.prototype.sendString_=function(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},t.responsesRequiredToBeHealthy=2,t.healthyTimeout=3e4,t}(),$e=function(){function t(t){this.initTransports_(t)}return Object.defineProperty(t,"ALL_TRANSPORTS",{get:function(){return[Ge,Je]},enumerable:!0,configurable:!0}),t.prototype.initTransports_=function(e){var n,r,i=Je&&Je.isAvailable(),o=i&&!Je.previouslyFailed()
if(e.webSocketOnly&&(i||N("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[Je]
else{var a=this.transports_=[]
try{for(var u=s.__values(t.ALL_TRANSPORTS),c=u.next();!c.done;c=u.next()){var h=c.value
h&&h.isAvailable()&&a.push(h)}}catch(t){n={error:t}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}}},t.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0]
throw new Error("No transports available")},t.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},t}(),Ze=function(){function t(t,e,n,r,i,o,a){this.id=t,this.repoInfo_=e,this.onMessage_=n,this.onReady_=r,this.onDisconnect_=i,this.onKill_=o,this.lastSessionId=a,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=S("c:"+this.id+":"),this.transportManager_=new $e(e),this.log_("Connection created"),this.start_()}return t.prototype.start_=function(){var t=this,e=this.transportManager_.initialTransport()
this.conn_=new e(this.nextTransportId_(),this.repoInfo_,void 0,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0
var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_)
this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){t.conn_&&t.conn_.open(n,r)},Math.floor(0))
var i=e.healthyTimeout||0
i>0&&(this.healthyTimeout_=$(function(){t.healthyTimeout_=null,t.isHealthy_||(t.conn_&&t.conn_.bytesReceived>102400?(t.log_("Connection exceeded healthy timeout but has received "+t.conn_.bytesReceived+" bytes.  Marking connection healthy."),t.isHealthy_=!0,t.conn_.markConnectionHealthy()):t.conn_&&t.conn_.bytesSent>10240?t.log_("Connection exceeded healthy timeout but has sent "+t.conn_.bytesSent+" bytes.  Leaving connection alive."):(t.log_("Closing unhealthy connection after timeout."),t.close()))},Math.floor(i)))},t.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},t.prototype.disconnReceiver_=function(t){var e=this
return function(n){t===e.conn_?e.onConnectionLost_(n):t===e.secondaryConn_?(e.log_("Secondary connection lost."),e.onSecondaryConnectionLost_()):e.log_("closing an old connection")}},t.prototype.connReceiver_=function(t){var e=this
return function(n){2!=e.state_&&(t===e.rx_?e.onPrimaryMessageReceived_(n):t===e.secondaryConn_?e.onSecondaryMessageReceived_(n):e.log_("message on old connection"))}},t.prototype.sendRequest=function(t){var e={t:"d",d:t}
this.sendData_(e)},t.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},t.prototype.onSecondaryControl_=function(t){if("t"in t){var e=t.t
"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},t.prototype.onSecondaryMessageReceived_=function(t){var e=P("t",t),n=P("d",t)
if("c"==e)this.onSecondaryControl_(n)
else{if("d"!=e)throw new Error("Unknown protocol layer: "+e)
this.pendingDataMessages.push(n)}},t.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))},t.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},t.prototype.onPrimaryMessageReceived_=function(t){var e=P("t",t),n=P("d",t)
"c"==e?this.onControl_(n):"d"==e&&this.onDataMessage_(n)},t.prototype.onDataMessage_=function(t){this.onPrimaryResponse_(),this.onMessage_(t)},t.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},t.prototype.onControl_=function(t){var e=P("t",t)
if("d"in t){var n=t.d
if("h"===e)this.onHandshake_(n)
else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_
for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r])
this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?I("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+e)}},t.prototype.onHandshake_=function(t){var e=t.ts,n=t.v,r=t.h
this.sessionId=t.s,this.repoInfo_.updateHost(r),0==this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==n&&N("Protocol version mismatch detected"),this.tryStartUpgrade_())},t.prototype.tryStartUpgrade_=function(){var t=this.transportManager_.upgradeTransport()
t&&this.startUpgrade_(t)},t.prototype.startUpgrade_=function(t){var e=this
this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0
var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_)
this.secondaryConn_.open(n,r),$(function(){e.secondaryConn_&&(e.log_("Timed out trying to upgrade."),e.secondaryConn_.close())},Math.floor(6e4))},t.prototype.onReset_=function(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.updateHost(t),1===this.state_?this.close():(this.closeConnections_(),this.start_())},t.prototype.onConnectionEstablished_=function(t,e){var n=this
this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$(function(){n.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))},t.prototype.sendPingOnPrimaryIfNecessary_=function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))},t.prototype.onSecondaryConnectionLost_=function(){var t=this.secondaryConn_
this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()},t.prototype.onConnectionLost_=function(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()},t.prototype.onConnectionShutdown_=function(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()},t.prototype.sendData_=function(t){if(1!==this.state_)throw"Connection is not connected"
this.tx_.send(t)},t.prototype.close=function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},t.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},t}(),tn=function(){function t(){}return t.prototype.put=function(t,e,n,r){},t.prototype.merge=function(t,e,n,r){},t.prototype.refreshAuthToken=function(t){},t.prototype.onDisconnectPut=function(t,e,n){},t.prototype.onDisconnectMerge=function(t,e,n){},t.prototype.onDisconnectCancel=function(t,e){},t.prototype.reportStats=function(t){},t}(),en=1e3,nn=3e5,rn=function(t){function e(n,r,i,o,a,s){var c=t.call(this)||this
if(c.repoInfo_=n,c.onDataUpdate_=r,c.onConnectStatus_=i,c.onServerInfoUpdate_=o,c.authTokenProvider_=a,c.authOverride_=s,c.id=e.nextPersistentConnectionId_++,c.log_=S("p:"+c.id+":"),c.interruptReasons_={},c.listens=new Map,c.outstandingPuts_=[],c.outstandingPutCount_=0,c.onDisconnectRequestQueue_=[],c.connected_=!1,c.reconnectDelay_=en,c.maxReconnectDelay_=nn,c.securityDebugCallback_=null,c.lastSessionId=null,c.establishConnectionTimer_=null,c.visible_=!1,c.requestCBHash_={},c.requestNumber_=0,c.realtime_=null,c.authToken_=null,c.forceTokenRefresh_=!1,c.invalidAuthTokenCount_=0,c.firstConnection_=!0,c.lastConnectionAttemptTime_=null,c.lastConnectionEstablishedTime_=null,s&&!u.isNodeSdk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms")
return c.scheduleConnect_(0),je.getInstance().on("visible",c.onVisible_,c),-1===n.host.indexOf("fblocal")&&We.getInstance().on("online",c.onOnline_,c),c}return s.__extends(e,t),e.prototype.sendRequest=function(t,e,n){var r=++this.requestNumber_,i={r:r,a:t,b:e}
this.log_(u.stringify(i)),u.assert(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)},e.prototype.listen=function(t,e,n,r){var i=t.queryIdentifier(),o=t.path.toString()
this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),u.assert(t.getQueryParams().isDefault()||!t.getQueryParams().loadsAllData(),"listen() called for non-default but complete query"),u.assert(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.")
var a={onComplete:r,hashFn:e,query:t,tag:n}
this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)},e.prototype.sendListen_=function(t){var n=this,r=t.query,i=r.path.toString(),o=r.queryIdentifier()
this.log_("Listen on "+i+" for "+o)
var a={p:i}
t.tag&&(a.q=r.queryObject(),a.t=t.tag),a.h=t.hashFn(),this.sendRequest("q",a,function(a){var s=a.d,u=a.s
e.warnOnListenWarnings_(s,r),(n.listens.get(i)&&n.listens.get(i).get(o))===t&&(n.log_("listen response",a),"ok"!==u&&n.removeListen_(i,o),t.onComplete&&t.onComplete(u,s))})},e.warnOnListenWarnings_=function(t,e){if(t&&"object"===r(t)&&u.contains(t,"w")){var n=u.safeGet(t,"w")
if(Array.isArray(n)&&~n.indexOf("no_index")){var i='".indexOn": "'+e.getQueryParams().getIndex().toString()+'"',o=e.path.toString()
N("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding "+i+" at "+o+" to your security rules for better performance.")}}},e.prototype.refreshAuthToken=function(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(t)},e.prototype.reduceReconnectDelayIfAdminCredential_=function(t){(t&&40===t.length||u.isAdmin(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)},e.prototype.tryAuth=function(){var t=this
if(this.connected_&&this.authToken_){var e=this.authToken_,n=u.isValidFormat(e)?"auth":"gauth",i={cred:e}
null===this.authOverride_?i.noauth=!0:"object"===r(this.authOverride_)&&(i.authvar=this.authOverride_),this.sendRequest(n,i,function(n){var r=n.s,i=n.d||"error"
t.authToken_===e&&("ok"===r?t.invalidAuthTokenCount_=0:t.onAuthRevoked_(r,i))})}},e.prototype.unlisten=function(t,e){var n=t.path.toString(),r=t.queryIdentifier()
this.log_("Unlisten called for "+n+" "+r),u.assert(t.getQueryParams().isDefault()||!t.getQueryParams().loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,t.queryObject(),e)},e.prototype.sendUnlisten_=function(t,e,n,r){this.log_("Unlisten on "+t+" for "+e)
var i={p:t}
r&&(i.q=n,i.t=r),this.sendRequest("n",i)},e.prototype.onDisconnectPut=function(t,e,n){this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})},e.prototype.onDisconnectMerge=function(t,e,n){this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})},e.prototype.onDisconnectCancel=function(t,e){this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})},e.prototype.sendOnDisconnect_=function(t,e,n,r){var i={p:e,d:n}
this.log_("onDisconnect "+t,i),this.sendRequest(t,i,function(t){r&&setTimeout(function(){r(t.s,t.d)},Math.floor(0))})},e.prototype.put=function(t,e,n,r){this.putInternal("p",t,e,n,r)},e.prototype.merge=function(t,e,n,r){this.putInternal("m",t,e,n,r)},e.prototype.putInternal=function(t,e,n,r,i){var o={p:e,d:n}
void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++
var a=this.outstandingPuts_.length-1
this.connected_?this.sendPut_(a):this.log_("Buffering put: "+e)},e.prototype.sendPut_=function(t){var e=this,n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete
this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,function(r){e.log_(n+" response",r),delete e.outstandingPuts_[t],e.outstandingPutCount_--,0===e.outstandingPutCount_&&(e.outstandingPuts_=[]),i&&i(r.s,r.d)})},e.prototype.reportStats=function(t){var e=this
if(this.connected_){var n={c:t}
this.log_("reportStats",n),this.sendRequest("s",n,function(t){if("ok"!==t.s){var n=t.d
e.log_("reportStats","Error sending stats: "+n)}})}},e.prototype.onDataMessage_=function(t){if("r"in t){this.log_("from server: "+u.stringify(t))
var e=t.r,n=this.requestCBHash_[e]
n&&(delete this.requestCBHash_[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error
"a"in t&&this.onDataPush_(t.a,t.b)}},e.prototype.onDataPush_=function(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):I("Unrecognized action received from server: "+u.stringify(t)+"\nAre you using the latest client?")},e.prototype.onReady_=function(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},e.prototype.scheduleConnect_=function(t){var e=this
u.assert(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){e.establishConnectionTimer_=null,e.establishConnection_()},Math.floor(t))},e.prototype.onVisible_=function(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=en,this.realtime_||this.scheduleConnect_(0)),this.visible_=t},e.prototype.onOnline_=function(t){t?(this.log_("Browser went online."),this.reconnectDelay_=en,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},e.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&((new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=en),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime())
var t=(new Date).getTime()-this.lastConnectionAttemptTime_,e=Math.max(0,this.reconnectDelay_-t)
e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)},e.prototype.establishConnection_=function(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null
var t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+e.nextConnectionId_++,o=this,a=this.lastSessionId,s=!1,c=null,h=function(){c?c.close():(s=!0,r())}
this.realtime_={close:h,sendRequest:function(t){u.assert(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(t)}}
var l=this.forceTokenRefresh_
this.forceTokenRefresh_=!1,this.authTokenProvider_.getToken(l).then(function(e){s?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),o.authToken_=e&&e.accessToken,c=new Ze(i,o.repoInfo_,t,n,r,function(t){N(t+" ("+o.repoInfo_.toString()+")"),o.interrupt("server_kill")},a))}).then(null,function(t){o.log_("Failed to get token: "+t),s||(u.CONSTANTS.NODE_ADMIN&&N(t),h())})}},e.prototype.interrupt=function(t){T("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},e.prototype.resume=function(t){T("Resuming connection for reason: "+t),delete this.interruptReasons_[t],u.isEmpty(this.interruptReasons_)&&(this.reconnectDelay_=en,this.realtime_||this.scheduleConnect_(0))},e.prototype.handleTimestamp_=function(t){var e=t-(new Date).getTime()
this.onServerInfoUpdate_({serverTimeOffset:e})},e.prototype.cancelSentTransactions_=function(){for(var t=0;t<this.outstandingPuts_.length;t++){var e=this.outstandingPuts_[t]
e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])},e.prototype.onListenRevoked_=function(t,e){var n
n=e?e.map(function(t){return x(t)}).join("$"):"default"
var r=this.removeListen_(t,n)
r&&r.onComplete&&r.onComplete("permission_denied")},e.prototype.removeListen_=function(t,e){var n,r=new Z(t).toString()
if(this.listens.has(r)){var i=this.listens.get(r)
n=i.get(e),i.delete(e),0===i.size&&this.listens.delete(r)}else n=void 0
return n},e.prototype.onAuthRevoked_=function(t,e){T("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))},e.prototype.onSecurityDebugPacket_=function(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))},e.prototype.restoreState_=function(){var t,e,n,r
this.tryAuth()
try{for(var i=s.__values(this.listens.values()),o=i.next();!o.done;o=i.next()){var a=o.value
try{for(var u=(n=void 0,s.__values(a.values())),c=u.next();!c.done;c=u.next()){var h=c.value
this.sendListen_(h)}}catch(t){n={error:t}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}for(var l=0;l<this.outstandingPuts_.length;l++)this.outstandingPuts_[l]&&this.sendPut_(l)
for(;this.onDisconnectRequestQueue_.length;){var f=this.onDisconnectRequestQueue_.shift()
this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}},e.prototype.sendConnectStats_=function(){var t={},e="js"
u.CONSTANTS.NODE_ADMIN?e="admin_node":u.CONSTANTS.NODE_CLIENT&&(e="node"),t["sdk."+e+"."+Ye.replace(/\./g,"-")]=1,u.isMobileCordova()?t["framework.cordova"]=1:u.isReactNative()&&(t["framework.reactnative"]=1),this.reportStats(t)},e.prototype.shouldReconnect_=function(){var t=We.getInstance().currentlyOnline()
return u.isEmpty(this.interruptReasons_)&&t},e.nextPersistentConnectionId_=0,e.nextConnectionId_=0,e}(tn),on=function(t){function e(e,n,r){var i=t.call(this)||this
return i.repoInfo_=e,i.onDataUpdate_=n,i.authTokenProvider_=r,i.log_=S("p:rest:"),i.listens_={},i}return s.__extends(e,t),e.prototype.reportStats=function(t){throw new Error("Method not implemented.")},e.getListenId_=function(t,e){return void 0!==e?"tag$"+e:(u.assert(t.getQueryParams().isDefault(),"should have a tag if it's not a default query."),t.path.toString())},e.prototype.listen=function(t,n,r,i){var o=this,a=t.path.toString()
this.log_("Listen called for "+a+" "+t.queryIdentifier())
var s=e.getListenId_(t,r),c={}
this.listens_[s]=c
var h=t.getQueryParams().toRestQueryStringParameters()
this.restRequest_(a+".json",h,function(t,e){var n=e
404===t&&(n=null,t=null),null===t&&o.onDataUpdate_(a,n,!1,r),u.safeGet(o.listens_,s)===c&&i(t?401==t?"permission_denied":"rest_error:"+t:"ok",null)})},e.prototype.unlisten=function(t,n){var r=e.getListenId_(t,n)
delete this.listens_[r]},e.prototype.refreshAuthToken=function(t){},e.prototype.restRequest_=function(t,e,n){var r=this
void 0===e&&(e={}),e.format="export",this.authTokenProvider_.getToken(!1).then(function(i){var o=i&&i.accessToken
o&&(e.auth=o)
var a=(r.repoInfo_.secure?"https://":"http://")+r.repoInfo_.host+t+"?ns="+r.repoInfo_.namespace+u.querystring(e)
r.log_("Sending REST request for "+a)
var s=new XMLHttpRequest
s.onreadystatechange=function(){if(n&&4===s.readyState){r.log_("REST Response for "+a+" received. status:",s.status,"response:",s.responseText)
var t=null
if(s.status>=200&&s.status<300){try{t=u.jsonEval(s.responseText)}catch(t){N("Failed to parse JSON response for "+a+": "+s.responseText)}n(null,t)}else 401!==s.status&&404!==s.status&&N("Got unsuccessful REST response for "+a+" Status: "+s.status),n(s.status)
n=null}},s.open("GET",a,!0),s.send()})},e}(tn),an=function(){function t(t,e,n){var i,o=this
if(this.repoInfo_=t,this.app=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qe,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=new ee,this.persistentConnection_=null,i="undefined"!=typeof process&&process.env[m]?new Oe(n):new De(n),this.stats_=xe.getCollection(t),e||J())this.server_=new on(this.repoInfo_,this.onDataUpdate_.bind(this),i),setTimeout(this.onConnectStatus_.bind(this,!0),0)
else{var a=n.options.databaseAuthVariableOverride
if(null!=a){if("object"!==r(a))throw new Error("Only objects are supported for option databaseAuthVariableOverride")
try{u.stringify(a)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}this.persistentConnection_=new rn(this.repoInfo_,this.onDataUpdate_.bind(this),this.onConnectStatus_.bind(this),this.onServerInfoUpdate_.bind(this),i,a),this.server_=this.persistentConnection_}i.addTokenChangeListener(function(t){o.server_.refreshAuthToken(t)}),this.statsReporter_=xe.getOrCreateReporter(t,function(){return new Ue(o.stats_,o.server_)}),this.transactions_init_(),this.infoData_=new Ae,this.infoSyncTree_=new ke({startListening:function(t,e,n,r){var i=[],a=o.infoData_.getNode(t.path)
return a.isEmpty()||(i=o.infoSyncTree_.applyServerOverwrite(t.path,a),setTimeout(function(){r("ok")},0)),i},stopListening:function(){}}),this.updateInfo_("connected",!1),this.serverSyncTree_=new ke({startListening:function(t,e,n,r){return o.server_.listen(t,n,e,function(e,n){var i=r(e,n)
o.eventQueue_.raiseEventsForChangedPath(t.path,i)}),[]},stopListening:function(t,e){o.server_.unlisten(t,e)}})}return t.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},t.prototype.name=function(){return this.repoInfo_.namespace},t.prototype.serverTime=function(){var t=this.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0
return(new Date).getTime()+t},t.prototype.generateServerValues=function(){return(t=(t={timestamp:this.serverTime()})||{}).timestamp=t.timestamp||(new Date).getTime(),t
var t},t.prototype.onDataUpdate_=function(t,e,n,r){this.dataUpdateCount++
var i=new Z(t)
e=this.interceptServerDataCallback_?this.interceptServerDataCallback_(t,e):e
var o=[]
if(r)if(n){var a=u.map(e,function(t){return Qt(t)})
o=this.serverSyncTree_.applyTaggedQueryMerge(i,a,r)}else{var s=Qt(e)
o=this.serverSyncTree_.applyTaggedQueryOverwrite(i,s,r)}else if(n){var c=u.map(e,function(t){return Qt(t)})
o=this.serverSyncTree_.applyServerMerge(i,c)}else{var h=Qt(e)
o=this.serverSyncTree_.applyServerOverwrite(i,h)}var l=i
o.length>0&&(l=this.rerunTransactions_(i)),this.eventQueue_.raiseEventsForChangedPath(l,o)},t.prototype.interceptServerData_=function(t){this.interceptServerDataCallback_=t},t.prototype.onConnectStatus_=function(t){this.updateInfo_("connected",t),!1===t&&this.runOnDisconnectEvents_()},t.prototype.onServerInfoUpdate_=function(t){var e=this
L(t,function(t,n){e.updateInfo_(t,n)})},t.prototype.updateInfo_=function(t,e){var n=new Z("/.info/"+t),r=Qt(e)
this.infoData_.updateSnapshot(n,r)
var i=this.infoSyncTree_.applyServerOverwrite(n,r)
this.eventQueue_.raiseEventsForChangedPath(n,i)},t.prototype.getNextWriteId_=function(){return this.nextWriteId_++},t.prototype.setWithPriority=function(t,e,n,r){var i=this
this.log_("set",{path:t.toString(),value:e,priority:n})
var o=this.generateServerValues(),a=Qt(e,n),s=re(a,o),u=this.getNextWriteId_(),c=this.serverSyncTree_.applyUserOverwrite(t,s,u,!0)
this.eventQueue_.queueEvents(c),this.server_.put(t.toString(),a.val(!0),function(e,n){var o="ok"===e
o||N("set at "+t+" failed: "+e)
var a=i.serverSyncTree_.ackUserWrite(u,!o)
i.eventQueue_.raiseEventsForChangedPath(t,a),i.callOnCompleteCallback(r,e,n)})
var h=this.abortTransactions_(t)
this.rerunTransactions_(h),this.eventQueue_.raiseEventsForChangedPath(h,[])},t.prototype.update=function(t,e,n){var r=this
this.log_("update",{path:t.toString(),value:e})
var i=!0,o=this.generateServerValues(),a={}
if(L(e,function(t,e){i=!1
var n=Qt(e)
a[t]=re(n,o)}),i)T("update() called with empty data.  Don't do anything."),this.callOnCompleteCallback(n,"ok")
else{var s=this.getNextWriteId_(),u=this.serverSyncTree_.applyUserMerge(t,a,s)
this.eventQueue_.queueEvents(u),this.server_.merge(t.toString(),e,function(e,i){var o="ok"===e
o||N("update at "+t+" failed: "+e)
var a=r.serverSyncTree_.ackUserWrite(s,!o),u=a.length>0?r.rerunTransactions_(t):t
r.eventQueue_.raiseEventsForChangedPath(u,a),r.callOnCompleteCallback(n,e,i)}),L(e,function(e){var n=r.abortTransactions_(t.child(e))
r.rerunTransactions_(n)}),this.eventQueue_.raiseEventsForChangedPath(t,[])}},t.prototype.runOnDisconnectEvents_=function(){var t=this
this.log_("onDisconnectEvents")
var e=this.generateServerValues(),n=function(t,e){var n=new ee
return t.forEachTree(new Z(""),function(t,r){n.remember(t,re(r,e))}),n}(this.onDisconnect_,e),r=[]
n.forEachTree(Z.Empty,function(e,n){r=r.concat(t.serverSyncTree_.applyServerOverwrite(e,n))
var i=t.abortTransactions_(e)
t.rerunTransactions_(i)}),this.onDisconnect_=new ee,this.eventQueue_.raiseEventsForChangedPath(Z.Empty,r)},t.prototype.onDisconnectCancel=function(t,e){var n=this
this.server_.onDisconnectCancel(t.toString(),function(r,i){"ok"===r&&n.onDisconnect_.forget(t),n.callOnCompleteCallback(e,r,i)})},t.prototype.onDisconnectSet=function(t,e,n){var r=this,i=Qt(e)
this.server_.onDisconnectPut(t.toString(),i.val(!0),function(e,o){"ok"===e&&r.onDisconnect_.remember(t,i),r.callOnCompleteCallback(n,e,o)})},t.prototype.onDisconnectSetWithPriority=function(t,e,n,r){var i=this,o=Qt(e,n)
this.server_.onDisconnectPut(t.toString(),o.val(!0),function(e,n){"ok"===e&&i.onDisconnect_.remember(t,o),i.callOnCompleteCallback(r,e,n)})},t.prototype.onDisconnectUpdate=function(t,e,n){var r=this
if(u.isEmpty(e))return T("onDisconnect().update() called with empty data.  Don't do anything."),void this.callOnCompleteCallback(n,"ok")
this.server_.onDisconnectMerge(t.toString(),e,function(i,o){"ok"===i&&L(e,function(e,n){var i=Qt(n)
r.onDisconnect_.remember(t.child(e),i)}),r.callOnCompleteCallback(n,i,o)})},t.prototype.addEventCallbackForQuery=function(t,e){var n
n=".info"===t.path.getFront()?this.infoSyncTree_.addEventRegistration(t,e):this.serverSyncTree_.addEventRegistration(t,e),this.eventQueue_.raiseEventsAtPath(t.path,n)},t.prototype.removeEventCallbackForQuery=function(t,e){var n
n=".info"===t.path.getFront()?this.infoSyncTree_.removeEventRegistration(t,e):this.serverSyncTree_.removeEventRegistration(t,e),this.eventQueue_.raiseEventsAtPath(t.path,n)},t.prototype.interrupt=function(){this.persistentConnection_&&this.persistentConnection_.interrupt("repo_interrupt")},t.prototype.resume=function(){this.persistentConnection_&&this.persistentConnection_.resume("repo_interrupt")},t.prototype.stats=function(t){if(void 0===t&&(t=!1),"undefined"!=typeof console){var e
t?(this.statsListener_||(this.statsListener_=new Me(this.stats_)),e=this.statsListener_.get()):e=this.stats_.get()
var n=Object.keys(e).reduce(function(t,e){return Math.max(e.length,t)},0)
L(e,function(t,e){for(var r=t,i=t.length;i<n+2;i++)r+=" "
console.log(r+e)})}},t.prototype.statsIncrementCounter=function(t){this.stats_.incrementCounter(t),this.statsReporter_.includeStat(t)},t.prototype.log_=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n=""
this.persistentConnection_&&(n=this.persistentConnection_.id+":"),T.apply(void 0,s.__spread([n],t))},t.prototype.callOnCompleteCallback=function(t,e,n){t&&X(function(){if("ok"==e)t(null)
else{var r=(e||"error").toUpperCase(),i=r
n&&(i+=": "+n)
var o=new Error(i)
o.code=r,t(o)}})},Object.defineProperty(t.prototype,"database",{get:function(){return this.__database||(this.__database=new mn(this))},enumerable:!0,configurable:!0}),t}(),sn=function(){function t(e){this.indexedFilter_=new me(e.getIndex()),this.index_=e.getIndex(),this.startPost_=t.getStartPost_(e),this.endPost_=t.getEndPost_(e)}return t.prototype.getStartPost=function(){return this.startPost_},t.prototype.getEndPost=function(){return this.endPost_},t.prototype.matches=function(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0},t.prototype.updateChild=function(t,e,n,r,i,o){return this.matches(new Et(e,n))||(n=Bt.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,i,o)},t.prototype.updateFullNode=function(t,e,n){e.isLeafNode()&&(e=Bt.EMPTY_NODE)
var r=e.withIndex(this.index_)
r=r.updatePriority(Bt.EMPTY_NODE)
var i=this
return e.forEachChild(At,function(t,e){i.matches(new Et(t,e))||(r=r.updateImmediateChild(t,Bt.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,r,n)},t.prototype.updatePriority=function(t,e){return t},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.indexedFilter_},t.prototype.getIndex=function(){return this.index_},t.getStartPost_=function(t){if(t.hasStart()){var e=t.getIndexStartName()
return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()},t.getEndPost_=function(t){if(t.hasEnd()){var e=t.getIndexEndName()
return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()},t}(),un=function(){function t(t){this.rangedFilter_=new sn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}return t.prototype.updateChild=function(t,e,n,r,i,o){return this.rangedFilter_.matches(new Et(e,n))||(n=Bt.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,i,o):this.fullLimitUpdateChild_(t,e,n,i,o)},t.prototype.updateFullNode=function(t,e,n){var r
if(e.isLeafNode()||e.isEmpty())r=Bt.EMPTY_NODE.withIndex(this.index_)
else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){r=Bt.EMPTY_NODE.withIndex(this.index_)
var i=void 0
i=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_)
for(var o=0;i.hasNext()&&o<this.limit_;){var a=i.getNext()
if(!(this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:this.index_.compare(a,this.rangedFilter_.getEndPost())<=0))break
r=r.updateImmediateChild(a.name,a.node),o++}}else{r=(r=e.withIndex(this.index_)).updatePriority(Bt.EMPTY_NODE)
var s=void 0,u=void 0,c=void 0
if(i=void 0,this.reverse_){i=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),u=this.rangedFilter_.getStartPost()
var h=this.index_.getCompare()
c=function(t,e){return h(e,t)}}else i=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),u=this.rangedFilter_.getEndPost(),c=this.index_.getCompare()
o=0
for(var l=!1;i.hasNext();)a=i.getNext(),!l&&c(s,a)<=0&&(l=!0),l&&o<this.limit_&&c(a,u)<=0?o++:r=r.updateImmediateChild(a.name,Bt.EMPTY_NODE)}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)},t.prototype.updatePriority=function(t,e){return t},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},t.prototype.getIndex=function(){return this.index_},t.prototype.fullLimitUpdateChild_=function(t,e,n,r,i){var o
if(this.reverse_){var a=this.index_.getCompare()
o=function(t,e){return a(e,t)}}else o=this.index_.getCompare()
var s=t
u.assert(s.numChildren()==this.limit_,"")
var c=new Et(e,n),h=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(c)
if(s.hasChild(e)){for(var f=s.getImmediateChild(e),p=r.getChildAfterChild(this.index_,h,this.reverse_);null!=p&&(p.name==e||s.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_)
var d=null==p?1:o(p,c)
if(l&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(ye.childChangedChange(e,n,f)),s.updateImmediateChild(e,n)
null!=i&&i.trackChildChange(ye.childRemovedChange(e,f))
var y=s.updateImmediateChild(e,Bt.EMPTY_NODE)
return null!=p&&this.rangedFilter_.matches(p)?(null!=i&&i.trackChildChange(ye.childAddedChange(p.name,p.node)),y.updateImmediateChild(p.name,p.node)):y}return n.isEmpty()?t:l&&o(h,c)>=0?(null!=i&&(i.trackChildChange(ye.childRemovedChange(h.name,h.node)),i.trackChildChange(ye.childAddedChange(e,n))),s.updateImmediateChild(e,n).updateImmediateChild(h.name,Bt.EMPTY_NODE)):t},t}(),cn=function(){function t(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}return t.prototype.hasStart=function(){return this.startSet_},t.prototype.isViewFromLeft=function(){return""===this.viewFrom_?this.startSet_:this.viewFrom_===t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT},t.prototype.getIndexStartValue=function(){return u.assert(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},t.prototype.getIndexStartName=function(){return u.assert(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:A},t.prototype.hasEnd=function(){return this.endSet_},t.prototype.getIndexEndValue=function(){return u.assert(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},t.prototype.getIndexEndName=function(){return u.assert(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:D},t.prototype.hasLimit=function(){return this.limitSet_},t.prototype.hasAnchoredLimit=function(){return this.limitSet_&&""!==this.viewFrom_},t.prototype.getLimit=function(){return u.assert(this.limitSet_,"Only valid if limit has been set"),this.limit_},t.prototype.getIndex=function(){return this.index_},t.prototype.copy_=function(){var e=new t
return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e},t.prototype.limit=function(t){var e=this.copy_()
return e.limitSet_=!0,e.limit_=t,e.viewFrom_="",e},t.prototype.limitToFirst=function(e){var n=this.copy_()
return n.limitSet_=!0,n.limit_=e,n.viewFrom_=t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT,n},t.prototype.limitToLast=function(e){var n=this.copy_()
return n.limitSet_=!0,n.limit_=e,n.viewFrom_=t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT,n},t.prototype.startAt=function(t,e){var n=this.copy_()
return n.startSet_=!0,void 0===t&&(t=null),n.indexStartValue_=t,null!=e?(n.startNameSet_=!0,n.indexStartName_=e):(n.startNameSet_=!1,n.indexStartName_=""),n},t.prototype.endAt=function(t,e){var n=this.copy_()
return n.endSet_=!0,void 0===t&&(t=null),n.indexEndValue_=t,void 0!==e?(n.endNameSet_=!0,n.indexEndName_=e):(n.endNameSet_=!1,n.indexEndName_=""),n},t.prototype.orderBy=function(t){var e=this.copy_()
return e.index_=t,e},t.prototype.getQueryObject=function(){var e=t.WIRE_PROTOCOL_CONSTANTS_,n={}
if(this.startSet_&&(n[e.INDEX_START_VALUE]=this.indexStartValue_,this.startNameSet_&&(n[e.INDEX_START_NAME]=this.indexStartName_)),this.endSet_&&(n[e.INDEX_END_VALUE]=this.indexEndValue_,this.endNameSet_&&(n[e.INDEX_END_NAME]=this.indexEndName_)),this.limitSet_){n[e.LIMIT]=this.limit_
var r=this.viewFrom_
""===r&&(r=this.isViewFromLeft()?e.VIEW_FROM_LEFT:e.VIEW_FROM_RIGHT),n[e.VIEW_FROM]=r}return this.index_!==At&&(n[e.INDEX]=this.index_.toString()),n},t.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},t.prototype.isDefault=function(){return this.loadsAllData()&&this.index_==At},t.prototype.getNodeFilter=function(){return this.loadsAllData()?new me(this.getIndex()):this.hasLimit()?new un(this):new sn(this)},t.prototype.toRestQueryStringParameters=function(){var e,n=t.REST_QUERY_CONSTANTS_,r={}
return this.isDefault()?r:(this.index_===At?e=n.PRIORITY_INDEX:this.index_===Gt?e=n.VALUE_INDEX:this.index_===It?e=n.KEY_INDEX:(u.assert(this.index_ instanceof zt,"Unrecognized index type!"),e=this.index_.toString()),r[n.ORDER_BY]=u.stringify(e),this.startSet_&&(r[n.START_AT]=u.stringify(this.indexStartValue_),this.startNameSet_&&(r[n.START_AT]+=","+u.stringify(this.indexStartName_))),this.endSet_&&(r[n.END_AT]=u.stringify(this.indexEndValue_),this.endNameSet_&&(r[n.END_AT]+=","+u.stringify(this.indexEndName_))),this.limitSet_&&(this.isViewFromLeft()?r[n.LIMIT_TO_FIRST]=this.limit_:r[n.LIMIT_TO_LAST]=this.limit_),r)},t.WIRE_PROTOCOL_CONSTANTS_={INDEX_START_VALUE:"sp",INDEX_START_NAME:"sn",INDEX_END_VALUE:"ep",INDEX_END_NAME:"en",LIMIT:"l",VIEW_FROM:"vf",VIEW_FROM_LEFT:"l",VIEW_FROM_RIGHT:"r",INDEX:"i"},t.REST_QUERY_CONSTANTS_={ORDER_BY:"orderBy",PRIORITY_INDEX:"$priority",VALUE_INDEX:"$value",KEY_INDEX:"$key",START_AT:"startAt",END_AT:"endAt",LIMIT_TO_FIRST:"limitToFirst",LIMIT_TO_LAST:"limitToLast"},t.DEFAULT=new t,t}(),hn=function(t){function e(e,n){if(!(e instanceof an))throw new Error("new Reference() no longer supported - use app.database().")
return t.call(this,e,n,cn.DEFAULT,!1)||this}return s.__extends(e,t),e.prototype.getKey=function(){return u.validateArgCount("Reference.key",0,0,arguments.length),this.path.isEmpty()?null:this.path.getBack()},e.prototype.child=function(t){return u.validateArgCount("Reference.child",1,1,arguments.length),"number"==typeof t?t=String(t):t instanceof Z||(null===this.path.getFront()?function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mt(t,e,n,r)}("Reference.child",1,t,!1):mt("Reference.child",1,t,!1)),new e(this.repo,this.path.child(t))},e.prototype.getParent=function(){u.validateArgCount("Reference.parent",0,0,arguments.length)
var t=this.path.parent()
return null===t?null:new e(this.repo,t)},e.prototype.getRoot=function(){u.validateArgCount("Reference.root",0,0,arguments.length)
for(var t=this;null!==t.getParent();)t=t.getParent()
return t},e.prototype.databaseProp=function(){return this.repo.database},e.prototype.set=function(t,e){u.validateArgCount("Reference.set",1,2,arguments.length),gt("Reference.set",this.path),ht("Reference.set",1,t,this.path,!1),u.validateCallback("Reference.set",2,e,!0)
var n=new u.Deferred
return this.repo.setWithPriority(this.path,t,null,n.wrapCallback(e)),n.promise},e.prototype.update=function(t,e){if(u.validateArgCount("Reference.update",1,2,arguments.length),gt("Reference.update",this.path),Array.isArray(t)){for(var n={},r=0;r<t.length;++r)n[""+r]=t[r]
t=n,N("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ft("Reference.update",1,t,this.path,!1),u.validateCallback("Reference.update",2,e,!0)
var i=new u.Deferred
return this.repo.update(this.path,t,i.wrapCallback(e)),i.promise},e.prototype.setWithPriority=function(t,e,n){if(u.validateArgCount("Reference.setWithPriority",2,3,arguments.length),gt("Reference.setWithPriority",this.path),ht("Reference.setWithPriority",1,t,this.path,!1),pt("Reference.setWithPriority",2,e,!1),u.validateCallback("Reference.setWithPriority",3,n,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.setWithPriority failed: "+this.getKey()+" is a read-only object."
var r=new u.Deferred
return this.repo.setWithPriority(this.path,t,e,r.wrapCallback(n)),r.promise},e.prototype.remove=function(t){return u.validateArgCount("Reference.remove",0,1,arguments.length),gt("Reference.remove",this.path),u.validateCallback("Reference.remove",1,t,!0),this.set(null,t)},e.prototype.transaction=function(t,e,n){if(u.validateArgCount("Reference.transaction",1,3,arguments.length),gt("Reference.transaction",this.path),u.validateCallback("Reference.transaction",1,t,!1),u.validateCallback("Reference.transaction",2,e,!0),function(t,e,n,r){if((!r||void 0!==n)&&"boolean"!=typeof n)throw new Error(u.errorPrefix(t,e,r)+"must be a boolean.")}("Reference.transaction",3,n,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.transaction failed: "+this.getKey()+" is a read-only object."
void 0===n&&(n=!0)
var r=new u.Deferred
"function"==typeof e&&r.promise.catch(function(){})
return this.repo.startTransaction(this.path,t,function(t,n,i){t?r.reject(t):r.resolve(new bt(n,i)),"function"==typeof e&&e(t,n,i)},n),r.promise},e.prototype.setPriority=function(t,e){u.validateArgCount("Reference.setPriority",1,2,arguments.length),gt("Reference.setPriority",this.path),pt("Reference.setPriority",1,t,!1),u.validateCallback("Reference.setPriority",2,e,!0)
var n=new u.Deferred
return this.repo.setWithPriority(this.path.child(".priority"),t,null,n.wrapCallback(e)),n.promise},e.prototype.push=function(t,e){u.validateArgCount("Reference.push",0,2,arguments.length),gt("Reference.push",this.path),ht("Reference.push",1,t,this.path,!0),u.validateCallback("Reference.push",2,e,!0)
var n,r=this.repo.serverTime(),i=wt(r),o=this.child(i),a=this.child(i)
return n=null!=t?o.set(t,e).then(function(){return a}):Promise.resolve(a),o.then=n.then.bind(n),o.catch=n.then.bind(n,void 0),"function"==typeof e&&n.catch(function(){}),o},e.prototype.onDisconnect=function(){return gt("Reference.onDisconnect",this.path),new _t(this.repo,this.path)},Object.defineProperty(e.prototype,"database",{get:function(){return this.databaseProp()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this.getKey()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this.getParent()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this.getRoot()},enumerable:!0,configurable:!0}),e}(te)
te.__referenceConstructor=hn,Se.__referenceConstructor=hn
var ln,fn=function(){this.children={},this.childCount=0,this.value=null},pn=function(){function t(t,e,n){void 0===t&&(t=""),void 0===e&&(e=null),void 0===n&&(n=new fn),this.name_=t,this.parent_=e,this.node_=n}return t.prototype.subTree=function(e){for(var n,r=e instanceof Z?e:new Z(e),i=this;null!==(n=r.getFront());)i=new t(n,i,u.safeGet(i.node_.children,n)||new fn),r=r.popFront()
return i},t.prototype.getValue=function(){return this.node_.value},t.prototype.setValue=function(t){u.assert(void 0!==t,"Cannot set value to undefined"),this.node_.value=t,this.updateParents_()},t.prototype.clear=function(){this.node_.value=null,this.node_.children={},this.node_.childCount=0,this.updateParents_()},t.prototype.hasChildren=function(){return this.node_.childCount>0},t.prototype.isEmpty=function(){return null===this.getValue()&&!this.hasChildren()},t.prototype.forEachChild=function(e){var n=this
L(this.node_.children,function(r,i){e(new t(r,n,i))})},t.prototype.forEachDescendant=function(t,e,n){e&&!n&&t(this),this.forEachChild(function(e){e.forEachDescendant(t,!0,n)}),e&&n&&t(this)},t.prototype.forEachAncestor=function(t,e){for(var n=e?this:this.parent();null!==n;){if(t(n))return!0
n=n.parent()}return!1},t.prototype.forEachImmediateDescendantWithValue=function(t){this.forEachChild(function(e){null!==e.getValue()?t(e):e.forEachImmediateDescendantWithValue(t)})},t.prototype.path=function(){return new Z(null===this.parent_?this.name_:this.parent_.path()+"/"+this.name_)},t.prototype.name=function(){return this.name_},t.prototype.parent=function(){return this.parent_},t.prototype.updateParents_=function(){null!==this.parent_&&this.parent_.updateChild_(this.name_,this)},t.prototype.updateChild_=function(t,e){var n=e.isEmpty(),r=u.contains(this.node_.children,t)
n&&r?(delete this.node_.children[t],this.node_.childCount--,this.updateParents_()):n||r||(this.node_.children[t]=e.node_,this.node_.childCount++,this.updateParents_())},t}()
!function(t){t[t.RUN=0]="RUN",t[t.SENT=1]="SENT",t[t.COMPLETED=2]="COMPLETED",t[t.SENT_NEEDS_ABORT=3]="SENT_NEEDS_ABORT",t[t.NEEDS_ABORT=4]="NEEDS_ABORT"}(ln||(ln={})),an.MAX_TRANSACTION_RETRIES_=25,an.prototype.transactions_init_=function(){this.transactionQueueTree_=new pn},an.prototype.startTransaction=function(t,e,n,i){this.log_("transaction on "+t)
var o=function(){},a=new hn(this,t)
a.on("value",o)
var s={path:t,update:e,onComplete:n,status:null,order:g(),applyLocally:i,retryCount:0,unwatcher:function(){a.off("value",o)},abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=this.getLatestState_(t)
s.currentInputSnapshot=c
var h=s.update(c.val())
if(void 0===h){if(s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete){var l=new Yt(s.currentInputSnapshot,new hn(this,s.path),At)
s.onComplete(null,!1,l)}}else{lt("transaction failed: Data returned ",h,s.path),s.status=ln.RUN
var f=this.transactionQueueTree_.subTree(t),p=f.getValue()||[]
p.push(s),f.setValue(p)
var d=void 0
"object"===r(h)&&null!==h&&u.contains(h,".priority")?(d=u.safeGet(h,".priority"),u.assert(ct(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(this.serverSyncTree_.calcCompleteEventCache(t)||Bt.EMPTY_NODE).getPriority().val(),d=d
var y=this.generateServerValues(),m=Qt(h,d),v=re(m,y)
s.currentOutputSnapshotRaw=m,s.currentOutputSnapshotResolved=v,s.currentWriteId=this.getNextWriteId_()
var _=this.serverSyncTree_.applyUserOverwrite(t,v,s.currentWriteId,s.applyLocally)
this.eventQueue_.raiseEventsForChangedPath(t,_),this.sendReadyTransactions_()}},an.prototype.getLatestState_=function(t,e){return this.serverSyncTree_.calcCompleteEventCache(t,e)||Bt.EMPTY_NODE},an.prototype.sendReadyTransactions_=function(t){var e=this
if(void 0===t&&(t=this.transactionQueueTree_),t||this.pruneCompletedTransactionsBelowNode_(t),null!==t.getValue()){var n=this.buildTransactionQueue_(t)
u.assert(n.length>0,"Sending zero length transaction queue"),n.every(function(t){return t.status===ln.RUN})&&this.sendTransactionQueue_(t.path(),n)}else t.hasChildren()&&t.forEachChild(function(t){e.sendReadyTransactions_(t)})},an.prototype.sendTransactionQueue_=function(t,e){for(var n=this,r=e.map(function(t){return t.currentWriteId}),i=this.getLatestState_(t,r),o=i,a=i.hash(),s=0;s<e.length;s++){var c=e[s]
u.assert(c.status===ln.RUN,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=ln.SENT,c.retryCount++
var h=Z.relativePath(t,c.path)
o=o.updateChild(h,c.currentOutputSnapshotRaw)}var l=o.val(!0),f=t
this.server_.put(f.toString(),l,function(r){n.log_("transaction put response",{path:f.toString(),status:r})
var i=[]
if("ok"===r){for(var o=[],a=0;a<e.length;a++){if(e[a].status=ln.COMPLETED,i=i.concat(n.serverSyncTree_.ackUserWrite(e[a].currentWriteId)),e[a].onComplete){var s=e[a].currentOutputSnapshotResolved,u=new hn(n,e[a].path),c=new Yt(s,u,At)
o.push(e[a].onComplete.bind(null,null,!0,c))}e[a].unwatcher()}for(n.pruneCompletedTransactionsBelowNode_(n.transactionQueueTree_.subTree(t)),n.sendReadyTransactions_(),n.eventQueue_.raiseEventsForChangedPath(t,i),a=0;a<o.length;a++)X(o[a])}else{if("datastale"===r)for(a=0;a<e.length;a++)e[a].status===ln.SENT_NEEDS_ABORT?e[a].status=ln.NEEDS_ABORT:e[a].status=ln.RUN
else for(N("transaction at "+f.toString()+" failed: "+r),a=0;a<e.length;a++)e[a].status=ln.NEEDS_ABORT,e[a].abortReason=r
n.rerunTransactions_(t)}},a)},an.prototype.rerunTransactions_=function(t){var e=this.getAncestorTransactionNode_(t),n=e.path(),r=this.buildTransactionQueue_(e)
return this.rerunTransactionQueue_(r,n),n},an.prototype.rerunTransactionQueue_=function(t,e){if(0!==t.length){for(var n,i=[],o=[],a=t.filter(function(t){return t.status===ln.RUN}).map(function(t){return t.currentWriteId}),s=0;s<t.length;s++){var c=t[s],h=Z.relativePath(e,c.path),l=!1,f=void 0
if(u.assert(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===ln.NEEDS_ABORT)l=!0,f=c.abortReason,o=o.concat(this.serverSyncTree_.ackUserWrite(c.currentWriteId,!0))
else if(c.status===ln.RUN)if(c.retryCount>=an.MAX_TRANSACTION_RETRIES_)l=!0,f="maxretry",o=o.concat(this.serverSyncTree_.ackUserWrite(c.currentWriteId,!0))
else{var p=this.getLatestState_(c.path,a)
c.currentInputSnapshot=p
var d=t[s].update(p.val())
if(void 0!==d){lt("transaction failed: Data returned ",d,c.path)
var y=Qt(d)
"object"===r(d)&&null!=d&&u.contains(d,".priority")||(y=y.updatePriority(p.getPriority()))
var m=c.currentWriteId,g=this.generateServerValues(),v=re(y,g)
c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=v,c.currentWriteId=this.getNextWriteId_(),a.splice(a.indexOf(m),1),o=(o=o.concat(this.serverSyncTree_.applyUserOverwrite(c.path,v,c.currentWriteId,c.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(m,!0))}else l=!0,f="nodata",o=o.concat(this.serverSyncTree_.ackUserWrite(c.currentWriteId,!0))}if(this.eventQueue_.raiseEventsForChangedPath(e,o),o=[],l&&(t[s].status=ln.COMPLETED,n=t[s].unwatcher,setTimeout(n,Math.floor(0)),t[s].onComplete))if("nodata"===f){var _=new hn(this,t[s].path),b=t[s].currentInputSnapshot,w=new Yt(b,_,At)
i.push(t[s].onComplete.bind(null,null,!1,w))}else i.push(t[s].onComplete.bind(null,new Error(f),!1,null))}for(this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_),s=0;s<i.length;s++)X(i[s])
this.sendReadyTransactions_()}},an.prototype.getAncestorTransactionNode_=function(t){for(var e,n=this.transactionQueueTree_;null!==(e=t.getFront())&&null===n.getValue();)n=n.subTree(e),t=t.popFront()
return n},an.prototype.buildTransactionQueue_=function(t){var e=[]
return this.aggregateTransactionQueuesForNode_(t,e),e.sort(function(t,e){return t.order-e.order}),e},an.prototype.aggregateTransactionQueuesForNode_=function(t,e){var n=this,r=t.getValue()
if(null!==r)for(var i=0;i<r.length;i++)e.push(r[i])
t.forEachChild(function(t){n.aggregateTransactionQueuesForNode_(t,e)})},an.prototype.pruneCompletedTransactionsBelowNode_=function(t){var e=this,n=t.getValue()
if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==ln.COMPLETED&&(n[r]=n[i],r++)
n.length=r,t.setValue(n.length>0?n:null)}t.forEachChild(function(t){e.pruneCompletedTransactionsBelowNode_(t)})},an.prototype.abortTransactions_=function(t){var e=this,n=this.getAncestorTransactionNode_(t).path(),r=this.transactionQueueTree_.subTree(t)
return r.forEachAncestor(function(t){e.abortTransactionsOnNode_(t)}),this.abortTransactionsOnNode_(r),r.forEachDescendant(function(t){e.abortTransactionsOnNode_(t)}),n},an.prototype.abortTransactionsOnNode_=function(t){var e=t.getValue()
if(null!==e){for(var n=[],r=[],i=-1,o=0;o<e.length;o++)e[o].status===ln.SENT_NEEDS_ABORT||(e[o].status===ln.SENT?(u.assert(i===o-1,"All SENT items should be at beginning of queue."),i=o,e[o].status=ln.SENT_NEEDS_ABORT,e[o].abortReason="set"):(u.assert(e[o].status===ln.RUN,"Unexpected transaction status in abort"),e[o].unwatcher(),r=r.concat(this.serverSyncTree_.ackUserWrite(e[o].currentWriteId,!0)),e[o].onComplete&&n.push(e[o].onComplete.bind(null,new Error("set"),!1,null))))
for(-1===i?t.setValue(null):e.length=i+1,this.eventQueue_.raiseEventsForChangedPath(t.path(),r),o=0;o<n.length;o++)X(n[o])}}
var dn,yn=function(){function t(){this.repos_={},this.useRestClient_=!1}return t.getInstance=function(){return dn||(dn=new t),dn},t.prototype.interrupt=function(){for(var t in this.repos_)for(var e in this.repos_[t])this.repos_[t][e].interrupt()},t.prototype.resume=function(){for(var t in this.repos_)for(var e in this.repos_[t])this.repos_[t][e].resume()},t.prototype.databaseFromApp=function(t,e){var n=e||t.options.databaseURL
void 0===n&&C("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp().")
var r=rt(n),i=r.repoInfo,o=void 0
return"undefined"!=typeof process&&(o=process.env[m]),o&&(n="http://"+o+"?ns="+i.namespace,i=(r=rt(n)).repoInfo),vt("Invalid Firebase Database URL",1,r),r.path.isEmpty()||C("Database URL must point to the root of a Firebase Database (not including a child path)."),this.createRepo(i,t).database},t.prototype.deleteRepo=function(t){var e=u.safeGet(this.repos_,t.app.name)
e&&u.safeGet(e,t.repoInfo_.toURLString())===t||C("Database "+t.app.name+"("+t.repoInfo_+") has already been deleted."),t.interrupt(),delete e[t.repoInfo_.toURLString()]},t.prototype.createRepo=function(t,e){var n=u.safeGet(this.repos_,e.name)
n||(n={},this.repos_[e.name]=n)
var r=u.safeGet(n,t.toURLString())
return r&&C("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new an(t,this.useRestClient_,e),n[t.toURLString()]=r,r},t.prototype.forceRestClient=function(t){this.useRestClient_=t},t}(),mn=function(){function t(t){this.repo_=t,t instanceof an||C("Don't call new Database() directly - please use firebase.database()."),this.root_=new hn(t,Z.Empty),this.INTERNAL=new gn(this)}return Object.defineProperty(t.prototype,"app",{get:function(){return this.repo_.app},enumerable:!0,configurable:!0}),t.prototype.ref=function(t){return this.checkDeleted_("ref"),u.validateArgCount("database.ref",0,1,arguments.length),t instanceof hn?this.refFromURL(t.toString()):void 0!==t?this.root_.child(t):this.root_},t.prototype.refFromURL=function(t){var e="database.refFromURL"
this.checkDeleted_(e),u.validateArgCount(e,1,1,arguments.length)
var n=rt(t)
vt(e,1,n)
var r=n.repoInfo
return r.host!==this.repo_.repoInfo_.host&&C(e+": Host name does not match the current database: (found "+r.host+" but expected "+this.repo_.repoInfo_.host+")"),this.ref(n.path.toString())},t.prototype.checkDeleted_=function(t){null===this.repo_&&C("Cannot call "+t+" on a deleted database.")},t.prototype.goOffline=function(){u.validateArgCount("database.goOffline",0,0,arguments.length),this.checkDeleted_("goOffline"),this.repo_.interrupt()},t.prototype.goOnline=function(){u.validateArgCount("database.goOnline",0,0,arguments.length),this.checkDeleted_("goOnline"),this.repo_.resume()},t.ServerValue={TIMESTAMP:{".sv":"timestamp"}},t}(),gn=function(){function t(t){this.database=t}return t.prototype.delete=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){return this.database.checkDeleted_("delete"),yn.getInstance().deleteRepo(this.database.repo_),this.database.repo_=null,this.database.root_=null,this.database.INTERNAL=null,this.database=null,[2]})})},t}(),vn=Object.freeze({forceLongPolling:function(){Je.forceDisallow(),Ge.forceAllow()},forceWebSockets:function(){Ge.forceDisallow()},isWebSocketsAvailable:function(){return Je.isAvailable()},setSecurityDebugCallback:function(t,e){t.repo.persistentConnection_.securityDebugCallback_=e},stats:function(t,e){t.repo.stats(e)},statsIncrementCounter:function(t,e){t.repo.statsIncrementCounter(e)},dataUpdateCount:function(t){return t.repo.dataUpdateCount},interceptServerData:function(t,e){return t.repo.interceptServerData_(e)}}),_n=rn
rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)}
var bn=Ze,wn=nt,En=Object.freeze({DataConnection:_n,RealTimeConnection:bn,hijackHash:function(t){var e=rn.prototype.put
return rn.prototype.put=function(n,r,i,o){void 0!==o&&(o=t()),e.call(this,n,r,i,o)},function(){rn.prototype.put=e}},ConnectionTarget:wn,queryIdentifier:function(t){return t.queryIdentifier()},forceRestClient:function(t){yn.getInstance().forceRestClient(t)}}),Tn=mn.ServerValue
function Sn(e){var n
n=e.SDK_VERSION,Ye=n
var r=e.INTERNAL.registerService("database",function(t,e,n){return yn.getInstance().databaseFromApp(t,n)},{Reference:hn,Query:te,Database:mn,DataSnapshot:Yt,enableLogging:E,INTERNAL:vn,ServerValue:Tn,TEST_ACCESS:En},null,!0)
u.isNodeSdk()&&(t.exports=r)}Sn(a),e.DataSnapshot=Yt,e.Database=mn,e.OnDisconnect=_t,e.Query=te,e.Reference=hn,e.ServerValue=Tn,e.enableLogging=E,e.registerDatabase=Sn}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[8],{189:function(t,e,n){"use strict"
n.r(e)
var r,i=n(63),o=n.n(i),a=n(0),s=n(64)
function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c,h,l=((r={})["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["should-be-overriden"]="This method should be overriden by extended classes.",r["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",r["permission-default"]="The required permissions were not granted and dismissed instead.",r["permission-blocked"]="The required permissions were not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["notifications-blocked"]="Notifications have been blocked.",r["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["sw-registration-expected"]="A service worker registration was the expected input.",r["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",r["invalid-saved-token"]="Unable to access details of the saved token.",r["sw-reg-redundant"]="The service worker being used for push was made redundant.",r["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",r["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",r["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",r["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",r["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",r["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",r["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",r["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",r["failed-to-delete-token"]="Unable to delete the currently saved token.",r["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",r["bad-scope"]="The service worker scope must be a string with at least one character.",r["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",r["bad-subscription"]="The subscription must be a valid PushSubscription.",r["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",r["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",r["failed-delete-vapid-key"]="The VAPID key could not be deleted.",r["invalid-public-vapid-key"]="The public VAPID key must be a string.",r["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",r),f=new s.ErrorFactory("messaging","Messaging",l),p=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),d="https://fcm.googleapis.com"
function y(t,e){if(null==t||null==e)return!1
if(t===e)return!0
if(t.byteLength!==e.byteLength)return!1
for(var n=new DataView(t),r=new DataView(e),i=0;i<t.byteLength;i++)if(n.getUint8(i)!==r.getUint8(i))return!1
return!0}function m(t){return function(t){var e=new Uint8Array(t)
return btoa(String.fromCharCode.apply(String,Object(a.__spread)(e)))}(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}!function(t){t.TYPE_OF_MSG="firebase-messaging-msg-type",t.DATA="firebase-messaging-msg-data"}(c||(c={})),function(t){t.PUSH_MSG_RECEIVED="push-msg-received",t.NOTIFICATION_CLICKED="notification-clicked"}(h||(h={}))
var g=function(){function t(){}return t.prototype.getToken=function(t,e,n){return Object(a.__awaiter)(this,void 0,void 0,function(){var r,i,o,s,u,c,h,l,g
return Object(a.__generator)(this,function(a){switch(a.label){case 0:r=m(e.getKey("p256dh")),i=m(e.getKey("auth")),o="authorized_entity="+t+"&endpoint="+e.endpoint+"&encryption_key="+r+"&encryption_auth="+i,y(n.buffer,p.buffer)||(s=m(n),o+="&application_pub_key="+s),(u=new Headers).append("Content-Type","application/x-www-form-urlencoded"),c={method:"POST",headers:u,body:o},a.label=1
case 1:return a.trys.push([1,4,,5]),[4,fetch(d+"/fcm/connect/subscribe",c)]
case 2:return[4,a.sent().json()]
case 3:return h=a.sent(),[3,5]
case 4:throw l=a.sent(),f.create("token-subscribe-failed",{errorInfo:l})
case 5:if(h.error)throw g=h.error.message,f.create("token-subscribe-failed",{errorInfo:g})
if(!h.token)throw f.create("token-subscribe-no-token")
if(!h.pushSet)throw f.create("token-subscribe-no-push-set")
return[2,{token:h.token,pushSet:h.pushSet}]}})})},t.prototype.updateToken=function(t,e,n,r,i){return Object(a.__awaiter)(this,void 0,void 0,function(){var o,s,u,c,h,l,g,v,_
return Object(a.__generator)(this,function(a){switch(a.label){case 0:o=m(r.getKey("p256dh")),s=m(r.getKey("auth")),u="push_set="+n+"&token="+e+"&authorized_entity="+t+"&endpoint="+r.endpoint+"&encryption_key="+o+"&encryption_auth="+s,y(i.buffer,p.buffer)||(c=m(i),u+="&application_pub_key="+c),(h=new Headers).append("Content-Type","application/x-www-form-urlencoded"),l={method:"POST",headers:h,body:u},a.label=1
case 1:return a.trys.push([1,4,,5]),[4,fetch(d+"/fcm/connect/subscribe",l)]
case 2:return[4,a.sent().json()]
case 3:return g=a.sent(),[3,5]
case 4:throw v=a.sent(),f.create("token-update-failed",{errorInfo:v})
case 5:if(g.error)throw _=g.error.message,f.create("token-update-failed",{errorInfo:_})
if(!g.token)throw f.create("token-update-no-token")
return[2,g.token]}})})},t.prototype.deleteToken=function(t,e,n){return Object(a.__awaiter)(this,void 0,void 0,function(){var r,i,o,s,u,c
return Object(a.__generator)(this,function(a){switch(a.label){case 0:r="authorized_entity="+t+"&token="+e+"&pushSet="+n,(i=new Headers).append("Content-Type","application/x-www-form-urlencoded"),o={method:"POST",headers:i,body:r},a.label=1
case 1:return a.trys.push([1,4,,5]),[4,fetch(d+"/fcm/connect/unsubscribe",o)]
case 2:return[4,a.sent().json()]
case 3:if((s=a.sent()).error)throw u=s.error.message,f.create("token-unsubscribe-failed",{errorInfo:u})
return[3,5]
case 4:throw c=a.sent(),f.create("token-unsubscribe-failed",{errorInfo:c})
case 5:return[2]}})})},t}()
function v(t){for(var e=(t+"=".repeat((4-t.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(e),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i)
return r}var _="undefined",b="fcm_token_object_Store"
var w=function(){function t(){this.dbPromise=null}return t.prototype.get=function(t){return this.createTransaction(function(e){return e.get(t)})},t.prototype.getIndex=function(t,e){return this.createTransaction(function(n){return n.index(t).get(e)})},t.prototype.put=function(t){return this.createTransaction(function(e){return e.put(t)},"readwrite")},t.prototype.delete=function(t){return this.createTransaction(function(e){return e.delete(t)},"readwrite")},t.prototype.closeDatabase=function(){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(t){switch(t.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2]
case 1:t.sent().close(),this.dbPromise=null,t.label=2
case 2:return[2]}})})},t.prototype.createTransaction=function(t,e){return void 0===e&&(e="readonly"),Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return[4,this.getDb()]
case 1:return n=a.sent(),r=n.transaction(this.objectStoreName,e),i=r.objectStore(this.objectStoreName),[4,E(t(i))]
case 2:return o=a.sent(),[2,new Promise(function(t,e){r.oncomplete=function(){t(o)},r.onerror=function(){e(r.error)}})]}})})},t.prototype.getDb=function(){var t=this
return this.dbPromise||(this.dbPromise=new Promise(function(e,n){var r=indexedDB.open(t.dbName,t.dbVersion)
r.onsuccess=function(){e(r.result)},r.onerror=function(){t.dbPromise=null,n(r.error)},r.onupgradeneeded=function(e){return t.onDbUpgrade(r,e)}})),this.dbPromise},t}()
function E(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}var T=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.dbName="fcm_token_details_db",e.dbVersion=3,e.objectStoreName="fcm_token_object_Store",e}return Object(a.__extends)(e,t),e.prototype.onDbUpgrade=function(t,e){var n=t.result
switch(e.oldVersion){case 0:(r=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0})
case 1:(function(){var t=indexedDB.open(_)
t.onerror=function(t){},t.onsuccess=function(e){!function(t){if(t.objectStoreNames.contains(b)){var e=t.transaction(b).objectStore(b),n=new g,r=e.openCursor()
r.onerror=function(t){console.warn("Unable to cleanup old IDB.",t)},r.onsuccess=function(){var e=r.result
if(e){var i=e.value
n.deleteToken(i.fcmSenderId,i.fcmToken,i.fcmPushSet),e.continue()}else t.close(),indexedDB.deleteDatabase(_)}}}(t.result)}})()
case 2:var r,i=(r=t.transaction.objectStore(this.objectStoreName)).openCursor()
i.onsuccess=function(){var t=i.result
if(t){var e=t.value,n=Object(a.__assign)({},e)
e.createTime||(n.createTime=Date.now()),"string"==typeof e.vapidKey&&(n.vapidKey=v(e.vapidKey)),"string"==typeof e.auth&&(n.auth=v(e.auth).buffer),"string"==typeof e.auth&&(n.p256dh=v(e.p256dh).buffer),t.update(n),t.continue()}}}},e.prototype.getTokenDetailsFromToken=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(e){if(!t)throw f.create("bad-token")
return S({fcmToken:t}),[2,this.getIndex("fcmToken",t)]})})},e.prototype.getTokenDetailsFromSWScope=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(e){if(!t)throw f.create("bad-scope")
return S({swScope:t}),[2,this.get(t)]})})},e.prototype.saveTokenDetails=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(e){if(!t.swScope)throw f.create("bad-scope")
if(!t.vapidKey)throw f.create("bad-vapid-key")
if(!t.endpoint||!t.auth||!t.p256dh)throw f.create("bad-subscription")
if(!t.fcmSenderId)throw f.create("bad-sender-id")
if(!t.fcmToken)throw f.create("bad-token")
if(!t.fcmPushSet)throw f.create("bad-push-set")
return S(t),[2,this.put(t)]})})},e.prototype.deleteToken=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return"string"!=typeof t||0===t.length?[2,Promise.reject(f.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(t)]
case 1:if(!(e=n.sent()))throw f.create("delete-token-not-found")
return[4,this.delete(e.swScope)]
case 2:return n.sent(),[2,e]}})})},e}(w)
function S(t){if(t.fcmToken&&("string"!=typeof t.fcmToken||0===t.fcmToken.length))throw f.create("bad-token")
if(t.swScope&&("string"!=typeof t.swScope||0===t.swScope.length))throw f.create("bad-scope")
if(t.vapidKey&&(!(t.vapidKey instanceof Uint8Array)||65!==t.vapidKey.length))throw f.create("bad-vapid-key")
if(t.endpoint&&("string"!=typeof t.endpoint||0===t.endpoint.length))throw f.create("bad-subscription")
if(t.auth&&!(t.auth instanceof ArrayBuffer))throw f.create("bad-subscription")
if(t.p256dh&&!(t.p256dh instanceof ArrayBuffer))throw f.create("bad-subscription")
if(t.fcmSenderId&&("string"!=typeof t.fcmSenderId||0===t.fcmSenderId.length))throw f.create("bad-sender-id")
if(t.fcmPushSet&&("string"!=typeof t.fcmPushSet||0===t.fcmPushSet.length))throw f.create("bad-push-set")}var I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.dbName="fcm_vapid_details_db",e.dbVersion=1,e.objectStoreName="fcm_vapid_object_Store",e}return Object(a.__extends)(e,t),e.prototype.onDbUpgrade=function(t){t.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},e.prototype.getVapidFromSWScope=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:if("string"!=typeof t||0===t.length)throw f.create("bad-scope")
return[4,this.get(t)]
case 1:return[2,(e=n.sent())?e.vapidKey:void 0]}})})},e.prototype.saveVapidDetails=function(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n
return Object(a.__generator)(this,function(r){if("string"!=typeof t||0===t.length)throw f.create("bad-scope")
if(null===e||65!==e.length)throw f.create("bad-vapid-key")
return n={swScope:t,vapidKey:e},[2,this.put(n)]})})},e.prototype.deleteVapidDetails=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(t)]
case 1:if(!(e=n.sent()))throw f.create("delete-scope-not-found")
return[4,this.delete(t)]
case 2:return n.sent(),[2,e]}})})},e}(w),C="messagingSenderId",N=function(){function t(t){var e=this
if(!t.options[C]||"string"!=typeof t.options[C])throw f.create("bad-sender-id")
this.messagingSenderId=t.options[C],this.tokenDetailsModel=new T,this.vapidDetailsModel=new I,this.iidModel=new g,this.app=t,this.INTERNAL={delete:function(){return e.delete()}}}return t.prototype.getToken=function(){return Object(a.__awaiter)(this,void 0,void 0,function(){var t,e,n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:if("denied"===(t=this.getNotificationPermission_()))throw f.create("notifications-blocked")
return"granted"!==t?[2,null]:[4,this.getSWRegistration_()]
case 1:return e=o.sent(),[4,this.getPublicVapidKey_()]
case 2:return n=o.sent(),[4,this.getPushSubscription(e,n)]
case 3:return r=o.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(e.scope)]
case 4:return(i=o.sent())?[2,this.manageExistingToken(e,r,n,i)]:[2,this.getNewToken(e,r,n)]}})})},t.prototype.manageExistingToken=function(t,e,n,r){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(i){switch(i.label){case 0:return function(t,e,n){if(!n.vapidKey||!y(e.buffer,n.vapidKey.buffer))return!1
var r=t.endpoint===n.endpoint,i=y(t.getKey("auth"),n.auth),o=y(t.getKey("p256dh"),n.p256dh)
return r&&i&&o}(e,n,r)?Date.now()<r.createTime+6048e5?[2,r.fcmToken]:[2,this.updateToken(t,e,n,r)]:[4,this.deleteTokenFromDB(r.fcmToken)]
case 1:return i.sent(),[2,this.getNewToken(t,e,n)]}})})},t.prototype.updateToken=function(t,e,n,r){return Object(a.__awaiter)(this,void 0,void 0,function(){var i,o,s
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return a.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,r.fcmToken,r.fcmPushSet,e,n)]
case 1:return i=a.sent(),o={swScope:t.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:i,fcmPushSet:r.fcmPushSet,createTime:Date.now(),endpoint:e.endpoint,auth:e.getKey("auth"),p256dh:e.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)]
case 2:return a.sent(),[4,this.vapidDetailsModel.saveVapidDetails(t.scope,n)]
case 3:return a.sent(),[2,i]
case 4:return s=a.sent(),[4,this.deleteToken(r.fcmToken)]
case 5:throw a.sent(),s
case 6:return[2]}})})},t.prototype.getNewToken=function(t,e,n){return Object(a.__awaiter)(this,void 0,void 0,function(){var r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,e,n)]
case 1:return r=o.sent(),i={swScope:t.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:r.token,fcmPushSet:r.pushSet,createTime:Date.now(),endpoint:e.endpoint,auth:e.getKey("auth"),p256dh:e.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)]
case 2:return o.sent(),[4,this.vapidDetailsModel.saveVapidDetails(t.scope,n)]
case 3:return o.sent(),[2,r.token]}})})},t.prototype.deleteToken=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n
return Object(a.__generator)(this,function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(t)]
case 1:return r.sent(),[4,this.getSWRegistration_()]
case 2:return(e=r.sent())?[4,e.pushManager.getSubscription()]:[3,4]
case 3:if(n=r.sent())return[2,n.unsubscribe()]
r.label=4
case 4:return[2,!0]}})})},t.prototype.deleteTokenFromDB=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(t)]
case 1:return e=n.sent(),[4,this.iidModel.deleteToken(e.fcmSenderId,e.fcmToken,e.fcmPushSet)]
case 2:return n.sent(),[2]}})})},t.prototype.getPushSubscription=function(t,e){return t.pushManager.getSubscription().then(function(n){return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e})})},t.prototype.requestPermission=function(){throw f.create("only-available-in-window")},t.prototype.useServiceWorker=function(t){throw f.create("only-available-in-window")},t.prototype.usePublicVapidKey=function(t){throw f.create("only-available-in-window")},t.prototype.onMessage=function(t,e,n){throw f.create("only-available-in-window")},t.prototype.onTokenRefresh=function(t,e,n){throw f.create("only-available-in-window")},t.prototype.setBackgroundMessageHandler=function(t){throw f.create("only-available-in-sw")},t.prototype.delete=function(){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])]
case 1:return t.sent(),[2]}})})},t.prototype.getNotificationPermission_=function(){return Notification.permission},t.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},t.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},t.prototype.getIidModel=function(){return this.iidModel},t}(),k=function(t){function e(e){var n=t.call(this,e)||this
return n.bgMessageHandler=null,self.addEventListener("push",function(t){n.onPush(t)}),self.addEventListener("pushsubscriptionchange",function(t){n.onSubChange(t)}),self.addEventListener("notificationclick",function(t){n.onNotificationClick(t)}),n}return Object(a.__extends)(e,t),e.prototype.onPush=function(t){t.waitUntil(this.onPush_(t))},e.prototype.onSubChange=function(t){t.waitUntil(this.onSubChange_(t))},e.prototype.onNotificationClick=function(t){t.waitUntil(this.onNotificationClick_(t))},e.prototype.onPush_=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r,i,o,s
return Object(a.__generator)(this,function(a){switch(a.label){case 0:if(!t.data)return[2]
try{e=t.data.json()}catch(t){return[2]}return[4,this.hasVisibleClients_()]
case 1:return a.sent()?[2,this.sendMessageToWindowClients_(e)]:(n=this.getNotificationData_(e))?(r=n.title||"",[4,this.getSWRegistration_()]):[3,3]
case 2:return i=a.sent(),o=n.actions,s=Notification.maxActions,o&&s&&o.length>s&&console.warn("This browser only supports "+s+" actions.The remaining actions will not be displayed."),[2,i.showNotification(r,n)]
case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(e)]:[3,5]
case 4:return a.sent(),[2]
case 5:return[2]}})})},e.prototype.onSubChange_=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var t,e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.getSWRegistration_()]
case 1:return t=i.sent(),[3,3]
case 2:throw e=i.sent(),f.create("unable-to-resubscribe",{errorInfo:e})
case 3:return i.trys.push([3,5,,8]),[4,t.pushManager.getSubscription()]
case 4:return i.sent(),[3,8]
case 5:return n=i.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(t.scope)]
case 6:if(!(r=i.sent()))throw n
return[4,this.deleteToken(r.fcmToken)]
case 7:throw i.sent(),n
case 8:return[2]}})})},e.prototype.onNotificationClick_=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return t.notification&&t.notification.data&&t.notification.data.FCM_MSG?t.action?[2]:(t.stopImmediatePropagation(),t.notification.close(),(e=t.notification.data.FCM_MSG).notification&&(n=e.fcmOptions&&e.fcmOptions.link||e.notification.click_action)?[4,this.getWindowClient_(n)]:[2]):[2]
case 1:return(r=o.sent())?[3,3]:[4,self.clients.openWindow(n)]
case 2:return r=o.sent(),[3,5]
case 3:return[4,r.focus()]
case 4:r=o.sent(),o.label=5
case 5:return r?(delete e.notification,delete e.fcmOptions,i=D(h.NOTIFICATION_CLICKED,e),[2,this.attemptToMessageClient_(r,i)]):[2]}})})},e.prototype.getNotificationData_=function(t){var e
if(t&&"object"===u(t.notification)){var n=Object(a.__assign)({},t.notification)
return n.data=Object(a.__assign)({},t.notification.data,((e={}).FCM_MSG=t,e)),n}},e.prototype.setBackgroundMessageHandler=function(t){if(!t||"function"!=typeof t)throw f.create("bg-handler-function-expected")
this.bgMessageHandler=t},e.prototype.getWindowClient_=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return e=new URL(t,self.location.href).href,[4,A()]
case 1:for(n=o.sent(),r=null,i=0;i<n.length;i++)if(new URL(n[i].url,self.location.href).href===e){r=n[i]
break}return[2,r]}})})},e.prototype.attemptToMessageClient_=function(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(n){if(!t)throw f.create("no-window-client-to-msg")
return t.postMessage(e),[2]})})},e.prototype.hasVisibleClients_=function(){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(t){switch(t.label){case 0:return[4,A()]
case 1:return[2,t.sent().some(function(t){return"visible"===t.visibilityState&&!t.url.startsWith("chrome-extension://")})]}})})},e.prototype.sendMessageToWindowClients_=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r=this
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,A()]
case 1:return e=i.sent(),n=D(h.PUSH_MSG_RECEIVED,t),[4,Promise.all(e.map(function(t){return r.attemptToMessageClient_(t,n)}))]
case 2:return i.sent(),[2]}})})},e.prototype.getSWRegistration_=function(){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(t){return[2,self.registration]})})},e.prototype.getPublicVapidKey_=function(){return Object(a.__awaiter)(this,void 0,void 0,function(){var t,e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()]
case 1:if(!(t=n.sent()))throw f.create("sw-registration-expected")
return[4,this.getVapidDetailsModel().getVapidFromSWScope(t.scope)]
case 2:return null==(e=n.sent())?[2,p]:[2,e]}})})},e}(N)
function A(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function D(t,e){var n
return(n={})[c.TYPE_OF_MSG]=t,n[c.DATA]=e,n}var R,O=function(t){function e(e){var n=t.call(this,e)||this
return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=Object(s.createSubscribe)(function(t){n.messageObserver=t}),n.onTokenRefreshInternal=Object(s.createSubscribe)(function(t){n.tokenRefreshObserver=t}),n.setupSWMessageListener_(),n}return Object(a.__extends)(e,t),e.prototype.requestPermission=function(){return Object(a.__awaiter)(this,void 0,void 0,function(){var t
return Object(a.__generator)(this,function(e){switch(e.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()]
case 1:if("granted"===(t=e.sent()))return[2]
throw"denied"===t?f.create("permission-blocked"):f.create("permission-default")}})})},e.prototype.useServiceWorker=function(t){if(!(t instanceof ServiceWorkerRegistration))throw f.create("sw-registration-expected")
if(null!=this.registrationToUse)throw f.create("use-sw-before-get-token")
this.registrationToUse=t},e.prototype.usePublicVapidKey=function(t){if("string"!=typeof t)throw f.create("invalid-public-vapid-key")
if(null!=this.publicVapidKeyToUse)throw f.create("use-public-key-before-get-token")
var e=v(t)
if(65!==e.length)throw f.create("public-vapid-key-decryption-failed")
this.publicVapidKeyToUse=e},e.prototype.onMessage=function(t,e,n){return"function"==typeof t?this.onMessageInternal(t,e,n):this.onMessageInternal(t)},e.prototype.onTokenRefresh=function(t,e,n){return"function"==typeof t?this.onTokenRefreshInternal(t,e,n):this.onTokenRefreshInternal(t)},e.prototype.waitForRegistrationToActivate_=function(t){var e=t.installing||t.waiting||t.active
return new Promise(function(n,r){e?"activated"!==e.state?"redundant"!==e.state?e.addEventListener("statechange",function i(){if("activated"===e.state)n(t)
else{if("redundant"!==e.state)return
r(f.create("sw-reg-redundant"))}e.removeEventListener("statechange",i)}):r(f.create("sw-reg-redundant")):n(t):r(f.create("no-sw-in-reg"))})},e.prototype.getSWRegistration_=function(){var t=this
return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(t){throw f.create("failed-serviceworker-registration",{browserErrorMessage:t.message})}).then(function(e){return t.waitForRegistrationToActivate_(e).then(function(){return t.registrationToUse=e,e.update(),e})}))},e.prototype.getPublicVapidKey_=function(){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(t){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,p]})})},e.prototype.setupSWMessageListener_=function(){var t=this
navigator.serviceWorker.addEventListener("message",function(e){if(e.data&&e.data[c.TYPE_OF_MSG]){var n=e.data
switch(n[c.TYPE_OF_MSG]){case h.PUSH_MSG_RECEIVED:case h.NOTIFICATION_CLICKED:var r=n[c.DATA]
t.messageObserver&&t.messageObserver.next(r)}}},!1)},e}(N)
function P(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}R={isSupported:P},o.a.INTERNAL.registerService("messaging",function(t){if(!P())throw f.create("unsupported-browser")
return self&&"ServiceWorkerGlobalScope"in self?new k(t):new O(t)},R)}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[9],{190:function(t,e,n){"use strict"
n.r(e)
var r=n(63),i=n.n(r),o=n(0)
function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s="firebasestorage.googleapis.com",u="storageBucket",c=12e4,h=6e4,l=-9007199254740991,f=function(){function t(t,e){this.code_=d(t),this.message_="Firebase Storage: "+e,this.serverResponse_=null,this.name_="FirebaseError"}return t.prototype.codeProp=function(){return this.code},t.prototype.codeEquals=function(t){return d(t)===this.codeProp()},t.prototype.serverResponseProp=function(){return this.serverResponse_},t.prototype.setServerResponseProp=function(t){this.serverResponse_=t},Object.defineProperty(t.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),t}(),p={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"}
function d(t){return"storage/"+t}function y(){return new f(p.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function m(){return new f(p.CANCELED,"User canceled the upload/download.")}function g(){return new f(p.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function v(t,e,n){return new f(p.INVALID_ARGUMENT,"Invalid argument in `"+e+"` at index "+t+": "+n)}function _(){return new f(p.APP_DELETED,"The Firebase app was deleted.")}function b(t,e){return new f(p.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function w(t){throw new f(p.INTERNAL_ERROR,"Internal error: "+t)}var E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"}
function T(t){switch(t){case E.RAW:case E.BASE64:case E.BASE64URL:case E.DATA_URL:return
default:throw"Expected one of the event types: ["+E.RAW+", "+E.BASE64+", "+E.BASE64URL+", "+E.DATA_URL+"]."}}var S=function(t,e){this.data=t,this.contentType=e||null}
function I(t,e){switch(t){case E.RAW:return new S(C(e))
case E.BASE64:case E.BASE64URL:return new S(N(t,e))
case E.DATA_URL:return new S((n=new A(e)).base64?N(E.BASE64,n.rest):function(t){var e
try{e=decodeURIComponent(t)}catch(t){throw b(E.DATA_URL,"Malformed data URL.")}return C(e)}(n.rest),new A(e).contentType)}var n
throw y()}function C(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n)
r<=127?e.push(r):r<=2047?e.push(192|r>>6,128|63&r):55296==(64512&r)?n<t.length-1&&56320==(64512&t.charCodeAt(n+1))?(r=65536|(1023&r)<<10|1023&t.charCodeAt(++n),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)):e.push(239,191,189):56320==(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function N(t,e){switch(t){case E.BASE64:var n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_")
if(n||r)throw b(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")
break
case E.BASE64URL:var i=-1!==e.indexOf("+"),o=-1!==e.indexOf("/")
if(i||o)throw b(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?")
e=e.replace(/-/g,"+").replace(/_/g,"/")}var a
try{a=atob(e)}catch(e){throw b(t,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u)
return s}var k,A=function(t){this.base64=!1,this.contentType=null
var e=t.match(/^data:([^,]+)?,/)
if(null===e)throw b(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>")
var n,r,i=e[1]||null
null!=i&&(this.base64=(r=";base64",(n=i).length>=r.length&&n.substring(n.length-r.length)===r),this.contentType=this.base64?i.substring(0,i.length-";base64".length):i),this.rest=t.substring(t.indexOf(",")+1)},D={STATE_CHANGED:"state_changed"},R={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},O={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"}
function P(t){switch(t){case R.RUNNING:case R.PAUSING:case R.CANCELING:return O.RUNNING
case R.PAUSED:return O.PAUSED
case R.SUCCESS:return O.SUCCESS
case R.CANCELED:return O.CANCELED
case R.ERROR:default:return O.ERROR}}function x(t){return null!=t}function M(t){return void 0!==t}function L(t){return"function"==typeof t}function F(t){return"object"===a(t)}function U(t){return F(t)&&null!==t}function q(t){return"string"==typeof t||t instanceof String}function V(t){return B(t)&&Number.isInteger(t)}function B(t){return"number"==typeof t||t instanceof Number}function j(t){return W()&&t instanceof Blob}function W(){return"undefined"!=typeof Blob}!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(k||(k={}))
var Q=function(){function t(){var t=this
this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=k.NO_ERROR,this.sendPromise_=new Promise(function(e){t.xhr_.addEventListener("abort",function(){t.errorCode_=k.ABORT,e(t)}),t.xhr_.addEventListener("error",function(){t.errorCode_=k.NETWORK_ERROR,e(t)}),t.xhr_.addEventListener("load",function(){e(t)})})}return t.prototype.send=function(t,e,n,r){if(this.sent_)throw w("cannot .send() more than once")
if(this.sent_=!0,this.xhr_.open(e,t,!0),x(r))for(var i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString())
return x(n)?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_},t.prototype.getErrorCode=function(){if(!this.sent_)throw w("cannot .getErrorCode() before sending")
return this.errorCode_},t.prototype.getStatus=function(){if(!this.sent_)throw w("cannot .getStatus() before sending")
try{return this.xhr_.status}catch(t){return-1}},t.prototype.getResponseText=function(){if(!this.sent_)throw w("cannot .getResponseText() before sending")
return this.xhr_.responseText},t.prototype.abort=function(){this.xhr_.abort()},t.prototype.getResponseHeader=function(t){return this.xhr_.getResponseHeader(t)},t.prototype.addUploadProgressListener=function(t){x(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",t)},t.prototype.removeUploadProgressListener=function(t){x(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",t)},t}(),K=function(){function t(){}return t.prototype.createXhrIo=function(){return new Q},t}()
function H(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0
if(void 0!==n){for(var r=new n,i=0;i<t.length;i++)r.append(t[i])
return r.getBlob()}if(W())return new Blob(t)
throw Error("This browser doesn't seem to support creating Blobs")}var G=function(){function t(t,e){var n=0,r=""
j(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}return t.prototype.size=function(){return this.size_},t.prototype.type=function(){return this.type_},t.prototype.slice=function(e,n){if(j(this.data_)){var r=function(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}(this.data_,e,n)
return null===r?null:new t(r)}return new t(new Uint8Array(this.data_.buffer,e,n-e),!0)},t.getBlob=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
if(W()){var r=e.map(function(e){return e instanceof t?e.data_:e})
return new t(H.apply(null,r))}var i=e.map(function(t){return q(t)?I(E.RAW,t).data:t.data_}),o=0
i.forEach(function(t){o+=t.byteLength})
var a=new Uint8Array(o),s=0
return i.forEach(function(t){for(var e=0;e<t.length;e++)a[s++]=t[e]}),new t(a,!0)},t.prototype.uploadData=function(){return this.data_},t}(),z=function(){function t(t,e){this.bucket=t,this.path_=e}return Object.defineProperty(t.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),t.prototype.fullServerUrl=function(){var t=encodeURIComponent
return"/b/"+t(this.bucket)+"/o/"+t(this.path)},t.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},t.makeFromBucketSpec=function(e){var n,r
try{n=t.makeFromUrl(e)}catch(n){return new t(e,"")}if(""===n.path)return n
throw r=e,new f(p.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")},t.makeFromUrl=function(e){for(var n=null,r=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i"),i=s.replace(/[.]/g,"\\."),o=[{regex:r,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+i+"/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:function(t){t.path_=decodeURIComponent(t.path)}}],a=0;a<o.length;a++){var u=o[a],c=u.regex.exec(e)
if(c){var h=c[u.indices.bucket],l=c[u.indices.path]
l||(l=""),n=new t(h,l),u.postModify(n)
break}}if(null==n)throw function(t){return new f(p.INVALID_URL,"Invalid URL '"+t+"'.")}(e)
return n},t}()
function Y(t){var e,n
try{e=JSON.parse(t)}catch(t){return null}return F(n=e)&&!Array.isArray(n)?e:null}function X(t){var e=t.lastIndexOf("/",t.length-2)
return-1===e?t:t.slice(e+1)}function J(t){return"https://"+s+"/v0"+t}function $(t){var e=encodeURIComponent,n="?"
for(var r in t)t.hasOwnProperty(r)&&(n=n+(e(r)+"=")+e(t[r])+"&")
return n.slice(0,-1)}function Z(t,e){return e}var tt=function(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||Z},et=null
function nt(t,e,n){var r=Y(e)
return null===r?null:function(t,e,n){for(var r={type:"file"},i=n.length,o=0;o<i;o++){var a=n[o]
r[a.local]=a.xform(r,e[a.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){var n=t.bucket,r=t.fullPath,i=new z(n,r)
return e.makeStorageReference(i)}})}(r,t),r}(t,r,n)}function rt(t,e){for(var n={},r=e.length,i=0;i<r;i++){var o=e[i]
o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}function it(t){if(!F(t)||!t)throw"Expected Metadata object."
for(var e in t)if(t.hasOwnProperty(e)){var n=t[e]
if("customMetadata"===e){if(!F(n))throw"Expected object for 'customMetadata' mapping."}else if(U(n))throw"Mapping for '"+e+"' cannot be an object."}}var ot="maxResults",at=1e3,st="pageToken",ut="prefixes",ct="items"
function ht(t){if(!F(t)||!t)throw"Expected ListOptions object."
for(var e in t)if(e===ot){if(!V(t[ot])||t[ot]<=0)throw"Expected maxResults to be a positive number."
if(t[ot]>1e3)throw"Expected maxResults to be less than or equal to "+at+"."}else{if(e!==st)throw"Unknown option: "+e
if(t[st]&&!q(t[st]))throw"Expected pageToken to be string."}}var lt=function(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}
function ft(t){if(!t)throw y()}function pt(t,e){return function(n,r){var i=nt(t,r,e)
return ft(null!==i),i}}function dt(t){return function(e,n){var r=function(t,e){var n=Y(e)
return null===n?null:function(t,e){var n={prefixes:[],items:[],nextPageToken:e.nextPageToken},r=t.bucket()
if(null===r)throw new f(p.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+u+"' property when initializing the app?")
if(e[ut])for(var i=0,o=e[ut];i<o.length;i++){var a=o[i].replace(/\/$/,""),s=t.makeStorageReference(new z(r,a))
n.prefixes.push(s)}if(e[ct])for(var c=0,h=e[ct];c<h.length;c++){var l=h[c]
s=t.makeStorageReference(new z(r,l.name)),n.items.push(s)}return n}(t,n)}(t,n)
return ft(null!==r),r}}function yt(t){return function(e,n){var r,i,o
return 401===e.getStatus()?r=new f(p.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(o=t.bucket,r=new f(p.QUOTA_EXCEEDED,"Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(i=t.path,r=new f(p.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):r=n,r.setServerResponseProp(n.serverResponseProp()),r}}function mt(t){var e=yt(t)
return function(n,r){var i,o=e(n,r)
return 404===n.getStatus()&&(i=t.path,o=new f(p.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")),o.setServerResponseProp(r.serverResponseProp()),o}}function gt(t,e,n){var r=J(e.fullServerUrl()),i=t.maxOperationRetryTime(),o=new lt(r,"GET",pt(t,n),i)
return o.errorHandler=mt(e),o}function vt(t,e,n){var r=J(e.fullServerUrl()),i=t.maxOperationRetryTime(),o=new lt(r,"GET",function(t,e){return function(n,r){var i=nt(t,r,e)
return ft(null!==i),function(t,e){var n=Y(e)
if(null===n)return null
if(!q(n.downloadTokens))return null
var r=n.downloadTokens
if(0===r.length)return null
var i=encodeURIComponent
return r.split(",").map(function(e){var n=t.bucket,r=t.fullPath
return J("/b/"+i(n)+"/o/"+i(r))+$({alt:"media",token:e})})[0]}(i,r)}}(t,n),i)
return o.errorHandler=mt(e),o}function _t(t,e,n){var r=Object.assign({},n)
return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=function(t,e){return e&&e.type()||"application/octet-stream"}(0,e)),r}var bt=function(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}
function wt(t,e){var n=null
try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(t){ft(!1)}return ft(!!n&&-1!==(e||["active"]).indexOf(n)),n}var Et=function(t,e,n){if(L(t)||x(e)||x(n))this.next=t,this.error=e||null,this.complete=n||null
else{var r=t
this.next=r.next||null,this.error=r.error||null,this.complete=r.complete||null}},Tt=function(t,e,n,r,i,o){this.bytesTransferred=t,this.totalBytes=e,this.state=n,this.metadata=r,this.task=i,this.ref=o}
function St(t,e,n){for(var r=e.length,i=e.length,o=0;o<e.length;o++)if(e[o].optional){r=o
break}var a,s,u,c,h,l
if(!(r<=n.length&&n.length<=i))throw a=r,s=i,u=t,c=n.length,a===s?(h=a,l=1===a?"argument":"arguments"):(h="between "+a+" and "+s,l="arguments"),new f(p.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+u+"`: Expected "+h+" "+l+", received "+c+".")
for(o=0;o<n.length;o++)try{e[o].validator(n[o])}catch(e){throw e instanceof Error?v(o,t,e.message):v(o,t,e)}}var It=function(t,e){var n=this
this.validator=function(e){n.optional&&!M(e)||t(e)},this.optional=!!e}
function Ct(t,e){function n(t){if(!q(t))throw"Expected string."}var r,i,o
return t?(i=n,o=t,r=function(t){i(t),o(t)}):r=n,new It(r,e)}function Nt(t){return new It(it,t)}function kt(t){return new It(ht,t)}function At(){return new It(function(t){if(!(B(t)&&t>=0))throw"Expected a number 0 or greater."})}function Dt(t,e){return new It(function(e){if(!(null===e||x(e)&&e instanceof Object))throw"Expected an Object."
null!=t&&t(e)},e)}function Rt(t){return new It(function(t){if(null!==t&&!L(t))throw"Expected a Function."},t)}function Ot(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
Promise.resolve().then(function(){return t.apply(void 0,e)})}}var Pt=function(){function t(t,e,n,r,i,o){var a=this
void 0===o&&(o=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=t,this.authWrapper_=e,this.location_=n,this.blob_=i,this.metadata_=o,this.mappings_=r,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=R.RUNNING,this.errorHandler_=function(t){a.request_=null,a.chunkMultiplier_=1,t.codeEquals(p.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=t,a.transition_(R.ERROR))},this.metadataErrorHandler_=function(t){a.request_=null,t.codeEquals(p.CANCELED)?a.completeTransitions_():(a.error_=t,a.transition_(R.ERROR))},this.promise_=new Promise(function(t,e){a.resolve_=t,a.reject_=e,a.start_()}),this.promise_.then(null,function(){})}return t.prototype.makeProgressCallback_=function(){var t=this,e=this.transferred_
return function(n){return t.updateProgress_(e+n)}},t.prototype.shouldDoResumable_=function(t){return t.size()>262144},t.prototype.start_=function(){this.state_===R.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},t.prototype.resolveToken_=function(t){var e=this
this.authWrapper_.getAuthToken().then(function(n){switch(e.state_){case R.RUNNING:t(n)
break
case R.CANCELING:e.transition_(R.CANCELED)
break
case R.PAUSING:e.transition_(R.PAUSED)}})},t.prototype.createResumable_=function(){var t=this
this.resolveToken_(function(e){var n=function(t,e,n,r,i){var o=e.bucketOnlyServerUrl(),a=_t(e,r,i),s={name:a.fullPath},u=J(o),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},h=rt(a,n),l=t.maxUploadRetryTime(),f=new lt(u,"POST",function(t){var e
wt(t)
try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(t){ft(!1)}return ft(q(e)),e},l)
return f.urlParams=s,f.headers=c,f.body=h,f.errorHandler=yt(e),f}(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),r=t.authWrapper_.makeRequest(n,e)
t.request_=r,r.getPromise().then(function(e){t.request_=null,t.uploadUrl_=e,t.needToFetchStatus_=!1,t.completeTransitions_()},t.errorHandler_)})},t.prototype.fetchStatus_=function(){var t=this,e=this.uploadUrl_
this.resolveToken_(function(n){var r=function(t,e,n,r){var i=t.maxUploadRetryTime(),o=new lt(n,"POST",function(t){var e=wt(t,["active","final"]),n=null
try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(t){ft(!1)}n||ft(!1)
var i=Number(n)
return ft(!isNaN(i)),new bt(i,r.size(),"final"===e)},i)
return o.headers={"X-Goog-Upload-Command":"query"},o.errorHandler=yt(e),o}(t.authWrapper_,t.location_,e,t.blob_),i=t.authWrapper_.makeRequest(r,n)
t.request_=i,i.getPromise().then(function(e){e=e,t.request_=null,t.updateProgress_(e.current),t.needToFetchStatus_=!1,e.finalized&&(t.needToFetchMetadata_=!0),t.completeTransitions_()},t.errorHandler_)})},t.prototype.continueUpload_=function(){var t=this,e=262144*this.chunkMultiplier_,n=new bt(this.transferred_,this.blob_.size()),r=this.uploadUrl_
this.resolveToken_(function(i){var o
try{o=function(t,e,n,r,i,o,a,s){var u=new bt(0,0)
if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw new f(p.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")
var c=u.total-u.current,h=c
i>0&&(h=Math.min(h,i))
var l=u.current,d=l+h,y={"X-Goog-Upload-Command":h===c?"upload, finalize":"upload","X-Goog-Upload-Offset":u.current},m=r.slice(l,d)
if(null===m)throw g()
var v=e.maxUploadRetryTime(),_=new lt(n,"POST",function(t,n){var i,a=wt(t,["active","final"]),s=u.current+h,c=r.size()
return i="final"===a?pt(e,o)(t,n):null,new bt(s,c,"final"===a,i)},v)
return _.headers=y,_.body=m.uploadData(),_.progressCallback=s||null,_.errorHandler=yt(t),_}(t.location_,t.authWrapper_,r,t.blob_,e,t.mappings_,n,t.makeProgressCallback_())}catch(e){return t.error_=e,void t.transition_(R.ERROR)}var a=t.authWrapper_.makeRequest(o,i)
t.request_=a,a.getPromise().then(function(e){t.increaseMultiplier_(),t.request_=null,t.updateProgress_(e.current),e.finalized?(t.metadata_=e.metadata,t.transition_(R.SUCCESS)):t.completeTransitions_()},t.errorHandler_)})},t.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},t.prototype.fetchMetadata_=function(){var t=this
this.resolveToken_(function(e){var n=gt(t.authWrapper_,t.location_,t.mappings_),r=t.authWrapper_.makeRequest(n,e)
t.request_=r,r.getPromise().then(function(e){t.request_=null,t.metadata_=e,t.transition_(R.SUCCESS)},t.metadataErrorHandler_)})},t.prototype.oneShotUpload_=function(){var t=this
this.resolveToken_(function(e){var n=function(t,e,n,r,i){var o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var t="",e=0;e<2;e++)t+=Math.random().toString().slice(2)
return t}()
a["Content-Type"]="multipart/related; boundary="+s
var u=_t(e,r,i),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+rt(u,n)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",h="\r\n--"+s+"--",l=G.getBlob(c,r,h)
if(null===l)throw g()
var f={name:u.fullPath},p=J(o),d=t.maxUploadRetryTime(),y=new lt(p,"POST",pt(t,n),d)
return y.urlParams=f,y.headers=a,y.body=l.uploadData(),y.errorHandler=yt(e),y}(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),r=t.authWrapper_.makeRequest(n,e)
t.request_=r,r.getPromise().then(function(e){t.request_=null,t.metadata_=e,t.updateProgress_(t.blob_.size()),t.transition_(R.SUCCESS)},t.errorHandler_)})},t.prototype.updateProgress_=function(t){var e=this.transferred_
this.transferred_=t,this.transferred_!==e&&this.notifyObservers_()},t.prototype.transition_=function(t){if(this.state_!==t)switch(t){case R.CANCELING:case R.PAUSING:this.state_=t,null!==this.request_&&this.request_.cancel()
break
case R.RUNNING:var e=this.state_===R.PAUSED
this.state_=t,e&&(this.notifyObservers_(),this.start_())
break
case R.PAUSED:this.state_=t,this.notifyObservers_()
break
case R.CANCELED:this.error_=m(),this.state_=t,this.notifyObservers_()
break
case R.ERROR:case R.SUCCESS:this.state_=t,this.notifyObservers_()}},t.prototype.completeTransitions_=function(){switch(this.state_){case R.PAUSING:this.transition_(R.PAUSED)
break
case R.CANCELING:this.transition_(R.CANCELED)
break
case R.RUNNING:this.start_()}},Object.defineProperty(t.prototype,"snapshot",{get:function(){var t=P(this.state_)
return new Tt(this.transferred_,this.blob_.size(),t,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),t.prototype.on=function(t,e,n,r){var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",o=Rt(!0).validator,a=Dt(null,!0).validator
function s(t){try{return void o(t)}catch(t){}try{if(a(t),!(M(t.next)||M(t.error)||M(t.complete)))throw""
return}catch(t){throw i}}St("on",[Ct(function(){if(t!==D.STATE_CHANGED)throw"Expected one of the event types: ["+D.STATE_CHANGED+"]."}),Dt(s,!0),Rt(!0),Rt(!0)],arguments)
var u=this
function c(t){return function(e,n,i){null!==t&&St("on",t,arguments)
var o=new Et(e,n,r)
return u.addObserver_(o),function(){u.removeObserver_(o)}}}var h=[Dt(function(t){if(null===t)throw i
s(t)}),Rt(!0),Rt(!0)]
return!(M(e)||M(n)||M(r))?c(h):c(null)(e,n,r)},t.prototype.then=function(t,e){return this.promise_.then(t,e)},t.prototype.catch=function(t){return this.then(null,t)},t.prototype.addObserver_=function(t){this.observers_.push(t),this.notifyObserver_(t)},t.prototype.removeObserver_=function(t){var e=this.observers_.indexOf(t);-1!==e&&this.observers_.splice(e,1)},t.prototype.notifyObservers_=function(){var t=this
this.finishPromise_(),this.observers_.slice().forEach(function(e){t.notifyObserver_(e)})},t.prototype.finishPromise_=function(){if(null!==this.resolve_){var t=!0
switch(P(this.state_)){case O.SUCCESS:Ot(this.resolve_.bind(null,this.snapshot))()
break
case O.CANCELED:case O.ERROR:Ot(this.reject_.bind(null,this.error_))()
break
default:t=!1}t&&(this.resolve_=null,this.reject_=null)}},t.prototype.notifyObserver_=function(t){switch(P(this.state_)){case O.RUNNING:case O.PAUSED:t.next&&Ot(t.next.bind(t,this.snapshot))()
break
case O.SUCCESS:t.complete&&Ot(t.complete.bind(t))()
break
case O.CANCELED:case O.ERROR:t.error&&Ot(t.error.bind(t,this.error_))()
break
default:t.error&&Ot(t.error.bind(t,this.error_))()}},t.prototype.resume=function(){St("resume",[],arguments)
var t=this.state_===R.PAUSED||this.state_===R.PAUSING
return t&&this.transition_(R.RUNNING),t},t.prototype.pause=function(){St("pause",[],arguments)
var t=this.state_===R.RUNNING
return t&&this.transition_(R.PAUSING),t},t.prototype.cancel=function(){St("cancel",[],arguments)
var t=this.state_===R.RUNNING||this.state_===R.PAUSING
return t&&this.transition_(R.CANCELING),t},t}(),xt=function(){function t(t,e){this.authWrapper=t,this.location=e instanceof z?e:z.makeFromUrl(e)}return t.prototype.toString=function(){return St("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},t.prototype.newRef=function(e,n){return new t(e,n)},t.prototype.mappings=function(){return function(){if(et)return et
var t=[]
t.push(new tt("bucket")),t.push(new tt("generation")),t.push(new tt("metageneration")),t.push(new tt("name","fullPath",!0))
var e=new tt("name")
e.xform=function(t,e){return function(t){return!q(t)||t.length<2?t:X(t)}(e)},t.push(e)
var n=new tt("size")
return n.xform=function(t,e){return x(e)?Number(e):e},t.push(n),t.push(new tt("timeCreated")),t.push(new tt("updated")),t.push(new tt("md5Hash",null,!0)),t.push(new tt("cacheControl",null,!0)),t.push(new tt("contentDisposition",null,!0)),t.push(new tt("contentEncoding",null,!0)),t.push(new tt("contentLanguage",null,!0)),t.push(new tt("contentType",null,!0)),t.push(new tt("metadata","customMetadata",!0)),et=t}()},t.prototype.child=function(t){St("child",[Ct()],arguments)
var e=function(t,e){var n=e.split("/").filter(function(t){return t.length>0}).join("/")
return 0===t.length?n:t+"/"+n}(this.location.path,t),n=new z(this.location.bucket,e)
return this.newRef(this.authWrapper,n)},Object.defineProperty(t.prototype,"parent",{get:function(){var t=function(t){if(0===t.length)return null
var e=t.lastIndexOf("/")
return-1===e?"":t.slice(0,e)}(this.location.path)
if(null===t)return null
var e=new z(this.location.bucket,t)
return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){var t=new z(this.location.bucket,"")
return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return X(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,e){return void 0===e&&(e=null),St("put",[new It(function(t){if(!(t instanceof Uint8Array||t instanceof ArrayBuffer||W()&&t instanceof Blob))throw"Expected Blob or File."}),Nt(!0)],arguments),this.throwIfRoot_("put"),new Pt(this,this.authWrapper,this.location,this.mappings(),new G(t),e)},t.prototype.putString=function(t,e,n){void 0===e&&(e=E.RAW),St("putString",[Ct(),Ct(T,!0),Nt(!0)],arguments),this.throwIfRoot_("putString")
var r=I(e,t),i=Object.assign({},n)
return!x(i.contentType)&&x(r.contentType)&&(i.contentType=r.contentType),new Pt(this,this.authWrapper,this.location,this.mappings(),new G(r.data,!0),i)},t.prototype.delete=function(){var t=this
return St("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then(function(e){var n=function(t,e){var n=J(e.fullServerUrl()),r=t.maxOperationRetryTime(),i=new lt(n,"DELETE",function(t,e){},r)
return i.successCodes=[200,204],i.errorHandler=mt(e),i}(t.authWrapper,t.location)
return t.authWrapper.makeRequest(n,e).getPromise()})},t.prototype.listAll=function(){St("listAll",[],arguments)
var t={prefixes:[],items:[]}
return this.listAllHelper(t).then(function(){return t})},t.prototype.listAllHelper=function(t,e){return Object(o.__awaiter)(this,void 0,void 0,function(){var n,r,i,a
return Object(o.__generator)(this,function(o){switch(o.label){case 0:return n={pageToken:e},[4,this.list(n)]
case 1:return r=o.sent(),(i=t.prefixes).push.apply(i,r.prefixes),(a=t.items).push.apply(a,r.items),null==r.nextPageToken?[3,3]:[4,this.listAllHelper(t,r.nextPageToken)]
case 2:o.sent(),o.label=3
case 3:return[2]}})})},t.prototype.list=function(t){St("list",[kt(!0)],arguments)
var e=this
return this.authWrapper.getAuthToken().then(function(n){var r=t||{},i=function(t,e,n,r,i){var o={}
e.isRoot?o.prefix="":o.prefix=e.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),i&&(o.maxResults=i)
var a=J(e.bucketOnlyServerUrl()),s=t.maxOperationRetryTime(),u=new lt(a,"GET",dt(t),s)
return u.urlParams=o,u.errorHandler=yt(e),u}(e.authWrapper,e.location,"/",r.pageToken,r.maxResults)
return e.authWrapper.makeRequest(i,n).getPromise()})},t.prototype.getMetadata=function(){var t=this
return St("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then(function(e){var n=gt(t.authWrapper,t.location,t.mappings())
return t.authWrapper.makeRequest(n,e).getPromise()})},t.prototype.updateMetadata=function(t){var e=this
return St("updateMetadata",[Nt()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then(function(n){var r=function(t,e,n,r){var i=J(e.fullServerUrl()),o=rt(n,r),a=t.maxOperationRetryTime(),s=new lt(i,"PATCH",pt(t,r),a)
return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=o,s.errorHandler=mt(e),s}(e.authWrapper,e.location,t,e.mappings())
return e.authWrapper.makeRequest(r,n).getPromise()})},t.prototype.getDownloadURL=function(){var t=this
return St("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then(function(e){var n=vt(t.authWrapper,t.location,t.mappings())
return t.authWrapper.makeRequest(n,e).getPromise().then(function(t){if(null===t)throw new f(p.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")
return t})})},t.prototype.throwIfRoot_=function(t){if(""===this.location.path)throw function(t){return new f(p.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)},t}(),Mt=function(){function t(t){this.promise_=Promise.reject(t)}return t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){},t}(),Lt=function(){function t(){this.map=new Map,this.id=l}return t.prototype.addRequest=function(t){var e=this,n=this.id
this.id++,this.map.set(n,t),t.getPromise().then(function(){return e.map.delete(n)},function(){return e.map.delete(n)})},t.prototype.clear=function(){this.map.forEach(function(t){t&&t.cancel(!0)}),this.map.clear()},t}(),Ft=function(){function t(e,n,r,i,o){if(this.bucket_=null,this.deleted_=!1,this.app_=e,null!==this.app_){var a=this.app_.options
x(a)&&(this.bucket_=t.extractBucket_(a))}this.storageRefMaker_=n,this.requestMaker_=r,this.pool_=o,this.service_=i,this.maxOperationRetryTime_=c,this.maxUploadRetryTime_=h,this.requestMap_=new Lt}return t.extractBucket_=function(t){var e=t[u]||null
return null==e?null:z.makeFromBucketSpec(e).bucket},t.prototype.getAuthToken=function(){return null!==this.app_&&x(this.app_.INTERNAL)&&x(this.app_.INTERNAL.getToken)?this.app_.INTERNAL.getToken().then(function(t){return null!==t?t.accessToken:null},function(){return null}):Promise.resolve(null)},t.prototype.bucket=function(){if(this.deleted_)throw _()
return this.bucket_},t.prototype.service=function(){return this.service_},t.prototype.makeStorageReference=function(t){return this.storageRefMaker_(this,t)},t.prototype.makeRequest=function(t,e){if(this.deleted_)return new Mt(_())
var n=this.requestMaker_(t,e,this.pool_)
return this.requestMap_.addRequest(n),n},t.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},t.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},t.prototype.setMaxUploadRetryTime=function(t){this.maxUploadRetryTime_=t},t.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},t.prototype.setMaxOperationRetryTime=function(t){this.maxOperationRetryTime_=t},t}(),Ut=function(){function t(t,e,n,r,i,o,a,s,u,c,h){var l=this
this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=h,this.promise_=new Promise(function(t,e){l.resolve_=t,l.reject_=e,l.start_()})}return t.prototype.start_=function(){var t=this
function e(e,n){var r,i=t.resolve_,o=t.reject_,a=n.xhr
if(n.wasSuccessCode)try{var s=t.callback_(a,a.getResponseText())
M(s)?i(s):i()}catch(t){o(t)}else null!==a?((r=y()).setServerResponseProp(a.getResponseText()),t.errorCallback_?o(t.errorCallback_(a,r)):o(r)):n.canceled?o(r=t.appDelete_?_():m()):o(r=new f(p.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}this.canceled_?e(0,new qt(!1,null,!0)):this.backoffId_=function(t,e,n){var r=1,i=null,o=!1,a=0
function s(){return 2===a}var u=!1
function c(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout(function(){i=null,t(l,s())},e)}function l(t){for(var e,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i]
u||(t?c.call.apply(c,[null,t].concat(n)):s()||o?c.call.apply(c,[null,t].concat(n)):(r<64&&(r*=2),1===a?(a=2,e=0):e=1e3*(r+Math.random()),h(e)))}var f=!1
function p(t){f||(f=!0,u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),setTimeout(function(){o=!0,p(!0)},n),p}(function(e,n){if(n)e(!1,new qt(!1,null,!0))
else{var r=t.pool_.createXhrIo()
t.pendingXhr_=r,null!==t.progressCallback_&&r.addUploadProgressListener(i),r.send(t.url_,t.method_,t.body_,t.headers_).then(function(n){null!==t.progressCallback_&&n.removeUploadProgressListener(i),t.pendingXhr_=null
var r=(n=n).getErrorCode()===k.NO_ERROR,o=n.getStatus()
if(r&&!t.isRetryStatusCode_(o)){var a=-1!==t.successCodes_.indexOf(o)
e(!0,new qt(a,n))}else{var s=n.getErrorCode()===k.ABORT
e(!1,new qt(!1,null,s))}})}function i(e){var n=e.loaded,r=e.lengthComputable?e.total:-1
null!==t.progressCallback_&&t.progressCallback_(n,r)}},e,this.timeout_)},t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},t.prototype.isRetryStatusCode_=function(t){var e=t>=500&&t<600,n=-1!==[408,429].indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t)
return e||n||r},t}(),qt=function(t,e,n){this.wasSuccessCode=t,this.xhr=e,this.canceled=!!n}
function Vt(t,e,n){var r=$(t.urlParams),o=t.url+r,a=Object.assign({},t.headers)
return function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(a,e),function(t){var e=void 0!==i.a?i.a.SDK_VERSION:"AppManager"
t["X-Firebase-Storage-Version"]="webjs/"+e}(a),new Ut(o,t.method,a,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,n)}var Bt,jt,Wt=function(){function t(t,e,n){if(this.bucket_=null,this.authWrapper_=new Ft(t,function(t,e){return new xt(t,e)},Vt,this,e),this.app_=t,null!=n)this.bucket_=z.makeFromBucketSpec(n)
else{var r=this.authWrapper_.bucket()
null!=r&&(this.bucket_=new z(r,""))}this.internals_=new Qt(this)}return t.prototype.ref=function(t){if(St("ref",[Ct(function(t){if("string"!=typeof t)throw"Path is not a string."
if(/^[A-Za-z]+:\/\//.test(t))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.")
var e=new xt(this.authWrapper_,this.bucket_)
return null!=t?e.child(t):e},t.prototype.refFromURL=function(t){return St("refFromURL",[Ct(function(t){if("string"!=typeof t)throw"Path is not a string."
if(!/^[A-Za-z]+:\/\//.test(t))throw"Expected full URL but got a child path, use ref instead."
try{z.makeFromUrl(t)}catch(t){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new xt(this.authWrapper_,t)},Object.defineProperty(t.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxUploadRetryTime=function(t){St("setMaxUploadRetryTime",[At()],arguments),this.authWrapper_.setMaxUploadRetryTime(t)},t.prototype.setMaxOperationRetryTime=function(t){St("setMaxOperationRetryTime",[At()],arguments),this.authWrapper_.setMaxOperationRetryTime(t)},Object.defineProperty(t.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),t}(),Qt=function(){function t(t){this.service_=t}return t.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},t}()
Bt=i.a,jt={TaskState:O,TaskEvent:D,StringFormat:E,Storage:Wt,Reference:xt},Bt.INTERNAL.registerService("storage",function(t,e,n){return new Wt(t,new K,n)},jt,void 0,!0)}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{188:function(t,e,n){"use strict"
n.r(e),n(196)},196:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,a=n(0),s=n(64)
n(197)
var u,c,h,l,f,p,d=n(65),y="0.2.17",m="FB-PERF-TRACE-START",g="FB-PERF-TRACE-STOP",v="FB-PERF-TRACE-MEASURE",_="_wt_",b="@firebase/performance/config",w="@firebase/performance/configexpire",E=((u={})["trace started"]="Trace {$traceName} was started before.",u["trace stopped"]="Trace {$traceName} is not running.",u["no window"]="Window is not available.",u["no app id"]="App id is not available.",u["no project id"]="Project id is not available.",u["no api key"]="Api key is not available.",u["invalid cc log"]="Attempted to queue invalid cc event",u["FB not default"]="Performance can only start when Firebase app instance is the default one.",u["RC response not ok"]="RC response is not ok",u["invalid attribute name"]="Attribute name {$attributeName} is invalid.",u["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",u["invalide custom metric name"]="Custom metric name {$customMetricName} is invalid",u),T=new s.ErrorFactory("performance","Performance",E),S=function(){function t(t){if(!t)throw T.create("no window")
this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver(function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var i=r[n]
e(i)}}).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===c&&(c=new t(h)),c},t}(),I=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId
if(!t)throw T.create("no app id")
return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId
if(!t)throw T.create("no project id")
return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey
if(!t)throw T.create("no api key")
return t},t.getInstance=function(){return void 0===l&&(l=new t),l},t}()
function C(){return f}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN",t[t.PRERENDER=3]="PRERENDER",t[t.UNLOADED=4]="UNLOADED"}(p||(p={}))
var N=["firebase_","google_","ga_"],k=new RegExp("^[a-zA-Z]\\w*$")
function A(){switch(S.getInstance().document.visibilityState){case"visible":return p.VISIBLE
case"hidden":return p.HIDDEN
case"prerender":return p.PRERENDER
default:return p.UNKNOWN}}function D(){var t=S.getInstance().navigator.connection
switch(t&&t.effectiveType){case"slow-2g":return 1
case"2g":return 2
case"3g":return 3
case"4g":return 4
default:return 0}}var R=new d.Logger("Performance")
R.logLevel=d.LogLevel.INFO
var O="0.0.1",P={loggingEnabled:!0},x="FIREBASE_INSTALLATIONS_AUTH"
var M="Could not fetch config, will use default configs"
function L(t){if(!t)return t
var e=I.getInstance(),n=t.entries||{}
return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=P.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=F(e.tracesSamplingRate),e.logNetworkAfterSampling=F(e.networkRequestsSamplingRate),t}function F(t){return Math.random()<=t}var U,q=1
function V(){var t
return q=2,U=U||(t=S.getInstance().document,new Promise(function(e){t&&"complete"!==t.readyState?t.addEventListener("readystatechange",function n(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())}):e()})).then(function(){return(t=I.getInstance().firebaseAppInstance.installations().getId()).then(function(t){f=t}),t
var t}).then(function(t){return function(t){var e=function(){var t=S.getInstance().localStorage,e=t.getItem(w)
if(e&&Number(e)>Date.now()){var n=t.getItem(b)
if(n)try{return JSON.parse(n)}catch(t){return}}}()
return e?(L(e),Promise.resolve()):function(t){return(e=I.getInstance().firebaseAppInstance.installations().getToken(),e.then(function(t){}),e).then(function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+I.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+I.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:x+" "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:I.getInstance().getAppId(),app_version:y,sdk_version:O})})
return fetch(r).then(function(t){if(t.ok)return t.json()
throw T.create("RC response not ok")})}).catch(function(){R.info(M)})
var e}(t).then(function(t){return L(t)}).then(function(t){return function(t){if(t){var e=S.getInstance().localStorage
e.setItem(b,JSON.stringify(t)),e.setItem(w,String(Date.now()+60*I.getInstance().configTimeToLive*60*1e3))}}(t)},function(){})}(t)}).then(function(){return B()},function(){return B()})}function B(){q=3}var j,W=1e4,Q=3,K=[]
function H(){if(j)return j
var t=function(t){return function(e,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];(function(t){if(!t.eventTime||!t.message)throw T.create("invalid cc log")
K=K.concat([t])})({message:t.apply(void 0,r),eventTime:Date.now()})}}(Y)
return(j=new d.Logger("@firebase/performance/cc")).logHandler=t,j}function G(t){var e=I.getInstance()
!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&S.getInstance().requiredApisAvailable()&&(t.isAuto&&A()!==p.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===q?z(t):V().then(function(){return z(t)},function(){return z(t)})))}function z(t){C()&&setTimeout(function(){return H().log(t,1)},0)}function Y(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:X(),network_request_metric:r},JSON.stringify(i)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs}
0!==Object.keys(t.counters).length&&(e.counters=J(t.counters))
var n=t.getAttributes()
0!==Object.keys(n).length&&(e.custom_attributes=J(n))
var r={application_info:X(),trace_metric:e}
return JSON.stringify(r)}(t)
var n,r,i}function X(){return{google_app_id:I.getInstance().getAppId(),app_instance_id:C(),web_app_info:{sdk_version:y,page_url:S.getInstance().getUrl(),service_worker_status:(t=S.getInstance().navigator,"serviceWorker"in t?t.serviceWorker.controller?2:3:1),visibility_state:A(),effective_connection_type:D()},application_process_state:0}
var t}function J(t){return Object.keys(t).map(function(e){return{key:e,value:t[e]}})}!function t(e){setTimeout(function(){if(0!==Q){if(!K.length)return t(W)
var e=K.slice()
K=[]
var n=e.map(function(t){return{source_extension_json:t.message,event_time_ms:String(t.eventTime)}}),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:I.getInstance().logSource,log_event:n}
fetch(I.getInstance().logEndPointUrl,{method:"POST",body:JSON.stringify(r)}).then(function(t){return t.ok||R.info("Call to Firebase backend failed."),t.json()}).then(function(e){var n=Number(e.next_request_wait_millis),r=isNaN(n)?W:Math.max(W,n)
Q=3,t(r)}).catch(function(){K=e.concat(K),Q--,R.info("Tries left: "+Q+"."),t(W)})}},e)}(5500)
var $=["_fp","_fcp","_fid"],Z=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=S.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=m+"-"+this.randomId+"-"+this.name,this.traceStopMark=g+"-"+this.randomId+"-"+this.name,this.traceMeasure=n||v+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw T.create("trace started",{traceName:this.name})
this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw T.create("trace stopped",{traceName:this.name})
this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),G(this)},t.prototype.record=function(t,e,n){if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=a.__assign({},n.attributes)),n&&n.metrics)for(var r=0,i=Object.keys(n.metrics);r<i.length;r++){var o=i[r]
isNaN(Number(n.metrics[o]))||(this.counters[o]=Number(Math.floor(n.metrics[o])))}G(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]&&this.putMetric(t,0),this.counters[t]+=e},t.prototype.putMetric=function(t,e){if(n=t,r=this.name,0===n.length||n.length>100||!(r&&r.startsWith(_)&&$.indexOf(n)>-1)&&n.startsWith("_"))throw T.create("invalide custom metric name",{customMetricName:t})
var n,r
this.counters[t]=e},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n,r=!(0===(n=t).length||n.length>40||N.some(function(t){return n.startsWith(t)})||!n.match(k)),i=function(t){return 0!==t.length&&t.length<=100}(e)
if(r&&i)this.customAttributes[t]=e
else{if(!r)throw T.create("invalid attribute name",{attributeName:t})
if(!i)throw T.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return a.__assign({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0]
e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=S.getInstance().getUrl()
if(i){var o=new t(_+i,!0),a=Math.floor(1e3*S.getInstance().getTimeOrigin())
if(o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd))),n){var s=n.find(function(t){return"first-paint"===t.name})
s&&s.startTime&&o.putMetric("_fp",Math.floor(1e3*s.startTime))
var u=n.find(function(t){return"first-contentful-paint"===t.name})
u&&u.startTime&&o.putMetric("_fcp",Math.floor(1e3*u.startTime)),r&&o.putMetric("_fid",Math.floor(1e3*r))}G(o)}},t.createUserTimingTrace=function(e){G(new t(e,!1,e))},t}()
function tt(t){var e=t
if(e&&void 0!==e.responseStart){var n=S.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime))
!function(t){var e=I.getInstance()
e.instrumentationEnabled&&t.url!==e.logEndPointUrl.split("?")[0]&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(function(){return H().log(t,0)},0)}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}}var et=5e3
function nt(){C()&&(setTimeout(function(){return function(){var t=S.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint")
if(t.onFirstInputDelay){var r=setTimeout(function(){Z.createOobTrace(e,n),r=void 0},et)
t.onFirstInputDelay(function(t){r&&(clearTimeout(r),Z.createOobTrace(e,n,t))})}else Z.createOobTrace(e,n)}()},0),setTimeout(function(){return function(){for(var t=S.getInstance(),e=0,n=t.getEntriesByType("resource");e<n.length;e++)tt(n[e])
t.setupObserver("resource",tt)}()},0),setTimeout(function(){return function(){for(var t=S.getInstance(),e=0,n=t.getEntriesByType("measure");e<n.length;e++)rt(n[e])
t.setupObserver("measure",rt)}()},0))}function rt(t){var e=t.name
e.substring(0,v.length)!==v&&Z.createUserTimingTrace(e)}var it=function(){function t(t){this.app=t,S.getInstance().requiredApisAvailable()?V().then(nt,nt):R.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}return t.prototype.trace=function(t){return new Z(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return I.getInstance().instrumentationEnabled},set:function(t){I.getInstance().instrumentationEnabled=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return I.getInstance().dataCollectionEnabled},set:function(t){I.getInstance().dataCollectionEnabled=t},enumerable:!0,configurable:!0}),t}(),ot="[DEFAULT]"
function at(t){t.INTERNAL.registerService("performance",function(t){if(t.name!==ot)throw T.create("FB not default")
if("undefined"==typeof window)throw T.create("no window")
return function(t){h=t}(window),I.getInstance().firebaseAppInstance=t,new it(t)},{})}at(o),e.registerPerformance=at},197:function(t,e,n){"use strict"
n.r(e),n.d(e,"registerInstallations",function(){return z})
var r,i=n(63),o=n.n(i),a=n(0),s=n(64),u=n(198),c=1e4,h="w:0.2.5",l="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,d=((r={})["missing-app-config-values"]="Missing App configuration values.",r["create-installation-failed"]="Could not register Firebase Installation.",r["generate-token-failed"]="Could not generate Auth Token.",r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),y=new s.ErrorFactory("installations","Installations",d)
function m(t){return t instanceof s.FirebaseError&&t.code.includes("request-failed")}function g(t){if(!t||!t.options)throw y.create("missing-app-config-values")
var e=t.name,n=t.options,r=n.projectId,i=n.apiKey,o=n.appId
if(!(e&&r&&i&&o))throw y.create("missing-app-config-values")
return{appName:e,projectId:r,apiKey:i,appId:o}}function v(t){var e=t.projectId
return f+"/projects/"+e+"/installations"}function _(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()}
var e}function b(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,e.json()]
case 1:return n=i.sent(),r=n.error,[2,y.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}})})}function w(t){var e=t.apiKey
return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function E(t,e){var n=e.refreshToken,r=w(t)
return r.append("Authorization",l+" "+n),r}function T(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,t()]
case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}})})}function S(t,e){var n=e.fid
return Object(a.__awaiter)(this,void 0,void 0,function(){var e,r,i,o,s,u
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return e=v(t),r=w(t),i={fid:n,authVersion:l,appId:t.appId,sdkVersion:h},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,T(function(){return fetch(e,o)})]
case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3]
case 2:return[2,{fid:(u=a.sent()).fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:_(u.authToken)}]
case 3:return[4,b("Create Installation",s)]
case 4:throw a.sent()}})})}function I(t){return new Promise(function(e){setTimeout(e,t)})}var C=/^[cdef][\w-]{21}$/,N=""
function k(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16
var e=function(t){return(e=t,btoa(String.fromCharCode.apply(String,Object(a.__spread)(e))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22)
var e}(t)
return C.test(e)?e:N}catch(t){return N}}var A="firebase-installations-database",D=1,R="firebase-installations-store",O=null
function P(){return O||(O=Object(u.openDb)(A,D,function(t){switch(t.oldVersion){case 0:t.createObjectStore(R)}})),O}function x(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return n=F(t),[4,P()]
case 1:return r=o.sent(),[4,(i=r.transaction(R,"readwrite")).objectStore(R).put(e,n)]
case 2:return o.sent(),[4,i.complete]
case 3:return o.sent(),[2,e]}})})}function M(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return e=F(t),[4,P()]
case 1:return n=i.sent(),[4,(r=n.transaction(R,"readwrite")).objectStore(R).delete(e)]
case 2:return i.sent(),[4,r.complete]
case 3:return i.sent(),[2]}})})}function L(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o,s,u
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=F(t),[4,P()]
case 1:return r=a.sent(),i=r.transaction(R,"readwrite"),[4,(o=i.objectStore(R)).get(n)]
case 2:return s=a.sent(),(u=e(s))===s?[2,u]:void 0!==u?[3,4]:[4,o.delete(n)]
case 3:return a.sent(),[3,6]
case 4:return[4,o.put(u,n)]
case 5:a.sent(),a.label=6
case 6:return[4,i.complete]
case 7:return a.sent(),[2,u]}})})}function F(t){return t.appName+"!"+t.appId}function U(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,L(t,function(n){var r=function(t){var e=n||{fid:k(),registrationStatus:0}
return B(e)?{fid:e.fid,registrationStatus:0}:e}(),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(y.create("app-offline"))}
var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=function(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,S(t,e)]
case 1:return n=i.sent(),[2,x(t,n)]
case 2:return m(r=i.sent())&&409===r.serverCode?[4,M(t)]:[3,4]
case 3:return i.sent(),[3,6]
case 4:return[4,x(t,{fid:e.fid,registrationStatus:0})]
case 5:i.sent(),i.label=6
case 6:throw r
case 7:return[2]}})})}(t,n)
return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:q(t)}:{installationEntry:e}}(t,r)
return e=i.registrationPromise,i.installationEntry})]
case 1:return(n=i.sent()).fid!==N?[3,3]:(r={},[4,e])
case 2:return[2,(r.installationEntry=i.sent(),r)]
case 3:return[2,{installationEntry:n,registrationPromise:e}]}})})}function q(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,V(t)]
case 1:e=n.sent(),n.label=2
case 2:return 1!==e.registrationStatus?[3,5]:[4,I(100)]
case 3:return n.sent(),[4,V(t)]
case 4:return e=n.sent(),[3,2]
case 5:if(0===e.registrationStatus)throw y.create("create-installation-failed")
return[2,e]}})})}function V(t){return L(t,function(t){if(!t)throw y.create("installation-not-found")
return B(t)?{fid:t.fid,registrationStatus:0}:t})}function B(t){return 1===t.registrationStatus&&t.registrationTime+c<Date.now()}function j(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o,s
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid
return v(t)+"/"+n+"/authTokens:generate"}(t,e),r=E(t,e),i={installation:{sdkVersion:h}},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,T(function(){return fetch(n,o)})]
case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3]
case 2:return[2,_(a.sent())]
case 3:return[4,b("Generate Auth Token",s)]
case 4:throw a.sent()}})})}function W(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,L(t,function(n){if(!K(n))throw y.create("not-registered")
var r=n.authToken
if(function(t){return 2===t.requestStatus&&!function(t){var e=Date.now()
return e<t.creationTime||t.creationTime+t.expiresIn<e+p}(t)}(r))return n
if(1===r.requestStatus)return e=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n
return Object(a.__generator)(this,function(r){switch(r.label){case 0:return[4,Q(t)]
case 1:e=r.sent(),r.label=2
case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,I(100)]
case 3:return r.sent(),[4,Q(t)]
case 4:return e=r.sent(),[3,2]
case 5:if(0===(n=e.authToken).requestStatus)throw y.create("generate-token-failed")
return[2,n]}})})}(t),n
if(!navigator.onLine)throw y.create("app-offline")
var i=function(t){var e={requestStatus:1,requestTime:Date.now()}
return Object(a.__assign)({},t,{authToken:e})}(n)
return e=function(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,j(t,e)]
case 1:return n=o.sent(),i=Object(a.__assign)({},e,{authToken:n}),[4,x(t,i)]
case 2:return o.sent(),[2,n]
case 3:return!m(r=o.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,M(t)]
case 4:return o.sent(),[3,7]
case 5:return i=Object(a.__assign)({},e,{authToken:{requestStatus:0}}),[4,x(t,i)]
case 6:o.sent(),o.label=7
case 7:throw r
case 8:return[2]}})})}(t,i),i})]
case 1:return n=i.sent(),e?[4,e]:[3,3]
case 2:return r=i.sent(),[3,4]
case 3:r=n.authToken,i.label=4
case 4:return[2,r.token]}})})}function Q(t){return L(t,function(t){if(!K(t))throw y.create("not-registered")
var e
return 1===(e=t.authToken).requestStatus&&e.requestTime+c<Date.now()?Object(a.__assign)({},t,{authToken:{requestStatus:0}}):t})}function K(t){return void 0!==t&&2===t.registrationStatus}function H(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,U(t)]
case 1:return e=i.sent(),n=e.installationEntry,(r=e.registrationPromise)?[4,r]:[3,3]
case 2:return i.sent(),[3,4]
case 3:if(2!==n.registrationStatus)throw y.create("create-installation-failed")
i.label=4
case 4:return[2]}})})}function G(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid
return v(t)+"/"+n}(t,e),r=E(t,e),i={method:"DELETE",headers:r},[4,T(function(){return fetch(n,i)})]
case 1:return(o=a.sent()).ok?[3,3]:[4,b("Delete Installation",o)]
case 2:throw a.sent()
case 3:return[2]}})})}function z(t){t.INTERNAL.registerService("installations",function(t){return g(t),{app:t,getId:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return[4,U(e=g(t))]
case 1:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)&&i.catch(function(){}),2===r.registrationStatus&&W(e).catch(function(){}),[2,r.fid]}})})}(t)},getToken:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,H(e=g(t))]
case 1:return n.sent(),[2,W(e)]}})})}(t)},delete:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n
return Object(a.__generator)(this,function(r){switch(r.label){case 0:return[4,L(e=g(t),function(t){if(!t||0!==t.registrationStatus)return t})]
case 1:if(!(n=r.sent()))return[3,6]
if(1!==n.registrationStatus)return[3,2]
throw y.create("delete-pending-registration")
case 2:if(2!==n.registrationStatus)return[3,6]
if(navigator.onLine)return[3,3]
throw y.create("app-offline")
case 3:return[4,G(e,n)]
case 4:return r.sent(),[4,M(e)]
case 5:r.sent(),r.label=6
case 6:return[2]}})})}(t)}}})}z(o.a)},198:function(t,e,n){var r,i,o,a
function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=function(t){"use strict"
function e(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function n(t,n,r){var i,o=new Promise(function(o,a){e(i=t[n].apply(t,r)).then(o,a)})
return o.request=i,o}function r(t,e,r){var i=n(t,e,r)
return i.then(function(t){if(t)return new c(t,i.request)})}function i(t,e,n){n.forEach(function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function o(t,e,r,i){i.forEach(function(i){i in r.prototype&&(t.prototype[i]=function(){return n(this[e],i,arguments)})})}function a(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function s(t,e,n,i){i.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return r(this[e],i,arguments)})})}function u(t){this._index=t}function c(t,e){this._cursor=t,this._request=e}function h(t){this._store=t}function l(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function f(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new l(n)}function p(t){this._db=t}i(u,"_index",["name","keyPath","multiEntry","unique"]),o(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),s(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(c,"_cursor",["direction","key","primaryKey","value"]),o(c,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(c.prototype[t]=function(){var n=this,r=arguments
return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,r),e(n._request).then(function(t){if(t)return new c(t,n._request)})})})}),h.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},i(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),s(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),l.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},i(l,"_tx",["objectStoreNames","mode"]),a(l,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},i(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new l(this._db.transaction.apply(this._db,arguments))},i(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[h,u].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e=function(t){return Array.prototype.slice.call(t)}(arguments),n=e[e.length-1],r=this._store||this._index,i=r[t].apply(r,e.slice(0,-1))
i.onsuccess=function(){n(i.result)}})})}),[u,h].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[]
return new Promise(function(i){n.iterateCursor(t,function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)})})})}),t.openDb=function(t,e,r){var i=n(indexedDB,"open",[t,e]),o=i.request
return o&&(o.onupgradeneeded=function(t){r&&r(new f(o.result,t.oldVersion,o.transaction))}),i.then(function(t){return new p(t)})},t.deleteDb=function(t){return n(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})},"object"===s(e)&&void 0!==t?a(e):(i=[e],void 0===(o="function"==typeof(r=a)?r.apply(e,i):r)||(t.exports=o))}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[7],{191:function(t,e,n){"use strict"
n.r(e)
var r=n(63),i=n.n(r)
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this
function r(t){var e=0
return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}function a(t){var e="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator]
return e?e.call(t):{next:r(t)}}!function(t,r){if(r){var i=n
t=t.split(".")
for(var o=0;o<t.length-1;o++){var a=t[o]
a in i||(i[a]={}),i=i[a]}(r=r(o=i[t=t[t.length-1]]))!=o&&null!=r&&e(i,t,{configurable:!0,writable:!0,value:r})}}("Promise",function(t){function e(t){this.b=0,this.c=void 0,this.a=[]
var e=this.f()
try{t(e.resolve,e.reject)}catch(t){e.reject(t)}}function r(){this.a=null}function i(t){return t instanceof e?t:new e(function(e){e(t)})}if(t)return t
r.prototype.b=function(t){if(null==this.a){this.a=[]
var e=this
this.c(function(){e.g()})}this.a.push(t)}
var s=n.setTimeout
r.prototype.c=function(t){s(t,0)},r.prototype.g=function(){for(;this.a&&this.a.length;){var t=this.a
this.a=[]
for(var e=0;e<t.length;++e){var n=t[e]
t[e]=null
try{n()}catch(t){this.f(t)}}}this.a=null},r.prototype.f=function(t){this.c(function(){throw t})},e.prototype.f=function(){function t(t){return function(r){n||(n=!0,t.call(e,r))}}var e=this,n=!1
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
var u=new r
return e.prototype.u=function(t){var e=this.f()
t.Ha(e.resolve,e.reject)},e.prototype.v=function(t,e){var n=this.f()
try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},e.prototype.then=function(t,n){function r(t,e){return"function"==typeof t?function(e){try{i(t(e))}catch(t){o(t)}}:e}var i,o,a=new e(function(t,e){i=t,o=e})
return this.Ha(r(t,i),r(n,o)),a},e.prototype.catch=function(t){return this.then(void 0,t)},e.prototype.Ha=function(t,e){function n(){switch(r.b){case 1:t(r.c)
break
case 2:e(r.c)
break
default:throw Error("Unexpected state: "+r.b)}}var r=this
null==this.a?u.b(n):this.a.push(n)},e.resolve=i,e.reject=function(t){return new e(function(e,n){n(t)})},e.race=function(t){return new e(function(e,n){for(var r=a(t),o=r.next();!o.done;o=r.next())i(o.value).Ha(e,n)})},e.all=function(t){var n=a(t),r=n.next()
return r.done?i([]):new e(function(t,e){function o(e){return function(n){a[e]=n,0==--s&&t(a)}}var a=[],s=0
do{a.push(void 0),s++,i(r.value).Ha(o(a.length-1),e),r=n.next()}while(!r.done)})},e})
var s=s||{},u=this||self
function c(t){return"string"==typeof t}function h(t){return"boolean"==typeof t}var l=/^[\w+\/_-]+[=]{0,2}$/,f=null
function p(){}function d(t){var e=o(t)
if("object"==e){if(!t)return"null"
if(t instanceof Array)return"array"
if(t instanceof Object)return e
var n=Object.prototype.toString.call(t)
if("[object Window]"==n)return"object"
if("[object Array]"==n||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array"
if("[object Function]"==n||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object"
return e}function y(t){return null===t}function m(t){return"array"==d(t)}function g(t){var e=d(t)
return"array"==e||"object"==e&&"number"==typeof t.length}function v(t){return"function"==d(t)}function _(t){var e=o(t)
return"object"==e&&null!=t||"function"==e}var b="closure_uid_"+(1e9*Math.random()>>>0),w=0
function E(t,e,n){return t.call.apply(t.bind,arguments)}function T(t,e,n){if(!t)throw Error()
if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2)
return function(){var n=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function S(t,e,n){return(S=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E:T).apply(null,arguments)}function I(t,e){var n=Array.prototype.slice.call(arguments,1)
return function(){var e=n.slice()
return e.push.apply(e,arguments),t.apply(this,e)}}var C=Date.now||function(){return+new Date}
function N(t,e){function n(){}n.prototype=e.prototype,t.mb=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ad=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o]
return e.prototype[n].apply(t,i)}}function k(t){if(!t)return!1
try{return!!t.$goog_Thenable}catch(t){return!1}}function A(t){if(Error.captureStackTrace)Error.captureStackTrace(this,A)
else{var e=Error().stack
e&&(this.stack=e)}t&&(this.message=String(t))}function D(t,e){for(var n="",r=(t=t.split("%s")).length-1,i=0;i<r;i++)n+=t[i]+(i<e.length?e[i]:"%s")
A.call(this,n+t[r])}function R(t,e){throw new D("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}function O(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function P(t,e){t.f(e),100>t.b&&(t.b++,e.next=t.a,t.a=e)}function x(){this.b=this.a=null}N(A,Error),A.prototype.name="CustomError",N(D,A),D.prototype.name="AssertionError",O.prototype.get=function(){if(0<this.b){this.b--
var t=this.a
this.a=t.next,t.next=null}else t=this.c()
return t}
var M=new O(function(){return new F},function(t){t.reset()})
function L(){var t=Wt,e=null
return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function F(){this.next=this.b=this.a=null}function U(t,e){t:{try{var n=t&&t.ownerDocument,r=n&&(n.defaultView||n.parentWindow)
if((r=r||u).Element&&r.Location){var i=r
break t}}catch(t){}i=null}if(i&&void 0!==i[e]&&(!t||!(t instanceof i[e])&&(t instanceof i.Location||t instanceof i.Element))){if(_(t))try{var a=t.constructor.displayName||t.constructor.name||Object.prototype.toString.call(t)}catch(t){a="<object could not be stringified>"}else a=void 0===t?"undefined":null===t?"null":o(t)
R("Argument is not a %s (or a non-Element, non-Location mock); got: %s",e,a)}}x.prototype.add=function(t,e){var n=M.get()
n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},F.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},F.prototype.reset=function(){this.next=this.b=this.a=null}
var q=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(c(t))return c(e)&&1==e.length?t.indexOf(e,0):-1
for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n
return-1},V=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i=c(t)?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)},B=Array.prototype.map?function(t,e){return Array.prototype.map.call(t,e,void 0)}:function(t,e){for(var n=t.length,r=Array(n),i=c(t)?t.split(""):t,o=0;o<n;o++)o in i&&(r[o]=e.call(void 0,i[o],o,t))
return r},j=Array.prototype.some?function(t,e){return Array.prototype.some.call(t,e,void 0)}:function(t,e){for(var n=t.length,r=c(t)?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t))return!0
return!1}
function W(t,e){return 0<=q(t,e)}function Q(t,e){var n
return(n=0<=(e=q(t,e)))&&Array.prototype.splice.call(t,e,1),n}function K(t,e){!function(t,e){for(var n=c(t)?t.split(""):t,r=t.length-1;0<=r;--r)r in n&&e.call(void 0,n[r],r,t)}(t,function(n,r){e.call(void 0,n,r,t)&&Array.prototype.splice.call(t,r,1).length})}function H(t){return Array.prototype.concat.apply([],arguments)}function G(t){var e=t.length
if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r]
return n}return[]}function z(t,e){for(var n in t)e.call(void 0,t[n],n,t)}function Y(t){for(var e in t)return!1
return!0}function X(t){var e,n={}
for(e in t)n[e]=t[e]
return n}var J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function $(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n]
for(var o=0;o<J.length;o++)n=J[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Z(t,e){this.a=t===nt&&e||"",this.b=et}function tt(t){return t instanceof Z&&t.constructor===Z&&t.b===et?t.a:(R("expected object of type Const, got '"+t+"'"),"type_error:Const")}Z.prototype.na=!0,Z.prototype.ma=function(){return this.a},Z.prototype.toString=function(){return"Const{"+this.a+"}"}
var et={},nt={},rt=new Z(nt,"")
function it(){this.a="",this.b=ct}function ot(t){return t instanceof it&&t.constructor===it&&t.b===ct?t.a:(R("expected object of type TrustedResourceUrl, got '"+t+"' of type "+d(t)),"type_error:TrustedResourceUrl")}function at(t,e){var n=tt(t)
if(!ut.test(n))throw Error("Invalid TrustedResourceUrl format: "+n)
return ht(t=n.replace(st,function(t,r){if(!Object.prototype.hasOwnProperty.call(e,r))throw Error('Found marker, "'+r+'", in format string, "'+n+'", but no valid label mapping found in args: '+JSON.stringify(e))
return(t=e[r])instanceof Z?tt(t):encodeURIComponent(String(t))}))}it.prototype.na=!0,it.prototype.ma=function(){return this.a.toString()},it.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"}
var st=/%{(\w+)}/g,ut=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^\/\\]|[^:\/\\%]+\/|[^:\/\\%]*[?#]|about:blank#)/i,ct={}
function ht(t){var e=new it
return e.a=t,e}var lt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},ft=/&/g,pt=/</g,dt=/>/g,yt=/"/g,mt=/'/g,gt=/\x00/g,vt=/[\x00&<>"']/
function _t(t,e){return-1!=t.indexOf(e)}function bt(t,e){return t<e?-1:t>e?1:0}function wt(){this.a="",this.b=Ct}function Et(t){return t instanceof wt&&t.constructor===wt&&t.b===Ct?t.a:(R("expected object of type SafeUrl, got '"+t+"' of type "+d(t)),"type_error:SafeUrl")}wt.prototype.na=!0,wt.prototype.ma=function(){return this.a.toString()},wt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"}
var Tt=/^(?:(?:https?|mailto|ftp):|[^:\/?#]*(?:[\/?#]|$))/i
function St(t){return t instanceof wt?t:(t="object"==o(t)&&t.na?t.ma():String(t),Tt.test(t)||(t="about:invalid#zClosurez"),Nt(t))}var It,Ct={}
function Nt(t){var e=new wt
return e.a=t,e}Nt("about:blank")
t:{var kt=u.navigator
if(kt){var At=kt.userAgent
if(At){It=At
break t}}It=""}function Dt(t){return _t(It,t)}function Rt(){this.a="",this.b=Pt}function Ot(t){return t instanceof Rt&&t.constructor===Rt&&t.b===Pt?t.a:(R("expected object of type SafeHtml, got '"+t+"' of type "+d(t)),"type_error:SafeHtml")}Rt.prototype.na=!0,Rt.prototype.ma=function(){return this.a.toString()},Rt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"}
var Pt={}
function xt(t){var e=new Rt
return e.a=t,e}xt("<!DOCTYPE html>")
var Mt,Lt,Ft=xt("")
function Ut(t,e){for(var n=t.split("%s"),r="",i=Array.prototype.slice.call(arguments,1);i.length&&1<n.length;)r+=n.shift()+i.shift()
return r+n.join("%s")}function qt(t){return vt.test(t)&&(-1!=t.indexOf("&")&&(t=t.replace(ft,"&amp;")),-1!=t.indexOf("<")&&(t=t.replace(pt,"&lt;")),-1!=t.indexOf(">")&&(t=t.replace(dt,"&gt;")),-1!=t.indexOf('"')&&(t=t.replace(yt,"&quot;")),-1!=t.indexOf("'")&&(t=t.replace(mt,"&#39;")),-1!=t.indexOf("\0")&&(t=t.replace(gt,"&#0;"))),t}function Vt(t){u.setTimeout(function(){throw t},0)}function Bt(t,e){Lt||function(){if(u.Promise&&u.Promise.resolve){var t=u.Promise.resolve(void 0)
Lt=function(){t.then(Qt)}}else Lt=function(){var t=Qt
!v(u.setImmediate)||u.Window&&u.Window.prototype&&!Dt("Edge")&&u.Window.prototype.setImmediate==u.setImmediate?(Mt||(Mt=function(){var t=u.MessageChannel
if(void 0===t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!Dt("Presto")&&(t=function(){var t=document.createElement("IFRAME")
t.style.display="none",function(t){var e=ht(tt(rt))
U(t,"HTMLIFrameElement"),t.src=ot(e).toString()}(t),document.documentElement.appendChild(t)
var e=t.contentWindow;(t=e.document).open(),t.write(Ot(Ft)),t.close()
var n="callImmediate"+Math.random(),r="file:"==e.location.protocol?"*":e.location.protocol+"//"+e.location.host
t=S(function(t){"*"!=r&&t.origin!=r||t.data!=n||this.port1.onmessage()},this),e.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(n,r)}}}),void 0!==t&&!Dt("Trident")&&!Dt("MSIE")){var e=new t,n={},r=n
return e.port1.onmessage=function(){if(void 0!==n.next){var t=(n=n.next).ub
n.ub=null,t()}},function(t){r.next={ub:t},r=r.next,e.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(t){var e=document.createElement("SCRIPT")
e.onreadystatechange=function(){e.onreadystatechange=null,e.parentNode.removeChild(e),e=null,t(),t=null},document.documentElement.appendChild(e)}:function(t){u.setTimeout(t,0)}}()),Mt(t)):u.setImmediate(t)}}(),jt||(Lt(),jt=!0),Wt.add(t,e)}xt("<br>")
var jt=!1,Wt=new x
function Qt(){for(var t;t=L();){try{t.a.call(t.b)}catch(t){Vt(t)}P(M,t)}jt=!1}function Kt(t,e){if(this.a=Ht,this.i=void 0,this.f=this.b=this.c=null,this.g=this.h=!1,t!=p)try{var n=this
t.call(e,function(t){ie(n,Gt,t)},function(t){if(!(t instanceof le))try{if(t instanceof Error)throw t
throw Error("Promise rejected.")}catch(t){}ie(n,zt,t)})}catch(t){ie(this,zt,t)}}var Ht=0,Gt=2,zt=3
function Yt(){this.next=this.f=this.b=this.g=this.a=null,this.c=!1}Yt.prototype.reset=function(){this.f=this.b=this.g=this.a=null,this.c=!1}
var Xt=new O(function(){return new Yt},function(t){t.reset()})
function Jt(t,e,n){var r=Xt.get()
return r.g=t,r.b=e,r.f=n,r}function $t(t){if(t instanceof Kt)return t
var e=new Kt(p)
return ie(e,Gt,t),e}function Zt(t){return new Kt(function(e,n){n(t)})}function te(t,e,n){oe(t,e,n,null)||Bt(I(e,t))}function ee(t){return new Kt(function(e){var n=t.length,r=[]
if(n)for(var i=function(t,i,o){n--,r[t]=i?{Cb:!0,value:o}:{Cb:!1,reason:o},0==n&&e(r)},o=0;o<t.length;o++)te(t[o],I(i,o,!0),I(i,o,!1))
else e(r)})}function ne(t,e){t.b||t.a!=Gt&&t.a!=zt||ae(t),t.f?t.f.next=e:t.b=e,t.f=e}function re(t,e,n,r){var i=Jt(null,null,null)
return i.a=new Kt(function(t,o){i.g=e?function(n){try{var i=e.call(r,n)
t(i)}catch(t){o(t)}}:t,i.b=n?function(e){try{var i=n.call(r,e)
void 0===i&&e instanceof le?o(e):t(i)}catch(t){o(t)}}:o}),i.a.c=t,ne(t,i),i.a}function ie(t,e,n){t.a==Ht&&(t===n&&(e=zt,n=new TypeError("Promise cannot resolve to itself")),t.a=1,oe(n,t.Jc,t.Kc,t)||(t.i=n,t.a=e,t.c=null,ae(t),e!=zt||n instanceof le||function(t,e){t.g=!0,Bt(function(){t.g&&he.call(null,e)})}(t,n)))}function oe(t,e,n,r){if(t instanceof Kt)return ne(t,Jt(e||p,n||null,r)),!0
if(k(t))return t.then(e,n,r),!0
if(_(t))try{var i=t.then
if(v(i))return function(t,e,n,r,i){function o(t){a||(a=!0,r.call(i,t))}var a=!1
try{e.call(t,function(t){a||(a=!0,n.call(i,t))},o)}catch(t){o(t)}}(t,i,e,n,r),!0}catch(t){return n.call(r,t),!0}return!1}function ae(t){t.h||(t.h=!0,Bt(t.Ub,t))}function se(t){var e=null
return t.b&&(e=t.b,t.b=e.next,e.next=null),t.b||(t.f=null),e}function ue(t,e,n,r){if(n==zt&&e.b&&!e.c)for(;t&&t.g;t=t.c)t.g=!1
if(e.a)e.a.c=null,ce(e,n,r)
else try{e.c?e.g.call(e.f):ce(e,n,r)}catch(t){he.call(null,t)}P(Xt,e)}function ce(t,e,n){e==Gt?t.g.call(t.f,n):t.b&&t.b.call(t.f,n)}Kt.prototype.then=function(t,e,n){return re(this,v(t)?t:null,v(e)?e:null,n)},Kt.prototype.$goog_Thenable=!0,(t=Kt.prototype).ha=function(t,e){return(t=Jt(t,t,e)).c=!0,ne(this,t),this},t.s=function(t,e){return re(this,null,t,e)},t.cancel=function(t){this.a==Ht&&Bt(function(){!function t(e,n){if(e.a==Ht)if(e.c){var r=e.c
if(r.b){for(var i=0,o=null,a=null,s=r.b;s&&(s.c||(i++,s.a==e&&(o=s),!(o&&1<i)));s=s.next)o||(a=s)
o&&(r.a==Ht&&1==i?t(r,n):(a?((i=a).next==r.f&&(r.f=i),i.next=i.next.next):se(r),ue(r,o,zt,n)))}e.c=null}else ie(e,zt,n)}(this,new le(t))},this)},t.Jc=function(t){this.a=Ht,ie(this,Gt,t)},t.Kc=function(t){this.a=Ht,ie(this,zt,t)},t.Ub=function(){for(var t;t=se(this);)ue(this,t,this.a,this.i)
this.h=!1}
var he=Vt
function le(t){A.call(this,t)}function fe(){0!=pe&&(de[this[b]||(this[b]=++w)]=this),this.qa=this.qa,this.ia=this.ia}N(le,A),le.prototype.name="cancel"
var pe=0,de={}
function ye(t){if(!t.qa&&(t.qa=!0,t.va(),0!=pe)){var e=t[b]||(t[b]=++w)
if(0!=pe&&t.ia&&0<t.ia.length)throw Error(t+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.")
delete de[e]}}function me(t){return me[" "](t),t}fe.prototype.qa=!1,fe.prototype.va=function(){if(this.ia)for(;this.ia.length;)this.ia.shift()()},me[" "]=p
var ge,ve,_e=Dt("Opera"),be=Dt("Trident")||Dt("MSIE"),we=Dt("Edge"),Ee=we||be,Te=Dt("Gecko")&&!(_t(It.toLowerCase(),"webkit")&&!Dt("Edge"))&&!(Dt("Trident")||Dt("MSIE"))&&!Dt("Edge"),Se=_t(It.toLowerCase(),"webkit")&&!Dt("Edge")
function Ie(){var t=u.document
return t?t.documentMode:void 0}t:{var Ce="",Ne=(ve=It,Te?/rv:([^\);]+)(\)|;)/.exec(ve):we?/Edge\/([\d\.]+)/.exec(ve):be?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ve):Se?/WebKit\/(\S+)/.exec(ve):_e?/(?:Version)[ \/]?(\S+)/.exec(ve):void 0)
if(Ne&&(Ce=Ne?Ne[1]:""),be){var ke=Ie()
if(null!=ke&&ke>parseFloat(Ce)){ge=String(ke)
break t}}ge=Ce}var Ae,De={}
function Re(t){return function(t,e){var n=De
return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e()}(t,function(){for(var e=0,n=lt(String(ge)).split("."),r=lt(String(t)).split("."),i=Math.max(n.length,r.length),o=0;0==e&&o<i;o++){var a=n[o]||"",s=r[o]||""
do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break
e=bt(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||bt(0==a[2].length,0==s[2].length)||bt(a[2],s[2]),a=a[3],s=s[3]}while(0==e)}return 0<=e})}Ae=u.document&&be?Ie():void 0
var Oe=Object.freeze||function(t){return t},Pe=!be||9<=Number(Ae),xe=be&&!Re("9"),Me=function(){if(!u.addEventListener||!Object.defineProperty)return!1
var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{u.addEventListener("test",p,e),u.removeEventListener("test",p,e)}catch(t){}return t}()
function Le(t,e){this.type=t,this.b=this.target=e,this.Ib=!0}function Fe(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.b=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.b=e,e=t.relatedTarget){if(Te){t:{try{me(e.nodeName)
var i=!0
break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)
this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=c(t.pointerType)?t.pointerType:Ue[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}Le.prototype.preventDefault=function(){this.Ib=!1},N(Fe,Le)
var Ue=Oe({2:"touch",3:"pen",4:"mouse"})
Fe.prototype.preventDefault=function(){Fe.mb.preventDefault.call(this)
var t=this.a
if(t.preventDefault)t.preventDefault()
else if(t.returnValue=!1,xe)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}},Fe.prototype.f=function(){return this.a}
var qe="closure_listenable_"+(1e6*Math.random()|0),Ve=0
function Be(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.La=i,this.key=++Ve,this.oa=this.Ga=!1}function je(t){t.oa=!0,t.listener=null,t.proxy=null,t.src=null,t.La=null}function We(t){this.src=t,this.a={},this.b=0}function Qe(t,e){var n=e.type
n in t.a&&Q(t.a[n],e)&&(je(e),0==t.a[n].length&&(delete t.a[n],t.b--))}function Ke(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i]
if(!o.oa&&o.listener==e&&o.capture==!!n&&o.La==r)return i}return-1}We.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++)
var a=Ke(t,e,r,i)
return-1<a?(e=t[a],n||(e.Ga=!1)):((e=new Be(e,this.src,o,!!r,i)).Ga=n,t.push(e)),e}
var He="closure_lm_"+(1e6*Math.random()|0),Ge={}
function ze(t,e,n,r,i){if(r&&r.once)Xe(t,e,n,r,i)
else if(m(e))for(var o=0;o<e.length;o++)ze(t,e[o],n,r,i)
else n=an(n),t&&t[qe]?un(t,e,n,_(r)?!!r.capture:!!r,i):Ye(t,e,n,!1,r,i)}function Ye(t,e,n,r,i,o){if(!e)throw Error("Invalid event type")
var a=_(i)?!!i.capture:!!i,s=rn(t)
if(s||(t[He]=s=new We(t)),!(n=s.add(e,n,r,a,o)).proxy)if(r=function(){var t=nn,e=Pe?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n}
return e}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Me||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i)
else if(t.attachEvent)t.attachEvent(Ze(e.toString()),r)
else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
t.addListener(r)}}function Xe(t,e,n,r,i){if(m(e))for(var o=0;o<e.length;o++)Xe(t,e[o],n,r,i)
else n=an(n),t&&t[qe]?cn(t,e,n,_(r)?!!r.capture:!!r,i):Ye(t,e,n,!0,r,i)}function Je(t,e,n,r,i){if(m(e))for(var o=0;o<e.length;o++)Je(t,e[o],n,r,i)
else r=_(r)?!!r.capture:!!r,n=an(n),t&&t[qe]?(t=t.m,(e=String(e).toString())in t.a&&-1<(n=Ke(o=t.a[e],n,r,i))&&(je(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.a[e],t.b--))):t&&(t=rn(t))&&(e=t.a[e.toString()],t=-1,e&&(t=Ke(e,n,r,i)),(n=-1<t?e[t]:null)&&$e(n))}function $e(t){if("number"!=typeof t&&t&&!t.oa){var e=t.src
if(e&&e[qe])Qe(e.m,t)
else{var n=t.type,r=t.proxy
e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ze(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=rn(e))?(Qe(n,t),0==n.b&&(n.src=null,e[He]=null)):je(t)}}}function Ze(t){return t in Ge?Ge[t]:Ge[t]="on"+t}function tn(t,e,n,r){var i=!0
if((t=rn(t))&&(e=t.a[e.toString()]))for(e=e.concat(),t=0;t<e.length;t++){var o=e[t]
o&&o.capture==n&&!o.oa&&(o=en(o,r),i=i&&!1!==o)}return i}function en(t,e){var n=t.listener,r=t.La||t.src
return t.Ga&&$e(t),n.call(r,e)}function nn(t,e){if(t.oa)return!0
if(!Pe){if(!e)t:{e=["window","event"]
for(var n=u,r=0;r<e.length;r++)if(null==(n=n[e[r]])){e=null
break t}e=n}if(e=new Fe(r=e,this),n=!0,!(0>r.keyCode||null!=r.returnValue)){t:{var i=!1
if(0==r.keyCode)try{r.keyCode=-1
break t}catch(t){i=!0}(i||null==r.returnValue)&&(r.returnValue=!0)}for(r=[],i=e.b;i;i=i.parentNode)r.push(i)
for(t=t.type,i=r.length-1;0<=i;i--){e.b=r[i]
var o=tn(r[i],t,!0,e)
n=n&&o}for(i=0;i<r.length;i++)e.b=r[i],o=tn(r[i],t,!1,e),n=n&&o}return n}return en(t,new Fe(e,this))}function rn(t){return(t=t[He])instanceof We?t:null}var on="__closure_events_fn_"+(1e9*Math.random()>>>0)
function an(t){return v(t)?t:(t[on]||(t[on]=function(e){return t.handleEvent(e)}),t[on])}function sn(){fe.call(this),this.m=new We(this),this.Nb=this,this.Ua=null}function un(t,e,n,r,i){t.m.add(String(e),n,!1,r,i)}function cn(t,e,n,r,i){t.m.add(String(e),n,!0,r,i)}function hn(t,e,n,r){if(!(e=t.m.a[String(e)]))return!0
e=e.concat()
for(var i=!0,o=0;o<e.length;++o){var a=e[o]
if(a&&!a.oa&&a.capture==n){var s=a.listener,u=a.La||a.src
a.Ga&&Qe(t.m,a),i=!1!==s.call(u,r)&&i}}return i&&0!=r.Ib}function ln(t,e,n){if(v(t))n&&(t=S(t,n))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=S(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function fn(t){var e=null
return new Kt(function(n,r){-1==(e=ln(function(){n(void 0)},t))&&r(Error("Failed to schedule timer."))}).s(function(t){throw u.clearTimeout(e),t})}function pn(t){if(t.S&&"function"==typeof t.S)return t.S()
if(c(t))return t.split("")
if(g(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r])
return e}for(r in e=[],n=0,t)e[n++]=t[r]
return e}function dn(t){if(t.U&&"function"==typeof t.U)return t.U()
if(!t.S||"function"!=typeof t.S){if(g(t)||c(t)){var e=[]
t=t.length
for(var n=0;n<t;n++)e.push(n)
return e}for(var r in e=[],n=0,t)e[n++]=r
return e}}function yn(t,e){this.b={},this.a=[],this.c=0
var n=arguments.length
if(1<n){if(n%2)throw Error("Uneven number of arguments")
for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof yn)for(n=t.U(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]))
else for(r in t)this.set(r,t[r])}function mn(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e]
gn(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={}
for(n=e=0;e<t.a.length;)gn(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++
t.a.length=n}}function gn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}N(sn,fe),sn.prototype[qe]=!0,sn.prototype.addEventListener=function(t,e,n,r){ze(this,t,e,n,r)},sn.prototype.removeEventListener=function(t,e,n,r){Je(this,t,e,n,r)},sn.prototype.dispatchEvent=function(t){var e,n=this.Ua
if(n)for(e=[];n;n=n.Ua)e.push(n)
n=this.Nb
var r=t.type||t
if(c(t))t=new Le(t,n)
else if(t instanceof Le)t.target=t.target||n
else{var i=t
$(t=new Le(r,n),i)}if(i=!0,e)for(var o=e.length-1;0<=o;o--){var a=t.b=e[o]
i=hn(a,r,!0,t)&&i}if(i=hn(a=t.b=n,r,!0,t)&&i,i=hn(a,r,!1,t)&&i,e)for(o=0;o<e.length;o++)i=hn(a=t.b=e[o],r,!1,t)&&i
return i},sn.prototype.va=function(){if(sn.mb.va.call(this),this.m){var t,e=this.m
for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)je(n[r])
delete e.a[t],e.b--}}this.Ua=null},(t=yn.prototype).S=function(){mn(this)
for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]])
return t},t.U=function(){return mn(this),this.a.concat()},t.clear=function(){this.b={},this.c=this.a.length=0},t.get=function(t,e){return gn(this.b,t)?this.b[t]:e},t.set=function(t,e){gn(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},t.forEach=function(t,e){for(var n=this.U(),r=0;r<n.length;r++){var i=n[r],o=this.get(i)
t.call(e,o,i,this)}}
var vn=/^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function _n(t,e){var n
this.b=this.i=this.f="",this.m=null,this.g=this.c="",this.h=!1,t instanceof _n?(this.h=void 0!==e?e:t.h,bn(this,t.f),this.i=t.i,this.b=t.b,wn(this,t.m),this.c=t.c,En(this,Bn(t.a)),this.g=t.g):t&&(n=String(t).match(vn))?(this.h=!!e,bn(this,n[1]||"",!0),this.i=Nn(n[2]||""),this.b=Nn(n[3]||"",!0),wn(this,n[4]),this.c=Nn(n[5]||"",!0),En(this,n[6]||"",!0),this.g=Nn(n[7]||"")):(this.h=!!e,this.a=new Mn(null,this.h))}function bn(t,e,n){t.f=n?Nn(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function wn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e)
t.m=e}else t.m=null}function En(t,e,n){e instanceof Mn?(t.a=e,function(t,e){e&&!t.f&&(Ln(t),t.c=null,t.a.forEach(function(t,e){var n=e.toLowerCase()
e!=n&&(Un(this,e),Vn(this,n,t))},t)),t.f=e}(t.a,t.h)):(n||(e=kn(e,Pn)),t.a=new Mn(e,t.h))}function Tn(t,e,n){t.a.set(e,n)}function Sn(t,e){return t.a.get(e)}function In(t){return t instanceof _n?new _n(t):new _n(t,void 0)}function Cn(t,e){var n=new _n(null,void 0)
return bn(n,"https"),t&&(n.b=t),e&&(n.c=e),n}function Nn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function kn(t,e,n){return c(t)?(t=encodeURI(t).replace(e,An),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function An(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}_n.prototype.toString=function(){var t=[],e=this.f
e&&t.push(kn(e,Dn,!0),":")
var n=this.b
return(n||"file"==e)&&(t.push("//"),(e=this.i)&&t.push(kn(e,Dn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.c)&&(this.b&&"/"!=n.charAt(0)&&t.push("/"),t.push(kn(n,"/"==n.charAt(0)?On:Rn,!0))),(n=this.a.toString())&&t.push("?",n),(n=this.g)&&t.push("#",kn(n,xn)),t.join("")},_n.prototype.resolve=function(t){var e=new _n(this),n=!!t.f
n?bn(e,t.f):n=!!t.i,n?e.i=t.i:n=!!t.b,n?e.b=t.b:n=null!=t.m
var r=t.c
if(n)wn(e,t.m)
else if(n=!!t.c){if("/"!=r.charAt(0))if(this.b&&!this.c)r="/"+r
else{var i=e.c.lastIndexOf("/");-1!=i&&(r=e.c.substr(0,i+1)+r)}if(".."==(i=r)||"."==i)r=""
else if(_t(i,"./")||_t(i,"/.")){r=0==i.lastIndexOf("/",0),i=i.split("/")
for(var o=[],a=0;a<i.length;){var s=i[a++]
"."==s?r&&a==i.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),r&&a==i.length&&o.push("")):(o.push(s),r=!0)}r=o.join("/")}else r=i}return n?e.c=r:n=""!==t.a.toString(),n?En(e,Bn(t.a)):n=!!t.g,n&&(e.g=t.g),e}
var Dn=/[#\/\?@]/g,Rn=/[#\?:]/g,On=/[#\?]/g,Pn=/[#\?@]/g,xn=/#/g
function Mn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Ln(t){t.a||(t.a=new yn,t.b=0,t.c&&function(t,e){if(t){t=t.split("&")
for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null
if(0<=r){var o=t[n].substring(0,r)
i=t[n].substring(r+1)}else o=t[n]
e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function Fn(t){var e=dn(t)
if(void 0===e)throw Error("Keys are undefined")
var n=new Mn(null,void 0)
t=pn(t)
for(var r=0;r<e.length;r++){var i=e[r],o=t[r]
m(o)?Vn(n,i,o):n.add(i,o)}return n}function Un(t,e){Ln(t),e=jn(t,e),gn(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,gn((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&mn(t)))}function qn(t,e){return Ln(t),e=jn(t,e),gn(t.a.b,e)}function Vn(t,e,n){Un(t,e),0<n.length&&(t.c=null,t.a.set(jn(t,e),G(n)),t.b+=n.length)}function Bn(t){var e=new Mn
return e.c=t.c,t.a&&(e.a=new yn(t.a),e.b=t.b),e}function jn(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}(t=Mn.prototype).add=function(t,e){Ln(this),this.c=null,t=jn(this,t)
var n=this.a.get(t)
return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},t.clear=function(){this.a=this.c=null,this.b=0},t.forEach=function(t,e){Ln(this),this.a.forEach(function(n,r){V(n,function(n){t.call(e,n,r,this)},this)},this)},t.U=function(){Ln(this)
for(var t=this.a.S(),e=this.a.U(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r])
return n},t.S=function(t){Ln(this)
var e=[]
if(c(t))qn(this,t)&&(e=H(e,this.a.get(jn(this,t))))
else{t=this.a.S()
for(var n=0;n<t.length;n++)e=H(e,t[n])}return e},t.set=function(t,e){return Ln(this),this.c=null,qn(this,t=jn(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},t.get=function(t,e){return t&&0<(t=this.S(t)).length?String(t[0]):e},t.toString=function(){if(this.c)return this.c
if(!this.a)return""
for(var t=[],e=this.a.U(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r))
r=this.S(r)
for(var o=0;o<r.length;o++){var a=i
""!==r[o]&&(a+="="+encodeURIComponent(String(r[o]))),t.push(a)}}return this.c=t.join("&")}
var Wn=!be||9<=Number(Ae)
function Qn(t){var e=document
return c(t)?e.getElementById(t):t}function Kn(t,e){z(e,function(e,n){e&&"object"==o(e)&&e.na&&(e=e.ma()),"style"==n?t.style.cssText=e:"class"==n?t.className=e:"for"==n?t.htmlFor=e:Hn.hasOwnProperty(n)?t.setAttribute(Hn[n],e):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?t.setAttribute(n,e):t[n]=e})}var Hn={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"}
function Gn(t){if(t&&"number"==typeof t.length){if(_(t))return"function"==typeof t.item||"string"==typeof t.item
if(v(t))return"function"==typeof t.item}return!1}function zn(t){var e=[]
return function t(e,n,r){if(null==n)r.push("null")
else{if("object"==o(n)){if(m(n)){var i=n
n=i.length,r.push("[")
for(var a="",s=0;s<n;s++)r.push(a),t(e,i[s],r),a=","
return void r.push("]")}if(!(n instanceof String||n instanceof Number||n instanceof Boolean)){for(i in r.push("{"),a="",n)Object.prototype.hasOwnProperty.call(n,i)&&"function"!=typeof(s=n[i])&&(r.push(a),$n(i,r),r.push(":"),t(e,s,r),a=",")
return void r.push("}")}n=n.valueOf()}switch(o(n)){case"string":$n(n,r)
break
case"number":r.push(isFinite(n)&&!isNaN(n)?String(n):"null")
break
case"boolean":r.push(String(n))
break
case"function":r.push("null")
break
default:throw Error("Unknown type: "+o(n))}}}(new Yn,t,e),e.join("")}function Yn(){}var Xn={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Jn=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g
function $n(t,e){e.push('"',t.replace(Jn,function(t){var e=Xn[t]
return e||(e="\\u"+(65536|t.charCodeAt(0)).toString(16).substr(1),Xn[t]=e),e}),'"')}function Zn(){var t=vr()
return be&&!!Ae&&11==Ae||/Edge\/\d+/.test(t)}function tr(){return u.window&&u.window.location.href||self&&self.location&&self.location.href||""}function er(t,e){e=e||u.window
var n="about:blank"
t&&(n=Et(St(t)).toString()),e.location.href=n}function nr(t){return!!((t=(t||vr()).toLowerCase()).match(/android/)||t.match(/webos/)||t.match(/iphone|ipad|ipod/)||t.match(/blackberry/)||t.match(/windows phone/)||t.match(/iemobile/))}function rr(t){t=t||u.window
try{t.close()}catch(t){}}function ir(t,e,n){var r=Math.floor(1e9*Math.random()).toString()
e=e||500,n=n||600
var i=(window.screen.availHeight-n)/2,a=(window.screen.availWidth-e)/2
for(s in e={width:e,height:n,top:0<i?i:0,left:0<a?a:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},n=vr().toLowerCase(),r&&(e.target=r,_t(n,"crios/")&&(e.target="_blank")),yr(vr())==pr&&(t=t||"http://localhost",e.scrollbars=!0),n=t||"",(t=e)||(t={}),r=window,e=n instanceof wt?n:St(void 0!==n.href?n.href:String(n)),n=t.target||n.target,i=[],t)switch(s){case"width":case"height":case"top":case"left":i.push(s+"="+t[s])
break
case"target":case"noopener":case"noreferrer":break
default:i.push(s+"="+(t[s]?1:0))}var s=i.join(",")
if((Dt("iPhone")&&!Dt("iPod")&&!Dt("iPad")||Dt("iPad")||Dt("iPod"))&&r.navigator&&r.navigator.standalone&&n&&"_self"!=n?(U(s=r.document.createElement("A"),"HTMLAnchorElement"),e instanceof wt||e instanceof wt||(e="object"==o(e)&&e.na?e.ma():String(e),Tt.test(e)||(e="about:invalid#zClosurez"),e=Nt(e)),s.href=Et(e),s.setAttribute("target",n),t.noreferrer&&s.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,r,1),s.dispatchEvent(t),s={}):t.noreferrer?(s=r.open("",n,s),t=Et(e).toString(),s&&(Ee&&_t(t,";")&&(t="'"+t.replace(/'/g,"%27")+"'"),s.opener=null,t=xt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+qt(t)+'">'),s.document.write(Ot(t)),s.document.close())):(s=r.open(Et(e).toString(),n,s))&&t.noopener&&(s.opener=null),s)try{s.focus()}catch(t){}return s}var or=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ar=/^[^@]+@[^@]+$/
function sr(){var t=null
return new Kt(function(e){"complete"==u.document.readyState?e():(t=function(){e()},Xe(window,"load",t))}).s(function(e){throw Je(window,"load",t),e})}function ur(t){return t=t||vr(),!("file:"!==Tr()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function cr(){var t=u.window
try{return!(!t||t==t.top)}catch(t){return!1}}function hr(){return void 0!==u.WorkerGlobalScope&&"function"==typeof u.importScripts}function lr(){return i.a.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":i.a.INTERNAL.hasOwnProperty("node")?"Node":hr()?"Worker":"Browser"}function fr(){var t=lr()
return"ReactNative"===t||"Node"===t}var pr="Firefox",dr="Chrome"
function yr(t){var e=t.toLowerCase()
return _t(e,"opera/")||_t(e,"opr/")||_t(e,"opios/")?"Opera":_t(e,"iemobile")?"IEMobile":_t(e,"msie")||_t(e,"trident/")?"IE":_t(e,"edge/")?"Edge":_t(e,"firefox/")?pr:_t(e,"silk/")?"Silk":_t(e,"blackberry")?"Blackberry":_t(e,"webos")?"Webos":!_t(e,"safari/")||_t(e,"chrome/")||_t(e,"crios/")||_t(e,"android")?!_t(e,"chrome/")&&!_t(e,"crios/")||_t(e,"edge/")?_t(e,"android")?"Android":(t=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==t.length?t[1]:"Other":dr:"Safari"}var mr={Qc:"FirebaseCore-web",Sc:"FirebaseUI-web"}
function gr(t,e){e=e||[]
var n,r=[],i={}
for(n in mr)i[mr[n]]=!0
for(n=0;n<e.length;n++)void 0!==i[e[n]]&&(delete i[e[n]],r.push(e[n]))
return r.sort(),(e=r).length||(e=["FirebaseCore-web"]),"Browser"===(r=lr())?r=yr(i=vr()):"Worker"===r&&(r=yr(i=vr())+"-"+r),r+"/JsCore/"+t+"/"+e.join(",")}function vr(){return u.navigator&&u.navigator.userAgent||""}function _r(t,e){t=t.split("."),e=e||u
for(var n=0;n<t.length&&"object"==o(e)&&null!=e;n++)e=e[t[n]]
return n!=t.length&&(e=void 0),e}function br(){try{var t=u.localStorage,e=kr()
if(t)return t.setItem(e,"1"),t.removeItem(e),!Zn()||!!u.indexedDB}catch(t){return hr()&&!!u.indexedDB}return!1}function wr(){return(Er()||"chrome-extension:"===Tr()||ur())&&!fr()&&br()&&!hr()}function Er(){return"http:"===Tr()||"https:"===Tr()}function Tr(){return u.location&&u.location.protocol||null}function Sr(t){return!nr(t=t||vr())&&yr(t)!=pr}function Ir(t){return void 0===t?null:zn(t)}function Cr(t){var e,n={}
for(e in t)t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e]&&(n[e]=t[e])
return n}function Nr(t){if(null!==t)return JSON.parse(t)}function kr(t){return t||Math.floor(1e9*Math.random()).toString()}function Ar(t){return"Safari"!=yr(t=t||vr())&&!t.toLowerCase().match(/iphone|ipad|ipod/)}function Dr(){var t=u.___jsl
if(t&&t.H)for(var e in t.H)if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=t.H[e].L.concat(),t.CP)for(var n=0;n<t.CP.length;n++)t.CP[n]=null}function Rr(t,e){if(t>e)throw Error("Short delay should be less than long delay!")
this.a=t,this.c=e,t=vr(),e=lr(),this.b=nr(t)||"ReactNative"===e}function Or(){var t=u.document
return!t||void 0===t.visibilityState||"visible"==t.visibilityState}function Pr(t){try{var e=new Date(parseInt(t,10))
if(!isNaN(e.getTime())&&!/[^0-9]/.test(t))return e.toUTCString()}catch(t){}return null}function xr(){return!(!_r("fireauth.oauthhelper",u)&&!_r("fireauth.iframe",u))}Rr.prototype.get=function(){var t=u.navigator
return!t||"boolean"!=typeof t.onLine||!Er()&&"chrome-extension:"!==Tr()&&void 0===t.connection||t.onLine?this.b?this.c:this.a:Math.min(5e3,this.a)}
var Mr,Lr={}
function Fr(t){Lr[t]||(Lr[t]=!0,"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t))}try{var Ur={}
Object.defineProperty(Ur,"abcd",{configurable:!0,enumerable:!0,value:1}),Object.defineProperty(Ur,"abcd",{configurable:!0,enumerable:!0,value:2}),Mr=2==Ur.abcd}catch(ve){Mr=!1}function qr(t,e,n){Mr?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:n}):t[e]=n}function Vr(t,e){if(e)for(var n in e)e.hasOwnProperty(n)&&qr(t,n,e[n])}function Br(t){var e={}
return Vr(e,t),e}function jr(t){var e=t
if("object"==o(t)&&null!=t)for(var n in e="length"in t?[]:{},t)qr(e,n,jr(t[n]))
return e}function Wr(t){var e={},n=t[Kr],r=t[Hr]
if(!(t=t[Gr])||t!=Qr&&!n)throw Error("Invalid provider user info!")
e[Yr]=r||null,e[zr]=n||null,qr(this,Jr,t),qr(this,Xr,jr(e))}var Qr="EMAIL_SIGNIN",Kr="email",Hr="newEmail",Gr="requestType",zr="email",Yr="fromEmail",Xr="data",Jr="operation"
function $r(t,e){this.code=ti+t,this.message=e||ei[t]||""}function Zr(t){var e=t&&t.code
return e?new $r(e.substring(ti.length),t.message):null}N($r,Error),$r.prototype.A=function(){return{code:this.code,message:this.message}},$r.prototype.toJSON=function(){return this.A()}
var ti="auth/",ei={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The OIDC ID token requires a valid unhashed nonce.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."}
function ni(t){var e=t[si]
if(void 0===e)throw new $r("missing-continue-uri")
if("string"!=typeof e||"string"==typeof e&&!e.length)throw new $r("invalid-continue-uri")
this.h=e,this.b=this.a=null,this.g=!1
var n=t[ri]
if(n&&"object"===o(n)){e=n[hi]
var r=n[ui]
if(n=n[ci],"string"==typeof e&&e.length){if(this.a=e,void 0!==r&&"boolean"!=typeof r)throw new $r("argument-error",ui+" property must be a boolean when specified.")
if(this.g=!!r,void 0!==n&&("string"!=typeof n||"string"==typeof n&&!n.length))throw new $r("argument-error",ci+" property must be a non empty string when specified.")
this.b=n||null}else{if(void 0!==e)throw new $r("argument-error",hi+" property must be a non empty string when specified.")
if(void 0!==r||void 0!==n)throw new $r("missing-android-pkg-name")}}else if(void 0!==n)throw new $r("argument-error",ri+" property must be a non null object when specified.")
if(this.f=null,(e=t[ai])&&"object"===o(e)){if("string"==typeof(e=e[li])&&e.length)this.f=e
else if(void 0!==e)throw new $r("argument-error",li+" property must be a non empty string when specified.")}else if(void 0!==e)throw new $r("argument-error",ai+" property must be a non null object when specified.")
if(void 0!==(e=t[oi])&&"boolean"!=typeof e)throw new $r("argument-error",oi+" property must be a boolean when specified.")
if(this.c=!!e,void 0!==(t=t[ii])&&("string"!=typeof t||"string"==typeof t&&!t.length))throw new $r("argument-error",ii+" property must be a non empty string when specified.")
this.i=t||null}var ri="android",ii="dynamicLinkDomain",oi="handleCodeInApp",ai="iOS",si="url",ui="installApp",ci="minimumVersion",hi="packageName",li="bundleId"
function fi(t){var e={}
for(var n in e.continueUrl=t.h,e.canHandleCodeInApp=t.c,(e.androidPackageName=t.a)&&(e.androidMinimumVersion=t.b,e.androidInstallApp=t.g),e.iOSBundleId=t.f,e.dynamicLinkDomain=t.i,e)null===e[n]&&delete e[n]
return e}var pi=null,di=null
function yi(t){this.c=t.sub,C(),this.a=t.provider_id||t.firebase&&t.firebase.sign_in_provider||null,this.b=!!t.is_anonymous||"anonymous"==this.a}function mi(t){return(t=gi(t))&&t.sub&&t.iss&&t.aud&&t.exp?new yi(t):null}function gi(t){if(!t)return null
if(3!=(t=t.split(".")).length)return null
for(var e=(4-(t=t[1]).length%4)%4,n=0;n<e;n++)t+="."
try{return JSON.parse(function(t){var e=""
return function(t,e){function n(e){for(;r<t.length;){var n=t.charAt(r++),i=di[n]
if(null!=i)return i
if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n)}return e}!function(){if(!pi){pi={},di={}
for(var t=0;65>t;t++)pi[t]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t),di[pi[t]]=t,62<=t&&(di["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)]=t)}}()
for(var r=0;;){var i=n(-1),o=n(0),a=n(64),s=n(64)
if(64===s&&-1===i)break
e(i<<2|o>>4),64!=a&&(e(o<<4&240|a>>2),64!=s&&e(a<<6&192|s))}}(t,function(t){e+=String.fromCharCode(t)}),e}(t))}catch(t){}return null}yi.prototype.f=function(){return this.b}
var vi,_i={Wc:{Za:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",fb:"https://securetoken.googleapis.com/v1/token",id:"p"},Yc:{Za:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",fb:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},Zc:{Za:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",fb:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}}
function bi(t){for(var e in _i)if(_i[e].id===t)return{firebaseEndpoint:(t=_i[e]).Za,secureTokenEndpoint:t.fb}
return null}vi=bi("__EID__")?"__EID__":void 0
var wi="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Ei=["client_id","response_type","scope","redirect_uri","state"],Ti={Rc:{Ma:"locale",Ba:500,Aa:600,Na:"facebook.com",eb:Ei},Tc:{Ma:null,Ba:500,Aa:620,Na:"github.com",eb:Ei},Uc:{Ma:"hl",Ba:515,Aa:680,Na:"google.com",eb:Ei},$c:{Ma:"lang",Ba:485,Aa:705,Na:"twitter.com",eb:wi}}
function Si(t){for(var e in Ti)if(Ti[e].Na==t)return Ti[e]
return null}function Ii(t){var e={}
e["facebook.com"]=Di,e["google.com"]=Oi,e["github.com"]=Ri,e["twitter.com"]=Pi
var n=t&&t[Ni]
try{if(n)return e[n]?new e[n](t):new Ai(t)
if(void 0!==t[Ci])return new ki(t)}catch(t){}return null}var Ci="idToken",Ni="providerId"
function ki(t){var e=t[Ni]
if(!e&&t[Ci]){var n=mi(t[Ci])
n&&n.a&&(e=n.a)}if(!e)throw Error("Invalid additional user info!")
"anonymous"!=e&&"custom"!=e||(e=null),n=!1,void 0!==t.isNewUser?n=!!t.isNewUser:"identitytoolkit#SignupNewUserResponse"===t.kind&&(n=!0),qr(this,"providerId",e),qr(this,"isNewUser",n)}function Ai(t){ki.call(this,t),qr(this,"profile",jr((t=Nr(t.rawUserInfo||"{}"))||{}))}function Di(t){if(Ai.call(this,t),"facebook.com"!=this.providerId)throw Error("Invalid provider ID!")}function Ri(t){if(Ai.call(this,t),"github.com"!=this.providerId)throw Error("Invalid provider ID!")
qr(this,"username",this.profile&&this.profile.login||null)}function Oi(t){if(Ai.call(this,t),"google.com"!=this.providerId)throw Error("Invalid provider ID!")}function Pi(t){if(Ai.call(this,t),"twitter.com"!=this.providerId)throw Error("Invalid provider ID!")
qr(this,"username",t.screenName||null)}function xi(t){this.a=In(t)}function Mi(t){var e=In(t),n=Sn(e,"link"),r=Sn(In(n),"link")
return e=Sn(e,"deep_link_id"),Sn(In(e),"link")||e||r||n||t}function Li(){}function Fi(t,e){return t.then(function(t){if(t[Sa]){var n=mi(t[Sa])
if(!n||e!=n.c)throw new $r("user-mismatch")
return t}throw new $r("user-mismatch")}).s(function(t){throw t&&t.code&&t.code==ti+"user-not-found"?new $r("user-mismatch"):t})}function Ui(t,e){if(!e)throw new $r("internal-error","failed to construct a credential")
this.a=e,qr(this,"providerId",t),qr(this,"signInMethod",t)}function qi(t){return{pendingToken:t.a,requestUri:"http://localhost"}}function Vi(t){if(t&&t.providerId&&t.signInMethod&&0==t.providerId.indexOf("saml.")&&t.pendingToken)try{return new Ui(t.providerId,t.pendingToken)}catch(t){}return null}function Bi(t,e,n){if(this.a=null,e.idToken||e.accessToken)e.idToken&&qr(this,"idToken",e.idToken),e.accessToken&&qr(this,"accessToken",e.accessToken),e.nonce&&!e.pendingToken&&qr(this,"nonce",e.nonce),e.pendingToken&&(this.a=e.pendingToken)
else{if(!e.oauthToken||!e.oauthTokenSecret)throw new $r("internal-error","failed to construct a credential")
qr(this,"accessToken",e.oauthToken),qr(this,"secret",e.oauthTokenSecret)}qr(this,"providerId",t),qr(this,"signInMethod",n)}function ji(t){var e={}
return t.idToken&&(e.id_token=t.idToken),t.accessToken&&(e.access_token=t.accessToken),t.secret&&(e.oauth_token_secret=t.secret),e.providerId=t.providerId,t.nonce&&!t.a&&(e.nonce=t.nonce),e={postBody:Fn(e).toString(),requestUri:"http://localhost"},t.a&&(delete e.postBody,e.pendingToken=t.a),e}function Wi(t){if(t&&t.providerId&&t.signInMethod){var e={idToken:t.oauthIdToken,accessToken:t.oauthTokenSecret?null:t.oauthAccessToken,oauthTokenSecret:t.oauthTokenSecret,oauthToken:t.oauthTokenSecret&&t.oauthAccessToken,nonce:t.nonce,pendingToken:t.pendingToken}
try{return new Bi(t.providerId,e,t.signInMethod)}catch(t){}}return null}function Qi(t,e){this.Ac=e||[],Vr(this,{providerId:t,isOAuthProvider:!0}),this.vb={},this.$a=(Si(t)||{}).Ma||null,this.Ya=null}function Ki(t){if("string"!=typeof t||0!=t.indexOf("saml."))throw new $r("argument-error",'SAML provider IDs must be prefixed with "saml."')
Qi.call(this,t,[])}function Hi(t){Qi.call(this,t,Ei),this.a=[]}function Gi(){Hi.call(this,"facebook.com")}function zi(t){if(!t)throw new $r("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var e=t
return _(t)&&(e=t.accessToken),(new Gi).credential({accessToken:e})}function Yi(){Hi.call(this,"github.com")}function Xi(t){if(!t)throw new $r("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var e=t
return _(t)&&(e=t.accessToken),(new Yi).credential({accessToken:e})}function Ji(){Hi.call(this,"google.com"),this.ua("profile")}function $i(t,e){var n=t
return _(t)&&(n=t.idToken,e=t.accessToken),(new Ji).credential({idToken:n,accessToken:e})}function Zi(){Qi.call(this,"twitter.com",wi)}function to(t,e){var n=t
if(_(n)||(n={oauthToken:t,oauthTokenSecret:e}),!n.oauthToken||!n.oauthTokenSecret)throw new $r("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).")
return new Bi("twitter.com",n,"twitter.com")}function eo(t,e,n){this.a=t,this.c=e,qr(this,"providerId","password"),qr(this,"signInMethod",n===ro.EMAIL_LINK_SIGN_IN_METHOD?ro.EMAIL_LINK_SIGN_IN_METHOD:ro.EMAIL_PASSWORD_SIGN_IN_METHOD)}function no(t){return t&&t.email&&t.password?new eo(t.email,t.password,t.signInMethod):null}function ro(){Vr(this,{providerId:"password",isOAuthProvider:!1})}function io(t,e){if(!(e=oo(e)))throw new $r("argument-error","Invalid email link!")
return new eo(t,e,ro.EMAIL_LINK_SIGN_IN_METHOD)}function oo(t){var e=Sn((t=new xi(t=Mi(t))).a,"oobCode")||null
return"signIn"===(Sn(t.a,"mode")||null)&&e?e:null}function ao(t){if(!(t.Sa&&t.Ra||t.Da&&t.$))throw new $r("internal-error")
this.a=t,qr(this,"providerId","phone"),qr(this,"signInMethod","phone")}function so(t){if(t&&"phone"===t.providerId&&(t.verificationId&&t.verificationCode||t.temporaryProof&&t.phoneNumber)){var e={}
return V(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(n){t[n]&&(e[n]=t[n])}),new ao(e)}return null}function uo(t){return t.a.Da&&t.a.$?{temporaryProof:t.a.Da,phoneNumber:t.a.$}:{sessionInfo:t.a.Sa,code:t.a.Ra}}function co(t){try{this.a=t||i.a.auth()}catch(t){throw new $r("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")}Vr(this,{providerId:"phone",isOAuthProvider:!1})}function ho(t,e){if(!t)throw new $r("missing-verification-id")
if(!e)throw new $r("missing-verification-code")
return new ao({Sa:t,Ra:e})}function lo(t){if(t.temporaryProof&&t.phoneNumber)return new ao({Da:t.temporaryProof,$:t.phoneNumber})
var e=t&&t.providerId
if(!e||"password"===e)return null
var n=t&&t.oauthAccessToken,r=t&&t.oauthTokenSecret,i=t&&t.nonce,o=t&&t.oauthIdToken,a=t&&t.pendingToken
try{switch(e){case"google.com":return $i(o,n)
case"facebook.com":return zi(n)
case"github.com":return Xi(n)
case"twitter.com":return to(n,r)
default:return n||r||o||a?a?0==e.indexOf("saml.")?new Ui(e,a):new Bi(e,{pendingToken:a,idToken:t.oauthIdToken,accessToken:t.oauthAccessToken},e):new Hi(e).credential({idToken:o,accessToken:n,rawNonce:i}):null}}catch(t){return null}}function fo(t){if(!t.isOAuthProvider)throw new $r("invalid-oauth-provider")}function po(t,e,n,r,i,o){if(this.c=t,this.b=e||null,this.g=n||null,this.f=r||null,this.h=o||null,this.a=i||null,!this.g&&!this.a)throw new $r("invalid-auth-event")
if(this.g&&this.a)throw new $r("invalid-auth-event")
if(this.g&&!this.f)throw new $r("invalid-auth-event")}function yo(t){return(t=t||{}).type?new po(t.type,t.eventId,t.urlResponse,t.sessionId,t.error&&Zr(t.error),t.postBody):null}function mo(){this.b=null,this.a=[]}N(Ai,ki),N(Di,Ai),N(Ri,Ai),N(Oi,Ai),N(Pi,Ai),Ui.prototype.ka=function(t){return ja(t,qi(this))},Ui.prototype.b=function(t,e){var n=qi(this)
return n.idToken=e,Wa(t,n)},Ui.prototype.f=function(t,e){return Fi(Qa(t,qi(this)),e)},Ui.prototype.A=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}},Bi.prototype.ka=function(t){return ja(t,ji(this))},Bi.prototype.b=function(t,e){var n=ji(this)
return n.idToken=e,Wa(t,n)},Bi.prototype.f=function(t,e){return Fi(Qa(t,ji(this)),e)},Bi.prototype.A=function(){var t={providerId:this.providerId,signInMethod:this.signInMethod}
return this.idToken&&(t.oauthIdToken=this.idToken),this.accessToken&&(t.oauthAccessToken=this.accessToken),this.secret&&(t.oauthTokenSecret=this.secret),this.nonce&&(t.nonce=this.nonce),this.a&&(t.pendingToken=this.a),t},Qi.prototype.Ca=function(t){return this.vb=X(t),this},N(Ki,Qi),N(Hi,Qi),Hi.prototype.ua=function(t){return W(this.a,t)||this.a.push(t),this},Hi.prototype.Db=function(){return G(this.a)},Hi.prototype.credential=function(t,e){var n
if(!(n=_(t)?{idToken:t.idToken||null,accessToken:t.accessToken||null,nonce:t.rawNonce||null}:{idToken:t||null,accessToken:e||null}).idToken&&!n.accessToken)throw new $r("argument-error","credential failed: must provide the ID token and/or the access token.")
return new Bi(this.providerId,n,this.providerId)},N(Gi,Hi),qr(Gi,"PROVIDER_ID","facebook.com"),qr(Gi,"FACEBOOK_SIGN_IN_METHOD","facebook.com"),N(Yi,Hi),qr(Yi,"PROVIDER_ID","github.com"),qr(Yi,"GITHUB_SIGN_IN_METHOD","github.com"),N(Ji,Hi),qr(Ji,"PROVIDER_ID","google.com"),qr(Ji,"GOOGLE_SIGN_IN_METHOD","google.com"),N(Zi,Qi),qr(Zi,"PROVIDER_ID","twitter.com"),qr(Zi,"TWITTER_SIGN_IN_METHOD","twitter.com"),eo.prototype.ka=function(t){return this.signInMethod==ro.EMAIL_LINK_SIGN_IN_METHOD?_s(t,$a,{email:this.a,oobCode:this.c}):_s(t,ys,{email:this.a,password:this.c})},eo.prototype.b=function(t,e){return this.signInMethod==ro.EMAIL_LINK_SIGN_IN_METHOD?_s(t,Za,{idToken:e,email:this.a,oobCode:this.c}):_s(t,cs,{idToken:e,email:this.a,password:this.c})},eo.prototype.f=function(t,e){return Fi(this.ka(t),e)},eo.prototype.A=function(){return{email:this.a,password:this.c,signInMethod:this.signInMethod}},Vr(ro,{PROVIDER_ID:"password"}),Vr(ro,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"}),Vr(ro,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"}),ao.prototype.ka=function(t){return t.Ta(uo(this))},ao.prototype.b=function(t,e){var n=uo(this)
return n.idToken=e,_s(t,gs,n)},ao.prototype.f=function(t,e){var n=uo(this)
return n.operation="REAUTH",Fi(t=_s(t,vs,n),e)},ao.prototype.A=function(){var t={providerId:"phone"}
return this.a.Sa&&(t.verificationId=this.a.Sa),this.a.Ra&&(t.verificationCode=this.a.Ra),this.a.Da&&(t.temporaryProof=this.a.Da),this.a.$&&(t.phoneNumber=this.a.$),t},co.prototype.Ta=function(t,e){var n=this.a.c
return $t(e.verify()).then(function(r){if(!c(r))throw new $r("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.")
switch(e.type){case"recaptcha":return function(t,e){return _s(n,ss,e)}(0,{phoneNumber:t,recaptchaToken:r}).then(function(t){return"function"==typeof e.reset&&e.reset(),t},function(t){throw"function"==typeof e.reset&&e.reset(),t})
default:throw new $r("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')}})},Vr(co,{PROVIDER_ID:"phone"}),Vr(co,{PHONE_SIGN_IN_METHOD:"phone"}),po.prototype.getUid=function(){var t=[]
return t.push(this.c),this.b&&t.push(this.b),this.f&&t.push(this.f),this.i&&t.push(this.i),t.join("-")},po.prototype.A=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.h,error:this.a&&this.a.A()}}
var go,vo=null
function _o(t){var e="unauthorized-domain",n=void 0,r=In(t)
t=r.b,"chrome-extension"==(r=r.f)?n=Ut("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):"http"==r||"https"==r?n=Ut("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):e="operation-not-supported-in-this-environment",$r.call(this,e,n)}function bo(t,e,n){$r.call(this,t,n),(t=e||{}).wb&&qr(this,"email",t.wb),t.$&&qr(this,"phoneNumber",t.$),t.credential&&qr(this,"credential",t.credential)}function wo(t){if(t.code){var e=t.code||""
0==e.indexOf(ti)&&(e=e.substring(ti.length))
var n={credential:lo(t)}
if(t.email)n.wb=t.email
else if(t.phoneNumber)n.$=t.phoneNumber
else if(!n.credential)return new $r(e,t.message||void 0)
return new bo(e,n,t.message)}return null}function Eo(){}function To(t){return t.c||(t.c=t.b())}function So(){}function Io(t){if(!t.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],n=0;n<e.length;n++){var r=e[n]
try{return new ActiveXObject(r),t.f=r}catch(t){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")}return t.f}function Co(){}function No(){this.a=new XDomainRequest,this.readyState=0,this.onreadystatechange=null,this.responseType=this.responseText=this.response="",this.status=-1,this.statusText="",this.a.onload=S(this.ac,this),this.a.onerror=S(this.Eb,this),this.a.onprogress=S(this.bc,this),this.a.ontimeout=S(this.fc,this)}function ko(t,e){t.readyState=e,t.onreadystatechange&&t.onreadystatechange()}function Ao(t,e,n){this.reset(t,e,n,void 0,void 0)}function Do(t){this.f=t,this.b=this.c=this.a=null}function Ro(t,e){this.name=t,this.value=e}N(_o,$r),N(bo,$r),bo.prototype.A=function(){var t={code:this.code,message:this.message}
this.email&&(t.email=this.email),this.phoneNumber&&(t.phoneNumber=this.phoneNumber)
var e=this.credential&&this.credential.A()
return e&&$(t,e),t},bo.prototype.toJSON=function(){return this.A()},Eo.prototype.c=null,N(So,Eo),So.prototype.a=function(){var t=Io(this)
return t?new ActiveXObject(t):new XMLHttpRequest},So.prototype.b=function(){var t={}
return Io(this)&&(t[0]=!0,t[1]=!0),t},go=new So,N(Co,Eo),Co.prototype.a=function(){var t=new XMLHttpRequest
if("withCredentials"in t)return t
if("undefined"!=typeof XDomainRequest)return new No
throw Error("Unsupported browser")},Co.prototype.b=function(){return{}},(t=No.prototype).open=function(t,e,n){if(null!=n&&!n)throw Error("Only async requests are supported.")
this.a.open(t,e)},t.send=function(t){if(t){if("string"!=typeof t)throw Error("Only string data is supported")
this.a.send(t)}else this.a.send()},t.abort=function(){this.a.abort()},t.setRequestHeader=function(){},t.getResponseHeader=function(t){return"content-type"==t.toLowerCase()?this.a.contentType:""},t.ac=function(){this.status=200,this.response=this.responseText=this.a.responseText,ko(this,4)},t.Eb=function(){this.status=500,this.response=this.responseText="",ko(this,4)},t.fc=function(){this.Eb()},t.bc=function(){this.status=200,ko(this,1)},t.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType},Ao.prototype.a=null,Ao.prototype.reset=function(t,e,n,r,i){r||C(),delete this.a},Ro.prototype.toString=function(){return this.name}
var Oo=new Ro("SEVERE",1e3),Po=new Ro("WARNING",900),xo=new Ro("CONFIG",700),Mo=new Ro("FINE",500)
Do.prototype.log=function(t,e,n){if(t.value>=function t(e){return e.c?e.c:e.a?t(e.a):(R("Root logger has no level set."),null)}(this).value)for(v(e)&&(e=e()),t=new Ao(t,String(e),this.f),n&&(t.a=n),n=this;n;)n=n.a}
var Lo={},Fo=null
function Uo(t){var e
if(Fo||(Fo=new Do(""),Lo[""]=Fo,Fo.c=xo),!(e=Lo[t])){e=new Do(t)
var n=t.lastIndexOf("."),r=t.substr(n+1);(n=Uo(t.substr(0,n))).b||(n.b={}),n.b[r]=e,e.a=n,Lo[t]=e}return e}function qo(t,e){t&&t.log(Mo,e,void 0)}function Vo(t){this.f=t}function Bo(t){sn.call(this),this.u=t,this.readyState=jo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.i=new Headers,this.b=null,this.o="GET",this.g="",this.a=!1,this.h=Uo("goog.net.FetchXmlHttp"),this.l=this.c=this.f=null}N(Vo,Eo),Vo.prototype.a=function(){return new Bo(this.f)},Vo.prototype.b=function(t){return function(){return t}}({}),N(Bo,sn)
var jo=0
function Wo(t){t.c.read().then(t.$b.bind(t)).catch(t.Ka.bind(t))}function Qo(t,e){e&&t.f&&(t.status=t.f.status,t.statusText=t.f.statusText),t.readyState=4,t.f=null,t.c=null,t.l=null,Ko(t)}function Ko(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Ho(t){sn.call(this),this.headers=new yn,this.B=t||null,this.c=!1,this.w=this.a=null,this.h=this.N=this.l="",this.f=this.I=this.i=this.G=!1,this.g=0,this.u=null,this.o=Go,this.v=this.O=!1}(t=Bo.prototype).open=function(t,e){if(this.readyState!=jo)throw this.abort(),Error("Error reopening a connection")
this.o=t,this.g=e,this.readyState=1,Ko(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ")
this.a=!0
var e={headers:this.i,method:this.o,credentials:void 0,cache:void 0}
t&&(e.body=t),this.u.fetch(new Request(this.g,e)).then(this.ec.bind(this),this.Ka.bind(this))},t.abort=function(){this.response=this.responseText="",this.i=new Headers,this.status=0,this.c&&this.c.cancel("Request was aborted."),1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Qo(this,!1)),this.readyState=jo},t.ec=function(t){this.a&&(this.f=t,this.b||(this.b=t.headers,this.readyState=2,Ko(this)),this.a&&(this.readyState=3,Ko(this),this.a&&("arraybuffer"===this.responseType?t.arrayBuffer().then(this.cc.bind(this),this.Ka.bind(this)):void 0!==u.ReadableStream&&"body"in t?(this.response=this.responseText="",this.c=t.body.getReader(),this.l=new TextDecoder,Wo(this)):t.text().then(this.dc.bind(this),this.Ka.bind(this)))))},t.$b=function(t){if(this.a){var e=this.l.decode(t.value?t.value:new Uint8Array(0),{stream:!t.done})
e&&(this.response=this.responseText+=e),t.done?Qo(this,!0):Ko(this),3==this.readyState&&Wo(this)}},t.dc=function(t){this.a&&(this.response=this.responseText=t,Qo(this,!0))},t.cc=function(t){this.a&&(this.response=t,Qo(this,!0))},t.Ka=function(t){var e=this.h
e&&e.log(Po,"Failed to fetch url "+this.g,t instanceof Error?t:Error(t)),this.a&&Qo(this,!0)},t.setRequestHeader=function(t,e){this.i.append(t,e)},t.getResponseHeader=function(t){return this.b?this.b.get(t.toLowerCase())||"":((t=this.h)&&t.log(Po,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")},t.getAllResponseHeaders=function(){if(!this.b){var t=this.h
return t&&t.log(Po,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0),""}t=[]
for(var e=this.b.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next()
return t.join("\r\n")},N(Ho,sn)
var Go=""
Ho.prototype.b=Uo("goog.net.XhrIo")
var zo=/^https?$/i,Yo=["POST","PUT"]
function Xo(t){return"content-type"==t.toLowerCase()}function Jo(t,e){t.c=!1,t.a&&(t.f=!0,t.a.abort(),t.f=!1),t.h=e,$o(t),ta(t)}function $o(t){t.G||(t.G=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function Zo(t){if(t.c&&void 0!==s)if(t.w[1]&&4==na(t)&&2==ra(t))qo(t.b,ia(t,"Local request error detected and ignored"))
else if(t.i&&4==na(t))ln(t.Hb,0,t)
else if(t.dispatchEvent("readystatechange"),4==na(t)){qo(t.b,ia(t,"Request complete")),t.c=!1
try{var e,n=ra(t)
t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0
break t
default:r=!1}if(!(e=r)){var i
if(i=0===n){var o=String(t.l).match(vn)[1]||null
if(!o&&u.self&&u.self.location){var a=u.self.location.protocol
o=a.substr(0,a.length-1)}i=!zo.test(o?o.toLowerCase():"")}e=i}if(e)t.dispatchEvent("complete"),t.dispatchEvent("success")
else{try{var c=2<na(t)?t.a.statusText:""}catch(e){qo(t.b,"Can not get status: "+e.message),c=""}t.h=c+" ["+ra(t)+"]",$o(t)}}finally{ta(t)}}}function ta(t,e){if(t.a){ea(t)
var n=t.a,r=t.w[0]?p:null
t.a=null,t.w=null,e||t.dispatchEvent("ready")
try{n.onreadystatechange=r}catch(e){(t=t.b)&&t.log(Oo,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}function ea(t){t.a&&t.v&&(t.a.ontimeout=null),t.u&&(u.clearTimeout(t.u),t.u=null)}function na(t){return t.a?t.a.readyState:0}function ra(t){try{return 2<na(t)?t.a.status:-1}catch(t){return-1}}function ia(t,e){return e+" ["+t.N+" "+t.l+" "+ra(t)+"]"}function oa(t){var e=ma
this.g=[],this.v=e,this.u=t||null,this.f=this.a=!1,this.c=void 0,this.l=this.w=this.i=!1,this.h=0,this.b=null,this.m=0}function aa(t,e,n){t.a=!0,t.c=n,t.f=!e,ha(t)}function sa(t){if(t.a){if(!t.l)throw new la(t)
t.l=!1}}function ua(t,e,n,r){t.g.push([e,n,r]),t.a&&ha(t)}function ca(t){return j(t.g,function(t){return v(t[1])})}function ha(t){if(t.h&&t.a&&ca(t)){var e=t.h,n=da[e]
n&&(u.clearTimeout(n.a),delete da[e]),t.h=0}t.b&&(t.b.m--,delete t.b),e=t.c
for(var r=n=!1;t.g.length&&!t.i;){var i=t.g.shift(),o=i[0],a=i[1]
if(i=i[2],o=t.f?a:o)try{var s=o.call(i||t.u,e)
void 0!==s&&(t.f=t.f&&(s==e||s instanceof Error),t.c=e=s),(k(e)||"function"==typeof u.Promise&&e instanceof u.Promise)&&(r=!0,t.i=!0)}catch(r){e=r,t.f=!0,ca(t)||(n=!0)}}t.c=e,r&&(s=S(t.o,t,!0),r=S(t.o,t,!1),e instanceof oa?(ua(e,s,r),e.w=!0):e.then(s,r)),n&&(e=new pa(e),da[e.a]=e,t.h=e.a)}function la(){A.call(this)}function fa(){A.call(this)}function pa(t){this.a=u.setTimeout(S(this.c,this),0),this.b=t}(t=Ho.prototype).Ea=function(){void 0!==s&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",qo(this.b,ia(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))},t.abort=function(){this.a&&this.c&&(qo(this.b,ia(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ta(this))},t.va=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ta(this,!0)),Ho.mb.va.call(this)},t.Hb=function(){this.qa||(this.I||this.i||this.f?Zo(this):this.tc())},t.tc=function(){Zo(this)},t.getResponse=function(){try{if(!this.a)return null
if("response"in this.a)return this.a.response
switch(this.o){case Go:case"text":return this.a.responseText
case"arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var t=this.b
return t&&t.log(Oo,"Response type "+this.o+" is not supported on this browser",void 0),null}catch(t){return qo(this.b,"Can not get response: "+t.message),null}},oa.prototype.cancel=function(t){if(this.a)this.c instanceof oa&&this.c.cancel()
else{if(this.b){var e=this.b
delete this.b,t?e.cancel(t):(e.m--,0>=e.m&&e.cancel())}this.v?this.v.call(this.u,this):this.l=!0,this.a||(t=new fa(this),sa(this),aa(this,!1,t))}},oa.prototype.o=function(t,e){this.i=!1,aa(this,t,e)},oa.prototype.then=function(t,e,n){var r,i,o=new Kt(function(t,e){r=t,i=e})
return ua(this,r,function(t){t instanceof fa?o.cancel():i(t)}),o.then(t,e,n)},oa.prototype.$goog_Thenable=!0,N(la,A),la.prototype.message="Deferred has already fired",la.prototype.name="AlreadyCalledError",N(fa,A),fa.prototype.message="Deferred was canceled",fa.prototype.name="CanceledError",pa.prototype.c=function(){throw delete da[this.a],this.b}
var da={}
function ya(t){var e={},n=e.document||document,r=ot(t).toString(),i=document.createElement("SCRIPT"),o={Jb:i,Ea:void 0},a=new oa(o),s=null,c=null!=e.timeout?e.timeout:5e3
return 0<c&&(s=window.setTimeout(function(){ga(i,!0)
var t=new ba(_a,"Timeout reached for loading script "+r)
sa(a),aa(a,!1,t)},c),o.Ea=s),i.onload=i.onreadystatechange=function(){i.readyState&&"loaded"!=i.readyState&&"complete"!=i.readyState||(ga(i,e.bd||!1,s),sa(a),aa(a,!0,null))},i.onerror=function(){ga(i,!0,s)
var t=new ba(va,"Error while loading script "+r)
sa(a),aa(a,!1,t)},$(o=e.attributes||{},{type:"text/javascript",charset:"UTF-8"}),Kn(i,o),function(t,e){U(t,"HTMLScriptElement"),t.src=ot(e),null===f&&(f=(e=(e=u.document).querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&l.test(e)?e:""),(e=f)&&t.setAttribute("nonce",e)}(i,t),function(t){var e
return(e=(t||document).getElementsByTagName("HEAD"))&&0!=e.length?e[0]:t.documentElement}(n).appendChild(i),a}function ma(){if(this&&this.Jb){var t=this.Jb
t&&"SCRIPT"==t.tagName&&ga(t,!0,this.Ea)}}function ga(t,e,n){null!=n&&u.clearTimeout(n),t.onload=p,t.onerror=p,t.onreadystatechange=p,e&&window.setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},0)}var va=0,_a=1
function ba(t,e){var n="Jsloader error (code #"+t+")"
e&&(n+=": "+e),A.call(this,n),this.code=t}function wa(t){this.f=t}function Ea(t,e,n){if(this.b=t,t=e||{},this.i=t.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token",this.m=t.secureTokenTimeout||Ia,this.f=X(t.secureTokenHeaders||Ca),this.g=t.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",this.h=t.firebaseTimeout||Na,this.a=X(t.firebaseHeaders||ka),n&&(this.a["X-Client-Version"]=n,this.f["X-Client-Version"]=n),n="Node"==lr(),!(n=u.XMLHttpRequest||n&&i.a.INTERNAL.node&&i.a.INTERNAL.node.XMLHttpRequest)&&!hr())throw new $r("internal-error","The XMLHttpRequest compatibility library was not found.")
this.c=void 0,hr()?this.c=new Vo(self):fr()?this.c=new wa(n):this.c=new Co}N(ba,A),N(wa,Eo),wa.prototype.a=function(){return new this.f},wa.prototype.b=function(){return{}}
var Ta,Sa="idToken",Ia=new Rr(3e4,6e4),Ca={"Content-Type":"application/x-www-form-urlencoded"},Na=new Rr(3e4,6e4),ka={"Content-Type":"application/json"}
function Aa(t,e){e?t.a["X-Firebase-Locale"]=e:delete t.a["X-Firebase-Locale"]}function Da(t,e){e?(t.a["X-Client-Version"]=e,t.f["X-Client-Version"]=e):(delete t.a["X-Client-Version"],delete t.f["X-Client-Version"])}function Ra(t,e,n,r,i,o,a){(function(){var t=vr()
return!((t=yr(t)!=dr?null:(t=t.match(/\sChrome\/(\d+)/i))&&2==t.length?parseInt(t[1],10):null)&&30>t||be&&Ae&&!(9<Ae))})()||hr()?t=S(t.o,t):(Ta||(Ta=new Kt(function(t,e){!function(t,e){((window.gapi||{}).client||{}).request?t():(u[Pa]=function(){((window.gapi||{}).client||{}).request?t():e(Error("CORS_UNSUPPORTED"))},function(t,e){ua(ya(at(Oa,{onload:Pa})),null,e,void 0)}(0,function(){e(Error("CORS_UNSUPPORTED"))}))}(t,e)})),t=S(t.l,t)),t(e,n,r,i,o,a)}Ea.prototype.o=function(t,e,n,r,i,o){if(hr()&&(void 0===u.fetch||void 0===u.Headers||void 0===u.Request))throw new $r("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.")
var a=new Ho(this.c)
if(o){a.g=Math.max(0,o)
var s=setTimeout(function(){a.dispatchEvent("timeout")},o)}un(a,"complete",function(){s&&clearTimeout(s)
var t=null
try{t=JSON.parse(function(t){try{return t.a?t.a.responseText:""}catch(e){return qo(t.b,"Can not get responseText: "+e.message),""}}(this))||null}catch(e){t=null}e&&e(t)}),cn(a,"ready",function(){s&&clearTimeout(s),ye(this)}),cn(a,"timeout",function(){s&&clearTimeout(s),ye(this),e&&e(null)}),function(t,e,n,r,i){if(t.a)throw Error("[goog.net.XhrIo] Object is active with another request="+t.l+"; newUri="+e)
n=n?n.toUpperCase():"GET",t.l=e,t.h="",t.N=n,t.G=!1,t.c=!0,t.a=t.B?t.B.a():go.a(),t.w=t.B?To(t.B):To(go),t.a.onreadystatechange=S(t.Hb,t)
try{qo(t.b,ia(t,"Opening Xhr")),t.I=!0,t.a.open(n,String(e),!0),t.I=!1}catch(e){return qo(t.b,ia(t,"Error opening Xhr: "+e.message)),void Jo(t,e)}e=r||""
var o=new yn(t.headers)
i&&function(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0)
else if(g(t)||c(t))V(t,e,void 0)
else for(var n=dn(t),r=pn(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}(i,function(t,e){o.set(e,t)}),i=function(t){t:{for(var e=Xo,n=t.length,r=c(t)?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i
break t}e=-1}return 0>e?null:c(t)?t.charAt(e):t[e]}(o.U()),r=u.FormData&&e instanceof u.FormData,!W(Yo,n)||i||r||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.forEach(function(t,e){this.a.setRequestHeader(e,t)},t),t.o&&(t.a.responseType=t.o),"withCredentials"in t.a&&t.a.withCredentials!==t.O&&(t.a.withCredentials=t.O)
try{ea(t),0<t.g&&(t.v=function(t){return be&&Re(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(t.a),qo(t.b,ia(t,"Will abort after "+t.g+"ms if incomplete, xhr2 "+t.v)),t.v?(t.a.timeout=t.g,t.a.ontimeout=S(t.Ea,t)):t.u=ln(t.Ea,t.g,t)),qo(t.b,ia(t,"Sending request")),t.i=!0,t.a.send(e),t.i=!1}catch(e){qo(t.b,ia(t,"Send error: "+e.message)),Jo(t,e)}}(a,t,n,r,i)}
var Oa=new Z(nt,"https://apis.google.com/js/client.js?onload=%{onload}"),Pa="__fcb"+Math.floor(1e6*Math.random()).toString()
function xa(t){if(!c(t=t.email)||!ar.test(t))throw new $r("invalid-email")}function Ma(t){"email"in t&&xa(t)}function La(t){if(!t[Sa])throw new $r("internal-error")}function Fa(t){if(t.phoneNumber||t.temporaryProof){if(!t.phoneNumber||!t.temporaryProof)throw new $r("internal-error")}else{if(!t.sessionInfo)throw new $r("missing-verification-id")
if(!t.code)throw new $r("missing-verification-code")}}Ea.prototype.l=function(t,e,n,r,i){var o=this
Ta.then(function(){window.gapi.client.setApiKey(o.b)
var a=window.gapi.auth.getToken()
window.gapi.auth.setToken(null),window.gapi.client.request({path:t,method:n,body:r,headers:i,authType:"none",callback:function(t){window.gapi.auth.setToken(a),e&&e(t)}})}).s(function(t){e&&e({error:{message:t&&t.message||"CORS_UNSUPPORTED"}})})},Ea.prototype.kb=function(){return _s(this,hs,{})},Ea.prototype.nb=function(t,e){return _s(this,us,{idToken:t,email:e})},Ea.prototype.ob=function(t,e){return _s(this,cs,{idToken:t,password:e})}
var Ua={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"}
function qa(t){if(!t.requestUri||!t.sessionId&&!t.postBody&&!t.pendingToken)throw new $r("internal-error")}function Va(t,e){return e.oauthIdToken&&e.providerId&&0==e.providerId.indexOf("oidc.")&&!e.pendingToken&&(t.sessionId?e.nonce=t.sessionId:t.postBody&&qn(t=new Mn(t.postBody),"nonce")&&(e.nonce=t.get("nonce"))),e}function Ba(t){var e=null
if(t.needConfirmation?(t.code="account-exists-with-different-credential",e=wo(t)):"FEDERATED_USER_ID_ALREADY_LINKED"==t.errorMessage?(t.code="credential-already-in-use",e=wo(t)):"EMAIL_EXISTS"==t.errorMessage?(t.code="email-already-in-use",e=wo(t)):t.errorMessage&&(e=bs(t.errorMessage)),e)throw e
if(!t[Sa])throw new $r("internal-error")}function ja(t,e){return e.returnIdpCredential=!0,_s(t,ls,e)}function Wa(t,e){return e.returnIdpCredential=!0,_s(t,ps,e)}function Qa(t,e){return e.returnIdpCredential=!0,e.autoCreate=!1,_s(t,fs,e)}function Ka(t){if(!t.oobCode)throw new $r("invalid-action-code")}(t=Ea.prototype).pb=function(t,e){var n={idToken:t},r=[]
return z(Ua,function(t,i){var o=e[i]
null===o?r.push(t):i in e&&(n[i]=o)}),r.length&&(n.deleteAttribute=r),_s(this,us,n)},t.hb=function(t,e){return $(t={requestType:"PASSWORD_RESET",email:t},e),_s(this,rs,t)},t.ib=function(t,e){return $(t={requestType:"EMAIL_SIGNIN",email:t},e),_s(this,es,t)},t.gb=function(t,e){return $(t={requestType:"VERIFY_EMAIL",idToken:t},e),_s(this,ns,t)},t.Ta=function(t){return _s(this,ms,t)},t.Xa=function(t,e){return _s(this,as,{oobCode:t,newPassword:e})},t.Ia=function(t){return _s(this,Ga,{oobCode:t})},t.Va=function(t){return _s(this,Ha,{oobCode:t})}
var Ha={endpoint:"setAccountInfo",D:Ka,da:"email"},Ga={endpoint:"resetPassword",D:Ka,J:function(t){var e=t.requestType
if(!e||!t.email&&"EMAIL_SIGNIN"!=e)throw new $r("internal-error")}},za={endpoint:"signupNewUser",D:function(t){if(xa(t),!t.password)throw new $r("weak-password")},J:La,R:!0},Ya={endpoint:"createAuthUri"},Xa={endpoint:"deleteAccount",T:["idToken"]},Ja={endpoint:"setAccountInfo",T:["idToken","deleteProvider"],D:function(t){if(!m(t.deleteProvider))throw new $r("internal-error")}},$a={endpoint:"emailLinkSignin",T:["email","oobCode"],D:xa,J:La,R:!0},Za={endpoint:"emailLinkSignin",T:["idToken","email","oobCode"],D:xa,J:La,R:!0},ts={endpoint:"getAccountInfo"},es={endpoint:"getOobConfirmationCode",T:["requestType"],D:function(t){if("EMAIL_SIGNIN"!=t.requestType)throw new $r("internal-error")
xa(t)},da:"email"},ns={endpoint:"getOobConfirmationCode",T:["idToken","requestType"],D:function(t){if("VERIFY_EMAIL"!=t.requestType)throw new $r("internal-error")},da:"email"},rs={endpoint:"getOobConfirmationCode",T:["requestType"],D:function(t){if("PASSWORD_RESET"!=t.requestType)throw new $r("internal-error")
xa(t)},da:"email"},is={sb:!0,endpoint:"getProjectConfig",Gb:"GET"},os={sb:!0,endpoint:"getRecaptchaParam",Gb:"GET",J:function(t){if(!t.recaptchaSiteKey)throw new $r("internal-error")}},as={endpoint:"resetPassword",D:Ka,da:"email"},ss={endpoint:"sendVerificationCode",T:["phoneNumber","recaptchaToken"],da:"sessionInfo"},us={endpoint:"setAccountInfo",T:["idToken"],D:Ma,R:!0},cs={endpoint:"setAccountInfo",T:["idToken"],D:function(t){if(Ma(t),!t.password)throw new $r("weak-password")},J:La,R:!0},hs={endpoint:"signupNewUser",J:La,R:!0},ls={endpoint:"verifyAssertion",D:qa,Oa:Va,J:Ba,R:!0},fs={endpoint:"verifyAssertion",D:qa,Oa:Va,J:function(t){if(t.errorMessage&&"USER_NOT_FOUND"==t.errorMessage)throw new $r("user-not-found")
if(t.errorMessage)throw bs(t.errorMessage)
if(!t[Sa])throw new $r("internal-error")},R:!0},ps={endpoint:"verifyAssertion",D:function(t){if(qa(t),!t.idToken)throw new $r("internal-error")},Oa:Va,J:Ba,R:!0},ds={endpoint:"verifyCustomToken",D:function(t){if(!t.token)throw new $r("invalid-custom-token")},J:La,R:!0},ys={endpoint:"verifyPassword",D:function(t){if(xa(t),!t.password)throw new $r("wrong-password")},J:La,R:!0},ms={endpoint:"verifyPhoneNumber",D:Fa,J:La},gs={endpoint:"verifyPhoneNumber",D:function(t){if(!t.idToken)throw new $r("internal-error")
Fa(t)},J:function(t){if(t.temporaryProof)throw t.code="credential-already-in-use",wo(t)
La(t)}},vs={Tb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",D:Fa,J:La}
function _s(t,e,n){if(!function(t,e){if(!e||!e.length)return!0
if(!t)return!1
for(var n=0;n<e.length;n++){var r=t[e[n]]
if(null==r||""===r)return!1}return!0}(n,e.T))return Zt(new $r("internal-error"))
var r,i=e.Gb||"POST"
return $t(n).then(e.D).then(function(){return e.R&&(n.returnSecureToken=!0),function(t,e,n,r,i,o){var a=In(t.g+e)
Tn(a,"key",t.b),o&&Tn(a,"cb",C().toString())
var s="GET"==n
if(s)for(var u in r)r.hasOwnProperty(u)&&Tn(a,u,r[u])
return new Kt(function(e,o){Ra(t,a.toString(),function(t){t?t.error?o(ws(t,i||{})):e(t):o(new $r("network-request-failed"))},n,s?void 0:zn(Cr(r)),t.a,t.h.get())})}(t,e.endpoint,i,n,e.Tb,e.sb||!1)}).then(function(t){return r=t,e.Oa?e.Oa(n,r):r}).then(e.J).then(function(){if(!e.da)return r
if(!(e.da in r))throw new $r("internal-error")
return r[e.da]})}function bs(t){return ws({error:{errors:[{message:t}],code:400,message:t}})}function ws(t,e){var n=(t.error&&t.error.errors&&t.error.errors[0]||{}).reason||"",r={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"}
if(n=r[n]?new $r(r[n]):null)return n
for(var i in n=t.error&&t.error.message||"",$(r={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",ADMIN_ONLY_OPERATION:"admin-restricted-operation"},e||{}),e=(e=n.match(/^[^\s]+\s*:\s*(.*)$/))&&1<e.length?e[1]:void 0,r)if(0===n.indexOf(i))return new $r(r[i],e)
return!e&&t&&(e=Ir(t)),new $r("internal-error",e)}function Es(t){this.b=t,this.a=null,this.bb=function(t){return(Cs||(Cs=new Kt(function(t,e){function n(){Dr(),_r("gapi.load")("gapi.iframes",{callback:t,ontimeout:function(){Dr(),e(Error("Network Error"))},timeout:Ss.get()})}if(_r("gapi.iframes.Iframe"))t()
else if(_r("gapi.load"))n()
else{var r="__iframefcb"+Math.floor(1e6*Math.random()).toString()
u[r]=function(){_r("gapi.load")?n():e(Error("Network Error"))},$t(ya(r=at(Ts,{onload:r}))).s(function(){e(Error("Network Error"))})}}).s(function(t){throw Cs=null,t}))).then(function(){return new Kt(function(e,n){_r("gapi.iframes.getContext")().open({where:document.body,url:t.b,messageHandlersFilter:_r("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(r){function i(){clearTimeout(o),e()}t.a=r,t.a.restyle({setHideOnLeave:!1})
var o=setTimeout(function(){n(Error("Network Error"))},Is.get())
r.ping(i).then(i,function(){n(Error("Network Error"))})})})})}(this)}var Ts=new Z(nt,"https://apis.google.com/js/api.js?onload=%{onload}"),Ss=new Rr(3e4,6e4),Is=new Rr(5e3,15e3),Cs=null
function Ns(t,e,n){this.i=t,this.g=e,this.h=n,this.f=null,this.a=Cn(this.i,"/__/auth/iframe"),Tn(this.a,"apiKey",this.g),Tn(this.a,"appName",this.h),this.b=null,this.c=[]}function ks(t,e,n,r,i){this.o=t,this.l=e,this.c=n,this.m=r,this.h=this.g=this.i=null,this.a=i,this.f=null}function As(t){try{return i.a.app(t).auth().ya()}catch(t){return[]}}function Ds(t,e,n,r,i){this.l=t,this.f=e,this.b=n,this.c=r||null,this.h=i||null,this.o=this.u=this.v=null,this.g=[],this.m=this.a=null}function Rs(t){var e=tr()
return function(t){return _s(t,is,{}).then(function(t){return t.authorizedDomains||[]})}(t).then(function(t){t:{var n=In(e),r=n.f
n=n.b
for(var i=0;i<t.length;i++){var o=t[i],a=n,s=r
if(0==o.indexOf("chrome-extension://")?a=In(o).b==a&&"chrome-extension"==s:"http"!=s&&"https"!=s?a=!1:or.test(o)?a=a==o:(o=o.split(".").join("\\."),a=new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)),a){t=!0
break t}}t=!1}if(!t)throw new _o(tr())})}function Os(t){return t.m?t.m:(t.m=sr().then(function(){if(!t.u){var e=t.c,n=t.h,r=As(t.b),i=new Ns(t.l,t.f,t.b)
i.f=e,i.b=n,i.c=G(r||[]),t.u=i.toString()}t.i=new Es(t.u),function(t){if(!t.i)throw Error("IfcHandler must be initialized!")
!function(t,e){t.bb.then(function(){t.a.register("authEvent",e,_r("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}(t.i,function(e){var n={}
if(e&&e.authEvent){var r=!1
for(e=yo(e.authEvent),n=0;n<t.g.length;n++)r=t.g[n](e)||r
return(n={}).status=r?"ACK":"ERROR",$t(n)}return n.status="ERROR",$t(n)})}(t)}),t.m)}function Ps(t){return t.o||(t.v=t.c?gr(t.c,As(t.b)):null,t.o=new Ea(t.f,bi(t.h),t.v)),t.o}function xs(t,e,n,r,i,o,a,s,u,c){return(t=new ks(t,e,n,r,i)).i=o,t.g=a,t.h=s,t.b=X(u||null),t.f=c,t.toString()}function Ms(t){if(this.a=t||i.a.INTERNAL.reactNative&&i.a.INTERNAL.reactNative.AsyncStorage,!this.a)throw new $r("internal-error","The React Native compatibility library was not found.")
this.type="asyncStorage"}function Ls(t){this.b=t,this.a={},this.f=S(this.c,this)}Ns.prototype.toString=function(){return this.f?Tn(this.a,"v",this.f):Un(this.a.a,"v"),this.b?Tn(this.a,"eid",this.b):Un(this.a.a,"eid"),this.c.length?Tn(this.a,"fw",this.c.join(",")):Un(this.a.a,"fw"),this.a.toString()},ks.prototype.toString=function(){var t=Cn(this.o,"/__/auth/handler")
if(Tn(t,"apiKey",this.l),Tn(t,"appName",this.c),Tn(t,"authType",this.m),this.a.isOAuthProvider){var e=this.a
try{var n=i.a.app(this.c).auth().ea()}catch(t){n=null}for(var r in e.Ya=n,Tn(t,"providerId",this.a.providerId),n=Cr((e=this.a).vb))n[r]=n[r].toString()
r=e.Ac,n=X(n)
for(var o=0;o<r.length;o++){var a=r[o]
a in n&&delete n[a]}e.$a&&e.Ya&&!n[e.$a]&&(n[e.$a]=e.Ya),Y(n)||Tn(t,"customParameters",Ir(n))}if("function"==typeof this.a.Db&&(e=this.a.Db()).length&&Tn(t,"scopes",e.join(",")),this.i?Tn(t,"redirectUrl",this.i):Un(t.a,"redirectUrl"),this.g?Tn(t,"eventId",this.g):Un(t.a,"eventId"),this.h?Tn(t,"v",this.h):Un(t.a,"v"),this.b)for(var s in this.b)this.b.hasOwnProperty(s)&&!Sn(t,s)&&Tn(t,s,this.b[s])
return this.f?Tn(t,"eid",this.f):Un(t.a,"eid"),(s=As(this.c)).length&&Tn(t,"fw",s.join(",")),t.toString()},(t=Ds.prototype).Bb=function(t,e,n){var r=new $r("popup-closed-by-user"),i=new $r("web-storage-unsupported"),o=this,a=!1
return this.fa().then(function(){(function(t){var e={type:"webStorageSupport"}
return Os(t).then(function(){return function(t,e){return t.bb.then(function(){return new Kt(function(n){t.a.send(e.type,e,n,_r("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}(t.i,e)}).then(function(t){if(t&&t.length&&void 0!==t[0].webStorageSupport)return t[0].webStorageSupport
throw Error()})})(o).then(function(n){n||(t&&rr(t),e(i),a=!0)})}).s(function(){}).then(function(){if(!a)return function(t){return new Kt(function(e){return function n(){fn(2e3).then(function(){if(t&&!t.closed)return n()
e()})}()})}(t)}).then(function(){if(!a)return fn(n).then(function(){e(r)})})},t.Kb=function(){var t=vr()
return!Sr(t)&&!Ar(t)},t.Fb=function(){return!1},t.zb=function(t,e,n,r,i,o,a){if(!t)return Zt(new $r("popup-blocked"))
if(a&&!Sr())return this.fa().s(function(e){rr(t),i(e)}),r(),$t()
this.a||(this.a=Rs(Ps(this)))
var s=this
return this.a.then(function(){var e=s.fa().s(function(e){throw rr(t),i(e),e})
return r(),e}).then(function(){fo(n),a||er(xs(s.l,s.f,s.b,e,n,null,o,s.c,void 0,s.h),t)}).s(function(t){throw"auth/network-request-failed"==t.code&&(s.a=null),t})},t.Ab=function(t,e,n){this.a||(this.a=Rs(Ps(this)))
var r=this
return this.a.then(function(){fo(e),er(xs(r.l,r.f,r.b,t,e,tr(),n,r.c,void 0,r.h))}).s(function(t){throw"auth/network-request-failed"==t.code&&(r.a=null),t})},t.fa=function(){var t=this
return Os(this).then(function(){return t.i.bb}).s(function(){throw t.a=null,new $r("network-request-failed")})},t.Mb=function(){return!0},t.wa=function(t){this.g.push(t)},t.Ja=function(t){K(this.g,function(e){return e==t})},(t=Ms.prototype).get=function(t){return $t(this.a.getItem(t)).then(function(t){return t&&Nr(t)})},t.set=function(t,e){return $t(this.a.setItem(t,Ir(e)))},t.P=function(t){return $t(this.a.removeItem(t))},t.Y=function(){},t.ca=function(){}
var Fs,Us=[]
function qs(t,e,n){Y(t.a)&&t.b.addEventListener("message",t.f),void 0===t.a[e]&&(t.a[e]=[]),t.a[e].push(n)}function Vs(t){this.a=t}function Bs(t){this.c=t,this.b=!1,this.a=[]}function js(t,e,n,r){var i,o,a,s,u=n||{},c=null
if(t.b)return Zt(Error("connection_unavailable"))
var h=r?800:50,l="undefined"!=typeof MessageChannel?new MessageChannel:null
return new Kt(function(n,r){l?(i=Math.floor(Math.random()*Math.pow(10,20)).toString(),l.port1.start(),a=setTimeout(function(){r(Error("unsupported_event"))},h),c={messageChannel:l,onMessage:o=function(t){t.data.eventId===i&&("ack"===t.data.status?(clearTimeout(a),s=setTimeout(function(){r(Error("timeout"))},3e3)):"done"===t.data.status?(clearTimeout(s),void 0!==t.data.response?n(t.data.response):r(Error("unknown_error"))):(clearTimeout(a),clearTimeout(s),r(Error("invalid_response"))))}},t.a.push(c),l.port1.addEventListener("message",o),t.c.postMessage({eventType:e,eventId:i,data:u},[l.port2])):r(Error("connection_unavailable"))}).then(function(e){return Ws(t,c),e}).s(function(e){throw Ws(t,c),e})}function Ws(t,e){if(e){var n=e.messageChannel,r=e.onMessage
n&&(n.port1.removeEventListener("message",r),n.port1.close()),K(t.a,function(t){return t==e})}}function Qs(){if(!Hs())throw new $r("web-storage-unsupported")
this.c={},this.a=[],this.b=0,this.l=u.indexedDB,this.type="indexedDB",this.g=this.m=this.f=this.i=null,this.u=!1,this.h=null
var t=this
hr()&&self?(this.m=function(){var t=hr()?self:null
if(V(Us,function(n){n.b==t&&(e=n)}),!e){var e=new Ls(t)
Us.push(e)}return e}(),qs(this.m,"keyChanged",function(e,n){return Js(t).then(function(e){return 0<e.length&&V(t.a,function(t){t(e)}),{keyProcessed:W(e,n.key)}})}),qs(this.m,"ping",function(){return $t(["keyChanged"])})):function(){var t=u.navigator
return t&&t.serviceWorker?$t().then(function(){return t.serviceWorker.ready}).then(function(t){return t.active||null}).s(function(){return null}):$t(null)}().then(function(e){(t.h=e)&&(t.g=new Bs(new Vs(e)),js(t.g,"ping",null,!0).then(function(e){e[0].fulfilled&&W(e[0].value,"keyChanged")&&(t.u=!0)}).s(function(){}))})}function Ks(t){return t.o||(t.o=function t(e){return new Kt(function(n,r){var i=e.l.open("firebaseLocalStorageDb",1)
i.onerror=function(t){try{t.preventDefault()}catch(t){}r(Error(t.target.error))},i.onupgradeneeded=function(t){t=t.target.result
try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){r(t)}},i.onsuccess=function(i){(i=i.target.result).objectStoreNames.contains("firebaseLocalStorage")?n(i):function(t){return new Kt(function(e,n){var r=t.l.deleteDatabase("firebaseLocalStorageDb")
r.onsuccess=function(){e()},r.onerror=function(t){n(Error(t.target.error))}})}(e).then(function(){return t(e)}).then(function(t){n(t)}).s(function(t){r(t)})}})}(t)),t.o}function Hs(){try{return!!u.indexedDB}catch(t){return!1}}function Gs(t){return t.objectStore("firebaseLocalStorage")}function zs(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly")}function Ys(t){return new Kt(function(e,n){t.onsuccess=function(t){t&&t.target?e(t.target.result):e()},t.onerror=function(t){n(t.target.error)}})}function Xs(t,e){return t.g&&t.h&&function(){var t=u.navigator
return t&&t.serviceWorker&&t.serviceWorker.controller||null}()===t.h?js(t.g,"keyChanged",{key:e},t.u).then(function(){}).s(function(){}):$t()}function Js(t){return Ks(t).then(function(t){var e=Gs(zs(t,!1))
return e.getAll?Ys(e.getAll()):new Kt(function(t,n){var r=[],i=e.openCursor()
i.onsuccess=function(e){(e=e.target.result)?(r.push(e.value),e.continue()):t(r)},i.onerror=function(t){n(t.target.error)}})}).then(function(e){var n={},r=[]
if(0==t.b){for(r=0;r<e.length;r++)n[e[r].fbase_key]=e[r].value
r=function t(e,n){var r,i=[]
for(r in e)r in n?o(e[r])!=o(n[r])?i.push(r):"object"==o(e[r])&&null!=e[r]&&null!=n[r]?0<t(e[r],n[r]).length&&i.push(r):e[r]!==n[r]&&i.push(r):i.push(r)
for(r in n)r in e||i.push(r)
return i}(t.c,n),t.c=n}return r})}function $s(t){t.i&&t.i.cancel("STOP_EVENT"),t.f&&(clearTimeout(t.f),t.f=null)}function Zs(t){var e=this,n=null
this.a=[],this.type="indexedDB",this.c=t,this.b=$t().then(function(){if(Hs()){var t=kr(),r="__sak"+t
return Fs||(Fs=new Qs),(n=Fs).set(r,t).then(function(){return n.get(r)}).then(function(e){if(e!==t)throw Error("indexedDB not supported!")
return n.P(r)}).then(function(){return n}).s(function(){return e.c})}return e.c}).then(function(t){return e.type=t.type,t.Y(function(t){V(e.a,function(e){e(t)})}),t})}function tu(){this.a={},this.type="inMemory"}function eu(){if(!function(){var t="Node"==lr()
if(!(t=nu()||t&&i.a.INTERNAL.node&&i.a.INTERNAL.node.localStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==lr())throw new $r("internal-error","The LocalStorage compatibility library was not found.")
throw new $r("web-storage-unsupported")}this.a=nu()||i.a.INTERNAL.node.localStorage,this.type="localStorage"}function nu(){try{var t=u.localStorage,e=kr()
return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function ru(){this.type="nullStorage"}function iu(){if(!function(){var t="Node"==lr()
if(!(t=ou()||t&&i.a.INTERNAL.node&&i.a.INTERNAL.node.sessionStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==lr())throw new $r("internal-error","The SessionStorage compatibility library was not found.")
throw new $r("web-storage-unsupported")}this.a=ou()||i.a.INTERNAL.node.sessionStorage,this.type="sessionStorage"}function ou(){try{var t=u.sessionStorage,e=kr()
return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function au(){var t={}
t.Browser=cu,t.Node=hu,t.ReactNative=lu,t.Worker=fu,this.a=t[lr()]}Ls.prototype.c=function(t){var e=t.data.eventType,n=t.data.eventId,r=this.a[e]
if(r&&0<r.length){t.ports[0].postMessage({status:"ack",eventId:n,eventType:e,response:null})
var i=[]
V(r,function(e){i.push($t().then(function(){return e(t.origin,t.data.data)}))}),ee(i).then(function(r){var i=[]
V(r,function(t){i.push({fulfilled:t.Cb,value:t.value,reason:t.reason?t.reason.message:void 0})}),V(i,function(t){for(var e in t)void 0===t[e]&&delete t[e]}),t.ports[0].postMessage({status:"done",eventId:n,eventType:e,response:i})})}},Vs.prototype.postMessage=function(t,e){this.a.postMessage(t,e)},Bs.prototype.close=function(){for(;0<this.a.length;)Ws(this,this.a[0])
this.b=!0},(t=Qs.prototype).set=function(t,e){var n,r=!1,i=this
return Ks(this).then(function(e){return Ys((e=Gs(zs(n=e,!0))).get(t))}).then(function(o){var a=Gs(zs(n,!0))
return o?(o.value=e,Ys(a.put(o))):(i.b++,r=!0,(o={}).fbase_key=t,o.value=e,Ys(a.add(o)))}).then(function(){return i.c[t]=e,Xs(i,t)}).ha(function(){r&&i.b--})},t.get=function(t){return Ks(this).then(function(e){return Ys(Gs(zs(e,!1)).get(t))}).then(function(t){return t&&t.value})},t.P=function(t){var e=!1,n=this
return Ks(this).then(function(r){return e=!0,n.b++,Ys(Gs(zs(r,!0)).delete(t))}).then(function(){return delete n.c[t],Xs(n,t)}).ha(function(){e&&n.b--})},t.Y=function(t){0==this.a.length&&function(t){$s(t),function e(){t.f=setTimeout(function(){t.i=Js(t).then(function(e){0<e.length&&V(t.a,function(t){t(e)})}).then(function(){e()}).s(function(t){"STOP_EVENT"!=t.message&&e()})},800)}()}(this),this.a.push(t)},t.ca=function(t){K(this.a,function(e){return e==t}),0==this.a.length&&$s(this)},(t=Zs.prototype).get=function(t){return this.b.then(function(e){return e.get(t)})},t.set=function(t,e){return this.b.then(function(n){return n.set(t,e)})},t.P=function(t){return this.b.then(function(e){return e.P(t)})},t.Y=function(t){this.a.push(t)},t.ca=function(t){K(this.a,function(e){return e==t})},(t=tu.prototype).get=function(t){return $t(this.a[t])},t.set=function(t,e){return this.a[t]=e,$t()},t.P=function(t){return delete this.a[t],$t()},t.Y=function(){},t.ca=function(){},(t=eu.prototype).get=function(t){var e=this
return $t().then(function(){return Nr(e.a.getItem(t))})},t.set=function(t,e){var n=this
return $t().then(function(){var r=Ir(e)
null===r?n.P(t):n.a.setItem(t,r)})},t.P=function(t){var e=this
return $t().then(function(){e.a.removeItem(t)})},t.Y=function(t){u.window&&ze(u.window,"storage",t)},t.ca=function(t){u.window&&Je(u.window,"storage",t)},(t=ru.prototype).get=function(){return $t(null)},t.set=function(){return $t()},t.P=function(){return $t()},t.Y=function(){},t.ca=function(){},(t=iu.prototype).get=function(t){var e=this
return $t().then(function(){return Nr(e.a.getItem(t))})},t.set=function(t,e){var n=this
return $t().then(function(){var r=Ir(e)
null===r?n.P(t):n.a.setItem(t,r)})},t.P=function(t){var e=this
return $t().then(function(){e.a.removeItem(t)})},t.Y=function(){},t.ca=function(){}
var su,uu,cu={C:eu,Qa:iu},hu={C:eu,Qa:iu},lu={C:Ms,Qa:ru},fu={C:eu,Qa:ru},pu={Vc:"local",NONE:"none",Xc:"session"}
function du(){var t=!(Ar(vr())||!cr()),e=Sr(),n=br()
this.o=t,this.h=e,this.m=n,this.a={},su||(su=new au),t=su
try{this.g=!Zn()&&xr()||!u.indexedDB?new t.a.C:new Zs(hr()?new tu:new t.a.C)}catch(t){this.g=new tu,this.h=!0}try{this.i=new t.a.Qa}catch(t){this.i=new tu}this.l=new tu,this.f=S(this.Lb,this),this.b={}}function yu(){return uu||(uu=new du),uu}function mu(t,e){switch(e){case"session":return t.i
case"none":return t.l
default:return t.g}}function gu(t,e){return"firebase:"+t.name+(e?":"+e:"")}function vu(t,e,n){return n=gu(e,n),"local"==e.C&&(t.b[n]=null),mu(t,e.C).P(n)}function _u(t){t.c&&(clearInterval(t.c),t.c=null)}function bu(t){this.a=t,this.b=yu()}(t=du.prototype).get=function(t,e){return mu(this,t.C).get(gu(t,e))},t.set=function(t,e,n){var r=gu(t,n),i=this,o=mu(this,t.C)
return o.set(r,e).then(function(){return o.get(r)}).then(function(e){"local"==t.C&&(i.b[r]=e)})},t.addListener=function(t,e,n){t=gu(t,e),this.m&&(this.b[t]=u.localStorage.getItem(t)),Y(this.a)&&(mu(this,"local").Y(this.f),this.h||(Zn()||!xr())&&u.indexedDB||!this.m||function(t){_u(t),t.c=setInterval(function(){for(var e in t.a){var n=u.localStorage.getItem(e),r=t.b[e]
n!=r&&(t.b[e]=n,n=new Fe({type:"storage",key:e,target:window,oldValue:r,newValue:n,a:!0}),t.Lb(n))}},1e3)}(this)),this.a[t]||(this.a[t]=[]),this.a[t].push(n)},t.removeListener=function(t,e,n){t=gu(t,e),this.a[t]&&(K(this.a[t],function(t){return t==n}),0==this.a[t].length&&delete this.a[t]),Y(this.a)&&(mu(this,"local").ca(this.f),_u(this))},t.Lb=function(t){if(t&&t.f){var e=t.a.key
if(null==e)for(var n in this.a){var r=this.b[n]
void 0===r&&(r=null)
var i=u.localStorage.getItem(n)
i!==r&&(this.b[n]=i,this.Wa(n))}else if(0==e.indexOf("firebase:")&&this.a[e]){if(void 0!==t.a.a?mu(this,"local").ca(this.f):_u(this),this.o)if(n=u.localStorage.getItem(e),(r=t.a.newValue)!==n)null!==r?u.localStorage.setItem(e,r):u.localStorage.removeItem(e)
else if(this.b[e]===r&&void 0===t.a.a)return
var o=this
n=function(){void 0===t.a.a&&o.b[e]===u.localStorage.getItem(e)||(o.b[e]=u.localStorage.getItem(e),o.Wa(e))},be&&Ae&&10==Ae&&u.localStorage.getItem(e)!==t.a.newValue&&t.a.newValue!==t.a.oldValue?setTimeout(n,10):n()}}else V(t,S(this.Wa,this))},t.Wa=function(t){this.a[t]&&V(this.a[t],function(t){t()})}
var wu,Eu={name:"authEvent",C:"local"}
function Tu(){this.a=yu()}function Su(t,e){this.b=Iu,this.f=u.Uint8Array?new Uint8Array(this.b):Array(this.b),this.g=this.c=0,this.a=[],this.i=t,this.h=e,this.m=u.Int32Array?new Int32Array(64):Array(64),void 0!==wu||(wu=u.Int32Array?new Int32Array(Ou):Ou),this.reset()}N(Su,function(){this.b=-1})
for(var Iu=64,Cu=Iu-1,Nu=[],ku=0;ku<Cu;ku++)Nu[ku]=0
var Au=H(128,Nu)
function Du(t){for(var e=t.f,n=t.m,r=0,i=0;i<e.length;)n[r++]=e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3],i=4*r
for(e=16;64>e;e++){i=0|n[e-15],r=0|n[e-2]
var o=(0|n[e-16])+((i>>>7|i<<25)^(i>>>18|i<<14)^i>>>3)|0,a=(0|n[e-7])+((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)|0
n[e]=o+a|0}r=0|t.a[0],i=0|t.a[1]
var s=0|t.a[2],u=0|t.a[3],c=0|t.a[4],h=0|t.a[5],l=0|t.a[6]
for(o=0|t.a[7],e=0;64>e;e++){var f=((r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10))+(r&i^r&s^i&s)|0
a=(o=o+((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))|0)+((a=(a=c&h^~c&l)+(0|wu[e])|0)+(0|n[e])|0)|0,o=l,l=h,h=c,c=u+a|0,u=s,s=i,i=r,r=a+f|0}t.a[0]=t.a[0]+r|0,t.a[1]=t.a[1]+i|0,t.a[2]=t.a[2]+s|0,t.a[3]=t.a[3]+u|0,t.a[4]=t.a[4]+c|0,t.a[5]=t.a[5]+h|0,t.a[6]=t.a[6]+l|0,t.a[7]=t.a[7]+o|0}function Ru(t,e,n){void 0===n&&(n=e.length)
var r=0,i=t.c
if(c(e))for(;r<n;)t.f[i++]=e.charCodeAt(r++),i==t.b&&(Du(t),i=0)
else{if(!g(e))throw Error("message must be string or array")
for(;r<n;){var o=e[r++]
if(!("number"==typeof o&&0<=o&&255>=o&&o==(0|o)))throw Error("message must be a byte array")
t.f[i++]=o,i==t.b&&(Du(t),i=0)}}t.c=i,t.g+=n}Su.prototype.reset=function(){this.g=this.c=0,this.a=u.Int32Array?new Int32Array(this.h):G(this.h)}
var Ou=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
function Pu(){Su.call(this,8,xu)}N(Pu,Su)
var xu=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]
function Mu(t,e,n,r,i){this.l=t,this.i=e,this.m=n,this.o=r||null,this.u=i||null,this.h=e+":"+n,this.v=new Tu,this.g=new bu(this.h),this.f=null,this.b=[],this.a=this.c=null}function Lu(t){return new $r("invalid-cordova-configuration",t)}function Fu(t,e){for(var n=0;n<t.b.length;n++)try{t.b[n](e)}catch(t){}}function Uu(t){return t.f||(t.f=t.fa().then(function(){return new Kt(function(e){t.wa(function n(r){return e(r),t.Ja(n),!1}),function(t){function e(e){r=!0,i&&i.cancel(),qu(t).then(function(r){var i=n
if(r&&e&&e.url){var a=null;-1!=(i=Mi(e.url)).indexOf("/__/auth/callback")&&(a=(a="object"===o(a=Nr(Sn(a=In(i),"firebaseError")||null))?Zr(a):null)?new po(r.c,r.b,null,null,a):new po(r.c,r.b,i,r.f)),i=a||n}Fu(t,i)})}var n=new po("unknown",null,null,null,new $r("no-auth-event")),r=!1,i=fn(500).then(function(){return qu(t).then(function(){r||Fu(t,n)})}),a=u.handleOpenURL
u.handleOpenURL=function(t){if(0==t.toLowerCase().indexOf(_r("BuildInfo.packageName",u).toLowerCase()+"://")&&e({url:t}),"function"==typeof a)try{a(t)}catch(t){console.error(t)}},vo||(vo=new mo),function(t){var e=vo
e.a.push(t),e.b||(e.b=function(t){for(var n=0;n<e.a.length;n++)e.a[n](t)},"function"==typeof(t=_r("universalLinks.subscribe",u))&&t(null,e.b))}(e)}(t)})})),t.f}function qu(t){var e=null
return function(t){return t.b.get(Eu,t.a).then(function(t){return yo(t)})}(t.g).then(function(n){return e=n,vu((n=t.g).b,Eu,n.a)}).then(function(){return e})}function Vu(t){this.a=t,this.b=yu()}(t=Mu.prototype).fa=function(){return this.za?this.za:this.za=(ur(void 0)?sr().then(function(){return new Kt(function(t,e){var n=u.document,r=setTimeout(function(){e(Error("Cordova framework is not ready."))},1e3)
n.addEventListener("deviceready",function(){clearTimeout(r),t()},!1)})}):Zt(Error("Cordova must run in an Android or iOS file scheme."))).then(function(){if("function"!=typeof _r("universalLinks.subscribe",u))throw Lu("cordova-universal-links-plugin-fix is not installed")
if(void 0===_r("BuildInfo.packageName",u))throw Lu("cordova-plugin-buildinfo is not installed")
if("function"!=typeof _r("cordova.plugins.browsertab.openUrl",u))throw Lu("cordova-plugin-browsertab is not installed")
if("function"!=typeof _r("cordova.InAppBrowser.open",u))throw Lu("cordova-plugin-inappbrowser is not installed")},function(){throw new $r("cordova-not-ready")})},t.Bb=function(t,e){return e(new $r("operation-not-supported-in-this-environment")),$t()},t.zb=function(){return Zt(new $r("operation-not-supported-in-this-environment"))},t.Mb=function(){return!1},t.Kb=function(){return!0},t.Fb=function(){return!0},t.Ab=function(t,e,n){if(this.c)return Zt(new $r("redirect-operation-pending"))
var r=this,i=u.document,o=null,a=null,s=null,c=null
return this.c=$t().then(function(){return fo(e),Uu(r)}).then(function(){return function(t,e,n,r){var i=function(){for(var t=20,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return e.join("")}(),o=new po(e,r,null,i,new $r("no-auth-event")),a=_r("BuildInfo.packageName",u)
if("string"!=typeof a)throw new $r("invalid-cordova-configuration")
var s=_r("BuildInfo.displayName",u),c={}
if(vr().toLowerCase().match(/iphone|ipad|ipod/))c.ibi=a
else{if(!vr().toLowerCase().match(/android/))return Zt(new $r("operation-not-supported-in-this-environment"))
c.apn=a}s&&(c.appDisplayName=s),i=function(t){var e=new Pu
Ru(e,t),t=[]
var n=8*e.g
56>e.c?Ru(e,Au,56-e.c):Ru(e,Au,e.b-(e.c-56))
for(var r=63;56<=r;r--)e.f[r]=255&n,n/=256
for(Du(e),r=n=0;r<e.i;r++)for(var i=24;0<=i;i-=8)t[n++]=e.a[r]>>i&255
return function(t){return B(t,function(t){return 1<(t=t.toString(16)).length?t:"0"+t}).join("")}(t)}(i),c.sessionId=i
var h=xs(t.l,t.i,t.m,e,n,null,r,t.o,c,t.u)
return t.fa().then(function(){var e=t.h
return t.v.a.set(Eu,o.A(),e)}).then(function(){var e=_r("cordova.plugins.browsertab.isAvailable",u)
if("function"!=typeof e)throw new $r("invalid-cordova-configuration")
var n=null
e(function(e){if(e){if("function"!=typeof(n=_r("cordova.plugins.browsertab.openUrl",u)))throw new $r("invalid-cordova-configuration")
n(h)}else{if("function"!=typeof(n=_r("cordova.InAppBrowser.open",u)))throw new $r("invalid-cordova-configuration")
e=vr(),t.a=n(h,e.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||e.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?"_blank":"_system","location=yes")}})})}(r,t,e,n)}).then(function(){return new Kt(function(t,e){a=function(){var e=_r("cordova.plugins.browsertab.close",u)
return t(),"function"==typeof e&&e(),r.a&&"function"==typeof r.a.close&&(r.a.close(),r.a=null),!1},r.wa(a),s=function(){o||(o=fn(2e3).then(function(){e(new $r("redirect-cancelled-by-user"))}))},c=function(){Or()&&s()},i.addEventListener("resume",s,!1),vr().toLowerCase().match(/android/)||i.addEventListener("visibilitychange",c,!1)}).s(function(t){return qu(r).then(function(){throw t})})}).ha(function(){s&&i.removeEventListener("resume",s,!1),c&&i.removeEventListener("visibilitychange",c,!1),o&&o.cancel(),a&&r.Ja(a),r.c=null})},t.wa=function(t){this.b.push(t),Uu(this).s(function(e){"auth/invalid-cordova-configuration"===e.code&&(e=new po("unknown",null,null,null,new $r("no-auth-event")),t(e))})},t.Ja=function(t){K(this.b,function(e){return e==t})}
var Bu={name:"pendingRedirect",C:"session"}
function ju(t){return vu(t.b,Bu,t.a)}function Wu(t,e,n){this.i={},this.v=0,this.B=t,this.l=e,this.o=n,this.h=[],this.f=!1,this.m=S(this.u,this),this.b=new rc,this.w=new uc,this.g=new Vu(this.l+":"+this.o),this.c={},this.c.unknown=this.b,this.c.signInViaRedirect=this.b,this.c.linkViaRedirect=this.b,this.c.reauthViaRedirect=this.b,this.c.signInViaPopup=this.w,this.c.linkViaPopup=this.w,this.c.reauthViaPopup=this.w,this.a=Qu(this.B,this.l,this.o,vi)}function Qu(t,e,n,r){var o=i.a.SDK_VERSION||null
return ur()?new Mu(t,e,n,o,r):new Ds(t,e,n,o,r)}function Ku(t){t.f||(t.f=!0,t.a.wa(t.m))
var e=t.a
return t.a.fa().s(function(n){throw t.a==e&&t.reset(),n})}function Hu(t){t.a.Kb()&&Ku(t).s(function(e){var n=new po("unknown",null,null,null,new $r("operation-not-supported-in-this-environment"))
$u(e)&&t.u(n)}),t.a.Fb()||ic(t.b)}function Gu(t,e){W(t.h,e)||t.h.push(e),t.f||function(t){return t.b.get(Bu,t.a).then(function(t){return"pending"==t})}(t.g).then(function(e){e?ju(t.g).then(function(){Ku(t).s(function(e){var n=new po("unknown",null,null,null,new $r("operation-not-supported-in-this-environment"))
$u(e)&&t.u(n)})}):Hu(t)}).s(function(){Hu(t)})}function zu(t,e){K(t.h,function(t){return t==e})}Wu.prototype.reset=function(){this.f=!1,this.a.Ja(this.m),this.a=Qu(this.B,this.l,this.o),this.i={}},Wu.prototype.u=function(t){if(!t)throw new $r("invalid-auth-event")
if(6e5<=C()-this.v&&(this.i={},this.v=0),t&&t.getUid()&&this.i.hasOwnProperty(t.getUid()))return!1
for(var e=!1,n=0;n<this.h.length;n++){var r=this.h[n]
if(r.tb(t.c,t.b)){(e=this.c[t.c])&&(e.h(t,r),t&&(t.f||t.b)&&(this.i[t.getUid()]=!0,this.v=C())),e=!0
break}}return ic(this.b),e}
var Yu=new Rr(2e3,1e4),Xu=new Rr(3e4,6e4)
function Ju(t,e,n,r,i,o){return t.a.zb(e,n,r,function(){t.f||(t.f=!0,t.a.wa(t.m))},function(){t.reset()},i,o)}function $u(t){return!(!t||"auth/cordova-not-ready"!=t.code)}function Zu(t,e,n,r){var i
return function(t){return t.b.set(Bu,"pending",t.a)}(t.g).then(function(){return t.a.Ab(e,n,r).s(function(e){if($u(e))throw new $r("operation-not-supported-in-this-environment")
return i=e,ju(t.g).then(function(){throw i})}).then(function(){return t.a.Mb()?new Kt(function(){}):ju(t.g).then(function(){return t.la()}).then(function(){}).s(function(){})})})}function tc(t,e,n,r,i){return t.a.Bb(r,function(t){e.ga(n,null,t,i)},Yu.get())}Wu.prototype.la=function(){return this.b.la()}
var ec={}
function nc(t,e,n){var r=e+":"+n
return ec[r]||(ec[r]=new Wu(t,e,n)),ec[r]}function rc(){this.b=null,this.f=[],this.c=[],this.a=null,this.i=this.g=!1}function ic(t){t.g||(t.g=!0,sc(t,!1,null,null))}function oc(t){t.g&&!t.i&&sc(t,!1,null,null)}function ac(t,e){if(t.b=function(){return $t(e)},t.f.length)for(var n=0;n<t.f.length;n++)t.f[n](e)}function sc(t,e,n,r){e?r?function(t,e){if(t.b=function(){return Zt(e)},t.c.length)for(var n=0;n<t.c.length;n++)t.c[n](e)}(t,r):ac(t,n):ac(t,{user:null}),t.f=[],t.c=[]}function uc(){}function cc(){this.qb=!1,Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.qb},set:function(t){this.qb=t},enumerable:!1})}function hc(t,e){this.a=e,qr(this,"verificationId",t)}function lc(t,e,n,r){return new co(t).Ta(e,n).then(function(t){return new hc(t,r)})}function fc(t){var e=gi(t)
if(!(e&&e.exp&&e.auth_time&&e.iat))throw new $r("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.")
Vr(this,{token:t,expirationTime:Pr(1e3*e.exp),authTime:Pr(1e3*e.auth_time),issuedAtTime:Pr(1e3*e.iat),signInProvider:e.firebase&&e.firebase.sign_in_provider?e.firebase.sign_in_provider:null,claims:e})}function pc(t,e,n){if(this.h=t,this.i=e,this.g=n,this.c=3e4,this.f=96e4,this.b=null,this.a=this.c,this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!")}function dc(t){this.f=t,this.b=this.a=null,this.c=0}function yc(t,e){var n=e[Sa],r=e.refreshToken
e=mc(e.expiresIn),t.b=n,t.c=e,t.a=r}function mc(t){return C()+1e3*parseInt(t,10)}function gc(t,e){this.a=t||null,this.b=e||null,Vr(this,{lastSignInTime:Pr(e||null),creationTime:Pr(t||null)})}function vc(t,e,n,r,i,o){Vr(this,{uid:t,displayName:r||null,photoURL:i||null,email:n||null,phoneNumber:o||null,providerId:e})}function _c(t,e){for(var n in Le.call(this,t),e)this[n]=e[n]}function bc(t,e,n){this.G=[],this.l=t.apiKey,this.o=t.appName,this.u=t.authDomain||null,t=i.a.SDK_VERSION?gr(i.a.SDK_VERSION):null,this.a=new Ea(this.l,bi(vi),t),this.c=new dc(this.a),Nc(this,e[Sa]),yc(this.c,e),qr(this,"refreshToken",this.c.a),Dc(this,n||{}),sn.call(this),this.I=!1,this.u&&wr()&&(this.i=nc(this.u,this.l,this.o)),this.N=[],this.h=null,this.w=function(t){return new pc(function(){return t.F(!0)},function(t){return!(!t||"auth/network-request-failed"!=t.code)},function(){var e=t.c.c-C()-3e5
return 0<e?e:0})}(this),this.V=S(this.Fa,this)
var r=this
this.ja=null,this.ta=function(t){r.pa(t.g)},this.X=null,this.O=[],this.sa=function(t){Ec(r,t.c)},this.W=null}function wc(t,e){t.X&&Je(t.X,"languageCodeChanged",t.ta),(t.X=e)&&ze(e,"languageCodeChanged",t.ta)}function Ec(t,e){t.O=e,Da(t.a,i.a.SDK_VERSION?gr(i.a.SDK_VERSION,t.O):null)}function Tc(t,e){t.W&&Je(t.W,"frameworkChanged",t.sa),(t.W=e)&&ze(e,"frameworkChanged",t.sa)}function Sc(t){try{return i.a.app(t.o).auth()}catch(e){throw new $r("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+t.o+"'!")}}function Ic(t){t.B||t.w.b||(t.w.start(),Je(t,"tokenChanged",t.V),ze(t,"tokenChanged",t.V))}function Cc(t){Je(t,"tokenChanged",t.V),t.w.stop()}function Nc(t,e){t.ra=e,qr(t,"_lat",e)}function kc(t){for(var e=[],n=0;n<t.N.length;n++)e.push(t.N[n](t))
return ee(e).then(function(){return t})}function Ac(t){t.i&&!t.I&&(t.I=!0,Gu(t.i,t))}function Dc(t,e){Vr(t,{uid:e.uid,displayName:e.displayName||null,photoURL:e.photoURL||null,email:e.email||null,emailVerified:e.emailVerified||!1,phoneNumber:e.phoneNumber||null,isAnonymous:e.isAnonymous||!1,metadata:new gc(e.createdAt,e.lastLoginAt),providerData:[]})}function Rc(){}function Oc(t){return $t().then(function(){if(t.B)throw new $r("app-deleted")})}function Pc(t){return B(t.providerData,function(t){return t.providerId})}function xc(t,e){e&&(Mc(t,e.providerId),t.providerData.push(e))}function Mc(t,e){K(t.providerData,function(t){return t.providerId==e})}function Lc(t,e,n){("uid"!=e||n)&&t.hasOwnProperty(e)&&qr(t,e,n)}function Fc(t,e){t!=e&&(Vr(t,{uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,email:e.email,emailVerified:e.emailVerified,phoneNumber:e.phoneNumber,isAnonymous:e.isAnonymous,providerData:[]}),e.metadata?qr(t,"metadata",function(t){return new gc(t.a,t.b)}(e.metadata)):qr(t,"metadata",new gc),V(e.providerData,function(e){xc(t,e)}),function(t,e){t.b=e.b,t.a=e.a,t.c=e.c}(t.c,e.c),qr(t,"refreshToken",t.c.a))}function Uc(t){return t.F().then(function(e){var n=t.isAnonymous
return function(t,e){return _s(t.a,ts,{idToken:e}).then(S(t.uc,t))}(t,e).then(function(){return n||Lc(t,"isAnonymous",!1),e})})}function qc(t,e){e[Sa]&&t.ra!=e[Sa]&&(yc(t.c,e),t.dispatchEvent(new _c("tokenChanged")),Nc(t,e[Sa]),Lc(t,"refreshToken",t.c.a))}function Vc(t,e){return Uc(t).then(function(){if(W(Pc(t),e))return kc(t).then(function(){throw new $r("provider-already-linked")})})}function Bc(t,e,n){return Br({user:t,credential:lo(e),additionalUserInfo:e=Ii(e),operationType:n})}function jc(t,e){return qc(t,e),t.reload().then(function(){return t})}function Wc(t,e,n,r,o){if(!wr())return Zt(new $r("operation-not-supported-in-this-environment"))
if(t.h&&!o)return Zt(t.h)
var a=Si(n.providerId),s=kr(t.uid+":::"),u=null;(!Sr()||cr())&&t.u&&n.isOAuthProvider&&(u=xs(t.u,t.l,t.o,e,n,null,s,i.a.SDK_VERSION||null))
var c=ir(u,a&&a.Ba,a&&a.Aa)
return r=r().then(function(){if(Kc(t),!o)return t.F().then(function(){})}).then(function(){return Ju(t.i,c,e,n,s,!!u)}).then(function(){return new Kt(function(n,r){t.ga(e,null,new $r("cancelled-popup-request"),t.g||null),t.f=n,t.v=r,t.g=s,t.b=tc(t.i,t,e,c,s)})}).then(function(t){return c&&rr(c),t?Br(t):null}).s(function(t){throw c&&rr(c),t}),Hc(t,r,o)}function Qc(t,e,n,r,i){if(!wr())return Zt(new $r("operation-not-supported-in-this-environment"))
if(t.h&&!i)return Zt(t.h)
var o=null,a=kr(t.uid+":::")
return r=r().then(function(){if(Kc(t),!i)return t.F().then(function(){})}).then(function(){return t.aa=a,kc(t)}).then(function(e){return t.ba&&(e=(e=t.ba).b.set(Yc,t.A(),e.a)),e}).then(function(){return Zu(t.i,e,n,a)}).s(function(e){if(o=e,t.ba)return Xc(t.ba)
throw o}).then(function(){if(o)throw o}),Hc(t,r,i)}function Kc(t){if(!t.i||!t.I){if(t.i&&!t.I)throw new $r("internal-error")
throw new $r("auth-domain-config-required")}}function Hc(t,e,n){var r=function(t,e,n){return t.h&&!n?(e.cancel(),Zt(t.h)):e.s(function(e){throw!e||"auth/user-disabled"!=e.code&&"auth/user-token-expired"!=e.code||(t.h||t.dispatchEvent(new _c("userInvalidated")),t.h=e),e})}(t,e,n)
return t.G.push(r),r.ha(function(){Q(t.G,r)}),r}function Gc(t){if(!t.apiKey)return null
var e={apiKey:t.apiKey,authDomain:t.authDomain,appName:t.appName},n={}
if(!(t.stsTokenManager&&t.stsTokenManager.accessToken&&t.stsTokenManager.expirationTime))return null
n[Sa]=t.stsTokenManager.accessToken,n.refreshToken=t.stsTokenManager.refreshToken||null,n.expiresIn=(t.stsTokenManager.expirationTime-C())/1e3
var r=new bc(e,n,t)
return t.providerData&&V(t.providerData,function(t){t&&xc(r,Br(t))}),t.redirectEventId&&(r.aa=t.redirectEventId),r}function zc(t){this.a=t,this.b=yu()}rc.prototype.reset=function(){this.b=null,this.a&&(this.a.cancel(),this.a=null)},rc.prototype.h=function(t,e){if(t){this.reset(),this.g=!0
var n=t.c,r=t.b,i=t.a&&"auth/web-storage-unsupported"==t.a.code,o=t.a&&"auth/operation-not-supported-in-this-environment"==t.a.code
this.i=!(!i&&!o),"unknown"!=n||i||o?t.a?(sc(this,!0,null,t.a),$t()):e.xa(n,r)?function(t,e,n){n=n.xa(e.c,e.b)
var r=e.g,i=e.f,o=e.h,a=!!e.c.match(/Redirect$/)
n(r,i,o).then(function(e){sc(t,a,e,null)}).s(function(e){sc(t,a,null,e)})}(this,t,e):Zt(new $r("invalid-auth-event")):(sc(this,!1,null,null),$t())}else Zt(new $r("invalid-auth-event"))},rc.prototype.la=function(){var t=this
return new Kt(function(e,n){t.b?t.b().then(e,n):(t.f.push(e),t.c.push(n),function(t){var e=new $r("timeout")
t.a&&t.a.cancel(),t.a=fn(Xu.get()).then(function(){t.b||(t.g=!0,sc(t,!0,null,e))})}(t))})},uc.prototype.h=function(t,e){if(t){var n=t.c,r=t.b
t.a?(e.ga(t.c,null,t.a,t.b),$t()):e.xa(n,r)?function(t,e){var n=t.b,r=t.c
e.xa(r,n)(t.g,t.f,t.h).then(function(t){e.ga(r,t,null,n)}).s(function(t){e.ga(r,null,t,n)})}(t,e):Zt(new $r("invalid-auth-event"))}else Zt(new $r("invalid-auth-event"))},hc.prototype.confirm=function(t){return t=ho(this.verificationId,t),this.a(t)},pc.prototype.start=function(){this.a=this.c,function t(e,n){e.stop(),e.b=fn(function(t,e){return e?(t.a=t.c,t.g()):(e=t.a,t.a*=2,t.a>t.f&&(t.a=t.f),e)}(e,n)).then(function(){return t=u.document,e=null,Or()||!t?$t():new Kt(function(n){e=function(){Or()&&(t.removeEventListener("visibilitychange",e,!1),n())},t.addEventListener("visibilitychange",e,!1)}).s(function(n){throw t.removeEventListener("visibilitychange",e,!1),n})
var t,e}).then(function(){return e.h()}).then(function(){t(e,!0)}).s(function(n){e.i(n)&&t(e,!1)})}(this,!0)},pc.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)},dc.prototype.A=function(){return{apiKey:this.f.b,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}},dc.prototype.getToken=function(t){return t=!!t,this.b&&!this.a?Zt(new $r("user-token-expired")):t||!this.b||C()>this.c-3e4?this.a?function(t,e){return function(t,e){return new Kt(function(n,r){"refresh_token"==e.grant_type&&e.refresh_token||"authorization_code"==e.grant_type&&e.code?Ra(t,t.i+"?key="+encodeURIComponent(t.b),function(t){t?t.error?r(ws(t)):t.access_token&&t.refresh_token?n(t):r(new $r("internal-error")):r(new $r("network-request-failed"))},"POST",Fn(e).toString(),t.f,t.m.get()):r(new $r("internal-error"))})}(t.f,e).then(function(e){return t.b=e.access_token,t.c=mc(e.expires_in),t.a=e.refresh_token,{accessToken:t.b,expirationTime:t.c,refreshToken:t.a}}).s(function(e){throw"auth/user-token-expired"==e.code&&(t.a=null),e})}(this,{grant_type:"refresh_token",refresh_token:this.a}):$t(null):$t({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})},gc.prototype.A=function(){return{lastLoginAt:this.b,createdAt:this.a}},N(_c,Le),N(bc,sn),bc.prototype.pa=function(t){this.ja=t,Aa(this.a,t)},bc.prototype.ea=function(){return this.ja},bc.prototype.ya=function(){return G(this.O)},bc.prototype.Fa=function(){this.w.b&&(this.w.stop(),this.w.start())},qr(bc.prototype,"providerId","firebase"),(t=bc.prototype).reload=function(){var t=this
return Hc(this,Oc(this).then(function(){return Uc(t).then(function(){return kc(t)}).then(Rc)}))},t.Zb=function(t){return this.F(t).then(function(t){return new fc(t)})},t.F=function(t){var e=this
return Hc(this,Oc(this).then(function(){return e.c.getToken(t)}).then(function(t){if(!t)throw new $r("internal-error")
return t.accessToken!=e.ra&&(Nc(e,t.accessToken),e.dispatchEvent(new _c("tokenChanged"))),Lc(e,"refreshToken",t.refreshToken),t.accessToken}))},t.uc=function(t){if(!(t=t.users)||!t.length)throw new $r("internal-error")
Dc(this,{uid:(t=t[0]).localId,displayName:t.displayName,photoURL:t.photoUrl,email:t.email,emailVerified:!!t.emailVerified,phoneNumber:t.phoneNumber,lastLoginAt:t.lastLoginAt,createdAt:t.createdAt})
for(var e=function(t){return(t=t.providerUserInfo)&&t.length?B(t,function(t){return new vc(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)}):[]}(t),n=0;n<e.length;n++)xc(this,e[n])
Lc(this,"isAnonymous",!(this.email&&t.passwordHash||this.providerData&&this.providerData.length))},t.vc=function(t){return Fr("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),this.cb(t)},t.cb=function(t){var e=this,n=null
return Hc(this,t.f(this.a,this.uid).then(function(t){return qc(e,t),n=Bc(e,t,"reauthenticate"),e.h=null,e.reload()}).then(function(){return n}),!0)},t.mc=function(t){return Fr("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),this.ab(t)},t.ab=function(t){var e=this,n=null
return Hc(this,Vc(this,t.providerId).then(function(){return e.F()}).then(function(n){return t.b(e.a,n)}).then(function(t){return n=Bc(e,t,"link"),jc(e,t)}).then(function(){return n}))},t.nc=function(t,e){var n=this
return Hc(this,Vc(this,"phone").then(function(){return lc(Sc(n),t,e,S(n.ab,n))}))},t.wc=function(t,e){var n=this
return Hc(this,$t().then(function(){return lc(Sc(n),t,e,S(n.cb,n))}),!0)},t.nb=function(t){var e=this
return Hc(this,this.F().then(function(n){return e.a.nb(n,t)}).then(function(t){return qc(e,t),e.reload()}))},t.Nc=function(t){var e=this
return Hc(this,this.F().then(function(n){return t.b(e.a,n)}).then(function(t){return qc(e,t),e.reload()}))},t.ob=function(t){var e=this
return Hc(this,this.F().then(function(n){return e.a.ob(n,t)}).then(function(t){return qc(e,t),e.reload()}))},t.pb=function(t){if(void 0===t.displayName&&void 0===t.photoURL)return Oc(this)
var e=this
return Hc(this,this.F().then(function(n){return e.a.pb(n,{displayName:t.displayName,photoUrl:t.photoURL})}).then(function(t){return qc(e,t),Lc(e,"displayName",t.displayName||null),Lc(e,"photoURL",t.photoUrl||null),V(e.providerData,function(t){"password"===t.providerId&&(qr(t,"displayName",e.displayName),qr(t,"photoURL",e.photoURL))}),kc(e)}).then(Rc))},t.Lc=function(t){var e=this
return Hc(this,Uc(this).then(function(n){return W(Pc(e),t)?function(t,e,n){return _s(t,Ja,{idToken:e,deleteProvider:n})}(e.a,n,[t]).then(function(t){var n={}
return V(t.providerUserInfo||[],function(t){n[t.providerId]=!0}),V(Pc(e),function(t){n[t]||Mc(e,t)}),n[co.PROVIDER_ID]||qr(e,"phoneNumber",null),kc(e)}):kc(e).then(function(){throw new $r("no-such-provider")})}))},t.delete=function(){var t=this
return Hc(this,this.F().then(function(e){return _s(t.a,Xa,{idToken:e})}).then(function(){t.dispatchEvent(new _c("userDeleted"))})).then(function(){for(var e=0;e<t.G.length;e++)t.G[e].cancel("app-deleted")
wc(t,null),Tc(t,null),t.G=[],t.B=!0,Cc(t),qr(t,"refreshToken",null),t.i&&zu(t.i,t)})},t.tb=function(t,e){return!!("linkViaPopup"==t&&(this.g||null)==e&&this.f||"reauthViaPopup"==t&&(this.g||null)==e&&this.f||"linkViaRedirect"==t&&(this.aa||null)==e||"reauthViaRedirect"==t&&(this.aa||null)==e)},t.ga=function(t,e,n,r){"linkViaPopup"!=t&&"reauthViaPopup"!=t||r!=(this.g||null)||(n&&this.v?this.v(n):e&&!n&&this.f&&this.f(e),this.b&&(this.b.cancel(),this.b=null),delete this.f,delete this.v)},t.xa=function(t,e){return"linkViaPopup"==t&&e==(this.g||null)?S(this.xb,this):"reauthViaPopup"==t&&e==(this.g||null)?S(this.yb,this):"linkViaRedirect"==t&&(this.aa||null)==e?S(this.xb,this):"reauthViaRedirect"==t&&(this.aa||null)==e?S(this.yb,this):null},t.oc=function(t){var e=this
return Wc(this,"linkViaPopup",t,function(){return Vc(e,t.providerId).then(function(){return kc(e)})},!1)},t.xc=function(t){return Wc(this,"reauthViaPopup",t,function(){return $t()},!0)},t.pc=function(t){var e=this
return Qc(this,"linkViaRedirect",t,function(){return Vc(e,t.providerId)},!1)},t.yc=function(t){return Qc(this,"reauthViaRedirect",t,function(){return $t()},!0)},t.xb=function(t,e,n){var r=this
this.b&&(this.b.cancel(),this.b=null)
var i=null
return Hc(this,this.F().then(function(i){return Wa(r.a,{requestUri:t,postBody:n,sessionId:e,idToken:i})}).then(function(t){return i=Bc(r,t,"link"),jc(r,t)}).then(function(){return i}))},t.yb=function(t,e,n){var r=this
this.b&&(this.b.cancel(),this.b=null)
var i=null
return Hc(this,$t().then(function(){return Fi(Qa(r.a,{requestUri:t,sessionId:e,postBody:n}),r.uid)}).then(function(t){return i=Bc(r,t,"reauthenticate"),qc(r,t),r.h=null,r.reload()}).then(function(){return i}),!0)},t.gb=function(t){var e=this,n=null
return Hc(this,this.F().then(function(e){return n=e,void 0===t||Y(t)?{}:fi(new ni(t))}).then(function(t){return e.a.gb(n,t)}).then(function(t){if(e.email!=t)return e.reload()}).then(function(){}))},t.toJSON=function(){return this.A()},t.A=function(){var t={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.l,appName:this.o,authDomain:this.u,stsTokenManager:this.c.A(),redirectEventId:this.aa||null}
return this.metadata&&$(t,this.metadata.A()),V(this.providerData,function(e){t.providerData.push(function(t){var e,n={}
for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e])
return n}(e))}),t}
var Yc={name:"redirectUser",C:"session"}
function Xc(t){return vu(t.b,Yc,t.a)}function Jc(t){this.a=t,this.b=yu(),this.c=null,this.f=function(t){var e=th("local"),n=th("session"),r=th("none")
return function(t,e,n){var r=gu(e,n),i=mu(t,e.C)
return t.get(e,n).then(function(o){var a=null
try{a=Nr(u.localStorage.getItem(r))}catch(t){}if(a&&!o)return u.localStorage.removeItem(r),t.set(e,a,n)
a&&o&&"localStorage"!=i.type&&u.localStorage.removeItem(r)})}(t.b,e,t.a).then(function(){return t.b.get(n,t.a)}).then(function(i){return i?n:t.b.get(r,t.a).then(function(n){return n?r:t.b.get(e,t.a).then(function(n){return n?e:t.b.get(Zc,t.a).then(function(t){return t?th(t):e})})})}).then(function(e){return t.c=e,$c(t,e.C)}).s(function(){t.c||(t.c=e)})}(this),this.b.addListener(th("local"),this.a,S(this.g,this))}function $c(t,e){var n,r=[]
for(n in pu)pu[n]!==e&&r.push(vu(t.b,th(pu[n]),t.a))
return r.push(vu(t.b,Zc,t.a)),function(t){return new Kt(function(e,n){var r=t.length,i=[]
if(r)for(var o=function(t,n){r--,i[t]=n,0==r&&e(i)},a=function(t){n(t)},s=0;s<t.length;s++)te(t[s],I(o,s),a)
else e(i)})}(r)}Jc.prototype.g=function(){var t=this,e=th("local")
ih(this,function(){return $t().then(function(){return t.c&&"local"!=t.c.C?t.b.get(e,t.a):null}).then(function(n){if(n)return $c(t,"local").then(function(){t.c=e})})})}
var Zc={name:"persistence",C:"session"}
function th(t){return{name:"authUser",C:t}}function eh(t,e){return ih(t,function(){return t.b.set(t.c,e.A(),t.a)})}function nh(t){return ih(t,function(){return vu(t.b,t.c,t.a)})}function rh(t,e){return ih(t,function(){return t.b.get(t.c,t.a).then(function(t){return t&&e&&(t.authDomain=e),Gc(t||{})})})}function ih(t,e){return t.f=t.f.then(e,e),t.f}function oh(t){if(this.l=!1,qr(this,"settings",new cc),qr(this,"app",t),!ph(this).options||!ph(this).options.apiKey)throw new $r("invalid-api-key")
t=i.a.SDK_VERSION?gr(i.a.SDK_VERSION):null,this.c=new Ea(ph(this).options&&ph(this).options.apiKey,bi(vi),t),this.N=[],this.o=[],this.I=[],this.Pb=i.a.INTERNAL.createSubscribe(S(this.ic,this)),this.O=void 0,this.Qb=i.a.INTERNAL.createSubscribe(S(this.jc,this)),lh(this,null),this.h=new Jc(ph(this).options.apiKey+":"+ph(this).name),this.w=new zc(ph(this).options.apiKey+":"+ph(this).name),this.V=gh(this,function(t){var e=ph(t).options.authDomain,n=function(t){var e=function(t,e){return t.b.get(Yc,t.a).then(function(t){return t&&e&&(t.authDomain=e),Gc(t||{})})}(t.w,ph(t).options.authDomain).then(function(e){return(t.B=e)&&(e.ba=t.w),Xc(t.w)})
return gh(t,e)}(t).then(function(){return rh(t.h,e)}).then(function(e){return e?(e.ba=t.w,t.B&&(t.B.aa||null)==(e.aa||null)?e:e.reload().then(function(){return eh(t.h,e).then(function(){return e})}).s(function(n){return"auth/network-request-failed"==n.code?e:nh(t.h)})):null}).then(function(e){lh(t,e||null)})
return gh(t,n)}(this)),this.i=gh(this,function(t){return t.V.then(function(){return ch(t)}).s(function(){}).then(function(){if(!t.l)return t.ja()}).s(function(){}).then(function(){if(!t.l){t.X=!0
var e=t.h
e.b.addListener(th("local"),e.a,t.ja)}})}(this)),this.X=!1,this.ja=S(this.Ic,this),this.Fa=S(this.Z,this),this.ra=S(this.Xb,this),this.sa=S(this.gc,this),this.ta=S(this.hc,this),this.a=null,function(t){var e=ph(t).options.authDomain,n=ph(t).options.apiKey
e&&wr()&&(t.Ob=t.V.then(function(){if(!t.l){if(t.a=nc(e,n,ph(t).name),Gu(t.a,t),dh(t)&&Ac(dh(t)),t.B){Ac(t.B)
var r=t.B
r.pa(t.ea()),wc(r,t),Ec(r=t.B,t.G),Tc(r,t),t.B=null}return t.a}}))}(this),this.INTERNAL={},this.INTERNAL.delete=S(this.delete,this),this.INTERNAL.logFramework=S(this.qc,this),this.u=0,sn.call(this),function(t){Object.defineProperty(t,"lc",{get:function(){return this.ea()},set:function(t){this.pa(t)},enumerable:!1}),t.W=null}(this),this.G=[]}function ah(t){Le.call(this,"languageCodeChanged"),this.g=t}function sh(t){Le.call(this,"frameworkChanged"),this.c=t}function uh(t){return t.Ob||Zt(new $r("auth-domain-config-required"))}function ch(t){if(!wr())return Zt(new $r("operation-not-supported-in-this-environment"))
var e=uh(t).then(function(){return t.a.la()}).then(function(t){return t?Br(t):null})
return gh(t,e)}function hh(t,e){var n={}
return n.apiKey=ph(t).options.apiKey,n.authDomain=ph(t).options.authDomain,n.appName=ph(t).name,t.V.then(function(){return function(t,e,n,r){var i=new bc(t,e)
return n&&(i.ba=n),r&&Ec(i,r),i.reload().then(function(){return i})}(n,e,t.w,t.ya())}).then(function(e){return dh(t)&&e.uid==dh(t).uid?(Fc(dh(t),e),t.Z(e)):(lh(t,e),Ac(e),t.Z(e))}).then(function(){mh(t)})}function lh(t,e){dh(t)&&(function(t,e){K(t.N,function(t){return t==e})}(dh(t),t.Fa),Je(dh(t),"tokenChanged",t.ra),Je(dh(t),"userDeleted",t.sa),Je(dh(t),"userInvalidated",t.ta),Cc(dh(t))),e&&(e.N.push(t.Fa),ze(e,"tokenChanged",t.ra),ze(e,"userDeleted",t.sa),ze(e,"userInvalidated",t.ta),0<t.u&&Ic(e)),qr(t,"currentUser",e),e&&(e.pa(t.ea()),wc(e,t),Ec(e,t.G),Tc(e,t))}function fh(t,e){var n=null,r=null
return gh(t,e.then(function(e){return n=lo(e),r=Ii(e),hh(t,e)}).then(function(){return Br({user:dh(t),credential:n,additionalUserInfo:r,operationType:"signIn"})}))}function ph(t){return t.app}function dh(t){return t.currentUser}function yh(t){return dh(t)&&dh(t)._lat||null}function mh(t){if(t.X){for(var e=0;e<t.o.length;e++)t.o[e]&&t.o[e](yh(t))
if(t.O!==t.getUid()&&t.I.length)for(t.O=t.getUid(),e=0;e<t.I.length;e++)t.I[e]&&t.I[e](yh(t))}}function gh(t,e){return t.N.push(e),e.ha(function(){Q(t.N,e)}),e}function vh(){}function _h(){this.a={},this.b=1e12}Jc.prototype.jb=function(t){var e=null,n=this
return function(t){var e=new $r("invalid-persistence-type"),n=new $r("unsupported-persistence-type")
t:{for(r in pu)if(pu[r]==t){var r=!0
break t}r=!1}if(!r||"string"!=typeof t)throw e
switch(lr()){case"ReactNative":if("session"===t)throw n
break
case"Node":if("none"!==t)throw n
break
default:if(!br()&&"none"!==t)throw n}}(t),ih(this,function(){return t!=n.c.C?n.b.get(n.c,n.a).then(function(r){return e=r,$c(n,t)}).then(function(){if(n.c=th(t),e)return n.b.set(n.c,e,n.a)}):$t()})},N(oh,sn),N(ah,Le),N(sh,Le),(t=oh.prototype).jb=function(t){return gh(this,t=this.h.jb(t))},t.pa=function(t){this.W===t||this.l||(this.W=t,Aa(this.c,this.W),this.dispatchEvent(new ah(this.ea())))},t.ea=function(){return this.W},t.Oc=function(){var t=u.navigator
this.pa(t&&(t.languages&&t.languages[0]||t.language||t.userLanguage)||null)},t.qc=function(t){this.G.push(t),Da(this.c,i.a.SDK_VERSION?gr(i.a.SDK_VERSION,this.G):null),this.dispatchEvent(new sh(this.G))},t.ya=function(){return G(this.G)},t.toJSON=function(){return{apiKey:ph(this).options.apiKey,authDomain:ph(this).options.authDomain,appName:ph(this).name,currentUser:dh(this)&&dh(this).A()}},t.tb=function(t,e){switch(t){case"unknown":case"signInViaRedirect":return!0
case"signInViaPopup":return this.g==e&&!!this.f
default:return!1}},t.ga=function(t,e,n,r){"signInViaPopup"==t&&this.g==r&&(n&&this.v?this.v(n):e&&!n&&this.f&&this.f(e),this.b&&(this.b.cancel(),this.b=null),delete this.f,delete this.v)},t.xa=function(t,e){return"signInViaRedirect"==t||"signInViaPopup"==t&&this.g==e&&this.f?S(this.Wb,this):null},t.Wb=function(t,e,n){var r=this
t={requestUri:t,postBody:n,sessionId:e},this.b&&(this.b.cancel(),this.b=null)
var i=null,o=null,a=ja(r.c,t).then(function(t){return i=lo(t),o=Ii(t),t})
return gh(this,t=r.V.then(function(){return a}).then(function(t){return hh(r,t)}).then(function(){return Br({user:dh(r),credential:i,additionalUserInfo:o,operationType:"signIn"})}))},t.Gc=function(t){if(!wr())return Zt(new $r("operation-not-supported-in-this-environment"))
var e=this,n=Si(t.providerId),r=kr(),o=null;(!Sr()||cr())&&ph(this).options.authDomain&&t.isOAuthProvider&&(o=xs(ph(this).options.authDomain,ph(this).options.apiKey,ph(this).name,"signInViaPopup",t,null,r,i.a.SDK_VERSION||null))
var a=ir(o,n&&n.Ba,n&&n.Aa)
return gh(this,n=uh(this).then(function(e){return Ju(e,a,"signInViaPopup",t,r,!!o)}).then(function(){return new Kt(function(t,n){e.ga("signInViaPopup",null,new $r("cancelled-popup-request"),e.g),e.f=t,e.v=n,e.g=r,e.b=tc(e.a,e,"signInViaPopup",a,r)})}).then(function(t){return a&&rr(a),t?Br(t):null}).s(function(t){throw a&&rr(a),t}))},t.Hc=function(t){if(!wr())return Zt(new $r("operation-not-supported-in-this-environment"))
var e=this
return gh(this,uh(this).then(function(){return ih(t=e.h,function(){return t.b.set(Zc,t.c.C,t.a)})
var t}).then(function(){return Zu(e.a,"signInViaRedirect",t)}))},t.la=function(){var t=this
return ch(this).then(function(e){return t.a&&oc(t.a.b),e}).s(function(e){throw t.a&&oc(t.a.b),e})},t.Mc=function(t){if(!t)return Zt(new $r("null-user"))
var e=this,n={}
n.apiKey=ph(this).options.apiKey,n.authDomain=ph(this).options.authDomain,n.appName=ph(this).name
var r=function(t,e,n,r){e=e||{apiKey:t.l,authDomain:t.u,appName:t.o}
var i=t.c,o={}
return o[Sa]=i.b,o.refreshToken=i.a,o.expiresIn=(i.c-C())/1e3,e=new bc(e,o),n&&(e.ba=n),r&&Ec(e,r),Fc(e,t),e}(t,n,e.w,e.ya())
return gh(this,this.i.then(function(){if(ph(e).options.apiKey!=t.l)return r.reload()}).then(function(){return dh(e)&&t.uid==dh(e).uid?(Fc(dh(e),t),e.Z(t)):(lh(e,r),Ac(r),e.Z(r))}).then(function(){mh(e)}))},t.lb=function(){var t=this
return gh(this,this.i.then(function(){return t.a&&oc(t.a.b),dh(t)?(lh(t,null),nh(t.h).then(function(){mh(t)})):$t()}))},t.Ic=function(){var t=this
return rh(this.h,ph(this).options.authDomain).then(function(e){if(!t.l){var n
if(n=dh(t)&&e){n=dh(t).uid
var r=e.uid
n=null!=n&&""!==n&&null!=r&&""!==r&&n==r}if(n)return Fc(dh(t),e),dh(t).F();(dh(t)||e)&&(lh(t,e),e&&(Ac(e),e.ba=t.w),t.a&&Gu(t.a,t),mh(t))}})},t.Z=function(t){return eh(this.h,t)},t.Xb=function(){mh(this),this.Z(dh(this))},t.gc=function(){this.lb()},t.hc=function(){this.lb()},t.ic=function(t){var e=this
this.addAuthTokenListener(function(){t.next(dh(e))})},t.jc=function(t){var e=this
!function(t,e){t.I.push(e),gh(t,t.i.then(function(){!t.l&&W(t.I,e)&&t.O!==t.getUid()&&(t.O=t.getUid(),e(yh(t)))}))}(this,function(){t.next(dh(e))})},t.sc=function(t,e,n){var r=this
return this.X&&Promise.resolve().then(function(){v(t)?t(dh(r)):v(t.next)&&t.next(dh(r))}),this.Pb(t,e,n)},t.rc=function(t,e,n){var r=this
return this.X&&Promise.resolve().then(function(){r.O=r.getUid(),v(t)?t(dh(r)):v(t.next)&&t.next(dh(r))}),this.Qb(t,e,n)},t.Yb=function(t){var e=this
return gh(this,this.i.then(function(){return dh(e)?dh(e).F(t).then(function(t){return{accessToken:t}}):null}))},t.Cc=function(t){var e=this
return this.i.then(function(){return fh(e,_s(e.c,ds,{token:t}))}).then(function(t){var n=t.user
return Lc(n,"isAnonymous",!1),e.Z(n),t})},t.Dc=function(t,e){var n=this
return this.i.then(function(){return fh(n,_s(n.c,ys,{email:t,password:e}))})},t.Sb=function(t,e){var n=this
return this.i.then(function(){return fh(n,_s(n.c,za,{email:t,password:e}))})},t.Pa=function(t){var e=this
return this.i.then(function(){return fh(e,t.ka(e.c))})},t.Bc=function(t){return Fr("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),this.Pa(t)},t.kb=function(){var t=this
return this.i.then(function(){var e=dh(t)
if(e&&e.isAnonymous){var n=Br({providerId:null,isNewUser:!1})
return Br({user:e,credential:null,additionalUserInfo:n,operationType:"signIn"})}return fh(t,t.c.kb()).then(function(e){var n=e.user
return Lc(n,"isAnonymous",!0),t.Z(n),e})})},t.getUid=function(){return dh(this)&&dh(this).uid||null},t.Rb=function(t){this.addAuthTokenListener(t),this.u++,0<this.u&&dh(this)&&Ic(dh(this))},t.zc=function(t){var e=this
V(this.o,function(n){n==t&&e.u--}),0>this.u&&(this.u=0),0==this.u&&dh(this)&&Cc(dh(this)),this.removeAuthTokenListener(t)},t.addAuthTokenListener=function(t){var e=this
this.o.push(t),gh(this,this.i.then(function(){e.l||W(e.o,t)&&t(yh(e))}))},t.removeAuthTokenListener=function(t){K(this.o,function(e){return e==t})},t.delete=function(){this.l=!0
for(var t=0;t<this.N.length;t++)this.N[t].cancel("app-deleted")
return this.N=[],this.h&&(t=this.h).b.removeListener(th("local"),t.a,this.ja),this.a&&(zu(this.a,this),oc(this.a.b)),Promise.resolve()},t.Vb=function(t){return gh(this,function(t,e){return _s(t,Ya,{identifier:e,continueUri:Er()?tr():"http://localhost"}).then(function(t){return t.signinMethods||[]})}(this.c,t))},t.kc=function(t){return!!oo(t)},t.ib=function(t,e){var n=this
return gh(this,$t().then(function(){var t=new ni(e)
if(!t.c)throw new $r("argument-error",oi+" must be true when sending sign in link to email")
return fi(t)}).then(function(e){return n.c.ib(t,e)}).then(function(){}))},t.Pc=function(t){return this.Ia(t).then(function(t){return t.data.email})},t.Xa=function(t,e){return gh(this,this.c.Xa(t,e).then(function(){}))},t.Ia=function(t){return gh(this,this.c.Ia(t).then(function(t){return new Wr(t)}))},t.Va=function(t){return gh(this,this.c.Va(t).then(function(){}))},t.hb=function(t,e){var n=this
return gh(this,$t().then(function(){return void 0===e||Y(e)?{}:fi(new ni(e))}).then(function(e){return n.c.hb(t,e)}).then(function(){}))},t.Fc=function(t,e){return gh(this,lc(this,t,e,S(this.Pa,this)))},t.Ec=function(t,e){var n=this
return gh(this,$t().then(function(){var r=io(t,e||tr())
return n.Pa(r)}))},vh.prototype.render=function(){},vh.prototype.reset=function(){},vh.prototype.getResponse=function(){},vh.prototype.execute=function(){}
var bh=null
function wh(t,e){return(e=Eh(e))&&t.a[e]||null}function Eh(t){return(t=void 0===t?1e12:t)?t.toString():null}function Th(t,e){this.g=!1,this.c=e,this.a=this.b=null,this.h="invisible"!==this.c.size,this.f=Qn(t)
var n=this
this.i=function(){n.execute()},this.h?this.execute():ze(this.f,"click",this.i)}function Sh(t){if(t.g)throw Error("reCAPTCHA mock was already deleted!")}function Ih(){}_h.prototype.render=function(t,e){return this.a[this.b.toString()]=new Th(t,e),this.b++},_h.prototype.reset=function(t){var e=wh(this,t)
t=Eh(t),e&&t&&(e.delete(),delete this.a[t])},_h.prototype.getResponse=function(t){return(t=wh(this,t))?t.getResponse():null},_h.prototype.execute=function(t){(t=wh(this,t))&&t.execute()},Th.prototype.getResponse=function(){return Sh(this),this.b},Th.prototype.execute=function(){Sh(this)
var t=this
this.a||(this.a=setTimeout(function(){t.b=function(){for(var t=50,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return e.join("")}()
var e=t.c.callback,n=t.c["expired-callback"]
if(e)try{e(t.b)}catch(t){}t.a=setTimeout(function(){if(t.a=null,t.b=null,n)try{n()}catch(t){}t.h&&t.execute()},6e4)},500))},Th.prototype.delete=function(){Sh(this),this.g=!0,clearTimeout(this.a),this.a=null,Je(this.f,"click",this.i)},Ih.prototype.g=function(){return bh||(bh=new _h),$t(bh)},Ih.prototype.c=function(){}
var Ch=null
function Nh(){this.b=u.grecaptcha?1/0:0,this.f=null,this.a="__rcb"+Math.floor(1e6*Math.random()).toString()}var kh=new Z(nt,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),Ah=new Rr(3e4,6e4)
Nh.prototype.g=function(t){var e=this
return new Kt(function(n,r){var i=setTimeout(function(){r(new $r("network-request-failed"))},Ah.get())
!u.grecaptcha||t!==e.f&&!e.b?(u[e.a]=function(){if(u.grecaptcha){e.f=t
var o=u.grecaptcha.render
u.grecaptcha.render=function(t,n){return t=o(t,n),e.b++,t},clearTimeout(i),n(u.grecaptcha)}else clearTimeout(i),r(new $r("internal-error"))
delete u[e.a]},$t(ya(at(kh,{onload:e.a,hl:t||""}))).s(function(){clearTimeout(i),r(new $r("internal-error","Unable to load external reCAPTCHA dependencies!"))})):(clearTimeout(i),n(u.grecaptcha))})},Nh.prototype.c=function(){this.b--}
var Dh=null
function Rh(t,e,n,r,i,o,a){if(qr(this,"type","recaptcha"),this.c=this.f=null,this.B=!1,this.l=e,this.g=null,a?(Ch||(Ch=new Ih),a=Ch):(Dh||(Dh=new Nh),a=Dh),this.o=a,this.a=n||{theme:"light",type:"image"},this.h=[],this.a[xh])throw new $r("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.")
if(this.i="invisible"===this.a[Mh],!u.document)throw new $r("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.")
if(!Qn(e)||!this.i&&Qn(e).hasChildNodes())throw new $r("argument-error","reCAPTCHA container is either not found or already contains inner elements!")
this.u=new Ea(t,o||null,i||null),this.v=r||function(){return null}
var s=this
this.m=[]
var c=this.a[Oh]
this.a[Oh]=function(t){if(Lh(s,t),"function"==typeof c)c(t)
else if("string"==typeof c){var e=_r(c,u)
"function"==typeof e&&e(t)}}
var h=this.a[Ph]
this.a[Ph]=function(){if(Lh(s,null),"function"==typeof h)h()
else if("string"==typeof h){var t=_r(h,u)
"function"==typeof t&&t()}}}var Oh="callback",Ph="expired-callback",xh="sitekey",Mh="size"
function Lh(t,e){for(var n=0;n<t.m.length;n++)try{t.m[n](e)}catch(t){}}function Fh(t,e){return t.h.push(e),e.ha(function(){Q(t.h,e)}),e}function Uh(t){if(t.B)throw new $r("internal-error","RecaptchaVerifier instance has been destroyed.")}function qh(t,e,n){var r=!1
try{this.b=n||i.a.app()}catch(t){throw new $r("argument-error","No firebase.app.App instance is currently initialized.")}if(!this.b.options||!this.b.options.apiKey)throw new $r("invalid-api-key")
n=this.b.options.apiKey
var o=this,a=null
try{a=this.b.auth().ya()}catch(t){}try{r=this.b.auth().settings.appVerificationDisabledForTesting}catch(t){}a=i.a.SDK_VERSION?gr(i.a.SDK_VERSION,a):null,Rh.call(this,n,t,e,function(){try{var t=o.b.auth().ea()}catch(e){t=null}return t},a,bi(vi),r)}function Vh(t,e,n,r){t:{n=Array.prototype.slice.call(n)
for(var i=0,o=!1,a=0;a<e.length;a++)if(e[a].optional)o=!0
else{if(o)throw new $r("internal-error","Argument validator encountered a required argument after an optional argument.")
i++}if(o=e.length,n.length<i||o<n.length)r="Expected "+(i==o?1==i?"1 argument":i+" arguments":i+"-"+o+" arguments")+" but got "+n.length+"."
else{for(i=0;i<n.length;i++)if(o=e[i].optional&&void 0===n[i],!e[i].M(n[i])&&!o){if(e=e[i],0>i||i>=Bh.length)throw new $r("internal-error","Argument validator received an unsupported number of arguments.")
n=Bh[i],r=(r?"":n+" argument ")+(e.name?'"'+e.name+'" ':"")+"must be "+e.K+"."
break t}r=null}}if(r)throw new $r("argument-error",t+" failed: "+r)}(t=Rh.prototype).za=function(){var t=this
return this.f?this.f:this.f=Fh(this,$t().then(function(){if(Er()&&!hr())return sr()
throw new $r("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")}).then(function(){return t.o.g(t.v())}).then(function(e){return t.g=e,_s(t.u,os,{})}).then(function(e){t.a[xh]=e.recaptchaSiteKey}).s(function(e){throw t.f=null,e}))},t.render=function(){Uh(this)
var t=this
return Fh(this,this.za().then(function(){if(null===t.c){var e=t.l
if(!t.i){var n=Qn(e)
e=function(t,e,n){var r=arguments,i=document,o=String(r[0]),a=r[1]
if(!Wn&&a&&(a.name||a.type)){if(o=["<",o],a.name&&o.push(' name="',qt(a.name),'"'),a.type){o.push(' type="',qt(a.type),'"')
var s={}
$(s,a),delete s.type,a=s}o.push(">"),o=o.join("")}return o=i.createElement(o),a&&(c(a)?o.className=a:m(a)?o.className=a.join(" "):Kn(o,a)),2<r.length&&function(t,e,n){function r(n){n&&e.appendChild(c(n)?t.createTextNode(n):n)}for(var i=2;i<n.length;i++){var o=n[i]
!g(o)||_(o)&&0<o.nodeType?r(o):V(Gn(o)?G(o):o,r)}}(i,o,r),o}("DIV"),n.appendChild(e)}t.c=t.g.render(e,t.a)}return t.c}))},t.verify=function(){Uh(this)
var t=this
return Fh(this,this.render().then(function(e){return new Kt(function(n){var r=t.g.getResponse(e)
r?n(r):(t.m.push(function e(r){r&&(function(t,e){K(t.m,function(t){return t==e})}(t,e),n(r))}),t.i&&t.g.execute(t.c))})}))},t.reset=function(){Uh(this),null!==this.c&&this.g.reset(this.c)},t.clear=function(){Uh(this),this.B=!0,this.o.c()
for(var t=0;t<this.h.length;t++)this.h[t].cancel("RecaptchaVerifier instance has been destroyed.")
if(!this.i){t=Qn(this.l)
for(var e;e=t.firstChild;)t.removeChild(e)}},N(qh,Rh)
var Bh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ")
function jh(t,e){return{name:t||"",K:"a valid string",optional:!!e,M:c}}function Wh(t,e){return{name:t||"",K:"a boolean",optional:!!e,M:h}}function Qh(t,e){return{name:t||"",K:"a valid object",optional:!!e,M:_}}function Kh(t,e){return{name:t||"",K:"a function",optional:!!e,M:v}}function Hh(t,e){return{name:t||"",K:"null",optional:!!e,M:y}}function Gh(t){return{name:t?t+"Credential":"credential",K:t?"a valid "+t+" credential":"a valid credential",optional:!1,M:function(e){if(!e)return!1
var n=!t||e.providerId===t
return!(!e.ka||!n)}}}function zh(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(t){return!!(t&&c(t.type)&&v(t.verify))}}}function Yh(t,e,n,r){return{name:n||"",K:t.K+" or "+e.K,optional:!!r,M:function(n){return t.M(n)||e.M(n)}}}function Xh(t,e){for(var n in e){var r=e[n].name
t[r]=Zh(r,t[n],e[n].j)}}function Jh(t,e){for(var n in e){var r=e[n].name
r!==n&&Object.defineProperty(t,r,{get:I(function(t){return this[t]},n),set:I(function(t,e,n,r){Vh(t,[n],[r],!0),this[e]=r},r,n,e[n].rb),enumerable:!0})}}function $h(t,e,n,r){t[e]=Zh(e,n,r)}function Zh(t,e,n){function r(){var t=Array.prototype.slice.call(arguments)
return Vh(o,n,t),e.apply(this,t)}if(!n)return e
var i,o=function(t){return(t=t.split("."))[t.length-1]}(t)
for(i in e)r[i]=e[i]
for(i in e.prototype)r.prototype[i]=e.prototype[i]
return r}Xh(oh.prototype,{Va:{name:"applyActionCode",j:[jh("code")]},Ia:{name:"checkActionCode",j:[jh("code")]},Xa:{name:"confirmPasswordReset",j:[jh("code"),jh("newPassword")]},Sb:{name:"createUserWithEmailAndPassword",j:[jh("email"),jh("password")]},Vb:{name:"fetchSignInMethodsForEmail",j:[jh("email")]},la:{name:"getRedirectResult",j:[]},kc:{name:"isSignInWithEmailLink",j:[jh("emailLink")]},rc:{name:"onAuthStateChanged",j:[Yh(Qh(),Kh(),"nextOrObserver"),Kh("opt_error",!0),Kh("opt_completed",!0)]},sc:{name:"onIdTokenChanged",j:[Yh(Qh(),Kh(),"nextOrObserver"),Kh("opt_error",!0),Kh("opt_completed",!0)]},hb:{name:"sendPasswordResetEmail",j:[jh("email"),Yh(Qh("opt_actionCodeSettings",!0),Hh(null,!0),"opt_actionCodeSettings",!0)]},ib:{name:"sendSignInLinkToEmail",j:[jh("email"),Qh("actionCodeSettings")]},jb:{name:"setPersistence",j:[jh("persistence")]},Bc:{name:"signInAndRetrieveDataWithCredential",j:[Gh()]},kb:{name:"signInAnonymously",j:[]},Pa:{name:"signInWithCredential",j:[Gh()]},Cc:{name:"signInWithCustomToken",j:[jh("token")]},Dc:{name:"signInWithEmailAndPassword",j:[jh("email"),jh("password")]},Ec:{name:"signInWithEmailLink",j:[jh("email"),jh("emailLink",!0)]},Fc:{name:"signInWithPhoneNumber",j:[jh("phoneNumber"),zh()]},Gc:{name:"signInWithPopup",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Hc:{name:"signInWithRedirect",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Mc:{name:"updateCurrentUser",j:[Yh({name:"user",K:"an instance of Firebase User",optional:!1,M:function(t){return!!(t&&t instanceof bc)}},Hh(),"user")]},lb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[jh(null,!0)]},Oc:{name:"useDeviceLanguage",j:[]},Pc:{name:"verifyPasswordResetCode",j:[jh("code")]}}),Jh(oh.prototype,{lc:{name:"languageCode",rb:Yh(jh(),Hh(),"languageCode")}}),oh.Persistence=pu,oh.Persistence.LOCAL="local",oh.Persistence.SESSION="session",oh.Persistence.NONE="none",Xh(bc.prototype,{delete:{name:"delete",j:[]},Zb:{name:"getIdTokenResult",j:[Wh("opt_forceRefresh",!0)]},F:{name:"getIdToken",j:[Wh("opt_forceRefresh",!0)]},mc:{name:"linkAndRetrieveDataWithCredential",j:[Gh()]},ab:{name:"linkWithCredential",j:[Gh()]},nc:{name:"linkWithPhoneNumber",j:[jh("phoneNumber"),zh()]},oc:{name:"linkWithPopup",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},pc:{name:"linkWithRedirect",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},vc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Gh()]},cb:{name:"reauthenticateWithCredential",j:[Gh()]},wc:{name:"reauthenticateWithPhoneNumber",j:[jh("phoneNumber"),zh()]},xc:{name:"reauthenticateWithPopup",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},yc:{name:"reauthenticateWithRedirect",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},reload:{name:"reload",j:[]},gb:{name:"sendEmailVerification",j:[Yh(Qh("opt_actionCodeSettings",!0),Hh(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[jh(null,!0)]},Lc:{name:"unlink",j:[jh("provider")]},nb:{name:"updateEmail",j:[jh("email")]},ob:{name:"updatePassword",j:[jh("password")]},Nc:{name:"updatePhoneNumber",j:[Gh("phone")]},pb:{name:"updateProfile",j:[Qh("profile")]}}),Xh(_h.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Xh(vh.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Xh(Kt.prototype,{ha:{name:"finally"},s:{name:"catch"},then:{name:"then"}}),Jh(cc.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",rb:Wh("appVerificationDisabledForTesting")}}),Xh(hc.prototype,{confirm:{name:"confirm",j:[jh("verificationCode")]}}),$h(Li,"fromJSON",function(t){t=c(t)?JSON.parse(t):t
for(var e,n=[Wi,no,so,Vi],r=0;r<n.length;r++)if(e=n[r](t))return e
return null},[Yh(jh(),Qh(),"json")]),$h(ro,"credential",function(t,e){return new eo(t,e)},[jh("email"),jh("password")]),Xh(eo.prototype,{A:{name:"toJSON",j:[jh(null,!0)]}}),Xh(Gi.prototype,{ua:{name:"addScope",j:[jh("scope")]},Ca:{name:"setCustomParameters",j:[Qh("customOAuthParameters")]}}),$h(Gi,"credential",zi,[Yh(jh(),Qh(),"token")]),$h(ro,"credentialWithLink",io,[jh("email"),jh("emailLink")]),Xh(Yi.prototype,{ua:{name:"addScope",j:[jh("scope")]},Ca:{name:"setCustomParameters",j:[Qh("customOAuthParameters")]}}),$h(Yi,"credential",Xi,[Yh(jh(),Qh(),"token")]),Xh(Ji.prototype,{ua:{name:"addScope",j:[jh("scope")]},Ca:{name:"setCustomParameters",j:[Qh("customOAuthParameters")]}}),$h(Ji,"credential",$i,[Yh(jh(),Yh(Qh(),Hh()),"idToken"),Yh(jh(),Hh(),"accessToken",!0)]),Xh(Zi.prototype,{Ca:{name:"setCustomParameters",j:[Qh("customOAuthParameters")]}}),$h(Zi,"credential",to,[Yh(jh(),Qh(),"token"),jh("secret",!0)]),Xh(Hi.prototype,{ua:{name:"addScope",j:[jh("scope")]},credential:{name:"credential",j:[Yh(jh(),Yh(Qh(),Hh()),"optionsOrIdToken"),Yh(jh(),Hh(),"accessToken",!0)]},Ca:{name:"setCustomParameters",j:[Qh("customOAuthParameters")]}}),Xh(Bi.prototype,{A:{name:"toJSON",j:[jh(null,!0)]}}),Xh(Ui.prototype,{A:{name:"toJSON",j:[jh(null,!0)]}}),$h(co,"credential",ho,[jh("verificationId"),jh("verificationCode")]),Xh(co.prototype,{Ta:{name:"verifyPhoneNumber",j:[jh("phoneNumber"),zh()]}}),Xh(ao.prototype,{A:{name:"toJSON",j:[jh(null,!0)]}}),Xh($r.prototype,{toJSON:{name:"toJSON",j:[jh(null,!0)]}}),Xh(bo.prototype,{toJSON:{name:"toJSON",j:[jh(null,!0)]}}),Xh(_o.prototype,{toJSON:{name:"toJSON",j:[jh(null,!0)]}}),Xh(qh.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}}),function(){if(void 0===i.a||!i.a.INTERNAL||!i.a.INTERNAL.registerService)throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.")
var t={Auth:oh,AuthCredential:Li,Error:$r}
$h(t,"EmailAuthProvider",ro,[]),$h(t,"FacebookAuthProvider",Gi,[]),$h(t,"GithubAuthProvider",Yi,[]),$h(t,"GoogleAuthProvider",Ji,[]),$h(t,"TwitterAuthProvider",Zi,[]),$h(t,"OAuthProvider",Hi,[jh("providerId")]),$h(t,"SAMLAuthProvider",Ki,[jh("providerId")]),$h(t,"PhoneAuthProvider",co,[{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(t){return!!(t&&t instanceof oh)}}]),$h(t,"RecaptchaVerifier",qh,[Yh(jh(),{name:"",K:"an HTML element",optional:!1,M:function(t){return!!(t&&t instanceof Element)}},"recaptchaContainer"),Qh("recaptchaParameters",!0),{name:"app",K:"an instance of Firebase App",optional:!0,M:function(t){return!!(t&&t instanceof i.a.app.App)}}]),i.a.INTERNAL.registerService("auth",function(t,e){return e({INTERNAL:{getUid:S((t=new oh(t)).getUid,t),getToken:S(t.Yb,t),addAuthTokenListener:S(t.Rb,t),removeAuthTokenListener:S(t.zc,t)}}),t},t,function(t,e){if("create"===t)try{e.auth()}catch(t){}}),i.a.INTERNAL.extendNamespace({User:bc})}()}).apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[4],{186:function(t,e,n){"use strict"
n.r(e),n(193)},193:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o,a=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,s=n(65),u=n(0),c=n(64),h=n(194),l=a.SDK_VERSION,f=new s.Logger("@firebase/firestore")
function p(){return f.logLevel===s.LogLevel.DEBUG?o.DEBUG:f.logLevel===s.LogLevel.SILENT?o.SILENT:o.ERROR}function d(t){switch(t){case o.DEBUG:f.logLevel=s.LogLevel.DEBUG
break
case o.ERROR:f.logLevel=s.LogLevel.ERROR
break
case o.SILENT:f.logLevel=s.LogLevel.SILENT
break
default:f.error("Firestore ("+l+"): Invalid value passed to `setLogLevel`")}}function y(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
if(f.logLevel<=s.LogLevel.DEBUG){var i=n.map(g)
f.debug.apply(f,["Firestore ("+l+") ["+t+"]: "+e].concat(i))}}function m(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(f.logLevel<=s.LogLevel.ERROR){var r=e.map(g)
f.error.apply(f,["Firestore ("+l+"): "+t].concat(r))}}function g(t){if("string"==typeof t)return t
var e=b.getPlatform()
try{return e.formatJSON(t)}catch(e){return t}}function v(t){var e="FIRESTORE ("+l+") INTERNAL ASSERTION FAILED: "+t
throw m(e),new Error(e)}function _(t,e){t||v(e)}!function(t){t[t.DEBUG=0]="DEBUG",t[t.ERROR=1]="ERROR",t[t.SILENT=2]="SILENT"}(o||(o={}))
var b=function(){function t(){}return t.setPlatform=function(e){t.platform&&v("Platform already defined"),t.platform=e},t.getPlatform=function(){return t.platform||v("Platform not set"),t.platform},t}()
function w(){return b.getPlatform().emptyByteString}var E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},T=function(t){function e(e,n){var r=t.call(this,n)||this
return r.code=e,r.message=n,r.name="FirebaseError",r.toString=function(){return r.name+": [code="+r.code+"]: "+r.message},r}return u.__extends(e,t),e}(Error)
function S(t,e){function n(){var t="This constructor is private."
throw e&&(t+=" ",t+=e),new T(E.INVALID_ARGUMENT,t)}for(var r in n.prototype=t.prototype,t)t.hasOwnProperty(r)&&(n[r]=t[r])
return n}function I(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function C(t,e){return void 0!==t?t:e}function N(t,e){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Number(n)
isNaN(r)||e(r,t[n])}}function k(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function A(t){for(var e in _(null!=t&&"object"===r(t),"isEmpty() expects object parameter."),t)if(Object.prototype.hasOwnProperty.call(t,e))return!1
return!0}function D(t,e){if(0!==e.length)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() does not support arguments, but was called with "+H(e.length,"argument")+".")}function R(t,e,n){if(e.length!==n)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires "+H(n,"argument")+", but was called with "+H(e.length,"argument")+".")}function O(t,e,n){if(e.length<n)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires at least "+H(n,"argument")+", but was called with "+H(e.length,"argument")+".")}function P(t,e,n,r){if(e.length<n||e.length>r)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires between "+n+" and "+r+" arguments, but was called with "+H(e.length,"argument")+".")}function x(t,e,n,r){q(t,e,K(n)+" argument",r)}function M(t,e,n,r){void 0!==r&&x(t,e,n,r)}function L(t,e,n,r){q(t,e,n+" option",r)}function F(t,e,n,r){void 0!==r&&L(t,e,n,r)}function U(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){for(var o=[],a=0,s=i;a<s.length;a++){var u=s[a]
if(u===r)return
o.push(B(u))}var c=B(r)
throw new T(E.INVALID_ARGUMENT,"Invalid value "+c+" provided to function "+t+'() for option "'+n+'". Acceptable values: '+o.join(", "))}(t,0,n,r,i)}function q(t,e,n,i){if(!("object"===e?V(i):"non-empty string"===e?"string"==typeof i&&""!==i:r(i)===e)){var o=B(i)
throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires its "+n+" to be of type "+e+", but it was: "+o)}}function V(t){return"object"===r(t)&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function B(t){if(void 0===t)return"undefined"
if(null===t)return"null"
if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t)
if("number"==typeof t||"boolean"==typeof t)return""+t
if("object"===r(t)){if(t instanceof Array)return"an array"
var e=function(t){if(t.constructor){var e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString())
if(e&&e.length>1)return e[1]}return null}(t)
return e?"a custom "+e+" object":"an object"}return"function"==typeof t?"a function":v("Unknown wrong type: "+r(t))}function j(t,e,n){if(void 0===n)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires a valid "+K(e)+" argument, but it was undefined.")}function W(t,e,n){k(e,function(e,r){if(n.indexOf(e)<0)throw new T(E.INVALID_ARGUMENT,"Unknown option '"+e+"' passed to function "+t+"(). Available options: "+n.join(", "))})}function Q(t,e,n,r){var i=B(r)
return new T(E.INVALID_ARGUMENT,"Function "+t+"() requires its "+K(n)+" argument to be a "+e+", but it was: "+i)}function K(t){switch(t){case 1:return"first"
case 2:return"second"
case 3:return"third"
default:return t+"th"}}function H(t,e){return t+" "+e+(1===t?"":"s")}var G=function(){function t(){}return t.newId=function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="",n=0;n<20;n++)e+=t.charAt(Math.floor(Math.random()*t.length))
return _(20===e.length,"Invalid auto ID: "+e),e},t}()
function z(t,e){return t<e?-1:t>e?1:0}function Y(t,e){if(t.length!==e.length)return!1
for(var n=0;n<t.length;n++)if(!t[n].isEqual(e[n]))return!1
return!0}function X(t){return t+"\0"}function J(){if("undefined"==typeof Uint8Array)throw new T(E.UNIMPLEMENTED,"Uint8Arrays are not available in this environment.")}function $(){if(!b.getPlatform().base64Available)throw new T(E.UNIMPLEMENTED,"Blobs are unavailable in Firestore in this environment.")}var Z,tt=function(){function t(t){$(),this._binaryString=t}return t.fromBase64String=function(e){R("Blob.fromBase64String",arguments,1),x("Blob.fromBase64String","string",1,e),$()
try{return new t(b.getPlatform().atob(e))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct Blob from Base64 string: "+t)}},t.fromUint8Array=function(e){if(R("Blob.fromUint8Array",arguments,1),J(),!(e instanceof Uint8Array))throw Q("Blob.fromUint8Array","Uint8Array",1,e)
return new t(Array.prototype.map.call(e,function(t){return String.fromCharCode(t)}).join(""))},t.prototype.toBase64=function(){return R("Blob.toBase64",arguments,0),$(),b.getPlatform().btoa(this._binaryString)},t.prototype.toUint8Array=function(){R("Blob.toUint8Array",arguments,0),J()
for(var t=new Uint8Array(this._binaryString.length),e=0;e<this._binaryString.length;e++)t[e]=this._binaryString.charCodeAt(e)
return t},t.prototype.toString=function(){return"Blob(base64: "+this.toBase64()+")"},t.prototype.isEqual=function(t){return this._binaryString===t._binaryString},t.prototype._compareTo=function(t){return z(this._binaryString,t._binaryString)},t}(),et=S(tt,"Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),nt=function(t,e,n,r,i){this.databaseId=t,this.persistenceKey=e,this.host=n,this.ssl=r,this.forceLongPolling=i},rt="(default)",it=function(){function t(t,e){this.projectId=t,this.database=e||rt}return Object.defineProperty(t.prototype,"isDefaultDatabase",{get:function(){return this.database===rt},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database},t.prototype.compareTo=function(t){return z(this.projectId,t.projectId)||z(this.database,t.database)},t}(),ot=function(){function t(t,e){var n=this
this.previousValue=t,e&&(e.sequenceNumberHandler=function(t){return n.setPreviousValue(t)},this.writeNewSequenceNumber=function(t){return e.writeSequenceNumber(t)})}return t.prototype.setPreviousValue=function(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue},t.prototype.next=function(){var t=++this.previousValue
return this.writeNewSequenceNumber&&this.writeNewSequenceNumber(t),t},t.INVALID=-1,t}(),at=function(){function t(t,e,n){void 0===e?e=0:e>t.length&&v("offset "+e+" out of range "+t.length),void 0===n?n=t.length-e:n>t.length-e&&v("length "+n+" out of range "+(t.length-e)),this.segments=t,this.offset=e,this.len=n}return Object.defineProperty(t.prototype,"length",{get:function(){return this.len},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(e){return 0===t.comparator(this,e)},t.prototype.child=function(e){var n=this.segments.slice(this.offset,this.limit())
return e instanceof t?e.forEach(function(t){n.push(t)}):n.push(e),this.construct(n)},t.prototype.limit=function(){return this.offset+this.length},t.prototype.popFirst=function(t){return t=void 0===t?1:t,_(this.length>=t,"Can't call popFirst() with less segments"),this.construct(this.segments,this.offset+t,this.length-t)},t.prototype.popLast=function(){return _(!this.isEmpty(),"Can't call popLast() on empty path"),this.construct(this.segments,this.offset,this.length-1)},t.prototype.firstSegment=function(){return _(!this.isEmpty(),"Can't call firstSegment() on empty path"),this.segments[this.offset]},t.prototype.lastSegment=function(){return this.get(this.length-1)},t.prototype.get=function(t){return _(t<this.length,"Index out of range"),this.segments[this.offset+t]},t.prototype.isEmpty=function(){return 0===this.length},t.prototype.isPrefixOf=function(t){if(t.length<this.length)return!1
for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0},t.prototype.isImmediateParentOf=function(t){if(this.length+1!==t.length)return!1
for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0},t.prototype.forEach=function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])},t.prototype.toArray=function(){return this.segments.slice(this.offset,this.limit())},t.comparator=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++){var i=t.get(r),o=e.get(r)
if(i<o)return-1
if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0},t}(),st=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u.__extends(e,t),e.prototype.construct=function(t,n,r){return new e(t,n,r)},e.prototype.canonicalString=function(){return this.toArray().join("/")},e.prototype.toString=function(){return this.canonicalString()},e.fromString=function(t){if(t.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,"Invalid path ("+t+"). Paths must not contain // in them.")
return new e(t.split("/").filter(function(t){return t.length>0}))},e.EMPTY_PATH=new e([]),e}(at),ut=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ct=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u.__extends(e,t),e.prototype.construct=function(t,n,r){return new e(t,n,r)},e.isValidIdentifier=function(t){return ut.test(t)},e.prototype.canonicalString=function(){return this.toArray().map(function(t){return t=t.replace("\\","\\\\").replace("`","\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t}).join(".")},e.prototype.toString=function(){return this.canonicalString()},e.prototype.isKeyField=function(){return 1===this.length&&"__name__"===this.get(0)},e.keyField=function(){return new e(["__name__"])},e.fromServerFormat=function(t){for(var n=[],r="",i=0,o=function(){if(0===r.length)throw new T(E.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")
n.push(r),r=""},a=!1;i<t.length;){var s=t[i]
if("\\"===s){if(i+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t)
var u=t[i+1]
if("\\"!==u&&"."!==u&&"`"!==u)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t)
r+=u,i+=2}else"`"===s?(a=!a,i++):"."!==s||a?(r+=s,i++):(o(),i++)}if(o(),a)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t)
return new e(n)},e.EMPTY_PATH=new e([]),e}(at),ht=function(){function t(e){this.path=e,_(t.isDocumentKey(e),"Invalid DocumentKey with an odd number of segments: "+e.toArray().join("/"))}return t.prototype.hasCollectionId=function(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t},t.prototype.isEqual=function(t){return null!==t&&0===st.comparator(this.path,t.path)},t.prototype.toString=function(){return this.path.toString()},t.comparator=function(t,e){return st.comparator(t.path,e.path)},t.isDocumentKey=function(t){return t.length%2==0},t.fromSegments=function(e){return new t(new st(e.slice()))},t.fromPathString=function(e){return new t(st.fromString(e))},t.EMPTY=new t(new st([])),t}(),lt=function(){var t=this
this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})}
!function(t){t.All="all",t.ListenStreamIdle="listen_stream_idle",t.ListenStreamConnectionBackoff="listen_stream_connection_backoff",t.WriteStreamIdle="write_stream_idle",t.WriteStreamConnectionBackoff="write_stream_connection_backoff",t.OnlineStateTimeout="online_state_timeout",t.ClientMetadataRefresh="client_metadata_refresh",t.LruGarbageCollection="lru_garbage_collection",t.RetryTransaction="retry_transaction"}(Z||(Z={}))
var ft=function(){function t(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.catch=this.deferred.promise.catch.bind(this.deferred.promise),this.deferred.promise.catch(function(t){})}return t.createAndSchedule=function(e,n,r,i,o){var a=new t(e,n,Date.now()+r,i,o)
return a.start(r),a},t.prototype.start=function(t){var e=this
this.timerHandle=setTimeout(function(){return e.handleDelayElapsed()},t)},t.prototype.skipDelay=function(){return this.handleDelayElapsed()},t.prototype.cancel=function(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))},t.prototype.handleDelayElapsed=function(){var t=this
this.asyncQueue.enqueueAndForget(function(){return null!==t.timerHandle?(t.clearTimeout(),t.op().then(function(e){return t.deferred.resolve(e)})):Promise.resolve()})},t.prototype.clearTimeout=function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)},t}(),pt=function(){function t(){this.tail=Promise.resolve(),this._isShuttingDown=!1,this.delayedOperations=[],this.failure=null,this.operationInProgress=!1,this.timerIdsToSkip=[]}return Object.defineProperty(t.prototype,"isShuttingDown",{get:function(){return this._isShuttingDown},enumerable:!0,configurable:!0}),t.prototype.enqueueAndForget=function(t){this.enqueue(t)},t.prototype.enqueueAndForgetEvenAfterShutdown=function(t){this.verifyNotFailed(),this.enqueueInternal(t)},t.prototype.enqueueEvenAfterShutdown=function(t){return this.verifyNotFailed(),this.enqueueInternal(t)},t.prototype.enqueueAndInitiateShutdown=function(t){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(e){switch(e.label){case 0:return this.verifyNotFailed(),this._isShuttingDown?[3,2]:(this._isShuttingDown=!0,[4,this.enqueueEvenAfterShutdown(t)])
case 1:e.sent(),e.label=2
case 2:return[2]}})})},t.prototype.enqueue=function(t){return this.verifyNotFailed(),this._isShuttingDown?new Promise(function(t){}):this.enqueueInternal(t)},t.prototype.enqueueInternal=function(t){var e=this,n=this.tail.then(function(){return e.operationInProgress=!0,t().catch(function(t){e.failure=t,e.operationInProgress=!1
var n=t.stack||t.message||""
throw m("INTERNAL UNHANDLED ERROR: ",n),n.indexOf("Firestore Test Simulated Error")<0&&setTimeout(function(){throw t},0),t}).then(function(t){return e.operationInProgress=!1,t})})
return this.tail=n,n},t.prototype.enqueueAfterDelay=function(t,e,n){var r=this
this.verifyNotFailed(),_(e>=0,"Attempted to schedule an operation with a negative delay of "+e),this.timerIdsToSkip.indexOf(t)>-1&&(e=0)
var i=ft.createAndSchedule(this,t,e,n,function(t){return r.removeDelayedOperation(t)})
return this.delayedOperations.push(i),i},t.prototype.verifyNotFailed=function(){this.failure&&v("AsyncQueue is already failed: "+(this.failure.stack||this.failure.message))},t.prototype.verifyOperationInProgress=function(){_(this.operationInProgress,"verifyOpInProgress() called when no op in progress on this queue.")},t.prototype.drain=function(){return this.enqueueEvenAfterShutdown(function(){return Promise.resolve()})},t.prototype.containsDelayedOperation=function(t){for(var e=0,n=this.delayedOperations;e<n.length;e++)if(n[e].timerId===t)return!0
return!1},t.prototype.runDelayedOperationsEarly=function(t){var e=this
return this.drain().then(function(){_(t===Z.All||e.containsDelayedOperation(t),"Attempted to drain to missing operation "+t),e.delayedOperations.sort(function(t,e){return t.targetTimeMs-e.targetTimeMs})
for(var n=0,r=e.delayedOperations;n<r.length;n++){var i=r[n]
if(i.skipDelay(),t!==Z.All&&i.timerId===t)break}return e.drain()})},t.prototype.skipDelaysForTimerId=function(t){this.timerIdsToSkip.push(t)},t.prototype.removeDelayedOperation=function(t){var e=this.delayedOperations.indexOf(t)
_(e>=0,"Delayed operation not found."),this.delayedOperations.splice(e,1)},t}(),dt="",yt="",mt="",gt=""
function vt(t){for(var e="",n=0;n<t.length;n++)e.length>0&&(e=bt(e)),e=_t(t.get(n),e)
return bt(e)}function _t(t,e){for(var n=e,r=t.length,i=0;i<r;i++){var o=t.charAt(i)
switch(o){case"\0":n+=dt+mt
break
case dt:n+=dt+gt
break
default:n+=o}}return n}function bt(t){return t+dt+yt}function wt(t){var e=t.length
if(_(e>=2,"Invalid path "+t),2===e)return _(t.charAt(0)===dt&&t.charAt(1)===yt,"Non-empty path "+t+" had length 2"),st.EMPTY_PATH
for(var n=e-2,r=[],i="",o=0;o<e;){var a=t.indexOf(dt,o)
switch((a<0||a>n)&&v('Invalid encoded resource path: "'+t+'"'),t.charAt(a+1)){case yt:var s=t.substring(o,a),u=void 0
0===i.length?u=s:(u=i+=s,i=""),r.push(u)
break
case mt:i+=t.substring(o,a),i+="\0"
break
case gt:i+=t.substring(o,a+1)
break
default:v('Invalid encoded resource path: "'+t+'"')}o=a+2}return new st(r)}var Et=function(){function t(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e)
if(e>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e)
if(t<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)
if(t>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}return t.now=function(){return t.fromMillis(Date.now())},t.fromDate=function(e){return t.fromMillis(e.getTime())},t.fromMillis=function(e){var n=Math.floor(e/1e3)
return new t(n,1e6*(e-1e3*n))},t.prototype.toDate=function(){return new Date(this.toMillis())},t.prototype.toMillis=function(){return 1e3*this.seconds+this.nanoseconds/1e6},t.prototype._compareTo=function(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)},t.prototype.isEqual=function(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds},t.prototype.toString=function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"},t}(),Tt=function(){function t(t){this.timestamp=t}return t.fromMicroseconds=function(e){var n=Math.floor(e/1e6)
return new t(new Et(n,e%1e6*1e3))},t.fromTimestamp=function(e){return new t(e)},t.forDeletedDoc=function(){return t.MIN},t.prototype.compareTo=function(t){return this.timestamp._compareTo(t.timestamp)},t.prototype.isEqual=function(t){return this.timestamp.isEqual(t.timestamp)},t.prototype.toMicroseconds=function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3},t.prototype.toString=function(){return"SnapshotVersion("+this.timestamp.toString()+")"},t.prototype.toTimestamp=function(){return this.timestamp},t.MIN=new t(new Et(0,0)),t}(),St=function(){function t(t,e){this.comparator=t,this.root=e||Ct.EMPTY}return t.prototype.insert=function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ct.BLACK,null,null))},t.prototype.remove=function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))},t.prototype.get=function(t){for(var e=this.root;!e.isEmpty();){var n=this.comparator(t,e.key)
if(0===n)return e.value
n<0?e=e.left:n>0&&(e=e.right)}return null},t.prototype.indexOf=function(t){for(var e=0,n=this.root;!n.isEmpty();){var r=this.comparator(t,n.key)
if(0===r)return e+n.left.size
r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1},t.prototype.isEmpty=function(){return this.root.isEmpty()},Object.defineProperty(t.prototype,"size",{get:function(){return this.root.size},enumerable:!0,configurable:!0}),t.prototype.minKey=function(){return this.root.minKey()},t.prototype.maxKey=function(){return this.root.maxKey()},t.prototype.inorderTraversal=function(t){return this.root.inorderTraversal(t)},t.prototype.forEach=function(t){this.inorderTraversal(function(e,n){return t(e,n),!1})},t.prototype.toString=function(){var t=[]
return this.inorderTraversal(function(e,n){return t.push(e+":"+n),!1}),"{"+t.join(", ")+"}"},t.prototype.reverseTraversal=function(t){return this.root.reverseTraversal(t)},t.prototype.getIterator=function(){return new It(this.root,null,this.comparator,!1)},t.prototype.getIteratorFrom=function(t){return new It(this.root,t,this.comparator,!1)},t.prototype.getReverseIterator=function(){return new It(this.root,null,this.comparator,!0)},t.prototype.getReverseIteratorFrom=function(t){return new It(this.root,t,this.comparator,!0)},t}(),It=function(){function t(t,e,n,r){this.isReverse=r,this.nodeStack=[]
for(var i=1;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right
else{if(0===i){this.nodeStack.push(t)
break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}return t.prototype.getNext=function(){_(this.nodeStack.length>0,"getNext() called on iterator when hasNext() is false.")
var t=this.nodeStack.pop(),e={key:t.key,value:t.value}
if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right
else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left
return e},t.prototype.hasNext=function(){return this.nodeStack.length>0},t.prototype.peek=function(){if(0===this.nodeStack.length)return null
var t=this.nodeStack[this.nodeStack.length-1]
return{key:t.key,value:t.value}},t}(),Ct=function(){function t(e,n,r,i,o){this.key=e,this.value=n,this.color=null!=r?r:t.RED,this.left=null!=i?i:t.EMPTY,this.right=null!=o?o:t.EMPTY,this.size=this.left.size+1+this.right.size}return t.prototype.copy=function(e,n,r,i,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)},t.prototype.isEmpty=function(){return!1},t.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)},t.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},t.prototype.min=function(){return this.left.isEmpty()?this:this.left.min()},t.prototype.minKey=function(){return this.min().key},t.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},t.prototype.insert=function(t,e,n){var r=this,i=n(t,r.key)
return(r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()},t.prototype.removeMin=function(){if(this.left.isEmpty())return t.EMPTY
var e=this
return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()},t.prototype.remove=function(e,n){var r,i=this
if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null)
else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY
r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()},t.prototype.isRed=function(){return this.color},t.prototype.fixUp=function(){var t=this
return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t},t.prototype.moveRedLeft=function(){var t=this.colorFlip()
return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t},t.prototype.moveRedRight=function(){var t=this.colorFlip()
return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t},t.prototype.rotateLeft=function(){var e=this.copy(null,null,t.RED,null,this.right.left)
return this.right.copy(null,null,this.color,e,null)},t.prototype.rotateRight=function(){var e=this.copy(null,null,t.RED,this.left.right,null)
return this.left.copy(null,null,this.color,null,e)},t.prototype.colorFlip=function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null)
return this.copy(null,null,!this.color,t,e)},t.prototype.checkMaxDepth=function(){var t=this.check()
return Math.pow(2,t)<=this.size+1},t.prototype.check=function(){if(this.isRed()&&this.left.isRed())throw v("Red node has red child("+this.key+","+this.value+")")
if(this.right.isRed())throw v("Right child of ("+this.key+","+this.value+") is red")
var t=this.left.check()
if(t!==this.right.check())throw v("Black depths differ")
return t+(this.isRed()?0:1)},t.EMPTY=null,t.RED=!0,t.BLACK=!1,t}(),Nt=function(){function t(){this.size=0}return Object.defineProperty(t.prototype,"key",{get:function(){throw v("LLRBEmptyNode has no key.")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){throw v("LLRBEmptyNode has no value.")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){throw v("LLRBEmptyNode has no color.")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"left",{get:function(){throw v("LLRBEmptyNode has no left child.")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"right",{get:function(){throw v("LLRBEmptyNode has no right child.")},enumerable:!0,configurable:!0}),t.prototype.copy=function(t,e,n,r,i){return this},t.prototype.insert=function(t,e,n){return new Ct(t,e)},t.prototype.remove=function(t,e){return this},t.prototype.isEmpty=function(){return!0},t.prototype.inorderTraversal=function(t){return!1},t.prototype.reverseTraversal=function(t){return!1},t.prototype.minKey=function(){return null},t.prototype.maxKey=function(){return null},t.prototype.isRed=function(){return!1},t.prototype.checkMaxDepth=function(){return!0},t.prototype.check=function(){return 0},t}()
Ct.EMPTY=new Nt
var kt=function(){function t(t){this.comparator=t,this.data=new St(this.comparator)}return t.fromMapKeys=function(e){var n=new t(e.comparator)
return e.forEach(function(t){n=n.add(t)}),n},t.prototype.has=function(t){return null!==this.data.get(t)},t.prototype.first=function(){return this.data.minKey()},t.prototype.last=function(){return this.data.maxKey()},Object.defineProperty(t.prototype,"size",{get:function(){return this.data.size},enumerable:!0,configurable:!0}),t.prototype.indexOf=function(t){return this.data.indexOf(t)},t.prototype.forEach=function(t){this.data.inorderTraversal(function(e,n){return t(e),!1})},t.prototype.forEachInRange=function(t,e){for(var n=this.data.getIteratorFrom(t[0]);n.hasNext();){var r=n.getNext()
if(this.comparator(r.key,t[1])>=0)return
e(r.key)}},t.prototype.forEachWhile=function(t,e){var n
for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return},t.prototype.firstAfterOrEqual=function(t){var e=this.data.getIteratorFrom(t)
return e.hasNext()?e.getNext().key:null},t.prototype.getIterator=function(){return new At(this.data.getIterator())},t.prototype.getIteratorFrom=function(t){return new At(this.data.getIteratorFrom(t))},t.prototype.add=function(t){return this.copy(this.data.remove(t).insert(t,!0))},t.prototype.delete=function(t){return this.has(t)?this.copy(this.data.remove(t)):this},t.prototype.isEmpty=function(){return this.data.isEmpty()},t.prototype.unionWith=function(t){var e=this
return t.forEach(function(t){e=e.add(t)}),e},t.prototype.isEqual=function(e){if(!(e instanceof t))return!1
if(this.size!==e.size)return!1
for(var n=this.data.getIterator(),r=e.data.getIterator();n.hasNext();){var i=n.getNext().key,o=r.getNext().key
if(0!==this.comparator(i,o))return!1}return!0},t.prototype.toArray=function(){var t=[]
return this.forEach(function(e){t.push(e)}),t},t.prototype.toString=function(){var t=[]
return this.forEach(function(e){return t.push(e)}),"SortedSet("+t.toString()+")"},t.prototype.copy=function(e){var n=new t(this.comparator)
return n.data=e,n},t}(),At=function(){function t(t){this.iter=t}return t.prototype.getNext=function(){return this.iter.getNext().key},t.prototype.hasNext=function(){return this.iter.hasNext()},t}(),Dt=new St(ht.comparator)
function Rt(){return Dt}function Ot(){return Rt()}var Pt=new St(ht.comparator)
function xt(){return Pt}var Mt=new St(ht.comparator)
function Lt(){return Mt}var Ft=new kt(ht.comparator)
function Ut(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var n=Ft,r=0,i=t;r<i.length;r++){var o=i[r]
n=n.add(o)}return n}var qt=new kt(z)
function Vt(){return qt}var Bt=function(){function t(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r,_(r.length>0,"Cannot create an empty mutation batch")}return t.prototype.applyToRemoteDocument=function(t,e,n){e&&_(e.key.isEqual(t),"applyToRemoteDocument: key "+t+" should match maybeDoc key\n        "+e.key)
var r=n.mutationResults
_(r.length===this.mutations.length,"Mismatch between mutations length\n      ("+this.mutations.length+") and mutation results length\n      ("+r.length+").")
for(var i=0;i<this.mutations.length;i++){var o=this.mutations[i]
if(o.key.isEqual(t)){var a=r[i]
e=o.applyToRemoteDocument(e,a)}}return e},t.prototype.applyToLocalView=function(t,e){e&&_(e.key.isEqual(t),"applyToLocalDocument: key "+t+" should match maybeDoc key\n        "+e.key)
for(var n=0,r=this.baseMutations;n<r.length;n++)(s=r[n]).key.isEqual(t)&&(e=s.applyToLocalView(e,e,this.localWriteTime))
for(var i=e,o=0,a=this.mutations;o<a.length;o++){var s;(s=a[o]).key.isEqual(t)&&(e=s.applyToLocalView(e,i,this.localWriteTime))}return e},t.prototype.applyToLocalDocumentSet=function(t){var e=this,n=t
return this.mutations.forEach(function(r){var i=e.applyToLocalView(r.key,t.get(r.key))
i&&(n=n.insert(r.key,i))}),n},t.prototype.keys=function(){return this.mutations.reduce(function(t,e){return t.add(e.key)},Ut())},t.prototype.isEqual=function(t){return this.batchId===t.batchId&&Y(this.mutations,t.mutations)&&Y(this.baseMutations,t.baseMutations)},t}(),jt=function(){function t(t,e,n,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.streamToken=r,this.docVersions=i}return t.from=function(e,n,r,i){_(e.mutations.length===r.length,"Mutations sent "+e.mutations.length+" must equal results received "+r.length)
for(var o=Lt(),a=e.mutations,s=0;s<a.length;s++)o=o.insert(a[s].key,r[s].version)
return new t(e,n,r,i,o)},t}(),Wt=function(){function t(t){var e=this
this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(function(t){e.isDone=!0,e.result=t,e.nextCallback&&e.nextCallback(t)},function(t){e.isDone=!0,e.error=t,e.catchCallback&&e.catchCallback(t)})}return t.prototype.catch=function(t){return this.next(void 0,t)},t.prototype.next=function(e,n){var r=this
return this.callbackAttached&&v("Called next() or catch() twice for PersistencePromise"),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t(function(t,i){r.nextCallback=function(n){r.wrapSuccess(e,n).next(t,i)},r.catchCallback=function(e){r.wrapFailure(n,e).next(t,i)}})},t.prototype.toPromise=function(){var t=this
return new Promise(function(e,n){t.next(e,n)})},t.prototype.wrapUserFunction=function(e){try{var n=e()
return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}},t.prototype.wrapSuccess=function(e,n){return e?this.wrapUserFunction(function(){return e(n)}):t.resolve(n)},t.prototype.wrapFailure=function(e,n){return e?this.wrapUserFunction(function(){return e(n)}):t.reject(n)},t.resolve=function(e){return new t(function(t,n){t(e)})},t.reject=function(e){return new t(function(t,n){n(e)})},t.waitFor=function(e){return new t(function(t,n){var r=0,i=0,o=!1
e.forEach(function(e){++r,e.next(function(){++i,o&&i===r&&t()},function(t){return n(t)})}),o=!0,i===r&&t()})},t.or=function(e){for(var n=t.resolve(!1),r=function(e){n=n.next(function(n){return n?t.resolve(n):e()})},i=0,o=e;i<o.length;i++)r(o[i])
return n},t.forEach=function(t,e){var n=this,r=[]
return t.forEach(function(t,i){r.push(e.call(n,t,i))}),this.waitFor(r)},t}(),Qt=function(){function t(t,e,n,r){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=r,this.documentKeysByBatchId={}}return t.forUser=function(e,n,r,i){return _(""!==e.uid,"UserID must not be an empty string."),new t(e.isAuthenticated()?e.uid:"",n,r,i)},t.prototype.checkEmpty=function(t){var e=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY])
return zt(t).iterate({index:Pe.userMutationsIndex,range:n},function(t,n,r){e=!1,r.done()}).next(function(){return e})},t.prototype.acknowledgeBatch=function(t,e,n){return this.getMutationQueueMetadata(t).next(function(e){return e.lastStreamToken=Gt(n),Xt(t).put(e)})},t.prototype.getLastStreamToken=function(t){return this.getMutationQueueMetadata(t).next(function(t){return t.lastStreamToken})},t.prototype.setLastStreamToken=function(t,e){return this.getMutationQueueMetadata(t).next(function(n){return n.lastStreamToken=Gt(e),Xt(t).put(n)})},t.prototype.addMutationBatch=function(t,e,n,r){var i=this,o=Yt(t),a=zt(t)
return a.add({}).next(function(s){_("number"==typeof s,"Auto-generated key is not a number")
var u=new Bt(s,e,n,r),c=i.serializer.toDbMutationBatch(i.userId,u)
i.documentKeysByBatchId[s]=u.keys()
for(var h=[],l=0,f=r;l<f.length;l++){var p=f[l],d=xe.key(i.userId,p.key.path,s)
h.push(a.put(c)),h.push(o.put(d,xe.PLACEHOLDER)),h.push(i.indexManager.addToCollectionParentIndex(t,p.key.path.popLast()))}return Wt.waitFor(h).next(function(){return u})})},t.prototype.lookupMutationBatch=function(t,e){var n=this
return zt(t).get(e).next(function(t){return t?(_(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+e),n.serializer.fromDbMutationBatch(t)):null})},t.prototype.lookupMutationKeys=function(t,e){var n=this
return this.documentKeysByBatchId[e]?Wt.resolve(this.documentKeysByBatchId[e]):this.lookupMutationBatch(t,e).next(function(t){if(t){var r=t.keys()
return n.documentKeysByBatchId[e]=r,r}return null})},t.prototype.getNextMutationBatchAfterBatchId=function(t,e){var n=this,r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]),o=null
return zt(t).iterate({index:Pe.userMutationsIndex,range:i},function(t,e,i){e.userId===n.userId&&(_(e.batchId>=r,"Should have found mutation after "+r),o=n.serializer.fromDbMutationBatch(e)),i.done()}).next(function(){return o})},t.prototype.getHighestUnacknowledgedBatchId=function(t){var e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1
return zt(t).iterate({index:Pe.userMutationsIndex,range:e,reverse:!0},function(t,e,r){n=e.batchId,r.done()}).next(function(){return n})},t.prototype.getAllMutationBatches=function(t){var e=this,n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY])
return zt(t).loadAll(Pe.userMutationsIndex,n).next(function(t){return t.map(function(t){return e.serializer.fromDbMutationBatch(t)})})},t.prototype.getAllMutationBatchesAffectingDocumentKey=function(t,e){var n=this,r=xe.prefixForPath(this.userId,e.path),i=IDBKeyRange.lowerBound(r),o=[]
return Yt(t).iterate({range:i},function(r,i,a){var s=r[0],u=r[1],c=r[2],h=wt(u)
if(s===n.userId&&e.path.isEqual(h))return zt(t).get(c).next(function(t){if(!t)throw v("Dangling document-mutation reference found: "+r+" which points to "+c)
_(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+c),o.push(n.serializer.fromDbMutationBatch(t))})
a.done()}).next(function(){return o})},t.prototype.getAllMutationBatchesAffectingDocumentKeys=function(t,e){var n=this,r=new kt(z),i=[]
return e.forEach(function(e){var o=xe.prefixForPath(n.userId,e.path),a=IDBKeyRange.lowerBound(o),s=Yt(t).iterate({range:a},function(t,i,o){var a=t[0],s=t[1],u=t[2],c=wt(s)
a===n.userId&&e.path.isEqual(c)?r=r.add(u):o.done()})
i.push(s)}),Wt.waitFor(i).next(function(){return n.lookupMutationBatches(t,r)})},t.prototype.getAllMutationBatchesAffectingQuery=function(t,e){var n=this
_(!e.isDocumentQuery(),"Document queries shouldn't go down this path"),_(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
var r=e.path,i=r.length+1,o=xe.prefixForPath(this.userId,r),a=IDBKeyRange.lowerBound(o),s=new kt(z)
return Yt(t).iterate({range:a},function(t,e,o){var a=t[0],u=t[1],c=t[2],h=wt(u)
a===n.userId&&r.isPrefixOf(h)?h.length===i&&(s=s.add(c)):o.done()}).next(function(){return n.lookupMutationBatches(t,s)})},t.prototype.lookupMutationBatches=function(t,e){var n=this,r=[],i=[]
return e.forEach(function(e){i.push(zt(t).get(e).next(function(t){if(null===t)throw v("Dangling document-mutation reference found, which points to "+e)
_(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+e),r.push(n.serializer.fromDbMutationBatch(t))}))}),Wt.waitFor(i).next(function(){return r})},t.prototype.removeMutationBatch=function(t,e){var n=this
return Ht(t.simpleDbTransaction,this.userId,e).next(function(r){return n.removeCachedMutationKeys(e.batchId),Wt.forEach(r,function(e){return n.referenceDelegate.removeMutationReference(t,e)})})},t.prototype.removeCachedMutationKeys=function(t){delete this.documentKeysByBatchId[t]},t.prototype.performConsistencyCheck=function(t){var e=this
return this.checkEmpty(t).next(function(n){if(!n)return Wt.resolve()
var r=IDBKeyRange.lowerBound(xe.prefixForUser(e.userId)),i=[]
return Yt(t).iterate({range:r},function(t,n,r){if(t[0]===e.userId){var o=wt(t[1])
i.push(o)}else r.done()}).next(function(){_(0===i.length,"Document leak -- detected dangling mutation references when queue is empty. Dangling keys: "+i.map(function(t){return t.canonicalString()}))})})},t.prototype.containsKey=function(t,e){return Kt(t,this.userId,e)},t.prototype.getMutationQueueMetadata=function(t){var e=this
return Xt(t).get(this.userId).next(function(t){return t||new Oe(e.userId,-1,"")})},t}()
function Kt(t,e,n){var r=xe.prefixForPath(e,n.path),i=r[1],o=IDBKeyRange.lowerBound(r),a=!1
return Yt(t).iterate({range:o,keysOnly:!0},function(t,n,r){var o=t[0],s=t[1]
t[2],o===e&&s===i&&(a=!0),r.done()}).next(function(){return a})}function Ht(t,e,n){var r=t.store(Pe.store),i=t.store(xe.store),o=[],a=IDBKeyRange.only(n.batchId),s=0,u=r.iterate({range:a},function(t,e,n){return s++,n.delete()})
o.push(u.next(function(){_(1===s,"Dangling document-mutation reference found: Missing batch "+n.batchId)}))
for(var c=[],h=0,l=n.mutations;h<l.length;h++){var f=l[h],p=xe.key(e,f.key.path,n.batchId)
o.push(i.delete(p)),c.push(f.key)}return Wt.waitFor(o).next(function(){return c})}function Gt(t){return t instanceof Uint8Array?(_("YES"===process.env.USE_MOCK_PERSISTENCE,"Persisting non-string stream tokens is only supported with mock persistence."),t.toString()):t}function zt(t){return hn.getStore(t,Pe.store)}function Yt(t){return hn.getStore(t,xe.store)}function Xt(t){return hn.getStore(t,Oe.store)}var Jt,$t=1
!function(t){t[t.QueryCache=0]="QueryCache",t[t.SyncEngine=1]="SyncEngine"}(Jt||(Jt={}))
var Zt=function(){function t(t,e){this.generatorId=t,_((t&$t)===t,"Generator ID "+t+" contains more than "+$t+" reserved bits"),this.seek(void 0!==e?e:this.generatorId)}return t.prototype.next=function(){var t=this.nextId
return this.nextId+=1<<$t,t},t.prototype.after=function(t){return this.seek(t+(1<<$t)),this.next()},t.prototype.seek=function(t){_((t&$t)===this.generatorId,"Cannot supply target ID from different generator ID"),this.nextId=t},t.forQueryCache=function(){return new t(Jt.QueryCache,2)},t.forSyncEngine=function(){return new t(Jt.SyncEngine)},t}(),te="SimpleDb",ee=function(){function t(e){this.db=e,12.2===t.getIOSVersion(c.getUA())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}return t.openOrCreate=function(e,n,r){return _(t.isAvailable(),"IndexedDB not supported in current environment."),y(te,"Opening database:",e),new Wt(function(i,o){var a=window.indexedDB.open(e,n)
a.onsuccess=function(e){var n=e.target.result
i(new t(n))},a.onblocked=function(){o(new T(E.FAILED_PRECONDITION,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=function(t){var e=t.target.error
"VersionError"===e.name?o(new T(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o(e)},a.onupgradeneeded=function(t){y(te,'Database "'+e+'" requires upgrade from version:',t.oldVersion)
var n=t.target.result,i=new re(a.transaction)
r.createOrUpgrade(n,i,t.oldVersion,ke).next(function(){y(te,"Database upgrade to version "+ke+" complete")})}}).toPromise()},t.delete=function(t){return y(te,"Removing database:",t),oe(window.indexedDB.deleteDatabase(t)).toPromise()},t.isAvailable=function(){if("undefined"==typeof window||null==window.indexedDB)return!1
if(void 0===window.navigator)return"YES"===process.env.USE_MOCK_PERSISTENCE
var e=c.getUA(),n=t.getIOSVersion(e),r=0<n&&n<10,i=t.getAndroidVersion(e),o=0<i&&i<4.5
return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)},t.getStore=function(t,e){return t.store(e)},t.getIOSVersion=function(t){var e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1"
return Number(n)},t.getAndroidVersion=function(t){var e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1"
return Number(n)},t.prototype.setVersionChangeListener=function(t){this.db.onversionchange=function(e){return t(e)}},t.prototype.runTransaction=function(t,e,n){var r=re.open(this.db,t,e),i=n(r).catch(function(t){return r.abort(t),Wt.reject(t)}).toPromise()
return i.catch(function(){}),r.completionPromise.then(function(){return i})},t.prototype.close=function(){this.db.close()},t}(),ne=function(){function t(t){this.dbCursor=t,this.shouldStop=!1,this.nextKey=null}return Object.defineProperty(t.prototype,"isDone",{get:function(){return this.shouldStop},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"skipToKey",{get:function(){return this.nextKey},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cursor",{set:function(t){this.dbCursor=t},enumerable:!0,configurable:!0}),t.prototype.done=function(){this.shouldStop=!0},t.prototype.skip=function(t){this.nextKey=t},t.prototype.delete=function(){return oe(this.dbCursor.delete())},t}(),re=function(){function t(t){var e=this
this.transaction=t,this.aborted=!1,this.completionDeferred=new lt,this.transaction.oncomplete=function(){e.completionDeferred.resolve()},this.transaction.onabort=function(){t.error?e.completionDeferred.reject(t.error):e.completionDeferred.resolve()},this.transaction.onerror=function(t){var n=se(t.target.error)
e.completionDeferred.reject(n)}}return t.open=function(e,n,r){return new t(e.transaction(r,n))},Object.defineProperty(t.prototype,"completionPromise",{get:function(){return this.completionDeferred.promise},enumerable:!0,configurable:!0}),t.prototype.abort=function(t){t&&this.completionDeferred.reject(t),this.aborted||(y(te,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())},t.prototype.store=function(t){var e=this.transaction.objectStore(t)
return _(!!e,"Object store not part of transaction: "+t),new ie(e)},t}(),ie=function(){function t(t){this.store=t}return t.prototype.put=function(t,e){var n
return void 0!==e?(y(te,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(y(te,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),oe(n)},t.prototype.add=function(t){return y(te,"ADD",this.store.name,t,t),oe(this.store.add(t))},t.prototype.get=function(t){var e=this
return oe(this.store.get(t)).next(function(n){return void 0===n&&(n=null),y(te,"GET",e.store.name,t,n),n})},t.prototype.delete=function(t){return y(te,"DELETE",this.store.name,t),oe(this.store.delete(t))},t.prototype.count=function(){return y(te,"COUNT",this.store.name),oe(this.store.count())},t.prototype.loadAll=function(t,e){var n=this.cursor(this.options(t,e)),r=[]
return this.iterateCursor(n,function(t,e){r.push(e)}).next(function(){return r})},t.prototype.deleteAll=function(t,e){y(te,"DELETE ALL",this.store.name)
var n=this.options(t,e)
n.keysOnly=!1
var r=this.cursor(n)
return this.iterateCursor(r,function(t,e,n){return n.delete()})},t.prototype.iterate=function(t,e){var n
e?n=t:(n={},e=t)
var r=this.cursor(n)
return this.iterateCursor(r,e)},t.prototype.iterateSerial=function(t){var e=this.cursor({})
return new Wt(function(n,r){e.onerror=function(t){var e=se(t.target.error)
r(e)},e.onsuccess=function(e){var r=e.target.result
r?t(r.primaryKey,r.value).next(function(t){t?r.continue():n()}):n()}})},t.prototype.iterateCursor=function(t,e){var n=[]
return new Wt(function(r,i){t.onerror=function(t){i(t.target.error)},t.onsuccess=function(t){var i=t.target.result
if(i){var o=new ne(i),a=e(i.primaryKey,i.value,o)
if(a instanceof Wt){var s=a.catch(function(t){return o.done(),Wt.reject(t)})
n.push(s)}o.isDone?r():null===o.skipToKey?i.continue():i.continue(o.skipToKey)}else r()}}).next(function(){return Wt.waitFor(n)})},t.prototype.options=function(t,e){var n=void 0
return void 0!==t&&("string"==typeof t?n=t:(_(void 0===e,"3rd argument must not be defined if 2nd is a range."),e=t)),{index:n,range:e}},t.prototype.cursor=function(t){var e="next"
if(t.reverse&&(e="prev"),t.index){var n=this.store.index(t.index)
return t.keysOnly?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)},t}()
function oe(t){return new Wt(function(e,n){t.onsuccess=function(t){var n=t.target.result
e(n)},t.onerror=function(t){var e=se(t.target.error)
n(e)}})}var ae=!1
function se(t){var e=ee.getIOSVersion(c.getUA())
if(e>=12.2&&e<13){var n="An internal error was encountered in the Indexed Database server"
if(t.message.indexOf(n)>=0){var r=new T("internal","IOS_INDEXEDDB_BUG1: IndexedDb has thrown '"+n+"'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
return ae||(ae=!0,setTimeout(function(){throw r},0)),r}}return t}var ue=function(){function t(t,e){this.referenceDelegate=t,this.serializer=e,this.targetIdGenerator=Zt.forQueryCache()}return t.prototype.allocateTargetId=function(t){var e=this
return this.retrieveMetadata(t).next(function(n){return n.highestTargetId=e.targetIdGenerator.after(n.highestTargetId),e.saveMetadata(t,n).next(function(){return n.highestTargetId})})},t.prototype.getLastRemoteSnapshotVersion=function(t){return this.retrieveMetadata(t).next(function(t){return Tt.fromTimestamp(new Et(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))})},t.prototype.getHighestSequenceNumber=function(t){return le(t.simpleDbTransaction)},t.prototype.setTargetsMetadata=function(t,e,n){var r=this
return this.retrieveMetadata(t).next(function(i){return i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),r.saveMetadata(t,i)})},t.prototype.addQueryData=function(t,e){var n=this
return this.saveQueryData(t,e).next(function(){return n.retrieveMetadata(t).next(function(r){return r.targetCount+=1,n.updateMetadataFromQueryData(e,r),n.saveMetadata(t,r)})})},t.prototype.updateQueryData=function(t,e){return this.saveQueryData(t,e)},t.prototype.removeQueryData=function(t,e){var n=this
return this.removeMatchingKeysForTargetId(t,e.targetId).next(function(){return ce(t).delete(e.targetId)}).next(function(){return n.retrieveMetadata(t)}).next(function(e){return _(e.targetCount>0,"Removing from an empty query cache"),e.targetCount-=1,n.saveMetadata(t,e)})},t.prototype.removeTargets=function(t,e,n){var r=this,i=0,o=[]
return ce(t).iterate(function(a,s){var u=r.serializer.fromDbTarget(s)
u.sequenceNumber<=e&&void 0===n[u.targetId]&&(i++,o.push(r.removeQueryData(t,u)))}).next(function(){return Wt.waitFor(o)}).next(function(){return i})},t.prototype.forEachTarget=function(t,e){var n=this
return ce(t).iterate(function(t,r){var i=n.serializer.fromDbTarget(r)
e(i)})},t.prototype.retrieveMetadata=function(t){return he(t.simpleDbTransaction)},t.prototype.saveMetadata=function(t,e){return(n=t,hn.getStore(n,Be.store)).put(Be.key,e)
var n},t.prototype.saveQueryData=function(t,e){return ce(t).put(this.serializer.toDbTarget(e))},t.prototype.updateMetadataFromQueryData=function(t,e){var n=!1
return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n},t.prototype.getQueryCount=function(t){return this.retrieveMetadata(t).next(function(t){return t.targetCount})},t.prototype.getQueryData=function(t,e){var n=this,r=e.canonicalId(),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),o=null
return ce(t).iterate({range:i,index:qe.queryTargetsIndexName},function(t,r,i){var a=n.serializer.fromDbTarget(r)
e.isEqual(a.query)&&(o=a,i.done())}).next(function(){return o})},t.prototype.addMatchingKeys=function(t,e,n){var r=this,i=[],o=fe(t)
return e.forEach(function(e){var a=vt(e.path)
i.push(o.put(new Ve(n,a))),i.push(r.referenceDelegate.addReference(t,e))}),Wt.waitFor(i)},t.prototype.removeMatchingKeys=function(t,e,n){var r=this,i=fe(t)
return Wt.forEach(e,function(e){var o=vt(e.path)
return Wt.waitFor([i.delete([n,o]),r.referenceDelegate.removeReference(t,e)])})},t.prototype.removeMatchingKeysForTargetId=function(t,e){var n=fe(t),r=IDBKeyRange.bound([e],[e+1],!1,!0)
return n.delete(r)},t.prototype.getMatchingKeysForTargetId=function(t,e){var n=IDBKeyRange.bound([e],[e+1],!1,!0),r=fe(t),i=Ut()
return r.iterate({range:n,keysOnly:!0},function(t,e,n){var r=wt(t[1]),o=new ht(r)
i=i.add(o)}).next(function(){return i})},t.prototype.containsKey=function(t,e){var n=vt(e.path),r=IDBKeyRange.bound([n],[X(n)],!1,!0),i=0
return fe(t).iterate({index:Ve.documentTargetsIndex,keysOnly:!0,range:r},function(t,e,n){var r=t[0]
t[1],0!==r&&(i++,n.done())}).next(function(){return i>0})},t.prototype.getQueryDataForTarget=function(t,e){var n=this
return ce(t).get(e).next(function(t){return t?n.serializer.fromDbTarget(t):null})},t}()
function ce(t){return hn.getStore(t,qe.store)}function he(t){return ee.getStore(t,Be.store).get(Be.key).next(function(t){return _(null!==t,"Missing metadata row."),t})}function le(t){return he(t).next(function(t){return t.highestListenSequenceNumber})}function fe(t){return hn.getStore(t,Ve.store)}var pe=function(){function t(t,e){this.key=t,this.version=e}return t.compareByKey=function(t,e){return ht.comparator(t.key,e.key)},t}(),de=function(t){function e(e,n,r,i,o){var a=t.call(this,e,n)||this
return a.data=r,a.proto=o,a.hasLocalMutations=!!i.hasLocalMutations,a.hasCommittedMutations=!!i.hasCommittedMutations,a}return u.__extends(e,t),e.prototype.field=function(t){return this.data.field(t)},e.prototype.fieldValue=function(t){var e=this.field(t)
return e?e.value():void 0},e.prototype.value=function(){return this.data.value()},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.data.isEqual(t.data)&&this.hasLocalMutations===t.hasLocalMutations&&this.hasCommittedMutations===t.hasCommittedMutations},e.prototype.toString=function(){return"Document("+this.key+", "+this.version+", "+this.data.toString()+", {hasLocalMutations: "+this.hasLocalMutations+"}), {hasCommittedMutations: "+this.hasCommittedMutations+"})"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return this.hasLocalMutations||this.hasCommittedMutations},enumerable:!0,configurable:!0}),e.compareByField=function(t,e,n){var r=e.field(t),i=n.field(t)
return null!==r&&null!==i?r.compareTo(i):v("Trying to compare documents on fields that don't exist")},e}(pe),ye=function(t){function e(e,n,r){var i=t.call(this,e,n)||this
return i.hasCommittedMutations=!(!r||!r.hasCommittedMutations),i}return u.__extends(e,t),e.prototype.toString=function(){return"NoDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return this.hasCommittedMutations},enumerable:!0,configurable:!0}),e.prototype.isEqual=function(t){return t instanceof e&&t.hasCommittedMutations===this.hasCommittedMutations&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},e}(pe),me=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u.__extends(e,t),e.prototype.toString=function(){return"UnknownDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return!0},enumerable:!0,configurable:!0}),e.prototype.isEqual=function(t){return t instanceof e&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},e}(pe),ge=function(){function t(t){this.mapKeyFn=t,this.inner={}}return t.prototype.get=function(t){var e=this.mapKeyFn(t),n=this.inner[e]
if(void 0!==n)for(var r=0,i=n;r<i.length;r++){var o=i[r],a=o[0],s=o[1]
if(a.isEqual(t))return s}},t.prototype.has=function(t){return void 0!==this.get(t)},t.prototype.set=function(t,e){var n=this.mapKeyFn(t),r=this.inner[n]
if(void 0!==r){for(var i=0;i<r.length;i++)if(r[i][0].isEqual(t))return void(r[i]=[t,e])
r.push([t,e])}else this.inner[n]=[[t,e]]},t.prototype.delete=function(t){var e=this.mapKeyFn(t),n=this.inner[e]
if(void 0===n)return!1
for(var r=0;r<n.length;r++)if(n[r][0].isEqual(t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0
return!1},t.prototype.forEach=function(t){k(this.inner,function(e,n){for(var r=0,i=n;r<i.length;r++){var o=i[r],a=o[0],s=o[1]
t(a,s)}})},t.prototype.isEmpty=function(){return A(this.inner)},t}(),ve=function(){function t(){this.changes=new ge(function(t){return t.toString()}),this.changesApplied=!1}return t.prototype.addEntry=function(t){this.assertNotApplied(),this.changes.set(t.key,t)},t.prototype.removeEntry=function(t){this.assertNotApplied(),this.changes.set(t,null)},t.prototype.getEntry=function(t,e){this.assertNotApplied()
var n=this.changes.get(e)
return void 0!==n?Wt.resolve(n):this.getFromCache(t,e)},t.prototype.getEntries=function(t,e){return this.getAllFromCache(t,e)},t.prototype.apply=function(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)},t.prototype.assertNotApplied=function(){_(!this.changesApplied,"Changes have already been applied.")},t}(),_e="The remote document changelog no longer contains all changes for all local query views. It may be necessary to rebuild these views.",be=function(){function t(t,e,n){this.serializer=t,this.indexManager=e,this.keepDocumentChangeLog=n,this._lastProcessedDocumentChangeId=0}return Object.defineProperty(t.prototype,"lastProcessedDocumentChangeId",{get:function(){return this._lastProcessedDocumentChangeId},enumerable:!0,configurable:!0}),t.prototype.start=function(t){var e=ee.getStore(t,Ke.store)
return this.synchronizeLastDocumentChangeId(e)},t.prototype.addEntry=function(t,e,n){var r=this
return Ee(t).put(Se(e),n).next(function(){r.indexManager.addToCollectionParentIndex(t,e.path.popLast())})},t.prototype.removeEntry=function(t,e){var n=Ee(t),r=Se(e)
return n.delete(r)},t.prototype.updateMetadata=function(t,e,n){var r=this
return this.getMetadata(t).next(function(i){return i.byteSize+=n,r.setMetadata(t,i).next(function(){if(r.keepDocumentChangeLog)return Te(t).put({changes:r.serializer.toDbResourcePaths(e)})})})},t.prototype.getEntry=function(t,e){var n=this
return Ee(t).get(Se(e)).next(function(t){return t?n.serializer.fromDbRemoteDocument(t):null})},t.prototype.getSizedEntry=function(t,e){var n=this
return Ee(t).get(Se(e)).next(function(t){return t?{maybeDocument:n.serializer.fromDbRemoteDocument(t),size:Ie(t)}:null})},t.prototype.getEntries=function(t,e){var n=this,r=Ot()
return this.forEachDbEntry(t,e,function(t,e){r=e?r.insert(t,n.serializer.fromDbRemoteDocument(e)):r.insert(t,null)}).next(function(){return r})},t.prototype.getSizedEntries=function(t,e){var n=this,r=Ot(),i=new St(ht.comparator)
return this.forEachDbEntry(t,e,function(t,e){e?(r=r.insert(t,n.serializer.fromDbRemoteDocument(e)),i=i.insert(t,Ie(e))):(r=r.insert(t,null),i=i.insert(t,0))}).next(function(){return{maybeDocuments:r,sizeMap:i}})},t.prototype.forEachDbEntry=function(t,e,n){if(e.isEmpty())return Wt.resolve()
var r=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),i=e.getIterator(),o=i.getNext()
return Ee(t).iterate({range:r},function(t,e,r){for(var a=ht.fromSegments(t);o&&ht.comparator(o,a)<0;)n(o,null),o=i.getNext()
o&&o.isEqual(a)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?r.skip(o.path.toArray()):r.done()}).next(function(){for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})},t.prototype.getDocumentsMatchingQuery=function(t,e){var n=this
_(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
var r=xt(),i=e.path.length+1,o=e.path.toArray(),a=IDBKeyRange.lowerBound(o)
return Ee(t).iterate({range:a},function(t,o,a){if(t.length===i){var s=n.serializer.fromDbRemoteDocument(o)
e.path.isPrefixOf(s.key.path)?s instanceof de&&e.matches(s)&&(r=r.insert(s.key,s)):a.done()}}).next(function(){return r})},t.prototype.getNewDocumentChanges=function(t){var e=this
_(this.keepDocumentChangeLog,"Can only call getNewDocumentChanges() when document change log is enabled")
var n=Ut(),r=Rt(),i=IDBKeyRange.lowerBound(this._lastProcessedDocumentChangeId+1),o=!0,a=Te(t)
return a.iterate({range:i},function(t,r){if(o&&(o=!1,e._lastProcessedDocumentChangeId+1!==r.id))return e.synchronizeLastDocumentChangeId(a).next(function(){return Wt.reject(new T(E.DATA_LOSS,_e))})
n=n.unionWith(e.serializer.fromDbResourcePaths(r.changes)),e._lastProcessedDocumentChangeId=r.id}).next(function(){var i=[]
return n.forEach(function(n){i.push(e.getEntry(t,n).next(function(t){var e=t||new ye(n,Tt.forDeletedDoc())
r=r.insert(n,e)}))}),Wt.waitFor(i)}).next(function(){return r})},t.prototype.removeDocumentChangesThroughChangeId=function(t,e){var n=IDBKeyRange.upperBound(e)
return Te(t).delete(n)},t.prototype.synchronizeLastDocumentChangeId=function(t){var e=this
return this._lastProcessedDocumentChangeId=0,t.iterate({keysOnly:!0,reverse:!0},function(t,n,r){e._lastProcessedDocumentChangeId=t,r.done()})},t.prototype.newChangeBuffer=function(){return new t.RemoteDocumentChangeBuffer(this)},t.prototype.getSize=function(t){return this.getMetadata(t).next(function(t){return t.byteSize})},t.prototype.getMetadata=function(t){return we(t).get(Ue.key).next(function(t){return _(!!t,"Missing document cache metadata"),t})},t.prototype.setMetadata=function(t,e){return we(t).put(Ue.key,e)},t.RemoteDocumentChangeBuffer=function(t){function e(e){var n=t.call(this)||this
return n.documentCache=e,n.documentSizes=new ge(function(t){return t.toString()}),n}return u.__extends(e,t),e.prototype.applyChanges=function(t){var e=this,n=[],r=0,i=Ut()
return this.changes.forEach(function(o,a){var s=e.documentSizes.get(o)
if(_(void 0!==s,"Cannot modify a document that wasn't read (for "+o+")"),a){var u=e.documentCache.serializer.toDbRemoteDocument(a),c=Ie(u)
r+=c-s,n.push(e.documentCache.addEntry(t,o,u))}else r-=s,n.push(e.documentCache.removeEntry(t,o))
i=i.add(o)}),n.push(this.documentCache.updateMetadata(t,i,r)),Wt.waitFor(n)},e.prototype.getFromCache=function(t,e){var n=this
return this.documentCache.getSizedEntry(t,e).next(function(t){return null===t?(n.documentSizes.set(e,0),null):(n.documentSizes.set(e,t.size),t.maybeDocument)})},e.prototype.getAllFromCache=function(t,e){var n=this
return this.documentCache.getSizedEntries(t,e).next(function(t){var e=t.maybeDocuments
return t.sizeMap.forEach(function(t,e){n.documentSizes.set(t,e)}),e})},e}(ve),t}()
function we(t){return hn.getStore(t,Ue.store)}function Ee(t){return hn.getStore(t,Fe.store)}function Te(t){return hn.getStore(t,Ke.store)}function Se(t){return t.path.toArray()}function Ie(t){var e
if(t.document)e=t.document
else if(t.unknownDocument)e=t.unknownDocument
else{if(!t.noDocument)throw v("Unknown remote document type")
e=t.noDocument}return JSON.stringify(e).length}var Ce=function(){function t(){this.collectionParentIndex=new Ne}return t.prototype.addToCollectionParentIndex=function(t,e){return this.collectionParentIndex.add(e),Wt.resolve()},t.prototype.getCollectionParents=function(t,e){return Wt.resolve(this.collectionParentIndex.getEntries(e))},t}(),Ne=function(){function t(){this.index={}}return t.prototype.add=function(t){_(t.length%2==1,"Expected a collection path.")
var e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new kt(st.comparator),i=!r.has(n)
return this.index[e]=r.add(n),i},t.prototype.getEntries=function(t){return(this.index[t]||new kt(st.comparator)).toArray()},t}(),ke=8,Ae=function(){function t(t){this.serializer=t}return t.prototype.createOrUpgrade=function(t,e,n,r){var i=this
_(n<r&&n>=0&&r<=ke,"Unexpected schema upgrade from v"+n+" to v{toVersion}."),n<1&&r>=1&&(function(t){t.createObjectStore(Re.store)}(t),function(t){t.createObjectStore(Oe.store,{keyPath:Oe.keyPath}),t.createObjectStore(Pe.store,{keyPath:Pe.keyPath,autoIncrement:!0}).createIndex(Pe.userMutationsIndex,Pe.userMutationsKeyPath,{unique:!0}),t.createObjectStore(xe.store)}(t),We(t),function(t){t.createObjectStore(Fe.store)}(t))
var o=Wt.resolve()
return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(Ve.store),t.deleteObjectStore(qe.store),t.deleteObjectStore(Be.store)}(t),We(t)),o=o.next(function(){return function(t){var e=t.store(Be.store),n=new Be(0,0,Tt.MIN.toTimestamp(),0)
return e.put(Be.key,n)}(e)})),n<4&&r>=4&&(0!==n&&(o=o.next(function(){return function(t,e){return e.store(Pe.store).loadAll().next(function(n){t.deleteObjectStore(Pe.store),t.createObjectStore(Pe.store,{keyPath:Pe.keyPath,autoIncrement:!0}).createIndex(Pe.userMutationsIndex,Pe.userMutationsKeyPath,{unique:!0})
var r=e.store(Pe.store),i=n.map(function(t){return r.put(t)})
return Wt.waitFor(i)})}(t,e)})),o=o.next(function(){!function(t){t.createObjectStore(He.store,{keyPath:He.keyPath})}(t),function(t){t.createObjectStore(Ke.store,{keyPath:"id",autoIncrement:!0})}(t)})),n<5&&r>=5&&(o=o.next(function(){return i.removeAcknowledgedMutations(e)})),n<6&&r>=6&&(o=o.next(function(){return function(t){t.createObjectStore(Ue.store)}(t),i.addDocumentGlobal(e)})),n<7&&r>=7&&(o=o.next(function(){return i.ensureSequenceNumbers(e)})),n<8&&r>=8&&(o=o.next(function(){return i.createCollectionParentIndex(t,e)})),o},t.prototype.addDocumentGlobal=function(t){var e=0
return t.store(Fe.store).iterate(function(t,n){e+=Ie(n)}).next(function(){var n=new Ue(e)
return t.store(Ue.store).put(Ue.key,n)})},t.prototype.removeAcknowledgedMutations=function(t){var e=this,n=t.store(Oe.store),r=t.store(Pe.store)
return n.loadAll().next(function(n){return Wt.forEach(n,function(n){var i=IDBKeyRange.bound([n.userId,-1],[n.userId,n.lastAcknowledgedBatchId])
return r.loadAll(Pe.userMutationsIndex,i).next(function(r){return Wt.forEach(r,function(r){_(r.userId===n.userId,"Cannot process batch "+r.batchId+" from unexpected user")
var i=e.serializer.fromDbMutationBatch(r)
return Ht(t,n.userId,i).next(function(){})})})})})},t.prototype.ensureSequenceNumbers=function(t){var e=t.store(Ve.store),n=t.store(Fe.store)
return le(t).next(function(t){var r=[]
return n.iterate(function(n,i){var o=new st(n),a=[0,vt(o)]
r.push(e.get(a).next(function(n){return n?Wt.resolve():function(n){return e.put(new Ve(0,vt(n),t))}(o)}))}).next(function(){return Wt.waitFor(r)})})},t.prototype.createCollectionParentIndex=function(t,e){t.createObjectStore(je.store,{keyPath:je.keyPath})
var n=e.store(je.store),r=new Ne,i=function(t){if(r.add(t)){var e=t.lastSegment(),i=t.popLast()
return n.put({collectionId:e,parent:vt(i)})}}
return e.store(Fe.store).iterate({keysOnly:!0},function(t,e){var n=new st(t)
return i(n.popLast())}).next(function(){return e.store(xe.store).iterate({keysOnly:!0},function(t,e){t[0]
var n=t[1],r=(t[2],wt(n))
return i(r.popLast())})})},t}(),De=function(t,e){this.seconds=t,this.nanoseconds=e},Re=function(){function t(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}return t.store="owner",t.key="owner",t}(),Oe=function(){function t(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}return t.store="mutationQueues",t.keyPath="userId",t}(),Pe=function(){function t(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}return t.store="mutations",t.keyPath="batchId",t.userMutationsIndex="userMutationsIndex",t.userMutationsKeyPath=["userId","batchId"],t}(),xe=function(){function t(){}return t.prefixForUser=function(t){return[t]},t.prefixForPath=function(t,e){return[t,vt(e)]},t.key=function(t,e,n){return[t,vt(e),n]},t.store="documentMutations",t.PLACEHOLDER=new t,t}(),Me=function(t,e){this.path=t,this.readTime=e},Le=function(t,e){this.path=t,this.version=e},Fe=function(){function t(t,e,n,r){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r}return t.store="remoteDocuments",t}(),Ue=function(){function t(t){this.byteSize=t}return t.store="remoteDocumentGlobal",t.key="remoteDocumentGlobalKey",t}(),qe=function(){function t(t,e,n,r,i,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.query=o}return t.store="targets",t.keyPath="targetId",t.queryTargetsIndexName="queryTargetsIndex",t.queryTargetsKeyPath=["canonicalId","targetId"],t}(),Ve=function(){function t(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n,_(0===t==(void 0!==n),"A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number")}return t.store="targetDocuments",t.keyPath=["targetId","path"],t.documentTargetsIndex="documentTargetsIndex",t.documentTargetsKeyPath=["path","targetId"],t}(),Be=function(){function t(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}return t.key="targetGlobalKey",t.store="targetGlobal",t}(),je=function(){function t(t,e){this.collectionId=t,this.parent=e}return t.store="collectionParents",t.keyPath=["collectionId","parent"],t}()
function We(t){t.createObjectStore(Ve.store,{keyPath:Ve.keyPath}).createIndex(Ve.documentTargetsIndex,Ve.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(qe.store,{keyPath:qe.keyPath}).createIndex(qe.queryTargetsIndexName,qe.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Be.store)}var Qe,Ke=function(){function t(t){this.changes=t}return t.store="remoteDocumentChanges",t.keyPath="id",t}(),He=function(){function t(t,e,n,r,i){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r,this.lastProcessedDocumentChangeId=i}return t.store="clientMetadata",t.keyPath="clientId",t}(),Ge=[Oe.store,Pe.store,xe.store,Fe.store,qe.store,Re.store,Be.store,Ve.store].concat([He.store,Ke.store]).concat([Ue.store]).concat([je.store]),ze=function(){function t(){this.collectionParentsCache=new Ne}return t.prototype.addToCollectionParentIndex=function(t,e){if(_(e.length%2==1,"Expected a collection path."),this.collectionParentsCache.add(e)){_(e.length>=1,"Invalid collection path.")
var n=e.lastSegment(),r=e.popLast()
return Ye(t).put({collectionId:n,parent:vt(r)})}return Wt.resolve()},t.prototype.getCollectionParents=function(t,e){var n=[],r=IDBKeyRange.bound([e,""],[X(e),""],!1,!0)
return Ye(t).loadAll(r).next(function(t){for(var r=0,i=t;r<i.length;r++){var o=i[r]
if(o.collectionId!==e)break
n.push(wt(o.parent))}return n})},t}()
function Ye(t){return hn.getStore(t,je.store)}!function(t){t[t.Listen=0]="Listen",t[t.ExistenceFilterMismatch=1]="ExistenceFilterMismatch",t[t.LimboResolution=2]="LimboResolution"}(Qe||(Qe={}))
var Xe=function(){function t(t,e,n,r,i,o){void 0===i&&(i=Tt.MIN),void 0===o&&(o=w()),this.query=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.resumeToken=o}return t.prototype.copy=function(e){return new t(this.query,this.targetId,this.purpose,void 0===e.sequenceNumber?this.sequenceNumber:e.sequenceNumber,void 0===e.snapshotVersion?this.snapshotVersion:e.snapshotVersion,void 0===e.resumeToken?this.resumeToken:e.resumeToken)},t.prototype.isEqual=function(t){return this.targetId===t.targetId&&this.purpose===t.purpose&&this.sequenceNumber===t.sequenceNumber&&this.snapshotVersion.isEqual(t.snapshotVersion)&&this.resumeToken===t.resumeToken&&this.query.isEqual(t.query)},t}(),Je=function(){function t(t){this.remoteSerializer=t}return t.prototype.fromDbRemoteDocument=function(t){if(t.document)return this.remoteSerializer.fromDocument(t.document,!!t.hasCommittedMutations)
if(t.noDocument){var e=ht.fromSegments(t.noDocument.path),n=this.fromDbTimestamp(t.noDocument.readTime)
return new ye(e,n,{hasCommittedMutations:!!t.hasCommittedMutations})}return t.unknownDocument?(e=ht.fromSegments(t.unknownDocument.path),n=this.fromDbTimestamp(t.unknownDocument.version),new me(e,n)):v("Unexpected DbRemoteDocument")},t.prototype.toDbRemoteDocument=function(t){if(t instanceof de){var e=t.proto?t.proto:this.remoteSerializer.toDocument(t),n=t.hasCommittedMutations
return new Fe(null,null,e,n)}if(t instanceof ye){var r=t.key.path.toArray(),i=this.toDbTimestamp(t.version)
return n=t.hasCommittedMutations,new Fe(null,new Me(r,i),null,n)}return t instanceof me?(r=t.key.path.toArray(),i=this.toDbTimestamp(t.version),new Fe(new Le(r,i),null,null,!0)):v("Unexpected MaybeDocumment")},t.prototype.toDbTimestamp=function(t){var e=t.toTimestamp()
return new De(e.seconds,e.nanoseconds)},t.prototype.fromDbTimestamp=function(t){var e=new Et(t.seconds,t.nanoseconds)
return Tt.fromTimestamp(e)},t.prototype.toDbMutationBatch=function(t,e){var n=this,r=e.baseMutations.map(function(t){return n.remoteSerializer.toMutation(t)}),i=e.mutations.map(function(t){return n.remoteSerializer.toMutation(t)})
return new Pe(t,e.batchId,e.localWriteTime.toMillis(),r,i)},t.prototype.fromDbMutationBatch=function(t){var e=this,n=(t.baseMutations||[]).map(function(t){return e.remoteSerializer.fromMutation(t)}),r=t.mutations.map(function(t){return e.remoteSerializer.fromMutation(t)}),i=Et.fromMillis(t.localWriteTimeMs)
return new Bt(t.batchId,i,n,r)},t.prototype.toDbResourcePaths=function(t){var e=[]
return t.forEach(function(t){e.push(vt(t.path))}),e},t.prototype.fromDbResourcePaths=function(t){for(var e=Ut(),n=0,r=t;n<r.length;n++){var i=r[n]
e=e.add(new ht(wt(i)))}return e},t.prototype.fromDbTarget=function(t){var e,n=this.fromDbTimestamp(t.readTime)
return e=void 0!==t.query.documents?this.remoteSerializer.fromDocumentsTarget(t.query):this.remoteSerializer.fromQueryTarget(t.query),new Xe(e,t.targetId,Qe.Listen,t.lastListenSequenceNumber,n,t.resumeToken)},t.prototype.toDbTarget=function(t){_(Qe.Listen===t.purpose,"Only queries with purpose "+Qe.Listen+" may be stored, got "+t.purpose)
var e,n,r=this.toDbTimestamp(t.snapshotVersion)
return e=t.query.isDocumentQuery()?this.remoteSerializer.toDocumentsTarget(t.query):this.remoteSerializer.toQueryTarget(t.query),t.resumeToken instanceof Uint8Array?(_("YES"===process.env.USE_MOCK_PERSISTENCE,"Persisting non-string stream tokens is only supported with mock persistence ."),n=t.resumeToken.toString()):n=t.resumeToken,new qe(t.targetId,t.query.canonicalId(),r,n,t.sequenceNumber,e)},t}()
function $e(t,e){var n=t[0],r=t[1],i=e[0],o=e[1],a=z(n,i)
return 0===a?z(r,o):a}var Ze=function(){function t(t){this.maxElements=t,this.buffer=new kt($e),this.previousIndex=0}return t.prototype.nextIndex=function(){return++this.previousIndex},t.prototype.addElement=function(t){var e=[t,this.nextIndex()]
if(this.buffer.size<this.maxElements)this.buffer=this.buffer.add(e)
else{var n=this.buffer.last()
$e(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}},Object.defineProperty(t.prototype,"maxValue",{get:function(){return this.buffer.last()[0]},enumerable:!0,configurable:!0}),t}(),tn={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},en=function(){function t(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}return t.withCacheSize=function(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)},t.COLLECTION_DISABLED=-1,t.MINIMUM_CACHE_SIZE_BYTES=1048576,t.DEFAULT_CACHE_SIZE_BYTES=41943040,t.DEFAULT_COLLECTION_PERCENTILE=10,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,t.DEFAULT=new t(t.DEFAULT_CACHE_SIZE_BYTES,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),t.DISABLED=new t(t.COLLECTION_DISABLED,0,0),t}(),nn=function(){function t(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.hasRun=!1,this.gcTask=null}return t.prototype.start=function(){_(null===this.gcTask,"Cannot start an already started LruScheduler"),this.garbageCollector.params.cacheSizeCollectionThreshold!==en.COLLECTION_DISABLED&&this.scheduleGC()},t.prototype.stop=function(){this.gcTask&&(this.gcTask.cancel(),this.gcTask=null)},Object.defineProperty(t.prototype,"started",{get:function(){return null!==this.gcTask},enumerable:!0,configurable:!0}),t.prototype.scheduleGC=function(){var t=this
_(null===this.gcTask,"Cannot schedule GC while a task is pending")
var e=this.hasRun?3e5:6e4
y("LruGarbageCollector","Garbage collection scheduled in "+e+"ms"),this.gcTask=this.asyncQueue.enqueueAfterDelay(Z.LruGarbageCollection,e,function(){return t.gcTask=null,t.hasRun=!0,t.localStore.collectGarbage(t.garbageCollector).then(function(){return t.scheduleGC()}).catch(ln)})},t}(),rn=function(){function t(t,e){this.delegate=t,this.params=e}return t.prototype.calculateTargetCount=function(t,e){return this.delegate.getSequenceNumberCount(t).next(function(t){return Math.floor(e/100*t)})},t.prototype.nthSequenceNumber=function(t,e){var n=this
if(0===e)return Wt.resolve(ot.INVALID)
var r=new Ze(e)
return this.delegate.forEachTarget(t,function(t){return r.addElement(t.sequenceNumber)}).next(function(){return n.delegate.forEachOrphanedDocumentSequenceNumber(t,function(t){return r.addElement(t)})}).next(function(){return r.maxValue})},t.prototype.removeTargets=function(t,e,n){return this.delegate.removeTargets(t,e,n)},t.prototype.removeOrphanedDocuments=function(t,e){return this.delegate.removeOrphanedDocuments(t,e)},t.prototype.collect=function(t,e){var n=this
return this.params.cacheSizeCollectionThreshold===en.COLLECTION_DISABLED?(y("LruGarbageCollector","Garbage collection skipped; disabled"),Wt.resolve(tn)):this.getCacheSize(t).next(function(r){return r<n.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector","Garbage collection skipped; Cache size "+r+" is lower than threshold "+n.params.cacheSizeCollectionThreshold),tn):n.runGarbageCollection(t,e)})},t.prototype.getCacheSize=function(t){return this.delegate.getCacheSize(t)},t.prototype.runGarbageCollection=function(t,e){var n,r,i,a,s,u,c,h=this,l=Date.now()
return this.calculateTargetCount(t,this.params.percentileToCollect).next(function(e){return e>h.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of "+h.params.maximumSequenceNumbersToCollect+" from "+e),r=h.params.maximumSequenceNumbersToCollect):r=e,a=Date.now(),h.nthSequenceNumber(t,r)}).next(function(r){return n=r,s=Date.now(),h.removeTargets(t,n,e)}).next(function(e){return i=e,u=Date.now(),h.removeOrphanedDocuments(t,n)}).next(function(t){return c=Date.now(),p()<=o.DEBUG&&y("LruGarbageCollector","LRU Garbage Collection\n\tCounted targets in "+(a-l)+"ms\n\tDetermined least recently used "+r+" in "+(s-a)+"ms\n\tRemoved "+i+" targets in "+(u-s)+"ms\n\tRemoved "+t+" documents in "+(c-u)+"ms\nTotal Duration: "+(c-l)+"ms"),Wt.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})})},t}(),on="IndexedDbPersistence",an="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",sn="Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",un="This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.",cn=function(t){function e(e,n){var r=t.call(this)||this
return r.simpleDbTransaction=e,r.currentSequenceNumber=n,r}return u.__extends(e,t),e}(function(){}),hn=function(){function t(e,n,r,i,o,a,s){if(this.persistenceKey=e,this.clientId=n,this.queue=i,this.multiClientParams=s,this._started=!1,this.isPrimary=!1,this.networkEnabled=!0,this.windowUnloadHandler=null,this.inForeground=!1,this.documentVisibilityHandler=null,this.clientMetadataRefresher=null,this.lastGarbageCollectionTime=Number.NEGATIVE_INFINITY,this.primaryStateListener=function(t){return Promise.resolve()},!t.isAvailable())throw new T(E.UNIMPLEMENTED,un)
if(this.referenceDelegate=new mn(this,a),this.dbName=e+t.MAIN_DATABASE,this.serializer=new Je(o),this.document=r.document,this.allowTabSynchronization=void 0!==s,this.queryCache=new ue(this.referenceDelegate,this.serializer),this.indexManager=new ze,this.remoteDocumentCache=new be(this.serializer,this.indexManager,this.allowTabSynchronization),!r.window||!r.window.localStorage)throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.")
this.window=r.window,this.webStorage=this.window.localStorage}return t.getStore=function(t,e){if(t instanceof cn)return ee.getStore(t.simpleDbTransaction,e)
throw v("IndexedDbPersistence must use instances of IndexedDbTransaction")},t.createIndexedDbPersistence=function(e,n,r,i,o,a){return u.__awaiter(this,void 0,void 0,function(){var s
return u.__generator(this,function(u){switch(u.label){case 0:return[4,(s=new t(e,n,r,i,o,a)).start()]
case 1:return u.sent(),[2,s]}})})},t.createMultiClientIndexedDbPersistence=function(e,n,r,i,o,a,s){return u.__awaiter(this,void 0,void 0,function(){var c
return u.__generator(this,function(u){switch(u.label){case 0:return[4,(c=new t(e,n,r,i,o,a,s)).start()]
case 1:return u.sent(),[2,c]}})})},t.prototype.start=function(){var t=this
return _(!this.started,"IndexedDbPersistence double-started!"),_(null!==this.window,"Expected 'window' to be defined"),ee.openOrCreate(this.dbName,ke,new Ae(this.serializer)).then(function(e){return t.simpleDb=e,t.updateClientMetadataAndTryBecomePrimary()}).then(function(){return t.attachVisibilityHandler(),t.attachWindowUnloadHook(),t.scheduleClientMetadataAndPrimaryLeaseRefreshes(),t.startRemoteDocumentCache()}).then(function(){return t.simpleDb.runTransaction("readonly",[Be.store],function(e){return le(e).next(function(e){var n=t.multiClientParams?t.multiClientParams.sequenceNumberSyncer:void 0
t.listenSequence=new ot(e,n)})})}).then(function(){t._started=!0}).catch(function(e){return t.simpleDb&&t.simpleDb.close(),Promise.reject(e)})},t.prototype.startRemoteDocumentCache=function(){var t=this
return this.simpleDb.runTransaction("readonly",Ge,function(e){return t.remoteDocumentCache.start(e)})},t.prototype.setPrimaryStateListener=function(t){var e=this
return this.primaryStateListener=function(n){return u.__awaiter(e,void 0,void 0,function(){return u.__generator(this,function(e){return this.started?[2,t(n)]:[2]})})},t(this.isPrimary)},t.prototype.setDatabaseDeletedListener=function(t){var e=this
this.simpleDb.setVersionChangeListener(function(n){return u.__awaiter(e,void 0,void 0,function(){return u.__generator(this,function(e){switch(e.label){case 0:return null!==n.newVersion?[3,2]:[4,t()]
case 1:e.sent(),e.label=2
case 2:return[2]}})})})},t.prototype.setNetworkEnabled=function(t){var e=this
this.networkEnabled!==t&&(this.networkEnabled=t,this.queue.enqueueAndForget(function(){return u.__awaiter(e,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return this.started?[4,this.updateClientMetadataAndTryBecomePrimary()]:[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})}))},t.prototype.updateClientMetadataAndTryBecomePrimary=function(){var t=this
return this.simpleDb.runTransaction("readwrite",Ge,function(e){return pn(e).put(new He(t.clientId,Date.now(),t.networkEnabled,t.inForeground,t.remoteDocumentCache.lastProcessedDocumentChangeId)).next(function(){if(t.isPrimary)return t.verifyPrimaryLease(e).next(function(e){e||(t.isPrimary=!1,t.queue.enqueueAndForget(function(){return t.primaryStateListener(!1)}))})}).next(function(){return t.canActAsPrimary(e)}).next(function(n){var r=t.isPrimary
return t.isPrimary=n,r!==t.isPrimary&&t.queue.enqueueAndForget(function(){return t.primaryStateListener(t.isPrimary)}),r&&!t.isPrimary?t.releasePrimaryLeaseIfHeld(e):t.isPrimary?t.acquireOrExtendPrimaryLease(e):void 0})})},t.prototype.verifyPrimaryLease=function(t){var e=this
return fn(t).get(Re.key).next(function(t){return Wt.resolve(e.isLocalClient(t))})},t.prototype.removeClientMetadata=function(t){return pn(t).delete(this.clientId)},t.prototype.maybeGarbageCollectMultiClientState=function(){return u.__awaiter(this,void 0,void 0,function(){var e,n,r=this
return u.__generator(this,function(i){switch(i.label){case 0:return!this.isPrimary||this.isWithinAge(this.lastGarbageCollectionTime,18e5)?[3,2]:(this.lastGarbageCollectionTime=Date.now(),n=[],[4,this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",function(i){var o=t.getStore(i,He.store)
return o.loadAll().next(function(t){e=r.filterActiveClients(t,18e5),n=t.filter(function(t){return-1===e.indexOf(t)})}).next(function(){return Wt.forEach(n,function(t){return o.delete(t.clientId)})}).next(function(){if((e=e.filter(function(t){return t.clientId!==r.clientId})).length>0){var t=e.map(function(t){return t.lastProcessedDocumentChangeId||0}),n=Math.min.apply(Math,t)
return r.remoteDocumentCache.removeDocumentChangesThroughChangeId(i,n)}})})])
case 1:i.sent(),n.forEach(function(t){r.window.localStorage.removeItem(r.zombiedClientLocalStorageKey(t.clientId))}),i.label=2
case 2:return[2]}})})},t.prototype.scheduleClientMetadataAndPrimaryLeaseRefreshes=function(){var t=this
this.clientMetadataRefresher=this.queue.enqueueAfterDelay(Z.ClientMetadataRefresh,4e3,function(){return t.updateClientMetadataAndTryBecomePrimary().then(function(){return t.maybeGarbageCollectMultiClientState()}).then(function(){return t.scheduleClientMetadataAndPrimaryLeaseRefreshes()})})},t.prototype.isLocalClient=function(t){return!!t&&t.ownerId===this.clientId},t.prototype.canActAsPrimary=function(t){var e=this
return fn(t).get(Re.key).next(function(n){if(null!==n&&e.isWithinAge(n.leaseTimestampMs,5e3)&&!e.isClientZombied(n.ownerId)){if(e.isLocalClient(n)&&e.networkEnabled)return!0
if(!e.isLocalClient(n)){if(!n.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,sn)
return!1}}return!(!e.networkEnabled||!e.inForeground)||pn(t).loadAll().next(function(t){return void 0===e.filterActiveClients(t,5e3).find(function(t){if(e.clientId!==t.clientId){var n=!e.networkEnabled&&t.networkEnabled,r=!e.inForeground&&t.inForeground,i=e.networkEnabled===t.networkEnabled
if(n||r&&i)return!0}return!1})})}).next(function(t){return e.isPrimary!==t&&y(on,"Client "+(t?"is":"is not")+" eligible for a primary lease."),t})},t.prototype.shutdown=function(){return u.__awaiter(this,void 0,void 0,function(){var t=this
return u.__generator(this,function(e){switch(e.label){case 0:return this._started=!1,this.markClientZombied(),this.clientMetadataRefresher&&(this.clientMetadataRefresher.cancel(),this.clientMetadataRefresher=null),this.detachVisibilityHandler(),this.detachWindowUnloadHook(),[4,this.simpleDb.runTransaction("readwrite",[Re.store,He.store],function(e){return t.releasePrimaryLeaseIfHeld(e).next(function(){return t.removeClientMetadata(e)})})]
case 1:return e.sent(),this.simpleDb.close(),this.removeClientZombiedEntry(),[2]}})})},t.prototype.filterActiveClients=function(t,e){var n=this
return t.filter(function(t){return n.isWithinAge(t.updateTimeMs,e)&&!n.isClientZombied(t.clientId)})},t.prototype.getActiveClients=function(){var t=this
return this.simpleDb.runTransaction("readonly",[He.store],function(e){return pn(e).loadAll().next(function(e){return t.filterActiveClients(e,18e5).map(function(t){return t.clientId})})})},t.clearPersistence=function(e){return u.__awaiter(this,void 0,void 0,function(){var n
return u.__generator(this,function(r){switch(r.label){case 0:return t.isAvailable()?(n=e+t.MAIN_DATABASE,[4,ee.delete(n)]):[2,Promise.resolve()]
case 1:return r.sent(),[2]}})})},Object.defineProperty(t.prototype,"started",{get:function(){return this._started},enumerable:!0,configurable:!0}),t.prototype.getMutationQueue=function(t){return _(this.started,"Cannot initialize MutationQueue before persistence is started."),Qt.forUser(t,this.serializer,this.indexManager,this.referenceDelegate)},t.prototype.getQueryCache=function(){return _(this.started,"Cannot initialize QueryCache before persistence is started."),this.queryCache},t.prototype.getRemoteDocumentCache=function(){return _(this.started,"Cannot initialize RemoteDocumentCache before persistence is started."),this.remoteDocumentCache},t.prototype.getIndexManager=function(){return _(this.started,"Cannot initialize IndexManager before persistence is started."),this.indexManager},t.prototype.runTransaction=function(t,e,n){var r=this
return y(on,"Starting transaction:",t),this.simpleDb.runTransaction("readonly"===e?"readonly":"readwrite",Ge,function(i){return"readwrite-primary"===e?r.verifyPrimaryLease(i).next(function(e){if(!e)throw m("Failed to obtain primary lease for action '"+t+"'."),r.isPrimary=!1,r.queue.enqueueAndForget(function(){return r.primaryStateListener(!1)}),new T(E.FAILED_PRECONDITION,an)
return n(new cn(i,r.listenSequence.next()))}).next(function(t){return r.acquireOrExtendPrimaryLease(i).next(function(){return t})}):r.verifyAllowTabSynchronization(i).next(function(){return n(new cn(i,r.listenSequence.next()))})})},t.prototype.verifyAllowTabSynchronization=function(t){var e=this
return fn(t).get(Re.key).next(function(t){if(null!==t&&e.isWithinAge(t.leaseTimestampMs,5e3)&&!e.isClientZombied(t.ownerId)&&!e.isLocalClient(t)&&!t.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,sn)})},t.prototype.acquireOrExtendPrimaryLease=function(t){var e=new Re(this.clientId,this.allowTabSynchronization,Date.now())
return fn(t).put(Re.key,e)},t.isAvailable=function(){return ee.isAvailable()},t.buildStoragePrefix=function(t){var e=t.databaseId.projectId
return t.databaseId.isDefaultDatabase||(e+="."+t.databaseId.database),"firestore/"+t.persistenceKey+"/"+e+"/"},t.prototype.releasePrimaryLeaseIfHeld=function(t){var e=this,n=fn(t)
return n.get(Re.key).next(function(t){return e.isLocalClient(t)?(y(on,"Releasing primary lease."),n.delete(Re.key)):Wt.resolve()})},t.prototype.isWithinAge=function(t,e){var n=Date.now()
return!(t<n-e||t>n&&(m("Detected an update time that is in the future: "+t+" > "+n),1))},t.prototype.attachVisibilityHandler=function(){var t=this
null!==this.document&&"function"==typeof this.document.addEventListener&&(this.documentVisibilityHandler=function(){t.queue.enqueueAndForget(function(){return t.inForeground="visible"===t.document.visibilityState,t.updateClientMetadataAndTryBecomePrimary()})},this.document.addEventListener("visibilitychange",this.documentVisibilityHandler),this.inForeground="visible"===this.document.visibilityState)},t.prototype.detachVisibilityHandler=function(){this.documentVisibilityHandler&&(_(null!==this.document&&"function"==typeof this.document.addEventListener,"Expected 'document.addEventListener' to be a function"),this.document.removeEventListener("visibilitychange",this.documentVisibilityHandler),this.documentVisibilityHandler=null)},t.prototype.attachWindowUnloadHook=function(){var t=this
"function"==typeof this.window.addEventListener&&(this.windowUnloadHandler=function(){t.markClientZombied(),t.queue.enqueueAndForget(function(){return t.shutdown()})},this.window.addEventListener("unload",this.windowUnloadHandler))},t.prototype.detachWindowUnloadHook=function(){this.windowUnloadHandler&&(_("function"==typeof this.window.removeEventListener,"Expected 'window.removeEventListener' to be a function"),this.window.removeEventListener("unload",this.windowUnloadHandler),this.windowUnloadHandler=null)},t.prototype.isClientZombied=function(t){try{var e=null!==this.webStorage.getItem(this.zombiedClientLocalStorageKey(t))
return y(on,"Client '"+t+"' "+(e?"is":"is not")+" zombied in LocalStorage"),e}catch(t){return m(on,"Failed to get zombied client id.",t),!1}},t.prototype.markClientZombied=function(){try{this.webStorage.setItem(this.zombiedClientLocalStorageKey(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}},t.prototype.removeClientZombiedEntry=function(){try{this.webStorage.removeItem(this.zombiedClientLocalStorageKey(this.clientId))}catch(t){}},t.prototype.zombiedClientLocalStorageKey=function(t){return"firestore_zombie_"+this.persistenceKey+"_"+t},t.MAIN_DATABASE="main",t}()
function ln(t){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(e){if(!function(t){return t.code===E.FAILED_PRECONDITION&&t.message===an}(t))throw t
return y(on,"Unexpectedly lost primary lease"),[2]})})}function fn(t){return t.store(Re.store)}function pn(t){return t.store(He.store)}var dn,yn,mn=function(){function t(t,e){this.db=t,this.inMemoryPins=null,this.garbageCollector=new rn(this,e)}return t.prototype.getSequenceNumberCount=function(t){var e=this.orphanedDocmentCount(t)
return this.db.getQueryCache().getQueryCount(t).next(function(t){return e.next(function(e){return t+e})})},t.prototype.orphanedDocmentCount=function(t){var e=0
return this.forEachOrphanedDocumentSequenceNumber(t,function(t){e++}).next(function(){return e})},t.prototype.forEachTarget=function(t,e){return this.db.getQueryCache().forEachTarget(t,e)},t.prototype.forEachOrphanedDocumentSequenceNumber=function(t,e){return this.forEachOrphanedDocument(t,function(t,n){return e(n)})},t.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},t.prototype.addReference=function(t,e){return gn(t,e)},t.prototype.removeReference=function(t,e){return gn(t,e)},t.prototype.removeTargets=function(t,e,n){return this.db.getQueryCache().removeTargets(t,e,n)},t.prototype.removeMutationReference=function(t,e){return gn(t,e)},t.prototype.isPinned=function(t,e){return this.inMemoryPins.containsKey(e)?Wt.resolve(!0):function(t,e){var n=!1
return Xt(t).iterateSerial(function(r){return Kt(t,r,e).next(function(t){return t&&(n=!0),Wt.resolve(!t)})}).next(function(){return n})}(t,e)},t.prototype.removeOrphanedDocuments=function(t,e){var n=this,r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[],o=0
return this.forEachOrphanedDocument(t,function(a,s){if(s<=e){var u=n.isPinned(t,a).next(function(e){if(!e)return o++,r.getEntry(t,a).next(function(){return r.removeEntry(a),fe(t).delete([0,vt(a.path)])})})
i.push(u)}}).next(function(){return Wt.waitFor(i)}).next(function(){return r.apply(t)}).next(function(){return o})},t.prototype.removeTarget=function(t,e){var n=e.copy({sequenceNumber:t.currentSequenceNumber})
return this.db.getQueryCache().updateQueryData(t,n)},t.prototype.updateLimboDocument=function(t,e){return gn(t,e)},t.prototype.forEachOrphanedDocument=function(t,e){var n,r=fe(t),i=ot.INVALID
return r.iterate({index:Ve.documentTargetsIndex},function(t,r){var o=t[0],a=(t[1],r.path),s=r.sequenceNumber
0===o?(i!==ot.INVALID&&e(new ht(wt(n)),i),i=s,n=a):i=ot.INVALID}).next(function(){i!==ot.INVALID&&e(new ht(wt(n)),i)})},t.prototype.getCacheSize=function(t){return this.db.getRemoteDocumentCache().getSize(t)},t}()
function gn(t,e){return fe(t).put(function(t,e){return new Ve(0,vt(t.path),e)}(e,t.currentSequenceNumber))}!function(t){t[t.NullValue=0]="NullValue",t[t.BooleanValue=1]="BooleanValue",t[t.NumberValue=2]="NumberValue",t[t.TimestampValue=3]="TimestampValue",t[t.StringValue=4]="StringValue",t[t.BlobValue=5]="BlobValue",t[t.RefValue=6]="RefValue",t[t.GeoPointValue=7]="GeoPointValue",t[t.ArrayValue=8]="ArrayValue",t[t.ObjectValue=9]="ObjectValue"}(dn||(dn={})),function(t){t[t.Default=0]="Default",t[t.Estimate=1]="Estimate",t[t.Previous=2]="Previous"}(yn||(yn={}))
var vn=function(){function t(t,e){this.serverTimestampBehavior=t,this.timestampsInSnapshots=e}return t.fromSnapshotOptions=function(e,n){switch(e.serverTimestamps){case"estimate":return new t(yn.Estimate,n)
case"previous":return new t(yn.Previous,n)
case"none":case void 0:return new t(yn.Default,n)
default:return v("fromSnapshotOptions() called with invalid options.")}},t}(),_n=function(){function t(){}return t.prototype.toString=function(){var t=this.value()
return null===t?"null":t.toString()},t.prototype.defaultCompareTo=function(t){return _(this.typeOrder!==t.typeOrder,"Default compareTo should not be used for values of same type."),z(this.typeOrder,t.typeOrder)},t}(),bn=function(t){function e(){var e=t.call(this)||this
return e.typeOrder=dn.NullValue,e.internalValue=null,e}return u.__extends(e,t),e.prototype.value=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e},e.prototype.compareTo=function(t){return t instanceof e?0:this.defaultCompareTo(t)},e.INSTANCE=new e,e}(_n),wn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=dn.BooleanValue,n}return u.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue===t.internalValue},e.prototype.compareTo=function(t){return t instanceof e?z(this,t):this.defaultCompareTo(t)},e.of=function(t){return t?e.TRUE:e.FALSE},e.TRUE=new e(!0),e.FALSE=new e(!1),e}(_n),En=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=dn.NumberValue,n}return u.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.compareTo=function(t){return t instanceof e?(n=this.internalValue)<(r=t.internalValue)?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1:this.defaultCompareTo(t)
var n,r},e}(_n)
function Tn(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}var Sn,In=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u.__extends(e,t),e.prototype.isEqual=function(t){return t instanceof e&&Tn(this.internalValue,t.internalValue)},e}(En),Cn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u.__extends(e,t),e.prototype.isEqual=function(t){return t instanceof e&&Tn(this.internalValue,t.internalValue)},e.NAN=new e(NaN),e.POSITIVE_INFINITY=new e(1/0),e.NEGATIVE_INFINITY=new e(-1/0),e}(En),Nn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=dn.StringValue,n}return u.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue===t.internalValue},e.prototype.compareTo=function(t){return t instanceof e?z(this.internalValue,t.internalValue):this.defaultCompareTo(t)},e}(_n),kn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=dn.TimestampValue,n}return u.__extends(e,t),e.prototype.value=function(t){return!t||t.timestampsInSnapshots?this.internalValue:this.internalValue.toDate()},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue.isEqual(t.internalValue)},e.prototype.compareTo=function(t){return t instanceof e?this.internalValue._compareTo(t.internalValue):t instanceof An?-1:this.defaultCompareTo(t)},e}(_n),An=function(t){function e(e,n){var r=t.call(this)||this
return r.localWriteTime=e,r.previousValue=n,r.typeOrder=dn.TimestampValue,r}return u.__extends(e,t),e.prototype.value=function(t){return t&&t.serverTimestampBehavior===yn.Estimate?new kn(this.localWriteTime).value(t):t&&t.serverTimestampBehavior===yn.Previous&&this.previousValue?this.previousValue.value(t):null},e.prototype.isEqual=function(t){return t instanceof e&&this.localWriteTime.isEqual(t.localWriteTime)},e.prototype.compareTo=function(t){return t instanceof e?this.localWriteTime._compareTo(t.localWriteTime):t instanceof kn?1:this.defaultCompareTo(t)},e.prototype.toString=function(){return"<ServerTimestamp localTime="+this.localWriteTime.toString()+">"},e}(_n),Dn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=dn.BlobValue,n}return u.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue.isEqual(t.internalValue)},e.prototype.compareTo=function(t){return t instanceof e?this.internalValue._compareTo(t.internalValue):this.defaultCompareTo(t)},e}(_n),Rn=function(t){function e(e,n){var r=t.call(this)||this
return r.databaseId=e,r.key=n,r.typeOrder=dn.RefValue,r}return u.__extends(e,t),e.prototype.value=function(t){return this.key},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.databaseId.isEqual(t.databaseId)},e.prototype.compareTo=function(t){if(t instanceof e){var n=this.databaseId.compareTo(t.databaseId)
return 0!==n?n:ht.comparator(this.key,t.key)}return this.defaultCompareTo(t)},e}(_n),On=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=dn.GeoPointValue,n}return u.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue.isEqual(t.internalValue)},e.prototype.compareTo=function(t){return t instanceof e?this.internalValue._compareTo(t.internalValue):this.defaultCompareTo(t)},e}(_n),Pn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=dn.ObjectValue,n}return u.__extends(e,t),e.prototype.value=function(t){var e={}
return this.internalValue.inorderTraversal(function(n,r){e[n]=r.value(t)}),e},e.prototype.forEach=function(t){this.internalValue.inorderTraversal(t)},e.prototype.isEqual=function(t){if(t instanceof e){for(var n=this.internalValue.getIterator(),r=t.internalValue.getIterator();n.hasNext()&&r.hasNext();){var i=n.getNext(),o=r.getNext()
if(i.key!==o.key||!i.value.isEqual(o.value))return!1}return!n.hasNext()&&!r.hasNext()}return!1},e.prototype.compareTo=function(t){if(t instanceof e){for(var n=this.internalValue.getIterator(),r=t.internalValue.getIterator();n.hasNext()&&r.hasNext();){var i=n.getNext(),o=r.getNext(),a=z(i.key,o.key)||i.value.compareTo(o.value)
if(a)return a}return z(n.hasNext(),r.hasNext())}return this.defaultCompareTo(t)},e.prototype.set=function(t,n){if(_(!t.isEmpty(),"Cannot set field for empty path on ObjectValue"),1===t.length)return this.setChild(t.firstSegment(),n)
var r=this.child(t.firstSegment())
r instanceof e||(r=e.EMPTY)
var i=r.set(t.popFirst(),n)
return this.setChild(t.firstSegment(),i)},e.prototype.delete=function(t){if(_(!t.isEmpty(),"Cannot delete field for empty path on ObjectValue"),1===t.length)return new e(this.internalValue.remove(t.firstSegment()))
var n=this.child(t.firstSegment())
if(n instanceof e){var r=n.delete(t.popFirst())
return new e(this.internalValue.insert(t.firstSegment(),r))}return this},e.prototype.contains=function(t){return null!==this.field(t)},e.prototype.field=function(t){_(!t.isEmpty(),"Can't get field of empty path")
var n=this
return t.forEach(function(t){n=n instanceof e?n.internalValue.get(t):null}),n},e.prototype.fieldMask=function(){var t=new kt(ct.comparator)
return this.internalValue.forEach(function(n,r){var i=new ct([n])
if(r instanceof e){var o=r.fieldMask().fields
o.isEmpty()?t=t.add(i):o.forEach(function(e){t=t.add(i.child(e))})}else t=t.add(i)}),Mn.fromSet(t)},e.prototype.toString=function(){return this.internalValue.toString()},e.prototype.child=function(t){return this.internalValue.get(t)||void 0},e.prototype.setChild=function(t,n){return new e(this.internalValue.insert(t,n))},e.EMPTY=new e(new St(z)),e}(_n),xn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=dn.ArrayValue,n}return u.__extends(e,t),e.prototype.value=function(t){return this.internalValue.map(function(e){return e.value(t)})},e.prototype.contains=function(t){for(var e=0,n=this.internalValue;e<n.length;e++)if(n[e].isEqual(t))return!0
return!1},e.prototype.forEach=function(t){this.internalValue.forEach(t)},e.prototype.isEqual=function(t){if(t instanceof e){if(this.internalValue.length!==t.internalValue.length)return!1
for(var n=0;n<this.internalValue.length;n++)if(!this.internalValue[n].isEqual(t.internalValue[n]))return!1
return!0}return!1},e.prototype.compareTo=function(t){if(t instanceof e){for(var n=Math.min(this.internalValue.length,t.internalValue.length),r=0;r<n;r++){var i=this.internalValue[r].compareTo(t.internalValue[r])
if(i)return i}return z(this.internalValue.length,t.internalValue.length)}return this.defaultCompareTo(t)},e.prototype.toString=function(){return"["+this.internalValue.map(function(t){return t.toString()}).join(",")+"]"},e}(_n),Mn=function(){function t(t){this.fields=t}return t.fromSet=function(e){return new t(e)},t.fromArray=function(e){var n=new kt(ct.comparator)
return e.forEach(function(t){return n=n.add(t)}),new t(n)},t.prototype.covers=function(t){var e=!1
return this.fields.forEach(function(n){n.isPrefixOf(t)&&(e=!0)}),e},t.prototype.isEqual=function(t){return this.fields.isEqual(t.fields)},t}(),Ln=function(){function t(t,e){this.field=t,this.transform=e}return t.prototype.isEqual=function(t){return this.field.isEqual(t.field)&&this.transform.isEqual(t.transform)},t}(),Fn=function(t,e){this.version=t,this.transformResults=e}
!function(t){t[t.Set=0]="Set",t[t.Patch=1]="Patch",t[t.Transform=2]="Transform",t[t.Delete=3]="Delete"}(Sn||(Sn={}))
var Un=function(){function t(t,e){this.updateTime=t,this.exists=e,_(void 0===t||void 0===e,'Precondition can specify "exists" or "updateTime" but not both')}return t.exists=function(e){return new t(void 0,e)},t.updateTime=function(e){return new t(e)},Object.defineProperty(t.prototype,"isNone",{get:function(){return void 0===this.updateTime&&void 0===this.exists},enumerable:!0,configurable:!0}),t.prototype.isValidFor=function(t){return void 0!==this.updateTime?t instanceof de&&t.version.isEqual(this.updateTime):void 0!==this.exists?this.exists===t instanceof de:(_(this.isNone,"Precondition should be empty"),!0)},t.prototype.isEqual=function(t){return e=this.updateTime,n=t.updateTime,(null!=e?!(!n||!e.isEqual(n)):e===n)&&this.exists===t.exists
var e,n},t.NONE=new t,t}(),qn=function(){function t(){}return t.prototype.verifyKeyMatches=function(t){null!=t&&_(t.key.isEqual(this.key),"Can only apply a mutation to a document with the same key")},t.getPostMutationVersion=function(t){return t instanceof de?t.version:Tt.MIN},t}(),Vn=function(t){function e(e,n,r){var i=t.call(this)||this
return i.key=e,i.value=n,i.precondition=r,i.type=Sn.Set,i}return u.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){this.verifyKeyMatches(t),_(null==e.transformResults,"Transform results received by SetMutation.")
var n=e.version
return new de(this.key,n,this.value,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t
var r=qn.getPostMutationVersion(t)
return new de(this.key,r,this.value,{hasLocalMutations:!0})},e.prototype.extractBaseValue=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.value.isEqual(t.value)&&this.precondition.isEqual(t.precondition)},e}(qn),Bn=function(t){function e(e,n,r,i){var o=t.call(this)||this
return o.key=e,o.data=n,o.fieldMask=r,o.precondition=i,o.type=Sn.Patch,o}return u.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){if(this.verifyKeyMatches(t),_(null==e.transformResults,"Transform results received by PatchMutation."),!this.precondition.isValidFor(t))return new me(this.key,e.version)
var n=this.patchDocument(t)
return new de(this.key,e.version,n,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t
var r=qn.getPostMutationVersion(t),i=this.patchDocument(t)
return new de(this.key,r,i,{hasLocalMutations:!0})},e.prototype.extractBaseValue=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.fieldMask.isEqual(t.fieldMask)&&this.precondition.isEqual(t.precondition)},e.prototype.patchDocument=function(t){var e
return e=t instanceof de?t.data:Pn.EMPTY,this.patchObject(e)},e.prototype.patchObject=function(t){var e=this
return this.fieldMask.fields.forEach(function(n){if(!n.isEmpty()){var r=e.data.field(n)
t=null!==r?t.set(n,r):t.delete(n)}}),t},e}(qn),jn=function(t){function e(e,n){var r=t.call(this)||this
return r.key=e,r.fieldTransforms=n,r.type=Sn.Transform,r.precondition=Un.exists(!0),r}return u.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){if(this.verifyKeyMatches(t),_(null!=e.transformResults,"Transform results missing for TransformMutation."),!this.precondition.isValidFor(t))return new me(this.key,e.version)
var n=this.requireDocument(t),r=this.serverTransformResults(t,e.transformResults),i=e.version,o=this.transformObject(n.data,r)
return new de(this.key,i,o,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t
var r=this.requireDocument(t),i=this.localTransformResults(n,t,e),o=this.transformObject(r.data,i)
return new de(this.key,r.version,o,{hasLocalMutations:!0})},e.prototype.extractBaseValue=function(t){for(var e=null,n=0,r=this.fieldTransforms;n<r.length;n++){var i=r[n],o=t instanceof de?t.field(i.field):void 0,a=i.transform.computeBaseValue(o||null)
null!=a&&(e=null==e?Pn.EMPTY.set(i.field,a):e.set(i.field,a))}return e},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&Y(this.fieldTransforms,t.fieldTransforms)&&this.precondition.isEqual(t.precondition)},e.prototype.requireDocument=function(t){_(t instanceof de,"Unknown MaybeDocument type "+t)
var e=t
return _(e.key.isEqual(this.key),"Can only transform a document with the same key"),e},e.prototype.serverTransformResults=function(t,e){var n=[]
_(this.fieldTransforms.length===e.length,"server transform result count ("+e.length+") should match field transform count ("+this.fieldTransforms.length+")")
for(var r=0;r<e.length;r++){var i=this.fieldTransforms[r],o=i.transform,a=null
t instanceof de&&(a=t.field(i.field)),n.push(o.applyToRemoteDocument(a,e[r]))}return n},e.prototype.localTransformResults=function(t,e,n){for(var r=[],i=0,o=this.fieldTransforms;i<o.length;i++){var a=o[i],s=a.transform,u=null
e instanceof de&&(u=e.field(a.field)),null===u&&n instanceof de&&(u=n.field(a.field)),r.push(s.applyToLocalView(u,t))}return r},e.prototype.transformObject=function(t,e){_(e.length===this.fieldTransforms.length,"TransformResults length mismatch.")
for(var n=0;n<this.fieldTransforms.length;n++){var r=this.fieldTransforms[n].field
t=t.set(r,e[n])}return t},e}(qn),Wn=function(t){function e(e,n){var r=t.call(this)||this
return r.key=e,r.precondition=n,r.type=Sn.Delete,r}return u.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){return this.verifyKeyMatches(t),_(null==e.transformResults,"Transform results received by DeleteMutation."),new ye(this.key,e.version,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){return this.verifyKeyMatches(t),this.precondition.isValidFor(t)?(t&&_(t.key.isEqual(this.key),"Can only apply mutation to document with same key"),new ye(this.key,Tt.forDeletedDoc())):t},e.prototype.extractBaseValue=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.precondition.isEqual(t.precondition)},e}(qn),Qn=function(){function t(t,e,n){this.remoteDocumentCache=t,this.mutationQueue=e,this.indexManager=n}return t.prototype.getDocument=function(t,e){var n=this
return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(t,e).next(function(r){return n.getDocumentInternal(t,e,r)})},t.prototype.getDocumentInternal=function(t,e,n){return this.remoteDocumentCache.getEntry(t,e).next(function(t){for(var r=0,i=n;r<i.length;r++)t=i[r].applyToLocalView(e,t)
return t})},t.prototype.applyLocalMutationsToDocuments=function(t,e,n){var r=Ot()
return e.forEach(function(t,e){for(var i=0,o=n;i<o.length;i++)e=o[i].applyToLocalView(t,e)
r=r.insert(t,e)}),r},t.prototype.getDocuments=function(t,e){var n=this
return this.remoteDocumentCache.getEntries(t,e).next(function(e){return n.getLocalViewOfDocuments(t,e)})},t.prototype.getLocalViewOfDocuments=function(t,e){var n=this
return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(function(r){var i=n.applyLocalMutationsToDocuments(t,e,r),o=Rt()
return i.forEach(function(t,e){e||(e=new ye(t,Tt.forDeletedDoc())),o=o.insert(t,e)}),o})},t.prototype.getDocumentsMatchingQuery=function(t,e){return e.isDocumentQuery()?this.getDocumentsMatchingDocumentQuery(t,e.path):e.isCollectionGroupQuery()?this.getDocumentsMatchingCollectionGroupQuery(t,e):this.getDocumentsMatchingCollectionQuery(t,e)},t.prototype.getDocumentsMatchingDocumentQuery=function(t,e){return this.getDocument(t,new ht(e)).next(function(t){var e=xt()
return t instanceof de&&(e=e.insert(t.key,t)),e})},t.prototype.getDocumentsMatchingCollectionGroupQuery=function(t,e){var n=this
_(e.path.isEmpty(),"Currently we only support collection group queries at the root.")
var r=e.collectionGroup,i=xt()
return this.indexManager.getCollectionParents(t,r).next(function(o){return Wt.forEach(o,function(o){var a=e.asCollectionQueryAtPath(o.child(r))
return n.getDocumentsMatchingCollectionQuery(t,a).next(function(t){t.forEach(function(t,e){i=i.insert(t,e)})})}).next(function(){return i})})},t.prototype.getDocumentsMatchingCollectionQuery=function(t,e){var n,r,i=this
return this.remoteDocumentCache.getDocumentsMatchingQuery(t,e).next(function(r){return n=r,i.mutationQueue.getAllMutationBatchesAffectingQuery(t,e)}).next(function(e){return r=e,i.addMissingBaseDocuments(t,r,n).next(function(t){n=t
for(var e=0,i=r;e<i.length;e++)for(var o=i[e],a=0,s=o.mutations;a<s.length;a++){var u=s[a],c=u.key,h=n.get(c),l=u.applyToLocalView(h,h,o.localWriteTime)
n=l instanceof de?n.insert(c,l):n.remove(c)}})}).next(function(){return n.forEach(function(t,r){e.matches(r)||(n=n.remove(t))}),n})},t.prototype.addMissingBaseDocuments=function(t,e,n){for(var r=Ut(),i=0,o=e;i<o.length;i++)for(var a=0,s=o[i].mutations;a<s.length;a++){var u=s[a]
u instanceof Bn&&null===n.get(u.key)&&(r=r.add(u.key))}var c=n
return this.remoteDocumentCache.getEntries(t,r).next(function(t){return t.forEach(function(t,e){null!==e&&e instanceof de&&(c=c.insert(t,e))}),c})},t}(),Kn=function(){function t(){this.refsByKey=new kt(Hn.compareByKey),this.refsByTarget=new kt(Hn.compareByTargetId)}return t.prototype.isEmpty=function(){return this.refsByKey.isEmpty()},t.prototype.addReference=function(t,e){var n=new Hn(t,e)
this.refsByKey=this.refsByKey.add(n),this.refsByTarget=this.refsByTarget.add(n)},t.prototype.addReferences=function(t,e){var n=this
t.forEach(function(t){return n.addReference(t,e)})},t.prototype.removeReference=function(t,e){this.removeRef(new Hn(t,e))},t.prototype.removeReferences=function(t,e){var n=this
t.forEach(function(t){return n.removeReference(t,e)})},t.prototype.removeReferencesForId=function(t){var e=this,n=ht.EMPTY,r=new Hn(n,t),i=new Hn(n,t+1),o=[]
return this.refsByTarget.forEachInRange([r,i],function(t){e.removeRef(t),o.push(t.key)}),o},t.prototype.removeAllReferences=function(){var t=this
this.refsByKey.forEach(function(e){return t.removeRef(e)})},t.prototype.removeRef=function(t){this.refsByKey=this.refsByKey.delete(t),this.refsByTarget=this.refsByTarget.delete(t)},t.prototype.referencesForId=function(t){var e=ht.EMPTY,n=new Hn(e,t),r=new Hn(e,t+1),i=Ut()
return this.refsByTarget.forEachInRange([n,r],function(t){i=i.add(t.key)}),i},t.prototype.containsKey=function(t){var e=new Hn(t,0),n=this.refsByKey.firstAfterOrEqual(e)
return null!==n&&t.isEqual(n.key)},t}(),Hn=function(){function t(t,e){this.key=t,this.targetOrBatchId=e}return t.compareByKey=function(t,e){return ht.comparator(t.key,e.key)||z(t.targetOrBatchId,e.targetOrBatchId)},t.compareByTargetId=function(t,e){return z(t.targetOrBatchId,e.targetOrBatchId)||ht.comparator(t.key,e.key)},t}(),Gn=function(){function t(t,e){this.persistence=t,this.localViewReferences=new Kn,this.queryDataByTarget={},_(t.started,"LocalStore was passed an unstarted persistence implementation"),this.persistence.referenceDelegate.setInMemoryPins(this.localViewReferences),this.mutationQueue=t.getMutationQueue(e),this.remoteDocuments=t.getRemoteDocumentCache(),this.queryCache=t.getQueryCache(),this.localDocuments=new Qn(this.remoteDocuments,this.mutationQueue,this.persistence.getIndexManager())}return t.prototype.handleUserChange=function(t){var e=this
return this.persistence.runTransaction("Handle user change","readonly",function(n){var r
return e.mutationQueue.getAllMutationBatches(n).next(function(i){return r=i,e.mutationQueue=e.persistence.getMutationQueue(t),e.localDocuments=new Qn(e.remoteDocuments,e.mutationQueue,e.persistence.getIndexManager()),e.mutationQueue.getAllMutationBatches(n)}).next(function(t){for(var i=[],o=[],a=Ut(),s=0,u=r;s<u.length;s++){var c=u[s]
i.push(c.batchId)
for(var h=0,l=c.mutations;h<l.length;h++){var f=l[h]
a=a.add(f.key)}}for(var p=0,d=t;p<d.length;p++){c=d[p],o.push(c.batchId)
for(var y=0,m=c.mutations;y<m.length;y++)f=m[y],a=a.add(f.key)}return e.localDocuments.getDocuments(n,a).next(function(t){return{affectedDocuments:t,removedBatchIds:i,addedBatchIds:o}})})})},t.prototype.localWrite=function(t){var e=this,n=Et.now(),r=t.reduce(function(t,e){return t.add(e.key)},Ut())
return this.persistence.runTransaction("Locally write mutations","readwrite",function(i){return e.localDocuments.getDocuments(i,r).next(function(r){for(var o=[],a=0,s=t;a<s.length;a++){var u=s[a],c=u.extractBaseValue(r.get(u.key))
null!=c&&o.push(new Bn(u.key,c,c.fieldMask(),Un.exists(!0)))}return e.mutationQueue.addMutationBatch(i,n,o,t).next(function(t){var e=t.applyToLocalDocumentSet(r)
return{batchId:t.batchId,changes:e}})})})},t.prototype.lookupMutationDocuments=function(t){var e=this
return this.persistence.runTransaction("Lookup mutation documents","readonly",function(n){return e.mutationQueue.lookupMutationKeys(n,t).next(function(t){return t?e.localDocuments.getDocuments(n,t):Wt.resolve(null)})})},t.prototype.acknowledgeBatch=function(t){var e=this
return this.persistence.runTransaction("Acknowledge batch","readwrite-primary",function(n){var r=t.batch.keys(),i=e.remoteDocuments.newChangeBuffer()
return e.mutationQueue.acknowledgeBatch(n,t.batch,t.streamToken).next(function(){return e.applyWriteToRemoteDocuments(n,t,i)}).next(function(){return i.apply(n)}).next(function(){return e.mutationQueue.performConsistencyCheck(n)}).next(function(){return e.localDocuments.getDocuments(n,r)})})},t.prototype.rejectBatch=function(t){var e=this
return this.persistence.runTransaction("Reject batch","readwrite-primary",function(n){var r
return e.mutationQueue.lookupMutationBatch(n,t).next(function(t){return _(null!==t,"Attempt to reject nonexistent batch!"),r=t.keys(),e.mutationQueue.removeMutationBatch(n,t)}).next(function(){return e.mutationQueue.performConsistencyCheck(n)}).next(function(){return e.localDocuments.getDocuments(n,r)})})},t.prototype.getHighestUnacknowledgedBatchId=function(){var t=this
return this.persistence.runTransaction("Get highest unacknowledged batch id","readonly",function(e){return t.mutationQueue.getHighestUnacknowledgedBatchId(e)})},t.prototype.getLastStreamToken=function(){var t=this
return this.persistence.runTransaction("Get last stream token","readonly",function(e){return t.mutationQueue.getLastStreamToken(e)})},t.prototype.setLastStreamToken=function(t){var e=this
return this.persistence.runTransaction("Set last stream token","readwrite-primary",function(n){return e.mutationQueue.setLastStreamToken(n,t)})},t.prototype.getLastRemoteSnapshotVersion=function(){var t=this
return this.persistence.runTransaction("Get last remote snapshot version","readonly",function(e){return t.queryCache.getLastRemoteSnapshotVersion(e)})},t.prototype.applyRemoteEvent=function(e){var n=this,r=this.remoteDocuments.newChangeBuffer(),i=e.snapshotVersion
return this.persistence.runTransaction("Apply remote event","readwrite-primary",function(o){var a=[]
N(e.targetChanges,function(e,r){var s=n.queryDataByTarget[e]
if(s){a.push(n.queryCache.removeMatchingKeys(o,r.removedDocuments,e).next(function(){return n.queryCache.addMatchingKeys(o,r.addedDocuments,e)}))
var u=r.resumeToken
if(u.length>0){var c=s.copy({resumeToken:u,snapshotVersion:i})
n.queryDataByTarget[e]=c,t.shouldPersistQueryData(s,c,r)&&a.push(n.queryCache.updateQueryData(o,c))}}})
var s=Rt(),u=Ut()
if(e.documentUpdates.forEach(function(t,e){u=u.add(t)}),a.push(r.getEntries(o,u).next(function(t){e.documentUpdates.forEach(function(i,u){var c=t.get(i)
null==c||u.version.compareTo(c.version)>0||0===u.version.compareTo(c.version)&&c.hasPendingWrites?(r.addEntry(u),s=s.insert(i,u)):u instanceof ye&&u.version.isEqual(Tt.MIN)?(r.removeEntry(i),s=s.insert(i,u)):y("LocalStore","Ignoring outdated watch update for ",i,". Current version:",c.version," Watch version:",u.version),e.resolvedLimboDocuments.has(i)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,i))})})),!i.isEqual(Tt.MIN)){var c=n.queryCache.getLastRemoteSnapshotVersion(o).next(function(t){return _(i.compareTo(t)>=0,"Watch stream reverted to previous snapshot?? "+i+" < "+t),n.queryCache.setTargetsMetadata(o,o.currentSequenceNumber,i)})
a.push(c)}return Wt.waitFor(a).next(function(){return r.apply(o)}).next(function(){return n.localDocuments.getLocalViewOfDocuments(o,s)})})},t.shouldPersistQueryData=function(t,e,n){return _(e.resumeToken.length>0,"Attempted to persist query data with no resume token"),0===t.resumeToken.length||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=this.RESUME_TOKEN_MAX_AGE_MICROS||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0},t.prototype.notifyLocalViewChanges=function(t){var e=this
return this.persistence.runTransaction("notifyLocalViewChanges","readwrite",function(n){return Wt.forEach(t,function(t){return e.localViewReferences.addReferences(t.addedKeys,t.targetId),e.localViewReferences.removeReferences(t.removedKeys,t.targetId),Wt.forEach(t.removedKeys,function(t){return e.persistence.referenceDelegate.removeReference(n,t)})})})},t.prototype.nextMutationBatch=function(t){var e=this
return this.persistence.runTransaction("Get next mutation batch","readonly",function(n){return void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)})},t.prototype.readDocument=function(t){var e=this
return this.persistence.runTransaction("read document","readonly",function(n){return e.localDocuments.getDocument(n,t)})},t.prototype.allocateQuery=function(t){var e=this
return this.persistence.runTransaction("Allocate query","readwrite",function(n){var r
return e.queryCache.getQueryData(n,t).next(function(i){return i?(r=i,Wt.resolve()):e.queryCache.allocateTargetId(n).next(function(i){return r=new Xe(t,i,Qe.Listen,n.currentSequenceNumber),e.queryCache.addQueryData(n,r)})}).next(function(){return _(!e.queryDataByTarget[r.targetId],"Tried to allocate an already allocated query: "+t),e.queryDataByTarget[r.targetId]=r,r})})},t.prototype.releaseQuery=function(t,e){var n=this,r=e?"readwrite":"readwrite-primary"
return this.persistence.runTransaction("Release query",r,function(r){return n.queryCache.getQueryData(r,t).next(function(i){_(null!=i,"Tried to release nonexistent query: "+t)
var o=i.targetId,a=n.queryDataByTarget[o],s=n.localViewReferences.removeReferencesForId(o)
return delete n.queryDataByTarget[o],e?Wt.resolve():Wt.forEach(s,function(t){return n.persistence.referenceDelegate.removeReference(r,t)}).next(function(){return n.persistence.referenceDelegate.removeTarget(r,a)})})})},t.prototype.executeQuery=function(t){var e=this
return this.persistence.runTransaction("Execute query","readonly",function(n){return e.localDocuments.getDocumentsMatchingQuery(n,t)})},t.prototype.remoteDocumentKeys=function(t){var e=this
return this.persistence.runTransaction("Remote document keys","readonly",function(n){return e.queryCache.getMatchingKeysForTargetId(n,t)})},t.prototype.getActiveClients=function(){return this.persistence.getActiveClients()},t.prototype.removeCachedMutationBatchMetadata=function(t){this.mutationQueue.removeCachedMutationKeys(t)},t.prototype.setNetworkEnabled=function(t){this.persistence.setNetworkEnabled(t)},t.prototype.applyWriteToRemoteDocuments=function(t,e,n){var r=this,i=e.batch,o=i.keys(),a=Wt.resolve()
return o.forEach(function(r){a=a.next(function(){return n.getEntry(t,r)}).next(function(t){var o=t,a=e.docVersions.get(r)
_(null!==a,"ackVersions should contain every doc in the write."),(!o||o.version.compareTo(a)<0)&&((o=i.applyToRemoteDocument(r,o,e))?n.addEntry(o):_(!t,"Mutation batch "+i+" applied to document "+t+" resulted in null"))})}),a.next(function(){return r.mutationQueue.removeMutationBatch(t,i)})},t.prototype.collectGarbage=function(t){var e=this
return this.persistence.runTransaction("Collect garbage","readwrite-primary",function(n){return t.collect(n,e.queryDataByTarget)})},t.prototype.getQueryForTarget=function(t){var e=this
return this.queryDataByTarget[t]?Promise.resolve(this.queryDataByTarget[t].query):this.persistence.runTransaction("Get query data","readonly",function(n){return e.queryCache.getQueryDataForTarget(n,t).next(function(t){return t?t.query:null})})},t.prototype.getNewDocumentChanges=function(){var t=this
return this.persistence.runTransaction("Get new document changes","readonly",function(e){return t.remoteDocuments.getNewDocumentChanges(e)})},t.RESUME_TOKEN_MAX_AGE_MICROS=3e8,t}(),zn=function(){function t(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nextBatchId=1,this.lastStreamToken=w(),this.batchesByDocumentKey=new kt(Hn.compareByKey)}return t.prototype.checkEmpty=function(t){return Wt.resolve(0===this.mutationQueue.length)},t.prototype.acknowledgeBatch=function(t,e,n){var r=e.batchId,i=this.indexOfExistingBatchId(r,"acknowledged")
_(0===i,"Can only acknowledge the first batch in the mutation queue")
var o=this.mutationQueue[i]
return _(r===o.batchId,"Queue ordering failure: expected batch "+r+", got batch "+o.batchId),this.lastStreamToken=n,Wt.resolve()},t.prototype.getLastStreamToken=function(t){return Wt.resolve(this.lastStreamToken)},t.prototype.setLastStreamToken=function(t,e){return this.lastStreamToken=e,Wt.resolve()},t.prototype.addMutationBatch=function(t,e,n,r){_(0!==r.length,"Mutation batches should not be empty")
var i=this.nextBatchId
this.nextBatchId++,this.mutationQueue.length>0&&_(this.mutationQueue[this.mutationQueue.length-1].batchId<i,"Mutation batchIDs must be monotonically increasing order")
var o=new Bt(i,e,n,r)
this.mutationQueue.push(o)
for(var a=0,s=r;a<s.length;a++){var u=s[a]
this.batchesByDocumentKey=this.batchesByDocumentKey.add(new Hn(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast())}return Wt.resolve(o)},t.prototype.lookupMutationBatch=function(t,e){return Wt.resolve(this.findMutationBatch(e))},t.prototype.lookupMutationKeys=function(t,e){var n=this.findMutationBatch(e)
return _(null!=n,"Failed to find local mutation batch."),Wt.resolve(n.keys())},t.prototype.getNextMutationBatchAfterBatchId=function(t,e){var n=e+1,r=this.indexOfBatchId(n),i=r<0?0:r
return Wt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)},t.prototype.getHighestUnacknowledgedBatchId=function(){return Wt.resolve(0===this.mutationQueue.length?-1:this.nextBatchId-1)},t.prototype.getAllMutationBatches=function(t){return Wt.resolve(this.mutationQueue.slice())},t.prototype.getAllMutationBatchesAffectingDocumentKey=function(t,e){var n=this,r=new Hn(e,0),i=new Hn(e,Number.POSITIVE_INFINITY),o=[]
return this.batchesByDocumentKey.forEachInRange([r,i],function(t){_(e.isEqual(t.key),"Should only iterate over a single key's batches")
var r=n.findMutationBatch(t.targetOrBatchId)
_(null!==r,"Batches in the index must exist in the main table"),o.push(r)}),Wt.resolve(o)},t.prototype.getAllMutationBatchesAffectingDocumentKeys=function(t,e){var n=this,r=new kt(z)
return e.forEach(function(t){var e=new Hn(t,0),i=new Hn(t,Number.POSITIVE_INFINITY)
n.batchesByDocumentKey.forEachInRange([e,i],function(e){_(t.isEqual(e.key),"For each key, should only iterate over a single key's batches"),r=r.add(e.targetOrBatchId)})}),Wt.resolve(this.findMutationBatches(r))},t.prototype.getAllMutationBatchesAffectingQuery=function(t,e){_(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
var n=e.path,r=n.length+1,i=n
ht.isDocumentKey(i)||(i=i.child(""))
var o=new Hn(new ht(i),0),a=new kt(z)
return this.batchesByDocumentKey.forEachWhile(function(t){var e=t.key.path
return!!n.isPrefixOf(e)&&(e.length===r&&(a=a.add(t.targetOrBatchId)),!0)},o),Wt.resolve(this.findMutationBatches(a))},t.prototype.findMutationBatches=function(t){var e=this,n=[]
return t.forEach(function(t){var r=e.findMutationBatch(t)
null!==r&&n.push(r)}),n},t.prototype.removeMutationBatch=function(t,e){var n=this
_(0===this.indexOfExistingBatchId(e.batchId,"removed"),"Can only remove the first entry of the mutation queue"),this.mutationQueue.shift()
var r=this.batchesByDocumentKey
return Wt.forEach(e.mutations,function(i){var o=new Hn(i.key,e.batchId)
return r=r.delete(o),n.referenceDelegate.removeMutationReference(t,i.key)}).next(function(){n.batchesByDocumentKey=r})},t.prototype.removeCachedMutationKeys=function(t){},t.prototype.containsKey=function(t,e){var n=new Hn(e,0),r=this.batchesByDocumentKey.firstAfterOrEqual(n)
return Wt.resolve(e.isEqual(r&&r.key))},t.prototype.performConsistencyCheck=function(t){return 0===this.mutationQueue.length&&_(this.batchesByDocumentKey.isEmpty(),"Document leak -- detected dangling mutation references when queue is empty."),Wt.resolve()},t.prototype.indexOfExistingBatchId=function(t,e){var n=this.indexOfBatchId(t)
return _(n>=0&&n<this.mutationQueue.length,"Batches must exist to be "+e),n},t.prototype.indexOfBatchId=function(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId},t.prototype.findMutationBatch=function(t){var e=this.indexOfBatchId(t)
if(e<0||e>=this.mutationQueue.length)return null
var n=this.mutationQueue[e]
return _(n.batchId===t,"If found batch must match"),n},t}(),Yn=function(){function t(t){this.persistence=t,this.queries=new ge(function(t){return t.canonicalId()}),this.lastRemoteSnapshotVersion=Tt.MIN,this.highestTargetId=0,this.highestSequenceNumber=0,this.references=new Kn,this.targetCount=0,this.targetIdGenerator=Zt.forQueryCache()}return t.prototype.getTargetCount=function(t){return Wt.resolve(this.targetCount)},t.prototype.forEachTarget=function(t,e){return this.queries.forEach(function(t,n){return e(n)}),Wt.resolve()},t.prototype.getLastRemoteSnapshotVersion=function(t){return Wt.resolve(this.lastRemoteSnapshotVersion)},t.prototype.getHighestSequenceNumber=function(t){return Wt.resolve(this.highestSequenceNumber)},t.prototype.allocateTargetId=function(t){var e=this.targetIdGenerator.after(this.highestTargetId)
return this.highestTargetId=e,Wt.resolve(e)},t.prototype.setTargetsMetadata=function(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.highestSequenceNumber&&(this.highestSequenceNumber=e),Wt.resolve()},t.prototype.saveQueryData=function(t){this.queries.set(t.query,t)
var e=t.targetId
e>this.highestTargetId&&(this.highestTargetId=e),t.sequenceNumber>this.highestSequenceNumber&&(this.highestSequenceNumber=t.sequenceNumber)},t.prototype.addQueryData=function(t,e){return _(!this.queries.has(e.query),"Adding a query that already exists"),this.saveQueryData(e),this.targetCount+=1,Wt.resolve()},t.prototype.updateQueryData=function(t,e){return _(this.queries.has(e.query),"Updating a non-existent query"),this.saveQueryData(e),Wt.resolve()},t.prototype.removeQueryData=function(t,e){return _(this.targetCount>0,"Removing a target from an empty cache"),_(this.queries.has(e.query),"Removing a non-existent target from the cache"),this.queries.delete(e.query),this.references.removeReferencesForId(e.targetId),this.targetCount-=1,Wt.resolve()},t.prototype.removeTargets=function(t,e,n){var r=this,i=0,o=[]
return this.queries.forEach(function(a,s){s.sequenceNumber<=e&&!n[s.targetId]&&(r.queries.delete(a),o.push(r.removeMatchingKeysForTargetId(t,s.targetId)),i++)}),Wt.waitFor(o).next(function(){return i})},t.prototype.getQueryCount=function(t){return Wt.resolve(this.targetCount)},t.prototype.getQueryData=function(t,e){var n=this.queries.get(e)||null
return Wt.resolve(n)},t.prototype.getQueryDataForTarget=function(t,e){return v("Not yet implemented.")},t.prototype.addMatchingKeys=function(t,e,n){this.references.addReferences(e,n)
var r=this.persistence.referenceDelegate,i=[]
return r&&e.forEach(function(e){i.push(r.addReference(t,e))}),Wt.waitFor(i)},t.prototype.removeMatchingKeys=function(t,e,n){this.references.removeReferences(e,n)
var r=this.persistence.referenceDelegate,i=[]
return r&&e.forEach(function(e){i.push(r.removeReference(t,e))}),Wt.waitFor(i)},t.prototype.removeMatchingKeysForTargetId=function(t,e){return this.references.removeReferencesForId(e),Wt.resolve()},t.prototype.getMatchingKeysForTargetId=function(t,e){var n=this.references.referencesForId(e)
return Wt.resolve(n)},t.prototype.containsKey=function(t,e){return Wt.resolve(this.references.containsKey(e))},t}(),Xn=function(){function t(t,e){this.indexManager=t,this.sizer=e,this.docs=new St(ht.comparator),this.newDocumentChanges=Ut(),this.size=0}return t.prototype.addEntry=function(t,e){var n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.sizer(e)
return this.docs=this.docs.insert(n,{maybeDocument:e,size:o}),this.newDocumentChanges=this.newDocumentChanges.add(n),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())},t.prototype.removeEntry=function(t){var e=this.docs.get(t)
e&&(this.docs=this.docs.remove(t),this.size-=e.size)},t.prototype.getEntry=function(t,e){var n=this.docs.get(e)
return Wt.resolve(n?n.maybeDocument:null)},t.prototype.getEntries=function(t,e){var n=this,r=Ot()
return e.forEach(function(t){var e=n.docs.get(t)
r=r.insert(t,e?e.maybeDocument:null)}),Wt.resolve(r)},t.prototype.getDocumentsMatchingQuery=function(t,e){_(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
for(var n=xt(),r=new ht(e.path.child("")),i=this.docs.getIteratorFrom(r);i.hasNext();){var o=i.getNext(),a=o.key,s=o.value.maybeDocument
if(!e.path.isPrefixOf(a.path))break
s instanceof de&&e.matches(s)&&(n=n.insert(s.key,s))}return Wt.resolve(n)},t.prototype.forEachDocumentKey=function(t,e){return Wt.forEach(this.docs,function(t){return e(t)})},t.prototype.getNewDocumentChanges=function(t){var e=this,n=Rt()
return this.newDocumentChanges.forEach(function(t){var r=e.docs.get(t),i=r?r.maybeDocument:new ye(t,Tt.forDeletedDoc())
n=n.insert(t,i)}),this.newDocumentChanges=Ut(),Wt.resolve(n)},t.prototype.newChangeBuffer=function(){return new t.RemoteDocumentChangeBuffer(this)},t.prototype.getSize=function(t){return Wt.resolve(this.size)},t.RemoteDocumentChangeBuffer=function(t){function e(e){var n=t.call(this)||this
return n.documentCache=e,n}return u.__extends(e,t),e.prototype.applyChanges=function(t){var e=this,n=[]
return this.changes.forEach(function(r,i){i?n.push(e.documentCache.addEntry(t,i)):e.documentCache.removeEntry(r)}),Wt.waitFor(n)},e.prototype.getFromCache=function(t,e){return this.documentCache.getEntry(t,e)},e.prototype.getAllFromCache=function(t,e){return this.documentCache.getEntries(t,e)},e}(ve),t}(),Jn=function(){function t(t,e){var n=this
this.clientId=t,this.mutationQueues={},this.listenSequence=new ot(0),this._started=!1,this._started=!0,this.referenceDelegate=e(this),this.queryCache=new Yn(this),this.indexManager=new Ce,this.remoteDocumentCache=new Xn(this.indexManager,function(t){return n.referenceDelegate.documentSize(t)})}return t.createLruPersistence=function(e,n,r){return new t(e,function(t){return new tr(t,new Je(n),r)})},t.createEagerPersistence=function(e){return new t(e,function(t){return new Zn(t)})},t.prototype.shutdown=function(){return this._started=!1,Promise.resolve()},Object.defineProperty(t.prototype,"started",{get:function(){return this._started},enumerable:!0,configurable:!0}),t.prototype.getActiveClients=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){return[2,[this.clientId]]})})},t.prototype.setPrimaryStateListener=function(t){return t(!0)},t.prototype.setDatabaseDeletedListener=function(){},t.prototype.setNetworkEnabled=function(t){},t.prototype.getIndexManager=function(){return this.indexManager},t.prototype.getMutationQueue=function(t){var e=this.mutationQueues[t.toKey()]
return e||(e=new zn(this.indexManager,this.referenceDelegate),this.mutationQueues[t.toKey()]=e),e},t.prototype.getQueryCache=function(){return this.queryCache},t.prototype.getRemoteDocumentCache=function(){return this.remoteDocumentCache},t.prototype.runTransaction=function(t,e,n){var r=this
y("MemoryPersistence","Starting transaction:",t)
var i=new $n(this.listenSequence.next())
return this.referenceDelegate.onTransactionStarted(),n(i).next(function(t){return r.referenceDelegate.onTransactionCommitted(i).next(function(){return t})}).toPromise()},t.prototype.mutationQueuesContainKey=function(t,e){return Wt.or((n=this.mutationQueues,r=[],k(n,function(t,e){return r.push(e)}),r).map(function(n){return function(){return n.containsKey(t,e)}}))
var n,r},t}(),$n=function(t){this.currentSequenceNumber=t},Zn=function(){function t(t){this.persistence=t,this.inMemoryPins=null,this._orphanedDocuments=null}return Object.defineProperty(t.prototype,"orphanedDocuments",{get:function(){if(this._orphanedDocuments)return this._orphanedDocuments
throw v("orphanedDocuments is only valid during a transaction.")},enumerable:!0,configurable:!0}),t.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},t.prototype.addReference=function(t,e){return this.orphanedDocuments.delete(e),Wt.resolve()},t.prototype.removeReference=function(t,e){return this.orphanedDocuments.add(e),Wt.resolve()},t.prototype.removeMutationReference=function(t,e){return this.orphanedDocuments.add(e),Wt.resolve()},t.prototype.removeTarget=function(t,e){var n=this,r=this.persistence.getQueryCache()
return r.getMatchingKeysForTargetId(t,e.targetId).next(function(t){t.forEach(function(t){return n.orphanedDocuments.add(t)})}).next(function(){return r.removeQueryData(t,e)})},t.prototype.onTransactionStarted=function(){this._orphanedDocuments=new Set},t.prototype.onTransactionCommitted=function(t){var e=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer()
return Wt.forEach(this.orphanedDocuments,function(r){return e.isReferenced(t,r).next(function(t){t||n.removeEntry(r)})}).next(function(){return e._orphanedDocuments=null,n.apply(t)})},t.prototype.updateLimboDocument=function(t,e){var n=this
return this.isReferenced(t,e).next(function(t){t?n.orphanedDocuments.delete(e):n.orphanedDocuments.add(e)})},t.prototype.documentSize=function(t){return 0},t.prototype.isReferenced=function(t,e){var n=this
return Wt.or([function(){return n.persistence.getQueryCache().containsKey(t,e)},function(){return n.persistence.mutationQueuesContainKey(t,e)},function(){return Wt.resolve(n.inMemoryPins.containsKey(e))}])},t}(),tr=function(){function t(t,e,n){this.persistence=t,this.serializer=e,this.inMemoryPins=null,this.orphanedSequenceNumbers=new ge(function(t){return vt(t.path)}),this.garbageCollector=new rn(this,n)}return t.prototype.onTransactionStarted=function(){},t.prototype.onTransactionCommitted=function(t){return Wt.resolve()},t.prototype.forEachTarget=function(t,e){return this.persistence.getQueryCache().forEachTarget(t,e)},t.prototype.getSequenceNumberCount=function(t){var e=this.orphanedDocumentCount(t)
return this.persistence.getQueryCache().getTargetCount(t).next(function(t){return e.next(function(e){return t+e})})},t.prototype.orphanedDocumentCount=function(t){var e=0
return this.forEachOrphanedDocumentSequenceNumber(t,function(t){e++}).next(function(){return e})},t.prototype.forEachOrphanedDocumentSequenceNumber=function(t,e){var n=this
return Wt.forEach(this.orphanedSequenceNumbers,function(r,i){return n.isPinned(t,r,i).next(function(t){return t?Wt.resolve():e(i)})})},t.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},t.prototype.removeTargets=function(t,e,n){return this.persistence.getQueryCache().removeTargets(t,e,n)},t.prototype.removeOrphanedDocuments=function(t,e){var n=this,r=0,i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer()
return i.forEachDocumentKey(t,function(i){return n.isPinned(t,i,e).next(function(t){t||(r++,o.removeEntry(i))})}).next(function(){return o.apply(t)}).next(function(){return r})},t.prototype.removeMutationReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Wt.resolve()},t.prototype.removeTarget=function(t,e){var n=e.copy({sequenceNumber:t.currentSequenceNumber})
return this.persistence.getQueryCache().updateQueryData(t,n)},t.prototype.addReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Wt.resolve()},t.prototype.removeReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Wt.resolve()},t.prototype.updateLimboDocument=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Wt.resolve()},t.prototype.documentSize=function(t){var e,n=this.serializer.toDbRemoteDocument(t)
if(n.document)e=n.document
else if(n.unknownDocument)e=n.unknownDocument
else{if(!n.noDocument)throw v("Unknown remote document type")
e=n.noDocument}return JSON.stringify(e).length},t.prototype.isPinned=function(t,e,n){var r=this
return Wt.or([function(){return r.persistence.mutationQueuesContainKey(t,e)},function(){return Wt.resolve(r.inMemoryPins.containsKey(e))},function(){return r.persistence.getQueryCache().containsKey(t,e)},function(){var t=r.orphanedSequenceNumbers.get(e)
return Wt.resolve(void 0!==t&&t>n)}])},t.prototype.getCacheSize=function(t){return this.persistence.getRemoteDocumentCache().getSize(t)},t}(),er=Number,nr=er.MIN_SAFE_INTEGER||-(Math.pow(2,53)-1),rr=er.MAX_SAFE_INTEGER||Math.pow(2,53)-1,ir=er.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}
function or(t){return null==t}function ar(t){return ir(t)&&t<=rr&&t>=nr}var sr,ur=1e3,cr=1.5,hr=6e4,lr=function(){function t(t,e,n,r,i){void 0===n&&(n=ur),void 0===r&&(r=cr),void 0===i&&(i=hr),this.queue=t,this.timerId=e,this.initialDelayMs=n,this.backoffFactor=r,this.maxDelayMs=i,this.currentBaseMs=0,this.timerPromise=null,this.lastAttemptTime=Date.now(),this.reset()}return t.prototype.reset=function(){this.currentBaseMs=0},t.prototype.resetToMax=function(){this.currentBaseMs=this.maxDelayMs},t.prototype.backoffAndRun=function(t){var e=this
this.cancel()
var n=Math.floor(this.currentBaseMs+this.jitterDelayMs()),r=Math.max(0,Date.now()-this.lastAttemptTime),i=Math.max(0,n-r)
this.currentBaseMs>0&&y("ExponentialBackoff","Backing off for "+i+" ms (base delay: "+this.currentBaseMs+" ms, delay with jitter: "+n+" ms, last attempt: "+r+" ms ago)"),this.timerPromise=this.queue.enqueueAfterDelay(this.timerId,i,function(){return e.lastAttemptTime=Date.now(),t()}),this.currentBaseMs*=this.backoffFactor,this.currentBaseMs<this.initialDelayMs&&(this.currentBaseMs=this.initialDelayMs),this.currentBaseMs>this.maxDelayMs&&(this.currentBaseMs=this.maxDelayMs)},t.prototype.cancel=function(){null!==this.timerPromise&&(this.timerPromise.cancel(),this.timerPromise=null)},t.prototype.jitterDelayMs=function(){return(Math.random()-.5)*this.currentBaseMs},t}()
!function(t){t[t.Initial=0]="Initial",t[t.Starting=1]="Starting",t[t.Open=2]="Open",t[t.Error=3]="Error",t[t.Backoff=4]="Backoff"}(sr||(sr={}))
var fr,pr,dr=function(){function t(t,e,n,r,i,o){this.queue=t,this.idleTimerId=n,this.connection=r,this.credentialsProvider=i,this.listener=o,this.state=sr.Initial,this.closeCount=0,this.idleTimer=null,this.stream=null,this.backoff=new lr(t,e)}return t.prototype.isStarted=function(){return this.state===sr.Starting||this.state===sr.Open||this.state===sr.Backoff},t.prototype.isOpen=function(){return this.state===sr.Open},t.prototype.start=function(){this.state!==sr.Error?(_(this.state===sr.Initial,"Already started"),this.auth()):this.performBackoff()},t.prototype.stop=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return this.isStarted()?[4,this.close(sr.Initial)]:[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})},t.prototype.inhibitBackoff=function(){_(!this.isStarted(),"Can only inhibit backoff in a stopped state"),this.state=sr.Initial,this.backoff.reset()},t.prototype.markIdle=function(){var t=this
this.isOpen()&&null===this.idleTimer&&(this.idleTimer=this.queue.enqueueAfterDelay(this.idleTimerId,6e4,function(){return t.handleIdleCloseTimer()}))},t.prototype.sendRequest=function(t){this.cancelIdleCheck(),this.stream.send(t)},t.prototype.handleIdleCloseTimer=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){return this.isOpen()?[2,this.close(sr.Initial)]:[2]})})},t.prototype.cancelIdleCheck=function(){this.idleTimer&&(this.idleTimer.cancel(),this.idleTimer=null)},t.prototype.close=function(t,e){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(n){switch(n.label){case 0:return _(this.isStarted(),"Only started streams should be closed."),_(t===sr.Error||or(e),"Can't provide an error when not in an error state."),this.cancelIdleCheck(),this.backoff.cancel(),this.closeCount++,t!==sr.Error?this.backoff.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.backoff.resetToMax()):e&&e.code===E.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.tearDown(),this.stream.close(),this.stream=null),this.state=t,[4,this.listener.onClose(e)]
case 1:return n.sent(),[2]}})})},t.prototype.tearDown=function(){},t.prototype.auth=function(){var t=this
_(this.state===sr.Initial,"Must be in initial state to auth"),this.state=sr.Starting
var e=this.getCloseGuardedDispatcher(this.closeCount),n=this.closeCount
this.credentialsProvider.getToken().then(function(e){t.closeCount===n&&t.startStream(e)},function(n){e(function(){var e=new T(E.UNKNOWN,"Fetching auth token failed: "+n.message)
return t.handleStreamClose(e)})})},t.prototype.startStream=function(t){var e=this
_(this.state===sr.Starting,"Trying to start stream in a non-starting state")
var n=this.getCloseGuardedDispatcher(this.closeCount)
this.stream=this.startRpc(t),this.stream.onOpen(function(){n(function(){return _(e.state===sr.Starting,"Expected stream to be in state Starting, but was "+e.state),e.state=sr.Open,e.listener.onOpen()})}),this.stream.onClose(function(t){n(function(){return e.handleStreamClose(t)})}),this.stream.onMessage(function(t){n(function(){return e.onMessage(t)})})},t.prototype.performBackoff=function(){var t=this
_(this.state===sr.Error,"Should only perform backoff when in Error state"),this.state=sr.Backoff,this.backoff.backoffAndRun(function(){return u.__awaiter(t,void 0,void 0,function(){return u.__generator(this,function(t){return _(this.state===sr.Backoff,"Backoff elapsed but state is now: "+this.state),this.state=sr.Initial,this.start(),_(this.isStarted(),"PersistentStream should have started"),[2]})})})},t.prototype.handleStreamClose=function(t){return _(this.isStarted(),"Can't handle server close on non-started stream"),y("PersistentStream","close with error: "+t),this.stream=null,this.close(sr.Error,t)},t.prototype.getCloseGuardedDispatcher=function(t){var e=this
return function(n){e.queue.enqueueAndForget(function(){return e.closeCount===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())})}},t}(),yr=function(t){function e(e,n,r,i,o){var a=t.call(this,e,Z.ListenStreamConnectionBackoff,Z.ListenStreamIdle,n,r,o)||this
return a.serializer=i,a}return u.__extends(e,t),e.prototype.startRpc=function(t){return this.connection.openStream("Listen",t)},e.prototype.onMessage=function(t){this.backoff.reset()
var e=this.serializer.fromWatchChange(t),n=this.serializer.versionFromListenResponse(t)
return this.listener.onWatchChange(e,n)},e.prototype.watch=function(t){var e={}
e.database=this.serializer.encodedDatabaseId,e.addTarget=this.serializer.toTarget(t)
var n=this.serializer.toListenRequestLabels(t)
n&&(e.labels=n),this.sendRequest(e)},e.prototype.unwatch=function(t){var e={}
e.database=this.serializer.encodedDatabaseId,e.removeTarget=t,this.sendRequest(e)},e}(dr),mr=function(t){function e(e,n,r,i,o){var a=t.call(this,e,Z.WriteStreamConnectionBackoff,Z.WriteStreamIdle,n,r,o)||this
return a.serializer=i,a.handshakeComplete_=!1,a.lastStreamToken=w(),a}return u.__extends(e,t),Object.defineProperty(e.prototype,"handshakeComplete",{get:function(){return this.handshakeComplete_},enumerable:!0,configurable:!0}),e.prototype.start=function(){this.handshakeComplete_=!1,t.prototype.start.call(this)},e.prototype.tearDown=function(){this.handshakeComplete_&&this.writeMutations([])},e.prototype.startRpc=function(t){return this.connection.openStream("Write",t)},e.prototype.onMessage=function(t){if(_(!!t.streamToken,"Got a write response without a stream token"),this.lastStreamToken=t.streamToken,this.handshakeComplete_){this.backoff.reset()
var e=this.serializer.fromWriteResults(t.writeResults,t.commitTime),n=this.serializer.fromVersion(t.commitTime)
return this.listener.onMutationResult(n,e)}return _(!t.writeResults||0===t.writeResults.length,"Got mutation results for handshake"),this.handshakeComplete_=!0,this.listener.onHandshakeComplete()},e.prototype.writeHandshake=function(){_(this.isOpen(),"Writing handshake requires an opened stream"),_(!this.handshakeComplete_,"Handshake already completed")
var t={}
t.database=this.serializer.encodedDatabaseId,this.sendRequest(t)},e.prototype.writeMutations=function(t){var e=this
_(this.isOpen(),"Writing mutations requires an opened stream"),_(this.handshakeComplete_,"Handshake must be complete before writing mutations"),_(this.lastStreamToken.length>0,"Trying to write mutation without a token")
var n={streamToken:this.lastStreamToken,writes:t.map(function(t){return e.serializer.toMutation(t)})}
this.sendRequest(n)},e}(dr),gr=function(){function t(t,e,n,r){this.queue=t,this.connection=e,this.credentials=n,this.serializer=r}return t.prototype.newPersistentWriteStream=function(t){return new mr(this.queue,this.connection,this.credentials,this.serializer,t)},t.prototype.newPersistentWatchStream=function(t){return new yr(this.queue,this.connection,this.credentials,this.serializer,t)},t.prototype.commit=function(t){var e=this,n={database:this.serializer.encodedDatabaseId,writes:t.map(function(t){return e.serializer.toMutation(t)})}
return this.invokeRPC("Commit",n).then(function(t){return e.serializer.fromWriteResults(t.writeResults,t.commitTime)})},t.prototype.lookup=function(t){var e=this,n={database:this.serializer.encodedDatabaseId,documents:t.map(function(t){return e.serializer.toName(t)})}
return this.invokeStreamingRPC("BatchGetDocuments",n).then(function(n){var r=Rt()
n.forEach(function(t){var n=e.serializer.fromMaybeDocument(t)
r=r.insert(n.key,n)})
var i=[]
return t.forEach(function(t){var e=r.get(t)
_(!!e,"Missing entity in write response for "+t),i.push(e)}),i})},t.prototype.invokeRPC=function(t,e){var n=this
return this.credentials.getToken().then(function(r){return n.connection.invokeRPC(t,e,r)}).catch(function(t){throw t.code===E.UNAUTHENTICATED&&n.credentials.invalidateToken(),t})},t.prototype.invokeStreamingRPC=function(t,e){var n=this
return this.credentials.getToken().then(function(r){return n.connection.invokeStreamingRPC(t,e,r)}).catch(function(t){throw t.code===E.UNAUTHENTICATED&&n.credentials.invalidateToken(),t})},t}(),vr=function(){function t(t){this.datastore=t,this.readVersions=Lt(),this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}return t.prototype.lookup=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n=this
return u.__generator(this,function(r){switch(r.label){case 0:if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.")
return[4,this.datastore.lookup(t)]
case 1:return(e=r.sent()).forEach(function(t){t instanceof ye||t instanceof de?n.recordVersion(t):v("Document in a transaction was a "+t.constructor.name)}),[2,e]}})})},t.prototype.set=function(t,e){this.write(e.toMutations(t,this.precondition(t))),this.writtenDocs.add(t)},t.prototype.update=function(t,e){try{this.write(e.toMutations(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t)},t.prototype.delete=function(t){this.write([new Wn(t,this.precondition(t))]),this.writtenDocs.add(t)},t.prototype.commit=function(){return u.__awaiter(this,void 0,void 0,function(){var t
return u.__generator(this,function(e){switch(e.label){case 0:if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError
if(t=this.readVersions,this.mutations.forEach(function(e){t=t.remove(e.key)}),!t.isEmpty())throw new T(E.INVALID_ARGUMENT,"Every document read in a transaction must also be written.")
return[4,this.datastore.commit(this.mutations)]
case 1:return e.sent(),this.committed=!0,[2]}})})},t.prototype.recordVersion=function(t){var e
if(t instanceof de)e=t.version
else{if(!(t instanceof ye))throw v("Document in a transaction was a "+t.constructor.name)
e=Tt.forDeletedDoc()}var n=this.readVersions.get(t.key)
if(null!==n){if(!e.isEqual(n))throw new T(E.ABORTED,"Document version changed between two reads.")}else this.readVersions=this.readVersions.insert(t.key,e)},t.prototype.precondition=function(t){var e=this.readVersions.get(t)
return!this.writtenDocs.has(t)&&e?Un.updateTime(e):Un.NONE},t.prototype.preconditionForUpdate=function(t){var e=this.readVersions.get(t)
if(!this.writtenDocs.has(t)&&e){if(e.isEqual(Tt.forDeletedDoc()))throw new T(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.")
return Un.updateTime(e)}return Un.exists(!0)},t.prototype.write=function(t){this.ensureCommitNotCalled(),this.mutations=this.mutations.concat(t)},t.prototype.ensureCommitNotCalled=function(){_(!this.committed,"A transaction object cannot be used after its update callback has been invoked.")},t}()
!function(t){t[t.Unknown=0]="Unknown",t[t.Online=1]="Online",t[t.Offline=2]="Offline"}(fr||(fr={})),function(t){t[t.RemoteStore=0]="RemoteStore",t[t.SharedClientState=1]="SharedClientState"}(pr||(pr={}))
var _r,br=function(){function t(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state=fr.Unknown,this.watchStreamFailures=0,this.onlineStateTimer=null,this.shouldWarnClientIsOffline=!0}return t.prototype.handleWatchStreamStart=function(){var t=this
0===this.watchStreamFailures&&(this.setAndBroadcast(fr.Unknown),_(null===this.onlineStateTimer,"onlineStateTimer shouldn't be started yet"),this.onlineStateTimer=this.asyncQueue.enqueueAfterDelay(Z.OnlineStateTimeout,1e4,function(){return t.onlineStateTimer=null,_(t.state===fr.Unknown,"Timer should be canceled if we transitioned to a different state."),t.logClientOfflineWarningIfNecessary("Backend didn't respond within 10 seconds."),t.setAndBroadcast(fr.Offline),Promise.resolve()}))},t.prototype.handleWatchStreamFailure=function(t){this.state===fr.Online?(this.setAndBroadcast(fr.Unknown),_(0===this.watchStreamFailures,"watchStreamFailures must be 0"),_(null===this.onlineStateTimer,"onlineStateTimer must be null")):(this.watchStreamFailures++,this.watchStreamFailures>=1&&(this.clearOnlineStateTimer(),this.logClientOfflineWarningIfNecessary("Connection failed 1 times. Most recent error: "+t.toString()),this.setAndBroadcast(fr.Offline)))},t.prototype.set=function(t){this.clearOnlineStateTimer(),this.watchStreamFailures=0,t===fr.Online&&(this.shouldWarnClientIsOffline=!1),this.setAndBroadcast(t)},t.prototype.setAndBroadcast=function(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))},t.prototype.logClientOfflineWarningIfNecessary=function(t){var e="Could not reach Cloud Firestore backend. "+t+"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend."
this.shouldWarnClientIsOffline?(m(e),this.shouldWarnClientIsOffline=!1):y("OnlineStateTracker",e)},t.prototype.clearOnlineStateTimer=function(){null!==this.onlineStateTimer&&(this.onlineStateTimer.cancel(),this.onlineStateTimer=null)},t}()
function wr(t){switch(t){case E.OK:return v("Treated status OK as error")
case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1
case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0
default:return v("Unknown status code: "+t)}}function Er(t){if(void 0===t)return m("GRPC error has no .code"),E.UNKNOWN
switch(t){case _r.OK:return E.OK
case _r.CANCELLED:return E.CANCELLED
case _r.UNKNOWN:return E.UNKNOWN
case _r.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED
case _r.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED
case _r.INTERNAL:return E.INTERNAL
case _r.UNAVAILABLE:return E.UNAVAILABLE
case _r.UNAUTHENTICATED:return E.UNAUTHENTICATED
case _r.INVALID_ARGUMENT:return E.INVALID_ARGUMENT
case _r.NOT_FOUND:return E.NOT_FOUND
case _r.ALREADY_EXISTS:return E.ALREADY_EXISTS
case _r.PERMISSION_DENIED:return E.PERMISSION_DENIED
case _r.FAILED_PRECONDITION:return E.FAILED_PRECONDITION
case _r.ABORTED:return E.ABORTED
case _r.OUT_OF_RANGE:return E.OUT_OF_RANGE
case _r.UNIMPLEMENTED:return E.UNIMPLEMENTED
case _r.DATA_LOSS:return E.DATA_LOSS
default:return v("Unknown status code: "+t)}}function Tr(t){if(void 0===t)return _r.OK
switch(t){case E.OK:return _r.OK
case E.CANCELLED:return _r.CANCELLED
case E.UNKNOWN:return _r.UNKNOWN
case E.DEADLINE_EXCEEDED:return _r.DEADLINE_EXCEEDED
case E.RESOURCE_EXHAUSTED:return _r.RESOURCE_EXHAUSTED
case E.INTERNAL:return _r.INTERNAL
case E.UNAVAILABLE:return _r.UNAVAILABLE
case E.UNAUTHENTICATED:return _r.UNAUTHENTICATED
case E.INVALID_ARGUMENT:return _r.INVALID_ARGUMENT
case E.NOT_FOUND:return _r.NOT_FOUND
case E.ALREADY_EXISTS:return _r.ALREADY_EXISTS
case E.PERMISSION_DENIED:return _r.PERMISSION_DENIED
case E.FAILED_PRECONDITION:return _r.FAILED_PRECONDITION
case E.ABORTED:return _r.ABORTED
case E.OUT_OF_RANGE:return _r.OUT_OF_RANGE
case E.UNIMPLEMENTED:return _r.UNIMPLEMENTED
case E.DATA_LOSS:return _r.DATA_LOSS
default:return v("Unknown status code: "+t)}}!function(t){t[t.OK=0]="OK",t[t.CANCELLED=1]="CANCELLED",t[t.UNKNOWN=2]="UNKNOWN",t[t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",t[t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",t[t.NOT_FOUND=5]="NOT_FOUND",t[t.ALREADY_EXISTS=6]="ALREADY_EXISTS",t[t.PERMISSION_DENIED=7]="PERMISSION_DENIED",t[t.UNAUTHENTICATED=16]="UNAUTHENTICATED",t[t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",t[t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",t[t.ABORTED=10]="ABORTED",t[t.OUT_OF_RANGE=11]="OUT_OF_RANGE",t[t.UNIMPLEMENTED=12]="UNIMPLEMENTED",t[t.INTERNAL=13]="INTERNAL",t[t.UNAVAILABLE=14]="UNAVAILABLE",t[t.DATA_LOSS=15]="DATA_LOSS"}(_r||(_r={}))
var Sr,Ir,Cr=function(){function t(t){this.comparator=t?function(e,n){return t(e,n)||ht.comparator(e.key,n.key)}:function(t,e){return ht.comparator(t.key,e.key)},this.keyedMap=xt(),this.sortedSet=new St(this.comparator)}return t.emptySet=function(e){return new t(e.comparator)},t.prototype.has=function(t){return null!=this.keyedMap.get(t)},t.prototype.get=function(t){return this.keyedMap.get(t)},t.prototype.first=function(){return this.sortedSet.minKey()},t.prototype.last=function(){return this.sortedSet.maxKey()},t.prototype.isEmpty=function(){return this.sortedSet.isEmpty()},t.prototype.indexOf=function(t){var e=this.keyedMap.get(t)
return e?this.sortedSet.indexOf(e):-1},Object.defineProperty(t.prototype,"size",{get:function(){return this.sortedSet.size},enumerable:!0,configurable:!0}),t.prototype.forEach=function(t){this.sortedSet.inorderTraversal(function(e,n){return t(e),!1})},t.prototype.add=function(t){var e=this.delete(t.key)
return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))},t.prototype.delete=function(t){var e=this.get(t)
return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this},t.prototype.isEqual=function(e){if(!(e instanceof t))return!1
if(this.size!==e.size)return!1
for(var n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();n.hasNext();){var i=n.getNext().key,o=r.getNext().key
if(!i.isEqual(o))return!1}return!0},t.prototype.toString=function(){var t=[]
return this.forEach(function(e){t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"},t.prototype.copy=function(e,n){var r=new t
return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r},t}()
!function(t){t[t.Added=0]="Added",t[t.Removed=1]="Removed",t[t.Modified=2]="Modified",t[t.Metadata=3]="Metadata"}(Sr||(Sr={})),function(t){t[t.Local=0]="Local",t[t.Synced=1]="Synced"}(Ir||(Ir={}))
var Nr,kr=function(){function t(){this.changeMap=new St(ht.comparator)}return t.prototype.track=function(t){var e=t.doc.key,n=this.changeMap.get(e)
n?t.type!==Sr.Added&&n.type===Sr.Metadata?this.changeMap=this.changeMap.insert(e,t):t.type===Sr.Metadata&&n.type!==Sr.Removed?this.changeMap=this.changeMap.insert(e,{type:n.type,doc:t.doc}):t.type===Sr.Modified&&n.type===Sr.Modified?this.changeMap=this.changeMap.insert(e,{type:Sr.Modified,doc:t.doc}):t.type===Sr.Modified&&n.type===Sr.Added?this.changeMap=this.changeMap.insert(e,{type:Sr.Added,doc:t.doc}):t.type===Sr.Removed&&n.type===Sr.Added?this.changeMap=this.changeMap.remove(e):t.type===Sr.Removed&&n.type===Sr.Modified?this.changeMap=this.changeMap.insert(e,{type:Sr.Removed,doc:n.doc}):t.type===Sr.Added&&n.type===Sr.Removed?this.changeMap=this.changeMap.insert(e,{type:Sr.Modified,doc:t.doc}):v("unsupported combination of changes: "+JSON.stringify(t)+" after "+JSON.stringify(n)):this.changeMap=this.changeMap.insert(e,t)},t.prototype.getChanges=function(){var t=[]
return this.changeMap.inorderTraversal(function(e,n){t.push(n)}),t},t}(),Ar=function(){function t(t,e,n,r,i,o,a,s){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=s}return t.fromInitialDocuments=function(e,n,r,i){var o=[]
return n.forEach(function(t){o.push({type:Sr.Added,doc:t})}),new t(e,n,Cr.emptySet(n),o,r,i,!0,!1)},Object.defineProperty(t.prototype,"hasPendingWrites",{get:function(){return!this.mutatedKeys.isEmpty()},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&this.query.isEqual(t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1
var e=this.docChanges,n=t.docChanges
if(e.length!==n.length)return!1
for(var r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1
return!0},t}(),Dr=function(){function t(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}return t.createSynthesizedRemoteEventForCurrentChange=function(e,n){var r,i=((r={})[e]=Rr.createSynthesizedTargetChangeForCurrentChange(e,n),r)
return new t(Tt.MIN,i,Vt(),Rt(),Ut())},t}(),Rr=function(){function t(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}return t.createSynthesizedTargetChangeForCurrentChange=function(e,n){return new t(w(),n,Ut(),Ut(),Ut())},t}(),Or=function(t,e,n,r){this.updatedTargetIds=t,this.removedTargetIds=e,this.key=n,this.newDoc=r},Pr=function(t,e){this.targetId=t,this.existenceFilter=e}
!function(t){t[t.NoChange=0]="NoChange",t[t.Added=1]="Added",t[t.Removed=2]="Removed",t[t.Current=3]="Current",t[t.Reset=4]="Reset"}(Nr||(Nr={}))
var xr=function(t,e,n,r){void 0===n&&(n=w()),void 0===r&&(r=null),this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r},Mr=function(){function t(){this.pendingResponses=0,this.documentChanges=Ur(),this._resumeToken=w(),this._current=!1,this._hasPendingChanges=!0}return Object.defineProperty(t.prototype,"current",{get:function(){return this._current},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"resumeToken",{get:function(){return this._resumeToken},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPending",{get:function(){return 0!==this.pendingResponses},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasPendingChanges",{get:function(){return this._hasPendingChanges},enumerable:!0,configurable:!0}),t.prototype.updateResumeToken=function(t){t.length>0&&(this._hasPendingChanges=!0,this._resumeToken=t)},t.prototype.toTargetChange=function(){var t=Ut(),e=Ut(),n=Ut()
return this.documentChanges.forEach(function(r,i){switch(i){case Sr.Added:t=t.add(r)
break
case Sr.Modified:e=e.add(r)
break
case Sr.Removed:n=n.add(r)
break
default:v("Encountered invalid change type: "+i)}}),new Rr(this._resumeToken,this._current,t,e,n)},t.prototype.clearPendingChanges=function(){this._hasPendingChanges=!1,this.documentChanges=Ur()},t.prototype.addDocumentChange=function(t,e){this._hasPendingChanges=!0,this.documentChanges=this.documentChanges.insert(t,e)},t.prototype.removeDocumentChange=function(t){this._hasPendingChanges=!0,this.documentChanges=this.documentChanges.remove(t)},t.prototype.recordPendingTargetRequest=function(){this.pendingResponses+=1},t.prototype.recordTargetResponse=function(){this.pendingResponses-=1},t.prototype.markCurrent=function(){this._hasPendingChanges=!0,this._current=!0},t}(),Lr=function(){function t(t){this.metadataProvider=t,this.targetStates={},this.pendingDocumentUpdates=Rt(),this.pendingDocumentTargetMapping=Fr(),this.pendingTargetResets=new kt(z)}return t.prototype.handleDocumentChange=function(t){for(var e=0,n=t.updatedTargetIds;e<n.length;e++){var r=n[e]
t.newDoc instanceof de?this.addDocumentToTarget(r,t.newDoc):t.newDoc instanceof ye&&this.removeDocumentFromTarget(r,t.key,t.newDoc)}for(var i=0,o=t.removedTargetIds;i<o.length;i++)r=o[i],this.removeDocumentFromTarget(r,t.key,t.newDoc)},t.prototype.handleTargetChange=function(t){var e=this
this.forEachTarget(t,function(n){var r=e.ensureTargetState(n)
switch(t.state){case Nr.NoChange:e.isActiveTarget(n)&&r.updateResumeToken(t.resumeToken)
break
case Nr.Added:r.recordTargetResponse(),r.isPending||r.clearPendingChanges(),r.updateResumeToken(t.resumeToken)
break
case Nr.Removed:r.recordTargetResponse(),r.isPending||e.removeTarget(n),_(!t.cause,"WatchChangeAggregator does not handle errored targets")
break
case Nr.Current:e.isActiveTarget(n)&&(r.markCurrent(),r.updateResumeToken(t.resumeToken))
break
case Nr.Reset:e.isActiveTarget(n)&&(e.resetTarget(n),r.updateResumeToken(t.resumeToken))
break
default:v("Unknown target watch change state: "+t.state)}})},t.prototype.forEachTarget=function(t,e){t.targetIds.length>0?t.targetIds.forEach(e):N(this.targetStates,e)},t.prototype.handleExistenceFilter=function(t){var e=t.targetId,n=t.existenceFilter.count,r=this.queryDataForActiveTarget(e)
if(r){var i=r.query
if(i.isDocumentQuery())if(0===n){var o=new ht(i.path)
this.removeDocumentFromTarget(e,o,new ye(o,Tt.forDeletedDoc()))}else _(1===n,"Single document existence filter with count: "+n)
else this.getCurrentDocumentCountForTarget(e)!==n&&(this.resetTarget(e),this.pendingTargetResets=this.pendingTargetResets.add(e))}},t.prototype.createRemoteEvent=function(t){var e=this,n={}
N(this.targetStates,function(r,i){var o=e.queryDataForActiveTarget(r)
if(o){if(i.current&&o.query.isDocumentQuery()){var a=new ht(o.query.path)
null!==e.pendingDocumentUpdates.get(a)||e.targetContainsDocument(r,a)||e.removeDocumentFromTarget(r,a,new ye(a,t))}i.hasPendingChanges&&(n[r]=i.toTargetChange(),i.clearPendingChanges())}})
var r=Ut()
this.pendingDocumentTargetMapping.forEach(function(t,n){var i=!0
n.forEachWhile(function(t){var n=e.queryDataForActiveTarget(t)
return!n||n.purpose===Qe.LimboResolution||(i=!1,!1)}),i&&(r=r.add(t))})
var i=new Dr(t,n,this.pendingTargetResets,this.pendingDocumentUpdates,r)
return this.pendingDocumentUpdates=Rt(),this.pendingDocumentTargetMapping=Fr(),this.pendingTargetResets=new kt(z),i},t.prototype.addDocumentToTarget=function(t,e){if(this.isActiveTarget(t)){var n=this.targetContainsDocument(t,e.key)?Sr.Modified:Sr.Added
this.ensureTargetState(t).addDocumentChange(e.key,n),this.pendingDocumentUpdates=this.pendingDocumentUpdates.insert(e.key,e),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(e.key,this.ensureDocumentTargetMapping(e.key).add(t))}},t.prototype.removeDocumentFromTarget=function(t,e,n){if(this.isActiveTarget(t)){var r=this.ensureTargetState(t)
this.targetContainsDocument(t,e)?r.addDocumentChange(e,Sr.Removed):r.removeDocumentChange(e),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(e,this.ensureDocumentTargetMapping(e).delete(t)),n&&(this.pendingDocumentUpdates=this.pendingDocumentUpdates.insert(e,n))}},t.prototype.removeTarget=function(t){delete this.targetStates[t]},t.prototype.getCurrentDocumentCountForTarget=function(t){var e=this.ensureTargetState(t).toTargetChange()
return this.metadataProvider.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size},t.prototype.recordPendingTargetRequest=function(t){this.ensureTargetState(t).recordPendingTargetRequest()},t.prototype.ensureTargetState=function(t){return this.targetStates[t]||(this.targetStates[t]=new Mr),this.targetStates[t]},t.prototype.ensureDocumentTargetMapping=function(t){var e=this.pendingDocumentTargetMapping.get(t)
return e||(e=new kt(z),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(t,e)),e},t.prototype.isActiveTarget=function(t){var e=null!==this.queryDataForActiveTarget(t)
return e||y("WatchChangeAggregator","Detected inactive target",t),e},t.prototype.queryDataForActiveTarget=function(t){var e=this.targetStates[t]
return e&&e.isPending?null:this.metadataProvider.getQueryDataForTarget(t)},t.prototype.resetTarget=function(t){var e=this
_(!this.targetStates[t].isPending,"Should only reset active targets"),this.targetStates[t]=new Mr,this.metadataProvider.getRemoteKeysForTarget(t).forEach(function(n){e.removeDocumentFromTarget(t,n,null)})},t.prototype.targetContainsDocument=function(t,e){return this.metadataProvider.getRemoteKeysForTarget(t).has(e)},t}()
function Fr(){return new St(ht.comparator)}function Ur(){return new St(ht.comparator)}var qr="RemoteStore",Vr=function(){function t(t,e,n,r,i){var o=this
this.localStore=t,this.datastore=e,this.writePipeline=[],this.listenTargets={},this.watchChangeAggregator=null,this.networkEnabled=!1,this.isPrimary=!1,this.connectivityMonitor=i,this.connectivityMonitor.addCallback(function(t){n.enqueueAndForget(function(){return u.__awaiter(o,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return this.canUseNetwork()?(y(qr,"Restarting streams for network reachability change."),[4,this.restartNetwork()]):[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})})}),this.onlineStateTracker=new br(n,r),this.watchStream=this.datastore.newPersistentWatchStream({onOpen:this.onWatchStreamOpen.bind(this),onClose:this.onWatchStreamClose.bind(this),onWatchChange:this.onWatchStreamChange.bind(this)}),this.writeStream=this.datastore.newPersistentWriteStream({onOpen:this.onWriteStreamOpen.bind(this),onClose:this.onWriteStreamClose.bind(this),onHandshakeComplete:this.onWriteHandshakeComplete.bind(this),onMutationResult:this.onMutationResult.bind(this)})}return t.prototype.start=function(){return this.enableNetwork()},t.prototype.enableNetwork=function(){return u.__awaiter(this,void 0,void 0,function(){var t
return u.__generator(this,function(e){switch(e.label){case 0:return this.networkEnabled=!0,this.canUseNetwork()?(t=this.writeStream,[4,this.localStore.getLastStreamToken()]):[3,3]
case 1:return t.lastStreamToken=e.sent(),this.shouldStartWatchStream()?this.startWatchStream():this.onlineStateTracker.set(fr.Unknown),[4,this.fillWritePipeline()]
case 2:e.sent(),e.label=3
case 3:return[2]}})})},t.prototype.disableNetwork=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return this.networkEnabled=!1,[4,this.disableNetworkInternal()]
case 1:return t.sent(),this.onlineStateTracker.set(fr.Offline),[2]}})})},t.prototype.disableNetworkInternal=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return[4,this.writeStream.stop()]
case 1:return t.sent(),[4,this.watchStream.stop()]
case 2:return t.sent(),this.writePipeline.length>0&&(y(qr,"Stopping write stream with "+this.writePipeline.length+" pending writes"),this.writePipeline=[]),this.cleanUpWatchStreamState(),[2]}})})},t.prototype.shutdown=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return y(qr,"RemoteStore shutting down."),this.networkEnabled=!1,[4,this.disableNetworkInternal()]
case 1:return t.sent(),this.connectivityMonitor.shutdown(),this.onlineStateTracker.set(fr.Unknown),[2]}})})},t.prototype.listen=function(t){_(!I(this.listenTargets,t.targetId),"listen called with duplicate targetId!"),this.listenTargets[t.targetId]=t,this.shouldStartWatchStream()?this.startWatchStream():this.watchStream.isOpen()&&this.sendWatchRequest(t)},t.prototype.unlisten=function(t){_(I(this.listenTargets,t),"unlisten called without assigned target ID!"),delete this.listenTargets[t],this.watchStream.isOpen()&&this.sendUnwatchRequest(t),A(this.listenTargets)&&(this.watchStream.isOpen()?this.watchStream.markIdle():this.canUseNetwork()&&this.onlineStateTracker.set(fr.Unknown))},t.prototype.getQueryDataForTarget=function(t){return this.listenTargets[t]||null},t.prototype.getRemoteKeysForTarget=function(t){return this.syncEngine.getRemoteKeysForTarget(t)},t.prototype.sendWatchRequest=function(t){this.watchChangeAggregator.recordPendingTargetRequest(t.targetId),this.watchStream.watch(t)},t.prototype.sendUnwatchRequest=function(t){this.watchChangeAggregator.recordPendingTargetRequest(t),this.watchStream.unwatch(t)},t.prototype.startWatchStream=function(){_(this.shouldStartWatchStream(),"startWatchStream() called when shouldStartWatchStream() is false."),this.watchChangeAggregator=new Lr(this),this.watchStream.start(),this.onlineStateTracker.handleWatchStreamStart()},t.prototype.shouldStartWatchStream=function(){return this.canUseNetwork()&&!this.watchStream.isStarted()&&!A(this.listenTargets)},t.prototype.canUseNetwork=function(){return this.isPrimary&&this.networkEnabled},t.prototype.cleanUpWatchStreamState=function(){this.watchChangeAggregator=null},t.prototype.onWatchStreamOpen=function(){return u.__awaiter(this,void 0,void 0,function(){var t=this
return u.__generator(this,function(e){return N(this.listenTargets,function(e,n){t.sendWatchRequest(n)}),[2]})})},t.prototype.onWatchStreamClose=function(t){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(e){return void 0===t&&_(!this.shouldStartWatchStream(),"Watch stream was stopped gracefully while still needed."),this.cleanUpWatchStreamState(),this.shouldStartWatchStream()?(this.onlineStateTracker.handleWatchStreamFailure(t),this.startWatchStream()):this.onlineStateTracker.set(fr.Unknown),[2]})})},t.prototype.onWatchStreamChange=function(t,e){return u.__awaiter(this,void 0,void 0,function(){var n
return u.__generator(this,function(r){switch(r.label){case 0:return this.onlineStateTracker.set(fr.Online),t instanceof xr&&t.state===Nr.Removed&&t.cause?[2,this.handleTargetError(t)]:(t instanceof Or?this.watchChangeAggregator.handleDocumentChange(t):t instanceof Pr?this.watchChangeAggregator.handleExistenceFilter(t):(_(t instanceof xr,"Expected watchChange to be an instance of WatchTargetChange"),this.watchChangeAggregator.handleTargetChange(t)),e.isEqual(Tt.MIN)?[3,3]:[4,this.localStore.getLastRemoteSnapshotVersion()])
case 1:return n=r.sent(),e.compareTo(n)>=0?[4,this.raiseWatchSnapshot(e)]:[3,3]
case 2:r.sent(),r.label=3
case 3:return[2]}})})},t.prototype.raiseWatchSnapshot=function(t){var e=this
_(!t.isEqual(Tt.MIN),"Can't raise event for unknown SnapshotVersion")
var n=this.watchChangeAggregator.createRemoteEvent(t)
return N(n.targetChanges,function(n,r){if(r.resumeToken.length>0){var i=e.listenTargets[n]
i&&(e.listenTargets[n]=i.copy({resumeToken:r.resumeToken,snapshotVersion:t}))}}),n.targetMismatches.forEach(function(t){var n=e.listenTargets[t]
if(n){e.listenTargets[t]=n.copy({resumeToken:w()}),e.sendUnwatchRequest(t)
var r=new Xe(n.query,t,Qe.ExistenceFilterMismatch,n.sequenceNumber)
e.sendWatchRequest(r)}}),this.syncEngine.applyRemoteEvent(n)},t.prototype.handleTargetError=function(t){var e=this
_(!!t.cause,"Handling target error without a cause")
var n=t.cause,r=Promise.resolve()
return t.targetIds.forEach(function(t){r=r.then(function(){return u.__awaiter(e,void 0,void 0,function(){return u.__generator(this,function(e){return I(this.listenTargets,t)?(delete this.listenTargets[t],this.watchChangeAggregator.removeTarget(t),[2,this.syncEngine.rejectListen(t,n)]):[2]})})})}),r},t.prototype.fillWritePipeline=function(){return u.__awaiter(this,void 0,void 0,function(){var t,e
return u.__generator(this,function(n){switch(n.label){case 0:return this.canAddToWritePipeline()?(t=this.writePipeline.length>0?this.writePipeline[this.writePipeline.length-1].batchId:-1,[4,this.localStore.nextMutationBatch(t)]):[3,4]
case 1:return null!==(e=n.sent())?[3,2]:(0===this.writePipeline.length&&this.writeStream.markIdle(),[3,4])
case 2:return this.addToWritePipeline(e),[4,this.fillWritePipeline()]
case 3:n.sent(),n.label=4
case 4:return this.shouldStartWriteStream()&&this.startWriteStream(),[2]}})})},t.prototype.canAddToWritePipeline=function(){return this.canUseNetwork()&&this.writePipeline.length<10},t.prototype.outstandingWrites=function(){return this.writePipeline.length},t.prototype.addToWritePipeline=function(t){_(this.canAddToWritePipeline(),"addToWritePipeline called when pipeline is full"),this.writePipeline.push(t),this.writeStream.isOpen()&&this.writeStream.handshakeComplete&&this.writeStream.writeMutations(t.mutations)},t.prototype.shouldStartWriteStream=function(){return this.canUseNetwork()&&!this.writeStream.isStarted()&&this.writePipeline.length>0},t.prototype.startWriteStream=function(){_(this.shouldStartWriteStream(),"startWriteStream() called when shouldStartWriteStream() is false."),this.writeStream.start()},t.prototype.onWriteStreamOpen=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){return this.writeStream.writeHandshake(),[2]})})},t.prototype.onWriteHandshakeComplete=function(){var t=this
return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function(){for(var e=0,n=t.writePipeline;e<n.length;e++){var r=n[e]
t.writeStream.writeMutations(r.mutations)}}).catch(ln)},t.prototype.onMutationResult=function(t,e){var n=this
_(this.writePipeline.length>0,"Got result for empty write pipeline")
var r=this.writePipeline.shift(),i=jt.from(r,t,e,this.writeStream.lastStreamToken)
return this.syncEngine.applySuccessfulWrite(i).then(function(){return n.fillWritePipeline()})},t.prototype.onWriteStreamClose=function(t){return u.__awaiter(this,void 0,void 0,function(){var e=this
return u.__generator(this,function(n){return void 0===t&&_(!this.shouldStartWriteStream(),"Write stream was stopped gracefully while still needed."),t&&this.writePipeline.length>0?[2,(this.writeStream.handshakeComplete?this.handleWriteError(t):this.handleHandshakeError(t)).then(function(){e.shouldStartWriteStream()&&e.startWriteStream()})]:[2]})})},t.prototype.handleHandshakeError=function(t){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(e){return wr(t.code)?(y(qr,"RemoteStore error before completed handshake; resetting stream token: ",this.writeStream.lastStreamToken),this.writeStream.lastStreamToken=w(),[2,this.localStore.setLastStreamToken(w()).catch(ln)]):[2]})})},t.prototype.handleWriteError=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n=this
return u.__generator(this,function(r){return wr(i=t.code)&&i!==E.ABORTED?(e=this.writePipeline.shift(),this.writeStream.inhibitBackoff(),[2,this.syncEngine.rejectFailedWrite(e.batchId,t).then(function(){return n.fillWritePipeline()})]):[2]
var i})})},t.prototype.createTransaction=function(){return new vr(this.datastore)},t.prototype.restartNetwork=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return this.networkEnabled=!1,[4,this.disableNetworkInternal()]
case 1:return t.sent(),this.onlineStateTracker.set(fr.Unknown),[4,this.enableNetwork()]
case 2:return t.sent(),[2]}})})},t.prototype.handleCredentialChange=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return this.canUseNetwork()?(y(qr,"RemoteStore restarting streams for new credential"),[4,this.restartNetwork()]):[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})},t.prototype.applyPrimaryState=function(t){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(e){switch(e.label){case 0:return this.isPrimary=t,t&&this.networkEnabled?[4,this.enableNetwork()]:[3,2]
case 1:return e.sent(),[3,4]
case 2:return t?[3,4]:[4,this.disableNetworkInternal()]
case 3:e.sent(),this.onlineStateTracker.set(fr.Unknown),e.label=4
case 4:return[2]}})})},t}(),Br=function(){function t(t,e){if(R("GeoPoint",arguments,2),x("GeoPoint","number",1,t),x("GeoPoint","number",2,e),!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t)
if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e)
this._lat=t,this._long=e}return Object.defineProperty(t.prototype,"latitude",{get:function(){return this._lat},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"longitude",{get:function(){return this._long},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(t){return this._lat===t._lat&&this._long===t._long},t.prototype._compareTo=function(t){return z(this._lat,t._lat)||z(this._long,t._long)},t}(),jr=function(){function t(t,e,n,r,i,o,a){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o=null),void 0===a&&(a=null),this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.memoizedCanonicalId=null,this.memoizedOrderBy=null,this.startAt&&this.assertValidBound(this.startAt),this.endAt&&this.assertValidBound(this.endAt)}return t.atPath=function(e){return new t(e)},Object.defineProperty(t.prototype,"orderBy",{get:function(){if(null===this.memoizedOrderBy){var t=this.getInequalityFilterField(),e=this.getFirstOrderByField()
if(null!==t&&null===e)t.isKeyField()?this.memoizedOrderBy=[Zr]:this.memoizedOrderBy=[new $r(t),Zr]
else{_(null===t||null!==e&&t.isEqual(e),"First orderBy should match inequality field."),this.memoizedOrderBy=[]
for(var n=!1,r=0,i=this.explicitOrderBy;r<i.length;r++){var o=i[r]
this.memoizedOrderBy.push(o),o.field.isKeyField()&&(n=!0)}if(!n){var a=this.explicitOrderBy.length>0?this.explicitOrderBy[this.explicitOrderBy.length-1].dir:Xr.ASCENDING
this.memoizedOrderBy.push(a===Xr.ASCENDING?Zr:ti)}}}return this.memoizedOrderBy},enumerable:!0,configurable:!0}),t.prototype.addFilter=function(e){_(null==this.getInequalityFilterField()||!(e instanceof Qr)||!e.isInequality()||e.field.isEqual(this.getInequalityFilterField()),"Query must only have one inequality field."),_(!this.isDocumentQuery(),"No filtering allowed for document query")
var n=this.filters.concat([e])
return new t(this.path,this.collectionGroup,this.explicitOrderBy.slice(),n,this.limit,this.startAt,this.endAt)},t.prototype.addOrderBy=function(e){_(!this.startAt&&!this.endAt,"Bounds must be set after orderBy")
var n=this.explicitOrderBy.concat([e])
return new t(this.path,this.collectionGroup,n,this.filters.slice(),this.limit,this.startAt,this.endAt)},t.prototype.withLimit=function(e){return new t(this.path,this.collectionGroup,this.explicitOrderBy.slice(),this.filters.slice(),e,this.startAt,this.endAt)},t.prototype.withStartAt=function(e){return new t(this.path,this.collectionGroup,this.explicitOrderBy.slice(),this.filters.slice(),this.limit,e,this.endAt)},t.prototype.withEndAt=function(e){return new t(this.path,this.collectionGroup,this.explicitOrderBy.slice(),this.filters.slice(),this.limit,this.startAt,e)},t.prototype.asCollectionQueryAtPath=function(e){return new t(e,null,this.explicitOrderBy.slice(),this.filters.slice(),this.limit,this.startAt,this.endAt)},t.prototype.canonicalId=function(){if(null===this.memoizedCanonicalId){var t=this.path.canonicalString()
this.isCollectionGroupQuery()&&(t+="|cg:"+this.collectionGroup),t+="|f:"
for(var e=0,n=this.filters;e<n.length;e++)t+=n[e].canonicalId(),t+=","
t+="|ob:"
for(var r=0,i=this.orderBy;r<i.length;r++)t+=i[r].canonicalId(),t+=","
or(this.limit)||(t+="|l:",t+=this.limit),this.startAt&&(t+="|lb:",t+=this.startAt.canonicalId()),this.endAt&&(t+="|ub:",t+=this.endAt.canonicalId()),this.memoizedCanonicalId=t}return this.memoizedCanonicalId},t.prototype.toString=function(){var t="Query("+this.path.canonicalString()
return this.isCollectionGroupQuery()&&(t+=" collectionGroup="+this.collectionGroup),this.filters.length>0&&(t+=", filters: ["+this.filters.join(", ")+"]"),or(this.limit)||(t+=", limit: "+this.limit),this.explicitOrderBy.length>0&&(t+=", orderBy: ["+this.explicitOrderBy.join(", ")+"]"),this.startAt&&(t+=", startAt: "+this.startAt.canonicalId()),this.endAt&&(t+=", endAt: "+this.endAt.canonicalId()),t+")"},t.prototype.isEqual=function(t){if(this.limit!==t.limit)return!1
if(this.orderBy.length!==t.orderBy.length)return!1
for(var e=0;e<this.orderBy.length;e++)if(!this.orderBy[e].isEqual(t.orderBy[e]))return!1
if(this.filters.length!==t.filters.length)return!1
for(e=0;e<this.filters.length;e++)if(!this.filters[e].isEqual(t.filters[e]))return!1
return this.collectionGroup===t.collectionGroup&&!!this.path.isEqual(t.path)&&!(null!==this.startAt?!this.startAt.isEqual(t.startAt):null!==t.startAt)&&(null!==this.endAt?this.endAt.isEqual(t.endAt):null===t.endAt)},t.prototype.docComparator=function(t,e){for(var n=!1,r=0,i=this.orderBy;r<i.length;r++){var o=i[r],a=o.compare(t,e)
if(0!==a)return a
n=n||o.field.isKeyField()}return _(n,"orderBy used that doesn't compare on key field"),0},t.prototype.matches=function(t){return this.matchesPathAndCollectionGroup(t)&&this.matchesOrderBy(t)&&this.matchesFilters(t)&&this.matchesBounds(t)},t.prototype.hasLimit=function(){return!or(this.limit)},t.prototype.getFirstOrderByField=function(){return this.explicitOrderBy.length>0?this.explicitOrderBy[0].field:null},t.prototype.getInequalityFilterField=function(){for(var t=0,e=this.filters;t<e.length;t++){var n=e[t]
if(n instanceof Qr&&n.isInequality())return n.field}return null},t.prototype.findFilterOperator=function(t){for(var e=0,n=this.filters;e<n.length;e++){var r=n[e]
if(r instanceof Qr&&t.indexOf(r.op)>=0)return r.op}return null},t.prototype.isDocumentQuery=function(){return ht.isDocumentKey(this.path)&&null===this.collectionGroup&&0===this.filters.length},t.prototype.isCollectionGroupQuery=function(){return null!==this.collectionGroup},t.prototype.matchesPathAndCollectionGroup=function(t){var e=t.key.path
return null!==this.collectionGroup?t.key.hasCollectionId(this.collectionGroup)&&this.path.isPrefixOf(e):ht.isDocumentKey(this.path)?this.path.isEqual(e):this.path.isImmediateParentOf(e)},t.prototype.matchesOrderBy=function(t){for(var e=0,n=this.explicitOrderBy;e<n.length;e++){var r=n[e]
if(!r.field.isKeyField()&&null===t.field(r.field))return!1}return!0},t.prototype.matchesFilters=function(t){for(var e=0,n=this.filters;e<n.length;e++)if(!n[e].matches(t))return!1
return!0},t.prototype.matchesBounds=function(t){return!(this.startAt&&!this.startAt.sortsBeforeDocument(this.orderBy,t)||this.endAt&&this.endAt.sortsBeforeDocument(this.orderBy,t))},t.prototype.assertValidBound=function(t){_(t.position.length<=this.orderBy.length,"Bound is longer than orderBy")},t}(),Wr=function(){function t(t){this.name=t}return t.fromString=function(e){switch(e){case"<":return t.LESS_THAN
case"<=":return t.LESS_THAN_OR_EQUAL
case"==":return t.EQUAL
case">=":return t.GREATER_THAN_OR_EQUAL
case">":return t.GREATER_THAN
case"array-contains":return t.ARRAY_CONTAINS
case"in":return t.IN
case"array-contains-any":return t.ARRAY_CONTAINS_ANY
default:return v("Unknown FieldFilter operator: "+e)}},t.prototype.toString=function(){return this.name},t.prototype.isEqual=function(t){return this.name===t.name},t.LESS_THAN=new t("<"),t.LESS_THAN_OR_EQUAL=new t("<="),t.EQUAL=new t("=="),t.GREATER_THAN=new t(">"),t.GREATER_THAN_OR_EQUAL=new t(">="),t.ARRAY_CONTAINS=new t("array-contains"),t.IN=new t("in"),t.ARRAY_CONTAINS_ANY=new t("array-contains-any"),t}(),Qr=function(t){function e(e,n,r){var i=t.call(this)||this
return i.field=e,i.op=n,i.value=r,i}return u.__extends(e,t),e.create=function(t,n,r){if(t.isKeyField())return n===Wr.IN?(_(r instanceof xn,"Comparing on key with IN, but filter value not an ArrayValue"),_(r.internalValue.every(function(t){return t instanceof Rn}),"Comparing on key with IN, but an array value was not a RefValue"),new Hr(t,r)):(_(r instanceof Rn,"Comparing on key, but filter value not a RefValue"),_(n!==Wr.ARRAY_CONTAINS&&n!==Wr.ARRAY_CONTAINS_ANY,"'"+n.toString()+"' queries don't make sense on document keys."),new Kr(t,n,r))
if(r.isEqual(bn.INSTANCE)){if(n!==Wr.EQUAL)throw new T(E.INVALID_ARGUMENT,"Invalid query. Null supports only equality comparisons.")
return new e(t,n,r)}if(r.isEqual(Cn.NAN)){if(n!==Wr.EQUAL)throw new T(E.INVALID_ARGUMENT,"Invalid query. NaN supports only equality comparisons.")
return new e(t,n,r)}return n===Wr.ARRAY_CONTAINS?new Gr(t,r):n===Wr.IN?(_(r instanceof xn,"IN filter has invalid value: "+r.toString()),new zr(t,r)):n===Wr.ARRAY_CONTAINS_ANY?(_(r instanceof xn,"ARRAY_CONTAINS_ANY filter has invalid value: "+r.toString()),new Yr(t,r)):new e(t,n,r)},e.prototype.matches=function(t){var e=t.field(this.field)
return null!==e&&this.value.typeOrder===e.typeOrder&&this.matchesComparison(e.compareTo(this.value))},e.prototype.matchesComparison=function(t){switch(this.op){case Wr.LESS_THAN:return t<0
case Wr.LESS_THAN_OR_EQUAL:return t<=0
case Wr.EQUAL:return 0===t
case Wr.GREATER_THAN:return t>0
case Wr.GREATER_THAN_OR_EQUAL:return t>=0
default:return v("Unknown FieldFilter operator: "+this.op)}},e.prototype.isInequality=function(){return[Wr.LESS_THAN,Wr.LESS_THAN_OR_EQUAL,Wr.GREATER_THAN,Wr.GREATER_THAN_OR_EQUAL].indexOf(this.op)>=0},e.prototype.canonicalId=function(){return this.field.canonicalString()+this.op.toString()+this.value.toString()},e.prototype.isEqual=function(t){return t instanceof e&&this.op.isEqual(t.op)&&this.field.isEqual(t.field)&&this.value.isEqual(t.value)},e.prototype.toString=function(){return this.field.canonicalString()+" "+this.op+" "+this.value.value()},e}(function(){}),Kr=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u.__extends(e,t),e.prototype.matches=function(t){var e=this.value,n=ht.comparator(t.key,e.key)
return this.matchesComparison(n)},e}(Qr),Hr=function(t){function e(e,n){var r=t.call(this,e,Wr.IN,n)||this
return r.value=n,r}return u.__extends(e,t),e.prototype.matches=function(t){return this.value.internalValue.some(function(e){return t.key.isEqual(e.key)})},e}(Qr),Gr=function(t){function e(e,n){return t.call(this,e,Wr.ARRAY_CONTAINS,n)||this}return u.__extends(e,t),e.prototype.matches=function(t){var e=t.field(this.field)
return e instanceof xn&&e.contains(this.value)},e}(Qr),zr=function(t){function e(e,n){var r=t.call(this,e,Wr.IN,n)||this
return r.value=n,r}return u.__extends(e,t),e.prototype.matches=function(t){var e=this.value,n=t.field(this.field)
return null!==n&&e.contains(n)},e}(Qr),Yr=function(t){function e(e,n){var r=t.call(this,e,Wr.ARRAY_CONTAINS_ANY,n)||this
return r.value=n,r}return u.__extends(e,t),e.prototype.matches=function(t){var e=this,n=t.field(this.field)
return n instanceof xn&&n.internalValue.some(function(t){return e.value.contains(t)})},e}(Qr),Xr=function(){function t(t){this.name=t}return t.prototype.toString=function(){return this.name},t.ASCENDING=new t("asc"),t.DESCENDING=new t("desc"),t}(),Jr=function(){function t(t,e){this.position=t,this.before=e}return t.prototype.canonicalId=function(){for(var t=this.before?"b:":"a:",e=0,n=this.position;e<n.length;e++)t+=n[e].toString()
return t},t.prototype.sortsBeforeDocument=function(t,e){_(this.position.length<=t.length,"Bound has more components than query's orderBy")
for(var n=0,r=0;r<this.position.length;r++){var i=t[r],o=this.position[r]
if(i.field.isKeyField())_(o instanceof Rn,"Bound has a non-key value where the key path is being used."),n=ht.comparator(o.key,e.key)
else{var a=e.field(i.field)
_(void 0!==a,"Field should exist since document matched the orderBy already."),n=o.compareTo(a)}if(i.dir===Xr.DESCENDING&&(n*=-1),0!==n)break}return this.before?n<=0:n<0},t.prototype.isEqual=function(t){if(null===t)return!1
if(this.before!==t.before||this.position.length!==t.position.length)return!1
for(var e=0;e<this.position.length;e++){var n=this.position[e],r=t.position[e]
if(!n.isEqual(r))return!1}return!0},t}(),$r=function(){function t(t,e){this.field=t,void 0===e&&(e=Xr.ASCENDING),this.dir=e,this.isKeyOrderBy=t.isKeyField()}return t.prototype.compare=function(t,e){var n=this.isKeyOrderBy?de.compareByKey(t,e):de.compareByField(this.field,t,e)
switch(this.dir){case Xr.ASCENDING:return n
case Xr.DESCENDING:return-1*n
default:return v("Unknown direction: "+this.dir)}},t.prototype.canonicalId=function(){return this.field.canonicalString()+this.dir.toString()},t.prototype.toString=function(){return this.field.canonicalString()+" ("+this.dir+")"},t.prototype.isEqual=function(t){return this.dir===t.dir&&this.field.isEqual(t.field)},t}(),Zr=new $r(ct.keyField(),Xr.ASCENDING),ti=new $r(ct.keyField(),Xr.DESCENDING),ei=function(){function t(){}return t.prototype.applyToLocalView=function(t,e){return new An(e,t)},t.prototype.applyToRemoteDocument=function(t,e){return e},t.prototype.computeBaseValue=function(t){return null},t.prototype.isEqual=function(e){return e instanceof t},t.instance=new t,t}(),ni=function(){function t(t){this.elements=t}return t.prototype.applyToLocalView=function(t,e){return this.apply(t)},t.prototype.applyToRemoteDocument=function(t,e){return this.apply(t)},t.prototype.apply=function(t){for(var e=oi(t),n=function(t){e.find(function(e){return e.isEqual(t)})||e.push(t)},r=0,i=this.elements;r<i.length;r++)n(i[r])
return new xn(e)},t.prototype.computeBaseValue=function(t){return null},t.prototype.isEqual=function(e){return e instanceof t&&Y(e.elements,this.elements)},t}(),ri=function(){function t(t){this.elements=t}return t.prototype.applyToLocalView=function(t,e){return this.apply(t)},t.prototype.applyToRemoteDocument=function(t,e){return this.apply(t)},t.prototype.apply=function(t){for(var e=oi(t),n=function(t){e=e.filter(function(e){return!e.isEqual(t)})},r=0,i=this.elements;r<i.length;r++)n(i[r])
return new xn(e)},t.prototype.computeBaseValue=function(t){return null},t.prototype.isEqual=function(e){return e instanceof t&&Y(e.elements,this.elements)},t}(),ii=function(){function t(t){this.operand=t}return t.prototype.applyToLocalView=function(t,e){var n=this.computeBaseValue(t)
if(n instanceof In&&this.operand instanceof In){var r=n.internalValue+this.operand.internalValue
return new In(r)}return r=n.internalValue+this.operand.internalValue,new Cn(r)},t.prototype.applyToRemoteDocument=function(t,e){return _(null!==e,"Didn't receive transformResult for NUMERIC_ADD transform"),e},t.prototype.computeBaseValue=function(t){return t instanceof En?t:new In(0)},t.prototype.isEqual=function(e){return e instanceof t&&this.operand.isEqual(e.operand)},t}()
function oi(t){return t instanceof xn?t.internalValue.slice():[]}var ai,si,ui=function(){function t(t){this.count=t}return t.prototype.isEqual=function(t){return t&&t.count===this.count},t}(),ci=((ai={})[Xr.ASCENDING.name]="ASCENDING",ai[Xr.DESCENDING.name]="DESCENDING",ai),hi=((si={})[Wr.LESS_THAN.name]="LESS_THAN",si[Wr.LESS_THAN_OR_EQUAL.name]="LESS_THAN_OR_EQUAL",si[Wr.GREATER_THAN.name]="GREATER_THAN",si[Wr.GREATER_THAN_OR_EQUAL.name]="GREATER_THAN_OR_EQUAL",si[Wr.EQUAL.name]="EQUAL",si[Wr.ARRAY_CONTAINS.name]="ARRAY_CONTAINS",si[Wr.IN.name]="IN",si[Wr.ARRAY_CONTAINS_ANY.name]="ARRAY_CONTAINS_ANY",si),li=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
function fi(t,e){_(!or(t),e+" is missing")}function pi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):v("can't parse "+t)}var di=function(){function t(t,e){this.databaseId=t,this.options=e}return t.prototype.emptyByteString=function(){return this.options.useProto3Json?"":new Uint8Array(0)},t.prototype.unsafeCastProtoByteString=function(t){return t},t.prototype.fromRpcStatus=function(t){var e=void 0===t.code?E.UNKNOWN:Er(t.code)
return new T(e,t.message||"")},t.prototype.toInt32Value=function(t){return or(t)?void 0:{value:t}},t.prototype.fromInt32Value=function(t){var e
return or(e="object"===r(t)?t.value:t)?null:e},t.prototype.toTimestamp=function(t){return{seconds:""+t.seconds,nanos:t.nanoseconds}},t.prototype.fromTimestamp=function(t){if("string"==typeof t)return this.fromIso8601String(t)
_(!!t,"Cannot deserialize null or undefined timestamp.")
var e=pi(t.seconds||"0"),n=t.nanos||0
return new Et(e,n)},t.prototype.fromIso8601String=function(t){var e=0,n=li.exec(t)
if(_(!!n,"invalid timestamp: "+t),n[1]){var r=n[1]
r=(r+"000000000").substr(0,9),e=Number(r)}var i=new Date(t),o=Math.floor(i.getTime()/1e3)
return new Et(o,e)},t.prototype.toBytes=function(t){return this.options.useProto3Json?t.toBase64():this.unsafeCastProtoByteString(t.toUint8Array())},t.prototype.fromBlob=function(t){return"string"==typeof t?(_(this.options.useProto3Json,"Expected bytes to be passed in as Uint8Array, but got a string instead."),tt.fromBase64String(t)):(_(!this.options.useProto3Json,"Expected bytes to be passed in as Uint8Array, but got a string instead."),tt.fromUint8Array(t))},t.prototype.toVersion=function(t){return this.toTimestamp(t.toTimestamp())},t.prototype.fromVersion=function(t){return _(!!t,"Trying to deserialize version that isn't set"),Tt.fromTimestamp(this.fromTimestamp(t))},t.prototype.toResourceName=function(t,e){return this.fullyQualifiedPrefixPath(t).child("documents").child(e).canonicalString()},t.prototype.fromResourceName=function(t){var e=st.fromString(t)
return _(this.isValidResourceName(e),"Tried to deserialize invalid key "+e.toString()),e},t.prototype.toName=function(t){return this.toResourceName(this.databaseId,t.path)},t.prototype.fromName=function(t){var e=this.fromResourceName(t)
return _(e.get(1)===this.databaseId.projectId,"Tried to deserialize key from different project: "+e.get(1)+" vs "+this.databaseId.projectId),_(!e.get(3)&&!this.databaseId.database||e.get(3)===this.databaseId.database,"Tried to deserialize key from different database: "+e.get(3)+" vs "+this.databaseId.database),new ht(this.extractLocalPathFromResourceName(e))},t.prototype.toQueryPath=function(t){return this.toResourceName(this.databaseId,t)},t.prototype.fromQueryPath=function(t){var e=this.fromResourceName(t)
return 4===e.length?st.EMPTY_PATH:this.extractLocalPathFromResourceName(e)},Object.defineProperty(t.prototype,"encodedDatabaseId",{get:function(){return new st(["projects",this.databaseId.projectId,"databases",this.databaseId.database]).canonicalString()},enumerable:!0,configurable:!0}),t.prototype.fullyQualifiedPrefixPath=function(t){return new st(["projects",t.projectId,"databases",t.database])},t.prototype.extractLocalPathFromResourceName=function(t){return _(t.length>4&&"documents"===t.get(4),"tried to deserialize invalid key "+t.toString()),t.popFirst(5)},t.prototype.isValidResourceName=function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)},t.prototype.toValue=function(t){if(t instanceof bn)return{nullValue:"NULL_VALUE"}
if(t instanceof wn)return{booleanValue:t.value()}
if(t instanceof In)return{integerValue:""+t.value()}
if(t instanceof Cn){var e=t.value()
if(this.options.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"}
if(e===1/0)return{doubleValue:"Infinity"}
if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:t.value()}}return t instanceof Nn?{stringValue:t.value()}:t instanceof Pn?{mapValue:this.toMapValue(t)}:t instanceof xn?{arrayValue:this.toArrayValue(t)}:t instanceof kn?{timestampValue:this.toTimestamp(t.internalValue)}:t instanceof On?{geoPointValue:{latitude:t.value().latitude,longitude:t.value().longitude}}:t instanceof Dn?{bytesValue:this.toBytes(t.value())}:t instanceof Rn?{referenceValue:this.toResourceName(t.databaseId,t.key.path)}:v("Unknown FieldValue "+JSON.stringify(t))},t.prototype.fromValue=function(t){var e=this
if("nullValue"in t)return bn.INSTANCE
if("booleanValue"in t)return wn.of(t.booleanValue)
if("integerValue"in t)return new In(pi(t.integerValue))
if("doubleValue"in t){if(this.options.useProto3Json){if("NaN"===t.doubleValue)return Cn.NAN
if("Infinity"===t.doubleValue)return Cn.POSITIVE_INFINITY
if("-Infinity"===t.doubleValue)return Cn.NEGATIVE_INFINITY}return new Cn(t.doubleValue)}if("stringValue"in t)return new Nn(t.stringValue)
if("mapValue"in t)return this.fromFields(t.mapValue.fields||{})
if("arrayValue"in t){fi(t.arrayValue,"arrayValue")
var n=t.arrayValue.values||[]
return new xn(n.map(function(t){return e.fromValue(t)}))}if("timestampValue"in t)return fi(t.timestampValue,"timestampValue"),new kn(this.fromTimestamp(t.timestampValue))
if("geoPointValue"in t){fi(t.geoPointValue,"geoPointValue")
var r=t.geoPointValue.latitude||0,i=t.geoPointValue.longitude||0
return new On(new Br(r,i))}if("bytesValue"in t){fi(t.bytesValue,"bytesValue")
var o=this.fromBlob(t.bytesValue)
return new Dn(o)}if("referenceValue"in t){fi(t.referenceValue,"referenceValue")
var a=this.fromResourceName(t.referenceValue),s=new it(a.get(1),a.get(3)),u=new ht(this.extractLocalPathFromResourceName(a))
return new Rn(s,u)}return v("Unknown Value proto "+JSON.stringify(t))},t.prototype.toMutationDocument=function(t,e){return{name:this.toName(t),fields:this.toFields(e)}},t.prototype.toDocument=function(t){return _(!t.hasLocalMutations,"Can't serialize documents with mutations."),{name:this.toName(t.key),fields:this.toFields(t.data),updateTime:this.toTimestamp(t.version.toTimestamp())}},t.prototype.fromDocument=function(t,e){return new de(this.fromName(t.name),this.fromVersion(t.updateTime),this.fromFields(t.fields||{}),{hasCommittedMutations:!!e})},t.prototype.toFields=function(t){var e=this,n={}
return t.forEach(function(t,r){n[t]=e.toValue(r)}),n},t.prototype.fromFields=function(t){var e=this,n=t,r=Pn.EMPTY
return k(n,function(t,n){r=r.set(new ct([t]),e.fromValue(n))}),r},t.prototype.toMapValue=function(t){return{fields:this.toFields(t)}},t.prototype.toArrayValue=function(t){var e=this,n=[]
return t.forEach(function(t){n.push(e.toValue(t))}),{values:n}},t.prototype.fromFound=function(t){_(!!t.found,"Tried to deserialize a found document from a missing document."),fi(t.found.name,"doc.found.name"),fi(t.found.updateTime,"doc.found.updateTime")
var e=this.fromName(t.found.name),n=this.fromVersion(t.found.updateTime),r=this.fromFields(t.found.fields||{})
return new de(e,n,r,{},t.found)},t.prototype.fromMissing=function(t){_(!!t.missing,"Tried to deserialize a missing document from a found document."),_(!!t.readTime,"Tried to deserialize a missing document without a read time.")
var e=this.fromName(t.missing),n=this.fromVersion(t.readTime)
return new ye(e,n)},t.prototype.fromMaybeDocument=function(t){return"found"in t?this.fromFound(t):"missing"in t?this.fromMissing(t):v("invalid batch get response: "+JSON.stringify(t))},t.prototype.toWatchTargetChangeState=function(t){switch(t){case Nr.Added:return"ADD"
case Nr.Current:return"CURRENT"
case Nr.NoChange:return"NO_CHANGE"
case Nr.Removed:return"REMOVE"
case Nr.Reset:return"RESET"
default:return v("Unknown WatchTargetChangeState: "+t)}},t.prototype.toTestWatchChange=function(t){if(t instanceof Pr)return{filter:{count:t.existenceFilter.count,targetId:t.targetId}}
if(t instanceof Or){if(t.newDoc instanceof de){var e=t.newDoc
return{documentChange:{document:{name:this.toName(e.key),fields:this.toFields(e.data),updateTime:this.toVersion(e.version)},targetIds:t.updatedTargetIds,removedTargetIds:t.removedTargetIds}}}if(t.newDoc instanceof ye)return e=t.newDoc,{documentDelete:{document:this.toName(e.key),readTime:this.toVersion(e.version),removedTargetIds:t.removedTargetIds}}
if(null===t.newDoc)return{documentRemove:{document:this.toName(t.key),removedTargetIds:t.removedTargetIds}}}if(t instanceof xr){var n=void 0
return t.cause&&(n={code:Tr(t.cause.code),message:t.cause.message}),{targetChange:{targetChangeType:this.toWatchTargetChangeState(t.state),targetIds:t.targetIds,resumeToken:this.unsafeCastProtoByteString(t.resumeToken),cause:n}}}return v("Unrecognized watch change: "+JSON.stringify(t))},t.prototype.fromWatchChange=function(t){var e
if("targetChange"in t){fi(t.targetChange,"targetChange")
var n=this.fromWatchTargetChangeState(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=t.targetChange.resumeToken||this.emptyByteString(),o=t.targetChange.cause,a=o&&this.fromRpcStatus(o)
e=new xr(n,r,i,a||null)}else if("documentChange"in t){fi(t.documentChange,"documentChange"),fi(t.documentChange.document,"documentChange.name"),fi(t.documentChange.document.name,"documentChange.document.name"),fi(t.documentChange.document.updateTime,"documentChange.document.updateTime")
var s=t.documentChange,u=this.fromName(s.document.name),c=this.fromVersion(s.document.updateTime),h=this.fromFields(s.document.fields||{}),l=new de(u,c,h,{},s.document),f=s.targetIds||[],p=s.removedTargetIds||[]
e=new Or(f,p,l.key,l)}else if("documentDelete"in t){fi(t.documentDelete,"documentDelete"),fi(t.documentDelete.document,"documentDelete.document")
var d=t.documentDelete
u=this.fromName(d.document),c=d.readTime?this.fromVersion(d.readTime):Tt.forDeletedDoc(),l=new ye(u,c),p=d.removedTargetIds||[],e=new Or([],p,l.key,l)}else if("documentRemove"in t){fi(t.documentRemove,"documentRemove"),fi(t.documentRemove.document,"documentRemove")
var y=t.documentRemove
u=this.fromName(y.document),p=y.removedTargetIds||[],e=new Or([],p,u,null)}else{if(!("filter"in t))return v("Unknown change type "+JSON.stringify(t))
fi(t.filter,"filter"),fi(t.filter.targetId,"filter.targetId")
var m=t.filter,g=m.count||0,_=new ui(g),b=m.targetId
e=new Pr(b,_)}return e},t.prototype.fromWatchTargetChangeState=function(t){return"NO_CHANGE"===t?Nr.NoChange:"ADD"===t?Nr.Added:"REMOVE"===t?Nr.Removed:"CURRENT"===t?Nr.Current:"RESET"===t?Nr.Reset:v("Got unexpected TargetChange.state: "+t)},t.prototype.versionFromListenResponse=function(t){if(!("targetChange"in t))return Tt.MIN
var e=t.targetChange
return e.targetIds&&e.targetIds.length?Tt.MIN:e.readTime?this.fromVersion(e.readTime):Tt.MIN},t.prototype.toMutation=function(t){var e,n=this
if(t instanceof Vn)e={update:this.toMutationDocument(t.key,t.value)}
else if(t instanceof Wn)e={delete:this.toName(t.key)}
else if(t instanceof Bn)e={update:this.toMutationDocument(t.key,t.data),updateMask:this.toDocumentMask(t.fieldMask)}
else{if(!(t instanceof jn))return v("Unknown mutation type "+t.type)
e={transform:{document:this.toName(t.key),fieldTransforms:t.fieldTransforms.map(function(t){return n.toFieldTransform(t)})}}}return t.precondition.isNone||(e.currentDocument=this.toPrecondition(t.precondition)),e},t.prototype.fromMutation=function(t){var e=this,n=t.currentDocument?this.fromPrecondition(t.currentDocument):Un.NONE
if(t.update){fi(t.update.name,"name")
var r=this.fromName(t.update.name),i=this.fromFields(t.update.fields||{})
if(t.updateMask){var o=this.fromDocumentMask(t.updateMask)
return new Bn(r,i,o,n)}return new Vn(r,i,n)}if(t.delete)return r=this.fromName(t.delete),new Wn(r,n)
if(t.transform){r=this.fromName(t.transform.document)
var a=t.transform.fieldTransforms.map(function(t){return e.fromFieldTransform(t)})
return _(!0===n.exists,'Transforms only support precondition "exists == true"'),new jn(r,a)}return v("unknown mutation proto: "+JSON.stringify(t))},t.prototype.toPrecondition=function(t){return _(!t.isNone,"Can't serialize an empty precondition"),void 0!==t.updateTime?{updateTime:this.toVersion(t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v("Unknown precondition")},t.prototype.fromPrecondition=function(t){return void 0!==t.updateTime?Un.updateTime(this.fromVersion(t.updateTime)):void 0!==t.exists?Un.exists(t.exists):Un.NONE},t.prototype.fromWriteResult=function(t,e){var n=this,r=t.updateTime?this.fromVersion(t.updateTime):this.fromVersion(e),i=null
return t.transformResults&&t.transformResults.length>0&&(i=t.transformResults.map(function(t){return n.fromValue(t)})),new Fn(r,i)},t.prototype.fromWriteResults=function(t,e){var n=this
return t&&t.length>0?(_(void 0!==e,"Received a write result without a commit time"),t.map(function(t){return n.fromWriteResult(t,e)})):[]},t.prototype.toFieldTransform=function(t){var e=this,n=t.transform
if(n instanceof ei)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"}
if(n instanceof ni)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements.map(function(t){return e.toValue(t)})}}
if(n instanceof ri)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements.map(function(t){return e.toValue(t)})}}
if(n instanceof ii)return{fieldPath:t.field.canonicalString(),increment:this.toValue(n.operand)}
throw v("Unknown transform: "+t.transform)},t.prototype.fromFieldTransform=function(t){var e=this,n=null
if("setToServerValue"in t)_("REQUEST_TIME"===t.setToServerValue,"Unknown server value transform proto: "+JSON.stringify(t)),n=ei.instance
else if("appendMissingElements"in t){var r=t.appendMissingElements.values||[]
n=new ni(r.map(function(t){return e.fromValue(t)}))}else if("removeAllFromArray"in t)r=t.removeAllFromArray.values||[],n=new ri(r.map(function(t){return e.fromValue(t)}))
else if("increment"in t){var i=this.fromValue(t.increment)
_(i instanceof En,"NUMERIC_ADD transform requires a NumberValue"),n=new ii(i)}else v("Unknown transform proto: "+JSON.stringify(t))
var o=ct.fromServerFormat(t.fieldPath)
return new Ln(o,n)},t.prototype.toDocumentsTarget=function(t){return{documents:[this.toQueryPath(t.path)]}},t.prototype.fromDocumentsTarget=function(t){var e=t.documents.length
_(1===e,"DocumentsTarget contained other than 1 document: "+e)
var n=t.documents[0]
return jr.atPath(this.fromQueryPath(n))},t.prototype.toQueryTarget=function(t){var e={structuredQuery:{}},n=t.path
null!==t.collectionGroup?(_(n.length%2==0,"Collection Group queries should be within a document path or root."),e.parent=this.toQueryPath(n),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(_(n.length%2!=0,"Document queries with filters are not supported."),e.parent=this.toQueryPath(n.popLast()),e.structuredQuery.from=[{collectionId:n.lastSegment()}])
var r=this.toFilter(t.filters)
r&&(e.structuredQuery.where=r)
var i=this.toOrder(t.orderBy)
i&&(e.structuredQuery.orderBy=i)
var o=this.toInt32Value(t.limit)
return void 0!==o&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=this.toCursor(t.startAt)),t.endAt&&(e.structuredQuery.endAt=this.toCursor(t.endAt)),e},t.prototype.fromQueryTarget=function(t){var e=this.fromQueryPath(t.parent),n=t.structuredQuery,r=n.from?n.from.length:0,i=null
if(r>0){_(1===r,"StructuredQuery.from with more than one collection is not supported.")
var o=n.from[0]
o.allDescendants?i=o.collectionId:e=e.child(o.collectionId)}var a=[]
n.where&&(a=this.fromFilter(n.where))
var s=[]
n.orderBy&&(s=this.fromOrder(n.orderBy))
var u=null
n.limit&&(u=this.fromInt32Value(n.limit))
var c=null
n.startAt&&(c=this.fromCursor(n.startAt))
var h=null
return n.endAt&&(h=this.fromCursor(n.endAt)),new jr(e,i,s,a,u,c,h)},t.prototype.toListenRequestLabels=function(t){var e=this.toLabel(t.purpose)
return null==e?null:{"goog-listen-tags":e}},t.prototype.toLabel=function(t){switch(t){case Qe.Listen:return null
case Qe.ExistenceFilterMismatch:return"existence-filter-mismatch"
case Qe.LimboResolution:return"limbo-document"
default:return v("Unrecognized query purpose: "+t)}},t.prototype.toTarget=function(t){var e,n=t.query
return(e=n.isDocumentQuery()?{documents:this.toDocumentsTarget(n)}:{query:this.toQueryTarget(n)}).targetId=t.targetId,t.resumeToken.length>0&&(e.resumeToken=this.unsafeCastProtoByteString(t.resumeToken)),e},t.prototype.toFilter=function(t){var e=this
if(0!==t.length){var n=t.map(function(t){return t instanceof Qr?e.toUnaryOrFieldFilter(t):v("Unrecognized filter: "+JSON.stringify(t))})
return 1===n.length?n[0]:{compositeFilter:{op:"AND",filters:n}}}},t.prototype.fromFilter=function(t){var e=this
return t?void 0!==t.unaryFilter?[this.fromUnaryFilter(t)]:void 0!==t.fieldFilter?[this.fromFieldFilter(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(function(t){return e.fromFilter(t)}).reduce(function(t,e){return t.concat(e)}):v("Unknown filter: "+JSON.stringify(t)):[]},t.prototype.toOrder=function(t){var e=this
if(0!==t.length)return t.map(function(t){return e.toPropertyOrder(t)})},t.prototype.fromOrder=function(t){var e=this
return t.map(function(t){return e.fromPropertyOrder(t)})},t.prototype.toCursor=function(t){var e=this
return{before:t.before,values:t.position.map(function(t){return e.toValue(t)})}},t.prototype.fromCursor=function(t){var e=this,n=!!t.before,r=t.values.map(function(t){return e.fromValue(t)})
return new Jr(r,n)},t.prototype.toDirection=function(t){return ci[t.name]},t.prototype.fromDirection=function(t){switch(t){case"ASCENDING":return Xr.ASCENDING
case"DESCENDING":return Xr.DESCENDING
default:return}},t.prototype.toOperatorName=function(t){return hi[t.name]},t.prototype.fromOperatorName=function(t){switch(t){case"EQUAL":return Wr.EQUAL
case"GREATER_THAN":return Wr.GREATER_THAN
case"GREATER_THAN_OR_EQUAL":return Wr.GREATER_THAN_OR_EQUAL
case"LESS_THAN":return Wr.LESS_THAN
case"LESS_THAN_OR_EQUAL":return Wr.LESS_THAN_OR_EQUAL
case"ARRAY_CONTAINS":return Wr.ARRAY_CONTAINS
case"IN":return Wr.IN
case"ARRAY_CONTAINS_ANY":return Wr.ARRAY_CONTAINS_ANY
case"OPERATOR_UNSPECIFIED":return v("Unspecified operator")
default:return v("Unknown operator")}},t.prototype.toFieldPathReference=function(t){return{fieldPath:t.canonicalString()}},t.prototype.fromFieldPathReference=function(t){return ct.fromServerFormat(t.fieldPath)},t.prototype.toPropertyOrder=function(t){return{field:this.toFieldPathReference(t.field),direction:this.toDirection(t.dir)}},t.prototype.fromPropertyOrder=function(t){return new $r(this.fromFieldPathReference(t.field),this.fromDirection(t.direction))},t.prototype.fromFieldFilter=function(t){return Qr.create(this.fromFieldPathReference(t.fieldFilter.field),this.fromOperatorName(t.fieldFilter.op),this.fromValue(t.fieldFilter.value))},t.prototype.toUnaryOrFieldFilter=function(t){if(t.op===Wr.EQUAL){if(t.value.isEqual(Cn.NAN))return{unaryFilter:{field:this.toFieldPathReference(t.field),op:"IS_NAN"}}
if(t.value.isEqual(bn.INSTANCE))return{unaryFilter:{field:this.toFieldPathReference(t.field),op:"IS_NULL"}}}return{fieldFilter:{field:this.toFieldPathReference(t.field),op:this.toOperatorName(t.op),value:this.toValue(t.value)}}},t.prototype.fromUnaryFilter=function(t){switch(t.unaryFilter.op){case"IS_NAN":var e=this.fromFieldPathReference(t.unaryFilter.field)
return Qr.create(e,Wr.EQUAL,Cn.NAN)
case"IS_NULL":var n=this.fromFieldPathReference(t.unaryFilter.field)
return Qr.create(n,Wr.EQUAL,bn.INSTANCE)
case"OPERATOR_UNSPECIFIED":return v("Unspecified filter")
default:return v("Unknown filter")}},t.prototype.toDocumentMask=function(t){var e=[]
return t.fields.forEach(function(t){return e.push(t.canonicalString())}),{fieldPaths:e}},t.prototype.fromDocumentMask=function(t){var e=(t.fieldPaths||[]).map(function(t){return ct.fromServerFormat(t)})
return Mn.fromArray(e)},t}(),yi=function(){this.viewSnap=null,this.targetId=0,this.listeners=[]},mi=function(){function t(t){this.syncEngine=t,this.queries=new ge(function(t){return t.canonicalId()}),this.onlineState=fr.Unknown,this.syncEngine.subscribe(this)}return t.prototype.listen=function(t){var e=t.query,n=!1,r=this.queries.get(e)
return r||(n=!0,r=new yi,this.queries.set(e,r)),r.listeners.push(t),t.applyOnlineStateChange(this.onlineState),r.viewSnap&&t.onViewSnapshot(r.viewSnap),n?this.syncEngine.listen(e).then(function(t){return r.targetId=t,t}):Promise.resolve(r.targetId)},t.prototype.unlisten=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n,r,i
return u.__generator(this,function(o){return e=t.query,n=!1,(r=this.queries.get(e))&&(i=r.listeners.indexOf(t))>=0&&(r.listeners.splice(i,1),n=0===r.listeners.length),n?(this.queries.delete(e),[2,this.syncEngine.unlisten(e)]):[2]})})},t.prototype.onWatchChange=function(t){for(var e=0,n=t;e<n.length;e++){var r=n[e],i=r.query,o=this.queries.get(i)
if(o){for(var a=0,s=o.listeners;a<s.length;a++)s[a].onViewSnapshot(r)
o.viewSnap=r}}},t.prototype.onWatchError=function(t,e){var n=this.queries.get(t)
if(n)for(var r=0,i=n.listeners;r<i.length;r++)i[r].onError(e)
this.queries.delete(t)},t.prototype.onOnlineStateChange=function(t){this.onlineState=t,this.queries.forEach(function(e,n){for(var r=0,i=n.listeners;r<i.length;r++)i[r].applyOnlineStateChange(t)})},t}(),gi=function(){function t(t,e,n){this.query=t,this.queryObserver=e,this.raisedInitialEvent=!1,this.snap=null,this.onlineState=fr.Unknown,this.options=n||{}}return t.prototype.onViewSnapshot=function(t){if(_(t.docChanges.length>0||t.syncStateChanged,"We got a new snapshot with no changes?"),!this.options.includeMetadataChanges){for(var e=[],n=0,r=t.docChanges;n<r.length;n++){var i=r[n]
i.type!==Sr.Metadata&&e.push(i)}t=new Ar(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}this.raisedInitialEvent?this.shouldRaiseEvent(t)&&this.queryObserver.next(t):this.shouldRaiseInitialEvent(t,this.onlineState)&&this.raiseInitialEvent(t),this.snap=t},t.prototype.onError=function(t){this.queryObserver.error(t)},t.prototype.applyOnlineStateChange=function(t){this.onlineState=t,this.snap&&!this.raisedInitialEvent&&this.shouldRaiseInitialEvent(this.snap,t)&&this.raiseInitialEvent(this.snap)},t.prototype.shouldRaiseInitialEvent=function(t,e){if(_(!this.raisedInitialEvent,"Determining whether to raise first event but already had first event"),!t.fromCache)return!0
var n=e!==fr.Offline
return this.options.waitForSyncWhenOnline&&n?(_(t.fromCache,"Waiting for sync, but snapshot is not from cache"),!1):!t.docs.isEmpty()||e===fr.Offline},t.prototype.shouldRaiseEvent=function(t){if(t.docChanges.length>0)return!0
var e=this.snap&&this.snap.hasPendingWrites!==t.hasPendingWrites
return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges},t.prototype.raiseInitialEvent=function(t){_(!this.raisedInitialEvent,"Trying to raise initial events for second time"),t=Ar.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.raisedInitialEvent=!0,this.queryObserver.next(t)},t}(),vi=function(){function t(t,e,n){this.targetId=t,this.addedKeys=e,this.removedKeys=n}return t.fromSnapshot=function(e,n){for(var r=Ut(),i=Ut(),o=0,a=n.docChanges;o<a.length;o++){var s=a[o]
switch(s.type){case Sr.Added:r=r.add(s.doc.key)
break
case Sr.Removed:i=i.add(s.doc.key)}}return new t(e,r,i)},t}(),_i=function(t){this.key=t},bi=function(t){this.key=t},wi=function(){function t(t,e){this.query=t,this._syncedDocuments=e,this.syncState=null,this.current=!1,this.limboDocuments=Ut(),this.mutatedKeys=Ut(),this.documentSet=new Cr(t.docComparator.bind(t))}return Object.defineProperty(t.prototype,"syncedDocuments",{get:function(){return this._syncedDocuments},enumerable:!0,configurable:!0}),t.prototype.computeDocChanges=function(t,e){var n=this,r=e?e.changeSet:new kr,i=e?e.documentSet:this.documentSet,o=e?e.mutatedKeys:this.mutatedKeys,a=i,s=!1,u=this.query.hasLimit()&&i.size===this.query.limit?i.last():null
if(t.inorderTraversal(function(t,e){var c=i.get(t),h=e instanceof de?e:null
h&&(_(t.isEqual(h.key),"Mismatching keys found in document changes: "+t+" != "+h.key),h=n.query.matches(h)?h:null)
var l=!!c&&n.mutatedKeys.has(c.key),f=!!h&&(h.hasLocalMutations||n.mutatedKeys.has(h.key)&&h.hasCommittedMutations),p=!1
c&&h?c.data.isEqual(h.data)?l!==f&&(r.track({type:Sr.Metadata,doc:h}),p=!0):n.shouldWaitForSyncedDocument(c,h)||(r.track({type:Sr.Modified,doc:h}),p=!0,u&&n.query.docComparator(h,u)>0&&(s=!0)):!c&&h?(r.track({type:Sr.Added,doc:h}),p=!0):c&&!h&&(r.track({type:Sr.Removed,doc:c}),p=!0,u&&(s=!0)),p&&(h?(a=a.add(h),o=f?o.add(t):o.delete(t)):(a=a.delete(t),o=o.delete(t)))}),this.query.hasLimit())for(;a.size>this.query.limit;){var c=a.last()
a=a.delete(c.key),o=o.delete(c.key),r.track({type:Sr.Removed,doc:c})}return _(!s||!e,"View was refilled using docs that themselves needed refilling."),{documentSet:a,changeSet:r,needsRefill:s,mutatedKeys:o}},t.prototype.shouldWaitForSyncedDocument=function(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations},t.prototype.applyChanges=function(t,e,n){var r=this
_(!t.needsRefill,"Cannot apply changes that need a refill")
var i=this.documentSet
this.documentSet=t.documentSet,this.mutatedKeys=t.mutatedKeys
var o=t.changeSet.getChanges()
o.sort(function(t,e){return function(t,e){var n=function(t){switch(t){case Sr.Added:return 1
case Sr.Modified:case Sr.Metadata:return 2
case Sr.Removed:return 0
default:return v("Unknown ChangeType: "+t)}}
return n(t)-n(e)}(t.type,e.type)||r.query.docComparator(t.doc,e.doc)}),this.applyTargetChange(n)
var a=e?this.updateLimboDocuments():[],s=0===this.limboDocuments.size&&this.current?Ir.Synced:Ir.Local,u=s!==this.syncState
return this.syncState=s,0!==o.length||u?{snapshot:new Ar(this.query,t.documentSet,i,o,t.mutatedKeys,s===Ir.Local,u,!1),limboChanges:a}:{limboChanges:a}},t.prototype.applyOnlineStateChange=function(t){return this.current&&t===fr.Offline?(this.current=!1,this.applyChanges({documentSet:this.documentSet,changeSet:new kr,mutatedKeys:this.mutatedKeys,needsRefill:!1},!1)):{limboChanges:[]}},t.prototype.shouldBeInLimbo=function(t){return!this._syncedDocuments.has(t)&&!!this.documentSet.has(t)&&!this.documentSet.get(t).hasLocalMutations},t.prototype.applyTargetChange=function(t){var e=this
t&&(t.addedDocuments.forEach(function(t){return e._syncedDocuments=e._syncedDocuments.add(t)}),t.modifiedDocuments.forEach(function(t){return _(e._syncedDocuments.has(t),"Modified document "+t+" not found in view.")}),t.removedDocuments.forEach(function(t){return e._syncedDocuments=e._syncedDocuments.delete(t)}),this.current=t.current)},t.prototype.updateLimboDocuments=function(){var t=this
if(!this.current)return[]
var e=this.limboDocuments
this.limboDocuments=Ut(),this.documentSet.forEach(function(e){t.shouldBeInLimbo(e.key)&&(t.limboDocuments=t.limboDocuments.add(e.key))})
var n=[]
return e.forEach(function(e){t.limboDocuments.has(e)||n.push(new bi(e))}),this.limboDocuments.forEach(function(t){e.has(t)||n.push(new _i(t))}),n},t.prototype.synchronizeWithPersistedState=function(t,e){this._syncedDocuments=e,this.limboDocuments=Ut()
var n=this.computeDocChanges(t)
return this.applyChanges(n,!0)},t.prototype.computeInitialSnapshot=function(){return Ar.fromInitialDocuments(this.query,this.documentSet,this.mutatedKeys,this.syncState===Ir.Local)},t}(),Ei=5,Ti=function(){function t(t,e,n,r){this.asyncQueue=t,this.remoteStore=e,this.updateFunction=n,this.deferred=r,this.retries=Ei,this.backoff=new lr(this.asyncQueue,Z.RetryTransaction)}return t.prototype.run=function(){this.runWithBackOff()},t.prototype.runWithBackOff=function(){var t=this
this.backoff.backoffAndRun(function(){return u.__awaiter(t,void 0,void 0,function(){var t,e,n=this
return u.__generator(this,function(r){return t=this.remoteStore.createTransaction(),(e=this.tryRunUpdateFunction(t))&&e.then(function(e){n.asyncQueue.enqueueAndForget(function(){return t.commit().then(function(){n.deferred.resolve(e)}).catch(function(t){n.handleTransactionError(t)})})}).catch(function(t){n.handleTransactionError(t)}),[2]})})})},t.prototype.tryRunUpdateFunction=function(t){try{var e=this.updateFunction(t)
return!or(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}},t.prototype.handleTransactionError=function(t){var e=this
this.retries>0&&this.isRetryableTransactionError(t)?(this.retries-=1,this.asyncQueue.enqueueAndForget(function(){return e.runWithBackOff(),Promise.resolve()})):this.deferred.reject(t)},t.prototype.isRetryableTransactionError=function(t){if("FirebaseError"===t.name){var e=t.code
return"aborted"===e||"failed-precondition"===e||!wr(e)}return!1},t}(),Si=function(t,e,n){this.query=t,this.targetId=e,this.view=n},Ii=function(t){this.key=t,this.receivedDocument=!1},Ci=function(){function t(t,e,n,r){this.localStore=t,this.remoteStore=e,this.sharedClientState=n,this.currentUser=r,this.syncEngineListener=null,this.queryViewsByQuery=new ge(function(t){return t.canonicalId()}),this.queryViewsByTarget={},this.limboTargetsByKey=new St(ht.comparator),this.limboResolutionsByTarget={},this.limboDocumentRefs=new Kn,this.mutationUserCallbacks={},this.pendingWritesCallbacks=new Map,this.limboTargetIdGenerator=Zt.forSyncEngine(),this.isPrimary=void 0,this.onlineState=fr.Unknown}return Object.defineProperty(t.prototype,"isPrimaryClient",{get:function(){return!0===this.isPrimary},enumerable:!0,configurable:!0}),t.prototype.subscribe=function(t){_(null!==t,"SyncEngine listener cannot be null"),_(null===this.syncEngineListener,"SyncEngine already has a subscriber."),this.syncEngineListener=t},t.prototype.listen=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n,r,i,o
return u.__generator(this,function(a){switch(a.label){case 0:return this.assertSubscribed("listen()"),(r=this.queryViewsByQuery.get(t))?(e=r.targetId,this.sharedClientState.addLocalQueryTarget(e),n=r.view.computeInitialSnapshot(),[3,4]):[3,1]
case 1:return[4,this.localStore.allocateQuery(t)]
case 2:return i=a.sent(),o=this.sharedClientState.addLocalQueryTarget(i.targetId),e=i.targetId,[4,this.initializeViewAndComputeSnapshot(i,"current"===o)]
case 3:n=a.sent(),this.isPrimary&&this.remoteStore.listen(i),a.label=4
case 4:return this.syncEngineListener.onWatchChange([n]),[2,e]}})})},t.prototype.initializeViewAndComputeSnapshot=function(t,e){return u.__awaiter(this,void 0,void 0,function(){var n,r,i,o,a,s,c,h
return u.__generator(this,function(u){switch(u.label){case 0:return n=t.query,[4,this.localStore.executeQuery(n)]
case 1:return r=u.sent(),[4,this.localStore.remoteDocumentKeys(t.targetId)]
case 2:return i=u.sent(),o=new wi(n,i),a=o.computeDocChanges(r),s=Rr.createSynthesizedTargetChangeForCurrentChange(t.targetId,e&&this.onlineState!==fr.Offline),_(0===(c=o.applyChanges(a,!0===this.isPrimary,s)).limboChanges.length,"View returned limbo docs before target ack from the server."),_(!!c.snapshot,"applyChanges for new view should always return a snapshot"),h=new Si(n,t.targetId,o),this.queryViewsByQuery.set(n,h),this.queryViewsByTarget[t.targetId]=h,[2,c.snapshot]}})})},t.prototype.synchronizeViewAndComputeSnapshot=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n,r
return u.__generator(this,function(i){switch(i.label){case 0:return[4,this.localStore.executeQuery(t.query)]
case 1:return e=i.sent(),[4,this.localStore.remoteDocumentKeys(t.targetId)]
case 2:return n=i.sent(),r=t.view.synchronizeWithPersistedState(e,n),this.isPrimary&&this.updateTrackedLimbos(t.targetId,r.limboChanges),[2,r]}})})},t.prototype.unlisten=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n=this
return u.__generator(this,function(r){switch(r.label){case 0:return this.assertSubscribed("unlisten()"),_(!!(e=this.queryViewsByQuery.get(t)),"Trying to unlisten on query not found:"+t),this.isPrimary?(this.sharedClientState.removeLocalQueryTarget(e.targetId),this.sharedClientState.isActiveQueryTarget(e.targetId)?[3,2]:[4,this.localStore.releaseQuery(t,!1).then(function(){n.sharedClientState.clearQueryState(e.targetId),n.remoteStore.unlisten(e.targetId),n.removeAndCleanupQuery(e)}).catch(ln)]):[3,3]
case 1:r.sent(),r.label=2
case 2:return[3,5]
case 3:return this.removeAndCleanupQuery(e),[4,this.localStore.releaseQuery(t,!0)]
case 4:r.sent(),r.label=5
case 5:return[2]}})})},t.prototype.write=function(t,e){return u.__awaiter(this,void 0,void 0,function(){var n
return u.__generator(this,function(r){switch(r.label){case 0:return this.assertSubscribed("write()"),[4,this.localStore.localWrite(t)]
case 1:return n=r.sent(),this.sharedClientState.addPendingMutation(n.batchId),this.addMutationCallback(n.batchId,e),[4,this.emitNewSnapsAndNotifyLocalStore(n.changes)]
case 2:return r.sent(),[4,this.remoteStore.fillWritePipeline()]
case 3:return r.sent(),[2]}})})},t.prototype.runTransaction=function(t,e,n){new Ti(t,this.remoteStore,e,n).run()},t.prototype.applyRemoteEvent=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n=this
return u.__generator(this,function(r){switch(r.label){case 0:this.assertSubscribed("applyRemoteEvent()"),r.label=1
case 1:return r.trys.push([1,4,,6]),[4,this.localStore.applyRemoteEvent(t)]
case 2:return e=r.sent(),k(t.targetChanges,function(t,e){var r=n.limboResolutionsByTarget[Number(t)]
r&&(_(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,"Limbo resolution for single document contains multiple changes."),e.addedDocuments.size>0?r.receivedDocument=!0:e.modifiedDocuments.size>0?_(r.receivedDocument,"Received change for limbo target document without add."):e.removedDocuments.size>0&&(_(r.receivedDocument,"Received remove for limbo target document without add."),r.receivedDocument=!1))}),[4,this.emitNewSnapsAndNotifyLocalStore(e,t)]
case 3:return r.sent(),[3,6]
case 4:return[4,ln(r.sent())]
case 5:return r.sent(),[3,6]
case 6:return[2]}})})},t.prototype.applyOnlineStateChange=function(t,e){if(this.isPrimary&&e===pr.RemoteStore||!this.isPrimary&&e===pr.SharedClientState){this.assertSubscribed("applyOnlineStateChange()")
var n=[]
this.queryViewsByQuery.forEach(function(e,r){var i=r.view.applyOnlineStateChange(t)
_(0===i.limboChanges.length,"OnlineState should not affect limbo documents."),i.snapshot&&n.push(i.snapshot)}),this.syncEngineListener.onOnlineStateChange(t),this.syncEngineListener.onWatchChange(n),this.onlineState=t,this.isPrimary&&this.sharedClientState.setOnlineState(t)}},t.prototype.rejectListen=function(t,e){return u.__awaiter(this,void 0,void 0,function(){var n,r,i,o,a,s,c=this
return u.__generator(this,function(u){switch(u.label){case 0:return this.assertSubscribed("rejectListens()"),this.sharedClientState.updateQueryState(t,"rejected",e),n=this.limboResolutionsByTarget[t],(r=n&&n.key)?(this.limboTargetsByKey=this.limboTargetsByKey.remove(r),delete this.limboResolutionsByTarget[t],i=(i=new St(ht.comparator)).insert(r,new ye(r,Tt.forDeletedDoc())),o=Ut().add(r),a=new Dr(Tt.MIN,{},new kt(z),i,o),[2,this.applyRemoteEvent(a)]):[3,1]
case 1:return _(!!(s=this.queryViewsByTarget[t]),"Unknown targetId: "+t),[4,this.localStore.releaseQuery(s.query,!1).then(function(){return c.removeAndCleanupQuery(s)}).catch(ln)]
case 2:u.sent(),this.syncEngineListener.onWatchError(s.query,e),u.label=3
case 3:return[2]}})})},t.prototype.applyBatchState=function(t,e,n){return u.__awaiter(this,void 0,void 0,function(){var r
return u.__generator(this,function(i){switch(i.label){case 0:return this.assertSubscribed("applyBatchState()"),[4,this.localStore.lookupMutationDocuments(t)]
case 1:return null===(r=i.sent())?(y("SyncEngine","Cannot apply mutation batch with id: "+t),[2]):"pending"!==e?[3,3]:[4,this.remoteStore.fillWritePipeline()]
case 2:return i.sent(),[3,4]
case 3:"acknowledged"===e||"rejected"===e?(this.processUserCallback(t,n||null),this.localStore.removeCachedMutationBatchMetadata(t)):v("Unknown batchState: "+e),i.label=4
case 4:return[4,this.emitNewSnapsAndNotifyLocalStore(r)]
case 5:return i.sent(),[2]}})})},t.prototype.applySuccessfulWrite=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n
return u.__generator(this,function(r){switch(r.label){case 0:this.assertSubscribed("applySuccessfulWrite()"),e=t.batch.batchId,this.processUserCallback(e,null),this.triggerPendingWritesCallbacks(e),r.label=1
case 1:return r.trys.push([1,4,,6]),[4,this.localStore.acknowledgeBatch(t)]
case 2:return n=r.sent(),this.sharedClientState.updateMutationState(e,"acknowledged"),[4,this.emitNewSnapsAndNotifyLocalStore(n)]
case 3:return r.sent(),[3,6]
case 4:return[4,ln(r.sent())]
case 5:return r.sent(),[3,6]
case 6:return[2]}})})},t.prototype.rejectFailedWrite=function(t,e){return u.__awaiter(this,void 0,void 0,function(){var n
return u.__generator(this,function(r){switch(r.label){case 0:this.assertSubscribed("rejectFailedWrite()"),this.processUserCallback(t,e),this.triggerPendingWritesCallbacks(t),r.label=1
case 1:return r.trys.push([1,4,,6]),[4,this.localStore.rejectBatch(t)]
case 2:return n=r.sent(),this.sharedClientState.updateMutationState(t,"rejected",e),[4,this.emitNewSnapsAndNotifyLocalStore(n)]
case 3:return r.sent(),[3,6]
case 4:return[4,ln(r.sent())]
case 5:return r.sent(),[3,6]
case 6:return[2]}})})},t.prototype.registerPendingWritesCallback=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n
return u.__generator(this,function(r){switch(r.label){case 0:return this.remoteStore.canUseNetwork()||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."),[4,this.localStore.getHighestUnacknowledgedBatchId()]
case 1:return-1===(e=r.sent())?(t.resolve(),[2]):((n=this.pendingWritesCallbacks.get(e)||[]).push(t),this.pendingWritesCallbacks.set(e,n),[2])}})})},t.prototype.triggerPendingWritesCallbacks=function(t){(this.pendingWritesCallbacks.get(t)||[]).forEach(function(t){t.resolve()}),this.pendingWritesCallbacks.delete(t)},t.prototype.rejectOutstandingPendingWritesCallbacks=function(t){this.pendingWritesCallbacks.forEach(function(e){e.forEach(function(e){e.reject(new T(E.CANCELLED,t))})}),this.pendingWritesCallbacks.clear()},t.prototype.addMutationCallback=function(t,e){var n=this.mutationUserCallbacks[this.currentUser.toKey()]
n||(n=new St(z)),n=n.insert(t,e),this.mutationUserCallbacks[this.currentUser.toKey()]=n},t.prototype.processUserCallback=function(t,e){var n=this.mutationUserCallbacks[this.currentUser.toKey()]
if(n){var r=n.get(t)
r&&(_(t===n.minKey(),"Mutation callbacks processed out-of-order?"),e?r.reject(e):r.resolve(),n=n.remove(t)),this.mutationUserCallbacks[this.currentUser.toKey()]=n}},t.prototype.removeAndCleanupQuery=function(t){var e=this
if(this.sharedClientState.removeLocalQueryTarget(t.targetId),this.queryViewsByQuery.delete(t.query),delete this.queryViewsByTarget[t.targetId],this.isPrimary){var n=this.limboDocumentRefs.referencesForId(t.targetId)
this.limboDocumentRefs.removeReferencesForId(t.targetId),n.forEach(function(t){e.limboDocumentRefs.containsKey(t)||e.removeLimboTarget(t)})}},t.prototype.removeLimboTarget=function(t){var e=this.limboTargetsByKey.get(t)
null!==e&&(this.remoteStore.unlisten(e),this.limboTargetsByKey=this.limboTargetsByKey.remove(t),delete this.limboResolutionsByTarget[e])},t.prototype.updateTrackedLimbos=function(t,e){for(var n=0,r=e;n<r.length;n++){var i=r[n]
i instanceof _i?(this.limboDocumentRefs.addReference(i.key,t),this.trackLimboChange(i)):i instanceof bi?(y("SyncEngine","Document no longer in limbo: "+i.key),this.limboDocumentRefs.removeReference(i.key,t),this.limboDocumentRefs.containsKey(i.key)||this.removeLimboTarget(i.key)):v("Unknown limbo change: "+JSON.stringify(i))}},t.prototype.trackLimboChange=function(t){var e=t.key
if(!this.limboTargetsByKey.get(e)){y("SyncEngine","New document in limbo: "+e)
var n=this.limboTargetIdGenerator.next(),r=jr.atPath(e.path)
this.limboResolutionsByTarget[n]=new Ii(e),this.remoteStore.listen(new Xe(r,n,Qe.LimboResolution,ot.INVALID)),this.limboTargetsByKey=this.limboTargetsByKey.insert(e,n)}},t.prototype.currentLimboDocs=function(){return this.limboTargetsByKey},t.prototype.emitNewSnapsAndNotifyLocalStore=function(t,e){return u.__awaiter(this,void 0,void 0,function(){var n,r,i,o=this
return u.__generator(this,function(a){switch(a.label){case 0:return n=[],r=[],i=[],this.queryViewsByQuery.forEach(function(a,s){i.push(Promise.resolve().then(function(){var e=s.view.computeDocChanges(t)
return e.needsRefill?o.localStore.executeQuery(s.query).then(function(t){return s.view.computeDocChanges(t,e)}):e}).then(function(t){var i=e&&e.targetChanges[s.targetId],a=s.view.applyChanges(t,!0===o.isPrimary,i)
if(o.updateTrackedLimbos(s.targetId,a.limboChanges),a.snapshot){o.isPrimary&&o.sharedClientState.updateQueryState(s.targetId,a.snapshot.fromCache?"not-current":"current"),n.push(a.snapshot)
var u=vi.fromSnapshot(s.targetId,a.snapshot)
r.push(u)}}))}),[4,Promise.all(i)]
case 1:return a.sent(),this.syncEngineListener.onWatchChange(n),[4,this.localStore.notifyLocalViewChanges(r)]
case 2:return a.sent(),[2]}})})},t.prototype.assertSubscribed=function(t){_(null!==this.syncEngineListener,"Trying to call "+t+" before calling subscribe().")},t.prototype.handleCredentialChange=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n
return u.__generator(this,function(r){switch(r.label){case 0:return e=!this.currentUser.isEqual(t),this.currentUser=t,e?(this.rejectOutstandingPendingWritesCallbacks("'waitForPendingWrites' promise is rejected due to a user change."),[4,this.localStore.handleUserChange(t)]):[3,3]
case 1:return n=r.sent(),this.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),[4,this.emitNewSnapsAndNotifyLocalStore(n.affectedDocuments)]
case 2:r.sent(),r.label=3
case 3:return[4,this.remoteStore.handleCredentialChange()]
case 4:return r.sent(),[2]}})})},t.prototype.applyPrimaryState=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n,r,i,o,a,s,c=this
return u.__generator(this,function(u){switch(u.label){case 0:return!0!==t||!0===this.isPrimary?[3,3]:(this.isPrimary=!0,[4,this.remoteStore.applyPrimaryState(!0)])
case 1:return u.sent(),e=this.sharedClientState.getAllActiveQueryTargets(),[4,this.synchronizeQueryViewsAndRaiseSnapshots(e.toArray())]
case 2:for(n=u.sent(),r=0,i=n;r<i.length;r++)o=i[r],this.remoteStore.listen(o)
return[3,7]
case 3:return!1!==t||!1===this.isPrimary?[3,7]:(this.isPrimary=!1,a=[],s=Promise.resolve(),N(this.queryViewsByTarget,function(t,e){c.sharedClientState.isLocalQueryTarget(t)?a.push(t):s=s.then(function(){return c.unlisten(e.query)}),c.remoteStore.unlisten(e.targetId)}),[4,s])
case 4:return u.sent(),[4,this.synchronizeQueryViewsAndRaiseSnapshots(a)]
case 5:return u.sent(),this.resetLimboDocuments(),[4,this.remoteStore.applyPrimaryState(!1)]
case 6:u.sent(),u.label=7
case 7:return[2]}})})},t.prototype.resetLimboDocuments=function(){var t=this
N(this.limboResolutionsByTarget,function(e){t.remoteStore.unlisten(e)}),this.limboDocumentRefs.removeAllReferences(),this.limboResolutionsByTarget=[],this.limboTargetsByKey=new St(ht.comparator)},t.prototype.synchronizeQueryViewsAndRaiseSnapshots=function(t){return u.__awaiter(this,void 0,void 0,function(){var e,n,r,i,o,a,s,c,h
return u.__generator(this,function(u){switch(u.label){case 0:e=[],n=[],r=0,i=t,u.label=1
case 1:return r<i.length?(o=i[r],a=void 0,(s=this.queryViewsByTarget[o])?[4,this.localStore.releaseQuery(s.query,!0)]:[3,5]):[3,11]
case 2:return u.sent(),[4,this.localStore.allocateQuery(s.query)]
case 3:return a=u.sent(),[4,this.synchronizeViewAndComputeSnapshot(s)]
case 4:return(c=u.sent()).snapshot&&n.push(c.snapshot),[3,9]
case 5:return _(!0===this.isPrimary,"A secondary tab should never have an active query without an active view."),[4,this.localStore.getQueryForTarget(o)]
case 6:return _(!!(h=u.sent()),"Query data for target "+o+" not found"),[4,this.localStore.allocateQuery(h)]
case 7:return a=u.sent(),[4,this.initializeViewAndComputeSnapshot(a,!1)]
case 8:u.sent(),u.label=9
case 9:e.push(a),u.label=10
case 10:return r++,[3,1]
case 11:return this.syncEngineListener.onWatchChange(n),[2,e]}})})},t.prototype.getActiveClients=function(){return this.localStore.getActiveClients()},t.prototype.applyTargetState=function(t,e,n){return u.__awaiter(this,void 0,void 0,function(){var r,i,o,a,s
return u.__generator(this,function(u){switch(u.label){case 0:if(this.isPrimary)return y("SyncEngine","Ignoring unexpected query state notification."),[2]
if(!this.queryViewsByTarget[t])return[3,11]
switch(e){case"current":case"not-current":return[3,1]
case"rejected":return[3,8]}return[3,10]
case 1:return u.trys.push([1,4,,8]),[4,this.localStore.getNewDocumentChanges()]
case 2:return r=u.sent(),i=Dr.createSynthesizedRemoteEventForCurrentChange(t,"current"===e),[4,this.emitNewSnapsAndNotifyLocalStore(r,i)]
case 3:return u.sent(),[3,11]
case 4:return(c=o=u.sent()).code!==E.DATA_LOSS||c.message!==_e?[3,6]:(a=[],N(this.queryViewsByTarget,function(t){return a.push(t)}),[4,this.synchronizeQueryViewsAndRaiseSnapshots(a)])
case 5:return u.sent(),[3,7]
case 6:throw o
case 7:return[3,8]
case 8:return s=this.queryViewsByTarget[t],this.removeAndCleanupQuery(s),[4,this.localStore.releaseQuery(s.query,!0)]
case 9:return u.sent(),this.syncEngineListener.onWatchError(s.query,n),[3,11]
case 10:v("Unexpected target state: "+e),u.label=11
case 11:return[2]}var c})})},t.prototype.applyActiveTargetsChange=function(t,e){return u.__awaiter(this,void 0,void 0,function(){var n,r,i,o,a,s,c,h,l,f=this
return u.__generator(this,function(p){switch(p.label){case 0:if(!this.isPrimary)return[2]
n=0,r=t,p.label=1
case 1:return n<r.length?(l=r[n],_(!this.queryViewsByTarget[l],"Trying to add an already active target"),[4,this.localStore.getQueryForTarget(l)]):[3,6]
case 2:return _(!!(i=p.sent()),"Query data for active target "+l+" not found"),[4,this.localStore.allocateQuery(i)]
case 3:return o=p.sent(),[4,this.initializeViewAndComputeSnapshot(o,!1)]
case 4:p.sent(),this.remoteStore.listen(o),p.label=5
case 5:return n++,[3,1]
case 6:a=function(t){var e
return u.__generator(this,function(n){switch(n.label){case 0:return(e=s.queryViewsByTarget[t])?[4,s.localStore.releaseQuery(e.query,!1).then(function(){f.remoteStore.unlisten(t),f.removeAndCleanupQuery(e)}).catch(ln)]:[3,2]
case 1:n.sent(),n.label=2
case 2:return[2]}})},s=this,c=0,h=e,p.label=7
case 7:return c<h.length?(l=h[c],[5,a(l)]):[3,10]
case 8:p.sent(),p.label=9
case 9:return c++,[3,7]
case 10:return[2]}})})},t.prototype.enableNetwork=function(){return this.localStore.setNetworkEnabled(!0),this.remoteStore.enableNetwork()},t.prototype.disableNetwork=function(){return this.localStore.setNetworkEnabled(!1),this.remoteStore.disableNetwork()},t.prototype.getRemoteKeysForTarget=function(t){var e=this.limboResolutionsByTarget[t]
return e&&e.receivedDocument?Ut().add(e.key):this.queryViewsByTarget[t]?this.queryViewsByTarget[t].view.syncedDocuments:Ut()},t}(),Ni=function(){function t(t){this.uid=t}return t.prototype.isAuthenticated=function(){return null!=this.uid},t.prototype.toKey=function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"},t.prototype.isEqual=function(t){return t.uid===this.uid},t.UNAUTHENTICATED=new t(null),t.GOOGLE_CREDENTIALS=new t("google-credentials-uid"),t.FIRST_PARTY=new t("first-party-uid"),t}(),ki="SharedClientState",Ai="firestore_clients",Di="firestore_mutations",Ri="firestore_targets",Oi="firestore_online_state",Pi="firestore_sequence_number",xi=function(){function t(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r,_(void 0!==r==("rejected"===n),"MutationMetadata must contain an error iff state is 'rejected'")}return t.fromWebStorageEntry=function(e,n,i){var o=JSON.parse(i),a="object"===r(o)&&-1!==["pending","acknowledged","rejected"].indexOf(o.state)&&(void 0===o.error||"object"===r(o.error)),s=void 0
return a&&o.error&&(a="string"==typeof o.error.message&&"string"==typeof o.error.code)&&(s=new T(o.error.code,o.error.message)),a?new t(e,n,o.state,s):(m(ki,"Failed to parse mutation state for ID '"+n+"': "+i),null)},t.prototype.toWebStorageJSON=function(){var t={state:this.state,updateTimeMs:Date.now()}
return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},t}(),Mi=function(){function t(t,e,n){this.targetId=t,this.state=e,this.error=n,_(void 0!==n==("rejected"===e),"QueryTargetMetadata must contain an error iff state is 'rejected'")}return t.fromWebStorageEntry=function(e,n){var i=JSON.parse(n),o="object"===r(i)&&-1!==["not-current","current","rejected"].indexOf(i.state)&&(void 0===i.error||"object"===r(i.error)),a=void 0
return o&&i.error&&(o="string"==typeof i.error.message&&"string"==typeof i.error.code)&&(a=new T(i.error.code,i.error.message)),o?new t(e,i.state,a):(m(ki,"Failed to parse target state for ID '"+e+"': "+n),null)},t.prototype.toWebStorageJSON=function(){var t={state:this.state,updateTimeMs:Date.now()}
return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},t}(),Li=function(){function t(t,e){this.clientId=t,this.activeTargetIds=e}return t.fromWebStorageEntry=function(e,n){for(var i=JSON.parse(n),o="object"===r(i)&&i.activeTargetIds instanceof Array,a=Vt(),s=0;o&&s<i.activeTargetIds.length;++s)o=ar(i.activeTargetIds[s]),a=a.add(i.activeTargetIds[s])
return o?new t(e,a):(m(ki,"Failed to parse client data for instance '"+e+"': "+n),null)},t}(),Fi=function(){function t(t,e){this.clientId=t,this.onlineState=e}return t.fromWebStorageEntry=function(e){var n=JSON.parse(e)
return"object"===r(n)&&n.onlineState in fr&&"string"==typeof n.clientId?new t(n.clientId,fr[n.onlineState]):(m(ki,"Failed to parse online state: "+e),null)},t}(),Ui=function(){function t(){this.activeTargetIds=Vt()}return t.prototype.addQueryTarget=function(t){_(!this.activeTargetIds.has(t),"Target with ID '"+t+"' already active."),this.activeTargetIds=this.activeTargetIds.add(t)},t.prototype.removeQueryTarget=function(t){this.activeTargetIds=this.activeTargetIds.delete(t)},t.prototype.toWebStorageJSON=function(){var t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()}
return JSON.stringify(t)},t}(),qi=function(){function t(e,n,r,i,o){if(this.queue=e,this.platform=n,this.persistenceKey=r,this.localClientId=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.activeClients={},this.storageListener=this.handleWebStorageEvent.bind(this),this.started=!1,this.earlyEvents=[],!t.isAvailable(this.platform))throw new T(E.UNIMPLEMENTED,"LocalStorage is not available on this platform.")
var a=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
this.storage=this.platform.window.localStorage,this.currentUser=o,this.localClientStorageKey=this.toWebStorageClientStateKey(this.localClientId),this.sequenceNumberKey=Pi+"_"+r,this.activeClients[this.localClientId]=new Ui,this.clientStateKeyRe=new RegExp("^"+Ai+"_"+a+"_([^_]*)$"),this.mutationBatchKeyRe=new RegExp("^"+Di+"_"+a+"_(\\d+)(?:_(.*))?$"),this.queryTargetKeyRe=new RegExp("^"+Ri+"_"+a+"_(\\d+)$"),this.onlineStateKey=Oi+"_"+r,this.platform.window.addEventListener("storage",this.storageListener)}return t.isAvailable=function(t){return!(!t.window||null==t.window.localStorage)},t.prototype.start=function(){return u.__awaiter(this,void 0,void 0,function(){var t,e,n,r,i,o,a,s,c,h,l,f=this
return u.__generator(this,function(u){switch(u.label){case 0:return _(!this.started,"WebStorageSharedClientState already started"),_(null!==this.syncEngine,"syncEngine property must be set before calling start()"),_(null!==this.onlineStateHandler,"onlineStateHandler property must be set before calling start()"),[4,this.syncEngine.getActiveClients()]
case 1:for(t=u.sent(),e=0,n=t;e<n.length;e++)(r=n[e])!==this.localClientId&&(i=this.getItem(this.toWebStorageClientStateKey(r)))&&(o=Li.fromWebStorageEntry(r,i))&&(this.activeClients[o.clientId]=o)
for(this.persistClientState(),(a=this.storage.getItem(this.onlineStateKey))&&(s=this.fromWebStorageOnlineState(a))&&this.handleOnlineStateEvent(s),c=0,h=this.earlyEvents;c<h.length;c++)l=h[c],this.handleWebStorageEvent(l)
return this.earlyEvents=[],this.platform.window.addEventListener("unload",function(){return f.shutdown()}),this.started=!0,[2]}})})},t.prototype.writeSequenceNumber=function(t){this.setItem(this.sequenceNumberKey,JSON.stringify(t))},t.prototype.getAllActiveQueryTargets=function(){var t=Vt()
return k(this.activeClients,function(e,n){t=t.unionWith(n.activeTargetIds)}),t},t.prototype.isActiveQueryTarget=function(t){for(var e in this.activeClients)if(this.activeClients.hasOwnProperty(e)&&this.activeClients[e].activeTargetIds.has(t))return!0
return!1},t.prototype.addPendingMutation=function(t){this.persistMutationState(t,"pending")},t.prototype.updateMutationState=function(t,e,n){this.persistMutationState(t,e,n),this.removeMutationState(t)},t.prototype.addLocalQueryTarget=function(t){var e="not-current"
if(this.isActiveQueryTarget(t)){var n=this.storage.getItem(this.toWebStorageQueryTargetMetadataKey(t))
if(n){var r=Mi.fromWebStorageEntry(t,n)
r&&(e=r.state)}}return this.localClientState.addQueryTarget(t),this.persistClientState(),e},t.prototype.removeLocalQueryTarget=function(t){this.localClientState.removeQueryTarget(t),this.persistClientState()},t.prototype.isLocalQueryTarget=function(t){return this.localClientState.activeTargetIds.has(t)},t.prototype.clearQueryState=function(t){this.removeItem(this.toWebStorageQueryTargetMetadataKey(t))},t.prototype.updateQueryState=function(t,e,n){this.persistQueryTargetState(t,e,n)},t.prototype.handleUserChange=function(t,e,n){var r=this
e.forEach(function(t){r.removeMutationState(t)}),this.currentUser=t,n.forEach(function(t){r.addPendingMutation(t)})},t.prototype.setOnlineState=function(t){this.persistOnlineState(t)},t.prototype.shutdown=function(){this.started&&(this.platform.window.removeEventListener("storage",this.storageListener),this.removeItem(this.localClientStorageKey),this.started=!1)},t.prototype.getItem=function(t){var e=this.storage.getItem(t)
return y(ki,"READ",t,e),e},t.prototype.setItem=function(t,e){y(ki,"SET",t,e),this.storage.setItem(t,e)},t.prototype.removeItem=function(t){y(ki,"REMOVE",t),this.storage.removeItem(t)},t.prototype.handleWebStorageEvent=function(t){var e=this
if(t.storageArea===this.storage){if(y(ki,"EVENT",t.key,t.newValue),t.key===this.localClientStorageKey)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state")
this.queue.enqueueAndForget(function(){return u.__awaiter(e,void 0,void 0,function(){var e,n,r,i,o,a
return u.__generator(this,function(s){if(!this.started)return this.earlyEvents.push(t),[2]
if(null===t.key)return[2]
if(this.clientStateKeyRe.test(t.key)){if(null==t.newValue)return n=this.fromWebStorageClientStateKey(t.key),[2,this.handleClientStateEvent(n,null)]
if(e=this.fromWebStorageClientState(t.key,t.newValue))return[2,this.handleClientStateEvent(e.clientId,e)]}else if(this.mutationBatchKeyRe.test(t.key)){if(null!==t.newValue&&(r=this.fromWebStorageMutationMetadata(t.key,t.newValue)))return[2,this.handleMutationBatchEvent(r)]}else if(this.queryTargetKeyRe.test(t.key)){if(null!==t.newValue&&(i=this.fromWebStorageQueryTargetMetadata(t.key,t.newValue)))return[2,this.handleQueryTargetEvent(i)]}else if(t.key===this.onlineStateKey){if(null!==t.newValue&&(o=this.fromWebStorageOnlineState(t.newValue)))return[2,this.handleOnlineStateEvent(o)]}else t.key===this.sequenceNumberKey&&(_(!!this.sequenceNumberHandler,"Missing sequenceNumberHandler"),(a=function(t){var e=ot.INVALID
if(null!=t)try{var n=JSON.parse(t)
_("number"==typeof n,"Found non-numeric sequence number"),e=n}catch(t){m(ki,"Failed to read sequence number from WebStorage",t)}return e}(t.newValue))!==ot.INVALID&&this.sequenceNumberHandler(a))
return[2]})})})}},Object.defineProperty(t.prototype,"localClientState",{get:function(){return this.activeClients[this.localClientId]},enumerable:!0,configurable:!0}),t.prototype.persistClientState=function(){this.setItem(this.localClientStorageKey,this.localClientState.toWebStorageJSON())},t.prototype.persistMutationState=function(t,e,n){var r=new xi(this.currentUser,t,e,n),i=this.toWebStorageMutationBatchKey(t)
this.setItem(i,r.toWebStorageJSON())},t.prototype.removeMutationState=function(t){var e=this.toWebStorageMutationBatchKey(t)
this.removeItem(e)},t.prototype.persistOnlineState=function(t){var e={clientId:this.localClientId,onlineState:fr[t]}
this.storage.setItem(this.onlineStateKey,JSON.stringify(e))},t.prototype.persistQueryTargetState=function(t,e,n){var r=this.toWebStorageQueryTargetMetadataKey(t),i=new Mi(t,e,n)
this.setItem(r,i.toWebStorageJSON())},t.prototype.toWebStorageClientStateKey=function(t){return _(-1===t.indexOf("_"),"Client key cannot contain '_', but was '"+t+"'"),Ai+"_"+this.persistenceKey+"_"+t},t.prototype.toWebStorageQueryTargetMetadataKey=function(t){return Ri+"_"+this.persistenceKey+"_"+t},t.prototype.toWebStorageMutationBatchKey=function(t){var e=Di+"_"+this.persistenceKey+"_"+t
return this.currentUser.isAuthenticated()&&(e+="_"+this.currentUser.uid),e},t.prototype.fromWebStorageClientStateKey=function(t){var e=this.clientStateKeyRe.exec(t)
return e?e[1]:null},t.prototype.fromWebStorageClientState=function(t,e){var n=this.fromWebStorageClientStateKey(t)
return _(null!==n,"Cannot parse client state key '"+t+"'"),Li.fromWebStorageEntry(n,e)},t.prototype.fromWebStorageMutationMetadata=function(t,e){var n=this.mutationBatchKeyRe.exec(t)
_(null!==n,"Cannot parse mutation batch key '"+t+"'")
var r=Number(n[1]),i=void 0!==n[2]?n[2]:null
return xi.fromWebStorageEntry(new Ni(i),r,e)},t.prototype.fromWebStorageQueryTargetMetadata=function(t,e){var n=this.queryTargetKeyRe.exec(t)
_(null!==n,"Cannot parse query target key '"+t+"'")
var r=Number(n[1])
return Mi.fromWebStorageEntry(r,e)},t.prototype.fromWebStorageOnlineState=function(t){return Fi.fromWebStorageEntry(t)},t.prototype.handleMutationBatchEvent=function(t){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(e){return t.user.uid!==this.currentUser.uid?(y(ki,"Ignoring mutation for non-active user "+t.user.uid),[2]):[2,this.syncEngine.applyBatchState(t.batchId,t.state,t.error)]})})},t.prototype.handleQueryTargetEvent=function(t){return this.syncEngine.applyTargetState(t.targetId,t.state,t.error)},t.prototype.handleClientStateEvent=function(t,e){var n=this,r=this.getAllActiveQueryTargets()
e?this.activeClients[t]=e:delete this.activeClients[t]
var i=this.getAllActiveQueryTargets(),o=[],a=[]
return i.forEach(function(t){return u.__awaiter(n,void 0,void 0,function(){return u.__generator(this,function(e){return r.has(t)||o.push(t),[2]})})}),r.forEach(function(t){return u.__awaiter(n,void 0,void 0,function(){return u.__generator(this,function(e){return i.has(t)||a.push(t),[2]})})}),this.syncEngine.applyActiveTargetsChange(o,a)},t.prototype.handleOnlineStateEvent=function(t){this.activeClients[t.clientId]&&this.onlineStateHandler(t.onlineState)},t}(),Vi=function(){function t(){this.localState=new Ui,this.queryState={},this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null}return t.prototype.addPendingMutation=function(t){},t.prototype.updateMutationState=function(t,e,n){},t.prototype.addLocalQueryTarget=function(t){return this.localState.addQueryTarget(t),this.queryState[t]||"not-current"},t.prototype.updateQueryState=function(t,e,n){this.queryState[t]=e},t.prototype.removeLocalQueryTarget=function(t){this.localState.removeQueryTarget(t)},t.prototype.isLocalQueryTarget=function(t){return this.localState.activeTargetIds.has(t)},t.prototype.clearQueryState=function(t){delete this.queryState[t]},t.prototype.getAllActiveQueryTargets=function(){return this.localState.activeTargetIds},t.prototype.isActiveQueryTarget=function(t){return this.localState.activeTargetIds.has(t)},t.prototype.start=function(){return this.localState=new Ui,Promise.resolve()},t.prototype.handleUserChange=function(t,e,n){},t.prototype.setOnlineState=function(t){},t.prototype.shutdown=function(){},t.prototype.writeSequenceNumber=function(t){},t}(),Bi=function(){function t(t,e){this.cacheSizeBytes=t,this.synchronizeTabs=e}return t.prototype.lruParams=function(){return en.withCacheSize(this.cacheSizeBytes)},t}(),ji=function(){},Wi=function(){function t(t,e,n,r){this.platform=t,this.databaseInfo=e,this.credentials=n,this.asyncQueue=r,this.clientId=G.newId()}return t.prototype.start=function(t){var e=this
this.verifyNotShutdown()
var n=new lt,r=new lt,i=!1
return this.credentials.setChangeListener(function(o){i?e.asyncQueue.enqueueAndForget(function(){return e.handleCredentialChange(o)}):(i=!0,e.initializePersistence(t,r,o).then(function(t){return e.initializeRest(o,t)}).then(n.resolve,n.reject))}),this.asyncQueue.enqueueAndForget(function(){return n.promise}),r.promise},t.prototype.enableNetwork=function(){var t=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return t.syncEngine.enableNetwork()})},t.prototype.initializePersistence=function(t,e,n){var r=this
return t instanceof Bi?this.startIndexedDbPersistence(n,t).then(function(t){return e.resolve(),t}).catch(function(t){if(e.reject(t),!r.canFallback(t))throw t
return console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.startMemoryPersistence()}):(e.resolve(),this.startMemoryPersistence())},t.prototype.canFallback=function(t){return t instanceof T?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code},t.prototype.verifyNotShutdown=function(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been shutdown.")},t.prototype.startIndexedDbPersistence=function(t,e){var n=this,r=hn.buildStoragePrefix(this.databaseInfo),i=new di(this.databaseInfo.databaseId,{useProto3Json:!0})
return Promise.resolve().then(function(){return u.__awaiter(n,void 0,void 0,function(){var n,o
return u.__generator(this,function(a){switch(a.label){case 0:if(e.synchronizeTabs&&!qi.isAvailable(this.platform))throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.")
return o=e.lruParams(),e.synchronizeTabs?(this.sharedClientState=new qi(this.asyncQueue,this.platform,r,this.clientId,t),[4,hn.createMultiClientIndexedDbPersistence(r,this.clientId,this.platform,this.asyncQueue,i,o,{sequenceNumberSyncer:this.sharedClientState})]):[3,2]
case 1:return n=a.sent(),[3,4]
case 2:return this.sharedClientState=new Vi,[4,hn.createIndexedDbPersistence(r,this.clientId,this.platform,this.asyncQueue,i,o)]
case 3:n=a.sent(),a.label=4
case 4:return this.persistence=n,[2,n.referenceDelegate.garbageCollector]}})})})},t.prototype.startMemoryPersistence=function(){return this.persistence=Jn.createEagerPersistence(this.clientId),this.sharedClientState=new Vi,Promise.resolve(null)},t.prototype.initializeRest=function(t,e){var n=this
return y("FirestoreClient","Initializing. user=",t.uid),this.platform.loadConnection(this.databaseInfo).then(function(r){return u.__awaiter(n,void 0,void 0,function(){var n,i,o,a,s,c=this
return u.__generator(this,function(h){switch(h.label){case 0:return this.localStore=new Gn(this.persistence,t),e&&(this.lruScheduler=new nn(e,this.asyncQueue,this.localStore)),n=this.platform.newConnectivityMonitor(),i=this.platform.newSerializer(this.databaseInfo.databaseId),o=new gr(this.asyncQueue,r,this.credentials,i),a=function(t){return c.syncEngine.applyOnlineStateChange(t,pr.RemoteStore)},s=function(t){return c.syncEngine.applyOnlineStateChange(t,pr.SharedClientState)},this.remoteStore=new Vr(this.localStore,o,this.asyncQueue,a,n),this.syncEngine=new Ci(this.localStore,this.remoteStore,this.sharedClientState,t),this.sharedClientState.onlineStateHandler=s,this.remoteStore.syncEngine=this.syncEngine,this.sharedClientState.syncEngine=this.syncEngine,this.eventMgr=new mi(this.syncEngine),[4,this.sharedClientState.start()]
case 1:return h.sent(),[4,this.remoteStore.start()]
case 2:return h.sent(),[4,this.persistence.setPrimaryStateListener(function(t){return u.__awaiter(c,void 0,void 0,function(){return u.__generator(this,function(e){switch(e.label){case 0:return[4,this.syncEngine.applyPrimaryState(t)]
case 1:return e.sent(),this.lruScheduler&&(t&&!this.lruScheduler.started?this.lruScheduler.start():t||this.lruScheduler.stop()),[2]}})})})]
case 3:return h.sent(),[4,this.persistence.setDatabaseDeletedListener(function(){return u.__awaiter(c,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return[4,this.shutdown()]
case 1:return t.sent(),[2]}})})})]
case 4:return h.sent(),[2]}})})})},t.prototype.handleCredentialChange=function(t){return this.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Credential Changed. Current user: "+t.uid),this.syncEngine.handleCredentialChange(t)},t.prototype.disableNetwork=function(){var t=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return t.syncEngine.disableNetwork()})},t.prototype.shutdown=function(){var t=this
return this.asyncQueue.enqueueAndInitiateShutdown(function(){return u.__awaiter(t,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return this.lruScheduler&&this.lruScheduler.stop(),[4,this.remoteStore.shutdown()]
case 1:return t.sent(),[4,this.sharedClientState.shutdown()]
case 2:return t.sent(),[4,this.persistence.shutdown()]
case 3:return t.sent(),this.credentials.removeChangeListener(),[2]}})})})},t.prototype.waitForPendingWrites=function(){var t=this
this.verifyNotShutdown()
var e=new lt
return this.asyncQueue.enqueueAndForget(function(){return t.syncEngine.registerPendingWritesCallback(e)}),e.promise},t.prototype.listen=function(t,e,n){var r=this
this.verifyNotShutdown()
var i=new gi(t,e,n)
return this.asyncQueue.enqueueAndForget(function(){return r.eventMgr.listen(i)}),i},t.prototype.unlisten=function(t){var e=this
this.clientShutdown||this.asyncQueue.enqueueAndForget(function(){return e.eventMgr.unlisten(t)})},t.prototype.getDocumentFromLocalCache=function(t){var e=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return e.localStore.readDocument(t)}).then(function(t){if(t instanceof de)return t
if(t instanceof ye)return null
throw new T(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")})},t.prototype.getDocumentsFromLocalCache=function(t){var e=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return e.localStore.executeQuery(t)}).then(function(e){var n=Ut(),r=new wi(t,n),i=r.computeDocChanges(e)
return r.applyChanges(i,!1).snapshot})},t.prototype.write=function(t){var e=this
this.verifyNotShutdown()
var n=new lt
return this.asyncQueue.enqueueAndForget(function(){return e.syncEngine.write(t,n)}),n.promise},t.prototype.databaseId=function(){return this.databaseInfo.databaseId},Object.defineProperty(t.prototype,"clientShutdown",{get:function(){return this.asyncQueue.isShuttingDown},enumerable:!0,configurable:!0}),t.prototype.transaction=function(t){var e=this
this.verifyNotShutdown()
var n=new lt
return this.asyncQueue.enqueueAndForget(function(){return e.syncEngine.runTransaction(e.asyncQueue,t,n),Promise.resolve()}),n.promise},t}(),Qi=function(){function t(t){this.observer=t,this.muted=!1}return t.prototype.next=function(t){this.scheduleEvent(this.observer.next,t)},t.prototype.error=function(t){this.scheduleEvent(this.observer.error,t)},t.prototype.mute=function(){this.muted=!0},t.prototype.scheduleEvent=function(t,e){var n=this
this.muted||setTimeout(function(){n.muted||t(e)},0)},t}(),Ki=function(){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
!function(t,e,n,r){if(!(e instanceof Array)||e.length<1)throw new T(E.INVALID_ARGUMENT,"Function FieldPath() requires its fieldNames argument to be an array with at least "+H(1,"element")+".")}(0,t)
for(var n=0;n<t.length;++n)if(x("FieldPath","string",n,t[n]),0===t[n].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.")
this._internalPath=new ct(t)}return t.documentId=function(){return t._DOCUMENT_ID},t.prototype.isEqual=function(e){if(!(e instanceof t))throw Q("isEqual","FieldPath",1,e)
return this._internalPath.isEqual(e._internalPath)},t._DOCUMENT_ID=new t(ct.keyField().canonicalString()),t}(),Hi=new RegExp("[~\\*/\\[\\]]"),Gi=function(t,e){this.user=e,this.type="OAuth",this.authHeaders={Authorization:"Bearer "+t}},zi=function(){function t(){this.changeListener=null}return t.prototype.getToken=function(){return Promise.resolve(null)},t.prototype.invalidateToken=function(){},t.prototype.setChangeListener=function(t){_(!this.changeListener,"Can only call setChangeListener() once."),this.changeListener=t,t(Ni.UNAUTHENTICATED)},t.prototype.removeChangeListener=function(){_(null!==this.changeListener,"removeChangeListener() when no listener registered"),this.changeListener=null},t}(),Yi=function(){function t(t){var e=this
this.app=t,this.tokenListener=null,this.currentUser=Ni.UNAUTHENTICATED,this.tokenCounter=0,this.changeListener=null,this.forceRefresh=!1,this.tokenListener=function(){e.tokenCounter++,e.currentUser=e.getUser(),e.changeListener&&e.changeListener(e.currentUser)},this.tokenCounter=0,this.app.INTERNAL.addAuthTokenListener(this.tokenListener)}return t.prototype.getToken=function(){var t=this
_(null!=this.tokenListener,"getToken cannot be called after listener removed.")
var e=this.tokenCounter,n=this.forceRefresh
return this.forceRefresh=!1,this.app.INTERNAL.getToken(n).then(function(n){if(t.tokenCounter!==e)throw new T(E.ABORTED,"getToken aborted due to token change.")
return n?(_("string"==typeof n.accessToken,"Invalid tokenData returned from getToken():"+n),new Gi(n.accessToken,t.currentUser)):null})},t.prototype.invalidateToken=function(){this.forceRefresh=!0},t.prototype.setChangeListener=function(t){_(!this.changeListener,"Can only call setChangeListener() once."),this.changeListener=t,this.currentUser&&t(this.currentUser)},t.prototype.removeChangeListener=function(){_(null!=this.tokenListener,"removeChangeListener() called twice"),_(null!==this.changeListener,"removeChangeListener() called when no listener registered"),this.app.INTERNAL.removeAuthTokenListener(this.tokenListener),this.tokenListener=null,this.changeListener=null},t.prototype.getUser=function(){var t=this.app.INTERNAL.getUid()
return _(null===t||"string"==typeof t,"Received invalid UID: "+t),new Ni(t)},t}(),Xi=function(){function t(t,e){this.gapi=t,this.sessionIndex=e,this.type="FirstParty",this.user=Ni.FIRST_PARTY}return Object.defineProperty(t.prototype,"authHeaders",{get:function(){var t={"X-Goog-AuthUser":this.sessionIndex},e=this.gapi.auth.getAuthHeaderValueForFirstParty([])
return e&&(t.Authorization=e),t},enumerable:!0,configurable:!0}),t}(),Ji=function(){function t(t,e){this.gapi=t,this.sessionIndex=e}return t.prototype.getToken=function(){return Promise.resolve(new Xi(this.gapi,this.sessionIndex))},t.prototype.setChangeListener=function(t){t(Ni.FIRST_PARTY)},t.prototype.removeChangeListener=function(){},t.prototype.invalidateToken=function(){},t}()
function $i(t){return function(t,e){if("object"!==r(t)||null===t)return!1
for(var n=t,i=0,o=["next","error","complete"];i<o.length;i++){var a=o[i]
if(a in n&&"function"==typeof n[a])return!0}return!1}(t)}var Zi,to=function(){function t(t){this._methodName=t}return t.delete=function(){return D("FieldValue.delete",arguments),eo.instance},t.serverTimestamp=function(){return D("FieldValue.serverTimestamp",arguments),no.instance},t.arrayUnion=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return O("FieldValue.arrayUnion",arguments,1),new ro(t)},t.arrayRemove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return O("FieldValue.arrayRemove",arguments,1),new io(t)},t.increment=function(t){return x("FieldValue.increment","number",1,t),R("FieldValue.increment",arguments,1),new oo(t)},t.prototype.isEqual=function(t){return this===t},t}(),eo=function(t){function e(){return t.call(this,"FieldValue.delete")||this}return u.__extends(e,t),e.instance=new e,e}(to),no=function(t){function e(){return t.call(this,"FieldValue.serverTimestamp")||this}return u.__extends(e,t),e.instance=new e,e}(to),ro=function(t){function e(e){var n=t.call(this,"FieldValue.arrayUnion")||this
return n._elements=e,n}return u.__extends(e,t),e}(to),io=function(t){function e(e){var n=t.call(this,"FieldValue.arrayRemove")||this
return n._elements=e,n}return u.__extends(e,t),e}(to),oo=function(t){function e(e){var n=t.call(this,"FieldValue.increment")||this
return n._operand=e,n}return u.__extends(e,t),e}(to),ao=S(to,"Use FieldValue.<field>() instead."),so=/^__.*__$/,uo=function(){function t(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}return t.prototype.toMutations=function(t,e){var n=[]
return null!==this.fieldMask?n.push(new Bn(t,this.data,this.fieldMask,e)):n.push(new Vn(t,this.data,e)),this.fieldTransforms.length>0&&n.push(new jn(t,this.fieldTransforms)),n},t}(),co=function(){function t(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}return t.prototype.toMutations=function(t,e){var n=[new Bn(t,this.data,this.fieldMask,e)]
return this.fieldTransforms.length>0&&n.push(new jn(t,this.fieldTransforms)),n},t}()
function ho(t){switch(t){case Zi.Set:case Zi.MergeSet:case Zi.Update:return!0
case Zi.Argument:return!1
default:throw v("Unexpected case for UserDataSource: "+t)}}!function(t){t[t.Set=0]="Set",t[t.Update=1]="Update",t[t.MergeSet=2]="MergeSet",t[t.Argument=3]="Argument"}(Zi||(Zi={}))
var lo=function(){function t(t,e,n,r,i,o){this.dataSource=t,this.methodName=e,this.path=n,this.arrayElement=r,void 0===i&&this.validatePath(),this.arrayElement=void 0!==r&&r,this.fieldTransforms=i||[],this.fieldMask=o||[]}return t.prototype.childContextForField=function(e){var n=null==this.path?null:this.path.child(e),r=new t(this.dataSource,this.methodName,n,!1,this.fieldTransforms,this.fieldMask)
return r.validatePathSegment(e),r},t.prototype.childContextForFieldPath=function(e){var n=null==this.path?null:this.path.child(e),r=new t(this.dataSource,this.methodName,n,!1,this.fieldTransforms,this.fieldMask)
return r.validatePath(),r},t.prototype.childContextForArray=function(e){return new t(this.dataSource,this.methodName,null,!0,this.fieldTransforms,this.fieldMask)},t.prototype.createError=function(t){var e=null===this.path||this.path.isEmpty()?"":" (found in field "+this.path.toString()+")"
return new T(E.INVALID_ARGUMENT,"Function "+this.methodName+"() called with invalid data. "+t+e)},t.prototype.contains=function(t){return void 0!==this.fieldMask.find(function(e){return t.isPrefixOf(e)})||void 0!==this.fieldTransforms.find(function(e){return t.isPrefixOf(e.field)})},t.prototype.validatePath=function(){if(null!==this.path)for(var t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))},t.prototype.validatePathSegment=function(t){if(ho(this.dataSource)&&so.test(t))throw this.createError("Document fields cannot begin and end with __")},t}(),fo=function(t,e){this.databaseId=t,this.key=e},po=function(){function t(t){this.preConverter=t}return t.prototype.parseSetData=function(t,e){var n=new lo(Zi.Set,t,ct.EMPTY_PATH)
mo("Data must be an object, but it was:",n,e)
var r=this.parseData(e,n)
return new uo(r,null,n.fieldTransforms)},t.prototype.parseMergeData=function(t,e,n){var r=new lo(Zi.MergeSet,t,ct.EMPTY_PATH)
mo("Data must be an object, but it was:",r,e)
var i,o,a=this.parseData(e,r)
if(n){for(var s=new kt(ct.comparator),u=0,c=n;u<c.length;u++){var h=c[u],l=void 0
if(h instanceof Ki)l=h._internalPath
else{if("string"!=typeof h)throw v("Expected stringOrFieldPath to be a string or a FieldPath")
l=vo(t,h)}if(!r.contains(l))throw new T(E.INVALID_ARGUMENT,"Field '"+l+"' is specified in your field mask but missing from your input data.")
s=s.add(l)}i=Mn.fromSet(s),o=r.fieldTransforms.filter(function(t){return i.covers(t.field)})}else i=Mn.fromArray(r.fieldMask),o=r.fieldTransforms
return new uo(a,i,o)},t.prototype.parseUpdateData=function(t,e){var n=this,r=new lo(Zi.Update,t,ct.EMPTY_PATH)
mo("Data must be an object, but it was:",r,e)
var i=new kt(ct.comparator),o=Pn.EMPTY
k(e,function(e,a){var s=vo(t,e),u=r.childContextForFieldPath(s)
if((a=n.runPreConverter(a,u))instanceof eo)i=i.add(s)
else{var c=n.parseData(a,u)
null!=c&&(i=i.add(s),o=o.set(s,c))}})
var a=Mn.fromSet(i)
return new co(o,a,r.fieldTransforms)},t.prototype.parseUpdateVarargs=function(t,e,n,r){var i=new lo(Zi.Update,t,ct.EMPTY_PATH),o=[go(t,e)],a=[n]
if(r.length%2!=0)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() needs to be called with an even number of arguments that alternate between field names and values.")
for(var s=0;s<r.length;s+=2)o.push(go(t,r[s])),a.push(r[s+1])
var u=new kt(ct.comparator),c=Pn.EMPTY
for(s=0;s<o.length;++s){var h=o[s],l=i.childContextForFieldPath(h),f=this.runPreConverter(a[s],l)
if(f instanceof eo)u=u.add(h)
else{var p=this.parseData(f,l)
null!=p&&(u=u.add(h),c=c.set(h,p))}}var d=Mn.fromSet(u)
return new co(c,d,i.fieldTransforms)},t.prototype.parseQueryValue=function(t,e){var n=new lo(Zi.Argument,t,ct.EMPTY_PATH),r=this.parseData(e,n)
return _(null!=r,"Parsed data should not be null."),_(0===n.fieldTransforms.length,"Field transforms should have been disallowed."),r},t.prototype.runPreConverter=function(t,e){try{return this.preConverter(t)}catch(t){var n=_o(t)
throw e.createError(n)}},t.prototype.parseData=function(t,e){if(yo(t=this.runPreConverter(t,e)))return mo("Unsupported field value:",e,t),this.parseObject(t,e)
if(t instanceof to)return this.parseSentinelFieldValue(t,e),null
if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.arrayElement)throw e.createError("Nested arrays are not supported")
return this.parseArray(t,e)}return this.parseScalarValue(t,e)},t.prototype.parseObject=function(t,e){var n=this,r=new St(z)
return A(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):k(t,function(t,i){var o=n.parseData(i,e.childContextForField(t))
null!=o&&(r=r.insert(t,o))}),new Pn(r)},t.prototype.parseArray=function(t,e){for(var n=[],r=0,i=0,o=t;i<o.length;i++){var a=o[i],s=this.parseData(a,e.childContextForArray(r))
null==s&&(s=bn.INSTANCE),n.push(s),r++}return new xn(n)},t.prototype.parseSentinelFieldValue=function(t,e){if(!ho(e.dataSource))throw e.createError(t._methodName+"() can only be used with update() and set()")
if(null===e.path)throw e.createError(t._methodName+"() is not currently supported inside arrays")
if(t instanceof eo){if(e.dataSource!==Zi.MergeSet)throw e.dataSource===Zi.Update?(_(e.path.length>0,"FieldValue.delete() at the top level should have already been handled."),e.createError("FieldValue.delete() can only appear at the top level of your update data")):e.createError("FieldValue.delete() cannot be used with set() unless you pass {merge:true}")
e.fieldMask.push(e.path)}else if(t instanceof no)e.fieldTransforms.push(new Ln(e.path,ei.instance))
else if(t instanceof ro){var n=this.parseArrayTransformElements(t._methodName,t._elements),r=new ni(n)
e.fieldTransforms.push(new Ln(e.path,r))}else if(t instanceof io){n=this.parseArrayTransformElements(t._methodName,t._elements)
var i=new ri(n)
e.fieldTransforms.push(new Ln(e.path,i))}else if(t instanceof oo){var o=this.parseQueryValue("FieldValue.increment",t._operand),a=new ii(o)
e.fieldTransforms.push(new Ln(e.path,a))}else v("Unknown FieldValue type: "+t)},t.prototype.parseScalarValue=function(t,e){if(null===t)return bn.INSTANCE
if("number"==typeof t)return ar(t)?new In(t):new Cn(t)
if("boolean"==typeof t)return wn.of(t)
if("string"==typeof t)return new Nn(t)
if(t instanceof Date)return new kn(Et.fromDate(t))
if(t instanceof Et)return new kn(new Et(t.seconds,1e3*Math.floor(t.nanoseconds/1e3)))
if(t instanceof Br)return new On(t)
if(t instanceof tt)return new Dn(t)
if(t instanceof fo)return new Rn(t.databaseId,t.key)
throw e.createError("Unsupported field value: "+B(t))},t.prototype.parseArrayTransformElements=function(t,e){var n=this
return e.map(function(e,r){var i=new lo(Zi.Argument,t,ct.EMPTY_PATH)
return n.parseData(e,i.childContextForArray(r))})},t}()
function yo(t){return!("object"!==r(t)||null===t||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof Br||t instanceof tt||t instanceof fo||t instanceof to)}function mo(t,e,n){if(!yo(n)||!V(n)){var r=B(n)
throw"an object"===r?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function go(t,e){if(e instanceof Ki)return e._internalPath
if("string"==typeof e)return vo(t,e)
throw new T(E.INVALID_ARGUMENT,"Function "+t+"() called with invalid data. Field path arguments must be of type string or FieldPath.")}function vo(t,e){try{return function(t){if(t.search(Hi)>=0)throw new T(E.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not contain '~', '*', '/', '[', or ']'")
try{return new(Ki.bind.apply(Ki,[void 0].concat(t.split("."))))}catch(e){throw new T(E.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")}}(e)._internalPath}catch(e){var n=_o(e)
throw new T(E.INVALID_ARGUMENT,"Function "+t+"() called with invalid data. "+n)}}function _o(t){return t instanceof Error?t.message:t.toString()}var bo="firestore.googleapis.com",wo=!0,Eo=!0,To=!1,So=en.COLLECTION_DISABLED,Io=function(){function t(t){if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set")
this.host=bo,this.ssl=wo}else L("settings","non-empty string","host",t.host),this.host=t.host,F("settings","boolean","ssl",t.ssl),this.ssl=C(t.ssl,wo)
if(W("settings",t,["host","ssl","credentials","timestampsInSnapshots","cacheSizeBytes","experimentalForceLongPolling"]),F("settings","object","credentials",t.credentials),this.credentials=t.credentials,F("settings","boolean","timestampsInSnapshots",t.timestampsInSnapshots),!0===t.timestampsInSnapshots?m("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now."):!1===t.timestampsInSnapshots&&m("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."),this.timestampsInSnapshots=C(t.timestampsInSnapshots,Eo),F("settings","number","cacheSizeBytes",t.cacheSizeBytes),void 0===t.cacheSizeBytes)this.cacheSizeBytes=en.DEFAULT_CACHE_SIZE_BYTES
else{if(t.cacheSizeBytes!==So&&t.cacheSizeBytes<en.MINIMUM_CACHE_SIZE_BYTES)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least "+en.MINIMUM_CACHE_SIZE_BYTES)
this.cacheSizeBytes=t.cacheSizeBytes}F("settings","boolean","experimentalForceLongPolling",t.experimentalForceLongPolling),this.forceLongPolling=void 0===t.experimentalForceLongPolling?To:t.experimentalForceLongPolling}return t.prototype.isEqual=function(t){return this.host===t.host&&this.ssl===t.ssl&&this.timestampsInSnapshots===t.timestampsInSnapshots&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.forceLongPolling===t.forceLongPolling},t}(),Co=function(){function t(e){var n=this
if(this._firebaseApp=null,this._queue=new pt,this.INTERNAL={delete:function(){return u.__awaiter(n,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return this.ensureClientConfigured(),[4,this._firestoreClient.shutdown()]
case 1:return t.sent(),[2]}})})}},"object"===r(e.options)){var i=e
this._firebaseApp=i,this._databaseId=t.databaseIdFromApp(i),this._persistenceKey=i.name,this._credentials=new Yi(i)}else{var o=e
if(!o.projectId)throw new T(E.INVALID_ARGUMENT,"Must provide projectId")
this._databaseId=new it(o.projectId,o.database),this._persistenceKey="[DEFAULT]",this._credentials=new zi}this._settings=new Io({}),this._dataConverter=this.createDataConverter(this._databaseId)}return t.prototype.settings=function(t){if(R("Firestore.settings",arguments,1),x("Firestore.settings","object",1,t),I(t,"persistence"))throw new T(E.INVALID_ARGUMENT,'"persistence" is now specified with a separate call to firestore.enablePersistence().')
var e=new Io(t)
if(this._firestoreClient&&!this._settings.isEqual(e))throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.")
this._settings=e,void 0!==e.credentials&&(this._credentials=function(t){if(!t)return new zi
switch(t.type){case"gapi":var e=t.client
return _(!("object"!==r(e)||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty),"unexpected gapi interface"),new Ji(e,t.sessionIndex||"0")
case"provider":return t.client
default:throw new T(E.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))},t.prototype.enableNetwork=function(){return this.ensureClientConfigured(),this._firestoreClient.enableNetwork()},t.prototype.disableNetwork=function(){return this.ensureClientConfigured(),this._firestoreClient.disableNetwork()},t.prototype.enablePersistence=function(t){if(this._firestoreClient)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.")
var e=!1
return t&&(void 0!==t.experimentalTabSynchronization&&m("The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."),e=C(void 0!==t.synchronizeTabs?t.synchronizeTabs:t.experimentalTabSynchronization,!1)),this.configureClient(new Bi(this._settings.cacheSizeBytes,e))},t.prototype.clearPersistence=function(){var t=this,e=hn.buildStoragePrefix(this.makeDatabaseInfo()),n=new lt
return this._queue.enqueueAndForgetEvenAfterShutdown(function(){return u.__awaiter(t,void 0,void 0,function(){var t
return u.__generator(this,function(r){switch(r.label){case 0:if(r.trys.push([0,2,,3]),void 0!==this._firestoreClient&&!this._firestoreClient.clientShutdown)throw new T(E.FAILED_PRECONDITION,"Persistence cannot be cleared after this Firestore instance is initialized.")
return[4,hn.clearPersistence(e)]
case 1:return r.sent(),n.resolve(),[3,3]
case 2:return t=r.sent(),n.reject(t),[3,3]
case 3:return[2]}})})}),n.promise},t.prototype._shutdown=function(){return this.app._removeServiceInstance("firestore"),this.INTERNAL.delete()},Object.defineProperty(t.prototype,"_isShutdown",{get:function(){return this.ensureClientConfigured(),this._firestoreClient.clientShutdown},enumerable:!0,configurable:!0}),t.prototype._waitForPendingWrites=function(){return this.ensureClientConfigured(),this._firestoreClient.waitForPendingWrites()},t.prototype.ensureClientConfigured=function(){return this._firestoreClient||this.configureClient(new ji),this._firestoreClient},t.prototype.makeDatabaseInfo=function(){return new nt(this._databaseId,this._persistenceKey,this._settings.host,this._settings.ssl,this._settings.forceLongPolling)},t.prototype.configureClient=function(t){_(!!this._settings.host,"FirestoreSettings.host is not set"),_(!this._firestoreClient,"configureClient() called multiple times")
var e=this.makeDatabaseInfo()
return this._firestoreClient=new Wi(b.getPlatform(),e,this._credentials,this._queue),this._firestoreClient.start(t)},t.prototype.createDataConverter=function(t){return new po(function(e){if(e instanceof Ao){var n=t,r=e.firestore._databaseId
if(!r.isEqual(n))throw new T(E.INVALID_ARGUMENT,"Document reference is for database "+r.projectId+"/"+r.database+" but should be for database "+n.projectId+"/"+n.database)
return new fo(t,e._key)}return e})},t.databaseIdFromApp=function(t){var e=t.options
if(!I(e,"projectId"))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.')
var n=e.projectId
if(!n||"string"!=typeof n)throw new T(E.INVALID_ARGUMENT,"projectId must be a string in FirebaseApp.options")
return new it(n)},Object.defineProperty(t.prototype,"app",{get:function(){if(!this._firebaseApp)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available")
return this._firebaseApp},enumerable:!0,configurable:!0}),t.prototype.collection=function(t){return R("Firestore.collection",arguments,1),x("Firestore.collection","non-empty string",1,t),this.ensureClientConfigured(),new Mo(st.fromString(t),this)},t.prototype.doc=function(t){return R("Firestore.doc",arguments,1),x("Firestore.doc","non-empty string",1,t),this.ensureClientConfigured(),Ao.forPath(st.fromString(t),this)},t.prototype.collectionGroup=function(t){if(R("Firestore.collectionGroup",arguments,1),x("Firestore.collectionGroup","non-empty string",1,t),t.indexOf("/")>=0)throw new T(E.INVALID_ARGUMENT,"Invalid collection ID '"+t+"' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.")
return this.ensureClientConfigured(),new Po(new jr(st.EMPTY_PATH,t),this)},t.prototype.runTransaction=function(t){var e=this
return R("Firestore.runTransaction",arguments,1),x("Firestore.runTransaction","function",1,t),this.ensureClientConfigured().transaction(function(n){return t(new No(e,n))})},t.prototype.batch=function(){return this.ensureClientConfigured(),new ko(this)},Object.defineProperty(t,"logLevel",{get:function(){switch(p()){case o.DEBUG:return"debug"
case o.ERROR:return"error"
case o.SILENT:return"silent"
default:return v("Unknown log level: "+p())}},enumerable:!0,configurable:!0}),t.setLogLevel=function(t){switch(R("Firestore.setLogLevel",arguments,1),x("Firestore.setLogLevel","non-empty string",1,t),t){case"debug":d(o.DEBUG)
break
case"error":d(o.ERROR)
break
case"silent":d(o.SILENT)
break
default:throw new T(E.INVALID_ARGUMENT,"Invalid log level: "+t)}},t.prototype._areTimestampsInSnapshotsEnabled=function(){return this._settings.timestampsInSnapshots},t}(),No=function(){function t(t,e){this._firestore=t,this._transaction=e}return t.prototype.get=function(t){var e=this
R("Transaction.get",arguments,1)
var n=qo("Transaction.get",t,this._firestore)
return this._transaction.lookup([n._key]).then(function(t){if(!t||1!==t.length)return v("Mismatch in docs returned from document lookup.")
var r=t[0]
if(r instanceof ye)return new Ro(e._firestore,n._key,null,!1,!1)
if(r instanceof de)return new Ro(e._firestore,n._key,r,!1,!1)
throw v("BatchGetDocumentsRequest returned unexpected document type: "+r.constructor.name)})},t.prototype.set=function(t,e,n){P("Transaction.set",arguments,2,3)
var r=qo("Transaction.set",t,this._firestore),i=(n=Lo("Transaction.set",n)).merge||n.mergeFields?this._firestore._dataConverter.parseMergeData("Transaction.set",e,n.mergeFields):this._firestore._dataConverter.parseSetData("Transaction.set",e)
return this._transaction.set(r._key,i),this},t.prototype.update=function(t,e,n){for(var r,i,o=[],a=3;a<arguments.length;a++)o[a-3]=arguments[a]
return"string"==typeof e||e instanceof Ki?(O("Transaction.update",arguments,3),r=qo("Transaction.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateVarargs("Transaction.update",e,n,o)):(R("Transaction.update",arguments,2),r=qo("Transaction.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateData("Transaction.update",e)),this._transaction.update(r._key,i),this},t.prototype.delete=function(t){R("Transaction.delete",arguments,1)
var e=qo("Transaction.delete",t,this._firestore)
return this._transaction.delete(e._key),this},t}(),ko=function(){function t(t){this._firestore=t,this._mutations=[],this._committed=!1}return t.prototype.set=function(t,e,n){P("WriteBatch.set",arguments,2,3),this.verifyNotCommitted()
var r=qo("WriteBatch.set",t,this._firestore),i=(n=Lo("WriteBatch.set",n)).merge||n.mergeFields?this._firestore._dataConverter.parseMergeData("WriteBatch.set",e,n.mergeFields):this._firestore._dataConverter.parseSetData("WriteBatch.set",e)
return this._mutations=this._mutations.concat(i.toMutations(r._key,Un.NONE)),this},t.prototype.update=function(t,e,n){for(var r,i,o=[],a=3;a<arguments.length;a++)o[a-3]=arguments[a]
return this.verifyNotCommitted(),"string"==typeof e||e instanceof Ki?(O("WriteBatch.update",arguments,3),r=qo("WriteBatch.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateVarargs("WriteBatch.update",e,n,o)):(R("WriteBatch.update",arguments,2),r=qo("WriteBatch.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateData("WriteBatch.update",e)),this._mutations=this._mutations.concat(i.toMutations(r._key,Un.exists(!0))),this},t.prototype.delete=function(t){R("WriteBatch.delete",arguments,1),this.verifyNotCommitted()
var e=qo("WriteBatch.delete",t,this._firestore)
return this._mutations=this._mutations.concat(new Wn(e._key,Un.NONE)),this},t.prototype.commit=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){return this.verifyNotCommitted(),this._committed=!0,this._mutations.length>0?[2,this._firestore.ensureClientConfigured().write(this._mutations)]:[2]})})},t.prototype.verifyNotCommitted=function(){if(this._committed)throw new T(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")},t}(),Ao=function(){function t(t,e){this._key=t,this.firestore=e,this._firestoreClient=this.firestore.ensureClientConfigured()}return t.forPath=function(e,n){if(e.length%2!=0)throw new T(E.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but "+e.canonicalString()+" has "+e.length)
return new t(new ht(e),n)},Object.defineProperty(t.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return new Mo(this._key.path.popLast(),this.firestore)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"path",{get:function(){return this._key.path.canonicalString()},enumerable:!0,configurable:!0}),t.prototype.collection=function(t){if(R("DocumentReference.collection",arguments,1),x("DocumentReference.collection","non-empty string",1,t),!t)throw new T(E.INVALID_ARGUMENT,"Must provide a non-empty collection name to collection()")
var e=st.fromString(t)
return new Mo(this._key.path.child(e),this.firestore)},t.prototype.isEqual=function(e){if(!(e instanceof t))throw Q("isEqual","DocumentReference",1,e)
return this.firestore===e.firestore&&this._key.isEqual(e._key)},t.prototype.set=function(t,e){P("DocumentReference.set",arguments,1,2)
var n=(e=Lo("DocumentReference.set",e)).merge||e.mergeFields?this.firestore._dataConverter.parseMergeData("DocumentReference.set",t,e.mergeFields):this.firestore._dataConverter.parseSetData("DocumentReference.set",t)
return this._firestoreClient.write(n.toMutations(this._key,Un.NONE))},t.prototype.update=function(t,e){for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
return"string"==typeof t||t instanceof Ki?(O("DocumentReference.update",arguments,2),n=this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update",t,e,r)):(R("DocumentReference.update",arguments,1),n=this.firestore._dataConverter.parseUpdateData("DocumentReference.update",t)),this._firestoreClient.write(n.toMutations(this._key,Un.exists(!0)))},t.prototype.delete=function(){return R("DocumentReference.delete",arguments,0),this._firestoreClient.write([new Wn(this._key,Un.NONE)])},t.prototype.onSnapshot=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
P("DocumentReference.onSnapshot",arguments,1,4)
var n,i={includeMetadataChanges:!1},o=0
"object"!==r(t[o])||$i(t[o])||(W("DocumentReference.onSnapshot",i=t[o],["includeMetadataChanges"]),F("DocumentReference.onSnapshot","boolean","includeMetadataChanges",i.includeMetadataChanges),o++)
var a={includeMetadataChanges:i.includeMetadataChanges}
return $i(t[o])?n=t[o]:(x("DocumentReference.onSnapshot","function",o,t[o]),M("DocumentReference.onSnapshot","function",o+1,t[o+1]),M("DocumentReference.onSnapshot","function",o+2,t[o+2]),n={next:t[o],error:t[o+1],complete:t[o+2]}),this.onSnapshotInternal(a,n)},t.prototype.onSnapshotInternal=function(t,e){var n=this,r=function(t){console.error("Uncaught Error in onSnapshot:",t)}
e.error&&(r=e.error.bind(e))
var i=new Qi({next:function(t){if(e.next){_(t.docs.size<=1,"Too many documents returned on a document query")
var r=t.docs.get(n._key)
e.next(new Ro(n.firestore,n._key,r,t.fromCache,t.hasPendingWrites))}},error:r}),o=this._firestoreClient.listen(jr.atPath(this._key.path),i,t)
return function(){i.mute(),n._firestoreClient.unlisten(o)}},t.prototype.get=function(t){var e=this
return P("DocumentReference.get",arguments,0,1),Uo("DocumentReference.get",t),new Promise(function(n,r){t&&"cache"===t.source?e.firestore.ensureClientConfigured().getDocumentFromLocalCache(e._key).then(function(t){n(new Ro(e.firestore,e._key,t,!0,t instanceof de&&t.hasLocalMutations))},r):e.getViaSnapshotListener(n,r,t)})},t.prototype.getViaSnapshotListener=function(t,e,n){var r=this.onSnapshotInternal({includeMetadataChanges:!0,waitForSyncWhenOnline:!0},{next:function(i){r(),!i.exists&&i.metadata.fromCache?e(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):i.exists&&i.metadata.fromCache&&n&&"server"===n.source?e(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):t(i)},error:e})},t}(),Do=function(){function t(t,e){this.hasPendingWrites=t,this.fromCache=e}return t.prototype.isEqual=function(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache},t}(),Ro=function(){function t(t,e,n,r,i){this._firestore=t,this._key=e,this._document=n,this._fromCache=r,this._hasPendingWrites=i}return t.prototype.data=function(t){return P("DocumentSnapshot.data",arguments,0,1),t=Fo("DocumentSnapshot.data",t),this._document?this.convertObject(this._document.data,vn.fromSnapshotOptions(t,this._firestore._areTimestampsInSnapshotsEnabled())):void 0},t.prototype.get=function(t,e){if(P("DocumentSnapshot.get",arguments,1,2),e=Fo("DocumentSnapshot.get",e),this._document){var n=this._document.data.field(go("DocumentSnapshot.get",t))
if(null!==n)return this.convertValue(n,vn.fromSnapshotOptions(e,this._firestore._areTimestampsInSnapshotsEnabled()))}},Object.defineProperty(t.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ref",{get:function(){return new Ao(this._key,this._firestore)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"exists",{get:function(){return null!==this._document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"metadata",{get:function(){return new Do(this._hasPendingWrites,this._fromCache)},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(e){if(!(e instanceof t))throw Q("isEqual","DocumentSnapshot",1,e)
return this._firestore===e._firestore&&this._fromCache===e._fromCache&&this._key.isEqual(e._key)&&(null===this._document?null===e._document:this._document.isEqual(e._document))},t.prototype.convertObject=function(t,e){var n=this,r={}
return t.forEach(function(t,i){r[t]=n.convertValue(i,e)}),r},t.prototype.convertValue=function(t,e){if(t instanceof Pn)return this.convertObject(t,e)
if(t instanceof xn)return this.convertArray(t,e)
if(t instanceof Rn){var n=t.value(e),r=this._firestore.ensureClientConfigured().databaseId()
return t.databaseId.isEqual(r)||m("Document "+this._key.path+" contains a document reference within a different database ("+t.databaseId.projectId+"/"+t.databaseId.database+") which is not supported. It will be treated as a reference in the current database ("+r.projectId+"/"+r.database+") instead."),new Ao(n,this._firestore)}return t.value(e)},t.prototype.convertArray=function(t,e){var n=this
return t.internalValue.map(function(t){return n.convertValue(t,e)})},t}(),Oo=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u.__extends(e,t),e.prototype.data=function(e){var n=t.prototype.data.call(this,e)
return _("object"===r(n),"Document in a QueryDocumentSnapshot should exist"),n},e}(Ro),Po=function(){function t(t,e){this._query=t,this.firestore=e}return t.prototype.where=function(e,n,r){if(R("Query.where",arguments,3),j("Query.where",3,r),"in"!==n&&"array-contains-any"!==n){(function(t,e,n,r){if(!e.some(function(t){return t===r}))throw new T(E.INVALID_ARGUMENT,"Invalid value "+B(r)+" provided to function "+t+"() for its "+K(n)+" argument. Acceptable values: "+e.join(", "))})("Query.where",["<","<=","==",">=",">","array-contains"],2,n)}var i,o=go("Query.where",e),a=Wr.fromString(n)
if(o.isKeyField()){if(a===Wr.ARRAY_CONTAINS||a===Wr.ARRAY_CONTAINS_ANY)throw new T(E.INVALID_ARGUMENT,"Invalid Query. You can't perform '"+a.toString()+"' queries on FieldPath.documentId().")
if(a===Wr.IN){this.validateDisjunctiveFilterElements(r,a)
for(var s=[],u=0,c=r;u<c.length;u++){var h=c[u]
s.push(this.parseDocumentIdValue(h))}i=new xn(s)}else i=this.parseDocumentIdValue(r)}else a!==Wr.IN&&a!==Wr.ARRAY_CONTAINS_ANY||this.validateDisjunctiveFilterElements(r,a),i=this.firestore._dataConverter.parseQueryValue("Query.where",r)
var l=Qr.create(o,a,i)
return this.validateNewFilter(l),new t(this._query.addFilter(l),this.firestore)},t.prototype.orderBy=function(e,n){var r
if(P("Query.orderBy",arguments,1,2),M("Query.orderBy","non-empty string",2,n),void 0===n||"asc"===n)r=Xr.ASCENDING
else{if("desc"!==n)throw new T(E.INVALID_ARGUMENT,"Function Query.orderBy() has unknown direction '"+n+"', expected 'asc' or 'desc'.")
r=Xr.DESCENDING}if(null!==this._query.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().")
if(null!==this._query.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().")
var i=go("Query.orderBy",e),o=new $r(i,r)
return this.validateNewOrderBy(o),new t(this._query.addOrderBy(o),this.firestore)},t.prototype.limit=function(e){if(R("Query.limit",arguments,1),x("Query.limit","number",1,e),e<=0)throw new T(E.INVALID_ARGUMENT,"Invalid Query. Query limit ("+e+") is invalid. Limit must be positive.")
return new t(this._query.withLimit(e),this.firestore)},t.prototype.startAt=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
O("Query.startAt",arguments,1)
var i=this.boundFromDocOrFields("Query.startAt",e,n,!0)
return new t(this._query.withStartAt(i),this.firestore)},t.prototype.startAfter=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
O("Query.startAfter",arguments,1)
var i=this.boundFromDocOrFields("Query.startAfter",e,n,!1)
return new t(this._query.withStartAt(i),this.firestore)},t.prototype.endBefore=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
O("Query.endBefore",arguments,1)
var i=this.boundFromDocOrFields("Query.endBefore",e,n,!0)
return new t(this._query.withEndAt(i),this.firestore)},t.prototype.endAt=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
O("Query.endAt",arguments,1)
var i=this.boundFromDocOrFields("Query.endAt",e,n,!1)
return new t(this._query.withEndAt(i),this.firestore)},t.prototype.isEqual=function(e){if(!(e instanceof t))throw Q("isEqual","Query",1,e)
return this.firestore===e.firestore&&this._query.isEqual(e._query)},t.prototype.boundFromDocOrFields=function(t,e,n,r){if(j(t,1,e),e instanceof Ro){if(n.length>0)throw new T(E.INVALID_ARGUMENT,"Too many arguments provided to "+t+"().")
var i=e
if(!i.exists)throw new T(E.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for "+t+"().")
return this.boundFromDocument(t,i._document,r)}var o=[e].concat(n)
return this.boundFromFields(t,o,r)},t.prototype.boundFromDocument=function(t,e,n){for(var r=[],i=0,o=this._query.orderBy;i<o.length;i++){var a=o[i]
if(a.field.isKeyField())r.push(new Rn(this.firestore._databaseId,e.key))
else{var s=e.field(a.field)
if(s instanceof An)throw new T(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)')
if(null===s){var u=a.field.canonicalString()
throw new T(E.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '"+u+"' (used as the orderBy) does not exist.")}r.push(s)}}return new Jr(r,n)},t.prototype.boundFromFields=function(t,e,n){var i=this._query.explicitOrderBy
if(e.length>i.length)throw new T(E.INVALID_ARGUMENT,"Too many arguments provided to "+t+"(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses")
for(var o=[],a=0;a<e.length;a++){var s=e[a]
if(i[a].field.isKeyField()){if("string"!=typeof s)throw new T(E.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in "+t+"(), but got a "+r(s))
if(!this._query.isCollectionGroupQuery()&&-1!==s.indexOf("/"))throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to "+t+"() must be a plain document ID, but '"+s+"' contains a slash.")
var u=this._query.path.child(st.fromString(s))
if(!ht.isDocumentKey(u))throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to "+t+"() must result in a valid document path, but '"+u+"' is not because it contains an odd number of segments.")
var c=new ht(u)
o.push(new Rn(this.firestore._databaseId,c))}else{var h=this.firestore._dataConverter.parseQueryValue(t,s)
o.push(h)}}return new Jr(o,n)},t.prototype.onSnapshot=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
P("Query.onSnapshot",arguments,1,4)
var n,i={},o=0
return"object"!==r(t[o])||$i(t[o])||(W("Query.onSnapshot",i=t[o],["includeMetadataChanges"]),F("Query.onSnapshot","boolean","includeMetadataChanges",i.includeMetadataChanges),o++),$i(t[o])?n=t[o]:(x("Query.onSnapshot","function",o,t[o]),M("Query.onSnapshot","function",o+1,t[o+1]),M("Query.onSnapshot","function",o+2,t[o+2]),n={next:t[o],error:t[o+1],complete:t[o+2]}),this.onSnapshotInternal(i,n)},t.prototype.onSnapshotInternal=function(t,e){var n=this,r=function(t){console.error("Uncaught Error in onSnapshot:",t)}
e.error&&(r=e.error.bind(e))
var i=new Qi({next:function(t){e.next&&e.next(new xo(n.firestore,n._query,t))},error:r}),o=this.firestore.ensureClientConfigured(),a=o.listen(this._query,i,t)
return function(){i.mute(),o.unlisten(a)}},t.prototype.get=function(t){var e=this
return P("Query.get",arguments,0,1),Uo("Query.get",t),new Promise(function(n,r){t&&"cache"===t.source?e.firestore.ensureClientConfigured().getDocumentsFromLocalCache(e._query).then(function(t){n(new xo(e.firestore,e._query,t))},r):e.getViaSnapshotListener(n,r,t)})},t.prototype.getViaSnapshotListener=function(t,e,n){var r=this.onSnapshotInternal({includeMetadataChanges:!0,waitForSyncWhenOnline:!0},{next:function(i){r(),i.metadata.fromCache&&n&&"server"===n.source?e(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):t(i)},error:e})},t.prototype.parseDocumentIdValue=function(t){if("string"==typeof t){if(""===t)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.")
if(!this._query.isCollectionGroupQuery()&&-1!==t.indexOf("/"))throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '"+t+"' contains a '/' character.")
var e=this._query.path.child(st.fromString(t))
if(!ht.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '"+e+"' is not because it has an odd number of segments ("+e.length+").")
return new Rn(this.firestore._databaseId,new ht(e))}if(t instanceof Ao){var n=t
return new Rn(this.firestore._databaseId,n._key)}throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: "+B(t)+".")},t.prototype.validateDisjunctiveFilterElements=function(t,e){if(!Array.isArray(t)||0===t.length)throw new T(E.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '"+e.toString()+"' filters.")
if(t.length>10)throw new T(E.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters support a maximum of 10 elements in the value array.")
if(t.indexOf(null)>=0)throw new T(E.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'null' in the value array.")
if(t.filter(function(t){return Number.isNaN(t)}).length>0)throw new T(E.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'NaN' in the value array.")},t.prototype.validateNewFilter=function(t){if(t instanceof Qr){var e=[Wr.ARRAY_CONTAINS,Wr.ARRAY_CONTAINS_ANY],n=[Wr.IN,Wr.ARRAY_CONTAINS_ANY],r=e.indexOf(t.op)>=0,i=n.indexOf(t.op)>=0
if(t.isInequality()){var o=this._query.getInequalityFilterField()
if(null!==o&&!o.isEqual(t.field))throw new T(E.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '"+o.toString()+"' and '"+t.field.toString()+"'")
var a=this._query.getFirstOrderByField()
null!==a&&this.validateOrderByAndInequalityMatch(t.field,a)}else if(i||r){var s=null
if(i&&(s=this._query.findFilterOperator(n)),null===s&&r&&(s=this._query.findFilterOperator(e)),null!=s)throw s===t.op?new T(E.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '"+t.op.toString()+"' filter."):new T(E.INVALID_ARGUMENT,"Invalid query. You cannot use '"+t.op.toString()+"' filters with '"+s.toString()+"' filters.")}}},t.prototype.validateNewOrderBy=function(t){if(null===this._query.getFirstOrderByField()){var e=this._query.getInequalityFilterField()
null!==e&&this.validateOrderByAndInequalityMatch(e,t.field)}},t.prototype.validateOrderByAndInequalityMatch=function(t,e){if(!e.isEqual(t))throw new T(E.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '"+t.toString()+"' and so you must also use '"+t.toString()+"' as your first Query.orderBy(), but your first Query.orderBy() is on field '"+e.toString()+"' instead.")},t}(),xo=function(){function t(t,e,n){this._firestore=t,this._originalQuery=e,this._snapshot=n,this._cachedChanges=null,this._cachedChangesIncludeMetadataChanges=null,this.metadata=new Do(n.hasPendingWrites,n.fromCache)}return Object.defineProperty(t.prototype,"docs",{get:function(){var t=[]
return this.forEach(function(e){return t.push(e)}),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"empty",{get:function(){return this._snapshot.docs.isEmpty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._snapshot.docs.size},enumerable:!0,configurable:!0}),t.prototype.forEach=function(t,e){var n=this
P("QuerySnapshot.forEach",arguments,1,2),x("QuerySnapshot.forEach","function",1,t),this._snapshot.docs.forEach(function(r){t.call(e,n.convertToDocumentImpl(r))})},Object.defineProperty(t.prototype,"query",{get:function(){return new Po(this._originalQuery,this._firestore)},enumerable:!0,configurable:!0}),t.prototype.docChanges=function(t){t&&(W("QuerySnapshot.docChanges",t,["includeMetadataChanges"]),F("QuerySnapshot.docChanges","boolean","includeMetadataChanges",t.includeMetadataChanges))
var e=!(!t||!t.includeMetadataChanges)
if(e&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().")
return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e,n){if(n.oldDocs.isEmpty()){var r,i=0
return n.docChanges.map(function(e){var o=new Oo(t,e.doc.key,e.doc,n.fromCache,n.mutatedKeys.has(e.doc.key))
return _(e.type===Sr.Added,"Invalid event type for first snapshot"),_(!r||n.query.docComparator(r,e.doc)<0,"Got added events in wrong order"),r=e.doc,{type:"added",doc:o,oldIndex:-1,newIndex:i++}})}var o=n.oldDocs
return n.docChanges.filter(function(t){return e||t.type!==Sr.Metadata}).map(function(e){var r=new Oo(t,e.doc.key,e.doc,n.fromCache,n.mutatedKeys.has(e.doc.key)),i=-1,a=-1
return e.type!==Sr.Added&&(_((i=o.indexOf(e.doc.key))>=0,"Index for document not found"),o=o.delete(e.doc.key)),e.type!==Sr.Removed&&(a=(o=o.add(e.doc)).indexOf(e.doc.key)),{type:Vo(e.type),doc:r,oldIndex:i,newIndex:a}})}(this._firestore,e,this._snapshot),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges},t.prototype.isEqual=function(e){if(!(e instanceof t))throw Q("isEqual","QuerySnapshot",1,e)
return this._firestore===e._firestore&&this._originalQuery.isEqual(e._originalQuery)&&this._snapshot.isEqual(e._snapshot)},t.prototype.convertToDocumentImpl=function(t){return new Oo(this._firestore,t.key,t,this.metadata.fromCache,this._snapshot.mutatedKeys.has(t.key))},t}();["length","forEach","map"].concat("undefined"!=typeof Symbol?[Symbol.iterator]:[]).forEach(function(t){try{Object.defineProperty(xo.prototype.docChanges,t,{get:function(){return function(){throw new T(E.INVALID_ARGUMENT,'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"')}()}})}catch(t){}})
var Mo=function(t){function e(e,n){var r=t.call(this,jr.atPath(e),n)||this
if(e.length%2!=1)throw new T(E.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but "+e.canonicalString()+" has "+e.length)
return r}return u.__extends(e,t),Object.defineProperty(e.prototype,"id",{get:function(){return this._query.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._query.path.popLast()
return t.isEmpty()?null:new Ao(new ht(t),this.firestore)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._query.path.canonicalString()},enumerable:!0,configurable:!0}),e.prototype.doc=function(t){if(P("CollectionReference.doc",arguments,0,1),0===arguments.length&&(t=G.newId()),x("CollectionReference.doc","non-empty string",1,t),""===t)throw new T(E.INVALID_ARGUMENT,"Document path must be a non-empty string")
var e=st.fromString(t)
return Ao.forPath(this._query.path.child(e),this.firestore)},e.prototype.add=function(t){R("CollectionReference.add",arguments,1),x("CollectionReference.add","object",1,t)
var e=this.doc()
return e.set(t).then(function(){return e})},e}(Po)
function Lo(t,e){if(void 0===e)return{merge:!1}
if(W(t,e,["merge","mergeFields"]),F(t,"boolean","merge",e.merge),function(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){if(!(r instanceof Array))throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires its "+e+" option to be an array, but it was: "+B(r))
for(var o=0;o<r.length;++o)if(!i(r[o]))throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires all "+e+" elements to be "+n+", but the value at index "+o+" was: "+B(r[o]))}(t,e,n,r,i)}(t,"mergeFields","a string or a FieldPath",e.mergeFields,function(t){return"string"==typeof t||t instanceof Ki}),void 0!==e.mergeFields&&void 0!==e.merge)throw new T(E.INVALID_ARGUMENT,"Invalid options passed to function "+t+'(): You cannot specify both "merge" and "mergeFields".')
return e}function Fo(t,e){return void 0===e?{}:(W(t,e,["serverTimestamps"]),U(t,0,"serverTimestamps",e.serverTimestamps,["estimate","previous","none"]),e)}function Uo(t,e){M(t,"object",1,e),e&&(W(t,e,["source"]),U(t,0,"source",e.source,["default","server","cache"]))}function qo(t,e,n){if(e instanceof Ao){if(e.firestore!==n)throw new T(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.")
return e}throw Q(t,"DocumentReference",1,e)}function Vo(t){switch(t){case Sr.Added:return"added"
case Sr.Modified:case Sr.Metadata:return"modified"
case Sr.Removed:return"removed"
default:return v("Unknown change type: "+t)}}var Bo=S(Co,"Use firebase.firestore() instead."),jo=S(No,"Use firebase.firestore().runTransaction() instead."),Wo=S(ko,"Use firebase.firestore().batch() instead."),Qo=S(Ao,"Use firebase.firestore().doc() instead."),Ko=S(Ro),Ho=S(Oo),Go=S(Po),zo=S(xo),Yo=S(Mo,"Use firebase.firestore().collection() instead."),Xo={Firestore:Bo,GeoPoint:Br,Timestamp:Et,Blob:et,Transaction:jo,WriteBatch:Wo,DocumentReference:Qo,DocumentSnapshot:Ko,Query:Go,QueryDocumentSnapshot:Ho,QuerySnapshot:zo,CollectionReference:Yo,FieldPath:Ki,FieldValue:ao,setLogLevel:Co.setLogLevel,CACHE_SIZE_UNLIMITED:So}
var Jo=function(){function t(){}return t.prototype.addCallback=function(t){},t.prototype.shutdown=function(){},t}(),$o=function(){function t(){var t=this
this.networkAvailableListener=function(){return t.onNetworkAvailable()},this.networkUnavailableListener=function(){return t.onNetworkUnavailable()},this.callbacks=[],this.configureNetworkMonitoring()}return t.prototype.addCallback=function(t){this.callbacks.push(t)},t.prototype.shutdown=function(){window.removeEventListener("online",this.networkAvailableListener),window.removeEventListener("offline",this.networkUnavailableListener)},t.prototype.configureNetworkMonitoring=function(){window.addEventListener("online",this.networkAvailableListener),window.addEventListener("offline",this.networkUnavailableListener)},t.prototype.onNetworkAvailable=function(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE")
for(var t=0,e=this.callbacks;t<e.length;t++)(0,e[t])(0)},t.prototype.onNetworkUnavailable=function(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE")
for(var t=0,e=this.callbacks;t<e.length;t++)(0,e[t])(1)},t.isAvailable=function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener},t}(),Zo=function(){function t(t){this.sendFn=t.sendFn,this.closeFn=t.closeFn}return t.prototype.onOpen=function(t){_(!this.wrappedOnOpen,"Called onOpen on stream twice!"),this.wrappedOnOpen=t},t.prototype.onClose=function(t){_(!this.wrappedOnClose,"Called onClose on stream twice!"),this.wrappedOnClose=t},t.prototype.onMessage=function(t){_(!this.wrappedOnMessage,"Called onMessage on stream twice!"),this.wrappedOnMessage=t},t.prototype.close=function(){this.closeFn()},t.prototype.send=function(t){this.sendFn(t)},t.prototype.callOnOpen=function(){_(void 0!==this.wrappedOnOpen,"Cannot call onOpen because no callback was set"),this.wrappedOnOpen()},t.prototype.callOnClose=function(t){_(void 0!==this.wrappedOnClose,"Cannot call onClose because no callback was set"),this.wrappedOnClose(t)},t.prototype.callOnMessage=function(t){_(void 0!==this.wrappedOnMessage,"Cannot call onMessage because no callback was set"),this.wrappedOnMessage(t)},t}(),ta="Connection",ea={BatchGetDocuments:"batchGet",Commit:"commit"},na="gl-js/ fire/"+l,ra=function(){function t(t){this.databaseId=t.databaseId
var e=t.ssl?"https":"http"
this.baseUrl=e+"://"+t.host,this.forceLongPolling=t.forceLongPolling}return t.prototype.modifyHeadersForRequest=function(t,e){if(e)for(var n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])
t["X-Goog-Api-Client"]=na},t.prototype.invokeRPC=function(t,e,n){var r=this,i=this.makeUrl(t)
return new Promise(function(o,a){var s=new h.XhrIo
s.listenOnce(h.EventType.COMPLETE,function(){try{switch(s.getLastErrorCode()){case h.ErrorCode.NO_ERROR:var e=s.getResponseJson()
y(ta,"XHR received:",JSON.stringify(e)),o(e)
break
case h.ErrorCode.TIMEOUT:y(ta,'RPC "'+t+'" timed out'),a(new T(E.DEADLINE_EXCEEDED,"Request time out"))
break
case h.ErrorCode.HTTP_ERROR:var n=s.getStatus()
if(y(ta,'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){var r=s.getResponseJson().error
if(r&&r.status&&r.message){var i=(u=r.status.toLowerCase().replace("_","-"),Object.values(E).indexOf(u)>=0?u:E.UNKNOWN)
a(new T(i,r.message))}else a(new T(E.UNKNOWN,"Server responded with status "+s.getStatus()))}else y(ta,'RPC "'+t+'" failed'),a(new T(E.UNAVAILABLE,"Connection failed."))
break
default:v('RPC "'+t+'" failed with unanticipated webchannel error '+s.getLastErrorCode()+": "+s.getLastError()+", giving up.")}}finally{y(ta,'RPC "'+t+'" completed.')}var u})
var u=JSON.stringify(e)
y(ta,"XHR sending: ",i+" "+u)
var c={"Content-Type":"text/plain"}
r.modifyHeadersForRequest(c,n),s.send(i,"POST",u,c,15)})},t.prototype.invokeStreamingRPC=function(t,e,n){return this.invokeRPC(t,e,n)},t.prototype.openStream=function(t,e){var n=[this.baseUrl,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=h.createWebChannelTransport(),i={backgroundChannelTest:!0,httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling}
this.modifyHeadersForRequest(i.initMessageHeaders,e),c.isReactNative()||(i.httpHeadersOverwriteParam="$httpHeaders")
var o=n.join("")
y(ta,"Creating WebChannel: "+o+" "+i)
var a=r.createWebChannel(o,i),s=!1,u=!1,l=new Zo({sendFn:function(t){u?y(ta,"Not sending because WebChannel is closed:",t):(s||(y(ta,"Opening WebChannel transport."),a.open(),s=!0),y(ta,"WebChannel sending:",t),a.send(t))},closeFn:function(){return a.close()}}),f=function(t,e){a.listen(t,function(t){try{e(t)}catch(t){setTimeout(function(){throw t},0)}})}
return f(h.WebChannel.EventType.OPEN,function(){u||y(ta,"WebChannel transport opened.")}),f(h.WebChannel.EventType.CLOSE,function(){u||(u=!0,y(ta,"WebChannel transport closed"),l.callOnClose())}),f(h.WebChannel.EventType.ERROR,function(t){u||(u=!0,y(ta,"WebChannel transport errored:",t),l.callOnClose(new T(E.UNAVAILABLE,"The operation could not be completed")))}),f(h.WebChannel.EventType.MESSAGE,function(t){if(!u){var e=t.data[0]
_(!!e,"Got a webchannel message without data.")
var n=e,r=n.error||n[0]&&n[0].error
if(r){y(ta,"WebChannel received error:",r)
var i=r.status,o=function(t){var e=_r[i]
if(void 0!==e)return Er(e)}(),s=r.message
void 0===o&&(o=E.INTERNAL,s="Unknown error status: "+i+" with message "+r.message),u=!0,l.callOnClose(new T(o,s)),a.close()}else y(ta,"WebChannel received:",e),l.callOnMessage(e)}}),setTimeout(function(){l.callOnOpen()},0),l},t.prototype.makeUrl=function(t){var e=ea[t]
_(void 0!==e,"Unknown REST mapping for: "+t)
var n=[this.baseUrl,"/","v1"]
return n.push("/projects/"),n.push(this.databaseId.projectId),n.push("/databases/"),n.push(this.databaseId.database),n.push("/documents"),n.push(":"),n.push(e),n.join("")},t}(),ia=function(){function t(){this.emptyByteString="",this.base64Available="undefined"!=typeof atob}return Object.defineProperty(t.prototype,"document",{get:function(){return"undefined"!=typeof document?document:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return"undefined"!=typeof window?window:null},enumerable:!0,configurable:!0}),t.prototype.loadConnection=function(t){return Promise.resolve(new ra(t))},t.prototype.newConnectivityMonitor=function(){return $o.isAvailable()?new $o:new Jo},t.prototype.newSerializer=function(t){return new di(t,{useProto3Json:!0})},t.prototype.formatJSON=function(t){return JSON.stringify(t)},t.prototype.atob=function(t){return atob(t)},t.prototype.btoa=function(t){return btoa(t)},t}()
function oa(t){(function(t){t.INTERNAL.registerService("firestore",function(t){return new Co(t)},function(t){_(t&&"object"===r(t),"shallowCopy() expects object parameter.")
var e={}
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e}(Xo))})(t)}b.setPlatform(new ia),oa(a),e.registerFirestore=oa},194:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"ErrorCode",function(){return hr}),n.d(e,"EventType",function(){return lr}),n.d(e,"WebChannel",function(){return fr}),n.d(e,"XhrIo",function(){return pr}),n.d(e,"createWebChannelTransport",function(){return cr})
var i,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=a||{},s=o
function u(t){return"string"==typeof t}function c(t){return"number"==typeof t}function h(t,e){t=t.split("."),e=e||s
for(var n=0;n<t.length;n++)if(null==(e=e[t[n]]))return null
return e}function l(){}function f(t){var e=r(t)
if("object"==e){if(!t)return"null"
if(t instanceof Array)return"array"
if(t instanceof Object)return e
var n=Object.prototype.toString.call(t)
if("[object Window]"==n)return"object"
if("[object Array]"==n||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array"
if("[object Function]"==n||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object"
return e}function p(t){return"array"==f(t)}function d(t){var e=f(t)
return"array"==e||"object"==e&&"number"==typeof t.length}function y(t){var e=r(t)
return"object"==e&&null!=t||"function"==e}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0
function v(t,e,n){return t.call.apply(t.bind,arguments)}function _(t,e,n){if(!t)throw Error()
if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2)
return function(){var n=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return(b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:_).apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1)
return function(){var e=n.slice()
return e.push.apply(e,arguments),t.apply(this,e)}}var E=Date.now||function(){return+new Date}
function T(t,e){function n(){}n.prototype=e.prototype,t.N=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.yb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o]
return e.prototype[n].apply(t,i)}}function S(){this.j=this.j,this.i=this.i}S.prototype.j=!1,S.prototype.la=function(){!this.j&&(this.j=!0,this.G(),0)&&(this[m]||(this[m]=++g))},S.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()}
var I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(u(t))return u(e)&&1==e.length?t.indexOf(e,0):-1
for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n
return-1},C=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i=u(t)?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)}
function N(t){return Array.prototype.concat.apply([],arguments)}function k(t){var e=t.length
if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r]
return n}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var D,R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]}
function O(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var x=s.navigator
if(x){var M=x.userAgent
if(M){D=M
break t}}D=""}function L(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function F(t){var e,n={}
for(e in t)n[e]=t[e]
return n}var U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function q(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n]
for(var o=0;o<U.length;o++)n=U[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){return V[" "](t),t}V[" "]=l
var B,j,W=O(D,"Opera"),Q=O(D,"Trident")||O(D,"MSIE"),K=O(D,"Edge"),H=K||Q,G=O(D,"Gecko")&&!(O(D.toLowerCase(),"webkit")&&!O(D,"Edge"))&&!(O(D,"Trident")||O(D,"MSIE"))&&!O(D,"Edge"),z=O(D.toLowerCase(),"webkit")&&!O(D,"Edge")
function Y(){var t=s.document
return t?t.documentMode:void 0}t:{var X="",J=(j=D,G?/rv:([^\);]+)(\)|;)/.exec(j):K?/Edge\/([\d\.]+)/.exec(j):Q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(j):z?/WebKit\/(\S+)/.exec(j):W?/(?:Version)[ \/]?(\S+)/.exec(j):void 0)
if(J&&(X=J?J[1]:""),Q){var $=Y()
if(null!=$&&$>parseFloat(X)){B=String($)
break t}}B=X}var Z,tt={}
function et(t){return function(t,e){var n=tt
return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e()}(t,function(){for(var e=0,n=R(String(B)).split("."),r=R(String(t)).split("."),i=Math.max(n.length,r.length),o=0;0==e&&o<i;o++){var a=n[o]||"",s=r[o]||""
do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break
e=P(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||P(0==a[2].length,0==s[2].length)||P(a[2],s[2]),a=a[3],s=s[3]}while(0==e)}return 0<=e})}var nt=s.document
Z=nt&&Q?Y()||("CSS1Compat"==nt.compatMode?parseInt(B,10):5):void 0
var rt=!Q||9<=Number(Z),it=Q&&!et("9"),ot=function(){if(!s.addEventListener||!Object.defineProperty)return!1
var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{s.addEventListener("test",l,e),s.removeEventListener("test",l,e)}catch(t){}return t}()
function at(t,e){this.type=t,this.a=this.target=e,this.Ja=!0}function st(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(G){t:{try{V(e.nodeName)
var i=!0
break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)
this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=u(t.pointerType)?t.pointerType:ut[t.pointerType]||"",this.c=t,t.defaultPrevented&&this.b()}}at.prototype.b=function(){this.Ja=!1},T(st,at)
var ut={2:"touch",3:"pen",4:"mouse"}
st.prototype.b=function(){st.N.b.call(this)
var t=this.c
if(t.preventDefault)t.preventDefault()
else if(t.returnValue=!1,it)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}}
var ct="closure_listenable_"+(1e6*Math.random()|0),ht=0
function lt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.da=i,this.key=++ht,this.X=this.Z=!1}function ft(t){t.X=!0,t.listener=null,t.proxy=null,t.src=null,t.da=null}function pt(t){this.src=t,this.a={},this.b=0}function dt(t,e){var n=e.type
if(n in t.a){var r,i=t.a[n],o=I(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ft(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function yt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i]
if(!o.X&&o.listener==e&&o.capture==!!n&&o.da==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++)
var a=yt(t,e,r,i)
return-1<a?(e=t[a],n||(e.Z=!1)):((e=new lt(e,this.src,o,!!r,i)).Z=n,t.push(e)),e}
var mt="closure_lm_"+(1e6*Math.random()|0),gt={}
function vt(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,o){if(p(n)){for(var a=0;a<n.length;a++)t(e,n[a],r,i,o)
return null}return r=Ct(r),e&&e[ct]?e.Ba(n,r,y(i)?!!i.capture:!!i,o):_t(e,n,r,!0,i,o)}(t,e,n,r,i)
if(p(e)){for(var o=0;o<e.length;o++)vt(t,e[o],n,r,i)
return null}return n=Ct(n),t&&t[ct]?t.Aa(e,n,y(r)?!!r.capture:!!r,i):_t(t,e,n,!1,r,i)}function _t(t,e,n,r,i,o){if(!e)throw Error("Invalid event type")
var a=y(i)?!!i.capture:!!i
if(a&&!rt)return null
var s=St(t)
if(s||(t[mt]=s=new pt(t)),(n=s.add(e,n,r,a,o)).proxy)return n
if(r=function(){var t=Tt,e=rt?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n}
return e}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i)
else if(t.attachEvent)t.attachEvent(wt(e.toString()),r)
else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
t.addListener(r)}return n}function bt(t){if(!c(t)&&t&&!t.X){var e=t.src
if(e&&e[ct])dt(e.c,t)
else{var n=t.type,r=t.proxy
e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=St(e))?(dt(n,t),0==n.b&&(n.src=null,e[mt]=null)):ft(t)}}}function wt(t){return t in gt?gt[t]:gt[t]="on"+t}function Et(t,e){var n=t.listener,r=t.da||t.src
return t.Z&&bt(t),n.call(r,e)}function Tt(t,e){return!!t.X||Et(t,rt?new st(e,this):e=new st(e||h("window.event"),this))}function St(t){return(t=t[mt])instanceof pt?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0)
function Ct(t){return"function"==f(t)?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function Nt(){S.call(this),this.c=new pt(this),this.J=this,this.B=null}function kt(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0
e=e.concat()
for(var i=!0,o=0;o<e.length;++o){var a=e[o]
if(a&&!a.X&&a.capture==n){var s=a.listener,u=a.da||a.src
a.Z&&dt(t.c,a),i=!1!==s.call(u,r)&&i}}return i&&0!=r.Ja}T(Nt,S),Nt.prototype[ct]=!0,(i=Nt.prototype).addEventListener=function(t,e,n,r){vt(this,t,e,n,r)},i.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,o){if(p(n))for(var a=0;a<n.length;a++)t(e,n[a],r,i,o)
else i=y(i)?!!i.capture:!!i,r=Ct(r),e&&e[ct]?(e=e.c,(n=String(n).toString())in e.a&&-1<(r=yt(a=e.a[n],r,i,o))&&(ft(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete e.a[n],e.b--))):e&&(e=St(e))&&(n=e.a[n.toString()],e=-1,n&&(e=yt(n,r,i,o)),(r=-1<e?n[e]:null)&&bt(r))}(this,t,e,n,r)},i.dispatchEvent=function(t){var e,n=this.B
if(n)for(e=[];n;n=n.B)e.push(n)
n=this.J
var r=t.type||t
if(u(t))t=new at(t,n)
else if(t instanceof at)t.target=t.target||n
else{var i=t
q(t=new at(r,n),i)}if(i=!0,e)for(var o=e.length-1;0<=o;o--){var a=t.a=e[o]
i=kt(a,r,!0,t)&&i}if(i=kt(a=t.a=n,r,!0,t)&&i,i=kt(a,r,!1,t)&&i,e)for(o=0;o<e.length;o++)i=kt(a=t.a=e[o],r,!1,t)&&i
return i},i.G=function(){if(Nt.N.G.call(this),this.c){var t,e=this.c
for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)ft(n[r])
delete e.a[t],e.b--}}this.B=null},i.Aa=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},i.Ba=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)}
var At=s.JSON.stringify
function Dt(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function Rt(){this.b=this.a=null}Dt.prototype.get=function(){if(0<this.b){this.b--
var t=this.a
this.a=t.next,t.next=null}else t=this.c()
return t}
var Ot,Pt=new Dt(function(){return new Mt},function(t){t.reset()})
function xt(){var t=qt,e=null
return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function Mt(){this.next=this.b=this.a=null}function Lt(t){s.setTimeout(function(){throw t},0)}function Ft(t,e){Ot||function(){var t=s.Promise.resolve(void 0)
Ot=function(){t.then(Vt)}}(),Ut||(Ot(),Ut=!0),qt.add(t,e)}Rt.prototype.add=function(t,e){var n=Pt.get()
n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Mt.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},Mt.prototype.reset=function(){this.next=this.b=this.a=null}
var Ut=!1,qt=new Rt
function Vt(){for(var t;t=xt();){try{t.a.call(t.b)}catch(t){Lt(t)}var e=Pt
e.f(t),100>e.b&&(e.b++,t.next=e.a,e.a=t)}Ut=!1}function Bt(t,e){Nt.call(this),this.b=t||1,this.a=e||s,this.f=b(this.gb,this),this.g=E()}function jt(t){t.ba=!1,t.L&&(t.a.clearTimeout(t.L),t.L=null)}function Wt(t,e,n){if("function"==f(t))n&&(t=b(t,n))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:s.setTimeout(t,e||0)}function Qt(t,e,n){S.call(this),this.f=null!=n?b(t,n):t,this.c=e,this.b=b(this.ab,this),this.a=[]}function Kt(t){t.U=Wt(t.b,t.c),t.f.apply(null,t.a)}function Ht(t){S.call(this),this.b=t,this.a={}}T(Bt,Nt),(i=Bt.prototype).ba=!1,i.L=null,i.gb=function(){if(this.ba){var t=E()-this.g
0<t&&t<.8*this.b?this.L=this.a.setTimeout(this.f,this.b-t):(this.L&&(this.a.clearTimeout(this.L),this.L=null),this.dispatchEvent("tick"),this.ba&&(jt(this),this.start()))}},i.start=function(){this.ba=!0,this.L||(this.L=this.a.setTimeout(this.f,this.b),this.g=E())},i.G=function(){Bt.N.G.call(this),jt(this),delete this.a},T(Qt,S),(i=Qt.prototype).ea=!1,i.U=null,i.Ua=function(t){this.a=arguments,this.U?this.ea=!0:Kt(this)},i.G=function(){Qt.N.G.call(this),this.U&&(s.clearTimeout(this.U),this.U=null,this.ea=!1,this.a=[])},i.ab=function(){this.U=null,this.ea&&(this.ea=!1,Kt(this))},T(Ht,S)
var Gt=[]
function zt(t,e,n,r){p(n)||(n&&(Gt[0]=n.toString()),n=Gt)
for(var i=0;i<n.length;i++){var o=vt(e,n[i],r||t.handleEvent,!1,t.b||t)
if(!o)break
t.a[o.key]=o}}function Yt(t){L(t.a,function(t,e){this.a.hasOwnProperty(e)&&bt(t)},t),t.a={}}function Xt(){}Ht.prototype.G=function(){Ht.N.G.call(this),Yt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")}
var Jt=new Nt
function $t(t){at.call(this,"serverreachability",t)}function Zt(t){Jt.dispatchEvent(new $t(Jt,t))}function te(t){at.call(this,"statevent",t)}function ee(t){Jt.dispatchEvent(new te(Jt,t))}function ne(t){at.call(this,"timingevent",t)}function re(t,e){if("function"!=f(t))throw Error("Fn must not be null and must be a function")
return s.setTimeout(function(){t()},e)}T($t,at),T(te,at),T(ne,at)
var ie={NO_ERROR:0,hb:1,ob:2,nb:3,kb:4,mb:5,pb:6,Ma:7,TIMEOUT:8,sb:9},oe={jb:"complete",wb:"success",Na:"error",Ma:"abort",ub:"ready",vb:"readystatechange",TIMEOUT:"timeout",qb:"incrementaldata",tb:"progress",lb:"downloadprogress",xb:"uploadprogress"}
function ae(){}function se(t){var e
return(e=t.a)||(e=t.a={}),e}function ue(){}ae.prototype.a=null
var ce,he={OPEN:"a",ib:"b",Na:"c",rb:"d"}
function le(){at.call(this,"d")}function fe(){at.call(this,"c")}function pe(){}function de(t,e,n){this.g=t,this.W=e,this.V=n||1,this.I=new Ht(this),this.O=ye,t=H?125:void 0,this.P=new Bt(t),this.h=null,this.b=!1,this.l=this.D=this.f=this.F=this.v=this.R=this.i=null,this.j=[],this.a=null,this.A=0,this.c=this.w=null,this.o=-1,this.m=!1,this.J=0,this.B=null,this.s=this.S=this.H=!1}T(le,at),T(fe,at),T(pe,ae),ce=new pe
var ye=45e3,me={},ge={}
function ve(t,e,n){t.F=1,t.f=We(Le(e)),t.l=n,t.H=!0,be(t,null)}function _e(t,e,n,r){t.F=1,t.f=We(Le(e)),t.l=null,t.H=n,be(t,r)}function be(t,e){t.v=E(),Te(t),t.D=Le(t.f),je(t.D,"t",t.V),t.A=0,t.a=t.g.$(t.g.Y()?e:null),0<t.J&&(t.B=new Qt(b(t.Ka,t,t.a),t.J)),zt(t.I,t.a,"readystatechange",t.eb),e=t.h?F(t.h):{},t.l?(t.w||(t.w="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ca(t.D,t.w,t.l,e)):(t.w="GET",t.a.ca(t.D,t.w,null,e)),Zt(1)}function we(t,e,n){for(var r=!0;!t.m&&t.A<n.length;){var i=Ee(t,n)
if(i==ge){4==e&&(t.c=4,ee(14),r=!1)
break}if(i==me){t.c=4,ee(15),r=!1
break}ke(t,i)}4==e&&0==n.length&&(t.c=1,ee(16),r=!1),t.b=t.b&&r,r||(Ne(t),Ce(t))}function Ee(t,e){var n=t.A,r=e.indexOf("\n",n)
return-1==r?ge:(n=Number(e.substring(n,r)),isNaN(n)?me:(r+=1)+n>e.length?ge:(e=e.substr(r,n),t.A=r+n,e))}function Te(t){t.R=E()+t.O,Se(t,t.O)}function Se(t,e){if(null!=t.i)throw Error("WatchDog timer not null")
t.i=re(b(t.bb,t),e)}function Ie(t){t.i&&(s.clearTimeout(t.i),t.i=null)}function Ce(t){t.g.Da()||t.m||t.g.na(t)}function Ne(t){Ie(t)
var e=t.B
e&&"function"==typeof e.la&&e.la(),t.B=null,jt(t.P),Yt(t.I),t.a&&(e=t.a,t.a=null,e.abort(),e.la())}function ke(t,e){try{t.g.Ga(t,e),Zt(4)}catch(t){}}function Ae(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0)
else if(d(t)||u(t))C(t,e,void 0)
else{if(t.K&&"function"==typeof t.K)var n=t.K()
else if(t.C&&"function"==typeof t.C)n=void 0
else if(d(t)||u(t)){n=[]
for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i
i=(r=function(t){if(t.C&&"function"==typeof t.C)return t.C()
if(u(t))return t.split("")
if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r])
return e}for(r in e=[],n=0,t)e[n++]=t[r]
return e}(t)).length
for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function De(t,e){this.b={},this.a=[],this.c=0
var n=arguments.length
if(1<n){if(n%2)throw Error("Uneven number of arguments")
for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof De)for(n=t.K(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]))
else for(r in t)this.set(r,t[r])}function Re(t,e){Pe(t.b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&Oe(t))}function Oe(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e]
Pe(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={}
for(n=e=0;e<t.a.length;)Pe(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++
t.a.length=n}}function Pe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(i=de.prototype).setTimeout=function(t){this.O=t},i.eb=function(t){t=t.target
var e=this.B
e&&3==Ln(t)?e.Ua():this.Ka(t)},i.Ka=function(t){try{if(t==this.a)t:{var e=Ln(this.a),n=this.a.ya(),r=this.a.T()
if(!(3>e||3==e&&!H&&!this.a.aa())){this.m||4!=e||7==n||Zt(8==n||0>=r?3:2),Ie(this)
var i=this.a.T()
this.o=i
var o=this.a.aa()
if(this.b=200==i){if(this.S&&!this.s){e:{if(this.a){var a=Fn(this.a,"X-HTTP-Initial-Response")
if(a&&!A(a)){var s=a
break e}}s=null}if(!s){this.b=!1,this.c=3,ee(12),Ne(this),Ce(this)
break t}this.s=!0,ke(this,s)}this.H?(we(this,e,o),H&&this.b&&3==e&&(zt(this.I,this.P,"tick",this.cb),this.P.start())):ke(this,o),4==e&&Ne(this),this.b&&!this.m&&(4==e?this.g.na(this):(this.b=!1,Te(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.c=3,ee(12)):(this.c=0,ee(13)),Ne(this),Ce(this)}}}catch(t){}},i.cb=function(){if(this.a){var t=Ln(this.a),e=this.a.aa()
this.A<e.length&&(Ie(this),we(this,t,e),this.b&&4!=t&&Te(this))}},i.cancel=function(){this.m=!0,Ne(this)},i.bb=function(){this.i=null
var t=E()
0<=t-this.R?(2!=this.F&&(Zt(3),ee(17)),Ne(this),this.c=2,Ce(this)):Se(this,this.R-t)},(i=De.prototype).C=function(){Oe(this)
for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]])
return t},i.K=function(){return Oe(this),this.a.concat()},i.get=function(t,e){return Pe(this.b,t)?this.b[t]:e},i.set=function(t,e){Pe(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},i.forEach=function(t,e){for(var n=this.K(),r=0;r<n.length;r++){var i=n[r],o=this.get(i)
t.call(e,o,i,this)}}
var xe=/^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function Me(t,e){var n
this.b=this.j=this.f="",this.i=null,this.g=this.a="",this.h=!1,t instanceof Me?(this.h=void 0!==e?e:t.h,Fe(this,t.f),this.j=t.j,Ue(this,t.b),qe(this,t.i),this.a=t.a,Ve(this,rn(t.c)),this.g=t.g):t&&(n=String(t).match(xe))?(this.h=!!e,Fe(this,n[1]||"",!0),this.j=Qe(n[2]||""),Ue(this,n[3]||"",!0),qe(this,n[4]),this.a=Qe(n[5]||"",!0),Ve(this,n[6]||"",!0),this.g=Qe(n[7]||"")):(this.h=!!e,this.c=new $e(null,this.h))}function Le(t){return new Me(t)}function Fe(t,e,n){t.f=n?Qe(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function Ue(t,e,n){t.b=n?Qe(e,!0):e}function qe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e)
t.i=e}else t.i=null}function Ve(t,e,n){e instanceof $e?(t.c=e,function(t,e){e&&!t.f&&(Ze(t),t.c=null,t.a.forEach(function(t,e){var n=e.toLowerCase()
e!=n&&(tn(this,e),nn(this,n,t))},t)),t.f=e}(t.c,t.h)):(n||(e=Ke(e,Xe)),t.c=new $e(e,t.h))}function Be(t,e,n){t.c.set(e,n)}function je(t,e,n){p(n)||(n=[String(n)]),nn(t.c,e,n)}function We(t){return Be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^E()).toString(36)),t}function Qe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ke(t,e,n){return u(t)?(t=encodeURI(t).replace(e,He),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function He(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Me.prototype.toString=function(){var t=[],e=this.f
e&&t.push(Ke(e,Ge,!0),":")
var n=this.b
return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(Ke(e,Ge,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.i)&&t.push(":",String(n))),(n=this.a)&&(this.b&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ke(n,"/"==n.charAt(0)?Ye:ze,!0))),(n=this.c.toString())&&t.push("?",n),(n=this.g)&&t.push("#",Ke(n,Je)),t.join("")},Me.prototype.resolve=function(t){var e=Le(this),n=!!t.f
n?Fe(e,t.f):n=!!t.j,n?e.j=t.j:n=!!t.b,n?Ue(e,t.b):n=null!=t.i
var r=t.a
if(n)qe(e,t.i)
else if(n=!!t.a){if("/"!=r.charAt(0))if(this.b&&!this.a)r="/"+r
else{var i=e.a.lastIndexOf("/");-1!=i&&(r=e.a.substr(0,i+1)+r)}if(".."==(i=r)||"."==i)r=""
else if(O(i,"./")||O(i,"/.")){r=0==i.lastIndexOf("/",0),i=i.split("/")
for(var o=[],a=0;a<i.length;){var s=i[a++]
"."==s?r&&a==i.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),r&&a==i.length&&o.push("")):(o.push(s),r=!0)}r=o.join("/")}else r=i}return n?e.a=r:n=""!==t.c.toString(),n?Ve(e,rn(t.c)):n=!!t.g,n&&(e.g=t.g),e}
var Ge=/[#\/\?@]/g,ze=/[#\?:]/g,Ye=/[#\?]/g,Xe=/[#\?@]/g,Je=/#/g
function $e(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Ze(t){t.a||(t.a=new De,t.b=0,t.c&&function(t,e){if(t){t=t.split("&")
for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null
if(0<=r){var o=t[n].substring(0,r)
i=t[n].substring(r+1)}else o=t[n]
e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function tn(t,e){Ze(t),e=on(t,e),Pe(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,Re(t.a,e))}function en(t,e){return Ze(t),e=on(t,e),Pe(t.a.b,e)}function nn(t,e,n){tn(t,e),0<n.length&&(t.c=null,t.a.set(on(t,e),k(n)),t.b+=n.length)}function rn(t){var e=new $e
return e.c=t.c,t.a&&(e.a=new De(t.a),e.b=t.b),e}function on(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}function an(t){this.a=t,this.b=this.h=null,this.g=!1,this.i=null,this.c=-1,this.l=this.f=null}function sn(t){var e=t.a.F.a
if(null!=e)ee(4),e?(ee(10),Yn(t.a,t,!1)):(ee(11),Yn(t.a,t,!0))
else{t.b=new de(t,void 0,void 0),t.b.h=t.h,e=tr(e=t.a,e.Y()?t.f:null,t.i),ee(4),je(e,"TYPE","xmlhttp")
var n=t.a.j,r=t.a.I
n&&r&&Be(e,n,r),_e(t.b,e,!1,t.f)}}function un(){this.a=this.b=null}function cn(){this.a=new De}function hn(t){var e=r(t)
return"object"==e&&t||"function"==e?"o"+(t[m]||(t[m]=++g)):e.charAt(0)+t}function ln(t,e){this.b=t,this.a=e}function fn(t){this.g=t||pn,t=s.PerformanceNavigationTiming?0<(t=s.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(s.ka&&s.ka.Ea&&s.ka.Ea()&&s.ka.Ea().zb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new cn),this.b=null,this.c=[]}(i=$e.prototype).add=function(t,e){Ze(this),this.c=null,t=on(this,t)
var n=this.a.get(t)
return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},i.forEach=function(t,e){Ze(this),this.a.forEach(function(n,r){C(n,function(n){t.call(e,n,r,this)},this)},this)},i.K=function(){Ze(this)
for(var t=this.a.C(),e=this.a.K(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r])
return n},i.C=function(t){Ze(this)
var e=[]
if(u(t))en(this,t)&&(e=N(e,this.a.get(on(this,t))))
else{t=this.a.C()
for(var n=0;n<t.length;n++)e=N(e,t[n])}return e},i.set=function(t,e){return Ze(this),this.c=null,en(this,t=on(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},i.get=function(t,e){return t&&0<(t=this.C(t)).length?String(t[0]):e},i.toString=function(){if(this.c)return this.c
if(!this.a)return""
for(var t=[],e=this.a.K(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r))
r=this.C(r)
for(var o=0;o<r.length;o++){var a=i
""!==r[o]&&(a+="="+encodeURIComponent(String(r[o]))),t.push(a)}}return this.c=t.join("&")},T(function(){},function(){}),(i=an.prototype).M=null,i.$=function(t){return this.a.$(t)},i.abort=function(){this.b&&(this.b.cancel(),this.b=null),this.c=-1},i.Da=function(){return!1},i.Ga=function(t,e){if(this.c=t.o,0==this.M){if(!this.a.o&&(t=t.a)){var n=Fn(t,"X-Client-Wire-Protocol")
this.l=n||null,this.a.j&&(t=Fn(t,"X-HTTP-Session-Id"))&&(this.a.I=t)}if(e){try{var r=this.a.ja.a.parse(e)}catch(t){return(e=this.a).m=this.c,void $n(e,2)}this.f=r[0]}else(e=this.a).m=this.c,$n(e,2)}else 1==this.M&&(this.g?ee(6):"11111"==e?(ee(5),this.g=!0,(!Q||10<=Number(Z))&&(this.c=200,this.b.cancel(),ee(11),Yn(this.a,this,!0))):(ee(7),this.g=!1))},i.na=function(){if(this.c=this.b.o,this.b.b)0==this.M?(this.M=1,sn(this)):1==this.M&&(this.g?(ee(11),Yn(this.a,this,!0)):(ee(10),Yn(this.a,this,!1)))
else{0==this.M?ee(8):1==this.M&&ee(9)
var t=this.a
t.m=this.c,$n(t,2)}},i.Y=function(){return this.a.Y()},i.ma=function(){return this.a.ma()},cn.prototype.add=function(t){this.a.set(hn(t),t)},cn.prototype.C=function(){return this.a.C()}
var pn=10
function dn(t,e){!t.a&&(O(e,"spdy")||O(e,"quic")||O(e,"h2"))&&(t.f=t.g,t.a=new cn,t.b&&(vn(t,t.b),t.b=null))}function yn(t){return!!t.b||!!t.a&&t.a.a.c>=t.f}function mn(t){return t.b?1:t.a?t.a.a.c:0}function gn(t,e){return t.b?t=t.b==e:t.a?(e=hn(e),t=Pe(t.a.a.b,e)):t=!1,t}function vn(t,e){t.a?t.a.add(e):t.b=e}function _n(t,e){var n
t.b&&t.b==e?t.b=null:((n=t.a)&&(n=hn(e),n=Pe(t.a.a.b,n)),n&&Re(t.a.a,hn(e)))}function bn(t){if(null!=t.b)return t.c.concat(t.b.j)
if(null!=t.a&&0!=t.a.a.c){var e=t.c
return C(t.a.C(),function(t){e=e.concat(t.j)}),e}return k(t.c)}function wn(){}function En(){this.a=new wn}function Tn(t,e,n){var r=n||""
try{Ae(t,function(t,n){var i=t
y(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))})}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Sn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}fn.prototype.cancel=function(){var t
this.c=bn(this),this.b?(this.b.cancel(),this.b=null):this.a&&0!=this.a.a.c&&(C(this.a.C(),function(t){t.cancel()}),(t=this.a.a).b={},t.a.length=0,t.c=0)},wn.prototype.stringify=function(t){return s.JSON.stringify(t,void 0)},wn.prototype.parse=function(t){return s.JSON.parse(t,void 0)}
var In=s.JSON.parse
function Cn(t){Nt.call(this),this.headers=new De,this.H=t||null,this.b=!1,this.s=this.a=null,this.A="",this.h=0,this.f="",this.g=this.w=this.l=this.v=!1,this.o=0,this.m=null,this.I=Nn,this.D=this.F=!1}T(Cn,Nt)
var Nn="",kn=/^https?$/i,An=["POST","PUT"]
function Dn(t){return"content-type"==t.toLowerCase()}function Rn(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,On(t),xn(t)}function On(t){t.v||(t.v=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function Pn(t){if(t.b&&void 0!==a&&(!t.s[1]||4!=Ln(t)||2!=t.T()))if(t.l&&4==Ln(t))Wt(t.Fa,0,t)
else if(t.dispatchEvent("readystatechange"),4==Ln(t)){t.b=!1
try{var e,n=t.T()
t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0
break t
default:r=!1}if(!(e=r)){var i
if(i=0===n){var o=String(t.A).match(xe)[1]||null
if(!o&&s.self&&s.self.location){var u=s.self.location.protocol
o=u.substr(0,u.length-1)}i=!kn.test(o?o.toLowerCase():"")}e=i}e?(t.dispatchEvent("complete"),t.dispatchEvent("success")):(t.h=6,t.f=t.za()+" ["+t.T()+"]",On(t))}finally{xn(t)}}}function xn(t,e){if(t.a){Mn(t)
var n=t.a,r=t.s[0]?l:null
t.a=null,t.s=null,e||t.dispatchEvent("ready")
try{n.onreadystatechange=r}catch(t){}}}function Mn(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(s.clearTimeout(t.m),t.m=null)}function Ln(t){return t.a?t.a.readyState:0}function Fn(t,e){return t.a?t.a.getResponseHeader(e):null}function Un(t,e,n){t:{for(r in n){var r=!1
break t}r=!0}if(r)return t
if(n=function(t){var e=""
return L(n,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}(),u(t)){if(e=encodeURIComponent(String(e)),e+=n=null!=n?"="+encodeURIComponent(String(n)):""){if(0>(n=t.indexOf("#"))&&(n=t.length),0>(r=t.indexOf("?"))||r>n){r=n
var i=""}else i=t.substring(r+1,n)
n=(t=[t.substr(0,r),i,t.substr(n)])[1],t[1]=e?n?n+"&"+e:e:n,t=t[0]+(t[1]?"?"+t[1]:"")+t[2]}return t}return Be(t,e,n),t}function qn(t){this.f=[],this.F=new un,this.ga=this.pa=this.B=this.ha=this.a=this.I=this.j=this.V=this.g=this.J=this.i=null,this.Ra=this.P=0,this.Pa=!!h("internalChannelParams.failFast",t),this.ia=this.w=this.s=this.l=this.h=this.c=null,this.oa=!0,this.m=this.ra=this.O=-1,this.S=this.v=this.A=0,this.Oa=h("internalChannelParams.baseRetryDelayMs",t)||5e3,this.Sa=h("internalChannelParams.retryDelaySeedMs",t)||1e4,this.Qa=h("internalChannelParams.forwardChannelMaxRetries",t)||2,this.qa=h("internalChannelParams.forwardChannelRequestTimeoutMs",t)||2e4,this.La=t&&t.Ab||void 0,this.D=void 0,this.R=t&&t.supportsCrossDomainXhr||!1,this.H="",this.b=new fn(t&&t.concurrentRequestLimit),this.ja=new En,this.o=!t||void 0===t.backgroundChannelTest||t.backgroundChannelTest,(this.W=t&&t.fastHandshake||!1)&&!this.o&&(this.o=!0),t&&t.forceLongPolling&&(this.oa=!1),this.fa=void 0}function Vn(t){if(Bn(t),3==t.u){var e=t.P++,n=Le(t.B)
Be(n,"SID",t.H),Be(n,"RID",e),Be(n,"TYPE","terminate"),Kn(t,n),(e=new de(t,e,void 0)).F=2,e.f=We(Le(n)),n=!1,s.navigator&&s.navigator.sendBeacon&&(n=s.navigator.sendBeacon(e.f.toString(),"")),!n&&s.Image&&((new Image).src=e.f,n=!0),n||(e.a=e.g.$(null),e.a.ca(e.f)),e.v=E(),Te(e)}Zn(t)}function Bn(t){t.w&&(t.w.abort(),t.w=null),t.a&&(t.a.cancel(),t.a=null),t.l&&(s.clearTimeout(t.l),t.l=null),Xn(t),t.b.cancel(),t.h&&(c(t.h)&&s.clearTimeout(t.h),t.h=null)}function jn(t,e){t.f.push(new ln(t.Ra++,e)),3==t.u&&Wn(t)}function Wn(t){yn(t.b)||t.h||(t.h=!0,Ft(t.Ia,t),t.A=0)}function Qn(t,e){var n
n=e?e.W:t.P++
var r=Le(t.B)
Be(r,"SID",t.H),Be(r,"RID",n),Be(r,"AID",t.O),Kn(t,r),t.g&&t.i&&Un(r,t.g,t.i),n=new de(t,n,t.A+1),null===t.g&&(n.h=t.i),e&&(t.f=e.j.concat(t.f)),e=Hn(t,n,1e3),n.setTimeout(Math.round(.5*t.qa)+Math.round(.5*t.qa*Math.random())),vn(t.b,n),ve(n,r,e)}function Kn(t,e){t.c&&Ae({},function(t,n){Be(e,n,t)})}function Hn(t,e,n){n=Math.min(t.f.length,n)
var r=t.c?b(t.c.Ta,t.c,t):null
t:for(var i=t.f,o=-1;;){var a=["count="+n];-1==o?0<n?(o=i[0].b,a.push("ofs="+o)):o=0:a.push("ofs="+o)
for(var s=!0,u=0;u<n;u++){var c=i[u].b,h=i[u].a
if(0>(c-=o))o=Math.max(0,i[u].b-100),s=!1
else try{Tn(h,a,"req"+c+"_")}catch(t){r&&r(h)}}if(s){r=a.join("&")
break t}}return t=t.f.splice(0,n),e.j=t,r}function Gn(t){t.a||t.l||(t.S=1,Ft(t.Ha,t),t.v=0)}function zn(t){return!(t.a||t.l||3<=t.v||(t.S++,t.l=re(b(t.Ha,t),Jn(t,t.v)),t.v++,0))}function Yn(t,e,n){var r=e.l
r&&dn(t.b,r),t.ia=t.oa&&n,t.m=e.c,t.B=tr(t,null,t.ha),Wn(t)}function Xn(t){null!=t.s&&(s.clearTimeout(t.s),t.s=null)}function Jn(t,e){var n=t.Oa+Math.floor(Math.random()*t.Sa)
return t.ma()||(n*=2),n*e}function $n(t,e){if(2==e){var n=null
t.c&&(n=null)
var r=b(t.fb,t)
n||(n=new Me("//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||Fe(n,"https"),We(n)),function(t,e){var n=new Xt
if(s.Image){var r=new Image
r.onload=w(Sn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(Sn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(Sn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(Sn,n,r,"TestLoadImage: timeout",!1,e),s.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(n.toString(),r)}else ee(2)
t.u=0,t.c&&t.c.ta(e),Zn(t),Bn(t)}function Zn(t){t.u=0,t.m=-1,t.c&&(0==bn(t.b).length&&0==t.f.length||(t.b.c.length=0,k(t.f),t.f.length=0),t.c.sa())}function tr(t,e,n){var r=function(t){return t instanceof Me?Le(t):new Me(t,void 0)}(n)
if(""!=r.b)e&&Ue(r,e+"."+r.b),qe(r,r.i)
else{var i,o=s.location
i=e?e+"."+o.hostname:o.hostname,r=function(t,e,n,r){var i=new Me(null,void 0)
return t&&Fe(i,t),e&&Ue(i,e),n&&qe(i,n),r&&(i.a=r),i}(o.protocol,i,+o.port,n)}return t.V&&L(t.V,function(t,e){Be(r,e,t)}),e=t.j,n=t.I,e&&n&&Be(r,e,n),Be(r,"VER",t.wa),Kn(t,r),r}function er(){}function nr(){if(Q&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function rr(t,e){Nt.call(this),this.a=new qn(e),this.g=t,this.m=e&&e.testUrl?e.testUrl:function(t){for(var e=arguments[0],n=1;n<arguments.length;n++){var r,i=arguments[n]
0==i.lastIndexOf("/",0)?e=i:((r=""==e)||(r=0<=(r=e.length-1)&&e.indexOf("/",r)==r),e+=r?i:"/"+i)}return e}(this.g,"test"),this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.i=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.xa&&(t?t["X-WebChannel-Client-Profile"]=e.xa:t={"X-WebChannel-Client-Profile":e.xa}),this.a.J=t,(t=e&&e.httpHeadersOverwriteParam)&&!A(t)&&(this.a.g=t),this.l=e&&e.supportsCrossDomainXhr||!1,this.h=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.a.j=e,null!==(t=this.b)&&e in t&&e in(t=this.b)&&delete t[e]),this.f=new ar(this)}function ir(t){le.call(this)
var e=t.__sm__
if(e){t:{for(var n in e){t=n
break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function or(){fe.call(this),this.status=1}function ar(t){this.a=t}(i=Cn.prototype).ca=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.A+"; newUri="+t)
e=e?e.toUpperCase():"GET",this.A=t,this.f="",this.h=0,this.v=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?se(this.H):se(ce),this.a.onreadystatechange=b(this.Fa,this)
try{this.w=!0,this.a.open(e,String(t),!0),this.w=!1}catch(t){return void Rn(this,t)}t=n||""
var i=new De(this.headers)
r&&Ae(r,function(t,e){i.set(e,t)}),r=function(t){t:{for(var e=Dn,n=t.length,r=u(t)?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i
break t}e=-1}return 0>e?null:u(t)?t.charAt(e):t[e]}(i.K()),n=s.FormData&&t instanceof s.FormData,!(0<=I(An,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(t,e){this.a.setRequestHeader(e,t)},this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F)
try{Mn(this),0<this.o&&((this.D=function(t){return Q&&et(9)&&c(t.timeout)&&void 0!==t.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=b(this.Ca,this)):this.m=Wt(this.Ca,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(t){Rn(this,t)}},i.Ca=function(){void 0!==a&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8))},i.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),xn(this))},i.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),xn(this,!0)),Cn.N.G.call(this)},i.Fa=function(){this.j||(this.w||this.l||this.g?Pn(this):this.$a())},i.$a=function(){Pn(this)},i.T=function(){try{return 2<Ln(this)?this.a.status:-1}catch(t){return-1}},i.za=function(){try{return 2<Ln(this)?this.a.statusText:""}catch(t){return""}},i.aa=function(){try{return this.a?this.a.responseText:""}catch(t){return""}},i.Va=function(t){if(this.a){var e=this.a.responseText
return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),In(e)}},i.ya=function(){return this.h},i.Ya=function(){return u(this.f)?this.f:String(this.f)},(i=qn.prototype).wa=8,i.u=1,i.Da=function(){return 0==this.u},i.Ia=function(t){if(this.h)if(this.h=null,1==this.u){if(!t){this.P=Math.floor(1e5*Math.random())
var e,n=new de(this,t=this.P++,void 0),r=this.i
if(this.J&&(r?q(r=F(r),this.J):r=this.J),null===this.g&&(n.h=r),this.W)t:{for(var i=e=0;i<this.f.length;i++){var o=this.f[i]
if(void 0===(o="__data__"in o.a&&u(o=o.a.__data__)?o.length:void 0))break
if(4096<(e+=o)){e=i
break t}if(4096===e||i===this.f.length-1){e=i+1
break t}}e=1e3}else e=1e3
e=Hn(this,n,e),Be(i=Le(this.B),"RID",t),Be(i,"CVER",22),this.o&&this.j&&Be(i,"X-HTTP-Session-Id",this.j),Kn(this,i),this.g&&r&&Un(i,this.g,r),vn(this.b,n),this.W?(Be(i,"$req",e),Be(i,"SID","null"),n.S=!0,ve(n,i,null)):ve(n,i,e),this.u=2}}else 3==this.u&&(t?Qn(this,t):0==this.f.length||yn(this.b)||Qn(this))},i.Ha=function(){this.l=null,this.a=new de(this,"rpc",this.S),null===this.g&&(this.a.h=this.i),this.a.J=0
var t=Le(this.pa)
Be(t,"RID","rpc"),Be(t,"SID",this.H),Be(t,"CI",this.ia?"0":"1"),Be(t,"AID",this.O),Kn(this,t),Be(t,"TYPE","xmlhttp"),this.g&&this.i&&Un(t,this.g,this.i),this.D&&this.a.setTimeout(this.D),_e(this.a,t,!0,this.ga)},i.Ga=function(t,e){if(0!=this.u&&(this.a==t||gn(this.b,t)))if(this.m=t.o,!t.s&&gn(this.b,t)&&3==this.u){try{var n=this.ja.a.parse(e)}catch(t){n=null}if(p(n)&&3==n.length){if(0==(e=n)[0]){t:if(!this.l){if(this.a){if(!(this.a.v+3e3<t.v))break t
Xn(this),this.a.cancel(),this.a=null}zn(this),ee(18)}}else this.ra=e[1],0<this.ra-this.O&&37500>e[2]&&this.ia&&0==this.v&&!this.s&&(this.s=re(b(this.Za,this),6e3))
if(1>=mn(this.b)&&this.fa){try{this.fa()}catch(t){}this.fa=void 0}}else $n(this,11)}else if((t.s||this.a==t)&&Xn(this),!A(e))for(e=n=this.ja.a.parse(e),n=0;n<e.length;n++){var r=e[n]
if(this.O=r[0],r=r[1],2==this.u)if("c"==r[0]){this.H=r[1],this.ga=r[2]
var i=r[3]
null!=i&&(this.wa=i),null!=(r=r[5])&&c(r)&&0<r&&(this.D=1.5*r),this.o&&(r=t.a)&&((i=Fn(r,"X-Client-Wire-Protocol"))&&dn(this.b,i),this.j&&(r=Fn(r,"X-HTTP-Session-Id")))&&(this.I=r,Be(this.B,this.j,r)),this.u=3,this.c&&this.c.va(),r=t,this.pa=tr(this,this.Y()?this.ga:null,this.ha),r.s?(_n(this.b,r),(i=this.D)&&r.setTimeout(i),r.i&&(Ie(r),Te(r)),this.a=r):Gn(this),0<this.f.length&&Wn(this)}else"stop"!=r[0]&&"close"!=r[0]||$n(this,7)
else 3==this.u&&("stop"==r[0]||"close"==r[0]?"stop"==r[0]?$n(this,7):Vn(this):"noop"!=r[0]&&this.c&&this.c.ua(r),this.v=0)}},i.Za=function(){null!=this.s&&(this.s=null,this.a.cancel(),this.a=null,zn(this),ee(19))},i.na=function(t){var e=null
if(this.a==t){Xn(this),this.a=null
var n=2}else{if(!gn(this.b,t))return
e=t.j,_n(this.b,t),n=1}if(this.m=t.o,0!=this.u)if(t.b)1==n?(e=E()-t.v,Jt.dispatchEvent(new ne(Jt,t.l?t.l.length:0,e,this.A)),Wn(this)):Gn(this)
else{var r=t.c
if(3==r||0==r&&0<this.m||!(1==n&&function(t,e){return!(mn(t.b)>=t.b.f-(t.h?1:0)||(t.h?(t.f=e.j.concat(t.f),0):1==t.u||2==t.u||t.A>=(t.Pa?0:t.Qa)||(t.h=re(b(t.Ia,t,e),Jn(t,t.A)),t.A++,0)))}(this,t)||2==n&&zn(this)))switch(e&&0<e.length&&(t=this.b,t.c=t.c.concat(e)),r){case 1:$n(this,5)
break
case 4:$n(this,10)
break
case 3:$n(this,6)
break
default:$n(this,2)}}},i.fb=function(t){ee(t?2:1)},i.$=function(t){if(t&&!this.R)throw Error("Can't create secondary domain capable XhrIo object.")
return(t=new Cn(this.La)).F=this.R,t},i.ma=function(){return!!this.c&&!0},i.Y=function(){return this.R},(i=er.prototype).va=function(){},i.ua=function(){},i.ta=function(){},i.sa=function(){},i.Ta=function(){},nr.prototype.a=function(t,e){return new rr(t,e)},T(rr,Nt),(i=rr.prototype).addEventListener=function(t,e,n,r){rr.N.addEventListener.call(this,t,e,n,r)},i.removeEventListener=function(t,e,n,r){rr.N.removeEventListener.call(this,t,e,n,r)},i.Wa=function(){this.a.c=this.f,this.l&&(this.a.R=!0)
var t=this.a,e=this.m,n=this.g,r=this.b||void 0
ee(0),t.ha=n,t.V=r||{},t.o&&(t.F.b=[],t.F.a=!1),t.w=new an(t),null===t.g&&(t.w.h=t.i),n=e,t.g&&t.i&&(n=Un(e,t.g,t.i)),(t=t.w).i=n,e=tr(t.a,null,t.i),ee(3),null!=(n=t.a.F.b)?(t.f=n[0],t.M=1,sn(t)):(je(e,"MODE","init"),!t.a.o&&t.a.j&&je(e,"X-HTTP-Session-Id",t.a.j),t.b=new de(t,void 0,void 0),t.b.h=t.h,_e(t.b,e,!1,null),t.M=0)},i.close=function(){Vn(this.a)},i.Xa=function(t){if(u(t)){var e={}
e.__data__=t,jn(this.a,e)}else this.h?((e={}).__data__=At(t),jn(this.a,e)):jn(this.a,t)},i.G=function(){this.a.c=null,delete this.f,Vn(this.a),delete this.a,rr.N.G.call(this)},T(ir,le),T(or,fe),T(ar,er),ar.prototype.va=function(){this.a.dispatchEvent("a")},ar.prototype.ua=function(t){this.a.dispatchEvent(new ir(t))},ar.prototype.ta=function(t){this.a.dispatchEvent(new or(t))},ar.prototype.sa=function(){this.a.dispatchEvent("b")}
var sr=w(function(t,e){function n(){}n.prototype=t.prototype
var r=new n
return t.apply(r,Array.prototype.slice.call(arguments,1)),r},nr)
nr.prototype.createWebChannel=nr.prototype.a,rr.prototype.send=rr.prototype.Xa,rr.prototype.open=rr.prototype.Wa,rr.prototype.close=rr.prototype.close,ie.NO_ERROR=0,ie.TIMEOUT=8,ie.HTTP_ERROR=6,oe.COMPLETE="complete",ue.EventType=he,he.OPEN="a",he.CLOSE="b",he.ERROR="c",he.MESSAGE="d",Nt.prototype.listen=Nt.prototype.Aa,Cn.prototype.listenOnce=Cn.prototype.Ba,Cn.prototype.getLastError=Cn.prototype.Ya,Cn.prototype.getLastErrorCode=Cn.prototype.ya,Cn.prototype.getStatus=Cn.prototype.T,Cn.prototype.getStatusText=Cn.prototype.za,Cn.prototype.getResponseJson=Cn.prototype.Va,Cn.prototype.getResponseText=Cn.prototype.aa,Cn.prototype.send=Cn.prototype.ca
var ur={createWebChannelTransport:sr,ErrorCode:ie,EventType:oe,WebChannel:ue,XhrIo:Cn},cr=ur.createWebChannelTransport,hr=ur.ErrorCode,lr=ur.EventType,fr=ur.WebChannel,pr=ur.XhrIo
e.default=ur}}])
