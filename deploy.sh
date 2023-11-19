#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:wildan78933/ecommerce-catalog.git master:deploy

cd -