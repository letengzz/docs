# 开启/关闭Oracle服务脚本

## Windows开启/关闭服务脚本

开启Oracle服务：

> 开启Oracle服务.bat

```bash
:: 取得管理员权限
:Main
@echo off
cd /d "%~dp0"
cacls.exe "%SystemDrive%\System Volume Information" >nul 2>nul
if %errorlevel%==0 goto Admin
if exist "%temp%\getadmin.vbs" del /f /q "%temp%\getadmin.vbs"
echo Set RequestUAC = CreateObject^("Shell.Application"^)>"%temp%\getadmin.vbs"
echo RequestUAC.ShellExecute "%~s0","","","runas",1 >>"%temp%\getadmin.vbs"
echo WScript.Quit >>"%temp%\getadmin.vbs"
"%temp%\getadmin.vbs" /f
if exist "%temp%\getadmin.vbs" del /f /q "%temp%\getadmin.vbs"
exit
:Admin

:: 手动启动 oracle 服务,因安装环境不同,需将下列服务名称替换成自己的
net start "OracleServiceORCL"
net start "OracleOraDb11g_home1TNSListener"

:: 如果需要使用控制台服务，将下面这行前面的 :: 删掉,并将服务名称替换成自己的
net start "OracleDBConsoleorcl"
pause

```

关闭Oracle服务：

> 关闭Oracle服务.bat

```bash
:: 取得管理员权限
:Main
@echo off
cd /d "%~dp0"
cacls.exe "%SystemDrive%\System Volume Information" >nul 2>nul
if %errorlevel%==0 goto Admin
if exist "%temp%\getadmin.vbs" del /f /q "%temp%\getadmin.vbs"
echo Set RequestUAC = CreateObject^("Shell.Application"^)>"%temp%\getadmin.vbs"
echo RequestUAC.ShellExecute "%~s0","","","runas",1 >>"%temp%\getadmin.vbs"
echo WScript.Quit >>"%temp%\getadmin.vbs"
"%temp%\getadmin.vbs" /f
if exist "%temp%\getadmin.vbs" del /f /q "%temp%\getadmin.vbs"
exit
:Admin


:: 如果启动了控制台服务，将下面这行前面的 :: 删掉,并将服务名称替换成自己的
:: net stop "OracleDBConsoleorcl"

:: 手动停止 oracle 服务,因安装环境不同,需将下列服务名称替换成自己的
net stop "OracleOraDb11g_home1TNSListener"
net stop "OracleServiceORCL"

pause

```

