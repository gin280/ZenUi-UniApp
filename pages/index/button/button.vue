<template>
  <view>
    <zen-custom
      bgColor="bg-blue-600"
      :isBack="true"
    >
      <block slot="backText">返回</block>
      <block slot="content">Button</block>
    </zen-custom>
	<view class="container">
		<view class="zen-title">默认按钮</view>
		<view class="zen-btn-box"><zen-button @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button disabled loading @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button disabled loading disabledGray>禁用背景为灰色</zen-button></view>
		<view class="zen-btn-box"><zen-button type="white" @click="detail">页面次要操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="white" disabled loading>页面次要操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button type="danger" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="danger" disabled loading>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button type="danger" disabled loading disabledGray>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button type="warning" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="warning" disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button type="green" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="green" disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button type="blue" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="blue" disabled>页面辅助操作 Disabled</zen-button></view>

		<view class="zen-btn-box"><zen-button type="gray" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="gray" disabled>页面辅助操作 Disabled</zen-button></view>

		<view class="zen-btn-box"><zen-button type="black" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="black" disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-title">空心按钮</view>
		<view class="zen-btn-box"><zen-button plain @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button plain disabled loading @click="detail">页面主操作</zen-button></view>
		<!-- <view class="zen-btn-box">
			<zen-button type="white" plain @click="detail">页面次要操作</zen-button>
		</view>
		<view class="zen-btn-box">
			<zen-button type="white" plain disabled loading >页面次要操作 Disabled</zen-button>
		</view> -->
		<view class="zen-btn-box"><zen-button type="danger" plain @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="danger" plain disabled loading>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button type="warning" plain @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="warning" plain disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button type="green" plain @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="green" plain disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button type="black" plain @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="black" plain disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-title">圆角按钮</view>
		<view class="zen-btn-box"><zen-button shape="circle" @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" disabled loading @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" disabled loading disabledGray>禁用背景为灰色</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="white" @click="detail">页面次要操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="white" disabled loading>页面次要操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="danger" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="danger" disabled loading>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="danger" disabled loading disabledGray>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="warning" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="warning" disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="green" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="green" disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="blue" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="blue" disabled>页面辅助操作 Disabled</zen-button></view>

		<view class="zen-btn-box"><zen-button shape="circle" type="gray" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="gray" disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="black" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="circle" type="black" disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-title">平角按钮</view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" disabled loading @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" disabled loading disabledGray>禁用背景为灰色</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" type="white" @click="detail">页面次要操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" type="white" disabled loading>页面次要操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" type="danger" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" type="danger" disabled loading>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" type="danger" disabled loading disabledGray>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" type="warning" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" type="warning" disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" type="green" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shape="rightAngle" type="green" disabled>页面辅助操作 Disabled</zen-button></view>

		<view class="zen-title">带阴影按钮</view>

		<view class="zen-btn-box"><zen-button shadow @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shadow disabled loading @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shadow type="danger" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shadow type="danger" disabled loading>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shadow type="warning" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shadow type="warning" disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-btn-box"><zen-button shadow type="green" @click="detail">页面辅助操作</zen-button></view>
		<view class="zen-btn-box"><zen-button shadow type="green" disabled>页面辅助操作 Disabled</zen-button></view>
		<view class="zen-title">渐变按钮</view>
		<view class="zen-btn-box"><zen-button type="gradual" @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="gradual" shadow @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button type="gradual" shadow disabled loading @click="detail">页面主操作</zen-button></view>

		<view class="zen-title">扩展色</view>
		<view class="zen-btn-box"><zen-button bold type="gray-primary" @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button bold type="gray-green" @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button bold type="gray-danger" @click="detail">页面主操作</zen-button></view>
		<view class="zen-btn-box"><zen-button bold type="gray-warning" @click="detail">页面主操作</zen-button></view>
		<view class="zen-title">自定义尺寸按钮</view>

		<view class="zen-flex-box">
			<zen-button margin="0 20rpx 26rpx 0" width="280rpx" height="90rpx" :size="32" @click="detail">页面主操作</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="danger" width="280rpx" height="90rpx" :size="32" @click="detail">辅助操作</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" width="280rpx" height="90rpx" :size="32" @click="detail">辅助操作</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" shape="circle" width="280rpx" height="90rpx" :size="32" @click="detail">辅助操作</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" plain width="280rpx" height="90rpx" :size="32" @click="detail">辅助操作</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" plain shape="circle" width="280rpx" height="90rpx" :size="32" @click="detail">辅助操作</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" width="200rpx" height="80rpx" :size="28" @click="detail">页面主操作</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="danger" width="200rpx" height="80rpx" :size="28" @click="detail">辅助操作</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" width="200rpx" height="80rpx" :size="28" @click="detail">辅助操作</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" width="160rpx" height="70rpx" :size="24" @click="detail">160*70</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="danger" width="160rpx" height="70rpx" :size="24" @click="detail">160*70</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" width="160rpx" height="70rpx" :size="24" @click="detail">160*70</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" width="140rpx" height="60rpx" :size="24" @click="detail">140*60</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="danger" width="140rpx" height="60rpx" :size="24" @click="detail">140*60</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" width="140rpx" height="60rpx" :size="24" @click="detail">140*60</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" width="100rpx" height="50rpx" :size="24" @click="detail">small</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="danger" width="100rpx" height="50rpx" :size="24" @click="detail">small</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" width="100rpx" height="50rpx" :size="24" @click="detail">small</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" shape="circle" width="100rpx" height="50rpx" :size="24" @click="detail">small</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" plain width="100rpx" height="50rpx" :size="24" @click="detail">small</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" plain shape="circle" width="100rpx" height="50rpx" :size="24" @click="detail">small</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" plain shape="rightAngle" width="100rpx" height="50rpx" :size="24" @click="detail">small</zen-button>
			<zen-button margin="0 20rpx 26rpx 0" type="green" shadow width="100rpx" height="50rpx" :size="24" @click="detail">small</zen-button>
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
    detail: function () {
      this.zen.toast('click~');
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
  padding: 30rpx 0;
  font-size: 32rpx;
  color: #333;
  font-weight: bold;
}

.zen-btn-box {
  margin-bottom: 26rpx;
}

.zen-flex-box {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
