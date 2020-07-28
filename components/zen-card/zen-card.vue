<template>
	<view class="zen-card-class zen-card" :class="[full?'zen-card-full':'',border?'zen-card-border':'']" @tap="handleClick"
	 @longtap="longTap">
		<view class="zen-card-header" :class="{'zen-header-line':header.line}" :style="{background:header.bgcolor || '#fff'}">
			<view class="zen-header-left">
				<image :src="image.url" class="zen-header-thumb" :class="{'zen-thumb-circle':image.circle}" mode="widthFix" v-if="image.url"
				 :style="{height:(image.height || 60)+'rpx',width:(image.width || 60)+'rpx'}"></image>
				<text class="zen-header-title" :style="{fontSize:(title.size || 30)+'rpx',color:(title.color || '#7A7A7A')}" v-if="title.text">{{title.text}}</text>
			</view>
			<view class="zen-header-right" :style="{fontSize:(tag.size || 24)+'rpx',color:(tag.color || '#b2b2b2')}" v-if="tag.text">
				{{tag.text}}
			</view>
		</view>
		<view class="zen-card-body">
			<slot name="body"></slot>
		</view>
		<view class="zen-card-footer">
			<slot name="footer"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "zenCard",
		props: {
			//是否铺满
			full: {
				type: Boolean,
				default: false
			},
			image: {
				type: Object,
				default: function() {
					return {
						url: "", //图片地址
						height: 60, //图片高度
						width: 60, //图片宽度
						circle: false
					}
				}
			},
			//标题
			title: {
				type: Object,
				default: function() {
					return {
						text: "", //标题文字
						size: 30, //字体大小
						color: "#7A7A7A" //字体颜色
					}
				}
			},
			//标签，时间等
			tag: {
				type: Object,
				default: function() {
					return {
						text: "", //标签文字
						size: 24, //字体大小
						color: "#b2b2b2" //字体颜色
					}
				}
			},
			header: {
				type: Object,
				default: function() {
					return {
						bgcolor: "#fff", //背景颜色
						line: false //是否去掉底部线条
					}
				}
			},
			//是否设置外边框
			border: {
				type: Boolean,
				default: false
			},
			index: {
				type: Number,
				default: 0
			}
		},
		methods: {
			handleClick() {
				this.$emit('click', {
					index: this.index
				});
			},
			longTap() {
				this.$emit('longclick', {
					index: this.index
				});
			}
		}
	}
</script>

<style scoped>
	.zen-card {
		margin: 0 30rpx;
		font-size: 28rpx;
		background-color: #fff;
		border-radius: 10rpx;
		box-shadow: 0 0 10rpx #eee;
		box-sizing: border-box;
		overflow: hidden;
	}

	.zen-card-full {
		margin: 0 !important;
		border-radius: 0 !important;
	}

	.zen-card-full::after {
		border-radius: 0 !important;
	}

	.zen-card-border {
		position: relative;
		box-shadow: none !important
	}

	.zen-card-border::after {
		content: ' ';
		position: absolute;
		height: 200%;
		width: 200%;
		border: 1px solid #ddd;
		transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		left: 0;
		top: 0;
		border-radius: 20rpx;
		box-sizing: border-box;
		pointer-events: none;
	}

	.zen-card-header {
		width: 100%;
		padding: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
	}

	.zen-card-header::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
		pointer-events: none;
	}

	.zen-header-line::after {
		border-bottom: 0 !important;
	}

	.zen-header-thumb {
		height: 60rpx;
		width: 60rpx;
		vertical-align: middle;
		margin-right: 20rpx;
		border-radius: 6rpx;
	}

	.zen-thumb-circle {
		border-radius: 50% !important;
	}

	.zen-header-title {
		display: inline-block;
		font-size: 30rpx;
		color: #7a7a7a;
		vertical-align: middle;
		max-width: 460rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.zen-header-right {
		font-size: 24rpx;
		color: #b2b2b2;
	}

	.zen-card-body {
		font-size: 32rpx;
		color: #262b3a;
		box-sizing: border-box;
	}

	.zen-card-footer {
		font-size: 28rpx;
		color: #596d96;
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
		box-sizing: border-box;
	}
</style>
