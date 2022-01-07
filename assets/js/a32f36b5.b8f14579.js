"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4109],{3905:(e,l,t)=>{t.d(l,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function n(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?n(Object(t),!0).forEach((function(l){r(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function i(e,l){if(null==e)return{};var t,a,r=function(e,l){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var l=a.useContext(u),t=l;return e&&(t="function"==typeof e?e(l):o(o({},l),e)),t},p=function(e){var l=s(e.components);return a.createElement(u.Provider,{value:l},e.children)},c={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},m=a.forwardRef((function(e,l){var t=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),f=r,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||n;return t?a.createElement(d,o(o({ref:l},p),{},{components:t})):a.createElement(d,o({ref:l},p))}));function f(e,l){var t=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var n=t.length,o=new Array(n);o[0]=m;var i={};for(var u in l)hasOwnProperty.call(l,u)&&(i[u]=l[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<n;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:(e,l,t)=>{t.d(l,{Z:()=>r});var a=t(7294);const r=function(e){var l=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},l)}},6396:(e,l,t)=>{t.d(l,{Z:()=>m});var a=t(7462),r=t(7294),n=t(2389),o=t(9443);const i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=t(3616),s=t(6010);const p="tabItem_1uMI";function c(e){var l,t,n,o=e.lazy,c=e.block,m=e.defaultValue,f=e.values,d=e.groupId,v=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:y.map((function(e){var l=e.props;return{value:l.value,label:l.label,attributes:l.attributes}})),h=(0,u.lx)(b,(function(e,l){return e.value===l.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(l=null!=m?m:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?l:null==(n=y[0])?void 0:n.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),N=k.tabGroupChoices,w=k.setTabGroupChoices,j=(0,r.useState)(g),O=j[0],I=j[1],E=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=N[d];null!=T&&T!==O&&b.some((function(e){return e.value===T}))&&I(T)}var x=function(e){var l=e.currentTarget,t=E.indexOf(l),a=b[t].value;a!==O&&(P(l),I(a),null!=d&&w(d,a))},C=function(e){var l,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(l=t)||l.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},v)},b.map((function(e){var l=e.value,t=e.label,n=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===l?0:-1,"aria-selected":O===l,key:l,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:x,onClick:x},n,{className:(0,s.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":O===l})}),null!=t?t:l)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,l){return(0,r.cloneElement)(e,{key:l,hidden:e.props.value!==O})}))))}function m(e){var l=(0,n.Z)();return r.createElement(c,(0,a.Z)({key:String(l)},e))}},5237:(e,l,t)=>{t.r(l),t.d(l,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>m,default:()=>d});var a=t(7462),r=t(3366),n=(t(7294),t(3905)),o=t(6396),i=t(8215),u=["components"],s={id:"intl-pluralrules",title:"Intl.PluralRules"},p=void 0,c={unversionedId:"polyfills/intl-pluralrules",id:"polyfills/intl-pluralrules",title:"Intl.PluralRules",description:"A spec-compliant polyfill for Intl.PluralRules fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-pluralrules.md",sourceDirName:"polyfills",slug:"/polyfills/intl-pluralrules",permalink:"/docs/polyfills/intl-pluralrules",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-pluralrules.md",tags:[],version:"current",frontMatter:{id:"intl-pluralrules",title:"Intl.PluralRules"},sidebar:"polyfills",previous:{title:"Intl.NumberFormat (ESNext)",permalink:"/docs/polyfills/intl-numberformat"},next:{title:"Intl.RelativeTimeFormat",permalink:"/docs/polyfills/intl-relativetimeformat"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[],level:3},{value:"Simple",id:"simple",children:[],level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[],level:3}],level:2}],f={toc:m};function d(e){var l=e.components,t=(0,r.Z)(e,u);return(0,n.kt)("wrapper",(0,a.Z)({},f,t,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A spec-compliant polyfill for ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.PluralRules"))," fully tested by the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"official ECMAScript Conformance test suite")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-pluralrules"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-pluralrules.svg?style=flat-square",alt:"npm Version"})),"\n",(0,n.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-pluralrules",alt:"size"})),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(o.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-pluralrules\n"))),(0,n.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-pluralrules\n")))),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),".")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"via-polyfillio"},"Via polyfill.io"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",(0,n.kt)("inlineCode",{parentName:"p"},"Intl.PluralRules"),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.kt)("inlineCode",{parentName:"p"},"Intl.PluralRules.~locale.<locale>")," to your list of features. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.PluralRules, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.PluralRules,Intl.PluralRules.~locale.en"><\/script>\n')),(0,n.kt)("h3",{id:"simple"},"Simple"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-pluralrules/polyfill'\nimport '@formatjs/intl-pluralrules/locale-data/en' // locale-data for en\n")),(0,n.kt)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-pluralrules/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-pluralrules/polyfill-force')\n  await import(`@formatjs/intl-pluralrules/locale-data/${unsupportedLocale}`)\n}\n")))}d.isMDXComponent=!0}}]);