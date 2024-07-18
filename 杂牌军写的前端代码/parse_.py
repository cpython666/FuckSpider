with open("index.html", "r", encoding="utf-8") as f:
    html_txt = f.read()

from lxml import html

tree = html.fromstring(html_txt)

print(html.tostring(tree, pretty_print=True, encoding="utf-8").decode("utf-8"))
