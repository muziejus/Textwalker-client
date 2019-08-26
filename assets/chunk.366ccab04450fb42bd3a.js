(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{188:function(t,e,n){"use strict"
n.r(e),n(196)},196:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,a=n(0),s=n(64)
n(197)
var c,u,f,l,p,d,h=n(65),g="0.2.17",m="FB-PERF-TRACE-START",v="FB-PERF-TRACE-STOP",b="FB-PERF-TRACE-MEASURE",_="_wt_",y="@firebase/performance/config",w="@firebase/performance/configexpire",I=((c={})["trace started"]="Trace {$traceName} was started before.",c["trace stopped"]="Trace {$traceName} is not running.",c["no window"]="Window is not available.",c["no app id"]="App id is not available.",c["no project id"]="Project id is not available.",c["no api key"]="Api key is not available.",c["invalid cc log"]="Attempted to queue invalid cc event",c["FB not default"]="Performance can only start when Firebase app instance is the default one.",c["RC response not ok"]="RC response is not ok",c["invalid attribute name"]="Attribute name {$attributeName} is invalid.",c["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",c["invalide custom metric name"]="Custom metric name {$customMetricName} is invalid",c),S=new s.ErrorFactory("performance","Performance",I),T=function(){function t(t){if(!t)throw S.create("no window")
this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver(function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var i=r[n]
e(i)}}).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===u&&(u=new t(f)),u},t}(),E=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId
if(!t)throw S.create("no app id")
return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId
if(!t)throw S.create("no project id")
return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey
if(!t)throw S.create("no api key")
return t},t.getInstance=function(){return void 0===l&&(l=new t),l},t}()
function O(){return p}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN",t[t.PRERENDER=3]="PRERENDER",t[t.UNLOADED=4]="UNLOADED"}(d||(d={}))
var j=["firebase_","google_","ga_"],A=new RegExp("^[a-zA-Z]\\w*$")
function k(){switch(T.getInstance().document.visibilityState){case"visible":return d.VISIBLE
case"hidden":return d.HIDDEN
case"prerender":return d.PRERENDER
default:return d.UNKNOWN}}function N(){var t=T.getInstance().navigator.connection
switch(t&&t.effectiveType){case"slow-2g":return 1
case"2g":return 2
case"3g":return 3
case"4g":return 4
default:return 0}}var P=new h.Logger("Performance")
P.logLevel=h.LogLevel.INFO
var M="0.0.1",D={loggingEnabled:!0},C="FIREBASE_INSTALLATIONS_AUTH"
var q="Could not fetch config, will use default configs"
function R(t){if(!t)return t
var e=E.getInstance(),n=t.entries||{}
return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=D.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=B(e.tracesSamplingRate),e.logNetworkAfterSampling=B(e.networkRequestsSamplingRate),t}function B(t){return Math.random()<=t}var U,x=1
function L(){var t
return x=2,U=U||(t=T.getInstance().document,new Promise(function(e){t&&"complete"!==t.readyState?t.addEventListener("readystatechange",function n(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())}):e()})).then(function(){return(t=E.getInstance().firebaseAppInstance.installations().getId()).then(function(t){p=t}),t
var t}).then(function(t){return function(t){var e=function(){var t=T.getInstance().localStorage,e=t.getItem(w)
if(e&&Number(e)>Date.now()){var n=t.getItem(y)
if(n)try{return JSON.parse(n)}catch(t){return}}}()
return e?(R(e),Promise.resolve()):function(t){return(e=E.getInstance().firebaseAppInstance.installations().getToken(),e.then(function(t){}),e).then(function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+E.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+E.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:C+" "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:E.getInstance().getAppId(),app_version:g,sdk_version:M})})
return fetch(r).then(function(t){if(t.ok)return t.json()
throw S.create("RC response not ok")})}).catch(function(){P.info(q)})
var e}(t).then(function(t){return R(t)}).then(function(t){return function(t){if(t){var e=T.getInstance().localStorage
e.setItem(y,JSON.stringify(t)),e.setItem(w,String(Date.now()+60*E.getInstance().configTimeToLive*60*1e3))}}(t)},function(){})}(t)}).then(function(){return F()},function(){return F()})}function F(){x=3}var K,V=1e4,$=3,J=[]
function W(){if(K)return K
var t=function(t){return function(e,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];(function(t){if(!t.eventTime||!t.message)throw S.create("invalid cc log")
J=J.concat([t])})({message:t.apply(void 0,r),eventTime:Date.now()})}}(G)
return(K=new h.Logger("@firebase/performance/cc")).logHandler=t,K}function H(t){var e=E.getInstance()
!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&T.getInstance().requiredApisAvailable()&&(t.isAuto&&k()!==d.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===x?z(t):L().then(function(){return z(t)},function(){return z(t)})))}function z(t){O()&&setTimeout(function(){return W().log(t,1)},0)}function G(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:Z(),network_request_metric:r},JSON.stringify(i)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs}
0!==Object.keys(t.counters).length&&(e.counters=Q(t.counters))
var n=t.getAttributes()
0!==Object.keys(n).length&&(e.custom_attributes=Q(n))
var r={application_info:Z(),trace_metric:e}
return JSON.stringify(r)}(t)
var n,r,i}function Z(){return{google_app_id:E.getInstance().getAppId(),app_instance_id:O(),web_app_info:{sdk_version:g,page_url:T.getInstance().getUrl(),service_worker_status:(t=T.getInstance().navigator,"serviceWorker"in t?t.serviceWorker.controller?2:3:1),visibility_state:k(),effective_connection_type:N()},application_process_state:0}
var t}function Q(t){return Object.keys(t).map(function(e){return{key:e,value:t[e]}})}!function t(e){setTimeout(function(){if(0!==$){if(!J.length)return t(V)
var e=J.slice()
J=[]
var n=e.map(function(t){return{source_extension_json:t.message,event_time_ms:String(t.eventTime)}}),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:E.getInstance().logSource,log_event:n}
fetch(E.getInstance().logEndPointUrl,{method:"POST",body:JSON.stringify(r)}).then(function(t){return t.ok||P.info("Call to Firebase backend failed."),t.json()}).then(function(e){var n=Number(e.next_request_wait_millis),r=isNaN(n)?V:Math.max(V,n)
$=3,t(r)}).catch(function(){J=e.concat(J),$--,P.info("Tries left: "+$+"."),t(V)})}},e)}(5500)
var X=["_fp","_fcp","_fid"],Y=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=T.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=m+"-"+this.randomId+"-"+this.name,this.traceStopMark=v+"-"+this.randomId+"-"+this.name,this.traceMeasure=n||b+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw S.create("trace started",{traceName:this.name})
this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw S.create("trace stopped",{traceName:this.name})
this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),H(this)},t.prototype.record=function(t,e,n){if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=a.__assign({},n.attributes)),n&&n.metrics)for(var r=0,i=Object.keys(n.metrics);r<i.length;r++){var o=i[r]
isNaN(Number(n.metrics[o]))||(this.counters[o]=Number(Math.floor(n.metrics[o])))}H(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]&&this.putMetric(t,0),this.counters[t]+=e},t.prototype.putMetric=function(t,e){if(n=t,r=this.name,0===n.length||n.length>100||!(r&&r.startsWith(_)&&X.indexOf(n)>-1)&&n.startsWith("_"))throw S.create("invalide custom metric name",{customMetricName:t})
var n,r
this.counters[t]=e},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n,r=!(0===(n=t).length||n.length>40||j.some(function(t){return n.startsWith(t)})||!n.match(A)),i=function(t){return 0!==t.length&&t.length<=100}(e)
if(r&&i)this.customAttributes[t]=e
else{if(!r)throw S.create("invalid attribute name",{attributeName:t})
if(!i)throw S.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return a.__assign({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0]
e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=T.getInstance().getUrl()
if(i){var o=new t(_+i,!0),a=Math.floor(1e3*T.getInstance().getTimeOrigin())
if(o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd))),n){var s=n.find(function(t){return"first-paint"===t.name})
s&&s.startTime&&o.putMetric("_fp",Math.floor(1e3*s.startTime))
var c=n.find(function(t){return"first-contentful-paint"===t.name})
c&&c.startTime&&o.putMetric("_fcp",Math.floor(1e3*c.startTime)),r&&o.putMetric("_fid",Math.floor(1e3*r))}H(o)}},t.createUserTimingTrace=function(e){H(new t(e,!1,e))},t}()
function tt(t){var e=t
if(e&&void 0!==e.responseStart){var n=T.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime))
!function(t){var e=E.getInstance()
e.instrumentationEnabled&&t.url!==e.logEndPointUrl.split("?")[0]&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(function(){return W().log(t,0)},0)}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}}var et=5e3
function nt(){O()&&(setTimeout(function(){return function(){var t=T.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint")
if(t.onFirstInputDelay){var r=setTimeout(function(){Y.createOobTrace(e,n),r=void 0},et)
t.onFirstInputDelay(function(t){r&&(clearTimeout(r),Y.createOobTrace(e,n,t))})}else Y.createOobTrace(e,n)}()},0),setTimeout(function(){return function(){for(var t=T.getInstance(),e=0,n=t.getEntriesByType("resource");e<n.length;e++)tt(n[e])
t.setupObserver("resource",tt)}()},0),setTimeout(function(){return function(){for(var t=T.getInstance(),e=0,n=t.getEntriesByType("measure");e<n.length;e++)rt(n[e])
t.setupObserver("measure",rt)}()},0))}function rt(t){var e=t.name
e.substring(0,b.length)!==b&&Y.createUserTimingTrace(e)}var it=function(){function t(t){this.app=t,T.getInstance().requiredApisAvailable()?L().then(nt,nt):P.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}return t.prototype.trace=function(t){return new Y(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return E.getInstance().instrumentationEnabled},set:function(t){E.getInstance().instrumentationEnabled=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return E.getInstance().dataCollectionEnabled},set:function(t){E.getInstance().dataCollectionEnabled=t},enumerable:!0,configurable:!0}),t}(),ot="[DEFAULT]"
function at(t){t.INTERNAL.registerService("performance",function(t){if(t.name!==ot)throw S.create("FB not default")
if("undefined"==typeof window)throw S.create("no window")
return function(t){f=t}(window),E.getInstance().firebaseAppInstance=t,new it(t)},{})}at(o),e.registerPerformance=at},197:function(t,e,n){"use strict"
n.r(e),n.d(e,"registerInstallations",function(){return z})
var r,i=n(63),o=n.n(i),a=n(0),s=n(64),c=n(198),u=1e4,f="w:0.2.5",l="FIS_v2",p="https://firebaseinstallations.googleapis.com/v1",d=36e5,h=((r={})["missing-app-config-values"]="Missing App configuration values.",r["create-installation-failed"]="Could not register Firebase Installation.",r["generate-token-failed"]="Could not generate Auth Token.",r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),g=new s.ErrorFactory("installations","Installations",h)
function m(t){return t instanceof s.FirebaseError&&t.code.includes("request-failed")}function v(t){if(!t||!t.options)throw g.create("missing-app-config-values")
var e=t.name,n=t.options,r=n.projectId,i=n.apiKey,o=n.appId
if(!(e&&r&&i&&o))throw g.create("missing-app-config-values")
return{appName:e,projectId:r,apiKey:i,appId:o}}function b(t){var e=t.projectId
return p+"/projects/"+e+"/installations"}function _(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()}
var e}function y(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,e.json()]
case 1:return n=i.sent(),r=n.error,[2,g.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}})})}function w(t){var e=t.apiKey
return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function I(t,e){var n=e.refreshToken,r=w(t)
return r.append("Authorization",l+" "+n),r}function S(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,t()]
case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}})})}function T(t,e){var n=e.fid
return Object(a.__awaiter)(this,void 0,void 0,function(){var e,r,i,o,s,c
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return e=b(t),r=w(t),i={fid:n,authVersion:l,appId:t.appId,sdkVersion:f},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,S(function(){return fetch(e,o)})]
case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3]
case 2:return[2,{fid:(c=a.sent()).fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:_(c.authToken)}]
case 3:return[4,y("Create Installation",s)]
case 4:throw a.sent()}})})}function E(t){return new Promise(function(e){setTimeout(e,t)})}var O=/^[cdef][\w-]{21}$/,j=""
function A(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16
var e=function(t){return(e=t,btoa(String.fromCharCode.apply(String,Object(a.__spread)(e))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22)
var e}(t)
return O.test(e)?e:j}catch(t){return j}}var k="firebase-installations-database",N=1,P="firebase-installations-store",M=null
function D(){return M||(M=Object(c.openDb)(k,N,function(t){switch(t.oldVersion){case 0:t.createObjectStore(P)}})),M}function C(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return n=B(t),[4,D()]
case 1:return r=o.sent(),[4,(i=r.transaction(P,"readwrite")).objectStore(P).put(e,n)]
case 2:return o.sent(),[4,i.complete]
case 3:return o.sent(),[2,e]}})})}function q(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return e=B(t),[4,D()]
case 1:return n=i.sent(),[4,(r=n.transaction(P,"readwrite")).objectStore(P).delete(e)]
case 2:return i.sent(),[4,r.complete]
case 3:return i.sent(),[2]}})})}function R(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o,s,c
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=B(t),[4,D()]
case 1:return r=a.sent(),i=r.transaction(P,"readwrite"),[4,(o=i.objectStore(P)).get(n)]
case 2:return s=a.sent(),(c=e(s))===s?[2,c]:void 0!==c?[3,4]:[4,o.delete(n)]
case 3:return a.sent(),[3,6]
case 4:return[4,o.put(c,n)]
case 5:a.sent(),a.label=6
case 6:return[4,i.complete]
case 7:return a.sent(),[2,c]}})})}function B(t){return t.appName+"!"+t.appId}function U(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,R(t,function(n){var r=function(t){var e=n||{fid:A(),registrationStatus:0}
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
return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:x(t)}:{installationEntry:e}}(t,r)
return e=i.registrationPromise,i.installationEntry})]
case 1:return(n=i.sent()).fid!==j?[3,3]:(r={},[4,e])
case 2:return[2,(r.installationEntry=i.sent(),r)]
case 3:return[2,{installationEntry:n,registrationPromise:e}]}})})}function x(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,L(t)]
case 1:e=n.sent(),n.label=2
case 2:return 1!==e.registrationStatus?[3,5]:[4,E(100)]
case 3:return n.sent(),[4,L(t)]
case 4:return e=n.sent(),[3,2]
case 5:if(0===e.registrationStatus)throw g.create("create-installation-failed")
return[2,e]}})})}function L(t){return R(t,function(t){if(!t)throw g.create("installation-not-found")
return F(t)?{fid:t.fid,registrationStatus:0}:t})}function F(t){return 1===t.registrationStatus&&t.registrationTime+u<Date.now()}function K(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o,s
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid
return b(t)+"/"+n+"/authTokens:generate"}(t,e),r=I(t,e),i={installation:{sdkVersion:f}},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,S(function(){return fetch(n,o)})]
case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3]
case 2:return[2,_(a.sent())]
case 3:return[4,y("Generate Auth Token",s)]
case 4:throw a.sent()}})})}function V(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,R(t,function(n){if(!J(n))throw g.create("not-registered")
var r=n.authToken
if(function(t){return 2===t.requestStatus&&!function(t){var e=Date.now()
return e<t.creationTime||t.creationTime+t.expiresIn<e+d}(t)}(r))return n
if(1===r.requestStatus)return e=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n
return Object(a.__generator)(this,function(r){switch(r.label){case 0:return[4,$(t)]
case 1:e=r.sent(),r.label=2
case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,E(100)]
case 3:return r.sent(),[4,$(t)]
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
case 4:return[2,r.token]}})})}function $(t){return R(t,function(t){if(!J(t))throw g.create("not-registered")
var e
return 1===(e=t.authToken).requestStatus&&e.requestTime+u<Date.now()?Object(a.__assign)({},t,{authToken:{requestStatus:0}}):t})}function J(t){return void 0!==t&&2===t.registrationStatus}function W(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,U(t)]
case 1:return e=i.sent(),n=e.installationEntry,(r=e.registrationPromise)?[4,r]:[3,3]
case 2:return i.sent(),[3,4]
case 3:if(2!==n.registrationStatus)throw g.create("create-installation-failed")
i.label=4
case 4:return[2]}})})}function H(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid
return b(t)+"/"+n}(t,e),r=I(t,e),i={method:"DELETE",headers:r},[4,S(function(){return fetch(n,i)})]
case 1:return(o=a.sent()).ok?[3,3]:[4,y("Delete Installation",o)]
case 2:throw a.sent()
case 3:return[2]}})})}function z(t){t.INTERNAL.registerService("installations",function(t){return v(t),{app:t,getId:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return[4,U(e=v(t))]
case 1:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)&&i.catch(function(){}),2===r.registrationStatus&&V(e).catch(function(){}),[2,r.fid]}})})}(t)},getToken:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,W(e=v(t))]
case 1:return n.sent(),[2,V(e)]}})})}(t)},delete:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n
return Object(a.__generator)(this,function(r){switch(r.label){case 0:return[4,R(e=v(t),function(t){if(!t||0!==t.registrationStatus)return t})]
case 1:if(!(n=r.sent()))return[3,6]
if(1!==n.registrationStatus)return[3,2]
throw g.create("delete-pending-registration")
case 2:if(2!==n.registrationStatus)return[3,6]
if(navigator.onLine)return[3,3]
throw g.create("app-offline")
case 3:return[4,H(e,n)]
case 4:return r.sent(),[4,q(e)]
case 5:r.sent(),r.label=6
case 6:return[2]}})})}(t)}}})}z(o.a)},198:function(t,e,n){var r,i,o,a
function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=function(t){"use strict"
function e(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function n(t,n,r){var i,o=new Promise(function(o,a){e(i=t[n].apply(t,r)).then(o,a)})
return o.request=i,o}function r(t,e,r){var i=n(t,e,r)
return i.then(function(t){if(t)return new u(t,i.request)})}function i(t,e,n){n.forEach(function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function o(t,e,r,i){i.forEach(function(i){i in r.prototype&&(t.prototype[i]=function(){return n(this[e],i,arguments)})})}function a(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function s(t,e,n,i){i.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return r(this[e],i,arguments)})})}function c(t){this._index=t}function u(t,e){this._cursor=t,this._request=e}function f(t){this._store=t}function l(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function p(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new l(n)}function d(t){this._db=t}i(c,"_index",["name","keyPath","multiEntry","unique"]),o(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),s(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(u.prototype[t]=function(){var n=this,r=arguments
return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,r),e(n._request).then(function(t){if(t)return new u(t,n._request)})})})}),f.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},f.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},i(f,"_store",["name","keyPath","indexNames","autoIncrement"]),o(f,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),s(f,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(f,"_store",IDBObjectStore,["deleteIndex"]),l.prototype.objectStore=function(){return new f(this._tx.objectStore.apply(this._tx,arguments))},i(l,"_tx",["objectStoreNames","mode"]),a(l,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new f(this._db.createObjectStore.apply(this._db,arguments))},i(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["deleteObjectStore","close"]),d.prototype.transaction=function(){return new l(this._db.transaction.apply(this._db,arguments))},i(d,"_db",["name","version","objectStoreNames"]),a(d,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[f,c].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e=function(t){return Array.prototype.slice.call(t)}(arguments),n=e[e.length-1],r=this._store||this._index,i=r[t].apply(r,e.slice(0,-1))
i.onsuccess=function(){n(i.result)}})})}),[c,f].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[]
return new Promise(function(i){n.iterateCursor(t,function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)})})})}),t.openDb=function(t,e,r){var i=n(indexedDB,"open",[t,e]),o=i.request
return o&&(o.onupgradeneeded=function(t){r&&r(new p(o.result,t.oldVersion,o.transaction))}),i.then(function(t){return new d(t)})},t.deleteDb=function(t){return n(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})},"object"===s(e)&&void 0!==t?a(e):(i=[e],void 0===(o="function"==typeof(r=a)?r.apply(e,i):r)||(t.exports=o))}}])
