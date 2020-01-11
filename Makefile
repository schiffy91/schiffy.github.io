.DEFAULT_GOAL := all

all: html portfolio

html:
	node node_modules/.bin/lessc css/style.less css/style.css
	node build/template.js build/portfolio.html index.html

portfolio:
	python3 build/clean_images.py img/photography/medium-res
	mkdir -p img/photography/thumbnail
	mkdir -p img/photography/low-res
	node build/resize.js img/photography/medium-res 33% 33 100kb img/photography/thumbnail
	node build/resize.js img/photography/medium-res 75% 75 300kb img/photography/low-res

clean:
	rm -rf img/photography/thumbnail
	rm -rf img/photography/low-res
	rm -rf index.html
	rm -rf css/style.css