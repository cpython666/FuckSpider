from lxml import html
txt = """
<div class="flex">
<span>我的</span>爱好
 <p>
   <a href="../sport.htm">爱好运动</a>爱好
</p>爱好
</div>
"""
tree = html.fromstring(txt)
element = tree.xpath("//*[contains(text(), '爱好')]")[0]
print(html.tostring(element, pretty_print=True, encoding="utf-8").decode("utf-8"))
