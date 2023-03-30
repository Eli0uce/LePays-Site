/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */function T(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:i});else{var r=e.prototype._init;e.prototype._init=function(n){n===void 0&&(n={}),n.init=n.init?[i].concat(n.init):i,r.call(this,n)}}function i(){var n=this.$options;n.store?this.$store=typeof n.store=="function"?n.store():n.store:n.parent&&n.parent.$store&&(this.$store=n.parent.$store)}}var U=typeof window<"u"?window:typeof global<"u"?global:{},g=U.__VUE_DEVTOOLS_GLOBAL_HOOK__;function D(e){g&&(e._devtoolHook=g,g.emit("vuex:init",e),g.on("vuex:travel-to-state",function(t){e.replaceState(t)}),e.subscribe(function(t,r){g.emit("vuex:mutation",t,r)},{prepend:!0}),e.subscribeAction(function(t,r){g.emit("vuex:action",t,r)},{prepend:!0}))}function y(e,t){Object.keys(e).forEach(function(r){return t(e[r],r)})}function x(e){return e!==null&&typeof e=="object"}function z(e){return e&&typeof e.then=="function"}function B(e,t){return function(){return e(t)}}var m=function(t,r){this.runtime=r,this._children=Object.create(null),this._rawModule=t;var i=t.state;this.state=(typeof i=="function"?i():i)||{}},A={namespaced:{configurable:!0}};A.namespaced.get=function(){return!!this._rawModule.namespaced};m.prototype.addChild=function(t,r){this._children[t]=r};m.prototype.removeChild=function(t){delete this._children[t]};m.prototype.getChild=function(t){return this._children[t]};m.prototype.hasChild=function(t){return t in this._children};m.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};m.prototype.forEachChild=function(t){y(this._children,t)};m.prototype.forEachGetter=function(t){this._rawModule.getters&&y(this._rawModule.getters,t)};m.prototype.forEachAction=function(t){this._rawModule.actions&&y(this._rawModule.actions,t)};m.prototype.forEachMutation=function(t){this._rawModule.mutations&&y(this._rawModule.mutations,t)};Object.defineProperties(m.prototype,A);var _=function(t){this.register([],t,!1)};_.prototype.get=function(t){return t.reduce(function(r,i){return r.getChild(i)},this.root)};_.prototype.getNamespace=function(t){var r=this.root;return t.reduce(function(i,n){return r=r.getChild(n),i+(r.namespaced?n+"/":"")},"")};_.prototype.update=function(t){G([],this.root,t)};_.prototype.register=function(t,r,i){var n=this;i===void 0&&(i=!0);var o=new m(r,i);if(t.length===0)this.root=o;else{var u=this.get(t.slice(0,-1));u.addChild(t[t.length-1],o)}r.modules&&y(r.modules,function(c,a){n.register(t.concat(a),c,i)})};_.prototype.unregister=function(t){var r=this.get(t.slice(0,-1)),i=t[t.length-1];r.getChild(i).runtime&&r.removeChild(i)};_.prototype.isRegistered=function(t){var r=this.get(t.slice(0,-1)),i=t[t.length-1];return r.hasChild(i)};function G(e,t,r){if(t.update(r),r.modules)for(var i in r.modules){if(!t.getChild(i))return;G(e.concat(i),t.getChild(i),r.modules[i])}}var d,v=function(t){var r=this;t===void 0&&(t={}),!d&&typeof window<"u"&&window.Vue&&N(window.Vue);var i=t.plugins;i===void 0&&(i=[]);var n=t.strict;n===void 0&&(n=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new _(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d,this._makeLocalGettersCache=Object.create(null);var o=this,u=this,c=u.dispatch,a=u.commit;this.dispatch=function(p,h){return c.call(o,p,h)},this.commit=function(p,h,R){return a.call(o,p,h,R)},this.strict=n;var f=this._modules.root.state;$(this,f,[],this._modules.root),E(this,f),i.forEach(function(l){return l(r)});var s=t.devtools!==void 0?t.devtools:d.config.devtools;s&&D(this)},O={state:{configurable:!0}};O.state.get=function(){return this._vm._data.$$state};O.state.set=function(e){};v.prototype.commit=function(t,r,i){var n=this,o=b(t,r,i),u=o.type,c=o.payload,a={type:u,payload:c},f=this._mutations[u];f&&(this._withCommit(function(){f.forEach(function(l){l(c)})}),this._subscribers.slice().forEach(function(s){return s(a,n.state)}))};v.prototype.dispatch=function(t,r){var i=this,n=b(t,r),o=n.type,u=n.payload,c={type:o,payload:u},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter(function(s){return s.before}).forEach(function(s){return s.before(c,i.state)})}catch{}var f=a.length>1?Promise.all(a.map(function(s){return s(u)})):a[0](u);return new Promise(function(s,l){f.then(function(p){try{i._actionSubscribers.filter(function(h){return h.after}).forEach(function(h){return h.after(c,i.state)})}catch{}s(p)},function(p){try{i._actionSubscribers.filter(function(h){return h.error}).forEach(function(h){return h.error(c,i.state,p)})}catch{}l(p)})})}};v.prototype.subscribe=function(t,r){return j(t,this._subscribers,r)};v.prototype.subscribeAction=function(t,r){var i=typeof t=="function"?{before:t}:t;return j(i,this._actionSubscribers,r)};v.prototype.watch=function(t,r,i){var n=this;return this._watcherVM.$watch(function(){return t(n.state,n.getters)},r,i)};v.prototype.replaceState=function(t){var r=this;this._withCommit(function(){r._vm._data.$$state=t})};v.prototype.registerModule=function(t,r,i){i===void 0&&(i={}),typeof t=="string"&&(t=[t]),this._modules.register(t,r),$(this,this.state,t,this._modules.get(t),i.preserveState),E(this,this.state)};v.prototype.unregisterModule=function(t){var r=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var i=S(r.state,t.slice(0,-1));d.delete(i,t[t.length-1])}),k(this)};v.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};v.prototype.hotUpdate=function(t){this._modules.update(t),k(this,!0)};v.prototype._withCommit=function(t){var r=this._committing;this._committing=!0,t(),this._committing=r};Object.defineProperties(v.prototype,O);function j(e,t,r){return t.indexOf(e)<0&&(r&&r.prepend?t.unshift(e):t.push(e)),function(){var i=t.indexOf(e);i>-1&&t.splice(i,1)}}function k(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var r=e.state;$(e,r,[],e._modules.root,!0),E(e,r,t)}function E(e,t,r){var i=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var n=e._wrappedGetters,o={};y(n,function(c,a){o[a]=B(c,e),Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})});var u=d.config.silent;d.config.silent=!0,e._vm=new d({data:{$$state:t},computed:o}),d.config.silent=u,e.strict&&Q(e),i&&(r&&e._withCommit(function(){i._data.$$state=null}),d.nextTick(function(){return i.$destroy()}))}function $(e,t,r,i,n){var o=!r.length,u=e._modules.getNamespace(r);if(i.namespaced&&(e._modulesNamespaceMap[u],e._modulesNamespaceMap[u]=i),!o&&!n){var c=S(t,r.slice(0,-1)),a=r[r.length-1];e._withCommit(function(){d.set(c,a,i.state)})}var f=i.context=I(e,u,r);i.forEachMutation(function(s,l){var p=u+l;q(e,p,s,f)}),i.forEachAction(function(s,l){var p=s.root?l:u+l,h=s.handler||s;F(e,p,h,f)}),i.forEachGetter(function(s,l){var p=u+l;J(e,p,s,f)}),i.forEachChild(function(s,l){$(e,t,r.concat(l),s,n)})}function I(e,t,r){var i=t==="",n={dispatch:i?e.dispatch:function(o,u,c){var a=b(o,u,c),f=a.payload,s=a.options,l=a.type;return(!s||!s.root)&&(l=t+l),e.dispatch(l,f)},commit:i?e.commit:function(o,u,c){var a=b(o,u,c),f=a.payload,s=a.options,l=a.type;(!s||!s.root)&&(l=t+l),e.commit(l,f,s)}};return Object.defineProperties(n,{getters:{get:i?function(){return e.getters}:function(){return K(e,t)}},state:{get:function(){return S(e.state,r)}}}),n}function K(e,t){if(!e._makeLocalGettersCache[t]){var r={},i=t.length;Object.keys(e.getters).forEach(function(n){if(n.slice(0,i)===t){var o=n.slice(i);Object.defineProperty(r,o,{get:function(){return e.getters[n]},enumerable:!0})}}),e._makeLocalGettersCache[t]=r}return e._makeLocalGettersCache[t]}function q(e,t,r,i){var n=e._mutations[t]||(e._mutations[t]=[]);n.push(function(u){r.call(e,i.state,u)})}function F(e,t,r,i){var n=e._actions[t]||(e._actions[t]=[]);n.push(function(u){var c=r.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},u);return z(c)||(c=Promise.resolve(c)),e._devtoolHook?c.catch(function(a){throw e._devtoolHook.emit("vuex:error",a),a}):c})}function J(e,t,r,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(o){return r(i.state,i.getters,o.state,o.getters)})}function Q(e){e._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})}function S(e,t){return t.reduce(function(r,i){return r[i]},e)}function b(e,t,r){return x(e)&&e.type&&(r=t,t=e,e=e.type),{type:e,payload:t,options:r}}function N(e){d&&e===d||(d=e,T(d))}var L=C(function(e,t){var r={};return w(t).forEach(function(i){var n=i.key,o=i.val;r[n]=function(){var c=this.$store.state,a=this.$store.getters;if(e){var f=M(this.$store,"mapState",e);if(!f)return;c=f.context.state,a=f.context.getters}return typeof o=="function"?o.call(this,c,a):c[o]},r[n].vuex=!0}),r}),H=C(function(e,t){var r={};return w(t).forEach(function(i){var n=i.key,o=i.val;r[n]=function(){for(var c=[],a=arguments.length;a--;)c[a]=arguments[a];var f=this.$store.commit;if(e){var s=M(this.$store,"mapMutations",e);if(!s)return;f=s.context.commit}return typeof o=="function"?o.apply(this,[f].concat(c)):f.apply(this.$store,[o].concat(c))}}),r}),P=C(function(e,t){var r={};return w(t).forEach(function(i){var n=i.key,o=i.val;o=e+o,r[n]=function(){if(!(e&&!M(this.$store,"mapGetters",e)))return this.$store.getters[o]},r[n].vuex=!0}),r}),V=C(function(e,t){var r={};return w(t).forEach(function(i){var n=i.key,o=i.val;r[n]=function(){for(var c=[],a=arguments.length;a--;)c[a]=arguments[a];var f=this.$store.dispatch;if(e){var s=M(this.$store,"mapActions",e);if(!s)return;f=s.context.dispatch}return typeof o=="function"?o.apply(this,[f].concat(c)):f.apply(this.$store,[o].concat(c))}}),r}),W=function(e){return{mapState:L.bind(null,e),mapGetters:P.bind(null,e),mapMutations:H.bind(null,e),mapActions:V.bind(null,e)}};function w(e){return X(e)?Array.isArray(e)?e.map(function(t){return{key:t,val:t}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}}):[]}function X(e){return Array.isArray(e)||x(e)}function C(e){return function(t,r){return typeof t!="string"?(r=t,t=""):t.charAt(t.length-1)!=="/"&&(t+="/"),e(t,r)}}function M(e,t,r){var i=e._modulesNamespaceMap[r];return i}var Y={Store:v,install:N,version:"3.4.0",mapState:L,mapMutations:H,mapGetters:P,mapActions:V,createNamespacedHelpers:W};const Z=Y;export{Z as V,L as a,H as b,P as c,V as m};
