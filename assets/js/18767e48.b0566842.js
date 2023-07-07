"use strict";(self.webpackChunkai_blog=self.webpackChunkai_blog||[]).push([[798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=o,h=u["".concat(s,".").concat(c)]||u[c]||g[c]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(7462),o=(n(7294),n(3905));const r={slug:"captionSAM",title:"How to remove caption from images? - Language SAM",authors:"seulgi",tags:["Research Note","Segment Anything Model","Text Segmentation"]},i=void 0,l={permalink:"/ai-blog/blog/captionSAM",source:"@site/blog/research-note/2023-06-23-captionSAM.md",title:"How to remove caption from images? - Language SAM",description:"How to remove caption from the video data?",date:"2023-06-23T00:00:00.000Z",formattedDate:"June 23, 2023",tags:[{label:"Research Note",permalink:"/ai-blog/blog/tags/research-note"},{label:"Segment Anything Model",permalink:"/ai-blog/blog/tags/segment-anything-model"},{label:"Text Segmentation",permalink:"/ai-blog/blog/tags/text-segmentation"}],readingTime:2.93,hasTruncateMarker:!0,authors:[{name:"SeulGi Hong",title:"Vision AI Engineer",url:"https://github.com/sghong977",imageURL:"https://avatars.githubusercontent.com/u/46152199?v=4",key:"seulgi"}],frontMatter:{slug:"captionSAM",title:"How to remove caption from images? - Language SAM",authors:"seulgi",tags:["Research Note","Segment Anything Model","Text Segmentation"]},prevItem:{title:"Welcome to my blog!",permalink:"/ai-blog/blog/welcome"},nextItem:{title:"Trends on April 2023",permalink:"/ai-blog/blog/2304"}},s={authorsImageUrls:[void 0]},m=[{value:"Task",id:"task",level:2},{value:"How?",id:"how",level:2},{value:"Step 1. What is SAM?",id:"step-1-what-is-sam",level:2},{value:"Step 2. Let&#39;s try Language SAM",id:"step-2-lets-try-language-sam",level:2}],p={toc:m},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to remove caption from the video data?"),(0,o.kt)("h2",{id:"task"},"Task"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Goal"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"I want to remove caption area from images"),(0,o.kt)("li",{parentName:"ul"},"Output sholud be like bbox, or non-rectangular mask only for the text area. Format doesn't matter but the later one is better to keep more information on remain scene"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issue"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"prefer to use ",(0,o.kt)("strong",{parentName:"li"},"generalized pretrained model")),(0,o.kt)("li",{parentName:"ul"},"Fully Automatic: without any supervision from human (without GUI prompt)"),(0,o.kt)("li",{parentName:"ul"},"speed matters")))),(0,o.kt)("h2",{id:"how"},"How?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. OCR"),"\nFirst of all, optical character recognition would be a nice and trustful approach because it has been a long-lasting computer vision task."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scene Text Detection (Localization)"),": to get bbox area of the text in the image",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g., CRAFT ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/clovaai/CRAFT-pytorch"},"https://github.com/clovaai/CRAFT-pytorch")," provides the pre-trained model"))),(0,o.kt)("li",{parentName:"ul"},"Scene Text Recognition: I don't need this part")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Generalized Segmentation Model"),'\nThese days, "Segment Anything" is a trending topic in the field of computer vision. Therefore, I am examining the performance of SAM in masking text areas, and conducting a survey on follow-up studies.'),(0,o.kt)("h2",{id:"step-1-what-is-sam"},"Step 1. What is SAM?"),(0,o.kt)("p",null,"I believe the scene text detection task is well-known and has already achieved satisfactory performance. Therefore, I will explore how SAM works for my specific task."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Generalization"),": SAM is general enough to cover a broad set of use cases and can be used out of the box on new image domains \u2014 whether underwater photos or cell microscopy \u2014 without requiring additional training (a capability often referred to as zero-shot transfer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Time Cost"),": using light-weight for the real-time inference"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Promptable Segmentation Task"),": take various prompts to train for enabling a valid segmentation even with the ambiguous inputs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g., Forground, Backgroud Points / Bounding Box / Masks / Free-form Text are defined as prompts."),(0,o.kt)("li",{parentName:"ul"},"But free-form text is not released (2023.04.06)")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How the model looks like:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To summarize, the model composed of 3 parts. image encoder, prompt encoder, and decoder."),(0,o.kt)("li",{parentName:"ul"},"image encoder: MAE (Masked Auto-Encoder), takes 1024x1024 sized input, using pretrained ViT"),(0,o.kt)("li",{parentName:"ul"},"prompt encoder: the model convert any types of prompt to 256 dim.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"text: using CLIP embedding"),(0,o.kt)("li",{parentName:"ul"},"fg/bg or bbox: using 2 points (NN)"),(0,o.kt)("li",{parentName:"ul"},"Mask: using CNN to reduce size and the last, 1*1 conv generates 256 dim code\n",(0,o.kt)("img",{parentName:"li",src:"https://scontent-gmp1-1.xx.fbcdn.net/v/t39.2365-6/338558258_1349701259095991_4358060436604292355_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=6YFtfSFN9TkAX9KWrZS&_nc_ht=scontent-gmp1-1.xx&oh=00_AfBir_KH9omTbT4lVU6Gx7XOIQ21vb_ytXcNu9ikPmO8XA&oe=649F0109",alt:"img"}))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Dataset: SA-1B")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"COCO run-length encoding (RLE) annotation format"),(0,o.kt)("li",{parentName:"ul"},"provides 11M images and the huge amount of class agnostic, only for the research purpose (the mask doesn't contains the category!)"),(0,o.kt)("li",{parentName:"ul"},"masks are autogenerated by SAM"),(0,o.kt)("li",{parentName:"ul"},"you can request validation set, which is randomly sampled and annotated from human annotators.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"My comments:"),"\nI need a fully automatic process but finding fg&bg or bbox would be an additional task. Luckly, I find a nice open-source project to tackle this!"),(0,o.kt)("p",null,"However, Language SAM is not exactly the same as the original SAM architecture, since Language SAM is relying on text-to-bbox approach by combining SAM and GroundingDINO."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/IDEA-Research/GroundingDINO"},"GroundingDINO")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/segment-anything"},"Segment-Anything")),(0,o.kt)("li",{parentName:"ul"},"GUI is available by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Lightning-AI/lightning"},"Lightning AI"),"! (but i didn't check this)")),(0,o.kt)("h2",{id:"step-2-lets-try-language-sam"},"Step 2. Let's try Language SAM"),(0,o.kt)("p",null,"Let's go back to our task, removing caption area.\nLanguage segment anything model: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/luca-medeiros/lang-segment-anything"},"github link")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Bash"},"pip install torch torchvision\npip install -U git+https://github.com/luca-medeiros/lang-segment-anything.git\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Outputs")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The output is consists of instances, and each of them contain ",(0,o.kt)("strong",{parentName:"li"},"binary mask, bounding box, phrase, logit"),".\n",(0,o.kt)("img",{parentName:"li",src:"https://github.com/sghong977/sghong977.github.io/assets/46152199/39aacc96-cea3-4ec6-bb6e-b31f7fcf146e",alt:"image"}))),(0,o.kt)("p",null,"I didn't upload the output due to the copyright issue, but I'll add some visualization later on."),(0,o.kt)("p",null,"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Language SAM ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/luca-medeiros/lang-segment-anything"},"https://github.com/luca-medeiros/lang-segment-anything")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lightning.ai/pages/community/lang-segment-anything-object-detection-and-segmentation-with-text-prompt/"},"https://lightning.ai/pages/community/lang-segment-anything-object-detection-and-segmentation-with-text-prompt/")),(0,o.kt)("li",{parentName:"ul"},"facebook ",(0,o.kt)("a",{parentName:"li",href:"https://ai.facebook.com/blog/segment-anything-foundation-model-image-segmentation/?ref=blog.annotation-ai.com"},"post")),(0,o.kt)("li",{parentName:"ul"},"(KR) Explanation about SAM details ",(0,o.kt)("a",{parentName:"li",href:"https://blog.annotation-ai.com/segment-anything/"},"https://blog.annotation-ai.com/segment-anything/"))))}g.isMDXComponent=!0}}]);