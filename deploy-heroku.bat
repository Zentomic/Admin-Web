git add .

git commit -m "deploy heroku zentomic-webadmin node better"

heroku login

heroku git:remote -a zentomic-webadmin

git remote -v

git push heroku master
