(self.webpackChunk=self.webpackChunk||[]).push([[9173],{3905:(e,t,l)=>{"use strict";l.d(t,{Zo:()=>p,kt:()=>f});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(l),f=r,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||n;return l?a.createElement(d,i(i({ref:t},p),{},{components:l})):a.createElement(d,i({ref:t},p))}));function f(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,i=new Array(n);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<n;c++)i[c]=l[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}u.displayName="MDXCreateElement"},8215:(e,t,l)=>{"use strict";l.d(t,{Z:()=>r});var a=l(7294);const r=function(e){var t=e.children,l=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:l,className:r},t)}},5064:(e,t,l)=>{"use strict";l.d(t,{Z:()=>c});var a=l(7294),r=l(9443);const n=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=l(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";const c=function(e){var t,l=e.lazy,r=e.block,c=e.defaultValue,p=e.values,m=e.groupId,u=e.className,f=a.Children.toArray(e.children),d=null!=p?p:f.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,y=n(),h=y.tabGroupChoices,b=y.setTabGroupChoices,g=(0,a.useState)(v),k=g[0],N=g[1],T=[];if(null!=m){var j=h[m];null!=j&&j!==k&&d.some((function(e){return e.value===j}))&&N(j)}var O=function(e){var t=e.currentTarget,l=T.indexOf(t),a=d[l].value;N(a),null!=m&&(b(m,a),setTimeout((function(){var e,l,a,r,n,i,o,c;(e=t.getBoundingClientRect(),l=e.top,a=e.left,r=e.bottom,n=e.right,i=window,o=i.innerHeight,c=i.innerWidth,l>=0&&n<=c&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,l=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.target)+1;l=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.target)-1;l=T[r]||T[T.length-1]}null==(t=l)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},u)},d.map((function(e){var t=e.value,l=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:w,onFocus:O,onClick:O},null!=l?l:t)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=(0,l(7294).createContext)(void 0)},6154:(e,t,l)=>{"use strict";l.r(t),l.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>m,toc:()=>u,default:()=>d});var a=l(2122),r=l(9756),n=(l(7294),l(3905)),i=l(5064),o=l(8215),s=["components"],c={id:"intl-relativetimeformat",title:"Intl.RelativeTimeFormat"},p=void 0,m={unversionedId:"polyfills/intl-relativetimeformat",id:"polyfills/intl-relativetimeformat",isDocsHomePage:!1,title:"Intl.RelativeTimeFormat",description:"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-relativetimeformat.md",sourceDirName:"polyfills",slug:"/polyfills/intl-relativetimeformat",permalink:"/docs/polyfills/intl-relativetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-relativetimeformat.md",tags:[],version:"current",frontMatter:{id:"intl-relativetimeformat",title:"Intl.RelativeTimeFormat"},sidebar:"polyfills",previous:{title:"Intl.PluralRules",permalink:"/docs/polyfills/intl-pluralrules"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[]},{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]},{value:"Tests",id:"tests",children:[]}],f={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"official ECMAScript Conformance test suite")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-relativetimeformat"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-relativetimeformat.svg?style=flat-square",alt:"npm Version"})),"\n",(0,n.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-relativetimeformat",alt:"size"})),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(i.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-relativetimeformat\n"))),(0,n.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-relativetimeformat\n")))),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"This package requires the following capabilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.PluralRules"))," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-pluralrules"},"polyfill"),"."),(0,n.kt)("li",{parentName:"ul"},"If you need ",(0,n.kt)("inlineCode",{parentName:"li"},"formatToParts")," and have to support IE11- or Node 10-, you'd need to polyfill using ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-numberformat"},(0,n.kt)("inlineCode",{parentName:"a"},"@formatjs/intl-numberformat")),".")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"via-polyfillio"},"Via polyfill.io"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",(0,n.kt)("inlineCode",{parentName:"p"},"Intl.RelativeTimeFormat"),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.kt)("inlineCode",{parentName:"p"},"Intl.RelativeTimeFormat.~locale.<locale>")," to your list of features. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.RelativeTimeFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.RelativeTimeFormat,Intl.RelativeTimeFormat.~locale.en"><\/script>\n')),(0,n.kt)("h3",{id:"simple"},"Simple"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-relativetimeformat/polyfill'\nimport '@formatjs/intl-relativetimeformat/locale-data/en' // locale-data for en\n")),(0,n.kt)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-relativetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-relativetimeformat/polyfill-force')\n  await import(\n    `@formatjs/intl-relativetimeformat/locale-data/${unsupportedLocale}`\n  )\n}\n")),(0,n.kt)("h2",{id:"tests"},"Tests"),(0,n.kt)("p",null,"This library is fully ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262/tree/master/test/intl402/RelativeTimeFormat"},"test262"),"-compliant."))}d.isMDXComponent=!0},6010:(e,t,l)=>{"use strict";function a(e){var t,l,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(l=a(e[t]))&&(r&&(r+=" "),r+=l);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,l=0,r="";l<arguments.length;)(e=arguments[l++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}l.d(t,{Z:()=>r})}}]);