# 开启/关闭MySQL服务脚本

## Windows开启/关闭脚本

开启MySQL服务：

> 开启MySQL服务.bat

```bash
::获取管理员权限
%1 C:\windows\system32\.\mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c "^&chr(34)^&"%~0"^&chr(34)^&" ::","%cd%","runas",1)(window.close)&&exit
C:\windows\system32\.\net start mysql
```

关闭MySQL服务：

> 关闭MySQL服务.bat

```bash
::获取管理员权限
%1 C:\windows\system32\.\mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c "^&chr(34)^&"%~0"^&chr(34)^&" ::","%cd%","runas",1)(window.close)&&exit
C:\windows\system32\.\net stop mysql
```

