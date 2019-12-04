<template>
  <div>
    <h1>首页</h1>
    <div>state：{{ count }}</div>
    <div>
      mutations:
      <button @click="increment">+1</button>
      <button @click="decrease">-1</button>
    </div>
    <div>
      actions:
      <button @click="randomCount">random</button>
    </div>
    <div>getters: {{ smallList }}</div>
    <div>modules: {{ countA }}</div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$store.getters);
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    smallList() {
      return this.$store.getters.smallList;
    },
    countA() {
      return this.$store.getters["a/totalCount"];
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrease() {
      this.$store.commit("decrease");
    },
    async randomCount() {
      try {
        const res = await this.$store.dispatch("randomCount");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
