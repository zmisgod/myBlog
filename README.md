# zmis.me官网 SSR version

VUE-SSR版本已上线，欢迎访问:[zmis.me官网](https://zmis.me)

单页面(Single Page Application)版本代码[请点这里](https://github.com/zmisgod/myBlog/tree/spa) 此版本已停更

### 技术栈 Technology Stack

- vue.js
- vue-SSR
- vuex
- vue-router
- webpack
- scss
- svg
- axios
- ES6
- flex

### 主题 Theme
[vue-material](https://github.com/vuematerial/vue-material)

### 本地使用 Local Usage
```
npm install

#dev mode
npm run dev
```
### 打包项目 Production Usage
```
npm install
npm run build
npm start
```
### 安装node进程管理 Install Node Processes Management 
```
npm install pm2 -g 
```
### 启动server服务 Start Server Side
```
pm2 start server.js
```
### 查看node进程状态 Check Node Status
```
pm2 list
```
### 删除已打包项目 Delete Build File
```
npm run del
```
### nginx配置 Nginx Configuration
```
server {
    listen       80;
    server_name  zmis.me;

    root /path/to/your/floder/myBlog/dist/;
    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    index  index.html;
    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host  $http_host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_set_header Connection "";
        proxy_pass http://127.0.0.1:8080;
        proxy_redirect default;
    }
    location ~ .*\.(js|css)$ {
        expires 7d;
        add_header Cache-Control max-age=86400;
        etag on;
    }
    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$ {
        expires 30d;
    }
}
```

### 联系 Contact Me

<a href="https://weibo.com/zmisgod">@zmisgod</a>

<a href="https://zmis.me">zmis.me新博客</a>