<template>
  <view>
    <view
      class="z-99998 overflow-hidden fixed w-3-4 left-50 top-50 bg-white scale-0 transition-all duration-300 ease-in-out opacity-0 rounded-sm"
      :class="[show ? 'opacity-100' : '']"
    >
      <view class="text-center text-gray-200 px-2 py-4 box-border break-all" :style="{ fontSize: size + 'rpx', color: color }"><slot></slot></view>
      <view style="height: 90rpx; font-size: 32rpx;line-height: 32rpx;" class="w-full flex items-center justify-center bg-white box-border relative" :style="{ color: btnColor }" hover-class="bg-pink" :hover-stay-time="150" @tap.stop="handleClick">{{ btnText }}</view>
    </view> 
    <view style="background-color: rgba(0, 0, 0, 0.5);z-index: 99996;" class="fixed inset-0 transition-all duration-300 ease-in-out opacity-0 invisible" :class="[show ? 'opacity-100' : '']" @tap.stop="handleClickCancel"></view>
  </view>
</template>

<script>
export default {
  name: 'zenAlert',
  props: {
    //控制显示
    show: {
      type: Boolean,
      default: false
    },
    //提示信息字体大小
    size: {
      type: Number,
      default: 30
    },
    //提示信息字体颜色
    color: {
      type: String,
      default: '#333'
    },
    //按钮字体颜色
    btnColor: {
      type: String,
      default: '#EB0909'
    },
    btnText: {
      type: String,
      default: '确定'
    },
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      if (!this.show) return;
      this.$emit('click', {});
    },
    handleClickCancel() {
      if (!this.maskClosable) return;
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>

.zen-alert-btn::before {
  width: 100%;
  content: '';
  position: absolute;
  border-top: 1rpx solid #e0e0e0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  left: 0;
  top: 0;
}
</style>
