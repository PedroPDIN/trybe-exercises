import requests
from parsel import Selector


# ==== exercise_01

#response = requests.get("https://httpbin.org/encoding/utf8")
# print(response.status_code)
# print(response.text)


# ==== exercise_02

# response = requests.get("https://api.github.com/users")
# print(response.status_code)
# response_github_users = response.json()
# for user in response_github_users:
#     print(user["login"], user["url"])


# ==== exercise_03

# response = requests.get(
#   "https://scrapethissite.com/pages/advanced/?gotcha=headers",
#   headers={"User-Agent": "Mozilla", "Accept": "text/json"}
# )
# assert "bot detected" not in response.txt


# ==== exercise_04

# URL_BASE = "http://books.toscrape.com"
# response = requests.get(f"{URL_BASE}/catalogue/the-grand-design_405/index.html")
# selector = Selector(text=response.text)
# title_selector = selector.css(".product_main h1::text").get()
# 
# price_selector = selector.css(".product_main .price_color::text").get()
# format_price = price_selector.maketrans("", "", "Â£")
# price = price_selector.translate(format_price)
# 
# description_selector = selector.css("#product_description ~ p::text").get()
# suffix = "...more"
# if description_selector.endswith(suffix):
#     description_selector = description_selector[:-len(suffix)]
# 
# cover_selector = selector.css(".item img::attr(src)").get()
# cover = f"{URL_BASE}{cover_selector}"
# 
# print(title_selector, price, description_selector, cover, sep=", ")


# ==== exercise_05

URL_BASE = "http://books.toscrape.com"
response = requests.get(f"{URL_BASE}/catalogue/the-grand-design_405/index.html")
selector = Selector(text=response.text)
title_selector = selector.css(".product_main h1::text").get()

price_selector = selector.css(".product_main .price_color::text").get()
format_price = price_selector.maketrans("", "", "Â£")
price = price_selector.translate(format_price)

description_selector = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description_selector.endswith(suffix):
    description_selector = description_selector[:-len(suffix)]

cover_selector = selector.css(".item img::attr(src)").get()
cover = f"{URL_BASE}{cover_selector}"

stock_selector = selector.css(
  ".product_main .availability::text"
).re_first(r"\d")

# re_first => É um método que recebe uma expressão regular e que vai capturar o
# elemento que satisfaça o valor do parâmetro recebido,
# sem pegar aquele carácter especial

# print(stock_selector)
print(
  title_selector,
  price,
  description_selector,
  cover,
  stock_selector,
  sep=", "
)
