@echo off
echo 正在將網站推送到 GitHub...

cd /d "C:\Users\Ruby\myblog"

git add .
git commit -m "?? 自動更新網站 %date% %time%"
git push origin master

pause