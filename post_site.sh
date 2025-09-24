cp -r Code docs/
cd docs
mkdocs build
cd site
git add .
git commit -m 'update documentation'
git push