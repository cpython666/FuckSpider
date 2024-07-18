from lxml import html

txt = '''
<h1 class="flex">
<span>我的爱好</span>
 <p>
   <a href="../sport.htm">运动</a>
</p>
</h1>
'''
for i in range(1,6+1):
    txt=txt.replace(f'<h{i}','<div').replace(f'h{i}>','div>')
tree = html.fromstring(txt)
# tree = html.fromstring(txt)
print(html.tostring(tree,pretty_print=True,encoding='utf-8').decode('utf-8'))
# 将所有的h1、h2、h3标签替换为div标签
# for tag in ['h1', 'h2', 'h3','h4','h5','h6']:
#     elements = tree.xpath(f'//{tag}')
#     for element in elements:
#         element.tag = 'div'

element = tree.xpath("//*[contains(text(), '爱好')]/..")[0]
print(html.tostring(element, pretty_print=True, encoding='utf-8').decode('utf-8'))