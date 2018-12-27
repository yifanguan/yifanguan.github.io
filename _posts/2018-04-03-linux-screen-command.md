---
layout: post
title:  "Linux Screen command"
date:   2018-04-03
categories: experience
---

## Screen Command

# Introduction:
When I did final competition project of EECS442, I needed to use GPU to train my CNN model on Google Cloud. This training process took more than 10 hours each time. When there was no network connection, terminal session would time out, and I cannot resume my results even if I reconnected to Google Cloud console. Although training is still proceeding, I could not figure out how long it takes to finish. There was no indication/signal once traning was done.
I recalled the linux screen command I read online previously. It solved my problem efficiently. I would like to share it to you!

# Usage
1. Install:
```bash
$ sudo apt install screen
```

2. Open a screen:
```bash
$ screen
```

3. Perform tasks you want to perform in the ways you do in other terminals

4. detach the screen: 
```bash
ctrl + a + d
```

5. resume: (This gives you the powerful to resume your results) 
```bash
$ screen -r
```

6. kill screen once your tasks are done: <br />
{num}: gotten from (screen -list)
```bash
$ screen -S {num} -X quit
```