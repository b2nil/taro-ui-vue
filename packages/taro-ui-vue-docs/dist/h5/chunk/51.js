(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"318":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(2),c=a(3),i=a(10),r=a(11),s=a(4),l=a(82),o=a.n(l),m=a(23),u=a.n(m),p=a(317),d=(a(319),function(e){Object(i.a)(DocsHeader,e);var t=Object(r.a)(DocsHeader);function DocsHeader(){return Object(n.a)(this,DocsHeader),t.apply(this,arguments)}return Object(c.a)(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return u.a.createElement(p.View,{"className":"doc-header"},u.a.createElement(p.View,{"className":"doc-header__title"},e))}}]),DocsHeader}(u.a.Component));Object(s.a)(d,"defaultProps",void 0),Object(s.a)(d,"propTypes",void 0),d.defaultProps={"title":"标题"},d.propTypes={"title":o.a.string}},"319":function(e,t,a){},"365":function(e,t,a){},"419":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(2),c=a(3),i=a(18),r=a(10),s=a(11),l=a(4),o=a(23),m=a.n(o),u=a(320),p=a(317),d=a(318),h=(a(365),function(e){Object(r.a)(TimelinePage,e);var t=Object(s.a)(TimelinePage);function TimelinePage(e){var a;return Object(n.a)(this,TimelinePage),a=t.call(this,e),Object(l.a)(Object(i.a)(a),"config",{"navigationBarTitleText":"Taro UI"}),a.state={"current1":0,"current2":0,"current3":0,"current4":0,"current5":1},a}return Object(c.a)(TimelinePage,[{"key":"onChange","value":function onChange(e,t){this.setState(Object(l.a)({},e,t))}},{"key":"render","value":function render(){return m.a.createElement(p.View,{"className":"page"},m.a.createElement(d.a,{"title":"Steps 步骤条"}),m.a.createElement(p.View,{"className":"doc-body"},m.a.createElement(p.View,{"className":"panel"},m.a.createElement(p.View,{"className":"panel__title"},"基础用法"),m.a.createElement(p.View,{"className":"panel__content"},m.a.createElement(p.View,{"className":"example-item"},m.a.createElement(u.AtSteps,{"items":[{"title":"步骤一"},{"title":"步骤二"}],"current":this.state.current1,"onChange":this.onChange.bind(this,"current1")}),m.a.createElement(u.AtSteps,{"items":[{"title":"步骤一"},{"title":"步骤二"},{"title":"步骤三"}],"current":this.state.current2,"onChange":this.onChange.bind(this,"current2")})))),m.a.createElement(p.View,{"className":"panel"},m.a.createElement(p.View,{"className":"panel__title"},"带附加信息"),m.a.createElement(p.View,{"className":"panel__content"},m.a.createElement(p.View,{"className":"example-item"},m.a.createElement(u.AtSteps,{"items":[{"title":"步骤一","desc":"这里是额外的信息，最多两行"},{"title":"步骤二","desc":"这里是额外的信息，最多两行"},{"title":"步骤三","desc":"这里是额外的信息，最多两行"}],"current":this.state.current3,"onChange":this.onChange.bind(this,"current3")})))),m.a.createElement(p.View,{"className":"panel"},m.a.createElement(p.View,{"className":"panel__title"},"自定义图标"),m.a.createElement(p.View,{"className":"panel__content"},m.a.createElement(p.View,{"className":"example-item"},m.a.createElement(u.AtSteps,{"items":[{"title":"步骤一","desc":"这里是额外的信息，最多两行","icon":{"value":"sound","activeColor":"#fff","inactiveColor":"#78A4FA","size":"14"}},{"title":"步骤二","desc":"这里是额外的信息，最多两行","icon":{"value":"shopping-cart","activeColor":"#fff","inactiveColor":"#78A4FA","size":"14"}},{"title":"步骤三","desc":"这里是额外的信息，最多两行","icon":{"value":"camera","activeColor":"#fff","inactiveColor":"#78A4FA","size":"14"}}],"current":this.state.current4,"onChange":this.onChange.bind(this,"current4")})))),m.a.createElement(p.View,{"className":"panel"},m.a.createElement(p.View,{"className":"panel__title"},"状态步骤条"),m.a.createElement(p.View,{"className":"panel__content"},m.a.createElement(p.View,{"className":"example-item"},m.a.createElement(u.AtSteps,{"items":[{"title":"步骤一","desc":"这里是额外的信息，最多两行","status":"success"},{"title":"步骤二","desc":"这里是额外的信息，最多两行"},{"title":"步骤三","desc":"这里是额外的信息，最多两行","status":"error"}],"current":this.state.current5,"onChange":this.onChange.bind(this,"current5")}))))))}}]),TimelinePage}(m.a.Component))}}]);