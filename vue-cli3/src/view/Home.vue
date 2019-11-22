<template>
  <div class="hello">
		<h1>vue-cli3模板</h1>
		{{token}}
		<ul>
			<li v-for="(item, index) in description" :key="index">
				{{ index+1 }}.{{ item }}
			</li>
		</ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'home',
	data(){
		return {
			description: [
				'添加sass处理模块',
				'移动端响应rem',
				'vuex状态管理系统',
				'网络请求axios',
				'路由管理模块router',
				'vue.config.js'
			]
		}
	},
	computed: {
		...mapState(['token'])//使用vuex便捷方式
	}
}
</script>

<!-- 这里用sass,不用可以不加lang -->
<style scoped lang="scss">
@mixin flex{
	display: flex;
	justify-content: center;
	align-items: center;
}
.hello{
	padding: 50px;
	>h1{
		font-size: 40px;
		padding-bottom: 15px;
	}
	>ul{
		>li{
			line-height: 30px;
			font-size: 18px;
			&:hover{
				background-color: #ccc;
			}
		}
	}
}
</style>
