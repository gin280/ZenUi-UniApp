<template>
	<button class="zen-btn" :class="[
			plain ? 'zen-' + type + '-outline' : 'zen-btn-' + (type || 'primary'),
			getDisabledClass(disabled, type, plain),
			getShapeClass(shape, plain),
			getShadowClass(type, shadow, plain)
		]"
	 :hover-class="getHoverClass(disabled, type, plain)" :style="{ width: width, height: height, lineHeight: height, fontSize: size + 'rpx',margin:margin }"
	 :loading="loading" :open-type="openType" @getuserinfo="bindgetuserinfo" :disabled="disabled" @tap="handleClick">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: 'zenButton',
		props: {
			//样式类型 primary, white, danger, warning, green,blue, gray，black
			type: {
				type: String,
				default: 'primary'
			},
			//是否加阴影
			shadow: {
				type: Boolean,
				default: false
			},
			// 宽度 rpx或 %
			width: {
				type: String,
				default: '100%'
			},
			//高度 rpx
			height: {
				type: String,
				default: '96rpx'
			},
			//字体大小 rpx
			size: {
				type: Number,
				default: 32
			},
			margin: {
				type: String,
				default: "0"
			},
			//形状 circle(圆角), square(默认方形)，rightAngle(平角)
			shape: {
				type: String,
				default: 'square'
			},
			plain: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			//禁用后背景是否为灰色 （非空心button生效）
			disabledGray: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			openType: {
				type: String,
				default: ''
			},
			index: {
				type: [Number, String],
				default: 0
			}
		},
		methods: {
			handleClick() {
				if (this.disabled) return false;
				this.$emit('click', {
					index: Number(this.index)
				});
			},
			bindgetuserinfo({
				detail = {}
			} = {}) {
				this.$emit('getuserinfo', detail);
			},
			getShadowClass: function(type, shadow, plain) {
				let className = '';
				if (shadow && type != 'white' && !plain) {
					className = 'zen-shadow-' + type;
				}
				return className;
			},
			getDisabledClass: function(disabled, type, plain) {
				let className = '';
				if (disabled && type != 'white') {
					let classVal = this.disabledGray ? 'zen-gray-disabled' : 'zen-dark-disabled';
					className = plain ? 'zen-dark-disabled-outline' : classVal;
				}
				return className;
			},
			getShapeClass: function(shape, plain) {
				let className = '';
				if (shape == 'circle') {
					className = plain ? 'zen-outline-fillet' : 'zen-fillet';
				} else if (shape == 'rightAngle') {
					className = plain ? 'zen-outline-rightAngle' : 'zen-rightAngle';
				}
				return className;
			},
			getHoverClass: function(disabled, type, plain) {
				let className = '';
				if (!disabled) {
					className = plain ? 'zen-outline-hover' : 'zen-' + (type || 'primary') + '-hover';
				}
				return className;
			}
		}
	};
</script>

<style scoped>
	.zen-btn-primary {
		background: #5677fc !important;
		color: #fff;
	}

	.zen-shadow-primary {
		box-shadow: 0 10rpx 14rpx 0 rgba(86, 119, 252, 0.2);
	}

	.zen-btn-danger {
		background: #eb0909 !important;
		color: #fff;
	}

	.zen-shadow-danger {
		box-shadow: 0 10rpx 14rpx 0 rgba(235, 9, 9, 0.2);
	}

	.zen-btn-warning {
		background: #fc872d !important;
		color: #fff;
	}

	.zen-shadow-warning {
		box-shadow: 0 10rpx 14rpx 0 rgba(252, 135, 45, 0.2);
	}

	.zen-btn-green {
		background: #35b06a !important;
		color: #fff;
	}

	.zen-shadow-green {
		box-shadow: 0 10rpx 14rpx 0 rgba(53, 176, 106, 0.2);
	}

	.zen-btn-blue {
		background: #007AFF !important;
		color: #fff;
	}

	.zen-shadow-blue {
		box-shadow: 0 10rpx 14rpx 0 rgba(0, 122, 255, 0.2);
	}

	.zen-btn-white {
		background: #fff !important;
		color: #333 !important;
	}

	.zen-btn-gray {
		background: #bfbfbf !important;
		color: #fff !important;
	}

	.zen-btn-black {
		background: #333 !important;
		color: #fff !important;
	}

	.zen-shadow-gray {
		box-shadow: 0 10rpx 14rpx 0 rgba(191, 191, 191, 0.2);
	}

	.zen-hover-gray {
		background: #f7f7f9 !important;
	}

	.zen-black-hover {
		background: #555 !important;
		color: #e5e5e5 !important;
	}

	/* button start*/

	.zen-btn {
		width: 100%;
		position: relative;
		border: 0 !important;
		border-radius: 6rpx;
		padding-left: 0;
		padding-right: 0;
		overflow: visible;
	}

	.zen-btn::after {
		content: '';
		position: absolute;
		width: 200%;
		height: 200%;
		transform-origin: 0 0;
		transform: scale(0.5, 0.5) translateZ(0);
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 12rpx;
		border: 0;
	}

	.zen-btn-white::after {
		border: 1rpx solid #bfbfbf;
	}

	.zen-white-hover {
		background: #e5e5e5 !important;
		color: #2e2e2e !important;
	}

	.zen-dark-disabled {
		opacity: 0.6 !important;
		color: #fafbfc !important;
	}

	.zen-dark-disabled-outline {
		opacity: 0.5 !important;
	}

	.zen-gray-disabled {
		background: #f3f3f3 !important;
		color: #919191 !important;
		box-shadow: none;
	}

	.zen-outline-hover {
		opacity: 0.5;
	}

	.zen-primary-hover {
		background: #4a67d6 !important;
		color: #e5e5e5 !important;
	}

	.zen-primary-outline::after {
		border: 1rpx solid #5677fc !important;
	}

	.zen-primary-outline {
		color: #5677fc !important;
		background: transparent;
	}

	.zen-danger-hover {
		background: #c80808 !important;
		color: #e5e5e5 !important;
	}

	.zen-danger-outline {
		color: #eb0909 !important;
		background: transparent;
	}

	.zen-danger-outline::after {
		border: 1rpx solid #eb0909 !important;
	}

	.zen-warning-hover {
		background: #d67326 !important;
		color: #e5e5e5 !important;
	}

	.zen-warning-outline {
		color: #fc872d !important;
		background: transparent;
	}

	.zen-warning-outline::after {
		border: 1px solid #fc872d !important;
	}

	.zen-green-hover {
		background: #2d965a !important;
		color: #e5e5e5 !important;
	}

	.zen-green-outline {
		color: #35b06a !important;
		background: transparent;
	}

	.zen-green-outline::after {
		border: 1rpx solid #35b06a !important;
	}

	.zen-blue-hover {
		background: #0062CC !important;
		color: #e5e5e5 !important;
	}

	.zen-blue-outline {
		color: #007AFF !important;
		background: transparent;
	}

	.zen-blue-outline::after {
		border: 1rpx solid #007AFF !important;
	}

	/* #ifndef APP-NVUE */
	.zen-btn-gradual {
		background: linear-gradient(90deg, rgb(255, 89, 38), rgb(240, 14, 44)) !important;
		color: #fff !important;
	}

	.zen-shadow-gradual {
		box-shadow: 0 10rpx 14rpx 0 rgba(235, 9, 9, 0.15);
	}

	/* #endif */

	.zen-gray-hover {
		background: #a3a3a3 !important;
		color: #898989;
	}

	/* #ifndef APP-NVUE */
	.zen-gradual-hover {
		background: linear-gradient(90deg, #d74620, #cd1225) !important;
		color: #fff !important;
	}

	/* #endif */

	.zen-gray-outline {
		color: #999 !important;
		background: transparent !important;
	}

	.zen-white-outline {
		color: #fff !important;
		background: transparent !important;
	}

	.zen-black-outline {
		background: transparent !important;
		color: #333 !important;
	}

	.zen-gray-outline::after {
		border: 1rpx solid #ccc !important;
	}

	.zen-white-outline::after {
		border: 1px solid #fff !important;
	}

	.zen-black-outline::after {
		border: 1px solid #333 !important;
	}

	/*圆角 */

	.zen-fillet {
		border-radius: 50rpx;
	}

	.zen-btn-white.zen-fillet::after {
		border-radius: 98rpx;
	}

	.zen-outline-fillet::after {
		border-radius: 98rpx;
	}

	/*平角*/
	.zen-rightAngle {
		border-radius: 0;
	}

	.zen-btn-white.zen-rightAngle::after {
		border-radius: 0;
	}

	.zen-outline-rightAngle::after {
		border-radius: 0;
	}
</style>
