---
layout: post
title: "[微積分入門] 什麼是極限？"
date: 2025-07-16
bg: /images/20efc85c275d9dcb694f84c6dd2d5378_t.jpeg
tags: [Calculus, Math, Limits]
categories: [Math]
mathjax: true
---

## [微積分入門] 什麼是極限？

極限的觀念是微積分的根本。

舉例來說：當 $x$ 趨近於 0 時，$ \frac{1}{x} $ 趨近於無窮大；這就是「極限」的直觀概念。
$$
\lim_{x \to 0^+} \frac{1}{x} = +\infty
$$

---

### 更進一步：極限的數學定義

當我們說
$$
\lim_{x \to a} f(x) = L
$$
意思是：

對於任意微小的正數 $\varepsilon > 0$，  存在一個正數 $\delta > 0$，  使得只要 $0 < |x - a| < \delta$，就會有 $|f(x) - L| < \varepsilon$。

用公式表示：

$$
\forall \varepsilon > 0, \exists \delta > 0, \text{ 當 } 0 < |x - a| < \delta, \text{ 則 } |f(x) - L| < \varepsilon
$$

---

### 常見例子

#### 1. 極限存在的情況：
$$
\lim_{x \to 2} (3x + 1) = 7
$$

#### 2. 極限不存在的情況：
$$
\lim_{x \to 0} \frac{1}{x} = \infty
$$
此時極限趨近無窮大，稱為「無窮極限」。

---

### 總結

極限是理解連續、導數、積分等概念的基礎，掌握極限後，後續的微積分學習會更加輕鬆。

