<template>
  <view>
    <zen-custom bgColor="bg-pink-900" :isBack="true">
      <block slot="backText">返回</block>
      <block slot="content">Color</block>
    </zen-custom>
    <view class="container">
      <view class="title">主色</view>
      <view class="box">
        <view class="item bg-pink-900">
          <view>primary</view>
          <view class="color">#5677fc</view>
        </view>
        <view class="item bg-pink-900">
          <view>light primary</view>
          <view class="color">#5c8dff</view>
        </view>
        <view class="item bg-pink-900">
          <view>dark primary</view>
          <view class="color">#4a67d6</view>
        </view>
        <view class="item bg-pink-900">
          <view>dark light primary</view>
          <view class="color">#4e77d9</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
.container {
  padding: 30rpx;
  box-sizing: border-box;
}

.title {
  padding: 30rpx 0;
  font-size: 32rpx;
  color: #333;
  font-weight: bold;
}

.box {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.item {
  width: 48%;
  padding: 30rpx 24rpx;
  box-sizing: border-box;
  border-radius: 8rpx;
  color: #fff;
  margin-bottom: 30rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 30rpx;
}

.color {
  padding-top: 24rpx;
}

.gray {
  color: #999 !important;
}
</style>
