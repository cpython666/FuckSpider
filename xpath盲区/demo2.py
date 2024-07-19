from lxml import html
txt = """
<div class="flex">
<span>我的</span>爱好
 <p>
   <a href="../sport.htm">运动</a>
</p>
</div>
"""
tree = html.fromstring(txt)
print(html.tostring(tree, pretty_print=True, encoding="utf-8").decode("utf-8"))
element = tree.xpath("//*[contains(text(), '爱好')]")[0]
print(html.tostring(element, pretty_print=True, encoding="utf-8").decode("utf-8"))
