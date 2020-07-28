<template>
	<view
		:class="[dot ? 'zen-badge-dot' : 'zen-badge', 'zen-' + type, !dot ? 'zen-badge-scale' : '']"
		:style="{ top: top, right: right, position: absolute ? 'absolute' : 'static', transform: getStyle, margin: margin }"
		@tap="handleClick"
	>
		<slot></slot>
	</view>
</template>

<script>
export default {
	name: 'zenBadge',
	props: {
		//primary,warning,green,danger,white，black，gray,white_red
		type: {
			type: String,
			default: 'primary'
		},
		//是否是圆点
		dot: {
			type: Boolean,
			default: false
		},
		margin: {
			type: String,
			default: '0'
		},
		//是否绝对定位
		absolute: {
			type: Boolean,
			default: false
		},
		top: {
			type: String,
			default: '-8rpx'
		},
		right: {
			type: String,
			default: '0'
		},
		//缩放比例
		scaleRatio: {
			type: Number,
			default: 1
		},
		//水平方向移动距离
		translateX: {
			type: String,
			default: '0'
		}
	},
	computed: {
		getStyle() {
			return `scale(${this.scaleRatio}) translateX(${this.translateX})`;
		}
	},
	methods: {
		handleClick() {
			this.$emit('click', {});
		}
	}
};
</script>

<style scoped>
/* color start*/

.zen-primary {
	background-color: #5677fc;
	color: #fff;
}

.zen-danger {
	background-color: #ed3f14;
	color: #fff;
}

.zen-red {
	background-color: #F74D54;
	color: #fff;
}

.zen-warning {
	background-color: #ff7900;
	color: #fff;
}

.zen-green {
	background-color: #19be6b;
	color: #fff;
}

.zen-white {
	background-color: #fff;
	color: #333;
}

.zen-white_red {
	background-color: #fff;
	color: #F74D54;
}
.zen-white_primary {
	background-color: #fff;
	color: #5677fc;
}
.zen-white_green {
	background-color: #fff;
	color: #19be6b;
}
.zen-white_warning {
	background-color: #fff;
	color: #ff7900;
}

.zen-black {
	background-color: #000;
	color: #fff;
}

.zen-gray {
	background-color: #ededed;
	color: #999;
}

/* color end*/

/* badge start*/

.zen-badge-dot {
	height: 16rpx;
	width: 16rpx;
	border-radius: 50%;
}

.zen-badge {
	font-size: 24rpx;
	height: 36rpx;
	min-width: 12rpx;
	padding: 0 12rpx;
	border-radius: 36rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
}

.zen-badge-scale {
	transform-origin: center center;
}

/* badge end*/
</style>
