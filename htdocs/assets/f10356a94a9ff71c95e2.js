(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[2],{1893:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});Object.defineProperty(e,"VisibilityObserver",{enumerable:!0,get:function(){return n.default}});Object.defineProperty(e,"VisibilitySensor",{enumerable:!0,get:function(){return r.default}});i(2405);var n=o(i(2270)),r=o(i(2406));function o(t){return t&&t.__esModule?t:{default:t}}},2270:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=void 0;var n=i(173),r={root:null,rootMargin:"0px",threshold:.5},o=function(){function t(t){var e=this;void 0===t&&(t=r);this._nodes=new WeakMap;this._components=new WeakMap;this._visibleComponents=new WeakSet;this._handleEntries=function(t){t.forEach((function(t){var i;if(null!=t.isIntersecting)i=t.isIntersecting;else{var n=e._options.threshold;i=null==n?t.intersectionRatio>0:Array.isArray(n)?n.some((function(e){return t.intersectionRatio>e
})):t.intersectionRatio>n}var r=e._nodes.get(t.target);if(null!=r){var o=!1;if(i){if(!e._visibleComponents.has(r)){e._visibleComponents.add(r);o=!0}}else if(e._visibleComponents.has(r)){e._visibleComponents.delete(r);o=!0}o&&r.forceUpdate()}}))};this._options=t;null!=window.IntersectionObserver&&(this._observer=new window.IntersectionObserver(this._handleEntries,t))}var e=t.prototype;e.isVisible=function(t){return null==this._observer||this._visibleComponents.has(t)};e.observe=function(t){var e=this._observer;if(null!=e){this.unobserve(t);var i=(0,n.findDOMNode)(t);if(i instanceof HTMLElement){this._nodes.set(i,t);this._components.set(t,i);e.observe(i)}}};e.unobserve=function(t){var e=this._observer;if(null!=e){var i=this._components.get(t);if(null!=i){this._nodes.delete(i);this._components.delete(t);this._visibleComponents.delete(t);e.unobserve(i)}}};return t}();e.default=o},2405:function(t,e){!function(t,e){"use strict"
;if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var i=[];r.prototype.THROTTLE_TIMEOUT=100;r.prototype.POLL_INTERVAL=null;r.prototype.USE_MUTATION_OBSERVER=!0;r.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance();this._observationTargets.push({element:t,entry:null});this._monitorIntersections();this._checkForIntersections()}};r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t}));if(!this._observationTargets.length){this._unmonitorIntersections();this._unregisterInstance()}};r.prototype.disconnect=function(){
this._observationTargets=[];this._unmonitorIntersections();this._unregisterInstance()};r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();this._queuedEntries=[];return t};r.prototype._initThresholds=function(t){var e=t||[0];Array.isArray(e)||(e=[e]);return e.sort().filter((function(t,e,i){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==i[e-1]}))};r.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));e[1]=e[1]||e[0];e[2]=e[2]||e[0];e[3]=e[3]||e[1];return e};r.prototype._monitorIntersections=function(){if(!this._monitoringIntersections){this._monitoringIntersections=!0;if(this.POLL_INTERVAL)this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL);else{
o(t,"resize",this._checkForIntersections,!0);o(e,"scroll",this._checkForIntersections,!0);if(this.USE_MUTATION_OBSERVER&&"MutationObserver"in t){this._domObserver=new MutationObserver(this._checkForIntersections);this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}}}};r.prototype._unmonitorIntersections=function(){if(this._monitoringIntersections){this._monitoringIntersections=!1;clearInterval(this._monitoringInterval);this._monitoringInterval=null;s(t,"resize",this._checkForIntersections,!0);s(e,"scroll",this._checkForIntersections,!0);if(this._domObserver){this._domObserver.disconnect();this._domObserver=null}}};r.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),i=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(r){var o=r.element,s=h(o),c=this._rootContainsTarget(o),u=r.entry,a=e&&c&&this._computeTargetAndRootIntersection(o,i),l=r.entry=new n({
time:t.performance&&performance.now&&performance.now(),target:o,boundingClientRect:s,rootBounds:i,intersectionRect:a});u?e&&c?this._hasCrossedThreshold(u,l)&&this._queuedEntries.push(l):u&&u.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this);this._queuedEntries.length&&this._callback(this.takeRecords(),this)};r.prototype._computeTargetAndRootIntersection=function(i,n){if("none"!=t.getComputedStyle(i).display){for(var r,o,s,c,a,l,p,f,d=h(i),v=u(i),_=!1;!_;){var b=null,g=1==v.nodeType?t.getComputedStyle(v):{};if("none"==g.display)return;if(v==this.root||v==e){_=!0;b=n}else v!=e.body&&v!=e.documentElement&&"visible"!=g.overflow&&(b=h(v));if(b&&!(d=(r=b,o=d,s=void 0,c=void 0,a=void 0,l=void 0,p=void 0,f=void 0,s=Math.max(r.top,o.top),c=Math.min(r.bottom,o.bottom),a=Math.max(r.left,o.left),l=Math.min(r.right,o.right),f=c-s,(p=l-a)>=0&&f>=0&&{top:s,bottom:c,left:a,right:l,width:p,height:f})))break;v=u(v)}return d}};r.prototype._getRootRect=function(){var t
;if(this.root)t=h(this.root);else{var i=e.documentElement,n=e.body;t={top:0,left:0,right:i.clientWidth||n.clientWidth,width:i.clientWidth||n.clientWidth,bottom:i.clientHeight||n.clientHeight,height:i.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)};r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,i){return"px"==e.unit?e.value:e.value*(i%2?t.width:t.height)/100})),i={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};i.width=i.right-i.left;i.height=i.bottom-i.top;return i};r.prototype._hasCrossedThreshold=function(t,e){var i=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(i!==n)for(var r=0;r<this.thresholds.length;r++){var o=this.thresholds[r];if(o==i||o==n||o<i!=o<n)return!0}};r.prototype._rootIsInDom=function(){return!this.root||c(e,this.root)};r.prototype._rootContainsTarget=function(t){return c(this.root||e,t)};r.prototype._registerInstance=function(){
i.indexOf(this)<0&&i.push(this)};r.prototype._unregisterInstance=function(){var t=i.indexOf(this);-1!=t&&i.splice(t,1)};t.IntersectionObserver=r;t.IntersectionObserverEntry=n}function n(t){this.time=t.time;this.target=t.target;this.rootBounds=t.rootBounds;this.boundingClientRect=t.boundingClientRect;this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0};this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,i=e.width*e.height,n=this.intersectionRect,r=n.width*n.height;this.intersectionRatio=i?r/i:this.isIntersecting?1:0}function r(t,e){var i,n,r,o=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(o.root&&1!=o.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(i=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){i();r=null}),n))});this._callback=t;this._observationTargets=[];this._queuedEntries=[]
;this._rootMarginValues=this._parseRootMargin(o.rootMargin);this.thresholds=this._initThresholds(o.threshold);this.root=o.root||null;this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function o(t,e,i,n){"function"==typeof t.addEventListener?t.addEventListener(e,i,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,i)}function s(t,e,i,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,i,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,i)}function h(t){var e;try{e=t.getBoundingClientRect()}catch(t){}if(!e)return{top:0,bottom:0,left:0,right:0,width:0,height:0};e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top});return e}function c(t,e){for(var i=e;i;){if(i==t)return!0;i=u(i)}return!1}function u(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document)},2406:function(t,e,i){"use strict"
;Object.defineProperty(e,"__esModule",{value:!0});e.default=void 0;var n=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var i=h(e);if(i&&i.has(t))return i.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var s=r?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=t[o]}n.default=t;i&&i.set(t,n);return n}(i(1)),r=s(i(464)),o=s(i(2270));function s(t){return t&&t.__esModule?t:{default:t}}function h(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(h=function(t){return t?i:e})(t)}function c(t,e){c=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return c(t,e)}var u=r.default.v4(),a=new Map,l=new Map,p=function(t){!function(t,e){t.prototype=Object.create(e.prototype);t.prototype.constructor=t;c(t,e)}(e,t);function e(e){var i
;(i=t.call(this,e)||this).isVisible=!1;var n=e.root,s=e.rootMargin,h=e.threshold;n?a.has(n)?i.elementId=a.get(n)||"":a.set(n,r.default.v4()):i.elementId=u;var c=i.getVisibilityObserverId();l.has(c)||l.set(c,new o.default({root:n,rootMargin:s,threshold:h}));return i}var i=e.prototype;i.componentDidMount=function(){if(this.props.active){var t=this.getVisibilityObserver();t.observe(this);this.isVisible=t.isVisible(this)}};i.componentDidUpdate=function(t){var e=this.getVisibilityObserver(),i=e.isVisible(this);this.props.active&&i!==this.isVisible&&this.props.onChange(i);!t.active&&this.props.active?e.observe(this):t.active&&!this.props.active&&e.unobserve(this);this.isVisible=i};i.componentWillUnmount=function(){this.getVisibilityObserver().unobserve(this)};i.getVisibilityObserverId=function(){var t=this.props,e=t.rootMargin,i=t.threshold;return this.elementId+" "+e+" "+i};i.getVisibilityObserver=function(){var t=this.getVisibilityObserverId(),e=l.get(t)
;if(!e)throw new Error("Visibility sensor with id "+t+" not found.");return e};i.render=function(){return n.Children.only(this.props.children)};return e}(n.Component);p.displayName="VisibilitySensor";p.defaultProps={active:!0,children:n.createElement("span"),root:null,rootMargin:"0px 0px 0px 0px",threshold:[0,Number.MIN_VALUE]};var f=p;e.default=f}}]);
//# sourceMappingURL=f10356a94a9ff71c95e2.js.map