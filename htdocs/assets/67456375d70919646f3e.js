"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[19402],{415688:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.trustDomain=function(e){o.default.dispatch({type:u.ActionTypes.MASKED_LINK_ADD_TRUSTED_DOMAIN,url:e})};t.trustProtocol=function(e){o.default.dispatch({type:u.ActionTypes.MASKED_LINK_ADD_TRUSTED_PROTOCOL,url:e})};var n,o=(n=r(636602))&&n.__esModule?n:{default:n},u=r(770348)},883129:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n
}(r(667294)),o=i(r(120053)),u=i(r(151097)),a=r(262710),l=["onClick","trusted","title","href","children"];function i(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function d(){d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return d.apply(this,arguments)}function s(e,t){s=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return s(e,t)}var c=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;s(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){return(0,a.handleClick)(t.props,e)};return t}t.prototype.render=function(){var e=this.props,t=(e.onClick,e.trusted,
e.title),r=void 0===t?null:t,a=e.href,i=e.children,f=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++){r=u[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,l),s=o.default.sanitizeUrl(a);return n.createElement(u.default,d({},f,{title:r,target:"_blank",rel:"noreferrer noopener",href:s,onClick:this.handleClick}),null!=i?i:r)};return t}(n.PureComponent);t.default=c;c.displayName="MaskedLink"},136399:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=r(194322);function u(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function a(){a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return a.apply(this,arguments)}function l(e,t,r,n,o,u,a){try{var l=e[u](a),i=l.value}catch(e){r(e);return}l.done?t(i):Promise.resolve(i).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){l(u,n,o,a,i,"next",e)}function i(e){l(u,n,o,a,i,"throw",e)}a(void 0)}))}}var f={show:function(e){(0,o.openModalLazy)(i(regeneratorRuntime.mark((function t(){var o,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=2;return Promise.all([r.e(40532),r.e(21380)]).then(r.bind(r,121380));case 2:o=t.sent;u=o.default;return t.abrupt("return",(function(t){return n.createElement(u,a({},t,{domain:e}))}))
;case 5:case"end":return t.stop()}}),t)}))))}};t.default=f},9711:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o=d(r(181757)),u=d(r(536211)),a=d(r(636602)),l=r(167728),i=d(r(308920)),f=r(770348);function d(e){return e&&e.__esModule?e:{default:e}}function s(e,t){s=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return s(e,t)}var c=[],p=new Set,v=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;s(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.initialize=function(e){void 0===e&&(e=c);p=new Set(e)};r.getUserAgnosticState=function(){return Array.from(p)};r.isBlockedDomain=function(e){var t=(0,l.getHostname)(e),r=new o.default.hash.sha256,n=o.default.codec.hex.fromBits(r.update(t).finalize()),u="";p.has(n)&&(u=t);for(var a=t.indexOf(".");-1!==a&&""===u;){t=t.substring(a+1);r.reset();n=o.default.codec.hex.fromBits(r.update(t).finalize());p.has(n)&&(u=t)
;a=t.indexOf(".")}if(""!==u){i.default.track(f.AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED,{blocked_domain:u});return u}return null};return t}(u.default.OfflineCacheStore);v.persistKey="BlockedDomainStore";var y=new v(a.default,((n={})[f.ActionTypes.BLOCKED_DOMAIN_LIST_FETCHED]=function(e){var t=e.list;p=new Set(t)},n));t.default=y},818753:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,r){if(null==e||null==t)return{valid:!1,reason:a.default.Messages.BUILD_OVERRIDE_INVALID};var l=e.releaseChannel,i=e.expiresAt,f=e.validForUserIds,d=e.allowedVersions,s=e.targetBuildOverride,c=Object.keys(s);if(0===n.default.intersection(c,t).length)return{valid:!1,reason:a.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_TARGETS.format({requestedTargets:t.join(", ")})};if(null!=l&&l!==window.GLOBAL_ENV.RELEASE_CHANNEL){var p=l===u.PublicReleaseChannels.PTB?l.toUpperCase():""+l.charAt(0).toUpperCase()+l.slice(1);return{valid:!1,
reason:a.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({releaseChannel:p})}}if(null!=d&&(null==r||!d.includes(r)))return{valid:!1,reason:a.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({releaseChannel:d.join(", ")})};var v=null!=i?new Date(i).getTime():null;if(null!=v&&v<Date.now())return{valid:!1,reason:a.default.Messages.BUILD_OVERRIDE_EXPIRED};if(f.length>0&&!f.includes(o.default.getId()))return{valid:!1,reason:a.default.Messages.BUILD_OVERRIDE_INVALID_USER};return{valid:!0}};var n=l(r(496486)),o=l(r(423046)),u=r(770348),a=l(r(247001));function l(e){return e&&e.__esModule?e:{default:e}}},173208:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.CopyLink=E;t.default=void 0;var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=M(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),u=g(r(294184)),a=g(r(441143)),l=g(r(151097)),i=g(r(956117)),f=g(r(16941)),d=g(r(700113)),s=g(r(468497)),c=g(r(178294)),p=g(r(971639)),v=g(r(776360)),y=g(r(550270)),O=r(179495),_=g(r(818753)),b=r(770348),h=g(r(247001)),m=g(r(167868));function g(e){return e&&e.__esModule?e:{default:e}}function M(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(M=function(e){return e?r:t})(e)}function C(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var l=new Array(a),i=0;i<a;i++)l[i]=arguments[i+3];t.children=l}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{
$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,u=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(t&&u.length===t)break}}catch(e){l=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length)
;for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=["discord_web"];function E(e){var t=e.url,r=w(o.useState(!1),2),n=r[0],a=r[1],l=o.useRef(void 0),i=o.useCallback((function(){if(!n){(0,O.copy)(t)&&a(!0);l.current=setTimeout((function(){return a(!1)}),2e3)}}),[t,n]);o.useEffect((function(){return function(){return clearTimeout(l.current)}}),[]);return O.SUPPORTS_COPY?C(f.default,{className:(0,u.default)(m.default.copyLink,n?m.default.copied:null),onClick:i},void 0,C(s.default,{className:m.default.copyLinkIcon}),n?h.default.Messages.BUILD_OVERRIDE_LINK_COPIED:h.default.Messages.BUILD_OVERRIDE_LINK_COPY):null}function L(){return C(o.Fragment,{},void 0,C("div",{className:m.default.buildInfo},void 0,C("div",{className:(0,u.default)(m.default.barLoader,m.default.barTitle)}),C("div",{className:m.default.barLoader})),C("div",{className:m.default.buttonLoader}))}L.displayName="renderLoading";function I(e){
var t=e.subHead,r=e.buildDetails,n=e.buttonColor,a=e.buttonClick,l=e.buttonText,f=e.disabled,d=void 0!==f&&f,s=e.submitting,c=void 0!==s&&s;return C(o.Fragment,{},void 0,C("div",{className:m.default.buildInfo},void 0,C(v.default,{size:v.default.Sizes.SIZE_14,className:m.default.subHead},void 0,t),C("div",{className:m.default.buildDetails},void 0,r)),C(i.default,{submitting:c,color:n,onClick:a,className:(0,u.default)(m.default.button,d?m.default.disabledButtonOverride:null),size:m.default.buttonSize,disabled:d},void 0,l))}I.displayName="renderContent";function S(e){var t,r=e.currentOverrides,n=e.linkMeta,o=e.applyBuildOverride,u=e.clearBuildOverride,l=e.submitting,f=(0,_.default)(n,P);if(!f.valid)return t=f.reason,I({subHead:h.default.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,buttonColor:i.default.Colors.TRANSPARENT,buttonText:"Invalid",buildDetails:t,disabled:!0});(0,a.default)(null!=n,"BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved")
;var d,s,c,p=n.targetBuildOverride.discord_web;(0,a.default)(null!=p,"BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web should never be null if resolved");if(function(e,t){return null!=t&&null!=t.discord_web&&e.id===t.discord_web.id&&e.type===t.discord_web.type}(p,r)){s=h.default.Messages.BUILD_OVERRIDE_CLEAR;d=u;c=i.default.Colors.RED}else{s=h.default.Messages.BUILD_OVERRIDE_APPLY;d=o;c=i.default.Colors.GREEN}return I({subHead:h.default.Messages.BUILD_OVERRIDE_ID,buildDetails:p.id,buttonClick:d,buttonText:s,buttonColor:c,submitting:l})}function k(e,t,r){return C(v.default,{size:p.default.Sizes.SIZE_12,className:m.default.titleRegion},void 0,C("strong",{className:m.default.title},void 0,null!=e&&null!=e.releaseChannel?h.default.Messages.BUILD_OVERRIDE_FOR.format({releaseChannel:e.releaseChannel}):h.default.Messages.BUILD_OVERRIDE),C(l.default,{className:m.default.infoLink,href:y.default.getArticleURL(b.HelpdeskArticles.BUILD_OVERRIDE_EMBED),target:"_blank"
},void 0,C(d.default,{className:m.default.infoIcon})),r?null:C(E,{url:t}))}k.displayName="renderTitle";var j=function(e){var t=e.loading,r=void 0!==t&&t,n=e.currentOverrides,u=e.linkMeta,a=e.url,l=e.applyBuildOverride,i=e.clearBuildOverride,f=w(o.useState(!1),2),d=f[0],s=f[1],p=o.useCallback((function(){if(!d){s(!0);l().catch((function(){return s(!1)}))}}),[l,d]),v=o.useCallback((function(){if(!d){s(!0);i().catch((function(){return s(!1)}))}}),[i,d]);return C("div",{className:m.default.wrapper},void 0,k(u,a,r),C("div",{className:m.default.content},void 0,C(c.default,{className:m.default.icon}),r?L():S({currentOverrides:n,linkMeta:u,applyBuildOverride:p,clearBuildOverride:v,submitting:d})))};j.displayName="BuildOverrideEmbed";var T=j;t.default=T},193957:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o,u=s(r(667294)),a=r(536211),l=r(713746),i=s(r(77146)),f=(n=r(173208))&&n.__esModule?n:{default:n};function d(e){if("function"!=typeof WeakMap)return null
;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}function c(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var l=new Array(a),i=0;i<a;i++)l[i]=arguments[i+3];t.children=l}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function p(e,t,r,n,o,u,a){try{var l=e[u](a),i=l.value
}catch(e){r(e);return}l.done?t(i):Promise.resolve(i).then(n,o)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){p(u,n,o,a,l,"next",e)}function l(e){p(u,n,o,a,l,"throw",e)}a(void 0)}))}}function y(){return(y=v(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return(0,l.applyPublicBuildOverride)(t);case 2:if(200===e.sent.status){e.next=5;break}throw new Error("Build override couldn't apply");case 5:window.location.reload(!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return _.apply(this,arguments)}function _(){return(_=v(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return(0,l.clearBuildOverride)();case 2:window.location.reload(!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=u.memo((function(e){
var t=e.url,r=(0,a.useStateFromStoresObject)([i.default],(function(){return i.default.getCurrentBuildOverride()})),n=(0,a.useStateFromStores)([i.default],(function(){return i.default.getBuildOverride(t)})),o=n.payload,l=n.validatedURL,d=r.state===i.State.Resolving||n.state===i.State.Resolving,s=u.useCallback((function(){return null!=o?function(e){return y.apply(this,arguments)}(o):Promise.reject(new Error("Invalid override payload"))}),[o]);return null!=l?c(f.default,{loading:d,linkMeta:n.override,currentOverrides:r.overrides,applyBuildOverride:s,clearBuildOverride:O,url:l}):null}));t.default=b},17268:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.isLinkTrusted=function(e){return null!=e.target&&(0,o.isLinkTrusted)(e.target,e.title||(0,n.astToString)(e.content))};var n=r(225887),o=r(262710)},219402:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return{react:function(t,r,n){if(e.enableBuildOverrides&&(0,
l.isBuildOverrideLink)(t.target))return p(o.Fragment,{},n.key,p(i.default,{url:t.target},t.target));var s=r(t.content,n),c=t.title||(0,u.astToString)(t.content),v=(null==e?void 0:e.mustConfirmExternalLink)?function(e){null==e||e.stopPropagation();null==e||e.preventDefault();(0,f.handleClick)({href:t.target,shouldConfirm:!0});return null}:void 0;return p(a.default,{title:c,href:t.target,trusted:function(){return(0,d.isLinkTrusted)(t)},onClick:v},n.key,s)}}};var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n
}(r(667294)),u=r(225887),a=s(r(883129)),l=r(224179),i=s(r(193957)),f=r(262710),d=r(17268);function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function p(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var l=new Array(a),i=0;i<a;i++)l[i]=arguments[i+3];t.children=l}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}},403334:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o=s(r(536211)),u=s(r(972247)),a=s(r(636602)),l=s(r(608417)),i=r(167728),f=r(770348),d=r(673810);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){c=Object.setPrototypeOf||function(e,t){
e.__proto__=t;return e};return c(e,t)}var p="MaskedLinkStore",v=new Set,y=new Set;function O(e){var t=(0,i.getHostname)(e);switch(t){case window.GLOBAL_ENV.CDN_HOST:case window.GLOBAL_ENV.INVITE_HOST:case window.GLOBAL_ENV.GIFT_CODE_HOST:case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:case location.hostname:return!0;default:return d.SPOTIFY_HOSTNAMES.includes(t)||l.default.isDiscordHostname(t)||v.has(t)}}function _(e){var t=(0,i.getProtocol)(e);return y.has(t)}var b=new(function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;c(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.initialize=function(){var e,t=null!==(e=u.default.get(p))&&void 0!==e?e:{};if(Array.isArray(t)){v=new Set(null!=t?Array.from(t):null);y=new Set}else{var r=t.trustedDomains,n=t.trustedProtocols;v=new Set(null!=r?Array.from(r):null);y=new Set(null!=n?Array.from(n):null)}};r.isTrustedDomain=function(e){return O(e)};r.isTrustedProtocol=function(e){
return _(e)};return t}(o.default.Store))(a.default,((n={})[f.ActionTypes.MASKED_LINK_ADD_TRUSTED_DOMAIN]=function(e){var t=e.url;if(O(t))return!1;v.add((0,i.getHostname)(t));u.default.set(p,{trustedDomains:v,trustedProtocols:y})},n[f.ActionTypes.MASKED_LINK_ADD_TRUSTED_PROTOCOL]=function(e){var t=e.url;if(_(t))return!1;y.add((0,i.getProtocol)(t));u.default.set(p,{trustedDomains:v,trustedProtocols:y})},n));t.default=b},167728:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.getHostname=function(e){var t=document.createElement("a");t.href=e;return t.hostname};t.getProtocol=function(e){var t=document.createElement("a");t.href=e;return t.protocol}},700113:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=s;var n,o,u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),a=(n=r(468205))&&n.__esModule?n:{default:n},l=["width","height","color","foreground"];function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function f(){f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return f.apply(this,arguments)}function d(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var l=new Array(a),i=0;i<a;i++)l[i]=arguments[i+3];t.children=l}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{})
;return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function s(e){var t=e.width,r=void 0===t?16:t,n=e.height,o=void 0===n?16:n,i=e.color,s=void 0===i?"currentColor":i,c=e.foreground,p=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++){r=u[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,l);return u.createElement("svg",f({},(0,a.default)(p),{width:r,height:o,viewBox:"0 0 12 12"}),d("path",{fill:s,className:c,d:"M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"}))}s.displayName="InfoFilled"},178294:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o,u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),a=(n=r(26868))&&n.__esModule?n:{default:n};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function i(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var l=new Array(a),i=0;i<a;i++)l[i]=arguments[i+3];t.children=l}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var f=u.memo((function(e){return i("svg",{width:"57",height:"40",viewBox:"0 0 57 40",fill:"none",className:e.className},void 0,i("path",{
d:"M49.4949 36H3.9596C1.78182 36 0 34.2486 0 32.1081V3.89189C0 1.75135 1.78182 0 3.9596 0H49.4949C51.6727 0 53.4545 1.75135 53.4545 3.89189V32.1081C53.4545 34.2486 51.6727 36 49.4949 36Z",className:a.default.svgContentRight}),i("path",{
d:"M44.5456 10.8889H25.7375C24.6486 10.8889 23.7577 9.99798 23.7577 8.90909C23.7577 7.8202 24.6486 6.92929 25.7375 6.92929H44.5456C45.6345 6.92929 46.5254 7.8202 46.5254 8.90909C46.5254 9.99798 45.6345 10.8889 44.5456 10.8889ZM19.7981 10.8889C18.7092 10.8889 17.8183 9.99798 17.8183 8.90909C17.8183 7.8202 18.7092 6.92929 19.7981 6.92929C20.887 6.92929 21.7779 7.8202 21.7779 8.90909C21.7779 9.99798 20.887 10.8889 19.7981 10.8889ZM44.5456 19.798H25.7375C24.6486 19.798 23.7577 18.9071 23.7577 17.8182C23.7577 16.7293 24.6486 15.8384 25.7375 15.8384H44.5456C45.6345 15.8384 46.5254 16.7293 46.5254 17.8182C46.5254 18.9071 45.6345 19.798 44.5456 19.798ZM19.7981 19.798C18.7092 19.798 17.8183 18.9071 17.8183 17.8182C17.8183 16.7293 18.7092 15.8384 19.7981 15.8384C20.887 15.8384 21.7779 16.7293 21.7779 17.8182C21.7779 18.9071 20.887 19.798 19.7981 19.798ZM31.6365 28.7071H25.7375C24.6486 28.7071 23.7577 27.8162 23.7577 26.7273C23.7577 25.6384 24.6486 24.7475 25.7375 24.7475H31.6365C32.7254 24.7475 33.6163 25.6384 33.6163 26.7273C33.6163 27.8162 32.7254 28.7071 31.6365 28.7071ZM19.7981 28.7071C18.7092 28.7071 17.8183 27.8162 17.8183 26.7273C17.8183 25.6384 18.7092 24.7475 19.7981 24.7475C20.887 24.7475 21.7779 25.6384 21.7779 26.7273C21.7779 27.8162 20.887 28.7071 19.7981 28.7071Z",
className:a.default.svgContentLines}),i("path",{d:"M3.9596 36H13.8586V0H3.9596C1.78182 0 0 1.78182 0 3.9596V32.0404C0 34.2182 1.78182 36 3.9596 36Z",className:a.default.svgContentLeft}),i("path",{d:"M6.9293 10.8889C5.24647 10.8889 3.9596 9.60202 3.9596 7.91919C3.9596 6.23636 5.24647 4.94949 6.9293 4.94949C8.61212 4.94949 9.89899 6.23636 9.89899 7.91919C9.89899 9.60202 8.61212 10.8889 6.9293 10.8889ZM6.9293 20.7879C5.24647 20.7879 3.9596 19.501 3.9596 17.8182C3.9596 16.1354 5.24647 14.8485 6.9293 14.8485C8.61212 14.8485 9.89899 16.1354 9.89899 17.8182C9.89899 19.501 8.61212 20.7879 6.9293 20.7879ZM6.9293 30.6869C5.24647 30.6869 3.9596 29.4 3.9596 27.7172C3.9596 26.0343 5.24647 24.7475 6.9293 24.7475C8.61212 24.7475 9.89899 26.0343 9.89899 27.7172C9.89899 29.4 8.61212 30.6869 6.9293 30.6869Z",className:a.default.svgDots}),i("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41.4328 33L46 37.7129L43.7836 40L37 32.9999L39.2164 30.7128L39.2165 30.7129L43.7836 26L46 28.2871L41.4328 33Z",
className:a.default.svgTag}),i("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M54.7821 35.2871L54.7841 35.2892L57 33.0021L50.2159 26L48 28.2871L52.5662 33L48 37.7129L50.2159 40L54.7821 35.2871Z",className:a.default.svgTag}))}));t.default=f},262710:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.handleClick=function(e,t){var r=e.trusted,c=e.onClick,y=e.onConfirm,O=e.shouldConfirm,_=n.default.sanitizeUrl(e.href);if(null==_){null!=t&&t.preventDefault();return}if(null!=c){if(c(t))return}else{var h=(0,a.getOnClick)(_);if(null!=h&&h(t))return}var m=function(){null==y?(0,a.openURL)(_):y()},g=i.default.isBlockedDomain(_);if(null!==g){null==t||t.preventDefault();l.default.show(g);return}if(null!=(0,s.isSuspiciousDownload)(_)){null==t||t.preventDefault();d.default.show(_);return}var M="function"==typeof r?r():r,C=(0,v.getProtocol)(_),w=!("http:"===C||"https:"===C);if(!w&&(M||p.default.isTrustedDomain(_))||w&&p.default.isTrustedProtocol(_)){(null==t||null!=O&&O)&&m();return}
null!=t&&t.preventDefault();if(w)o.default.show({title:b.default.Messages.HOLD_UP,body:b.default.Messages.MASKED_PROTOCOL_LINK_BODY.format({url:_}),cancelText:b.default.Messages.MASKED_LINK_CANCEL,confirmText:b.default.Messages.MASKED_LINK_CONFIRM,onConfirm:m,minorText:b.default.Messages.MASKED_LINK_TRUST_THIS_PROTOCOL,onConfirmSecondary:function(){(0,u.trustProtocol)(_);m()}});else{var D=(0,f.punycodeLink)(_);o.default.show({title:b.default.Messages.HOLD_UP,body:b.default.Messages.MASKED_LINK_BODY.format({url:null!=D?D.displayTarget:_}),cancelText:b.default.Messages.MASKED_LINK_CANCEL,confirmText:b.default.Messages.MASKED_LINK_CONFIRM,onConfirm:m,minorText:b.default.Messages.MASKED_LINK_TRUST_THIS_DOMAIN,onConfirmSecondary:function(){(0,u.trustDomain)(_);m()}})}};t.isLinkTrusted=function(e,t){var r,n=c.default.getChannel(O.default.getChannelId());if(null!=n&&n.type===_.ChannelTypes.DM&&!y.default.isFriend(null!==(r=n.getRecipientId())&&void 0!==r?r:""))return!1;return e===t}
;var n=h(r(120053)),o=h(r(190040)),u=r(415688),a=r(342758),l=h(r(136399)),i=h(r(9711)),f=r(731201),d=h(r(650247)),s=r(433203),c=h(r(644263)),p=h(r(403334)),v=r(167728),y=h(r(290629)),O=h(r(211136)),_=r(770348),b=h(r(247001));function h(e){return e&&e.__esModule?e:{default:e}}},179495:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.SUPPORTS_COPY=void 0;t.copy=function(e){if(!i)return!1;if(u.isPlatformEmbedded){a.default.copy(e);return!0}return o.copy(e)};var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(722182)),u=r(864489),a=(n=r(922629))&&n.__esModule?n:{default:n}
;function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var i=function(){if(u.isPlatformEmbedded)return null!=a.default.copy;try{return document.queryCommandEnabled("copy")||document.queryCommandSupported("copy")}catch(e){return!1}}();t.SUPPORTS_COPY=i}}]);
//# sourceMappingURL=67456375d70919646f3e.js.map