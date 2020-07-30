<template>
	<view>
		<zen-custom bgColor="bg-blue-100" isBack="true">
			<block slot="backText" >返回</block>
			<block slot="content">骨架屏</block>
		</zen-custom>
		<zen-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></zen-skeleton>
		<view class="container zen-skeleton">
			<image src="https://www.thorui.cn/img/wait.gif" mode="widthFix" class="zen-banner zen-skeleton-rect"></image>
			<view class="zen-text">
				<text class=" zen-skeleton-rect">---我知道你会来，所以我会等。</text>
			</view>

			<view class="zen-view">
				<view class="zen-cell">
					<view class="zen-title zen-skeleton-rect">组件文档地址：</view>
					<view class="zen-link zen-skeleton-fillet" @tap="getLink" data-link="https://thorui.cn/doc/">https://thorui.cn/doc/</view>
				</view>
				<view class="zen-cell">
					<view class="zen-title zen-skeleton-rect">uni-app版本GitHub地址：</view>
					<view class="zen-link zen-skeleton-fillet" @tap="getLink" data-link="https://github.com/dingyong0214/ThorUI-uniapp F">https://github.com/dingyong0214/ThorUI-uniapp</view>
				</view>
				<view class="zen-cell">
					<view class="zen-title zen-skeleton-rect">uni-app版本插件市场地址：</view>
					<view class="zen-link zen-skeleton-fillet" @tap="getLink" data-link="https://ext.dcloud.net.cn/plugin?id=556">https://ext.dcloud.net.cn/plugin?id=556</view>
				</view>
				<view class="zen-cell">
					<view class="zen-title zen-skeleton-rect">小程序版本GitHub地址：</view>
					<view class="zen-link zen-skeleton-fillet" @tap="getLink" data-link="https://github.com/dingyong0214/ThorUI">https://github.com/dingyong0214/ThorUI</view>
				</view>
				<view class="zen-cell">
					<view class="zen-title zen-skeleton-rect">小程序版本插件市场地址：</view>
					<view class="zen-link zen-skeleton-fillet" @tap="getLink" data-link="https://ext.dcloud.net.cn/plugin?id=569">https://ext.dcloud.net.cn/plugin?id=569</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	// const thorui = require("@/components/common/zen-clipboard/zen-clipboard.js")
	export default {
		data() {
			return {
				skeletonShow: true
			}
		},
		onLoad() {
			setTimeout(() => {
				this.skeletonShow = false
			}, 1800);
		},
		methods: {
			getLink(e) {
				let link = e.currentTarget.dataset.link
				// thorui.getClipboardData(link, (res) => {
				// 	// #ifdef H5 || MP-ALIPAY
				// 	if (res) {
				// 		this.zen.toast("链接复制成功")
				// 	} else {
				// 		this.zen.toast("链接复制失败")
				// 	}
				// 	// #endif
				// })
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 80rpx;
	}

	.zen-banner {
		width: 100%;
		height: 375rpx;
	}

	.zen-text {
		width: 100%;
		padding: 12rpx 30rpx 20rpx;
		box-sizing: border-box;
		color: #B3B3B3;
		font-size: 26rpx;
		text-align: right;
		margin-top: 8rpx
	}

	.zen-view {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
	}


	.zen-cell {
		padding: 24rpx 0;
		color: #555;
	}

	.zen-title {
		padding: 0 8rpx;
		box-sizing: border-box;
		display: inline-block;
	}

	.zen-link {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0px 3rpx 20rpx rgba(183, 183, 183, 0.1);
		border-radius: 10rpx;
		color: #06c;
		margin-top: 20rpx;
		word-break: break-all;
	}
</style>
