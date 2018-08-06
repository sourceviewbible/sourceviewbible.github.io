webpackJsonp([35783957827783],{96:function(e,t,n){"use strict";function a(e){return e}function o(e,t,n){function o(e,t){var n=h.hasOwnProperty(t)?h[t]:null;D.hasOwnProperty(t)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,r=a.__reactAutoBindPairs;n.hasOwnProperty(c)&&b.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==c){var l=n[i],u=a.hasOwnProperty(i);if(o(u,i),b.hasOwnProperty(i))b[i](e,l);else{var d=h.hasOwnProperty(i),m="function"==typeof l,E=m&&!d&&!u&&n.autobind!==!1;if(E)r.push(i,l),a[i]=l;else if(u){var g=h[i];s(d&&("DEFINE_MANY_MERGED"===g||"DEFINE_MANY"===g),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",g,i),"DEFINE_MANY_MERGED"===g?a[i]=p(a[i],l):"DEFINE_MANY"===g&&(a[i]=f(a[i],l))}else a[i]=l}}}else;}function u(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var o=n in b;s(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;if(r){var i=N.hasOwnProperty(n)?N[n]:null;return s("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=p(e[n],a))}e[n]=a}}}function d(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(s(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var o={};return d(o,n),d(o,a),o}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function E(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],o=t[n+1];e[a]=m(e,o)}}function g(e){var t=a(function(e,a,o){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=a,this.refs=l,this.updater=o||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;s("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new x,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(r.bind(null,t)),r(t,v),r(t,e),r(t,_),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in h)t.prototype[o]||(t.prototype[o]=null);return t}var y=[],h={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},N={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},_={componentWillUnmount:function(){this.__isMounted=!1}},D={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},x=function(){};return i(x.prototype,e.prototype,D),g}var r,i=n(5),l=n(34),s=n(1),c="mixins";r={},e.exports=o},334:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return s.default.createElement("a",(0,i.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var n=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(n=!1),e.target&&"_self"!==e.target.toLowerCase()&&(n=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:n?"beacon":"",hitCallback:function(){n&&(document.location=e.href)}}):n&&(document.location=e.href),!1}}))}t.__esModule=!0,t.OutboundLink=void 0;var r=n(126),i=a(r),l=n(6),s=a(l),c=n(8),u=a(c);o.propTypes={href:u.default.string,target:u.default.string,onClick:u.default.func},t.OutboundLink=o},102:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,a=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,l=i&&i(Object);return function s(c,u,d){if("string"!=typeof u){if(l){var p=i(u);p&&p!==l&&s(c,p,d)}var f=a(u);o&&(f=f.concat(o(u)));for(var m=0;m<f.length;++m){var E=f[m];if(!(e[E]||t[E]||d&&d[E])){var g=r(u,E);try{n(c,E,g)}catch(e){}}}return c}return c}})},5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,l,s=n(e),c=1;c<arguments.length;c++){a=Object(arguments[c]);for(var u in a)r.call(a,u)&&(s[u]=a[u]);if(o){l=o(a);for(var d=0;d<l.length;d++)i.call(a,l[d])&&(s[l[d]]=a[l[d]])}}return s}},474:function(e,t,n){e.exports=n.p+"static/SVLogo.a75656ae.jpeg"},201:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=n(6),r=a(o),i=n(155),l=a(i),s=n(289),c=a(s),u=n(474),d=a(u),p=n(334),f=function(e){var t=e.data;return r.default.createElement("div",null,r.default.createElement("img",{src:d.default,className:c.default.icons,alt:"SourceView Logo"}),r.default.createElement("div",{className:c.default.reader},r.default.createElement("p",{className:c.default.svtitle},"SourceView"),r.default.createElement("p",{className:c.default.readertitle},"READER")),r.default.createElement("div",{className:c.default.changeLanguage},r.default.createElement(p.OutboundLink,{href:"https://sourceviewbible.github.io/"},r.default.createElement("p",{className:c.default.switchlang},r.default.createElement("span",{className:c.default.switch},"≡"),"Mudar idioma"))),r.default.createElement("details",null,r.default.createElement("summary",null,t.Luke.edges.slice(0,1).map(function(e){return r.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),r.default.createElement("ul",null,t.Luke.edges.map(function(e){return r.default.createElement("li",{key:e.node.id},r.default.createElement(l.default,{to:e.node.path,className:c.default.link},r.default.createElement("p",{className:c.default.title},e.node.title),r.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),r.default.createElement("hr",null)))}))),r.default.createElement("details",null,r.default.createElement("summary",null,t.Acts.edges.slice(0,1).map(function(e){return r.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),r.default.createElement("ul",null,t.Acts.edges.map(function(e){return r.default.createElement("li",{key:e.node.id},r.default.createElement(l.default,{to:e.node.path,className:c.default.link},r.default.createElement("p",{className:c.default.title},e.node.title),r.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),r.default.createElement("hr",null)))}))),r.default.createElement("h5",{className:c.default.copyrightIndex},"Nova Tradução na Linguagem de Hoje",r.default.createElement("br",null),"Copyright 2000 Sociedade Bíblica do Brasil.",r.default.createElement("br",null),"Todos os direitos reservados",r.default.createElement("br",null),r.default.createElement("br",null),"© 2018 SourceView LLC."))};t.pageQuery="** extracted graphql fragment **";t.default=f},289:function(e,t){e.exports={bookTitle:"src-pages----tocindex-module---bookTitle---3IaWw",logodiv:"src-pages----tocindex-module---logodiv---3fqNC",reference:"src-pages----tocindex-module---reference---1UxdK",copyrightIndex:"src-pages----tocindex-module---copyrightIndex---1XNQs",changeLanguage:"src-pages----tocindex-module---changeLanguage---7qRes",switchlang:"src-pages----tocindex-module---switchlang---1Nw2h",switch:"src-pages----tocindex-module---switch---1WjNc",logo:"src-pages----tocindex-module---logo---3ZXYM",title:"src-pages----tocindex-module---title---9Uuvn",icons:"src-pages----tocindex-module---icons----W3ao",reader:"src-pages----tocindex-module---reader---1mLZg",svtitle:"src-pages----tocindex-module---svtitle---14AnA",readertitle:"src-pages----tocindex-module---readertitle---3ejLB"}}});
//# sourceMappingURL=component---src-pages-index-js-49fc2c2c166f09a44c66.js.map