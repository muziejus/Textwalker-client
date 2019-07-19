(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{190:function(t,e,n){"use strict"
n.r(e),n(198)},198:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,a=n(0),s=n(64)
n(199)
var c,u,f,l,p,d,h=n(65),g="0.2.12",m="FB-PERF-TRACE-START",v="FB-PERF-TRACE-STOP",_="FB-PERF-TRACE-MEASURE",b="@firebase/performance/config",y="@firebase/performance/configexpire",w=((c={})["trace started"]="Trace {$traceName} was started before.",c["trace stopped"]="Trace {$traceName} is not running.",c["no window"]="Window is not available.",c["no app id"]="App id is not available.",c["no project id"]="Project id is not available.",c["no api key"]="Api key is not available.",c["invalid cc log"]="Attempted to queue invalid cc event",c["FB not default"]="Performance can only start when Firebase app instance is the default one.",c["RC response not ok"]="RC response is not ok",c),I=new s.ErrorFactory("performance","Performance",w),S=function(){function t(t){if(!t)throw I.create("no window")
this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver(function(t){var n,r
try{for(var i=a.__values(t.getEntries()),o=i.next();!o.done;o=i.next()){var s=o.value
e(s)}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===u&&(u=new t(f)),u},t}(),T=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId
if(!t)throw I.create("no app id")
return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId
if(!t)throw I.create("no project id")
return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey
if(!t)throw I.create("no api key")
return t},t.getInstance=function(){return void 0===l&&(l=new t),l},t}()
function E(){return p}function O(){switch(S.getInstance().document.visibilityState){case"visible":return d.VISIBLE
case"hidden":return d.HIDDEN
case"prerender":return d.PRERENDER
default:return d.UNKNOWN}}function j(){var t=S.getInstance().navigator.connection
switch(t&&t.effectiveType){case"slow-2g":return 1
case"2g":return 2
case"3g":return 3
case"4g":return 4
default:return 0}}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN",t[t.PRERENDER=3]="PRERENDER",t[t.UNLOADED=4]="UNLOADED"}(d||(d={}))
var k=new h.Logger("Performance")
k.logLevel=h.LogLevel.INFO
var A="0.0.1",N={loggingEnabled:!0},P="FIREBASE_INSTALLATIONS_AUTH"
var D="Could not fetch config, will use default configs"
function M(t){if(!t)return t
var e=T.getInstance(),n=t.entries||{}
return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=N.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=C(e.tracesSamplingRate),e.logNetworkAfterSampling=C(e.networkRequestsSamplingRate),t}function C(t){return Math.random()<=t}var q,R=1
function x(){var t
return R=2,q=q||(t=S.getInstance().document,new Promise(function(e){t&&"complete"!==t.readyState?t.addEventListener("readystatechange",function n(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())}):e()})).then(function(){return(t=T.getInstance().firebaseAppInstance.installations().getId()).then(function(t){p=t}),t
var t}).then(function(t){return function(t){var e=function(){var t=S.getInstance().localStorage,e=t.getItem(y)
if(e&&Number(e)>Date.now()){var n=t.getItem(b)
if(n)try{return JSON.parse(n)}catch(t){return}}}()
return e?(M(e),Promise.resolve()):function(t){return(e=T.getInstance().firebaseAppInstance.installations().getToken(),e.then(function(t){}),e).then(function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+T.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+T.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:P+" "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:T.getInstance().getAppId(),app_version:g,sdk_version:A})})
return fetch(r).then(function(t){if(t.ok)return t.json()
throw I.create("RC response not ok")})}).catch(function(){k.info(D)})
var e}(t).then(function(t){return M(t)}).then(function(t){return function(t){if(t){var e=S.getInstance().localStorage
e.setItem(b,JSON.stringify(t)),e.setItem(y,String(Date.now()+60*T.getInstance().configTimeToLive*60*1e3))}}(t)},function(){})}(t)}).then(function(){return B()},function(){return B()})}function B(){R=3}var U,L=1e4,F=3,K=[]
function V(){if(U)return U
var t=function(t){return function(e,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
!function(t){if(!t.eventTime||!t.message)throw I.create("invalid cc log")
K=a.__spread(K,[t])}({message:t.apply(void 0,a.__spread(r)),eventTime:Date.now()})}}(H)
return(U=new h.Logger("@firebase/performance/cc")).logHandler=t,U}function J(t){var e=T.getInstance()
!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&S.getInstance().requiredApisAvailable()&&(t.isAuto&&O()!==d.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===R?$(t):x().then(function(){return $(t)},function(){return $(t)})))}function $(t){E()&&setTimeout(function(){return V().log(t,1)},0)}function H(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:W(),network_request_metric:r},JSON.stringify(i)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs}
0!==Object.keys(t.counters).length&&(e.counters=z(t.counters))
var n=t.getAttributes()
0!==Object.keys(n).length&&(e.custom_attributes=z(n))
var r={application_info:W(),trace_metric:e}
return JSON.stringify(r)}(t)
var n,r,i}function W(){return{google_app_id:T.getInstance().getAppId(),app_instance_id:E(),web_app_info:{sdk_version:g,page_url:S.getInstance().getUrl(),service_worker_status:(t=S.getInstance().navigator,"serviceWorker"in t?t.serviceWorker.controller?2:3:1),visibility_state:O(),effective_connection_type:j()},application_process_state:0}
var t}function z(t){return Object.keys(t).map(function(e){return{key:e,value:t[e]}})}!function t(e){setTimeout(function(){if(0!==F){if(!K.length)return t(L)
var e=a.__spread(K)
K=[]
var n=e.map(function(t){return{source_extension_json:t.message,event_time_ms:String(t.eventTime)}}),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:T.getInstance().logSource,log_event:n}
fetch(T.getInstance().logEndPointUrl,{method:"POST",body:JSON.stringify(r)}).then(function(t){return t.ok||k.info("Call to Firebase backend failed."),t.json()}).then(function(e){var n=Number(e.next_request_wait_millis),r=isNaN(n)?L:Math.max(L,n)
F=3,t(r)}).catch(function(){K=a.__spread(e,K),F--,k.info("Tries left: "+F+"."),t(L)})}},e)}(5500)
var G=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=S.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=m+"-"+this.randomId+"-"+this.name,this.traceStopMark=v+"-"+this.randomId+"-"+this.name,this.traceMeasure=n||_+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw I.create("trace started",{traceName:this.name})
this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw I.create("trace stopped",{traceName:this.name})
this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),J(this)},t.prototype.record=function(t,e,n){var r,i
if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=a.__assign({},n.attributes)),n&&n.metrics)try{for(var o=a.__values(Object.keys(n.metrics)),s=o.next();!s.done;s=o.next()){var c=s.value
isNaN(Number(n.metrics[c]))||(this.counters[c]=Number(Math.floor(n.metrics[c])))}}catch(t){r={error:t}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}J(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]&&(this.counters[t]=0),this.counters[t]+=e},t.prototype.putMetric=function(t,e){this.counters[t]=e},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){this.customAttributes[t]=e},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return a.__assign({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0]
e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=S.getInstance().getUrl()
if(i){var o=new t("_wt_"+i,!0),a=Math.floor(1e3*S.getInstance().getTimeOrigin())
if(o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.incrementMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.incrementMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.incrementMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd))),n){var s=n.find(function(t){return"first-paint"===t.name})
s&&s.startTime&&o.incrementMetric("_fp",Math.floor(1e3*s.startTime))
var c=n.find(function(t){return"first-contentful-paint"===t.name})
c&&c.startTime&&o.incrementMetric("_fcp",Math.floor(1e3*c.startTime)),r&&o.incrementMetric("_fid",Math.floor(1e3*r))}J(o)}},t.createUserTimingTrace=function(e){J(new t(e,!1,e))},t}()
function Q(t){var e=t
if(e&&void 0!==e.responseStart){var n=S.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime))
!function(t){var e=T.getInstance()
e.instrumentationEnabled&&t.url!==e.logEndPointUrl.split("?")[0]&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(function(){return V().log(t,0)},0)}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}}var X=5e3
function Y(){E()&&(setTimeout(function(){return function(){var t=S.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint")
if(t.onFirstInputDelay){var r=setTimeout(function(){G.createOobTrace(e,n),r=void 0},X)
t.onFirstInputDelay(function(t){r&&(clearTimeout(r),G.createOobTrace(e,n,t))})}else G.createOobTrace(e,n)}()},0),setTimeout(function(){return function(){var t,e,n=S.getInstance(),r=n.getEntriesByType("resource")
try{for(var i=a.__values(r),o=i.next();!o.done;o=i.next()){Q(o.value)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}n.setupObserver("resource",Q)}()},0),setTimeout(function(){return function(){var t,e,n=S.getInstance(),r=n.getEntriesByType("measure")
try{for(var i=a.__values(r),o=i.next();!o.done;o=i.next()){Z(o.value)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}n.setupObserver("measure",Z)}()},0))}function Z(t){var e=t.name
e.substring(0,_.length)!==_&&G.createUserTimingTrace(e)}var tt=function(){function t(t){this.app=t,S.getInstance().requiredApisAvailable()?x().then(Y,Y):k.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}return t.prototype.trace=function(t){return new G(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return T.getInstance().instrumentationEnabled},set:function(t){T.getInstance().instrumentationEnabled=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return T.getInstance().dataCollectionEnabled},set:function(t){T.getInstance().dataCollectionEnabled=t},enumerable:!0,configurable:!0}),t}(),et="[DEFAULT]"
function nt(t){t.INTERNAL.registerService("performance",function(t){if(t.name!==et)throw I.create("FB not default")
return T.getInstance().firebaseAppInstance=t,new tt(t)},{})}!function(t){f=t}(window),nt(o),e.registerPerformance=nt},199:function(t,e,n){"use strict"
n.r(e),n.d(e,"registerInstallations",function(){return z})
var r,i=n(63),o=n.n(i),a=n(0),s=n(64),c=n(200),u=1e4,f="w:0.2.1",l="FIS_v2",p="https://firebaseinstallations.googleapis.com/v1",d=36e5,h=((r={})["missing-app-config-values"]="Missing App configuration values.",r["create-installation-failed"]="Could not register Firebase Installation.",r["generate-token-failed"]="Could not generate Auth Token.",r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),g=new s.ErrorFactory("installations","Installations",h)
function m(t){return t instanceof s.FirebaseError&&t.code.includes("request-failed")}function v(t){if(!t||!t.options)throw g.create("missing-app-config-values")
var e=t.name,n=t.options,r=n.projectId,i=n.apiKey,o=n.appId
if(!(e&&r&&i&&o))throw g.create("missing-app-config-values")
return{appName:e,projectId:r,apiKey:i,appId:o}}function _(t){var e=t.projectId
return p+"/projects/"+e+"/installations"}function b(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()}
var e}function y(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,e.json()]
case 1:return n=i.sent(),r=n.error,[2,g.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}})})}function w(t){var e=t.apiKey
return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function I(t,e){var n=e.refreshToken,r=w(t)
return r.append("Authorization",l+" "+n),r}function S(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,t()]
case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}})})}function T(t,e){var n=e.fid
return Object(a.__awaiter)(this,void 0,void 0,function(){var e,r,i,o,s,c
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return e=_(t),r=w(t),i={fid:n,authVersion:l,appId:t.appId,sdkVersion:f},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,S(function(){return fetch(e,o)})]
case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3]
case 2:return[2,{fid:(c=a.sent()).fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:b(c.authToken)}]
case 3:return[4,y("Create Installation",s)]
case 4:throw a.sent()}})})}function E(t){return new Promise(function(e){setTimeout(e,t)})}var O=/^[cdef][\w-]{21}$/,j=""
function k(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16
var e=function(t){return(e=t,btoa(String.fromCharCode.apply(String,Object(a.__spread)(e))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22)
var e}(t)
return O.test(e)?e:j}catch(t){return j}}var A="firebase-installations-database",N=1,P="firebase-installations-store",D=null
function M(){return D||(D=Object(c.openDb)(A,N,function(t){switch(t.oldVersion){case 0:t.createObjectStore(P)}})),D}function C(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return n=x(t),[4,M()]
case 1:return r=o.sent(),[4,(i=r.transaction(P,"readwrite")).objectStore(P).put(e,n)]
case 2:return o.sent(),[4,i.complete]
case 3:return o.sent(),[2,e]}})})}function q(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return e=x(t),[4,M()]
case 1:return n=i.sent(),[4,(r=n.transaction(P,"readwrite")).objectStore(P).delete(e)]
case 2:return i.sent(),[4,r.complete]
case 3:return i.sent(),[2]}})})}function R(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o,s,c
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=x(t),[4,M()]
case 1:return r=a.sent(),i=r.transaction(P,"readwrite"),[4,(o=i.objectStore(P)).get(n)]
case 2:return s=a.sent(),(c=e(s))===s?[2,c]:void 0!==c?[3,4]:[4,o.delete(n)]
case 3:return a.sent(),[3,6]
case 4:return[4,o.put(c,n)]
case 5:a.sent(),a.label=6
case 6:return[4,i.complete]
case 7:return a.sent(),[2,c]}})})}function x(t){return t.appName+"!"+t.appId}function B(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,R(t,function(n){var r=function(t){var e=n||{fid:k(),registrationStatus:0}
return F(e)?{fid:e.fid,registrationStatus:0}:e}(),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(g.create("app-offline"))}
var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=function(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,T(t,e)]
case 1:return n=i.sent(),[2,C(t,n)]
case 2:return m(r=i.sent())&&409===r.serverCode?[4,q(t)]:[3,4]
case 3:return i.sent(),[3,6]
case 4:return[4,C(t,{fid:e.fid,registrationStatus:0})]
case 5:i.sent(),i.label=6
case 6:throw r
case 7:return[2]}})})}(t,n)
return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:U(t)}:{installationEntry:e}}(t,r)
return e=i.registrationPromise,i.installationEntry})]
case 1:return(n=i.sent()).fid!==j?[3,3]:(r={},[4,e])
case 2:return[2,(r.installationEntry=i.sent(),r)]
case 3:return[2,{installationEntry:n,registrationPromise:e}]}})})}function U(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,L(t)]
case 1:e=n.sent(),n.label=2
case 2:return 1!==e.registrationStatus?[3,5]:[4,E(100)]
case 3:return n.sent(),[4,L(t)]
case 4:return e=n.sent(),[3,2]
case 5:if(0===e.registrationStatus)throw g.create("create-installation-failed")
return[2,e]}})})}function L(t){return R(t,function(t){if(!t)throw g.create("installation-not-found")
return F(t)?{fid:t.fid,registrationStatus:0}:t})}function F(t){return 1===t.registrationStatus&&t.registrationTime+u<Date.now()}function K(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o,s
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid
return _(t)+"/"+n+"/authTokens:generate"}(t,e),r=I(t,e),i={installation:{sdkVersion:f}},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,S(function(){return fetch(n,o)})]
case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3]
case 2:return[2,b(a.sent())]
case 3:return[4,y("Generate Auth Token",s)]
case 4:throw a.sent()}})})}function V(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,R(t,function(n){if(!$(n))throw g.create("not-registered")
var r=n.authToken
if(function(t){return 2===t.requestStatus&&!function(t){var e=Date.now()
return e<t.creationTime||t.creationTime+t.expiresIn<e+d}(t)}(r))return n
if(1===r.requestStatus)return e=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n
return Object(a.__generator)(this,function(r){switch(r.label){case 0:return[4,J(t)]
case 1:e=r.sent(),r.label=2
case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,E(100)]
case 3:return r.sent(),[4,J(t)]
case 4:return e=r.sent(),[3,2]
case 5:if(0===(n=e.authToken).requestStatus)throw g.create("generate-token-failed")
return[2,n]}})})}(t),n
if(!navigator.onLine)throw g.create("app-offline")
var i=function(t){var e={requestStatus:1,requestTime:Date.now()}
return Object(a.__assign)({},t,{authToken:e})}(n)
return e=function(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,K(t,e)]
case 1:return n=o.sent(),i=Object(a.__assign)({},e,{authToken:n}),[4,C(t,i)]
case 2:return o.sent(),[2,n]
case 3:return!m(r=o.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,q(t)]
case 4:return o.sent(),[3,7]
case 5:return i=Object(a.__assign)({},e,{authToken:{requestStatus:0}}),[4,C(t,i)]
case 6:o.sent(),o.label=7
case 7:throw r
case 8:return[2]}})})}(t,i),i})]
case 1:return n=i.sent(),e?[4,e]:[3,3]
case 2:return r=i.sent(),[3,4]
case 3:r=n.authToken,i.label=4
case 4:return[2,r.token]}})})}function J(t){return R(t,function(t){if(!$(t))throw g.create("not-registered")
var e
return 1===(e=t.authToken).requestStatus&&e.requestTime+u<Date.now()?Object(a.__assign)({},t,{authToken:{requestStatus:0}}):t})}function $(t){return void 0!==t&&2===t.registrationStatus}function H(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,B(t)]
case 1:return e=i.sent(),n=e.installationEntry,(r=e.registrationPromise)?[4,r]:[3,3]
case 2:return i.sent(),[3,4]
case 3:if(2!==n.registrationStatus)throw g.create("create-installation-failed")
i.label=4
case 4:return[2]}})})}function W(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid
return _(t)+"/"+n}(t,e),r=I(t,e),i={method:"DELETE",headers:r},[4,S(function(){return fetch(n,i)})]
case 1:return(o=a.sent()).ok?[3,3]:[4,y("Delete Installation",o)]
case 2:throw a.sent()
case 3:return[2]}})})}function z(t){t.INTERNAL.registerService("installations",function(t){return v(t),{app:t,getId:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return[4,B(e=v(t))]
case 1:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)&&i.catch(function(){}),2===r.registrationStatus&&V(e).catch(function(){}),[2,r.fid]}})})}(t)},getToken:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,H(e=v(t))]
case 1:return n.sent(),[2,V(e)]}})})}(t)},delete:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n
return Object(a.__generator)(this,function(r){switch(r.label){case 0:return[4,R(e=v(t),function(t){if(!t||0!==t.registrationStatus)return t})]
case 1:if(!(n=r.sent()))return[3,6]
if(1!==n.registrationStatus)return[3,2]
throw g.create("delete-pending-registration")
case 2:if(2!==n.registrationStatus)return[3,6]
if(navigator.onLine)return[3,3]
throw g.create("app-offline")
case 3:return[4,W(e,n)]
case 4:return r.sent(),[4,q(e)]
case 5:r.sent(),r.label=6
case 6:return[2]}})})}(t)}}})}z(o.a)},200:function(t,e,n){var r,i,o,a
function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=function(t){"use strict"
function e(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function n(t,n,r){var i,o=new Promise(function(o,a){e(i=t[n].apply(t,r)).then(o,a)})
return o.request=i,o}function r(t,e,n){n.forEach(function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function i(t,e,r,i){i.forEach(function(i){i in r.prototype&&(t.prototype[i]=function(){return n(this[e],i,arguments)})})}function o(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function a(t,e,r,i){i.forEach(function(i){i in r.prototype&&(t.prototype[i]=function(){return t=this[e],(r=n(t,i,arguments)).then(function(t){if(t)return new c(t,r.request)})
var t,r})})}function s(t){this._index=t}function c(t,e){this._cursor=t,this._request=e}function u(t){this._store=t}function f(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function l(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new f(n)}function p(t){this._db=t}r(s,"_index",["name","keyPath","multiEntry","unique"]),i(s,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),a(s,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(c,"_cursor",["direction","key","primaryKey","value"]),i(c,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(c.prototype[t]=function(){var n=this,r=arguments
return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,r),e(n._request).then(function(t){if(t)return new c(t,n._request)})})})}),u.prototype.createIndex=function(){return new s(this._store.createIndex.apply(this._store,arguments))},u.prototype.index=function(){return new s(this._store.index.apply(this._store,arguments))},r(u,"_store",["name","keyPath","indexNames","autoIncrement"]),i(u,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),a(u,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(u,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new u(this._tx.objectStore.apply(this._tx,arguments))},r(f,"_tx",["objectStoreNames","mode"]),o(f,"_tx",IDBTransaction,["abort"]),l.prototype.createObjectStore=function(){return new u(this._db.createObjectStore.apply(this._db,arguments))},r(l,"_db",["name","version","objectStoreNames"]),o(l,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},r(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[u,s].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e,n=(e=arguments,Array.prototype.slice.call(e)),r=n[n.length-1],i=this._store||this._index,o=i[t].apply(i,n.slice(0,-1))
o.onsuccess=function(){r(o.result)}})})}),[s,u].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[]
return new Promise(function(i){n.iterateCursor(t,function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)})})})}),t.openDb=function(t,e,r){var i=n(indexedDB,"open",[t,e]),o=i.request
return o&&(o.onupgradeneeded=function(t){r&&r(new l(o.result,t.oldVersion,o.transaction))}),i.then(function(t){return new p(t)})},t.deleteDb=function(t){return n(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})},"object"===s(e)&&void 0!==t?a(e):(i=[e],void 0===(o="function"==typeof(r=a)?r.apply(e,i):r)||(t.exports=o))}}])
