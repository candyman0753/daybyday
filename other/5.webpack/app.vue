<template>
  <div class="title">
    <g-title title="Vue工程化"></g-title>
    <g-button @on-click="handleClick">点击按钮</g-button>
    <img :src="img" alt="" style="width:200px" />
  </div>
</template>

<script>
import gButton from "./components/button.vue";
import gTitle from "./components/title.vue";
import demoImg from "./images/demo.jpg";
export default {
  components: {
    gButton,
    gTitle
  },
  data() {
    return {
      img: demoImg
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style scoped>
.title {
  color: #f60;
  font-size: 24px;
}
</style>
