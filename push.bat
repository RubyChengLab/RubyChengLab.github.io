@echo off
echo ���b�N�������e�� GitHub... (autonew)

cd /d "C:\Users\Ruby\myblog"

git add .
git commit -m "Automatic updates %date% %time%"
git push origin master

pause
