<template>
  <div id="login">
      123
    <x-button @click.native="handleClick">来吧，展示</x-button>
    <x-button @click.native="showPop">popup</x-button>
    <popup v-model="show">这是一个小死popup</popup>
  </div>
</template>

<script>
import { XButton } from 'vux'
import { Popup } from 'vux'

export default {
  components: {
    XButton,
    Popup
  },
  created: function() {
      console.log(this)
  },
  name: 'login',
  data () {
    return {
      show: false,
      test: '123'
    };
  },
  methods: {
    handleClick: function () {
      this.$router.push('/home')
    },
    showPop: function() {
        this.show = true;
    }
  }
};
</script>