<template>
  <div class="text-center backgound-image">
    <template v-if="loveLabels.data">
      <x-header :left-options="{showBack: false}" @header-background-color="'#fffff'">
        <div slot="left" class="header-left">
          <img src="../assets/icon/hart-message.png" />
        </div>
        <img class="hart" src="../assets/icon/hart.png" />
        <span>{{loveLabels.data.title}}</span>
      </x-header>
      <h2 class="time">
        <p class="lovers">
          {{loveLabels.data.boy}}
          <img class="hart" width="20px" src="../assets/icon/hart.png" />
          {{loveLabels.data.girl}}
        </p>
        {{time}}
        <span class="animated bounceInDown">{{seconds}}</span>
      </h2>
    </template>
    <tabbar>
      <tabbar-item>
        <div slot="label">
          <grid :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item v-for="labels in featuresLabels.data" :key="labels.key">
              <card>
                <div slot="content" class="card-content">
                  <img :src="labels.icon" />
                  <p class="features">{{labels.content}}</p>
                </div>
              </card>
            </grid-item>
          </grid>
        </div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Card } from "vux";
import { Grid, GridItem } from "vux";
import { Tabbar, TabbarItem } from "vux";
import { XImg } from "vux";
import { XHeader } from "vux";

export default {
  name: "Love",
  components: {
    Card,
    XHeader,
    Grid,
    XImg,
    Tabbar,
    TabbarItem,
    GridItem,
  },
  data() {
    return {
      loveLabels: {},
      featuresLabels: [],
      time: "",
      seconds: "",
    };
  },
  created: function () {
    this.$ajax.get(`src/assets/labels/features.json`).then((value) => {
      this.featuresLabels = value.data;
    });
    this.$ajax.get(`src/assets/labels/love.json`).then((value) => {
      this.loveLabels = value.data;
    });
  },
  mounted: function () {
    this.timer = setInterval(() => {
      const loveTime =
        Number(new Date().getTime()) - Number(new Date("2020-05-15").getTime());
      this.time = this.formatDuring(loveTime);
    }, 1000);
  },
  methods: {
    formatDuring(mss) {
      var days = parseInt(mss / (1000 * 60 * 60 * 24));
      var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = (mss % (1000 * 60)) / 1000;
      this.seconds = seconds.toFixed(0) + " 秒 ";
      return days + " 天 " + hours + " 小时 " + minutes + " 分钟 ";
    },
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除定时器
    }
  },
};
</script>

<style scoped>
/deep/.vux-header .vux-header-left,
.vux-header .vux-header-right {
  top: 6px;
}
.lovers {
  font-size: 14px;
}
.hart {
  vertical-align: middle;
}
.vux-header {
  background-color: transparent;
}
.features {
  bottom: 0;
  position: sticky;
}
.weui-panel {
  color: #000000;
}
.weui-tabbar {
  bottom: 15%;
  background-color: transparent;
}
.weui-tabbar:before {
  border-top: none;
}
.weui-panel {
  border-radius: 10px;
}
.card-content {
  padding-top: 10px;
  height: 70px;
}
.backgound-image {
  background: url(../assets/img/home-background.jpg) center center;
  background-size: cover;
  height: 100vh;
  color: #ffffff;
}
.time {
  padding-top: 40%;
}
.weui-grids:before {
  border-top: none;
}
.weui-grid:after {
  border-bottom: none;
}
</style>