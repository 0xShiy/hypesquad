"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[9640],{226800:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=p(n(118915)),o=p(n(972247)),i=p(n(636602)),a=p(n(516818)),l=p(n(308920)),u=n(692711),c=p(n(40856)),s=n(264720),d=n(770348),f=p(n(247001));function p(e){return e&&e.__esModule?e:{default:e}}function v(){v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return v.apply(this,arguments)}function _(e,t,n){void 0===t&&(t=null);i.default.dispatch(v({type:d.ActionTypes.USER_SETTINGS_MODAL_INIT,section:e,subsection:t},n))}var h={open:function(e,t,n){void 0===e&&(e=null);void 0===t&&(t=null);void 0===n&&(n={openWithoutBackstack:!1});_(e,t,n);(0,s.pushLayer)(d.Layers.USER_SETTINGS)},init:_,close:function(){var e=a.default.onClose;i.default.dispatch({type:d.ActionTypes.USER_SETTINGS_MODAL_CLOSE});null!=e&&e()
},setSection:function(e,t){void 0===t&&(t=null);i.default.dirtyDispatch({type:d.ActionTypes.USER_SETTINGS_MODAL_SET_SECTION,section:e,subsection:t})},updateAccount:function(e){i.default.dispatch({type:d.ActionTypes.USER_SETTINGS_MODAL_UPDATE_ACCOUNT,settings:e})},submitComplete:function(){i.default.dispatch({type:d.ActionTypes.USER_SETTINGS_MODAL_SUBMIT_COMPLETE})},reset:function(){i.default.dispatch({type:d.ActionTypes.USER_SETTINGS_MODAL_RESET})},saveAccountChanges:function(e,t){var n=this;i.default.dispatch({type:d.ActionTypes.USER_SETTINGS_MODAL_SUBMIT});var a=e.username,s=e.email,p=e.emailToken,_=e.password,h=e.avatar,y=e.newPassword,S=e.discriminator,E=t.close;return(0,c.default)({title:f.default.Messages.TWO_FA_CHANGE_ACCOUNT},(function(e){var t=v({username:a,email:s,email_token:p,password:_,avatar:h,new_password:y},e,{discriminator:S||void 0}),n=o.default.get(d.DEVICE_TOKEN);if(null!=d.DEVICE_PUSH_PROVIDER&&null!=n){t.push_provider=d.DEVICE_PUSH_PROVIDER;t.push_token=n}
var i=o.default.get(d.DEVICE_VOIP_TOKEN);if(null!=d.DEVICE_PUSH_VOIP_PROVIDER&&null!=i){t.push_voip_provider=d.DEVICE_PUSH_VOIP_PROVIDER;t.push_voip_token=i}return r.default.patch({url:d.Endpoints.ME,body:t,oldFormErrors:!0})}),{checkEnabled:!1,hooks:{onEarlyClose:function(){return i.default.dispatch({type:d.ActionTypes.USER_SETTINGS_MODAL_SUBMIT_FAILURE,errors:{}})}}}).then((function(e){var t=e.body,r=t.token;l.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED,{animated:(0,u.isAnimatedIconHash)(t.avatar)});delete t.token;i.default.dispatch({type:d.ActionTypes.UPDATE_TOKEN,token:r,userId:t.id});i.default.dispatch({type:d.ActionTypes.CURRENT_USER_UPDATE,user:t});E?n.close():n.submitComplete();return e}),(function(e){i.default.dispatch({type:d.ActionTypes.USER_SETTINGS_MODAL_SUBMIT_FAILURE,errors:e.body});return e}))}};t.default=h},834547:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.MAX_DAYS_AHEAD_AN_EVENT_CAN_START=void 0;t.areSchedulesIdentical=function(e,t){
if(null==e||null==t)return null==e&&null==t;if(!(null!=e.startDate&&null!=t.startDate||null==e.startDate&&null==t.startDate))return!1;if(!(null!=e.endDate&&null!=t.endDate||null==e.endDate&&null==t.endDate))return!1;if(null!=e.startDate&&!e.startDate.isSame(t.startDate))return!1;if(null!=e.endDate&&!e.endDate.isSame(t.endDate))return!1;return!0};t.getEventTimeData=function(e,t,n){null==n&&(n=(0,o.default)());var r=(0,o.default)(e),i=t&&(0,o.default)(t),a=null!=t&&r.isSame(i,"day");return{startDateTimeString:u(r,n),endDateTimeString:null!=i&&""!==i?a?i.format("LT"):l(i,n):void 0,currentOrPastEvent:r<=n,upcomingEvent:r<=(0,o.default)().add(1,"hour"),withinStartWindow:r<=(0,o.default)().add(15,"minute"),diffMinutes:r.diff(n,"minutes")}};t.getInitialEventEndDate=function(e){return a((null!=e?(0,o.default)(e):(0,o.default)()).add(1,"hour"),60)};t.getInitialEventStartDate=void 0;t.getNextBucketedTime=a;t.getScheduleFromEvent=function(e){return c(e.scheduled_start_time,e.scheduled_end_time)}
;t.getScheduleFromEventData=function(e){return c(e.scheduledStartTime,e.scheduledEndTime)};t.hasValidSchedule=function(e,t){var n=e.startDate,r=e.endDate;if(null==n)return!1;var a=(0,o.default)();if(n<a)return!1;if(null!=r&&r<n)return!1;if(t===i.GuildScheduledEventEntityTypes.EXTERNAL)return null!=r;return!0};var r,o=(r=n(730381))&&r.__esModule?r:{default:r},i=n(198756);t.MAX_DAYS_AHEAD_AN_EVENT_CAN_START=365;t.getInitialEventStartDate=function(){var e=(0,o.default)().add(1,"hour"),t=e.hour();e.minutes()>=30&&(t+=1);return e.hour(t).minutes(0).seconds(0)};function a(e,t){var n=t-e.minutes()%t;return(0,o.default)(e).add(n,"minutes").seconds(0)}var l=function(e,t){return e.format(e.get("years")===t.get("years")?"ddd MMM Do · LT":"ddd MMM Do, YYYY · LT")},u=function(e,t){return e.diff(t,"days")>1?l(e,t):e.calendar(t)};function c(e,t){var n;if(null!=e){n={startDate:(0,o.default)(e),endDate:void 0};null!=t&&(n.endDate=(0,o.default)(t))}return n}},516818:(e,t,n)=>{
Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,o=c(n(496486)),i=c(n(536211)),a=c(n(636602)),l=c(n(728429)),u=n(770348);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function d(e,t){d=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return d(e,t)}function f(){f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return f.apply(this,arguments)}var p=u.FormStates.CLOSED,v=null,_={},h={},y=null,S=null,E=!1,g=!1,m=null,O=null,T=null;function b(e){var t,n,r,o,i=l.default.getCurrentUser();if(null==i)return A();v=null!==(t=e.section)&&void 0!==t?t:v;null!=e.subsection&&null!=v&&(_[v]=e.subsection);g=!!e.openWithoutBackstack;p=u.FormStates.OPEN;h={}
;y=((n={})[u.UserSettingsSections.ACCOUNT]={userId:i.id,username:i.username,discriminator:i.discriminator,email:i.email,avatar:i.avatar,password:"",newPassword:null,claimed:i.isClaimed()},n);S=f({},y);O=null!==(r=e.onClose)&&void 0!==r?r:null;T=null!==(o=e.analyticsLocation)&&void 0!==o?o:null}function A(){p=u.FormStates.CLOSED;E=!1;y=null;S=null;v=null;_={};O=null;T=null}function C(){p=u.FormStates.OPEN;h={}}var D=new(function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;d(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;n.initialize=function(){this.waitFor(l.default)};n.hasChanges=function(){return null!=S&&null!=y&&(!(!this.isOpen()&&m!==u.DrawerTabTypes.USER_SETTINGS)&&!o.default.isEqual(S,y))};n.isOpen=function(){return E};n.getSection=function(){return v};n.getSubsection=function(){return null!=v?_[v]:null};n.shouldOpenWithoutBackstack=function(){return g};n.getProps=function(){return{
submitting:p===u.FormStates.SUBMITTING,section:v,subsection:null!=_&&null!=v?_[v]:null,settings:S,errors:h,hasChanges:this.hasChanges(),openWithoutBackstack:g,analyticsLocation:T}};!function(e,t,n){t&&s(e.prototype,t);n&&s(e,n);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"onClose",get:function(){return O}}]);return t}(i.default.Store))(a.default,((r={})[u.ActionTypes.USER_SETTINGS_MODAL_OPEN]=function(e){E=!0;b(e)},r[u.ActionTypes.USER_SETTINGS_MODAL_INIT]=b,r[u.ActionTypes.USER_SETTINGS_MODAL_CLOSE]=A,r[u.ActionTypes.LOGOUT]=A,r[u.ActionTypes.USER_SETTINGS_MODAL_SUBMIT]=function(){p=u.FormStates.SUBMITTING},r[u.ActionTypes.USER_SETTINGS_MODAL_SUBMIT_FAILURE]=function(e){var t;if(p!==u.FormStates.SUBMITTING)return!1;p=u.FormStates.OPEN;v=u.UserSettingsSections.ACCOUNT;h=null!==(t=e.errors)&&void 0!==t?t:{}},r[u.ActionTypes.USER_SETTINGS_MODAL_SET_SECTION]=function(e){v=e.section;null!=e.subsection&&(_[v]=e.subsection)},
r[u.ActionTypes.USER_SETTINGS_MODAL_UPDATE_ACCOUNT]=function(e){var t=e.settings;null==S&&(S={});var n=S[u.UserSettingsSections.ACCOUNT];S[u.UserSettingsSections.ACCOUNT]=f({},n,{},t)},r[u.ActionTypes.USER_SETTINGS_MODAL_SUBMIT_COMPLETE]=C,r[u.ActionTypes.USER_SETTINGS_MODAL_RESET]=function(){var e=l.default.getCurrentUser();C();if(null!=e){var t;y=((t={})[u.UserSettingsSections.ACCOUNT]={userId:e.id,username:e.username,discriminator:e.discriminator,email:e.email,avatar:e.avatar,password:"",newPassword:null,claimed:e.isClaimed()},t);S=f({},y)}},r[u.ActionTypes.DRAWER_SELECT_TAB]=function(e){m=e.tab;return null==v&&m===u.DrawerTabTypes.USER_SETTINGS&&b({type:u.ActionTypes.USER_SETTINGS_MODAL_INIT,section:null,subsection:null,openWithoutBackstack:!1})},r));t.default=D},767317:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t)
;if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e;n&&n.set(e,r);return r}(n(667294)),i=s(n(294184)),a=n(610639),l=s(n(314234)),u=s(n(840348)),c=["style","className"];function s(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var l=new Array(a),u=0;u<a;u++)l[u]=arguments[u+3];t.children=l}if(t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,
props:t,_owner:null}}function p(){p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return p.apply(this,arguments)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function _(e,t){_=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return _(e,t)}var h,y=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-transform","width","padding-left","padding-right","border-width","box-sizing"],S=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;_(e,t)}(t,e);function t(t){var n;(n=e.call(this,t)||this).handleSetRef=function(e){n._textArea=e};n.handleChange=function(e){var t=n.props.onChange;null!=t&&t(e);n.calculateSize()};n.state={height:void 0};return n}
var n=t.prototype;n.componentDidMount=function(){var e=this;Promise.resolve().then((function(){return e.calculateSize()}))};n.componentDidUpdate=function(e,t){var n=this;if(this.state.height!==t.height){var r=this.props.onResize;null==r||r(this.state.height)}e.value!==this.props.value&&Promise.resolve().then((function(){return n.calculateSize()}))};n.calculateSize=function(){var e=this._textArea;if(null!=e){var t=this.props,n=t.fontWidthEstimate,r=t.rows,o=e.value;if(null!=n&&-1===o.indexOf("\n")&&o.length*n<.8*e.offsetWidth)this.setState({height:void 0});else{if(null==h&&null!=document.body){h=document.createElement("textarea");document.body.appendChild(h)}var i=this.calculateNodeStyling(e),a=i.paddingSize,l=i.borderSize,u=i.boxSizing,c=i.sizingStyle;h.setAttribute("style",c+";\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0;\n");h.value=o;null!=r?h.setAttribute("rows",""+r):h.removeAttribute("rows");var s=h.scrollHeight
;"border-box"===u?s+=l:"content-box"===u&&(s-=a);this.setState({height:s})}}};n.calculateNodeStyling=function(e){var t=window.getComputedStyle(e),n=(0,a.getFirstTruthyValue)(t.getPropertyValue("box-sizing"),t.getPropertyValue("-moz-box-sizing"),t.getPropertyValue("-webkit-box-sizing")),r=parseFloat(t.getPropertyValue("padding-bottom"))+parseFloat(t.getPropertyValue("padding-top")),o=parseFloat(t.getPropertyValue("border-bottom-width"))+parseFloat(t.getPropertyValue("border-top-width"));return{sizingStyle:y.map((function(e){return e+":"+t.getPropertyValue(e)})).join(";"),paddingSize:r,borderSize:o,boxSizing:n}};n.clear=function(){null!=this._textArea&&(this._textArea.value="");this.calculateSize()};n.blur=function(){var e=this._textArea;null!=e&&e.blur()};n.focus=function(){var e=this._textArea;null!=e&&e.focus()};n.setSelection=function(e,t){if(null!=this._textArea){this._textArea.selectionStart=e;this._textArea.selectionEnd=t}};n.render=function(){
var e=this.props,t=e.style,n=e.className,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,c);delete r.fontWidthEstimate;delete r.onResize;var a=p({},this.state,{},t);return f(l.default,{},void 0,o.createElement("textarea",p({},r,{className:(0,i.default)(n,u.default.scrollbarGhostHairline),ref:this.handleSetRef,style:a,onChange:this.handleChange})))};!function(e,t,n){t&&v(e.prototype,t);n&&v(e,n);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"selectionStart",get:function(){var e,t;return null!==(e=null===(t=this._textArea)||void 0===t?void 0:t.selectionStart)&&void 0!==e?e:0}},{key:"selectionEnd",get:function(){var e,t;return null!==(e=null===(t=this._textArea)||void 0===t?void 0:t.selectionEnd)&&void 0!==e?e:0}},{key:"value",get:function(){var e,t;return null!==(e=null===(t=this._textArea)||void 0===t?void 0:t.value)&&void 0!==e?e:""}}]);return t}(o.PureComponent)
;S.displayName="TextAreaAutosize";S.defaultProps={autoFocus:!1,disabled:!1,autoCorrect:"off"};var E=S;t.default=E},32443:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=f;var r,o,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e;n&&n.set(e,r);return r}(n(667294)),a=(r=n(468205))&&r.__esModule?r:{default:r},l=["width","height","color","foreground"];function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return c.apply(this,arguments)}function s(e,t,n,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var l=new Array(a),u=0;u<a;u++)l[u]=arguments[u+3];t.children=l}if(t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var d=s("rect",{width:"24",height:"24"});function f(e){var t=e.width,n=void 0===t?24:t,r=e.height,o=void 0===r?24:r,u=e.color,f=void 0===u?"currentColor":u,p=e.foreground,v=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,l);return i.createElement("svg",c({},(0,a.default)(v),{width:n,height:o,viewBox:"0 0 24 24"}),s("g",{fill:"none",fillRule:"evenodd"},void 0,s("path",{
className:p,fill:f,d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"}),d))}f.displayName="Calendar"},975165:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=d;var r,o,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e;n&&n.set(e,r);return r}(n(667294)),a=(r=n(468205))&&r.__esModule?r:{default:r},l=["width","height","color","foreground"];function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function c(){c=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return c.apply(this,arguments)}function s(e,t,n,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var l=new Array(a),u=0;u<a;u++)l[u]=arguments[u+3];t.children=l}if(t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function d(e){var t=e.width,n=void 0===t?16:t,r=e.height,o=void 0===r?16:r,u=e.color,d=void 0===u?"currentColor":u,f=e.foreground,p=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,l);return i.createElement("svg",c({},(0,a.default)(p),{width:n,height:o,viewBox:"0 0 24 24"}),s("path",{fillRule:"evenodd",
clipRule:"evenodd",d:"M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",className:f,fill:d}))}d.displayName="Pencil"},332282:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=d;var r,o,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e;n&&n.set(e,r);return r
}(n(667294)),a=(r=n(468205))&&r.__esModule?r:{default:r},l=["width","height","color"];function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return c.apply(this,arguments)}function s(e,t,n,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var l=new Array(a),u=0;u<a;u++)l[u]=arguments[u+3];t.children=l}if(t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function d(e){var t=e.width,n=void 0===t?32:t,r=e.height,o=void 0===r?32:r,u=e.color,d=void 0===u?"currentColor":u,f=function(e,t){if(null==e)return{}
;var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,l);return i.createElement("svg",c({},(0,a.default)(f),{width:n,height:o,viewBox:"0 0 24 24",fill:"none"}),s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",fill:d}))}d.displayName="Stage"},465537:(e,t,n)=>{
Object.defineProperty(t,"__esModule",{value:!0});t.MINIMUM_MEMBER_COUNT=t.IOS_MINIMUM_MEMBER_COUNT=t.AnalyticsContexts=void 0;t.getDiscoverableGuild=function(e){return O.apply(this,arguments)};t.makeDiscoverableGuild=g;t.startLurking=y;t.trackDiscoveryExited=function(e,t,n){void 0===n&&(n=null);d.default.track(f.AnalyticEvents.GUILD_DISCOVERY_EXITED,{load_id:e,guild_ids_viewed:t,recommendations_source:n})};t.trackDiscoveryViewed=function(e,t,n,r,o){void 0===o&&(o=null);var i=t.length,a=n.length;d.default.track(f.AnalyticEvents.GUILD_DISCOVERY_VIEWED,{load_id:e,num_guilds:i+a,num_guilds_recommended:i,num_guilds_popular:a,recommended_guild_ids:t.map((function(e){return e.id})),category_id:r,recommendations_source:o})};t.trackGuildJoinClicked=function(e){var t=l.default.getLoadId(e);d.default.track(f.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED,{guild_id:e,load_id:t})};t.trackGuildSelected=m;t.trackSearchClosed=function(e){d.default.track(f.AnalyticEvents.SEARCH_CLOSED,{load_id:e})}
;t.trackSearchResultSelected=function(e,t,n,r,o){void 0===o&&(o={});d.default.track(f.AnalyticEvents.SEARCH_RESULT_SELECTED,{search_type:f.SearchTypes.GUILD_DISCOVERY,load_id:e,search_id:t,index_num:n,total_results:r,location:o.location})};t.trackSearchResultsViewed=function(e,t,n,r,o,i,a){d.default.track(f.AnalyticEvents.SEARCH_RESULT_VIEWED,{search_type:a?f.SearchTypes.GUILD_DISCOVERY_TAG:f.SearchTypes.GUILD_DISCOVERY,load_id:e,search_id:t,total_results:void 0!==r?r.length:null,guild_ids:void 0!==r?r.map((function(e){return e.id})):null,query:n,location:o.location,category_id:i})};t.trackSearchStarted=function(e,t,n){void 0===n&&(n={});d.default.track(f.AnalyticEvents.SEARCH_STARTED,{search_type:f.SearchTypes.GUILD_DISCOVERY,load_id:e,location:n.location,category_id:t})};t.trackTagSearchStarted=function(e,t,n,r){d.default.track(f.AnalyticEvents.SEARCH_STARTED,{search_type:f.SearchTypes.GUILD_DISCOVERY_TAG,load_id:e,location:{page:f.AnalyticsPages.GUILD_DISCOVERY,section:n},
category_id:t,guild_id:r})};t.viewGuild=function(e,t,n,r,o){return E.apply(this,arguments)};var r,o=p(n(817673)),i=p(n(118915)),a=p(n(415275)),l=p(n(930409)),u=n(139982),c=p(n(30098)),s=p(n(211136)),d=p(n(308920)),f=n(770348);function p(e){return e&&e.__esModule?e:{default:e}}function v(){v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return v.apply(this,arguments)}function _(e,t,n,r,o,i,a){try{var l=e[i](a),u=l.value}catch(e){n(e);return}l.done?t(u):Promise.resolve(u).then(r,o)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){_(i,r,o,a,l,"next",e)}function l(e){_(i,r,o,a,l,"throw",e)}a(void 0)}))}}t.AnalyticsContexts=r;!function(e){e.SEARCH="Search";e.RECOMMENDED="Recommended";e.POPULAR="Popular";e.RECOMMENDED_E3="Recommended - E3";e.HEADER="Header"}(r||(t.AnalyticsContexts=r={}))
;t.IOS_MINIMUM_MEMBER_COUNT=">1000";t.MINIMUM_MEMBER_COUNT=">200";function y(e,t,n){return S.apply(this,arguments)}function S(){return(S=h(regeneratorRuntime.mark((function e(t,n,r){var o,i,d,p,_,h,y,S;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0===r&&(r={});i=(o=r).channelId,d=o.onSuccess,p=o.joinSource,_=o.loadId;h=(0,u.getHistory)();l.default.setHistorySnapshot(v({},h));y=c.default.getGuild(t);S={state:{analyticsSource:n}};if(null==y||null==y.joinedAt){e.next=10;break}(0,u.transitionTo)(f.Routes.CHANNEL(t,s.default.getChannelId(t)),S);e.next=14;break;case 10:e.next=12;return a.default.joinGuild(t,{lurker:!0,source:p,loadId:_,lurkLocation:null==n?void 0:n.page});case 12:e.next=14;return a.default.transitionToGuildSync(t,v({},S,{welcomeModalChannelId:i,search:h.location.search}),i);case 14:null==d||d();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=h(regeneratorRuntime.mark((function e(t,n,o,i,a){
var l,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"string"==typeof i&&i in r&&(l=i);u={page:f.AnalyticsPages.GUILD_DISCOVERY,object:f.AnalyticsObjects.CARD,section:l};e.next=4;return y(n,u,{loadId:t});case 4:m(t,n,o,i,a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return{id:e.id,name:e.name,description:e.description,splash:e.splash,banner:e.banner,icon:e.icon,features:new Set(e.features),presenceCount:e.approximate_presence_count,memberCount:e.approximate_member_count,premiumSubscriptionCount:e.premium_subscription_count,preferredLocale:e.preferred_locale,discoverySplash:e.discovery_splash,emojis:e.emojis,emojiCount:e.emoji_count,stickers:e.stickers,stickerCount:e.sticker_count,keywords:e.keywords}}function m(e,t,n,r,o){var i={page:f.AnalyticsPages.GUILD_DISCOVERY,section:r};"string"!=typeof r&&null!=r.location&&(i=r.location);d.default.track(f.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED,{location:i,guild_id:t,
load_id:e,card_index:n,location_object:f.AnalyticsObjects.CARD,category_id:o})}function O(){return(O=h(regeneratorRuntime.mark((function e(t){var n,r,a,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0;e.next=3;return i.default.get({url:f.Endpoints.GUILD_DISCOVERY,query:o.default.stringify({guild_ids:t}),oldFormErrors:!0});case 3:a=e.sent;if(null!=(l=null===(n=a.body)||void 0===n||null===(r=n.guilds)||void 0===r?void 0:r[0])){e.next=7;break}return e.abrupt("return",l);case 7:return e.abrupt("return",g(l));case 10:e.prev=10;e.t0=e.catch(0);return e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=c7983bce55fd41afca26.js.map