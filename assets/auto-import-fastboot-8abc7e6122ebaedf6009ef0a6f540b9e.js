(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[6],{191:function(t,e,n){"use strict"
n.r(e),n(201)},201:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,a=n(202),s={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},u=function(t){function e(n,r,i){var o=t.call(this,r)||this
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
t.INTERNAL.registerService(p,d,e,void 0,!0)}y(o),e.registerFunctions=y},202:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"__extends",function(){return o}),n.d(e,"__assign",function(){return a}),n.d(e,"__rest",function(){return s}),n.d(e,"__decorate",function(){return u}),n.d(e,"__param",function(){return c}),n.d(e,"__metadata",function(){return h}),n.d(e,"__awaiter",function(){return l}),n.d(e,"__generator",function(){return f}),n.d(e,"__exportStar",function(){return p}),n.d(e,"__values",function(){return d}),n.d(e,"__read",function(){return y}),n.d(e,"__spread",function(){return m}),n.d(e,"__await",function(){return v}),n.d(e,"__asyncGenerator",function(){return g}),n.d(e,"__asyncDelegator",function(){return _}),n.d(e,"__asyncValues",function(){return b}),n.d(e,"__makeTemplateObject",function(){return w}),n.d(e,"__importStar",function(){return E}),n.d(e,"__importDefault",function(){return T})
var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}
function o(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t}).apply(this,arguments)}
function s(t,e){var n={}
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r])
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n}function u(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i
if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i)
else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s)
return a>3&&s&&Object.defineProperty(e,n,s),s}function c(t,e){return function(n,r){e(n,r,t)}}function h(t,e){if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function f(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function p(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function d(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0
return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function y(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,i,o=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function m(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]))
return t}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(t,e||[]),o=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(t){i[t]&&(r[t]=function(e){return new Promise(function(n,r){o.push([t,e,n,r])>1||s(t,e)})})}function s(t,e){try{(n=i[t](e)).value instanceof v?Promise.resolve(n.value.v).then(u,c):h(o[0][2],n)}catch(t){h(o[0][3],t)}var n}function u(t){s("next",t)}function c(t){s("throw",t)}function h(t,e){t(e),o.shift(),o.length&&s(o[0][0],o[0][1])}}function _(t){var e,n
return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e
function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:v(t[r](e)),done:"return"===r}:i?i(e):e}:i}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var e,n=t[Symbol.asyncIterator]
return n?n.call(t):(t=d(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e)
function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,i){(function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)})(r,i,(e=t[n](e)).done,e.value)})}}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function E(t){if(t&&t.__esModule)return t
var e={}
if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e.default=t,e}function T(t){return t&&t.__esModule?t:{default:t}}}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{192:function(t,e,n){"use strict"
n.r(e),n(203)},203:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,a=n(204),s=n(64)
n(206)
var u,c,h,l,f,p,d=n(65),y="0.2.11",m="FB-PERF-TRACE-START",v="FB-PERF-TRACE-STOP",g="FB-PERF-TRACE-MEASURE",_="@firebase/performance/config",b="@firebase/performance/configexpire",w=((u={})["trace started"]="Trace {$traceName} was started before.",u["trace stopped"]="Trace {$traceName} is not running.",u["no window"]="Window is not available.",u["no app id"]="App id is not available.",u["no project id"]="Project id is not available.",u["no api key"]="Api key is not available.",u["invalid cc log"]="Attempted to queue invalid cc event",u["FB not default"]="Performance can only start when Firebase app instance is the default one.",u["RC response not ok"]="RC response is not ok",u),E=new s.ErrorFactory("performance","Performance",w),T=function(){function t(t){if(!t)throw E.create("no window")
this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver(function(t){var n,r
try{for(var i=a.__values(t.getEntries()),o=i.next();!o.done;o=i.next()){var s=o.value
e(s)}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===c&&(c=new t(h)),c},t}(),S=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId
if(!t)throw E.create("no app id")
return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId
if(!t)throw E.create("no project id")
return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey
if(!t)throw E.create("no api key")
return t},t.getInstance=function(){return void 0===l&&(l=new t),l},t}()
function I(){return f}function C(){switch(T.getInstance().document.visibilityState){case"visible":return p.VISIBLE
case"hidden":return p.HIDDEN
case"prerender":return p.PRERENDER
default:return p.UNKNOWN}}function N(){var t=T.getInstance().navigator.connection
switch(t&&t.effectiveType){case"slow-2g":return 1
case"2g":return 2
case"3g":return 3
case"4g":return 4
default:return 0}}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN",t[t.PRERENDER=3]="PRERENDER",t[t.UNLOADED=4]="UNLOADED"}(p||(p={}))
var k=new d.Logger("Performance")
k.logLevel=d.LogLevel.INFO
var A="0.0.1",D={loggingEnabled:!0},R="FIREBASE_INSTALLATIONS_AUTH"
var P="Could not fetch config, will use default configs"
function O(t){if(!t)return t
var e=S.getInstance(),n=t.entries||{}
return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=D.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=x(e.tracesSamplingRate),e.logNetworkAfterSampling=x(e.networkRequestsSamplingRate),t}function x(t){return Math.random()<=t}var M,L=1
function F(){var t
return L=2,M=M||(t=T.getInstance().document,new Promise(function(e){t&&"complete"!==t.readyState?t.addEventListener("readystatechange",function n(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())}):e()})).then(function(){return(t=S.getInstance().firebaseAppInstance.installations().getId()).then(function(t){f=t}),t
var t}).then(function(t){return function(t){var e=function(){var t=T.getInstance().localStorage,e=t.getItem(b)
if(e&&Number(e)>Date.now()){var n=t.getItem(_)
if(n)try{return JSON.parse(n)}catch(t){return}}}()
return e?(O(e),Promise.resolve()):function(t){return(e=S.getInstance().firebaseAppInstance.installations().getToken(),e.then(function(t){}),e).then(function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+S.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+S.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:R+" "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:S.getInstance().getAppId(),app_version:y,sdk_version:A})})
return fetch(r).then(function(t){if(t.ok)return t.json()
throw E.create("RC response not ok")})}).catch(function(){k.info(P)})
var e}(t).then(function(t){return O(t)}).then(function(t){return function(t){if(t){var e=T.getInstance().localStorage
e.setItem(_,JSON.stringify(t)),e.setItem(b,String(Date.now()+60*S.getInstance().configTimeToLive*60*1e3))}}(t)},function(){})}(t)}).then(function(){return U()},function(){return U()})}function U(){L=3}var q,V=1e4,B=3,j=[]
function W(){if(q)return q
var t=function(t){return function(e,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
!function(t){if(!t.eventTime||!t.message)throw E.create("invalid cc log")
j=a.__spread(j,[t])}({message:t.apply(void 0,a.__spread(r)),eventTime:Date.now()})}}(G)
return(q=new d.Logger("@firebase/performance/cc")).logHandler=t,q}function Q(t){var e=S.getInstance()
!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&T.getInstance().requiredApisAvailable()&&(t.isAuto&&C()!==p.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===L?K(t):F().then(function(){return K(t)},function(){return K(t)})))}function K(t){I()&&setTimeout(function(){return W().log(t,1)},0)}function G(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:H(),network_request_metric:r},JSON.stringify(i)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs}
0!==Object.keys(t.counters).length&&(e.counters=z(t.counters))
var n=t.getAttributes()
0!==Object.keys(n).length&&(e.custom_attributes=z(n))
var r={application_info:H(),trace_metric:e}
return JSON.stringify(r)}(t)
var n,r,i}function H(){return{google_app_id:S.getInstance().getAppId(),app_instance_id:I(),web_app_info:{sdk_version:y,page_url:T.getInstance().getUrl(),service_worker_status:(t=T.getInstance().navigator,"serviceWorker"in t?t.serviceWorker.controller?2:3:1),visibility_state:C(),effective_connection_type:N()},application_process_state:0}
var t}function z(t){return Object.keys(t).map(function(e){return{key:e,value:t[e]}})}!function t(e){setTimeout(function(){if(0!==B){if(!j.length)return t(V)
var e=a.__spread(j)
j=[]
var n=e.map(function(t){return{source_extension_json:t.message,event_time_ms:String(t.eventTime)}}),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:S.getInstance().logSource,log_event:n}
fetch(S.getInstance().logEndPointUrl,{method:"POST",body:JSON.stringify(r)}).then(function(t){return t.ok||k.info("Call to Firebase backend failed."),t.json()}).then(function(e){var n=Number(e.next_request_wait_millis),r=isNaN(n)?V:Math.max(V,n)
B=3,t(r)}).catch(function(){j=a.__spread(e,j),B--,k.info("Tries left: "+B+"."),t(V)})}},e)}(5500)
var Y=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=T.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=m+"-"+this.randomId+"-"+this.name,this.traceStopMark=v+"-"+this.randomId+"-"+this.name,this.traceMeasure=n||g+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw E.create("trace started",{traceName:this.name})
this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw E.create("trace stopped",{traceName:this.name})
this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Q(this)},t.prototype.record=function(t,e,n){var r,i
if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=a.__assign({},n.attributes)),n&&n.metrics)try{for(var o=a.__values(Object.keys(n.metrics)),s=o.next();!s.done;s=o.next()){var u=s.value
isNaN(Number(n.metrics[u]))||(this.counters[u]=Number(Math.floor(n.metrics[u])))}}catch(t){r={error:t}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}Q(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]&&(this.counters[t]=0),this.counters[t]+=e},t.prototype.putMetric=function(t,e){this.counters[t]=e},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){this.customAttributes[t]=e},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return a.__assign({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0]
e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=T.getInstance().getUrl()
if(i){var o=new t("_wt_"+i,!0),a=Math.floor(1e3*T.getInstance().getTimeOrigin())
if(o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.incrementMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.incrementMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.incrementMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd))),n){var s=n.find(function(t){return"first-paint"===t.name})
s&&s.startTime&&o.incrementMetric("_fp",Math.floor(1e3*s.startTime))
var u=n.find(function(t){return"first-contentful-paint"===t.name})
u&&u.startTime&&o.incrementMetric("_fcp",Math.floor(1e3*u.startTime)),r&&o.incrementMetric("_fid",Math.floor(1e3*r))}Q(o)}},t.createUserTimingTrace=function(e){Q(new t(e,!1,e))},t}()
function X(t){var e=t
if(e&&void 0!==e.responseStart){var n=T.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime))
!function(t){var e=S.getInstance()
e.instrumentationEnabled&&t.url!==e.logEndPointUrl.split("?")[0]&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(function(){return W().log(t,0)},0)}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}}var J=5e3
function $(){I()&&(setTimeout(function(){return function(){var t=T.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint")
if(t.onFirstInputDelay){var r=setTimeout(function(){Y.createOobTrace(e,n),r=void 0},J)
t.onFirstInputDelay(function(t){r&&(clearTimeout(r),Y.createOobTrace(e,n,t))})}else Y.createOobTrace(e,n)}()},0),setTimeout(function(){return function(){var t,e,n=T.getInstance(),r=n.getEntriesByType("resource")
try{for(var i=a.__values(r),o=i.next();!o.done;o=i.next()){X(o.value)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}n.setupObserver("resource",X)}()},0),setTimeout(function(){return function(){var t,e,n=T.getInstance(),r=n.getEntriesByType("measure")
try{for(var i=a.__values(r),o=i.next();!o.done;o=i.next()){Z(o.value)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}n.setupObserver("measure",Z)}()},0))}function Z(t){var e=t.name
e.substring(0,g.length)!==g&&Y.createUserTimingTrace(e)}var tt=function(){function t(t){this.app=t,T.getInstance().requiredApisAvailable()?F().then($,$):k.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}return t.prototype.trace=function(t){return new Y(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return S.getInstance().instrumentationEnabled},set:function(t){S.getInstance().instrumentationEnabled=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return S.getInstance().dataCollectionEnabled},set:function(t){S.getInstance().dataCollectionEnabled=t},enumerable:!0,configurable:!0}),t}(),et="[DEFAULT]"
function nt(t){t.INTERNAL.registerService("performance",function(t){if(t.name!==et)throw E.create("FB not default")
return S.getInstance().firebaseAppInstance=t,new tt(t)},{})}!function(t){h=t}(window),nt(o),e.registerPerformance=nt},204:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"__extends",function(){return o}),n.d(e,"__assign",function(){return a}),n.d(e,"__rest",function(){return s}),n.d(e,"__decorate",function(){return u}),n.d(e,"__param",function(){return c}),n.d(e,"__metadata",function(){return h}),n.d(e,"__awaiter",function(){return l}),n.d(e,"__generator",function(){return f}),n.d(e,"__exportStar",function(){return p}),n.d(e,"__values",function(){return d}),n.d(e,"__read",function(){return y}),n.d(e,"__spread",function(){return m}),n.d(e,"__await",function(){return v}),n.d(e,"__asyncGenerator",function(){return g}),n.d(e,"__asyncDelegator",function(){return _}),n.d(e,"__asyncValues",function(){return b}),n.d(e,"__makeTemplateObject",function(){return w}),n.d(e,"__importStar",function(){return E}),n.d(e,"__importDefault",function(){return T})
var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}
function o(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t}).apply(this,arguments)}
function s(t,e){var n={}
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r])
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n}function u(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i
if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i)
else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s)
return a>3&&s&&Object.defineProperty(e,n,s),s}function c(t,e){return function(n,r){e(n,r,t)}}function h(t,e){if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function f(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function p(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function d(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0
return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function y(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,i,o=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function m(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]))
return t}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(t,e||[]),o=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(t){i[t]&&(r[t]=function(e){return new Promise(function(n,r){o.push([t,e,n,r])>1||s(t,e)})})}function s(t,e){try{(n=i[t](e)).value instanceof v?Promise.resolve(n.value.v).then(u,c):h(o[0][2],n)}catch(t){h(o[0][3],t)}var n}function u(t){s("next",t)}function c(t){s("throw",t)}function h(t,e){t(e),o.shift(),o.length&&s(o[0][0],o[0][1])}}function _(t){var e,n
return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e
function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:v(t[r](e)),done:"return"===r}:i?i(e):e}:i}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var e,n=t[Symbol.asyncIterator]
return n?n.call(t):(t=d(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e)
function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,i){(function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)})(r,i,(e=t[n](e)).done,e.value)})}}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function E(t){if(t&&t.__esModule)return t
var e={}
if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e.default=t,e}function T(t){return t&&t.__esModule?t:{default:t}}},205:function(t,e,n){var r,i,o,a
function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=function(t){"use strict"
function e(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function n(t,n,r){var i,o=new Promise(function(o,a){e(i=t[n].apply(t,r)).then(o,a)})
return o.request=i,o}function r(t,e,n){n.forEach(function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function i(t,e,r,i){i.forEach(function(i){i in r.prototype&&(t.prototype[i]=function(){return n(this[e],i,arguments)})})}function o(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function a(t,e,r,i){i.forEach(function(i){i in r.prototype&&(t.prototype[i]=function(){return t=this[e],(r=n(t,i,arguments)).then(function(t){if(t)return new u(t,r.request)})
var t,r})})}function s(t){this._index=t}function u(t,e){this._cursor=t,this._request=e}function c(t){this._store=t}function h(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function l(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new h(n)}function f(t){this._db=t}r(s,"_index",["name","keyPath","multiEntry","unique"]),i(s,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),a(s,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(u,"_cursor",["direction","key","primaryKey","value"]),i(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(u.prototype[t]=function(){var n=this,r=arguments
return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,r),e(n._request).then(function(t){if(t)return new u(t,n._request)})})})}),c.prototype.createIndex=function(){return new s(this._store.createIndex.apply(this._store,arguments))},c.prototype.index=function(){return new s(this._store.index.apply(this._store,arguments))},r(c,"_store",["name","keyPath","indexNames","autoIncrement"]),i(c,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),a(c,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(c,"_store",IDBObjectStore,["deleteIndex"]),h.prototype.objectStore=function(){return new c(this._tx.objectStore.apply(this._tx,arguments))},r(h,"_tx",["objectStoreNames","mode"]),o(h,"_tx",IDBTransaction,["abort"]),l.prototype.createObjectStore=function(){return new c(this._db.createObjectStore.apply(this._db,arguments))},r(l,"_db",["name","version","objectStoreNames"]),o(l,"_db",IDBDatabase,["deleteObjectStore","close"]),f.prototype.transaction=function(){return new h(this._db.transaction.apply(this._db,arguments))},r(f,"_db",["name","version","objectStoreNames"]),o(f,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[c,s].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e,n=(e=arguments,Array.prototype.slice.call(e)),r=n[n.length-1],i=this._store||this._index,o=i[t].apply(i,n.slice(0,-1))
o.onsuccess=function(){r(o.result)}})})}),[s,c].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[]
return new Promise(function(i){n.iterateCursor(t,function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)})})})}),t.openDb=function(t,e,r){var i=n(indexedDB,"open",[t,e]),o=i.request
return o&&(o.onupgradeneeded=function(t){r&&r(new l(o.result,t.oldVersion,o.transaction))}),i.then(function(t){return new f(t)})},t.deleteDb=function(t){return n(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})},"object"===s(e)&&void 0!==t?a(e):(i=[e],void 0===(o="function"==typeof(r=a)?r.apply(e,i):r)||(t.exports=o))},206:function(t,e,n){"use strict"
n.r(e)
var r=n(63),i=n.n(r),o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t}).apply(this,arguments)}
function a(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function s(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function u(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,i,o=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}var c=n(64),h=n(205)
n.d(e,"registerInstallations",function(){return J})
var l,f=1e4,p="w:0.2.0",d="FIS_v2",y="https://firebaseinstallations.googleapis.com/v1",m=36e5,v=((l={})["missing-app-config-values"]="Missing App configuration values.",l["create-installation-failed"]="Could not register Firebase Installation.",l["generate-token-failed"]="Could not generate Auth Token.",l["not-registered"]="Firebase Installation is not registered.",l["installation-not-found"]="Firebase Installation not found.",l["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',l["app-offline"]="Could not process request. Application offline.",l["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",l),g=new c.ErrorFactory("installations","Installations",v)
function _(t){return t instanceof c.FirebaseError&&t.code.includes("request-failed")}function b(t){if(!t||!t.options)throw g.create("missing-app-config-values")
var e=t.name,n=t.options,r=n.projectId,i=n.apiKey,o=n.appId
if(!(e&&r&&i&&o))throw g.create("missing-app-config-values")
return{appName:e,projectId:r,apiKey:i,appId:o}}function w(t){var e=t.projectId
return y+"/projects/"+e+"/installations"}function E(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()}
var e}function T(t,e){return a(this,void 0,void 0,function(){var n,r
return s(this,function(i){switch(i.label){case 0:return[4,e.json()]
case 1:return n=i.sent(),r=n.error,[2,g.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}})})}function S(t){var e=t.apiKey
return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function I(t,e){var n=e.refreshToken,r=S(t)
return r.append("Authorization",d+" "+n),r}function C(t){return a(this,void 0,void 0,function(){var e
return s(this,function(n){switch(n.label){case 0:return[4,t()]
case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}})})}function N(t,e){var n=e.fid
return a(this,void 0,void 0,function(){var e,r,i,o,a,u
return s(this,function(s){switch(s.label){case 0:return e=w(t),r=S(t),i={fid:n,authVersion:d,appId:t.appId,sdkVersion:p},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,C(function(){return fetch(e,o)})]
case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3]
case 2:return[2,{fid:(u=s.sent()).fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:E(u.authToken)}]
case 3:return[4,T("Create Installation",a)]
case 4:throw s.sent()}})})}function k(t){return new Promise(function(e){setTimeout(e,t)})}var A=/^[cdef][\w-]{21}$/,D=""
function R(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16
var e=function(t){return function(t){return btoa(String.fromCharCode.apply(String,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(u(arguments[e]))
return t}(t))).replace(/\+/g,"-").replace(/\//g,"_")}(t).substr(0,22)}(t)
return A.test(e)?e:D}catch(t){return D}}var P="firebase-installations-database",O=1,x="firebase-installations-store",M=null
function L(){return M||(M=Object(h.openDb)(P,O,function(t){switch(t.oldVersion){case 0:t.createObjectStore(x)}})),M}function F(t,e){return a(this,void 0,void 0,function(){var n,r,i
return s(this,function(o){switch(o.label){case 0:return n=V(t),[4,L()]
case 1:return r=o.sent(),[4,(i=r.transaction(x,"readwrite")).objectStore(x).put(e,n)]
case 2:return o.sent(),[4,i.complete]
case 3:return o.sent(),[2,e]}})})}function U(t){return a(this,void 0,void 0,function(){var e,n,r
return s(this,function(i){switch(i.label){case 0:return e=V(t),[4,L()]
case 1:return n=i.sent(),[4,(r=n.transaction(x,"readwrite")).objectStore(x).delete(e)]
case 2:return i.sent(),[4,r.complete]
case 3:return i.sent(),[2]}})})}function q(t,e){return a(this,void 0,void 0,function(){var n,r,i,o,a,u
return s(this,function(s){switch(s.label){case 0:return n=V(t),[4,L()]
case 1:return r=s.sent(),i=r.transaction(x,"readwrite"),[4,(o=i.objectStore(x)).get(n)]
case 2:return a=s.sent(),(u=e(a))===a?[2,u]:void 0!==u?[3,4]:[4,o.delete(n)]
case 3:return s.sent(),[3,6]
case 4:return[4,o.put(u,n)]
case 5:s.sent(),s.label=6
case 6:return[4,i.complete]
case 7:return s.sent(),[2,u]}})})}function V(t){return t.appName+"!"+t.appId}function B(t){return a(this,void 0,void 0,function(){var e,n,r
return s(this,function(i){switch(i.label){case 0:return[4,q(t,function(n){var r=function(t){var e=n||{fid:R(),registrationStatus:0}
return Q(e)?{fid:e.fid,registrationStatus:0}:e}(),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(g.create("app-offline"))}
var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=function(t,e){return a(this,void 0,void 0,function(){var n,r
return s(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,N(t,e)]
case 1:return n=i.sent(),[2,F(t,n)]
case 2:return _(r=i.sent())&&409===r.serverCode?[4,U(t)]:[3,4]
case 3:return i.sent(),[3,6]
case 4:return[4,F(t,{fid:e.fid,registrationStatus:0})]
case 5:i.sent(),i.label=6
case 6:throw r
case 7:return[2]}})})}(t,n)
return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:j(t)}:{installationEntry:e}}(t,r)
return e=i.registrationPromise,i.installationEntry})]
case 1:return(n=i.sent()).fid!==D?[3,3]:(r={},[4,e])
case 2:return[2,(r.installationEntry=i.sent(),r)]
case 3:return[2,{installationEntry:n,registrationPromise:e}]}})})}function j(t){return a(this,void 0,void 0,function(){var e
return s(this,function(n){switch(n.label){case 0:return[4,W(t)]
case 1:e=n.sent(),n.label=2
case 2:return 1!==e.registrationStatus?[3,5]:[4,k(100)]
case 3:return n.sent(),[4,W(t)]
case 4:return e=n.sent(),[3,2]
case 5:if(0===e.registrationStatus)throw g.create("create-installation-failed")
return[2,e]}})})}function W(t){return q(t,function(t){if(!t)throw g.create("installation-not-found")
return Q(t)?{fid:t.fid,registrationStatus:0}:t})}function Q(t){return 1===t.registrationStatus&&t.registrationTime+f<Date.now()}function K(t,e){return a(this,void 0,void 0,function(){var n,r,i,o,a
return s(this,function(s){switch(s.label){case 0:return n=function(t,e){var n=e.fid
return w(t)+"/"+n+"/authTokens:generate"}(t,e),r=I(t,e),i={installation:{sdkVersion:p}},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,C(function(){return fetch(n,o)})]
case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3]
case 2:return[2,E(s.sent())]
case 3:return[4,T("Generate Auth Token",a)]
case 4:throw s.sent()}})})}function G(t){return a(this,void 0,void 0,function(){var e,n,r
return s(this,function(i){switch(i.label){case 0:return[4,q(t,function(n){if(!z(n))throw g.create("not-registered")
var r=n.authToken
if(function(t){return 2===t.requestStatus&&!function(t){var e=Date.now()
return e<t.creationTime||t.creationTime+t.expiresIn<e+m}(t)}(r))return n
if(1===r.requestStatus)return e=function(t){return a(this,void 0,void 0,function(){var e,n
return s(this,function(r){switch(r.label){case 0:return[4,H(t)]
case 1:e=r.sent(),r.label=2
case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,k(100)]
case 3:return r.sent(),[4,H(t)]
case 4:return e=r.sent(),[3,2]
case 5:if(0===(n=e.authToken).requestStatus)throw g.create("generate-token-failed")
return[2,n]}})})}(t),n
if(!navigator.onLine)throw g.create("app-offline")
var i=function(t){var e={requestStatus:1,requestTime:Date.now()}
return o({},t,{authToken:e})}(n)
return e=function(t,e){return a(this,void 0,void 0,function(){var n,r,i
return s(this,function(a){switch(a.label){case 0:return a.trys.push([0,3,,8]),[4,K(t,e)]
case 1:return n=a.sent(),i=o({},e,{authToken:n}),[4,F(t,i)]
case 2:return a.sent(),[2,n]
case 3:return!_(r=a.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,U(t)]
case 4:return a.sent(),[3,7]
case 5:return i=o({},e,{authToken:{requestStatus:0}}),[4,F(t,i)]
case 6:a.sent(),a.label=7
case 7:throw r
case 8:return[2]}})})}(t,i),i})]
case 1:return n=i.sent(),e?[4,e]:[3,3]
case 2:return r=i.sent(),[3,4]
case 3:r=n.authToken,i.label=4
case 4:return[2,r.token]}})})}function H(t){return q(t,function(t){if(!z(t))throw g.create("not-registered")
var e
return 1===(e=t.authToken).requestStatus&&e.requestTime+f<Date.now()?o({},t,{authToken:{requestStatus:0}}):t})}function z(t){return void 0!==t&&2===t.registrationStatus}function Y(t){return a(this,void 0,void 0,function(){var e,n,r
return s(this,function(i){switch(i.label){case 0:return[4,B(t)]
case 1:return e=i.sent(),n=e.installationEntry,(r=e.registrationPromise)?[4,r]:[3,3]
case 2:return i.sent(),[3,4]
case 3:if(2!==n.registrationStatus)throw g.create("create-installation-failed")
i.label=4
case 4:return[2]}})})}function X(t,e){return a(this,void 0,void 0,function(){var n,r,i,o
return s(this,function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid
return w(t)+"/"+n}(t,e),r=I(t,e),i={method:"DELETE",headers:r},[4,C(function(){return fetch(n,i)})]
case 1:return(o=a.sent()).ok?[3,3]:[4,T("Delete Installation",o)]
case 2:throw a.sent()
case 3:return[2]}})})}function J(t){t.INTERNAL.registerService("installations",function(t){return b(t),{app:t,getId:function(){return function(t){return a(this,void 0,void 0,function(){var e,n,r,i
return s(this,function(o){switch(o.label){case 0:return[4,B(e=b(t))]
case 1:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)&&i.catch(function(){}),2===r.registrationStatus&&G(e).catch(function(){}),[2,r.fid]}})})}(t)},getToken:function(){return function(t){return a(this,void 0,void 0,function(){var e
return s(this,function(n){switch(n.label){case 0:return[4,Y(e=b(t))]
case 1:return n.sent(),[2,G(e)]}})})}(t)},delete:function(){return function(t){return a(this,void 0,void 0,function(){var e,n
return s(this,function(r){switch(r.label){case 0:return[4,q(e=b(t),function(t){if(!t||0!==t.registrationStatus)return t})]
case 1:if(!(n=r.sent()))return[3,6]
if(1!==n.registrationStatus)return[3,2]
throw g.create("delete-pending-registration")
case 2:if(2!==n.registrationStatus)return[3,6]
if(navigator.onLine)return[3,3]
throw g.create("app-offline")
case 3:return[4,X(e,n)]
case 4:return r.sent(),[4,U(e)]
case 5:r.sent(),r.label=6
case 6:return[2]}})})}(t)}}})}J(i.a)}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[9],{193:function(t,e,n){"use strict"
n.r(e)
var r=n(63),i=n.n(r)
function o(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0
return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function a(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,i,o=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function s(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(a(arguments[e]))
return t}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c="firebasestorage.googleapis.com",h="storageBucket",l=12e4,f=6e4,p=-9007199254740991,d=function(){function t(t,e){this.code_=m(t),this.message_="Firebase Storage: "+e,this.serverResponse_=null,this.name_="FirebaseError"}return t.prototype.codeProp=function(){return this.code},t.prototype.codeEquals=function(t){return m(t)===this.codeProp()},t.prototype.serverResponseProp=function(){return this.serverResponse_},t.prototype.setServerResponseProp=function(t){this.serverResponse_=t},Object.defineProperty(t.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),t}(),y={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"}
function m(t){return"storage/"+t}function v(){return new d(y.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function g(){return new d(y.CANCELED,"User canceled the upload/download.")}function _(){return new d(y.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function b(t,e,n){return new d(y.INVALID_ARGUMENT,"Invalid argument in `"+e+"` at index "+t+": "+n)}function w(){return new d(y.APP_DELETED,"The Firebase app was deleted.")}function E(t,e){return new d(y.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function T(t){throw new d(y.INTERNAL_ERROR,"Internal error: "+t)}var S={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"}
function I(t){switch(t){case S.RAW:case S.BASE64:case S.BASE64URL:case S.DATA_URL:return
default:throw"Expected one of the event types: ["+S.RAW+", "+S.BASE64+", "+S.BASE64URL+", "+S.DATA_URL+"]."}}var C=function(t,e){this.data=t,this.contentType=e||null}
function N(t,e){switch(t){case S.RAW:return new C(k(e))
case S.BASE64:case S.BASE64URL:return new C(A(t,e))
case S.DATA_URL:return new C((n=new R(e)).base64?A(S.BASE64,n.rest):function(t){var e
try{e=decodeURIComponent(t)}catch(t){throw E(S.DATA_URL,"Malformed data URL.")}return k(e)}(n.rest),new R(e).contentType)}var n
throw v()}function k(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n)
r<=127?e.push(r):r<=2047?e.push(192|r>>6,128|63&r):55296==(64512&r)?n<t.length-1&&56320==(64512&t.charCodeAt(n+1))?(r=65536|(1023&r)<<10|1023&t.charCodeAt(++n),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)):e.push(239,191,189):56320==(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function A(t,e){switch(t){case S.BASE64:var n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_")
if(n||r)throw E(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")
break
case S.BASE64URL:var i=-1!==e.indexOf("+"),o=-1!==e.indexOf("/")
if(i||o)throw E(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?")
e=e.replace(/-/g,"+").replace(/_/g,"/")}var a
try{a=atob(e)}catch(e){throw E(t,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u)
return s}var D,R=function(t){this.base64=!1,this.contentType=null
var e=t.match(/^data:([^,]+)?,/)
if(null===e)throw E(S.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>")
var n,r,i=e[1]||null
null!=i&&(this.base64=(r=";base64",(n=i).length>=r.length&&n.substring(n.length-r.length)===r),this.contentType=this.base64?i.substring(0,i.length-";base64".length):i),this.rest=t.substring(t.indexOf(",")+1)},P={STATE_CHANGED:"state_changed"},O={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},x={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"}
function M(t){switch(t){case O.RUNNING:case O.PAUSING:case O.CANCELING:return x.RUNNING
case O.PAUSED:return x.PAUSED
case O.SUCCESS:return x.SUCCESS
case O.CANCELED:return x.CANCELED
case O.ERROR:default:return x.ERROR}}function L(t){return null!=t}function F(t){return void 0!==t}function U(t){return"function"==typeof t}function q(t){return"object"===u(t)}function V(t){return q(t)&&null!==t}function B(t){return"string"==typeof t||t instanceof String}function j(t){return W(t)&&Number.isInteger(t)}function W(t){return"number"==typeof t||t instanceof Number}function Q(t){return K()&&t instanceof Blob}function K(){return"undefined"!=typeof Blob}!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(D||(D={}))
var G=function(){function t(){var t=this
this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=D.NO_ERROR,this.sendPromise_=new Promise(function(e){t.xhr_.addEventListener("abort",function(){t.errorCode_=D.ABORT,e(t)}),t.xhr_.addEventListener("error",function(){t.errorCode_=D.NETWORK_ERROR,e(t)}),t.xhr_.addEventListener("load",function(){e(t)})})}return t.prototype.send=function(t,e,n,r){if(this.sent_)throw T("cannot .send() more than once")
if(this.sent_=!0,this.xhr_.open(e,t,!0),L(r))for(var i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString())
return L(n)?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_},t.prototype.getErrorCode=function(){if(!this.sent_)throw T("cannot .getErrorCode() before sending")
return this.errorCode_},t.prototype.getStatus=function(){if(!this.sent_)throw T("cannot .getStatus() before sending")
try{return this.xhr_.status}catch(t){return-1}},t.prototype.getResponseText=function(){if(!this.sent_)throw T("cannot .getResponseText() before sending")
return this.xhr_.responseText},t.prototype.abort=function(){this.xhr_.abort()},t.prototype.getResponseHeader=function(t){return this.xhr_.getResponseHeader(t)},t.prototype.addUploadProgressListener=function(t){L(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",t)},t.prototype.removeUploadProgressListener=function(t){L(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",t)},t}(),H=function(){function t(){}return t.prototype.createXhrIo=function(){return new G},t}()
var z=function(){function t(t,e){var n=0,r=""
Q(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}return t.prototype.size=function(){return this.size_},t.prototype.type=function(){return this.type_},t.prototype.slice=function(e,n){if(Q(this.data_)){var r=function(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}(this.data_,e,n)
return null===r?null:new t(r)}return new t(new Uint8Array(this.data_.buffer,e,n-e),!0)},t.getBlob=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
if(K()){var r=e.map(function(e){return e instanceof t?e.data_:e})
return new t(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0
if(void 0!==n){for(var r=new n,i=0;i<t.length;i++)r.append(t[i])
return r.getBlob()}if(K())return new Blob(t)
throw Error("This browser doesn't seem to support creating Blobs")}.apply(null,r))}var i=e.map(function(t){return B(t)?N(S.RAW,t).data:t.data_}),o=0
i.forEach(function(t){o+=t.byteLength})
var a=new Uint8Array(o),s=0
return i.forEach(function(t){for(var e=0;e<t.length;e++)a[s++]=t[e]}),new t(a,!0)},t.prototype.uploadData=function(){return this.data_},t}(),Y=function(){function t(t,e){this.bucket=t,this.path_=e}return Object.defineProperty(t.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),t.prototype.fullServerUrl=function(){var t=encodeURIComponent
return"/b/"+t(this.bucket)+"/o/"+t(this.path)},t.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},t.makeFromBucketSpec=function(e){var n,r
try{n=t.makeFromUrl(e)}catch(n){return new t(e,"")}if(""===n.path)return n
throw r=e,new d(y.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")},t.makeFromUrl=function(e){for(var n=null,r=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i"),i=c.replace(/[.]/g,"\\."),o=[{regex:r,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+i+"/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:function(t){t.path_=decodeURIComponent(t.path)}}],a=0;a<o.length;a++){var s=o[a],u=s.regex.exec(e)
if(u){var h=u[s.indices.bucket],l=u[s.indices.path]
l||(l=""),n=new t(h,l),s.postModify(n)
break}}if(null==n)throw function(t){return new d(y.INVALID_URL,"Invalid URL '"+t+"'.")}(e)
return n},t}()
function X(t){var e,n
try{e=JSON.parse(t)}catch(t){return null}return q(n=e)&&!Array.isArray(n)?e:null}function J(t){var e=t.lastIndexOf("/",t.length-2)
return-1===e?t:t.slice(e+1)}function $(t){return"https://"+c+"/v0"+t}function Z(t){var e=encodeURIComponent,n="?"
for(var r in t)t.hasOwnProperty(r)&&(n=n+(e(r)+"=")+e(t[r])+"&")
return n.slice(0,-1)}function tt(t,e){return e}var et=function(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||tt},nt=null
function rt(t,e,n){var r=X(e)
return null===r?null:function(t,e,n){for(var r={type:"file"},i=n.length,o=0;o<i;o++){var a=n[o]
r[a.local]=a.xform(r,e[a.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){var n=t.bucket,r=t.fullPath,i=new Y(n,r)
return e.makeStorageReference(i)}})}(r,t),r}(t,r,n)}function it(t,e){for(var n={},r=e.length,i=0;i<r;i++){var o=e[i]
o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}function ot(t){if(!q(t)||!t)throw"Expected Metadata object."
for(var e in t)if(t.hasOwnProperty(e)){var n=t[e]
if("customMetadata"===e){if(!q(n))throw"Expected object for 'customMetadata' mapping."}else if(V(n))throw"Mapping for '"+e+"' cannot be an object."}}var at="maxResults",st=1e3,ut="pageToken",ct="prefixes",ht="items"
function lt(t){if(!q(t)||!t)throw"Expected ListOptions object."
for(var e in t)if(e===at){if(!j(t[at])||t[at]<=0)throw"Expected maxResults to be a positive number."
if(t[at]>1e3)throw"Expected maxResults to be less than or equal to "+st+"."}else{if(e!==ut)throw"Unknown option: "+e
if(t[ut]&&!B(t[ut]))throw"Expected pageToken to be string."}}var ft=function(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}
function pt(t){if(!t)throw v()}function dt(t,e){return function(n,r){var i=rt(t,r,e)
return pt(null!==i),i}}function yt(t){return function(e,n){var r=function(t,e){var n=X(e)
return null===n?null:function(t,e){var n,r,i,a,s={prefixes:[],items:[],nextPageToken:e.nextPageToken},u=t.bucket()
if(null===u)throw new d(y.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h+"' property when initializing the app?")
if(e[ct])try{for(var c=o(e[ct]),l=c.next();!l.done;l=c.next()){var f=l.value.replace(/\/$/,""),p=t.makeStorageReference(new Y(u,f))
s.prefixes.push(p)}}catch(t){n={error:t}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}if(e[ht])try{for(var m=o(e[ht]),v=m.next();!v.done;v=m.next()){var g=v.value
p=t.makeStorageReference(new Y(u,g.name)),s.items.push(p)}}catch(t){i={error:t}}finally{try{v&&!v.done&&(a=m.return)&&a.call(m)}finally{if(i)throw i.error}}return s}(t,n)}(t,n)
return pt(null!==r),r}}function mt(t){return function(e,n){var r,i,o
return 401===e.getStatus()?r=new d(y.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(o=t.bucket,r=new d(y.QUOTA_EXCEEDED,"Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(i=t.path,r=new d(y.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):r=n,r.setServerResponseProp(n.serverResponseProp()),r}}function vt(t){var e=mt(t)
return function(n,r){var i,o=e(n,r)
return 404===n.getStatus()&&(i=t.path,o=new d(y.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")),o.setServerResponseProp(r.serverResponseProp()),o}}function gt(t,e,n){var r=$(e.fullServerUrl()),i=t.maxOperationRetryTime(),o=new ft(r,"GET",dt(t,n),i)
return o.errorHandler=vt(e),o}function _t(t,e,n){var r=Object.assign({},n)
return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=function(t,e){return e&&e.type()||"application/octet-stream"}(0,e)),r}var bt=function(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}
function wt(t,e){var n=null
try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(t){pt(!1)}return pt(!!n&&-1!==(e||["active"]).indexOf(n)),n}var Et=function(t,e,n){if(U(t)||L(e)||L(n))this.next=t,this.error=e||null,this.complete=n||null
else{var r=t
this.next=r.next||null,this.error=r.error||null,this.complete=r.complete||null}},Tt=function(t,e,n,r,i,o){this.bytesTransferred=t,this.totalBytes=e,this.state=n,this.metadata=r,this.task=i,this.ref=o}
function St(t,e,n){for(var r=e.length,i=e.length,o=0;o<e.length;o++)if(e[o].optional){r=o
break}var a,s,u,c,h,l
if(!(r<=n.length&&n.length<=i))throw a=r,s=i,u=t,c=n.length,a===s?(h=a,l=1===a?"argument":"arguments"):(h="between "+a+" and "+s,l="arguments"),new d(y.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+u+"`: Expected "+h+" "+l+", received "+c+".")
for(o=0;o<n.length;o++)try{e[o].validator(n[o])}catch(e){throw e instanceof Error?b(o,t,e.message):b(o,t,e)}}var It=function(t,e){var n=this
this.validator=function(e){n.optional&&!F(e)||t(e)},this.optional=!!e}
function Ct(t,e){function n(t){if(!B(t))throw"Expected string."}var r,i,o
return t?(i=n,o=t,r=function(t){i(t),o(t)}):r=n,new It(r,e)}function Nt(t){return new It(ot,t)}function kt(){return new It(function(t){if(!(W(t)&&t>=0))throw"Expected a number 0 or greater."})}function At(t,e){return new It(function(e){if(!(null===e||L(e)&&e instanceof Object))throw"Expected an Object."
null!=t&&t(e)},e)}function Dt(t){return new It(function(t){if(null!==t&&!U(t))throw"Expected a Function."},t)}function Rt(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
Promise.resolve().then(function(){return t.apply(void 0,s(e))})}}var Pt=function(){function t(t,e,n,r,i,o){var a=this
void 0===o&&(o=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=t,this.authWrapper_=e,this.location_=n,this.blob_=i,this.metadata_=o,this.mappings_=r,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=O.RUNNING,this.errorHandler_=function(t){a.request_=null,a.chunkMultiplier_=1,t.codeEquals(y.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=t,a.transition_(O.ERROR))},this.metadataErrorHandler_=function(t){a.request_=null,t.codeEquals(y.CANCELED)?a.completeTransitions_():(a.error_=t,a.transition_(O.ERROR))},this.promise_=new Promise(function(t,e){a.resolve_=t,a.reject_=e,a.start_()}),this.promise_.then(null,function(){})}return t.prototype.makeProgressCallback_=function(){var t=this,e=this.transferred_
return function(n){return t.updateProgress_(e+n)}},t.prototype.shouldDoResumable_=function(t){return t.size()>262144},t.prototype.start_=function(){this.state_===O.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},t.prototype.resolveToken_=function(t){var e=this
this.authWrapper_.getAuthToken().then(function(n){switch(e.state_){case O.RUNNING:t(n)
break
case O.CANCELING:e.transition_(O.CANCELED)
break
case O.PAUSING:e.transition_(O.PAUSED)}})},t.prototype.createResumable_=function(){var t=this
this.resolveToken_(function(e){var n=function(t,e,n,r,i){var o=e.bucketOnlyServerUrl(),a=_t(e,r,i),s={name:a.fullPath},u=$(o),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},h=it(a,n),l=t.maxUploadRetryTime(),f=new ft(u,"POST",function(t){var e
wt(t)
try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(t){pt(!1)}return pt(B(e)),e},l)
return f.urlParams=s,f.headers=c,f.body=h,f.errorHandler=mt(e),f}(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),r=t.authWrapper_.makeRequest(n,e)
t.request_=r,r.getPromise().then(function(e){t.request_=null,t.uploadUrl_=e,t.needToFetchStatus_=!1,t.completeTransitions_()},t.errorHandler_)})},t.prototype.fetchStatus_=function(){var t=this,e=this.uploadUrl_
this.resolveToken_(function(n){var r=function(t,e,n,r){var i=t.maxUploadRetryTime(),o=new ft(n,"POST",function(t){var e=wt(t,["active","final"]),n=null
try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(t){pt(!1)}n||pt(!1)
var i=Number(n)
return pt(!isNaN(i)),new bt(i,r.size(),"final"===e)},i)
return o.headers={"X-Goog-Upload-Command":"query"},o.errorHandler=mt(e),o}(t.authWrapper_,t.location_,e,t.blob_),i=t.authWrapper_.makeRequest(r,n)
t.request_=i,i.getPromise().then(function(e){e=e,t.request_=null,t.updateProgress_(e.current),t.needToFetchStatus_=!1,e.finalized&&(t.needToFetchMetadata_=!0),t.completeTransitions_()},t.errorHandler_)})},t.prototype.continueUpload_=function(){var t=this,e=262144*this.chunkMultiplier_,n=new bt(this.transferred_,this.blob_.size()),r=this.uploadUrl_
this.resolveToken_(function(i){var o
try{o=function(t,e,n,r,i,o,a,s){var u=new bt(0,0)
if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw new d(y.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")
var c=u.total-u.current,h=c
i>0&&(h=Math.min(h,i))
var l=u.current,f=l+h,p={"X-Goog-Upload-Command":h===c?"upload, finalize":"upload","X-Goog-Upload-Offset":u.current},m=r.slice(l,f)
if(null===m)throw _()
var v=e.maxUploadRetryTime(),g=new ft(n,"POST",function(t,n){var i,a=wt(t,["active","final"]),s=u.current+h,c=r.size()
return i="final"===a?dt(e,o)(t,n):null,new bt(s,c,"final"===a,i)},v)
return g.headers=p,g.body=m.uploadData(),g.progressCallback=s||null,g.errorHandler=mt(t),g}(t.location_,t.authWrapper_,r,t.blob_,e,t.mappings_,n,t.makeProgressCallback_())}catch(e){return t.error_=e,void t.transition_(O.ERROR)}var a=t.authWrapper_.makeRequest(o,i)
t.request_=a,a.getPromise().then(function(e){t.increaseMultiplier_(),t.request_=null,t.updateProgress_(e.current),e.finalized?(t.metadata_=e.metadata,t.transition_(O.SUCCESS)):t.completeTransitions_()},t.errorHandler_)})},t.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},t.prototype.fetchMetadata_=function(){var t=this
this.resolveToken_(function(e){var n=gt(t.authWrapper_,t.location_,t.mappings_),r=t.authWrapper_.makeRequest(n,e)
t.request_=r,r.getPromise().then(function(e){t.request_=null,t.metadata_=e,t.transition_(O.SUCCESS)},t.metadataErrorHandler_)})},t.prototype.oneShotUpload_=function(){var t=this
this.resolveToken_(function(e){var n=function(t,e,n,r,i){var o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var t="",e=0;e<2;e++)t+=Math.random().toString().slice(2)
return t}()
a["Content-Type"]="multipart/related; boundary="+s
var u=_t(e,r,i),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+it(u,n)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",h="\r\n--"+s+"--",l=z.getBlob(c,r,h)
if(null===l)throw _()
var f={name:u.fullPath},p=$(o),d=t.maxUploadRetryTime(),y=new ft(p,"POST",dt(t,n),d)
return y.urlParams=f,y.headers=a,y.body=l.uploadData(),y.errorHandler=mt(e),y}(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),r=t.authWrapper_.makeRequest(n,e)
t.request_=r,r.getPromise().then(function(e){t.request_=null,t.metadata_=e,t.updateProgress_(t.blob_.size()),t.transition_(O.SUCCESS)},t.errorHandler_)})},t.prototype.updateProgress_=function(t){var e=this.transferred_
this.transferred_=t,this.transferred_!==e&&this.notifyObservers_()},t.prototype.transition_=function(t){if(this.state_!==t)switch(t){case O.CANCELING:case O.PAUSING:this.state_=t,null!==this.request_&&this.request_.cancel()
break
case O.RUNNING:var e=this.state_===O.PAUSED
this.state_=t,e&&(this.notifyObservers_(),this.start_())
break
case O.PAUSED:this.state_=t,this.notifyObservers_()
break
case O.CANCELED:this.error_=g(),this.state_=t,this.notifyObservers_()
break
case O.ERROR:case O.SUCCESS:this.state_=t,this.notifyObservers_()}},t.prototype.completeTransitions_=function(){switch(this.state_){case O.PAUSING:this.transition_(O.PAUSED)
break
case O.CANCELING:this.transition_(O.CANCELED)
break
case O.RUNNING:this.start_()}},Object.defineProperty(t.prototype,"snapshot",{get:function(){var t=M(this.state_)
return new Tt(this.transferred_,this.blob_.size(),t,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),t.prototype.on=function(t,e,n,r){var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",o=Dt(!0).validator,a=At(null,!0).validator
function s(t){try{return void o(t)}catch(t){}try{if(a(t),!(F(t.next)||F(t.error)||F(t.complete)))throw""
return}catch(t){throw i}}St("on",[Ct(function(){if(t!==P.STATE_CHANGED)throw"Expected one of the event types: ["+P.STATE_CHANGED+"]."}),At(s,!0),Dt(!0),Dt(!0)],arguments)
var u=this
function c(t){return function(e,n,i){null!==t&&St("on",t,arguments)
var o=new Et(e,n,r)
return u.addObserver_(o),function(){u.removeObserver_(o)}}}var h=[At(function(t){if(null===t)throw i
s(t)}),Dt(!0),Dt(!0)]
return F(e)||F(n)||F(r)?c(null)(e,n,r):c(h)},t.prototype.then=function(t,e){return this.promise_.then(t,e)},t.prototype.catch=function(t){return this.then(null,t)},t.prototype.addObserver_=function(t){this.observers_.push(t),this.notifyObserver_(t)},t.prototype.removeObserver_=function(t){var e=this.observers_.indexOf(t);-1!==e&&this.observers_.splice(e,1)},t.prototype.notifyObservers_=function(){var t=this
this.finishPromise_(),this.observers_.slice().forEach(function(e){t.notifyObserver_(e)})},t.prototype.finishPromise_=function(){if(null!==this.resolve_){var t=!0
switch(M(this.state_)){case x.SUCCESS:Rt(this.resolve_.bind(null,this.snapshot))()
break
case x.CANCELED:case x.ERROR:Rt(this.reject_.bind(null,this.error_))()
break
default:t=!1}t&&(this.resolve_=null,this.reject_=null)}},t.prototype.notifyObserver_=function(t){switch(M(this.state_)){case x.RUNNING:case x.PAUSED:t.next&&Rt(t.next.bind(t,this.snapshot))()
break
case x.SUCCESS:t.complete&&Rt(t.complete.bind(t))()
break
case x.CANCELED:case x.ERROR:t.error&&Rt(t.error.bind(t,this.error_))()
break
default:t.error&&Rt(t.error.bind(t,this.error_))()}},t.prototype.resume=function(){St("resume",[],arguments)
var t=this.state_===O.PAUSED||this.state_===O.PAUSING
return t&&this.transition_(O.RUNNING),t},t.prototype.pause=function(){St("pause",[],arguments)
var t=this.state_===O.RUNNING
return t&&this.transition_(O.PAUSING),t},t.prototype.cancel=function(){St("cancel",[],arguments)
var t=this.state_===O.RUNNING||this.state_===O.PAUSING
return t&&this.transition_(O.CANCELING),t},t}(),Ot=function(){function t(t,e){this.authWrapper=t,this.location=e instanceof Y?e:Y.makeFromUrl(e)}return t.prototype.toString=function(){return St("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},t.prototype.newRef=function(e,n){return new t(e,n)},t.prototype.mappings=function(){return function(){if(nt)return nt
var t=[]
t.push(new et("bucket")),t.push(new et("generation")),t.push(new et("metageneration")),t.push(new et("name","fullPath",!0))
var e=new et("name")
e.xform=function(t,e){return function(t){return!B(t)||t.length<2?t:J(t)}(e)},t.push(e)
var n=new et("size")
return n.xform=function(t,e){return L(e)?Number(e):e},t.push(n),t.push(new et("timeCreated")),t.push(new et("updated")),t.push(new et("md5Hash",null,!0)),t.push(new et("cacheControl",null,!0)),t.push(new et("contentDisposition",null,!0)),t.push(new et("contentEncoding",null,!0)),t.push(new et("contentLanguage",null,!0)),t.push(new et("contentType",null,!0)),t.push(new et("metadata","customMetadata",!0)),nt=t}()},t.prototype.child=function(t){St("child",[Ct()],arguments)
var e=function(t,e){var n=e.split("/").filter(function(t){return t.length>0}).join("/")
return 0===t.length?n:t+"/"+n}(this.location.path,t),n=new Y(this.location.bucket,e)
return this.newRef(this.authWrapper,n)},Object.defineProperty(t.prototype,"parent",{get:function(){var t=function(t){if(0===t.length)return null
var e=t.lastIndexOf("/")
return-1===e?"":t.slice(0,e)}(this.location.path)
if(null===t)return null
var e=new Y(this.location.bucket,t)
return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){var t=new Y(this.location.bucket,"")
return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return J(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,e){return void 0===e&&(e=null),St("put",[new It(function(t){if(!(t instanceof Uint8Array||t instanceof ArrayBuffer||K()&&t instanceof Blob))throw"Expected Blob or File."}),Nt(!0)],arguments),this.throwIfRoot_("put"),new Pt(this,this.authWrapper,this.location,this.mappings(),new z(t),e)},t.prototype.putString=function(t,e,n){void 0===e&&(e=S.RAW),St("putString",[Ct(),Ct(I,!0),Nt(!0)],arguments),this.throwIfRoot_("putString")
var r=N(e,t),i=Object.assign({},n)
return!L(i.contentType)&&L(r.contentType)&&(i.contentType=r.contentType),new Pt(this,this.authWrapper,this.location,this.mappings(),new z(r.data,!0),i)},t.prototype.delete=function(){var t=this
return St("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then(function(e){var n=function(t,e){var n=$(e.fullServerUrl()),r=t.maxOperationRetryTime(),i=new ft(n,"DELETE",function(t,e){},r)
return i.successCodes=[200,204],i.errorHandler=vt(e),i}(t.authWrapper,t.location)
return t.authWrapper.makeRequest(n,e).getPromise()})},t.prototype.listAll=function(){St("listAll",[],arguments)
var t={prefixes:[],items:[]}
return this.listAllHelper(t).then(function(){return t})},t.prototype.listAllHelper=function(t,e){return n=this,void 0,i=function(){var n,r,i,o
return function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,function(a){switch(a.label){case 0:return i={pageToken:e},[4,this.list(i)]
case 1:return o=a.sent(),(n=t.prefixes).push.apply(n,s(o.prefixes)),(r=t.items).push.apply(r,s(o.items)),null==o.nextPageToken?[3,3]:[4,this.listAllHelper(t,o.nextPageToken)]
case 2:a.sent(),a.label=3
case 3:return[2]}})},new((r=void 0)||(r=Promise))(function(t,e){function o(t){try{s(i.next(t))}catch(t){e(t)}}function a(t){try{s(i.throw(t))}catch(t){e(t)}}function s(e){e.done?t(e.value):new r(function(t){t(e.value)}).then(o,a)}s((i=i.apply(n,[])).next())})
var n,r,i},t.prototype.list=function(t){St("list",[(!0,new It(lt,!0))],arguments)
var e=this
return this.authWrapper.getAuthToken().then(function(n){var r=t||{},i=function(t,e,n,r,i){var o={}
e.isRoot?o.prefix="":o.prefix=e.path+"/","/".length>0&&(o.delimiter="/"),r&&(o.pageToken=r),i&&(o.maxResults=i)
var a=$(e.bucketOnlyServerUrl()),s=t.maxOperationRetryTime(),u=new ft(a,"GET",yt(t),s)
return u.urlParams=o,u.errorHandler=mt(e),u}(e.authWrapper,e.location,0,r.pageToken,r.maxResults)
return e.authWrapper.makeRequest(i,n).getPromise()})},t.prototype.getMetadata=function(){var t=this
return St("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then(function(e){var n=gt(t.authWrapper,t.location,t.mappings())
return t.authWrapper.makeRequest(n,e).getPromise()})},t.prototype.updateMetadata=function(t){var e=this
return St("updateMetadata",[Nt()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then(function(n){var r=function(t,e,n,r){var i=$(e.fullServerUrl()),o=it(n,r),a=t.maxOperationRetryTime(),s=new ft(i,"PATCH",dt(t,r),a)
return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=o,s.errorHandler=vt(e),s}(e.authWrapper,e.location,t,e.mappings())
return e.authWrapper.makeRequest(r,n).getPromise()})},t.prototype.getDownloadURL=function(){var t=this
return St("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then(function(e){var n=function(t,e,n){var r=$(e.fullServerUrl()),i=t.maxOperationRetryTime(),o=new ft(r,"GET",function(t,e){return function(n,r){var i=rt(t,r,e)
return pt(null!==i),function(t,e){var n=X(e)
if(null===n)return null
if(!B(n.downloadTokens))return null
var r=n.downloadTokens
if(0===r.length)return null
var i=encodeURIComponent
return r.split(",").map(function(e){var n=t.bucket,r=t.fullPath
return $("/b/"+i(n)+"/o/"+i(r))+Z({alt:"media",token:e})})[0]}(i,r)}}(t,n),i)
return o.errorHandler=vt(e),o}(t.authWrapper,t.location,t.mappings())
return t.authWrapper.makeRequest(n,e).getPromise().then(function(t){if(null===t)throw new d(y.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")
return t})})},t.prototype.throwIfRoot_=function(t){if(""===this.location.path)throw function(t){return new d(y.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)},t}(),xt=function(){function t(t){this.promise_=Promise.reject(t)}return t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){void 0===t&&(t=!1)},t}(),Mt=function(){function t(){this.map=new Map,this.id=p}return t.prototype.addRequest=function(t){var e=this,n=this.id
this.id++,this.map.set(n,t),t.getPromise().then(function(){return e.map.delete(n)},function(){return e.map.delete(n)})},t.prototype.clear=function(){this.map.forEach(function(t){t&&t.cancel(!0)}),this.map.clear()},t}(),Lt=function(){function t(e,n,r,i,o){if(this.bucket_=null,this.deleted_=!1,this.app_=e,null!==this.app_){var a=this.app_.options
L(a)&&(this.bucket_=t.extractBucket_(a))}this.storageRefMaker_=n,this.requestMaker_=r,this.pool_=o,this.service_=i,this.maxOperationRetryTime_=l,this.maxUploadRetryTime_=f,this.requestMap_=new Mt}return t.extractBucket_=function(t){var e=t[h]||null
return null==e?null:Y.makeFromBucketSpec(e).bucket},t.prototype.getAuthToken=function(){return null!==this.app_&&L(this.app_.INTERNAL)&&L(this.app_.INTERNAL.getToken)?this.app_.INTERNAL.getToken().then(function(t){return null!==t?t.accessToken:null},function(){return null}):Promise.resolve(null)},t.prototype.bucket=function(){if(this.deleted_)throw w()
return this.bucket_},t.prototype.service=function(){return this.service_},t.prototype.makeStorageReference=function(t){return this.storageRefMaker_(this,t)},t.prototype.makeRequest=function(t,e){if(this.deleted_)return new xt(w())
var n=this.requestMaker_(t,e,this.pool_)
return this.requestMap_.addRequest(n),n},t.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},t.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},t.prototype.setMaxUploadRetryTime=function(t){this.maxUploadRetryTime_=t},t.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},t.prototype.setMaxOperationRetryTime=function(t){this.maxOperationRetryTime_=t},t}(),Ft=function(){function t(t,e,n,r,i,o,a,s,u,c,h){var l=this
this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=h,this.promise_=new Promise(function(t,e){l.resolve_=t,l.reject_=e,l.start_()})}return t.prototype.start_=function(){var t=this
function e(e,n){var r,i=t.resolve_,o=t.reject_,a=n.xhr
if(n.wasSuccessCode)try{var s=t.callback_(a,a.getResponseText())
F(s)?i(s):i()}catch(t){o(t)}else null!==a?((r=v()).setServerResponseProp(a.getResponseText()),t.errorCallback_?o(t.errorCallback_(a,r)):o(r)):n.canceled?o(r=t.appDelete_?w():g()):o(r=new d(y.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}this.canceled_?e(0,new Ut(!1,null,!0)):this.backoffId_=function(t,e,n){var r=1,i=null,o=!1,a=0
function u(){return 2===a}var c=!1
function h(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
c||(c=!0,e.apply(null,t))}function l(e){i=setTimeout(function(){i=null,t(f,u())},e)}function f(t){for(var e,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i]
c||(t?h.call.apply(h,s([null,t],n)):u()||o?h.call.apply(h,s([null,t],n)):(r<64&&(r*=2),1===a?(a=2,e=0):e=1e3*(r+Math.random()),l(e)))}var p=!1
function d(t){p||(p=!0,c||(null!==i?(t||(a=2),clearTimeout(i),l(0)):t||(a=1)))}return l(0),setTimeout(function(){o=!0,d(!0)},n),d}(function(e,n){if(n)e(!1,new Ut(!1,null,!0))
else{var r=t.pool_.createXhrIo()
t.pendingXhr_=r,null!==t.progressCallback_&&r.addUploadProgressListener(i),r.send(t.url_,t.method_,t.body_,t.headers_).then(function(n){null!==t.progressCallback_&&n.removeUploadProgressListener(i),t.pendingXhr_=null
var r=(n=n).getErrorCode()===D.NO_ERROR,o=n.getStatus()
if(r&&!t.isRetryStatusCode_(o)){var a=-1!==t.successCodes_.indexOf(o)
e(!0,new Ut(a,n))}else{var s=n.getErrorCode()===D.ABORT
e(!1,new Ut(!1,null,s))}})}function i(e){var n=e.loaded,r=e.lengthComputable?e.total:-1
null!==t.progressCallback_&&t.progressCallback_(n,r)}},e,this.timeout_)},t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},t.prototype.isRetryStatusCode_=function(t){var e=t>=500&&t<600,n=-1!==[408,429].indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t)
return e||n||r},t}(),Ut=function(t,e,n){this.wasSuccessCode=t,this.xhr=e,this.canceled=!!n}
function qt(t,e,n){var r=Z(t.urlParams),o=t.url+r,a=Object.assign({},t.headers)
return function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(a,e),function(t){var e=void 0!==i.a?i.a.SDK_VERSION:"AppManager"
t["X-Firebase-Storage-Version"]="webjs/"+e}(a),new Ft(o,t.method,a,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,n)}var Vt,Bt,jt=function(){function t(t,e,n){if(this.bucket_=null,this.authWrapper_=new Lt(t,function(t,e){return new Ot(t,e)},qt,this,e),this.app_=t,null!=n)this.bucket_=Y.makeFromBucketSpec(n)
else{var r=this.authWrapper_.bucket()
null!=r&&(this.bucket_=new Y(r,""))}this.internals_=new Wt(this)}return t.prototype.ref=function(t){if(St("ref",[Ct(function(t){if("string"!=typeof t)throw"Path is not a string."
if(/^[A-Za-z]+:\/\//.test(t))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.")
var e=new Ot(this.authWrapper_,this.bucket_)
return null!=t?e.child(t):e},t.prototype.refFromURL=function(t){return St("refFromURL",[Ct(function(t){if("string"!=typeof t)throw"Path is not a string."
if(!/^[A-Za-z]+:\/\//.test(t))throw"Expected full URL but got a child path, use ref instead."
try{Y.makeFromUrl(t)}catch(t){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new Ot(this.authWrapper_,t)},Object.defineProperty(t.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxUploadRetryTime=function(t){St("setMaxUploadRetryTime",[kt()],arguments),this.authWrapper_.setMaxUploadRetryTime(t)},t.prototype.setMaxOperationRetryTime=function(t){St("setMaxOperationRetryTime",[kt()],arguments),this.authWrapper_.setMaxOperationRetryTime(t)},Object.defineProperty(t.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),t}(),Wt=function(){function t(t){this.service_=t}return t.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},t}()
Vt=i.a,Bt={TaskState:x,TaskEvent:P,StringFormat:S,Storage:jt,Reference:Ot},Vt.INTERNAL.registerService("storage",function(t,e,n){return new jt(t,new H,n)},Bt,void 0,!0)}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[8],{194:function(t,e,n){"use strict"
n.r(e)
var r=n(63),i=n.n(r),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}
function a(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t}).apply(this,arguments)}
function u(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function c(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function h(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,i,o=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}var l,f=n(64)
function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var d,y,m=((l={})["only-available-in-window"]="This method is available in a Window context.",l["only-available-in-sw"]="This method is available in a service worker context.",l["should-be-overriden"]="This method should be overriden by extended classes.",l["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",l["permission-default"]="The required permissions were not granted and dismissed instead.",l["permission-blocked"]="The required permissions were not granted and blocked instead.",l["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",l["notifications-blocked"]="Notifications have been blocked.",l["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",l["sw-registration-expected"]="A service worker registration was the expected input.",l["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",l["invalid-saved-token"]="Unable to access details of the saved token.",l["sw-reg-redundant"]="The service worker being used for push was made redundant.",l["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",l["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",l["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",l["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",l["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",l["token-update-no-token"]="FCM returned no token when updating the user to push.",l["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",l["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",l["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",l["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",l["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",l["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",l["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",l["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",l["failed-to-delete-token"]="Unable to delete the currently saved token.",l["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",l["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",l["bad-scope"]="The service worker scope must be a string with at least one character.",l["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",l["bad-subscription"]="The subscription must be a valid PushSubscription.",l["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",l["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",l["failed-delete-vapid-key"]="The VAPID key could not be deleted.",l["invalid-public-vapid-key"]="The public VAPID key must be a string.",l["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",l["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",l),v=new f.ErrorFactory("messaging","Messaging",m),g=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),_="https://fcm.googleapis.com"
function b(t,e){if(null==t||null==e)return!1
if(t===e)return!0
if(t.byteLength!==e.byteLength)return!1
for(var n=new DataView(t),r=new DataView(e),i=0;i<t.byteLength;i++)if(n.getUint8(i)!==r.getUint8(i))return!1
return!0}function w(t){return function(t){var e=new Uint8Array(t)
return btoa(String.fromCharCode.apply(String,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(h(arguments[e]))
return t}(e)))}(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}!function(t){t.TYPE_OF_MSG="firebase-messaging-msg-type",t.DATA="firebase-messaging-msg-data"}(d||(d={})),function(t){t.PUSH_MSG_RECEIVED="push-msg-received",t.NOTIFICATION_CLICKED="notification-clicked"}(y||(y={}))
var E=function(){function t(){}return t.prototype.getToken=function(t,e,n){return u(this,void 0,void 0,function(){var r,i,o,a,s,u,h,l,f
return c(this,function(c){switch(c.label){case 0:r=w(e.getKey("p256dh")),i=w(e.getKey("auth")),o="authorized_entity="+t+"&endpoint="+e.endpoint+"&encryption_key="+r+"&encryption_auth="+i,b(n.buffer,g.buffer)||(a=w(n),o+="&application_pub_key="+a),(s=new Headers).append("Content-Type","application/x-www-form-urlencoded"),u={method:"POST",headers:s,body:o},c.label=1
case 1:return c.trys.push([1,4,,5]),[4,fetch(_+"/fcm/connect/subscribe",u)]
case 2:return[4,c.sent().json()]
case 3:return h=c.sent(),[3,5]
case 4:throw l=c.sent(),v.create("token-subscribe-failed",{errorInfo:l})
case 5:if(h.error)throw f=h.error.message,v.create("token-subscribe-failed",{errorInfo:f})
if(!h.token)throw v.create("token-subscribe-no-token")
if(!h.pushSet)throw v.create("token-subscribe-no-push-set")
return[2,{token:h.token,pushSet:h.pushSet}]}})})},t.prototype.updateToken=function(t,e,n,r,i){return u(this,void 0,void 0,function(){var o,a,s,u,h,l,f,p,d
return c(this,function(c){switch(c.label){case 0:o=w(r.getKey("p256dh")),a=w(r.getKey("auth")),s="push_set="+n+"&token="+e+"&authorized_entity="+t+"&endpoint="+r.endpoint+"&encryption_key="+o+"&encryption_auth="+a,b(i.buffer,g.buffer)||(u=w(i),s+="&application_pub_key="+u),(h=new Headers).append("Content-Type","application/x-www-form-urlencoded"),l={method:"POST",headers:h,body:s},c.label=1
case 1:return c.trys.push([1,4,,5]),[4,fetch(_+"/fcm/connect/subscribe",l)]
case 2:return[4,c.sent().json()]
case 3:return f=c.sent(),[3,5]
case 4:throw p=c.sent(),v.create("token-update-failed",{errorInfo:p})
case 5:if(f.error)throw d=f.error.message,v.create("token-update-failed",{errorInfo:d})
if(!f.token)throw v.create("token-update-no-token")
return[2,f.token]}})})},t.prototype.deleteToken=function(t,e,n){return u(this,void 0,void 0,function(){var r,i,o,a,s,u
return c(this,function(c){switch(c.label){case 0:r="authorized_entity="+t+"&token="+e+"&pushSet="+n,(i=new Headers).append("Content-Type","application/x-www-form-urlencoded"),o={method:"POST",headers:i,body:r},c.label=1
case 1:return c.trys.push([1,4,,5]),[4,fetch(_+"/fcm/connect/unsubscribe",o)]
case 2:return[4,c.sent().json()]
case 3:if((a=c.sent()).error)throw s=a.error.message,v.create("token-unsubscribe-failed",{errorInfo:s})
return[3,5]
case 4:throw u=c.sent(),v.create("token-unsubscribe-failed",{errorInfo:u})
case 5:return[2]}})})},t}()
function T(t){for(var e=(t+"=".repeat((4-t.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(e),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i)
return r}var S="undefined",I="fcm_token_object_Store"
var C=function(){function t(){this.dbPromise=null}return t.prototype.get=function(t){return this.createTransaction(function(e){return e.get(t)})},t.prototype.getIndex=function(t,e){return this.createTransaction(function(n){return n.index(t).get(e)})},t.prototype.put=function(t){return this.createTransaction(function(e){return e.put(t)},"readwrite")},t.prototype.delete=function(t){return this.createTransaction(function(e){return e.delete(t)},"readwrite")},t.prototype.closeDatabase=function(){return u(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2]
case 1:t.sent().close(),this.dbPromise=null,t.label=2
case 2:return[2]}})})},t.prototype.createTransaction=function(t,e){return void 0===e&&(e="readonly"),u(this,void 0,void 0,function(){var n,r,i,o
return c(this,function(a){switch(a.label){case 0:return[4,this.getDb()]
case 1:return n=a.sent(),r=n.transaction(this.objectStoreName,e),i=r.objectStore(this.objectStoreName),[4,N(t(i))]
case 2:return o=a.sent(),[2,new Promise(function(t,e){r.oncomplete=function(){t(o)},r.onerror=function(){e(r.error)}})]}})})},t.prototype.getDb=function(){var t=this
return this.dbPromise||(this.dbPromise=new Promise(function(e,n){var r=indexedDB.open(t.dbName,t.dbVersion)
r.onsuccess=function(){e(r.result)},r.onerror=function(){t.dbPromise=null,n(r.error)},r.onupgradeneeded=function(e){return t.onDbUpgrade(r,e)}})),this.dbPromise},t}()
function N(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}var k=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.dbName="fcm_token_details_db",e.dbVersion=3,e.objectStoreName="fcm_token_object_Store",e}return a(e,t),e.prototype.onDbUpgrade=function(t,e){var n=t.result
switch(e.oldVersion){case 0:(r=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0})
case 1:(function(){var t=indexedDB.open(S)
t.onerror=function(t){},t.onsuccess=function(e){!function(t){if(t.objectStoreNames.contains(I)){var e=t.transaction(I).objectStore(I),n=new E,r=e.openCursor()
r.onerror=function(t){console.warn("Unable to cleanup old IDB.",t)},r.onsuccess=function(){var e=r.result
if(e){var i=e.value
n.deleteToken(i.fcmSenderId,i.fcmToken,i.fcmPushSet),e.continue()}else t.close(),indexedDB.deleteDatabase(S)}}}(t.result)}})()
case 2:var r,i=(r=t.transaction.objectStore(this.objectStoreName)).openCursor()
i.onsuccess=function(){var t=i.result
if(t){var e=t.value,n=s({},e)
e.createTime||(n.createTime=Date.now()),"string"==typeof e.vapidKey&&(n.vapidKey=T(e.vapidKey)),"string"==typeof e.auth&&(n.auth=T(e.auth).buffer),"string"==typeof e.auth&&(n.p256dh=T(e.p256dh).buffer),t.update(n),t.continue()}}}},e.prototype.getTokenDetailsFromToken=function(t){return u(this,void 0,void 0,function(){return c(this,function(e){if(!t)throw v.create("bad-token")
return A({fcmToken:t}),[2,this.getIndex("fcmToken",t)]})})},e.prototype.getTokenDetailsFromSWScope=function(t){return u(this,void 0,void 0,function(){return c(this,function(e){if(!t)throw v.create("bad-scope")
return A({swScope:t}),[2,this.get(t)]})})},e.prototype.saveTokenDetails=function(t){return u(this,void 0,void 0,function(){return c(this,function(e){if(!t.swScope)throw v.create("bad-scope")
if(!t.vapidKey)throw v.create("bad-vapid-key")
if(!t.endpoint||!t.auth||!t.p256dh)throw v.create("bad-subscription")
if(!t.fcmSenderId)throw v.create("bad-sender-id")
if(!t.fcmToken)throw v.create("bad-token")
if(!t.fcmPushSet)throw v.create("bad-push-set")
return A(t),[2,this.put(t)]})})},e.prototype.deleteToken=function(t){return u(this,void 0,void 0,function(){var e
return c(this,function(n){switch(n.label){case 0:return"string"!=typeof t||0===t.length?[2,Promise.reject(v.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(t)]
case 1:if(!(e=n.sent()))throw v.create("delete-token-not-found")
return[4,this.delete(e.swScope)]
case 2:return n.sent(),[2,e]}})})},e}(C)
function A(t){if(t.fcmToken&&("string"!=typeof t.fcmToken||0===t.fcmToken.length))throw v.create("bad-token")
if(t.swScope&&("string"!=typeof t.swScope||0===t.swScope.length))throw v.create("bad-scope")
if(t.vapidKey&&(!(t.vapidKey instanceof Uint8Array)||65!==t.vapidKey.length))throw v.create("bad-vapid-key")
if(t.endpoint&&("string"!=typeof t.endpoint||0===t.endpoint.length))throw v.create("bad-subscription")
if(t.auth&&!(t.auth instanceof ArrayBuffer))throw v.create("bad-subscription")
if(t.p256dh&&!(t.p256dh instanceof ArrayBuffer))throw v.create("bad-subscription")
if(t.fcmSenderId&&("string"!=typeof t.fcmSenderId||0===t.fcmSenderId.length))throw v.create("bad-sender-id")
if(t.fcmPushSet&&("string"!=typeof t.fcmPushSet||0===t.fcmPushSet.length))throw v.create("bad-push-set")}var D=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.dbName="fcm_vapid_details_db",e.dbVersion=1,e.objectStoreName="fcm_vapid_object_Store",e}return a(e,t),e.prototype.onDbUpgrade=function(t){t.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},e.prototype.getVapidFromSWScope=function(t){return u(this,void 0,void 0,function(){var e
return c(this,function(n){switch(n.label){case 0:if("string"!=typeof t||0===t.length)throw v.create("bad-scope")
return[4,this.get(t)]
case 1:return[2,(e=n.sent())?e.vapidKey:void 0]}})})},e.prototype.saveVapidDetails=function(t,e){return u(this,void 0,void 0,function(){var n
return c(this,function(r){if("string"!=typeof t||0===t.length)throw v.create("bad-scope")
if(null===e||65!==e.length)throw v.create("bad-vapid-key")
return n={swScope:t,vapidKey:e},[2,this.put(n)]})})},e.prototype.deleteVapidDetails=function(t){return u(this,void 0,void 0,function(){var e
return c(this,function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(t)]
case 1:if(!(e=n.sent()))throw v.create("delete-scope-not-found")
return[4,this.delete(t)]
case 2:return n.sent(),[2,e]}})})},e}(C),R="messagingSenderId",P=function(){function t(t){var e=this
if(!t.options[R]||"string"!=typeof t.options[R])throw v.create("bad-sender-id")
this.messagingSenderId=t.options[R],this.tokenDetailsModel=new k,this.vapidDetailsModel=new D,this.iidModel=new E,this.app=t,this.INTERNAL={delete:function(){return e.delete()}}}return t.prototype.getToken=function(){return u(this,void 0,void 0,function(){var t,e,n,r,i
return c(this,function(o){switch(o.label){case 0:if("denied"===(t=this.getNotificationPermission_()))throw v.create("notifications-blocked")
return"granted"!==t?[2,null]:[4,this.getSWRegistration_()]
case 1:return e=o.sent(),[4,this.getPublicVapidKey_()]
case 2:return n=o.sent(),[4,this.getPushSubscription(e,n)]
case 3:return r=o.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(e.scope)]
case 4:return(i=o.sent())?[2,this.manageExistingToken(e,r,n,i)]:[2,this.getNewToken(e,r,n)]}})})},t.prototype.manageExistingToken=function(t,e,n,r){return u(this,void 0,void 0,function(){return c(this,function(i){switch(i.label){case 0:return function(t,e,n){if(!n.vapidKey||!b(e.buffer,n.vapidKey.buffer))return!1
var r=t.endpoint===n.endpoint,i=b(t.getKey("auth"),n.auth),o=b(t.getKey("p256dh"),n.p256dh)
return r&&i&&o}(e,n,r)?Date.now()<r.createTime+6048e5?[2,r.fcmToken]:[2,this.updateToken(t,e,n,r)]:[4,this.deleteTokenFromDB(r.fcmToken)]
case 1:return i.sent(),[2,this.getNewToken(t,e,n)]}})})},t.prototype.updateToken=function(t,e,n,r){return u(this,void 0,void 0,function(){var i,o,a
return c(this,function(s){switch(s.label){case 0:return s.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,r.fcmToken,r.fcmPushSet,e,n)]
case 1:return i=s.sent(),o={swScope:t.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:i,fcmPushSet:r.fcmPushSet,createTime:Date.now(),endpoint:e.endpoint,auth:e.getKey("auth"),p256dh:e.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)]
case 2:return s.sent(),[4,this.vapidDetailsModel.saveVapidDetails(t.scope,n)]
case 3:return s.sent(),[2,i]
case 4:return a=s.sent(),[4,this.deleteToken(r.fcmToken)]
case 5:throw s.sent(),a
case 6:return[2]}})})},t.prototype.getNewToken=function(t,e,n){return u(this,void 0,void 0,function(){var r,i
return c(this,function(o){switch(o.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,e,n)]
case 1:return r=o.sent(),i={swScope:t.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:r.token,fcmPushSet:r.pushSet,createTime:Date.now(),endpoint:e.endpoint,auth:e.getKey("auth"),p256dh:e.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)]
case 2:return o.sent(),[4,this.vapidDetailsModel.saveVapidDetails(t.scope,n)]
case 3:return o.sent(),[2,r.token]}})})},t.prototype.deleteToken=function(t){return u(this,void 0,void 0,function(){var e,n
return c(this,function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(t)]
case 1:return r.sent(),[4,this.getSWRegistration_()]
case 2:return(e=r.sent())?[4,e.pushManager.getSubscription()]:[3,4]
case 3:if(n=r.sent())return[2,n.unsubscribe()]
r.label=4
case 4:return[2,!0]}})})},t.prototype.deleteTokenFromDB=function(t){return u(this,void 0,void 0,function(){var e
return c(this,function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(t)]
case 1:return e=n.sent(),[4,this.iidModel.deleteToken(e.fcmSenderId,e.fcmToken,e.fcmPushSet)]
case 2:return n.sent(),[2]}})})},t.prototype.getPushSubscription=function(t,e){return t.pushManager.getSubscription().then(function(n){return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e})})},t.prototype.requestPermission=function(){throw v.create("only-available-in-window")},t.prototype.useServiceWorker=function(t){throw v.create("only-available-in-window")},t.prototype.usePublicVapidKey=function(t){throw v.create("only-available-in-window")},t.prototype.onMessage=function(t,e,n){throw v.create("only-available-in-window")},t.prototype.onTokenRefresh=function(t,e,n){throw v.create("only-available-in-window")},t.prototype.setBackgroundMessageHandler=function(t){throw v.create("only-available-in-sw")},t.prototype.delete=function(){return u(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])]
case 1:return t.sent(),[2]}})})},t.prototype.getNotificationPermission_=function(){return Notification.permission},t.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},t.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},t.prototype.getIidModel=function(){return this.iidModel},t}(),O=function(t){function e(e){var n=t.call(this,e)||this
return n.bgMessageHandler=null,self.addEventListener("push",function(t){n.onPush(t)}),self.addEventListener("pushsubscriptionchange",function(t){n.onSubChange(t)}),self.addEventListener("notificationclick",function(t){n.onNotificationClick(t)}),n}return a(e,t),e.prototype.onPush=function(t){t.waitUntil(this.onPush_(t))},e.prototype.onSubChange=function(t){t.waitUntil(this.onSubChange_(t))},e.prototype.onNotificationClick=function(t){t.waitUntil(this.onNotificationClick_(t))},e.prototype.onPush_=function(t){return u(this,void 0,void 0,function(){var e,n,r,i,o,a
return c(this,function(s){switch(s.label){case 0:if(!t.data)return[2]
try{e=t.data.json()}catch(t){return[2]}return[4,this.hasVisibleClients_()]
case 1:return s.sent()?[2,this.sendMessageToWindowClients_(e)]:(n=this.getNotificationData_(e))?(r=n.title||"",[4,this.getSWRegistration_()]):[3,3]
case 2:return i=s.sent(),o=n.actions,a=Notification.maxActions,o&&a&&o.length>a&&console.warn("This browser only supports "+a+" actions.The remaining actions will not be displayed."),[2,i.showNotification(r,n)]
case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(e)]:[3,5]
case 4:return s.sent(),[2]
case 5:return[2]}})})},e.prototype.onSubChange_=function(t){return u(this,void 0,void 0,function(){var t,e,n,r
return c(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.getSWRegistration_()]
case 1:return t=i.sent(),[3,3]
case 2:throw e=i.sent(),v.create("unable-to-resubscribe",{errorInfo:e})
case 3:return i.trys.push([3,5,,8]),[4,t.pushManager.getSubscription()]
case 4:return i.sent(),[3,8]
case 5:return n=i.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(t.scope)]
case 6:if(!(r=i.sent()))throw n
return[4,this.deleteToken(r.fcmToken)]
case 7:throw i.sent(),n
case 8:return[2]}})})},e.prototype.onNotificationClick_=function(t){return u(this,void 0,void 0,function(){var e,n,r,i
return c(this,function(o){switch(o.label){case 0:return t.notification&&t.notification.data&&t.notification.data.FCM_MSG?t.action?[2]:(t.stopImmediatePropagation(),t.notification.close(),(e=t.notification.data.FCM_MSG).notification&&(n=e.fcmOptions&&e.fcmOptions.link||e.notification.click_action)?[4,this.getWindowClient_(n)]:[2]):[2]
case 1:return(r=o.sent())?[3,3]:[4,self.clients.openWindow(n)]
case 2:return r=o.sent(),[3,5]
case 3:return[4,r.focus()]
case 4:r=o.sent(),o.label=5
case 5:return r?(delete e.notification,delete e.fcmOptions,i=M(y.NOTIFICATION_CLICKED,e),[2,this.attemptToMessageClient_(r,i)]):[2]}})})},e.prototype.getNotificationData_=function(t){var e
if(t&&"object"===p(t.notification)){var n=s({},t.notification)
return n.data=s({},t.notification.data,((e={}).FCM_MSG=t,e)),n}},e.prototype.setBackgroundMessageHandler=function(t){if(!t||"function"!=typeof t)throw v.create("bg-handler-function-expected")
this.bgMessageHandler=t},e.prototype.getWindowClient_=function(t){return u(this,void 0,void 0,function(){var e,n,r,i
return c(this,function(o){switch(o.label){case 0:return e=new URL(t,self.location.href).href,[4,x()]
case 1:for(n=o.sent(),r=null,i=0;i<n.length;i++)if(new URL(n[i].url,self.location.href).href===e){r=n[i]
break}return[2,r]}})})},e.prototype.attemptToMessageClient_=function(t,e){return u(this,void 0,void 0,function(){return c(this,function(n){if(!t)throw v.create("no-window-client-to-msg")
return t.postMessage(e),[2]})})},e.prototype.hasVisibleClients_=function(){return u(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,x()]
case 1:return[2,t.sent().some(function(t){return"visible"===t.visibilityState&&!t.url.startsWith("chrome-extension://")})]}})})},e.prototype.sendMessageToWindowClients_=function(t){return u(this,void 0,void 0,function(){var e,n,r=this
return c(this,function(i){switch(i.label){case 0:return[4,x()]
case 1:return e=i.sent(),n=M(y.PUSH_MSG_RECEIVED,t),[4,Promise.all(e.map(function(t){return r.attemptToMessageClient_(t,n)}))]
case 2:return i.sent(),[2]}})})},e.prototype.getSWRegistration_=function(){return u(this,void 0,void 0,function(){return c(this,function(t){return[2,self.registration]})})},e.prototype.getPublicVapidKey_=function(){return u(this,void 0,void 0,function(){var t,e
return c(this,function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()]
case 1:if(!(t=n.sent()))throw v.create("sw-registration-expected")
return[4,this.getVapidDetailsModel().getVapidFromSWScope(t.scope)]
case 2:return null==(e=n.sent())?[2,g]:[2,e]}})})},e}(P)
function x(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function M(t,e){var n
return(n={})[d.TYPE_OF_MSG]=t,n[d.DATA]=e,n}var L,F=function(t){function e(e){var n=t.call(this,e)||this
return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.manifestCheckPromise=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=Object(f.createSubscribe)(function(t){n.messageObserver=t}),n.onTokenRefreshInternal=Object(f.createSubscribe)(function(t){n.tokenRefreshObserver=t}),n.setupSWMessageListener_(),n}return a(e,t),e.prototype.getToken=function(){return u(this,void 0,void 0,function(){return c(this,function(e){switch(e.label){case 0:return this.manifestCheckPromise||(this.manifestCheckPromise=function(){return u(this,void 0,void 0,function(){var t,e
return c(this,function(n){switch(n.label){case 0:if(!(t=document.querySelector('link[rel="manifest"]')))return[2]
n.label=1
case 1:return n.trys.push([1,4,,5]),[4,fetch(t.href)]
case 2:return[4,n.sent().json()]
case 3:return e=n.sent(),[3,5]
case 4:return n.sent(),[2]
case 5:if(!e||!e.gcm_sender_id)return[2]
if("103953800507"!==e.gcm_sender_id)throw v.create("incorrect-gcm-sender-id")
return[2]}})})}()),[4,this.manifestCheckPromise]
case 1:return e.sent(),[2,t.prototype.getToken.call(this)]}})})},e.prototype.requestPermission=function(){return u(this,void 0,void 0,function(){var t
return c(this,function(e){switch(e.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()]
case 1:if("granted"===(t=e.sent()))return[2]
throw"denied"===t?v.create("permission-blocked"):v.create("permission-default")}})})},e.prototype.useServiceWorker=function(t){if(!(t instanceof ServiceWorkerRegistration))throw v.create("sw-registration-expected")
if(null!=this.registrationToUse)throw v.create("use-sw-before-get-token")
this.registrationToUse=t},e.prototype.usePublicVapidKey=function(t){if("string"!=typeof t)throw v.create("invalid-public-vapid-key")
if(null!=this.publicVapidKeyToUse)throw v.create("use-public-key-before-get-token")
var e=T(t)
if(65!==e.length)throw v.create("public-vapid-key-decryption-failed")
this.publicVapidKeyToUse=e},e.prototype.onMessage=function(t,e,n){return"function"==typeof t?this.onMessageInternal(t,e,n):this.onMessageInternal(t)},e.prototype.onTokenRefresh=function(t,e,n){return"function"==typeof t?this.onTokenRefreshInternal(t,e,n):this.onTokenRefreshInternal(t)},e.prototype.waitForRegistrationToActivate_=function(t){var e=t.installing||t.waiting||t.active
return new Promise(function(n,r){e?"activated"!==e.state?"redundant"!==e.state?e.addEventListener("statechange",function i(){if("activated"===e.state)n(t)
else{if("redundant"!==e.state)return
r(v.create("sw-reg-redundant"))}e.removeEventListener("statechange",i)}):r(v.create("sw-reg-redundant")):n(t):r(v.create("no-sw-in-reg"))})},e.prototype.getSWRegistration_=function(){var t=this
return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(t){throw v.create("failed-serviceworker-registration",{browserErrorMessage:t.message})}).then(function(e){return t.waitForRegistrationToActivate_(e).then(function(){return t.registrationToUse=e,e.update(),e})}))},e.prototype.getPublicVapidKey_=function(){return u(this,void 0,void 0,function(){return c(this,function(t){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,g]})})},e.prototype.setupSWMessageListener_=function(){var t=this
navigator.serviceWorker.addEventListener("message",function(e){if(e.data&&e.data[d.TYPE_OF_MSG]){var n=e.data
switch(n[d.TYPE_OF_MSG]){case y.PUSH_MSG_RECEIVED:case y.NOTIFICATION_CLICKED:var r=n[d.DATA]
t.messageObserver&&t.messageObserver.next(r)}}},!1)},e}(P)
function U(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}L={isSupported:U},i.a.INTERNAL.registerService("messaging",function(t){if(!U())throw v.create("unsupported-browser")
return self&&"ServiceWorkerGlobalScope"in self?new O(t):new F(t)},L)}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[5],{189:function(t,e,n){"use strict"
n.r(e),n(196)},196:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o,a=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,s=n(197),u=n(64),c=n(65),h=function(){function t(t){this.domStorage_=t,this.prefix_="firebase:"}return t.prototype.set=function(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),u.stringify(e))},t.prototype.get=function(t){var e=this.domStorage_.getItem(this.prefixedName_(t))
return null==e?null:u.jsonEval(e)},t.prototype.remove=function(t){this.domStorage_.removeItem(this.prefixedName_(t))},t.prototype.prefixedName_=function(t){return this.prefix_+t},t.prototype.toString=function(){return this.domStorage_.toString()},t}(),l=function(){function t(){this.cache_={},this.isInMemoryStorage=!0}return t.prototype.set=function(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e},t.prototype.get=function(t){return u.contains(this.cache_,t)?this.cache_[t]:null},t.prototype.remove=function(t){delete this.cache_[t]},t}(),f=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){var e=window[t]
return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(t){}return new l},p=f("localStorage"),d=f("sessionStorage"),y=new c.Logger("@firebase/database"),m=(o=1,function(){return o++}),v=function(t){var e=u.stringToByteArray(t),n=new u.Sha1
n.update(e)
var r=n.digest()
return u.base64.encodeByteArray(r)},g=function t(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
for(var i="",o=0;o<e.length;o++)Array.isArray(e[o])||e[o]&&"object"===r(e[o])&&"number"==typeof e[o].length?i+=t.apply(null,e[o]):"object"===r(e[o])?i+=u.stringify(e[o]):i+=e[o],i+=" "
return i},_=null,b=!0,w=function(t,e){u.assert(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(y.logLevel=c.LogLevel.VERBOSE,_=y.log.bind(y),e&&d.set("logging_enabled",!0)):"function"==typeof t?_=t:(_=null,d.remove("logging_enabled"))},E=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
if(!0===b&&(b=!1,null===_&&!0===d.get("logging_enabled")&&w(!0)),_){var n=g.apply(null,t)
_(n)}},T=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
E.apply(void 0,s.__spread([t],e))}},S=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="FIREBASE INTERNAL ERROR: "+g.apply(void 0,s.__spread(t))
y.error(n)},I=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="FIREBASE FATAL ERROR: "+g.apply(void 0,s.__spread(t))
throw y.error(n),new Error(n)},C=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n="FIREBASE WARNING: "+g.apply(void 0,s.__spread(t))
y.warn(n)},N=function(t){return"number"==typeof t&&(t!=t||t==Number.POSITIVE_INFINITY||t==Number.NEGATIVE_INFINITY)},k="[MIN_NAME]",A="[MAX_NAME]",D=function(t,e){if(t===e)return 0
if(t===k||e===A)return-1
if(e===k||t===A)return 1
var n=z(t),r=z(e)
return null!==n?null!==r?n-r==0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1},R=function(t,e){return t===e?0:t<e?-1:1},P=function(t,e){if(e&&t in e)return e[t]
throw new Error("Missing required key ("+t+") in object: "+u.stringify(e))},O=function t(e){if("object"!==r(e)||null===e)return u.stringify(e)
var n=[]
for(var i in e)n.push(i)
n.sort()
for(var o="{",a=0;a<n.length;a++)0!==a&&(o+=","),o+=u.stringify(n[a]),o+=":",o+=t(e[n[a]])
return o+"}"},x=function(t,e){var n=t.length
if(n<=e)return[t]
for(var r=[],i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e))
return r}
function M(t,e){for(var n in t)t.hasOwnProperty(n)&&e(n,t[n])}var L,F,U,q,V,B,j,W,Q,K,G=function(t){var e,n,r,i,o,a,s
for(u.assert(!N(t),"Invalid JSON number"),0===t?(n=0,r=0,e=1/t==-1/0?1:0):(e=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(t)/Math.LN2),1023))+1023,r=Math.round(t*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(t/Math.pow(2,-1074)))),a=[],o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2)
for(o=11;o;o-=1)a.push(n%2?1:0),n=Math.floor(n/2)
a.push(e?1:0),a.reverse(),s=a.join("")
var c=""
for(o=0;o<64;o+=8){var h=parseInt(s.substr(o,8),2).toString(16)
1===h.length&&(h="0"+h),c+=h}return c.toLowerCase()},H=new RegExp("^-?\\d{1,10}$"),z=function(t){if(H.test(t)){var e=Number(t)
if(e>=-2147483648&&e<=2147483647)return e}return null},Y=function(t){try{t()}catch(t){setTimeout(function(){var e=t.stack||""
throw C("Exception was thrown by user callback.",e),t},Math.floor(0))}},X=function(){return("object"===("undefined"==typeof window?"undefined":r(window))&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},J=function(t,e){var n=setTimeout(t,e)
return"object"===r(n)&&n.unref&&n.unref(),n},$=function(){function t(t,e){if(void 0===e){this.pieces_=t.split("/")
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
throw new Error("INTERNAL ERROR: innerPath ("+n+") is not within outerPath ("+e+")")},t.comparePaths=function(t,e){for(var n=t.slice(),r=e.slice(),i=0;i<n.length&&i<r.length;i++){var o=D(n[i],r[i])
if(0!==o)return o}return n.length===r.length?0:n.length<r.length?-1:1},t.prototype.equals=function(t){if(this.getLength()!==t.getLength())return!1
for(var e=this.pieceNum_,n=t.pieceNum_;e<=this.pieces_.length;e++,n++)if(this.pieces_[e]!==t.pieces_[n])return!1
return!0},t.prototype.contains=function(t){var e=this.pieceNum_,n=t.pieceNum_
if(this.getLength()>t.getLength())return!1
for(;e<this.pieces_.length;){if(this.pieces_[e]!==t.pieces_[n])return!1;++e,++n}return!0},t}(),Z=function(){function t(t,e){this.errorPrefix_=e,this.parts_=t.slice(),this.byteLength_=Math.max(1,this.parts_.length)
for(var n=0;n<this.parts_.length;n++)this.byteLength_+=u.stringLength(this.parts_[n])
this.checkValid_()}return Object.defineProperty(t,"MAX_PATH_DEPTH",{get:function(){return 32},enumerable:!0,configurable:!0}),Object.defineProperty(t,"MAX_PATH_LENGTH_BYTES",{get:function(){return 768},enumerable:!0,configurable:!0}),t.prototype.push=function(t){this.parts_.length>0&&(this.byteLength_+=1),this.parts_.push(t),this.byteLength_+=u.stringLength(t),this.checkValid_()},t.prototype.pop=function(){var t=this.parts_.pop()
this.byteLength_-=u.stringLength(t),this.parts_.length>0&&(this.byteLength_-=1)},t.prototype.checkValid_=function(){if(this.byteLength_>t.MAX_PATH_LENGTH_BYTES)throw new Error(this.errorPrefix_+"has a key path longer than "+t.MAX_PATH_LENGTH_BYTES+" bytes ("+this.byteLength_+").")
if(this.parts_.length>t.MAX_PATH_DEPTH)throw new Error(this.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+t.MAX_PATH_DEPTH+") or object contains a cycle "+this.toErrorString())},t.prototype.toErrorString=function(){return 0==this.parts_.length?"":"in property '"+this.parts_.join(".")+"'"},t}(),tt="long_polling",et=function(){function t(t,e,n,r,i){void 0===i&&(i=""),this.secure=e,this.namespace=n,this.webSocketOnly=r,this.persistenceKey=i,this.host=t.toLowerCase(),this.domain=this.host.substr(this.host.indexOf(".")+1),this.internalHost=p.get("host:"+t)||this.host}return t.prototype.needsQueryParam=function(){return this.host!==this.internalHost||this.isCustomHost()},t.prototype.isCacheableHost=function(){return"s-"===this.internalHost.substr(0,2)},t.prototype.isDemoHost=function(){return"firebaseio-demo.com"===this.domain},t.prototype.isCustomHost=function(){return"firebaseio.com"!==this.domain&&"firebaseio-demo.com"!==this.domain},t.prototype.updateHost=function(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&p.set("host:"+this.host,this.internalHost))},t.prototype.connectionURL=function(t,e){var n
if(u.assert("string"==typeof t,"typeof type must == string"),u.assert("object"===r(e),"typeof params must == object"),"websocket"===t)n=(this.secure?"wss://":"ws://")+this.internalHost+"/.ws?"
else{if(t!==tt)throw new Error("Unknown connection type: "+t)
n=(this.secure?"https://":"http://")+this.internalHost+"/.lp?"}this.needsQueryParam()&&(e.ns=this.namespace)
var i=[]
return M(e,function(t,e){i.push(t+"="+e)}),n+i.join("&")},t.prototype.toString=function(){var t=this.toURLString()
return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t},t.prototype.toURLString=function(){return(this.secure?"https://":"http://")+this.host},t}(),nt=function(t){var e=rt(t),n=e.subdomain
"firebase"===e.domain&&I(e.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!=n||"localhost"===e.domain||I("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),e.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&C("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
var r="ws"===e.scheme||"wss"===e.scheme
return{repoInfo:new et(e.host,e.secure,n,r),path:new $(e.pathString)}},rt=function(t){var e="",n="",r="",i="",o=!0,a="https",u=443
if("string"==typeof t){var c=t.indexOf("//")
c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2))
var h=t.indexOf("/");-1===h&&(h=t.length)
var l=t.indexOf("?");-1===l&&(l=t.length),e=t.substring(0,Math.min(h,l)),h<l&&(i=function(t){for(var e="",n=t.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r]
try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(h,l)))
var f=function(t){var e,n,r={}
"?"===t.charAt(0)&&(t=t.substring(1))
try{for(var i=s.__values(t.split("&")),o=i.next();!o.done;o=i.next()){var a=o.value
if(0!==a.length){var u=a.split("=")
2===u.length?r[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):C("Invalid query segment '"+a+"' in query '"+t+"'")}}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}(t.substring(Math.min(t.length,l)));(c=e.indexOf(":"))>=0?(o="https"===a||"wss"===a,u=parseInt(e.substring(c+1),10)):c=t.length
var p=e.split(".")
3===p.length?(n=p[1],r=p[0].toLowerCase()):2===p.length?n=p[0]:"localhost"===p[0].slice(0,c).toLowerCase()&&(n="localhost"),""===r&&"ns"in f&&(r=f.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i}},it=/[\[\].#$\/\u0000-\u001F\u007F]/,ot=/[\[\].#$\u0000-\u001F\u007F]/,at=function(t){return"string"==typeof t&&0!==t.length&&!it.test(t)},st=function(t){return"string"==typeof t&&0!==t.length&&!ot.test(t)},ut=function(t){return null===t||"string"==typeof t||"number"==typeof t&&!N(t)||t&&"object"===r(t)&&u.contains(t,".sv")},ct=function(t,e,n,r,i){i&&void 0===n||ht(u.errorPrefix(t,e,i),n,r)},ht=function t(e,n,i){var o=i instanceof $?new Z(i,e):i
if(void 0===n)throw new Error(e+"contains undefined "+o.toErrorString())
if("function"==typeof n)throw new Error(e+"contains a function "+o.toErrorString()+" with contents = "+n.toString())
if(N(n))throw new Error(e+"contains "+n.toString()+" "+o.toErrorString())
if("string"==typeof n&&n.length>10485760/3&&u.stringLength(n)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+o.toErrorString()+" ('"+n.substring(0,50)+"...')")
if(n&&"object"===r(n)){var a=!1,s=!1
if(M(n,function(n,r){if(".value"===n)a=!0
else if(".priority"!==n&&".sv"!==n&&(s=!0,!at(n)))throw new Error(e+" contains an invalid key ("+n+") "+o.toErrorString()+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
o.push(n),t(e,r,o),o.pop()}),a&&s)throw new Error(e+' contains ".value" child '+o.toErrorString()+" in addition to actual children.")}},lt=function(t,e,n,i,o){if(!o||void 0!==n){var a=u.errorPrefix(t,e,o)
if(!n||"object"!==r(n)||Array.isArray(n))throw new Error(a+" must be an object containing the children to replace.")
var s=[]
M(n,function(t,e){var n=new $(t)
if(ht(a,e,i.child(n)),".priority"===n.getBack()&&!ut(e))throw new Error(a+"contains an invalid value for '"+n.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).")
s.push(n)}),function(t,e){var n,r
for(n=0;n<e.length;n++)for(var i=(r=e[n]).slice(),o=0;o<i.length;o++)if(".priority"===i[o]&&o===i.length-1);else if(!at(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
e.sort($.comparePaths)
var a=null
for(n=0;n<e.length;n++){if(r=e[n],null!==a&&a.contains(r))throw new Error(t+"contains a path "+a.toString()+" that is ancestor of another path "+r.toString())
a=r}}(a,s)}},ft=function(t,e,n,r){if(!r||void 0!==n){if(N(n))throw new Error(u.errorPrefix(t,e,r)+"is "+n.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).")
if(!ut(n))throw new Error(u.errorPrefix(t,e,r)+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},pt=function(t,e,n,r){if(!r||void 0!==n)switch(n){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break
default:throw new Error(u.errorPrefix(t,e,r)+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},dt=function(t,e,n,r){if(!(r&&void 0===n||at(n)))throw new Error(u.errorPrefix(t,e,r)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},yt=function(t,e,n,r){if(!(r&&void 0===n||st(n)))throw new Error(u.errorPrefix(t,e,r)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},mt=function(t,e){if(".info"===e.getFront())throw new Error(t+" failed = Can't modify data under /.info/")},vt=function(t,e,n){var r=n.path.toString()
if("string"!=typeof n.repoInfo.host||0===n.repoInfo.host.length||!at(n.repoInfo.namespace)&&"localhost"!==n.repoInfo.host.split(":")[0]||0!==r.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),st(t)}(r))throw new Error(u.errorPrefix(t,e,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},gt=function(){function t(t,e){this.repo_=t,this.path_=e}return t.prototype.cancel=function(t){u.validateArgCount("OnDisconnect.cancel",0,1,arguments.length),u.validateCallback("OnDisconnect.cancel",1,t,!0)
var e=new u.Deferred
return this.repo_.onDisconnectCancel(this.path_,e.wrapCallback(t)),e.promise},t.prototype.remove=function(t){u.validateArgCount("OnDisconnect.remove",0,1,arguments.length),mt("OnDisconnect.remove",this.path_),u.validateCallback("OnDisconnect.remove",1,t,!0)
var e=new u.Deferred
return this.repo_.onDisconnectSet(this.path_,null,e.wrapCallback(t)),e.promise},t.prototype.set=function(t,e){u.validateArgCount("OnDisconnect.set",1,2,arguments.length),mt("OnDisconnect.set",this.path_),ct("OnDisconnect.set",1,t,this.path_,!1),u.validateCallback("OnDisconnect.set",2,e,!0)
var n=new u.Deferred
return this.repo_.onDisconnectSet(this.path_,t,n.wrapCallback(e)),n.promise},t.prototype.setWithPriority=function(t,e,n){u.validateArgCount("OnDisconnect.setWithPriority",2,3,arguments.length),mt("OnDisconnect.setWithPriority",this.path_),ct("OnDisconnect.setWithPriority",1,t,this.path_,!1),ft("OnDisconnect.setWithPriority",2,e,!1),u.validateCallback("OnDisconnect.setWithPriority",3,n,!0)
var r=new u.Deferred
return this.repo_.onDisconnectSetWithPriority(this.path_,t,e,r.wrapCallback(n)),r.promise},t.prototype.update=function(t,e){if(u.validateArgCount("OnDisconnect.update",1,2,arguments.length),mt("OnDisconnect.update",this.path_),Array.isArray(t)){for(var n={},r=0;r<t.length;++r)n[""+r]=t[r]
t=n,C("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}lt("OnDisconnect.update",1,t,this.path_,!1),u.validateCallback("OnDisconnect.update",2,e,!0)
var i=new u.Deferred
return this.repo_.onDisconnectUpdate(this.path_,t,i.wrapCallback(e)),i.promise},t}(),_t=function(){function t(t,e){this.committed=t,this.snapshot=e}return t.prototype.toJSON=function(){return u.validateArgCount("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},t}(),bt=(L="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",F=0,U=[],function(t){var e,n=t===F
F=t
var r=new Array(8)
for(e=7;e>=0;e--)r[e]=L.charAt(t%64),t=Math.floor(t/64)
u.assert(0===t,"Cannot push at time == 0")
var i=r.join("")
if(n){for(e=11;e>=0&&63===U[e];e--)U[e]=0
U[e]++}else for(e=0;e<12;e++)U[e]=Math.floor(64*Math.random())
for(e=0;e<12;e++)i+=L.charAt(U[e])
return u.assert(20===i.length,"nextPushId: Length should be 20."),i}),wt=function(){function t(t,e){this.name=t,this.node=e}return t.Wrap=function(e,n){return new t(e,n)},t}(),Et=function(){function t(){}return t.prototype.getCompare=function(){return this.compare.bind(this)},t.prototype.indexedValueChanged=function(t,e){var n=new wt(k,t),r=new wt(k,e)
return 0!==this.compare(n,r)},t.prototype.minPost=function(){return wt.MIN},t}(),Tt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),Object.defineProperty(e,"__EMPTY_NODE",{get:function(){return q},set:function(t){q=t},enumerable:!0,configurable:!0}),e.prototype.compare=function(t,e){return D(t.name,e.name)},e.prototype.isDefinedOn=function(t){throw u.assertionError("KeyIndex.isDefinedOn not expected to be called.")},e.prototype.indexedValueChanged=function(t,e){return!1},e.prototype.minPost=function(){return wt.MIN},e.prototype.maxPost=function(){return new wt(A,q)},e.prototype.makePost=function(t,e){return u.assert("string"==typeof t,"KeyIndex indexValue must always be a string."),new wt(t,q)},e.prototype.toString=function(){return".key"},e}(Et),St=new Tt,It=function(t){return"number"==typeof t?"number:"+G(t):"string:"+t},Ct=function(t){if(t.isLeafNode()){var e=t.val()
u.assert("string"==typeof e||"number"==typeof e||"object"===r(e)&&u.contains(e,".sv"),"Priority must be a string or number.")}else u.assert(t===V||t.isEmpty(),"priority of unexpected type.")
u.assert(t===V||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},Nt=function(){function t(e,n){void 0===n&&(n=t.__childrenNodeConstructor.EMPTY_NODE),this.value_=e,this.priorityNode_=n,this.lazyHash_=null,u.assert(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ct(this.priorityNode_)}return Object.defineProperty(t,"__childrenNodeConstructor",{get:function(){return B},set:function(t){B=t},enumerable:!0,configurable:!0}),t.prototype.isLeafNode=function(){return!0},t.prototype.getPriority=function(){return this.priorityNode_},t.prototype.updatePriority=function(e){return new t(this.value_,e)},t.prototype.getImmediateChild=function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.getChild=function(e){return e.isEmpty()?this:".priority"===e.getFront()?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.hasChild=function(){return!1},t.prototype.getPredecessorChildName=function(t,e){return null},t.prototype.updateImmediateChild=function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)},t.prototype.updateChild=function(e,n){var r=e.getFront()
return null===r?n:n.isEmpty()&&".priority"!==r?this:(u.assert(".priority"!==r||1===e.getLength(),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(e.popFront(),n)))},t.prototype.isEmpty=function(){return!1},t.prototype.numChildren=function(){return 0},t.prototype.forEachChild=function(t,e){return!1},t.prototype.val=function(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},t.prototype.hash=function(){if(null===this.lazyHash_){var t=""
this.priorityNode_.isEmpty()||(t+="priority:"+It(this.priorityNode_.val())+":")
var e=r(this.value_)
t+=e+":",t+="number"===e?G(this.value_):this.value_,this.lazyHash_=v(t)}return this.lazyHash_},t.prototype.getValue=function(){return this.value_},t.prototype.compareTo=function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(u.assert(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))},t.prototype.compareToLeafNode_=function(e){var n=r(e.value_),i=r(this.value_),o=t.VALUE_TYPE_ORDER.indexOf(n),a=t.VALUE_TYPE_ORDER.indexOf(i)
return u.assert(o>=0,"Unknown leaf type: "+n),u.assert(a>=0,"Unknown leaf type: "+i),o===a?"object"===i?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o},t.prototype.withIndex=function(){return this},t.prototype.isIndexed=function(){return!0},t.prototype.equals=function(t){if(t===this)return!0
if(t.isLeafNode()){var e=t
return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1},t.VALUE_TYPE_ORDER=["object","boolean","number","string"],t}(),kt=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.compare=function(t,e){var n=t.node.getPriority(),r=e.node.getPriority(),i=n.compareTo(r)
return 0===i?D(t.name,e.name):i},e.prototype.isDefinedOn=function(t){return!t.getPriority().isEmpty()},e.prototype.indexedValueChanged=function(t,e){return!t.getPriority().equals(e.getPriority())},e.prototype.minPost=function(){return wt.MIN},e.prototype.maxPost=function(){return new wt(A,new Nt("[PRIORITY-POST]",W))},e.prototype.makePost=function(t,e){var n=j(t)
return new wt(e,new Nt("[PRIORITY-POST]",n))},e.prototype.toString=function(){return".priority"},e}(Et)),At=function(){function t(t,e,n,r,i){void 0===i&&(i=null),this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[]
for(var o=1;!t.isEmpty();)if(t=t,o=e?n(t.key,e):1,r&&(o*=-1),o<0)t=this.isReverse_?t.left:t.right
else{if(0===o){this.nodeStack_.push(t)
break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}return t.prototype.getNext=function(){if(0===this.nodeStack_.length)return null
var t,e=this.nodeStack_.pop()
if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right
else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left
return t},t.prototype.hasNext=function(){return this.nodeStack_.length>0},t.prototype.peek=function(){if(0===this.nodeStack_.length)return null
var t=this.nodeStack_[this.nodeStack_.length-1]
return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}},t}(),Dt=function(){function t(e,n,r,i,o){this.key=e,this.value=n,this.color=null!=r?r:t.RED,this.left=null!=i?i:Pt.EMPTY_NODE,this.right=null!=o?o:Pt.EMPTY_NODE}return t.prototype.copy=function(e,n,r,i,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)},t.prototype.count=function(){return this.left.count()+1+this.right.count()},t.prototype.isEmpty=function(){return!1},t.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)},t.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},t.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},t.prototype.minKey=function(){return this.min_().key},t.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},t.prototype.insert=function(t,e,n){var r,i
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
return t+(this.isRed_()?0:1)},t.RED=!0,t.BLACK=!1,t}(),Rt=function(){function t(){}return t.prototype.copy=function(t,e,n,r,i){return this},t.prototype.insert=function(t,e,n){return new Dt(t,e,null)},t.prototype.remove=function(t,e){return this},t.prototype.count=function(){return 0},t.prototype.isEmpty=function(){return!0},t.prototype.inorderTraversal=function(t){return!1},t.prototype.reverseTraversal=function(t){return!1},t.prototype.minKey=function(){return null},t.prototype.maxKey=function(){return null},t.prototype.check_=function(){return 0},t.prototype.isRed_=function(){return!1},t}(),Pt=function(){function t(e,n){void 0===n&&(n=t.EMPTY_NODE),this.comparator_=e,this.root_=n}return t.prototype.insert=function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Dt.BLACK,null,null))},t.prototype.remove=function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Dt.BLACK,null,null))},t.prototype.get=function(t){for(var e,n=this.root_;!n.isEmpty();){if(0===(e=this.comparator_(t,n.key)))return n.value
e<0?n=n.left:e>0&&(n=n.right)}return null},t.prototype.getPredecessorKey=function(t){for(var e,n=this.root_,r=null;!n.isEmpty();){if(0===(e=this.comparator_(t,n.key))){if(n.left.isEmpty())return r?r.key:null
for(n=n.left;!n.right.isEmpty();)n=n.right
return n.key}e<0?n=n.left:e>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},t.prototype.isEmpty=function(){return this.root_.isEmpty()},t.prototype.count=function(){return this.root_.count()},t.prototype.minKey=function(){return this.root_.minKey()},t.prototype.maxKey=function(){return this.root_.maxKey()},t.prototype.inorderTraversal=function(t){return this.root_.inorderTraversal(t)},t.prototype.reverseTraversal=function(t){return this.root_.reverseTraversal(t)},t.prototype.getIterator=function(t){return new At(this.root_,null,this.comparator_,!1,t)},t.prototype.getIteratorFrom=function(t,e){return new At(this.root_,t,this.comparator_,!1,e)},t.prototype.getReverseIteratorFrom=function(t,e){return new At(this.root_,t,this.comparator_,!0,e)},t.prototype.getReverseIterator=function(t){return new At(this.root_,null,this.comparator_,!0,t)},t.EMPTY_NODE=new Rt,t}(),Ot=Math.log(2),xt=function(){function t(t){var e
this.count=(e=t+1,parseInt(Math.log(e)/Ot,10)),this.current_=this.count-1
var n,r=(n=this.count,parseInt(Array(n+1).join("1"),2))
this.bits_=t+1&r}return t.prototype.nextBitIsOne=function(){var t=!(this.bits_&1<<this.current_)
return this.current_--,t},t}(),Mt=function(t,e,n,r){t.sort(e)
var i=function(e){for(var r=null,i=null,o=t.length,a=function(e,r){var i=o-e,a=o
o-=e
var u=function e(r,i){var o,a,s=i-r
if(0==s)return null
if(1==s)return o=t[r],a=n?n(o):o,new Dt(a,o.node,Dt.BLACK,null,null)
var u=parseInt(s/2,10)+r,c=e(r,u),h=e(u+1,i)
return o=t[u],a=n?n(o):o,new Dt(a,o.node,Dt.BLACK,c,h)}(i+1,a),c=t[i],h=n?n(c):c
s(new Dt(h,c.node,r,null,u))},s=function(t){r?(r.left=t,r=t):(i=t,r=t)},u=0;u<e.count;++u){var c=e.nextBitIsOne(),h=Math.pow(2,e.count-(u+1))
c?a(h,Dt.BLACK):(a(h,Dt.BLACK),a(h,Dt.RED))}return i}(new xt(t.length))
return new Pt(r||e,i)},Lt={},Ft=function(){function t(t,e){this.indexes_=t,this.indexSet_=e}return Object.defineProperty(t,"Default",{get:function(){return u.assert(Lt&&kt,"ChildrenNode.ts has not been loaded"),Q=Q||new t({".priority":Lt},{".priority":kt})},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var e=u.safeGet(this.indexes_,t)
if(!e)throw new Error("No index defined for "+t)
return e instanceof Pt?e:null},t.prototype.hasIndex=function(t){return u.contains(this.indexSet_,t.toString())},t.prototype.addIndex=function(e,n){u.assert(e!==St,"KeyIndex always exists and isn't meant to be added to the IndexMap.")
for(var r,i=[],o=!1,a=n.getIterator(wt.Wrap),c=a.getNext();c;)o=o||e.isDefinedOn(c.node),i.push(c),c=a.getNext()
r=o?Mt(i,e.getCompare()):Lt
var h=e.toString(),l=s.__assign({},this.indexSet_)
l[h]=e
var f=s.__assign({},this.indexes_)
return f[h]=r,new t(f,l)},t.prototype.addToIndexes=function(e,n){var r=this
return new t(u.map(this.indexes_,function(t,i){var o=u.safeGet(r.indexSet_,i)
if(u.assert(o,"Missing index implementation for "+i),t===Lt){if(o.isDefinedOn(e.node)){for(var a=[],s=n.getIterator(wt.Wrap),c=s.getNext();c;)c.name!=e.name&&a.push(c),c=s.getNext()
return a.push(e),Mt(a,o.getCompare())}return Lt}var h=n.get(e.name),l=t
return h&&(l=l.remove(new wt(e.name,h))),l.insert(e,e.node)}),this.indexSet_)},t.prototype.removeFromIndexes=function(e,n){return new t(u.map(this.indexes_,function(t){if(t===Lt)return t
var r=n.get(e.name)
return r?t.remove(new wt(e.name,r)):t}),this.indexSet_)},t}()
function Ut(t,e){return D(t.name,e.name)}function qt(t,e){return D(t,e)}var Vt=function(){function t(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ct(this.priorityNode_),this.children_.isEmpty()&&u.assert(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(t,"EMPTY_NODE",{get:function(){return K||(K=new t(new Pt(qt),null,Ft.Default))},enumerable:!0,configurable:!0}),t.prototype.isLeafNode=function(){return!1},t.prototype.getPriority=function(){return this.priorityNode_||K},t.prototype.updatePriority=function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)},t.prototype.getImmediateChild=function(t){if(".priority"===t)return this.getPriority()
var e=this.children_.get(t)
return null===e?K:e},t.prototype.getChild=function(t){var e=t.getFront()
return null===e?this:this.getImmediateChild(e).getChild(t.popFront())},t.prototype.hasChild=function(t){return null!==this.children_.get(t)},t.prototype.updateImmediateChild=function(e,n){if(u.assert(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n)
var r,i=new wt(e,n),o=void 0,a=void 0
return n.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(i,this.children_)),r=o.isEmpty()?K:this.priorityNode_,new t(o,r,a)},t.prototype.updateChild=function(t,e){var n=t.getFront()
if(null===n)return e
u.assert(".priority"!==t.getFront()||1===t.getLength(),".priority must be the last token in a path")
var r=this.getImmediateChild(n).updateChild(t.popFront(),e)
return this.updateImmediateChild(n,r)},t.prototype.isEmpty=function(){return this.children_.isEmpty()},t.prototype.numChildren=function(){return this.children_.count()},t.prototype.val=function(e){if(this.isEmpty())return null
var n={},r=0,i=0,o=!0
if(this.forEachChild(kt,function(a,s){n[a]=s.val(e),r++,o&&t.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):o=!1}),!e&&o&&i<2*r){var a=[]
for(var s in n)a[s]=n[s]
return a}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},t.prototype.hash=function(){if(null===this.lazyHash_){var t=""
this.getPriority().isEmpty()||(t+="priority:"+It(this.getPriority().val())+":"),this.forEachChild(kt,function(e,n){var r=n.hash()
""!==r&&(t+=":"+e+":"+r)}),this.lazyHash_=""===t?"":v(t)}return this.lazyHash_},t.prototype.getPredecessorChildName=function(t,e,n){var r=this.resolveIndex_(n)
if(r){var i=r.getPredecessorKey(new wt(t,e))
return i?i.name:null}return this.children_.getPredecessorKey(t)},t.prototype.getFirstChildName=function(t){var e=this.resolveIndex_(t)
if(e){var n=e.minKey()
return n&&n.name}return this.children_.minKey()},t.prototype.getFirstChild=function(t){var e=this.getFirstChildName(t)
return e?new wt(e,this.children_.get(e)):null},t.prototype.getLastChildName=function(t){var e=this.resolveIndex_(t)
if(e){var n=e.maxKey()
return n&&n.name}return this.children_.maxKey()},t.prototype.getLastChild=function(t){var e=this.getLastChildName(t)
return e?new wt(e,this.children_.get(e)):null},t.prototype.forEachChild=function(t,e){var n=this.resolveIndex_(t)
return n?n.inorderTraversal(function(t){return e(t.name,t.node)}):this.children_.inorderTraversal(e)},t.prototype.getIterator=function(t){return this.getIteratorFrom(t.minPost(),t)},t.prototype.getIteratorFrom=function(t,e){var n=this.resolveIndex_(e)
if(n)return n.getIteratorFrom(t,function(t){return t})
for(var r=this.children_.getIteratorFrom(t.name,wt.Wrap),i=r.peek();null!=i&&e.compare(i,t)<0;)r.getNext(),i=r.peek()
return r},t.prototype.getReverseIterator=function(t){return this.getReverseIteratorFrom(t.maxPost(),t)},t.prototype.getReverseIteratorFrom=function(t,e){var n=this.resolveIndex_(e)
if(n)return n.getReverseIteratorFrom(t,function(t){return t})
for(var r=this.children_.getReverseIteratorFrom(t.name,wt.Wrap),i=r.peek();null!=i&&e.compare(i,t)>0;)r.getNext(),i=r.peek()
return r},t.prototype.compareTo=function(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Bt?-1:0},t.prototype.withIndex=function(e){if(e===St||this.indexMap_.hasIndex(e))return this
var n=this.indexMap_.addIndex(e,this.children_)
return new t(this.children_,this.priorityNode_,n)},t.prototype.isIndexed=function(t){return t===St||this.indexMap_.hasIndex(t)},t.prototype.equals=function(t){if(t===this)return!0
if(t.isLeafNode())return!1
var e=t
if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){for(var n=this.getIterator(kt),r=e.getIterator(kt),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1
i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1},t.prototype.resolveIndex_=function(t){return t===St?null:this.indexMap_.get(t.toString())},t.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,t}(),Bt=new(function(t){function e(){return t.call(this,new Pt(qt),Vt.EMPTY_NODE,Ft.Default)||this}return s.__extends(e,t),e.prototype.compareTo=function(t){return t===this?0:1},e.prototype.equals=function(t){return t===this},e.prototype.getPriority=function(){return this},e.prototype.getImmediateChild=function(t){return Vt.EMPTY_NODE},e.prototype.isEmpty=function(){return!1},e}(Vt))
Object.defineProperties(wt,{MIN:{value:new wt(k,Vt.EMPTY_NODE)},MAX:{value:new wt(A,Bt)}}),Tt.__EMPTY_NODE=Vt.EMPTY_NODE,Nt.__childrenNodeConstructor=Vt,V=Bt,W=Bt
var jt=!0
function Wt(t,e){if(void 0===e&&(e=null),null===t)return Vt.EMPTY_NODE
if("object"===r(t)&&".priority"in t&&(e=t[".priority"]),u.assert(null===e||"string"==typeof e||"number"==typeof e||"object"===r(e)&&".sv"in e,"Invalid priority type found: "+r(e)),"object"===r(t)&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==r(t)||".sv"in t)return new Nt(t,Wt(e))
if(t instanceof Array||!jt){var n=Vt.EMPTY_NODE
return M(t,function(e,r){if(u.contains(t,e)&&"."!==e.substring(0,1)){var i=Wt(r)
!i.isLeafNode()&&i.isEmpty()||(n=n.updateImmediateChild(e,i))}}),n.updatePriority(Wt(e))}var i=[],o=!1
if(M(t,function(t,e){if("."!==t.substring(0,1)){var n=Wt(e)
n.isEmpty()||(o=o||!n.getPriority().isEmpty(),i.push(new wt(t,n)))}}),0==i.length)return Vt.EMPTY_NODE
var a=Mt(i,Ut,function(t){return t.name},qt)
if(o){var s=Mt(i,kt.getCompare())
return new Vt(a,Wt(e),new Ft({".priority":s},{".priority":kt}))}return new Vt(a,Wt(e),Ft.Default)}j=Wt
var Qt,Kt,Gt=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.compare=function(t,e){var n=t.node.compareTo(e.node)
return 0===n?D(t.name,e.name):n},e.prototype.isDefinedOn=function(t){return!0},e.prototype.indexedValueChanged=function(t,e){return!t.equals(e)},e.prototype.minPost=function(){return wt.MIN},e.prototype.maxPost=function(){return wt.MAX},e.prototype.makePost=function(t,e){var n=Wt(t)
return new wt(e,n)},e.prototype.toString=function(){return".value"},e}(Et)),Ht=function(t){function e(e){var n=t.call(this)||this
return n.indexPath_=e,u.assert(!e.isEmpty()&&".priority"!==e.getFront(),"Can't create PathIndex with empty path or .priority key"),n}return s.__extends(e,t),e.prototype.extractChild=function(t){return t.getChild(this.indexPath_)},e.prototype.isDefinedOn=function(t){return!t.getChild(this.indexPath_).isEmpty()},e.prototype.compare=function(t,e){var n=this.extractChild(t.node),r=this.extractChild(e.node),i=n.compareTo(r)
return 0===i?D(t.name,e.name):i},e.prototype.makePost=function(t,e){var n=Wt(t),r=Vt.EMPTY_NODE.updateChild(this.indexPath_,n)
return new wt(e,r)},e.prototype.maxPost=function(){var t=Vt.EMPTY_NODE.updateChild(this.indexPath_,Bt)
return new wt(A,t)},e.prototype.toString=function(){return this.indexPath_.slice().join("/")},e}(Et),zt=function(){function t(t,e,n){this.node_=t,this.ref_=e,this.index_=n}return t.prototype.val=function(){return u.validateArgCount("DataSnapshot.val",0,0,arguments.length),this.node_.val()},t.prototype.exportVal=function(){return u.validateArgCount("DataSnapshot.exportVal",0,0,arguments.length),this.node_.val(!0)},t.prototype.toJSON=function(){return u.validateArgCount("DataSnapshot.toJSON",0,1,arguments.length),this.exportVal()},t.prototype.exists=function(){return u.validateArgCount("DataSnapshot.exists",0,0,arguments.length),!this.node_.isEmpty()},t.prototype.child=function(e){u.validateArgCount("DataSnapshot.child",0,1,arguments.length),e=String(e),yt("DataSnapshot.child",1,e,!1)
var n=new $(e),r=this.ref_.child(n)
return new t(this.node_.getChild(n),r,kt)},t.prototype.hasChild=function(t){u.validateArgCount("DataSnapshot.hasChild",1,1,arguments.length),yt("DataSnapshot.hasChild",1,t,!1)
var e=new $(t)
return!this.node_.getChild(e).isEmpty()},t.prototype.getPriority=function(){return u.validateArgCount("DataSnapshot.getPriority",0,0,arguments.length),this.node_.getPriority().val()},t.prototype.forEach=function(e){var n=this
return u.validateArgCount("DataSnapshot.forEach",1,1,arguments.length),u.validateCallback("DataSnapshot.forEach",1,e,!1),!this.node_.isLeafNode()&&!!this.node_.forEachChild(this.index_,function(r,i){return e(new t(i,n.ref_.child(r),kt))})},t.prototype.hasChildren=function(){return u.validateArgCount("DataSnapshot.hasChildren",0,0,arguments.length),!this.node_.isLeafNode()&&!this.node_.isEmpty()},Object.defineProperty(t.prototype,"key",{get:function(){return this.ref_.getKey()},enumerable:!0,configurable:!0}),t.prototype.numChildren=function(){return u.validateArgCount("DataSnapshot.numChildren",0,0,arguments.length),this.node_.numChildren()},t.prototype.getRef=function(){return u.validateArgCount("DataSnapshot.ref",0,0,arguments.length),this.ref_},Object.defineProperty(t.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),t}(),Yt=function(){function t(t,e,n,r){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=r}return t.prototype.getPath=function(){var t=this.snapshot.getRef()
return"value"===this.eventType?t.path:t.getParent().path},t.prototype.getEventType=function(){return this.eventType},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+u.stringify(this.snapshot.exportVal())},t}(),Xt=function(){function t(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}return t.prototype.getPath=function(){return this.path},t.prototype.getEventType=function(){return"cancel"},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.path.toString()+":cancel"},t}(),Jt=function(){function t(t,e,n){this.callback_=t,this.cancelCallback_=e,this.context_=n}return t.prototype.respondsTo=function(t){return"value"===t},t.prototype.createEvent=function(t,e){var n=e.getQueryParams().getIndex()
return new Yt("value",this,new zt(t.snapshotNode,e.getRef(),n))},t.prototype.getEventRunner=function(t){var e=this.context_
if("cancel"===t.getEventType()){u.assert(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback")
var n=this.cancelCallback_
return function(){n.call(e,t.error)}}var r=this.callback_
return function(){r.call(e,t.snapshot)}},t.prototype.createCancelEvent=function(t,e){return this.cancelCallback_?new Xt(this,t,e):null},t.prototype.matches=function(e){return e instanceof t&&(!e.callback_||!this.callback_||e.callback_===this.callback_&&e.context_===this.context_)},t.prototype.hasAnyCallback=function(){return null!==this.callback_},t}(),$t=function(){function t(t,e,n){this.callbacks_=t,this.cancelCallback_=e,this.context_=n}return t.prototype.respondsTo=function(t){var e="children_added"===t?"child_added":t
return e="children_removed"===e?"child_removed":e,u.contains(this.callbacks_,e)},t.prototype.createCancelEvent=function(t,e){return this.cancelCallback_?new Xt(this,t,e):null},t.prototype.createEvent=function(t,e){u.assert(null!=t.childName,"Child events should have a childName.")
var n=e.getRef().child(t.childName),r=e.getQueryParams().getIndex()
return new Yt(t.type,this,new zt(t.snapshotNode,n,r),t.prevName)},t.prototype.getEventRunner=function(t){var e=this.context_
if("cancel"===t.getEventType()){u.assert(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback")
var n=this.cancelCallback_
return function(){n.call(e,t.error)}}var r=this.callbacks_[t.eventType]
return function(){r.call(e,t.snapshot,t.prevName)}},t.prototype.matches=function(e){var n=this
if(e instanceof t){if(!this.callbacks_||!e.callbacks_)return!0
if(this.context_===e.context_){var r=Object.keys(e.callbacks_),i=Object.keys(this.callbacks_),o=r.length
if(o===i.length){if(1===o){var a=r[0],s=i[0]
return!(s!==a||e.callbacks_[a]&&this.callbacks_[s]&&e.callbacks_[a]!==this.callbacks_[s])}return i.every(function(t){return e.callbacks_[t]===n.callbacks_[t]})}}}return!1},t.prototype.hasAnyCallback=function(){return null!==this.callbacks_},t}(),Zt=function(){function t(t,e,n,r){this.repo=t,this.path=e,this.queryParams_=n,this.orderByCalled_=r}return Object.defineProperty(t,"__referenceConstructor",{get:function(){return u.assert(Qt,"Reference.ts has not been loaded"),Qt},set:function(t){Qt=t},enumerable:!0,configurable:!0}),t.validateQueryEndpoints_=function(t){var e=null,n=null
if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===St){var i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",o="Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string."
if(t.hasStart()){if(t.getIndexStartName()!=k)throw new Error(i)
if("string"!=typeof e)throw new Error(o)}if(t.hasEnd()){if(t.getIndexEndName()!=A)throw new Error(i)
if("string"!=typeof n)throw new Error(o)}}else if(t.getIndex()===kt){if(null!=e&&!ut(e)||null!=n&&!ut(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(u.assert(t.getIndex()instanceof Ht||t.getIndex()===Gt,"unknown index type."),null!=e&&"object"===r(e)||null!=n&&"object"===r(n))throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")},t.validateLimit_=function(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")},t.prototype.validateNoPreviousOrderByCall_=function(t){if(!0===this.orderByCalled_)throw new Error(t+": You can't combine multiple orderBy calls.")},t.prototype.getQueryParams=function(){return this.queryParams_},t.prototype.getRef=function(){return u.validateArgCount("Query.ref",0,0,arguments.length),new t.__referenceConstructor(this.repo,this.path)},t.prototype.on=function(e,n,r,i){u.validateArgCount("Query.on",2,4,arguments.length),pt("Query.on",1,e,!1),u.validateCallback("Query.on",2,n,!1)
var o=t.getCancelAndContextArgs_("Query.on",r,i)
if("value"===e)this.onValueEvent(n,o.cancel,o.context)
else{var a={}
a[e]=n,this.onChildEvent(a,o.cancel,o.context)}return n},t.prototype.onValueEvent=function(t,e,n){var r=new Jt(t,e||null,n||null)
this.repo.addEventCallbackForQuery(this,r)},t.prototype.onChildEvent=function(t,e,n){var r=new $t(t,e,n)
this.repo.addEventCallbackForQuery(this,r)},t.prototype.off=function(t,e,n){u.validateArgCount("Query.off",0,3,arguments.length),pt("Query.off",1,t,!0),u.validateCallback("Query.off",2,e,!0),u.validateContextObject("Query.off",3,n,!0)
var r=null,i=null
"value"===t?r=new Jt(e||null,null,n||null):t&&(e&&((i={})[t]=e),r=new $t(i,null,n||null)),this.repo.removeEventCallbackForQuery(this,r)},t.prototype.once=function(e,n,r,i){var o=this
u.validateArgCount("Query.once",1,4,arguments.length),pt("Query.once",1,e,!1),u.validateCallback("Query.once",2,n,!0)
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
yt("Query.orderByChild",1,e,!1),this.validateNoPreviousOrderByCall_("Query.orderByChild")
var n=new $(e)
if(n.isEmpty())throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.")
var r=new Ht(n),i=this.queryParams_.orderBy(r)
return t.validateQueryEndpoints_(i),new t(this.repo,this.path,i,!0)},t.prototype.orderByKey=function(){u.validateArgCount("Query.orderByKey",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByKey")
var e=this.queryParams_.orderBy(St)
return t.validateQueryEndpoints_(e),new t(this.repo,this.path,e,!0)},t.prototype.orderByPriority=function(){u.validateArgCount("Query.orderByPriority",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByPriority")
var e=this.queryParams_.orderBy(kt)
return t.validateQueryEndpoints_(e),new t(this.repo,this.path,e,!0)},t.prototype.orderByValue=function(){u.validateArgCount("Query.orderByValue",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByValue")
var e=this.queryParams_.orderBy(Gt)
return t.validateQueryEndpoints_(e),new t(this.repo,this.path,e,!0)},t.prototype.startAt=function(e,n){void 0===e&&(e=null),u.validateArgCount("Query.startAt",0,2,arguments.length),ct("Query.startAt",1,e,this.path,!0),dt("Query.startAt",2,n,!0)
var r=this.queryParams_.startAt(e,n)
if(t.validateLimit_(r),t.validateQueryEndpoints_(r),this.queryParams_.hasStart())throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).")
return void 0===e&&(e=null,n=null),new t(this.repo,this.path,r,this.orderByCalled_)},t.prototype.endAt=function(e,n){void 0===e&&(e=null),u.validateArgCount("Query.endAt",0,2,arguments.length),ct("Query.endAt",1,e,this.path,!0),dt("Query.endAt",2,n,!0)
var r=this.queryParams_.endAt(e,n)
if(t.validateLimit_(r),t.validateQueryEndpoints_(r),this.queryParams_.hasEnd())throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).")
return new t(this.repo,this.path,r,this.orderByCalled_)},t.prototype.equalTo=function(t,e){if(u.validateArgCount("Query.equalTo",1,2,arguments.length),ct("Query.equalTo",1,t,this.path,!1),dt("Query.equalTo",2,e,!0),this.queryParams_.hasStart())throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).")
if(this.queryParams_.hasEnd())throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).")
return this.startAt(t,e).endAt(t,e)},t.prototype.toString=function(){return u.validateArgCount("Query.toString",0,0,arguments.length),this.repo.toString()+this.path.toUrlEncodedString()},t.prototype.toJSON=function(){return u.validateArgCount("Query.toJSON",0,1,arguments.length),this.toString()},t.prototype.queryObject=function(){return this.queryParams_.getQueryObject()},t.prototype.queryIdentifier=function(){var t=this.queryObject(),e=O(t)
return"{}"===e?"default":e},t.prototype.isEqual=function(e){if(u.validateArgCount("Query.isEqual",1,1,arguments.length),!(e instanceof t))throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")
var n=this.repo===e.repo,r=this.path.equals(e.path),i=this.queryIdentifier()===e.queryIdentifier()
return n&&r&&i},t.getCancelAndContextArgs_=function(t,e,n){var i={cancel:null,context:null}
if(e&&n)i.cancel=e,u.validateCallback(t,3,i.cancel,!0),i.context=n,u.validateContextObject(t,4,i.context,!0)
else if(e)if("object"===r(e)&&null!==e)i.context=e
else{if("function"!=typeof e)throw new Error(u.errorPrefix(t,3,!0)+" must either be a cancel callback or a context object.")
i.cancel=e}return i},Object.defineProperty(t.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),t}(),te=function(){function t(){this.value=null,this.children=new Map}return t.prototype.find=function(t){if(null!=this.value)return this.value.getChild(t)
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
return e.forEachChild(kt,function(t,e){n.remember(new $(t),e)}),this.forget(t)}if(this.children.size>0){var r=t.getFront()
return t=t.popFront(),this.children.has(r)&&this.children.get(r).forget(t)&&this.children.delete(r),0===this.children.size}return!0},t.prototype.forEachTree=function(t,e){null!==this.value?e(t,this.value):this.forEachChild(function(n,r){var i=new $(t.toString()+"/"+n)
r.forEachTree(i,e)})},t.prototype.forEachChild=function(t){this.children.forEach(function(e,n){t(n,e)})},t}(),ee=function(t,e){return t&&"object"===r(t)?(u.assert(".sv"in t,"Unexpected leaf node or priority contents"),e[t[".sv"]]):t},ne=function t(e,n){var r,i=e.getPriority().val(),o=ee(i,n)
if(e.isLeafNode()){var a=e,s=ee(a.getValue(),n)
return s!==a.getValue()||o!==a.getPriority().val()?new Nt(s,Wt(o)):e}var u=e
return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new Nt(o))),u.forEachChild(kt,function(e,i){var o=t(i,n)
o!==i&&(r=r.updateImmediateChild(e,o))}),r}
!function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Kt||(Kt={}))
var re,ie,oe=function(){function t(t,e,n,r){this.fromUser=t,this.fromServer=e,this.queryId=n,this.tagged=r,u.assert(!r||e,"Tagged queries must be from server.")}return t.User=new t(!0,!1,null,!1),t.Server=new t(!1,!0,null,!1),t.forServerTaggedQuery=function(e){return new t(!1,!0,e,!0)},t}(),ae=function(){function t(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Kt.ACK_USER_WRITE,this.source=oe.User}return t.prototype.operationForChild=function(e){if(this.path.isEmpty()){if(null!=this.affectedTree.value)return u.assert(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this
var n=this.affectedTree.subtree(new $(e))
return new t($.Empty,n,this.revert)}return u.assert(this.path.getFront()===e,"operationForChild called for unrelated child."),new t(this.path.popFront(),this.affectedTree,this.revert)},t}(),se=function(){return re||(re=new Pt(R)),re},ue=function(){function t(t,e){void 0===e&&(e=se()),this.value=t,this.children=e}return t.fromObject=function(e){var n=t.Empty
return M(e,function(t,e){n=n.set(new $(t),e)}),n},t.prototype.isEmpty=function(){return null===this.value&&this.children.isEmpty()},t.prototype.findRootMostMatchingPathAndValue=function(t,e){if(null!=this.value&&e(this.value))return{path:$.Empty,value:this.value}
if(t.isEmpty())return null
var n=t.getFront(),r=this.children.get(n)
if(null!==r){var i=r.findRootMostMatchingPathAndValue(t.popFront(),e)
return null!=i?{path:new $(n).child(i.path),value:i.value}:null}return null},t.prototype.findRootMostValueAndPath=function(t){return this.findRootMostMatchingPathAndValue(t,function(){return!0})},t.prototype.subtree=function(e){if(e.isEmpty())return this
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
return r=o.isEmpty()?this.children.remove(i):this.children.insert(i,o),new t(this.value,r)},t.prototype.fold=function(t){return this.fold_($.Empty,t)},t.prototype.fold_=function(t,e){var n={}
return this.children.inorderTraversal(function(r,i){n[r]=i.fold_(t.child(r),e)}),e(t,this.value,n)},t.prototype.findOnPath=function(t,e){return this.findOnPath_(t,$.Empty,e)},t.prototype.findOnPath_=function(t,e,n){var r=!!this.value&&n(e,this.value)
if(r)return r
if(t.isEmpty())return null
var i=t.getFront(),o=this.children.get(i)
return o?o.findOnPath_(t.popFront(),e.child(i),n):null},t.prototype.foreachOnPath=function(t,e){return this.foreachOnPath_(t,$.Empty,e)},t.prototype.foreachOnPath_=function(e,n,r){if(e.isEmpty())return this
this.value&&r(n,this.value)
var i=e.getFront(),o=this.children.get(i)
return o?o.foreachOnPath_(e.popFront(),n.child(i),r):t.Empty},t.prototype.foreach=function(t){this.foreach_($.Empty,t)},t.prototype.foreach_=function(t,e){this.children.inorderTraversal(function(n,r){r.foreach_(t.child(n),e)}),this.value&&e(t,this.value)},t.prototype.foreachChild=function(t){this.children.inorderTraversal(function(e,n){n.value&&t(e,n.value)})},t.Empty=new t(null),t}(),ce=function(){function t(t,e){this.source=t,this.path=e,this.type=Kt.LISTEN_COMPLETE}return t.prototype.operationForChild=function(e){return this.path.isEmpty()?new t(this.source,$.Empty):new t(this.source,this.path.popFront())},t}(),he=function(){function t(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Kt.OVERWRITE}return t.prototype.operationForChild=function(e){return this.path.isEmpty()?new t(this.source,$.Empty,this.snap.getImmediateChild(e)):new t(this.source,this.path.popFront(),this.snap)},t}(),le=function(){function t(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Kt.MERGE}return t.prototype.operationForChild=function(e){if(this.path.isEmpty()){var n=this.children.subtree(new $(e))
return n.isEmpty()?null:n.value?new he(this.source,$.Empty,n.value):new t(this.source,$.Empty,n)}return u.assert(this.path.getFront()===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,this.path.popFront(),this.children)},t.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},t}(),fe=function(){function t(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}return t.prototype.isFullyInitialized=function(){return this.fullyInitialized_},t.prototype.isFiltered=function(){return this.filtered_},t.prototype.isCompleteForPath=function(t){if(t.isEmpty())return this.isFullyInitialized()&&!this.filtered_
var e=t.getFront()
return this.isCompleteForChild(e)},t.prototype.isCompleteForChild=function(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)},t.prototype.getNode=function(){return this.node_},t}(),pe=function(){function t(t,e){this.eventCache_=t,this.serverCache_=e}return t.prototype.updateEventSnap=function(e,n,r){return new t(new fe(e,n,r),this.serverCache_)},t.prototype.updateServerSnap=function(e,n,r){return new t(this.eventCache_,new fe(e,n,r))},t.prototype.getEventCache=function(){return this.eventCache_},t.prototype.getCompleteEventSnap=function(){return this.eventCache_.isFullyInitialized()?this.eventCache_.getNode():null},t.prototype.getServerCache=function(){return this.serverCache_},t.prototype.getCompleteServerSnap=function(){return this.serverCache_.isFullyInitialized()?this.serverCache_.getNode():null},t.Empty=new t(new fe(Vt.EMPTY_NODE,!1,!1),new fe(Vt.EMPTY_NODE,!1,!1)),t}(),de=function(){function t(t,e,n,r,i){this.type=t,this.snapshotNode=e,this.childName=n,this.oldSnap=r,this.prevName=i}return t.valueChange=function(e){return new t(t.VALUE,e)},t.childAddedChange=function(e,n){return new t(t.CHILD_ADDED,n,e)},t.childRemovedChange=function(e,n){return new t(t.CHILD_REMOVED,n,e)},t.childChangedChange=function(e,n,r){return new t(t.CHILD_CHANGED,n,e,r)},t.childMovedChange=function(e,n){return new t(t.CHILD_MOVED,n,e)},t.CHILD_ADDED="child_added",t.CHILD_REMOVED="child_removed",t.CHILD_CHANGED="child_changed",t.CHILD_MOVED="child_moved",t.VALUE="value",t}(),ye=function(){function t(t){this.index_=t}return t.prototype.updateChild=function(t,e,n,r,i,o){u.assert(t.isIndexed(this.index_),"A node must be indexed if only a child is updated")
var a=t.getImmediateChild(e)
return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()==n.isEmpty()?t:(null!=o&&(n.isEmpty()?t.hasChild(e)?o.trackChildChange(de.childRemovedChange(e,a)):u.assert(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(de.childAddedChange(e,n)):o.trackChildChange(de.childChangedChange(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))},t.prototype.updateFullNode=function(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(kt,function(t,r){e.hasChild(t)||n.trackChildChange(de.childRemovedChange(t,r))}),e.isLeafNode()||e.forEachChild(kt,function(e,r){if(t.hasChild(e)){var i=t.getImmediateChild(e)
i.equals(r)||n.trackChildChange(de.childChangedChange(e,r,i))}else n.trackChildChange(de.childAddedChange(e,r))})),e.withIndex(this.index_)},t.prototype.updatePriority=function(t,e){return t.isEmpty()?Vt.EMPTY_NODE:t.updatePriority(e)},t.prototype.filtersNodes=function(){return!1},t.prototype.getIndexedFilter=function(){return this},t.prototype.getIndex=function(){return this.index_},t}(),me=function(){function t(){this.changeMap=new Map}return t.prototype.trackChildChange=function(t){var e=t.type,n=t.childName
u.assert(e==de.CHILD_ADDED||e==de.CHILD_CHANGED||e==de.CHILD_REMOVED,"Only child changes supported for tracking"),u.assert(".priority"!==n,"Only non-priority child changes can be tracked.")
var r=this.changeMap.get(n)
if(r){var i=r.type
if(e==de.CHILD_ADDED&&i==de.CHILD_REMOVED)this.changeMap.set(n,de.childChangedChange(n,t.snapshotNode,r.snapshotNode))
else if(e==de.CHILD_REMOVED&&i==de.CHILD_ADDED)this.changeMap.delete(n)
else if(e==de.CHILD_REMOVED&&i==de.CHILD_CHANGED)this.changeMap.set(n,de.childRemovedChange(n,r.oldSnap))
else if(e==de.CHILD_CHANGED&&i==de.CHILD_ADDED)this.changeMap.set(n,de.childAddedChange(n,t.snapshotNode))
else{if(e!=de.CHILD_CHANGED||i!=de.CHILD_CHANGED)throw u.assertionError("Illegal combination of changes: "+t+" occurred after "+r)
this.changeMap.set(n,de.childChangedChange(n,t.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,t)},t.prototype.getChanges=function(){return Array.from(this.changeMap.values())},t}(),ve=new(function(){function t(){}return t.prototype.getCompleteChild=function(t){return null},t.prototype.getChildAfterChild=function(t,e,n){return null},t}()),ge=function(){function t(t,e,n){void 0===n&&(n=null),this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}return t.prototype.getCompleteChild=function(t){var e=this.viewCache_.getEventCache()
if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t)
var n=null!=this.optCompleteServerCache_?new fe(this.optCompleteServerCache_,!0,!1):this.viewCache_.getServerCache()
return this.writes_.calcCompleteChild(t,n)},t.prototype.getChildAfterChild=function(t,e,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:this.viewCache_.getCompleteServerSnap(),i=this.writes_.calcIndexedSlice(r,e,1,n,t)
return 0===i.length?null:i[0]},t}(),_e=function(t,e){this.viewCache=t,this.changes=e},be=function(){function t(t){this.filter_=t}return t.prototype.assertIndexed=function(t){u.assert(t.getEventCache().getNode().isIndexed(this.filter_.getIndex()),"Event snap not indexed"),u.assert(t.getServerCache().getNode().isIndexed(this.filter_.getIndex()),"Server snap not indexed")},t.prototype.applyOperation=function(e,n,r,i){var o,a,s=new me
if(n.type===Kt.OVERWRITE){var c=n
c.source.fromUser?o=this.applyUserOverwrite_(e,c.path,c.snap,r,i,s):(u.assert(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.getServerCache().isFiltered()&&!c.path.isEmpty(),o=this.applyServerOverwrite_(e,c.path,c.snap,r,i,a,s))}else if(n.type===Kt.MERGE){var h=n
h.source.fromUser?o=this.applyUserMerge_(e,h.path,h.children,r,i,s):(u.assert(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.getServerCache().isFiltered(),o=this.applyServerMerge_(e,h.path,h.children,r,i,a,s))}else if(n.type===Kt.ACK_USER_WRITE){var l=n
o=l.revert?this.revertUserWrite_(e,l.path,r,i,s):this.ackUserWrite_(e,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Kt.LISTEN_COMPLETE)throw u.assertionError("Unknown operation type: "+n.type)
o=this.listenComplete_(e,n.path,r,s)}var f=s.getChanges()
return t.maybeAddValueEvent_(e,o,f),new _e(o,f)},t.maybeAddValueEvent_=function(t,e,n){var r=e.getEventCache()
if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=t.getCompleteEventSnap();(n.length>0||!t.getEventCache().isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(de.valueChange(e.getCompleteEventSnap()))}},t.prototype.generateEventCacheAfterServerEvent_=function(t,e,n,r,i){var o=t.getEventCache()
if(null!=n.shadowingWrite(e))return t
var a=void 0,s=void 0
if(e.isEmpty())if(u.assert(t.getServerCache().isFullyInitialized(),"If change path is empty, we must have complete server data"),t.getServerCache().isFiltered()){var c=t.getCompleteServerSnap(),h=c instanceof Vt?c:Vt.EMPTY_NODE,l=n.calcCompleteEventChildren(h)
a=this.filter_.updateFullNode(t.getEventCache().getNode(),l,i)}else{var f=n.calcCompleteEventCache(t.getCompleteServerSnap())
a=this.filter_.updateFullNode(t.getEventCache().getNode(),f,i)}else{var p=e.getFront()
if(".priority"==p){u.assert(1==e.getLength(),"Can't have a priority with additional path components")
var d=o.getNode()
s=t.getServerCache().getNode()
var y=n.calcEventCacheAfterServerOverwrite(e,d,s)
a=null!=y?this.filter_.updatePriority(d,y):o.getNode()}else{var m=e.popFront(),v=void 0
if(o.isCompleteForChild(p)){s=t.getServerCache().getNode()
var g=n.calcEventCacheAfterServerOverwrite(e,o.getNode(),s)
v=null!=g?o.getNode().getImmediateChild(p).updateChild(m,g):o.getNode().getImmediateChild(p)}else v=n.calcCompleteChild(p,t.getServerCache())
a=null!=v?this.filter_.updateChild(o.getNode(),p,v,m,r,i):o.getNode()}}return t.updateEventSnap(a,o.isFullyInitialized()||e.isEmpty(),this.filter_.filtersNodes())},t.prototype.applyServerOverwrite_=function(t,e,n,r,i,o,a){var s,u=t.getServerCache(),c=o?this.filter_:this.filter_.getIndexedFilter()
if(e.isEmpty())s=c.updateFullNode(u.getNode(),n,null)
else if(c.filtersNodes()&&!u.isFiltered()){var h=u.getNode().updateChild(e,n)
s=c.updateFullNode(u.getNode(),h,null)}else{var l=e.getFront()
if(!u.isCompleteForPath(e)&&e.getLength()>1)return t
var f=e.popFront(),p=u.getNode().getImmediateChild(l).updateChild(f,n)
s=".priority"==l?c.updatePriority(u.getNode(),p):c.updateChild(u.getNode(),l,p,f,ve,null)}var d=t.updateServerSnap(s,u.isFullyInitialized()||e.isEmpty(),c.filtersNodes()),y=new ge(r,d,i)
return this.generateEventCacheAfterServerEvent_(d,e,r,y,a)},t.prototype.applyUserOverwrite_=function(t,e,n,r,i,o){var a,s,u=t.getEventCache(),c=new ge(r,t,i)
if(e.isEmpty())s=this.filter_.updateFullNode(t.getEventCache().getNode(),n,o),a=t.updateEventSnap(s,!0,this.filter_.filtersNodes())
else{var h=e.getFront()
if(".priority"===h)s=this.filter_.updatePriority(t.getEventCache().getNode(),n),a=t.updateEventSnap(s,u.isFullyInitialized(),u.isFiltered())
else{var l=e.popFront(),f=u.getNode().getImmediateChild(h),p=void 0
if(l.isEmpty())p=n
else{var d=c.getCompleteChild(h)
p=null!=d?".priority"===l.getBack()&&d.getChild(l.parent()).isEmpty()?d:d.updateChild(l,n):Vt.EMPTY_NODE}if(f.equals(p))a=t
else{var y=this.filter_.updateChild(u.getNode(),h,p,l,c,o)
a=t.updateEventSnap(y,u.isFullyInitialized(),this.filter_.filtersNodes())}}}return a},t.cacheHasChild_=function(t,e){return t.getEventCache().isCompleteForChild(e)},t.prototype.applyUserMerge_=function(e,n,r,i,o,a){var s=this,u=e
return r.foreach(function(r,c){var h=n.child(r)
t.cacheHasChild_(e,h.getFront())&&(u=s.applyUserOverwrite_(u,h,c,i,o,a))}),r.foreach(function(r,c){var h=n.child(r)
t.cacheHasChild_(e,h.getFront())||(u=s.applyUserOverwrite_(u,h,c,i,o,a))}),u},t.prototype.applyMerge_=function(t,e){return e.foreach(function(e,n){t=t.updateChild(e,n)}),t},t.prototype.applyServerMerge_=function(t,e,n,r,i,o,a){var s=this
if(t.getServerCache().getNode().isEmpty()&&!t.getServerCache().isFullyInitialized())return t
var u,c=t
u=e.isEmpty()?n:ue.Empty.setTree(e,n)
var h=t.getServerCache().getNode()
return u.children.inorderTraversal(function(e,n){if(h.hasChild(e)){var u=t.getServerCache().getNode().getImmediateChild(e),l=s.applyMerge_(u,n)
c=s.applyServerOverwrite_(c,new $(e),l,r,i,o,a)}}),u.children.inorderTraversal(function(e,n){var u=!t.getServerCache().isCompleteForChild(e)&&null==n.value
if(!h.hasChild(e)&&!u){var l=t.getServerCache().getNode().getImmediateChild(e),f=s.applyMerge_(l,n)
c=s.applyServerOverwrite_(c,new $(e),f,r,i,o,a)}}),c},t.prototype.ackUserWrite_=function(t,e,n,r,i,o){if(null!=r.shadowingWrite(e))return t
var a=t.getServerCache().isFiltered(),s=t.getServerCache()
if(null!=n.value){if(e.isEmpty()&&s.isFullyInitialized()||s.isCompleteForPath(e))return this.applyServerOverwrite_(t,e,s.getNode().getChild(e),r,i,a,o)
if(e.isEmpty()){var u=ue.Empty
return s.getNode().forEachChild(St,function(t,e){u=u.set(new $(t),e)}),this.applyServerMerge_(t,e,u,r,i,a,o)}return t}var c=ue.Empty
return n.foreach(function(t,n){var r=e.child(t)
s.isCompleteForPath(r)&&(c=c.set(t,s.getNode().getChild(r)))}),this.applyServerMerge_(t,e,c,r,i,a,o)},t.prototype.listenComplete_=function(t,e,n,r){var i=t.getServerCache(),o=t.updateServerSnap(i.getNode(),i.isFullyInitialized()||e.isEmpty(),i.isFiltered())
return this.generateEventCacheAfterServerEvent_(o,e,n,ve,r)},t.prototype.revertUserWrite_=function(t,e,n,r,i){var o
if(null!=n.shadowingWrite(e))return t
var a=new ge(n,t,r),s=t.getEventCache().getNode(),c=void 0
if(e.isEmpty()||".priority"===e.getFront()){var h=void 0
if(t.getServerCache().isFullyInitialized())h=n.calcCompleteEventCache(t.getCompleteServerSnap())
else{var l=t.getServerCache().getNode()
u.assert(l instanceof Vt,"serverChildren would be complete if leaf node"),h=n.calcCompleteEventChildren(l)}h=h,c=this.filter_.updateFullNode(s,h,i)}else{var f=e.getFront(),p=n.calcCompleteChild(f,t.getServerCache())
null==p&&t.getServerCache().isCompleteForChild(f)&&(p=s.getImmediateChild(f)),(c=null!=p?this.filter_.updateChild(s,f,p,e.popFront(),a,i):t.getEventCache().getNode().hasChild(f)?this.filter_.updateChild(s,f,Vt.EMPTY_NODE,e.popFront(),a,i):s).isEmpty()&&t.getServerCache().isFullyInitialized()&&(o=n.calcCompleteEventCache(t.getCompleteServerSnap())).isLeafNode()&&(c=this.filter_.updateFullNode(c,o,i))}return o=t.getServerCache().isFullyInitialized()||null!=n.shadowingWrite($.Empty),t.updateEventSnap(c,o,this.filter_.filtersNodes())},t}(),we=function(){function t(t){this.query_=t,this.index_=this.query_.getQueryParams().getIndex()}return t.prototype.generateEventsForChanges=function(t,e,n){var r=this,i=[],o=[]
return t.forEach(function(t){t.type===de.CHILD_CHANGED&&r.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(de.childMovedChange(t.childName,t.snapshotNode))}),this.generateEventsForType_(i,de.CHILD_REMOVED,t,n,e),this.generateEventsForType_(i,de.CHILD_ADDED,t,n,e),this.generateEventsForType_(i,de.CHILD_MOVED,o,n,e),this.generateEventsForType_(i,de.CHILD_CHANGED,t,n,e),this.generateEventsForType_(i,de.VALUE,t,n,e),i},t.prototype.generateEventsForType_=function(t,e,n,r,i){var o=this,a=n.filter(function(t){return t.type===e})
a.sort(this.compareChanges_.bind(this)),a.forEach(function(e){var n=o.materializeSingleChange_(e,i)
r.forEach(function(r){r.respondsTo(e.type)&&t.push(r.createEvent(n,o.query_))})})},t.prototype.materializeSingleChange_=function(t,e){return"value"===t.type||"child_removed"===t.type?t:(t.prevName=e.getPredecessorChildName(t.childName,t.snapshotNode,this.index_),t)},t.prototype.compareChanges_=function(t,e){if(null==t.childName||null==e.childName)throw u.assertionError("Should only compare child_ events.")
var n=new wt(t.childName,t.snapshotNode),r=new wt(e.childName,e.snapshotNode)
return this.index_.compare(n,r)},t}(),Ee=function(){function t(t,e){this.query_=t,this.eventRegistrations_=[]
var n=this.query_.getQueryParams(),r=new ye(n.getIndex()),i=n.getNodeFilter()
this.processor_=new be(i)
var o=e.getServerCache(),a=e.getEventCache(),s=r.updateFullNode(Vt.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(Vt.EMPTY_NODE,a.getNode(),null),c=new fe(s,o.isFullyInitialized(),r.filtersNodes()),h=new fe(u,a.isFullyInitialized(),i.filtersNodes())
this.viewCache_=new pe(h,c),this.eventGenerator_=new we(this.query_)}return t.prototype.getQuery=function(){return this.query_},t.prototype.getServerCache=function(){return this.viewCache_.getServerCache().getNode()},t.prototype.getCompleteServerCache=function(t){var e=this.viewCache_.getCompleteServerSnap()
return e&&(this.query_.getQueryParams().loadsAllData()||!t.isEmpty()&&!e.getImmediateChild(t.getFront()).isEmpty())?e.getChild(t):null},t.prototype.isEmpty=function(){return 0===this.eventRegistrations_.length},t.prototype.addEventRegistration=function(t){this.eventRegistrations_.push(t)},t.prototype.removeEventRegistration=function(t,e){var n=[]
if(e){u.assert(null==t,"A cancel should cancel all event registrations.")
var r=this.query_.path
this.eventRegistrations_.forEach(function(t){e=e
var i=t.createCancelEvent(e,r)
i&&n.push(i)})}if(t){for(var i=[],o=0;o<this.eventRegistrations_.length;++o){var a=this.eventRegistrations_[o]
if(a.matches(t)){if(t.hasAnyCallback()){i=i.concat(this.eventRegistrations_.slice(o+1))
break}}else i.push(a)}this.eventRegistrations_=i}else this.eventRegistrations_=[]
return n},t.prototype.applyOperation=function(t,e,n){t.type===Kt.MERGE&&null!==t.source.queryId&&(u.assert(this.viewCache_.getCompleteServerSnap(),"We should always have a full cache before handling merges"),u.assert(this.viewCache_.getCompleteEventSnap(),"Missing event cache, even though we have a server cache"))
var r=this.viewCache_,i=this.processor_.applyOperation(r,t,e,n)
return this.processor_.assertIndexed(i.viewCache),u.assert(i.viewCache.getServerCache().isFullyInitialized()||!r.getServerCache().isFullyInitialized(),"Once a server snap is complete, it should never go back"),this.viewCache_=i.viewCache,this.generateEventsForChanges_(i.changes,i.viewCache.getEventCache().getNode(),null)},t.prototype.getInitialEvents=function(t){var e=this.viewCache_.getEventCache(),n=[]
return e.getNode().isLeafNode()||e.getNode().forEachChild(kt,function(t,e){n.push(de.childAddedChange(t,e))}),e.isFullyInitialized()&&n.push(de.valueChange(e.getNode())),this.generateEventsForChanges_(n,e.getNode(),t)},t.prototype.generateEventsForChanges_=function(t,e,n){var r=n?[n]:this.eventRegistrations_
return this.eventGenerator_.generateEventsForChanges(t,e,r)},t}(),Te=function(){function t(){this.views=new Map}return Object.defineProperty(t,"__referenceConstructor",{get:function(){return u.assert(ie,"Reference.ts has not been loaded"),ie},set:function(t){u.assert(!ie,"__referenceConstructor has already been defined"),ie=t},enumerable:!0,configurable:!0}),t.prototype.isEmpty=function(){return 0===this.views.size},t.prototype.applyOperation=function(t,e,n){var r,i,o=t.source.queryId
if(null!==o){var a=this.views.get(o)
return u.assert(null!=a,"SyncTree gave us an op for an invalid query."),a.applyOperation(t,e,n)}var c=[]
try{for(var h=s.__values(this.views.values()),l=h.next();!l.done;l=h.next())a=l.value,c=c.concat(a.applyOperation(t,e,n))}catch(t){r={error:t}}finally{try{l&&!l.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}return c},t.prototype.addEventRegistration=function(t,e,n,r,i){var o=t.queryIdentifier(),a=this.views.get(o)
if(!a){var s=n.calcCompleteEventCache(i?r:null),u=!1
s?u=!0:r instanceof Vt?(s=n.calcCompleteEventChildren(r),u=!1):(s=Vt.EMPTY_NODE,u=!1)
var c=new pe(new fe(s,u,!1),new fe(r,i,!1))
a=new Ee(t,c),this.views.set(o,a)}return a.addEventRegistration(e),a.getInitialEvents(e)},t.prototype.removeEventRegistration=function(e,n,r){var i,o,a=e.queryIdentifier(),u=[],c=[],h=this.hasCompleteView()
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
if(i.getQuery().getQueryParams().loadsAllData())return i}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}return null},t}(),Se=function(){function t(t){this.writeTree_=t}return t.prototype.addWrite=function(e,n){if(e.isEmpty())return new t(new ue(n))
var r=this.writeTree_.findRootMostValueAndPath(e)
if(null!=r){var i=r.path,o=r.value,a=$.relativePath(i,e)
return o=o.updateChild(a,n),new t(this.writeTree_.set(i,o))}var s=new ue(n)
return new t(this.writeTree_.setTree(e,s))},t.prototype.addWrites=function(t,e){var n=this
return M(e,function(e,r){n=n.addWrite(t.child(e),r)}),n},t.prototype.removeWrite=function(e){return e.isEmpty()?t.Empty:new t(this.writeTree_.setTree(e,ue.Empty))},t.prototype.hasCompleteWrite=function(t){return null!=this.getCompleteNode(t)},t.prototype.getCompleteNode=function(t){var e=this.writeTree_.findRootMostValueAndPath(t)
return null!=e?this.writeTree_.get(e.path).getChild($.relativePath(e.path,t)):null},t.prototype.getCompleteChildren=function(){var t=[],e=this.writeTree_.value
return null!=e?e.isLeafNode()||e.forEachChild(kt,function(e,n){t.push(new wt(e,n))}):this.writeTree_.children.inorderTraversal(function(e,n){null!=n.value&&t.push(new wt(e,n.value))}),t},t.prototype.childCompoundWrite=function(e){if(e.isEmpty())return this
var n=this.getCompleteNode(e)
return new t(null!=n?new ue(n):this.writeTree_.subtree(e))},t.prototype.isEmpty=function(){return this.writeTree_.isEmpty()},t.prototype.apply=function(t){return function t(e,n,r){if(null!=n.value)return r.updateChild(e,n.value)
var i=null
return n.children.inorderTraversal(function(n,o){".priority"===n?(u.assert(null!==o.value,"Priority writes must always be leaf nodes"),i=o.value):r=t(e.child(n),o,r)}),r.getChild(e).isEmpty()||null===i||(r=r.updateChild(e.child(".priority"),i)),r}($.Empty,this.writeTree_,t)},t.Empty=new t(new ue(null)),t}(),Ie=function(){function t(){this.visibleWrites_=Se.Empty,this.allWrites_=[],this.lastWriteId_=-1}return t.prototype.childWrites=function(t){return new Ce(t,this)},t.prototype.addOverwrite=function(t,e,n,r){u.assert(n>this.lastWriteId_,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),this.allWrites_.push({path:t,snap:e,writeId:n,visible:r}),r&&(this.visibleWrites_=this.visibleWrites_.addWrite(t,e)),this.lastWriteId_=n},t.prototype.addMerge=function(t,e,n){u.assert(n>this.lastWriteId_,"Stacking an older merge on top of newer ones"),this.allWrites_.push({path:t,children:e,writeId:n,visible:!0}),this.visibleWrites_=this.visibleWrites_.addWrites(t,e),this.lastWriteId_=n},t.prototype.getWrite=function(t){for(var e=0;e<this.allWrites_.length;e++){var n=this.allWrites_[e]
if(n.writeId===t)return n}return null},t.prototype.removeWrite=function(t){var e=this,n=this.allWrites_.findIndex(function(e){return e.writeId===t})
u.assert(n>=0,"removeWrite called with nonexistent writeId.")
var r=this.allWrites_[n]
this.allWrites_.splice(n,1)
for(var i=r.visible,o=!1,a=this.allWrites_.length-1;i&&a>=0;){var s=this.allWrites_[a]
s.visible&&(a>=n&&this.recordContainsPath_(s,r.path)?i=!1:r.path.contains(s.path)&&(o=!0)),a--}return!!i&&(o?(this.resetTree_(),!0):(r.snap?this.visibleWrites_=this.visibleWrites_.removeWrite(r.path):M(r.children,function(t){e.visibleWrites_=e.visibleWrites_.removeWrite(r.path.child(t))}),!0))},t.prototype.getCompleteWriteData=function(t){return this.visibleWrites_.getCompleteNode(t)},t.prototype.calcCompleteEventCache=function(e,n,r,i){if(r||i){var o=this.visibleWrites_.childCompoundWrite(e)
if(!i&&o.isEmpty())return n
if(i||null!=n||o.hasCompleteWrite($.Empty)){var a=t.layerTree_(this.allWrites_,function(t){return(t.visible||i)&&(!r||!~r.indexOf(t.writeId))&&(t.path.contains(e)||e.contains(t.path))},e)
return c=n||Vt.EMPTY_NODE,a.apply(c)}return null}var s=this.visibleWrites_.getCompleteNode(e)
if(null!=s)return s
var u=this.visibleWrites_.childCompoundWrite(e)
if(u.isEmpty())return n
if(null!=n||u.hasCompleteWrite($.Empty)){var c=n||Vt.EMPTY_NODE
return u.apply(c)}return null},t.prototype.calcCompleteEventChildren=function(t,e){var n=Vt.EMPTY_NODE,r=this.visibleWrites_.getCompleteNode(t)
if(r)return r.isLeafNode()||r.forEachChild(kt,function(t,e){n=n.updateImmediateChild(t,e)}),n
if(e){var i=this.visibleWrites_.childCompoundWrite(t)
return e.forEachChild(kt,function(t,e){var r=i.childCompoundWrite(new $(t)).apply(e)
n=n.updateImmediateChild(t,r)}),i.getCompleteChildren().forEach(function(t){n=n.updateImmediateChild(t.name,t.node)}),n}return this.visibleWrites_.childCompoundWrite(t).getCompleteChildren().forEach(function(t){n=n.updateImmediateChild(t.name,t.node)}),n},t.prototype.calcEventCacheAfterServerOverwrite=function(t,e,n,r){u.assert(n||r,"Either existingEventSnap or existingServerSnap must exist")
var i=t.child(e)
if(this.visibleWrites_.hasCompleteWrite(i))return null
var o=this.visibleWrites_.childCompoundWrite(i)
return o.isEmpty()?r.getChild(e):o.apply(r.getChild(e))},t.prototype.calcCompleteChild=function(t,e,n){var r=t.child(e),i=this.visibleWrites_.getCompleteNode(r)
return null!=i?i:n.isCompleteForChild(e)?this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(e)):null},t.prototype.shadowingWrite=function(t){return this.visibleWrites_.getCompleteNode(t)},t.prototype.calcIndexedSlice=function(t,e,n,r,i,o){var a,s=this.visibleWrites_.childCompoundWrite(t),u=s.getCompleteNode($.Empty)
if(null!=u)a=u
else{if(null==e)return[]
a=s.apply(e)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[]
for(var c=[],h=o.getCompare(),l=i?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o),f=l.getNext();f&&c.length<r;)0!==h(f,n)&&c.push(f),f=l.getNext()
return c},t.prototype.recordContainsPath_=function(t,e){if(t.snap)return t.path.contains(e)
for(var n in t.children)if(t.children.hasOwnProperty(n)&&t.path.child(n).contains(e))return!0
return!1},t.prototype.resetTree_=function(){this.visibleWrites_=t.layerTree_(this.allWrites_,t.DefaultFilter_,$.Empty),this.allWrites_.length>0?this.lastWriteId_=this.allWrites_[this.allWrites_.length-1].writeId:this.lastWriteId_=-1},t.DefaultFilter_=function(t){return t.visible},t.layerTree_=function(t,e,n){for(var r=Se.Empty,i=0;i<t.length;++i){var o=t[i]
if(e(o)){var a=o.path,s=void 0
if(o.snap)n.contains(a)?(s=$.relativePath(n,a),r=r.addWrite(s,o.snap)):a.contains(n)&&(s=$.relativePath(a,n),r=r.addWrite($.Empty,o.snap.getChild(s)))
else{if(!o.children)throw u.assertionError("WriteRecord should have .snap or .children")
if(n.contains(a))s=$.relativePath(n,a),r=r.addWrites(s,o.children)
else if(a.contains(n))if((s=$.relativePath(a,n)).isEmpty())r=r.addWrites($.Empty,o.children)
else{var c=u.safeGet(o.children,s.getFront())
if(c){var h=c.getChild(s.popFront())
r=r.addWrite($.Empty,h)}}}}}return r},t}(),Ce=function(){function t(t,e){this.treePath_=t,this.writeTree_=e}return t.prototype.calcCompleteEventCache=function(t,e,n){return this.writeTree_.calcCompleteEventCache(this.treePath_,t,e,n)},t.prototype.calcCompleteEventChildren=function(t){return this.writeTree_.calcCompleteEventChildren(this.treePath_,t)},t.prototype.calcEventCacheAfterServerOverwrite=function(t,e,n){return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_,t,e,n)},t.prototype.shadowingWrite=function(t){return this.writeTree_.shadowingWrite(this.treePath_.child(t))},t.prototype.calcIndexedSlice=function(t,e,n,r,i){return this.writeTree_.calcIndexedSlice(this.treePath_,t,e,n,r,i)},t.prototype.calcCompleteChild=function(t,e){return this.writeTree_.calcCompleteChild(this.treePath_,t,e)},t.prototype.child=function(e){return new t(this.treePath_.child(e),this.writeTree_)},t}(),Ne=function(){function t(t){this.listenProvider_=t,this.syncPointTree_=ue.Empty,this.pendingWriteTree_=new Ie,this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return t.prototype.applyUserOverwrite=function(t,e,n,r){return this.pendingWriteTree_.addOverwrite(t,e,n,r),r?this.applyOperationToSyncPoints_(new he(oe.User,t,e)):[]},t.prototype.applyUserMerge=function(t,e,n){this.pendingWriteTree_.addMerge(t,e,n)
var r=ue.fromObject(e)
return this.applyOperationToSyncPoints_(new le(oe.User,t,r))},t.prototype.ackUserWrite=function(t,e){void 0===e&&(e=!1)
var n=this.pendingWriteTree_.getWrite(t)
if(this.pendingWriteTree_.removeWrite(t)){var r=ue.Empty
return null!=n.snap?r=r.set($.Empty,!0):M(n.children,function(t,e){r=r.set(new $(t),e)}),this.applyOperationToSyncPoints_(new ae(n.path,r,e))}return[]},t.prototype.applyServerOverwrite=function(t,e){return this.applyOperationToSyncPoints_(new he(oe.Server,t,e))},t.prototype.applyServerMerge=function(t,e){var n=ue.fromObject(e)
return this.applyOperationToSyncPoints_(new le(oe.Server,t,n))},t.prototype.applyListenComplete=function(t){return this.applyOperationToSyncPoints_(new ce(oe.Server,t))},t.prototype.applyTaggedQueryOverwrite=function(e,n,r){var i=this.queryKeyForTag_(r)
if(null!=i){var o=t.parseQueryKey_(i),a=o.path,s=o.queryId,u=$.relativePath(a,e),c=new he(oe.forServerTaggedQuery(s),u,n)
return this.applyTaggedOperation_(a,c)}return[]},t.prototype.applyTaggedQueryMerge=function(e,n,r){var i=this.queryKeyForTag_(r)
if(i){var o=t.parseQueryKey_(i),a=o.path,s=o.queryId,u=$.relativePath(a,e),c=ue.fromObject(n),h=new le(oe.forServerTaggedQuery(s),u,c)
return this.applyTaggedOperation_(a,h)}return[]},t.prototype.applyTaggedListenComplete=function(e,n){var r=this.queryKeyForTag_(n)
if(r){var i=t.parseQueryKey_(r),o=i.path,a=i.queryId,s=$.relativePath(o,e),u=new ce(oe.forServerTaggedQuery(a),s)
return this.applyTaggedOperation_(o,u)}return[]},t.prototype.addEventRegistration=function(e,n){var r=e.path,i=null,o=!1
this.syncPointTree_.foreachOnPath(r,function(t,e){var n=$.relativePath(t,r)
i=i||e.getCompleteServerCache(n),o=o||e.hasCompleteView()})
var a,s=this.syncPointTree_.get(r)
s?(o=o||s.hasCompleteView(),i=i||s.getCompleteServerCache($.Empty)):(s=new Te,this.syncPointTree_=this.syncPointTree_.set(r,s)),null!=i?a=!0:(a=!1,i=Vt.EMPTY_NODE,this.syncPointTree_.subtree(r).foreachChild(function(t,e){var n=e.getCompleteServerCache($.Empty)
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
if(!f.isEmpty())for(var p=this.collectDistinctViewsForSubTree_(f),d=0;d<p.length;++d){var y=p[d],m=y.getQuery(),v=this.createListenerForView_(y)
this.listenProvider_.startListening(t.queryForListening_(m),this.tagForQuery_(m),v.hashFn,v.onComplete)}}!l&&c.length>0&&!r&&(h?this.listenProvider_.stopListening(t.queryForListening_(e),null):c.forEach(function(e){var n=i.queryToTagMap.get(t.makeQueryKey_(e))
i.listenProvider_.stopListening(t.queryForListening_(e),n)})),this.removeTags_(c)}return s},t.prototype.calcCompleteEventCache=function(t,e){var n=this.pendingWriteTree_,r=this.syncPointTree_.findOnPath(t,function(e,n){var r=$.relativePath(e,t),i=n.getCompleteServerCache(r)
if(i)return i})
return n.calcCompleteEventCache(t,r,e,!0)},t.prototype.collectDistinctViewsForSubTree_=function(t){return t.fold(function(t,e,n){if(e&&e.hasCompleteView())return[e.getCompleteView()]
var r=[]
return e&&(r=e.getQueryViews()),M(n,function(t,e){r=r.concat(e)}),r})},t.prototype.removeTags_=function(e){for(var n=0;n<e.length;++n){var r=e[n]
if(!r.getQueryParams().loadsAllData()){var i=t.makeQueryKey_(r),o=this.queryToTagMap.get(i)
this.queryToTagMap.delete(i),this.tagToQueryMap.delete(o)}}},t.queryForListening_=function(t){return t.getQueryParams().loadsAllData()&&!t.getQueryParams().isDefault()?t.getRef():t},t.prototype.setupListener_=function(e,n){var r=e.path,i=this.tagForQuery_(e),o=this.createListenerForView_(n),a=this.listenProvider_.startListening(t.queryForListening_(e),i,o.hashFn,o.onComplete),s=this.syncPointTree_.subtree(r)
if(i)u.assert(!s.value.hasCompleteView(),"If we're adding a query, it shouldn't be shadowed")
else for(var c=s.fold(function(t,e,n){if(!t.isEmpty()&&e&&e.hasCompleteView())return[e.getCompleteView().getQuery()]
var r=[]
return e&&(r=r.concat(e.getQueryViews().map(function(t){return t.getQuery()}))),M(n,function(t,e){r=r.concat(e)}),r}),h=0;h<c.length;++h){var l=c[h]
this.listenProvider_.stopListening(t.queryForListening_(l),this.tagForQuery_(l))}return a},t.prototype.createListenerForView_=function(t){var e=this,n=t.getQuery(),r=this.tagForQuery_(n)
return{hashFn:function(){return(t.getServerCache()||Vt.EMPTY_NODE).hash()},onComplete:function(t){if("ok"===t)return r?e.applyTaggedListenComplete(n.path,r):e.applyListenComplete(n.path)
var i=function(t,e){var n="Unknown Error"
"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==t?n="Client doesn't have permission to access the desired data.":"unavailable"==t&&(n="The service is unavailable")
var r=new Error(t+" at "+e.path.toString()+": "+n)
return r.code=t.toUpperCase(),r}(t,n)
return e.removeEventRegistration(n,null,i)}}},t.makeQueryKey_=function(t){return t.path.toString()+"$"+t.queryIdentifier()},t.parseQueryKey_=function(t){var e=t.indexOf("$")
return u.assert(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}},t.prototype.queryKeyForTag_=function(t){return this.tagToQueryMap.get(t)},t.prototype.tagForQuery_=function(e){var n=t.makeQueryKey_(e)
return this.queryToTagMap.get(n)},t.getNextQueryTag_=function(){return t.nextQueryTag_++},t.prototype.applyTaggedOperation_=function(t,e){var n=this.syncPointTree_.get(t)
u.assert(n,"Missing sync point for query tag that we're tracking")
var r=this.pendingWriteTree_.childWrites(t)
return n.applyOperation(e,r,null)},t.prototype.applyOperationToSyncPoints_=function(t){return this.applyOperationHelper_(t,this.syncPointTree_,null,this.pendingWriteTree_.childWrites($.Empty))},t.prototype.applyOperationHelper_=function(t,e,n,r){if(t.path.isEmpty())return this.applyOperationDescendantsHelper_(t,e,n,r)
var i=e.get($.Empty)
null==n&&null!=i&&(n=i.getCompleteServerCache($.Empty))
var o=[],a=t.path.getFront(),s=t.operationForChild(a),u=e.children.get(a)
if(u&&s){var c=n?n.getImmediateChild(a):null,h=r.child(a)
o=o.concat(this.applyOperationHelper_(s,u,c,h))}return i&&(o=o.concat(i.applyOperation(t,r,n))),o},t.prototype.applyOperationDescendantsHelper_=function(t,e,n,r){var i=this,o=e.get($.Empty)
null==n&&null!=o&&(n=o.getCompleteServerCache($.Empty))
var a=[]
return e.children.inorderTraversal(function(e,o){var s=n?n.getImmediateChild(e):null,u=r.child(e),c=t.operationForChild(e)
c&&(a=a.concat(i.applyOperationDescendantsHelper_(c,o,s,u)))}),o&&(a=a.concat(o.applyOperation(t,r,n))),a},t.nextQueryTag_=1,t}(),ke=function(){function t(){this.rootNode_=Vt.EMPTY_NODE}return t.prototype.getNode=function(t){return this.rootNode_.getChild(t)},t.prototype.updateSnapshot=function(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)},t}(),Ae=function(){function t(t){this.app_=t}return t.prototype.getToken=function(t){return this.app_.INTERNAL.getToken(t).then(null,function(t){return t&&"auth/token-not-initialized"===t.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)})},t.prototype.addTokenChangeListener=function(t){this.app_.INTERNAL.addAuthTokenListener(t)},t.prototype.removeTokenChangeListener=function(t){this.app_.INTERNAL.removeAuthTokenListener(t)},t.prototype.notifyForInvalidToken=function(){var t='Provided authentication credentials for the app named "'+this.app_.name+'" are invalid. This usually indicates your app was not initialized correctly. '
"credential"in this.app_.options?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.app_.options?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',C(t)},t}(),De=function(){function t(){this.counters_={}}return t.prototype.incrementCounter=function(t,e){void 0===e&&(e=1),u.contains(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e},t.prototype.get=function(){return u.deepCopy(this.counters_)},t}(),Re=function(){function t(){}return t.getCollection=function(t){var e=t.toString()
return this.collections_[e]||(this.collections_[e]=new De),this.collections_[e]},t.getOrCreateReporter=function(t,e){var n=t.toString()
return this.reporters_[n]||(this.reporters_[n]=e()),this.reporters_[n]},t.collections_={},t.reporters_={},t}(),Pe=function(){function t(t){this.collection_=t,this.last_=null}return t.prototype.get=function(){var t=this.collection_.get(),e=s.__assign({},t)
return this.last_&&M(this.last_,function(t,n){e[t]=e[t]-n}),this.last_=t,e},t}(),Oe=1e4,xe=3e4,Me=function(){function t(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Pe(t)
var n=Oe+(xe-Oe)*Math.random()
J(this.reportStats_.bind(this),Math.floor(n))}return t.prototype.includeStat=function(t){this.statsToReport_[t]=!0},t.prototype.reportStats_=function(){var t=this,e=this.statsListener_.get(),n={},r=!1
M(e,function(e,i){i>0&&u.contains(t.statsToReport_,e)&&(n[e]=i,r=!0)}),r&&this.server_.reportStats(n),J(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))},t}(),Le=function(){function t(){this.eventLists_=[],this.recursionDepth_=0}return t.prototype.queueEvents=function(t){for(var e=null,n=0;n<t.length;n++){var r=t[n],i=r.getPath()
null===e||i.equals(e.getPath())||(this.eventLists_.push(e),e=null),null===e&&(e=new Fe(i)),e.add(r)}e&&this.eventLists_.push(e)},t.prototype.raiseEventsAtPath=function(t,e){this.queueEvents(e),this.raiseQueuedEventsMatchingPredicate_(function(e){return e.equals(t)})},t.prototype.raiseEventsForChangedPath=function(t,e){this.queueEvents(e),this.raiseQueuedEventsMatchingPredicate_(function(e){return e.contains(t)||t.contains(e)})},t.prototype.raiseQueuedEventsMatchingPredicate_=function(t){this.recursionDepth_++
for(var e=!0,n=0;n<this.eventLists_.length;n++){var r=this.eventLists_[n]
r&&(t(r.getPath())?(this.eventLists_[n].raise(),this.eventLists_[n]=null):e=!1)}e&&(this.eventLists_=[]),this.recursionDepth_--},t}(),Fe=function(){function t(t){this.path_=t,this.events_=[]}return t.prototype.add=function(t){this.events_.push(t)},t.prototype.raise=function(){for(var t=0;t<this.events_.length;t++){var e=this.events_[t]
if(null!==e){this.events_[t]=null
var n=e.getEventRunner()
_&&E("event: "+e.toString()),Y(n)}}},t.prototype.getPath=function(){return this.path_},t}(),Ue=function(){function t(t){this.allowedEvents_=t,this.listeners_={},u.assert(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}return t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(Array.isArray(this.listeners_[t]))for(var r=s.__spread(this.listeners_[t]),i=0;i<r.length;i++)r[i].callback.apply(r[i].context,e)},t.prototype.on=function(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n})
var r=this.getInitialEvent(t)
r&&e.apply(n,r)},t.prototype.off=function(t,e,n){this.validateEventType_(t)
for(var r=this.listeners_[t]||[],i=0;i<r.length;i++)if(r[i].callback===e&&(!n||n===r[i].context))return void r.splice(i,1)},t.prototype.validateEventType_=function(t){u.assert(this.allowedEvents_.find(function(e){return e===t}),"Unknown event: "+t)},t}(),qe=function(t){function e(){var e,n,r=t.call(this,["visible"])||this
return"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(n="visibilitychange",e="hidden"):void 0!==document.mozHidden?(n="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(n="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(n="webkitvisibilitychange",e="webkitHidden")),r.visible_=!0,n&&document.addEventListener(n,function(){var t=!document[e]
t!==r.visible_&&(r.visible_=t,r.trigger("visible",t))},!1),r}return s.__extends(e,t),e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(t){return u.assert("visible"===t,"Unknown event type: "+t),[this.visible_]},e}(Ue),Ve=function(t){function e(){var e=t.call(this,["online"])||this
return e.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||u.isMobileCordova()||(window.addEventListener("online",function(){e.online_||(e.online_=!0,e.trigger("online",!0))},!1),window.addEventListener("offline",function(){e.online_&&(e.online_=!1,e.trigger("online",!1))},!1)),e}return s.__extends(e,t),e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(t){return u.assert("online"===t,"Unknown event type: "+t),[this.online_]},e.prototype.currentlyOnline=function(){return this.online_},e}(Ue),Be=function(){function t(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return t.prototype.closeAfter=function(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},t.prototype.handleResponse=function(t,e){var n=this
this.pendingResponses[t]=e
for(var r=function(){var t=i.pendingResponses[i.currentResponseNum]
delete i.pendingResponses[i.currentResponseNum]
for(var e=function(e){t[e]&&Y(function(){n.onMessage_(t[e])})},r=0;r<t.length;++r)e(r)
if(i.currentResponseNum===i.closeAfterResponse)return i.onClose&&(i.onClose(),i.onClose=null),"break"
i.currentResponseNum++},i=this;this.pendingResponses[this.currentResponseNum]&&"break"!==r(););},t}(),je="pLPCommand",We="pRTLPCB",Qe=function(){function t(t,e,n,r){this.connId=t,this.repoInfo=e,this.transportSessionId=n,this.lastSessionId=r,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(t),this.stats_=Re.getCollection(e),this.urlFn=function(t){return e.connectionURL(tt,t)}}return t.prototype.open=function(t,e){var n=this
this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new Be(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){n.log_("Timed out trying to connect."),n.onClosed_(),n.connectTimeoutTimer_=null},Math.floor(3e4)),function(t){if(u.isNodeSdk()||"complete"===document.readyState)t()
else{var e=!1,n=function n(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))}
document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}}(function(){if(!n.isClosed_){n.scriptTagHolder=new Ke(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
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
for(var n=u.base64Encode(e),r=x(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++},t.prototype.addDisconnectPingFrame=function(t,e){if(!u.isNodeSdk()){this.myDisconnFrame=document.createElement("iframe")
var n={dframe:"t"}
n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}},t.prototype.incrementIncomingBytes_=function(t){var e=u.stringify(t).length
this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)},t}(),Ke=function(){function t(e,n,r,i){if(this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,u.isNodeSdk())this.commandCB=e,this.onMessageCB=n
else{this.uniqueCallbackIdentifier=m(),window[je+this.uniqueCallbackIdentifier]=e,window[We+this.uniqueCallbackIdentifier]=n,this.myIFrame=t.createIFrame_()
var o=""
this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)&&(o='<script>document.domain="'+document.domain+'";<\/script>')
var a="<html><body>"+o+"</body></html>"
try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(t){E("frame writing exception"),t.stack&&E(t.stack),E(t)}}}return t.createIFrame_=function(){var t=document.createElement("iframe")
if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready."
document.body.appendChild(t)
try{t.contentWindow.document||E("No IE domain setting required")}catch(n){var e=document.domain
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
t&&"loaded"!==t&&"complete"!==t||(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),e())},r.onerror=function(){E("Long-poll script failed to load: "+t),n.sendNewPolls=!1,n.close()},n.myIFrame.doc.body.appendChild(r)}catch(t){}},Math.floor(1))},t}(),Ge="",He=null
"undefined"!=typeof MozWebSocket?He=MozWebSocket:"undefined"!=typeof WebSocket&&(He=WebSocket)
var ze=function(){function t(e,n,r,i){this.connId=e,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=Re.getCollection(n),this.connURL=t.connectionURL_(n,r,i)}return t.connectionURL_=function(t,e,n){var r={v:"5"}
return!u.isNodeSdk()&&"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(r.r="f"),e&&(r.s=e),n&&(r.ls=n),t.connectionURL("websocket",r)},t.prototype.open=function(t,e){var n=this
this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0)
try{if(u.isNodeSdk()){var r=u.CONSTANTS.NODE_ADMIN?"AdminNode":"Node",i={headers:{"User-Agent":"Firebase/5/"+Ge+"/"+process.platform+"/"+r}},o=process.env,a=0==this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy
a&&(i.proxy={origin:a}),this.mySock=new He(this.connURL,[],i)}else this.mySock=new He(this.connURL)}catch(t){this.log_("Error instantiating WebSocket.")
var s=t.message||t.data
return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(t){n.handleIncomingFrame(t)},this.mySock.onerror=function(t){n.log_("WebSocket error.  Closing connection.")
var e=t.message||t.data
e&&n.log_(e),n.onClosed_()}},t.prototype.start=function(){},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){var e=!1
if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/)
n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==He&&!t.forceDisallow_},t.previouslyFailed=function(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")},t.prototype.markConnectionHealthy=function(){p.remove("previous_websocket_failure")},t.prototype.appendFrame_=function(t){if(this.frames.push(t),this.frames.length==this.totalFrames){var e=this.frames.join("")
this.frames=null
var n=u.jsonEval(e)
this.onMessage(n)}},t.prototype.handleNewFrameCount_=function(t){this.totalFrames=t,this.frames=[]},t.prototype.extractFrameCount_=function(t){if(u.assert(null===this.frames,"We already have a frame buffer"),t.length<=6){var e=Number(t)
if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t},t.prototype.handleIncomingFrame=function(t){if(null!==this.mySock){var e=t.data
if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e)
else{var n=this.extractFrameCount_(e)
null!==n&&this.appendFrame_(n)}}},t.prototype.send=function(t){this.resetKeepAlive()
var e=u.stringify(t)
this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length)
var n=x(e,16384)
n.length>1&&this.sendString_(String(n.length))
for(var r=0;r<n.length;r++)this.sendString_(n[r])},t.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},t.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},t.prototype.resetKeepAlive=function(){var t=this
clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){t.mySock&&t.sendString_("0"),t.resetKeepAlive()},Math.floor(45e3))},t.prototype.sendString_=function(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},t.responsesRequiredToBeHealthy=2,t.healthyTimeout=3e4,t}(),Ye=function(){function t(t){this.initTransports_(t)}return Object.defineProperty(t,"ALL_TRANSPORTS",{get:function(){return[Qe,ze]},enumerable:!0,configurable:!0}),t.prototype.initTransports_=function(e){var n,r,i=ze&&ze.isAvailable(),o=i&&!ze.previouslyFailed()
if(e.webSocketOnly&&(i||C("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[ze]
else{var a=this.transports_=[]
try{for(var u=s.__values(t.ALL_TRANSPORTS),c=u.next();!c.done;c=u.next()){var h=c.value
h&&h.isAvailable()&&a.push(h)}}catch(t){n={error:t}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}}},t.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0]
throw new Error("No transports available")},t.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},t}(),Xe=function(){function t(t,e,n,r,i,o,a){this.id=t,this.repoInfo_=e,this.onMessage_=n,this.onReady_=r,this.onDisconnect_=i,this.onKill_=o,this.lastSessionId=a,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new Ye(e),this.log_("Connection created"),this.start_()}return t.prototype.start_=function(){var t=this,e=this.transportManager_.initialTransport()
this.conn_=new e(this.nextTransportId_(),this.repoInfo_,void 0,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0
var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_)
this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){t.conn_&&t.conn_.open(n,r)},Math.floor(0))
var i=e.healthyTimeout||0
i>0&&(this.healthyTimeout_=J(function(){t.healthyTimeout_=null,t.isHealthy_||(t.conn_&&t.conn_.bytesReceived>102400?(t.log_("Connection exceeded healthy timeout but has received "+t.conn_.bytesReceived+" bytes.  Marking connection healthy."),t.isHealthy_=!0,t.conn_.markConnectionHealthy()):t.conn_&&t.conn_.bytesSent>10240?t.log_("Connection exceeded healthy timeout but has sent "+t.conn_.bytesSent+" bytes.  Leaving connection alive."):(t.log_("Closing unhealthy connection after timeout."),t.close()))},Math.floor(i)))},t.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},t.prototype.disconnReceiver_=function(t){var e=this
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
this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?S("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+e)}},t.prototype.onHandshake_=function(t){var e=t.ts,n=t.v,r=t.h
this.sessionId=t.s,this.repoInfo_.updateHost(r),0==this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==n&&C("Protocol version mismatch detected"),this.tryStartUpgrade_())},t.prototype.tryStartUpgrade_=function(){var t=this.transportManager_.upgradeTransport()
t&&this.startUpgrade_(t)},t.prototype.startUpgrade_=function(t){var e=this
this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0
var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_)
this.secondaryConn_.open(n,r),J(function(){e.secondaryConn_&&(e.log_("Timed out trying to upgrade."),e.secondaryConn_.close())},Math.floor(6e4))},t.prototype.onReset_=function(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.updateHost(t),1===this.state_?this.close():(this.closeConnections_(),this.start_())},t.prototype.onConnectionEstablished_=function(t,e){var n=this
this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):J(function(){n.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))},t.prototype.sendPingOnPrimaryIfNecessary_=function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))},t.prototype.onSecondaryConnectionLost_=function(){var t=this.secondaryConn_
this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()},t.prototype.onConnectionLost_=function(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()},t.prototype.onConnectionShutdown_=function(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()},t.prototype.sendData_=function(t){if(1!==this.state_)throw"Connection is not connected"
this.tx_.send(t)},t.prototype.close=function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},t.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},t}(),Je=function(){function t(){}return t.prototype.put=function(t,e,n,r){},t.prototype.merge=function(t,e,n,r){},t.prototype.refreshAuthToken=function(t){},t.prototype.onDisconnectPut=function(t,e,n){},t.prototype.onDisconnectMerge=function(t,e,n){},t.prototype.onDisconnectCancel=function(t,e){},t.prototype.reportStats=function(t){},t}(),$e=1e3,Ze=3e5,tn=function(t){function e(n,r,i,o,a,s){var c=t.call(this)||this
if(c.repoInfo_=n,c.onDataUpdate_=r,c.onConnectStatus_=i,c.onServerInfoUpdate_=o,c.authTokenProvider_=a,c.authOverride_=s,c.id=e.nextPersistentConnectionId_++,c.log_=T("p:"+c.id+":"),c.interruptReasons_={},c.listens=new Map,c.outstandingPuts_=[],c.outstandingPutCount_=0,c.onDisconnectRequestQueue_=[],c.connected_=!1,c.reconnectDelay_=$e,c.maxReconnectDelay_=Ze,c.securityDebugCallback_=null,c.lastSessionId=null,c.establishConnectionTimer_=null,c.visible_=!1,c.requestCBHash_={},c.requestNumber_=0,c.realtime_=null,c.authToken_=null,c.forceTokenRefresh_=!1,c.invalidAuthTokenCount_=0,c.firstConnection_=!0,c.lastConnectionAttemptTime_=null,c.lastConnectionEstablishedTime_=null,s&&!u.isNodeSdk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms")
return c.scheduleConnect_(0),qe.getInstance().on("visible",c.onVisible_,c),-1===n.host.indexOf("fblocal")&&Ve.getInstance().on("online",c.onOnline_,c),c}return s.__extends(e,t),e.prototype.sendRequest=function(t,e,n){var r=++this.requestNumber_,i={r:r,a:t,b:e}
this.log_(u.stringify(i)),u.assert(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)},e.prototype.listen=function(t,e,n,r){var i=t.queryIdentifier(),o=t.path.toString()
this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),u.assert(t.getQueryParams().isDefault()||!t.getQueryParams().loadsAllData(),"listen() called for non-default but complete query"),u.assert(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.")
var a={onComplete:r,hashFn:e,query:t,tag:n}
this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)},e.prototype.sendListen_=function(t){var n=this,r=t.query,i=r.path.toString(),o=r.queryIdentifier()
this.log_("Listen on "+i+" for "+o)
var a={p:i}
t.tag&&(a.q=r.queryObject(),a.t=t.tag),a.h=t.hashFn(),this.sendRequest("q",a,function(a){var s=a.d,u=a.s
e.warnOnListenWarnings_(s,r),(n.listens.get(i)&&n.listens.get(i).get(o))===t&&(n.log_("listen response",a),"ok"!==u&&n.removeListen_(i,o),t.onComplete&&t.onComplete(u,s))})},e.warnOnListenWarnings_=function(t,e){if(t&&"object"===r(t)&&u.contains(t,"w")){var n=u.safeGet(t,"w")
if(Array.isArray(n)&&~n.indexOf("no_index")){var i='".indexOn": "'+e.getQueryParams().getIndex().toString()+'"',o=e.path.toString()
C("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding "+i+" at "+o+" to your security rules for better performance.")}}},e.prototype.refreshAuthToken=function(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(t)},e.prototype.reduceReconnectDelayIfAdminCredential_=function(t){(t&&40===t.length||u.isAdmin(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)},e.prototype.tryAuth=function(){var t=this
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
"a"in t&&this.onDataPush_(t.a,t.b)}},e.prototype.onDataPush_=function(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):S("Unrecognized action received from server: "+u.stringify(t)+"\nAre you using the latest client?")},e.prototype.onReady_=function(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},e.prototype.scheduleConnect_=function(t){var e=this
u.assert(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){e.establishConnectionTimer_=null,e.establishConnection_()},Math.floor(t))},e.prototype.onVisible_=function(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0)),this.visible_=t},e.prototype.onOnline_=function(t){t?(this.log_("Browser went online."),this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},e.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&((new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=$e),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime())
var t=(new Date).getTime()-this.lastConnectionAttemptTime_,e=Math.max(0,this.reconnectDelay_-t)
e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)},e.prototype.establishConnection_=function(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null
var t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+e.nextConnectionId_++,o=this,a=this.lastSessionId,s=!1,c=null,h=function(){c?c.close():(s=!0,r())}
this.realtime_={close:h,sendRequest:function(t){u.assert(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(t)}}
var l=this.forceTokenRefresh_
this.forceTokenRefresh_=!1,this.authTokenProvider_.getToken(l).then(function(e){s?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),o.authToken_=e&&e.accessToken,c=new Xe(i,o.repoInfo_,t,n,r,function(t){C(t+" ("+o.repoInfo_.toString()+")"),o.interrupt("server_kill")},a))}).then(null,function(t){o.log_("Failed to get token: "+t),s||(u.CONSTANTS.NODE_ADMIN&&C(t),h())})}},e.prototype.interrupt=function(t){E("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},e.prototype.resume=function(t){E("Resuming connection for reason: "+t),delete this.interruptReasons_[t],u.isEmpty(this.interruptReasons_)&&(this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0))},e.prototype.handleTimestamp_=function(t){var e=t-(new Date).getTime()
this.onServerInfoUpdate_({serverTimeOffset:e})},e.prototype.cancelSentTransactions_=function(){for(var t=0;t<this.outstandingPuts_.length;t++){var e=this.outstandingPuts_[t]
e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])},e.prototype.onListenRevoked_=function(t,e){var n
n=e?e.map(function(t){return O(t)}).join("$"):"default"
var r=this.removeListen_(t,n)
r&&r.onComplete&&r.onComplete("permission_denied")},e.prototype.removeListen_=function(t,e){var n,r=new $(t).toString()
if(this.listens.has(r)){var i=this.listens.get(r)
n=i.get(e),i.delete(e),0===i.size&&this.listens.delete(r)}else n=void 0
return n},e.prototype.onAuthRevoked_=function(t,e){E("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))},e.prototype.onSecurityDebugPacket_=function(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))},e.prototype.restoreState_=function(){var t,e,n,r
this.tryAuth()
try{for(var i=s.__values(this.listens.values()),o=i.next();!o.done;o=i.next()){var a=o.value
try{for(var u=s.__values(a.values()),c=u.next();!c.done;c=u.next()){var h=c.value
this.sendListen_(h)}}catch(t){n={error:t}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}for(var l=0;l<this.outstandingPuts_.length;l++)this.outstandingPuts_[l]&&this.sendPut_(l)
for(;this.onDisconnectRequestQueue_.length;){var f=this.onDisconnectRequestQueue_.shift()
this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}},e.prototype.sendConnectStats_=function(){var t={},e="js"
u.CONSTANTS.NODE_ADMIN?e="admin_node":u.CONSTANTS.NODE_CLIENT&&(e="node"),t["sdk."+e+"."+Ge.replace(/\./g,"-")]=1,u.isMobileCordova()?t["framework.cordova"]=1:u.isReactNative()&&(t["framework.reactnative"]=1),this.reportStats(t)},e.prototype.shouldReconnect_=function(){var t=Ve.getInstance().currentlyOnline()
return u.isEmpty(this.interruptReasons_)&&t},e.nextPersistentConnectionId_=0,e.nextConnectionId_=0,e}(Je),en=function(t){function e(e,n,r){var i=t.call(this)||this
return i.repoInfo_=e,i.onDataUpdate_=n,i.authTokenProvider_=r,i.log_=T("p:rest:"),i.listens_={},i}return s.__extends(e,t),e.prototype.reportStats=function(t){throw new Error("Method not implemented.")},e.getListenId_=function(t,e){return void 0!==e?"tag$"+e:(u.assert(t.getQueryParams().isDefault(),"should have a tag if it's not a default query."),t.path.toString())},e.prototype.listen=function(t,n,r,i){var o=this,a=t.path.toString()
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
if(s.status>=200&&s.status<300){try{t=u.jsonEval(s.responseText)}catch(t){C("Failed to parse JSON response for "+a+": "+s.responseText)}n(null,t)}else 401!==s.status&&404!==s.status&&C("Got unsuccessful REST response for "+a+" Status: "+s.status),n(s.status)
n=null}},s.open("GET",a,!0),s.send()})},e}(Je),nn=function(){function t(t,e,n){var i=this
this.repoInfo_=t,this.app=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Le,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=new te,this.persistentConnection_=null
var o=new Ae(n)
if(this.stats_=Re.getCollection(t),e||X())this.server_=new en(this.repoInfo_,this.onDataUpdate_.bind(this),o),setTimeout(this.onConnectStatus_.bind(this,!0),0)
else{var a=n.options.databaseAuthVariableOverride
if(null!=a){if("object"!==r(a))throw new Error("Only objects are supported for option databaseAuthVariableOverride")
try{u.stringify(a)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}this.persistentConnection_=new tn(this.repoInfo_,this.onDataUpdate_.bind(this),this.onConnectStatus_.bind(this),this.onServerInfoUpdate_.bind(this),o,a),this.server_=this.persistentConnection_}o.addTokenChangeListener(function(t){i.server_.refreshAuthToken(t)}),this.statsReporter_=Re.getOrCreateReporter(t,function(){return new Me(i.stats_,i.server_)}),this.transactions_init_(),this.infoData_=new ke,this.infoSyncTree_=new Ne({startListening:function(t,e,n,r){var o=[],a=i.infoData_.getNode(t.path)
return a.isEmpty()||(o=i.infoSyncTree_.applyServerOverwrite(t.path,a),setTimeout(function(){r("ok")},0)),o},stopListening:function(){}}),this.updateInfo_("connected",!1),this.serverSyncTree_=new Ne({startListening:function(t,e,n,r){return i.server_.listen(t,n,e,function(e,n){var o=r(e,n)
i.eventQueue_.raiseEventsForChangedPath(t.path,o)}),[]},stopListening:function(t,e){i.server_.unlisten(t,e)}})}return t.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},t.prototype.name=function(){return this.repoInfo_.namespace},t.prototype.serverTime=function(){var t=this.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0
return(new Date).getTime()+t},t.prototype.generateServerValues=function(){return(t=(t={timestamp:this.serverTime()})||{}).timestamp=t.timestamp||(new Date).getTime(),t
var t},t.prototype.onDataUpdate_=function(t,e,n,r){this.dataUpdateCount++
var i=new $(t)
e=this.interceptServerDataCallback_?this.interceptServerDataCallback_(t,e):e
var o=[]
if(r)if(n){var a=u.map(e,function(t){return Wt(t)})
o=this.serverSyncTree_.applyTaggedQueryMerge(i,a,r)}else{var s=Wt(e)
o=this.serverSyncTree_.applyTaggedQueryOverwrite(i,s,r)}else if(n){var c=u.map(e,function(t){return Wt(t)})
o=this.serverSyncTree_.applyServerMerge(i,c)}else{var h=Wt(e)
o=this.serverSyncTree_.applyServerOverwrite(i,h)}var l=i
o.length>0&&(l=this.rerunTransactions_(i)),this.eventQueue_.raiseEventsForChangedPath(l,o)},t.prototype.interceptServerData_=function(t){this.interceptServerDataCallback_=t},t.prototype.onConnectStatus_=function(t){this.updateInfo_("connected",t),!1===t&&this.runOnDisconnectEvents_()},t.prototype.onServerInfoUpdate_=function(t){var e=this
M(t,function(t,n){e.updateInfo_(n,t)})},t.prototype.updateInfo_=function(t,e){var n=new $("/.info/"+t),r=Wt(e)
this.infoData_.updateSnapshot(n,r)
var i=this.infoSyncTree_.applyServerOverwrite(n,r)
this.eventQueue_.raiseEventsForChangedPath(n,i)},t.prototype.getNextWriteId_=function(){return this.nextWriteId_++},t.prototype.setWithPriority=function(t,e,n,r){var i=this
this.log_("set",{path:t.toString(),value:e,priority:n})
var o=this.generateServerValues(),a=Wt(e,n),s=ne(a,o),u=this.getNextWriteId_(),c=this.serverSyncTree_.applyUserOverwrite(t,s,u,!0)
this.eventQueue_.queueEvents(c),this.server_.put(t.toString(),a.val(!0),function(e,n){var o="ok"===e
o||C("set at "+t+" failed: "+e)
var a=i.serverSyncTree_.ackUserWrite(u,!o)
i.eventQueue_.raiseEventsForChangedPath(t,a),i.callOnCompleteCallback(r,e,n)})
var h=this.abortTransactions_(t)
this.rerunTransactions_(h),this.eventQueue_.raiseEventsForChangedPath(h,[])},t.prototype.update=function(t,e,n){var r=this
this.log_("update",{path:t.toString(),value:e})
var i=!0,o=this.generateServerValues(),a={}
if(M(e,function(t,e){i=!1
var n=Wt(e)
a[t]=ne(n,o)}),i)E("update() called with empty data.  Don't do anything."),this.callOnCompleteCallback(n,"ok")
else{var s=this.getNextWriteId_(),u=this.serverSyncTree_.applyUserMerge(t,a,s)
this.eventQueue_.queueEvents(u),this.server_.merge(t.toString(),e,function(e,i){var o="ok"===e
o||C("update at "+t+" failed: "+e)
var a=r.serverSyncTree_.ackUserWrite(s,!o),u=a.length>0?r.rerunTransactions_(t):t
r.eventQueue_.raiseEventsForChangedPath(u,a),r.callOnCompleteCallback(n,e,i)}),M(e,function(e){var n=r.abortTransactions_(t.child(e))
r.rerunTransactions_(n)}),this.eventQueue_.raiseEventsForChangedPath(t,[])}},t.prototype.runOnDisconnectEvents_=function(){var t=this
this.log_("onDisconnectEvents")
var e=this.generateServerValues(),n=function(t,e){var n=new te
return t.forEachTree(new $(""),function(t,r){n.remember(t,ne(r,e))}),n}(this.onDisconnect_,e),r=[]
n.forEachTree($.Empty,function(e,n){r=r.concat(t.serverSyncTree_.applyServerOverwrite(e,n))
var i=t.abortTransactions_(e)
t.rerunTransactions_(i)}),this.onDisconnect_=new te,this.eventQueue_.raiseEventsForChangedPath($.Empty,r)},t.prototype.onDisconnectCancel=function(t,e){var n=this
this.server_.onDisconnectCancel(t.toString(),function(r,i){"ok"===r&&n.onDisconnect_.forget(t),n.callOnCompleteCallback(e,r,i)})},t.prototype.onDisconnectSet=function(t,e,n){var r=this,i=Wt(e)
this.server_.onDisconnectPut(t.toString(),i.val(!0),function(e,o){"ok"===e&&r.onDisconnect_.remember(t,i),r.callOnCompleteCallback(n,e,o)})},t.prototype.onDisconnectSetWithPriority=function(t,e,n,r){var i=this,o=Wt(e,n)
this.server_.onDisconnectPut(t.toString(),o.val(!0),function(e,n){"ok"===e&&i.onDisconnect_.remember(t,o),i.callOnCompleteCallback(r,e,n)})},t.prototype.onDisconnectUpdate=function(t,e,n){var r=this
if(u.isEmpty(e))return E("onDisconnect().update() called with empty data.  Don't do anything."),void this.callOnCompleteCallback(n,"ok")
this.server_.onDisconnectMerge(t.toString(),e,function(i,o){"ok"===i&&M(e,function(e,n){var i=Wt(n)
r.onDisconnect_.remember(t.child(e),i)}),r.callOnCompleteCallback(n,i,o)})},t.prototype.addEventCallbackForQuery=function(t,e){var n
n=".info"===t.path.getFront()?this.infoSyncTree_.addEventRegistration(t,e):this.serverSyncTree_.addEventRegistration(t,e),this.eventQueue_.raiseEventsAtPath(t.path,n)},t.prototype.removeEventCallbackForQuery=function(t,e){var n
n=".info"===t.path.getFront()?this.infoSyncTree_.removeEventRegistration(t,e):this.serverSyncTree_.removeEventRegistration(t,e),this.eventQueue_.raiseEventsAtPath(t.path,n)},t.prototype.interrupt=function(){this.persistentConnection_&&this.persistentConnection_.interrupt("repo_interrupt")},t.prototype.resume=function(){this.persistentConnection_&&this.persistentConnection_.resume("repo_interrupt")},t.prototype.stats=function(t){if(void 0===t&&(t=!1),"undefined"!=typeof console){var e
t?(this.statsListener_||(this.statsListener_=new Pe(this.stats_)),e=this.statsListener_.get()):e=this.stats_.get()
var n=Object.keys(e).reduce(function(t,e){return Math.max(e.length,t)},0)
M(e,function(t,e){for(var r=t,i=t.length;i<n+2;i++)r+=" "
console.log(r+e)})}},t.prototype.statsIncrementCounter=function(t){this.stats_.incrementCounter(t),this.statsReporter_.includeStat(t)},t.prototype.log_=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n=""
this.persistentConnection_&&(n=this.persistentConnection_.id+":"),E.apply(void 0,s.__spread([n],t))},t.prototype.callOnCompleteCallback=function(t,e,n){t&&Y(function(){if("ok"==e)t(null)
else{var r=(e||"error").toUpperCase(),i=r
n&&(i+=": "+n)
var o=new Error(i)
o.code=r,t(o)}})},Object.defineProperty(t.prototype,"database",{get:function(){return this.__database||(this.__database=new pn(this))},enumerable:!0,configurable:!0}),t}(),rn=function(){function t(e){this.indexedFilter_=new ye(e.getIndex()),this.index_=e.getIndex(),this.startPost_=t.getStartPost_(e),this.endPost_=t.getEndPost_(e)}return t.prototype.getStartPost=function(){return this.startPost_},t.prototype.getEndPost=function(){return this.endPost_},t.prototype.matches=function(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0},t.prototype.updateChild=function(t,e,n,r,i,o){return this.matches(new wt(e,n))||(n=Vt.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,i,o)},t.prototype.updateFullNode=function(t,e,n){e.isLeafNode()&&(e=Vt.EMPTY_NODE)
var r=e.withIndex(this.index_)
r=r.updatePriority(Vt.EMPTY_NODE)
var i=this
return e.forEachChild(kt,function(t,e){i.matches(new wt(t,e))||(r=r.updateImmediateChild(t,Vt.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,r,n)},t.prototype.updatePriority=function(t,e){return t},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.indexedFilter_},t.prototype.getIndex=function(){return this.index_},t.getStartPost_=function(t){if(t.hasStart()){var e=t.getIndexStartName()
return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()},t.getEndPost_=function(t){if(t.hasEnd()){var e=t.getIndexEndName()
return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()},t}(),on=function(){function t(t){this.rangedFilter_=new rn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}return t.prototype.updateChild=function(t,e,n,r,i,o){return this.rangedFilter_.matches(new wt(e,n))||(n=Vt.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,i,o):this.fullLimitUpdateChild_(t,e,n,i,o)},t.prototype.updateFullNode=function(t,e,n){var r
if(e.isLeafNode()||e.isEmpty())r=Vt.EMPTY_NODE.withIndex(this.index_)
else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){r=Vt.EMPTY_NODE.withIndex(this.index_)
var i=void 0
i=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_)
for(var o=0;i.hasNext()&&o<this.limit_;){var a=i.getNext()
if(!(this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:this.index_.compare(a,this.rangedFilter_.getEndPost())<=0))break
r=r.updateImmediateChild(a.name,a.node),o++}}else{r=(r=e.withIndex(this.index_)).updatePriority(Vt.EMPTY_NODE)
var s=void 0,u=void 0,c=void 0
if(i=void 0,this.reverse_){i=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),u=this.rangedFilter_.getStartPost()
var h=this.index_.getCompare()
c=function(t,e){return h(e,t)}}else i=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),u=this.rangedFilter_.getEndPost(),c=this.index_.getCompare()
o=0
for(var l=!1;i.hasNext();)a=i.getNext(),!l&&c(s,a)<=0&&(l=!0),l&&o<this.limit_&&c(a,u)<=0?o++:r=r.updateImmediateChild(a.name,Vt.EMPTY_NODE)}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)},t.prototype.updatePriority=function(t,e){return t},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},t.prototype.getIndex=function(){return this.index_},t.prototype.fullLimitUpdateChild_=function(t,e,n,r,i){var o
if(this.reverse_){var a=this.index_.getCompare()
o=function(t,e){return a(e,t)}}else o=this.index_.getCompare()
var s=t
u.assert(s.numChildren()==this.limit_,"")
var c=new wt(e,n),h=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(c)
if(s.hasChild(e)){for(var f=s.getImmediateChild(e),p=r.getChildAfterChild(this.index_,h,this.reverse_);null!=p&&(p.name==e||s.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_)
var d=null==p?1:o(p,c)
if(l&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(de.childChangedChange(e,n,f)),s.updateImmediateChild(e,n)
null!=i&&i.trackChildChange(de.childRemovedChange(e,f))
var y=s.updateImmediateChild(e,Vt.EMPTY_NODE)
return null!=p&&this.rangedFilter_.matches(p)?(null!=i&&i.trackChildChange(de.childAddedChange(p.name,p.node)),y.updateImmediateChild(p.name,p.node)):y}return n.isEmpty()?t:l&&o(h,c)>=0?(null!=i&&(i.trackChildChange(de.childRemovedChange(h.name,h.node)),i.trackChildChange(de.childAddedChange(e,n))),s.updateImmediateChild(e,n).updateImmediateChild(h.name,Vt.EMPTY_NODE)):t},t}(),an=function(){function t(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=kt}return t.prototype.hasStart=function(){return this.startSet_},t.prototype.isViewFromLeft=function(){return""===this.viewFrom_?this.startSet_:this.viewFrom_===t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT},t.prototype.getIndexStartValue=function(){return u.assert(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},t.prototype.getIndexStartName=function(){return u.assert(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:k},t.prototype.hasEnd=function(){return this.endSet_},t.prototype.getIndexEndValue=function(){return u.assert(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},t.prototype.getIndexEndName=function(){return u.assert(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A},t.prototype.hasLimit=function(){return this.limitSet_},t.prototype.hasAnchoredLimit=function(){return this.limitSet_&&""!==this.viewFrom_},t.prototype.getLimit=function(){return u.assert(this.limitSet_,"Only valid if limit has been set"),this.limit_},t.prototype.getIndex=function(){return this.index_},t.prototype.copy_=function(){var e=new t
return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e},t.prototype.limit=function(t){var e=this.copy_()
return e.limitSet_=!0,e.limit_=t,e.viewFrom_="",e},t.prototype.limitToFirst=function(e){var n=this.copy_()
return n.limitSet_=!0,n.limit_=e,n.viewFrom_=t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT,n},t.prototype.limitToLast=function(e){var n=this.copy_()
return n.limitSet_=!0,n.limit_=e,n.viewFrom_=t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT,n},t.prototype.startAt=function(t,e){var n=this.copy_()
return n.startSet_=!0,void 0===t&&(t=null),n.indexStartValue_=t,null!=e?(n.startNameSet_=!0,n.indexStartName_=e):(n.startNameSet_=!1,n.indexStartName_=""),n},t.prototype.endAt=function(t,e){var n=this.copy_()
return n.endSet_=!0,void 0===t&&(t=null),n.indexEndValue_=t,void 0!==e?(n.endNameSet_=!0,n.indexEndName_=e):(n.endNameSet_=!1,n.indexEndName_=""),n},t.prototype.orderBy=function(t){var e=this.copy_()
return e.index_=t,e},t.prototype.getQueryObject=function(){var e=t.WIRE_PROTOCOL_CONSTANTS_,n={}
if(this.startSet_&&(n[e.INDEX_START_VALUE]=this.indexStartValue_,this.startNameSet_&&(n[e.INDEX_START_NAME]=this.indexStartName_)),this.endSet_&&(n[e.INDEX_END_VALUE]=this.indexEndValue_,this.endNameSet_&&(n[e.INDEX_END_NAME]=this.indexEndName_)),this.limitSet_){n[e.LIMIT]=this.limit_
var r=this.viewFrom_
""===r&&(r=this.isViewFromLeft()?e.VIEW_FROM_LEFT:e.VIEW_FROM_RIGHT),n[e.VIEW_FROM]=r}return this.index_!==kt&&(n[e.INDEX]=this.index_.toString()),n},t.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},t.prototype.isDefault=function(){return this.loadsAllData()&&this.index_==kt},t.prototype.getNodeFilter=function(){return this.loadsAllData()?new ye(this.getIndex()):this.hasLimit()?new on(this):new rn(this)},t.prototype.toRestQueryStringParameters=function(){var e,n=t.REST_QUERY_CONSTANTS_,r={}
return this.isDefault()?r:(this.index_===kt?e=n.PRIORITY_INDEX:this.index_===Gt?e=n.VALUE_INDEX:this.index_===St?e=n.KEY_INDEX:(u.assert(this.index_ instanceof Ht,"Unrecognized index type!"),e=this.index_.toString()),r[n.ORDER_BY]=u.stringify(e),this.startSet_&&(r[n.START_AT]=u.stringify(this.indexStartValue_),this.startNameSet_&&(r[n.START_AT]+=","+u.stringify(this.indexStartName_))),this.endSet_&&(r[n.END_AT]=u.stringify(this.indexEndValue_),this.endNameSet_&&(r[n.END_AT]+=","+u.stringify(this.indexEndName_))),this.limitSet_&&(this.isViewFromLeft()?r[n.LIMIT_TO_FIRST]=this.limit_:r[n.LIMIT_TO_LAST]=this.limit_),r)},t.WIRE_PROTOCOL_CONSTANTS_={INDEX_START_VALUE:"sp",INDEX_START_NAME:"sn",INDEX_END_VALUE:"ep",INDEX_END_NAME:"en",LIMIT:"l",VIEW_FROM:"vf",VIEW_FROM_LEFT:"l",VIEW_FROM_RIGHT:"r",INDEX:"i"},t.REST_QUERY_CONSTANTS_={ORDER_BY:"orderBy",PRIORITY_INDEX:"$priority",VALUE_INDEX:"$value",KEY_INDEX:"$key",START_AT:"startAt",END_AT:"endAt",LIMIT_TO_FIRST:"limitToFirst",LIMIT_TO_LAST:"limitToLast"},t.DEFAULT=new t,t}(),sn=function(t){function e(e,n){if(!(e instanceof nn))throw new Error("new Reference() no longer supported - use app.database().")
return t.call(this,e,n,an.DEFAULT,!1)||this}return s.__extends(e,t),e.prototype.getKey=function(){return u.validateArgCount("Reference.key",0,0,arguments.length),this.path.isEmpty()?null:this.path.getBack()},e.prototype.child=function(t){return u.validateArgCount("Reference.child",1,1,arguments.length),"number"==typeof t?t=String(t):t instanceof $||(null===this.path.getFront()?((n=t)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yt("Reference.child",1,n,!1)):yt("Reference.child",1,t,!1)),new e(this.repo,this.path.child(t))
var n},e.prototype.getParent=function(){u.validateArgCount("Reference.parent",0,0,arguments.length)
var t=this.path.parent()
return null===t?null:new e(this.repo,t)},e.prototype.getRoot=function(){u.validateArgCount("Reference.root",0,0,arguments.length)
for(var t=this;null!==t.getParent();)t=t.getParent()
return t},e.prototype.databaseProp=function(){return this.repo.database},e.prototype.set=function(t,e){u.validateArgCount("Reference.set",1,2,arguments.length),mt("Reference.set",this.path),ct("Reference.set",1,t,this.path,!1),u.validateCallback("Reference.set",2,e,!0)
var n=new u.Deferred
return this.repo.setWithPriority(this.path,t,null,n.wrapCallback(e)),n.promise},e.prototype.update=function(t,e){if(u.validateArgCount("Reference.update",1,2,arguments.length),mt("Reference.update",this.path),Array.isArray(t)){for(var n={},r=0;r<t.length;++r)n[""+r]=t[r]
t=n,C("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}lt("Reference.update",1,t,this.path,!1),u.validateCallback("Reference.update",2,e,!0)
var i=new u.Deferred
return this.repo.update(this.path,t,i.wrapCallback(e)),i.promise},e.prototype.setWithPriority=function(t,e,n){if(u.validateArgCount("Reference.setWithPriority",2,3,arguments.length),mt("Reference.setWithPriority",this.path),ct("Reference.setWithPriority",1,t,this.path,!1),ft("Reference.setWithPriority",2,e,!1),u.validateCallback("Reference.setWithPriority",3,n,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.setWithPriority failed: "+this.getKey()+" is a read-only object."
var r=new u.Deferred
return this.repo.setWithPriority(this.path,t,e,r.wrapCallback(n)),r.promise},e.prototype.remove=function(t){return u.validateArgCount("Reference.remove",0,1,arguments.length),mt("Reference.remove",this.path),u.validateCallback("Reference.remove",1,t,!0),this.set(null,t)},e.prototype.transaction=function(t,e,n){if(u.validateArgCount("Reference.transaction",1,3,arguments.length),mt("Reference.transaction",this.path),u.validateCallback("Reference.transaction",1,t,!1),u.validateCallback("Reference.transaction",2,e,!0),function(t,e,n,r){if(void 0!==n&&"boolean"!=typeof n)throw new Error(u.errorPrefix("Reference.transaction",3,!0)+"must be a boolean.")}(0,0,n),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.transaction failed: "+this.getKey()+" is a read-only object."
void 0===n&&(n=!0)
var r=new u.Deferred
return"function"==typeof e&&r.promise.catch(function(){}),this.repo.startTransaction(this.path,t,function(t,n,i){t?r.reject(t):r.resolve(new _t(n,i)),"function"==typeof e&&e(t,n,i)},n),r.promise},e.prototype.setPriority=function(t,e){u.validateArgCount("Reference.setPriority",1,2,arguments.length),mt("Reference.setPriority",this.path),ft("Reference.setPriority",1,t,!1),u.validateCallback("Reference.setPriority",2,e,!0)
var n=new u.Deferred
return this.repo.setWithPriority(this.path.child(".priority"),t,null,n.wrapCallback(e)),n.promise},e.prototype.push=function(t,e){u.validateArgCount("Reference.push",0,2,arguments.length),mt("Reference.push",this.path),ct("Reference.push",1,t,this.path,!0),u.validateCallback("Reference.push",2,e,!0)
var n,r=this.repo.serverTime(),i=bt(r),o=this.child(i),a=this.child(i)
return n=null!=t?o.set(t,e).then(function(){return a}):Promise.resolve(a),o.then=n.then.bind(n),o.catch=n.then.bind(n,void 0),"function"==typeof e&&n.catch(function(){}),o},e.prototype.onDisconnect=function(){return mt("Reference.onDisconnect",this.path),new gt(this.repo,this.path)},Object.defineProperty(e.prototype,"database",{get:function(){return this.databaseProp()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this.getKey()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this.getParent()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this.getRoot()},enumerable:!0,configurable:!0}),e}(Zt)
Zt.__referenceConstructor=sn,Te.__referenceConstructor=sn
var un,cn=function(){this.children={},this.childCount=0,this.value=null},hn=function(){function t(t,e,n){void 0===t&&(t=""),void 0===e&&(e=null),void 0===n&&(n=new cn),this.name_=t,this.parent_=e,this.node_=n}return t.prototype.subTree=function(e){for(var n,r=e instanceof $?e:new $(e),i=this;null!==(n=r.getFront());)i=new t(n,i,u.safeGet(i.node_.children,n)||new cn),r=r.popFront()
return i},t.prototype.getValue=function(){return this.node_.value},t.prototype.setValue=function(t){u.assert(void 0!==t,"Cannot set value to undefined"),this.node_.value=t,this.updateParents_()},t.prototype.clear=function(){this.node_.value=null,this.node_.children={},this.node_.childCount=0,this.updateParents_()},t.prototype.hasChildren=function(){return this.node_.childCount>0},t.prototype.isEmpty=function(){return null===this.getValue()&&!this.hasChildren()},t.prototype.forEachChild=function(e){var n=this
M(this.node_.children,function(r,i){e(new t(r,n,i))})},t.prototype.forEachDescendant=function(t,e,n){e&&!n&&t(this),this.forEachChild(function(e){e.forEachDescendant(t,!0,n)}),e&&n&&t(this)},t.prototype.forEachAncestor=function(t,e){for(var n=e?this:this.parent();null!==n;){if(t(n))return!0
n=n.parent()}return!1},t.prototype.forEachImmediateDescendantWithValue=function(t){this.forEachChild(function(e){null!==e.getValue()?t(e):e.forEachImmediateDescendantWithValue(t)})},t.prototype.path=function(){return new $(null===this.parent_?this.name_:this.parent_.path()+"/"+this.name_)},t.prototype.name=function(){return this.name_},t.prototype.parent=function(){return this.parent_},t.prototype.updateParents_=function(){null!==this.parent_&&this.parent_.updateChild_(this.name_,this)},t.prototype.updateChild_=function(t,e){var n=e.isEmpty(),r=u.contains(this.node_.children,t)
n&&r?(delete this.node_.children[t],this.node_.childCount--,this.updateParents_()):n||r||(this.node_.children[t]=e.node_,this.node_.childCount++,this.updateParents_())},t}()
!function(t){t[t.RUN=0]="RUN",t[t.SENT=1]="SENT",t[t.COMPLETED=2]="COMPLETED",t[t.SENT_NEEDS_ABORT=3]="SENT_NEEDS_ABORT",t[t.NEEDS_ABORT=4]="NEEDS_ABORT"}(un||(un={})),nn.MAX_TRANSACTION_RETRIES_=25,nn.prototype.transactions_init_=function(){this.transactionQueueTree_=new hn},nn.prototype.startTransaction=function(t,e,n,i){this.log_("transaction on "+t)
var o=function(){},a=new sn(this,t)
a.on("value",o)
var s={path:t,update:e,onComplete:n,status:null,order:m(),applyLocally:i,retryCount:0,unwatcher:function(){a.off("value",o)},abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=this.getLatestState_(t)
s.currentInputSnapshot=c
var h=s.update(c.val())
if(void 0===h){if(s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete){var l=new zt(s.currentInputSnapshot,new sn(this,s.path),kt)
s.onComplete(null,!1,l)}}else{ht("transaction failed: Data returned ",h,s.path),s.status=un.RUN
var f=this.transactionQueueTree_.subTree(t),p=f.getValue()||[]
p.push(s),f.setValue(p)
var d=void 0
"object"===r(h)&&null!==h&&u.contains(h,".priority")?(d=u.safeGet(h,".priority"),u.assert(ut(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(this.serverSyncTree_.calcCompleteEventCache(t)||Vt.EMPTY_NODE).getPriority().val(),d=d
var y=this.generateServerValues(),v=Wt(h,d),g=ne(v,y)
s.currentOutputSnapshotRaw=v,s.currentOutputSnapshotResolved=g,s.currentWriteId=this.getNextWriteId_()
var _=this.serverSyncTree_.applyUserOverwrite(t,g,s.currentWriteId,s.applyLocally)
this.eventQueue_.raiseEventsForChangedPath(t,_),this.sendReadyTransactions_()}},nn.prototype.getLatestState_=function(t,e){return this.serverSyncTree_.calcCompleteEventCache(t,e)||Vt.EMPTY_NODE},nn.prototype.sendReadyTransactions_=function(t){var e=this
if(void 0===t&&(t=this.transactionQueueTree_),t||this.pruneCompletedTransactionsBelowNode_(t),null!==t.getValue()){var n=this.buildTransactionQueue_(t)
u.assert(n.length>0,"Sending zero length transaction queue"),n.every(function(t){return t.status===un.RUN})&&this.sendTransactionQueue_(t.path(),n)}else t.hasChildren()&&t.forEachChild(function(t){e.sendReadyTransactions_(t)})},nn.prototype.sendTransactionQueue_=function(t,e){for(var n=this,r=e.map(function(t){return t.currentWriteId}),i=this.getLatestState_(t,r),o=i,a=i.hash(),s=0;s<e.length;s++){var c=e[s]
u.assert(c.status===un.RUN,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=un.SENT,c.retryCount++
var h=$.relativePath(t,c.path)
o=o.updateChild(h,c.currentOutputSnapshotRaw)}var l=o.val(!0),f=t
this.server_.put(f.toString(),l,function(r){n.log_("transaction put response",{path:f.toString(),status:r})
var i=[]
if("ok"===r){for(var o=[],a=0;a<e.length;a++){if(e[a].status=un.COMPLETED,i=i.concat(n.serverSyncTree_.ackUserWrite(e[a].currentWriteId)),e[a].onComplete){var s=e[a].currentOutputSnapshotResolved,u=new sn(n,e[a].path),c=new zt(s,u,kt)
o.push(e[a].onComplete.bind(null,null,!0,c))}e[a].unwatcher()}for(n.pruneCompletedTransactionsBelowNode_(n.transactionQueueTree_.subTree(t)),n.sendReadyTransactions_(),n.eventQueue_.raiseEventsForChangedPath(t,i),a=0;a<o.length;a++)Y(o[a])}else{if("datastale"===r)for(a=0;a<e.length;a++)e[a].status===un.SENT_NEEDS_ABORT?e[a].status=un.NEEDS_ABORT:e[a].status=un.RUN
else for(C("transaction at "+f.toString()+" failed: "+r),a=0;a<e.length;a++)e[a].status=un.NEEDS_ABORT,e[a].abortReason=r
n.rerunTransactions_(t)}},a)},nn.prototype.rerunTransactions_=function(t){var e=this.getAncestorTransactionNode_(t),n=e.path(),r=this.buildTransactionQueue_(e)
return this.rerunTransactionQueue_(r,n),n},nn.prototype.rerunTransactionQueue_=function(t,e){if(0!==t.length){for(var n,i=[],o=[],a=t.filter(function(t){return t.status===un.RUN}).map(function(t){return t.currentWriteId}),s=0;s<t.length;s++){var c=t[s],h=$.relativePath(e,c.path),l=!1,f=void 0
if(u.assert(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===un.NEEDS_ABORT)l=!0,f=c.abortReason,o=o.concat(this.serverSyncTree_.ackUserWrite(c.currentWriteId,!0))
else if(c.status===un.RUN)if(c.retryCount>=nn.MAX_TRANSACTION_RETRIES_)l=!0,f="maxretry",o=o.concat(this.serverSyncTree_.ackUserWrite(c.currentWriteId,!0))
else{var p=this.getLatestState_(c.path,a)
c.currentInputSnapshot=p
var d=t[s].update(p.val())
if(void 0!==d){ht("transaction failed: Data returned ",d,c.path)
var y=Wt(d)
"object"===r(d)&&null!=d&&u.contains(d,".priority")||(y=y.updatePriority(p.getPriority()))
var m=c.currentWriteId,v=this.generateServerValues(),g=ne(y,v)
c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=g,c.currentWriteId=this.getNextWriteId_(),a.splice(a.indexOf(m),1),o=(o=o.concat(this.serverSyncTree_.applyUserOverwrite(c.path,g,c.currentWriteId,c.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(m,!0))}else l=!0,f="nodata",o=o.concat(this.serverSyncTree_.ackUserWrite(c.currentWriteId,!0))}if(this.eventQueue_.raiseEventsForChangedPath(e,o),o=[],l&&(t[s].status=un.COMPLETED,n=t[s].unwatcher,setTimeout(n,Math.floor(0)),t[s].onComplete))if("nodata"===f){var _=new sn(this,t[s].path),b=t[s].currentInputSnapshot,w=new zt(b,_,kt)
i.push(t[s].onComplete.bind(null,null,!1,w))}else i.push(t[s].onComplete.bind(null,new Error(f),!1,null))}for(this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_),s=0;s<i.length;s++)Y(i[s])
this.sendReadyTransactions_()}},nn.prototype.getAncestorTransactionNode_=function(t){for(var e,n=this.transactionQueueTree_;null!==(e=t.getFront())&&null===n.getValue();)n=n.subTree(e),t=t.popFront()
return n},nn.prototype.buildTransactionQueue_=function(t){var e=[]
return this.aggregateTransactionQueuesForNode_(t,e),e.sort(function(t,e){return t.order-e.order}),e},nn.prototype.aggregateTransactionQueuesForNode_=function(t,e){var n=this,r=t.getValue()
if(null!==r)for(var i=0;i<r.length;i++)e.push(r[i])
t.forEachChild(function(t){n.aggregateTransactionQueuesForNode_(t,e)})},nn.prototype.pruneCompletedTransactionsBelowNode_=function(t){var e=this,n=t.getValue()
if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==un.COMPLETED&&(n[r]=n[i],r++)
n.length=r,t.setValue(n.length>0?n:null)}t.forEachChild(function(t){e.pruneCompletedTransactionsBelowNode_(t)})},nn.prototype.abortTransactions_=function(t){var e=this,n=this.getAncestorTransactionNode_(t).path(),r=this.transactionQueueTree_.subTree(t)
return r.forEachAncestor(function(t){e.abortTransactionsOnNode_(t)}),this.abortTransactionsOnNode_(r),r.forEachDescendant(function(t){e.abortTransactionsOnNode_(t)}),n},nn.prototype.abortTransactionsOnNode_=function(t){var e=t.getValue()
if(null!==e){for(var n=[],r=[],i=-1,o=0;o<e.length;o++)e[o].status===un.SENT_NEEDS_ABORT||(e[o].status===un.SENT?(u.assert(i===o-1,"All SENT items should be at beginning of queue."),i=o,e[o].status=un.SENT_NEEDS_ABORT,e[o].abortReason="set"):(u.assert(e[o].status===un.RUN,"Unexpected transaction status in abort"),e[o].unwatcher(),r=r.concat(this.serverSyncTree_.ackUserWrite(e[o].currentWriteId,!0)),e[o].onComplete&&n.push(e[o].onComplete.bind(null,new Error("set"),!1,null))))
for(-1===i?t.setValue(null):e.length=i+1,this.eventQueue_.raiseEventsForChangedPath(t.path(),r),o=0;o<n.length;o++)Y(n[o])}}
var ln,fn=function(){function t(){this.repos_={},this.useRestClient_=!1}return t.getInstance=function(){return ln||(ln=new t),ln},t.prototype.interrupt=function(){for(var t in this.repos_)for(var e in this.repos_[t])this.repos_[t][e].interrupt()},t.prototype.resume=function(){for(var t in this.repos_)for(var e in this.repos_[t])this.repos_[t][e].resume()},t.prototype.databaseFromApp=function(t,e){var n=e||t.options.databaseURL
void 0===n&&I("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp().")
var r=nt(n),i=r.repoInfo
return vt("Invalid Firebase Database URL",1,r),r.path.isEmpty()||I("Database URL must point to the root of a Firebase Database (not including a child path)."),this.createRepo(i,t).database},t.prototype.deleteRepo=function(t){var e=u.safeGet(this.repos_,t.app.name)
e&&u.safeGet(e,t.repoInfo_.toURLString())===t||I("Database "+t.app.name+"("+t.repoInfo_+") has already been deleted."),t.interrupt(),delete e[t.repoInfo_.toURLString()]},t.prototype.createRepo=function(t,e){var n=u.safeGet(this.repos_,e.name)
n||(n={},this.repos_[e.name]=n)
var r=u.safeGet(n,t.toURLString())
return r&&I("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new nn(t,this.useRestClient_,e),n[t.toURLString()]=r,r},t.prototype.forceRestClient=function(t){this.useRestClient_=t},t}(),pn=function(){function t(t){this.repo_=t,t instanceof nn||I("Don't call new Database() directly - please use firebase.database()."),this.root_=new sn(t,$.Empty),this.INTERNAL=new dn(this)}return Object.defineProperty(t.prototype,"app",{get:function(){return this.repo_.app},enumerable:!0,configurable:!0}),t.prototype.ref=function(t){return this.checkDeleted_("ref"),u.validateArgCount("database.ref",0,1,arguments.length),t instanceof sn?this.refFromURL(t.toString()):void 0!==t?this.root_.child(t):this.root_},t.prototype.refFromURL=function(t){var e="database.refFromURL"
this.checkDeleted_(e),u.validateArgCount(e,1,1,arguments.length)
var n=nt(t)
vt(e,1,n)
var r=n.repoInfo
return r.host!==this.repo_.repoInfo_.host&&I(e+": Host name does not match the current database: (found "+r.host+" but expected "+this.repo_.repoInfo_.host+")"),this.ref(n.path.toString())},t.prototype.checkDeleted_=function(t){null===this.repo_&&I("Cannot call "+t+" on a deleted database.")},t.prototype.goOffline=function(){u.validateArgCount("database.goOffline",0,0,arguments.length),this.checkDeleted_("goOffline"),this.repo_.interrupt()},t.prototype.goOnline=function(){u.validateArgCount("database.goOnline",0,0,arguments.length),this.checkDeleted_("goOnline"),this.repo_.resume()},t.ServerValue={TIMESTAMP:{".sv":"timestamp"}},t}(),dn=function(){function t(t){this.database=t}return t.prototype.delete=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){return this.database.checkDeleted_("delete"),fn.getInstance().deleteRepo(this.database.repo_),this.database.repo_=null,this.database.root_=null,this.database.INTERNAL=null,this.database=null,[2]})})},t}(),yn=Object.freeze({forceLongPolling:function(){ze.forceDisallow(),Qe.forceAllow()},forceWebSockets:function(){Qe.forceDisallow()},isWebSocketsAvailable:function(){return ze.isAvailable()},setSecurityDebugCallback:function(t,e){t.repo.persistentConnection_.securityDebugCallback_=e},stats:function(t,e){t.repo.stats(e)},statsIncrementCounter:function(t,e){t.repo.statsIncrementCounter(e)},dataUpdateCount:function(t){return t.repo.dataUpdateCount},interceptServerData:function(t,e){return t.repo.interceptServerData_(e)}}),mn=tn
tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)}
var vn=Xe,gn=et,_n=Object.freeze({DataConnection:mn,RealTimeConnection:vn,hijackHash:function(t){var e=tn.prototype.put
return tn.prototype.put=function(n,r,i,o){void 0!==o&&(o=t()),e.call(this,n,r,i,o)},function(){tn.prototype.put=e}},ConnectionTarget:gn,queryIdentifier:function(t){return t.queryIdentifier()},forceRestClient:function(t){fn.getInstance().forceRestClient(t)}}),bn=pn.ServerValue
function wn(e){var n
n=e.SDK_VERSION,Ge=n
var r=e.INTERNAL.registerService("database",function(t,e,n){return fn.getInstance().databaseFromApp(t,n)},{Reference:sn,Query:Zt,Database:pn,DataSnapshot:zt,enableLogging:w,INTERNAL:yn,ServerValue:bn,TEST_ACCESS:_n},null,!0)
u.isNodeSdk()&&(t.exports=r)}wn(a),e.DataSnapshot=zt,e.Database=pn,e.OnDisconnect=gt,e.Query=Zt,e.Reference=sn,e.ServerValue=bn,e.enableLogging=w,e.registerDatabase=wn},197:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"__extends",function(){return o}),n.d(e,"__assign",function(){return a}),n.d(e,"__rest",function(){return s}),n.d(e,"__decorate",function(){return u}),n.d(e,"__param",function(){return c}),n.d(e,"__metadata",function(){return h}),n.d(e,"__awaiter",function(){return l}),n.d(e,"__generator",function(){return f}),n.d(e,"__exportStar",function(){return p}),n.d(e,"__values",function(){return d}),n.d(e,"__read",function(){return y}),n.d(e,"__spread",function(){return m}),n.d(e,"__await",function(){return v}),n.d(e,"__asyncGenerator",function(){return g}),n.d(e,"__asyncDelegator",function(){return _}),n.d(e,"__asyncValues",function(){return b}),n.d(e,"__makeTemplateObject",function(){return w}),n.d(e,"__importStar",function(){return E}),n.d(e,"__importDefault",function(){return T})
var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}
function o(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t}).apply(this,arguments)}
function s(t,e){var n={}
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r])
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n}function u(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i
if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i)
else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s)
return a>3&&s&&Object.defineProperty(e,n,s),s}function c(t,e){return function(n,r){e(n,r,t)}}function h(t,e){if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function f(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function p(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function d(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0
return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function y(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,i,o=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function m(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]))
return t}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(t,e||[]),o=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(t){i[t]&&(r[t]=function(e){return new Promise(function(n,r){o.push([t,e,n,r])>1||s(t,e)})})}function s(t,e){try{(n=i[t](e)).value instanceof v?Promise.resolve(n.value.v).then(u,c):h(o[0][2],n)}catch(t){h(o[0][3],t)}var n}function u(t){s("next",t)}function c(t){s("throw",t)}function h(t,e){t(e),o.shift(),o.length&&s(o[0][0],o[0][1])}}function _(t){var e,n
return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e
function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:v(t[r](e)),done:"return"===r}:i?i(e):e}:i}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var e,n=t[Symbol.asyncIterator]
return n?n.call(t):(t=d(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e)
function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,i){(function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)})(r,i,(e=t[n](e)).done,e.value)})}}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function E(t){if(t&&t.__esModule)return t
var e={}
if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e.default=t,e}function T(t){return t&&t.__esModule?t:{default:t}}}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[7],{195:function(t,e,n){"use strict"
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
t.Ja(e.resolve,e.reject)},e.prototype.v=function(t,e){var n=this.f()
try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},e.prototype.then=function(t,n){function r(t,e){return"function"==typeof t?function(e){try{i(t(e))}catch(t){o(t)}}:e}var i,o,a=new e(function(t,e){i=t,o=e})
return this.Ja(r(t,i),r(n,o)),a},e.prototype.catch=function(t){return this.then(void 0,t)},e.prototype.Ja=function(t,e){function n(){switch(r.b){case 1:t(r.c)
break
case 2:e(r.c)
break
default:throw Error("Unexpected state: "+r.b)}}var r=this
null==this.a?u.b(n):this.a.push(n)},e.resolve=i,e.reject=function(t){return new e(function(e,n){n(t)})},e.race=function(t){return new e(function(e,n){for(var r=a(t),o=r.next();!o.done;o=r.next())i(o.value).Ja(e,n)})},e.all=function(t){var n=a(t),r=n.next()
return r.done?i([]):new e(function(t,e){function o(e){return function(n){a[e]=n,0==--s&&t(a)}}var a=[],s=0
do{a.push(void 0),s++,i(r.value).Ja(o(a.length-1),e),r=n.next()}while(!r.done)})},e})
var s=s||{},u=this
function c(t){return"string"==typeof t}function h(t){return"boolean"==typeof t}var l=/^[\w+\/_-]+[=]{0,2}$/,f=null
function p(){}function d(t){var e=o(t)
if("object"==e){if(!t)return"null"
if(t instanceof Array)return"array"
if(t instanceof Object)return e
var n=Object.prototype.toString.call(t)
if("[object Window]"==n)return"object"
if("[object Array]"==n||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array"
if("[object Function]"==n||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object"
return e}function y(t){return null===t}function m(t){return"array"==d(t)}function v(t){var e=d(t)
return"array"==e||"object"==e&&"number"==typeof t.length}function g(t){return"function"==d(t)}function _(t){var e=o(t)
return"object"==e&&null!=t||"function"==e}var b="closure_uid_"+(1e9*Math.random()>>>0),w=0
function E(t,e,n){return t.call.apply(t.bind,arguments)}function T(t,e,n){if(!t)throw Error()
if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2)
return function(){var n=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function S(t,e,n){return(S=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E:T).apply(null,arguments)}function I(t,e){var n=Array.prototype.slice.call(arguments,1)
return function(){var e=n.slice()
return e.push.apply(e,arguments),t.apply(this,e)}}var C=Date.now||function(){return+new Date}
function N(t,e){function n(){}n.prototype=e.prototype,t.qb=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.cd=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o]
return e.prototype[n].apply(t,i)}}function k(t){if(!t)return!1
try{return!!t.$goog_Thenable}catch(t){return!1}}function A(t){if(Error.captureStackTrace)Error.captureStackTrace(this,A)
else{var e=Error().stack
e&&(this.stack=e)}t&&(this.message=String(t))}function D(t,e){for(var n="",r=(t=t.split("%s")).length-1,i=0;i<r;i++)n+=t[i]+(i<e.length?e[i]:"%s")
A.call(this,n+t[r])}function R(t,e){throw new D("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}function P(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function O(t,e){t.f(e),100>t.b&&(t.b++,e.next=t.a,t.a=e)}function x(){this.b=this.a=null}N(A,Error),A.prototype.name="CustomError",N(D,A),D.prototype.name="AssertionError",P.prototype.get=function(){if(0<this.b){this.b--
var t=this.a
this.a=t.next,t.next=null}else t=this.c()
return t}
var M=new P(function(){return new F},function(t){t.reset()})
function L(){var t=_t,e=null
return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function F(){this.next=this.b=this.a=null}x.prototype.add=function(t,e){var n=M.get()
n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},F.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},F.prototype.reset=function(){this.next=this.b=this.a=null}
var U=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(c(t))return c(e)&&1==e.length?t.indexOf(e,0):-1
for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n
return-1},q=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i=c(t)?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)},V=Array.prototype.map?function(t,e){return Array.prototype.map.call(t,e,void 0)}:function(t,e){for(var n=t.length,r=Array(n),i=c(t)?t.split(""):t,o=0;o<n;o++)o in i&&(r[o]=e.call(void 0,i[o],o,t))
return r},B=Array.prototype.some?function(t,e){return Array.prototype.some.call(t,e,void 0)}:function(t,e){for(var n=t.length,r=c(t)?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t))return!0
return!1}
function j(t,e){return 0<=U(t,e)}function W(t,e){var n
return(n=0<=(e=U(t,e)))&&Array.prototype.splice.call(t,e,1),n}function Q(t,e){!function(t,e){for(var n=c(t)?t.split(""):t,r=t.length-1;0<=r;--r)r in n&&e.call(void 0,n[r],r,t)}(t,function(n,r){e.call(void 0,n,r,t)&&Array.prototype.splice.call(t,r,1).length})}function K(t){return Array.prototype.concat.apply([],arguments)}function G(t){var e=t.length
if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r]
return n}return[]}var H,z=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},Y=/&/g,X=/</g,J=/>/g,$=/"/g,Z=/'/g,tt=/\x00/g,et=/[\x00&<>"']/
function nt(t,e){return-1!=t.indexOf(e)}function rt(t,e){return t<e?-1:t>e?1:0}t:{var it=u.navigator
if(it){var ot=it.userAgent
if(ot){H=ot
break t}}H=""}function at(t){return nt(H,t)}function st(t,e){for(var n in t)e.call(void 0,t[n],n,t)}function ut(t){for(var e in t)return!1
return!0}function ct(t){var e,n={}
for(e in t)n[e]=t[e]
return n}var ht,lt,ft="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function pt(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n]
for(var o=0;o<ft.length;o++)n=ft[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function dt(t,e){for(var n=t.split("%s"),r="",i=Array.prototype.slice.call(arguments,1);i.length&&1<n.length;)r+=n.shift()+i.shift()
return r+n.join("%s")}function yt(t){return et.test(t)&&(-1!=t.indexOf("&")&&(t=t.replace(Y,"&amp;")),-1!=t.indexOf("<")&&(t=t.replace(X,"&lt;")),-1!=t.indexOf(">")&&(t=t.replace(J,"&gt;")),-1!=t.indexOf('"')&&(t=t.replace($,"&quot;")),-1!=t.indexOf("'")&&(t=t.replace(Z,"&#39;")),-1!=t.indexOf("\0")&&(t=t.replace(tt,"&#0;"))),t}function mt(t){u.setTimeout(function(){throw t},0)}function vt(t,e){lt||function(){if(u.Promise&&u.Promise.resolve){var t=u.Promise.resolve(void 0)
lt=function(){t.then(bt)}}else lt=function(){var t=bt
!g(u.setImmediate)||u.Window&&u.Window.prototype&&!at("Edge")&&u.Window.prototype.setImmediate==u.setImmediate?(ht||(ht=function(){var t=u.MessageChannel
if(void 0===t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!at("Presto")&&(t=function(){var t=document.createElement("IFRAME")
t.style.display="none",t.src="",document.documentElement.appendChild(t)
var e=t.contentWindow;(t=e.document).open(),t.write(""),t.close()
var n="callImmediate"+Math.random(),r="file:"==e.location.protocol?"*":e.location.protocol+"//"+e.location.host
t=S(function(t){"*"!=r&&t.origin!=r||t.data!=n||this.port1.onmessage()},this),e.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(n,r)}}}),void 0!==t&&!at("Trident")&&!at("MSIE")){var e=new t,n={},r=n
return e.port1.onmessage=function(){if(void 0!==n.next){var t=(n=n.next).yb
n.yb=null,t()}},function(t){r.next={yb:t},r=r.next,e.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(t){var e=document.createElement("SCRIPT")
e.onreadystatechange=function(){e.onreadystatechange=null,e.parentNode.removeChild(e),e=null,t(),t=null},document.documentElement.appendChild(e)}:function(t){u.setTimeout(t,0)}}()),ht(t)):u.setImmediate(t)}}(),gt||(lt(),gt=!0),_t.add(t,e)}var gt=!1,_t=new x
function bt(){for(var t;t=L();){try{t.a.call(t.b)}catch(t){mt(t)}O(M,t)}gt=!1}function wt(t,e){if(this.a=Et,this.i=void 0,this.f=this.b=this.c=null,this.g=this.h=!1,t!=p)try{var n=this
t.call(e,function(t){xt(n,Tt,t)},function(t){if(!(t instanceof Bt))try{if(t instanceof Error)throw t
throw Error("Promise rejected.")}catch(t){}xt(n,St,t)})}catch(t){xt(this,St,t)}}var Et=0,Tt=2,St=3
function It(){this.next=this.f=this.b=this.g=this.a=null,this.c=!1}It.prototype.reset=function(){this.f=this.b=this.g=this.a=null,this.c=!1}
var Ct=new P(function(){return new It},function(t){t.reset()})
function Nt(t,e,n){var r=Ct.get()
return r.g=t,r.b=e,r.f=n,r}function kt(t){if(t instanceof wt)return t
var e=new wt(p)
return xt(e,Tt,t),e}function At(t){return new wt(function(e,n){n(t)})}function Dt(t,e,n){Mt(t,e,n,null)||vt(I(e,t))}function Rt(t){return new wt(function(e){var n=t.length,r=[]
if(n)for(var i=function(t,i,o){n--,r[t]=i?{Eb:!0,value:o}:{Eb:!1,reason:o},0==n&&e(r)},o=0;o<t.length;o++)Dt(t[o],I(i,o,!0),I(i,o,!1))
else e(r)})}function Pt(t,e){t.b||t.a!=Tt&&t.a!=St||Lt(t),t.f?t.f.next=e:t.b=e,t.f=e}function Ot(t,e,n,r){var i=Nt(null,null,null)
return i.a=new wt(function(t,o){i.g=e?function(n){try{var i=e.call(r,n)
t(i)}catch(t){o(t)}}:t,i.b=n?function(e){try{var i=n.call(r,e)
void 0===i&&e instanceof Bt?o(e):t(i)}catch(t){o(t)}}:o}),i.a.c=t,Pt(t,i),i.a}function xt(t,e,n){t.a==Et&&(t===n&&(e=St,n=new TypeError("Promise cannot resolve to itself")),t.a=1,Mt(n,t.Lc,t.Mc,t)||(t.i=n,t.a=e,t.c=null,Lt(t),e!=St||n instanceof Bt||function(t,e){t.g=!0,vt(function(){t.g&&Vt.call(null,e)})}(t,n)))}function Mt(t,e,n,r){if(t instanceof wt)return Pt(t,Nt(e||p,n||null,r)),!0
if(k(t))return t.then(e,n,r),!0
if(_(t))try{var i=t.then
if(g(i))return function(t,e,n,r,i){function o(t){a||(a=!0,r.call(i,t))}var a=!1
try{e.call(t,function(t){a||(a=!0,n.call(i,t))},o)}catch(t){o(t)}}(t,i,e,n,r),!0}catch(t){return n.call(r,t),!0}return!1}function Lt(t){t.h||(t.h=!0,vt(t.Wb,t))}function Ft(t){var e=null
return t.b&&(e=t.b,t.b=e.next,e.next=null),t.b||(t.f=null),e}function Ut(t,e,n,r){if(n==St&&e.b&&!e.c)for(;t&&t.g;t=t.c)t.g=!1
if(e.a)e.a.c=null,qt(e,n,r)
else try{e.c?e.g.call(e.f):qt(e,n,r)}catch(t){Vt.call(null,t)}O(Ct,e)}function qt(t,e,n){e==Tt?t.g.call(t.f,n):t.b&&t.b.call(t.f,n)}wt.prototype.then=function(t,e,n){return Ot(this,g(t)?t:null,g(e)?e:null,n)},wt.prototype.$goog_Thenable=!0,(t=wt.prototype).ia=function(t,e){return(t=Nt(t,t,e)).c=!0,Pt(this,t),this},t.s=function(t,e){return Ot(this,null,t,e)},t.cancel=function(t){this.a==Et&&vt(function(){!function t(e,n){if(e.a==Et)if(e.c){var r=e.c
if(r.b){for(var i=0,o=null,a=null,s=r.b;s&&(s.c||(i++,s.a==e&&(o=s),!(o&&1<i)));s=s.next)o||(a=s)
o&&(r.a==Et&&1==i?t(r,n):(a?((i=a).next==r.f&&(r.f=i),i.next=i.next.next):Ft(r),Ut(r,o,St,n)))}e.c=null}else xt(e,St,n)}(this,new Bt(t))},this)},t.Lc=function(t){this.a=Et,xt(this,Tt,t)},t.Mc=function(t){this.a=Et,xt(this,St,t)},t.Wb=function(){for(var t;t=Ft(this);)Ut(this,t,this.a,this.i)
this.h=!1}
var Vt=mt
function Bt(t){A.call(this,t)}function jt(){0!=Wt&&(Qt[this[b]||(this[b]=++w)]=this),this.qa=this.qa,this.ja=this.ja}N(Bt,A),Bt.prototype.name="cancel"
var Wt=0,Qt={}
function Kt(t){if(!t.qa&&(t.qa=!0,t.va(),0!=Wt)){var e=t[b]||(t[b]=++w)
if(0!=Wt&&t.ja&&0<t.ja.length)throw Error(t+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.")
delete Qt[e]}}function Gt(t){return Gt[" "](t),t}jt.prototype.qa=!1,jt.prototype.va=function(){if(this.ja)for(;this.ja.length;)this.ja.shift()()},Gt[" "]=p
var Ht,zt,Yt=at("Opera"),Xt=at("Trident")||at("MSIE"),Jt=at("Edge"),$t=Jt||Xt,Zt=at("Gecko")&&!(nt(H.toLowerCase(),"webkit")&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),te=nt(H.toLowerCase(),"webkit")&&!at("Edge")
function ee(){var t=u.document
return t?t.documentMode:void 0}t:{var ne="",re=(zt=H,Zt?/rv:([^\);]+)(\)|;)/.exec(zt):Jt?/Edge\/([\d\.]+)/.exec(zt):Xt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(zt):te?/WebKit\/(\S+)/.exec(zt):Yt?/(?:Version)[ \/]?(\S+)/.exec(zt):void 0)
if(re&&(ne=re?re[1]:""),Xt){var ie=ee()
if(null!=ie&&ie>parseFloat(ne)){Ht=String(ie)
break t}}Ht=ne}var oe,ae={}
function se(t){return function(t,e){var n=ae
return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e()}(t,function(){for(var e=0,n=z(String(Ht)).split("."),r=z(String(t)).split("."),i=Math.max(n.length,r.length),o=0;0==e&&o<i;o++){var a=n[o]||"",s=r[o]||""
do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break
e=rt(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||rt(0==a[2].length,0==s[2].length)||rt(a[2],s[2]),a=a[3],s=s[3]}while(0==e)}return 0<=e})}var ue=u.document
oe=ue&&Xt?ee()||("CSS1Compat"==ue.compatMode?parseInt(Ht,10):5):void 0
var ce=Object.freeze||function(t){return t},he=!Xt||9<=Number(oe),le=Xt&&!se("9"),fe=function(){if(!u.addEventListener||!Object.defineProperty)return!1
var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{u.addEventListener("test",p,e),u.removeEventListener("test",p,e)}catch(t){}return t}()
function pe(t,e){this.type=t,this.b=this.target=e,this.Kb=!0}function de(t,e){if(pe.call(this,t?t.type:""),this.relatedTarget=this.b=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.b=e,e=t.relatedTarget){if(Zt){t:{try{Gt(e.nodeName)
var i=!0
break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)
this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=c(t.pointerType)?t.pointerType:ye[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}pe.prototype.preventDefault=function(){this.Kb=!1},N(de,pe)
var ye=ce({2:"touch",3:"pen",4:"mouse"})
de.prototype.preventDefault=function(){de.qb.preventDefault.call(this)
var t=this.a
if(t.preventDefault)t.preventDefault()
else if(t.returnValue=!1,le)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}},de.prototype.f=function(){return this.a}
var me="closure_listenable_"+(1e6*Math.random()|0),ve=0
function ge(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.Na=i,this.key=++ve,this.oa=this.Ia=!1}function _e(t){t.oa=!0,t.listener=null,t.proxy=null,t.src=null,t.Na=null}function be(t){this.src=t,this.a={},this.b=0}function we(t,e){var n=e.type
n in t.a&&W(t.a[n],e)&&(_e(e),0==t.a[n].length&&(delete t.a[n],t.b--))}function Ee(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i]
if(!o.oa&&o.listener==e&&o.capture==!!n&&o.Na==r)return i}return-1}be.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++)
var a=Ee(t,e,r,i)
return-1<a?(e=t[a],n||(e.Ia=!1)):((e=new ge(e,this.src,o,!!r,i)).Ia=n,t.push(e)),e}
var Te="closure_lm_"+(1e6*Math.random()|0),Se={}
function Ie(t,e,n,r,i){if(r&&r.once)Ne(t,e,n,r,i)
else if(m(e))for(var o=0;o<e.length;o++)Ie(t,e[o],n,r,i)
else n=Le(n),t&&t[me]?Ue(t,e,n,_(r)?!!r.capture:!!r,i):Ce(t,e,n,!1,r,i)}function Ce(t,e,n,r,i,o){if(!e)throw Error("Invalid event type")
var a=_(i)?!!i.capture:!!i,s=xe(t)
if(s||(t[Te]=s=new be(t)),!(n=s.add(e,n,r,a,o)).proxy)if(r=function(){var t=Oe,e=he?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n}
return e}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)fe||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i)
else if(t.attachEvent)t.attachEvent(De(e.toString()),r)
else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
t.addListener(r)}}function Ne(t,e,n,r,i){if(m(e))for(var o=0;o<e.length;o++)Ne(t,e[o],n,r,i)
else n=Le(n),t&&t[me]?qe(t,e,n,_(r)?!!r.capture:!!r,i):Ce(t,e,n,!0,r,i)}function ke(t,e,n,r,i){if(m(e))for(var o=0;o<e.length;o++)ke(t,e[o],n,r,i)
else r=_(r)?!!r.capture:!!r,n=Le(n),t&&t[me]?(t=t.m,(e=String(e).toString())in t.a&&-1<(n=Ee(o=t.a[e],n,r,i))&&(_e(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.a[e],t.b--))):t&&(t=xe(t))&&(e=t.a[e.toString()],t=-1,e&&(t=Ee(e,n,r,i)),(n=-1<t?e[t]:null)&&Ae(n))}function Ae(t){if("number"!=typeof t&&t&&!t.oa){var e=t.src
if(e&&e[me])we(e.m,t)
else{var n=t.type,r=t.proxy
e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(De(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=xe(e))?(we(n,t),0==n.b&&(n.src=null,e[Te]=null)):_e(t)}}}function De(t){return t in Se?Se[t]:Se[t]="on"+t}function Re(t,e,n,r){var i=!0
if((t=xe(t))&&(e=t.a[e.toString()]))for(e=e.concat(),t=0;t<e.length;t++){var o=e[t]
o&&o.capture==n&&!o.oa&&(o=Pe(o,r),i=i&&!1!==o)}return i}function Pe(t,e){var n=t.listener,r=t.Na||t.src
return t.Ia&&Ae(t),n.call(r,e)}function Oe(t,e){if(t.oa)return!0
if(!he){if(!e)t:{e=["window","event"]
for(var n=u,r=0;r<e.length;r++)if(null==(n=n[e[r]])){e=null
break t}e=n}if(e=new de(r=e,this),n=!0,!(0>r.keyCode||null!=r.returnValue)){t:{var i=!1
if(0==r.keyCode)try{r.keyCode=-1
break t}catch(t){i=!0}(i||null==r.returnValue)&&(r.returnValue=!0)}for(r=[],i=e.b;i;i=i.parentNode)r.push(i)
for(t=t.type,i=r.length-1;0<=i;i--){e.b=r[i]
var o=Re(r[i],t,!0,e)
n=n&&o}for(i=0;i<r.length;i++)e.b=r[i],o=Re(r[i],t,!1,e),n=n&&o}return n}return Pe(t,new de(e,this))}function xe(t){return(t=t[Te])instanceof be?t:null}var Me="__closure_events_fn_"+(1e9*Math.random()>>>0)
function Le(t){return g(t)?t:(t[Me]||(t[Me]=function(e){return t.handleEvent(e)}),t[Me])}function Fe(){jt.call(this),this.m=new be(this),this.Pb=this,this.Wa=null}function Ue(t,e,n,r,i){t.m.add(String(e),n,!1,r,i)}function qe(t,e,n,r,i){t.m.add(String(e),n,!0,r,i)}function Ve(t,e,n,r){if(!(e=t.m.a[String(e)]))return!0
e=e.concat()
for(var i=!0,o=0;o<e.length;++o){var a=e[o]
if(a&&!a.oa&&a.capture==n){var s=a.listener,u=a.Na||a.src
a.Ia&&we(t.m,a),i=!1!==s.call(u,r)&&i}}return i&&0!=r.Kb}function Be(t,e,n){if(g(t))n&&(t=S(t,n))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=S(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function je(t){var e=null
return new wt(function(n,r){-1==(e=Be(function(){n(void 0)},t))&&r(Error("Failed to schedule timer."))}).s(function(t){throw u.clearTimeout(e),t})}function We(t){if(t.S&&"function"==typeof t.S)return t.S()
if(c(t))return t.split("")
if(v(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r])
return e}for(r in e=[],n=0,t)e[n++]=t[r]
return e}function Qe(t){if(t.U&&"function"==typeof t.U)return t.U()
if(!t.S||"function"!=typeof t.S){if(v(t)||c(t)){var e=[]
t=t.length
for(var n=0;n<t;n++)e.push(n)
return e}for(var r in e=[],n=0,t)e[n++]=r
return e}}function Ke(t,e){this.b={},this.a=[],this.c=0
var n=arguments.length
if(1<n){if(n%2)throw Error("Uneven number of arguments")
for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ke)for(n=t.U(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]))
else for(r in t)this.set(r,t[r])}function Ge(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e]
He(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={}
for(n=e=0;e<t.a.length;)He(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++
t.a.length=n}}function He(t,e){return Object.prototype.hasOwnProperty.call(t,e)}N(Fe,jt),Fe.prototype[me]=!0,Fe.prototype.addEventListener=function(t,e,n,r){Ie(this,t,e,n,r)},Fe.prototype.removeEventListener=function(t,e,n,r){ke(this,t,e,n,r)},Fe.prototype.dispatchEvent=function(t){var e,n=this.Wa
if(n)for(e=[];n;n=n.Wa)e.push(n)
n=this.Pb
var r=t.type||t
if(c(t))t=new pe(t,n)
else if(t instanceof pe)t.target=t.target||n
else{var i=t
pt(t=new pe(r,n),i)}if(i=!0,e)for(var o=e.length-1;0<=o;o--){var a=t.b=e[o]
i=Ve(a,r,!0,t)&&i}if(i=Ve(a=t.b=n,r,!0,t)&&i,i=Ve(a,r,!1,t)&&i,e)for(o=0;o<e.length;o++)i=Ve(a=t.b=e[o],r,!1,t)&&i
return i},Fe.prototype.va=function(){if(Fe.qb.va.call(this),this.m){var t,e=this.m
for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)_e(n[r])
delete e.a[t],e.b--}}this.Wa=null},(t=Ke.prototype).S=function(){Ge(this)
for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]])
return t},t.U=function(){return Ge(this),this.a.concat()},t.clear=function(){this.b={},this.c=this.a.length=0},t.get=function(t,e){return He(this.b,t)?this.b[t]:e},t.set=function(t,e){He(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},t.forEach=function(t,e){for(var n=this.U(),r=0;r<n.length;r++){var i=n[r],o=this.get(i)
t.call(e,o,i,this)}}
var ze=/^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function Ye(t,e){var n
this.b=this.i=this.f="",this.m=null,this.g=this.c="",this.h=!1,t instanceof Ye?(this.h=void 0!==e?e:t.h,Xe(this,t.f),this.i=t.i,this.b=t.b,Je(this,t.m),this.c=t.c,$e(this,gn(t.a)),this.g=t.g):t&&(n=String(t).match(ze))?(this.h=!!e,Xe(this,n[1]||"",!0),this.i=rn(n[2]||""),this.b=rn(n[3]||"",!0),Je(this,n[4]),this.c=rn(n[5]||"",!0),$e(this,n[6]||"",!0),this.g=rn(n[7]||"")):(this.h=!!e,this.a=new fn(null,this.h))}function Xe(t,e,n){t.f=n?rn(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e)
t.m=e}else t.m=null}function $e(t,e,n){e instanceof fn?(t.a=e,function(t,e){e&&!t.f&&(pn(t),t.c=null,t.a.forEach(function(t,e){var n=e.toLowerCase()
e!=n&&(yn(this,e),vn(this,n,t))},t)),t.f=e}(t.a,t.h)):(n||(e=on(e,hn)),t.a=new fn(e,t.h))}function Ze(t,e,n){t.a.set(e,n)}function tn(t,e){return t.a.get(e)}function en(t){return t instanceof Ye?new Ye(t):new Ye(t,void 0)}function nn(t,e){var n=new Ye(null,void 0)
return Xe(n,"https"),t&&(n.b=t),e&&(n.c=e),n}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return c(t)?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ye.prototype.toString=function(){var t=[],e=this.f
e&&t.push(on(e,sn,!0),":")
var n=this.b
return(n||"file"==e)&&(t.push("//"),(e=this.i)&&t.push(on(e,sn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.c)&&(this.b&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?cn:un,!0))),(n=this.a.toString())&&t.push("?",n),(n=this.g)&&t.push("#",on(n,ln)),t.join("")},Ye.prototype.resolve=function(t){var e=new Ye(this),n=!!t.f
n?Xe(e,t.f):n=!!t.i,n?e.i=t.i:n=!!t.b,n?e.b=t.b:n=null!=t.m
var r=t.c
if(n)Je(e,t.m)
else if(n=!!t.c){if("/"!=r.charAt(0))if(this.b&&!this.c)r="/"+r
else{var i=e.c.lastIndexOf("/");-1!=i&&(r=e.c.substr(0,i+1)+r)}if(".."==(i=r)||"."==i)r=""
else if(nt(i,"./")||nt(i,"/.")){r=0==i.lastIndexOf("/",0),i=i.split("/")
for(var o=[],a=0;a<i.length;){var s=i[a++]
"."==s?r&&a==i.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),r&&a==i.length&&o.push("")):(o.push(s),r=!0)}r=o.join("/")}else r=i}return n?e.c=r:n=""!==t.a.toString(),n?$e(e,gn(t.a)):n=!!t.g,n&&(e.g=t.g),e}
var sn=/[#\/\?@]/g,un=/[#\?:]/g,cn=/[#\?]/g,hn=/[#\?@]/g,ln=/#/g
function fn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function pn(t){t.a||(t.a=new Ke,t.b=0,t.c&&function(t,e){if(t){t=t.split("&")
for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null
if(0<=r){var o=t[n].substring(0,r)
i=t[n].substring(r+1)}else o=t[n]
e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function dn(t){var e=Qe(t)
if(void 0===e)throw Error("Keys are undefined")
var n=new fn(null,void 0)
t=We(t)
for(var r=0;r<e.length;r++){var i=e[r],o=t[r]
m(o)?vn(n,i,o):n.add(i,o)}return n}function yn(t,e){pn(t),e=_n(t,e),He(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,He((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&Ge(t)))}function mn(t,e){return pn(t),e=_n(t,e),He(t.a.b,e)}function vn(t,e,n){yn(t,e),0<n.length&&(t.c=null,t.a.set(_n(t,e),G(n)),t.b+=n.length)}function gn(t){var e=new fn
return e.c=t.c,t.a&&(e.a=new Ke(t.a),e.b=t.b),e}function _n(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}(t=fn.prototype).add=function(t,e){pn(this),this.c=null,t=_n(this,t)
var n=this.a.get(t)
return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},t.clear=function(){this.a=this.c=null,this.b=0},t.forEach=function(t,e){pn(this),this.a.forEach(function(n,r){q(n,function(n){t.call(e,n,r,this)},this)},this)},t.U=function(){pn(this)
for(var t=this.a.S(),e=this.a.U(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r])
return n},t.S=function(t){pn(this)
var e=[]
if(c(t))mn(this,t)&&(e=K(e,this.a.get(_n(this,t))))
else{t=this.a.S()
for(var n=0;n<t.length;n++)e=K(e,t[n])}return e},t.set=function(t,e){return pn(this),this.c=null,mn(this,t=_n(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},t.get=function(t,e){return t&&0<(t=this.S(t)).length?String(t[0]):e},t.toString=function(){if(this.c)return this.c
if(!this.a)return""
for(var t=[],e=this.a.U(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r))
r=this.S(r)
for(var o=0;o<r.length;o++){var a=i
""!==r[o]&&(a+="="+encodeURIComponent(String(r[o]))),t.push(a)}}return this.c=t.join("&")}
var bn=!Xt||9<=Number(oe)
function wn(t,e){this.a=t===Sn&&e||"",this.b=Tn}function En(t){return t instanceof wn&&t.constructor===wn&&t.b===Tn?t.a:(R("expected object of type Const, got '"+t+"'"),"type_error:Const")}wn.prototype.na=!0,wn.prototype.ma=function(){return this.a},wn.prototype.toString=function(){return"Const{"+this.a+"}"}
var Tn={},Sn={}
function In(){this.a="",this.b=Dn}function Cn(t){return t instanceof In&&t.constructor===In&&t.b===Dn?t.a:(R("expected object of type TrustedResourceUrl, got '"+t+"' of type "+d(t)),"type_error:TrustedResourceUrl")}function Nn(t,e){var n=En(t)
if(!An.test(n))throw Error("Invalid TrustedResourceUrl format: "+n)
return function(t){var e=new In
return e.a=t,e}(t=n.replace(kn,function(t,r){if(!Object.prototype.hasOwnProperty.call(e,r))throw Error('Found marker, "'+r+'", in format string, "'+n+'", but no valid label mapping found in args: '+JSON.stringify(e))
return(t=e[r])instanceof wn?En(t):encodeURIComponent(String(t))}))}In.prototype.na=!0,In.prototype.ma=function(){return this.a.toString()},In.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"}
var kn=/%{(\w+)}/g,An=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^\/\\]|[^:\/\\%]+\/|[^:\/\\%]*[?#]|about:blank#)/i,Dn={}
function Rn(){this.a="",this.b=Mn}function Pn(t){return t instanceof Rn&&t.constructor===Rn&&t.b===Mn?t.a:(R("expected object of type SafeUrl, got '"+t+"' of type "+d(t)),"type_error:SafeUrl")}Rn.prototype.na=!0,Rn.prototype.ma=function(){return this.a.toString()},Rn.prototype.toString=function(){return"SafeUrl{"+this.a+"}"}
var On=/^(?:(?:https?|mailto|ftp):|[^:\/?#]*(?:[\/?#]|$))/i
function xn(t){return t instanceof Rn?t:(t="object"==o(t)&&t.na?t.ma():String(t),On.test(t)||(t="about:invalid#zClosurez"),Ln(t))}var Mn={}
function Ln(t){var e=new Rn
return e.a=t,e}function Fn(){this.a="",this.b=Un}Ln("about:blank"),Fn.prototype.na=!0,Fn.prototype.ma=function(){return this.a.toString()},Fn.prototype.toString=function(){return"SafeHtml{"+this.a+"}"}
var Un={}
function qn(t){var e=new Fn
return e.a=t,e}function Vn(t){var e=document
return c(t)?e.getElementById(t):t}function Bn(t,e){st(e,function(e,n){e&&"object"==o(e)&&e.na&&(e=e.ma()),"style"==n?t.style.cssText=e:"class"==n?t.className=e:"for"==n?t.htmlFor=e:jn.hasOwnProperty(n)?t.setAttribute(jn[n],e):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?t.setAttribute(n,e):t[n]=e})}qn("<!DOCTYPE html>"),qn(""),qn("<br>")
var jn={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"}
function Wn(t){if(t&&"number"==typeof t.length){if(_(t))return"function"==typeof t.item||"string"==typeof t.item
if(g(t))return"function"==typeof t.item}return!1}function Qn(t){var e=[]
return function t(e,n,r){if(null==n)r.push("null")
else{if("object"==o(n)){if(m(n)){var i=n
n=i.length,r.push("[")
for(var a="",s=0;s<n;s++)r.push(a),t(e,i[s],r),a=","
return void r.push("]")}if(!(n instanceof String||n instanceof Number||n instanceof Boolean)){for(i in r.push("{"),a="",n)Object.prototype.hasOwnProperty.call(n,i)&&"function"!=typeof(s=n[i])&&(r.push(a),zn(i,r),r.push(":"),t(e,s,r),a=",")
return void r.push("}")}n=n.valueOf()}switch(o(n)){case"string":zn(n,r)
break
case"number":r.push(isFinite(n)&&!isNaN(n)?String(n):"null")
break
case"boolean":r.push(String(n))
break
case"function":r.push("null")
break
default:throw Error("Unknown type: "+o(n))}}}(new Kn,t,e),e.join("")}function Kn(){}var Gn={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Hn=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g
function zn(t,e){e.push('"',t.replace(Hn,function(t){var e=Gn[t]
return e||(e="\\u"+(65536|t.charCodeAt(0)).toString(16).substr(1),Gn[t]=e),e}),'"')}function Yn(){var t=dr()
return Xt&&!!oe&&11==oe||/Edge\/\d+/.test(t)}function Xn(){return u.window&&u.window.location.href||self&&self.location&&self.location.href||""}function Jn(t,e){e=e||u.window
var n="about:blank"
t&&(n=Pn(xn(t)).toString()),e.location.href=n}function $n(t){return!!((t=(t||dr()).toLowerCase()).match(/android/)||t.match(/webos/)||t.match(/iphone|ipad|ipod/)||t.match(/blackberry/)||t.match(/windows phone/)||t.match(/iemobile/))}function Zn(t){t=t||u.window
try{t.close()}catch(t){}}function tr(t,e,n){var r=Math.floor(1e9*Math.random()).toString()
e=e||500,n=n||600
var i=(window.screen.availHeight-n)/2,a=(window.screen.availWidth-e)/2
for(s in e={width:e,height:n,top:0<i?i:0,left:0<a?a:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},n=dr().toLowerCase(),r&&(e.target=r,nt(n,"crios/")&&(e.target="_blank")),lr(dr())==cr&&(t=t||"http://localhost",e.scrollbars=!0),n=t||"",(t=e)||(t={}),r=window,e=n instanceof Rn?n:xn(void 0!==n.href?n.href:String(n)),n=t.target||n.target,i=[],t)switch(s){case"width":case"height":case"top":case"left":i.push(s+"="+t[s])
break
case"target":case"noopener":case"noreferrer":break
default:i.push(s+"="+(t[s]?1:0))}var s=i.join(",")
if((at("iPhone")&&!at("iPod")&&!at("iPad")||at("iPad")||at("iPod"))&&r.navigator&&r.navigator.standalone&&n&&"_self"!=n?(s=r.document.createElement("A"),e instanceof Rn||e instanceof Rn||(e="object"==o(e)&&e.na?e.ma():String(e),On.test(e)||(e="about:invalid#zClosurez"),e=Ln(e)),s.href=Pn(e),s.setAttribute("target",n),t.noreferrer&&s.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,r,1),s.dispatchEvent(t),s={}):t.noreferrer?(s=r.open("",n,s),t=Pn(e).toString(),s&&($t&&nt(t,";")&&(t="'"+t.replace(/'/g,"%27")+"'"),s.opener=null,t=qn('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+yt(t)+'">'),s.document.write(function(t){return t instanceof Fn&&t.constructor===Fn&&t.b===Un?t.a:(R("expected object of type SafeHtml, got '"+t+"' of type "+d(t)),"type_error:SafeHtml")}(t)),s.document.close())):(s=r.open(Pn(e).toString(),n,s))&&t.noopener&&(s.opener=null),s)try{s.focus()}catch(t){}return s}var er=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nr=/^[^@]+@[^@]+$/
function rr(){var t=null
return new wt(function(e){"complete"==u.document.readyState?e():(t=function(){e()},Ne(window,"load",t))}).s(function(e){throw ke(window,"load",t),e})}function ir(t){return t=t||dr(),!("file:"!==_r()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function or(){var t=u.window
try{return!(!t||t==t.top)}catch(t){return!1}}function ar(){return void 0!==u.WorkerGlobalScope&&"function"==typeof u.importScripts}function sr(){return i.a.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":i.a.INTERNAL.hasOwnProperty("node")?"Node":ar()?"Worker":"Browser"}function ur(){var t=sr()
return"ReactNative"===t||"Node"===t}var cr="Firefox",hr="Chrome"
function lr(t){var e=t.toLowerCase()
return nt(e,"opera/")||nt(e,"opr/")||nt(e,"opios/")?"Opera":nt(e,"iemobile")?"IEMobile":nt(e,"msie")||nt(e,"trident/")?"IE":nt(e,"edge/")?"Edge":nt(e,"firefox/")?cr:nt(e,"silk/")?"Silk":nt(e,"blackberry")?"Blackberry":nt(e,"webos")?"Webos":!nt(e,"safari/")||nt(e,"chrome/")||nt(e,"crios/")||nt(e,"android")?!nt(e,"chrome/")&&!nt(e,"crios/")||nt(e,"edge/")?nt(e,"android")?"Android":(t=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==t.length?t[1]:"Other":hr:"Safari"}var fr={Sc:"FirebaseCore-web",Uc:"FirebaseUI-web"}
function pr(t,e){e=e||[]
var n,r=[],i={}
for(n in fr)i[fr[n]]=!0
for(n=0;n<e.length;n++)void 0!==i[e[n]]&&(delete i[e[n]],r.push(e[n]))
return r.sort(),(e=r).length||(e=["FirebaseCore-web"]),"Browser"===(r=sr())?r=lr(i=dr()):"Worker"===r&&(r=lr(i=dr())+"-"+r),r+"/JsCore/"+t+"/"+e.join(",")}function dr(){return u.navigator&&u.navigator.userAgent||""}function yr(t,e){t=t.split("."),e=e||u
for(var n=0;n<t.length&&"object"==o(e)&&null!=e;n++)e=e[t[n]]
return n!=t.length&&(e=void 0),e}function mr(){try{var t=u.localStorage,e=Sr()
if(t)return t.setItem(e,"1"),t.removeItem(e),!Yn()||!!u.indexedDB}catch(t){return ar()&&!!u.indexedDB}return!1}function vr(){return(gr()||"chrome-extension:"===_r()||ir())&&!ur()&&mr()&&!ar()}function gr(){return"http:"===_r()||"https:"===_r()}function _r(){return u.location&&u.location.protocol||null}function br(t){return!$n(t=t||dr())&&lr(t)!=cr}function wr(t){return void 0===t?null:Qn(t)}function Er(t){var e,n={}
for(e in t)t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e]&&(n[e]=t[e])
return n}function Tr(t){if(null!==t)return JSON.parse(t)}function Sr(t){return t||Math.floor(1e9*Math.random()).toString()}function Ir(t){return"Safari"!=lr(t=t||dr())&&!t.toLowerCase().match(/iphone|ipad|ipod/)}function Cr(){var t=u.___jsl
if(t&&t.H)for(var e in t.H)if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=t.H[e].L.concat(),t.CP)for(var n=0;n<t.CP.length;n++)t.CP[n]=null}function Nr(t,e){if(t>e)throw Error("Short delay should be less than long delay!")
this.a=t,this.c=e,t=dr(),e=sr(),this.b=$n(t)||"ReactNative"===e}function kr(){var t=u.document
return!t||void 0===t.visibilityState||"visible"==t.visibilityState}function Ar(t){try{var e=new Date(parseInt(t,10))
if(!isNaN(e.getTime())&&!/[^0-9]/.test(t))return e.toUTCString()}catch(t){}return null}function Dr(){return!(!yr("fireauth.oauthhelper",u)&&!yr("fireauth.iframe",u))}Nr.prototype.get=function(){var t=u.navigator
return!t||"boolean"!=typeof t.onLine||!gr()&&"chrome-extension:"!==_r()&&void 0===t.connection||t.onLine?this.b?this.c:this.a:Math.min(5e3,this.a)}
var Rr,Pr={}
function Or(t){Pr[t]||(Pr[t]=!0,"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t))}try{var xr={}
Object.defineProperty(xr,"abcd",{configurable:!0,enumerable:!0,value:1}),Object.defineProperty(xr,"abcd",{configurable:!0,enumerable:!0,value:2}),Rr=2==xr.abcd}catch(zt){Rr=!1}function Mr(t,e,n){Rr?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:n}):t[e]=n}function Lr(t,e){if(e)for(var n in e)e.hasOwnProperty(n)&&Mr(t,n,e[n])}function Fr(t){var e={}
return Lr(e,t),e}function Ur(t){var e=t
if("object"==o(t)&&null!=t)for(var n in e="length"in t?[]:{},t)Mr(e,n,Ur(t[n]))
return e}function qr(t){var e={},n=t[Br],r=t[jr]
if(!(t=t[Wr])||t!=Vr&&!n)throw Error("Invalid provider user info!")
e[Kr]=r||null,e[Qr]=n||null,Mr(this,Hr,t),Mr(this,Gr,Ur(e))}var Vr="EMAIL_SIGNIN",Br="email",jr="newEmail",Wr="requestType",Qr="email",Kr="fromEmail",Gr="data",Hr="operation"
function zr(t,e){this.code=Xr+t,this.message=e||Jr[t]||""}function Yr(t){var e=t&&t.code
return e?new zr(e.substring(Xr.length),t.message):null}N(zr,Error),zr.prototype.w=function(){return{code:this.code,message:this.message}},zr.prototype.toJSON=function(){return this.w()}
var Xr="auth/",Jr={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The OIDC ID token requires a valid unhashed nonce.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."}
function $r(t){var e=t[ri]
if(void 0===e)throw new zr("missing-continue-uri")
if("string"!=typeof e||"string"==typeof e&&!e.length)throw new zr("invalid-continue-uri")
this.h=e,this.b=this.a=null,this.g=!1
var n=t[Zr]
if(n&&"object"===o(n)){e=n[ai]
var r=n[ii]
if(n=n[oi],"string"==typeof e&&e.length){if(this.a=e,void 0!==r&&"boolean"!=typeof r)throw new zr("argument-error",ii+" property must be a boolean when specified.")
if(this.g=!!r,void 0!==n&&("string"!=typeof n||"string"==typeof n&&!n.length))throw new zr("argument-error",oi+" property must be a non empty string when specified.")
this.b=n||null}else{if(void 0!==e)throw new zr("argument-error",ai+" property must be a non empty string when specified.")
if(void 0!==r||void 0!==n)throw new zr("missing-android-pkg-name")}}else if(void 0!==n)throw new zr("argument-error",Zr+" property must be a non null object when specified.")
if(this.f=null,(e=t[ni])&&"object"===o(e)){if("string"==typeof(e=e[si])&&e.length)this.f=e
else if(void 0!==e)throw new zr("argument-error",si+" property must be a non empty string when specified.")}else if(void 0!==e)throw new zr("argument-error",ni+" property must be a non null object when specified.")
if(void 0!==(e=t[ei])&&"boolean"!=typeof e)throw new zr("argument-error",ei+" property must be a boolean when specified.")
if(this.c=!!e,void 0!==(t=t[ti])&&("string"!=typeof t||"string"==typeof t&&!t.length))throw new zr("argument-error",ti+" property must be a non empty string when specified.")
this.i=t||null}var Zr="android",ti="dynamicLinkDomain",ei="handleCodeInApp",ni="iOS",ri="url",ii="installApp",oi="minimumVersion",ai="packageName",si="bundleId"
function ui(t){var e={}
for(var n in e.continueUrl=t.h,e.canHandleCodeInApp=t.c,(e.androidPackageName=t.a)&&(e.androidMinimumVersion=t.b,e.androidInstallApp=t.g),e.iOSBundleId=t.f,e.dynamicLinkDomain=t.i,e)null===e[n]&&delete e[n]
return e}var ci=null,hi=null
function li(t){this.c=t.sub,C(),this.a=t.provider_id||t.firebase&&t.firebase.sign_in_provider||null,this.b=!!t.is_anonymous||"anonymous"==this.a}function fi(t){return(t=pi(t))&&t.sub&&t.iss&&t.aud&&t.exp?new li(t):null}function pi(t){if(!t)return null
if(3!=(t=t.split(".")).length)return null
for(var e=(4-(t=t[1]).length%4)%4,n=0;n<e;n++)t+="."
try{return JSON.parse(function(t){var e=""
return function(t,e){function n(e){for(;r<t.length;){var n=t.charAt(r++),i=hi[n]
if(null!=i)return i
if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n)}return e}!function(){if(!ci){ci={},hi={}
for(var t=0;65>t;t++)ci[t]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t),hi[ci[t]]=t,62<=t&&(hi["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)]=t)}}()
for(var r=0;;){var i=n(-1),o=n(0),a=n(64),s=n(64)
if(64===s&&-1===i)break
e(i<<2|o>>4),64!=a&&(e(o<<4&240|a>>2),64!=s&&e(a<<6&192|s))}}(t,function(t){e+=String.fromCharCode(t)}),e}(t))}catch(t){}return null}li.prototype.f=function(){return this.b}
var di,yi={Yc:{bb:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",jb:"https://securetoken.googleapis.com/v1/token",id:"p"},$c:{bb:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",jb:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},ad:{bb:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",jb:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}}
function mi(t){for(var e in yi)if(yi[e].id===t)return{firebaseEndpoint:(t=yi[e]).bb,secureTokenEndpoint:t.jb}
return null}di=mi("__EID__")?"__EID__":void 0
var vi="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),gi=["client_id","response_type","scope","redirect_uri","state"],_i={Tc:{Oa:"locale",Ba:500,Aa:600,Pa:"facebook.com",ib:gi},Vc:{Oa:null,Ba:500,Aa:620,Pa:"github.com",ib:gi},Wc:{Oa:"hl",Ba:515,Aa:680,Pa:"google.com",ib:gi},bd:{Oa:"lang",Ba:485,Aa:705,Pa:"twitter.com",ib:vi}}
function bi(t){for(var e in _i)if(_i[e].Pa==t)return _i[e]
return null}function wi(t){var e={}
e["facebook.com"]=Ci,e["google.com"]=ki,e["github.com"]=Ni,e["twitter.com"]=Ai
var n=t&&t[Ti]
try{if(n)return e[n]?new e[n](t):new Ii(t)
if(void 0!==t[Ei])return new Si(t)}catch(t){}return null}var Ei="idToken",Ti="providerId"
function Si(t){var e=t[Ti]
if(!e&&t[Ei]){var n=fi(t[Ei])
n&&n.a&&(e=n.a)}if(!e)throw Error("Invalid additional user info!")
"anonymous"!=e&&"custom"!=e||(e=null),n=!1,void 0!==t.isNewUser?n=!!t.isNewUser:"identitytoolkit#SignupNewUserResponse"===t.kind&&(n=!0),Mr(this,"providerId",e),Mr(this,"isNewUser",n)}function Ii(t){Si.call(this,t),Mr(this,"profile",Ur((t=Tr(t.rawUserInfo||"{}"))||{}))}function Ci(t){if(Ii.call(this,t),"facebook.com"!=this.providerId)throw Error("Invalid provider ID!")}function Ni(t){if(Ii.call(this,t),"github.com"!=this.providerId)throw Error("Invalid provider ID!")
Mr(this,"username",this.profile&&this.profile.login||null)}function ki(t){if(Ii.call(this,t),"google.com"!=this.providerId)throw Error("Invalid provider ID!")}function Ai(t){if(Ii.call(this,t),"twitter.com"!=this.providerId)throw Error("Invalid provider ID!")
Mr(this,"username",t.screenName||null)}function Di(t){this.a=en(t)}function Ri(t){var e=en(t),n=tn(e,"link"),r=tn(en(n),"link")
return e=tn(e,"deep_link_id"),tn(en(e),"link")||e||r||n||t}function Pi(){}function Oi(t,e){return t.then(function(t){if(t[ba]){var n=fi(t[ba])
if(!n||e!=n.c)throw new zr("user-mismatch")
return t}throw new zr("user-mismatch")}).s(function(t){throw t&&t.code&&t.code==Xr+"user-not-found"?new zr("user-mismatch"):t})}function xi(t,e){if(!e)throw new zr("internal-error","failed to construct a credential")
this.a=e,Mr(this,"providerId",t),Mr(this,"signInMethod",t)}function Mi(t){return{pendingToken:t.a,requestUri:"http://localhost"}}function Li(t){if(t&&t.providerId&&t.signInMethod&&0==t.providerId.indexOf("saml.")&&t.pendingToken)try{return new xi(t.providerId,t.pendingToken)}catch(t){}return null}function Fi(t,e,n){if(this.a=null,e.idToken||e.accessToken)e.idToken&&Mr(this,"idToken",e.idToken),e.accessToken&&Mr(this,"accessToken",e.accessToken),e.nonce&&!e.pendingToken&&Mr(this,"nonce",e.nonce),e.pendingToken&&(this.a=e.pendingToken)
else{if(!e.oauthToken||!e.oauthTokenSecret)throw new zr("internal-error","failed to construct a credential")
Mr(this,"accessToken",e.oauthToken),Mr(this,"secret",e.oauthTokenSecret)}Mr(this,"providerId",t),Mr(this,"signInMethod",n)}function Ui(t){var e={}
return t.idToken&&(e.id_token=t.idToken),t.accessToken&&(e.access_token=t.accessToken),t.secret&&(e.oauth_token_secret=t.secret),e.providerId=t.providerId,t.nonce&&!t.a&&(e.nonce=t.nonce),e={postBody:dn(e).toString(),requestUri:"http://localhost"},t.a&&(delete e.postBody,e.pendingToken=t.a),e}function qi(t){if(t&&t.providerId&&t.signInMethod){var e={idToken:t.oauthIdToken,accessToken:t.oauthTokenSecret?null:t.oauthAccessToken,oauthTokenSecret:t.oauthTokenSecret,oauthToken:t.oauthTokenSecret&&t.oauthAccessToken,nonce:t.nonce,pendingToken:t.pendingToken}
try{return new Fi(t.providerId,e,t.signInMethod)}catch(t){}}return null}function Vi(t,e){this.Cc=e||[],Lr(this,{providerId:t,isOAuthProvider:!0}),this.zb={},this.eb=(bi(t)||{}).Oa||null,this.ab=null}function Bi(t){if("string"!=typeof t||0!=t.indexOf("saml."))throw new zr("argument-error",'SAML provider IDs must be prefixed with "saml."')
Vi.call(this,t,[])}function ji(t){Vi.call(this,t,gi),this.a=[]}function Wi(){ji.call(this,"facebook.com")}function Qi(t){if(!t)throw new zr("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var e=t
return _(t)&&(e=t.accessToken),(new Wi).credential({accessToken:e})}function Ki(){ji.call(this,"github.com")}function Gi(t){if(!t)throw new zr("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var e=t
return _(t)&&(e=t.accessToken),(new Ki).credential({accessToken:e})}function Hi(){ji.call(this,"google.com"),this.ua("profile")}function zi(t,e){var n=t
return _(t)&&(n=t.idToken,e=t.accessToken),(new Hi).credential({idToken:n,accessToken:e})}function Yi(){Vi.call(this,"twitter.com",vi)}function Xi(t,e){var n=t
if(_(n)||(n={oauthToken:t,oauthTokenSecret:e}),!n.oauthToken||!n.oauthTokenSecret)throw new zr("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).")
return new Fi("twitter.com",n,"twitter.com")}function Ji(t,e,n){this.a=t,this.c=e,Mr(this,"providerId","password"),Mr(this,"signInMethod",n===Zi.EMAIL_LINK_SIGN_IN_METHOD?Zi.EMAIL_LINK_SIGN_IN_METHOD:Zi.EMAIL_PASSWORD_SIGN_IN_METHOD)}function $i(t){return t&&t.email&&t.password?new Ji(t.email,t.password,t.signInMethod):null}function Zi(){Lr(this,{providerId:"password",isOAuthProvider:!1})}function to(t,e){if(!(e=eo(e)))throw new zr("argument-error","Invalid email link!")
return new Ji(t,e,Zi.EMAIL_LINK_SIGN_IN_METHOD)}function eo(t){var e=tn((t=new Di(t=Ri(t))).a,"oobCode")||null
return"signIn"===(tn(t.a,"mode")||null)&&e?e:null}function no(t){if(!(t.Ua&&t.Ta||t.Fa&&t.$))throw new zr("internal-error")
this.a=t,Mr(this,"providerId","phone"),Mr(this,"signInMethod","phone")}function ro(t){if(t&&"phone"===t.providerId&&(t.verificationId&&t.verificationCode||t.temporaryProof&&t.phoneNumber)){var e={}
return q(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(n){t[n]&&(e[n]=t[n])}),new no(e)}return null}function io(t){return t.a.Fa&&t.a.$?{temporaryProof:t.a.Fa,phoneNumber:t.a.$}:{sessionInfo:t.a.Ua,code:t.a.Ta}}function oo(t){try{this.a=t||i.a.auth()}catch(t){throw new zr("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")}Lr(this,{providerId:"phone",isOAuthProvider:!1})}function ao(t,e){if(!t)throw new zr("missing-verification-id")
if(!e)throw new zr("missing-verification-code")
return new no({Ua:t,Ta:e})}function so(t){if(t.temporaryProof&&t.phoneNumber)return new no({Fa:t.temporaryProof,$:t.phoneNumber})
var e=t&&t.providerId
if(!e||"password"===e)return null
var n=t&&t.oauthAccessToken,r=t&&t.oauthTokenSecret,i=t&&t.nonce,o=t&&t.oauthIdToken,a=t&&t.pendingToken
try{switch(e){case"google.com":return zi(o,n)
case"facebook.com":return Qi(n)
case"github.com":return Gi(n)
case"twitter.com":return Xi(n,r)
default:return n||r||o||a?a?0==e.indexOf("saml.")?new xi(e,a):new Fi(e,{pendingToken:a,idToken:t.oauthIdToken,accessToken:t.oauthAccessToken},e):new ji(e).credential({idToken:o,accessToken:n,rawNonce:i}):null}}catch(t){return null}}function uo(t){if(!t.isOAuthProvider)throw new zr("invalid-oauth-provider")}function co(t,e,n,r,i,o){if(this.c=t,this.b=e||null,this.g=n||null,this.f=r||null,this.h=o||null,this.a=i||null,!this.g&&!this.a)throw new zr("invalid-auth-event")
if(this.g&&this.a)throw new zr("invalid-auth-event")
if(this.g&&!this.f)throw new zr("invalid-auth-event")}function ho(t){return(t=t||{}).type?new co(t.type,t.eventId,t.urlResponse,t.sessionId,t.error&&Yr(t.error),t.postBody):null}function lo(){this.b=null,this.a=[]}N(Ii,Si),N(Ci,Ii),N(Ni,Ii),N(ki,Ii),N(Ai,Ii),xi.prototype.la=function(t){return Ua(t,Mi(this))},xi.prototype.b=function(t,e){var n=Mi(this)
return n.idToken=e,qa(t,n)},xi.prototype.f=function(t,e){return Oi(Va(t,Mi(this)),e)},xi.prototype.w=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}},Fi.prototype.la=function(t){return Ua(t,Ui(this))},Fi.prototype.b=function(t,e){var n=Ui(this)
return n.idToken=e,qa(t,n)},Fi.prototype.f=function(t,e){return Oi(Va(t,Ui(this)),e)},Fi.prototype.w=function(){var t={providerId:this.providerId,signInMethod:this.signInMethod}
return this.idToken&&(t.oauthIdToken=this.idToken),this.accessToken&&(t.oauthAccessToken=this.accessToken),this.secret&&(t.oauthTokenSecret=this.secret),this.nonce&&(t.nonce=this.nonce),this.a&&(t.pendingToken=this.a),t},Vi.prototype.Da=function(t){return this.zb=ct(t),this},N(Bi,Vi),N(ji,Vi),ji.prototype.ua=function(t){return j(this.a,t)||this.a.push(t),this},ji.prototype.Fb=function(){return G(this.a)},ji.prototype.credential=function(t,e){var n
if(!(n=_(t)?{idToken:t.idToken||null,accessToken:t.accessToken||null,nonce:t.rawNonce||null}:{idToken:t||null,accessToken:e||null}).idToken&&!n.accessToken)throw new zr("argument-error","credential failed: must provide the ID token and/or the access token.")
return new Fi(this.providerId,n,this.providerId)},N(Wi,ji),Mr(Wi,"PROVIDER_ID","facebook.com"),Mr(Wi,"FACEBOOK_SIGN_IN_METHOD","facebook.com"),N(Ki,ji),Mr(Ki,"PROVIDER_ID","github.com"),Mr(Ki,"GITHUB_SIGN_IN_METHOD","github.com"),N(Hi,ji),Mr(Hi,"PROVIDER_ID","google.com"),Mr(Hi,"GOOGLE_SIGN_IN_METHOD","google.com"),N(Yi,Vi),Mr(Yi,"PROVIDER_ID","twitter.com"),Mr(Yi,"TWITTER_SIGN_IN_METHOD","twitter.com"),Ji.prototype.la=function(t){return this.signInMethod==Zi.EMAIL_LINK_SIGN_IN_METHOD?ys(t,za,{email:this.a,oobCode:this.c}):ys(t,ls,{email:this.a,password:this.c})},Ji.prototype.b=function(t,e){return this.signInMethod==Zi.EMAIL_LINK_SIGN_IN_METHOD?ys(t,Ya,{idToken:e,email:this.a,oobCode:this.c}):ys(t,os,{idToken:e,email:this.a,password:this.c})},Ji.prototype.f=function(t,e){return Oi(this.la(t),e)},Ji.prototype.w=function(){return{email:this.a,password:this.c,signInMethod:this.signInMethod}},Lr(Zi,{PROVIDER_ID:"password"}),Lr(Zi,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"}),Lr(Zi,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"}),no.prototype.la=function(t){return t.Va(io(this))},no.prototype.b=function(t,e){var n=io(this)
return n.idToken=e,ys(t,ps,n)},no.prototype.f=function(t,e){var n=io(this)
return n.operation="REAUTH",Oi(t=ys(t,ds,n),e)},no.prototype.w=function(){var t={providerId:"phone"}
return this.a.Ua&&(t.verificationId=this.a.Ua),this.a.Ta&&(t.verificationCode=this.a.Ta),this.a.Fa&&(t.temporaryProof=this.a.Fa),this.a.$&&(t.phoneNumber=this.a.$),t},oo.prototype.Va=function(t,e){var n=this.a.c
return kt(e.verify()).then(function(r){if(!c(r))throw new zr("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.")
switch(e.type){case"recaptcha":return function(t,e){return ys(n,rs,e)}(0,{phoneNumber:t,recaptchaToken:r}).then(function(t){return"function"==typeof e.reset&&e.reset(),t},function(t){throw"function"==typeof e.reset&&e.reset(),t})
default:throw new zr("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')}})},Lr(oo,{PROVIDER_ID:"phone"}),Lr(oo,{PHONE_SIGN_IN_METHOD:"phone"}),co.prototype.getUid=function(){var t=[]
return t.push(this.c),this.b&&t.push(this.b),this.f&&t.push(this.f),this.i&&t.push(this.i),t.join("-")},co.prototype.w=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.h,error:this.a&&this.a.w()}}
var fo,po=null
function yo(t){var e="unauthorized-domain",n=void 0,r=en(t)
t=r.b,"chrome-extension"==(r=r.f)?n=dt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):"http"==r||"https"==r?n=dt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):e="operation-not-supported-in-this-environment",zr.call(this,e,n)}function mo(t,e,n){zr.call(this,t,n),(t=e||{}).Ab&&Mr(this,"email",t.Ab),t.$&&Mr(this,"phoneNumber",t.$),t.credential&&Mr(this,"credential",t.credential)}function vo(t){if(t.code){var e=t.code||""
0==e.indexOf(Xr)&&(e=e.substring(Xr.length))
var n={credential:so(t)}
if(t.email)n.Ab=t.email
else if(t.phoneNumber)n.$=t.phoneNumber
else if(!n.credential)return new zr(e,t.message||void 0)
return new mo(e,n,t.message)}return null}function go(){}function _o(t){return t.c||(t.c=t.b())}function bo(){}function wo(t){if(!t.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],n=0;n<e.length;n++){var r=e[n]
try{return new ActiveXObject(r),t.f=r}catch(t){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")}return t.f}function Eo(){}function To(){this.a=new XDomainRequest,this.readyState=0,this.onreadystatechange=null,this.responseType=this.responseText=this.response="",this.status=-1,this.statusText="",this.a.onload=S(this.cc,this),this.a.onerror=S(this.Gb,this),this.a.onprogress=S(this.dc,this),this.a.ontimeout=S(this.hc,this)}function So(t,e){t.readyState=e,t.onreadystatechange&&t.onreadystatechange()}function Io(t,e,n){this.reset(t,e,n,void 0,void 0)}function Co(t){this.f=t,this.b=this.c=this.a=null}function No(t,e){this.name=t,this.value=e}lo.prototype.subscribe=function(t){var e=this
this.a.push(t),this.b||(this.b=function(t){for(var n=0;n<e.a.length;n++)e.a[n](t)},"function"==typeof(t=yr("universalLinks.subscribe",u))&&t(null,this.b))},lo.prototype.unsubscribe=function(t){Q(this.a,function(e){return e==t})},N(yo,zr),N(mo,zr),mo.prototype.w=function(){var t={code:this.code,message:this.message}
this.email&&(t.email=this.email),this.phoneNumber&&(t.phoneNumber=this.phoneNumber)
var e=this.credential&&this.credential.w()
return e&&pt(t,e),t},mo.prototype.toJSON=function(){return this.w()},go.prototype.c=null,N(bo,go),bo.prototype.a=function(){var t=wo(this)
return t?new ActiveXObject(t):new XMLHttpRequest},bo.prototype.b=function(){var t={}
return wo(this)&&(t[0]=!0,t[1]=!0),t},fo=new bo,N(Eo,go),Eo.prototype.a=function(){var t=new XMLHttpRequest
if("withCredentials"in t)return t
if("undefined"!=typeof XDomainRequest)return new To
throw Error("Unsupported browser")},Eo.prototype.b=function(){return{}},(t=To.prototype).open=function(t,e,n){if(null!=n&&!n)throw Error("Only async requests are supported.")
this.a.open(t,e)},t.send=function(t){if(t){if("string"!=typeof t)throw Error("Only string data is supported")
this.a.send(t)}else this.a.send()},t.abort=function(){this.a.abort()},t.setRequestHeader=function(){},t.getResponseHeader=function(t){return"content-type"==t.toLowerCase()?this.a.contentType:""},t.cc=function(){this.status=200,this.response=this.responseText=this.a.responseText,So(this,4)},t.Gb=function(){this.status=500,this.response=this.responseText="",So(this,4)},t.hc=function(){this.Gb()},t.dc=function(){this.status=200,So(this,1)},t.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType},Io.prototype.a=null,Io.prototype.reset=function(t,e,n,r,i){r||C(),delete this.a},No.prototype.toString=function(){return this.name}
var ko=new No("SEVERE",1e3),Ao=new No("WARNING",900),Do=new No("CONFIG",700),Ro=new No("FINE",500)
Co.prototype.log=function(t,e,n){if(t.value>=function t(e){return e.c?e.c:e.a?t(e.a):(R("Root logger has no level set."),null)}(this).value)for(g(e)&&(e=e()),t=new Io(t,String(e),this.f),n&&(t.a=n),n=this;n;)n=n.a}
var Po={},Oo=null
function xo(t){var e
if(Oo||(Oo=new Co(""),Po[""]=Oo,Oo.c=Do),!(e=Po[t])){e=new Co(t)
var n=t.lastIndexOf("."),r=t.substr(n+1);(n=xo(t.substr(0,n))).b||(n.b={}),n.b[r]=e,e.a=n,Po[t]=e}return e}function Mo(t,e){t&&t.log(Ro,e,void 0)}function Lo(t){this.f=t}function Fo(t){Fe.call(this),this.u=t,this.readyState=Uo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.i=new Headers,this.b=null,this.o="GET",this.g="",this.a=!1,this.h=xo("goog.net.FetchXmlHttp"),this.l=this.c=this.f=null}N(Lo,go),Lo.prototype.a=function(){return new Fo(this.f)},Lo.prototype.b=function(t){return function(){return t}}({}),N(Fo,Fe)
var Uo=0
function qo(t){t.c.read().then(t.bc.bind(t)).catch(t.Ma.bind(t))}function Vo(t,e){e&&t.f&&(t.status=t.f.status,t.statusText=t.f.statusText),t.readyState=4,t.f=null,t.c=null,t.l=null,Bo(t)}function Bo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function jo(t){Fe.call(this),this.headers=new Ke,this.D=t||null,this.c=!1,this.A=this.a=null,this.h=this.N=this.l="",this.f=this.I=this.i=this.G=!1,this.g=0,this.u=null,this.o=Wo,this.v=this.O=!1}(t=Fo.prototype).open=function(t,e){if(this.readyState!=Uo)throw this.abort(),Error("Error reopening a connection")
this.o=t,this.g=e,this.readyState=1,Bo(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ")
this.a=!0
var e={headers:this.i,method:this.o,credentials:void 0,cache:void 0}
t&&(e.body=t),this.u.fetch(new Request(this.g,e)).then(this.gc.bind(this),this.Ma.bind(this))},t.abort=function(){this.response=this.responseText="",this.i=new Headers,this.status=0,this.c&&this.c.cancel("Request was aborted."),1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Vo(this,!1)),this.readyState=Uo},t.gc=function(t){this.a&&(this.f=t,this.b||(this.b=t.headers,this.readyState=2,Bo(this)),this.a&&(this.readyState=3,Bo(this),this.a&&("arraybuffer"===this.responseType?t.arrayBuffer().then(this.ec.bind(this),this.Ma.bind(this)):void 0!==u.ReadableStream&&"body"in t?(this.response=this.responseText="",this.c=t.body.getReader(),this.l=new TextDecoder,qo(this)):t.text().then(this.fc.bind(this),this.Ma.bind(this)))))},t.bc=function(t){if(this.a){var e=this.l.decode(t.value?t.value:new Uint8Array(0),{stream:!t.done})
e&&(this.response=this.responseText+=e),t.done?Vo(this,!0):Bo(this),3==this.readyState&&qo(this)}},t.fc=function(t){this.a&&(this.response=this.responseText=t,Vo(this,!0))},t.ec=function(t){this.a&&(this.response=t,Vo(this,!0))},t.Ma=function(t){var e=this.h
e&&e.log(Ao,"Failed to fetch url "+this.g,t instanceof Error?t:Error(t)),this.a&&Vo(this,!0)},t.setRequestHeader=function(t,e){this.i.append(t,e)},t.getResponseHeader=function(t){return this.b?this.b.get(t.toLowerCase())||"":((t=this.h)&&t.log(Ao,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")},t.getAllResponseHeaders=function(){if(!this.b){var t=this.h
return t&&t.log(Ao,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0),""}t=[]
for(var e=this.b.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next()
return t.join("\r\n")},N(jo,Fe)
var Wo=""
jo.prototype.b=xo("goog.net.XhrIo")
var Qo=/^https?$/i,Ko=["POST","PUT"]
function Go(t){return"content-type"==t.toLowerCase()}function Ho(t,e){t.c=!1,t.a&&(t.f=!0,t.a.abort(),t.f=!1),t.h=e,zo(t),Xo(t)}function zo(t){t.G||(t.G=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function Yo(t){if(t.c&&void 0!==s)if(t.A[1]&&4==$o(t)&&2==Zo(t))Mo(t.b,ta(t,"Local request error detected and ignored"))
else if(t.i&&4==$o(t))Be(t.Jb,0,t)
else if(t.dispatchEvent("readystatechange"),4==$o(t)){Mo(t.b,ta(t,"Request complete")),t.c=!1
try{var e,n=Zo(t)
t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0
break t
default:r=!1}if(!(e=r)){var i
if(i=0===n){var o=String(t.l).match(ze)[1]||null
if(!o&&u.self&&u.self.location){var a=u.self.location.protocol
o=a.substr(0,a.length-1)}i=!Qo.test(o?o.toLowerCase():"")}e=i}if(e)t.dispatchEvent("complete"),t.dispatchEvent("success")
else{try{var c=2<$o(t)?t.a.statusText:""}catch(e){Mo(t.b,"Can not get status: "+e.message),c=""}t.h=c+" ["+Zo(t)+"]",zo(t)}}finally{Xo(t)}}}function Xo(t,e){if(t.a){Jo(t)
var n=t.a,r=t.A[0]?p:null
t.a=null,t.A=null,e||t.dispatchEvent("ready")
try{n.onreadystatechange=r}catch(e){(t=t.b)&&t.log(ko,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}function Jo(t){t.a&&t.v&&(t.a.ontimeout=null),t.u&&(u.clearTimeout(t.u),t.u=null)}function $o(t){return t.a?t.a.readyState:0}function Zo(t){try{return 2<$o(t)?t.a.status:-1}catch(t){return-1}}function ta(t,e){return e+" ["+t.N+" "+t.l+" "+Zo(t)+"]"}function ea(t){var e=fa
this.g=[],this.v=e,this.u=t||null,this.f=this.a=!1,this.c=void 0,this.l=this.A=this.i=!1,this.h=0,this.b=null,this.m=0}function na(t,e,n){t.a=!0,t.c=n,t.f=!e,aa(t)}function ra(t){if(t.a){if(!t.l)throw new sa(t)
t.l=!1}}function ia(t,e,n,r){t.g.push([e,n,r]),t.a&&aa(t)}function oa(t){return B(t.g,function(t){return g(t[1])})}function aa(t){if(t.h&&t.a&&oa(t)){var e=t.h,n=ha[e]
n&&(u.clearTimeout(n.a),delete ha[e]),t.h=0}t.b&&(t.b.m--,delete t.b),e=t.c
for(var r=n=!1;t.g.length&&!t.i;){var i=t.g.shift(),o=i[0],a=i[1]
if(i=i[2],o=t.f?a:o)try{var s=o.call(i||t.u,e)
void 0!==s&&(t.f=t.f&&(s==e||s instanceof Error),t.c=e=s),(k(e)||"function"==typeof u.Promise&&e instanceof u.Promise)&&(r=!0,t.i=!0)}catch(r){e=r,t.f=!0,oa(t)||(n=!0)}}t.c=e,r&&(s=S(t.o,t,!0),r=S(t.o,t,!1),e instanceof ea?(ia(e,s,r),e.A=!0):e.then(s,r)),n&&(e=new ca(e),ha[e.a]=e,t.h=e.a)}function sa(){A.call(this)}function ua(){A.call(this)}function ca(t){this.a=u.setTimeout(S(this.c,this),0),this.b=t}(t=jo.prototype).Ga=function(){void 0!==s&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Mo(this.b,ta(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))},t.abort=function(){this.a&&this.c&&(Mo(this.b,ta(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Xo(this))},t.va=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Xo(this,!0)),jo.qb.va.call(this)},t.Jb=function(){this.qa||(this.I||this.i||this.f?Yo(this):this.vc())},t.vc=function(){Yo(this)},t.getResponse=function(){try{if(!this.a)return null
if("response"in this.a)return this.a.response
switch(this.o){case Wo:case"text":return this.a.responseText
case"arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var t=this.b
return t&&t.log(ko,"Response type "+this.o+" is not supported on this browser",void 0),null}catch(t){return Mo(this.b,"Can not get response: "+t.message),null}},ea.prototype.cancel=function(t){if(this.a)this.c instanceof ea&&this.c.cancel()
else{if(this.b){var e=this.b
delete this.b,t?e.cancel(t):(e.m--,0>=e.m&&e.cancel())}this.v?this.v.call(this.u,this):this.l=!0,this.a||(t=new ua(this),ra(this),na(this,!1,t))}},ea.prototype.o=function(t,e){this.i=!1,na(this,t,e)},ea.prototype.then=function(t,e,n){var r,i,o=new wt(function(t,e){r=t,i=e})
return ia(this,r,function(t){t instanceof ua?o.cancel():i(t)}),o.then(t,e,n)},ea.prototype.$goog_Thenable=!0,N(sa,A),sa.prototype.message="Deferred has already fired",sa.prototype.name="AlreadyCalledError",N(ua,A),ua.prototype.message="Deferred was canceled",ua.prototype.name="CanceledError",ca.prototype.c=function(){throw delete ha[this.a],this.b}
var ha={}
function la(t){var e={},n=e.document||document,r=Cn(t).toString(),i=document.createElement("SCRIPT"),o={Lb:i,Ga:void 0},a=new ea(o),s=null,c=null!=e.timeout?e.timeout:5e3
return 0<c&&(s=window.setTimeout(function(){pa(i,!0)
var t=new ma(ya,"Timeout reached for loading script "+r)
ra(a),na(a,!1,t)},c),o.Ga=s),i.onload=i.onreadystatechange=function(){i.readyState&&"loaded"!=i.readyState&&"complete"!=i.readyState||(pa(i,e.dd||!1,s),ra(a),na(a,!0,null))},i.onerror=function(){pa(i,!0,s)
var t=new ma(da,"Error while loading script "+r)
ra(a),na(a,!1,t)},pt(o=e.attributes||{},{type:"text/javascript",charset:"UTF-8"}),Bn(i,o),function(t,e){t.src=Cn(e),null===f&&(f=(e=(e=u.document).querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&l.test(e)?e:""),(e=f)&&t.setAttribute("nonce",e)}(i,t),function(t){var e
return(e=(t||document).getElementsByTagName("HEAD"))&&0!=e.length?e[0]:t.documentElement}(n).appendChild(i),a}function fa(){if(this&&this.Lb){var t=this.Lb
t&&"SCRIPT"==t.tagName&&pa(t,!0,this.Ga)}}function pa(t,e,n){null!=n&&u.clearTimeout(n),t.onload=p,t.onerror=p,t.onreadystatechange=p,e&&window.setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},0)}var da=0,ya=1
function ma(t,e){var n="Jsloader error (code #"+t+")"
e&&(n+=": "+e),A.call(this,n),this.code=t}function va(t){this.f=t}function ga(t,e,n){if(this.b=t,t=e||{},this.i=t.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token",this.m=t.secureTokenTimeout||wa,this.f=ct(t.secureTokenHeaders||Ea),this.g=t.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",this.h=t.firebaseTimeout||Ta,this.a=ct(t.firebaseHeaders||Sa),n&&(this.a["X-Client-Version"]=n,this.f["X-Client-Version"]=n),n="Node"==sr(),!(n=u.XMLHttpRequest||n&&i.a.INTERNAL.node&&i.a.INTERNAL.node.XMLHttpRequest)&&!ar())throw new zr("internal-error","The XMLHttpRequest compatibility library was not found.")
this.c=void 0,ar()?this.c=new Lo(self):ur()?this.c=new va(n):this.c=new Eo}N(ma,A),N(va,go),va.prototype.a=function(){return new this.f},va.prototype.b=function(){return{}}
var _a,ba="idToken",wa=new Nr(3e4,6e4),Ea={"Content-Type":"application/x-www-form-urlencoded"},Ta=new Nr(3e4,6e4),Sa={"Content-Type":"application/json"}
function Ia(t,e){e?t.a["X-Firebase-Locale"]=e:delete t.a["X-Firebase-Locale"]}function Ca(t,e){e?(t.a["X-Client-Version"]=e,t.f["X-Client-Version"]=e):(delete t.a["X-Client-Version"],delete t.f["X-Client-Version"])}function Na(t,e,n,r,i,o,a){(function(){var t=dr()
return!((t=lr(t)!=hr?null:(t=t.match(/\sChrome\/(\d+)/i))&&2==t.length?parseInt(t[1],10):null)&&30>t||Xt&&oe&&!(9<oe))})()||ar()?t=S(t.o,t):(_a||(_a=new wt(function(t,e){!function(t,e){if(((window.gapi||{}).client||{}).request)t()
else{u[Aa]=function(){((window.gapi||{}).client||{}).request?t():e(Error("CORS_UNSUPPORTED"))}
var n=Nn(ka,{onload:Aa})
!function(t,e){ia(la(n),null,e,void 0)}(0,function(){e(Error("CORS_UNSUPPORTED"))})}}(t,e)})),t=S(t.l,t)),t(e,n,r,i,o,a)}ga.prototype.o=function(t,e,n,r,i,o){if(ar()&&(void 0===u.fetch||void 0===u.Headers||void 0===u.Request))throw new zr("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.")
var a=new jo(this.c)
if(o){a.g=Math.max(0,o)
var s=setTimeout(function(){a.dispatchEvent("timeout")},o)}Ue(a,"complete",function(){s&&clearTimeout(s)
var t=null
try{t=JSON.parse(function(t){try{return t.a?t.a.responseText:""}catch(e){return Mo(t.b,"Can not get responseText: "+e.message),""}}(this))||null}catch(e){t=null}e&&e(t)}),qe(a,"ready",function(){s&&clearTimeout(s),Kt(this)}),qe(a,"timeout",function(){s&&clearTimeout(s),Kt(this),e&&e(null)}),function(t,e,n,r,i){if(t.a)throw Error("[goog.net.XhrIo] Object is active with another request="+t.l+"; newUri="+e)
n=n?n.toUpperCase():"GET",t.l=e,t.h="",t.N=n,t.G=!1,t.c=!0,t.a=t.D?t.D.a():fo.a(),t.A=t.D?_o(t.D):_o(fo),t.a.onreadystatechange=S(t.Jb,t)
try{Mo(t.b,ta(t,"Opening Xhr")),t.I=!0,t.a.open(n,String(e),!0),t.I=!1}catch(e){return Mo(t.b,ta(t,"Error opening Xhr: "+e.message)),void Ho(t,e)}e=r||""
var o=new Ke(t.headers)
i&&function(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0)
else if(v(t)||c(t))q(t,e,void 0)
else for(var n=Qe(t),r=We(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}(i,function(t,e){o.set(e,t)}),i=function(t){t:{for(var e=Go,n=t.length,r=c(t)?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i
break t}e=-1}return 0>e?null:c(t)?t.charAt(e):t[e]}(o.U()),r=u.FormData&&e instanceof u.FormData,!j(Ko,n)||i||r||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.forEach(function(t,e){this.a.setRequestHeader(e,t)},t),t.o&&(t.a.responseType=t.o),"withCredentials"in t.a&&t.a.withCredentials!==t.O&&(t.a.withCredentials=t.O)
try{Jo(t),0<t.g&&(t.v=function(t){return Xt&&se(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(t.a),Mo(t.b,ta(t,"Will abort after "+t.g+"ms if incomplete, xhr2 "+t.v)),t.v?(t.a.timeout=t.g,t.a.ontimeout=S(t.Ga,t)):t.u=Be(t.Ga,t.g,t)),Mo(t.b,ta(t,"Sending request")),t.i=!0,t.a.send(e),t.i=!1}catch(e){Mo(t.b,ta(t,"Send error: "+e.message)),Ho(t,e)}}(a,t,n,r,i)}
var ka=new wn(Sn,"https://apis.google.com/js/client.js?onload=%{onload}"),Aa="__fcb"+Math.floor(1e6*Math.random()).toString()
function Da(t){if(!c(t=t.email)||!nr.test(t))throw new zr("invalid-email")}function Ra(t){"email"in t&&Da(t)}function Pa(t){if(!t[ba])throw new zr("internal-error")}function Oa(t){if(t.phoneNumber||t.temporaryProof){if(!t.phoneNumber||!t.temporaryProof)throw new zr("internal-error")}else{if(!t.sessionInfo)throw new zr("missing-verification-id")
if(!t.code)throw new zr("missing-verification-code")}}ga.prototype.l=function(t,e,n,r,i){var o=this
_a.then(function(){window.gapi.client.setApiKey(o.b)
var a=window.gapi.auth.getToken()
window.gapi.auth.setToken(null),window.gapi.client.request({path:t,method:n,body:r,headers:i,authType:"none",callback:function(t){window.gapi.auth.setToken(a),e&&e(t)}})}).s(function(t){e&&e({error:{message:t&&t.message||"CORS_UNSUPPORTED"}})})},ga.prototype.ob=function(){return ys(this,as,{})},ga.prototype.rb=function(t,e){return ys(this,is,{idToken:t,email:e})},ga.prototype.sb=function(t,e){return ys(this,os,{idToken:t,password:e})}
var xa={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"}
function Ma(t){if(!t.requestUri||!t.sessionId&&!t.postBody&&!t.pendingToken)throw new zr("internal-error")}function La(t,e){return e.oauthIdToken&&e.providerId&&0==e.providerId.indexOf("oidc.")&&!e.pendingToken&&(t.sessionId?e.nonce=t.sessionId:t.postBody&&mn(t=new fn(t.postBody),"nonce")&&(e.nonce=t.get("nonce"))),e}function Fa(t){var e=null
if(t.needConfirmation?(t.code="account-exists-with-different-credential",e=vo(t)):"FEDERATED_USER_ID_ALREADY_LINKED"==t.errorMessage?(t.code="credential-already-in-use",e=vo(t)):"EMAIL_EXISTS"==t.errorMessage?(t.code="email-already-in-use",e=vo(t)):t.errorMessage&&(e=ms(t.errorMessage)),e)throw e
if(!t[ba])throw new zr("internal-error")}function Ua(t,e){return e.returnIdpCredential=!0,ys(t,ss,e)}function qa(t,e){return e.returnIdpCredential=!0,ys(t,cs,e)}function Va(t,e){return e.returnIdpCredential=!0,e.autoCreate=!1,ys(t,us,e)}function Ba(t){if(!t.oobCode)throw new zr("invalid-action-code")}(t=ga.prototype).tb=function(t,e){var n={idToken:t},r=[]
return st(xa,function(t,i){var o=e[i]
null===o?r.push(t):i in e&&(n[i]=o)}),r.length&&(n.deleteAttribute=r),ys(this,is,n)},t.lb=function(t,e){return pt(t={requestType:"PASSWORD_RESET",email:t},e),ys(this,Za,t)},t.mb=function(t,e){return pt(t={requestType:"EMAIL_SIGNIN",email:t},e),ys(this,Ja,t)},t.kb=function(t,e){return pt(t={requestType:"VERIFY_EMAIL",idToken:t},e),ys(this,$a,t)},t.Va=function(t){return ys(this,fs,t)},t.$a=function(t,e){return ys(this,ns,{oobCode:t,newPassword:e})},t.Ka=function(t){return ys(this,Wa,{oobCode:t})},t.Xa=function(t){return ys(this,ja,{oobCode:t})}
var ja={endpoint:"setAccountInfo",C:Ba,da:"email"},Wa={endpoint:"resetPassword",C:Ba,J:function(t){var e=t.requestType
if(!e||!t.email&&"EMAIL_SIGNIN"!=e)throw new zr("internal-error")}},Qa={endpoint:"signupNewUser",C:function(t){if(Da(t),!t.password)throw new zr("weak-password")},J:Pa,R:!0},Ka={endpoint:"createAuthUri"},Ga={endpoint:"deleteAccount",T:["idToken"]},Ha={endpoint:"setAccountInfo",T:["idToken","deleteProvider"],C:function(t){if(!m(t.deleteProvider))throw new zr("internal-error")}},za={endpoint:"emailLinkSignin",T:["email","oobCode"],C:Da,J:Pa,R:!0},Ya={endpoint:"emailLinkSignin",T:["idToken","email","oobCode"],C:Da,J:Pa,R:!0},Xa={endpoint:"getAccountInfo"},Ja={endpoint:"getOobConfirmationCode",T:["requestType"],C:function(t){if("EMAIL_SIGNIN"!=t.requestType)throw new zr("internal-error")
Da(t)},da:"email"},$a={endpoint:"getOobConfirmationCode",T:["idToken","requestType"],C:function(t){if("VERIFY_EMAIL"!=t.requestType)throw new zr("internal-error")},da:"email"},Za={endpoint:"getOobConfirmationCode",T:["requestType"],C:function(t){if("PASSWORD_RESET"!=t.requestType)throw new zr("internal-error")
Da(t)},da:"email"},ts={wb:!0,endpoint:"getProjectConfig",Ib:"GET"},es={wb:!0,endpoint:"getRecaptchaParam",Ib:"GET",J:function(t){if(!t.recaptchaSiteKey)throw new zr("internal-error")}},ns={endpoint:"resetPassword",C:Ba,da:"email"},rs={endpoint:"sendVerificationCode",T:["phoneNumber","recaptchaToken"],da:"sessionInfo"},is={endpoint:"setAccountInfo",T:["idToken"],C:Ra,R:!0},os={endpoint:"setAccountInfo",T:["idToken"],C:function(t){if(Ra(t),!t.password)throw new zr("weak-password")},J:Pa,R:!0},as={endpoint:"signupNewUser",J:Pa,R:!0},ss={endpoint:"verifyAssertion",C:Ma,Qa:La,J:Fa,R:!0},us={endpoint:"verifyAssertion",C:Ma,Qa:La,J:function(t){if(t.errorMessage&&"USER_NOT_FOUND"==t.errorMessage)throw new zr("user-not-found")
if(t.errorMessage)throw ms(t.errorMessage)
if(!t[ba])throw new zr("internal-error")},R:!0},cs={endpoint:"verifyAssertion",C:function(t){if(Ma(t),!t.idToken)throw new zr("internal-error")},Qa:La,J:Fa,R:!0},hs={endpoint:"verifyCustomToken",C:function(t){if(!t.token)throw new zr("invalid-custom-token")},J:Pa,R:!0},ls={endpoint:"verifyPassword",C:function(t){if(Da(t),!t.password)throw new zr("wrong-password")},J:Pa,R:!0},fs={endpoint:"verifyPhoneNumber",C:Oa,J:Pa},ps={endpoint:"verifyPhoneNumber",C:function(t){if(!t.idToken)throw new zr("internal-error")
Oa(t)},J:function(t){if(t.temporaryProof)throw t.code="credential-already-in-use",vo(t)
Pa(t)}},ds={Vb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",C:Oa,J:Pa}
function ys(t,e,n){if(!function(t,e){if(!e||!e.length)return!0
if(!t)return!1
for(var n=0;n<e.length;n++){var r=t[e[n]]
if(null==r||""===r)return!1}return!0}(n,e.T))return At(new zr("internal-error"))
var r,i=e.Ib||"POST"
return kt(n).then(e.C).then(function(){return e.R&&(n.returnSecureToken=!0),function(t,e,n,r,i,o){var a=en(t.g+e)
Ze(a,"key",t.b),o&&Ze(a,"cb",C().toString())
var s="GET"==n
if(s)for(var u in r)r.hasOwnProperty(u)&&Ze(a,u,r[u])
return new wt(function(e,o){Na(t,a.toString(),function(t){t?t.error?o(vs(t,i||{})):e(t):o(new zr("network-request-failed"))},n,s?void 0:Qn(Er(r)),t.a,t.h.get())})}(t,e.endpoint,i,n,e.Vb,e.wb||!1)}).then(function(t){return r=t,e.Qa?e.Qa(n,r):r}).then(e.J).then(function(){if(!e.da)return r
if(!(e.da in r))throw new zr("internal-error")
return r[e.da]})}function ms(t){return vs({error:{errors:[{message:t}],code:400,message:t}})}function vs(t,e){var n=(t.error&&t.error.errors&&t.error.errors[0]||{}).reason||"",r={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"}
if(n=r[n]?new zr(r[n]):null)return n
for(var i in n=t.error&&t.error.message||"",pt(r={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",ADMIN_ONLY_OPERATION:"admin-restricted-operation"},e||{}),e=(e=n.match(/^[^\s]+\s*:\s*(.*)$/))&&1<e.length?e[1]:void 0,r)if(0===n.indexOf(i))return new zr(r[i],e)
return!e&&t&&(e=wr(t)),new zr("internal-error",e)}function gs(t){this.b=t,this.a=null,this.gb=function(t){return(Es||(Es=new wt(function(t,e){function n(){Cr(),yr("gapi.load")("gapi.iframes",{callback:t,ontimeout:function(){Cr(),e(Error("Network Error"))},timeout:bs.get()})}if(yr("gapi.iframes.Iframe"))t()
else if(yr("gapi.load"))n()
else{var r="__iframefcb"+Math.floor(1e6*Math.random()).toString()
u[r]=function(){yr("gapi.load")?n():e(Error("Network Error"))},kt(la(r=Nn(_s,{onload:r}))).s(function(){e(Error("Network Error"))})}}).s(function(t){throw Es=null,t}))).then(function(){return new wt(function(e,n){yr("gapi.iframes.getContext")().open({where:document.body,url:t.b,messageHandlersFilter:yr("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(r){function i(){clearTimeout(o),e()}t.a=r,t.a.restyle({setHideOnLeave:!1})
var o=setTimeout(function(){n(Error("Network Error"))},ws.get())
r.ping(i).then(i,function(){n(Error("Network Error"))})})})})}(this)}var _s=new wn(Sn,"https://apis.google.com/js/api.js?onload=%{onload}"),bs=new Nr(3e4,6e4),ws=new Nr(5e3,15e3),Es=null
function Ts(t,e,n){this.i=t,this.g=e,this.h=n,this.f=null,this.a=nn(this.i,"/__/auth/iframe"),Ze(this.a,"apiKey",this.g),Ze(this.a,"appName",this.h),this.b=null,this.c=[]}function Ss(t,e,n,r,i){this.o=t,this.l=e,this.c=n,this.m=r,this.h=this.g=this.i=null,this.a=i,this.f=null}function Is(t){try{return i.a.app(t).auth().ya()}catch(t){return[]}}function Cs(t,e,n,r,i){this.l=t,this.f=e,this.b=n,this.c=r||null,this.h=i||null,this.o=this.u=this.v=null,this.g=[],this.m=this.a=null}function Ns(t){var e=Xn()
return function(t){return ys(t,ts,{}).then(function(t){return t.authorizedDomains||[]})}(t).then(function(t){t:{var n=en(e),r=n.f
n=n.b
for(var i=0;i<t.length;i++){var o=t[i],a=n,s=r
if(0==o.indexOf("chrome-extension://")?a=en(o).b==a&&"chrome-extension"==s:"http"!=s&&"https"!=s?a=!1:er.test(o)?a=a==o:(o=o.split(".").join("\\."),a=new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)),a){t=!0
break t}}t=!1}if(!t)throw new yo(Xn())})}function ks(t){return t.m?t.m:(t.m=rr().then(function(){if(!t.u){var e=t.c,n=t.h,r=Is(t.b),i=new Ts(t.l,t.f,t.b)
i.f=e,i.b=n,i.c=G(r||[]),t.u=i.toString()}t.i=new gs(t.u),function(t){if(!t.i)throw Error("IfcHandler must be initialized!")
!function(t,e){t.gb.then(function(){t.a.register("authEvent",e,yr("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}(t.i,function(e){var n={}
if(e&&e.authEvent){var r=!1
for(e=ho(e.authEvent),n=0;n<t.g.length;n++)r=t.g[n](e)||r
return(n={}).status=r?"ACK":"ERROR",kt(n)}return n.status="ERROR",kt(n)})}(t)}),t.m)}function As(t){return t.o||(t.v=t.c?pr(t.c,Is(t.b)):null,t.o=new ga(t.f,mi(t.h),t.v)),t.o}function Ds(t,e,n,r,i,o,a,s,u,c){return(t=new Ss(t,e,n,r,i)).i=o,t.g=a,t.h=s,t.b=ct(u||null),t.f=c,t.toString()}function Rs(t){if(this.a=t||i.a.INTERNAL.reactNative&&i.a.INTERNAL.reactNative.AsyncStorage,!this.a)throw new zr("internal-error","The React Native compatibility library was not found.")
this.type="asyncStorage"}function Ps(t){this.b=t,this.a={},this.c=S(this.f,this)}Ts.prototype.toString=function(){return this.f?Ze(this.a,"v",this.f):yn(this.a.a,"v"),this.b?Ze(this.a,"eid",this.b):yn(this.a.a,"eid"),this.c.length?Ze(this.a,"fw",this.c.join(",")):yn(this.a.a,"fw"),this.a.toString()},Ss.prototype.toString=function(){var t=nn(this.o,"/__/auth/handler")
if(Ze(t,"apiKey",this.l),Ze(t,"appName",this.c),Ze(t,"authType",this.m),this.a.isOAuthProvider){var e=this.a
try{var n=i.a.app(this.c).auth().ea()}catch(t){n=null}for(var r in e.ab=n,Ze(t,"providerId",this.a.providerId),n=Er((e=this.a).zb))n[r]=n[r].toString()
r=e.Cc,n=ct(n)
for(var o=0;o<r.length;o++){var a=r[o]
a in n&&delete n[a]}e.eb&&e.ab&&!n[e.eb]&&(n[e.eb]=e.ab),ut(n)||Ze(t,"customParameters",wr(n))}if("function"==typeof this.a.Fb&&(e=this.a.Fb()).length&&Ze(t,"scopes",e.join(",")),this.i?Ze(t,"redirectUrl",this.i):yn(t.a,"redirectUrl"),this.g?Ze(t,"eventId",this.g):yn(t.a,"eventId"),this.h?Ze(t,"v",this.h):yn(t.a,"v"),this.b)for(var s in this.b)this.b.hasOwnProperty(s)&&!tn(t,s)&&Ze(t,s,this.b[s])
return this.f?Ze(t,"eid",this.f):yn(t.a,"eid"),(s=Is(this.c)).length&&Ze(t,"fw",s.join(",")),t.toString()},(t=Cs.prototype).Ea=function(t,e,n){var r=new zr("popup-closed-by-user"),i=new zr("web-storage-unsupported"),o=this,a=!1
return this.ga().then(function(){(function(t){var e={type:"webStorageSupport"}
return ks(t).then(function(){return function(t,e){return t.gb.then(function(){return new wt(function(n){t.a.send(e.type,e,n,yr("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}(t.i,e)}).then(function(t){if(t&&t.length&&void 0!==t[0].webStorageSupport)return t[0].webStorageSupport
throw Error()})})(o).then(function(n){n||(t&&Zn(t),e(i),a=!0)})}).s(function(){}).then(function(){if(!a)return function(t){return new wt(function(e){return function n(){je(2e3).then(function(){if(t&&!t.closed)return n()
e()})}()})}(t)}).then(function(){if(!a)return je(n).then(function(){e(r)})})},t.Mb=function(){var t=dr()
return!br(t)&&!Ir(t)},t.Hb=function(){return!1},t.Db=function(t,e,n,r,i,o,a){if(!t)return At(new zr("popup-blocked"))
if(a&&!br())return this.ga().s(function(e){Zn(t),i(e)}),r(),kt()
this.a||(this.a=Ns(As(this)))
var s=this
return this.a.then(function(){var e=s.ga().s(function(e){throw Zn(t),i(e),e})
return r(),e}).then(function(){uo(n),a||Jn(Ds(s.l,s.f,s.b,e,n,null,o,s.c,void 0,s.h),t)}).s(function(t){throw"auth/network-request-failed"==t.code&&(s.a=null),t})},t.Ca=function(t,e,n){this.a||(this.a=Ns(As(this)))
var r=this
return this.a.then(function(){uo(e),Jn(Ds(r.l,r.f,r.b,t,e,Xn(),n,r.c,void 0,r.h))}).s(function(t){throw"auth/network-request-failed"==t.code&&(r.a=null),t})},t.ga=function(){var t=this
return ks(this).then(function(){return t.i.gb}).s(function(){throw t.a=null,new zr("network-request-failed")})},t.Ob=function(){return!0},t.wa=function(t){this.g.push(t)},t.La=function(t){Q(this.g,function(e){return e==t})},(t=Rs.prototype).get=function(t){return kt(this.a.getItem(t)).then(function(t){return t&&Tr(t)})},t.set=function(t,e){return kt(this.a.setItem(t,wr(e)))},t.P=function(t){return kt(this.a.removeItem(t))},t.Y=function(){},t.ca=function(){}
var Os,xs=[]
function Ms(t){this.a=t}function Ls(t){this.c=t,this.b=!1,this.a=[]}function Fs(t,e,n,r){var i,o,a,s,u=n||{},c=null
if(t.b)return At(Error("connection_unavailable"))
var h=r?800:50,l="undefined"!=typeof MessageChannel?new MessageChannel:null
return new wt(function(n,r){l?(i=Math.floor(Math.random()*Math.pow(10,20)).toString(),l.port1.start(),a=setTimeout(function(){r(Error("unsupported_event"))},h),c={messageChannel:l,onMessage:o=function(t){t.data.eventId===i&&("ack"===t.data.status?(clearTimeout(a),s=setTimeout(function(){r(Error("timeout"))},3e3)):"done"===t.data.status?(clearTimeout(s),void 0!==t.data.response?n(t.data.response):r(Error("unknown_error"))):(clearTimeout(a),clearTimeout(s),r(Error("invalid_response"))))}},t.a.push(c),l.port1.addEventListener("message",o),t.c.postMessage({eventType:e,eventId:i,data:u},[l.port2])):r(Error("connection_unavailable"))}).then(function(e){return Us(t,c),e}).s(function(e){throw Us(t,c),e})}function Us(t,e){if(e){var n=e.messageChannel,r=e.onMessage
n&&(n.port1.removeEventListener("message",r),n.port1.close()),Q(t.a,function(t){return t==e})}}function qs(){if(!Bs())throw new zr("web-storage-unsupported")
this.c={},this.a=[],this.b=0,this.l=u.indexedDB,this.type="indexedDB",this.g=this.m=this.f=this.i=null,this.u=!1,this.h=null
var t=this
ar()&&self?(this.m=function(){var t=ar()?self:null
if(q(xs,function(n){n.b==t&&(e=n)}),!e){var e=new Ps(t)
xs.push(e)}return e}(),this.m.subscribe("keyChanged",function(e,n){return Gs(t).then(function(e){return 0<e.length&&q(t.a,function(t){t(e)}),{keyProcessed:j(e,n.key)}})}),this.m.subscribe("ping",function(){return kt(["keyChanged"])})):function(){var t=u.navigator
return t&&t.serviceWorker?kt().then(function(){return t.serviceWorker.ready}).then(function(t){return t.active||null}).s(function(){return null}):kt(null)}().then(function(e){(t.h=e)&&(t.g=new Ls(new Ms(e)),Fs(t.g,"ping",null,!0).then(function(e){e[0].fulfilled&&j(e[0].value,"keyChanged")&&(t.u=!0)}).s(function(){}))})}function Vs(t){return t.o||(t.o=function t(e){return new wt(function(n,r){var i=e.l.open("firebaseLocalStorageDb",1)
i.onerror=function(t){try{t.preventDefault()}catch(t){}r(Error(t.target.error))},i.onupgradeneeded=function(t){t=t.target.result
try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){r(t)}},i.onsuccess=function(i){(i=i.target.result).objectStoreNames.contains("firebaseLocalStorage")?n(i):function(t){return new wt(function(e,n){var r=t.l.deleteDatabase("firebaseLocalStorageDb")
r.onsuccess=function(){e()},r.onerror=function(t){n(Error(t.target.error))}})}(e).then(function(){return t(e)}).then(function(t){n(t)}).s(function(t){r(t)})}})}(t)),t.o}function Bs(){try{return!!u.indexedDB}catch(t){return!1}}function js(t){return t.objectStore("firebaseLocalStorage")}function Ws(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly")}function Qs(t){return new wt(function(e,n){t.onsuccess=function(t){t&&t.target?e(t.target.result):e()},t.onerror=function(t){n(t.target.error)}})}function Ks(t,e){return t.g&&t.h&&function(){var t=u.navigator
return t&&t.serviceWorker&&t.serviceWorker.controller||null}()===t.h?Fs(t.g,"keyChanged",{key:e},t.u).then(function(){}).s(function(){}):kt()}function Gs(t){return Vs(t).then(function(t){var e=js(Ws(t,!1))
return e.getAll?Qs(e.getAll()):new wt(function(t,n){var r=[],i=e.openCursor()
i.onsuccess=function(e){(e=e.target.result)?(r.push(e.value),e.continue()):t(r)},i.onerror=function(t){n(t.target.error)}})}).then(function(e){var n={},r=[]
if(0==t.b){for(r=0;r<e.length;r++)n[e[r].fbase_key]=e[r].value
r=function t(e,n){var r,i=[]
for(r in e)r in n?o(e[r])!=o(n[r])?i.push(r):"object"==o(e[r])&&null!=e[r]&&null!=n[r]?0<t(e[r],n[r]).length&&i.push(r):e[r]!==n[r]&&i.push(r):i.push(r)
for(r in n)r in e||i.push(r)
return i}(t.c,n),t.c=n}return r})}function Hs(t){t.i&&t.i.cancel("STOP_EVENT"),t.f&&(clearTimeout(t.f),t.f=null)}function zs(t){var e=this,n=null
this.a=[],this.type="indexedDB",this.c=t,this.b=kt().then(function(){if(Bs()){var t=Sr(),r="__sak"+t
return Os||(Os=new qs),(n=Os).set(r,t).then(function(){return n.get(r)}).then(function(e){if(e!==t)throw Error("indexedDB not supported!")
return n.P(r)}).then(function(){return n}).s(function(){return e.c})}return e.c}).then(function(t){return e.type=t.type,t.Y(function(t){q(e.a,function(e){e(t)})}),t})}function Ys(){this.a={},this.type="inMemory"}function Xs(){if(!function(){var t="Node"==sr()
if(!(t=Js()||t&&i.a.INTERNAL.node&&i.a.INTERNAL.node.localStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==sr())throw new zr("internal-error","The LocalStorage compatibility library was not found.")
throw new zr("web-storage-unsupported")}this.a=Js()||i.a.INTERNAL.node.localStorage,this.type="localStorage"}function Js(){try{var t=u.localStorage,e=Sr()
return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function $s(){this.type="nullStorage"}function Zs(){if(!function(){var t="Node"==sr()
if(!(t=tu()||t&&i.a.INTERNAL.node&&i.a.INTERNAL.node.sessionStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==sr())throw new zr("internal-error","The SessionStorage compatibility library was not found.")
throw new zr("web-storage-unsupported")}this.a=tu()||i.a.INTERNAL.node.sessionStorage,this.type="sessionStorage"}function tu(){try{var t=u.sessionStorage,e=Sr()
return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function eu(){var t={}
t.Browser=iu,t.Node=ou,t.ReactNative=au,t.Worker=su,this.a=t[sr()]}Ps.prototype.f=function(t){var e=t.data.eventType,n=t.data.eventId,r=this.a[e]
if(r&&0<r.length){t.ports[0].postMessage({status:"ack",eventId:n,eventType:e,response:null})
var i=[]
q(r,function(e){i.push(kt().then(function(){return e(t.origin,t.data.data)}))}),Rt(i).then(function(r){var i=[]
q(r,function(t){i.push({fulfilled:t.Eb,value:t.value,reason:t.reason?t.reason.message:void 0})}),q(i,function(t){for(var e in t)void 0===t[e]&&delete t[e]}),t.ports[0].postMessage({status:"done",eventId:n,eventType:e,response:i})})}},Ps.prototype.subscribe=function(t,e){ut(this.a)&&this.b.addEventListener("message",this.c),void 0===this.a[t]&&(this.a[t]=[]),this.a[t].push(e)},Ps.prototype.unsubscribe=function(t,e){void 0!==this.a[t]&&e?(Q(this.a[t],function(t){return t==e}),0==this.a[t].length&&delete this.a[t]):e||delete this.a[t],ut(this.a)&&this.b.removeEventListener("message",this.c)},Ms.prototype.postMessage=function(t,e){this.a.postMessage(t,e)},Ls.prototype.close=function(){for(;0<this.a.length;)Us(this,this.a[0])
this.b=!0},(t=qs.prototype).set=function(t,e){var n,r=!1,i=this
return Vs(this).then(function(e){return Qs((e=js(Ws(n=e,!0))).get(t))}).then(function(o){var a=js(Ws(n,!0))
return o?(o.value=e,Qs(a.put(o))):(i.b++,r=!0,(o={}).fbase_key=t,o.value=e,Qs(a.add(o)))}).then(function(){return i.c[t]=e,Ks(i,t)}).ia(function(){r&&i.b--})},t.get=function(t){return Vs(this).then(function(e){return Qs(js(Ws(e,!1)).get(t))}).then(function(t){return t&&t.value})},t.P=function(t){var e=!1,n=this
return Vs(this).then(function(r){return e=!0,n.b++,Qs(js(Ws(r,!0)).delete(t))}).then(function(){return delete n.c[t],Ks(n,t)}).ia(function(){e&&n.b--})},t.Y=function(t){0==this.a.length&&function(t){Hs(t),function e(){t.f=setTimeout(function(){t.i=Gs(t).then(function(e){0<e.length&&q(t.a,function(t){t(e)})}).then(function(){e()}).s(function(t){"STOP_EVENT"!=t.message&&e()})},800)}()}(this),this.a.push(t)},t.ca=function(t){Q(this.a,function(e){return e==t}),0==this.a.length&&Hs(this)},(t=zs.prototype).get=function(t){return this.b.then(function(e){return e.get(t)})},t.set=function(t,e){return this.b.then(function(n){return n.set(t,e)})},t.P=function(t){return this.b.then(function(e){return e.P(t)})},t.Y=function(t){this.a.push(t)},t.ca=function(t){Q(this.a,function(e){return e==t})},(t=Ys.prototype).get=function(t){return kt(this.a[t])},t.set=function(t,e){return this.a[t]=e,kt()},t.P=function(t){return delete this.a[t],kt()},t.Y=function(){},t.ca=function(){},(t=Xs.prototype).get=function(t){var e=this
return kt().then(function(){return Tr(e.a.getItem(t))})},t.set=function(t,e){var n=this
return kt().then(function(){var r=wr(e)
null===r?n.P(t):n.a.setItem(t,r)})},t.P=function(t){var e=this
return kt().then(function(){e.a.removeItem(t)})},t.Y=function(t){u.window&&Ie(u.window,"storage",t)},t.ca=function(t){u.window&&ke(u.window,"storage",t)},(t=$s.prototype).get=function(){return kt(null)},t.set=function(){return kt()},t.P=function(){return kt()},t.Y=function(){},t.ca=function(){},(t=Zs.prototype).get=function(t){var e=this
return kt().then(function(){return Tr(e.a.getItem(t))})},t.set=function(t,e){var n=this
return kt().then(function(){var r=wr(e)
null===r?n.P(t):n.a.setItem(t,r)})},t.P=function(t){var e=this
return kt().then(function(){e.a.removeItem(t)})},t.Y=function(){},t.ca=function(){}
var nu,ru,iu={B:Xs,Sa:Zs},ou={B:Xs,Sa:Zs},au={B:Rs,Sa:$s},su={B:Xs,Sa:$s},uu={Xc:"local",NONE:"none",Zc:"session"}
function cu(){var t=!(Ir(dr())||!or()),e=br(),n=mr()
this.o=t,this.h=e,this.m=n,this.a={},nu||(nu=new eu),t=nu
try{this.g=!Yn()&&Dr()||!u.indexedDB?new t.a.B:new zs(ar()?new Ys:new t.a.B)}catch(t){this.g=new Ys,this.h=!0}try{this.i=new t.a.Sa}catch(t){this.i=new Ys}this.l=new Ys,this.f=S(this.Nb,this),this.b={}}function hu(){return ru||(ru=new cu),ru}function lu(t,e){switch(e){case"session":return t.i
case"none":return t.l
default:return t.g}}function fu(t,e){return"firebase:"+t.name+(e?":"+e:"")}function pu(t,e,n){return n=fu(e,n),"local"==e.B&&(t.b[n]=null),lu(t,e.B).P(n)}function du(t){t.c&&(clearInterval(t.c),t.c=null)}function yu(t){this.a=t,this.b=hu()}(t=cu.prototype).get=function(t,e){return lu(this,t.B).get(fu(t,e))},t.set=function(t,e,n){var r=fu(t,n),i=this,o=lu(this,t.B)
return o.set(r,e).then(function(){return o.get(r)}).then(function(e){"local"==t.B&&(i.b[r]=e)})},t.addListener=function(t,e,n){t=fu(t,e),this.m&&(this.b[t]=u.localStorage.getItem(t)),ut(this.a)&&(lu(this,"local").Y(this.f),this.h||(Yn()||!Dr())&&u.indexedDB||!this.m||function(t){du(t),t.c=setInterval(function(){for(var e in t.a){var n=u.localStorage.getItem(e),r=t.b[e]
n!=r&&(t.b[e]=n,n=new de({type:"storage",key:e,target:window,oldValue:r,newValue:n,a:!0}),t.Nb(n))}},1e3)}(this)),this.a[t]||(this.a[t]=[]),this.a[t].push(n)},t.removeListener=function(t,e,n){t=fu(t,e),this.a[t]&&(Q(this.a[t],function(t){return t==n}),0==this.a[t].length&&delete this.a[t]),ut(this.a)&&(lu(this,"local").ca(this.f),du(this))},t.Nb=function(t){if(t&&t.f){var e=t.a.key
if(null==e)for(var n in this.a){var r=this.b[n]
void 0===r&&(r=null)
var i=u.localStorage.getItem(n)
i!==r&&(this.b[n]=i,this.Ya(n))}else if(0==e.indexOf("firebase:")&&this.a[e]){if(void 0!==t.a.a?lu(this,"local").ca(this.f):du(this),this.o)if(n=u.localStorage.getItem(e),(r=t.a.newValue)!==n)null!==r?u.localStorage.setItem(e,r):u.localStorage.removeItem(e)
else if(this.b[e]===r&&void 0===t.a.a)return
var o=this
n=function(){void 0===t.a.a&&o.b[e]===u.localStorage.getItem(e)||(o.b[e]=u.localStorage.getItem(e),o.Ya(e))},Xt&&oe&&10==oe&&u.localStorage.getItem(e)!==t.a.newValue&&t.a.newValue!==t.a.oldValue?setTimeout(n,10):n()}}else q(t,S(this.Ya,this))},t.Ya=function(t){this.a[t]&&q(this.a[t],function(t){t()})}
var mu,vu={name:"authEvent",B:"local"}
function gu(){this.a=hu()}function _u(t,e){this.b=bu,this.f=u.Uint8Array?new Uint8Array(this.b):Array(this.b),this.g=this.c=0,this.a=[],this.i=t,this.h=e,this.m=u.Int32Array?new Int32Array(64):Array(64),void 0!==mu||(mu=u.Int32Array?new Int32Array(Nu):Nu),this.reset()}N(_u,function(){this.b=-1})
for(var bu=64,wu=bu-1,Eu=[],Tu=0;Tu<wu;Tu++)Eu[Tu]=0
var Su=K(128,Eu)
function Iu(t){for(var e=t.f,n=t.m,r=0,i=0;i<e.length;)n[r++]=e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3],i=4*r
for(e=16;64>e;e++){i=0|n[e-15],r=0|n[e-2]
var o=(0|n[e-16])+((i>>>7|i<<25)^(i>>>18|i<<14)^i>>>3)|0,a=(0|n[e-7])+((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)|0
n[e]=o+a|0}r=0|t.a[0],i=0|t.a[1]
var s=0|t.a[2],u=0|t.a[3],c=0|t.a[4],h=0|t.a[5],l=0|t.a[6]
for(o=0|t.a[7],e=0;64>e;e++){var f=((r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10))+(r&i^r&s^i&s)|0
a=(o=o+((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))|0)+((a=(a=c&h^~c&l)+(0|mu[e])|0)+(0|n[e])|0)|0,o=l,l=h,h=c,c=u+a|0,u=s,s=i,i=r,r=a+f|0}t.a[0]=t.a[0]+r|0,t.a[1]=t.a[1]+i|0,t.a[2]=t.a[2]+s|0,t.a[3]=t.a[3]+u|0,t.a[4]=t.a[4]+c|0,t.a[5]=t.a[5]+h|0,t.a[6]=t.a[6]+l|0,t.a[7]=t.a[7]+o|0}function Cu(t,e,n){void 0===n&&(n=e.length)
var r=0,i=t.c
if(c(e))for(;r<n;)t.f[i++]=e.charCodeAt(r++),i==t.b&&(Iu(t),i=0)
else{if(!v(e))throw Error("message must be string or array")
for(;r<n;){var o=e[r++]
if(!("number"==typeof o&&0<=o&&255>=o&&o==(0|o)))throw Error("message must be a byte array")
t.f[i++]=o,i==t.b&&(Iu(t),i=0)}}t.c=i,t.g+=n}_u.prototype.reset=function(){this.g=this.c=0,this.a=u.Int32Array?new Int32Array(this.h):G(this.h)}
var Nu=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
function ku(){_u.call(this,8,Au)}N(ku,_u)
var Au=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]
function Du(t,e,n,r,i){this.l=t,this.i=e,this.m=n,this.o=r||null,this.u=i||null,this.h=e+":"+n,this.v=new gu,this.g=new yu(this.h),this.f=null,this.b=[],this.a=this.c=null}function Ru(t){return new zr("invalid-cordova-configuration",t)}function Pu(t,e){for(var n=0;n<t.b.length;n++)try{t.b[n](e)}catch(t){}}function Ou(t){return t.f||(t.f=t.ga().then(function(){return new wt(function(e){t.wa(function n(r){return e(r),t.La(n),!1}),function(t){function e(e){r=!0,i&&i.cancel(),xu(t).then(function(r){var i=n
if(r&&e&&e.url){var a=null;-1!=(i=Ri(e.url)).indexOf("/__/auth/callback")&&(a=(a="object"===o(a=Tr(tn(a=en(i),"firebaseError")||null))?Yr(a):null)?new co(r.c,r.b,null,null,a):new co(r.c,r.b,i,r.f)),i=a||n}Pu(t,i)})}var n=new co("unknown",null,null,null,new zr("no-auth-event")),r=!1,i=je(500).then(function(){return xu(t).then(function(){r||Pu(t,n)})}),a=u.handleOpenURL
u.handleOpenURL=function(t){if(0==t.toLowerCase().indexOf(yr("BuildInfo.packageName",u).toLowerCase()+"://")&&e({url:t}),"function"==typeof a)try{a(t)}catch(t){console.error(t)}},po||(po=new lo),po.subscribe(e)}(t)})})),t.f}function xu(t){var e=null
return function(t){return t.b.get(vu,t.a).then(function(t){return ho(t)})}(t.g).then(function(n){return e=n,pu((n=t.g).b,vu,n.a)}).then(function(){return e})}function Mu(t){this.a=t,this.b=hu()}(t=Du.prototype).ga=function(){return this.za?this.za:this.za=(ir(void 0)?rr().then(function(){return new wt(function(t,e){var n=u.document,r=setTimeout(function(){e(Error("Cordova framework is not ready."))},1e3)
n.addEventListener("deviceready",function(){clearTimeout(r),t()},!1)})}):At(Error("Cordova must run in an Android or iOS file scheme."))).then(function(){if("function"!=typeof yr("universalLinks.subscribe",u))throw Ru("cordova-universal-links-plugin-fix is not installed")
if(void 0===yr("BuildInfo.packageName",u))throw Ru("cordova-plugin-buildinfo is not installed")
if("function"!=typeof yr("cordova.plugins.browsertab.openUrl",u))throw Ru("cordova-plugin-browsertab is not installed")
if("function"!=typeof yr("cordova.InAppBrowser.open",u))throw Ru("cordova-plugin-inappbrowser is not installed")},function(){throw new zr("cordova-not-ready")})},t.Ea=function(t,e){return e(new zr("operation-not-supported-in-this-environment")),kt()},t.Db=function(){return At(new zr("operation-not-supported-in-this-environment"))},t.Ob=function(){return!1},t.Mb=function(){return!0},t.Hb=function(){return!0},t.Ca=function(t,e,n){if(this.c)return At(new zr("redirect-operation-pending"))
var r=this,i=u.document,o=null,a=null,s=null,c=null
return this.c=kt().then(function(){return uo(e),Ou(r)}).then(function(){return function(t,e,n,r){var i=function(){for(var t=20,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return e.join("")}(),o=new co(e,r,null,i,new zr("no-auth-event")),a=yr("BuildInfo.packageName",u)
if("string"!=typeof a)throw new zr("invalid-cordova-configuration")
var s=yr("BuildInfo.displayName",u),c={}
if(dr().toLowerCase().match(/iphone|ipad|ipod/))c.ibi=a
else{if(!dr().toLowerCase().match(/android/))return At(new zr("operation-not-supported-in-this-environment"))
c.apn=a}s&&(c.appDisplayName=s),i=function(t){var e=new ku
Cu(e,t),t=[]
var n=8*e.g
56>e.c?Cu(e,Su,56-e.c):Cu(e,Su,e.b-(e.c-56))
for(var r=63;56<=r;r--)e.f[r]=255&n,n/=256
for(Iu(e),r=n=0;r<e.i;r++)for(var i=24;0<=i;i-=8)t[n++]=e.a[r]>>i&255
return function(t){return V(t,function(t){return 1<(t=t.toString(16)).length?t:"0"+t}).join("")}(t)}(i),c.sessionId=i
var h=Ds(t.l,t.i,t.m,e,n,null,r,t.o,c,t.u)
return t.ga().then(function(){var e=t.h
return t.v.a.set(vu,o.w(),e)}).then(function(){var e=yr("cordova.plugins.browsertab.isAvailable",u)
if("function"!=typeof e)throw new zr("invalid-cordova-configuration")
var n=null
e(function(e){if(e){if("function"!=typeof(n=yr("cordova.plugins.browsertab.openUrl",u)))throw new zr("invalid-cordova-configuration")
n(h)}else{if("function"!=typeof(n=yr("cordova.InAppBrowser.open",u)))throw new zr("invalid-cordova-configuration")
e=dr(),t.a=n(h,e.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||e.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?"_blank":"_system","location=yes")}})})}(r,t,e,n)}).then(function(){return new wt(function(t,e){a=function(){var e=yr("cordova.plugins.browsertab.close",u)
return t(),"function"==typeof e&&e(),r.a&&"function"==typeof r.a.close&&(r.a.close(),r.a=null),!1},r.wa(a),s=function(){o||(o=je(2e3).then(function(){e(new zr("redirect-cancelled-by-user"))}))},c=function(){kr()&&s()},i.addEventListener("resume",s,!1),dr().toLowerCase().match(/android/)||i.addEventListener("visibilitychange",c,!1)}).s(function(t){return xu(r).then(function(){throw t})})}).ia(function(){s&&i.removeEventListener("resume",s,!1),c&&i.removeEventListener("visibilitychange",c,!1),o&&o.cancel(),a&&r.La(a),r.c=null})},t.wa=function(t){this.b.push(t),Ou(this).s(function(e){"auth/invalid-cordova-configuration"===e.code&&(e=new co("unknown",null,null,null,new zr("no-auth-event")),t(e))})},t.La=function(t){Q(this.b,function(e){return e==t})}
var Lu={name:"pendingRedirect",B:"session"}
function Fu(t){return pu(t.b,Lu,t.a)}function Uu(t,e,n){this.i={},this.u=0,this.A=t,this.l=e,this.o=n,this.h=[],this.f=!1,this.m=S(this.cb,this),this.b=new zu,this.v=new $u,this.g=new Mu(this.l+":"+this.o),this.c={},this.c.unknown=this.b,this.c.signInViaRedirect=this.b,this.c.linkViaRedirect=this.b,this.c.reauthViaRedirect=this.b,this.c.signInViaPopup=this.v,this.c.linkViaPopup=this.v,this.c.reauthViaPopup=this.v,this.a=qu(this.A,this.l,this.o,di)}function qu(t,e,n,r){var o=i.a.SDK_VERSION||null
return ir()?new Du(t,e,n,o,r):new Cs(t,e,n,o,r)}function Vu(t){t.f||(t.f=!0,t.a.wa(t.m))
var e=t.a
return t.a.ga().s(function(n){throw t.a==e&&t.reset(),n})}function Bu(t){t.a.Mb()&&Vu(t).s(function(e){var n=new co("unknown",null,null,null,new zr("operation-not-supported-in-this-environment"))
Ku(e)&&t.cb(n)}),t.a.Hb()||Yu(t.b)}(t=Uu.prototype).reset=function(){this.f=!1,this.a.La(this.m),this.a=qu(this.A,this.l,this.o),this.i={}},t.Za=function(){this.b.Za()},t.subscribe=function(t){if(j(this.h,t)||this.h.push(t),!this.f){var e=this;(function(t){return t.b.get(Lu,t.a).then(function(t){return"pending"==t})})(this.g).then(function(t){t?Fu(e.g).then(function(){Vu(e).s(function(t){var n=new co("unknown",null,null,null,new zr("operation-not-supported-in-this-environment"))
Ku(t)&&e.cb(n)})}):Bu(e)}).s(function(){Bu(e)})}},t.unsubscribe=function(t){Q(this.h,function(e){return e==t})},t.cb=function(t){if(!t)throw new zr("invalid-auth-event")
if(6e5<=C()-this.u&&(this.i={},this.u=0),t&&t.getUid()&&this.i.hasOwnProperty(t.getUid()))return!1
for(var e=!1,n=0;n<this.h.length;n++){var r=this.h[n]
if(r.xb(t.c,t.b)){(e=this.c[t.c])&&(e.h(t,r),t&&(t.f||t.b)&&(this.i[t.getUid()]=!0,this.u=C())),e=!0
break}}return Yu(this.b),e}
var ju=new Nr(2e3,1e4),Wu=new Nr(3e4,6e4)
function Qu(t,e,n,r,i,o){return t.a.Db(e,n,r,function(){t.f||(t.f=!0,t.a.wa(t.m))},function(){t.reset()},i,o)}function Ku(t){return!(!t||"auth/cordova-not-ready"!=t.code)}Uu.prototype.fa=function(){return this.b.fa()},Uu.prototype.Ca=function(t,e,n){var r,i=this
return function(t){return t.b.set(Lu,"pending",t.a)}(this.g).then(function(){return i.a.Ca(t,e,n).s(function(t){if(Ku(t))throw new zr("operation-not-supported-in-this-environment")
return r=t,Fu(i.g).then(function(){throw r})}).then(function(){return i.a.Ob()?new wt(function(){}):Fu(i.g).then(function(){return i.fa()}).then(function(){}).s(function(){})})})},Uu.prototype.Ea=function(t,e,n,r){return this.a.Ea(n,function(n){t.ha(e,null,n,r)},ju.get())}
var Gu={}
function Hu(t,e,n){var r=e+":"+n
return Gu[r]||(Gu[r]=new Uu(t,e,n)),Gu[r]}function zu(){this.b=null,this.f=[],this.c=[],this.a=null,this.i=this.g=!1}function Yu(t){t.g||(t.g=!0,Ju(t,!1,null,null))}function Xu(t,e){if(t.b=function(){return kt(e)},t.f.length)for(var n=0;n<t.f.length;n++)t.f[n](e)}function Ju(t,e,n,r){e?r?function(t,e){if(t.b=function(){return At(e)},t.c.length)for(var n=0;n<t.c.length;n++)t.c[n](e)}(t,r):Xu(t,n):Xu(t,{user:null}),t.f=[],t.c=[]}function $u(){}function Zu(){this.ub=!1,Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.ub},set:function(t){this.ub=t},enumerable:!1})}function tc(t,e){this.a=e,Mr(this,"verificationId",t)}function ec(t,e,n,r){return new oo(t).Va(e,n).then(function(t){return new tc(t,r)})}function nc(t){var e=pi(t)
if(!(e&&e.exp&&e.auth_time&&e.iat))throw new zr("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.")
Lr(this,{token:t,expirationTime:Ar(1e3*e.exp),authTime:Ar(1e3*e.auth_time),issuedAtTime:Ar(1e3*e.iat),signInProvider:e.firebase&&e.firebase.sign_in_provider?e.firebase.sign_in_provider:null,claims:e})}function rc(t,e,n){if(this.h=t,this.i=e,this.g=n,this.c=3e4,this.f=96e4,this.b=null,this.a=this.c,this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!")}function ic(t){this.f=t,this.b=this.a=null,this.c=0}function oc(t,e){var n=e[ba],r=e.refreshToken
e=ac(e.expiresIn),t.b=n,t.c=e,t.a=r}function ac(t){return C()+1e3*parseInt(t,10)}function sc(t,e){this.a=t||null,this.b=e||null,Lr(this,{lastSignInTime:Ar(e||null),creationTime:Ar(t||null)})}function uc(t,e,n,r,i,o){Lr(this,{uid:t,displayName:r||null,photoURL:i||null,email:n||null,phoneNumber:o||null,providerId:e})}function cc(t,e){for(var n in pe.call(this,t),e)this[n]=e[n]}function hc(t,e,n){this.G=[],this.l=t.apiKey,this.o=t.appName,this.u=t.authDomain||null,t=i.a.SDK_VERSION?pr(i.a.SDK_VERSION):null,this.c=new ga(this.l,mi(di),t),this.h=new ic(this.c),vc(this,e[ba]),oc(this.h,e),Mr(this,"refreshToken",this.h.a),bc(this,n||{}),Fe.call(this),this.I=!1,this.u&&vr()&&(this.a=Hu(this.u,this.l,this.o)),this.N=[],this.i=null,this.A=function(t){return new rc(function(){return t.F(!0)},function(t){return!(!t||"auth/network-request-failed"!=t.code)},function(){var e=t.h.c-C()-3e5
return 0<e?e:0})}(this),this.V=S(this.Ha,this)
var r=this
this.ka=null,this.ta=function(t){r.pa(t.g)},this.X=null,this.O=[],this.sa=function(t){fc(r,t.c)},this.W=null}function lc(t,e){t.X&&ke(t.X,"languageCodeChanged",t.ta),(t.X=e)&&Ie(e,"languageCodeChanged",t.ta)}function fc(t,e){t.O=e,Ca(t.c,i.a.SDK_VERSION?pr(i.a.SDK_VERSION,t.O):null)}function pc(t,e){t.W&&ke(t.W,"frameworkChanged",t.sa),(t.W=e)&&Ie(e,"frameworkChanged",t.sa)}function dc(t){try{return i.a.app(t.o).auth()}catch(e){throw new zr("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+t.o+"'!")}}function yc(t){t.D||t.A.b||(t.A.start(),ke(t,"tokenChanged",t.V),Ie(t,"tokenChanged",t.V))}function mc(t){ke(t,"tokenChanged",t.V),t.A.stop()}function vc(t,e){t.ra=e,Mr(t,"_lat",e)}function gc(t){for(var e=[],n=0;n<t.N.length;n++)e.push(t.N[n](t))
return Rt(e).then(function(){return t})}function _c(t){t.a&&!t.I&&(t.I=!0,t.a.subscribe(t))}function bc(t,e){Lr(t,{uid:e.uid,displayName:e.displayName||null,photoURL:e.photoURL||null,email:e.email||null,emailVerified:e.emailVerified||!1,phoneNumber:e.phoneNumber||null,isAnonymous:e.isAnonymous||!1,metadata:new sc(e.createdAt,e.lastLoginAt),providerData:[]})}function wc(){}function Ec(t){return kt().then(function(){if(t.D)throw new zr("app-deleted")})}function Tc(t){return V(t.providerData,function(t){return t.providerId})}function Sc(t,e){e&&(Ic(t,e.providerId),t.providerData.push(e))}function Ic(t,e){Q(t.providerData,function(t){return t.providerId==e})}function Cc(t,e,n){("uid"!=e||n)&&t.hasOwnProperty(e)&&Mr(t,e,n)}function Nc(t,e){t!=e&&(Lr(t,{uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,email:e.email,emailVerified:e.emailVerified,phoneNumber:e.phoneNumber,isAnonymous:e.isAnonymous,providerData:[]}),e.metadata?Mr(t,"metadata",function(t){return new sc(t.a,t.b)}(e.metadata)):Mr(t,"metadata",new sc),q(e.providerData,function(e){Sc(t,e)}),function(t,e){t.b=e.b,t.a=e.a,t.c=e.c}(t.h,e.h),Mr(t,"refreshToken",t.h.a))}function kc(t){return t.F().then(function(e){var n=t.isAnonymous
return function(t,e){return ys(t.c,Xa,{idToken:e}).then(S(t.wc,t))}(t,e).then(function(){return n||Cc(t,"isAnonymous",!1),e})})}function Ac(t,e){e[ba]&&t.ra!=e[ba]&&(oc(t.h,e),t.dispatchEvent(new cc("tokenChanged")),vc(t,e[ba]),Cc(t,"refreshToken",t.h.a))}function Dc(t,e){return kc(t).then(function(){if(j(Tc(t),e))return gc(t).then(function(){throw new zr("provider-already-linked")})})}function Rc(t,e,n){return Fr({user:t,credential:so(e),additionalUserInfo:e=wi(e),operationType:n})}function Pc(t,e){return Ac(t,e),t.reload().then(function(){return t})}function Oc(t,e,n,r,o){if(!vr())return At(new zr("operation-not-supported-in-this-environment"))
if(t.i&&!o)return At(t.i)
var a=bi(n.providerId),s=Sr(t.uid+":::"),u=null;(!br()||or())&&t.u&&n.isOAuthProvider&&(u=Ds(t.u,t.l,t.o,e,n,null,s,i.a.SDK_VERSION||null))
var c=tr(u,a&&a.Ba,a&&a.Aa)
return r=r().then(function(){if(Mc(t),!o)return t.F().then(function(){})}).then(function(){return Qu(t.a,c,e,n,s,!!u)}).then(function(){return new wt(function(n,r){t.ha(e,null,new zr("cancelled-popup-request"),t.g||null),t.f=n,t.v=r,t.g=s,t.b=t.a.Ea(t,e,c,s)})}).then(function(t){return c&&Zn(c),t?Fr(t):null}).s(function(t){throw c&&Zn(c),t}),Lc(t,r,o)}function xc(t,e,n,r,i){if(!vr())return At(new zr("operation-not-supported-in-this-environment"))
if(t.i&&!i)return At(t.i)
var o=null,a=Sr(t.uid+":::")
return r=r().then(function(){if(Mc(t),!i)return t.F().then(function(){})}).then(function(){return t.aa=a,gc(t)}).then(function(e){return t.ba&&(e=(e=t.ba).b.set(qc,t.w(),e.a)),e}).then(function(){return t.a.Ca(e,n,a)}).s(function(e){if(o=e,t.ba)return Vc(t.ba)
throw o}).then(function(){if(o)throw o}),Lc(t,r,i)}function Mc(t){if(!t.a||!t.I){if(t.a&&!t.I)throw new zr("internal-error")
throw new zr("auth-domain-config-required")}}function Lc(t,e,n){var r=function(t,e,n){return t.i&&!n?(e.cancel(),At(t.i)):e.s(function(e){throw!e||"auth/user-disabled"!=e.code&&"auth/user-token-expired"!=e.code||(t.i||t.dispatchEvent(new cc("userInvalidated")),t.i=e),e})}(t,e,n)
return t.G.push(r),r.ia(function(){W(t.G,r)}),r}function Fc(t){if(!t.apiKey)return null
var e={apiKey:t.apiKey,authDomain:t.authDomain,appName:t.appName},n={}
if(!(t.stsTokenManager&&t.stsTokenManager.accessToken&&t.stsTokenManager.expirationTime))return null
n[ba]=t.stsTokenManager.accessToken,n.refreshToken=t.stsTokenManager.refreshToken||null,n.expiresIn=(t.stsTokenManager.expirationTime-C())/1e3
var r=new hc(e,n,t)
return t.providerData&&q(t.providerData,function(t){t&&Sc(r,Fr(t))}),t.redirectEventId&&(r.aa=t.redirectEventId),r}function Uc(t){this.a=t,this.b=hu()}zu.prototype.reset=function(){this.b=null,this.a&&(this.a.cancel(),this.a=null)},zu.prototype.h=function(t,e){if(t){this.reset(),this.g=!0
var n=t.c,r=t.b,i=t.a&&"auth/web-storage-unsupported"==t.a.code,o=t.a&&"auth/operation-not-supported-in-this-environment"==t.a.code
this.i=!(!i&&!o),"unknown"!=n||i||o?t.a?(Ju(this,!0,null,t.a),kt()):e.xa(n,r)?function(t,e,n){n=n.xa(e.c,e.b)
var r=e.g,i=e.f,o=e.h,a=!!e.c.match(/Redirect$/)
n(r,i,o).then(function(e){Ju(t,a,e,null)}).s(function(e){Ju(t,a,null,e)})}(this,t,e):At(new zr("invalid-auth-event")):(Ju(this,!1,null,null),kt())}else At(new zr("invalid-auth-event"))},zu.prototype.Za=function(){this.g&&!this.i&&Ju(this,!1,null,null)},zu.prototype.fa=function(){var t=this
return new wt(function(e,n){t.b?t.b().then(e,n):(t.f.push(e),t.c.push(n),function(t){var e=new zr("timeout")
t.a&&t.a.cancel(),t.a=je(Wu.get()).then(function(){t.b||(t.g=!0,Ju(t,!0,null,e))})}(t))})},$u.prototype.h=function(t,e){if(t){var n=t.c,r=t.b
t.a?(e.ha(t.c,null,t.a,t.b),kt()):e.xa(n,r)?function(t,e){var n=t.b,r=t.c
e.xa(r,n)(t.g,t.f,t.h).then(function(t){e.ha(r,t,null,n)}).s(function(t){e.ha(r,null,t,n)})}(t,e):At(new zr("invalid-auth-event"))}else At(new zr("invalid-auth-event"))},tc.prototype.confirm=function(t){return t=ao(this.verificationId,t),this.a(t)},rc.prototype.start=function(){this.a=this.c,function t(e,n){e.stop(),e.b=je(function(t,e){return e?(t.a=t.c,t.g()):(e=t.a,t.a*=2,t.a>t.f&&(t.a=t.f),e)}(e,n)).then(function(){return t=u.document,e=null,kr()||!t?kt():new wt(function(n){e=function(){kr()&&(t.removeEventListener("visibilitychange",e,!1),n())},t.addEventListener("visibilitychange",e,!1)}).s(function(n){throw t.removeEventListener("visibilitychange",e,!1),n})
var t,e}).then(function(){return e.h()}).then(function(){t(e,!0)}).s(function(n){e.i(n)&&t(e,!1)})}(this,!0)},rc.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)},ic.prototype.w=function(){return{apiKey:this.f.b,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}},ic.prototype.getToken=function(t){return t=!!t,this.b&&!this.a?At(new zr("user-token-expired")):t||!this.b||C()>this.c-3e4?this.a?function(t,e){return function(t,e){return new wt(function(n,r){"refresh_token"==e.grant_type&&e.refresh_token||"authorization_code"==e.grant_type&&e.code?Na(t,t.i+"?key="+encodeURIComponent(t.b),function(t){t?t.error?r(vs(t)):t.access_token&&t.refresh_token?n(t):r(new zr("internal-error")):r(new zr("network-request-failed"))},"POST",dn(e).toString(),t.f,t.m.get()):r(new zr("internal-error"))})}(t.f,e).then(function(e){return t.b=e.access_token,t.c=ac(e.expires_in),t.a=e.refresh_token,{accessToken:t.b,expirationTime:t.c,refreshToken:t.a}}).s(function(e){throw"auth/user-token-expired"==e.code&&(t.a=null),e})}(this,{grant_type:"refresh_token",refresh_token:this.a}):kt(null):kt({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})},sc.prototype.w=function(){return{lastLoginAt:this.b,createdAt:this.a}},N(cc,pe),N(hc,Fe),hc.prototype.pa=function(t){this.ka=t,Ia(this.c,t)},hc.prototype.ea=function(){return this.ka},hc.prototype.ya=function(){return G(this.O)},hc.prototype.Ha=function(){this.A.b&&(this.A.stop(),this.A.start())},Mr(hc.prototype,"providerId","firebase"),(t=hc.prototype).reload=function(){var t=this
return Lc(this,Ec(this).then(function(){return kc(t).then(function(){return gc(t)}).then(wc)}))},t.ac=function(t){return this.F(t).then(function(t){return new nc(t)})},t.F=function(t){var e=this
return Lc(this,Ec(this).then(function(){return e.h.getToken(t)}).then(function(t){if(!t)throw new zr("internal-error")
return t.accessToken!=e.ra&&(vc(e,t.accessToken),e.dispatchEvent(new cc("tokenChanged"))),Cc(e,"refreshToken",t.refreshToken),t.accessToken}))},t.wc=function(t){if(!(t=t.users)||!t.length)throw new zr("internal-error")
bc(this,{uid:(t=t[0]).localId,displayName:t.displayName,photoURL:t.photoUrl,email:t.email,emailVerified:!!t.emailVerified,phoneNumber:t.phoneNumber,lastLoginAt:t.lastLoginAt,createdAt:t.createdAt})
for(var e=function(t){return(t=t.providerUserInfo)&&t.length?V(t,function(t){return new uc(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)}):[]}(t),n=0;n<e.length;n++)Sc(this,e[n])
Cc(this,"isAnonymous",!(this.email&&t.passwordHash||this.providerData&&this.providerData.length))},t.xc=function(t){return Or("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),this.hb(t)},t.hb=function(t){var e=this,n=null
return Lc(this,t.f(this.c,this.uid).then(function(t){return Ac(e,t),n=Rc(e,t,"reauthenticate"),e.i=null,e.reload()}).then(function(){return n}),!0)},t.oc=function(t){return Or("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),this.fb(t)},t.fb=function(t){var e=this,n=null
return Lc(this,Dc(this,t.providerId).then(function(){return e.F()}).then(function(n){return t.b(e.c,n)}).then(function(t){return n=Rc(e,t,"link"),Pc(e,t)}).then(function(){return n}))},t.pc=function(t,e){var n=this
return Lc(this,Dc(this,"phone").then(function(){return ec(dc(n),t,e,S(n.fb,n))}))},t.yc=function(t,e){var n=this
return Lc(this,kt().then(function(){return ec(dc(n),t,e,S(n.hb,n))}),!0)},t.rb=function(t){var e=this
return Lc(this,this.F().then(function(n){return e.c.rb(n,t)}).then(function(t){return Ac(e,t),e.reload()}))},t.Pc=function(t){var e=this
return Lc(this,this.F().then(function(n){return t.b(e.c,n)}).then(function(t){return Ac(e,t),e.reload()}))},t.sb=function(t){var e=this
return Lc(this,this.F().then(function(n){return e.c.sb(n,t)}).then(function(t){return Ac(e,t),e.reload()}))},t.tb=function(t){if(void 0===t.displayName&&void 0===t.photoURL)return Ec(this)
var e=this
return Lc(this,this.F().then(function(n){return e.c.tb(n,{displayName:t.displayName,photoUrl:t.photoURL})}).then(function(t){return Ac(e,t),Cc(e,"displayName",t.displayName||null),Cc(e,"photoURL",t.photoUrl||null),q(e.providerData,function(t){"password"===t.providerId&&(Mr(t,"displayName",e.displayName),Mr(t,"photoURL",e.photoURL))}),gc(e)}).then(wc))},t.Nc=function(t){var e=this
return Lc(this,kc(this).then(function(n){return j(Tc(e),t)?function(t,e,n){return ys(t,Ha,{idToken:e,deleteProvider:n})}(e.c,n,[t]).then(function(t){var n={}
return q(t.providerUserInfo||[],function(t){n[t.providerId]=!0}),q(Tc(e),function(t){n[t]||Ic(e,t)}),n[oo.PROVIDER_ID]||Mr(e,"phoneNumber",null),gc(e)}):gc(e).then(function(){throw new zr("no-such-provider")})}))},t.delete=function(){var t=this
return Lc(this,this.F().then(function(e){return ys(t.c,Ga,{idToken:e})}).then(function(){t.dispatchEvent(new cc("userDeleted"))})).then(function(){for(var e=0;e<t.G.length;e++)t.G[e].cancel("app-deleted")
lc(t,null),pc(t,null),t.G=[],t.D=!0,mc(t),Mr(t,"refreshToken",null),t.a&&t.a.unsubscribe(t)})},t.xb=function(t,e){return!!("linkViaPopup"==t&&(this.g||null)==e&&this.f||"reauthViaPopup"==t&&(this.g||null)==e&&this.f||"linkViaRedirect"==t&&(this.aa||null)==e||"reauthViaRedirect"==t&&(this.aa||null)==e)},t.ha=function(t,e,n,r){"linkViaPopup"!=t&&"reauthViaPopup"!=t||r!=(this.g||null)||(n&&this.v?this.v(n):e&&!n&&this.f&&this.f(e),this.b&&(this.b.cancel(),this.b=null),delete this.f,delete this.v)},t.xa=function(t,e){return"linkViaPopup"==t&&e==(this.g||null)?S(this.Bb,this):"reauthViaPopup"==t&&e==(this.g||null)?S(this.Cb,this):"linkViaRedirect"==t&&(this.aa||null)==e?S(this.Bb,this):"reauthViaRedirect"==t&&(this.aa||null)==e?S(this.Cb,this):null},t.qc=function(t){var e=this
return Oc(this,"linkViaPopup",t,function(){return Dc(e,t.providerId).then(function(){return gc(e)})},!1)},t.zc=function(t){return Oc(this,"reauthViaPopup",t,function(){return kt()},!0)},t.rc=function(t){var e=this
return xc(this,"linkViaRedirect",t,function(){return Dc(e,t.providerId)},!1)},t.Ac=function(t){return xc(this,"reauthViaRedirect",t,function(){return kt()},!0)},t.Bb=function(t,e,n){var r=this
this.b&&(this.b.cancel(),this.b=null)
var i=null
return Lc(this,this.F().then(function(i){return qa(r.c,{requestUri:t,postBody:n,sessionId:e,idToken:i})}).then(function(t){return i=Rc(r,t,"link"),Pc(r,t)}).then(function(){return i}))},t.Cb=function(t,e,n){var r=this
this.b&&(this.b.cancel(),this.b=null)
var i=null
return Lc(this,kt().then(function(){return Oi(Va(r.c,{requestUri:t,sessionId:e,postBody:n}),r.uid)}).then(function(t){return i=Rc(r,t,"reauthenticate"),Ac(r,t),r.i=null,r.reload()}).then(function(){return i}),!0)},t.kb=function(t){var e=this,n=null
return Lc(this,this.F().then(function(e){return n=e,void 0===t||ut(t)?{}:ui(new $r(t))}).then(function(t){return e.c.kb(n,t)}).then(function(t){if(e.email!=t)return e.reload()}).then(function(){}))},t.toJSON=function(){return this.w()},t.w=function(){var t={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.l,appName:this.o,authDomain:this.u,stsTokenManager:this.h.w(),redirectEventId:this.aa||null}
return this.metadata&&pt(t,this.metadata.w()),q(this.providerData,function(e){t.providerData.push(function(t){var e,n={}
for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e])
return n}(e))}),t}
var qc={name:"redirectUser",B:"session"}
function Vc(t){return pu(t.b,qc,t.a)}function Bc(t){this.a=t,this.b=hu(),this.c=null,this.f=function(t){var e=Qc("local"),n=Qc("session"),r=Qc("none")
return function(t,e,n){var r=fu(e,n),i=lu(t,e.B)
return t.get(e,n).then(function(o){var a=null
try{a=Tr(u.localStorage.getItem(r))}catch(t){}if(a&&!o)return u.localStorage.removeItem(r),t.set(e,a,n)
a&&o&&"localStorage"!=i.type&&u.localStorage.removeItem(r)})}(t.b,e,t.a).then(function(){return t.b.get(n,t.a)}).then(function(i){return i?n:t.b.get(r,t.a).then(function(n){return n?r:t.b.get(e,t.a).then(function(n){return n?e:t.b.get(Wc,t.a).then(function(t){return t?Qc(t):e})})})}).then(function(e){return t.c=e,jc(t,e.B)}).s(function(){t.c||(t.c=e)})}(this),this.b.addListener(Qc("local"),this.a,S(this.g,this))}function jc(t,e){var n,r=[]
for(n in uu)uu[n]!==e&&r.push(pu(t.b,Qc(uu[n]),t.a))
return r.push(pu(t.b,Wc,t.a)),function(t){return new wt(function(e,n){var r=t.length,i=[]
if(r)for(var o=function(t,n){r--,i[t]=n,0==r&&e(i)},a=function(t){n(t)},s=0;s<t.length;s++)Dt(t[s],I(o,s),a)
else e(i)})}(r)}Bc.prototype.g=function(){var t=this,e=Qc("local")
zc(this,function(){return kt().then(function(){return t.c&&"local"!=t.c.B?t.b.get(e,t.a):null}).then(function(n){if(n)return jc(t,"local").then(function(){t.c=e})})})}
var Wc={name:"persistence",B:"session"}
function Qc(t){return{name:"authUser",B:t}}function Kc(t,e){return zc(t,function(){return t.b.set(t.c,e.w(),t.a)})}function Gc(t){return zc(t,function(){return pu(t.b,t.c,t.a)})}function Hc(t,e){return zc(t,function(){return t.b.get(t.c,t.a).then(function(t){return t&&e&&(t.authDomain=e),Fc(t||{})})})}function zc(t,e){return t.f=t.f.then(e,e),t.f}function Yc(t){if(this.l=!1,Mr(this,"settings",new Zu),Mr(this,"app",t),!nh(this).options||!nh(this).options.apiKey)throw new zr("invalid-api-key")
t=i.a.SDK_VERSION?pr(i.a.SDK_VERSION):null,this.c=new ga(nh(this).options&&nh(this).options.apiKey,mi(di),t),this.N=[],this.o=[],this.I=[],this.Rb=i.a.INTERNAL.createSubscribe(S(this.kc,this)),this.O=void 0,this.Sb=i.a.INTERNAL.createSubscribe(S(this.mc,this)),th(this,null),this.h=new Bc(nh(this).options.apiKey+":"+nh(this).name),this.A=new Uc(nh(this).options.apiKey+":"+nh(this).name),this.V=ah(this,function(t){var e=nh(t).options.authDomain,n=function(t){var e=function(t,e){return t.b.get(qc,t.a).then(function(t){return t&&e&&(t.authDomain=e),Fc(t||{})})}(t.A,nh(t).options.authDomain).then(function(e){return(t.D=e)&&(e.ba=t.A),Vc(t.A)})
return ah(t,e)}(t).then(function(){return Hc(t.h,e)}).then(function(e){return e?(e.ba=t.A,t.D&&(t.D.aa||null)==(e.aa||null)?e:e.reload().then(function(){return Kc(t.h,e).then(function(){return e})}).s(function(n){return"auth/network-request-failed"==n.code?e:Gc(t.h)})):null}).then(function(e){th(t,e||null)})
return ah(t,n)}(this)),this.i=ah(this,function(t){return t.V.then(function(){return t.fa()}).s(function(){}).then(function(){if(!t.l)return t.ka()}).s(function(){}).then(function(){if(!t.l){t.X=!0
var e=t.h
e.b.addListener(Qc("local"),e.a,t.ka)}})}(this)),this.X=!1,this.ka=S(this.Kc,this),this.Ha=S(this.Z,this),this.ra=S(this.Zb,this),this.sa=S(this.ic,this),this.ta=S(this.jc,this),function(t){var e=nh(t).options.authDomain,n=nh(t).options.apiKey
e&&vr()&&(t.Qb=t.V.then(function(){if(!t.l){if(t.a=Hu(e,n,nh(t).name),t.a.subscribe(t),rh(t)&&_c(rh(t)),t.D){_c(t.D)
var r=t.D
r.pa(t.ea()),lc(r,t),fc(r=t.D,t.G),pc(r,t),t.D=null}return t.a}}))}(this),this.INTERNAL={},this.INTERNAL.delete=S(this.delete,this),this.INTERNAL.logFramework=S(this.sc,this),this.u=0,Fe.call(this),function(t){Object.defineProperty(t,"lc",{get:function(){return this.ea()},set:function(t){this.pa(t)},enumerable:!1}),t.W=null}(this),this.G=[]}function Xc(t){pe.call(this,"languageCodeChanged"),this.g=t}function Jc(t){pe.call(this,"frameworkChanged"),this.c=t}function $c(t){return t.Qb||At(new zr("auth-domain-config-required"))}function Zc(t,e){var n={}
return n.apiKey=nh(t).options.apiKey,n.authDomain=nh(t).options.authDomain,n.appName=nh(t).name,t.V.then(function(){return function(t,e,n,r){var i=new hc(t,e)
return n&&(i.ba=n),r&&fc(i,r),i.reload().then(function(){return i})}(n,e,t.A,t.ya())}).then(function(e){return rh(t)&&e.uid==rh(t).uid?(Nc(rh(t),e),t.Z(e)):(th(t,e),_c(e),t.Z(e))}).then(function(){oh(t)})}function th(t,e){rh(t)&&(function(t,e){Q(t.N,function(t){return t==e})}(rh(t),t.Ha),ke(rh(t),"tokenChanged",t.ra),ke(rh(t),"userDeleted",t.sa),ke(rh(t),"userInvalidated",t.ta),mc(rh(t))),e&&(e.N.push(t.Ha),Ie(e,"tokenChanged",t.ra),Ie(e,"userDeleted",t.sa),Ie(e,"userInvalidated",t.ta),0<t.u&&yc(e)),Mr(t,"currentUser",e),e&&(e.pa(t.ea()),lc(e,t),fc(e,t.G),pc(e,t))}function eh(t,e){var n=null,r=null
return ah(t,e.then(function(e){return n=so(e),r=wi(e),Zc(t,e)}).then(function(){return Fr({user:rh(t),credential:n,additionalUserInfo:r,operationType:"signIn"})}))}function nh(t){return t.app}function rh(t){return t.currentUser}function ih(t){return rh(t)&&rh(t)._lat||null}function oh(t){if(t.X){for(var e=0;e<t.o.length;e++)t.o[e]&&t.o[e](ih(t))
if(t.O!==t.getUid()&&t.I.length)for(t.O=t.getUid(),e=0;e<t.I.length;e++)t.I[e]&&t.I[e](ih(t))}}function ah(t,e){return t.N.push(e),e.ia(function(){W(t.N,e)}),e}function sh(){}function uh(){this.a={},this.b=1e12}Bc.prototype.nb=function(t){var e=null,n=this
return function(t){var e=new zr("invalid-persistence-type"),n=new zr("unsupported-persistence-type")
t:{for(r in uu)if(uu[r]==t){var r=!0
break t}r=!1}if(!r||"string"!=typeof t)throw e
switch(sr()){case"ReactNative":if("session"===t)throw n
break
case"Node":if("none"!==t)throw n
break
default:if(!mr()&&"none"!==t)throw n}}(t),zc(this,function(){return t!=n.c.B?n.b.get(n.c,n.a).then(function(r){return e=r,jc(n,t)}).then(function(){if(n.c=Qc(t),e)return n.b.set(n.c,e,n.a)}):kt()})},N(Yc,Fe),N(Xc,pe),N(Jc,pe),(t=Yc.prototype).nb=function(t){return ah(this,t=this.h.nb(t))},t.pa=function(t){this.W===t||this.l||(this.W=t,Ia(this.c,this.W),this.dispatchEvent(new Xc(this.ea())))},t.ea=function(){return this.W},t.Qc=function(){var t=u.navigator
this.pa(t&&(t.languages&&t.languages[0]||t.language||t.userLanguage)||null)},t.sc=function(t){this.G.push(t),Ca(this.c,i.a.SDK_VERSION?pr(i.a.SDK_VERSION,this.G):null),this.dispatchEvent(new Jc(this.G))},t.ya=function(){return G(this.G)},t.toJSON=function(){return{apiKey:nh(this).options.apiKey,authDomain:nh(this).options.authDomain,appName:nh(this).name,currentUser:rh(this)&&rh(this).w()}},t.xb=function(t,e){switch(t){case"unknown":case"signInViaRedirect":return!0
case"signInViaPopup":return this.g==e&&!!this.f
default:return!1}},t.ha=function(t,e,n,r){"signInViaPopup"==t&&this.g==r&&(n&&this.v?this.v(n):e&&!n&&this.f&&this.f(e),this.b&&(this.b.cancel(),this.b=null),delete this.f,delete this.v)},t.xa=function(t,e){return"signInViaRedirect"==t||"signInViaPopup"==t&&this.g==e&&this.f?S(this.Yb,this):null},t.Yb=function(t,e,n){var r=this
t={requestUri:t,postBody:n,sessionId:e},this.b&&(this.b.cancel(),this.b=null)
var i=null,o=null,a=Ua(r.c,t).then(function(t){return i=so(t),o=wi(t),t})
return ah(this,t=r.V.then(function(){return a}).then(function(t){return Zc(r,t)}).then(function(){return Fr({user:rh(r),credential:i,additionalUserInfo:o,operationType:"signIn"})}))},t.Ic=function(t){if(!vr())return At(new zr("operation-not-supported-in-this-environment"))
var e=this,n=bi(t.providerId),r=Sr(),o=null;(!br()||or())&&nh(this).options.authDomain&&t.isOAuthProvider&&(o=Ds(nh(this).options.authDomain,nh(this).options.apiKey,nh(this).name,"signInViaPopup",t,null,r,i.a.SDK_VERSION||null))
var a=tr(o,n&&n.Ba,n&&n.Aa)
return ah(this,n=$c(this).then(function(e){return Qu(e,a,"signInViaPopup",t,r,!!o)}).then(function(){return new wt(function(t,n){e.ha("signInViaPopup",null,new zr("cancelled-popup-request"),e.g),e.f=t,e.v=n,e.g=r,e.b=e.a.Ea(e,"signInViaPopup",a,r)})}).then(function(t){return a&&Zn(a),t?Fr(t):null}).s(function(t){throw a&&Zn(a),t}))},t.Jc=function(t){if(!vr())return At(new zr("operation-not-supported-in-this-environment"))
var e=this
return ah(this,$c(this).then(function(){return zc(t=e.h,function(){return t.b.set(Wc,t.c.B,t.a)})
var t}).then(function(){return e.a.Ca("signInViaRedirect",t)}))},t.fa=function(){if(!vr())return At(new zr("operation-not-supported-in-this-environment"))
var t=this
return ah(this,$c(this).then(function(){return t.a.fa()}).then(function(t){return t?Fr(t):null}))},t.Oc=function(t){if(!t)return At(new zr("null-user"))
var e=this,n={}
n.apiKey=nh(this).options.apiKey,n.authDomain=nh(this).options.authDomain,n.appName=nh(this).name
var r=function(t,e,n,r){e=e||{apiKey:t.l,authDomain:t.u,appName:t.o}
var i=t.h,o={}
return o[ba]=i.b,o.refreshToken=i.a,o.expiresIn=(i.c-C())/1e3,e=new hc(e,o),n&&(e.ba=n),r&&fc(e,r),Nc(e,t),e}(t,n,e.A,e.ya())
return ah(this,this.i.then(function(){if(nh(e).options.apiKey!=t.l)return r.reload()}).then(function(){return rh(e)&&t.uid==rh(e).uid?(Nc(rh(e),t),e.Z(t)):(th(e,r),_c(r),e.Z(r))}).then(function(){oh(e)}))},t.pb=function(){var t=this
return ah(this,this.i.then(function(){return rh(t)?(th(t,null),Gc(t.h).then(function(){oh(t)})):kt()}))},t.Kc=function(){var t=this
return Hc(this.h,nh(this).options.authDomain).then(function(e){if(!t.l){var n
if(n=rh(t)&&e){n=rh(t).uid
var r=e.uid
n=null!=n&&""!==n&&null!=r&&""!==r&&n==r}if(n)return Nc(rh(t),e),rh(t).F();(rh(t)||e)&&(th(t,e),e&&(_c(e),e.ba=t.A),t.a&&t.a.subscribe(t),oh(t))}})},t.Z=function(t){return Kc(this.h,t)},t.Zb=function(){oh(this),this.Z(rh(this))},t.ic=function(){this.pb()},t.jc=function(){this.pb()},t.kc=function(t){var e=this
this.addAuthTokenListener(function(){t.next(rh(e))})},t.mc=function(t){var e=this
!function(t,e){t.I.push(e),ah(t,t.i.then(function(){!t.l&&j(t.I,e)&&t.O!==t.getUid()&&(t.O=t.getUid(),e(ih(t)))}))}(this,function(){t.next(rh(e))})},t.uc=function(t,e,n){var r=this
return this.X&&Promise.resolve().then(function(){g(t)?t(rh(r)):g(t.next)&&t.next(rh(r))}),this.Rb(t,e,n)},t.tc=function(t,e,n){var r=this
return this.X&&Promise.resolve().then(function(){r.O=r.getUid(),g(t)?t(rh(r)):g(t.next)&&t.next(rh(r))}),this.Sb(t,e,n)},t.$b=function(t){var e=this
return ah(this,this.i.then(function(){return rh(e)?rh(e).F(t).then(function(t){return{accessToken:t}}):null}))},t.Ec=function(t){var e=this
return this.i.then(function(){return eh(e,ys(e.c,hs,{token:t}))}).then(function(t){var n=t.user
return Cc(n,"isAnonymous",!1),e.Z(n),t})},t.Fc=function(t,e){var n=this
return this.i.then(function(){return eh(n,ys(n.c,ls,{email:t,password:e}))})},t.Ub=function(t,e){var n=this
return this.i.then(function(){return eh(n,ys(n.c,Qa,{email:t,password:e}))})},t.Ra=function(t){var e=this
return this.i.then(function(){return eh(e,t.la(e.c))})},t.Dc=function(t){return Or("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),this.Ra(t)},t.ob=function(){var t=this
return this.i.then(function(){var e=rh(t)
if(e&&e.isAnonymous){var n=Fr({providerId:null,isNewUser:!1})
return Fr({user:e,credential:null,additionalUserInfo:n,operationType:"signIn"})}return eh(t,t.c.ob()).then(function(e){var n=e.user
return Cc(n,"isAnonymous",!0),t.Z(n),e})})},t.getUid=function(){return rh(this)&&rh(this).uid||null},t.Tb=function(t){this.addAuthTokenListener(t),this.u++,0<this.u&&rh(this)&&yc(rh(this))},t.Bc=function(t){var e=this
q(this.o,function(n){n==t&&e.u--}),0>this.u&&(this.u=0),0==this.u&&rh(this)&&mc(rh(this)),this.removeAuthTokenListener(t)},t.addAuthTokenListener=function(t){var e=this
this.o.push(t),ah(this,this.i.then(function(){e.l||j(e.o,t)&&t(ih(e))}))},t.removeAuthTokenListener=function(t){Q(this.o,function(e){return e==t})},t.delete=function(){this.l=!0
for(var t=0;t<this.N.length;t++)this.N[t].cancel("app-deleted")
return this.N=[],this.h&&(t=this.h).b.removeListener(Qc("local"),t.a,this.ka),this.a&&(this.a.unsubscribe(this),this.a.Za()),Promise.resolve()},t.Xb=function(t){return ah(this,function(t,e){return ys(t,Ka,{identifier:e,continueUri:gr()?Xn():"http://localhost"}).then(function(t){return t.signinMethods||[]})}(this.c,t))},t.nc=function(t){return!!eo(t)},t.mb=function(t,e){var n=this
return ah(this,kt().then(function(){var t=new $r(e)
if(!t.c)throw new zr("argument-error",ei+" must be true when sending sign in link to email")
return ui(t)}).then(function(e){return n.c.mb(t,e)}).then(function(){}))},t.Rc=function(t){return this.Ka(t).then(function(t){return t.data.email})},t.$a=function(t,e){return ah(this,this.c.$a(t,e).then(function(){}))},t.Ka=function(t){return ah(this,this.c.Ka(t).then(function(t){return new qr(t)}))},t.Xa=function(t){return ah(this,this.c.Xa(t).then(function(){}))},t.lb=function(t,e){var n=this
return ah(this,kt().then(function(){return void 0===e||ut(e)?{}:ui(new $r(e))}).then(function(e){return n.c.lb(t,e)}).then(function(){}))},t.Hc=function(t,e){return ah(this,ec(this,t,e,S(this.Ra,this)))},t.Gc=function(t,e){var n=this
return ah(this,kt().then(function(){var r=to(t,e||Xn())
return n.Ra(r)}))},sh.prototype.render=function(){},sh.prototype.reset=function(){},sh.prototype.getResponse=function(){},sh.prototype.execute=function(){}
var ch=null
function hh(t,e){return(e=lh(e))&&t.a[e]||null}function lh(t){return(t=void 0===t?1e12:t)?t.toString():null}function fh(t,e){this.g=!1,this.c=e,this.a=this.b=null,this.h="invisible"!==this.c.size,this.f=Vn(t)
var n=this
this.i=function(){n.execute()},this.h?this.execute():Ie(this.f,"click",this.i)}function ph(t){if(t.g)throw Error("reCAPTCHA mock was already deleted!")}function dh(){}uh.prototype.render=function(t,e){return this.a[this.b.toString()]=new fh(t,e),this.b++},uh.prototype.reset=function(t){var e=hh(this,t)
t=lh(t),e&&t&&(e.delete(),delete this.a[t])},uh.prototype.getResponse=function(t){return(t=hh(this,t))?t.getResponse():null},uh.prototype.execute=function(t){(t=hh(this,t))&&t.execute()},fh.prototype.getResponse=function(){return ph(this),this.b},fh.prototype.execute=function(){ph(this)
var t=this
this.a||(this.a=setTimeout(function(){t.b=function(){for(var t=50,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return e.join("")}()
var e=t.c.callback,n=t.c["expired-callback"]
if(e)try{e(t.b)}catch(t){}t.a=setTimeout(function(){if(t.a=null,t.b=null,n)try{n()}catch(t){}t.h&&t.execute()},6e4)},500))},fh.prototype.delete=function(){ph(this),this.g=!0,clearTimeout(this.a),this.a=null,ke(this.f,"click",this.i)},dh.prototype.g=function(){return ch||(ch=new uh),kt(ch)},dh.prototype.c=function(){}
var yh=null
function mh(){this.b=u.grecaptcha?1/0:0,this.f=null,this.a="__rcb"+Math.floor(1e6*Math.random()).toString()}var vh=new wn(Sn,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),gh=new Nr(3e4,6e4)
mh.prototype.g=function(t){var e=this
return new wt(function(n,r){var i=setTimeout(function(){r(new zr("network-request-failed"))},gh.get())
!u.grecaptcha||t!==e.f&&!e.b?(u[e.a]=function(){if(u.grecaptcha){e.f=t
var o=u.grecaptcha.render
u.grecaptcha.render=function(t,n){return t=o(t,n),e.b++,t},clearTimeout(i),n(u.grecaptcha)}else clearTimeout(i),r(new zr("internal-error"))
delete u[e.a]},kt(la(Nn(vh,{onload:e.a,hl:t||""}))).s(function(){clearTimeout(i),r(new zr("internal-error","Unable to load external reCAPTCHA dependencies!"))})):(clearTimeout(i),n(u.grecaptcha))})},mh.prototype.c=function(){this.b--}
var _h=null
function bh(t,e,n,r,i,o,a){if(Mr(this,"type","recaptcha"),this.c=this.f=null,this.D=!1,this.l=e,this.g=null,a?(yh||(yh=new dh),a=yh):(_h||(_h=new mh),a=_h),this.o=a,this.a=n||{theme:"light",type:"image"},this.h=[],this.a[Th])throw new zr("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.")
if(this.i="invisible"===this.a[Sh],!u.document)throw new zr("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.")
if(!Vn(e)||!this.i&&Vn(e).hasChildNodes())throw new zr("argument-error","reCAPTCHA container is either not found or already contains inner elements!")
this.u=new ga(t,o||null,i||null),this.v=r||function(){return null}
var s=this
this.m=[]
var c=this.a[wh]
this.a[wh]=function(t){if(Ih(s,t),"function"==typeof c)c(t)
else if("string"==typeof c){var e=yr(c,u)
"function"==typeof e&&e(t)}}
var h=this.a[Eh]
this.a[Eh]=function(){if(Ih(s,null),"function"==typeof h)h()
else if("string"==typeof h){var t=yr(h,u)
"function"==typeof t&&t()}}}var wh="callback",Eh="expired-callback",Th="sitekey",Sh="size"
function Ih(t,e){for(var n=0;n<t.m.length;n++)try{t.m[n](e)}catch(t){}}function Ch(t,e){return t.h.push(e),e.ia(function(){W(t.h,e)}),e}function Nh(t){if(t.D)throw new zr("internal-error","RecaptchaVerifier instance has been destroyed.")}function kh(t,e,n){var r=!1
try{this.b=n||i.a.app()}catch(t){throw new zr("argument-error","No firebase.app.App instance is currently initialized.")}if(!this.b.options||!this.b.options.apiKey)throw new zr("invalid-api-key")
n=this.b.options.apiKey
var o=this,a=null
try{a=this.b.auth().ya()}catch(t){}try{r=this.b.auth().settings.appVerificationDisabledForTesting}catch(t){}a=i.a.SDK_VERSION?pr(i.a.SDK_VERSION,a):null,bh.call(this,n,t,e,function(){try{var t=o.b.auth().ea()}catch(e){t=null}return t},a,mi(di),r)}function Ah(t,e,n,r){t:{n=Array.prototype.slice.call(n)
for(var i=0,o=!1,a=0;a<e.length;a++)if(e[a].optional)o=!0
else{if(o)throw new zr("internal-error","Argument validator encountered a required argument after an optional argument.")
i++}if(o=e.length,n.length<i||o<n.length)r="Expected "+(i==o?1==i?"1 argument":i+" arguments":i+"-"+o+" arguments")+" but got "+n.length+"."
else{for(i=0;i<n.length;i++)if(o=e[i].optional&&void 0===n[i],!e[i].M(n[i])&&!o){if(e=e[i],0>i||i>=Dh.length)throw new zr("internal-error","Argument validator received an unsupported number of arguments.")
n=Dh[i],r=(r?"":n+" argument ")+(e.name?'"'+e.name+'" ':"")+"must be "+e.K+"."
break t}r=null}}if(r)throw new zr("argument-error",t+" failed: "+r)}(t=bh.prototype).za=function(){var t=this
return this.f?this.f:this.f=Ch(this,kt().then(function(){if(gr()&&!ar())return rr()
throw new zr("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")}).then(function(){return t.o.g(t.v())}).then(function(e){return t.g=e,ys(t.u,es,{})}).then(function(e){t.a[Th]=e.recaptchaSiteKey}).s(function(e){throw t.f=null,e}))},t.render=function(){Nh(this)
var t=this
return Ch(this,this.za().then(function(){if(null===t.c){var e=t.l
if(!t.i){var n=Vn(e)
e=function(t,e,n){var r=arguments,i=document,o=String(r[0]),a=r[1]
if(!bn&&a&&(a.name||a.type)){if(o=["<",o],a.name&&o.push(' name="',yt(a.name),'"'),a.type){o.push(' type="',yt(a.type),'"')
var s={}
pt(s,a),delete s.type,a=s}o.push(">"),o=o.join("")}return o=i.createElement(o),a&&(c(a)?o.className=a:m(a)?o.className=a.join(" "):Bn(o,a)),2<r.length&&function(t,e,n){function r(n){n&&e.appendChild(c(n)?t.createTextNode(n):n)}for(var i=2;i<n.length;i++){var o=n[i]
!v(o)||_(o)&&0<o.nodeType?r(o):q(Wn(o)?G(o):o,r)}}(i,o,r),o}("DIV"),n.appendChild(e)}t.c=t.g.render(e,t.a)}return t.c}))},t.verify=function(){Nh(this)
var t=this
return Ch(this,this.render().then(function(e){return new wt(function(n){var r=t.g.getResponse(e)
r?n(r):(t.m.push(function e(r){r&&(function(t,e){Q(t.m,function(t){return t==e})}(t,e),n(r))}),t.i&&t.g.execute(t.c))})}))},t.reset=function(){Nh(this),null!==this.c&&this.g.reset(this.c)},t.clear=function(){Nh(this),this.D=!0,this.o.c()
for(var t=0;t<this.h.length;t++)this.h[t].cancel("RecaptchaVerifier instance has been destroyed.")
if(!this.i){t=Vn(this.l)
for(var e;e=t.firstChild;)t.removeChild(e)}},N(kh,bh)
var Dh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ")
function Rh(t,e){return{name:t||"",K:"a valid string",optional:!!e,M:c}}function Ph(t,e){return{name:t||"",K:"a boolean",optional:!!e,M:h}}function Oh(t,e){return{name:t||"",K:"a valid object",optional:!!e,M:_}}function xh(t,e){return{name:t||"",K:"a function",optional:!!e,M:g}}function Mh(t,e){return{name:t||"",K:"null",optional:!!e,M:y}}function Lh(t){return{name:t?t+"Credential":"credential",K:t?"a valid "+t+" credential":"a valid credential",optional:!1,M:function(e){if(!e)return!1
var n=!t||e.providerId===t
return!(!e.la||!n)}}}function Fh(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(t){return!!(t&&c(t.type)&&g(t.verify))}}}function Uh(t,e,n,r){return{name:n||"",K:t.K+" or "+e.K,optional:!!r,M:function(n){return t.M(n)||e.M(n)}}}function qh(t,e){for(var n in e){var r=e[n].name
t[r]=jh(r,t[n],e[n].j)}}function Vh(t,e){for(var n in e){var r=e[n].name
r!==n&&Object.defineProperty(t,r,{get:I(function(t){return this[t]},n),set:I(function(t,e,n,r){Ah(t,[n],[r],!0),this[e]=r},r,n,e[n].vb),enumerable:!0})}}function Bh(t,e,n,r){t[e]=jh(e,n,r)}function jh(t,e,n){function r(){var t=Array.prototype.slice.call(arguments)
return Ah(o,n,t),e.apply(this,t)}if(!n)return e
var i,o=function(t){return(t=t.split("."))[t.length-1]}(t)
for(i in e)r[i]=e[i]
for(i in e.prototype)r.prototype[i]=e.prototype[i]
return r}qh(Yc.prototype,{Xa:{name:"applyActionCode",j:[Rh("code")]},Ka:{name:"checkActionCode",j:[Rh("code")]},$a:{name:"confirmPasswordReset",j:[Rh("code"),Rh("newPassword")]},Ub:{name:"createUserWithEmailAndPassword",j:[Rh("email"),Rh("password")]},Xb:{name:"fetchSignInMethodsForEmail",j:[Rh("email")]},fa:{name:"getRedirectResult",j:[]},nc:{name:"isSignInWithEmailLink",j:[Rh("emailLink")]},tc:{name:"onAuthStateChanged",j:[Uh(Oh(),xh(),"nextOrObserver"),xh("opt_error",!0),xh("opt_completed",!0)]},uc:{name:"onIdTokenChanged",j:[Uh(Oh(),xh(),"nextOrObserver"),xh("opt_error",!0),xh("opt_completed",!0)]},lb:{name:"sendPasswordResetEmail",j:[Rh("email"),Uh(Oh("opt_actionCodeSettings",!0),Mh(null,!0),"opt_actionCodeSettings",!0)]},mb:{name:"sendSignInLinkToEmail",j:[Rh("email"),Oh("actionCodeSettings")]},nb:{name:"setPersistence",j:[Rh("persistence")]},Dc:{name:"signInAndRetrieveDataWithCredential",j:[Lh()]},ob:{name:"signInAnonymously",j:[]},Ra:{name:"signInWithCredential",j:[Lh()]},Ec:{name:"signInWithCustomToken",j:[Rh("token")]},Fc:{name:"signInWithEmailAndPassword",j:[Rh("email"),Rh("password")]},Gc:{name:"signInWithEmailLink",j:[Rh("email"),Rh("emailLink",!0)]},Hc:{name:"signInWithPhoneNumber",j:[Rh("phoneNumber"),Fh()]},Ic:{name:"signInWithPopup",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Jc:{name:"signInWithRedirect",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Oc:{name:"updateCurrentUser",j:[Uh({name:"user",K:"an instance of Firebase User",optional:!1,M:function(t){return!!(t&&t instanceof hc)}},Mh(),"user")]},pb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[Rh(null,!0)]},Qc:{name:"useDeviceLanguage",j:[]},Rc:{name:"verifyPasswordResetCode",j:[Rh("code")]}}),Vh(Yc.prototype,{lc:{name:"languageCode",vb:Uh(Rh(),Mh(),"languageCode")}}),Yc.Persistence=uu,Yc.Persistence.LOCAL="local",Yc.Persistence.SESSION="session",Yc.Persistence.NONE="none",qh(hc.prototype,{delete:{name:"delete",j:[]},ac:{name:"getIdTokenResult",j:[Ph("opt_forceRefresh",!0)]},F:{name:"getIdToken",j:[Ph("opt_forceRefresh",!0)]},oc:{name:"linkAndRetrieveDataWithCredential",j:[Lh()]},fb:{name:"linkWithCredential",j:[Lh()]},pc:{name:"linkWithPhoneNumber",j:[Rh("phoneNumber"),Fh()]},qc:{name:"linkWithPopup",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},rc:{name:"linkWithRedirect",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},xc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Lh()]},hb:{name:"reauthenticateWithCredential",j:[Lh()]},yc:{name:"reauthenticateWithPhoneNumber",j:[Rh("phoneNumber"),Fh()]},zc:{name:"reauthenticateWithPopup",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Ac:{name:"reauthenticateWithRedirect",j:[{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},reload:{name:"reload",j:[]},kb:{name:"sendEmailVerification",j:[Uh(Oh("opt_actionCodeSettings",!0),Mh(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[Rh(null,!0)]},Nc:{name:"unlink",j:[Rh("provider")]},rb:{name:"updateEmail",j:[Rh("email")]},sb:{name:"updatePassword",j:[Rh("password")]},Pc:{name:"updatePhoneNumber",j:[Lh("phone")]},tb:{name:"updateProfile",j:[Oh("profile")]}}),qh(uh.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),qh(sh.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),qh(wt.prototype,{ia:{name:"finally"},s:{name:"catch"},then:{name:"then"}}),Vh(Zu.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",vb:Ph("appVerificationDisabledForTesting")}}),qh(tc.prototype,{confirm:{name:"confirm",j:[Rh("verificationCode")]}}),Bh(Pi,"fromJSON",function(t){t=c(t)?JSON.parse(t):t
for(var e,n=[qi,$i,ro,Li],r=0;r<n.length;r++)if(e=n[r](t))return e
return null},[Uh(Rh(),Oh(),"json")]),Bh(Zi,"credential",function(t,e){return new Ji(t,e)},[Rh("email"),Rh("password")]),qh(Ji.prototype,{w:{name:"toJSON",j:[Rh(null,!0)]}}),qh(Wi.prototype,{ua:{name:"addScope",j:[Rh("scope")]},Da:{name:"setCustomParameters",j:[Oh("customOAuthParameters")]}}),Bh(Wi,"credential",Qi,[Uh(Rh(),Oh(),"token")]),Bh(Zi,"credentialWithLink",to,[Rh("email"),Rh("emailLink")]),qh(Ki.prototype,{ua:{name:"addScope",j:[Rh("scope")]},Da:{name:"setCustomParameters",j:[Oh("customOAuthParameters")]}}),Bh(Ki,"credential",Gi,[Uh(Rh(),Oh(),"token")]),qh(Hi.prototype,{ua:{name:"addScope",j:[Rh("scope")]},Da:{name:"setCustomParameters",j:[Oh("customOAuthParameters")]}}),Bh(Hi,"credential",zi,[Uh(Rh(),Uh(Oh(),Mh()),"idToken"),Uh(Rh(),Mh(),"accessToken",!0)]),qh(Yi.prototype,{Da:{name:"setCustomParameters",j:[Oh("customOAuthParameters")]}}),Bh(Yi,"credential",Xi,[Uh(Rh(),Oh(),"token"),Rh("secret",!0)]),qh(ji.prototype,{ua:{name:"addScope",j:[Rh("scope")]},credential:{name:"credential",j:[Uh(Rh(),Uh(Oh(),Mh()),"optionsOrIdToken"),Uh(Rh(),Mh(),"accessToken",!0)]},Da:{name:"setCustomParameters",j:[Oh("customOAuthParameters")]}}),qh(Fi.prototype,{w:{name:"toJSON",j:[Rh(null,!0)]}}),qh(xi.prototype,{w:{name:"toJSON",j:[Rh(null,!0)]}}),Bh(oo,"credential",ao,[Rh("verificationId"),Rh("verificationCode")]),qh(oo.prototype,{Va:{name:"verifyPhoneNumber",j:[Rh("phoneNumber"),Fh()]}}),qh(no.prototype,{w:{name:"toJSON",j:[Rh(null,!0)]}}),qh(zr.prototype,{toJSON:{name:"toJSON",j:[Rh(null,!0)]}}),qh(mo.prototype,{toJSON:{name:"toJSON",j:[Rh(null,!0)]}}),qh(yo.prototype,{toJSON:{name:"toJSON",j:[Rh(null,!0)]}}),qh(kh.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}}),function(){if(void 0===i.a||!i.a.INTERNAL||!i.a.INTERNAL.registerService)throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.")
var t={Auth:Yc,AuthCredential:Pi,Error:zr}
Bh(t,"EmailAuthProvider",Zi,[]),Bh(t,"FacebookAuthProvider",Wi,[]),Bh(t,"GithubAuthProvider",Ki,[]),Bh(t,"GoogleAuthProvider",Hi,[]),Bh(t,"TwitterAuthProvider",Yi,[]),Bh(t,"OAuthProvider",ji,[Rh("providerId")]),Bh(t,"SAMLAuthProvider",Bi,[Rh("providerId")]),Bh(t,"PhoneAuthProvider",oo,[{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(t){return!!(t&&t instanceof Yc)}}]),Bh(t,"RecaptchaVerifier",kh,[Uh(Rh(),{name:"",K:"an HTML element",optional:!1,M:function(t){return!!(t&&t instanceof Element)}},"recaptchaContainer"),Oh("recaptchaParameters",!0),{name:"app",K:"an instance of Firebase App",optional:!0,M:function(t){return!!(t&&t instanceof i.a.app.App)}}]),i.a.INTERNAL.registerService("auth",function(t,e){return e({INTERNAL:{getUid:S((t=new Yc(t)).getUid,t),getToken:S(t.$b,t),addAuthTokenListener:S(t.Tb,t),removeAuthTokenListener:S(t.Bc,t)}}),t},t,function(t,e){if("create"===t)try{e.auth()}catch(t){}}),i.a.INTERNAL.extendNamespace({User:hc})}()}).apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[4],{190:function(t,e,n){"use strict"
n.r(e),n(198)},198:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o,a=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,s=n(199),u=n(65),c=n(64),h=n(200),l=a.SDK_VERSION,f=new u.Logger("@firebase/firestore")
function p(){return f.logLevel===u.LogLevel.DEBUG?o.DEBUG:f.logLevel===u.LogLevel.SILENT?o.SILENT:o.ERROR}function d(t){switch(t){case o.DEBUG:f.logLevel=u.LogLevel.DEBUG
break
case o.ERROR:f.logLevel=u.LogLevel.ERROR
break
case o.SILENT:f.logLevel=u.LogLevel.SILENT
break
default:f.error("Firestore ("+l+"): Invalid value passed to `setLogLevel`")}}function y(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
if(f.logLevel<=u.LogLevel.DEBUG){var i=n.map(v)
f.debug.apply(f,s.__spread(["Firestore ("+l+") ["+t+"]: "+e],i))}}function m(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(f.logLevel<=u.LogLevel.ERROR){var r=e.map(v)
f.error.apply(f,s.__spread(["Firestore ("+l+"): "+t],r))}}function v(t){if("string"==typeof t)return t
var e=b.getPlatform()
try{return e.formatJSON(t)}catch(e){return t}}function g(t){var e="FIRESTORE ("+l+") INTERNAL ASSERTION FAILED: "+t
throw m(e),new Error(e)}function _(t,e){t||g(e)}!function(t){t[t.DEBUG=0]="DEBUG",t[t.ERROR=1]="ERROR",t[t.SILENT=2]="SILENT"}(o||(o={}))
var b=function(){function t(){}return t.setPlatform=function(e){t.platform&&g("Platform already defined"),t.platform=e},t.getPlatform=function(){return t.platform||g("Platform not set"),t.platform},t}()
function w(){return b.getPlatform().emptyByteString}var E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},T=function(t){function e(e,n){var r=t.call(this,n)||this
return r.code=e,r.message=n,r.name="FirebaseError",r.toString=function(){return r.name+": [code="+r.code+"]: "+r.message},r}return s.__extends(e,t),e}(Error)
function S(t,e){function n(){var t="This constructor is private."
throw e&&(t+=" ",t+=e),new T(E.INVALID_ARGUMENT,t)}for(var r in n.prototype=t.prototype,t)t.hasOwnProperty(r)&&(n[r]=t[r])
return n}function I(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function C(t,e){return void 0!==t?t:e}function N(t,e){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Number(n)
isNaN(r)||e(r,t[n])}}function k(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function A(t){for(var e in _(null!=t&&"object"===r(t),"isEmpty() expects object parameter."),t)if(Object.prototype.hasOwnProperty.call(t,e))return!1
return!0}function D(t,e){if(0!==e.length)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() does not support arguments, but was called with "+G(e.length,"argument")+".")}function R(t,e,n){if(e.length!==n)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires "+G(n,"argument")+", but was called with "+G(e.length,"argument")+".")}function P(t,e,n){if(e.length<n)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires at least "+G(n,"argument")+", but was called with "+G(e.length,"argument")+".")}function O(t,e,n,r){if(e.length<n||e.length>r)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires between "+n+" and "+r+" arguments, but was called with "+G(e.length,"argument")+".")}function x(t,e,n,r){q(t,e,K(n)+" argument",r)}function M(t,e,n,r){void 0!==r&&x(t,e,n,r)}function L(t,e,n,r){q(t,e,n+" option",r)}function F(t,e,n,r){void 0!==r&&L(t,e,n,r)}function U(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){var o,a,u=[]
try{for(var c=s.__values(i),h=c.next();!h.done;h=c.next()){var l=h.value
if(l===r)return
u.push(B(l))}}catch(t){o={error:t}}finally{try{h&&!h.done&&(a=c.return)&&a.call(c)}finally{if(o)throw o.error}}var f=B(r)
throw new T(E.INVALID_ARGUMENT,"Invalid value "+f+" provided to function "+t+'() for option "'+n+'". Acceptable values: '+u.join(", "))}(t,0,n,r,i)}function q(t,e,n,i){if(!("object"===e?V(i):"non-empty string"===e?"string"==typeof i&&""!==i:r(i)===e)){var o=B(i)
throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires its "+n+" to be of type "+e+", but it was: "+o)}}function V(t){return"object"===r(t)&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function B(t){if(void 0===t)return"undefined"
if(null===t)return"null"
if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t)
if("number"==typeof t||"boolean"==typeof t)return""+t
if("object"===r(t)){if(t instanceof Array)return"an array"
var e=function(t){if(t.constructor){var e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString())
if(e&&e.length>1)return e[1]}return null}(t)
return e?"a custom "+e+" object":"an object"}return"function"==typeof t?"a function":g("Unknown wrong type: "+r(t))}function j(t,e,n){if(void 0===n)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires a valid "+K(e)+" argument, but it was undefined.")}function W(t,e,n){k(e,function(e,r){if(n.indexOf(e)<0)throw new T(E.INVALID_ARGUMENT,"Unknown option '"+e+"' passed to function "+t+"(). Available options: "+n.join(", "))})}function Q(t,e,n,r){var i=B(r)
return new T(E.INVALID_ARGUMENT,"Function "+t+"() requires its "+K(n)+" argument to be a "+e+", but it was: "+i)}function K(t){switch(t){case 1:return"first"
case 2:return"second"
case 3:return"third"
default:return t+"th"}}function G(t,e){return t+" "+e+(1===t?"":"s")}var H=function(){function t(){}return t.newId=function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="",n=0;n<20;n++)e+=t.charAt(Math.floor(Math.random()*t.length))
return _(20===e.length,"Invalid auto ID: "+e),e},t}()
function z(t,e){return t<e?-1:t>e?1:0}function Y(t,e){if(t.length!==e.length)return!1
for(var n=0;n<t.length;n++)if(!t[n].isEqual(e[n]))return!1
return!0}function X(t){return t+"\0"}function J(){if("undefined"==typeof Uint8Array)throw new T(E.UNIMPLEMENTED,"Uint8Arrays are not available in this environment.")}function $(){if(!b.getPlatform().base64Available)throw new T(E.UNIMPLEMENTED,"Blobs are unavailable in Firestore in this environment.")}var Z,tt=function(){function t(t){$(),this._binaryString=t}return t.fromBase64String=function(e){R("Blob.fromBase64String",arguments,1),x("Blob.fromBase64String","string",1,e),$()
try{return new t(b.getPlatform().atob(e))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct Blob from Base64 string: "+t)}},t.fromUint8Array=function(e){if(R("Blob.fromUint8Array",arguments,1),J(),!(e instanceof Uint8Array))throw Q("Blob.fromUint8Array","Uint8Array",1,e)
return new t(Array.prototype.map.call(e,function(t){return String.fromCharCode(t)}).join(""))},t.prototype.toBase64=function(){return R("Blob.toBase64",arguments,0),$(),b.getPlatform().btoa(this._binaryString)},t.prototype.toUint8Array=function(){R("Blob.toUint8Array",arguments,0),J()
for(var t=new Uint8Array(this._binaryString.length),e=0;e<this._binaryString.length;e++)t[e]=this._binaryString.charCodeAt(e)
return t},t.prototype.toString=function(){return"Blob(base64: "+this.toBase64()+")"},t.prototype.isEqual=function(t){return this._binaryString===t._binaryString},t.prototype._compareTo=function(t){return z(this._binaryString,t._binaryString)},t}(),et=S(tt,"Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),nt=function(t,e,n,r,i){this.databaseId=t,this.persistenceKey=e,this.host=n,this.ssl=r,this.forceLongPolling=i},rt="(default)",it=function(){function t(t,e){this.projectId=t,this.database=e||rt}return Object.defineProperty(t.prototype,"isDefaultDatabase",{get:function(){return this.database===rt},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database},t.prototype.compareTo=function(t){return z(this.projectId,t.projectId)||z(this.database,t.database)},t}(),ot=function(){function t(t,e){var n=this
this.previousValue=t,e&&(e.sequenceNumberHandler=function(t){return n.setPreviousValue(t)},this.writeNewSequenceNumber=function(t){return e.writeSequenceNumber(t)})}return t.prototype.setPreviousValue=function(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue},t.prototype.next=function(){var t=++this.previousValue
return this.writeNewSequenceNumber&&this.writeNewSequenceNumber(t),t},t.INVALID=-1,t}(),at=function(){function t(t,e,n){this.init(t,e,n)}return t.prototype.init=function(t,e,n){void 0===e?e=0:e>t.length&&g("offset "+e+" out of range "+t.length),void 0===n?n=t.length-e:n>t.length-e&&g("length "+n+" out of range "+(t.length-e)),this.segments=t,this.offset=e,this.len=n},t.prototype.construct=function(t,e,n){var r=Object.create(Object.getPrototypeOf(this))
return r.init(t,e,n),r},Object.defineProperty(t.prototype,"length",{get:function(){return this.len},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(e){return 0===t.comparator(this,e)},t.prototype.child=function(e){var n=this.segments.slice(this.offset,this.limit())
return e instanceof t?e.forEach(function(t){n.push(t)}):"string"==typeof e?n.push(e):g("Unknown parameter type for Path.child(): "+e),this.construct(n)},t.prototype.limit=function(){return this.offset+this.length},t.prototype.popFirst=function(t){return t=void 0===t?1:t,_(this.length>=t,"Can't call popFirst() with less segments"),this.construct(this.segments,this.offset+t,this.length-t)},t.prototype.popLast=function(){return _(!this.isEmpty(),"Can't call popLast() on empty path"),this.construct(this.segments,this.offset,this.length-1)},t.prototype.firstSegment=function(){return _(!this.isEmpty(),"Can't call firstSegment() on empty path"),this.segments[this.offset]},t.prototype.lastSegment=function(){return this.get(this.length-1)},t.prototype.get=function(t){return _(t<this.length,"Index out of range"),this.segments[this.offset+t]},t.prototype.isEmpty=function(){return 0===this.length},t.prototype.isPrefixOf=function(t){if(t.length<this.length)return!1
for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0},t.prototype.isImmediateParentOf=function(t){if(this.length+1!==t.length)return!1
for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0},t.prototype.forEach=function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])},t.prototype.toArray=function(){return this.segments.slice(this.offset,this.limit())},t.comparator=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++){var i=t.get(r),o=e.get(r)
if(i<o)return-1
if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0},t}(),st=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.canonicalString=function(){return this.toArray().join("/")},e.prototype.toString=function(){return this.canonicalString()},e.fromString=function(t){if(t.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,"Invalid path ("+t+"). Paths must not contain // in them.")
return new e(t.split("/").filter(function(t){return t.length>0}))},e.EMPTY_PATH=new e([]),e}(at),ut=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ct=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.isValidIdentifier=function(t){return ut.test(t)},e.prototype.canonicalString=function(){return this.toArray().map(function(t){return t=t.replace("\\","\\\\").replace("`","\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t}).join(".")},e.prototype.toString=function(){return this.canonicalString()},e.prototype.isKeyField=function(){return 1===this.length&&"__name__"===this.get(0)},e.keyField=function(){return new e(["__name__"])},e.fromServerFormat=function(t){for(var n=[],r="",i=0,o=function(){if(0===r.length)throw new T(E.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")
n.push(r),r=""},a=!1;i<t.length;){var s=t[i]
if("\\"===s){if(i+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t)
var u=t[i+1]
if("\\"!==u&&"."!==u&&"`"!==u)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t)
r+=u,i+=2}else"`"===s?(a=!a,i++):"."!==s||a?(r+=s,i++):(o(),i++)}if(o(),a)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t)
return new e(n)},e.EMPTY_PATH=new e([]),e}(at),ht=function(){function t(e){this.path=e,_(t.isDocumentKey(e),"Invalid DocumentKey with an odd number of segments: "+e.toArray().join("/"))}return t.prototype.hasCollectionId=function(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t},t.prototype.isEqual=function(t){return null!==t&&0===st.comparator(this.path,t.path)},t.prototype.toString=function(){return this.path.toString()},t.comparator=function(t,e){return st.comparator(t.path,e.path)},t.isDocumentKey=function(t){return t.length%2==0},t.fromSegments=function(e){return new t(new st(e.slice()))},t.fromPathString=function(e){return new t(st.fromString(e))},t.EMPTY=new t(new st([])),t}(),lt=function(){var t=this
this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})}
!function(t){t.All="all",t.ListenStreamIdle="listen_stream_idle",t.ListenStreamConnectionBackoff="listen_stream_connection_backoff",t.WriteStreamIdle="write_stream_idle",t.WriteStreamConnectionBackoff="write_stream_connection_backoff",t.OnlineStateTimeout="online_state_timeout",t.ClientMetadataRefresh="client_metadata_refresh",t.LruGarbageCollection="lru_garbage_collection"}(Z||(Z={}))
var ft=function(){function t(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.catch=this.deferred.promise.catch.bind(this.deferred.promise),this.deferred.promise.catch(function(t){})}return t.createAndSchedule=function(e,n,r,i,o){var a=new t(e,n,Date.now()+r,i,o)
return a.start(r),a},t.prototype.start=function(t){var e=this
this.timerHandle=setTimeout(function(){return e.handleDelayElapsed()},t)},t.prototype.skipDelay=function(){return this.handleDelayElapsed()},t.prototype.cancel=function(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))},t.prototype.handleDelayElapsed=function(){var t=this
this.asyncQueue.enqueueAndForget(function(){return null!==t.timerHandle?(t.clearTimeout(),t.op().then(function(e){return t.deferred.resolve(e)})):Promise.resolve()})},t.prototype.clearTimeout=function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)},t}(),pt=function(){function t(){this.tail=Promise.resolve(),this.delayedOperations=[],this.operationInProgress=!1}return t.prototype.enqueueAndForget=function(t){this.enqueue(t)},t.prototype.enqueue=function(t){var e=this
this.verifyNotFailed()
var n=this.tail.then(function(){return e.operationInProgress=!0,t().catch(function(t){e.failure=t,e.operationInProgress=!1
var n=t.stack||t.message||""
throw m("INTERNAL UNHANDLED ERROR: ",n),n.indexOf("Firestore Test Simulated Error")<0&&setTimeout(function(){throw t},0),t}).then(function(t){return e.operationInProgress=!1,t})})
return this.tail=n,n},t.prototype.enqueueAfterDelay=function(t,e,n){var r=this
this.verifyNotFailed(),_(e>=0,"Attempted to schedule an operation with a negative delay of "+e),_(!this.containsDelayedOperation(t),"Attempted to schedule multiple operations with timer id "+t+".")
var i=ft.createAndSchedule(this,t,e,n,function(t){return r.removeDelayedOperation(t)})
return this.delayedOperations.push(i),i},t.prototype.verifyNotFailed=function(){this.failure&&g("AsyncQueue is already failed: "+(this.failure.stack||this.failure.message))},t.prototype.verifyOperationInProgress=function(){_(this.operationInProgress,"verifyOpInProgress() called when no op in progress on this queue.")},t.prototype.drain=function(){return this.enqueue(function(){return Promise.resolve()})},t.prototype.containsDelayedOperation=function(t){var e,n
try{for(var r=s.__values(this.delayedOperations),i=r.next();!i.done;i=r.next())if(i.value.timerId===t)return!0}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return!1},t.prototype.runDelayedOperationsEarly=function(t){var e=this
return this.drain().then(function(){var n,r
_(t===Z.All||e.containsDelayedOperation(t),"Attempted to drain to missing operation "+t),e.delayedOperations.sort(function(t,e){return t.targetTimeMs-e.targetTimeMs})
try{for(var i=s.__values(e.delayedOperations),o=i.next();!o.done;o=i.next()){var a=o.value
if(a.skipDelay(),t!==Z.All&&a.timerId===t)break}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return e.drain()})},t.prototype.removeDelayedOperation=function(t){var e=this.delayedOperations.indexOf(t)
_(e>=0,"Delayed operation not found."),this.delayedOperations.splice(e,1)},t}(),dt="",yt="",mt="",vt=""
function gt(t){for(var e="",n=0;n<t.length;n++)e.length>0&&(e=bt(e)),e=_t(t.get(n),e)
return bt(e)}function _t(t,e){for(var n=e,r=t.length,i=0;i<r;i++){var o=t.charAt(i)
switch(o){case"\0":n+=dt+mt
break
case dt:n+=dt+vt
break
default:n+=o}}return n}function bt(t){return t+dt+yt}function wt(t){var e=t.length
if(_(e>=2,"Invalid path "+t),2===e)return _(t.charAt(0)===dt&&t.charAt(1)===yt,"Non-empty path "+t+" had length 2"),st.EMPTY_PATH
for(var n=e-2,r=[],i="",o=0;o<e;){var a=t.indexOf(dt,o)
switch((a<0||a>n)&&g('Invalid encoded resource path: "'+t+'"'),t.charAt(a+1)){case yt:var s=t.substring(o,a),u=void 0
0===i.length?u=s:(u=i+=s,i=""),r.push(u)
break
case mt:i+=t.substring(o,a),i+="\0"
break
case vt:i+=t.substring(o,a+1)
break
default:g('Invalid encoded resource path: "'+t+'"')}o=a+2}return new st(r)}var Et=function(){function t(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e)
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
return Math.pow(2,t)<=this.size+1},t.prototype.check=function(){if(this.isRed()&&this.left.isRed())throw g("Red node has red child("+this.key+","+this.value+")")
if(this.right.isRed())throw g("Right child of ("+this.key+","+this.value+") is red")
var t=this.left.check()
if(t!==this.right.check())throw g("Black depths differ")
return t+(this.isRed()?0:1)},t.EMPTY=null,t.RED=!0,t.BLACK=!1,t}(),Nt=function(){function t(){this.size=0}return t.prototype.copy=function(t,e,n,r,i){return this},t.prototype.insert=function(t,e,n){return new Ct(t,e)},t.prototype.remove=function(t,e){return this},t.prototype.isEmpty=function(){return!0},t.prototype.inorderTraversal=function(t){return!1},t.prototype.reverseTraversal=function(t){return!1},t.prototype.minKey=function(){return null},t.prototype.maxKey=function(){return null},t.prototype.isRed=function(){return!1},t.prototype.checkMaxDepth=function(){return!0},t.prototype.check=function(){return 0},t}()
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
function Rt(){return Dt}function Pt(){return Rt()}var Ot=new St(ht.comparator)
function xt(){return Ot}var Mt=new St(ht.comparator)
function Lt(){return Mt}var Ft=new kt(ht.comparator)
function Ut(){for(var t,e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var i=Ft
try{for(var o=s.__values(n),a=o.next();!a.done;a=o.next()){var u=a.value
i=i.add(u)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return i}var qt=new kt(z)
function Vt(){return qt}var Bt=function(){function t(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r,_(r.length>0,"Cannot create an empty mutation batch")}return t.prototype.applyToRemoteDocument=function(t,e,n){e&&_(e.key.isEqual(t),"applyToRemoteDocument: key "+t+" should match maybeDoc key\n        "+e.key)
var r=n.mutationResults
_(r.length===this.mutations.length,"Mismatch between mutations length\n      ("+this.mutations.length+") and mutation results length\n      ("+r.length+").")
for(var i=0;i<this.mutations.length;i++){var o=this.mutations[i]
if(o.key.isEqual(t)){var a=r[i]
e=o.applyToRemoteDocument(e,a)}}return e},t.prototype.applyToLocalView=function(t,e){var n,r,i,o
e&&_(e.key.isEqual(t),"applyToLocalDocument: key "+t+" should match maybeDoc key\n        "+e.key)
try{for(var a=s.__values(this.baseMutations),u=a.next();!u.done;u=a.next())(f=u.value).key.isEqual(t)&&(e=f.applyToLocalView(e,e,this.localWriteTime))}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}var c=e
try{for(var h=s.__values(this.mutations),l=h.next();!l.done;l=h.next()){var f;(f=l.value).key.isEqual(t)&&(e=f.applyToLocalView(e,c,this.localWriteTime))}}catch(t){i={error:t}}finally{try{l&&!l.done&&(o=h.return)&&o.call(h)}finally{if(i)throw i.error}}return e},t.prototype.applyToLocalDocumentSet=function(t){var e=this,n=t
return this.mutations.forEach(function(r){var i=e.applyToLocalView(r.key,t.get(r.key))
i&&(n=n.insert(r.key,i))}),n},t.prototype.keys=function(){return this.mutations.reduce(function(t,e){return t.add(e.key)},Ut())},t.prototype.isEqual=function(t){return this.batchId===t.batchId&&Y(this.mutations,t.mutations)&&Y(this.baseMutations,t.baseMutations)},t}(),jt=function(){function t(t,e,n,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.streamToken=r,this.docVersions=i}return t.from=function(e,n,r,i){_(e.mutations.length===r.length,"Mutations sent "+e.mutations.length+" must equal results received "+r.length)
for(var o=Lt(),a=e.mutations,s=0;s<a.length;s++)o=o.insert(a[s].key,r[s].version)
return new t(e,n,r,i,o)},t}(),Wt=function(){function t(t){var e=this
this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(function(t){e.isDone=!0,e.result=t,e.nextCallback&&e.nextCallback(t)},function(t){e.isDone=!0,e.error=t,e.catchCallback&&e.catchCallback(t)})}return t.prototype.catch=function(t){return this.next(void 0,t)},t.prototype.next=function(e,n){var r=this
return this.callbackAttached&&g("Called next() or catch() twice for PersistencePromise"),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t(function(t,i){r.nextCallback=function(n){r.wrapSuccess(e,n).next(t,i)},r.catchCallback=function(e){r.wrapFailure(n,e).next(t,i)}})},t.prototype.toPromise=function(){var t=this
return new Promise(function(e,n){t.next(e,n)})},t.prototype.wrapUserFunction=function(e){try{var n=e()
return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}},t.prototype.wrapSuccess=function(e,n){return e?this.wrapUserFunction(function(){return e(n)}):t.resolve(n)},t.prototype.wrapFailure=function(e,n){return e?this.wrapUserFunction(function(){return e(n)}):t.reject(n)},t.resolve=function(e){return new t(function(t,n){t(e)})},t.reject=function(e){return new t(function(t,n){n(e)})},t.waitFor=function(e){return new t(function(t,n){var r=0,i=0,o=!1
e.forEach(function(e){++r,e.next(function(){++i,o&&i===r&&t()},function(t){return n(t)})}),o=!0,i===r&&t()})},t.or=function(e){var n,r,i=t.resolve(!1),o=function(e){i=i.next(function(n){return n?t.resolve(n):e()})}
try{for(var a=s.__values(e),u=a.next();!u.done;u=a.next())o(u.value)}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return i},t.forEach=function(t,e){var n=this,r=[]
return t.forEach(function(t,i){r.push(e.call(n,t,i))}),this.waitFor(r)},t}(),Qt=function(){function t(t,e,n,r){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=r,this.documentKeysByBatchId={}}return t.forUser=function(e,n,r,i){return _(""!==e.uid,"UserID must not be an empty string."),new t(e.isAuthenticated()?e.uid:"",n,r,i)},t.prototype.checkEmpty=function(t){var e=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY])
return zt(t).iterate({index:xe.userMutationsIndex,range:n},function(t,n,r){e=!1,r.done()}).next(function(){return e})},t.prototype.acknowledgeBatch=function(t,e,n){return this.getMutationQueueMetadata(t).next(function(e){return e.lastStreamToken=Ht(n),Xt(t).put(e)})},t.prototype.getLastStreamToken=function(t){return this.getMutationQueueMetadata(t).next(function(t){return t.lastStreamToken})},t.prototype.setLastStreamToken=function(t,e){return this.getMutationQueueMetadata(t).next(function(n){return n.lastStreamToken=Ht(e),Xt(t).put(n)})},t.prototype.addMutationBatch=function(t,e,n,r){var i=this,o=Yt(t),a=zt(t)
return a.add({}).next(function(u){var c,h
_("number"==typeof u,"Auto-generated key is not a number")
var l=new Bt(u,e,n,r),f=i.serializer.toDbMutationBatch(i.userId,l)
i.documentKeysByBatchId[u]=l.keys()
var p=[]
try{for(var d=s.__values(r),y=d.next();!y.done;y=d.next()){var m=y.value,v=Me.key(i.userId,m.key.path,u)
p.push(a.put(f)),p.push(o.put(v,Me.PLACEHOLDER)),p.push(i.indexManager.addToCollectionParentIndex(t,m.key.path.popLast()))}}catch(t){c={error:t}}finally{try{y&&!y.done&&(h=d.return)&&h.call(d)}finally{if(c)throw c.error}}return Wt.waitFor(p).next(function(){return l})})},t.prototype.lookupMutationBatch=function(t,e){var n=this
return zt(t).get(e).next(function(t){return t?(_(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+e),n.serializer.fromDbMutationBatch(t)):null})},t.prototype.lookupMutationKeys=function(t,e){var n=this
return this.documentKeysByBatchId[e]?Wt.resolve(this.documentKeysByBatchId[e]):this.lookupMutationBatch(t,e).next(function(t){if(t){var r=t.keys()
return n.documentKeysByBatchId[e]=r,r}return null})},t.prototype.getNextMutationBatchAfterBatchId=function(t,e){var n=this,r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]),o=null
return zt(t).iterate({index:xe.userMutationsIndex,range:i},function(t,e,i){e.userId===n.userId&&(_(e.batchId>=r,"Should have found mutation after "+r),o=n.serializer.fromDbMutationBatch(e)),i.done()}).next(function(){return o})},t.prototype.getAllMutationBatches=function(t){var e=this,n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY])
return zt(t).loadAll(xe.userMutationsIndex,n).next(function(t){return t.map(function(t){return e.serializer.fromDbMutationBatch(t)})})},t.prototype.getAllMutationBatchesAffectingDocumentKey=function(t,e){var n=this,r=Me.prefixForPath(this.userId,e.path),i=IDBKeyRange.lowerBound(r),o=[]
return Yt(t).iterate({range:i},function(r,i,a){var u=s.__read(r,3),c=u[0],h=u[1],l=u[2],f=wt(h)
if(c===n.userId&&e.path.isEqual(f))return zt(t).get(l).next(function(t){if(!t)throw g("Dangling document-mutation reference found: "+r+" which points to "+l)
_(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+l),o.push(n.serializer.fromDbMutationBatch(t))})
a.done()}).next(function(){return o})},t.prototype.getAllMutationBatchesAffectingDocumentKeys=function(t,e){var n=this,r=new kt(z),i=[]
return e.forEach(function(e){var o=Me.prefixForPath(n.userId,e.path),a=IDBKeyRange.lowerBound(o),u=Yt(t).iterate({range:a},function(t,i,o){var a=s.__read(t,3),u=a[0],c=a[1],h=a[2],l=wt(c)
u===n.userId&&e.path.isEqual(l)?r=r.add(h):o.done()})
i.push(u)}),Wt.waitFor(i).next(function(){return n.lookupMutationBatches(t,r)})},t.prototype.getAllMutationBatchesAffectingQuery=function(t,e){var n=this
_(!e.isDocumentQuery(),"Document queries shouldn't go down this path"),_(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
var r=e.path,i=r.length+1,o=Me.prefixForPath(this.userId,r),a=IDBKeyRange.lowerBound(o),u=new kt(z)
return Yt(t).iterate({range:a},function(t,e,o){var a=s.__read(t,3),c=a[0],h=a[1],l=a[2],f=wt(h)
c===n.userId&&r.isPrefixOf(f)?f.length===i&&(u=u.add(l)):o.done()}).next(function(){return n.lookupMutationBatches(t,u)})},t.prototype.lookupMutationBatches=function(t,e){var n=this,r=[],i=[]
return e.forEach(function(e){i.push(zt(t).get(e).next(function(t){if(null===t)throw g("Dangling document-mutation reference found, which points to "+e)
_(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+e),r.push(n.serializer.fromDbMutationBatch(t))}))}),Wt.waitFor(i).next(function(){return r})},t.prototype.removeMutationBatch=function(t,e){var n=this
return Gt(t.simpleDbTransaction,this.userId,e).next(function(r){return n.removeCachedMutationKeys(e.batchId),Wt.forEach(r,function(e){return n.referenceDelegate.removeMutationReference(t,e)})})},t.prototype.removeCachedMutationKeys=function(t){delete this.documentKeysByBatchId[t]},t.prototype.performConsistencyCheck=function(t){var e=this
return this.checkEmpty(t).next(function(n){if(!n)return Wt.resolve()
var r=IDBKeyRange.lowerBound(Me.prefixForUser(e.userId)),i=[]
return Yt(t).iterate({range:r},function(t,n,r){if(t[0]===e.userId){var o=wt(t[1])
i.push(o)}else r.done()}).next(function(){_(0===i.length,"Document leak -- detected dangling mutation references when queue is empty. Dangling keys: "+i.map(function(t){return t.canonicalString()}))})})},t.prototype.containsKey=function(t,e){return Kt(t,this.userId,e)},t.prototype.getMutationQueueMetadata=function(t){var e=this
return Xt(t).get(this.userId).next(function(t){return t||new Oe(e.userId,-1,"")})},t}()
function Kt(t,e,n){var r=Me.prefixForPath(e,n.path),i=r[1],o=IDBKeyRange.lowerBound(r),a=!1
return Yt(t).iterate({range:o,keysOnly:!0},function(t,n,r){var o=s.__read(t,3),u=o[0],c=o[1]
o[2],u===e&&c===i&&(a=!0),r.done()}).next(function(){return a})}function Gt(t,e,n){var r,i,o=t.store(xe.store),a=t.store(Me.store),u=[],c=IDBKeyRange.only(n.batchId),h=0,l=o.iterate({range:c},function(t,e,n){return h++,n.delete()})
u.push(l.next(function(){_(1===h,"Dangling document-mutation reference found: Missing batch "+n.batchId)}))
var f=[]
try{for(var p=s.__values(n.mutations),d=p.next();!d.done;d=p.next()){var y=d.value,m=Me.key(e,y.key.path,n.batchId)
u.push(a.delete(m)),f.push(y.key)}}catch(t){r={error:t}}finally{try{d&&!d.done&&(i=p.return)&&i.call(p)}finally{if(r)throw r.error}}return Wt.waitFor(u).next(function(){return f})}function Ht(t){return t instanceof Uint8Array?(_("YES"===process.env.USE_MOCK_PERSISTENCE,"Persisting non-string stream tokens is only supported with mock persistence."),t.toString()):t}function zt(t){return dn.getStore(t,xe.store)}function Yt(t){return dn.getStore(t,Me.store)}function Xt(t){return dn.getStore(t,Oe.store)}var Jt,$t=1
!function(t){t[t.QueryCache=0]="QueryCache",t[t.SyncEngine=1]="SyncEngine"}(Jt||(Jt={}))
var Zt=function(){function t(t,e){this.generatorId=t,_((t&$t)===t,"Generator ID "+t+" contains more than "+$t+" reserved bits"),this.seek(void 0!==e?e:this.generatorId)}return t.prototype.next=function(){var t=this.nextId
return this.nextId+=1<<$t,t},t.prototype.after=function(t){return this.seek(t+(1<<$t)),this.next()},t.prototype.seek=function(t){_((t&$t)===this.generatorId,"Cannot supply target ID from different generator ID"),this.nextId=t},t.forQueryCache=function(){return new t(Jt.QueryCache,2)},t.forSyncEngine=function(){return new t(Jt.SyncEngine)},t}(),te="SimpleDb",ee=function(){function t(e){this.db=e,12.2===t.getIOSVersion(c.getUA())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}return t.openOrCreate=function(e,n,r){return _(t.isAvailable(),"IndexedDB not supported in current environment."),y(te,"Opening database:",e),new Wt(function(i,o){var a=window.indexedDB.open(e,n)
a.onsuccess=function(e){var n=e.target.result
i(new t(n))},a.onblocked=function(){o(new T(E.FAILED_PRECONDITION,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=function(t){var e=t.target.error
"VersionError"===e.name?o(new T(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o(e)},a.onupgradeneeded=function(t){y(te,'Database "'+e+'" requires upgrade from version:',t.oldVersion)
var n=t.target.result,i=new re(a.transaction)
r.createOrUpgrade(n,i,t.oldVersion,Ae).next(function(){y(te,"Database upgrade to version "+Ae+" complete")})}}).toPromise()},t.delete=function(t){return y(te,"Removing database:",t),oe(window.indexedDB.deleteDatabase(t)).toPromise()},t.isAvailable=function(){if("undefined"==typeof window||null==window.indexedDB)return!1
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
e(i)})},t.prototype.retrieveMetadata=function(t){return he(t.simpleDbTransaction)},t.prototype.saveMetadata=function(t,e){return(n=t,dn.getStore(n,je.store)).put(je.key,e)
var n},t.prototype.saveQueryData=function(t,e){return ce(t).put(this.serializer.toDbTarget(e))},t.prototype.updateMetadataFromQueryData=function(t,e){var n=!1
return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n},t.prototype.getQueryCount=function(t){return this.retrieveMetadata(t).next(function(t){return t.targetCount})},t.prototype.getQueryData=function(t,e){var n=this,r=e.canonicalId(),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),o=null
return ce(t).iterate({range:i,index:Ve.queryTargetsIndexName},function(t,r,i){var a=n.serializer.fromDbTarget(r)
e.isEqual(a.query)&&(o=a,i.done())}).next(function(){return o})},t.prototype.addMatchingKeys=function(t,e,n){var r=this,i=[],o=fe(t)
return e.forEach(function(e){var a=gt(e.path)
i.push(o.put(new Be(n,a))),i.push(r.referenceDelegate.addReference(t,e))}),Wt.waitFor(i)},t.prototype.removeMatchingKeys=function(t,e,n){var r=this,i=fe(t)
return Wt.forEach(e,function(e){var o=gt(e.path)
return Wt.waitFor([i.delete([n,o]),r.referenceDelegate.removeReference(t,e)])})},t.prototype.removeMatchingKeysForTargetId=function(t,e){var n=fe(t),r=IDBKeyRange.bound([e],[e+1],!1,!0)
return n.delete(r)},t.prototype.getMatchingKeysForTargetId=function(t,e){var n=IDBKeyRange.bound([e],[e+1],!1,!0),r=fe(t),i=Ut()
return r.iterate({range:n,keysOnly:!0},function(t,e,n){var r=wt(t[1]),o=new ht(r)
i=i.add(o)}).next(function(){return i})},t.prototype.containsKey=function(t,e){var n=gt(e.path),r=IDBKeyRange.bound([n],[X(n)],!1,!0),i=0
return fe(t).iterate({index:Be.documentTargetsIndex,keysOnly:!0,range:r},function(t,e,n){var r=s.__read(t,2),o=r[0]
r[1],0!==o&&(i++,n.done())}).next(function(){return i>0})},t.prototype.getQueryDataForTarget=function(t,e){var n=this
return ce(t).get(e).next(function(t){return t?n.serializer.fromDbTarget(t):null})},t}()
function ce(t){return dn.getStore(t,Ve.store)}function he(t){return ee.getStore(t,je.store).get(je.key).next(function(t){return _(null!==t,"Missing metadata row."),t})}function le(t){return he(t).next(function(t){return t.highestListenSequenceNumber})}function fe(t){return dn.getStore(t,Be.store)}var pe=function(){function t(t,e){this.key=t,this.version=e}return t.compareByKey=function(t,e){return ht.comparator(t.key,e.key)},t}(),de=function(t){function e(e,n,r,i,o){var a=t.call(this,e,n)||this
return a.data=r,a.proto=o,a.hasLocalMutations=!!i.hasLocalMutations,a.hasCommittedMutations=!!i.hasCommittedMutations,a}return s.__extends(e,t),e.prototype.field=function(t){return this.data.field(t)},e.prototype.fieldValue=function(t){var e=this.field(t)
return e?e.value():void 0},e.prototype.value=function(){return this.data.value()},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.data.isEqual(t.data)&&this.hasLocalMutations===t.hasLocalMutations&&this.hasCommittedMutations===t.hasCommittedMutations},e.prototype.toString=function(){return"Document("+this.key+", "+this.version+", "+this.data.toString()+", {hasLocalMutations: "+this.hasLocalMutations+"}), {hasCommittedMutations: "+this.hasCommittedMutations+"})"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return this.hasLocalMutations||this.hasCommittedMutations},enumerable:!0,configurable:!0}),e.compareByField=function(t,e,n){var r=e.field(t),i=n.field(t)
return null!==r&&null!==i?r.compareTo(i):g("Trying to compare documents on fields that don't exist")},e}(pe),ye=function(t){function e(e,n,r){var i=t.call(this,e,n)||this
return i.hasCommittedMutations=!(!r||!r.hasCommittedMutations),i}return s.__extends(e,t),e.prototype.toString=function(){return"NoDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return this.hasCommittedMutations},enumerable:!0,configurable:!0}),e.prototype.isEqual=function(t){return t instanceof e&&t.hasCommittedMutations===this.hasCommittedMutations&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},e}(pe),me=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.toString=function(){return"UnknownDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return!0},enumerable:!0,configurable:!0}),e.prototype.isEqual=function(t){return t instanceof e&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},e}(pe),ve=function(){function t(t){this.mapKeyFn=t,this.inner={}}return t.prototype.get=function(t){var e,n,r=this.mapKeyFn(t),i=this.inner[r]
if(void 0!==i)try{for(var o=s.__values(i),a=o.next();!a.done;a=o.next()){var u=s.__read(a.value,2),c=u[0],h=u[1]
if(c.isEqual(t))return h}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}},t.prototype.has=function(t){return void 0!==this.get(t)},t.prototype.set=function(t,e){var n=this.mapKeyFn(t),r=this.inner[n]
if(void 0!==r){for(var i=0;i<r.length;i++)if(r[i][0].isEqual(t))return void(r[i]=[t,e])
r.push([t,e])}else this.inner[n]=[[t,e]]},t.prototype.delete=function(t){var e=this.mapKeyFn(t),n=this.inner[e]
if(void 0===n)return!1
for(var r=0;r<n.length;r++)if(n[r][0].isEqual(t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0
return!1},t.prototype.forEach=function(t){k(this.inner,function(e,n){var r,i
try{for(var o=s.__values(n),a=o.next();!a.done;a=o.next()){var u=s.__read(a.value,2),c=u[0],h=u[1]
t(c,h)}}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}})},t.prototype.isEmpty=function(){return A(this.inner)},t}(),ge=function(){function t(){this.changes=Rt(),this.documentSizes=new ve(function(t){return t.toString()})}return t.prototype.addEntry=function(t){var e=this.assertChanges()
this.changes=e.insert(t.key,t)},t.prototype.getEntry=function(t,e){var n=this,r=this.assertChanges().get(e)
return r?Wt.resolve(r):this.getFromCache(t,e).next(function(t){return null===t?(n.documentSizes.set(e,0),null):(n.documentSizes.set(e,t.size),t.maybeDocument)})},t.prototype.getEntries=function(t,e){var n=this
return this.getAllFromCache(t,e).next(function(t){var e=t.maybeDocuments
return t.sizeMap.forEach(function(t,e){n.documentSizes.set(t,e)}),e})},t.prototype.apply=function(t){var e=this.applyChanges(t)
return this.changes=null,e},t.prototype.assertChanges=function(){return _(null!==this.changes,"Changes have already been applied."),this.changes},t}(),_e="The remote document changelog no longer contains all changes for all local query views. It may be necessary to rebuild these views.",be=function(){function t(t,e,n){this.serializer=t,this.indexManager=e,this.keepDocumentChangeLog=n,this._lastProcessedDocumentChangeId=0}return Object.defineProperty(t.prototype,"lastProcessedDocumentChangeId",{get:function(){return this._lastProcessedDocumentChangeId},enumerable:!0,configurable:!0}),t.prototype.start=function(t){var e=ee.getStore(t,Ge.store)
return this.synchronizeLastDocumentChangeId(e)},t.prototype.addEntries=function(t,e,n){var r,i,o=[]
if(e.length>0){var a=Te(t),u=Ut()
try{for(var c=s.__values(e),h=c.next();!h.done;h=c.next()){var l=h.value,f=l.key,p=l.doc
o.push(a.put(Ie(f),p)),u=u.add(f),o.push(this.indexManager.addToCollectionParentIndex(t,f.path.popLast()))}}catch(t){r={error:t}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}this.keepDocumentChangeLog&&o.push(Se(t).put({changes:this.serializer.toDbResourcePaths(u)})),o.push(this.updateSize(t,n))}return Wt.waitFor(o)},t.prototype.removeEntry=function(t,e){var n=Te(t),r=Ie(e)
return n.get(r).next(function(t){return t?n.delete(r).next(function(){return Ce(t)}):Wt.resolve(0)})},t.prototype.getEntry=function(t,e){var n=this
return Te(t).get(Ie(e)).next(function(t){return t?n.serializer.fromDbRemoteDocument(t):null})},t.prototype.getSizedEntry=function(t,e){var n=this
return Te(t).get(Ie(e)).next(function(t){return t?{maybeDocument:n.serializer.fromDbRemoteDocument(t),size:Ce(t)}:null})},t.prototype.getEntries=function(t,e){var n=this,r=Pt()
return this.forEachDbEntry(t,e,function(t,e){r=e?r.insert(t,n.serializer.fromDbRemoteDocument(e)):r.insert(t,null)}).next(function(){return r})},t.prototype.getSizedEntries=function(t,e){var n=this,r=Pt(),i=new St(ht.comparator)
return this.forEachDbEntry(t,e,function(t,e){e?(r=r.insert(t,n.serializer.fromDbRemoteDocument(e)),i=i.insert(t,Ce(e))):(r=r.insert(t,null),i=i.insert(t,0))}).next(function(){return{maybeDocuments:r,sizeMap:i}})},t.prototype.forEachDbEntry=function(t,e,n){if(e.isEmpty())return Wt.resolve()
var r=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),i=e.getIterator(),o=i.getNext()
return Te(t).iterate({range:r},function(t,e,r){for(var a=ht.fromSegments(t);o&&ht.comparator(o,a)<0;)n(o,null),o=i.getNext()
o&&o.isEqual(a)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?r.skip(o.path.toArray()):r.done()}).next(function(){for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})},t.prototype.getDocumentsMatchingQuery=function(t,e){var n=this
_(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
var r=xt(),i=e.path.length+1,o=e.path.toArray(),a=IDBKeyRange.lowerBound(o)
return Te(t).iterate({range:a},function(t,o,a){if(t.length===i){var s=n.serializer.fromDbRemoteDocument(o)
e.path.isPrefixOf(s.key.path)?s instanceof de&&e.matches(s)&&(r=r.insert(s.key,s)):a.done()}}).next(function(){return r})},t.prototype.getNewDocumentChanges=function(t){var e=this
_(this.keepDocumentChangeLog,"Can only call getNewDocumentChanges() when document change log is enabled")
var n=Ut(),r=Rt(),i=IDBKeyRange.lowerBound(this._lastProcessedDocumentChangeId+1),o=!0,a=Se(t)
return a.iterate({range:i},function(t,r){if(o&&(o=!1,e._lastProcessedDocumentChangeId+1!==r.id))return e.synchronizeLastDocumentChangeId(a).next(function(){return Wt.reject(new T(E.DATA_LOSS,_e))})
n=n.unionWith(e.serializer.fromDbResourcePaths(r.changes)),e._lastProcessedDocumentChangeId=r.id}).next(function(){var i=[]
return n.forEach(function(n){i.push(e.getEntry(t,n).next(function(t){var e=t||new ye(n,Tt.forDeletedDoc())
r=r.insert(n,e)}))}),Wt.waitFor(i)}).next(function(){return r})},t.prototype.removeDocumentChangesThroughChangeId=function(t,e){var n=IDBKeyRange.upperBound(e)
return Se(t).delete(n)},t.prototype.synchronizeLastDocumentChangeId=function(t){var e=this
return this._lastProcessedDocumentChangeId=0,t.iterate({keysOnly:!0,reverse:!0},function(t,n,r){e._lastProcessedDocumentChangeId=t,r.done()})},t.prototype.newChangeBuffer=function(){return new Ee(this)},t.prototype.getSize=function(t){return this.getMetadata(t).next(function(t){return t.byteSize})},t.prototype.getMetadata=function(t){return we(t).get(qe.key).next(function(t){return _(!!t,"Missing document cache metadata"),t})},t.prototype.setMetadata=function(t,e){return we(t).put(qe.key,e)},t.prototype.updateSize=function(t,e){var n=this
return this.getMetadata(t).next(function(r){return r.byteSize+=e,n.setMetadata(t,r)})},t}()
function we(t){return dn.getStore(t,qe.store)}var Ee=function(t){function e(e){var n=t.call(this)||this
return n.documentCache=e,n}return s.__extends(e,t),e.prototype.applyChanges=function(t){var e=this,n=this.assertChanges(),r=0,i=[]
return n.forEach(function(t,n){var o=e.documentCache.serializer.toDbRemoteDocument(n),a=e.documentSizes.get(t)
_(void 0!==a,"Attempting to change document "+t.toString()+" without having read it first")
var s=Ce(o)
r+=s-a,i.push({key:t,doc:o})}),this.documentCache.addEntries(t,i,r)},e.prototype.getFromCache=function(t,e){return this.documentCache.getSizedEntry(t,e)},e.prototype.getAllFromCache=function(t,e){return this.documentCache.getSizedEntries(t,e)},e}(ge)
function Te(t){return dn.getStore(t,Ue.store)}function Se(t){return dn.getStore(t,Ge.store)}function Ie(t){return t.path.toArray()}function Ce(t){var e
if(t.document)e=t.document
else if(t.unknownDocument)e=t.unknownDocument
else{if(!t.noDocument)throw g("Unknown remote document type")
e=t.noDocument}return JSON.stringify(e).length}var Ne=function(){function t(){this.collectionParentIndex=new ke}return t.prototype.addToCollectionParentIndex=function(t,e){return this.collectionParentIndex.add(e),Wt.resolve()},t.prototype.getCollectionParents=function(t,e){return Wt.resolve(this.collectionParentIndex.getEntries(e))},t}(),ke=function(){function t(){this.index={}}return t.prototype.add=function(t){_(t.length%2==1,"Expected a collection path.")
var e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new kt(st.comparator),i=!r.has(n)
return this.index[e]=r.add(n),i},t.prototype.getEntries=function(t){return(this.index[t]||new kt(st.comparator)).toArray()},t}(),Ae=8,De=function(){function t(t){this.serializer=t}return t.prototype.createOrUpgrade=function(t,e,n,r){var i=this
_(n<r&&n>=0&&r<=Ae,"Unexpected schema upgrade from v"+n+" to v{toVersion}."),n<1&&r>=1&&(function(t){t.createObjectStore(Pe.store)}(t),function(t){t.createObjectStore(Oe.store,{keyPath:Oe.keyPath}),t.createObjectStore(xe.store,{keyPath:xe.keyPath,autoIncrement:!0}).createIndex(xe.userMutationsIndex,xe.userMutationsKeyPath,{unique:!0}),t.createObjectStore(Me.store)}(t),Qe(t),function(t){t.createObjectStore(Ue.store)}(t))
var o=Wt.resolve()
return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(Be.store),t.deleteObjectStore(Ve.store),t.deleteObjectStore(je.store)}(t),Qe(t)),o=o.next(function(){return function(t){var e=t.store(je.store),n=new je(0,0,Tt.MIN.toTimestamp(),0)
return e.put(je.key,n)}(e)})),n<4&&r>=4&&(0!==n&&(o=o.next(function(){return function(t,e){return e.store(xe.store).loadAll().next(function(n){t.deleteObjectStore(xe.store),t.createObjectStore(xe.store,{keyPath:xe.keyPath,autoIncrement:!0}).createIndex(xe.userMutationsIndex,xe.userMutationsKeyPath,{unique:!0})
var r=e.store(xe.store),i=n.map(function(t){return r.put(t)})
return Wt.waitFor(i)})}(t,e)})),o=o.next(function(){!function(t){t.createObjectStore(He.store,{keyPath:He.keyPath})}(t),function(t){t.createObjectStore(Ge.store,{keyPath:"id",autoIncrement:!0})}(t)})),n<5&&r>=5&&(o=o.next(function(){return i.removeAcknowledgedMutations(e)})),n<6&&r>=6&&(o=o.next(function(){return function(t){t.createObjectStore(qe.store)}(t),i.addDocumentGlobal(e)})),n<7&&r>=7&&(o=o.next(function(){return i.ensureSequenceNumbers(e)})),n<8&&r>=8&&(o=o.next(function(){return i.createCollectionParentIndex(t,e)})),o},t.prototype.addDocumentGlobal=function(t){var e=0
return t.store(Ue.store).iterate(function(t,n){e+=Ce(n)}).next(function(){var n=new qe(e)
return t.store(qe.store).put(qe.key,n)})},t.prototype.removeAcknowledgedMutations=function(t){var e=this,n=t.store(Oe.store),r=t.store(xe.store)
return n.loadAll().next(function(n){return Wt.forEach(n,function(n){var i=IDBKeyRange.bound([n.userId,-1],[n.userId,n.lastAcknowledgedBatchId])
return r.loadAll(xe.userMutationsIndex,i).next(function(r){return Wt.forEach(r,function(r){_(r.userId===n.userId,"Cannot process batch "+r.batchId+" from unexpected user")
var i=e.serializer.fromDbMutationBatch(r)
return Gt(t,n.userId,i).next(function(){})})})})})},t.prototype.ensureSequenceNumbers=function(t){var e=t.store(Be.store),n=t.store(Ue.store)
return le(t).next(function(t){var r=[]
return n.iterate(function(n,i){var o=new st(n),a=[0,gt(o)]
r.push(e.get(a).next(function(n){return n?Wt.resolve():function(n){return e.put(new Be(0,gt(n),t))}(o)}))}).next(function(){return Wt.waitFor(r)})})},t.prototype.createCollectionParentIndex=function(t,e){t.createObjectStore(We.store,{keyPath:We.keyPath})
var n=e.store(We.store),r=new ke,i=function(t){if(r.add(t)){var e=t.lastSegment(),i=t.popLast()
return n.put({collectionId:e,parent:gt(i)})}}
return e.store(Ue.store).iterate({keysOnly:!0},function(t,e){var n=new st(t)
return i(n.popLast())}).next(function(){return e.store(Me.store).iterate({keysOnly:!0},function(t,e){var n=s.__read(t,3),r=(n[0],n[1]),o=(n[2],wt(r))
return i(o.popLast())})})},t}(),Re=function(t,e){this.seconds=t,this.nanoseconds=e},Pe=function(){function t(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}return t.store="owner",t.key="owner",t}(),Oe=function(){function t(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}return t.store="mutationQueues",t.keyPath="userId",t}(),xe=function(){function t(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}return t.store="mutations",t.keyPath="batchId",t.userMutationsIndex="userMutationsIndex",t.userMutationsKeyPath=["userId","batchId"],t}(),Me=function(){function t(){}return t.prefixForUser=function(t){return[t]},t.prefixForPath=function(t,e){return[t,gt(e)]},t.key=function(t,e,n){return[t,gt(e),n]},t.store="documentMutations",t.PLACEHOLDER=new t,t}(),Le=function(t,e){this.path=t,this.readTime=e},Fe=function(t,e){this.path=t,this.version=e},Ue=function(){function t(t,e,n,r){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r}return t.store="remoteDocuments",t}(),qe=function(){function t(t){this.byteSize=t}return t.store="remoteDocumentGlobal",t.key="remoteDocumentGlobalKey",t}(),Ve=function(){function t(t,e,n,r,i,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.query=o}return t.store="targets",t.keyPath="targetId",t.queryTargetsIndexName="queryTargetsIndex",t.queryTargetsKeyPath=["canonicalId","targetId"],t}(),Be=function(){function t(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n,_(0===t==(void 0!==n),"A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number")}return t.store="targetDocuments",t.keyPath=["targetId","path"],t.documentTargetsIndex="documentTargetsIndex",t.documentTargetsKeyPath=["path","targetId"],t}(),je=function(){function t(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}return t.key="targetGlobalKey",t.store="targetGlobal",t}(),We=function(){function t(t,e){this.collectionId=t,this.parent=e}return t.store="collectionParents",t.keyPath=["collectionId","parent"],t}()
function Qe(t){t.createObjectStore(Be.store,{keyPath:Be.keyPath}).createIndex(Be.documentTargetsIndex,Be.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Ve.store,{keyPath:Ve.keyPath}).createIndex(Ve.queryTargetsIndexName,Ve.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(je.store)}var Ke,Ge=function(){function t(t){this.changes=t}return t.store="remoteDocumentChanges",t.keyPath="id",t}(),He=function(){function t(t,e,n,r,i){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r,this.lastProcessedDocumentChangeId=i}return t.store="clientMetadata",t.keyPath="clientId",t}(),ze=[Oe.store,xe.store,Me.store,Ue.store,Ve.store,Pe.store,je.store,Be.store],Ye=s.__spread(ze,[He.store,Ge.store]),Xe=s.__spread(Ye,[qe.store]),Je=s.__spread(Xe,[We.store]),$e=function(){function t(){this.collectionParentsCache=new ke}return t.prototype.addToCollectionParentIndex=function(t,e){if(_(e.length%2==1,"Expected a collection path."),this.collectionParentsCache.add(e)){_(e.length>=1,"Invalid collection path.")
var n=e.lastSegment(),r=e.popLast()
return Ze(t).put({collectionId:n,parent:gt(r)})}return Wt.resolve()},t.prototype.getCollectionParents=function(t,e){var n=[],r=IDBKeyRange.bound([e,""],[X(e),""],!1,!0)
return Ze(t).loadAll(r).next(function(t){var r,i
try{for(var o=s.__values(t),a=o.next();!a.done;a=o.next()){var u=a.value
if(u.collectionId!==e)break
n.push(wt(u.parent))}}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return n})},t}()
function Ze(t){return dn.getStore(t,We.store)}!function(t){t[t.Listen=0]="Listen",t[t.ExistenceFilterMismatch=1]="ExistenceFilterMismatch",t[t.LimboResolution=2]="LimboResolution"}(Ke||(Ke={}))
var tn=function(){function t(t,e,n,r,i,o){void 0===i&&(i=Tt.MIN),void 0===o&&(o=w()),this.query=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.resumeToken=o}return t.prototype.copy=function(e){return new t(this.query,this.targetId,this.purpose,void 0===e.sequenceNumber?this.sequenceNumber:e.sequenceNumber,void 0===e.snapshotVersion?this.snapshotVersion:e.snapshotVersion,void 0===e.resumeToken?this.resumeToken:e.resumeToken)},t.prototype.isEqual=function(t){return this.targetId===t.targetId&&this.purpose===t.purpose&&this.sequenceNumber===t.sequenceNumber&&this.snapshotVersion.isEqual(t.snapshotVersion)&&this.resumeToken===t.resumeToken&&this.query.isEqual(t.query)},t}(),en=function(){function t(t){this.remoteSerializer=t}return t.prototype.fromDbRemoteDocument=function(t){if(t.document)return this.remoteSerializer.fromDocument(t.document,!!t.hasCommittedMutations)
if(t.noDocument){var e=ht.fromSegments(t.noDocument.path),n=this.fromDbTimestamp(t.noDocument.readTime)
return new ye(e,n,{hasCommittedMutations:!!t.hasCommittedMutations})}return t.unknownDocument?(e=ht.fromSegments(t.unknownDocument.path),n=this.fromDbTimestamp(t.unknownDocument.version),new me(e,n)):g("Unexpected DbRemoteDocument")},t.prototype.toDbRemoteDocument=function(t){if(t instanceof de){var e=t.proto?t.proto:this.remoteSerializer.toDocument(t),n=t.hasCommittedMutations
return new Ue(null,null,e,n)}if(t instanceof ye){var r=t.key.path.toArray(),i=this.toDbTimestamp(t.version)
return n=t.hasCommittedMutations,new Ue(null,new Le(r,i),null,n)}return t instanceof me?(r=t.key.path.toArray(),i=this.toDbTimestamp(t.version),new Ue(new Fe(r,i),null,null,!0)):g("Unexpected MaybeDocumment")},t.prototype.toDbTimestamp=function(t){var e=t.toTimestamp()
return new Re(e.seconds,e.nanoseconds)},t.prototype.fromDbTimestamp=function(t){var e=new Et(t.seconds,t.nanoseconds)
return Tt.fromTimestamp(e)},t.prototype.toDbMutationBatch=function(t,e){var n=this,r=e.baseMutations.map(function(t){return n.remoteSerializer.toMutation(t)}),i=e.mutations.map(function(t){return n.remoteSerializer.toMutation(t)})
return new xe(t,e.batchId,e.localWriteTime.toMillis(),r,i)},t.prototype.fromDbMutationBatch=function(t){var e=this,n=(t.baseMutations||[]).map(function(t){return e.remoteSerializer.fromMutation(t)}),r=t.mutations.map(function(t){return e.remoteSerializer.fromMutation(t)}),i=Et.fromMillis(t.localWriteTimeMs)
return new Bt(t.batchId,i,n,r)},t.prototype.toDbResourcePaths=function(t){var e=[]
return t.forEach(function(t){e.push(gt(t.path))}),e},t.prototype.fromDbResourcePaths=function(t){var e,n,r=Ut()
try{for(var i=s.__values(t),o=i.next();!o.done;o=i.next()){var a=o.value
r=r.add(new ht(wt(a)))}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r},t.prototype.fromDbTarget=function(t){var e,n=this.fromDbTimestamp(t.readTime)
return e=void 0!==t.query.documents?this.remoteSerializer.fromDocumentsTarget(t.query):this.remoteSerializer.fromQueryTarget(t.query),new tn(e,t.targetId,Ke.Listen,t.lastListenSequenceNumber,n,t.resumeToken)},t.prototype.toDbTarget=function(t){_(Ke.Listen===t.purpose,"Only queries with purpose "+Ke.Listen+" may be stored, got "+t.purpose)
var e,n,r=this.toDbTimestamp(t.snapshotVersion)
return e=t.query.isDocumentQuery()?this.remoteSerializer.toDocumentsTarget(t.query):this.remoteSerializer.toQueryTarget(t.query),t.resumeToken instanceof Uint8Array?(_("YES"===process.env.USE_MOCK_PERSISTENCE,"Persisting non-string stream tokens is only supported with mock persistence ."),n=t.resumeToken.toString()):n=t.resumeToken,new Ve(t.targetId,t.query.canonicalId(),r,n,t.sequenceNumber,e)},t}()
function nn(t,e){var n=s.__read(t,2),r=n[0],i=n[1],o=s.__read(e,2),a=o[0],u=o[1],c=z(r,a)
return 0===c?z(i,u):c}var rn=function(){function t(t){this.maxElements=t,this.buffer=new kt(nn),this.previousIndex=0}return t.prototype.nextIndex=function(){return++this.previousIndex},t.prototype.addElement=function(t){var e=[t,this.nextIndex()]
if(this.buffer.size<this.maxElements)this.buffer=this.buffer.add(e)
else{var n=this.buffer.last()
nn(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}},Object.defineProperty(t.prototype,"maxValue",{get:function(){return this.buffer.last()[0]},enumerable:!0,configurable:!0}),t}(),on={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},an=function(){function t(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}return t.withCacheSize=function(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)},t.COLLECTION_DISABLED=-1,t.MINIMUM_CACHE_SIZE_BYTES=1048576,t.DEFAULT_CACHE_SIZE_BYTES=41943040,t.DEFAULT_COLLECTION_PERCENTILE=10,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,t.DEFAULT=new t(t.DEFAULT_CACHE_SIZE_BYTES,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),t.DISABLED=new t(t.COLLECTION_DISABLED,0,0),t}(),sn=function(){function t(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.gcTask=null}return t.prototype.start=function(){_(null===this.gcTask,"Cannot start an already started LruScheduler"),this.garbageCollector.params.cacheSizeCollectionThreshold!==an.COLLECTION_DISABLED&&this.scheduleGC()},t.prototype.stop=function(){this.gcTask&&(this.gcTask.cancel(),this.gcTask=null)},Object.defineProperty(t.prototype,"started",{get:function(){return null!==this.gcTask},enumerable:!0,configurable:!0}),t.prototype.scheduleGC=function(){var t=this
_(null===this.gcTask,"Cannot schedule GC while a task is pending")
var e=this.hasRun?3e5:6e4
y("LruGarbageCollector","Garbage collection scheduled in "+e+"ms"),this.gcTask=this.asyncQueue.enqueueAfterDelay(Z.LruGarbageCollection,e,function(){return t.gcTask=null,t.hasRun=!0,t.localStore.collectGarbage(t.garbageCollector).then(function(){return t.scheduleGC()}).catch(yn)})},t}(),un=function(){function t(t,e){this.delegate=t,this.params=e}return t.prototype.calculateTargetCount=function(t,e){return this.delegate.getSequenceNumberCount(t).next(function(t){return Math.floor(e/100*t)})},t.prototype.nthSequenceNumber=function(t,e){var n=this
if(0===e)return Wt.resolve(ot.INVALID)
var r=new rn(e)
return this.delegate.forEachTarget(t,function(t){return r.addElement(t.sequenceNumber)}).next(function(){return n.delegate.forEachOrphanedDocumentSequenceNumber(t,function(t){return r.addElement(t)})}).next(function(){return r.maxValue})},t.prototype.removeTargets=function(t,e,n){return this.delegate.removeTargets(t,e,n)},t.prototype.removeOrphanedDocuments=function(t,e){return this.delegate.removeOrphanedDocuments(t,e)},t.prototype.collect=function(t,e){var n=this
return this.params.cacheSizeCollectionThreshold===an.COLLECTION_DISABLED?(y("LruGarbageCollector","Garbage collection skipped; disabled"),Wt.resolve(on)):this.getCacheSize(t).next(function(r){return r<n.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector","Garbage collection skipped; Cache size "+r+" is lower than threshold "+n.params.cacheSizeCollectionThreshold),on):n.runGarbageCollection(t,e)})},t.prototype.getCacheSize=function(t){return this.delegate.getCacheSize(t)},t.prototype.runGarbageCollection=function(t,e){var n,r,i,a,s,u,c,h=this,l=Date.now()
return this.calculateTargetCount(t,this.params.percentileToCollect).next(function(e){return e>h.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of "+h.params.maximumSequenceNumbersToCollect+" from "+e),r=h.params.maximumSequenceNumbersToCollect):r=e,a=Date.now(),h.nthSequenceNumber(t,r)}).next(function(r){return n=r,s=Date.now(),h.removeTargets(t,n,e)}).next(function(e){return i=e,u=Date.now(),h.removeOrphanedDocuments(t,n)}).next(function(t){return c=Date.now(),p()<=o.DEBUG&&y("LruGarbageCollector","LRU Garbage Collection\n\tCounted targets in "+(a-l)+"ms\n\tDetermined least recently used "+r+" in "+(s-a)+"ms\n\tRemoved "+i+" targets in "+(u-s)+"ms\n\tRemoved "+t+" documents in "+(c-u)+"ms\nTotal Duration: "+(c-l)+"ms"),Wt.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})})},t}(),cn="IndexedDbPersistence",hn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ln="Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",fn="This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.",pn=function(t){function e(e,n){var r=t.call(this)||this
return r.simpleDbTransaction=e,r.currentSequenceNumber=n,r}return s.__extends(e,t),e}(function(){}),dn=function(){function t(e,n,r,i,o,a,s){if(this.persistenceKey=e,this.clientId=n,this.queue=i,this.multiClientParams=s,this._started=!1,this.isPrimary=!1,this.networkEnabled=!0,this.inForeground=!1,this.lastGarbageCollectionTime=Number.NEGATIVE_INFINITY,this.primaryStateListener=function(t){return Promise.resolve()},!t.isAvailable())throw new T(E.UNIMPLEMENTED,fn)
if(this.referenceDelegate=new bn(this,a),this.dbName=e+t.MAIN_DATABASE,this.serializer=new en(o),this.document=r.document,this.allowTabSynchronization=void 0!==s,this.queryCache=new ue(this.referenceDelegate,this.serializer),this.indexManager=new $e,this.remoteDocumentCache=new be(this.serializer,this.indexManager,this.allowTabSynchronization),!r.window||!r.window.localStorage)throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.")
this.window=r.window,this.webStorage=this.window.localStorage}return t.getStore=function(t,e){if(t instanceof pn)return ee.getStore(t.simpleDbTransaction,e)
throw g("IndexedDbPersistence must use instances of IndexedDbTransaction")},t.createIndexedDbPersistence=function(e,n,r,i,o,a){return s.__awaiter(this,void 0,void 0,function(){var u
return s.__generator(this,function(s){switch(s.label){case 0:return[4,(u=new t(e,n,r,i,o,a)).start()]
case 1:return s.sent(),[2,u]}})})},t.createMultiClientIndexedDbPersistence=function(e,n,r,i,o,a,u){return s.__awaiter(this,void 0,void 0,function(){var c
return s.__generator(this,function(s){switch(s.label){case 0:return[4,(c=new t(e,n,r,i,o,a,u)).start()]
case 1:return s.sent(),[2,c]}})})},t.prototype.start=function(){var t=this
return _(!this.started,"IndexedDbPersistence double-started!"),_(null!==this.window,"Expected 'window' to be defined"),ee.openOrCreate(this.dbName,Ae,new De(this.serializer)).then(function(e){return t.simpleDb=e,t.updateClientMetadataAndTryBecomePrimary()}).then(function(){return t.attachVisibilityHandler(),t.attachWindowUnloadHook(),t.scheduleClientMetadataAndPrimaryLeaseRefreshes(),t.startRemoteDocumentCache()}).then(function(){return t.simpleDb.runTransaction("readonly",[je.store],function(e){return le(e).next(function(e){var n=t.multiClientParams?t.multiClientParams.sequenceNumberSyncer:void 0
t.listenSequence=new ot(e,n)})})}).then(function(){t._started=!0}).catch(function(e){return t.simpleDb&&t.simpleDb.close(),Promise.reject(e)})},t.prototype.startRemoteDocumentCache=function(){var t=this
return this.simpleDb.runTransaction("readonly",Je,function(e){return t.remoteDocumentCache.start(e)})},t.prototype.setPrimaryStateListener=function(t){var e=this
return this.primaryStateListener=function(n){return s.__awaiter(e,void 0,void 0,function(){return s.__generator(this,function(e){return this.started?[2,t(n)]:[2]})})},t(this.isPrimary)},t.prototype.setDatabaseDeletedListener=function(t){var e=this
this.simpleDb.setVersionChangeListener(function(n){return s.__awaiter(e,void 0,void 0,function(){return s.__generator(this,function(e){switch(e.label){case 0:return null!==n.newVersion?[3,2]:[4,t()]
case 1:e.sent(),e.label=2
case 2:return[2]}})})})},t.prototype.setNetworkEnabled=function(t){var e=this
this.networkEnabled!==t&&(this.networkEnabled=t,this.queue.enqueueAndForget(function(){return s.__awaiter(e,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.started?[4,this.updateClientMetadataAndTryBecomePrimary()]:[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})}))},t.prototype.updateClientMetadataAndTryBecomePrimary=function(){var t=this
return this.simpleDb.runTransaction("readwrite",Je,function(e){return vn(e).put(new He(t.clientId,Date.now(),t.networkEnabled,t.inForeground,t.remoteDocumentCache.lastProcessedDocumentChangeId)).next(function(){if(t.isPrimary)return t.verifyPrimaryLease(e).next(function(e){e||(t.isPrimary=!1,t.queue.enqueueAndForget(function(){return t.primaryStateListener(!1)}))})}).next(function(){return t.canActAsPrimary(e)}).next(function(n){var r=t.isPrimary
return t.isPrimary=n,r!==t.isPrimary&&t.queue.enqueueAndForget(function(){return t.primaryStateListener(t.isPrimary)}),r&&!t.isPrimary?t.releasePrimaryLeaseIfHeld(e):t.isPrimary?t.acquireOrExtendPrimaryLease(e):void 0})})},t.prototype.verifyPrimaryLease=function(t){var e=this
return mn(t).get(Pe.key).next(function(t){return Wt.resolve(e.isLocalClient(t))})},t.prototype.removeClientMetadata=function(t){return vn(t).delete(this.clientId)},t.prototype.maybeGarbageCollectMultiClientState=function(){return s.__awaiter(this,void 0,void 0,function(){var e,n,r=this
return s.__generator(this,function(i){switch(i.label){case 0:return!this.isPrimary||this.isWithinAge(this.lastGarbageCollectionTime,18e5)?[3,2]:(this.lastGarbageCollectionTime=Date.now(),n=[],[4,this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",function(i){var o=t.getStore(i,He.store)
return o.loadAll().next(function(t){e=r.filterActiveClients(t,18e5),n=t.filter(function(t){return-1===e.indexOf(t)})}).next(function(){return Wt.forEach(n,function(t){return o.delete(t.clientId)})}).next(function(){if((e=e.filter(function(t){return t.clientId!==r.clientId})).length>0){var t=e.map(function(t){return t.lastProcessedDocumentChangeId||0}),n=Math.min.apply(Math,s.__spread(t))
return r.remoteDocumentCache.removeDocumentChangesThroughChangeId(i,n)}})})])
case 1:i.sent(),n.forEach(function(t){r.window.localStorage.removeItem(r.zombiedClientLocalStorageKey(t.clientId))}),i.label=2
case 2:return[2]}})})},t.prototype.scheduleClientMetadataAndPrimaryLeaseRefreshes=function(){var t=this
this.clientMetadataRefresher=this.queue.enqueueAfterDelay(Z.ClientMetadataRefresh,4e3,function(){return t.updateClientMetadataAndTryBecomePrimary().then(function(){return t.maybeGarbageCollectMultiClientState()}).then(function(){return t.scheduleClientMetadataAndPrimaryLeaseRefreshes()})})},t.prototype.isLocalClient=function(t){return!!t&&t.ownerId===this.clientId},t.prototype.canActAsPrimary=function(t){var e=this
return mn(t).get(Pe.key).next(function(n){if(null!==n&&e.isWithinAge(n.leaseTimestampMs,5e3)&&!e.isClientZombied(n.ownerId)){if(e.isLocalClient(n)&&e.networkEnabled)return!0
if(!e.isLocalClient(n)){if(!n.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,ln)
return!1}}return!(!e.networkEnabled||!e.inForeground)||vn(t).loadAll().next(function(t){return void 0===e.filterActiveClients(t,5e3).find(function(t){if(e.clientId!==t.clientId){var n=!e.networkEnabled&&t.networkEnabled,r=!e.inForeground&&t.inForeground,i=e.networkEnabled===t.networkEnabled
if(n||r&&i)return!0}return!1})})}).next(function(t){return e.isPrimary!==t&&y(cn,"Client "+(t?"is":"is not")+" eligible for a primary lease."),t})},t.prototype.shutdown=function(){return s.__awaiter(this,void 0,void 0,function(){var t=this
return s.__generator(this,function(e){switch(e.label){case 0:return this._started=!1,this.markClientZombied(),this.clientMetadataRefresher&&this.clientMetadataRefresher.cancel(),this.detachVisibilityHandler(),this.detachWindowUnloadHook(),[4,this.simpleDb.runTransaction("readwrite",[Pe.store,He.store],function(e){return t.releasePrimaryLeaseIfHeld(e).next(function(){return t.removeClientMetadata(e)})})]
case 1:return e.sent(),this.simpleDb.close(),this.removeClientZombiedEntry(),[2]}})})},t.prototype.filterActiveClients=function(t,e){var n=this
return t.filter(function(t){return n.isWithinAge(t.updateTimeMs,e)&&!n.isClientZombied(t.clientId)})},t.prototype.getActiveClients=function(){var t=this
return this.simpleDb.runTransaction("readonly",[He.store],function(e){return vn(e).loadAll().next(function(e){return t.filterActiveClients(e,18e5).map(function(t){return t.clientId})})})},t.clearPersistence=function(e){return s.__awaiter(this,void 0,void 0,function(){var n
return s.__generator(this,function(r){switch(r.label){case 0:return t.isAvailable()?(n=e+t.MAIN_DATABASE,[4,ee.delete(n)]):[2,Promise.resolve()]
case 1:return r.sent(),[2]}})})},Object.defineProperty(t.prototype,"started",{get:function(){return this._started},enumerable:!0,configurable:!0}),t.prototype.getMutationQueue=function(t){return _(this.started,"Cannot initialize MutationQueue before persistence is started."),Qt.forUser(t,this.serializer,this.indexManager,this.referenceDelegate)},t.prototype.getQueryCache=function(){return _(this.started,"Cannot initialize QueryCache before persistence is started."),this.queryCache},t.prototype.getRemoteDocumentCache=function(){return _(this.started,"Cannot initialize RemoteDocumentCache before persistence is started."),this.remoteDocumentCache},t.prototype.getIndexManager=function(){return _(this.started,"Cannot initialize IndexManager before persistence is started."),this.indexManager},t.prototype.runTransaction=function(t,e,n){var r=this
return y(cn,"Starting transaction:",t),this.simpleDb.runTransaction("readonly"===e?"readonly":"readwrite",Je,function(i){return"readwrite-primary"===e?r.verifyPrimaryLease(i).next(function(e){if(!e)throw m("Failed to obtain primary lease for action '"+t+"'."),r.isPrimary=!1,r.queue.enqueueAndForget(function(){return r.primaryStateListener(!1)}),new T(E.FAILED_PRECONDITION,hn)
return n(new pn(i,r.listenSequence.next()))}).next(function(t){return r.acquireOrExtendPrimaryLease(i).next(function(){return t})}):r.verifyAllowTabSynchronization(i).next(function(){return n(new pn(i,r.listenSequence.next()))})})},t.prototype.verifyAllowTabSynchronization=function(t){var e=this
return mn(t).get(Pe.key).next(function(t){if(null!==t&&e.isWithinAge(t.leaseTimestampMs,5e3)&&!e.isClientZombied(t.ownerId)&&!e.isLocalClient(t)&&!t.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,ln)})},t.prototype.acquireOrExtendPrimaryLease=function(t){var e=new Pe(this.clientId,this.allowTabSynchronization,Date.now())
return mn(t).put(Pe.key,e)},t.isAvailable=function(){return ee.isAvailable()},t.buildStoragePrefix=function(t){var e=t.databaseId.projectId
return t.databaseId.isDefaultDatabase||(e+="."+t.databaseId.database),"firestore/"+t.persistenceKey+"/"+e+"/"},t.prototype.releasePrimaryLeaseIfHeld=function(t){var e=this,n=mn(t)
return n.get(Pe.key).next(function(t){return e.isLocalClient(t)?(y(cn,"Releasing primary lease."),n.delete(Pe.key)):Wt.resolve()})},t.prototype.isWithinAge=function(t,e){var n=Date.now()
return!(t<n-e||t>n&&(m("Detected an update time that is in the future: "+t+" > "+n),1))},t.prototype.attachVisibilityHandler=function(){var t=this
null!==this.document&&"function"==typeof this.document.addEventListener&&(this.documentVisibilityHandler=function(){t.queue.enqueueAndForget(function(){return t.inForeground="visible"===t.document.visibilityState,t.updateClientMetadataAndTryBecomePrimary()})},this.document.addEventListener("visibilitychange",this.documentVisibilityHandler),this.inForeground="visible"===this.document.visibilityState)},t.prototype.detachVisibilityHandler=function(){this.documentVisibilityHandler&&(_(null!==this.document&&"function"==typeof this.document.addEventListener,"Expected 'document.addEventListener' to be a function"),this.document.removeEventListener("visibilitychange",this.documentVisibilityHandler),this.documentVisibilityHandler=null)},t.prototype.attachWindowUnloadHook=function(){var t=this
"function"==typeof this.window.addEventListener&&(this.windowUnloadHandler=function(){t.markClientZombied(),t.queue.enqueueAndForget(function(){return t.shutdown()})},this.window.addEventListener("unload",this.windowUnloadHandler))},t.prototype.detachWindowUnloadHook=function(){this.windowUnloadHandler&&(_("function"==typeof this.window.removeEventListener,"Expected 'window.removeEventListener' to be a function"),this.window.removeEventListener("unload",this.windowUnloadHandler),this.windowUnloadHandler=null)},t.prototype.isClientZombied=function(t){try{var e=null!==this.webStorage.getItem(this.zombiedClientLocalStorageKey(t))
return y(cn,"Client '"+t+"' "+(e?"is":"is not")+" zombied in LocalStorage"),e}catch(t){return m(cn,"Failed to get zombied client id.",t),!1}},t.prototype.markClientZombied=function(){try{this.webStorage.setItem(this.zombiedClientLocalStorageKey(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}},t.prototype.removeClientZombiedEntry=function(){try{this.webStorage.removeItem(this.zombiedClientLocalStorageKey(this.clientId))}catch(t){}},t.prototype.zombiedClientLocalStorageKey=function(t){return"firestore_zombie_"+this.persistenceKey+"_"+t},t.MAIN_DATABASE="main",t}()
function yn(t){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){if(!function(t){return t.code===E.FAILED_PRECONDITION&&t.message===hn}(t))throw t
return y(cn,"Unexpectedly lost primary lease"),[2]})})}function mn(t){return t.store(Pe.store)}function vn(t){return t.store(He.store)}var gn,_n,bn=function(){function t(t,e){this.db=t,this.garbageCollector=new un(this,e)}return t.prototype.getSequenceNumberCount=function(t){var e=this.orphanedDocmentCount(t)
return this.db.getQueryCache().getQueryCount(t).next(function(t){return e.next(function(e){return t+e})})},t.prototype.orphanedDocmentCount=function(t){var e=0
return this.forEachOrphanedDocumentSequenceNumber(t,function(t){e++}).next(function(){return e})},t.prototype.forEachTarget=function(t,e){return this.db.getQueryCache().forEachTarget(t,e)},t.prototype.forEachOrphanedDocumentSequenceNumber=function(t,e){return this.forEachOrphanedDocument(t,function(t,n){return e(n)})},t.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},t.prototype.addReference=function(t,e){return wn(t,e)},t.prototype.removeReference=function(t,e){return wn(t,e)},t.prototype.removeTargets=function(t,e,n){return this.db.getQueryCache().removeTargets(t,e,n)},t.prototype.removeMutationReference=function(t,e){return wn(t,e)},t.prototype.isPinned=function(t,e){return this.inMemoryPins.containsKey(e)?Wt.resolve(!0):function(t,e){var n=!1
return Xt(t).iterateSerial(function(r){return Kt(t,r,e).next(function(t){return t&&(n=!0),Wt.resolve(!t)})}).next(function(){return n})}(t,e)},t.prototype.removeOrphanedDocuments=function(t,e){var n=this,r=0,i=0,o=[]
return this.forEachOrphanedDocument(t,function(a,s){if(s<=e){var u=n.isPinned(t,a).next(function(e){if(!e)return r++,n.removeOrphanedDocument(t,a).next(function(t){i+=t})})
o.push(u)}}).next(function(){return Wt.waitFor(o)}).next(function(){return n.db.getRemoteDocumentCache().updateSize(t,-i)}).next(function(){return r})},t.prototype.removeOrphanedDocument=function(t,e){var n,r=0,i=this.db.getRemoteDocumentCache()
return Wt.waitFor([fe(t).delete((n=e,[0,gt(n.path)])),i.removeEntry(t,e).next(function(t){r+=t})]).next(function(){return r})},t.prototype.removeTarget=function(t,e){var n=e.copy({sequenceNumber:t.currentSequenceNumber})
return this.db.getQueryCache().updateQueryData(t,n)},t.prototype.updateLimboDocument=function(t,e){return wn(t,e)},t.prototype.forEachOrphanedDocument=function(t,e){var n,r=fe(t),i=ot.INVALID
return r.iterate({index:Be.documentTargetsIndex},function(t,r){var o=s.__read(t,2),a=o[0],u=(o[1],r.path),c=r.sequenceNumber
0===a?(i!==ot.INVALID&&e(new ht(wt(n)),i),i=c,n=u):i=ot.INVALID}).next(function(){i!==ot.INVALID&&e(new ht(wt(n)),i)})},t.prototype.getCacheSize=function(t){return this.db.getRemoteDocumentCache().getSize(t)},t}()
function wn(t,e){return fe(t).put(function(t,e){return new Be(0,gt(t.path),e)}(e,t.currentSequenceNumber))}!function(t){t[t.NullValue=0]="NullValue",t[t.BooleanValue=1]="BooleanValue",t[t.NumberValue=2]="NumberValue",t[t.TimestampValue=3]="TimestampValue",t[t.StringValue=4]="StringValue",t[t.BlobValue=5]="BlobValue",t[t.RefValue=6]="RefValue",t[t.GeoPointValue=7]="GeoPointValue",t[t.ArrayValue=8]="ArrayValue",t[t.ObjectValue=9]="ObjectValue"}(gn||(gn={})),function(t){t[t.Default=0]="Default",t[t.Estimate=1]="Estimate",t[t.Previous=2]="Previous"}(_n||(_n={}))
var En=function(){function t(t,e){this.serverTimestampBehavior=t,this.timestampsInSnapshots=e}return t.fromSnapshotOptions=function(e,n){switch(e.serverTimestamps){case"estimate":return new t(_n.Estimate,n)
case"previous":return new t(_n.Previous,n)
case"none":case void 0:return new t(_n.Default,n)
default:return g("fromSnapshotOptions() called with invalid options.")}},t}(),Tn=function(){function t(){}return t.prototype.toString=function(){var t=this.value()
return null===t?"null":t.toString()},t.prototype.defaultCompareTo=function(t){return _(this.typeOrder!==t.typeOrder,"Default compareTo should not be used for values of same type."),z(this.typeOrder,t.typeOrder)},t}(),Sn=function(t){function e(){var e=t.call(this)||this
return e.typeOrder=gn.NullValue,e.internalValue=null,e}return s.__extends(e,t),e.prototype.value=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e},e.prototype.compareTo=function(t){return t instanceof e?0:this.defaultCompareTo(t)},e.INSTANCE=new e,e}(Tn),In=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=gn.BooleanValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue===t.internalValue},e.prototype.compareTo=function(t){return t instanceof e?z(this,t):this.defaultCompareTo(t)},e.of=function(t){return t?e.TRUE:e.FALSE},e.TRUE=new e(!0),e.FALSE=new e(!1),e}(Tn),Cn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=gn.NumberValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.compareTo=function(t){return t instanceof e?(n=this.internalValue)<(r=t.internalValue)?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1:this.defaultCompareTo(t)
var n,r},e}(Tn)
function Nn(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}var kn,An=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.isEqual=function(t){return t instanceof e&&Nn(this.internalValue,t.internalValue)},e}(Cn),Dn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.isEqual=function(t){return t instanceof e&&Nn(this.internalValue,t.internalValue)},e.NAN=new e(NaN),e.POSITIVE_INFINITY=new e(1/0),e.NEGATIVE_INFINITY=new e(-1/0),e}(Cn),Rn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=gn.StringValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue===t.internalValue},e.prototype.compareTo=function(t){return t instanceof e?z(this.internalValue,t.internalValue):this.defaultCompareTo(t)},e}(Tn),Pn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=gn.TimestampValue,n}return s.__extends(e,t),e.prototype.value=function(t){return!t||t.timestampsInSnapshots?this.internalValue:this.internalValue.toDate()},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue.isEqual(t.internalValue)},e.prototype.compareTo=function(t){return t instanceof e?this.internalValue._compareTo(t.internalValue):t instanceof On?-1:this.defaultCompareTo(t)},e}(Tn),On=function(t){function e(e,n){var r=t.call(this)||this
return r.localWriteTime=e,r.previousValue=n,r.typeOrder=gn.TimestampValue,r}return s.__extends(e,t),e.prototype.value=function(t){return t&&t.serverTimestampBehavior===_n.Estimate?new Pn(this.localWriteTime).value(t):t&&t.serverTimestampBehavior===_n.Previous&&this.previousValue?this.previousValue.value(t):null},e.prototype.isEqual=function(t){return t instanceof e&&this.localWriteTime.isEqual(t.localWriteTime)},e.prototype.compareTo=function(t){return t instanceof e?this.localWriteTime._compareTo(t.localWriteTime):t instanceof Pn?1:this.defaultCompareTo(t)},e.prototype.toString=function(){return"<ServerTimestamp localTime="+this.localWriteTime.toString()+">"},e}(Tn),xn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=gn.BlobValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue.isEqual(t.internalValue)},e.prototype.compareTo=function(t){return t instanceof e?this.internalValue._compareTo(t.internalValue):this.defaultCompareTo(t)},e}(Tn),Mn=function(t){function e(e,n){var r=t.call(this)||this
return r.databaseId=e,r.key=n,r.typeOrder=gn.RefValue,r}return s.__extends(e,t),e.prototype.value=function(t){return this.key},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.databaseId.isEqual(t.databaseId)},e.prototype.compareTo=function(t){if(t instanceof e){var n=this.databaseId.compareTo(t.databaseId)
return 0!==n?n:ht.comparator(this.key,t.key)}return this.defaultCompareTo(t)},e}(Tn),Ln=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=gn.GeoPointValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue.isEqual(t.internalValue)},e.prototype.compareTo=function(t){return t instanceof e?this.internalValue._compareTo(t.internalValue):this.defaultCompareTo(t)},e}(Tn),Fn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=gn.ObjectValue,n}return s.__extends(e,t),e.prototype.value=function(t){var e={}
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
o.isEmpty()?t=t.add(i):o.forEach(function(e){t=t.add(i.child(e))})}else t=t.add(i)}),qn.fromSet(t)},e.prototype.toString=function(){return this.internalValue.toString()},e.prototype.child=function(t){return this.internalValue.get(t)||void 0},e.prototype.setChild=function(t,n){return new e(this.internalValue.insert(t,n))},e.EMPTY=new e(new St(z)),e}(Tn),Un=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=gn.ArrayValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue.map(function(e){return e.value(t)})},e.prototype.contains=function(t){var e,n
try{for(var r=s.__values(this.internalValue),i=r.next();!i.done;i=r.next())if(i.value.isEqual(t))return!0}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return!1},e.prototype.forEach=function(t){this.internalValue.forEach(t)},e.prototype.isEqual=function(t){if(t instanceof e){if(this.internalValue.length!==t.internalValue.length)return!1
for(var n=0;n<this.internalValue.length;n++)if(!this.internalValue[n].isEqual(t.internalValue[n]))return!1
return!0}return!1},e.prototype.compareTo=function(t){if(t instanceof e){for(var n=Math.min(this.internalValue.length,t.internalValue.length),r=0;r<n;r++){var i=this.internalValue[r].compareTo(t.internalValue[r])
if(i)return i}return z(this.internalValue.length,t.internalValue.length)}return this.defaultCompareTo(t)},e.prototype.toString=function(){return"["+this.internalValue.map(function(t){return t.toString()}).join(",")+"]"},e}(Tn),qn=function(){function t(t){this.fields=t}return t.fromSet=function(e){return new t(e)},t.fromArray=function(e){var n=new kt(ct.comparator)
return e.forEach(function(t){return n=n.add(t)}),new t(n)},t.prototype.covers=function(t){var e=!1
return this.fields.forEach(function(n){n.isPrefixOf(t)&&(e=!0)}),e},t.prototype.isEqual=function(t){return this.fields.isEqual(t.fields)},t}(),Vn=function(){function t(t,e){this.field=t,this.transform=e}return t.prototype.isEqual=function(t){return this.field.isEqual(t.field)&&this.transform.isEqual(t.transform)},t}(),Bn=function(t,e){this.version=t,this.transformResults=e}
!function(t){t[t.Set=0]="Set",t[t.Patch=1]="Patch",t[t.Transform=2]="Transform",t[t.Delete=3]="Delete"}(kn||(kn={}))
var jn=function(){function t(t,e){this.updateTime=t,this.exists=e,_(void 0===t||void 0===e,'Precondition can specify "exists" or "updateTime" but not both')}return t.exists=function(e){return new t(void 0,e)},t.updateTime=function(e){return new t(e)},Object.defineProperty(t.prototype,"isNone",{get:function(){return void 0===this.updateTime&&void 0===this.exists},enumerable:!0,configurable:!0}),t.prototype.isValidFor=function(t){return void 0!==this.updateTime?t instanceof de&&t.version.isEqual(this.updateTime):void 0!==this.exists?this.exists===t instanceof de:(_(this.isNone,"Precondition should be empty"),!0)},t.prototype.isEqual=function(t){return e=this.updateTime,n=t.updateTime,(null!=e?!(!n||!e.isEqual(n)):e===n)&&this.exists===t.exists
var e,n},t.NONE=new t,t}(),Wn=function(){function t(){}return t.prototype.verifyKeyMatches=function(t){null!=t&&_(t.key.isEqual(this.key),"Can only apply a mutation to a document with the same key")},t.getPostMutationVersion=function(t){return t instanceof de?t.version:Tt.MIN},t}(),Qn=function(t){function e(e,n,r){var i=t.call(this)||this
return i.key=e,i.value=n,i.precondition=r,i.type=kn.Set,i}return s.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){this.verifyKeyMatches(t),_(null==e.transformResults,"Transform results received by SetMutation.")
var n=e.version
return new de(this.key,n,this.value,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t
var r=Wn.getPostMutationVersion(t)
return new de(this.key,r,this.value,{hasLocalMutations:!0})},e.prototype.extractBaseValue=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.value.isEqual(t.value)&&this.precondition.isEqual(t.precondition)},e}(Wn),Kn=function(t){function e(e,n,r,i){var o=t.call(this)||this
return o.key=e,o.data=n,o.fieldMask=r,o.precondition=i,o.type=kn.Patch,o}return s.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){if(this.verifyKeyMatches(t),_(null==e.transformResults,"Transform results received by PatchMutation."),!this.precondition.isValidFor(t))return new me(this.key,e.version)
var n=this.patchDocument(t)
return new de(this.key,e.version,n,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t
var r=Wn.getPostMutationVersion(t),i=this.patchDocument(t)
return new de(this.key,r,i,{hasLocalMutations:!0})},e.prototype.extractBaseValue=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.fieldMask.isEqual(t.fieldMask)&&this.precondition.isEqual(t.precondition)},e.prototype.patchDocument=function(t){var e
return e=t instanceof de?t.data:Fn.EMPTY,this.patchObject(e)},e.prototype.patchObject=function(t){var e=this
return this.fieldMask.fields.forEach(function(n){if(!n.isEmpty()){var r=e.data.field(n)
t=null!==r?t.set(n,r):t.delete(n)}}),t},e}(Wn),Gn=function(t){function e(e,n){var r=t.call(this)||this
return r.key=e,r.fieldTransforms=n,r.type=kn.Transform,r.precondition=jn.exists(!0),r}return s.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){if(this.verifyKeyMatches(t),_(null!=e.transformResults,"Transform results missing for TransformMutation."),!this.precondition.isValidFor(t))return new me(this.key,e.version)
var n=this.requireDocument(t),r=this.serverTransformResults(t,e.transformResults),i=e.version,o=this.transformObject(n.data,r)
return new de(this.key,i,o,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t
var r=this.requireDocument(t),i=this.localTransformResults(n,t,e),o=this.transformObject(r.data,i)
return new de(this.key,r.version,o,{hasLocalMutations:!0})},e.prototype.extractBaseValue=function(t){var e,n,r=null
try{for(var i=s.__values(this.fieldTransforms),o=i.next();!o.done;o=i.next()){var a=o.value,u=t instanceof de?t.field(a.field):void 0,c=a.transform.computeBaseValue(u||null)
null!=c&&(r=null==r?Fn.EMPTY.set(a.field,c):r.set(a.field,c))}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&Y(this.fieldTransforms,t.fieldTransforms)&&this.precondition.isEqual(t.precondition)},e.prototype.requireDocument=function(t){_(t instanceof de,"Unknown MaybeDocument type "+t)
var e=t
return _(e.key.isEqual(this.key),"Can only transform a document with the same key"),e},e.prototype.serverTransformResults=function(t,e){var n=[]
_(this.fieldTransforms.length===e.length,"server transform result count ("+e.length+") should match field transform count ("+this.fieldTransforms.length+")")
for(var r=0;r<e.length;r++){var i=this.fieldTransforms[r],o=i.transform,a=null
t instanceof de&&(a=t.field(i.field)),n.push(o.applyToRemoteDocument(a,e[r]))}return n},e.prototype.localTransformResults=function(t,e,n){var r,i,o=[]
try{for(var a=s.__values(this.fieldTransforms),u=a.next();!u.done;u=a.next()){var c=u.value,h=c.transform,l=null
e instanceof de&&(l=e.field(c.field)),null===l&&n instanceof de&&(l=n.field(c.field)),o.push(h.applyToLocalView(l,t))}}catch(t){r={error:t}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}return o},e.prototype.transformObject=function(t,e){_(e.length===this.fieldTransforms.length,"TransformResults length mismatch.")
for(var n=0;n<this.fieldTransforms.length;n++){var r=this.fieldTransforms[n].field
t=t.set(r,e[n])}return t},e}(Wn),Hn=function(t){function e(e,n){var r=t.call(this)||this
return r.key=e,r.precondition=n,r.type=kn.Delete,r}return s.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){return this.verifyKeyMatches(t),_(null==e.transformResults,"Transform results received by DeleteMutation."),new ye(this.key,e.version,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){return this.verifyKeyMatches(t),this.precondition.isValidFor(t)?(t&&_(t.key.isEqual(this.key),"Can only apply mutation to document with same key"),new ye(this.key,Tt.forDeletedDoc())):t},e.prototype.extractBaseValue=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.precondition.isEqual(t.precondition)},e}(Wn),zn=function(){function t(t,e,n){this.remoteDocumentCache=t,this.mutationQueue=e,this.indexManager=n}return t.prototype.getDocument=function(t,e){var n=this
return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(t,e).next(function(r){return n.getDocumentInternal(t,e,r)})},t.prototype.getDocumentInternal=function(t,e,n){return this.remoteDocumentCache.getEntry(t,e).next(function(t){var r,i
try{for(var o=s.__values(n),a=o.next();!a.done;a=o.next())t=a.value.applyToLocalView(e,t)}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return t})},t.prototype.applyLocalMutationsToDocuments=function(t,e,n){var r=Pt()
return e.forEach(function(t,e){var i,o
try{for(var a=s.__values(n),u=a.next();!u.done;u=a.next())e=u.value.applyToLocalView(t,e)}catch(t){i={error:t}}finally{try{u&&!u.done&&(o=a.return)&&o.call(a)}finally{if(i)throw i.error}}r=r.insert(t,e)}),r},t.prototype.getDocuments=function(t,e){var n=this
return this.remoteDocumentCache.getEntries(t,e).next(function(e){return n.getLocalViewOfDocuments(t,e)})},t.prototype.getLocalViewOfDocuments=function(t,e){var n=this
return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(function(r){var i=n.applyLocalMutationsToDocuments(t,e,r),o=Rt()
return i.forEach(function(t,e){e||(e=new ye(t,Tt.forDeletedDoc())),o=o.insert(t,e)}),o})},t.prototype.getDocumentsMatchingQuery=function(t,e){return e.isDocumentQuery()?this.getDocumentsMatchingDocumentQuery(t,e.path):e.isCollectionGroupQuery()?this.getDocumentsMatchingCollectionGroupQuery(t,e):this.getDocumentsMatchingCollectionQuery(t,e)},t.prototype.getDocumentsMatchingDocumentQuery=function(t,e){return this.getDocument(t,new ht(e)).next(function(t){var e=xt()
return t instanceof de&&(e=e.insert(t.key,t)),e})},t.prototype.getDocumentsMatchingCollectionGroupQuery=function(t,e){var n=this
_(e.path.isEmpty(),"Currently we only support collection group queries at the root.")
var r=e.collectionGroup,i=xt()
return this.indexManager.getCollectionParents(t,r).next(function(o){return Wt.forEach(o,function(o){var a=e.asCollectionQueryAtPath(o.child(r))
return n.getDocumentsMatchingCollectionQuery(t,a).next(function(t){t.forEach(function(t,e){i=i.insert(t,e)})})}).next(function(){return i})})},t.prototype.getDocumentsMatchingCollectionQuery=function(t,e){var n,r=this
return this.remoteDocumentCache.getDocumentsMatchingQuery(t,e).next(function(i){return n=i,r.mutationQueue.getAllMutationBatchesAffectingQuery(t,e)}).next(function(t){var r,i,o,a
try{for(var u=s.__values(t),c=u.next();!c.done;c=u.next()){var h=c.value
try{for(var l=s.__values(h.mutations),f=l.next();!f.done;f=l.next()){var p=f.value,d=p.key
if(e.path.isImmediateParentOf(d.path)){var y=n.get(d),m=p.applyToLocalView(y,y,h.localWriteTime)
n=m instanceof de?n.insert(d,m):n.remove(d)}}}catch(t){o={error:t}}finally{try{f&&!f.done&&(a=l.return)&&a.call(l)}finally{if(o)throw o.error}}}}catch(t){r={error:t}}finally{try{c&&!c.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}}).next(function(){return n.forEach(function(t,r){e.matches(r)||(n=n.remove(t))}),n})},t}(),Yn=function(){function t(){this.refsByKey=new kt(Xn.compareByKey),this.refsByTarget=new kt(Xn.compareByTargetId)}return t.prototype.isEmpty=function(){return this.refsByKey.isEmpty()},t.prototype.addReference=function(t,e){var n=new Xn(t,e)
this.refsByKey=this.refsByKey.add(n),this.refsByTarget=this.refsByTarget.add(n)},t.prototype.addReferences=function(t,e){var n=this
t.forEach(function(t){return n.addReference(t,e)})},t.prototype.removeReference=function(t,e){this.removeRef(new Xn(t,e))},t.prototype.removeReferences=function(t,e){var n=this
t.forEach(function(t){return n.removeReference(t,e)})},t.prototype.removeReferencesForId=function(t){var e=this,n=ht.EMPTY,r=new Xn(n,t),i=new Xn(n,t+1),o=[]
return this.refsByTarget.forEachInRange([r,i],function(t){e.removeRef(t),o.push(t.key)}),o},t.prototype.removeAllReferences=function(){var t=this
this.refsByKey.forEach(function(e){return t.removeRef(e)})},t.prototype.removeRef=function(t){this.refsByKey=this.refsByKey.delete(t),this.refsByTarget=this.refsByTarget.delete(t)},t.prototype.referencesForId=function(t){var e=ht.EMPTY,n=new Xn(e,t),r=new Xn(e,t+1),i=Ut()
return this.refsByTarget.forEachInRange([n,r],function(t){i=i.add(t.key)}),i},t.prototype.containsKey=function(t){var e=new Xn(t,0),n=this.refsByKey.firstAfterOrEqual(e)
return null!==n&&t.isEqual(n.key)},t}(),Xn=function(){function t(t,e){this.key=t,this.targetOrBatchId=e}return t.compareByKey=function(t,e){return ht.comparator(t.key,e.key)||z(t.targetOrBatchId,e.targetOrBatchId)},t.compareByTargetId=function(t,e){return z(t.targetOrBatchId,e.targetOrBatchId)||ht.comparator(t.key,e.key)},t}(),Jn=function(){function t(t,e){this.persistence=t,this.localViewReferences=new Yn,this.queryDataByTarget={},_(t.started,"LocalStore was passed an unstarted persistence implementation"),this.persistence.referenceDelegate.setInMemoryPins(this.localViewReferences),this.mutationQueue=t.getMutationQueue(e),this.remoteDocuments=t.getRemoteDocumentCache(),this.queryCache=t.getQueryCache(),this.localDocuments=new zn(this.remoteDocuments,this.mutationQueue,this.persistence.getIndexManager())}return t.prototype.handleUserChange=function(t){var e=this
return this.persistence.runTransaction("Handle user change","readonly",function(n){var r
return e.mutationQueue.getAllMutationBatches(n).next(function(i){return r=i,e.mutationQueue=e.persistence.getMutationQueue(t),e.localDocuments=new zn(e.remoteDocuments,e.mutationQueue,e.persistence.getIndexManager()),e.mutationQueue.getAllMutationBatches(n)}).next(function(t){var i,o,a,u,c,h,l,f,p=[],d=[],y=Ut()
try{for(var m=s.__values(r),v=m.next();!v.done;v=m.next()){var g=v.value
p.push(g.batchId)
try{for(var _=s.__values(g.mutations),b=_.next();!b.done;b=_.next()){var w=b.value
y=y.add(w.key)}}catch(t){a={error:t}}finally{try{b&&!b.done&&(u=_.return)&&u.call(_)}finally{if(a)throw a.error}}}}catch(t){i={error:t}}finally{try{v&&!v.done&&(o=m.return)&&o.call(m)}finally{if(i)throw i.error}}try{for(var E=s.__values(t),T=E.next();!T.done;T=E.next()){g=T.value,d.push(g.batchId)
try{for(var S=s.__values(g.mutations),I=S.next();!I.done;I=S.next())w=I.value,y=y.add(w.key)}catch(t){l={error:t}}finally{try{I&&!I.done&&(f=S.return)&&f.call(S)}finally{if(l)throw l.error}}}}catch(t){c={error:t}}finally{try{T&&!T.done&&(h=E.return)&&h.call(E)}finally{if(c)throw c.error}}return e.localDocuments.getDocuments(n,y).next(function(t){return{affectedDocuments:t,removedBatchIds:p,addedBatchIds:d}})})})},t.prototype.localWrite=function(t){var e=this,n=Et.now(),r=t.reduce(function(t,e){return t.add(e.key)},Ut())
return this.persistence.runTransaction("Locally write mutations","readwrite",function(i){return e.localDocuments.getDocuments(i,r).next(function(r){var o,a,u=[]
try{for(var c=s.__values(t),h=c.next();!h.done;h=c.next()){var l=h.value,f=l.extractBaseValue(r.get(l.key))
null!=f&&u.push(new Kn(l.key,f,f.fieldMask(),jn.exists(!0)))}}catch(t){o={error:t}}finally{try{h&&!h.done&&(a=c.return)&&a.call(c)}finally{if(o)throw o.error}}return e.mutationQueue.addMutationBatch(i,n,u,t).next(function(t){var e=t.applyToLocalDocumentSet(r)
return{batchId:t.batchId,changes:e}})})})},t.prototype.lookupMutationDocuments=function(t){var e=this
return this.persistence.runTransaction("Lookup mutation documents","readonly",function(n){return e.mutationQueue.lookupMutationKeys(n,t).next(function(t){return t?e.localDocuments.getDocuments(n,t):Wt.resolve(null)})})},t.prototype.acknowledgeBatch=function(t){var e=this
return this.persistence.runTransaction("Acknowledge batch","readwrite-primary",function(n){var r=t.batch.keys(),i=e.remoteDocuments.newChangeBuffer()
return e.mutationQueue.acknowledgeBatch(n,t.batch,t.streamToken).next(function(){return e.applyWriteToRemoteDocuments(n,t,i)}).next(function(){return i.apply(n)}).next(function(){return e.mutationQueue.performConsistencyCheck(n)}).next(function(){return e.localDocuments.getDocuments(n,r)})})},t.prototype.rejectBatch=function(t){var e=this
return this.persistence.runTransaction("Reject batch","readwrite-primary",function(n){var r
return e.mutationQueue.lookupMutationBatch(n,t).next(function(t){return _(null!==t,"Attempt to reject nonexistent batch!"),r=t.keys(),e.mutationQueue.removeMutationBatch(n,t)}).next(function(){return e.mutationQueue.performConsistencyCheck(n)}).next(function(){return e.localDocuments.getDocuments(n,r)})})},t.prototype.getLastStreamToken=function(){var t=this
return this.persistence.runTransaction("Get last stream token","readonly",function(e){return t.mutationQueue.getLastStreamToken(e)})},t.prototype.setLastStreamToken=function(t){var e=this
return this.persistence.runTransaction("Set last stream token","readwrite-primary",function(n){return e.mutationQueue.setLastStreamToken(n,t)})},t.prototype.getLastRemoteSnapshotVersion=function(){var t=this
return this.persistence.runTransaction("Get last remote snapshot version","readonly",function(e){return t.queryCache.getLastRemoteSnapshotVersion(e)})},t.prototype.applyRemoteEvent=function(e){var n=this,r=this.remoteDocuments.newChangeBuffer()
return this.persistence.runTransaction("Apply remote event","readwrite-primary",function(i){var o=[],a=Ut()
N(e.targetChanges,function(r,s){var u=n.queryDataByTarget[r]
if(u){s.addedDocuments.forEach(function(t){a=a.add(t)}),s.modifiedDocuments.forEach(function(t){a=a.add(t)}),o.push(n.queryCache.removeMatchingKeys(i,s.removedDocuments,r).next(function(){return n.queryCache.addMatchingKeys(i,s.addedDocuments,r)}))
var c=s.resumeToken
if(c.length>0){var h=u
u=u.copy({resumeToken:c,snapshotVersion:e.snapshotVersion}),n.queryDataByTarget[r]=u,t.shouldPersistQueryData(h,u,s)&&o.push(n.queryCache.updateQueryData(i,u))}}})
var s=Rt(),u=Ut()
e.documentUpdates.forEach(function(t,e){u=u.add(t)}),o.push(r.getEntries(i,u).next(function(t){e.documentUpdates.forEach(function(u,c){var h=t.get(u)
null==h||c.version.isEqual(Tt.MIN)||a.has(c.key)&&!h.hasPendingWrites||c.version.compareTo(h.version)>=0?(r.addEntry(c),s=s.insert(u,c)):y("LocalStore","Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version),e.resolvedLimboDocuments.has(u)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))})}))
var c=e.snapshotVersion
if(!c.isEqual(Tt.MIN)){var h=n.queryCache.getLastRemoteSnapshotVersion(i).next(function(t){return _(c.compareTo(t)>=0,"Watch stream reverted to previous snapshot?? "+c+" < "+t),n.queryCache.setTargetsMetadata(i,i.currentSequenceNumber,c)})
o.push(h)}return Wt.waitFor(o).next(function(){return r.apply(i)}).next(function(){return n.localDocuments.getLocalViewOfDocuments(i,s)})})},t.shouldPersistQueryData=function(t,e,n){return 0!==e.resumeToken.length&&(0===t.resumeToken.length||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=this.RESUME_TOKEN_MAX_AGE_MICROS||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)},t.prototype.notifyLocalViewChanges=function(t){var e=this
return this.persistence.runTransaction("notifyLocalViewChanges","readwrite",function(n){return Wt.forEach(t,function(t){return e.localViewReferences.addReferences(t.addedKeys,t.targetId),e.localViewReferences.removeReferences(t.removedKeys,t.targetId),Wt.forEach(t.removedKeys,function(t){return e.persistence.referenceDelegate.removeReference(n,t)})})})},t.prototype.nextMutationBatch=function(t){var e=this
return this.persistence.runTransaction("Get next mutation batch","readonly",function(n){return void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)})},t.prototype.readDocument=function(t){var e=this
return this.persistence.runTransaction("read document","readonly",function(n){return e.localDocuments.getDocument(n,t)})},t.prototype.allocateQuery=function(t){var e=this
return this.persistence.runTransaction("Allocate query","readwrite",function(n){var r
return e.queryCache.getQueryData(n,t).next(function(i){return i?(r=i,Wt.resolve()):e.queryCache.allocateTargetId(n).next(function(i){return r=new tn(t,i,Ke.Listen,n.currentSequenceNumber),e.queryCache.addQueryData(n,r)})}).next(function(){return _(!e.queryDataByTarget[r.targetId],"Tried to allocate an already allocated query: "+t),e.queryDataByTarget[r.targetId]=r,r})})},t.prototype.releaseQuery=function(t,e){var n=this,r=e?"readwrite":"readwrite-primary"
return this.persistence.runTransaction("Release query",r,function(r){return n.queryCache.getQueryData(r,t).next(function(i){_(null!=i,"Tried to release nonexistent query: "+t)
var o=i.targetId,a=n.queryDataByTarget[o],s=n.localViewReferences.removeReferencesForId(o)
return delete n.queryDataByTarget[o],e?Wt.resolve():Wt.forEach(s,function(t){return n.persistence.referenceDelegate.removeReference(r,t)}).next(function(){return n.persistence.referenceDelegate.removeTarget(r,a)})})})},t.prototype.executeQuery=function(t){var e=this
return this.persistence.runTransaction("Execute query","readonly",function(n){return e.localDocuments.getDocumentsMatchingQuery(n,t)})},t.prototype.remoteDocumentKeys=function(t){var e=this
return this.persistence.runTransaction("Remote document keys","readonly",function(n){return e.queryCache.getMatchingKeysForTargetId(n,t)})},t.prototype.getActiveClients=function(){return this.persistence.getActiveClients()},t.prototype.removeCachedMutationBatchMetadata=function(t){this.mutationQueue.removeCachedMutationKeys(t)},t.prototype.setNetworkEnabled=function(t){this.persistence.setNetworkEnabled(t)},t.prototype.applyWriteToRemoteDocuments=function(t,e,n){var r=this,i=e.batch,o=i.keys(),a=Wt.resolve()
return o.forEach(function(r){a=a.next(function(){return n.getEntry(t,r)}).next(function(t){var o=t,a=e.docVersions.get(r)
_(null!==a,"ackVersions should contain every doc in the write."),(!o||o.version.compareTo(a)<0)&&((o=i.applyToRemoteDocument(r,o,e))?n.addEntry(o):_(!t,"Mutation batch "+i+" applied to document "+t+" resulted in null"))})}),a.next(function(){return r.mutationQueue.removeMutationBatch(t,i)})},t.prototype.collectGarbage=function(t){var e=this
return this.persistence.runTransaction("Collect garbage","readwrite-primary",function(n){return t.collect(n,e.queryDataByTarget)})},t.prototype.getQueryForTarget=function(t){var e=this
return this.queryDataByTarget[t]?Promise.resolve(this.queryDataByTarget[t].query):this.persistence.runTransaction("Get query data","readonly",function(n){return e.queryCache.getQueryDataForTarget(n,t).next(function(t){return t?t.query:null})})},t.prototype.getNewDocumentChanges=function(){var t=this
return this.persistence.runTransaction("Get new document changes","readonly",function(e){return t.remoteDocuments.getNewDocumentChanges(e)})},t.RESUME_TOKEN_MAX_AGE_MICROS=3e8,t}(),$n=function(){function t(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nextBatchId=1,this.lastStreamToken=w(),this.batchesByDocumentKey=new kt(Xn.compareByKey)}return t.prototype.checkEmpty=function(t){return Wt.resolve(0===this.mutationQueue.length)},t.prototype.acknowledgeBatch=function(t,e,n){var r=e.batchId,i=this.indexOfExistingBatchId(r,"acknowledged")
_(0===i,"Can only acknowledge the first batch in the mutation queue")
var o=this.mutationQueue[i]
return _(r===o.batchId,"Queue ordering failure: expected batch "+r+", got batch "+o.batchId),this.lastStreamToken=n,Wt.resolve()},t.prototype.getLastStreamToken=function(t){return Wt.resolve(this.lastStreamToken)},t.prototype.setLastStreamToken=function(t,e){return this.lastStreamToken=e,Wt.resolve()},t.prototype.addMutationBatch=function(t,e,n,r){var i,o
_(0!==r.length,"Mutation batches should not be empty")
var a=this.nextBatchId
this.nextBatchId++,this.mutationQueue.length>0&&_(this.mutationQueue[this.mutationQueue.length-1].batchId<a,"Mutation batchIDs must be monotonically increasing order")
var u=new Bt(a,e,n,r)
this.mutationQueue.push(u)
try{for(var c=s.__values(r),h=c.next();!h.done;h=c.next()){var l=h.value
this.batchesByDocumentKey=this.batchesByDocumentKey.add(new Xn(l.key,a)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast())}}catch(t){i={error:t}}finally{try{h&&!h.done&&(o=c.return)&&o.call(c)}finally{if(i)throw i.error}}return Wt.resolve(u)},t.prototype.lookupMutationBatch=function(t,e){return Wt.resolve(this.findMutationBatch(e))},t.prototype.lookupMutationKeys=function(t,e){var n=this.findMutationBatch(e)
return _(null!=n,"Failed to find local mutation batch."),Wt.resolve(n.keys())},t.prototype.getNextMutationBatchAfterBatchId=function(t,e){var n=e+1,r=this.indexOfBatchId(n),i=r<0?0:r
return Wt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)},t.prototype.getAllMutationBatches=function(t){return Wt.resolve(this.mutationQueue.slice())},t.prototype.getAllMutationBatchesAffectingDocumentKey=function(t,e){var n=this,r=new Xn(e,0),i=new Xn(e,Number.POSITIVE_INFINITY),o=[]
return this.batchesByDocumentKey.forEachInRange([r,i],function(t){_(e.isEqual(t.key),"Should only iterate over a single key's batches")
var r=n.findMutationBatch(t.targetOrBatchId)
_(null!==r,"Batches in the index must exist in the main table"),o.push(r)}),Wt.resolve(o)},t.prototype.getAllMutationBatchesAffectingDocumentKeys=function(t,e){var n=this,r=new kt(z)
return e.forEach(function(t){var e=new Xn(t,0),i=new Xn(t,Number.POSITIVE_INFINITY)
n.batchesByDocumentKey.forEachInRange([e,i],function(e){_(t.isEqual(e.key),"For each key, should only iterate over a single key's batches"),r=r.add(e.targetOrBatchId)})}),Wt.resolve(this.findMutationBatches(r))},t.prototype.getAllMutationBatchesAffectingQuery=function(t,e){_(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
var n=e.path,r=n.length+1,i=n
ht.isDocumentKey(i)||(i=i.child(""))
var o=new Xn(new ht(i),0),a=new kt(z)
return this.batchesByDocumentKey.forEachWhile(function(t){var e=t.key.path
return!!n.isPrefixOf(e)&&(e.length===r&&(a=a.add(t.targetOrBatchId)),!0)},o),Wt.resolve(this.findMutationBatches(a))},t.prototype.findMutationBatches=function(t){var e=this,n=[]
return t.forEach(function(t){var r=e.findMutationBatch(t)
null!==r&&n.push(r)}),n},t.prototype.removeMutationBatch=function(t,e){var n=this
_(0===this.indexOfExistingBatchId(e.batchId,"removed"),"Can only remove the first entry of the mutation queue"),this.mutationQueue.shift()
var r=this.batchesByDocumentKey
return Wt.forEach(e.mutations,function(i){var o=new Xn(i.key,e.batchId)
return r=r.delete(o),n.referenceDelegate.removeMutationReference(t,i.key)}).next(function(){n.batchesByDocumentKey=r})},t.prototype.removeCachedMutationKeys=function(t){},t.prototype.containsKey=function(t,e){var n=new Xn(e,0),r=this.batchesByDocumentKey.firstAfterOrEqual(n)
return Wt.resolve(e.isEqual(r&&r.key))},t.prototype.performConsistencyCheck=function(t){return 0===this.mutationQueue.length&&_(this.batchesByDocumentKey.isEmpty(),"Document leak -- detected dangling mutation references when queue is empty."),Wt.resolve()},t.prototype.indexOfExistingBatchId=function(t,e){var n=this.indexOfBatchId(t)
return _(n>=0&&n<this.mutationQueue.length,"Batches must exist to be "+e),n},t.prototype.indexOfBatchId=function(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId},t.prototype.findMutationBatch=function(t){var e=this.indexOfBatchId(t)
if(e<0||e>=this.mutationQueue.length)return null
var n=this.mutationQueue[e]
return _(n.batchId===t,"If found batch must match"),n},t}(),Zn=function(){function t(t){this.persistence=t,this.queries=new ve(function(t){return t.canonicalId()}),this.lastRemoteSnapshotVersion=Tt.MIN,this.highestTargetId=0,this.highestSequenceNumber=0,this.references=new Yn,this.targetCount=0,this.targetIdGenerator=Zt.forQueryCache()}return t.prototype.getTargetCount=function(t){return Wt.resolve(this.targetCount)},t.prototype.forEachTarget=function(t,e){return this.queries.forEach(function(t,n){return e(n)}),Wt.resolve()},t.prototype.getLastRemoteSnapshotVersion=function(t){return Wt.resolve(this.lastRemoteSnapshotVersion)},t.prototype.getHighestSequenceNumber=function(t){return Wt.resolve(this.highestSequenceNumber)},t.prototype.allocateTargetId=function(t){var e=this.targetIdGenerator.after(this.highestTargetId)
return this.highestTargetId=e,Wt.resolve(e)},t.prototype.setTargetsMetadata=function(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.highestSequenceNumber&&(this.highestSequenceNumber=e),Wt.resolve()},t.prototype.saveQueryData=function(t){this.queries.set(t.query,t)
var e=t.targetId
e>this.highestTargetId&&(this.highestTargetId=e),t.sequenceNumber>this.highestSequenceNumber&&(this.highestSequenceNumber=t.sequenceNumber)},t.prototype.addQueryData=function(t,e){return _(!this.queries.has(e.query),"Adding a query that already exists"),this.saveQueryData(e),this.targetCount+=1,Wt.resolve()},t.prototype.updateQueryData=function(t,e){return _(this.queries.has(e.query),"Updating a non-existent query"),this.saveQueryData(e),Wt.resolve()},t.prototype.removeQueryData=function(t,e){return _(this.targetCount>0,"Removing a target from an empty cache"),_(this.queries.has(e.query),"Removing a non-existent target from the cache"),this.queries.delete(e.query),this.references.removeReferencesForId(e.targetId),this.targetCount-=1,Wt.resolve()},t.prototype.removeTargets=function(t,e,n){var r=this,i=0,o=[]
return this.queries.forEach(function(a,s){s.sequenceNumber<=e&&!n[s.targetId]&&(r.queries.delete(a),o.push(r.removeMatchingKeysForTargetId(t,s.targetId)),i++)}),Wt.waitFor(o).next(function(){return i})},t.prototype.getQueryCount=function(t){return Wt.resolve(this.targetCount)},t.prototype.getQueryData=function(t,e){var n=this.queries.get(e)||null
return Wt.resolve(n)},t.prototype.getQueryDataForTarget=function(t,e){return g("Not yet implemented.")},t.prototype.addMatchingKeys=function(t,e,n){this.references.addReferences(e,n)
var r=this.persistence.referenceDelegate,i=[]
return r&&e.forEach(function(e){i.push(r.addReference(t,e))}),Wt.waitFor(i)},t.prototype.removeMatchingKeys=function(t,e,n){this.references.removeReferences(e,n)
var r=this.persistence.referenceDelegate,i=[]
return r&&e.forEach(function(e){i.push(r.removeReference(t,e))}),Wt.waitFor(i)},t.prototype.removeMatchingKeysForTargetId=function(t,e){return this.references.removeReferencesForId(e),Wt.resolve()},t.prototype.getMatchingKeysForTargetId=function(t,e){var n=this.references.referencesForId(e)
return Wt.resolve(n)},t.prototype.containsKey=function(t,e){return Wt.resolve(this.references.containsKey(e))},t}(),tr=function(){function t(t,e){this.indexManager=t,this.sizer=e,this.docs=new St(ht.comparator),this.newDocumentChanges=Ut(),this.size=0}return t.prototype.addEntries=function(t,e,n){var r,i,o=[]
try{for(var a=s.__values(e),u=a.next();!u.done;u=a.next()){var c=u.value,h=c.maybeDocument.key
this.docs=this.docs.insert(h,c),this.newDocumentChanges=this.newDocumentChanges.add(h),o.push(this.indexManager.addToCollectionParentIndex(t,h.path.popLast()))}}catch(t){r={error:t}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}return this.size+=n,Wt.waitFor(o)},t.prototype.removeEntry=function(t,e){var n=this.docs.get(e)
return n?(this.docs=this.docs.remove(e),this.size-=n.size,Wt.resolve(n.size)):Wt.resolve(0)},t.prototype.getEntry=function(t,e){var n=this.docs.get(e)
return Wt.resolve(n?n.maybeDocument:null)},t.prototype.getSizedEntry=function(t,e){return Wt.resolve(this.docs.get(e))},t.prototype.getEntries=function(t,e){var n=this,r=Pt()
return e.forEach(function(t){var e=n.docs.get(t)
r=r.insert(t,e?e.maybeDocument:null)}),Wt.resolve(r)},t.prototype.getSizedEntries=function(t,e){var n=this,r=Pt(),i=new St(ht.comparator)
return e.forEach(function(t){var e=n.docs.get(t)
r=r.insert(t,e?e.maybeDocument:null),i=i.insert(t,e?e.size:0)}),Wt.resolve({maybeDocuments:r,sizeMap:i})},t.prototype.getDocumentsMatchingQuery=function(t,e){_(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
for(var n=xt(),r=new ht(e.path.child("")),i=this.docs.getIteratorFrom(r);i.hasNext();){var o=i.getNext(),a=o.key,s=o.value.maybeDocument
if(!e.path.isPrefixOf(a.path))break
s instanceof de&&e.matches(s)&&(n=n.insert(s.key,s))}return Wt.resolve(n)},t.prototype.forEachDocumentKey=function(t,e){return Wt.forEach(this.docs,function(t){return e(t)})},t.prototype.getNewDocumentChanges=function(t){var e=this,n=Rt()
return this.newDocumentChanges.forEach(function(t){var r=e.docs.get(t),i=r?r.maybeDocument:new ye(t,Tt.forDeletedDoc())
n=n.insert(t,i)}),this.newDocumentChanges=Ut(),Wt.resolve(n)},t.prototype.newChangeBuffer=function(){return new er(this.sizer,this)},t.prototype.getSize=function(t){return Wt.resolve(this.size)},t}(),er=function(t){function e(e,n){var r=t.call(this)||this
return r.sizer=e,r.documentCache=n,r}return s.__extends(e,t),e.prototype.applyChanges=function(t){var e=this,n=this.assertChanges(),r=0,i=[]
return n.forEach(function(t,n){var o=e.documentSizes.get(t)
_(void 0!==o,"Attempting to change document "+t.toString()+" without having read it first")
var a=e.sizer(n)
r+=a-o,i.push({maybeDocument:n,size:a})}),this.documentCache.addEntries(t,i,r)},e.prototype.getFromCache=function(t,e){return this.documentCache.getSizedEntry(t,e)},e.prototype.getAllFromCache=function(t,e){return this.documentCache.getSizedEntries(t,e)},e}(ge),nr=function(){function t(t,e){var n=this
this.clientId=t,this.mutationQueues={},this.listenSequence=new ot(0),this._started=!1,this._started=!0,this.referenceDelegate=e(this),this.queryCache=new Zn(this),this.indexManager=new Ne,this.remoteDocumentCache=new tr(this.indexManager,function(t){return n.referenceDelegate.documentSize(t)})}return t.createLruPersistence=function(e,n,r){return new t(e,function(t){return new or(t,new en(n),r)})},t.createEagerPersistence=function(e){return new t(e,function(t){return new ir(t)})},t.prototype.shutdown=function(){return this._started=!1,Promise.resolve()},Object.defineProperty(t.prototype,"started",{get:function(){return this._started},enumerable:!0,configurable:!0}),t.prototype.getActiveClients=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){return[2,[this.clientId]]})})},t.prototype.setPrimaryStateListener=function(t){return t(!0)},t.prototype.setDatabaseDeletedListener=function(){},t.prototype.setNetworkEnabled=function(t){},t.prototype.getIndexManager=function(){return this.indexManager},t.prototype.getMutationQueue=function(t){var e=this.mutationQueues[t.toKey()]
return e||(e=new $n(this.indexManager,this.referenceDelegate),this.mutationQueues[t.toKey()]=e),e},t.prototype.getQueryCache=function(){return this.queryCache},t.prototype.getRemoteDocumentCache=function(){return this.remoteDocumentCache},t.prototype.runTransaction=function(t,e,n){var r=this
y("MemoryPersistence","Starting transaction:",t)
var i=new rr(this.listenSequence.next())
return this.referenceDelegate.onTransactionStarted(),n(i).next(function(t){return r.referenceDelegate.onTransactionCommitted(i).next(function(){return t})}).toPromise()},t.prototype.mutationQueuesContainKey=function(t,e){return Wt.or((n=this.mutationQueues,r=[],k(n,function(t,e){return r.push(e)}),r).map(function(n){return function(){return n.containsKey(t,e)}}))
var n,r},t}(),rr=function(t){this.currentSequenceNumber=t},ir=function(){function t(t){this.persistence=t}return t.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},t.prototype.addReference=function(t,e){return this.orphanedDocuments.delete(e),Wt.resolve()},t.prototype.removeReference=function(t,e){return this.orphanedDocuments.add(e),Wt.resolve()},t.prototype.removeMutationReference=function(t,e){return this.orphanedDocuments.add(e),Wt.resolve()},t.prototype.removeTarget=function(t,e){var n=this,r=this.persistence.getQueryCache()
return r.getMatchingKeysForTargetId(t,e.targetId).next(function(t){t.forEach(function(t){return n.orphanedDocuments.add(t)})}).next(function(){return r.removeQueryData(t,e)})},t.prototype.onTransactionStarted=function(){this.orphanedDocuments=new Set},t.prototype.onTransactionCommitted=function(t){var e=this,n=this.persistence.getRemoteDocumentCache()
return Wt.forEach(this.orphanedDocuments,function(r){return e.isReferenced(t,r).next(function(e){return e?Wt.resolve():n.removeEntry(t,r).next(function(){})})})},t.prototype.updateLimboDocument=function(t,e){var n=this
return this.isReferenced(t,e).next(function(t){t?n.orphanedDocuments.delete(e):n.orphanedDocuments.add(e)})},t.prototype.documentSize=function(t){return 0},t.prototype.isReferenced=function(t,e){var n=this
return Wt.or([function(){return n.persistence.getQueryCache().containsKey(t,e)},function(){return n.persistence.mutationQueuesContainKey(t,e)},function(){return Wt.resolve(n.inMemoryPins.containsKey(e))}])},t}(),or=function(){function t(t,e,n){this.persistence=t,this.serializer=e,this.orphanedSequenceNumbers=new ve(function(t){return gt(t.path)}),this.garbageCollector=new un(this,n)}return t.prototype.onTransactionStarted=function(){},t.prototype.onTransactionCommitted=function(t){return Wt.resolve()},t.prototype.forEachTarget=function(t,e){return this.persistence.getQueryCache().forEachTarget(t,e)},t.prototype.getSequenceNumberCount=function(t){var e=this.orphanedDocumentCount(t)
return this.persistence.getQueryCache().getTargetCount(t).next(function(t){return e.next(function(e){return t+e})})},t.prototype.orphanedDocumentCount=function(t){var e=0
return this.forEachOrphanedDocumentSequenceNumber(t,function(t){e++}).next(function(){return e})},t.prototype.forEachOrphanedDocumentSequenceNumber=function(t,e){var n=this
return Wt.forEach(this.orphanedSequenceNumbers,function(r,i){return n.isPinned(t,r,i).next(function(t){return t?Wt.resolve():e(i)})})},t.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},t.prototype.removeTargets=function(t,e,n){return this.persistence.getQueryCache().removeTargets(t,e,n)},t.prototype.removeOrphanedDocuments=function(t,e){var n=this,r=0,i=this.persistence.getRemoteDocumentCache()
return i.forEachDocumentKey(t,function(o){return n.isPinned(t,o,e).next(function(e){return e?Wt.resolve():(r++,i.removeEntry(t,o).next())})}).next(function(){return r})},t.prototype.removeMutationReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Wt.resolve()},t.prototype.removeTarget=function(t,e){var n=e.copy({sequenceNumber:t.currentSequenceNumber})
return this.persistence.getQueryCache().updateQueryData(t,n)},t.prototype.addReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Wt.resolve()},t.prototype.removeReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Wt.resolve()},t.prototype.updateLimboDocument=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Wt.resolve()},t.prototype.documentSize=function(t){var e,n=this.serializer.toDbRemoteDocument(t)
if(n.document)e=n.document
else if(n.unknownDocument)e=n.unknownDocument
else{if(!n.noDocument)throw g("Unknown remote document type")
e=n.noDocument}return JSON.stringify(e).length},t.prototype.isPinned=function(t,e,n){var r=this
return Wt.or([function(){return r.persistence.mutationQueuesContainKey(t,e)},function(){return Wt.resolve(r.inMemoryPins.containsKey(e))},function(){return r.persistence.getQueryCache().containsKey(t,e)},function(){var t=r.orphanedSequenceNumbers.get(e)
return Wt.resolve(void 0!==t&&t>n)}])},t.prototype.getCacheSize=function(t){return this.persistence.getRemoteDocumentCache().getSize(t)},t}(),ar=Number,sr=ar.MIN_SAFE_INTEGER||-(Math.pow(2,53)-1),ur=ar.MAX_SAFE_INTEGER||Math.pow(2,53)-1,cr=ar.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}
function hr(t){return null==t}function lr(t){return cr(t)&&t<=ur&&t>=sr}var fr,pr=function(){function t(t,e,n,r,i){this.queue=t,this.timerId=e,this.initialDelayMs=n,this.backoffFactor=r,this.maxDelayMs=i,this.timerPromise=null,this.lastAttemptTime=Date.now(),this.reset()}return t.prototype.reset=function(){this.currentBaseMs=0},t.prototype.resetToMax=function(){this.currentBaseMs=this.maxDelayMs},t.prototype.backoffAndRun=function(t){var e=this
this.cancel()
var n=Math.floor(this.currentBaseMs+this.jitterDelayMs()),r=Math.max(0,Date.now()-this.lastAttemptTime),i=Math.max(0,n-r)
this.currentBaseMs>0&&y("ExponentialBackoff","Backing off for "+i+" ms (base delay: "+this.currentBaseMs+" ms, delay with jitter: "+n+" ms, last attempt: "+r+" ms ago)"),this.timerPromise=this.queue.enqueueAfterDelay(this.timerId,i,function(){return e.lastAttemptTime=Date.now(),t()}),this.currentBaseMs*=this.backoffFactor,this.currentBaseMs<this.initialDelayMs&&(this.currentBaseMs=this.initialDelayMs),this.currentBaseMs>this.maxDelayMs&&(this.currentBaseMs=this.maxDelayMs)},t.prototype.cancel=function(){null!==this.timerPromise&&(this.timerPromise.cancel(),this.timerPromise=null)},t.prototype.jitterDelayMs=function(){return(Math.random()-.5)*this.currentBaseMs},t}()
!function(t){t[t.Initial=0]="Initial",t[t.Starting=1]="Starting",t[t.Open=2]="Open",t[t.Error=3]="Error",t[t.Backoff=4]="Backoff"}(fr||(fr={}))
var dr,yr,mr=1e3,vr=6e4,gr=1.5,_r=function(){function t(t,e,n,r,i,o){this.queue=t,this.idleTimerId=n,this.connection=r,this.credentialsProvider=i,this.listener=o,this.state=fr.Initial,this.closeCount=0,this.idleTimer=null,this.stream=null,this.backoff=new pr(t,e,mr,gr,vr)}return t.prototype.isStarted=function(){return this.state===fr.Starting||this.state===fr.Open||this.state===fr.Backoff},t.prototype.isOpen=function(){return this.state===fr.Open},t.prototype.start=function(){this.state!==fr.Error?(_(this.state===fr.Initial,"Already started"),this.auth()):this.performBackoff()},t.prototype.stop=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.isStarted()?[4,this.close(fr.Initial)]:[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})},t.prototype.inhibitBackoff=function(){_(!this.isStarted(),"Can only inhibit backoff in a stopped state"),this.state=fr.Initial,this.backoff.reset()},t.prototype.markIdle=function(){var t=this
this.isOpen()&&null===this.idleTimer&&(this.idleTimer=this.queue.enqueueAfterDelay(this.idleTimerId,6e4,function(){return t.handleIdleCloseTimer()}))},t.prototype.sendRequest=function(t){this.cancelIdleCheck(),this.stream.send(t)},t.prototype.handleIdleCloseTimer=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){return this.isOpen()?[2,this.close(fr.Initial)]:[2]})})},t.prototype.cancelIdleCheck=function(){this.idleTimer&&(this.idleTimer.cancel(),this.idleTimer=null)},t.prototype.close=function(t,e){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(n){switch(n.label){case 0:return _(this.isStarted(),"Only started streams should be closed."),_(t===fr.Error||hr(e),"Can't provide an error when not in an error state."),this.cancelIdleCheck(),this.backoff.cancel(),this.closeCount++,t!==fr.Error?this.backoff.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.backoff.resetToMax()):e&&e.code===E.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.tearDown(),this.stream.close(),this.stream=null),this.state=t,[4,this.listener.onClose(e)]
case 1:return n.sent(),[2]}})})},t.prototype.tearDown=function(){},t.prototype.auth=function(){var t=this
_(this.state===fr.Initial,"Must be in initial state to auth"),this.state=fr.Starting
var e=this.getCloseGuardedDispatcher(this.closeCount),n=this.closeCount
this.credentialsProvider.getToken().then(function(e){t.closeCount===n&&t.startStream(e)},function(n){e(function(){var e=new T(E.UNKNOWN,"Fetching auth token failed: "+n.message)
return t.handleStreamClose(e)})})},t.prototype.startStream=function(t){var e=this
_(this.state===fr.Starting,"Trying to start stream in a non-starting state")
var n=this.getCloseGuardedDispatcher(this.closeCount)
this.stream=this.startRpc(t),this.stream.onOpen(function(){n(function(){return _(e.state===fr.Starting,"Expected stream to be in state Starting, but was "+e.state),e.state=fr.Open,e.listener.onOpen()})}),this.stream.onClose(function(t){n(function(){return e.handleStreamClose(t)})}),this.stream.onMessage(function(t){n(function(){return e.onMessage(t)})})},t.prototype.performBackoff=function(){var t=this
_(this.state===fr.Error,"Should only perform backoff when in Error state"),this.state=fr.Backoff,this.backoff.backoffAndRun(function(){return s.__awaiter(t,void 0,void 0,function(){return s.__generator(this,function(t){return _(this.state===fr.Backoff,"Backoff elapsed but state is now: "+this.state),this.state=fr.Initial,this.start(),_(this.isStarted(),"PersistentStream should have started"),[2]})})})},t.prototype.handleStreamClose=function(t){return _(this.isStarted(),"Can't handle server close on non-started stream"),y("PersistentStream","close with error: "+t),this.stream=null,this.close(fr.Error,t)},t.prototype.getCloseGuardedDispatcher=function(t){var e=this
return function(n){e.queue.enqueueAndForget(function(){return e.closeCount===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())})}},t}(),br=function(t){function e(e,n,r,i,o){var a=t.call(this,e,Z.ListenStreamConnectionBackoff,Z.ListenStreamIdle,n,r,o)||this
return a.serializer=i,a}return s.__extends(e,t),e.prototype.startRpc=function(t){return this.connection.openStream("Listen",t)},e.prototype.onMessage=function(t){this.backoff.reset()
var e=this.serializer.fromWatchChange(t),n=this.serializer.versionFromListenResponse(t)
return this.listener.onWatchChange(e,n)},e.prototype.watch=function(t){var e={}
e.database=this.serializer.encodedDatabaseId,e.addTarget=this.serializer.toTarget(t)
var n=this.serializer.toListenRequestLabels(t)
n&&(e.labels=n),this.sendRequest(e)},e.prototype.unwatch=function(t){var e={}
e.database=this.serializer.encodedDatabaseId,e.removeTarget=t,this.sendRequest(e)},e}(_r),wr=function(t){function e(e,n,r,i,o){var a=t.call(this,e,Z.WriteStreamConnectionBackoff,Z.WriteStreamIdle,n,r,o)||this
return a.serializer=i,a.handshakeComplete_=!1,a}return s.__extends(e,t),Object.defineProperty(e.prototype,"handshakeComplete",{get:function(){return this.handshakeComplete_},enumerable:!0,configurable:!0}),e.prototype.start=function(){this.handshakeComplete_=!1,t.prototype.start.call(this)},e.prototype.tearDown=function(){this.handshakeComplete_&&this.writeMutations([])},e.prototype.startRpc=function(t){return this.connection.openStream("Write",t)},e.prototype.onMessage=function(t){if(_(!!t.streamToken,"Got a write response without a stream token"),this.lastStreamToken=t.streamToken,this.handshakeComplete_){this.backoff.reset()
var e=this.serializer.fromWriteResults(t.writeResults,t.commitTime),n=this.serializer.fromVersion(t.commitTime)
return this.listener.onMutationResult(n,e)}return _(!t.writeResults||0===t.writeResults.length,"Got mutation results for handshake"),this.handshakeComplete_=!0,this.listener.onHandshakeComplete()},e.prototype.writeHandshake=function(){_(this.isOpen(),"Writing handshake requires an opened stream"),_(!this.handshakeComplete_,"Handshake already completed")
var t={}
t.database=this.serializer.encodedDatabaseId,this.sendRequest(t)},e.prototype.writeMutations=function(t){var e=this
_(this.isOpen(),"Writing mutations requires an opened stream"),_(this.handshakeComplete_,"Handshake must be complete before writing mutations"),_(this.lastStreamToken.length>0,"Trying to write mutation without a token")
var n={streamToken:this.lastStreamToken,writes:t.map(function(t){return e.serializer.toMutation(t)})}
this.sendRequest(n)},e}(_r),Er=function(){function t(t,e,n,r){this.queue=t,this.connection=e,this.credentials=n,this.serializer=r}return t.prototype.newPersistentWriteStream=function(t){return new wr(this.queue,this.connection,this.credentials,this.serializer,t)},t.prototype.newPersistentWatchStream=function(t){return new br(this.queue,this.connection,this.credentials,this.serializer,t)},t.prototype.commit=function(t){var e=this,n={database:this.serializer.encodedDatabaseId,writes:t.map(function(t){return e.serializer.toMutation(t)})}
return this.invokeRPC("Commit",n).then(function(t){return e.serializer.fromWriteResults(t.writeResults,t.commitTime)})},t.prototype.lookup=function(t){var e=this,n={database:this.serializer.encodedDatabaseId,documents:t.map(function(t){return e.serializer.toName(t)})}
return this.invokeStreamingRPC("BatchGetDocuments",n).then(function(n){var r=Rt()
n.forEach(function(t){var n=e.serializer.fromMaybeDocument(t)
r=r.insert(n.key,n)})
var i=[]
return t.forEach(function(t){var e=r.get(t)
_(!!e,"Missing entity in write response for "+t),i.push(e)}),i})},t.prototype.invokeRPC=function(t,e){var n=this
return this.credentials.getToken().then(function(r){return n.connection.invokeRPC(t,e,r)}).catch(function(t){throw t.code===E.UNAUTHENTICATED&&n.credentials.invalidateToken(),t})},t.prototype.invokeStreamingRPC=function(t,e){var n=this
return this.credentials.getToken().then(function(r){return n.connection.invokeStreamingRPC(t,e,r)}).catch(function(t){throw t.code===E.UNAUTHENTICATED&&n.credentials.invalidateToken(),t})},t}(),Tr=function(){function t(t){this.datastore=t,this.readVersions=Lt(),this.mutations=[],this.committed=!1}return t.prototype.recordVersion=function(t){var e
if(t instanceof de)e=t.version
else{if(!(t instanceof ye))throw g("Document in a transaction was a "+t.constructor.name)
e=Tt.forDeletedDoc()}var n=this.readVersions.get(t.key)
if(null!==n){if(!e.isEqual(n))throw new T(E.ABORTED,"Document version changed between two reads.")}else this.readVersions=this.readVersions.insert(t.key,e)},t.prototype.lookup=function(t){var e=this
if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.")
return this.datastore.lookup(t).then(function(t){return t.forEach(function(t){t instanceof ye||t instanceof de?e.recordVersion(t):g("Document in a transaction was a "+t.constructor.name)}),t})},t.prototype.write=function(t){this.ensureCommitNotCalled(),this.mutations=this.mutations.concat(t)},t.prototype.precondition=function(t){var e=this.readVersions.get(t)
return e?jn.updateTime(e):jn.NONE},t.prototype.preconditionForUpdate=function(t){var e=this.readVersions.get(t)
if(e&&e.isEqual(Tt.forDeletedDoc()))throw new T(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.")
return e?jn.updateTime(e):jn.exists(!0)},t.prototype.set=function(t,e){this.write(e.toMutations(t,this.precondition(t)))},t.prototype.update=function(t,e){try{this.write(e.toMutations(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}},t.prototype.delete=function(t){this.write([new Hn(t,this.precondition(t))]),this.readVersions=this.readVersions.insert(t,Tt.forDeletedDoc())},t.prototype.commit=function(){var t=this
if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError
var e=this.readVersions
if(this.mutations.forEach(function(t){e=e.remove(t.key)}),!e.isEmpty())throw new T(E.INVALID_ARGUMENT,"Every document read in a transaction must also be written.")
return this.datastore.commit(this.mutations).then(function(){t.committed=!0})},t.prototype.ensureCommitNotCalled=function(){_(!this.committed,"A transaction object cannot be used after its update callback has been invoked.")},t}()
!function(t){t[t.Unknown=0]="Unknown",t[t.Online=1]="Online",t[t.Offline=2]="Offline"}(dr||(dr={})),function(t){t[t.RemoteStore=0]="RemoteStore",t[t.SharedClientState=1]="SharedClientState"}(yr||(yr={}))
var Sr,Ir=function(){function t(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state=dr.Unknown,this.watchStreamFailures=0,this.onlineStateTimer=null,this.shouldWarnClientIsOffline=!0}return t.prototype.handleWatchStreamStart=function(){var t=this
0===this.watchStreamFailures&&(this.setAndBroadcast(dr.Unknown),_(null===this.onlineStateTimer,"onlineStateTimer shouldn't be started yet"),this.onlineStateTimer=this.asyncQueue.enqueueAfterDelay(Z.OnlineStateTimeout,1e4,function(){return t.onlineStateTimer=null,_(t.state===dr.Unknown,"Timer should be canceled if we transitioned to a different state."),t.logClientOfflineWarningIfNecessary("Backend didn't respond within 10 seconds."),t.setAndBroadcast(dr.Offline),Promise.resolve()}))},t.prototype.handleWatchStreamFailure=function(t){this.state===dr.Online?(this.setAndBroadcast(dr.Unknown),_(0===this.watchStreamFailures,"watchStreamFailures must be 0"),_(null===this.onlineStateTimer,"onlineStateTimer must be null")):(this.watchStreamFailures++,this.watchStreamFailures>=1&&(this.clearOnlineStateTimer(),this.logClientOfflineWarningIfNecessary("Connection failed 1 times. Most recent error: "+t.toString()),this.setAndBroadcast(dr.Offline)))},t.prototype.set=function(t){this.clearOnlineStateTimer(),this.watchStreamFailures=0,t===dr.Online&&(this.shouldWarnClientIsOffline=!1),this.setAndBroadcast(t)},t.prototype.setAndBroadcast=function(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))},t.prototype.logClientOfflineWarningIfNecessary=function(t){var e="Could not reach Cloud Firestore backend. "+t+"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend."
this.shouldWarnClientIsOffline?(m(e),this.shouldWarnClientIsOffline=!1):y("OnlineStateTracker",e)},t.prototype.clearOnlineStateTimer=function(){null!==this.onlineStateTimer&&(this.onlineStateTimer.cancel(),this.onlineStateTimer=null)},t}()
function Cr(t){switch(t){case E.OK:return g("Treated status OK as error")
case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1
case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0
default:return g("Unknown status code: "+t)}}function Nr(t){if(void 0===t)return m("GRPC error has no .code"),E.UNKNOWN
switch(t){case Sr.OK:return E.OK
case Sr.CANCELLED:return E.CANCELLED
case Sr.UNKNOWN:return E.UNKNOWN
case Sr.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED
case Sr.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED
case Sr.INTERNAL:return E.INTERNAL
case Sr.UNAVAILABLE:return E.UNAVAILABLE
case Sr.UNAUTHENTICATED:return E.UNAUTHENTICATED
case Sr.INVALID_ARGUMENT:return E.INVALID_ARGUMENT
case Sr.NOT_FOUND:return E.NOT_FOUND
case Sr.ALREADY_EXISTS:return E.ALREADY_EXISTS
case Sr.PERMISSION_DENIED:return E.PERMISSION_DENIED
case Sr.FAILED_PRECONDITION:return E.FAILED_PRECONDITION
case Sr.ABORTED:return E.ABORTED
case Sr.OUT_OF_RANGE:return E.OUT_OF_RANGE
case Sr.UNIMPLEMENTED:return E.UNIMPLEMENTED
case Sr.DATA_LOSS:return E.DATA_LOSS
default:return g("Unknown status code: "+t)}}function kr(t){if(void 0===t)return Sr.OK
switch(t){case E.OK:return Sr.OK
case E.CANCELLED:return Sr.CANCELLED
case E.UNKNOWN:return Sr.UNKNOWN
case E.DEADLINE_EXCEEDED:return Sr.DEADLINE_EXCEEDED
case E.RESOURCE_EXHAUSTED:return Sr.RESOURCE_EXHAUSTED
case E.INTERNAL:return Sr.INTERNAL
case E.UNAVAILABLE:return Sr.UNAVAILABLE
case E.UNAUTHENTICATED:return Sr.UNAUTHENTICATED
case E.INVALID_ARGUMENT:return Sr.INVALID_ARGUMENT
case E.NOT_FOUND:return Sr.NOT_FOUND
case E.ALREADY_EXISTS:return Sr.ALREADY_EXISTS
case E.PERMISSION_DENIED:return Sr.PERMISSION_DENIED
case E.FAILED_PRECONDITION:return Sr.FAILED_PRECONDITION
case E.ABORTED:return Sr.ABORTED
case E.OUT_OF_RANGE:return Sr.OUT_OF_RANGE
case E.UNIMPLEMENTED:return Sr.UNIMPLEMENTED
case E.DATA_LOSS:return Sr.DATA_LOSS
default:return g("Unknown status code: "+t)}}!function(t){t[t.OK=0]="OK",t[t.CANCELLED=1]="CANCELLED",t[t.UNKNOWN=2]="UNKNOWN",t[t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",t[t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",t[t.NOT_FOUND=5]="NOT_FOUND",t[t.ALREADY_EXISTS=6]="ALREADY_EXISTS",t[t.PERMISSION_DENIED=7]="PERMISSION_DENIED",t[t.UNAUTHENTICATED=16]="UNAUTHENTICATED",t[t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",t[t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",t[t.ABORTED=10]="ABORTED",t[t.OUT_OF_RANGE=11]="OUT_OF_RANGE",t[t.UNIMPLEMENTED=12]="UNIMPLEMENTED",t[t.INTERNAL=13]="INTERNAL",t[t.UNAVAILABLE=14]="UNAVAILABLE",t[t.DATA_LOSS=15]="DATA_LOSS"}(Sr||(Sr={}))
var Ar,Dr,Rr=function(){function t(t){this.comparator=t?function(e,n){return t(e,n)||ht.comparator(e.key,n.key)}:function(t,e){return ht.comparator(t.key,e.key)},this.keyedMap=xt(),this.sortedSet=new St(this.comparator)}return t.emptySet=function(e){return new t(e.comparator)},t.prototype.has=function(t){return null!=this.keyedMap.get(t)},t.prototype.get=function(t){return this.keyedMap.get(t)},t.prototype.first=function(){return this.sortedSet.minKey()},t.prototype.last=function(){return this.sortedSet.maxKey()},t.prototype.isEmpty=function(){return this.sortedSet.isEmpty()},t.prototype.indexOf=function(t){var e=this.keyedMap.get(t)
return e?this.sortedSet.indexOf(e):-1},Object.defineProperty(t.prototype,"size",{get:function(){return this.sortedSet.size},enumerable:!0,configurable:!0}),t.prototype.forEach=function(t){this.sortedSet.inorderTraversal(function(e,n){return t(e),!1})},t.prototype.add=function(t){var e=this.delete(t.key)
return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))},t.prototype.delete=function(t){var e=this.get(t)
return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this},t.prototype.isEqual=function(e){if(!(e instanceof t))return!1
if(this.size!==e.size)return!1
for(var n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();n.hasNext();){var i=n.getNext().key,o=r.getNext().key
if(!i.isEqual(o))return!1}return!0},t.prototype.toString=function(){var t=[]
return this.forEach(function(e){t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"},t.prototype.copy=function(e,n){var r=new t
return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r},t}()
!function(t){t[t.Added=0]="Added",t[t.Removed=1]="Removed",t[t.Modified=2]="Modified",t[t.Metadata=3]="Metadata"}(Ar||(Ar={})),function(t){t[t.Local=0]="Local",t[t.Synced=1]="Synced"}(Dr||(Dr={}))
var Pr,Or=function(){function t(){this.changeMap=new St(ht.comparator)}return t.prototype.track=function(t){var e=t.doc.key,n=this.changeMap.get(e)
n?t.type!==Ar.Added&&n.type===Ar.Metadata?this.changeMap=this.changeMap.insert(e,t):t.type===Ar.Metadata&&n.type!==Ar.Removed?this.changeMap=this.changeMap.insert(e,{type:n.type,doc:t.doc}):t.type===Ar.Modified&&n.type===Ar.Modified?this.changeMap=this.changeMap.insert(e,{type:Ar.Modified,doc:t.doc}):t.type===Ar.Modified&&n.type===Ar.Added?this.changeMap=this.changeMap.insert(e,{type:Ar.Added,doc:t.doc}):t.type===Ar.Removed&&n.type===Ar.Added?this.changeMap=this.changeMap.remove(e):t.type===Ar.Removed&&n.type===Ar.Modified?this.changeMap=this.changeMap.insert(e,{type:Ar.Removed,doc:n.doc}):t.type===Ar.Added&&n.type===Ar.Removed?this.changeMap=this.changeMap.insert(e,{type:Ar.Modified,doc:t.doc}):g("unsupported combination of changes: "+JSON.stringify(t)+" after "+JSON.stringify(n)):this.changeMap=this.changeMap.insert(e,t)},t.prototype.getChanges=function(){var t=[]
return this.changeMap.inorderTraversal(function(e,n){t.push(n)}),t},t}(),xr=function(){function t(t,e,n,r,i,o,a,s){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=s}return t.fromInitialDocuments=function(e,n,r,i){var o=[]
return n.forEach(function(t){o.push({type:Ar.Added,doc:t})}),new t(e,n,Rr.emptySet(n),o,r,i,!0,!1)},Object.defineProperty(t.prototype,"hasPendingWrites",{get:function(){return!this.mutatedKeys.isEmpty()},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&this.query.isEqual(t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1
var e=this.docChanges,n=t.docChanges
if(e.length!==n.length)return!1
for(var r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1
return!0},t}(),Mr=function(){function t(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}return t.createSynthesizedRemoteEventForCurrentChange=function(e,n){var r,i=((r={})[e]=Lr.createSynthesizedTargetChangeForCurrentChange(e,n),r)
return new t(Tt.MIN,i,Vt(),Rt(),Ut())},t}(),Lr=function(){function t(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}return t.createSynthesizedTargetChangeForCurrentChange=function(e,n){return new t(w(),n,Ut(),Ut(),Ut())},t}(),Fr=function(t,e,n,r){this.updatedTargetIds=t,this.removedTargetIds=e,this.key=n,this.newDoc=r},Ur=function(t,e){this.targetId=t,this.existenceFilter=e}
!function(t){t[t.NoChange=0]="NoChange",t[t.Added=1]="Added",t[t.Removed=2]="Removed",t[t.Current=3]="Current",t[t.Reset=4]="Reset"}(Pr||(Pr={}))
var qr=function(t,e,n,r){void 0===n&&(n=w()),void 0===r&&(r=null),this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r},Vr=function(){function t(){this.pendingResponses=0,this.documentChanges=Wr(),this._resumeToken=w(),this._current=!1,this._hasPendingChanges=!0}return Object.defineProperty(t.prototype,"current",{get:function(){return this._current},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"resumeToken",{get:function(){return this._resumeToken},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPending",{get:function(){return 0!==this.pendingResponses},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasPendingChanges",{get:function(){return this._hasPendingChanges},enumerable:!0,configurable:!0}),t.prototype.updateResumeToken=function(t){t.length>0&&(this._hasPendingChanges=!0,this._resumeToken=t)},t.prototype.toTargetChange=function(){var t=Ut(),e=Ut(),n=Ut()
return this.documentChanges.forEach(function(r,i){switch(i){case Ar.Added:t=t.add(r)
break
case Ar.Modified:e=e.add(r)
break
case Ar.Removed:n=n.add(r)
break
default:g("Encountered invalid change type: "+i)}}),new Lr(this._resumeToken,this._current,t,e,n)},t.prototype.clearPendingChanges=function(){this._hasPendingChanges=!1,this.documentChanges=Wr()},t.prototype.addDocumentChange=function(t,e){this._hasPendingChanges=!0,this.documentChanges=this.documentChanges.insert(t,e)},t.prototype.removeDocumentChange=function(t){this._hasPendingChanges=!0,this.documentChanges=this.documentChanges.remove(t)},t.prototype.recordPendingTargetRequest=function(){this.pendingResponses+=1},t.prototype.recordTargetResponse=function(){this.pendingResponses-=1},t.prototype.markCurrent=function(){this._hasPendingChanges=!0,this._current=!0},t}(),Br=function(){function t(t){this.metadataProvider=t,this.targetStates={},this.pendingDocumentUpdates=Rt(),this.pendingDocumentTargetMapping=jr(),this.pendingTargetResets=new kt(z)}return t.prototype.handleDocumentChange=function(t){var e,n,r,i
try{for(var o=s.__values(t.updatedTargetIds),a=o.next();!a.done;a=o.next()){var u=a.value
t.newDoc instanceof de?this.addDocumentToTarget(u,t.newDoc):t.newDoc instanceof ye&&this.removeDocumentFromTarget(u,t.key,t.newDoc)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}try{for(var c=s.__values(t.removedTargetIds),h=c.next();!h.done;h=c.next())u=h.value,this.removeDocumentFromTarget(u,t.key,t.newDoc)}catch(t){r={error:t}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}},t.prototype.handleTargetChange=function(t){var e=this
this.forEachTarget(t,function(n){var r=e.ensureTargetState(n)
switch(t.state){case Pr.NoChange:e.isActiveTarget(n)&&r.updateResumeToken(t.resumeToken)
break
case Pr.Added:r.recordTargetResponse(),r.isPending||r.clearPendingChanges(),r.updateResumeToken(t.resumeToken)
break
case Pr.Removed:r.recordTargetResponse(),r.isPending||e.removeTarget(n),_(!t.cause,"WatchChangeAggregator does not handle errored targets")
break
case Pr.Current:e.isActiveTarget(n)&&(r.markCurrent(),r.updateResumeToken(t.resumeToken))
break
case Pr.Reset:e.isActiveTarget(n)&&(e.resetTarget(n),r.updateResumeToken(t.resumeToken))
break
default:g("Unknown target watch change state: "+t.state)}})},t.prototype.forEachTarget=function(t,e){t.targetIds.length>0?t.targetIds.forEach(e):N(this.targetStates,e)},t.prototype.handleExistenceFilter=function(t){var e=t.targetId,n=t.existenceFilter.count,r=this.queryDataForActiveTarget(e)
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
return!n||n.purpose===Ke.LimboResolution||(i=!1,!1)}),i&&(r=r.add(t))})
var i=new Mr(t,n,this.pendingTargetResets,this.pendingDocumentUpdates,r)
return this.pendingDocumentUpdates=Rt(),this.pendingDocumentTargetMapping=jr(),this.pendingTargetResets=new kt(z),i},t.prototype.addDocumentToTarget=function(t,e){if(this.isActiveTarget(t)){var n=this.targetContainsDocument(t,e.key)?Ar.Modified:Ar.Added
this.ensureTargetState(t).addDocumentChange(e.key,n),this.pendingDocumentUpdates=this.pendingDocumentUpdates.insert(e.key,e),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(e.key,this.ensureDocumentTargetMapping(e.key).add(t))}},t.prototype.removeDocumentFromTarget=function(t,e,n){if(this.isActiveTarget(t)){var r=this.ensureTargetState(t)
this.targetContainsDocument(t,e)?r.addDocumentChange(e,Ar.Removed):r.removeDocumentChange(e),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(e,this.ensureDocumentTargetMapping(e).delete(t)),n&&(this.pendingDocumentUpdates=this.pendingDocumentUpdates.insert(e,n))}},t.prototype.removeTarget=function(t){delete this.targetStates[t]},t.prototype.getCurrentDocumentCountForTarget=function(t){var e=this.ensureTargetState(t).toTargetChange()
return this.metadataProvider.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size},t.prototype.recordPendingTargetRequest=function(t){this.ensureTargetState(t).recordPendingTargetRequest()},t.prototype.ensureTargetState=function(t){return this.targetStates[t]||(this.targetStates[t]=new Vr),this.targetStates[t]},t.prototype.ensureDocumentTargetMapping=function(t){var e=this.pendingDocumentTargetMapping.get(t)
return e||(e=new kt(z),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(t,e)),e},t.prototype.isActiveTarget=function(t){return null!==this.queryDataForActiveTarget(t)},t.prototype.queryDataForActiveTarget=function(t){var e=this.targetStates[t]
return e&&e.isPending?null:this.metadataProvider.getQueryDataForTarget(t)},t.prototype.resetTarget=function(t){var e=this
_(!this.targetStates[t].isPending,"Should only reset active targets"),this.targetStates[t]=new Vr,this.metadataProvider.getRemoteKeysForTarget(t).forEach(function(n){e.removeDocumentFromTarget(t,n,null)})},t.prototype.targetContainsDocument=function(t,e){return this.metadataProvider.getRemoteKeysForTarget(t).has(e)},t}()
function jr(){return new St(ht.comparator)}function Wr(){return new St(ht.comparator)}var Qr="RemoteStore",Kr=function(){function t(t,e,n,r,i){var o=this
this.localStore=t,this.datastore=e,this.writePipeline=[],this.listenTargets={},this.watchChangeAggregator=null,this.networkEnabled=!1,this.isPrimary=!1,this.connectivityMonitor=i,this.connectivityMonitor.addCallback(function(t){n.enqueueAndForget(function(){return s.__awaiter(o,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.canUseNetwork()?(y(Qr,"Restarting streams for network reachability change."),[4,this.restartNetwork()]):[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})})}),this.onlineStateTracker=new Ir(n,r),this.watchStream=this.datastore.newPersistentWatchStream({onOpen:this.onWatchStreamOpen.bind(this),onClose:this.onWatchStreamClose.bind(this),onWatchChange:this.onWatchStreamChange.bind(this)}),this.writeStream=this.datastore.newPersistentWriteStream({onOpen:this.onWriteStreamOpen.bind(this),onClose:this.onWriteStreamClose.bind(this),onHandshakeComplete:this.onWriteHandshakeComplete.bind(this),onMutationResult:this.onMutationResult.bind(this)})}return t.prototype.start=function(){return this.enableNetwork()},t.prototype.enableNetwork=function(){return s.__awaiter(this,void 0,void 0,function(){var t
return s.__generator(this,function(e){switch(e.label){case 0:return this.networkEnabled=!0,this.canUseNetwork()?(t=this.writeStream,[4,this.localStore.getLastStreamToken()]):[3,3]
case 1:return t.lastStreamToken=e.sent(),this.shouldStartWatchStream()?this.startWatchStream():this.onlineStateTracker.set(dr.Unknown),[4,this.fillWritePipeline()]
case 2:e.sent(),e.label=3
case 3:return[2]}})})},t.prototype.disableNetwork=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.networkEnabled=!1,[4,this.disableNetworkInternal()]
case 1:return t.sent(),this.onlineStateTracker.set(dr.Offline),[2]}})})},t.prototype.disableNetworkInternal=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return[4,this.writeStream.stop()]
case 1:return t.sent(),[4,this.watchStream.stop()]
case 2:return t.sent(),this.writePipeline.length>0&&(y(Qr,"Stopping write stream with "+this.writePipeline.length+" pending writes"),this.writePipeline=[]),this.cleanUpWatchStreamState(),[2]}})})},t.prototype.shutdown=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return y(Qr,"RemoteStore shutting down."),this.networkEnabled=!1,[4,this.disableNetworkInternal()]
case 1:return t.sent(),this.connectivityMonitor.shutdown(),this.onlineStateTracker.set(dr.Unknown),[2]}})})},t.prototype.listen=function(t){_(!I(this.listenTargets,t.targetId),"listen called with duplicate targetId!"),this.listenTargets[t.targetId]=t,this.shouldStartWatchStream()?this.startWatchStream():this.watchStream.isOpen()&&this.sendWatchRequest(t)},t.prototype.unlisten=function(t){_(I(this.listenTargets,t),"unlisten called without assigned target ID!"),delete this.listenTargets[t],this.watchStream.isOpen()&&this.sendUnwatchRequest(t),A(this.listenTargets)&&(this.watchStream.isOpen()?this.watchStream.markIdle():this.canUseNetwork()&&this.onlineStateTracker.set(dr.Unknown))},t.prototype.getQueryDataForTarget=function(t){return this.listenTargets[t]||null},t.prototype.getRemoteKeysForTarget=function(t){return this.syncEngine.getRemoteKeysForTarget(t)},t.prototype.sendWatchRequest=function(t){this.watchChangeAggregator.recordPendingTargetRequest(t.targetId),this.watchStream.watch(t)},t.prototype.sendUnwatchRequest=function(t){this.watchChangeAggregator.recordPendingTargetRequest(t),this.watchStream.unwatch(t)},t.prototype.startWatchStream=function(){_(this.shouldStartWatchStream(),"startWatchStream() called when shouldStartWatchStream() is false."),this.watchChangeAggregator=new Br(this),this.watchStream.start(),this.onlineStateTracker.handleWatchStreamStart()},t.prototype.shouldStartWatchStream=function(){return this.canUseNetwork()&&!this.watchStream.isStarted()&&!A(this.listenTargets)},t.prototype.canUseNetwork=function(){return this.isPrimary&&this.networkEnabled},t.prototype.cleanUpWatchStreamState=function(){this.watchChangeAggregator=null},t.prototype.onWatchStreamOpen=function(){return s.__awaiter(this,void 0,void 0,function(){var t=this
return s.__generator(this,function(e){return N(this.listenTargets,function(e,n){t.sendWatchRequest(n)}),[2]})})},t.prototype.onWatchStreamClose=function(t){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){return void 0===t&&_(!this.shouldStartWatchStream(),"Watch stream was stopped gracefully while still needed."),this.cleanUpWatchStreamState(),this.shouldStartWatchStream()?(this.onlineStateTracker.handleWatchStreamFailure(t),this.startWatchStream()):this.onlineStateTracker.set(dr.Unknown),[2]})})},t.prototype.onWatchStreamChange=function(t,e){return s.__awaiter(this,void 0,void 0,function(){var n
return s.__generator(this,function(r){switch(r.label){case 0:return this.onlineStateTracker.set(dr.Online),t instanceof qr&&t.state===Pr.Removed&&t.cause?[2,this.handleTargetError(t)]:(t instanceof Fr?this.watchChangeAggregator.handleDocumentChange(t):t instanceof Ur?this.watchChangeAggregator.handleExistenceFilter(t):(_(t instanceof qr,"Expected watchChange to be an instance of WatchTargetChange"),this.watchChangeAggregator.handleTargetChange(t)),e.isEqual(Tt.MIN)?[3,3]:[4,this.localStore.getLastRemoteSnapshotVersion()])
case 1:return n=r.sent(),e.compareTo(n)>=0?[4,this.raiseWatchSnapshot(e)]:[3,3]
case 2:r.sent(),r.label=3
case 3:return[2]}})})},t.prototype.raiseWatchSnapshot=function(t){var e=this
_(!t.isEqual(Tt.MIN),"Can't raise event for unknown SnapshotVersion")
var n=this.watchChangeAggregator.createRemoteEvent(t)
return N(n.targetChanges,function(n,r){if(r.resumeToken.length>0){var i=e.listenTargets[n]
i&&(e.listenTargets[n]=i.copy({resumeToken:r.resumeToken,snapshotVersion:t}))}}),n.targetMismatches.forEach(function(t){var n=e.listenTargets[t]
if(n){e.listenTargets[t]=n.copy({resumeToken:w()}),e.sendUnwatchRequest(t)
var r=new tn(n.query,t,Ke.ExistenceFilterMismatch,n.sequenceNumber)
e.sendWatchRequest(r)}}),this.syncEngine.applyRemoteEvent(n)},t.prototype.handleTargetError=function(t){var e=this
_(!!t.cause,"Handling target error without a cause")
var n=t.cause,r=Promise.resolve()
return t.targetIds.forEach(function(t){r=r.then(function(){return s.__awaiter(e,void 0,void 0,function(){return s.__generator(this,function(e){return I(this.listenTargets,t)?(delete this.listenTargets[t],this.watchChangeAggregator.removeTarget(t),[2,this.syncEngine.rejectListen(t,n)]):[2]})})})}),r},t.prototype.fillWritePipeline=function(){return s.__awaiter(this,void 0,void 0,function(){var t,e
return s.__generator(this,function(n){switch(n.label){case 0:return this.canAddToWritePipeline()?(t=this.writePipeline.length>0?this.writePipeline[this.writePipeline.length-1].batchId:-1,[4,this.localStore.nextMutationBatch(t)]):[3,4]
case 1:return null!==(e=n.sent())?[3,2]:(0===this.writePipeline.length&&this.writeStream.markIdle(),[3,4])
case 2:return this.addToWritePipeline(e),[4,this.fillWritePipeline()]
case 3:n.sent(),n.label=4
case 4:return this.shouldStartWriteStream()&&this.startWriteStream(),[2]}})})},t.prototype.canAddToWritePipeline=function(){return this.canUseNetwork()&&this.writePipeline.length<10},t.prototype.outstandingWrites=function(){return this.writePipeline.length},t.prototype.addToWritePipeline=function(t){_(this.canAddToWritePipeline(),"addToWritePipeline called when pipeline is full"),this.writePipeline.push(t),this.writeStream.isOpen()&&this.writeStream.handshakeComplete&&this.writeStream.writeMutations(t.mutations)},t.prototype.shouldStartWriteStream=function(){return this.canUseNetwork()&&!this.writeStream.isStarted()&&this.writePipeline.length>0},t.prototype.startWriteStream=function(){_(this.shouldStartWriteStream(),"startWriteStream() called when shouldStartWriteStream() is false."),this.writeStream.start()},t.prototype.onWriteStreamOpen=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){return this.writeStream.writeHandshake(),[2]})})},t.prototype.onWriteHandshakeComplete=function(){var t=this
return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function(){var e,n
try{for(var r=s.__values(t.writePipeline),i=r.next();!i.done;i=r.next()){var o=i.value
t.writeStream.writeMutations(o.mutations)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}).catch(yn)},t.prototype.onMutationResult=function(t,e){var n=this
_(this.writePipeline.length>0,"Got result for empty write pipeline")
var r=this.writePipeline.shift(),i=jt.from(r,t,e,this.writeStream.lastStreamToken)
return this.syncEngine.applySuccessfulWrite(i).then(function(){return n.fillWritePipeline()})},t.prototype.onWriteStreamClose=function(t){return s.__awaiter(this,void 0,void 0,function(){var e=this
return s.__generator(this,function(n){return void 0===t&&_(!this.shouldStartWriteStream(),"Write stream was stopped gracefully while still needed."),t&&this.writePipeline.length>0?[2,(this.writeStream.handshakeComplete?this.handleWriteError(t):this.handleHandshakeError(t)).then(function(){e.shouldStartWriteStream()&&e.startWriteStream()})]:[2]})})},t.prototype.handleHandshakeError=function(t){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){return Cr(t.code)?(y(Qr,"RemoteStore error before completed handshake; resetting stream token: ",this.writeStream.lastStreamToken),this.writeStream.lastStreamToken=w(),[2,this.localStore.setLastStreamToken(w()).catch(yn)]):[2]})})},t.prototype.handleWriteError=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n=this
return s.__generator(this,function(r){return Cr(i=t.code)&&i!==E.ABORTED?(e=this.writePipeline.shift(),this.writeStream.inhibitBackoff(),[2,this.syncEngine.rejectFailedWrite(e.batchId,t).then(function(){return n.fillWritePipeline()})]):[2]
var i})})},t.prototype.createTransaction=function(){return new Tr(this.datastore)},t.prototype.restartNetwork=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.networkEnabled=!1,[4,this.disableNetworkInternal()]
case 1:return t.sent(),this.onlineStateTracker.set(dr.Unknown),[4,this.enableNetwork()]
case 2:return t.sent(),[2]}})})},t.prototype.handleCredentialChange=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.canUseNetwork()?(y(Qr,"RemoteStore restarting streams for new credential"),[4,this.restartNetwork()]):[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})},t.prototype.applyPrimaryState=function(t){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){switch(e.label){case 0:return this.isPrimary=t,t&&this.networkEnabled?[4,this.enableNetwork()]:[3,2]
case 1:return e.sent(),[3,4]
case 2:return t?[3,4]:[4,this.disableNetworkInternal()]
case 3:e.sent(),this.onlineStateTracker.set(dr.Unknown),e.label=4
case 4:return[2]}})})},t}(),Gr=function(){function t(t,e){if(R("GeoPoint",arguments,2),x("GeoPoint","number",1,t),x("GeoPoint","number",2,e),!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t)
if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e)
this._lat=t,this._long=e}return Object.defineProperty(t.prototype,"latitude",{get:function(){return this._lat},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"longitude",{get:function(){return this._long},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(t){return this._lat===t._lat&&this._long===t._long},t.prototype._compareTo=function(t){return z(this._lat,t._lat)||z(this._long,t._long)},t}(),Hr=function(){function t(t,e,n,r,i,o,a){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o=null),void 0===a&&(a=null),this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.memoizedCanonicalId=null,this.memoizedOrderBy=null,this.startAt&&this.assertValidBound(this.startAt),this.endAt&&this.assertValidBound(this.endAt)}return t.atPath=function(e){return new t(e)},Object.defineProperty(t.prototype,"orderBy",{get:function(){var t,e
if(null===this.memoizedOrderBy){var n=this.getInequalityFilterField(),r=this.getFirstOrderByField()
if(null!==n&&null===r)n.isKeyField()?this.memoizedOrderBy=[oi]:this.memoizedOrderBy=[new ii(n),oi]
else{_(null===n||null!==r&&n.isEqual(r),"First orderBy should match inequality field."),this.memoizedOrderBy=[]
var i=!1
try{for(var o=s.__values(this.explicitOrderBy),a=o.next();!a.done;a=o.next()){var u=a.value
this.memoizedOrderBy.push(u),u.field.isKeyField()&&(i=!0)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}if(!i){var c=this.explicitOrderBy.length>0?this.explicitOrderBy[this.explicitOrderBy.length-1].dir:ni.ASCENDING
this.memoizedOrderBy.push(c===ni.ASCENDING?oi:ai)}}}return this.memoizedOrderBy},enumerable:!0,configurable:!0}),t.prototype.addFilter=function(e){_(null==this.getInequalityFilterField()||!(e instanceof Xr)||!e.isInequality()||e.field.isEqual(this.getInequalityFilterField()),"Query must only have one inequality field."),_(!this.isDocumentQuery(),"No filtering allowed for document query")
var n=this.filters.concat([e])
return new t(this.path,this.collectionGroup,this.explicitOrderBy.slice(),n,this.limit,this.startAt,this.endAt)},t.prototype.addOrderBy=function(e){_(!this.startAt&&!this.endAt,"Bounds must be set after orderBy")
var n=this.explicitOrderBy.concat([e])
return new t(this.path,this.collectionGroup,n,this.filters.slice(),this.limit,this.startAt,this.endAt)},t.prototype.withLimit=function(e){return new t(this.path,this.collectionGroup,this.explicitOrderBy.slice(),this.filters.slice(),e,this.startAt,this.endAt)},t.prototype.withStartAt=function(e){return new t(this.path,this.collectionGroup,this.explicitOrderBy.slice(),this.filters.slice(),this.limit,e,this.endAt)},t.prototype.withEndAt=function(e){return new t(this.path,this.collectionGroup,this.explicitOrderBy.slice(),this.filters.slice(),this.limit,this.startAt,e)},t.prototype.asCollectionQueryAtPath=function(e){return new t(e,null,this.explicitOrderBy.slice(),this.filters.slice(),this.limit,this.startAt,this.endAt)},t.prototype.canonicalId=function(){var t,e,n,r
if(null===this.memoizedCanonicalId){var i=this.path.canonicalString()
this.isCollectionGroupQuery()&&(i+="|cg:"+this.collectionGroup),i+="|f:"
try{for(var o=s.__values(this.filters),a=o.next();!a.done;a=o.next())i+=a.value.canonicalId(),i+=","}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}i+="|ob:"
try{for(var u=s.__values(this.orderBy),c=u.next();!c.done;c=u.next())i+=c.value.canonicalId(),i+=","}catch(t){n={error:t}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}hr(this.limit)||(i+="|l:",i+=this.limit),this.startAt&&(i+="|lb:",i+=this.startAt.canonicalId()),this.endAt&&(i+="|ub:",i+=this.endAt.canonicalId()),this.memoizedCanonicalId=i}return this.memoizedCanonicalId},t.prototype.toString=function(){var t="Query("+this.path.canonicalString()
return this.isCollectionGroupQuery()&&(t+=" collectionGroup="+this.collectionGroup),this.filters.length>0&&(t+=", filters: ["+this.filters.join(", ")+"]"),hr(this.limit)||(t+=", limit: "+this.limit),this.explicitOrderBy.length>0&&(t+=", orderBy: ["+this.explicitOrderBy.join(", ")+"]"),this.startAt&&(t+=", startAt: "+this.startAt.canonicalId()),this.endAt&&(t+=", endAt: "+this.endAt.canonicalId()),t+")"},t.prototype.isEqual=function(t){if(this.limit!==t.limit)return!1
if(this.orderBy.length!==t.orderBy.length)return!1
for(var e=0;e<this.orderBy.length;e++)if(!this.orderBy[e].isEqual(t.orderBy[e]))return!1
if(this.filters.length!==t.filters.length)return!1
for(e=0;e<this.filters.length;e++)if(!this.filters[e].isEqual(t.filters[e]))return!1
return this.collectionGroup===t.collectionGroup&&!!this.path.isEqual(t.path)&&!(null!==this.startAt?!this.startAt.isEqual(t.startAt):null!==t.startAt)&&(null!==this.endAt?this.endAt.isEqual(t.endAt):null===t.endAt)},t.prototype.docComparator=function(t,e){var n,r,i=!1
try{for(var o=s.__values(this.orderBy),a=o.next();!a.done;a=o.next()){var u=a.value,c=u.compare(t,e)
if(0!==c)return c
i=i||u.field.isKeyField()}}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return _(i,"orderBy used that doesn't compare on key field"),0},t.prototype.matches=function(t){return this.matchesPathAndCollectionGroup(t)&&this.matchesOrderBy(t)&&this.matchesFilters(t)&&this.matchesBounds(t)},t.prototype.hasLimit=function(){return!hr(this.limit)},t.prototype.getFirstOrderByField=function(){return this.explicitOrderBy.length>0?this.explicitOrderBy[0].field:null},t.prototype.getInequalityFilterField=function(){var t,e
try{for(var n=s.__values(this.filters),r=n.next();!r.done;r=n.next()){var i=r.value
if(i instanceof Xr&&i.isInequality())return i.field}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}return null},t.prototype.findFilterOperator=function(t){var e,n
try{for(var r=s.__values(this.filters),i=r.next();!i.done;i=r.next()){var o=i.value
if(o instanceof Xr&&t.indexOf(o.op)>=0)return o.op}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return null},t.prototype.isDocumentQuery=function(){return ht.isDocumentKey(this.path)&&null===this.collectionGroup&&0===this.filters.length},t.prototype.isCollectionGroupQuery=function(){return null!==this.collectionGroup},t.prototype.matchesPathAndCollectionGroup=function(t){var e=t.key.path
return null!==this.collectionGroup?t.key.hasCollectionId(this.collectionGroup)&&this.path.isPrefixOf(e):ht.isDocumentKey(this.path)?this.path.isEqual(e):this.path.isImmediateParentOf(e)},t.prototype.matchesOrderBy=function(t){var e,n
try{for(var r=s.__values(this.explicitOrderBy),i=r.next();!i.done;i=r.next()){var o=i.value
if(!o.field.isKeyField()&&null===t.field(o.field))return!1}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return!0},t.prototype.matchesFilters=function(t){var e,n
try{for(var r=s.__values(this.filters),i=r.next();!i.done;i=r.next())if(!i.value.matches(t))return!1}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return!0},t.prototype.matchesBounds=function(t){return!(this.startAt&&!this.startAt.sortsBeforeDocument(this.orderBy,t)||this.endAt&&this.endAt.sortsBeforeDocument(this.orderBy,t))},t.prototype.assertValidBound=function(t){_(t.position.length<=this.orderBy.length,"Bound is longer than orderBy")},t}(),zr=function(){},Yr=function(){function t(t){this.name=t}return t.fromString=function(e){switch(e){case"<":return t.LESS_THAN
case"<=":return t.LESS_THAN_OR_EQUAL
case"==":return t.EQUAL
case">=":return t.GREATER_THAN_OR_EQUAL
case">":return t.GREATER_THAN
case"array-contains":return t.ARRAY_CONTAINS
case"in":return t.IN
case"array-contains-any":return t.ARRAY_CONTAINS_ANY
default:return g("Unknown FieldFilter operator: "+e)}},t.prototype.toString=function(){return this.name},t.prototype.isEqual=function(t){return this.name===t.name},t.LESS_THAN=new t("<"),t.LESS_THAN_OR_EQUAL=new t("<="),t.EQUAL=new t("=="),t.GREATER_THAN=new t(">"),t.GREATER_THAN_OR_EQUAL=new t(">="),t.ARRAY_CONTAINS=new t("array-contains"),t.IN=new t("in"),t.ARRAY_CONTAINS_ANY=new t("array-contains-any"),t}(),Xr=function(t){function e(e,n,r){var i=t.call(this)||this
return i.field=e,i.op=n,i.value=r,i}return s.__extends(e,t),e.create=function(t,n,r){if(t.isKeyField())return n===Yr.IN?(_(r instanceof Un,"Comparing on key with IN, but filter value not an ArrayValue"),_(r.internalValue.every(function(t){return t instanceof Mn}),"Comparing on key with IN, but an array value was not a RefValue"),new $r(t,r)):(_(r instanceof Mn,"Comparing on key, but filter value not a RefValue"),_(n!==Yr.ARRAY_CONTAINS&&n!==Yr.ARRAY_CONTAINS_ANY,"'"+n.toString()+"' queries don't make sense on document keys."),new Jr(t,n,r))
if(r.isEqual(Sn.INSTANCE)){if(n!==Yr.EQUAL)throw new T(E.INVALID_ARGUMENT,"Invalid query. You can only perform equals comparisons on null.")
return new e(t,n,r)}if(r.isEqual(Dn.NAN)){if(n!==Yr.EQUAL)throw new T(E.INVALID_ARGUMENT,"Invalid query. You can only perform equals comparisons on NaN.")
return new e(t,n,r)}return n===Yr.ARRAY_CONTAINS?new Zr(t,r):n===Yr.IN?(_(r instanceof Un,"IN filter has invalid value: "+r.toString()),new ti(t,r)):n===Yr.ARRAY_CONTAINS_ANY?(_(r instanceof Un,"ARRAY_CONTAINS_ANY filter has invalid value: "+r.toString()),new ei(t,r)):new e(t,n,r)},e.prototype.matches=function(t){var e=t.field(this.field)
return null!==e&&this.value.typeOrder===e.typeOrder&&this.matchesComparison(e.compareTo(this.value))},e.prototype.matchesComparison=function(t){switch(this.op){case Yr.LESS_THAN:return t<0
case Yr.LESS_THAN_OR_EQUAL:return t<=0
case Yr.EQUAL:return 0===t
case Yr.GREATER_THAN:return t>0
case Yr.GREATER_THAN_OR_EQUAL:return t>=0
default:return g("Unknown FieldFilter operator: "+this.op)}},e.prototype.isInequality=function(){return[Yr.LESS_THAN,Yr.LESS_THAN_OR_EQUAL,Yr.GREATER_THAN,Yr.GREATER_THAN_OR_EQUAL].indexOf(this.op)>=0},e.prototype.canonicalId=function(){return this.field.canonicalString()+this.op.toString()+this.value.toString()},e.prototype.isEqual=function(t){return t instanceof e&&this.op.isEqual(t.op)&&this.field.isEqual(t.field)&&this.value.isEqual(t.value)},e.prototype.toString=function(){return this.field.canonicalString()+" "+this.op+" "+this.value.value()},e}(zr),Jr=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.matches=function(t){var e=this.value,n=ht.comparator(t.key,e.key)
return this.matchesComparison(n)},e}(Xr),$r=function(t){function e(e,n){var r=t.call(this,e,Yr.IN,n)||this
return r.value=n,r}return s.__extends(e,t),e.prototype.matches=function(t){return this.value.internalValue.some(function(e){return t.key.isEqual(e.key)})},e}(Xr),Zr=function(t){function e(e,n){return t.call(this,e,Yr.ARRAY_CONTAINS,n)||this}return s.__extends(e,t),e.prototype.matches=function(t){var e=t.field(this.field)
return e instanceof Un&&e.contains(this.value)},e}(Xr),ti=function(t){function e(e,n){var r=t.call(this,e,Yr.IN,n)||this
return r.value=n,r}return s.__extends(e,t),e.prototype.matches=function(t){var e=this.value,n=t.field(this.field)
return null!==n&&e.contains(n)},e}(Xr),ei=function(t){function e(e,n){var r=t.call(this,e,Yr.ARRAY_CONTAINS_ANY,n)||this
return r.value=n,r}return s.__extends(e,t),e.prototype.matches=function(t){var e=this,n=t.field(this.field)
return n instanceof Un&&n.internalValue.some(function(t){return e.value.contains(t)})},e}(Xr),ni=function(){function t(t){this.name=t}return t.prototype.toString=function(){return this.name},t.ASCENDING=new t("asc"),t.DESCENDING=new t("desc"),t}(),ri=function(){function t(t,e){this.position=t,this.before=e}return t.prototype.canonicalId=function(){var t,e,n=this.before?"b:":"a:"
try{for(var r=s.__values(this.position),i=r.next();!i.done;i=r.next())n+=i.value.toString()}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}return n},t.prototype.sortsBeforeDocument=function(t,e){_(this.position.length<=t.length,"Bound has more components than query's orderBy")
for(var n=0,r=0;r<this.position.length;r++){var i=t[r],o=this.position[r]
if(i.field.isKeyField())_(o instanceof Mn,"Bound has a non-key value where the key path is being used."),n=ht.comparator(o.key,e.key)
else{var a=e.field(i.field)
_(void 0!==a,"Field should exist since document matched the orderBy already."),n=o.compareTo(a)}if(i.dir===ni.DESCENDING&&(n*=-1),0!==n)break}return this.before?n<=0:n<0},t.prototype.isEqual=function(t){if(null===t)return!1
if(this.before!==t.before||this.position.length!==t.position.length)return!1
for(var e=0;e<this.position.length;e++){var n=this.position[e],r=t.position[e]
if(!n.isEqual(r))return!1}return!0},t}(),ii=function(){function t(t,e){this.field=t,void 0===e&&(e=ni.ASCENDING),this.dir=e,this.isKeyOrderBy=t.isKeyField()}return t.prototype.compare=function(t,e){var n=this.isKeyOrderBy?de.compareByKey(t,e):de.compareByField(this.field,t,e)
switch(this.dir){case ni.ASCENDING:return n
case ni.DESCENDING:return-1*n
default:return g("Unknown direction: "+this.dir)}},t.prototype.canonicalId=function(){return this.field.canonicalString()+this.dir.toString()},t.prototype.toString=function(){return this.field.canonicalString()+" ("+this.dir+")"},t.prototype.isEqual=function(t){return this.dir===t.dir&&this.field.isEqual(t.field)},t}(),oi=new ii(ct.keyField(),ni.ASCENDING),ai=new ii(ct.keyField(),ni.DESCENDING),si=function(){function t(){}return t.prototype.applyToLocalView=function(t,e){return new On(e,t)},t.prototype.applyToRemoteDocument=function(t,e){return e},t.prototype.computeBaseValue=function(t){return null},t.prototype.isEqual=function(e){return e instanceof t},t.instance=new t,t}(),ui=function(){function t(t){this.elements=t}return t.prototype.applyToLocalView=function(t,e){return this.apply(t)},t.prototype.applyToRemoteDocument=function(t,e){return this.apply(t)},t.prototype.apply=function(t){var e,n,r=li(t),i=function(t){r.find(function(e){return e.isEqual(t)})||r.push(t)}
try{for(var o=s.__values(this.elements),a=o.next();!a.done;a=o.next())i(a.value)}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return new Un(r)},t.prototype.computeBaseValue=function(t){return null},t.prototype.isEqual=function(e){return e instanceof t&&Y(e.elements,this.elements)},t}(),ci=function(){function t(t){this.elements=t}return t.prototype.applyToLocalView=function(t,e){return this.apply(t)},t.prototype.applyToRemoteDocument=function(t,e){return this.apply(t)},t.prototype.apply=function(t){var e,n,r=li(t),i=function(t){r=r.filter(function(e){return!e.isEqual(t)})}
try{for(var o=s.__values(this.elements),a=o.next();!a.done;a=o.next())i(a.value)}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return new Un(r)},t.prototype.computeBaseValue=function(t){return null},t.prototype.isEqual=function(e){return e instanceof t&&Y(e.elements,this.elements)},t}(),hi=function(){function t(t){this.operand=t}return t.prototype.applyToLocalView=function(t,e){var n=this.computeBaseValue(t)
if(n instanceof An&&this.operand instanceof An){var r=n.internalValue+this.operand.internalValue
return new An(r)}return r=n.internalValue+this.operand.internalValue,new Dn(r)},t.prototype.applyToRemoteDocument=function(t,e){return _(null!==e,"Didn't receive transformResult for NUMERIC_ADD transform"),e},t.prototype.computeBaseValue=function(t){return t instanceof Cn?t:new An(0)},t.prototype.isEqual=function(e){return e instanceof t&&this.operand.isEqual(e.operand)},t}()
function li(t){return t instanceof Un?t.internalValue.slice():[]}var fi,pi,di=function(){function t(t){this.count=t}return t.prototype.isEqual=function(t){return t&&t.count===this.count},t}(),yi=((fi={})[ni.ASCENDING.name]="ASCENDING",fi[ni.DESCENDING.name]="DESCENDING",fi),mi=((pi={})[Yr.LESS_THAN.name]="LESS_THAN",pi[Yr.LESS_THAN_OR_EQUAL.name]="LESS_THAN_OR_EQUAL",pi[Yr.GREATER_THAN.name]="GREATER_THAN",pi[Yr.GREATER_THAN_OR_EQUAL.name]="GREATER_THAN_OR_EQUAL",pi[Yr.EQUAL.name]="EQUAL",pi[Yr.ARRAY_CONTAINS.name]="ARRAY_CONTAINS",pi[Yr.IN.name]="IN",pi[Yr.ARRAY_CONTAINS_ANY.name]="ARRAY_CONTAINS_ANY",pi),vi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
function gi(t,e){_(!hr(t),e+" is missing")}function _i(t){return"number"==typeof t?t:"string"==typeof t?Number(t):g("can't parse "+t)}var bi=function(){function t(t,e){this.databaseId=t,this.options=e}return t.prototype.emptyByteString=function(){return this.options.useProto3Json?"":new Uint8Array(0)},t.prototype.unsafeCastProtoByteString=function(t){return t},t.prototype.fromRpcStatus=function(t){var e=void 0===t.code?E.UNKNOWN:Nr(t.code)
return new T(e,t.message||"")},t.prototype.toInt32Value=function(t){return hr(t)?void 0:{value:t}},t.prototype.fromInt32Value=function(t){var e
return hr(e="object"===r(t)?t.value:t)?null:e},t.prototype.toTimestamp=function(t){return{seconds:""+t.seconds,nanos:t.nanoseconds}},t.prototype.fromTimestamp=function(t){if("string"==typeof t)return this.fromIso8601String(t)
_(!!t,"Cannot deserialize null or undefined timestamp.")
var e=_i(t.seconds||"0"),n=t.nanos||0
return new Et(e,n)},t.prototype.fromIso8601String=function(t){var e=0,n=vi.exec(t)
if(_(!!n,"invalid timestamp: "+t),n[1]){var r=n[1]
r=(r+"000000000").substr(0,9),e=Number(r)}var i=new Date(t),o=Math.floor(i.getTime()/1e3)
return new Et(o,e)},t.prototype.toBytes=function(t){return this.options.useProto3Json?t.toBase64():this.unsafeCastProtoByteString(t.toUint8Array())},t.prototype.fromBlob=function(t){return"string"==typeof t?(_(this.options.useProto3Json,"Expected bytes to be passed in as Uint8Array, but got a string instead."),tt.fromBase64String(t)):(_(!this.options.useProto3Json,"Expected bytes to be passed in as Uint8Array, but got a string instead."),tt.fromUint8Array(t))},t.prototype.toVersion=function(t){return this.toTimestamp(t.toTimestamp())},t.prototype.fromVersion=function(t){return _(!!t,"Trying to deserialize version that isn't set"),Tt.fromTimestamp(this.fromTimestamp(t))},t.prototype.toResourceName=function(t,e){return this.fullyQualifiedPrefixPath(t).child("documents").child(e).canonicalString()},t.prototype.fromResourceName=function(t){var e=st.fromString(t)
return _(this.isValidResourceName(e),"Tried to deserialize invalid key "+e.toString()),e},t.prototype.toName=function(t){return this.toResourceName(this.databaseId,t.path)},t.prototype.fromName=function(t){var e=this.fromResourceName(t)
return _(e.get(1)===this.databaseId.projectId,"Tried to deserialize key from different project: "+e.get(1)+" vs "+this.databaseId.projectId),_(!e.get(3)&&!this.databaseId.database||e.get(3)===this.databaseId.database,"Tried to deserialize key from different database: "+e.get(3)+" vs "+this.databaseId.database),new ht(this.extractLocalPathFromResourceName(e))},t.prototype.toQueryPath=function(t){return this.toResourceName(this.databaseId,t)},t.prototype.fromQueryPath=function(t){var e=this.fromResourceName(t)
return 4===e.length?st.EMPTY_PATH:this.extractLocalPathFromResourceName(e)},Object.defineProperty(t.prototype,"encodedDatabaseId",{get:function(){return new st(["projects",this.databaseId.projectId,"databases",this.databaseId.database]).canonicalString()},enumerable:!0,configurable:!0}),t.prototype.fullyQualifiedPrefixPath=function(t){return new st(["projects",t.projectId,"databases",t.database])},t.prototype.extractLocalPathFromResourceName=function(t){return _(t.length>4&&"documents"===t.get(4),"tried to deserialize invalid key "+t.toString()),t.popFirst(5)},t.prototype.isValidResourceName=function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)},t.prototype.toValue=function(t){if(t instanceof Sn)return{nullValue:"NULL_VALUE"}
if(t instanceof In)return{booleanValue:t.value()}
if(t instanceof An)return{integerValue:""+t.value()}
if(t instanceof Dn){var e=t.value()
if(this.options.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"}
if(e===1/0)return{doubleValue:"Infinity"}
if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:t.value()}}return t instanceof Rn?{stringValue:t.value()}:t instanceof Fn?{mapValue:this.toMapValue(t)}:t instanceof Un?{arrayValue:this.toArrayValue(t)}:t instanceof Pn?{timestampValue:this.toTimestamp(t.internalValue)}:t instanceof Ln?{geoPointValue:{latitude:t.value().latitude,longitude:t.value().longitude}}:t instanceof xn?{bytesValue:this.toBytes(t.value())}:t instanceof Mn?{referenceValue:this.toResourceName(t.databaseId,t.key.path)}:g("Unknown FieldValue "+JSON.stringify(t))},t.prototype.fromValue=function(t){var e=this
if("nullValue"in t)return Sn.INSTANCE
if("booleanValue"in t)return In.of(t.booleanValue)
if("integerValue"in t)return new An(_i(t.integerValue))
if("doubleValue"in t){if(this.options.useProto3Json){if("NaN"===t.doubleValue)return Dn.NAN
if("Infinity"===t.doubleValue)return Dn.POSITIVE_INFINITY
if("-Infinity"===t.doubleValue)return Dn.NEGATIVE_INFINITY}return new Dn(t.doubleValue)}if("stringValue"in t)return new Rn(t.stringValue)
if("mapValue"in t)return this.fromFields(t.mapValue.fields||{})
if("arrayValue"in t){gi(t.arrayValue,"arrayValue")
var n=t.arrayValue.values||[]
return new Un(n.map(function(t){return e.fromValue(t)}))}if("timestampValue"in t)return gi(t.timestampValue,"timestampValue"),new Pn(this.fromTimestamp(t.timestampValue))
if("geoPointValue"in t){gi(t.geoPointValue,"geoPointValue")
var r=t.geoPointValue.latitude||0,i=t.geoPointValue.longitude||0
return new Ln(new Gr(r,i))}if("bytesValue"in t){gi(t.bytesValue,"bytesValue")
var o=this.fromBlob(t.bytesValue)
return new xn(o)}if("referenceValue"in t){gi(t.referenceValue,"referenceValue")
var a=this.fromResourceName(t.referenceValue),s=new it(a.get(1),a.get(3)),u=new ht(this.extractLocalPathFromResourceName(a))
return new Mn(s,u)}return g("Unknown Value proto "+JSON.stringify(t))},t.prototype.toMutationDocument=function(t,e){return{name:this.toName(t),fields:this.toFields(e)}},t.prototype.toDocument=function(t){return _(!t.hasLocalMutations,"Can't serialize documents with mutations."),{name:this.toName(t.key),fields:this.toFields(t.data),updateTime:this.toTimestamp(t.version.toTimestamp())}},t.prototype.fromDocument=function(t,e){return new de(this.fromName(t.name),this.fromVersion(t.updateTime),this.fromFields(t.fields||{}),{hasCommittedMutations:!!e})},t.prototype.toFields=function(t){var e=this,n={}
return t.forEach(function(t,r){n[t]=e.toValue(r)}),n},t.prototype.fromFields=function(t){var e=this,n=t,r=Fn.EMPTY
return k(n,function(t,n){r=r.set(new ct([t]),e.fromValue(n))}),r},t.prototype.toMapValue=function(t){return{fields:this.toFields(t)}},t.prototype.toArrayValue=function(t){var e=this,n=[]
return t.forEach(function(t){n.push(e.toValue(t))}),{values:n}},t.prototype.fromFound=function(t){_(!!t.found,"Tried to deserialize a found document from a missing document."),gi(t.found.name,"doc.found.name"),gi(t.found.updateTime,"doc.found.updateTime")
var e=this.fromName(t.found.name),n=this.fromVersion(t.found.updateTime),r=this.fromFields(t.found.fields||{})
return new de(e,n,r,{},t.found)},t.prototype.fromMissing=function(t){_(!!t.missing,"Tried to deserialize a missing document from a found document."),_(!!t.readTime,"Tried to deserialize a missing document without a read time.")
var e=this.fromName(t.missing),n=this.fromVersion(t.readTime)
return new ye(e,n)},t.prototype.fromMaybeDocument=function(t){return"found"in t?this.fromFound(t):"missing"in t?this.fromMissing(t):g("invalid batch get response: "+JSON.stringify(t))},t.prototype.toWatchTargetChangeState=function(t){switch(t){case Pr.Added:return"ADD"
case Pr.Current:return"CURRENT"
case Pr.NoChange:return"NO_CHANGE"
case Pr.Removed:return"REMOVE"
case Pr.Reset:return"RESET"
default:return g("Unknown WatchTargetChangeState: "+t)}},t.prototype.toTestWatchChange=function(t){if(t instanceof Ur)return{filter:{count:t.existenceFilter.count,targetId:t.targetId}}
if(t instanceof Fr){if(t.newDoc instanceof de){var e=t.newDoc
return{documentChange:{document:{name:this.toName(e.key),fields:this.toFields(e.data),updateTime:this.toVersion(e.version)},targetIds:t.updatedTargetIds,removedTargetIds:t.removedTargetIds}}}if(t.newDoc instanceof ye)return e=t.newDoc,{documentDelete:{document:this.toName(e.key),readTime:this.toVersion(e.version),removedTargetIds:t.removedTargetIds}}
if(null===t.newDoc)return{documentRemove:{document:this.toName(t.key),removedTargetIds:t.removedTargetIds}}}if(t instanceof qr){var n=void 0
return t.cause&&(n={code:kr(t.cause.code),message:t.cause.message}),{targetChange:{targetChangeType:this.toWatchTargetChangeState(t.state),targetIds:t.targetIds,resumeToken:this.unsafeCastProtoByteString(t.resumeToken),cause:n}}}return g("Unrecognized watch change: "+JSON.stringify(t))},t.prototype.fromWatchChange=function(t){var e
if("targetChange"in t){gi(t.targetChange,"targetChange")
var n=this.fromWatchTargetChangeState(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=t.targetChange.resumeToken||this.emptyByteString(),o=t.targetChange.cause,a=o&&this.fromRpcStatus(o)
e=new qr(n,r,i,a||null)}else if("documentChange"in t){gi(t.documentChange,"documentChange"),gi(t.documentChange.document,"documentChange.name"),gi(t.documentChange.document.name,"documentChange.document.name"),gi(t.documentChange.document.updateTime,"documentChange.document.updateTime")
var s=t.documentChange,u=this.fromName(s.document.name),c=this.fromVersion(s.document.updateTime),h=this.fromFields(s.document.fields||{}),l=new de(u,c,h,{},s.document),f=s.targetIds||[],p=s.removedTargetIds||[]
e=new Fr(f,p,l.key,l)}else if("documentDelete"in t){gi(t.documentDelete,"documentDelete"),gi(t.documentDelete.document,"documentDelete.document")
var d=t.documentDelete
u=this.fromName(d.document),c=d.readTime?this.fromVersion(d.readTime):Tt.forDeletedDoc(),l=new ye(u,c),p=d.removedTargetIds||[],e=new Fr([],p,l.key,l)}else if("documentRemove"in t){gi(t.documentRemove,"documentRemove"),gi(t.documentRemove.document,"documentRemove")
var y=t.documentRemove
u=this.fromName(y.document),p=y.removedTargetIds||[],e=new Fr([],p,u,null)}else{if(!("filter"in t))return g("Unknown change type "+JSON.stringify(t))
gi(t.filter,"filter"),gi(t.filter.targetId,"filter.targetId")
var m=t.filter,v=m.count||0,_=new di(v),b=m.targetId
e=new Ur(b,_)}return e},t.prototype.fromWatchTargetChangeState=function(t){return"NO_CHANGE"===t?Pr.NoChange:"ADD"===t?Pr.Added:"REMOVE"===t?Pr.Removed:"CURRENT"===t?Pr.Current:"RESET"===t?Pr.Reset:g("Got unexpected TargetChange.state: "+t)},t.prototype.versionFromListenResponse=function(t){if(!("targetChange"in t))return Tt.MIN
var e=t.targetChange
return e.targetIds&&e.targetIds.length?Tt.MIN:e.readTime?this.fromVersion(e.readTime):Tt.MIN},t.prototype.toMutation=function(t){var e,n=this
if(t instanceof Qn)e={update:this.toMutationDocument(t.key,t.value)}
else if(t instanceof Hn)e={delete:this.toName(t.key)}
else if(t instanceof Kn)e={update:this.toMutationDocument(t.key,t.data),updateMask:this.toDocumentMask(t.fieldMask)}
else{if(!(t instanceof Gn))return g("Unknown mutation type "+t.type)
e={transform:{document:this.toName(t.key),fieldTransforms:t.fieldTransforms.map(function(t){return n.toFieldTransform(t)})}}}return t.precondition.isNone||(e.currentDocument=this.toPrecondition(t.precondition)),e},t.prototype.fromMutation=function(t){var e=this,n=t.currentDocument?this.fromPrecondition(t.currentDocument):jn.NONE
if(t.update){gi(t.update.name,"name")
var r=this.fromName(t.update.name),i=this.fromFields(t.update.fields||{})
if(t.updateMask){var o=this.fromDocumentMask(t.updateMask)
return new Kn(r,i,o,n)}return new Qn(r,i,n)}if(t.delete)return r=this.fromName(t.delete),new Hn(r,n)
if(t.transform){r=this.fromName(t.transform.document)
var a=t.transform.fieldTransforms.map(function(t){return e.fromFieldTransform(t)})
return _(!0===n.exists,'Transforms only support precondition "exists == true"'),new Gn(r,a)}return g("unknown mutation proto: "+JSON.stringify(t))},t.prototype.toPrecondition=function(t){return _(!t.isNone,"Can't serialize an empty precondition"),void 0!==t.updateTime?{updateTime:this.toVersion(t.updateTime)}:void 0!==t.exists?{exists:t.exists}:g("Unknown precondition")},t.prototype.fromPrecondition=function(t){return void 0!==t.updateTime?jn.updateTime(this.fromVersion(t.updateTime)):void 0!==t.exists?jn.exists(t.exists):jn.NONE},t.prototype.fromWriteResult=function(t,e){var n=this,r=t.updateTime?this.fromVersion(t.updateTime):this.fromVersion(e),i=null
return t.transformResults&&t.transformResults.length>0&&(i=t.transformResults.map(function(t){return n.fromValue(t)})),new Bn(r,i)},t.prototype.fromWriteResults=function(t,e){var n=this
return t&&t.length>0?(_(void 0!==e,"Received a write result without a commit time"),t.map(function(t){return n.fromWriteResult(t,e)})):[]},t.prototype.toFieldTransform=function(t){var e=this,n=t.transform
if(n instanceof si)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"}
if(n instanceof ui)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements.map(function(t){return e.toValue(t)})}}
if(n instanceof ci)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements.map(function(t){return e.toValue(t)})}}
if(n instanceof hi)return{fieldPath:t.field.canonicalString(),increment:this.toValue(n.operand)}
throw g("Unknown transform: "+t.transform)},t.prototype.fromFieldTransform=function(t){var e=this,n=null
if("setToServerValue"in t)_("REQUEST_TIME"===t.setToServerValue,"Unknown server value transform proto: "+JSON.stringify(t)),n=si.instance
else if("appendMissingElements"in t){var r=t.appendMissingElements.values||[]
n=new ui(r.map(function(t){return e.fromValue(t)}))}else if("removeAllFromArray"in t)r=t.removeAllFromArray.values||[],n=new ci(r.map(function(t){return e.fromValue(t)}))
else if("increment"in t){var i=this.fromValue(t.increment)
_(i instanceof Cn,"NUMERIC_ADD transform requires a NumberValue"),n=new hi(i)}else g("Unknown transform proto: "+JSON.stringify(t))
var o=ct.fromServerFormat(t.fieldPath)
return new Vn(o,n)},t.prototype.toDocumentsTarget=function(t){return{documents:[this.toQueryPath(t.path)]}},t.prototype.fromDocumentsTarget=function(t){var e=t.documents.length
_(1===e,"DocumentsTarget contained other than 1 document: "+e)
var n=t.documents[0]
return Hr.atPath(this.fromQueryPath(n))},t.prototype.toQueryTarget=function(t){var e={structuredQuery:{}},n=t.path
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
return n.endAt&&(h=this.fromCursor(n.endAt)),new Hr(e,i,s,a,u,c,h)},t.prototype.toListenRequestLabels=function(t){var e=this.toLabel(t.purpose)
return null==e?null:{"goog-listen-tags":e}},t.prototype.toLabel=function(t){switch(t){case Ke.Listen:return null
case Ke.ExistenceFilterMismatch:return"existence-filter-mismatch"
case Ke.LimboResolution:return"limbo-document"
default:return g("Unrecognized query purpose: "+t)}},t.prototype.toTarget=function(t){var e,n=t.query
return(e=n.isDocumentQuery()?{documents:this.toDocumentsTarget(n)}:{query:this.toQueryTarget(n)}).targetId=t.targetId,t.resumeToken.length>0&&(e.resumeToken=this.unsafeCastProtoByteString(t.resumeToken)),e},t.prototype.toFilter=function(t){var e=this
if(0!==t.length){var n=t.map(function(t){return t instanceof Xr?e.toUnaryOrFieldFilter(t):g("Unrecognized filter: "+JSON.stringify(t))})
return 1===n.length?n[0]:{compositeFilter:{op:"AND",filters:n}}}},t.prototype.fromFilter=function(t){var e=this
return t?void 0!==t.unaryFilter?[this.fromUnaryFilter(t)]:void 0!==t.fieldFilter?[this.fromFieldFilter(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(function(t){return e.fromFilter(t)}).reduce(function(t,e){return t.concat(e)}):g("Unknown filter: "+JSON.stringify(t)):[]},t.prototype.toOrder=function(t){var e=this
if(0!==t.length)return t.map(function(t){return e.toPropertyOrder(t)})},t.prototype.fromOrder=function(t){var e=this
return t.map(function(t){return e.fromPropertyOrder(t)})},t.prototype.toCursor=function(t){var e=this
return{before:t.before,values:t.position.map(function(t){return e.toValue(t)})}},t.prototype.fromCursor=function(t){var e=this,n=!!t.before,r=t.values.map(function(t){return e.fromValue(t)})
return new ri(r,n)},t.prototype.toDirection=function(t){return yi[t.name]},t.prototype.fromDirection=function(t){switch(t){case"ASCENDING":return ni.ASCENDING
case"DESCENDING":return ni.DESCENDING
default:return}},t.prototype.toOperatorName=function(t){return mi[t.name]},t.prototype.fromOperatorName=function(t){switch(t){case"EQUAL":return Yr.EQUAL
case"GREATER_THAN":return Yr.GREATER_THAN
case"GREATER_THAN_OR_EQUAL":return Yr.GREATER_THAN_OR_EQUAL
case"LESS_THAN":return Yr.LESS_THAN
case"LESS_THAN_OR_EQUAL":return Yr.LESS_THAN_OR_EQUAL
case"ARRAY_CONTAINS":return Yr.ARRAY_CONTAINS
case"IN":return Yr.IN
case"ARRAY_CONTAINS_ANY":return Yr.ARRAY_CONTAINS_ANY
case"OPERATOR_UNSPECIFIED":return g("Unspecified operator")
default:return g("Unknown operator")}},t.prototype.toFieldPathReference=function(t){return{fieldPath:t.canonicalString()}},t.prototype.fromFieldPathReference=function(t){return ct.fromServerFormat(t.fieldPath)},t.prototype.toPropertyOrder=function(t){return{field:this.toFieldPathReference(t.field),direction:this.toDirection(t.dir)}},t.prototype.fromPropertyOrder=function(t){return new ii(this.fromFieldPathReference(t.field),this.fromDirection(t.direction))},t.prototype.fromFieldFilter=function(t){return Xr.create(this.fromFieldPathReference(t.fieldFilter.field),this.fromOperatorName(t.fieldFilter.op),this.fromValue(t.fieldFilter.value))},t.prototype.toUnaryOrFieldFilter=function(t){if(t.op===Yr.EQUAL){if(t.value.isEqual(Dn.NAN))return{unaryFilter:{field:this.toFieldPathReference(t.field),op:"IS_NAN"}}
if(t.value.isEqual(Sn.INSTANCE))return{unaryFilter:{field:this.toFieldPathReference(t.field),op:"IS_NULL"}}}return{fieldFilter:{field:this.toFieldPathReference(t.field),op:this.toOperatorName(t.op),value:this.toValue(t.value)}}},t.prototype.fromUnaryFilter=function(t){switch(t.unaryFilter.op){case"IS_NAN":var e=this.fromFieldPathReference(t.unaryFilter.field)
return Xr.create(e,Yr.EQUAL,Dn.NAN)
case"IS_NULL":var n=this.fromFieldPathReference(t.unaryFilter.field)
return Xr.create(n,Yr.EQUAL,Sn.INSTANCE)
case"OPERATOR_UNSPECIFIED":return g("Unspecified filter")
default:return g("Unknown filter")}},t.prototype.toDocumentMask=function(t){var e=[]
return t.fields.forEach(function(t){return e.push(t.canonicalString())}),{fieldPaths:e}},t.prototype.fromDocumentMask=function(t){var e=(t.fieldPaths||[]).map(function(t){return ct.fromServerFormat(t)})
return qn.fromArray(e)},t}(),wi=function(){this.listeners=[]},Ei=function(){function t(t){this.syncEngine=t,this.queries=new ve(function(t){return t.canonicalId()}),this.onlineState=dr.Unknown,this.syncEngine.subscribe(this)}return t.prototype.listen=function(t){var e=t.query,n=!1,r=this.queries.get(e)
return r||(n=!0,r=new wi,this.queries.set(e,r)),r.listeners.push(t),t.applyOnlineStateChange(this.onlineState),r.viewSnap&&t.onViewSnapshot(r.viewSnap),n?this.syncEngine.listen(e).then(function(t){return r.targetId=t,t}):Promise.resolve(r.targetId)},t.prototype.unlisten=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n,r,i
return s.__generator(this,function(o){return e=t.query,n=!1,(r=this.queries.get(e))&&(i=r.listeners.indexOf(t))>=0&&(r.listeners.splice(i,1),n=0===r.listeners.length),n?(this.queries.delete(e),[2,this.syncEngine.unlisten(e)]):[2]})})},t.prototype.onWatchChange=function(t){var e,n,r,i
try{for(var o=s.__values(t),a=o.next();!a.done;a=o.next()){var u=a.value,c=u.query,h=this.queries.get(c)
if(h){try{for(var l=s.__values(h.listeners),f=l.next();!f.done;f=l.next())f.value.onViewSnapshot(u)}catch(t){r={error:t}}finally{try{f&&!f.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}h.viewSnap=u}}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}},t.prototype.onWatchError=function(t,e){var n,r,i=this.queries.get(t)
if(i)try{for(var o=s.__values(i.listeners),a=o.next();!a.done;a=o.next())a.value.onError(e)}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}this.queries.delete(t)},t.prototype.onOnlineStateChange=function(t){this.onlineState=t,this.queries.forEach(function(e,n){var r,i
try{for(var o=s.__values(n.listeners),a=o.next();!a.done;a=o.next())a.value.applyOnlineStateChange(t)}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}})},t}(),Ti=function(){function t(t,e,n){this.query=t,this.queryObserver=e,this.raisedInitialEvent=!1,this.onlineState=dr.Unknown,this.options=n||{}}return t.prototype.onViewSnapshot=function(t){var e,n
if(_(t.docChanges.length>0||t.syncStateChanged,"We got a new snapshot with no changes?"),!this.options.includeMetadataChanges){var r=[]
try{for(var i=s.__values(t.docChanges),o=i.next();!o.done;o=i.next()){var a=o.value
a.type!==Ar.Metadata&&r.push(a)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}t=new xr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}this.raisedInitialEvent?this.shouldRaiseEvent(t)&&this.queryObserver.next(t):this.shouldRaiseInitialEvent(t,this.onlineState)&&this.raiseInitialEvent(t),this.snap=t},t.prototype.onError=function(t){this.queryObserver.error(t)},t.prototype.applyOnlineStateChange=function(t){this.onlineState=t,this.snap&&!this.raisedInitialEvent&&this.shouldRaiseInitialEvent(this.snap,t)&&this.raiseInitialEvent(this.snap)},t.prototype.shouldRaiseInitialEvent=function(t,e){if(_(!this.raisedInitialEvent,"Determining whether to raise first event but already had first event"),!t.fromCache)return!0
var n=e!==dr.Offline
return this.options.waitForSyncWhenOnline&&n?(_(t.fromCache,"Waiting for sync, but snapshot is not from cache"),!1):!t.docs.isEmpty()||e===dr.Offline},t.prototype.shouldRaiseEvent=function(t){if(t.docChanges.length>0)return!0
var e=this.snap&&this.snap.hasPendingWrites!==t.hasPendingWrites
return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges},t.prototype.raiseInitialEvent=function(t){_(!this.raisedInitialEvent,"Trying to raise initial events for second time"),t=xr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.raisedInitialEvent=!0,this.queryObserver.next(t)},t}(),Si=function(){function t(t,e,n){this.targetId=t,this.addedKeys=e,this.removedKeys=n}return t.fromSnapshot=function(e,n){var r,i,o=Ut(),a=Ut()
try{for(var u=s.__values(n.docChanges),c=u.next();!c.done;c=u.next()){var h=c.value
switch(h.type){case Ar.Added:o=o.add(h.doc.key)
break
case Ar.Removed:a=a.add(h.doc.key)}}}catch(t){r={error:t}}finally{try{c&&!c.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}return new t(e,o,a)},t}(),Ii=function(t){this.key=t},Ci=function(t){this.key=t},Ni=function(){function t(t,e){this.query=t,this._syncedDocuments=e,this.syncState=null,this.current=!1,this.limboDocuments=Ut(),this.mutatedKeys=Ut(),this.documentSet=new Rr(t.docComparator.bind(t))}return Object.defineProperty(t.prototype,"syncedDocuments",{get:function(){return this._syncedDocuments},enumerable:!0,configurable:!0}),t.prototype.computeDocChanges=function(t,e){var n=this,r=e?e.changeSet:new Or,i=e?e.documentSet:this.documentSet,o=e?e.mutatedKeys:this.mutatedKeys,a=i,s=!1,u=this.query.hasLimit()&&i.size===this.query.limit?i.last():null
if(t.inorderTraversal(function(t,e){var c=i.get(t),h=e instanceof de?e:null
h&&(_(t.isEqual(h.key),"Mismatching keys found in document changes: "+t+" != "+h.key),h=n.query.matches(h)?h:null)
var l=!!c&&n.mutatedKeys.has(c.key),f=!!h&&(h.hasLocalMutations||n.mutatedKeys.has(h.key)&&h.hasCommittedMutations),p=!1
c&&h?c.data.isEqual(h.data)?l!==f&&(r.track({type:Ar.Metadata,doc:h}),p=!0):n.shouldWaitForSyncedDocument(c,h)||(r.track({type:Ar.Modified,doc:h}),p=!0,u&&n.query.docComparator(h,u)>0&&(s=!0)):!c&&h?(r.track({type:Ar.Added,doc:h}),p=!0):c&&!h&&(r.track({type:Ar.Removed,doc:c}),p=!0,u&&(s=!0)),p&&(h?(a=a.add(h),o=f?o.add(t):o.delete(t)):(a=a.delete(t),o=o.delete(t)))}),this.query.hasLimit())for(;a.size>this.query.limit;){var c=a.last()
a=a.delete(c.key),o=o.delete(c.key),r.track({type:Ar.Removed,doc:c})}return _(!s||!e,"View was refilled using docs that themselves needed refilling."),{documentSet:a,changeSet:r,needsRefill:s,mutatedKeys:o}},t.prototype.shouldWaitForSyncedDocument=function(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations},t.prototype.applyChanges=function(t,e,n){var r=this
_(!t.needsRefill,"Cannot apply changes that need a refill")
var i=this.documentSet
this.documentSet=t.documentSet,this.mutatedKeys=t.mutatedKeys
var o=t.changeSet.getChanges()
o.sort(function(t,e){return function(t,e){var n=function(t){switch(t){case Ar.Added:return 1
case Ar.Modified:case Ar.Metadata:return 2
case Ar.Removed:return 0
default:return g("Unknown ChangeType: "+t)}}
return n(t)-n(e)}(t.type,e.type)||r.query.docComparator(t.doc,e.doc)}),this.applyTargetChange(n)
var a=e?this.updateLimboDocuments():[],s=0===this.limboDocuments.size&&this.current?Dr.Synced:Dr.Local,u=s!==this.syncState
return this.syncState=s,0!==o.length||u?{snapshot:new xr(this.query,t.documentSet,i,o,t.mutatedKeys,s===Dr.Local,u,!1),limboChanges:a}:{limboChanges:a}},t.prototype.applyOnlineStateChange=function(t){return this.current&&t===dr.Offline?(this.current=!1,this.applyChanges({documentSet:this.documentSet,changeSet:new Or,mutatedKeys:this.mutatedKeys,needsRefill:!1},!1)):{limboChanges:[]}},t.prototype.shouldBeInLimbo=function(t){return!this._syncedDocuments.has(t)&&!!this.documentSet.has(t)&&!this.documentSet.get(t).hasLocalMutations},t.prototype.applyTargetChange=function(t){var e=this
t&&(t.addedDocuments.forEach(function(t){return e._syncedDocuments=e._syncedDocuments.add(t)}),t.modifiedDocuments.forEach(function(t){return _(e._syncedDocuments.has(t),"Modified document "+t+" not found in view.")}),t.removedDocuments.forEach(function(t){return e._syncedDocuments=e._syncedDocuments.delete(t)}),this.current=t.current)},t.prototype.updateLimboDocuments=function(){var t=this
if(!this.current)return[]
var e=this.limboDocuments
this.limboDocuments=Ut(),this.documentSet.forEach(function(e){t.shouldBeInLimbo(e.key)&&(t.limboDocuments=t.limboDocuments.add(e.key))})
var n=[]
return e.forEach(function(e){t.limboDocuments.has(e)||n.push(new Ci(e))}),this.limboDocuments.forEach(function(t){e.has(t)||n.push(new Ii(t))}),n},t.prototype.synchronizeWithPersistedState=function(t,e){this._syncedDocuments=e,this.limboDocuments=Ut()
var n=this.computeDocChanges(t)
return this.applyChanges(n,!0)},t.prototype.computeInitialSnapshot=function(){return xr.fromInitialDocuments(this.query,this.documentSet,this.mutatedKeys,this.syncState===Dr.Local)},t}(),ki=function(t,e,n){this.query=t,this.targetId=e,this.view=n},Ai=function(t){this.key=t},Di=function(){function t(t,e,n,r){this.localStore=t,this.remoteStore=e,this.sharedClientState=n,this.currentUser=r,this.syncEngineListener=null,this.queryViewsByQuery=new ve(function(t){return t.canonicalId()}),this.queryViewsByTarget={},this.limboTargetsByKey=new St(ht.comparator),this.limboResolutionsByTarget={},this.limboDocumentRefs=new Yn,this.mutationUserCallbacks={},this.limboTargetIdGenerator=Zt.forSyncEngine(),this.isPrimary=void 0,this.onlineState=dr.Unknown}return Object.defineProperty(t.prototype,"isPrimaryClient",{get:function(){return!0===this.isPrimary},enumerable:!0,configurable:!0}),t.prototype.subscribe=function(t){_(null!==t,"SyncEngine listener cannot be null"),_(null===this.syncEngineListener,"SyncEngine already has a subscriber."),this.syncEngineListener=t},t.prototype.listen=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n,r,i,o
return s.__generator(this,function(a){switch(a.label){case 0:return this.assertSubscribed("listen()"),(r=this.queryViewsByQuery.get(t))?(e=r.targetId,this.sharedClientState.addLocalQueryTarget(e),n=r.view.computeInitialSnapshot(),[3,4]):[3,1]
case 1:return[4,this.localStore.allocateQuery(t)]
case 2:return i=a.sent(),o=this.sharedClientState.addLocalQueryTarget(i.targetId),e=i.targetId,[4,this.initializeViewAndComputeSnapshot(i,"current"===o)]
case 3:n=a.sent(),this.isPrimary&&this.remoteStore.listen(i),a.label=4
case 4:return this.syncEngineListener.onWatchChange([n]),[2,e]}})})},t.prototype.initializeViewAndComputeSnapshot=function(t,e){var n=this,r=t.query
return this.localStore.executeQuery(r).then(function(i){return n.localStore.remoteDocumentKeys(t.targetId).then(function(o){var a=new Ni(r,o),s=a.computeDocChanges(i),u=Lr.createSynthesizedTargetChangeForCurrentChange(t.targetId,e&&n.onlineState!==dr.Offline),c=a.applyChanges(s,!0===n.isPrimary,u)
_(0===c.limboChanges.length,"View returned limbo docs before target ack from the server."),_(!!c.snapshot,"applyChanges for new view should always return a snapshot")
var h=new ki(r,t.targetId,a)
return n.queryViewsByQuery.set(r,h),n.queryViewsByTarget[t.targetId]=h,c.snapshot})})},t.prototype.synchronizeViewAndComputeSnapshot=function(t){var e=this
return this.localStore.executeQuery(t.query).then(function(n){return e.localStore.remoteDocumentKeys(t.targetId).then(function(r){return s.__awaiter(e,void 0,void 0,function(){var e
return s.__generator(this,function(i){return e=t.view.synchronizeWithPersistedState(n,r),this.isPrimary&&this.updateTrackedLimbos(t.targetId,e.limboChanges),[2,e]})})})})},t.prototype.unlisten=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n=this
return s.__generator(this,function(r){switch(r.label){case 0:return this.assertSubscribed("unlisten()"),_(!!(e=this.queryViewsByQuery.get(t)),"Trying to unlisten on query not found:"+t),this.isPrimary?(this.sharedClientState.removeLocalQueryTarget(e.targetId),this.sharedClientState.isActiveQueryTarget(e.targetId)?[3,2]:[4,this.localStore.releaseQuery(t,!1).then(function(){n.sharedClientState.clearQueryState(e.targetId),n.remoteStore.unlisten(e.targetId),n.removeAndCleanupQuery(e)}).catch(yn)]):[3,3]
case 1:r.sent(),r.label=2
case 2:return[3,5]
case 3:return this.removeAndCleanupQuery(e),[4,this.localStore.releaseQuery(t,!0)]
case 4:r.sent(),r.label=5
case 5:return[2]}})})},t.prototype.write=function(t,e){var n=this
return this.assertSubscribed("write()"),this.localStore.localWrite(t).then(function(t){return n.sharedClientState.addPendingMutation(t.batchId),n.addMutationCallback(t.batchId,e),n.emitNewSnapsAndNotifyLocalStore(t.changes)}).then(function(){return n.remoteStore.fillWritePipeline()})},t.prototype.wrapUpdateFunctionError=function(t){return t},t.prototype.runTransaction=function(t,e){var n=this
void 0===e&&(e=5),_(e>=0,"Got negative number of retries for transaction.")
var r=this.remoteStore.createTransaction()
return function(){try{var e=t(r)
return!hr(e)&&e.catch&&e.then?e.catch(function(t){return Promise.reject(n.wrapUpdateFunctionError(t))}):Promise.reject(Error("Transaction callback must return a Promise"))}catch(t){return Promise.reject(n.wrapUpdateFunctionError(t))}}().then(function(i){return r.commit().then(function(){return i}).catch(function(r){return 0===e?Promise.reject(r):n.runTransaction(t,e-1)})})},t.prototype.applyRemoteEvent=function(t){var e=this
return this.assertSubscribed("applyRemoteEvent()"),this.localStore.applyRemoteEvent(t).then(function(n){return k(t.targetChanges,function(t,n){var r=e.limboResolutionsByTarget[Number(t)]
r&&(_(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1,"Limbo resolution for single document contains multiple changes."),n.addedDocuments.size>0?r.receivedDocument=!0:n.modifiedDocuments.size>0?_(r.receivedDocument,"Received change for limbo target document without add."):n.removedDocuments.size>0&&(_(r.receivedDocument,"Received remove for limbo target document without add."),r.receivedDocument=!1))}),e.emitNewSnapsAndNotifyLocalStore(n,t)}).catch(yn)},t.prototype.applyOnlineStateChange=function(t,e){if(this.isPrimary&&e===yr.RemoteStore||!this.isPrimary&&e===yr.SharedClientState){var n=[]
this.queryViewsByQuery.forEach(function(e,r){var i=r.view.applyOnlineStateChange(t)
_(0===i.limboChanges.length,"OnlineState should not affect limbo documents."),i.snapshot&&n.push(i.snapshot)}),this.syncEngineListener.onOnlineStateChange(t),this.syncEngineListener.onWatchChange(n),this.onlineState=t,this.isPrimary&&this.sharedClientState.setOnlineState(t)}},t.prototype.rejectListen=function(t,e){return s.__awaiter(this,void 0,void 0,function(){var n,r,i,o,a,u,c=this
return s.__generator(this,function(s){switch(s.label){case 0:return this.assertSubscribed("rejectListens()"),this.sharedClientState.updateQueryState(t,"rejected",e),n=this.limboResolutionsByTarget[t],(r=n&&n.key)?(this.limboTargetsByKey=this.limboTargetsByKey.remove(r),delete this.limboResolutionsByTarget[t],i=(i=new St(ht.comparator)).insert(r,new ye(r,Tt.forDeletedDoc())),o=Ut().add(r),a=new Mr(Tt.MIN,{},new kt(z),i,o),[2,this.applyRemoteEvent(a)]):[3,1]
case 1:return _(!!(u=this.queryViewsByTarget[t]),"Unknown targetId: "+t),[4,this.localStore.releaseQuery(u.query,!1).then(function(){return c.removeAndCleanupQuery(u)}).catch(yn)]
case 2:s.sent(),this.syncEngineListener.onWatchError(u.query,e),s.label=3
case 3:return[2]}})})},t.prototype.applyBatchState=function(t,e,n){return s.__awaiter(this,void 0,void 0,function(){var r
return s.__generator(this,function(i){switch(i.label){case 0:return this.assertSubscribed("applyBatchState()"),[4,this.localStore.lookupMutationDocuments(t)]
case 1:return null===(r=i.sent())?(y("SyncEngine","Cannot apply mutation batch with id: "+t),[2]):"pending"!==e?[3,3]:[4,this.remoteStore.fillWritePipeline()]
case 2:return i.sent(),[3,4]
case 3:"acknowledged"===e||"rejected"===e?(this.processUserCallback(t,n||null),this.localStore.removeCachedMutationBatchMetadata(t)):g("Unknown batchState: "+e),i.label=4
case 4:return[4,this.emitNewSnapsAndNotifyLocalStore(r)]
case 5:return i.sent(),[2]}})})},t.prototype.applySuccessfulWrite=function(t){var e=this
this.assertSubscribed("applySuccessfulWrite()")
var n=t.batch.batchId
return this.processUserCallback(n,null),this.localStore.acknowledgeBatch(t).then(function(t){return e.sharedClientState.updateMutationState(n,"acknowledged"),e.emitNewSnapsAndNotifyLocalStore(t)}).catch(yn)},t.prototype.rejectFailedWrite=function(t,e){var n=this
return this.assertSubscribed("rejectFailedWrite()"),this.processUserCallback(t,e),this.localStore.rejectBatch(t).then(function(r){return n.sharedClientState.updateMutationState(t,"rejected",e),n.emitNewSnapsAndNotifyLocalStore(r)}).catch(yn)},t.prototype.addMutationCallback=function(t,e){var n=this.mutationUserCallbacks[this.currentUser.toKey()]
n||(n=new St(z)),n=n.insert(t,e),this.mutationUserCallbacks[this.currentUser.toKey()]=n},t.prototype.processUserCallback=function(t,e){var n=this.mutationUserCallbacks[this.currentUser.toKey()]
if(n){var r=n.get(t)
r&&(_(t===n.minKey(),"Mutation callbacks processed out-of-order?"),e?r.reject(e):r.resolve(),n=n.remove(t)),this.mutationUserCallbacks[this.currentUser.toKey()]=n}},t.prototype.removeAndCleanupQuery=function(t){var e=this
if(this.sharedClientState.removeLocalQueryTarget(t.targetId),this.queryViewsByQuery.delete(t.query),delete this.queryViewsByTarget[t.targetId],this.isPrimary){var n=this.limboDocumentRefs.referencesForId(t.targetId)
this.limboDocumentRefs.removeReferencesForId(t.targetId),n.forEach(function(t){e.limboDocumentRefs.containsKey(t)||e.removeLimboTarget(t)})}},t.prototype.removeLimboTarget=function(t){var e=this.limboTargetsByKey.get(t)
null!==e&&(this.remoteStore.unlisten(e),this.limboTargetsByKey=this.limboTargetsByKey.remove(t),delete this.limboResolutionsByTarget[e])},t.prototype.updateTrackedLimbos=function(t,e){var n,r
try{for(var i=s.__values(e),o=i.next();!o.done;o=i.next()){var a=o.value
a instanceof Ii?(this.limboDocumentRefs.addReference(a.key,t),this.trackLimboChange(a)):a instanceof Ci?(y("SyncEngine","Document no longer in limbo: "+a.key),this.limboDocumentRefs.removeReference(a.key,t),this.limboDocumentRefs.containsKey(a.key)||this.removeLimboTarget(a.key)):g("Unknown limbo change: "+JSON.stringify(a))}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}},t.prototype.trackLimboChange=function(t){var e=t.key
if(!this.limboTargetsByKey.get(e)){y("SyncEngine","New document in limbo: "+e)
var n=this.limboTargetIdGenerator.next(),r=Hr.atPath(e.path)
this.limboResolutionsByTarget[n]=new Ai(e),this.remoteStore.listen(new tn(r,n,Ke.LimboResolution,ot.INVALID)),this.limboTargetsByKey=this.limboTargetsByKey.insert(e,n)}},t.prototype.currentLimboDocs=function(){return this.limboTargetsByKey},t.prototype.emitNewSnapsAndNotifyLocalStore=function(t,e){return s.__awaiter(this,void 0,void 0,function(){var n,r,i,o=this
return s.__generator(this,function(a){switch(a.label){case 0:return n=[],r=[],i=[],this.queryViewsByQuery.forEach(function(a,s){i.push(Promise.resolve().then(function(){var e=s.view.computeDocChanges(t)
return e.needsRefill?o.localStore.executeQuery(s.query).then(function(t){return s.view.computeDocChanges(t,e)}):e}).then(function(t){var i=e&&e.targetChanges[s.targetId],a=s.view.applyChanges(t,!0===o.isPrimary,i)
if(o.updateTrackedLimbos(s.targetId,a.limboChanges),a.snapshot){o.isPrimary&&o.sharedClientState.updateQueryState(s.targetId,a.snapshot.fromCache?"not-current":"current"),n.push(a.snapshot)
var u=Si.fromSnapshot(s.targetId,a.snapshot)
r.push(u)}}))}),[4,Promise.all(i)]
case 1:return a.sent(),this.syncEngineListener.onWatchChange(n),[4,this.localStore.notifyLocalViewChanges(r)]
case 2:return a.sent(),[2]}})})},t.prototype.assertSubscribed=function(t){_(null!==this.syncEngineListener,"Trying to call "+t+" before calling subscribe().")},t.prototype.handleCredentialChange=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n
return s.__generator(this,function(r){switch(r.label){case 0:return e=!this.currentUser.isEqual(t),this.currentUser=t,e?[4,this.localStore.handleUserChange(t)]:[3,3]
case 1:return n=r.sent(),this.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),[4,this.emitNewSnapsAndNotifyLocalStore(n.affectedDocuments)]
case 2:r.sent(),r.label=3
case 3:return[4,this.remoteStore.handleCredentialChange()]
case 4:return r.sent(),[2]}})})},t.prototype.applyPrimaryState=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n,r,i,o,a,u,c,h,l=this
return s.__generator(this,function(f){switch(f.label){case 0:return!0!==t||!0===this.isPrimary?[3,3]:(this.isPrimary=!0,[4,this.remoteStore.applyPrimaryState(!0)])
case 1:return f.sent(),r=this.sharedClientState.getAllActiveQueryTargets(),[4,this.synchronizeQueryViewsAndRaiseSnapshots(r.toArray())]
case 2:i=f.sent()
try{for(o=s.__values(i),a=o.next();!a.done;a=o.next())u=a.value,this.remoteStore.listen(u)}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return[3,7]
case 3:return!1!==t||!1===this.isPrimary?[3,7]:(this.isPrimary=!1,c=[],h=Promise.resolve(),N(this.queryViewsByTarget,function(t,e){l.sharedClientState.isLocalQueryTarget(t)?c.push(t):h=h.then(function(){return l.unlisten(e.query)}),l.remoteStore.unlisten(e.targetId)}),[4,h])
case 4:return f.sent(),[4,this.synchronizeQueryViewsAndRaiseSnapshots(c)]
case 5:return f.sent(),this.resetLimboDocuments(),[4,this.remoteStore.applyPrimaryState(!1)]
case 6:f.sent(),f.label=7
case 7:return[2]}})})},t.prototype.resetLimboDocuments=function(){var t=this
N(this.limboResolutionsByTarget,function(e){t.remoteStore.unlisten(e)}),this.limboDocumentRefs.removeAllReferences(),this.limboResolutionsByTarget=[],this.limboTargetsByKey=new St(ht.comparator)},t.prototype.synchronizeQueryViewsAndRaiseSnapshots=function(t){var e,n,r=this,i=Promise.resolve(),o=[],a=[],u=function(t){i=i.then(function(){return s.__awaiter(r,void 0,void 0,function(){var e,n,r,i
return s.__generator(this,function(s){switch(s.label){case 0:return(n=this.queryViewsByTarget[t])?[4,this.localStore.releaseQuery(n.query,!0)]:[3,4]
case 1:return s.sent(),[4,this.localStore.allocateQuery(n.query)]
case 2:return e=s.sent(),[4,this.synchronizeViewAndComputeSnapshot(n)]
case 3:return(r=s.sent()).snapshot&&a.push(r.snapshot),[3,8]
case 4:return _(!0===this.isPrimary,"A secondary tab should never have an active query without an active view."),[4,this.localStore.getQueryForTarget(t)]
case 5:return _(!!(i=s.sent()),"Query data for target "+t+" not found"),[4,this.localStore.allocateQuery(i)]
case 6:return e=s.sent(),[4,this.initializeViewAndComputeSnapshot(e,!1)]
case 7:s.sent(),s.label=8
case 8:return o.push(e),[2]}})})})}
try{for(var c=s.__values(t),h=c.next();!h.done;h=c.next())u(h.value)}catch(t){e={error:t}}finally{try{h&&!h.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return i.then(function(){return r.syncEngineListener.onWatchChange(a),o})},t.prototype.getActiveClients=function(){return this.localStore.getActiveClients()},t.prototype.applyTargetState=function(t,e,n){return s.__awaiter(this,void 0,void 0,function(){var r,i=this
return s.__generator(this,function(o){switch(o.label){case 0:if(this.isPrimary)return y("SyncEngine","Ignoring unexpected query state notification."),[2]
if(!this.queryViewsByTarget[t])return[3,5]
switch(e){case"current":case"not-current":return[3,1]
case"rejected":return[3,2]}return[3,4]
case 1:return[2,this.localStore.getNewDocumentChanges().then(function(n){return s.__awaiter(i,void 0,void 0,function(){var r
return s.__generator(this,function(i){switch(i.label){case 0:return r=Mr.createSynthesizedRemoteEventForCurrentChange(t,"current"===e),[4,this.emitNewSnapsAndNotifyLocalStore(n,r)]
case 1:return i.sent(),[2]}})})},function(t){return s.__awaiter(i,void 0,void 0,function(){var e
return s.__generator(this,function(n){switch(n.label){case 0:return function(t){return t.code===E.DATA_LOSS&&t.message===_e}(t)?(e=[],N(this.queryViewsByTarget,function(t){return e.push(t)}),[4,this.synchronizeQueryViewsAndRaiseSnapshots(e)]):[3,2]
case 1:return n.sent(),[3,3]
case 2:throw t
case 3:return[2]}})})})]
case 2:return r=this.queryViewsByTarget[t],this.removeAndCleanupQuery(r),[4,this.localStore.releaseQuery(r.query,!0)]
case 3:return o.sent(),this.syncEngineListener.onWatchError(r.query,n),[3,5]
case 4:g("Unexpected target state: "+e),o.label=5
case 5:return[2]}})})},t.prototype.applyActiveTargetsChange=function(t,e){return s.__awaiter(this,void 0,void 0,function(){var n,r,i,o,a,u,c,h,l,f,p,d,y,m,v,g=this
return s.__generator(this,function(b){switch(b.label){case 0:if(!this.isPrimary)return[2]
b.label=1
case 1:b.trys.push([1,8,9,10]),a=s.__values(t),u=a.next(),b.label=2
case 2:return u.done?[3,7]:(m=u.value,_(!this.queryViewsByTarget[m],"Trying to add an already active target"),[4,this.localStore.getQueryForTarget(m)])
case 3:return _(!!(c=b.sent()),"Query data for active target "+m+" not found"),[4,this.localStore.allocateQuery(c)]
case 4:return h=b.sent(),[4,this.initializeViewAndComputeSnapshot(h,!1)]
case 5:b.sent(),this.remoteStore.listen(h),b.label=6
case 6:return u=a.next(),[3,2]
case 7:return[3,10]
case 8:return l=b.sent(),n={error:l},[3,10]
case 9:try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}return[7]
case 10:f=function(t){var e
return s.__generator(this,function(n){switch(n.label){case 0:return(e=p.queryViewsByTarget[t])?[4,p.localStore.releaseQuery(e.query,!1).then(function(){g.remoteStore.unlisten(t),g.removeAndCleanupQuery(e)}).catch(yn)]:[3,2]
case 1:n.sent(),n.label=2
case 2:return[2]}})},p=this,b.label=11
case 11:b.trys.push([11,16,17,18]),d=s.__values(e),y=d.next(),b.label=12
case 12:return y.done?[3,15]:(m=y.value,[5,f(m)])
case 13:b.sent(),b.label=14
case 14:return y=d.next(),[3,12]
case 15:return[3,18]
case 16:return v=b.sent(),i={error:v},[3,18]
case 17:try{y&&!y.done&&(o=d.return)&&o.call(d)}finally{if(i)throw i.error}return[7]
case 18:return[2]}})})},t.prototype.enableNetwork=function(){return this.localStore.setNetworkEnabled(!0),this.remoteStore.enableNetwork()},t.prototype.disableNetwork=function(){return this.localStore.setNetworkEnabled(!1),this.remoteStore.disableNetwork()},t.prototype.getRemoteKeysForTarget=function(t){var e=this.limboResolutionsByTarget[t]
return e&&e.receivedDocument?Ut().add(e.key):this.queryViewsByTarget[t]?this.queryViewsByTarget[t].view.syncedDocuments:Ut()},t}(),Ri=function(){function t(t){this.uid=t}return t.prototype.isAuthenticated=function(){return null!=this.uid},t.prototype.toKey=function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"},t.prototype.isEqual=function(t){return t.uid===this.uid},t.UNAUTHENTICATED=new t(null),t.GOOGLE_CREDENTIALS=new t("google-credentials-uid"),t.FIRST_PARTY=new t("first-party-uid"),t}(),Pi="SharedClientState",Oi="firestore_clients",xi="firestore_mutations",Mi="firestore_targets",Li="firestore_online_state",Fi="firestore_sequence_number",Ui=function(){function t(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r,_(void 0!==r==("rejected"===n),"MutationMetadata must contain an error iff state is 'rejected'")}return t.fromWebStorageEntry=function(e,n,i){var o=JSON.parse(i),a="object"===r(o)&&-1!==["pending","acknowledged","rejected"].indexOf(o.state)&&(void 0===o.error||"object"===r(o.error)),s=void 0
return a&&o.error&&(a="string"==typeof o.error.message&&"string"==typeof o.error.code)&&(s=new T(o.error.code,o.error.message)),a?new t(e,n,o.state,s):(m(Pi,"Failed to parse mutation state for ID '"+n+"': "+i),null)},t.prototype.toWebStorageJSON=function(){var t={state:this.state,updateTimeMs:Date.now()}
return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},t}(),qi=function(){function t(t,e,n){this.targetId=t,this.state=e,this.error=n,_(void 0!==n==("rejected"===e),"QueryTargetMetadata must contain an error iff state is 'rejected'")}return t.fromWebStorageEntry=function(e,n){var i=JSON.parse(n),o="object"===r(i)&&-1!==["not-current","current","rejected"].indexOf(i.state)&&(void 0===i.error||"object"===r(i.error)),a=void 0
return o&&i.error&&(o="string"==typeof i.error.message&&"string"==typeof i.error.code)&&(a=new T(i.error.code,i.error.message)),o?new t(e,i.state,a):(m(Pi,"Failed to parse target state for ID '"+e+"': "+n),null)},t.prototype.toWebStorageJSON=function(){var t={state:this.state,updateTimeMs:Date.now()}
return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},t}(),Vi=function(){function t(t,e){this.clientId=t,this.activeTargetIds=e}return t.fromWebStorageEntry=function(e,n){for(var i=JSON.parse(n),o="object"===r(i)&&i.activeTargetIds instanceof Array,a=Vt(),s=0;o&&s<i.activeTargetIds.length;++s)o=lr(i.activeTargetIds[s]),a=a.add(i.activeTargetIds[s])
return o?new t(e,a):(m(Pi,"Failed to parse client data for instance '"+e+"': "+n),null)},t}(),Bi=function(){function t(t,e){this.clientId=t,this.onlineState=e}return t.fromWebStorageEntry=function(e){var n=JSON.parse(e)
return"object"===r(n)&&n.onlineState in dr&&"string"==typeof n.clientId?new t(n.clientId,dr[n.onlineState]):(m(Pi,"Failed to parse online state: "+e),null)},t}(),ji=function(){function t(){this.activeTargetIds=Vt()}return t.prototype.addQueryTarget=function(t){_(!this.activeTargetIds.has(t),"Target with ID '"+t+"' already active."),this.activeTargetIds=this.activeTargetIds.add(t)},t.prototype.removeQueryTarget=function(t){this.activeTargetIds=this.activeTargetIds.delete(t)},t.prototype.toWebStorageJSON=function(){var t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()}
return JSON.stringify(t)},t}(),Wi=function(){function t(e,n,r,i,o){if(this.queue=e,this.platform=n,this.persistenceKey=r,this.localClientId=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.activeClients={},this.storageListener=this.handleWebStorageEvent.bind(this),this.started=!1,this.earlyEvents=[],!t.isAvailable(this.platform))throw new T(E.UNIMPLEMENTED,"LocalStorage is not available on this platform.")
var a=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
this.storage=this.platform.window.localStorage,this.currentUser=o,this.localClientStorageKey=this.toWebStorageClientStateKey(this.localClientId),this.sequenceNumberKey=Fi+"_"+r,this.activeClients[this.localClientId]=new ji,this.clientStateKeyRe=new RegExp("^"+Oi+"_"+a+"_([^_]*)$"),this.mutationBatchKeyRe=new RegExp("^"+xi+"_"+a+"_(\\d+)(?:_(.*))?$"),this.queryTargetKeyRe=new RegExp("^"+Mi+"_"+a+"_(\\d+)$"),this.onlineStateKey=Li+"_"+r,this.platform.window.addEventListener("storage",this.storageListener)}return t.isAvailable=function(t){return!(!t.window||null==t.window.localStorage)},t.prototype.start=function(){return s.__awaiter(this,void 0,void 0,function(){var t,e,n,r,i,o,a,u,c,h,l,f,p,d,y,m=this
return s.__generator(this,function(v){switch(v.label){case 0:return _(!this.started,"WebStorageSharedClientState already started"),_(null!==this.syncEngine,"syncEngine property must be set before calling start()"),_(null!==this.onlineStateHandler,"onlineStateHandler property must be set before calling start()"),[4,this.syncEngine.getActiveClients()]
case 1:i=v.sent()
try{for(o=s.__values(i),a=o.next();!a.done;a=o.next())(u=a.value)!==this.localClientId&&(c=this.getItem(this.toWebStorageClientStateKey(u)))&&(h=Vi.fromWebStorageEntry(u,c))&&(this.activeClients[h.clientId]=h)}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}this.persistClientState(),(l=this.storage.getItem(this.onlineStateKey))&&(f=this.fromWebStorageOnlineState(l))&&this.handleOnlineStateEvent(f)
try{for(p=s.__values(this.earlyEvents),d=p.next();!d.done;d=p.next())y=d.value,this.handleWebStorageEvent(y)}catch(t){n={error:t}}finally{try{d&&!d.done&&(r=p.return)&&r.call(p)}finally{if(n)throw n.error}}return this.earlyEvents=[],this.platform.window.addEventListener("unload",function(){return m.shutdown()}),this.started=!0,[2]}})})},t.prototype.writeSequenceNumber=function(t){this.setItem(this.sequenceNumberKey,JSON.stringify(t))},t.prototype.getAllActiveQueryTargets=function(){var t=Vt()
return k(this.activeClients,function(e,n){t=t.unionWith(n.activeTargetIds)}),t},t.prototype.isActiveQueryTarget=function(t){for(var e in this.activeClients)if(this.activeClients.hasOwnProperty(e)&&this.activeClients[e].activeTargetIds.has(t))return!0
return!1},t.prototype.addPendingMutation=function(t){this.persistMutationState(t,"pending")},t.prototype.updateMutationState=function(t,e,n){this.persistMutationState(t,e,n),this.removeMutationState(t)},t.prototype.addLocalQueryTarget=function(t){var e="not-current"
if(this.isActiveQueryTarget(t)){var n=this.storage.getItem(this.toWebStorageQueryTargetMetadataKey(t))
if(n){var r=qi.fromWebStorageEntry(t,n)
r&&(e=r.state)}}return this.localClientState.addQueryTarget(t),this.persistClientState(),e},t.prototype.removeLocalQueryTarget=function(t){this.localClientState.removeQueryTarget(t),this.persistClientState()},t.prototype.isLocalQueryTarget=function(t){return this.localClientState.activeTargetIds.has(t)},t.prototype.clearQueryState=function(t){this.removeItem(this.toWebStorageQueryTargetMetadataKey(t))},t.prototype.updateQueryState=function(t,e,n){this.persistQueryTargetState(t,e,n)},t.prototype.handleUserChange=function(t,e,n){var r=this
e.forEach(function(t){r.removeMutationState(t)}),this.currentUser=t,n.forEach(function(t){r.addPendingMutation(t)})},t.prototype.setOnlineState=function(t){this.persistOnlineState(t)},t.prototype.shutdown=function(){this.started&&(this.platform.window.removeEventListener("storage",this.storageListener),this.removeItem(this.localClientStorageKey),this.started=!1)},t.prototype.getItem=function(t){var e=this.storage.getItem(t)
return y(Pi,"READ",t,e),e},t.prototype.setItem=function(t,e){y(Pi,"SET",t,e),this.storage.setItem(t,e)},t.prototype.removeItem=function(t){y(Pi,"REMOVE",t),this.storage.removeItem(t)},t.prototype.handleWebStorageEvent=function(t){var e=this
if(t.storageArea===this.storage){if(y(Pi,"EVENT",t.key,t.newValue),t.key===this.localClientStorageKey)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state")
this.queue.enqueueAndForget(function(){return s.__awaiter(e,void 0,void 0,function(){var e,n,r,i,o,a
return s.__generator(this,function(s){if(!this.started)return this.earlyEvents.push(t),[2]
if(null===t.key)return[2]
if(this.clientStateKeyRe.test(t.key)){if(null==t.newValue)return n=this.fromWebStorageClientStateKey(t.key),[2,this.handleClientStateEvent(n,null)]
if(e=this.fromWebStorageClientState(t.key,t.newValue))return[2,this.handleClientStateEvent(e.clientId,e)]}else if(this.mutationBatchKeyRe.test(t.key)){if(null!==t.newValue&&(r=this.fromWebStorageMutationMetadata(t.key,t.newValue)))return[2,this.handleMutationBatchEvent(r)]}else if(this.queryTargetKeyRe.test(t.key)){if(null!==t.newValue&&(i=this.fromWebStorageQueryTargetMetadata(t.key,t.newValue)))return[2,this.handleQueryTargetEvent(i)]}else if(t.key===this.onlineStateKey){if(null!==t.newValue&&(o=this.fromWebStorageOnlineState(t.newValue)))return[2,this.handleOnlineStateEvent(o)]}else t.key===this.sequenceNumberKey&&(_(!!this.sequenceNumberHandler,"Missing sequenceNumberHandler"),(a=function(t){var e=ot.INVALID
if(null!=t)try{var n=JSON.parse(t)
_("number"==typeof n,"Found non-numeric sequence number"),e=n}catch(t){m(Pi,"Failed to read sequence number from WebStorage",t)}return e}(t.newValue))!==ot.INVALID&&this.sequenceNumberHandler(a))
return[2]})})})}},Object.defineProperty(t.prototype,"localClientState",{get:function(){return this.activeClients[this.localClientId]},enumerable:!0,configurable:!0}),t.prototype.persistClientState=function(){this.setItem(this.localClientStorageKey,this.localClientState.toWebStorageJSON())},t.prototype.persistMutationState=function(t,e,n){var r=new Ui(this.currentUser,t,e,n),i=this.toWebStorageMutationBatchKey(t)
this.setItem(i,r.toWebStorageJSON())},t.prototype.removeMutationState=function(t){var e=this.toWebStorageMutationBatchKey(t)
this.removeItem(e)},t.prototype.persistOnlineState=function(t){var e={clientId:this.localClientId,onlineState:dr[t]}
this.storage.setItem(this.onlineStateKey,JSON.stringify(e))},t.prototype.persistQueryTargetState=function(t,e,n){var r=this.toWebStorageQueryTargetMetadataKey(t),i=new qi(t,e,n)
this.setItem(r,i.toWebStorageJSON())},t.prototype.toWebStorageClientStateKey=function(t){return _(-1===t.indexOf("_"),"Client key cannot contain '_', but was '"+t+"'"),Oi+"_"+this.persistenceKey+"_"+t},t.prototype.toWebStorageQueryTargetMetadataKey=function(t){return Mi+"_"+this.persistenceKey+"_"+t},t.prototype.toWebStorageMutationBatchKey=function(t){var e=xi+"_"+this.persistenceKey+"_"+t
return this.currentUser.isAuthenticated()&&(e+="_"+this.currentUser.uid),e},t.prototype.fromWebStorageClientStateKey=function(t){var e=this.clientStateKeyRe.exec(t)
return e?e[1]:null},t.prototype.fromWebStorageClientState=function(t,e){var n=this.fromWebStorageClientStateKey(t)
return _(null!==n,"Cannot parse client state key '"+t+"'"),Vi.fromWebStorageEntry(n,e)},t.prototype.fromWebStorageMutationMetadata=function(t,e){var n=this.mutationBatchKeyRe.exec(t)
_(null!==n,"Cannot parse mutation batch key '"+t+"'")
var r=Number(n[1]),i=void 0!==n[2]?n[2]:null
return Ui.fromWebStorageEntry(new Ri(i),r,e)},t.prototype.fromWebStorageQueryTargetMetadata=function(t,e){var n=this.queryTargetKeyRe.exec(t)
_(null!==n,"Cannot parse query target key '"+t+"'")
var r=Number(n[1])
return qi.fromWebStorageEntry(r,e)},t.prototype.fromWebStorageOnlineState=function(t){return Bi.fromWebStorageEntry(t)},t.prototype.handleMutationBatchEvent=function(t){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){return t.user.uid!==this.currentUser.uid?(y(Pi,"Ignoring mutation for non-active user "+t.user.uid),[2]):[2,this.syncEngine.applyBatchState(t.batchId,t.state,t.error)]})})},t.prototype.handleQueryTargetEvent=function(t){return this.syncEngine.applyTargetState(t.targetId,t.state,t.error)},t.prototype.handleClientStateEvent=function(t,e){var n=this,r=this.getAllActiveQueryTargets()
e?this.activeClients[t]=e:delete this.activeClients[t]
var i=this.getAllActiveQueryTargets(),o=[],a=[]
return i.forEach(function(t){return s.__awaiter(n,void 0,void 0,function(){return s.__generator(this,function(e){return r.has(t)||o.push(t),[2]})})}),r.forEach(function(t){return s.__awaiter(n,void 0,void 0,function(){return s.__generator(this,function(e){return i.has(t)||a.push(t),[2]})})}),this.syncEngine.applyActiveTargetsChange(o,a)},t.prototype.handleOnlineStateEvent=function(t){this.activeClients[t.clientId]&&this.onlineStateHandler(t.onlineState)},t}(),Qi=function(){function t(){this.localState=new ji,this.queryState={},this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null}return t.prototype.addPendingMutation=function(t){},t.prototype.updateMutationState=function(t,e,n){},t.prototype.addLocalQueryTarget=function(t){return this.localState.addQueryTarget(t),this.queryState[t]||"not-current"},t.prototype.updateQueryState=function(t,e,n){this.queryState[t]=e},t.prototype.removeLocalQueryTarget=function(t){this.localState.removeQueryTarget(t)},t.prototype.isLocalQueryTarget=function(t){return this.localState.activeTargetIds.has(t)},t.prototype.clearQueryState=function(t){delete this.queryState[t]},t.prototype.getAllActiveQueryTargets=function(){return this.localState.activeTargetIds},t.prototype.isActiveQueryTarget=function(t){return this.localState.activeTargetIds.has(t)},t.prototype.start=function(){return this.localState=new ji,Promise.resolve()},t.prototype.handleUserChange=function(t,e,n){},t.prototype.setOnlineState=function(t){},t.prototype.shutdown=function(){},t.prototype.writeSequenceNumber=function(t){},t}(),Ki=function(){function t(t,e){this.cacheSizeBytes=t,this.synchronizeTabs=e}return t.prototype.lruParams=function(){return an.withCacheSize(this.cacheSizeBytes)},t}(),Gi=function(){},Hi=function(){function t(t,e,n,r){this.platform=t,this.databaseInfo=e,this.credentials=n,this.asyncQueue=r,this.clientId=H.newId(),this._clientShutdown=!1}return t.prototype.start=function(t){var e=this
this.verifyNotShutdown()
var n=new lt,r=new lt,i=!1
return this.credentials.setChangeListener(function(o){i?e.asyncQueue.enqueueAndForget(function(){return e.handleCredentialChange(o)}):(i=!0,e.initializePersistence(t,r,o).then(function(t){return e.initializeRest(o,t)}).then(n.resolve,n.reject))}),this.asyncQueue.enqueueAndForget(function(){return n.promise}),r.promise},t.prototype.enableNetwork=function(){var t=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return t.syncEngine.enableNetwork()})},t.prototype.initializePersistence=function(t,e,n){var r=this
return t instanceof Ki?this.startIndexedDbPersistence(n,t).then(function(t){return e.resolve(),t}).catch(function(t){if(e.reject(t),!r.canFallback(t))throw t
return console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.startMemoryPersistence()}):(e.resolve(),this.startMemoryPersistence())},t.prototype.canFallback=function(t){return t instanceof T?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code},t.prototype.verifyNotShutdown=function(){if(this._clientShutdown)throw new T(E.FAILED_PRECONDITION,"The client has already been shutdown.")},t.prototype.startIndexedDbPersistence=function(t,e){var n=this,r=dn.buildStoragePrefix(this.databaseInfo),i=new bi(this.databaseInfo.databaseId,{useProto3Json:!0})
return Promise.resolve().then(function(){return s.__awaiter(n,void 0,void 0,function(){var n,o
return s.__generator(this,function(a){switch(a.label){case 0:if(e.synchronizeTabs&&!Wi.isAvailable(this.platform))throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.")
return o=e.lruParams(),e.synchronizeTabs?(this.sharedClientState=new Wi(this.asyncQueue,this.platform,r,this.clientId,t),[4,dn.createMultiClientIndexedDbPersistence(r,this.clientId,this.platform,this.asyncQueue,i,o,{sequenceNumberSyncer:this.sharedClientState})]):[3,2]
case 1:return n=a.sent(),[3,4]
case 2:return this.sharedClientState=new Qi,[4,dn.createIndexedDbPersistence(r,this.clientId,this.platform,this.asyncQueue,i,o)]
case 3:n=a.sent(),a.label=4
case 4:return this.persistence=n,[2,n.referenceDelegate.garbageCollector]}})})})},t.prototype.startMemoryPersistence=function(){return this.persistence=nr.createEagerPersistence(this.clientId),this.sharedClientState=new Qi,Promise.resolve(null)},t.prototype.initializeRest=function(t,e){var n=this
return y("FirestoreClient","Initializing. user=",t.uid),this.platform.loadConnection(this.databaseInfo).then(function(r){return s.__awaiter(n,void 0,void 0,function(){var n,i,o,a,u,c=this
return s.__generator(this,function(h){switch(h.label){case 0:return this.localStore=new Jn(this.persistence,t),e&&(this.lruScheduler=new sn(e,this.asyncQueue,this.localStore)),n=this.platform.newConnectivityMonitor(),i=this.platform.newSerializer(this.databaseInfo.databaseId),o=new Er(this.asyncQueue,r,this.credentials,i),a=function(t){return c.syncEngine.applyOnlineStateChange(t,yr.RemoteStore)},u=function(t){return c.syncEngine.applyOnlineStateChange(t,yr.SharedClientState)},this.remoteStore=new Kr(this.localStore,o,this.asyncQueue,a,n),this.syncEngine=new Di(this.localStore,this.remoteStore,this.sharedClientState,t),this.sharedClientState.onlineStateHandler=u,this.remoteStore.syncEngine=this.syncEngine,this.sharedClientState.syncEngine=this.syncEngine,this.eventMgr=new Ei(this.syncEngine),[4,this.sharedClientState.start()]
case 1:return h.sent(),[4,this.remoteStore.start()]
case 2:return h.sent(),[4,this.persistence.setPrimaryStateListener(function(t){return s.__awaiter(c,void 0,void 0,function(){return s.__generator(this,function(e){switch(e.label){case 0:return[4,this.syncEngine.applyPrimaryState(t)]
case 1:return e.sent(),this.lruScheduler&&(t&&!this.lruScheduler.started?this.lruScheduler.start():t||this.lruScheduler.stop()),[2]}})})})]
case 3:return h.sent(),[4,this.persistence.setDatabaseDeletedListener(function(){return s.__awaiter(c,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return[4,this.shutdown()]
case 1:return t.sent(),[2]}})})})]
case 4:return h.sent(),[2]}})})})},t.prototype.handleCredentialChange=function(t){return this.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Credential Changed. Current user: "+t.uid),this.syncEngine.handleCredentialChange(t)},t.prototype.disableNetwork=function(){var t=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return t.syncEngine.disableNetwork()})},t.prototype.shutdown=function(){var t=this
return this.asyncQueue.enqueue(function(){return s.__awaiter(t,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this._clientShutdown?[3,4]:(this.lruScheduler&&this.lruScheduler.stop(),[4,this.remoteStore.shutdown()])
case 1:return t.sent(),[4,this.sharedClientState.shutdown()]
case 2:return t.sent(),[4,this.persistence.shutdown()]
case 3:t.sent(),this.credentials.removeChangeListener(),this._clientShutdown=!0,t.label=4
case 4:return[2]}})})})},t.prototype.listen=function(t,e,n){var r=this
this.verifyNotShutdown()
var i=new Ti(t,e,n)
return this.asyncQueue.enqueueAndForget(function(){return r.eventMgr.listen(i)}),i},t.prototype.unlisten=function(t){var e=this
this.verifyNotShutdown(),this.asyncQueue.enqueueAndForget(function(){return e.eventMgr.unlisten(t)})},t.prototype.getDocumentFromLocalCache=function(t){var e=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return e.localStore.readDocument(t)}).then(function(t){if(t instanceof de)return t
if(t instanceof ye)return null
throw new T(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")})},t.prototype.getDocumentsFromLocalCache=function(t){var e=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return e.localStore.executeQuery(t)}).then(function(e){var n=Ut(),r=new Ni(t,n),i=r.computeDocChanges(e)
return r.applyChanges(i,!1).snapshot})},t.prototype.write=function(t){var e=this
this.verifyNotShutdown()
var n=new lt
return this.asyncQueue.enqueueAndForget(function(){return e.syncEngine.write(t,n)}),n.promise},t.prototype.databaseId=function(){return this.databaseInfo.databaseId},Object.defineProperty(t.prototype,"clientShutdown",{get:function(){return this._clientShutdown},enumerable:!0,configurable:!0}),t.prototype.transaction=function(t){var e=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return s.__awaiter(e,void 0,void 0,function(){return s.__generator(this,function(t){return[2]})})}).then(function(){return e.syncEngine.runTransaction(t)})},t}(),zi=function(){function t(t){this.observer=t,this.muted=!1}return t.prototype.next=function(t){this.scheduleEvent(this.observer.next,t)},t.prototype.error=function(t){this.scheduleEvent(this.observer.error,t)},t.prototype.mute=function(){this.muted=!0},t.prototype.scheduleEvent=function(t,e){var n=this
this.muted||setTimeout(function(){n.muted||t(e)},0)},t}(),Yi=function(){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
!function(t,e,n,r){if(!(e instanceof Array)||e.length<1)throw new T(E.INVALID_ARGUMENT,"Function FieldPath() requires its fieldNames argument to be an array with at least "+G(1,"element")+".")}(0,t)
for(var n=0;n<t.length;++n)if(x("FieldPath","string",n,t[n]),0===t[n].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.")
this._internalPath=new ct(t)}return t.documentId=function(){return t._DOCUMENT_ID},t.prototype.isEqual=function(e){if(!(e instanceof t))throw Q("isEqual","FieldPath",1,e)
return this._internalPath.isEqual(e._internalPath)},t._DOCUMENT_ID=new t(ct.keyField().canonicalString()),t}(),Xi=new RegExp("[~\\*/\\[\\]]"),Ji=function(t,e){this.user=e,this.type="OAuth",this.authHeaders={Authorization:"Bearer "+t}},$i=function(){function t(){this.changeListener=null}return t.prototype.getToken=function(){return Promise.resolve(null)},t.prototype.invalidateToken=function(){},t.prototype.setChangeListener=function(t){_(!this.changeListener,"Can only call setChangeListener() once."),this.changeListener=t,t(Ri.UNAUTHENTICATED)},t.prototype.removeChangeListener=function(){_(null!==this.changeListener,"removeChangeListener() when no listener registered"),this.changeListener=null},t}(),Zi=function(){function t(t){var e=this
this.app=t,this.tokenListener=null,this.tokenCounter=0,this.changeListener=null,this.forceRefresh=!1,this.tokenListener=function(){e.tokenCounter++,e.currentUser=e.getUser(),e.changeListener&&e.changeListener(e.currentUser)},this.tokenCounter=0,this.app.INTERNAL.addAuthTokenListener(this.tokenListener)}return t.prototype.getToken=function(){var t=this
_(null!=this.tokenListener,"getToken cannot be called after listener removed.")
var e=this.tokenCounter,n=this.forceRefresh
return this.forceRefresh=!1,this.app.INTERNAL.getToken(n).then(function(n){if(t.tokenCounter!==e)throw new T(E.ABORTED,"getToken aborted due to token change.")
return n?(_("string"==typeof n.accessToken,"Invalid tokenData returned from getToken():"+n),new Ji(n.accessToken,t.currentUser)):null})},t.prototype.invalidateToken=function(){this.forceRefresh=!0},t.prototype.setChangeListener=function(t){_(!this.changeListener,"Can only call setChangeListener() once."),this.changeListener=t,this.currentUser&&t(this.currentUser)},t.prototype.removeChangeListener=function(){_(null!=this.tokenListener,"removeChangeListener() called twice"),_(null!==this.changeListener,"removeChangeListener() called when no listener registered"),this.app.INTERNAL.removeAuthTokenListener(this.tokenListener),this.tokenListener=null,this.changeListener=null},t.prototype.getUser=function(){var t=this.app.INTERNAL.getUid()
return _(null===t||"string"==typeof t,"Received invalid UID: "+t),new Ri(t)},t}(),to=function(){function t(t,e){this.gapi=t,this.sessionIndex=e,this.type="FirstParty",this.user=Ri.FIRST_PARTY}return Object.defineProperty(t.prototype,"authHeaders",{get:function(){var t={"X-Goog-AuthUser":this.sessionIndex},e=this.gapi.auth.getAuthHeaderValueForFirstParty([])
return e&&(t.Authorization=e),t},enumerable:!0,configurable:!0}),t}(),eo=function(){function t(t,e){this.gapi=t,this.sessionIndex=e}return t.prototype.getToken=function(){return Promise.resolve(new to(this.gapi,this.sessionIndex))},t.prototype.setChangeListener=function(t){t(Ri.FIRST_PARTY)},t.prototype.removeChangeListener=function(){},t.prototype.invalidateToken=function(){},t}()
function no(t){return function(t,e){var n,i
if("object"!==r(t)||null===t)return!1
var o=t
try{for(var a=s.__values(["next","error","complete"]),u=a.next();!u.done;u=a.next()){var c=u.value
if(c in o&&"function"==typeof o[c])return!0}}catch(t){n={error:t}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}return!1}(t)}var ro,io=function(){function t(t){this._methodName=t}return t.delete=function(){return D("FieldValue.delete",arguments),oo.instance},t.serverTimestamp=function(){return D("FieldValue.serverTimestamp",arguments),ao.instance},t.arrayUnion=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return P("FieldValue.arrayUnion",arguments,1),new so(t)},t.arrayRemove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return P("FieldValue.arrayRemove",arguments,1),new uo(t)},t.increment=function(t){return x("FieldValue.increment","number",1,t),R("FieldValue.increment",arguments,1),new co(t)},t.prototype.isEqual=function(t){return this===t},t}(),oo=function(t){function e(){return t.call(this,"FieldValue.delete")||this}return s.__extends(e,t),e.instance=new e,e}(io),ao=function(t){function e(){return t.call(this,"FieldValue.serverTimestamp")||this}return s.__extends(e,t),e.instance=new e,e}(io),so=function(t){function e(e){var n=t.call(this,"FieldValue.arrayUnion")||this
return n._elements=e,n}return s.__extends(e,t),e}(io),uo=function(t){function e(e){var n=t.call(this,"FieldValue.arrayRemove")||this
return n._elements=e,n}return s.__extends(e,t),e}(io),co=function(t){function e(e){var n=t.call(this,"FieldValue.increment")||this
return n._operand=e,n}return s.__extends(e,t),e}(io),ho=S(io,"Use FieldValue.<field>() instead."),lo=/^__.*__$/,fo=function(){function t(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}return t.prototype.toMutations=function(t,e){var n=[]
return null!==this.fieldMask?n.push(new Kn(t,this.data,this.fieldMask,e)):n.push(new Qn(t,this.data,e)),this.fieldTransforms.length>0&&n.push(new Gn(t,this.fieldTransforms)),n},t}(),po=function(){function t(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}return t.prototype.toMutations=function(t,e){var n=[new Kn(t,this.data,this.fieldMask,e)]
return this.fieldTransforms.length>0&&n.push(new Gn(t,this.fieldTransforms)),n},t}()
function yo(t){switch(t){case ro.Set:case ro.MergeSet:case ro.Update:return!0
case ro.Argument:return!1
default:throw g("Unexpected case for UserDataSource: "+t)}}!function(t){t[t.Set=0]="Set",t[t.Update=1]="Update",t[t.MergeSet=2]="MergeSet",t[t.Argument=3]="Argument"}(ro||(ro={}))
var mo=function(){function t(t,e,n,r,i,o){this.dataSource=t,this.methodName=e,this.path=n,this.arrayElement=r,void 0===i&&this.validatePath(),this.arrayElement=void 0!==r&&r,this.fieldTransforms=i||[],this.fieldMask=o||[]}return t.prototype.childContextForField=function(e){var n=null==this.path?null:this.path.child(e),r=new t(this.dataSource,this.methodName,n,!1,this.fieldTransforms,this.fieldMask)
return r.validatePathSegment(e),r},t.prototype.childContextForFieldPath=function(e){var n=null==this.path?null:this.path.child(e),r=new t(this.dataSource,this.methodName,n,!1,this.fieldTransforms,this.fieldMask)
return r.validatePath(),r},t.prototype.childContextForArray=function(e){return new t(this.dataSource,this.methodName,null,!0,this.fieldTransforms,this.fieldMask)},t.prototype.createError=function(t){var e=null===this.path||this.path.isEmpty()?"":" (found in field "+this.path.toString()+")"
return new T(E.INVALID_ARGUMENT,"Function "+this.methodName+"() called with invalid data. "+t+e)},t.prototype.contains=function(t){return void 0!==this.fieldMask.find(function(e){return t.isPrefixOf(e)})||void 0!==this.fieldTransforms.find(function(e){return t.isPrefixOf(e.field)})},t.prototype.validatePath=function(){if(null!==this.path)for(var t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))},t.prototype.validatePathSegment=function(t){if(yo(this.dataSource)&&lo.test(t))throw this.createError("Document fields cannot begin and end with __")},t}(),vo=function(t,e){this.databaseId=t,this.key=e},go=function(){function t(t){this.preConverter=t}return t.prototype.parseSetData=function(t,e){var n=new mo(ro.Set,t,ct.EMPTY_PATH)
bo("Data must be an object, but it was:",n,e)
var r=this.parseData(e,n)
return new fo(r,null,n.fieldTransforms)},t.prototype.parseMergeData=function(t,e,n){var r,i,o=new mo(ro.MergeSet,t,ct.EMPTY_PATH)
bo("Data must be an object, but it was:",o,e)
var a,u,c=this.parseData(e,o)
if(n){var h=new kt(ct.comparator)
try{for(var l=s.__values(n),f=l.next();!f.done;f=l.next()){var p=f.value,d=void 0
if(p instanceof Yi)d=p._internalPath
else{if("string"!=typeof p)throw g("Expected stringOrFieldPath to be a string or a FieldPath")
d=Eo(t,p)}if(!o.contains(d))throw new T(E.INVALID_ARGUMENT,"Field '"+d+"' is specified in your field mask but missing from your input data.")
h=h.add(d)}}catch(t){r={error:t}}finally{try{f&&!f.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}a=qn.fromSet(h),u=o.fieldTransforms.filter(function(t){return a.covers(t.field)})}else a=qn.fromArray(o.fieldMask),u=o.fieldTransforms
return new fo(c,a,u)},t.prototype.parseUpdateData=function(t,e){var n=this,r=new mo(ro.Update,t,ct.EMPTY_PATH)
bo("Data must be an object, but it was:",r,e)
var i=new kt(ct.comparator),o=Fn.EMPTY
k(e,function(e,a){var s=Eo(t,e),u=r.childContextForFieldPath(s)
if((a=n.runPreConverter(a,u))instanceof oo)i=i.add(s)
else{var c=n.parseData(a,u)
null!=c&&(i=i.add(s),o=o.set(s,c))}})
var a=qn.fromSet(i)
return new po(o,a,r.fieldTransforms)},t.prototype.parseUpdateVarargs=function(t,e,n,r){var i=new mo(ro.Update,t,ct.EMPTY_PATH),o=[wo(t,e)],a=[n]
if(r.length%2!=0)throw new T(E.INVALID_ARGUMENT,"Function "+t+"() needs to be called with an even number of arguments that alternate between field names and values.")
for(var s=0;s<r.length;s+=2)o.push(wo(t,r[s])),a.push(r[s+1])
var u=new kt(ct.comparator),c=Fn.EMPTY
for(s=0;s<o.length;++s){var h=o[s],l=i.childContextForFieldPath(h),f=this.runPreConverter(a[s],l)
if(f instanceof oo)u=u.add(h)
else{var p=this.parseData(f,l)
null!=p&&(u=u.add(h),c=c.set(h,p))}}var d=qn.fromSet(u)
return new po(c,d,i.fieldTransforms)},t.prototype.parseQueryValue=function(t,e){var n=new mo(ro.Argument,t,ct.EMPTY_PATH),r=this.parseData(e,n)
return _(null!=r,"Parsed data should not be null."),_(0===n.fieldTransforms.length,"Field transforms should have been disallowed."),r},t.prototype.runPreConverter=function(t,e){try{return this.preConverter(t)}catch(t){var n=To(t)
throw e.createError(n)}},t.prototype.parseData=function(t,e){if(_o(t=this.runPreConverter(t,e)))return bo("Unsupported field value:",e,t),this.parseObject(t,e)
if(t instanceof io)return this.parseSentinelFieldValue(t,e),null
if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.arrayElement)throw e.createError("Nested arrays are not supported")
return this.parseArray(t,e)}return this.parseScalarValue(t,e)},t.prototype.parseObject=function(t,e){var n=this,r=new St(z)
return A(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):k(t,function(t,i){var o=n.parseData(i,e.childContextForField(t))
null!=o&&(r=r.insert(t,o))}),new Fn(r)},t.prototype.parseArray=function(t,e){var n,r,i=[],o=0
try{for(var a=s.__values(t),u=a.next();!u.done;u=a.next()){var c=u.value,h=this.parseData(c,e.childContextForArray(o))
null==h&&(h=Sn.INSTANCE),i.push(h),o++}}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return new Un(i)},t.prototype.parseSentinelFieldValue=function(t,e){if(!yo(e.dataSource))throw e.createError(t._methodName+"() can only be used with update() and set()")
if(null===e.path)throw e.createError(t._methodName+"() is not currently supported inside arrays")
if(t instanceof oo){if(e.dataSource!==ro.MergeSet)throw e.dataSource===ro.Update?(_(e.path.length>0,"FieldValue.delete() at the top level should have already been handled."),e.createError("FieldValue.delete() can only appear at the top level of your update data")):e.createError("FieldValue.delete() cannot be used with set() unless you pass {merge:true}")
e.fieldMask.push(e.path)}else if(t instanceof ao)e.fieldTransforms.push(new Vn(e.path,si.instance))
else if(t instanceof so){var n=this.parseArrayTransformElements(t._methodName,t._elements),r=new ui(n)
e.fieldTransforms.push(new Vn(e.path,r))}else if(t instanceof uo){n=this.parseArrayTransformElements(t._methodName,t._elements)
var i=new ci(n)
e.fieldTransforms.push(new Vn(e.path,i))}else if(t instanceof co){var o=this.parseQueryValue("FieldValue.increment",t._operand),a=new hi(o)
e.fieldTransforms.push(new Vn(e.path,a))}else g("Unknown FieldValue type: "+t)},t.prototype.parseScalarValue=function(t,e){if(null===t)return Sn.INSTANCE
if("number"==typeof t)return lr(t)?new An(t):new Dn(t)
if("boolean"==typeof t)return In.of(t)
if("string"==typeof t)return new Rn(t)
if(t instanceof Date)return new Pn(Et.fromDate(t))
if(t instanceof Et)return new Pn(new Et(t.seconds,1e3*Math.floor(t.nanoseconds/1e3)))
if(t instanceof Gr)return new Ln(t)
if(t instanceof tt)return new xn(t)
if(t instanceof vo)return new Mn(t.databaseId,t.key)
throw e.createError("Unsupported field value: "+B(t))},t.prototype.parseArrayTransformElements=function(t,e){var n=this
return e.map(function(e,r){var i=new mo(ro.Argument,t,ct.EMPTY_PATH)
return n.parseData(e,i.childContextForArray(r))})},t}()
function _o(t){return!("object"!==r(t)||null===t||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof Gr||t instanceof tt||t instanceof vo||t instanceof io)}function bo(t,e,n){if(!_o(n)||!V(n)){var r=B(n)
throw"an object"===r?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function wo(t,e){if(e instanceof Yi)return e._internalPath
if("string"==typeof e)return Eo(t,e)
throw new T(E.INVALID_ARGUMENT,"Function "+t+"() called with invalid data. Field path arguments must be of type string or FieldPath.")}function Eo(t,e){try{return function(t){if(t.search(Xi)>=0)throw new T(E.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not contain '~', '*', '/', '[', or ']'")
try{return new(Yi.bind.apply(Yi,s.__spread([void 0],t.split("."))))}catch(e){throw new T(E.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")}}(e)._internalPath}catch(e){var n=To(e)
throw new T(E.INVALID_ARGUMENT,"Function "+t+"() called with invalid data. "+n)}}function To(t){return t instanceof Error?t.message:t.toString()}var So="firestore.googleapis.com",Io=!0,Co=!0,No=!1,ko=an.COLLECTION_DISABLED,Ao=function(){function t(t){if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set")
this.host=So,this.ssl=Io}else L("settings","non-empty string","host",t.host),this.host=t.host,F("settings","boolean","ssl",t.ssl),this.ssl=C(t.ssl,Io)
if(W("settings",t,["host","ssl","credentials","timestampsInSnapshots","cacheSizeBytes","experimentalForceLongPolling"]),F("settings","object","credentials",t.credentials),this.credentials=t.credentials,F("settings","boolean","timestampsInSnapshots",t.timestampsInSnapshots),!0===t.timestampsInSnapshots?m("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now."):!1===t.timestampsInSnapshots&&m("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."),this.timestampsInSnapshots=C(t.timestampsInSnapshots,Co),F("settings","number","cacheSizeBytes",t.cacheSizeBytes),void 0===t.cacheSizeBytes)this.cacheSizeBytes=an.DEFAULT_CACHE_SIZE_BYTES
else{if(t.cacheSizeBytes!==ko&&t.cacheSizeBytes<an.MINIMUM_CACHE_SIZE_BYTES)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least "+an.MINIMUM_CACHE_SIZE_BYTES)
this.cacheSizeBytes=t.cacheSizeBytes}F("settings","boolean","experimentalForceLongPolling",t.experimentalForceLongPolling),this.forceLongPolling=void 0===t.experimentalForceLongPolling?No:t.experimentalForceLongPolling}return t.prototype.isEqual=function(t){return this.host===t.host&&this.ssl===t.ssl&&this.timestampsInSnapshots===t.timestampsInSnapshots&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.forceLongPolling===t.forceLongPolling},t}(),Do=function(){},Ro=function(){function t(e){var n=this
this._queue=new pt,this.INTERNAL={delete:function(){return s.__awaiter(n,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.ensureClientConfigured(),[4,this._firestoreClient.shutdown()]
case 1:return t.sent(),[2]}})})}}
var i=new Do
if("object"===r(e.options)){var o=e
i.firebaseApp=o,i.databaseId=t.databaseIdFromApp(o),i.persistenceKey=i.firebaseApp.name,i.credentials=new Zi(o)}else{var a=e
if(!a.projectId)throw new T(E.INVALID_ARGUMENT,"Must provide projectId")
i.databaseId=new it(a.projectId,a.database),i.persistenceKey="[DEFAULT]",i.credentials=new $i}i.settings=new Ao({}),this._config=i,this._databaseId=i.databaseId}return t.prototype.settings=function(t){if(R("Firestore.settings",arguments,1),x("Firestore.settings","object",1,t),I(t,"persistence"))throw new T(E.INVALID_ARGUMENT,'"persistence" is now specified with a separate call to firestore.enablePersistence().')
var e=new Ao(t)
if(this._firestoreClient&&!this._config.settings.isEqual(e))throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.")
this._config.settings=e,void 0!==e.credentials&&(this._config.credentials=function(t){if(!t)return new $i
switch(t.type){case"gapi":var e=t.client
return _(!("object"!==r(e)||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty),"unexpected gapi interface"),new eo(e,t.sessionIndex||"0")
case"provider":return t.client
default:throw new T(E.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))},t.prototype.enableNetwork=function(){return this.ensureClientConfigured(),this._firestoreClient.enableNetwork()},t.prototype.disableNetwork=function(){return this.ensureClientConfigured(),this._firestoreClient.disableNetwork()},t.prototype.enablePersistence=function(t){if(this._firestoreClient)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.")
var e=!1
return t&&(void 0!==t.experimentalTabSynchronization&&m("The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."),e=C(void 0!==t.synchronizeTabs?t.synchronizeTabs:t.experimentalTabSynchronization,!1)),this.configureClient(new Ki(this._config.settings.cacheSizeBytes,e))},t.prototype.clearPersistence=function(){var t=this,e=dn.buildStoragePrefix(this.makeDatabaseInfo()),n=new lt
return this._queue.enqueueAndForget(function(){return s.__awaiter(t,void 0,void 0,function(){var t
return s.__generator(this,function(r){switch(r.label){case 0:if(r.trys.push([0,2,,3]),void 0!==this._firestoreClient&&!this._firestoreClient.clientShutdown)throw new T(E.FAILED_PRECONDITION,"Persistence cannot be cleared after this Firestore instance is initialized.")
return[4,dn.clearPersistence(e)]
case 1:return r.sent(),n.resolve(),[3,3]
case 2:return t=r.sent(),n.reject(t),[3,3]
case 3:return[2]}})})}),n.promise},t.prototype.ensureClientConfigured=function(){return this._firestoreClient||this.configureClient(new Gi),this._firestoreClient},t.prototype.makeDatabaseInfo=function(){return new nt(this._config.databaseId,this._config.persistenceKey,this._config.settings.host,this._config.settings.ssl,this._config.settings.forceLongPolling)},t.prototype.configureClient=function(t){var e=this
_(!!this._config.settings.host,"FirestoreSettings.host cannot be falsey"),_(!this._firestoreClient,"configureClient() called multiple times")
var n=this.makeDatabaseInfo()
return this._dataConverter=new go(function(t){if(t instanceof xo){var n=e._config.databaseId,r=t.firestore._config.databaseId
if(!r.isEqual(n))throw new T(E.INVALID_ARGUMENT,"Document reference is for database "+r.projectId+"/"+r.database+" but should be for database "+n.projectId+"/"+n.database)
return new vo(e._config.databaseId,t._key)}return t}),this._firestoreClient=new Hi(b.getPlatform(),n,this._config.credentials,this._queue),this._firestoreClient.start(t)},t.databaseIdFromApp=function(t){var e=t.options
if(!I(e,"projectId"))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.')
var n=e.projectId
if(!n||"string"!=typeof n)throw new T(E.INVALID_ARGUMENT,"projectId must be a string in FirebaseApp.options")
return new it(n)},Object.defineProperty(t.prototype,"app",{get:function(){if(!this._config.firebaseApp)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available")
return this._config.firebaseApp},enumerable:!0,configurable:!0}),t.prototype.collection=function(t){return R("Firestore.collection",arguments,1),x("Firestore.collection","non-empty string",1,t),this.ensureClientConfigured(),new Vo(st.fromString(t),this)},t.prototype.doc=function(t){return R("Firestore.doc",arguments,1),x("Firestore.doc","non-empty string",1,t),this.ensureClientConfigured(),xo.forPath(st.fromString(t),this)},t.prototype.collectionGroup=function(t){if(R("Firestore.collectionGroup",arguments,1),x("Firestore.collectionGroup","non-empty string",1,t),t.indexOf("/")>=0)throw new T(E.INVALID_ARGUMENT,"Invalid collection ID '"+t+"' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.")
return this.ensureClientConfigured(),new Uo(new Hr(st.EMPTY_PATH,t),this)},t.prototype.runTransaction=function(t){var e=this
return R("Firestore.runTransaction",arguments,1),x("Firestore.runTransaction","function",1,t),this.ensureClientConfigured().transaction(function(n){return t(new Po(e,n))})},t.prototype.batch=function(){return this.ensureClientConfigured(),new Oo(this)},Object.defineProperty(t,"logLevel",{get:function(){switch(p()){case o.DEBUG:return"debug"
case o.ERROR:return"error"
case o.SILENT:return"silent"
default:return g("Unknown log level: "+p())}},enumerable:!0,configurable:!0}),t.setLogLevel=function(t){switch(R("Firestore.setLogLevel",arguments,1),x("Firestore.setLogLevel","non-empty string",1,t),t){case"debug":d(o.DEBUG)
break
case"error":d(o.ERROR)
break
case"silent":d(o.SILENT)
break
default:throw new T(E.INVALID_ARGUMENT,"Invalid log level: "+t)}},t.prototype._areTimestampsInSnapshotsEnabled=function(){return this._config.settings.timestampsInSnapshots},t}(),Po=function(){function t(t,e){this._firestore=t,this._transaction=e}return t.prototype.get=function(t){var e=this
R("Transaction.get",arguments,1)
var n=Qo("Transaction.get",t,this._firestore)
return this._transaction.lookup([n._key]).then(function(t){if(!t||1!==t.length)return g("Mismatch in docs returned from document lookup.")
var r=t[0]
if(r instanceof ye)return new Lo(e._firestore,n._key,null,!1,!1)
if(r instanceof de)return new Lo(e._firestore,n._key,r,!1,!1)
throw g("BatchGetDocumentsRequest returned unexpected document type: "+r.constructor.name)})},t.prototype.set=function(t,e,n){O("Transaction.set",arguments,2,3)
var r=Qo("Transaction.set",t,this._firestore),i=(n=Bo("Transaction.set",n)).merge||n.mergeFields?this._firestore._dataConverter.parseMergeData("Transaction.set",e,n.mergeFields):this._firestore._dataConverter.parseSetData("Transaction.set",e)
return this._transaction.set(r._key,i),this},t.prototype.update=function(t,e,n){for(var r,i,o=[],a=3;a<arguments.length;a++)o[a-3]=arguments[a]
return"string"==typeof e||e instanceof Yi?(P("Transaction.update",arguments,3),r=Qo("Transaction.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateVarargs("Transaction.update",e,n,o)):(R("Transaction.update",arguments,2),r=Qo("Transaction.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateData("Transaction.update",e)),this._transaction.update(r._key,i),this},t.prototype.delete=function(t){R("Transaction.delete",arguments,1)
var e=Qo("Transaction.delete",t,this._firestore)
return this._transaction.delete(e._key),this},t}(),Oo=function(){function t(t){this._firestore=t,this._mutations=[],this._committed=!1}return t.prototype.set=function(t,e,n){O("WriteBatch.set",arguments,2,3),this.verifyNotCommitted()
var r=Qo("WriteBatch.set",t,this._firestore),i=(n=Bo("WriteBatch.set",n)).merge||n.mergeFields?this._firestore._dataConverter.parseMergeData("WriteBatch.set",e,n.mergeFields):this._firestore._dataConverter.parseSetData("WriteBatch.set",e)
return this._mutations=this._mutations.concat(i.toMutations(r._key,jn.NONE)),this},t.prototype.update=function(t,e,n){for(var r,i,o=[],a=3;a<arguments.length;a++)o[a-3]=arguments[a]
return this.verifyNotCommitted(),"string"==typeof e||e instanceof Yi?(P("WriteBatch.update",arguments,3),r=Qo("WriteBatch.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateVarargs("WriteBatch.update",e,n,o)):(R("WriteBatch.update",arguments,2),r=Qo("WriteBatch.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateData("WriteBatch.update",e)),this._mutations=this._mutations.concat(i.toMutations(r._key,jn.exists(!0))),this},t.prototype.delete=function(t){R("WriteBatch.delete",arguments,1),this.verifyNotCommitted()
var e=Qo("WriteBatch.delete",t,this._firestore)
return this._mutations=this._mutations.concat(new Hn(e._key,jn.NONE)),this},t.prototype.commit=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){return this.verifyNotCommitted(),this._committed=!0,this._mutations.length>0?[2,this._firestore.ensureClientConfigured().write(this._mutations)]:[2]})})},t.prototype.verifyNotCommitted=function(){if(this._committed)throw new T(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")},t}(),xo=function(){function t(t,e){this._key=t,this.firestore=e,this._firestoreClient=this.firestore.ensureClientConfigured()}return t.forPath=function(e,n){if(e.length%2!=0)throw new T(E.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but "+e.canonicalString()+" has "+e.length)
return new t(new ht(e),n)},Object.defineProperty(t.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return new Vo(this._key.path.popLast(),this.firestore)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"path",{get:function(){return this._key.path.canonicalString()},enumerable:!0,configurable:!0}),t.prototype.collection=function(t){if(R("DocumentReference.collection",arguments,1),x("DocumentReference.collection","non-empty string",1,t),!t)throw new T(E.INVALID_ARGUMENT,"Must provide a non-empty collection name to collection()")
var e=st.fromString(t)
return new Vo(this._key.path.child(e),this.firestore)},t.prototype.isEqual=function(e){if(!(e instanceof t))throw Q("isEqual","DocumentReference",1,e)
return this.firestore===e.firestore&&this._key.isEqual(e._key)},t.prototype.set=function(t,e){O("DocumentReference.set",arguments,1,2)
var n=(e=Bo("DocumentReference.set",e)).merge||e.mergeFields?this.firestore._dataConverter.parseMergeData("DocumentReference.set",t,e.mergeFields):this.firestore._dataConverter.parseSetData("DocumentReference.set",t)
return this._firestoreClient.write(n.toMutations(this._key,jn.NONE))},t.prototype.update=function(t,e){for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
return"string"==typeof t||t instanceof Yi?(P("DocumentReference.update",arguments,2),n=this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update",t,e,r)):(R("DocumentReference.update",arguments,1),n=this.firestore._dataConverter.parseUpdateData("DocumentReference.update",t)),this._firestoreClient.write(n.toMutations(this._key,jn.exists(!0)))},t.prototype.delete=function(){return R("DocumentReference.delete",arguments,0),this._firestoreClient.write([new Hn(this._key,jn.NONE)])},t.prototype.onSnapshot=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
O("DocumentReference.onSnapshot",arguments,1,4)
var n,i={includeMetadataChanges:!1},o=0
"object"!==r(t[o])||no(t[o])||(W("DocumentReference.onSnapshot",i=t[o],["includeMetadataChanges"]),F("DocumentReference.onSnapshot","boolean","includeMetadataChanges",i.includeMetadataChanges),o++)
var a={includeMetadataChanges:i.includeMetadataChanges}
return no(t[o])?n=t[o]:(x("DocumentReference.onSnapshot","function",o,t[o]),M("DocumentReference.onSnapshot","function",o+1,t[o+1]),M("DocumentReference.onSnapshot","function",o+2,t[o+2]),n={next:t[o],error:t[o+1],complete:t[o+2]}),this.onSnapshotInternal(a,n)},t.prototype.onSnapshotInternal=function(t,e){var n=this,r=function(t){console.error("Uncaught Error in onSnapshot:",t)}
e.error&&(r=e.error.bind(e))
var i=new zi({next:function(t){if(e.next){_(t.docs.size<=1,"Too many documents returned on a document query")
var r=t.docs.get(n._key)
e.next(new Lo(n.firestore,n._key,r,t.fromCache,t.hasPendingWrites))}},error:r}),o=this._firestoreClient.listen(Hr.atPath(this._key.path),i,t)
return function(){i.mute(),n._firestoreClient.unlisten(o)}},t.prototype.get=function(t){var e=this
return O("DocumentReference.get",arguments,0,1),Wo("DocumentReference.get",t),new Promise(function(n,r){t&&"cache"===t.source?e.firestore.ensureClientConfigured().getDocumentFromLocalCache(e._key).then(function(t){n(new Lo(e.firestore,e._key,t,!0,t instanceof de&&t.hasLocalMutations))},r):e.getViaSnapshotListener(n,r,t)})},t.prototype.getViaSnapshotListener=function(t,e,n){var r=this.onSnapshotInternal({includeMetadataChanges:!0,waitForSyncWhenOnline:!0},{next:function(i){r(),!i.exists&&i.metadata.fromCache?e(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):i.exists&&i.metadata.fromCache&&n&&"server"===n.source?e(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):t(i)},error:e})},t}(),Mo=function(){function t(t,e){this.hasPendingWrites=t,this.fromCache=e}return t.prototype.isEqual=function(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache},t}(),Lo=function(){function t(t,e,n,r,i){this._firestore=t,this._key=e,this._document=n,this._fromCache=r,this._hasPendingWrites=i}return t.prototype.data=function(t){return O("DocumentSnapshot.data",arguments,0,1),t=jo("DocumentSnapshot.data",t),this._document?this.convertObject(this._document.data,En.fromSnapshotOptions(t,this._firestore._areTimestampsInSnapshotsEnabled())):void 0},t.prototype.get=function(t,e){if(O("DocumentSnapshot.get",arguments,1,2),e=jo("DocumentSnapshot.get",e),this._document){var n=this._document.data.field(wo("DocumentSnapshot.get",t))
if(null!==n)return this.convertValue(n,En.fromSnapshotOptions(e,this._firestore._areTimestampsInSnapshotsEnabled()))}},Object.defineProperty(t.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ref",{get:function(){return new xo(this._key,this._firestore)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"exists",{get:function(){return null!==this._document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"metadata",{get:function(){return new Mo(this._hasPendingWrites,this._fromCache)},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(e){if(!(e instanceof t))throw Q("isEqual","DocumentSnapshot",1,e)
return this._firestore===e._firestore&&this._fromCache===e._fromCache&&this._key.isEqual(e._key)&&(null===this._document?null===e._document:this._document.isEqual(e._document))},t.prototype.convertObject=function(t,e){var n=this,r={}
return t.forEach(function(t,i){r[t]=n.convertValue(i,e)}),r},t.prototype.convertValue=function(t,e){if(t instanceof Fn)return this.convertObject(t,e)
if(t instanceof Un)return this.convertArray(t,e)
if(t instanceof Mn){var n=t.value(e),r=this._firestore.ensureClientConfigured().databaseId()
return t.databaseId.isEqual(r)||m("Document "+this._key.path+" contains a document reference within a different database ("+t.databaseId.projectId+"/"+t.databaseId.database+") which is not supported. It will be treated as a reference in the current database ("+r.projectId+"/"+r.database+") instead."),new xo(n,this._firestore)}return t.value(e)},t.prototype.convertArray=function(t,e){var n=this
return t.internalValue.map(function(t){return n.convertValue(t,e)})},t}(),Fo=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.data=function(e){var n=t.prototype.data.call(this,e)
return _("object"===r(n),"Document in a QueryDocumentSnapshot should exist"),n},e}(Lo),Uo=function(){function t(t,e){this._query=t,this.firestore=e}return t.prototype.where=function(e,n,r){var i,o,a
R("Query.where",arguments,3),j("Query.where",3,r),"in"!==n&&"array-contains-any"!==n&&function(t,e,n,r){if(!e.some(function(t){return t===r}))throw new T(E.INVALID_ARGUMENT,"Invalid value "+B(r)+" provided to function Query.where() for its "+K(2)+" argument. Acceptable values: "+e.join(", "))}(0,["<","<=","==",">=",">","array-contains"],0,n)
var u=wo("Query.where",e),c=Yr.fromString(n)
if(u.isKeyField()){if(c===Yr.ARRAY_CONTAINS||c===Yr.ARRAY_CONTAINS_ANY)throw new T(E.INVALID_ARGUMENT,"Invalid Query. You can't perform '"+c.toString()+"' queries on FieldPath.documentId().")
if(c===Yr.IN){this.validateDisjunctiveFilterElements(r,c)
var h=[]
try{for(var l=s.__values(r),f=l.next();!f.done;f=l.next()){var p=f.value
h.push(this.parseDocumentIdValue(p))}}catch(t){i={error:t}}finally{try{f&&!f.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}a=new Un(h)}else a=this.parseDocumentIdValue(r)}else c!==Yr.IN&&c!==Yr.ARRAY_CONTAINS_ANY||this.validateDisjunctiveFilterElements(r,c),a=this.firestore._dataConverter.parseQueryValue("Query.where",r)
var d=Xr.create(u,c,a)
return this.validateNewFilter(d),new t(this._query.addFilter(d),this.firestore)},t.prototype.orderBy=function(e,n){var r
if(O("Query.orderBy",arguments,1,2),M("Query.orderBy","non-empty string",2,n),void 0===n||"asc"===n)r=ni.ASCENDING
else{if("desc"!==n)throw new T(E.INVALID_ARGUMENT,"Function Query.orderBy() has unknown direction '"+n+"', expected 'asc' or 'desc'.")
r=ni.DESCENDING}if(null!==this._query.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().")
if(null!==this._query.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().")
var i=wo("Query.orderBy",e),o=new ii(i,r)
return this.validateNewOrderBy(o),new t(this._query.addOrderBy(o),this.firestore)},t.prototype.limit=function(e){if(R("Query.limit",arguments,1),x("Query.limit","number",1,e),e<=0)throw new T(E.INVALID_ARGUMENT,"Invalid Query. Query limit ("+e+") is invalid. Limit must be positive.")
return new t(this._query.withLimit(e),this.firestore)},t.prototype.startAt=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
P("Query.startAt",arguments,1)
var i=this.boundFromDocOrFields("Query.startAt",e,n,!0)
return new t(this._query.withStartAt(i),this.firestore)},t.prototype.startAfter=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
P("Query.startAfter",arguments,1)
var i=this.boundFromDocOrFields("Query.startAfter",e,n,!1)
return new t(this._query.withStartAt(i),this.firestore)},t.prototype.endBefore=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
P("Query.endBefore",arguments,1)
var i=this.boundFromDocOrFields("Query.endBefore",e,n,!0)
return new t(this._query.withEndAt(i),this.firestore)},t.prototype.endAt=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
P("Query.endAt",arguments,1)
var i=this.boundFromDocOrFields("Query.endAt",e,n,!1)
return new t(this._query.withEndAt(i),this.firestore)},t.prototype.isEqual=function(e){if(!(e instanceof t))throw Q("isEqual","Query",1,e)
return this.firestore===e.firestore&&this._query.isEqual(e._query)},t.prototype.boundFromDocOrFields=function(t,e,n,r){if(j(t,1,e),e instanceof Lo){if(n.length>0)throw new T(E.INVALID_ARGUMENT,"Too many arguments provided to "+t+"().")
var i=e
if(!i.exists)throw new T(E.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for "+t+"().")
return this.boundFromDocument(t,i._document,r)}var o=[e].concat(n)
return this.boundFromFields(t,o,r)},t.prototype.boundFromDocument=function(t,e,n){var r,i,o=[]
try{for(var a=s.__values(this._query.orderBy),u=a.next();!u.done;u=a.next()){var c=u.value
if(c.field.isKeyField())o.push(new Mn(this.firestore._databaseId,e.key))
else{var h=e.field(c.field)
if(h instanceof On)throw new T(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)')
if(null===h){var l=c.field.canonicalString()
throw new T(E.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '"+l+"' (used as the orderBy) does not exist.")}o.push(h)}}}catch(t){r={error:t}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}return new ri(o,n)},t.prototype.boundFromFields=function(t,e,n){var i=this._query.explicitOrderBy
if(e.length>i.length)throw new T(E.INVALID_ARGUMENT,"Too many arguments provided to "+t+"(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses")
for(var o=[],a=0;a<e.length;a++){var s=e[a]
if(i[a].field.isKeyField()){if("string"!=typeof s)throw new T(E.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in "+t+"(), but got a "+r(s))
if(!this._query.isCollectionGroupQuery()&&-1!==s.indexOf("/"))throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to "+t+"() must be a plain document ID, but '"+s+"' contains a slash.")
var u=this._query.path.child(st.fromString(s))
if(!ht.isDocumentKey(u))throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to "+t+"() must result in a valid document path, but '"+u+"' is not because it contains an odd number of segments.")
var c=new ht(u)
o.push(new Mn(this.firestore._databaseId,c))}else{var h=this.firestore._dataConverter.parseQueryValue(t,s)
o.push(h)}}return new ri(o,n)},t.prototype.onSnapshot=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
O("Query.onSnapshot",arguments,1,4)
var n,i={},o=0
return"object"!==r(t[o])||no(t[o])||(W("Query.onSnapshot",i=t[o],["includeMetadataChanges"]),F("Query.onSnapshot","boolean","includeMetadataChanges",i.includeMetadataChanges),o++),no(t[o])?n=t[o]:(x("Query.onSnapshot","function",o,t[o]),M("Query.onSnapshot","function",o+1,t[o+1]),M("Query.onSnapshot","function",o+2,t[o+2]),n={next:t[o],error:t[o+1],complete:t[o+2]}),this.onSnapshotInternal(i,n)},t.prototype.onSnapshotInternal=function(t,e){var n=this,r=function(t){console.error("Uncaught Error in onSnapshot:",t)}
e.error&&(r=e.error.bind(e))
var i=new zi({next:function(t){e.next&&e.next(new qo(n.firestore,n._query,t))},error:r}),o=this.firestore.ensureClientConfigured(),a=o.listen(this._query,i,t)
return function(){i.mute(),o.unlisten(a)}},t.prototype.get=function(t){var e=this
return O("Query.get",arguments,0,1),Wo("Query.get",t),new Promise(function(n,r){t&&"cache"===t.source?e.firestore.ensureClientConfigured().getDocumentsFromLocalCache(e._query).then(function(t){n(new qo(e.firestore,e._query,t))},r):e.getViaSnapshotListener(n,r,t)})},t.prototype.getViaSnapshotListener=function(t,e,n){var r=this.onSnapshotInternal({includeMetadataChanges:!0,waitForSyncWhenOnline:!0},{next:function(i){r(),i.metadata.fromCache&&n&&"server"===n.source?e(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):t(i)},error:e})},t.prototype.parseDocumentIdValue=function(t){if("string"==typeof t){if(""===t)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.")
if(!this._query.isCollectionGroupQuery()&&-1!==t.indexOf("/"))throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '"+t+"' contains a '/' character.")
var e=this._query.path.child(st.fromString(t))
if(!ht.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '"+e+"' is not because it has an odd number of segments ("+e.length+").")
return new Mn(this.firestore._databaseId,new ht(e))}if(t instanceof xo){var n=t
return new Mn(this.firestore._databaseId,n._key)}throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: "+B(t)+".")},t.prototype.validateDisjunctiveFilterElements=function(t,e){if(!Array.isArray(t)||0===t.length)throw new T(E.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '"+e.toString()+"' filters.")
if(t.length>10)throw new T(E.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters support a maximum of 10 elements in the value array.")
if(t.indexOf(null)>=0)throw new T(E.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'null' in the value array.")
if(t.filter(function(t){return Number.isNaN(t)}).length>0)throw new T(E.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'NaN' in the value array.")},t.prototype.validateNewFilter=function(t){if(t instanceof Xr){var e=[Yr.ARRAY_CONTAINS,Yr.ARRAY_CONTAINS_ANY],n=[Yr.IN,Yr.ARRAY_CONTAINS_ANY],r=e.indexOf(t.op)>=0,i=n.indexOf(t.op)>=0
if(t.isInequality()){var o=this._query.getInequalityFilterField()
if(null!==o&&!o.isEqual(t.field))throw new T(E.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '"+o.toString()+"' and '"+t.field.toString()+"'")
var a=this._query.getFirstOrderByField()
null!==a&&this.validateOrderByAndInequalityMatch(t.field,a)}else if(i||r){var s=null
if(i&&(s=this._query.findFilterOperator(n)),null===s&&r&&(s=this._query.findFilterOperator(e)),null!=s)throw s===t.op?new T(E.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '"+t.op.toString()+"' filter."):new T(E.INVALID_ARGUMENT,"Invalid query. You cannot use '"+t.op.toString()+"' filters with '"+s.toString()+"' filters.")}}},t.prototype.validateNewOrderBy=function(t){if(null===this._query.getFirstOrderByField()){var e=this._query.getInequalityFilterField()
null!==e&&this.validateOrderByAndInequalityMatch(e,t.field)}},t.prototype.validateOrderByAndInequalityMatch=function(t,e){if(!e.isEqual(t))throw new T(E.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '"+t.toString()+"' and so you must also use '"+t.toString()+"' as your first Query.orderBy(), but your first Query.orderBy() is on field '"+e.toString()+"' instead.")},t}(),qo=function(){function t(t,e,n){this._firestore=t,this._originalQuery=e,this._snapshot=n,this._cachedChanges=null,this._cachedChangesIncludeMetadataChanges=null,this.metadata=new Mo(n.hasPendingWrites,n.fromCache)}return Object.defineProperty(t.prototype,"docs",{get:function(){var t=[]
return this.forEach(function(e){return t.push(e)}),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"empty",{get:function(){return this._snapshot.docs.isEmpty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._snapshot.docs.size},enumerable:!0,configurable:!0}),t.prototype.forEach=function(t,e){var n=this
O("QuerySnapshot.forEach",arguments,1,2),x("QuerySnapshot.forEach","function",1,t),this._snapshot.docs.forEach(function(r){t.call(e,n.convertToDocumentImpl(r))})},Object.defineProperty(t.prototype,"query",{get:function(){return new Uo(this._originalQuery,this._firestore)},enumerable:!0,configurable:!0}),t.prototype.docChanges=function(t){t&&(W("QuerySnapshot.docChanges",t,["includeMetadataChanges"]),F("QuerySnapshot.docChanges","boolean","includeMetadataChanges",t.includeMetadataChanges))
var e=!(!t||!t.includeMetadataChanges)
if(e&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().")
return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e,n){if(n.oldDocs.isEmpty()){var r,i=0
return n.docChanges.map(function(e){var o=new Fo(t,e.doc.key,e.doc,n.fromCache,n.mutatedKeys.has(e.doc.key))
return _(e.type===Ar.Added,"Invalid event type for first snapshot"),_(!r||n.query.docComparator(r,e.doc)<0,"Got added events in wrong order"),r=e.doc,{type:"added",doc:o,oldIndex:-1,newIndex:i++}})}var o=n.oldDocs
return n.docChanges.filter(function(t){return e||t.type!==Ar.Metadata}).map(function(e){var r=new Fo(t,e.doc.key,e.doc,n.fromCache,n.mutatedKeys.has(e.doc.key)),i=-1,a=-1
return e.type!==Ar.Added&&(_((i=o.indexOf(e.doc.key))>=0,"Index for document not found"),o=o.delete(e.doc.key)),e.type!==Ar.Removed&&(a=(o=o.add(e.doc)).indexOf(e.doc.key)),{type:Ko(e.type),doc:r,oldIndex:i,newIndex:a}})}(this._firestore,e,this._snapshot),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges},t.prototype.isEqual=function(e){if(!(e instanceof t))throw Q("isEqual","QuerySnapshot",1,e)
return this._firestore===e._firestore&&this._originalQuery.isEqual(e._originalQuery)&&this._snapshot.isEqual(e._snapshot)},t.prototype.convertToDocumentImpl=function(t){return new Fo(this._firestore,t.key,t,this.metadata.fromCache,this._snapshot.mutatedKeys.has(t.key))},t}()
s.__spread(["length","forEach","map"],"undefined"!=typeof Symbol?[Symbol.iterator]:[]).forEach(function(t){try{Object.defineProperty(qo.prototype.docChanges,t,{get:function(){return function(){throw new T(E.INVALID_ARGUMENT,'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"')}()}})}catch(t){}})
var Vo=function(t){function e(e,n){var r=t.call(this,Hr.atPath(e),n)||this
if(e.length%2!=1)throw new T(E.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but "+e.canonicalString()+" has "+e.length)
return r}return s.__extends(e,t),Object.defineProperty(e.prototype,"id",{get:function(){return this._query.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._query.path.popLast()
return t.isEmpty()?null:new xo(new ht(t),this.firestore)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._query.path.canonicalString()},enumerable:!0,configurable:!0}),e.prototype.doc=function(t){if(O("CollectionReference.doc",arguments,0,1),0===arguments.length&&(t=H.newId()),x("CollectionReference.doc","non-empty string",1,t),""===t)throw new T(E.INVALID_ARGUMENT,"Document path must be a non-empty string")
var e=st.fromString(t)
return xo.forPath(this._query.path.child(e),this.firestore)},e.prototype.add=function(t){R("CollectionReference.add",arguments,1),x("CollectionReference.add","object",1,t)
var e=this.doc()
return e.set(t).then(function(){return e})},e}(Uo)
function Bo(t,e){if(void 0===e)return{merge:!1}
if(W(t,e,["merge","mergeFields"]),F(t,"boolean","merge",e.merge),function(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){if(!(r instanceof Array))throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires its "+e+" option to be an array, but it was: "+B(r))
for(var o=0;o<r.length;++o)if(!i(r[o]))throw new T(E.INVALID_ARGUMENT,"Function "+t+"() requires all "+e+" elements to be "+n+", but the value at index "+o+" was: "+B(r[o]))}(t,e,n,r,i)}(t,"mergeFields","a string or a FieldPath",e.mergeFields,function(t){return"string"==typeof t||t instanceof Yi}),void 0!==e.mergeFields&&void 0!==e.merge)throw new T(E.INVALID_ARGUMENT,"Invalid options passed to function "+t+'(): You cannot specify both "merge" and "mergeFields".')
return e}function jo(t,e){return void 0===e?{}:(W(t,e,["serverTimestamps"]),U(t,0,"serverTimestamps",e.serverTimestamps,["estimate","previous","none"]),e)}function Wo(t,e){M(t,"object",1,e),e&&(W(t,e,["source"]),U(t,0,"source",e.source,["default","server","cache"]))}function Qo(t,e,n){if(e instanceof xo){if(e.firestore!==n)throw new T(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.")
return e}throw Q(t,"DocumentReference",1,e)}function Ko(t){switch(t){case Ar.Added:return"added"
case Ar.Modified:case Ar.Metadata:return"modified"
case Ar.Removed:return"removed"
default:return g("Unknown change type: "+t)}}var Go=S(Ro,"Use firebase.firestore() instead."),Ho=S(Po,"Use firebase.firestore().runTransaction() instead."),zo=S(Oo,"Use firebase.firestore().batch() instead."),Yo=S(xo,"Use firebase.firestore().doc() instead."),Xo=S(Lo),Jo=S(Fo),$o=S(Uo),Zo=S(qo),ta=S(Vo,"Use firebase.firestore().collection() instead."),ea={Firestore:Go,GeoPoint:Gr,Timestamp:Et,Blob:et,Transaction:Ho,WriteBatch:zo,DocumentReference:Yo,DocumentSnapshot:Xo,Query:$o,QueryDocumentSnapshot:Jo,QuerySnapshot:Zo,CollectionReference:ta,FieldPath:Yi,FieldValue:ho,setLogLevel:Ro.setLogLevel,CACHE_SIZE_UNLIMITED:ko}
var na=function(){function t(){}return t.prototype.addCallback=function(t){},t.prototype.shutdown=function(){},t}(),ra=function(){function t(){var t=this
this.networkAvailableListener=function(){return t.onNetworkAvailable()},this.networkUnavailableListener=function(){return t.onNetworkUnavailable()},this.callbacks=[],this.configureNetworkMonitoring()}return t.prototype.addCallback=function(t){this.callbacks.push(t)},t.prototype.shutdown=function(){window.removeEventListener("online",this.networkAvailableListener),window.removeEventListener("offline",this.networkUnavailableListener)},t.prototype.configureNetworkMonitoring=function(){window.addEventListener("online",this.networkAvailableListener),window.addEventListener("offline",this.networkUnavailableListener)},t.prototype.onNetworkAvailable=function(){var t,e
y("ConnectivityMonitor","Network connectivity changed: AVAILABLE")
try{for(var n=s.__values(this.callbacks),r=n.next();!r.done;r=n.next())(0,r.value)(0)}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},t.prototype.onNetworkUnavailable=function(){var t,e
y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE")
try{for(var n=s.__values(this.callbacks),r=n.next();!r.done;r=n.next())(0,r.value)(1)}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},t.isAvailable=function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener},t}(),ia=function(){function t(t){this.sendFn=t.sendFn,this.closeFn=t.closeFn}return t.prototype.onOpen=function(t){_(!this.wrappedOnOpen,"Called onOpen on stream twice!"),this.wrappedOnOpen=t},t.prototype.onClose=function(t){_(!this.wrappedOnClose,"Called onClose on stream twice!"),this.wrappedOnClose=t},t.prototype.onMessage=function(t){_(!this.wrappedOnMessage,"Called onMessage on stream twice!"),this.wrappedOnMessage=t},t.prototype.close=function(){this.closeFn()},t.prototype.send=function(t){this.sendFn(t)},t.prototype.callOnOpen=function(){_(void 0!==this.wrappedOnOpen,"Cannot call onOpen because no callback was set"),this.wrappedOnOpen()},t.prototype.callOnClose=function(t){_(void 0!==this.wrappedOnClose,"Cannot call onClose because no callback was set"),this.wrappedOnClose(t)},t.prototype.callOnMessage=function(t){_(void 0!==this.wrappedOnMessage,"Cannot call onMessage because no callback was set"),this.wrappedOnMessage(t)},t}(),oa="Connection",aa={BatchGetDocuments:"batchGet",Commit:"commit"},sa="gl-js/ fire/"+l,ua=function(){function t(t){this.databaseId=t.databaseId
var e=t.ssl?"https":"http"
this.baseUrl=e+"://"+t.host,this.forceLongPolling=t.forceLongPolling}return t.prototype.modifyHeadersForRequest=function(t,e){if(e)for(var n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])
t["X-Goog-Api-Client"]=sa},t.prototype.invokeRPC=function(t,e,n){var r=this,i=this.makeUrl(t)
return new Promise(function(o,a){var s=new h.XhrIo
s.listenOnce(h.EventType.COMPLETE,function(){try{switch(s.getLastErrorCode()){case h.ErrorCode.NO_ERROR:var e=s.getResponseJson()
y(oa,"XHR received:",JSON.stringify(e)),o(e)
break
case h.ErrorCode.TIMEOUT:y(oa,'RPC "'+t+'" timed out'),a(new T(E.DEADLINE_EXCEEDED,"Request time out"))
break
case h.ErrorCode.HTTP_ERROR:var n=s.getStatus()
y(oa,'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0?a(new T(function(t){switch(t){case 200:return E.OK
case 400:return E.INVALID_ARGUMENT
case 401:return E.UNAUTHENTICATED
case 403:return E.PERMISSION_DENIED
case 404:return E.NOT_FOUND
case 409:return E.ABORTED
case 416:return E.OUT_OF_RANGE
case 429:return E.RESOURCE_EXHAUSTED
case 499:return E.CANCELLED
case 500:return E.UNKNOWN
case 501:return E.UNIMPLEMENTED
case 503:return E.UNAVAILABLE
case 504:return E.DEADLINE_EXCEEDED
default:return t>=200&&t<300?E.OK:t>=400&&t<500?E.FAILED_PRECONDITION:t>=500&&t<600?E.INTERNAL:E.UNKNOWN}}(n),"Server responded with status "+s.getStatusText())):(y(oa,'RPC "'+t+'" failed'),a(new T(E.UNAVAILABLE,"Connection failed.")))
break
default:g('RPC "'+t+'" failed with unanticipated webchannel error '+s.getLastErrorCode()+": "+s.getLastError()+", giving up.")}}finally{y(oa,'RPC "'+t+'" completed.')}})
var u=JSON.stringify(e)
y(oa,"XHR sending: ",i+" "+u)
var c={"Content-Type":"text/plain"}
r.modifyHeadersForRequest(c,n),s.send(i,"POST",u,c,15)})},t.prototype.invokeStreamingRPC=function(t,e,n){return this.invokeRPC(t,e,n)},t.prototype.openStream=function(t,e){var n=[this.baseUrl,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=h.createWebChannelTransport(),i={backgroundChannelTest:!0,httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling}
this.modifyHeadersForRequest(i.initMessageHeaders,e),c.isReactNative()||(i.httpHeadersOverwriteParam="$httpHeaders")
var o=n.join("")
y(oa,"Creating WebChannel: "+o+" "+i)
var a=r.createWebChannel(o,i),s=!1,u=!1,l=new ia({sendFn:function(t){u?y(oa,"Not sending because WebChannel is closed:",t):(s||(y(oa,"Opening WebChannel transport."),a.open(),s=!0),y(oa,"WebChannel sending:",t),a.send(t))},closeFn:function(){return a.close()}}),f=function(t,e){a.listen(t,function(t){try{e(t)}catch(t){setTimeout(function(){throw t},0)}})}
return f(h.WebChannel.EventType.OPEN,function(){u||y(oa,"WebChannel transport opened.")}),f(h.WebChannel.EventType.CLOSE,function(){u||(u=!0,y(oa,"WebChannel transport closed"),l.callOnClose())}),f(h.WebChannel.EventType.ERROR,function(t){u||(u=!0,y(oa,"WebChannel transport errored:",t),l.callOnClose(new T(E.UNAVAILABLE,"The operation could not be completed")))}),f(h.WebChannel.EventType.MESSAGE,function(t){if(!u){var e=t.data[0]
_(!!e,"Got a webchannel message without data.")
var n=e,r=n.error||n[0]&&n[0].error
if(r){y(oa,"WebChannel received error:",r)
var i=r.status,o=function(t){var e=Sr[i]
if(void 0!==e)return Nr(e)}(),s=r.message
void 0===o&&(o=E.INTERNAL,s="Unknown error status: "+i+" with message "+r.message),u=!0,l.callOnClose(new T(o,s)),a.close()}else y(oa,"WebChannel received:",e),l.callOnMessage(e)}}),setTimeout(function(){l.callOnOpen()},0),l},t.prototype.makeUrl=function(t){var e=aa[t]
_(void 0!==e,"Unknown REST mapping for: "+t)
var n=[this.baseUrl,"/","v1"]
return n.push("/projects/"),n.push(this.databaseId.projectId),n.push("/databases/"),n.push(this.databaseId.database),n.push("/documents"),n.push(":"),n.push(e),n.join("")},t}(),ca=function(){function t(){this.emptyByteString="",this.base64Available="undefined"!=typeof atob}return Object.defineProperty(t.prototype,"document",{get:function(){return"undefined"!=typeof document?document:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return"undefined"!=typeof window?window:null},enumerable:!0,configurable:!0}),t.prototype.loadConnection=function(t){return Promise.resolve(new ua(t))},t.prototype.newConnectivityMonitor=function(){return ra.isAvailable()?new ra:new na},t.prototype.newSerializer=function(t){return new bi(t,{useProto3Json:!0})},t.prototype.formatJSON=function(t){return JSON.stringify(t)},t.prototype.atob=function(t){return atob(t)},t.prototype.btoa=function(t){return btoa(t)},t}()
function ha(t){(function(t){t.INTERNAL.registerService("firestore",function(t){return new Ro(t)},function(t){_(t&&"object"===r(t),"shallowCopy() expects object parameter.")
var e={}
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e}(ea))})(t)}b.setPlatform(new ca),ha(a),e.registerFirestore=ha},199:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"__extends",function(){return o}),n.d(e,"__assign",function(){return a}),n.d(e,"__rest",function(){return s}),n.d(e,"__decorate",function(){return u}),n.d(e,"__param",function(){return c}),n.d(e,"__metadata",function(){return h}),n.d(e,"__awaiter",function(){return l}),n.d(e,"__generator",function(){return f}),n.d(e,"__exportStar",function(){return p}),n.d(e,"__values",function(){return d}),n.d(e,"__read",function(){return y}),n.d(e,"__spread",function(){return m}),n.d(e,"__await",function(){return v}),n.d(e,"__asyncGenerator",function(){return g}),n.d(e,"__asyncDelegator",function(){return _}),n.d(e,"__asyncValues",function(){return b}),n.d(e,"__makeTemplateObject",function(){return w}),n.d(e,"__importStar",function(){return E}),n.d(e,"__importDefault",function(){return T})
var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}
function o(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t}).apply(this,arguments)}
function s(t,e){var n={}
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r])
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n}function u(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i
if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i)
else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s)
return a>3&&s&&Object.defineProperty(e,n,s),s}function c(t,e){return function(n,r){e(n,r,t)}}function h(t,e){if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function f(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function p(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function d(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0
return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function y(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,i,o=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function m(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]))
return t}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(t,e||[]),o=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(t){i[t]&&(r[t]=function(e){return new Promise(function(n,r){o.push([t,e,n,r])>1||s(t,e)})})}function s(t,e){try{(n=i[t](e)).value instanceof v?Promise.resolve(n.value.v).then(u,c):h(o[0][2],n)}catch(t){h(o[0][3],t)}var n}function u(t){s("next",t)}function c(t){s("throw",t)}function h(t,e){t(e),o.shift(),o.length&&s(o[0][0],o[0][1])}}function _(t){var e,n
return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e
function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:v(t[r](e)),done:"return"===r}:i?i(e):e}:i}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var e,n=t[Symbol.asyncIterator]
return n?n.call(t):(t=d(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e)
function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,i){(function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)})(r,i,(e=t[n](e)).done,e.value)})}}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function E(t){if(t&&t.__esModule)return t
var e={}
if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e.default=t,e}function T(t){return t&&t.__esModule?t:{default:t}}},200:function(t,e,n){"use strict"
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
return"object"==e&&null!=t||"function"==e}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0
function g(t,e,n){return t.call.apply(t.bind,arguments)}function _(t,e,n){if(!t)throw Error()
if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2)
return function(){var n=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return(b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:_).apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1)
return function(){var e=n.slice()
return e.push.apply(e,arguments),t.apply(this,e)}}var E=Date.now||function(){return+new Date}
function T(t,e){function n(){}n.prototype=e.prototype,t.N=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.yb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o]
return e.prototype[n].apply(t,i)}}function S(){this.j=this.j,this.i=this.i}S.prototype.j=!1,S.prototype.la=function(){!this.j&&(this.j=!0,this.G(),0)&&(this[m]||(this[m]=++v))},S.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()}
var I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(u(t))return u(e)&&1==e.length?t.indexOf(e,0):-1
for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n
return-1},C=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i=u(t)?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)}
function N(t){return Array.prototype.concat.apply([],arguments)}function k(t){var e=t.length
if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r]
return n}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var D,R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]}
function P(t,e){return-1!=t.indexOf(e)}function O(t,e){return t<e?-1:t>e?1:0}t:{var x=s.navigator
if(x){var M=x.userAgent
if(M){D=M
break t}}D=""}function L(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function F(t){var e,n={}
for(e in t)n[e]=t[e]
return n}var U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function q(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n]
for(var o=0;o<U.length;o++)n=U[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){return V[" "](t),t}V[" "]=l
var B,j,W=P(D,"Opera"),Q=P(D,"Trident")||P(D,"MSIE"),K=P(D,"Edge"),G=K||Q,H=P(D,"Gecko")&&!(P(D.toLowerCase(),"webkit")&&!P(D,"Edge"))&&!(P(D,"Trident")||P(D,"MSIE"))&&!P(D,"Edge"),z=P(D.toLowerCase(),"webkit")&&!P(D,"Edge")
function Y(){var t=s.document
return t?t.documentMode:void 0}t:{var X="",J=(j=D,H?/rv:([^\);]+)(\)|;)/.exec(j):K?/Edge\/([\d\.]+)/.exec(j):Q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(j):z?/WebKit\/(\S+)/.exec(j):W?/(?:Version)[ \/]?(\S+)/.exec(j):void 0)
if(J&&(X=J?J[1]:""),Q){var $=Y()
if(null!=$&&$>parseFloat(X)){B=String($)
break t}}B=X}var Z,tt={}
function et(t){return function(t,e){var n=tt
return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e()}(t,function(){for(var e=0,n=R(String(B)).split("."),r=R(String(t)).split("."),i=Math.max(n.length,r.length),o=0;0==e&&o<i;o++){var a=n[o]||"",s=r[o]||""
do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break
e=O(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==a[2].length,0==s[2].length)||O(a[2],s[2]),a=a[3],s=s[3]}while(0==e)}return 0<=e})}var nt=s.document
Z=nt&&Q?Y()||("CSS1Compat"==nt.compatMode?parseInt(B,10):5):void 0
var rt=!Q||9<=Number(Z),it=Q&&!et("9"),ot=function(){if(!s.addEventListener||!Object.defineProperty)return!1
var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{s.addEventListener("test",l,e),s.removeEventListener("test",l,e)}catch(t){}return t}()
function at(t,e){this.type=t,this.a=this.target=e,this.Ja=!0}function st(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(H){t:{try{V(e.nodeName)
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
var mt="closure_lm_"+(1e6*Math.random()|0),vt={}
function gt(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,o){if(p(n)){for(var a=0;a<n.length;a++)t(e,n[a],r,i,o)
return null}return r=Ct(r),e&&e[ct]?e.Ba(n,r,y(i)?!!i.capture:!!i,o):_t(e,n,r,!0,i,o)}(t,e,n,r,i)
if(p(e)){for(var o=0;o<e.length;o++)gt(t,e[o],n,r,i)
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
e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=St(e))?(dt(n,t),0==n.b&&(n.src=null,e[mt]=null)):ft(t)}}}function wt(t){return t in vt?vt[t]:vt[t]="on"+t}function Et(t,e){var n=t.listener,r=t.da||t.src
return t.Z&&bt(t),n.call(r,e)}function Tt(t,e){return!!t.X||Et(t,rt?new st(e,this):e=new st(e||h("window.event"),this))}function St(t){return(t=t[mt])instanceof pt?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0)
function Ct(t){return"function"==f(t)?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function Nt(){S.call(this),this.c=new pt(this),this.J=this,this.B=null}function kt(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0
e=e.concat()
for(var i=!0,o=0;o<e.length;++o){var a=e[o]
if(a&&!a.X&&a.capture==n){var s=a.listener,u=a.da||a.src
a.Z&&dt(t.c,a),i=!1!==s.call(u,r)&&i}}return i&&0!=r.Ja}T(Nt,S),Nt.prototype[ct]=!0,(i=Nt.prototype).addEventListener=function(t,e,n,r){gt(this,t,e,n,r)},i.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,o){if(p(n))for(var a=0;a<n.length;a++)t(e,n[a],r,i,o)
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
var Pt,Ot=new Dt(function(){return new Mt},function(t){t.reset()})
function xt(){var t=qt,e=null
return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function Mt(){this.next=this.b=this.a=null}function Lt(t){s.setTimeout(function(){throw t},0)}function Ft(t,e){Pt||function(){var t=s.Promise.resolve(void 0)
Pt=function(){t.then(Vt)}}(),Ut||(Pt(),Ut=!0),qt.add(t,e)}Rt.prototype.add=function(t,e){var n=Ot.get()
n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Mt.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},Mt.prototype.reset=function(){this.next=this.b=this.a=null}
var Ut=!1,qt=new Rt
function Vt(){for(var t;t=xt();){try{t.a.call(t.b)}catch(t){Lt(t)}var e=Ot
e.f(t),100>e.b&&(e.b++,t.next=e.a,e.a=t)}Ut=!1}function Bt(t,e){Nt.call(this),this.b=t||1,this.a=e||s,this.f=b(this.gb,this),this.g=E()}function jt(t){t.ba=!1,t.L&&(t.a.clearTimeout(t.L),t.L=null)}function Wt(t,e,n){if("function"==f(t))n&&(t=b(t,n))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:s.setTimeout(t,e||0)}function Qt(t,e,n){S.call(this),this.f=null!=n?b(t,n):t,this.c=e,this.b=b(this.ab,this),this.a=[]}function Kt(t){t.U=Wt(t.b,t.c),t.f.apply(null,t.a)}function Gt(t){S.call(this),this.b=t,this.a={}}T(Bt,Nt),(i=Bt.prototype).ba=!1,i.L=null,i.gb=function(){if(this.ba){var t=E()-this.g
0<t&&t<.8*this.b?this.L=this.a.setTimeout(this.f,this.b-t):(this.L&&(this.a.clearTimeout(this.L),this.L=null),this.dispatchEvent("tick"),this.ba&&(jt(this),this.start()))}},i.start=function(){this.ba=!0,this.L||(this.L=this.a.setTimeout(this.f,this.b),this.g=E())},i.G=function(){Bt.N.G.call(this),jt(this),delete this.a},T(Qt,S),(i=Qt.prototype).ea=!1,i.U=null,i.Ua=function(t){this.a=arguments,this.U?this.ea=!0:Kt(this)},i.G=function(){Qt.N.G.call(this),this.U&&(s.clearTimeout(this.U),this.U=null,this.ea=!1,this.a=[])},i.ab=function(){this.U=null,this.ea&&(this.ea=!1,Kt(this))},T(Gt,S)
var Ht=[]
function zt(t,e,n,r){p(n)||(n&&(Ht[0]=n.toString()),n=Ht)
for(var i=0;i<n.length;i++){var o=gt(e,n[i],r||t.handleEvent,!1,t.b||t)
if(!o)break
t.a[o.key]=o}}function Yt(t){L(t.a,function(t,e){this.a.hasOwnProperty(e)&&bt(t)},t),t.a={}}function Xt(){}Gt.prototype.G=function(){Gt.N.G.call(this),Yt(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")}
var Jt=new Nt
function $t(t){at.call(this,"serverreachability",t)}function Zt(t){Jt.dispatchEvent(new $t(Jt,t))}function te(t){at.call(this,"statevent",t)}function ee(t){Jt.dispatchEvent(new te(Jt,t))}function ne(t){at.call(this,"timingevent",t)}function re(t,e){if("function"!=f(t))throw Error("Fn must not be null and must be a function")
return s.setTimeout(function(){t()},e)}T($t,at),T(te,at),T(ne,at)
var ie={NO_ERROR:0,hb:1,ob:2,nb:3,kb:4,mb:5,pb:6,Ma:7,TIMEOUT:8,sb:9},oe={jb:"complete",wb:"success",Na:"error",Ma:"abort",ub:"ready",vb:"readystatechange",TIMEOUT:"timeout",qb:"incrementaldata",tb:"progress",lb:"downloadprogress",xb:"uploadprogress"}
function ae(){}function se(t){var e
return(e=t.a)||(e=t.a={}),e}function ue(){}ae.prototype.a=null
var ce,he={OPEN:"a",ib:"b",Na:"c",rb:"d"}
function le(){at.call(this,"d")}function fe(){at.call(this,"c")}function pe(){}function de(t,e,n){this.g=t,this.W=e,this.V=n||1,this.I=new Gt(this),this.O=ye,t=G?125:void 0,this.P=new Bt(t),this.h=null,this.b=!1,this.l=this.D=this.f=this.F=this.v=this.R=this.i=null,this.j=[],this.a=null,this.A=0,this.c=this.w=null,this.o=-1,this.m=!1,this.J=0,this.B=null,this.s=this.S=this.H=!1}T(le,at),T(fe,at),T(pe,ae),ce=new pe
var ye=45e3,me={},ve={}
function ge(t,e,n){t.F=1,t.f=We(Le(e)),t.l=n,t.H=!0,be(t,null)}function _e(t,e,n,r){t.F=1,t.f=We(Le(e)),t.l=null,t.H=n,be(t,r)}function be(t,e){t.v=E(),Te(t),t.D=Le(t.f),je(t.D,"t",t.V),t.A=0,t.a=t.g.$(t.g.Y()?e:null),0<t.J&&(t.B=new Qt(b(t.Ka,t,t.a),t.J)),zt(t.I,t.a,"readystatechange",t.eb),e=t.h?F(t.h):{},t.l?(t.w||(t.w="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ca(t.D,t.w,t.l,e)):(t.w="GET",t.a.ca(t.D,t.w,null,e)),Zt(1)}function we(t,e,n){for(var r=!0;!t.m&&t.A<n.length;){var i=Ee(t,n)
if(i==ve){4==e&&(t.c=4,ee(14),r=!1)
break}if(i==me){t.c=4,ee(15),r=!1
break}ke(t,i)}4==e&&0==n.length&&(t.c=1,ee(16),r=!1),t.b=t.b&&r,r||(Ne(t),Ce(t))}function Ee(t,e){var n=t.A,r=e.indexOf("\n",n)
return-1==r?ve:(n=Number(e.substring(n,r)),isNaN(n)?me:(r+=1)+n>e.length?ve:(e=e.substr(r,n),t.A=r+n,e))}function Te(t){t.R=E()+t.O,Se(t,t.O)}function Se(t,e){if(null!=t.i)throw Error("WatchDog timer not null")
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
else for(r in t)this.set(r,t[r])}function Re(t,e){Oe(t.b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&Pe(t))}function Pe(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e]
Oe(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={}
for(n=e=0;e<t.a.length;)Oe(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++
t.a.length=n}}function Oe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(i=de.prototype).setTimeout=function(t){this.O=t},i.eb=function(t){t=t.target
var e=this.B
e&&3==Ln(t)?e.Ua():this.Ka(t)},i.Ka=function(t){try{if(t==this.a)t:{var e=Ln(this.a),n=this.a.ya(),r=this.a.T()
if(!(3>e||3==e&&!G&&!this.a.aa())){this.m||4!=e||7==n||Zt(8==n||0>=r?3:2),Ie(this)
var i=this.a.T()
this.o=i
var o=this.a.aa()
if(this.b=200==i){if(this.S&&!this.s){e:{if(this.a){var a=Fn(this.a,"X-HTTP-Initial-Response")
if(a&&!A(a)){var s=a
break e}}s=null}if(!s){this.b=!1,this.c=3,ee(12),Ne(this),Ce(this)
break t}this.s=!0,ke(this,s)}this.H?(we(this,e,o),G&&this.b&&3==e&&(zt(this.I,this.P,"tick",this.cb),this.P.start())):ke(this,o),4==e&&Ne(this),this.b&&!this.m&&(4==e?this.g.na(this):(this.b=!1,Te(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.c=3,ee(12)):(this.c=0,ee(13)),Ne(this),Ce(this)}}}catch(t){}},i.cb=function(){if(this.a){var t=Ln(this.a),e=this.a.aa()
this.A<e.length&&(Ie(this),we(this,t,e),this.b&&4!=t&&Te(this))}},i.cancel=function(){this.m=!0,Ne(this)},i.bb=function(){this.i=null
var t=E()
0<=t-this.R?(2!=this.F&&(Zt(3),ee(17)),Ne(this),this.c=2,Ce(this)):Se(this,this.R-t)},(i=De.prototype).C=function(){Pe(this)
for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]])
return t},i.K=function(){return Pe(this),this.a.concat()},i.get=function(t,e){return Oe(this.b,t)?this.b[t]:e},i.set=function(t,e){Oe(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},i.forEach=function(t,e){for(var n=this.K(),r=0;r<n.length;r++){var i=n[r],o=this.get(i)
t.call(e,o,i,this)}}
var xe=/^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function Me(t,e){var n
this.b=this.j=this.f="",this.i=null,this.g=this.a="",this.h=!1,t instanceof Me?(this.h=void 0!==e?e:t.h,Fe(this,t.f),this.j=t.j,Ue(this,t.b),qe(this,t.i),this.a=t.a,Ve(this,rn(t.c)),this.g=t.g):t&&(n=String(t).match(xe))?(this.h=!!e,Fe(this,n[1]||"",!0),this.j=Qe(n[2]||""),Ue(this,n[3]||"",!0),qe(this,n[4]),this.a=Qe(n[5]||"",!0),Ve(this,n[6]||"",!0),this.g=Qe(n[7]||"")):(this.h=!!e,this.c=new $e(null,this.h))}function Le(t){return new Me(t)}function Fe(t,e,n){t.f=n?Qe(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function Ue(t,e,n){t.b=n?Qe(e,!0):e}function qe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e)
t.i=e}else t.i=null}function Ve(t,e,n){e instanceof $e?(t.c=e,function(t,e){e&&!t.f&&(Ze(t),t.c=null,t.a.forEach(function(t,e){var n=e.toLowerCase()
e!=n&&(tn(this,e),nn(this,n,t))},t)),t.f=e}(t.c,t.h)):(n||(e=Ke(e,Xe)),t.c=new $e(e,t.h))}function Be(t,e,n){t.c.set(e,n)}function je(t,e,n){p(n)||(n=[String(n)]),nn(t.c,e,n)}function We(t){return Be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^E()).toString(36)),t}function Qe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ke(t,e,n){return u(t)?(t=encodeURI(t).replace(e,Ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ge(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Me.prototype.toString=function(){var t=[],e=this.f
e&&t.push(Ke(e,He,!0),":")
var n=this.b
return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(Ke(e,He,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.i)&&t.push(":",String(n))),(n=this.a)&&(this.b&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ke(n,"/"==n.charAt(0)?Ye:ze,!0))),(n=this.c.toString())&&t.push("?",n),(n=this.g)&&t.push("#",Ke(n,Je)),t.join("")},Me.prototype.resolve=function(t){var e=Le(this),n=!!t.f
n?Fe(e,t.f):n=!!t.j,n?e.j=t.j:n=!!t.b,n?Ue(e,t.b):n=null!=t.i
var r=t.a
if(n)qe(e,t.i)
else if(n=!!t.a){if("/"!=r.charAt(0))if(this.b&&!this.a)r="/"+r
else{var i=e.a.lastIndexOf("/");-1!=i&&(r=e.a.substr(0,i+1)+r)}if(".."==(i=r)||"."==i)r=""
else if(P(i,"./")||P(i,"/.")){r=0==i.lastIndexOf("/",0),i=i.split("/")
for(var o=[],a=0;a<i.length;){var s=i[a++]
"."==s?r&&a==i.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),r&&a==i.length&&o.push("")):(o.push(s),r=!0)}r=o.join("/")}else r=i}return n?e.a=r:n=""!==t.c.toString(),n?Ve(e,rn(t.c)):n=!!t.g,n&&(e.g=t.g),e}
var He=/[#\/\?@]/g,ze=/[#\?:]/g,Ye=/[#\?]/g,Xe=/[#\?@]/g,Je=/#/g
function $e(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Ze(t){t.a||(t.a=new De,t.b=0,t.c&&function(t,e){if(t){t=t.split("&")
for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null
if(0<=r){var o=t[n].substring(0,r)
i=t[n].substring(r+1)}else o=t[n]
e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function tn(t,e){Ze(t),e=on(t,e),Oe(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,Re(t.a,e))}function en(t,e){return Ze(t),e=on(t,e),Oe(t.a.b,e)}function nn(t,e,n){tn(t,e),0<n.length&&(t.c=null,t.a.set(on(t,e),k(n)),t.b+=n.length)}function rn(t){var e=new $e
return e.c=t.c,t.a&&(e.a=new De(t.a),e.b=t.b),e}function on(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}function an(t){this.a=t,this.b=this.h=null,this.g=!1,this.i=null,this.c=-1,this.l=this.f=null}function sn(t){var e=t.a.F.a
if(null!=e)ee(4),e?(ee(10),Yn(t.a,t,!1)):(ee(11),Yn(t.a,t,!0))
else{t.b=new de(t,void 0,void 0),t.b.h=t.h,e=tr(e=t.a,e.Y()?t.f:null,t.i),ee(4),je(e,"TYPE","xmlhttp")
var n=t.a.j,r=t.a.I
n&&r&&Be(e,n,r),_e(t.b,e,!1,t.f)}}function un(){this.a=this.b=null}function cn(){this.a=new De}function hn(t){var e=r(t)
return"object"==e&&t||"function"==e?"o"+(t[m]||(t[m]=++v)):e.charAt(0)+t}function ln(t,e){this.b=t,this.a=e}function fn(t){this.g=t||pn,t=s.PerformanceNavigationTiming?0<(t=s.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(s.ka&&s.ka.Ea&&s.ka.Ea()&&s.ka.Ea().zb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new cn),this.b=null,this.c=[]}(i=$e.prototype).add=function(t,e){Ze(this),this.c=null,t=on(this,t)
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
function dn(t,e){!t.a&&(P(e,"spdy")||P(e,"quic")||P(e,"h2"))&&(t.f=t.g,t.a=new cn,t.b&&(gn(t,t.b),t.b=null))}function yn(t){return!!t.b||!!t.a&&t.a.a.c>=t.f}function mn(t){return t.b?1:t.a?t.a.a.c:0}function vn(t,e){return t.b?t=t.b==e:t.a?(e=hn(e),t=Oe(t.a.a.b,e)):t=!1,t}function gn(t,e){t.a?t.a.add(e):t.b=e}function _n(t,e){var n
t.b&&t.b==e?t.b=null:((n=t.a)&&(n=hn(e),n=Oe(t.a.a.b,n)),n&&Re(t.a.a,hn(e)))}function bn(t){if(null!=t.b)return t.c.concat(t.b.j)
if(null!=t.a&&0!=t.a.a.c){var e=t.c
return C(t.a.C(),function(t){e=e.concat(t.j)}),e}return k(t.c)}function wn(){}function En(){this.a=new wn}function Tn(t,e,n){var r=n||""
try{Ae(t,function(t,n){var i=t
y(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))})}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Sn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}fn.prototype.cancel=function(){var t
this.c=bn(this),this.b?(this.b.cancel(),this.b=null):this.a&&0!=this.a.a.c&&(C(this.a.C(),function(t){t.cancel()}),(t=this.a.a).b={},t.a.length=0,t.c=0)},wn.prototype.stringify=function(t){return s.JSON.stringify(t,void 0)},wn.prototype.parse=function(t){return s.JSON.parse(t,void 0)}
var In=s.JSON.parse
function Cn(t){Nt.call(this),this.headers=new De,this.H=t||null,this.b=!1,this.s=this.a=null,this.A="",this.h=0,this.f="",this.g=this.w=this.l=this.v=!1,this.o=0,this.m=null,this.I=Nn,this.D=this.F=!1}T(Cn,Nt)
var Nn="",kn=/^https?$/i,An=["POST","PUT"]
function Dn(t){return"content-type"==t.toLowerCase()}function Rn(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,Pn(t),xn(t)}function Pn(t){t.v||(t.v=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function On(t){if(t.b&&void 0!==a&&(!t.s[1]||4!=Ln(t)||2!=t.T()))if(t.l&&4==Ln(t))Wt(t.Fa,0,t)
else if(t.dispatchEvent("readystatechange"),4==Ln(t)){t.b=!1
try{var e,n=t.T()
t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0
break t
default:r=!1}if(!(e=r)){var i
if(i=0===n){var o=String(t.A).match(xe)[1]||null
if(!o&&s.self&&s.self.location){var u=s.self.location.protocol
o=u.substr(0,u.length-1)}i=!kn.test(o?o.toLowerCase():"")}e=i}e?(t.dispatchEvent("complete"),t.dispatchEvent("success")):(t.h=6,t.f=t.za()+" ["+t.T()+"]",Pn(t))}finally{xn(t)}}}function xn(t,e){if(t.a){Mn(t)
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
Be(r,"SID",t.H),Be(r,"RID",n),Be(r,"AID",t.O),Kn(t,r),t.g&&t.i&&Un(r,t.g,t.i),n=new de(t,n,t.A+1),null===t.g&&(n.h=t.i),e&&(t.f=e.j.concat(t.f)),e=Gn(t,n,1e3),n.setTimeout(Math.round(.5*t.qa)+Math.round(.5*t.qa*Math.random())),gn(t.b,n),ge(n,r,e)}function Kn(t,e){t.c&&Ae({},function(t,n){Be(e,n,t)})}function Gn(t,e,n){n=Math.min(t.f.length,n)
var r=t.c?b(t.c.Ta,t.c,t):null
t:for(var i=t.f,o=-1;;){var a=["count="+n];-1==o?0<n?(o=i[0].b,a.push("ofs="+o)):o=0:a.push("ofs="+o)
for(var s=!0,u=0;u<n;u++){var c=i[u].b,h=i[u].a
if(0>(c-=o))o=Math.max(0,i[u].b-100),s=!1
else try{Tn(h,a,"req"+c+"_")}catch(t){r&&r(h)}}if(s){r=a.join("&")
break t}}return t=t.f.splice(0,n),e.j=t,r}function Hn(t){t.a||t.l||(t.S=1,Ft(t.Ha,t),t.v=0)}function zn(t){return!(t.a||t.l||3<=t.v||(t.S++,t.l=re(b(t.Ha,t),Jn(t,t.v)),t.v++,0))}function Yn(t,e,n){var r=e.l
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
try{Mn(this),0<this.o&&((this.D=function(t){return Q&&et(9)&&c(t.timeout)&&void 0!==t.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=b(this.Ca,this)):this.m=Wt(this.Ca,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(t){Rn(this,t)}},i.Ca=function(){void 0!==a&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8))},i.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),xn(this))},i.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),xn(this,!0)),Cn.N.G.call(this)},i.Fa=function(){this.j||(this.w||this.l||this.g?On(this):this.$a())},i.$a=function(){On(this)},i.T=function(){try{return 2<Ln(this)?this.a.status:-1}catch(t){return-1}},i.za=function(){try{return 2<Ln(this)?this.a.statusText:""}catch(t){return""}},i.aa=function(){try{return this.a?this.a.responseText:""}catch(t){return""}},i.Va=function(t){if(this.a){var e=this.a.responseText
return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),In(e)}},i.ya=function(){return this.h},i.Ya=function(){return u(this.f)?this.f:String(this.f)},(i=qn.prototype).wa=8,i.u=1,i.Da=function(){return 0==this.u},i.Ia=function(t){if(this.h)if(this.h=null,1==this.u){if(!t){this.P=Math.floor(1e5*Math.random())
var e,n=new de(this,t=this.P++,void 0),r=this.i
if(this.J&&(r?q(r=F(r),this.J):r=this.J),null===this.g&&(n.h=r),this.W)t:{for(var i=e=0;i<this.f.length;i++){var o=this.f[i]
if(void 0===(o="__data__"in o.a&&u(o=o.a.__data__)?o.length:void 0))break
if(4096<(e+=o)){e=i
break t}if(4096===e||i===this.f.length-1){e=i+1
break t}}e=1e3}else e=1e3
e=Gn(this,n,e),Be(i=Le(this.B),"RID",t),Be(i,"CVER",22),this.o&&this.j&&Be(i,"X-HTTP-Session-Id",this.j),Kn(this,i),this.g&&r&&Un(i,this.g,r),gn(this.b,n),this.W?(Be(i,"$req",e),Be(i,"SID","null"),n.S=!0,ge(n,i,null)):ge(n,i,e),this.u=2}}else 3==this.u&&(t?Qn(this,t):0==this.f.length||yn(this.b)||Qn(this))},i.Ha=function(){this.l=null,this.a=new de(this,"rpc",this.S),null===this.g&&(this.a.h=this.i),this.a.J=0
var t=Le(this.pa)
Be(t,"RID","rpc"),Be(t,"SID",this.H),Be(t,"CI",this.ia?"0":"1"),Be(t,"AID",this.O),Kn(this,t),Be(t,"TYPE","xmlhttp"),this.g&&this.i&&Un(t,this.g,this.i),this.D&&this.a.setTimeout(this.D),_e(this.a,t,!0,this.ga)},i.Ga=function(t,e){if(0!=this.u&&(this.a==t||vn(this.b,t)))if(this.m=t.o,!t.s&&vn(this.b,t)&&3==this.u){try{var n=this.ja.a.parse(e)}catch(t){n=null}if(p(n)&&3==n.length){if(0==(e=n)[0]){t:if(!this.l){if(this.a){if(!(this.a.v+3e3<t.v))break t
Xn(this),this.a.cancel(),this.a=null}zn(this),ee(18)}}else this.ra=e[1],0<this.ra-this.O&&37500>e[2]&&this.ia&&0==this.v&&!this.s&&(this.s=re(b(this.Za,this),6e3))
if(1>=mn(this.b)&&this.fa){try{this.fa()}catch(t){}this.fa=void 0}}else $n(this,11)}else if((t.s||this.a==t)&&Xn(this),!A(e))for(e=n=this.ja.a.parse(e),n=0;n<e.length;n++){var r=e[n]
if(this.O=r[0],r=r[1],2==this.u)if("c"==r[0]){this.H=r[1],this.ga=r[2]
var i=r[3]
null!=i&&(this.wa=i),null!=(r=r[5])&&c(r)&&0<r&&(this.D=1.5*r),this.o&&(r=t.a)&&((i=Fn(r,"X-Client-Wire-Protocol"))&&dn(this.b,i),this.j&&(r=Fn(r,"X-HTTP-Session-Id")))&&(this.I=r,Be(this.B,this.j,r)),this.u=3,this.c&&this.c.va(),r=t,this.pa=tr(this,this.Y()?this.ga:null,this.ha),r.s?(_n(this.b,r),(i=this.D)&&r.setTimeout(i),r.i&&(Ie(r),Te(r)),this.a=r):Hn(this),0<this.f.length&&Wn(this)}else"stop"!=r[0]&&"close"!=r[0]||$n(this,7)
else 3==this.u&&("stop"==r[0]||"close"==r[0]?"stop"==r[0]?$n(this,7):Vn(this):"noop"!=r[0]&&this.c&&this.c.ua(r),this.v=0)}},i.Za=function(){null!=this.s&&(this.s=null,this.a.cancel(),this.a=null,zn(this),ee(19))},i.na=function(t){var e=null
if(this.a==t){Xn(this),this.a=null
var n=2}else{if(!vn(this.b,t))return
e=t.j,_n(this.b,t),n=1}if(this.m=t.o,0!=this.u)if(t.b)1==n?(e=E()-t.v,Jt.dispatchEvent(new ne(Jt,t.l?t.l.length:0,e,this.A)),Wn(this)):Hn(this)
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
