<template>
	<view class="zen-steps-box" :class="{'zen-steps-column':direction==='column'}">
		<view class="zen-step-item" :style="{width:direction==='column'?'100%':spacing}" :class="[direction==='row'?'zen-step-horizontal':'zen-step-vertical']"
		 v-for="(item,index) in items" :key="index">
			<view class="zen-step-item-ico" :style="{width:direction==='column'?'36rpx':'100%'}">
				<view class="zen-step-ico" :class="[direction==='column'?'zen-step-column_ico':'zen-step-row_ico']" :style="{width:type==2 || activeSteps===index?'36rpx':'16rpx',height:type==2 || activeSteps===index?'36rpx':'16rpx',backgroundColor:index<=activeSteps?activeColor:(type==2?'#fff':deactiveColor),borderColor:index<=activeSteps?activeColor:deactiveColor}">
					<!-- <icon type="success_no_circle" :size="12"  color="#fff"></icon> -->
					<text v-if="activeSteps!==index" :style="{color:index<=activeSteps?'#fff':''}">{{type==1?'':index+1}}</text>
					<zen-icon name="check" :size="16" color="#fff" v-if="activeSteps===index"></zen-icon>
				</view>
				<view class="zen-step-line" :class="['zen-step-'+direction+'_line']" :style="{backgroundColor:index<=activeSteps-1?activeColor:deactiveColor}"
				 v-if="index!=items.length-1"></view>
			</view>
			<view class="zen-step-item-main" :class="['zen-step-'+direction+'_item_main']">
				<view class="zen-step-item-title" :style="{color:index<=activeSteps?activeColor:deactiveColor,fontSize:titleSize+'rpx',lineHeight:titleSize+'rpx',fontWeight:bold?'bold':'normal'}">
					{{item.title}}
				</view>
				<view class="zen-step-item-content" :style="{color:index<=activeSteps?activeColor:deactiveColor,fontSize:descSize+'rpx'}">
					{{item.desc}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//如果自定义传入图标内容，则需要拆分组件
	export default {
		props: {
			// 1-默认步骤 2-数字步骤
			type: {
				type: Number,
				default: 1
			},
			spacing: {
				type: String,
				default: '160rpx'
			},
			// 方向 row column
			direction: {
				type: String,
				default: 'row'
			},
			// 激活状态成功颜色
			activeColor: {
				type: String,
				default: '#5677fc'
			},
			// 未激活状态颜色
			deactiveColor: {
				type: String,
				default: '#999999'
			},
			//title字体大小
			titleSize: {
				type: Number,
				default: 28
			},
			//title是否粗体
			bold: {
				type: Boolean,
				default: false
			},
			//desc字体大小
			descSize: {
				type: Number,
				default: 24
			},
			// 当前步骤
			activeSteps: {
				type: Number,
				default: -1
			},
			/**
			 * [{
					title: "标题",
					desc: "描述"
				}]
			 * */
			items: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.zen-steps-box {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.zen-steps-column {
		flex-direction: column;
	}

	.zen-step-ico {
		border-radius: 40rpx;
		position: relative;
		z-index: 3;
		margin: 0 auto;
		border-width: 1rpx;
		border-style: solid;
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.zen-step-row_ico {
		top: 50%;
		transform: translateY(-50%);
	}

	.zen-step-column_ico {
		top: 0;
	}


	.zen-step-line {
		position: absolute;
		left: 50%;
		top: 20rpx;
		width: 100%;
		height: 1rpx;
	}

	.zen-step-row_item_main {
		text-align: center
	}

	.zen-step-item {
		font-size: 24rpx;
		position: relative;
		box-sizing: border-box;
	}

	.zen-step-item-ico {
		height: 36rpx;
		line-height: 36rpx;
		text-align: center;
	}

	.zen-step-item-main {
		margin-top: 16rpx;
		clear: both
	}

	.zen-step-item-title {
		word-break: break-all;
	}

	.zen-step-item-content {
		margin-top: 8rpx;
		word-break: break-all;
	}

	.zen-step-vertical {
		width: 100%;
		display: flex;
		padding-bottom: 60rpx
	}

	.zen-step-column_item_main {
		margin-top: 0;
		padding-left: 20rpx;
	}

	.zen-step-column_line {
		position: absolute;
		height: 100%;
		top: 0;
		left: 18rpx;
		margin: 0;
		width: 1rpx
	}
</style>