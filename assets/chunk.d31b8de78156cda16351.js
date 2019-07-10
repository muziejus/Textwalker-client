(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[9],{193:function(e,t,r){"use strict"
r.r(t)
var n=r(63),o=r.n(n)
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a="firebasestorage.googleapis.com",s="storageBucket",u=12e4,c=6e4,l=-9007199254740991,p=function(){function e(e,t){this.code_=f(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return f(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),e}(),h={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"}
function f(e){return"storage/"+e}function d(){return new p(h.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function _(){return new p(h.CANCELED,"User canceled the upload/download.")}function v(){return new p(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function m(e,t,r){return new p(h.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function b(){return new p(h.APP_DELETED,"The Firebase app was deleted.")}function y(e,t){return new p(h.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function g(e){throw new p(h.INTERNAL_ERROR,"Internal error: "+e)}var R={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"}
function w(e){switch(e){case R.RAW:case R.BASE64:case R.BASE64URL:case R.DATA_URL:return
default:throw"Expected one of the event types: ["+R.RAW+", "+R.BASE64+", "+R.BASE64URL+", "+R.DATA_URL+"]."}}var E=function(e,t){this.data=e,this.contentType=t||null}
function T(e,t){switch(e){case R.RAW:return new E(U(t))
case R.BASE64:case R.BASE64URL:return new E(A(e,t))
case R.DATA_URL:return new E((r=new k(t)).base64?A(R.BASE64,r.rest):function(e){var t
try{t=decodeURIComponent(e)}catch(e){throw y(R.DATA_URL,"Malformed data URL.")}return U(t)}(r.rest),new k(t).contentType)}var r
throw d()}function U(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r)
n<=127?t.push(n):n<=2047?t.push(192|n>>6,128|63&n):55296==(64512&n)?r<e.length-1&&56320==(64512&e.charCodeAt(r+1))?(n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)):t.push(239,191,189):56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function A(e,t){switch(e){case R.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_")
if(r||n)throw y(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?")
break
case R.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/")
if(o||i)throw y(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?")
t=t.replace(/-/g,"+").replace(/_/g,"/")}var a
try{a=atob(t)}catch(t){throw y(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u)
return s}var N,k=function(e){this.base64=!1,this.contentType=null
var t=e.match(/^data:([^,]+)?,/)
if(null===t)throw y(R.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>")
var r,n,o=t[1]||null
null!=o&&(this.base64=(n=";base64",(r=o).length>=n.length&&r.substring(r.length-n.length)===n),this.contentType=this.base64?o.substring(0,o.length-";base64".length):o),this.rest=e.substring(e.indexOf(",")+1)},O={STATE_CHANGED:"state_changed"},S={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},C={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"}
function x(e){switch(e){case S.RUNNING:case S.PAUSING:case S.CANCELING:return C.RUNNING
case S.PAUSED:return C.PAUSED
case S.SUCCESS:return C.SUCCESS
case S.CANCELED:return C.CANCELED
case S.ERROR:default:return C.ERROR}}function P(e){return null!=e}function I(e){return void 0!==e}function L(e){return"function"==typeof e}function D(e){return"object"===i(e)}function M(e){return D(e)&&null!==e}function W(e){return"string"==typeof e||e instanceof String}function B(e){return G(e)&&Number.isInteger(e)}function G(e){return"number"==typeof e||e instanceof Number}function j(e){return q()&&e instanceof Blob}function q(){return"undefined"!=typeof Blob}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(N||(N={}))
var F=function(){function e(){var e=this
this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=N.NO_ERROR,this.sendPromise_=new Promise(function(t){e.xhr_.addEventListener("abort",function(){e.errorCode_=N.ABORT,t(e)}),e.xhr_.addEventListener("error",function(){e.errorCode_=N.NETWORK_ERROR,t(e)}),e.xhr_.addEventListener("load",function(){t(e)})})}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw g("cannot .send() more than once")
if(this.sent_=!0,this.xhr_.open(t,e,!0),P(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString())
return P(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw g("cannot .getErrorCode() before sending")
return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw g("cannot .getStatus() before sending")
try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw g("cannot .getResponseText() before sending")
return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){P(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){P(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),H=function(){function e(){}return e.prototype.createXhrIo=function(){return new F},e}()
var z=function(){function e(e,t){var r=0,n=""
j(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(j(this.data_)){var n=function(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}(this.data_,t,r)
return null===n?null:new e(n)}return new e(new Uint8Array(this.data_.buffer,t,r-t),!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(q()){var n=t.map(function(t){return t instanceof e?t.data_:t})
return new e(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0
if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o])
return n.getBlob()}if(q())return new Blob(e)
throw Error("This browser doesn't seem to support creating Blobs")}.apply(null,n))}var o=t.map(function(e){return W(e)?T(R.RAW,e).data:e.data_}),i=0
o.forEach(function(e){i+=e.byteLength})
var a=new Uint8Array(i),s=0
return o.forEach(function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]}),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),X=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent
return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r,n
try{r=e.makeFromUrl(t)}catch(r){return new e(t,"")}if(""===r.path)return r
throw n=t,new p(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")},e.makeFromUrl=function(t){for(var r=null,n=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i"),o=a.replace(/[.]/g,"\\."),i=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+o+"/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:function(e){e.path_=decodeURIComponent(e.path)}}],s=0;s<i.length;s++){var u=i[s],c=u.regex.exec(t)
if(c){var l=c[u.indices.bucket],f=c[u.indices.path]
f||(f=""),r=new e(l,f),u.postModify(r)
break}}if(null==r)throw function(e){return new p(h.INVALID_URL,"Invalid URL '"+e+"'.")}(t)
return r},e}()
function V(e){var t,r
try{t=JSON.parse(e)}catch(e){return null}return D(r=t)&&!Array.isArray(r)?t:null}function K(e){var t=e.lastIndexOf("/",e.length-2)
return-1===t?e:e.slice(t+1)}function Z(e){return"https://"+a+"/v0"+e}function J(e){var t=encodeURIComponent,r="?"
for(var n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&")
return r.slice(0,-1)}function Q(e,t){return t}var $=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||Q},Y=null
function ee(e,t,r){var n=V(t)
return null===n?null:function(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i]
n[a.local]=a.xform(n,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var r=e.bucket,n=e.fullPath,o=new X(r,n)
return t.makeStorageReference(o)}})}(n,e),n}(e,n,r)}function te(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o]
i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function re(e){if(!D(e)||!e)throw"Expected Metadata object."
for(var t in e)if(e.hasOwnProperty(t)){var r=e[t]
if("customMetadata"===t){if(!D(r))throw"Expected object for 'customMetadata' mapping."}else if(M(r))throw"Mapping for '"+t+"' cannot be an object."}}var ne="maxResults",oe=1e3,ie="pageToken",ae="prefixes",se="items"
function ue(e){if(!D(e)||!e)throw"Expected ListOptions object."
for(var t in e)if(t===ne){if(!B(e[ne])||e[ne]<=0)throw"Expected maxResults to be a positive number."
if(e[ne]>1e3)throw"Expected maxResults to be less than or equal to "+oe+"."}else{if(t!==ie)throw"Unknown option: "+t
if(e[ie]&&!W(e[ie]))throw"Expected pageToken to be string."}}var ce=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}
function le(e){if(!e)throw d()}function pe(e,t){return function(r,n){var o=ee(e,n,t)
return le(null!==o),o}}function he(e){return function(t,r){var n=function(e,t){var r=V(t)
return null===r?null:function(e,t){var r={prefixes:[],items:[],nextPageToken:t.nextPageToken},n=e.bucket()
if(null===n)throw new p(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+s+"' property when initializing the app?")
if(t[ae])for(var o=0,i=t[ae];o<i.length;o++){var a=i[o].replace(/\/$/,""),u=e.makeStorageReference(new X(n,a))
r.prefixes.push(u)}if(t[se])for(var c=0,l=t[se];c<l.length;c++){var f=l[c]
u=e.makeStorageReference(new X(n,f.name)),r.items.push(u)}return r}(e,r)}(e,r)
return le(null!==n),n}}function fe(e){return function(t,r){var n,o,i
return 401===t.getStatus()?n=new p(h.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,n=new p(h.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,n=new p(h.UNAUTHORIZED,"User does not have permission to access '"+o+"'.")):n=r,n.setServerResponseProp(r.serverResponseProp()),n}}function de(e){var t=fe(e)
return function(r,n){var o,i=t(r,n)
return 404===r.getStatus()&&(o=e.path,i=new p(h.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")),i.setServerResponseProp(n.serverResponseProp()),i}}function _e(e,t,r){var n=Z(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new ce(n,"GET",pe(e,r),o)
return i.errorHandler=de(t),i}function ve(e,t,r){var n=Object.assign({},r)
return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return t&&t.type()||"application/octet-stream"}(0,t)),n}var me=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}
function be(e,t){var r=null
try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){le(!1)}return le(!!r&&-1!==(t||["active"]).indexOf(r)),r}var ye=function(e,t,r){if(L(e)||P(t)||P(r))this.next=e,this.error=t||null,this.complete=r||null
else{var n=e
this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null}},ge=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i}
function Re(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i
break}var a,s,u,c,l,f
if(!(n<=r.length&&r.length<=o))throw a=n,s=o,u=e,c=r.length,a===s?(l=a,f=1===a?"argument":"arguments"):(l="between "+a+" and "+s,f="arguments"),new p(h.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+u+"`: Expected "+l+" "+f+", received "+c+".")
for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(t){throw t instanceof Error?m(i,e,t.message):m(i,e,t)}}var we=function(e,t){var r=this
this.validator=function(t){r.optional&&!I(t)||e(t)},this.optional=!!t}
function Ee(e,t){function r(e){if(!W(e))throw"Expected string."}var n,o,i
return e?(o=r,i=e,n=function(e){o(e),i(e)}):n=r,new we(n,t)}function Te(e){return new we(re,e)}function Ue(){return new we(function(e){if(!(G(e)&&e>=0))throw"Expected a number 0 or greater."})}function Ae(e,t){return new we(function(t){if(!(null===t||P(t)&&t instanceof Object))throw"Expected an Object."
null!=e&&e(t)},t)}function Ne(e){return new we(function(e){if(null!==e&&!L(e))throw"Expected a Function."},e)}function ke(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
Promise.resolve().then(function(){return e.apply(void 0,t)})}}var Oe=function(){function e(e,t,r,n,o,i){var a=this
void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=S.RUNNING,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(h.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(S.ERROR))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(h.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(S.ERROR))},this.promise_=new Promise(function(e,t){a.resolve_=e,a.reject_=t,a.start_()}),this.promise_.then(null,function(){})}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_
return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===S.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this
this.authWrapper_.getAuthToken().then(function(r){switch(t.state_){case S.RUNNING:e(r)
break
case S.CANCELING:t.transition_(S.CANCELED)
break
case S.PAUSING:t.transition_(S.PAUSED)}})},e.prototype.createResumable_=function(){var e=this
this.resolveToken_(function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=ve(t,n,o),s={name:a.fullPath},u=Z(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=te(a,r),p=e.maxUploadRetryTime(),h=new ce(u,"POST",function(e){var t
be(e)
try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){le(!1)}return le(W(t)),t},p)
return h.urlParams=s,h.headers=c,h.body=l,h.errorHandler=fe(t),h}(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t)
e.request_=n,n.getPromise().then(function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()},e.errorHandler_)})},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_
this.resolveToken_(function(r){var n=function(e,t,r,n){var o=e.maxUploadRetryTime(),i=new ce(r,"POST",function(e){var t=be(e,["active","final"]),r=null
try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){le(!1)}r||le(!1)
var o=Number(r)
return le(!isNaN(o)),new me(o,n.size(),"final"===t)},o)
return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=fe(t),i}(e.authWrapper_,e.location_,t,e.blob_),o=e.authWrapper_.makeRequest(n,r)
e.request_=o,o.getPromise().then(function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()},e.errorHandler_)})},e.prototype.continueUpload_=function(){var e=this,t=262144*this.chunkMultiplier_,r=new me(this.transferred_,this.blob_.size()),n=this.uploadUrl_
this.resolveToken_(function(o){var i
try{i=function(e,t,r,n,o,i,a,s){var u=new me(0,0)
if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw new p(h.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")
var c=u.total-u.current,l=c
o>0&&(l=Math.min(l,o))
var f=u.current,d=f+l,_={"X-Goog-Upload-Command":l===c?"upload, finalize":"upload","X-Goog-Upload-Offset":u.current},m=n.slice(f,d)
if(null===m)throw v()
var b=t.maxUploadRetryTime(),y=new ce(r,"POST",function(e,r){var o,a=be(e,["active","final"]),s=u.current+l,c=n.size()
return o="final"===a?pe(t,i)(e,r):null,new me(s,c,"final"===a,o)},b)
return y.headers=_,y.body=m.uploadData(),y.progressCallback=s||null,y.errorHandler=fe(e),y}(e.location_,e.authWrapper_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(t){return e.error_=t,void e.transition_(S.ERROR)}var a=e.authWrapper_.makeRequest(i,o)
e.request_=a,a.getPromise().then(function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(S.SUCCESS)):e.completeTransitions_()},e.errorHandler_)})},e.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this
this.resolveToken_(function(t){var r=_e(e.authWrapper_,e.location_,e.mappings_),n=e.authWrapper_.makeRequest(r,t)
e.request_=n,n.getPromise().then(function(t){e.request_=null,e.metadata_=t,e.transition_(S.SUCCESS)},e.metadataErrorHandler_)})},e.prototype.oneShotUpload_=function(){var e=this
this.resolveToken_(function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2)
return e}()
a["Content-Type"]="multipart/related; boundary="+s
var u=ve(t,n,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+te(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",p=z.getBlob(c,n,l)
if(null===p)throw v()
var h={name:u.fullPath},f=Z(i),d=e.maxUploadRetryTime(),_=new ce(f,"POST",pe(e,r),d)
return _.urlParams=h,_.headers=a,_.body=p.uploadData(),_.errorHandler=fe(t),_}(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t)
e.request_=n,n.getPromise().then(function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(S.SUCCESS)},e.errorHandler_)})},e.prototype.updateProgress_=function(e){var t=this.transferred_
this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case S.CANCELING:case S.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel()
break
case S.RUNNING:var t=this.state_===S.PAUSED
this.state_=e,t&&(this.notifyObservers_(),this.start_())
break
case S.PAUSED:this.state_=e,this.notifyObservers_()
break
case S.CANCELED:this.error_=_(),this.state_=e,this.notifyObservers_()
break
case S.ERROR:case S.SUCCESS:this.state_=e,this.notifyObservers_()}},e.prototype.completeTransitions_=function(){switch(this.state_){case S.PAUSING:this.transition_(S.PAUSED)
break
case S.CANCELING:this.transition_(S.CANCELED)
break
case S.RUNNING:this.start_()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=x(this.state_)
return new ge(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),e.prototype.on=function(e,t,r,n){var o="Expected a function or an Object with one of `next`, `error`, `complete` properties.",i=Ne(!0).validator,a=Ae(null,!0).validator
function s(e){try{return void i(e)}catch(e){}try{if(a(e),!(I(e.next)||I(e.error)||I(e.complete)))throw""
return}catch(e){throw o}}Re("on",[Ee(function(){if(e!==O.STATE_CHANGED)throw"Expected one of the event types: ["+O.STATE_CHANGED+"]."}),Ae(s,!0),Ne(!0),Ne(!0)],arguments)
var u=this
function c(e){return function(t,r,o){null!==e&&Re("on",e,arguments)
var i=new ye(t,r,n)
return u.addObserver_(i),function(){u.removeObserver_(i)}}}var l=[Ae(function(e){if(null===e)throw o
s(e)}),Ne(!0),Ne(!0)]
return I(t)||I(r)||I(n)?c(null)(t,r,n):c(l)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this
this.finishPromise_(),this.observers_.slice().forEach(function(t){e.notifyObserver_(t)})},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0
switch(x(this.state_)){case C.SUCCESS:ke(this.resolve_.bind(null,this.snapshot))()
break
case C.CANCELED:case C.ERROR:ke(this.reject_.bind(null,this.error_))()
break
default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){switch(x(this.state_)){case C.RUNNING:case C.PAUSED:e.next&&ke(e.next.bind(e,this.snapshot))()
break
case C.SUCCESS:e.complete&&ke(e.complete.bind(e))()
break
case C.CANCELED:case C.ERROR:e.error&&ke(e.error.bind(e,this.error_))()
break
default:e.error&&ke(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){Re("resume",[],arguments)
var e=this.state_===S.PAUSED||this.state_===S.PAUSING
return e&&this.transition_(S.RUNNING),e},e.prototype.pause=function(){Re("pause",[],arguments)
var e=this.state_===S.RUNNING
return e&&this.transition_(S.PAUSING),e},e.prototype.cancel=function(){Re("cancel",[],arguments)
var e=this.state_===S.RUNNING||this.state_===S.PAUSING
return e&&this.transition_(S.CANCELING),e},e}(),Se=function(){function e(e,t){this.authWrapper=e,this.location=t instanceof X?t:X.makeFromUrl(t)}return e.prototype.toString=function(){return Re("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return function(){if(Y)return Y
var e=[]
e.push(new $("bucket")),e.push(new $("generation")),e.push(new $("metageneration")),e.push(new $("name","fullPath",!0))
var t=new $("name")
t.xform=function(e,t){return function(e){return!W(e)||e.length<2?e:K(e)}(t)},e.push(t)
var r=new $("size")
return r.xform=function(e,t){return P(t)?Number(t):t},e.push(r),e.push(new $("timeCreated")),e.push(new $("updated")),e.push(new $("md5Hash",null,!0)),e.push(new $("cacheControl",null,!0)),e.push(new $("contentDisposition",null,!0)),e.push(new $("contentEncoding",null,!0)),e.push(new $("contentLanguage",null,!0)),e.push(new $("contentType",null,!0)),e.push(new $("metadata","customMetadata",!0)),Y=e}()},e.prototype.child=function(e){Re("child",[Ee()],arguments)
var t=function(e,t){var r=t.split("/").filter(function(e){return e.length>0}).join("/")
return 0===e.length?r:e+"/"+r}(this.location.path,e),r=new X(this.location.bucket,t)
return this.newRef(this.authWrapper,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null
var t=e.lastIndexOf("/")
return-1===t?"":e.slice(0,t)}(this.location.path)
if(null===e)return null
var t=new X(this.location.bucket,e)
return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new X(this.location.bucket,"")
return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return K(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),Re("put",[new we(function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||q()&&e instanceof Blob))throw"Expected Blob or File."}),Te(!0)],arguments),this.throwIfRoot_("put"),new Oe(this,this.authWrapper,this.location,this.mappings(),new z(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=R.RAW),Re("putString",[Ee(),Ee(w,!0),Te(!0)],arguments),this.throwIfRoot_("putString")
var n=T(t,e),o=Object.assign({},r)
return!P(o.contentType)&&P(n.contentType)&&(o.contentType=n.contentType),new Oe(this,this.authWrapper,this.location,this.mappings(),new z(n.data,!0),o)},e.prototype.delete=function(){var e=this
return Re("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then(function(t){var r=function(e,t){var r=Z(t.fullServerUrl()),n=e.maxOperationRetryTime(),o=new ce(r,"DELETE",function(e,t){},n)
return o.successCodes=[200,204],o.errorHandler=de(t),o}(e.authWrapper,e.location)
return e.authWrapper.makeRequest(r,t).getPromise()})},e.prototype.listAll=function(){Re("listAll",[],arguments)
var e={prefixes:[],items:[]}
return this.listAllHelper(e).then(function(){return e})},e.prototype.listAllHelper=function(e,t){return r=this,void 0,o=function(){var r,n,o,i
return function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i
function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.")
for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o
switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i
break
case 4:return a.label++,{value:i[1],done:!1}
case 5:a.label++,n=i[1],i=[0]
continue
case 7:i=a.ops.pop(),a.trys.pop()
continue
default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0
continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1]
break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1]
return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,function(a){switch(a.label){case 0:return o={pageToken:t},[4,this.list(o)]
case 1:return i=a.sent(),(r=e.prefixes).push.apply(r,i.prefixes),(n=e.items).push.apply(n,i.items),null==i.nextPageToken?[3,3]:[4,this.listAllHelper(e,i.nextPageToken)]
case 2:a.sent(),a.label=3
case 3:return[2]}})},new((n=void 0)||(n=Promise))(function(e,t){function i(e){try{s(o.next(e))}catch(e){t(e)}}function a(e){try{s(o.throw(e))}catch(e){t(e)}}function s(t){t.done?e(t.value):new n(function(e){e(t.value)}).then(i,a)}s((o=o.apply(r,[])).next())})
var r,n,o},e.prototype.list=function(e){Re("list",[(!0,new we(ue,!0))],arguments)
var t=this
return this.authWrapper.getAuthToken().then(function(r){var n=e||{},o=function(e,t,r,n,o){var i={}
t.isRoot?i.prefix="":i.prefix=t.path+"/","/".length>0&&(i.delimiter="/"),n&&(i.pageToken=n),o&&(i.maxResults=o)
var a=Z(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime(),u=new ce(a,"GET",he(e),s)
return u.urlParams=i,u.errorHandler=fe(t),u}(t.authWrapper,t.location,0,n.pageToken,n.maxResults)
return t.authWrapper.makeRequest(o,r).getPromise()})},e.prototype.getMetadata=function(){var e=this
return Re("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then(function(t){var r=_e(e.authWrapper,e.location,e.mappings())
return e.authWrapper.makeRequest(r,t).getPromise()})},e.prototype.updateMetadata=function(e){var t=this
return Re("updateMetadata",[Te()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then(function(r){var n=function(e,t,r,n){var o=Z(t.fullServerUrl()),i=te(r,n),a=e.maxOperationRetryTime(),s=new ce(o,"PATCH",pe(e,n),a)
return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=de(t),s}(t.authWrapper,t.location,e,t.mappings())
return t.authWrapper.makeRequest(n,r).getPromise()})},e.prototype.getDownloadURL=function(){var e=this
return Re("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then(function(t){var r=function(e,t,r){var n=Z(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new ce(n,"GET",function(e,t){return function(r,n){var o=ee(e,n,t)
return le(null!==o),function(e,t){var r=V(t)
if(null===r)return null
if(!W(r.downloadTokens))return null
var n=r.downloadTokens
if(0===n.length)return null
var o=encodeURIComponent
return n.split(",").map(function(t){var r=e.bucket,n=e.fullPath
return Z("/b/"+o(r)+"/o/"+o(n))+J({alt:"media",token:t})})[0]}(o,n)}}(e,r),o)
return i.errorHandler=de(t),i}(e.authWrapper,e.location,e.mappings())
return e.authWrapper.makeRequest(r,t).getPromise().then(function(e){if(null===e)throw new p(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")
return e})})},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw function(e){return new p(h.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)},e}(),Ce=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){void 0===e&&(e=!1)},e}(),xe=function(){function e(){this.map_=new Map,this.id_=l}return e.prototype.addRequest=function(e){var t=this,r=this.id_
this.id_++,this.map_.set(r,e),e.getPromise().then(function(){return t.map_.delete(r)},function(){return t.map_.delete(r)})},e.prototype.clear=function(){this.map_.forEach(function(e){e&&e.cancel(!0)}),this.map_.clear()},e}(),Pe=function(){function e(t,r,n,o,i){if(this.bucket_=null,this.deleted_=!1,this.app_=t,null!==this.app_){var a=this.app_.options
P(a)&&(this.bucket_=e.extractBucket_(a))}this.storageRefMaker_=r,this.requestMaker_=n,this.pool_=i,this.service_=o,this.maxOperationRetryTime_=u,this.maxUploadRetryTime_=c,this.requestMap_=new xe}return e.extractBucket_=function(e){var t=e[s]||null
return null==t?null:X.makeFromBucketSpec(t).bucket},e.prototype.getAuthToken=function(){return null!==this.app_&&P(this.app_.INTERNAL)&&P(this.app_.INTERNAL.getToken)?this.app_.INTERNAL.getToken().then(function(e){return null!==e?e.accessToken:null},function(){return null}):Promise.resolve(null)},e.prototype.bucket=function(){if(this.deleted_)throw b()
return this.bucket_},e.prototype.service=function(){return this.service_},e.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},e.prototype.makeRequest=function(e,t){if(this.deleted_)return new Ce(b())
var r=this.requestMaker_(e,t,this.pool_)
return this.requestMap_.addRequest(r),r},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},e.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},e.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},e.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},e.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},e}(),Ie=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var p=this
this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise(function(e,t){p.resolve_=e,p.reject_=t,p.start_()})}return e.prototype.start_=function(){var e=this
function t(t,r){var n,o=e.resolve_,i=e.reject_,a=r.xhr
if(r.wasSuccessCode)try{var s=e.callback_(a,a.getResponseText())
I(s)?o(s):o()}catch(e){i(e)}else null!==a?((n=d()).setServerResponseProp(a.getResponseText()),e.errorCallback_?i(e.errorCallback_(a,n)):i(n)):r.canceled?i(n=e.appDelete_?b():_()):i(n=new p(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}this.canceled_?t(0,new Le(!1,null,!0)):this.backoffId_=function(e,t,r){var n=1,o=null,i=!1,a=0
function s(){return 2===a}var u=!1
function c(){u||(u=!0,t.apply(null,arguments))}function l(t){o=setTimeout(function(){o=null,e(p,s())},t)}function p(e){var t
u||(e?c.apply(null,arguments):s()||i?c.apply(null,arguments):(n<64&&(n*=2),1===a?(a=2,t=0):t=1e3*(n+Math.random()),l(t)))}var h=!1
function f(e){h||(h=!0,u||(null!==o?(e||(a=2),clearTimeout(o),l(0)):e||(a=1)))}return l(0),setTimeout(function(){i=!0,f(!0)},r),f}(function(t,r){if(r)t(!1,new Le(!1,null,!0))
else{var n=e.pool_.createXhrIo()
e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then(function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null
var n=(r=r).getErrorCode()===N.NO_ERROR,i=r.getStatus()
if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i)
t(!0,new Le(a,r))}else{var s=r.getErrorCode()===N.ABORT
t(!1,new Le(!1,null,s))}})}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1
null!==e.progressCallback_&&e.progressCallback_(r,n)}},t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e)
return t||r||n},e}(),Le=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}
function De(e,t,r){var n=J(e.urlParams),i=e.url+n,a=Object.assign({},e.headers)
return function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(a,t),function(e){var t=void 0!==o.a?o.a.SDK_VERSION:"AppManager"
e["X-Firebase-Storage-Version"]="webjs/"+t}(a),new Ie(i,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}var Me,We,Be=function(){function e(e,t,r){if(this.bucket_=null,this.authWrapper_=new Pe(e,function(e,t){return new Se(e,t)},De,this,t),this.app_=e,null!=r)this.bucket_=X.makeFromBucketSpec(r)
else{var n=this.authWrapper_.bucket()
null!=n&&(this.bucket_=new X(n,""))}this.internals_=new Ge(this)}return e.prototype.ref=function(e){if(Re("ref",[Ee(function(e){if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.")
var t=new Se(this.authWrapper_,this.bucket_)
return null!=e?t.child(e):t},e.prototype.refFromURL=function(e){return Re("refFromURL",[Ee(function(e){if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead."
try{X.makeFromUrl(e)}catch(e){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new Se(this.authWrapper_,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){Re("setMaxUploadRetryTime",[Ue()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},e.prototype.setMaxOperationRetryTime=function(e){Re("setMaxOperationRetryTime",[Ue()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),e}(),Ge=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},e}()
Me=o.a,We={TaskState:C,TaskEvent:O,StringFormat:R,Storage:Be,Reference:Se},Me.INTERNAL.registerService("storage",function(e,t,r){return new Be(e,new H,r)},We,void 0,!0)}}])
