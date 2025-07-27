@echo off
echo 正在將網站推送到 GitHub... (autonew)

cd /d "D:\Projects\myblog"

git add .
git commit -m "Automatic updates %date% %time%"
git push origin master

pause
