import os
import re
import yaml
import unicodedata

POSTS_DIR = "_posts"
TAGS_DIR = "tags"

os.makedirs(TAGS_DIR, exist_ok=True)
tag_set = set()

def slugify(text):
    text = unicodedata.normalize('NFKD', text)
    text = text.encode('ascii', 'ignore').decode('ascii')
    return re.sub(r'[^\w\-]+', '', text.strip().lower().replace(' ', '-'))

# 掃描所有文章的 tags
for filename in os.listdir(POSTS_DIR):
    if filename.endswith(".md") or filename.endswith(".markdown"):
        with open(os.path.join(POSTS_DIR, filename), "r", encoding="utf-8") as f:
            content = f.read()
            match = re.match(r"---(.*?)---", content, re.DOTALL)
            if match:
                front_matter = yaml.safe_load(match.group(1))
                tags = front_matter.get("tags", [])
                tag_set.update(tags)

# 產生 tags/*.md 檔案
for tag in sorted(tag_set):
    slug = slugify(tag)
    filepath = os.path.join(TAGS_DIR, f"{slug}.md")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(f"""---
layout: tag
tag: {tag}
permalink: /tags/{slug}/
---
""")
    print(f"✅ Created: {filepath} for tag '{tag}'")
