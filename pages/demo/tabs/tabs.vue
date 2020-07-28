<template>
	<view class="container">
    <zen-custom
      bgColor="bg-pink-900"
      :isBack="true"
    >
      <block slot="backText">返回</block>
      <block slot="content">tabs</block>
    </zen-custom>
		<zen-tabs :tabs="tabs3" :isFixed="true" :currentTab="currentTab" @change="change" bottom="50%" :backgroundColor="backgroundColor"
		 color="#fff" selectedColor="#EB0909" :sliderWidth="146" :sliderHeight="52" sliderBgColor="#fff" :unlined="true"></zen-tabs>
		<view class="header">
			<view class="title">tabs</view>
			<view class="sub-title">tabs标签页，支持自定义设置，具体查看文档。暂不支持超出一屏，滚动标签页 <text class="zen-primary" @tap="goNavBar">参考这里</text>。
			</view>
		</view>
		<zen-tabs :tabs="navbar" :currentTab="currentTab>1?0:currentTab" @change="change" itemWidth="50%"></zen-tabs>
		<view class="zen-mtop">
			<zen-tabs :tabs="tabs" :currentTab="currentTab>2?0:currentTab" @change="change" itemWidth="33.3333%"></zen-tabs>
		</view>
		<view class="zen-mtop">
			<zen-tabs :tabs="tabs2" :currentTab="currentTab" selectedColor="#EB0909" sliderBgColor="#EB0909" @change="change"></zen-tabs>
		</view>
		<view class="zen-mtop">
			<zen-tabs :tabs="tabs2" :height="88" :currentTab="currentTab" :sliderWidth="150" :sliderHeight="60" bottom="50%"
			 color="#888" selectedColor="#11CDFC" :bold="true" sliderBgColor="#E5FAFF" @change="change"></zen-tabs>
		</view>
	</view>
</template>

<script> 
	export default {
		data() {
			return {
				currentTab: 0,
				backgroundColor: "linear-gradient(90deg, rgb(255, 118, 38), rgb(252, 30, 82))",
				navbar: [{
					name: "正在疯抢"
				}, {
					name: "即将开始"
				}],
				tabs: [{
					name: "正在疯抢"
				}, {
					name: "即将开始"
				}, {
					name: "明日预告"
				}],
				tabs2: [{
					name: "今日特拼"
				}, {
					name: "全部"
				}, {
					name: "新品"
				}, {
					name: "禁用状态",
					disabled: true
				}],
				tabs3: [{
					name: "今日特拼"
				}, {
					name: "全部"
				}, {
					name: "新品"
				}, {
					name: "品牌"
				}]
			}
		},
		methods: {
			change(e) {
				this.currentTab = e.index
			},
			goNavBar() {
				uni.navigateTo({
					url: "/pages/index/navbar/navbar"
				})
			}

		}
	}
</script>

<style>
	.container {
		padding: 40rpx 0 120rpx 0;
		box-sizing: border-box;
	}

	.header {
		padding: 80rpx 90rpx 60rpx 90rpx;
		box-sizing: border-box;
	}

	.title {
		font-size: 34rpx;
		color: #333;
		font-weight: 500;
	}

	.sub-title {
		font-size: 24rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}

	.zen-primary {
		color: #5677FC;
	}

	.zen-mtop {
		margin-top: 80rpx;
	}
</style>
