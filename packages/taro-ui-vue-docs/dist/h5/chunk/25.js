(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"318":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(2),m=t(3),l=t(10),s=t(11),r=t(4),c=t(82),i=t.n(c),u=t(23),p=t.n(u),b=t(317),o=(t(319),function(e){Object(l.a)(DocsHeader,e);var a=Object(s.a)(DocsHeader);function DocsHeader(){return Object(n.a)(this,DocsHeader),a.apply(this,arguments)}return Object(m.a)(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return p.a.createElement(b.View,{"className":"doc-header"},p.a.createElement(b.View,{"className":"doc-header__title"},e))}}]),DocsHeader}(p.a.Component));Object(r.a)(o,"defaultProps",void 0),Object(r.a)(o,"propTypes",void 0),o.defaultProps={"title":"标题"},o.propTypes={"title":i.a.string}},"319":function(e,a,t){},"391":function(e,a,t){},"442":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var n=t(2),m=t(3),l=t(18),s=t(10),r=t(11),c=t(4),i=t(23),u=t.n(i),p=t(320),b=t(317),o=t(318),d=(t(391),function(e){Object(s.a)(Index,e);var a=Object(r.a)(Index);function Index(e){var t;return Object(n.a)(this,Index),t=a.call(this,e),Object(c.a)(Object(l.a)(t),"config",{"navigationBarTitleText":"Taro UI"}),t.state={"number1":1,"number2":1,"number3":1,"number4":1,"number5":1,"number6":1},t}return Object(m.a)(Index,[{"key":"handleNumberChange","value":function handleNumberChange(e,a,t){this.setState(Object(c.a)({},e,a)),console.log("Event:",t)}},{"key":"render","value":function render(){return u.a.createElement(b.View,{"className":"page"},u.a.createElement(o.a,{"title":"Input Number 数字输入框"}),u.a.createElement(b.View,{"className":"doc-body"},u.a.createElement(b.View,{"className":"panel"},u.a.createElement(b.View,{"className":"panel__title"},"基础用法"),u.a.createElement(b.View,{"className":"panel__content"},u.a.createElement(b.View,{"className":"example-item"},u.a.createElement(b.View,{"className":"example-item__desc"},"min=0, max=10, step=1"),u.a.createElement(p.AtInputNumber,{"min":0,"max":10,"step":1,"value":this.state.number1,"onChange":this.handleNumberChange.bind(this,"number1")})))),u.a.createElement(b.View,{"className":"panel"},u.a.createElement(b.View,{"className":"panel__title"},"小数"),u.a.createElement(b.View,{"className":"panel__content"},u.a.createElement(b.View,{"className":"example-item"},u.a.createElement(b.View,{"className":"example-item__desc"},"min=0, max=10, step=0.1"),u.a.createElement(p.AtInputNumber,{"type":"digit","min":0,"max":10,"step":.1,"value":this.state.number2,"onChange":this.handleNumberChange.bind(this,"number2")})))),u.a.createElement(b.View,{"className":"panel"},u.a.createElement(b.View,{"className":"panel__title"},"禁用状态"),u.a.createElement(b.View,{"className":"panel__content"},u.a.createElement(b.View,{"className":"example-item"},u.a.createElement(p.AtInputNumber,{"disabled":!0,"min":0,"max":10,"step":1,"value":this.state.number3,"onChange":this.handleNumberChange.bind(this,"number3")})))),u.a.createElement(b.View,{"className":"panel"},u.a.createElement(b.View,{"className":"panel__title"},"禁用输入状态"),u.a.createElement(b.View,{"className":"panel__content"},u.a.createElement(b.View,{"className":"example-item"},u.a.createElement(p.AtInputNumber,{"disabledInput":!0,"min":0,"max":10,"step":1,"value":this.state.number6,"onChange":this.handleNumberChange.bind(this,"number6")})))),u.a.createElement(b.View,{"className":"panel"},u.a.createElement(b.View,{"className":"panel__title"},"自定义宽度"),u.a.createElement(b.View,{"className":"panel__content"},u.a.createElement(b.View,{"className":"example-item"},u.a.createElement(p.AtInputNumber,{"width":200,"min":0,"max":10,"step":1,"value":this.state.number4,"onChange":this.handleNumberChange.bind(this,"number4")})))),u.a.createElement(b.View,{"className":"panel"},u.a.createElement(b.View,{"className":"panel__title"},"大尺寸"),u.a.createElement(b.View,{"className":"panel__content"},u.a.createElement(b.View,{"className":"example-item"},u.a.createElement(p.AtInputNumber,{"size":"large","min":0,"max":10,"step":1,"value":this.state.number5,"onChange":this.handleNumberChange.bind(this,"number5")}))))))}}]),Index}(u.a.Component))}}]);