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
span=tree.xpath('//span')[0]
print(html.tostring(span, pretty_print=True, encoding="utf-8").decode("utf-8"))
print(span.xpath('.//text()'))
