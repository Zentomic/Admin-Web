
copy package-dist.json dist
copy Procfile dist

cd dist
del package.json
ren package-dist.json package.json

git init
git add .
git commit -m %1
heroku login
heroku git:remote -a zentomic-webadmin
git push heroku --force master

cd..
