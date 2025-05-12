.DEFAULT_GOAL := all

all: clean portfolio html

html:
	node node_modules/.bin/lessc css/style.less css/style.css
	node build/template.js build/index.html index.html

portfolio:
	python3 build/clean_images.py img/photography/medium-res
	mkdir -p img/photography/thumbnail
	mkdir -p img/photography/low-res
	node build/resize.js img/photography/medium-res 10% 75 100kb img/photography/thumbnail
	node build/resize.js img/photography/medium-res 50% 75 300kb img/photography/low-res

clean:
	rm -rf img/photography/thumbnail
	rm -rf img/photography/low-res
	rm -rf index.html
	rm -rf css/style.css

install:
	# /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
	xargs brew install < brew
	npm install