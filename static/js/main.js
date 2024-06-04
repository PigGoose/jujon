!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=218)}({10:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(30),o=n(13),s=function(){function t(){this.dataExchangeArray=[]}return t.prototype.consentInitializedFromStorage=function(e,n){var s=t.createConsentInitializedObject(o.default.USC_ORIGIN_LOCAL,e,n);this.dispatchEvent(r.DataExchangeEventTypes.CONSENTS_INITIALIZED_STORAGE,s)},t.prototype.dispatchConsentsInitializedEvent=function(e,n){var s=t.createConsentInitializedObject(o.default.USC_ORIGIN_SERVER,e,n);this.dispatchEvent(r.DataExchangeEventTypes.CONSENTS_INITIALIZED_SERVER,s)},t.createConsentInitializedObject=function(t,e,n){var r={usc_origin:t,event:o.default.CONSENT_INITIALIZED_EVENT},s=n;return e.forEach(function(t){s[t.templateId]&&s[t.templateId][t.version]?s[t.templateId][t.version].dataProcessors.forEach(function(e){r[e]=t.unsavedConsentStatus}):console.error("Consent "+t.templateId+" with version "+t.version+" not found")}),r},t.prototype.dispatchCategoryChangedEventByCategory=function(t){var e={event:"specific_category_status_changed "+t.categorySlug,category:t.label,slug:t.categorySlug,status:t.status,isIntermediate:t.isIntermediateState};this.dispatchEvent(r.DataExchangeEventTypes.CATEGORY_CHANGED,{event:"category_status_changed",category:t.label,slug:t.categorySlug,status:t.status,isIntermediate:t.isIntermediateState}),this.dispatchEvent(r.DataExchangeEventTypes.SPECIFIC_CATEGORY_CHANGED,e)},t.prototype.dispatchEventForConsent=function(e,n){var o=this;t.createConsentChangedEvents(e,n).forEach(function(t){o.dispatchEvent(r.DataExchangeEventTypes.CONSENT_CHANGED,t)}),t.createConsentChangedEventsWithName(e,n).forEach(function(t){o.dispatchEvent(r.DataExchangeEventTypes.SPECIFIC_CONSENT_CHANGED,t)})},t.createConsentChangedEvents=function(t,e){var n=[];if(t&&e[t.templateId]&&e[t.templateId][t.version])return e[t.templateId][t.version].dataProcessors.forEach(function(e){var r,s=((r={})[e]=t.consentStatus,r.event=o.default.CONSENT_CHANGED_EVENT,r);n.push(s)}),n;console.error("Consent "+t.templateId+" with version "+t.version+" not found")},t.createConsentChangedEventsWithName=function(t,e){var n=[];if(e[t.templateId]&&e[t.templateId][t.version])return e[t.templateId][t.version].dataProcessors.forEach(function(e){var r,s=((r={})[e]=t.consentStatus,r.event=o.default.CONSENT_CHANGED_EVENT+" "+e,r);n.push(s)}),n;console.error("Consent "+t.templateId+" with version "+t.version+" not found")},t.prototype.dispatchConsentChangeFinishedEvent=function(e,n){var o=t.createConsentChangeFinishedEventForConsentArray(e,n);this.dispatchEvent(r.DataExchangeEventTypes.CONSENTS_CHANGED_FINISHED,o)},t.createConsentChangeFinishedEventForConsentArray=function(t,e){var n={event:o.default.CONSENTS_CHANGED_FINISHED};return t.forEach(function(t){if(e[t.templateId]&&e[t.templateId][t.version]){var r=e[t.templateId][t.version];for(var o in r.dataProcessors){if(Object.prototype.hasOwnProperty.call(r.dataProcessors,o))n[r.dataProcessors[o]]=t.consentStatus}}else console.error("Consent "+t.templateId+" with version "+t.version+" not found")}),n},t.prototype.dispatchEvent=function(e,n){var r=this,o=Object.keys(n);!o.length||1===o.length&&"event"===o[0]||this.dataExchangeArray.forEach(function(o){switch(o.type){case 1:t.isEventInDataExchangeElementArray(e,o.events)&&r.pushDataIntoGivenDatalayer(n,o.names);break;case 3:t.isEventInDataExchangeElementArray(e,o.events)&&r.updateGivenVariableWithData(n,o.names);break;case 4:t.isEventInDataExchangeElementArray(e,o.events)&&r.triggerGivenEventWithData(n,o.names)}})},t.updatePrivacyProxy=function(t){"object"==typeof window.uc&&"function"==typeof window.uc.setStatus&&t.forEach(function(t){window.uc.setStatus(t.templateId,t.consentStatus)})},t.prototype.pushDataIntoGivenDatalayer=function(t,e){var n=this;e.forEach(function(e){var r=window[e]||[],o=e.split(".");if(o&&o.length>1)window[o[0]]=window[o[0]]||{},n.setValueInSubObject(window,o,t,!0);else{if(!Array.isArray(r)&&!r.hasOwnProperty("push"))return void console.error(e+" should be an array or object with push function, but its value is ",r);r.push(t),window[e]=r}})},t.prototype.triggerGivenEventWithData=function(t,e){e.forEach(function(e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),n.event=t.event,n.data=t,window.dispatchEvent(n)})},t.prototype.updateGivenVariableWithData=function(t,e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=e[n],o=r.split(".");o&&o.length>1?(window[o[0]]=window[o[0]]||{},this.setValueInSubObject(window,o,t)):window[r]=t}},t.prototype.setValueInSubObject=function(t,e,n,r){if(e.length>1){t[e[0]]=t[e[0]]||{};var o=t[e[0]];e.shift(),this.setValueInSubObject(o,e,n,r)}else if(r){if(t[e[0]]=t[e[0]]||[],!Array.isArray(t[e[0]])&&!t[e[0]].hasOwnProperty("push"))return void console.error(e[0]+" should be an array or object with push function, but its value is ",t[e[0]]);t[e[0]].push(n)}else t[e[0]]=n},t.isEventInDataExchangeElementArray=function(t,e){return-1!==e.indexOf(t)},t}();e.default=s},11:function(t){var e;e=function(){return this}();try{e=e||Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},13:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.USC_ORIGIN_SERVER="from server setting",t.USC_ORIGIN_LOCAL="from local storage",t.CONSENT_INITIALIZED_EVENT="consents_initialized",t.CONSENT_CHANGED_EVENT="consent_changed",t.CONSENTS_CHANGED_FINISHED="consents_changed_finished",t.all_consents_given_status="all_consents_given_status",t.BASE_URL="https://app.usercentrics.eu",t.LATEST_CONSENT_STRING_VERSION=1,t.USERCENTRICS_STRING="usercentrics",t.EU_COUNTRIES=["AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","GB"],t}();e.default=n},218:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),o=n(219),s=n(37),i=function(t,e){var n,r=t.split(":");if(c(r),1===r.length)n=0;else if(e&&e.settingsId&&r.indexOf(e.settingsId)>-1)n=r.indexOf(e.settingsId);else{n=Math.floor(Math.random()*r.length);var o=localStorage.getItem("ucSettings");if(null!==o)try{for(var s=JSON.parse(o),i=0;r.length>i;i++)if(s.hasOwnProperty(r[i])){n=i;break}}catch(t){console.error(t)}}return r[n]},a=function(t,e){try{localStorage.setItem(t,e)}catch(e){console.warn("UC Warning: localstoage failed for key "+t),console.warn(e)}},c=function(t){var e=localStorage.getItem("usercentrics"),n=e?JSON.parse(e):{};n.settingsIds=t,a("usercentrics",JSON.stringify(n))},u=function(t){var e=localStorage.getItem("usercentrics"),n=null;if(!e)return n;var r=JSON.parse(e);return r&&"object"==typeof r&&r.hasOwnProperty(t)?n=r[t]:n},l=function(t,e){if(!(window.usercentrics.settingsId||window.usercentrics.paths&&window.usercentrics.paths.settings))throw Error("No settingsId found");var n=u("settings");if(n){if(window.usercentrics.settingsId&&n.settingsId!==window.usercentrics.settingsId){localStorage.removeItem("usercentrics"),localStorage.removeItem("ucConsents");var r=localStorage.getItem("ucSettings");if(null!==r)try{var s=JSON.parse(r);s.hasOwnProperty(window.usercentrics.settingsId)&&(a("usercentrics",JSON.stringify(s[window.usercentrics.settingsId].usercentrics)),a("ucConsents",JSON.stringify(s[window.usercentrics.settingsId].ucConsents)))}catch(t){console.error(t)}}p(n)}var i=window.usercentrics.version,c=document.createElement("script");c.type="text/javascript",c.async=!0;window.usercentrics.paths&&window.usercentrics.paths.bundle?(window.usercentrics.baseUrl=t,c.setAttribute("src",window.usercentrics.paths.bundle)):e?(window.localhost=!0,t=o.WhitelistedDomainService.isLocalhost(window.location.hostname)?window.location.origin:"http://localhost:8080",window.usercentrics.baseUrl=t,c.setAttribute("src",t+"/bundle.js")):c.setAttribute("src",t+"/"+i+"/bundle.js"),document.head.appendChild(c)},d=function(){var t=localStorage.getItem("ucConsents");if(!t)return null;var e=JSON.parse(t);return e&&"object"==typeof e&&e.hasOwnProperty("consents")?e:null},f=function(t){var e=[],n=d();return n?(n.consents.forEach(function(r){if((void 0===t||r.templateId===t)&&void 0!==n.consentTemplates[r.templateId]&&void 0!==n.consentTemplates[r.templateId][r.version]){var o=n.consentTemplates[r.templateId][r.version];for(var s in o)r[s]=o[s];e.push(r)}}),e.sort(function(t,e){var n=t.dataProcessors[0].toUpperCase(),r=e.dataProcessors[0].toUpperCase();return r>n?-1:n>r?1:void 0}),void 0!==t&&e.length?e[0]:e):e},h=function(t,e,n){if(!t||localStorage&&localStorage.getItem("usercentrics"))window.usercentrics.isSinglePageApp?window.addEventListener("load",function(){l(e,n)}):document.head?l(e,n):document.addEventListener("DOMContentLoaded",function(){l(e,n)});else{var r=function(){return function(t,e,n){document.removeEventListener("mousemove",n,!1),document.removeEventListener("touchstart",n,!1),document.removeEventListener("keyup",n,!1),l(t,e)}(e,n,r)};document.addEventListener("mousemove",r,!1),document.addEventListener("touchstart",r,!1),document.addEventListener("keyup",r,!1)}},p=function(t){var e=d();if(e&&e.consents&&t){var n=new r.default;n.dataExchangeArray=t.dataExchangeOnPage,n.consentInitializedFromStorage(e.consents,e.consentTemplates),r.default.updatePrivacyProxy(e.consents);var o=new s.UcFortTagManagerService(!0);"complete"===document.readyState||"interactive"===document.readyState?o.updateScriptsTypeForConsents({consents:e.consents,consentTemplates:e.consentTemplates}):document.addEventListener("DOMContentLoaded",function(){o.updateScriptsTypeForConsents({consents:e.consents,consentTemplates:e.consentTemplates})})}};!function(){if(window.usercentrics=window.usercentrics||{},window.usercentrics.getConsents=f,!function(){var t=localStorage.getItem("usercentrics"),e=!1;if(null!==t)try{var n=JSON.parse(t);void 0!==n.blockLoading&&(e=n.blockLoading)}catch(r){console.warn(r)}if(void 0!==window.usercentrics.appLoaded&&window.usercentrics.appLoaded||e){var r,o=window.usercentrics.settingsId;return console.error("Tried to load Usercentrics twice. (Setting "+o+" already loaded) Second load is stopped"),!0}return!1}()){window.usercentrics.appLoaded=!0;var t=u("settings");window.usercentrics.settingsIds&&!window.usercentrics.settingsId&&(window.usercentrics.settingsId=i(window.usercentrics.settingsIds,t));var e="https://app.usercentrics.eu",n=!1,r="latest";if(window.usercentrics.paths&&window.usercentrics.paths.bundle)h(!1,e,n);else{var o=window.location.origin?window.location.origin:window.location.href;if(o.match(/http:\/\/localhost:([0-9]){2,4}/)||window.localhost||o.match(/http:\/\/10.0.2.2:([0-9]){2,4}/))return e=o,n=!0,window.usercentrics.version=r,window.usercentrics.settingsIds?window.usercentrics.settingsId=i(window.usercentrics.settingsIds,t):window.usercentrics.settingsId&&(window.usercentrics.settingsIds=window.usercentrics.settingsId),void h(!1,e,n);for(var s=document.getElementsByTagName("script"),a=0;s.length>a;a++){var c=s[a].getAttribute("id");if(s[a].src&&s[a].src.match(/https:\/\/app\.usercentrics\.eu\/([A-Za-z0-9_\-./])*\/main(-headless)?.js/g)){n=!1;var l=s[a].src.split("/");l.length>4&&(e=s[a].src.slice(0,s[a].src.indexOf(r=l[l.length-2])-1));var d=null;s[a].getAttribute("language")&&(d=s[a].getAttribute("language")),s[a].dataset&&void 0!==s[a].dataset.language&&(d=s[a].dataset.language),void 0!==window.usercentrics.defaultLanguage&&(d=window.usercentrics.defaultLanguage),null!==d&&null!==d&&""!==d&&"automatic"!==d&&(window.usercentrics.language=d.split("-")[0].toLowerCase()),window.usercentrics.baseUrl=e,c&&void 0!==c?(window.usercentrics.settingsIds=c,window.usercentrics.settingsId=i(c,t)):window.usercentrics.settingsId&&(window.usercentrics.settingsIds=window.usercentrics.settingsId),window.usercentrics.version=r,h(s[a].getAttribute("data-lazyload"),e,n);break}}window.usercentrics.version=r}}}()},219:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.WhitelistedDomainService=void 0;var n=function(){function t(){}return t.verifyDomain=function(t){var e=window.location.hostname;return!(-1===t.indexOf(e)&&!this.isLocalhost(window.location.hostname))&&(console.log("app is accessed from localhost"),!0)},t.isLocalhost=function(t){return["localhost","10.0.2.2"].some(function(e){return t===e})},t}();e.WhitelistedDomainService=n},23:function(t){function e(){throw Error("setTimeout has not been defined")}function n(){throw Error("clearTimeout has not been defined")}function r(t){if(c===setTimeout)return setTimeout(t,0);if((c===e||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function o(){h&&d&&(h=!1,d.length?f=d.concat(f):p=-1,f.length&&s())}function s(){if(!h){var t=r(o);h=!0;for(var e=f.length;e;){for(d=f,f=[];++p<e;)d&&d[p].run();p=-1,e=f.length}d=null,h=!1,function(t){if(u===clearTimeout)return clearTimeout(t);if((u===n||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(t);try{u(t)}catch(e){try{return u.call(null,t)}catch(e){return u.call(this,t)}}}(t)}}function i(t,e){this.fun=t,this.array=e}function a(){}var c,u,l=t.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:e}catch(t){c=e}try{u="function"==typeof clearTimeout?clearTimeout:n}catch(t){u=n}}();var d,f=[],h=!1,p=-1;l.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;arguments.length>n;n++)e[n-1]=arguments[n];f.push(new i(t,e)),1!==f.length||h||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=a,l.addListener=a,l.once=a,l.off=a,l.removeListener=a,l.removeAllListeners=a,l.emit=a,l.prependListener=a,l.prependOnceListener=a,l.listeners=function(){return[]},l.binding=function(){throw Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(){throw Error("process.chdir is not supported")},l.umask=function(){return 0}},30:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DataExchangeEventTypes=void 0,function(t){t.CONSENTS_INITIALIZED_STORAGE="consents_initialized_storage",t.CONSENTS_INITIALIZED_SERVER="consents_initialized_setting",t.CONSENTS_CHANGED_FINISHED="consents_changed finished",t.CONSENT_CHANGED="consents_changed",t.SPECIFIC_CONSENT_CHANGED="specific_consents_changed",t.all_consents_given_status="all_consents_given_status",t.CATEGORY_CHANGED="category_status_changed",t.SPECIFIC_CATEGORY_CHANGED="specific_category_status_changed"}(e.DataExchangeEventTypes||(e.DataExchangeEventTypes={}))},37:function(t,e,n){"use strict";(function(t){var n=this&&this.__awaiter||function(e,n,r,o){return new(r||(r=t))(function(t,s){function i(t){try{c(o.next(t))}catch(t){s(t)}}function a(t){try{c(o.throw(t))}catch(t){s(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r(function(t){t(n)})).then(i,a)}c((o=o.apply(e,n||[])).next())})},r=this&&this.__generator||function(t,e){function n(n){return function(i){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(s=2&n[0]?o.return:n[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,n[1])).done)return s;switch(o=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,o=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(s=(s=a.trys).length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&s[3]>n[1])){a.label=n[1];break}if(6===n[0]&&s[1]>a.label){a.label=s[1],s=n;break}if(s&&s[2]>a.label){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],o=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,i])}}var r,o,s,i,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i};Object.defineProperty(e,"__esModule",{value:!0}),e.UcFortTagManagerService=void 0;var o=function(){function e(t){this.isFromMainScript=t,this.isTagExecuted={},this.isConsentExecuted={},t?window.usercentrics.isConsentExecuted={}:window.usercentrics.isConsentExecuted&&(this.isConsentExecuted=window.usercentrics.isConsentExecuted,delete window.usercentrics.isConsentExecuted)}return e.prototype.updateScriptsTypeForConsents=function(t){var e=this;t.consents.forEach(function(n){e.updateScriptsTypeForConsent(n,t.consentTemplates[n.templateId]&&t.consentTemplates[n.templateId][n.version]?t.consentTemplates[n.templateId][n.version]:null)})},e.prototype.updateScriptsTypeForConsent=function(t,e){return n(this,void 0,void 0,function(){var n,o,s;return r(this,function(r){switch(r.label){case 0:if(!t||!e||!e.dataProcessors||this.isConsentExecuted[t.templateId])return[2];if(!(n=document.querySelectorAll("[data-usercentrics='"+e.dataProcessors[0]+"']"))||!n.length)return[3,4];this.isFromMainScript?window.usercentrics.isConsentExecuted[t.templateId]=t.unsavedConsentStatus:this.isConsentExecuted[t.templateId]=t.unsavedConsentStatus,o=Array.from(n),s=0,r.label=1;case 1:return o.length>s?[4,this.updateScriptTypeForConsent(o[s],t)]:[3,4];case 2:r.sent(),r.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},e.prototype.updateScriptTypeForConsent=function(t,e){return n(this,void 0,void 0,function(){var n,o;return r(this,function(r){switch(r.label){case 0:return e.unsavedConsentStatus&&"text/plain"===t.getAttribute("Type")?this.isTagExecuted[t.getAttribute("src")]?(t.setAttribute("Type","text/javascript"),[2]):(n=t.parentNode,o=document.createElement("script"),Object.keys(t.attributes).forEach(function(e){var n=t.attributes[e].name;o.setAttribute(n,t.getAttribute(n))}),o.setAttribute("Type","text/javascript"),t.getAttribute("src")?this.isTagExecuted[t.getAttribute("src")]=!0:t.textContent&&(o.textContent=t.textContent),n.removeChild(t),n.appendChild(o),t.getAttribute("src")?[4,this.loadScript(o)]:[3,2]):[3,3];case 1:r.sent(),r.label=2;case 2:return[3,4];case 3:e.unsavedConsentStatus?t.getAttribute("src")&&(this.isTagExecuted[t.getAttribute("src")]=!0):t.setAttribute("Type","text/plain"),r.label=4;case 4:return[2]}})})},e.prototype.loadScript=function(e){return n(this,void 0,void 0,function(){return r(this,function(){return[2,new t(function(t){e.onload=function(){t()},e.onerror=function(){t()}})]})})},e}();e.UcFortTagManagerService=o}).call(this,n(5))},5:function(t,e,n){var r,o;r=n(23),o=n(11),t.exports=function(){"use strict";function t(t){return"function"==typeof t}function e(){var t=setTimeout;return function(){return t(n,1)}}function n(){for(var t=0;I>t;t+=2)(0,D[t])(D[t+1]),D[t]=void 0,D[t+1]=void 0;I=0}function s(t,e){var n=this,r=new this.constructor(a);void 0===r[j]&&g(r);var o=n._state;if(o){var s=arguments[o-1];C(function(){return v(o,r,s,n._result)})}else h(n,r,t,e);return r}function i(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(a);return u(e,t),e}function a(){}function c(e,n,r){n.constructor===e.constructor&&r===s&&n.constructor.resolve===i?function(t,e){e._state===G?d(t,e._result):e._state===F?f(t,e._result):h(e,void 0,function(e){return u(t,e)},function(e){return f(t,e)})}(e,n):void 0===r?d(e,n):t(r)?function(t,e,n){C(function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?u(t,n):d(t,n))},function(e){r||(r=!0,f(t,e))});!r&&o&&(r=!0,f(t,o))},t)}(e,n,r):d(e,n)}function u(t,e){if(t===e)f(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)d(t,e);else{var n=void 0;try{n=e.then}catch(e){return void f(t,e)}c(t,e,n)}var r,o}function l(t){t._onerror&&t._onerror(t._result),p(t)}function d(t,e){t._state===L&&(t._result=e,t._state=G,0!==t._subscribers.length&&C(p,t))}function f(t,e){t._state===L&&(t._state=F,t._result=e,C(l,t))}function h(t,e,n,r){var o=t._subscribers,s=o.length;t._onerror=null,o[s]=e,o[s+G]=n,o[s+F]=r,0===s&&t._state&&C(p,t)}function p(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,s=t._result,i=0;e.length>i;i+=3)o=e[i+n],(r=e[i])?v(n,r,o,s):o(s);t._subscribers.length=0}}function v(e,n,r,o){var s=t(r),i=void 0,a=void 0,c=!0;if(s){try{i=r(o)}catch(t){c=!1,a=t}if(n===i)return void f(n,new TypeError("A promises callback cannot return that same promise."))}else i=o;n._state!==L||(s&&c?u(n,i):!1===c?f(n,a):e===G?d(n,i):e===F&&f(n,i))}function g(t){t[j]=R++,t._state=void 0,t._result=void 0,t._subscribers=[]}var w,y,E,m,_=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},I=0,b=void 0,S=void 0,C=function(t,e){D[I]=t,D[I+1]=e,2===(I+=2)&&(S?S(n):P())},T="undefined"!=typeof window?window:void 0,N=T||{},A=N.MutationObserver||N.WebKitMutationObserver,O="undefined"==typeof self&&void 0!==r&&"[object process]"==={}.toString.call(r),x="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,D=Array(1e3),P=void 0;O?P=function(){return r.nextTick(n)}:A?(y=0,E=new A(n),m=document.createTextNode(""),E.observe(m,{characterData:!0}),P=function(){m.data=y=++y%2}):x?((w=new MessageChannel).port1.onmessage=n,P=function(){return w.port2.postMessage(0)}):P=void 0===T?function(){try{var t=Function("return this")().require("vertx");return void 0!==(b=t.runOnLoop||t.runOnContext)?function(){b(n)}:e()}catch(t){return e()}}():e();var j=Math.random().toString(36).substring(2),L=void 0,G=1,F=2,R=0,M=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(a),this.promise[j]||g(this.promise),_(e)?(this.length=e.length,this._remaining=e.length,this._result=Array(this.length),0===this.length?d(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&d(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===L&&t.length>e;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===i){var o=void 0,u=void 0,l=!1;try{o=t.then}catch(t){l=!0,u=t}if(o===s&&t._state!==L)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===H){var d=new n(a);l?f(d,u):c(d,t,o),this._willSettleAt(d,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===L&&(this._remaining--,t===F?f(r,n):this._result[e]=n),0===this._remaining&&d(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;h(t,void 0,function(t){return n._settledAt(G,e,t)},function(t){return n._settledAt(F,e,t)})},t}(),H=function(){function e(t){this[j]=R++,this._result=this._state=void 0,this._subscribers=[],a!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){u(t,e)},function(e){f(t,e)})}catch(e){f(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return H.prototype.then=s,H.all=function(t){return new M(this,t).promise},H.race=function(t){var e=this;return _(t)?new e(function(n,r){for(var o=t.length,s=0;o>s;s++)e.resolve(t[s]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},H.resolve=i,H.reject=function(t){var e=new this(a);return f(e,t),e},H._setScheduler=function(t){S=t},H._setAsap=function(t){C=t},H._asap=C,H.polyfill=function(){var t=void 0;if(void 0!==o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=H},H.Promise=H,H}()}});