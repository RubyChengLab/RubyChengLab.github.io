---
layout: post
title: "[Arduino教學] 蜂鳴器播放聲音"
date: 2025-07-16
bg: /images/20efc85c275d9dcb694f84c6dd2d5378_t.jpeg
tags: [Arduino]
categories: [Arduino]
---
{% include post-style.html %}
## [Arduino教學] 蜂鳴器播放聲音
今天來試試讓蜂鳴器發出聲音！

```cpp
void setup() {
  pinMode(8, OUTPUT);
}

void loop() {
  tone(8, 440);       // 發出 440Hz 聲音（A音）
  delay(1000);        // 持續1秒
  noTone(8);          // 停止聲音
  delay(1000);        // 靜音1秒
}
```
