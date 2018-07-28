webpackJsonp([35783957827783],{96:function(e,t,a){"use strict";function l(e){return e}function n(e,t,a){function n(e,t){var a=y.hasOwnProperty(t)?y[t]:null;_.hasOwnProperty(t)&&o("OVERRIDE_BASE"===a,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&o("DEFINE_MANY"===a||"DEFINE_MANY_MERGED"===a,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function u(e,a){if(a){o("function"!=typeof a,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),o(!t(a),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var l=e.prototype,u=l.__reactAutoBindPairs;a.hasOwnProperty(c)&&g.mixins(e,a.mixins);for(var r in a)if(a.hasOwnProperty(r)&&r!==c){var d=a[r],s=l.hasOwnProperty(r);if(n(s,r),g.hasOwnProperty(r))g[r](e,d);else{var i=y.hasOwnProperty(r),p="function"==typeof d,E=p&&!i&&!s&&a.autobind!==!1;if(E)u.push(r,d),l[r]=d;else if(s){var N=y[r];o(i&&("DEFINE_MANY_MERGED"===N||"DEFINE_MANY"===N),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",N,r),"DEFINE_MANY_MERGED"===N?l[r]=f(l[r],d):"DEFINE_MANY"===N&&(l[r]=m(l[r],d))}else l[r]=d}}}else;}function s(e,t){if(t)for(var a in t){var l=t[a];if(t.hasOwnProperty(a)){var n=a in g;o(!n,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',a);var u=a in e;if(u){var r=k.hasOwnProperty(a)?k[a]:null;return o("DEFINE_MANY_MERGED"===r,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",a),void(e[a]=f(e[a],l))}e[a]=l}}}function i(e,t){o(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var a in t)t.hasOwnProperty(a)&&(o(void 0===e[a],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",a),e[a]=t[a]);return e}function f(e,t){return function(){var a=e.apply(this,arguments),l=t.apply(this,arguments);if(null==a)return l;if(null==l)return a;var n={};return i(n,a),i(n,l),n}}function m(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function p(e,t){var a=t.bind(e);return a}function E(e){for(var t=e.__reactAutoBindPairs,a=0;a<t.length;a+=2){var l=t[a],n=t[a+1];e[l]=p(e,n)}}function N(e){var t=l(function(e,l,n){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=l,this.refs=d,this.updater=n||a,this.state=null;var u=this.getInitialState?this.getInitialState():null;o("object"==typeof u&&!Array.isArray(u),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=u});t.prototype=new T,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],h.forEach(u.bind(null,t)),u(t,b),u(t,e),u(t,v),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),o(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var n in y)t.prototype[n]||(t.prototype[n]=null);return t}var h=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},k={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},g={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var a=0;a<t.length;a++)u(e,t[a])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){s(e,t)},autobind:function(){}},b={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},T=function(){};return r(T.prototype,e.prototype,_),N}var u,r=a(5),d=a(34),o=a(2),c="mixins";u={},e.exports=n},441:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return o.default.createElement("a",(0,r.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var a=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:a?"beacon":"",hitCallback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}t.__esModule=!0,t.OutboundLink=void 0;var u=a(126),r=l(u),d=a(6),o=l(d),c=a(8),s=l(c);n.propTypes={href:s.default.string,target:s.default.string,onClick:s.default.func},t.OutboundLink=n},102:function(e,t,a){!function(t,a){e.exports=a()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,l=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,r=Object.getPrototypeOf,d=r&&r(Object);return function o(c,s,i){if("string"!=typeof s){if(d){var f=r(s);f&&f!==d&&o(c,f,i)}var m=l(s);n&&(m=m.concat(n(s)));for(var p=0;p<m.length;++p){var E=m[p];if(!(e[E]||t[E]||i&&i[E])){var N=u(s,E);try{a(c,E,N)}catch(e){}}}return c}return c}})},5:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function l(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var l=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==l.join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}var n=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=l()?Object.assign:function(e,t){for(var l,d,o=a(e),c=1;c<arguments.length;c++){l=Object(arguments[c]);for(var s in l)u.call(l,s)&&(o[s]=l[s]);if(n){d=n(l);for(var i=0;i<d.length;i++)r.call(l,d[i])&&(o[d[i]]=l[d[i]])}}return o}},688:function(e,t,a){e.exports=a.p+"static/SVLogo.a75656ae.jpeg"},201:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(6),u=l(n),r=a(155),d=l(r),o=a(289),c=l(o),s=a(688),i=l(s),f=a(441),m=function(e){var t=e.data;return u.default.createElement("div",null,u.default.createElement("img",{src:i.default,className:c.default.icons}),u.default.createElement("div",{className:c.default.reader},u.default.createElement("p",{className:c.default.svtitle},"SourceView"),u.default.createElement("p",{className:c.default.readertitle},"READER")),u.default.createElement("div",{className:c.default.changeLanguage},u.default.createElement(f.OutboundLink,{href:"https://sourceviewbible.github.io/"},u.default.createElement("p",{className:c.default.switchlang},u.default.createElement("span",{className:c.default.switch},"≡"),"Change Language"))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Matthew.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Matthew.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Mark.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Mark.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Luke.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Luke.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.John.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.John.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Acts.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Acts.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Romans.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Romans.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Corinthians1.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Corinthians1.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Corinthians2.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Corinthians2.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Galatians.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Galatians.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Ephesians.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Ephesians.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Philippians.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Philippians.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Colossians.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Colossians.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Thessalonians1.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Thessalonians1.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Thessalonians2.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Thessalonians2.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Timothy1.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Timothy1.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Timothy2.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Timothy2.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Titus.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Titus.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Philemon.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Philemon.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Hebrews.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Hebrews.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.James.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.James.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Peter1.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Peter1.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Peter2.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Peter2.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.John1.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.John1.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.John2.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.John2.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.John3.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.John3.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Jude.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Jude.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("details",null,u.default.createElement("summary",null,t.Revelation.edges.slice(0,1).map(function(e){return u.default.createElement("span",{className:c.default.bookTitle,key:e.node.id},e.node.bookName)})),u.default.createElement("ul",null,t.Revelation.edges.map(function(e){return u.default.createElement("li",{key:e.node.id},u.default.createElement(d.default,{to:e.node.path,className:c.default.link},u.default.createElement("p",{className:c.default.title},e.node.title),u.default.createElement("p",{className:c.default.reference},e.node.bookName," ",e.node.ref),u.default.createElement("hr",null)))}))),u.default.createElement("h5",{className:c.default.copyright},"World English Bible (WEB)",u.default.createElement("br",null),"a Public Domain Modern English translation",u.default.createElement("br",null),"of the Holy Bible.",u.default.createElement("br",null),u.default.createElement("br",null),"© 2018 SourceView LLC."))};t.pageQuery="** extracted graphql fragment **";t.default=m},289:function(e,t){e.exports={bookTitle:"src-pages----tocindex-module---bookTitle---3IaWw",logodiv:"src-pages----tocindex-module---logodiv---3fqNC",reference:"src-pages----tocindex-module---reference---1UxdK",copyright:"src-pages----tocindex-module---copyright---3M6ay",changeLanguage:"src-pages----tocindex-module---changeLanguage---7qRes",switchlang:"src-pages----tocindex-module---switchlang---1Nw2h",switch:"src-pages----tocindex-module---switch---1WjNc",logo:"src-pages----tocindex-module---logo---3ZXYM",title:"src-pages----tocindex-module---title---9Uuvn",icons:"src-pages----tocindex-module---icons----W3ao",reader:"src-pages----tocindex-module---reader---1mLZg",svtitle:"src-pages----tocindex-module---svtitle---14AnA",readertitle:"src-pages----tocindex-module---readertitle---3ejLB"}}});
//# sourceMappingURL=component---src-pages-index-js-2810b906ca865067b617.js.map