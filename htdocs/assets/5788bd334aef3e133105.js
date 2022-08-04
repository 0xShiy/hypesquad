(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[35],{1836:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getClass=void 0;var a=r(1888).getClass;t.getClass=a},1888:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getClass=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];var l=n.reduce((function(e,t){return e+(0,a.upperCaseFirstChar)(t)}),""),u=""+t+l,f=e[u];if(null==f){0;return""}return f};var a=r(1901)},1901:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.cssValueToNumber=function(e){var t=parseInt(e,10);return isNaN(t)?0:t};t.getAcronym=function(e){return null!=e?e.replace(/'s /g," ").replace(/\w+/g,(function(e){return e[0]})).replace(/\s/g,""):""};t.stripDiacritics=void 0;t.upperCaseFirstChar=function(e){if(null==e)return"";return""+e.charAt(0).toUpperCase()+e.slice(1)};var a=/[\u0300-\u036f]/g
;var n=null==String.prototype.normalize?function(e){return e}:function(e){return e.normalize("NFD").replace(a,"").normalize("NFC")};t.stripDiacritics=n},1908:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var a;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e;r&&r.set(e,a)}(r(1));function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}function o(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={
children:void 0}),1===l)t.children=n;else if(l>1){for(var u=new Array(l),f=0;f<l;f++)u[f]=arguments[f+3];t.children=u}if(t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}t.default=function(e){var t=e.width,r=void 0===t?32:t,a=e.height,n=void 0===a?32:a,l=e.color,u=void 0===l?"currentColor":l;return o("svg",{width:r,height:n,viewBox:"0 0 32 32",fill:"none",className:e.className},void 0,o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z",fill:u,className:e.foreground}))}},2316:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){
switch(e){case o.default.WINDOWS:return n.Images.REFRESH_DOWNLOAD_WINDOWS;case o.default.MAC:return n.Images.REFRESH_DOWNLOAD_MAC;case o.default.ANDROID:return n.Images.REFRESH_DOWNLOAD_ANDROID;case o.default.IOS:return n.Images.REFRESH_DOWNLOAD_IOS;default:return n.Images.REFRESH_DOWNLOAD_LINUX}};var a,n=r(82),o=(a=r(52))&&a.__esModule?a:{default:a}},3037:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=_;O(r(1));var a,n=r(23),o=m(r(52)),l=r(108),u=r(166),f=O(r(51)),i=m(r(468)),d=m(r(169)),s=O(r(448)),c=m(r(2316)),p=m(r(16)),v=m(r(1785));function m(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=n?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e;r&&r.set(e,a);return a}function D(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=n;else if(l>1){for(var u=new Array(l),f=0;f<l;f++)u[f]=arguments[f+3];t.children=u}if(t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function _(){var e=(0,n.useStateFromStores)([o.default],(function(){return o.default.platform})),t=(0,i.default)(e,!1);return D(l.Grid,{className:v.default.outerContainer},void 0,D(s.default,{colorScheme:s.HeaderColorSchemes.WHITE}),D(l.Row,{className:v.default.container},void 0,D("div",{className:v.default.body},void 0,D("div",{
className:v.default.text},void 0,D(u.H1,{},void 0,p.default.Messages.Download.HERO_TITLE),D(f.default,{className:v.default.subtitle,type:f.TextTypes.LARGE},void 0,p.default.Messages.Download.HERO_SUBTITLE)),D("div",{className:v.default.buttonContainer},void 0,D(d.default,{className:v.default.downloadButton,analyticsLocation:"Downloads Page"}),D(f.default,{className:v.default.infoText,type:f.TextTypes.SMALL},void 0,t.main.info))),D("div",{className:v.default.imageContainer},void 0,D("img",{className:v.default.image,src:(0,c.default)(e),alt:""}))))}_.displayName="Hero"},3038:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=L;var a,n=N(r(1)),o=g(r(19)),l=r(23),u=g(r(52)),f=r(64),i=r(108),d=r(166),s=g(r(51)),c=r(1836),p=g(r(1908)),v=N(r(468)),m=g(r(483)),y=g(r(482)),O=g(r(2316)),D=g(r(16)),_=g(r(1786));function g(e){return e&&e.__esModule?e:{default:e}}function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap
;return(w=function(e){return e?r:t})(e)}function N(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=w(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=n?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e;r&&r.set(e,a);return a}function b(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=n;else if(l>1){for(var u=new Array(l),f=0;f<l;f++)u[f]=arguments[f+3];t.children=u}if(t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}
var h="Download Page",M=[u.default.IOS,u.default.ANDROID,u.default.LINUX,u.default.WINDOWS,u.default.MAC];function S(e){return n.useMemo((function(){return M.filter((function(t){return t!==e}))}),[e])}function C(e){switch(e){case u.default.WINDOWS:return D.default.Messages.Download.WINDOWS;case u.default.MAC:return D.default.Messages.Download.MAC;case u.default.LINUX:return D.default.Messages.Download.LINUX;case u.default.ANDROID:return D.default.Messages.Download.ANDROID;case u.default.IOS:return D.default.Messages.Download.IOS;default:return"unknown FIXME"}}function I(e,t){var r=(0,v.getAppDetails)(e,t,!0);return r.main.hasPTBText?null==r.formats?[{key:t,name:C(t),link:r.url,onClick:function(){return(0,m.default)(t,!0,h,r.url,!1)}}]:r.formats.map((function(e){var r=u.default.getDownloadLink(t,!0,e.value);return{key:""+t+e.label,name:C(t)+" "+e.label,link:r,onClick:function(){return(0,m.default)(t,!0,h,r,!1)}}})):[]}function P(e){var t,r=e.className,a=e.platform,n=(0,v.default)(a)
;if(null!=n.formats){var l=n.formats.map((function(e){var t=u.default.getDownloadLink(a,!1,e.value);return{key:e.value,name:e.value,link:t,onClick:function(){return(0,m.default)(a,!1,h,t,!1)}}}));t=b(y.default,{className:_.default.platformButton,items:l,color:f.ButtonColors.DARK,navId:a+"-dropdown"},void 0,D.default.Messages.Download.DOWNLOAD,b(p.default,{className:_.default.dropdownArrow,width:24,height:24}))}else t=b(f.LinkButton,{className:_.default.platformButton,color:f.ButtonColors.DARK,href:n.url,onClick:function(){return(0,m.default)(a,!1,h,n.url,!1)},alt:n.other.header},void 0,D.default.Messages.Download.DOWNLOAD);return b("div",{className:(0,o.default)(_.default.card,r)},void 0,b("div",{className:_.default.cardTextContainer},void 0,b(d.H3,{className:_.default.platformName},void 0,C(a)),t),b("img",{className:_.default.platformImage,src:(0,O.default)(a),alt:""}))}P.displayName="PlatformCard";function A(e){var t=e.current,r=S(t),a=(0,
l.useStateFromStores)([u.default],(function(){return function(e,t,r){var a=I(e,t);r.forEach((function(t){a=a.concat(I(e,t))}));return a}(u.default,t,r)}),[t,r]);return b("div",{className:_.default.ptbCard,id:"ptb-card"},void 0,b(d.H3,{},void 0,D.default.Messages.Download.PUBLIC_TEST_BUILD_TITLE),b(s.default,{className:_.default.ptbSubtitle},void 0,D.default.Messages.Download.PUBLIC_TEST_BUILD_SUBTITLE),b(y.default,{color:f.ButtonColors.DARK,items:a,navId:"ptb-dropdown"},void 0,D.default.Messages.Download.PUBLIC_TEST_BUILD_DOWNLOAD,b(p.default,{className:_.default.dropdownArrow,width:24,height:24})))}A.displayName="PTBCard";function L(){var e=(0,l.useStateFromStores)([u.default],(function(){return u.default.platform})),t=S(e);return b(i.Grid,{className:_.default.container},void 0,b(i.Row,{},void 0,b("div",{className:_.default.cardContainer},void 0,t.map((function(e,t){return b(P,{className:(0,c.getClass)(_.default,"card"+t),platform:e},e)})),b(A,{current:e}))))}
L.displayName="OtherPlatforms"},515:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=_;var a,n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=n?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e;r&&r.set(e,a);return a}(r(1)),o=p(r(446)),l=r(82),u=r(167),f=p(r(449)),i=p(r(447)),d=p(r(3037)),s=p(r(3038)),c=p(r(16));function p(e){return e&&e.__esModule?e:{default:e}}function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function m(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3
;if(t||0===l||(t={children:void 0}),1===l)t.children=n;else if(l>1){for(var u=new Array(l),f=0;f<l;f++)u[f]=arguments[f+3];t.children=u}if(t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var y=m(d.default,{}),O=m(s.default,{}),D=m(f.default,{});function _(){return m(i.default,{},void 0,n.createElement(o.default,(0,u.getMetadataRefresh)(c.default.Messages.Download,l.ImageMetaData.DOWNLOAD)),y,O,D)}_.displayName="Download"}}]);
//# sourceMappingURL=5788bd334aef3e133105.js.map