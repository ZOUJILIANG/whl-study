<template>
  <div id="tab">
    <love v-if="showTab === 'love'"></love>
    <tabbar>
      <tabbar-item
        v-for="labels in tabLabels.data"
        :key="labels.key"
        :selected="labels.key === 'love'"
        @on-item-click="showTab = labels.key"
      >
        <img slot="icon" :src="labels.icon" />
        <span slot="label">{{labels.content}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";
import Love from "./love";
export default {
  name: "tab",
  components: {
    Love,
    Tabbar,
    TabbarItem,
  },
  created: function () {
    this.$ajax.get(`src/assets/labels/tab.json`).then((value) => {
      this.tabLabels = value.data;
    });
  },
  data() {
    return {
      showTab: "love",
      tabLabels: [],
    };
  },
  methods: {
    handler(event) {
      console.log(event);
    },
  },
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
</style>
