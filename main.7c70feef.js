!function(e){function t(t){for(var n,c,l=t[0],s=t[1],i=t[2],_=0,m=[];_<l.length;_++)c=l[_],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={3:0},o=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=function(e){return c.p+"templates/"+({0:"__react_static_root__/src/pages/404.jsx",1:"__react_static_root__/src/pages/about.jsx",2:"__react_static_root__/src/pages/index.jsx",5:"vendors~__react_static_root__/src/pages/index.jsx"}[e]||e)+"."+{0:"3cc7ff03",1:"5ae2e834",2:"ac2708bc",5:"e5eda450"}[e]+".js"}(e);var s=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(i);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,a[1](s)}r[e]=void 0}};var i=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;o.push([89,4,6]),a()}({143:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"notFoundTemplate",(function(){return d}));var n=a(25),r=a.n(n),o=a(26),c=a.n(o),l=a(1),s=a.n(l),i=a(23),u=a.n(i);Object(i.setHasBabelPlugin)();var _={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},m=u()(c()({id:"__react_static_root__/src/pages/404.jsx",load:function(){return Promise.all([a.e(0).then(a.bind(null,86))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/404.jsx")},resolve:function(){return 86},chunkName:function(){return"__react_static_root__/src/pages/404.jsx"}}),_);m.template="__react_static_root__/src/pages/404.jsx";var p=u()(c()({id:"__react_static_root__/src/pages/about.jsx",load:function(){return Promise.all([a.e(1).then(a.bind(null,87))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/about.jsx")},resolve:function(){return 87},chunkName:function(){return"__react_static_root__/src/pages/about.jsx"}}),_);p.template="__react_static_root__/src/pages/about.jsx";var f=u()(c()({id:"__react_static_root__/src/pages/index.jsx",load:function(){return Promise.all([Promise.all([a.e(5),a.e(2)]).then(a.bind(null,88))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/index.jsx")},resolve:function(){return 88},chunkName:function(){return"__react_static_root__/src/pages/index.jsx"}}),_);f.template="__react_static_root__/src/pages/index.jsx",t.default={"__react_static_root__/src/pages/404.jsx":m,"__react_static_root__/src/pages/about.jsx":p,"__react_static_root__/src/pages/index.jsx":f};var d="__react_static_root__/src/pages/404.jsx"}.call(this,"/")},145:function(e,t,a){var n={".":29,"./":29,"./index":29,"./index.js":29};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=145},154:function(e,t,a){"use strict";a.r(t),function(e){var n=a(1),r=a.n(n),o=a(17),c=a.n(o),l=a(84),s=a(42);if(t.default=s.a,"undefined"!=typeof document){var i=document.getElementById("root"),u=i.hasChildNodes()?c.a.hydrate:c.a.render,_=function(e){u(r.a.createElement(l.AppContainer,null,r.a.createElement(e,null)),i)};_(s.a),e&&e.hot&&e.hot.accept("./App",(function(){_(s.a)}))}}.call(this,a(155)(e))},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(1),r=a.n(n),o=a(47),c=a(36),l=a(30),s=a(170),i=a(165),u=a(171),_=a(166),m=a(28),p=a(81),f=(a(4),a(75)),d=a.n(f);function h(e){var t=e.className;return r.a.createElement("img",{className:"".concat(t),src:d.a,alt:"The Alpha Project"})}function g(){return r.a.createElement(s.a,{collapseOnSelect:!0,sticky:"top",expand:"lg",bg:"dark",variant:"dark",className:"py-0"},r.a.createElement(i.a,{fluid:!0},r.a.createElement(s.a.Brand,null,r.a.createElement(l.Link,{className:"p-1",to:"/"},r.a.createElement(h,{className:"navigation__logo"}))),r.a.createElement(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,{className:"me-auto"},r.a.createElement(l.Link,{role:"button",className:"nav-link",to:"/install"},"How to install"),r.a.createElement(l.Link,{role:"button",className:"nav-link",to:"/contribute"},"Contribute")),r.a.createElement(u.a,null,r.a.createElement(u.a.Link,null,r.a.createElement("span",{className:"pe-2 text-white"},"Kalidar 1.12"),r.a.createElement(_.a,{pill:!0,bg:"success"},"Online")),r.a.createElement(u.a.Link,null,r.a.createElement("span",{className:"pe-2 text-white"},"PTR 0.5.3"),r.a.createElement(_.a,{pill:!0,bg:"warning"},"Online")),r.a.createElement(u.a.Link,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/The-Alpha-Project"},r.a.createElement(m.c,{size:18})),r.a.createElement(u.a.Link,{target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg/RzBMAKU"},r.a.createElement(m.b,{size:18})),r.a.createElement(u.a.Link,{target:"_blank",rel:"noopener noreferrer",href:"https://ko-fi.com/R6R21LO82"},r.a.createElement(p.a,{size:24,className:"me-2"}),"Support on Ko-fi")))))}h.defaultProps={className:"alpha-logo"};var v=a(167),E=a(168),b=a(169),x=a(83),j=a(82),y=a.n(j);function k(){return r.a.createElement("div",{className:"video-background"},r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},r.a.createElement("source",{src:y.a})))}function N(){return r.a.createElement("section",{className:"position-relative"},r.a.createElement(k,null),r.a.createElement(i.a,{className:"py-10 position-relative"},r.a.createElement(v.a,{className:"p-4 align-items-center wow__dialog pt-7 text-center"},r.a.createElement(E.a,null,r.a.createElement(v.a,{className:"justify-content-center"},r.a.createElement(E.a,{className:"position-absolute top-0 start-50 translate-middle",xs:5,sm:5,md:3,lg:2},r.a.createElement("div",{className:"p-4 rounded-circle"},r.a.createElement(h,null)))),r.a.createElement("h1",{className:"fw-bold text-uppercase"},"The Alpha Project"),r.a.createElement("p",{className:"lead"},"The home of everything related to pre-release versions of World of Warcraft"),r.a.createElement("div",{className:"d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3"},r.a.createElement(b.a,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/The-Alpha-Project/alpha-core",variant:"outline-primary",className:"px-5"},r.a.createElement(m.c,{className:"me-2"}),"Clone Server"),r.a.createElement(b.a,{href:"https://github.com/The-Alpha-Project/Alpha-Launcher/releases",variant:"outline-secondary",className:"px-5"},r.a.createElement(x.a,{className:"me-2"}),"Alpha Launcher"),r.a.createElement(b.a,{href:"https://archive.org/download/World_of_Warcraft_Client_and_Installation_Archive/ISO/",variant:"outline-secondary",className:"px-5"},r.a.createElement(m.a,{className:"me-2"}),"0.5.3 Client"))))))}function P(){return r.a.createElement(l.Location,null,(function(e){return"/"===e.location.pathname?r.a.createElement(N,null):null}))}function w(e){var t=e.children;return r.a.createElement("section",{className:"image-background py-6"},t||null)}a(162);function O(){return r.a.createElement(c.Root,null,r.a.createElement(o.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"The Alpha Project")),r.a.createElement(P,null),r.a.createElement(g,null),r.a.createElement(w,null,r.a.createElement("div",{className:"content"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("em",null,"Loading...")},r.a.createElement(l.Router,null,r.a.createElement(c.Routes,{path:"*"}))))))}},75:function(e,t,a){e.exports=a.p+"static/logo.192267da.png"},82:function(e,t,a){e.exports=a.p+"static/login-screen.f2fb4cee.mp4"},89:function(e,t,a){a(90),a(142),e.exports=a(150)},91:function(e,t,a){"use strict";a.r(t);var n=a(72),r=[{location:"__react_static_root__/node_modules/react-static-plugin-sass",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-favicons",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:a.n(n)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];t.default=r}});