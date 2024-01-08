---
slug: detection
title: How to improve Object Detection performance? + tools
authors: seulgi
tags: [Research Note, Object Detection, VIPrior]
---


Episode 1 for my VIPrior challenge journey [link](https://vipriors.github.io/)!


<!--truncate-->

### Useful Papers
1. Making Images Real Again: A Comprehensive Survey on Deep Image Composition
2. Bag of Freebies for Training Object Detection Neural Networks


### Image Composition?
- The issue of **small datasets** -> The concept of image composition came up as a way to diversify information through **data augmentation**.
- (Refer to Paper 1) It was shared by a team member that image compositing is not about randomly placing objects like simple copy & paste algorithm. Instead, it aims to make the composition **more realistic**.
  - For example, human should be not copy&pasted in the sky, since we cannot fly!


### Tools
- I came across a website called [FiftyOne](https://voxel51.com/docs/fiftyone/). It seems to be related to detection bounding boxes and instance segmentation annotation tools. I should take a look at it.
- [Roboflow](https://roboflow.com/): It provides detailed analysis of the dataset itself, various augmentations, and the ability to train models on the web.
  - The visualization is also well-done, making it convenient.
  - It seems that training is free for up to 3 times, and an email will be sent when the training is completed.
  - I haven't used either of them yet, so I'll make a note after trying them out.
    - -> (UPDATED) I totally fall in love to the Roboflow!


### Hyperparameter Tuning?
- Refer to **Paper 2**.
- (My teammate who keep on this field told me that) It is recommended to **use well-known hyperparameters** as they are, instead of hyperparameter tuning and search.


### Small Object, High Bounding Box Overlap Issue
When training for small objects, a simple method is to increase the resolution.
We had a meeting to analyze the characteristics of the current target data (VIPriors [link](https://vipriors.github.io/), for challenge) through the dataset health check in Roboflow and find possible solutions.

The discussion content, future improvements, and work direction will be added below after the meeting.



### Idea? (after meeting)
- Train based on their own characteristics: Divide into small, medium, and large categories.
  - for example, in the case of bicycle data where there are many overlapping small object bounding boxes, divide them into multiple models, each responsible for a few classes. Then, combine the results during inference.
  - It is not an ensemble, simply divide the recognizable classes by several models.
- Transfer learning: Pretrained models are not allowed in this challenge. But, instead of random initialization, what if we crop object bounding boxes and **train an image classification model** to **initialize the image encoder**?



### etc
survey on crowd detection...