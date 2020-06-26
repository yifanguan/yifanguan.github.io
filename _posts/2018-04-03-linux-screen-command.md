---
layout: post
title:  "Linux screen command"
date:   2018-04-03
categories: experience
---

## Screen Command

# Introduction:
When I did the final competition project of EECS442, I needed GPU to train my CNN models on Google Cloud. This training process took more than 10 hours each time. When there was no user action performed on the cloud server, the terminal session would time out, and I cannot resume my results even if I reconnected to Google Cloud console. Although the training process is still proceeding, I could not figure out how long it takes to finish. There was no indication/signal once the training completed.
I recalled the Linux screen command I read online previously. It solved my problem efficiently. I want to share it with you in this post!

# Usage
1. Install:
```bash
$ sudo apt install screen
```

2. Open a screen:
```bash
$ screen
```

3. Perform tasks you want to perform using the same ways you do in terminals

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