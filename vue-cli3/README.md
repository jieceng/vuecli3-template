# vue-cli3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## 安装的包
```cmd
//sass
cnpm i sass-loader node-sass -D
//移动端适配
cnpm i postcss-px2rem -D
cnpm i lib-flexible -S

//router
cnpm i vue-router -S

//vuex
cnpm i vuex -S

//axios
 cnpm install --save axios
```
## vue.config.js
```js
/**
 * 用上后让我舍弃了vuelic2
 */
const px2rem = require('postcss-px2rem')

module.exports = {
	publicPath: process.env.NODE_ENV = 'production' ? './' : '/',
	lintOnSave:false,//关闭eslint代码检测
	devServer: {
		port: 8080,
		host: 'localhost',		//主机名
		https: false,
		open: true,			//自动打开浏览器
		proxy: {				//代理
			'/api': {
				target: 'http://127.0.0.1',//后端的协议+ip+端口
				ws: true,
				changeOrigin: true,
				pathRewrite: {//路径重写
          '^/api': ''
        }
			}
		}
	},
	//css配置
	css: {
	  loaderOptions: {
			//处理pxtorem
	    postcss: {
	      plugins: [
	        px2rem({
	          remUnit: 37.5   //基准大小 baseSize，需要和rem.js中相同
	        })
	      ]
	    },
			//处理全局sass
			sass: {
				//旧的是data,最新版8.0.0用prependData
        prependData: `
          @import "@/assets/css/theme.scss";
        `
      }
	  }
	}
}
```