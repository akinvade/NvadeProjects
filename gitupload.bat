@echo off
echo [1/6] Initializing Git...
:: Calling 'git' directly here now works because the file is named 'upload.bat'
git init

echo [2/6] Adding files...
git add .

echo [3/6] Committing...
git commit -m "Initial commit"

echo [4/6] Setting branch...
git branch -M main

echo [5/6] Adding remote...
:: We use 'set-url' just in case you've already added it once
git remote add origin https://github.com/akinvade/NvadeProjects.git 2>nul
git remote set-url origin https://github.com/akinvade/NvadeProjects.git

echo [6/6] Pushing to GitHub...
git push -u origin main

echo Done!
pause