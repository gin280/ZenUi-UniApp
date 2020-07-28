<template>
	<view @touchmove.stop.prevent>
		<view class="zen-popup-class zen-bottom-popup" :class="{'zen-hidden':!show,'zen-popup-show':show,'zen-popup-radius':radius}" :style="{backgroundColor:backgroundColor,height:height?height+'rpx':'auto'}">
			<slot></slot>
		</view>
		<view class="zen-popup-mask" :class="[show?'zen-mask-show':'']" v-if="mask" @tap="handleClose"></view>
	</view>
</template>

<script>
	export default {
		name: "zenBottomPopup",
		props: {
			//是否需要mask
			mask: {
				type: Boolean,
				default: true
			},
			//控制显示
			show: {
				type: Boolean,
				default: false
			},
			//背景颜色
			backgroundColor: {
				type: String,
				default: "#fff"
			},
			//高度 rpx
			height: {
				type: Number,
				default: 0
			},
			//设置圆角
			radius:{
				type:Boolean,
				default:true
			}
		},
		methods: {
			handleClose() {
				if (!this.show) {
					return;
				}
				this.$emit('close', {});
			}
		}
	}
</script>

<style scoped>
	.zen-bottom-popup {
		width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99999;
		/* visibility: hidden; */
		opacity: 0;
		transform: translate3d(0, 100%, 0);
		transform-origin: center;
		transition: all 0.3s ease-in-out;
		min-height: 20rpx;
	}
	.zen-popup-radius {
		border-top-left-radius: 24rpx;
		border-top-right-radius: 24rpx;
		padding-bottom: env(safe-area-inset-bottom);
		overflow: hidden;
	}

	.zen-popup-show {
		transform: translate3d(0, 0, 0);
		opacity: 1;
		/* visibility: visible; */
	}

	.zen-popup-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 99996;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.zen-mask-show {
		opacity: 1;
		visibility: visible;
	}
</style>
