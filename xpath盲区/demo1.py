from lxml import html
txt = """
<div class="flex">
<span>我的爱好</span>
 <p>
   <a href="../sport.htm">运动</a>
</p>
</div>
"""
tree = html.fromstring(txt)
element = tree.xpath("//*[contains(text(), '爱好')]")[0]
print(html.tostring(element, pretty_print=True, encoding="utf-8").decode("utf-8"))
