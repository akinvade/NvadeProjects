@echo off
echo --- CHECKING STATUS ---
git status
pause

echo --- ADDING EVERYTHING ---
git add .
pause

echo --- COMMITTING ---
git commit -m "Manual update"
pause

echo --- PUSHING ---
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo ❌ PUSH FAILED! Check the error message above.
    echo Likely: Authentication error or File too large.
)
pause