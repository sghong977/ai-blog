"use strict";(self.webpackChunkai_blog=self.webpackChunkai_blog||[]).push([[4192],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={slug:"2303",title:"Trends on September 2022",authors:"seulgi",tags:["Trends"]},i=void 0,s={permalink:"/ai-blog/blog/2303",source:"@site/blog/tech-trends/2022-09-29-2209.md",title:"Trends on September 2022",description:"AI-related things that I got on this month.",date:"2022-09-29T00:00:00.000Z",formattedDate:"September 29, 2022",tags:[{label:"Trends",permalink:"/ai-blog/blog/tags/trends"}],readingTime:1.185,hasTruncateMarker:!0,authors:[{name:"SeulGi Hong",title:"Vision AI Engineer",url:"https://github.com/sghong977",imageURL:"https://avatars.githubusercontent.com/u/46152199?v=4",key:"seulgi"}],frontMatter:{slug:"2303",title:"Trends on September 2022",authors:"seulgi",tags:["Trends"]},prevItem:{title:"Simple Trial; Scene Text Recognition (STR)",permalink:"/ai-blog/blog/ocr"},nextItem:{title:"Beyond to Action Recognition; A Survey on Advanced Video Understanding",permalink:"/ai-blog/blog/action"}},l={authorsImageUrls:[void 0]},p=[{value:"1. MLOps",id:"1-mlops",level:3},{value:"2. transfer-based methods + StyleGAN",id:"2-transfer-based-methods--stylegan",level:3},{value:"3. neural marker",id:"3-neural-marker",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"AI-related things that I got on this month."),(0,a.kt)("p",null,"As I was wrapping up a national project, I conducted some trend research. Although there are probably better free and paid websites for this, I referred to the following site. It provides recent Arxiv papers, popular tweets, and Reddit posts based on Twitter."),(0,a.kt)("p",null,"Deep Learning Monitor - Find new Arxiv papers, tweets and Reddit posts for you"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://deeplearn.org/"},"DeepLearn: https://deeplearn.org/"))),(0,a.kt)("h3",{id:"1-mlops"},"1. MLOps"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2209.09125v1.pdf"},"https://arxiv.org/pdf/2209.09125v1.pdf"),"  "),(0,a.kt)("p",null,"Recently, there have been many stages involved in development and deployment. So the author conducted interviews with several individuals to write a paper on various aspects ranging from data collection to model versioning and utilization. They interviewed 18 engineers from both large and small companies in various fields such as autonomous driving and finance. As of the current time, this paper is ranked first in popularity based on the past month."),(0,a.kt)("h3",{id:"2-transfer-based-methods--stylegan"},"2. transfer-based methods + StyleGAN"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2209.11224v1.pdf"},"https://arxiv.org/pdf/2209.11224v1.pdf"),"  "),(0,a.kt)("p",null,"This paper combines ",(0,a.kt)("strong",{parentName:"p"},"image transfer-based methods and Style GAN")," to take both advantages."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"StyleGAN extracts ",(0,a.kt)("strong",{parentName:"li"},"style codes")," to create transformed images, but it has limitations due to fixed-crop."),(0,a.kt)("li",{parentName:"ul"},"On the other hand, image-to-image translation learns source-to-target mappings in a paired manner. Due to the paired supervision, it is difficult to achieve the same level of freedom in transformation as StyleGAN.")),(0,a.kt)("h3",{id:"3-neural-marker"},"3. neural marker"),(0,a.kt)("p",null,"This paper also focuses on video editing, similar to the second paper. It seems promising for advertising purposes."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2209.08896v1.pdf"},"https://arxiv.org/pdf/2209.08896v1.pdf")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46152199/192956177-c9bc04a2-e169-4ab9-b7bb-a05641bfda08.png",alt:"image"})))}c.isMDXComponent=!0}}]);