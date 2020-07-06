<template>
  <view>
    <zen-custom
      bgColor="bg-pink-900"
      :isBack="true"
    >
      <block slot="backText">返回</block>
      <block slot="content">文本</block>
    </zen-custom>
    <view>
      <view>文本大小</view>
      <p class="text-xs">text-xs</p>
      <p class="text-sm">text-sm</p>
      <p class="text-base">text-base</p>
      <p class="text-lg">text-lg</p>
      <p class="text-xl">text-xl</p>
      <p class="text-2xl">text-2xl</p>
      <p class="text-3xl">text-3xl</p>
      <p class="text-4xl">text-4xl</p>
      <p class="text-5xl">text-5xl</p>
      <p class="text-6xl">text-6xl</p>
    </view>
    <view>
      <view>文本样式</view>
      <p class="not-italic">not-italic</p>
      <p class="italic">italic</p>
    </view>
    <view>
      <view>文本粗细</view>
      <p class="font-hairline">font-hairline</p>
      <p class="font-thin">font-thin</p>
      <p class="font-light">font-light</p>
      <p class="font-normal">font-normal</p>
      <p class="font-medium">font-medium</p>
      <p class="font-semibold">font-semibold</p>
      <p class="font-bold">font-bold</p>
      <p class="font-extrabold">font-extrabold</p>
      <p class="font-black">font-black</p>
    </view>
    <view>
      <view>字母间距</view>
      <p class="tracking-tighter">tracking-tighter</p>
      <p class="tracking-tight">tracking-tight</p>
      <p class="tracking-normal">tracking-normal</p>
      <p class="tracking-wide">tracking-wide</p>
      <p class="tracking-wider">tracking-wider</p>
      <p class="tracking-widest">tracking-widest</p>
    </view>
    <view>
      <view>行高</view>
      <view>相对于当前字体大小</view>
      <p class="leading-none">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-tight">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-snug">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-normal">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-relaxed">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-loose">Lorem ipsum dolor sit amet ...</p>
      <view>不相对于当前字体大小</view>
      <p class="leading-3">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-4">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-5">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-6">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-7">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-8">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-9">Lorem ipsum dolor sit amet ...</p>
      <p class="leading-10">Lorem ipsum dolor sit amet ...</p>
    </view>
    <view>
      <view>列表样式类型</view>
      <ul class="list-disc">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
      </ul>
      <ol class="list-decimal">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
      </ol>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
      </ul>
    </view>
    <view>
      <view>文本对齐</view>
      <p class="text-left">Lorem ipsum dolor sit amet ...</p>
      <p class="text-center">Lorem ipsum dolor sit amet ...</p>
      <p class="text-right">Lorem ipsum dolor sit amet ...</p>
      <p class="text-justify">Lorem ipsum dolor sit amet ...</p>
    </view>
    <view>
      <view>文本颜色</view>
      <view
        :key="index"
        v-for="(i, index) of textColorList"
      >
        <view v-if="i.range">
          <view
            :class="'text-' + i.name + '-' + (idx + 1) * 100"
            :key="idx"
            v-for="(j, idx) of i.range"
          >
            .text-{{i.name}}-{{(idx + 1) * 100}}
          </view>
        </view>
        <view
          v-else
          :class="'text-' + i.name"
        >
          .text-{{i.name}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    textColorList() {
      let list = [
        { name: 'transparent', range: 0 },
        { name: 'current', range: 0 },
        { name: 'black', range: 0 },
        { name: 'white', range: 0 },
        { name: 'gray', range: 9 },
        { name: 'red', range: 9 },
        { name: 'orange', range: 9 },
        { name: 'yellow', range: 9 },
        { name: 'green', range: 9 },
        { name: 'teal', range: 9 },
        { name: 'blue', range: 9 },
        { name: 'indigo', range: 9 },
        { name: 'purple', range: 9 },
        { name: 'pink', range: 9 },
      ]
      return list
    }
  }
}
</script>

<style>
</style>