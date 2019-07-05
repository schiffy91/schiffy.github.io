.DEFAULT_GOAL := all

all: clean
	python3 build/clean_images.py img/photography/medium-res
	mkdir -p img/photography/thumbnail
	mkdir -p img/photography/low-res
	node build/resize.js img/photography/medium-res 33% 33 100kb img/photography/thumbnail
	node build/resize.js img/photography/medium-res 75% 75 300kb img/photography/low-res
	node build/template.js build/portfolio.html index.html

clean:
	rm -rf img/thumbnail
	rm -rf img/low-res
	rm -rf index.html