<template>
	<view class="zen-selected-class zen-dropdown-list" :style="{height:selectHeight?selectHeight+'rpx':'auto'}">
		<slot name="selectionbox"></slot>
		<view class="zen-dropdown-view" :class="[show?'zen-dropdownlist-show':'']" :style="{background:bgcolor,height:show?height+'rpx':0,top:top+'rpx'}">
			<slot name="dropdownbox"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "zenDropdownList",
		props: {
			//控制显示
			show: {
				type: Boolean,
				default: false
			},
			//背景颜色
			bgcolor: {
				type: String,
				default: "none"
			},
			//top  rpx
			top: {
				type: Number,
				default: 0
			},
			//下拉框高度 rpx
			height: {
				type: Number,
				default: 0
			},
			//选择框高度 单位rpx
			selectHeight: {
				type: Number,
				default: 0
			}
		},
		methods: {
		}
	}
</script>

<style scoped>
	.zen-dropdown-list {
		position: relative;
	}

	.zen-dropdown-view {
		width: 100%;
		overflow: hidden;
		position: absolute;
		z-index: 9999;
		left: 0;
		/* opacity: 0; */
		visibility: hidden;
		transition: all 0.2s ease-in-out;

	}

	.zen-dropdownlist-show {
		/* opacity: 1; */
		visibility: visible;
	}
</style>
