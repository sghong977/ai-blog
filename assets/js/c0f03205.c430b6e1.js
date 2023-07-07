"use strict";(self.webpackChunkai_blog=self.webpackChunkai_blog||[]).push([[4289],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,b=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={slug:"mshot",title:"Multishot Human Pose",authors:"seulgi",tags:["Research Note","SMPL","3D Human Pose","Pose Estimation","PHALP","MultiShot","OpenPose"]},l=void 0,i={permalink:"/ai-blog/blog/mshot",source:"@site/blog/research-note/2023-04-05-mshot.md",title:"Multishot Human Pose",description:"I'm trying to extract SMPL parameters on video in a multishot setting. To this end, tracklets are necessary.",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"Research Note",permalink:"/ai-blog/blog/tags/research-note"},{label:"SMPL",permalink:"/ai-blog/blog/tags/smpl"},{label:"3D Human Pose",permalink:"/ai-blog/blog/tags/3-d-human-pose"},{label:"Pose Estimation",permalink:"/ai-blog/blog/tags/pose-estimation"},{label:"PHALP",permalink:"/ai-blog/blog/tags/phalp"},{label:"MultiShot",permalink:"/ai-blog/blog/tags/multi-shot"},{label:"OpenPose",permalink:"/ai-blog/blog/tags/open-pose"}],readingTime:3.09,hasTruncateMarker:!0,authors:[{name:"SeulGi Hong",title:"Vision AI Engineer",url:"https://github.com/sghong977",imageURL:"https://avatars.githubusercontent.com/u/46152199?v=4",key:"seulgi"}],frontMatter:{slug:"mshot",title:"Multishot Human Pose",authors:"seulgi",tags:["Research Note","SMPL","3D Human Pose","Pose Estimation","PHALP","MultiShot","OpenPose"]},prevItem:{title:"Annoying Settings",permalink:"/ai-blog/blog/settings"},nextItem:{title:"LERF; Language Embedded Radiance Fields",permalink:"/ai-blog/blog/lerf"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I'm trying to extract SMPL parameters on video in a multishot setting. To this end, tracklets are necessary."))}g.isMDXComponent=!0}}]);