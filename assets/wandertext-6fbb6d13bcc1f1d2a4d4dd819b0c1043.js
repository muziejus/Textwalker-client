"use strict"
define("wandertext/component-managers/sparkles",["exports","sparkles-component/component-managers/sparkles"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("wandertext/helpers/app-version",["exports","wandertext/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,i=r.versionOnly||r.hideSha,o=r.shaOnly||r.hideVersion,l=null
return i&&(r.showExtended&&(l=a.match(n.versionExtendedRegExp)),l||(l=a.match(n.versionRegExp))),o&&(l=a.match(n.shaRegExp)),l?l[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var a=Ember.Helper.helper(r)
e.default=a}),define("wandertext/helpers/bind",["exports","ember-bind-helper/helpers/bind"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"bind",{enumerable:!0,get:function(){return t.bind}})}),define("wandertext/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("wandertext/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("wandertext/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","wandertext/config/environment"],function(e,t,n){var r,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,a=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,a)}
e.default=i}),define("wandertext/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("wandertext/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("wandertext/initializers/export-application-global",["exports","wandertext/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,a=t.default.exportApplicationGlobal
r="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r}),define("wandertext/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("wandertext/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("wandertext/src/main",["exports","ember-load-initializers","wandertext/config/environment","wandertext/src/resolver"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:r.default});(0,t.default)(a,n.default.modulePrefix+"/src/init"),(0,t.default)(a,n.default.modulePrefix)
var i=a
e.default=i}),define("wandertext/src/resolver",["exports","ember-resolver/resolvers/fallback","ember-resolver/ember-config","wandertext/config/environment"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=(0,n.default)(r.default.modulePrefix),i=t.default.extend({config:a})
e.default=i}),define("wandertext/src/router",["exports","wandertext/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){})
var r=n
e.default=r}),define("wandertext/src/ui/components/floating-box/component",["exports","@babel/runtime/helpers/esm/classCallCheck","@babel/runtime/helpers/esm/possibleConstructorReturn","@babel/runtime/helpers/esm/getPrototypeOf","@babel/runtime/helpers/esm/inherits"],function(e,t,n,r,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=function(e){function i(){return(0,t.default)(this,i),(0,n.default)(this,(0,r.default)(i).apply(this,arguments))}return(0,a.default)(i,e),i}(Ember.Component)
e.default=i}),define("wandertext/src/ui/components/floating-box/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"EUCaAlCf",block:'{"symbols":["&default"],"statements":[[7,"h3"],[9],[0,"I am FloatingBox"],[10],[0,"\\n"],[14,1],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"src/ui/components/floating-box/template.hbs"}})
e.default=t}),define("wandertext/src/ui/routes/application/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"TkR5VjfH",block:'{"symbols":[],"statements":[[7,"h2"],[11,"id","title"],[9],[0,"Welcome to Wandertext"],[10],[0,"\\n\\n"],[5,"floating-box",[],[[],[]]],[0,"\\n\\n"],[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"src/ui/routes/application/template.hbs"}})
e.default=t}),define("wandertext/config/environment",[],function(){try{var e="wandertext/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("wandertext/src/main").default.create({name:"wandertext",version:"0.0.0+6b9494de"})
