git add .

git commit -m %1

heroku login

heroku git:remote -a zentomic-webadmin

git remote -v

git push heroku master
