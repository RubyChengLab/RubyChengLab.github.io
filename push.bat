@echo off
echo ?? ���b�N�������e�� GitHub...

cd /d "%~dp0"

git add .
git commit -m "?? �۰ʧ�s���� %date% %time%"
git push origin master

pause