lessc ../css/style.less ../css/style.css

for file in posts/*.md; do
	showdown makehtml -i "${file}" -o "${file%.md}.html"
done

template index/index.template.html ../index.html