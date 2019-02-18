"use strict"
define("wandertext/component-managers/sparkles",["exports","sparkles-component/component-managers/sparkles"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("wandertext/helpers/app-version",["exports","wandertext/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,l=n.versionOnly||n.hideSha,i=n.shaOnly||n.hideVersion,o=null
return l&&(n.showExtended&&(o=a.match(r.versionExtendedRegExp)),o||(o=a.match(r.versionRegExp))),i&&(o=a.match(r.shaRegExp)),o?o[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var a=Ember.Helper.helper(n)
e.default=a}),define("wandertext/helpers/bind",["exports","ember-bind-helper/helpers/bind"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"bind",{enumerable:!0,get:function(){return t.bind}})}),define("wandertext/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("wandertext/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("wandertext/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","wandertext/config/environment"],function(e,t,r){var n,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,a=r.default.APP.version)
var l={name:"App Version",initialize:(0,t.default)(n,a)}
e.default=l}),define("wandertext/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("wandertext/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("wandertext/initializers/export-application-global",["exports","wandertext/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,a=t.default.exportApplicationGlobal
n="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n}),define("wandertext/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("wandertext/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("wandertext/src/main",["exports","ember-load-initializers","wandertext/config/environment","wandertext/src/resolver"],function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default});(0,t.default)(a,r.default.modulePrefix+"/src/init"),(0,t.default)(a,r.default.modulePrefix)
var l=a
e.default=l}),define("wandertext/src/resolver",["exports","ember-resolver/resolvers/fallback","ember-resolver/ember-config","wandertext/config/environment"],function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=(0,r.default)(n.default.modulePrefix),l=t.default.extend({config:a})
e.default=l}),define("wandertext/src/router",["exports","wandertext/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){this.route("text",{path:"text/:slug"})})
var n=r
e.default=n}),define("wandertext/src/services/data",["exports","@babel/runtime/helpers/esm/asyncToGenerator","@babel/runtime/helpers/esm/classCallCheck","@babel/runtime/helpers/esm/createClass","@babel/runtime/helpers/esm/possibleConstructorReturn","@babel/runtime/helpers/esm/getPrototypeOf","@babel/runtime/helpers/esm/inherits","pouchdb","wandertext/config/environment"],function(e,t,r,n,a,l,i,o,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){function u(){var e,t;(0,r.default)(this,u)
for(var n=arguments.length,i=new Array(n),d=0;d<n;d++)i[d]=arguments[d]
return(t=(0,a.default)(this,(e=(0,l.default)(u)).call.apply(e,[this].concat(i)))).db=new o.default(s.default.couchdb),t}return(0,i.default)(u,e),(0,n.default)(u,[{key:"getAll",value:function(){var e=(0,t.default)(regeneratorRuntime.mark(function e(){var t
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.allDocs({include_docs:!0})
case 2:return t=e.sent,e.abrupt("return",t.rows.map(function(e){return{title:e.doc.title}}))
case 4:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}()},{key:"getText",value:function(){var e=(0,t.default)(regeneratorRuntime.mark(function e(t){var r,n
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="8a915f90dc5b231bf7f57601cb00f669","nightwood"===t&&(r="8a915f90dc5b231bf7f57601cb011c57"),e.next=4,this.db.get(r)
case 4:return n=e.sent,e.abrupt("return",n)
case 6:case"end":return e.stop()}},e,this)}))
return function(t){return e.apply(this,arguments)}}()}]),u}(Ember.Service)
e.default=u}),define("wandertext/src/services/the-map",["exports","@babel/runtime/helpers/esm/classCallCheck","@babel/runtime/helpers/esm/possibleConstructorReturn","@babel/runtime/helpers/esm/getPrototypeOf","@babel/runtime/helpers/esm/inherits"],function(e,t,r,n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){function l(){return(0,t.default)(this,l),(0,r.default)(this,(0,n.default)(l).apply(this,arguments))}return(0,a.default)(l,e),l}(Ember.Service)
e.default=l}),define("wandertext/src/ui/components/card-header/component",["exports","@babel/runtime/helpers/esm/classCallCheck","@babel/runtime/helpers/esm/possibleConstructorReturn","@babel/runtime/helpers/esm/getPrototypeOf","@babel/runtime/helpers/esm/inherits","wandertext/config/environment"],function(e,t,r,n,a,l){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=function(e){function i(){var e,a;(0,t.default)(this,i)
for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u]
return(a=(0,r.default)(this,(e=(0,n.default)(i)).call.apply(e,[this].concat(s)))).rootURL=l.default.rootURL,a}return(0,a.default)(i,e),i}(Ember.Component)
e.default=i}),define("wandertext/src/ui/components/card-header/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"svO7SYwT",block:'{"symbols":[],"statements":[[7,"div"],[11,"id","the-card-header"],[11,"class","card-header d-flex justify-content-end"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Wandertext"],[10],[0,"\\n  "],[7,"button"],[11,"class","ml-3 btn btn-secondary"],[9],[0,"\\n    "],[7,"img"],[12,"src",[28,[[21,"rootURL"],"assets/logo/waw.svg"]]],[11,"class",""],[11,"style","width: 2.5rem; height: 2.5rem;"],[9],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n\\n"]],"hasEval":false}',meta:{moduleName:"src/ui/components/card-header/template.hbs"}})
e.default=t}),define("wandertext/src/ui/components/floating-box/component",["exports","@babel/runtime/helpers/esm/classCallCheck","@babel/runtime/helpers/esm/possibleConstructorReturn","@babel/runtime/helpers/esm/getPrototypeOf","@babel/runtime/helpers/esm/inherits"],function(e,t,r,n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){function l(){return(0,t.default)(this,l),(0,r.default)(this,(0,n.default)(l).apply(this,arguments))}return(0,a.default)(l,e),l}(Ember.Component)
e.default=l}),define("wandertext/src/ui/components/floating-box/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"ET4mQ+VZ",block:'{"symbols":["&default"],"statements":[[7,"div"],[11,"id","floating-box"],[11,"class","m-3 card"],[9],[0,"\\n  "],[5,"card-header",[],[[],[]]],[0,"\\n  "],[7,"div"],[11,"id","card-content"],[11,"aria-labelledby","the-card-header"],[9],[0,"\\n      "],[7,"div"],[11,"class","card-body"],[9],[0,"\\n        "],[14,1],[0,"\\n      "],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"src/ui/components/floating-box/template.hbs"}})
e.default=t}),define("wandertext/src/ui/components/text-detail/component",["exports","@babel/runtime/helpers/esm/asyncToGenerator","@babel/runtime/helpers/esm/classCallCheck","@babel/runtime/helpers/esm/possibleConstructorReturn","@babel/runtime/helpers/esm/getPrototypeOf","@babel/runtime/helpers/esm/inherits","@babel/runtime/helpers/esm/assertThisInitialized","@babel/runtime/helpers/esm/decorate","@ember-decorators/service"],function(e,t,r,n,a,l,i,o,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=(0,o.default)(null,function(e,o){return{F:function(t){function o(){var t,l;(0,r.default)(this,o)
for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d]
return l=(0,n.default)(this,(t=(0,a.default)(o)).call.apply(t,[this].concat(u))),e((0,i.default)((0,i.default)(l))),l}return(0,l.default)(o,t),o}(o),d:[{kind:"field",decorators:[s.inject],key:"data",value:void 0},{kind:"method",key:"didInsertElement",value:function(){var e=(0,t.default)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.data.getText(this.get("slug"))
case 3:e.t1=e.sent,e.t0.set.call(e.t0,"text",e.t1)
case 5:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}()}]}},Ember.Component)
e.default=u}),define("wandertext/src/ui/components/text-detail/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Wgz1Magx",block:'{"symbols":["&default"],"statements":[[7,"h2"],[9],[1,[23,["text","properties","title"]],false],[10],[0,"\\n"],[7,"h3"],[9],[1,[23,["text","properties","author"]],false],[10],[0,"\\n"],[7,"p"],[9],[1,[23,["text","year"]],false],[10],[0,"\\n"],[7,"img"],[12,"src",[23,["text","properties","cover"]]],[12,"alt",[28,["Cover of ",[23,["text","properties","title"]]]]],[11,"class","img-fluid"],[9],[10],[0,"\\n\\n"],[14,1],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"src/ui/components/text-detail/template.hbs"}})
e.default=t}),define("wandertext/src/ui/routes/application/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"LqDRrHh6",block:'{"symbols":[],"statements":[[5,"floating-box",[],[[],[]],{"statements":[[0,"\\n"],[1,[21,"outlet"],false],[0,"\\n"]],"parameters":[]}],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"src/ui/routes/application/template.hbs"}})
e.default=t}),define("wandertext/src/ui/routes/index/route",["exports","@babel/runtime/helpers/esm/classCallCheck","@babel/runtime/helpers/esm/possibleConstructorReturn","@babel/runtime/helpers/esm/getPrototypeOf","@babel/runtime/helpers/esm/inherits"],function(e,t,r,n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){function l(){return(0,t.default)(this,l),(0,r.default)(this,(0,n.default)(l).apply(this,arguments))}return(0,a.default)(l,e),l}(Ember.Route)
e.default=l}),define("wandertext/src/ui/routes/index/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"j1nFNSmp",block:'{"symbols":[],"statements":[[7,"h2"],[9],[0,"\\n  Welcome to Wandertext.\\n"],[10],[0,"\\n\\n"],[7,"p"],[11,"class","lead"],[9],[0,"Create and share semantically rich geospatial datasets."],[10],[0,"\\n\\n"],[4,"link-to",["text","nightwood"],[["class","role"],["btn btn-primary","button"]],{"statements":[[0,"  Go to "],[7,"i"],[9],[0,"Nightwood"],[10],[0,"\\n"]],"parameters":[]},null],[0," \\n"],[4,"link-to",["text","baburnama"],[["class","role"],["btn btn-primary","button"]],{"statements":[[0,"  Go to "],[7,"i"],[9],[0,"Bāburnāmā"],[10],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"src/ui/routes/index/template.hbs"}})
e.default=t}),define("wandertext/src/ui/routes/text/route",["exports","@babel/runtime/helpers/esm/classCallCheck","@babel/runtime/helpers/esm/createClass","@babel/runtime/helpers/esm/possibleConstructorReturn","@babel/runtime/helpers/esm/getPrototypeOf","@babel/runtime/helpers/esm/inherits"],function(e,t,r,n,a,l){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=function(e){function i(){return(0,t.default)(this,i),(0,n.default)(this,(0,a.default)(i).apply(this,arguments))}return(0,l.default)(i,e),(0,r.default)(i,[{key:"model",value:function(e){return{slug:e.slug}}}]),i}(Ember.Route)
e.default=i}),define("wandertext/src/ui/routes/text/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"MpJIHzc9",block:'{"symbols":[],"statements":[[5,"text-detail",[],[["@slug"],[[22,0,["model","slug"]]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"src/ui/routes/text/template.hbs"}})
e.default=t}),define("wandertext/config/environment",[],function(){try{var e="wandertext/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("wandertext/src/main").default.create({name:"wandertext",version:"0.0.0+91776807"})
