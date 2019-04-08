# stuApp
学生端App
  1.环境配置：
  1.1下载并安装node.js
  1.2下载并安装git
  1.3 配置android开发环境
  1.3.1下载安装最新JDK
  1.3.2 下载安装AndroidSDK
  1.3.3 下载Apache Ant
     2.Cordova全局安装
    2.1 打开命令工具（按键win+r,输入cmd回车），执行npm install –g cordova
  2.2 查看cordova -version 查看当前Cordova的版本
     3.创建并构建app项目
  cordova create 项目名 包名 应用名        创建cordova项目 （例如：cordova create myapp com.myapp.myapp myapp）
  cordova platforms add android		 在platforms文件中创建android平台
  cordova build android			 打包（apk)
  cordova run android			 	 运行虚拟机
  4.目录介绍
  config.xml：Cordova的核心配置信息
  hook ：自定义扩展功能 
  platform ：支持的平台，例如Andriod、iOS等
  plugins ：插件目录
  www ：web目录

  具体步骤请访: https://blog.csdn.net/u011127019/article/details/56335719
