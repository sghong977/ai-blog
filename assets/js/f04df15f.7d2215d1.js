"use strict";(self.webpackChunkai_blog=self.webpackChunkai_blog||[]).push([[9130],{5023:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"start-blogging","metadata":{"permalink":"/ai-blog/blog/start-blogging","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-06-28-start-blogging.md","source":"@site/blog/2023-06-28-start-blogging.md","title":"Kick off!","description":"I just started my blogging!","date":"2023-06-28T00:00:00.000Z","formattedDate":"June 28, 2023","tags":[{"label":"start","permalink":"/ai-blog/blog/tags/start"},{"label":"blogging","permalink":"/ai-blog/blog/tags/blogging"},{"label":"AI","permalink":"/ai-blog/blog/tags/ai"},{"label":"docusaurus","permalink":"/ai-blog/blog/tags/docusaurus"}],"readingTime":0.295,"hasTruncateMarker":false,"authors":[{"name":"SeulGi Hong","title":"Vision AI Engineer @ CJ AI Center","url":"https://github.com/sghong977","imageURL":"https://media.licdn.com/dms/image/D5603AQGRf-2u7XRd3Q/profile-displayphoto-shrink_800_800/0/1670852033708?e=1693440000&v=beta&t=1tHwHsKS_UJUw6G2hDlqLYyX0u4Qoi1AKf5Xik_ONoo","key":"seulgi"}],"frontMatter":{"slug":"start-blogging","title":"Kick off!","authors":["seulgi"],"tags":["start","blogging","AI","docusaurus"]},"nextItem":{"title":"Welcome","permalink":"/ai-blog/blog/welcome"}},"content":"I just started my blogging!\\n\\n## This is my test page\\n- I\'m just browsing the features of docusaurus now!\\n\\n![Docusaurus Plushie](https://github.com/sghong977/Daily_AIML/assets/46152199/7ee07249-1217-4061-be65-aa0d766c8b5c)\\n\\n\\nI can make button: <button onClick={() => alert(\'button clicked!\')}>Click me!</button>. cool!\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"welcome","metadata":{"permalink":"/ai-blog/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-06-28-welcome/index.md","source":"@site/blog/2023-06-28-welcome/index.md","title":"Welcome","description":"Hi, welcome to my blog!","date":"2023-06-28T00:00:00.000Z","formattedDate":"June 28, 2023","tags":[{"label":"main","permalink":"/ai-blog/blog/tags/main"},{"label":"AI","permalink":"/ai-blog/blog/tags/ai"}],"readingTime":0.285,"hasTruncateMarker":false,"authors":[{"name":"SeulGi Hong","title":"Vision AI Engineer @ CJ AI Center","url":"https://github.com/sghong977","imageURL":"https://media.licdn.com/dms/image/D5603AQGRf-2u7XRd3Q/profile-displayphoto-shrink_800_800/0/1670852033708?e=1693440000&v=beta&t=1tHwHsKS_UJUw6G2hDlqLYyX0u4Qoi1AKf5Xik_ONoo","key":"seulgi"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["seulgi"],"tags":["main","AI"]},"prevItem":{"title":"Kick off!","permalink":"/ai-blog/blog/start-blogging"},"nextItem":{"title":"Settings","permalink":"/ai-blog/blog/settings"}},"content":"Hi, welcome to my blog!\\n[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"settings","metadata":{"permalink":"/ai-blog/blog/settings","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-04-07-settings.mdx","source":"@site/blog/2023-04-07-settings.mdx","title":"Settings","description":"Stressful Settings.","date":"2023-04-07T00:00:00.000Z","formattedDate":"April 7, 2023","tags":[{"label":"installation","permalink":"/ai-blog/blog/tags/installation"}],"readingTime":2.455,"hasTruncateMarker":false,"authors":[{"name":"SeulGi Hong","title":"Vision AI Engineer @ CJ AI Center","url":"https://github.com/sghong977","imageURL":"https://media.licdn.com/dms/image/D5603AQGRf-2u7XRd3Q/profile-displayphoto-shrink_800_800/0/1670852033708?e=1693440000&v=beta&t=1tHwHsKS_UJUw6G2hDlqLYyX0u4Qoi1AKf5Xik_ONoo","key":"seulgi"}],"frontMatter":{"slug":"settings","title":"Settings","authors":["seulgi"],"tags":["installation"]},"prevItem":{"title":"Welcome","permalink":"/ai-blog/blog/welcome"}},"content":"Stressful Settings.\\n\\n# Dependencies\\n- Detectron2\\n  - python 3.7 >=\\n  - torch 1.8 >=\\n- scikit-learn == 0.22\\n  - it takes a while to set\\n  - pip: Cython\\n  - apt-get: gcc, g++\\n    - [link](https://woowaa.net/entry/gcc-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)\\n- official neural renderer is tensorflow version.\\n\\n<hr  />\\n\\n\\n# Errors\\n### \\"ImportError: libGL.so.1: cannot open shared object file: No such file or directory\\"\\n  - apt-get update && apt-get install ffmpeg libsm6 libxext6  -y\\n\\n### ImportError: (\'Unable to load OpenGL library\', \'OSMesa: cannot open shared object file: No such file or directory\', \'OSMesa\', None)\\n- install OSMesa\\n\\n### AttributeError: \'PosixPath\' object has no attribute \'path\'\\n- [link](https://stackoverflow.com/questions/59693174/attributeerror-posixpath-object-has-no-attribute-path)\\n- [link2](https://ryanking13.github.io/2018/05/22/pathlib.html)\\n- PosixPath? When I print os.name, \'posix\' returned.\\n\\n\\n<hr  />\\n\\n# Docker\\n\\n### How to delete none docker images?\\n`docker rmi $(docker images -f \\"dangling=true\\" -q)`\\nAfter I tried this, every &lt;none&gt; dockers are deleted.\\n\\n\\n<hr  />\\n\\n# Installation\\n\\n### OpenPose\\n- Install guide [link](https://github.com/CMU-Perceptual-Computing-Lab/openpose/blob/master/doc/installation/0_index.md#compiling-and-running-openpose-from-source), [link2](https://jjeamin.github.io/posts/openpose/)\\n- I\'m using Ubuntu server and don\'t have GUI\\n- git clone regressively.\\n- .... I just download openpose docker image. docker pull d0ckaaa/openpose\\n- cmake ..\\n- make -j4`nproc`\\n- how to use: https://viso.ai/deep-learning/openpose/\\n  \\n### OSMesa\\n- Try this. [link](https://pyrender.readthedocs.io/en/latest/install/index.html#installmesa)\\n- Before try this,\\n  - apt-get install wget\\n  - apt-get install pkg-config\\n  - apt-get install libexpat1-dev\\n- i installed in /usr/local\\n- MESA_HOME=/usr/local (+/lib?)\\n- issues\\n  - https://redstarhong.tistory.com/98 GL? PyOpenGL?\\n  - update \\"/opt/conda/lib/python3.9/site-packages/OpenGL/platform/egl.py\\"\\n  - apt-get install libosmesa6-dev\\n  - if PyOpenGL is failed, clone git and reinstall PyOpenGL.\\n  \\n### PHALP  \\nI failed while using conda yml file because:\\n- First, I installed conda inside of a docker container to keep experiments going on.\\n  - when I tried to create conda env, it takes more than an hour to solve dependencies, but it still doesn\'t finished.\\n- Then, I tried to install every commands on my own, neural renderer and cuda path problems occurred.\\n  - It was hard for me to find cuda path in conda env because someone said that each conda environment would only contain the parts of cuda\\n  - So I should export every paths of cuda related stuff, but when I searched cuda paths in my server computer, there are too many other settings, so I\'m not sure what to add\\n- These are the reasons why I didn\'t use conda\\n\\nI use these commands sequentially. After that, demo works well on my docker container.\\nOfficial PHALP\'s colab pip output: [phalp_colab.txt](https://github.com/sghong977/sghong977.github.io/files/11175914/phalp_colab.txt)  \\n  \\n! pip install pyrender  \\n! pip install opencv-python  \\n! pip install joblib  \\n! pip install cython  \\n! pip install scikit-learn==0.22  \\n! pip install scikit-image  \\n! pip install git+https://github.com/facebookresearch/detectron2.git  \\n! pip install git+https://github.com/brjathu/pytube.git  \\n! pip install git+https://github.com/brjathu/NMR.git  \\n! pip install chumpy  \\n! pip install ipython  \\n! pip install gdown  \\n! pip install dill  \\n! pip install scenedetect[opencv]  \\n  \\nBut if you use v1.1, additional packages are needed.\\n- Install OSMesa\\n- pip install smplx submitit rich pyrootutils colordict\\n- pip install -e .\\n- install hydra-core again (Posix error)\\n- python scripts/demo.py video.source=\\\\\'\\"https://www.youtube.com/watch?v=xEH_5T9jMVU\\"\\\\\'\\n  - I use osmesa, not egl\\n![image](https://user-images.githubusercontent.com/46152199/230560634-e9edb760-e566-4d5c-88c1-ea38c4cf3855.png)"}]}')}}]);