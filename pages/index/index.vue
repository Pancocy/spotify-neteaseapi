<template>
	<view class="content-home">
		<!-- 顶部 -->
		<view class="header">
			<view class="title">
				<h3>欢迎,{{formatDate()}}</h3>
			</view>
			<view class="funcs">
				<ul>
					<li>
						<img src="/static/homeIcon/bell.svg" alt="">
					</li>
					<li>
						<img src="/static/homeIcon/time.svg" alt="">
					</li>
					<li>
						<img src="/static/homeIcon/setting.svg" alt="">
					</li>
				</ul>
			</view>
		</view>
		<!-- 内容区 -->
		<view class="swiper-pics">
			<!-- 轮播图 -->
			<swiper class="swiper" circular autoplay="true" interval="true" duration="500">
				<swiper-item v-for="item in bannerList" :key="item.bannerId">
					<view class="swiper-item">
						<img :src="item.pic" :alt="item.alg">
					</view>
				</swiper-item>
			</swiper>
			<!-- 发现 -->
			<view class="recommend">
				<ul>
					<li v-for="item in explorList" :key="item.id">
						<img :src="item.iconUrl" :alt="item.homepageMode">
						<h4>{{item.name}}</h4>
					</li>
				</ul>
			</view>
			<!-- 歌单 -->
			<view class="albums">
				<h3>根据你的喜好推荐</h3>
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120" show-scrollbar="false">
					<view class="scroll-view-item_H" v-for="item in albumList" :key="item.id">
						<img :src="item.picUrl" :alt="item.alg">
						<p>{{item.name}}</p>
					</view>
				</scroll-view>
			</view>
			<!-- 电台 -->
			<view class="brodecast">
					<h3>个性电台</h3>
					<scroll-view 
					scroll-x="true" 
					scroll-left="120" 
					class="scroll-view-radio"
					>
						<view class="scroll-view-radio-item"
							v-for="item in radioList" :key="item.id"
						>
						<img :src="item.picUrl" :alt="item.copywriter">
						<p>{{item.name}}</p>
						</view>
					</scroll-view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		onMounted,
		reactive,
		ref
	} from "vue";
	import {
		getCaroul,
		getExplore,
		getAlbum,
		getRadio
	} from '../../static/https/home/all.js'
	let time = ref('')
	//轮播图数据
	let bannerList = ref([])
	//发现列表数据
	let explorList = ref([])
	//歌单数据
	let albumList = ref([])
	//电台数据
	let radioList = ref([])
	onBeforeMount(() => {
		time = new Date().toString()
		//请求轮播图
		getCaroul({
			type: 2
		}).then((res) => {
			bannerList.value = res.data.banners
		})
		//请求发现
		getExplore().then((res) => {
			explorList.value = res.data.data
		})
		//请求歌单
		getAlbum({
			limit: 10
		}).then((res) => {
			albumList.value = res.data.result
		})
		//请求电台数据
		getRadio().then((res)=>{
			radioList.value = res.data.result
		})

	})
	//根据事件显示不同欢迎词的方法
	const formatDate = () => {
		let val = parseInt(time.slice(16, 18))
		if (val > 12) {
			return '晚上好'
		} else if (val < 12) {
			return '早上好'
		}
	}
</script>

<style scoped lang="less">
	.content-home {
		color: aliceblue;
		.header {
			color: aliceblue;
			box-sizing: border-box;
			height: 120px;
			background-image: linear-gradient(169deg, rgba(14, 14, 120, 1) 10%, rgba(0, 0, 0, 1) 62%);
			padding: 30px 10px 20px 10px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.funcs {
				ul {
					display: flex;
					list-style: none;

					li {
						width: 35px;
						height: 35px;
						margin-left: 20px;

						img {
							width: 24px;
							height: 24px;
						}
					}
				}
			}
		}

		.swiper-pics {
			height: 160px;
			background-color: aliceblue;

			.swiper {
				height: 100%;
				background-color: black;

				.swiper-item {
					padding: 0 8px;
					background-color: black;
					border: none;

					img {
						width: 100%;
						height: 100%;
						border-radius: 5px;
					}
				}
			}
		
			.recommend {
				// height: 260px;
				padding-top: 15px;
			
				ul {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					padding: 0 8px;
			
					li {
						width: 48%;
						height: 65px;
						background-color: #1a1a1a;
						margin-top: 7px;
						border-radius: 5px;
						display: flex;
						justify-content: flex-start;
			
						h4 {
							line-height: 65px;
							color: #ffffff;
						}
					}
				}
			}
			
			.albums {
				background-color: black;
				color: aliceblue;
				padding: 40px 8px 0 8px;
				.scroll-view_H{
					white-space: nowrap;
					width: 100%;
					height: 240px;
					margin-top: 20px;
				}
			
				.scroll-view-item_H {
					img {
						width: 100%;
						height: 300rpx;
						display: block;
					}
				}
			}
			.scroll-view-item_H,.scroll-view-radio-item{
				display: inline-block;
				width: 45%;
				height: 100%;
				line-height: 100%;
				text-align: center;
				font-size: 16rpx;
				margin-right: 10px;
				p {
					display: block;
					color: #fff;
					height: 3rem;
					font-size: 14px;
					line-height: 3rem;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
			.brodecast{
				background-color: black;
				padding: 0px 8px;
				.scroll-view-radio{
					white-space: nowrap;
					width: 100%;
					height: 300px;
					margin-top: 20px;
					.scroll-view-radio-item{
						img {
							width: 100%;
							height: 350rpx;
							display: block;
							border-radius: 15px;
						}
					}
				}
			}
		}


		
	}
</style>
