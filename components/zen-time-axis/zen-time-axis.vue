<template>
	<view class="zen-timeaxis-class zen-time-axis">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"zenTimeAxis",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.zen-time-axis {
		padding-left: 20px;
		box-sizing: border-box;
		position: relative;
	}

	.zen-time-axis::before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		width: 1px;
		bottom: 0;
		border-left: 1px solid #ddd;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleX(0.5);
		transform: scaleX(0.5);
	}
</style>
