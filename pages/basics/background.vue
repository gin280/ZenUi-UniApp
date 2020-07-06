<template>
  <view>
    <zen-custom
      bgColor="bg-green-900"
      :isBack="true"
    >
      <block slot="backText">返回</block>
      <block slot="content">背景</block>
    </zen-custom>
    <view
      :key="index"
      v-for="(i, index) of bgColorList"
    >
      <view v-if="i.range">
        <view
          :class="'bg-' + i.name + '-' + (idx + 1) * 100"
          :key="idx"
          v-for="(j, idx) of i.range"
        >
          .bg-{{i.name}}-{{(idx + 1) * 100}}
        </view>
      </view>
      <view
        v-else
        :class="'bg-' + i.name"
      >
        .bg-{{i.name}}
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
    bgColorList() {
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