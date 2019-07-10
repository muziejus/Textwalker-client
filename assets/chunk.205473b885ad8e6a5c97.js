(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{192:function(t,e,n){"use strict"
n.r(e),n(203)},203:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var o,i=(o=n(63))&&"object"===r(o)&&"default"in o?o.default:o,a=n(204),s=n(64)
n(206)
var u,c,f,l,p,d,h=n(65),m="0.2.10",g="FB-PERF-TRACE-START",v="FB-PERF-TRACE-STOP",y="FB-PERF-TRACE-MEASURE",b="@firebase/performance/config",_="@firebase/performance/configexpire",w=((u={})["trace started"]="Trace {$traceName} was started before.",u["trace stopped"]="Trace {$traceName} is not running.",u["no window"]="Window is not available.",u["no app id"]="App id is not available.",u["no project id"]="Project id is not available.",u["no api key"]="Api key is not available.",u["invalid cc log"]="Attempted to queue invalid cc event",u["FB not default"]="Performance can only start when Firebase app instance is the default one.",u["RC response not ok"]="RC response is not ok",u),S=new s.ErrorFactory("performance","Performance",w),I=function(){function t(t){if(!t)throw S.create("no window")
this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver(function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var o=r[n]
e(o)}}).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===c&&(c=new t(f)),c},t}(),T=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId
if(!t)throw S.create("no app id")
return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId
if(!t)throw S.create("no project id")
return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey
if(!t)throw S.create("no api key")
return t},t.getInstance=function(){return void 0===l&&(l=new t),l},t}()
function E(){return p}function k(){switch(I.getInstance().document.visibilityState){case"visible":return d.VISIBLE
case"hidden":return d.HIDDEN
case"prerender":return d.PRERENDER
default:return d.UNKNOWN}}function A(){var t=I.getInstance().navigator.connection
switch(t&&t.effectiveType){case"slow-2g":return 1
case"2g":return 2
case"3g":return 3
case"4g":return 4
default:return 0}}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN",t[t.PRERENDER=3]="PRERENDER",t[t.UNLOADED=4]="UNLOADED"}(d||(d={}))
var O=new h.Logger("Performance")
O.logLevel=h.LogLevel.INFO
var P="0.0.1",j={loggingEnabled:!0},N="FIREBASE_INSTALLATIONS_AUTH"
var D="Could not fetch config, will use default configs"
function M(t){if(!t)return t
var e=T.getInstance(),n=t.entries||{}
return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=j.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=x(e.tracesSamplingRate),e.logNetworkAfterSampling=x(e.networkRequestsSamplingRate),t}function x(t){return Math.random()<=t}var R,q=1
function C(){var t
return q=2,R=R||(t=I.getInstance().document,new Promise(function(e){t&&"complete"!==t.readyState?t.addEventListener("readystatechange",function n(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())}):e()})).then(function(){return(t=T.getInstance().firebaseAppInstance.installations().getId()).then(function(t){p=t}),t
var t}).then(function(t){return function(t){var e=function(){var t=I.getInstance().localStorage,e=t.getItem(_)
if(e&&Number(e)>Date.now()){var n=t.getItem(b)
if(n)try{return JSON.parse(n)}catch(t){return}}}()
return e?(M(e),Promise.resolve()):function(t){return(e=T.getInstance().firebaseAppInstance.installations().getToken(),e.then(function(t){}),e).then(function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+T.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+T.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:N+" "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:T.getInstance().getAppId(),app_version:m,sdk_version:P})})
return fetch(r).then(function(t){if(t.ok)return t.json()
throw S.create("RC response not ok")})}).catch(function(){O.info(D)})
var e}(t).then(function(t){return M(t)}).then(function(t){return function(t){if(t){var e=I.getInstance().localStorage
e.setItem(b,JSON.stringify(t)),e.setItem(_,String(Date.now()+60*T.getInstance().configTimeToLive*60*1e3))}}(t)},function(){})}(t)}).then(function(){return B()},function(){return B()})}function B(){q=3}var U,L=1e4,F=3,K=[]
function V(){if(U)return U
var t=function(t){return function(e,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o]
!function(t){if(!t.eventTime||!t.message)throw S.create("invalid cc log")
K=K.concat([t])}({message:t.apply(void 0,r),eventTime:Date.now()})}}(W)
return(U=new h.Logger("@firebase/performance/cc")).logHandler=t,U}function J(t){var e=T.getInstance()
!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&I.getInstance().requiredApisAvailable()&&(t.isAuto&&k()!==d.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===q?H(t):C().then(function(){return H(t)},function(){return H(t)})))}function H(t){E()&&setTimeout(function(){return V().log(t,1)},0)}function W(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},o={application_info:$(),network_request_metric:r},JSON.stringify(o)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs}
0!==Object.keys(t.counters).length&&(e.counters=G(t.counters))
var n=t.getAttributes()
0!==Object.keys(n).length&&(e.custom_attributes=G(n))
var r={application_info:$(),trace_metric:e}
return JSON.stringify(r)}(t)
var n,r,o}function $(){return{google_app_id:T.getInstance().getAppId(),app_instance_id:E(),web_app_info:{sdk_version:m,page_url:I.getInstance().getUrl(),service_worker_status:(t=I.getInstance().navigator,"serviceWorker"in t?t.serviceWorker.controller?2:3:1),visibility_state:k(),effective_connection_type:A()},application_process_state:0}
var t}function G(t){return Object.keys(t).map(function(e){return{key:e,value:t[e]}})}!function t(e){setTimeout(function(){if(0!==F){if(!K.length)return t(L)
var e=K.slice()
K=[]
var n=e.map(function(t){return{source_extension_json:t.message,event_time_ms:String(t.eventTime)}}),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:T.getInstance().logSource,log_event:n}
fetch(T.getInstance().logEndPointUrl,{method:"POST",body:JSON.stringify(r)}).then(function(t){return t.ok||O.info("Call to Firebase backend failed."),t.json()}).then(function(e){var n=Number(e.next_request_wait_millis),r=isNaN(n)?L:Math.max(L,n)
F=3,t(r)}).catch(function(){K=e.concat(K),F--,O.info("Tries left: "+F+"."),t(L)})}},e)}(5500)
var z=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=I.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=g+"-"+this.randomId+"-"+this.name,this.traceStopMark=v+"-"+this.randomId+"-"+this.name,this.traceMeasure=n||y+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw S.create("trace started",{traceName:this.name})
this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw S.create("trace stopped",{traceName:this.name})
this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),J(this)},t.prototype.record=function(t,e,n){if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=a.__assign({},n.attributes)),n&&n.metrics)for(var r=0,o=Object.keys(n.metrics);r<o.length;r++){var i=o[r]
isNaN(Number(n.metrics[i]))||(this.counters[i]=Number(Math.floor(n.metrics[i])))}J(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]&&(this.counters[t]=0),this.counters[t]+=e},t.prototype.putMetric=function(t,e){this.counters[t]=e},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){this.customAttributes[t]=e},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return a.__assign({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0]
e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var o=I.getInstance().getUrl()
if(o){var i=new t("_wt_"+o,!0),a=Math.floor(1e3*I.getInstance().getTimeOrigin())
if(i.setStartTime(a),e&&e[0]&&(i.setDuration(Math.floor(1e3*e[0].duration)),i.incrementMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),i.incrementMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),i.incrementMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd))),n){var s=n.find(function(t){return"first-paint"===t.name})
s&&s.startTime&&i.incrementMetric("_fp",Math.floor(1e3*s.startTime))
var u=n.find(function(t){return"first-contentful-paint"===t.name})
u&&u.startTime&&i.incrementMetric("_fcp",Math.floor(1e3*u.startTime)),r&&i.incrementMetric("_fid",Math.floor(1e3*r))}J(i)}},t.createUserTimingTrace=function(e){J(new t(e,!1,e))},t}()
function Q(t){var e=t
if(e&&void 0!==e.responseStart){var n=I.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),o=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,i=Math.floor(1e3*(e.responseEnd-e.startTime))
!function(t){var e=T.getInstance()
e.instrumentationEnabled&&t.url!==e.logEndPointUrl.split("?")[0]&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(function(){return V().log(t,0)},0)}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:o,timeToResponseCompletedUs:i})}}var X=5e3
function Y(){E()&&(setTimeout(function(){return function(){var t=I.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint")
if(t.onFirstInputDelay){var r=setTimeout(function(){z.createOobTrace(e,n),r=void 0},X)
t.onFirstInputDelay(function(t){r&&(clearTimeout(r),z.createOobTrace(e,n,t))})}else z.createOobTrace(e,n)}()},0),setTimeout(function(){return function(){for(var t=I.getInstance(),e=0,n=t.getEntriesByType("resource");e<n.length;e++){Q(n[e])}t.setupObserver("resource",Q)}()},0),setTimeout(function(){return function(){for(var t=I.getInstance(),e=0,n=t.getEntriesByType("measure");e<n.length;e++){Z(n[e])}t.setupObserver("measure",Z)}()},0))}function Z(t){var e=t.name
e.substring(0,y.length)!==y&&z.createUserTimingTrace(e)}var tt=function(){function t(t){this.app=t,I.getInstance().requiredApisAvailable()?C().then(Y,Y):O.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}return t.prototype.trace=function(t){return new z(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return T.getInstance().instrumentationEnabled},set:function(t){T.getInstance().instrumentationEnabled=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return T.getInstance().dataCollectionEnabled},set:function(t){T.getInstance().dataCollectionEnabled=t},enumerable:!0,configurable:!0}),t}(),et="[DEFAULT]"
function nt(t){t.INTERNAL.registerService("performance",function(t){if(t.name!==et)throw S.create("FB not default")
return T.getInstance().firebaseAppInstance=t,new tt(t)},{})}!function(t){f=t}(window),nt(i),e.registerPerformance=nt},204:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"__extends",function(){return i}),n.d(e,"__assign",function(){return a}),n.d(e,"__rest",function(){return s}),n.d(e,"__decorate",function(){return u}),n.d(e,"__param",function(){return c}),n.d(e,"__metadata",function(){return f}),n.d(e,"__awaiter",function(){return l}),n.d(e,"__generator",function(){return p}),n.d(e,"__exportStar",function(){return d}),n.d(e,"__values",function(){return h}),n.d(e,"__read",function(){return m}),n.d(e,"__spread",function(){return g}),n.d(e,"__await",function(){return v}),n.d(e,"__asyncGenerator",function(){return y}),n.d(e,"__asyncDelegator",function(){return b}),n.d(e,"__asyncValues",function(){return _}),n.d(e,"__makeTemplateObject",function(){return w}),n.d(e,"__importStar",function(){return S}),n.d(e,"__importDefault",function(){return I})
var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}
function i(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])
return t}).apply(this,arguments)}
function s(t,e){var n={}
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r])
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n}function u(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o
if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o)
else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s)
return a>3&&s&&Object.defineProperty(e,n,s),s}function c(t,e){return function(n,r){e(n,r,t)}}function f(t,e){if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function p(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i
function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o
switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i
break
case 4:return a.label++,{value:i[1],done:!1}
case 5:a.label++,r=i[1],i=[0]
continue
case 7:i=a.ops.pop(),a.trys.pop()
continue
default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0
continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1]
break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1]
return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function d(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function h(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0
return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function m(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,o,i=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function g(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(m(arguments[e]))
return t}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function y(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,o=n.apply(t,e||[]),i=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(t){o[t]&&(r[t]=function(e){return new Promise(function(n,r){i.push([t,e,n,r])>1||s(t,e)})})}function s(t,e){try{(n=o[t](e)).value instanceof v?Promise.resolve(n.value.v).then(u,c):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function u(t){s("next",t)}function c(t){s("throw",t)}function f(t,e){t(e),i.shift(),i.length&&s(i[0][0],i[0][1])}}function b(t){var e,n
return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e
function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:v(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function _(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var e,n=t[Symbol.asyncIterator]
return n?n.call(t):(t=h(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e)
function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,o){(function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)})(r,o,(e=t[n](e)).done,e.value)})}}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function S(t){if(t&&t.__esModule)return t
var e={}
if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e.default=t,e}function I(t){return t&&t.__esModule?t:{default:t}}},205:function(t,e,n){var r,o,i,a
function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=function(t){"use strict"
function e(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function n(t,n,r){var o,i=new Promise(function(i,a){e(o=t[n].apply(t,r)).then(i,a)})
return i.request=o,i}function r(t,e,n){n.forEach(function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function o(t,e,r,o){o.forEach(function(o){o in r.prototype&&(t.prototype[o]=function(){return n(this[e],o,arguments)})})}function i(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function a(t,e,r,o){o.forEach(function(o){o in r.prototype&&(t.prototype[o]=function(){return t=this[e],(r=n(t,o,arguments)).then(function(t){if(t)return new u(t,r.request)})
var t,r})})}function s(t){this._index=t}function u(t,e){this._cursor=t,this._request=e}function c(t){this._store=t}function f(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function l(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new f(n)}function p(t){this._db=t}r(s,"_index",["name","keyPath","multiEntry","unique"]),o(s,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),a(s,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(u.prototype[t]=function(){var n=this,r=arguments
return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,r),e(n._request).then(function(t){if(t)return new u(t,n._request)})})})}),c.prototype.createIndex=function(){return new s(this._store.createIndex.apply(this._store,arguments))},c.prototype.index=function(){return new s(this._store.index.apply(this._store,arguments))},r(c,"_store",["name","keyPath","indexNames","autoIncrement"]),o(c,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),a(c,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),i(c,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new c(this._tx.objectStore.apply(this._tx,arguments))},r(f,"_tx",["objectStoreNames","mode"]),i(f,"_tx",IDBTransaction,["abort"]),l.prototype.createObjectStore=function(){return new c(this._db.createObjectStore.apply(this._db,arguments))},r(l,"_db",["name","version","objectStoreNames"]),i(l,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},r(p,"_db",["name","version","objectStoreNames"]),i(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[c,s].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e,n=(e=arguments,Array.prototype.slice.call(e)),r=n[n.length-1],o=this._store||this._index,i=o[t].apply(o,n.slice(0,-1))
i.onsuccess=function(){r(i.result)}})})}),[s,c].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[]
return new Promise(function(o){n.iterateCursor(t,function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():o(r)):o(r)})})})}),t.openDb=function(t,e,r){var o=n(indexedDB,"open",[t,e]),i=o.request
return i&&(i.onupgradeneeded=function(t){r&&r(new l(i.result,t.oldVersion,i.transaction))}),o.then(function(t){return new p(t)})},t.deleteDb=function(t){return n(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})},"object"===s(e)&&void 0!==t?a(e):(o=[e],void 0===(i="function"==typeof(r=a)?r.apply(e,o):r)||(t.exports=i))},206:function(t,e,n){"use strict"
n.r(e)
var r=n(63),o=n.n(r),i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])
return t}).apply(this,arguments)}
function a(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function s(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i
function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o
switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i
break
case 4:return a.label++,{value:i[1],done:!1}
case 5:a.label++,r=i[1],i=[0]
continue
case 7:i=a.ops.pop(),a.trys.pop()
continue
default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0
continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1]
break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1]
return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function u(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,o,i=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}var c=n(64),f=n(205)
n.d(e,"registerInstallations",function(){return W})
var l,p=1e4,d="w:0.1.7",h="FIS_v2",m="https://firebaseinstallations.googleapis.com/v1",g=36e5,v=((l={})["missing-app-config-values"]="Missing App configuration values.",l["create-installation-failed"]="Could not register Firebase Installation.",l["generate-token-failed"]="Could not generate Auth Token.",l["not-registered"]="Firebase Installation is not registered.",l["installation-not-found"]="Firebase Installation not found.",l["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',l["app-offline"]="Could not process request. Application offline.",l["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",l),y=new c.ErrorFactory("installations","Installations",v)
function b(t){return t instanceof c.FirebaseError&&t.code.includes("request-failed")}function _(t){if(!t||!t.options)throw y.create("missing-app-config-values")
var e=t.name,n=t.options,r=n.projectId,o=n.apiKey,i=n.appId
if(!(e&&r&&o&&i))throw y.create("missing-app-config-values")
return{appName:e,projectId:r,apiKey:o,appId:i}}function w(t){var e=t.projectId
return m+"/projects/"+e+"/installations"}function S(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()}
var e}function I(t,e){return a(this,void 0,void 0,function(){var n,r
return s(this,function(o){switch(o.label){case 0:return[4,e.json()]
case 1:return n=o.sent(),r=n.error,[2,y.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}})})}function T(t){var e=t.apiKey
return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function E(t,e){var n=e.refreshToken,r=T(t)
return r.append("Authorization",h+" "+n),r}function k(t){return a(this,void 0,void 0,function(){var e
return s(this,function(n){switch(n.label){case 0:return[4,t()]
case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}})})}function A(t,e){var n=e.fid
return a(this,void 0,void 0,function(){var e,r,o,i,a,u
return s(this,function(s){switch(s.label){case 0:return e=w(t),r=T(t),o={fid:n,authVersion:h,appId:t.appId,sdkVersion:d},i={method:"POST",headers:r,body:JSON.stringify(o)},[4,k(function(){return fetch(e,i)})]
case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3]
case 2:return u=s.sent(),[2,{fid:n,registrationStatus:2,refreshToken:u.refreshToken,authToken:S(u.authToken)}]
case 3:return[4,I("Create Installation",a)]
case 4:throw s.sent()}})})}function O(t){return new Promise(function(e){setTimeout(e,t)})}function P(){var t=new Uint8Array(17)
return crypto.getRandomValues(t),t[0]=112+t[0]%16,function(t){return function(t){var e=t instanceof Uint8Array?t:new Uint8Array(t)
return btoa(String.fromCharCode.apply(String,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(u(arguments[e]))
return t}(e))).replace(/\+/g,"-").replace(/\//g,"_")}(t).substr(0,22)}(t)}var j="firebase-installations-store",N=Object(f.openDb)("firebase-installations-database",1,function(t){switch(t.oldVersion){case 0:t.createObjectStore(j)}})
function D(t,e){return a(this,void 0,void 0,function(){var n,r,o
return s(this,function(i){switch(i.label){case 0:return n=R(t),[4,N]
case 1:return r=i.sent(),[4,(o=r.transaction(j,"readwrite")).objectStore(j).put(e,n)]
case 2:return i.sent(),[4,o.complete]
case 3:return i.sent(),[2,e]}})})}function M(t){return a(this,void 0,void 0,function(){var e,n,r
return s(this,function(o){switch(o.label){case 0:return e=R(t),[4,N]
case 1:return n=o.sent(),[4,(r=n.transaction(j,"readwrite")).objectStore(j).delete(e)]
case 2:return o.sent(),[4,r.complete]
case 3:return o.sent(),[2]}})})}function x(t,e){return a(this,void 0,void 0,function(){var n,r,o,i,a,u
return s(this,function(s){switch(s.label){case 0:return n=R(t),[4,N]
case 1:return r=s.sent(),o=r.transaction(j,"readwrite"),[4,(i=o.objectStore(j)).get(n)]
case 2:return a=s.sent(),(u=e(a))===a?[2,u]:void 0!==u?[3,4]:[4,i.delete(n)]
case 3:return s.sent(),[3,6]
case 4:return[4,i.put(u,n)]
case 5:s.sent(),s.label=6
case 6:return[4,o.complete]
case 7:return s.sent(),[2,u]}})})}function R(t){return t.appName+"!"+t.appId}function q(t){return a(this,void 0,void 0,function(){var e,n
return s(this,function(r){switch(r.label){case 0:return n={},[4,x(t,function(n){var r=function(t){var e=n||{fid:P(),registrationStatus:0}
return U(e)?{fid:e.fid,registrationStatus:0}:e}(),o=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(y.create("app-offline"))}
var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=function(t,e){return a(this,void 0,void 0,function(){var n,r
return s(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,A(t,e)]
case 1:return n=o.sent(),[4,D(t,n)]
case 2:return o.sent(),[3,8]
case 3:return b(r=o.sent())&&409===r.serverCode?[4,M(t)]:[3,5]
case 4:return o.sent(),[3,7]
case 5:return[4,D(t,{fid:e.fid,registrationStatus:0})]
case 6:o.sent(),o.label=7
case 7:throw r
case 8:return[2]}})})}(t,n)
return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:C(t)}:{installationEntry:e}}(t,r)
return e=o.registrationPromise,o.installationEntry})]
case 1:return[2,(n.installationEntry=r.sent(),n.registrationPromise=e,n)]}})})}function C(t){return a(this,void 0,void 0,function(){var e
return s(this,function(n){switch(n.label){case 0:return[4,B(t)]
case 1:e=n.sent(),n.label=2
case 2:return 1!==e.registrationStatus?[3,5]:[4,O(100)]
case 3:return n.sent(),[4,B(t)]
case 4:return e=n.sent(),[3,2]
case 5:if(0===e.registrationStatus)throw y.create("create-installation-failed")
return[2]}})})}function B(t){return x(t,function(t){if(!t)throw y.create("installation-not-found")
return U(t)?{fid:t.fid,registrationStatus:0}:t})}function U(t){return 1===t.registrationStatus&&t.registrationTime+p<Date.now()}function L(t,e){return a(this,void 0,void 0,function(){var n,r,o,i,a
return s(this,function(s){switch(s.label){case 0:return n=function(t,e){var n=e.fid
return w(t)+"/"+n+"/authTokens:generate"}(t,e),r=E(t,e),o={installation:{sdkVersion:d}},i={method:"POST",headers:r,body:JSON.stringify(o)},[4,k(function(){return fetch(n,i)})]
case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3]
case 2:return[2,S(s.sent())]
case 3:return[4,I("Generate Auth Token",a)]
case 4:throw s.sent()}})})}function F(t){return a(this,void 0,void 0,function(){var e,n,r
return s(this,function(o){switch(o.label){case 0:return[4,x(t,function(n){if(!V(n))throw y.create("not-registered")
var r=n.authToken
if(function(t){return 2===t.requestStatus&&!function(t){var e=Date.now()
return e<t.creationTime||t.creationTime+t.expiresIn<e+g}(t)}(r))return n
if(1===r.requestStatus)return e=function(t){return a(this,void 0,void 0,function(){var e,n
return s(this,function(r){switch(r.label){case 0:return[4,K(t)]
case 1:e=r.sent(),r.label=2
case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,O(100)]
case 3:return r.sent(),[4,K(t)]
case 4:return e=r.sent(),[3,2]
case 5:if(0===(n=e.authToken).requestStatus)throw y.create("generate-token-failed")
return[2,n]}})})}(t),n
if(!navigator.onLine)throw y.create("app-offline")
var o=function(t){var e={requestStatus:1,requestTime:Date.now()}
return i({},t,{authToken:e})}(n)
return e=function(t,e){return a(this,void 0,void 0,function(){var n,r,o
return s(this,function(a){switch(a.label){case 0:return a.trys.push([0,3,,8]),[4,L(t,e)]
case 1:return n=a.sent(),o=i({},e,{authToken:n}),[4,D(t,o)]
case 2:return a.sent(),[2,n]
case 3:return!b(r=a.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,M(t)]
case 4:return a.sent(),[3,7]
case 5:return o=i({},e,{authToken:{requestStatus:0}}),[4,D(t,o)]
case 6:a.sent(),a.label=7
case 7:throw r
case 8:return[2]}})})}(t,o),o})]
case 1:return n=o.sent(),e?[4,e]:[3,3]
case 2:return r=o.sent(),[3,4]
case 3:r=n.authToken,o.label=4
case 4:return[2,r.token]}})})}function K(t){return x(t,function(t){if(!V(t))throw y.create("not-registered")
var e
return 1===(e=t.authToken).requestStatus&&e.requestTime+p<Date.now()?i({},t,{authToken:{requestStatus:0}}):t})}function V(t){return void 0!==t&&2===t.registrationStatus}function J(t){return a(this,void 0,void 0,function(){var e,n,r
return s(this,function(o){switch(o.label){case 0:return[4,q(t)]
case 1:return e=o.sent(),n=e.installationEntry,(r=e.registrationPromise)?[4,r]:[3,3]
case 2:return o.sent(),[3,4]
case 3:if(2!==n.registrationStatus)throw y.create("create-installation-failed")
o.label=4
case 4:return[2]}})})}function H(t,e){return a(this,void 0,void 0,function(){var n,r,o,i
return s(this,function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid
return w(t)+"/"+n}(t,e),r=E(t,e),o={method:"DELETE",headers:r},[4,k(function(){return fetch(n,o)})]
case 1:return(i=a.sent()).ok?[3,3]:[4,I("Delete Installation",i)]
case 2:throw a.sent()
case 3:return[2]}})})}function W(t){t.INTERNAL.registerService("installations",function(t){return _(t),{app:t,getId:function(){return function(t){return a(this,void 0,void 0,function(){var e,n,r,o
return s(this,function(i){switch(i.label){case 0:return[4,q(e=_(t))]
case 1:return n=i.sent(),r=n.installationEntry,(o=n.registrationPromise)&&o.catch(function(){}),2===r.registrationStatus&&F(e).catch(function(){}),[2,r.fid]}})})}(t)},getToken:function(){return function(t){return a(this,void 0,void 0,function(){var e
return s(this,function(n){switch(n.label){case 0:return[4,J(e=_(t))]
case 1:return n.sent(),[2,F(e)]}})})}(t)},delete:function(){return function(t){return a(this,void 0,void 0,function(){var e,n
return s(this,function(r){switch(r.label){case 0:return[4,x(e=_(t),function(t){if(!t||0!==t.registrationStatus)return t})]
case 1:if(!(n=r.sent()))return[3,6]
if(1!==n.registrationStatus)return[3,2]
throw y.create("delete-pending-registration")
case 2:if(2!==n.registrationStatus)return[3,6]
if(navigator.onLine)return[3,3]
throw y.create("app-offline")
case 3:return[4,H(e,n)]
case 4:return r.sent(),[4,M(e)]
case 5:r.sent(),r.label=6
case 6:return[2]}})})}(t)}}})}W(o.a)}}])
