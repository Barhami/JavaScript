git add .
echo "Give a Name Of the Commit"
read commit
git commit -m "$commit"
git push
