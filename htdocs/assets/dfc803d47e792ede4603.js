"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[9669],{413546:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,o=(r=n(636602))&&r.__esModule?r:{default:r},i=n(770348);var a={popFirstFile:function(e){o.default.dispatch({type:i.ActionTypes.UPLOAD_ATTACHMENT_POP_FILE,channelId:e})},addFiles:function(e){var t=e.files,n=e.channelId,r=e.showLargeMessageDialog,a=e.draftType;o.default.dispatch({type:i.ActionTypes.UPLOAD_ATTACHMENT_ADD_FILES,channelId:n,files:t,showLargeMessageDialog:r,draftType:a})},addFile:function(e){var t=e.file,n=e.channelId,r=e.showLargeMessageDialog,a=e.draftType;o.default.dispatch({type:i.ActionTypes.UPLOAD_ATTACHMENT_ADD_FILES,channelId:n,files:[t],showLargeMessageDialog:r,draftType:a})},remove:function(e,t,n){o.default.dirtyDispatch({type:i.ActionTypes.UPLOAD_ATTACHMENT_REMOVE_FILE,channelId:e,id:t,draftType:n})},removeFiles:function(e,t,n){o.default.dispatch({
type:i.ActionTypes.UPLOAD_ATTACHMENT_REMOVE_FILES,channelId:e,attachmentIds:t,draftType:n})},clearAll:function(e,t){o.default.dirtyDispatch({type:i.ActionTypes.UPLOAD_ATTACHMENT_CLEAR_ALL_FILES,channelId:e,draftType:t})},update:function(e,t,n,r){var a=r.description,u=r.filename,l=r.spoiler;o.default.dispatch({type:i.ActionTypes.UPLOAD_ATTACHMENT_UPDATE_FILE,channelId:e,id:t,filename:u,description:a,spoiler:l,draftType:n})},setUploads:function(e){var t=e.uploads,n=e.channelId,r=e.draftType;o.default.dirtyDispatch({type:i.ActionTypes.UPLOAD_ATTACHMENT_SET_UPLOADS,channelId:n,uploads:t,draftType:r})},setFile:function(e){var t=e.file,n=e.channelId,r=e.id,a=e.draftType;o.default.dirtyDispatch({type:i.ActionTypes.UPLOAD_ATTACHMENT_SET_FILE,channelId:n,id:r,file:t,draftType:a})}};t.default=a},298169:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.numberParts=void 0;t.numberParts={__proto__:null,bg:{group:" ",decimal:","},cs:{group:" ",decimal:","},da:{group:".",decimal:","},de:{
group:".",decimal:","},el:{group:".",decimal:","},"en-GB":{group:",",decimal:"."},"en-US":{group:",",decimal:"."},"es-ES":{group:".",decimal:","},fi:{group:" ",decimal:","},fr:{group:" ",decimal:","},hi:{group:",",decimal:"."},hr:{group:".",decimal:","},hu:{group:" ",decimal:","},it:{group:".",decimal:","},ja:{group:",",decimal:"."},ko:{group:",",decimal:"."},lt:{group:" ",decimal:","},nl:{group:".",decimal:","},no:{group:" ",decimal:","},pl:{group:" ",decimal:","},"pt-BR":{group:".",decimal:","},ro:{group:".",decimal:","},ru:{group:" ",decimal:","},"sv-SE":{group:" ",decimal:","},th:{group:",",decimal:"."},tr:{group:".",decimal:","},uk:{group:" ",decimal:","},vi:{group:".",decimal:","},"zh-CN":{group:",",decimal:"."},"zh-TW":{group:",",decimal:"."}}},166806:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.useTopCommands=function(e){r.useEffect((function(){i.FrecencyUserSettingsActionCreators.loadIfNecessary()}),[]);var t=(0,o.useStateFromStores)([a.default],(function(){
return a.default.getTopCommandsWithoutLoadingLatest()}));return r.useMemo((function(){return(0,a.getFilteredTopCommands)(t,e)}),[t,e])};t.useTopRealCommands=function(e){r.useEffect((function(){i.FrecencyUserSettingsActionCreators.loadIfNecessary()}),[]);var t=(0,o.useStateFromStores)([a.default],(function(){return a.default.getTopCommandsWithoutLoadingLatest()}));return r.useMemo((function(){var n=(0,a.getFilteredTopCommands)(t,e);return(0,a.getTopRealCommands)(n)}),[t,e])};var r=l(n(667294)),o=n(536211),i=n(828593),a=l(n(290760));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function l(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){
var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e;n&&n.set(e,r);return r}},632184:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,o,i,a,u,l,d=m(n(536211)),c=m(n(636602)),p=m(n(473517)),f=m(n(892083)),s=n(770348);function m(e){return e&&e.__esModule?e:{default:e}}function y(e,t){y=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return y(e,t)}function v(){i=null;o=null;u=null;l=null}function h(e){var t=e.guildId;if(a!==t)return!1;g()}function g(){var e;i=null===(e=i)||void 0===e?void 0:e.markStale()}var A=new(function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;y(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;n.initialize=function(){this.waitFor(p.default)};n.getGuildCommands=function(e,t){var n,r
;return(null===(n=i)||void 0===n?void 0:n.guildId)===e&&(null===(r=i)||void 0===r?void 0:r.commandType)===t?i:null};n.getFilteredApplicationId=function(e){var t;return(null===(t=i)||void 0===t?void 0:t.guildId)===e?l:null};return t}(d.default.Store))(c.default,((r={})[s.ActionTypes.LOGOUT]=function(){a=null;l=null;v()},r[s.ActionTypes.CLEAR_GUILD_DISCOVERY_COMMANDS]=v,r[s.ActionTypes.CHANNEL_SELECT]=function(e){var t=e.guildId;if(a===t)return!1;a=t;i=null;o=null;u=null;l=null},r[s.ActionTypes.GUILD_APPLICATION_COMMANDS_UPDATE]=function(e){var t=e.nonce,n=e.applications,r=e.applicationCommands;if(t===o&&null!=u){var a;i=null===(a=i)||void 0===a?void 0:a.loadComplete(r,u.isBefore,u.offset,u.commandType,u.jumpDescriptor,n);u=null}},r[s.ActionTypes.INTEGRATION_DELETE]=function(e){var t=e.guildId,n=e.applicationId;if(a!==t)return!1;null!=n&&g()},r[s.ActionTypes.APPLICATION_COMMAND_DISCOVERY_REQUEST]=function(e){
var t,n=e.guildId,r=e.offset,a=e.isBefore,d=e.jumpDescriptor,c=e.nonce,p=e.commandType;p!==(null===(t=i)||void 0===t?void 0:t.commandType)&&v();l=null;o=c;u={guildId:n,offset:r,isBefore:a,jumpDescriptor:d,commandType:p};null!=i&&i.guildId===n||(i=new f.default(n));i=i.loadStart()},r[s.ActionTypes.APPLICATION_COMMAND_QUERY_LIST_REQUEST]=function(e){var t=e.guildId,n=e.applicationId,r=e.commandType,a=e.nonce;if("discovery"===e.scope){o=a;u={guildId:t,offset:0,isBefore:!1,commandType:r,jumpDescriptor:{sectionId:n}};l=n;null!=i&&i.guildId===t||(i=new f.default(t));i=i.loadStart()}},r[s.ActionTypes.APPLICATIONS_REQUEST]=function(e){var t,n=e.nonce,r=e.guildId,a=e.commandType;a!==(null===(t=i)||void 0===t?void 0:t.commandType)&&v();l=null;o=n;u={guildId:r,offset:0,isBefore:!1,commandType:a};(null==i||i.guildId!==r||i.isStale)&&(i=new f.default(r))},r[s.ActionTypes.APPLICATION_COMMAND_CREATE]=h,r[s.ActionTypes.APPLICATION_COMMAND_DELETE]=h,r[s.ActionTypes.APPLICATION_COMMAND_UPDATE]=h,r))
;t.default=A},24922:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.filterEmpty=s;t.getBoolean=m;t.getChannelId=y;t.getOptionalBoolean=function(e,t){return null==e[t]?null:m(e,t)};t.getOptionalChannelId=function(e,t){return null==e[t]?null:y(e,t)};t.getOptionalRoleId=function(e,t){return null==e[t]?null:h(e,t)};t.getOptionalString=function(e,t){return null==e[t]?null:g(e,t)};t.getOptionalUserId=function(e,t){return null==e[t]?null:v(e,t)};t.getRoleId=h;t.getString=g;t.getUserId=v;t.normalizeNumericString=function(e,t){if(e!==i){var n;i=e;var a=null!==(n=u.numberParts[e])&&void 0!==n?n:u.numberParts["en-US"],d=a.group,c=a.decimal;r=new RegExp(l.default.escape(d),"g");o=new RegExp(l.default.escape(c),"g")}return t.replace(r,"").replace(o,".")};var r,o,i,a=c(n(441143)),u=n(298169),l=c(n(827513)),d=n(484278);function c(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
;if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return null==e?[]:e.filter((function(t,n){return"text"!==t.type||(n>0&&n<e.length-1?""!==t.text:""!==t.text.trim())}))}function m(e,t){var n,r=s(e[t]);(0,a.default)(1===r.length,"Contains multiple values");(0,
a.default)("text"===(null===(n=r[0])||void 0===n?void 0:n.type),"First value is not text");return r[0].text===d.TRUE_OPTION_NAME}function y(e,t){var n,r=s(e[t]);(0,a.default)(1===r.length,"Contains multiple values");(0,a.default)("channelMention"===(null===(n=r[0])||void 0===n?void 0:n.type),"First value is not a channel mention");return r[0].channelId}function v(e,t){var n,r=s(e[t]);(0,a.default)(1===r.length,"Contains multiple values");(0,a.default)("userMention"===(null===(n=r[0])||void 0===n?void 0:n.type),"First value is not a user mention");return r[0].userId}function h(e,t){var n,r=s(e[t]);(0,a.default)(1===r.length,"Contains multiple values");(0,a.default)("roleMention"===(null===(n=r[0])||void 0===n?void 0:n.type),"First value is not a role mention");return r[0].roleId}function g(e,t){for(var n,r="",o=p(e[t]);!(n=o()).done;){var i=n.value;switch(i.type){case"text":case"textMention":r+=i.text;break;case"userMention":r+="<@!"+i.userId+">";break;case"channelMention":
r+="<#"+i.channelId+">";break;case"roleMention":r+="<@&"+i.roleId+">";break;case"emoji":r+=i.surrogate;break;case"customEmoji":r+="<"+(i.animated?"a":"")+":"+i.name.replace(/:/g,"").split("~")[0]+":"+i.emojiId+">"}}return r}},892083:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=n(153823);function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){
(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function e(t){var n=this;this.commandType=null;this.commandsArray=[];this._map={};this._commandIds=new Set;this.topOffset=-1;this.bottomOffset=-1;this.jumpDescriptor=null;this.jumpSequenceId=1;this.loadingMore=!1;this.isStale=!1;this.mutate=function(t){var r=new e(n.guildId);r.commandType=n.commandType;r.commandsArray=n.commandsArray;r._map=n._map;r._commandIds=n._commandIds;r.topOffset=n.topOffset;r.bottomOffset=n.bottomOffset;r.jumpDescriptor=n.jumpDescriptor;r.loadingMore=n.loadingMore;r.jumpSequenceId=n.jumpSequenceId;r.isStale=n.isStale;t(r);return r};this.loadStart=function(){return n.mutate((function(e){e.loadingMore=!0;e.jumpDescriptor=null}))};this.loadComplete=function(e,t,r,o,i,a){return(null!=i?n.reset(e,r,a):n.merge(e,t,a)).mutate((function(e){e.jumpDescriptor=i;e.loadingMore=!1;e.commandType=o;null!=i&&(e.jumpSequenceId=n.jumpSequenceId+1)}))};this.reset=function(e,t,o){
var i=e.filter((function(e){return null!=e.id&&!1!==e.listed})).length,a=null==o?void 0:(0,r.applicationPermissionsList)(o);return n.mutate((function(n){n.commandsArray=(0,r.buildApplicationCommands)(e,a);n._map={};n.commandsArray.forEach((function(e){return n._map[e.id]=e}));n._commandIds.clear();e.forEach((function(e){null!=e.id&&""!==e.id&&n._commandIds.add(e.id)}));n.topOffset=t;n.bottomOffset=Math.max(t+i-1,t);n.isStale=!1}))};this.merge=function(e,t,i){var a=null==i?void 0:i.map((function(e){return{applicationCommandPermissions:e.application_command_permissions,id:e.id}})),u=null!=a?(0,r.applicationPermissionsList)(a):void 0;return n.mutate((function(n){var i=e.filter((function(e){if(null==e.id||!1===e.listed)return!1;if(n._commandIds.has(e.id))return!1;n._commandIds.add(e.id);return!0})).length,a=(0,r.buildApplicationCommands)(e,u).filter((function(e){var t=n._map[e.id];n._map[e.id]=e;if(null!=t){n.commandsArray[n.commandsArray.indexOf(t)]=e;return!1}return!0}))
;n.commandsArray=t?[].concat(o(a),o(n.commandsArray)):[].concat(o(n.commandsArray),o(a));if(i>0){t?n.topOffset-=i:n.bottomOffset+=i;n.topOffset=-1===n.topOffset?0:n.topOffset;n.bottomOffset=-1===n.bottomOffset?0:n.bottomOffset;n.isStale=!1}}))};this.markStale=function(){return n.mutate((function(e){e.isStale=!0}))};this.guildId=t}},462936:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n,r,o){return F.apply(this,arguments)};t.retryCommandMessage=void 0;var r=N(n(441143)),o=N(n(636602)),i=N(n(786345)),a=N(n(413546)),u=n(81069),l=P(n(79267)),d=N(n(844784)),c=P(n(741464)),p=n(632341),f=P(n(551048)),s=N(n(887174)),m=n(687549),y=N(n(433385)),v=N(n(30098)),h=N(n(680873)),g=N(n(871778)),A=N(n(728429)),I=n(71246),T=n(536487),C=N(n(373265)),b=P(n(24922)),O=n(65621),_=n(153823),M=n(484278),S=n(770348);function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}function P(e,t){
if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e;n&&n.set(e,r);return r}function N(e){return e&&e.__esModule?e:{default:e}}function D(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=L(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){
var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){u=!0;o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||L(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);return"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(e){n(e);return}
u.done?t(l):Promise.resolve(l).then(r,o)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){U(i,r,o,a,u,"next",e)}function u(e){U(i,r,o,a,u,"throw",e)}a(void 0)}))}}var k=function(e,t){var n;return null==e||null===(n=e.find((function(e){return e.displayName===t})))||void 0===n?void 0:n.value},R=function(e,t,n,r){var o;void 0===r&&(r=function(e){return e});if(e.name===(null===(o=n.autocomplete)||void 0===o?void 0:o.name))return t;if(""===t)return null;var i=C.default.getAutocompleteLastChoices(n.channel.id,e.name);if(null!=i){var a;return null!==(a=k(i,t))&&void 0!==a?a:r(t)}return r(t)},B=function(e){var t=e.toLowerCase()===M.TRUE_OPTION_NAME.toLowerCase(),n=e.toLowerCase()===M.FALSE_OPTION_NAME.toLowerCase();return t||n?t:null};function F(){return(F=x(regeneratorRuntime.mark((function e(t,n,i,l,c){var p,f,y,v,A,I,C,_,M,E,P,N,j,L,w,U,x,F,G,V,$,Y,q,z,Q,Z,X,J;return regeneratorRuntime.wrap((function(e){
for(;;)switch(e.prev=e.next){case 0:if(null!=i.autocomplete){e.next=5;break}o.default.dispatch({type:"APPLICATION_COMMAND_USED",context:i,command:t});if(!i.channel.isArchivedThread()){e.next=5;break}e.next=5;return s.default.unarchiveThread(i.channel,!1);case 5:A=[];I=[];if(null==t.options){e.next=53;break}C=D(t.options);case 9:if((_=C()).done){e.next=53;break}if((P=_.value).type!==u.ApplicationCommandOptionType.SUB_COMMAND&&P.type!==u.ApplicationCommandOptionType.SUB_COMMAND_GROUP&&P.name in n){e.next=13;break}return e.abrupt("continue",51);case 13:N=(null===(M=i.autocomplete)||void 0===M?void 0:M.name)===P.name||void 0;j=null;if(P.type!==u.ApplicationCommandOptionType.STRING){e.next=21;break}U=null!==(L=null===(w=b.getOptionalString(n,P.name))||void 0===w?void 0:w.trim())&&void 0!==L?L:"";j=null!=P.choices?k(P.choices,U):P.autocomplete?R(P,U,i):U;(0,r.default)(null!=i.autocomplete||null!=j,'Option "'+P.name+'" expects a value');null!=j&&A.push({type:P.type,name:P.name,value:j,
focused:N});return e.abrupt("continue",51);case 21:if(P.type!==u.ApplicationCommandOptionType.ATTACHMENT){e.next=25;break}if("continue"!==function(){var e=h.default.getUpload(i.channel.id,P.name,m.DraftType.ChannelMessage);if(null==e)return"continue";var t=h.default.getUploads(i.channel.id,m.DraftType.ChannelMessage).findIndex((function(t){return e.id===t.id}));I.push(e);j=t;A.push({type:P.type,name:P.name,value:j,focused:N});return"continue"}()){e.next=25;break}return e.abrupt("continue",51);case 25:x=b.filterEmpty(n[P.name]);(0,r.default)(null!=i.autocomplete||1===x.length,'Option "'+P.name+'" expects a single option type');if(null!=x[0]||N){e.next=29;break}return e.abrupt("continue",51);case 29:F=null!==(E=x[0])&&void 0!==E?E:{type:"text",text:""};e.t0=P.type
;e.next=e.t0===u.ApplicationCommandOptionType.CHANNEL?33:e.t0===u.ApplicationCommandOptionType.ROLE?35:e.t0===u.ApplicationCommandOptionType.USER?37:e.t0===u.ApplicationCommandOptionType.MENTIONABLE?39:e.t0===u.ApplicationCommandOptionType.BOOLEAN?41:e.t0===u.ApplicationCommandOptionType.INTEGER?43:e.t0===u.ApplicationCommandOptionType.NUMBER?45:47;break;case 33:"channelMention"===F.type?j=F.channelId:"text"===F.type&&(j=F.text.trim());return e.abrupt("break",49);case 35:"roleMention"===F.type?j=F.roleId:"text"===F.type?j=F.text.trim():"textMention"===F.type&&"@everyone"===F.text&&(j=null===(G=i.guild)||void 0===G?void 0:G.id);return e.abrupt("break",49);case 37:"userMention"===F.type?j=F.userId:"text"===F.type&&(j=F.text.trim());return e.abrupt("break",49);case 39:"userMention"===F.type?j=F.userId:"roleMention"===F.type?j=F.roleId:"text"===F.type?j=F.text.trim():"textMention"===F.type&&"@everyone"===F.text&&(j=null===(V=i.guild)||void 0===V?void 0:V.id);return e.abrupt("break",49)
;case 41:"text"===F.type&&(j=B(F.text.trim()));return e.abrupt("break",49);case 43:if("text"===F.type){$=F.text.trim();j=null!=P.choices?Number(k(P.choices,$)):P.autocomplete?R(P,$,i,Number):Number(b.normalizeNumericString(g.default.locale,$))}return e.abrupt("break",49);case 45:if("text"===F.type){Y=F.text.trim();j=null!=P.choices?Number(k(P.choices,Y)):P.autocomplete?R(P,Y,i,Number):Number(b.normalizeNumericString(g.default.locale,Y))}return e.abrupt("break",49);case 47:(0,r.default)("Unsupported option type: "+P.type);return e.abrupt("continue",51);case 49:(0,r.default)(null!=i.autocomplete||null!=j,'Unexpected value for option "'+P.name+'"');null!=j&&A.push({type:P.type,name:P.name,value:j,focused:N});case 51:e.next=9;break;case 53:if(null!=t.subCommandPath)for(q=t.subCommandPath.length-1;q>=0;q-=1){z=t.subCommandPath[q],Q=z.name,Z=z.type;A=[{type:Z,name:Q,options:A}]}if(null==t.execute){e.next=57;break}d.default.trackWithMetadata(S.AnalyticEvents.APPLICATION_COMMAND_USED,{
command_id:t.id,application_id:t.applicationId,command_type:t.type});return e.abrupt("return",t.execute(A,i));case 57:if(t.inputType!==O.ApplicationCommandInputType.BUILT_IN&&t.inputType!==O.ApplicationCommandInputType.BUILT_IN_TEXT&&t.inputType!==O.ApplicationCommandInputType.BUILT_IN_INTEGRATION){e.next=59;break}return e.abrupt("return");case 59:X={version:t.version,id:null!==(p=null===(f=t.rootCommand)||void 0===f?void 0:f.id)&&void 0!==p?p:t.id,guild_id:t.guildId,name:null!==(y=null===(v=t.rootCommand)||void 0===v?void 0:v.name)&&void 0!==y?y:t.name,type:t.type,options:A,application_command:t.rootCommand};J=function(){W(n)};null!=l&&(X.target_id=l);if(null!=i.autocomplete)(0,T.performAutocomplete)(t,i,X);else{a.default.clearAll(i.channel.id,m.DraftType.ChannelMessage);H(t.applicationId,X,i,I,c,J)}case 63:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e){var t=Object.values(e).flatMap((function(e){return e.map((function(e){return"emoji"===e.type?{
name:e.name.replaceAll(":","")}:"customEmoji"===e.type?y.default.getCustomEmojiById(e.emojiId):null})).filter(I.isNotNullish)}));t.length>0&&o.default.dispatch({type:S.ActionTypes.EMOJI_TRACK_USAGE,emojiUsed:t})};t.retryCommandMessage=function(e,t,n){if(e.isCommandType()){var r=t.guild_id;null!=e.interactionData&&H(n,e.interactionData,{channel:t,guild:null!=r?v.default.getGuild(r):null})}};var H=function(e,t,n,r,a,d){var s=n.channel,m=n.guild,y=s.id,v=null==m?void 0:m.id,h=j((0,_.getInteractionAuthor)(n,e),2),g=h[0],I=h[1],T=t.type===u.ApplicationCommandType.CHAT?S.MessageTypes.CHAT_INPUT_COMMAND:S.MessageTypes.CONTEXT_MENU_COMMAND,C=(0,f.default)(y,"",!1,T,void 0,void 0,null!=g?g:void 0);C.application=null!=I?I:void 0;C.interaction={id:t.id,name:t.name,type:u.InteractionTypes.APPLICATION_COMMAND,user:(0,f.userRecordToServer)(A.default.getCurrentUser())};C.interaction_data=t;var b={applicationId:e,channelId:y,guildId:v,data:t,nonce:C.id,attachments:r,maxSizeCallback:a}
;i.default.receiveMessage(y,C,!0,{applicationId:e});c.addQueued(b.nonce,{messageId:C.id,onCreate:function(e){null!=C.interaction&&(C.interaction.id=e)},onFailure:function(e,t){return function(e,t){null==t&&null!=e&&i.default.sendClydeError(y,e);o.default.dirtyDispatch({type:S.ActionTypes.MESSAGE_SEND_FAILED,messageId:C.id,channelId:y,reason:t})}(e,t)},data:{interactionType:u.InteractionTypes.APPLICATION_COMMAND,channelId:y}});l.default.enqueue({type:l.MessageDataType.COMMAND,message:b},(function(e){(0,p.handleInteractionResponse)(b.nonce,e);e.ok&&null!=d&&d()}))}},807149:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.useApplicationCommandsDiscoveryState=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=A(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){
var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e;n&&n.set(e,r);return r}(n(667294)),o=g(n(496486)),i=n(536211),a=g(n(689389)),u=g(n(728429)),l=n(481414),d=g(n(117883)),c=n(166806),p=g(n(290760)),f=g(n(632184)),s=g(n(473517)),m=n(65621),y=n(153823),v=n(484278),h=n(770348);function g(e){return e&&e.__esModule?e:{default:e}}function A(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(A=function(e){return e?n:t})(e)}function I(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){
var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){u=!0;o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);return"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O={guildCommandSections:null,guildCommands:null,filteredApplicationId:null},_=function(e,t,n){return{type:n,
inputType:m.ApplicationCommandInputType.PLACEHOLDER,id:"placeholder-"+e+"-"+t,name:"",displayName:"",description:"",displayDescription:"",applicationId:""}};t.useApplicationCommandsDiscoveryState=function(e,t,n,g){var A=(0,i.useStateFromStoresObject)([s.default,f.default,a.default],(function(){if(null==e.guild)return O;if(!a.default.can(h.Permissions.USE_APPLICATION_COMMANDS,e.channel))return O;var t=e.guild.id;return{guildCommandSections:s.default.getGuildSections(t),guildCommands:f.default.getGuildCommands(t,n),filteredApplicationId:f.default.getFilteredApplicationId(t)}}),[e,n]),C=A.guildCommandSections,b=A.guildCommands,M=A.filteredApplicationId,S=r.useMemo((function(){return null==C?void 0:C.filter((function(e){var t,r;return(null!==(t=null===(r=e.commandCountByType)||void 0===r?void 0:r[n])&&void 0!==t?t:0)>0}))}),[C,n]),E=(0,i.useStateFromStoresObject)([d.default,u.default],(function(){var t,r,o;if((null===(t=e.channel)||void 0===t?void 0:t.type)!==h.ChannelTypes.DM)return{
dmCommandSections:null,dmCommands:null};var i=null===(r=e.channel)||void 0===r?void 0:r.getRecipientId(),a=u.default.getUser(i);if(null==a||!0!==a.bot)return{dmCommandSections:null,dmCommands:null};var l=d.default.getCommands(i,n);return{dmCommandSections:null!=l&&l.length>0?[{id:l[0].applicationId,type:m.ApplicationCommandSectionType.DM,name:a.username,commandCountByType:(o={},o[n]=l.length,o),icon:a.avatar}]:[],dmCommands:l}})),P=E.dmCommandSections,N=E.dmCommands,D=r.useMemo((function(){return function(e,t,n){var r=e.channel,o=e.guild;return null!=r?(0,l.getBuiltInCommands)(t,!0,n).filter((function(e){return null==e.predicate||e.predicate({channel:r,guild:o})})):[]}(e,n,g)}),[g,e,n]),j=(0,c.useTopCommands)(e),L=T(r.useState(!1),2),w=L[0],U=L[1];r.useEffect((function(){U(!1)}),[e,n]);var x=r.useMemo((function(){var t,n=(null!==(t=null!=e.guild?null==b?void 0:b.commandsArray:N)&&void 0!==t?t:[]).concat(D).filter((function(e){return!!j.includes(e.id)&&!!(0,y.hasAccess)(e)
})).sort((function(t,n){var r=p.default.getScoreWithoutLoadingLatest(e,t);return p.default.getScoreWithoutLoadingLatest(e,n)-r})).slice(0,v.DISCOVERY_COMMANDS_FRECENCY_LIMIT);n.length>0&&U(!0);return n}),[D,e,j,N,null==b?void 0:b.commandsArray]),k=r.useMemo((function(){var t;if(g)return[l.BUILT_IN_SECTIONS[v.BuiltInSectionId.BUILT_IN]];var n=w?[l.BUILT_IN_SECTIONS[v.BuiltInSectionId.FRECENCY]]:[],r=null!==(t=null!=e.guild?S:P)&&void 0!==t?t:[],o=[l.BUILT_IN_SECTIONS[v.BuiltInSectionId.BUILT_IN]];return[].concat(n,I(r),o)}),[g,e.guild,P,S,w]),R=r.useMemo((function(){if(null!=M)return{hasMoreBefore:!1,hasMoreAfter:!1};var e=k.reduce((function(e,t){var r;return e+(null!=t.commandCountByType&&null!==(r=t.commandCountByType[n])&&void 0!==r?r:0)}),0);return{hasMoreBefore:null!=b&&b.topOffset>0&&e>0,hasMoreAfter:null!=b&&b.bottomOffset<e-1}}),[b,k,n,M]),B=R.hasMoreBefore,F=R.hasMoreAfter,W=r.useMemo((function(){if(!B)return[];for(var e=[],r=0;r<t;r++)e.push(_("before",r,n));return e
}),[B,t,n]),H=r.useMemo((function(){if(!F)return[];for(var e=[],r=0;r<t;r++)e.push(_("after",r,n));return e}),[F,t,n]),G=r.useMemo((function(){var t;if(g)return D;var n=null!==(t=null!=e.guild?null==b?void 0:b.commandsArray:N)&&void 0!==t?t:[];F||(n=n.concat(D));return n}),[D,g,e.guild,N,b,F]),V=r.useMemo((function(){return B?G:x.concat(G)}),[G,x,B]),$=r.useMemo((function(){var e={},t=o.default.chain(G).filter((function(e){return!!e.listed||e.inputType===m.ApplicationCommandInputType.BUILT_IN||e.inputType===m.ApplicationCommandInputType.BUILT_IN_TEXT||e.inputType===m.ApplicationCommandInputType.BUILT_IN_INTEGRATION})).groupBy((function(e){return e.applicationId})).value();!B&&x.length>0&&(t[v.BuiltInSectionId.FRECENCY]=x);var r=k.map((function(n){var r,o=null!==(r=t[n.id])&&void 0!==r?r:[];n.type===m.ApplicationCommandSectionType.BUILT_IN&&(e[n.id]=o.length);return{data:o,section:n,key:n.id}})).filter((function(e){return(null==M||e.section.id===M)&&e.data.length>0}));if(r.length>0){
var i,a;(i=r[0].data).unshift.apply(i,I(W));(a=r[r.length-1].data).push.apply(a,I(H))}var u=r.reduce((function(e,t){return e.concat(t.data)}),[]),l=[],d=0;k.forEach((function(t){var r,o;l.push(d);var i=null!=t.commandCountByType&&null!==(r=t.commandCountByType[n])&&void 0!==r?r:0;d+=t.type===m.ApplicationCommandSectionType.BUILT_IN?null!==(o=e[t.id])&&void 0!==o?o:0:i}));return{discoverySections:r,sectionsOffset:l,discoveryCommands:u,builtInSectionCommandCount:e}}),[G,x,W,H,k,B,n,M]),Y=$.discoverySections,q=$.sectionsOffset,z=$.discoveryCommands;return{filteredApplicationId:M,discoverySections:Y,applicationCommandSections:k,discoveryCommands:z,commands:V,guildCommands:b,sectionsOffset:q,hasMoreBefore:B,hasMoreAfter:F}}},456206:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e)
;var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e;n&&n.set(e,r)}(n(667294));var r,o=a(n(810919)),i=a(n(767846));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function l(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var u=new Array(a),l=0;l<a;l++)u[l]=arguments[l+3];t.children=u}if(t&&i)for(var d in i)void 0===t[d]&&(t[d]=i[d]);else t||(t=i||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var d=l(o.default,{dotRadius:4,themed:!0}),c=function(){
return l("div",{className:i.default.loadingWrapper},void 0,d)};c.displayName="ApplicationCommandLoadingMenuItem";var p=c;t.default=p},159872:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,o=N(n(667294)),i=E(n(441143)),a=E(n(496486)),u=n(536211),l=N(n(536487)),d=E(n(117883)),c=E(n(473517)),p=n(905043),f=n(65621),s=n(153823),m=E(n(462936)),y=n(807149),v=n(396229),h=E(n(456206)),g=n(145122),A=n(567186),I=E(n(644263)),T=E(n(30098)),C=E(n(689389)),b=E(n(728429)),O=n(770348),_=n(484278),M=E(n(247001)),S=E(n(929945));function E(e){return e&&e.__esModule?e:{default:e}}function P(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(P=function(e){return e?n:t})(e)}function N(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=P(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e;n&&n.set(e,r);return r}function D(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var u=new Array(a),l=0;l<a;l++)u[l]=arguments[l+3];t.children=u}if(t&&i)for(var d in i)void 0===t[d]&&(t[d]=i[d]);else t||(t=i||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var j=a.default.debounce((function(e,t,n,r,o,i){l.getApplicationDiscoveryCommands(e,t,n,!1,r,o,i)}),100,{maxWait:100}),L=D(h.default,{}),w=function(e,t,n,r,a){var h=o.useRef(!1),E=(0,u.useStateFromStoresObject)([I.default,T.default],(function(){var e=I.default.getChannel(n);return{channel:e,
guild:T.default.getGuild(null!=r?r:null==e?void 0:e.guild_id)}})),P=E.channel,N=E.guild,w=o.useCallback((function(t,n,r){void 0===r&&(r=_.DISCOVERY_COMMANDS_QUERY_LIMIT);(null==N?void 0:N.id)&&j(null==N?void 0:N.id,t,r,!1,e,n)}),[N,e]),U=function(e,t,n){o.useEffect((function(){var r;if(null!=(null==n?void 0:n.id)&&(null==n||null===(r=n.applicationCommandCounts)||void 0===r?void 0:r[e])>0)l.queryGuildApplications(null==n?void 0:n.id,15,e);else if((null==t?void 0:t.type)===O.ChannelTypes.DM){var o=b.default.getUser(t.getRecipientId());!0===(null==o?void 0:o.bot)&&null==d.default.getCommands(o.id,e)&&l.queryDmApplicationCommands(o.id,e)}}),[t,e,n]);var r=(0,y.useApplicationCommandsDiscoveryState)({channel:t,guild:n},1,e),i=r.discoveryCommands,a=r.hasMoreAfter,u=r.guildCommands;return{visible:o.useMemo((function(){var r,o=(null==t?void 0:t.type)===O.ChannelTypes.DM;return null!=t&&(o||C.default.can(O.Permissions.USE_APPLICATION_COMMANDS,t))&&(0,
A.isTextChannel)(t.type)&&!t.isArchivedThread()&&(o&&i.length>0||(null!==(r=null==n?void 0:n.applicationCommandCounts[e])&&void 0!==r?r:0)>0)}),[t,e,null==n?void 0:n.applicationCommandCounts,i.length]),discoveryCommands:i,hasMoreAfter:a,guildCommands:u}}(e,P,N),x=U.visible,k=U.discoveryCommands,R=U.hasMoreAfter,B=U.guildCommands;o.useEffect((function(){if(x!==h.current){x&&(null==a||a());h.current=x}}),[x,a]);o.useEffect((function(){(null==B?void 0:B.isStale)&&w(0,{sectionId:null,offset:0})}),[null==B?void 0:B.isStale,w]);var F=o.useCallback((function(e){null!=B&&!B.loadingMore&&R&&e+500>34*k.length-40&&w(B.bottomOffset+1)}),[k.length,R,B,w]),W=o.useCallback((function(e){if(e.inputType===f.ApplicationCommandInputType.PLACEHOLDER)return D(g.MenuItem,{id:"menu-command-"+e.id,render:function(){return L}},"menu-command-"+e.id);if(null!=P){var n=(0,p.getCommandSection)(e.applicationId,c.default,b.default,P),r=null!=n?(0,v.getIconComponent)(n):void 0;return D(g.MenuItem,{id:e.id,
label:e.name,showIconFirst:!0,disabled:!(0,s.hasAccess)(e),icon:function(){return null!=r?D(r,{channel:P,section:n,width:18,height:18,selectable:!1}):null},action:function(){(0,i.default)(!P.isArchivedThread(),"Context menu commands cannot be run on archived threads.");(0,m.default)(e,{},{channel:P,guild:N},t)}},e.id)}return null}),[P,N,t]);return x&&D(g.MenuItem,{id:"apps",label:M.default.Messages.APPS,onChildrenScroll:F,childRowHeight:34,listClassName:S.default.list},void 0,k.map(W))};t.default=w},96763:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=p;var r,o,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]
}r.default=e;n&&n.set(e,r);return r}(n(667294)),a=(r=n(468205))&&r.__esModule?r:{default:r},u=["width","height","color","foreground"];function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function d(){d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return d.apply(this,arguments)}function c(e,t,n,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var u=new Array(a),l=0;l<a;l++)u[l]=arguments[l+3];t.children=u}if(t&&i)for(var d in i)void 0===t[d]&&(t[d]=i[d]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function p(e){
var t=e.width,n=void 0===t?24:t,r=e.height,o=void 0===r?24:r,l=e.color,p=void 0===l?"currentColor":l,f=e.foreground,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,u);return i.createElement("svg",d({},(0,a.default)(s),{width:n,height:o,viewBox:"0 0 24 24"}),c("path",{className:f,fill:p,fillRule:"evenodd",clipRule:"evenodd",d:"M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM8.79741 7.72V16H6.74541V7.72H8.79741ZM13.2097 7.72C16.0897 7.72 17.5897 9.388 17.5897 11.848C17.5897 14.308 16.0537 16 13.2577 16H10.3537V7.72H13.2097ZM13.1497 14.404C14.6137 14.404 15.5257 13.636 15.5257 11.86C15.5257 10.12 14.5537 9.316 13.1497 9.316H12.4057V14.404H13.1497Z"}))}p.displayName="CopyID"}}]);
//# sourceMappingURL=dfc803d47e792ede4603.js.map