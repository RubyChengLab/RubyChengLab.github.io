import os

# 假設這是你文章 front matter 裡出現過的分類列表
# 你可以用其他方式抓取分類，這裡是範例
categories = [
    "Arduino",
    "Math",
    "Electronics",
]

output_dir = "categories"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

template = """---
layout: category
category: {category}
permalink: /categories/{category_slug}/
---

<!-- 這是自動生成的分類頁，請勿手動修改 -->

"""

def slugify(text):
    return text.lower().replace(" ", "-")

for cat in categories:
    slug = slugify(cat)
    filename = f"{output_dir}/{slug}.md"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(template.format(category=cat, category_slug=slug))

print(f"共產生 {len(categories)} 個分類頁面！")
