import os
import re

# ================= 配置区域 =================
SITE_DOMAIN = "https://www.chengdurandengsigm.com"  # 换成你的域名，结尾不要带斜杠
BASE_DIR = "./"  # 网站根目录路径
# ===========================================

def process_html_files():
    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                # 获取相对路径，例如：show/about.html
                rel_path = os.path.relpath(file_path, BASE_DIR).replace("\\", "/")
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # 判断是移动端页面还是PC端页面
                if rel_path.startswith("mobile/"):
                    # --- 移动端页面：添加指向 PC 的 canonical ---
                    pc_path = rel_path.replace("mobile/", "", 1)
                    tag = f'\n    <link rel="canonical" href="{SITE_DOMAIN}/{pc_path}">'
                else:
                    # --- PC 端页面：添加指向 Mobile 的 alternate ---
                    mobile_path = "mobile/" + rel_path
                    tag = f'\n    <link rel="alternate" media="only screen and (max-width: 640px)" href="{SITE_DOMAIN}/{mobile_path}">'

                # 如果页面里还没加过这些标签，就插入到 <head> 后面
                if 'rel="canonical"' not in content and 'rel="alternate"' not in content:
                    new_content = re.sub(r'(<head>|HEAD>)', r'\1' + tag, content, count=1)
                    
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"成功处理: {rel_path}")
                else:
                    print(f"跳过(已存在标签): {rel_path}")

if __name__ == "__main__":
    process_html_files()
    print("\nSEO 标签批量处理完成！")
