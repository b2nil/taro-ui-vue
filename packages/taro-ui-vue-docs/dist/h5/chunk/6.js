(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"317":function(e,t,r){"use strict";r.r(t);var n=r(321),o=r.n(n),a=r(9),c=r.n(a),i=r(325),u=r.n(i),f=r(329),s=r.n(f),l=r(330),p=r.n(l),d=r(331),y=r.n(d),m=r(333),v=r.n(m),b=r(335),h=r.n(b),w=r(336),O=r.n(w),g=r(23),j=r.n(g);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var o=h()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v()(this,r)}}j.a.createElement;var _=function reactifyWebComponent(e){var t=function(t){y()(Index,t);var r=_createSuper(Index);function Index(e){var t;return s()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(g.createRef)(),t}return p()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),Object.entries(this.props).forEach((function(n){var o=u()(n,2),a=o[0],i=o[1];if(r.ref.current&&"children"!==a)if("classname"!==a.toLowerCase())if("style"!==a){if("taro-scroll-view-core"===e){if("scrollTop"===a)return void(r.ref.current.mpScrollTop=i);if("scrollLeft"===a)return void(r.ref.current.mpScrollLeft=i);if("scrollIntoView"===a)return void(r.ref.current.mpScrollIntoView=i)}if("function"==typeof i&&a.match(/^on[A-Z]/)){var f=a.substr(2).toLowerCase(),s=i;return"taro-scroll-view-core"===e&&"scroll"===f&&(s=function fn(e){e instanceof CustomEvent&&i.apply(null,Array.from(arguments))}),r.eventHandlers.push([f,s]),r.ref.current.addEventListener(f,s)}if("string"!=typeof i&&"number"!=typeof i)return"boolean"==typeof i?i?(r.ref.current[a]=!0,r.ref.current.setAttribute(a,i)):(r.ref.current[a]=!1,r.ref.current.removeAttribute(a)):void(r.ref.current[a]=i);r.ref.current[a]=i}else{if("string"==typeof i)return r.ref.current.setAttribute(a,i);if(i&&"object"===c()(i)){for(var l in i)r.ref.current.style[l]=i[l];return}}else r.ref.current.className=t?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return n.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&c.push(e)})),(c=[].concat(O()(c),O()(a))).join(" ")}(r.ref.current,t,r.props):i}))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===c()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=u()(t,2),n=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),Object(g.createElement)(e,o,r)}}]),Index}(j.a.Component);return j.a.forwardRef((function(e,r){return j.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=_("taro-input-core"),x=(j.a.createElement,j.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),j.a.createElement(P,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))})));r.d(t,"View",(function(){return E})),r.d(t,"Icon",(function(){return S})),r.d(t,"Progress",(function(){return k})),r.d(t,"RichText",(function(){return I})),r.d(t,"Text",(function(){return V})),r.d(t,"Button",(function(){return A})),r.d(t,"Checkbox",(function(){return C})),r.d(t,"CheckboxGroup",(function(){return D})),r.d(t,"Editor",(function(){return T})),r.d(t,"Form",(function(){return N})),r.d(t,"Input",(function(){return H})),r.d(t,"Label",(function(){return R})),r.d(t,"Picker",(function(){return L})),r.d(t,"PickerView",(function(){return M})),r.d(t,"PickerViewColumn",(function(){return W})),r.d(t,"Radio",(function(){return K})),r.d(t,"RadioGroup",(function(){return U})),r.d(t,"Slider",(function(){return B})),r.d(t,"Switch",(function(){return F})),r.d(t,"CoverImage",(function(){return Y})),r.d(t,"Textarea",(function(){return G})),r.d(t,"CoverView",(function(){return J})),r.d(t,"MoveableArea",(function(){return z})),r.d(t,"MoveableView",(function(){return Z})),r.d(t,"ScrollView",(function(){return $})),r.d(t,"Swiper",(function(){return q})),r.d(t,"SwiperItem",(function(){return Q})),r.d(t,"FunctionalPageNavigator",(function(){return X})),r.d(t,"Navigator",(function(){return ee})),r.d(t,"Audio",(function(){return te})),r.d(t,"Camera",(function(){return re})),r.d(t,"Image",(function(){return ne})),r.d(t,"LivePlayer",(function(){return oe})),r.d(t,"Video",(function(){return ae})),r.d(t,"Map",(function(){return ce})),r.d(t,"Canvas",(function(){return ie})),r.d(t,"Ad",(function(){return ue})),r.d(t,"OfficialAccount",(function(){return fe})),r.d(t,"OpenData",(function(){return se})),r.d(t,"WebView",(function(){return le})),r.d(t,"NavigationBar",(function(){return pe})),r.d(t,"Block",(function(){return de}));var E=_("taro-view-core"),S=_("taro-icon-core"),k=_("taro-progress-core"),I=_("taro-rich-text-core"),V=_("taro-text-core"),A=_("taro-button-core"),C=_("taro-checkbox-core"),D=_("taro-checkbox-group-core"),T=_("taro-editor-core"),N=_("taro-form-core"),H=x,R=_("taro-label-core"),L=_("taro-picker-core"),M=_("taro-picker-view-core"),W=_("taro-picker-view-column-core"),K=_("taro-radio-core"),U=_("taro-radio-group-core"),B=_("taro-slider-core"),F=_("taro-switch-core"),Y=_("taro-cover-image-core"),G=_("taro-textarea-core"),J=_("taro-cover-view-core"),z=_("taro-moveable-area-core"),Z=_("taro-moveable-view-core"),$=_("taro-scroll-view-core"),q=_("taro-swiper-core"),Q=_("taro-swiper-item-core"),X=_("taro-functional-page-navigator-core"),ee=_("taro-navigator-core"),te=_("taro-audio-core"),re=_("taro-camera-core"),ne=_("taro-image-core"),oe=_("taro-live-player-core"),ae=_("taro-video-core"),ce=_("taro-map-core"),ie=_("taro-canvas-core"),ue=_("taro-ad-core"),fe=_("taro-official-account-core"),se=_("taro-open-data-core"),le=_("taro-web-view-core"),pe=_("taro-navigation-bar-core"),de=_("taro-block-core")},"318":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(2),o=r(3),a=r(10),c=r(11),i=r(4),u=r(82),f=r.n(u),s=r(23),l=r.n(s),p=r(317),d=(r(319),function(e){Object(a.a)(DocsHeader,e);var t=Object(c.a)(DocsHeader);function DocsHeader(){return Object(n.a)(this,DocsHeader),t.apply(this,arguments)}return Object(o.a)(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.a.createElement(p.View,{"className":"doc-header"},l.a.createElement(p.View,{"className":"doc-header__title"},e))}}]),DocsHeader}(l.a.Component));Object(i.a)(d,"defaultProps",void 0),Object(i.a)(d,"propTypes",void 0),d.defaultProps={"title":"标题"},d.propTypes={"title":f.a.string}},"319":function(e,t,r){},"321":function(e,t){e.exports=function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}},"322":function(e,t,r){var n=r(323);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},"323":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},"325":function(e,t,r){var n=r(326),o=r(327),a=r(322),c=r(328);e.exports=function _slicedToArray(e,t){return n(e)||o(e,t)||a(e,t)||c()}},"326":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e}},"327":function(e,t){e.exports=function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}},"328":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"329":function(e,t){e.exports=function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"330":function(e,t){function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}},"331":function(e,t,r){var n=r(332);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&n(e,t)}},"332":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(t,r)}e.exports=_setPrototypeOf},"333":function(e,t,r){var n=r(9),o=r(334);e.exports=function _possibleConstructorReturn(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},"334":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"335":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(t)}e.exports=_getPrototypeOf},"336":function(e,t,r){var n=r(337),o=r(338),a=r(322),c=r(339);e.exports=function _toConsumableArray(e){return n(e)||o(e)||a(e)||c()}},"337":function(e,t,r){var n=r(323);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return n(e)}},"338":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"339":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"397":function(e,t,r){},"448":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return y}));var n=r(2),o=r(3),a=r(18),c=r(10),i=r(11),u=r(4),f=r(23),s=r.n(f),l=r(317),p=r(83),d=r(318),y=(r(397),function(e){Object(c.a)(Index,e);var t=Object(i.a)(Index);function Index(e){var r;Object(n.a)(this,Index),r=t.call(this,e),Object(u.a)(Object(a.a)(r),"config",{"navigationBarTitleText":"Taro UI"}),Object(u.a)(Object(a.a)(r),"handleChange",(function(e){var t=e.detail.value;r.setState({"year":r.state.years[t[0]],"month":r.state.months[t[1]],"day":r.state.days[t[2]],"value":t})}));for(var o=new Date,c=[],i=[],f=[],s=1990;s<=o.getFullYear();s++)c.push(s);for(var l=1;l<=12;l++)i.push(l);for(var p=1;p<=31;p++)f.push(p);return r.state={"years":c,"year":o.getFullYear(),"months":i,"month":2,"days":f,"day":2,"value":[9999,5,17],"isWeapp":!1,"isAlipay":!1},r}return Object(o.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=p.default.getEnv();this.setState({"isWeapp":e===p.default.ENV_TYPE.WEAPP,"isAlipay":e===p.default.ENV_TYPE.ALIPAY})}},{"key":"render","value":function render(){var e=this.state,t=e.years,r=e.months,n=e.days,o=e.value,a=e.year,c=e.month,i=e.day,u=e.isWeapp,f=e.isAlipay;return s.a.createElement(l.View,{"className":"page"},s.a.createElement(d.a,{"title":"Picker View 滚动选择器"}),s.a.createElement(l.View,{"className":"doc-body"},s.a.createElement(l.View,{"className":"panel"},s.a.createElement(l.View,{"className":"panel__title"},"基础用法"),s.a.createElement(l.View,{"className":"panel__content"},s.a.createElement(l.View,{"className":"example-item"},s.a.createElement(l.View,{"className":"example-item__desc"},"嵌入页面的滑动选择器"),u||f?s.a.createElement(l.View,null,s.a.createElement(l.View,{"className":"title-date"},a,"年",c,"月",i,"日"),s.a.createElement(l.PickerView,{"indicatorStyle":"height: 50px;","className":"picker","style":"width: 100%; height: 300px; text-align: center;","value":o,"onChange":this.handleChange},s.a.createElement(l.PickerViewColumn,null,t.map((function(e,t){return s.a.createElement(l.View,{"key":t,"style":"line-height: 50px"},e,"年")}))),s.a.createElement(l.PickerViewColumn,null,r.map((function(e,t){return s.a.createElement(l.View,{"key":t,"style":"line-height: 50px"},e,"月")}))),s.a.createElement(l.PickerViewColumn,null,n.map((function(e,t){return s.a.createElement(l.View,{"key":t,"style":"line-height: 50px"},e,"日")}))))):s.a.createElement(l.View,{"className":"title-date"},"暂时仅支持微信小程序"))))))}}]),Index}(s.a.Component))}}]);