(self.webpackChunk=self.webpackChunk||[]).push([[2727],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(7294);const r=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(7294),r=a(9443);const i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";const p=function(e){var t,a=e.lazy,r=e.block,p=e.defaultValue,m=e.values,c=e.groupId,d=e.className,u=n.Children.toArray(e.children),k=null!=m?m:u.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=p?p:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,h=i(),g=h.tabGroupChoices,N=h.setTabGroupChoices,v=(0,n.useState)(f),b=v[0],y=v[1],w=[];if(null!=c){var I=g[c];null!=I&&I!==b&&k.some((function(e){return e.value===I}))&&y(I)}var C=function(e){var t=e.currentTarget,a=w.indexOf(t),n=k[a].value;y(n),null!=c&&(N(c,n),setTimeout((function(){var e,a,n,r,i,l,o,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,a>=0&&i<=p&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},k.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:R,onFocus:C,onClick:C},null!=a?a:t)}))),a?(0,n.cloneElement)(u.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=(0,a(7294).createContext)(void 0)},6322:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>m,metadata:()=>c,toc:()=>d,default:()=>k});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=a(5064),o=a(8215),s=["components"],p={id:"react-intl",title:"Overview"},m=void 0,c={unversionedId:"react-intl",id:"react-intl",isDocsHomePage:!1,title:"Overview",description:"npm Version",source:"@site/docs/react-intl.md",sourceDirName:".",slug:"/react-intl",permalink:"/docs/react-intl",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl.md",tags:[],version:"current",frontMatter:{id:"react-intl",title:"Overview"},sidebar:"api",next:{title:"Components",permalink:"/docs/react-intl/components"}},d=[{value:"Runtime Requirements",id:"runtime-requirements",children:[{value:"Browser",id:"browser",children:[]},{value:"Node.js",id:"nodejs",children:[]},{value:"React Native",id:"react-native",children:[]}]},{value:"Experimental Intl Features",id:"experimental-intl-features",children:[]},{value:"The <code>react-intl</code> Package",id:"the-react-intl-package",children:[{value:"Module Bundlers",id:"module-bundlers",children:[]}]},{value:"The React Intl Module",id:"the-react-intl-module",children:[]},{value:"Creating an I18n Context",id:"creating-an-i18n-context",children:[]},{value:"Formatting Data",id:"formatting-data",children:[{value:"Jest",id:"jest",children:[]},{value:"webpack",id:"webpack",children:[]}]},{value:"Message extraction",id:"message-extraction",children:[]},{value:"ESLint Plugin",id:"eslint-plugin",children:[]}],u={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/react-intl"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/react-intl.svg?style=flat-square",alt:"npm Version"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Welcome to React Intl's docs! This is the place to find React Intl's docs"),". Feel free to open a pull request and contribute to the docs to make them better."),(0,i.kt)("h2",{id:"runtime-requirements"},"Runtime Requirements"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We support IE11 & 2 most recent versions of Edge, Chrome, Firefox & Safari.")),(0,i.kt)("p",null,"React Intl relies on these ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl")," APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"},"Intl.NumberFormat"),": Available on IE11+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"},"Intl.DateTimeFormat"),": Available on IE11+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},"Intl.PluralRules"),": This can be polyfilled using ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-pluralrules"},"this package"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat"},"Intl.RelativeTimeFormat"),": This can be polyfilled using ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-relativetimeformat"},"this package"),"."),(0,i.kt)("li",{parentName:"ul"},"(Optional) ",(0,i.kt)("a",{parentName:"li",href:"https://tc39.es/proposal-intl-displaynames/"},"Intl.DisplayNames"),": Required if you use ",(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/api#formatdisplayname"},(0,i.kt)("inlineCode",{parentName:"a"},"formatDisplayName")),"\nor ",(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components#formatteddisplayname"},(0,i.kt)("inlineCode",{parentName:"a"},"FormattedDisplayName")),". This can be polyfilled using ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-displaynames"},"this package"),".")),(0,i.kt)("p",null,"If you need to support older browsers, we recommend you do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Polyfill ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.NumberFormat")," with ",(0,i.kt)("a",{parentName:"p",href:"/docs/polyfills/intl-numberformat"},(0,i.kt)("inlineCode",{parentName:"a"},"@formatjs/intl-numberformat")),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Polyfill ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat")," with ",(0,i.kt)("a",{parentName:"p",href:"/docs/polyfills/intl-datetimeformat"},(0,i.kt)("inlineCode",{parentName:"a"},"@formatjs/intl-datetimeformat")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you're supporting browsers that do not have ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},(0,i.kt)("inlineCode",{parentName:"a"},"Intl.PluralRules"))," (e.g IE11 & Safari 12-), include this ",(0,i.kt)("a",{parentName:"p",href:"/docs/polyfills/intl-pluralrules"},"polyfill")," in your build.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you're supporting browsers that do not have ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat"},"Intl.RelativeTimeFormat")," (e.g IE11, Edge, Safari 12-), include this ",(0,i.kt)("a",{parentName:"p",href:"/docs/polyfills/intl-relativetimeformat"},"polyfill")," in your build along with individual CLDR data for each locale you support.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you need ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.DisplayNames"),", include this ",(0,i.kt)("a",{parentName:"p",href:"/docs/polyfills/intl-displaynames"},"polyfill")," in your build along with individual CLDR data for each locale you support."))),(0,i.kt)("h3",{id:"browser"},"Browser"),(0,i.kt)("p",null,"We officially support IE11 along with 2 most recent versions of Edge, Chrome & Firefox."),(0,i.kt)("h3",{id:"nodejs"},"Node.js"),(0,i.kt)("h4",{id:"full-icu"},"full-icu"),(0,i.kt)("p",null,"Starting with Node.js 13.0.0 full-icu is supported by default."),(0,i.kt)("p",null,"If using React Intl in an earlier version of Node.js, your ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," binary has to either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get compiled with ",(0,i.kt)("inlineCode",{parentName:"li"},"full-icu")," using these ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/intl.html"},"instructions"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OR")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uses ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/full-icu"},(0,i.kt)("inlineCode",{parentName:"a"},"full-icu")," npm package"))),(0,i.kt)("p",null,"If your ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," version is missing any of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl")," APIs above, you'd have to polyfill them accordingly."),(0,i.kt)("h3",{id:"react-native"},"React Native"),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"react-intl")," in React Native, make sure your runtime has built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl")," support (similar to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/jsc-android-buildscripts#international-variant"},"JSC International variant"),"). See these issues for more details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/formatjs/formatjs/issues/1356"},"https://github.com/formatjs/formatjs/issues/1356")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/formatjs/formatjs/issues/992"},"https://github.com/formatjs/formatjs/issues/992"))),(0,i.kt)("h4",{id:"react-native-on-ios"},"React Native on iOS"),(0,i.kt)("p",null,"If you cannot use the Intl variant of JSC (e.g on iOS), follow the instructions in ",(0,i.kt)("a",{parentName:"p",href:"#runtime-requirements"},"Runtime Requirements")," to polyfill those APIs accordingly."),(0,i.kt)("h2",{id:"experimental-intl-features"},"Experimental Intl Features"),(0,i.kt)("p",null,"FormatJS also provides types & polyfill for the following Intl API proposals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NumberFormat: ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-numberformat"},"polyfill")," & ",(0,i.kt)("a",{parentName:"li",href:"https://tc39.es/ecma402/"},"spec")),(0,i.kt)("li",{parentName:"ul"},"DisplayNames: ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-displaynames"},"polyfill")," & ",(0,i.kt)("a",{parentName:"li",href:"https://tc39.es/proposal-intl-displaynames/"},"spec"))),(0,i.kt)("h2",{id:"the-react-intl-package"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"react-intl")," Package"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-intl"},(0,i.kt)("inlineCode",{parentName:"a"},"react-intl")," npm package")," via npm:"),(0,i.kt)(l.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -S react-intl\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add react-intl\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"react-intl")," npm package distributes the following modules (links from ",(0,i.kt)("a",{parentName:"p",href:"https://unpkg.com/"},"unpkg"),"):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unpkg.com/react-intl@latest/index.js"},(0,i.kt)("strong",{parentName:"a"},"CommonJS")),":\nunbundled dependencies, ",(0,i.kt)("inlineCode",{parentName:"li"},'"main"')," in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),", warnings in dev."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unpkg.com/react-intl@latest/lib/index.js"},(0,i.kt)("strong",{parentName:"a"},"ES6")),":\nunbundled dependencies, ",(0,i.kt)("inlineCode",{parentName:"li"},'"module"')," in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),", warnings in dev.")),(0,i.kt)("h3",{id:"module-bundlers"},"Module Bundlers"),(0,i.kt)("p",null,"We've made React Intl work well with module bundlers like: Browserify, Webpack, or Rollup which can be used to bundle React Intl for the browser:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},'"browser"')," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," is specified so that only basic English locale data is included when bundling. This way when using the ",(0,i.kt)("inlineCode",{parentName:"p"},'"main"')," module in Node all locale data is loaded, but ignored when bundled for the browser.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An ES6 version of React Intl is provided as ",(0,i.kt)("inlineCode",{parentName:"p"},'"jsnext:main"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"module"')," in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and can be used with Rollup.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Development-time warnings are wrapped with ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'"),", this allows you to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," when bundling and minifying to have these code blocks removed."))),(0,i.kt)("h2",{id:"the-react-intl-module"},"The React Intl Module"),(0,i.kt)("p",null,"Whether you use the ES6, CommonJS, or UMD version of React Intl, they all provide the same named exports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/api#injectintl"},(0,i.kt)("inlineCode",{parentName:"a"},"injectIntl"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/api#definemessages"},(0,i.kt)("inlineCode",{parentName:"a"},"defineMessages"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components#intlprovider"},(0,i.kt)("inlineCode",{parentName:"a"},"IntlProvider"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components#formatteddate"},(0,i.kt)("inlineCode",{parentName:"a"},"FormattedDate"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components#formattedtime"},(0,i.kt)("inlineCode",{parentName:"a"},"FormattedTime"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components#formattedrelativetime"},(0,i.kt)("inlineCode",{parentName:"a"},"FormattedRelativeTime"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components#formattednumber"},(0,i.kt)("inlineCode",{parentName:"a"},"FormattedNumber"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components#formattedplural"},(0,i.kt)("inlineCode",{parentName:"a"},"FormattedPlural"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components#formattedmessage"},(0,i.kt)("inlineCode",{parentName:"a"},"FormattedMessage")))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"react")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When using the UMD version of React Intl ",(0,i.kt)("em",{parentName:"p"},"without")," a module system, it will expect ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," to exist on the global variable: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"React")),", and put the above named exports on the global variable: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ReactIntl")),"."))),(0,i.kt)("h2",{id:"creating-an-i18n-context"},"Creating an I18n Context"),(0,i.kt)("p",null,"Now with React Intl and its locale data loaded an i18n context can be created for your React app."),(0,i.kt)("p",null,"React Intl uses the provider pattern to scope an i18n context to a tree of components. This allows configuration like the current locale and set of translated strings/messages to be provided at the root of a component tree and made available to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Formatted*>")," components. This is the same concept as what Flux frameworks like ",(0,i.kt)("a",{parentName:"p",href:"http://redux.js.org/"},"Redux")," use to provide access to a store within a component tree."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"All apps using React Intl must use the ",(0,i.kt)("a",{parentName:"strong",href:"/docs/react-intl/components#intlprovider"},(0,i.kt)("inlineCode",{parentName:"a"},"<IntlProvider>")," component"),".")),(0,i.kt)("p",null,"The most common usage is to wrap your root React component with ",(0,i.kt)("inlineCode",{parentName:"p"},"<IntlProvider>")," and configure it with the user's current locale and the corresponding translated strings/messages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"ReactDOM.render(\n  <IntlProvider locale={usersLocale} messages={translationsForUsersLocale}>\n    <App />\n  </IntlProvider>,\n  document.getElementById('container')\n)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See:")," The ",(0,i.kt)("a",{parentName:"p",href:"/docs/react-intl/components#intlprovider"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"<IntlProvider>")," docs"))," for more details."),(0,i.kt)("h2",{id:"formatting-data"},"Formatting Data"),(0,i.kt)("p",null,"React Intl has two ways to format data, through ",(0,i.kt)("a",{parentName:"p",href:"/docs/react-intl/components"},"React components")," and its ",(0,i.kt)("a",{parentName:"p",href:"/docs/react-intl/api"},"API"),". The components provide an idiomatic-React way of integrating internationalization into a React app, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Formatted*>")," components have ",(0,i.kt)("a",{parentName:"p",href:"/docs/react-intl/components#why-components"},"benefits")," over always using the imperative API directly. The API should be used when your React component needs to format data to a string value where a React element is not suitable; e.g., a ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"aria")," attribute, or for side-effect in ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount"),"."),(0,i.kt)("p",null,"React Intl's imperative API is accessed via ",(0,i.kt)("a",{parentName:"p",href:"/docs/react-intl/api#injectintl"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"injectIntl"))),", a High-Order Component (HOC) factory. It will wrap the passed-in React component with another React component which provides the imperative formatting API into the wrapped component via its ",(0,i.kt)("inlineCode",{parentName:"p"},"props"),". (This is similar to the connect-to-stores pattern found in many Flux implementations.)"),(0,i.kt)("p",null,"Here's an example using ",(0,i.kt)("inlineCode",{parentName:"p"},"<IntlProvider>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<Formatted*>")," components, and the imperative API to setup an i18n context and format data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport {injectIntl, IntlProvider, FormattedRelative, useIntl} from 'react-intl';\n\nconst MS_IN_DAY = 1e3 * 3600 * 24\n\nconst PostDate = ({date}) => {\n  const intl = useIntl()\n  return (\n    <span title={intl.formatDate(date)}>\n      <FormattedRelativeTime value={(Date.now() - date)/MS_IN_DAY} unit=\"day\"/>\n    </span>\n  )\n});\n\nconst App = ({post}) => (\n  <div>\n    <h1>{post.title}</h1>\n    <p>\n      <PostDate date={post.date} />\n    </p>\n    <div>{post.body}</div>\n  </div>\n);\n\nReactDOM.render(\n  <IntlProvider locale={navigator.language}>\n    <App\n      post={{\n        title: 'Hello, World!',\n        date: new Date(1459913574887),\n        body: 'Amazing content.',\n      }}\n    />\n  </IntlProvider>,\n  document.getElementById('container')\n);\n")),(0,i.kt)("p",null,"Assuming ",(0,i.kt)("inlineCode",{parentName:"p"},"navigator.language")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"en-us"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <h1>Hello, World!</h1>\n  <p><span title="4/5/2016">yesterday</span></p>\n  <div>Amazing content.</div>\n</div>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See:")," The ",(0,i.kt)("a",{parentName:"p",href:"/docs/react-intl/api"},(0,i.kt)("strong",{parentName:"a"},"API docs"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/react-intl/components"},(0,i.kt)("strong",{parentName:"a"},"Component docs"))," for more details."),(0,i.kt)("h1",{id:"esm-build"},"ESM Build"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"react-intl")," and its underlying libraries (",(0,i.kt)("inlineCode",{parentName:"p"},"@formatjs/icu-messageformat-parser"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"intl-messageformat"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@formatjs/intl-relativetimeformat"),") export ESM artifacts. This means you should configure your build toolchain to transpile those libraries."),(0,i.kt)("h3",{id:"jest"},"Jest"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," to always include those libraries, e.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  transformIgnorePatterns: [\n    '/node_modules/(?!intl-messageformat|@formatjs/icu-messageformat-parser).+\\\\.js$',\n  ],\n}\n")),(0,i.kt)("h3",{id:"webpack"},"webpack"),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-loader"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader"),", you can do 1 of the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add those libraries in ",(0,i.kt)("inlineCode",{parentName:"li"},"include"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  include: [\n    path.join(__dirname, 'node_modules/react-intl'),\n    path.join(__dirname, 'node_modules/intl-messageformat'),\n    path.join(__dirname, 'node_modules/@formatjs/icu-messageformat-parser'),\n  ]\n}\n")),(0,i.kt)("p",null,"OR"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add those libraries in ",(0,i.kt)("inlineCode",{parentName:"li"},"exclude"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"exclude: /node_modules\\/(?!react-intl|intl-messageformat|@formatjs\\/icu-messageformat-parser)/,\n")),(0,i.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Formatters (Date, Number, Message, Relative)"),(0,i.kt)("li",{parentName:"ul"},"Provider and Injector"),(0,i.kt)("li",{parentName:"ul"},"API and Components"),(0,i.kt)("li",{parentName:"ul"},"Message Descriptor"),(0,i.kt)("li",{parentName:"ul"},"Message Syntax"),(0,i.kt)("li",{parentName:"ul"},"Defining default messages for extraction"),(0,i.kt)("li",{parentName:"ul"},"Custom, named formats")),(0,i.kt)("h1",{id:"example-apps"},"Example Apps"),(0,i.kt)("p",null,"There are several ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/formatjs/formatjs/tree/master/packages/react-intl/examples"},(0,i.kt)("strong",{parentName:"a"},"runnable example apps"))," in this Git repo. These are a great way to see React Intl's ",(0,i.kt)("a",{parentName:"p",href:"#core-concepts"},"core concepts")," in action in simplified applications."),(0,i.kt)("h1",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"There are a few API layers that React Intl provides and is built on. When using React Intl you'll be interacting with ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl")," built-ins, React Intl's API, and its React components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"ECMAScript Internationalization API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/api"},"React Intl API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components"},"React Intl Components"))),(0,i.kt)("h1",{id:"typescript-usage"},"TypeScript Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"react-intl")," is written in TypeScript, thus having 1st-class TS support."),(0,i.kt)("p",null,"In order to use ",(0,i.kt)("inlineCode",{parentName:"p"},"react-intl")," in TypeScript, make sure your ",(0,i.kt)("inlineCode",{parentName:"p"},"compilerOptions"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," config include ",(0,i.kt)("inlineCode",{parentName:"p"},'["esnext.intl", "es2017.intl", "es2018.intl"]'),"."),(0,i.kt)("h1",{id:"advanced-usage"},"Advanced Usage"),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/advanced-usage"},"Advanced Usage")," has further guides for production setup in environments where performance is important."),(0,i.kt)("h1",{id:"supported-tooling"},"Supported Tooling"),(0,i.kt)("h2",{id:"message-extraction"},"Message extraction"),(0,i.kt)("p",null,"We've built ",(0,i.kt)("a",{parentName:"p",href:"/docs/tooling/cli"},"@formatjs/cli")," that helps you extract messages from a list of files. It uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/tooling/babel-plugin"},"babel-plugin-formatjs")," under the hood and should be able to extract messages if you're declaring using 1 of the mechanisms below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import {defineMessages} from 'react-intl'\n\ndefineMessages({\n  foo: {\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  },\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {FormattedMessage} from \'react-intl\'\n;<FormattedMessage id="foo" defaultMessage="foo" description="bar" />\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function Comp(props) {\n  const {intl} = props\n  return intl.formatMessage({\n    // The whole `intl.formatMessage` is required so we can extract\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  })\n}\n")),(0,i.kt)("h2",{id:"eslint-plugin"},"ESLint Plugin"),(0,i.kt)("p",null,"We've also built ",(0,i.kt)("a",{parentName:"p",href:"/docs/tooling/linter"},"eslint-plugin-formatjs")," that helps enforcing specific rules on your messages if your translation vendor has restrictions."))}k.isMDXComponent=!0},6010:(e,t,a)=>{"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:()=>r})}}]);