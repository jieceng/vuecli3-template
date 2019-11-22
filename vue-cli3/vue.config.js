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