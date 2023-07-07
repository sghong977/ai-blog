"use strict";(self.webpackChunkai_blog=self.webpackChunkai_blog||[]).push([[9868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=i,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={slug:"detection4",title:"mmdetection YOLOX; image encoder transfer learning",authors:"seulgi",tags:["Research Note","Object Detection","VIPrior"]},o=void 0,l={permalink:"/ai-blog/blog/detection4",source:"@site/blog/research-note/challenge-vipriors/2022-08-25-detection4.md",title:"mmdetection YOLOX; image encoder transfer learning",description:"Episode 4 for my VIPrior challenge journey link!",date:"2022-08-25T00:00:00.000Z",formattedDate:"August 25, 2022",tags:[{label:"Research Note",permalink:"/ai-blog/blog/tags/research-note"},{label:"Object Detection",permalink:"/ai-blog/blog/tags/object-detection"},{label:"VIPrior",permalink:"/ai-blog/blog/tags/vi-prior"}],readingTime:1.095,hasTruncateMarker:!0,authors:[{name:"SeulGi Hong",title:"Vision AI Engineer",url:"https://github.com/sghong977",imageURL:"https://avatars.githubusercontent.com/u/46152199?v=4",key:"seulgi"}],frontMatter:{slug:"detection4",title:"mmdetection YOLOX; image encoder transfer learning",authors:"seulgi",tags:["Research Note","Object Detection","VIPrior"]},prevItem:{title:"mmdetection; change scheduler, ensemble",permalink:"/ai-blog/blog/detection5"},nextItem:{title:"Using mmclassification; CSPDarkNet, YOLO series",permalink:"/ai-blog/blog/detection3"}},s={authorsImageUrls:[void 0]},c=[{value:"Experiments",id:"experiments",level:3},{value:"Training Settings",id:"training-settings",level:3},{value:"Results?",id:"results",level:3}],u={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Episode 4 for my VIPrior challenge journey ",(0,i.kt)("a",{parentName:"p",href:"https://vipriors.github.io/"},"link"),"!"),(0,i.kt)("h1",{id:"situation"},"Situation"),(0,i.kt)("p",null,"Following the previous issues (refer to the last posts), I have successfully resolved minor data annotation bugs and retrained the image encoder without any more issues. Now, let's bring it back to ",(0,i.kt)("strong",{parentName:"p"},"mmdetection and train the model"),"."),(0,i.kt)("h3",{id:"experiments"},"Experiments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Backbone: CSPDarkNet (initialized with classification training)"),(0,i.kt)("li",{parentName:"ul"},"Detection model: YOLOX (one-stage model)"),(0,i.kt)("li",{parentName:"ul"},"Weight and Bias logs: ",(0,i.kt)("a",{parentName:"li",href:"https://wandb.ai/sghong/MMDetection-tutorial?workspace=user-sghong"},"mmdetection"),", ",(0,i.kt)("a",{parentName:"li",href:"https://wandb.ai/sghong/MMcls-challenge?workspace=user-sghong"},"mmclassification")),(0,i.kt)("li",{parentName:"ul"},"The results will be available in 4 hours, so I will update later.")),(0,i.kt)("h3",{id:"training-settings"},"Training Settings"),(0,i.kt)("p",null,"List of transfer learning attempts this time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"YOLOX + CSPDarknet (CE loss)"),(0,i.kt)("li",{parentName:"ul"},"YOLOX + CSPDarknet transfer learning"),(0,i.kt)("li",{parentName:"ul"},"Cascade RCNN + ResNet50 (CE loss)"),(0,i.kt)("li",{parentName:"ul"},"Cascade RCNN + CBNetV2 (CE loss): Currently encountering an error.")),(0,i.kt)("h3",{id:"results"},"Results?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Augmentation"),": There was a significant difference between using YOLOXHSVRandomAug or not (mAP difference of 0.1)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Weight initialization"),": Transfer learning with (supervised) classification task performs better than using self-supervised learning for the backbone. Both settings are better than a general random initialization backbone."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Loss"),": There was no significant difference between using ",(0,i.kt)("strong",{parentName:"li"},"CE loss or Label Smooth Loss")," during backbone training."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bug"),": Encountering nan loss in a specific model while performing mmclassification (ResNet50).")),(0,i.kt)("p",null,"In any case, we achieved a validation mAP of 0.284 in 300 epochs.\nLet's try ensemble.\nConfig: /raid/sghong/Detection/mmdetection/work_dirs/yoloxx_0826/yolox_cls_aug.py"))}p.isMDXComponent=!0}}]);