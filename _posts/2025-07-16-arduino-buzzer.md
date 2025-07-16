---
layout: post
title: "[Arduino教學] 蜂鳴器播放聲音"
date: 2025-07-16
---

```cpp
void setup() {
  pinMode(8, OUTPUT);
}

void loop() {
  tone(8, 440); // 發出 440Hz 聲音（A音）
  delay(1000);
  noTone(8);
  delay(1000);
}