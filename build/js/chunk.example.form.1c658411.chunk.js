(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),a=n.n(r),l=n(2),o=n(11),c=n.n(o);const s=["title","breadcrumb","className","children"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e){const{dataSource:t}=e;return t&&t.length?a.a.createElement(l.Breadcrumb,null,t.map(((e,t)=>a.a.createElement(l.Breadcrumb.Item,{key:t},e)))):null}function p(e){const{title:t,breadcrumb:n,className:l,children:o}=e,p=i(e,s);return Object(r.useEffect)((()=>{let t;return e.title&&(t=document.title,document.title=e.title),()=>{t&&(document.title=t)}}),[]),a.a.createElement("div",{className:"base-page-container"},a.a.createElement(m,{dataSource:n}),a.a.createElement("div",u({className:c()("base-page-content",l)},p),o))}},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(14);function a(e=location.search,t=!0){const n=e.split(/[?&]/),r={};for(let e=0,a=n.length;e<a;e++){const a=n[e];if(!a)continue;const l=a.split("=");r[l[0]]=t&&l[1]?decodeURIComponent(l[1]):l[1]}return r}n.d(t,"a",(function(){return r.logger}));Math.round(Date.now()*Math.random())},62:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(0),a=n.n(r),l=n(2),o=n(55),c=n(57),s=n(20);const{Item:u}=l.Form,i=[{value:"m",label:"妹子"},{value:"f",label:"汉子"}];function m(){const[e]=l.Form.useForm(),[t,n]=Object(r.useState)(!1),m=Object(r.useCallback)((e=>{if(t)return!1;c.a.info(">> handleFinish",e),n(!0),Object(s.a)("https://httpbin.org/post",{method:"POST",data:e,showError:!0,showLoading:"提交中"}).then((()=>{l.message.success("数据提交完成！")})).finally((()=>{n(!1)}))}),[t]);return a.a.createElement(o.a,{title:"表单示例",breadcrumb:["首页","Example","表单示例"]},a.a.createElement(l.Form,{form:e,onFinish:m,labelCol:{span:6},wrapperCol:{span:12}},a.a.createElement(u,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"}]},a.a.createElement(l.Input,{placeholder:"请输入用户名"})),a.a.createElement(u,{label:"性别",name:"gender",rules:[{required:!0,message:"请选择性别"}]},a.a.createElement(l.Select,{options:i,placeholder:"请选择"})),a.a.createElement(u,{wrapperCol:{offset:6,span:12}},a.a.createElement(l.Button,{htmlType:"submit",type:"primary",style:{marginRight:12}},"提交"),a.a.createElement(l.Button,{htmlType:"reset",type:"ghost",onClick:()=>{e.resetFields()}},"重置"))))}}}]);