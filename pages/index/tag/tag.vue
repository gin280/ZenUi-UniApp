<template>
  <view>
    <zen-custom
      bgColor="bg-red-400"
      :isBack="true"
    >
      <block slot="backText">返回</block>
      <block slot="content">Tag</block>
    </zen-custom>
	<view class="container">
		<view class="zen-title">
			实心标签
		</view>
		<view class="zen-flex-box">
			<zen-tag margin="20rpx 20rpx 0 0" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" type="black" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" type="white" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" type="danger" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" type="warning" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" type="green" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" type="btn-gray" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" type="light-blue" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" type="light-brownish" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" type="light-orange" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" type="light-green" @click="show">实心标签</zen-tag>
		</view>
		<view class="zen-title">
			设置大小
		</view>
		<view class="zen-flex-box">
			<zen-tag margin="20rpx 20rpx 0 0" padding="12rpx" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" padding="12rpx" type="black" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" padding="12rpx" type="white" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" padding="12rpx" type="danger" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" padding="20rpx 30rpx" type="warning" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" padding="20rpx 30rpx" type="green" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" padding="20rpx 30rpx" type="btn-gray" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" padding="8rpx" size="24rpx" type="light-blue" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" padding="8rpx" size="24rpx" type="light-brownish" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" padding="8rpx" size="24rpx" type="light-orange" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" padding="8rpx" size="24rpx" type="light-green" @click="show">实心标签</zen-tag>
		</view>
		<view class="zen-title">
			空心标签
		</view>
		<view class="zen-flex-box">
			<zen-tag margin="20rpx 20rpx 0 0" plain @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" plain type="black" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" plain type="white" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" plain type="danger" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" plain type="warning" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" plain type="green" @click="show">空心标签</zen-tag>
		</view>

		<view class="zen-title">圆角标签</view>
		<view class="zen-flex-box">
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" type="black" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" type="white" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" type="danger" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" type="warning" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" type="green" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" type="btn-gray" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" type="light-blue" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" type="light-brownish" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" type="light-orange" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" type="light-green" @click="show">实心标签</zen-tag>
			
		</view>
		
		<view class="zen-flex-box">
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" plain @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" plain type="black" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" plain type="white" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" plain type="danger" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" plain type="warning" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circle" plain type="green" @click="show">空心标签</zen-tag>
		</view>
		
		<view class="zen-title">
			半圆角标签
		</view>
		<view class="zen-flex-box">
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" type="black" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" type="white" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" type="danger" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" type="warning" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" type="green" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" type="btn-gray" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" type="light-blue" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" type="light-brownish" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" type="light-orange" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" type="light-green" @click="show">实心标签</zen-tag>
		</view>
		<view class="zen-flex-box">
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" plain @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" plain type="black" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" plain type="white" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" plain type="danger" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" plain type="warning" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleLeft" plain type="green" @click="show">空心标签</zen-tag>
		</view>
		<view class="zen-flex-box">
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" type="black" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" type="white" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" type="danger" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" type="warning" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" type="green" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" type="btn-gray" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" type="light-blue" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" type="light-brownish" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" type="light-orange" @click="show">实心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" type="light-green" @click="show">实心标签</zen-tag>
		</view>
		<view class="zen-flex-box">
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" plain @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" plain type="black" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" plain type="white" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" plain type="danger" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" plain type="warning" @click="show">空心标签</zen-tag>
			<zen-tag margin="20rpx 20rpx 0 0" shape="circleRight" plain type="green" @click="show">空心标签</zen-tag>
		</view>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    show() {
      this.zen.toast("click~")
    }
  }
}
</script>

<style lang="less">
.container {
  padding: 20rpx 30rpx 40rpx 30rpx;
  box-sizing: border-box;
}

.zen-title {
  padding: 30rpx 0 20rpx;
  font-size: 32rpx;
  color: #333;
  font-weight: bold;
}

.zen-flex-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 26rpx;
}
</style>
