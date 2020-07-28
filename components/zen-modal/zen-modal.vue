<template>
	<view @touchmove.stop.prevent>
		<view class="zen-modal-box" :style="{width:width,padding:padding,borderRadius:radius}" :class="[(fadeIn || show)?'zen-modal-normal':'zen-modal-scale',show?'zen-modal-show':'']">
			<view v-if="!custom">
				<view class="zen-modal-title" v-if="title">{{title}}</view>
				<view class="zen-modal-content" :class="[title?'':'zen-mtop']" :style="{color:color,fontSize:size+'rpx'}">{{content}}</view>
				<view class="zen-modalBtn-box" :class="[button.length!=2?'zen-flex-column':'']">
					<block v-for="(item,index) in button" :key="index">
						<button class="zen-modal-btn" :class="['zen-'+(item.type || 'primary')+(item.plain?'-outline':''),button.length!=2?'zen-btn-width':'',button.length>2?'zen-mbtm':'',shape=='circle'?'zen-circle-btn':'']"
						 :hover-class="'zen-'+(item.plain?'outline':(item.type || 'primary'))+'-hover'" :data-index="index" @tap="handleClick">{{item.text || "确定"}}</button>
					</block>
				</view>
			</view>
			<view v-else>
				<slot></slot>
			</view>
		</view>
		<view class="zen-modal-mask" :class="[show?'zen-mask-show':'']" @tap="handleClickCancel"></view>

	</view>
</template>

<script>
	export default {
		name: "zenModal",
		props: {
			//是否显示
			show: {
				type: Boolean,
				default: false
			},
			width: {
				type: String,
				default: "84%"
			},
			padding: {
				type: String,
				default: "40rpx 64rpx"
			},
			radius: {
				type: String,
				default: "24rpx"
			},
			//标题
			title: {
				type: String,
				default: ""
			},
			//内容
			content: {
				type: String,
				default: ""
			},
			//内容字体颜色
			color: {
				type: String,
				default: "#999"
			},
			//内容字体大小 rpx
			size: {
				type: Number,
				default: 28
			},
			//形状 circle, square
			shape: {
				type: String,
				default: 'square'
			},
			button: {
				type: Array,
				default: function() {
					return [{
						text: "取消",
						type: "red",
						plain: true //是否空心
					}, {
						text: "确定",
						type: "red",
						plain: false
					}]
				}
			},
			//点击遮罩 是否可关闭
			maskClosable: {
				type: Boolean,
				default: true
			},
			//淡入效果，自定义弹框插入input输入框时传true
			fadeIn: {
				type: Boolean,
				default: false
			},
			//自定义弹窗内容
			custom: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			};
		},
		methods: {
			handleClick(e) {
				if (!this.show) return;
				const dataset = e.currentTarget.dataset;
				this.$emit('click', {
					index: Number(dataset.index)
				});
			},
			handleClickCancel() {
				if (!this.maskClosable) return;
				this.$emit('cancel');
			}
		}
	}
</script>

<style scoped>
	.zen-modal-box {
		position: fixed;
		left: 50%;
		top: 50%;
		margin: auto;
		background-color: #fff;
		z-index: 9999998;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		box-sizing: border-box;
		visibility: hidden;
	}

	.zen-modal-scale {
		transform: translate(-50%, -50%) scale(0);
	}

	.zen-modal-normal {
		transform: translate(-50%, -50%) scale(1);
	}

	.zen-modal-show {
		opacity: 1;
		visibility: visible;
	}

	.zen-modal-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 9999996;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.zen-mask-show {
		visibility: visible;
		opacity: 1;
	}

	.zen-modal-title {
		text-align: center;
		font-size: 34rpx;
		color: #333;
		padding-top: 20rpx;
		font-weight: bold;
	}

	.zen-modal-content {
		text-align: center;
		color: #999;
		font-size: 28rpx;
		padding-top: 20rpx;
		padding-bottom: 60rpx;
	}

	.zen-mtop {
		margin-top: 30rpx;
	}

	.zen-mbtm {
		margin-bottom: 30rpx;
	}

	.zen-modalBtn-box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between
	}

	.zen-flex-column {
		flex-direction: column;
	}

	.zen-modal-btn {
		width: 46%;
		height: 68rpx;
		line-height: 68rpx;
		position: relative;
		border-radius: 10rpx;
		font-size: 26rpx;
		overflow: visible;
		margin-left: 0;
		margin-right: 0;
	}

	.zen-modal-btn::after {
		content: " ";
		position: absolute;
		width: 200%;
		height: 200%;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scale(0.5, 0.5);
		transform: scale(0.5, 0.5);
		left: 0;
		top: 0;
		border-radius: 20rpx;
	}

	.zen-btn-width {
		width: 80% !important;
	}

	.zen-primary {
		background: #5677fc;
		color: #fff;
	}

	.zen-primary-hover {
		background: #4a67d6;
		color: #e5e5e5;
	}

	.zen-primary-outline {
		color: #5677fc;
		background: transparent;
	}

	.zen-primary-outline::after {
		border: 1px solid #5677fc;
	}

	.zen-danger {
		background: #ed3f14;
		color: #fff;
	}

	.zen-danger-hover {
		background: #d53912;
		color: #e5e5e5;
	}

	.zen-danger-outline {
		color: #ed3f14;
		background: transparent;
	}

	.zen-danger-outline::after {
		border: 1px solid #ed3f14;
	}

	.zen-red {
		background: #e41f19;
		color: #fff;
	}

	.zen-red-hover {
		background: #c51a15;
		color: #e5e5e5;
	}

	.zen-red-outline {
		color: #e41f19;
		background: transparent;
	}

	.zen-red-outline::after {
		border: 1px solid #e41f19;
	}

	.zen-warning {
		background: #ff7900;
		color: #fff;
	}

	.zen-warning-hover {
		background: #e56d00;
		color: #e5e5e5;
	}

	.zen-warning-outline {
		color: #ff7900;
		background: transparent;
	}

	.zen-warning-outline::after {
		border: 1px solid #ff7900;
	}

	.zen-green {
		background: #19be6b;
		color: #fff;
	}

	.zen-green-hover {
		background: #16ab60;
		color: #e5e5e5;
	}

	.zen-green-outline {
		color: #19be6b;
		background: transparent;
	}

	.zen-green-outline::after {
		border: 1px solid #19be6b;
	}

	.zen-white {
		background: #fff;
		color: #333;
	}

	.zen-white-hover {
		background: #f7f7f9;
		color: #666;
	}

	.zen-white-outline {
		color: #333;
		background: transparent;
	}

	.zen-white-outline::after {
		border: 1px solid #333;
	}

	.zen-gray {
		background: #ededed;
		color: #999;
	}

	.zen-gray-hover {
		background: #d5d5d5;
		color: #898989;
	}

	.zen-gray-outline {
		color: #999;
		background: transparent;
	}

	.zen-gray-outline::after {
		border: 1px solid #999;
	}

	.zen-outline-hover {
		opacity: 0.6;
	}

	.zen-circle-btn {
		border-radius: 40rpx !important;
	}

	.zen-circle-btn::after {
		border-radius: 80rpx !important;
	}
</style>
