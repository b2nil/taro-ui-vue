(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"318":function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var c=t(2),n=t(3),l=t(10),i=t(11),s=t(4),o=t(82),r=t.n(o),m=t(23),p=t.n(m),_=t(317),u=(t(319),function(e){Object(l.a)(DocsHeader,e);var a=Object(i.a)(DocsHeader);function DocsHeader(){return Object(c.a)(this,DocsHeader),a.apply(this,arguments)}return Object(n.a)(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return p.a.createElement(_.View,{"className":"doc-header"},p.a.createElement(_.View,{"className":"doc-header__title"},e))}}]),DocsHeader}(p.a.Component));Object(s.a)(u,"defaultProps",void 0),Object(s.a)(u,"propTypes",void 0),u.defaultProps={"title":"标题"},u.propTypes={"title":r.a.string}},"319":function(e,a,t){},"351":function(e,a,t){},"458":function(e,a,t){"use strict";t.r(a);var c=t(2),n=t(3),l=t(18),i=t(10),s=t(11),o=t(4),r=t(23),m=t.n(r),p=t(320),_=t(317),u=t(318),w={"main":["analytics","bell","blocked","bookmark","bullet-list","calendar","add-circle","subtract-circle","check-circle","close-circle","add","subtract","check","close","clock","credit-card","download-cloud","download","equalizer","external-link","eye","filter","folder","heart","heart-2","star","star-2","help","alert-circle","home","iphone-x","iphone","lightning-bolt","link","list","lock","mail","map-pin","menu","message","money","numbered-list","phone","search","settings","share-2","share","shopping-bag-2","shopping-bag","shopping-cart","streaming","tag","tags","trash","upload","user","loading","loading-2","loading-3"],"file":["file-audio","file-code","file-generic","file-jpg","file-new","file-png","file-svg","file-video"],"text":["align-center","align-left","align-right","edit","font-color","text-italic","text-strikethrough","text-underline"],"arrow":["arrow-up","arrow-down","arrow-left","arrow-right","chevron-up","chevron-down","chevron-left","chevron-right"],"media":["play","pause","stop","prev","next","reload","repeat-play","shuffle-play","playlist","sound","volume-off","volume-minus","volume-plus"],"photo":["camera","image","video"],"logo":["sketch"]};t(351);t.d(a,"default",(function(){return E}));var E=function(e){Object(i.a)(IconPage,e);var a=Object(s.a)(IconPage);function IconPage(e){var t;return Object(c.a)(this,IconPage),t=a.call(this,e),Object(o.a)(Object(l.a)(t),"config",{"navigationBarTitleText":"Taro UI"}),t.state={"icons":w},t}return Object(n.a)(IconPage,[{"key":"render","value":function render(){var e=this.state.icons;return m.a.createElement(_.View,{"className":"page"},m.a.createElement(u.a,{"title":"ICON 图标"}),m.a.createElement(_.View,{"className":"doc-body"},m.a.createElement(_.View,{"className":"panel"},m.a.createElement(_.View,{"className":"panel__title"},"主要"),m.a.createElement(_.View,{"className":"panel__content"},m.a.createElement(_.View,{"className":"icon-list"},e.main.map((function(e,a){return m.a.createElement(_.View,{"className":"icon-list__item","key":"at-icon-".concat(a)},m.a.createElement(_.View,{"className":"icon-list__icon"},m.a.createElement(p.AtIcon,{"value":e,"color":"#999","size":30})),m.a.createElement(_.View,{"className":"icon-list__name"},e))}))))),m.a.createElement(_.View,{"className":"panel"},m.a.createElement(_.View,{"className":"panel__title"},"文件"),m.a.createElement(_.View,{"className":"panel__content"},m.a.createElement(_.View,{"className":"icon-list"},e.file.map((function(e,a){return m.a.createElement(_.View,{"className":"icon-list__item","key":"at-icon-".concat(a)},m.a.createElement(_.View,{"className":"icon-list__icon"},m.a.createElement(p.AtIcon,{"value":e,"color":"#999","size":30})),m.a.createElement(_.View,{"className":"icon-list__name"},e))}))))),m.a.createElement(_.View,{"className":"panel"},m.a.createElement(_.View,{"className":"panel__title"},"文本"),m.a.createElement(_.View,{"className":"panel__content"},m.a.createElement(_.View,{"className":"icon-list"},e.text.map((function(e,a){return m.a.createElement(_.View,{"className":"icon-list__item","key":"at-icon-".concat(a)},m.a.createElement(_.View,{"className":"icon-list__icon"},m.a.createElement(p.AtIcon,{"value":e,"color":"#999","size":30})),m.a.createElement(_.View,{"className":"icon-list__name"},e))}))))),m.a.createElement(_.View,{"className":"panel"},m.a.createElement(_.View,{"className":"panel__title"},"箭头"),m.a.createElement(_.View,{"className":"panel__content"},m.a.createElement(_.View,{"className":"icon-list"},e.arrow.map((function(e,a){return m.a.createElement(_.View,{"className":"icon-list__item","key":"at-icon-".concat(a)},m.a.createElement(_.View,{"className":"icon-list__icon"},m.a.createElement(p.AtIcon,{"value":e,"color":"#999","size":30})),m.a.createElement(_.View,{"className":"icon-list__name"},e))}))))),m.a.createElement(_.View,{"className":"panel"},m.a.createElement(_.View,{"className":"panel__title"},"媒体控制"),m.a.createElement(_.View,{"className":"panel__content"},m.a.createElement(_.View,{"className":"icon-list"},e.media.map((function(e,a){return m.a.createElement(_.View,{"className":"icon-list__item","key":"at-icon-".concat(a)},m.a.createElement(_.View,{"className":"icon-list__icon"},m.a.createElement(p.AtIcon,{"value":e,"color":"#999","size":30})),m.a.createElement(_.View,{"className":"icon-list__name"},e))}))))),m.a.createElement(_.View,{"className":"panel"},m.a.createElement(_.View,{"className":"panel__title"},"多媒体"),m.a.createElement(_.View,{"className":"panel__content"},m.a.createElement(_.View,{"className":"icon-list"},e.photo.map((function(e,a){return m.a.createElement(_.View,{"className":"icon-list__item","key":"at-icon-".concat(a)},m.a.createElement(_.View,{"className":"icon-list__icon"},m.a.createElement(p.AtIcon,{"value":e,"color":"#999","size":30})),m.a.createElement(_.View,{"className":"icon-list__name"},e))}))))),m.a.createElement(_.View,{"className":"panel"},m.a.createElement(_.View,{"className":"panel__title"},"Logo"),m.a.createElement(_.View,{"className":"panel__content"},m.a.createElement(_.View,{"className":"icon-list"},e.logo.map((function(e,a){return m.a.createElement(_.View,{"className":"icon-list__item","key":"at-icon-".concat(a)},m.a.createElement(_.View,{"className":"icon-list__icon"},m.a.createElement(p.AtIcon,{"value":e,"color":"#999","size":30})),m.a.createElement(_.View,{"className":"icon-list__name"},e))})))))))}}]),IconPage}(m.a.Component)}}]);