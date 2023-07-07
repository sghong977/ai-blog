"use strict";(self.webpackChunkai_blog=self.webpackChunkai_blog||[]).push([[8461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(g,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={slug:"gitblog",title:"Simply making Gitblog for accepted paper",authors:["seulgi"],tags:["Debug","Paper Writing"]},o=void 0,l={permalink:"/ai-blog/blog/gitblog",source:"@site/blog/settings/2022-08-23-gitblog.md",title:"Simply making Gitblog for accepted paper",description:"For the camera-ready submission, I re-uploaded the code.",date:"2022-08-23T00:00:00.000Z",formattedDate:"August 23, 2022",tags:[{label:"Debug",permalink:"/ai-blog/blog/tags/debug"},{label:"Paper Writing",permalink:"/ai-blog/blog/tags/paper-writing"}],readingTime:.54,hasTruncateMarker:!0,authors:[{name:"SeulGi Hong",title:"Vision AI Engineer",url:"https://github.com/sghong977",imageURL:"https://avatars.githubusercontent.com/u/46152199?v=4",key:"seulgi"}],frontMatter:{slug:"gitblog",title:"Simply making Gitblog for accepted paper",authors:["seulgi"],tags:["Debug","Paper Writing"]},prevItem:{title:"Using mmclassification; CSPDarkNet, YOLO series",permalink:"/ai-blog/blog/detection3"},nextItem:{title:"Rebuttal format for my workshop paper",permalink:"/ai-blog/blog/rebuttal"}},g={authorsImageUrls:[void 0]},p=[{value:"optional Creating an Organization",id:"optional-creating-an-organization",level:2},{value:"Uploading the Code",id:"uploading-the-code",level:2},{value:"Creating a Git Blog",id:"creating-a-git-blog",level:2}],s={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For the camera-ready submission, I re-uploaded the code."),(0,a.kt)("h2",{id:"optional-creating-an-organization"},"[optional]"," Creating an Organization"),(0,a.kt)("p",null,"Creating an Organization allows accessing it at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://[organization-name].github.io/"),".\nYou can upload repositories within your organization, but I skipped this step due to laziness."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46152199/186045015-d06d520a-ae77-4e15-b09f-d593b79cd4f1.png",alt:"image"})),(0,a.kt)("h2",{id:"uploading-the-code"},"Uploading the Code"),(0,a.kt)("p",null,"First, I upload the code that I want to make public.\nI created a new repository: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sghong977/Surgical-Bleeding-AMAGI.git"},"https://github.com/sghong977/Surgical-Bleeding-AMAGI.git")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46152199/186047734-c3d69637-5a30-448b-99fa-8222dbdab69b.png",alt:"image"})),(0,a.kt)("h2",{id:"creating-a-git-blog"},"Creating a Git Blog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reference: GitHub Pages ",(0,a.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"link")),(0,a.kt)("li",{parentName:"ul"},"After creating the repository, I added a template and made modifications in vscode before pushing."),(0,a.kt)("li",{parentName:"ul"},"By installing the Markdown Preview Extension, it's convenient to make edits.")),(0,a.kt)("p",null,"Github page link for my MICCAI 2022 workshop paper! ",(0,a.kt)("a",{parentName:"p",href:"https://sghong977.github.io/bleeding/"},"https://sghong977.github.io/bleeding/")))}c.isMDXComponent=!0}}]);