<template>
	<view
		class="zen-tag"
		:hover-class="hover ? 'zen-tag-opcity' : ''"
		:hover-stay-time="150"
		:class="[originLeft ? 'zen-origin-left' : '', originRight ? 'zen-origin-right' : '', getClassName(shape, plain), getTypeClass(type, plain)]"
		:style="{ transform: `scale(${scaleMultiple})`, padding: padding, margin: margin, fontSize: size, lineHeight: size }"
		@tap="handleClick"
	>
		<slot></slot>
	</view>
</template>

<script>
export default {
	name: 'zenTag',
	props: {
		type: {
			type: String,
			default: 'primary'
		},
		//padding
		padding: {
			type: String,
			default: '16rpx 26rpx'
		},
		margin: {
			type: String,
			default: '0'
		},
		//文字大小 rpx
		size: {
			type: String,
			default: '28rpx'
		},
		// circle, square，circleLeft，circleRight
		shape: {
			type: String,
			default: 'square'
		},
		//是否空心
		plain: {
			type: Boolean,
			default: false
		},
		//点击效果
		hover: {
			type: Boolean,
			default: false
		},
		//缩放倍数
		scaleMultiple: {
			type: Number,
			default: 1
		},
		originLeft: {
			type: Boolean,
			default: false
		},
		originRight: {
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
			this.$emit('click', { index: this.index });
		},
		getTypeClass: function(type, plain) {
			return plain ? 'zen-' + type + '-outline' : 'zen-' + type;
		},
		getClassName: function(shape, plain) {
			//circle, square，circleLeft，circleRight
			var className = plain ? 'zen-tag-outline ' : '';
			if (shape != 'square') {
				if (shape == 'circle') {
					className = className + (plain ? 'zen-tag-outline-fillet' : 'zen-tag-fillet');
				} else if (shape == 'circleLeft') {
					className = className + 'zen-tag-fillet-left';
				} else if (shape == 'circleRight') {
					className = className + 'zen-tag-fillet-right';
				}
			}
			return className;
		}
	}
};
</script>

<style scoped>
/* color start*/

.zen-primary {
	background-color: #5677fc !important;
	color: #fff;
}

.zen-light-primary {
	background-color: #5c8dff !important;
	color: #fff;
}

.zen-dark-primary {
	background-color: #4a67d6 !important;
	color: #fff;
}

.zen-dLight-primary {
	background-color: #4e77d9 !important;
	color: #fff;
}

.zen-danger {
	background-color: #ed3f14 !important;
	color: #fff;
}

.zen-red {
	background-color: #ff201f !important;
	color: #fff;
}

.zen-warning {
	background-color: #ff7900 !important;
	color: #fff;
}

.zen-green {
	background-color: #19be6b !important;
	color: #fff;
}

.zen-high-green {
	background-color: #52dcae !important;
	color: #52dcae;
}

.zen-black {
	background-color: #000 !important;
	color: #fff;
}

.zen-white {
	background-color: #fff !important;
	color: #333 !important;
}

.zen-translucent {
	background-color: rgba(0, 0, 0, 0.7);
}

.zen-light-black {
	background-color: #333 !important;
}

.zen-gray {
	background-color: #ededed !important;
}

.zen-phcolor-gray {
	background-color: #ccc !important;
}

.zen-divider-gray {
	background-color: #eaeef1 !important;
}

.zen-btn-gray {
	background-color: #ededed !important;
	color: #999 !important;
}

.zen-hover-gray {
	background-color: #f7f7f9 !important;
}

.zen-bg-gray {
	background-color: #fafafa !important;
}

.zen-light-blue {
	background-color: #ecf6fd;
	color: #4dabeb !important;
}

.zen-light-brownish {
	background-color: #fcebef;
	color: #8a5966 !important;
}

.zen-light-orange {
	background-color: #fef5eb;
	color: #faa851 !important;
}

.zen-light-green {
	background-color: #e8f6e8;
	color: #44cf85 !important;
}

.zen-primary-outline::after {
	border: 1px solid #5677fc !important;
}

.zen-primary-outline {
	color: #5677fc !important;
	background-color: none;
}

.zen-danger-outline {
	color: #ed3f14 !important;
	background-color: none;
}

.zen-danger-outline::after {
	border: 1px solid #ed3f14 !important;
}

.zen-red-outline {
	color: #ff201f !important;
	background-color: none;
}

.zen-red-outline::after {
	border: 1px solid #ff201f !important;
}

.zen-warning-outline {
	color: #ff7900 !important;
	background-color: none;
}

.zen-warning-outline::after {
	border: 1px solid #ff7900 !important;
}

.zen-green-outline {
	color: #44cf85 !important;
	background-color: none;
}

.zen-green-outline::after {
	border: 1px solid #44cf85 !important;
}

.zen-high-green-outline {
	color: #52dcae !important;
	background-color: none;
}

.zen-high-green-outline::after {
	border: 1px solid #52dcae !important;
}

.zen-gray-outline {
	color: #999 !important;
	background-color: none;
}

.zen-gray-outline::after {
	border: 1px solid #ccc !important;
}

.zen-black-outline {
	color: #333 !important;
	background-color: none;
}

.zen-black-outline::after {
	border: 1px solid #333 !important;
}

.zen-white-outline {
	color: #fff !important;
	background-color: none;
}

.zen-white-outline::after {
	border: 1px solid #fff !important;
}

/* color end*/

/* tag start*/

.zen-tag {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 6rpx;
}

.zen-tag-outline {
	position: relative;
	background-color: none;
	color: #5677fc;
}

.zen-tag-outline::after {
	content: '';
	position: absolute;
	width: 200%;
	height: 200%;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transform: scale(0.5, 0.5);
	transform: scale(0.5, 0.5);
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	left: 0;
	top: 0;
	border-radius: 12rpx;
}

.zen-tag-fillet {
	border-radius: 50rpx;
}

.zen-white.zen-tag-fillet::after {
	border-radius: 80rpx;
}

.zen-tag-outline-fillet::after {
	border-radius: 80rpx;
}

.zen-tag-fillet-left {
	border-radius: 50rpx 0 0 50rpx;
}

.zen-tag-fillet-right {
	border-radius: 0 50rpx 50rpx 0;
}

.zen-tag-fillet-left.zen-tag-outline::after {
	border-radius: 100rpx 0 0 100rpx;
}

.zen-tag-fillet-right.zen-tag-outline::after {
	border-radius: 0 100rpx 100rpx 0;
}

/* tag end*/
.zen-origin-left {
	transform-origin: 0 center;
}
.zen-origin-right {
	transform-origin: 100% center;
}
.zen-tag-opcity {
	opacity: 0.5;
}
</style>
