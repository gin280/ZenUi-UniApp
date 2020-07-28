<template>
	<view class="zen-loading-init">
		<view class="zen-loading-center"></view>
		<view class="zen-loadmore-tips">{{text}}</view>
	</view>
</template>

<script>
	export default {
		name: "zenLoading",
		props: {
			text: {
				type: String,
				default: "正在加载..."
			}
		}
	}
</script>

<style scoped>
	.zen-loading-init {
		min-width: 200rpx;
		min-height: 200rpx;
		max-width: 500rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 9999;
		font-size: 26rpx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 10rpx;
	}

	.zen-loading-center {
		width: 50rpx;
		height: 50rpx;
		border: 3px solid #fff;
		border-radius: 50%;
		margin: 0 6px;
		display: inline-block;
		vertical-align: middle;
		clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 40%);
		animation: rotate 1s linear infinite;
		margin-bottom: 36rpx;
	}

	.zen-loadmore-tips {
		text-align: center;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	@-webkit-keyframes rotate {
		from {
			transform: rotatez(0deg);
		}

		to {
			transform: rotatez(360deg);
		}
	}

	@keyframes rotate {
		from {
			transform: rotatez(0deg);
		}

		to {
			transform: rotatez(360deg);
		}
	}
</style>
