@echo off

:: just drop this file in the folder you want to generate index
set SCRIPT_PATH="ABSOLUTE_PATH_TO_JS_SCRIPT"
set NODE_PATH="PATH_FOR_NODEJS"
set Path=%NODE_PATH%;%PATH%

node %SCRIPT_PATH%
