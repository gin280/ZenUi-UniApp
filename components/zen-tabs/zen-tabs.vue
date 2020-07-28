<template>
	<view class="zen-tabs-view tui-tabs-view w-full box-border flex items-center justify-between" :class="[isFixed?'fixed left-0':'relative',unlined?'tui-unlined':'']" :style="{height:height+'rpx',padding:`0 ${padding}rpx`,background:backgroundColor,top:isFixed?top+'px':'auto'}">
		<view v-for="(item,index) in tabs" :key="index" class="flex items-center justify-center" :style="{width:itemWidth}" @tap.stop="swichTabs(index)">
			<view class="flex items-center justify-between relative z-10" :class="{'transition-all duration-150 ease-in-out':currentTab==index,'text-opacity-50':item.disabled}" :style="{color:currentTab==index?selectedColor:color,fontSize:size+'rpx',lineHeight:size+'rpx',fontWeight:bold && currentTab==index?'bold':'normal'}">{{item.name}}</view>
		</view> 
		<view class="z-0 absolute left-0 transition-all duration-150 ease-in-out " :style="{transform:'translateX('+scrollLeft+'px)',width:sliderWidth+'rpx',height:
	sliderHeight+'rpx',borderRadius:sliderRadius,bottom:bottom,background:sliderBgColor,marginBottom:bottom=='50%'?('-'+sliderHeight/2+'rpx'):0}"></view>
	</view>
</template> 

<script>
	export default {
		name: "zenTabs",
		props: {
			//标签页
			tabs: {
				type: Array,
				default () {
					return []
				}
			},
			//rpx
			height: {
				type: Number,
				default: 80
			},
			//rpx 只对左右padding起作用，上下为0
			padding: {
				type: Number,
				default: 30
			},
			//背景色
			backgroundColor: {
				type: String,
				default: "#FFFFFF"
			},
			//是否固定
			isFixed: {
				type: Boolean,
				default: false
			},
			//px
			top: {
				type: Number
					// #ifndef H5
					,
				default: 0
					// #endif
					// #ifdef H5
					,
				default: 44
				// #endif
			},
			//是否去掉底部线条
			unlined: {
				type: Boolean,
				default: false
			},
			//当前选项卡
			currentTab: {
				type: Number,
				default: 0
			},
			//滑块宽度
			sliderWidth: {
				type: Number,
				default: 68
			},
			//滑块高度
			sliderHeight: {
				type: Number,
				default: 6
			},
			//滑块背景颜色
			sliderBgColor: {
				type: String,
				default: "#5677fc"
			},
			sliderRadius: {
				type: String,
				default: "50rpx"
			},
			//滑块bottom
			bottom: {
				type: String,
				default: "0"
			},
			//标签页宽度
			itemWidth: {
				type: String,
				default: "25%"
			},
			//字体颜色
			color: {
				type: String,
				default: "#666"
			},
			//选中后字体颜色
			selectedColor: {
				type: String,
				default: "#5677fc"
			},
			//字体大小
			size: {
				type: Number,
				default: 28
			},
			//选中后 是否加粗 ，未选中则无效
			bold: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			currentTab() {
				this.checkCor();
			},
			tabs() {
				this.checkCor();
			}
		},
		created() {
			setTimeout(() => {
				// 高度自适应
				uni.getSystemInfo({
					success: (res) => {
						this.winWidth = res.windowWidth;
						this.checkCor()
					}
				});
			}, 50);
		},
		data() {
			return {
				winWidth: 0,
				scrollLeft: 0
			};
		},
		methods: {
			checkCor: function() {
				let tabsNum = this.tabs.length
				let padding = this.winWidth / 750 * this.padding
				let width = this.winWidth - padding * 2
				let left = (width / tabsNum - (this.winWidth / 750 * this.sliderWidth)) / 2 + padding
				let scrollLeft = left
				if (this.currentTab > 0) {
					scrollLeft = scrollLeft + (width / tabsNum) * this.currentTab
				}
				this.scrollLeft = scrollLeft
			},
			// 点击标题切换当前页时改变样式
			swichTabs: function(index) {
				let item = this.tabs[index]
				if (item && item.disabled) return;
				if (this.currentTab == index) {
					return false;
				} else {
					this.$emit("change", {
						index: Number(index)
					})
				}
			}
		}
	}
</script>

<style scoped>
	.zen-tabs-view {
		z-index: 9999; 
	}
</style>
