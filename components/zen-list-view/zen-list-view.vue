<template>
	<view class="zen-list-view zen-view-class" :style="{backgroundColor:backgroundColor}">
		<view class="zen-list-title" v-if="title">{{title}}</view>
		<view class="zen-list-content" :class="[unlined?'zen-border-'+unlined:'']">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "zenListView",
		props: {
			title: {
				type: String,
				default: ''
			},
			backgroundColor:{
				type: String,
				default: 'transparent'
			},
			unlined: {
				type: String,
				default: '' //top,bottom,all
			}
		}
	}
</script>

<style scoped>
	.zen-list-title {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		line-height: 30rpx;
		color: #666;
	}

	.zen-list-content {
		width: 100%;
		position: relative;
	}

	.zen-list-content::before {
		content: " ";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 0;
		z-index: 2;
		pointer-events: none;
	}

	.zen-list-content::after {
		content: '';
		width: 100%;
		position: absolute;
		border-bottom: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 100%;
		bottom: 0;
		right: 0;
		left: 0;
	}

	.zen-border-top::before {
		border-top: 0;
	}

	.zen-border-bottom::after {
		border-bottom: 0;
	}

	.zen-border-all::after {
		border-bottom: 0;
	}

	.zen-border-all::before {
		border-top: 0;
	}
</style>
