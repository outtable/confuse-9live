cp -r Code docs/_site
cd docs
bundle exec jekyll build
sed 's#http://localhost:4000/#https://crab-ios.com/docs/#g' _site/sitemap.xml > _site/sitemap.tmp.xml
rm _site/sitemap.xml
mv _site/sitemap.tmp.xml _site/sitemap.xml
cd _site
git add .
git commit -m 'change'
git push
