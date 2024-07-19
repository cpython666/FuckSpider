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
print(tree.xpath('//div//text()'))
