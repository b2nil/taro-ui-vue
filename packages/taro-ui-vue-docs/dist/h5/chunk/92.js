(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"316":function(o,e,r){"use strict";r.r(e),r.d(e,"taro_web_view_core",(function(){return n}));var t=r(54),n=function(){function WebView(o){Object(t.g)(this,o),this.onLoad=Object(t.d)(this,"load",7),this.onError=Object(t.d)(this,"error",7)}return WebView.prototype.render=function(){var o=this.src,e=this.onLoad,r=this.onError;return Object(t.f)("iframe",{"class":"taro-webview","onLoad":function onLoad(r){r.stopPropagation(),e.emit({"src":o})},"onError":function onError(e){e.stopPropagation(),r.emit({"src":o})},"src":o})},Object.defineProperty(WebView,"style",{"get":function get(){return"iframe{border:none}.taro-webview{position:fixed;top:0;bottom:0;width:100%;height:100%;z-index:999}"},"enumerable":!0,"configurable":!0}),WebView}()}}]);