!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var o={name:null,iconClass:null,uniqueClassName:null,canBeSavedToLibrary:!1,settingsCssPath:null,previewCssPath:null,i18n:{},blockName:null,emptyContainerIcon:!1,blockType:null,blockConfigAttributeNames:[],controlsToCreate:[],blockControls:[],isEnabled:function(){return!0},emailInitialized:function(e){},onSelectBlock:function(e){},getBlockLayoutToDrop:function(){return"<td>Default block</td>"},blockDropped:function(e){},getBlockLabel:function(e){return"Default block"},getDefaultSettingsPanelState:function(e){return{}},onCleanLayout:function(e,t){},onBlockCopy:function(e,t){}},r="".concat("demoAlertBlock","_backgroundColor_control"),l="".concat("demoAlertBlock","_titleTextColor_control"),i={en:{"block.name":"Useful links","preview.links.title":"Useful links","settings.controls.bgColor.label":"Card background color","settings.controls.titleTextColor.label":"Title text color"},ru:{"block.name":"Полезные ссылки","preview.links.title":"Полезные ссылки","settings.controls.bgColor.label":"Цвет фона карточки товара","settings.controls.titleTextColor.label":"Цвет заголока"}},c={name:r,getTargetElements:function(){return[this.initialDomElement]},getInitialColor:function(){return this.getTargetElements()[0].getAttribute("bgcolor")}},a={name:l,getTargetElements:function(){return this.initialDomElement.querySelectorAll(".esd-title")},getLabel:function(){return this.extension.stripoApi.translate("settings.controls.titleTextColor.label")}};function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={create:function(e,t,n){return Object.assign(s(s({stripoConfig:e,stripoApi:t,extensionBasePath:n},o),function(e,t,n){function o(){return e.alertBlocks&&e.alertBlocks.enabled}function u(t){t.find("ul").remove();var n="<ul>";e.usefulLinksBlock.items.forEach((function(e){n+='<li><a target="_blank" href="'.concat(e.link,'">').concat(e.label,"</a></li>")})),n+="</ul>",t.append(n)}return{name:"AlertDemoBlock",iconClass:"es-icon-alert-block",uniqueClassName:"esd-alert-block",canBeSavedToLibrary:!1,settingsCssPath:"/assets/css/settings.css",i18n:i,blockName:"block.name",emptyContainerIcon:!1,blockType:"block",controlsToCreate:[{control:c,parentControlName:"stripoBackgroundColorControl"},{control:a,parentControlName:"stripoFontColorControl"}],blockControls:[r,l],isEnabled:o,emailInitialized:function(e){if(o()){var n=e.find(".".concat("esd-alert-block"));n.length&&n.each((function(){u(t.jQuery(this))}))}},getBlockLayoutToDrop:function(){return'<td align="left">\n    <span class="esd-title"><p style="color: #333333;">#USEFUL_LINKS#:</p></span>\n</td>'.replace(/#USEFUL_LINKS#/g,t.translate("preview.links.title"))},blockDropped:function(e){u(e)},getBlockLabel:function(e){return t.translate("block.name")}}}(e,t)))}};self.AlertBlockExtension=b}]);