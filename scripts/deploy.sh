#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# change to build directory
cd src/.vuepress/dist

# deploy to custom domain
echo 'docs.chora.io' >> CNAME

# git init and commit
git init
git add -A
git commit -m 'publish'

# push to gh-pages branch
git push https://github.com/choraio/chora-docs master:gh-pages -f

cd -