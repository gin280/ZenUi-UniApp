<template>
  <view>
    <zen-custom
      bgColor="bg-pink-100"
      :isBack="true"
    >
      <block slot="backText">返回</block>
      <block slot="content">Loading</block>
    </zen-custom>
	<view class="container">
		<view class="zen-header">
			<view class="zen-title">Loading</view>
			<view class="zen-sub-title">加载中...</view>
		</view>

		<!--正在加载 start-->
		<zen-loadmore></zen-loadmore>
		<!--正在加载 end-->

		<!--正在加载 start-->
		<zen-loadmore :index="2"></zen-loadmore>
		<!--正在加载 end-->
		<!--正在加载 start-->
		<zen-loadmore :index="3"></zen-loadmore>
		<zen-loadmore :index="3" type="primary"></zen-loadmore>
		<zen-loadmore :index="3" type="red"></zen-loadmore>
		<zen-loadmore :index="3" type="orange"></zen-loadmore>
		<zen-loadmore :index="3" type="green"></zen-loadmore>
		<!--正在加载 end-->
		<!--没有更多了 start-->
		<zen-nomore></zen-nomore>
		<zen-divider>我是有底线的</zen-divider>
		<zen-nomore text="NO MORE"></zen-nomore>
		<zen-divider>NO MORE</zen-divider>
		<zen-divider width="60%" dividerColor="#f00" color="#f00">NO MORE</zen-divider>
		<!--没有更多了 end-->
		<!--没有更多了 start-->
		<zen-nomore :isDot="true"></zen-nomore>
		<!--没有更多了 end-->

		<!--加载框 start-->
		<zen-loading></zen-loading>
		<!--加载框 end-->

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

<style lang="less">
.container {
  padding: 20rpx 30rpx 40rpx 30rpx;
  box-sizing: border-box;
}

.zen-header {
  padding: 80rpx 60rpx 50rpx 60rpx;
}

.zen-title {
  font-size: 36rpx;
  color: #333;
  font-weight: bold;
}

.zen-sub-title {
  font-size: 28rpx;
  color: #7a7a7a;
  padding-top: 18rpx;
}
</style>
