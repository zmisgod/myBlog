# zmisme

这是我的新博客，已经上线，线上访问，<a href="https://zmis.me">zmis.me新博客</a>

### 技术栈

- vue.js (2.0)
- vuex
- vue-router
- <a href="https://github.com/vuematerial/vue-material">vue-material</a>

### 本地使用
```
npm install

#dev mode
npm run dev
```

### 打包上传到服务器
```
npm install

#pro mode
npm build pro
```
然后将把打包好的文件放到服务器中。（服务器不需要npm install，只要将nginx的root指向dist即可）

### nginx配置
```
server {
        listen       80;
        server_name  your.server.name;

        root /path/to/your/MyBlogStaticFiles/dist/;
        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        index  index.html;
        location / {
            try_files $uri $uri/ /index.html;
        }
        location ~ .*\.(js|css)$ {
            #如果频繁更新，则可以设置得小一点。
            expires 7d;

            add_header Cache-Control max-age=86400;
            etag on;
        }
        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$ {
            #过期时间为30天，#图片文件不怎么更新，过期可以设大一点，
            expires 30d;
        }
}
```
以上的配置的配置有对于PageSpeed Insights优化操作。

### 重启nginx即可
```
nginx -s reload
```

### 联系

<a href="https://weibo.com/zmisgod">@zmisgod</a>

<a href="https://zmis.me">zmis.me新博客</a>