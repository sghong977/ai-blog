"use strict";(self.webpackChunkai_blog=self.webpackChunkai_blog||[]).push([[5372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(g,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={slug:"2304",title:"(TRENDS) 2023.04",authors:"seulgi",tags:["Trends"]},o=void 0,l={permalink:"/ai-blog/blog/2304",source:"@site/blog/tech-trends/2023-04-11-2304.md",title:"(TRENDS) 2023.04",description:"AI-related things that I got on this week.",date:"2023-04-11T00:00:00.000Z",formattedDate:"April 11, 2023",tags:[{label:"Trends",permalink:"/ai-blog/blog/tags/trends"}],readingTime:.325,hasTruncateMarker:!1,authors:[{name:"SeulGi Hong",title:"Vision AI Engineer",url:"https://github.com/sghong977",imageURL:"https://avatars.githubusercontent.com/u/46152199?v=4",key:"seulgi"}],frontMatter:{slug:"2304",title:"(TRENDS) 2023.04",authors:"seulgi",tags:["Trends"]},prevItem:{title:"(MY NOTE) How to remove caption from images? - Language SAM",permalink:"/ai-blog/blog/captionSAM"},nextItem:{title:"(DEBUG) Settings",permalink:"/ai-blog/blog/settings"}},g={authorsImageUrls:[void 0]},p=[{value:"MonoAvatar",id:"monoavatar",level:2},{value:"Segment Anything",id:"segment-anything",level:2},{value:"3D Object Rigging from a Single Image",id:"3d-object-rigging-from-a-single-image",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"AI-related things that I got on this week."),(0,a.kt)("h2",{id:"monoavatar"},"MonoAvatar"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monocular RGB video -> volumetric photorealistic 3D avatar"),(0,a.kt)("li",{parentName:"ul"},"can be rendered with user-defined expression and viewpoint."),(0,a.kt)("li",{parentName:"ul"},"CVPR 23, Google and Simon Fraser University ",(0,a.kt)("a",{parentName:"li",href:"https://augmentedperception.github.io/monoavatar/"},"link"))),(0,a.kt)("h2",{id:"segment-anything"},"Segment Anything"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/segment-anything"},"Facebook Research")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.annotation-ai.com/segment-anything/"},"kor explain. link"))),(0,a.kt)("h2",{id:"3d-object-rigging-from-a-single-image"},"3D Object Rigging from a Single Image"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CVPR 19 ",(0,a.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/blog/transforming-paintings-and-photos-into-animations-with-ai/"},"animate pic")),(0,a.kt)("li",{parentName:"ul"},"ECCV 22 ",(0,a.kt)("a",{parentName:"li",href:"https://kulbear.github.io/object-wakeup/"},"obj wakeup"))))}u.isMDXComponent=!0}}]);