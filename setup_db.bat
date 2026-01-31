@echo off
echo Generating Prisma Client...
call npx prisma generate
if %errorlevel% neq 0 exit /b %errorlevel%

echo Pushing Database Schema...
call npx prisma db push
if %errorlevel% neq 0 exit /b %errorlevel%

echo Database setup complete! You can now restart your server.
pause
