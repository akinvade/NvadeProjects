@echo off
setlocal
:: --- CONFIGURATION ---
set REPO_URL=https://akinvade@github.com/akinvade/NvadeProjects.git
set USER_NAME=akinvade
set USER_EMAIL=your-github-email@example.com

echo 🚀 --- Nvade Project Sync Started ---

:: 1. Initialize only if .git doesn't exist
if not exist ".git" (
    echo [1/5] Initializing new Git repository...
    git init
    git remote add origin %REPO_URL%
) else (
    echo [1/5] Repository already initialized.
    :: Force correct account URL every time to bypass old cache
    git remote set-url origin %REPO_URL%
)

:: 2. Set Identity (Har baar taaki mismatch na ho)
git config user.name "%USER_NAME%"
git config user.email "%USER_EMAIL%"

:: 3. Stage changes
echo [2/5] Adding files...
git add .

:: 4. Commit (Check if there is anything to commit)
echo [3/5] Checking for changes...
git commit -m "Update: %date% %time%" >nul 2>&1
if %errorlevel% neq 0 (
    echo ℹ️  Nothing new to upload.
) else (
    echo [4/5] Changes committed.
)

:: 5. Push with forced authentication prompt if needed
echo [5/5] Pushing to GitHub (Branch: main)...
git branch -M main
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo ❌ PUSH FAILED!
    echo Tip: If it says "Access Denied", go to 'Credential Manager' 
    echo and delete any GitHub entries for 'AkashK9Cannon'.
) else (
    echo ✅ Successfully uploaded to GitHub!
)

echo --- Sync Complete ---
pause