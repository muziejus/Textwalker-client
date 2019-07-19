(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[4],{188:function(t,e,n){"use strict"
n.r(e),n(195)},195:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o,a=(i=n(63))&&"object"===r(i)&&"default"in i?i.default:i,s=n(0),u=n(65),c=n(64),h=n(196),l=a.SDK_VERSION,f=new u.Logger("@firebase/firestore")
function d(){return f.logLevel===u.LogLevel.DEBUG?o.DEBUG:f.logLevel===u.LogLevel.SILENT?o.SILENT:o.ERROR}function p(t){switch(t){case o.DEBUG:f.logLevel=u.LogLevel.DEBUG
break
case o.ERROR:f.logLevel=u.LogLevel.ERROR
break
case o.SILENT:f.logLevel=u.LogLevel.SILENT
break
default:f.error("Firestore ("+l+"): Invalid value passed to `setLogLevel`")}}function y(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
if(f.logLevel<=u.LogLevel.DEBUG){var i=n.map(g)
f.debug.apply(f,s.__spread(["Firestore ("+l+") ["+t+"]: "+e],i))}}function m(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(f.logLevel<=u.LogLevel.ERROR){var r=e.map(g)
f.error.apply(f,s.__spread(["Firestore ("+l+"): "+t],r))}}function g(t){if("string"==typeof t)return t
var e=b.getPlatform()
try{return e.formatJSON(t)}catch(e){return t}}function v(t){var e="FIRESTORE ("+l+") INTERNAL ASSERTION FAILED: "+t
throw m(e),new Error(e)}function w(t,e){t||v(e)}!function(t){t[t.DEBUG=0]="DEBUG",t[t.ERROR=1]="ERROR",t[t.SILENT=2]="SILENT"}(o||(o={}))
var b=function(){function t(){}return t.setPlatform=function(e){t.platform&&v("Platform already defined"),t.platform=e},t.getPlatform=function(){return t.platform||v("Platform not set"),t.platform},t}()
function E(){return b.getPlatform().emptyByteString}var S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},T=function(t){function e(e,n){var r=t.call(this,n)||this
return r.code=e,r.message=n,r.name="FirebaseError",r.toString=function(){return r.name+": [code="+r.code+"]: "+r.message},r}return s.__extends(e,t),e}(Error)
function I(t,e){function n(){var t="This constructor is private."
throw e&&(t+=" ",t+=e),new T(S.INVALID_ARGUMENT,t)}for(var r in n.prototype=t.prototype,t)t.hasOwnProperty(r)&&(n[r]=t[r])
return n}function C(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _(t,e){return void 0!==t?t:e}function D(t,e){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Number(n)
isNaN(r)||e(r,t[n])}}function N(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function A(t){for(var e in w(null!=t&&"object"===r(t),"isEmpty() expects object parameter."),t)if(Object.prototype.hasOwnProperty.call(t,e))return!1
return!0}function k(t,e){if(0!==e.length)throw new T(S.INVALID_ARGUMENT,"Function "+t+"() does not support arguments, but was called with "+j(e.length,"argument")+".")}function R(t,e,n){if(e.length!==n)throw new T(S.INVALID_ARGUMENT,"Function "+t+"() requires "+j(n,"argument")+", but was called with "+j(e.length,"argument")+".")}function M(t,e,n){if(e.length<n)throw new T(S.INVALID_ARGUMENT,"Function "+t+"() requires at least "+j(n,"argument")+", but was called with "+j(e.length,"argument")+".")}function x(t,e,n,r){if(e.length<n||e.length>r)throw new T(S.INVALID_ARGUMENT,"Function "+t+"() requires between "+n+" and "+r+" arguments, but was called with "+j(e.length,"argument")+".")}function O(t,e,n,r){V(t,e,W(n)+" argument",r)}function L(t,e,n,r){void 0!==r&&O(t,e,n,r)}function P(t,e,n,r){V(t,e,n+" option",r)}function q(t,e,n,r){void 0!==r&&P(t,e,n,r)}function F(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){var o,a,u=[]
try{for(var c=s.__values(i),h=c.next();!h.done;h=c.next()){var l=h.value
if(l===r)return
u.push(B(l))}}catch(t){o={error:t}}finally{try{h&&!h.done&&(a=c.return)&&a.call(c)}finally{if(o)throw o.error}}var f=B(r)
throw new T(S.INVALID_ARGUMENT,"Invalid value "+f+" provided to function "+t+'() for option "'+n+'". Acceptable values: '+u.join(", "))}(t,0,n,r,i)}function V(t,e,n,i){if(!("object"===e?U(i):"non-empty string"===e?"string"==typeof i&&""!==i:r(i)===e)){var o=B(i)
throw new T(S.INVALID_ARGUMENT,"Function "+t+"() requires its "+n+" to be of type "+e+", but it was: "+o)}}function U(t){return"object"===r(t)&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function B(t){if(void 0===t)return"undefined"
if(null===t)return"null"
if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t)
if("number"==typeof t||"boolean"==typeof t)return""+t
if("object"===r(t)){if(t instanceof Array)return"an array"
var e=function(t){if(t.constructor){var e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString())
if(e&&e.length>1)return e[1]}return null}(t)
return e?"a custom "+e+" object":"an object"}return"function"==typeof t?"a function":v("Unknown wrong type: "+r(t))}function Q(t,e,n){if(void 0===n)throw new T(S.INVALID_ARGUMENT,"Function "+t+"() requires a valid "+W(e)+" argument, but it was undefined.")}function K(t,e,n){N(e,function(e,r){if(n.indexOf(e)<0)throw new T(S.INVALID_ARGUMENT,"Unknown option '"+e+"' passed to function "+t+"(). Available options: "+n.join(", "))})}function G(t,e,n,r){var i=B(r)
return new T(S.INVALID_ARGUMENT,"Function "+t+"() requires its "+W(n)+" argument to be a "+e+", but it was: "+i)}function W(t){switch(t){case 1:return"first"
case 2:return"second"
case 3:return"third"
default:return t+"th"}}function j(t,e){return t+" "+e+(1===t?"":"s")}var z=function(){function t(){}return t.newId=function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="",n=0;n<20;n++)e+=t.charAt(Math.floor(Math.random()*t.length))
return w(20===e.length,"Invalid auto ID: "+e),e},t}()
function H(t,e){return t<e?-1:t>e?1:0}function Y(t,e){if(t.length!==e.length)return!1
for(var n=0;n<t.length;n++)if(!t[n].isEqual(e[n]))return!1
return!0}function X(t){return t+"\0"}function J(){if("undefined"==typeof Uint8Array)throw new T(S.UNIMPLEMENTED,"Uint8Arrays are not available in this environment.")}function Z(){if(!b.getPlatform().base64Available)throw new T(S.UNIMPLEMENTED,"Blobs are unavailable in Firestore in this environment.")}var $,tt=function(){function t(t){Z(),this._binaryString=t}return t.fromBase64String=function(e){R("Blob.fromBase64String",arguments,1),O("Blob.fromBase64String","string",1,e),Z()
try{return new t(b.getPlatform().atob(e))}catch(t){throw new T(S.INVALID_ARGUMENT,"Failed to construct Blob from Base64 string: "+t)}},t.fromUint8Array=function(e){if(R("Blob.fromUint8Array",arguments,1),J(),!(e instanceof Uint8Array))throw G("Blob.fromUint8Array","Uint8Array",1,e)
return new t(Array.prototype.map.call(e,function(t){return String.fromCharCode(t)}).join(""))},t.prototype.toBase64=function(){return R("Blob.toBase64",arguments,0),Z(),b.getPlatform().btoa(this._binaryString)},t.prototype.toUint8Array=function(){R("Blob.toUint8Array",arguments,0),J()
for(var t=new Uint8Array(this._binaryString.length),e=0;e<this._binaryString.length;e++)t[e]=this._binaryString.charCodeAt(e)
return t},t.prototype.toString=function(){return"Blob(base64: "+this.toBase64()+")"},t.prototype.isEqual=function(t){return this._binaryString===t._binaryString},t.prototype._compareTo=function(t){return H(this._binaryString,t._binaryString)},t}(),et=I(tt,"Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),nt=function(t,e,n,r,i){this.databaseId=t,this.persistenceKey=e,this.host=n,this.ssl=r,this.forceLongPolling=i},rt="(default)",it=function(){function t(t,e){this.projectId=t,this.database=e||rt}return Object.defineProperty(t.prototype,"isDefaultDatabase",{get:function(){return this.database===rt},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database},t.prototype.compareTo=function(t){return H(this.projectId,t.projectId)||H(this.database,t.database)},t}(),ot=function(){function t(t,e){var n=this
this.previousValue=t,e&&(e.sequenceNumberHandler=function(t){return n.setPreviousValue(t)},this.writeNewSequenceNumber=function(t){return e.writeSequenceNumber(t)})}return t.prototype.setPreviousValue=function(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue},t.prototype.next=function(){var t=++this.previousValue
return this.writeNewSequenceNumber&&this.writeNewSequenceNumber(t),t},t.INVALID=-1,t}(),at=function(){function t(t,e,n){this.init(t,e,n)}return t.prototype.init=function(t,e,n){void 0===e?e=0:e>t.length&&v("offset "+e+" out of range "+t.length),void 0===n?n=t.length-e:n>t.length-e&&v("length "+n+" out of range "+(t.length-e)),this.segments=t,this.offset=e,this.len=n},t.prototype.construct=function(t,e,n){var r=Object.create(Object.getPrototypeOf(this))
return r.init(t,e,n),r},Object.defineProperty(t.prototype,"length",{get:function(){return this.len},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(e){return 0===t.comparator(this,e)},t.prototype.child=function(e){var n=this.segments.slice(this.offset,this.limit())
return e instanceof t?e.forEach(function(t){n.push(t)}):"string"==typeof e?n.push(e):v("Unknown parameter type for Path.child(): "+e),this.construct(n)},t.prototype.limit=function(){return this.offset+this.length},t.prototype.popFirst=function(t){return t=void 0===t?1:t,w(this.length>=t,"Can't call popFirst() with less segments"),this.construct(this.segments,this.offset+t,this.length-t)},t.prototype.popLast=function(){return w(!this.isEmpty(),"Can't call popLast() on empty path"),this.construct(this.segments,this.offset,this.length-1)},t.prototype.firstSegment=function(){return w(!this.isEmpty(),"Can't call firstSegment() on empty path"),this.segments[this.offset]},t.prototype.lastSegment=function(){return this.get(this.length-1)},t.prototype.get=function(t){return w(t<this.length,"Index out of range"),this.segments[this.offset+t]},t.prototype.isEmpty=function(){return 0===this.length},t.prototype.isPrefixOf=function(t){if(t.length<this.length)return!1
for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0},t.prototype.isImmediateParentOf=function(t){if(this.length+1!==t.length)return!1
for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0},t.prototype.forEach=function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])},t.prototype.toArray=function(){return this.segments.slice(this.offset,this.limit())},t.comparator=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++){var i=t.get(r),o=e.get(r)
if(i<o)return-1
if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0},t}(),st=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.canonicalString=function(){return this.toArray().join("/")},e.prototype.toString=function(){return this.canonicalString()},e.fromString=function(t){if(t.indexOf("//")>=0)throw new T(S.INVALID_ARGUMENT,"Invalid path ("+t+"). Paths must not contain // in them.")
return new e(t.split("/").filter(function(t){return t.length>0}))},e.EMPTY_PATH=new e([]),e}(at),ut=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ct=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.isValidIdentifier=function(t){return ut.test(t)},e.prototype.canonicalString=function(){return this.toArray().map(function(t){return t=t.replace("\\","\\\\").replace("`","\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t}).join(".")},e.prototype.toString=function(){return this.canonicalString()},e.prototype.isKeyField=function(){return 1===this.length&&"__name__"===this.get(0)},e.keyField=function(){return new e(["__name__"])},e.fromServerFormat=function(t){for(var n=[],r="",i=0,o=function(){if(0===r.length)throw new T(S.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")
n.push(r),r=""},a=!1;i<t.length;){var s=t[i]
if("\\"===s){if(i+1===t.length)throw new T(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t)
var u=t[i+1]
if("\\"!==u&&"."!==u&&"`"!==u)throw new T(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t)
r+=u,i+=2}else"`"===s?(a=!a,i++):"."!==s||a?(r+=s,i++):(o(),i++)}if(o(),a)throw new T(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t)
return new e(n)},e.EMPTY_PATH=new e([]),e}(at),ht=function(){function t(e){this.path=e,w(t.isDocumentKey(e),"Invalid DocumentKey with an odd number of segments: "+e.toArray().join("/"))}return t.prototype.hasCollectionId=function(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t},t.prototype.isEqual=function(t){return null!==t&&0===st.comparator(this.path,t.path)},t.prototype.toString=function(){return this.path.toString()},t.comparator=function(t,e){return st.comparator(t.path,e.path)},t.isDocumentKey=function(t){return t.length%2==0},t.fromSegments=function(e){return new t(new st(e.slice()))},t.fromPathString=function(e){return new t(st.fromString(e))},t.EMPTY=new t(new st([])),t}(),lt=function(){var t=this
this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})}
!function(t){t.All="all",t.ListenStreamIdle="listen_stream_idle",t.ListenStreamConnectionBackoff="listen_stream_connection_backoff",t.WriteStreamIdle="write_stream_idle",t.WriteStreamConnectionBackoff="write_stream_connection_backoff",t.OnlineStateTimeout="online_state_timeout",t.ClientMetadataRefresh="client_metadata_refresh",t.LruGarbageCollection="lru_garbage_collection"}($||($={}))
var ft=function(){function t(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.catch=this.deferred.promise.catch.bind(this.deferred.promise),this.deferred.promise.catch(function(t){})}return t.createAndSchedule=function(e,n,r,i,o){var a=new t(e,n,Date.now()+r,i,o)
return a.start(r),a},t.prototype.start=function(t){var e=this
this.timerHandle=setTimeout(function(){return e.handleDelayElapsed()},t)},t.prototype.skipDelay=function(){return this.handleDelayElapsed()},t.prototype.cancel=function(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))},t.prototype.handleDelayElapsed=function(){var t=this
this.asyncQueue.enqueueAndForget(function(){return null!==t.timerHandle?(t.clearTimeout(),t.op().then(function(e){return t.deferred.resolve(e)})):Promise.resolve()})},t.prototype.clearTimeout=function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)},t}(),dt=function(){function t(){this.tail=Promise.resolve(),this.delayedOperations=[],this.operationInProgress=!1}return t.prototype.enqueueAndForget=function(t){this.enqueue(t)},t.prototype.enqueue=function(t){var e=this
this.verifyNotFailed()
var n=this.tail.then(function(){return e.operationInProgress=!0,t().catch(function(t){e.failure=t,e.operationInProgress=!1
var n=t.stack||t.message||""
throw m("INTERNAL UNHANDLED ERROR: ",n),n.indexOf("Firestore Test Simulated Error")<0&&setTimeout(function(){throw t},0),t}).then(function(t){return e.operationInProgress=!1,t})})
return this.tail=n,n},t.prototype.enqueueAfterDelay=function(t,e,n){var r=this
this.verifyNotFailed(),w(e>=0,"Attempted to schedule an operation with a negative delay of "+e),w(!this.containsDelayedOperation(t),"Attempted to schedule multiple operations with timer id "+t+".")
var i=ft.createAndSchedule(this,t,e,n,function(t){return r.removeDelayedOperation(t)})
return this.delayedOperations.push(i),i},t.prototype.verifyNotFailed=function(){this.failure&&v("AsyncQueue is already failed: "+(this.failure.stack||this.failure.message))},t.prototype.verifyOperationInProgress=function(){w(this.operationInProgress,"verifyOpInProgress() called when no op in progress on this queue.")},t.prototype.drain=function(){return this.enqueue(function(){return Promise.resolve()})},t.prototype.containsDelayedOperation=function(t){var e,n
try{for(var r=s.__values(this.delayedOperations),i=r.next();!i.done;i=r.next())if(i.value.timerId===t)return!0}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return!1},t.prototype.runDelayedOperationsEarly=function(t){var e=this
return this.drain().then(function(){var n,r
w(t===$.All||e.containsDelayedOperation(t),"Attempted to drain to missing operation "+t),e.delayedOperations.sort(function(t,e){return t.targetTimeMs-e.targetTimeMs})
try{for(var i=s.__values(e.delayedOperations),o=i.next();!o.done;o=i.next()){var a=o.value
if(a.skipDelay(),t!==$.All&&a.timerId===t)break}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return e.drain()})},t.prototype.removeDelayedOperation=function(t){var e=this.delayedOperations.indexOf(t)
w(e>=0,"Delayed operation not found."),this.delayedOperations.splice(e,1)},t}(),pt="",yt="",mt="",gt=""
function vt(t){for(var e="",n=0;n<t.length;n++)e.length>0&&(e=bt(e)),e=wt(t.get(n),e)
return bt(e)}function wt(t,e){for(var n=e,r=t.length,i=0;i<r;i++){var o=t.charAt(i)
switch(o){case"\0":n+=pt+mt
break
case pt:n+=pt+gt
break
default:n+=o}}return n}function bt(t){return t+pt+yt}function Et(t){var e=t.length
if(w(e>=2,"Invalid path "+t),2===e)return w(t.charAt(0)===pt&&t.charAt(1)===yt,"Non-empty path "+t+" had length 2"),st.EMPTY_PATH
for(var n=e-2,r=[],i="",o=0;o<e;){var a=t.indexOf(pt,o)
switch((a<0||a>n)&&v('Invalid encoded resource path: "'+t+'"'),t.charAt(a+1)){case yt:var s=t.substring(o,a),u=void 0
0===i.length?u=s:(u=i+=s,i=""),r.push(u)
break
case mt:i+=t.substring(o,a),i+="\0"
break
case gt:i+=t.substring(o,a+1)
break
default:v('Invalid encoded resource path: "'+t+'"')}o=a+2}return new st(r)}var St=function(){function t(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e)
if(e>=1e9)throw new T(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e)
if(t<-62135596800)throw new T(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)
if(t>=253402300800)throw new T(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}return t.now=function(){return t.fromMillis(Date.now())},t.fromDate=function(e){return t.fromMillis(e.getTime())},t.fromMillis=function(e){var n=Math.floor(e/1e3)
return new t(n,1e6*(e-1e3*n))},t.prototype.toDate=function(){return new Date(this.toMillis())},t.prototype.toMillis=function(){return 1e3*this.seconds+this.nanoseconds/1e6},t.prototype._compareTo=function(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)},t.prototype.isEqual=function(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds},t.prototype.toString=function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"},t}(),Tt=function(){function t(t){this.timestamp=t}return t.fromMicroseconds=function(e){var n=Math.floor(e/1e6)
return new t(new St(n,e%1e6*1e3))},t.fromTimestamp=function(e){return new t(e)},t.forDeletedDoc=function(){return t.MIN},t.prototype.compareTo=function(t){return this.timestamp._compareTo(t.timestamp)},t.prototype.isEqual=function(t){return this.timestamp.isEqual(t.timestamp)},t.prototype.toMicroseconds=function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3},t.prototype.toString=function(){return"SnapshotVersion("+this.timestamp.toString()+")"},t.prototype.toTimestamp=function(){return this.timestamp},t.MIN=new t(new St(0,0)),t}(),It=function(){function t(t,e){this.comparator=t,this.root=e||_t.EMPTY}return t.prototype.insert=function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))},t.prototype.remove=function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))},t.prototype.get=function(t){for(var e=this.root;!e.isEmpty();){var n=this.comparator(t,e.key)
if(0===n)return e.value
n<0?e=e.left:n>0&&(e=e.right)}return null},t.prototype.indexOf=function(t){for(var e=0,n=this.root;!n.isEmpty();){var r=this.comparator(t,n.key)
if(0===r)return e+n.left.size
r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1},t.prototype.isEmpty=function(){return this.root.isEmpty()},Object.defineProperty(t.prototype,"size",{get:function(){return this.root.size},enumerable:!0,configurable:!0}),t.prototype.minKey=function(){return this.root.minKey()},t.prototype.maxKey=function(){return this.root.maxKey()},t.prototype.inorderTraversal=function(t){return this.root.inorderTraversal(t)},t.prototype.forEach=function(t){this.inorderTraversal(function(e,n){return t(e,n),!1})},t.prototype.toString=function(){var t=[]
return this.inorderTraversal(function(e,n){return t.push(e+":"+n),!1}),"{"+t.join(", ")+"}"},t.prototype.reverseTraversal=function(t){return this.root.reverseTraversal(t)},t.prototype.getIterator=function(){return new Ct(this.root,null,this.comparator,!1)},t.prototype.getIteratorFrom=function(t){return new Ct(this.root,t,this.comparator,!1)},t.prototype.getReverseIterator=function(){return new Ct(this.root,null,this.comparator,!0)},t.prototype.getReverseIteratorFrom=function(t){return new Ct(this.root,t,this.comparator,!0)},t}(),Ct=function(){function t(t,e,n,r){this.isReverse=r,this.nodeStack=[]
for(var i=1;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right
else{if(0===i){this.nodeStack.push(t)
break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}return t.prototype.getNext=function(){w(this.nodeStack.length>0,"getNext() called on iterator when hasNext() is false.")
var t=this.nodeStack.pop(),e={key:t.key,value:t.value}
if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right
else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left
return e},t.prototype.hasNext=function(){return this.nodeStack.length>0},t.prototype.peek=function(){if(0===this.nodeStack.length)return null
var t=this.nodeStack[this.nodeStack.length-1]
return{key:t.key,value:t.value}},t}(),_t=function(){function t(e,n,r,i,o){this.key=e,this.value=n,this.color=null!=r?r:t.RED,this.left=null!=i?i:t.EMPTY,this.right=null!=o?o:t.EMPTY,this.size=this.left.size+1+this.right.size}return t.prototype.copy=function(e,n,r,i,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)},t.prototype.isEmpty=function(){return!1},t.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)},t.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},t.prototype.min=function(){return this.left.isEmpty()?this:this.left.min()},t.prototype.minKey=function(){return this.min().key},t.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},t.prototype.insert=function(t,e,n){var r=this,i=n(t,r.key)
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
return t+(this.isRed()?0:1)},t.EMPTY=null,t.RED=!0,t.BLACK=!1,t}(),Dt=function(){function t(){this.size=0}return t.prototype.copy=function(t,e,n,r,i){return this},t.prototype.insert=function(t,e,n){return new _t(t,e)},t.prototype.remove=function(t,e){return this},t.prototype.isEmpty=function(){return!0},t.prototype.inorderTraversal=function(t){return!1},t.prototype.reverseTraversal=function(t){return!1},t.prototype.minKey=function(){return null},t.prototype.maxKey=function(){return null},t.prototype.isRed=function(){return!1},t.prototype.checkMaxDepth=function(){return!0},t.prototype.check=function(){return 0},t}()
_t.EMPTY=new Dt
var Nt=function(){function t(t){this.comparator=t,this.data=new It(this.comparator)}return t.fromMapKeys=function(e){var n=new t(e.comparator)
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
return n.data=e,n},t}(),At=function(){function t(t){this.iter=t}return t.prototype.getNext=function(){return this.iter.getNext().key},t.prototype.hasNext=function(){return this.iter.hasNext()},t}(),kt=new It(ht.comparator)
function Rt(){return kt}function Mt(){return Rt()}var xt=new It(ht.comparator)
function Ot(){return xt}var Lt=new It(ht.comparator)
function Pt(){return Lt}var qt=new Nt(ht.comparator)
function Ft(){for(var t,e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var i=qt
try{for(var o=s.__values(n),a=o.next();!a.done;a=o.next()){var u=a.value
i=i.add(u)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return i}var Vt=new Nt(H)
function Ut(){return Vt}var Bt=function(){function t(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r,w(r.length>0,"Cannot create an empty mutation batch")}return t.prototype.applyToRemoteDocument=function(t,e,n){e&&w(e.key.isEqual(t),"applyToRemoteDocument: key "+t+" should match maybeDoc key\n        "+e.key)
var r=n.mutationResults
w(r.length===this.mutations.length,"Mismatch between mutations length\n      ("+this.mutations.length+") and mutation results length\n      ("+r.length+").")
for(var i=0;i<this.mutations.length;i++){var o=this.mutations[i]
if(o.key.isEqual(t)){var a=r[i]
e=o.applyToRemoteDocument(e,a)}}return e},t.prototype.applyToLocalView=function(t,e){var n,r,i,o
e&&w(e.key.isEqual(t),"applyToLocalDocument: key "+t+" should match maybeDoc key\n        "+e.key)
try{for(var a=s.__values(this.baseMutations),u=a.next();!u.done;u=a.next())(f=u.value).key.isEqual(t)&&(e=f.applyToLocalView(e,e,this.localWriteTime))}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}var c=e
try{for(var h=s.__values(this.mutations),l=h.next();!l.done;l=h.next()){var f;(f=l.value).key.isEqual(t)&&(e=f.applyToLocalView(e,c,this.localWriteTime))}}catch(t){i={error:t}}finally{try{l&&!l.done&&(o=h.return)&&o.call(h)}finally{if(i)throw i.error}}return e},t.prototype.applyToLocalDocumentSet=function(t){var e=this,n=t
return this.mutations.forEach(function(r){var i=e.applyToLocalView(r.key,t.get(r.key))
i&&(n=n.insert(r.key,i))}),n},t.prototype.keys=function(){return this.mutations.reduce(function(t,e){return t.add(e.key)},Ft())},t.prototype.isEqual=function(t){return this.batchId===t.batchId&&Y(this.mutations,t.mutations)&&Y(this.baseMutations,t.baseMutations)},t}(),Qt=function(){function t(t,e,n,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.streamToken=r,this.docVersions=i}return t.from=function(e,n,r,i){w(e.mutations.length===r.length,"Mutations sent "+e.mutations.length+" must equal results received "+r.length)
for(var o=Pt(),a=e.mutations,s=0;s<a.length;s++)o=o.insert(a[s].key,r[s].version)
return new t(e,n,r,i,o)},t}(),Kt=function(){function t(t){var e=this
this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(function(t){e.isDone=!0,e.result=t,e.nextCallback&&e.nextCallback(t)},function(t){e.isDone=!0,e.error=t,e.catchCallback&&e.catchCallback(t)})}return t.prototype.catch=function(t){return this.next(void 0,t)},t.prototype.next=function(e,n){var r=this
return this.callbackAttached&&v("Called next() or catch() twice for PersistencePromise"),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t(function(t,i){r.nextCallback=function(n){r.wrapSuccess(e,n).next(t,i)},r.catchCallback=function(e){r.wrapFailure(n,e).next(t,i)}})},t.prototype.toPromise=function(){var t=this
return new Promise(function(e,n){t.next(e,n)})},t.prototype.wrapUserFunction=function(e){try{var n=e()
return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}},t.prototype.wrapSuccess=function(e,n){return e?this.wrapUserFunction(function(){return e(n)}):t.resolve(n)},t.prototype.wrapFailure=function(e,n){return e?this.wrapUserFunction(function(){return e(n)}):t.reject(n)},t.resolve=function(e){return new t(function(t,n){t(e)})},t.reject=function(e){return new t(function(t,n){n(e)})},t.waitFor=function(e){return new t(function(t,n){var r=0,i=0,o=!1
e.forEach(function(e){++r,e.next(function(){++i,o&&i===r&&t()},function(t){return n(t)})}),o=!0,i===r&&t()})},t.or=function(e){var n,r,i=t.resolve(!1),o=function(e){i=i.next(function(n){return n?t.resolve(n):e()})}
try{for(var a=s.__values(e),u=a.next();!u.done;u=a.next())o(u.value)}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return i},t.forEach=function(t,e){var n=this,r=[]
return t.forEach(function(t,i){r.push(e.call(n,t,i))}),this.waitFor(r)},t}(),Gt=function(){function t(t,e,n,r){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=r,this.documentKeysByBatchId={}}return t.forUser=function(e,n,r,i){return w(""!==e.uid,"UserID must not be an empty string."),new t(e.isAuthenticated()?e.uid:"",n,r,i)},t.prototype.checkEmpty=function(t){var e=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY])
return Ht(t).iterate({index:Oe.userMutationsIndex,range:n},function(t,n,r){e=!1,r.done()}).next(function(){return e})},t.prototype.acknowledgeBatch=function(t,e,n){return this.getMutationQueueMetadata(t).next(function(e){return e.lastStreamToken=zt(n),Xt(t).put(e)})},t.prototype.getLastStreamToken=function(t){return this.getMutationQueueMetadata(t).next(function(t){return t.lastStreamToken})},t.prototype.setLastStreamToken=function(t,e){return this.getMutationQueueMetadata(t).next(function(n){return n.lastStreamToken=zt(e),Xt(t).put(n)})},t.prototype.addMutationBatch=function(t,e,n,r){var i=this,o=Yt(t),a=Ht(t)
return a.add({}).next(function(u){var c,h
w("number"==typeof u,"Auto-generated key is not a number")
var l=new Bt(u,e,n,r),f=i.serializer.toDbMutationBatch(i.userId,l)
i.documentKeysByBatchId[u]=l.keys()
var d=[]
try{for(var p=s.__values(r),y=p.next();!y.done;y=p.next()){var m=y.value,g=Le.key(i.userId,m.key.path,u)
d.push(a.put(f)),d.push(o.put(g,Le.PLACEHOLDER)),d.push(i.indexManager.addToCollectionParentIndex(t,m.key.path.popLast()))}}catch(t){c={error:t}}finally{try{y&&!y.done&&(h=p.return)&&h.call(p)}finally{if(c)throw c.error}}return Kt.waitFor(d).next(function(){return l})})},t.prototype.lookupMutationBatch=function(t,e){var n=this
return Ht(t).get(e).next(function(t){return t?(w(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+e),n.serializer.fromDbMutationBatch(t)):null})},t.prototype.lookupMutationKeys=function(t,e){var n=this
return this.documentKeysByBatchId[e]?Kt.resolve(this.documentKeysByBatchId[e]):this.lookupMutationBatch(t,e).next(function(t){if(t){var r=t.keys()
return n.documentKeysByBatchId[e]=r,r}return null})},t.prototype.getNextMutationBatchAfterBatchId=function(t,e){var n=this,r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]),o=null
return Ht(t).iterate({index:Oe.userMutationsIndex,range:i},function(t,e,i){e.userId===n.userId&&(w(e.batchId>=r,"Should have found mutation after "+r),o=n.serializer.fromDbMutationBatch(e)),i.done()}).next(function(){return o})},t.prototype.getAllMutationBatches=function(t){var e=this,n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY])
return Ht(t).loadAll(Oe.userMutationsIndex,n).next(function(t){return t.map(function(t){return e.serializer.fromDbMutationBatch(t)})})},t.prototype.getAllMutationBatchesAffectingDocumentKey=function(t,e){var n=this,r=Le.prefixForPath(this.userId,e.path),i=IDBKeyRange.lowerBound(r),o=[]
return Yt(t).iterate({range:i},function(r,i,a){var u=s.__read(r,3),c=u[0],h=u[1],l=u[2],f=Et(h)
if(c===n.userId&&e.path.isEqual(f))return Ht(t).get(l).next(function(t){if(!t)throw v("Dangling document-mutation reference found: "+r+" which points to "+l)
w(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+l),o.push(n.serializer.fromDbMutationBatch(t))})
a.done()}).next(function(){return o})},t.prototype.getAllMutationBatchesAffectingDocumentKeys=function(t,e){var n=this,r=new Nt(H),i=[]
return e.forEach(function(e){var o=Le.prefixForPath(n.userId,e.path),a=IDBKeyRange.lowerBound(o),u=Yt(t).iterate({range:a},function(t,i,o){var a=s.__read(t,3),u=a[0],c=a[1],h=a[2],l=Et(c)
u===n.userId&&e.path.isEqual(l)?r=r.add(h):o.done()})
i.push(u)}),Kt.waitFor(i).next(function(){return n.lookupMutationBatches(t,r)})},t.prototype.getAllMutationBatchesAffectingQuery=function(t,e){var n=this
w(!e.isDocumentQuery(),"Document queries shouldn't go down this path"),w(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
var r=e.path,i=r.length+1,o=Le.prefixForPath(this.userId,r),a=IDBKeyRange.lowerBound(o),u=new Nt(H)
return Yt(t).iterate({range:a},function(t,e,o){var a=s.__read(t,3),c=a[0],h=a[1],l=a[2],f=Et(h)
c===n.userId&&r.isPrefixOf(f)?f.length===i&&(u=u.add(l)):o.done()}).next(function(){return n.lookupMutationBatches(t,u)})},t.prototype.lookupMutationBatches=function(t,e){var n=this,r=[],i=[]
return e.forEach(function(e){i.push(Ht(t).get(e).next(function(t){if(null===t)throw v("Dangling document-mutation reference found, which points to "+e)
w(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+e),r.push(n.serializer.fromDbMutationBatch(t))}))}),Kt.waitFor(i).next(function(){return r})},t.prototype.removeMutationBatch=function(t,e){var n=this
return jt(t.simpleDbTransaction,this.userId,e).next(function(r){return n.removeCachedMutationKeys(e.batchId),Kt.forEach(r,function(e){return n.referenceDelegate.removeMutationReference(t,e)})})},t.prototype.removeCachedMutationKeys=function(t){delete this.documentKeysByBatchId[t]},t.prototype.performConsistencyCheck=function(t){var e=this
return this.checkEmpty(t).next(function(n){if(!n)return Kt.resolve()
var r=IDBKeyRange.lowerBound(Le.prefixForUser(e.userId)),i=[]
return Yt(t).iterate({range:r},function(t,n,r){if(t[0]===e.userId){var o=Et(t[1])
i.push(o)}else r.done()}).next(function(){w(0===i.length,"Document leak -- detected dangling mutation references when queue is empty. Dangling keys: "+i.map(function(t){return t.canonicalString()}))})})},t.prototype.containsKey=function(t,e){return Wt(t,this.userId,e)},t.prototype.getMutationQueueMetadata=function(t){var e=this
return Xt(t).get(this.userId).next(function(t){return t||new xe(e.userId,-1,"")})},t}()
function Wt(t,e,n){var r=Le.prefixForPath(e,n.path),i=r[1],o=IDBKeyRange.lowerBound(r),a=!1
return Yt(t).iterate({range:o,keysOnly:!0},function(t,n,r){var o=s.__read(t,3),u=o[0],c=o[1]
o[2],u===e&&c===i&&(a=!0),r.done()}).next(function(){return a})}function jt(t,e,n){var r,i,o=t.store(Oe.store),a=t.store(Le.store),u=[],c=IDBKeyRange.only(n.batchId),h=0,l=o.iterate({range:c},function(t,e,n){return h++,n.delete()})
u.push(l.next(function(){w(1===h,"Dangling document-mutation reference found: Missing batch "+n.batchId)}))
var f=[]
try{for(var d=s.__values(n.mutations),p=d.next();!p.done;p=d.next()){var y=p.value,m=Le.key(e,y.key.path,n.batchId)
u.push(a.delete(m)),f.push(y.key)}}catch(t){r={error:t}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}return Kt.waitFor(u).next(function(){return f})}function zt(t){return t instanceof Uint8Array?(w("YES"===process.env.USE_MOCK_PERSISTENCE,"Persisting non-string stream tokens is only supported with mock persistence."),t.toString()):t}function Ht(t){return pn.getStore(t,Oe.store)}function Yt(t){return pn.getStore(t,Le.store)}function Xt(t){return pn.getStore(t,xe.store)}var Jt,Zt=1
!function(t){t[t.QueryCache=0]="QueryCache",t[t.SyncEngine=1]="SyncEngine"}(Jt||(Jt={}))
var $t=function(){function t(t,e){this.generatorId=t,w((t&Zt)===t,"Generator ID "+t+" contains more than "+Zt+" reserved bits"),this.seek(void 0!==e?e:this.generatorId)}return t.prototype.next=function(){var t=this.nextId
return this.nextId+=1<<Zt,t},t.prototype.after=function(t){return this.seek(t+(1<<Zt)),this.next()},t.prototype.seek=function(t){w((t&Zt)===this.generatorId,"Cannot supply target ID from different generator ID"),this.nextId=t},t.forQueryCache=function(){return new t(Jt.QueryCache,2)},t.forSyncEngine=function(){return new t(Jt.SyncEngine)},t}(),te="SimpleDb",ee=function(){function t(e){this.db=e,12.2===t.getIOSVersion(c.getUA())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}return t.openOrCreate=function(e,n,r){return w(t.isAvailable(),"IndexedDB not supported in current environment."),y(te,"Opening database:",e),new Kt(function(i,o){var a=window.indexedDB.open(e,n)
a.onsuccess=function(e){var n=e.target.result
i(new t(n))},a.onblocked=function(){o(new T(S.FAILED_PRECONDITION,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=function(t){var e=t.target.error
"VersionError"===e.name?o(new T(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o(e)},a.onupgradeneeded=function(t){y(te,'Database "'+e+'" requires upgrade from version:',t.oldVersion)
var n=t.target.result,i=new re(a.transaction)
r.createOrUpgrade(n,i,t.oldVersion,Ae).next(function(){y(te,"Database upgrade to version "+Ae+" complete")})}}).toPromise()},t.delete=function(t){return y(te,"Removing database:",t),oe(window.indexedDB.deleteDatabase(t)).toPromise()},t.isAvailable=function(){if("undefined"==typeof window||null==window.indexedDB)return!1
if(void 0===window.navigator)return"YES"===process.env.USE_MOCK_PERSISTENCE
var e=c.getUA(),n=t.getIOSVersion(e),r=0<n&&n<10,i=t.getAndroidVersion(e),o=0<i&&i<4.5
return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)},t.getStore=function(t,e){return t.store(e)},t.getIOSVersion=function(t){var e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1"
return Number(n)},t.getAndroidVersion=function(t){var e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1"
return Number(n)},t.prototype.setVersionChangeListener=function(t){this.db.onversionchange=function(e){return t(e)}},t.prototype.runTransaction=function(t,e,n){var r=re.open(this.db,t,e),i=n(r).catch(function(t){return r.abort(t),Kt.reject(t)}).toPromise()
return i.catch(function(){}),r.completionPromise.then(function(){return i})},t.prototype.close=function(){this.db.close()},t}(),ne=function(){function t(t){this.dbCursor=t,this.shouldStop=!1,this.nextKey=null}return Object.defineProperty(t.prototype,"isDone",{get:function(){return this.shouldStop},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"skipToKey",{get:function(){return this.nextKey},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cursor",{set:function(t){this.dbCursor=t},enumerable:!0,configurable:!0}),t.prototype.done=function(){this.shouldStop=!0},t.prototype.skip=function(t){this.nextKey=t},t.prototype.delete=function(){return oe(this.dbCursor.delete())},t}(),re=function(){function t(t){var e=this
this.transaction=t,this.aborted=!1,this.completionDeferred=new lt,this.transaction.oncomplete=function(){e.completionDeferred.resolve()},this.transaction.onabort=function(){t.error?e.completionDeferred.reject(t.error):e.completionDeferred.resolve()},this.transaction.onerror=function(t){var n=se(t.target.error)
e.completionDeferred.reject(n)}}return t.open=function(e,n,r){return new t(e.transaction(r,n))},Object.defineProperty(t.prototype,"completionPromise",{get:function(){return this.completionDeferred.promise},enumerable:!0,configurable:!0}),t.prototype.abort=function(t){t&&this.completionDeferred.reject(t),this.aborted||(y(te,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())},t.prototype.store=function(t){var e=this.transaction.objectStore(t)
return w(!!e,"Object store not part of transaction: "+t),new ie(e)},t}(),ie=function(){function t(t){this.store=t}return t.prototype.put=function(t,e){var n
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
return new Kt(function(n,r){e.onerror=function(t){var e=se(t.target.error)
r(e)},e.onsuccess=function(e){var r=e.target.result
r?t(r.primaryKey,r.value).next(function(t){t?r.continue():n()}):n()}})},t.prototype.iterateCursor=function(t,e){var n=[]
return new Kt(function(r,i){t.onerror=function(t){i(t.target.error)},t.onsuccess=function(t){var i=t.target.result
if(i){var o=new ne(i),a=e(i.primaryKey,i.value,o)
if(a instanceof Kt){var s=a.catch(function(t){return o.done(),Kt.reject(t)})
n.push(s)}o.isDone?r():null===o.skipToKey?i.continue():i.continue(o.skipToKey)}else r()}}).next(function(){return Kt.waitFor(n)})},t.prototype.options=function(t,e){var n=void 0
return void 0!==t&&("string"==typeof t?n=t:(w(void 0===e,"3rd argument must not be defined if 2nd is a range."),e=t)),{index:n,range:e}},t.prototype.cursor=function(t){var e="next"
if(t.reverse&&(e="prev"),t.index){var n=this.store.index(t.index)
return t.keysOnly?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)},t}()
function oe(t){return new Kt(function(e,n){t.onsuccess=function(t){var n=t.target.result
e(n)},t.onerror=function(t){var e=se(t.target.error)
n(e)}})}var ae=!1
function se(t){var e=ee.getIOSVersion(c.getUA())
if(e>=12.2&&e<13){var n="An internal error was encountered in the Indexed Database server"
if(t.message.indexOf(n)>=0){var r=new T("internal","IOS_INDEXEDDB_BUG1: IndexedDb has thrown '"+n+"'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
return ae||(ae=!0,setTimeout(function(){throw r},0)),r}}return t}var ue=function(){function t(t,e){this.referenceDelegate=t,this.serializer=e,this.targetIdGenerator=$t.forQueryCache()}return t.prototype.allocateTargetId=function(t){var e=this
return this.retrieveMetadata(t).next(function(n){return n.highestTargetId=e.targetIdGenerator.after(n.highestTargetId),e.saveMetadata(t,n).next(function(){return n.highestTargetId})})},t.prototype.getLastRemoteSnapshotVersion=function(t){return this.retrieveMetadata(t).next(function(t){return Tt.fromTimestamp(new St(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))})},t.prototype.getHighestSequenceNumber=function(t){return le(t.simpleDbTransaction)},t.prototype.setTargetsMetadata=function(t,e,n){var r=this
return this.retrieveMetadata(t).next(function(i){return i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),r.saveMetadata(t,i)})},t.prototype.addQueryData=function(t,e){var n=this
return this.saveQueryData(t,e).next(function(){return n.retrieveMetadata(t).next(function(r){return r.targetCount+=1,n.updateMetadataFromQueryData(e,r),n.saveMetadata(t,r)})})},t.prototype.updateQueryData=function(t,e){return this.saveQueryData(t,e)},t.prototype.removeQueryData=function(t,e){var n=this
return this.removeMatchingKeysForTargetId(t,e.targetId).next(function(){return ce(t).delete(e.targetId)}).next(function(){return n.retrieveMetadata(t)}).next(function(e){return w(e.targetCount>0,"Removing from an empty query cache"),e.targetCount-=1,n.saveMetadata(t,e)})},t.prototype.removeTargets=function(t,e,n){var r=this,i=0,o=[]
return ce(t).iterate(function(a,s){var u=r.serializer.fromDbTarget(s)
u.sequenceNumber<=e&&void 0===n[u.targetId]&&(i++,o.push(r.removeQueryData(t,u)))}).next(function(){return Kt.waitFor(o)}).next(function(){return i})},t.prototype.forEachTarget=function(t,e){var n=this
return ce(t).iterate(function(t,r){var i=n.serializer.fromDbTarget(r)
e(i)})},t.prototype.retrieveMetadata=function(t){return he(t.simpleDbTransaction)},t.prototype.saveMetadata=function(t,e){return(n=t,pn.getStore(n,Qe.store)).put(Qe.key,e)
var n},t.prototype.saveQueryData=function(t,e){return ce(t).put(this.serializer.toDbTarget(e))},t.prototype.updateMetadataFromQueryData=function(t,e){var n=!1
return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n},t.prototype.getQueryCount=function(t){return this.retrieveMetadata(t).next(function(t){return t.targetCount})},t.prototype.getQueryData=function(t,e){var n=this,r=e.canonicalId(),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),o=null
return ce(t).iterate({range:i,index:Ue.queryTargetsIndexName},function(t,r,i){var a=n.serializer.fromDbTarget(r)
e.isEqual(a.query)&&(o=a,i.done())}).next(function(){return o})},t.prototype.addMatchingKeys=function(t,e,n){var r=this,i=[],o=fe(t)
return e.forEach(function(e){var a=vt(e.path)
i.push(o.put(new Be(n,a))),i.push(r.referenceDelegate.addReference(t,e))}),Kt.waitFor(i)},t.prototype.removeMatchingKeys=function(t,e,n){var r=this,i=fe(t)
return Kt.forEach(e,function(e){var o=vt(e.path)
return Kt.waitFor([i.delete([n,o]),r.referenceDelegate.removeReference(t,e)])})},t.prototype.removeMatchingKeysForTargetId=function(t,e){var n=fe(t),r=IDBKeyRange.bound([e],[e+1],!1,!0)
return n.delete(r)},t.prototype.getMatchingKeysForTargetId=function(t,e){var n=IDBKeyRange.bound([e],[e+1],!1,!0),r=fe(t),i=Ft()
return r.iterate({range:n,keysOnly:!0},function(t,e,n){var r=Et(t[1]),o=new ht(r)
i=i.add(o)}).next(function(){return i})},t.prototype.containsKey=function(t,e){var n=vt(e.path),r=IDBKeyRange.bound([n],[X(n)],!1,!0),i=0
return fe(t).iterate({index:Be.documentTargetsIndex,keysOnly:!0,range:r},function(t,e,n){var r=s.__read(t,2),o=r[0]
r[1],0!==o&&(i++,n.done())}).next(function(){return i>0})},t.prototype.getQueryDataForTarget=function(t,e){var n=this
return ce(t).get(e).next(function(t){return t?n.serializer.fromDbTarget(t):null})},t}()
function ce(t){return pn.getStore(t,Ue.store)}function he(t){return ee.getStore(t,Qe.store).get(Qe.key).next(function(t){return w(null!==t,"Missing metadata row."),t})}function le(t){return he(t).next(function(t){return t.highestListenSequenceNumber})}function fe(t){return pn.getStore(t,Be.store)}var de=function(){function t(t,e){this.key=t,this.version=e}return t.compareByKey=function(t,e){return ht.comparator(t.key,e.key)},t}(),pe=function(t){function e(e,n,r,i,o){var a=t.call(this,e,n)||this
return a.data=r,a.proto=o,a.hasLocalMutations=!!i.hasLocalMutations,a.hasCommittedMutations=!!i.hasCommittedMutations,a}return s.__extends(e,t),e.prototype.field=function(t){return this.data.field(t)},e.prototype.fieldValue=function(t){var e=this.field(t)
return e?e.value():void 0},e.prototype.value=function(){return this.data.value()},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.data.isEqual(t.data)&&this.hasLocalMutations===t.hasLocalMutations&&this.hasCommittedMutations===t.hasCommittedMutations},e.prototype.toString=function(){return"Document("+this.key+", "+this.version+", "+this.data.toString()+", {hasLocalMutations: "+this.hasLocalMutations+"}), {hasCommittedMutations: "+this.hasCommittedMutations+"})"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return this.hasLocalMutations||this.hasCommittedMutations},enumerable:!0,configurable:!0}),e.compareByField=function(t,e,n){var r=e.field(t),i=n.field(t)
return null!==r&&null!==i?r.compareTo(i):v("Trying to compare documents on fields that don't exist")},e}(de),ye=function(t){function e(e,n,r){var i=t.call(this,e,n)||this
return i.hasCommittedMutations=!(!r||!r.hasCommittedMutations),i}return s.__extends(e,t),e.prototype.toString=function(){return"NoDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return this.hasCommittedMutations},enumerable:!0,configurable:!0}),e.prototype.isEqual=function(t){return t instanceof e&&t.hasCommittedMutations===this.hasCommittedMutations&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},e}(de),me=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.toString=function(){return"UnknownDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return!0},enumerable:!0,configurable:!0}),e.prototype.isEqual=function(t){return t instanceof e&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},e}(de),ge=function(){function t(t){this.mapKeyFn=t,this.inner={}}return t.prototype.get=function(t){var e,n,r=this.mapKeyFn(t),i=this.inner[r]
if(void 0!==i)try{for(var o=s.__values(i),a=o.next();!a.done;a=o.next()){var u=s.__read(a.value,2),c=u[0],h=u[1]
if(c.isEqual(t))return h}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}},t.prototype.has=function(t){return void 0!==this.get(t)},t.prototype.set=function(t,e){var n=this.mapKeyFn(t),r=this.inner[n]
if(void 0!==r){for(var i=0;i<r.length;i++)if(r[i][0].isEqual(t))return void(r[i]=[t,e])
r.push([t,e])}else this.inner[n]=[[t,e]]},t.prototype.delete=function(t){var e=this.mapKeyFn(t),n=this.inner[e]
if(void 0===n)return!1
for(var r=0;r<n.length;r++)if(n[r][0].isEqual(t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0
return!1},t.prototype.forEach=function(t){N(this.inner,function(e,n){var r,i
try{for(var o=s.__values(n),a=o.next();!a.done;a=o.next()){var u=s.__read(a.value,2),c=u[0],h=u[1]
t(c,h)}}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}})},t.prototype.isEmpty=function(){return A(this.inner)},t}(),ve=function(){function t(){this.changes=Rt(),this.documentSizes=new ge(function(t){return t.toString()})}return t.prototype.addEntry=function(t){var e=this.assertChanges()
this.changes=e.insert(t.key,t)},t.prototype.getEntry=function(t,e){var n=this,r=this.assertChanges().get(e)
return r?Kt.resolve(r):this.getFromCache(t,e).next(function(t){return null===t?(n.documentSizes.set(e,0),null):(n.documentSizes.set(e,t.size),t.maybeDocument)})},t.prototype.getEntries=function(t,e){var n=this
return this.getAllFromCache(t,e).next(function(t){var e=t.maybeDocuments
return t.sizeMap.forEach(function(t,e){n.documentSizes.set(t,e)}),e})},t.prototype.apply=function(t){var e=this.applyChanges(t)
return this.changes=null,e},t.prototype.assertChanges=function(){return w(null!==this.changes,"Changes have already been applied."),this.changes},t}(),we="The remote document changelog no longer contains all changes for all local query views. It may be necessary to rebuild these views.",be=function(){function t(t,e,n){this.serializer=t,this.indexManager=e,this.keepDocumentChangeLog=n,this._lastProcessedDocumentChangeId=0}return Object.defineProperty(t.prototype,"lastProcessedDocumentChangeId",{get:function(){return this._lastProcessedDocumentChangeId},enumerable:!0,configurable:!0}),t.prototype.start=function(t){var e=ee.getStore(t,je.store)
return this.synchronizeLastDocumentChangeId(e)},t.prototype.addEntries=function(t,e,n){var r,i,o=[]
if(e.length>0){var a=Te(t),u=Ft()
try{for(var c=s.__values(e),h=c.next();!h.done;h=c.next()){var l=h.value,f=l.key,d=l.doc
o.push(a.put(Ce(f),d)),u=u.add(f),o.push(this.indexManager.addToCollectionParentIndex(t,f.path.popLast()))}}catch(t){r={error:t}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}this.keepDocumentChangeLog&&o.push(Ie(t).put({changes:this.serializer.toDbResourcePaths(u)})),o.push(this.updateSize(t,n))}return Kt.waitFor(o)},t.prototype.removeEntry=function(t,e){var n=Te(t),r=Ce(e)
return n.get(r).next(function(t){return t?n.delete(r).next(function(){return _e(t)}):Kt.resolve(0)})},t.prototype.getEntry=function(t,e){var n=this
return Te(t).get(Ce(e)).next(function(t){return t?n.serializer.fromDbRemoteDocument(t):null})},t.prototype.getSizedEntry=function(t,e){var n=this
return Te(t).get(Ce(e)).next(function(t){return t?{maybeDocument:n.serializer.fromDbRemoteDocument(t),size:_e(t)}:null})},t.prototype.getEntries=function(t,e){var n=this,r=Mt()
return this.forEachDbEntry(t,e,function(t,e){r=e?r.insert(t,n.serializer.fromDbRemoteDocument(e)):r.insert(t,null)}).next(function(){return r})},t.prototype.getSizedEntries=function(t,e){var n=this,r=Mt(),i=new It(ht.comparator)
return this.forEachDbEntry(t,e,function(t,e){e?(r=r.insert(t,n.serializer.fromDbRemoteDocument(e)),i=i.insert(t,_e(e))):(r=r.insert(t,null),i=i.insert(t,0))}).next(function(){return{maybeDocuments:r,sizeMap:i}})},t.prototype.forEachDbEntry=function(t,e,n){if(e.isEmpty())return Kt.resolve()
var r=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),i=e.getIterator(),o=i.getNext()
return Te(t).iterate({range:r},function(t,e,r){for(var a=ht.fromSegments(t);o&&ht.comparator(o,a)<0;)n(o,null),o=i.getNext()
o&&o.isEqual(a)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?r.skip(o.path.toArray()):r.done()}).next(function(){for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})},t.prototype.getDocumentsMatchingQuery=function(t,e){var n=this
w(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
var r=Ot(),i=e.path.length+1,o=e.path.toArray(),a=IDBKeyRange.lowerBound(o)
return Te(t).iterate({range:a},function(t,o,a){if(t.length===i){var s=n.serializer.fromDbRemoteDocument(o)
e.path.isPrefixOf(s.key.path)?s instanceof pe&&e.matches(s)&&(r=r.insert(s.key,s)):a.done()}}).next(function(){return r})},t.prototype.getNewDocumentChanges=function(t){var e=this
w(this.keepDocumentChangeLog,"Can only call getNewDocumentChanges() when document change log is enabled")
var n=Ft(),r=Rt(),i=IDBKeyRange.lowerBound(this._lastProcessedDocumentChangeId+1),o=!0,a=Ie(t)
return a.iterate({range:i},function(t,r){if(o&&(o=!1,e._lastProcessedDocumentChangeId+1!==r.id))return e.synchronizeLastDocumentChangeId(a).next(function(){return Kt.reject(new T(S.DATA_LOSS,we))})
n=n.unionWith(e.serializer.fromDbResourcePaths(r.changes)),e._lastProcessedDocumentChangeId=r.id}).next(function(){var i=[]
return n.forEach(function(n){i.push(e.getEntry(t,n).next(function(t){var e=t||new ye(n,Tt.forDeletedDoc())
r=r.insert(n,e)}))}),Kt.waitFor(i)}).next(function(){return r})},t.prototype.removeDocumentChangesThroughChangeId=function(t,e){var n=IDBKeyRange.upperBound(e)
return Ie(t).delete(n)},t.prototype.synchronizeLastDocumentChangeId=function(t){var e=this
return this._lastProcessedDocumentChangeId=0,t.iterate({keysOnly:!0,reverse:!0},function(t,n,r){e._lastProcessedDocumentChangeId=t,r.done()})},t.prototype.newChangeBuffer=function(){return new Se(this)},t.prototype.getSize=function(t){return this.getMetadata(t).next(function(t){return t.byteSize})},t.prototype.getMetadata=function(t){return Ee(t).get(Ve.key).next(function(t){return w(!!t,"Missing document cache metadata"),t})},t.prototype.setMetadata=function(t,e){return Ee(t).put(Ve.key,e)},t.prototype.updateSize=function(t,e){var n=this
return this.getMetadata(t).next(function(r){return r.byteSize+=e,n.setMetadata(t,r)})},t}()
function Ee(t){return pn.getStore(t,Ve.store)}var Se=function(t){function e(e){var n=t.call(this)||this
return n.documentCache=e,n}return s.__extends(e,t),e.prototype.applyChanges=function(t){var e=this,n=this.assertChanges(),r=0,i=[]
return n.forEach(function(t,n){var o=e.documentCache.serializer.toDbRemoteDocument(n),a=e.documentSizes.get(t)
w(void 0!==a,"Attempting to change document "+t.toString()+" without having read it first")
var s=_e(o)
r+=s-a,i.push({key:t,doc:o})}),this.documentCache.addEntries(t,i,r)},e.prototype.getFromCache=function(t,e){return this.documentCache.getSizedEntry(t,e)},e.prototype.getAllFromCache=function(t,e){return this.documentCache.getSizedEntries(t,e)},e}(ve)
function Te(t){return pn.getStore(t,Fe.store)}function Ie(t){return pn.getStore(t,je.store)}function Ce(t){return t.path.toArray()}function _e(t){var e
if(t.document)e=t.document
else if(t.unknownDocument)e=t.unknownDocument
else{if(!t.noDocument)throw v("Unknown remote document type")
e=t.noDocument}return JSON.stringify(e).length}var De=function(){function t(){this.collectionParentIndex=new Ne}return t.prototype.addToCollectionParentIndex=function(t,e){return this.collectionParentIndex.add(e),Kt.resolve()},t.prototype.getCollectionParents=function(t,e){return Kt.resolve(this.collectionParentIndex.getEntries(e))},t}(),Ne=function(){function t(){this.index={}}return t.prototype.add=function(t){w(t.length%2==1,"Expected a collection path.")
var e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Nt(st.comparator),i=!r.has(n)
return this.index[e]=r.add(n),i},t.prototype.getEntries=function(t){return(this.index[t]||new Nt(st.comparator)).toArray()},t}(),Ae=8,ke=function(){function t(t){this.serializer=t}return t.prototype.createOrUpgrade=function(t,e,n,r){var i=this
w(n<r&&n>=0&&r<=Ae,"Unexpected schema upgrade from v"+n+" to v{toVersion}."),n<1&&r>=1&&(function(t){t.createObjectStore(Me.store)}(t),function(t){t.createObjectStore(xe.store,{keyPath:xe.keyPath}),t.createObjectStore(Oe.store,{keyPath:Oe.keyPath,autoIncrement:!0}).createIndex(Oe.userMutationsIndex,Oe.userMutationsKeyPath,{unique:!0}),t.createObjectStore(Le.store)}(t),Ge(t),function(t){t.createObjectStore(Fe.store)}(t))
var o=Kt.resolve()
return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(Be.store),t.deleteObjectStore(Ue.store),t.deleteObjectStore(Qe.store)}(t),Ge(t)),o=o.next(function(){return function(t){var e=t.store(Qe.store),n=new Qe(0,0,Tt.MIN.toTimestamp(),0)
return e.put(Qe.key,n)}(e)})),n<4&&r>=4&&(0!==n&&(o=o.next(function(){return function(t,e){return e.store(Oe.store).loadAll().next(function(n){t.deleteObjectStore(Oe.store),t.createObjectStore(Oe.store,{keyPath:Oe.keyPath,autoIncrement:!0}).createIndex(Oe.userMutationsIndex,Oe.userMutationsKeyPath,{unique:!0})
var r=e.store(Oe.store),i=n.map(function(t){return r.put(t)})
return Kt.waitFor(i)})}(t,e)})),o=o.next(function(){!function(t){t.createObjectStore(ze.store,{keyPath:ze.keyPath})}(t),function(t){t.createObjectStore(je.store,{keyPath:"id",autoIncrement:!0})}(t)})),n<5&&r>=5&&(o=o.next(function(){return i.removeAcknowledgedMutations(e)})),n<6&&r>=6&&(o=o.next(function(){return function(t){t.createObjectStore(Ve.store)}(t),i.addDocumentGlobal(e)})),n<7&&r>=7&&(o=o.next(function(){return i.ensureSequenceNumbers(e)})),n<8&&r>=8&&(o=o.next(function(){return i.createCollectionParentIndex(t,e)})),o},t.prototype.addDocumentGlobal=function(t){var e=0
return t.store(Fe.store).iterate(function(t,n){e+=_e(n)}).next(function(){var n=new Ve(e)
return t.store(Ve.store).put(Ve.key,n)})},t.prototype.removeAcknowledgedMutations=function(t){var e=this,n=t.store(xe.store),r=t.store(Oe.store)
return n.loadAll().next(function(n){return Kt.forEach(n,function(n){var i=IDBKeyRange.bound([n.userId,-1],[n.userId,n.lastAcknowledgedBatchId])
return r.loadAll(Oe.userMutationsIndex,i).next(function(r){return Kt.forEach(r,function(r){w(r.userId===n.userId,"Cannot process batch "+r.batchId+" from unexpected user")
var i=e.serializer.fromDbMutationBatch(r)
return jt(t,n.userId,i).next(function(){})})})})})},t.prototype.ensureSequenceNumbers=function(t){var e=t.store(Be.store),n=t.store(Fe.store)
return le(t).next(function(t){var r=[]
return n.iterate(function(n,i){var o=new st(n),a=[0,vt(o)]
r.push(e.get(a).next(function(n){return n?Kt.resolve():function(n){return e.put(new Be(0,vt(n),t))}(o)}))}).next(function(){return Kt.waitFor(r)})})},t.prototype.createCollectionParentIndex=function(t,e){t.createObjectStore(Ke.store,{keyPath:Ke.keyPath})
var n=e.store(Ke.store),r=new Ne,i=function(t){if(r.add(t)){var e=t.lastSegment(),i=t.popLast()
return n.put({collectionId:e,parent:vt(i)})}}
return e.store(Fe.store).iterate({keysOnly:!0},function(t,e){var n=new st(t)
return i(n.popLast())}).next(function(){return e.store(Le.store).iterate({keysOnly:!0},function(t,e){var n=s.__read(t,3),r=(n[0],n[1]),o=(n[2],Et(r))
return i(o.popLast())})})},t}(),Re=function(t,e){this.seconds=t,this.nanoseconds=e},Me=function(){function t(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}return t.store="owner",t.key="owner",t}(),xe=function(){function t(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}return t.store="mutationQueues",t.keyPath="userId",t}(),Oe=function(){function t(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}return t.store="mutations",t.keyPath="batchId",t.userMutationsIndex="userMutationsIndex",t.userMutationsKeyPath=["userId","batchId"],t}(),Le=function(){function t(){}return t.prefixForUser=function(t){return[t]},t.prefixForPath=function(t,e){return[t,vt(e)]},t.key=function(t,e,n){return[t,vt(e),n]},t.store="documentMutations",t.PLACEHOLDER=new t,t}(),Pe=function(t,e){this.path=t,this.readTime=e},qe=function(t,e){this.path=t,this.version=e},Fe=function(){function t(t,e,n,r){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r}return t.store="remoteDocuments",t}(),Ve=function(){function t(t){this.byteSize=t}return t.store="remoteDocumentGlobal",t.key="remoteDocumentGlobalKey",t}(),Ue=function(){function t(t,e,n,r,i,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.query=o}return t.store="targets",t.keyPath="targetId",t.queryTargetsIndexName="queryTargetsIndex",t.queryTargetsKeyPath=["canonicalId","targetId"],t}(),Be=function(){function t(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n,w(0===t==(void 0!==n),"A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number")}return t.store="targetDocuments",t.keyPath=["targetId","path"],t.documentTargetsIndex="documentTargetsIndex",t.documentTargetsKeyPath=["path","targetId"],t}(),Qe=function(){function t(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}return t.key="targetGlobalKey",t.store="targetGlobal",t}(),Ke=function(){function t(t,e){this.collectionId=t,this.parent=e}return t.store="collectionParents",t.keyPath=["collectionId","parent"],t}()
function Ge(t){t.createObjectStore(Be.store,{keyPath:Be.keyPath}).createIndex(Be.documentTargetsIndex,Be.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Ue.store,{keyPath:Ue.keyPath}).createIndex(Ue.queryTargetsIndexName,Ue.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Qe.store)}var We,je=function(){function t(t){this.changes=t}return t.store="remoteDocumentChanges",t.keyPath="id",t}(),ze=function(){function t(t,e,n,r,i){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r,this.lastProcessedDocumentChangeId=i}return t.store="clientMetadata",t.keyPath="clientId",t}(),He=[xe.store,Oe.store,Le.store,Fe.store,Ue.store,Me.store,Qe.store,Be.store],Ye=s.__spread(He,[ze.store,je.store]),Xe=s.__spread(Ye,[Ve.store]),Je=s.__spread(Xe,[Ke.store]),Ze=function(){function t(){this.collectionParentsCache=new Ne}return t.prototype.addToCollectionParentIndex=function(t,e){if(w(e.length%2==1,"Expected a collection path."),this.collectionParentsCache.add(e)){w(e.length>=1,"Invalid collection path.")
var n=e.lastSegment(),r=e.popLast()
return $e(t).put({collectionId:n,parent:vt(r)})}return Kt.resolve()},t.prototype.getCollectionParents=function(t,e){var n=[],r=IDBKeyRange.bound([e,""],[X(e),""],!1,!0)
return $e(t).loadAll(r).next(function(t){var r,i
try{for(var o=s.__values(t),a=o.next();!a.done;a=o.next()){var u=a.value
if(u.collectionId!==e)break
n.push(Et(u.parent))}}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return n})},t}()
function $e(t){return pn.getStore(t,Ke.store)}!function(t){t[t.Listen=0]="Listen",t[t.ExistenceFilterMismatch=1]="ExistenceFilterMismatch",t[t.LimboResolution=2]="LimboResolution"}(We||(We={}))
var tn=function(){function t(t,e,n,r,i,o){void 0===i&&(i=Tt.MIN),void 0===o&&(o=E()),this.query=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.resumeToken=o}return t.prototype.copy=function(e){return new t(this.query,this.targetId,this.purpose,void 0===e.sequenceNumber?this.sequenceNumber:e.sequenceNumber,void 0===e.snapshotVersion?this.snapshotVersion:e.snapshotVersion,void 0===e.resumeToken?this.resumeToken:e.resumeToken)},t.prototype.isEqual=function(t){return this.targetId===t.targetId&&this.purpose===t.purpose&&this.sequenceNumber===t.sequenceNumber&&this.snapshotVersion.isEqual(t.snapshotVersion)&&this.resumeToken===t.resumeToken&&this.query.isEqual(t.query)},t}(),en=function(){function t(t){this.remoteSerializer=t}return t.prototype.fromDbRemoteDocument=function(t){if(t.document)return this.remoteSerializer.fromDocument(t.document,!!t.hasCommittedMutations)
if(t.noDocument){var e=ht.fromSegments(t.noDocument.path),n=this.fromDbTimestamp(t.noDocument.readTime)
return new ye(e,n,{hasCommittedMutations:!!t.hasCommittedMutations})}return t.unknownDocument?(e=ht.fromSegments(t.unknownDocument.path),n=this.fromDbTimestamp(t.unknownDocument.version),new me(e,n)):v("Unexpected DbRemoteDocument")},t.prototype.toDbRemoteDocument=function(t){if(t instanceof pe){var e=t.proto?t.proto:this.remoteSerializer.toDocument(t),n=t.hasCommittedMutations
return new Fe(null,null,e,n)}if(t instanceof ye){var r=t.key.path.toArray(),i=this.toDbTimestamp(t.version)
return n=t.hasCommittedMutations,new Fe(null,new Pe(r,i),null,n)}return t instanceof me?(r=t.key.path.toArray(),i=this.toDbTimestamp(t.version),new Fe(new qe(r,i),null,null,!0)):v("Unexpected MaybeDocumment")},t.prototype.toDbTimestamp=function(t){var e=t.toTimestamp()
return new Re(e.seconds,e.nanoseconds)},t.prototype.fromDbTimestamp=function(t){var e=new St(t.seconds,t.nanoseconds)
return Tt.fromTimestamp(e)},t.prototype.toDbMutationBatch=function(t,e){var n=this,r=e.baseMutations.map(function(t){return n.remoteSerializer.toMutation(t)}),i=e.mutations.map(function(t){return n.remoteSerializer.toMutation(t)})
return new Oe(t,e.batchId,e.localWriteTime.toMillis(),r,i)},t.prototype.fromDbMutationBatch=function(t){var e=this,n=(t.baseMutations||[]).map(function(t){return e.remoteSerializer.fromMutation(t)}),r=t.mutations.map(function(t){return e.remoteSerializer.fromMutation(t)}),i=St.fromMillis(t.localWriteTimeMs)
return new Bt(t.batchId,i,n,r)},t.prototype.toDbResourcePaths=function(t){var e=[]
return t.forEach(function(t){e.push(vt(t.path))}),e},t.prototype.fromDbResourcePaths=function(t){var e,n,r=Ft()
try{for(var i=s.__values(t),o=i.next();!o.done;o=i.next()){var a=o.value
r=r.add(new ht(Et(a)))}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r},t.prototype.fromDbTarget=function(t){var e,n=this.fromDbTimestamp(t.readTime)
return e=void 0!==t.query.documents?this.remoteSerializer.fromDocumentsTarget(t.query):this.remoteSerializer.fromQueryTarget(t.query),new tn(e,t.targetId,We.Listen,t.lastListenSequenceNumber,n,t.resumeToken)},t.prototype.toDbTarget=function(t){w(We.Listen===t.purpose,"Only queries with purpose "+We.Listen+" may be stored, got "+t.purpose)
var e,n,r=this.toDbTimestamp(t.snapshotVersion)
return e=t.query.isDocumentQuery()?this.remoteSerializer.toDocumentsTarget(t.query):this.remoteSerializer.toQueryTarget(t.query),t.resumeToken instanceof Uint8Array?(w("YES"===process.env.USE_MOCK_PERSISTENCE,"Persisting non-string stream tokens is only supported with mock persistence ."),n=t.resumeToken.toString()):n=t.resumeToken,new Ue(t.targetId,t.query.canonicalId(),r,n,t.sequenceNumber,e)},t}()
function nn(t,e){var n=s.__read(t,2),r=n[0],i=n[1],o=s.__read(e,2),a=o[0],u=o[1],c=H(r,a)
return 0===c?H(i,u):c}var rn=function(){function t(t){this.maxElements=t,this.buffer=new Nt(nn),this.previousIndex=0}return t.prototype.nextIndex=function(){return++this.previousIndex},t.prototype.addElement=function(t){var e=[t,this.nextIndex()]
if(this.buffer.size<this.maxElements)this.buffer=this.buffer.add(e)
else{var n=this.buffer.last()
nn(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}},Object.defineProperty(t.prototype,"maxValue",{get:function(){return this.buffer.last()[0]},enumerable:!0,configurable:!0}),t}(),on={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},an=function(){function t(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}return t.withCacheSize=function(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)},t.COLLECTION_DISABLED=-1,t.MINIMUM_CACHE_SIZE_BYTES=1048576,t.DEFAULT_CACHE_SIZE_BYTES=41943040,t.DEFAULT_COLLECTION_PERCENTILE=10,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,t.DEFAULT=new t(t.DEFAULT_CACHE_SIZE_BYTES,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),t.DISABLED=new t(t.COLLECTION_DISABLED,0,0),t}(),sn=function(){function t(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.gcTask=null}return t.prototype.start=function(){w(null===this.gcTask,"Cannot start an already started LruScheduler"),this.garbageCollector.params.cacheSizeCollectionThreshold!==an.COLLECTION_DISABLED&&this.scheduleGC()},t.prototype.stop=function(){this.gcTask&&(this.gcTask.cancel(),this.gcTask=null)},Object.defineProperty(t.prototype,"started",{get:function(){return null!==this.gcTask},enumerable:!0,configurable:!0}),t.prototype.scheduleGC=function(){var t=this
w(null===this.gcTask,"Cannot schedule GC while a task is pending")
var e=this.hasRun?3e5:6e4
y("LruGarbageCollector","Garbage collection scheduled in "+e+"ms"),this.gcTask=this.asyncQueue.enqueueAfterDelay($.LruGarbageCollection,e,function(){return t.gcTask=null,t.hasRun=!0,t.localStore.collectGarbage(t.garbageCollector).then(function(){return t.scheduleGC()}).catch(yn)})},t}(),un=function(){function t(t,e){this.delegate=t,this.params=e}return t.prototype.calculateTargetCount=function(t,e){return this.delegate.getSequenceNumberCount(t).next(function(t){return Math.floor(e/100*t)})},t.prototype.nthSequenceNumber=function(t,e){var n=this
if(0===e)return Kt.resolve(ot.INVALID)
var r=new rn(e)
return this.delegate.forEachTarget(t,function(t){return r.addElement(t.sequenceNumber)}).next(function(){return n.delegate.forEachOrphanedDocumentSequenceNumber(t,function(t){return r.addElement(t)})}).next(function(){return r.maxValue})},t.prototype.removeTargets=function(t,e,n){return this.delegate.removeTargets(t,e,n)},t.prototype.removeOrphanedDocuments=function(t,e){return this.delegate.removeOrphanedDocuments(t,e)},t.prototype.collect=function(t,e){var n=this
return this.params.cacheSizeCollectionThreshold===an.COLLECTION_DISABLED?(y("LruGarbageCollector","Garbage collection skipped; disabled"),Kt.resolve(on)):this.getCacheSize(t).next(function(r){return r<n.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector","Garbage collection skipped; Cache size "+r+" is lower than threshold "+n.params.cacheSizeCollectionThreshold),on):n.runGarbageCollection(t,e)})},t.prototype.getCacheSize=function(t){return this.delegate.getCacheSize(t)},t.prototype.runGarbageCollection=function(t,e){var n,r,i,a,s,u,c,h=this,l=Date.now()
return this.calculateTargetCount(t,this.params.percentileToCollect).next(function(e){return e>h.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of "+h.params.maximumSequenceNumbersToCollect+" from "+e),r=h.params.maximumSequenceNumbersToCollect):r=e,a=Date.now(),h.nthSequenceNumber(t,r)}).next(function(r){return n=r,s=Date.now(),h.removeTargets(t,n,e)}).next(function(e){return i=e,u=Date.now(),h.removeOrphanedDocuments(t,n)}).next(function(t){return c=Date.now(),d()<=o.DEBUG&&y("LruGarbageCollector","LRU Garbage Collection\n\tCounted targets in "+(a-l)+"ms\n\tDetermined least recently used "+r+" in "+(s-a)+"ms\n\tRemoved "+i+" targets in "+(u-s)+"ms\n\tRemoved "+t+" documents in "+(c-u)+"ms\nTotal Duration: "+(c-l)+"ms"),Kt.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})})},t}(),cn="IndexedDbPersistence",hn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ln="Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",fn="This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.",dn=function(t){function e(e,n){var r=t.call(this)||this
return r.simpleDbTransaction=e,r.currentSequenceNumber=n,r}return s.__extends(e,t),e}(function(){}),pn=function(){function t(e,n,r,i,o,a,s){if(this.persistenceKey=e,this.clientId=n,this.queue=i,this.multiClientParams=s,this._started=!1,this.isPrimary=!1,this.networkEnabled=!0,this.inForeground=!1,this.lastGarbageCollectionTime=Number.NEGATIVE_INFINITY,this.primaryStateListener=function(t){return Promise.resolve()},!t.isAvailable())throw new T(S.UNIMPLEMENTED,fn)
if(this.referenceDelegate=new bn(this,a),this.dbName=e+t.MAIN_DATABASE,this.serializer=new en(o),this.document=r.document,this.allowTabSynchronization=void 0!==s,this.queryCache=new ue(this.referenceDelegate,this.serializer),this.indexManager=new Ze,this.remoteDocumentCache=new be(this.serializer,this.indexManager,this.allowTabSynchronization),!r.window||!r.window.localStorage)throw new T(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.")
this.window=r.window,this.webStorage=this.window.localStorage}return t.getStore=function(t,e){if(t instanceof dn)return ee.getStore(t.simpleDbTransaction,e)
throw v("IndexedDbPersistence must use instances of IndexedDbTransaction")},t.createIndexedDbPersistence=function(e,n,r,i,o,a){return s.__awaiter(this,void 0,void 0,function(){var u
return s.__generator(this,function(s){switch(s.label){case 0:return[4,(u=new t(e,n,r,i,o,a)).start()]
case 1:return s.sent(),[2,u]}})})},t.createMultiClientIndexedDbPersistence=function(e,n,r,i,o,a,u){return s.__awaiter(this,void 0,void 0,function(){var c
return s.__generator(this,function(s){switch(s.label){case 0:return[4,(c=new t(e,n,r,i,o,a,u)).start()]
case 1:return s.sent(),[2,c]}})})},t.prototype.start=function(){var t=this
return w(!this.started,"IndexedDbPersistence double-started!"),w(null!==this.window,"Expected 'window' to be defined"),ee.openOrCreate(this.dbName,Ae,new ke(this.serializer)).then(function(e){return t.simpleDb=e,t.updateClientMetadataAndTryBecomePrimary()}).then(function(){return t.attachVisibilityHandler(),t.attachWindowUnloadHook(),t.scheduleClientMetadataAndPrimaryLeaseRefreshes(),t.startRemoteDocumentCache()}).then(function(){return t.simpleDb.runTransaction("readonly",[Qe.store],function(e){return le(e).next(function(e){var n=t.multiClientParams?t.multiClientParams.sequenceNumberSyncer:void 0
t.listenSequence=new ot(e,n)})})}).then(function(){t._started=!0}).catch(function(e){return t.simpleDb&&t.simpleDb.close(),Promise.reject(e)})},t.prototype.startRemoteDocumentCache=function(){var t=this
return this.simpleDb.runTransaction("readonly",Je,function(e){return t.remoteDocumentCache.start(e)})},t.prototype.setPrimaryStateListener=function(t){var e=this
return this.primaryStateListener=function(n){return s.__awaiter(e,void 0,void 0,function(){return s.__generator(this,function(e){return this.started?[2,t(n)]:[2]})})},t(this.isPrimary)},t.prototype.setDatabaseDeletedListener=function(t){var e=this
this.simpleDb.setVersionChangeListener(function(n){return s.__awaiter(e,void 0,void 0,function(){return s.__generator(this,function(e){switch(e.label){case 0:return null!==n.newVersion?[3,2]:[4,t()]
case 1:e.sent(),e.label=2
case 2:return[2]}})})})},t.prototype.setNetworkEnabled=function(t){var e=this
this.networkEnabled!==t&&(this.networkEnabled=t,this.queue.enqueueAndForget(function(){return s.__awaiter(e,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.started?[4,this.updateClientMetadataAndTryBecomePrimary()]:[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})}))},t.prototype.updateClientMetadataAndTryBecomePrimary=function(){var t=this
return this.simpleDb.runTransaction("readwrite",Je,function(e){return gn(e).put(new ze(t.clientId,Date.now(),t.networkEnabled,t.inForeground,t.remoteDocumentCache.lastProcessedDocumentChangeId)).next(function(){if(t.isPrimary)return t.verifyPrimaryLease(e).next(function(e){e||(t.isPrimary=!1,t.queue.enqueueAndForget(function(){return t.primaryStateListener(!1)}))})}).next(function(){return t.canActAsPrimary(e)}).next(function(n){var r=t.isPrimary
return t.isPrimary=n,r!==t.isPrimary&&t.queue.enqueueAndForget(function(){return t.primaryStateListener(t.isPrimary)}),r&&!t.isPrimary?t.releasePrimaryLeaseIfHeld(e):t.isPrimary?t.acquireOrExtendPrimaryLease(e):void 0})})},t.prototype.verifyPrimaryLease=function(t){var e=this
return mn(t).get(Me.key).next(function(t){return Kt.resolve(e.isLocalClient(t))})},t.prototype.removeClientMetadata=function(t){return gn(t).delete(this.clientId)},t.prototype.maybeGarbageCollectMultiClientState=function(){return s.__awaiter(this,void 0,void 0,function(){var e,n,r=this
return s.__generator(this,function(i){switch(i.label){case 0:return!this.isPrimary||this.isWithinAge(this.lastGarbageCollectionTime,18e5)?[3,2]:(this.lastGarbageCollectionTime=Date.now(),n=[],[4,this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",function(i){var o=t.getStore(i,ze.store)
return o.loadAll().next(function(t){e=r.filterActiveClients(t,18e5),n=t.filter(function(t){return-1===e.indexOf(t)})}).next(function(){return Kt.forEach(n,function(t){return o.delete(t.clientId)})}).next(function(){if((e=e.filter(function(t){return t.clientId!==r.clientId})).length>0){var t=e.map(function(t){return t.lastProcessedDocumentChangeId||0}),n=Math.min.apply(Math,s.__spread(t))
return r.remoteDocumentCache.removeDocumentChangesThroughChangeId(i,n)}})})])
case 1:i.sent(),n.forEach(function(t){r.window.localStorage.removeItem(r.zombiedClientLocalStorageKey(t.clientId))}),i.label=2
case 2:return[2]}})})},t.prototype.scheduleClientMetadataAndPrimaryLeaseRefreshes=function(){var t=this
this.clientMetadataRefresher=this.queue.enqueueAfterDelay($.ClientMetadataRefresh,4e3,function(){return t.updateClientMetadataAndTryBecomePrimary().then(function(){return t.maybeGarbageCollectMultiClientState()}).then(function(){return t.scheduleClientMetadataAndPrimaryLeaseRefreshes()})})},t.prototype.isLocalClient=function(t){return!!t&&t.ownerId===this.clientId},t.prototype.canActAsPrimary=function(t){var e=this
return mn(t).get(Me.key).next(function(n){if(null!==n&&e.isWithinAge(n.leaseTimestampMs,5e3)&&!e.isClientZombied(n.ownerId)){if(e.isLocalClient(n)&&e.networkEnabled)return!0
if(!e.isLocalClient(n)){if(!n.allowTabSynchronization)throw new T(S.FAILED_PRECONDITION,ln)
return!1}}return!(!e.networkEnabled||!e.inForeground)||gn(t).loadAll().next(function(t){return void 0===e.filterActiveClients(t,5e3).find(function(t){if(e.clientId!==t.clientId){var n=!e.networkEnabled&&t.networkEnabled,r=!e.inForeground&&t.inForeground,i=e.networkEnabled===t.networkEnabled
if(n||r&&i)return!0}return!1})})}).next(function(t){return e.isPrimary!==t&&y(cn,"Client "+(t?"is":"is not")+" eligible for a primary lease."),t})},t.prototype.shutdown=function(){return s.__awaiter(this,void 0,void 0,function(){var t=this
return s.__generator(this,function(e){switch(e.label){case 0:return this._started=!1,this.markClientZombied(),this.clientMetadataRefresher&&this.clientMetadataRefresher.cancel(),this.detachVisibilityHandler(),this.detachWindowUnloadHook(),[4,this.simpleDb.runTransaction("readwrite",[Me.store,ze.store],function(e){return t.releasePrimaryLeaseIfHeld(e).next(function(){return t.removeClientMetadata(e)})})]
case 1:return e.sent(),this.simpleDb.close(),this.removeClientZombiedEntry(),[2]}})})},t.prototype.filterActiveClients=function(t,e){var n=this
return t.filter(function(t){return n.isWithinAge(t.updateTimeMs,e)&&!n.isClientZombied(t.clientId)})},t.prototype.getActiveClients=function(){var t=this
return this.simpleDb.runTransaction("readonly",[ze.store],function(e){return gn(e).loadAll().next(function(e){return t.filterActiveClients(e,18e5).map(function(t){return t.clientId})})})},t.clearPersistence=function(e){return s.__awaiter(this,void 0,void 0,function(){var n
return s.__generator(this,function(r){switch(r.label){case 0:return t.isAvailable()?(n=e+t.MAIN_DATABASE,[4,ee.delete(n)]):[2,Promise.resolve()]
case 1:return r.sent(),[2]}})})},Object.defineProperty(t.prototype,"started",{get:function(){return this._started},enumerable:!0,configurable:!0}),t.prototype.getMutationQueue=function(t){return w(this.started,"Cannot initialize MutationQueue before persistence is started."),Gt.forUser(t,this.serializer,this.indexManager,this.referenceDelegate)},t.prototype.getQueryCache=function(){return w(this.started,"Cannot initialize QueryCache before persistence is started."),this.queryCache},t.prototype.getRemoteDocumentCache=function(){return w(this.started,"Cannot initialize RemoteDocumentCache before persistence is started."),this.remoteDocumentCache},t.prototype.getIndexManager=function(){return w(this.started,"Cannot initialize IndexManager before persistence is started."),this.indexManager},t.prototype.runTransaction=function(t,e,n){var r=this
return y(cn,"Starting transaction:",t),this.simpleDb.runTransaction("readonly"===e?"readonly":"readwrite",Je,function(i){return"readwrite-primary"===e?r.verifyPrimaryLease(i).next(function(e){if(!e)throw m("Failed to obtain primary lease for action '"+t+"'."),r.isPrimary=!1,r.queue.enqueueAndForget(function(){return r.primaryStateListener(!1)}),new T(S.FAILED_PRECONDITION,hn)
return n(new dn(i,r.listenSequence.next()))}).next(function(t){return r.acquireOrExtendPrimaryLease(i).next(function(){return t})}):r.verifyAllowTabSynchronization(i).next(function(){return n(new dn(i,r.listenSequence.next()))})})},t.prototype.verifyAllowTabSynchronization=function(t){var e=this
return mn(t).get(Me.key).next(function(t){if(null!==t&&e.isWithinAge(t.leaseTimestampMs,5e3)&&!e.isClientZombied(t.ownerId)&&!e.isLocalClient(t)&&!t.allowTabSynchronization)throw new T(S.FAILED_PRECONDITION,ln)})},t.prototype.acquireOrExtendPrimaryLease=function(t){var e=new Me(this.clientId,this.allowTabSynchronization,Date.now())
return mn(t).put(Me.key,e)},t.isAvailable=function(){return ee.isAvailable()},t.buildStoragePrefix=function(t){var e=t.databaseId.projectId
return t.databaseId.isDefaultDatabase||(e+="."+t.databaseId.database),"firestore/"+t.persistenceKey+"/"+e+"/"},t.prototype.releasePrimaryLeaseIfHeld=function(t){var e=this,n=mn(t)
return n.get(Me.key).next(function(t){return e.isLocalClient(t)?(y(cn,"Releasing primary lease."),n.delete(Me.key)):Kt.resolve()})},t.prototype.isWithinAge=function(t,e){var n=Date.now()
return!(t<n-e||t>n&&(m("Detected an update time that is in the future: "+t+" > "+n),1))},t.prototype.attachVisibilityHandler=function(){var t=this
null!==this.document&&"function"==typeof this.document.addEventListener&&(this.documentVisibilityHandler=function(){t.queue.enqueueAndForget(function(){return t.inForeground="visible"===t.document.visibilityState,t.updateClientMetadataAndTryBecomePrimary()})},this.document.addEventListener("visibilitychange",this.documentVisibilityHandler),this.inForeground="visible"===this.document.visibilityState)},t.prototype.detachVisibilityHandler=function(){this.documentVisibilityHandler&&(w(null!==this.document&&"function"==typeof this.document.addEventListener,"Expected 'document.addEventListener' to be a function"),this.document.removeEventListener("visibilitychange",this.documentVisibilityHandler),this.documentVisibilityHandler=null)},t.prototype.attachWindowUnloadHook=function(){var t=this
"function"==typeof this.window.addEventListener&&(this.windowUnloadHandler=function(){t.markClientZombied(),t.queue.enqueueAndForget(function(){return t.shutdown()})},this.window.addEventListener("unload",this.windowUnloadHandler))},t.prototype.detachWindowUnloadHook=function(){this.windowUnloadHandler&&(w("function"==typeof this.window.removeEventListener,"Expected 'window.removeEventListener' to be a function"),this.window.removeEventListener("unload",this.windowUnloadHandler),this.windowUnloadHandler=null)},t.prototype.isClientZombied=function(t){try{var e=null!==this.webStorage.getItem(this.zombiedClientLocalStorageKey(t))
return y(cn,"Client '"+t+"' "+(e?"is":"is not")+" zombied in LocalStorage"),e}catch(t){return m(cn,"Failed to get zombied client id.",t),!1}},t.prototype.markClientZombied=function(){try{this.webStorage.setItem(this.zombiedClientLocalStorageKey(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}},t.prototype.removeClientZombiedEntry=function(){try{this.webStorage.removeItem(this.zombiedClientLocalStorageKey(this.clientId))}catch(t){}},t.prototype.zombiedClientLocalStorageKey=function(t){return"firestore_zombie_"+this.persistenceKey+"_"+t},t.MAIN_DATABASE="main",t}()
function yn(t){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){if(!function(t){return t.code===S.FAILED_PRECONDITION&&t.message===hn}(t))throw t
return y(cn,"Unexpectedly lost primary lease"),[2]})})}function mn(t){return t.store(Me.store)}function gn(t){return t.store(ze.store)}var vn,wn,bn=function(){function t(t,e){this.db=t,this.garbageCollector=new un(this,e)}return t.prototype.getSequenceNumberCount=function(t){var e=this.orphanedDocmentCount(t)
return this.db.getQueryCache().getQueryCount(t).next(function(t){return e.next(function(e){return t+e})})},t.prototype.orphanedDocmentCount=function(t){var e=0
return this.forEachOrphanedDocumentSequenceNumber(t,function(t){e++}).next(function(){return e})},t.prototype.forEachTarget=function(t,e){return this.db.getQueryCache().forEachTarget(t,e)},t.prototype.forEachOrphanedDocumentSequenceNumber=function(t,e){return this.forEachOrphanedDocument(t,function(t,n){return e(n)})},t.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},t.prototype.addReference=function(t,e){return En(t,e)},t.prototype.removeReference=function(t,e){return En(t,e)},t.prototype.removeTargets=function(t,e,n){return this.db.getQueryCache().removeTargets(t,e,n)},t.prototype.removeMutationReference=function(t,e){return En(t,e)},t.prototype.isPinned=function(t,e){return this.inMemoryPins.containsKey(e)?Kt.resolve(!0):function(t,e){var n=!1
return Xt(t).iterateSerial(function(r){return Wt(t,r,e).next(function(t){return t&&(n=!0),Kt.resolve(!t)})}).next(function(){return n})}(t,e)},t.prototype.removeOrphanedDocuments=function(t,e){var n=this,r=0,i=0,o=[]
return this.forEachOrphanedDocument(t,function(a,s){if(s<=e){var u=n.isPinned(t,a).next(function(e){if(!e)return r++,n.removeOrphanedDocument(t,a).next(function(t){i+=t})})
o.push(u)}}).next(function(){return Kt.waitFor(o)}).next(function(){return n.db.getRemoteDocumentCache().updateSize(t,-i)}).next(function(){return r})},t.prototype.removeOrphanedDocument=function(t,e){var n,r=0,i=this.db.getRemoteDocumentCache()
return Kt.waitFor([fe(t).delete((n=e,[0,vt(n.path)])),i.removeEntry(t,e).next(function(t){r+=t})]).next(function(){return r})},t.prototype.removeTarget=function(t,e){var n=e.copy({sequenceNumber:t.currentSequenceNumber})
return this.db.getQueryCache().updateQueryData(t,n)},t.prototype.updateLimboDocument=function(t,e){return En(t,e)},t.prototype.forEachOrphanedDocument=function(t,e){var n,r=fe(t),i=ot.INVALID
return r.iterate({index:Be.documentTargetsIndex},function(t,r){var o=s.__read(t,2),a=o[0],u=(o[1],r.path),c=r.sequenceNumber
0===a?(i!==ot.INVALID&&e(new ht(Et(n)),i),i=c,n=u):i=ot.INVALID}).next(function(){i!==ot.INVALID&&e(new ht(Et(n)),i)})},t.prototype.getCacheSize=function(t){return this.db.getRemoteDocumentCache().getSize(t)},t}()
function En(t,e){return fe(t).put(function(t,e){return new Be(0,vt(t.path),e)}(e,t.currentSequenceNumber))}!function(t){t[t.NullValue=0]="NullValue",t[t.BooleanValue=1]="BooleanValue",t[t.NumberValue=2]="NumberValue",t[t.TimestampValue=3]="TimestampValue",t[t.StringValue=4]="StringValue",t[t.BlobValue=5]="BlobValue",t[t.RefValue=6]="RefValue",t[t.GeoPointValue=7]="GeoPointValue",t[t.ArrayValue=8]="ArrayValue",t[t.ObjectValue=9]="ObjectValue"}(vn||(vn={})),function(t){t[t.Default=0]="Default",t[t.Estimate=1]="Estimate",t[t.Previous=2]="Previous"}(wn||(wn={}))
var Sn=function(){function t(t,e){this.serverTimestampBehavior=t,this.timestampsInSnapshots=e}return t.fromSnapshotOptions=function(e,n){switch(e.serverTimestamps){case"estimate":return new t(wn.Estimate,n)
case"previous":return new t(wn.Previous,n)
case"none":case void 0:return new t(wn.Default,n)
default:return v("fromSnapshotOptions() called with invalid options.")}},t}(),Tn=function(){function t(){}return t.prototype.toString=function(){var t=this.value()
return null===t?"null":t.toString()},t.prototype.defaultCompareTo=function(t){return w(this.typeOrder!==t.typeOrder,"Default compareTo should not be used for values of same type."),H(this.typeOrder,t.typeOrder)},t}(),In=function(t){function e(){var e=t.call(this)||this
return e.typeOrder=vn.NullValue,e.internalValue=null,e}return s.__extends(e,t),e.prototype.value=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e},e.prototype.compareTo=function(t){return t instanceof e?0:this.defaultCompareTo(t)},e.INSTANCE=new e,e}(Tn),Cn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=vn.BooleanValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue===t.internalValue},e.prototype.compareTo=function(t){return t instanceof e?H(this,t):this.defaultCompareTo(t)},e.of=function(t){return t?e.TRUE:e.FALSE},e.TRUE=new e(!0),e.FALSE=new e(!1),e}(Tn),_n=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=vn.NumberValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.compareTo=function(t){return t instanceof e?(n=this.internalValue)<(r=t.internalValue)?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1:this.defaultCompareTo(t)
var n,r},e}(Tn)
function Dn(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}var Nn,An=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.isEqual=function(t){return t instanceof e&&Dn(this.internalValue,t.internalValue)},e}(_n),kn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.isEqual=function(t){return t instanceof e&&Dn(this.internalValue,t.internalValue)},e.NAN=new e(NaN),e.POSITIVE_INFINITY=new e(1/0),e.NEGATIVE_INFINITY=new e(-1/0),e}(_n),Rn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=vn.StringValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue===t.internalValue},e.prototype.compareTo=function(t){return t instanceof e?H(this.internalValue,t.internalValue):this.defaultCompareTo(t)},e}(Tn),Mn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=vn.TimestampValue,n}return s.__extends(e,t),e.prototype.value=function(t){return!t||t.timestampsInSnapshots?this.internalValue:this.internalValue.toDate()},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue.isEqual(t.internalValue)},e.prototype.compareTo=function(t){return t instanceof e?this.internalValue._compareTo(t.internalValue):t instanceof xn?-1:this.defaultCompareTo(t)},e}(Tn),xn=function(t){function e(e,n){var r=t.call(this)||this
return r.localWriteTime=e,r.previousValue=n,r.typeOrder=vn.TimestampValue,r}return s.__extends(e,t),e.prototype.value=function(t){return t&&t.serverTimestampBehavior===wn.Estimate?new Mn(this.localWriteTime).value(t):t&&t.serverTimestampBehavior===wn.Previous&&this.previousValue?this.previousValue.value(t):null},e.prototype.isEqual=function(t){return t instanceof e&&this.localWriteTime.isEqual(t.localWriteTime)},e.prototype.compareTo=function(t){return t instanceof e?this.localWriteTime._compareTo(t.localWriteTime):t instanceof Mn?1:this.defaultCompareTo(t)},e.prototype.toString=function(){return"<ServerTimestamp localTime="+this.localWriteTime.toString()+">"},e}(Tn),On=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=vn.BlobValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue.isEqual(t.internalValue)},e.prototype.compareTo=function(t){return t instanceof e?this.internalValue._compareTo(t.internalValue):this.defaultCompareTo(t)},e}(Tn),Ln=function(t){function e(e,n){var r=t.call(this)||this
return r.databaseId=e,r.key=n,r.typeOrder=vn.RefValue,r}return s.__extends(e,t),e.prototype.value=function(t){return this.key},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.databaseId.isEqual(t.databaseId)},e.prototype.compareTo=function(t){if(t instanceof e){var n=this.databaseId.compareTo(t.databaseId)
return 0!==n?n:ht.comparator(this.key,t.key)}return this.defaultCompareTo(t)},e}(Tn),Pn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=vn.GeoPointValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue},e.prototype.isEqual=function(t){return t instanceof e&&this.internalValue.isEqual(t.internalValue)},e.prototype.compareTo=function(t){return t instanceof e?this.internalValue._compareTo(t.internalValue):this.defaultCompareTo(t)},e}(Tn),qn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=vn.ObjectValue,n}return s.__extends(e,t),e.prototype.value=function(t){var e={}
return this.internalValue.inorderTraversal(function(n,r){e[n]=r.value(t)}),e},e.prototype.forEach=function(t){this.internalValue.inorderTraversal(t)},e.prototype.isEqual=function(t){if(t instanceof e){for(var n=this.internalValue.getIterator(),r=t.internalValue.getIterator();n.hasNext()&&r.hasNext();){var i=n.getNext(),o=r.getNext()
if(i.key!==o.key||!i.value.isEqual(o.value))return!1}return!n.hasNext()&&!r.hasNext()}return!1},e.prototype.compareTo=function(t){if(t instanceof e){for(var n=this.internalValue.getIterator(),r=t.internalValue.getIterator();n.hasNext()&&r.hasNext();){var i=n.getNext(),o=r.getNext(),a=H(i.key,o.key)||i.value.compareTo(o.value)
if(a)return a}return H(n.hasNext(),r.hasNext())}return this.defaultCompareTo(t)},e.prototype.set=function(t,n){if(w(!t.isEmpty(),"Cannot set field for empty path on ObjectValue"),1===t.length)return this.setChild(t.firstSegment(),n)
var r=this.child(t.firstSegment())
r instanceof e||(r=e.EMPTY)
var i=r.set(t.popFirst(),n)
return this.setChild(t.firstSegment(),i)},e.prototype.delete=function(t){if(w(!t.isEmpty(),"Cannot delete field for empty path on ObjectValue"),1===t.length)return new e(this.internalValue.remove(t.firstSegment()))
var n=this.child(t.firstSegment())
if(n instanceof e){var r=n.delete(t.popFirst())
return new e(this.internalValue.insert(t.firstSegment(),r))}return this},e.prototype.contains=function(t){return null!==this.field(t)},e.prototype.field=function(t){w(!t.isEmpty(),"Can't get field of empty path")
var n=this
return t.forEach(function(t){n=n instanceof e?n.internalValue.get(t):null}),n},e.prototype.fieldMask=function(){var t=new Nt(ct.comparator)
return this.internalValue.forEach(function(n,r){var i=new ct([n])
if(r instanceof e){var o=r.fieldMask().fields
o.isEmpty()?t=t.add(i):o.forEach(function(e){t=t.add(i.child(e))})}else t=t.add(i)}),Vn.fromSet(t)},e.prototype.toString=function(){return this.internalValue.toString()},e.prototype.child=function(t){return this.internalValue.get(t)||void 0},e.prototype.setChild=function(t,n){return new e(this.internalValue.insert(t,n))},e.EMPTY=new e(new It(H)),e}(Tn),Fn=function(t){function e(e){var n=t.call(this)||this
return n.internalValue=e,n.typeOrder=vn.ArrayValue,n}return s.__extends(e,t),e.prototype.value=function(t){return this.internalValue.map(function(e){return e.value(t)})},e.prototype.contains=function(t){var e,n
try{for(var r=s.__values(this.internalValue),i=r.next();!i.done;i=r.next())if(i.value.isEqual(t))return!0}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return!1},e.prototype.forEach=function(t){this.internalValue.forEach(t)},e.prototype.isEqual=function(t){if(t instanceof e){if(this.internalValue.length!==t.internalValue.length)return!1
for(var n=0;n<this.internalValue.length;n++)if(!this.internalValue[n].isEqual(t.internalValue[n]))return!1
return!0}return!1},e.prototype.compareTo=function(t){if(t instanceof e){for(var n=Math.min(this.internalValue.length,t.internalValue.length),r=0;r<n;r++){var i=this.internalValue[r].compareTo(t.internalValue[r])
if(i)return i}return H(this.internalValue.length,t.internalValue.length)}return this.defaultCompareTo(t)},e.prototype.toString=function(){return"["+this.internalValue.map(function(t){return t.toString()}).join(",")+"]"},e}(Tn),Vn=function(){function t(t){this.fields=t}return t.fromSet=function(e){return new t(e)},t.fromArray=function(e){var n=new Nt(ct.comparator)
return e.forEach(function(t){return n=n.add(t)}),new t(n)},t.prototype.covers=function(t){var e=!1
return this.fields.forEach(function(n){n.isPrefixOf(t)&&(e=!0)}),e},t.prototype.isEqual=function(t){return this.fields.isEqual(t.fields)},t}(),Un=function(){function t(t,e){this.field=t,this.transform=e}return t.prototype.isEqual=function(t){return this.field.isEqual(t.field)&&this.transform.isEqual(t.transform)},t}(),Bn=function(t,e){this.version=t,this.transformResults=e}
!function(t){t[t.Set=0]="Set",t[t.Patch=1]="Patch",t[t.Transform=2]="Transform",t[t.Delete=3]="Delete"}(Nn||(Nn={}))
var Qn=function(){function t(t,e){this.updateTime=t,this.exists=e,w(void 0===t||void 0===e,'Precondition can specify "exists" or "updateTime" but not both')}return t.exists=function(e){return new t(void 0,e)},t.updateTime=function(e){return new t(e)},Object.defineProperty(t.prototype,"isNone",{get:function(){return void 0===this.updateTime&&void 0===this.exists},enumerable:!0,configurable:!0}),t.prototype.isValidFor=function(t){return void 0!==this.updateTime?t instanceof pe&&t.version.isEqual(this.updateTime):void 0!==this.exists?this.exists===t instanceof pe:(w(this.isNone,"Precondition should be empty"),!0)},t.prototype.isEqual=function(t){return e=this.updateTime,n=t.updateTime,(null!=e?!(!n||!e.isEqual(n)):e===n)&&this.exists===t.exists
var e,n},t.NONE=new t,t}(),Kn=function(){function t(){}return t.prototype.verifyKeyMatches=function(t){null!=t&&w(t.key.isEqual(this.key),"Can only apply a mutation to a document with the same key")},t.getPostMutationVersion=function(t){return t instanceof pe?t.version:Tt.MIN},t}(),Gn=function(t){function e(e,n,r){var i=t.call(this)||this
return i.key=e,i.value=n,i.precondition=r,i.type=Nn.Set,i}return s.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){this.verifyKeyMatches(t),w(null==e.transformResults,"Transform results received by SetMutation.")
var n=e.version
return new pe(this.key,n,this.value,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t
var r=Kn.getPostMutationVersion(t)
return new pe(this.key,r,this.value,{hasLocalMutations:!0})},e.prototype.extractBaseValue=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.value.isEqual(t.value)&&this.precondition.isEqual(t.precondition)},e}(Kn),Wn=function(t){function e(e,n,r,i){var o=t.call(this)||this
return o.key=e,o.data=n,o.fieldMask=r,o.precondition=i,o.type=Nn.Patch,o}return s.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){if(this.verifyKeyMatches(t),w(null==e.transformResults,"Transform results received by PatchMutation."),!this.precondition.isValidFor(t))return new me(this.key,e.version)
var n=this.patchDocument(t)
return new pe(this.key,e.version,n,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t
var r=Kn.getPostMutationVersion(t),i=this.patchDocument(t)
return new pe(this.key,r,i,{hasLocalMutations:!0})},e.prototype.extractBaseValue=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.fieldMask.isEqual(t.fieldMask)&&this.precondition.isEqual(t.precondition)},e.prototype.patchDocument=function(t){var e
return e=t instanceof pe?t.data:qn.EMPTY,this.patchObject(e)},e.prototype.patchObject=function(t){var e=this
return this.fieldMask.fields.forEach(function(n){if(!n.isEmpty()){var r=e.data.field(n)
t=null!==r?t.set(n,r):t.delete(n)}}),t},e}(Kn),jn=function(t){function e(e,n){var r=t.call(this)||this
return r.key=e,r.fieldTransforms=n,r.type=Nn.Transform,r.precondition=Qn.exists(!0),r}return s.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){if(this.verifyKeyMatches(t),w(null!=e.transformResults,"Transform results missing for TransformMutation."),!this.precondition.isValidFor(t))return new me(this.key,e.version)
var n=this.requireDocument(t),r=this.serverTransformResults(t,e.transformResults),i=e.version,o=this.transformObject(n.data,r)
return new pe(this.key,i,o,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t
var r=this.requireDocument(t),i=this.localTransformResults(n,t,e),o=this.transformObject(r.data,i)
return new pe(this.key,r.version,o,{hasLocalMutations:!0})},e.prototype.extractBaseValue=function(t){var e,n,r=null
try{for(var i=s.__values(this.fieldTransforms),o=i.next();!o.done;o=i.next()){var a=o.value,u=t instanceof pe?t.field(a.field):void 0,c=a.transform.computeBaseValue(u||null)
null!=c&&(r=null==r?qn.EMPTY.set(a.field,c):r.set(a.field,c))}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&Y(this.fieldTransforms,t.fieldTransforms)&&this.precondition.isEqual(t.precondition)},e.prototype.requireDocument=function(t){w(t instanceof pe,"Unknown MaybeDocument type "+t)
var e=t
return w(e.key.isEqual(this.key),"Can only transform a document with the same key"),e},e.prototype.serverTransformResults=function(t,e){var n=[]
w(this.fieldTransforms.length===e.length,"server transform result count ("+e.length+") should match field transform count ("+this.fieldTransforms.length+")")
for(var r=0;r<e.length;r++){var i=this.fieldTransforms[r],o=i.transform,a=null
t instanceof pe&&(a=t.field(i.field)),n.push(o.applyToRemoteDocument(a,e[r]))}return n},e.prototype.localTransformResults=function(t,e,n){var r,i,o=[]
try{for(var a=s.__values(this.fieldTransforms),u=a.next();!u.done;u=a.next()){var c=u.value,h=c.transform,l=null
e instanceof pe&&(l=e.field(c.field)),null===l&&n instanceof pe&&(l=n.field(c.field)),o.push(h.applyToLocalView(l,t))}}catch(t){r={error:t}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}return o},e.prototype.transformObject=function(t,e){w(e.length===this.fieldTransforms.length,"TransformResults length mismatch.")
for(var n=0;n<this.fieldTransforms.length;n++){var r=this.fieldTransforms[n].field
t=t.set(r,e[n])}return t},e}(Kn),zn=function(t){function e(e,n){var r=t.call(this)||this
return r.key=e,r.precondition=n,r.type=Nn.Delete,r}return s.__extends(e,t),e.prototype.applyToRemoteDocument=function(t,e){return this.verifyKeyMatches(t),w(null==e.transformResults,"Transform results received by DeleteMutation."),new ye(this.key,e.version,{hasCommittedMutations:!0})},e.prototype.applyToLocalView=function(t,e,n){return this.verifyKeyMatches(t),this.precondition.isValidFor(t)?(t&&w(t.key.isEqual(this.key),"Can only apply mutation to document with same key"),new ye(this.key,Tt.forDeletedDoc())):t},e.prototype.extractBaseValue=function(t){return null},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.precondition.isEqual(t.precondition)},e}(Kn),Hn=function(){function t(t,e,n){this.remoteDocumentCache=t,this.mutationQueue=e,this.indexManager=n}return t.prototype.getDocument=function(t,e){var n=this
return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(t,e).next(function(r){return n.getDocumentInternal(t,e,r)})},t.prototype.getDocumentInternal=function(t,e,n){return this.remoteDocumentCache.getEntry(t,e).next(function(t){var r,i
try{for(var o=s.__values(n),a=o.next();!a.done;a=o.next())t=a.value.applyToLocalView(e,t)}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return t})},t.prototype.applyLocalMutationsToDocuments=function(t,e,n){var r=Mt()
return e.forEach(function(t,e){var i,o
try{for(var a=s.__values(n),u=a.next();!u.done;u=a.next())e=u.value.applyToLocalView(t,e)}catch(t){i={error:t}}finally{try{u&&!u.done&&(o=a.return)&&o.call(a)}finally{if(i)throw i.error}}r=r.insert(t,e)}),r},t.prototype.getDocuments=function(t,e){var n=this
return this.remoteDocumentCache.getEntries(t,e).next(function(e){return n.getLocalViewOfDocuments(t,e)})},t.prototype.getLocalViewOfDocuments=function(t,e){var n=this
return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(function(r){var i=n.applyLocalMutationsToDocuments(t,e,r),o=Rt()
return i.forEach(function(t,e){e||(e=new ye(t,Tt.forDeletedDoc())),o=o.insert(t,e)}),o})},t.prototype.getDocumentsMatchingQuery=function(t,e){return e.isDocumentQuery()?this.getDocumentsMatchingDocumentQuery(t,e.path):e.isCollectionGroupQuery()?this.getDocumentsMatchingCollectionGroupQuery(t,e):this.getDocumentsMatchingCollectionQuery(t,e)},t.prototype.getDocumentsMatchingDocumentQuery=function(t,e){return this.getDocument(t,new ht(e)).next(function(t){var e=Ot()
return t instanceof pe&&(e=e.insert(t.key,t)),e})},t.prototype.getDocumentsMatchingCollectionGroupQuery=function(t,e){var n=this
w(e.path.isEmpty(),"Currently we only support collection group queries at the root.")
var r=e.collectionGroup,i=Ot()
return this.indexManager.getCollectionParents(t,r).next(function(o){return Kt.forEach(o,function(o){var a=e.asCollectionQueryAtPath(o.child(r))
return n.getDocumentsMatchingCollectionQuery(t,a).next(function(t){t.forEach(function(t,e){i=i.insert(t,e)})})}).next(function(){return i})})},t.prototype.getDocumentsMatchingCollectionQuery=function(t,e){var n,r,i=this
return this.remoteDocumentCache.getDocumentsMatchingQuery(t,e).next(function(r){return n=r,i.mutationQueue.getAllMutationBatchesAffectingQuery(t,e)}).next(function(e){return r=e,i.addMissingBaseDocuments(t,r,n).next(function(t){var e,i,o,a
n=t
try{for(var u=s.__values(r),c=u.next();!c.done;c=u.next()){var h=c.value
try{for(var l=(o=void 0,s.__values(h.mutations)),f=l.next();!f.done;f=l.next()){var d=f.value,p=d.key,y=n.get(p),m=d.applyToLocalView(y,y,h.localWriteTime)
n=m instanceof pe?n.insert(p,m):n.remove(p)}}catch(t){o={error:t}}finally{try{f&&!f.done&&(a=l.return)&&a.call(l)}finally{if(o)throw o.error}}}}catch(t){e={error:t}}finally{try{c&&!c.done&&(i=u.return)&&i.call(u)}finally{if(e)throw e.error}}})}).next(function(){return n.forEach(function(t,r){e.matches(r)||(n=n.remove(t))}),n})},t.prototype.addMissingBaseDocuments=function(t,e,n){var r,i,o,a,u=Ft()
try{for(var c=s.__values(e),h=c.next();!h.done;h=c.next()){var l=h.value
try{for(var f=(o=void 0,s.__values(l.mutations)),d=f.next();!d.done;d=f.next()){var p=d.value
p instanceof Wn&&null===n.get(p.key)&&(u=u.add(p.key))}}catch(t){o={error:t}}finally{try{d&&!d.done&&(a=f.return)&&a.call(f)}finally{if(o)throw o.error}}}}catch(t){r={error:t}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}var y=n
return this.remoteDocumentCache.getEntries(t,u).next(function(t){return t.forEach(function(t,e){null!==e&&e instanceof pe&&(y=y.insert(t,e))}),y})},t}(),Yn=function(){function t(){this.refsByKey=new Nt(Xn.compareByKey),this.refsByTarget=new Nt(Xn.compareByTargetId)}return t.prototype.isEmpty=function(){return this.refsByKey.isEmpty()},t.prototype.addReference=function(t,e){var n=new Xn(t,e)
this.refsByKey=this.refsByKey.add(n),this.refsByTarget=this.refsByTarget.add(n)},t.prototype.addReferences=function(t,e){var n=this
t.forEach(function(t){return n.addReference(t,e)})},t.prototype.removeReference=function(t,e){this.removeRef(new Xn(t,e))},t.prototype.removeReferences=function(t,e){var n=this
t.forEach(function(t){return n.removeReference(t,e)})},t.prototype.removeReferencesForId=function(t){var e=this,n=ht.EMPTY,r=new Xn(n,t),i=new Xn(n,t+1),o=[]
return this.refsByTarget.forEachInRange([r,i],function(t){e.removeRef(t),o.push(t.key)}),o},t.prototype.removeAllReferences=function(){var t=this
this.refsByKey.forEach(function(e){return t.removeRef(e)})},t.prototype.removeRef=function(t){this.refsByKey=this.refsByKey.delete(t),this.refsByTarget=this.refsByTarget.delete(t)},t.prototype.referencesForId=function(t){var e=ht.EMPTY,n=new Xn(e,t),r=new Xn(e,t+1),i=Ft()
return this.refsByTarget.forEachInRange([n,r],function(t){i=i.add(t.key)}),i},t.prototype.containsKey=function(t){var e=new Xn(t,0),n=this.refsByKey.firstAfterOrEqual(e)
return null!==n&&t.isEqual(n.key)},t}(),Xn=function(){function t(t,e){this.key=t,this.targetOrBatchId=e}return t.compareByKey=function(t,e){return ht.comparator(t.key,e.key)||H(t.targetOrBatchId,e.targetOrBatchId)},t.compareByTargetId=function(t,e){return H(t.targetOrBatchId,e.targetOrBatchId)||ht.comparator(t.key,e.key)},t}(),Jn=function(){function t(t,e){this.persistence=t,this.localViewReferences=new Yn,this.queryDataByTarget={},w(t.started,"LocalStore was passed an unstarted persistence implementation"),this.persistence.referenceDelegate.setInMemoryPins(this.localViewReferences),this.mutationQueue=t.getMutationQueue(e),this.remoteDocuments=t.getRemoteDocumentCache(),this.queryCache=t.getQueryCache(),this.localDocuments=new Hn(this.remoteDocuments,this.mutationQueue,this.persistence.getIndexManager())}return t.prototype.handleUserChange=function(t){var e=this
return this.persistence.runTransaction("Handle user change","readonly",function(n){var r
return e.mutationQueue.getAllMutationBatches(n).next(function(i){return r=i,e.mutationQueue=e.persistence.getMutationQueue(t),e.localDocuments=new Hn(e.remoteDocuments,e.mutationQueue,e.persistence.getIndexManager()),e.mutationQueue.getAllMutationBatches(n)}).next(function(t){var i,o,a,u,c,h,l,f,d=[],p=[],y=Ft()
try{for(var m=s.__values(r),g=m.next();!g.done;g=m.next()){var v=g.value
d.push(v.batchId)
try{for(var w=(a=void 0,s.__values(v.mutations)),b=w.next();!b.done;b=w.next()){var E=b.value
y=y.add(E.key)}}catch(t){a={error:t}}finally{try{b&&!b.done&&(u=w.return)&&u.call(w)}finally{if(a)throw a.error}}}}catch(t){i={error:t}}finally{try{g&&!g.done&&(o=m.return)&&o.call(m)}finally{if(i)throw i.error}}try{for(var S=s.__values(t),T=S.next();!T.done;T=S.next()){v=T.value,p.push(v.batchId)
try{for(var I=(l=void 0,s.__values(v.mutations)),C=I.next();!C.done;C=I.next())E=C.value,y=y.add(E.key)}catch(t){l={error:t}}finally{try{C&&!C.done&&(f=I.return)&&f.call(I)}finally{if(l)throw l.error}}}}catch(t){c={error:t}}finally{try{T&&!T.done&&(h=S.return)&&h.call(S)}finally{if(c)throw c.error}}return e.localDocuments.getDocuments(n,y).next(function(t){return{affectedDocuments:t,removedBatchIds:d,addedBatchIds:p}})})})},t.prototype.localWrite=function(t){var e=this,n=St.now(),r=t.reduce(function(t,e){return t.add(e.key)},Ft())
return this.persistence.runTransaction("Locally write mutations","readwrite",function(i){return e.localDocuments.getDocuments(i,r).next(function(r){var o,a,u=[]
try{for(var c=s.__values(t),h=c.next();!h.done;h=c.next()){var l=h.value,f=l.extractBaseValue(r.get(l.key))
null!=f&&u.push(new Wn(l.key,f,f.fieldMask(),Qn.exists(!0)))}}catch(t){o={error:t}}finally{try{h&&!h.done&&(a=c.return)&&a.call(c)}finally{if(o)throw o.error}}return e.mutationQueue.addMutationBatch(i,n,u,t).next(function(t){var e=t.applyToLocalDocumentSet(r)
return{batchId:t.batchId,changes:e}})})})},t.prototype.lookupMutationDocuments=function(t){var e=this
return this.persistence.runTransaction("Lookup mutation documents","readonly",function(n){return e.mutationQueue.lookupMutationKeys(n,t).next(function(t){return t?e.localDocuments.getDocuments(n,t):Kt.resolve(null)})})},t.prototype.acknowledgeBatch=function(t){var e=this
return this.persistence.runTransaction("Acknowledge batch","readwrite-primary",function(n){var r=t.batch.keys(),i=e.remoteDocuments.newChangeBuffer()
return e.mutationQueue.acknowledgeBatch(n,t.batch,t.streamToken).next(function(){return e.applyWriteToRemoteDocuments(n,t,i)}).next(function(){return i.apply(n)}).next(function(){return e.mutationQueue.performConsistencyCheck(n)}).next(function(){return e.localDocuments.getDocuments(n,r)})})},t.prototype.rejectBatch=function(t){var e=this
return this.persistence.runTransaction("Reject batch","readwrite-primary",function(n){var r
return e.mutationQueue.lookupMutationBatch(n,t).next(function(t){return w(null!==t,"Attempt to reject nonexistent batch!"),r=t.keys(),e.mutationQueue.removeMutationBatch(n,t)}).next(function(){return e.mutationQueue.performConsistencyCheck(n)}).next(function(){return e.localDocuments.getDocuments(n,r)})})},t.prototype.getLastStreamToken=function(){var t=this
return this.persistence.runTransaction("Get last stream token","readonly",function(e){return t.mutationQueue.getLastStreamToken(e)})},t.prototype.setLastStreamToken=function(t){var e=this
return this.persistence.runTransaction("Set last stream token","readwrite-primary",function(n){return e.mutationQueue.setLastStreamToken(n,t)})},t.prototype.getLastRemoteSnapshotVersion=function(){var t=this
return this.persistence.runTransaction("Get last remote snapshot version","readonly",function(e){return t.queryCache.getLastRemoteSnapshotVersion(e)})},t.prototype.applyRemoteEvent=function(e){var n=this,r=this.remoteDocuments.newChangeBuffer()
return this.persistence.runTransaction("Apply remote event","readwrite-primary",function(i){var o=[],a=Ft()
D(e.targetChanges,function(r,s){var u=n.queryDataByTarget[r]
if(u){s.addedDocuments.forEach(function(t){a=a.add(t)}),s.modifiedDocuments.forEach(function(t){a=a.add(t)}),o.push(n.queryCache.removeMatchingKeys(i,s.removedDocuments,r).next(function(){return n.queryCache.addMatchingKeys(i,s.addedDocuments,r)}))
var c=s.resumeToken
if(c.length>0){var h=u
u=u.copy({resumeToken:c,snapshotVersion:e.snapshotVersion}),n.queryDataByTarget[r]=u,t.shouldPersistQueryData(h,u,s)&&o.push(n.queryCache.updateQueryData(i,u))}}})
var s=Rt(),u=Ft()
e.documentUpdates.forEach(function(t,e){u=u.add(t)}),o.push(r.getEntries(i,u).next(function(t){e.documentUpdates.forEach(function(u,c){var h=t.get(u)
null==h||c.version.isEqual(Tt.MIN)||a.has(c.key)&&!h.hasPendingWrites||c.version.compareTo(h.version)>=0?(r.addEntry(c),s=s.insert(u,c)):y("LocalStore","Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version),e.resolvedLimboDocuments.has(u)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))})}))
var c=e.snapshotVersion
if(!c.isEqual(Tt.MIN)){var h=n.queryCache.getLastRemoteSnapshotVersion(i).next(function(t){return w(c.compareTo(t)>=0,"Watch stream reverted to previous snapshot?? "+c+" < "+t),n.queryCache.setTargetsMetadata(i,i.currentSequenceNumber,c)})
o.push(h)}return Kt.waitFor(o).next(function(){return r.apply(i)}).next(function(){return n.localDocuments.getLocalViewOfDocuments(i,s)})})},t.shouldPersistQueryData=function(t,e,n){return 0!==e.resumeToken.length&&(0===t.resumeToken.length||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=this.RESUME_TOKEN_MAX_AGE_MICROS||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)},t.prototype.notifyLocalViewChanges=function(t){var e=this
return this.persistence.runTransaction("notifyLocalViewChanges","readwrite",function(n){return Kt.forEach(t,function(t){return e.localViewReferences.addReferences(t.addedKeys,t.targetId),e.localViewReferences.removeReferences(t.removedKeys,t.targetId),Kt.forEach(t.removedKeys,function(t){return e.persistence.referenceDelegate.removeReference(n,t)})})})},t.prototype.nextMutationBatch=function(t){var e=this
return this.persistence.runTransaction("Get next mutation batch","readonly",function(n){return void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)})},t.prototype.readDocument=function(t){var e=this
return this.persistence.runTransaction("read document","readonly",function(n){return e.localDocuments.getDocument(n,t)})},t.prototype.allocateQuery=function(t){var e=this
return this.persistence.runTransaction("Allocate query","readwrite",function(n){var r
return e.queryCache.getQueryData(n,t).next(function(i){return i?(r=i,Kt.resolve()):e.queryCache.allocateTargetId(n).next(function(i){return r=new tn(t,i,We.Listen,n.currentSequenceNumber),e.queryCache.addQueryData(n,r)})}).next(function(){return w(!e.queryDataByTarget[r.targetId],"Tried to allocate an already allocated query: "+t),e.queryDataByTarget[r.targetId]=r,r})})},t.prototype.releaseQuery=function(t,e){var n=this,r=e?"readwrite":"readwrite-primary"
return this.persistence.runTransaction("Release query",r,function(r){return n.queryCache.getQueryData(r,t).next(function(i){w(null!=i,"Tried to release nonexistent query: "+t)
var o=i.targetId,a=n.queryDataByTarget[o],s=n.localViewReferences.removeReferencesForId(o)
return delete n.queryDataByTarget[o],e?Kt.resolve():Kt.forEach(s,function(t){return n.persistence.referenceDelegate.removeReference(r,t)}).next(function(){return n.persistence.referenceDelegate.removeTarget(r,a)})})})},t.prototype.executeQuery=function(t){var e=this
return this.persistence.runTransaction("Execute query","readonly",function(n){return e.localDocuments.getDocumentsMatchingQuery(n,t)})},t.prototype.remoteDocumentKeys=function(t){var e=this
return this.persistence.runTransaction("Remote document keys","readonly",function(n){return e.queryCache.getMatchingKeysForTargetId(n,t)})},t.prototype.getActiveClients=function(){return this.persistence.getActiveClients()},t.prototype.removeCachedMutationBatchMetadata=function(t){this.mutationQueue.removeCachedMutationKeys(t)},t.prototype.setNetworkEnabled=function(t){this.persistence.setNetworkEnabled(t)},t.prototype.applyWriteToRemoteDocuments=function(t,e,n){var r=this,i=e.batch,o=i.keys(),a=Kt.resolve()
return o.forEach(function(r){a=a.next(function(){return n.getEntry(t,r)}).next(function(t){var o=t,a=e.docVersions.get(r)
w(null!==a,"ackVersions should contain every doc in the write."),(!o||o.version.compareTo(a)<0)&&((o=i.applyToRemoteDocument(r,o,e))?n.addEntry(o):w(!t,"Mutation batch "+i+" applied to document "+t+" resulted in null"))})}),a.next(function(){return r.mutationQueue.removeMutationBatch(t,i)})},t.prototype.collectGarbage=function(t){var e=this
return this.persistence.runTransaction("Collect garbage","readwrite-primary",function(n){return t.collect(n,e.queryDataByTarget)})},t.prototype.getQueryForTarget=function(t){var e=this
return this.queryDataByTarget[t]?Promise.resolve(this.queryDataByTarget[t].query):this.persistence.runTransaction("Get query data","readonly",function(n){return e.queryCache.getQueryDataForTarget(n,t).next(function(t){return t?t.query:null})})},t.prototype.getNewDocumentChanges=function(){var t=this
return this.persistence.runTransaction("Get new document changes","readonly",function(e){return t.remoteDocuments.getNewDocumentChanges(e)})},t.RESUME_TOKEN_MAX_AGE_MICROS=3e8,t}(),Zn=function(){function t(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nextBatchId=1,this.lastStreamToken=E(),this.batchesByDocumentKey=new Nt(Xn.compareByKey)}return t.prototype.checkEmpty=function(t){return Kt.resolve(0===this.mutationQueue.length)},t.prototype.acknowledgeBatch=function(t,e,n){var r=e.batchId,i=this.indexOfExistingBatchId(r,"acknowledged")
w(0===i,"Can only acknowledge the first batch in the mutation queue")
var o=this.mutationQueue[i]
return w(r===o.batchId,"Queue ordering failure: expected batch "+r+", got batch "+o.batchId),this.lastStreamToken=n,Kt.resolve()},t.prototype.getLastStreamToken=function(t){return Kt.resolve(this.lastStreamToken)},t.prototype.setLastStreamToken=function(t,e){return this.lastStreamToken=e,Kt.resolve()},t.prototype.addMutationBatch=function(t,e,n,r){var i,o
w(0!==r.length,"Mutation batches should not be empty")
var a=this.nextBatchId
this.nextBatchId++,this.mutationQueue.length>0&&w(this.mutationQueue[this.mutationQueue.length-1].batchId<a,"Mutation batchIDs must be monotonically increasing order")
var u=new Bt(a,e,n,r)
this.mutationQueue.push(u)
try{for(var c=s.__values(r),h=c.next();!h.done;h=c.next()){var l=h.value
this.batchesByDocumentKey=this.batchesByDocumentKey.add(new Xn(l.key,a)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast())}}catch(t){i={error:t}}finally{try{h&&!h.done&&(o=c.return)&&o.call(c)}finally{if(i)throw i.error}}return Kt.resolve(u)},t.prototype.lookupMutationBatch=function(t,e){return Kt.resolve(this.findMutationBatch(e))},t.prototype.lookupMutationKeys=function(t,e){var n=this.findMutationBatch(e)
return w(null!=n,"Failed to find local mutation batch."),Kt.resolve(n.keys())},t.prototype.getNextMutationBatchAfterBatchId=function(t,e){var n=e+1,r=this.indexOfBatchId(n),i=r<0?0:r
return Kt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)},t.prototype.getAllMutationBatches=function(t){return Kt.resolve(this.mutationQueue.slice())},t.prototype.getAllMutationBatchesAffectingDocumentKey=function(t,e){var n=this,r=new Xn(e,0),i=new Xn(e,Number.POSITIVE_INFINITY),o=[]
return this.batchesByDocumentKey.forEachInRange([r,i],function(t){w(e.isEqual(t.key),"Should only iterate over a single key's batches")
var r=n.findMutationBatch(t.targetOrBatchId)
w(null!==r,"Batches in the index must exist in the main table"),o.push(r)}),Kt.resolve(o)},t.prototype.getAllMutationBatchesAffectingDocumentKeys=function(t,e){var n=this,r=new Nt(H)
return e.forEach(function(t){var e=new Xn(t,0),i=new Xn(t,Number.POSITIVE_INFINITY)
n.batchesByDocumentKey.forEachInRange([e,i],function(e){w(t.isEqual(e.key),"For each key, should only iterate over a single key's batches"),r=r.add(e.targetOrBatchId)})}),Kt.resolve(this.findMutationBatches(r))},t.prototype.getAllMutationBatchesAffectingQuery=function(t,e){w(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
var n=e.path,r=n.length+1,i=n
ht.isDocumentKey(i)||(i=i.child(""))
var o=new Xn(new ht(i),0),a=new Nt(H)
return this.batchesByDocumentKey.forEachWhile(function(t){var e=t.key.path
return!!n.isPrefixOf(e)&&(e.length===r&&(a=a.add(t.targetOrBatchId)),!0)},o),Kt.resolve(this.findMutationBatches(a))},t.prototype.findMutationBatches=function(t){var e=this,n=[]
return t.forEach(function(t){var r=e.findMutationBatch(t)
null!==r&&n.push(r)}),n},t.prototype.removeMutationBatch=function(t,e){var n=this
w(0===this.indexOfExistingBatchId(e.batchId,"removed"),"Can only remove the first entry of the mutation queue"),this.mutationQueue.shift()
var r=this.batchesByDocumentKey
return Kt.forEach(e.mutations,function(i){var o=new Xn(i.key,e.batchId)
return r=r.delete(o),n.referenceDelegate.removeMutationReference(t,i.key)}).next(function(){n.batchesByDocumentKey=r})},t.prototype.removeCachedMutationKeys=function(t){},t.prototype.containsKey=function(t,e){var n=new Xn(e,0),r=this.batchesByDocumentKey.firstAfterOrEqual(n)
return Kt.resolve(e.isEqual(r&&r.key))},t.prototype.performConsistencyCheck=function(t){return 0===this.mutationQueue.length&&w(this.batchesByDocumentKey.isEmpty(),"Document leak -- detected dangling mutation references when queue is empty."),Kt.resolve()},t.prototype.indexOfExistingBatchId=function(t,e){var n=this.indexOfBatchId(t)
return w(n>=0&&n<this.mutationQueue.length,"Batches must exist to be "+e),n},t.prototype.indexOfBatchId=function(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId},t.prototype.findMutationBatch=function(t){var e=this.indexOfBatchId(t)
if(e<0||e>=this.mutationQueue.length)return null
var n=this.mutationQueue[e]
return w(n.batchId===t,"If found batch must match"),n},t}(),$n=function(){function t(t){this.persistence=t,this.queries=new ge(function(t){return t.canonicalId()}),this.lastRemoteSnapshotVersion=Tt.MIN,this.highestTargetId=0,this.highestSequenceNumber=0,this.references=new Yn,this.targetCount=0,this.targetIdGenerator=$t.forQueryCache()}return t.prototype.getTargetCount=function(t){return Kt.resolve(this.targetCount)},t.prototype.forEachTarget=function(t,e){return this.queries.forEach(function(t,n){return e(n)}),Kt.resolve()},t.prototype.getLastRemoteSnapshotVersion=function(t){return Kt.resolve(this.lastRemoteSnapshotVersion)},t.prototype.getHighestSequenceNumber=function(t){return Kt.resolve(this.highestSequenceNumber)},t.prototype.allocateTargetId=function(t){var e=this.targetIdGenerator.after(this.highestTargetId)
return this.highestTargetId=e,Kt.resolve(e)},t.prototype.setTargetsMetadata=function(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.highestSequenceNumber&&(this.highestSequenceNumber=e),Kt.resolve()},t.prototype.saveQueryData=function(t){this.queries.set(t.query,t)
var e=t.targetId
e>this.highestTargetId&&(this.highestTargetId=e),t.sequenceNumber>this.highestSequenceNumber&&(this.highestSequenceNumber=t.sequenceNumber)},t.prototype.addQueryData=function(t,e){return w(!this.queries.has(e.query),"Adding a query that already exists"),this.saveQueryData(e),this.targetCount+=1,Kt.resolve()},t.prototype.updateQueryData=function(t,e){return w(this.queries.has(e.query),"Updating a non-existent query"),this.saveQueryData(e),Kt.resolve()},t.prototype.removeQueryData=function(t,e){return w(this.targetCount>0,"Removing a target from an empty cache"),w(this.queries.has(e.query),"Removing a non-existent target from the cache"),this.queries.delete(e.query),this.references.removeReferencesForId(e.targetId),this.targetCount-=1,Kt.resolve()},t.prototype.removeTargets=function(t,e,n){var r=this,i=0,o=[]
return this.queries.forEach(function(a,s){s.sequenceNumber<=e&&!n[s.targetId]&&(r.queries.delete(a),o.push(r.removeMatchingKeysForTargetId(t,s.targetId)),i++)}),Kt.waitFor(o).next(function(){return i})},t.prototype.getQueryCount=function(t){return Kt.resolve(this.targetCount)},t.prototype.getQueryData=function(t,e){var n=this.queries.get(e)||null
return Kt.resolve(n)},t.prototype.getQueryDataForTarget=function(t,e){return v("Not yet implemented.")},t.prototype.addMatchingKeys=function(t,e,n){this.references.addReferences(e,n)
var r=this.persistence.referenceDelegate,i=[]
return r&&e.forEach(function(e){i.push(r.addReference(t,e))}),Kt.waitFor(i)},t.prototype.removeMatchingKeys=function(t,e,n){this.references.removeReferences(e,n)
var r=this.persistence.referenceDelegate,i=[]
return r&&e.forEach(function(e){i.push(r.removeReference(t,e))}),Kt.waitFor(i)},t.prototype.removeMatchingKeysForTargetId=function(t,e){return this.references.removeReferencesForId(e),Kt.resolve()},t.prototype.getMatchingKeysForTargetId=function(t,e){var n=this.references.referencesForId(e)
return Kt.resolve(n)},t.prototype.containsKey=function(t,e){return Kt.resolve(this.references.containsKey(e))},t}(),tr=function(){function t(t,e){this.indexManager=t,this.sizer=e,this.docs=new It(ht.comparator),this.newDocumentChanges=Ft(),this.size=0}return t.prototype.addEntries=function(t,e,n){var r,i,o=[]
try{for(var a=s.__values(e),u=a.next();!u.done;u=a.next()){var c=u.value,h=c.maybeDocument.key
this.docs=this.docs.insert(h,c),this.newDocumentChanges=this.newDocumentChanges.add(h),o.push(this.indexManager.addToCollectionParentIndex(t,h.path.popLast()))}}catch(t){r={error:t}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}return this.size+=n,Kt.waitFor(o)},t.prototype.removeEntry=function(t,e){var n=this.docs.get(e)
return n?(this.docs=this.docs.remove(e),this.size-=n.size,Kt.resolve(n.size)):Kt.resolve(0)},t.prototype.getEntry=function(t,e){var n=this.docs.get(e)
return Kt.resolve(n?n.maybeDocument:null)},t.prototype.getSizedEntry=function(t,e){return Kt.resolve(this.docs.get(e))},t.prototype.getEntries=function(t,e){var n=this,r=Mt()
return e.forEach(function(t){var e=n.docs.get(t)
r=r.insert(t,e?e.maybeDocument:null)}),Kt.resolve(r)},t.prototype.getSizedEntries=function(t,e){var n=this,r=Mt(),i=new It(ht.comparator)
return e.forEach(function(t){var e=n.docs.get(t)
r=r.insert(t,e?e.maybeDocument:null),i=i.insert(t,e?e.size:0)}),Kt.resolve({maybeDocuments:r,sizeMap:i})},t.prototype.getDocumentsMatchingQuery=function(t,e){w(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView")
for(var n=Ot(),r=new ht(e.path.child("")),i=this.docs.getIteratorFrom(r);i.hasNext();){var o=i.getNext(),a=o.key,s=o.value.maybeDocument
if(!e.path.isPrefixOf(a.path))break
s instanceof pe&&e.matches(s)&&(n=n.insert(s.key,s))}return Kt.resolve(n)},t.prototype.forEachDocumentKey=function(t,e){return Kt.forEach(this.docs,function(t){return e(t)})},t.prototype.getNewDocumentChanges=function(t){var e=this,n=Rt()
return this.newDocumentChanges.forEach(function(t){var r=e.docs.get(t),i=r?r.maybeDocument:new ye(t,Tt.forDeletedDoc())
n=n.insert(t,i)}),this.newDocumentChanges=Ft(),Kt.resolve(n)},t.prototype.newChangeBuffer=function(){return new er(this.sizer,this)},t.prototype.getSize=function(t){return Kt.resolve(this.size)},t}(),er=function(t){function e(e,n){var r=t.call(this)||this
return r.sizer=e,r.documentCache=n,r}return s.__extends(e,t),e.prototype.applyChanges=function(t){var e=this,n=this.assertChanges(),r=0,i=[]
return n.forEach(function(t,n){var o=e.documentSizes.get(t)
w(void 0!==o,"Attempting to change document "+t.toString()+" without having read it first")
var a=e.sizer(n)
r+=a-o,i.push({maybeDocument:n,size:a})}),this.documentCache.addEntries(t,i,r)},e.prototype.getFromCache=function(t,e){return this.documentCache.getSizedEntry(t,e)},e.prototype.getAllFromCache=function(t,e){return this.documentCache.getSizedEntries(t,e)},e}(ve),nr=function(){function t(t,e){var n=this
this.clientId=t,this.mutationQueues={},this.listenSequence=new ot(0),this._started=!1,this._started=!0,this.referenceDelegate=e(this),this.queryCache=new $n(this),this.indexManager=new De,this.remoteDocumentCache=new tr(this.indexManager,function(t){return n.referenceDelegate.documentSize(t)})}return t.createLruPersistence=function(e,n,r){return new t(e,function(t){return new or(t,new en(n),r)})},t.createEagerPersistence=function(e){return new t(e,function(t){return new ir(t)})},t.prototype.shutdown=function(){return this._started=!1,Promise.resolve()},Object.defineProperty(t.prototype,"started",{get:function(){return this._started},enumerable:!0,configurable:!0}),t.prototype.getActiveClients=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){return[2,[this.clientId]]})})},t.prototype.setPrimaryStateListener=function(t){return t(!0)},t.prototype.setDatabaseDeletedListener=function(){},t.prototype.setNetworkEnabled=function(t){},t.prototype.getIndexManager=function(){return this.indexManager},t.prototype.getMutationQueue=function(t){var e=this.mutationQueues[t.toKey()]
return e||(e=new Zn(this.indexManager,this.referenceDelegate),this.mutationQueues[t.toKey()]=e),e},t.prototype.getQueryCache=function(){return this.queryCache},t.prototype.getRemoteDocumentCache=function(){return this.remoteDocumentCache},t.prototype.runTransaction=function(t,e,n){var r=this
y("MemoryPersistence","Starting transaction:",t)
var i=new rr(this.listenSequence.next())
return this.referenceDelegate.onTransactionStarted(),n(i).next(function(t){return r.referenceDelegate.onTransactionCommitted(i).next(function(){return t})}).toPromise()},t.prototype.mutationQueuesContainKey=function(t,e){return Kt.or((n=this.mutationQueues,r=[],N(n,function(t,e){return r.push(e)}),r).map(function(n){return function(){return n.containsKey(t,e)}}))
var n,r},t}(),rr=function(t){this.currentSequenceNumber=t},ir=function(){function t(t){this.persistence=t}return t.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},t.prototype.addReference=function(t,e){return this.orphanedDocuments.delete(e),Kt.resolve()},t.prototype.removeReference=function(t,e){return this.orphanedDocuments.add(e),Kt.resolve()},t.prototype.removeMutationReference=function(t,e){return this.orphanedDocuments.add(e),Kt.resolve()},t.prototype.removeTarget=function(t,e){var n=this,r=this.persistence.getQueryCache()
return r.getMatchingKeysForTargetId(t,e.targetId).next(function(t){t.forEach(function(t){return n.orphanedDocuments.add(t)})}).next(function(){return r.removeQueryData(t,e)})},t.prototype.onTransactionStarted=function(){this.orphanedDocuments=new Set},t.prototype.onTransactionCommitted=function(t){var e=this,n=this.persistence.getRemoteDocumentCache()
return Kt.forEach(this.orphanedDocuments,function(r){return e.isReferenced(t,r).next(function(e){return e?Kt.resolve():n.removeEntry(t,r).next(function(){})})})},t.prototype.updateLimboDocument=function(t,e){var n=this
return this.isReferenced(t,e).next(function(t){t?n.orphanedDocuments.delete(e):n.orphanedDocuments.add(e)})},t.prototype.documentSize=function(t){return 0},t.prototype.isReferenced=function(t,e){var n=this
return Kt.or([function(){return n.persistence.getQueryCache().containsKey(t,e)},function(){return n.persistence.mutationQueuesContainKey(t,e)},function(){return Kt.resolve(n.inMemoryPins.containsKey(e))}])},t}(),or=function(){function t(t,e,n){this.persistence=t,this.serializer=e,this.orphanedSequenceNumbers=new ge(function(t){return vt(t.path)}),this.garbageCollector=new un(this,n)}return t.prototype.onTransactionStarted=function(){},t.prototype.onTransactionCommitted=function(t){return Kt.resolve()},t.prototype.forEachTarget=function(t,e){return this.persistence.getQueryCache().forEachTarget(t,e)},t.prototype.getSequenceNumberCount=function(t){var e=this.orphanedDocumentCount(t)
return this.persistence.getQueryCache().getTargetCount(t).next(function(t){return e.next(function(e){return t+e})})},t.prototype.orphanedDocumentCount=function(t){var e=0
return this.forEachOrphanedDocumentSequenceNumber(t,function(t){e++}).next(function(){return e})},t.prototype.forEachOrphanedDocumentSequenceNumber=function(t,e){var n=this
return Kt.forEach(this.orphanedSequenceNumbers,function(r,i){return n.isPinned(t,r,i).next(function(t){return t?Kt.resolve():e(i)})})},t.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},t.prototype.removeTargets=function(t,e,n){return this.persistence.getQueryCache().removeTargets(t,e,n)},t.prototype.removeOrphanedDocuments=function(t,e){var n=this,r=0,i=this.persistence.getRemoteDocumentCache()
return i.forEachDocumentKey(t,function(o){return n.isPinned(t,o,e).next(function(e){return e?Kt.resolve():(r++,i.removeEntry(t,o).next())})}).next(function(){return r})},t.prototype.removeMutationReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Kt.resolve()},t.prototype.removeTarget=function(t,e){var n=e.copy({sequenceNumber:t.currentSequenceNumber})
return this.persistence.getQueryCache().updateQueryData(t,n)},t.prototype.addReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Kt.resolve()},t.prototype.removeReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Kt.resolve()},t.prototype.updateLimboDocument=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Kt.resolve()},t.prototype.documentSize=function(t){var e,n=this.serializer.toDbRemoteDocument(t)
if(n.document)e=n.document
else if(n.unknownDocument)e=n.unknownDocument
else{if(!n.noDocument)throw v("Unknown remote document type")
e=n.noDocument}return JSON.stringify(e).length},t.prototype.isPinned=function(t,e,n){var r=this
return Kt.or([function(){return r.persistence.mutationQueuesContainKey(t,e)},function(){return Kt.resolve(r.inMemoryPins.containsKey(e))},function(){return r.persistence.getQueryCache().containsKey(t,e)},function(){var t=r.orphanedSequenceNumbers.get(e)
return Kt.resolve(void 0!==t&&t>n)}])},t.prototype.getCacheSize=function(t){return this.persistence.getRemoteDocumentCache().getSize(t)},t}(),ar=Number,sr=ar.MIN_SAFE_INTEGER||-(Math.pow(2,53)-1),ur=ar.MAX_SAFE_INTEGER||Math.pow(2,53)-1,cr=ar.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}
function hr(t){return null==t}function lr(t){return cr(t)&&t<=ur&&t>=sr}var fr,dr=function(){function t(t,e,n,r,i){this.queue=t,this.timerId=e,this.initialDelayMs=n,this.backoffFactor=r,this.maxDelayMs=i,this.timerPromise=null,this.lastAttemptTime=Date.now(),this.reset()}return t.prototype.reset=function(){this.currentBaseMs=0},t.prototype.resetToMax=function(){this.currentBaseMs=this.maxDelayMs},t.prototype.backoffAndRun=function(t){var e=this
this.cancel()
var n=Math.floor(this.currentBaseMs+this.jitterDelayMs()),r=Math.max(0,Date.now()-this.lastAttemptTime),i=Math.max(0,n-r)
this.currentBaseMs>0&&y("ExponentialBackoff","Backing off for "+i+" ms (base delay: "+this.currentBaseMs+" ms, delay with jitter: "+n+" ms, last attempt: "+r+" ms ago)"),this.timerPromise=this.queue.enqueueAfterDelay(this.timerId,i,function(){return e.lastAttemptTime=Date.now(),t()}),this.currentBaseMs*=this.backoffFactor,this.currentBaseMs<this.initialDelayMs&&(this.currentBaseMs=this.initialDelayMs),this.currentBaseMs>this.maxDelayMs&&(this.currentBaseMs=this.maxDelayMs)},t.prototype.cancel=function(){null!==this.timerPromise&&(this.timerPromise.cancel(),this.timerPromise=null)},t.prototype.jitterDelayMs=function(){return(Math.random()-.5)*this.currentBaseMs},t}()
!function(t){t[t.Initial=0]="Initial",t[t.Starting=1]="Starting",t[t.Open=2]="Open",t[t.Error=3]="Error",t[t.Backoff=4]="Backoff"}(fr||(fr={}))
var pr,yr,mr=1e3,gr=6e4,vr=1.5,wr=function(){function t(t,e,n,r,i,o){this.queue=t,this.idleTimerId=n,this.connection=r,this.credentialsProvider=i,this.listener=o,this.state=fr.Initial,this.closeCount=0,this.idleTimer=null,this.stream=null,this.backoff=new dr(t,e,mr,vr,gr)}return t.prototype.isStarted=function(){return this.state===fr.Starting||this.state===fr.Open||this.state===fr.Backoff},t.prototype.isOpen=function(){return this.state===fr.Open},t.prototype.start=function(){this.state!==fr.Error?(w(this.state===fr.Initial,"Already started"),this.auth()):this.performBackoff()},t.prototype.stop=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.isStarted()?[4,this.close(fr.Initial)]:[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})},t.prototype.inhibitBackoff=function(){w(!this.isStarted(),"Can only inhibit backoff in a stopped state"),this.state=fr.Initial,this.backoff.reset()},t.prototype.markIdle=function(){var t=this
this.isOpen()&&null===this.idleTimer&&(this.idleTimer=this.queue.enqueueAfterDelay(this.idleTimerId,6e4,function(){return t.handleIdleCloseTimer()}))},t.prototype.sendRequest=function(t){this.cancelIdleCheck(),this.stream.send(t)},t.prototype.handleIdleCloseTimer=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){return this.isOpen()?[2,this.close(fr.Initial)]:[2]})})},t.prototype.cancelIdleCheck=function(){this.idleTimer&&(this.idleTimer.cancel(),this.idleTimer=null)},t.prototype.close=function(t,e){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(n){switch(n.label){case 0:return w(this.isStarted(),"Only started streams should be closed."),w(t===fr.Error||hr(e),"Can't provide an error when not in an error state."),this.cancelIdleCheck(),this.backoff.cancel(),this.closeCount++,t!==fr.Error?this.backoff.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.backoff.resetToMax()):e&&e.code===S.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.tearDown(),this.stream.close(),this.stream=null),this.state=t,[4,this.listener.onClose(e)]
case 1:return n.sent(),[2]}})})},t.prototype.tearDown=function(){},t.prototype.auth=function(){var t=this
w(this.state===fr.Initial,"Must be in initial state to auth"),this.state=fr.Starting
var e=this.getCloseGuardedDispatcher(this.closeCount),n=this.closeCount
this.credentialsProvider.getToken().then(function(e){t.closeCount===n&&t.startStream(e)},function(n){e(function(){var e=new T(S.UNKNOWN,"Fetching auth token failed: "+n.message)
return t.handleStreamClose(e)})})},t.prototype.startStream=function(t){var e=this
w(this.state===fr.Starting,"Trying to start stream in a non-starting state")
var n=this.getCloseGuardedDispatcher(this.closeCount)
this.stream=this.startRpc(t),this.stream.onOpen(function(){n(function(){return w(e.state===fr.Starting,"Expected stream to be in state Starting, but was "+e.state),e.state=fr.Open,e.listener.onOpen()})}),this.stream.onClose(function(t){n(function(){return e.handleStreamClose(t)})}),this.stream.onMessage(function(t){n(function(){return e.onMessage(t)})})},t.prototype.performBackoff=function(){var t=this
w(this.state===fr.Error,"Should only perform backoff when in Error state"),this.state=fr.Backoff,this.backoff.backoffAndRun(function(){return s.__awaiter(t,void 0,void 0,function(){return s.__generator(this,function(t){return w(this.state===fr.Backoff,"Backoff elapsed but state is now: "+this.state),this.state=fr.Initial,this.start(),w(this.isStarted(),"PersistentStream should have started"),[2]})})})},t.prototype.handleStreamClose=function(t){return w(this.isStarted(),"Can't handle server close on non-started stream"),y("PersistentStream","close with error: "+t),this.stream=null,this.close(fr.Error,t)},t.prototype.getCloseGuardedDispatcher=function(t){var e=this
return function(n){e.queue.enqueueAndForget(function(){return e.closeCount===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())})}},t}(),br=function(t){function e(e,n,r,i,o){var a=t.call(this,e,$.ListenStreamConnectionBackoff,$.ListenStreamIdle,n,r,o)||this
return a.serializer=i,a}return s.__extends(e,t),e.prototype.startRpc=function(t){return this.connection.openStream("Listen",t)},e.prototype.onMessage=function(t){this.backoff.reset()
var e=this.serializer.fromWatchChange(t),n=this.serializer.versionFromListenResponse(t)
return this.listener.onWatchChange(e,n)},e.prototype.watch=function(t){var e={}
e.database=this.serializer.encodedDatabaseId,e.addTarget=this.serializer.toTarget(t)
var n=this.serializer.toListenRequestLabels(t)
n&&(e.labels=n),this.sendRequest(e)},e.prototype.unwatch=function(t){var e={}
e.database=this.serializer.encodedDatabaseId,e.removeTarget=t,this.sendRequest(e)},e}(wr),Er=function(t){function e(e,n,r,i,o){var a=t.call(this,e,$.WriteStreamConnectionBackoff,$.WriteStreamIdle,n,r,o)||this
return a.serializer=i,a.handshakeComplete_=!1,a}return s.__extends(e,t),Object.defineProperty(e.prototype,"handshakeComplete",{get:function(){return this.handshakeComplete_},enumerable:!0,configurable:!0}),e.prototype.start=function(){this.handshakeComplete_=!1,t.prototype.start.call(this)},e.prototype.tearDown=function(){this.handshakeComplete_&&this.writeMutations([])},e.prototype.startRpc=function(t){return this.connection.openStream("Write",t)},e.prototype.onMessage=function(t){if(w(!!t.streamToken,"Got a write response without a stream token"),this.lastStreamToken=t.streamToken,this.handshakeComplete_){this.backoff.reset()
var e=this.serializer.fromWriteResults(t.writeResults,t.commitTime),n=this.serializer.fromVersion(t.commitTime)
return this.listener.onMutationResult(n,e)}return w(!t.writeResults||0===t.writeResults.length,"Got mutation results for handshake"),this.handshakeComplete_=!0,this.listener.onHandshakeComplete()},e.prototype.writeHandshake=function(){w(this.isOpen(),"Writing handshake requires an opened stream"),w(!this.handshakeComplete_,"Handshake already completed")
var t={}
t.database=this.serializer.encodedDatabaseId,this.sendRequest(t)},e.prototype.writeMutations=function(t){var e=this
w(this.isOpen(),"Writing mutations requires an opened stream"),w(this.handshakeComplete_,"Handshake must be complete before writing mutations"),w(this.lastStreamToken.length>0,"Trying to write mutation without a token")
var n={streamToken:this.lastStreamToken,writes:t.map(function(t){return e.serializer.toMutation(t)})}
this.sendRequest(n)},e}(wr),Sr=function(){function t(t,e,n,r){this.queue=t,this.connection=e,this.credentials=n,this.serializer=r}return t.prototype.newPersistentWriteStream=function(t){return new Er(this.queue,this.connection,this.credentials,this.serializer,t)},t.prototype.newPersistentWatchStream=function(t){return new br(this.queue,this.connection,this.credentials,this.serializer,t)},t.prototype.commit=function(t){var e=this,n={database:this.serializer.encodedDatabaseId,writes:t.map(function(t){return e.serializer.toMutation(t)})}
return this.invokeRPC("Commit",n).then(function(t){return e.serializer.fromWriteResults(t.writeResults,t.commitTime)})},t.prototype.lookup=function(t){var e=this,n={database:this.serializer.encodedDatabaseId,documents:t.map(function(t){return e.serializer.toName(t)})}
return this.invokeStreamingRPC("BatchGetDocuments",n).then(function(n){var r=Rt()
n.forEach(function(t){var n=e.serializer.fromMaybeDocument(t)
r=r.insert(n.key,n)})
var i=[]
return t.forEach(function(t){var e=r.get(t)
w(!!e,"Missing entity in write response for "+t),i.push(e)}),i})},t.prototype.invokeRPC=function(t,e){var n=this
return this.credentials.getToken().then(function(r){return n.connection.invokeRPC(t,e,r)}).catch(function(t){throw t.code===S.UNAUTHENTICATED&&n.credentials.invalidateToken(),t})},t.prototype.invokeStreamingRPC=function(t,e){var n=this
return this.credentials.getToken().then(function(r){return n.connection.invokeStreamingRPC(t,e,r)}).catch(function(t){throw t.code===S.UNAUTHENTICATED&&n.credentials.invalidateToken(),t})},t}(),Tr=function(){function t(t){this.datastore=t,this.readVersions=Pt(),this.mutations=[],this.committed=!1,this.writtenDocs=new Set}return t.prototype.lookup=function(t){var e=this
if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.")
return this.datastore.lookup(t).then(function(t){return t.forEach(function(t){t instanceof ye||t instanceof pe?e.recordVersion(t):v("Document in a transaction was a "+t.constructor.name)}),t})},t.prototype.set=function(t,e){this.write(e.toMutations(t,this.precondition(t))),this.writtenDocs.add(t)},t.prototype.update=function(t,e){try{this.write(e.toMutations(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t)},t.prototype.delete=function(t){this.write([new zn(t,this.precondition(t))]),this.writtenDocs.add(t)},t.prototype.commit=function(){var t=this
if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError
var e=this.readVersions
if(this.mutations.forEach(function(t){e=e.remove(t.key)}),!e.isEmpty())throw new T(S.INVALID_ARGUMENT,"Every document read in a transaction must also be written.")
return this.datastore.commit(this.mutations).then(function(){t.committed=!0})},t.prototype.recordVersion=function(t){var e
if(t instanceof pe)e=t.version
else{if(!(t instanceof ye))throw v("Document in a transaction was a "+t.constructor.name)
e=Tt.forDeletedDoc()}var n=this.readVersions.get(t.key)
if(null!==n){if(!e.isEqual(n))throw new T(S.ABORTED,"Document version changed between two reads.")}else this.readVersions=this.readVersions.insert(t.key,e)},t.prototype.precondition=function(t){var e=this.readVersions.get(t)
return!this.writtenDocs.has(t)&&e?Qn.updateTime(e):Qn.NONE},t.prototype.preconditionForUpdate=function(t){var e=this.readVersions.get(t)
if(!this.writtenDocs.has(t)&&e){if(e.isEqual(Tt.forDeletedDoc()))throw new T(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.")
return Qn.updateTime(e)}return Qn.exists(!0)},t.prototype.write=function(t){this.ensureCommitNotCalled(),this.mutations=this.mutations.concat(t)},t.prototype.ensureCommitNotCalled=function(){w(!this.committed,"A transaction object cannot be used after its update callback has been invoked.")},t}()
!function(t){t[t.Unknown=0]="Unknown",t[t.Online=1]="Online",t[t.Offline=2]="Offline"}(pr||(pr={})),function(t){t[t.RemoteStore=0]="RemoteStore",t[t.SharedClientState=1]="SharedClientState"}(yr||(yr={}))
var Ir,Cr=function(){function t(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state=pr.Unknown,this.watchStreamFailures=0,this.onlineStateTimer=null,this.shouldWarnClientIsOffline=!0}return t.prototype.handleWatchStreamStart=function(){var t=this
0===this.watchStreamFailures&&(this.setAndBroadcast(pr.Unknown),w(null===this.onlineStateTimer,"onlineStateTimer shouldn't be started yet"),this.onlineStateTimer=this.asyncQueue.enqueueAfterDelay($.OnlineStateTimeout,1e4,function(){return t.onlineStateTimer=null,w(t.state===pr.Unknown,"Timer should be canceled if we transitioned to a different state."),t.logClientOfflineWarningIfNecessary("Backend didn't respond within 10 seconds."),t.setAndBroadcast(pr.Offline),Promise.resolve()}))},t.prototype.handleWatchStreamFailure=function(t){this.state===pr.Online?(this.setAndBroadcast(pr.Unknown),w(0===this.watchStreamFailures,"watchStreamFailures must be 0"),w(null===this.onlineStateTimer,"onlineStateTimer must be null")):(this.watchStreamFailures++,this.watchStreamFailures>=1&&(this.clearOnlineStateTimer(),this.logClientOfflineWarningIfNecessary("Connection failed 1 times. Most recent error: "+t.toString()),this.setAndBroadcast(pr.Offline)))},t.prototype.set=function(t){this.clearOnlineStateTimer(),this.watchStreamFailures=0,t===pr.Online&&(this.shouldWarnClientIsOffline=!1),this.setAndBroadcast(t)},t.prototype.setAndBroadcast=function(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))},t.prototype.logClientOfflineWarningIfNecessary=function(t){var e="Could not reach Cloud Firestore backend. "+t+"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend."
this.shouldWarnClientIsOffline?(m(e),this.shouldWarnClientIsOffline=!1):y("OnlineStateTracker",e)},t.prototype.clearOnlineStateTimer=function(){null!==this.onlineStateTimer&&(this.onlineStateTimer.cancel(),this.onlineStateTimer=null)},t}()
function _r(t){switch(t){case S.OK:return v("Treated status OK as error")
case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1
case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0
default:return v("Unknown status code: "+t)}}function Dr(t){if(void 0===t)return m("GRPC error has no .code"),S.UNKNOWN
switch(t){case Ir.OK:return S.OK
case Ir.CANCELLED:return S.CANCELLED
case Ir.UNKNOWN:return S.UNKNOWN
case Ir.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED
case Ir.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED
case Ir.INTERNAL:return S.INTERNAL
case Ir.UNAVAILABLE:return S.UNAVAILABLE
case Ir.UNAUTHENTICATED:return S.UNAUTHENTICATED
case Ir.INVALID_ARGUMENT:return S.INVALID_ARGUMENT
case Ir.NOT_FOUND:return S.NOT_FOUND
case Ir.ALREADY_EXISTS:return S.ALREADY_EXISTS
case Ir.PERMISSION_DENIED:return S.PERMISSION_DENIED
case Ir.FAILED_PRECONDITION:return S.FAILED_PRECONDITION
case Ir.ABORTED:return S.ABORTED
case Ir.OUT_OF_RANGE:return S.OUT_OF_RANGE
case Ir.UNIMPLEMENTED:return S.UNIMPLEMENTED
case Ir.DATA_LOSS:return S.DATA_LOSS
default:return v("Unknown status code: "+t)}}function Nr(t){if(void 0===t)return Ir.OK
switch(t){case S.OK:return Ir.OK
case S.CANCELLED:return Ir.CANCELLED
case S.UNKNOWN:return Ir.UNKNOWN
case S.DEADLINE_EXCEEDED:return Ir.DEADLINE_EXCEEDED
case S.RESOURCE_EXHAUSTED:return Ir.RESOURCE_EXHAUSTED
case S.INTERNAL:return Ir.INTERNAL
case S.UNAVAILABLE:return Ir.UNAVAILABLE
case S.UNAUTHENTICATED:return Ir.UNAUTHENTICATED
case S.INVALID_ARGUMENT:return Ir.INVALID_ARGUMENT
case S.NOT_FOUND:return Ir.NOT_FOUND
case S.ALREADY_EXISTS:return Ir.ALREADY_EXISTS
case S.PERMISSION_DENIED:return Ir.PERMISSION_DENIED
case S.FAILED_PRECONDITION:return Ir.FAILED_PRECONDITION
case S.ABORTED:return Ir.ABORTED
case S.OUT_OF_RANGE:return Ir.OUT_OF_RANGE
case S.UNIMPLEMENTED:return Ir.UNIMPLEMENTED
case S.DATA_LOSS:return Ir.DATA_LOSS
default:return v("Unknown status code: "+t)}}!function(t){t[t.OK=0]="OK",t[t.CANCELLED=1]="CANCELLED",t[t.UNKNOWN=2]="UNKNOWN",t[t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",t[t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",t[t.NOT_FOUND=5]="NOT_FOUND",t[t.ALREADY_EXISTS=6]="ALREADY_EXISTS",t[t.PERMISSION_DENIED=7]="PERMISSION_DENIED",t[t.UNAUTHENTICATED=16]="UNAUTHENTICATED",t[t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",t[t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",t[t.ABORTED=10]="ABORTED",t[t.OUT_OF_RANGE=11]="OUT_OF_RANGE",t[t.UNIMPLEMENTED=12]="UNIMPLEMENTED",t[t.INTERNAL=13]="INTERNAL",t[t.UNAVAILABLE=14]="UNAVAILABLE",t[t.DATA_LOSS=15]="DATA_LOSS"}(Ir||(Ir={}))
var Ar,kr,Rr=function(){function t(t){this.comparator=t?function(e,n){return t(e,n)||ht.comparator(e.key,n.key)}:function(t,e){return ht.comparator(t.key,e.key)},this.keyedMap=Ot(),this.sortedSet=new It(this.comparator)}return t.emptySet=function(e){return new t(e.comparator)},t.prototype.has=function(t){return null!=this.keyedMap.get(t)},t.prototype.get=function(t){return this.keyedMap.get(t)},t.prototype.first=function(){return this.sortedSet.minKey()},t.prototype.last=function(){return this.sortedSet.maxKey()},t.prototype.isEmpty=function(){return this.sortedSet.isEmpty()},t.prototype.indexOf=function(t){var e=this.keyedMap.get(t)
return e?this.sortedSet.indexOf(e):-1},Object.defineProperty(t.prototype,"size",{get:function(){return this.sortedSet.size},enumerable:!0,configurable:!0}),t.prototype.forEach=function(t){this.sortedSet.inorderTraversal(function(e,n){return t(e),!1})},t.prototype.add=function(t){var e=this.delete(t.key)
return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))},t.prototype.delete=function(t){var e=this.get(t)
return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this},t.prototype.isEqual=function(e){if(!(e instanceof t))return!1
if(this.size!==e.size)return!1
for(var n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();n.hasNext();){var i=n.getNext().key,o=r.getNext().key
if(!i.isEqual(o))return!1}return!0},t.prototype.toString=function(){var t=[]
return this.forEach(function(e){t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"},t.prototype.copy=function(e,n){var r=new t
return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r},t}()
!function(t){t[t.Added=0]="Added",t[t.Removed=1]="Removed",t[t.Modified=2]="Modified",t[t.Metadata=3]="Metadata"}(Ar||(Ar={})),function(t){t[t.Local=0]="Local",t[t.Synced=1]="Synced"}(kr||(kr={}))
var Mr,xr=function(){function t(){this.changeMap=new It(ht.comparator)}return t.prototype.track=function(t){var e=t.doc.key,n=this.changeMap.get(e)
n?t.type!==Ar.Added&&n.type===Ar.Metadata?this.changeMap=this.changeMap.insert(e,t):t.type===Ar.Metadata&&n.type!==Ar.Removed?this.changeMap=this.changeMap.insert(e,{type:n.type,doc:t.doc}):t.type===Ar.Modified&&n.type===Ar.Modified?this.changeMap=this.changeMap.insert(e,{type:Ar.Modified,doc:t.doc}):t.type===Ar.Modified&&n.type===Ar.Added?this.changeMap=this.changeMap.insert(e,{type:Ar.Added,doc:t.doc}):t.type===Ar.Removed&&n.type===Ar.Added?this.changeMap=this.changeMap.remove(e):t.type===Ar.Removed&&n.type===Ar.Modified?this.changeMap=this.changeMap.insert(e,{type:Ar.Removed,doc:n.doc}):t.type===Ar.Added&&n.type===Ar.Removed?this.changeMap=this.changeMap.insert(e,{type:Ar.Modified,doc:t.doc}):v("unsupported combination of changes: "+JSON.stringify(t)+" after "+JSON.stringify(n)):this.changeMap=this.changeMap.insert(e,t)},t.prototype.getChanges=function(){var t=[]
return this.changeMap.inorderTraversal(function(e,n){t.push(n)}),t},t}(),Or=function(){function t(t,e,n,r,i,o,a,s){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=s}return t.fromInitialDocuments=function(e,n,r,i){var o=[]
return n.forEach(function(t){o.push({type:Ar.Added,doc:t})}),new t(e,n,Rr.emptySet(n),o,r,i,!0,!1)},Object.defineProperty(t.prototype,"hasPendingWrites",{get:function(){return!this.mutatedKeys.isEmpty()},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&this.query.isEqual(t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1
var e=this.docChanges,n=t.docChanges
if(e.length!==n.length)return!1
for(var r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1
return!0},t}(),Lr=function(){function t(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}return t.createSynthesizedRemoteEventForCurrentChange=function(e,n){var r,i=((r={})[e]=Pr.createSynthesizedTargetChangeForCurrentChange(e,n),r)
return new t(Tt.MIN,i,Ut(),Rt(),Ft())},t}(),Pr=function(){function t(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}return t.createSynthesizedTargetChangeForCurrentChange=function(e,n){return new t(E(),n,Ft(),Ft(),Ft())},t}(),qr=function(t,e,n,r){this.updatedTargetIds=t,this.removedTargetIds=e,this.key=n,this.newDoc=r},Fr=function(t,e){this.targetId=t,this.existenceFilter=e}
!function(t){t[t.NoChange=0]="NoChange",t[t.Added=1]="Added",t[t.Removed=2]="Removed",t[t.Current=3]="Current",t[t.Reset=4]="Reset"}(Mr||(Mr={}))
var Vr=function(t,e,n,r){void 0===n&&(n=E()),void 0===r&&(r=null),this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r},Ur=function(){function t(){this.pendingResponses=0,this.documentChanges=Kr(),this._resumeToken=E(),this._current=!1,this._hasPendingChanges=!0}return Object.defineProperty(t.prototype,"current",{get:function(){return this._current},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"resumeToken",{get:function(){return this._resumeToken},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPending",{get:function(){return 0!==this.pendingResponses},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasPendingChanges",{get:function(){return this._hasPendingChanges},enumerable:!0,configurable:!0}),t.prototype.updateResumeToken=function(t){t.length>0&&(this._hasPendingChanges=!0,this._resumeToken=t)},t.prototype.toTargetChange=function(){var t=Ft(),e=Ft(),n=Ft()
return this.documentChanges.forEach(function(r,i){switch(i){case Ar.Added:t=t.add(r)
break
case Ar.Modified:e=e.add(r)
break
case Ar.Removed:n=n.add(r)
break
default:v("Encountered invalid change type: "+i)}}),new Pr(this._resumeToken,this._current,t,e,n)},t.prototype.clearPendingChanges=function(){this._hasPendingChanges=!1,this.documentChanges=Kr()},t.prototype.addDocumentChange=function(t,e){this._hasPendingChanges=!0,this.documentChanges=this.documentChanges.insert(t,e)},t.prototype.removeDocumentChange=function(t){this._hasPendingChanges=!0,this.documentChanges=this.documentChanges.remove(t)},t.prototype.recordPendingTargetRequest=function(){this.pendingResponses+=1},t.prototype.recordTargetResponse=function(){this.pendingResponses-=1},t.prototype.markCurrent=function(){this._hasPendingChanges=!0,this._current=!0},t}(),Br=function(){function t(t){this.metadataProvider=t,this.targetStates={},this.pendingDocumentUpdates=Rt(),this.pendingDocumentTargetMapping=Qr(),this.pendingTargetResets=new Nt(H)}return t.prototype.handleDocumentChange=function(t){var e,n,r,i
try{for(var o=s.__values(t.updatedTargetIds),a=o.next();!a.done;a=o.next()){var u=a.value
t.newDoc instanceof pe?this.addDocumentToTarget(u,t.newDoc):t.newDoc instanceof ye&&this.removeDocumentFromTarget(u,t.key,t.newDoc)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}try{for(var c=s.__values(t.removedTargetIds),h=c.next();!h.done;h=c.next())u=h.value,this.removeDocumentFromTarget(u,t.key,t.newDoc)}catch(t){r={error:t}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}},t.prototype.handleTargetChange=function(t){var e=this
this.forEachTarget(t,function(n){var r=e.ensureTargetState(n)
switch(t.state){case Mr.NoChange:e.isActiveTarget(n)&&r.updateResumeToken(t.resumeToken)
break
case Mr.Added:r.recordTargetResponse(),r.isPending||r.clearPendingChanges(),r.updateResumeToken(t.resumeToken)
break
case Mr.Removed:r.recordTargetResponse(),r.isPending||e.removeTarget(n),w(!t.cause,"WatchChangeAggregator does not handle errored targets")
break
case Mr.Current:e.isActiveTarget(n)&&(r.markCurrent(),r.updateResumeToken(t.resumeToken))
break
case Mr.Reset:e.isActiveTarget(n)&&(e.resetTarget(n),r.updateResumeToken(t.resumeToken))
break
default:v("Unknown target watch change state: "+t.state)}})},t.prototype.forEachTarget=function(t,e){t.targetIds.length>0?t.targetIds.forEach(e):D(this.targetStates,e)},t.prototype.handleExistenceFilter=function(t){var e=t.targetId,n=t.existenceFilter.count,r=this.queryDataForActiveTarget(e)
if(r){var i=r.query
if(i.isDocumentQuery())if(0===n){var o=new ht(i.path)
this.removeDocumentFromTarget(e,o,new ye(o,Tt.forDeletedDoc()))}else w(1===n,"Single document existence filter with count: "+n)
else this.getCurrentDocumentCountForTarget(e)!==n&&(this.resetTarget(e),this.pendingTargetResets=this.pendingTargetResets.add(e))}},t.prototype.createRemoteEvent=function(t){var e=this,n={}
D(this.targetStates,function(r,i){var o=e.queryDataForActiveTarget(r)
if(o){if(i.current&&o.query.isDocumentQuery()){var a=new ht(o.query.path)
null!==e.pendingDocumentUpdates.get(a)||e.targetContainsDocument(r,a)||e.removeDocumentFromTarget(r,a,new ye(a,t))}i.hasPendingChanges&&(n[r]=i.toTargetChange(),i.clearPendingChanges())}})
var r=Ft()
this.pendingDocumentTargetMapping.forEach(function(t,n){var i=!0
n.forEachWhile(function(t){var n=e.queryDataForActiveTarget(t)
return!n||n.purpose===We.LimboResolution||(i=!1,!1)}),i&&(r=r.add(t))})
var i=new Lr(t,n,this.pendingTargetResets,this.pendingDocumentUpdates,r)
return this.pendingDocumentUpdates=Rt(),this.pendingDocumentTargetMapping=Qr(),this.pendingTargetResets=new Nt(H),i},t.prototype.addDocumentToTarget=function(t,e){if(this.isActiveTarget(t)){var n=this.targetContainsDocument(t,e.key)?Ar.Modified:Ar.Added
this.ensureTargetState(t).addDocumentChange(e.key,n),this.pendingDocumentUpdates=this.pendingDocumentUpdates.insert(e.key,e),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(e.key,this.ensureDocumentTargetMapping(e.key).add(t))}},t.prototype.removeDocumentFromTarget=function(t,e,n){if(this.isActiveTarget(t)){var r=this.ensureTargetState(t)
this.targetContainsDocument(t,e)?r.addDocumentChange(e,Ar.Removed):r.removeDocumentChange(e),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(e,this.ensureDocumentTargetMapping(e).delete(t)),n&&(this.pendingDocumentUpdates=this.pendingDocumentUpdates.insert(e,n))}},t.prototype.removeTarget=function(t){delete this.targetStates[t]},t.prototype.getCurrentDocumentCountForTarget=function(t){var e=this.ensureTargetState(t).toTargetChange()
return this.metadataProvider.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size},t.prototype.recordPendingTargetRequest=function(t){this.ensureTargetState(t).recordPendingTargetRequest()},t.prototype.ensureTargetState=function(t){return this.targetStates[t]||(this.targetStates[t]=new Ur),this.targetStates[t]},t.prototype.ensureDocumentTargetMapping=function(t){var e=this.pendingDocumentTargetMapping.get(t)
return e||(e=new Nt(H),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(t,e)),e},t.prototype.isActiveTarget=function(t){return null!==this.queryDataForActiveTarget(t)},t.prototype.queryDataForActiveTarget=function(t){var e=this.targetStates[t]
return e&&e.isPending?null:this.metadataProvider.getQueryDataForTarget(t)},t.prototype.resetTarget=function(t){var e=this
w(!this.targetStates[t].isPending,"Should only reset active targets"),this.targetStates[t]=new Ur,this.metadataProvider.getRemoteKeysForTarget(t).forEach(function(n){e.removeDocumentFromTarget(t,n,null)})},t.prototype.targetContainsDocument=function(t,e){return this.metadataProvider.getRemoteKeysForTarget(t).has(e)},t}()
function Qr(){return new It(ht.comparator)}function Kr(){return new It(ht.comparator)}var Gr="RemoteStore",Wr=function(){function t(t,e,n,r,i){var o=this
this.localStore=t,this.datastore=e,this.writePipeline=[],this.listenTargets={},this.watchChangeAggregator=null,this.networkEnabled=!1,this.isPrimary=!1,this.connectivityMonitor=i,this.connectivityMonitor.addCallback(function(t){n.enqueueAndForget(function(){return s.__awaiter(o,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.canUseNetwork()?(y(Gr,"Restarting streams for network reachability change."),[4,this.restartNetwork()]):[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})})}),this.onlineStateTracker=new Cr(n,r),this.watchStream=this.datastore.newPersistentWatchStream({onOpen:this.onWatchStreamOpen.bind(this),onClose:this.onWatchStreamClose.bind(this),onWatchChange:this.onWatchStreamChange.bind(this)}),this.writeStream=this.datastore.newPersistentWriteStream({onOpen:this.onWriteStreamOpen.bind(this),onClose:this.onWriteStreamClose.bind(this),onHandshakeComplete:this.onWriteHandshakeComplete.bind(this),onMutationResult:this.onMutationResult.bind(this)})}return t.prototype.start=function(){return this.enableNetwork()},t.prototype.enableNetwork=function(){return s.__awaiter(this,void 0,void 0,function(){var t
return s.__generator(this,function(e){switch(e.label){case 0:return this.networkEnabled=!0,this.canUseNetwork()?(t=this.writeStream,[4,this.localStore.getLastStreamToken()]):[3,3]
case 1:return t.lastStreamToken=e.sent(),this.shouldStartWatchStream()?this.startWatchStream():this.onlineStateTracker.set(pr.Unknown),[4,this.fillWritePipeline()]
case 2:e.sent(),e.label=3
case 3:return[2]}})})},t.prototype.disableNetwork=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.networkEnabled=!1,[4,this.disableNetworkInternal()]
case 1:return t.sent(),this.onlineStateTracker.set(pr.Offline),[2]}})})},t.prototype.disableNetworkInternal=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return[4,this.writeStream.stop()]
case 1:return t.sent(),[4,this.watchStream.stop()]
case 2:return t.sent(),this.writePipeline.length>0&&(y(Gr,"Stopping write stream with "+this.writePipeline.length+" pending writes"),this.writePipeline=[]),this.cleanUpWatchStreamState(),[2]}})})},t.prototype.shutdown=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return y(Gr,"RemoteStore shutting down."),this.networkEnabled=!1,[4,this.disableNetworkInternal()]
case 1:return t.sent(),this.connectivityMonitor.shutdown(),this.onlineStateTracker.set(pr.Unknown),[2]}})})},t.prototype.listen=function(t){w(!C(this.listenTargets,t.targetId),"listen called with duplicate targetId!"),this.listenTargets[t.targetId]=t,this.shouldStartWatchStream()?this.startWatchStream():this.watchStream.isOpen()&&this.sendWatchRequest(t)},t.prototype.unlisten=function(t){w(C(this.listenTargets,t),"unlisten called without assigned target ID!"),delete this.listenTargets[t],this.watchStream.isOpen()&&this.sendUnwatchRequest(t),A(this.listenTargets)&&(this.watchStream.isOpen()?this.watchStream.markIdle():this.canUseNetwork()&&this.onlineStateTracker.set(pr.Unknown))},t.prototype.getQueryDataForTarget=function(t){return this.listenTargets[t]||null},t.prototype.getRemoteKeysForTarget=function(t){return this.syncEngine.getRemoteKeysForTarget(t)},t.prototype.sendWatchRequest=function(t){this.watchChangeAggregator.recordPendingTargetRequest(t.targetId),this.watchStream.watch(t)},t.prototype.sendUnwatchRequest=function(t){this.watchChangeAggregator.recordPendingTargetRequest(t),this.watchStream.unwatch(t)},t.prototype.startWatchStream=function(){w(this.shouldStartWatchStream(),"startWatchStream() called when shouldStartWatchStream() is false."),this.watchChangeAggregator=new Br(this),this.watchStream.start(),this.onlineStateTracker.handleWatchStreamStart()},t.prototype.shouldStartWatchStream=function(){return this.canUseNetwork()&&!this.watchStream.isStarted()&&!A(this.listenTargets)},t.prototype.canUseNetwork=function(){return this.isPrimary&&this.networkEnabled},t.prototype.cleanUpWatchStreamState=function(){this.watchChangeAggregator=null},t.prototype.onWatchStreamOpen=function(){return s.__awaiter(this,void 0,void 0,function(){var t=this
return s.__generator(this,function(e){return D(this.listenTargets,function(e,n){t.sendWatchRequest(n)}),[2]})})},t.prototype.onWatchStreamClose=function(t){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){return void 0===t&&w(!this.shouldStartWatchStream(),"Watch stream was stopped gracefully while still needed."),this.cleanUpWatchStreamState(),this.shouldStartWatchStream()?(this.onlineStateTracker.handleWatchStreamFailure(t),this.startWatchStream()):this.onlineStateTracker.set(pr.Unknown),[2]})})},t.prototype.onWatchStreamChange=function(t,e){return s.__awaiter(this,void 0,void 0,function(){var n
return s.__generator(this,function(r){switch(r.label){case 0:return this.onlineStateTracker.set(pr.Online),t instanceof Vr&&t.state===Mr.Removed&&t.cause?[2,this.handleTargetError(t)]:(t instanceof qr?this.watchChangeAggregator.handleDocumentChange(t):t instanceof Fr?this.watchChangeAggregator.handleExistenceFilter(t):(w(t instanceof Vr,"Expected watchChange to be an instance of WatchTargetChange"),this.watchChangeAggregator.handleTargetChange(t)),e.isEqual(Tt.MIN)?[3,3]:[4,this.localStore.getLastRemoteSnapshotVersion()])
case 1:return n=r.sent(),e.compareTo(n)>=0?[4,this.raiseWatchSnapshot(e)]:[3,3]
case 2:r.sent(),r.label=3
case 3:return[2]}})})},t.prototype.raiseWatchSnapshot=function(t){var e=this
w(!t.isEqual(Tt.MIN),"Can't raise event for unknown SnapshotVersion")
var n=this.watchChangeAggregator.createRemoteEvent(t)
return D(n.targetChanges,function(n,r){if(r.resumeToken.length>0){var i=e.listenTargets[n]
i&&(e.listenTargets[n]=i.copy({resumeToken:r.resumeToken,snapshotVersion:t}))}}),n.targetMismatches.forEach(function(t){var n=e.listenTargets[t]
if(n){e.listenTargets[t]=n.copy({resumeToken:E()}),e.sendUnwatchRequest(t)
var r=new tn(n.query,t,We.ExistenceFilterMismatch,n.sequenceNumber)
e.sendWatchRequest(r)}}),this.syncEngine.applyRemoteEvent(n)},t.prototype.handleTargetError=function(t){var e=this
w(!!t.cause,"Handling target error without a cause")
var n=t.cause,r=Promise.resolve()
return t.targetIds.forEach(function(t){r=r.then(function(){return s.__awaiter(e,void 0,void 0,function(){return s.__generator(this,function(e){return C(this.listenTargets,t)?(delete this.listenTargets[t],this.watchChangeAggregator.removeTarget(t),[2,this.syncEngine.rejectListen(t,n)]):[2]})})})}),r},t.prototype.fillWritePipeline=function(){return s.__awaiter(this,void 0,void 0,function(){var t,e
return s.__generator(this,function(n){switch(n.label){case 0:return this.canAddToWritePipeline()?(t=this.writePipeline.length>0?this.writePipeline[this.writePipeline.length-1].batchId:-1,[4,this.localStore.nextMutationBatch(t)]):[3,4]
case 1:return null!==(e=n.sent())?[3,2]:(0===this.writePipeline.length&&this.writeStream.markIdle(),[3,4])
case 2:return this.addToWritePipeline(e),[4,this.fillWritePipeline()]
case 3:n.sent(),n.label=4
case 4:return this.shouldStartWriteStream()&&this.startWriteStream(),[2]}})})},t.prototype.canAddToWritePipeline=function(){return this.canUseNetwork()&&this.writePipeline.length<10},t.prototype.outstandingWrites=function(){return this.writePipeline.length},t.prototype.addToWritePipeline=function(t){w(this.canAddToWritePipeline(),"addToWritePipeline called when pipeline is full"),this.writePipeline.push(t),this.writeStream.isOpen()&&this.writeStream.handshakeComplete&&this.writeStream.writeMutations(t.mutations)},t.prototype.shouldStartWriteStream=function(){return this.canUseNetwork()&&!this.writeStream.isStarted()&&this.writePipeline.length>0},t.prototype.startWriteStream=function(){w(this.shouldStartWriteStream(),"startWriteStream() called when shouldStartWriteStream() is false."),this.writeStream.start()},t.prototype.onWriteStreamOpen=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){return this.writeStream.writeHandshake(),[2]})})},t.prototype.onWriteHandshakeComplete=function(){var t=this
return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function(){var e,n
try{for(var r=s.__values(t.writePipeline),i=r.next();!i.done;i=r.next()){var o=i.value
t.writeStream.writeMutations(o.mutations)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}).catch(yn)},t.prototype.onMutationResult=function(t,e){var n=this
w(this.writePipeline.length>0,"Got result for empty write pipeline")
var r=this.writePipeline.shift(),i=Qt.from(r,t,e,this.writeStream.lastStreamToken)
return this.syncEngine.applySuccessfulWrite(i).then(function(){return n.fillWritePipeline()})},t.prototype.onWriteStreamClose=function(t){return s.__awaiter(this,void 0,void 0,function(){var e=this
return s.__generator(this,function(n){return void 0===t&&w(!this.shouldStartWriteStream(),"Write stream was stopped gracefully while still needed."),t&&this.writePipeline.length>0?[2,(this.writeStream.handshakeComplete?this.handleWriteError(t):this.handleHandshakeError(t)).then(function(){e.shouldStartWriteStream()&&e.startWriteStream()})]:[2]})})},t.prototype.handleHandshakeError=function(t){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){return _r(t.code)?(y(Gr,"RemoteStore error before completed handshake; resetting stream token: ",this.writeStream.lastStreamToken),this.writeStream.lastStreamToken=E(),[2,this.localStore.setLastStreamToken(E()).catch(yn)]):[2]})})},t.prototype.handleWriteError=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n=this
return s.__generator(this,function(r){return _r(i=t.code)&&i!==S.ABORTED?(e=this.writePipeline.shift(),this.writeStream.inhibitBackoff(),[2,this.syncEngine.rejectFailedWrite(e.batchId,t).then(function(){return n.fillWritePipeline()})]):[2]
var i})})},t.prototype.createTransaction=function(){return new Tr(this.datastore)},t.prototype.restartNetwork=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.networkEnabled=!1,[4,this.disableNetworkInternal()]
case 1:return t.sent(),this.onlineStateTracker.set(pr.Unknown),[4,this.enableNetwork()]
case 2:return t.sent(),[2]}})})},t.prototype.handleCredentialChange=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.canUseNetwork()?(y(Gr,"RemoteStore restarting streams for new credential"),[4,this.restartNetwork()]):[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}})})},t.prototype.applyPrimaryState=function(t){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){switch(e.label){case 0:return this.isPrimary=t,t&&this.networkEnabled?[4,this.enableNetwork()]:[3,2]
case 1:return e.sent(),[3,4]
case 2:return t?[3,4]:[4,this.disableNetworkInternal()]
case 3:e.sent(),this.onlineStateTracker.set(pr.Unknown),e.label=4
case 4:return[2]}})})},t}(),jr=function(){function t(t,e){if(R("GeoPoint",arguments,2),O("GeoPoint","number",1,t),O("GeoPoint","number",2,e),!isFinite(t)||t<-90||t>90)throw new T(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t)
if(!isFinite(e)||e<-180||e>180)throw new T(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e)
this._lat=t,this._long=e}return Object.defineProperty(t.prototype,"latitude",{get:function(){return this._lat},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"longitude",{get:function(){return this._long},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(t){return this._lat===t._lat&&this._long===t._long},t.prototype._compareTo=function(t){return H(this._lat,t._lat)||H(this._long,t._long)},t}(),zr=function(){function t(t,e,n,r,i,o,a){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o=null),void 0===a&&(a=null),this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.memoizedCanonicalId=null,this.memoizedOrderBy=null,this.startAt&&this.assertValidBound(this.startAt),this.endAt&&this.assertValidBound(this.endAt)}return t.atPath=function(e){return new t(e)},Object.defineProperty(t.prototype,"orderBy",{get:function(){var t,e
if(null===this.memoizedOrderBy){var n=this.getInequalityFilterField(),r=this.getFirstOrderByField()
if(null!==n&&null===r)n.isKeyField()?this.memoizedOrderBy=[oi]:this.memoizedOrderBy=[new ii(n),oi]
else{w(null===n||null!==r&&n.isEqual(r),"First orderBy should match inequality field."),this.memoizedOrderBy=[]
var i=!1
try{for(var o=s.__values(this.explicitOrderBy),a=o.next();!a.done;a=o.next()){var u=a.value
this.memoizedOrderBy.push(u),u.field.isKeyField()&&(i=!0)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}if(!i){var c=this.explicitOrderBy.length>0?this.explicitOrderBy[this.explicitOrderBy.length-1].dir:ni.ASCENDING
this.memoizedOrderBy.push(c===ni.ASCENDING?oi:ai)}}}return this.memoizedOrderBy},enumerable:!0,configurable:!0}),t.prototype.addFilter=function(e){w(null==this.getInequalityFilterField()||!(e instanceof Xr)||!e.isInequality()||e.field.isEqual(this.getInequalityFilterField()),"Query must only have one inequality field."),w(!this.isDocumentQuery(),"No filtering allowed for document query")
var n=this.filters.concat([e])
return new t(this.path,this.collectionGroup,this.explicitOrderBy.slice(),n,this.limit,this.startAt,this.endAt)},t.prototype.addOrderBy=function(e){w(!this.startAt&&!this.endAt,"Bounds must be set after orderBy")
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
i=i||u.field.isKeyField()}}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return w(i,"orderBy used that doesn't compare on key field"),0},t.prototype.matches=function(t){return this.matchesPathAndCollectionGroup(t)&&this.matchesOrderBy(t)&&this.matchesFilters(t)&&this.matchesBounds(t)},t.prototype.hasLimit=function(){return!hr(this.limit)},t.prototype.getFirstOrderByField=function(){return this.explicitOrderBy.length>0?this.explicitOrderBy[0].field:null},t.prototype.getInequalityFilterField=function(){var t,e
try{for(var n=s.__values(this.filters),r=n.next();!r.done;r=n.next()){var i=r.value
if(i instanceof Xr&&i.isInequality())return i.field}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}return null},t.prototype.findFilterOperator=function(t){var e,n
try{for(var r=s.__values(this.filters),i=r.next();!i.done;i=r.next()){var o=i.value
if(o instanceof Xr&&t.indexOf(o.op)>=0)return o.op}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return null},t.prototype.isDocumentQuery=function(){return ht.isDocumentKey(this.path)&&null===this.collectionGroup&&0===this.filters.length},t.prototype.isCollectionGroupQuery=function(){return null!==this.collectionGroup},t.prototype.matchesPathAndCollectionGroup=function(t){var e=t.key.path
return null!==this.collectionGroup?t.key.hasCollectionId(this.collectionGroup)&&this.path.isPrefixOf(e):ht.isDocumentKey(this.path)?this.path.isEqual(e):this.path.isImmediateParentOf(e)},t.prototype.matchesOrderBy=function(t){var e,n
try{for(var r=s.__values(this.explicitOrderBy),i=r.next();!i.done;i=r.next()){var o=i.value
if(!o.field.isKeyField()&&null===t.field(o.field))return!1}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return!0},t.prototype.matchesFilters=function(t){var e,n
try{for(var r=s.__values(this.filters),i=r.next();!i.done;i=r.next())if(!i.value.matches(t))return!1}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return!0},t.prototype.matchesBounds=function(t){return!(this.startAt&&!this.startAt.sortsBeforeDocument(this.orderBy,t)||this.endAt&&this.endAt.sortsBeforeDocument(this.orderBy,t))},t.prototype.assertValidBound=function(t){w(t.position.length<=this.orderBy.length,"Bound is longer than orderBy")},t}(),Hr=function(){},Yr=function(){function t(t){this.name=t}return t.fromString=function(e){switch(e){case"<":return t.LESS_THAN
case"<=":return t.LESS_THAN_OR_EQUAL
case"==":return t.EQUAL
case">=":return t.GREATER_THAN_OR_EQUAL
case">":return t.GREATER_THAN
case"array-contains":return t.ARRAY_CONTAINS
case"in":return t.IN
case"array-contains-any":return t.ARRAY_CONTAINS_ANY
default:return v("Unknown FieldFilter operator: "+e)}},t.prototype.toString=function(){return this.name},t.prototype.isEqual=function(t){return this.name===t.name},t.LESS_THAN=new t("<"),t.LESS_THAN_OR_EQUAL=new t("<="),t.EQUAL=new t("=="),t.GREATER_THAN=new t(">"),t.GREATER_THAN_OR_EQUAL=new t(">="),t.ARRAY_CONTAINS=new t("array-contains"),t.IN=new t("in"),t.ARRAY_CONTAINS_ANY=new t("array-contains-any"),t}(),Xr=function(t){function e(e,n,r){var i=t.call(this)||this
return i.field=e,i.op=n,i.value=r,i}return s.__extends(e,t),e.create=function(t,n,r){if(t.isKeyField())return n===Yr.IN?(w(r instanceof Fn,"Comparing on key with IN, but filter value not an ArrayValue"),w(r.internalValue.every(function(t){return t instanceof Ln}),"Comparing on key with IN, but an array value was not a RefValue"),new Zr(t,r)):(w(r instanceof Ln,"Comparing on key, but filter value not a RefValue"),w(n!==Yr.ARRAY_CONTAINS&&n!==Yr.ARRAY_CONTAINS_ANY,"'"+n.toString()+"' queries don't make sense on document keys."),new Jr(t,n,r))
if(r.isEqual(In.INSTANCE)){if(n!==Yr.EQUAL)throw new T(S.INVALID_ARGUMENT,"Invalid query. Null supports only equality comparisons.")
return new e(t,n,r)}if(r.isEqual(kn.NAN)){if(n!==Yr.EQUAL)throw new T(S.INVALID_ARGUMENT,"Invalid query. NaN supports only equality comparisons.")
return new e(t,n,r)}return n===Yr.ARRAY_CONTAINS?new $r(t,r):n===Yr.IN?(w(r instanceof Fn,"IN filter has invalid value: "+r.toString()),new ti(t,r)):n===Yr.ARRAY_CONTAINS_ANY?(w(r instanceof Fn,"ARRAY_CONTAINS_ANY filter has invalid value: "+r.toString()),new ei(t,r)):new e(t,n,r)},e.prototype.matches=function(t){var e=t.field(this.field)
return null!==e&&this.value.typeOrder===e.typeOrder&&this.matchesComparison(e.compareTo(this.value))},e.prototype.matchesComparison=function(t){switch(this.op){case Yr.LESS_THAN:return t<0
case Yr.LESS_THAN_OR_EQUAL:return t<=0
case Yr.EQUAL:return 0===t
case Yr.GREATER_THAN:return t>0
case Yr.GREATER_THAN_OR_EQUAL:return t>=0
default:return v("Unknown FieldFilter operator: "+this.op)}},e.prototype.isInequality=function(){return[Yr.LESS_THAN,Yr.LESS_THAN_OR_EQUAL,Yr.GREATER_THAN,Yr.GREATER_THAN_OR_EQUAL].indexOf(this.op)>=0},e.prototype.canonicalId=function(){return this.field.canonicalString()+this.op.toString()+this.value.toString()},e.prototype.isEqual=function(t){return t instanceof e&&this.op.isEqual(t.op)&&this.field.isEqual(t.field)&&this.value.isEqual(t.value)},e.prototype.toString=function(){return this.field.canonicalString()+" "+this.op+" "+this.value.value()},e}(Hr),Jr=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.matches=function(t){var e=this.value,n=ht.comparator(t.key,e.key)
return this.matchesComparison(n)},e}(Xr),Zr=function(t){function e(e,n){var r=t.call(this,e,Yr.IN,n)||this
return r.value=n,r}return s.__extends(e,t),e.prototype.matches=function(t){return this.value.internalValue.some(function(e){return t.key.isEqual(e.key)})},e}(Xr),$r=function(t){function e(e,n){return t.call(this,e,Yr.ARRAY_CONTAINS,n)||this}return s.__extends(e,t),e.prototype.matches=function(t){var e=t.field(this.field)
return e instanceof Fn&&e.contains(this.value)},e}(Xr),ti=function(t){function e(e,n){var r=t.call(this,e,Yr.IN,n)||this
return r.value=n,r}return s.__extends(e,t),e.prototype.matches=function(t){var e=this.value,n=t.field(this.field)
return null!==n&&e.contains(n)},e}(Xr),ei=function(t){function e(e,n){var r=t.call(this,e,Yr.ARRAY_CONTAINS_ANY,n)||this
return r.value=n,r}return s.__extends(e,t),e.prototype.matches=function(t){var e=this,n=t.field(this.field)
return n instanceof Fn&&n.internalValue.some(function(t){return e.value.contains(t)})},e}(Xr),ni=function(){function t(t){this.name=t}return t.prototype.toString=function(){return this.name},t.ASCENDING=new t("asc"),t.DESCENDING=new t("desc"),t}(),ri=function(){function t(t,e){this.position=t,this.before=e}return t.prototype.canonicalId=function(){var t,e,n=this.before?"b:":"a:"
try{for(var r=s.__values(this.position),i=r.next();!i.done;i=r.next())n+=i.value.toString()}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}return n},t.prototype.sortsBeforeDocument=function(t,e){w(this.position.length<=t.length,"Bound has more components than query's orderBy")
for(var n=0,r=0;r<this.position.length;r++){var i=t[r],o=this.position[r]
if(i.field.isKeyField())w(o instanceof Ln,"Bound has a non-key value where the key path is being used."),n=ht.comparator(o.key,e.key)
else{var a=e.field(i.field)
w(void 0!==a,"Field should exist since document matched the orderBy already."),n=o.compareTo(a)}if(i.dir===ni.DESCENDING&&(n*=-1),0!==n)break}return this.before?n<=0:n<0},t.prototype.isEqual=function(t){if(null===t)return!1
if(this.before!==t.before||this.position.length!==t.position.length)return!1
for(var e=0;e<this.position.length;e++){var n=this.position[e],r=t.position[e]
if(!n.isEqual(r))return!1}return!0},t}(),ii=function(){function t(t,e){this.field=t,void 0===e&&(e=ni.ASCENDING),this.dir=e,this.isKeyOrderBy=t.isKeyField()}return t.prototype.compare=function(t,e){var n=this.isKeyOrderBy?pe.compareByKey(t,e):pe.compareByField(this.field,t,e)
switch(this.dir){case ni.ASCENDING:return n
case ni.DESCENDING:return-1*n
default:return v("Unknown direction: "+this.dir)}},t.prototype.canonicalId=function(){return this.field.canonicalString()+this.dir.toString()},t.prototype.toString=function(){return this.field.canonicalString()+" ("+this.dir+")"},t.prototype.isEqual=function(t){return this.dir===t.dir&&this.field.isEqual(t.field)},t}(),oi=new ii(ct.keyField(),ni.ASCENDING),ai=new ii(ct.keyField(),ni.DESCENDING),si=function(){function t(){}return t.prototype.applyToLocalView=function(t,e){return new xn(e,t)},t.prototype.applyToRemoteDocument=function(t,e){return e},t.prototype.computeBaseValue=function(t){return null},t.prototype.isEqual=function(e){return e instanceof t},t.instance=new t,t}(),ui=function(){function t(t){this.elements=t}return t.prototype.applyToLocalView=function(t,e){return this.apply(t)},t.prototype.applyToRemoteDocument=function(t,e){return this.apply(t)},t.prototype.apply=function(t){var e,n,r=li(t),i=function(t){r.find(function(e){return e.isEqual(t)})||r.push(t)}
try{for(var o=s.__values(this.elements),a=o.next();!a.done;a=o.next())i(a.value)}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return new Fn(r)},t.prototype.computeBaseValue=function(t){return null},t.prototype.isEqual=function(e){return e instanceof t&&Y(e.elements,this.elements)},t}(),ci=function(){function t(t){this.elements=t}return t.prototype.applyToLocalView=function(t,e){return this.apply(t)},t.prototype.applyToRemoteDocument=function(t,e){return this.apply(t)},t.prototype.apply=function(t){var e,n,r=li(t),i=function(t){r=r.filter(function(e){return!e.isEqual(t)})}
try{for(var o=s.__values(this.elements),a=o.next();!a.done;a=o.next())i(a.value)}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return new Fn(r)},t.prototype.computeBaseValue=function(t){return null},t.prototype.isEqual=function(e){return e instanceof t&&Y(e.elements,this.elements)},t}(),hi=function(){function t(t){this.operand=t}return t.prototype.applyToLocalView=function(t,e){var n=this.computeBaseValue(t)
if(n instanceof An&&this.operand instanceof An){var r=n.internalValue+this.operand.internalValue
return new An(r)}return r=n.internalValue+this.operand.internalValue,new kn(r)},t.prototype.applyToRemoteDocument=function(t,e){return w(null!==e,"Didn't receive transformResult for NUMERIC_ADD transform"),e},t.prototype.computeBaseValue=function(t){return t instanceof _n?t:new An(0)},t.prototype.isEqual=function(e){return e instanceof t&&this.operand.isEqual(e.operand)},t}()
function li(t){return t instanceof Fn?t.internalValue.slice():[]}var fi,di,pi=function(){function t(t){this.count=t}return t.prototype.isEqual=function(t){return t&&t.count===this.count},t}(),yi=((fi={})[ni.ASCENDING.name]="ASCENDING",fi[ni.DESCENDING.name]="DESCENDING",fi),mi=((di={})[Yr.LESS_THAN.name]="LESS_THAN",di[Yr.LESS_THAN_OR_EQUAL.name]="LESS_THAN_OR_EQUAL",di[Yr.GREATER_THAN.name]="GREATER_THAN",di[Yr.GREATER_THAN_OR_EQUAL.name]="GREATER_THAN_OR_EQUAL",di[Yr.EQUAL.name]="EQUAL",di[Yr.ARRAY_CONTAINS.name]="ARRAY_CONTAINS",di[Yr.IN.name]="IN",di[Yr.ARRAY_CONTAINS_ANY.name]="ARRAY_CONTAINS_ANY",di),gi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
function vi(t,e){w(!hr(t),e+" is missing")}function wi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):v("can't parse "+t)}var bi=function(){function t(t,e){this.databaseId=t,this.options=e}return t.prototype.emptyByteString=function(){return this.options.useProto3Json?"":new Uint8Array(0)},t.prototype.unsafeCastProtoByteString=function(t){return t},t.prototype.fromRpcStatus=function(t){var e=void 0===t.code?S.UNKNOWN:Dr(t.code)
return new T(e,t.message||"")},t.prototype.toInt32Value=function(t){return hr(t)?void 0:{value:t}},t.prototype.fromInt32Value=function(t){var e
return hr(e="object"===r(t)?t.value:t)?null:e},t.prototype.toTimestamp=function(t){return{seconds:""+t.seconds,nanos:t.nanoseconds}},t.prototype.fromTimestamp=function(t){if("string"==typeof t)return this.fromIso8601String(t)
w(!!t,"Cannot deserialize null or undefined timestamp.")
var e=wi(t.seconds||"0"),n=t.nanos||0
return new St(e,n)},t.prototype.fromIso8601String=function(t){var e=0,n=gi.exec(t)
if(w(!!n,"invalid timestamp: "+t),n[1]){var r=n[1]
r=(r+"000000000").substr(0,9),e=Number(r)}var i=new Date(t),o=Math.floor(i.getTime()/1e3)
return new St(o,e)},t.prototype.toBytes=function(t){return this.options.useProto3Json?t.toBase64():this.unsafeCastProtoByteString(t.toUint8Array())},t.prototype.fromBlob=function(t){return"string"==typeof t?(w(this.options.useProto3Json,"Expected bytes to be passed in as Uint8Array, but got a string instead."),tt.fromBase64String(t)):(w(!this.options.useProto3Json,"Expected bytes to be passed in as Uint8Array, but got a string instead."),tt.fromUint8Array(t))},t.prototype.toVersion=function(t){return this.toTimestamp(t.toTimestamp())},t.prototype.fromVersion=function(t){return w(!!t,"Trying to deserialize version that isn't set"),Tt.fromTimestamp(this.fromTimestamp(t))},t.prototype.toResourceName=function(t,e){return this.fullyQualifiedPrefixPath(t).child("documents").child(e).canonicalString()},t.prototype.fromResourceName=function(t){var e=st.fromString(t)
return w(this.isValidResourceName(e),"Tried to deserialize invalid key "+e.toString()),e},t.prototype.toName=function(t){return this.toResourceName(this.databaseId,t.path)},t.prototype.fromName=function(t){var e=this.fromResourceName(t)
return w(e.get(1)===this.databaseId.projectId,"Tried to deserialize key from different project: "+e.get(1)+" vs "+this.databaseId.projectId),w(!e.get(3)&&!this.databaseId.database||e.get(3)===this.databaseId.database,"Tried to deserialize key from different database: "+e.get(3)+" vs "+this.databaseId.database),new ht(this.extractLocalPathFromResourceName(e))},t.prototype.toQueryPath=function(t){return this.toResourceName(this.databaseId,t)},t.prototype.fromQueryPath=function(t){var e=this.fromResourceName(t)
return 4===e.length?st.EMPTY_PATH:this.extractLocalPathFromResourceName(e)},Object.defineProperty(t.prototype,"encodedDatabaseId",{get:function(){return new st(["projects",this.databaseId.projectId,"databases",this.databaseId.database]).canonicalString()},enumerable:!0,configurable:!0}),t.prototype.fullyQualifiedPrefixPath=function(t){return new st(["projects",t.projectId,"databases",t.database])},t.prototype.extractLocalPathFromResourceName=function(t){return w(t.length>4&&"documents"===t.get(4),"tried to deserialize invalid key "+t.toString()),t.popFirst(5)},t.prototype.isValidResourceName=function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)},t.prototype.toValue=function(t){if(t instanceof In)return{nullValue:"NULL_VALUE"}
if(t instanceof Cn)return{booleanValue:t.value()}
if(t instanceof An)return{integerValue:""+t.value()}
if(t instanceof kn){var e=t.value()
if(this.options.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"}
if(e===1/0)return{doubleValue:"Infinity"}
if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:t.value()}}return t instanceof Rn?{stringValue:t.value()}:t instanceof qn?{mapValue:this.toMapValue(t)}:t instanceof Fn?{arrayValue:this.toArrayValue(t)}:t instanceof Mn?{timestampValue:this.toTimestamp(t.internalValue)}:t instanceof Pn?{geoPointValue:{latitude:t.value().latitude,longitude:t.value().longitude}}:t instanceof On?{bytesValue:this.toBytes(t.value())}:t instanceof Ln?{referenceValue:this.toResourceName(t.databaseId,t.key.path)}:v("Unknown FieldValue "+JSON.stringify(t))},t.prototype.fromValue=function(t){var e=this
if("nullValue"in t)return In.INSTANCE
if("booleanValue"in t)return Cn.of(t.booleanValue)
if("integerValue"in t)return new An(wi(t.integerValue))
if("doubleValue"in t){if(this.options.useProto3Json){if("NaN"===t.doubleValue)return kn.NAN
if("Infinity"===t.doubleValue)return kn.POSITIVE_INFINITY
if("-Infinity"===t.doubleValue)return kn.NEGATIVE_INFINITY}return new kn(t.doubleValue)}if("stringValue"in t)return new Rn(t.stringValue)
if("mapValue"in t)return this.fromFields(t.mapValue.fields||{})
if("arrayValue"in t){vi(t.arrayValue,"arrayValue")
var n=t.arrayValue.values||[]
return new Fn(n.map(function(t){return e.fromValue(t)}))}if("timestampValue"in t)return vi(t.timestampValue,"timestampValue"),new Mn(this.fromTimestamp(t.timestampValue))
if("geoPointValue"in t){vi(t.geoPointValue,"geoPointValue")
var r=t.geoPointValue.latitude||0,i=t.geoPointValue.longitude||0
return new Pn(new jr(r,i))}if("bytesValue"in t){vi(t.bytesValue,"bytesValue")
var o=this.fromBlob(t.bytesValue)
return new On(o)}if("referenceValue"in t){vi(t.referenceValue,"referenceValue")
var a=this.fromResourceName(t.referenceValue),s=new it(a.get(1),a.get(3)),u=new ht(this.extractLocalPathFromResourceName(a))
return new Ln(s,u)}return v("Unknown Value proto "+JSON.stringify(t))},t.prototype.toMutationDocument=function(t,e){return{name:this.toName(t),fields:this.toFields(e)}},t.prototype.toDocument=function(t){return w(!t.hasLocalMutations,"Can't serialize documents with mutations."),{name:this.toName(t.key),fields:this.toFields(t.data),updateTime:this.toTimestamp(t.version.toTimestamp())}},t.prototype.fromDocument=function(t,e){return new pe(this.fromName(t.name),this.fromVersion(t.updateTime),this.fromFields(t.fields||{}),{hasCommittedMutations:!!e})},t.prototype.toFields=function(t){var e=this,n={}
return t.forEach(function(t,r){n[t]=e.toValue(r)}),n},t.prototype.fromFields=function(t){var e=this,n=t,r=qn.EMPTY
return N(n,function(t,n){r=r.set(new ct([t]),e.fromValue(n))}),r},t.prototype.toMapValue=function(t){return{fields:this.toFields(t)}},t.prototype.toArrayValue=function(t){var e=this,n=[]
return t.forEach(function(t){n.push(e.toValue(t))}),{values:n}},t.prototype.fromFound=function(t){w(!!t.found,"Tried to deserialize a found document from a missing document."),vi(t.found.name,"doc.found.name"),vi(t.found.updateTime,"doc.found.updateTime")
var e=this.fromName(t.found.name),n=this.fromVersion(t.found.updateTime),r=this.fromFields(t.found.fields||{})
return new pe(e,n,r,{},t.found)},t.prototype.fromMissing=function(t){w(!!t.missing,"Tried to deserialize a missing document from a found document."),w(!!t.readTime,"Tried to deserialize a missing document without a read time.")
var e=this.fromName(t.missing),n=this.fromVersion(t.readTime)
return new ye(e,n)},t.prototype.fromMaybeDocument=function(t){return"found"in t?this.fromFound(t):"missing"in t?this.fromMissing(t):v("invalid batch get response: "+JSON.stringify(t))},t.prototype.toWatchTargetChangeState=function(t){switch(t){case Mr.Added:return"ADD"
case Mr.Current:return"CURRENT"
case Mr.NoChange:return"NO_CHANGE"
case Mr.Removed:return"REMOVE"
case Mr.Reset:return"RESET"
default:return v("Unknown WatchTargetChangeState: "+t)}},t.prototype.toTestWatchChange=function(t){if(t instanceof Fr)return{filter:{count:t.existenceFilter.count,targetId:t.targetId}}
if(t instanceof qr){if(t.newDoc instanceof pe){var e=t.newDoc
return{documentChange:{document:{name:this.toName(e.key),fields:this.toFields(e.data),updateTime:this.toVersion(e.version)},targetIds:t.updatedTargetIds,removedTargetIds:t.removedTargetIds}}}if(t.newDoc instanceof ye)return e=t.newDoc,{documentDelete:{document:this.toName(e.key),readTime:this.toVersion(e.version),removedTargetIds:t.removedTargetIds}}
if(null===t.newDoc)return{documentRemove:{document:this.toName(t.key),removedTargetIds:t.removedTargetIds}}}if(t instanceof Vr){var n=void 0
return t.cause&&(n={code:Nr(t.cause.code),message:t.cause.message}),{targetChange:{targetChangeType:this.toWatchTargetChangeState(t.state),targetIds:t.targetIds,resumeToken:this.unsafeCastProtoByteString(t.resumeToken),cause:n}}}return v("Unrecognized watch change: "+JSON.stringify(t))},t.prototype.fromWatchChange=function(t){var e
if("targetChange"in t){vi(t.targetChange,"targetChange")
var n=this.fromWatchTargetChangeState(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=t.targetChange.resumeToken||this.emptyByteString(),o=t.targetChange.cause,a=o&&this.fromRpcStatus(o)
e=new Vr(n,r,i,a||null)}else if("documentChange"in t){vi(t.documentChange,"documentChange"),vi(t.documentChange.document,"documentChange.name"),vi(t.documentChange.document.name,"documentChange.document.name"),vi(t.documentChange.document.updateTime,"documentChange.document.updateTime")
var s=t.documentChange,u=this.fromName(s.document.name),c=this.fromVersion(s.document.updateTime),h=this.fromFields(s.document.fields||{}),l=new pe(u,c,h,{},s.document),f=s.targetIds||[],d=s.removedTargetIds||[]
e=new qr(f,d,l.key,l)}else if("documentDelete"in t){vi(t.documentDelete,"documentDelete"),vi(t.documentDelete.document,"documentDelete.document")
var p=t.documentDelete
u=this.fromName(p.document),c=p.readTime?this.fromVersion(p.readTime):Tt.forDeletedDoc(),l=new ye(u,c),d=p.removedTargetIds||[],e=new qr([],d,l.key,l)}else if("documentRemove"in t){vi(t.documentRemove,"documentRemove"),vi(t.documentRemove.document,"documentRemove")
var y=t.documentRemove
u=this.fromName(y.document),d=y.removedTargetIds||[],e=new qr([],d,u,null)}else{if(!("filter"in t))return v("Unknown change type "+JSON.stringify(t))
vi(t.filter,"filter"),vi(t.filter.targetId,"filter.targetId")
var m=t.filter,g=m.count||0,w=new pi(g),b=m.targetId
e=new Fr(b,w)}return e},t.prototype.fromWatchTargetChangeState=function(t){return"NO_CHANGE"===t?Mr.NoChange:"ADD"===t?Mr.Added:"REMOVE"===t?Mr.Removed:"CURRENT"===t?Mr.Current:"RESET"===t?Mr.Reset:v("Got unexpected TargetChange.state: "+t)},t.prototype.versionFromListenResponse=function(t){if(!("targetChange"in t))return Tt.MIN
var e=t.targetChange
return e.targetIds&&e.targetIds.length?Tt.MIN:e.readTime?this.fromVersion(e.readTime):Tt.MIN},t.prototype.toMutation=function(t){var e,n=this
if(t instanceof Gn)e={update:this.toMutationDocument(t.key,t.value)}
else if(t instanceof zn)e={delete:this.toName(t.key)}
else if(t instanceof Wn)e={update:this.toMutationDocument(t.key,t.data),updateMask:this.toDocumentMask(t.fieldMask)}
else{if(!(t instanceof jn))return v("Unknown mutation type "+t.type)
e={transform:{document:this.toName(t.key),fieldTransforms:t.fieldTransforms.map(function(t){return n.toFieldTransform(t)})}}}return t.precondition.isNone||(e.currentDocument=this.toPrecondition(t.precondition)),e},t.prototype.fromMutation=function(t){var e=this,n=t.currentDocument?this.fromPrecondition(t.currentDocument):Qn.NONE
if(t.update){vi(t.update.name,"name")
var r=this.fromName(t.update.name),i=this.fromFields(t.update.fields||{})
if(t.updateMask){var o=this.fromDocumentMask(t.updateMask)
return new Wn(r,i,o,n)}return new Gn(r,i,n)}if(t.delete)return r=this.fromName(t.delete),new zn(r,n)
if(t.transform){r=this.fromName(t.transform.document)
var a=t.transform.fieldTransforms.map(function(t){return e.fromFieldTransform(t)})
return w(!0===n.exists,'Transforms only support precondition "exists == true"'),new jn(r,a)}return v("unknown mutation proto: "+JSON.stringify(t))},t.prototype.toPrecondition=function(t){return w(!t.isNone,"Can't serialize an empty precondition"),void 0!==t.updateTime?{updateTime:this.toVersion(t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v("Unknown precondition")},t.prototype.fromPrecondition=function(t){return void 0!==t.updateTime?Qn.updateTime(this.fromVersion(t.updateTime)):void 0!==t.exists?Qn.exists(t.exists):Qn.NONE},t.prototype.fromWriteResult=function(t,e){var n=this,r=t.updateTime?this.fromVersion(t.updateTime):this.fromVersion(e),i=null
return t.transformResults&&t.transformResults.length>0&&(i=t.transformResults.map(function(t){return n.fromValue(t)})),new Bn(r,i)},t.prototype.fromWriteResults=function(t,e){var n=this
return t&&t.length>0?(w(void 0!==e,"Received a write result without a commit time"),t.map(function(t){return n.fromWriteResult(t,e)})):[]},t.prototype.toFieldTransform=function(t){var e=this,n=t.transform
if(n instanceof si)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"}
if(n instanceof ui)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements.map(function(t){return e.toValue(t)})}}
if(n instanceof ci)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements.map(function(t){return e.toValue(t)})}}
if(n instanceof hi)return{fieldPath:t.field.canonicalString(),increment:this.toValue(n.operand)}
throw v("Unknown transform: "+t.transform)},t.prototype.fromFieldTransform=function(t){var e=this,n=null
if("setToServerValue"in t)w("REQUEST_TIME"===t.setToServerValue,"Unknown server value transform proto: "+JSON.stringify(t)),n=si.instance
else if("appendMissingElements"in t){var r=t.appendMissingElements.values||[]
n=new ui(r.map(function(t){return e.fromValue(t)}))}else if("removeAllFromArray"in t)r=t.removeAllFromArray.values||[],n=new ci(r.map(function(t){return e.fromValue(t)}))
else if("increment"in t){var i=this.fromValue(t.increment)
w(i instanceof _n,"NUMERIC_ADD transform requires a NumberValue"),n=new hi(i)}else v("Unknown transform proto: "+JSON.stringify(t))
var o=ct.fromServerFormat(t.fieldPath)
return new Un(o,n)},t.prototype.toDocumentsTarget=function(t){return{documents:[this.toQueryPath(t.path)]}},t.prototype.fromDocumentsTarget=function(t){var e=t.documents.length
w(1===e,"DocumentsTarget contained other than 1 document: "+e)
var n=t.documents[0]
return zr.atPath(this.fromQueryPath(n))},t.prototype.toQueryTarget=function(t){var e={structuredQuery:{}},n=t.path
null!==t.collectionGroup?(w(n.length%2==0,"Collection Group queries should be within a document path or root."),e.parent=this.toQueryPath(n),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(w(n.length%2!=0,"Document queries with filters are not supported."),e.parent=this.toQueryPath(n.popLast()),e.structuredQuery.from=[{collectionId:n.lastSegment()}])
var r=this.toFilter(t.filters)
r&&(e.structuredQuery.where=r)
var i=this.toOrder(t.orderBy)
i&&(e.structuredQuery.orderBy=i)
var o=this.toInt32Value(t.limit)
return void 0!==o&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=this.toCursor(t.startAt)),t.endAt&&(e.structuredQuery.endAt=this.toCursor(t.endAt)),e},t.prototype.fromQueryTarget=function(t){var e=this.fromQueryPath(t.parent),n=t.structuredQuery,r=n.from?n.from.length:0,i=null
if(r>0){w(1===r,"StructuredQuery.from with more than one collection is not supported.")
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
return n.endAt&&(h=this.fromCursor(n.endAt)),new zr(e,i,s,a,u,c,h)},t.prototype.toListenRequestLabels=function(t){var e=this.toLabel(t.purpose)
return null==e?null:{"goog-listen-tags":e}},t.prototype.toLabel=function(t){switch(t){case We.Listen:return null
case We.ExistenceFilterMismatch:return"existence-filter-mismatch"
case We.LimboResolution:return"limbo-document"
default:return v("Unrecognized query purpose: "+t)}},t.prototype.toTarget=function(t){var e,n=t.query
return(e=n.isDocumentQuery()?{documents:this.toDocumentsTarget(n)}:{query:this.toQueryTarget(n)}).targetId=t.targetId,t.resumeToken.length>0&&(e.resumeToken=this.unsafeCastProtoByteString(t.resumeToken)),e},t.prototype.toFilter=function(t){var e=this
if(0!==t.length){var n=t.map(function(t){return t instanceof Xr?e.toUnaryOrFieldFilter(t):v("Unrecognized filter: "+JSON.stringify(t))})
return 1===n.length?n[0]:{compositeFilter:{op:"AND",filters:n}}}},t.prototype.fromFilter=function(t){var e=this
return t?void 0!==t.unaryFilter?[this.fromUnaryFilter(t)]:void 0!==t.fieldFilter?[this.fromFieldFilter(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(function(t){return e.fromFilter(t)}).reduce(function(t,e){return t.concat(e)}):v("Unknown filter: "+JSON.stringify(t)):[]},t.prototype.toOrder=function(t){var e=this
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
case"OPERATOR_UNSPECIFIED":return v("Unspecified operator")
default:return v("Unknown operator")}},t.prototype.toFieldPathReference=function(t){return{fieldPath:t.canonicalString()}},t.prototype.fromFieldPathReference=function(t){return ct.fromServerFormat(t.fieldPath)},t.prototype.toPropertyOrder=function(t){return{field:this.toFieldPathReference(t.field),direction:this.toDirection(t.dir)}},t.prototype.fromPropertyOrder=function(t){return new ii(this.fromFieldPathReference(t.field),this.fromDirection(t.direction))},t.prototype.fromFieldFilter=function(t){return Xr.create(this.fromFieldPathReference(t.fieldFilter.field),this.fromOperatorName(t.fieldFilter.op),this.fromValue(t.fieldFilter.value))},t.prototype.toUnaryOrFieldFilter=function(t){if(t.op===Yr.EQUAL){if(t.value.isEqual(kn.NAN))return{unaryFilter:{field:this.toFieldPathReference(t.field),op:"IS_NAN"}}
if(t.value.isEqual(In.INSTANCE))return{unaryFilter:{field:this.toFieldPathReference(t.field),op:"IS_NULL"}}}return{fieldFilter:{field:this.toFieldPathReference(t.field),op:this.toOperatorName(t.op),value:this.toValue(t.value)}}},t.prototype.fromUnaryFilter=function(t){switch(t.unaryFilter.op){case"IS_NAN":var e=this.fromFieldPathReference(t.unaryFilter.field)
return Xr.create(e,Yr.EQUAL,kn.NAN)
case"IS_NULL":var n=this.fromFieldPathReference(t.unaryFilter.field)
return Xr.create(n,Yr.EQUAL,In.INSTANCE)
case"OPERATOR_UNSPECIFIED":return v("Unspecified filter")
default:return v("Unknown filter")}},t.prototype.toDocumentMask=function(t){var e=[]
return t.fields.forEach(function(t){return e.push(t.canonicalString())}),{fieldPaths:e}},t.prototype.fromDocumentMask=function(t){var e=(t.fieldPaths||[]).map(function(t){return ct.fromServerFormat(t)})
return Vn.fromArray(e)},t}(),Ei=function(){this.listeners=[]},Si=function(){function t(t){this.syncEngine=t,this.queries=new ge(function(t){return t.canonicalId()}),this.onlineState=pr.Unknown,this.syncEngine.subscribe(this)}return t.prototype.listen=function(t){var e=t.query,n=!1,r=this.queries.get(e)
return r||(n=!0,r=new Ei,this.queries.set(e,r)),r.listeners.push(t),t.applyOnlineStateChange(this.onlineState),r.viewSnap&&t.onViewSnapshot(r.viewSnap),n?this.syncEngine.listen(e).then(function(t){return r.targetId=t,t}):Promise.resolve(r.targetId)},t.prototype.unlisten=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n,r,i
return s.__generator(this,function(o){return e=t.query,n=!1,(r=this.queries.get(e))&&(i=r.listeners.indexOf(t))>=0&&(r.listeners.splice(i,1),n=0===r.listeners.length),n?(this.queries.delete(e),[2,this.syncEngine.unlisten(e)]):[2]})})},t.prototype.onWatchChange=function(t){var e,n,r,i
try{for(var o=s.__values(t),a=o.next();!a.done;a=o.next()){var u=a.value,c=u.query,h=this.queries.get(c)
if(h){try{for(var l=(r=void 0,s.__values(h.listeners)),f=l.next();!f.done;f=l.next())f.value.onViewSnapshot(u)}catch(t){r={error:t}}finally{try{f&&!f.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}h.viewSnap=u}}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}},t.prototype.onWatchError=function(t,e){var n,r,i=this.queries.get(t)
if(i)try{for(var o=s.__values(i.listeners),a=o.next();!a.done;a=o.next())a.value.onError(e)}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}this.queries.delete(t)},t.prototype.onOnlineStateChange=function(t){this.onlineState=t,this.queries.forEach(function(e,n){var r,i
try{for(var o=s.__values(n.listeners),a=o.next();!a.done;a=o.next())a.value.applyOnlineStateChange(t)}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}})},t}(),Ti=function(){function t(t,e,n){this.query=t,this.queryObserver=e,this.raisedInitialEvent=!1,this.onlineState=pr.Unknown,this.options=n||{}}return t.prototype.onViewSnapshot=function(t){var e,n
if(w(t.docChanges.length>0||t.syncStateChanged,"We got a new snapshot with no changes?"),!this.options.includeMetadataChanges){var r=[]
try{for(var i=s.__values(t.docChanges),o=i.next();!o.done;o=i.next()){var a=o.value
a.type!==Ar.Metadata&&r.push(a)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}t=new Or(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}this.raisedInitialEvent?this.shouldRaiseEvent(t)&&this.queryObserver.next(t):this.shouldRaiseInitialEvent(t,this.onlineState)&&this.raiseInitialEvent(t),this.snap=t},t.prototype.onError=function(t){this.queryObserver.error(t)},t.prototype.applyOnlineStateChange=function(t){this.onlineState=t,this.snap&&!this.raisedInitialEvent&&this.shouldRaiseInitialEvent(this.snap,t)&&this.raiseInitialEvent(this.snap)},t.prototype.shouldRaiseInitialEvent=function(t,e){if(w(!this.raisedInitialEvent,"Determining whether to raise first event but already had first event"),!t.fromCache)return!0
var n=e!==pr.Offline
return this.options.waitForSyncWhenOnline&&n?(w(t.fromCache,"Waiting for sync, but snapshot is not from cache"),!1):!t.docs.isEmpty()||e===pr.Offline},t.prototype.shouldRaiseEvent=function(t){if(t.docChanges.length>0)return!0
var e=this.snap&&this.snap.hasPendingWrites!==t.hasPendingWrites
return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges},t.prototype.raiseInitialEvent=function(t){w(!this.raisedInitialEvent,"Trying to raise initial events for second time"),t=Or.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.raisedInitialEvent=!0,this.queryObserver.next(t)},t}(),Ii=function(){function t(t,e,n){this.targetId=t,this.addedKeys=e,this.removedKeys=n}return t.fromSnapshot=function(e,n){var r,i,o=Ft(),a=Ft()
try{for(var u=s.__values(n.docChanges),c=u.next();!c.done;c=u.next()){var h=c.value
switch(h.type){case Ar.Added:o=o.add(h.doc.key)
break
case Ar.Removed:a=a.add(h.doc.key)}}}catch(t){r={error:t}}finally{try{c&&!c.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}return new t(e,o,a)},t}(),Ci=function(t){this.key=t},_i=function(t){this.key=t},Di=function(){function t(t,e){this.query=t,this._syncedDocuments=e,this.syncState=null,this.current=!1,this.limboDocuments=Ft(),this.mutatedKeys=Ft(),this.documentSet=new Rr(t.docComparator.bind(t))}return Object.defineProperty(t.prototype,"syncedDocuments",{get:function(){return this._syncedDocuments},enumerable:!0,configurable:!0}),t.prototype.computeDocChanges=function(t,e){var n=this,r=e?e.changeSet:new xr,i=e?e.documentSet:this.documentSet,o=e?e.mutatedKeys:this.mutatedKeys,a=i,s=!1,u=this.query.hasLimit()&&i.size===this.query.limit?i.last():null
if(t.inorderTraversal(function(t,e){var c=i.get(t),h=e instanceof pe?e:null
h&&(w(t.isEqual(h.key),"Mismatching keys found in document changes: "+t+" != "+h.key),h=n.query.matches(h)?h:null)
var l=!!c&&n.mutatedKeys.has(c.key),f=!!h&&(h.hasLocalMutations||n.mutatedKeys.has(h.key)&&h.hasCommittedMutations),d=!1
c&&h?c.data.isEqual(h.data)?l!==f&&(r.track({type:Ar.Metadata,doc:h}),d=!0):n.shouldWaitForSyncedDocument(c,h)||(r.track({type:Ar.Modified,doc:h}),d=!0,u&&n.query.docComparator(h,u)>0&&(s=!0)):!c&&h?(r.track({type:Ar.Added,doc:h}),d=!0):c&&!h&&(r.track({type:Ar.Removed,doc:c}),d=!0,u&&(s=!0)),d&&(h?(a=a.add(h),o=f?o.add(t):o.delete(t)):(a=a.delete(t),o=o.delete(t)))}),this.query.hasLimit())for(;a.size>this.query.limit;){var c=a.last()
a=a.delete(c.key),o=o.delete(c.key),r.track({type:Ar.Removed,doc:c})}return w(!s||!e,"View was refilled using docs that themselves needed refilling."),{documentSet:a,changeSet:r,needsRefill:s,mutatedKeys:o}},t.prototype.shouldWaitForSyncedDocument=function(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations},t.prototype.applyChanges=function(t,e,n){var r=this
w(!t.needsRefill,"Cannot apply changes that need a refill")
var i=this.documentSet
this.documentSet=t.documentSet,this.mutatedKeys=t.mutatedKeys
var o=t.changeSet.getChanges()
o.sort(function(t,e){return function(t,e){var n=function(t){switch(t){case Ar.Added:return 1
case Ar.Modified:case Ar.Metadata:return 2
case Ar.Removed:return 0
default:return v("Unknown ChangeType: "+t)}}
return n(t)-n(e)}(t.type,e.type)||r.query.docComparator(t.doc,e.doc)}),this.applyTargetChange(n)
var a=e?this.updateLimboDocuments():[],s=0===this.limboDocuments.size&&this.current?kr.Synced:kr.Local,u=s!==this.syncState
return this.syncState=s,0!==o.length||u?{snapshot:new Or(this.query,t.documentSet,i,o,t.mutatedKeys,s===kr.Local,u,!1),limboChanges:a}:{limboChanges:a}},t.prototype.applyOnlineStateChange=function(t){return this.current&&t===pr.Offline?(this.current=!1,this.applyChanges({documentSet:this.documentSet,changeSet:new xr,mutatedKeys:this.mutatedKeys,needsRefill:!1},!1)):{limboChanges:[]}},t.prototype.shouldBeInLimbo=function(t){return!this._syncedDocuments.has(t)&&!!this.documentSet.has(t)&&!this.documentSet.get(t).hasLocalMutations},t.prototype.applyTargetChange=function(t){var e=this
t&&(t.addedDocuments.forEach(function(t){return e._syncedDocuments=e._syncedDocuments.add(t)}),t.modifiedDocuments.forEach(function(t){return w(e._syncedDocuments.has(t),"Modified document "+t+" not found in view.")}),t.removedDocuments.forEach(function(t){return e._syncedDocuments=e._syncedDocuments.delete(t)}),this.current=t.current)},t.prototype.updateLimboDocuments=function(){var t=this
if(!this.current)return[]
var e=this.limboDocuments
this.limboDocuments=Ft(),this.documentSet.forEach(function(e){t.shouldBeInLimbo(e.key)&&(t.limboDocuments=t.limboDocuments.add(e.key))})
var n=[]
return e.forEach(function(e){t.limboDocuments.has(e)||n.push(new _i(e))}),this.limboDocuments.forEach(function(t){e.has(t)||n.push(new Ci(t))}),n},t.prototype.synchronizeWithPersistedState=function(t,e){this._syncedDocuments=e,this.limboDocuments=Ft()
var n=this.computeDocChanges(t)
return this.applyChanges(n,!0)},t.prototype.computeInitialSnapshot=function(){return Or.fromInitialDocuments(this.query,this.documentSet,this.mutatedKeys,this.syncState===kr.Local)},t}(),Ni=function(t,e,n){this.query=t,this.targetId=e,this.view=n},Ai=function(t){this.key=t},ki=function(){function t(t,e,n,r){this.localStore=t,this.remoteStore=e,this.sharedClientState=n,this.currentUser=r,this.syncEngineListener=null,this.queryViewsByQuery=new ge(function(t){return t.canonicalId()}),this.queryViewsByTarget={},this.limboTargetsByKey=new It(ht.comparator),this.limboResolutionsByTarget={},this.limboDocumentRefs=new Yn,this.mutationUserCallbacks={},this.limboTargetIdGenerator=$t.forSyncEngine(),this.isPrimary=void 0,this.onlineState=pr.Unknown}return Object.defineProperty(t.prototype,"isPrimaryClient",{get:function(){return!0===this.isPrimary},enumerable:!0,configurable:!0}),t.prototype.subscribe=function(t){w(null!==t,"SyncEngine listener cannot be null"),w(null===this.syncEngineListener,"SyncEngine already has a subscriber."),this.syncEngineListener=t},t.prototype.listen=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n,r,i,o
return s.__generator(this,function(a){switch(a.label){case 0:return this.assertSubscribed("listen()"),(r=this.queryViewsByQuery.get(t))?(e=r.targetId,this.sharedClientState.addLocalQueryTarget(e),n=r.view.computeInitialSnapshot(),[3,4]):[3,1]
case 1:return[4,this.localStore.allocateQuery(t)]
case 2:return i=a.sent(),o=this.sharedClientState.addLocalQueryTarget(i.targetId),e=i.targetId,[4,this.initializeViewAndComputeSnapshot(i,"current"===o)]
case 3:n=a.sent(),this.isPrimary&&this.remoteStore.listen(i),a.label=4
case 4:return this.syncEngineListener.onWatchChange([n]),[2,e]}})})},t.prototype.initializeViewAndComputeSnapshot=function(t,e){var n=this,r=t.query
return this.localStore.executeQuery(r).then(function(i){return n.localStore.remoteDocumentKeys(t.targetId).then(function(o){var a=new Di(r,o),s=a.computeDocChanges(i),u=Pr.createSynthesizedTargetChangeForCurrentChange(t.targetId,e&&n.onlineState!==pr.Offline),c=a.applyChanges(s,!0===n.isPrimary,u)
w(0===c.limboChanges.length,"View returned limbo docs before target ack from the server."),w(!!c.snapshot,"applyChanges for new view should always return a snapshot")
var h=new Ni(r,t.targetId,a)
return n.queryViewsByQuery.set(r,h),n.queryViewsByTarget[t.targetId]=h,c.snapshot})})},t.prototype.synchronizeViewAndComputeSnapshot=function(t){var e=this
return this.localStore.executeQuery(t.query).then(function(n){return e.localStore.remoteDocumentKeys(t.targetId).then(function(r){return s.__awaiter(e,void 0,void 0,function(){var e
return s.__generator(this,function(i){return e=t.view.synchronizeWithPersistedState(n,r),this.isPrimary&&this.updateTrackedLimbos(t.targetId,e.limboChanges),[2,e]})})})})},t.prototype.unlisten=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n=this
return s.__generator(this,function(r){switch(r.label){case 0:return this.assertSubscribed("unlisten()"),w(!!(e=this.queryViewsByQuery.get(t)),"Trying to unlisten on query not found:"+t),this.isPrimary?(this.sharedClientState.removeLocalQueryTarget(e.targetId),this.sharedClientState.isActiveQueryTarget(e.targetId)?[3,2]:[4,this.localStore.releaseQuery(t,!1).then(function(){n.sharedClientState.clearQueryState(e.targetId),n.remoteStore.unlisten(e.targetId),n.removeAndCleanupQuery(e)}).catch(yn)]):[3,3]
case 1:r.sent(),r.label=2
case 2:return[3,5]
case 3:return this.removeAndCleanupQuery(e),[4,this.localStore.releaseQuery(t,!0)]
case 4:r.sent(),r.label=5
case 5:return[2]}})})},t.prototype.write=function(t,e){var n=this
return this.assertSubscribed("write()"),this.localStore.localWrite(t).then(function(t){return n.sharedClientState.addPendingMutation(t.batchId),n.addMutationCallback(t.batchId,e),n.emitNewSnapsAndNotifyLocalStore(t.changes)}).then(function(){return n.remoteStore.fillWritePipeline()})},t.prototype.wrapUpdateFunctionError=function(t){return t},t.prototype.runTransaction=function(t,e){var n=this
void 0===e&&(e=5),w(e>=0,"Got negative number of retries for transaction.")
var r=this.remoteStore.createTransaction()
return function(){try{var e=t(r)
return!hr(e)&&e.catch&&e.then?e.catch(function(t){return Promise.reject(n.wrapUpdateFunctionError(t))}):Promise.reject(Error("Transaction callback must return a Promise"))}catch(t){return Promise.reject(n.wrapUpdateFunctionError(t))}}().then(function(i){return r.commit().then(function(){return i}).catch(function(r){return 0===e?Promise.reject(r):n.runTransaction(t,e-1)})})},t.prototype.applyRemoteEvent=function(t){var e=this
return this.assertSubscribed("applyRemoteEvent()"),this.localStore.applyRemoteEvent(t).then(function(n){return N(t.targetChanges,function(t,n){var r=e.limboResolutionsByTarget[Number(t)]
r&&(w(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1,"Limbo resolution for single document contains multiple changes."),n.addedDocuments.size>0?r.receivedDocument=!0:n.modifiedDocuments.size>0?w(r.receivedDocument,"Received change for limbo target document without add."):n.removedDocuments.size>0&&(w(r.receivedDocument,"Received remove for limbo target document without add."),r.receivedDocument=!1))}),e.emitNewSnapsAndNotifyLocalStore(n,t)}).catch(yn)},t.prototype.applyOnlineStateChange=function(t,e){if(this.isPrimary&&e===yr.RemoteStore||!this.isPrimary&&e===yr.SharedClientState){var n=[]
this.queryViewsByQuery.forEach(function(e,r){var i=r.view.applyOnlineStateChange(t)
w(0===i.limboChanges.length,"OnlineState should not affect limbo documents."),i.snapshot&&n.push(i.snapshot)}),this.syncEngineListener.onOnlineStateChange(t),this.syncEngineListener.onWatchChange(n),this.onlineState=t,this.isPrimary&&this.sharedClientState.setOnlineState(t)}},t.prototype.rejectListen=function(t,e){return s.__awaiter(this,void 0,void 0,function(){var n,r,i,o,a,u,c=this
return s.__generator(this,function(s){switch(s.label){case 0:return this.assertSubscribed("rejectListens()"),this.sharedClientState.updateQueryState(t,"rejected",e),n=this.limboResolutionsByTarget[t],(r=n&&n.key)?(this.limboTargetsByKey=this.limboTargetsByKey.remove(r),delete this.limboResolutionsByTarget[t],i=(i=new It(ht.comparator)).insert(r,new ye(r,Tt.forDeletedDoc())),o=Ft().add(r),a=new Lr(Tt.MIN,{},new Nt(H),i,o),[2,this.applyRemoteEvent(a)]):[3,1]
case 1:return w(!!(u=this.queryViewsByTarget[t]),"Unknown targetId: "+t),[4,this.localStore.releaseQuery(u.query,!1).then(function(){return c.removeAndCleanupQuery(u)}).catch(yn)]
case 2:s.sent(),this.syncEngineListener.onWatchError(u.query,e),s.label=3
case 3:return[2]}})})},t.prototype.applyBatchState=function(t,e,n){return s.__awaiter(this,void 0,void 0,function(){var r
return s.__generator(this,function(i){switch(i.label){case 0:return this.assertSubscribed("applyBatchState()"),[4,this.localStore.lookupMutationDocuments(t)]
case 1:return null===(r=i.sent())?(y("SyncEngine","Cannot apply mutation batch with id: "+t),[2]):"pending"!==e?[3,3]:[4,this.remoteStore.fillWritePipeline()]
case 2:return i.sent(),[3,4]
case 3:"acknowledged"===e||"rejected"===e?(this.processUserCallback(t,n||null),this.localStore.removeCachedMutationBatchMetadata(t)):v("Unknown batchState: "+e),i.label=4
case 4:return[4,this.emitNewSnapsAndNotifyLocalStore(r)]
case 5:return i.sent(),[2]}})})},t.prototype.applySuccessfulWrite=function(t){var e=this
this.assertSubscribed("applySuccessfulWrite()")
var n=t.batch.batchId
return this.processUserCallback(n,null),this.localStore.acknowledgeBatch(t).then(function(t){return e.sharedClientState.updateMutationState(n,"acknowledged"),e.emitNewSnapsAndNotifyLocalStore(t)}).catch(yn)},t.prototype.rejectFailedWrite=function(t,e){var n=this
return this.assertSubscribed("rejectFailedWrite()"),this.processUserCallback(t,e),this.localStore.rejectBatch(t).then(function(r){return n.sharedClientState.updateMutationState(t,"rejected",e),n.emitNewSnapsAndNotifyLocalStore(r)}).catch(yn)},t.prototype.addMutationCallback=function(t,e){var n=this.mutationUserCallbacks[this.currentUser.toKey()]
n||(n=new It(H)),n=n.insert(t,e),this.mutationUserCallbacks[this.currentUser.toKey()]=n},t.prototype.processUserCallback=function(t,e){var n=this.mutationUserCallbacks[this.currentUser.toKey()]
if(n){var r=n.get(t)
r&&(w(t===n.minKey(),"Mutation callbacks processed out-of-order?"),e?r.reject(e):r.resolve(),n=n.remove(t)),this.mutationUserCallbacks[this.currentUser.toKey()]=n}},t.prototype.removeAndCleanupQuery=function(t){var e=this
if(this.sharedClientState.removeLocalQueryTarget(t.targetId),this.queryViewsByQuery.delete(t.query),delete this.queryViewsByTarget[t.targetId],this.isPrimary){var n=this.limboDocumentRefs.referencesForId(t.targetId)
this.limboDocumentRefs.removeReferencesForId(t.targetId),n.forEach(function(t){e.limboDocumentRefs.containsKey(t)||e.removeLimboTarget(t)})}},t.prototype.removeLimboTarget=function(t){var e=this.limboTargetsByKey.get(t)
null!==e&&(this.remoteStore.unlisten(e),this.limboTargetsByKey=this.limboTargetsByKey.remove(t),delete this.limboResolutionsByTarget[e])},t.prototype.updateTrackedLimbos=function(t,e){var n,r
try{for(var i=s.__values(e),o=i.next();!o.done;o=i.next()){var a=o.value
a instanceof Ci?(this.limboDocumentRefs.addReference(a.key,t),this.trackLimboChange(a)):a instanceof _i?(y("SyncEngine","Document no longer in limbo: "+a.key),this.limboDocumentRefs.removeReference(a.key,t),this.limboDocumentRefs.containsKey(a.key)||this.removeLimboTarget(a.key)):v("Unknown limbo change: "+JSON.stringify(a))}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}},t.prototype.trackLimboChange=function(t){var e=t.key
if(!this.limboTargetsByKey.get(e)){y("SyncEngine","New document in limbo: "+e)
var n=this.limboTargetIdGenerator.next(),r=zr.atPath(e.path)
this.limboResolutionsByTarget[n]=new Ai(e),this.remoteStore.listen(new tn(r,n,We.LimboResolution,ot.INVALID)),this.limboTargetsByKey=this.limboTargetsByKey.insert(e,n)}},t.prototype.currentLimboDocs=function(){return this.limboTargetsByKey},t.prototype.emitNewSnapsAndNotifyLocalStore=function(t,e){return s.__awaiter(this,void 0,void 0,function(){var n,r,i,o=this
return s.__generator(this,function(a){switch(a.label){case 0:return n=[],r=[],i=[],this.queryViewsByQuery.forEach(function(a,s){i.push(Promise.resolve().then(function(){var e=s.view.computeDocChanges(t)
return e.needsRefill?o.localStore.executeQuery(s.query).then(function(t){return s.view.computeDocChanges(t,e)}):e}).then(function(t){var i=e&&e.targetChanges[s.targetId],a=s.view.applyChanges(t,!0===o.isPrimary,i)
if(o.updateTrackedLimbos(s.targetId,a.limboChanges),a.snapshot){o.isPrimary&&o.sharedClientState.updateQueryState(s.targetId,a.snapshot.fromCache?"not-current":"current"),n.push(a.snapshot)
var u=Ii.fromSnapshot(s.targetId,a.snapshot)
r.push(u)}}))}),[4,Promise.all(i)]
case 1:return a.sent(),this.syncEngineListener.onWatchChange(n),[4,this.localStore.notifyLocalViewChanges(r)]
case 2:return a.sent(),[2]}})})},t.prototype.assertSubscribed=function(t){w(null!==this.syncEngineListener,"Trying to call "+t+" before calling subscribe().")},t.prototype.handleCredentialChange=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n
return s.__generator(this,function(r){switch(r.label){case 0:return e=!this.currentUser.isEqual(t),this.currentUser=t,e?[4,this.localStore.handleUserChange(t)]:[3,3]
case 1:return n=r.sent(),this.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),[4,this.emitNewSnapsAndNotifyLocalStore(n.affectedDocuments)]
case 2:r.sent(),r.label=3
case 3:return[4,this.remoteStore.handleCredentialChange()]
case 4:return r.sent(),[2]}})})},t.prototype.applyPrimaryState=function(t){return s.__awaiter(this,void 0,void 0,function(){var e,n,r,i,o,a,u,c,h,l=this
return s.__generator(this,function(f){switch(f.label){case 0:return!0!==t||!0===this.isPrimary?[3,3]:(this.isPrimary=!0,[4,this.remoteStore.applyPrimaryState(!0)])
case 1:return f.sent(),e=this.sharedClientState.getAllActiveQueryTargets(),[4,this.synchronizeQueryViewsAndRaiseSnapshots(e.toArray())]
case 2:n=f.sent()
try{for(r=s.__values(n),i=r.next();!i.done;i=r.next())o=i.value,this.remoteStore.listen(o)}catch(t){c={error:t}}finally{try{i&&!i.done&&(h=r.return)&&h.call(r)}finally{if(c)throw c.error}}return[3,7]
case 3:return!1!==t||!1===this.isPrimary?[3,7]:(this.isPrimary=!1,a=[],u=Promise.resolve(),D(this.queryViewsByTarget,function(t,e){l.sharedClientState.isLocalQueryTarget(t)?a.push(t):u=u.then(function(){return l.unlisten(e.query)}),l.remoteStore.unlisten(e.targetId)}),[4,u])
case 4:return f.sent(),[4,this.synchronizeQueryViewsAndRaiseSnapshots(a)]
case 5:return f.sent(),this.resetLimboDocuments(),[4,this.remoteStore.applyPrimaryState(!1)]
case 6:f.sent(),f.label=7
case 7:return[2]}})})},t.prototype.resetLimboDocuments=function(){var t=this
D(this.limboResolutionsByTarget,function(e){t.remoteStore.unlisten(e)}),this.limboDocumentRefs.removeAllReferences(),this.limboResolutionsByTarget=[],this.limboTargetsByKey=new It(ht.comparator)},t.prototype.synchronizeQueryViewsAndRaiseSnapshots=function(t){var e,n,r=this,i=Promise.resolve(),o=[],a=[],u=function(t){i=i.then(function(){return s.__awaiter(r,void 0,void 0,function(){var e,n,r,i
return s.__generator(this,function(s){switch(s.label){case 0:return(n=this.queryViewsByTarget[t])?[4,this.localStore.releaseQuery(n.query,!0)]:[3,4]
case 1:return s.sent(),[4,this.localStore.allocateQuery(n.query)]
case 2:return e=s.sent(),[4,this.synchronizeViewAndComputeSnapshot(n)]
case 3:return(r=s.sent()).snapshot&&a.push(r.snapshot),[3,8]
case 4:return w(!0===this.isPrimary,"A secondary tab should never have an active query without an active view."),[4,this.localStore.getQueryForTarget(t)]
case 5:return w(!!(i=s.sent()),"Query data for target "+t+" not found"),[4,this.localStore.allocateQuery(i)]
case 6:return e=s.sent(),[4,this.initializeViewAndComputeSnapshot(e,!1)]
case 7:s.sent(),s.label=8
case 8:return o.push(e),[2]}})})})}
try{for(var c=s.__values(t),h=c.next();!h.done;h=c.next())u(h.value)}catch(t){e={error:t}}finally{try{h&&!h.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return i.then(function(){return r.syncEngineListener.onWatchChange(a),o})},t.prototype.getActiveClients=function(){return this.localStore.getActiveClients()},t.prototype.applyTargetState=function(t,e,n){return s.__awaiter(this,void 0,void 0,function(){var r,i=this
return s.__generator(this,function(o){switch(o.label){case 0:if(this.isPrimary)return y("SyncEngine","Ignoring unexpected query state notification."),[2]
if(!this.queryViewsByTarget[t])return[3,5]
switch(e){case"current":case"not-current":return[3,1]
case"rejected":return[3,2]}return[3,4]
case 1:return[2,this.localStore.getNewDocumentChanges().then(function(n){return s.__awaiter(i,void 0,void 0,function(){var r
return s.__generator(this,function(i){switch(i.label){case 0:return r=Lr.createSynthesizedRemoteEventForCurrentChange(t,"current"===e),[4,this.emitNewSnapsAndNotifyLocalStore(n,r)]
case 1:return i.sent(),[2]}})})},function(t){return s.__awaiter(i,void 0,void 0,function(){var e
return s.__generator(this,function(n){switch(n.label){case 0:return function(t){return t.code===S.DATA_LOSS&&t.message===we}(t)?(e=[],D(this.queryViewsByTarget,function(t){return e.push(t)}),[4,this.synchronizeQueryViewsAndRaiseSnapshots(e)]):[3,2]
case 1:return n.sent(),[3,3]
case 2:throw t
case 3:return[2]}})})})]
case 2:return r=this.queryViewsByTarget[t],this.removeAndCleanupQuery(r),[4,this.localStore.releaseQuery(r.query,!0)]
case 3:return o.sent(),this.syncEngineListener.onWatchError(r.query,n),[3,5]
case 4:v("Unexpected target state: "+e),o.label=5
case 5:return[2]}})})},t.prototype.applyActiveTargetsChange=function(t,e){return s.__awaiter(this,void 0,void 0,function(){var n,r,i,o,a,u,c,h,l,f,d,p,y,m,g,v=this
return s.__generator(this,function(b){switch(b.label){case 0:if(!this.isPrimary)return[2]
b.label=1
case 1:b.trys.push([1,8,9,10]),n=s.__values(t),r=n.next(),b.label=2
case 2:return r.done?[3,7]:(f=r.value,w(!this.queryViewsByTarget[f],"Trying to add an already active target"),[4,this.localStore.getQueryForTarget(f)])
case 3:return w(!!(i=b.sent()),"Query data for active target "+f+" not found"),[4,this.localStore.allocateQuery(i)]
case 4:return o=b.sent(),[4,this.initializeViewAndComputeSnapshot(o,!1)]
case 5:b.sent(),this.remoteStore.listen(o),b.label=6
case 6:return r=n.next(),[3,2]
case 7:return[3,10]
case 8:return a=b.sent(),p={error:a},[3,10]
case 9:try{r&&!r.done&&(y=n.return)&&y.call(n)}finally{if(p)throw p.error}return[7]
case 10:u=function(t){var e
return s.__generator(this,function(n){switch(n.label){case 0:return(e=c.queryViewsByTarget[t])?[4,c.localStore.releaseQuery(e.query,!1).then(function(){v.remoteStore.unlisten(t),v.removeAndCleanupQuery(e)}).catch(yn)]:[3,2]
case 1:n.sent(),n.label=2
case 2:return[2]}})},c=this,b.label=11
case 11:b.trys.push([11,16,17,18]),h=s.__values(e),l=h.next(),b.label=12
case 12:return l.done?[3,15]:(f=l.value,[5,u(f)])
case 13:b.sent(),b.label=14
case 14:return l=h.next(),[3,12]
case 15:return[3,18]
case 16:return d=b.sent(),m={error:d},[3,18]
case 17:try{l&&!l.done&&(g=h.return)&&g.call(h)}finally{if(m)throw m.error}return[7]
case 18:return[2]}})})},t.prototype.enableNetwork=function(){return this.localStore.setNetworkEnabled(!0),this.remoteStore.enableNetwork()},t.prototype.disableNetwork=function(){return this.localStore.setNetworkEnabled(!1),this.remoteStore.disableNetwork()},t.prototype.getRemoteKeysForTarget=function(t){var e=this.limboResolutionsByTarget[t]
return e&&e.receivedDocument?Ft().add(e.key):this.queryViewsByTarget[t]?this.queryViewsByTarget[t].view.syncedDocuments:Ft()},t}(),Ri=function(){function t(t){this.uid=t}return t.prototype.isAuthenticated=function(){return null!=this.uid},t.prototype.toKey=function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"},t.prototype.isEqual=function(t){return t.uid===this.uid},t.UNAUTHENTICATED=new t(null),t.GOOGLE_CREDENTIALS=new t("google-credentials-uid"),t.FIRST_PARTY=new t("first-party-uid"),t}(),Mi="SharedClientState",xi="firestore_clients",Oi="firestore_mutations",Li="firestore_targets",Pi="firestore_online_state",qi="firestore_sequence_number",Fi=function(){function t(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r,w(void 0!==r==("rejected"===n),"MutationMetadata must contain an error iff state is 'rejected'")}return t.fromWebStorageEntry=function(e,n,i){var o=JSON.parse(i),a="object"===r(o)&&-1!==["pending","acknowledged","rejected"].indexOf(o.state)&&(void 0===o.error||"object"===r(o.error)),s=void 0
return a&&o.error&&(a="string"==typeof o.error.message&&"string"==typeof o.error.code)&&(s=new T(o.error.code,o.error.message)),a?new t(e,n,o.state,s):(m(Mi,"Failed to parse mutation state for ID '"+n+"': "+i),null)},t.prototype.toWebStorageJSON=function(){var t={state:this.state,updateTimeMs:Date.now()}
return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},t}(),Vi=function(){function t(t,e,n){this.targetId=t,this.state=e,this.error=n,w(void 0!==n==("rejected"===e),"QueryTargetMetadata must contain an error iff state is 'rejected'")}return t.fromWebStorageEntry=function(e,n){var i=JSON.parse(n),o="object"===r(i)&&-1!==["not-current","current","rejected"].indexOf(i.state)&&(void 0===i.error||"object"===r(i.error)),a=void 0
return o&&i.error&&(o="string"==typeof i.error.message&&"string"==typeof i.error.code)&&(a=new T(i.error.code,i.error.message)),o?new t(e,i.state,a):(m(Mi,"Failed to parse target state for ID '"+e+"': "+n),null)},t.prototype.toWebStorageJSON=function(){var t={state:this.state,updateTimeMs:Date.now()}
return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},t}(),Ui=function(){function t(t,e){this.clientId=t,this.activeTargetIds=e}return t.fromWebStorageEntry=function(e,n){for(var i=JSON.parse(n),o="object"===r(i)&&i.activeTargetIds instanceof Array,a=Ut(),s=0;o&&s<i.activeTargetIds.length;++s)o=lr(i.activeTargetIds[s]),a=a.add(i.activeTargetIds[s])
return o?new t(e,a):(m(Mi,"Failed to parse client data for instance '"+e+"': "+n),null)},t}(),Bi=function(){function t(t,e){this.clientId=t,this.onlineState=e}return t.fromWebStorageEntry=function(e){var n=JSON.parse(e)
return"object"===r(n)&&n.onlineState in pr&&"string"==typeof n.clientId?new t(n.clientId,pr[n.onlineState]):(m(Mi,"Failed to parse online state: "+e),null)},t}(),Qi=function(){function t(){this.activeTargetIds=Ut()}return t.prototype.addQueryTarget=function(t){w(!this.activeTargetIds.has(t),"Target with ID '"+t+"' already active."),this.activeTargetIds=this.activeTargetIds.add(t)},t.prototype.removeQueryTarget=function(t){this.activeTargetIds=this.activeTargetIds.delete(t)},t.prototype.toWebStorageJSON=function(){var t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()}
return JSON.stringify(t)},t}(),Ki=function(){function t(e,n,r,i,o){if(this.queue=e,this.platform=n,this.persistenceKey=r,this.localClientId=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.activeClients={},this.storageListener=this.handleWebStorageEvent.bind(this),this.started=!1,this.earlyEvents=[],!t.isAvailable(this.platform))throw new T(S.UNIMPLEMENTED,"LocalStorage is not available on this platform.")
var a=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
this.storage=this.platform.window.localStorage,this.currentUser=o,this.localClientStorageKey=this.toWebStorageClientStateKey(this.localClientId),this.sequenceNumberKey=qi+"_"+r,this.activeClients[this.localClientId]=new Qi,this.clientStateKeyRe=new RegExp("^"+xi+"_"+a+"_([^_]*)$"),this.mutationBatchKeyRe=new RegExp("^"+Oi+"_"+a+"_(\\d+)(?:_(.*))?$"),this.queryTargetKeyRe=new RegExp("^"+Li+"_"+a+"_(\\d+)$"),this.onlineStateKey=Pi+"_"+r,this.platform.window.addEventListener("storage",this.storageListener)}return t.isAvailable=function(t){return!(!t.window||null==t.window.localStorage)},t.prototype.start=function(){return s.__awaiter(this,void 0,void 0,function(){var t,e,n,r,i,o,a,u,c,h,l,f,d,p,y,m=this
return s.__generator(this,function(g){switch(g.label){case 0:return w(!this.started,"WebStorageSharedClientState already started"),w(null!==this.syncEngine,"syncEngine property must be set before calling start()"),w(null!==this.onlineStateHandler,"onlineStateHandler property must be set before calling start()"),[4,this.syncEngine.getActiveClients()]
case 1:t=g.sent()
try{for(e=s.__values(t),n=e.next();!n.done;n=e.next())(r=n.value)!==this.localClientId&&(i=this.getItem(this.toWebStorageClientStateKey(r)))&&(o=Ui.fromWebStorageEntry(r,i))&&(this.activeClients[o.clientId]=o)}catch(t){f={error:t}}finally{try{n&&!n.done&&(d=e.return)&&d.call(e)}finally{if(f)throw f.error}}this.persistClientState(),(a=this.storage.getItem(this.onlineStateKey))&&(u=this.fromWebStorageOnlineState(a))&&this.handleOnlineStateEvent(u)
try{for(c=s.__values(this.earlyEvents),h=c.next();!h.done;h=c.next())l=h.value,this.handleWebStorageEvent(l)}catch(t){p={error:t}}finally{try{h&&!h.done&&(y=c.return)&&y.call(c)}finally{if(p)throw p.error}}return this.earlyEvents=[],this.platform.window.addEventListener("unload",function(){return m.shutdown()}),this.started=!0,[2]}})})},t.prototype.writeSequenceNumber=function(t){this.setItem(this.sequenceNumberKey,JSON.stringify(t))},t.prototype.getAllActiveQueryTargets=function(){var t=Ut()
return N(this.activeClients,function(e,n){t=t.unionWith(n.activeTargetIds)}),t},t.prototype.isActiveQueryTarget=function(t){for(var e in this.activeClients)if(this.activeClients.hasOwnProperty(e)&&this.activeClients[e].activeTargetIds.has(t))return!0
return!1},t.prototype.addPendingMutation=function(t){this.persistMutationState(t,"pending")},t.prototype.updateMutationState=function(t,e,n){this.persistMutationState(t,e,n),this.removeMutationState(t)},t.prototype.addLocalQueryTarget=function(t){var e="not-current"
if(this.isActiveQueryTarget(t)){var n=this.storage.getItem(this.toWebStorageQueryTargetMetadataKey(t))
if(n){var r=Vi.fromWebStorageEntry(t,n)
r&&(e=r.state)}}return this.localClientState.addQueryTarget(t),this.persistClientState(),e},t.prototype.removeLocalQueryTarget=function(t){this.localClientState.removeQueryTarget(t),this.persistClientState()},t.prototype.isLocalQueryTarget=function(t){return this.localClientState.activeTargetIds.has(t)},t.prototype.clearQueryState=function(t){this.removeItem(this.toWebStorageQueryTargetMetadataKey(t))},t.prototype.updateQueryState=function(t,e,n){this.persistQueryTargetState(t,e,n)},t.prototype.handleUserChange=function(t,e,n){var r=this
e.forEach(function(t){r.removeMutationState(t)}),this.currentUser=t,n.forEach(function(t){r.addPendingMutation(t)})},t.prototype.setOnlineState=function(t){this.persistOnlineState(t)},t.prototype.shutdown=function(){this.started&&(this.platform.window.removeEventListener("storage",this.storageListener),this.removeItem(this.localClientStorageKey),this.started=!1)},t.prototype.getItem=function(t){var e=this.storage.getItem(t)
return y(Mi,"READ",t,e),e},t.prototype.setItem=function(t,e){y(Mi,"SET",t,e),this.storage.setItem(t,e)},t.prototype.removeItem=function(t){y(Mi,"REMOVE",t),this.storage.removeItem(t)},t.prototype.handleWebStorageEvent=function(t){var e=this
if(t.storageArea===this.storage){if(y(Mi,"EVENT",t.key,t.newValue),t.key===this.localClientStorageKey)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state")
this.queue.enqueueAndForget(function(){return s.__awaiter(e,void 0,void 0,function(){var e,n,r,i,o,a
return s.__generator(this,function(s){if(!this.started)return this.earlyEvents.push(t),[2]
if(null===t.key)return[2]
if(this.clientStateKeyRe.test(t.key)){if(null==t.newValue)return n=this.fromWebStorageClientStateKey(t.key),[2,this.handleClientStateEvent(n,null)]
if(e=this.fromWebStorageClientState(t.key,t.newValue))return[2,this.handleClientStateEvent(e.clientId,e)]}else if(this.mutationBatchKeyRe.test(t.key)){if(null!==t.newValue&&(r=this.fromWebStorageMutationMetadata(t.key,t.newValue)))return[2,this.handleMutationBatchEvent(r)]}else if(this.queryTargetKeyRe.test(t.key)){if(null!==t.newValue&&(i=this.fromWebStorageQueryTargetMetadata(t.key,t.newValue)))return[2,this.handleQueryTargetEvent(i)]}else if(t.key===this.onlineStateKey){if(null!==t.newValue&&(o=this.fromWebStorageOnlineState(t.newValue)))return[2,this.handleOnlineStateEvent(o)]}else t.key===this.sequenceNumberKey&&(w(!!this.sequenceNumberHandler,"Missing sequenceNumberHandler"),(a=function(t){var e=ot.INVALID
if(null!=t)try{var n=JSON.parse(t)
w("number"==typeof n,"Found non-numeric sequence number"),e=n}catch(t){m(Mi,"Failed to read sequence number from WebStorage",t)}return e}(t.newValue))!==ot.INVALID&&this.sequenceNumberHandler(a))
return[2]})})})}},Object.defineProperty(t.prototype,"localClientState",{get:function(){return this.activeClients[this.localClientId]},enumerable:!0,configurable:!0}),t.prototype.persistClientState=function(){this.setItem(this.localClientStorageKey,this.localClientState.toWebStorageJSON())},t.prototype.persistMutationState=function(t,e,n){var r=new Fi(this.currentUser,t,e,n),i=this.toWebStorageMutationBatchKey(t)
this.setItem(i,r.toWebStorageJSON())},t.prototype.removeMutationState=function(t){var e=this.toWebStorageMutationBatchKey(t)
this.removeItem(e)},t.prototype.persistOnlineState=function(t){var e={clientId:this.localClientId,onlineState:pr[t]}
this.storage.setItem(this.onlineStateKey,JSON.stringify(e))},t.prototype.persistQueryTargetState=function(t,e,n){var r=this.toWebStorageQueryTargetMetadataKey(t),i=new Vi(t,e,n)
this.setItem(r,i.toWebStorageJSON())},t.prototype.toWebStorageClientStateKey=function(t){return w(-1===t.indexOf("_"),"Client key cannot contain '_', but was '"+t+"'"),xi+"_"+this.persistenceKey+"_"+t},t.prototype.toWebStorageQueryTargetMetadataKey=function(t){return Li+"_"+this.persistenceKey+"_"+t},t.prototype.toWebStorageMutationBatchKey=function(t){var e=Oi+"_"+this.persistenceKey+"_"+t
return this.currentUser.isAuthenticated()&&(e+="_"+this.currentUser.uid),e},t.prototype.fromWebStorageClientStateKey=function(t){var e=this.clientStateKeyRe.exec(t)
return e?e[1]:null},t.prototype.fromWebStorageClientState=function(t,e){var n=this.fromWebStorageClientStateKey(t)
return w(null!==n,"Cannot parse client state key '"+t+"'"),Ui.fromWebStorageEntry(n,e)},t.prototype.fromWebStorageMutationMetadata=function(t,e){var n=this.mutationBatchKeyRe.exec(t)
w(null!==n,"Cannot parse mutation batch key '"+t+"'")
var r=Number(n[1]),i=void 0!==n[2]?n[2]:null
return Fi.fromWebStorageEntry(new Ri(i),r,e)},t.prototype.fromWebStorageQueryTargetMetadata=function(t,e){var n=this.queryTargetKeyRe.exec(t)
w(null!==n,"Cannot parse query target key '"+t+"'")
var r=Number(n[1])
return Vi.fromWebStorageEntry(r,e)},t.prototype.fromWebStorageOnlineState=function(t){return Bi.fromWebStorageEntry(t)},t.prototype.handleMutationBatchEvent=function(t){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){return t.user.uid!==this.currentUser.uid?(y(Mi,"Ignoring mutation for non-active user "+t.user.uid),[2]):[2,this.syncEngine.applyBatchState(t.batchId,t.state,t.error)]})})},t.prototype.handleQueryTargetEvent=function(t){return this.syncEngine.applyTargetState(t.targetId,t.state,t.error)},t.prototype.handleClientStateEvent=function(t,e){var n=this,r=this.getAllActiveQueryTargets()
e?this.activeClients[t]=e:delete this.activeClients[t]
var i=this.getAllActiveQueryTargets(),o=[],a=[]
return i.forEach(function(t){return s.__awaiter(n,void 0,void 0,function(){return s.__generator(this,function(e){return r.has(t)||o.push(t),[2]})})}),r.forEach(function(t){return s.__awaiter(n,void 0,void 0,function(){return s.__generator(this,function(e){return i.has(t)||a.push(t),[2]})})}),this.syncEngine.applyActiveTargetsChange(o,a)},t.prototype.handleOnlineStateEvent=function(t){this.activeClients[t.clientId]&&this.onlineStateHandler(t.onlineState)},t}(),Gi=function(){function t(){this.localState=new Qi,this.queryState={},this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null}return t.prototype.addPendingMutation=function(t){},t.prototype.updateMutationState=function(t,e,n){},t.prototype.addLocalQueryTarget=function(t){return this.localState.addQueryTarget(t),this.queryState[t]||"not-current"},t.prototype.updateQueryState=function(t,e,n){this.queryState[t]=e},t.prototype.removeLocalQueryTarget=function(t){this.localState.removeQueryTarget(t)},t.prototype.isLocalQueryTarget=function(t){return this.localState.activeTargetIds.has(t)},t.prototype.clearQueryState=function(t){delete this.queryState[t]},t.prototype.getAllActiveQueryTargets=function(){return this.localState.activeTargetIds},t.prototype.isActiveQueryTarget=function(t){return this.localState.activeTargetIds.has(t)},t.prototype.start=function(){return this.localState=new Qi,Promise.resolve()},t.prototype.handleUserChange=function(t,e,n){},t.prototype.setOnlineState=function(t){},t.prototype.shutdown=function(){},t.prototype.writeSequenceNumber=function(t){},t}(),Wi=function(){function t(t,e){this.cacheSizeBytes=t,this.synchronizeTabs=e}return t.prototype.lruParams=function(){return an.withCacheSize(this.cacheSizeBytes)},t}(),ji=function(){},zi=function(){function t(t,e,n,r){this.platform=t,this.databaseInfo=e,this.credentials=n,this.asyncQueue=r,this.clientId=z.newId(),this._clientShutdown=!1}return t.prototype.start=function(t){var e=this
this.verifyNotShutdown()
var n=new lt,r=new lt,i=!1
return this.credentials.setChangeListener(function(o){i?e.asyncQueue.enqueueAndForget(function(){return e.handleCredentialChange(o)}):(i=!0,e.initializePersistence(t,r,o).then(function(t){return e.initializeRest(o,t)}).then(n.resolve,n.reject))}),this.asyncQueue.enqueueAndForget(function(){return n.promise}),r.promise},t.prototype.enableNetwork=function(){var t=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return t.syncEngine.enableNetwork()})},t.prototype.initializePersistence=function(t,e,n){var r=this
return t instanceof Wi?this.startIndexedDbPersistence(n,t).then(function(t){return e.resolve(),t}).catch(function(t){if(e.reject(t),!r.canFallback(t))throw t
return console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.startMemoryPersistence()}):(e.resolve(),this.startMemoryPersistence())},t.prototype.canFallback=function(t){return t instanceof T?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code},t.prototype.verifyNotShutdown=function(){if(this._clientShutdown)throw new T(S.FAILED_PRECONDITION,"The client has already been shutdown.")},t.prototype.startIndexedDbPersistence=function(t,e){var n=this,r=pn.buildStoragePrefix(this.databaseInfo),i=new bi(this.databaseInfo.databaseId,{useProto3Json:!0})
return Promise.resolve().then(function(){return s.__awaiter(n,void 0,void 0,function(){var n,o
return s.__generator(this,function(a){switch(a.label){case 0:if(e.synchronizeTabs&&!Ki.isAvailable(this.platform))throw new T(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.")
return o=e.lruParams(),e.synchronizeTabs?(this.sharedClientState=new Ki(this.asyncQueue,this.platform,r,this.clientId,t),[4,pn.createMultiClientIndexedDbPersistence(r,this.clientId,this.platform,this.asyncQueue,i,o,{sequenceNumberSyncer:this.sharedClientState})]):[3,2]
case 1:return n=a.sent(),[3,4]
case 2:return this.sharedClientState=new Gi,[4,pn.createIndexedDbPersistence(r,this.clientId,this.platform,this.asyncQueue,i,o)]
case 3:n=a.sent(),a.label=4
case 4:return this.persistence=n,[2,n.referenceDelegate.garbageCollector]}})})})},t.prototype.startMemoryPersistence=function(){return this.persistence=nr.createEagerPersistence(this.clientId),this.sharedClientState=new Gi,Promise.resolve(null)},t.prototype.initializeRest=function(t,e){var n=this
return y("FirestoreClient","Initializing. user=",t.uid),this.platform.loadConnection(this.databaseInfo).then(function(r){return s.__awaiter(n,void 0,void 0,function(){var n,i,o,a,u,c=this
return s.__generator(this,function(h){switch(h.label){case 0:return this.localStore=new Jn(this.persistence,t),e&&(this.lruScheduler=new sn(e,this.asyncQueue,this.localStore)),n=this.platform.newConnectivityMonitor(),i=this.platform.newSerializer(this.databaseInfo.databaseId),o=new Sr(this.asyncQueue,r,this.credentials,i),a=function(t){return c.syncEngine.applyOnlineStateChange(t,yr.RemoteStore)},u=function(t){return c.syncEngine.applyOnlineStateChange(t,yr.SharedClientState)},this.remoteStore=new Wr(this.localStore,o,this.asyncQueue,a,n),this.syncEngine=new ki(this.localStore,this.remoteStore,this.sharedClientState,t),this.sharedClientState.onlineStateHandler=u,this.remoteStore.syncEngine=this.syncEngine,this.sharedClientState.syncEngine=this.syncEngine,this.eventMgr=new Si(this.syncEngine),[4,this.sharedClientState.start()]
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
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return e.localStore.readDocument(t)}).then(function(t){if(t instanceof pe)return t
if(t instanceof ye)return null
throw new T(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")})},t.prototype.getDocumentsFromLocalCache=function(t){var e=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return e.localStore.executeQuery(t)}).then(function(e){var n=Ft(),r=new Di(t,n),i=r.computeDocChanges(e)
return r.applyChanges(i,!1).snapshot})},t.prototype.write=function(t){var e=this
this.verifyNotShutdown()
var n=new lt
return this.asyncQueue.enqueueAndForget(function(){return e.syncEngine.write(t,n)}),n.promise},t.prototype.databaseId=function(){return this.databaseInfo.databaseId},Object.defineProperty(t.prototype,"clientShutdown",{get:function(){return this._clientShutdown},enumerable:!0,configurable:!0}),t.prototype.transaction=function(t){var e=this
return this.verifyNotShutdown(),this.asyncQueue.enqueue(function(){return s.__awaiter(e,void 0,void 0,function(){return s.__generator(this,function(t){return[2]})})}).then(function(){return e.syncEngine.runTransaction(t)})},t}(),Hi=function(){function t(t){this.observer=t,this.muted=!1}return t.prototype.next=function(t){this.scheduleEvent(this.observer.next,t)},t.prototype.error=function(t){this.scheduleEvent(this.observer.error,t)},t.prototype.mute=function(){this.muted=!0},t.prototype.scheduleEvent=function(t,e){var n=this
this.muted||setTimeout(function(){n.muted||t(e)},0)},t}(),Yi=function(){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
!function(t,e,n,r){if(!(e instanceof Array)||e.length<1)throw new T(S.INVALID_ARGUMENT,"Function FieldPath() requires its fieldNames argument to be an array with at least "+j(1,"element")+".")}(0,t)
for(var n=0;n<t.length;++n)if(O("FieldPath","string",n,t[n]),0===t[n].length)throw new T(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.")
this._internalPath=new ct(t)}return t.documentId=function(){return t._DOCUMENT_ID},t.prototype.isEqual=function(e){if(!(e instanceof t))throw G("isEqual","FieldPath",1,e)
return this._internalPath.isEqual(e._internalPath)},t._DOCUMENT_ID=new t(ct.keyField().canonicalString()),t}(),Xi=new RegExp("[~\\*/\\[\\]]"),Ji=function(t,e){this.user=e,this.type="OAuth",this.authHeaders={Authorization:"Bearer "+t}},Zi=function(){function t(){this.changeListener=null}return t.prototype.getToken=function(){return Promise.resolve(null)},t.prototype.invalidateToken=function(){},t.prototype.setChangeListener=function(t){w(!this.changeListener,"Can only call setChangeListener() once."),this.changeListener=t,t(Ri.UNAUTHENTICATED)},t.prototype.removeChangeListener=function(){w(null!==this.changeListener,"removeChangeListener() when no listener registered"),this.changeListener=null},t}(),$i=function(){function t(t){var e=this
this.app=t,this.tokenListener=null,this.tokenCounter=0,this.changeListener=null,this.forceRefresh=!1,this.tokenListener=function(){e.tokenCounter++,e.currentUser=e.getUser(),e.changeListener&&e.changeListener(e.currentUser)},this.tokenCounter=0,this.app.INTERNAL.addAuthTokenListener(this.tokenListener)}return t.prototype.getToken=function(){var t=this
w(null!=this.tokenListener,"getToken cannot be called after listener removed.")
var e=this.tokenCounter,n=this.forceRefresh
return this.forceRefresh=!1,this.app.INTERNAL.getToken(n).then(function(n){if(t.tokenCounter!==e)throw new T(S.ABORTED,"getToken aborted due to token change.")
return n?(w("string"==typeof n.accessToken,"Invalid tokenData returned from getToken():"+n),new Ji(n.accessToken,t.currentUser)):null})},t.prototype.invalidateToken=function(){this.forceRefresh=!0},t.prototype.setChangeListener=function(t){w(!this.changeListener,"Can only call setChangeListener() once."),this.changeListener=t,this.currentUser&&t(this.currentUser)},t.prototype.removeChangeListener=function(){w(null!=this.tokenListener,"removeChangeListener() called twice"),w(null!==this.changeListener,"removeChangeListener() called when no listener registered"),this.app.INTERNAL.removeAuthTokenListener(this.tokenListener),this.tokenListener=null,this.changeListener=null},t.prototype.getUser=function(){var t=this.app.INTERNAL.getUid()
return w(null===t||"string"==typeof t,"Received invalid UID: "+t),new Ri(t)},t}(),to=function(){function t(t,e){this.gapi=t,this.sessionIndex=e,this.type="FirstParty",this.user=Ri.FIRST_PARTY}return Object.defineProperty(t.prototype,"authHeaders",{get:function(){var t={"X-Goog-AuthUser":this.sessionIndex},e=this.gapi.auth.getAuthHeaderValueForFirstParty([])
return e&&(t.Authorization=e),t},enumerable:!0,configurable:!0}),t}(),eo=function(){function t(t,e){this.gapi=t,this.sessionIndex=e}return t.prototype.getToken=function(){return Promise.resolve(new to(this.gapi,this.sessionIndex))},t.prototype.setChangeListener=function(t){t(Ri.FIRST_PARTY)},t.prototype.removeChangeListener=function(){},t.prototype.invalidateToken=function(){},t}()
function no(t){return function(t,e){var n,i
if("object"!==r(t)||null===t)return!1
var o=t
try{for(var a=s.__values(["next","error","complete"]),u=a.next();!u.done;u=a.next()){var c=u.value
if(c in o&&"function"==typeof o[c])return!0}}catch(t){n={error:t}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}return!1}(t)}var ro,io=function(){function t(t){this._methodName=t}return t.delete=function(){return k("FieldValue.delete",arguments),oo.instance},t.serverTimestamp=function(){return k("FieldValue.serverTimestamp",arguments),ao.instance},t.arrayUnion=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return M("FieldValue.arrayUnion",arguments,1),new so(t)},t.arrayRemove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return M("FieldValue.arrayRemove",arguments,1),new uo(t)},t.increment=function(t){return O("FieldValue.increment","number",1,t),R("FieldValue.increment",arguments,1),new co(t)},t.prototype.isEqual=function(t){return this===t},t}(),oo=function(t){function e(){return t.call(this,"FieldValue.delete")||this}return s.__extends(e,t),e.instance=new e,e}(io),ao=function(t){function e(){return t.call(this,"FieldValue.serverTimestamp")||this}return s.__extends(e,t),e.instance=new e,e}(io),so=function(t){function e(e){var n=t.call(this,"FieldValue.arrayUnion")||this
return n._elements=e,n}return s.__extends(e,t),e}(io),uo=function(t){function e(e){var n=t.call(this,"FieldValue.arrayRemove")||this
return n._elements=e,n}return s.__extends(e,t),e}(io),co=function(t){function e(e){var n=t.call(this,"FieldValue.increment")||this
return n._operand=e,n}return s.__extends(e,t),e}(io),ho=I(io,"Use FieldValue.<field>() instead."),lo=/^__.*__$/,fo=function(){function t(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}return t.prototype.toMutations=function(t,e){var n=[]
return null!==this.fieldMask?n.push(new Wn(t,this.data,this.fieldMask,e)):n.push(new Gn(t,this.data,e)),this.fieldTransforms.length>0&&n.push(new jn(t,this.fieldTransforms)),n},t}(),po=function(){function t(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}return t.prototype.toMutations=function(t,e){var n=[new Wn(t,this.data,this.fieldMask,e)]
return this.fieldTransforms.length>0&&n.push(new jn(t,this.fieldTransforms)),n},t}()
function yo(t){switch(t){case ro.Set:case ro.MergeSet:case ro.Update:return!0
case ro.Argument:return!1
default:throw v("Unexpected case for UserDataSource: "+t)}}!function(t){t[t.Set=0]="Set",t[t.Update=1]="Update",t[t.MergeSet=2]="MergeSet",t[t.Argument=3]="Argument"}(ro||(ro={}))
var mo=function(){function t(t,e,n,r,i,o){this.dataSource=t,this.methodName=e,this.path=n,this.arrayElement=r,void 0===i&&this.validatePath(),this.arrayElement=void 0!==r&&r,this.fieldTransforms=i||[],this.fieldMask=o||[]}return t.prototype.childContextForField=function(e){var n=null==this.path?null:this.path.child(e),r=new t(this.dataSource,this.methodName,n,!1,this.fieldTransforms,this.fieldMask)
return r.validatePathSegment(e),r},t.prototype.childContextForFieldPath=function(e){var n=null==this.path?null:this.path.child(e),r=new t(this.dataSource,this.methodName,n,!1,this.fieldTransforms,this.fieldMask)
return r.validatePath(),r},t.prototype.childContextForArray=function(e){return new t(this.dataSource,this.methodName,null,!0,this.fieldTransforms,this.fieldMask)},t.prototype.createError=function(t){var e=null===this.path||this.path.isEmpty()?"":" (found in field "+this.path.toString()+")"
return new T(S.INVALID_ARGUMENT,"Function "+this.methodName+"() called with invalid data. "+t+e)},t.prototype.contains=function(t){return void 0!==this.fieldMask.find(function(e){return t.isPrefixOf(e)})||void 0!==this.fieldTransforms.find(function(e){return t.isPrefixOf(e.field)})},t.prototype.validatePath=function(){if(null!==this.path)for(var t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))},t.prototype.validatePathSegment=function(t){if(yo(this.dataSource)&&lo.test(t))throw this.createError("Document fields cannot begin and end with __")},t}(),go=function(t,e){this.databaseId=t,this.key=e},vo=function(){function t(t){this.preConverter=t}return t.prototype.parseSetData=function(t,e){var n=new mo(ro.Set,t,ct.EMPTY_PATH)
bo("Data must be an object, but it was:",n,e)
var r=this.parseData(e,n)
return new fo(r,null,n.fieldTransforms)},t.prototype.parseMergeData=function(t,e,n){var r,i,o=new mo(ro.MergeSet,t,ct.EMPTY_PATH)
bo("Data must be an object, but it was:",o,e)
var a,u,c=this.parseData(e,o)
if(n){var h=new Nt(ct.comparator)
try{for(var l=s.__values(n),f=l.next();!f.done;f=l.next()){var d=f.value,p=void 0
if(d instanceof Yi)p=d._internalPath
else{if("string"!=typeof d)throw v("Expected stringOrFieldPath to be a string or a FieldPath")
p=So(t,d)}if(!o.contains(p))throw new T(S.INVALID_ARGUMENT,"Field '"+p+"' is specified in your field mask but missing from your input data.")
h=h.add(p)}}catch(t){r={error:t}}finally{try{f&&!f.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}a=Vn.fromSet(h),u=o.fieldTransforms.filter(function(t){return a.covers(t.field)})}else a=Vn.fromArray(o.fieldMask),u=o.fieldTransforms
return new fo(c,a,u)},t.prototype.parseUpdateData=function(t,e){var n=this,r=new mo(ro.Update,t,ct.EMPTY_PATH)
bo("Data must be an object, but it was:",r,e)
var i=new Nt(ct.comparator),o=qn.EMPTY
N(e,function(e,a){var s=So(t,e),u=r.childContextForFieldPath(s)
if((a=n.runPreConverter(a,u))instanceof oo)i=i.add(s)
else{var c=n.parseData(a,u)
null!=c&&(i=i.add(s),o=o.set(s,c))}})
var a=Vn.fromSet(i)
return new po(o,a,r.fieldTransforms)},t.prototype.parseUpdateVarargs=function(t,e,n,r){var i=new mo(ro.Update,t,ct.EMPTY_PATH),o=[Eo(t,e)],a=[n]
if(r.length%2!=0)throw new T(S.INVALID_ARGUMENT,"Function "+t+"() needs to be called with an even number of arguments that alternate between field names and values.")
for(var s=0;s<r.length;s+=2)o.push(Eo(t,r[s])),a.push(r[s+1])
var u=new Nt(ct.comparator),c=qn.EMPTY
for(s=0;s<o.length;++s){var h=o[s],l=i.childContextForFieldPath(h),f=this.runPreConverter(a[s],l)
if(f instanceof oo)u=u.add(h)
else{var d=this.parseData(f,l)
null!=d&&(u=u.add(h),c=c.set(h,d))}}var p=Vn.fromSet(u)
return new po(c,p,i.fieldTransforms)},t.prototype.parseQueryValue=function(t,e){var n=new mo(ro.Argument,t,ct.EMPTY_PATH),r=this.parseData(e,n)
return w(null!=r,"Parsed data should not be null."),w(0===n.fieldTransforms.length,"Field transforms should have been disallowed."),r},t.prototype.runPreConverter=function(t,e){try{return this.preConverter(t)}catch(t){var n=To(t)
throw e.createError(n)}},t.prototype.parseData=function(t,e){if(wo(t=this.runPreConverter(t,e)))return bo("Unsupported field value:",e,t),this.parseObject(t,e)
if(t instanceof io)return this.parseSentinelFieldValue(t,e),null
if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.arrayElement)throw e.createError("Nested arrays are not supported")
return this.parseArray(t,e)}return this.parseScalarValue(t,e)},t.prototype.parseObject=function(t,e){var n=this,r=new It(H)
return A(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):N(t,function(t,i){var o=n.parseData(i,e.childContextForField(t))
null!=o&&(r=r.insert(t,o))}),new qn(r)},t.prototype.parseArray=function(t,e){var n,r,i=[],o=0
try{for(var a=s.__values(t),u=a.next();!u.done;u=a.next()){var c=u.value,h=this.parseData(c,e.childContextForArray(o))
null==h&&(h=In.INSTANCE),i.push(h),o++}}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return new Fn(i)},t.prototype.parseSentinelFieldValue=function(t,e){if(!yo(e.dataSource))throw e.createError(t._methodName+"() can only be used with update() and set()")
if(null===e.path)throw e.createError(t._methodName+"() is not currently supported inside arrays")
if(t instanceof oo){if(e.dataSource!==ro.MergeSet)throw e.dataSource===ro.Update?(w(e.path.length>0,"FieldValue.delete() at the top level should have already been handled."),e.createError("FieldValue.delete() can only appear at the top level of your update data")):e.createError("FieldValue.delete() cannot be used with set() unless you pass {merge:true}")
e.fieldMask.push(e.path)}else if(t instanceof ao)e.fieldTransforms.push(new Un(e.path,si.instance))
else if(t instanceof so){var n=this.parseArrayTransformElements(t._methodName,t._elements),r=new ui(n)
e.fieldTransforms.push(new Un(e.path,r))}else if(t instanceof uo){n=this.parseArrayTransformElements(t._methodName,t._elements)
var i=new ci(n)
e.fieldTransforms.push(new Un(e.path,i))}else if(t instanceof co){var o=this.parseQueryValue("FieldValue.increment",t._operand),a=new hi(o)
e.fieldTransforms.push(new Un(e.path,a))}else v("Unknown FieldValue type: "+t)},t.prototype.parseScalarValue=function(t,e){if(null===t)return In.INSTANCE
if("number"==typeof t)return lr(t)?new An(t):new kn(t)
if("boolean"==typeof t)return Cn.of(t)
if("string"==typeof t)return new Rn(t)
if(t instanceof Date)return new Mn(St.fromDate(t))
if(t instanceof St)return new Mn(new St(t.seconds,1e3*Math.floor(t.nanoseconds/1e3)))
if(t instanceof jr)return new Pn(t)
if(t instanceof tt)return new On(t)
if(t instanceof go)return new Ln(t.databaseId,t.key)
throw e.createError("Unsupported field value: "+B(t))},t.prototype.parseArrayTransformElements=function(t,e){var n=this
return e.map(function(e,r){var i=new mo(ro.Argument,t,ct.EMPTY_PATH)
return n.parseData(e,i.childContextForArray(r))})},t}()
function wo(t){return!("object"!==r(t)||null===t||t instanceof Array||t instanceof Date||t instanceof St||t instanceof jr||t instanceof tt||t instanceof go||t instanceof io)}function bo(t,e,n){if(!wo(n)||!U(n)){var r=B(n)
throw"an object"===r?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Eo(t,e){if(e instanceof Yi)return e._internalPath
if("string"==typeof e)return So(t,e)
throw new T(S.INVALID_ARGUMENT,"Function "+t+"() called with invalid data. Field path arguments must be of type string or FieldPath.")}function So(t,e){try{return function(t){if(t.search(Xi)>=0)throw new T(S.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not contain '~', '*', '/', '[', or ']'")
try{return new(Yi.bind.apply(Yi,s.__spread([void 0],t.split("."))))}catch(e){throw new T(S.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")}}(e)._internalPath}catch(e){var n=To(e)
throw new T(S.INVALID_ARGUMENT,"Function "+t+"() called with invalid data. "+n)}}function To(t){return t instanceof Error?t.message:t.toString()}var Io="firestore.googleapis.com",Co=!0,_o=!0,Do=!1,No=an.COLLECTION_DISABLED,Ao=function(){function t(t){if(void 0===t.host){if(void 0!==t.ssl)throw new T(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set")
this.host=Io,this.ssl=Co}else P("settings","non-empty string","host",t.host),this.host=t.host,q("settings","boolean","ssl",t.ssl),this.ssl=_(t.ssl,Co)
if(K("settings",t,["host","ssl","credentials","timestampsInSnapshots","cacheSizeBytes","experimentalForceLongPolling"]),q("settings","object","credentials",t.credentials),this.credentials=t.credentials,q("settings","boolean","timestampsInSnapshots",t.timestampsInSnapshots),!0===t.timestampsInSnapshots?m("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now."):!1===t.timestampsInSnapshots&&m("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."),this.timestampsInSnapshots=_(t.timestampsInSnapshots,_o),q("settings","number","cacheSizeBytes",t.cacheSizeBytes),void 0===t.cacheSizeBytes)this.cacheSizeBytes=an.DEFAULT_CACHE_SIZE_BYTES
else{if(t.cacheSizeBytes!==No&&t.cacheSizeBytes<an.MINIMUM_CACHE_SIZE_BYTES)throw new T(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least "+an.MINIMUM_CACHE_SIZE_BYTES)
this.cacheSizeBytes=t.cacheSizeBytes}q("settings","boolean","experimentalForceLongPolling",t.experimentalForceLongPolling),this.forceLongPolling=void 0===t.experimentalForceLongPolling?Do:t.experimentalForceLongPolling}return t.prototype.isEqual=function(t){return this.host===t.host&&this.ssl===t.ssl&&this.timestampsInSnapshots===t.timestampsInSnapshots&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.forceLongPolling===t.forceLongPolling},t}(),ko=function(){},Ro=function(){function t(e){var n=this
this._queue=new dt,this.INTERNAL={delete:function(){return s.__awaiter(n,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.ensureClientConfigured(),[4,this._firestoreClient.shutdown()]
case 1:return t.sent(),[2]}})})}}
var i=new ko
if("object"===r(e.options)){var o=e
i.firebaseApp=o,i.databaseId=t.databaseIdFromApp(o),i.persistenceKey=i.firebaseApp.name,i.credentials=new $i(o)}else{var a=e
if(!a.projectId)throw new T(S.INVALID_ARGUMENT,"Must provide projectId")
i.databaseId=new it(a.projectId,a.database),i.persistenceKey="[DEFAULT]",i.credentials=new Zi}i.settings=new Ao({}),this._config=i,this._databaseId=i.databaseId}return t.prototype.settings=function(t){if(R("Firestore.settings",arguments,1),O("Firestore.settings","object",1,t),C(t,"persistence"))throw new T(S.INVALID_ARGUMENT,'"persistence" is now specified with a separate call to firestore.enablePersistence().')
var e=new Ao(t)
if(this._firestoreClient&&!this._config.settings.isEqual(e))throw new T(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.")
this._config.settings=e,void 0!==e.credentials&&(this._config.credentials=function(t){if(!t)return new Zi
switch(t.type){case"gapi":var e=t.client
return w(!("object"!==r(e)||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty),"unexpected gapi interface"),new eo(e,t.sessionIndex||"0")
case"provider":return t.client
default:throw new T(S.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))},t.prototype.enableNetwork=function(){return this.ensureClientConfigured(),this._firestoreClient.enableNetwork()},t.prototype.disableNetwork=function(){return this.ensureClientConfigured(),this._firestoreClient.disableNetwork()},t.prototype.enablePersistence=function(t){if(this._firestoreClient)throw new T(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.")
var e=!1
return t&&(void 0!==t.experimentalTabSynchronization&&m("The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."),e=_(void 0!==t.synchronizeTabs?t.synchronizeTabs:t.experimentalTabSynchronization,!1)),this.configureClient(new Wi(this._config.settings.cacheSizeBytes,e))},t.prototype.clearPersistence=function(){var t=this,e=pn.buildStoragePrefix(this.makeDatabaseInfo()),n=new lt
return this._queue.enqueueAndForget(function(){return s.__awaiter(t,void 0,void 0,function(){var t
return s.__generator(this,function(r){switch(r.label){case 0:if(r.trys.push([0,2,,3]),void 0!==this._firestoreClient&&!this._firestoreClient.clientShutdown)throw new T(S.FAILED_PRECONDITION,"Persistence cannot be cleared after this Firestore instance is initialized.")
return[4,pn.clearPersistence(e)]
case 1:return r.sent(),n.resolve(),[3,3]
case 2:return t=r.sent(),n.reject(t),[3,3]
case 3:return[2]}})})}),n.promise},t.prototype.ensureClientConfigured=function(){return this._firestoreClient||this.configureClient(new ji),this._firestoreClient},t.prototype.makeDatabaseInfo=function(){return new nt(this._config.databaseId,this._config.persistenceKey,this._config.settings.host,this._config.settings.ssl,this._config.settings.forceLongPolling)},t.prototype.configureClient=function(t){var e=this
w(!!this._config.settings.host,"FirestoreSettings.host cannot be falsey"),w(!this._firestoreClient,"configureClient() called multiple times")
var n=this.makeDatabaseInfo()
return this._dataConverter=new vo(function(t){if(t instanceof Oo){var n=e._config.databaseId,r=t.firestore._config.databaseId
if(!r.isEqual(n))throw new T(S.INVALID_ARGUMENT,"Document reference is for database "+r.projectId+"/"+r.database+" but should be for database "+n.projectId+"/"+n.database)
return new go(e._config.databaseId,t._key)}return t}),this._firestoreClient=new zi(b.getPlatform(),n,this._config.credentials,this._queue),this._firestoreClient.start(t)},t.databaseIdFromApp=function(t){var e=t.options
if(!C(e,"projectId"))throw new T(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.')
var n=e.projectId
if(!n||"string"!=typeof n)throw new T(S.INVALID_ARGUMENT,"projectId must be a string in FirebaseApp.options")
return new it(n)},Object.defineProperty(t.prototype,"app",{get:function(){if(!this._config.firebaseApp)throw new T(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available")
return this._config.firebaseApp},enumerable:!0,configurable:!0}),t.prototype.collection=function(t){return R("Firestore.collection",arguments,1),O("Firestore.collection","non-empty string",1,t),this.ensureClientConfigured(),new Uo(st.fromString(t),this)},t.prototype.doc=function(t){return R("Firestore.doc",arguments,1),O("Firestore.doc","non-empty string",1,t),this.ensureClientConfigured(),Oo.forPath(st.fromString(t),this)},t.prototype.collectionGroup=function(t){if(R("Firestore.collectionGroup",arguments,1),O("Firestore.collectionGroup","non-empty string",1,t),t.indexOf("/")>=0)throw new T(S.INVALID_ARGUMENT,"Invalid collection ID '"+t+"' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.")
return this.ensureClientConfigured(),new Fo(new zr(st.EMPTY_PATH,t),this)},t.prototype.runTransaction=function(t){var e=this
return R("Firestore.runTransaction",arguments,1),O("Firestore.runTransaction","function",1,t),this.ensureClientConfigured().transaction(function(n){return t(new Mo(e,n))})},t.prototype.batch=function(){return this.ensureClientConfigured(),new xo(this)},Object.defineProperty(t,"logLevel",{get:function(){switch(d()){case o.DEBUG:return"debug"
case o.ERROR:return"error"
case o.SILENT:return"silent"
default:return v("Unknown log level: "+d())}},enumerable:!0,configurable:!0}),t.setLogLevel=function(t){switch(R("Firestore.setLogLevel",arguments,1),O("Firestore.setLogLevel","non-empty string",1,t),t){case"debug":p(o.DEBUG)
break
case"error":p(o.ERROR)
break
case"silent":p(o.SILENT)
break
default:throw new T(S.INVALID_ARGUMENT,"Invalid log level: "+t)}},t.prototype._areTimestampsInSnapshotsEnabled=function(){return this._config.settings.timestampsInSnapshots},t}(),Mo=function(){function t(t,e){this._firestore=t,this._transaction=e}return t.prototype.get=function(t){var e=this
R("Transaction.get",arguments,1)
var n=Go("Transaction.get",t,this._firestore)
return this._transaction.lookup([n._key]).then(function(t){if(!t||1!==t.length)return v("Mismatch in docs returned from document lookup.")
var r=t[0]
if(r instanceof ye)return new Po(e._firestore,n._key,null,!1,!1)
if(r instanceof pe)return new Po(e._firestore,n._key,r,!1,!1)
throw v("BatchGetDocumentsRequest returned unexpected document type: "+r.constructor.name)})},t.prototype.set=function(t,e,n){x("Transaction.set",arguments,2,3)
var r=Go("Transaction.set",t,this._firestore),i=(n=Bo("Transaction.set",n)).merge||n.mergeFields?this._firestore._dataConverter.parseMergeData("Transaction.set",e,n.mergeFields):this._firestore._dataConverter.parseSetData("Transaction.set",e)
return this._transaction.set(r._key,i),this},t.prototype.update=function(t,e,n){for(var r,i,o=[],a=3;a<arguments.length;a++)o[a-3]=arguments[a]
return"string"==typeof e||e instanceof Yi?(M("Transaction.update",arguments,3),r=Go("Transaction.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateVarargs("Transaction.update",e,n,o)):(R("Transaction.update",arguments,2),r=Go("Transaction.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateData("Transaction.update",e)),this._transaction.update(r._key,i),this},t.prototype.delete=function(t){R("Transaction.delete",arguments,1)
var e=Go("Transaction.delete",t,this._firestore)
return this._transaction.delete(e._key),this},t}(),xo=function(){function t(t){this._firestore=t,this._mutations=[],this._committed=!1}return t.prototype.set=function(t,e,n){x("WriteBatch.set",arguments,2,3),this.verifyNotCommitted()
var r=Go("WriteBatch.set",t,this._firestore),i=(n=Bo("WriteBatch.set",n)).merge||n.mergeFields?this._firestore._dataConverter.parseMergeData("WriteBatch.set",e,n.mergeFields):this._firestore._dataConverter.parseSetData("WriteBatch.set",e)
return this._mutations=this._mutations.concat(i.toMutations(r._key,Qn.NONE)),this},t.prototype.update=function(t,e,n){for(var r,i,o=[],a=3;a<arguments.length;a++)o[a-3]=arguments[a]
return this.verifyNotCommitted(),"string"==typeof e||e instanceof Yi?(M("WriteBatch.update",arguments,3),r=Go("WriteBatch.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateVarargs("WriteBatch.update",e,n,o)):(R("WriteBatch.update",arguments,2),r=Go("WriteBatch.update",t,this._firestore),i=this._firestore._dataConverter.parseUpdateData("WriteBatch.update",e)),this._mutations=this._mutations.concat(i.toMutations(r._key,Qn.exists(!0))),this},t.prototype.delete=function(t){R("WriteBatch.delete",arguments,1),this.verifyNotCommitted()
var e=Go("WriteBatch.delete",t,this._firestore)
return this._mutations=this._mutations.concat(new zn(e._key,Qn.NONE)),this},t.prototype.commit=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){return this.verifyNotCommitted(),this._committed=!0,this._mutations.length>0?[2,this._firestore.ensureClientConfigured().write(this._mutations)]:[2]})})},t.prototype.verifyNotCommitted=function(){if(this._committed)throw new T(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")},t}(),Oo=function(){function t(t,e){this._key=t,this.firestore=e,this._firestoreClient=this.firestore.ensureClientConfigured()}return t.forPath=function(e,n){if(e.length%2!=0)throw new T(S.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but "+e.canonicalString()+" has "+e.length)
return new t(new ht(e),n)},Object.defineProperty(t.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return new Uo(this._key.path.popLast(),this.firestore)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"path",{get:function(){return this._key.path.canonicalString()},enumerable:!0,configurable:!0}),t.prototype.collection=function(t){if(R("DocumentReference.collection",arguments,1),O("DocumentReference.collection","non-empty string",1,t),!t)throw new T(S.INVALID_ARGUMENT,"Must provide a non-empty collection name to collection()")
var e=st.fromString(t)
return new Uo(this._key.path.child(e),this.firestore)},t.prototype.isEqual=function(e){if(!(e instanceof t))throw G("isEqual","DocumentReference",1,e)
return this.firestore===e.firestore&&this._key.isEqual(e._key)},t.prototype.set=function(t,e){x("DocumentReference.set",arguments,1,2)
var n=(e=Bo("DocumentReference.set",e)).merge||e.mergeFields?this.firestore._dataConverter.parseMergeData("DocumentReference.set",t,e.mergeFields):this.firestore._dataConverter.parseSetData("DocumentReference.set",t)
return this._firestoreClient.write(n.toMutations(this._key,Qn.NONE))},t.prototype.update=function(t,e){for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
return"string"==typeof t||t instanceof Yi?(M("DocumentReference.update",arguments,2),n=this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update",t,e,r)):(R("DocumentReference.update",arguments,1),n=this.firestore._dataConverter.parseUpdateData("DocumentReference.update",t)),this._firestoreClient.write(n.toMutations(this._key,Qn.exists(!0)))},t.prototype.delete=function(){return R("DocumentReference.delete",arguments,0),this._firestoreClient.write([new zn(this._key,Qn.NONE)])},t.prototype.onSnapshot=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
x("DocumentReference.onSnapshot",arguments,1,4)
var n,i={includeMetadataChanges:!1},o=0
"object"!==r(t[o])||no(t[o])||(K("DocumentReference.onSnapshot",i=t[o],["includeMetadataChanges"]),q("DocumentReference.onSnapshot","boolean","includeMetadataChanges",i.includeMetadataChanges),o++)
var a={includeMetadataChanges:i.includeMetadataChanges}
return no(t[o])?n=t[o]:(O("DocumentReference.onSnapshot","function",o,t[o]),L("DocumentReference.onSnapshot","function",o+1,t[o+1]),L("DocumentReference.onSnapshot","function",o+2,t[o+2]),n={next:t[o],error:t[o+1],complete:t[o+2]}),this.onSnapshotInternal(a,n)},t.prototype.onSnapshotInternal=function(t,e){var n=this,r=function(t){console.error("Uncaught Error in onSnapshot:",t)}
e.error&&(r=e.error.bind(e))
var i=new Hi({next:function(t){if(e.next){w(t.docs.size<=1,"Too many documents returned on a document query")
var r=t.docs.get(n._key)
e.next(new Po(n.firestore,n._key,r,t.fromCache,t.hasPendingWrites))}},error:r}),o=this._firestoreClient.listen(zr.atPath(this._key.path),i,t)
return function(){i.mute(),n._firestoreClient.unlisten(o)}},t.prototype.get=function(t){var e=this
return x("DocumentReference.get",arguments,0,1),Ko("DocumentReference.get",t),new Promise(function(n,r){t&&"cache"===t.source?e.firestore.ensureClientConfigured().getDocumentFromLocalCache(e._key).then(function(t){n(new Po(e.firestore,e._key,t,!0,t instanceof pe&&t.hasLocalMutations))},r):e.getViaSnapshotListener(n,r,t)})},t.prototype.getViaSnapshotListener=function(t,e,n){var r=this.onSnapshotInternal({includeMetadataChanges:!0,waitForSyncWhenOnline:!0},{next:function(i){r(),!i.exists&&i.metadata.fromCache?e(new T(S.UNAVAILABLE,"Failed to get document because the client is offline.")):i.exists&&i.metadata.fromCache&&n&&"server"===n.source?e(new T(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):t(i)},error:e})},t}(),Lo=function(){function t(t,e){this.hasPendingWrites=t,this.fromCache=e}return t.prototype.isEqual=function(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache},t}(),Po=function(){function t(t,e,n,r,i){this._firestore=t,this._key=e,this._document=n,this._fromCache=r,this._hasPendingWrites=i}return t.prototype.data=function(t){return x("DocumentSnapshot.data",arguments,0,1),t=Qo("DocumentSnapshot.data",t),this._document?this.convertObject(this._document.data,Sn.fromSnapshotOptions(t,this._firestore._areTimestampsInSnapshotsEnabled())):void 0},t.prototype.get=function(t,e){if(x("DocumentSnapshot.get",arguments,1,2),e=Qo("DocumentSnapshot.get",e),this._document){var n=this._document.data.field(Eo("DocumentSnapshot.get",t))
if(null!==n)return this.convertValue(n,Sn.fromSnapshotOptions(e,this._firestore._areTimestampsInSnapshotsEnabled()))}},Object.defineProperty(t.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ref",{get:function(){return new Oo(this._key,this._firestore)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"exists",{get:function(){return null!==this._document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"metadata",{get:function(){return new Lo(this._hasPendingWrites,this._fromCache)},enumerable:!0,configurable:!0}),t.prototype.isEqual=function(e){if(!(e instanceof t))throw G("isEqual","DocumentSnapshot",1,e)
return this._firestore===e._firestore&&this._fromCache===e._fromCache&&this._key.isEqual(e._key)&&(null===this._document?null===e._document:this._document.isEqual(e._document))},t.prototype.convertObject=function(t,e){var n=this,r={}
return t.forEach(function(t,i){r[t]=n.convertValue(i,e)}),r},t.prototype.convertValue=function(t,e){if(t instanceof qn)return this.convertObject(t,e)
if(t instanceof Fn)return this.convertArray(t,e)
if(t instanceof Ln){var n=t.value(e),r=this._firestore.ensureClientConfigured().databaseId()
return t.databaseId.isEqual(r)||m("Document "+this._key.path+" contains a document reference within a different database ("+t.databaseId.projectId+"/"+t.databaseId.database+") which is not supported. It will be treated as a reference in the current database ("+r.projectId+"/"+r.database+") instead."),new Oo(n,this._firestore)}return t.value(e)},t.prototype.convertArray=function(t,e){var n=this
return t.internalValue.map(function(t){return n.convertValue(t,e)})},t}(),qo=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.data=function(e){var n=t.prototype.data.call(this,e)
return w("object"===r(n),"Document in a QueryDocumentSnapshot should exist"),n},e}(Po),Fo=function(){function t(t,e){this._query=t,this.firestore=e}return t.prototype.where=function(e,n,r){var i,o,a
R("Query.where",arguments,3),Q("Query.where",3,r),"in"!==n&&"array-contains-any"!==n&&function(t,e,n,r){if(!e.some(function(t){return t===r}))throw new T(S.INVALID_ARGUMENT,"Invalid value "+B(r)+" provided to function Query.where() for its "+W(2)+" argument. Acceptable values: "+e.join(", "))}(0,["<","<=","==",">=",">","array-contains"],0,n)
var u=Eo("Query.where",e),c=Yr.fromString(n)
if(u.isKeyField()){if(c===Yr.ARRAY_CONTAINS||c===Yr.ARRAY_CONTAINS_ANY)throw new T(S.INVALID_ARGUMENT,"Invalid Query. You can't perform '"+c.toString()+"' queries on FieldPath.documentId().")
if(c===Yr.IN){this.validateDisjunctiveFilterElements(r,c)
var h=[]
try{for(var l=s.__values(r),f=l.next();!f.done;f=l.next()){var d=f.value
h.push(this.parseDocumentIdValue(d))}}catch(t){i={error:t}}finally{try{f&&!f.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}a=new Fn(h)}else a=this.parseDocumentIdValue(r)}else c!==Yr.IN&&c!==Yr.ARRAY_CONTAINS_ANY||this.validateDisjunctiveFilterElements(r,c),a=this.firestore._dataConverter.parseQueryValue("Query.where",r)
var p=Xr.create(u,c,a)
return this.validateNewFilter(p),new t(this._query.addFilter(p),this.firestore)},t.prototype.orderBy=function(e,n){var r
if(x("Query.orderBy",arguments,1,2),L("Query.orderBy","non-empty string",2,n),void 0===n||"asc"===n)r=ni.ASCENDING
else{if("desc"!==n)throw new T(S.INVALID_ARGUMENT,"Function Query.orderBy() has unknown direction '"+n+"', expected 'asc' or 'desc'.")
r=ni.DESCENDING}if(null!==this._query.startAt)throw new T(S.INVALID_ARGUMENT,"Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().")
if(null!==this._query.endAt)throw new T(S.INVALID_ARGUMENT,"Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().")
var i=Eo("Query.orderBy",e),o=new ii(i,r)
return this.validateNewOrderBy(o),new t(this._query.addOrderBy(o),this.firestore)},t.prototype.limit=function(e){if(R("Query.limit",arguments,1),O("Query.limit","number",1,e),e<=0)throw new T(S.INVALID_ARGUMENT,"Invalid Query. Query limit ("+e+") is invalid. Limit must be positive.")
return new t(this._query.withLimit(e),this.firestore)},t.prototype.startAt=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
M("Query.startAt",arguments,1)
var i=this.boundFromDocOrFields("Query.startAt",e,n,!0)
return new t(this._query.withStartAt(i),this.firestore)},t.prototype.startAfter=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
M("Query.startAfter",arguments,1)
var i=this.boundFromDocOrFields("Query.startAfter",e,n,!1)
return new t(this._query.withStartAt(i),this.firestore)},t.prototype.endBefore=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
M("Query.endBefore",arguments,1)
var i=this.boundFromDocOrFields("Query.endBefore",e,n,!0)
return new t(this._query.withEndAt(i),this.firestore)},t.prototype.endAt=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
M("Query.endAt",arguments,1)
var i=this.boundFromDocOrFields("Query.endAt",e,n,!1)
return new t(this._query.withEndAt(i),this.firestore)},t.prototype.isEqual=function(e){if(!(e instanceof t))throw G("isEqual","Query",1,e)
return this.firestore===e.firestore&&this._query.isEqual(e._query)},t.prototype.boundFromDocOrFields=function(t,e,n,r){if(Q(t,1,e),e instanceof Po){if(n.length>0)throw new T(S.INVALID_ARGUMENT,"Too many arguments provided to "+t+"().")
var i=e
if(!i.exists)throw new T(S.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for "+t+"().")
return this.boundFromDocument(t,i._document,r)}var o=[e].concat(n)
return this.boundFromFields(t,o,r)},t.prototype.boundFromDocument=function(t,e,n){var r,i,o=[]
try{for(var a=s.__values(this._query.orderBy),u=a.next();!u.done;u=a.next()){var c=u.value
if(c.field.isKeyField())o.push(new Ln(this.firestore._databaseId,e.key))
else{var h=e.field(c.field)
if(h instanceof xn)throw new T(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)')
if(null===h){var l=c.field.canonicalString()
throw new T(S.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '"+l+"' (used as the orderBy) does not exist.")}o.push(h)}}}catch(t){r={error:t}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}return new ri(o,n)},t.prototype.boundFromFields=function(t,e,n){var i=this._query.explicitOrderBy
if(e.length>i.length)throw new T(S.INVALID_ARGUMENT,"Too many arguments provided to "+t+"(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses")
for(var o=[],a=0;a<e.length;a++){var s=e[a]
if(i[a].field.isKeyField()){if("string"!=typeof s)throw new T(S.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in "+t+"(), but got a "+r(s))
if(!this._query.isCollectionGroupQuery()&&-1!==s.indexOf("/"))throw new T(S.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to "+t+"() must be a plain document ID, but '"+s+"' contains a slash.")
var u=this._query.path.child(st.fromString(s))
if(!ht.isDocumentKey(u))throw new T(S.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to "+t+"() must result in a valid document path, but '"+u+"' is not because it contains an odd number of segments.")
var c=new ht(u)
o.push(new Ln(this.firestore._databaseId,c))}else{var h=this.firestore._dataConverter.parseQueryValue(t,s)
o.push(h)}}return new ri(o,n)},t.prototype.onSnapshot=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
x("Query.onSnapshot",arguments,1,4)
var n,i={},o=0
return"object"!==r(t[o])||no(t[o])||(K("Query.onSnapshot",i=t[o],["includeMetadataChanges"]),q("Query.onSnapshot","boolean","includeMetadataChanges",i.includeMetadataChanges),o++),no(t[o])?n=t[o]:(O("Query.onSnapshot","function",o,t[o]),L("Query.onSnapshot","function",o+1,t[o+1]),L("Query.onSnapshot","function",o+2,t[o+2]),n={next:t[o],error:t[o+1],complete:t[o+2]}),this.onSnapshotInternal(i,n)},t.prototype.onSnapshotInternal=function(t,e){var n=this,r=function(t){console.error("Uncaught Error in onSnapshot:",t)}
e.error&&(r=e.error.bind(e))
var i=new Hi({next:function(t){e.next&&e.next(new Vo(n.firestore,n._query,t))},error:r}),o=this.firestore.ensureClientConfigured(),a=o.listen(this._query,i,t)
return function(){i.mute(),o.unlisten(a)}},t.prototype.get=function(t){var e=this
return x("Query.get",arguments,0,1),Ko("Query.get",t),new Promise(function(n,r){t&&"cache"===t.source?e.firestore.ensureClientConfigured().getDocumentsFromLocalCache(e._query).then(function(t){n(new Vo(e.firestore,e._query,t))},r):e.getViaSnapshotListener(n,r,t)})},t.prototype.getViaSnapshotListener=function(t,e,n){var r=this.onSnapshotInternal({includeMetadataChanges:!0,waitForSyncWhenOnline:!0},{next:function(i){r(),i.metadata.fromCache&&n&&"server"===n.source?e(new T(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):t(i)},error:e})},t.prototype.parseDocumentIdValue=function(t){if("string"==typeof t){if(""===t)throw new T(S.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.")
if(!this._query.isCollectionGroupQuery()&&-1!==t.indexOf("/"))throw new T(S.INVALID_ARGUMENT,"Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '"+t+"' contains a '/' character.")
var e=this._query.path.child(st.fromString(t))
if(!ht.isDocumentKey(e))throw new T(S.INVALID_ARGUMENT,"Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '"+e+"' is not because it has an odd number of segments ("+e.length+").")
return new Ln(this.firestore._databaseId,new ht(e))}if(t instanceof Oo){var n=t
return new Ln(this.firestore._databaseId,n._key)}throw new T(S.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: "+B(t)+".")},t.prototype.validateDisjunctiveFilterElements=function(t,e){if(!Array.isArray(t)||0===t.length)throw new T(S.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '"+e.toString()+"' filters.")
if(t.length>10)throw new T(S.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters support a maximum of 10 elements in the value array.")
if(t.indexOf(null)>=0)throw new T(S.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'null' in the value array.")
if(t.filter(function(t){return Number.isNaN(t)}).length>0)throw new T(S.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'NaN' in the value array.")},t.prototype.validateNewFilter=function(t){if(t instanceof Xr){var e=[Yr.ARRAY_CONTAINS,Yr.ARRAY_CONTAINS_ANY],n=[Yr.IN,Yr.ARRAY_CONTAINS_ANY],r=e.indexOf(t.op)>=0,i=n.indexOf(t.op)>=0
if(t.isInequality()){var o=this._query.getInequalityFilterField()
if(null!==o&&!o.isEqual(t.field))throw new T(S.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '"+o.toString()+"' and '"+t.field.toString()+"'")
var a=this._query.getFirstOrderByField()
null!==a&&this.validateOrderByAndInequalityMatch(t.field,a)}else if(i||r){var s=null
if(i&&(s=this._query.findFilterOperator(n)),null===s&&r&&(s=this._query.findFilterOperator(e)),null!=s)throw s===t.op?new T(S.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '"+t.op.toString()+"' filter."):new T(S.INVALID_ARGUMENT,"Invalid query. You cannot use '"+t.op.toString()+"' filters with '"+s.toString()+"' filters.")}}},t.prototype.validateNewOrderBy=function(t){if(null===this._query.getFirstOrderByField()){var e=this._query.getInequalityFilterField()
null!==e&&this.validateOrderByAndInequalityMatch(e,t.field)}},t.prototype.validateOrderByAndInequalityMatch=function(t,e){if(!e.isEqual(t))throw new T(S.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '"+t.toString()+"' and so you must also use '"+t.toString()+"' as your first Query.orderBy(), but your first Query.orderBy() is on field '"+e.toString()+"' instead.")},t}(),Vo=function(){function t(t,e,n){this._firestore=t,this._originalQuery=e,this._snapshot=n,this._cachedChanges=null,this._cachedChangesIncludeMetadataChanges=null,this.metadata=new Lo(n.hasPendingWrites,n.fromCache)}return Object.defineProperty(t.prototype,"docs",{get:function(){var t=[]
return this.forEach(function(e){return t.push(e)}),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"empty",{get:function(){return this._snapshot.docs.isEmpty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._snapshot.docs.size},enumerable:!0,configurable:!0}),t.prototype.forEach=function(t,e){var n=this
x("QuerySnapshot.forEach",arguments,1,2),O("QuerySnapshot.forEach","function",1,t),this._snapshot.docs.forEach(function(r){t.call(e,n.convertToDocumentImpl(r))})},Object.defineProperty(t.prototype,"query",{get:function(){return new Fo(this._originalQuery,this._firestore)},enumerable:!0,configurable:!0}),t.prototype.docChanges=function(t){t&&(K("QuerySnapshot.docChanges",t,["includeMetadataChanges"]),q("QuerySnapshot.docChanges","boolean","includeMetadataChanges",t.includeMetadataChanges))
var e=!(!t||!t.includeMetadataChanges)
if(e&&this._snapshot.excludesMetadataChanges)throw new T(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().")
return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e,n){if(n.oldDocs.isEmpty()){var r,i=0
return n.docChanges.map(function(e){var o=new qo(t,e.doc.key,e.doc,n.fromCache,n.mutatedKeys.has(e.doc.key))
return w(e.type===Ar.Added,"Invalid event type for first snapshot"),w(!r||n.query.docComparator(r,e.doc)<0,"Got added events in wrong order"),r=e.doc,{type:"added",doc:o,oldIndex:-1,newIndex:i++}})}var o=n.oldDocs
return n.docChanges.filter(function(t){return e||t.type!==Ar.Metadata}).map(function(e){var r=new qo(t,e.doc.key,e.doc,n.fromCache,n.mutatedKeys.has(e.doc.key)),i=-1,a=-1
return e.type!==Ar.Added&&(w((i=o.indexOf(e.doc.key))>=0,"Index for document not found"),o=o.delete(e.doc.key)),e.type!==Ar.Removed&&(a=(o=o.add(e.doc)).indexOf(e.doc.key)),{type:Wo(e.type),doc:r,oldIndex:i,newIndex:a}})}(this._firestore,e,this._snapshot),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges},t.prototype.isEqual=function(e){if(!(e instanceof t))throw G("isEqual","QuerySnapshot",1,e)
return this._firestore===e._firestore&&this._originalQuery.isEqual(e._originalQuery)&&this._snapshot.isEqual(e._snapshot)},t.prototype.convertToDocumentImpl=function(t){return new qo(this._firestore,t.key,t,this.metadata.fromCache,this._snapshot.mutatedKeys.has(t.key))},t}()
s.__spread(["length","forEach","map"],"undefined"!=typeof Symbol?[Symbol.iterator]:[]).forEach(function(t){try{Object.defineProperty(Vo.prototype.docChanges,t,{get:function(){return function(){throw new T(S.INVALID_ARGUMENT,'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"')}()}})}catch(t){}})
var Uo=function(t){function e(e,n){var r=t.call(this,zr.atPath(e),n)||this
if(e.length%2!=1)throw new T(S.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but "+e.canonicalString()+" has "+e.length)
return r}return s.__extends(e,t),Object.defineProperty(e.prototype,"id",{get:function(){return this._query.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._query.path.popLast()
return t.isEmpty()?null:new Oo(new ht(t),this.firestore)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._query.path.canonicalString()},enumerable:!0,configurable:!0}),e.prototype.doc=function(t){if(x("CollectionReference.doc",arguments,0,1),0===arguments.length&&(t=z.newId()),O("CollectionReference.doc","non-empty string",1,t),""===t)throw new T(S.INVALID_ARGUMENT,"Document path must be a non-empty string")
var e=st.fromString(t)
return Oo.forPath(this._query.path.child(e),this.firestore)},e.prototype.add=function(t){R("CollectionReference.add",arguments,1),O("CollectionReference.add","object",1,t)
var e=this.doc()
return e.set(t).then(function(){return e})},e}(Fo)
function Bo(t,e){if(void 0===e)return{merge:!1}
if(K(t,e,["merge","mergeFields"]),q(t,"boolean","merge",e.merge),function(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){if(!(r instanceof Array))throw new T(S.INVALID_ARGUMENT,"Function "+t+"() requires its "+e+" option to be an array, but it was: "+B(r))
for(var o=0;o<r.length;++o)if(!i(r[o]))throw new T(S.INVALID_ARGUMENT,"Function "+t+"() requires all "+e+" elements to be "+n+", but the value at index "+o+" was: "+B(r[o]))}(t,e,n,r,i)}(t,"mergeFields","a string or a FieldPath",e.mergeFields,function(t){return"string"==typeof t||t instanceof Yi}),void 0!==e.mergeFields&&void 0!==e.merge)throw new T(S.INVALID_ARGUMENT,"Invalid options passed to function "+t+'(): You cannot specify both "merge" and "mergeFields".')
return e}function Qo(t,e){return void 0===e?{}:(K(t,e,["serverTimestamps"]),F(t,0,"serverTimestamps",e.serverTimestamps,["estimate","previous","none"]),e)}function Ko(t,e){L(t,"object",1,e),e&&(K(t,e,["source"]),F(t,0,"source",e.source,["default","server","cache"]))}function Go(t,e,n){if(e instanceof Oo){if(e.firestore!==n)throw new T(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.")
return e}throw G(t,"DocumentReference",1,e)}function Wo(t){switch(t){case Ar.Added:return"added"
case Ar.Modified:case Ar.Metadata:return"modified"
case Ar.Removed:return"removed"
default:return v("Unknown change type: "+t)}}var jo=I(Ro,"Use firebase.firestore() instead."),zo=I(Mo,"Use firebase.firestore().runTransaction() instead."),Ho=I(xo,"Use firebase.firestore().batch() instead."),Yo=I(Oo,"Use firebase.firestore().doc() instead."),Xo=I(Po),Jo=I(qo),Zo=I(Fo),$o=I(Vo),ta=I(Uo,"Use firebase.firestore().collection() instead."),ea={Firestore:jo,GeoPoint:jr,Timestamp:St,Blob:et,Transaction:zo,WriteBatch:Ho,DocumentReference:Yo,DocumentSnapshot:Xo,Query:Zo,QueryDocumentSnapshot:Jo,QuerySnapshot:$o,CollectionReference:ta,FieldPath:Yi,FieldValue:ho,setLogLevel:Ro.setLogLevel,CACHE_SIZE_UNLIMITED:No}
var na=function(){function t(){}return t.prototype.addCallback=function(t){},t.prototype.shutdown=function(){},t}(),ra=function(){function t(){var t=this
this.networkAvailableListener=function(){return t.onNetworkAvailable()},this.networkUnavailableListener=function(){return t.onNetworkUnavailable()},this.callbacks=[],this.configureNetworkMonitoring()}return t.prototype.addCallback=function(t){this.callbacks.push(t)},t.prototype.shutdown=function(){window.removeEventListener("online",this.networkAvailableListener),window.removeEventListener("offline",this.networkUnavailableListener)},t.prototype.configureNetworkMonitoring=function(){window.addEventListener("online",this.networkAvailableListener),window.addEventListener("offline",this.networkUnavailableListener)},t.prototype.onNetworkAvailable=function(){var t,e
y("ConnectivityMonitor","Network connectivity changed: AVAILABLE")
try{for(var n=s.__values(this.callbacks),r=n.next();!r.done;r=n.next())(0,r.value)(0)}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},t.prototype.onNetworkUnavailable=function(){var t,e
y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE")
try{for(var n=s.__values(this.callbacks),r=n.next();!r.done;r=n.next())(0,r.value)(1)}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},t.isAvailable=function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener},t}(),ia=function(){function t(t){this.sendFn=t.sendFn,this.closeFn=t.closeFn}return t.prototype.onOpen=function(t){w(!this.wrappedOnOpen,"Called onOpen on stream twice!"),this.wrappedOnOpen=t},t.prototype.onClose=function(t){w(!this.wrappedOnClose,"Called onClose on stream twice!"),this.wrappedOnClose=t},t.prototype.onMessage=function(t){w(!this.wrappedOnMessage,"Called onMessage on stream twice!"),this.wrappedOnMessage=t},t.prototype.close=function(){this.closeFn()},t.prototype.send=function(t){this.sendFn(t)},t.prototype.callOnOpen=function(){w(void 0!==this.wrappedOnOpen,"Cannot call onOpen because no callback was set"),this.wrappedOnOpen()},t.prototype.callOnClose=function(t){w(void 0!==this.wrappedOnClose,"Cannot call onClose because no callback was set"),this.wrappedOnClose(t)},t.prototype.callOnMessage=function(t){w(void 0!==this.wrappedOnMessage,"Cannot call onMessage because no callback was set"),this.wrappedOnMessage(t)},t}(),oa="Connection",aa={BatchGetDocuments:"batchGet",Commit:"commit"},sa="gl-js/ fire/"+l,ua=function(){function t(t){this.databaseId=t.databaseId
var e=t.ssl?"https":"http"
this.baseUrl=e+"://"+t.host,this.forceLongPolling=t.forceLongPolling}return t.prototype.modifyHeadersForRequest=function(t,e){if(e)for(var n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])
t["X-Goog-Api-Client"]=sa},t.prototype.invokeRPC=function(t,e,n){var r=this,i=this.makeUrl(t)
return new Promise(function(o,a){var s=new h.XhrIo
s.listenOnce(h.EventType.COMPLETE,function(){try{switch(s.getLastErrorCode()){case h.ErrorCode.NO_ERROR:var e=s.getResponseJson()
y(oa,"XHR received:",JSON.stringify(e)),o(e)
break
case h.ErrorCode.TIMEOUT:y(oa,'RPC "'+t+'" timed out'),a(new T(S.DEADLINE_EXCEEDED,"Request time out"))
break
case h.ErrorCode.HTTP_ERROR:var n=s.getStatus()
y(oa,'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0?a(new T(function(t){switch(t){case 200:return S.OK
case 400:return S.INVALID_ARGUMENT
case 401:return S.UNAUTHENTICATED
case 403:return S.PERMISSION_DENIED
case 404:return S.NOT_FOUND
case 409:return S.ABORTED
case 416:return S.OUT_OF_RANGE
case 429:return S.RESOURCE_EXHAUSTED
case 499:return S.CANCELLED
case 500:return S.UNKNOWN
case 501:return S.UNIMPLEMENTED
case 503:return S.UNAVAILABLE
case 504:return S.DEADLINE_EXCEEDED
default:return t>=200&&t<300?S.OK:t>=400&&t<500?S.FAILED_PRECONDITION:t>=500&&t<600?S.INTERNAL:S.UNKNOWN}}(n),"Server responded with status "+s.getStatusText())):(y(oa,'RPC "'+t+'" failed'),a(new T(S.UNAVAILABLE,"Connection failed.")))
break
default:v('RPC "'+t+'" failed with unanticipated webchannel error '+s.getLastErrorCode()+": "+s.getLastError()+", giving up.")}}finally{y(oa,'RPC "'+t+'" completed.')}})
var u=JSON.stringify(e)
y(oa,"XHR sending: ",i+" "+u)
var c={"Content-Type":"text/plain"}
r.modifyHeadersForRequest(c,n),s.send(i,"POST",u,c,15)})},t.prototype.invokeStreamingRPC=function(t,e,n){return this.invokeRPC(t,e,n)},t.prototype.openStream=function(t,e){var n=[this.baseUrl,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=h.createWebChannelTransport(),i={backgroundChannelTest:!0,httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling}
this.modifyHeadersForRequest(i.initMessageHeaders,e),c.isReactNative()||(i.httpHeadersOverwriteParam="$httpHeaders")
var o=n.join("")
y(oa,"Creating WebChannel: "+o+" "+i)
var a=r.createWebChannel(o,i),s=!1,u=!1,l=new ia({sendFn:function(t){u?y(oa,"Not sending because WebChannel is closed:",t):(s||(y(oa,"Opening WebChannel transport."),a.open(),s=!0),y(oa,"WebChannel sending:",t),a.send(t))},closeFn:function(){return a.close()}}),f=function(t,e){a.listen(t,function(t){try{e(t)}catch(t){setTimeout(function(){throw t},0)}})}
return f(h.WebChannel.EventType.OPEN,function(){u||y(oa,"WebChannel transport opened.")}),f(h.WebChannel.EventType.CLOSE,function(){u||(u=!0,y(oa,"WebChannel transport closed"),l.callOnClose())}),f(h.WebChannel.EventType.ERROR,function(t){u||(u=!0,y(oa,"WebChannel transport errored:",t),l.callOnClose(new T(S.UNAVAILABLE,"The operation could not be completed")))}),f(h.WebChannel.EventType.MESSAGE,function(t){if(!u){var e=t.data[0]
w(!!e,"Got a webchannel message without data.")
var n=e,r=n.error||n[0]&&n[0].error
if(r){y(oa,"WebChannel received error:",r)
var i=r.status,o=function(t){var e=Ir[i]
if(void 0!==e)return Dr(e)}(),s=r.message
void 0===o&&(o=S.INTERNAL,s="Unknown error status: "+i+" with message "+r.message),u=!0,l.callOnClose(new T(o,s)),a.close()}else y(oa,"WebChannel received:",e),l.callOnMessage(e)}}),setTimeout(function(){l.callOnOpen()},0),l},t.prototype.makeUrl=function(t){var e=aa[t]
w(void 0!==e,"Unknown REST mapping for: "+t)
var n=[this.baseUrl,"/","v1"]
return n.push("/projects/"),n.push(this.databaseId.projectId),n.push("/databases/"),n.push(this.databaseId.database),n.push("/documents"),n.push(":"),n.push(e),n.join("")},t}(),ca=function(){function t(){this.emptyByteString="",this.base64Available="undefined"!=typeof atob}return Object.defineProperty(t.prototype,"document",{get:function(){return"undefined"!=typeof document?document:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return"undefined"!=typeof window?window:null},enumerable:!0,configurable:!0}),t.prototype.loadConnection=function(t){return Promise.resolve(new ua(t))},t.prototype.newConnectivityMonitor=function(){return ra.isAvailable()?new ra:new na},t.prototype.newSerializer=function(t){return new bi(t,{useProto3Json:!0})},t.prototype.formatJSON=function(t){return JSON.stringify(t)},t.prototype.atob=function(t){return atob(t)},t.prototype.btoa=function(t){return btoa(t)},t}()
function ha(t){(function(t){t.INTERNAL.registerService("firestore",function(t){return new Ro(t)},function(t){w(t&&"object"===r(t),"shallowCopy() expects object parameter.")
var e={}
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e}(ea))})(t)}b.setPlatform(new ca),ha(a),e.registerFirestore=ha},196:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"ErrorCode",function(){return hr}),n.d(e,"EventType",function(){return lr}),n.d(e,"WebChannel",function(){return fr}),n.d(e,"XhrIo",function(){return dr}),n.d(e,"createWebChannelTransport",function(){return cr})
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
return e}function d(t){return"array"==f(t)}function p(t){var e=f(t)
return"array"==e||"object"==e&&"number"==typeof t.length}function y(t){var e=r(t)
return"object"==e&&null!=t||"function"==e}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0
function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error()
if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2)
return function(){var n=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return(b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w).apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1)
return function(){var e=n.slice()
return e.push.apply(e,arguments),t.apply(this,e)}}var S=Date.now||function(){return+new Date}
function T(t,e){function n(){}n.prototype=e.prototype,t.N=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.yb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o]
return e.prototype[n].apply(t,i)}}function I(){this.j=this.j,this.i=this.i}I.prototype.j=!1,I.prototype.la=function(){!this.j&&(this.j=!0,this.G(),0)&&(this[m]||(this[m]=++g))},I.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()}
var C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(u(t))return u(e)&&1==e.length?t.indexOf(e,0):-1
for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n
return-1},_=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i=u(t)?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)}
function D(t){return Array.prototype.concat.apply([],arguments)}function N(t){var e=t.length
if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r]
return n}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var k,R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]}
function M(t,e){return-1!=t.indexOf(e)}function x(t,e){return t<e?-1:t>e?1:0}t:{var O=s.navigator
if(O){var L=O.userAgent
if(L){k=L
break t}}k=""}function P(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function q(t){var e,n={}
for(e in t)n[e]=t[e]
return n}var F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function V(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n]
for(var o=0;o<F.length;o++)n=F[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function U(t){return U[" "](t),t}U[" "]=l
var B,Q,K=M(k,"Opera"),G=M(k,"Trident")||M(k,"MSIE"),W=M(k,"Edge"),j=W||G,z=M(k,"Gecko")&&!(M(k.toLowerCase(),"webkit")&&!M(k,"Edge"))&&!(M(k,"Trident")||M(k,"MSIE"))&&!M(k,"Edge"),H=M(k.toLowerCase(),"webkit")&&!M(k,"Edge")
function Y(){var t=s.document
return t?t.documentMode:void 0}t:{var X="",J=(Q=k,z?/rv:([^\);]+)(\)|;)/.exec(Q):W?/Edge\/([\d\.]+)/.exec(Q):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Q):H?/WebKit\/(\S+)/.exec(Q):K?/(?:Version)[ \/]?(\S+)/.exec(Q):void 0)
if(J&&(X=J?J[1]:""),G){var Z=Y()
if(null!=Z&&Z>parseFloat(X)){B=String(Z)
break t}}B=X}var $,tt={}
function et(t){return function(t,e){var n=tt
return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e()}(t,function(){for(var e=0,n=R(String(B)).split("."),r=R(String(t)).split("."),i=Math.max(n.length,r.length),o=0;0==e&&o<i;o++){var a=n[o]||"",s=r[o]||""
do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break
e=x(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||x(0==a[2].length,0==s[2].length)||x(a[2],s[2]),a=a[3],s=s[3]}while(0==e)}return 0<=e})}var nt=s.document
$=nt&&G?Y()||("CSS1Compat"==nt.compatMode?parseInt(B,10):5):void 0
var rt=!G||9<=Number($),it=G&&!et("9"),ot=function(){if(!s.addEventListener||!Object.defineProperty)return!1
var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{s.addEventListener("test",l,e),s.removeEventListener("test",l,e)}catch(t){}return t}()
function at(t,e){this.type=t,this.a=this.target=e,this.Ja=!0}function st(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(z){t:{try{U(e.nodeName)
var i=!0
break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)
this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=u(t.pointerType)?t.pointerType:ut[t.pointerType]||"",this.c=t,t.defaultPrevented&&this.b()}}at.prototype.b=function(){this.Ja=!1},T(st,at)
var ut={2:"touch",3:"pen",4:"mouse"}
st.prototype.b=function(){st.N.b.call(this)
var t=this.c
if(t.preventDefault)t.preventDefault()
else if(t.returnValue=!1,it)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}}
var ct="closure_listenable_"+(1e6*Math.random()|0),ht=0
function lt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.da=i,this.key=++ht,this.X=this.Z=!1}function ft(t){t.X=!0,t.listener=null,t.proxy=null,t.src=null,t.da=null}function dt(t){this.src=t,this.a={},this.b=0}function pt(t,e){var n=e.type
if(n in t.a){var r,i=t.a[n],o=C(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ft(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function yt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i]
if(!o.X&&o.listener==e&&o.capture==!!n&&o.da==r)return i}return-1}dt.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++)
var a=yt(t,e,r,i)
return-1<a?(e=t[a],n||(e.Z=!1)):((e=new lt(e,this.src,o,!!r,i)).Z=n,t.push(e)),e}
var mt="closure_lm_"+(1e6*Math.random()|0),gt={}
function vt(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,o){if(d(n)){for(var a=0;a<n.length;a++)t(e,n[a],r,i,o)
return null}return r=_t(r),e&&e[ct]?e.Ba(n,r,y(i)?!!i.capture:!!i,o):wt(e,n,r,!0,i,o)}(t,e,n,r,i)
if(d(e)){for(var o=0;o<e.length;o++)vt(t,e[o],n,r,i)
return null}return n=_t(n),t&&t[ct]?t.Aa(e,n,y(r)?!!r.capture:!!r,i):wt(t,e,n,!1,r,i)}function wt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type")
var a=y(i)?!!i.capture:!!i
if(a&&!rt)return null
var s=It(t)
if(s||(t[mt]=s=new dt(t)),(n=s.add(e,n,r,a,o)).proxy)return n
if(r=function(){var t=Tt,e=rt?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n}
return e}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i)
else if(t.attachEvent)t.attachEvent(Et(e.toString()),r)
else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
t.addListener(r)}return n}function bt(t){if(!c(t)&&t&&!t.X){var e=t.src
if(e&&e[ct])pt(e.c,t)
else{var n=t.type,r=t.proxy
e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=It(e))?(pt(n,t),0==n.b&&(n.src=null,e[mt]=null)):ft(t)}}}function Et(t){return t in gt?gt[t]:gt[t]="on"+t}function St(t,e){var n=t.listener,r=t.da||t.src
return t.Z&&bt(t),n.call(r,e)}function Tt(t,e){return!!t.X||St(t,rt?new st(e,this):e=new st(e||h("window.event"),this))}function It(t){return(t=t[mt])instanceof dt?t:null}var Ct="__closure_events_fn_"+(1e9*Math.random()>>>0)
function _t(t){return"function"==f(t)?t:(t[Ct]||(t[Ct]=function(e){return t.handleEvent(e)}),t[Ct])}function Dt(){I.call(this),this.c=new dt(this),this.J=this,this.B=null}function Nt(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0
e=e.concat()
for(var i=!0,o=0;o<e.length;++o){var a=e[o]
if(a&&!a.X&&a.capture==n){var s=a.listener,u=a.da||a.src
a.Z&&pt(t.c,a),i=!1!==s.call(u,r)&&i}}return i&&0!=r.Ja}T(Dt,I),Dt.prototype[ct]=!0,(i=Dt.prototype).addEventListener=function(t,e,n,r){vt(this,t,e,n,r)},i.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,o){if(d(n))for(var a=0;a<n.length;a++)t(e,n[a],r,i,o)
else i=y(i)?!!i.capture:!!i,r=_t(r),e&&e[ct]?(e=e.c,(n=String(n).toString())in e.a&&-1<(r=yt(a=e.a[n],r,i,o))&&(ft(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete e.a[n],e.b--))):e&&(e=It(e))&&(n=e.a[n.toString()],e=-1,n&&(e=yt(n,r,i,o)),(r=-1<e?n[e]:null)&&bt(r))}(this,t,e,n,r)},i.dispatchEvent=function(t){var e,n=this.B
if(n)for(e=[];n;n=n.B)e.push(n)
n=this.J
var r=t.type||t
if(u(t))t=new at(t,n)
else if(t instanceof at)t.target=t.target||n
else{var i=t
V(t=new at(r,n),i)}if(i=!0,e)for(var o=e.length-1;0<=o;o--){var a=t.a=e[o]
i=Nt(a,r,!0,t)&&i}if(i=Nt(a=t.a=n,r,!0,t)&&i,i=Nt(a,r,!1,t)&&i,e)for(o=0;o<e.length;o++)i=Nt(a=t.a=e[o],r,!1,t)&&i
return i},i.G=function(){if(Dt.N.G.call(this),this.c){var t,e=this.c
for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)ft(n[r])
delete e.a[t],e.b--}}this.B=null},i.Aa=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},i.Ba=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)}
var At=s.JSON.stringify
function kt(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function Rt(){this.b=this.a=null}kt.prototype.get=function(){if(0<this.b){this.b--
var t=this.a
this.a=t.next,t.next=null}else t=this.c()
return t}
var Mt,xt=new kt(function(){return new Lt},function(t){t.reset()})
function Ot(){var t=Vt,e=null
return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function Lt(){this.next=this.b=this.a=null}function Pt(t){s.setTimeout(function(){throw t},0)}function qt(t,e){Mt||function(){var t=s.Promise.resolve(void 0)
Mt=function(){t.then(Ut)}}(),Ft||(Mt(),Ft=!0),Vt.add(t,e)}Rt.prototype.add=function(t,e){var n=xt.get()
n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Lt.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},Lt.prototype.reset=function(){this.next=this.b=this.a=null}
var Ft=!1,Vt=new Rt
function Ut(){for(var t;t=Ot();){try{t.a.call(t.b)}catch(t){Pt(t)}var e=xt
e.f(t),100>e.b&&(e.b++,t.next=e.a,e.a=t)}Ft=!1}function Bt(t,e){Dt.call(this),this.b=t||1,this.a=e||s,this.f=b(this.gb,this),this.g=S()}function Qt(t){t.ba=!1,t.L&&(t.a.clearTimeout(t.L),t.L=null)}function Kt(t,e,n){if("function"==f(t))n&&(t=b(t,n))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:s.setTimeout(t,e||0)}function Gt(t,e,n){I.call(this),this.f=null!=n?b(t,n):t,this.c=e,this.b=b(this.ab,this),this.a=[]}function Wt(t){t.U=Kt(t.b,t.c),t.f.apply(null,t.a)}function jt(t){I.call(this),this.b=t,this.a={}}T(Bt,Dt),(i=Bt.prototype).ba=!1,i.L=null,i.gb=function(){if(this.ba){var t=S()-this.g
0<t&&t<.8*this.b?this.L=this.a.setTimeout(this.f,this.b-t):(this.L&&(this.a.clearTimeout(this.L),this.L=null),this.dispatchEvent("tick"),this.ba&&(Qt(this),this.start()))}},i.start=function(){this.ba=!0,this.L||(this.L=this.a.setTimeout(this.f,this.b),this.g=S())},i.G=function(){Bt.N.G.call(this),Qt(this),delete this.a},T(Gt,I),(i=Gt.prototype).ea=!1,i.U=null,i.Ua=function(t){this.a=arguments,this.U?this.ea=!0:Wt(this)},i.G=function(){Gt.N.G.call(this),this.U&&(s.clearTimeout(this.U),this.U=null,this.ea=!1,this.a=[])},i.ab=function(){this.U=null,this.ea&&(this.ea=!1,Wt(this))},T(jt,I)
var zt=[]
function Ht(t,e,n,r){d(n)||(n&&(zt[0]=n.toString()),n=zt)
for(var i=0;i<n.length;i++){var o=vt(e,n[i],r||t.handleEvent,!1,t.b||t)
if(!o)break
t.a[o.key]=o}}function Yt(t){P(t.a,function(t,e){this.a.hasOwnProperty(e)&&bt(t)},t),t.a={}}function Xt(){}jt.prototype.G=function(){jt.N.G.call(this),Yt(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")}
var Jt=new Dt
function Zt(t){at.call(this,"serverreachability",t)}function $t(t){Jt.dispatchEvent(new Zt(Jt,t))}function te(t){at.call(this,"statevent",t)}function ee(t){Jt.dispatchEvent(new te(Jt,t))}function ne(t){at.call(this,"timingevent",t)}function re(t,e){if("function"!=f(t))throw Error("Fn must not be null and must be a function")
return s.setTimeout(function(){t()},e)}T(Zt,at),T(te,at),T(ne,at)
var ie={NO_ERROR:0,hb:1,ob:2,nb:3,kb:4,mb:5,pb:6,Ma:7,TIMEOUT:8,sb:9},oe={jb:"complete",wb:"success",Na:"error",Ma:"abort",ub:"ready",vb:"readystatechange",TIMEOUT:"timeout",qb:"incrementaldata",tb:"progress",lb:"downloadprogress",xb:"uploadprogress"}
function ae(){}function se(t){var e
return(e=t.a)||(e=t.a={}),e}function ue(){}ae.prototype.a=null
var ce,he={OPEN:"a",ib:"b",Na:"c",rb:"d"}
function le(){at.call(this,"d")}function fe(){at.call(this,"c")}function de(){}function pe(t,e,n){this.g=t,this.W=e,this.V=n||1,this.I=new jt(this),this.O=ye,t=j?125:void 0,this.P=new Bt(t),this.h=null,this.b=!1,this.l=this.D=this.f=this.F=this.v=this.R=this.i=null,this.j=[],this.a=null,this.A=0,this.c=this.w=null,this.o=-1,this.m=!1,this.J=0,this.B=null,this.s=this.S=this.H=!1}T(le,at),T(fe,at),T(de,ae),ce=new de
var ye=45e3,me={},ge={}
function ve(t,e,n){t.F=1,t.f=Ke(Pe(e)),t.l=n,t.H=!0,be(t,null)}function we(t,e,n,r){t.F=1,t.f=Ke(Pe(e)),t.l=null,t.H=n,be(t,r)}function be(t,e){t.v=S(),Te(t),t.D=Pe(t.f),Qe(t.D,"t",t.V),t.A=0,t.a=t.g.$(t.g.Y()?e:null),0<t.J&&(t.B=new Gt(b(t.Ka,t,t.a),t.J)),Ht(t.I,t.a,"readystatechange",t.eb),e=t.h?q(t.h):{},t.l?(t.w||(t.w="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ca(t.D,t.w,t.l,e)):(t.w="GET",t.a.ca(t.D,t.w,null,e)),$t(1)}function Ee(t,e,n){for(var r=!0;!t.m&&t.A<n.length;){var i=Se(t,n)
if(i==ge){4==e&&(t.c=4,ee(14),r=!1)
break}if(i==me){t.c=4,ee(15),r=!1
break}Ne(t,i)}4==e&&0==n.length&&(t.c=1,ee(16),r=!1),t.b=t.b&&r,r||(De(t),_e(t))}function Se(t,e){var n=t.A,r=e.indexOf("\n",n)
return-1==r?ge:(n=Number(e.substring(n,r)),isNaN(n)?me:(r+=1)+n>e.length?ge:(e=e.substr(r,n),t.A=r+n,e))}function Te(t){t.R=S()+t.O,Ie(t,t.O)}function Ie(t,e){if(null!=t.i)throw Error("WatchDog timer not null")
t.i=re(b(t.bb,t),e)}function Ce(t){t.i&&(s.clearTimeout(t.i),t.i=null)}function _e(t){t.g.Da()||t.m||t.g.na(t)}function De(t){Ce(t)
var e=t.B
e&&"function"==typeof e.la&&e.la(),t.B=null,Qt(t.P),Yt(t.I),t.a&&(e=t.a,t.a=null,e.abort(),e.la())}function Ne(t,e){try{t.g.Ga(t,e),$t(4)}catch(t){}}function Ae(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0)
else if(p(t)||u(t))_(t,e,void 0)
else{if(t.K&&"function"==typeof t.K)var n=t.K()
else if(t.C&&"function"==typeof t.C)n=void 0
else if(p(t)||u(t)){n=[]
for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i
i=(r=function(t){if(t.C&&"function"==typeof t.C)return t.C()
if(u(t))return t.split("")
if(p(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r])
return e}for(r in e=[],n=0,t)e[n++]=t[r]
return e}(t)).length
for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function ke(t,e){this.b={},this.a=[],this.c=0
var n=arguments.length
if(1<n){if(n%2)throw Error("Uneven number of arguments")
for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ke)for(n=t.K(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]))
else for(r in t)this.set(r,t[r])}function Re(t,e){xe(t.b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&Me(t))}function Me(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e]
xe(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={}
for(n=e=0;e<t.a.length;)xe(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++
t.a.length=n}}function xe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(i=pe.prototype).setTimeout=function(t){this.O=t},i.eb=function(t){t=t.target
var e=this.B
e&&3==Pn(t)?e.Ua():this.Ka(t)},i.Ka=function(t){try{if(t==this.a)t:{var e=Pn(this.a),n=this.a.ya(),r=this.a.T()
if(!(3>e||3==e&&!j&&!this.a.aa())){this.m||4!=e||7==n||$t(8==n||0>=r?3:2),Ce(this)
var i=this.a.T()
this.o=i
var o=this.a.aa()
if(this.b=200==i){if(this.S&&!this.s){e:{if(this.a){var a=qn(this.a,"X-HTTP-Initial-Response")
if(a&&!A(a)){var s=a
break e}}s=null}if(!s){this.b=!1,this.c=3,ee(12),De(this),_e(this)
break t}this.s=!0,Ne(this,s)}this.H?(Ee(this,e,o),j&&this.b&&3==e&&(Ht(this.I,this.P,"tick",this.cb),this.P.start())):Ne(this,o),4==e&&De(this),this.b&&!this.m&&(4==e?this.g.na(this):(this.b=!1,Te(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.c=3,ee(12)):(this.c=0,ee(13)),De(this),_e(this)}}}catch(t){}},i.cb=function(){if(this.a){var t=Pn(this.a),e=this.a.aa()
this.A<e.length&&(Ce(this),Ee(this,t,e),this.b&&4!=t&&Te(this))}},i.cancel=function(){this.m=!0,De(this)},i.bb=function(){this.i=null
var t=S()
0<=t-this.R?(2!=this.F&&($t(3),ee(17)),De(this),this.c=2,_e(this)):Ie(this,this.R-t)},(i=ke.prototype).C=function(){Me(this)
for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]])
return t},i.K=function(){return Me(this),this.a.concat()},i.get=function(t,e){return xe(this.b,t)?this.b[t]:e},i.set=function(t,e){xe(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},i.forEach=function(t,e){for(var n=this.K(),r=0;r<n.length;r++){var i=n[r],o=this.get(i)
t.call(e,o,i,this)}}
var Oe=/^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function Le(t,e){var n
this.b=this.j=this.f="",this.i=null,this.g=this.a="",this.h=!1,t instanceof Le?(this.h=void 0!==e?e:t.h,qe(this,t.f),this.j=t.j,Fe(this,t.b),Ve(this,t.i),this.a=t.a,Ue(this,rn(t.c)),this.g=t.g):t&&(n=String(t).match(Oe))?(this.h=!!e,qe(this,n[1]||"",!0),this.j=Ge(n[2]||""),Fe(this,n[3]||"",!0),Ve(this,n[4]),this.a=Ge(n[5]||"",!0),Ue(this,n[6]||"",!0),this.g=Ge(n[7]||"")):(this.h=!!e,this.c=new Ze(null,this.h))}function Pe(t){return new Le(t)}function qe(t,e,n){t.f=n?Ge(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function Fe(t,e,n){t.b=n?Ge(e,!0):e}function Ve(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e)
t.i=e}else t.i=null}function Ue(t,e,n){e instanceof Ze?(t.c=e,function(t,e){e&&!t.f&&($e(t),t.c=null,t.a.forEach(function(t,e){var n=e.toLowerCase()
e!=n&&(tn(this,e),nn(this,n,t))},t)),t.f=e}(t.c,t.h)):(n||(e=We(e,Xe)),t.c=new Ze(e,t.h))}function Be(t,e,n){t.c.set(e,n)}function Qe(t,e,n){d(n)||(n=[String(n)]),nn(t.c,e,n)}function Ke(t){return Be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^S()).toString(36)),t}function Ge(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function We(t,e,n){return u(t)?(t=encodeURI(t).replace(e,je),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function je(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Le.prototype.toString=function(){var t=[],e=this.f
e&&t.push(We(e,ze,!0),":")
var n=this.b
return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(We(e,ze,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.i)&&t.push(":",String(n))),(n=this.a)&&(this.b&&"/"!=n.charAt(0)&&t.push("/"),t.push(We(n,"/"==n.charAt(0)?Ye:He,!0))),(n=this.c.toString())&&t.push("?",n),(n=this.g)&&t.push("#",We(n,Je)),t.join("")},Le.prototype.resolve=function(t){var e=Pe(this),n=!!t.f
n?qe(e,t.f):n=!!t.j,n?e.j=t.j:n=!!t.b,n?Fe(e,t.b):n=null!=t.i
var r=t.a
if(n)Ve(e,t.i)
else if(n=!!t.a){if("/"!=r.charAt(0))if(this.b&&!this.a)r="/"+r
else{var i=e.a.lastIndexOf("/");-1!=i&&(r=e.a.substr(0,i+1)+r)}if(".."==(i=r)||"."==i)r=""
else if(M(i,"./")||M(i,"/.")){r=0==i.lastIndexOf("/",0),i=i.split("/")
for(var o=[],a=0;a<i.length;){var s=i[a++]
"."==s?r&&a==i.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),r&&a==i.length&&o.push("")):(o.push(s),r=!0)}r=o.join("/")}else r=i}return n?e.a=r:n=""!==t.c.toString(),n?Ue(e,rn(t.c)):n=!!t.g,n&&(e.g=t.g),e}
var ze=/[#\/\?@]/g,He=/[#\?:]/g,Ye=/[#\?]/g,Xe=/[#\?@]/g,Je=/#/g
function Ze(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function $e(t){t.a||(t.a=new ke,t.b=0,t.c&&function(t,e){if(t){t=t.split("&")
for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null
if(0<=r){var o=t[n].substring(0,r)
i=t[n].substring(r+1)}else o=t[n]
e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function tn(t,e){$e(t),e=on(t,e),xe(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,Re(t.a,e))}function en(t,e){return $e(t),e=on(t,e),xe(t.a.b,e)}function nn(t,e,n){tn(t,e),0<n.length&&(t.c=null,t.a.set(on(t,e),N(n)),t.b+=n.length)}function rn(t){var e=new Ze
return e.c=t.c,t.a&&(e.a=new ke(t.a),e.b=t.b),e}function on(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}function an(t){this.a=t,this.b=this.h=null,this.g=!1,this.i=null,this.c=-1,this.l=this.f=null}function sn(t){var e=t.a.F.a
if(null!=e)ee(4),e?(ee(10),Yn(t.a,t,!1)):(ee(11),Yn(t.a,t,!0))
else{t.b=new pe(t,void 0,void 0),t.b.h=t.h,e=tr(e=t.a,e.Y()?t.f:null,t.i),ee(4),Qe(e,"TYPE","xmlhttp")
var n=t.a.j,r=t.a.I
n&&r&&Be(e,n,r),we(t.b,e,!1,t.f)}}function un(){this.a=this.b=null}function cn(){this.a=new ke}function hn(t){var e=r(t)
return"object"==e&&t||"function"==e?"o"+(t[m]||(t[m]=++g)):e.charAt(0)+t}function ln(t,e){this.b=t,this.a=e}function fn(t){this.g=t||dn,t=s.PerformanceNavigationTiming?0<(t=s.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(s.ka&&s.ka.Ea&&s.ka.Ea()&&s.ka.Ea().zb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new cn),this.b=null,this.c=[]}(i=Ze.prototype).add=function(t,e){$e(this),this.c=null,t=on(this,t)
var n=this.a.get(t)
return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},i.forEach=function(t,e){$e(this),this.a.forEach(function(n,r){_(n,function(n){t.call(e,n,r,this)},this)},this)},i.K=function(){$e(this)
for(var t=this.a.C(),e=this.a.K(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r])
return n},i.C=function(t){$e(this)
var e=[]
if(u(t))en(this,t)&&(e=D(e,this.a.get(on(this,t))))
else{t=this.a.C()
for(var n=0;n<t.length;n++)e=D(e,t[n])}return e},i.set=function(t,e){return $e(this),this.c=null,en(this,t=on(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},i.get=function(t,e){return t&&0<(t=this.C(t)).length?String(t[0]):e},i.toString=function(){if(this.c)return this.c
if(!this.a)return""
for(var t=[],e=this.a.K(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r))
r=this.C(r)
for(var o=0;o<r.length;o++){var a=i
""!==r[o]&&(a+="="+encodeURIComponent(String(r[o]))),t.push(a)}}return this.c=t.join("&")},T(function(){},function(){}),(i=an.prototype).M=null,i.$=function(t){return this.a.$(t)},i.abort=function(){this.b&&(this.b.cancel(),this.b=null),this.c=-1},i.Da=function(){return!1},i.Ga=function(t,e){if(this.c=t.o,0==this.M){if(!this.a.o&&(t=t.a)){var n=qn(t,"X-Client-Wire-Protocol")
this.l=n||null,this.a.j&&(t=qn(t,"X-HTTP-Session-Id"))&&(this.a.I=t)}if(e){try{var r=this.a.ja.a.parse(e)}catch(t){return(e=this.a).m=this.c,void Zn(e,2)}this.f=r[0]}else(e=this.a).m=this.c,Zn(e,2)}else 1==this.M&&(this.g?ee(6):"11111"==e?(ee(5),this.g=!0,(!G||10<=Number($))&&(this.c=200,this.b.cancel(),ee(11),Yn(this.a,this,!0))):(ee(7),this.g=!1))},i.na=function(){if(this.c=this.b.o,this.b.b)0==this.M?(this.M=1,sn(this)):1==this.M&&(this.g?(ee(11),Yn(this.a,this,!0)):(ee(10),Yn(this.a,this,!1)))
else{0==this.M?ee(8):1==this.M&&ee(9)
var t=this.a
t.m=this.c,Zn(t,2)}},i.Y=function(){return this.a.Y()},i.ma=function(){return this.a.ma()},cn.prototype.add=function(t){this.a.set(hn(t),t)},cn.prototype.C=function(){return this.a.C()}
var dn=10
function pn(t,e){!t.a&&(M(e,"spdy")||M(e,"quic")||M(e,"h2"))&&(t.f=t.g,t.a=new cn,t.b&&(vn(t,t.b),t.b=null))}function yn(t){return!!t.b||!!t.a&&t.a.a.c>=t.f}function mn(t){return t.b?1:t.a?t.a.a.c:0}function gn(t,e){return t.b?t=t.b==e:t.a?(e=hn(e),t=xe(t.a.a.b,e)):t=!1,t}function vn(t,e){t.a?t.a.add(e):t.b=e}function wn(t,e){var n
t.b&&t.b==e?t.b=null:((n=t.a)&&(n=hn(e),n=xe(t.a.a.b,n)),n&&Re(t.a.a,hn(e)))}function bn(t){if(null!=t.b)return t.c.concat(t.b.j)
if(null!=t.a&&0!=t.a.a.c){var e=t.c
return _(t.a.C(),function(t){e=e.concat(t.j)}),e}return N(t.c)}function En(){}function Sn(){this.a=new En}function Tn(t,e,n){var r=n||""
try{Ae(t,function(t,n){var i=t
y(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))})}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function In(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}fn.prototype.cancel=function(){var t
this.c=bn(this),this.b?(this.b.cancel(),this.b=null):this.a&&0!=this.a.a.c&&(_(this.a.C(),function(t){t.cancel()}),(t=this.a.a).b={},t.a.length=0,t.c=0)},En.prototype.stringify=function(t){return s.JSON.stringify(t,void 0)},En.prototype.parse=function(t){return s.JSON.parse(t,void 0)}
var Cn=s.JSON.parse
function _n(t){Dt.call(this),this.headers=new ke,this.H=t||null,this.b=!1,this.s=this.a=null,this.A="",this.h=0,this.f="",this.g=this.w=this.l=this.v=!1,this.o=0,this.m=null,this.I=Dn,this.D=this.F=!1}T(_n,Dt)
var Dn="",Nn=/^https?$/i,An=["POST","PUT"]
function kn(t){return"content-type"==t.toLowerCase()}function Rn(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,Mn(t),On(t)}function Mn(t){t.v||(t.v=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function xn(t){if(t.b&&void 0!==a&&(!t.s[1]||4!=Pn(t)||2!=t.T()))if(t.l&&4==Pn(t))Kt(t.Fa,0,t)
else if(t.dispatchEvent("readystatechange"),4==Pn(t)){t.b=!1
try{var e,n=t.T()
t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0
break t
default:r=!1}if(!(e=r)){var i
if(i=0===n){var o=String(t.A).match(Oe)[1]||null
if(!o&&s.self&&s.self.location){var u=s.self.location.protocol
o=u.substr(0,u.length-1)}i=!Nn.test(o?o.toLowerCase():"")}e=i}e?(t.dispatchEvent("complete"),t.dispatchEvent("success")):(t.h=6,t.f=t.za()+" ["+t.T()+"]",Mn(t))}finally{On(t)}}}function On(t,e){if(t.a){Ln(t)
var n=t.a,r=t.s[0]?l:null
t.a=null,t.s=null,e||t.dispatchEvent("ready")
try{n.onreadystatechange=r}catch(t){}}}function Ln(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(s.clearTimeout(t.m),t.m=null)}function Pn(t){return t.a?t.a.readyState:0}function qn(t,e){return t.a?t.a.getResponseHeader(e):null}function Fn(t,e,n){t:{for(r in n){var r=!1
break t}r=!0}if(r)return t
if(n=function(t){var e=""
return P(n,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}(),u(t)){if(e=encodeURIComponent(String(e)),e+=n=null!=n?"="+encodeURIComponent(String(n)):""){if(0>(n=t.indexOf("#"))&&(n=t.length),0>(r=t.indexOf("?"))||r>n){r=n
var i=""}else i=t.substring(r+1,n)
n=(t=[t.substr(0,r),i,t.substr(n)])[1],t[1]=e?n?n+"&"+e:e:n,t=t[0]+(t[1]?"?"+t[1]:"")+t[2]}return t}return Be(t,e,n),t}function Vn(t){this.f=[],this.F=new un,this.ga=this.pa=this.B=this.ha=this.a=this.I=this.j=this.V=this.g=this.J=this.i=null,this.Ra=this.P=0,this.Pa=!!h("internalChannelParams.failFast",t),this.ia=this.w=this.s=this.l=this.h=this.c=null,this.oa=!0,this.m=this.ra=this.O=-1,this.S=this.v=this.A=0,this.Oa=h("internalChannelParams.baseRetryDelayMs",t)||5e3,this.Sa=h("internalChannelParams.retryDelaySeedMs",t)||1e4,this.Qa=h("internalChannelParams.forwardChannelMaxRetries",t)||2,this.qa=h("internalChannelParams.forwardChannelRequestTimeoutMs",t)||2e4,this.La=t&&t.Ab||void 0,this.D=void 0,this.R=t&&t.supportsCrossDomainXhr||!1,this.H="",this.b=new fn(t&&t.concurrentRequestLimit),this.ja=new Sn,this.o=!t||void 0===t.backgroundChannelTest||t.backgroundChannelTest,(this.W=t&&t.fastHandshake||!1)&&!this.o&&(this.o=!0),t&&t.forceLongPolling&&(this.oa=!1),this.fa=void 0}function Un(t){if(Bn(t),3==t.u){var e=t.P++,n=Pe(t.B)
Be(n,"SID",t.H),Be(n,"RID",e),Be(n,"TYPE","terminate"),Wn(t,n),(e=new pe(t,e,void 0)).F=2,e.f=Ke(Pe(n)),n=!1,s.navigator&&s.navigator.sendBeacon&&(n=s.navigator.sendBeacon(e.f.toString(),"")),!n&&s.Image&&((new Image).src=e.f,n=!0),n||(e.a=e.g.$(null),e.a.ca(e.f)),e.v=S(),Te(e)}$n(t)}function Bn(t){t.w&&(t.w.abort(),t.w=null),t.a&&(t.a.cancel(),t.a=null),t.l&&(s.clearTimeout(t.l),t.l=null),Xn(t),t.b.cancel(),t.h&&(c(t.h)&&s.clearTimeout(t.h),t.h=null)}function Qn(t,e){t.f.push(new ln(t.Ra++,e)),3==t.u&&Kn(t)}function Kn(t){yn(t.b)||t.h||(t.h=!0,qt(t.Ia,t),t.A=0)}function Gn(t,e){var n
n=e?e.W:t.P++
var r=Pe(t.B)
Be(r,"SID",t.H),Be(r,"RID",n),Be(r,"AID",t.O),Wn(t,r),t.g&&t.i&&Fn(r,t.g,t.i),n=new pe(t,n,t.A+1),null===t.g&&(n.h=t.i),e&&(t.f=e.j.concat(t.f)),e=jn(t,n,1e3),n.setTimeout(Math.round(.5*t.qa)+Math.round(.5*t.qa*Math.random())),vn(t.b,n),ve(n,r,e)}function Wn(t,e){t.c&&Ae({},function(t,n){Be(e,n,t)})}function jn(t,e,n){n=Math.min(t.f.length,n)
var r=t.c?b(t.c.Ta,t.c,t):null
t:for(var i=t.f,o=-1;;){var a=["count="+n];-1==o?0<n?(o=i[0].b,a.push("ofs="+o)):o=0:a.push("ofs="+o)
for(var s=!0,u=0;u<n;u++){var c=i[u].b,h=i[u].a
if(0>(c-=o))o=Math.max(0,i[u].b-100),s=!1
else try{Tn(h,a,"req"+c+"_")}catch(t){r&&r(h)}}if(s){r=a.join("&")
break t}}return t=t.f.splice(0,n),e.j=t,r}function zn(t){t.a||t.l||(t.S=1,qt(t.Ha,t),t.v=0)}function Hn(t){return!(t.a||t.l||3<=t.v||(t.S++,t.l=re(b(t.Ha,t),Jn(t,t.v)),t.v++,0))}function Yn(t,e,n){var r=e.l
r&&pn(t.b,r),t.ia=t.oa&&n,t.m=e.c,t.B=tr(t,null,t.ha),Kn(t)}function Xn(t){null!=t.s&&(s.clearTimeout(t.s),t.s=null)}function Jn(t,e){var n=t.Oa+Math.floor(Math.random()*t.Sa)
return t.ma()||(n*=2),n*e}function Zn(t,e){if(2==e){var n=null
t.c&&(n=null)
var r=b(t.fb,t)
n||(n=new Le("//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||qe(n,"https"),Ke(n)),function(t,e){var n=new Xt
if(s.Image){var r=new Image
r.onload=E(In,n,r,"TestLoadImage: loaded",!0,e),r.onerror=E(In,n,r,"TestLoadImage: error",!1,e),r.onabort=E(In,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=E(In,n,r,"TestLoadImage: timeout",!1,e),s.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(n.toString(),r)}else ee(2)
t.u=0,t.c&&t.c.ta(e),$n(t),Bn(t)}function $n(t){t.u=0,t.m=-1,t.c&&(0==bn(t.b).length&&0==t.f.length||(t.b.c.length=0,N(t.f),t.f.length=0),t.c.sa())}function tr(t,e,n){var r=function(t){return t instanceof Le?Pe(t):new Le(t,void 0)}(n)
if(""!=r.b)e&&Fe(r,e+"."+r.b),Ve(r,r.i)
else{var i,o=s.location
i=e?e+"."+o.hostname:o.hostname,r=function(t,e,n,r){var i=new Le(null,void 0)
return t&&qe(i,t),e&&Fe(i,e),n&&Ve(i,n),r&&(i.a=r),i}(o.protocol,i,+o.port,n)}return t.V&&P(t.V,function(t,e){Be(r,e,t)}),e=t.j,n=t.I,e&&n&&Be(r,e,n),Be(r,"VER",t.wa),Wn(t,r),r}function er(){}function nr(){if(G&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function rr(t,e){Dt.call(this),this.a=new Vn(e),this.g=t,this.m=e&&e.testUrl?e.testUrl:function(t){for(var e=arguments[0],n=1;n<arguments.length;n++){var r,i=arguments[n]
0==i.lastIndexOf("/",0)?e=i:((r=""==e)||(r=0<=(r=e.length-1)&&e.indexOf("/",r)==r),e+=r?i:"/"+i)}return e}(this.g,"test"),this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.i=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.xa&&(t?t["X-WebChannel-Client-Profile"]=e.xa:t={"X-WebChannel-Client-Profile":e.xa}),this.a.J=t,(t=e&&e.httpHeadersOverwriteParam)&&!A(t)&&(this.a.g=t),this.l=e&&e.supportsCrossDomainXhr||!1,this.h=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.a.j=e,null!==(t=this.b)&&e in t&&e in(t=this.b)&&delete t[e]),this.f=new ar(this)}function ir(t){le.call(this)
var e=t.__sm__
if(e){t:{for(var n in e){t=n
break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function or(){fe.call(this),this.status=1}function ar(t){this.a=t}(i=_n.prototype).ca=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.A+"; newUri="+t)
e=e?e.toUpperCase():"GET",this.A=t,this.f="",this.h=0,this.v=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?se(this.H):se(ce),this.a.onreadystatechange=b(this.Fa,this)
try{this.w=!0,this.a.open(e,String(t),!0),this.w=!1}catch(t){return void Rn(this,t)}t=n||""
var i=new ke(this.headers)
r&&Ae(r,function(t,e){i.set(e,t)}),r=function(t){t:{for(var e=kn,n=t.length,r=u(t)?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i
break t}e=-1}return 0>e?null:u(t)?t.charAt(e):t[e]}(i.K()),n=s.FormData&&t instanceof s.FormData,!(0<=C(An,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(t,e){this.a.setRequestHeader(e,t)},this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F)
try{Ln(this),0<this.o&&((this.D=function(t){return G&&et(9)&&c(t.timeout)&&void 0!==t.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=b(this.Ca,this)):this.m=Kt(this.Ca,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(t){Rn(this,t)}},i.Ca=function(){void 0!==a&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8))},i.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),On(this))},i.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),On(this,!0)),_n.N.G.call(this)},i.Fa=function(){this.j||(this.w||this.l||this.g?xn(this):this.$a())},i.$a=function(){xn(this)},i.T=function(){try{return 2<Pn(this)?this.a.status:-1}catch(t){return-1}},i.za=function(){try{return 2<Pn(this)?this.a.statusText:""}catch(t){return""}},i.aa=function(){try{return this.a?this.a.responseText:""}catch(t){return""}},i.Va=function(t){if(this.a){var e=this.a.responseText
return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Cn(e)}},i.ya=function(){return this.h},i.Ya=function(){return u(this.f)?this.f:String(this.f)},(i=Vn.prototype).wa=8,i.u=1,i.Da=function(){return 0==this.u},i.Ia=function(t){if(this.h)if(this.h=null,1==this.u){if(!t){this.P=Math.floor(1e5*Math.random())
var e,n=new pe(this,t=this.P++,void 0),r=this.i
if(this.J&&(r?V(r=q(r),this.J):r=this.J),null===this.g&&(n.h=r),this.W)t:{for(var i=e=0;i<this.f.length;i++){var o=this.f[i]
if(void 0===(o="__data__"in o.a&&u(o=o.a.__data__)?o.length:void 0))break
if(4096<(e+=o)){e=i
break t}if(4096===e||i===this.f.length-1){e=i+1
break t}}e=1e3}else e=1e3
e=jn(this,n,e),Be(i=Pe(this.B),"RID",t),Be(i,"CVER",22),this.o&&this.j&&Be(i,"X-HTTP-Session-Id",this.j),Wn(this,i),this.g&&r&&Fn(i,this.g,r),vn(this.b,n),this.W?(Be(i,"$req",e),Be(i,"SID","null"),n.S=!0,ve(n,i,null)):ve(n,i,e),this.u=2}}else 3==this.u&&(t?Gn(this,t):0==this.f.length||yn(this.b)||Gn(this))},i.Ha=function(){this.l=null,this.a=new pe(this,"rpc",this.S),null===this.g&&(this.a.h=this.i),this.a.J=0
var t=Pe(this.pa)
Be(t,"RID","rpc"),Be(t,"SID",this.H),Be(t,"CI",this.ia?"0":"1"),Be(t,"AID",this.O),Wn(this,t),Be(t,"TYPE","xmlhttp"),this.g&&this.i&&Fn(t,this.g,this.i),this.D&&this.a.setTimeout(this.D),we(this.a,t,!0,this.ga)},i.Ga=function(t,e){if(0!=this.u&&(this.a==t||gn(this.b,t)))if(this.m=t.o,!t.s&&gn(this.b,t)&&3==this.u){try{var n=this.ja.a.parse(e)}catch(t){n=null}if(d(n)&&3==n.length){if(0==(e=n)[0]){t:if(!this.l){if(this.a){if(!(this.a.v+3e3<t.v))break t
Xn(this),this.a.cancel(),this.a=null}Hn(this),ee(18)}}else this.ra=e[1],0<this.ra-this.O&&37500>e[2]&&this.ia&&0==this.v&&!this.s&&(this.s=re(b(this.Za,this),6e3))
if(1>=mn(this.b)&&this.fa){try{this.fa()}catch(t){}this.fa=void 0}}else Zn(this,11)}else if((t.s||this.a==t)&&Xn(this),!A(e))for(e=n=this.ja.a.parse(e),n=0;n<e.length;n++){var r=e[n]
if(this.O=r[0],r=r[1],2==this.u)if("c"==r[0]){this.H=r[1],this.ga=r[2]
var i=r[3]
null!=i&&(this.wa=i),null!=(r=r[5])&&c(r)&&0<r&&(this.D=1.5*r),this.o&&(r=t.a)&&((i=qn(r,"X-Client-Wire-Protocol"))&&pn(this.b,i),this.j&&(r=qn(r,"X-HTTP-Session-Id")))&&(this.I=r,Be(this.B,this.j,r)),this.u=3,this.c&&this.c.va(),r=t,this.pa=tr(this,this.Y()?this.ga:null,this.ha),r.s?(wn(this.b,r),(i=this.D)&&r.setTimeout(i),r.i&&(Ce(r),Te(r)),this.a=r):zn(this),0<this.f.length&&Kn(this)}else"stop"!=r[0]&&"close"!=r[0]||Zn(this,7)
else 3==this.u&&("stop"==r[0]||"close"==r[0]?"stop"==r[0]?Zn(this,7):Un(this):"noop"!=r[0]&&this.c&&this.c.ua(r),this.v=0)}},i.Za=function(){null!=this.s&&(this.s=null,this.a.cancel(),this.a=null,Hn(this),ee(19))},i.na=function(t){var e=null
if(this.a==t){Xn(this),this.a=null
var n=2}else{if(!gn(this.b,t))return
e=t.j,wn(this.b,t),n=1}if(this.m=t.o,0!=this.u)if(t.b)1==n?(e=S()-t.v,Jt.dispatchEvent(new ne(Jt,t.l?t.l.length:0,e,this.A)),Kn(this)):zn(this)
else{var r=t.c
if(3==r||0==r&&0<this.m||!(1==n&&function(t,e){return!(mn(t.b)>=t.b.f-(t.h?1:0)||(t.h?(t.f=e.j.concat(t.f),0):1==t.u||2==t.u||t.A>=(t.Pa?0:t.Qa)||(t.h=re(b(t.Ia,t,e),Jn(t,t.A)),t.A++,0)))}(this,t)||2==n&&Hn(this)))switch(e&&0<e.length&&(t=this.b,t.c=t.c.concat(e)),r){case 1:Zn(this,5)
break
case 4:Zn(this,10)
break
case 3:Zn(this,6)
break
default:Zn(this,2)}}},i.fb=function(t){ee(t?2:1)},i.$=function(t){if(t&&!this.R)throw Error("Can't create secondary domain capable XhrIo object.")
return(t=new _n(this.La)).F=this.R,t},i.ma=function(){return!!this.c&&!0},i.Y=function(){return this.R},(i=er.prototype).va=function(){},i.ua=function(){},i.ta=function(){},i.sa=function(){},i.Ta=function(){},nr.prototype.a=function(t,e){return new rr(t,e)},T(rr,Dt),(i=rr.prototype).addEventListener=function(t,e,n,r){rr.N.addEventListener.call(this,t,e,n,r)},i.removeEventListener=function(t,e,n,r){rr.N.removeEventListener.call(this,t,e,n,r)},i.Wa=function(){this.a.c=this.f,this.l&&(this.a.R=!0)
var t=this.a,e=this.m,n=this.g,r=this.b||void 0
ee(0),t.ha=n,t.V=r||{},t.o&&(t.F.b=[],t.F.a=!1),t.w=new an(t),null===t.g&&(t.w.h=t.i),n=e,t.g&&t.i&&(n=Fn(e,t.g,t.i)),(t=t.w).i=n,e=tr(t.a,null,t.i),ee(3),null!=(n=t.a.F.b)?(t.f=n[0],t.M=1,sn(t)):(Qe(e,"MODE","init"),!t.a.o&&t.a.j&&Qe(e,"X-HTTP-Session-Id",t.a.j),t.b=new pe(t,void 0,void 0),t.b.h=t.h,we(t.b,e,!1,null),t.M=0)},i.close=function(){Un(this.a)},i.Xa=function(t){if(u(t)){var e={}
e.__data__=t,Qn(this.a,e)}else this.h?((e={}).__data__=At(t),Qn(this.a,e)):Qn(this.a,t)},i.G=function(){this.a.c=null,delete this.f,Un(this.a),delete this.a,rr.N.G.call(this)},T(ir,le),T(or,fe),T(ar,er),ar.prototype.va=function(){this.a.dispatchEvent("a")},ar.prototype.ua=function(t){this.a.dispatchEvent(new ir(t))},ar.prototype.ta=function(t){this.a.dispatchEvent(new or(t))},ar.prototype.sa=function(){this.a.dispatchEvent("b")}
var sr=E(function(t,e){function n(){}n.prototype=t.prototype
var r=new n
return t.apply(r,Array.prototype.slice.call(arguments,1)),r},nr)
nr.prototype.createWebChannel=nr.prototype.a,rr.prototype.send=rr.prototype.Xa,rr.prototype.open=rr.prototype.Wa,rr.prototype.close=rr.prototype.close,ie.NO_ERROR=0,ie.TIMEOUT=8,ie.HTTP_ERROR=6,oe.COMPLETE="complete",ue.EventType=he,he.OPEN="a",he.CLOSE="b",he.ERROR="c",he.MESSAGE="d",Dt.prototype.listen=Dt.prototype.Aa,_n.prototype.listenOnce=_n.prototype.Ba,_n.prototype.getLastError=_n.prototype.Ya,_n.prototype.getLastErrorCode=_n.prototype.ya,_n.prototype.getStatus=_n.prototype.T,_n.prototype.getStatusText=_n.prototype.za,_n.prototype.getResponseJson=_n.prototype.Va,_n.prototype.getResponseText=_n.prototype.aa,_n.prototype.send=_n.prototype.ca
var ur={createWebChannelTransport:sr,ErrorCode:ie,EventType:oe,WebChannel:ue,XhrIo:_n},cr=ur.createWebChannelTransport,hr=ur.ErrorCode,lr=ur.EventType,fr=ur.WebChannel,dr=ur.XhrIo
e.default=ur}}])
