(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[8],{191:function(e,t,n){"use strict"
n.r(t)
var r,o=n(63),i=n.n(o),s=n(0),a=n(64)
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u,d,f=((r={})["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["should-be-overriden"]="This method should be overriden by extended classes.",r["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",r["permission-default"]="The required permissions were not granted and dismissed instead.",r["permission-blocked"]="The required permissions were not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["notifications-blocked"]="Notifications have been blocked.",r["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["sw-registration-expected"]="A service worker registration was the expected input.",r["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",r["invalid-saved-token"]="Unable to access details of the saved token.",r["sw-reg-redundant"]="The service worker being used for push was made redundant.",r["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",r["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",r["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",r["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",r["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",r["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",r["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",r["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",r["failed-to-delete-token"]="Unable to delete the currently saved token.",r["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",r["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",r["bad-scope"]="The service worker scope must be a string with at least one character.",r["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",r["bad-subscription"]="The subscription must be a valid PushSubscription.",r["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",r["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",r["failed-delete-vapid-key"]="The VAPID key could not be deleted.",r["invalid-public-vapid-key"]="The public VAPID key must be a string.",r["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",r),h=new a.ErrorFactory("messaging","Messaging",f),l=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),p="https://fcm.googleapis.com"
function b(e,t){if(null==e||null==t)return!1
if(e===t)return!0
if(e.byteLength!==t.byteLength)return!1
for(var n=new DataView(e),r=new DataView(t),o=0;o<e.byteLength;o++)if(n.getUint8(o)!==r.getUint8(o))return!1
return!0}function g(e){return function(e){var t=new Uint8Array(e)
return btoa(String.fromCharCode.apply(String,Object(s.__spread)(t)))}(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}!function(e){e.TYPE_OF_MSG="firebase-messaging-msg-type",e.DATA="firebase-messaging-msg-data"}(u||(u={})),function(e){e.PUSH_MSG_RECEIVED="push-msg-received",e.NOTIFICATION_CLICKED="notification-clicked"}(d||(d={}))
var w=function(){function e(){}return e.prototype.getToken=function(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,function(){var r,o,i,a,c,u,d,f,w
return Object(s.__generator)(this,function(s){switch(s.label){case 0:r=g(t.getKey("p256dh")),o=g(t.getKey("auth")),i="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+r+"&encryption_auth="+o,b(n.buffer,l.buffer)||(a=g(n),i+="&application_pub_key="+a),(c=new Headers).append("Content-Type","application/x-www-form-urlencoded"),u={method:"POST",headers:c,body:i},s.label=1
case 1:return s.trys.push([1,4,,5]),[4,fetch(p+"/fcm/connect/subscribe",u)]
case 2:return[4,s.sent().json()]
case 3:return d=s.sent(),[3,5]
case 4:throw f=s.sent(),h.create("token-subscribe-failed",{errorInfo:f})
case 5:if(d.error)throw w=d.error.message,h.create("token-subscribe-failed",{errorInfo:w})
if(!d.token)throw h.create("token-subscribe-no-token")
if(!d.pushSet)throw h.create("token-subscribe-no-push-set")
return[2,{token:d.token,pushSet:d.pushSet}]}})})},e.prototype.updateToken=function(e,t,n,r,o){return Object(s.__awaiter)(this,void 0,void 0,function(){var i,a,c,u,d,f,w,_,v
return Object(s.__generator)(this,function(s){switch(s.label){case 0:i=g(r.getKey("p256dh")),a=g(r.getKey("auth")),c="push_set="+n+"&token="+t+"&authorized_entity="+e+"&endpoint="+r.endpoint+"&encryption_key="+i+"&encryption_auth="+a,b(o.buffer,l.buffer)||(u=g(o),c+="&application_pub_key="+u),(d=new Headers).append("Content-Type","application/x-www-form-urlencoded"),f={method:"POST",headers:d,body:c},s.label=1
case 1:return s.trys.push([1,4,,5]),[4,fetch(p+"/fcm/connect/subscribe",f)]
case 2:return[4,s.sent().json()]
case 3:return w=s.sent(),[3,5]
case 4:throw _=s.sent(),h.create("token-update-failed",{errorInfo:_})
case 5:if(w.error)throw v=w.error.message,h.create("token-update-failed",{errorInfo:v})
if(!w.token)throw h.create("token-update-no-token")
return[2,w.token]}})})},e.prototype.deleteToken=function(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,function(){var r,o,i,a,c,u
return Object(s.__generator)(this,function(s){switch(s.label){case 0:r="authorized_entity="+e+"&token="+t+"&pushSet="+n,(o=new Headers).append("Content-Type","application/x-www-form-urlencoded"),i={method:"POST",headers:o,body:r},s.label=1
case 1:return s.trys.push([1,4,,5]),[4,fetch(p+"/fcm/connect/unsubscribe",i)]
case 2:return[4,s.sent().json()]
case 3:if((a=s.sent()).error)throw c=a.error.message,h.create("token-unsubscribe-failed",{errorInfo:c})
return[3,5]
case 4:throw u=s.sent(),h.create("token-unsubscribe-failed",{errorInfo:u})
case 5:return[2]}})})},e}()
function _(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o)
return r}var v="undefined",y="fcm_token_object_Store"
var m=function(){function e(){this.dbPromise=null}return e.prototype.get=function(e){return this.createTransaction(function(t){return t.get(e)})},e.prototype.getIndex=function(e,t){return this.createTransaction(function(n){return n.index(e).get(t)})},e.prototype.put=function(e){return this.createTransaction(function(t){return t.put(e)},"readwrite")},e.prototype.delete=function(e){return this.createTransaction(function(t){return t.delete(e)},"readwrite")},e.prototype.closeDatabase=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){switch(e.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2]
case 1:e.sent().close(),this.dbPromise=null,e.label=2
case 2:return[2]}})})},e.prototype.createTransaction=function(e,t){return void 0===t&&(t="readonly"),Object(s.__awaiter)(this,void 0,void 0,function(){var n,r,o,i
return Object(s.__generator)(this,function(s){switch(s.label){case 0:return[4,this.getDb()]
case 1:return n=s.sent(),r=n.transaction(this.objectStoreName,t),o=r.objectStore(this.objectStoreName),[4,k(e(o))]
case 2:return i=s.sent(),[2,new Promise(function(e,t){r.oncomplete=function(){e(i)},r.onerror=function(){t(r.error)}})]}})})},e.prototype.getDb=function(){var e=this
return this.dbPromise||(this.dbPromise=new Promise(function(t,n){var r=indexedDB.open(e.dbName,e.dbVersion)
r.onsuccess=function(){t(r.result)},r.onerror=function(){e.dbPromise=null,n(r.error)},r.onupgradeneeded=function(t){return e.onDbUpgrade(r,t)}})),this.dbPromise},e}()
function k(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}var T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.dbName="fcm_token_details_db",t.dbVersion=3,t.objectStoreName="fcm_token_object_Store",t}return Object(s.__extends)(t,e),t.prototype.onDbUpgrade=function(e,t){var n=e.result
switch(t.oldVersion){case 0:(r=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0})
case 1:(function(){var e=indexedDB.open(v)
e.onerror=function(e){},e.onsuccess=function(t){!function(e){if(e.objectStoreNames.contains(y)){var t=e.transaction(y).objectStore(y),n=new w,r=t.openCursor()
r.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},r.onsuccess=function(){var t=r.result
if(t){var o=t.value
n.deleteToken(o.fcmSenderId,o.fcmToken,o.fcmPushSet),t.continue()}else e.close(),indexedDB.deleteDatabase(v)}}}(e.result)}})()
case 2:var r,o=(r=e.transaction.objectStore(this.objectStoreName)).openCursor()
o.onsuccess=function(){var e=o.result
if(e){var t=e.value,n=Object(s.__assign)({},t)
t.createTime||(n.createTime=Date.now()),"string"==typeof t.vapidKey&&(n.vapidKey=_(t.vapidKey)),"string"==typeof t.auth&&(n.auth=_(t.auth).buffer),"string"==typeof t.auth&&(n.p256dh=_(t.p256dh).buffer),e.update(n),e.continue()}}}},t.prototype.getTokenDetailsFromToken=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(t){if(!e)throw h.create("bad-token")
return S({fcmToken:e}),[2,this.getIndex("fcmToken",e)]})})},t.prototype.getTokenDetailsFromSWScope=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(t){if(!e)throw h.create("bad-scope")
return S({swScope:e}),[2,this.get(e)]})})},t.prototype.saveTokenDetails=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(t){if(!e.swScope)throw h.create("bad-scope")
if(!e.vapidKey)throw h.create("bad-vapid-key")
if(!e.endpoint||!e.auth||!e.p256dh)throw h.create("bad-subscription")
if(!e.fcmSenderId)throw h.create("bad-sender-id")
if(!e.fcmToken)throw h.create("bad-token")
if(!e.fcmPushSet)throw h.create("bad-push-set")
return S(e),[2,this.put(e)]})})},t.prototype.deleteToken=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:return"string"!=typeof e||0===e.length?[2,Promise.reject(h.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(e)]
case 1:if(!(t=n.sent()))throw h.create("delete-token-not-found")
return[4,this.delete(t.swScope)]
case 2:return n.sent(),[2,t]}})})},t}(m)
function S(e){if(e.fcmToken&&("string"!=typeof e.fcmToken||0===e.fcmToken.length))throw h.create("bad-token")
if(e.swScope&&("string"!=typeof e.swScope||0===e.swScope.length))throw h.create("bad-scope")
if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw h.create("bad-vapid-key")
if(e.endpoint&&("string"!=typeof e.endpoint||0===e.endpoint.length))throw h.create("bad-subscription")
if(e.auth&&!(e.auth instanceof ArrayBuffer))throw h.create("bad-subscription")
if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw h.create("bad-subscription")
if(e.fcmSenderId&&("string"!=typeof e.fcmSenderId||0===e.fcmSenderId.length))throw h.create("bad-sender-id")
if(e.fcmPushSet&&("string"!=typeof e.fcmPushSet||0===e.fcmPushSet.length))throw h.create("bad-push-set")}var O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.dbName="fcm_vapid_details_db",t.dbVersion=1,t.objectStoreName="fcm_vapid_object_Store",t}return Object(s.__extends)(t,e),t.prototype.onDbUpgrade=function(e){e.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:if("string"!=typeof e||0===e.length)throw h.create("bad-scope")
return[4,this.get(e)]
case 1:return[2,(t=n.sent())?t.vapidKey:void 0]}})})},t.prototype.saveVapidDetails=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,function(){var n
return Object(s.__generator)(this,function(r){if("string"!=typeof e||0===e.length)throw h.create("bad-scope")
if(null===t||65!==t.length)throw h.create("bad-vapid-key")
return n={swScope:e,vapidKey:t},[2,this.put(n)]})})},t.prototype.deleteVapidDetails=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(e)]
case 1:if(!(t=n.sent()))throw h.create("delete-scope-not-found")
return[4,this.delete(e)]
case 2:return n.sent(),[2,t]}})})},t}(m),j="messagingSenderId",P=function(){function e(e){var t=this
if(!e.options[j]||"string"!=typeof e.options[j])throw h.create("bad-sender-id")
this.messagingSenderId=e.options[j],this.tokenDetailsModel=new T,this.vapidDetailsModel=new O,this.iidModel=new w,this.app=e,this.INTERNAL={delete:function(){return t.delete()}}}return e.prototype.getToken=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e,t,n,r,o
return Object(s.__generator)(this,function(i){switch(i.label){case 0:if("denied"===(e=this.getNotificationPermission_()))throw h.create("notifications-blocked")
return"granted"!==e?[2,null]:[4,this.getSWRegistration_()]
case 1:return t=i.sent(),[4,this.getPublicVapidKey_()]
case 2:return n=i.sent(),[4,this.getPushSubscription(t,n)]
case 3:return r=i.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)]
case 4:return(o=i.sent())?[2,this.manageExistingToken(t,r,n,o)]:[2,this.getNewToken(t,r,n)]}})})},e.prototype.manageExistingToken=function(e,t,n,r){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(o){switch(o.label){case 0:return function(e,t,n){if(!n.vapidKey||!b(t.buffer,n.vapidKey.buffer))return!1
var r=e.endpoint===n.endpoint,o=b(e.getKey("auth"),n.auth),i=b(e.getKey("p256dh"),n.p256dh)
return r&&o&&i}(t,n,r)?Date.now()<r.createTime+6048e5?[2,r.fcmToken]:[2,this.updateToken(e,t,n,r)]:[4,this.deleteTokenFromDB(r.fcmToken)]
case 1:return o.sent(),[2,this.getNewToken(e,t,n)]}})})},e.prototype.updateToken=function(e,t,n,r){return Object(s.__awaiter)(this,void 0,void 0,function(){var o,i,a
return Object(s.__generator)(this,function(s){switch(s.label){case 0:return s.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,r.fcmToken,r.fcmPushSet,t,n)]
case 1:return o=s.sent(),i={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:o,fcmPushSet:r.fcmPushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)]
case 2:return s.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)]
case 3:return s.sent(),[2,o]
case 4:return a=s.sent(),[4,this.deleteToken(r.fcmToken)]
case 5:throw s.sent(),a
case 6:return[2]}})})},e.prototype.getNewToken=function(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,function(){var r,o
return Object(s.__generator)(this,function(i){switch(i.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,t,n)]
case 1:return r=i.sent(),o={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:r.token,fcmPushSet:r.pushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)]
case 2:return i.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)]
case 3:return i.sent(),[2,r.token]}})})},e.prototype.deleteToken=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,n
return Object(s.__generator)(this,function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(e)]
case 1:return r.sent(),[4,this.getSWRegistration_()]
case 2:return(t=r.sent())?[4,t.pushManager.getSubscription()]:[3,4]
case 3:if(n=r.sent())return[2,n.unsubscribe()]
r.label=4
case 4:return[2,!0]}})})},e.prototype.deleteTokenFromDB=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(e)]
case 1:return t=n.sent(),[4,this.iidModel.deleteToken(t.fcmSenderId,t.fcmToken,t.fcmPushSet)]
case 2:return n.sent(),[2]}})})},e.prototype.getPushSubscription=function(e,t){return e.pushManager.getSubscription().then(function(n){return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})})},e.prototype.requestPermission=function(){throw h.create("only-available-in-window")},e.prototype.useServiceWorker=function(e){throw h.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){throw h.create("only-available-in-window")},e.prototype.onMessage=function(e,t,n){throw h.create("only-available-in-window")},e.prototype.onTokenRefresh=function(e,t,n){throw h.create("only-available-in-window")},e.prototype.setBackgroundMessageHandler=function(e){throw h.create("only-available-in-sw")},e.prototype.delete=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])]
case 1:return e.sent(),[2]}})})},e.prototype.getNotificationPermission_=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getIidModel=function(){return this.iidModel},e}(),M=function(e){function t(t){var n=e.call(this,t)||this
return n.bgMessageHandler=null,self.addEventListener("push",function(e){n.onPush(e)}),self.addEventListener("pushsubscriptionchange",function(e){n.onSubChange(e)}),self.addEventListener("notificationclick",function(e){n.onNotificationClick(e)}),n}return Object(s.__extends)(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},t.prototype.onPush_=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,n,r,o,i,a
return Object(s.__generator)(this,function(s){switch(s.label){case 0:if(!e.data)return[2]
try{t=e.data.json()}catch(e){return[2]}return[4,this.hasVisibleClients_()]
case 1:return s.sent()?[2,this.sendMessageToWindowClients_(t)]:(n=this.getNotificationData_(t))?(r=n.title||"",[4,this.getSWRegistration_()]):[3,3]
case 2:return o=s.sent(),i=n.actions,a=Notification.maxActions,i&&a&&i.length>a&&console.warn("This browser only supports "+a+" actions.The remaining actions will not be displayed."),[2,o.showNotification(r,n)]
case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5]
case 4:return s.sent(),[2]
case 5:return[2]}})})},t.prototype.onSubChange_=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var e,t,n,r
return Object(s.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.getSWRegistration_()]
case 1:return e=o.sent(),[3,3]
case 2:throw t=o.sent(),h.create("unable-to-resubscribe",{errorInfo:t})
case 3:return o.trys.push([3,5,,8]),[4,e.pushManager.getSubscription()]
case 4:return o.sent(),[3,8]
case 5:return n=o.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)]
case 6:if(!(r=o.sent()))throw n
return[4,this.deleteToken(r.fcmToken)]
case 7:throw o.sent(),n
case 8:return[2]}})})},t.prototype.onNotificationClick_=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,n,r,o
return Object(s.__generator)(this,function(i){switch(i.label){case 0:return e.notification&&e.notification.data&&e.notification.data.FCM_MSG?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(t=e.notification.data.FCM_MSG).notification&&(n=t.fcmOptions&&t.fcmOptions.link||t.notification.click_action)?[4,this.getWindowClient_(n)]:[2]):[2]
case 1:return(r=i.sent())?[3,3]:[4,self.clients.openWindow(n)]
case 2:return r=i.sent(),[3,5]
case 3:return[4,r.focus()]
case 4:r=i.sent(),i.label=5
case 5:return r?(delete t.notification,delete t.fcmOptions,o=I(d.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(r,o)]):[2]}})})},t.prototype.getNotificationData_=function(e){var t
if(e&&"object"===c(e.notification)){var n=Object(s.__assign)({},e.notification)
return n.data=Object(s.__assign)({},e.notification.data,((t={}).FCM_MSG=e,t)),n}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw h.create("bg-handler-function-expected")
this.bgMessageHandler=e},t.prototype.getWindowClient_=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,n,r,o
return Object(s.__generator)(this,function(i){switch(i.label){case 0:return t=new URL(e,self.location.href).href,[4,D()]
case 1:for(n=i.sent(),r=null,o=0;o<n.length;o++)if(new URL(n[o].url,self.location.href).href===t){r=n[o]
break}return[2,r]}})})},t.prototype.attemptToMessageClient_=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(n){if(!e)throw h.create("no-window-client-to-msg")
return e.postMessage(t),[2]})})},t.prototype.hasVisibleClients_=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){switch(e.label){case 0:return[4,D()]
case 1:return[2,e.sent().some(function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")})]}})})},t.prototype.sendMessageToWindowClients_=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,n,r=this
return Object(s.__generator)(this,function(o){switch(o.label){case 0:return[4,D()]
case 1:return t=o.sent(),n=I(d.PUSH_MSG_RECEIVED,e),[4,Promise.all(t.map(function(e){return r.attemptToMessageClient_(e,n)}))]
case 2:return o.sent(),[2]}})})},t.prototype.getSWRegistration_=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){return[2,self.registration]})})},t.prototype.getPublicVapidKey_=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e,t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()]
case 1:if(!(e=n.sent()))throw h.create("sw-registration-expected")
return[4,this.getVapidDetailsModel().getVapidFromSWScope(e.scope)]
case 2:return null==(t=n.sent())?[2,l]:[2,t]}})})},t}(P)
function D(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function I(e,t){var n
return(n={})[u.TYPE_OF_MSG]=e,n[u.DATA]=t,n}var C,N=function(e){function t(t){var n=e.call(this,t)||this
return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.manifestCheckPromise=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=Object(a.createSubscribe)(function(e){n.messageObserver=e}),n.onTokenRefreshInternal=Object(a.createSubscribe)(function(e){n.tokenRefreshObserver=e}),n.setupSWMessageListener_(),n}return Object(s.__extends)(t,e),t.prototype.getToken=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(t){switch(t.label){case 0:return this.manifestCheckPromise||(this.manifestCheckPromise=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e,t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:if(!(e=document.querySelector('link[rel="manifest"]')))return[2]
n.label=1
case 1:return n.trys.push([1,4,,5]),[4,fetch(e.href)]
case 2:return[4,n.sent().json()]
case 3:return t=n.sent(),[3,5]
case 4:return n.sent(),[2]
case 5:if(!t||!t.gcm_sender_id)return[2]
if("103953800507"!==t.gcm_sender_id)throw h.create("incorrect-gcm-sender-id")
return[2]}})})}()),[4,this.manifestCheckPromise]
case 1:return t.sent(),[2,e.prototype.getToken.call(this)]}})})},t.prototype.requestPermission=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e
return Object(s.__generator)(this,function(t){switch(t.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()]
case 1:if("granted"===(e=t.sent()))return[2]
throw"denied"===e?h.create("permission-blocked"):h.create("permission-default")}})})},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw h.create("sw-registration-expected")
if(null!=this.registrationToUse)throw h.create("use-sw-before-get-token")
this.registrationToUse=e},t.prototype.usePublicVapidKey=function(e){if("string"!=typeof e)throw h.create("invalid-public-vapid-key")
if(null!=this.publicVapidKeyToUse)throw h.create("use-public-key-before-get-token")
var t=_(e)
if(65!==t.length)throw h.create("public-vapid-key-decryption-failed")
this.publicVapidKeyToUse=t},t.prototype.onMessage=function(e,t,n){return"function"==typeof e?this.onMessageInternal(e,t,n):this.onMessageInternal(e)},t.prototype.onTokenRefresh=function(e,t,n){return"function"==typeof e?this.onTokenRefreshInternal(e,t,n):this.onTokenRefreshInternal(e)},t.prototype.waitForRegistrationToActivate_=function(e){var t=e.installing||e.waiting||e.active
return new Promise(function(n,r){t?"activated"!==t.state?"redundant"!==t.state?t.addEventListener("statechange",function o(){if("activated"===t.state)n(e)
else{if("redundant"!==t.state)return
r(h.create("sw-reg-redundant"))}t.removeEventListener("statechange",o)}):r(h.create("sw-reg-redundant")):n(e):r(h.create("no-sw-in-reg"))})},t.prototype.getSWRegistration_=function(){var e=this
return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(e){throw h.create("failed-serviceworker-registration",{browserErrorMessage:e.message})}).then(function(t){return e.waitForRegistrationToActivate_(t).then(function(){return e.registrationToUse=t,t.update(),t})}))},t.prototype.getPublicVapidKey_=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,l]})})},t.prototype.setupSWMessageListener_=function(){var e=this
navigator.serviceWorker.addEventListener("message",function(t){if(t.data&&t.data[u.TYPE_OF_MSG]){var n=t.data
switch(n[u.TYPE_OF_MSG]){case d.PUSH_MSG_RECEIVED:case d.NOTIFICATION_CLICKED:var r=n[u.DATA]
e.messageObserver&&e.messageObserver.next(r)}}},!1)},t}(P)
function K(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}C={isSupported:K},i.a.INTERNAL.registerService("messaging",function(e){if(!K())throw h.create("unsupported-browser")
return self&&"ServiceWorkerGlobalScope"in self?new M(e):new N(e)},C)}}])
