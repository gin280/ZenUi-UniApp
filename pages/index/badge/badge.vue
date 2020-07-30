<template>
  <view>
    <zen-custom
      bgColor="bg-pink-100"
      :isBack="true"
    >
      <block slot="backText">返回</block>
      <block slot="content">Badge</block>
    </zen-custom>
	<view class="container">
		<view class="zen-title">无内容</view>
		<view class="zen-flex-box">
			<zen-badge margin="0 40rpx 0 0" dot></zen-badge>
			<zen-badge margin="0 40rpx 0 0" type="warning" dot></zen-badge>
			<zen-badge margin="0 40rpx 0 0" type="green" dot></zen-badge>
			<zen-badge margin="0 40rpx 0 0" type="danger" dot></zen-badge>
			<zen-badge margin="0 40rpx 0 0" type="white" dot></zen-badge>
			<zen-badge margin="0 40rpx 0 0" type="black" dot></zen-badge>
			<zen-badge margin="0 40rpx 0 0" type="gray" dot></zen-badge>
		</view>
		<view class="zen-title">无内容(放大)</view>
		<view class="zen-flex-box">
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="warning" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="green" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="danger" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="white" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="black" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="gray" dot></zen-badge>
			</view>
		</view>
		
		<view class="zen-title">无内容(缩小)</view>
		<view class="zen-flex-box">
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="warning" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="green" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="danger" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="white" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="black" dot></zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="gray" dot></zen-badge>
			</view>
		</view>

		<view class="zen-title">数字角标</view>
		<view class="zen-flex-box">
			<view class="zen-badge-box">
				<zen-badge>1</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge type="warning">2</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge type="green">3</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge type="danger">4</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge type="white">5</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge type="white_red">5</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge type="black">88</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge type="gray">99+</zen-badge>
			</view>
		</view>
		
		<view class="zen-title">数字角标(放大)</view>
		<view class="zen-flex-box">
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2">1</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="warning">2</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="green">3</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="danger">4</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="white">5</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="white_red">5</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="black">88</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="1.2" type="gray">99+</zen-badge>
			</view>
		</view>

        <view class="zen-title">数字角标(缩小)</view>
		<view class="zen-flex-box">
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8">1</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="warning">2</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="green">3</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="danger">4</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="white">5</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="white_red">5</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="black">88</zen-badge>
			</view>
			<view class="zen-badge-box">
				<zen-badge :scaleRatio="0.8" type="gray">99+</zen-badge>
			</view>
		</view>

		<view class="zen-title">绝对定位</view>

		<view class="zen-flex-box">
			<view class="zen-badge-item">
				<!-- <zen-icon name="message"></zen-icon> -->
				<view>box</view>
				<zen-badge type="danger" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</zen-badge>
			</view>
			<view class="zen-badge-item">
				<!-- <zen-icon name="message"></zen-icon> -->
				<view>box</view>
				<zen-badge type="red" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</zen-badge>
			</view>
			<view class="zen-badge-item">
				<!-- <zen-icon name="message"></zen-icon> -->
				<view>box</view>
				<zen-badge type="white_red" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</zen-badge>
			</view>
			
			<view class="zen-badge-item">
				<!-- <zen-icon name="message"></zen-icon> -->
				<view>box</view>
				<zen-badge type="danger" dot absolute top="4rpx"></zen-badge>
			</view>
		</view>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    };
  }
}
</script>

<style scoped lang="less">
.container {
  padding: 20rpx 30rpx 120rpx 30rpx;
  box-sizing: border-box;
}

.zen-title {
  padding: 30rpx 0;
  font-size: 32rpx;
  color: #333;
  font-weight: bold;
}

.zen-flex-box {
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 30rpx;
}

.zen-badge-box {
  padding-right: 40rpx;
}

.zen-badge-item {
  position: relative;
  margin-right: 80rpx;
}
</style>
