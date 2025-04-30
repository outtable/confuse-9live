cp -r Code docs/_site
cd docs
cp _config.yml /var/tmp/_config.yml
sed -i '' 's/^#baseurl: "/baseurl: "/' _config.yml
bundle exec jekyll build
mv /var/tmp/_config.yml ./_config.yml
zip -r ../site.zip ./_site