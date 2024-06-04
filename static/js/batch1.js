WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"\u63d2\u5165Jira\u95ee\u9898/\u8fc7\u6ee4\u5668"+":",keys:[["Ctrl+Shift+J"]]})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function($) {
    // Add the shortcut to the shortcuts dialog
    Confluence.KeyboardShortcuts && Confluence.KeyboardShortcuts.Autoformat.push(
        {
            action: "@",
            context: "autoformat.autocomplete",
            description: "\u63d0\u5230"
        });
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:footer-analytics', location = '/js/confluence-dashboard/utils/footer-analytics.js' */
define("confluence-dashboard/utils/footer-analytics",["jquery","ajs","confluence/meta"],function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=n(e).default,c=n(a).default,i=n(t).default;c.toInit(function(){var e=i.get("page-id"),a=o("body").hasClass("dashboard");o("#footer").on("click","a",function(){c.trigger("analytics",{name:"confluence.footer.item.click",data:{pageId:e,isDashboard:a}})})})}),require(["confluence-dashboard/utils/footer-analytics"]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-src-js-aui-dialog2', location = 'src/js/aui/dialog2.js' */
("undefined"===typeof window?global:window).__df7047d25e7ae0c2f22a17f939177597=function(){function f(a){return a&&a.__esModule?a:{"default":a}}function e(a){var c=this.$el=a?(0,g.default)(a):(0,g.default)(aui.dialog.dialog2({}));g.default.each(i,function(a,b){var d="data-"+a;c[0].hasAttribute(d)||c.attr(d,b)})}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var g=f(__700a145ba3db9966cc95664c892049f8),j=f(__65ca28a9d6b0f244027266ff8e6a6d1c),k=f(__28c84e7bb75f6c3b0ba124d57bd69571),
b=f(__3ada4a8272640e5242be87f12c7e0fdf),l=f(__d2e8fc66dac2ecebdc205fcab991f687),i={"aui-focus":"false","aui-blanketed":"true"};e.prototype.on=function(a,c){(0,b.default)(this.$el).on(a,c);return this};e.prototype.off=function(a,c){(0,b.default)(this.$el).off(a,c);return this};e.prototype.show=function(){(0,b.default)(this.$el).show();return this};e.prototype.hide=function(){(0,b.default)(this.$el).hide();return this};e.prototype.remove=function(){(0,b.default)(this.$el).remove();return this};e.prototype.isVisible=
function(){return(0,b.default)(this.$el).isVisible()};var d=(0,l.default)("dialog2",e);d.on=function(a,c){b.default.on(a,".aui-dialog2",c);return this};d.off=function(a,c){b.default.off(a,".aui-dialog2",c);return this};(0,g.default)(document).on("click",".aui-dialog2-header-close",function(a){a.preventDefault();d((0,g.default)(this).closest(".aui-dialog2")).hide()});d.on("show",function(a,c){var b;[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"].some(function(a){b=c.find(a+" :aui-tabbable");
return b.length});b&&b.first().focus()});d.on("hide",function(a,c){var d=(0,b.default)(c);c.data("aui-remove-on-hide")&&d.remove()});(0,j.default)("aui/dialog2",d);(0,k.default)("dialog2",d);h.default=d;return h=h["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'src/soy/dialog2.soy' */
// This file was automatically generated from dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.dialog.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dialog == 'undefined') { aui.dialog = {}; }


aui.dialog.dialog2 = function(opt_data, opt_ignored) {
  return '' + aui.dialog.dialog2Chrome({id: opt_data.id, titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, modal: opt_data.modal, tagName: opt_data.tagName, removeOnHide: opt_data.removeOnHide, visible: opt_data.visible, size: opt_data.size, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: '' + aui.dialog.dialog2Content({id: null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, headerActionContent: opt_data.headerActionContent, headerSecondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal, content: opt_data.content, footerHintText: opt_data.footerHintText, footerHintContent: opt_data.footerHintContent, footerActionContent: opt_data.footerActionContent})});
};
if (goog.DEBUG) {
  aui.dialog.dialog2.soyTemplateName = 'aui.dialog.dialog2';
}


aui.dialog.dialog2Chrome = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.titleId) ? ' aria-labelledby="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'medium') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.modal) ? 'data-aui-modal="true"' : '') + ((opt_data.removeOnHide) ? 'data-aui-remove-on-hide="true"' : '') + ((opt_data.visible != true) ? 'aria-hidden="true"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + '>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Chrome.soyTemplateName = 'aui.dialog.dialog2Chrome';
}


aui.dialog.dialog2Content = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + aui.dialog.dialog2Header({titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, actionContent: opt_data.headerActionContent, secondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal}) + aui.dialog.dialog2Panel(opt_data) + aui.dialog.dialog2Footer({hintText: opt_data.footerHintText, hintContent: opt_data.footerHintContent, actionContent: opt_data.footerActionContent});
};
if (goog.DEBUG) {
  aui.dialog.dialog2Content.soyTemplateName = 'aui.dialog.dialog2Content';
}


aui.dialog.dialog2Header = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<header' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-header' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><h2 ' + ((opt_data.titleId) ? ' id="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' class="aui-dialog2-header-main">' + ((opt_data.titleText) ? soy.$$escapeHtml(opt_data.titleText) : '') + ((opt_data.titleContent) ? soy.$$filterNoAutoescape(opt_data.titleContent) : '') + '</h2>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-header-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.secondaryContent) ? '<div class="aui-dialog2-header-secondary">' + soy.$$filterNoAutoescape(opt_data.secondaryContent) + '</div>' : '') + ((opt_data.modal != true) ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml('\u5173\u95ed') + '</span></a>' : '') + '</header>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Header.soyTemplateName = 'aui.dialog.dialog2Header';
}


aui.dialog.dialog2Footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<footer' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-footer' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-footer-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.hintText || opt_data.hintContent) ? '<div class="aui-dialog2-footer-hint">' + ((opt_data.hintText) ? soy.$$escapeHtml(opt_data.hintText) : '') + ((opt_data.hintContent) ? soy.$$filterNoAutoescape(opt_data.hintContent) : '') + '</div>' : '') + '</footer>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Footer.soyTemplateName = 'aui.dialog.dialog2Footer';
}


aui.dialog.dialog2Panel = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-content' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Panel.soyTemplateName = 'aui.dialog.dialog2Panel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/js/page-loading-indicator.js' */
define("confluence/page-loading-indicator",["jquery","underscore","ajs","confluence/templates"],function(c,g,a,h){return function(b){function d(){return c(".confluence-page-loading-blanket",b)}function e(){return c(".confluence-loading-indicator",b)}return{show:function(){0===d().length&&c(b).append(h.pageLoadingIndicator());d().show();e().spin({lines:12,length:8,width:4,radius:10,trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){e().stop();d().hide()},showUntilResolved:function(c,b){this.show();
c.always(g.bind(this.hide,this));b&&c.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:b})})},showUntilDialogVisible:function(b,d){var f=this,e=d||"\u8fde\u63a5\u5230\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002",g=c(".aui-dialog:visible"),h=c(".aui-dialog2:visible");!g.length&&!h.length&&f.show();b.always(f.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",{body:e})});a.bind("show.dialog",function i(){a.unbind("show.dialog",i);f.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",
function j(){a.dialog2.off("show",j);f.hide()})},destroy:function(){b.remove(".confluence-page-loading-blanket")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-loading-indicator","Confluence.PageLoadingIndicator");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.pageLoadingIndicator.soyTemplateName = 'Confluence.Templates.pageLoadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/deferred-dialog-loader.js' */
define("confluence/deferred-dialog-loader",["underscore","jquery","ajs","confluence/page-loading-indicator","confluence/api/event"],function(a,d,e,g,f){return function(){var h=g(d("body"));a.each({userStatus:{resource:"confluence.userstatus:userstatus-resources",selector:"#create-user-status-link",event:"deferred.userstatus.click"},movePageDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-page-dialog-link",event:"deferred.page-move.tools-menu"},movePageDialogEditor:{resource:"confluence.web.resources:page-move-resources",
selector:"#rte-button-location",event:"deferred.page-move.editor"},moveBlogDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-blogpost-dialog-link",event:"deferred.blog-move.tools-menu"},availableGadgetsHelp:{resource:"com.atlassian.confluence.plugins.gadgets:gadget-directory-resources",selector:"#gadget-directory-link",event:"deferred.available-gadgets.help-menu"},aboutConfluenceHelp:{resource:"confluence.web.resources:about",selector:"#confluence-about-link",
event:"deferred.about-confluence.help-menu"}},function(b){d("body").on("click",b.selector,function(a){var c=WRM.require("wr!"+b.resource,function(){f.trigger(b.event)});h.showUntilDialogVisible(c);c=b.resource+".requested";e.Analytics?e.Analytics.triggerPrivacyPolicySafeEvent(c):f.trigger("analyticsEvent",{name:c});a.preventDefault()})})}});require("confluence/module-exporter").safeRequire("confluence/deferred-dialog-loader",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/page-permissions-deferred-loader.js' */
define("confluence/page-permissions-deferred-loader","confluence/dark-features confluence/legacy ajs confluence/page-loading-indicator jquery wrm".split(" "),function(a,b,c,d,e,f){var g=d(e("body"));return function(a){var b=f.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){c.trigger("deferred.page.permissions")});g.showUntilDialogVisible(b,"\u88c5\u8f7d\u9875\u9762\u9650\u5236\u65f6\u51fa\u9519\uff0c\u8bf7\u91cd\u65b0\u5c1d\u8bd5\u3002");a.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(a){var b=require("ajs");b.toInit(function(c){c("body").on("click","#rte-button-restrictions,#action-page-permissions-link",a);b.bind("system-content-metadata.open-restrictions-dialog",a)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:navigator-context', location = '/includes/js/api/navigator-context.js' */
define("confluence/api/navigator-context",["confluence/meta","document"],function(g,b){var h=function(a){a=d(a);return"undefined"!==typeof a&&0!==a},d=function(a){a=g.get(a);if(!isNaN(a))return Number(a)},i=function(){return!!b.querySelector(".page.view")||!!b.querySelector(".blogpost.view")},e=function(){return!!b.querySelector(".page.edit")||!!b.querySelector(".blogpost.edit")},f=function(){return g.get("content-type")},c=function(){return d("page-id")};return{getCurrent:function(){return e()&&
0===c()&&h("draft-id")?{target:"contentcreate",context:{contentId:d("draft-id"),contentType:f()}}:e()&&!i()&&0!==c()?{target:"contentedit",context:{contentId:c(),contentType:f()}}:!e()&&i()&&h("page-id")?{target:"contentview",context:{contentId:c(),contentType:f()}}:{target:"unknown",context:{}}}}});
}catch(e){WRMCB(e)};