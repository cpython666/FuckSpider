import svgwrite
import random

dwg = svgwrite.Drawing("random_numbers.svg", size=(200, 22), profile="tiny")
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
random.shuffle(nums)
for i, num in enumerate(nums):
    text = dwg.add(dwg.text(str(num), insert=(i * 20, 20), fill="black", font_size=16))
dwg.save()
