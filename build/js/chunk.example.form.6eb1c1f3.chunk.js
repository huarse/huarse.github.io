(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{65:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r),l=n(1),o=n(11),c=n.n(o);n(66);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function i(e){const{dataSource:t}=e;return t&&t.length?a.a.createElement(l.Breadcrumb,null,t.map((e,t)=>a.a.createElement(l.Breadcrumb.Item,{key:t},e))):null}function m(e){const{title:t,breadcrumb:n,className:l,children:o}=e,m=s(e,["title","breadcrumb","className","children"]);return Object(r.useEffect)(()=>{let t;return e.title&&(t=document.title,document.title=e.title),()=>{t&&(document.title=t)}},[]),a.a.createElement("div",{className:"base-page-container"},a.a.createElement(i,{dataSource:n}),a.a.createElement("div",u({className:c()("base-page-content",l)},m),o))}},66:function(e,t,n){},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(16);function a(e=location.search,t=!0){const n=e.split(/[?&]/),r={};for(let e=0,a=n.length;e<a;e++){const a=n[e];if(!a)continue;const l=a.split("=");r[l[0]]=t&&l[1]?decodeURIComponent(l[1]):l[1]}return r}n.d(t,"a",(function(){return r.logger}));Math.round(Date.now()*Math.random())},70:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(0),a=n.n(r),l=n(1),o=n(65),c=n(68),u=n(20);n(70);const{Item:s}=l.Form,i=[{value:"m",label:"妹子"},{value:"f",label:"汉子"}];function m(){const[e]=l.Form.useForm(),[t,n]=Object(r.useState)(!1),m=Object(r.useCallback)(e=>{if(t)return!1;c.a.info(">> handleFinish",e),n(!0),Object(u.a)("https://httpbin.org/post",{method:"POST",data:e,showError:!0,showLoading:"提交中"}).then(()=>{l.message.success("数据提交完成！")}).finally(()=>{n(!1)})},[t]);return a.a.createElement(o.a,{title:"表单示例",breadcrumb:["首页","Example","表单示例"]},a.a.createElement(l.Form,{form:e,onFinish:m,labelCol:{span:6},wrapperCol:{span:12}},a.a.createElement(s,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"}]},a.a.createElement(l.Input,{placeholder:"请输入用户名"})),a.a.createElement(s,{label:"性别",name:"gender",rules:[{required:!0,message:"请选择性别"}]},a.a.createElement(l.Select,{options:i,placeholder:"请选择"})),a.a.createElement(s,{wrapperCol:{offset:6,span:12}},a.a.createElement(l.Button,{htmlType:"submit",type:"primary",style:{marginRight:12}},"提交"),a.a.createElement(l.Button,{htmlType:"reset",type:"ghost",onClick:()=>{e.resetFields()}},"重置"))))}}}]);