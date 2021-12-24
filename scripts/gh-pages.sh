# #!/usr/bin/env sh

# # 部署至 gh-pages

# rm -rf node_modules/.cache 

# npx next build

# npx next export

# touch dist

# git add dist/

# git commit -m "Deploy Next.js to gh-pages"

# git subtree push --prefix dist origin gh-pages