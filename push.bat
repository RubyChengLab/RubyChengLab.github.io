@echo off
echo ���b�N�������e�� GitHub... (autonew)

cd /d "D:\Projects\myblog"

git add .
git commit -m "Automatic updates %date% %time%"
git push origin master

pause
